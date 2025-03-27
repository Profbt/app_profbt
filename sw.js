self.addEventListener("install", (event) => {
    console.log("Service Worker instalado.");
    self.skipWaiting(); // Garante que o SW seja ativado imediatamente
});

self.addEventListener("activate", (event) => {
    console.log("Service Worker ativado.");
});

self.addEventListener("fetch", (event) => {
    console.log("Interceptando requisição:", event.request.url);
});
