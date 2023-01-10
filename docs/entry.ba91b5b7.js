import{c as k,a as g,b as y,r as a,d as t}from"./chunks/chunk.c066d72e.js";/* empty css                     */const L=k("/@fs/Users/howard/Desktop/hchiam.com/src/components/ImageLink.astro",{modules:[],hydratedComponents:[],clientOnlyComponents:[],hydrationDirectives:new Set([]),hoisted:[{type:"inline",value:`
  function handleClick(href) {
    document.querySelector(\`a[href="\${href}"]\`).click();
  }
  [...document.querySelectorAll("button[data-href]")].forEach((b) =>
    b.addEventListener("click", function (e) {
      const href = e.target.getAttribute("data-href");
      handleClick(href);
    })
  );
`}]}),b=g("/@fs/Users/howard/Desktop/hchiam.com/src/components/ImageLink.astro","https://astro.build","file:///Users/howard/Desktop/hchiam.com/"),S=y(async(e,o,n)=>{const r=e.createAstro(b,o,n);r.self=S;const{href:s,alt:c,src:i,width:h,height:l,target:d="_blank",aStyle:m,imgStyle:f,extraButton:u=!0}=r.props,$=[];for(const p of $)e.styles.add(p);return a`<a${t(s,"href")}${t(d,"target")}${t(m,"style")} rel="noopener noreferrer" class="astro-26H4WVTH">
  <img${t(c,"alt")}${t(i,"src")}${t(h,"width")}${t(l,"height")}${t(f,"style")} class="astro-26H4WVTH">
</a>
${u?a`<button${t(s,"data-href")} class="astro-26H4WVTH">VIEW</button>`:""}



`}),H="/Users/howard/Desktop/hchiam.com/src/components/ImageLink.astro",C=void 0;export{L as $$metadata,S as default,H as file,C as url};
