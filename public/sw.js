if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return t[e]||(s=new Promise((async s=>{if("document"in self){const t=document.createElement("script");t.src=e,document.head.appendChild(t),t.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!t[e])throw new Error(`Module ${e} didn’t register its module`);return t[e]}))},s=(s,t)=>{Promise.all(s.map(e)).then((e=>t(1===e.length?e[0]:e)))},t={require:Promise.resolve(s)};self.define=(s,n,c)=>{t[s]||(t[s]=Promise.resolve().then((()=>{let t={};const r={uri:location.origin+s.slice(1)};return Promise.all(n.map((s=>{switch(s){case"exports":return t;case"module":return r;default:return e(s)}}))).then((e=>{const s=c(...e);return t.default||(t.default=s),t}))})))}}define("./sw.js",["./workbox-1ca495a9"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/LyfWgYIIHPqJJ6ZL3hBAK/_buildManifest.js",revision:"LyfWgYIIHPqJJ6ZL3hBAK"},{url:"/_next/static/LyfWgYIIHPqJJ6ZL3hBAK/_ssgManifest.js",revision:"LyfWgYIIHPqJJ6ZL3hBAK"},{url:"/_next/static/chunks/00cd3a06f38bb833aaee7ab6a324ed2aae69e75d.cc9b58c5cd6e4511b722.js",revision:"LyfWgYIIHPqJJ6ZL3hBAK"},{url:"/_next/static/chunks/13.69c4ca8c3f126a070d07.js",revision:"LyfWgYIIHPqJJ6ZL3hBAK"},{url:"/_next/static/chunks/14.aaa9817c0153932cdfa4.js",revision:"LyfWgYIIHPqJJ6ZL3hBAK"},{url:"/_next/static/chunks/acbf50a7900cae2f5d550b7062b5e684919e8c27.8957cffe0eca8c4e01d0.js",revision:"LyfWgYIIHPqJJ6ZL3hBAK"},{url:"/_next/static/chunks/c8f7fe3b0e41be846d5687592cf2018ff6e22687.ae1c9826f62ea1c302e9.js",revision:"LyfWgYIIHPqJJ6ZL3hBAK"},{url:"/_next/static/chunks/f6078781a05fe1bcb0902d23dbbb2662c8d200b3.85bc5cbdf0762fd38e1c.js",revision:"LyfWgYIIHPqJJ6ZL3hBAK"},{url:"/_next/static/chunks/framework.bb026090cb9d8c12d9a0.js",revision:"LyfWgYIIHPqJJ6ZL3hBAK"},{url:"/_next/static/chunks/main-75a2fe6368e67c93006f.js",revision:"LyfWgYIIHPqJJ6ZL3hBAK"},{url:"/_next/static/chunks/pages/_app-294b38e980231534778f.js",revision:"LyfWgYIIHPqJJ6ZL3hBAK"},{url:"/_next/static/chunks/pages/_error-55ef4e6b657467bd5e77.js",revision:"LyfWgYIIHPqJJ6ZL3hBAK"},{url:"/_next/static/chunks/pages/index-ea21d603840afd3afe43.js",revision:"LyfWgYIIHPqJJ6ZL3hBAK"},{url:"/_next/static/chunks/pages/phaser-game-2bf09fd2a2c562c4c255.js",revision:"LyfWgYIIHPqJJ6ZL3hBAK"},{url:"/_next/static/chunks/pages/slides-titler-5e62b6d1c24caabe8ec8.js",revision:"LyfWgYIIHPqJJ6ZL3hBAK"},{url:"/_next/static/chunks/polyfills-ff94e68042added27a93.js",revision:"LyfWgYIIHPqJJ6ZL3hBAK"},{url:"/_next/static/chunks/webpack-ae1966049b2161b177dc.js",revision:"LyfWgYIIHPqJJ6ZL3hBAK"},{url:"/_next/static/css/11db0a0ecae289eb838e.css",revision:"LyfWgYIIHPqJJ6ZL3hBAK"},{url:"/_next/static/css/abce1a242d7b27e5dde3.css",revision:"LyfWgYIIHPqJJ6ZL3hBAK"},{url:"/htc.png",revision:"4d30cc50eb6c217cf16eadeed3e50dbe"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
