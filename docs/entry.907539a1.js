import{c as g,a as b,b as S,r as a,d as t}from"./chunks/chunk.c066d72e.js";/* empty css                     */const A=g("/@fs/Users/howard/Desktop/hchiam.github.io/src/components/ImageLink.astro",{modules:[],hydratedComponents:[],clientOnlyComponents:[],hydrationDirectives:new Set([]),hoisted:[{type:"inline",value:`
  function handleClick(href) {
    document.querySelector(\`a[href="\${href}"]\`).click();
  }
  [...document.querySelectorAll("button[data-href]")].forEach((b) =>
    b.addEventListener("click", function (e) {
      const href = e.target.getAttribute("data-href");
      handleClick(href);
    })
  );
`}]}),k=b("/@fs/Users/howard/Desktop/hchiam.github.io/src/components/ImageLink.astro","https://astro.build","file:///Users/howard/Desktop/hchiam.github.io/"),y=S(async(e,o,n)=>{const r=e.createAstro(k,o,n);r.self=y;const{href:s,alt:c,src:i,width:h,height:l,target:d="_blank",aStyle:f,imgStyle:u,extraButton:m=!0}=r.props,$=[];for(const p of $)e.styles.add(p);return a`<a${t(s,"href")}${t(d,"target")}${t(f,"style")} rel="noopener noreferrer" class="astro-SCNUBS3M">
  <img${t(c,"alt")}${t(i,"src")}${t(h,"width")}${t(l,"height")}${t(u,"style")} class="astro-SCNUBS3M">
</a>
${m?a`<button${t(s,"data-href")} class="astro-SCNUBS3M">VIEW</button>`:""}



`}),L="/Users/howard/Desktop/hchiam.github.io/src/components/ImageLink.astro",U=void 0;export{A as $$metadata,y as default,L as file,U as url};
