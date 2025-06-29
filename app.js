// Configuração completa das categorias e links
const categories = [
    {
        title: "Aulas e Plataformas",
        icon: "graduation-cap",
        links: [
            {
                name: "Google Classroom",
                url: "https://accounts.google.com/ServiceLogin?continue=https%3A%2F%2Fclassroom.google.com",
                logo: "https://upload.wikimedia.org/wikipedia/commons/5/59/Google_Classroom_Logo.png",
                description: "Plataforma oficial para gestão de aulas e atividades",
                icon: "chalkboard-teacher"
            },
            {
                name: "Portal do Aluno Vic. Rijo",
                url: "https://portaldoalunovr.vercel.app/",
                logo: "/assets/logos/vr2.png",
                description: "Acesso a notas, horários e materiais didáticos",
                icon: "door-open"
            },
            {
                name: "Plataformas PR",
                url: "https://www.educacao.pr.gov.br/iniciar/",
                logo: "https://www.comunicacao.pr.gov.br/sites/default/arquivos_restritos/files/styles/escala_1140_largura_/public/imagem/2021-07/60f9c409a5ea8-marca-governo-parana-vertical-cmky-positivo.webp?itok=dcKZ0_Md",
                description: "Plataforma educacional do Estado do Paraná",
                icon: "school"
            },
            {
                name: "Alura Cursos",
                url: "https://cursos.alura.com.br/edutech",
                logo: "/assets/logos/alura.png",
                description: "Cursos de tecnologia e programação",
                icon: "laptop-code"
            },
            {
                name: "Quizziz",
                url: "https://quizizz.com/login?source=top_nav_login_button&ctaSource=top_nav_login_button&ref=header_tab&webflow_referrer=webflow&fromPage=%2F&lng=pt-BR",
                logo: "/assets/logos/quizziz.png",
                description: "Avaliações e desafios gamificados",
                icon: "question"
            },
            {
                name: "Transmissão da Aula",
                url: "https://meet.google.com/nix-owdg-vso",
                logo: "https://upload.wikimedia.org/wikipedia/commons/9/9b/Google_Meet_icon_%282020%29.svg",
                description: "Acompanhe as aulas ao vivo",
                icon: "video"
            }
        ]
    },
    {
        title: "Programação e Computação Criativa",
        icon: "code",
        links: [
            {
                name: "Github",
                url: "https://github.com/login",
                logo: "https://github.com/fluidicon.png",
                description: "Plataforma de versionamento de código",
                icon: "github"
            },
            {
                name: "mBlock IDE",
                url: "https://ide.mblock.cc/",
                logo: "assets/logos/urso.svg",
                description: "Programação para robótica e IoT",
                icon: "robot"
            },
            {
                name: "Tinkercad",
                url: "https://www.tinkercad.com/login",
                logo: "https://inside.wooster.edu/technology/wp-content/uploads/sites/83/2018/09/logo-tinkercad-256.png",
                description: "Simulação de circuitos eletrônicos",
                icon: "cube"
            },
            {
                name: "Scratch",
                url: "https://scratch.mit.edu/",
                logo: "https://images.seeklogo.com/logo-png/43/1/scratch-cat-logo-png_seeklogo-431721.png",
                description: "Programação visual para iniciantes",
                icon: "gamepad"
            },
            {
                name: "p5.js Web Editor",
                url: "https://editor.p5js.org/login",
                logo: "https://p5js.org/assets/img/p5js.svg",
                description: "Ambiente de desenvolvimento criativo",
                icon: "pencil-alt"
            },
            {
                name: "VS Code",
                url: "https://vscode.dev/",
                logo: "https://code.visualstudio.com/assets/images/code-stable.png",
                description: "Editor de código online",
                icon: "code"
            }
        ]
    },
    {
        title: "Inteligências Artificiais",
        icon: "brain",
        links: [
            {
                name: "ChatGPT",
                url: "https://chat.openai.com",
                logo: "https://static.vecteezy.com/system/resources/previews/021/495/996/original/chatgpt-openai-logo-icon-free-png.png",
                description: "Assistente de IA para diversas tarefas",
                icon: "comment"
            },
            {
                name: "DeepSeek",
                url: "https://chat.deepseek.com",
                logo: "https://images.seeklogo.com/logo-png/61/1/deepseek-ai-icon-logo-png_seeklogo-611473.png",
                description: "IA especializada em buscas profundas",
                icon: "search"
            },
            {
                name: "Claude",
                url: "https://claude.ai",
                logo: "https://images.seeklogo.com/logo-png/55/1/claude-logo-png_seeklogo-554534.png",
                description: "IA conversacional avançada",
                icon: "user-astronaut"
            },
            {
                name: "Perplexity",
                url: "https://www.perplexity.ai/",
                logo: "https://images.seeklogo.com/logo-png/61/1/perplexity-ai-icon-black-logo-png_seeklogo-611679.png",
                description: "Motor de busca com IA",
                icon: "question"
            },
            {
                name: "Manus",
                url: "https://www.manus.ai",
                logo: "https://pbs.twimg.com/profile_images/1906544773911166976/WsIcwx_d_400x400.jpg",
                description: "IA para análise de dados complexos",
                icon: "hand-paper"
            },
            {
                name: "ChatPDF",
                url: "https://www.chatpdf.com/",
                logo: "https://cdn-1.webcatalog.io/catalog/chatpdf/chatpdf-icon-filled-256.webp?v=1714781358321",
                description: "Interaja com documentos PDF via IA",
                icon: "file-pdf"
            },
            {
                name: "Grok (X)",
                url: "https://x.ai",
                logo: "https://images.seeklogo.com/logo-png/61/1/grok-logo-png_seeklogo-613403.png",
                description: "IA do X (Twitter) para insights",
                icon: "robot"
            },
            {
                name: "There's an AI for That",
                url: "https://theresanaiforthat.com/",
                logo: "https://theresanaiforthat.com/favicon.ico",
                description: "Catálogo de ferramentas de IA para todas as áreas",
                icon: "list"
            }
        ]
    },
    {
        title: "Banco de Dados",
        icon: "database",
        links: [
            {
                name: "Firebase",
                url: "https://firebase.google.com/",
                logo: "https://images.seeklogo.com/logo-png/28/1/firebase-logo-png_seeklogo-285376.png",
                description: "Plataforma de desenvolvimento com banco de dados em tempo real",
                icon: "fire"
            },
            {
                name: "Supabase",
                url: "https://supabase.com/",
                logo: "https://images.seeklogo.com/logo-png/43/1/supabase-logo-png_seeklogo-435677.png",
                description: "Alternativa open-source ao Firebase",
                icon: "layer-group"
            }
        ]
    },
    {
        title: "Design e Recursos Visuais",
        icon: "palette",
        links: [
            {
                name: "Freepik",
                url: "https://br.freepik.com/",
                logo: "https://images.seeklogo.com/logo-png/46/1/freepik-logo-png_seeklogo-468332.png",
                description: "Recursos gráficos premium gratuitos",
                icon: "image"
            },
            {
                name: "Unsplash",
                url: "https://unsplash.com/pt-br",
                logo: "https://images.seeklogo.com/logo-png/38/1/unsplash-logo-png_seeklogo-380002.png",
                description: "Banco de imagens royalty-free",
                icon: "camera"
            },
            {
                name: "Pexels",
                url: "https://www.pexels.com/pt-br/",
                logo: "https://images.seeklogo.com/logo-png/42/1/pexels-logo-png_seeklogo-426706.png",
                description: "Fotos e vídeos gratuitos",
                icon: "photo-video"
            },
            {
                name: "Pixabay",
                url: "https://pixabay.com/pt/",
                logo: "https://images.seeklogo.com/logo-png/44/1/pixabay-logo-png_seeklogo-441491.png",
                description: "Recursos visuais gratuitos",
                icon: "images"
            },
            {
                name: "FontAwesome",
                url: "https://fontawesome.com/search?o=r&m=free",
                logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Font_Awesome_logomark_blue.svg/512px-Font_Awesome_logomark_blue.svg.png?20220809042108",
                description: "Ícones gratuitos para projetos",
                icon: "icons"
            },
            {
                name: "Google Fonts",
                url: "https://fonts.google.com/",
                logo: "https://images.seeklogo.com/logo-png/42/1/google-fonts-logo-png_seeklogo-426756.png",
                description: "Catálogo de fontes gratuitas",
                icon: "font"
            },
            {
                name: "DaFont",
                url: "https://www.dafont.com/pt/",
                logo: "https://images.seeklogo.com/logo-png/34/1/dafont-logo-png_seeklogo-349461.png",
                description: "Biblioteca de fontes variadas",
                icon: "text-height"
            },
            {
                name: "Coolors",
                url: "https://coolors.co/",
                logo: "https://images.seeklogo.com/logo-png/45/1/coolors-logo-png_seeklogo-456549.png",
                description: "Gerador de paletas de cores",
                icon: "swatchbook"
            },
            {
                name: "CSS Gradient",
                url: "https://cssgradient.io/",
                logo: "https://www.evernote.design/assets/images/cssgradient.jpg",
                description: "Crie gradientes personalizados",
                icon: "fill-drip"
            }
        ]
    },
    {
        title: "Ferramentas Úteis",
        icon: "tools",
        links: [
            {
                name: "Vercel",
                url: "https://vercel.com/",
                logo: "https://assets.vercel.com/image/upload/front/favicon/vercel/180x180.png",
                description: "Plataforma para deploy de aplicações web",
                icon: "rocket"
            },
            {
                name: "Netlify",
                url: "https://www.netlify.com/",
                logo: "https://www.netlify.com/v3/static/favicon/apple-touch-icon.png",
                description: "Hospedagem e automação de sites estáticos",
                icon: "server"
            },
            {
                name: "Editor de PDF",
                url: "https://www.ilovepdf.com/pt",
                logo: "https://www.ilovepdf.com/img/ilovepdf.svg",
                description: "Edite e converta arquivos PDF",
                icon: "file-pdf"
            },
            {
                name: "Fotor",
                url: "https://www.fotor.com/pt/",
                logo: "https://pub-static.fotor.com/static/web/lib/fotor-bundle/6ce130d2365d8b44a294.svg",
                description: "Edição de imagens online",
                icon: "edit"
            },
            {
                name: "Clipchamp",
                url: "https://clipchamp.com/pt-br/video-editor/",
                logo: "https://images.seeklogo.com/logo-png/47/1/microsoft-clipchamp-logo-png_seeklogo-472379.png",
                description: "Edição básica de vídeos",
                icon: "film"
            },
            {
                name: "Photopea",
                url: "https://www.photopea.com/",
                logo: "https://www.photopea.com/promo/icon512.png",
                description: "Alternativa online ao Photoshop",
                icon: "crop"
            },
            {
                name: "Remove Background",
                url: "https://www.remove.bg/",
                logo: "https://www.remove.bg/apple-touch-icon.png",
                description: "Remova fundos de imagens automaticamente",
                icon: "eraser"
            },
            {
                name: "Site 112",
                url: "https://site112.com/",
                logo: "/assets/logos/112.png",
                description: "Construtor de sites simples",
                icon: "globe"
            },
            {
                name: "Online Converter",
                url: "https://www.online-convert.com/pt",
                logo: "https://www.online-convert.com/assets/img/oc_logo_grey_font_like_sat.svg",
                description: "Conversor de arquivos online",
                icon: "exchange-alt"
            },
            {
                name: "WeTransfer",
                url: "https://wetransfer.com/",
                logo: "https://cdn.freebiesupply.com/logos/large/2x/wetransfer-logo-png-transparent.png",
                description: "Compartilhamento de arquivos grandes",
                icon: "cloud-upload-alt"
            }
        ]
    },
    {
        title: "Tutoriais e Documentos",
        icon: "book-open",
        links: [
            {
                name: "W3Schools",
                url: "https://www.w3schools.com/",
                logo: "https://avatars.githubusercontent.com/u/77673807?v=4",
                description: "Tutoriais de programação web",
                icon: "code"
            },
            {
                name: "Entregar certificado Alura",
                url: "https://drive.google.com/file/d/1q2lcV5SsEhb3B5UikkIz6UbMFNPBDm6x/view",
                logo: "https://cdn-icons-png.flaticon.com/512/136/136522.png",
                description: "Instruções para entrega de certificados",
                icon: "certificate"
            },
            {
                name: "Entregar link Scratch",
                url: "https://drive.google.com/file/d/1Xi5izt4YM60Gg3tXrw23TpZU1gO2NWTY/view",
                logo: "https://images.seeklogo.com/logo-png/43/1/scratch-logo-png_seeklogo-431722.png",
                description: "Como compartilhar projetos do Scratch",
                icon: "link"
            },
            {
                name: "Iniciar curso Alura",
                url: "https://drive.google.com/file/d/1gVV5On9ZWDcLvCDdkPSD_D77icwIsLsy/view",
                logo: "https://cdn-icons-png.flaticon.com/512/136/136522.png",
                description: "Guia de início dos cursos",
                icon: "play-circle"
            },
            {
                name: "Certificado Alura - Impressão",
                url: "https://drive.google.com/file/d/1m6BGxxKaoifDUrj538_5CI8Y_jiQS2fO/view",
                logo: "https://cdn-icons-png.flaticon.com/512/136/136522.png",
                description: "Modelo para impressão de certificados",
                icon: "print"
            }
        ]
    },
    {
        title: "Padlets das Turmas",
        icon: "clipboard-list",
        links: [
            {
                name: "3º SIS - Desenvolvimento de Sistemas",
                url: "https://padlet.com/brunobarroscarvalho/3-desenvolvimento-de-sistemas-vr-ga5dvddjb8tu4519",
                logo: "https://padlet.com/favicon.ico",
                description: "Padlet da turma de Desenvolvimento de Sistemas",
                icon: "code-branch"
            },
            {
                name: "1º MAR",
                url: "https://padlet.com/brunobarroscarvalho/1-s-rie-ceng-m999n4mca08cwhkh",
                logo: "https://padlet.com/favicon.ico",
                description: "Padlet da turma 1º MAR",
                icon: "school"
            },
            {
                name: "3º MAR",
                url: "https://padlet.com/brunobarroscarvalho/3-s-rie-mar-hv94l07s8av6451n",
                logo: "https://padlet.com/favicon.ico",
                description: "Padlet da turma 3º MAR",
                icon: "graduation-cap"
            },
            {
                name: "7º INT VR",
                url: "https://padlet.com/brunobarroscarvalho/7-ano-vr-a48nm36culhq4c48",
                logo: "https://padlet.com/favicon.ico",
                description: "Padlet da turma 7º INT VR",
                icon: "child"
            },
            {
                name: "THACKATHON",
                url: "https://padlet.com/salgadofelipe07/breakout-room/d6AO26l9rj3ovojL-8wOpvYgk34oz6AYo",
                logo: "https://padlet.com/favicon.ico",
                description: "Padlet para o THACKATHON",
                icon: "users"
            }
        ]
    }
];

// Função para verificar o primeiro acesso e fazer a mão abanar
function checkFirstVisit() {
    const hasVisited = localStorage.getItem('hasVisitedBefore');
    const welcomeEmoji = document.querySelector('.waving-hand');
    
    if (welcomeEmoji) {
        // Garante que o emoji tenha a classe para animação
        welcomeEmoji.classList.add('waving-hand');
        
        if (!hasVisited) {
            welcomeEmoji.style.fontSize = '1.5em';
            welcomeEmoji.style.opacity = '1';
            localStorage.setItem('hasVisitedBefore', 'true');
        } else {
            welcomeEmoji.style.opacity = '0.8';
        }
    }
}

// Atualizar função de criação de cards para reduzir efeitos
function createResourceCard(resource, index) {
    const card = document.createElement('div');
    card.className = 'resource-card';
    
    // Removidas todas as animações AOS para melhorar performance
    
    card.innerHTML = `
        <div class="card-content">
            <img src="${resource.logo}" alt="${resource.name}" class="card-logo">
            <div class="card-text">
                <h3 class="card-title">${resource.name}</h3>
                <p class="card-description">
                    <i class="fas fa-${resource.icon} mr-2"></i>
                    ${resource.description}
                </p>
            </div>
        </div>
    `;
    
    card.addEventListener('click', () => {
        window.open(resource.url, '_blank', 'noopener,noreferrer');
    });
    
    return card;
}

// Renderização das categorias
function renderCategories() {
    const container = document.getElementById('categoriesContainer');
    if (!container) return;
    
    container.innerHTML = '';
    
    categories.forEach((category, categoryIndex) => {
        const categorySection = document.createElement('section');
        categorySection.className = 'category';
        
        // Removidas todas as animações AOS para melhorar performance
        
        categorySection.innerHTML = `
            <h2 class="category-title">
                <i class="fas fa-${category.icon}"></i>
                ${category.title}
            </h2>
            <div class="link-grid"></div>
        `;
        
        const grid = categorySection.querySelector('.link-grid');
        category.links.forEach((link, linkIndex) => {
            grid.appendChild(createResourceCard(link, linkIndex));
        });
        
        container.appendChild(categorySection);
    });

    // Removida a atualização do AOS
}

// Sistema de Tema
function toggleTheme() {
    const html = document.documentElement;
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = themeToggle.querySelector('i');
    
    if (html.getAttribute('data-theme') === 'dark') {
        html.setAttribute('data-theme', 'light');
        themeIcon.className = 'fas fa-moon';
        localStorage.setItem('theme', 'light');
    } else {
        html.setAttribute('data-theme', 'dark');
        themeIcon.className = 'fas fa-sun';
        localStorage.setItem('theme', 'dark');
    }
}

function initTheme() {
    const html = document.documentElement;
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = themeToggle.querySelector('i');
    
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme) {
        html.setAttribute('data-theme', savedTheme);
        themeIcon.className = savedTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    } else if (prefersDark) {
        html.setAttribute('data-theme', 'dark');
        themeIcon.className = 'fas fa-sun';
        localStorage.setItem('theme', 'dark');
    } else {
        html.setAttribute('data-theme', 'light');
        themeIcon.className = 'fas fa-moon';
        localStorage.setItem('theme', 'light');
    }
    
    themeToggle.addEventListener('click', toggleTheme);
}

// Função de pesquisa com animação suave
function filterResources() {
    const searchInput = document.getElementById('searchInput');
    const cards = document.querySelectorAll('.resource-card');
    const searchTerm = searchInput.value.toLowerCase().trim();

    cards.forEach(card => {
        const title = card.querySelector('.card-title').textContent.toLowerCase();
        const description = card.querySelector('.card-description').textContent.toLowerCase();
        
        if (title.includes(searchTerm) || description.includes(searchTerm)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });

    // Removida a atualização do AOS
}

// --- PWA Install Button for Mobile ---
let deferredPrompt = null;

function isMobileDevice() {
    return /android|iphone|ipad|ipod|opera mini|iemobile|mobile/i.test(navigator.userAgent);
}

function isInStandaloneMode() {
    return (window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true);
}

function setupPwaInstallButton() {
    const installBtn = document.getElementById('installPwaBtn');
    if (!installBtn) return;

    // Esconde o botão por padrão
    installBtn.style.display = 'none';

    // Só mostra em mobile e se não estiver instalado
    if (isMobileDevice() && !isInStandaloneMode()) {
        window.addEventListener('beforeinstallprompt', (e) => {
            e.preventDefault();
            deferredPrompt = e;
            installBtn.style.display = 'inline-block';
        });

        installBtn.addEventListener('click', async () => {
            if (deferredPrompt) {
                deferredPrompt.prompt();
                const { outcome } = await deferredPrompt.userChoice;
                if (outcome === 'accepted') {
                    installBtn.style.display = 'none';
                }
                deferredPrompt = null;
            }
        });
    }
}

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    try {
        // Inicializa o tema
        initTheme();
        
        // Verificar primeiro acesso
        checkFirstVisit();
        
        // Setup botão de instalar PWA
        setupPwaInstallButton();
        
        // Remove o skeleton loader
        const loading = document.getElementById('loading');
        if (loading) {
            loading.remove();
        }
        
        // Renderiza as categorias
        renderCategories();
        
        // Configura a pesquisa com debounce
        const searchInput = document.getElementById('searchInput');
        let debounceTimer;
        searchInput.addEventListener('input', () => {
            clearTimeout(debounceTimer);
            debounceTimer = setTimeout(filterResources, 300);
        });
        
        // Atualiza o ano no footer
        const currentYearElement = document.getElementById('currentYear');
        if (currentYearElement) {
            currentYearElement.textContent = new Date().getFullYear();
        }
        
    } catch (error) {
        console.error('Erro na inicialização:', error);
    }
});

// Service Worker
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js');
    });
}