function i(e,t,o){(o||document.querySelector(":root")).style.setProperty(e,t)}function h(e,t){this.observer=null,IntersectionObserver&&!this.observer&&(this.observer=new IntersectionObserver(o,t));function o(n,s){n.forEach(function(c){typeof e=="function"&&e(c,s)})}this.observe=function(n){this.observer&&this.observer.observe(n)}}function a(){return!window.matchMedia||!window.matchMedia("(prefers-reduced-motion: no-preference)").matches}document.addEventListener("scroll",()=>{const e=document.documentElement.scrollTop,t=document.documentElement.scrollHeight,o=Math.round(100*e/t),s=Math.max(70,100-o)/100,c=document.querySelector("h1");Math.round(c.offsetTop)<=Math.round(e)&&!a()&&i("--h1-scale",s)});if(!a()){const e=new h((t,o)=>{t.intersectionRatio>0&&(t.target.classList.add("fancy-show"),o.unobserve(t.target))},{rootMargin:"0px 0px -30px 0px"});document.querySelectorAll(".spaced-group, .links-section .link-group").forEach(t=>{t.classList.add("pre-fancy-show"),e.observe(t)})}function m(e){document.querySelector(`a[href="${e}"]`).click()}[...document.querySelectorAll("button[data-href]")].forEach(e=>e.addEventListener("click",function(t){const o=t.target.getAttribute("data-href");m(o)}));function b(){return window.matchMedia("(hover: none) and (pointer: coarse)")?.matches}const f=100,p=4e3;let u=null,d=-f,l=-f;const r=document.querySelector("#cursor-shadow");document.addEventListener("mousemove",function(e){d=e.clientX,l=e.clientY,i("--left",d+"px",r),i("--top",l+"px",r),g(),setTimeout(()=>{y()},1e3)});v();function v(){w(),!a()&&!b()?(clearTimeout(u),u=setTimeout(()=>{S()},p)):r.querySelectorAll("*").forEach(e=>e.remove())}function w(){r.classList.remove("show-orbits")}function S(){r.classList.add("show-orbits")}function g(){r.classList.add("fade-orbits")}function y(){r.classList.remove("fade-orbits")}