import{v as x,_ as S}from"./1wswyEp7.js";import{_ as C}from"./5ocTn9JA.js";import{u as R}from"./lBH-Kegq.js";import{f as A,y as c,ah as L,Q as U,o as k,c as B,a as i,b as l,i as m,j as d,w,d as g}from"./CzWF6RPa.js";import{e as r}from"./Dnc2z6XF.js";import{u as h,a as N}from"./w_ISQSJu.js";const j={class:"flex items-center justify-center min-h-screen"},E={class:"rounded bg-sidebar w-1/4 p-5"},M=i("h1",{class:"text-2xl font-bold text-center mb-5"},"Login",-1),I={class:"flex items-center justify-center gap-5"},D=A({__name:"login",setup(O){const p=h();R({title:"Login | CRM System"});const t=c(""),s=c(""),a=c(""),f=N(),y=h(),V=L();U(async()=>{p.isAuth&&(await r.deleteSession("current"),p.clear())});const _=async()=>{const n={"Access-Control-Allow-Origin":"*"};f.set(!0),await r.createEmailPasswordSession(t.value,s.value,n);const e=await r.get();e&&y.set({email:e.email,name:e.name,status:e.status}),t.value="",s.value="",a.value="",await V.push("/"),f.set(!1)},b=async()=>{const n={"Access-Control-Allow-Origin":"*"};await r.create(x(),t.value,s.value,a.value,n),await _()};return(n,e)=>{const u=S,v=C;return k(),B("div",j,[i("div",E,[M,i("form",null,[l(u,{modelValue:m(t),"onUpdate:modelValue":e[0]||(e[0]=o=>d(t)?t.value=o:null),placeholder:"Email",type:"email",class:"mb-3"},null,8,["modelValue"]),l(u,{modelValue:m(s),"onUpdate:modelValue":e[1]||(e[1]=o=>d(s)?s.value=o:null),placeholder:"Password",type:"password",class:"mb-3"},null,8,["modelValue"]),l(u,{modelValue:m(a),"onUpdate:modelValue":e[2]||(e[2]=o=>d(a)?a.value=o:null),placeholder:"Name",type:"name",class:"mb-3"},null,8,["modelValue"]),i("div",I,[l(v,{type:"button",onClick:_},{default:w(()=>[g("Login")]),_:1}),l(v,{type:"button",onClick:b},{default:w(()=>[g("Register")]),_:1})])])])])}}});export{D as default};
