var CACHE_NAME = 'version_07';

var appShellURLs = [
  'jquery.min.js',
  'jquery-ui.min.js',
  'brain.js',
  'htc.png',
  'index.html',
  'minified-code.js',
  'minified-style.css',
  'offline-page.html',
  'sound.js',
];

self.addEventListener('install', function (event) {
  event.waitUntil(caches.open(CACHE_NAME)
    .then(function (cache) {
      console.log('Service worker installing.')
      return cache.addAll(appShellURLs);
    })
  );
});

self.addEventListener('fetch', function (event) {
  var url = new URL(event.request.url);
  if (appShellURLs.indexOf(url.pathname) !== -1) {
    event.respondWith(caches.match(event.request)
      .then(function (response) {
        if (!response) {
          throw new Error(event.request + ' not found in cache');
        }
        console.log('Service worker working even though you are offline.');
        return response;
      })
      .catch(function (error) {
        fetch(event.request);
      })
    );
  } else if (event.request.mode === 'navigate') {
    event.respondWith(fetch(event.request)
      .catch(function (error) {
        return caches.open(CACHE_NAME)
          .then(function (cache) {
            console.log('Service worker working even though you are offline.');
            // return cache.matchAll(URLS);
            return cache.match('offline-page.html');
          });
      })
    );
  }
});
