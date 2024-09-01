import{R as m,r as s,b as rt,c as oe,j as p,W as ot}from"./app-Y8fBfMZs.js";import{I as lt}from"./InputError-rnu4anrE.js";import{I as at}from"./InputLabel-DsOW8cmB.js";import{l as Z,s as B,a as R,u as O,b as de,o as w,U as T,C as S,t as fe,y as L,p as it,f as Se,T as ut,c as Pe,O as ye,d as st,e as K,q as te}from"./transition-JNSvz0pv.js";import{S as ct}from"./SecondaryButton-3M7Jo6uq.js";import{T as dt}from"./TextInput-BcqqWO2r.js";var be;let k=(be=m.useId)!=null?be:function(){let e=Z(),[t,n]=m.useState(e?()=>B.nextId():null);return R(()=>{t===null&&n(B.nextId())},[t]),t!=null?""+t:void 0};function Le(e){return B.isServer?null:e instanceof Node?e.ownerDocument:e!=null&&e.hasOwnProperty("current")&&e.current instanceof Node?e.current.ownerDocument:document}let le=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var C=(e=>(e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll",e))(C||{}),De=(e=>(e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow",e))(De||{}),ft=(e=>(e[e.Previous=-1]="Previous",e[e.Next=1]="Next",e))(ft||{});function mt(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(le)).sort((t,n)=>Math.sign((t.tabIndex||Number.MAX_SAFE_INTEGER)-(n.tabIndex||Number.MAX_SAFE_INTEGER)))}var Fe=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(Fe||{});function pt(e,t=0){var n;return e===((n=Le(e))==null?void 0:n.body)?!1:O(t,{0(){return e.matches(le)},1(){let r=e;for(;r!==null;){if(r.matches(le))return!0;r=r.parentElement}return!1}})}var vt=(e=>(e[e.Keyboard=0]="Keyboard",e[e.Mouse=1]="Mouse",e))(vt||{});typeof window<"u"&&typeof document<"u"&&(document.addEventListener("keydown",e=>{e.metaKey||e.altKey||e.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",e=>{e.detail===1?delete document.documentElement.dataset.headlessuiFocusVisible:e.detail===0&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0));function M(e){e==null||e.focus({preventScroll:!0})}let gt=["textarea","input"].join(",");function ht(e){var t,n;return(n=(t=e==null?void 0:e.matches)==null?void 0:t.call(e,gt))!=null?n:!1}function wt(e,t=n=>n){return e.slice().sort((n,r)=>{let l=t(n),a=t(r);if(l===null||a===null)return 0;let o=l.compareDocumentPosition(a);return o&Node.DOCUMENT_POSITION_FOLLOWING?-1:o&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function z(e,t,{sorted:n=!0,relativeTo:r=null,skipElements:l=[]}={}){let a=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e.ownerDocument,o=Array.isArray(e)?n?wt(e):e:mt(e);l.length>0&&o.length>1&&(o=o.filter(g=>!l.includes(g))),r=r??a.activeElement;let i=(()=>{if(t&5)return 1;if(t&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),u=(()=>{if(t&1)return 0;if(t&2)return Math.max(0,o.indexOf(r))-1;if(t&4)return Math.max(0,o.indexOf(r))+1;if(t&8)return o.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),f=t&32?{preventScroll:!0}:{},c=0,d=o.length,h;do{if(c>=d||c+d<=0)return 0;let g=u+c;if(t&16)g=(g+d)%d;else{if(g<0)return 3;if(g>=d)return 1}h=o[g],h==null||h.focus(f),c+=i}while(h!==a.activeElement);return t&6&&ht(h)&&h.select(),2}function Ce(){return/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0}function Et(){return/Android/gi.test(window.navigator.userAgent)}function yt(){return Ce()||Et()}function X(e,t,n){let r=de(t);s.useEffect(()=>{function l(a){r.current(a)}return document.addEventListener(e,l,n),()=>document.removeEventListener(e,l,n)},[e,n])}function Ne(e,t,n){let r=de(t);s.useEffect(()=>{function l(a){r.current(a)}return window.addEventListener(e,l,n),()=>window.removeEventListener(e,l,n)},[e,n])}function bt(e,t,n=!0){let r=s.useRef(!1);s.useEffect(()=>{requestAnimationFrame(()=>{r.current=n})},[n]);function l(o,i){if(!r.current||o.defaultPrevented)return;let u=i(o);if(u===null||!u.getRootNode().contains(u)||!u.isConnected)return;let f=function c(d){return typeof d=="function"?c(d()):Array.isArray(d)||d instanceof Set?d:[d]}(e);for(let c of f){if(c===null)continue;let d=c instanceof HTMLElement?c:c.current;if(d!=null&&d.contains(u)||o.composed&&o.composedPath().includes(d))return}return!pt(u,Fe.Loose)&&u.tabIndex!==-1&&o.preventDefault(),t(o,u)}let a=s.useRef(null);X("pointerdown",o=>{var i,u;r.current&&(a.current=((u=(i=o.composedPath)==null?void 0:i.call(o))==null?void 0:u[0])||o.target)},!0),X("mousedown",o=>{var i,u;r.current&&(a.current=((u=(i=o.composedPath)==null?void 0:i.call(o))==null?void 0:u[0])||o.target)},!0),X("click",o=>{yt()||a.current&&(l(o,()=>a.current),a.current=null)},!0),X("touchend",o=>l(o,()=>o.target instanceof HTMLElement?o.target:null),!0),Ne("blur",o=>l(o,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}function U(...e){return s.useMemo(()=>Le(...e),[...e])}function me(e,t){let n=s.useRef([]),r=w(e);s.useEffect(()=>{let l=[...n.current];for(let[a,o]of t.entries())if(n.current[a]!==o){let i=r(t,l);return n.current=t,i}},[r,...t])}let xt="div";var J=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(J||{});function $t(e,t){var n;let{features:r=1,...l}=e,a={ref:t,"aria-hidden":(r&2)===2?!0:(n=l["aria-hidden"])!=null?n:void 0,hidden:(r&4)===4?!0:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(r&4)===4&&(r&2)!==2&&{display:"none"}}};return S({ourProps:a,theirProps:l,slot:{},defaultTag:xt,name:"Hidden"})}let ae=T($t);function Tt(e){function t(){document.readyState!=="loading"&&(e(),document.removeEventListener("DOMContentLoaded",t))}typeof window<"u"&&typeof document<"u"&&(document.addEventListener("DOMContentLoaded",t),t())}let F=[];Tt(()=>{function e(t){t.target instanceof HTMLElement&&t.target!==document.body&&F[0]!==t.target&&(F.unshift(t.target),F=F.filter(n=>n!=null&&n.isConnected),F.splice(10))}window.addEventListener("click",e,{capture:!0}),window.addEventListener("mousedown",e,{capture:!0}),window.addEventListener("focus",e,{capture:!0}),document.body.addEventListener("click",e,{capture:!0}),document.body.addEventListener("mousedown",e,{capture:!0}),document.body.addEventListener("focus",e,{capture:!0})});function St(e){let t=e.parentElement,n=null;for(;t&&!(t instanceof HTMLFieldSetElement);)t instanceof HTMLLegendElement&&(n=t),t=t.parentElement;let r=(t==null?void 0:t.getAttribute("disabled"))==="";return r&&Pt(n)?!1:r}function Pt(e){if(!e)return!1;let t=e.previousElementSibling;for(;t!==null;){if(t instanceof HTMLLegendElement)return!1;t=t.previousElementSibling}return!0}var Me=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(Me||{});function Re(e,t,n,r){let l=de(n);s.useEffect(()=>{e=e??window;function a(o){l.current(o)}return e.addEventListener(t,a,r),()=>e.removeEventListener(t,a,r)},[e,t,r])}function Ae(e){let t=w(e),n=s.useRef(!1);s.useEffect(()=>(n.current=!1,()=>{n.current=!0,fe(()=>{n.current&&t()})}),[t])}var H=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(H||{});function Lt(){let e=s.useRef(0);return Ne("keydown",t=>{t.key==="Tab"&&(e.current=t.shiftKey?1:0)},!0),e}function Oe(e){if(!e)return new Set;if(typeof e=="function")return new Set(e());let t=new Set;for(let n of e.current)n.current instanceof HTMLElement&&t.add(n.current);return t}let Dt="div";var ke=(e=>(e[e.None=1]="None",e[e.InitialFocus=2]="InitialFocus",e[e.TabLock=4]="TabLock",e[e.FocusLock=8]="FocusLock",e[e.RestoreFocus=16]="RestoreFocus",e[e.All=30]="All",e))(ke||{});function Ft(e,t){let n=s.useRef(null),r=L(n,t),{initialFocus:l,containers:a,features:o=30,...i}=e;Z()||(o=1);let u=U(n);Mt({ownerDocument:u},!!(o&16));let f=Rt({ownerDocument:u,container:n,initialFocus:l},!!(o&2));At({ownerDocument:u,container:n,containers:a,previousActiveElement:f},!!(o&8));let c=Lt(),d=w(x=>{let E=n.current;E&&(D=>D())(()=>{O(c.current,{[H.Forwards]:()=>{z(E,C.First,{skipElements:[x.relatedTarget]})},[H.Backwards]:()=>{z(E,C.Last,{skipElements:[x.relatedTarget]})}})})}),h=it(),g=s.useRef(!1),$={ref:r,onKeyDown(x){x.key=="Tab"&&(g.current=!0,h.requestAnimationFrame(()=>{g.current=!1}))},onBlur(x){let E=Oe(a);n.current instanceof HTMLElement&&E.add(n.current);let D=x.relatedTarget;D instanceof HTMLElement&&D.dataset.headlessuiFocusGuard!=="true"&&(je(E,D)||(g.current?z(n.current,O(c.current,{[H.Forwards]:()=>C.Next,[H.Backwards]:()=>C.Previous})|C.WrapAround,{relativeTo:x.target}):x.target instanceof HTMLElement&&M(x.target)))}};return m.createElement(m.Fragment,null,!!(o&4)&&m.createElement(ae,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:d,features:J.Focusable}),S({ourProps:$,theirProps:i,defaultTag:Dt,name:"FocusTrap"}),!!(o&4)&&m.createElement(ae,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:d,features:J.Focusable}))}let Ct=T(Ft),j=Object.assign(Ct,{features:ke});function Nt(e=!0){let t=s.useRef(F.slice());return me(([n],[r])=>{r===!0&&n===!1&&fe(()=>{t.current.splice(0)}),r===!1&&n===!0&&(t.current=F.slice())},[e,F,t]),w(()=>{var n;return(n=t.current.find(r=>r!=null&&r.isConnected))!=null?n:null})}function Mt({ownerDocument:e},t){let n=Nt(t);me(()=>{t||(e==null?void 0:e.activeElement)===(e==null?void 0:e.body)&&M(n())},[t]),Ae(()=>{t&&M(n())})}function Rt({ownerDocument:e,container:t,initialFocus:n},r){let l=s.useRef(null),a=Se();return me(()=>{if(!r)return;let o=t.current;o&&fe(()=>{if(!a.current)return;let i=e==null?void 0:e.activeElement;if(n!=null&&n.current){if((n==null?void 0:n.current)===i){l.current=i;return}}else if(o.contains(i)){l.current=i;return}n!=null&&n.current?M(n.current):z(o,C.First)===De.Error&&console.warn("There are no focusable elements inside the <FocusTrap />"),l.current=e==null?void 0:e.activeElement})},[r]),l}function At({ownerDocument:e,container:t,containers:n,previousActiveElement:r},l){let a=Se();Re(e==null?void 0:e.defaultView,"focus",o=>{if(!l||!a.current)return;let i=Oe(n);t.current instanceof HTMLElement&&i.add(t.current);let u=r.current;if(!u)return;let f=o.target;f&&f instanceof HTMLElement?je(i,f)?(r.current=f,M(f)):(o.preventDefault(),o.stopPropagation(),M(u)):M(r.current)},!0)}function je(e,t){for(let n of e)if(n.contains(t))return!0;return!1}let Ie=s.createContext(!1);function Ot(){return s.useContext(Ie)}function ie(e){return m.createElement(Ie.Provider,{value:e.force},e.children)}function kt(e){let t=Ot(),n=s.useContext(He),r=U(e),[l,a]=s.useState(()=>{if(!t&&n!==null||B.isServer)return null;let o=r==null?void 0:r.getElementById("headlessui-portal-root");if(o)return o;if(r===null)return null;let i=r.createElement("div");return i.setAttribute("id","headlessui-portal-root"),r.body.appendChild(i)});return s.useEffect(()=>{l!==null&&(r!=null&&r.body.contains(l)||r==null||r.body.appendChild(l))},[l,r]),s.useEffect(()=>{t||n!==null&&a(n.current)},[n,a,t]),l}let jt=s.Fragment;function It(e,t){let n=e,r=s.useRef(null),l=L(ut(c=>{r.current=c}),t),a=U(r),o=kt(r),[i]=s.useState(()=>{var c;return B.isServer?null:(c=a==null?void 0:a.createElement("div"))!=null?c:null}),u=s.useContext(ue),f=Z();return R(()=>{!o||!i||o.contains(i)||(i.setAttribute("data-headlessui-portal",""),o.appendChild(i))},[o,i]),R(()=>{if(i&&u)return u.register(i)},[u,i]),Ae(()=>{var c;!o||!i||(i instanceof Node&&o.contains(i)&&o.removeChild(i),o.childNodes.length<=0&&((c=o.parentElement)==null||c.removeChild(o)))}),f?!o||!i?null:rt.createPortal(S({ourProps:{ref:l},theirProps:n,defaultTag:jt,name:"Portal"}),i):null}let Ht=s.Fragment,He=s.createContext(null);function Bt(e,t){let{target:n,...r}=e,l={ref:L(t)};return m.createElement(He.Provider,{value:n},S({ourProps:l,theirProps:r,defaultTag:Ht,name:"Popover.Group"}))}let ue=s.createContext(null);function Ut(){let e=s.useContext(ue),t=s.useRef([]),n=w(a=>(t.current.push(a),e&&e.register(a),()=>r(a))),r=w(a=>{let o=t.current.indexOf(a);o!==-1&&t.current.splice(o,1),e&&e.unregister(a)}),l=s.useMemo(()=>({register:n,unregister:r,portals:t}),[n,r,t]);return[t,s.useMemo(()=>function({children:a}){return m.createElement(ue.Provider,{value:l},a)},[l])]}let Wt=T(It),_t=T(Bt),se=Object.assign(Wt,{Group:_t});function Yt(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}const Vt=typeof Object.is=="function"?Object.is:Yt,{useState:qt,useEffect:Gt,useLayoutEffect:Kt,useDebugValue:Xt}=oe;function zt(e,t,n){const r=t(),[{inst:l},a]=qt({inst:{value:r,getSnapshot:t}});return Kt(()=>{l.value=r,l.getSnapshot=t,ne(l)&&a({inst:l})},[e,r,t]),Gt(()=>(ne(l)&&a({inst:l}),e(()=>{ne(l)&&a({inst:l})})),[e]),Xt(r),r}function ne(e){const t=e.getSnapshot,n=e.value;try{const r=t();return!Vt(n,r)}catch{return!0}}function Jt(e,t,n){return t()}const Qt=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Zt=!Qt,en=Zt?Jt:zt,tn="useSyncExternalStore"in oe?(e=>e.useSyncExternalStore)(oe):en;function nn(e){return tn(e.subscribe,e.getSnapshot,e.getSnapshot)}function rn(e,t){let n=e(),r=new Set;return{getSnapshot(){return n},subscribe(l){return r.add(l),()=>r.delete(l)},dispatch(l,...a){let o=t[l].call(n,...a);o&&(n=o,r.forEach(i=>i()))}}}function on(){let e;return{before({doc:t}){var n;let r=t.documentElement;e=((n=t.defaultView)!=null?n:window).innerWidth-r.clientWidth},after({doc:t,d:n}){let r=t.documentElement,l=r.clientWidth-r.offsetWidth,a=e-l;n.style(r,"paddingRight",`${a}px`)}}}function ln(){return Ce()?{before({doc:e,d:t,meta:n}){function r(l){return n.containers.flatMap(a=>a()).some(a=>a.contains(l))}t.microTask(()=>{var l;if(window.getComputedStyle(e.documentElement).scrollBehavior!=="auto"){let i=Pe();i.style(e.documentElement,"scrollBehavior","auto"),t.add(()=>t.microTask(()=>i.dispose()))}let a=(l=window.scrollY)!=null?l:window.pageYOffset,o=null;t.addEventListener(e,"click",i=>{if(i.target instanceof HTMLElement)try{let u=i.target.closest("a");if(!u)return;let{hash:f}=new URL(u.href),c=e.querySelector(f);c&&!r(c)&&(o=c)}catch{}},!0),t.addEventListener(e,"touchstart",i=>{if(i.target instanceof HTMLElement)if(r(i.target)){let u=i.target;for(;u.parentElement&&r(u.parentElement);)u=u.parentElement;t.style(u,"overscrollBehavior","contain")}else t.style(i.target,"touchAction","none")}),t.addEventListener(e,"touchmove",i=>{if(i.target instanceof HTMLElement)if(r(i.target)){let u=i.target;for(;u.parentElement&&u.dataset.headlessuiPortal!==""&&!(u.scrollHeight>u.clientHeight||u.scrollWidth>u.clientWidth);)u=u.parentElement;u.dataset.headlessuiPortal===""&&i.preventDefault()}else i.preventDefault()},{passive:!1}),t.add(()=>{var i;let u=(i=window.scrollY)!=null?i:window.pageYOffset;a!==u&&window.scrollTo(0,a),o&&o.isConnected&&(o.scrollIntoView({block:"nearest"}),o=null)})})}}:{}}function an(){return{before({doc:e,d:t}){t.style(e.documentElement,"overflow","hidden")}}}function un(e){let t={};for(let n of e)Object.assign(t,n(t));return t}let N=rn(()=>new Map,{PUSH(e,t){var n;let r=(n=this.get(e))!=null?n:{doc:e,count:0,d:Pe(),meta:new Set};return r.count++,r.meta.add(t),this.set(e,r),this},POP(e,t){let n=this.get(e);return n&&(n.count--,n.meta.delete(t)),this},SCROLL_PREVENT({doc:e,d:t,meta:n}){let r={doc:e,d:t,meta:un(n)},l=[ln(),on(),an()];l.forEach(({before:a})=>a==null?void 0:a(r)),l.forEach(({after:a})=>a==null?void 0:a(r))},SCROLL_ALLOW({d:e}){e.dispose()},TEARDOWN({doc:e}){this.delete(e)}});N.subscribe(()=>{let e=N.getSnapshot(),t=new Map;for(let[n]of e)t.set(n,n.documentElement.style.overflow);for(let n of e.values()){let r=t.get(n.doc)==="hidden",l=n.count!==0;(l&&!r||!l&&r)&&N.dispatch(n.count>0?"SCROLL_PREVENT":"SCROLL_ALLOW",n),n.count===0&&N.dispatch("TEARDOWN",n)}});function sn(e,t,n){let r=nn(N),l=e?r.get(e):void 0,a=l?l.count>0:!1;return R(()=>{if(!(!e||!t))return N.dispatch("PUSH",e,n),()=>N.dispatch("POP",e,n)},[t,e]),a}let re=new Map,I=new Map;function xe(e,t=!0){R(()=>{var n;if(!t)return;let r=typeof e=="function"?e():e.current;if(!r)return;function l(){var o;if(!r)return;let i=(o=I.get(r))!=null?o:1;if(i===1?I.delete(r):I.set(r,i-1),i!==1)return;let u=re.get(r);u&&(u["aria-hidden"]===null?r.removeAttribute("aria-hidden"):r.setAttribute("aria-hidden",u["aria-hidden"]),r.inert=u.inert,re.delete(r))}let a=(n=I.get(r))!=null?n:0;return I.set(r,a+1),a!==0||(re.set(r,{"aria-hidden":r.getAttribute("aria-hidden"),inert:r.inert}),r.setAttribute("aria-hidden","true"),r.inert=!0),l},[e,t])}function cn({defaultContainers:e=[],portals:t,mainTreeNodeRef:n}={}){var r;let l=s.useRef((r=n==null?void 0:n.current)!=null?r:null),a=U(l),o=w(()=>{var i,u,f;let c=[];for(let d of e)d!==null&&(d instanceof HTMLElement?c.push(d):"current"in d&&d.current instanceof HTMLElement&&c.push(d.current));if(t!=null&&t.current)for(let d of t.current)c.push(d);for(let d of(i=a==null?void 0:a.querySelectorAll("html > *, body > *"))!=null?i:[])d!==document.body&&d!==document.head&&d instanceof HTMLElement&&d.id!=="headlessui-portal-root"&&(d.contains(l.current)||d.contains((f=(u=l.current)==null?void 0:u.getRootNode())==null?void 0:f.host)||c.some(h=>d.contains(h))||c.push(d));return c});return{resolveContainers:o,contains:w(i=>o().some(u=>u.contains(i))),mainTreeNodeRef:l,MainTreeNode:s.useMemo(()=>function(){return n!=null?null:m.createElement(ae,{features:J.Hidden,ref:l})},[l,n])}}let pe=s.createContext(()=>{});pe.displayName="StackContext";var ce=(e=>(e[e.Add=0]="Add",e[e.Remove=1]="Remove",e))(ce||{});function dn(){return s.useContext(pe)}function fn({children:e,onUpdate:t,type:n,element:r,enabled:l}){let a=dn(),o=w((...i)=>{t==null||t(...i),a(...i)});return R(()=>{let i=l===void 0||l===!0;return i&&o(0,n,r),()=>{i&&o(1,n,r)}},[o,n,r,l]),m.createElement(pe.Provider,{value:o},e)}let Be=s.createContext(null);function Ue(){let e=s.useContext(Be);if(e===null){let t=new Error("You used a <Description /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(t,Ue),t}return e}function mn(){let[e,t]=s.useState([]);return[e.length>0?e.join(" "):void 0,s.useMemo(()=>function(n){let r=w(a=>(t(o=>[...o,a]),()=>t(o=>{let i=o.slice(),u=i.indexOf(a);return u!==-1&&i.splice(u,1),i}))),l=s.useMemo(()=>({register:r,slot:n.slot,name:n.name,props:n.props}),[r,n.slot,n.name,n.props]);return m.createElement(Be.Provider,{value:l},n.children)},[t])]}let pn="p";function vn(e,t){let n=k(),{id:r=`headlessui-description-${n}`,...l}=e,a=Ue(),o=L(t);R(()=>a.register(r),[r,a.register]);let i={ref:o,...a.props,id:r};return S({ourProps:i,theirProps:l,slot:a.slot||{},defaultTag:pn,name:a.name||"Description"})}let gn=T(vn),hn=Object.assign(gn,{});var wn=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(wn||{}),En=(e=>(e[e.SetTitleId=0]="SetTitleId",e))(En||{});let yn={0(e,t){return e.titleId===t.id?e:{...e,titleId:t.id}}},Q=s.createContext(null);Q.displayName="DialogContext";function W(e){let t=s.useContext(Q);if(t===null){let n=new Error(`<${e} /> is missing a parent <Dialog /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,W),n}return t}function bn(e,t,n=()=>[document.body]){sn(e,t,r=>{var l;return{containers:[...(l=r.containers)!=null?l:[],n]}})}function xn(e,t){return O(t.type,yn,e,t)}let $n="div",Tn=ye.RenderStrategy|ye.Static;function Sn(e,t){let n=k(),{id:r=`headlessui-dialog-${n}`,open:l,onClose:a,initialFocus:o,role:i="dialog",__demoMode:u=!1,...f}=e,[c,d]=s.useState(0),h=s.useRef(!1);i=function(){return i==="dialog"||i==="alertdialog"?i:(h.current||(h.current=!0,console.warn(`Invalid role [${i}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`)),"dialog")}();let g=st();l===void 0&&g!==null&&(l=(g&K.Open)===K.Open);let $=s.useRef(null),x=L($,t),E=U($),D=e.hasOwnProperty("open")||g!==null,ve=e.hasOwnProperty("onClose");if(!D&&!ve)throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");if(!D)throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");if(!ve)throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");if(typeof l!="boolean")throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${l}`);if(typeof a!="function")throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${a}`);let y=l?0:1,[_,We]=s.useReducer(xn,{titleId:null,descriptionId:null,panelRef:s.createRef()}),A=w(()=>a(!1)),ge=w(v=>We({type:0,id:v})),Y=Z()?u?!1:y===0:!1,V=c>1,he=s.useContext(Q)!==null,[_e,Ye]=Ut(),Ve={get current(){var v;return(v=_.panelRef.current)!=null?v:$.current}},{resolveContainers:ee,mainTreeNodeRef:q,MainTreeNode:qe}=cn({portals:_e,defaultContainers:[Ve]}),Ge=V?"parent":"leaf",we=g!==null?(g&K.Closing)===K.Closing:!1,Ke=he||we?!1:Y,Xe=s.useCallback(()=>{var v,P;return(P=Array.from((v=E==null?void 0:E.querySelectorAll("body > *"))!=null?v:[]).find(b=>b.id==="headlessui-portal-root"?!1:b.contains(q.current)&&b instanceof HTMLElement))!=null?P:null},[q]);xe(Xe,Ke);let ze=V?!0:Y,Je=s.useCallback(()=>{var v,P;return(P=Array.from((v=E==null?void 0:E.querySelectorAll("[data-headlessui-portal]"))!=null?v:[]).find(b=>b.contains(q.current)&&b instanceof HTMLElement))!=null?P:null},[q]);xe(Je,ze),bt(ee,v=>{v.preventDefault(),A()},!(!Y||V));let Qe=!(V||y!==0);Re(E==null?void 0:E.defaultView,"keydown",v=>{Qe&&(v.defaultPrevented||v.key===Me.Escape&&(v.preventDefault(),v.stopPropagation(),A()))}),bn(E,!(we||y!==0||he),ee),s.useEffect(()=>{if(y!==0||!$.current)return;let v=new ResizeObserver(P=>{for(let b of P){let G=b.target.getBoundingClientRect();G.x===0&&G.y===0&&G.width===0&&G.height===0&&A()}});return v.observe($.current),()=>v.disconnect()},[y,$,A]);let[Ze,et]=mn(),tt=s.useMemo(()=>[{dialogState:y,close:A,setTitleId:ge},_],[y,_,A,ge]),Ee=s.useMemo(()=>({open:y===0}),[y]),nt={ref:x,id:r,role:i,"aria-modal":y===0?!0:void 0,"aria-labelledby":_.titleId,"aria-describedby":Ze};return m.createElement(fn,{type:"Dialog",enabled:y===0,element:$,onUpdate:w((v,P)=>{P==="Dialog"&&O(v,{[ce.Add]:()=>d(b=>b+1),[ce.Remove]:()=>d(b=>b-1)})})},m.createElement(ie,{force:!0},m.createElement(se,null,m.createElement(Q.Provider,{value:tt},m.createElement(se.Group,{target:$},m.createElement(ie,{force:!1},m.createElement(et,{slot:Ee,name:"Dialog.Description"},m.createElement(j,{initialFocus:o,containers:ee,features:Y?O(Ge,{parent:j.features.RestoreFocus,leaf:j.features.All&~j.features.FocusLock}):j.features.None},m.createElement(Ye,null,S({ourProps:nt,theirProps:f,slot:Ee,defaultTag:$n,features:Tn,visible:y===0,name:"Dialog"}))))))))),m.createElement(qe,null))}let Pn="div";function Ln(e,t){let n=k(),{id:r=`headlessui-dialog-overlay-${n}`,...l}=e,[{dialogState:a,close:o}]=W("Dialog.Overlay"),i=L(t),u=w(c=>{if(c.target===c.currentTarget){if(St(c.currentTarget))return c.preventDefault();c.preventDefault(),c.stopPropagation(),o()}}),f=s.useMemo(()=>({open:a===0}),[a]);return S({ourProps:{ref:i,id:r,"aria-hidden":!0,onClick:u},theirProps:l,slot:f,defaultTag:Pn,name:"Dialog.Overlay"})}let Dn="div";function Fn(e,t){let n=k(),{id:r=`headlessui-dialog-backdrop-${n}`,...l}=e,[{dialogState:a},o]=W("Dialog.Backdrop"),i=L(t);s.useEffect(()=>{if(o.panelRef.current===null)throw new Error("A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing.")},[o.panelRef]);let u=s.useMemo(()=>({open:a===0}),[a]);return m.createElement(ie,{force:!0},m.createElement(se,null,S({ourProps:{ref:i,id:r,"aria-hidden":!0},theirProps:l,slot:u,defaultTag:Dn,name:"Dialog.Backdrop"})))}let Cn="div";function Nn(e,t){let n=k(),{id:r=`headlessui-dialog-panel-${n}`,...l}=e,[{dialogState:a},o]=W("Dialog.Panel"),i=L(t,o.panelRef),u=s.useMemo(()=>({open:a===0}),[a]),f=w(c=>{c.stopPropagation()});return S({ourProps:{ref:i,id:r,onClick:f},theirProps:l,slot:u,defaultTag:Cn,name:"Dialog.Panel"})}let Mn="h2";function Rn(e,t){let n=k(),{id:r=`headlessui-dialog-title-${n}`,...l}=e,[{dialogState:a,setTitleId:o}]=W("Dialog.Title"),i=L(t);s.useEffect(()=>(o(r),()=>o(null)),[r,o]);let u=s.useMemo(()=>({open:a===0}),[a]);return S({ourProps:{ref:i,id:r},theirProps:l,slot:u,defaultTag:Mn,name:"Dialog.Title"})}let An=T(Sn),On=T(Fn),kn=T(Nn),jn=T(Ln),In=T(Rn),$e=Object.assign(An,{Backdrop:On,Panel:kn,Overlay:jn,Title:In,Description:hn});function Te({className:e="",disabled:t,children:n,...r}){return p.jsx("button",{...r,className:`inline-flex items-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-500 active:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition ease-in-out duration-150 ${t&&"opacity-25"} `+e,disabled:t,children:n})}function Hn({children:e,show:t=!1,maxWidth:n="2xl",closeable:r=!0,onClose:l=()=>{}}){const a=()=>{r&&l()},o={sm:"sm:max-w-sm",md:"sm:max-w-md",lg:"sm:max-w-lg",xl:"sm:max-w-xl","2xl":"sm:max-w-2xl"}[n];return p.jsx(te,{show:t,as:s.Fragment,leave:"duration-200",children:p.jsxs($e,{as:"div",id:"modal",className:"fixed inset-0 flex overflow-y-auto px-4 py-6 sm:px-0 items-center z-50 transform transition-all",onClose:a,children:[p.jsx(te.Child,{as:s.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:p.jsx("div",{className:"absolute inset-0 bg-gray-500/75"})}),p.jsx(te.Child,{as:s.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",enterTo:"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 translate-y-0 sm:scale-100",leaveTo:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",children:p.jsx($e.Panel,{className:`mb-6 bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:w-full sm:mx-auto ${o}`,children:e})})]})})}function Kn({className:e=""}){const[t,n]=s.useState(!1),r=s.useRef(),{data:l,setData:a,delete:o,processing:i,reset:u,errors:f}=ot({password:""}),c=()=>{n(!0)},d=g=>{g.preventDefault(),o(route("profile.destroy"),{preserveScroll:!0,onSuccess:()=>h(),onError:()=>r.current.focus(),onFinish:()=>u()})},h=()=>{n(!1),u()};return p.jsxs("section",{className:`space-y-6 ${e}`,children:[p.jsxs("header",{children:[p.jsx("h2",{className:"text-lg font-medium text-gray-900",children:"Delete Account"}),p.jsx("p",{className:"mt-1 text-sm text-gray-600",children:"Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting your account, please download any data or information that you wish to retain."})]}),p.jsx(Te,{onClick:c,children:"Delete Account"}),p.jsx(Hn,{show:t,onClose:h,children:p.jsxs("form",{onSubmit:d,className:"p-6",children:[p.jsx("h2",{className:"text-lg font-medium text-gray-900",children:"Are you sure you want to delete your account?"}),p.jsx("p",{className:"mt-1 text-sm text-gray-600",children:"Once your account is deleted, all of its resources and data will be permanently deleted. Please enter your password to confirm you would like to permanently delete your account."}),p.jsxs("div",{className:"mt-6",children:[p.jsx(at,{htmlFor:"password",value:"Password",className:"sr-only"}),p.jsx(dt,{id:"password",type:"password",name:"password",ref:r,value:l.password,onChange:g=>a("password",g.target.value),className:"mt-1 block w-3/4",isFocused:!0,placeholder:"Password"}),p.jsx(lt,{message:f.password,className:"mt-2"})]}),p.jsxs("div",{className:"mt-6 flex justify-end",children:[p.jsx(ct,{onClick:h,children:"Cancel"}),p.jsx(Te,{className:"ms-3",disabled:i,children:"Delete Account"})]})]})})]})}export{Kn as default};
