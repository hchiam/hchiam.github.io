import{p as o}from"./prefers-reduced-motion.bKXeiKAd.js";async function u(l){await new Promise(t=>setTimeout(t,l))}async function g(){for(let t of document.querySelectorAll("[data-translation-title]")){let e=t.getAttribute("data-translation-title"),a=t.getAttribute("title");t.setAttribute("data-english-title",a),t.setAttribute("title",e)}for(let t of document.querySelectorAll("[data-translation-alt]")){let e=t.getAttribute("data-translation-alt"),a=t.getAttribute("alt");t.setAttribute("data-english-alt",a),t.setAttribute("alt",e)}for(let t of document.querySelectorAll("[data-translation-aria-label]")){let e=t.getAttribute("data-translation-aria-label"),a=t.getAttribute("aria-label");t.setAttribute("data-english-aria-label",a),t.setAttribute("aria-label",e)}const l=[];for(let t of document.querySelectorAll("[data-translation]"))l.push(s(t));await Promise.all(l)}async function s(l,t=!1){let e=l.getAttribute(t?"data-english":"data-translation"),a=l.innerText.trim();l.setAttribute(t?"data-translation":"data-english",a);const i=Math.max(e.length,a.length)+1;e=e.padEnd(i," "),a=a.padEnd(i," ");for(let r=0;r<i;r++)l.innerText=e.slice(0,r)+a.slice(r,i),o()||await u(10);l.innerText=l.innerText.trim()}async function d(){for(let t of document.querySelectorAll("[data-english-title]")){let e=t.getAttribute("data-english-title"),a=t.getAttribute("title");t.setAttribute("data-translation-title",a),t.setAttribute("title",e)}for(let t of document.querySelectorAll("[data-english-alt]")){let e=t.getAttribute("data-english-alt"),a=t.getAttribute("alt");t.setAttribute("data-translation-alt",a),t.setAttribute("alt",e)}for(let t of document.querySelectorAll("[data-english-aria-label]")){let e=t.getAttribute("data-english-aria-label"),a=t.getAttribute("aria-label");t.setAttribute("data-translation-aria-label",a),t.setAttribute("aria-label",e)}const l=[];for(let t of document.querySelectorAll("[data-english]"))l.push(s(t,!0));await Promise.all(l)}const n=document.querySelector("#translate-button");n.addEventListener("click",async()=>{n.blur(),n.getAttribute("data-current-language")==="en"?(n.setAttribute("data-current-language","fr"),n.classList.add("translating"),await g(),n.classList.remove("translating")):(n.setAttribute("data-current-language","en"),n.classList.add("translating"),await d(),n.classList.remove("translating"))});
