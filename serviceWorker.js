const VERSION = "v1";

self.addEventListener('install', event => {
  event.waitUntil(precache());
});

self.addEventListener('fetch', event => {
  const request = event.request;

  if (request.method !== "GET") {
    return;
  }

  event.respondWith(cachedResponse(request));

  event.waitUntil(updateCache(request));
});

async function precache() {
  const cache = await caches.open(VERSION);
  return cache.addAll([
    '/',
    './index.html',
    './assets/index.js',
    './assets/MediaPlayer.js',
    './assets/plugins/AutoPause.js',
    './assets/plugins/AutoPlay.js',
    './assets/index.css',
    './assets/BigBunny.mp4'
  ]);
}

async function cachedResponse(request) {
  const cache = await caches.open(VERSION);
  const response = await cache.match(request);
  return response || fetch(request);
}

async function updateCache() {
  const cache = await caches.open(VERSION);
  const response = await fetch(request);
  return cache.put(request, response);
}