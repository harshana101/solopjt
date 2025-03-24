// service-worker.js for GitHub Pages
const CACHE_NAME = 'offline-cache-v1';
const OFFLINE_URL = './offline.html'; // Relative path

// Get the base URL from the service worker's scope
const getBaseUrl = () => {
  return self.location.pathname.replace(/\/service-worker\.js$/, '');
};

// Install the service worker and cache the offline page
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Service Worker: Caching offline page');
        return cache.add(new Request(OFFLINE_URL, { cache: 'reload' }));
      })
      .then(() => {
        return self.skipWaiting();
      })
  );
});

// Activate the service worker and clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Service Worker: Clearing old cache');
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      return self.clients.claim();
    })
  );
});

// Fetch event handler - serve from cache or network
self.addEventListener('fetch', (event) => {
  // Only intercept navigate requests
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request)
        .catch(() => {
          // If fetch fails (offline), serve the cached offline page
          return caches.match(OFFLINE_URL);
        })
    );
  }
});
