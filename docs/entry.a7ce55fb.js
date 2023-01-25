import{c as S,a as k,b as g,r as a,d as t}from"./chunks/chunk.c066d72e.js";/* empty css                     */const L=S("/@fs/Users/howard/Desktop/hchiam.com/src/components/ImageLink.astro",{modules:[],hydratedComponents:[],clientOnlyComponents:[],hydrationDirectives:new Set([]),hoisted:[{type:"inline",value:`
  function handleClick(href) {
    document.querySelector(\`a[href="\${href}"]\`).click();
  }
  [...document.querySelectorAll("button[data-href]")].forEach((b) =>
    b.addEventListener("click", function (e) {
      const href = e.target.getAttribute("data-href");
      handleClick(href);
    })
  );
`}]}),y=k("/@fs/Users/howard/Desktop/hchiam.com/src/components/ImageLink.astro","https://astro.build","file:///Users/howard/Desktop/hchiam.com/"),b=g(async(e,o,n)=>{const r=e.createAstro(y,o,n);r.self=b;const{href:s,alt:c,src:i,width:h,height:l,target:d="_blank",aStyle:m,imgStyle:f,extraButton:u=!0}=r.props,$=[];for(const p of $)e.styles.add(p);return a`<a${t(s,"href")}${t(d,"target")}${t(m,"style")} rel="noopener noreferrer" class="astro-XK7PSBAS">
  <img${t(c,"alt")}${t(i,"src")}${t(h,"width")}${t(l,"height")}${t(f,"style")} class="astro-XK7PSBAS">
</a>
${u?a`<button${t(s,"data-href")} class="astro-XK7PSBAS">VIEW</button>`:""}



`}),C="/Users/howard/Desktop/hchiam.com/src/components/ImageLink.astro",D=void 0;export{L as $$metadata,b as default,C as file,D as url};
