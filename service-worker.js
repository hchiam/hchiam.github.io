// https://developers.google.com/codelabs/pwa-training/pwa03--working-with-workbox#2
// https://developers.google.com/codelabs/pwa-training/pwa03--working-with-workbox#3

import { warmStrategyCache, offlineFallback } from "workbox-recipes";
import { CacheFirst, StaleWhileRevalidate } from "workbox-strategies";
import { registerRoute } from "workbox-routing";
import { CacheableResponsePlugin } from "workbox-cacheable-response";
import { ExpirationPlugin } from "workbox-expiration";

setUpPageCache();
setUpAssetCache();
setUpOfflineFallback();

/**
 * https://developers.google.com/codelabs/pwa-training/pwa03--working-with-workbox#2
 */
function setUpPageCache() {
  const pageCache = new CacheFirst({
    cacheName: "page-cache",
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
      new ExpirationPlugin({
        maxAgeSeconds: 30 * 24 * 60 * 60,
      }),
    ],
  });
  warmStrategyCache({
    // urls: ["/index.html", "/"],
    urls: ["/", "/offline"],
    strategy: pageCache,
  });
  registerRoute(({ request }) => request.mode === "navigate", pageCache);
}

/**
 * https://developers.google.com/codelabs/pwa-training/pwa03--working-with-workbox#2
 */
function setUpAssetCache() {
  registerRoute(
    ({ request }) =>
      // ["style", "script", "worker"].includes(request.destination),
      // ["style", "worker", "page"].includes(request.destination),
      ["style", "worker"].includes(request.destination),
    new StaleWhileRevalidate({
      cacheName: "asset-cache",
      plugins: [
        new CacheableResponsePlugin({
          statuses: [0, 200],
        }),
      ],
    })
  );
}

/**
 * https://developers.google.com/codelabs/pwa-training/pwa03--working-with-workbox#3
 */
function setUpOfflineFallback() {
  offlineFallback({
    pageFallback: "/offline.html",
  });
}
