const VERSION = "v1";

self.addEventListener('install', event => {
  event.waitUntil(preCache());
});

self.addEventListener('fetch', event => {
  const request = event.request;

  if (request.method !== "GET") {
    return;
  }

  event.respondWith(cachedResponse(request));

  event.waitUntil(updateCache(request));
});

async function preCache() {
  const cache = await caches.open(VERSION);
}

async function cachedResponse(request) {
  const cache = await caches.open(VERSION);
  const response = await cache.match(request);
  return response || fetch(request);
}

async function updateCache(request) {
  const cache = await caches.open(VERSION);
  const response = await fetch(request);
  return cache.put(request, response);
}