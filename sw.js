const CACHE_VERSION = 'v10.1';
const CACHE_NAME = `profbt-${CACHE_VERSION}`;
const STATIC_CACHE = `static-${CACHE_VERSION}`;
const DYNAMIC_CACHE = `dynamic-${CACHE_VERSION}`;
const IMAGE_CACHE = `image-${CACHE_VERSION}`;

// Limites e políticas de cache
const CACHE_LIMITS = {
    dynamic: 50,    // máximo de entradas no dynamic cache
    images: 30      // máximo de imagens em cache
};

const STATIC_ASSETS = [
    '/',
    '/index.html',
    '/styles.css',
    '/app.js',
    '/manifest.json'
];

// URLs externas essenciais (CDNs)
const EXTERNAL_CDN = [
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',
    'https://fonts.googleapis.com/css2',
    'https://cdn.jsdelivr.net/npm/simple-icons'
];

// Padrões de recursos que devem ser cacheados
const PATTERNS = {
    images: /\.(png|jpe?g|gif|svg|webp|ico)$/i,
    fonts: /\.(woff2?|ttf|otf|eot)$/i,
    cdn: /cdn\.jsdelivr\.net|cdnjs\.cloudflare\.com|fonts\.googleapis\.com/i
};

// ============ INSTALAÇÃO ============
self.addEventListener('install', (event) => {
    console.log(`[SW] Installing ${CACHE_NAME}`);
    event.waitUntil(
        caches.open(STATIC_CACHE)
            .then(cache => cache.addAll(STATIC_ASSETS))
            .then(() => self.skipWaiting())
            .catch(err => console.warn('[SW] Install cache failed:', err))
    );
});

// ============ ATIVAÇÃO E LIMPEZA ============
self.addEventListener('activate', (event) => {
    console.log(`[SW] Activating ${CACHE_NAME}`);
    event.waitUntil(
        Promise.all([
            // Limpar caches de versões antigas
            caches.keys().then(keys =>
                Promise.all(
                    keys
                        .filter(key => !key.includes(CACHE_VERSION))
                        .map(key => {
                            console.log(`[SW] Deleting old cache: ${key}`);
                            return caches.delete(key);
                        })
                )
            ),
            // Assumir controle imediato dos clientes
            self.clients.claim()
        ])
    );
});

// ============ ESTRATÉGIAS DE FETCH ============
self.addEventListener('fetch', (event) => {
    const { request } = event;
    const url = new URL(request.url);

    // Ignorar requisições não-http e métodos não-GET
    if (!url.protocol.startsWith('http') || request.method !== 'GET') return;

    // Navegação: Network First com fallback
    if (request.mode === 'navigate') {
        event.respondWith(networkFirst(request, '/index.html'));
        return;
    }

    // CDNs externos: Stale-While-Revalidate
    if (PATTERNS.cdn.test(url.hostname)) {
        event.respondWith(staleWhileRevalidate(request));
        return;
    }

    // Imagens: Cache First com fallback e limite
    if (PATTERNS.images.test(url.pathname)) {
        event.respondWith(cacheFirstWithLimit(request, IMAGE_CACHE));
        return;
    }

    // Demais recursos: Stale-While-Revalidate com dynamic cache
    event.respondWith(staleWhileRevalidate(request, DYNAMIC_CACHE));
});

// ============ ESTRATÉGIAS ============

// Network First: tenta rede, fallback para cache
async function networkFirst(request, fallbackUrl) {
    try {
        const response = await fetch(request);
        if (response.ok) {
            const cache = await caches.open(STATIC_CACHE);
            await cache.put(request, response.clone());
        }
        return response;
    } catch (err) {
        const cached = await caches.match(request);
        return cached || caches.match(fallbackUrl);
    }
}

// Stale-While-Revalidate: retorna cache, atualiza em background
async function staleWhileRevalidate(request, cacheName = DYNAMIC_CACHE) {
    const cached = await caches.match(request);
    
    const fetchPromise = fetch(request)
        .then(response => {
            if (response.ok) {
                caches.open(cacheName).then(cache => {
                    cache.put(request, response.clone());
                    // Limitar tamanho do cache
                    limitCache(cacheName);
                });
            }
            return response;
        })
        .catch(() => cached);

    return cached || fetchPromise;
}

// Cache First com limite de entradas
async function cacheFirstWithLimit(request, cacheName) {
    const cached = await caches.match(request);
    if (cached) return cached;

    try {
        const response = await fetch(request);
        if (response.ok) {
            const cache = await caches.open(cacheName);
            await cache.put(request, response.clone());
            await limitCache(cacheName, IMAGE_CACHE);
        }
        return response;
    } catch (err) {
        // Fallback para placeholder ou resposta vazia
        return new Response('', { status: 404 });
    }
}

// Limitar número de entradas no cache
async function limitCache(cacheName, limit = CACHE_LIMITS.dynamic) {
    try {
        const cache = await caches.open(cacheName);
        const keys = await cache.keys();
        if (keys.length > limit) {
            // Remover os mais antigos (primeiros da lista)
            const toDelete = keys.slice(0, keys.length - limit);
            await Promise.all(toDelete.map(key => cache.delete(key)));
            console.log(`[SW] Cache ${cacheName} trimmed to ${limit} entries`);
        }
    } catch (err) {
        console.warn('[SW] Cache limit failed:', err);
    }
}

// ============ COMUNICAÇÃO COM O CLIENT ============
self.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
        self.skipWaiting();
    }
    if (event.data && event.data.type === 'CACHE_STATUS') {
        // Reportar status do cache para o cliente
        caches.keys().then(keys => {
            event.source.postMessage({
                type: 'CACHE_STATUS',
                caches: keys,
                version: CACHE_NAME
            });
        });
    }
});
