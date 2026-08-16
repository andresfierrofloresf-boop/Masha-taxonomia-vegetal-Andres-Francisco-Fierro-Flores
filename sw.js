// Service worker mínimo — necesario para que Chrome/Android
// considere la app "instalable". Por ahora no cachea nada
// agresivamente; solo deja pasar las peticiones normales.
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  // Passthrough simple: no interferimos con las peticiones
  // (la identificación necesita ir siempre a la red real).
  event.respondWith(fetch(event.request).catch(() => caches.match(event.request)));
});
