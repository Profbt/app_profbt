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
                name: "Wayground",
                url: "https://wayground.com/",
                logo: "https://cdn.prod.website-files.com/68355113496452bf05789e95/68480ff9c322e13a2f937a22_Logo_Dark_Primary_Horizontal_MINIMUM.svg",
                description: "Plataforma de avaliações e desafios gamificados com IA",
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
                logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/visualstudiocode.svg",
                description: "Editor de código online",
                icon: "code"
            },
            {
                name: "Replit",
                url: "https://replit.com/",
                logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/replit.svg",
                description: "IDE online colaborativa para múltiplas linguagens",
                icon: "laptop-code"
            },
            {
                name: "CodePen",
                url: "https://codepen.io/",
                logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/codepen.svg",
                description: "Editor front-end ao vivo com comunidade",
                icon: "pen-nib"
            },
            {
                name: "Base44",
                url: "https://base44.com//",
                logo: "/assets/logos/base44.png",
                description: "Criação rápida de apps web.",
                icon: "bolt"
            },
            {
                name: "Bolt (bolt.new)",
                url: "https://bolt.new/",
                logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/stackblitz.svg",
                description: "Crie apps web completos com IA no navegador",
                icon: "bolt"
            },
            {
                name: "Lovable",
                url: "https://lovable.dev/",
                logo: "https://lovable.dev/favicon.svg",
                description: "Desenvolvimento assistido por IA com foco em produtos",
                icon: "heart"
            },
            {
                name: "Glide",
                url: "https://www.glideapps.com/",
                logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/glide.svg",
                description: "Crie apps a partir de planilhas sem código",
                icon: "mobile-alt"
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
                name: "Gemini (Google)",
                url: "https://gemini.google.com/",
                logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/googlegemini.svg",
                description: "IA do Google com integração ao ecossistema",
                icon: "star"
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
                logo: "https://files.manuscdn.com/assets/image/brand/image/Manus-Icon.png",
                description: "IA para análise de dados complexos",
                icon: "hand-paper"
            },
            {
                name: "Grok (X)",
                url: "https://x.ai",
                logo: "https://images.seeklogo.com/logo-png/61/1/grok-logo-png_seeklogo-613403.png",
                description: "IA do X (Twitter) para insights",
                icon: "robot"
            },
            {
                name: "Kimi",
                url: "https://www.kimi.com/",
                logo: "https://moonshotai.github.io/Branding-Guide/scenarios/03-icon-without-kimi/kimi-icon-rounded-corner.png",
                description: "IA avançada da Moonshot com raciocínio profundo",
                icon: "star"
            },
            {
                name: "Qwen",
                url: "https://qwen.ai/home",
                logo: "https://cdn.jsdelivr.net/gh/callback-io/allogo@main/public/logos/qwen/icon.png",
                description: "IA da Alibaba com forte capacidade multilíngue",
                icon: "language"
            },
            {
                name: "NotebookLM",
                url: "https://notebooklm.google.com/",
                logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/notebooklm.svg",
                description: "Assistente de pesquisa baseado nos seus documentos",
                icon: "book"
            },
            {
                name: "Hugging Face",
                url: "https://huggingface.co/",
                logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/huggingface.svg",
                description: "Plataforma open-source com milhares de modelos de IA",
                icon: "robot"
            },
            {
                name: "OpenRouter",
                url: "https://openrouter.ai/",
                logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/openrouter.svg",
                description: "Acesse múltiplos modelos de IA em uma única plataforma",
                icon: "route"
            },
            {
                name: "OpenCode (GitHub)",
                url: "https://github.com/anomalyco/opencode",
                logo: "https://raw.githubusercontent.com/anomalyco/opencode/dev/packages/console/app/src/asset/brand/opencode-logo-light-square.svg",
                description: "Agente de codificação open source para desenvolvedores",
                icon: "terminal"
            },
            {
                name: "There's an AI for That",
                url: "https://theresanaiforthat.com/",
                logo: "https://theresanaiforthat.com/favicon.ico",
                description: "Catálogo de ferramentas de IA para todas as áreas",
                icon: "list"
            },
            {
                name: "Adam (adam.new)",
                url: "https://adam.new/",
                logo: "https://adam.new/cadam/adam-logo.svg",
                description: "Assistente de IA para produtividade e automação",
                icon: "robot"
            },
            {
                name: "Pika Labs",
                url: "https://pika.art",
                logo: "https://pika.art/favicon.ico",
                description: "Geração de vídeos estilizados e virais com 60 quadros iniciais grátis",
                icon: "magic"
            },
            {
                name: "Luma Dream Machine",
                url: "https://lumalabs.ai/dream-machine",
                logo: "https://lumalabs.ai/favicon.ico",
                description: "Vídeos com movimentos suaves e câmera lenta natural. 30 gerações grátis por mês",
                icon: "cloud-moon"
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
            },
            {
                name: "Neon",
                url: "https://neon.com/",
                logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/neon.svg",
                description: "Banco de dados PostgreSQL serverless",
                icon: "bolt"
            },
            {
                name: "AWS (Amazon RDS)",
                url: "https://aws.amazon.com/pt/rds/",
                logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/amazonaws.svg",
                description: "Serviço de banco de dados relacional na nuvem",
                icon: "cloud"
            },
            {
                name: "MongoDB Atlas",
                url: "https://www.mongodb.com/atlas",
                logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/mongodb.svg",
                description: "Banco de dados NoSQL na nuvem",
                icon: "leaf"
            },
            {
                name: "DataDog",
                url: "https://www.datadoghq.com/",
                logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/datadog.svg",
                description: "Monitoramento e observabilidade para infraestrutura cloud",
                icon: "chart-line"
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
                logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/fontawesome.svg",
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
            },
            {
                name: "Canva",
                url: "https://www.canva.com/",
                logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/canva.svg",
                description: "Design gráfico acessível com templates prontos",
                icon: "paint-brush"
            },
            {
                name: "Figma",
                url: "https://www.figma.com/",
                logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/figma.svg",
                description: "Design de interfaces colaborativo online",
                icon: "pen-ruler"
            },
            {
                name: "Heroicons",
                url: "https://heroicons.com/",
                logo: "https://cdn-b.saashub.com/images/app/service_logos/155/7902ojac7nj3/large.png?1635277061",
                description: "Ícones SVG handcrafted para web",
                icon: "icons"
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
                logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/netlify.svg",
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
            },
            {
                name: "Render",
                url: "https://render.com/",
                logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/render.svg",
                description: "Hospedagem gratuita de apps e sites estáticos",
                icon: "server"
            },
            {
                name: "GitHub Pages",
                url: "https://pages.github.com/",
                logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/githubpages.svg",
                description: "Hospede sites estáticos direto do GitHub",
                icon: "code-branch"
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
                name: "THACKATHON",
                url: "https://padlet.com/salgadofelipe07/breakout-room/d6AO26l9rj3ovojL-8wOpvYgk34oz6AYo",
                logo: "https://padlet.com/favicon.ico",
                description: "Padlet para o THACKATHON",
                icon: "users"
            },
            {
                name: "8º INT VR",
                url: "#",
                logo: "https://padlet.com/favicon.ico",
                description: "Padlet da turma 8º INT VR",
                icon: "child"
            },
            {
                name: "9º INT VR",
                url: "#",
                logo: "https://padlet.com/favicon.ico",
                description: "Padlet da turma 9º INT VR",
                icon: "child"
            }
        ]
    }
];

// Função para verificar o primeiro acesso e fazer o ícone tecnológico brilhar
function checkFirstVisit() {
    const hasVisited = localStorage.getItem('hasVisitedBefore');
    const techIcon = document.querySelector('.tech-welcome-icon');
    
    if (techIcon) {
        // Garante que o ícone tenha a classe para animação
        techIcon.classList.add('tech-welcome-icon');
        
        if (!hasVisited) {
            techIcon.style.fontSize = '1.5em';
            techIcon.style.opacity = '1';
            localStorage.setItem('hasVisitedBefore', 'true');
        } else {
            techIcon.style.opacity = '0.8';
        }
    }
}

// Atualizar função de criação de cards para adicionar animações de entrada
function createResourceCard(resource, index) {
    const card = document.createElement('div');
    card.className = 'resource-card';
    card.style.animationDelay = `${index * 50}ms`;
    
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

// Renderização das categorias com animação de entrada e stats
function renderCategories() {
    const container = document.getElementById('categoriesContainer');
    if (!container) return;
    
    container.innerHTML = '';
    
    let totalLinks = 0;
    
    categories.forEach((category, categoryIndex) => {
        const categorySection = document.createElement('section');
        categorySection.className = 'category';
        categorySection.style.animationDelay = `${categoryIndex * 100}ms`;
        
        totalLinks += category.links.length;
        
        categorySection.innerHTML = `
            <h2 class="category-title">
                <i class="fas fa-${category.icon}"></i>
                ${category.title}
                <span class="category-badge">${category.links.length}</span>
            </h2>
            <div class="link-grid"></div>
        `;
        
        const grid = categorySection.querySelector('.link-grid');
        category.links.forEach((link, linkIndex) => {
            grid.appendChild(createResourceCard(link, linkIndex));
        });
        
        container.appendChild(categorySection);
    });

    // Atualiza stats
    const totalCategoriesEl = document.getElementById('totalCategories');
    const totalLinksEl = document.getElementById('totalLinks');
    if (totalCategoriesEl) totalCategoriesEl.textContent = categories.length;
    if (totalLinksEl) totalLinksEl.textContent = totalLinks;
    
    // Atualiza contador de resultados
    updateSearchCount();
    
    // Re-aplica cursor glow nos novos cards
    setupCursorGlow();
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

// Função de pesquisa com animação suave e contador
let totalVisible = 0;

function updateSearchCount() {
    const searchResultsEl = document.getElementById('searchResults');
    if (!searchResultsEl) return;
    searchResultsEl.textContent = totalVisible > 0 ? totalVisible : '—';
}

function filterResources() {
    const searchInput = document.getElementById('searchInput');
    const cards = document.querySelectorAll('.resource-card');
    const categories = document.querySelectorAll('.category');
    const searchTerm = searchInput.value.toLowerCase().trim();

    totalVisible = 0;

    cards.forEach(card => {
        const title = card.querySelector('.card-title').textContent.toLowerCase();
        const description = card.querySelector('.card-description').textContent.toLowerCase();
        
        if (!searchTerm || title.includes(searchTerm) || description.includes(searchTerm)) {
            card.style.display = 'block';
            totalVisible++;
        } else {
            card.style.display = 'none';
        }
    });

    // Esconde categorias sem resultados visíveis
    categories.forEach(section => {
        const visibleCards = section.querySelectorAll('.resource-card[style*="display: block"], .resource-card:not([style*="display: none"])');
        const hasVisible = Array.from(visibleCards).some(c => c.style.display !== 'none');
        section.style.display = (searchTerm && !hasVisible) ? 'none' : 'block';
    });

    updateSearchCount();

    // Classe visual na barra de busca
    const searchContainer = searchInput.closest('.search-container');
    if (searchContainer) {
        searchContainer.classList.toggle('has-results', totalVisible > 0 && searchTerm);
    }

    // Mostra estado vazio se nenhum resultado
    const existingEmpty = document.getElementById('emptyState');
    if (searchTerm && totalVisible === 0) {
        if (!existingEmpty) {
            const emptyState = document.createElement('div');
            emptyState.id = 'emptyState';
            emptyState.className = 'empty-state';
            emptyState.innerHTML = `
                <i class="fas fa-search"></i>
                <h3>Nenhum recurso encontrado</h3>
                <p>Tente buscar por outro termo</p>
            `;
            document.getElementById('categoriesContainer').appendChild(emptyState);
        }
    } else if (existingEmpty) {
        existingEmpty.remove();
    }
}

// Atalhos de teclado
function setupKeyboardShortcuts() {
    document.addEventListener('keydown', (e) => {
        const mainSearch = document.getElementById('searchInput');
        
        // Ctrl+K is handled in setupFloatingSearch
        if (e.key === 'Escape' && document.activeElement === mainSearch) {
            mainSearch.value = '';
            mainSearch.blur();
            filterResources();
        }
        
        // Also handle escape on floating search
        const floatingInput = document.getElementById('floatingSearchInput');
        if (e.key === 'Escape' && document.activeElement === floatingInput) {
            floatingInput.value = '';
            floatingInput.blur();
            filterResources();
        }
    });
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

// Cursor Glow Effect nos cards
function setupCursorGlow() {
    document.querySelectorAll('.resource-card').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    });
    
    // Global cursor glow for dark mode
    document.addEventListener('mousemove', (e) => {
        document.body.style.setProperty('--mouse-x', `${e.clientX}px`);
        document.body.style.setProperty('--mouse-y', `${e.clientY}px`);
    });
}

// Floating Search Bar
function setupFloatingSearch() {
    const floatingSearch = document.getElementById('floatingSearch');
    const floatingInput = document.getElementById('floatingSearchInput');
    const mainSearch = document.getElementById('searchInput');
    
    if (!floatingSearch || !floatingInput || !mainSearch) return;
    
    // Show/hide based on scroll
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        const headerHeight = document.querySelector('header').offsetHeight;
        
        if (scrollY > headerHeight) {
            floatingSearch.classList.add('visible');
        } else {
            floatingSearch.classList.remove('visible');
            floatingInput.value = mainSearch.value;
        }
        
        lastScroll = scrollY;
    });
    
    // Sync with main search
    floatingInput.addEventListener('input', () => {
        mainSearch.value = floatingInput.value;
        filterResources();
    });
    
    mainSearch.addEventListener('input', () => {
        floating