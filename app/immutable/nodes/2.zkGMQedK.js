import{t as X,h as ue,a as H}from"../chunks/bq3GB9iK.js";import{b as ve,h as N,d as fe,w,C as ge,H as he,e as J,f as Q,g as B,l as $,D as pe,i as re,j as ne,k as me,I as F,F as se,G as Z,J as _e,K as ye,L as j,M as be,N as we,O as xe,P as Ae,Q as Ie,R as Ee,S as Te,T as Ce,V as De,W as Le,X as Se,Y as Ne,Z as ie,p as Oe,_ as ee,a0 as G,c as h,t as P,a as ke,s as T,a1 as R,$ as Me,n as Y,r as p}from"../chunks/D2liPe9F.js";import{l as $e,i as Re,d as Ve,e as We,s as z}from"../chunks/8LtFBSq4.js";import{p as U}from"../chunks/CpXgC4oB.js";function qe(a,e){return e}function He(a,e,t,r){for(var n=[],i=e.length,d=0;d<i;d++)we(e[d].e,n,!0);var g=i>0&&n.length===0&&t!==null;if(g){var v=t.parentNode;xe(v),v.append(t),r.clear(),C(a,e[0].prev,e[i-1].next)}Ae(n,()=>{for(var m=0;m<i;m++){var s=e[m];g||(r.delete(s.k),C(a,s.prev,s.next)),Ie(s.e,!g)}})}function Be(a,e,t,r,n,i=null){var d=a,g={flags:e,items:new Map,first:null};N&&fe();var v=null,m=!1,s=ge(()=>{var u=t();return De(u)?u:u==null?[]:se(u)});ve(()=>{var u=w(s),l=u.length;if(m&&l===0)return;m=l===0;let f=!1;if(N){var c=d.data===he;c!==(l===0)&&(d=J(),Q(d),B(!1),f=!0)}if(N){for(var x=null,_,o=0;o<l;o++){if($.nodeType===8&&$.data===pe){d=$,f=!0,B(!1);break}var y=u[o],D=r(y,o);_=le($,g,x,null,y,D,o,n,e,t),g.items.set(D,_),x=_}l>0&&Q(J())}N||Fe(u,g,d,n,e,r,t),i!==null&&(l===0?v?re(v):v=ne(()=>i(d)):v!==null&&me(v,()=>{v=null})),f&&B(!0),w(s)}),N&&(d=$)}function Fe(a,e,t,r,n,i,d){var g=a.length,v=e.items,m=e.first,s=m,u,l=null,f=[],c=[],x,_,o,y;for(y=0;y<g;y+=1){if(x=a[y],_=i(x,y),o=v.get(_),o===void 0){var D=s?s.e.nodes_start:t;l=le(D,e,l,l===null?e.first:l.next,x,_,y,r,n,d),v.set(_,l),f=[],c=[],s=l.next;continue}if(Ge(o,x,y),o.e.f&F&&re(o.e),o!==s){if(u!==void 0&&u.has(o)){if(f.length<c.length){var L=c[0],b;l=L.prev;var O=f[0],k=f[f.length-1];for(b=0;b<f.length;b+=1)ae(f[b],L,t);for(b=0;b<c.length;b+=1)u.delete(c[b]);C(e,O.prev,k.next),C(e,l,O),C(e,k,L),s=L,l=k,y-=1,f=[],c=[]}else u.delete(o),ae(o,s,t),C(e,o.prev,o.next),C(e,o,l===null?e.first:l.next),C(e,l,o),l=o;continue}for(f=[],c=[];s!==null&&s.k!==_;)s.e.f&F||(u??(u=new Set)).add(s),c.push(s),s=s.next;if(s===null)continue;o=s}f.push(o),l=o,s=o.next}if(s!==null||u!==void 0){for(var A=u===void 0?[]:se(u);s!==null;)s.e.f&F||A.push(s),s=s.next;var M=A.length;if(M>0){var q=null;He(e,A,q,v)}}Z.first=e.first&&e.first.e,Z.last=l&&l.e}function Ge(a,e,t,r){_e(a.v,e),a.i=t}function le(a,e,t,r,n,i,d,g,v,m){var s=(v&Ee)!==0,u=(v&Te)===0,l=s?u?ye(n):j(n):n,f=v&be?j(d):d,c={i:f,v:l,k:i,a:null,e:null,prev:t,next:r};try{return c.e=ne(()=>g(a,l,f,m),N),c.e.prev=t&&t.e,c.e.next=r&&r.e,t===null?e.first=c:(t.next=c,t.e.next=c.e),r!==null&&(r.prev=c,r.e.prev=c.e),c}finally{}}function ae(a,e,t){for(var r=a.next?a.next.e.nodes_start:t,n=e?e.e.nodes_start:t,i=a.e.nodes_start;i!==r;){var d=Ce(i);n.before(i),i=d}}function C(a,e,t){e===null?a.first=t:(e.next=t,e.e.next=t&&t.e),t!==null&&(t.prev=e,t.e.prev=e&&e.e)}function K(a,e,t,r){var n=a.__attributes??(a.__attributes={});N&&(n[e]=a.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&a.nodeName==="LINK")||n[e]!==(n[e]=t)&&(e==="style"&&"__styles"in a&&(a.__styles={}),e==="loading"&&(a[Le]=t),t==null?a.removeAttribute(e):typeof t!="string"&&Pe(a).includes(e)?a[e]=t:a.setAttribute(e,t))}var te=new Map;function Pe(a){var e=te.get(a.nodeName);if(e)return e;te.set(a.nodeName,e=[]);for(var t,r=a,n=Element.prototype;n!==r;){t=Ne(r);for(var i in t)t[i].set&&e.push(i);r=Se(r)}return e}function oe(a,e,t){if(a.multiple)return Ue(a,e);for(var r of a.options){var n=V(r);if(Re(n,e)){r.selected=!0;return}}(!t||e!==void 0)&&(a.selectedIndex=-1)}function Ye(a,e){ie(()=>{var t=new MutationObserver(()=>{var r=a.__value;oe(a,r)});return t.observe(a,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),()=>{t.disconnect()}})}function ze(a,e,t=e){var r=!0;$e(a,"change",n=>{var i=n?"[selected]":":checked",d;if(a.multiple)d=[].map.call(a.querySelectorAll(i),V);else{var g=a.querySelector(i)??a.querySelector("option:not([disabled])");d=g&&V(g)}t(d)}),ie(()=>{var n=e();if(oe(a,n,r),r&&n===void 0){var i=a.querySelector(":checked");i!==null&&(n=V(i),t(n))}a.__value=n,r=!1}),Ye(a)}function Ue(a,e){for(var t of a.options)t.selected=~e.indexOf(V(t))}function V(a){return"__value"in a?a.__value:a.value}const Ke=(a,e,t,r)=>{R(e,null),R(t,`mailto:Vastware <contact@vastware.org>?subject=${encodeURIComponent(`${w(r)}`)}`)};var Xe=X('<meta property="og:url"> <meta property="og:image">',1),Je=X("<option> </option>"),Qe=X(`<div class="container-lg"><div class="wrapper-full my-5"><img class="img-fluid" alt="" width="500"> <hr class="hsep"> <h1 class="lh-1 mb-3">Let's Build the Future Together</h1> <p class="display-6">We empower businesses with intelligent, integrated, and scalable solutions.</p> <a href="#contact" class="highlight-link mt-3">Get in Touch</a></div></div> <div class="container-lg"><div class="wrapper"><section class="grid"><h2 class="g-col-12 g-col-md-5 text-start text-md-end me-0 me-md-5 lh-1">Overview</h2> <div class="g-col-12 g-col-md-7"> </div></section> <section class="grid"><h2 class="g-col-12 g-col-md-5 text-start text-md-end me-0 me-md-5 lh-1">What We Do</h2> <div class="g-col-12 g-col-md-7"><h4>Application Development</h4> <ul><li>Custom-built, scalable, and high-performance applications tailored to your business needs.</li> <li>Modern software solutions leveraging cloud, microservices, and AI-driven automation.</li> <li>End-to-end application lifecycle support, from design and development to deployment and maintenance.</li></ul> <h4>Data Integration & Management</h4> <ul><li>Seamlessly connect disparate data sources, legacy systems, and cloud platforms.</li> <li>Build a single source of truth with automated ETL (Extract, Transform, Load) processes.</li> <li>Enable real-time data access for more efficient operations and decision-making.</li></ul> <h4>Advanced Insights & Analytics</h4> <ul><li>Transform raw data into actionable intelligence with BI dashboards and reporting.</li> <li>Leverage AI, machine learning, and predictive analytics for smarter forecasting.</li> <li>Optimize business performance with real-time monitoring and trend analysis.</li></ul></div></section> <section class="grid"><h2 class="g-col-12 g-col-md-5 text-start text-md-end me-0 me-md-5 lh-1"> </h2> <div class="g-col-12 g-col-md-7"><ul><li><strong>Proven Expertise</strong> &ndash; Decades of experience in software engineering, data architecture,
                        and analytics.</li> <li><strong>End-to-End Solutions</strong> &ndash; We handle everything from application design to data strategy
                        and insight generation.</li> <li><strong>Seamless Data & App Integration</strong> &ndash; We unify software systems and data sources to maximize
                        efficiency.</li> <li><strong>AI & Cloud-First Approach</strong> &ndash; We leverage cutting-edge technologies for scalability, security,
                        and automation.</li> <li><strong>Client-Centric Strategy</strong> &ndash; We align our solutions with your business goals to create
                        real impact.</li></ul></div></section> <section class="grid" id="contact"><h2 class="g-col-12 g-col-md-5 text-start text-md-end me-0 me-md-5 lh-1">Get in Touch</h2> <div class="g-col-12 g-col-md-7"><form><div class="mb-3"><div class="form-floating"><select name="Category" id="Category" class="form-select" required><option selected disabled>---</option><!></select> <label for="Category" class="small">Category</label></div></div> <button type="submit" class="btn btn-outline-secondary btn-lg">Contact Us</button></form></div></section></div></div>`,1);function ta(a,e){Oe(e,!0);const t=["General Inquiries","New Projects/Opportunities","Partnerships/Collaborations","Other"];let r=G(""),n=G(null),i=G(null);const d=S=>{if(S.preventDefault(),w(n))try{window.location.href=w(n),R(i,null)}catch{R(i,"generic")}};var g=Qe();ue(S=>{var I=Xe(),E=ee(I),W=T(E,2);P(()=>{Me.title="Vastware",K(E,"content",U.url.href),K(W,"content",`${U.url.protocol??""}//${U.url.host??""}/social-card-default.png`)}),H(S,I)});var v=ee(g),m=h(v),s=h(m);Y(8),p(m),p(v);var u=T(v,2),l=h(u),f=h(l),c=T(h(f),2),x=h(c);p(c),p(f);var _=T(f,4),o=h(_),y=h(o);p(o),Y(2),p(_);var D=T(_,2),L=T(h(D),2),b=h(L),O=h(b),k=h(O),A=h(k);A.__change=[Ke,i,n,r];var M=h(A);M.value=((M.__value="")==null,"");var q=T(M);Be(q,17,()=>Object.values(t),qe,(S,I)=>{var E=Je(),W={},ce=h(E,!0);p(E),P(()=>{W!==(W=w(I))&&(E.value=(E.__value=w(I))==null?"":w(I)),z(ce,w(I))}),H(S,E)}),p(A),Y(2),p(k),p(O);var de=T(O,2);p(b),p(L),p(D),p(l),p(u),P(()=>{K(s,"src","/img/logo.719622e7.svg"),z(x,`At Vastware LLC, we specialize in Application Development, Data Integration, and Advanced
                Analytics, helping businesses transform their technology landscape and make data-driven decisions. Founded by
                Victor Torres and Luis Valentin, we bring over 45 years of experience delivering custom software solutions,
                seamless data integration, and AI-powered insights to drive business success.`),z(y,"Why Choose Vastware?"),de.disabled=!w(n)}),We("submit",b,d),ze(A,()=>w(r),S=>R(r,S)),H(a,g),ke()}Ve(["change"]);export{ta as component};
