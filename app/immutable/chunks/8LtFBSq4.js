import{ac as P,ad as G,ae as X,L as h,af as Z,w as D,U as v,a1 as w,ag as A,G as j,ah as z,X as J,V as C,ai as S,aj as p,ak as K,ab as Q,al as ee,am as te,an as k,a5 as re,a4 as ae,T as ne,ao as x,g as I,f as q,d as ie,l as O,D as se,ap as fe,aq as ue,O as oe,F as de,ar as le,a2 as ce,j as _e,p as ve,m as ge,h as M,a as ye}from"./D2liPe9F.js";import{r as he,b as we}from"./bq3GB9iK.js";function N(e,t=null,u){if(typeof e!="object"||e===null||P in e)return e;const l=J(e);if(l!==G&&l!==X)return e;var n=new Map,i=C(e),_=h(0);i&&n.set("length",h(e.length));var g;return new Proxy(e,{defineProperty(d,r,s){(!("value"in s)||s.configurable===!1||s.enumerable===!1||s.writable===!1)&&z();var f=n.get(r);return f===void 0?(f=h(s.value),n.set(r,f)):w(f,N(s.value,g)),!0},deleteProperty(d,r){var s=n.get(r);if(s===void 0)r in d&&n.set(r,h(v));else{if(i&&typeof r=="string"){var f=n.get("length"),a=Number(r);Number.isInteger(a)&&a<f.v&&w(f,a)}w(s,v),B(_)}return!0},get(d,r,s){var c;if(r===P)return e;var f=n.get(r),a=r in d;if(f===void 0&&(!a||(c=A(d,r))!=null&&c.writable)&&(f=h(N(a?d[r]:v,g)),n.set(r,f)),f!==void 0){var o=D(f);return o===v?void 0:o}return Reflect.get(d,r,s)},getOwnPropertyDescriptor(d,r){var s=Reflect.getOwnPropertyDescriptor(d,r);if(s&&"value"in s){var f=n.get(r);f&&(s.value=D(f))}else if(s===void 0){var a=n.get(r),o=a==null?void 0:a.v;if(a!==void 0&&o!==v)return{enumerable:!0,configurable:!0,value:o,writable:!0}}return s},has(d,r){var o;if(r===P)return!0;var s=n.get(r),f=s!==void 0&&s.v!==v||Reflect.has(d,r);if(s!==void 0||j!==null&&(!f||(o=A(d,r))!=null&&o.writable)){s===void 0&&(s=h(f?N(d[r],g):v),n.set(r,s));var a=D(s);if(a===v)return!1}return f},set(d,r,s,f){var b;var a=n.get(r),o=r in d;if(i&&r==="length")for(var c=s;c<a.v;c+=1){var y=n.get(c+"");y!==void 0?w(y,v):c in d&&(y=h(v),n.set(c+"",y))}a===void 0?(!o||(b=A(d,r))!=null&&b.writable)&&(a=h(void 0),w(a,N(s,g)),n.set(r,a)):(o=a.v!==v,w(a,N(s,g)));var m=Reflect.getOwnPropertyDescriptor(d,r);if(m!=null&&m.set&&m.set.call(f,s),!o){if(i&&typeof r=="string"){var R=n.get("length"),E=Number(r);Number.isInteger(E)&&E>=R.v&&w(R,E+1)}B(_)}return!0},ownKeys(d){D(_);var r=Reflect.ownKeys(d).filter(a=>{var o=n.get(a);return o===void 0||o.v!==v});for(var[s,f]of n)f.v!==v&&!(s in d)&&r.push(s);return r},setPrototypeOf(){Z()}})}function B(e,t=1){w(e,e.v+t)}function H(e){return e!==null&&typeof e=="object"&&P in e?e[P]:e}function Pe(e,t){return Object.is(H(e),H(t))}const be=["touchstart","touchmove"];function me(e){return be.includes(e)}let W=!1;function Ee(){W||(W=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{var t;if(!e.defaultPrevented)for(const u of e.target.elements)(t=u.__on_r)==null||t.call(u)})},{capture:!0}))}function U(e){var t=K,u=j;S(null),p(null);try{return e()}finally{S(t),p(u)}}function Re(e,t,u,l=u){e.addEventListener(t,()=>U(u));const n=e.__on_r;n?e.__on_r=()=>{n(),l(!0)}:e.__on_r=()=>l(!0),Ee()}const $=new Set,V=new Set;function Te(e,t,u,l={}){function n(i){if(l.capture||L.call(t,i),!i.cancelBubble)return U(()=>u==null?void 0:u.call(this,i))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?ee(()=>{t.addEventListener(e,n,l)}):t.addEventListener(e,n,l),n}function De(e,t,u,l,n){var i={capture:l,passive:n},_=Te(e,t,u,i);(t===document.body||t===window||t===document)&&Q(()=>{t.removeEventListener(e,_,i)})}function Ie(e){for(var t=0;t<e.length;t++)$.add(e[t]);for(var u of V)u(e)}function L(e){var E;var t=this,u=t.ownerDocument,l=e.type,n=((E=e.composedPath)==null?void 0:E.call(e))||[],i=n[0]||e.target,_=0,g=e.__root;if(g){var d=n.indexOf(g);if(d!==-1&&(t===document||t===window)){e.__root=t;return}var r=n.indexOf(t);if(r===-1)return;d<=r&&(_=d)}if(i=n[_]||e.target,i!==t){te(e,"currentTarget",{configurable:!0,get(){return i||u}});var s=K,f=j;S(null),p(null);try{for(var a,o=[];i!==null;){var c=i.assignedSlot||i.parentNode||i.host||null;try{var y=i["__"+l];if(y!==void 0&&(!i.disabled||e.target===i))if(C(y)){var[m,...R]=y;m.apply(i,[e,...R])}else y.call(i,e)}catch(b){a?o.push(b):a=b}if(e.cancelBubble||c===t||c===null)break;i=c}if(a){for(let b of o)queueMicrotask(()=>{throw b});throw a}}finally{e.__root=t,delete e.currentTarget,S(s),p(f)}}}function Se(e,t){var u=t==null?"":typeof t=="object"?t+"":t;u!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=u,e.nodeValue=u+"")}function Ne(e,t){return F(e,t)}function pe(e,t){k(),t.intro=t.intro??!1;const u=t.target,l=M,n=O;try{for(var i=re(u);i&&(i.nodeType!==8||i.data!==ae);)i=ne(i);if(!i)throw x;I(!0),q(i),ie();const _=F(e,{...t,anchor:i});if(O===null||O.nodeType!==8||O.data!==se)throw fe(),x;return I(!1),_}catch(_){if(_===x)return t.recover===!1&&ue(),k(),oe(u),I(!1),Ne(e,t);throw _}finally{I(l),q(n),he()}}const T=new Map;function F(e,{target:t,anchor:u,props:l={},events:n,context:i,intro:_=!0}){k();var g=new Set,d=f=>{for(var a=0;a<f.length;a++){var o=f[a];if(!g.has(o)){g.add(o);var c=me(o);t.addEventListener(o,L,{passive:c});var y=T.get(o);y===void 0?(document.addEventListener(o,L,{passive:c}),T.set(o,1)):T.set(o,y+1)}}};d(de($)),V.add(d);var r=void 0,s=le(()=>{var f=u??t.appendChild(ce());return _e(()=>{if(i){ve({});var a=ge;a.c=i}n&&(l.$$events=n),M&&we(f,null),r=e(f,l)||{},M&&(j.nodes_end=O),i&&ye()}),()=>{var c;for(var a of g){t.removeEventListener(a,L);var o=T.get(a);--o===0?(document.removeEventListener(a,L),T.delete(a)):T.set(a,o)}V.delete(d),f!==u&&((c=f.parentNode)==null||c.removeChild(f))}});return Y.set(r,s),r}let Y=new WeakMap;function je(e,t){const u=Y.get(e);return u?(Y.delete(e),u(t)):Promise.resolve()}export{Ie as d,De as e,pe as h,Pe as i,Re as l,Ne as m,N as p,Se as s,je as u,U as w};
