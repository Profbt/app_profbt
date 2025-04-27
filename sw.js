const CACHE_NAME = 'profbt-v1';
const STATIC_CACHE = 'static-cache-v1';
const DYNAMIC_CACHE = 'dynamic-cache-v1';

const STATIC_RESOURCES = [
    '/',
    '/index.html',
    '/offline.html',
    '/styles.css',
    '/app.js',
    '/manifest.json',
    '/assets/logos/vr2.png',
    '/assets/logos/alura.png',
    '/assets/logos/quizziz.png',
    '/assets/logos/112.png'
];

const EXTERNAL_RESOURCES = [
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',
    'https://unpkg.com/aos@next/dist/aos.css',
    'https://unpkg.com/aos@next/dist/aos.js'
];

// Instalação do Service Worker
self.addEventListener('install', (event) => {
    event.waitUntil(
        Promise.all([
            // Cache recursos estáticos
            caches.open(STATIC_CACHE).then(cache => {
                console.log('Caching static resources');
                return cache.addAll(STATIC_RESOURCES);
            }),
            // Cache recursos externos
            caches.open(DYNAMIC_CACHE).then(cache => {
                console.log('Caching external resources');
                return cache.addAll(EXTERNAL_RESOURCES);
            })
        ])
        .then(() => self.skipWaiting()) // Força ativação imediata
    );
});

// Ativação e limpeza de caches antigos
self.addEventListener('activate', (event) => {
    event.waitUntil(
        Promise.all([
            // Limpa caches antigos
            caches.keys().then(cacheNames => {
                return Promise.all(
                    cacheNames.map(cacheName => {
                        if (![STATIC_CACHE, DYNAMIC_CACHE].includes(cacheName)) {
                            console.log('Deleting old cache:', cacheName);
                            return caches.delete(cacheName);
                        }
                    })
                );
            }),
            // Toma controle de clientes não controlados
            self.clients.claim()
        ])
    );
});

// Estratégia de cache: Network First para recursos dinâmicos, Cache First para estáticos
self.addEventListener('fetch', (event) => {
    const url = new URL(event.request.url);
    
    // Ignora requisições para chrome-extension
    if (url.protocol === 'chrome-extension:') return;

    // Estratégia baseada no tipo de requisição
    if (event.request.mode === 'navigate') {
        // Para navegação, tenta rede primeiro, fallback para offline
        event.respondWith(
            fetch(event.request)
                .catch(() => caches.match('/offline.html'))
        );
    } else if (STATIC_RESOURCES.some(resource => event.request.url.includes(resource))) {
        // Cache First para recursos estáticos
        event.respondWith(
            caches.match(event.request)
                .then(response => response || fetch(event.request))
        );
    } else {
        // Network First para outros recursos
        event.respondWith(
            fetch(event.request)
                .then(response => {
                    // Cache a resposta se for válida
                    if (response && response.status === 200) {
                        const responseToCache = response.clone();
                        caches.open(DYNAMIC_CACHE)
                            .then(cache => cache.put(event.request, responseToCache));
                    }
                    return response;
                })
                .catch(() => caches.match(event.request))
        );
    }
});

// Evento de sincronização em background
self.addEventListener('sync', (event) => {
    if (event.tag === 'sync-data') {
        event.waitUntil(
            // Implementar lógica de sincronização quando necessário
            Promise.resolve()
        );
    }
});

// Evento de push notification
self.addEventListener('push', (event) => {
    if (event.data) {
        const options = {
            body: event.data.text(),
            icon: '/assets/icons/icon-192x192.png',
            badge: '/assets/icons/badge-72x72.png',
            vibrate: [100, 50, 100],
            data: {
                dateOfArrival: Date.now(),
                primaryKey: 1
            }
        };

        event.waitUntil(
            self.registration.showNotification('PROFBT', options)
        );
    }
});