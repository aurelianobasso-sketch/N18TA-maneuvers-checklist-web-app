const CACHE = 'n18ta-checklists-github-v1';
const APP = ['./index.html', './manifest.webmanifest', './icon.svg', './apple-touch-icon.png'];
const APP_URLS = APP.map(path => new URL(path, self.location.href).href);

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(APP)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key !== CACHE).map(key => caches.delete(key)))).then(() => self.clients.claim()));
});

self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.method !== 'GET') return;

  if (request.mode === 'navigate') {
    event.respondWith(fetch(request).catch(() => caches.match(APP_URLS[0])));
    return;
  }

  const url = new URL(request.url);
  if (url.origin !== self.location.origin || !APP_URLS.includes(url.href)) return;
  event.respondWith(caches.match(request).then(cached => cached || fetch(request)));
});
