const arquivosCache = [
  './',                 // Ponto crucial para o GitHub Pages
  'index.html',
  'style.css',
  'manifest.json'
];
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js') // Certo: sem barra no início!
    .then(() => alert('Service Worker registrado com sucesso!'));
    .catch(err => alert('Erro ao registrar:', err));
}
const CACHE_NAME = 'v1';
const ASSETS = [
  '/',
  '/index.html',
  '/manifest.json'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});
