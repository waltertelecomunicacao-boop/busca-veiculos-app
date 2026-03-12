const CACHE_NAME = "veiculos-cache-v1";

self.addEventListener("install", e => {
e.waitUntil(
caches.open(CACHE_NAME).then(cache => cache.addAll([
"/",
"/index.php",
"/css/estilo.css",
"/js/app.js"
]))
);
});

self.addEventListener("fetch", e => {
e.respondWith(
caches.match(e.request).then(r => r || fetch(e.request))
);
});