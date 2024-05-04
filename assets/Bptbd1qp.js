var J=(i,t,e)=>{if(!t.has(i))throw TypeError("Cannot "+e)};var s=(i,t,e)=>(J(i,t,"read from private field"),e?e.call(i):t.get(i)),u=(i,t,e)=>{if(t.has(i))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(i):t.set(i,e)},c=(i,t,e,r)=>(J(i,t,"write to private field"),r?r.call(i,e):t.set(i,e),e);var f=(i,t,e)=>(J(i,t,"access private method"),e);import{Y as Ot,Z as X,a8 as Ct,a9 as lt,aa as dt,ab as St,ac as wt,ad as Qt,ae as ft,a1 as Et,af as It,s as Ut,ag as Dt,D as Ft,a2 as Lt,U as Mt,h as Y,a3 as pt,a4 as Pt,a7 as bt,a5 as Tt,a6 as xt}from"./CeNTFR7v.js";var y,a,A,b,S,L,R,k,M,P,w,Q,C,T,E,j,V,$,W,tt,_,et,z,st,B,it,N,rt,K,nt,Z,mt,gt,jt=(gt=class extends Ot{constructor(t,e){super();u(this,E);u(this,V);u(this,W);u(this,_);u(this,z);u(this,B);u(this,N);u(this,K);u(this,Z);u(this,y,void 0);u(this,a,void 0);u(this,A,void 0);u(this,b,void 0);u(this,S,void 0);u(this,L,void 0);u(this,R,void 0);u(this,k,void 0);u(this,M,void 0);u(this,P,void 0);u(this,w,void 0);u(this,Q,void 0);u(this,C,void 0);u(this,T,new Set);this.options=e,c(this,y,t),c(this,R,null),this.bindMethods(),this.setOptions(e)}bindMethods(){this.refetch=this.refetch.bind(this)}onSubscribe(){this.listeners.size===1&&(s(this,a).addObserver(this),yt(s(this,a),this.options)?f(this,E,j).call(this):this.updateResult(),f(this,z,st).call(this))}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return at(s(this,a),this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return at(s(this,a),this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,f(this,B,it).call(this),f(this,N,rt).call(this),s(this,a).removeObserver(this)}setOptions(t,e){const r=this.options,o=s(this,a);if(this.options=s(this,y).defaultQueryOptions(t),this.options.enabled!==void 0&&typeof this.options.enabled!="boolean")throw new Error("Expected enabled to be a boolean");f(this,K,nt).call(this),s(this,a).setOptions(this.options),r._defaulted&&!X(this.options,r)&&s(this,y).getQueryCache().notify({type:"observerOptionsUpdated",query:s(this,a),observer:this});const n=this.hasListeners();n&&vt(s(this,a),o,this.options,r)&&f(this,E,j).call(this),this.updateResult(e),n&&(s(this,a)!==o||this.options.enabled!==r.enabled||this.options.staleTime!==r.staleTime)&&f(this,V,$).call(this);const d=f(this,W,tt).call(this);n&&(s(this,a)!==o||this.options.enabled!==r.enabled||d!==s(this,C))&&f(this,_,et).call(this,d)}getOptimisticResult(t){const e=s(this,y).getQueryCache().build(s(this,y),t),r=this.createResult(e,t);return kt(this,r)&&(c(this,b,r),c(this,L,this.options),c(this,S,s(this,a).state)),r}getCurrentResult(){return s(this,b)}trackResult(t,e){const r={};return Object.keys(t).forEach(o=>{Object.defineProperty(r,o,{configurable:!1,enumerable:!0,get:()=>(this.trackProp(o),e==null||e(o),t[o])})}),r}trackProp(t){s(this,T).add(t)}getCurrentQuery(){return s(this,a)}refetch({...t}={}){return this.fetch({...t})}fetchOptimistic(t){const e=s(this,y).defaultQueryOptions(t),r=s(this,y).getQueryCache().build(s(this,y),e);return r.isFetchingOptimistic=!0,r.fetch().then(()=>this.createResult(r,e))}fetch(t){return f(this,E,j).call(this,{...t,cancelRefetch:t.cancelRefetch??!0}).then(()=>(this.updateResult(),s(this,b)))}createResult(t,e){var ct;const r=s(this,a),o=this.options,n=s(this,b),d=s(this,S),g=s(this,L),U=t!==r?t.state:s(this,A),{state:O}=t;let h={...O},l=!1,p;if(e._optimisticResults){const v=this.hasListeners(),H=!v&&yt(t,e),Rt=v&&vt(t,r,e,o);(H||Rt)&&(h={...h,...Qt(O.data,t.options)}),e._optimisticResults==="isRestoring"&&(h.fetchStatus="idle")}let{error:D,errorUpdatedAt:x,status:m}=h;if(e.select&&h.data!==void 0)if(n&&h.data===(d==null?void 0:d.data)&&e.select===s(this,k))p=s(this,M);else try{c(this,k,e.select),p=e.select(h.data),p=ft(n==null?void 0:n.data,p,e),c(this,M,p),c(this,R,null)}catch(v){c(this,R,v)}else p=h.data;if(e.placeholderData!==void 0&&p===void 0&&m==="pending"){let v;if(n!=null&&n.isPlaceholderData&&e.placeholderData===(g==null?void 0:g.placeholderData))v=n.data;else if(v=typeof e.placeholderData=="function"?e.placeholderData((ct=s(this,P))==null?void 0:ct.state.data,s(this,P)):e.placeholderData,e.select&&v!==void 0)try{v=e.select(v),c(this,R,null)}catch(H){c(this,R,H)}v!==void 0&&(m="success",p=ft(n==null?void 0:n.data,v,e),l=!0)}s(this,R)&&(D=s(this,R),p=s(this,M),x=Date.now(),m="error");const F=h.fetchStatus==="fetching",q=m==="pending",G=m==="error",ot=q&&F,ut=p!==void 0;return{status:m,fetchStatus:h.fetchStatus,isPending:q,isSuccess:m==="success",isError:G,isInitialLoading:ot,isLoading:ot,data:p,dataUpdatedAt:h.dataUpdatedAt,error:D,errorUpdatedAt:x,failureCount:h.fetchFailureCount,failureReason:h.fetchFailureReason,errorUpdateCount:h.errorUpdateCount,isFetched:h.dataUpdateCount>0||h.errorUpdateCount>0,isFetchedAfterMount:h.dataUpdateCount>U.dataUpdateCount||h.errorUpdateCount>U.errorUpdateCount,isFetching:F,isRefetching:F&&!q,isLoadingError:G&&!ut,isPaused:h.fetchStatus==="paused",isPlaceholderData:l,isRefetchError:G&&ut,isStale:ht(t,e),refetch:this.refetch}}updateResult(t){const e=s(this,b),r=this.createResult(s(this,a),this.options);if(c(this,S,s(this,a).state),c(this,L,this.options),s(this,S).data!==void 0&&c(this,P,s(this,a)),X(r,e))return;c(this,b,r);const o={},n=()=>{if(!e)return!0;const{notifyOnChangeProps:d}=this.options,g=typeof d=="function"?d():d;if(g==="all"||!g&&!s(this,T).size)return!0;const I=new Set(g??s(this,T));return this.options.throwOnError&&I.add("error"),Object.keys(s(this,b)).some(U=>{const O=U;return s(this,b)[O]!==e[O]&&I.has(O)})};(t==null?void 0:t.listeners)!==!1&&n()&&(o.listeners=!0),f(this,Z,mt).call(this,{...o,...t})}onQueryUpdate(){this.updateResult(),this.hasListeners()&&f(this,z,st).call(this)}},y=new WeakMap,a=new WeakMap,A=new WeakMap,b=new WeakMap,S=new WeakMap,L=new WeakMap,R=new WeakMap,k=new WeakMap,M=new WeakMap,P=new WeakMap,w=new WeakMap,Q=new WeakMap,C=new WeakMap,T=new WeakMap,E=new WeakSet,j=function(t){f(this,K,nt).call(this);let e=s(this,a).fetch(this.options,t);return t!=null&&t.throwOnError||(e=e.catch(Ct)),e},V=new WeakSet,$=function(){if(f(this,B,it).call(this),lt||s(this,b).isStale||!dt(this.options.staleTime))return;const e=St(s(this,b).dataUpdatedAt,this.options.staleTime)+1;c(this,w,setTimeout(()=>{s(this,b).isStale||this.updateResult()},e))},W=new WeakSet,tt=function(){return(typeof this.options.refetchInterval=="function"?this.options.refetchInterval(s(this,a)):this.options.refetchInterval)??!1},_=new WeakSet,et=function(t){f(this,N,rt).call(this),c(this,C,t),!(lt||this.options.enabled===!1||!dt(s(this,C))||s(this,C)===0)&&c(this,Q,setInterval(()=>{(this.options.refetchIntervalInBackground||wt.isFocused())&&f(this,E,j).call(this)},s(this,C)))},z=new WeakSet,st=function(){f(this,V,$).call(this),f(this,_,et).call(this,f(this,W,tt).call(this))},B=new WeakSet,it=function(){s(this,w)&&(clearTimeout(s(this,w)),c(this,w,void 0))},N=new WeakSet,rt=function(){s(this,Q)&&(clearInterval(s(this,Q)),c(this,Q,void 0))},K=new WeakSet,nt=function(){const t=s(this,y).getQueryCache().build(s(this,y),this.options);if(t===s(this,a))return;const e=s(this,a);c(this,a,t),c(this,A,t.state),this.hasListeners()&&(e==null||e.removeObserver(this),t.addObserver(this))},Z=new WeakSet,mt=function(t){Et.batch(()=>{t.listeners&&this.listeners.forEach(e=>{e(s(this,b))}),s(this,y).getQueryCache().notify({query:s(this,a),type:"observerResultsUpdated"})})},gt);function At(i,t){return t.enabled!==!1&&i.state.data===void 0&&!(i.state.status==="error"&&t.retryOnMount===!1)}function yt(i,t){return At(i,t)||i.state.data!==void 0&&at(i,t,t.refetchOnMount)}function at(i,t,e){if(t.enabled!==!1){const r=typeof e=="function"?e(i):e;return r==="always"||r!==!1&&ht(i,t)}return!1}function vt(i,t,e,r){return(i!==t||r.enabled===!1)&&(!e.suspense||i.state.status!=="error")&&ht(i,e)}function ht(i,t){return t.enabled!==!1&&i.isStaleByTime(t.staleTime)}function kt(i,t){return!X(i.getCurrentResult(),t)}function Vt(i=""){if(!It())throw new Error("vue-query hooks can only be used inside setup() function or functions that support injection context.");const t=Dt(i),e=Ut(t);if(!e)throw new Error("No 'queryClient' found in Vue context, use 'VueQueryPlugin' to properly initialize the library.");return e}function Wt(i,t,e){const r=e||Vt(),o=Ft(()=>{const l=Lt(t);typeof l.enabled=="function"&&(l.enabled=l.enabled());const p=r.defaultQueryOptions(l);return p._optimisticResults=r.isRestoring.value?"isRestoring":"optimistic",p}),n=new i(r,o.value),d=Mt(n.getCurrentResult());let g=()=>{};Y(r.isRestoring,l=>{l||(g(),g=n.subscribe(p=>{pt(d,p)}))},{immediate:!0});const I=()=>{n.setOptions(o.value),pt(d,n.getCurrentResult())};Y(o,I),Pt(()=>{g()});const U=(...l)=>(I(),d.refetch(...l)),O=()=>new Promise((l,p)=>{let D=()=>{};const x=()=>{if(o.value.enabled!==!1){n.setOptions(o.value);const m=n.getOptimisticResult(o.value);m.isStale?(D(),n.fetchOptimistic(o.value).then(l,F=>{bt(o.value.throwOnError,[F,n.getCurrentQuery()])?p(F):l(n.getCurrentResult())})):(D(),l(m))}};x(),D=Y(o,x)});Y(()=>d.error,l=>{if(d.isError&&!d.isFetching&&bt(o.value.throwOnError,[l,n.getCurrentQuery()]))throw l});const h=Tt(xt(d));for(const l in d)typeof d[l]=="function"&&(h[l]=d[l]);return h.suspense=O,h.refetch=U,h}function Nt(i,t){return Wt(jt,i,t)}export{Vt as a,Nt as u};