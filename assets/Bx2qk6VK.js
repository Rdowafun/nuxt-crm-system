import{f,al as m,C as I,D as r,o as x,c as d,X as v,_}from"./Cfm70OHh.js";import{r as S}from"./CvPl5tTm.js";const y=f({__name:"IconCSS",props:{name:{type:String,required:!0},size:{type:String,default:""}},setup(u){m(e=>({f7a8f4a4:p.value}));const t=I(),o=u,l=r(()=>{var e,n;return(n=(e=t.nuxtIcon)==null?void 0:e.aliases)!=null&&n[o.name]?t.nuxtIcon.aliases[o.name]:o.name}),c=r(()=>S(l.value)),p=r(()=>{var s,a;const e=(a=(s=t.nuxtIcon)==null?void 0:s.iconifyApiOptions)==null?void 0:a.url;if(e)try{new URL(e)}catch{console.warn("Nuxt IconCSS: Invalid custom Iconify API URL");return}return`url('${e||"https://api.iconify.design"}/${c.value.prefix}/${c.value.name}.svg')`}),i=r(()=>{var n,s,a;if(!o.size&&typeof((n=t.nuxtIcon)==null?void 0:n.size)=="boolean"&&!((s=t.nuxtIcon)!=null&&s.size))return;const e=o.size||((a=t.nuxtIcon)==null?void 0:a.size)||"1em";return String(Number(e))===e?`${e}px`:e});return(e,n)=>(x(),d("span",{style:v({width:i.value,height:i.value})},null,4))}}),h=_(y,[["__scopeId","data-v-4ec364c6"]]);export{h as default};