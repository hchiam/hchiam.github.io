const CACHE_NAME = "hchiamCache";

const offlinePage = "/offline/";

var URLS = [offlinePage, "/service-worker.js"];

self.addEventListener("install", installServiceWorker);
self.addEventListener("activate", activateServiceWorker);
self.addEventListener("fetch", interceptResourceFetchWithServiceWorker);

function installServiceWorker(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Service worker installing.");
      return cache.addAll(URLS);
    })
  );
}

function activateServiceWorker(event) {
  event.waitUntil(
    caches
      .keys() // cache names (caches)
      .then((cacheKeys) => {
        // cache entries (keys/entries in a single cache)
        const oldKeys = cacheKeys.filter(
          (key) => key.indexOf(CACHE_NAME) !== 0
        );
        // promise to delete all old keys in this cache:
        const promisesToDeleteOldKeys = oldKeys.map((oldKey) =>
          caches.delete(oldKey)
        );
        // don't continue until ALL old keys are deleted:
        return Promise.all(promisesToDeleteOldKeys);
      })
  );
}

function interceptResourceFetchWithServiceWorker(event) {
  const url = new URL(event.request.url);
  const isCachedResource = URLS.indexOf(url.pathname) !== -1;
  const isNavigatingToPage = event.request.mode === "navigate";
  const isFetchingOffline = url.pathname === offlinePage;
  const isOffline = !isOnline();
  if (isOffline && (isNavigatingToPage || isFetchingOffline)) {
    console.log("Responding with offline page."); // this log may not be visible afterwards
    event.waitUntil(event.respondWith(caches.match(offlinePage)));
  } else if (isCachedResource) {
    event.waitUntil(
      caches.open(CACHE_NAME).then((cache) => {
        console.log("Caching " + url.pathname);
        return cache.add(url.pathname);
      })
    );
  }
}

function isOnline() {
  return !("onLine" in navigator) || navigator.onLine;
}
