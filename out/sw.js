if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return t[e]||(s=new Promise((async s=>{if("document"in self){const t=document.createElement("script");t.src=e,document.head.appendChild(t),t.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!t[e])throw new Error(`Module ${e} didn’t register its module`);return t[e]}))},s=(s,t)=>{Promise.all(s.map(e)).then((e=>t(1===e.length?e[0]:e)))},t={require:Promise.resolve(s)};self.define=(s,n,r)=>{t[s]||(t[s]=Promise.resolve().then((()=>{let t={};const i={uri:location.origin+s.slice(1)};return Promise.all(n.map((s=>{switch(s){case"exports":return t;case"module":return i;default:return e(s)}}))).then((e=>{const s=r(...e);return t.default||(t.default=s),t}))})))}}define("./sw.js",["./workbox-1ca495a9"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/bK0ZG-94CZdh6TX1XKkA6/_buildManifest.js",revision:"bK0ZG-94CZdh6TX1XKkA6"},{url:"/_next/static/bK0ZG-94CZdh6TX1XKkA6/_ssgManifest.js",revision:"bK0ZG-94CZdh6TX1XKkA6"},{url:"/_next/static/chunks/00cd3a06f38bb833aaee7ab6a324ed2aae69e75d.9b1a6d28c21dd25fe1ad.js",revision:"bK0ZG-94CZdh6TX1XKkA6"},{url:"/_next/static/chunks/f6078781a05fe1bcb0902d23dbbb2662c8d200b3.a86c81ff05b71fb1ba9b.js",revision:"bK0ZG-94CZdh6TX1XKkA6"},{url:"/_next/static/chunks/framework.abffcf18e526b7c0dbcd.js",revision:"bK0ZG-94CZdh6TX1XKkA6"},{url:"/_next/static/chunks/main-ca22c2c8b96855cfd21f.js",revision:"bK0ZG-94CZdh6TX1XKkA6"},{url:"/_next/static/chunks/pages/_app-98b575607d4577674620.js",revision:"bK0ZG-94CZdh6TX1XKkA6"},{url:"/_next/static/chunks/pages/_error-2acd157473c2704e5800.js",revision:"bK0ZG-94CZdh6TX1XKkA6"},{url:"/_next/static/chunks/pages/index-fe183c87fb2029132fd0.js",revision:"bK0ZG-94CZdh6TX1XKkA6"},{url:"/_next/static/chunks/pages/phaser-game-e8b434f1288462ff4bb0.js",revision:"bK0ZG-94CZdh6TX1XKkA6"},{url:"/_next/static/chunks/pages/slides-titler-65d44e36c9df8fb746fe.js",revision:"bK0ZG-94CZdh6TX1XKkA6"},{url:"/_next/static/chunks/polyfills-144e5fa6fafab6397d9c.js",revision:"bK0ZG-94CZdh6TX1XKkA6"},{url:"/_next/static/chunks/webpack-50bee04d1dc61f8adf5b.js",revision:"bK0ZG-94CZdh6TX1XKkA6"},{url:"/_next/static/css/abce1a242d7b27e5dde3.css",revision:"bK0ZG-94CZdh6TX1XKkA6"},{url:"/_next/static/css/e7c890e9da2727302119.css",revision:"bK0ZG-94CZdh6TX1XKkA6"},{url:"/htc.png",revision:"4d30cc50eb6c217cf16eadeed3e50dbe"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));