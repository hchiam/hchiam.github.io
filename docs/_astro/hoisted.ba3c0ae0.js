import{p as c,s as m}from"./hoisted.d4dfdf36.js";import"./hoisted.4848743b.js";function p(e,t){this.observer=null,IntersectionObserver&&!this.observer&&(this.observer=new IntersectionObserver(i,t));function i(o,n){o.forEach(function(s){typeof e=="function"&&e(s,n)})}this.observe=function(o){this.observer&&this.observer.observe(o)}}function y(e,t){e.classList.remove(t),e.offsetWidth,e.classList.add(t)}"serviceWorker"in navigator&&window.addEventListener("load",async()=>{try{await fetch("/offline/").catch(()=>{});let e;const t="/service-worker.js";e=await navigator.serviceWorker.register(t)}catch{}});function h(e){var t=e.key||e.code||e.keyCode||e.which||e;return t==="Enter"||t==="ENTER"||t===13}function b(e){var t=e.key||e.code||e.keyCode||e.which||e;return t===" "||t==="Spacebar"||t===32}v();function v(){const e=document.querySelector("h2.tagline"),t=document.querySelectorAll("h2:not(.tagline)");e.setAttribute("tabindex","0"),e.setAttribute("role","button"),e.setAttribute("aria-controls","tagline_details");const i=e.parentElement.querySelector(".tagline-details");i.style.maxHeight="",c()||(i.style.transition="max-height 0.2s"),i.style.overflow="hidden",e.setAttribute("aria-expanded","true");function o(){i.style.maxHeight===""?(i.style.maxHeight="0px",i.style.padding="0px",i.parentElement.style.minHeight="0px",e.setAttribute("aria-expanded","false")):(i.style.maxHeight="",i.style.padding="",i.parentElement.style.minHeight="50vh",e.setAttribute("aria-expanded","true"))}e.addEventListener("click",()=>{o()}),e.addEventListener("keyup",n=>{h(n)&&o()}),t.forEach((n,s)=>{const d=s===t.length-1;n.setAttribute("tabindex","0"),n.setAttribute("role","button"),n.setAttribute("aria-controls","collapsible_section_"+(s+1));const r=n.parentElement;r.style.maxHeight="500vh",c()||(r.style.transition="max-height 0.2s"),r.style.overflow="hidden",n.setAttribute("aria-expanded","true");function f(){const l=[...r.children].filter(a=>a.tagName.toLowerCase()==="div");r.style.maxHeight==="500vh"?(r.style.maxHeight=n.clientHeight+"px",d||(r.style.marginBlockEnd="0px"),l.map(a=>a.setAttribute("inert","true")),n.setAttribute("aria-expanded","false")):(r.style.maxHeight="500vh",d||(r.style.marginBlockEnd="var(--size-12)"),l.map(a=>a.removeAttribute("inert")),n.setAttribute("aria-expanded","true"))}n.addEventListener("click",()=>{f()}),n.addEventListener("keyup",l=>{h(l)&&f()})})}const u=document.querySelector("h1");function g(){const e={top:0,left:0};c()||(e.behavior="smooth"),window.scrollTo(e),y(u,"animation")}u.addEventListener("click",()=>{g()});u.addEventListener("keypress",e=>{(h(e)||b(e))&&g()});document.addEventListener("scroll",()=>{const e=document.documentElement.scrollTop,t=document.documentElement.scrollHeight,i=Math.round(100*e/t),n=Math.max(70,100-i)/100,s=document.querySelector("h1");Math.round(s.offsetTop)<=Math.round(e)&&!c()&&m("--h1-scale",String(n))});if(!c()){const e=new p((t,i)=>{t.intersectionRatio>0&&(t.target.classList.add("fancy-show"),i.unobserve(t.target))},{rootMargin:"0px 0px -30px 0px"});document.querySelectorAll(".spaced-group, .links-section .link-group").forEach(t=>{t.classList.add("pre-fancy-show"),e.observe(t)})}document.querySelector(".hidden-button").addEventListener("click",()=>{game()});console.log("https://resume.github.io/?hchiam");console.log("https://github.com/hchiam/learning#--");console.log("https://hchiam.com/notepad");function k(e){document.querySelector(`a[href="${e}"]`).click()}[...document.querySelectorAll("button[data-href]")].forEach(e=>e.addEventListener("click",function(t){const i=t.target.getAttribute("data-href");k(i)}));
