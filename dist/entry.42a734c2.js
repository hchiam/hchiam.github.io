import{l as f,n as u}from"./chunks/chunk.c1a8caf8.js";async function p(s,c,i){let o=null,r;async function a(){var l;f(a);const e=document.querySelectorAll(`astro-root[ssr][uid="${s}"]`);if(e.length!==0){if(typeof o!="string"){let t=e[0].querySelector("astro-fragment");if(t==null&&e[0].hasAttribute("tmpl")){let n=e[0].querySelector("template[data-astro-template]");n&&(o=n.innerHTML,n.remove())}else t&&(o=t.innerHTML)}r||(r=await i());for(const t of e)(l=t.parentElement)!=null&&l.closest("astro-root[ssr]")||(await r(t,o),t.removeAttribute("ssr"));u()}}a()}export{p as default};