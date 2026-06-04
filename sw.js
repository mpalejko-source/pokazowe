const CACHE_NAME = 'ace-agro-v4';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json',
  './ikonka.png'
];

self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
