import{p as U,s as B}from"./hoisted.75ae9fc3.js";import"./hoisted.4848743b.js";try{self["workbox:core:7.0.0"]&&_()}catch{}const H=(s,...e)=>{let t=s;return e.length>0&&(t+=` :: ${JSON.stringify(e)}`),t},$=H;class h extends Error{constructor(e,t){const n=$(e,t);super(n),this.name=e,this.details=t}}try{self["workbox:routing:7.0.0"]&&_()}catch{}const V="GET",D=s=>s&&typeof s=="object"?s:{handle:s},G=s=>new URL(String(s),location.href).href.replace(new RegExp(`^${location.origin}`),"");class Q{constructor(){this._routes=new Map,this._defaultHandlerMap=new Map}get routes(){return this._routes}addFetchListener(){self.addEventListener("fetch",e=>{const{request:t}=e,n=this.handleRequest({request:t,event:e});n&&e.respondWith(n)})}addCacheListener(){self.addEventListener("message",e=>{if(e.data&&e.data.type==="CACHE_URLS"){const{payload:t}=e.data,n=Promise.all(t.urlsToCache.map(r=>{typeof r=="string"&&(r=[r]);const a=new Request(...r);return this.handleRequest({request:a,event:e})}));e.waitUntil(n),e.ports&&e.ports[0]&&n.then(()=>e.ports[0].postMessage(!0))}})}handleRequest({request:e,event:t}){const n=new URL(e.url,location.href);if(!n.protocol.startsWith("http"))return;const r=n.origin===location.origin,{params:a,route:c}=this.findMatchingRoute({event:t,request:e,sameOrigin:r,url:n});let o=c&&c.handler;const i=e.method;if(!o&&this._defaultHandlerMap.has(i)&&(o=this._defaultHandlerMap.get(i)),!o)return;let l;try{l=o.handle({url:n,request:e,event:t,params:a})}catch(u){l=Promise.reject(u)}const p=c&&c.catchHandler;return l instanceof Promise&&(this._catchHandler||p)&&(l=l.catch(async u=>{if(p)try{return await p.handle({url:n,request:e,event:t,params:a})}catch(M){M instanceof Error&&(u=M)}if(this._catchHandler)return this._catchHandler.handle({url:n,request:e,event:t});throw u})),l}findMatchingRoute({url:e,sameOrigin:t,request:n,event:r}){const a=this._routes.get(n.method)||[];for(const c of a){let o;const i=c.match({url:e,sameOrigin:t,request:n,event:r});if(i)return o=i,(Array.isArray(o)&&o.length===0||i.constructor===Object&&Object.keys(i).length===0||typeof i=="boolean")&&(o=void 0),{route:c,params:o}}return{}}setDefaultHandler(e,t=V){this._defaultHandlerMap.set(t,D(e))}setCatchHandler(e){this._catchHandler=D(e)}registerRoute(e){this._routes.has(e.method)||this._routes.set(e.method,[]),this._routes.get(e.method).push(e)}unregisterRoute(e){if(!this._routes.has(e.method))throw new h("unregister-route-but-not-found-with-method",{method:e.method});const t=this._routes.get(e.method).indexOf(e);if(t>-1)this._routes.get(e.method).splice(t,1);else throw new h("unregister-route-route-not-registered")}}let g;const A=()=>(g||(g=new Q,g.addFetchListener(),g.addCacheListener()),g);try{self["workbox:strategies:7.0.0"]&&_()}catch{}const f={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:typeof registration<"u"?registration.scope:""},b=s=>[f.prefix,s,f.suffix].filter(e=>e&&e.length>0).join("-"),z=s=>{for(const e of Object.keys(f))s(e)},E={updateDetails:s=>{z(e=>{typeof s[e]=="string"&&(f[e]=s[e])})},getGoogleAnalyticsName:s=>s||b(f.googleAnalytics),getPrecacheName:s=>s||b(f.precache),getPrefix:()=>f.prefix,getRuntimeName:s=>s||b(f.runtime),getSuffix:()=>f.suffix};function K(s,e){const t=new URL(s);for(const n of e)t.searchParams.delete(n);return t.href}async function J(s,e,t,n){const r=K(e.url,t);if(e.url===r)return s.match(e,n);const a=Object.assign(Object.assign({},n),{ignoreSearch:!0}),c=await s.keys(e,a);for(const o of c){const i=K(o.url,t);if(r===i)return s.match(o,n)}}class X{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}const Y=new Set;async function Z(){for(const s of Y)await s()}function j(s){return new Promise(e=>setTimeout(e,s))}function m(s){return typeof s=="string"?new Request(s):s}class ee{constructor(e,t){this._cacheKeys={},Object.assign(this,t),this.event=t.event,this._strategy=e,this._handlerDeferred=new X,this._extendLifetimePromises=[],this._plugins=[...e.plugins],this._pluginStateMap=new Map;for(const n of this._plugins)this._pluginStateMap.set(n,{});this.event.waitUntil(this._handlerDeferred.promise)}async fetch(e){const{event:t}=this;let n=m(e);if(n.mode==="navigate"&&t instanceof FetchEvent&&t.preloadResponse){const c=await t.preloadResponse;if(c)return c}const r=this.hasCallback("fetchDidFail")?n.clone():null;try{for(const c of this.iterateCallbacks("requestWillFetch"))n=await c({request:n.clone(),event:t})}catch(c){if(c instanceof Error)throw new h("plugin-error-request-will-fetch",{thrownErrorMessage:c.message})}const a=n.clone();try{let c;c=await fetch(n,n.mode==="navigate"?void 0:this._strategy.fetchOptions);for(const o of this.iterateCallbacks("fetchDidSucceed"))c=await o({event:t,request:a,response:c});return c}catch(c){throw r&&await this.runCallbacks("fetchDidFail",{error:c,event:t,originalRequest:r.clone(),request:a.clone()}),c}}async fetchAndCachePut(e){const t=await this.fetch(e),n=t.clone();return this.waitUntil(this.cachePut(e,n)),t}async cacheMatch(e){const t=m(e);let n;const{cacheName:r,matchOptions:a}=this._strategy,c=await this.getCacheKey(t,"read"),o=Object.assign(Object.assign({},a),{cacheName:r});n=await caches.match(c,o);for(const i of this.iterateCallbacks("cachedResponseWillBeUsed"))n=await i({cacheName:r,matchOptions:a,cachedResponse:n,request:c,event:this.event})||void 0;return n}async cachePut(e,t){const n=m(e);await j(0);const r=await this.getCacheKey(n,"write");if(!t)throw new h("cache-put-with-no-response",{url:G(r.url)});const a=await this._ensureResponseSafeToCache(t);if(!a)return!1;const{cacheName:c,matchOptions:o}=this._strategy,i=await self.caches.open(c),l=this.hasCallback("cacheDidUpdate"),p=l?await J(i,r.clone(),["__WB_REVISION__"],o):null;try{await i.put(r,l?a.clone():a)}catch(u){if(u instanceof Error)throw u.name==="QuotaExceededError"&&await Z(),u}for(const u of this.iterateCallbacks("cacheDidUpdate"))await u({cacheName:c,oldResponse:p,newResponse:a.clone(),request:r,event:this.event});return!0}async getCacheKey(e,t){const n=`${e.url} | ${t}`;if(!this._cacheKeys[n]){let r=e;for(const a of this.iterateCallbacks("cacheKeyWillBeUsed"))r=m(await a({mode:t,request:r,event:this.event,params:this.params}));this._cacheKeys[n]=r}return this._cacheKeys[n]}hasCallback(e){for(const t of this._strategy.plugins)if(e in t)return!0;return!1}async runCallbacks(e,t){for(const n of this.iterateCallbacks(e))await n(t)}*iterateCallbacks(e){for(const t of this._strategy.plugins)if(typeof t[e]=="function"){const n=this._pluginStateMap.get(t);yield a=>{const c=Object.assign(Object.assign({},a),{state:n});return t[e](c)}}}waitUntil(e){return this._extendLifetimePromises.push(e),e}async doneWaiting(){let e;for(;e=this._extendLifetimePromises.shift();)await e}destroy(){this._handlerDeferred.resolve(null)}async _ensureResponseSafeToCache(e){let t=e,n=!1;for(const r of this.iterateCallbacks("cacheWillUpdate"))if(t=await r({request:this.request,response:t,event:this.event})||void 0,n=!0,!t)break;return n||t&&t.status!==200&&(t=void 0),t}}class W{constructor(e={}){this.cacheName=E.getRuntimeName(e.cacheName),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){const[t]=this.handleAll(e);return t}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request});const t=e.event,n=typeof e.request=="string"?new Request(e.request):e.request,r="params"in e?e.params:void 0,a=new ee(this,{event:t,request:n,params:r}),c=this._getResponse(a,n,t),o=this._awaitComplete(c,a,n,t);return[c,o]}async _getResponse(e,t,n){await e.runCallbacks("handlerWillStart",{event:n,request:t});let r;try{if(r=await this._handle(t,e),!r||r.type==="error")throw new h("no-response",{url:t.url})}catch(a){if(a instanceof Error){for(const c of e.iterateCallbacks("handlerDidError"))if(r=await c({error:a,event:n,request:t}),r)break}if(!r)throw a}for(const a of e.iterateCallbacks("handlerWillRespond"))r=await a({event:n,request:t,response:r});return r}async _awaitComplete(e,t,n,r){let a,c;try{a=await e}catch{}try{await t.runCallbacks("handlerDidRespond",{event:r,request:n,response:a}),await t.doneWaiting()}catch(o){o instanceof Error&&(c=o)}if(await t.runCallbacks("handlerDidComplete",{event:r,request:n,response:a,error:c}),t.destroy(),c)throw c}}try{self["workbox:cacheable-response:7.0.0"]&&_()}catch{}const te=(s,e)=>e.some(t=>s instanceof t);let x,S;function se(){return x||(x=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ne(){return S||(S=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const F=new WeakMap,T=new WeakMap,q=new WeakMap,R=new WeakMap,I=new WeakMap;function re(s){const e=new Promise((t,n)=>{const r=()=>{s.removeEventListener("success",a),s.removeEventListener("error",c)},a=()=>{t(y(s.result)),r()},c=()=>{n(s.error),r()};s.addEventListener("success",a),s.addEventListener("error",c)});return e.then(t=>{t instanceof IDBCursor&&F.set(t,s)}).catch(()=>{}),I.set(e,s),e}function ae(s){if(T.has(s))return;const e=new Promise((t,n)=>{const r=()=>{s.removeEventListener("complete",a),s.removeEventListener("error",c),s.removeEventListener("abort",c)},a=()=>{t(),r()},c=()=>{n(s.error||new DOMException("AbortError","AbortError")),r()};s.addEventListener("complete",a),s.addEventListener("error",c),s.addEventListener("abort",c)});T.set(s,e)}let v={get(s,e,t){if(s instanceof IDBTransaction){if(e==="done")return T.get(s);if(e==="objectStoreNames")return s.objectStoreNames||q.get(s);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return y(s[e])},set(s,e,t){return s[e]=t,!0},has(s,e){return s instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in s}};function ce(s){v=s(v)}function oe(s){return s===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const n=s.call(C(this),e,...t);return q.set(n,e.sort?e.sort():[e]),y(n)}:ne().includes(s)?function(...e){return s.apply(C(this),e),y(F.get(this))}:function(...e){return y(s.apply(C(this),e))}}function ie(s){return typeof s=="function"?oe(s):(s instanceof IDBTransaction&&ae(s),te(s,se())?new Proxy(s,v):s)}function y(s){if(s instanceof IDBRequest)return re(s);if(R.has(s))return R.get(s);const e=ie(s);return e!==s&&(R.set(s,e),I.set(e,s)),e}const C=s=>I.get(s),le=["get","getKey","getAll","getAllKeys","count"],he=["put","add","delete","clear"],k=new Map;function O(s,e){if(!(s instanceof IDBDatabase&&!(e in s)&&typeof e=="string"))return;if(k.get(e))return k.get(e);const t=e.replace(/FromIndex$/,""),n=e!==t,r=he.includes(t);if(!(t in(n?IDBIndex:IDBObjectStore).prototype)||!(r||le.includes(t)))return;const a=async function(c,...o){const i=this.transaction(c,r?"readwrite":"readonly");let l=i.store;return n&&(l=l.index(o.shift())),(await Promise.all([l[t](...o),r&&i.done]))[0]};return k.set(e,a),a}ce(s=>({...s,get:(e,t,n)=>O(e,t)||s.get(e,t,n),has:(e,t)=>!!O(e,t)||s.has(e,t)}));try{self["workbox:expiration:7.0.0"]&&_()}catch{}try{self["workbox:recipes:7.0.0"]&&_()}catch{}function ue(s){A().setCatchHandler(s)}function N(s,e){const t=e();return s.waitUntil(t),t}try{self["workbox:precaching:7.0.0"]&&_()}catch{}const fe="__WB_REVISION__";function de(s){if(!s)throw new h("add-to-cache-list-unexpected-type",{entry:s});if(typeof s=="string"){const a=new URL(s,location.href);return{cacheKey:a.href,url:a.href}}const{revision:e,url:t}=s;if(!t)throw new h("add-to-cache-list-unexpected-type",{entry:s});if(!e){const a=new URL(t,location.href);return{cacheKey:a.href,url:a.href}}const n=new URL(t,location.href),r=new URL(t,location.href);return n.searchParams.set(fe,e),{cacheKey:n.href,url:r.href}}class pe{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:e,state:t})=>{t&&(t.originalRequest=e)},this.cachedResponseWillBeUsed=async({event:e,state:t,cachedResponse:n})=>{if(e.type==="install"&&t&&t.originalRequest&&t.originalRequest instanceof Request){const r=t.originalRequest.url;n?this.notUpdatedURLs.push(r):this.updatedURLs.push(r)}return n}}}class ge{constructor({precacheController:e}){this.cacheKeyWillBeUsed=async({request:t,params:n})=>{const r=n?.cacheKey||this._precacheController.getCacheKeyForURL(t.url);return r?new Request(r,{headers:t.headers}):t},this._precacheController=e}}let w;function we(){if(w===void 0){const s=new Response("");if("body"in s)try{new Response(s.body),w=!0}catch{w=!1}w=!1}return w}async function ye(s,e){let t=null;if(s.url&&(t=new URL(s.url).origin),t!==self.location.origin)throw new h("cross-origin-copy-response",{origin:t});const n=s.clone(),r={headers:new Headers(n.headers),status:n.status,statusText:n.statusText},a=e?e(r):r,c=we()?n.body:await n.blob();return new Response(c,a)}class d extends W{constructor(e={}){e.cacheName=E.getPrecacheName(e.cacheName),super(e),this._fallbackToNetwork=e.fallbackToNetwork!==!1,this.plugins.push(d.copyRedirectedCacheableResponsesPlugin)}async _handle(e,t){const n=await t.cacheMatch(e);return n||(t.event&&t.event.type==="install"?await this._handleInstall(e,t):await this._handleFetch(e,t))}async _handleFetch(e,t){let n;const r=t.params||{};if(this._fallbackToNetwork){const a=r.integrity,c=e.integrity,o=!c||c===a;n=await t.fetch(new Request(e,{integrity:e.mode!=="no-cors"?c||a:void 0})),a&&o&&e.mode!=="no-cors"&&(this._useDefaultCacheabilityPluginIfNeeded(),await t.cachePut(e,n.clone()))}else throw new h("missing-precache-entry",{cacheName:this.cacheName,url:e.url});return n}async _handleInstall(e,t){this._useDefaultCacheabilityPluginIfNeeded();const n=await t.fetch(e);if(!await t.cachePut(e,n.clone()))throw new h("bad-precaching-response",{url:e.url,status:n.status});return n}_useDefaultCacheabilityPluginIfNeeded(){let e=null,t=0;for(const[n,r]of this.plugins.entries())r!==d.copyRedirectedCacheableResponsesPlugin&&(r===d.defaultPrecacheCacheabilityPlugin&&(e=n),r.cacheWillUpdate&&t++);t===0?this.plugins.push(d.defaultPrecacheCacheabilityPlugin):t>1&&e!==null&&this.plugins.splice(e,1)}}d.defaultPrecacheCacheabilityPlugin={async cacheWillUpdate({response:s}){return!s||s.status>=400?null:s}};d.copyRedirectedCacheableResponsesPlugin={async cacheWillUpdate({response:s}){return s.redirected?await ye(s):s}};class me{constructor({cacheName:e,plugins:t=[],fallbackToNetwork:n=!0}={}){this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map,this._strategy=new d({cacheName:E.getPrecacheName(e),plugins:[...t,new ge({precacheController:this})],fallbackToNetwork:n}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this._strategy}precache(e){this.addToCacheList(e),this._installAndActiveListenersAdded||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this._installAndActiveListenersAdded=!0)}addToCacheList(e){const t=[];for(const n of e){typeof n=="string"?t.push(n):n&&n.revision===void 0&&t.push(n.url);const{cacheKey:r,url:a}=de(n),c=typeof n!="string"&&n.revision?"reload":"default";if(this._urlsToCacheKeys.has(a)&&this._urlsToCacheKeys.get(a)!==r)throw new h("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(a),secondEntry:r});if(typeof n!="string"&&n.integrity){if(this._cacheKeysToIntegrities.has(r)&&this._cacheKeysToIntegrities.get(r)!==n.integrity)throw new h("add-to-cache-list-conflicting-integrities",{url:a});this._cacheKeysToIntegrities.set(r,n.integrity)}if(this._urlsToCacheKeys.set(a,r),this._urlsToCacheModes.set(a,c),t.length>0){const o=`Workbox is precaching URLs without revision info: ${t.join(", ")}
This is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(o)}}}install(e){return N(e,async()=>{const t=new pe;this.strategy.plugins.push(t);for(const[a,c]of this._urlsToCacheKeys){const o=this._cacheKeysToIntegrities.get(c),i=this._urlsToCacheModes.get(a),l=new Request(a,{integrity:o,cache:i,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:c},request:l,event:e}))}const{updatedURLs:n,notUpdatedURLs:r}=t;return{updatedURLs:n,notUpdatedURLs:r}})}activate(e){return N(e,async()=>{const t=await self.caches.open(this.strategy.cacheName),n=await t.keys(),r=new Set(this._urlsToCacheKeys.values()),a=[];for(const c of n)r.has(c.url)||(await t.delete(c),a.push(c.url));return{deletedURLs:a}})}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}getIntegrityForCacheKey(e){return this._cacheKeysToIntegrities.get(e)}async matchPrecache(e){const t=e instanceof Request?e.url:e,n=this.getCacheKeyForURL(t);if(n)return(await self.caches.open(this.strategy.cacheName)).match(n)}createHandlerBoundToURL(e){const t=this.getCacheKeyForURL(e);if(!t)throw new h("non-precached-url",{url:e});return n=>(n.request=new Request(e),n.params=Object.assign({cacheKey:t},n.params),this.strategy.handle(n))}}let L;const be=()=>(L||(L=new me),L);function P(s){return be().matchPrecache(s)}function Re(s={}){const e=s.pageFallback||"offline.html",t=s.imageFallback||!1,n=s.fontFallback||!1;self.addEventListener("install",a=>{const c=[e];t&&c.push(t),n&&c.push(n),a.waitUntil(self.caches.open("workbox-offline-fallbacks").then(o=>o.addAll(c)))}),ue(async a=>{const c=a.request.destination,o=await self.caches.open("workbox-offline-fallbacks");return c==="document"?await P(e)||await o.match(e)||Response.error():c==="image"&&t!==!1?await P(t)||await o.match(t)||Response.error():c==="font"&&n!==!1&&(await P(n)||await o.match(n))||Response.error()})}class Ce extends W{constructor(e={}){super(e),this._networkTimeoutSeconds=e.networkTimeoutSeconds||0}async _handle(e,t){let n,r;try{const a=[t.fetch(e)];if(this._networkTimeoutSeconds){const c=j(this._networkTimeoutSeconds*1e3);a.push(c)}if(r=await Promise.race(a),!r)throw new Error(`Timed out the network response after ${this._networkTimeoutSeconds} seconds.`)}catch(a){a instanceof Error&&(n=a)}if(!r)throw new h("no-response",{url:e.url,error:n});return r}}function _e(s){A().setDefaultHandler(s)}_e(new Ce);Re();function ke(s,e){this.observer=null,IntersectionObserver&&!this.observer&&(this.observer=new IntersectionObserver(t,e));function t(n,r){n.forEach(function(a){typeof s=="function"&&s(a,r)})}this.observe=function(n){this.observer&&this.observer.observe(n)}}"serviceWorker"in navigator&&window.addEventListener("load",async()=>{try{await fetch("/offline/").catch(()=>{});let s;const e="/service-worker.js";s=await navigator.serviceWorker.register(e)}catch{}});document.querySelector("h1").addEventListener("click",()=>{const s={top:0,left:0};U()||(s.behavior="smooth"),window.scrollTo(s)});document.addEventListener("scroll",()=>{const s=document.documentElement.scrollTop,e=document.documentElement.scrollHeight,t=Math.round(100*s/e),r=Math.max(70,100-t)/100,a=document.querySelector("h1");Math.round(a.offsetTop)<=Math.round(s)&&!U()&&B("--h1-scale",String(r))});if(!U()){const s=new ke((e,t)=>{e.intersectionRatio>0&&(e.target.classList.add("fancy-show"),t.unobserve(e.target))},{rootMargin:"0px 0px -30px 0px"});document.querySelectorAll(".spaced-group, .links-section .link-group").forEach(e=>{e.classList.add("pre-fancy-show"),s.observe(e)})}document.querySelector(".hidden-button").addEventListener("click",()=>{game()});console.log("https://resume.github.io/?hchiam");console.log("https://github.com/hchiam/learning#--");console.log("https://hchiam.com/notepad");function Le(s){document.querySelector(`a[href="${s}"]`).click()}[...document.querySelectorAll("button[data-href]")].forEach(s=>s.addEventListener("click",function(e){const t=e.target.getAttribute("data-href");Le(t)}));