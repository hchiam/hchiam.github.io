import{s as g}from"./css-variable.Db-cYxmE.js";import{p as r}from"./prefers-reduced-motion.bKXeiKAd.js";import"./ux.astro_astro_type_script_index_0_lang.B1vEbpbi.js";function y(H,e){this.observer=null,IntersectionObserver&&!this.observer&&(this.observer=new IntersectionObserver(C,e));function C(i,n){i.forEach(function(t){typeof H=="function"&&H(t,n)})}this.observe=function(i){this.observer&&this.observer.observe(i)}}function b(H,e){H.classList.remove(e),H.offsetWidth,H.classList.add(e)}"serviceWorker"in navigator&&window.addEventListener("load",async()=>{try{await fetch("/offline/").catch(()=>{});let H;H=await navigator.serviceWorker.register("/service-worker.js")}catch{}});function h(H){var e=H.key||H.code||H.keyCode||H.which||H;return e==="Enter"||e==="ENTER"||e===13}function v(H){var e=H.key||H.code||H.keyCode||H.which||H;return e===" "||e==="Spacebar"||e===32}x();function x(){const H=document.querySelector("h2.tagline"),e=document.querySelectorAll("h2:not(.tagline), .collapsible-heading");H.setAttribute("tabindex","0"),H.setAttribute("role","button"),H.setAttribute("aria-controls","tagline_details");const C=H.parentElement.querySelector(".tagline-details");C.style.maxHeight="",r()||(C.style.transition="max-height 0.2s"),C.style.overflow="hidden",H.setAttribute("aria-expanded","true");function i(){C.style.maxHeight===""?(C.style.maxHeight="0px",C.style.padding="0px",C.parentElement.style.minHeight="0px",H.setAttribute("aria-expanded","false")):(C.style.maxHeight="",C.style.padding="",C.parentElement.style.minHeight="50vh",H.setAttribute("aria-expanded","true"))}H.addEventListener("click",()=>{i()}),H.addEventListener("keyup",t=>{h(t)&&i()});const n="5000vh";e.forEach((t,a)=>{const s=a===e.length-1,d=t.classList.contains("collapsible-heading");t.setAttribute("tabindex","0"),t.setAttribute("role","button"),t.setAttribute("aria-controls","collapsible_section_"+(a+1));const o=t.parentElement;o.style.maxHeight=n,r()||(o.style.transition="max-height 0.2s"),o.style.overflow="hidden",t.setAttribute("aria-expanded",t.getAttribute("aria-expanded")||"true"),t.getAttribute("aria-expanded")==="false"&&u();function u(){const l=[...o.children].filter(c=>c.tagName.toLowerCase()==="div");o.style.maxHeight===n?(o.style.maxHeight=t.clientHeight+"px",s||(o.style.marginBlockEnd="0px"),l.map(c=>c.setAttribute("inert","true")),t.setAttribute("aria-expanded","false")):(o.style.maxHeight=n,!s&&!d&&(o.style.marginBlockEnd="var(--size-12)"),l.map(c=>c.removeAttribute("inert")),t.setAttribute("aria-expanded","true"))}t.addEventListener("click",()=>{u()}),t.addEventListener("keyup",l=>{h(l)&&u()})})}r()||E();async function E(H=65,e=122,C=50,i=1e3){const n='url("./fonts/PenFriendlyBraille.ttf") format("truetype")',t="PenFriendlyBraille",a="U+"+H.toString(16).toUpperCase()+"-";for(let s=e;s>=H;s--){const d=s.toString(16).toUpperCase();k(a+d,n,t),await p(C),s===e&&await p(i)}document.querySelector("style."+t).remove()}function k(H,e,C){let i=document.querySelector("style."+C);const n=!!i;if(n)i.textContent=i.textContent.replace(/unicode-range: [^;]+;/,`unicode-range: ${H};`);else{i=document.createElement("style"),i.classList.add(C);const t=`
        @font-face {
          font-family: ${C};
          src: ${e};
          unicode-range: ${H};
          font-display: block;
        }
      `;i.textContent=t}n||document.head.appendChild(i)}async function p(H){await new Promise(e=>setTimeout(e,H||1e3))}const f=document.querySelector("h1");function m(){const H={top:0,left:0};r()||(H.behavior="smooth"),window.scrollTo(H),b(f,"animation")}f.addEventListener("click",()=>{m()});f.addEventListener("keypress",H=>{(h(H)||v(H))&&m()});document.addEventListener("scroll",()=>{const H=document.documentElement.scrollTop,e=document.documentElement.scrollHeight,C=Math.round(100*H/e),n=Math.max(70,100-C)/100,t=document.querySelector("h1");Math.round(t.offsetTop)<=Math.round(H)&&!r()&&g("--h1-scale",String(n))});if(!r()){const H=new y((e,C)=>{e.intersectionRatio>0&&(e.target.classList.add("fancy-show"),C.unobserve(e.target))},{rootMargin:"0px 0px -30px 0px"});document.querySelectorAll(".spaced-group, .links-section .link-group").forEach(e=>{e.classList.add("pre-fancy-show"),H.observe(e)})}document.querySelector(".hidden-button")?.addEventListener("click",()=>{game()});console.log("https://resume.github.io/?hchiam");console.log("https://github.com/hchiam/learning#--");console.log("https://hchiam.com/notepad");console.log(`HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH
HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHCCCCCCCCH
HHHHHHHHHHCCCCCCCCCCCCCCCCCCCCCCCCCCCCH
HCCCCCCCCCCCCCCCCCCCCCCCHHHHHHHHHHCCCHH
HCCCCHHHHHHCCCHHHHHHHHHHHHHHHHHHHHCCCHH
HCCCCHHHHHHCCCHHHHHHHHHHHHHHHHHHHCCCCHH
HCCCCHHHHHHCCCHHHHHHHHHHHHHHHHHHHCCCCHH
HHCCCHHHHHCCCCHHHHHHHHHHHCCCHHHHHCCCHHH
HHCCCHHHHHCCCCHHCCCCHHHHHCCCCCCCHCCCHHH
HHCCCHHHHHCCCCCCCCCCHHHHCCCCCCCCCCCCHHH
HHCCCCHHHHCCCCCHCCCCHHHHCCCHHHHHHCCCHHH
HHCCCCHHHHHHHHHHCCCCHHHHCCCHHHHHCCCCHHH
HHCCCCHHHHHHHHHHCCCHHHHCCCCHHHHHCCCCHHH
HHHCCCHHHCCCHHHHCCCHHHHCCCHHHCCCCCCHHHH
HHHCCCHHHCCCHHHHCCCHHHHCCCHHHCCCCCCHHHH
HHHCCCHHHCCCHHHCCCCHHHCCCCHHHHHHCCCHHHH
HHHCCCCHHCCCHHHCCCHHHHCCCCHHHHHCCCCHHHH
HHHCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCHHHH
HHHHCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCHHHHH
HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH`);
