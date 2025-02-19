var Fn=Array.isArray,Zt=Array.prototype.indexOf,qn=Array.from,Ln=Object.defineProperty,vt=Object.getOwnPropertyDescriptor,zt=Object.getOwnPropertyDescriptors,Mn=Object.prototype,Yn=Array.prototype,Wt=Object.getPrototypeOf;const jn=()=>{};function Hn(t){return t()}function Xt(t){for(var n=0;n<t.length;n++)t[n]()}const m=2,wt=4,J=8,ot=16,D=32,H=64,G=128,w=256,$=512,v=1024,k=2048,q=4096,F=8192,Q=16384,Jt=32768,mt=65536,Bn=1<<17,Qt=1<<19,Tt=1<<20,pt=Symbol("$state"),Un=Symbol("legacy props"),Vn=Symbol("");function gt(t){return t===this.v}function tn(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function At(t){return!tn(t,this.v)}function nn(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function rn(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function en(t){throw new Error("https://svelte.dev/e/effect_orphan")}function ln(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Gn(){throw new Error("https://svelte.dev/e/hydration_failed")}function $n(t){throw new Error("https://svelte.dev/e/props_invalid_value")}function Kn(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Zn(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function sn(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}function an(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let tt=!1;function zn(){tt=!0}const Wn=1,Xn=2,Jn=16,Qn=1,tr=2,nr=4,rr=8,er=16,lr=1,sr=2,un="[",on="[!",fn="]",xt={},ar=Symbol();function Rt(t){console.warn("https://svelte.dev/e/hydration_mismatch")}let f=null;function ht(t){f=t}function ur(t,n=!1,r){f={p:f,c:null,e:null,m:!1,s:t,x:null,l:null},tt&&!n&&(f.l={s:null,u:null,r1:[],r2:ft(!1)})}function or(t){const n=f;if(n!==null){const a=n.e;if(a!==null){var r=o,e=u;n.e=null;try{for(var l=0;l<a.length;l++){var s=a[l];z(s.effect),Z(s.reaction),Pt(s.fn)}}finally{z(r),Z(e)}}f=n.p,n.m=!0}return{}}function nt(){return!tt||f!==null&&f.l===null}function ft(t,n){var r={f:0,v:t,reactions:null,equals:gt,rv:0,wv:0};return r}function fr(t){return _n(ft(t))}function ir(t,n=!1){var e;const r=ft(t);return n||(r.equals=At),tt&&f!==null&&f.l!==null&&((e=f.l).s??(e.s=[])).push(r),r}function _n(t){return u!==null&&!g&&u.f&m&&(A===null?Rn([t]):A.push(t)),t}function _r(t,n){return u!==null&&!g&&nt()&&u.f&(m|ot)&&(A===null||!A.includes(t))&&an(),cn(t,n)}function cn(t,n){return t.equals(n)||(t.v,t.v=n,t.wv=Bt(),Dt(t,k),nt()&&o!==null&&o.f&v&&!(o.f&(D|H))&&(R===null?Dn([t]):R.push(t))),n}function Dt(t,n){var r=t.reactions;if(r!==null)for(var e=nt(),l=r.length,s=0;s<l;s++){var a=r[s],i=a.f;i&k||!e&&a===o||(x(a,n),i&(v|w)&&(i&m?Dt(a,q):et(a)))}}let O=!1;function cr(t){O=t}let T;function M(t){if(t===null)throw Rt(),xt;return T=t}function vr(){return M(C(T))}function pr(t){if(O){if(C(T)!==null)throw Rt(),xt;T=t}}function hr(t=1){if(O){for(var n=t,r=T;n--;)r=C(r);T=r}}function dr(){for(var t=0,n=T;;){if(n.nodeType===8){var r=n.data;if(r===fn){if(t===0)return n;t-=1}else(r===un||r===on)&&(t+=1)}var e=C(n);n.remove(),n=e}}var dt,vn,pn,St,kt;function Er(){if(dt===void 0){dt=window,vn=document,pn=/Firefox/.test(navigator.userAgent);var t=Element.prototype,n=Node.prototype;St=vt(n,"firstChild").get,kt=vt(n,"nextSibling").get,t.__click=void 0,t.__className="",t.__attributes=null,t.__styles=null,t.__e=void 0,Text.prototype.__t=void 0}}function lt(t=""){return document.createTextNode(t)}function st(t){return St.call(t)}function C(t){return kt.call(t)}function yr(t,n){if(!O)return st(t);var r=st(T);if(r===null)r=T.appendChild(lt());else if(n&&r.nodeType!==3){var e=lt();return r==null||r.before(e),M(e),e}return M(r),r}function wr(t,n){if(!O){var r=st(t);return r instanceof Comment&&r.data===""?C(r):r}return T}function mr(t,n=1,r=!1){let e=O?T:t;for(var l;n--;)l=e,e=C(e);if(!O)return e;var s=e==null?void 0:e.nodeType;if(r&&s!==3){var a=lt();return e===null?l==null||l.after(a):e.before(a),M(a),a}return M(e),e}function Tr(t){t.textContent=""}function It(t){var n=m|k,r=u!==null&&u.f&m?u:null;return o===null||r!==null&&r.f&w?n|=w:o.f|=Tt,{ctx:f,deps:null,effects:null,equals:gt,f:n,fn:t,reactions:null,rv:0,v:null,wv:0,parent:r??o}}function gr(t){const n=It(t);return n.equals=At,n}function Ot(t){var n=t.effects;if(n!==null){t.effects=null;for(var r=0;r<n.length;r+=1)N(n[r])}}function hn(t){for(var n=t.parent;n!==null;){if(!(n.f&m))return n;n=n.parent}return null}function dn(t){var n,r=o;z(hn(t));try{Ot(t),n=Vt(t)}finally{z(r)}return n}function Nt(t){var n=dn(t),r=(S||t.f&w)&&t.deps!==null?q:v;x(t,r),t.equals(n)||(t.v=n,t.wv=Bt())}function Ct(t){o===null&&u===null&&en(),u!==null&&u.f&w&&o===null&&rn(),it&&nn()}function En(t,n){var r=n.last;r===null?n.last=n.first=t:(r.next=t,t.prev=r,n.last=t)}function L(t,n,r,e=!0){var l=(t&H)!==0,s=o,a={ctx:f,deps:null,nodes_start:null,nodes_end:null,f:t|k,first:null,fn:n,last:null,next:null,parent:l?null:s,prev:null,teardown:null,transitions:null,wv:0};if(r){var i=P;try{Et(!0),_t(a),a.f|=Jt}catch(p){throw N(a),p}finally{Et(i)}}else n!==null&&et(a);var y=r&&a.deps===null&&a.first===null&&a.nodes_start===null&&a.teardown===null&&(a.f&(Tt|G))===0;if(!y&&!l&&e&&(s!==null&&En(a,s),u!==null&&u.f&m)){var _=u;(_.effects??(_.effects=[])).push(a)}return a}function Ar(t){const n=L(J,null,!1);return x(n,v),n.teardown=t,n}function xr(t){Ct();var n=o!==null&&(o.f&D)!==0&&f!==null&&!f.m;if(n){var r=f;(r.e??(r.e=[])).push({fn:t,effect:o,reaction:u})}else{var e=Pt(t);return e}}function Rr(t){return Ct(),yn(t)}function Dr(t){const n=L(H,t,!0);return(r={})=>new Promise(e=>{r.outro?Tn(n,()=>{N(n),e(void 0)}):(N(n),e(void 0))})}function Pt(t){return L(wt,t,!1)}function yn(t){return L(J,t,!0)}function Sr(t,n=[],r=It){const e=n.map(r);return wn(()=>t(...e.map(Pn)))}function wn(t,n=0){return L(J|ot|n,t,!0)}function kr(t,n=!0){return L(J|D,t,!0,n)}function bt(t){var n=t.teardown;if(n!==null){const r=it,e=u;yt(!0),Z(null);try{n.call(null)}finally{yt(r),Z(e)}}}function Ft(t,n=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var e=r.next;N(r,n),r=e}}function mn(t){for(var n=t.first;n!==null;){var r=n.next;n.f&D||N(n),n=r}}function N(t,n=!0){var r=!1;if((n||t.f&Qt)&&t.nodes_start!==null){for(var e=t.nodes_start,l=t.nodes_end;e!==null;){var s=e===l?null:C(e);e.remove(),e=s}r=!0}Ft(t,n&&!r),X(t,0),x(t,Q);var a=t.transitions;if(a!==null)for(const y of a)y.stop();bt(t);var i=t.parent;i!==null&&i.first!==null&&qt(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=null}function qt(t){var n=t.parent,r=t.prev,e=t.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),n!==null&&(n.first===t&&(n.first=e),n.last===t&&(n.last=r))}function Tn(t,n){var r=[];Lt(t,r,!0),gn(r,()=>{N(t),n&&n()})}function gn(t,n){var r=t.length;if(r>0){var e=()=>--r||n();for(var l of t)l.out(e)}else n()}function Lt(t,n,r){if(!(t.f&F)){if(t.f^=F,t.transitions!==null)for(const a of t.transitions)(a.is_global||r)&&n.push(a);for(var e=t.first;e!==null;){var l=e.next,s=(e.f&mt)!==0||(e.f&D)!==0;Lt(e,n,s?r:!1),e=l}}}function Ir(t){Mt(t,!0)}function Mt(t,n){if(t.f&F){t.f^=F,t.f&v||(t.f^=v),B(t)&&(x(t,k),et(t));for(var r=t.first;r!==null;){var e=r.next,l=(r.f&mt)!==0||(r.f&D)!==0;Mt(r,l?n:!1),r=e}if(t.transitions!==null)for(const s of t.transitions)(s.is_global||n)&&s.in()}}let K=!1,at=[];function Yt(){K=!1;const t=at.slice();at=[],Xt(t)}function Or(t){K||(K=!0,queueMicrotask(Yt)),at.push(t)}function An(){K&&Yt()}const jt=0,xn=1;let U=!1,V=jt,Y=!1,j=null,P=!1,it=!1;function Et(t){P=t}function yt(t){it=t}let I=[],b=0;let u=null,g=!1;function Z(t){u=t}let o=null;function z(t){o=t}let A=null;function Rn(t){A=t}let c=null,E=0,R=null;function Dn(t){R=t}let Ht=1,W=0,S=!1;function Bt(){return++Ht}function B(t){var h;var n=t.f;if(n&k)return!0;if(n&q){var r=t.deps,e=(n&w)!==0;if(r!==null){var l,s,a=(n&$)!==0,i=e&&o!==null&&!S,y=r.length;if(a||i){var _=t,p=_.parent;for(l=0;l<y;l++)s=r[l],(a||!((h=s==null?void 0:s.reactions)!=null&&h.includes(_)))&&(s.reactions??(s.reactions=[])).push(_);a&&(_.f^=$),i&&p!==null&&!(p.f&w)&&(_.f^=w)}for(l=0;l<y;l++)if(s=r[l],B(s)&&Nt(s),s.wv>t.wv)return!0}(!e||o!==null&&!S)&&x(t,v)}return!1}function Sn(t,n){for(var r=n;r!==null;){if(r.f&G)try{r.fn(t);return}catch{r.f^=G}r=r.parent}throw U=!1,t}function kn(t){return(t.f&Q)===0&&(t.parent===null||(t.parent.f&G)===0)}function rt(t,n,r,e){if(U){if(r===null&&(U=!1),kn(n))throw t;return}r!==null&&(U=!0);{Sn(t,n);return}}function Ut(t,n,r=!0){var e=t.reactions;if(e!==null)for(var l=0;l<e.length;l++){var s=e[l];s.f&m?Ut(s,n,!1):n===s&&(r?x(s,k):s.f&v&&x(s,q),et(s))}}function Vt(t){var ct;var n=c,r=E,e=R,l=u,s=S,a=A,i=f,y=g,_=t.f;c=null,E=0,R=null,u=_&(D|H)?null:t,S=(_&w)!==0&&(!P||l===null||y),A=null,ht(t.ctx),g=!1,W++;try{var p=(0,t.fn)(),h=t.deps;if(c!==null){var d;if(X(t,E),h!==null&&E>0)for(h.length=E+c.length,d=0;d<c.length;d++)h[E+d]=c[d];else t.deps=h=c;if(!S)for(d=E;d<h.length;d++)((ct=h[d]).reactions??(ct.reactions=[])).push(t)}else h!==null&&E<h.length&&(X(t,E),h.length=E);if(nt()&&R!==null&&!g&&h!==null&&!(t.f&(m|q|k)))for(d=0;d<R.length;d++)Ut(R[d],t);return l!==null&&W++,p}finally{c=n,E=r,R=e,u=l,S=s,A=a,ht(i),g=y}}function In(t,n){let r=n.reactions;if(r!==null){var e=Zt.call(r,t);if(e!==-1){var l=r.length-1;l===0?r=n.reactions=null:(r[e]=r[l],r.pop())}}r===null&&n.f&m&&(c===null||!c.includes(n))&&(x(n,q),n.f&(w|$)||(n.f^=$),Ot(n),X(n,0))}function X(t,n){var r=t.deps;if(r!==null)for(var e=n;e<r.length;e++)In(t,r[e])}function _t(t){var n=t.f;if(!(n&Q)){x(t,v);var r=o,e=f;o=t;try{n&ot?mn(t):Ft(t),bt(t);var l=Vt(t);t.teardown=typeof l=="function"?l:null,t.wv=Ht;var s=t.deps,a}catch(i){rt(i,t,r,e||t.ctx)}finally{o=r}}}function Gt(){if(b>1e3){b=0;try{ln()}catch(t){if(j!==null)rt(t,j,null);else throw t}}b++}function $t(t){var n=t.length;if(n!==0){Gt();var r=P;P=!0;try{for(var e=0;e<n;e++){var l=t[e];l.f&v||(l.f^=v);var s=Cn(l);On(s)}}finally{P=r}}}function On(t){var n=t.length;if(n!==0)for(var r=0;r<n;r++){var e=t[r];if(!(e.f&(Q|F)))try{B(e)&&(_t(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?qt(e):e.fn=null))}catch(l){rt(l,e,null,e.ctx)}}}function Nn(){if(Y=!1,b>1001)return;const t=I;I=[],$t(t),Y||(b=0,j=null)}function et(t){V===jt&&(Y||(Y=!0,queueMicrotask(Nn))),j=t;for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if(r&(H|D)){if(!(r&v))return;n.f^=v}}I.push(n)}function Cn(t){var n=[],r=t.first;t:for(;r!==null;){var e=r.f,l=(e&D)!==0,s=l&&(e&v)!==0,a=r.next;if(!s&&!(e&F)){if(e&wt)n.push(r);else if(l)r.f^=v;else{var i=u;try{u=r,B(r)&&_t(r)}catch(p){rt(p,r,null,r.ctx)}finally{u=i}}var y=r.first;if(y!==null){r=y;continue}}if(a===null){let p=r.parent;for(;p!==null;){if(t===p)break t;var _=p.next;if(_!==null){r=_;continue t}p=p.parent}}r=a}return n}function Kt(t){var n=V,r=I;try{Gt();const l=[];V=xn,I=l,Y=!1,$t(r);var e=t==null?void 0:t();return An(),(I.length>0||l.length>0)&&Kt(),b=0,j=null,e}finally{V=n,I=r}}async function Nr(){await Promise.resolve(),Kt()}function Pn(t){var n=t.f,r=(n&m)!==0;if(u!==null&&!g){A!==null&&A.includes(t)&&sn();var e=u.deps;t.rv<W&&(t.rv=W,c===null&&e!==null&&e[E]===t?E++:c===null?c=[t]:(!S||!c.includes(t))&&c.push(t))}else if(r&&t.deps===null&&t.effects===null){var l=t,s=l.parent;s!==null&&!(s.f&w)&&(l.f^=w)}return r&&(l=t,B(l)&&Nt(l)),t.v}function Cr(t){var n=g;try{return g=!0,t()}finally{g=n}}const bn=-7169;function x(t,n){t.f=t.f&bn|n}function Pr(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(pt in t)ut(t);else if(!Array.isArray(t))for(let n in t){const r=t[n];typeof r=="object"&&r&&pt in r&&ut(r)}}}function ut(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let e in t)try{ut(t[e],n)}catch{}const r=Wt(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=zt(r);for(let l in e){const s=e[l].get;if(s)try{s.call(t)}catch{}}}}}export{vn as $,zn as A,tt as B,gr as C,fn as D,mt as E,qn as F,o as G,on as H,F as I,cn as J,ir as K,ft as L,Xn as M,Lt as N,Tr as O,gn as P,N as Q,Wn as R,Jn as S,C as T,ar as U,Fn as V,Vn as W,Wt as X,zt as Y,Pt as Z,wr as _,or as a,fr as a0,_r as a1,lt as a2,Qt as a3,un as a4,st as a5,pn as a6,lr as a7,sr as a8,jn as a9,er as aA,Kt as aB,Nr as aC,tn as aD,yn as aa,Ar as ab,pt as ac,Mn as ad,Yn as ae,Zn as af,vt as ag,Kn as ah,Z as ai,z as aj,u as ak,Or as al,Ln as am,Er as an,xt as ao,Rt as ap,Gn as aq,Dr as ar,$n as as,Bn as at,nr as au,At as av,rr as aw,Un as ax,tr as ay,Qn as az,wn as b,yr as c,vr as d,dr as e,M as f,cr as g,O as h,Ir as i,kr as j,Tn as k,T as l,f as m,hr as n,xr as o,ur as p,Xt as q,pr as r,mr as s,Sr as t,Rr as u,Cr as v,Pn as w,Hn as x,Pr as y,It as z};
