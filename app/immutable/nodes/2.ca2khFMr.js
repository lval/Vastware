import{t as X,h as ue,a as B}from"../chunks/B-lrBvP-.js";import{b as ve,h as N,d as fe,w,C as ge,H as he,e as Q,f as Z,g as H,l as $,D as me,i as ne,j as se,k as pe,I as P,F as ie,G as j,J as _e,K as ye,L as ee,M as be,N as we,O as xe,P as Ae,Q as Ie,R as Ee,S as Ce,T as Te,V as De,W as Se,X as Le,Y as Ne,Z as le,p as Oe,_ as ae,a0 as G,c as h,t as F,a as ke,s as A,a1 as W,$ as Me,n as Y,r as m}from"../chunks/BNT76QoO.js";import{l as $e,i as We,d as Re,e as Ve,s as z}from"../chunks/dHBS3ZAK.js";import{t as qe}from"../chunks/Bvena8yX.js";import{p as U}from"../chunks/D93PkL5x.js";function Be(a,e){return e}function He(a,e,t,r){for(var n=[],i=e.length,c=0;c<i;c++)we(e[c].e,n,!0);var g=i>0&&n.length===0&&t!==null;if(g){var v=t.parentNode;xe(v),v.append(t),r.clear(),T(a,e[0].prev,e[i-1].next)}Ae(n,()=>{for(var p=0;p<i;p++){var s=e[p];g||(r.delete(s.k),T(a,s.prev,s.next)),Ie(s.e,!g)}})}function Pe(a,e,t,r,n,i=null){var c=a,g={flags:e,items:new Map,first:null};N&&fe();var v=null,p=!1,s=ge(()=>{var u=t();return De(u)?u:u==null?[]:ie(u)});ve(()=>{var u=w(s),l=u.length;if(p&&l===0)return;p=l===0;let f=!1;if(N){var d=c.data===he;d!==(l===0)&&(c=Q(),Z(c),H(!1),f=!0)}if(N){for(var x=null,_,o=0;o<l;o++){if($.nodeType===8&&$.data===me){c=$,f=!0,H(!1);break}var y=u[o],D=r(y,o);_=oe($,g,x,null,y,D,o,n,e,t),g.items.set(D,_),x=_}l>0&&Z(Q())}N||Ge(u,g,c,n,e,r,t),i!==null&&(l===0?v?ne(v):v=se(()=>i(c)):v!==null&&pe(v,()=>{v=null})),f&&H(!0),w(s)}),N&&(c=$)}function Ge(a,e,t,r,n,i,c){var g=a.length,v=e.items,p=e.first,s=p,u,l=null,f=[],d=[],x,_,o,y;for(y=0;y<g;y+=1){if(x=a[y],_=i(x,y),o=v.get(_),o===void 0){var D=s?s.e.nodes_start:t;l=oe(D,e,l,l===null?e.first:l.next,x,_,y,r,n,c),v.set(_,l),f=[],d=[],s=l.next;continue}if(Fe(o,x,y),o.e.f&P&&ne(o.e),o!==s){if(u!==void 0&&u.has(o)){if(f.length<d.length){var S=d[0],b;l=S.prev;var O=f[0],k=f[f.length-1];for(b=0;b<f.length;b+=1)te(f[b],S,t);for(b=0;b<d.length;b+=1)u.delete(d[b]);T(e,O.prev,k.next),T(e,l,O),T(e,k,S),s=S,l=k,y-=1,f=[],d=[]}else u.delete(o),te(o,s,t),T(e,o.prev,o.next),T(e,o,l===null?e.first:l.next),T(e,l,o),l=o;continue}for(f=[],d=[];s!==null&&s.k!==_;)s.e.f&P||(u??(u=new Set)).add(s),d.push(s),s=s.next;if(s===null)continue;o=s}f.push(o),l=o,s=o.next}if(s!==null||u!==void 0){for(var I=u===void 0?[]:ie(u);s!==null;)s.e.f&P||I.push(s),s=s.next;var M=I.length;if(M>0){var q=null;He(e,I,q,v)}}j.first=e.first&&e.first.e,j.last=l&&l.e}function Fe(a,e,t,r){_e(a.v,e),a.i=t}function oe(a,e,t,r,n,i,c,g,v,p){var s=(v&Ee)!==0,u=(v&Ce)===0,l=s?u?ye(n):ee(n):n,f=v&be?ee(c):c,d={i:f,v:l,k:i,a:null,e:null,prev:t,next:r};try{return d.e=se(()=>g(a,l,f,p),N),d.e.prev=t&&t.e,d.e.next=r&&r.e,t===null?e.first=d:(t.next=d,t.e.next=d.e),r!==null&&(r.prev=d,r.e.prev=d.e),d}finally{}}function te(a,e,t){for(var r=a.next?a.next.e.nodes_start:t,n=e?e.e.nodes_start:t,i=a.e.nodes_start;i!==r;){var c=Te(i);n.before(i),i=c}}function T(a,e,t){e===null?a.first=t:(e.next=t,e.e.next=t&&t.e),t!==null&&(t.prev=e,t.e.prev=e&&e.e)}function K(a,e,t,r){var n=a.__attributes??(a.__attributes={});N&&(n[e]=a.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&a.nodeName==="LINK")||n[e]!==(n[e]=t)&&(e==="style"&&"__styles"in a&&(a.__styles={}),e==="loading"&&(a[Se]=t),t==null?a.removeAttribute(e):typeof t!="string"&&Ye(a).includes(e)?a[e]=t:a.setAttribute(e,t))}var re=new Map;function Ye(a){var e=re.get(a.nodeName);if(e)return e;re.set(a.nodeName,e=[]);for(var t,r=a,n=Element.prototype;n!==r;){t=Ne(r);for(var i in t)t[i].set&&e.push(i);r=Le(r)}return e}function ce(a,e,t){if(a.multiple)return Ke(a,e);for(var r of a.options){var n=R(r);if(We(n,e)){r.selected=!0;return}}(!t||e!==void 0)&&(a.selectedIndex=-1)}function ze(a,e){le(()=>{var t=new MutationObserver(()=>{var r=a.__value;ce(a,r)});return t.observe(a,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),()=>{t.disconnect()}})}function Ue(a,e,t=e){var r=!0;$e(a,"change",n=>{var i=n?"[selected]":":checked",c;if(a.multiple)c=[].map.call(a.querySelectorAll(i),R);else{var g=a.querySelector(i)??a.querySelector("option:not([disabled])");c=g&&R(g)}t(c)}),le(()=>{var n=e();if(ce(a,n,r),r&&n===void 0){var i=a.querySelector(":checked");i!==null&&(n=R(i),t(n))}a.__value=n,r=!1}),ze(a)}function Ke(a,e){for(var t of a.options)t.selected=~e.indexOf(R(t))}function R(a){return"__value"in a?a.__value:a.value}const Xe=(a,e,t,r)=>{W(e,null),W(t,`mailto:Vastware <contact@vastware.org>?subject=${encodeURIComponent(`${w(r)}`)}`)};var Je=X('<meta name="description" content="Empowering Businesses With Custom Programming Solutions"> <meta property="og:url"> <meta property="og:image">',1),Qe=X("<option> </option>"),Ze=X(`<div class="container-lg"><div class="wrapper-full my-5"><img class="img-fluid" alt="" width="500" height="80"> <hr class="hsep"> <h1 class="lh-sm mb-3">Empowering Businesses With Custom Programming Solutions</h1> <h2 class="display-6 fw-normal">Tailored Development, Seamless Integrations, and Data-Driven Insights</h2> <a href="#contact" class="highlight-link mt-4">Get in Touch</a></div></div> <div class="container-lg"><div class="wrapper"><section class="grid"><h3 class="g-col-12 g-col-md-5 text-start text-md-end me-0 me-md-5 lh-1">Overview</h3> <div class="g-col-12 g-col-md-7"> </div></section> <section class="grid"><h3 class="g-col-12 g-col-md-5 text-start text-md-end me-0 me-md-5 lh-1">What We Do</h3> <div class="g-col-12 g-col-md-7"><h4>Application Development</h4> <ul><li>Custom-built, scalable, and high-performance applications tailored to your business needs.</li> <li>Modern software solutions leveraging cloud, microservices, and AI-driven automation.</li> <li>End-to-end application lifecycle support, from design and development to deployment and maintenance.</li></ul> <h4>Data Integration & Management</h4> <ul><li>Seamlessly connect disparate data sources, legacy systems, and cloud platforms.</li> <li>Build a single source of truth with automated ETL (Extract, Transform, Load) processes.</li> <li>Enable real-time data access for more efficient operations and decision-making.</li></ul> <h4>Advanced Insights & Analytics</h4> <ul><li>Transform raw data into actionable intelligence with BI dashboards and reporting.</li> <li>Leverage AI, machine learning, and predictive analytics for smarter forecasting.</li> <li>Optimize business performance with real-time monitoring and trend analysis.</li></ul></div></section> <section class="grid"><h3 class="g-col-12 g-col-md-5 text-start text-md-end me-0 me-md-5 lh-1"> </h3> <div class="g-col-12 g-col-md-7"><ul><li><strong>Proven Expertise</strong> &ndash; Decades of experience in software engineering, data architecture,
                        and analytics.</li> <li><strong>End-to-End Solutions</strong> &ndash; We handle everything from application design to data strategy
                        and insight generation.</li> <li><strong>Seamless Data & App Integration</strong> &ndash; We unify software systems and data sources to maximize
                        efficiency.</li> <li><strong>AI & Cloud-First Approach</strong> &ndash; We leverage cutting-edge technologies for scalability, security,
                        and automation.</li> <li><strong>Client-Centric Strategy</strong> &ndash; We align our solutions with your business goals to create
                        real impact.</li></ul></div></section> <section class="grid" id="contact"><h3 class="g-col-12 g-col-md-5 text-start text-md-end me-0 me-md-5 lh-1">Get in Touch</h3> <div class="g-col-12 g-col-md-7"><form><div class="mb-3"><div class="form-floating"><select name="Category" id="Category" class="form-select" required><option selected disabled>---</option><!></select> <label for="Category" class="small">Category</label></div></div> <button type="submit" class="btn btn-outline-secondary btn-lg">Contact Us</button></form></div></section></div></div>`,1);function na(a,e){Oe(e,!0);const t=["General Inquiries","New Projects/Opportunities","Partnerships/Collaborations","Other"];let r=G(""),n=G(null),i=G(null);const c=L=>{if(L.preventDefault(),w(n))try{window.location.href=w(n),W(i,null)}catch{W(i,"generic")}};var g=Ze();ue(L=>{var E=Je(),C=A(ae(E),2),V=A(C,2);F(()=>{Me.title="Vastware",K(C,"content",U.url.href),K(V,"content",`${U.url.protocol??""}//${U.url.host??""}/social-card-default.png`)}),B(L,E)});var v=ae(g),p=h(v),s=h(p);Y(8),m(p),m(v);var u=A(v,2),l=h(u),f=h(l),d=A(h(f),2),x=h(d);m(d),m(f);var _=A(f,4),o=h(_),y=h(o);m(o),Y(2),m(_);var D=A(_,2),S=A(h(D),2),b=h(S),O=h(b),k=h(O),I=h(k);I.__change=[Xe,i,n,r];var M=h(I);M.value=((M.__value="")==null,"");var q=A(M);Pe(q,17,()=>Object.values(t),Be,(L,E)=>{var C=Qe(),V={},de=h(C,!0);m(C),F(()=>{V!==(V=w(E))&&(C.value=(C.__value=w(E))==null?"":w(E)),z(de,w(E))}),B(L,C)}),m(I),Y(2),m(k),m(O);var J=A(O,2);m(b),m(S),m(D),m(l),m(u),F(()=>{K(s,"src","/img/logo.719622e7.svg"),z(x,`At Vastware LLC, we specialize in Application Development, Data Integration, and Advanced
                Analytics, helping businesses transform their technology landscape and make data-driven decisions. Founded by
                Victor Torres and Luis Valentin, we bring over 45 years of experience delivering custom software solutions,
                seamless data integration, and AI-powered insights to drive business success.`),z(y,"Why Choose Vastware?"),J.disabled=!w(n),qe(J,"d-none",!w(n))}),Ve("submit",b,c),Ue(I,()=>w(r),L=>W(r,L)),B(a,g),ke()}Re(["change"]);export{na as component};
