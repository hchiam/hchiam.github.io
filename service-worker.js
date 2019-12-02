var CACHE_NAME = 'version_05';

var URLS = [
  'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js',
  'https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js',
  'brain.js',
  'htc.png',
  'index.html',
  'minified-code.js',
  'minified-style.css',
  'offline-page.html',
  'sound.js',
];

self.addEventListener('install', function (e) {
  e.waitUntil(caches.open(CACHE_NAME)
    .then(function (cache) {
      console.log('Service worker installing.')
      return cache.addAll(URLS);
    })
  );
});

self.addEventListener('fetch', function (e) {
  if (e.request.mode === 'navigate') {
    e.respondWith(fetch(e.request)
      .catch(function (err) {
        return caches.open(CACHE_NAME)
          .then(function (cache) {
            console.log('Service worker working even though you are offline.')
            return cache.matchAll(URLS);
          });
      })
    );
  }
});
