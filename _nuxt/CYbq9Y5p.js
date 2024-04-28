var Te=(e,t,r)=>{if(!t.has(e))throw TypeError("Cannot "+r)};var O=(e,t,r)=>(Te(e,t,"read from private field"),r?r.call(e):t.get(e)),Y=(e,t,r)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,r)},J=(e,t,r,s)=>(Te(e,t,"write to private field"),s?s.call(e,r):t.set(e,r),r);var X=(e,t,r)=>(Te(e,t,"access private method"),r);import{Y as Tt,Z as Nt,$ as He,a0 as Ft,a1 as Bt,D as w,a2 as Ut,U as be,a3 as Dt,h as ge,a4 as zt,a5 as kt,a6 as it,a7 as Lt,y as K,i as Q,V as U,Q as $t,j as Ge,M as xt,E as C,N as Kt,S as Wt}from"./TS8Ct8CN.js";import{a as qt}from"./DW21fJGb.js";var W,q,R,k,ee,ye,ce,Be,nt,Ht=(nt=class extends Tt{constructor(t,r){super();Y(this,ee);Y(this,ce);Y(this,W,void 0);Y(this,q,void 0);Y(this,R,void 0);Y(this,k,void 0);J(this,W,t),this.setOptions(r),this.bindMethods(),X(this,ee,ye).call(this)}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(t){var s;const r=this.options;this.options=O(this,W).defaultMutationOptions(t),Nt(this.options,r)||O(this,W).getMutationCache().notify({type:"observerOptionsUpdated",mutation:O(this,R),observer:this}),r!=null&&r.mutationKey&&this.options.mutationKey&&He(r.mutationKey)!==He(this.options.mutationKey)?this.reset():((s=O(this,R))==null?void 0:s.state.status)==="pending"&&O(this,R).setOptions(this.options)}onUnsubscribe(){var t;this.hasListeners()||(t=O(this,R))==null||t.removeObserver(this)}onMutationUpdate(t){X(this,ee,ye).call(this),X(this,ce,Be).call(this,t)}getCurrentResult(){return O(this,q)}reset(){var t;(t=O(this,R))==null||t.removeObserver(this),J(this,R,void 0),X(this,ee,ye).call(this),X(this,ce,Be).call(this)}mutate(t,r){var s;return J(this,k,r),(s=O(this,R))==null||s.removeObserver(this),J(this,R,O(this,W).getMutationCache().build(O(this,W),this.options)),O(this,R).addObserver(this),O(this,R).execute(t)}},W=new WeakMap,q=new WeakMap,R=new WeakMap,k=new WeakMap,ee=new WeakSet,ye=function(){var r;const t=((r=O(this,R))==null?void 0:r.state)??Ft();J(this,q,{...t,isPending:t.status==="pending",isSuccess:t.status==="success",isError:t.status==="error",isIdle:t.status==="idle",mutate:this.mutate,reset:this.reset})},ce=new WeakSet,Be=function(t){Bt.batch(()=>{var r,s,u,l,d,m,h,c;if(O(this,k)&&this.hasListeners()){const y=O(this,q).variables,g=O(this,q).context;(t==null?void 0:t.type)==="success"?((s=(r=O(this,k)).onSuccess)==null||s.call(r,t.data,y,g),(l=(u=O(this,k)).onSettled)==null||l.call(u,t.data,null,y,g)):(t==null?void 0:t.type)==="error"&&((m=(d=O(this,k)).onError)==null||m.call(d,t.error,y,g),(c=(h=O(this,k)).onSettled)==null||c.call(h,void 0,t.error,y,g))}this.listeners.forEach(y=>{y(O(this,q))})})},nt);function Mr(e,t){const r=t||qt(),s=w(()=>r.defaultMutationOptions(Ut(e))),u=new Ht(r,s.value),l=be(u.getCurrentResult()),d=u.subscribe(c=>{Dt(l,c)}),m=(c,y)=>{u.mutate(c,y).catch(()=>{})};ge(s,()=>{u.setOptions(s.value)}),zt(()=>{d()});const h=kt(it(l));return ge(()=>l.error,c=>{if(c&&Lt(s.value.throwOnError,[c]))throw c}),{...h,mutate:m,mutateAsync:l.mutate,reset:l.reset}}/**
  * vee-validate v4.12.6
  * (c) 2024 Abdelrahman Awad
  * @license MIT
  */function B(e){return typeof e=="function"}function st(e){return e==null}const te=e=>e!==null&&!!e&&typeof e=="object"&&!Array.isArray(e);function Ue(e){return Number(e)>=0}function Gt(e){return typeof e=="object"&&e!==null}function Yt(e){return e==null?e===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(e)}function Ye(e){if(!Gt(e)||Yt(e)!=="[object Object]")return!1;if(Object.getPrototypeOf(e)===null)return!0;let t=e;for(;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function oe(e,t){return Object.keys(t).forEach(r=>{if(Ye(t[r])&&Ye(e[r])){e[r]||(e[r]={}),oe(e[r],t[r]);return}e[r]=t[r]}),e}function he(e){const t=e.split(".");if(!t.length)return"";let r=String(t[0]);for(let s=1;s<t.length;s++){if(Ue(t[s])){r+=`[${t[s]}]`;continue}r+=`.${t[s]}`}return r}const Qt={};function Zt(e){return Qt[e]}function Qe(e,t,r){typeof r.value=="object"&&(r.value=_(r.value)),!r.enumerable||r.get||r.set||!r.configurable||!r.writable||t==="__proto__"?Object.defineProperty(e,t,r):e[t]=r.value}function _(e){if(typeof e!="object")return e;var t=0,r,s,u,l=Object.prototype.toString.call(e);if(l==="[object Object]"?u=Object.create(e.__proto__||null):l==="[object Array]"?u=Array(e.length):l==="[object Set]"?(u=new Set,e.forEach(function(d){u.add(_(d))})):l==="[object Map]"?(u=new Map,e.forEach(function(d,m){u.set(_(m),_(d))})):l==="[object Date]"?u=new Date(+e):l==="[object RegExp]"?u=new RegExp(e.source,e.flags):l==="[object DataView]"?u=new e.constructor(_(e.buffer)):l==="[object ArrayBuffer]"?u=e.slice(0):l.slice(-6)==="Array]"&&(u=new e.constructor(e)),u){for(s=Object.getOwnPropertySymbols(e);t<s.length;t++)Qe(u,s[t],Object.getOwnPropertyDescriptor(e,s[t]));for(t=0,s=Object.getOwnPropertyNames(e);t<s.length;t++)Object.hasOwnProperty.call(u,r=s[t])&&u[r]===e[r]||Qe(u,r,Object.getOwnPropertyDescriptor(e,r))}return u||e}const Jt=Symbol("vee-validate-form"),Xt=typeof window<"u";function er(e){return B(e)&&!!e.__locatorRef}function H(e){return!!e&&B(e.parse)&&e.__type==="VVTypedSchema"}function at(e){return!!e&&B(e.validate)}function tr(e){return e==="checkbox"||e==="radio"}function rr(e){return te(e)||Array.isArray(e)}function nr(e){return Array.isArray(e)?e.length===0:te(e)&&Object.keys(e).length===0}function Oe(e){return/^\[.+\]$/i.test(e)}function ir(e){return ut(e)&&e.multiple}function ut(e){return e.tagName==="SELECT"}function sr(e){return lt(e)&&e.target&&"submit"in e.target}function lt(e){return e?!!(typeof Event<"u"&&B(Event)&&e instanceof Event||e&&e.srcElement):!1}function le(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){if(e.constructor!==t.constructor)return!1;var r,s,u;if(Array.isArray(e)){if(r=e.length,r!=t.length)return!1;for(s=r;s--!==0;)if(!le(e[s],t[s]))return!1;return!0}if(e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(s of e.entries())if(!t.has(s[0]))return!1;for(s of e.entries())if(!le(s[1],t.get(s[0])))return!1;return!0}if(Ze(e)&&Ze(t))return!(e.size!==t.size||e.name!==t.name||e.lastModified!==t.lastModified||e.type!==t.type);if(e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(s of e.entries())if(!t.has(s[0]))return!1;return!0}if(ArrayBuffer.isView(e)&&ArrayBuffer.isView(t)){if(r=e.length,r!=t.length)return!1;for(s=r;s--!==0;)if(e[s]!==t[s])return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===t.toString();for(u=Object.keys(e),r=u.length,s=r;s--!==0;){var l=u[s];if(!le(e[l],t[l]))return!1}return!0}return e!==e&&t!==t}function Ze(e){return Xt?e instanceof File:!1}function De(e){return Oe(e)?e.replace(/\[|\]/gi,""):e}function L(e,t,r){return e?Oe(t)?e[De(t)]:(t||"").split(/\.|\[(\d+)\]/).filter(Boolean).reduce((u,l)=>rr(u)&&l in u?u[l]:r,e):r}function x(e,t,r){if(Oe(t)){e[De(t)]=r;return}const s=t.split(/\.|\[(\d+)\]/).filter(Boolean);let u=e;for(let l=0;l<s.length;l++){if(l===s.length-1){u[s[l]]=r;return}(!(s[l]in u)||st(u[s[l]]))&&(u[s[l]]=Ue(s[l+1])?[]:{}),u=u[s[l]]}}function Ne(e,t){if(Array.isArray(e)&&Ue(t)){e.splice(Number(t),1);return}te(e)&&delete e[t]}function Je(e,t){if(Oe(t)){delete e[De(t)];return}const r=t.split(/\.|\[(\d+)\]/).filter(Boolean);let s=e;for(let l=0;l<r.length;l++){if(l===r.length-1){Ne(s,r[l]);break}if(!(r[l]in s)||st(s[r[l]]))break;s=s[r[l]]}const u=r.map((l,d)=>L(e,r.slice(0,d).join(".")));for(let l=u.length-1;l>=0;l--)if(nr(u[l])){if(l===0){Ne(e,r[0]);continue}Ne(u[l-1],r[l-1])}}function T(e){return Object.keys(e)}function Xe(e,t=0){let r=null,s=[];return function(...u){return r&&clearTimeout(r),r=setTimeout(()=>{const l=e(...u);s.forEach(d=>d(l)),s=[]},t),new Promise(l=>s.push(l))}}function ar(e,t){let r;return async function(...u){const l=e(...u);r=l;const d=await l;return l!==r?d:(r=void 0,t(d,u))}}function et(e){return Array.isArray(e)?e:e?[e]:[]}function me(e,t){const r={};for(const s in e)t.includes(s)||(r[s]=e[s]);return r}function ur(e){let t=null,r=[];return function(...s){const u=U(()=>{if(t!==u)return;const l=e(...s);r.forEach(d=>d(l)),r=[],t=null});return t=u,new Promise(l=>r.push(l))}}function Fe(e){if(ot(e))return e._value}function ot(e){return"_value"in e}function lr(e){return e.type==="number"||e.type==="range"?Number.isNaN(e.valueAsNumber)?e.value:e.valueAsNumber:e.value}function tt(e){if(!lt(e))return e;const t=e.target;if(tr(t.type)&&ot(t))return Fe(t);if(t.type==="file"&&t.files){const r=Array.from(t.files);return t.multiple?r:r[0]}if(ir(t))return Array.from(t.options).filter(r=>r.selected&&!r.disabled).map(Fe);if(ut(t)){const r=Array.from(t.options).find(s=>s.selected);return r?Fe(r):t.value}return lr(t)}function or(e){const t={};return Object.defineProperty(t,"_$$isNormalized",{value:!0,writable:!1,enumerable:!1,configurable:!1}),e?te(e)&&e._$$isNormalized?e:te(e)?Object.keys(e).reduce((r,s)=>{const u=cr(e[s]);return e[s]!==!1&&(r[s]=rt(u)),r},t):typeof e!="string"?t:e.split("|").reduce((r,s)=>{const u=fr(s);return u.name&&(r[u.name]=rt(u.params)),r},t):t}function cr(e){return e===!0?[]:Array.isArray(e)||te(e)?e:[e]}function rt(e){const t=r=>typeof r=="string"&&r[0]==="@"?dr(r.slice(1)):r;return Array.isArray(e)?e.map(t):e instanceof RegExp?[e]:Object.keys(e).reduce((r,s)=>(r[s]=t(e[s]),r),{})}const fr=e=>{let t=[];const r=e.split(":")[0];return e.includes(":")&&(t=e.split(":").slice(1).join(":").split(",")),{name:r,params:t}};function dr(e){const t=r=>L(r,e)||r[e];return t.__locatorRef=e,t}const vr={generateMessage:({field:e})=>`${e} is not valid.`,bails:!0,validateOnBlur:!0,validateOnChange:!0,validateOnInput:!1,validateOnModelUpdate:!0};let hr=Object.assign({},vr);const ue=()=>hr;async function mr(e,t,r={}){const s=r==null?void 0:r.bails,u={name:(r==null?void 0:r.name)||"{field}",rules:t,label:r==null?void 0:r.label,bails:s??!0,formData:(r==null?void 0:r.values)||{}},d=(await pr(u,e)).errors;return{errors:d,valid:!d.length}}async function pr(e,t){if(H(e.rules)||at(e.rules))return br(t,e.rules);if(B(e.rules)||Array.isArray(e.rules)){const d={field:e.label||e.name,name:e.name,label:e.label,form:e.formData,value:t},m=Array.isArray(e.rules)?e.rules:[e.rules],h=m.length,c=[];for(let y=0;y<h;y++){const g=m[y],V=await g(t,d);if(!(typeof V!="string"&&!Array.isArray(V)&&V)){if(Array.isArray(V))c.push(...V);else{const D=typeof V=="string"?V:ft(d);c.push(D)}if(e.bails)return{errors:c}}}return{errors:c}}const r=Object.assign(Object.assign({},e),{rules:or(e.rules)}),s=[],u=Object.keys(r.rules),l=u.length;for(let d=0;d<l;d++){const m=u[d],h=await gr(r,t,{name:m,params:r.rules[m]});if(h.error&&(s.push(h.error),e.bails))return{errors:s}}return{errors:s}}function yr(e){return!!e&&e.name==="ValidationError"}function ct(e){return{__type:"VVTypedSchema",async parse(r){var s;try{return{output:await e.validate(r,{abortEarly:!1}),errors:[]}}catch(u){if(!yr(u))throw u;if(!(!((s=u.inner)===null||s===void 0)&&s.length)&&u.errors.length)return{errors:[{path:u.path,errors:u.errors}]};const l=u.inner.reduce((d,m)=>{const h=m.path||"";return d[h]||(d[h]={errors:[],path:h}),d[h].errors.push(...m.errors),d},{});return{errors:Object.values(l)}}}}}async function br(e,t){const s=await(H(t)?t:ct(t)).parse(e),u=[];for(const l of s.errors)l.errors.length&&u.push(...l.errors);return{errors:u}}async function gr(e,t,r){const s=Zt(r.name);if(!s)throw new Error(`No such validator '${r.name}' exists.`);const u=Or(r.params,e.formData),l={field:e.label||e.name,name:e.name,label:e.label,value:t,form:e.formData,rule:Object.assign(Object.assign({},r),{params:u})},d=await s(t,u,l);return typeof d=="string"?{error:d}:{error:d?void 0:ft(l)}}function ft(e){const t=ue().generateMessage;return t?t(e):"Field is invalid"}function Or(e,t){const r=s=>er(s)?s(t):s;return Array.isArray(e)?e.map(r):Object.keys(e).reduce((s,u)=>(s[u]=r(e[u]),s),{})}async function _r(e,t){const s=await(H(e)?e:ct(e)).parse(_(t)),u={},l={};for(const d of s.errors){const m=d.errors,h=(d.path||"").replace(/\["(\d+)"\]/g,(c,y)=>`[${y}]`);u[h]={valid:!m.length,errors:m},m.length&&(l[h]=m[0])}return{valid:!s.errors.length,results:u,errors:l,values:s.value}}async function Sr(e,t,r){const u=T(e).map(async c=>{var y,g,V;const A=(y=r==null?void 0:r.names)===null||y===void 0?void 0:y[c],D=await mr(L(t,c),e[c],{name:(A==null?void 0:A.name)||c,label:A==null?void 0:A.label,values:t,bails:(V=(g=r==null?void 0:r.bailsMap)===null||g===void 0?void 0:g[c])!==null&&V!==void 0?V:!0});return Object.assign(Object.assign({},D),{path:c})});let l=!0;const d=await Promise.all(u),m={},h={};for(const c of d)m[c.path]={valid:c.valid,errors:c.errors},c.valid||(l=!1,h[c.path]=c.errors[0]);return{valid:l,results:m,errors:h}}let Er=0;const pe=["bails","fieldsCount","id","multiple","type","validate"];function dt(e){const t=Object.assign({},C((e==null?void 0:e.initialValues)||{})),r=Q(e==null?void 0:e.validationSchema);return r&&H(r)&&B(r.cast)?_(r.cast(t)||{}):_(t)}function Rr(e){var t;const r=Er++;let s=0;const u=K(!1),l=K(!1),d=K(0),m=[],h=be(dt(e)),c=K([]),y=K({}),g=K({}),V=ur(()=>{g.value=c.value.reduce((i,n)=>(i[he(C(n.path))]=n,i),{})});function A(i,n){const a=I(i);if(!a){typeof i=="string"&&(y.value[he(i)]=et(n));return}if(typeof i=="string"){const o=he(i);y.value[o]&&delete y.value[o]}a.errors=et(n),a.valid=!a.errors.length}function D(i){T(i).forEach(n=>{A(n,i[n])})}e!=null&&e.initialErrors&&D(e.initialErrors);const _e=w(()=>{const i=c.value.reduce((n,a)=>(a.errors.length&&(n[a.path]=a.errors),n),{});return Object.assign(Object.assign({},y.value),i)}),Se=w(()=>T(_e.value).reduce((i,n)=>{const a=_e.value[n];return a!=null&&a.length&&(i[n]=a[0]),i},{})),vt=w(()=>c.value.reduce((i,n)=>(i[n.path]={name:n.path||"",label:n.label||""},i),{})),ht=w(()=>c.value.reduce((i,n)=>{var a;return i[n.path]=(a=n.bails)!==null&&a!==void 0?a:!0,i},{})),ze=Object.assign({},(e==null?void 0:e.initialErrors)||{}),mt=(t=e==null?void 0:e.keepValuesOnUnmount)!==null&&t!==void 0?t:!1,{initialValues:re,originalInitialValues:ne,setInitialValues:pt}=Ar(c,h,e),yt=Vr(c,h,ne,Se),ke=w(()=>c.value.reduce((i,n)=>{const a=L(h,n.path);return x(i,n.path,a),i},{})),N=e==null?void 0:e.validationSchema;function fe(i,n){var a,o;const v=w(()=>L(re.value,C(i))),f=g.value[C(i)],p=(n==null?void 0:n.type)==="checkbox"||(n==null?void 0:n.type)==="radio";if(f&&p){f.multiple=!0;const F=s++;return Array.isArray(f.id)?f.id.push(F):f.id=[f.id,F],f.fieldsCount++,f.__flags.pendingUnmount[F]=!1,f}const S=w(()=>L(h,C(i))),E=C(i),P=se.findIndex(F=>F===E);P!==-1&&se.splice(P,1);const b=w(()=>{var F,ae,Ie,qe,Me,Re;return H(N)?(Ie=(ae=(F=N).describe)===null||ae===void 0?void 0:ae.call(F,C(i)).required)!==null&&Ie!==void 0?Ie:!1:H(n==null?void 0:n.schema)&&(Re=(Me=(qe=n==null?void 0:n.schema).describe)===null||Me===void 0?void 0:Me.call(qe).required)!==null&&Re!==void 0?Re:!1}),j=s++,M=be({id:j,path:i,touched:!1,pending:!1,valid:!0,validated:!!(!((a=ze[E])===null||a===void 0)&&a.length),required:b,initialValue:v,errors:Wt([]),bails:(o=n==null?void 0:n.bails)!==null&&o!==void 0?o:!1,label:n==null?void 0:n.label,type:(n==null?void 0:n.type)||"default",value:S,multiple:!1,__flags:{pendingUnmount:{[j]:!1},pendingReset:!1},fieldsCount:1,validate:n==null?void 0:n.validate,dirty:w(()=>!le(Q(S),Q(v)))});return c.value.push(M),g.value[E]=M,V(),Se.value[E]&&!ze[E]&&U(()=>{G(E,{mode:"silent"})}),Ge(i)&&ge(i,F=>{V();const ae=_(S.value);g.value[F]=M,U(()=>{x(h,F,ae)})}),M}const bt=Xe(We,5),gt=Xe(We,5),Le=ar(async i=>await(i==="silent"?bt():gt()),(i,[n])=>{const a=T(z.errorBag.value),v=[...new Set([...T(i.results),...c.value.map(f=>f.path),...a])].sort().reduce((f,p)=>{var S;const E=p,P=I(E)||Ot(E),b=((S=i.results[E])===null||S===void 0?void 0:S.errors)||[],j=C(P==null?void 0:P.path)||E,M=jr({errors:b,valid:!b.length},f.results[j]);return f.results[j]=M,M.valid||(f.errors[j]=M.errors[0]),P&&y.value[j]&&delete y.value[j],P?(P.valid=M.valid,n==="silent"||n==="validated-only"&&!P.validated||A(P,M.errors),f):(A(j,b),f)},{valid:i.valid,results:{},errors:{}});return i.values&&(v.values=i.values),T(v.results).forEach(f=>{var p;const S=I(f);S&&n!=="silent"&&(n==="validated-only"&&!S.validated||A(S,(p=v.results[f])===null||p===void 0?void 0:p.errors))}),v});function ie(i){c.value.forEach(i)}function I(i){const n=typeof i=="string"?he(i):i;return typeof n=="string"?g.value[n]:n}function Ot(i){return c.value.filter(a=>i.startsWith(a.path)).reduce((a,o)=>a?o.path.length>a.path.length?o:a:o,void 0)}let se=[],de;function _t(i){return se.push(i),de||(de=U(()=>{[...se].sort().reverse().forEach(a=>{Je(h,a)}),se=[],de=null})),de}function $e(i){return function(a,o){return function(f){return f instanceof Event&&(f.preventDefault(),f.stopPropagation()),ie(p=>p.touched=!0),u.value=!0,d.value++,Z().then(p=>{const S=_(h);if(p.valid&&typeof a=="function"){const E=_(ke.value);let P=i?E:S;return p.values&&(P=p.values),a(P,{evt:f,controlledValues:E,setErrors:D,setFieldError:A,setTouched:je,setFieldTouched:ve,setValues:Ve,setFieldValue:$,resetForm:we,resetField:xe})}!p.valid&&typeof o=="function"&&o({values:S,evt:f,errors:p.errors,results:p.results})}).then(p=>(u.value=!1,p),p=>{throw u.value=!1,p})}}}const Ee=$e(!1);Ee.withControlled=$e(!0);function St(i,n){const a=c.value.findIndex(v=>v.path===i&&(Array.isArray(v.id)?v.id.includes(n):v.id===n)),o=c.value[a];if(!(a===-1||!o)){if(U(()=>{G(i,{mode:"silent",warn:!1})}),o.multiple&&o.fieldsCount&&o.fieldsCount--,Array.isArray(o.id)){const v=o.id.indexOf(n);v>=0&&o.id.splice(v,1),delete o.__flags.pendingUnmount[n]}(!o.multiple||o.fieldsCount<=0)&&(c.value.splice(a,1),Ke(i),V(),delete g.value[i])}}function Et(i){T(g.value).forEach(n=>{n.startsWith(i)&&delete g.value[n]}),c.value=c.value.filter(n=>!n.path.startsWith(i)),U(()=>{V()})}const z={formId:r,values:h,controlledValues:ke,errorBag:_e,errors:Se,schema:N,submitCount:d,meta:yt,isSubmitting:u,isValidating:l,fieldArrays:m,keepValuesOnUnmount:mt,validateSchema:Q(N)?Le:void 0,validate:Z,setFieldError:A,validateField:G,setFieldValue:$,setValues:Ve,setErrors:D,setFieldTouched:ve,setTouched:je,resetForm:we,resetField:xe,handleSubmit:Ee,useFieldModel:It,defineInputBinds:Mt,defineComponentBinds:Rt,defineField:Ce,stageInitialValue:Pt,unsetInitialValue:Ke,setFieldInitialValue:Pe,createPathState:fe,getPathState:I,unsetPathValue:_t,removePathState:St,initialValues:re,getAllPathStates:()=>c.value,destroyPath:Et,isFieldTouched:At,isFieldDirty:jt,isFieldValid:wt};function $(i,n,a=!0){const o=_(n),v=typeof i=="string"?i:i.path;I(v)||fe(v),x(h,v,o),a&&G(v)}function Vt(i,n=!0){T(h).forEach(a=>{delete h[a]}),T(i).forEach(a=>{$(a,i[a],!1)}),n&&Z()}function Ve(i,n=!0){oe(h,i),m.forEach(a=>a&&a.reset()),n&&Z()}function Ae(i,n){const a=I(C(i))||fe(i);return w({get(){return a.value},set(o){var v;const f=C(i);$(f,o,(v=C(n))!==null&&v!==void 0?v:!1)}})}function ve(i,n){const a=I(i);a&&(a.touched=n)}function At(i){const n=I(i);return n?n.touched:c.value.filter(a=>a.path.startsWith(i)).some(a=>a.touched)}function jt(i){const n=I(i);return n?n.dirty:c.value.filter(a=>a.path.startsWith(i)).some(a=>a.dirty)}function wt(i){const n=I(i);return n?n.valid:c.value.filter(a=>a.path.startsWith(i)).every(a=>a.valid)}function je(i){if(typeof i=="boolean"){ie(n=>{n.touched=i});return}T(i).forEach(n=>{ve(n,!!i[n])})}function xe(i,n){var a;const o=n&&"value"in n?n.value:L(re.value,i),v=I(i);v&&(v.__flags.pendingReset=!0),Pe(i,_(o),!0),$(i,o,!1),ve(i,(a=n==null?void 0:n.touched)!==null&&a!==void 0?a:!1),A(i,(n==null?void 0:n.errors)||[]),U(()=>{v&&(v.__flags.pendingReset=!1)})}function we(i,n){let a=_(i!=null&&i.values?i.values:ne.value);a=n!=null&&n.force?a:oe(ne.value,a),a=H(N)&&B(N.cast)?N.cast(a):a,pt(a),ie(o=>{var v;o.__flags.pendingReset=!0,o.validated=!1,o.touched=((v=i==null?void 0:i.touched)===null||v===void 0?void 0:v[o.path])||!1,$(o.path,L(a,o.path),!1),A(o.path,void 0)}),n!=null&&n.force?Vt(a,!1):Ve(a,!1),D((i==null?void 0:i.errors)||{}),d.value=(i==null?void 0:i.submitCount)||0,U(()=>{Z({mode:"silent"}),ie(o=>{o.__flags.pendingReset=!1})})}async function Z(i){const n=(i==null?void 0:i.mode)||"force";if(n==="force"&&ie(f=>f.validated=!0),z.validateSchema)return z.validateSchema(n);l.value=!0;const a=await Promise.all(c.value.map(f=>f.validate?f.validate(i).then(p=>({key:f.path,valid:p.valid,errors:p.errors})):Promise.resolve({key:f.path,valid:!0,errors:[]})));l.value=!1;const o={},v={};for(const f of a)o[f.key]={valid:f.valid,errors:f.errors},f.errors.length&&(v[f.key]=f.errors[0]);return{valid:a.every(f=>f.valid),results:o,errors:v}}async function G(i,n){var a;const o=I(i);if(o&&(n==null?void 0:n.mode)!=="silent"&&(o.validated=!0),N){const{results:v}=await Le((n==null?void 0:n.mode)||"validated-only");return v[i]||{errors:[],valid:!0}}return o!=null&&o.validate?o.validate(n):(!o&&(a=n==null?void 0:n.warn),Promise.resolve({errors:[],valid:!0}))}function Ke(i){Je(re.value,i)}function Pt(i,n,a=!1){Pe(i,n),x(h,i,n),a&&!(e!=null&&e.initialValues)&&x(ne.value,i,_(n))}function Pe(i,n,a=!1){x(re.value,i,_(n)),a&&x(ne.value,i,_(n))}async function We(){const i=Q(N);if(!i)return{valid:!0,results:{},errors:{}};l.value=!0;const n=at(i)||H(i)?await _r(i,h):await Sr(i,h,{names:vt.value,bailsMap:ht.value});return l.value=!1,n}const Ct=Ee((i,{evt:n})=>{sr(n)&&n.target.submit()});$t(()=>{if(e!=null&&e.initialErrors&&D(e.initialErrors),e!=null&&e.initialTouched&&je(e.initialTouched),e!=null&&e.validateOnMount){Z();return}z.validateSchema&&z.validateSchema("silent")}),Ge(N)&&ge(N,()=>{var i;(i=z.validateSchema)===null||i===void 0||i.call(z,"validated-only")}),xt(Jt,z);function Ce(i,n){const a=B(n)||n==null?void 0:n.label,o=I(C(i))||fe(i,{label:a}),v=()=>B(n)?n(me(o,pe)):n||{};function f(){var b;o.touched=!0,((b=v().validateOnBlur)!==null&&b!==void 0?b:ue().validateOnBlur)&&G(o.path)}function p(){var b;((b=v().validateOnInput)!==null&&b!==void 0?b:ue().validateOnInput)&&U(()=>{G(o.path)})}function S(){var b;((b=v().validateOnChange)!==null&&b!==void 0?b:ue().validateOnChange)&&U(()=>{G(o.path)})}const E=w(()=>{const b={onChange:S,onInput:p,onBlur:f};return B(n)?Object.assign(Object.assign({},b),n(me(o,pe)).props||{}):n!=null&&n.props?Object.assign(Object.assign({},b),n.props(me(o,pe))):b});return[Ae(i,()=>{var b,j,M;return(M=(b=v().validateOnModelUpdate)!==null&&b!==void 0?b:(j=ue())===null||j===void 0?void 0:j.validateOnModelUpdate)!==null&&M!==void 0?M:!0}),E]}function It(i){return Array.isArray(i)?i.map(n=>Ae(n,!0)):Ae(i)}function Mt(i,n){const[a,o]=Ce(i,n);function v(){o.value.onBlur()}function f(S){const E=tt(S);$(C(i),E,!1),o.value.onInput()}function p(S){const E=tt(S);$(C(i),E,!1),o.value.onChange()}return w(()=>Object.assign(Object.assign({},o.value),{onBlur:v,onInput:f,onChange:p,value:a.value}))}function Rt(i,n){const[a,o]=Ce(i,n),v=I(C(i));function f(p){a.value=p}return w(()=>{const p=B(n)?n(me(v,pe)):n||{};return Object.assign({[p.model||"modelValue"]:a.value,[`onUpdate:${p.model||"modelValue"}`]:f},o.value)})}return Object.assign(Object.assign({},z),{values:it(h),handleReset:()=>we(),submitForm:Ct})}function Vr(e,t,r,s){const u={touched:"some",pending:"some",valid:"every"},l=w(()=>!le(t,Q(r)));function d(){const h=e.value;return T(u).reduce((c,y)=>{const g=u[y];return c[y]=h[g](V=>V[y]),c},{})}const m=be(d());return Kt(()=>{const h=d();m.touched=h.touched,m.valid=h.valid,m.pending=h.pending}),w(()=>Object.assign(Object.assign({initialValues:Q(r)},m),{valid:m.valid&&!T(s.value).length,dirty:l.value}))}function Ar(e,t,r){const s=dt(r),u=K(s),l=K(_(s));function d(m,h=!1){u.value=oe(_(u.value)||{},_(m)),l.value=oe(_(l.value)||{},_(m)),h&&e.value.forEach(c=>{if(c.touched)return;const g=L(u.value,c.path);x(t,c.path,_(g))})}return{initialValues:u,originalInitialValues:l,setInitialValues:d}}function jr(e,t){return t?{valid:e.valid&&t.valid,errors:[...e.errors,...t.errors]}:e}export{Mr as a,Rr as u};
