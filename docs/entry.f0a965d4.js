function b(e,t){document.querySelector(":root").style.setProperty(e,t)}function v(e,t){this.observer=null,IntersectionObserver&&!this.observer&&(this.observer=new IntersectionObserver(o,t));function o(r,l){r.forEach(function(a){typeof e=="function"&&e(a,l)})}this.observe=function(r){this.observer&&this.observer.observe(r)}}function h(){return!window.matchMedia||!window.matchMedia("(prefers-reduced-motion: no-preference)").matches}document.addEventListener("scroll",()=>{const e=document.documentElement.scrollTop,t=document.documentElement.scrollHeight,o=Math.round(100*e/t),l=Math.max(70,100-o)/100,a=document.querySelector("h1");Math.round(a.offsetTop)<=Math.round(e)&&!h()&&b("--h1-scale",l)});if(!h()){const e=new v((t,o)=>{t.intersectionRatio>0&&(t.target.classList.add("fancy-show"),o.unobserve(t.target))},{rootMargin:"0px 0px -30px 0px"});document.querySelectorAll(".spaced-group, .links-section .link-group").forEach(t=>{t.classList.add("pre-fancy-show"),e.observe(t)})}function y(e){document.querySelector(`a[href="${e}"]`).click()}[...document.querySelectorAll("button[data-href]")].forEach(e=>e.addEventListener("click",function(t){const o=t.target.getAttribute("data-href");y(o)}));function S(){return window.matchMedia("(hover: none) and (pointer: coarse)")?.matches}const s=100,w=.01,g=10,M=4e3;let m=null,p=null,c=0,i=0,u=0,d=-s,f=-s;const n=document.querySelector("#cursor-shadow");document.addEventListener("mousemove",function(e){d=e.clientX,f=e.clientY,n.style.left=d+"px",n.style.top=f+"px",L(),setTimeout(()=>{O()},300)});T();function T(){E(),!h()&&!S()?(clearTimeout(m),m=setTimeout(()=>{x(),q()},M)):n.querySelectorAll("*").forEach(e=>e.remove())}function E(){n.classList.remove("show-orbits")}function x(){n.classList.add("show-orbits")}function L(){n.classList.add("fade-orbits")}function O(){n.classList.remove("fade-orbits")}function q(){clearInterval(p),p=setInterval(()=>{[...n.querySelectorAll("*")].forEach(function(t,o){u+=w;const r=o*s/5;c=d,i=f,c+=s*Math.round(Math.sin(-u+r)*1e3)/1e3,i+=s*Math.round(Math.cos(u+r)*1e3)/1e3,c-=8,i-=8,t.style.left=c+"px",t.style.top=i+"px"})},g)}