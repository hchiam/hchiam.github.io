function i(e,t,o){(o||document.querySelector(":root")).style.setProperty(e,t)}function m(e,t){this.observer=null,IntersectionObserver&&!this.observer&&(this.observer=new IntersectionObserver(o,t));function o(r,c){r.forEach(function(s){typeof e=="function"&&e(s,c)})}this.observe=function(r){this.observer&&this.observer.observe(r)}}function a(){return!window.matchMedia||!window.matchMedia("(prefers-reduced-motion: no-preference)").matches}document.addEventListener("scroll",()=>{const e=document.documentElement.scrollTop,t=document.documentElement.scrollHeight,o=Math.round(100*e/t),c=Math.max(70,100-o)/100,s=document.querySelector("h1");Math.round(s.offsetTop)<=Math.round(e)&&!a()&&i("--h1-scale",c)});if(!a()){const e=new m((t,o)=>{t.intersectionRatio>0&&(t.target.classList.add("fancy-show"),o.unobserve(t.target))},{rootMargin:"0px 0px -30px 0px"});document.querySelectorAll(".spaced-group, .links-section .link-group").forEach(t=>{t.classList.add("pre-fancy-show"),e.observe(t)})}function b(e){document.querySelector(`a[href="${e}"]`).click()}[...document.querySelectorAll("button[data-href]")].forEach(e=>e.addEventListener("click",function(t){const o=t.target.getAttribute("data-href");b(o)}));function p(){return window.matchMedia("(hover: none) and (pointer: coarse)")?.matches}const h=100,v=4e3;let u=null,d=-h,l=-h;const n=document.querySelector("#cursor-shadow");document.addEventListener("mousemove",function(e){d=e.clientX,l=e.clientY,i("--left",d+"px",n),i("--top",l+"px",n),g(),setTimeout(()=>{L()},1e3)});w();function w(){S(),!a()&&!p()?(clearTimeout(u),u=setTimeout(()=>{y()},v)):n.querySelectorAll("*").forEach(e=>e.remove())}function S(){n.classList.remove("show-orbits")}function y(){n.classList.add("show-orbits")}function g(){n.classList.add("fade-orbits")}function L(){n.classList.remove("fade-orbits")}const f=document.querySelector("#contact_button"),T=document.querySelector("#contact_container");f.addEventListener("click",()=>{f.classList.add("hide"),T.classList.add("show")});
