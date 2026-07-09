(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function $_(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var ch={exports:{}},Lo={};var z0;function Gy(){if(z0)return Lo;z0=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,c){var h=null;if(c!==void 0&&(h=""+c),l.key!==void 0&&(h=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:o,type:s,key:h,ref:l!==void 0?l:null,props:c}}return Lo.Fragment=t,Lo.jsx=i,Lo.jsxs=i,Lo}var I0;function Vy(){return I0||(I0=1,ch.exports=Gy()),ch.exports}var ae=Vy(),uh={exports:{}},re={};var B0;function ky(){if(B0)return re;B0=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),S=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),y=Symbol.iterator;function M(L){return L===null||typeof L!="object"?null:(L=y&&L[y]||L["@@iterator"],typeof L=="function"?L:null)}var T={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},A=Object.assign,x={};function g(L,nt,yt){this.props=L,this.context=nt,this.refs=x,this.updater=yt||T}g.prototype.isReactComponent={},g.prototype.setState=function(L,nt){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,nt,"setState")},g.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function P(){}P.prototype=g.prototype;function N(L,nt,yt){this.props=L,this.context=nt,this.refs=x,this.updater=yt||T}var D=N.prototype=new P;D.constructor=N,A(D,g.prototype),D.isPureReactComponent=!0;var G=Array.isArray;function F(){}var z={H:null,A:null,T:null,S:null},W=Object.prototype.hasOwnProperty;function w(L,nt,yt){var bt=yt.ref;return{$$typeof:o,type:L,key:nt,ref:bt!==void 0?bt:null,props:yt}}function R(L,nt){return w(L.type,nt,L.props)}function V(L){return typeof L=="object"&&L!==null&&L.$$typeof===o}function K(L){var nt={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function(yt){return nt[yt]})}var rt=/\/+/g;function ht(L,nt){return typeof L=="object"&&L!==null&&L.key!=null?K(""+L.key):nt.toString(36)}function lt(L){switch(L.status){case"fulfilled":return L.value;case"rejected":throw L.reason;default:switch(typeof L.status=="string"?L.then(F,F):(L.status="pending",L.then(function(nt){L.status==="pending"&&(L.status="fulfilled",L.value=nt)},function(nt){L.status==="pending"&&(L.status="rejected",L.reason=nt)})),L.status){case"fulfilled":return L.value;case"rejected":throw L.reason}}throw L}function O(L,nt,yt,bt,Nt){var it=typeof L;(it==="undefined"||it==="boolean")&&(L=null);var ct=!1;if(L===null)ct=!0;else switch(it){case"bigint":case"string":case"number":ct=!0;break;case"object":switch(L.$$typeof){case o:case t:ct=!0;break;case S:return ct=L._init,O(ct(L._payload),nt,yt,bt,Nt)}}if(ct)return Nt=Nt(L),ct=bt===""?"."+ht(L,0):bt,G(Nt)?(yt="",ct!=null&&(yt=ct.replace(rt,"$&/")+"/"),O(Nt,nt,yt,"",function(kt){return kt})):Nt!=null&&(V(Nt)&&(Nt=R(Nt,yt+(Nt.key==null||L&&L.key===Nt.key?"":(""+Nt.key).replace(rt,"$&/")+"/")+ct)),nt.push(Nt)),1;ct=0;var wt=bt===""?".":bt+":";if(G(L))for(var It=0;It<L.length;It++)bt=L[It],it=wt+ht(bt,It),ct+=O(bt,nt,yt,it,Nt);else if(It=M(L),typeof It=="function")for(L=It.call(L),It=0;!(bt=L.next()).done;)bt=bt.value,it=wt+ht(bt,It++),ct+=O(bt,nt,yt,it,Nt);else if(it==="object"){if(typeof L.then=="function")return O(lt(L),nt,yt,bt,Nt);throw nt=String(L),Error("Objects are not valid as a React child (found: "+(nt==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":nt)+"). If you meant to render a collection of children, use an array instead.")}return ct}function Q(L,nt,yt){if(L==null)return L;var bt=[],Nt=0;return O(L,bt,"","",function(it){return nt.call(yt,it,Nt++)}),bt}function j(L){if(L._status===-1){var nt=L._result;nt=nt(),nt.then(function(yt){(L._status===0||L._status===-1)&&(L._status=1,L._result=yt)},function(yt){(L._status===0||L._status===-1)&&(L._status=2,L._result=yt)}),L._status===-1&&(L._status=0,L._result=nt)}if(L._status===1)return L._result.default;throw L._result}var vt=typeof reportError=="function"?reportError:function(L){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var nt=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof L=="object"&&L!==null&&typeof L.message=="string"?String(L.message):String(L),error:L});if(!window.dispatchEvent(nt))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",L);return}console.error(L)},Mt={map:Q,forEach:function(L,nt,yt){Q(L,function(){nt.apply(this,arguments)},yt)},count:function(L){var nt=0;return Q(L,function(){nt++}),nt},toArray:function(L){return Q(L,function(nt){return nt})||[]},only:function(L){if(!V(L))throw Error("React.Children.only expected to receive a single React element child.");return L}};return re.Activity=_,re.Children=Mt,re.Component=g,re.Fragment=i,re.Profiler=l,re.PureComponent=N,re.StrictMode=s,re.Suspense=m,re.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=z,re.__COMPILER_RUNTIME={__proto__:null,c:function(L){return z.H.useMemoCache(L)}},re.cache=function(L){return function(){return L.apply(null,arguments)}},re.cacheSignal=function(){return null},re.cloneElement=function(L,nt,yt){if(L==null)throw Error("The argument must be a React element, but you passed "+L+".");var bt=A({},L.props),Nt=L.key;if(nt!=null)for(it in nt.key!==void 0&&(Nt=""+nt.key),nt)!W.call(nt,it)||it==="key"||it==="__self"||it==="__source"||it==="ref"&&nt.ref===void 0||(bt[it]=nt[it]);var it=arguments.length-2;if(it===1)bt.children=yt;else if(1<it){for(var ct=Array(it),wt=0;wt<it;wt++)ct[wt]=arguments[wt+2];bt.children=ct}return w(L.type,Nt,bt)},re.createContext=function(L){return L={$$typeof:h,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null},L.Provider=L,L.Consumer={$$typeof:c,_context:L},L},re.createElement=function(L,nt,yt){var bt,Nt={},it=null;if(nt!=null)for(bt in nt.key!==void 0&&(it=""+nt.key),nt)W.call(nt,bt)&&bt!=="key"&&bt!=="__self"&&bt!=="__source"&&(Nt[bt]=nt[bt]);var ct=arguments.length-2;if(ct===1)Nt.children=yt;else if(1<ct){for(var wt=Array(ct),It=0;It<ct;It++)wt[It]=arguments[It+2];Nt.children=wt}if(L&&L.defaultProps)for(bt in ct=L.defaultProps,ct)Nt[bt]===void 0&&(Nt[bt]=ct[bt]);return w(L,it,Nt)},re.createRef=function(){return{current:null}},re.forwardRef=function(L){return{$$typeof:d,render:L}},re.isValidElement=V,re.lazy=function(L){return{$$typeof:S,_payload:{_status:-1,_result:L},_init:j}},re.memo=function(L,nt){return{$$typeof:p,type:L,compare:nt===void 0?null:nt}},re.startTransition=function(L){var nt=z.T,yt={};z.T=yt;try{var bt=L(),Nt=z.S;Nt!==null&&Nt(yt,bt),typeof bt=="object"&&bt!==null&&typeof bt.then=="function"&&bt.then(F,vt)}catch(it){vt(it)}finally{nt!==null&&yt.types!==null&&(nt.types=yt.types),z.T=nt}},re.unstable_useCacheRefresh=function(){return z.H.useCacheRefresh()},re.use=function(L){return z.H.use(L)},re.useActionState=function(L,nt,yt){return z.H.useActionState(L,nt,yt)},re.useCallback=function(L,nt){return z.H.useCallback(L,nt)},re.useContext=function(L){return z.H.useContext(L)},re.useDebugValue=function(){},re.useDeferredValue=function(L,nt){return z.H.useDeferredValue(L,nt)},re.useEffect=function(L,nt){return z.H.useEffect(L,nt)},re.useEffectEvent=function(L){return z.H.useEffectEvent(L)},re.useId=function(){return z.H.useId()},re.useImperativeHandle=function(L,nt,yt){return z.H.useImperativeHandle(L,nt,yt)},re.useInsertionEffect=function(L,nt){return z.H.useInsertionEffect(L,nt)},re.useLayoutEffect=function(L,nt){return z.H.useLayoutEffect(L,nt)},re.useMemo=function(L,nt){return z.H.useMemo(L,nt)},re.useOptimistic=function(L,nt){return z.H.useOptimistic(L,nt)},re.useReducer=function(L,nt,yt){return z.H.useReducer(L,nt,yt)},re.useRef=function(L){return z.H.useRef(L)},re.useState=function(L){return z.H.useState(L)},re.useSyncExternalStore=function(L,nt,yt){return z.H.useSyncExternalStore(L,nt,yt)},re.useTransition=function(){return z.H.useTransition()},re.version="19.2.7",re}var F0;function Hd(){return F0||(F0=1,uh.exports=ky()),uh.exports}var ko=Hd();const Xy=$_(ko);var fh={exports:{}},No={},hh={exports:{}},dh={};var H0;function Wy(){return H0||(H0=1,(function(o){function t(O,Q){var j=O.length;O.push(Q);t:for(;0<j;){var vt=j-1>>>1,Mt=O[vt];if(0<l(Mt,Q))O[vt]=Q,O[j]=Mt,j=vt;else break t}}function i(O){return O.length===0?null:O[0]}function s(O){if(O.length===0)return null;var Q=O[0],j=O.pop();if(j!==Q){O[0]=j;t:for(var vt=0,Mt=O.length,L=Mt>>>1;vt<L;){var nt=2*(vt+1)-1,yt=O[nt],bt=nt+1,Nt=O[bt];if(0>l(yt,j))bt<Mt&&0>l(Nt,yt)?(O[vt]=Nt,O[bt]=j,vt=bt):(O[vt]=yt,O[nt]=j,vt=nt);else if(bt<Mt&&0>l(Nt,j))O[vt]=Nt,O[bt]=j,vt=bt;else break t}}return Q}function l(O,Q){var j=O.sortIndex-Q.sortIndex;return j!==0?j:O.id-Q.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;o.unstable_now=function(){return c.now()}}else{var h=Date,d=h.now();o.unstable_now=function(){return h.now()-d}}var m=[],p=[],S=1,_=null,y=3,M=!1,T=!1,A=!1,x=!1,g=typeof setTimeout=="function"?setTimeout:null,P=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;function D(O){for(var Q=i(p);Q!==null;){if(Q.callback===null)s(p);else if(Q.startTime<=O)s(p),Q.sortIndex=Q.expirationTime,t(m,Q);else break;Q=i(p)}}function G(O){if(A=!1,D(O),!T)if(i(m)!==null)T=!0,F||(F=!0,K());else{var Q=i(p);Q!==null&&lt(G,Q.startTime-O)}}var F=!1,z=-1,W=5,w=-1;function R(){return x?!0:!(o.unstable_now()-w<W)}function V(){if(x=!1,F){var O=o.unstable_now();w=O;var Q=!0;try{t:{T=!1,A&&(A=!1,P(z),z=-1),M=!0;var j=y;try{e:{for(D(O),_=i(m);_!==null&&!(_.expirationTime>O&&R());){var vt=_.callback;if(typeof vt=="function"){_.callback=null,y=_.priorityLevel;var Mt=vt(_.expirationTime<=O);if(O=o.unstable_now(),typeof Mt=="function"){_.callback=Mt,D(O),Q=!0;break e}_===i(m)&&s(m),D(O)}else s(m);_=i(m)}if(_!==null)Q=!0;else{var L=i(p);L!==null&&lt(G,L.startTime-O),Q=!1}}break t}finally{_=null,y=j,M=!1}Q=void 0}}finally{Q?K():F=!1}}}var K;if(typeof N=="function")K=function(){N(V)};else if(typeof MessageChannel<"u"){var rt=new MessageChannel,ht=rt.port2;rt.port1.onmessage=V,K=function(){ht.postMessage(null)}}else K=function(){g(V,0)};function lt(O,Q){z=g(function(){O(o.unstable_now())},Q)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(O){O.callback=null},o.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<O?Math.floor(1e3/O):5},o.unstable_getCurrentPriorityLevel=function(){return y},o.unstable_next=function(O){switch(y){case 1:case 2:case 3:var Q=3;break;default:Q=y}var j=y;y=Q;try{return O()}finally{y=j}},o.unstable_requestPaint=function(){x=!0},o.unstable_runWithPriority=function(O,Q){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var j=y;y=O;try{return Q()}finally{y=j}},o.unstable_scheduleCallback=function(O,Q,j){var vt=o.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?vt+j:vt):j=vt,O){case 1:var Mt=-1;break;case 2:Mt=250;break;case 5:Mt=1073741823;break;case 4:Mt=1e4;break;default:Mt=5e3}return Mt=j+Mt,O={id:S++,callback:Q,priorityLevel:O,startTime:j,expirationTime:Mt,sortIndex:-1},j>vt?(O.sortIndex=j,t(p,O),i(m)===null&&O===i(p)&&(A?(P(z),z=-1):A=!0,lt(G,j-vt))):(O.sortIndex=Mt,t(m,O),T||M||(T=!0,F||(F=!0,K()))),O},o.unstable_shouldYield=R,o.unstable_wrapCallback=function(O){var Q=y;return function(){var j=y;y=Q;try{return O.apply(this,arguments)}finally{y=j}}}})(dh)),dh}var G0;function qy(){return G0||(G0=1,hh.exports=Wy()),hh.exports}var ph={exports:{}},Un={};var V0;function Yy(){if(V0)return Un;V0=1;var o=Hd();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var S=2;S<arguments.length;S++)p+="&args[]="+encodeURIComponent(arguments[S])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,S){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:_==null?null:""+_,children:m,containerInfo:p,implementation:S}}var h=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Un.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Un.createPortal=function(m,p){var S=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return c(m,p,null,S)},Un.flushSync=function(m){var p=h.T,S=s.p;try{if(h.T=null,s.p=2,m)return m()}finally{h.T=p,s.p=S,s.d.f()}},Un.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},Un.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},Un.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var S=p.as,_=d(S,p.crossOrigin),y=typeof p.integrity=="string"?p.integrity:void 0,M=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;S==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:_,integrity:y,fetchPriority:M}):S==="script"&&s.d.X(m,{crossOrigin:_,integrity:y,fetchPriority:M,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Un.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var S=d(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:S,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},Un.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var S=p.as,_=d(S,p.crossOrigin);s.d.L(m,S,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Un.preloadModule=function(m,p){if(typeof m=="string")if(p){var S=d(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:S,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},Un.requestFormReset=function(m){s.d.r(m)},Un.unstable_batchedUpdates=function(m,p){return m(p)},Un.useFormState=function(m,p,S){return h.H.useFormState(m,p,S)},Un.useFormStatus=function(){return h.H.useHostTransitionStatus()},Un.version="19.2.7",Un}var k0;function Zy(){if(k0)return ph.exports;k0=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),ph.exports=Yy(),ph.exports}var X0;function jy(){if(X0)return No;X0=1;var o=qy(),t=Hd(),i=Zy();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function h(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function d(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(c(e)!==e)throw Error(s(188))}function p(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,r=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(r=u.return,r!==null){a=r;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return m(u),e;if(f===r)return m(u),n;f=f.sibling}throw Error(s(188))}if(a.return!==r.return)a=u,r=f;else{for(var v=!1,b=u.child;b;){if(b===a){v=!0,a=u,r=f;break}if(b===r){v=!0,r=u,a=f;break}b=b.sibling}if(!v){for(b=f.child;b;){if(b===a){v=!0,a=f,r=u;break}if(b===r){v=!0,r=f,a=u;break}b=b.sibling}if(!v)throw Error(s(189))}}if(a.alternate!==r)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function S(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=S(e),n!==null)return n;e=e.sibling}return null}var _=Object.assign,y=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),T=Symbol.for("react.portal"),A=Symbol.for("react.fragment"),x=Symbol.for("react.strict_mode"),g=Symbol.for("react.profiler"),P=Symbol.for("react.consumer"),N=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),G=Symbol.for("react.suspense"),F=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),W=Symbol.for("react.lazy"),w=Symbol.for("react.activity"),R=Symbol.for("react.memo_cache_sentinel"),V=Symbol.iterator;function K(e){return e===null||typeof e!="object"?null:(e=V&&e[V]||e["@@iterator"],typeof e=="function"?e:null)}var rt=Symbol.for("react.client.reference");function ht(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===rt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case A:return"Fragment";case g:return"Profiler";case x:return"StrictMode";case G:return"Suspense";case F:return"SuspenseList";case w:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case T:return"Portal";case N:return e.displayName||"Context";case P:return(e._context.displayName||"Context")+".Consumer";case D:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case z:return n=e.displayName||null,n!==null?n:ht(e.type)||"Memo";case W:n=e._payload,e=e._init;try{return ht(e(n))}catch{}}return null}var lt=Array.isArray,O=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Q=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,j={pending:!1,data:null,method:null,action:null},vt=[],Mt=-1;function L(e){return{current:e}}function nt(e){0>Mt||(e.current=vt[Mt],vt[Mt]=null,Mt--)}function yt(e,n){Mt++,vt[Mt]=e.current,e.current=n}var bt=L(null),Nt=L(null),it=L(null),ct=L(null);function wt(e,n){switch(yt(it,n),yt(Nt,e),yt(bt,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?s0(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=s0(n),e=r0(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}nt(bt),yt(bt,e)}function It(){nt(bt),nt(Nt),nt(it)}function kt(e){e.memoizedState!==null&&yt(ct,e);var n=bt.current,a=r0(n,e.type);n!==a&&(yt(Nt,e),yt(bt,a))}function de(e){Nt.current===e&&(nt(bt),nt(Nt)),ct.current===e&&(nt(ct),Ro._currentValue=j)}var ln,H;function Ae(e){if(ln===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);ln=n&&n[1]||"",H=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ln+e+H}var ne=!1;function $t(e,n){if(!e||ne)return"";ne=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(n){var mt=function(){throw Error()};if(Object.defineProperty(mt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(mt,[])}catch(ot){var et=ot}Reflect.construct(e,[],mt)}else{try{mt.call()}catch(ot){et=ot}e.call(mt.prototype)}}else{try{throw Error()}catch(ot){et=ot}(mt=e())&&typeof mt.catch=="function"&&mt.catch(function(){})}}catch(ot){if(ot&&et&&typeof ot.stack=="string")return[ot.stack,et.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=r.DetermineComponentFrameRoot(),v=f[0],b=f[1];if(v&&b){var B=v.split(`
`),$=b.split(`
`);for(u=r=0;r<B.length&&!B[r].includes("DetermineComponentFrameRoot");)r++;for(;u<$.length&&!$[u].includes("DetermineComponentFrameRoot");)u++;if(r===B.length||u===$.length)for(r=B.length-1,u=$.length-1;1<=r&&0<=u&&B[r]!==$[u];)u--;for(;1<=r&&0<=u;r--,u--)if(B[r]!==$[u]){if(r!==1||u!==1)do if(r--,u--,0>u||B[r]!==$[u]){var ft=`
`+B[r].replace(" at new "," at ");return e.displayName&&ft.includes("<anonymous>")&&(ft=ft.replace("<anonymous>",e.displayName)),ft}while(1<=r&&0<=u);break}}}finally{ne=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Ae(a):""}function Xt(e,n){switch(e.tag){case 26:case 27:case 5:return Ae(e.type);case 16:return Ae("Lazy");case 13:return e.child!==n&&n!==null?Ae("Suspense Fallback"):Ae("Suspense");case 19:return Ae("SuspenseList");case 0:case 15:return $t(e.type,!1);case 11:return $t(e.type.render,!1);case 1:return $t(e.type,!0);case 31:return Ae("Activity");default:return""}}function Xe(e){try{var n="",a=null;do n+=Xt(e,a),a=e,e=e.return;while(e);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var Vt=Object.prototype.hasOwnProperty,se=o.unstable_scheduleCallback,tn=o.unstable_cancelCallback,$e=o.unstable_shouldYield,U=o.unstable_requestPaint,E=o.unstable_now,tt=o.unstable_getCurrentPriorityLevel,dt=o.unstable_ImmediatePriority,St=o.unstable_UserBlockingPriority,ut=o.unstable_NormalPriority,Zt=o.unstable_LowPriority,At=o.unstable_IdlePriority,qt=o.log,Yt=o.unstable_setDisableYieldValue,Et=null,Ct=null;function jt(e){if(typeof qt=="function"&&Yt(e),Ct&&typeof Ct.setStrictMode=="function")try{Ct.setStrictMode(Et,e)}catch{}}var Ot=Math.clz32?Math.clz32:X,Dt=Math.log,oe=Math.LN2;function X(e){return e>>>=0,e===0?32:31-(Dt(e)/oe|0)|0}var Tt=256,Rt=262144,zt=4194304;function xt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function gt(e,n,a){var r=e.pendingLanes;if(r===0)return 0;var u=0,f=e.suspendedLanes,v=e.pingedLanes;e=e.warmLanes;var b=r&134217727;return b!==0?(r=b&~f,r!==0?u=xt(r):(v&=b,v!==0?u=xt(v):a||(a=b&~e,a!==0&&(u=xt(a))))):(b=r&~f,b!==0?u=xt(b):v!==0?u=xt(v):a||(a=r&~e,a!==0&&(u=xt(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function Bt(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function ie(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Pe(){var e=zt;return zt<<=1,(zt&62914560)===0&&(zt=4194304),e}function Te(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Pn(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function li(e,n,a,r,u,f){var v=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var b=e.entanglements,B=e.expirationTimes,$=e.hiddenUpdates;for(a=v&~a;0<a;){var ft=31-Ot(a),mt=1<<ft;b[ft]=0,B[ft]=-1;var et=$[ft];if(et!==null)for($[ft]=null,ft=0;ft<et.length;ft++){var ot=et[ft];ot!==null&&(ot.lane&=-536870913)}a&=~mt}r!==0&&Gr(e,r,0),f!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=f&~(v&~n))}function Gr(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var r=31-Ot(n);e.entangledLanes|=n,e.entanglements[r]=e.entanglements[r]|1073741824|a&261930}function wi(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var r=31-Ot(a),u=1<<r;u&n|e[r]&n&&(e[r]|=n),a&=~u}}function Ds(e,n){var a=n&-n;return a=(a&42)!==0?1:Us(a),(a&(e.suspendedLanes|n))!==0?0:a}function Us(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Ls(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Ka(){var e=Q.p;return e!==0?e:(e=window.event,e===void 0?32:w0(e.type))}function Vr(e,n){var a=Q.p;try{return Q.p=e,n()}finally{Q.p=a}}var Kn=Math.random().toString(36).slice(2),cn="__reactFiber$"+Kn,Tn="__reactProps$"+Kn,pa="__reactContainer$"+Kn,kr="__reactEvents$"+Kn,nu="__reactListeners$"+Kn,iu="__reactHandles$"+Kn,il="__reactResources$"+Kn,Qa="__reactMarker$"+Kn;function C(e){delete e[cn],delete e[Tn],delete e[kr],delete e[nu],delete e[iu]}function q(e){var n=e[cn];if(n)return n;for(var a=e.parentNode;a;){if(n=a[pa]||a[cn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=d0(e);e!==null;){if(a=e[cn])return a;e=d0(e)}return n}e=a,a=e.parentNode}return null}function at(e){if(e=e[cn]||e[pa]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function st(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function Z(e){var n=e[il];return n||(n=e[il]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function _t(e){e[Qa]=!0}var Ut=new Set,Ht={};function Pt(e,n){Kt(e,n),Kt(e+"Capture",n)}function Kt(e,n){for(Ht[e]=n,e=0;e<n.length;e++)Ut.add(n[e])}var ee=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Qt={},pe={};function Le(e){return Vt.call(pe,e)?!0:Vt.call(Qt,e)?!1:ee.test(e)?pe[e]=!0:(Qt[e]=!0,!1)}function We(e,n,a){if(Le(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var r=n.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function Ne(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function me(e,n,a,r){if(r===null)e.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+r)}}function Gt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ye(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function be(e,n,a){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var u=r.get,f=r.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(v){a=""+v,f.call(this,v)}}),Object.defineProperty(e,n,{enumerable:r.enumerable}),{getValue:function(){return a},setValue:function(v){a=""+v},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function bn(e){if(!e._valueTracker){var n=Ye(e)?"checked":"value";e._valueTracker=be(e,n,""+e[n])}}function Gi(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),r="";return e&&(r=Ye(e)?e.checked?"true":"false":e.value),e=r,e!==a?(n.setValue(e),!0):!1}function yn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Ja=/[\n"\\]/g;function Se(e){return e.replace(Ja,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Dn(e,n,a,r,u,f,v,b){e.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?e.type=v:e.removeAttribute("type"),n!=null?v==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+Gt(n)):e.value!==""+Gt(n)&&(e.value=""+Gt(n)):v!=="submit"&&v!=="reset"||e.removeAttribute("value"),n!=null?mn(e,v,Gt(n)):a!=null?mn(e,v,Gt(a)):r!=null&&e.removeAttribute("value"),u==null&&f!=null&&(e.defaultChecked=!!f),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?e.name=""+Gt(b):e.removeAttribute("name")}function On(e,n,a,r,u,f,v,b){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){bn(e);return}a=a!=null?""+Gt(a):"",n=n!=null?""+Gt(n):a,b||n===e.value||(e.value=n),e.defaultValue=n}r=r??u,r=typeof r!="function"&&typeof r!="symbol"&&!!r,e.checked=b?e.checked:!!r,e.defaultChecked=!!r,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(e.name=v),bn(e)}function mn(e,n,a){n==="number"&&yn(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function sn(e,n,a,r){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&r&&(e[a].defaultSelected=!0)}else{for(a=""+Gt(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,r&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function Ns(e,n,a){if(n!=null&&(n=""+Gt(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+Gt(a):""}function Di(e,n,a,r){if(n==null){if(r!=null){if(a!=null)throw Error(s(92));if(lt(r)){if(1<r.length)throw Error(s(93));r=r[0]}a=r}a==null&&(a=""),n=a}a=Gt(n),e.defaultValue=a,r=e.textContent,r===a&&r!==""&&r!==null&&(e.value=r),bn(e)}function Ps(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var zv=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function np(e,n,a){var r=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?r?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":r?e.setProperty(n,a):typeof a!="number"||a===0||zv.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function ip(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var r in a)!a.hasOwnProperty(r)||n!=null&&n.hasOwnProperty(r)||(r.indexOf("--")===0?e.setProperty(r,""):r==="float"?e.cssFloat="":e[r]="");for(var u in n)r=n[u],n.hasOwnProperty(u)&&a[u]!==r&&np(e,u,r)}else for(var f in n)n.hasOwnProperty(f)&&np(e,f,n[f])}function au(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Iv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Bv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function al(e){return Bv.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Vi(){}var su=null;function ru(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Os=null,zs=null;function ap(e){var n=at(e);if(n&&(e=n.stateNode)){var a=e[Tn]||null;t:switch(e=n.stateNode,n.type){case"input":if(Dn(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Se(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var r=a[n];if(r!==e&&r.form===e.form){var u=r[Tn]||null;if(!u)throw Error(s(90));Dn(r,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)r=a[n],r.form===e.form&&Gi(r)}break t;case"textarea":Ns(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&sn(e,!!a.multiple,n,!1)}}}var ou=!1;function sp(e,n,a){if(ou)return e(n,a);ou=!0;try{var r=e(n);return r}finally{if(ou=!1,(Os!==null||zs!==null)&&(Wl(),Os&&(n=Os,e=zs,zs=Os=null,ap(n),e)))for(n=0;n<e.length;n++)ap(e[n])}}function Xr(e,n){var a=e.stateNode;if(a===null)return null;var r=a[Tn]||null;if(r===null)return null;a=r[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var ki=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),lu=!1;if(ki)try{var Wr={};Object.defineProperty(Wr,"passive",{get:function(){lu=!0}}),window.addEventListener("test",Wr,Wr),window.removeEventListener("test",Wr,Wr)}catch{lu=!1}var ma=null,cu=null,sl=null;function rp(){if(sl)return sl;var e,n=cu,a=n.length,r,u="value"in ma?ma.value:ma.textContent,f=u.length;for(e=0;e<a&&n[e]===u[e];e++);var v=a-e;for(r=1;r<=v&&n[a-r]===u[f-r];r++);return sl=u.slice(e,1<r?1-r:void 0)}function rl(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function ol(){return!0}function op(){return!1}function Vn(e){function n(a,r,u,f,v){this._reactName=a,this._targetInst=u,this.type=r,this.nativeEvent=f,this.target=v,this.currentTarget=null;for(var b in e)e.hasOwnProperty(b)&&(a=e[b],this[b]=a?a(f):f[b]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?ol:op,this.isPropagationStopped=op,this}return _(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ol)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ol)},persist:function(){},isPersistent:ol}),n}var $a={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ll=Vn($a),qr=_({},$a,{view:0,detail:0}),Fv=Vn(qr),uu,fu,Yr,cl=_({},qr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:du,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Yr&&(Yr&&e.type==="mousemove"?(uu=e.screenX-Yr.screenX,fu=e.screenY-Yr.screenY):fu=uu=0,Yr=e),uu)},movementY:function(e){return"movementY"in e?e.movementY:fu}}),lp=Vn(cl),Hv=_({},cl,{dataTransfer:0}),Gv=Vn(Hv),Vv=_({},qr,{relatedTarget:0}),hu=Vn(Vv),kv=_({},$a,{animationName:0,elapsedTime:0,pseudoElement:0}),Xv=Vn(kv),Wv=_({},$a,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),qv=Vn(Wv),Yv=_({},$a,{data:0}),cp=Vn(Yv),Zv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},jv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Kv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Qv(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Kv[e])?!!n[e]:!1}function du(){return Qv}var Jv=_({},qr,{key:function(e){if(e.key){var n=Zv[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=rl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?jv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:du,charCode:function(e){return e.type==="keypress"?rl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?rl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),$v=Vn(Jv),tS=_({},cl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),up=Vn(tS),eS=_({},qr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:du}),nS=Vn(eS),iS=_({},$a,{propertyName:0,elapsedTime:0,pseudoElement:0}),aS=Vn(iS),sS=_({},cl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),rS=Vn(sS),oS=_({},$a,{newState:0,oldState:0}),lS=Vn(oS),cS=[9,13,27,32],pu=ki&&"CompositionEvent"in window,Zr=null;ki&&"documentMode"in document&&(Zr=document.documentMode);var uS=ki&&"TextEvent"in window&&!Zr,fp=ki&&(!pu||Zr&&8<Zr&&11>=Zr),hp=" ",dp=!1;function pp(e,n){switch(e){case"keyup":return cS.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function mp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Is=!1;function fS(e,n){switch(e){case"compositionend":return mp(n);case"keypress":return n.which!==32?null:(dp=!0,hp);case"textInput":return e=n.data,e===hp&&dp?null:e;default:return null}}function hS(e,n){if(Is)return e==="compositionend"||!pu&&pp(e,n)?(e=rp(),sl=cu=ma=null,Is=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return fp&&n.locale!=="ko"?null:n.data;default:return null}}var dS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function gp(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!dS[e.type]:n==="textarea"}function _p(e,n,a,r){Os?zs?zs.push(r):zs=[r]:Os=r,n=Jl(n,"onChange"),0<n.length&&(a=new ll("onChange","change",null,a,r),e.push({event:a,listeners:n}))}var jr=null,Kr=null;function pS(e){$g(e,0)}function ul(e){var n=st(e);if(Gi(n))return e}function vp(e,n){if(e==="change")return n}var Sp=!1;if(ki){var mu;if(ki){var gu="oninput"in document;if(!gu){var yp=document.createElement("div");yp.setAttribute("oninput","return;"),gu=typeof yp.oninput=="function"}mu=gu}else mu=!1;Sp=mu&&(!document.documentMode||9<document.documentMode)}function xp(){jr&&(jr.detachEvent("onpropertychange",Mp),Kr=jr=null)}function Mp(e){if(e.propertyName==="value"&&ul(Kr)){var n=[];_p(n,Kr,e,ru(e)),sp(pS,n)}}function mS(e,n,a){e==="focusin"?(xp(),jr=n,Kr=a,jr.attachEvent("onpropertychange",Mp)):e==="focusout"&&xp()}function gS(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ul(Kr)}function _S(e,n){if(e==="click")return ul(n)}function vS(e,n){if(e==="input"||e==="change")return ul(n)}function SS(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Qn=typeof Object.is=="function"?Object.is:SS;function Qr(e,n){if(Qn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),r=Object.keys(n);if(a.length!==r.length)return!1;for(r=0;r<a.length;r++){var u=a[r];if(!Vt.call(n,u)||!Qn(e[u],n[u]))return!1}return!0}function Ep(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Tp(e,n){var a=Ep(e);e=0;for(var r;a;){if(a.nodeType===3){if(r=e+a.textContent.length,e<=n&&r>=n)return{node:a,offset:n-e};e=r}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Ep(a)}}function bp(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?bp(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Ap(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=yn(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=yn(e.document)}return n}function _u(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var yS=ki&&"documentMode"in document&&11>=document.documentMode,Bs=null,vu=null,Jr=null,Su=!1;function Cp(e,n,a){var r=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Su||Bs==null||Bs!==yn(r)||(r=Bs,"selectionStart"in r&&_u(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Jr&&Qr(Jr,r)||(Jr=r,r=Jl(vu,"onSelect"),0<r.length&&(n=new ll("onSelect","select",null,n,a),e.push({event:n,listeners:r}),n.target=Bs)))}function ts(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Fs={animationend:ts("Animation","AnimationEnd"),animationiteration:ts("Animation","AnimationIteration"),animationstart:ts("Animation","AnimationStart"),transitionrun:ts("Transition","TransitionRun"),transitionstart:ts("Transition","TransitionStart"),transitioncancel:ts("Transition","TransitionCancel"),transitionend:ts("Transition","TransitionEnd")},yu={},Rp={};ki&&(Rp=document.createElement("div").style,"AnimationEvent"in window||(delete Fs.animationend.animation,delete Fs.animationiteration.animation,delete Fs.animationstart.animation),"TransitionEvent"in window||delete Fs.transitionend.transition);function es(e){if(yu[e])return yu[e];if(!Fs[e])return e;var n=Fs[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in Rp)return yu[e]=n[a];return e}var wp=es("animationend"),Dp=es("animationiteration"),Up=es("animationstart"),xS=es("transitionrun"),MS=es("transitionstart"),ES=es("transitioncancel"),Lp=es("transitionend"),Np=new Map,xu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");xu.push("scrollEnd");function Si(e,n){Np.set(e,n),Pt(n,[e])}var fl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ci=[],Hs=0,Mu=0;function hl(){for(var e=Hs,n=Mu=Hs=0;n<e;){var a=ci[n];ci[n++]=null;var r=ci[n];ci[n++]=null;var u=ci[n];ci[n++]=null;var f=ci[n];if(ci[n++]=null,r!==null&&u!==null){var v=r.pending;v===null?u.next=u:(u.next=v.next,v.next=u),r.pending=u}f!==0&&Pp(a,u,f)}}function dl(e,n,a,r){ci[Hs++]=e,ci[Hs++]=n,ci[Hs++]=a,ci[Hs++]=r,Mu|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function Eu(e,n,a,r){return dl(e,n,a,r),pl(e)}function ns(e,n){return dl(e,null,null,n),pl(e)}function Pp(e,n,a){e.lanes|=a;var r=e.alternate;r!==null&&(r.lanes|=a);for(var u=!1,f=e.return;f!==null;)f.childLanes|=a,r=f.alternate,r!==null&&(r.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(u=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,u&&n!==null&&(u=31-Ot(a),e=f.hiddenUpdates,r=e[u],r===null?e[u]=[n]:r.push(n),n.lane=a|536870912),f):null}function pl(e){if(50<xo)throw xo=0,Nf=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Gs={};function TS(e,n,a,r){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Jn(e,n,a,r){return new TS(e,n,a,r)}function Tu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Xi(e,n){var a=e.alternate;return a===null?(a=Jn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Op(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function ml(e,n,a,r,u,f){var v=0;if(r=e,typeof e=="function")Tu(e)&&(v=1);else if(typeof e=="string")v=wy(e,a,bt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case w:return e=Jn(31,a,n,u),e.elementType=w,e.lanes=f,e;case A:return is(a.children,u,f,n);case x:v=8,u|=24;break;case g:return e=Jn(12,a,n,u|2),e.elementType=g,e.lanes=f,e;case G:return e=Jn(13,a,n,u),e.elementType=G,e.lanes=f,e;case F:return e=Jn(19,a,n,u),e.elementType=F,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case N:v=10;break t;case P:v=9;break t;case D:v=11;break t;case z:v=14;break t;case W:v=16,r=null;break t}v=29,a=Error(s(130,e===null?"null":typeof e,"")),r=null}return n=Jn(v,a,n,u),n.elementType=e,n.type=r,n.lanes=f,n}function is(e,n,a,r){return e=Jn(7,e,r,n),e.lanes=a,e}function bu(e,n,a){return e=Jn(6,e,null,n),e.lanes=a,e}function zp(e){var n=Jn(18,null,null,0);return n.stateNode=e,n}function Au(e,n,a){return n=Jn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Ip=new WeakMap;function ui(e,n){if(typeof e=="object"&&e!==null){var a=Ip.get(e);return a!==void 0?a:(n={value:e,source:n,stack:Xe(n)},Ip.set(e,n),n)}return{value:e,source:n,stack:Xe(n)}}var Vs=[],ks=0,gl=null,$r=0,fi=[],hi=0,ga=null,Ui=1,Li="";function Wi(e,n){Vs[ks++]=$r,Vs[ks++]=gl,gl=e,$r=n}function Bp(e,n,a){fi[hi++]=Ui,fi[hi++]=Li,fi[hi++]=ga,ga=e;var r=Ui;e=Li;var u=32-Ot(r)-1;r&=~(1<<u),a+=1;var f=32-Ot(n)+u;if(30<f){var v=u-u%5;f=(r&(1<<v)-1).toString(32),r>>=v,u-=v,Ui=1<<32-Ot(n)+u|a<<u|r,Li=f+e}else Ui=1<<f|a<<u|r,Li=e}function Cu(e){e.return!==null&&(Wi(e,1),Bp(e,1,0))}function Ru(e){for(;e===gl;)gl=Vs[--ks],Vs[ks]=null,$r=Vs[--ks],Vs[ks]=null;for(;e===ga;)ga=fi[--hi],fi[hi]=null,Li=fi[--hi],fi[hi]=null,Ui=fi[--hi],fi[hi]=null}function Fp(e,n){fi[hi++]=Ui,fi[hi++]=Li,fi[hi++]=ga,Ui=n.id,Li=n.overflow,ga=e}var An=null,je=null,Ee=!1,_a=null,di=!1,wu=Error(s(519));function va(e){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw to(ui(n,e)),wu}function Hp(e){var n=e.stateNode,a=e.type,r=e.memoizedProps;switch(n[cn]=e,n[Tn]=r,a){case"dialog":_e("cancel",n),_e("close",n);break;case"iframe":case"object":case"embed":_e("load",n);break;case"video":case"audio":for(a=0;a<Eo.length;a++)_e(Eo[a],n);break;case"source":_e("error",n);break;case"img":case"image":case"link":_e("error",n),_e("load",n);break;case"details":_e("toggle",n);break;case"input":_e("invalid",n),On(n,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":_e("invalid",n);break;case"textarea":_e("invalid",n),Di(n,r.value,r.defaultValue,r.children)}a=r.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||r.suppressHydrationWarning===!0||i0(n.textContent,a)?(r.popover!=null&&(_e("beforetoggle",n),_e("toggle",n)),r.onScroll!=null&&_e("scroll",n),r.onScrollEnd!=null&&_e("scrollend",n),r.onClick!=null&&(n.onclick=Vi),n=!0):n=!1,n||va(e,!0)}function Gp(e){for(An=e.return;An;)switch(An.tag){case 5:case 31:case 13:di=!1;return;case 27:case 3:di=!0;return;default:An=An.return}}function Xs(e){if(e!==An)return!1;if(!Ee)return Gp(e),Ee=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Zf(e.type,e.memoizedProps)),a=!a),a&&je&&va(e),Gp(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));je=h0(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));je=h0(e)}else n===27?(n=je,La(e.type)?(e=$f,$f=null,je=e):je=n):je=An?mi(e.stateNode.nextSibling):null;return!0}function as(){je=An=null,Ee=!1}function Du(){var e=_a;return e!==null&&(qn===null?qn=e:qn.push.apply(qn,e),_a=null),e}function to(e){_a===null?_a=[e]:_a.push(e)}var Uu=L(null),ss=null,qi=null;function Sa(e,n,a){yt(Uu,n._currentValue),n._currentValue=a}function Yi(e){e._currentValue=Uu.current,nt(Uu)}function Lu(e,n,a){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===a)break;e=e.return}}function Nu(e,n,a,r){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var f=u.dependencies;if(f!==null){var v=u.child;f=f.firstContext;t:for(;f!==null;){var b=f;f=u;for(var B=0;B<n.length;B++)if(b.context===n[B]){f.lanes|=a,b=f.alternate,b!==null&&(b.lanes|=a),Lu(f.return,a,e),r||(v=null);break t}f=b.next}}else if(u.tag===18){if(v=u.return,v===null)throw Error(s(341));v.lanes|=a,f=v.alternate,f!==null&&(f.lanes|=a),Lu(v,a,e),v=null}else v=u.child;if(v!==null)v.return=u;else for(v=u;v!==null;){if(v===e){v=null;break}if(u=v.sibling,u!==null){u.return=v.return,v=u;break}v=v.return}u=v}}function Ws(e,n,a,r){e=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var v=u.alternate;if(v===null)throw Error(s(387));if(v=v.memoizedProps,v!==null){var b=u.type;Qn(u.pendingProps.value,v.value)||(e!==null?e.push(b):e=[b])}}else if(u===ct.current){if(v=u.alternate,v===null)throw Error(s(387));v.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(Ro):e=[Ro])}u=u.return}e!==null&&Nu(n,e,a,r),n.flags|=262144}function _l(e){for(e=e.firstContext;e!==null;){if(!Qn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function rs(e){ss=e,qi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Cn(e){return Vp(ss,e)}function vl(e,n){return ss===null&&rs(e),Vp(e,n)}function Vp(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},qi===null){if(e===null)throw Error(s(308));qi=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else qi=qi.next=n;return a}var bS=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,r){e.push(r)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},AS=o.unstable_scheduleCallback,CS=o.unstable_NormalPriority,un={$$typeof:N,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Pu(){return{controller:new bS,data:new Map,refCount:0}}function eo(e){e.refCount--,e.refCount===0&&AS(CS,function(){e.controller.abort()})}var no=null,Ou=0,qs=0,Ys=null;function RS(e,n){if(no===null){var a=no=[];Ou=0,qs=Ff(),Ys={status:"pending",value:void 0,then:function(r){a.push(r)}}}return Ou++,n.then(kp,kp),n}function kp(){if(--Ou===0&&no!==null){Ys!==null&&(Ys.status="fulfilled");var e=no;no=null,qs=0,Ys=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function wS(e,n){var a=[],r={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){r.status="fulfilled",r.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(r.status="rejected",r.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),r}var Xp=O.S;O.S=function(e,n){Cg=E(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&RS(e,n),Xp!==null&&Xp(e,n)};var os=L(null);function zu(){var e=os.current;return e!==null?e:qe.pooledCache}function Sl(e,n){n===null?yt(os,os.current):yt(os,n.pool)}function Wp(){var e=zu();return e===null?null:{parent:un._currentValue,pool:e}}var Zs=Error(s(460)),Iu=Error(s(474)),yl=Error(s(542)),xl={then:function(){}};function qp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Yp(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(Vi,Vi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,jp(e),e;default:if(typeof n.status=="string")n.then(Vi,Vi);else{if(e=qe,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(r){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=r}},function(r){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=r}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,jp(e),e}throw cs=n,Zs}}function ls(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(cs=a,Zs):a}}var cs=null;function Zp(){if(cs===null)throw Error(s(459));var e=cs;return cs=null,e}function jp(e){if(e===Zs||e===yl)throw Error(s(483))}var js=null,io=0;function Ml(e){var n=io;return io+=1,js===null&&(js=[]),Yp(js,e,n)}function ao(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function El(e,n){throw n.$$typeof===y?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Kp(e){function n(Y,k){if(e){var J=Y.deletions;J===null?(Y.deletions=[k],Y.flags|=16):J.push(k)}}function a(Y,k){if(!e)return null;for(;k!==null;)n(Y,k),k=k.sibling;return null}function r(Y){for(var k=new Map;Y!==null;)Y.key!==null?k.set(Y.key,Y):k.set(Y.index,Y),Y=Y.sibling;return k}function u(Y,k){return Y=Xi(Y,k),Y.index=0,Y.sibling=null,Y}function f(Y,k,J){return Y.index=J,e?(J=Y.alternate,J!==null?(J=J.index,J<k?(Y.flags|=67108866,k):J):(Y.flags|=67108866,k)):(Y.flags|=1048576,k)}function v(Y){return e&&Y.alternate===null&&(Y.flags|=67108866),Y}function b(Y,k,J,pt){return k===null||k.tag!==6?(k=bu(J,Y.mode,pt),k.return=Y,k):(k=u(k,J),k.return=Y,k)}function B(Y,k,J,pt){var Jt=J.type;return Jt===A?ft(Y,k,J.props.children,pt,J.key):k!==null&&(k.elementType===Jt||typeof Jt=="object"&&Jt!==null&&Jt.$$typeof===W&&ls(Jt)===k.type)?(k=u(k,J.props),ao(k,J),k.return=Y,k):(k=ml(J.type,J.key,J.props,null,Y.mode,pt),ao(k,J),k.return=Y,k)}function $(Y,k,J,pt){return k===null||k.tag!==4||k.stateNode.containerInfo!==J.containerInfo||k.stateNode.implementation!==J.implementation?(k=Au(J,Y.mode,pt),k.return=Y,k):(k=u(k,J.children||[]),k.return=Y,k)}function ft(Y,k,J,pt,Jt){return k===null||k.tag!==7?(k=is(J,Y.mode,pt,Jt),k.return=Y,k):(k=u(k,J),k.return=Y,k)}function mt(Y,k,J){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=bu(""+k,Y.mode,J),k.return=Y,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case M:return J=ml(k.type,k.key,k.props,null,Y.mode,J),ao(J,k),J.return=Y,J;case T:return k=Au(k,Y.mode,J),k.return=Y,k;case W:return k=ls(k),mt(Y,k,J)}if(lt(k)||K(k))return k=is(k,Y.mode,J,null),k.return=Y,k;if(typeof k.then=="function")return mt(Y,Ml(k),J);if(k.$$typeof===N)return mt(Y,vl(Y,k),J);El(Y,k)}return null}function et(Y,k,J,pt){var Jt=k!==null?k.key:null;if(typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint")return Jt!==null?null:b(Y,k,""+J,pt);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case M:return J.key===Jt?B(Y,k,J,pt):null;case T:return J.key===Jt?$(Y,k,J,pt):null;case W:return J=ls(J),et(Y,k,J,pt)}if(lt(J)||K(J))return Jt!==null?null:ft(Y,k,J,pt,null);if(typeof J.then=="function")return et(Y,k,Ml(J),pt);if(J.$$typeof===N)return et(Y,k,vl(Y,J),pt);El(Y,J)}return null}function ot(Y,k,J,pt,Jt){if(typeof pt=="string"&&pt!==""||typeof pt=="number"||typeof pt=="bigint")return Y=Y.get(J)||null,b(k,Y,""+pt,Jt);if(typeof pt=="object"&&pt!==null){switch(pt.$$typeof){case M:return Y=Y.get(pt.key===null?J:pt.key)||null,B(k,Y,pt,Jt);case T:return Y=Y.get(pt.key===null?J:pt.key)||null,$(k,Y,pt,Jt);case W:return pt=ls(pt),ot(Y,k,J,pt,Jt)}if(lt(pt)||K(pt))return Y=Y.get(J)||null,ft(k,Y,pt,Jt,null);if(typeof pt.then=="function")return ot(Y,k,J,Ml(pt),Jt);if(pt.$$typeof===N)return ot(Y,k,J,vl(k,pt),Jt);El(k,pt)}return null}function Ft(Y,k,J,pt){for(var Jt=null,Ce=null,Wt=k,ce=k=0,xe=null;Wt!==null&&ce<J.length;ce++){Wt.index>ce?(xe=Wt,Wt=null):xe=Wt.sibling;var Re=et(Y,Wt,J[ce],pt);if(Re===null){Wt===null&&(Wt=xe);break}e&&Wt&&Re.alternate===null&&n(Y,Wt),k=f(Re,k,ce),Ce===null?Jt=Re:Ce.sibling=Re,Ce=Re,Wt=xe}if(ce===J.length)return a(Y,Wt),Ee&&Wi(Y,ce),Jt;if(Wt===null){for(;ce<J.length;ce++)Wt=mt(Y,J[ce],pt),Wt!==null&&(k=f(Wt,k,ce),Ce===null?Jt=Wt:Ce.sibling=Wt,Ce=Wt);return Ee&&Wi(Y,ce),Jt}for(Wt=r(Wt);ce<J.length;ce++)xe=ot(Wt,Y,ce,J[ce],pt),xe!==null&&(e&&xe.alternate!==null&&Wt.delete(xe.key===null?ce:xe.key),k=f(xe,k,ce),Ce===null?Jt=xe:Ce.sibling=xe,Ce=xe);return e&&Wt.forEach(function(Ia){return n(Y,Ia)}),Ee&&Wi(Y,ce),Jt}function te(Y,k,J,pt){if(J==null)throw Error(s(151));for(var Jt=null,Ce=null,Wt=k,ce=k=0,xe=null,Re=J.next();Wt!==null&&!Re.done;ce++,Re=J.next()){Wt.index>ce?(xe=Wt,Wt=null):xe=Wt.sibling;var Ia=et(Y,Wt,Re.value,pt);if(Ia===null){Wt===null&&(Wt=xe);break}e&&Wt&&Ia.alternate===null&&n(Y,Wt),k=f(Ia,k,ce),Ce===null?Jt=Ia:Ce.sibling=Ia,Ce=Ia,Wt=xe}if(Re.done)return a(Y,Wt),Ee&&Wi(Y,ce),Jt;if(Wt===null){for(;!Re.done;ce++,Re=J.next())Re=mt(Y,Re.value,pt),Re!==null&&(k=f(Re,k,ce),Ce===null?Jt=Re:Ce.sibling=Re,Ce=Re);return Ee&&Wi(Y,ce),Jt}for(Wt=r(Wt);!Re.done;ce++,Re=J.next())Re=ot(Wt,Y,ce,Re.value,pt),Re!==null&&(e&&Re.alternate!==null&&Wt.delete(Re.key===null?ce:Re.key),k=f(Re,k,ce),Ce===null?Jt=Re:Ce.sibling=Re,Ce=Re);return e&&Wt.forEach(function(Hy){return n(Y,Hy)}),Ee&&Wi(Y,ce),Jt}function He(Y,k,J,pt){if(typeof J=="object"&&J!==null&&J.type===A&&J.key===null&&(J=J.props.children),typeof J=="object"&&J!==null){switch(J.$$typeof){case M:t:{for(var Jt=J.key;k!==null;){if(k.key===Jt){if(Jt=J.type,Jt===A){if(k.tag===7){a(Y,k.sibling),pt=u(k,J.props.children),pt.return=Y,Y=pt;break t}}else if(k.elementType===Jt||typeof Jt=="object"&&Jt!==null&&Jt.$$typeof===W&&ls(Jt)===k.type){a(Y,k.sibling),pt=u(k,J.props),ao(pt,J),pt.return=Y,Y=pt;break t}a(Y,k);break}else n(Y,k);k=k.sibling}J.type===A?(pt=is(J.props.children,Y.mode,pt,J.key),pt.return=Y,Y=pt):(pt=ml(J.type,J.key,J.props,null,Y.mode,pt),ao(pt,J),pt.return=Y,Y=pt)}return v(Y);case T:t:{for(Jt=J.key;k!==null;){if(k.key===Jt)if(k.tag===4&&k.stateNode.containerInfo===J.containerInfo&&k.stateNode.implementation===J.implementation){a(Y,k.sibling),pt=u(k,J.children||[]),pt.return=Y,Y=pt;break t}else{a(Y,k);break}else n(Y,k);k=k.sibling}pt=Au(J,Y.mode,pt),pt.return=Y,Y=pt}return v(Y);case W:return J=ls(J),He(Y,k,J,pt)}if(lt(J))return Ft(Y,k,J,pt);if(K(J)){if(Jt=K(J),typeof Jt!="function")throw Error(s(150));return J=Jt.call(J),te(Y,k,J,pt)}if(typeof J.then=="function")return He(Y,k,Ml(J),pt);if(J.$$typeof===N)return He(Y,k,vl(Y,J),pt);El(Y,J)}return typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint"?(J=""+J,k!==null&&k.tag===6?(a(Y,k.sibling),pt=u(k,J),pt.return=Y,Y=pt):(a(Y,k),pt=bu(J,Y.mode,pt),pt.return=Y,Y=pt),v(Y)):a(Y,k)}return function(Y,k,J,pt){try{io=0;var Jt=He(Y,k,J,pt);return js=null,Jt}catch(Wt){if(Wt===Zs||Wt===yl)throw Wt;var Ce=Jn(29,Wt,null,Y.mode);return Ce.lanes=pt,Ce.return=Y,Ce}}}var us=Kp(!0),Qp=Kp(!1),ya=!1;function Bu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Fu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function xa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ma(e,n,a){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(De&2)!==0){var u=r.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),r.pending=n,n=pl(e),Pp(e,null,a),n}return dl(e,r,n,a),pl(e)}function so(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var r=n.lanes;r&=e.pendingLanes,a|=r,n.lanes=a,wi(e,a)}}function Hu(e,n){var a=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,a===r)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var v={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=v:f=f.next=v,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:r.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:r.shared,callbacks:r.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Gu=!1;function ro(){if(Gu){var e=Ys;if(e!==null)throw e}}function oo(e,n,a,r){Gu=!1;var u=e.updateQueue;ya=!1;var f=u.firstBaseUpdate,v=u.lastBaseUpdate,b=u.shared.pending;if(b!==null){u.shared.pending=null;var B=b,$=B.next;B.next=null,v===null?f=$:v.next=$,v=B;var ft=e.alternate;ft!==null&&(ft=ft.updateQueue,b=ft.lastBaseUpdate,b!==v&&(b===null?ft.firstBaseUpdate=$:b.next=$,ft.lastBaseUpdate=B))}if(f!==null){var mt=u.baseState;v=0,ft=$=B=null,b=f;do{var et=b.lane&-536870913,ot=et!==b.lane;if(ot?(ye&et)===et:(r&et)===et){et!==0&&et===qs&&(Gu=!0),ft!==null&&(ft=ft.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});t:{var Ft=e,te=b;et=n;var He=a;switch(te.tag){case 1:if(Ft=te.payload,typeof Ft=="function"){mt=Ft.call(He,mt,et);break t}mt=Ft;break t;case 3:Ft.flags=Ft.flags&-65537|128;case 0:if(Ft=te.payload,et=typeof Ft=="function"?Ft.call(He,mt,et):Ft,et==null)break t;mt=_({},mt,et);break t;case 2:ya=!0}}et=b.callback,et!==null&&(e.flags|=64,ot&&(e.flags|=8192),ot=u.callbacks,ot===null?u.callbacks=[et]:ot.push(et))}else ot={lane:et,tag:b.tag,payload:b.payload,callback:b.callback,next:null},ft===null?($=ft=ot,B=mt):ft=ft.next=ot,v|=et;if(b=b.next,b===null){if(b=u.shared.pending,b===null)break;ot=b,b=ot.next,ot.next=null,u.lastBaseUpdate=ot,u.shared.pending=null}}while(!0);ft===null&&(B=mt),u.baseState=B,u.firstBaseUpdate=$,u.lastBaseUpdate=ft,f===null&&(u.shared.lanes=0),Ca|=v,e.lanes=v,e.memoizedState=mt}}function Jp(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function $p(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Jp(a[e],n)}var Ks=L(null),Tl=L(0);function tm(e,n){e=na,yt(Tl,e),yt(Ks,n),na=e|n.baseLanes}function Vu(){yt(Tl,na),yt(Ks,Ks.current)}function ku(){na=Tl.current,nt(Ks),nt(Tl)}var $n=L(null),pi=null;function Ea(e){var n=e.alternate;yt(rn,rn.current&1),yt($n,e),pi===null&&(n===null||Ks.current!==null||n.memoizedState!==null)&&(pi=e)}function Xu(e){yt(rn,rn.current),yt($n,e),pi===null&&(pi=e)}function em(e){e.tag===22?(yt(rn,rn.current),yt($n,e),pi===null&&(pi=e)):Ta()}function Ta(){yt(rn,rn.current),yt($n,$n.current)}function ti(e){nt($n),pi===e&&(pi=null),nt(rn)}var rn=L(0);function bl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Qf(a)||Jf(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Zi=0,le=null,Be=null,fn=null,Al=!1,Qs=!1,fs=!1,Cl=0,lo=0,Js=null,DS=0;function en(){throw Error(s(321))}function Wu(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!Qn(e[a],n[a]))return!1;return!0}function qu(e,n,a,r,u,f){return Zi=f,le=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,O.H=e===null||e.memoizedState===null?Bm:lf,fs=!1,f=a(r,u),fs=!1,Qs&&(f=im(n,a,r,u)),nm(e),f}function nm(e){O.H=fo;var n=Be!==null&&Be.next!==null;if(Zi=0,fn=Be=le=null,Al=!1,lo=0,Js=null,n)throw Error(s(300));e===null||hn||(e=e.dependencies,e!==null&&_l(e)&&(hn=!0))}function im(e,n,a,r){le=e;var u=0;do{if(Qs&&(Js=null),lo=0,Qs=!1,25<=u)throw Error(s(301));if(u+=1,fn=Be=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}O.H=Fm,f=n(a,r)}while(Qs);return f}function US(){var e=O.H,n=e.useState()[0];return n=typeof n.then=="function"?co(n):n,e=e.useState()[0],(Be!==null?Be.memoizedState:null)!==e&&(le.flags|=1024),n}function Yu(){var e=Cl!==0;return Cl=0,e}function Zu(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function ju(e){if(Al){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Al=!1}Zi=0,fn=Be=le=null,Qs=!1,lo=Cl=0,Js=null}function zn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return fn===null?le.memoizedState=fn=e:fn=fn.next=e,fn}function on(){if(Be===null){var e=le.alternate;e=e!==null?e.memoizedState:null}else e=Be.next;var n=fn===null?le.memoizedState:fn.next;if(n!==null)fn=n,Be=e;else{if(e===null)throw le.alternate===null?Error(s(467)):Error(s(310));Be=e,e={memoizedState:Be.memoizedState,baseState:Be.baseState,baseQueue:Be.baseQueue,queue:Be.queue,next:null},fn===null?le.memoizedState=fn=e:fn=fn.next=e}return fn}function Rl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function co(e){var n=lo;return lo+=1,Js===null&&(Js=[]),e=Yp(Js,e,n),n=le,(fn===null?n.memoizedState:fn.next)===null&&(n=n.alternate,O.H=n===null||n.memoizedState===null?Bm:lf),e}function wl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return co(e);if(e.$$typeof===N)return Cn(e)}throw Error(s(438,String(e)))}function Ku(e){var n=null,a=le.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var r=le.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(n={data:r.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Rl(),le.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),r=0;r<e;r++)a[r]=R;return n.index++,a}function ji(e,n){return typeof n=="function"?n(e):n}function Dl(e){var n=on();return Qu(n,Be,e)}function Qu(e,n,a){var r=e.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=a;var u=e.baseQueue,f=r.pending;if(f!==null){if(u!==null){var v=u.next;u.next=f.next,f.next=v}n.baseQueue=u=f,r.pending=null}if(f=e.baseState,u===null)e.memoizedState=f;else{n=u.next;var b=v=null,B=null,$=n,ft=!1;do{var mt=$.lane&-536870913;if(mt!==$.lane?(ye&mt)===mt:(Zi&mt)===mt){var et=$.revertLane;if(et===0)B!==null&&(B=B.next={lane:0,revertLane:0,gesture:null,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null}),mt===qs&&(ft=!0);else if((Zi&et)===et){$=$.next,et===qs&&(ft=!0);continue}else mt={lane:0,revertLane:$.revertLane,gesture:null,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},B===null?(b=B=mt,v=f):B=B.next=mt,le.lanes|=et,Ca|=et;mt=$.action,fs&&a(f,mt),f=$.hasEagerState?$.eagerState:a(f,mt)}else et={lane:mt,revertLane:$.revertLane,gesture:$.gesture,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},B===null?(b=B=et,v=f):B=B.next=et,le.lanes|=mt,Ca|=mt;$=$.next}while($!==null&&$!==n);if(B===null?v=f:B.next=b,!Qn(f,e.memoizedState)&&(hn=!0,ft&&(a=Ys,a!==null)))throw a;e.memoizedState=f,e.baseState=v,e.baseQueue=B,r.lastRenderedState=f}return u===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Ju(e){var n=on(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var r=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var v=u=u.next;do f=e(f,v.action),v=v.next;while(v!==u);Qn(f,n.memoizedState)||(hn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,r]}function am(e,n,a){var r=le,u=on(),f=Ee;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var v=!Qn((Be||u).memoizedState,a);if(v&&(u.memoizedState=a,hn=!0),u=u.queue,ef(om.bind(null,r,u,e),[e]),u.getSnapshot!==n||v||fn!==null&&fn.memoizedState.tag&1){if(r.flags|=2048,$s(9,{destroy:void 0},rm.bind(null,r,u,a,n),null),qe===null)throw Error(s(349));f||(Zi&127)!==0||sm(r,n,a)}return a}function sm(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=le.updateQueue,n===null?(n=Rl(),le.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function rm(e,n,a,r){n.value=a,n.getSnapshot=r,lm(n)&&cm(e)}function om(e,n,a){return a(function(){lm(n)&&cm(e)})}function lm(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!Qn(e,a)}catch{return!0}}function cm(e){var n=ns(e,2);n!==null&&Yn(n,e,2)}function $u(e){var n=zn();if(typeof e=="function"){var a=e;if(e=a(),fs){jt(!0);try{a()}finally{jt(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ji,lastRenderedState:e},n}function um(e,n,a,r){return e.baseState=a,Qu(e,Be,typeof r=="function"?r:ji)}function LS(e,n,a,r,u){if(Nl(e))throw Error(s(485));if(e=n.action,e!==null){var f={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){f.listeners.push(v)}};O.T!==null?a(!0):f.isTransition=!1,r(f),a=n.pending,a===null?(f.next=n.pending=f,fm(n,f)):(f.next=a.next,n.pending=a.next=f)}}function fm(e,n){var a=n.action,r=n.payload,u=e.state;if(n.isTransition){var f=O.T,v={};O.T=v;try{var b=a(u,r),B=O.S;B!==null&&B(v,b),hm(e,n,b)}catch($){tf(e,n,$)}finally{f!==null&&v.types!==null&&(f.types=v.types),O.T=f}}else try{f=a(u,r),hm(e,n,f)}catch($){tf(e,n,$)}}function hm(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(r){dm(e,n,r)},function(r){return tf(e,n,r)}):dm(e,n,a)}function dm(e,n,a){n.status="fulfilled",n.value=a,pm(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,fm(e,a)))}function tf(e,n,a){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do n.status="rejected",n.reason=a,pm(n),n=n.next;while(n!==r)}e.action=null}function pm(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function mm(e,n){return n}function gm(e,n){if(Ee){var a=qe.formState;if(a!==null){t:{var r=le;if(Ee){if(je){e:{for(var u=je,f=di;u.nodeType!==8;){if(!f){u=null;break e}if(u=mi(u.nextSibling),u===null){u=null;break e}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){je=mi(u.nextSibling),r=u.data==="F!";break t}}va(r)}r=!1}r&&(n=a[0])}}return a=zn(),a.memoizedState=a.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:mm,lastRenderedState:n},a.queue=r,a=Om.bind(null,le,r),r.dispatch=a,r=$u(!1),f=of.bind(null,le,!1,r.queue),r=zn(),u={state:n,dispatch:null,action:e,pending:null},r.queue=u,a=LS.bind(null,le,u,f,a),u.dispatch=a,r.memoizedState=e,[n,a,!1]}function _m(e){var n=on();return vm(n,Be,e)}function vm(e,n,a){if(n=Qu(e,n,mm)[0],e=Dl(ji)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var r=co(n)}catch(v){throw v===Zs?yl:v}else r=n;n=on();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(le.flags|=2048,$s(9,{destroy:void 0},NS.bind(null,u,a),null)),[r,f,e]}function NS(e,n){e.action=n}function Sm(e){var n=on(),a=Be;if(a!==null)return vm(n,a,e);on(),n=n.memoizedState,a=on();var r=a.queue.dispatch;return a.memoizedState=e,[n,r,!1]}function $s(e,n,a,r){return e={tag:e,create:a,deps:r,inst:n,next:null},n=le.updateQueue,n===null&&(n=Rl(),le.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(r=a.next,a.next=e,e.next=r,n.lastEffect=e),e}function ym(){return on().memoizedState}function Ul(e,n,a,r){var u=zn();le.flags|=e,u.memoizedState=$s(1|n,{destroy:void 0},a,r===void 0?null:r)}function Ll(e,n,a,r){var u=on();r=r===void 0?null:r;var f=u.memoizedState.inst;Be!==null&&r!==null&&Wu(r,Be.memoizedState.deps)?u.memoizedState=$s(n,f,a,r):(le.flags|=e,u.memoizedState=$s(1|n,f,a,r))}function xm(e,n){Ul(8390656,8,e,n)}function ef(e,n){Ll(2048,8,e,n)}function PS(e){le.flags|=4;var n=le.updateQueue;if(n===null)n=Rl(),le.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function Mm(e){var n=on().memoizedState;return PS({ref:n,nextImpl:e}),function(){if((De&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function Em(e,n){return Ll(4,2,e,n)}function Tm(e,n){return Ll(4,4,e,n)}function bm(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Am(e,n,a){a=a!=null?a.concat([e]):null,Ll(4,4,bm.bind(null,n,e),a)}function nf(){}function Cm(e,n){var a=on();n=n===void 0?null:n;var r=a.memoizedState;return n!==null&&Wu(n,r[1])?r[0]:(a.memoizedState=[e,n],e)}function Rm(e,n){var a=on();n=n===void 0?null:n;var r=a.memoizedState;if(n!==null&&Wu(n,r[1]))return r[0];if(r=e(),fs){jt(!0);try{e()}finally{jt(!1)}}return a.memoizedState=[r,n],r}function af(e,n,a){return a===void 0||(Zi&1073741824)!==0&&(ye&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=wg(),le.lanes|=e,Ca|=e,a)}function wm(e,n,a,r){return Qn(a,n)?a:Ks.current!==null?(e=af(e,a,r),Qn(e,n)||(hn=!0),e):(Zi&42)===0||(Zi&1073741824)!==0&&(ye&261930)===0?(hn=!0,e.memoizedState=a):(e=wg(),le.lanes|=e,Ca|=e,n)}function Dm(e,n,a,r,u){var f=Q.p;Q.p=f!==0&&8>f?f:8;var v=O.T,b={};O.T=b,of(e,!1,n,a);try{var B=u(),$=O.S;if($!==null&&$(b,B),B!==null&&typeof B=="object"&&typeof B.then=="function"){var ft=wS(B,r);uo(e,n,ft,ii(e))}else uo(e,n,r,ii(e))}catch(mt){uo(e,n,{then:function(){},status:"rejected",reason:mt},ii())}finally{Q.p=f,v!==null&&b.types!==null&&(v.types=b.types),O.T=v}}function OS(){}function sf(e,n,a,r){if(e.tag!==5)throw Error(s(476));var u=Um(e).queue;Dm(e,u,n,j,a===null?OS:function(){return Lm(e),a(r)})}function Um(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:j,baseState:j,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ji,lastRenderedState:j},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ji,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Lm(e){var n=Um(e);n.next===null&&(n=e.alternate.memoizedState),uo(e,n.next.queue,{},ii())}function rf(){return Cn(Ro)}function Nm(){return on().memoizedState}function Pm(){return on().memoizedState}function zS(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=ii();e=xa(a);var r=Ma(n,e,a);r!==null&&(Yn(r,n,a),so(r,n,a)),n={cache:Pu()},e.payload=n;return}n=n.return}}function IS(e,n,a){var r=ii();a={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Nl(e)?zm(n,a):(a=Eu(e,n,a,r),a!==null&&(Yn(a,e,r),Im(a,n,r)))}function Om(e,n,a){var r=ii();uo(e,n,a,r)}function uo(e,n,a,r){var u={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Nl(e))zm(n,u);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var v=n.lastRenderedState,b=f(v,a);if(u.hasEagerState=!0,u.eagerState=b,Qn(b,v))return dl(e,n,u,0),qe===null&&hl(),!1}catch{}if(a=Eu(e,n,u,r),a!==null)return Yn(a,e,r),Im(a,n,r),!0}return!1}function of(e,n,a,r){if(r={lane:2,revertLane:Ff(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Nl(e)){if(n)throw Error(s(479))}else n=Eu(e,a,r,2),n!==null&&Yn(n,e,2)}function Nl(e){var n=e.alternate;return e===le||n!==null&&n===le}function zm(e,n){Qs=Al=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function Im(e,n,a){if((a&4194048)!==0){var r=n.lanes;r&=e.pendingLanes,a|=r,n.lanes=a,wi(e,a)}}var fo={readContext:Cn,use:wl,useCallback:en,useContext:en,useEffect:en,useImperativeHandle:en,useLayoutEffect:en,useInsertionEffect:en,useMemo:en,useReducer:en,useRef:en,useState:en,useDebugValue:en,useDeferredValue:en,useTransition:en,useSyncExternalStore:en,useId:en,useHostTransitionStatus:en,useFormState:en,useActionState:en,useOptimistic:en,useMemoCache:en,useCacheRefresh:en};fo.useEffectEvent=en;var Bm={readContext:Cn,use:wl,useCallback:function(e,n){return zn().memoizedState=[e,n===void 0?null:n],e},useContext:Cn,useEffect:xm,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Ul(4194308,4,bm.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Ul(4194308,4,e,n)},useInsertionEffect:function(e,n){Ul(4,2,e,n)},useMemo:function(e,n){var a=zn();n=n===void 0?null:n;var r=e();if(fs){jt(!0);try{e()}finally{jt(!1)}}return a.memoizedState=[r,n],r},useReducer:function(e,n,a){var r=zn();if(a!==void 0){var u=a(n);if(fs){jt(!0);try{a(n)}finally{jt(!1)}}}else u=n;return r.memoizedState=r.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},r.queue=e,e=e.dispatch=IS.bind(null,le,e),[r.memoizedState,e]},useRef:function(e){var n=zn();return e={current:e},n.memoizedState=e},useState:function(e){e=$u(e);var n=e.queue,a=Om.bind(null,le,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:nf,useDeferredValue:function(e,n){var a=zn();return af(a,e,n)},useTransition:function(){var e=$u(!1);return e=Dm.bind(null,le,e.queue,!0,!1),zn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var r=le,u=zn();if(Ee){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),qe===null)throw Error(s(349));(ye&127)!==0||sm(r,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,xm(om.bind(null,r,f,e),[e]),r.flags|=2048,$s(9,{destroy:void 0},rm.bind(null,r,f,a,n),null),a},useId:function(){var e=zn(),n=qe.identifierPrefix;if(Ee){var a=Li,r=Ui;a=(r&~(1<<32-Ot(r)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Cl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=DS++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:rf,useFormState:gm,useActionState:gm,useOptimistic:function(e){var n=zn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=of.bind(null,le,!0,a),a.dispatch=n,[e,n]},useMemoCache:Ku,useCacheRefresh:function(){return zn().memoizedState=zS.bind(null,le)},useEffectEvent:function(e){var n=zn(),a={impl:e};return n.memoizedState=a,function(){if((De&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},lf={readContext:Cn,use:wl,useCallback:Cm,useContext:Cn,useEffect:ef,useImperativeHandle:Am,useInsertionEffect:Em,useLayoutEffect:Tm,useMemo:Rm,useReducer:Dl,useRef:ym,useState:function(){return Dl(ji)},useDebugValue:nf,useDeferredValue:function(e,n){var a=on();return wm(a,Be.memoizedState,e,n)},useTransition:function(){var e=Dl(ji)[0],n=on().memoizedState;return[typeof e=="boolean"?e:co(e),n]},useSyncExternalStore:am,useId:Nm,useHostTransitionStatus:rf,useFormState:_m,useActionState:_m,useOptimistic:function(e,n){var a=on();return um(a,Be,e,n)},useMemoCache:Ku,useCacheRefresh:Pm};lf.useEffectEvent=Mm;var Fm={readContext:Cn,use:wl,useCallback:Cm,useContext:Cn,useEffect:ef,useImperativeHandle:Am,useInsertionEffect:Em,useLayoutEffect:Tm,useMemo:Rm,useReducer:Ju,useRef:ym,useState:function(){return Ju(ji)},useDebugValue:nf,useDeferredValue:function(e,n){var a=on();return Be===null?af(a,e,n):wm(a,Be.memoizedState,e,n)},useTransition:function(){var e=Ju(ji)[0],n=on().memoizedState;return[typeof e=="boolean"?e:co(e),n]},useSyncExternalStore:am,useId:Nm,useHostTransitionStatus:rf,useFormState:Sm,useActionState:Sm,useOptimistic:function(e,n){var a=on();return Be!==null?um(a,Be,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Ku,useCacheRefresh:Pm};Fm.useEffectEvent=Mm;function cf(e,n,a,r){n=e.memoizedState,a=a(r,n),a=a==null?n:_({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var uf={enqueueSetState:function(e,n,a){e=e._reactInternals;var r=ii(),u=xa(r);u.payload=n,a!=null&&(u.callback=a),n=Ma(e,u,r),n!==null&&(Yn(n,e,r),so(n,e,r))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var r=ii(),u=xa(r);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Ma(e,u,r),n!==null&&(Yn(n,e,r),so(n,e,r))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=ii(),r=xa(a);r.tag=2,n!=null&&(r.callback=n),n=Ma(e,r,a),n!==null&&(Yn(n,e,a),so(n,e,a))}};function Hm(e,n,a,r,u,f,v){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,f,v):n.prototype&&n.prototype.isPureReactComponent?!Qr(a,r)||!Qr(u,f):!0}function Gm(e,n,a,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,r),n.state!==e&&uf.enqueueReplaceState(n,n.state,null)}function hs(e,n){var a=n;if("ref"in n){a={};for(var r in n)r!=="ref"&&(a[r]=n[r])}if(e=e.defaultProps){a===n&&(a=_({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}function Vm(e){fl(e)}function km(e){console.error(e)}function Xm(e){fl(e)}function Pl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(r){setTimeout(function(){throw r})}}function Wm(e,n,a){try{var r=e.onCaughtError;r(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function ff(e,n,a){return a=xa(a),a.tag=3,a.payload={element:null},a.callback=function(){Pl(e,n)},a}function qm(e){return e=xa(e),e.tag=3,e}function Ym(e,n,a,r){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=r.value;e.payload=function(){return u(f)},e.callback=function(){Wm(n,a,r)}}var v=a.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(e.callback=function(){Wm(n,a,r),typeof u!="function"&&(Ra===null?Ra=new Set([this]):Ra.add(this));var b=r.stack;this.componentDidCatch(r.value,{componentStack:b!==null?b:""})})}function BS(e,n,a,r,u){if(a.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(n=a.alternate,n!==null&&Ws(n,a,u,!0),a=$n.current,a!==null){switch(a.tag){case 31:case 13:return pi===null?ql():a.alternate===null&&nn===0&&(nn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,r===xl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([r]):n.add(r),zf(e,r,u)),!1;case 22:return a.flags|=65536,r===xl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([r])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([r]):a.add(r)),zf(e,r,u)),!1}throw Error(s(435,a.tag))}return zf(e,r,u),ql(),!1}if(Ee)return n=$n.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,r!==wu&&(e=Error(s(422),{cause:r}),to(ui(e,a)))):(r!==wu&&(n=Error(s(423),{cause:r}),to(ui(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,r=ui(r,a),u=ff(e.stateNode,r,u),Hu(e,u),nn!==4&&(nn=2)),!1;var f=Error(s(520),{cause:r});if(f=ui(f,a),yo===null?yo=[f]:yo.push(f),nn!==4&&(nn=2),n===null)return!0;r=ui(r,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=ff(a.stateNode,r,e),Hu(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Ra===null||!Ra.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=qm(u),Ym(u,e,a,r),Hu(a,u),!1}a=a.return}while(a!==null);return!1}var hf=Error(s(461)),hn=!1;function Rn(e,n,a,r){n.child=e===null?Qp(n,null,a,r):us(n,e.child,a,r)}function Zm(e,n,a,r,u){a=a.render;var f=n.ref;if("ref"in r){var v={};for(var b in r)b!=="ref"&&(v[b]=r[b])}else v=r;return rs(n),r=qu(e,n,a,v,f,u),b=Yu(),e!==null&&!hn?(Zu(e,n,u),Ki(e,n,u)):(Ee&&b&&Cu(n),n.flags|=1,Rn(e,n,r,u),n.child)}function jm(e,n,a,r,u){if(e===null){var f=a.type;return typeof f=="function"&&!Tu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Km(e,n,f,r,u)):(e=ml(a.type,null,r,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!yf(e,u)){var v=f.memoizedProps;if(a=a.compare,a=a!==null?a:Qr,a(v,r)&&e.ref===n.ref)return Ki(e,n,u)}return n.flags|=1,e=Xi(f,r),e.ref=n.ref,e.return=n,n.child=e}function Km(e,n,a,r,u){if(e!==null){var f=e.memoizedProps;if(Qr(f,r)&&e.ref===n.ref)if(hn=!1,n.pendingProps=r=f,yf(e,u))(e.flags&131072)!==0&&(hn=!0);else return n.lanes=e.lanes,Ki(e,n,u)}return df(e,n,a,r,u)}function Qm(e,n,a,r){var u=r.children,f=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,e!==null){for(r=n.child=e.child,u=0;r!==null;)u=u|r.lanes|r.childLanes,r=r.sibling;r=u&~f}else r=0,n.child=null;return Jm(e,n,f,a,r)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&Sl(n,f!==null?f.cachePool:null),f!==null?tm(n,f):Vu(),em(n);else return r=n.lanes=536870912,Jm(e,n,f!==null?f.baseLanes|a:a,a,r)}else f!==null?(Sl(n,f.cachePool),tm(n,f),Ta(),n.memoizedState=null):(e!==null&&Sl(n,null),Vu(),Ta());return Rn(e,n,u,a),n.child}function ho(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Jm(e,n,a,r,u){var f=zu();return f=f===null?null:{parent:un._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},e!==null&&Sl(n,null),Vu(),em(n),e!==null&&Ws(e,n,r,!0),n.childLanes=u,null}function Ol(e,n){return n=Il({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function $m(e,n,a){return us(n,e.child,null,a),e=Ol(n,n.pendingProps),e.flags|=2,ti(n),n.memoizedState=null,e}function FS(e,n,a){var r=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Ee){if(r.mode==="hidden")return e=Ol(n,r),n.lanes=536870912,ho(null,e);if(Xu(n),(e=je)?(e=f0(e,di),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:ga!==null?{id:Ui,overflow:Li}:null,retryLane:536870912,hydrationErrors:null},a=zp(e),a.return=n,n.child=a,An=n,je=null)):e=null,e===null)throw va(n);return n.lanes=536870912,null}return Ol(n,r)}var f=e.memoizedState;if(f!==null){var v=f.dehydrated;if(Xu(n),u)if(n.flags&256)n.flags&=-257,n=$m(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(s(558));else if(hn||Ws(e,n,a,!1),u=(a&e.childLanes)!==0,hn||u){if(r=qe,r!==null&&(v=Ds(r,a),v!==0&&v!==f.retryLane))throw f.retryLane=v,ns(e,v),Yn(r,e,v),hf;ql(),n=$m(e,n,a)}else e=f.treeContext,je=mi(v.nextSibling),An=n,Ee=!0,_a=null,di=!1,e!==null&&Fp(n,e),n=Ol(n,r),n.flags|=4096;return n}return e=Xi(e.child,{mode:r.mode,children:r.children}),e.ref=n.ref,n.child=e,e.return=n,e}function zl(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function df(e,n,a,r,u){return rs(n),a=qu(e,n,a,r,void 0,u),r=Yu(),e!==null&&!hn?(Zu(e,n,u),Ki(e,n,u)):(Ee&&r&&Cu(n),n.flags|=1,Rn(e,n,a,u),n.child)}function tg(e,n,a,r,u,f){return rs(n),n.updateQueue=null,a=im(n,r,a,u),nm(e),r=Yu(),e!==null&&!hn?(Zu(e,n,f),Ki(e,n,f)):(Ee&&r&&Cu(n),n.flags|=1,Rn(e,n,a,f),n.child)}function eg(e,n,a,r,u){if(rs(n),n.stateNode===null){var f=Gs,v=a.contextType;typeof v=="object"&&v!==null&&(f=Cn(v)),f=new a(r,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=uf,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=r,f.state=n.memoizedState,f.refs={},Bu(n),v=a.contextType,f.context=typeof v=="object"&&v!==null?Cn(v):Gs,f.state=n.memoizedState,v=a.getDerivedStateFromProps,typeof v=="function"&&(cf(n,a,v,r),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(v=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),v!==f.state&&uf.enqueueReplaceState(f,f.state,null),oo(n,r,f,u),ro(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!0}else if(e===null){f=n.stateNode;var b=n.memoizedProps,B=hs(a,b);f.props=B;var $=f.context,ft=a.contextType;v=Gs,typeof ft=="object"&&ft!==null&&(v=Cn(ft));var mt=a.getDerivedStateFromProps;ft=typeof mt=="function"||typeof f.getSnapshotBeforeUpdate=="function",b=n.pendingProps!==b,ft||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(b||$!==v)&&Gm(n,f,r,v),ya=!1;var et=n.memoizedState;f.state=et,oo(n,r,f,u),ro(),$=n.memoizedState,b||et!==$||ya?(typeof mt=="function"&&(cf(n,a,mt,r),$=n.memoizedState),(B=ya||Hm(n,a,B,r,et,$,v))?(ft||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=$),f.props=r,f.state=$,f.context=v,r=B):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{f=n.stateNode,Fu(e,n),v=n.memoizedProps,ft=hs(a,v),f.props=ft,mt=n.pendingProps,et=f.context,$=a.contextType,B=Gs,typeof $=="object"&&$!==null&&(B=Cn($)),b=a.getDerivedStateFromProps,($=typeof b=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(v!==mt||et!==B)&&Gm(n,f,r,B),ya=!1,et=n.memoizedState,f.state=et,oo(n,r,f,u),ro();var ot=n.memoizedState;v!==mt||et!==ot||ya||e!==null&&e.dependencies!==null&&_l(e.dependencies)?(typeof b=="function"&&(cf(n,a,b,r),ot=n.memoizedState),(ft=ya||Hm(n,a,ft,r,et,ot,B)||e!==null&&e.dependencies!==null&&_l(e.dependencies))?($||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(r,ot,B),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(r,ot,B)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||v===e.memoizedProps&&et===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&et===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=ot),f.props=r,f.state=ot,f.context=B,r=ft):(typeof f.componentDidUpdate!="function"||v===e.memoizedProps&&et===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&et===e.memoizedState||(n.flags|=1024),r=!1)}return f=r,zl(e,n),r=(n.flags&128)!==0,f||r?(f=n.stateNode,a=r&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&r?(n.child=us(n,e.child,null,u),n.child=us(n,null,a,u)):Rn(e,n,a,u),n.memoizedState=f.state,e=n.child):e=Ki(e,n,u),e}function ng(e,n,a,r){return as(),n.flags|=256,Rn(e,n,a,r),n.child}var pf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function mf(e){return{baseLanes:e,cachePool:Wp()}}function gf(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=ni),e}function ig(e,n,a){var r=n.pendingProps,u=!1,f=(n.flags&128)!==0,v;if((v=f)||(v=e!==null&&e.memoizedState===null?!1:(rn.current&2)!==0),v&&(u=!0,n.flags&=-129),v=(n.flags&32)!==0,n.flags&=-33,e===null){if(Ee){if(u?Ea(n):Ta(),(e=je)?(e=f0(e,di),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:ga!==null?{id:Ui,overflow:Li}:null,retryLane:536870912,hydrationErrors:null},a=zp(e),a.return=n,n.child=a,An=n,je=null)):e=null,e===null)throw va(n);return Jf(e)?n.lanes=32:n.lanes=536870912,null}var b=r.children;return r=r.fallback,u?(Ta(),u=n.mode,b=Il({mode:"hidden",children:b},u),r=is(r,u,a,null),b.return=n,r.return=n,b.sibling=r,n.child=b,r=n.child,r.memoizedState=mf(a),r.childLanes=gf(e,v,a),n.memoizedState=pf,ho(null,r)):(Ea(n),_f(n,b))}var B=e.memoizedState;if(B!==null&&(b=B.dehydrated,b!==null)){if(f)n.flags&256?(Ea(n),n.flags&=-257,n=vf(e,n,a)):n.memoizedState!==null?(Ta(),n.child=e.child,n.flags|=128,n=null):(Ta(),b=r.fallback,u=n.mode,r=Il({mode:"visible",children:r.children},u),b=is(b,u,a,null),b.flags|=2,r.return=n,b.return=n,r.sibling=b,n.child=r,us(n,e.child,null,a),r=n.child,r.memoizedState=mf(a),r.childLanes=gf(e,v,a),n.memoizedState=pf,n=ho(null,r));else if(Ea(n),Jf(b)){if(v=b.nextSibling&&b.nextSibling.dataset,v)var $=v.dgst;v=$,r=Error(s(419)),r.stack="",r.digest=v,to({value:r,source:null,stack:null}),n=vf(e,n,a)}else if(hn||Ws(e,n,a,!1),v=(a&e.childLanes)!==0,hn||v){if(v=qe,v!==null&&(r=Ds(v,a),r!==0&&r!==B.retryLane))throw B.retryLane=r,ns(e,r),Yn(v,e,r),hf;Qf(b)||ql(),n=vf(e,n,a)}else Qf(b)?(n.flags|=192,n.child=e.child,n=null):(e=B.treeContext,je=mi(b.nextSibling),An=n,Ee=!0,_a=null,di=!1,e!==null&&Fp(n,e),n=_f(n,r.children),n.flags|=4096);return n}return u?(Ta(),b=r.fallback,u=n.mode,B=e.child,$=B.sibling,r=Xi(B,{mode:"hidden",children:r.children}),r.subtreeFlags=B.subtreeFlags&65011712,$!==null?b=Xi($,b):(b=is(b,u,a,null),b.flags|=2),b.return=n,r.return=n,r.sibling=b,n.child=r,ho(null,r),r=n.child,b=e.child.memoizedState,b===null?b=mf(a):(u=b.cachePool,u!==null?(B=un._currentValue,u=u.parent!==B?{parent:B,pool:B}:u):u=Wp(),b={baseLanes:b.baseLanes|a,cachePool:u}),r.memoizedState=b,r.childLanes=gf(e,v,a),n.memoizedState=pf,ho(e.child,r)):(Ea(n),a=e.child,e=a.sibling,a=Xi(a,{mode:"visible",children:r.children}),a.return=n,a.sibling=null,e!==null&&(v=n.deletions,v===null?(n.deletions=[e],n.flags|=16):v.push(e)),n.child=a,n.memoizedState=null,a)}function _f(e,n){return n=Il({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Il(e,n){return e=Jn(22,e,null,n),e.lanes=0,e}function vf(e,n,a){return us(n,e.child,null,a),e=_f(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function ag(e,n,a){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),Lu(e.return,n,a)}function Sf(e,n,a,r,u,f){var v=e.memoizedState;v===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:a,tailMode:u,treeForkCount:f}:(v.isBackwards=n,v.rendering=null,v.renderingStartTime=0,v.last=r,v.tail=a,v.tailMode=u,v.treeForkCount=f)}function sg(e,n,a){var r=n.pendingProps,u=r.revealOrder,f=r.tail;r=r.children;var v=rn.current,b=(v&2)!==0;if(b?(v=v&1|2,n.flags|=128):v&=1,yt(rn,v),Rn(e,n,r,a),r=Ee?$r:0,!b&&e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ag(e,a,n);else if(e.tag===19)ag(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&bl(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Sf(n,!1,u,a,f,r);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&bl(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}Sf(n,!0,a,null,f,r);break;case"together":Sf(n,!1,null,null,void 0,r);break;default:n.memoizedState=null}return n.child}function Ki(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Ca|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Ws(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=Xi(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Xi(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function yf(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&_l(e)))}function HS(e,n,a){switch(n.tag){case 3:wt(n,n.stateNode.containerInfo),Sa(n,un,e.memoizedState.cache),as();break;case 27:case 5:kt(n);break;case 4:wt(n,n.stateNode.containerInfo);break;case 10:Sa(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Xu(n),null;break;case 13:var r=n.memoizedState;if(r!==null)return r.dehydrated!==null?(Ea(n),n.flags|=128,null):(a&n.child.childLanes)!==0?ig(e,n,a):(Ea(n),e=Ki(e,n,a),e!==null?e.sibling:null);Ea(n);break;case 19:var u=(e.flags&128)!==0;if(r=(a&n.childLanes)!==0,r||(Ws(e,n,a,!1),r=(a&n.childLanes)!==0),u){if(r)return sg(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),yt(rn,rn.current),r)break;return null;case 22:return n.lanes=0,Qm(e,n,a,n.pendingProps);case 24:Sa(n,un,e.memoizedState.cache)}return Ki(e,n,a)}function rg(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)hn=!0;else{if(!yf(e,a)&&(n.flags&128)===0)return hn=!1,HS(e,n,a);hn=(e.flags&131072)!==0}else hn=!1,Ee&&(n.flags&1048576)!==0&&Bp(n,$r,n.index);switch(n.lanes=0,n.tag){case 16:t:{var r=n.pendingProps;if(e=ls(n.elementType),n.type=e,typeof e=="function")Tu(e)?(r=hs(e,r),n.tag=1,n=eg(null,n,e,r,a)):(n.tag=0,n=df(null,n,e,r,a));else{if(e!=null){var u=e.$$typeof;if(u===D){n.tag=11,n=Zm(null,n,e,r,a);break t}else if(u===z){n.tag=14,n=jm(null,n,e,r,a);break t}}throw n=ht(e)||e,Error(s(306,n,""))}}return n;case 0:return df(e,n,n.type,n.pendingProps,a);case 1:return r=n.type,u=hs(r,n.pendingProps),eg(e,n,r,u,a);case 3:t:{if(wt(n,n.stateNode.containerInfo),e===null)throw Error(s(387));r=n.pendingProps;var f=n.memoizedState;u=f.element,Fu(e,n),oo(n,r,null,a);var v=n.memoizedState;if(r=v.cache,Sa(n,un,r),r!==f.cache&&Nu(n,[un],a,!0),ro(),r=v.element,f.isDehydrated)if(f={element:r,isDehydrated:!1,cache:v.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=ng(e,n,r,a);break t}else if(r!==u){u=ui(Error(s(424)),n),to(u),n=ng(e,n,r,a);break t}else for(e=n.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,je=mi(e.firstChild),An=n,Ee=!0,_a=null,di=!0,a=Qp(n,null,r,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(as(),r===u){n=Ki(e,n,a);break t}Rn(e,n,r,a)}n=n.child}return n;case 26:return zl(e,n),e===null?(a=_0(n.type,null,n.pendingProps,null))?n.memoizedState=a:Ee||(a=n.type,e=n.pendingProps,r=$l(it.current).createElement(a),r[cn]=n,r[Tn]=e,wn(r,a,e),_t(r),n.stateNode=r):n.memoizedState=_0(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return kt(n),e===null&&Ee&&(r=n.stateNode=p0(n.type,n.pendingProps,it.current),An=n,di=!0,u=je,La(n.type)?($f=u,je=mi(r.firstChild)):je=u),Rn(e,n,n.pendingProps.children,a),zl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Ee&&((u=r=je)&&(r=gy(r,n.type,n.pendingProps,di),r!==null?(n.stateNode=r,An=n,je=mi(r.firstChild),di=!1,u=!0):u=!1),u||va(n)),kt(n),u=n.type,f=n.pendingProps,v=e!==null?e.memoizedProps:null,r=f.children,Zf(u,f)?r=null:v!==null&&Zf(u,v)&&(n.flags|=32),n.memoizedState!==null&&(u=qu(e,n,US,null,null,a),Ro._currentValue=u),zl(e,n),Rn(e,n,r,a),n.child;case 6:return e===null&&Ee&&((e=a=je)&&(a=_y(a,n.pendingProps,di),a!==null?(n.stateNode=a,An=n,je=null,e=!0):e=!1),e||va(n)),null;case 13:return ig(e,n,a);case 4:return wt(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=us(n,null,r,a):Rn(e,n,r,a),n.child;case 11:return Zm(e,n,n.type,n.pendingProps,a);case 7:return Rn(e,n,n.pendingProps,a),n.child;case 8:return Rn(e,n,n.pendingProps.children,a),n.child;case 12:return Rn(e,n,n.pendingProps.children,a),n.child;case 10:return r=n.pendingProps,Sa(n,n.type,r.value),Rn(e,n,r.children,a),n.child;case 9:return u=n.type._context,r=n.pendingProps.children,rs(n),u=Cn(u),r=r(u),n.flags|=1,Rn(e,n,r,a),n.child;case 14:return jm(e,n,n.type,n.pendingProps,a);case 15:return Km(e,n,n.type,n.pendingProps,a);case 19:return sg(e,n,a);case 31:return FS(e,n,a);case 22:return Qm(e,n,a,n.pendingProps);case 24:return rs(n),r=Cn(un),e===null?(u=zu(),u===null&&(u=qe,f=Pu(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:r,cache:u},Bu(n),Sa(n,un,u)):((e.lanes&a)!==0&&(Fu(e,n),oo(n,null,null,a),ro()),u=e.memoizedState,f=n.memoizedState,u.parent!==r?(u={parent:r,cache:r},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Sa(n,un,r)):(r=f.cache,Sa(n,un,r),r!==u.cache&&Nu(n,[un],a,!0))),Rn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function Qi(e){e.flags|=4}function xf(e,n,a,r,u){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(Ng())e.flags|=8192;else throw cs=xl,Iu}else e.flags&=-16777217}function og(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!M0(n))if(Ng())e.flags|=8192;else throw cs=xl,Iu}function Bl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Pe():536870912,e.lanes|=n,ir|=n)}function po(e,n){if(!Ee)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ke(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,r=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,r|=u.subtreeFlags&65011712,r|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,r|=u.subtreeFlags,r|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=r,e.childLanes=a,n}function GS(e,n,a){var r=n.pendingProps;switch(Ru(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ke(n),null;case 1:return Ke(n),null;case 3:return a=n.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),Yi(un),It(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Xs(n)?Qi(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Du())),Ke(n),null;case 26:var u=n.type,f=n.memoizedState;return e===null?(Qi(n),f!==null?(Ke(n),og(n,f)):(Ke(n),xf(n,u,null,r,a))):f?f!==e.memoizedState?(Qi(n),Ke(n),og(n,f)):(Ke(n),n.flags&=-16777217):(e=e.memoizedProps,e!==r&&Qi(n),Ke(n),xf(n,u,e,r,a)),null;case 27:if(de(n),a=it.current,u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==r&&Qi(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return Ke(n),null}e=bt.current,Xs(n)?Hp(n):(e=p0(u,r,a),n.stateNode=e,Qi(n))}return Ke(n),null;case 5:if(de(n),u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==r&&Qi(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return Ke(n),null}if(f=bt.current,Xs(n))Hp(n);else{var v=$l(it.current);switch(f){case 1:f=v.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=v.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=v.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=v.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=v.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof r.is=="string"?v.createElement("select",{is:r.is}):v.createElement("select"),r.multiple?f.multiple=!0:r.size&&(f.size=r.size);break;default:f=typeof r.is=="string"?v.createElement(u,{is:r.is}):v.createElement(u)}}f[cn]=n,f[Tn]=r;t:for(v=n.child;v!==null;){if(v.tag===5||v.tag===6)f.appendChild(v.stateNode);else if(v.tag!==4&&v.tag!==27&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===n)break t;for(;v.sibling===null;){if(v.return===null||v.return===n)break t;v=v.return}v.sibling.return=v.return,v=v.sibling}n.stateNode=f;t:switch(wn(f,u,r),u){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break t;case"img":r=!0;break t;default:r=!1}r&&Qi(n)}}return Ke(n),xf(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==r&&Qi(n);else{if(typeof r!="string"&&n.stateNode===null)throw Error(s(166));if(e=it.current,Xs(n)){if(e=n.stateNode,a=n.memoizedProps,r=null,u=An,u!==null)switch(u.tag){case 27:case 5:r=u.memoizedProps}e[cn]=n,e=!!(e.nodeValue===a||r!==null&&r.suppressHydrationWarning===!0||i0(e.nodeValue,a)),e||va(n,!0)}else e=$l(e).createTextNode(r),e[cn]=n,n.stateNode=e}return Ke(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(r=Xs(n),a!==null){if(e===null){if(!r)throw Error(s(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[cn]=n}else as(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ke(n),e=!1}else a=Du(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(ti(n),n):(ti(n),null);if((n.flags&128)!==0)throw Error(s(558))}return Ke(n),null;case 13:if(r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=Xs(n),r!==null&&r.dehydrated!==null){if(e===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[cn]=n}else as(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ke(n),u=!1}else u=Du(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(ti(n),n):(ti(n),null)}return ti(n),(n.flags&128)!==0?(n.lanes=a,n):(a=r!==null,e=e!==null&&e.memoizedState!==null,a&&(r=n.child,u=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(u=r.alternate.memoizedState.cachePool.pool),f=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(f=r.memoizedState.cachePool.pool),f!==u&&(r.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),Bl(n,n.updateQueue),Ke(n),null);case 4:return It(),e===null&&kf(n.stateNode.containerInfo),Ke(n),null;case 10:return Yi(n.type),Ke(n),null;case 19:if(nt(rn),r=n.memoizedState,r===null)return Ke(n),null;if(u=(n.flags&128)!==0,f=r.rendering,f===null)if(u)po(r,!1);else{if(nn!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=bl(e),f!==null){for(n.flags|=128,po(r,!1),e=f.updateQueue,n.updateQueue=e,Bl(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)Op(a,e),a=a.sibling;return yt(rn,rn.current&1|2),Ee&&Wi(n,r.treeForkCount),n.child}e=e.sibling}r.tail!==null&&E()>kl&&(n.flags|=128,u=!0,po(r,!1),n.lanes=4194304)}else{if(!u)if(e=bl(f),e!==null){if(n.flags|=128,u=!0,e=e.updateQueue,n.updateQueue=e,Bl(n,e),po(r,!0),r.tail===null&&r.tailMode==="hidden"&&!f.alternate&&!Ee)return Ke(n),null}else 2*E()-r.renderingStartTime>kl&&a!==536870912&&(n.flags|=128,u=!0,po(r,!1),n.lanes=4194304);r.isBackwards?(f.sibling=n.child,n.child=f):(e=r.last,e!==null?e.sibling=f:n.child=f,r.last=f)}return r.tail!==null?(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=E(),e.sibling=null,a=rn.current,yt(rn,u?a&1|2:a&1),Ee&&Wi(n,r.treeForkCount),e):(Ke(n),null);case 22:case 23:return ti(n),ku(),r=n.memoizedState!==null,e!==null?e.memoizedState!==null!==r&&(n.flags|=8192):r&&(n.flags|=8192),r?(a&536870912)!==0&&(n.flags&128)===0&&(Ke(n),n.subtreeFlags&6&&(n.flags|=8192)):Ke(n),a=n.updateQueue,a!==null&&Bl(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==a&&(n.flags|=2048),e!==null&&nt(os),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Yi(un),Ke(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function VS(e,n){switch(Ru(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Yi(un),It(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return de(n),null;case 31:if(n.memoizedState!==null){if(ti(n),n.alternate===null)throw Error(s(340));as()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(ti(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));as()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return nt(rn),null;case 4:return It(),null;case 10:return Yi(n.type),null;case 22:case 23:return ti(n),ku(),e!==null&&nt(os),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Yi(un),null;case 25:return null;default:return null}}function lg(e,n){switch(Ru(n),n.tag){case 3:Yi(un),It();break;case 26:case 27:case 5:de(n);break;case 4:It();break;case 31:n.memoizedState!==null&&ti(n);break;case 13:ti(n);break;case 19:nt(rn);break;case 10:Yi(n.type);break;case 22:case 23:ti(n),ku(),e!==null&&nt(os);break;case 24:Yi(un)}}function mo(e,n){try{var a=n.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var u=r.next;a=u;do{if((a.tag&e)===e){r=void 0;var f=a.create,v=a.inst;r=f(),v.destroy=r}a=a.next}while(a!==u)}}catch(b){ze(n,n.return,b)}}function ba(e,n,a){try{var r=n.updateQueue,u=r!==null?r.lastEffect:null;if(u!==null){var f=u.next;r=f;do{if((r.tag&e)===e){var v=r.inst,b=v.destroy;if(b!==void 0){v.destroy=void 0,u=n;var B=a,$=b;try{$()}catch(ft){ze(u,B,ft)}}}r=r.next}while(r!==f)}}catch(ft){ze(n,n.return,ft)}}function cg(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{$p(n,a)}catch(r){ze(e,e.return,r)}}}function ug(e,n,a){a.props=hs(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(r){ze(e,n,r)}}function go(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof a=="function"?e.refCleanup=a(r):a.current=r}}catch(u){ze(e,n,u)}}function Ni(e,n){var a=e.ref,r=e.refCleanup;if(a!==null)if(typeof r=="function")try{r()}catch(u){ze(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){ze(e,n,u)}else a.current=null}function fg(e){var n=e.type,a=e.memoizedProps,r=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&r.focus();break t;case"img":a.src?r.src=a.src:a.srcSet&&(r.srcset=a.srcSet)}}catch(u){ze(e,e.return,u)}}function Mf(e,n,a){try{var r=e.stateNode;uy(r,e.type,a,n),r[Tn]=n}catch(u){ze(e,e.return,u)}}function hg(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&La(e.type)||e.tag===4}function Ef(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||hg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&La(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Tf(e,n,a){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Vi));else if(r!==4&&(r===27&&La(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(Tf(e,n,a),e=e.sibling;e!==null;)Tf(e,n,a),e=e.sibling}function Fl(e,n,a){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(r!==4&&(r===27&&La(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Fl(e,n,a),e=e.sibling;e!==null;)Fl(e,n,a),e=e.sibling}function dg(e){var n=e.stateNode,a=e.memoizedProps;try{for(var r=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);wn(n,r,a),n[cn]=e,n[Tn]=a}catch(f){ze(e,e.return,f)}}var Ji=!1,dn=!1,bf=!1,pg=typeof WeakSet=="function"?WeakSet:Set,xn=null;function kS(e,n){if(e=e.containerInfo,qf=rc,e=Ap(e),_u(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var r=a.getSelection&&a.getSelection();if(r&&r.rangeCount!==0){a=r.anchorNode;var u=r.anchorOffset,f=r.focusNode;r=r.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var v=0,b=-1,B=-1,$=0,ft=0,mt=e,et=null;e:for(;;){for(var ot;mt!==a||u!==0&&mt.nodeType!==3||(b=v+u),mt!==f||r!==0&&mt.nodeType!==3||(B=v+r),mt.nodeType===3&&(v+=mt.nodeValue.length),(ot=mt.firstChild)!==null;)et=mt,mt=ot;for(;;){if(mt===e)break e;if(et===a&&++$===u&&(b=v),et===f&&++ft===r&&(B=v),(ot=mt.nextSibling)!==null)break;mt=et,et=mt.parentNode}mt=ot}a=b===-1||B===-1?null:{start:b,end:B}}else a=null}a=a||{start:0,end:0}}else a=null;for(Yf={focusedElem:e,selectionRange:a},rc=!1,xn=n;xn!==null;)if(n=xn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,xn=e;else for(;xn!==null;){switch(n=xn,f=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)u=e[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,r=a.stateNode;try{var Ft=hs(a.type,u);e=r.getSnapshotBeforeUpdate(Ft,f),r.__reactInternalSnapshotBeforeUpdate=e}catch(te){ze(a,a.return,te)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)Kf(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Kf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,xn=e;break}xn=n.return}}function mg(e,n,a){var r=a.flags;switch(a.tag){case 0:case 11:case 15:ta(e,a),r&4&&mo(5,a);break;case 1:if(ta(e,a),r&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(v){ze(a,a.return,v)}else{var u=hs(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(v){ze(a,a.return,v)}}r&64&&cg(a),r&512&&go(a,a.return);break;case 3:if(ta(e,a),r&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{$p(e,n)}catch(v){ze(a,a.return,v)}}break;case 27:n===null&&r&4&&dg(a);case 26:case 5:ta(e,a),n===null&&r&4&&fg(a),r&512&&go(a,a.return);break;case 12:ta(e,a);break;case 31:ta(e,a),r&4&&vg(e,a);break;case 13:ta(e,a),r&4&&Sg(e,a),r&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=JS.bind(null,a),vy(e,a))));break;case 22:if(r=a.memoizedState!==null||Ji,!r){n=n!==null&&n.memoizedState!==null||dn,u=Ji;var f=dn;Ji=r,(dn=n)&&!f?ea(e,a,(a.subtreeFlags&8772)!==0):ta(e,a),Ji=u,dn=f}break;case 30:break;default:ta(e,a)}}function gg(e){var n=e.alternate;n!==null&&(e.alternate=null,gg(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&C(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Qe=null,kn=!1;function $i(e,n,a){for(a=a.child;a!==null;)_g(e,n,a),a=a.sibling}function _g(e,n,a){if(Ct&&typeof Ct.onCommitFiberUnmount=="function")try{Ct.onCommitFiberUnmount(Et,a)}catch{}switch(a.tag){case 26:dn||Ni(a,n),$i(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:dn||Ni(a,n);var r=Qe,u=kn;La(a.type)&&(Qe=a.stateNode,kn=!1),$i(e,n,a),bo(a.stateNode),Qe=r,kn=u;break;case 5:dn||Ni(a,n);case 6:if(r=Qe,u=kn,Qe=null,$i(e,n,a),Qe=r,kn=u,Qe!==null)if(kn)try{(Qe.nodeType===9?Qe.body:Qe.nodeName==="HTML"?Qe.ownerDocument.body:Qe).removeChild(a.stateNode)}catch(f){ze(a,n,f)}else try{Qe.removeChild(a.stateNode)}catch(f){ze(a,n,f)}break;case 18:Qe!==null&&(kn?(e=Qe,c0(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),fr(e)):c0(Qe,a.stateNode));break;case 4:r=Qe,u=kn,Qe=a.stateNode.containerInfo,kn=!0,$i(e,n,a),Qe=r,kn=u;break;case 0:case 11:case 14:case 15:ba(2,a,n),dn||ba(4,a,n),$i(e,n,a);break;case 1:dn||(Ni(a,n),r=a.stateNode,typeof r.componentWillUnmount=="function"&&ug(a,n,r)),$i(e,n,a);break;case 21:$i(e,n,a);break;case 22:dn=(r=dn)||a.memoizedState!==null,$i(e,n,a),dn=r;break;default:$i(e,n,a)}}function vg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{fr(e)}catch(a){ze(n,n.return,a)}}}function Sg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{fr(e)}catch(a){ze(n,n.return,a)}}function XS(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new pg),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new pg),n;default:throw Error(s(435,e.tag))}}function Hl(e,n){var a=XS(e);n.forEach(function(r){if(!a.has(r)){a.add(r);var u=$S.bind(null,e,r);r.then(u,u)}})}function Xn(e,n){var a=n.deletions;if(a!==null)for(var r=0;r<a.length;r++){var u=a[r],f=e,v=n,b=v;t:for(;b!==null;){switch(b.tag){case 27:if(La(b.type)){Qe=b.stateNode,kn=!1;break t}break;case 5:Qe=b.stateNode,kn=!1;break t;case 3:case 4:Qe=b.stateNode.containerInfo,kn=!0;break t}b=b.return}if(Qe===null)throw Error(s(160));_g(f,v,u),Qe=null,kn=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)yg(n,e),n=n.sibling}var yi=null;function yg(e,n){var a=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Xn(n,e),Wn(e),r&4&&(ba(3,e,e.return),mo(3,e),ba(5,e,e.return));break;case 1:Xn(n,e),Wn(e),r&512&&(dn||a===null||Ni(a,a.return)),r&64&&Ji&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?r:a.concat(r))));break;case 26:var u=yi;if(Xn(n,e),Wn(e),r&512&&(dn||a===null||Ni(a,a.return)),r&4){var f=a!==null?a.memoizedState:null;if(r=e.memoizedState,a===null)if(r===null)if(e.stateNode===null){t:{r=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(r){case"title":f=u.getElementsByTagName("title")[0],(!f||f[Qa]||f[cn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(r),u.head.insertBefore(f,u.querySelector("head > title"))),wn(f,r,a),f[cn]=e,_t(f),r=f;break t;case"link":var v=y0("link","href",u).get(r+(a.href||""));if(v){for(var b=0;b<v.length;b++)if(f=v[b],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){v.splice(b,1);break e}}f=u.createElement(r),wn(f,r,a),u.head.appendChild(f);break;case"meta":if(v=y0("meta","content",u).get(r+(a.content||""))){for(b=0;b<v.length;b++)if(f=v[b],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){v.splice(b,1);break e}}f=u.createElement(r),wn(f,r,a),u.head.appendChild(f);break;default:throw Error(s(468,r))}f[cn]=e,_t(f),r=f}e.stateNode=r}else x0(u,e.type,e.stateNode);else e.stateNode=S0(u,r,e.memoizedProps);else f!==r?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,r===null?x0(u,e.type,e.stateNode):S0(u,r,e.memoizedProps)):r===null&&e.stateNode!==null&&Mf(e,e.memoizedProps,a.memoizedProps)}break;case 27:Xn(n,e),Wn(e),r&512&&(dn||a===null||Ni(a,a.return)),a!==null&&r&4&&Mf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Xn(n,e),Wn(e),r&512&&(dn||a===null||Ni(a,a.return)),e.flags&32){u=e.stateNode;try{Ps(u,"")}catch(Ft){ze(e,e.return,Ft)}}r&4&&e.stateNode!=null&&(u=e.memoizedProps,Mf(e,u,a!==null?a.memoizedProps:u)),r&1024&&(bf=!0);break;case 6:if(Xn(n,e),Wn(e),r&4){if(e.stateNode===null)throw Error(s(162));r=e.memoizedProps,a=e.stateNode;try{a.nodeValue=r}catch(Ft){ze(e,e.return,Ft)}}break;case 3:if(nc=null,u=yi,yi=tc(n.containerInfo),Xn(n,e),yi=u,Wn(e),r&4&&a!==null&&a.memoizedState.isDehydrated)try{fr(n.containerInfo)}catch(Ft){ze(e,e.return,Ft)}bf&&(bf=!1,xg(e));break;case 4:r=yi,yi=tc(e.stateNode.containerInfo),Xn(n,e),Wn(e),yi=r;break;case 12:Xn(n,e),Wn(e);break;case 31:Xn(n,e),Wn(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Hl(e,r)));break;case 13:Xn(n,e),Wn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Vl=E()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Hl(e,r)));break;case 22:u=e.memoizedState!==null;var B=a!==null&&a.memoizedState!==null,$=Ji,ft=dn;if(Ji=$||u,dn=ft||B,Xn(n,e),dn=ft,Ji=$,Wn(e),r&8192)t:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||B||Ji||dn||ds(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){B=a=n;try{if(f=B.stateNode,u)v=f.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none";else{b=B.stateNode;var mt=B.memoizedProps.style,et=mt!=null&&mt.hasOwnProperty("display")?mt.display:null;b.style.display=et==null||typeof et=="boolean"?"":(""+et).trim()}}catch(Ft){ze(B,B.return,Ft)}}}else if(n.tag===6){if(a===null){B=n;try{B.stateNode.nodeValue=u?"":B.memoizedProps}catch(Ft){ze(B,B.return,Ft)}}}else if(n.tag===18){if(a===null){B=n;try{var ot=B.stateNode;u?u0(ot,!0):u0(B.stateNode,!1)}catch(Ft){ze(B,B.return,Ft)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}r&4&&(r=e.updateQueue,r!==null&&(a=r.retryQueue,a!==null&&(r.retryQueue=null,Hl(e,a))));break;case 19:Xn(n,e),Wn(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Hl(e,r)));break;case 30:break;case 21:break;default:Xn(n,e),Wn(e)}}function Wn(e){var n=e.flags;if(n&2){try{for(var a,r=e.return;r!==null;){if(hg(r)){a=r;break}r=r.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,f=Ef(e);Fl(e,f,u);break;case 5:var v=a.stateNode;a.flags&32&&(Ps(v,""),a.flags&=-33);var b=Ef(e);Fl(e,b,v);break;case 3:case 4:var B=a.stateNode.containerInfo,$=Ef(e);Tf(e,$,B);break;default:throw Error(s(161))}}catch(ft){ze(e,e.return,ft)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function xg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;xg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function ta(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)mg(e,n.alternate,n),n=n.sibling}function ds(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:ba(4,n,n.return),ds(n);break;case 1:Ni(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&ug(n,n.return,a),ds(n);break;case 27:bo(n.stateNode);case 26:case 5:Ni(n,n.return),ds(n);break;case 22:n.memoizedState===null&&ds(n);break;case 30:ds(n);break;default:ds(n)}e=e.sibling}}function ea(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var r=n.alternate,u=e,f=n,v=f.flags;switch(f.tag){case 0:case 11:case 15:ea(u,f,a),mo(4,f);break;case 1:if(ea(u,f,a),r=f,u=r.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch($){ze(r,r.return,$)}if(r=f,u=r.updateQueue,u!==null){var b=r.stateNode;try{var B=u.shared.hiddenCallbacks;if(B!==null)for(u.shared.hiddenCallbacks=null,u=0;u<B.length;u++)Jp(B[u],b)}catch($){ze(r,r.return,$)}}a&&v&64&&cg(f),go(f,f.return);break;case 27:dg(f);case 26:case 5:ea(u,f,a),a&&r===null&&v&4&&fg(f),go(f,f.return);break;case 12:ea(u,f,a);break;case 31:ea(u,f,a),a&&v&4&&vg(u,f);break;case 13:ea(u,f,a),a&&v&4&&Sg(u,f);break;case 22:f.memoizedState===null&&ea(u,f,a),go(f,f.return);break;case 30:break;default:ea(u,f,a)}n=n.sibling}}function Af(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&eo(a))}function Cf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&eo(e))}function xi(e,n,a,r){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Mg(e,n,a,r),n=n.sibling}function Mg(e,n,a,r){var u=n.flags;switch(n.tag){case 0:case 11:case 15:xi(e,n,a,r),u&2048&&mo(9,n);break;case 1:xi(e,n,a,r);break;case 3:xi(e,n,a,r),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&eo(e)));break;case 12:if(u&2048){xi(e,n,a,r),e=n.stateNode;try{var f=n.memoizedProps,v=f.id,b=f.onPostCommit;typeof b=="function"&&b(v,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(B){ze(n,n.return,B)}}else xi(e,n,a,r);break;case 31:xi(e,n,a,r);break;case 13:xi(e,n,a,r);break;case 23:break;case 22:f=n.stateNode,v=n.alternate,n.memoizedState!==null?f._visibility&2?xi(e,n,a,r):_o(e,n):f._visibility&2?xi(e,n,a,r):(f._visibility|=2,tr(e,n,a,r,(n.subtreeFlags&10256)!==0||!1)),u&2048&&Af(v,n);break;case 24:xi(e,n,a,r),u&2048&&Cf(n.alternate,n);break;default:xi(e,n,a,r)}}function tr(e,n,a,r,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=e,v=n,b=a,B=r,$=v.flags;switch(v.tag){case 0:case 11:case 15:tr(f,v,b,B,u),mo(8,v);break;case 23:break;case 22:var ft=v.stateNode;v.memoizedState!==null?ft._visibility&2?tr(f,v,b,B,u):_o(f,v):(ft._visibility|=2,tr(f,v,b,B,u)),u&&$&2048&&Af(v.alternate,v);break;case 24:tr(f,v,b,B,u),u&&$&2048&&Cf(v.alternate,v);break;default:tr(f,v,b,B,u)}n=n.sibling}}function _o(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,r=n,u=r.flags;switch(r.tag){case 22:_o(a,r),u&2048&&Af(r.alternate,r);break;case 24:_o(a,r),u&2048&&Cf(r.alternate,r);break;default:_o(a,r)}n=n.sibling}}var vo=8192;function er(e,n,a){if(e.subtreeFlags&vo)for(e=e.child;e!==null;)Eg(e,n,a),e=e.sibling}function Eg(e,n,a){switch(e.tag){case 26:er(e,n,a),e.flags&vo&&e.memoizedState!==null&&Dy(a,yi,e.memoizedState,e.memoizedProps);break;case 5:er(e,n,a);break;case 3:case 4:var r=yi;yi=tc(e.stateNode.containerInfo),er(e,n,a),yi=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=vo,vo=16777216,er(e,n,a),vo=r):er(e,n,a));break;default:er(e,n,a)}}function Tg(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function So(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];xn=r,Ag(r,e)}Tg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)bg(e),e=e.sibling}function bg(e){switch(e.tag){case 0:case 11:case 15:So(e),e.flags&2048&&ba(9,e,e.return);break;case 3:So(e);break;case 12:So(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Gl(e)):So(e);break;default:So(e)}}function Gl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];xn=r,Ag(r,e)}Tg(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:ba(8,n,n.return),Gl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Gl(n));break;default:Gl(n)}e=e.sibling}}function Ag(e,n){for(;xn!==null;){var a=xn;switch(a.tag){case 0:case 11:case 15:ba(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var r=a.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:eo(a.memoizedState.cache)}if(r=a.child,r!==null)r.return=a,xn=r;else t:for(a=e;xn!==null;){r=xn;var u=r.sibling,f=r.return;if(gg(r),r===a){xn=null;break t}if(u!==null){u.return=f,xn=u;break t}xn=f}}}var WS={getCacheForType:function(e){var n=Cn(un),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return Cn(un).controller.signal}},qS=typeof WeakMap=="function"?WeakMap:Map,De=0,qe=null,ge=null,ye=0,Oe=0,ei=null,Aa=!1,nr=!1,Rf=!1,na=0,nn=0,Ca=0,ps=0,wf=0,ni=0,ir=0,yo=null,qn=null,Df=!1,Vl=0,Cg=0,kl=1/0,Xl=null,Ra=null,gn=0,wa=null,ar=null,ia=0,Uf=0,Lf=null,Rg=null,xo=0,Nf=null;function ii(){return(De&2)!==0&&ye!==0?ye&-ye:O.T!==null?Ff():Ka()}function wg(){if(ni===0)if((ye&536870912)===0||Ee){var e=Rt;Rt<<=1,(Rt&3932160)===0&&(Rt=262144),ni=e}else ni=536870912;return e=$n.current,e!==null&&(e.flags|=32),ni}function Yn(e,n,a){(e===qe&&(Oe===2||Oe===9)||e.cancelPendingCommit!==null)&&(sr(e,0),Da(e,ye,ni,!1)),Pn(e,a),((De&2)===0||e!==qe)&&(e===qe&&((De&2)===0&&(ps|=a),nn===4&&Da(e,ye,ni,!1)),Pi(e))}function Dg(e,n,a){if((De&6)!==0)throw Error(s(327));var r=!a&&(n&127)===0&&(n&e.expiredLanes)===0||Bt(e,n),u=r?jS(e,n):Of(e,n,!0),f=r;do{if(u===0){nr&&!r&&Da(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!YS(a)){u=Of(e,n,!1),f=!1;continue}if(u===2){if(f=n,e.errorRecoveryDisabledLanes&f)var v=0;else v=e.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){n=v;t:{var b=e;u=yo;var B=b.current.memoizedState.isDehydrated;if(B&&(sr(b,v).flags|=256),v=Of(b,v,!1),v!==2){if(Rf&&!B){b.errorRecoveryDisabledLanes|=f,ps|=f,u=4;break t}f=qn,qn=u,f!==null&&(qn===null?qn=f:qn.push.apply(qn,f))}u=v}if(f=!1,u!==2)continue}}if(u===1){sr(e,0),Da(e,n,0,!0);break}t:{switch(r=e,f=u,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Da(r,n,ni,!Aa);break t;case 2:qn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=Vl+300-E(),10<u)){if(Da(r,n,ni,!Aa),gt(r,0,!0)!==0)break t;ia=n,r.timeoutHandle=o0(Ug.bind(null,r,a,qn,Xl,Df,n,ni,ps,ir,Aa,f,"Throttled",-0,0),u);break t}Ug(r,a,qn,Xl,Df,n,ni,ps,ir,Aa,f,null,-0,0)}}break}while(!0);Pi(e)}function Ug(e,n,a,r,u,f,v,b,B,$,ft,mt,et,ot){if(e.timeoutHandle=-1,mt=n.subtreeFlags,mt&8192||(mt&16785408)===16785408){mt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Vi},Eg(n,f,mt);var Ft=(f&62914560)===f?Vl-E():(f&4194048)===f?Cg-E():0;if(Ft=Uy(mt,Ft),Ft!==null){ia=f,e.cancelPendingCommit=Ft(Fg.bind(null,e,n,f,a,r,u,v,b,B,ft,mt,null,et,ot)),Da(e,f,v,!$);return}}Fg(e,n,f,a,r,u,v,b,B)}function YS(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var r=0;r<a.length;r++){var u=a[r],f=u.getSnapshot;u=u.value;try{if(!Qn(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Da(e,n,a,r){n&=~wf,n&=~ps,e.suspendedLanes|=n,e.pingedLanes&=~n,r&&(e.warmLanes|=n),r=e.expirationTimes;for(var u=n;0<u;){var f=31-Ot(u),v=1<<f;r[f]=-1,u&=~v}a!==0&&Gr(e,a,n)}function Wl(){return(De&6)===0?(Mo(0),!1):!0}function Pf(){if(ge!==null){if(Oe===0)var e=ge.return;else e=ge,qi=ss=null,ju(e),js=null,io=0,e=ge;for(;e!==null;)lg(e.alternate,e),e=e.return;ge=null}}function sr(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,dy(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),ia=0,Pf(),qe=e,ge=a=Xi(e.current,null),ye=n,Oe=0,ei=null,Aa=!1,nr=Bt(e,n),Rf=!1,ir=ni=wf=ps=Ca=nn=0,qn=yo=null,Df=!1,(n&8)!==0&&(n|=n&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=n;0<r;){var u=31-Ot(r),f=1<<u;n|=e[u],r&=~f}return na=n,hl(),a}function Lg(e,n){le=null,O.H=fo,n===Zs||n===yl?(n=Zp(),Oe=3):n===Iu?(n=Zp(),Oe=4):Oe=n===hf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ei=n,ge===null&&(nn=1,Pl(e,ui(n,e.current)))}function Ng(){var e=$n.current;return e===null?!0:(ye&4194048)===ye?pi===null:(ye&62914560)===ye||(ye&536870912)!==0?e===pi:!1}function Pg(){var e=O.H;return O.H=fo,e===null?fo:e}function Og(){var e=O.A;return O.A=WS,e}function ql(){nn=4,Aa||(ye&4194048)!==ye&&$n.current!==null||(nr=!0),(Ca&134217727)===0&&(ps&134217727)===0||qe===null||Da(qe,ye,ni,!1)}function Of(e,n,a){var r=De;De|=2;var u=Pg(),f=Og();(qe!==e||ye!==n)&&(Xl=null,sr(e,n)),n=!1;var v=nn;t:do try{if(Oe!==0&&ge!==null){var b=ge,B=ei;switch(Oe){case 8:Pf(),v=6;break t;case 3:case 2:case 9:case 6:$n.current===null&&(n=!0);var $=Oe;if(Oe=0,ei=null,rr(e,b,B,$),a&&nr){v=0;break t}break;default:$=Oe,Oe=0,ei=null,rr(e,b,B,$)}}ZS(),v=nn;break}catch(ft){Lg(e,ft)}while(!0);return n&&e.shellSuspendCounter++,qi=ss=null,De=r,O.H=u,O.A=f,ge===null&&(qe=null,ye=0,hl()),v}function ZS(){for(;ge!==null;)zg(ge)}function jS(e,n){var a=De;De|=2;var r=Pg(),u=Og();qe!==e||ye!==n?(Xl=null,kl=E()+500,sr(e,n)):nr=Bt(e,n);t:do try{if(Oe!==0&&ge!==null){n=ge;var f=ei;e:switch(Oe){case 1:Oe=0,ei=null,rr(e,n,f,1);break;case 2:case 9:if(qp(f)){Oe=0,ei=null,Ig(n);break}n=function(){Oe!==2&&Oe!==9||qe!==e||(Oe=7),Pi(e)},f.then(n,n);break t;case 3:Oe=7;break t;case 4:Oe=5;break t;case 7:qp(f)?(Oe=0,ei=null,Ig(n)):(Oe=0,ei=null,rr(e,n,f,7));break;case 5:var v=null;switch(ge.tag){case 26:v=ge.memoizedState;case 5:case 27:var b=ge;if(v?M0(v):b.stateNode.complete){Oe=0,ei=null;var B=b.sibling;if(B!==null)ge=B;else{var $=b.return;$!==null?(ge=$,Yl($)):ge=null}break e}}Oe=0,ei=null,rr(e,n,f,5);break;case 6:Oe=0,ei=null,rr(e,n,f,6);break;case 8:Pf(),nn=6;break t;default:throw Error(s(462))}}KS();break}catch(ft){Lg(e,ft)}while(!0);return qi=ss=null,O.H=r,O.A=u,De=a,ge!==null?0:(qe=null,ye=0,hl(),nn)}function KS(){for(;ge!==null&&!$e();)zg(ge)}function zg(e){var n=rg(e.alternate,e,na);e.memoizedProps=e.pendingProps,n===null?Yl(e):ge=n}function Ig(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=tg(a,n,n.pendingProps,n.type,void 0,ye);break;case 11:n=tg(a,n,n.pendingProps,n.type.render,n.ref,ye);break;case 5:ju(n);default:lg(a,n),n=ge=Op(n,na),n=rg(a,n,na)}e.memoizedProps=e.pendingProps,n===null?Yl(e):ge=n}function rr(e,n,a,r){qi=ss=null,ju(n),js=null,io=0;var u=n.return;try{if(BS(e,u,n,a,ye)){nn=1,Pl(e,ui(a,e.current)),ge=null;return}}catch(f){if(u!==null)throw ge=u,f;nn=1,Pl(e,ui(a,e.current)),ge=null;return}n.flags&32768?(Ee||r===1?e=!0:nr||(ye&536870912)!==0?e=!1:(Aa=e=!0,(r===2||r===9||r===3||r===6)&&(r=$n.current,r!==null&&r.tag===13&&(r.flags|=16384))),Bg(n,e)):Yl(n)}function Yl(e){var n=e;do{if((n.flags&32768)!==0){Bg(n,Aa);return}e=n.return;var a=GS(n.alternate,n,na);if(a!==null){ge=a;return}if(n=n.sibling,n!==null){ge=n;return}ge=n=e}while(n!==null);nn===0&&(nn=5)}function Bg(e,n){do{var a=VS(e.alternate,e);if(a!==null){a.flags&=32767,ge=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){ge=e;return}ge=e=a}while(e!==null);nn=6,ge=null}function Fg(e,n,a,r,u,f,v,b,B){e.cancelPendingCommit=null;do Zl();while(gn!==0);if((De&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=Mu,li(e,a,f,v,b,B),e===qe&&(ge=qe=null,ye=0),ar=n,wa=e,ia=a,Uf=f,Lf=u,Rg=r,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,ty(ut,function(){return Xg(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||r){r=O.T,O.T=null,u=Q.p,Q.p=2,v=De,De|=4;try{kS(e,n,a)}finally{De=v,Q.p=u,O.T=r}}gn=1,Hg(),Gg(),Vg()}}function Hg(){if(gn===1){gn=0;var e=wa,n=ar,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=O.T,O.T=null;var r=Q.p;Q.p=2;var u=De;De|=4;try{yg(n,e);var f=Yf,v=Ap(e.containerInfo),b=f.focusedElem,B=f.selectionRange;if(v!==b&&b&&b.ownerDocument&&bp(b.ownerDocument.documentElement,b)){if(B!==null&&_u(b)){var $=B.start,ft=B.end;if(ft===void 0&&(ft=$),"selectionStart"in b)b.selectionStart=$,b.selectionEnd=Math.min(ft,b.value.length);else{var mt=b.ownerDocument||document,et=mt&&mt.defaultView||window;if(et.getSelection){var ot=et.getSelection(),Ft=b.textContent.length,te=Math.min(B.start,Ft),He=B.end===void 0?te:Math.min(B.end,Ft);!ot.extend&&te>He&&(v=He,He=te,te=v);var Y=Tp(b,te),k=Tp(b,He);if(Y&&k&&(ot.rangeCount!==1||ot.anchorNode!==Y.node||ot.anchorOffset!==Y.offset||ot.focusNode!==k.node||ot.focusOffset!==k.offset)){var J=mt.createRange();J.setStart(Y.node,Y.offset),ot.removeAllRanges(),te>He?(ot.addRange(J),ot.extend(k.node,k.offset)):(J.setEnd(k.node,k.offset),ot.addRange(J))}}}}for(mt=[],ot=b;ot=ot.parentNode;)ot.nodeType===1&&mt.push({element:ot,left:ot.scrollLeft,top:ot.scrollTop});for(typeof b.focus=="function"&&b.focus(),b=0;b<mt.length;b++){var pt=mt[b];pt.element.scrollLeft=pt.left,pt.element.scrollTop=pt.top}}rc=!!qf,Yf=qf=null}finally{De=u,Q.p=r,O.T=a}}e.current=n,gn=2}}function Gg(){if(gn===2){gn=0;var e=wa,n=ar,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=O.T,O.T=null;var r=Q.p;Q.p=2;var u=De;De|=4;try{mg(e,n.alternate,n)}finally{De=u,Q.p=r,O.T=a}}gn=3}}function Vg(){if(gn===4||gn===3){gn=0,U();var e=wa,n=ar,a=ia,r=Rg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?gn=5:(gn=0,ar=wa=null,kg(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(Ra=null),Ls(a),n=n.stateNode,Ct&&typeof Ct.onCommitFiberRoot=="function")try{Ct.onCommitFiberRoot(Et,n,void 0,(n.current.flags&128)===128)}catch{}if(r!==null){n=O.T,u=Q.p,Q.p=2,O.T=null;try{for(var f=e.onRecoverableError,v=0;v<r.length;v++){var b=r[v];f(b.value,{componentStack:b.stack})}}finally{O.T=n,Q.p=u}}(ia&3)!==0&&Zl(),Pi(e),u=e.pendingLanes,(a&261930)!==0&&(u&42)!==0?e===Nf?xo++:(xo=0,Nf=e):xo=0,Mo(0)}}function kg(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,eo(n)))}function Zl(){return Hg(),Gg(),Vg(),Xg()}function Xg(){if(gn!==5)return!1;var e=wa,n=Uf;Uf=0;var a=Ls(ia),r=O.T,u=Q.p;try{Q.p=32>a?32:a,O.T=null,a=Lf,Lf=null;var f=wa,v=ia;if(gn=0,ar=wa=null,ia=0,(De&6)!==0)throw Error(s(331));var b=De;if(De|=4,bg(f.current),Mg(f,f.current,v,a),De=b,Mo(0,!1),Ct&&typeof Ct.onPostCommitFiberRoot=="function")try{Ct.onPostCommitFiberRoot(Et,f)}catch{}return!0}finally{Q.p=u,O.T=r,kg(e,n)}}function Wg(e,n,a){n=ui(a,n),n=ff(e.stateNode,n,2),e=Ma(e,n,2),e!==null&&(Pn(e,2),Pi(e))}function ze(e,n,a){if(e.tag===3)Wg(e,e,a);else for(;n!==null;){if(n.tag===3){Wg(n,e,a);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ra===null||!Ra.has(r))){e=ui(a,e),a=qm(2),r=Ma(n,a,2),r!==null&&(Ym(a,r,n,e),Pn(r,2),Pi(r));break}}n=n.return}}function zf(e,n,a){var r=e.pingCache;if(r===null){r=e.pingCache=new qS;var u=new Set;r.set(n,u)}else u=r.get(n),u===void 0&&(u=new Set,r.set(n,u));u.has(a)||(Rf=!0,u.add(a),e=QS.bind(null,e,n,a),n.then(e,e))}function QS(e,n,a){var r=e.pingCache;r!==null&&r.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,qe===e&&(ye&a)===a&&(nn===4||nn===3&&(ye&62914560)===ye&&300>E()-Vl?(De&2)===0&&sr(e,0):wf|=a,ir===ye&&(ir=0)),Pi(e)}function qg(e,n){n===0&&(n=Pe()),e=ns(e,n),e!==null&&(Pn(e,n),Pi(e))}function JS(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),qg(e,a)}function $S(e,n){var a=0;switch(e.tag){case 31:case 13:var r=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(n),qg(e,a)}function ty(e,n){return se(e,n)}var jl=null,or=null,If=!1,Kl=!1,Bf=!1,Ua=0;function Pi(e){e!==or&&e.next===null&&(or===null?jl=or=e:or=or.next=e),Kl=!0,If||(If=!0,ny())}function Mo(e,n){if(!Bf&&Kl){Bf=!0;do for(var a=!1,r=jl;r!==null;){if(e!==0){var u=r.pendingLanes;if(u===0)var f=0;else{var v=r.suspendedLanes,b=r.pingedLanes;f=(1<<31-Ot(42|e)+1)-1,f&=u&~(v&~b),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,Kg(r,f))}else f=ye,f=gt(r,r===qe?f:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(f&3)===0||Bt(r,f)||(a=!0,Kg(r,f));r=r.next}while(a);Bf=!1}}function ey(){Yg()}function Yg(){Kl=If=!1;var e=0;Ua!==0&&hy()&&(e=Ua);for(var n=E(),a=null,r=jl;r!==null;){var u=r.next,f=Zg(r,n);f===0?(r.next=null,a===null?jl=u:a.next=u,u===null&&(or=a)):(a=r,(e!==0||(f&3)!==0)&&(Kl=!0)),r=u}gn!==0&&gn!==5||Mo(e),Ua!==0&&(Ua=0)}function Zg(e,n){for(var a=e.suspendedLanes,r=e.pingedLanes,u=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var v=31-Ot(f),b=1<<v,B=u[v];B===-1?((b&a)===0||(b&r)!==0)&&(u[v]=ie(b,n)):B<=n&&(e.expiredLanes|=b),f&=~b}if(n=qe,a=ye,a=gt(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,a===0||e===n&&(Oe===2||Oe===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&tn(r),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Bt(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(r!==null&&tn(r),Ls(a)){case 2:case 8:a=St;break;case 32:a=ut;break;case 268435456:a=At;break;default:a=ut}return r=jg.bind(null,e),a=se(a,r),e.callbackPriority=n,e.callbackNode=a,n}return r!==null&&r!==null&&tn(r),e.callbackPriority=2,e.callbackNode=null,2}function jg(e,n){if(gn!==0&&gn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Zl()&&e.callbackNode!==a)return null;var r=ye;return r=gt(e,e===qe?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(Dg(e,r,n),Zg(e,E()),e.callbackNode!=null&&e.callbackNode===a?jg.bind(null,e):null)}function Kg(e,n){if(Zl())return null;Dg(e,n,!0)}function ny(){py(function(){(De&6)!==0?se(dt,ey):Yg()})}function Ff(){if(Ua===0){var e=qs;e===0&&(e=Tt,Tt<<=1,(Tt&261888)===0&&(Tt=256)),Ua=e}return Ua}function Qg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:al(""+e)}function Jg(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function iy(e,n,a,r,u){if(n==="submit"&&a&&a.stateNode===u){var f=Qg((u[Tn]||null).action),v=r.submitter;v&&(n=(n=v[Tn]||null)?Qg(n.formAction):v.getAttribute("formAction"),n!==null&&(f=n,v=null));var b=new ll("action","action",null,r,u);e.push({event:b,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(Ua!==0){var B=v?Jg(u,v):new FormData(u);sf(a,{pending:!0,data:B,method:u.method,action:f},null,B)}}else typeof f=="function"&&(b.preventDefault(),B=v?Jg(u,v):new FormData(u),sf(a,{pending:!0,data:B,method:u.method,action:f},f,B))},currentTarget:u}]})}}for(var Hf=0;Hf<xu.length;Hf++){var Gf=xu[Hf],ay=Gf.toLowerCase(),sy=Gf[0].toUpperCase()+Gf.slice(1);Si(ay,"on"+sy)}Si(wp,"onAnimationEnd"),Si(Dp,"onAnimationIteration"),Si(Up,"onAnimationStart"),Si("dblclick","onDoubleClick"),Si("focusin","onFocus"),Si("focusout","onBlur"),Si(xS,"onTransitionRun"),Si(MS,"onTransitionStart"),Si(ES,"onTransitionCancel"),Si(Lp,"onTransitionEnd"),Kt("onMouseEnter",["mouseout","mouseover"]),Kt("onMouseLeave",["mouseout","mouseover"]),Kt("onPointerEnter",["pointerout","pointerover"]),Kt("onPointerLeave",["pointerout","pointerover"]),Pt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Pt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Pt("onBeforeInput",["compositionend","keypress","textInput","paste"]),Pt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Pt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Pt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Eo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ry=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Eo));function $g(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var r=e[a],u=r.event;r=r.listeners;t:{var f=void 0;if(n)for(var v=r.length-1;0<=v;v--){var b=r[v],B=b.instance,$=b.currentTarget;if(b=b.listener,B!==f&&u.isPropagationStopped())break t;f=b,u.currentTarget=$;try{f(u)}catch(ft){fl(ft)}u.currentTarget=null,f=B}else for(v=0;v<r.length;v++){if(b=r[v],B=b.instance,$=b.currentTarget,b=b.listener,B!==f&&u.isPropagationStopped())break t;f=b,u.currentTarget=$;try{f(u)}catch(ft){fl(ft)}u.currentTarget=null,f=B}}}}function _e(e,n){var a=n[kr];a===void 0&&(a=n[kr]=new Set);var r=e+"__bubble";a.has(r)||(t0(n,e,2,!1),a.add(r))}function Vf(e,n,a){var r=0;n&&(r|=4),t0(a,e,r,n)}var Ql="_reactListening"+Math.random().toString(36).slice(2);function kf(e){if(!e[Ql]){e[Ql]=!0,Ut.forEach(function(a){a!=="selectionchange"&&(ry.has(a)||Vf(a,!1,e),Vf(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Ql]||(n[Ql]=!0,Vf("selectionchange",!1,n))}}function t0(e,n,a,r){switch(w0(n)){case 2:var u=Py;break;case 8:u=Oy;break;default:u=ah}a=u.bind(null,n,a,e),u=void 0,!lu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),r?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function Xf(e,n,a,r,u){var f=r;if((n&1)===0&&(n&2)===0&&r!==null)t:for(;;){if(r===null)return;var v=r.tag;if(v===3||v===4){var b=r.stateNode.containerInfo;if(b===u)break;if(v===4)for(v=r.return;v!==null;){var B=v.tag;if((B===3||B===4)&&v.stateNode.containerInfo===u)return;v=v.return}for(;b!==null;){if(v=q(b),v===null)return;if(B=v.tag,B===5||B===6||B===26||B===27){r=f=v;continue t}b=b.parentNode}}r=r.return}sp(function(){var $=f,ft=ru(a),mt=[];t:{var et=Np.get(e);if(et!==void 0){var ot=ll,Ft=e;switch(e){case"keypress":if(rl(a)===0)break t;case"keydown":case"keyup":ot=$v;break;case"focusin":Ft="focus",ot=hu;break;case"focusout":Ft="blur",ot=hu;break;case"beforeblur":case"afterblur":ot=hu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ot=lp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ot=Gv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ot=nS;break;case wp:case Dp:case Up:ot=Xv;break;case Lp:ot=aS;break;case"scroll":case"scrollend":ot=Fv;break;case"wheel":ot=rS;break;case"copy":case"cut":case"paste":ot=qv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ot=up;break;case"toggle":case"beforetoggle":ot=lS}var te=(n&4)!==0,He=!te&&(e==="scroll"||e==="scrollend"),Y=te?et!==null?et+"Capture":null:et;te=[];for(var k=$,J;k!==null;){var pt=k;if(J=pt.stateNode,pt=pt.tag,pt!==5&&pt!==26&&pt!==27||J===null||Y===null||(pt=Xr(k,Y),pt!=null&&te.push(To(k,pt,J))),He)break;k=k.return}0<te.length&&(et=new ot(et,Ft,null,a,ft),mt.push({event:et,listeners:te}))}}if((n&7)===0){t:{if(et=e==="mouseover"||e==="pointerover",ot=e==="mouseout"||e==="pointerout",et&&a!==su&&(Ft=a.relatedTarget||a.fromElement)&&(q(Ft)||Ft[pa]))break t;if((ot||et)&&(et=ft.window===ft?ft:(et=ft.ownerDocument)?et.defaultView||et.parentWindow:window,ot?(Ft=a.relatedTarget||a.toElement,ot=$,Ft=Ft?q(Ft):null,Ft!==null&&(He=c(Ft),te=Ft.tag,Ft!==He||te!==5&&te!==27&&te!==6)&&(Ft=null)):(ot=null,Ft=$),ot!==Ft)){if(te=lp,pt="onMouseLeave",Y="onMouseEnter",k="mouse",(e==="pointerout"||e==="pointerover")&&(te=up,pt="onPointerLeave",Y="onPointerEnter",k="pointer"),He=ot==null?et:st(ot),J=Ft==null?et:st(Ft),et=new te(pt,k+"leave",ot,a,ft),et.target=He,et.relatedTarget=J,pt=null,q(ft)===$&&(te=new te(Y,k+"enter",Ft,a,ft),te.target=J,te.relatedTarget=He,pt=te),He=pt,ot&&Ft)e:{for(te=oy,Y=ot,k=Ft,J=0,pt=Y;pt;pt=te(pt))J++;pt=0;for(var Jt=k;Jt;Jt=te(Jt))pt++;for(;0<J-pt;)Y=te(Y),J--;for(;0<pt-J;)k=te(k),pt--;for(;J--;){if(Y===k||k!==null&&Y===k.alternate){te=Y;break e}Y=te(Y),k=te(k)}te=null}else te=null;ot!==null&&e0(mt,et,ot,te,!1),Ft!==null&&He!==null&&e0(mt,He,Ft,te,!0)}}t:{if(et=$?st($):window,ot=et.nodeName&&et.nodeName.toLowerCase(),ot==="select"||ot==="input"&&et.type==="file")var Ce=vp;else if(gp(et))if(Sp)Ce=vS;else{Ce=gS;var Wt=mS}else ot=et.nodeName,!ot||ot.toLowerCase()!=="input"||et.type!=="checkbox"&&et.type!=="radio"?$&&au($.elementType)&&(Ce=vp):Ce=_S;if(Ce&&(Ce=Ce(e,$))){_p(mt,Ce,a,ft);break t}Wt&&Wt(e,et,$),e==="focusout"&&$&&et.type==="number"&&$.memoizedProps.value!=null&&mn(et,"number",et.value)}switch(Wt=$?st($):window,e){case"focusin":(gp(Wt)||Wt.contentEditable==="true")&&(Bs=Wt,vu=$,Jr=null);break;case"focusout":Jr=vu=Bs=null;break;case"mousedown":Su=!0;break;case"contextmenu":case"mouseup":case"dragend":Su=!1,Cp(mt,a,ft);break;case"selectionchange":if(yS)break;case"keydown":case"keyup":Cp(mt,a,ft)}var ce;if(pu)t:{switch(e){case"compositionstart":var xe="onCompositionStart";break t;case"compositionend":xe="onCompositionEnd";break t;case"compositionupdate":xe="onCompositionUpdate";break t}xe=void 0}else Is?pp(e,a)&&(xe="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(xe="onCompositionStart");xe&&(fp&&a.locale!=="ko"&&(Is||xe!=="onCompositionStart"?xe==="onCompositionEnd"&&Is&&(ce=rp()):(ma=ft,cu="value"in ma?ma.value:ma.textContent,Is=!0)),Wt=Jl($,xe),0<Wt.length&&(xe=new cp(xe,e,null,a,ft),mt.push({event:xe,listeners:Wt}),ce?xe.data=ce:(ce=mp(a),ce!==null&&(xe.data=ce)))),(ce=uS?fS(e,a):hS(e,a))&&(xe=Jl($,"onBeforeInput"),0<xe.length&&(Wt=new cp("onBeforeInput","beforeinput",null,a,ft),mt.push({event:Wt,listeners:xe}),Wt.data=ce)),iy(mt,e,$,a,ft)}$g(mt,n)})}function To(e,n,a){return{instance:e,listener:n,currentTarget:a}}function Jl(e,n){for(var a=n+"Capture",r=[];e!==null;){var u=e,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=Xr(e,a),u!=null&&r.unshift(To(e,u,f)),u=Xr(e,n),u!=null&&r.push(To(e,u,f))),e.tag===3)return r;e=e.return}return[]}function oy(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function e0(e,n,a,r,u){for(var f=n._reactName,v=[];a!==null&&a!==r;){var b=a,B=b.alternate,$=b.stateNode;if(b=b.tag,B!==null&&B===r)break;b!==5&&b!==26&&b!==27||$===null||(B=$,u?($=Xr(a,f),$!=null&&v.unshift(To(a,$,B))):u||($=Xr(a,f),$!=null&&v.push(To(a,$,B)))),a=a.return}v.length!==0&&e.push({event:n,listeners:v})}var ly=/\r\n?/g,cy=/\u0000|\uFFFD/g;function n0(e){return(typeof e=="string"?e:""+e).replace(ly,`
`).replace(cy,"")}function i0(e,n){return n=n0(n),n0(e)===n}function Fe(e,n,a,r,u,f){switch(a){case"children":typeof r=="string"?n==="body"||n==="textarea"&&r===""||Ps(e,r):(typeof r=="number"||typeof r=="bigint")&&n!=="body"&&Ps(e,""+r);break;case"className":Ne(e,"class",r);break;case"tabIndex":Ne(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":Ne(e,a,r);break;case"style":ip(e,r,f);break;case"data":if(n!=="object"){Ne(e,"data",r);break}case"src":case"href":if(r===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(a);break}r=al(""+r),e.setAttribute(a,r);break;case"action":case"formAction":if(typeof r=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Fe(e,n,"name",u.name,u,null),Fe(e,n,"formEncType",u.formEncType,u,null),Fe(e,n,"formMethod",u.formMethod,u,null),Fe(e,n,"formTarget",u.formTarget,u,null)):(Fe(e,n,"encType",u.encType,u,null),Fe(e,n,"method",u.method,u,null),Fe(e,n,"target",u.target,u,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(a);break}r=al(""+r),e.setAttribute(a,r);break;case"onClick":r!=null&&(e.onclick=Vi);break;case"onScroll":r!=null&&_e("scroll",e);break;case"onScrollEnd":r!=null&&_e("scrollend",e);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":e.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){e.removeAttribute("xlink:href");break}a=al(""+r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,""+r):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":r===!0?e.setAttribute(a,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,r):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?e.setAttribute(a,r):e.removeAttribute(a);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?e.removeAttribute(a):e.setAttribute(a,r);break;case"popover":_e("beforetoggle",e),_e("toggle",e),We(e,"popover",r);break;case"xlinkActuate":me(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":me(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":me(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":me(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":me(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":me(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":me(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":me(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":me(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":We(e,"is",r);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Iv.get(a)||a,We(e,a,r))}}function Wf(e,n,a,r,u,f){switch(a){case"style":ip(e,r,f);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof r=="string"?Ps(e,r):(typeof r=="number"||typeof r=="bigint")&&Ps(e,""+r);break;case"onScroll":r!=null&&_e("scroll",e);break;case"onScrollEnd":r!=null&&_e("scrollend",e);break;case"onClick":r!=null&&(e.onclick=Vi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ht.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=e[Tn]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,u),typeof r=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,r,u);break t}a in e?e[a]=r:r===!0?e.setAttribute(a,""):We(e,a,r)}}}function wn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":_e("error",e),_e("load",e);var r=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var v=a[f];if(v!=null)switch(f){case"src":r=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Fe(e,n,f,v,a,null)}}u&&Fe(e,n,"srcSet",a.srcSet,a,null),r&&Fe(e,n,"src",a.src,a,null);return;case"input":_e("invalid",e);var b=f=v=u=null,B=null,$=null;for(r in a)if(a.hasOwnProperty(r)){var ft=a[r];if(ft!=null)switch(r){case"name":u=ft;break;case"type":v=ft;break;case"checked":B=ft;break;case"defaultChecked":$=ft;break;case"value":f=ft;break;case"defaultValue":b=ft;break;case"children":case"dangerouslySetInnerHTML":if(ft!=null)throw Error(s(137,n));break;default:Fe(e,n,r,ft,a,null)}}On(e,f,b,B,$,v,u,!1);return;case"select":_e("invalid",e),r=v=f=null;for(u in a)if(a.hasOwnProperty(u)&&(b=a[u],b!=null))switch(u){case"value":f=b;break;case"defaultValue":v=b;break;case"multiple":r=b;default:Fe(e,n,u,b,a,null)}n=f,a=v,e.multiple=!!r,n!=null?sn(e,!!r,n,!1):a!=null&&sn(e,!!r,a,!0);return;case"textarea":_e("invalid",e),f=u=r=null;for(v in a)if(a.hasOwnProperty(v)&&(b=a[v],b!=null))switch(v){case"value":r=b;break;case"defaultValue":u=b;break;case"children":f=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(s(91));break;default:Fe(e,n,v,b,a,null)}Di(e,r,u,f);return;case"option":for(B in a)a.hasOwnProperty(B)&&(r=a[B],r!=null)&&(B==="selected"?e.selected=r&&typeof r!="function"&&typeof r!="symbol":Fe(e,n,B,r,a,null));return;case"dialog":_e("beforetoggle",e),_e("toggle",e),_e("cancel",e),_e("close",e);break;case"iframe":case"object":_e("load",e);break;case"video":case"audio":for(r=0;r<Eo.length;r++)_e(Eo[r],e);break;case"image":_e("error",e),_e("load",e);break;case"details":_e("toggle",e);break;case"embed":case"source":case"link":_e("error",e),_e("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for($ in a)if(a.hasOwnProperty($)&&(r=a[$],r!=null))switch($){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Fe(e,n,$,r,a,null)}return;default:if(au(n)){for(ft in a)a.hasOwnProperty(ft)&&(r=a[ft],r!==void 0&&Wf(e,n,ft,r,a,void 0));return}}for(b in a)a.hasOwnProperty(b)&&(r=a[b],r!=null&&Fe(e,n,b,r,a,null))}function uy(e,n,a,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,v=null,b=null,B=null,$=null,ft=null;for(ot in a){var mt=a[ot];if(a.hasOwnProperty(ot)&&mt!=null)switch(ot){case"checked":break;case"value":break;case"defaultValue":B=mt;default:r.hasOwnProperty(ot)||Fe(e,n,ot,null,r,mt)}}for(var et in r){var ot=r[et];if(mt=a[et],r.hasOwnProperty(et)&&(ot!=null||mt!=null))switch(et){case"type":f=ot;break;case"name":u=ot;break;case"checked":$=ot;break;case"defaultChecked":ft=ot;break;case"value":v=ot;break;case"defaultValue":b=ot;break;case"children":case"dangerouslySetInnerHTML":if(ot!=null)throw Error(s(137,n));break;default:ot!==mt&&Fe(e,n,et,ot,r,mt)}}Dn(e,v,b,B,$,ft,f,u);return;case"select":ot=v=b=et=null;for(f in a)if(B=a[f],a.hasOwnProperty(f)&&B!=null)switch(f){case"value":break;case"multiple":ot=B;default:r.hasOwnProperty(f)||Fe(e,n,f,null,r,B)}for(u in r)if(f=r[u],B=a[u],r.hasOwnProperty(u)&&(f!=null||B!=null))switch(u){case"value":et=f;break;case"defaultValue":b=f;break;case"multiple":v=f;default:f!==B&&Fe(e,n,u,f,r,B)}n=b,a=v,r=ot,et!=null?sn(e,!!a,et,!1):!!r!=!!a&&(n!=null?sn(e,!!a,n,!0):sn(e,!!a,a?[]:"",!1));return;case"textarea":ot=et=null;for(b in a)if(u=a[b],a.hasOwnProperty(b)&&u!=null&&!r.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:Fe(e,n,b,null,r,u)}for(v in r)if(u=r[v],f=a[v],r.hasOwnProperty(v)&&(u!=null||f!=null))switch(v){case"value":et=u;break;case"defaultValue":ot=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==f&&Fe(e,n,v,u,r,f)}Ns(e,et,ot);return;case"option":for(var Ft in a)et=a[Ft],a.hasOwnProperty(Ft)&&et!=null&&!r.hasOwnProperty(Ft)&&(Ft==="selected"?e.selected=!1:Fe(e,n,Ft,null,r,et));for(B in r)et=r[B],ot=a[B],r.hasOwnProperty(B)&&et!==ot&&(et!=null||ot!=null)&&(B==="selected"?e.selected=et&&typeof et!="function"&&typeof et!="symbol":Fe(e,n,B,et,r,ot));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var te in a)et=a[te],a.hasOwnProperty(te)&&et!=null&&!r.hasOwnProperty(te)&&Fe(e,n,te,null,r,et);for($ in r)if(et=r[$],ot=a[$],r.hasOwnProperty($)&&et!==ot&&(et!=null||ot!=null))switch($){case"children":case"dangerouslySetInnerHTML":if(et!=null)throw Error(s(137,n));break;default:Fe(e,n,$,et,r,ot)}return;default:if(au(n)){for(var He in a)et=a[He],a.hasOwnProperty(He)&&et!==void 0&&!r.hasOwnProperty(He)&&Wf(e,n,He,void 0,r,et);for(ft in r)et=r[ft],ot=a[ft],!r.hasOwnProperty(ft)||et===ot||et===void 0&&ot===void 0||Wf(e,n,ft,et,r,ot);return}}for(var Y in a)et=a[Y],a.hasOwnProperty(Y)&&et!=null&&!r.hasOwnProperty(Y)&&Fe(e,n,Y,null,r,et);for(mt in r)et=r[mt],ot=a[mt],!r.hasOwnProperty(mt)||et===ot||et==null&&ot==null||Fe(e,n,mt,et,r,ot)}function a0(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function fy(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),r=0;r<a.length;r++){var u=a[r],f=u.transferSize,v=u.initiatorType,b=u.duration;if(f&&b&&a0(v)){for(v=0,b=u.responseEnd,r+=1;r<a.length;r++){var B=a[r],$=B.startTime;if($>b)break;var ft=B.transferSize,mt=B.initiatorType;ft&&a0(mt)&&(B=B.responseEnd,v+=ft*(B<b?1:(b-$)/(B-$)))}if(--r,n+=8*(f+v)/(u.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var qf=null,Yf=null;function $l(e){return e.nodeType===9?e:e.ownerDocument}function s0(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function r0(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Zf(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var jf=null;function hy(){var e=window.event;return e&&e.type==="popstate"?e===jf?!1:(jf=e,!0):(jf=null,!1)}var o0=typeof setTimeout=="function"?setTimeout:void 0,dy=typeof clearTimeout=="function"?clearTimeout:void 0,l0=typeof Promise=="function"?Promise:void 0,py=typeof queueMicrotask=="function"?queueMicrotask:typeof l0<"u"?function(e){return l0.resolve(null).then(e).catch(my)}:o0;function my(e){setTimeout(function(){throw e})}function La(e){return e==="head"}function c0(e,n){var a=n,r=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(r===0){e.removeChild(u),fr(n);return}r--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")r++;else if(a==="html")bo(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,bo(a);for(var f=a.firstChild;f;){var v=f.nextSibling,b=f.nodeName;f[Qa]||b==="SCRIPT"||b==="STYLE"||b==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=v}}else a==="body"&&bo(e.ownerDocument.body);a=u}while(a);fr(n)}function u0(e,n){var a=e;e=0;do{var r=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),r&&r.nodeType===8)if(a=r.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=r}while(a)}function Kf(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Kf(a),C(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function gy(e,n,a,r){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!r&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(r){if(!e[Qa])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=mi(e.nextSibling),e===null)break}return null}function _y(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=mi(e.nextSibling),e===null))return null;return e}function f0(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=mi(e.nextSibling),e===null))return null;return e}function Qf(e){return e.data==="$?"||e.data==="$~"}function Jf(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function vy(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var r=function(){n(),a.removeEventListener("DOMContentLoaded",r)};a.addEventListener("DOMContentLoaded",r),e._reactRetry=r}}function mi(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var $f=null;function h0(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return mi(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function d0(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function p0(e,n,a){switch(n=$l(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function bo(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);C(e)}var gi=new Map,m0=new Set;function tc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var aa=Q.d;Q.d={f:Sy,r:yy,D:xy,C:My,L:Ey,m:Ty,X:Ay,S:by,M:Cy};function Sy(){var e=aa.f(),n=Wl();return e||n}function yy(e){var n=at(e);n!==null&&n.tag===5&&n.type==="form"?Lm(n):aa.r(e)}var lr=typeof document>"u"?null:document;function g0(e,n,a){var r=lr;if(r&&typeof n=="string"&&n){var u=Se(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),m0.has(u)||(m0.add(u),e={rel:e,crossOrigin:a,href:n},r.querySelector(u)===null&&(n=r.createElement("link"),wn(n,"link",e),_t(n),r.head.appendChild(n)))}}function xy(e){aa.D(e),g0("dns-prefetch",e,null)}function My(e,n){aa.C(e,n),g0("preconnect",e,n)}function Ey(e,n,a){aa.L(e,n,a);var r=lr;if(r&&e&&n){var u='link[rel="preload"][as="'+Se(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+Se(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+Se(a.imageSizes)+'"]')):u+='[href="'+Se(e)+'"]';var f=u;switch(n){case"style":f=cr(e);break;case"script":f=ur(e)}gi.has(f)||(e=_({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),gi.set(f,e),r.querySelector(u)!==null||n==="style"&&r.querySelector(Ao(f))||n==="script"&&r.querySelector(Co(f))||(n=r.createElement("link"),wn(n,"link",e),_t(n),r.head.appendChild(n)))}}function Ty(e,n){aa.m(e,n);var a=lr;if(a&&e){var r=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+Se(r)+'"][href="'+Se(e)+'"]',f=u;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=ur(e)}if(!gi.has(f)&&(e=_({rel:"modulepreload",href:e},n),gi.set(f,e),a.querySelector(u)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Co(f)))return}r=a.createElement("link"),wn(r,"link",e),_t(r),a.head.appendChild(r)}}}function by(e,n,a){aa.S(e,n,a);var r=lr;if(r&&e){var u=Z(r).hoistableStyles,f=cr(e);n=n||"default";var v=u.get(f);if(!v){var b={loading:0,preload:null};if(v=r.querySelector(Ao(f)))b.loading=5;else{e=_({rel:"stylesheet",href:e,"data-precedence":n},a),(a=gi.get(f))&&th(e,a);var B=v=r.createElement("link");_t(B),wn(B,"link",e),B._p=new Promise(function($,ft){B.onload=$,B.onerror=ft}),B.addEventListener("load",function(){b.loading|=1}),B.addEventListener("error",function(){b.loading|=2}),b.loading|=4,ec(v,n,r)}v={type:"stylesheet",instance:v,count:1,state:b},u.set(f,v)}}}function Ay(e,n){aa.X(e,n);var a=lr;if(a&&e){var r=Z(a).hoistableScripts,u=ur(e),f=r.get(u);f||(f=a.querySelector(Co(u)),f||(e=_({src:e,async:!0},n),(n=gi.get(u))&&eh(e,n),f=a.createElement("script"),_t(f),wn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(u,f))}}function Cy(e,n){aa.M(e,n);var a=lr;if(a&&e){var r=Z(a).hoistableScripts,u=ur(e),f=r.get(u);f||(f=a.querySelector(Co(u)),f||(e=_({src:e,async:!0,type:"module"},n),(n=gi.get(u))&&eh(e,n),f=a.createElement("script"),_t(f),wn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(u,f))}}function _0(e,n,a,r){var u=(u=it.current)?tc(u):null;if(!u)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=cr(a.href),a=Z(u).hoistableStyles,r=a.get(n),r||(r={type:"style",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=cr(a.href);var f=Z(u).hoistableStyles,v=f.get(e);if(v||(u=u.ownerDocument||u,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,v),(f=u.querySelector(Ao(e)))&&!f._p&&(v.instance=f,v.state.loading=5),gi.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},gi.set(e,a),f||Ry(u,e,a,v.state))),n&&r===null)throw Error(s(528,""));return v}if(n&&r!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=ur(a),a=Z(u).hoistableScripts,r=a.get(n),r||(r={type:"script",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function cr(e){return'href="'+Se(e)+'"'}function Ao(e){return'link[rel="stylesheet"]['+e+"]"}function v0(e){return _({},e,{"data-precedence":e.precedence,precedence:null})}function Ry(e,n,a,r){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?r.loading=1:(n=e.createElement("link"),r.preload=n,n.addEventListener("load",function(){return r.loading|=1}),n.addEventListener("error",function(){return r.loading|=2}),wn(n,"link",a),_t(n),e.head.appendChild(n))}function ur(e){return'[src="'+Se(e)+'"]'}function Co(e){return"script[async]"+e}function S0(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var r=e.querySelector('style[data-href~="'+Se(a.href)+'"]');if(r)return n.instance=r,_t(r),r;var u=_({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement("style"),_t(r),wn(r,"style",u),ec(r,a.precedence,e),n.instance=r;case"stylesheet":u=cr(a.href);var f=e.querySelector(Ao(u));if(f)return n.state.loading|=4,n.instance=f,_t(f),f;r=v0(a),(u=gi.get(u))&&th(r,u),f=(e.ownerDocument||e).createElement("link"),_t(f);var v=f;return v._p=new Promise(function(b,B){v.onload=b,v.onerror=B}),wn(f,"link",r),n.state.loading|=4,ec(f,a.precedence,e),n.instance=f;case"script":return f=ur(a.src),(u=e.querySelector(Co(f)))?(n.instance=u,_t(u),u):(r=a,(u=gi.get(f))&&(r=_({},a),eh(r,u)),e=e.ownerDocument||e,u=e.createElement("script"),_t(u),wn(u,"link",r),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(r=n.instance,n.state.loading|=4,ec(r,a.precedence,e));return n.instance}function ec(e,n,a){for(var r=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=r.length?r[r.length-1]:null,f=u,v=0;v<r.length;v++){var b=r[v];if(b.dataset.precedence===n)f=b;else if(f!==u)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function th(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function eh(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var nc=null;function y0(e,n,a){if(nc===null){var r=new Map,u=nc=new Map;u.set(a,r)}else u=nc,r=u.get(a),r||(r=new Map,u.set(a,r));if(r.has(e))return r;for(r.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var f=a[u];if(!(f[Qa]||f[cn]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var v=f.getAttribute(n)||"";v=e+v;var b=r.get(v);b?b.push(f):r.set(v,[f])}}return r}function x0(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function wy(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(e=n.disabled,typeof n.precedence=="string"&&e==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function M0(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Dy(e,n,a,r){if(a.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=cr(r.href),f=n.querySelector(Ao(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=ic.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=f,_t(f);return}f=n.ownerDocument||n,r=v0(r),(u=gi.get(u))&&th(r,u),f=f.createElement("link"),_t(f);var v=f;v._p=new Promise(function(b,B){v.onload=b,v.onerror=B}),wn(f,"link",r),a.instance=f}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=ic.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var nh=0;function Uy(e,n){return e.stylesheets&&e.count===0&&sc(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var r=setTimeout(function(){if(e.stylesheets&&sc(e,e.stylesheets),e.unsuspend){var f=e.unsuspend;e.unsuspend=null,f()}},6e4+n);0<e.imgBytes&&nh===0&&(nh=62500*fy());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&sc(e,e.stylesheets),e.unsuspend)){var f=e.unsuspend;e.unsuspend=null,f()}},(e.imgBytes>nh?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(u)}}:null}function ic(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)sc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var ac=null;function sc(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,ac=new Map,n.forEach(Ly,e),ac=null,ic.call(e))}function Ly(e,n){if(!(n.state.loading&4)){var a=ac.get(e);if(a)var r=a.get(null);else{a=new Map,ac.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var v=u[f];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(a.set(v.dataset.precedence,v),r=v)}r&&a.set(null,r)}u=n.instance,v=u.getAttribute("data-precedence"),f=a.get(v)||r,f===r&&a.set(null,u),a.set(v,u),this.count++,r=ic.bind(this),u.addEventListener("load",r),u.addEventListener("error",r),f?f.parentNode.insertBefore(u,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var Ro={$$typeof:N,Provider:null,Consumer:null,_currentValue:j,_currentValue2:j,_threadCount:0};function Ny(e,n,a,r,u,f,v,b,B){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Te(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Te(0),this.hiddenUpdates=Te(null),this.identifierPrefix=r,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=B,this.incompleteTransitions=new Map}function E0(e,n,a,r,u,f,v,b,B,$,ft,mt){return e=new Ny(e,n,a,v,B,$,ft,mt,b),n=1,f===!0&&(n|=24),f=Jn(3,null,null,n),e.current=f,f.stateNode=e,n=Pu(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:r,isDehydrated:a,cache:n},Bu(f),e}function T0(e){return e?(e=Gs,e):Gs}function b0(e,n,a,r,u,f){u=T0(u),r.context===null?r.context=u:r.pendingContext=u,r=xa(n),r.payload={element:a},f=f===void 0?null:f,f!==null&&(r.callback=f),a=Ma(e,r,n),a!==null&&(Yn(a,e,n),so(a,e,n))}function A0(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function ih(e,n){A0(e,n),(e=e.alternate)&&A0(e,n)}function C0(e){if(e.tag===13||e.tag===31){var n=ns(e,67108864);n!==null&&Yn(n,e,67108864),ih(e,67108864)}}function R0(e){if(e.tag===13||e.tag===31){var n=ii();n=Us(n);var a=ns(e,n);a!==null&&Yn(a,e,n),ih(e,n)}}var rc=!0;function Py(e,n,a,r){var u=O.T;O.T=null;var f=Q.p;try{Q.p=2,ah(e,n,a,r)}finally{Q.p=f,O.T=u}}function Oy(e,n,a,r){var u=O.T;O.T=null;var f=Q.p;try{Q.p=8,ah(e,n,a,r)}finally{Q.p=f,O.T=u}}function ah(e,n,a,r){if(rc){var u=sh(r);if(u===null)Xf(e,n,r,oc,a),D0(e,r);else if(Iy(u,e,n,a,r))r.stopPropagation();else if(D0(e,r),n&4&&-1<zy.indexOf(e)){for(;u!==null;){var f=at(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var v=xt(f.pendingLanes);if(v!==0){var b=f;for(b.pendingLanes|=2,b.entangledLanes|=2;v;){var B=1<<31-Ot(v);b.entanglements[1]|=B,v&=~B}Pi(f),(De&6)===0&&(kl=E()+500,Mo(0))}}break;case 31:case 13:b=ns(f,2),b!==null&&Yn(b,f,2),Wl(),ih(f,2)}if(f=sh(r),f===null&&Xf(e,n,r,oc,a),f===u)break;u=f}u!==null&&r.stopPropagation()}else Xf(e,n,r,null,a)}}function sh(e){return e=ru(e),rh(e)}var oc=null;function rh(e){if(oc=null,e=q(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=h(n),e!==null)return e;e=null}else if(a===31){if(e=d(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return oc=e,null}function w0(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(tt()){case dt:return 2;case St:return 8;case ut:case Zt:return 32;case At:return 268435456;default:return 32}default:return 32}}var oh=!1,Na=null,Pa=null,Oa=null,wo=new Map,Do=new Map,za=[],zy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function D0(e,n){switch(e){case"focusin":case"focusout":Na=null;break;case"dragenter":case"dragleave":Pa=null;break;case"mouseover":case"mouseout":Oa=null;break;case"pointerover":case"pointerout":wo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Do.delete(n.pointerId)}}function Uo(e,n,a,r,u,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:r,nativeEvent:f,targetContainers:[u]},n!==null&&(n=at(n),n!==null&&C0(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function Iy(e,n,a,r,u){switch(n){case"focusin":return Na=Uo(Na,e,n,a,r,u),!0;case"dragenter":return Pa=Uo(Pa,e,n,a,r,u),!0;case"mouseover":return Oa=Uo(Oa,e,n,a,r,u),!0;case"pointerover":var f=u.pointerId;return wo.set(f,Uo(wo.get(f)||null,e,n,a,r,u)),!0;case"gotpointercapture":return f=u.pointerId,Do.set(f,Uo(Do.get(f)||null,e,n,a,r,u)),!0}return!1}function U0(e){var n=q(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){e.blockedOn=n,Vr(e.priority,function(){R0(a)});return}}else if(n===31){if(n=d(a),n!==null){e.blockedOn=n,Vr(e.priority,function(){R0(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function lc(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=sh(e.nativeEvent);if(a===null){a=e.nativeEvent;var r=new a.constructor(a.type,a);su=r,a.target.dispatchEvent(r),su=null}else return n=at(a),n!==null&&C0(n),e.blockedOn=a,!1;n.shift()}return!0}function L0(e,n,a){lc(e)&&a.delete(n)}function By(){oh=!1,Na!==null&&lc(Na)&&(Na=null),Pa!==null&&lc(Pa)&&(Pa=null),Oa!==null&&lc(Oa)&&(Oa=null),wo.forEach(L0),Do.forEach(L0)}function cc(e,n){e.blockedOn===n&&(e.blockedOn=null,oh||(oh=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,By)))}var uc=null;function N0(e){uc!==e&&(uc=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){uc===e&&(uc=null);for(var n=0;n<e.length;n+=3){var a=e[n],r=e[n+1],u=e[n+2];if(typeof r!="function"){if(rh(r||a)===null)continue;break}var f=at(a);f!==null&&(e.splice(n,3),n-=3,sf(f,{pending:!0,data:u,method:a.method,action:r},r,u))}}))}function fr(e){function n(B){return cc(B,e)}Na!==null&&cc(Na,e),Pa!==null&&cc(Pa,e),Oa!==null&&cc(Oa,e),wo.forEach(n),Do.forEach(n);for(var a=0;a<za.length;a++){var r=za[a];r.blockedOn===e&&(r.blockedOn=null)}for(;0<za.length&&(a=za[0],a.blockedOn===null);)U0(a),a.blockedOn===null&&za.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(r=0;r<a.length;r+=3){var u=a[r],f=a[r+1],v=u[Tn]||null;if(typeof f=="function")v||N0(a);else if(v){var b=null;if(f&&f.hasAttribute("formAction")){if(u=f,v=f[Tn]||null)b=v.formAction;else if(rh(u)!==null)continue}else b=v.action;typeof b=="function"?a[r+1]=b:(a.splice(r,3),r-=3),N0(a)}}}function P0(){function e(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(v){return u=v})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),r||setTimeout(a,20)}function a(){if(!r&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){r=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function lh(e){this._internalRoot=e}fc.prototype.render=lh.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,r=ii();b0(a,r,e,n,null,null)},fc.prototype.unmount=lh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;b0(e.current,2,null,e,null,null),Wl(),n[pa]=null}};function fc(e){this._internalRoot=e}fc.prototype.unstable_scheduleHydration=function(e){if(e){var n=Ka();e={blockedOn:null,target:e,priority:n};for(var a=0;a<za.length&&n!==0&&n<za[a].priority;a++);za.splice(a,0,e),a===0&&U0(e)}};var O0=t.version;if(O0!=="19.2.7")throw Error(s(527,O0,"19.2.7"));Q.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=p(n),e=e!==null?S(e):null,e=e===null?null:e.stateNode,e};var Fy={bundleType:0,version:"19.2.7",rendererPackageName:"react-dom",currentDispatcherRef:O,reconcilerVersion:"19.2.7"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var hc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!hc.isDisabled&&hc.supportsFiber)try{Et=hc.inject(Fy),Ct=hc}catch{}}return No.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,r="",u=Vm,f=km,v=Xm;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(v=n.onRecoverableError)),n=E0(e,1,!1,null,null,a,r,null,u,f,v,P0),e[pa]=n.current,kf(e),new lh(n)},No.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var r=!1,u="",f=Vm,v=km,b=Xm,B=null;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(v=a.onCaughtError),a.onRecoverableError!==void 0&&(b=a.onRecoverableError),a.formState!==void 0&&(B=a.formState)),n=E0(e,1,!0,n,a??null,r,u,B,f,v,b,P0),n.context=T0(null),a=n.current,r=ii(),r=Us(r),u=xa(r),u.callback=null,Ma(a,u,r),a=r,n.current.lanes=a,Pn(n,a),Pi(n),e[pa]=n.current,kf(e),new fc(n)},No.version="19.2.7",No}var W0;function Ky(){if(W0)return fh.exports;W0=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),fh.exports=jy(),fh.exports}var Qy=Ky();const Jy=$_(Qy);const Gd="180",$y=0,q0=1,tx=2,tv=1,ev=2,ua=3,Za=0,jn=1,zi=2,Wa=0,Ur=1,Y0=2,Z0=3,j0=4,ex=5,Es=100,nx=101,ix=102,ax=103,sx=104,rx=200,ox=201,lx=202,cx=203,Qh=204,Jh=205,ux=206,fx=207,hx=208,dx=209,px=210,mx=211,gx=212,_x=213,vx=214,$h=0,td=1,ed=2,Nr=3,nd=4,id=5,ad=6,sd=7,nv=0,Sx=1,yx=2,qa=0,xx=1,Mx=2,Ex=3,Tx=4,bx=5,Ax=6,Cx=7,iv=300,Pr=301,Or=302,rd=303,od=304,$c=306,ld=1e3,bs=1001,cd=1002,Ci=1003,Rx=1004,dc=1005,Ii=1006,mh=1007,As=1008,Fi=1009,av=1010,sv=1011,Zo=1012,Vd=1013,Cs=1014,fa=1015,tl=1016,kd=1017,Xd=1018,jo=1020,rv=35902,ov=35899,lv=1021,cv=1022,Ai=1023,Ko=1026,Qo=1027,uv=1028,Wd=1029,fv=1030,qd=1031,Yd=1033,Hc=33776,Gc=33777,Vc=33778,kc=33779,ud=35840,fd=35841,hd=35842,dd=35843,pd=36196,md=37492,gd=37496,_d=37808,vd=37809,Sd=37810,yd=37811,xd=37812,Md=37813,Ed=37814,Td=37815,bd=37816,Ad=37817,Cd=37818,Rd=37819,wd=37820,Dd=37821,Ud=36492,Ld=36494,Nd=36495,Pd=36283,Od=36284,zd=36285,Id=36286,wx=3200,Dx=3201,hv=0,Ux=1,Xa="",Zn="srgb",zr="srgb-linear",Wc="linear",Ve="srgb",hr=7680,K0=519,Lx=512,Nx=513,Px=514,dv=515,Ox=516,zx=517,Ix=518,Bx=519,Bd=35044,Q0="300 es",Bi=2e3,qc=2001;class Fr{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let c=0,h=l.length;c<h;c++)l[c].call(this,t);t.target=null}}}const Ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let J0=1234567;const Wo=Math.PI/180,Jo=180/Math.PI;function ha(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Ln[o&255]+Ln[o>>8&255]+Ln[o>>16&255]+Ln[o>>24&255]+"-"+Ln[t&255]+Ln[t>>8&255]+"-"+Ln[t>>16&15|64]+Ln[t>>24&255]+"-"+Ln[i&63|128]+Ln[i>>8&255]+"-"+Ln[i>>16&255]+Ln[i>>24&255]+Ln[s&255]+Ln[s>>8&255]+Ln[s>>16&255]+Ln[s>>24&255]).toLowerCase()}function Me(o,t,i){return Math.max(t,Math.min(i,o))}function Zd(o,t){return(o%t+t)%t}function Fx(o,t,i,s,l){return s+(o-t)*(l-s)/(i-t)}function Hx(o,t,i){return o!==t?(i-o)/(t-o):0}function qo(o,t,i){return(1-i)*o+i*t}function Gx(o,t,i,s){return qo(o,t,1-Math.exp(-i*s))}function Vx(o,t=1){return t-Math.abs(Zd(o,t*2)-t)}function kx(o,t,i){return o<=t?0:o>=i?1:(o=(o-t)/(i-t),o*o*(3-2*o))}function Xx(o,t,i){return o<=t?0:o>=i?1:(o=(o-t)/(i-t),o*o*o*(o*(o*6-15)+10))}function Wx(o,t){return o+Math.floor(Math.random()*(t-o+1))}function qx(o,t){return o+Math.random()*(t-o)}function Yx(o){return o*(.5-Math.random())}function Zx(o){o!==void 0&&(J0=o);let t=J0+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function jx(o){return o*Wo}function Kx(o){return o*Jo}function Qx(o){return(o&o-1)===0&&o!==0}function Jx(o){return Math.pow(2,Math.ceil(Math.log(o)/Math.LN2))}function $x(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function tM(o,t,i,s,l){const c=Math.cos,h=Math.sin,d=c(i/2),m=h(i/2),p=c((t+s)/2),S=h((t+s)/2),_=c((t-s)/2),y=h((t-s)/2),M=c((s-t)/2),T=h((s-t)/2);switch(l){case"XYX":o.set(d*S,m*_,m*y,d*p);break;case"YZY":o.set(m*y,d*S,m*_,d*p);break;case"ZXZ":o.set(m*_,m*y,d*S,d*p);break;case"XZX":o.set(d*S,m*T,m*M,d*p);break;case"YXY":o.set(m*M,d*S,m*T,d*p);break;case"ZYZ":o.set(m*T,m*M,d*S,d*p);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function bi(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Ie(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const In={DEG2RAD:Wo,RAD2DEG:Jo,generateUUID:ha,clamp:Me,euclideanModulo:Zd,mapLinear:Fx,inverseLerp:Hx,lerp:qo,damp:Gx,pingpong:Vx,smoothstep:kx,smootherstep:Xx,randInt:Wx,randFloat:qx,randFloatSpread:Yx,seededRandom:Zx,degToRad:jx,radToDeg:Kx,isPowerOfTwo:Qx,ceilPowerOfTwo:Jx,floorPowerOfTwo:$x,setQuaternionFromProperEuler:tM,normalize:Ie,denormalize:bi};class fe{constructor(t=0,i=0){fe.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Me(this.x,t.x,i.x),this.y=Me(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=Me(this.x,t,i),this.y=Me(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Me(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Me(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-t.x,h=this.y-t.y;return this.x=c*s-h*l+t.x,this.y=c*l+h*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class el{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,c,h,d){let m=s[l+0],p=s[l+1],S=s[l+2],_=s[l+3];const y=c[h+0],M=c[h+1],T=c[h+2],A=c[h+3];if(d===0){t[i+0]=m,t[i+1]=p,t[i+2]=S,t[i+3]=_;return}if(d===1){t[i+0]=y,t[i+1]=M,t[i+2]=T,t[i+3]=A;return}if(_!==A||m!==y||p!==M||S!==T){let x=1-d;const g=m*y+p*M+S*T+_*A,P=g>=0?1:-1,N=1-g*g;if(N>Number.EPSILON){const G=Math.sqrt(N),F=Math.atan2(G,g*P);x=Math.sin(x*F)/G,d=Math.sin(d*F)/G}const D=d*P;if(m=m*x+y*D,p=p*x+M*D,S=S*x+T*D,_=_*x+A*D,x===1-d){const G=1/Math.sqrt(m*m+p*p+S*S+_*_);m*=G,p*=G,S*=G,_*=G}}t[i]=m,t[i+1]=p,t[i+2]=S,t[i+3]=_}static multiplyQuaternionsFlat(t,i,s,l,c,h){const d=s[l],m=s[l+1],p=s[l+2],S=s[l+3],_=c[h],y=c[h+1],M=c[h+2],T=c[h+3];return t[i]=d*T+S*_+m*M-p*y,t[i+1]=m*T+S*y+p*_-d*M,t[i+2]=p*T+S*M+d*y-m*_,t[i+3]=S*T-d*_-m*y-p*M,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,c=t._z,h=t._order,d=Math.cos,m=Math.sin,p=d(s/2),S=d(l/2),_=d(c/2),y=m(s/2),M=m(l/2),T=m(c/2);switch(h){case"XYZ":this._x=y*S*_+p*M*T,this._y=p*M*_-y*S*T,this._z=p*S*T+y*M*_,this._w=p*S*_-y*M*T;break;case"YXZ":this._x=y*S*_+p*M*T,this._y=p*M*_-y*S*T,this._z=p*S*T-y*M*_,this._w=p*S*_+y*M*T;break;case"ZXY":this._x=y*S*_-p*M*T,this._y=p*M*_+y*S*T,this._z=p*S*T+y*M*_,this._w=p*S*_-y*M*T;break;case"ZYX":this._x=y*S*_-p*M*T,this._y=p*M*_+y*S*T,this._z=p*S*T-y*M*_,this._w=p*S*_+y*M*T;break;case"YZX":this._x=y*S*_+p*M*T,this._y=p*M*_+y*S*T,this._z=p*S*T-y*M*_,this._w=p*S*_-y*M*T;break;case"XZY":this._x=y*S*_-p*M*T,this._y=p*M*_-y*S*T,this._z=p*S*T+y*M*_,this._w=p*S*_+y*M*T;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],c=i[8],h=i[1],d=i[5],m=i[9],p=i[2],S=i[6],_=i[10],y=s+d+_;if(y>0){const M=.5/Math.sqrt(y+1);this._w=.25/M,this._x=(S-m)*M,this._y=(c-p)*M,this._z=(h-l)*M}else if(s>d&&s>_){const M=2*Math.sqrt(1+s-d-_);this._w=(S-m)/M,this._x=.25*M,this._y=(l+h)/M,this._z=(c+p)/M}else if(d>_){const M=2*Math.sqrt(1+d-s-_);this._w=(c-p)/M,this._x=(l+h)/M,this._y=.25*M,this._z=(m+S)/M}else{const M=2*Math.sqrt(1+_-s-d);this._w=(h-l)/M,this._x=(c+p)/M,this._y=(m+S)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Me(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,c=t._z,h=t._w,d=i._x,m=i._y,p=i._z,S=i._w;return this._x=s*S+h*d+l*p-c*m,this._y=l*S+h*m+c*d-s*p,this._z=c*S+h*p+s*m-l*d,this._w=h*S-s*d-l*m-c*p,this._onChangeCallback(),this}slerp(t,i){if(i===0)return this;if(i===1)return this.copy(t);const s=this._x,l=this._y,c=this._z,h=this._w;let d=h*t._w+s*t._x+l*t._y+c*t._z;if(d<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,d=-d):this.copy(t),d>=1)return this._w=h,this._x=s,this._y=l,this._z=c,this;const m=1-d*d;if(m<=Number.EPSILON){const M=1-i;return this._w=M*h+i*this._w,this._x=M*s+i*this._x,this._y=M*l+i*this._y,this._z=M*c+i*this._z,this.normalize(),this}const p=Math.sqrt(m),S=Math.atan2(p,d),_=Math.sin((1-i)*S)/p,y=Math.sin(i*S)/p;return this._w=h*_+this._w*y,this._x=s*_+this._x*y,this._y=l*_+this._y*y,this._z=c*_+this._z*y,this._onChangeCallback(),this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(t=0,i=0,s=0){I.prototype.isVector3=!0,this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion($0.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion($0.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=t.elements,h=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*h,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*h,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*h,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,c=t.x,h=t.y,d=t.z,m=t.w,p=2*(h*l-d*s),S=2*(d*i-c*l),_=2*(c*s-h*i);return this.x=i+m*p+h*_-d*S,this.y=s+m*S+d*p-c*_,this.z=l+m*_+c*S-h*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Me(this.x,t.x,i.x),this.y=Me(this.y,t.y,i.y),this.z=Me(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=Me(this.x,t,i),this.y=Me(this.y,t,i),this.z=Me(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Me(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,c=t.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-c*d,this.y=c*h-s*m,this.z=s*d-l*h,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return gh.copy(this).projectOnVector(t),this.sub(gh)}reflect(t){return this.sub(gh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Me(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const gh=new I,$0=new el;class ue{constructor(t,i,s,l,c,h,d,m,p){ue.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,h,d,m,p)}set(t,i,s,l,c,h,d,m,p){const S=this.elements;return S[0]=t,S[1]=l,S[2]=d,S[3]=i,S[4]=c,S[5]=m,S[6]=s,S[7]=h,S[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,h=s[0],d=s[3],m=s[6],p=s[1],S=s[4],_=s[7],y=s[2],M=s[5],T=s[8],A=l[0],x=l[3],g=l[6],P=l[1],N=l[4],D=l[7],G=l[2],F=l[5],z=l[8];return c[0]=h*A+d*P+m*G,c[3]=h*x+d*N+m*F,c[6]=h*g+d*D+m*z,c[1]=p*A+S*P+_*G,c[4]=p*x+S*N+_*F,c[7]=p*g+S*D+_*z,c[2]=y*A+M*P+T*G,c[5]=y*x+M*N+T*F,c[8]=y*g+M*D+T*z,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],S=t[8];return i*h*S-i*d*p-s*c*S+s*d*m+l*c*p-l*h*m}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],S=t[8],_=S*h-d*p,y=d*m-S*c,M=p*c-h*m,T=i*_+s*y+l*M;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/T;return t[0]=_*A,t[1]=(l*p-S*s)*A,t[2]=(d*s-l*h)*A,t[3]=y*A,t[4]=(S*i-l*m)*A,t[5]=(l*c-d*i)*A,t[6]=M*A,t[7]=(s*m-p*i)*A,t[8]=(h*i-s*c)*A,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,c,h,d){const m=Math.cos(c),p=Math.sin(c);return this.set(s*m,s*p,-s*(m*h+p*d)+h+t,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(t,i){return this.premultiply(_h.makeScale(t,i)),this}rotate(t){return this.premultiply(_h.makeRotation(-t)),this}translate(t,i){return this.premultiply(_h.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const _h=new ue;function pv(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function Yc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function eM(){const o=Yc("canvas");return o.style.display="block",o}const t_={};function $o(o){o in t_||(t_[o]=!0,console.warn(o))}function nM(o,t,i){return new Promise(function(s,l){function c(){switch(o.clientWaitSync(t,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}const e_=new ue().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),n_=new ue().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function iM(){const o={enabled:!0,workingColorSpace:zr,spaces:{},convert:function(l,c,h){return this.enabled===!1||c===h||!c||!h||(this.spaces[c].transfer===Ve&&(l.r=da(l.r),l.g=da(l.g),l.b=da(l.b)),this.spaces[c].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Ve&&(l.r=Lr(l.r),l.g=Lr(l.g),l.b=Lr(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Xa?Wc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,h){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return $o("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return $o("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return o.define({[zr]:{primaries:t,whitePoint:s,transfer:Wc,toXYZ:e_,fromXYZ:n_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Zn},outputColorSpaceConfig:{drawingBufferColorSpace:Zn}},[Zn]:{primaries:t,whitePoint:s,transfer:Ve,toXYZ:e_,fromXYZ:n_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Zn}}}),o}const we=iM();function da(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Lr(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let dr;class aM{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{dr===void 0&&(dr=Yc("canvas")),dr.width=t.width,dr.height=t.height;const l=dr.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=dr}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Yc("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),c=l.data;for(let h=0;h<c.length;h++)c[h]=da(c[h]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(da(i[s]/255)*255):i[s]=da(i[s]);return{data:i,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let sM=0;class jd{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:sM++}),this.uuid=ha(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?c.push(vh(l[h].image)):c.push(vh(l[h]))}else c=vh(l);s.url=c}return i||(t.images[this.uuid]=s),s}}function vh(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?aM.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let rM=0;const Sh=new I;class Hn extends Fr{constructor(t=Hn.DEFAULT_IMAGE,i=Hn.DEFAULT_MAPPING,s=bs,l=bs,c=Ii,h=As,d=Ai,m=Fi,p=Hn.DEFAULT_ANISOTROPY,S=Xa){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:rM++}),this.uuid=ha(),this.name="",this.source=new jd(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new fe(0,0),this.repeat=new fe(1,1),this.center=new fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=S,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Sh).x}get height(){return this.source.getSize(Sh).y}get depth(){return this.source.getSize(Sh).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const s=t[i];if(s===void 0){console.warn(`THREE.Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==iv)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ld:t.x=t.x-Math.floor(t.x);break;case bs:t.x=t.x<0?0:1;break;case cd:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ld:t.y=t.y-Math.floor(t.y);break;case bs:t.y=t.y<0?0:1;break;case cd:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Hn.DEFAULT_IMAGE=null;Hn.DEFAULT_MAPPING=iv;Hn.DEFAULT_ANISOTROPY=1;class ke{constructor(t=0,i=0,s=0,l=1){ke.prototype.isVector4=!0,this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=this.w,h=t.elements;return this.x=h[0]*i+h[4]*s+h[8]*l+h[12]*c,this.y=h[1]*i+h[5]*s+h[9]*l+h[13]*c,this.z=h[2]*i+h[6]*s+h[10]*l+h[14]*c,this.w=h[3]*i+h[7]*s+h[11]*l+h[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,c;const m=t.elements,p=m[0],S=m[4],_=m[8],y=m[1],M=m[5],T=m[9],A=m[2],x=m[6],g=m[10];if(Math.abs(S-y)<.01&&Math.abs(_-A)<.01&&Math.abs(T-x)<.01){if(Math.abs(S+y)<.1&&Math.abs(_+A)<.1&&Math.abs(T+x)<.1&&Math.abs(p+M+g-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const N=(p+1)/2,D=(M+1)/2,G=(g+1)/2,F=(S+y)/4,z=(_+A)/4,W=(T+x)/4;return N>D&&N>G?N<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(N),l=F/s,c=z/s):D>G?D<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(D),s=F/l,c=W/l):G<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(G),s=z/c,l=W/c),this.set(s,l,c,i),this}let P=Math.sqrt((x-T)*(x-T)+(_-A)*(_-A)+(y-S)*(y-S));return Math.abs(P)<.001&&(P=1),this.x=(x-T)/P,this.y=(_-A)/P,this.z=(y-S)/P,this.w=Math.acos((p+M+g-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Me(this.x,t.x,i.x),this.y=Me(this.y,t.y,i.y),this.z=Me(this.z,t.z,i.z),this.w=Me(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=Me(this.x,t,i),this.y=Me(this.y,t,i),this.z=Me(this.z,t,i),this.w=Me(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Me(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class oM extends Fr{constructor(t=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ii,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=s.depth,this.scissor=new ke(0,0,t,i),this.scissorTest=!1,this.viewport=new ke(0,0,t,i);const l={width:t,height:i,depth:s.depth},c=new Hn(l);this.textures=[];const h=s.count;for(let d=0;d<h;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(t={}){const i={minFilter:Ii,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isArrayTexture=this.textures[l].image.depth>1;this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new jd(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Rs extends oM{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class mv extends Hn{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Ci,this.minFilter=Ci,this.wrapR=bs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class lM extends Hn{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Ci,this.minFilter=Ci,this.wrapR=bs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class nl{constructor(t=new I(1/0,1/0,1/0),i=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(Mi.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(Mi.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=Mi.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let h=0,d=c.count;h<d;h++)t.isMesh===!0?t.getVertexPosition(h,Mi):Mi.fromBufferAttribute(c,h),Mi.applyMatrix4(t.matrixWorld),this.expandByPoint(Mi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),pc.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),pc.copy(s.boundingBox)),pc.applyMatrix4(t.matrixWorld),this.union(pc)}const l=t.children;for(let c=0,h=l.length;c<h;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Mi),Mi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Po),mc.subVectors(this.max,Po),pr.subVectors(t.a,Po),mr.subVectors(t.b,Po),gr.subVectors(t.c,Po),Ba.subVectors(mr,pr),Fa.subVectors(gr,mr),ms.subVectors(pr,gr);let i=[0,-Ba.z,Ba.y,0,-Fa.z,Fa.y,0,-ms.z,ms.y,Ba.z,0,-Ba.x,Fa.z,0,-Fa.x,ms.z,0,-ms.x,-Ba.y,Ba.x,0,-Fa.y,Fa.x,0,-ms.y,ms.x,0];return!yh(i,pr,mr,gr,mc)||(i=[1,0,0,0,1,0,0,0,1],!yh(i,pr,mr,gr,mc))?!1:(gc.crossVectors(Ba,Fa),i=[gc.x,gc.y,gc.z],yh(i,pr,mr,gr,mc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Mi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Mi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(sa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),sa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),sa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),sa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),sa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),sa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),sa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),sa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(sa),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const sa=[new I,new I,new I,new I,new I,new I,new I,new I],Mi=new I,pc=new nl,pr=new I,mr=new I,gr=new I,Ba=new I,Fa=new I,ms=new I,Po=new I,mc=new I,gc=new I,gs=new I;function yh(o,t,i,s,l){for(let c=0,h=o.length-3;c<=h;c+=3){gs.fromArray(o,c);const d=l.x*Math.abs(gs.x)+l.y*Math.abs(gs.y)+l.z*Math.abs(gs.z),m=t.dot(gs),p=i.dot(gs),S=s.dot(gs);if(Math.max(-Math.max(m,p,S),Math.min(m,p,S))>d)return!1}return!0}const cM=new nl,Oo=new I,xh=new I;class tu{constructor(t=new I,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):cM.setFromPoints(t).getCenter(s);let l=0;for(let c=0,h=t.length;c<h;c++)l=Math.max(l,s.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Oo.subVectors(t,this.center);const i=Oo.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Oo,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(xh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Oo.copy(t.center).add(xh)),this.expandByPoint(Oo.copy(t.center).sub(xh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const ra=new I,Mh=new I,_c=new I,Ha=new I,Eh=new I,vc=new I,Th=new I;class gv{constructor(t=new I,i=new I(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ra)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=ra.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(ra.copy(this.origin).addScaledVector(this.direction,i),ra.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){Mh.copy(t).add(i).multiplyScalar(.5),_c.copy(i).sub(t).normalize(),Ha.copy(this.origin).sub(Mh);const c=t.distanceTo(i)*.5,h=-this.direction.dot(_c),d=Ha.dot(this.direction),m=-Ha.dot(_c),p=Ha.lengthSq(),S=Math.abs(1-h*h);let _,y,M,T;if(S>0)if(_=h*m-d,y=h*d-m,T=c*S,_>=0)if(y>=-T)if(y<=T){const A=1/S;_*=A,y*=A,M=_*(_+h*y+2*d)+y*(h*_+y+2*m)+p}else y=c,_=Math.max(0,-(h*y+d)),M=-_*_+y*(y+2*m)+p;else y=-c,_=Math.max(0,-(h*y+d)),M=-_*_+y*(y+2*m)+p;else y<=-T?(_=Math.max(0,-(-h*c+d)),y=_>0?-c:Math.min(Math.max(-c,-m),c),M=-_*_+y*(y+2*m)+p):y<=T?(_=0,y=Math.min(Math.max(-c,-m),c),M=y*(y+2*m)+p):(_=Math.max(0,-(h*c+d)),y=_>0?c:Math.min(Math.max(-c,-m),c),M=-_*_+y*(y+2*m)+p);else y=h>0?-c:c,_=Math.max(0,-(h*y+d)),M=-_*_+y*(y+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,_),l&&l.copy(Mh).addScaledVector(_c,y),M}intersectSphere(t,i){ra.subVectors(t.center,this.origin);const s=ra.dot(this.direction),l=ra.dot(ra)-s*s,c=t.radius*t.radius;if(l>c)return null;const h=Math.sqrt(c-l),d=s-h,m=s+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,c,h,d,m;const p=1/this.direction.x,S=1/this.direction.y,_=1/this.direction.z,y=this.origin;return p>=0?(s=(t.min.x-y.x)*p,l=(t.max.x-y.x)*p):(s=(t.max.x-y.x)*p,l=(t.min.x-y.x)*p),S>=0?(c=(t.min.y-y.y)*S,h=(t.max.y-y.y)*S):(c=(t.max.y-y.y)*S,h=(t.min.y-y.y)*S),s>h||c>l||((c>s||isNaN(s))&&(s=c),(h<l||isNaN(l))&&(l=h),_>=0?(d=(t.min.z-y.z)*_,m=(t.max.z-y.z)*_):(d=(t.max.z-y.z)*_,m=(t.min.z-y.z)*_),s>m||d>l)||((d>s||s!==s)&&(s=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,ra)!==null}intersectTriangle(t,i,s,l,c){Eh.subVectors(i,t),vc.subVectors(s,t),Th.crossVectors(Eh,vc);let h=this.direction.dot(Th),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;Ha.subVectors(this.origin,t);const m=d*this.direction.dot(vc.crossVectors(Ha,vc));if(m<0)return null;const p=d*this.direction.dot(Eh.cross(Ha));if(p<0||m+p>h)return null;const S=-d*Ha.dot(Th);return S<0?null:this.at(S/h,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Je{constructor(t,i,s,l,c,h,d,m,p,S,_,y,M,T,A,x){Je.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,h,d,m,p,S,_,y,M,T,A,x)}set(t,i,s,l,c,h,d,m,p,S,_,y,M,T,A,x){const g=this.elements;return g[0]=t,g[4]=i,g[8]=s,g[12]=l,g[1]=c,g[5]=h,g[9]=d,g[13]=m,g[2]=p,g[6]=S,g[10]=_,g[14]=y,g[3]=M,g[7]=T,g[11]=A,g[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Je().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,s=t.elements,l=1/_r.setFromMatrixColumn(t,0).length(),c=1/_r.setFromMatrixColumn(t,1).length(),h=1/_r.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*h,i[9]=s[9]*h,i[10]=s[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,c=t.z,h=Math.cos(s),d=Math.sin(s),m=Math.cos(l),p=Math.sin(l),S=Math.cos(c),_=Math.sin(c);if(t.order==="XYZ"){const y=h*S,M=h*_,T=d*S,A=d*_;i[0]=m*S,i[4]=-m*_,i[8]=p,i[1]=M+T*p,i[5]=y-A*p,i[9]=-d*m,i[2]=A-y*p,i[6]=T+M*p,i[10]=h*m}else if(t.order==="YXZ"){const y=m*S,M=m*_,T=p*S,A=p*_;i[0]=y+A*d,i[4]=T*d-M,i[8]=h*p,i[1]=h*_,i[5]=h*S,i[9]=-d,i[2]=M*d-T,i[6]=A+y*d,i[10]=h*m}else if(t.order==="ZXY"){const y=m*S,M=m*_,T=p*S,A=p*_;i[0]=y-A*d,i[4]=-h*_,i[8]=T+M*d,i[1]=M+T*d,i[5]=h*S,i[9]=A-y*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(t.order==="ZYX"){const y=h*S,M=h*_,T=d*S,A=d*_;i[0]=m*S,i[4]=T*p-M,i[8]=y*p+A,i[1]=m*_,i[5]=A*p+y,i[9]=M*p-T,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(t.order==="YZX"){const y=h*m,M=h*p,T=d*m,A=d*p;i[0]=m*S,i[4]=A-y*_,i[8]=T*_+M,i[1]=_,i[5]=h*S,i[9]=-d*S,i[2]=-p*S,i[6]=M*_+T,i[10]=y-A*_}else if(t.order==="XZY"){const y=h*m,M=h*p,T=d*m,A=d*p;i[0]=m*S,i[4]=-_,i[8]=p*S,i[1]=y*_+A,i[5]=h*S,i[9]=M*_-T,i[2]=T*_-M,i[6]=d*S,i[10]=A*_+y}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(uM,t,fM)}lookAt(t,i,s){const l=this.elements;return ai.subVectors(t,i),ai.lengthSq()===0&&(ai.z=1),ai.normalize(),Ga.crossVectors(s,ai),Ga.lengthSq()===0&&(Math.abs(s.z)===1?ai.x+=1e-4:ai.z+=1e-4,ai.normalize(),Ga.crossVectors(s,ai)),Ga.normalize(),Sc.crossVectors(ai,Ga),l[0]=Ga.x,l[4]=Sc.x,l[8]=ai.x,l[1]=Ga.y,l[5]=Sc.y,l[9]=ai.y,l[2]=Ga.z,l[6]=Sc.z,l[10]=ai.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,h=s[0],d=s[4],m=s[8],p=s[12],S=s[1],_=s[5],y=s[9],M=s[13],T=s[2],A=s[6],x=s[10],g=s[14],P=s[3],N=s[7],D=s[11],G=s[15],F=l[0],z=l[4],W=l[8],w=l[12],R=l[1],V=l[5],K=l[9],rt=l[13],ht=l[2],lt=l[6],O=l[10],Q=l[14],j=l[3],vt=l[7],Mt=l[11],L=l[15];return c[0]=h*F+d*R+m*ht+p*j,c[4]=h*z+d*V+m*lt+p*vt,c[8]=h*W+d*K+m*O+p*Mt,c[12]=h*w+d*rt+m*Q+p*L,c[1]=S*F+_*R+y*ht+M*j,c[5]=S*z+_*V+y*lt+M*vt,c[9]=S*W+_*K+y*O+M*Mt,c[13]=S*w+_*rt+y*Q+M*L,c[2]=T*F+A*R+x*ht+g*j,c[6]=T*z+A*V+x*lt+g*vt,c[10]=T*W+A*K+x*O+g*Mt,c[14]=T*w+A*rt+x*Q+g*L,c[3]=P*F+N*R+D*ht+G*j,c[7]=P*z+N*V+D*lt+G*vt,c[11]=P*W+N*K+D*O+G*Mt,c[15]=P*w+N*rt+D*Q+G*L,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],c=t[12],h=t[1],d=t[5],m=t[9],p=t[13],S=t[2],_=t[6],y=t[10],M=t[14],T=t[3],A=t[7],x=t[11],g=t[15];return T*(+c*m*_-l*p*_-c*d*y+s*p*y+l*d*M-s*m*M)+A*(+i*m*M-i*p*y+c*h*y-l*h*M+l*p*S-c*m*S)+x*(+i*p*_-i*d*M-c*h*_+s*h*M+c*d*S-s*p*S)+g*(-l*d*S-i*m*_+i*d*y+l*h*_-s*h*y+s*m*S)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],S=t[8],_=t[9],y=t[10],M=t[11],T=t[12],A=t[13],x=t[14],g=t[15],P=_*x*p-A*y*p+A*m*M-d*x*M-_*m*g+d*y*g,N=T*y*p-S*x*p-T*m*M+h*x*M+S*m*g-h*y*g,D=S*A*p-T*_*p+T*d*M-h*A*M-S*d*g+h*_*g,G=T*_*m-S*A*m-T*d*y+h*A*y+S*d*x-h*_*x,F=i*P+s*N+l*D+c*G;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/F;return t[0]=P*z,t[1]=(A*y*c-_*x*c-A*l*M+s*x*M+_*l*g-s*y*g)*z,t[2]=(d*x*c-A*m*c+A*l*p-s*x*p-d*l*g+s*m*g)*z,t[3]=(_*m*c-d*y*c-_*l*p+s*y*p+d*l*M-s*m*M)*z,t[4]=N*z,t[5]=(S*x*c-T*y*c+T*l*M-i*x*M-S*l*g+i*y*g)*z,t[6]=(T*m*c-h*x*c-T*l*p+i*x*p+h*l*g-i*m*g)*z,t[7]=(h*y*c-S*m*c+S*l*p-i*y*p-h*l*M+i*m*M)*z,t[8]=D*z,t[9]=(T*_*c-S*A*c-T*s*M+i*A*M+S*s*g-i*_*g)*z,t[10]=(h*A*c-T*d*c+T*s*p-i*A*p-h*s*g+i*d*g)*z,t[11]=(S*d*c-h*_*c-S*s*p+i*_*p+h*s*M-i*d*M)*z,t[12]=G*z,t[13]=(S*A*l-T*_*l+T*s*y-i*A*y-S*s*x+i*_*x)*z,t[14]=(T*d*l-h*A*l-T*s*m+i*A*m+h*s*x-i*d*x)*z,t[15]=(h*_*l-S*d*l+S*s*m-i*_*m-h*s*y+i*d*y)*z,this}scale(t){const i=this.elements,s=t.x,l=t.y,c=t.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,h=t.x,d=t.y,m=t.z,p=c*h,S=c*d;return this.set(p*h+s,p*d-l*m,p*m+l*d,0,p*d+l*m,S*d+s,S*m-l*h,0,p*m-l*d,S*m+l*h,c*m*m+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,c,h){return this.set(1,s,c,0,t,1,h,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,c=i._x,h=i._y,d=i._z,m=i._w,p=c+c,S=h+h,_=d+d,y=c*p,M=c*S,T=c*_,A=h*S,x=h*_,g=d*_,P=m*p,N=m*S,D=m*_,G=s.x,F=s.y,z=s.z;return l[0]=(1-(A+g))*G,l[1]=(M+D)*G,l[2]=(T-N)*G,l[3]=0,l[4]=(M-D)*F,l[5]=(1-(y+g))*F,l[6]=(x+P)*F,l[7]=0,l[8]=(T+N)*z,l[9]=(x-P)*z,l[10]=(1-(y+A))*z,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;let c=_r.set(l[0],l[1],l[2]).length();const h=_r.set(l[4],l[5],l[6]).length(),d=_r.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),t.x=l[12],t.y=l[13],t.z=l[14],Ei.copy(this);const p=1/c,S=1/h,_=1/d;return Ei.elements[0]*=p,Ei.elements[1]*=p,Ei.elements[2]*=p,Ei.elements[4]*=S,Ei.elements[5]*=S,Ei.elements[6]*=S,Ei.elements[8]*=_,Ei.elements[9]*=_,Ei.elements[10]*=_,i.setFromRotationMatrix(Ei),s.x=c,s.y=h,s.z=d,this}makePerspective(t,i,s,l,c,h,d=Bi,m=!1){const p=this.elements,S=2*c/(i-t),_=2*c/(s-l),y=(i+t)/(i-t),M=(s+l)/(s-l);let T,A;if(m)T=c/(h-c),A=h*c/(h-c);else if(d===Bi)T=-(h+c)/(h-c),A=-2*h*c/(h-c);else if(d===qc)T=-h/(h-c),A=-h*c/(h-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=S,p[4]=0,p[8]=y,p[12]=0,p[1]=0,p[5]=_,p[9]=M,p[13]=0,p[2]=0,p[6]=0,p[10]=T,p[14]=A,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,s,l,c,h,d=Bi,m=!1){const p=this.elements,S=2/(i-t),_=2/(s-l),y=-(i+t)/(i-t),M=-(s+l)/(s-l);let T,A;if(m)T=1/(h-c),A=h/(h-c);else if(d===Bi)T=-2/(h-c),A=-(h+c)/(h-c);else if(d===qc)T=-1/(h-c),A=-c/(h-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=S,p[4]=0,p[8]=0,p[12]=y,p[1]=0,p[5]=_,p[9]=0,p[13]=M,p[2]=0,p[6]=0,p[10]=T,p[14]=A,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}}const _r=new I,Ei=new Je,uM=new I(0,0,0),fM=new I(1,1,1),Ga=new I,Sc=new I,ai=new I,i_=new Je,a_=new el;class Hi{constructor(t=0,i=0,s=0,l=Hi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,c=l[0],h=l[4],d=l[8],m=l[1],p=l[5],S=l[9],_=l[2],y=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(Me(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-S,M),this._z=Math.atan2(-h,c)):(this._x=Math.atan2(y,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Me(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(Me(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-_,M),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Me(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(y,M),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(Me(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-S,p),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-Me(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(y,p),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-S,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return i_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(i_,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return a_.setFromEuler(this),this.setFromQuaternion(a_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Hi.DEFAULT_ORDER="XYZ";class _v{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let hM=0;const s_=new I,vr=new el,oa=new Je,yc=new I,zo=new I,dM=new I,pM=new el,r_=new I(1,0,0),o_=new I(0,1,0),l_=new I(0,0,1),c_={type:"added"},mM={type:"removed"},Sr={type:"childadded",child:null},bh={type:"childremoved",child:null};class En extends Fr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:hM++}),this.uuid=ha(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=En.DEFAULT_UP.clone();const t=new I,i=new Hi,s=new el,l=new I(1,1,1);function c(){s.setFromEuler(i,!1)}function h(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Je},normalMatrix:{value:new ue}}),this.matrix=new Je,this.matrixWorld=new Je,this.matrixAutoUpdate=En.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=En.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _v,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return vr.setFromAxisAngle(t,i),this.quaternion.multiply(vr),this}rotateOnWorldAxis(t,i){return vr.setFromAxisAngle(t,i),this.quaternion.premultiply(vr),this}rotateX(t){return this.rotateOnAxis(r_,t)}rotateY(t){return this.rotateOnAxis(o_,t)}rotateZ(t){return this.rotateOnAxis(l_,t)}translateOnAxis(t,i){return s_.copy(t).applyQuaternion(this.quaternion),this.position.add(s_.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(r_,t)}translateY(t){return this.translateOnAxis(o_,t)}translateZ(t){return this.translateOnAxis(l_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(oa.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?yc.copy(t):yc.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),zo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?oa.lookAt(zo,yc,this.up):oa.lookAt(yc,zo,this.up),this.quaternion.setFromRotationMatrix(oa),l&&(oa.extractRotation(l.matrixWorld),vr.setFromRotationMatrix(oa),this.quaternion.premultiply(vr.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(c_),Sr.child=t,this.dispatchEvent(Sr),Sr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(mM),bh.child=t,this.dispatchEvent(bh),bh.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),oa.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),oa.multiply(t.parent.matrixWorld)),t.applyMatrix4(oa),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(c_),Sr.child=t,this.dispatchEvent(Sr),Sr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const h=this.children[s].getObjectByProperty(t,i);if(h!==void 0)return h}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zo,t,dM),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zo,pM,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,S=m.length;p<S;p++){const _=m[p];c(t.shapes,_)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(c(t.materials,this.material[m]));l.material=d}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(c(t.animations,m))}}if(i){const d=h(t.geometries),m=h(t.materials),p=h(t.textures),S=h(t.images),_=h(t.shapes),y=h(t.skeletons),M=h(t.animations),T=h(t.nodes);d.length>0&&(s.geometries=d),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),S.length>0&&(s.images=S),_.length>0&&(s.shapes=_),y.length>0&&(s.skeletons=y),M.length>0&&(s.animations=M),T.length>0&&(s.nodes=T)}return s.object=l,s;function h(d){const m=[];for(const p in d){const S=d[p];delete S.metadata,m.push(S)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}En.DEFAULT_UP=new I(0,1,0);En.DEFAULT_MATRIX_AUTO_UPDATE=!0;En.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ti=new I,la=new I,Ah=new I,ca=new I,yr=new I,xr=new I,u_=new I,Ch=new I,Rh=new I,wh=new I,Dh=new ke,Uh=new ke,Lh=new ke;class vi{constructor(t=new I,i=new I,s=new I){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),Ti.subVectors(t,i),l.cross(Ti);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,s,l,c){Ti.subVectors(l,i),la.subVectors(s,i),Ah.subVectors(t,i);const h=Ti.dot(Ti),d=Ti.dot(la),m=Ti.dot(Ah),p=la.dot(la),S=la.dot(Ah),_=h*p-d*d;if(_===0)return c.set(0,0,0),null;const y=1/_,M=(p*m-d*S)*y,T=(h*S-d*m)*y;return c.set(1-M-T,T,M)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,ca)===null?!1:ca.x>=0&&ca.y>=0&&ca.x+ca.y<=1}static getInterpolation(t,i,s,l,c,h,d,m){return this.getBarycoord(t,i,s,l,ca)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,ca.x),m.addScaledVector(h,ca.y),m.addScaledVector(d,ca.z),m)}static getInterpolatedAttribute(t,i,s,l,c,h){return Dh.setScalar(0),Uh.setScalar(0),Lh.setScalar(0),Dh.fromBufferAttribute(t,i),Uh.fromBufferAttribute(t,s),Lh.fromBufferAttribute(t,l),h.setScalar(0),h.addScaledVector(Dh,c.x),h.addScaledVector(Uh,c.y),h.addScaledVector(Lh,c.z),h}static isFrontFacing(t,i,s,l){return Ti.subVectors(s,i),la.subVectors(t,i),Ti.cross(la).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ti.subVectors(this.c,this.b),la.subVectors(this.a,this.b),Ti.cross(la).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return vi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return vi.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,c){return vi.getInterpolation(t,this.a,this.b,this.c,i,s,l,c)}containsPoint(t){return vi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return vi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,c=this.c;let h,d;yr.subVectors(l,s),xr.subVectors(c,s),Ch.subVectors(t,s);const m=yr.dot(Ch),p=xr.dot(Ch);if(m<=0&&p<=0)return i.copy(s);Rh.subVectors(t,l);const S=yr.dot(Rh),_=xr.dot(Rh);if(S>=0&&_<=S)return i.copy(l);const y=m*_-S*p;if(y<=0&&m>=0&&S<=0)return h=m/(m-S),i.copy(s).addScaledVector(yr,h);wh.subVectors(t,c);const M=yr.dot(wh),T=xr.dot(wh);if(T>=0&&M<=T)return i.copy(c);const A=M*p-m*T;if(A<=0&&p>=0&&T<=0)return d=p/(p-T),i.copy(s).addScaledVector(xr,d);const x=S*T-M*_;if(x<=0&&_-S>=0&&M-T>=0)return u_.subVectors(c,l),d=(_-S)/(_-S+(M-T)),i.copy(l).addScaledVector(u_,d);const g=1/(x+A+y);return h=A*g,d=y*g,i.copy(s).addScaledVector(yr,h).addScaledVector(xr,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const vv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Va={h:0,s:0,l:0},xc={h:0,s:0,l:0};function Nh(o,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(t-o)*6*i:i<1/2?t:i<2/3?o+(t-o)*6*(2/3-i):o}class ve{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=Zn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,we.colorSpaceToWorking(this,i),this}setRGB(t,i,s,l=we.workingColorSpace){return this.r=t,this.g=i,this.b=s,we.colorSpaceToWorking(this,l),this}setHSL(t,i,s,l=we.workingColorSpace){if(t=Zd(t,1),i=Me(i,0,1),s=Me(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,h=2*s-c;this.r=Nh(h,c,t+1/3),this.g=Nh(h,c,t),this.b=Nh(h,c,t-1/3)}return we.colorSpaceToWorking(this,l),this}setStyle(t,i=Zn){function s(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],h=c.length;if(h===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(c,16),i);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=Zn){const s=vv[t.toLowerCase()];return s!==void 0?this.setHex(s,i):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=da(t.r),this.g=da(t.g),this.b=da(t.b),this}copyLinearToSRGB(t){return this.r=Lr(t.r),this.g=Lr(t.g),this.b=Lr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Zn){return we.workingToColorSpace(Nn.copy(this),t),Math.round(Me(Nn.r*255,0,255))*65536+Math.round(Me(Nn.g*255,0,255))*256+Math.round(Me(Nn.b*255,0,255))}getHexString(t=Zn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=we.workingColorSpace){we.workingToColorSpace(Nn.copy(this),i);const s=Nn.r,l=Nn.g,c=Nn.b,h=Math.max(s,l,c),d=Math.min(s,l,c);let m,p;const S=(d+h)/2;if(d===h)m=0,p=0;else{const _=h-d;switch(p=S<=.5?_/(h+d):_/(2-h-d),h){case s:m=(l-c)/_+(l<c?6:0);break;case l:m=(c-s)/_+2;break;case c:m=(s-l)/_+4;break}m/=6}return t.h=m,t.s=p,t.l=S,t}getRGB(t,i=we.workingColorSpace){return we.workingToColorSpace(Nn.copy(this),i),t.r=Nn.r,t.g=Nn.g,t.b=Nn.b,t}getStyle(t=Zn){we.workingToColorSpace(Nn.copy(this),t);const i=Nn.r,s=Nn.g,l=Nn.b;return t!==Zn?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(Va),this.setHSL(Va.h+t,Va.s+i,Va.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(Va),t.getHSL(xc);const s=qo(Va.h,xc.h,i),l=qo(Va.s,xc.s,i),c=qo(Va.l,xc.l,i);return this.setHSL(s,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Nn=new ve;ve.NAMES=vv;let gM=0;class ws extends Fr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:gM++}),this.uuid=ha(),this.name="",this.type="Material",this.blending=Ur,this.side=Za,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Qh,this.blendDst=Jh,this.blendEquation=Es,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ve(0,0,0),this.blendAlpha=0,this.depthFunc=Nr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=K0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=hr,this.stencilZFail=hr,this.stencilZPass=hr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Ur&&(s.blending=this.blending),this.side!==Za&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Qh&&(s.blendSrc=this.blendSrc),this.blendDst!==Jh&&(s.blendDst=this.blendDst),this.blendEquation!==Es&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Nr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==K0&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==hr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==hr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==hr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const h=[];for(const d in c){const m=c[d];delete m.metadata,h.push(m)}return h}if(i){const c=l(t.textures),h=l(t.images);c.length>0&&(s.textures=c),h.length>0&&(s.images=h)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Yo extends ws{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hi,this.combine=nv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const pn=new I,Mc=new fe;let _M=0;class Ri{constructor(t,i,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:_M++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=Bd,this.updateRanges=[],this.gpuType=fa,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)Mc.fromBufferAttribute(this,i),Mc.applyMatrix3(t),this.setXY(i,Mc.x,Mc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)pn.fromBufferAttribute(this,i),pn.applyMatrix3(t),this.setXYZ(i,pn.x,pn.y,pn.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)pn.fromBufferAttribute(this,i),pn.applyMatrix4(t),this.setXYZ(i,pn.x,pn.y,pn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)pn.fromBufferAttribute(this,i),pn.applyNormalMatrix(t),this.setXYZ(i,pn.x,pn.y,pn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)pn.fromBufferAttribute(this,i),pn.transformDirection(t),this.setXYZ(i,pn.x,pn.y,pn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=bi(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=Ie(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=bi(i,this.array)),i}setX(t,i){return this.normalized&&(i=Ie(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=bi(i,this.array)),i}setY(t,i){return this.normalized&&(i=Ie(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=bi(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Ie(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=bi(i,this.array)),i}setW(t,i){return this.normalized&&(i=Ie(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=Ie(i,this.array),s=Ie(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=Ie(i,this.array),s=Ie(s,this.array),l=Ie(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,c){return t*=this.itemSize,this.normalized&&(i=Ie(i,this.array),s=Ie(s,this.array),l=Ie(l,this.array),c=Ie(c,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Bd&&(t.usage=this.usage),t}}class Sv extends Ri{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class yv extends Ri{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class Ze extends Ri{constructor(t,i,s){super(new Float32Array(t),i,s)}}let vM=0;const _i=new Je,Ph=new En,Mr=new I,si=new nl,Io=new nl,Mn=new I;class Gn extends Fr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:vM++}),this.uuid=ha(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(pv(t)?yv:Sv)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new ue().getNormalMatrix(t);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return _i.makeRotationFromQuaternion(t),this.applyMatrix4(_i),this}rotateX(t){return _i.makeRotationX(t),this.applyMatrix4(_i),this}rotateY(t){return _i.makeRotationY(t),this.applyMatrix4(_i),this}rotateZ(t){return _i.makeRotationZ(t),this.applyMatrix4(_i),this}translate(t,i,s){return _i.makeTranslation(t,i,s),this.applyMatrix4(_i),this}scale(t,i,s){return _i.makeScale(t,i,s),this.applyMatrix4(_i),this}lookAt(t){return Ph.lookAt(t),Ph.updateMatrix(),this.applyMatrix4(Ph.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Mr).negate(),this.translate(Mr.x,Mr.y,Mr.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=t.length;l<c;l++){const h=t[l];s.push(h.x,h.y,h.z||0)}this.setAttribute("position",new Ze(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new nl);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];si.setFromBufferAttribute(c),this.morphTargetsRelative?(Mn.addVectors(this.boundingBox.min,si.min),this.boundingBox.expandByPoint(Mn),Mn.addVectors(this.boundingBox.max,si.max),this.boundingBox.expandByPoint(Mn)):(this.boundingBox.expandByPoint(si.min),this.boundingBox.expandByPoint(si.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new tu);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){const s=this.boundingSphere.center;if(si.setFromBufferAttribute(t),i)for(let c=0,h=i.length;c<h;c++){const d=i[c];Io.setFromBufferAttribute(d),this.morphTargetsRelative?(Mn.addVectors(si.min,Io.min),si.expandByPoint(Mn),Mn.addVectors(si.max,Io.max),si.expandByPoint(Mn)):(si.expandByPoint(Io.min),si.expandByPoint(Io.max))}si.getCenter(s);let l=0;for(let c=0,h=t.count;c<h;c++)Mn.fromBufferAttribute(t,c),l=Math.max(l,s.distanceToSquared(Mn));if(i)for(let c=0,h=i.length;c<h;c++){const d=i[c],m=this.morphTargetsRelative;for(let p=0,S=d.count;p<S;p++)Mn.fromBufferAttribute(d,p),m&&(Mr.fromBufferAttribute(t,p),Mn.add(Mr)),l=Math.max(l,s.distanceToSquared(Mn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ri(new Float32Array(4*s.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let W=0;W<s.count;W++)d[W]=new I,m[W]=new I;const p=new I,S=new I,_=new I,y=new fe,M=new fe,T=new fe,A=new I,x=new I;function g(W,w,R){p.fromBufferAttribute(s,W),S.fromBufferAttribute(s,w),_.fromBufferAttribute(s,R),y.fromBufferAttribute(c,W),M.fromBufferAttribute(c,w),T.fromBufferAttribute(c,R),S.sub(p),_.sub(p),M.sub(y),T.sub(y);const V=1/(M.x*T.y-T.x*M.y);isFinite(V)&&(A.copy(S).multiplyScalar(T.y).addScaledVector(_,-M.y).multiplyScalar(V),x.copy(_).multiplyScalar(M.x).addScaledVector(S,-T.x).multiplyScalar(V),d[W].add(A),d[w].add(A),d[R].add(A),m[W].add(x),m[w].add(x),m[R].add(x))}let P=this.groups;P.length===0&&(P=[{start:0,count:t.count}]);for(let W=0,w=P.length;W<w;++W){const R=P[W],V=R.start,K=R.count;for(let rt=V,ht=V+K;rt<ht;rt+=3)g(t.getX(rt+0),t.getX(rt+1),t.getX(rt+2))}const N=new I,D=new I,G=new I,F=new I;function z(W){G.fromBufferAttribute(l,W),F.copy(G);const w=d[W];N.copy(w),N.sub(G.multiplyScalar(G.dot(w))).normalize(),D.crossVectors(F,w);const V=D.dot(m[W])<0?-1:1;h.setXYZW(W,N.x,N.y,N.z,V)}for(let W=0,w=P.length;W<w;++W){const R=P[W],V=R.start,K=R.count;for(let rt=V,ht=V+K;rt<ht;rt+=3)z(t.getX(rt+0)),z(t.getX(rt+1)),z(t.getX(rt+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Ri(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let y=0,M=s.count;y<M;y++)s.setXYZ(y,0,0,0);const l=new I,c=new I,h=new I,d=new I,m=new I,p=new I,S=new I,_=new I;if(t)for(let y=0,M=t.count;y<M;y+=3){const T=t.getX(y+0),A=t.getX(y+1),x=t.getX(y+2);l.fromBufferAttribute(i,T),c.fromBufferAttribute(i,A),h.fromBufferAttribute(i,x),S.subVectors(h,c),_.subVectors(l,c),S.cross(_),d.fromBufferAttribute(s,T),m.fromBufferAttribute(s,A),p.fromBufferAttribute(s,x),d.add(S),m.add(S),p.add(S),s.setXYZ(T,d.x,d.y,d.z),s.setXYZ(A,m.x,m.y,m.z),s.setXYZ(x,p.x,p.y,p.z)}else for(let y=0,M=i.count;y<M;y+=3)l.fromBufferAttribute(i,y+0),c.fromBufferAttribute(i,y+1),h.fromBufferAttribute(i,y+2),S.subVectors(h,c),_.subVectors(l,c),S.cross(_),s.setXYZ(y+0,S.x,S.y,S.z),s.setXYZ(y+1,S.x,S.y,S.z),s.setXYZ(y+2,S.x,S.y,S.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)Mn.fromBufferAttribute(t,i),Mn.normalize(),t.setXYZ(i,Mn.x,Mn.y,Mn.z)}toNonIndexed(){function t(d,m){const p=d.array,S=d.itemSize,_=d.normalized,y=new p.constructor(m.length*S);let M=0,T=0;for(let A=0,x=m.length;A<x;A++){d.isInterleavedBufferAttribute?M=m[A]*d.data.stride+d.offset:M=m[A]*S;for(let g=0;g<S;g++)y[T++]=p[M++]}return new Ri(y,S,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Gn,s=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=t(m,s);i.setAttribute(d,p)}const c=this.morphAttributes;for(const d in c){const m=[],p=c[d];for(let S=0,_=p.length;S<_;S++){const y=p[S],M=t(y,s);m.push(M)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],S=[];for(let _=0,y=p.length;_<y;_++){const M=p[_];S.push(M.toJSON(t.data))}S.length>0&&(l[m]=S,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(t.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere=d.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const p in l){const S=l[p];this.setAttribute(p,S.clone(i))}const c=t.morphAttributes;for(const p in c){const S=[],_=c[p];for(let y=0,M=_.length;y<M;y++)S.push(_[y].clone(i));this.morphAttributes[p]=S}this.morphTargetsRelative=t.morphTargetsRelative;const h=t.groups;for(let p=0,S=h.length;p<S;p++){const _=h[p];this.addGroup(_.start,_.count,_.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const f_=new Je,_s=new gv,Ec=new tu,h_=new I,Tc=new I,bc=new I,Ac=new I,Oh=new I,Cc=new I,d_=new I,Rc=new I;class Ue extends En{constructor(t=new Gn,i=new Yo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,h=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(c&&d){Cc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const S=d[m],_=c[m];S!==0&&(Oh.fromBufferAttribute(_,t),h?Cc.addScaledVector(Oh,S):Cc.addScaledVector(Oh.sub(i),S))}i.add(Cc)}return i}raycast(t,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Ec.copy(s.boundingSphere),Ec.applyMatrix4(c),_s.copy(t.ray).recast(t.near),!(Ec.containsPoint(_s.origin)===!1&&(_s.intersectSphere(Ec,h_)===null||_s.origin.distanceToSquared(h_)>(t.far-t.near)**2))&&(f_.copy(c).invert(),_s.copy(t.ray).applyMatrix4(f_),!(s.boundingBox!==null&&_s.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,_s)))}_computeIntersections(t,i,s){let l;const c=this.geometry,h=this.material,d=c.index,m=c.attributes.position,p=c.attributes.uv,S=c.attributes.uv1,_=c.attributes.normal,y=c.groups,M=c.drawRange;if(d!==null)if(Array.isArray(h))for(let T=0,A=y.length;T<A;T++){const x=y[T],g=h[x.materialIndex],P=Math.max(x.start,M.start),N=Math.min(d.count,Math.min(x.start+x.count,M.start+M.count));for(let D=P,G=N;D<G;D+=3){const F=d.getX(D),z=d.getX(D+1),W=d.getX(D+2);l=wc(this,g,t,s,p,S,_,F,z,W),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=x.materialIndex,i.push(l))}}else{const T=Math.max(0,M.start),A=Math.min(d.count,M.start+M.count);for(let x=T,g=A;x<g;x+=3){const P=d.getX(x),N=d.getX(x+1),D=d.getX(x+2);l=wc(this,h,t,s,p,S,_,P,N,D),l&&(l.faceIndex=Math.floor(x/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let T=0,A=y.length;T<A;T++){const x=y[T],g=h[x.materialIndex],P=Math.max(x.start,M.start),N=Math.min(m.count,Math.min(x.start+x.count,M.start+M.count));for(let D=P,G=N;D<G;D+=3){const F=D,z=D+1,W=D+2;l=wc(this,g,t,s,p,S,_,F,z,W),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=x.materialIndex,i.push(l))}}else{const T=Math.max(0,M.start),A=Math.min(m.count,M.start+M.count);for(let x=T,g=A;x<g;x+=3){const P=x,N=x+1,D=x+2;l=wc(this,h,t,s,p,S,_,P,N,D),l&&(l.faceIndex=Math.floor(x/3),i.push(l))}}}}function SM(o,t,i,s,l,c,h,d){let m;if(t.side===jn?m=s.intersectTriangle(h,c,l,!0,d):m=s.intersectTriangle(l,c,h,t.side===Za,d),m===null)return null;Rc.copy(d),Rc.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(Rc);return p<i.near||p>i.far?null:{distance:p,point:Rc.clone(),object:o}}function wc(o,t,i,s,l,c,h,d,m,p){o.getVertexPosition(d,Tc),o.getVertexPosition(m,bc),o.getVertexPosition(p,Ac);const S=SM(o,t,i,s,Tc,bc,Ac,d_);if(S){const _=new I;vi.getBarycoord(d_,Tc,bc,Ac,_),l&&(S.uv=vi.getInterpolatedAttribute(l,d,m,p,_,new fe)),c&&(S.uv1=vi.getInterpolatedAttribute(c,d,m,p,_,new fe)),h&&(S.normal=vi.getInterpolatedAttribute(h,d,m,p,_,new I),S.normal.dot(s.direction)>0&&S.normal.multiplyScalar(-1));const y={a:d,b:m,c:p,normal:new I,materialIndex:0};vi.getNormal(Tc,bc,Ac,y.normal),S.face=y,S.barycoord=_}return S}class Ya extends Gn{constructor(t=1,i=1,s=1,l=1,c=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:h};const d=this;l=Math.floor(l),c=Math.floor(c),h=Math.floor(h);const m=[],p=[],S=[],_=[];let y=0,M=0;T("z","y","x",-1,-1,s,i,t,h,c,0),T("z","y","x",1,-1,s,i,-t,h,c,1),T("x","z","y",1,1,t,s,i,l,h,2),T("x","z","y",1,-1,t,s,-i,l,h,3),T("x","y","z",1,-1,t,i,s,l,c,4),T("x","y","z",-1,-1,t,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new Ze(p,3)),this.setAttribute("normal",new Ze(S,3)),this.setAttribute("uv",new Ze(_,2));function T(A,x,g,P,N,D,G,F,z,W,w){const R=D/z,V=G/W,K=D/2,rt=G/2,ht=F/2,lt=z+1,O=W+1;let Q=0,j=0;const vt=new I;for(let Mt=0;Mt<O;Mt++){const L=Mt*V-rt;for(let nt=0;nt<lt;nt++){const yt=nt*R-K;vt[A]=yt*P,vt[x]=L*N,vt[g]=ht,p.push(vt.x,vt.y,vt.z),vt[A]=0,vt[x]=0,vt[g]=F>0?1:-1,S.push(vt.x,vt.y,vt.z),_.push(nt/z),_.push(1-Mt/W),Q+=1}}for(let Mt=0;Mt<W;Mt++)for(let L=0;L<z;L++){const nt=y+L+lt*Mt,yt=y+L+lt*(Mt+1),bt=y+(L+1)+lt*(Mt+1),Nt=y+(L+1)+lt*Mt;m.push(nt,yt,Nt),m.push(yt,bt,Nt),j+=6}d.addGroup(M,j,w),M+=j,y+=Q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ya(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ir(o){const t={};for(const i in o){t[i]={};for(const s in o[i]){const l=o[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone():Array.isArray(l)?t[i][s]=l.slice():t[i][s]=l}}return t}function Fn(o){const t={};for(let i=0;i<o.length;i++){const s=Ir(o[i]);for(const l in s)t[l]=s[l]}return t}function yM(o){const t=[];for(let i=0;i<o.length;i++)t.push(o[i].clone());return t}function xv(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:we.workingColorSpace}const xM={clone:Ir,merge:Fn};var MM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,EM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ja extends ws{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=MM,this.fragmentShader=EM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ir(t.uniforms),this.uniformsGroups=yM(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(t).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class Mv extends En{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Je,this.projectionMatrix=new Je,this.projectionMatrixInverse=new Je,this.coordinateSystem=Bi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ka=new I,p_=new fe,m_=new fe;class oi extends Mv{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=Jo*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Wo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Jo*2*Math.atan(Math.tan(Wo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){ka.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ka.x,ka.y).multiplyScalar(-t/ka.z),ka.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(ka.x,ka.y).multiplyScalar(-t/ka.z)}getViewSize(t,i){return this.getViewBounds(t,p_,m_),i.subVectors(m_,p_)}setViewOffset(t,i,s,l,c,h){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(Wo*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;c+=h.offsetX*l/m,i-=h.offsetY*s/p,l*=h.width/m,s*=h.height/p}const d=this.filmOffset;d!==0&&(c+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Er=-90,Tr=1;class TM extends En{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new oi(Er,Tr,t,i);l.layers=this.layers,this.add(l);const c=new oi(Er,Tr,t,i);c.layers=this.layers,this.add(c);const h=new oi(Er,Tr,t,i);h.layers=this.layers,this.add(h);const d=new oi(Er,Tr,t,i);d.layers=this.layers,this.add(d);const m=new oi(Er,Tr,t,i);m.layers=this.layers,this.add(m);const p=new oi(Er,Tr,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,c,h,d,m]=i;for(const p of i)this.remove(p);if(t===Bi)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===qc)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,h,d,m,p,S]=this.children,_=t.getRenderTarget(),y=t.getActiveCubeFace(),M=t.getActiveMipmapLevel(),T=t.xr.enabled;t.xr.enabled=!1;const A=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,t.setRenderTarget(s,0,l),t.render(i,c),t.setRenderTarget(s,1,l),t.render(i,h),t.setRenderTarget(s,2,l),t.render(i,d),t.setRenderTarget(s,3,l),t.render(i,m),t.setRenderTarget(s,4,l),t.render(i,p),s.texture.generateMipmaps=A,t.setRenderTarget(s,5,l),t.render(i,S),t.setRenderTarget(_,y,M),t.xr.enabled=T,s.texture.needsPMREMUpdate=!0}}class Ev extends Hn{constructor(t=[],i=Pr,s,l,c,h,d,m,p,S){super(t,i,s,l,c,h,d,m,p,S),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class bM extends Rs{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new Ev(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new Ya(5,5,5),c=new ja({name:"CubemapFromEquirect",uniforms:Ir(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:jn,blending:Wa});c.uniforms.tEquirect.value=i;const h=new Ue(l,c),d=i.minFilter;return i.minFilter===As&&(i.minFilter=Ii),new TM(1,10,this).update(t,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(t,i=!0,s=!0,l=!0){const c=t.getRenderTarget();for(let h=0;h<6;h++)t.setRenderTarget(this,h),t.clear(i,s,l);t.setRenderTarget(c)}}class an extends En{constructor(){super(),this.isGroup=!0,this.type="Group"}}const AM={type:"move"};class zh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new an,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new an,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new an,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,c=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){h=!0;for(const A of t.hand.values()){const x=i.getJointPose(A,s),g=this._getHandJoint(p,A);x!==null&&(g.matrix.fromArray(x.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=x.radius),g.visible=x!==null}const S=p.joints["index-finger-tip"],_=p.joints["thumb-tip"],y=S.position.distanceTo(_.position),M=.02,T=.005;p.inputState.pinching&&y>M+T?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&y<=M-T&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(AM)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new an;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}class Kd{constructor(t,i=1,s=1e3){this.isFog=!0,this.name="",this.color=new ve(t),this.near=i,this.far=s}clone(){return new Kd(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class CM extends En{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Hi,this.environmentIntensity=1,this.environmentRotation=new Hi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class RM{constructor(t,i){this.isInterleavedBuffer=!0,this.array=t,this.stride=i,this.count=t!==void 0?t.length/i:0,this.usage=Bd,this.updateRanges=[],this.version=0,this.uuid=ha()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,i,s){t*=this.stride,s*=i.stride;for(let l=0,c=this.stride;l<c;l++)this.array[t+l]=i.array[s+l];return this}set(t,i=0){return this.array.set(t,i),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ha()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const i=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),s=new this.constructor(i,this.stride);return s.setUsage(this.usage),s}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ha()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Bn=new I;class Zc{constructor(t,i,s,l=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=i,this.offset=s,this.normalized=l}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let i=0,s=this.data.count;i<s;i++)Bn.fromBufferAttribute(this,i),Bn.applyMatrix4(t),this.setXYZ(i,Bn.x,Bn.y,Bn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)Bn.fromBufferAttribute(this,i),Bn.applyNormalMatrix(t),this.setXYZ(i,Bn.x,Bn.y,Bn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)Bn.fromBufferAttribute(this,i),Bn.transformDirection(t),this.setXYZ(i,Bn.x,Bn.y,Bn.z);return this}getComponent(t,i){let s=this.array[t*this.data.stride+this.offset+i];return this.normalized&&(s=bi(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=Ie(s,this.array)),this.data.array[t*this.data.stride+this.offset+i]=s,this}setX(t,i){return this.normalized&&(i=Ie(i,this.array)),this.data.array[t*this.data.stride+this.offset]=i,this}setY(t,i){return this.normalized&&(i=Ie(i,this.array)),this.data.array[t*this.data.stride+this.offset+1]=i,this}setZ(t,i){return this.normalized&&(i=Ie(i,this.array)),this.data.array[t*this.data.stride+this.offset+2]=i,this}setW(t,i){return this.normalized&&(i=Ie(i,this.array)),this.data.array[t*this.data.stride+this.offset+3]=i,this}getX(t){let i=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(i=bi(i,this.array)),i}getY(t){let i=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(i=bi(i,this.array)),i}getZ(t){let i=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(i=bi(i,this.array)),i}getW(t){let i=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(i=bi(i,this.array)),i}setXY(t,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(i=Ie(i,this.array),s=Ie(s,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=s,this}setXYZ(t,i,s,l){return t=t*this.data.stride+this.offset,this.normalized&&(i=Ie(i,this.array),s=Ie(s,this.array),l=Ie(l,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=s,this.data.array[t+2]=l,this}setXYZW(t,i,s,l,c){return t=t*this.data.stride+this.offset,this.normalized&&(i=Ie(i,this.array),s=Ie(s,this.array),l=Ie(l,this.array),c=Ie(c,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=s,this.data.array[t+2]=l,this.data.array[t+3]=c,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let s=0;s<this.count;s++){const l=s*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)i.push(this.data.array[l+c])}return new Ri(new this.array.constructor(i),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Zc(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let s=0;s<this.count;s++){const l=s*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)i.push(this.data.array[l+c])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:i,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Tv extends ws{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ve(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let br;const Bo=new I,Ar=new I,Cr=new I,Rr=new fe,Fo=new fe,bv=new Je,Dc=new I,Ho=new I,Uc=new I,g_=new fe,Ih=new fe,__=new fe;class wM extends En{constructor(t=new Tv){if(super(),this.isSprite=!0,this.type="Sprite",br===void 0){br=new Gn;const i=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),s=new RM(i,5);br.setIndex([0,1,2,0,2,3]),br.setAttribute("position",new Zc(s,3,0,!1)),br.setAttribute("uv",new Zc(s,2,3,!1))}this.geometry=br,this.material=t,this.center=new fe(.5,.5),this.count=1}raycast(t,i){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ar.setFromMatrixScale(this.matrixWorld),bv.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Cr.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ar.multiplyScalar(-Cr.z);const s=this.material.rotation;let l,c;s!==0&&(c=Math.cos(s),l=Math.sin(s));const h=this.center;Lc(Dc.set(-.5,-.5,0),Cr,h,Ar,l,c),Lc(Ho.set(.5,-.5,0),Cr,h,Ar,l,c),Lc(Uc.set(.5,.5,0),Cr,h,Ar,l,c),g_.set(0,0),Ih.set(1,0),__.set(1,1);let d=t.ray.intersectTriangle(Dc,Ho,Uc,!1,Bo);if(d===null&&(Lc(Ho.set(-.5,.5,0),Cr,h,Ar,l,c),Ih.set(0,1),d=t.ray.intersectTriangle(Dc,Uc,Ho,!1,Bo),d===null))return;const m=t.ray.origin.distanceTo(Bo);m<t.near||m>t.far||i.push({distance:m,point:Bo.clone(),uv:vi.getInterpolation(Bo,Dc,Ho,Uc,g_,Ih,__,new fe),face:null,object:this})}copy(t,i){return super.copy(t,i),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Lc(o,t,i,s,l,c){Rr.subVectors(o,i).addScalar(.5).multiply(s),l!==void 0?(Fo.x=c*Rr.x-l*Rr.y,Fo.y=l*Rr.x+c*Rr.y):Fo.copy(Rr),o.copy(t),o.x+=Fo.x,o.y+=Fo.y,o.applyMatrix4(bv)}const Bh=new I,DM=new I,UM=new ue;class xs{constructor(t=new I(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=Bh.subVectors(s,i).cross(DM.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const s=t.delta(Bh),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(s,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||UM.getNormalMatrix(t),l=this.coplanarPoint(Bh).applyMatrix4(t),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const vs=new tu,LM=new fe(.5,.5),Nc=new I;class Qd{constructor(t=new xs,i=new xs,s=new xs,l=new xs,c=new xs,h=new xs){this.planes=[t,i,s,l,c,h]}set(t,i,s,l,c,h){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(s),d[3].copy(l),d[4].copy(c),d[5].copy(h),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=Bi,s=!1){const l=this.planes,c=t.elements,h=c[0],d=c[1],m=c[2],p=c[3],S=c[4],_=c[5],y=c[6],M=c[7],T=c[8],A=c[9],x=c[10],g=c[11],P=c[12],N=c[13],D=c[14],G=c[15];if(l[0].setComponents(p-h,M-S,g-T,G-P).normalize(),l[1].setComponents(p+h,M+S,g+T,G+P).normalize(),l[2].setComponents(p+d,M+_,g+A,G+N).normalize(),l[3].setComponents(p-d,M-_,g-A,G-N).normalize(),s)l[4].setComponents(m,y,x,D).normalize(),l[5].setComponents(p-m,M-y,g-x,G-D).normalize();else if(l[4].setComponents(p-m,M-y,g-x,G-D).normalize(),i===Bi)l[5].setComponents(p+m,M+y,g+x,G+D).normalize();else if(i===qc)l[5].setComponents(m,y,x,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),vs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),vs.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(vs)}intersectsSprite(t){vs.center.set(0,0,0);const i=LM.distanceTo(t.center);return vs.radius=.7071067811865476+i,vs.applyMatrix4(t.matrixWorld),this.intersectsSphere(vs)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Nc.x=l.normal.x>0?t.max.x:t.min.x,Nc.y=l.normal.y>0?t.max.y:t.min.y,Nc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Nc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Av extends ws{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ve(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const jc=new I,Kc=new I,v_=new Je,Go=new gv,Pc=new tu,Fh=new I,S_=new I;class NM extends En{constructor(t=new Gn,i=new Av){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[0];for(let l=1,c=i.count;l<c;l++)jc.fromBufferAttribute(i,l-1),Kc.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=jc.distanceTo(Kc);t.setAttribute("lineDistance",new Ze(s,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,i){const s=this.geometry,l=this.matrixWorld,c=t.params.Line.threshold,h=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Pc.copy(s.boundingSphere),Pc.applyMatrix4(l),Pc.radius+=c,t.ray.intersectsSphere(Pc)===!1)return;v_.copy(l).invert(),Go.copy(t.ray).applyMatrix4(v_);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=this.isLineSegments?2:1,S=s.index,y=s.attributes.position;if(S!==null){const M=Math.max(0,h.start),T=Math.min(S.count,h.start+h.count);for(let A=M,x=T-1;A<x;A+=p){const g=S.getX(A),P=S.getX(A+1),N=Oc(this,t,Go,m,g,P,A);N&&i.push(N)}if(this.isLineLoop){const A=S.getX(T-1),x=S.getX(M),g=Oc(this,t,Go,m,A,x,T-1);g&&i.push(g)}}else{const M=Math.max(0,h.start),T=Math.min(y.count,h.start+h.count);for(let A=M,x=T-1;A<x;A+=p){const g=Oc(this,t,Go,m,A,A+1,A);g&&i.push(g)}if(this.isLineLoop){const A=Oc(this,t,Go,m,T-1,M,T-1);A&&i.push(A)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function Oc(o,t,i,s,l,c,h){const d=o.geometry.attributes.position;if(jc.fromBufferAttribute(d,l),Kc.fromBufferAttribute(d,c),i.distanceSqToSegment(jc,Kc,Fh,S_)>s)return;Fh.applyMatrix4(o.matrixWorld);const p=t.ray.origin.distanceTo(Fh);if(!(p<t.near||p>t.far))return{distance:p,point:S_.clone().applyMatrix4(o.matrixWorld),index:h,face:null,faceIndex:null,barycoord:null,object:o}}const y_=new I,x_=new I;class PM extends NM{constructor(t,i){super(t,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[];for(let l=0,c=i.count;l<c;l+=2)y_.fromBufferAttribute(i,l),x_.fromBufferAttribute(i,l+1),s[l]=l===0?0:s[l-1],s[l+1]=s[l]+y_.distanceTo(x_);t.setAttribute("lineDistance",new Ze(s,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class OM extends Hn{constructor(t,i,s,l,c,h,d,m,p){super(t,i,s,l,c,h,d,m,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Cv extends Hn{constructor(t,i,s=Cs,l,c,h,d=Ci,m=Ci,p,S=Ko,_=1){if(S!==Ko&&S!==Qo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const y={width:t,height:i,depth:_};super(y,l,c,h,d,m,S,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new jd(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Rv extends Hn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Qc extends Gn{constructor(t=1,i=1,s=4,l=8,c=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:i,capSegments:s,radialSegments:l,heightSegments:c},i=Math.max(0,i),s=Math.max(1,Math.floor(s)),l=Math.max(3,Math.floor(l)),c=Math.max(1,Math.floor(c));const h=[],d=[],m=[],p=[],S=i/2,_=Math.PI/2*t,y=i,M=2*_+y,T=s*2+c,A=l+1,x=new I,g=new I;for(let P=0;P<=T;P++){let N=0,D=0,G=0,F=0;if(P<=s){const w=P/s,R=w*Math.PI/2;D=-S-t*Math.cos(R),G=t*Math.sin(R),F=-t*Math.cos(R),N=w*_}else if(P<=s+c){const w=(P-s)/c;D=-S+w*i,G=t,F=0,N=_+w*y}else{const w=(P-s-c)/s,R=w*Math.PI/2;D=S+t*Math.sin(R),G=t*Math.cos(R),F=t*Math.sin(R),N=_+y+w*_}const z=Math.max(0,Math.min(1,N/M));let W=0;P===0?W=.5/l:P===T&&(W=-.5/l);for(let w=0;w<=l;w++){const R=w/l,V=R*Math.PI*2,K=Math.sin(V),rt=Math.cos(V);g.x=-G*rt,g.y=D,g.z=G*K,d.push(g.x,g.y,g.z),x.set(-G*rt,F,G*K),x.normalize(),m.push(x.x,x.y,x.z),p.push(R+W,z)}if(P>0){const w=(P-1)*A;for(let R=0;R<l;R++){const V=w+R,K=w+R+1,rt=P*A+R,ht=P*A+R+1;h.push(V,K,rt),h.push(K,ht,rt)}}}this.setIndex(h),this.setAttribute("position",new Ze(d,3)),this.setAttribute("normal",new Ze(m,3)),this.setAttribute("uv",new Ze(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qc(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}}class ri extends Gn{constructor(t=1,i=1,s=1,l=32,c=1,h=!1,d=0,m=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:i,height:s,radialSegments:l,heightSegments:c,openEnded:h,thetaStart:d,thetaLength:m};const p=this;l=Math.floor(l),c=Math.floor(c);const S=[],_=[],y=[],M=[];let T=0;const A=[],x=s/2;let g=0;P(),h===!1&&(t>0&&N(!0),i>0&&N(!1)),this.setIndex(S),this.setAttribute("position",new Ze(_,3)),this.setAttribute("normal",new Ze(y,3)),this.setAttribute("uv",new Ze(M,2));function P(){const D=new I,G=new I;let F=0;const z=(i-t)/s;for(let W=0;W<=c;W++){const w=[],R=W/c,V=R*(i-t)+t;for(let K=0;K<=l;K++){const rt=K/l,ht=rt*m+d,lt=Math.sin(ht),O=Math.cos(ht);G.x=V*lt,G.y=-R*s+x,G.z=V*O,_.push(G.x,G.y,G.z),D.set(lt,z,O).normalize(),y.push(D.x,D.y,D.z),M.push(rt,1-R),w.push(T++)}A.push(w)}for(let W=0;W<l;W++)for(let w=0;w<c;w++){const R=A[w][W],V=A[w+1][W],K=A[w+1][W+1],rt=A[w][W+1];(t>0||w!==0)&&(S.push(R,V,rt),F+=3),(i>0||w!==c-1)&&(S.push(V,K,rt),F+=3)}p.addGroup(g,F,0),g+=F}function N(D){const G=T,F=new fe,z=new I;let W=0;const w=D===!0?t:i,R=D===!0?1:-1;for(let K=1;K<=l;K++)_.push(0,x*R,0),y.push(0,R,0),M.push(.5,.5),T++;const V=T;for(let K=0;K<=l;K++){const ht=K/l*m+d,lt=Math.cos(ht),O=Math.sin(ht);z.x=w*O,z.y=x*R,z.z=w*lt,_.push(z.x,z.y,z.z),y.push(0,R,0),F.x=lt*.5+.5,F.y=O*.5*R+.5,M.push(F.x,F.y),T++}for(let K=0;K<l;K++){const rt=G+K,ht=V+K;D===!0?S.push(ht,ht+1,rt):S.push(ht+1,ht,rt),W+=3}p.addGroup(g,W,D===!0?1:2),g+=W}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ri(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Br extends Gn{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const c=t/2,h=i/2,d=Math.floor(s),m=Math.floor(l),p=d+1,S=m+1,_=t/d,y=i/m,M=[],T=[],A=[],x=[];for(let g=0;g<S;g++){const P=g*y-h;for(let N=0;N<p;N++){const D=N*_-c;T.push(D,-P,0),A.push(0,0,1),x.push(N/d),x.push(1-g/m)}}for(let g=0;g<m;g++)for(let P=0;P<d;P++){const N=P+p*g,D=P+p*(g+1),G=P+1+p*(g+1),F=P+1+p*g;M.push(N,D,F),M.push(D,G,F)}this.setIndex(M),this.setAttribute("position",new Ze(T,3)),this.setAttribute("normal",new Ze(A,3)),this.setAttribute("uv",new Ze(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Br(t.width,t.height,t.widthSegments,t.heightSegments)}}class Jd extends Gn{constructor(t=.5,i=1,s=32,l=1,c=0,h=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:i,thetaSegments:s,phiSegments:l,thetaStart:c,thetaLength:h},s=Math.max(3,s),l=Math.max(1,l);const d=[],m=[],p=[],S=[];let _=t;const y=(i-t)/l,M=new I,T=new fe;for(let A=0;A<=l;A++){for(let x=0;x<=s;x++){const g=c+x/s*h;M.x=_*Math.cos(g),M.y=_*Math.sin(g),m.push(M.x,M.y,M.z),p.push(0,0,1),T.x=(M.x/i+1)/2,T.y=(M.y/i+1)/2,S.push(T.x,T.y)}_+=y}for(let A=0;A<l;A++){const x=A*(s+1);for(let g=0;g<s;g++){const P=g+x,N=P,D=P+s+1,G=P+s+2,F=P+1;d.push(N,D,F),d.push(D,G,F)}}this.setIndex(d),this.setAttribute("position",new Ze(m,3)),this.setAttribute("normal",new Ze(p,3)),this.setAttribute("uv",new Ze(S,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Jd(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Jc extends Gn{constructor(t=1,i=32,s=16,l=0,c=Math.PI*2,h=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:s,phiStart:l,phiLength:c,thetaStart:h,thetaLength:d},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const m=Math.min(h+d,Math.PI);let p=0;const S=[],_=new I,y=new I,M=[],T=[],A=[],x=[];for(let g=0;g<=s;g++){const P=[],N=g/s;let D=0;g===0&&h===0?D=.5/i:g===s&&m===Math.PI&&(D=-.5/i);for(let G=0;G<=i;G++){const F=G/i;_.x=-t*Math.cos(l+F*c)*Math.sin(h+N*d),_.y=t*Math.cos(h+N*d),_.z=t*Math.sin(l+F*c)*Math.sin(h+N*d),T.push(_.x,_.y,_.z),y.copy(_).normalize(),A.push(y.x,y.y,y.z),x.push(F+D,1-N),P.push(p++)}S.push(P)}for(let g=0;g<s;g++)for(let P=0;P<i;P++){const N=S[g][P+1],D=S[g][P],G=S[g+1][P],F=S[g+1][P+1];(g!==0||h>0)&&M.push(N,D,F),(g!==s-1||m<Math.PI)&&M.push(D,G,F)}this.setIndex(M),this.setAttribute("position",new Ze(T,3)),this.setAttribute("normal",new Ze(A,3)),this.setAttribute("uv",new Ze(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Jc(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class $d extends Gn{constructor(t=1,i=.4,s=12,l=48,c=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:i,radialSegments:s,tubularSegments:l,arc:c},s=Math.floor(s),l=Math.floor(l);const h=[],d=[],m=[],p=[],S=new I,_=new I,y=new I;for(let M=0;M<=s;M++)for(let T=0;T<=l;T++){const A=T/l*c,x=M/s*Math.PI*2;_.x=(t+i*Math.cos(x))*Math.cos(A),_.y=(t+i*Math.cos(x))*Math.sin(A),_.z=i*Math.sin(x),d.push(_.x,_.y,_.z),S.x=t*Math.cos(A),S.y=t*Math.sin(A),y.subVectors(_,S).normalize(),m.push(y.x,y.y,y.z),p.push(T/l),p.push(M/s)}for(let M=1;M<=s;M++)for(let T=1;T<=l;T++){const A=(l+1)*M+T-1,x=(l+1)*(M-1)+T-1,g=(l+1)*(M-1)+T,P=(l+1)*M+T;h.push(A,x,P),h.push(x,g,P)}this.setIndex(h),this.setAttribute("position",new Ze(d,3)),this.setAttribute("normal",new Ze(m,3)),this.setAttribute("uv",new Ze(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $d(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class _n extends ws{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ve(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=hv,this.normalScale=new fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class zM extends ws{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=wx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class IM extends ws{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class tp extends En{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new ve(t),this.intensity=i}dispose(){}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}const Hh=new Je,M_=new I,E_=new I;class wv{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new fe(512,512),this.mapType=Fi,this.map=null,this.mapPass=null,this.matrix=new Je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Qd,this._frameExtents=new fe(1,1),this._viewportCount=1,this._viewports=[new ke(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,s=this.matrix;M_.setFromMatrixPosition(t.matrixWorld),i.position.copy(M_),E_.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(E_),i.updateMatrixWorld(),Hh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Hh,i.coordinateSystem,i.reversedDepth),i.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(Hh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const T_=new Je,Vo=new I,Gh=new I;class BM extends wv{constructor(){super(new oi(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new fe(4,2),this._viewportCount=6,this._viewports=[new ke(2,1,1,1),new ke(0,1,1,1),new ke(3,1,1,1),new ke(1,1,1,1),new ke(3,0,1,1),new ke(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(t,i=0){const s=this.camera,l=this.matrix,c=t.distance||s.far;c!==s.far&&(s.far=c,s.updateProjectionMatrix()),Vo.setFromMatrixPosition(t.matrixWorld),s.position.copy(Vo),Gh.copy(s.position),Gh.add(this._cubeDirections[i]),s.up.copy(this._cubeUps[i]),s.lookAt(Gh),s.updateMatrixWorld(),l.makeTranslation(-Vo.x,-Vo.y,-Vo.z),T_.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),this._frustum.setFromProjectionMatrix(T_,s.coordinateSystem,s.reversedDepth)}}class FM extends tp{constructor(t,i,s=0,l=2){super(t,i),this.isPointLight=!0,this.type="PointLight",this.distance=s,this.decay=l,this.shadow=new BM}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,i){return super.copy(t,i),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Dv extends Mv{constructor(t=-1,i=1,s=1,l=-1,c=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=h,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,c,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-t,h=s+t,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,S=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,h=c+p*this.view.width,d-=S*this.view.offsetY,m=d-S*this.view.height}this.projectionMatrix.makeOrthographic(c,h,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class HM extends wv{constructor(){super(new Dv(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class GM extends tp{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(En.DEFAULT_UP),this.updateMatrix(),this.target=new En,this.shadow=new HM}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class VM extends tp{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class kM extends oi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class XM{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();t=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=t}return t}}class WM extends PM{constructor(t=10,i=10,s=4473924,l=8947848){s=new ve(s),l=new ve(l);const c=i/2,h=t/i,d=t/2,m=[],p=[];for(let y=0,M=0,T=-d;y<=i;y++,T+=h){m.push(-d,0,T,d,0,T),m.push(T,0,-d,T,0,d);const A=y===c?s:l;A.toArray(p,M),M+=3,A.toArray(p,M),M+=3,A.toArray(p,M),M+=3,A.toArray(p,M),M+=3}const S=new Gn;S.setAttribute("position",new Ze(m,3)),S.setAttribute("color",new Ze(p,3));const _=new Av({vertexColors:!0,toneMapped:!1});super(S,_),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}function b_(o,t,i,s){const l=qM(s);switch(i){case lv:return o*t;case uv:return o*t/l.components*l.byteLength;case Wd:return o*t/l.components*l.byteLength;case fv:return o*t*2/l.components*l.byteLength;case qd:return o*t*2/l.components*l.byteLength;case cv:return o*t*3/l.components*l.byteLength;case Ai:return o*t*4/l.components*l.byteLength;case Yd:return o*t*4/l.components*l.byteLength;case Hc:case Gc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Vc:case kc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case fd:case dd:return Math.max(o,16)*Math.max(t,8)/4;case ud:case hd:return Math.max(o,8)*Math.max(t,8)/2;case pd:case md:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case gd:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case _d:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case vd:return Math.floor((o+4)/5)*Math.floor((t+3)/4)*16;case Sd:return Math.floor((o+4)/5)*Math.floor((t+4)/5)*16;case yd:return Math.floor((o+5)/6)*Math.floor((t+4)/5)*16;case xd:return Math.floor((o+5)/6)*Math.floor((t+5)/6)*16;case Md:return Math.floor((o+7)/8)*Math.floor((t+4)/5)*16;case Ed:return Math.floor((o+7)/8)*Math.floor((t+5)/6)*16;case Td:return Math.floor((o+7)/8)*Math.floor((t+7)/8)*16;case bd:return Math.floor((o+9)/10)*Math.floor((t+4)/5)*16;case Ad:return Math.floor((o+9)/10)*Math.floor((t+5)/6)*16;case Cd:return Math.floor((o+9)/10)*Math.floor((t+7)/8)*16;case Rd:return Math.floor((o+9)/10)*Math.floor((t+9)/10)*16;case wd:return Math.floor((o+11)/12)*Math.floor((t+9)/10)*16;case Dd:return Math.floor((o+11)/12)*Math.floor((t+11)/12)*16;case Ud:case Ld:case Nd:return Math.ceil(o/4)*Math.ceil(t/4)*16;case Pd:case Od:return Math.ceil(o/4)*Math.ceil(t/4)*8;case zd:case Id:return Math.ceil(o/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function qM(o){switch(o){case Fi:case av:return{byteLength:1,components:1};case Zo:case sv:case tl:return{byteLength:2,components:1};case kd:case Xd:return{byteLength:2,components:4};case Cs:case Vd:case fa:return{byteLength:4,components:1};case rv:case ov:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Gd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Gd);function Uv(){let o=null,t=!1,i=null,s=null;function l(c,h){i(c,h),s=o.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(s=o.requestAnimationFrame(l),t=!0)},stop:function(){o.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){o=c}}}function YM(o){const t=new WeakMap;function i(d,m){const p=d.array,S=d.usage,_=p.byteLength,y=o.createBuffer();o.bindBuffer(m,y),o.bufferData(m,p,S),d.onUploadCallback();let M;if(p instanceof Float32Array)M=o.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)M=o.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?M=o.HALF_FLOAT:M=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=o.SHORT;else if(p instanceof Uint32Array)M=o.UNSIGNED_INT;else if(p instanceof Int32Array)M=o.INT;else if(p instanceof Int8Array)M=o.BYTE;else if(p instanceof Uint8Array)M=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:y,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:_}}function s(d,m,p){const S=m.array,_=m.updateRanges;if(o.bindBuffer(p,d),_.length===0)o.bufferSubData(p,0,S);else{_.sort((M,T)=>M.start-T.start);let y=0;for(let M=1;M<_.length;M++){const T=_[y],A=_[M];A.start<=T.start+T.count+1?T.count=Math.max(T.count,A.start+A.count-T.start):(++y,_[y]=A)}_.length=y+1;for(let M=0,T=_.length;M<T;M++){const A=_[M];o.bufferSubData(p,A.start*S.BYTES_PER_ELEMENT,S,A.start,A.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=t.get(d);m&&(o.deleteBuffer(m.buffer),t.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const S=t.get(d);(!S||S.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=t.get(d);if(p===void 0)t.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,d,m),p.version=d.version}}return{get:l,remove:c,update:h}}var ZM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,jM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,KM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,QM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,JM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,$M=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,tE=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,eE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,nE=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,iE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,aE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,sE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,rE=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,oE=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,lE=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,cE=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,uE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,fE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,hE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,dE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,pE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,mE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,gE=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,_E=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,vE=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,SE=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,yE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,xE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ME=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,EE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,TE="gl_FragColor = linearToOutputTexel( gl_FragColor );",bE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,AE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,CE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,RE=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,wE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,DE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,UE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,LE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,NE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,PE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,OE=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,zE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,IE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,BE=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,FE=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,HE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,GE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,VE=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,kE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,XE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,WE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,qE=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,YE=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ZE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,jE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,KE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,QE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,JE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$E=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,t1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,e1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,n1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,i1=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,a1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,s1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,r1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,o1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,l1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,c1=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,u1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,f1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,h1=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,d1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,p1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,m1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,g1=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,_1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,v1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,S1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,y1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,x1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,M1=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,E1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,T1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,b1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,A1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,C1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,R1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,w1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,D1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,U1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,L1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,N1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,P1=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,O1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,z1=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,I1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,B1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,F1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,H1=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,G1=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,V1=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,k1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,X1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,W1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,q1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Y1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Z1=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,j1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,K1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Q1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,J1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,tT=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,eT=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,nT=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,iT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,aT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sT=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,rT=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,oT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,lT=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cT=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,uT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fT=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,hT=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,pT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,mT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_T=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,vT=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ST=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xT=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,MT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ET=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,TT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,bT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,AT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,he={alphahash_fragment:ZM,alphahash_pars_fragment:jM,alphamap_fragment:KM,alphamap_pars_fragment:QM,alphatest_fragment:JM,alphatest_pars_fragment:$M,aomap_fragment:tE,aomap_pars_fragment:eE,batching_pars_vertex:nE,batching_vertex:iE,begin_vertex:aE,beginnormal_vertex:sE,bsdfs:rE,iridescence_fragment:oE,bumpmap_pars_fragment:lE,clipping_planes_fragment:cE,clipping_planes_pars_fragment:uE,clipping_planes_pars_vertex:fE,clipping_planes_vertex:hE,color_fragment:dE,color_pars_fragment:pE,color_pars_vertex:mE,color_vertex:gE,common:_E,cube_uv_reflection_fragment:vE,defaultnormal_vertex:SE,displacementmap_pars_vertex:yE,displacementmap_vertex:xE,emissivemap_fragment:ME,emissivemap_pars_fragment:EE,colorspace_fragment:TE,colorspace_pars_fragment:bE,envmap_fragment:AE,envmap_common_pars_fragment:CE,envmap_pars_fragment:RE,envmap_pars_vertex:wE,envmap_physical_pars_fragment:HE,envmap_vertex:DE,fog_vertex:UE,fog_pars_vertex:LE,fog_fragment:NE,fog_pars_fragment:PE,gradientmap_pars_fragment:OE,lightmap_pars_fragment:zE,lights_lambert_fragment:IE,lights_lambert_pars_fragment:BE,lights_pars_begin:FE,lights_toon_fragment:GE,lights_toon_pars_fragment:VE,lights_phong_fragment:kE,lights_phong_pars_fragment:XE,lights_physical_fragment:WE,lights_physical_pars_fragment:qE,lights_fragment_begin:YE,lights_fragment_maps:ZE,lights_fragment_end:jE,logdepthbuf_fragment:KE,logdepthbuf_pars_fragment:QE,logdepthbuf_pars_vertex:JE,logdepthbuf_vertex:$E,map_fragment:t1,map_pars_fragment:e1,map_particle_fragment:n1,map_particle_pars_fragment:i1,metalnessmap_fragment:a1,metalnessmap_pars_fragment:s1,morphinstance_vertex:r1,morphcolor_vertex:o1,morphnormal_vertex:l1,morphtarget_pars_vertex:c1,morphtarget_vertex:u1,normal_fragment_begin:f1,normal_fragment_maps:h1,normal_pars_fragment:d1,normal_pars_vertex:p1,normal_vertex:m1,normalmap_pars_fragment:g1,clearcoat_normal_fragment_begin:_1,clearcoat_normal_fragment_maps:v1,clearcoat_pars_fragment:S1,iridescence_pars_fragment:y1,opaque_fragment:x1,packing:M1,premultiplied_alpha_fragment:E1,project_vertex:T1,dithering_fragment:b1,dithering_pars_fragment:A1,roughnessmap_fragment:C1,roughnessmap_pars_fragment:R1,shadowmap_pars_fragment:w1,shadowmap_pars_vertex:D1,shadowmap_vertex:U1,shadowmask_pars_fragment:L1,skinbase_vertex:N1,skinning_pars_vertex:P1,skinning_vertex:O1,skinnormal_vertex:z1,specularmap_fragment:I1,specularmap_pars_fragment:B1,tonemapping_fragment:F1,tonemapping_pars_fragment:H1,transmission_fragment:G1,transmission_pars_fragment:V1,uv_pars_fragment:k1,uv_pars_vertex:X1,uv_vertex:W1,worldpos_vertex:q1,background_vert:Y1,background_frag:Z1,backgroundCube_vert:j1,backgroundCube_frag:K1,cube_vert:Q1,cube_frag:J1,depth_vert:$1,depth_frag:tT,distanceRGBA_vert:eT,distanceRGBA_frag:nT,equirect_vert:iT,equirect_frag:aT,linedashed_vert:sT,linedashed_frag:rT,meshbasic_vert:oT,meshbasic_frag:lT,meshlambert_vert:cT,meshlambert_frag:uT,meshmatcap_vert:fT,meshmatcap_frag:hT,meshnormal_vert:dT,meshnormal_frag:pT,meshphong_vert:mT,meshphong_frag:gT,meshphysical_vert:_T,meshphysical_frag:vT,meshtoon_vert:ST,meshtoon_frag:yT,points_vert:xT,points_frag:MT,shadow_vert:ET,shadow_frag:TT,sprite_vert:bT,sprite_frag:AT},Lt={common:{diffuse:{value:new ve(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ue},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ue}},envmap:{envMap:{value:null},envMapRotation:{value:new ue},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ue},normalScale:{value:new fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0},uvTransform:{value:new ue}},sprite:{diffuse:{value:new ve(16777215)},opacity:{value:1},center:{value:new fe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ue},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0}}},Oi={basic:{uniforms:Fn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.fog]),vertexShader:he.meshbasic_vert,fragmentShader:he.meshbasic_frag},lambert:{uniforms:Fn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new ve(0)}}]),vertexShader:he.meshlambert_vert,fragmentShader:he.meshlambert_frag},phong:{uniforms:Fn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new ve(0)},specular:{value:new ve(1118481)},shininess:{value:30}}]),vertexShader:he.meshphong_vert,fragmentShader:he.meshphong_frag},standard:{uniforms:Fn([Lt.common,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.roughnessmap,Lt.metalnessmap,Lt.fog,Lt.lights,{emissive:{value:new ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:he.meshphysical_vert,fragmentShader:he.meshphysical_frag},toon:{uniforms:Fn([Lt.common,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.gradientmap,Lt.fog,Lt.lights,{emissive:{value:new ve(0)}}]),vertexShader:he.meshtoon_vert,fragmentShader:he.meshtoon_frag},matcap:{uniforms:Fn([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,{matcap:{value:null}}]),vertexShader:he.meshmatcap_vert,fragmentShader:he.meshmatcap_frag},points:{uniforms:Fn([Lt.points,Lt.fog]),vertexShader:he.points_vert,fragmentShader:he.points_frag},dashed:{uniforms:Fn([Lt.common,Lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:he.linedashed_vert,fragmentShader:he.linedashed_frag},depth:{uniforms:Fn([Lt.common,Lt.displacementmap]),vertexShader:he.depth_vert,fragmentShader:he.depth_frag},normal:{uniforms:Fn([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,{opacity:{value:1}}]),vertexShader:he.meshnormal_vert,fragmentShader:he.meshnormal_frag},sprite:{uniforms:Fn([Lt.sprite,Lt.fog]),vertexShader:he.sprite_vert,fragmentShader:he.sprite_frag},background:{uniforms:{uvTransform:{value:new ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:he.background_vert,fragmentShader:he.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ue}},vertexShader:he.backgroundCube_vert,fragmentShader:he.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:he.cube_vert,fragmentShader:he.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:he.equirect_vert,fragmentShader:he.equirect_frag},distanceRGBA:{uniforms:Fn([Lt.common,Lt.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:he.distanceRGBA_vert,fragmentShader:he.distanceRGBA_frag},shadow:{uniforms:Fn([Lt.lights,Lt.fog,{color:{value:new ve(0)},opacity:{value:1}}]),vertexShader:he.shadow_vert,fragmentShader:he.shadow_frag}};Oi.physical={uniforms:Fn([Oi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ue},clearcoatNormalScale:{value:new fe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ue},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ue},sheen:{value:0},sheenColor:{value:new ve(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ue},transmissionSamplerSize:{value:new fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ue},attenuationDistance:{value:0},attenuationColor:{value:new ve(0)},specularColor:{value:new ve(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ue},anisotropyVector:{value:new fe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ue}}]),vertexShader:he.meshphysical_vert,fragmentShader:he.meshphysical_frag};const zc={r:0,b:0,g:0},Ss=new Hi,CT=new Je;function RT(o,t,i,s,l,c,h){const d=new ve(0);let m=c===!0?0:1,p,S,_=null,y=0,M=null;function T(N){let D=N.isScene===!0?N.background:null;return D&&D.isTexture&&(D=(N.backgroundBlurriness>0?i:t).get(D)),D}function A(N){let D=!1;const G=T(N);G===null?g(d,m):G&&G.isColor&&(g(G,1),D=!0);const F=o.xr.getEnvironmentBlendMode();F==="additive"?s.buffers.color.setClear(0,0,0,1,h):F==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,h),(o.autoClear||D)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function x(N,D){const G=T(D);G&&(G.isCubeTexture||G.mapping===$c)?(S===void 0&&(S=new Ue(new Ya(1,1,1),new ja({name:"BackgroundCubeMaterial",uniforms:Ir(Oi.backgroundCube.uniforms),vertexShader:Oi.backgroundCube.vertexShader,fragmentShader:Oi.backgroundCube.fragmentShader,side:jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),S.geometry.deleteAttribute("normal"),S.geometry.deleteAttribute("uv"),S.onBeforeRender=function(F,z,W){this.matrixWorld.copyPosition(W.matrixWorld)},Object.defineProperty(S.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(S)),Ss.copy(D.backgroundRotation),Ss.x*=-1,Ss.y*=-1,Ss.z*=-1,G.isCubeTexture&&G.isRenderTargetTexture===!1&&(Ss.y*=-1,Ss.z*=-1),S.material.uniforms.envMap.value=G,S.material.uniforms.flipEnvMap.value=G.isCubeTexture&&G.isRenderTargetTexture===!1?-1:1,S.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,S.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,S.material.uniforms.backgroundRotation.value.setFromMatrix4(CT.makeRotationFromEuler(Ss)),S.material.toneMapped=we.getTransfer(G.colorSpace)!==Ve,(_!==G||y!==G.version||M!==o.toneMapping)&&(S.material.needsUpdate=!0,_=G,y=G.version,M=o.toneMapping),S.layers.enableAll(),N.unshift(S,S.geometry,S.material,0,0,null)):G&&G.isTexture&&(p===void 0&&(p=new Ue(new Br(2,2),new ja({name:"BackgroundMaterial",uniforms:Ir(Oi.background.uniforms),vertexShader:Oi.background.vertexShader,fragmentShader:Oi.background.fragmentShader,side:Za,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=G,p.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,p.material.toneMapped=we.getTransfer(G.colorSpace)!==Ve,G.matrixAutoUpdate===!0&&G.updateMatrix(),p.material.uniforms.uvTransform.value.copy(G.matrix),(_!==G||y!==G.version||M!==o.toneMapping)&&(p.material.needsUpdate=!0,_=G,y=G.version,M=o.toneMapping),p.layers.enableAll(),N.unshift(p,p.geometry,p.material,0,0,null))}function g(N,D){N.getRGB(zc,xv(o)),s.buffers.color.setClear(zc.r,zc.g,zc.b,D,h)}function P(){S!==void 0&&(S.geometry.dispose(),S.material.dispose(),S=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(N,D=1){d.set(N),m=D,g(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(N){m=N,g(d,m)},render:A,addToRenderList:x,dispose:P}}function wT(o,t){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),s={},l=y(null);let c=l,h=!1;function d(R,V,K,rt,ht){let lt=!1;const O=_(rt,K,V);c!==O&&(c=O,p(c.object)),lt=M(R,rt,K,ht),lt&&T(R,rt,K,ht),ht!==null&&t.update(ht,o.ELEMENT_ARRAY_BUFFER),(lt||h)&&(h=!1,D(R,V,K,rt),ht!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(ht).buffer))}function m(){return o.createVertexArray()}function p(R){return o.bindVertexArray(R)}function S(R){return o.deleteVertexArray(R)}function _(R,V,K){const rt=K.wireframe===!0;let ht=s[R.id];ht===void 0&&(ht={},s[R.id]=ht);let lt=ht[V.id];lt===void 0&&(lt={},ht[V.id]=lt);let O=lt[rt];return O===void 0&&(O=y(m()),lt[rt]=O),O}function y(R){const V=[],K=[],rt=[];for(let ht=0;ht<i;ht++)V[ht]=0,K[ht]=0,rt[ht]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:K,attributeDivisors:rt,object:R,attributes:{},index:null}}function M(R,V,K,rt){const ht=c.attributes,lt=V.attributes;let O=0;const Q=K.getAttributes();for(const j in Q)if(Q[j].location>=0){const Mt=ht[j];let L=lt[j];if(L===void 0&&(j==="instanceMatrix"&&R.instanceMatrix&&(L=R.instanceMatrix),j==="instanceColor"&&R.instanceColor&&(L=R.instanceColor)),Mt===void 0||Mt.attribute!==L||L&&Mt.data!==L.data)return!0;O++}return c.attributesNum!==O||c.index!==rt}function T(R,V,K,rt){const ht={},lt=V.attributes;let O=0;const Q=K.getAttributes();for(const j in Q)if(Q[j].location>=0){let Mt=lt[j];Mt===void 0&&(j==="instanceMatrix"&&R.instanceMatrix&&(Mt=R.instanceMatrix),j==="instanceColor"&&R.instanceColor&&(Mt=R.instanceColor));const L={};L.attribute=Mt,Mt&&Mt.data&&(L.data=Mt.data),ht[j]=L,O++}c.attributes=ht,c.attributesNum=O,c.index=rt}function A(){const R=c.newAttributes;for(let V=0,K=R.length;V<K;V++)R[V]=0}function x(R){g(R,0)}function g(R,V){const K=c.newAttributes,rt=c.enabledAttributes,ht=c.attributeDivisors;K[R]=1,rt[R]===0&&(o.enableVertexAttribArray(R),rt[R]=1),ht[R]!==V&&(o.vertexAttribDivisor(R,V),ht[R]=V)}function P(){const R=c.newAttributes,V=c.enabledAttributes;for(let K=0,rt=V.length;K<rt;K++)V[K]!==R[K]&&(o.disableVertexAttribArray(K),V[K]=0)}function N(R,V,K,rt,ht,lt,O){O===!0?o.vertexAttribIPointer(R,V,K,ht,lt):o.vertexAttribPointer(R,V,K,rt,ht,lt)}function D(R,V,K,rt){A();const ht=rt.attributes,lt=K.getAttributes(),O=V.defaultAttributeValues;for(const Q in lt){const j=lt[Q];if(j.location>=0){let vt=ht[Q];if(vt===void 0&&(Q==="instanceMatrix"&&R.instanceMatrix&&(vt=R.instanceMatrix),Q==="instanceColor"&&R.instanceColor&&(vt=R.instanceColor)),vt!==void 0){const Mt=vt.normalized,L=vt.itemSize,nt=t.get(vt);if(nt===void 0)continue;const yt=nt.buffer,bt=nt.type,Nt=nt.bytesPerElement,it=bt===o.INT||bt===o.UNSIGNED_INT||vt.gpuType===Vd;if(vt.isInterleavedBufferAttribute){const ct=vt.data,wt=ct.stride,It=vt.offset;if(ct.isInstancedInterleavedBuffer){for(let kt=0;kt<j.locationSize;kt++)g(j.location+kt,ct.meshPerAttribute);R.isInstancedMesh!==!0&&rt._maxInstanceCount===void 0&&(rt._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let kt=0;kt<j.locationSize;kt++)x(j.location+kt);o.bindBuffer(o.ARRAY_BUFFER,yt);for(let kt=0;kt<j.locationSize;kt++)N(j.location+kt,L/j.locationSize,bt,Mt,wt*Nt,(It+L/j.locationSize*kt)*Nt,it)}else{if(vt.isInstancedBufferAttribute){for(let ct=0;ct<j.locationSize;ct++)g(j.location+ct,vt.meshPerAttribute);R.isInstancedMesh!==!0&&rt._maxInstanceCount===void 0&&(rt._maxInstanceCount=vt.meshPerAttribute*vt.count)}else for(let ct=0;ct<j.locationSize;ct++)x(j.location+ct);o.bindBuffer(o.ARRAY_BUFFER,yt);for(let ct=0;ct<j.locationSize;ct++)N(j.location+ct,L/j.locationSize,bt,Mt,L*Nt,L/j.locationSize*ct*Nt,it)}}else if(O!==void 0){const Mt=O[Q];if(Mt!==void 0)switch(Mt.length){case 2:o.vertexAttrib2fv(j.location,Mt);break;case 3:o.vertexAttrib3fv(j.location,Mt);break;case 4:o.vertexAttrib4fv(j.location,Mt);break;default:o.vertexAttrib1fv(j.location,Mt)}}}}P()}function G(){W();for(const R in s){const V=s[R];for(const K in V){const rt=V[K];for(const ht in rt)S(rt[ht].object),delete rt[ht];delete V[K]}delete s[R]}}function F(R){if(s[R.id]===void 0)return;const V=s[R.id];for(const K in V){const rt=V[K];for(const ht in rt)S(rt[ht].object),delete rt[ht];delete V[K]}delete s[R.id]}function z(R){for(const V in s){const K=s[V];if(K[R.id]===void 0)continue;const rt=K[R.id];for(const ht in rt)S(rt[ht].object),delete rt[ht];delete K[R.id]}}function W(){w(),h=!0,c!==l&&(c=l,p(c.object))}function w(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:W,resetDefaultState:w,dispose:G,releaseStatesOfGeometry:F,releaseStatesOfProgram:z,initAttributes:A,enableAttribute:x,disableUnusedAttributes:P}}function DT(o,t,i){let s;function l(p){s=p}function c(p,S){o.drawArrays(s,p,S),i.update(S,s,1)}function h(p,S,_){_!==0&&(o.drawArraysInstanced(s,p,S,_),i.update(S,s,_))}function d(p,S,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,S,0,_);let M=0;for(let T=0;T<_;T++)M+=S[T];i.update(M,s,1)}function m(p,S,_,y){if(_===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let T=0;T<p.length;T++)h(p[T],S[T],y[T]);else{M.multiDrawArraysInstancedWEBGL(s,p,0,S,0,y,0,_);let T=0;for(let A=0;A<_;A++)T+=S[A]*y[A];i.update(T,s,1)}}this.setMode=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function UT(o,t,i,s){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const z=t.get("EXT_texture_filter_anisotropic");l=o.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(z){return!(z!==Ai&&s.convert(z)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(z){const W=z===tl&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(z!==Fi&&s.convert(z)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==fa&&!W)}function m(z){if(z==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const S=m(p);S!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",S,"instead."),p=S);const _=i.logarithmicDepthBuffer===!0,y=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),M=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),T=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=o.getParameter(o.MAX_TEXTURE_SIZE),x=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),g=o.getParameter(o.MAX_VERTEX_ATTRIBS),P=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),N=o.getParameter(o.MAX_VARYING_VECTORS),D=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),G=T>0,F=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:_,reversedDepthBuffer:y,maxTextures:M,maxVertexTextures:T,maxTextureSize:A,maxCubemapSize:x,maxAttributes:g,maxVertexUniforms:P,maxVaryings:N,maxFragmentUniforms:D,vertexTextures:G,maxSamples:F}}function LT(o){const t=this;let i=null,s=0,l=!1,c=!1;const h=new xs,d=new ue,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(_,y){const M=_.length!==0||y||s!==0||l;return l=y,s=_.length,M},this.beginShadows=function(){c=!0,S(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,y){i=S(_,y,0)},this.setState=function(_,y,M){const T=_.clippingPlanes,A=_.clipIntersection,x=_.clipShadows,g=o.get(_);if(!l||T===null||T.length===0||c&&!x)c?S(null):p();else{const P=c?0:s,N=P*4;let D=g.clippingState||null;m.value=D,D=S(T,y,N,M);for(let G=0;G!==N;++G)D[G]=i[G];g.clippingState=D,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=P}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function S(_,y,M,T){const A=_!==null?_.length:0;let x=null;if(A!==0){if(x=m.value,T!==!0||x===null){const g=M+A*4,P=y.matrixWorldInverse;d.getNormalMatrix(P),(x===null||x.length<g)&&(x=new Float32Array(g));for(let N=0,D=M;N!==A;++N,D+=4)h.copy(_[N]).applyMatrix4(P,d),h.normal.toArray(x,D),x[D+3]=h.constant}m.value=x,m.needsUpdate=!0}return t.numPlanes=A,t.numIntersection=0,x}}function NT(o){let t=new WeakMap;function i(h,d){return d===rd?h.mapping=Pr:d===od&&(h.mapping=Or),h}function s(h){if(h&&h.isTexture){const d=h.mapping;if(d===rd||d===od)if(t.has(h)){const m=t.get(h).texture;return i(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const p=new bM(m.height);return p.fromEquirectangularTexture(o,h),t.set(h,p),h.addEventListener("dispose",l),i(p.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function c(){t=new WeakMap}return{get:s,dispose:c}}const Dr=4,A_=[.125,.215,.35,.446,.526,.582],Ts=20,Vh=new Dv,C_=new ve;let kh=null,Xh=0,Wh=0,qh=!1;const Ms=(1+Math.sqrt(5))/2,wr=1/Ms,R_=[new I(-Ms,wr,0),new I(Ms,wr,0),new I(-wr,0,Ms),new I(wr,0,Ms),new I(0,Ms,-wr),new I(0,Ms,wr),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)],PT=new I;class w_{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,i=0,s=.1,l=100,c={}){const{size:h=256,position:d=PT}=c;kh=this._renderer.getRenderTarget(),Xh=this._renderer.getActiveCubeFace(),Wh=this._renderer.getActiveMipmapLevel(),qh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,s,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=L_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=U_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(kh,Xh,Wh),this._renderer.xr.enabled=qh,t.scissorTest=!1,Ic(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Pr||t.mapping===Or?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),kh=this._renderer.getRenderTarget(),Xh=this._renderer.getActiveCubeFace(),Wh=this._renderer.getActiveMipmapLevel(),qh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Ii,minFilter:Ii,generateMipmaps:!1,type:tl,format:Ai,colorSpace:zr,depthBuffer:!1},l=D_(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=D_(t,i,s);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=OT(c)),this._blurMaterial=zT(c,t,i)}return l}_compileMaterial(t){const i=new Ue(this._lodPlanes[0],t);this._renderer.compile(i,Vh)}_sceneToCubeUV(t,i,s,l,c){const m=new oi(90,1,i,s),p=[1,-1,1,1,1,1],S=[1,1,1,-1,-1,-1],_=this._renderer,y=_.autoClear,M=_.toneMapping;_.getClearColor(C_),_.toneMapping=qa,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(l),_.clearDepth(),_.setRenderTarget(null));const A=new Yo({name:"PMREM.Background",side:jn,depthWrite:!1,depthTest:!1}),x=new Ue(new Ya,A);let g=!1;const P=t.background;P?P.isColor&&(A.color.copy(P),t.background=null,g=!0):(A.color.copy(C_),g=!0);for(let N=0;N<6;N++){const D=N%3;D===0?(m.up.set(0,p[N],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+S[N],c.y,c.z)):D===1?(m.up.set(0,0,p[N]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+S[N],c.z)):(m.up.set(0,p[N],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+S[N]));const G=this._cubeSize;Ic(l,D*G,N>2?G:0,G,G),_.setRenderTarget(l),g&&_.render(x,m),_.render(t,m)}x.geometry.dispose(),x.material.dispose(),_.toneMapping=M,_.autoClear=y,t.background=P}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===Pr||t.mapping===Or;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=L_()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=U_());const c=l?this._cubemapMaterial:this._equirectMaterial,h=new Ue(this._lodPlanes[0],c),d=c.uniforms;d.envMap.value=t;const m=this._cubeSize;Ic(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(h,Vh)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let c=1;c<l;c++){const h=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),d=R_[(l-c-1)%R_.length];this._blur(t,c-1,c,h,d)}i.autoClear=s}_blur(t,i,s,l,c){const h=this._pingPongRenderTarget;this._halfBlur(t,h,i,s,l,"latitudinal",c),this._halfBlur(h,t,s,s,l,"longitudinal",c)}_halfBlur(t,i,s,l,c,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const S=3,_=new Ue(this._lodPlanes[l],p),y=p.uniforms,M=this._sizeLods[s]-1,T=isFinite(c)?Math.PI/(2*M):2*Math.PI/(2*Ts-1),A=c/T,x=isFinite(c)?1+Math.floor(S*A):Ts;x>Ts&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${Ts}`);const g=[];let P=0;for(let z=0;z<Ts;++z){const W=z/A,w=Math.exp(-W*W/2);g.push(w),z===0?P+=w:z<x&&(P+=2*w)}for(let z=0;z<g.length;z++)g[z]=g[z]/P;y.envMap.value=t.texture,y.samples.value=x,y.weights.value=g,y.latitudinal.value=h==="latitudinal",d&&(y.poleAxis.value=d);const{_lodMax:N}=this;y.dTheta.value=T,y.mipInt.value=N-s;const D=this._sizeLods[l],G=3*D*(l>N-Dr?l-N+Dr:0),F=4*(this._cubeSize-D);Ic(i,G,F,3*D,2*D),m.setRenderTarget(i),m.render(_,Vh)}}function OT(o){const t=[],i=[],s=[];let l=o;const c=o-Dr+1+A_.length;for(let h=0;h<c;h++){const d=Math.pow(2,l);i.push(d);let m=1/d;h>o-Dr?m=A_[h-o+Dr-1]:h===0&&(m=0),s.push(m);const p=1/(d-2),S=-p,_=1+p,y=[S,S,_,S,_,_,S,S,_,_,S,_],M=6,T=6,A=3,x=2,g=1,P=new Float32Array(A*T*M),N=new Float32Array(x*T*M),D=new Float32Array(g*T*M);for(let F=0;F<M;F++){const z=F%3*2/3-1,W=F>2?0:-1,w=[z,W,0,z+2/3,W,0,z+2/3,W+1,0,z,W,0,z+2/3,W+1,0,z,W+1,0];P.set(w,A*T*F),N.set(y,x*T*F);const R=[F,F,F,F,F,F];D.set(R,g*T*F)}const G=new Gn;G.setAttribute("position",new Ri(P,A)),G.setAttribute("uv",new Ri(N,x)),G.setAttribute("faceIndex",new Ri(D,g)),t.push(G),l>Dr&&l--}return{lodPlanes:t,sizeLods:i,sigmas:s}}function D_(o,t,i){const s=new Rs(o,t,i);return s.texture.mapping=$c,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Ic(o,t,i,s,l){o.viewport.set(t,i,s,l),o.scissor.set(t,i,s,l)}function zT(o,t,i){const s=new Float32Array(Ts),l=new I(0,1,0);return new ja({name:"SphericalGaussianBlur",defines:{n:Ts,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:ep(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Wa,depthTest:!1,depthWrite:!1})}function U_(){return new ja({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ep(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Wa,depthTest:!1,depthWrite:!1})}function L_(){return new ja({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ep(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Wa,depthTest:!1,depthWrite:!1})}function ep(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function IT(o){let t=new WeakMap,i=null;function s(d){if(d&&d.isTexture){const m=d.mapping,p=m===rd||m===od,S=m===Pr||m===Or;if(p||S){let _=t.get(d);const y=_!==void 0?_.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==y)return i===null&&(i=new w_(o)),_=p?i.fromEquirectangular(d,_):i.fromCubemap(d,_),_.texture.pmremVersion=d.pmremVersion,t.set(d,_),_.texture;if(_!==void 0)return _.texture;{const M=d.image;return p&&M&&M.height>0||S&&M&&l(M)?(i===null&&(i=new w_(o)),_=p?i.fromEquirectangular(d):i.fromCubemap(d),_.texture.pmremVersion=d.pmremVersion,t.set(d,_),d.addEventListener("dispose",c),_.texture):null}}}return d}function l(d){let m=0;const p=6;for(let S=0;S<p;S++)d[S]!==void 0&&m++;return m===p}function c(d){const m=d.target;m.removeEventListener("dispose",c);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function h(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:h}}function BT(o){const t={};function i(s){if(t[s]!==void 0)return t[s];let l;switch(s){case"WEBGL_depth_texture":l=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=o.getExtension(s)}return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&$o("THREE.WebGLRenderer: "+s+" extension not supported."),l}}}function FT(o,t,i,s){const l={},c=new WeakMap;function h(_){const y=_.target;y.index!==null&&t.remove(y.index);for(const T in y.attributes)t.remove(y.attributes[T]);y.removeEventListener("dispose",h),delete l[y.id];const M=c.get(y);M&&(t.remove(M),c.delete(y)),s.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,i.memory.geometries--}function d(_,y){return l[y.id]===!0||(y.addEventListener("dispose",h),l[y.id]=!0,i.memory.geometries++),y}function m(_){const y=_.attributes;for(const M in y)t.update(y[M],o.ARRAY_BUFFER)}function p(_){const y=[],M=_.index,T=_.attributes.position;let A=0;if(M!==null){const P=M.array;A=M.version;for(let N=0,D=P.length;N<D;N+=3){const G=P[N+0],F=P[N+1],z=P[N+2];y.push(G,F,F,z,z,G)}}else if(T!==void 0){const P=T.array;A=T.version;for(let N=0,D=P.length/3-1;N<D;N+=3){const G=N+0,F=N+1,z=N+2;y.push(G,F,F,z,z,G)}}else return;const x=new(pv(y)?yv:Sv)(y,1);x.version=A;const g=c.get(_);g&&t.remove(g),c.set(_,x)}function S(_){const y=c.get(_);if(y){const M=_.index;M!==null&&y.version<M.version&&p(_)}else p(_);return c.get(_)}return{get:d,update:m,getWireframeAttribute:S}}function HT(o,t,i){let s;function l(y){s=y}let c,h;function d(y){c=y.type,h=y.bytesPerElement}function m(y,M){o.drawElements(s,M,c,y*h),i.update(M,s,1)}function p(y,M,T){T!==0&&(o.drawElementsInstanced(s,M,c,y*h,T),i.update(M,s,T))}function S(y,M,T){if(T===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,M,0,c,y,0,T);let x=0;for(let g=0;g<T;g++)x+=M[g];i.update(x,s,1)}function _(y,M,T,A){if(T===0)return;const x=t.get("WEBGL_multi_draw");if(x===null)for(let g=0;g<y.length;g++)p(y[g]/h,M[g],A[g]);else{x.multiDrawElementsInstancedWEBGL(s,M,0,c,y,0,A,0,T);let g=0;for(let P=0;P<T;P++)g+=M[P]*A[P];i.update(g,s,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=S,this.renderMultiDrawInstances=_}function GT(o){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,h,d){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=d*(c/3);break;case o.LINES:i.lines+=d*(c/2);break;case o.LINE_STRIP:i.lines+=d*(c-1);break;case o.LINE_LOOP:i.lines+=d*c;break;case o.POINTS:i.points+=d*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function VT(o,t,i){const s=new WeakMap,l=new ke;function c(h,d,m){const p=h.morphTargetInfluences,S=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,_=S!==void 0?S.length:0;let y=s.get(d);if(y===void 0||y.count!==_){let R=function(){W.dispose(),s.delete(d),d.removeEventListener("dispose",R)};var M=R;y!==void 0&&y.texture.dispose();const T=d.morphAttributes.position!==void 0,A=d.morphAttributes.normal!==void 0,x=d.morphAttributes.color!==void 0,g=d.morphAttributes.position||[],P=d.morphAttributes.normal||[],N=d.morphAttributes.color||[];let D=0;T===!0&&(D=1),A===!0&&(D=2),x===!0&&(D=3);let G=d.attributes.position.count*D,F=1;G>t.maxTextureSize&&(F=Math.ceil(G/t.maxTextureSize),G=t.maxTextureSize);const z=new Float32Array(G*F*4*_),W=new mv(z,G,F,_);W.type=fa,W.needsUpdate=!0;const w=D*4;for(let V=0;V<_;V++){const K=g[V],rt=P[V],ht=N[V],lt=G*F*4*V;for(let O=0;O<K.count;O++){const Q=O*w;T===!0&&(l.fromBufferAttribute(K,O),z[lt+Q+0]=l.x,z[lt+Q+1]=l.y,z[lt+Q+2]=l.z,z[lt+Q+3]=0),A===!0&&(l.fromBufferAttribute(rt,O),z[lt+Q+4]=l.x,z[lt+Q+5]=l.y,z[lt+Q+6]=l.z,z[lt+Q+7]=0),x===!0&&(l.fromBufferAttribute(ht,O),z[lt+Q+8]=l.x,z[lt+Q+9]=l.y,z[lt+Q+10]=l.z,z[lt+Q+11]=ht.itemSize===4?l.w:1)}}y={count:_,texture:W,size:new fe(G,F)},s.set(d,y),d.addEventListener("dispose",R)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",h.morphTexture,i);else{let T=0;for(let x=0;x<p.length;x++)T+=p[x];const A=d.morphTargetsRelative?1:1-T;m.getUniforms().setValue(o,"morphTargetBaseInfluence",A),m.getUniforms().setValue(o,"morphTargetInfluences",p)}m.getUniforms().setValue(o,"morphTargetsTexture",y.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",y.size)}return{update:c}}function kT(o,t,i,s){let l=new WeakMap;function c(m){const p=s.render.frame,S=m.geometry,_=t.get(m,S);if(l.get(_)!==p&&(t.update(_),l.set(_,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const y=m.skeleton;l.get(y)!==p&&(y.update(),l.set(y,p))}return _}function h(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:h}}const Lv=new Hn,N_=new Cv(1,1),Nv=new mv,Pv=new lM,Ov=new Ev,P_=[],O_=[],z_=new Float32Array(16),I_=new Float32Array(9),B_=new Float32Array(4);function Hr(o,t,i){const s=o[0];if(s<=0||s>0)return o;const l=t*i;let c=P_[l];if(c===void 0&&(c=new Float32Array(l),P_[l]=c),t!==0){s.toArray(c,0);for(let h=1,d=0;h!==t;++h)d+=i,o[h].toArray(c,d)}return c}function vn(o,t){if(o.length!==t.length)return!1;for(let i=0,s=o.length;i<s;i++)if(o[i]!==t[i])return!1;return!0}function Sn(o,t){for(let i=0,s=t.length;i<s;i++)o[i]=t[i]}function eu(o,t){let i=O_[t];i===void 0&&(i=new Int32Array(t),O_[t]=i);for(let s=0;s!==t;++s)i[s]=o.allocateTextureUnit();return i}function XT(o,t){const i=this.cache;i[0]!==t&&(o.uniform1f(this.addr,t),i[0]=t)}function WT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(vn(i,t))return;o.uniform2fv(this.addr,t),Sn(i,t)}}function qT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(vn(i,t))return;o.uniform3fv(this.addr,t),Sn(i,t)}}function YT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(vn(i,t))return;o.uniform4fv(this.addr,t),Sn(i,t)}}function ZT(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(vn(i,t))return;o.uniformMatrix2fv(this.addr,!1,t),Sn(i,t)}else{if(vn(i,s))return;B_.set(s),o.uniformMatrix2fv(this.addr,!1,B_),Sn(i,s)}}function jT(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(vn(i,t))return;o.uniformMatrix3fv(this.addr,!1,t),Sn(i,t)}else{if(vn(i,s))return;I_.set(s),o.uniformMatrix3fv(this.addr,!1,I_),Sn(i,s)}}function KT(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(vn(i,t))return;o.uniformMatrix4fv(this.addr,!1,t),Sn(i,t)}else{if(vn(i,s))return;z_.set(s),o.uniformMatrix4fv(this.addr,!1,z_),Sn(i,s)}}function QT(o,t){const i=this.cache;i[0]!==t&&(o.uniform1i(this.addr,t),i[0]=t)}function JT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(vn(i,t))return;o.uniform2iv(this.addr,t),Sn(i,t)}}function $T(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(vn(i,t))return;o.uniform3iv(this.addr,t),Sn(i,t)}}function tb(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(vn(i,t))return;o.uniform4iv(this.addr,t),Sn(i,t)}}function eb(o,t){const i=this.cache;i[0]!==t&&(o.uniform1ui(this.addr,t),i[0]=t)}function nb(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(vn(i,t))return;o.uniform2uiv(this.addr,t),Sn(i,t)}}function ib(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(vn(i,t))return;o.uniform3uiv(this.addr,t),Sn(i,t)}}function ab(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(vn(i,t))return;o.uniform4uiv(this.addr,t),Sn(i,t)}}function sb(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l);let c;this.type===o.SAMPLER_2D_SHADOW?(N_.compareFunction=dv,c=N_):c=Lv,i.setTexture2D(t||c,l)}function rb(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||Pv,l)}function ob(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||Ov,l)}function lb(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||Nv,l)}function cb(o){switch(o){case 5126:return XT;case 35664:return WT;case 35665:return qT;case 35666:return YT;case 35674:return ZT;case 35675:return jT;case 35676:return KT;case 5124:case 35670:return QT;case 35667:case 35671:return JT;case 35668:case 35672:return $T;case 35669:case 35673:return tb;case 5125:return eb;case 36294:return nb;case 36295:return ib;case 36296:return ab;case 35678:case 36198:case 36298:case 36306:case 35682:return sb;case 35679:case 36299:case 36307:return rb;case 35680:case 36300:case 36308:case 36293:return ob;case 36289:case 36303:case 36311:case 36292:return lb}}function ub(o,t){o.uniform1fv(this.addr,t)}function fb(o,t){const i=Hr(t,this.size,2);o.uniform2fv(this.addr,i)}function hb(o,t){const i=Hr(t,this.size,3);o.uniform3fv(this.addr,i)}function db(o,t){const i=Hr(t,this.size,4);o.uniform4fv(this.addr,i)}function pb(o,t){const i=Hr(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function mb(o,t){const i=Hr(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function gb(o,t){const i=Hr(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function _b(o,t){o.uniform1iv(this.addr,t)}function vb(o,t){o.uniform2iv(this.addr,t)}function Sb(o,t){o.uniform3iv(this.addr,t)}function yb(o,t){o.uniform4iv(this.addr,t)}function xb(o,t){o.uniform1uiv(this.addr,t)}function Mb(o,t){o.uniform2uiv(this.addr,t)}function Eb(o,t){o.uniform3uiv(this.addr,t)}function Tb(o,t){o.uniform4uiv(this.addr,t)}function bb(o,t,i){const s=this.cache,l=t.length,c=eu(i,l);vn(s,c)||(o.uniform1iv(this.addr,c),Sn(s,c));for(let h=0;h!==l;++h)i.setTexture2D(t[h]||Lv,c[h])}function Ab(o,t,i){const s=this.cache,l=t.length,c=eu(i,l);vn(s,c)||(o.uniform1iv(this.addr,c),Sn(s,c));for(let h=0;h!==l;++h)i.setTexture3D(t[h]||Pv,c[h])}function Cb(o,t,i){const s=this.cache,l=t.length,c=eu(i,l);vn(s,c)||(o.uniform1iv(this.addr,c),Sn(s,c));for(let h=0;h!==l;++h)i.setTextureCube(t[h]||Ov,c[h])}function Rb(o,t,i){const s=this.cache,l=t.length,c=eu(i,l);vn(s,c)||(o.uniform1iv(this.addr,c),Sn(s,c));for(let h=0;h!==l;++h)i.setTexture2DArray(t[h]||Nv,c[h])}function wb(o){switch(o){case 5126:return ub;case 35664:return fb;case 35665:return hb;case 35666:return db;case 35674:return pb;case 35675:return mb;case 35676:return gb;case 5124:case 35670:return _b;case 35667:case 35671:return vb;case 35668:case 35672:return Sb;case 35669:case 35673:return yb;case 5125:return xb;case 36294:return Mb;case 36295:return Eb;case 36296:return Tb;case 35678:case 36198:case 36298:case 36306:case 35682:return bb;case 35679:case 36299:case 36307:return Ab;case 35680:case 36300:case 36308:case 36293:return Cb;case 36289:case 36303:case 36311:case 36292:return Rb}}class Db{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=cb(i.type)}}class Ub{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=wb(i.type)}}class Lb{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let c=0,h=l.length;c!==h;++c){const d=l[c];d.setValue(t,i[d.id],s)}}}const Yh=/(\w+)(\])?(\[|\.)?/g;function F_(o,t){o.seq.push(t),o.map[t.id]=t}function Nb(o,t,i){const s=o.name,l=s.length;for(Yh.lastIndex=0;;){const c=Yh.exec(s),h=Yh.lastIndex;let d=c[1];const m=c[2]==="]",p=c[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){F_(i,p===void 0?new Db(d,o,t):new Ub(d,o,t));break}else{let _=i.map[d];_===void 0&&(_=new Lb(d),F_(i,_)),i=_}}}class Xc{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<s;++l){const c=t.getActiveUniform(i,l),h=t.getUniformLocation(i,c.name);Nb(c,h,this)}}setValue(t,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let c=0,h=i.length;c!==h;++c){const d=i[c],m=s[d.id];m.needsUpdate!==!1&&d.setValue(t,m.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,c=t.length;l!==c;++l){const h=t[l];h.id in i&&s.push(h)}return s}}function H_(o,t,i){const s=o.createShader(t);return o.shaderSource(s,i),o.compileShader(s),s}const Pb=37297;let Ob=0;function zb(o,t){const i=o.split(`
`),s=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let h=l;h<c;h++){const d=h+1;s.push(`${d===t?">":" "} ${d}: ${i[h]}`)}return s.join(`
`)}const G_=new ue;function Ib(o){we._getMatrix(G_,we.workingColorSpace,o);const t=`mat3( ${G_.elements.map(i=>i.toFixed(4))} )`;switch(we.getTransfer(o)){case Wc:return[t,"LinearTransferOETF"];case Ve:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[t,"LinearTransferOETF"]}}function V_(o,t,i){const s=o.getShaderParameter(t,o.COMPILE_STATUS),c=(o.getShaderInfoLog(t)||"").trim();if(s&&c==="")return"";const h=/ERROR: 0:(\d+)/.exec(c);if(h){const d=parseInt(h[1]);return i.toUpperCase()+`

`+c+`

`+zb(o.getShaderSource(t),d)}else return c}function Bb(o,t){const i=Ib(t);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function Fb(o,t){let i;switch(t){case xx:i="Linear";break;case Mx:i="Reinhard";break;case Ex:i="Cineon";break;case Tx:i="ACESFilmic";break;case Ax:i="AgX";break;case Cx:i="Neutral";break;case bx:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Bc=new I;function Hb(){we.getLuminanceCoefficients(Bc);const o=Bc.x.toFixed(4),t=Bc.y.toFixed(4),i=Bc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Gb(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Xo).join(`
`)}function Vb(o){const t=[];for(const i in o){const s=o[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function kb(o,t){const i={},s=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=o.getActiveAttrib(t,l),h=c.name;let d=1;c.type===o.FLOAT_MAT2&&(d=2),c.type===o.FLOAT_MAT3&&(d=3),c.type===o.FLOAT_MAT4&&(d=4),i[h]={type:c.type,location:o.getAttribLocation(t,h),locationSize:d}}return i}function Xo(o){return o!==""}function k_(o,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function X_(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Xb=/^[ \t]*#include +<([\w\d./]+)>/gm;function Fd(o){return o.replace(Xb,qb)}const Wb=new Map;function qb(o,t){let i=he[t];if(i===void 0){const s=Wb.get(t);if(s!==void 0)i=he[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return Fd(i)}const Yb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function W_(o){return o.replace(Yb,Zb)}function Zb(o,t,i,s){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function q_(o){let t=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?t+=`
#define HIGH_PRECISION`:o.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function jb(o){let t="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===tv?t="SHADOWMAP_TYPE_PCF":o.shadowMapType===ev?t="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===ua&&(t="SHADOWMAP_TYPE_VSM"),t}function Kb(o){let t="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case Pr:case Or:t="ENVMAP_TYPE_CUBE";break;case $c:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Qb(o){let t="ENVMAP_MODE_REFLECTION";return o.envMap&&o.envMapMode===Or&&(t="ENVMAP_MODE_REFRACTION"),t}function Jb(o){let t="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case nv:t="ENVMAP_BLENDING_MULTIPLY";break;case Sx:t="ENVMAP_BLENDING_MIX";break;case yx:t="ENVMAP_BLENDING_ADD";break}return t}function $b(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function tA(o,t,i,s){const l=o.getContext(),c=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=jb(i),p=Kb(i),S=Qb(i),_=Jb(i),y=$b(i),M=Gb(i),T=Vb(c),A=l.createProgram();let x,g,P=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(Xo).join(`
`),x.length>0&&(x+=`
`),g=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(Xo).join(`
`),g.length>0&&(g+=`
`)):(x=[q_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+S:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xo).join(`
`),g=[q_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+S:"",i.envMap?"#define "+_:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==qa?"#define TONE_MAPPING":"",i.toneMapping!==qa?he.tonemapping_pars_fragment:"",i.toneMapping!==qa?Fb("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",he.colorspace_pars_fragment,Bb("linearToOutputTexel",i.outputColorSpace),Hb(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Xo).join(`
`)),h=Fd(h),h=k_(h,i),h=X_(h,i),d=Fd(d),d=k_(d,i),d=X_(d,i),h=W_(h),d=W_(d),i.isRawShaderMaterial!==!0&&(P=`#version 300 es
`,x=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,g=["#define varying in",i.glslVersion===Q0?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Q0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const N=P+x+h,D=P+g+d,G=H_(l,l.VERTEX_SHADER,N),F=H_(l,l.FRAGMENT_SHADER,D);l.attachShader(A,G),l.attachShader(A,F),i.index0AttributeName!==void 0?l.bindAttribLocation(A,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(A,0,"position"),l.linkProgram(A);function z(V){if(o.debug.checkShaderErrors){const K=l.getProgramInfoLog(A)||"",rt=l.getShaderInfoLog(G)||"",ht=l.getShaderInfoLog(F)||"",lt=K.trim(),O=rt.trim(),Q=ht.trim();let j=!0,vt=!0;if(l.getProgramParameter(A,l.LINK_STATUS)===!1)if(j=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,A,G,F);else{const Mt=V_(l,G,"vertex"),L=V_(l,F,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(A,l.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+lt+`
`+Mt+`
`+L)}else lt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",lt):(O===""||Q==="")&&(vt=!1);vt&&(V.diagnostics={runnable:j,programLog:lt,vertexShader:{log:O,prefix:x},fragmentShader:{log:Q,prefix:g}})}l.deleteShader(G),l.deleteShader(F),W=new Xc(l,A),w=kb(l,A)}let W;this.getUniforms=function(){return W===void 0&&z(this),W};let w;this.getAttributes=function(){return w===void 0&&z(this),w};let R=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=l.getProgramParameter(A,Pb)),R},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(A),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=Ob++,this.cacheKey=t,this.usedTimes=1,this.program=A,this.vertexShader=G,this.fragmentShader=F,this}let eA=0;class nA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),h=this._getShaderCacheForMaterial(t);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(c)===!1&&(h.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new iA(t),i.set(t,s)),s}}class iA{constructor(t){this.id=eA++,this.code=t,this.usedTimes=0}}function aA(o,t,i,s,l,c,h){const d=new _v,m=new nA,p=new Set,S=[],_=l.logarithmicDepthBuffer,y=l.vertexTextures;let M=l.precision;const T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(w){return p.add(w),w===0?"uv":`uv${w}`}function x(w,R,V,K,rt){const ht=K.fog,lt=rt.geometry,O=w.isMeshStandardMaterial?K.environment:null,Q=(w.isMeshStandardMaterial?i:t).get(w.envMap||O),j=Q&&Q.mapping===$c?Q.image.height:null,vt=T[w.type];w.precision!==null&&(M=l.getMaxPrecision(w.precision),M!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",M,"instead."));const Mt=lt.morphAttributes.position||lt.morphAttributes.normal||lt.morphAttributes.color,L=Mt!==void 0?Mt.length:0;let nt=0;lt.morphAttributes.position!==void 0&&(nt=1),lt.morphAttributes.normal!==void 0&&(nt=2),lt.morphAttributes.color!==void 0&&(nt=3);let yt,bt,Nt,it;if(vt){const Te=Oi[vt];yt=Te.vertexShader,bt=Te.fragmentShader}else yt=w.vertexShader,bt=w.fragmentShader,m.update(w),Nt=m.getVertexShaderID(w),it=m.getFragmentShaderID(w);const ct=o.getRenderTarget(),wt=o.state.buffers.depth.getReversed(),It=rt.isInstancedMesh===!0,kt=rt.isBatchedMesh===!0,de=!!w.map,ln=!!w.matcap,H=!!Q,Ae=!!w.aoMap,ne=!!w.lightMap,$t=!!w.bumpMap,Xt=!!w.normalMap,Xe=!!w.displacementMap,Vt=!!w.emissiveMap,se=!!w.metalnessMap,tn=!!w.roughnessMap,$e=w.anisotropy>0,U=w.clearcoat>0,E=w.dispersion>0,tt=w.iridescence>0,dt=w.sheen>0,St=w.transmission>0,ut=$e&&!!w.anisotropyMap,Zt=U&&!!w.clearcoatMap,At=U&&!!w.clearcoatNormalMap,qt=U&&!!w.clearcoatRoughnessMap,Yt=tt&&!!w.iridescenceMap,Et=tt&&!!w.iridescenceThicknessMap,Ct=dt&&!!w.sheenColorMap,jt=dt&&!!w.sheenRoughnessMap,Ot=!!w.specularMap,Dt=!!w.specularColorMap,oe=!!w.specularIntensityMap,X=St&&!!w.transmissionMap,Tt=St&&!!w.thicknessMap,Rt=!!w.gradientMap,zt=!!w.alphaMap,xt=w.alphaTest>0,gt=!!w.alphaHash,Bt=!!w.extensions;let ie=qa;w.toneMapped&&(ct===null||ct.isXRRenderTarget===!0)&&(ie=o.toneMapping);const Pe={shaderID:vt,shaderType:w.type,shaderName:w.name,vertexShader:yt,fragmentShader:bt,defines:w.defines,customVertexShaderID:Nt,customFragmentShaderID:it,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:M,batching:kt,batchingColor:kt&&rt._colorsTexture!==null,instancing:It,instancingColor:It&&rt.instanceColor!==null,instancingMorph:It&&rt.morphTexture!==null,supportsVertexTextures:y,outputColorSpace:ct===null?o.outputColorSpace:ct.isXRRenderTarget===!0?ct.texture.colorSpace:zr,alphaToCoverage:!!w.alphaToCoverage,map:de,matcap:ln,envMap:H,envMapMode:H&&Q.mapping,envMapCubeUVHeight:j,aoMap:Ae,lightMap:ne,bumpMap:$t,normalMap:Xt,displacementMap:y&&Xe,emissiveMap:Vt,normalMapObjectSpace:Xt&&w.normalMapType===Ux,normalMapTangentSpace:Xt&&w.normalMapType===hv,metalnessMap:se,roughnessMap:tn,anisotropy:$e,anisotropyMap:ut,clearcoat:U,clearcoatMap:Zt,clearcoatNormalMap:At,clearcoatRoughnessMap:qt,dispersion:E,iridescence:tt,iridescenceMap:Yt,iridescenceThicknessMap:Et,sheen:dt,sheenColorMap:Ct,sheenRoughnessMap:jt,specularMap:Ot,specularColorMap:Dt,specularIntensityMap:oe,transmission:St,transmissionMap:X,thicknessMap:Tt,gradientMap:Rt,opaque:w.transparent===!1&&w.blending===Ur&&w.alphaToCoverage===!1,alphaMap:zt,alphaTest:xt,alphaHash:gt,combine:w.combine,mapUv:de&&A(w.map.channel),aoMapUv:Ae&&A(w.aoMap.channel),lightMapUv:ne&&A(w.lightMap.channel),bumpMapUv:$t&&A(w.bumpMap.channel),normalMapUv:Xt&&A(w.normalMap.channel),displacementMapUv:Xe&&A(w.displacementMap.channel),emissiveMapUv:Vt&&A(w.emissiveMap.channel),metalnessMapUv:se&&A(w.metalnessMap.channel),roughnessMapUv:tn&&A(w.roughnessMap.channel),anisotropyMapUv:ut&&A(w.anisotropyMap.channel),clearcoatMapUv:Zt&&A(w.clearcoatMap.channel),clearcoatNormalMapUv:At&&A(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:qt&&A(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Yt&&A(w.iridescenceMap.channel),iridescenceThicknessMapUv:Et&&A(w.iridescenceThicknessMap.channel),sheenColorMapUv:Ct&&A(w.sheenColorMap.channel),sheenRoughnessMapUv:jt&&A(w.sheenRoughnessMap.channel),specularMapUv:Ot&&A(w.specularMap.channel),specularColorMapUv:Dt&&A(w.specularColorMap.channel),specularIntensityMapUv:oe&&A(w.specularIntensityMap.channel),transmissionMapUv:X&&A(w.transmissionMap.channel),thicknessMapUv:Tt&&A(w.thicknessMap.channel),alphaMapUv:zt&&A(w.alphaMap.channel),vertexTangents:!!lt.attributes.tangent&&(Xt||$e),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!lt.attributes.color&&lt.attributes.color.itemSize===4,pointsUvs:rt.isPoints===!0&&!!lt.attributes.uv&&(de||zt),fog:!!ht,useFog:w.fog===!0,fogExp2:!!ht&&ht.isFogExp2,flatShading:w.flatShading===!0&&w.wireframe===!1,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:wt,skinning:rt.isSkinnedMesh===!0,morphTargets:lt.morphAttributes.position!==void 0,morphNormals:lt.morphAttributes.normal!==void 0,morphColors:lt.morphAttributes.color!==void 0,morphTargetsCount:L,morphTextureStride:nt,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:w.dithering,shadowMapEnabled:o.shadowMap.enabled&&V.length>0,shadowMapType:o.shadowMap.type,toneMapping:ie,decodeVideoTexture:de&&w.map.isVideoTexture===!0&&we.getTransfer(w.map.colorSpace)===Ve,decodeVideoTextureEmissive:Vt&&w.emissiveMap.isVideoTexture===!0&&we.getTransfer(w.emissiveMap.colorSpace)===Ve,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===zi,flipSided:w.side===jn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Bt&&w.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Bt&&w.extensions.multiDraw===!0||kt)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Pe.vertexUv1s=p.has(1),Pe.vertexUv2s=p.has(2),Pe.vertexUv3s=p.has(3),p.clear(),Pe}function g(w){const R=[];if(w.shaderID?R.push(w.shaderID):(R.push(w.customVertexShaderID),R.push(w.customFragmentShaderID)),w.defines!==void 0)for(const V in w.defines)R.push(V),R.push(w.defines[V]);return w.isRawShaderMaterial===!1&&(P(R,w),N(R,w),R.push(o.outputColorSpace)),R.push(w.customProgramCacheKey),R.join()}function P(w,R){w.push(R.precision),w.push(R.outputColorSpace),w.push(R.envMapMode),w.push(R.envMapCubeUVHeight),w.push(R.mapUv),w.push(R.alphaMapUv),w.push(R.lightMapUv),w.push(R.aoMapUv),w.push(R.bumpMapUv),w.push(R.normalMapUv),w.push(R.displacementMapUv),w.push(R.emissiveMapUv),w.push(R.metalnessMapUv),w.push(R.roughnessMapUv),w.push(R.anisotropyMapUv),w.push(R.clearcoatMapUv),w.push(R.clearcoatNormalMapUv),w.push(R.clearcoatRoughnessMapUv),w.push(R.iridescenceMapUv),w.push(R.iridescenceThicknessMapUv),w.push(R.sheenColorMapUv),w.push(R.sheenRoughnessMapUv),w.push(R.specularMapUv),w.push(R.specularColorMapUv),w.push(R.specularIntensityMapUv),w.push(R.transmissionMapUv),w.push(R.thicknessMapUv),w.push(R.combine),w.push(R.fogExp2),w.push(R.sizeAttenuation),w.push(R.morphTargetsCount),w.push(R.morphAttributeCount),w.push(R.numDirLights),w.push(R.numPointLights),w.push(R.numSpotLights),w.push(R.numSpotLightMaps),w.push(R.numHemiLights),w.push(R.numRectAreaLights),w.push(R.numDirLightShadows),w.push(R.numPointLightShadows),w.push(R.numSpotLightShadows),w.push(R.numSpotLightShadowsWithMaps),w.push(R.numLightProbes),w.push(R.shadowMapType),w.push(R.toneMapping),w.push(R.numClippingPlanes),w.push(R.numClipIntersection),w.push(R.depthPacking)}function N(w,R){d.disableAll(),R.supportsVertexTextures&&d.enable(0),R.instancing&&d.enable(1),R.instancingColor&&d.enable(2),R.instancingMorph&&d.enable(3),R.matcap&&d.enable(4),R.envMap&&d.enable(5),R.normalMapObjectSpace&&d.enable(6),R.normalMapTangentSpace&&d.enable(7),R.clearcoat&&d.enable(8),R.iridescence&&d.enable(9),R.alphaTest&&d.enable(10),R.vertexColors&&d.enable(11),R.vertexAlphas&&d.enable(12),R.vertexUv1s&&d.enable(13),R.vertexUv2s&&d.enable(14),R.vertexUv3s&&d.enable(15),R.vertexTangents&&d.enable(16),R.anisotropy&&d.enable(17),R.alphaHash&&d.enable(18),R.batching&&d.enable(19),R.dispersion&&d.enable(20),R.batchingColor&&d.enable(21),R.gradientMap&&d.enable(22),w.push(d.mask),d.disableAll(),R.fog&&d.enable(0),R.useFog&&d.enable(1),R.flatShading&&d.enable(2),R.logarithmicDepthBuffer&&d.enable(3),R.reversedDepthBuffer&&d.enable(4),R.skinning&&d.enable(5),R.morphTargets&&d.enable(6),R.morphNormals&&d.enable(7),R.morphColors&&d.enable(8),R.premultipliedAlpha&&d.enable(9),R.shadowMapEnabled&&d.enable(10),R.doubleSided&&d.enable(11),R.flipSided&&d.enable(12),R.useDepthPacking&&d.enable(13),R.dithering&&d.enable(14),R.transmission&&d.enable(15),R.sheen&&d.enable(16),R.opaque&&d.enable(17),R.pointsUvs&&d.enable(18),R.decodeVideoTexture&&d.enable(19),R.decodeVideoTextureEmissive&&d.enable(20),R.alphaToCoverage&&d.enable(21),w.push(d.mask)}function D(w){const R=T[w.type];let V;if(R){const K=Oi[R];V=xM.clone(K.uniforms)}else V=w.uniforms;return V}function G(w,R){let V;for(let K=0,rt=S.length;K<rt;K++){const ht=S[K];if(ht.cacheKey===R){V=ht,++V.usedTimes;break}}return V===void 0&&(V=new tA(o,R,w,c),S.push(V)),V}function F(w){if(--w.usedTimes===0){const R=S.indexOf(w);S[R]=S[S.length-1],S.pop(),w.destroy()}}function z(w){m.remove(w)}function W(){m.dispose()}return{getParameters:x,getProgramCacheKey:g,getUniforms:D,acquireProgram:G,releaseProgram:F,releaseShaderCache:z,programs:S,dispose:W}}function sA(){let o=new WeakMap;function t(h){return o.has(h)}function i(h){let d=o.get(h);return d===void 0&&(d={},o.set(h,d)),d}function s(h){o.delete(h)}function l(h,d,m){o.get(h)[d]=m}function c(){o=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:c}}function rA(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.z!==t.z?o.z-t.z:o.id-t.id}function Y_(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function Z_(){const o=[];let t=0;const i=[],s=[],l=[];function c(){t=0,i.length=0,s.length=0,l.length=0}function h(_,y,M,T,A,x){let g=o[t];return g===void 0?(g={id:_.id,object:_,geometry:y,material:M,groupOrder:T,renderOrder:_.renderOrder,z:A,group:x},o[t]=g):(g.id=_.id,g.object=_,g.geometry=y,g.material=M,g.groupOrder=T,g.renderOrder=_.renderOrder,g.z=A,g.group=x),t++,g}function d(_,y,M,T,A,x){const g=h(_,y,M,T,A,x);M.transmission>0?s.push(g):M.transparent===!0?l.push(g):i.push(g)}function m(_,y,M,T,A,x){const g=h(_,y,M,T,A,x);M.transmission>0?s.unshift(g):M.transparent===!0?l.unshift(g):i.unshift(g)}function p(_,y){i.length>1&&i.sort(_||rA),s.length>1&&s.sort(y||Y_),l.length>1&&l.sort(y||Y_)}function S(){for(let _=t,y=o.length;_<y;_++){const M=o[_];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:d,unshift:m,finish:S,sort:p}}function oA(){let o=new WeakMap;function t(s,l){const c=o.get(s);let h;return c===void 0?(h=new Z_,o.set(s,[h])):l>=c.length?(h=new Z_,c.push(h)):h=c[l],h}function i(){o=new WeakMap}return{get:t,dispose:i}}function lA(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new I,color:new ve};break;case"SpotLight":i={position:new I,direction:new I,color:new ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new I,color:new ve,distance:0,decay:0};break;case"HemisphereLight":i={direction:new I,skyColor:new ve,groundColor:new ve};break;case"RectAreaLight":i={color:new ve,position:new I,halfWidth:new I,halfHeight:new I};break}return o[t.id]=i,i}}}function cA(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=i,i}}}let uA=0;function fA(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function hA(o){const t=new lA,i=cA(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new I);const l=new I,c=new Je,h=new Je;function d(p){let S=0,_=0,y=0;for(let w=0;w<9;w++)s.probe[w].set(0,0,0);let M=0,T=0,A=0,x=0,g=0,P=0,N=0,D=0,G=0,F=0,z=0;p.sort(fA);for(let w=0,R=p.length;w<R;w++){const V=p[w],K=V.color,rt=V.intensity,ht=V.distance,lt=V.shadow&&V.shadow.map?V.shadow.map.texture:null;if(V.isAmbientLight)S+=K.r*rt,_+=K.g*rt,y+=K.b*rt;else if(V.isLightProbe){for(let O=0;O<9;O++)s.probe[O].addScaledVector(V.sh.coefficients[O],rt);z++}else if(V.isDirectionalLight){const O=t.get(V);if(O.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const Q=V.shadow,j=i.get(V);j.shadowIntensity=Q.intensity,j.shadowBias=Q.bias,j.shadowNormalBias=Q.normalBias,j.shadowRadius=Q.radius,j.shadowMapSize=Q.mapSize,s.directionalShadow[M]=j,s.directionalShadowMap[M]=lt,s.directionalShadowMatrix[M]=V.shadow.matrix,P++}s.directional[M]=O,M++}else if(V.isSpotLight){const O=t.get(V);O.position.setFromMatrixPosition(V.matrixWorld),O.color.copy(K).multiplyScalar(rt),O.distance=ht,O.coneCos=Math.cos(V.angle),O.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),O.decay=V.decay,s.spot[A]=O;const Q=V.shadow;if(V.map&&(s.spotLightMap[G]=V.map,G++,Q.updateMatrices(V),V.castShadow&&F++),s.spotLightMatrix[A]=Q.matrix,V.castShadow){const j=i.get(V);j.shadowIntensity=Q.intensity,j.shadowBias=Q.bias,j.shadowNormalBias=Q.normalBias,j.shadowRadius=Q.radius,j.shadowMapSize=Q.mapSize,s.spotShadow[A]=j,s.spotShadowMap[A]=lt,D++}A++}else if(V.isRectAreaLight){const O=t.get(V);O.color.copy(K).multiplyScalar(rt),O.halfWidth.set(V.width*.5,0,0),O.halfHeight.set(0,V.height*.5,0),s.rectArea[x]=O,x++}else if(V.isPointLight){const O=t.get(V);if(O.color.copy(V.color).multiplyScalar(V.intensity),O.distance=V.distance,O.decay=V.decay,V.castShadow){const Q=V.shadow,j=i.get(V);j.shadowIntensity=Q.intensity,j.shadowBias=Q.bias,j.shadowNormalBias=Q.normalBias,j.shadowRadius=Q.radius,j.shadowMapSize=Q.mapSize,j.shadowCameraNear=Q.camera.near,j.shadowCameraFar=Q.camera.far,s.pointShadow[T]=j,s.pointShadowMap[T]=lt,s.pointShadowMatrix[T]=V.shadow.matrix,N++}s.point[T]=O,T++}else if(V.isHemisphereLight){const O=t.get(V);O.skyColor.copy(V.color).multiplyScalar(rt),O.groundColor.copy(V.groundColor).multiplyScalar(rt),s.hemi[g]=O,g++}}x>0&&(o.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Lt.LTC_FLOAT_1,s.rectAreaLTC2=Lt.LTC_FLOAT_2):(s.rectAreaLTC1=Lt.LTC_HALF_1,s.rectAreaLTC2=Lt.LTC_HALF_2)),s.ambient[0]=S,s.ambient[1]=_,s.ambient[2]=y;const W=s.hash;(W.directionalLength!==M||W.pointLength!==T||W.spotLength!==A||W.rectAreaLength!==x||W.hemiLength!==g||W.numDirectionalShadows!==P||W.numPointShadows!==N||W.numSpotShadows!==D||W.numSpotMaps!==G||W.numLightProbes!==z)&&(s.directional.length=M,s.spot.length=A,s.rectArea.length=x,s.point.length=T,s.hemi.length=g,s.directionalShadow.length=P,s.directionalShadowMap.length=P,s.pointShadow.length=N,s.pointShadowMap.length=N,s.spotShadow.length=D,s.spotShadowMap.length=D,s.directionalShadowMatrix.length=P,s.pointShadowMatrix.length=N,s.spotLightMatrix.length=D+G-F,s.spotLightMap.length=G,s.numSpotLightShadowsWithMaps=F,s.numLightProbes=z,W.directionalLength=M,W.pointLength=T,W.spotLength=A,W.rectAreaLength=x,W.hemiLength=g,W.numDirectionalShadows=P,W.numPointShadows=N,W.numSpotShadows=D,W.numSpotMaps=G,W.numLightProbes=z,s.version=uA++)}function m(p,S){let _=0,y=0,M=0,T=0,A=0;const x=S.matrixWorldInverse;for(let g=0,P=p.length;g<P;g++){const N=p[g];if(N.isDirectionalLight){const D=s.directional[_];D.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(x),_++}else if(N.isSpotLight){const D=s.spot[M];D.position.setFromMatrixPosition(N.matrixWorld),D.position.applyMatrix4(x),D.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(x),M++}else if(N.isRectAreaLight){const D=s.rectArea[T];D.position.setFromMatrixPosition(N.matrixWorld),D.position.applyMatrix4(x),h.identity(),c.copy(N.matrixWorld),c.premultiply(x),h.extractRotation(c),D.halfWidth.set(N.width*.5,0,0),D.halfHeight.set(0,N.height*.5,0),D.halfWidth.applyMatrix4(h),D.halfHeight.applyMatrix4(h),T++}else if(N.isPointLight){const D=s.point[y];D.position.setFromMatrixPosition(N.matrixWorld),D.position.applyMatrix4(x),y++}else if(N.isHemisphereLight){const D=s.hemi[A];D.direction.setFromMatrixPosition(N.matrixWorld),D.direction.transformDirection(x),A++}}}return{setup:d,setupView:m,state:s}}function j_(o){const t=new hA(o),i=[],s=[];function l(S){p.camera=S,i.length=0,s.length=0}function c(S){i.push(S)}function h(S){s.push(S)}function d(){t.setup(i)}function m(S){t.setupView(i,S)}const p={lightsArray:i,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:c,pushShadow:h}}function dA(o){let t=new WeakMap;function i(l,c=0){const h=t.get(l);let d;return h===void 0?(d=new j_(o),t.set(l,[d])):c>=h.length?(d=new j_(o),h.push(d)):d=h[c],d}function s(){t=new WeakMap}return{get:i,dispose:s}}const pA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,mA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function gA(o,t,i){let s=new Qd;const l=new fe,c=new fe,h=new ke,d=new zM({depthPacking:Dx}),m=new IM,p={},S=i.maxTextureSize,_={[Za]:jn,[jn]:Za,[zi]:zi},y=new ja({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new fe},radius:{value:4}},vertexShader:pA,fragmentShader:mA}),M=y.clone();M.defines.HORIZONTAL_PASS=1;const T=new Gn;T.setAttribute("position",new Ri(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new Ue(T,y),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=tv;let g=this.type;this.render=function(F,z,W){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||F.length===0)return;const w=o.getRenderTarget(),R=o.getActiveCubeFace(),V=o.getActiveMipmapLevel(),K=o.state;K.setBlending(Wa),K.buffers.depth.getReversed()===!0?K.buffers.color.setClear(0,0,0,0):K.buffers.color.setClear(1,1,1,1),K.buffers.depth.setTest(!0),K.setScissorTest(!1);const rt=g!==ua&&this.type===ua,ht=g===ua&&this.type!==ua;for(let lt=0,O=F.length;lt<O;lt++){const Q=F[lt],j=Q.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;l.copy(j.mapSize);const vt=j.getFrameExtents();if(l.multiply(vt),c.copy(j.mapSize),(l.x>S||l.y>S)&&(l.x>S&&(c.x=Math.floor(S/vt.x),l.x=c.x*vt.x,j.mapSize.x=c.x),l.y>S&&(c.y=Math.floor(S/vt.y),l.y=c.y*vt.y,j.mapSize.y=c.y)),j.map===null||rt===!0||ht===!0){const L=this.type!==ua?{minFilter:Ci,magFilter:Ci}:{};j.map!==null&&j.map.dispose(),j.map=new Rs(l.x,l.y,L),j.map.texture.name=Q.name+".shadowMap",j.camera.updateProjectionMatrix()}o.setRenderTarget(j.map),o.clear();const Mt=j.getViewportCount();for(let L=0;L<Mt;L++){const nt=j.getViewport(L);h.set(c.x*nt.x,c.y*nt.y,c.x*nt.z,c.y*nt.w),K.viewport(h),j.updateMatrices(Q,L),s=j.getFrustum(),D(z,W,j.camera,Q,this.type)}j.isPointLightShadow!==!0&&this.type===ua&&P(j,W),j.needsUpdate=!1}g=this.type,x.needsUpdate=!1,o.setRenderTarget(w,R,V)};function P(F,z){const W=t.update(A);y.defines.VSM_SAMPLES!==F.blurSamples&&(y.defines.VSM_SAMPLES=F.blurSamples,M.defines.VSM_SAMPLES=F.blurSamples,y.needsUpdate=!0,M.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new Rs(l.x,l.y)),y.uniforms.shadow_pass.value=F.map.texture,y.uniforms.resolution.value=F.mapSize,y.uniforms.radius.value=F.radius,o.setRenderTarget(F.mapPass),o.clear(),o.renderBufferDirect(z,null,W,y,A,null),M.uniforms.shadow_pass.value=F.mapPass.texture,M.uniforms.resolution.value=F.mapSize,M.uniforms.radius.value=F.radius,o.setRenderTarget(F.map),o.clear(),o.renderBufferDirect(z,null,W,M,A,null)}function N(F,z,W,w){let R=null;const V=W.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(V!==void 0)R=V;else if(R=W.isPointLight===!0?m:d,o.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0||z.alphaToCoverage===!0){const K=R.uuid,rt=z.uuid;let ht=p[K];ht===void 0&&(ht={},p[K]=ht);let lt=ht[rt];lt===void 0&&(lt=R.clone(),ht[rt]=lt,z.addEventListener("dispose",G)),R=lt}if(R.visible=z.visible,R.wireframe=z.wireframe,w===ua?R.side=z.shadowSide!==null?z.shadowSide:z.side:R.side=z.shadowSide!==null?z.shadowSide:_[z.side],R.alphaMap=z.alphaMap,R.alphaTest=z.alphaToCoverage===!0?.5:z.alphaTest,R.map=z.map,R.clipShadows=z.clipShadows,R.clippingPlanes=z.clippingPlanes,R.clipIntersection=z.clipIntersection,R.displacementMap=z.displacementMap,R.displacementScale=z.displacementScale,R.displacementBias=z.displacementBias,R.wireframeLinewidth=z.wireframeLinewidth,R.linewidth=z.linewidth,W.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const K=o.properties.get(R);K.light=W}return R}function D(F,z,W,w,R){if(F.visible===!1)return;if(F.layers.test(z.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&R===ua)&&(!F.frustumCulled||s.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,F.matrixWorld);const rt=t.update(F),ht=F.material;if(Array.isArray(ht)){const lt=rt.groups;for(let O=0,Q=lt.length;O<Q;O++){const j=lt[O],vt=ht[j.materialIndex];if(vt&&vt.visible){const Mt=N(F,vt,w,R);F.onBeforeShadow(o,F,z,W,rt,Mt,j),o.renderBufferDirect(W,null,rt,Mt,F,j),F.onAfterShadow(o,F,z,W,rt,Mt,j)}}}else if(ht.visible){const lt=N(F,ht,w,R);F.onBeforeShadow(o,F,z,W,rt,lt,null),o.renderBufferDirect(W,null,rt,lt,F,null),F.onAfterShadow(o,F,z,W,rt,lt,null)}}const K=F.children;for(let rt=0,ht=K.length;rt<ht;rt++)D(K[rt],z,W,w,R)}function G(F){F.target.removeEventListener("dispose",G);for(const W in p){const w=p[W],R=F.target.uuid;R in w&&(w[R].dispose(),delete w[R])}}}const _A={[$h]:td,[ed]:ad,[nd]:sd,[Nr]:id,[td]:$h,[ad]:ed,[sd]:nd,[id]:Nr};function vA(o,t){function i(){let X=!1;const Tt=new ke;let Rt=null;const zt=new ke(0,0,0,0);return{setMask:function(xt){Rt!==xt&&!X&&(o.colorMask(xt,xt,xt,xt),Rt=xt)},setLocked:function(xt){X=xt},setClear:function(xt,gt,Bt,ie,Pe){Pe===!0&&(xt*=ie,gt*=ie,Bt*=ie),Tt.set(xt,gt,Bt,ie),zt.equals(Tt)===!1&&(o.clearColor(xt,gt,Bt,ie),zt.copy(Tt))},reset:function(){X=!1,Rt=null,zt.set(-1,0,0,0)}}}function s(){let X=!1,Tt=!1,Rt=null,zt=null,xt=null;return{setReversed:function(gt){if(Tt!==gt){const Bt=t.get("EXT_clip_control");gt?Bt.clipControlEXT(Bt.LOWER_LEFT_EXT,Bt.ZERO_TO_ONE_EXT):Bt.clipControlEXT(Bt.LOWER_LEFT_EXT,Bt.NEGATIVE_ONE_TO_ONE_EXT),Tt=gt;const ie=xt;xt=null,this.setClear(ie)}},getReversed:function(){return Tt},setTest:function(gt){gt?ct(o.DEPTH_TEST):wt(o.DEPTH_TEST)},setMask:function(gt){Rt!==gt&&!X&&(o.depthMask(gt),Rt=gt)},setFunc:function(gt){if(Tt&&(gt=_A[gt]),zt!==gt){switch(gt){case $h:o.depthFunc(o.NEVER);break;case td:o.depthFunc(o.ALWAYS);break;case ed:o.depthFunc(o.LESS);break;case Nr:o.depthFunc(o.LEQUAL);break;case nd:o.depthFunc(o.EQUAL);break;case id:o.depthFunc(o.GEQUAL);break;case ad:o.depthFunc(o.GREATER);break;case sd:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}zt=gt}},setLocked:function(gt){X=gt},setClear:function(gt){xt!==gt&&(Tt&&(gt=1-gt),o.clearDepth(gt),xt=gt)},reset:function(){X=!1,Rt=null,zt=null,xt=null,Tt=!1}}}function l(){let X=!1,Tt=null,Rt=null,zt=null,xt=null,gt=null,Bt=null,ie=null,Pe=null;return{setTest:function(Te){X||(Te?ct(o.STENCIL_TEST):wt(o.STENCIL_TEST))},setMask:function(Te){Tt!==Te&&!X&&(o.stencilMask(Te),Tt=Te)},setFunc:function(Te,Pn,li){(Rt!==Te||zt!==Pn||xt!==li)&&(o.stencilFunc(Te,Pn,li),Rt=Te,zt=Pn,xt=li)},setOp:function(Te,Pn,li){(gt!==Te||Bt!==Pn||ie!==li)&&(o.stencilOp(Te,Pn,li),gt=Te,Bt=Pn,ie=li)},setLocked:function(Te){X=Te},setClear:function(Te){Pe!==Te&&(o.clearStencil(Te),Pe=Te)},reset:function(){X=!1,Tt=null,Rt=null,zt=null,xt=null,gt=null,Bt=null,ie=null,Pe=null}}}const c=new i,h=new s,d=new l,m=new WeakMap,p=new WeakMap;let S={},_={},y=new WeakMap,M=[],T=null,A=!1,x=null,g=null,P=null,N=null,D=null,G=null,F=null,z=new ve(0,0,0),W=0,w=!1,R=null,V=null,K=null,rt=null,ht=null;const lt=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,Q=0;const j=o.getParameter(o.VERSION);j.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(j)[1]),O=Q>=1):j.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),O=Q>=2);let vt=null,Mt={};const L=o.getParameter(o.SCISSOR_BOX),nt=o.getParameter(o.VIEWPORT),yt=new ke().fromArray(L),bt=new ke().fromArray(nt);function Nt(X,Tt,Rt,zt){const xt=new Uint8Array(4),gt=o.createTexture();o.bindTexture(X,gt),o.texParameteri(X,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(X,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Bt=0;Bt<Rt;Bt++)X===o.TEXTURE_3D||X===o.TEXTURE_2D_ARRAY?o.texImage3D(Tt,0,o.RGBA,1,1,zt,0,o.RGBA,o.UNSIGNED_BYTE,xt):o.texImage2D(Tt+Bt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,xt);return gt}const it={};it[o.TEXTURE_2D]=Nt(o.TEXTURE_2D,o.TEXTURE_2D,1),it[o.TEXTURE_CUBE_MAP]=Nt(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),it[o.TEXTURE_2D_ARRAY]=Nt(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),it[o.TEXTURE_3D]=Nt(o.TEXTURE_3D,o.TEXTURE_3D,1,1),c.setClear(0,0,0,1),h.setClear(1),d.setClear(0),ct(o.DEPTH_TEST),h.setFunc(Nr),$t(!1),Xt(q0),ct(o.CULL_FACE),Ae(Wa);function ct(X){S[X]!==!0&&(o.enable(X),S[X]=!0)}function wt(X){S[X]!==!1&&(o.disable(X),S[X]=!1)}function It(X,Tt){return _[X]!==Tt?(o.bindFramebuffer(X,Tt),_[X]=Tt,X===o.DRAW_FRAMEBUFFER&&(_[o.FRAMEBUFFER]=Tt),X===o.FRAMEBUFFER&&(_[o.DRAW_FRAMEBUFFER]=Tt),!0):!1}function kt(X,Tt){let Rt=M,zt=!1;if(X){Rt=y.get(Tt),Rt===void 0&&(Rt=[],y.set(Tt,Rt));const xt=X.textures;if(Rt.length!==xt.length||Rt[0]!==o.COLOR_ATTACHMENT0){for(let gt=0,Bt=xt.length;gt<Bt;gt++)Rt[gt]=o.COLOR_ATTACHMENT0+gt;Rt.length=xt.length,zt=!0}}else Rt[0]!==o.BACK&&(Rt[0]=o.BACK,zt=!0);zt&&o.drawBuffers(Rt)}function de(X){return T!==X?(o.useProgram(X),T=X,!0):!1}const ln={[Es]:o.FUNC_ADD,[nx]:o.FUNC_SUBTRACT,[ix]:o.FUNC_REVERSE_SUBTRACT};ln[ax]=o.MIN,ln[sx]=o.MAX;const H={[rx]:o.ZERO,[ox]:o.ONE,[lx]:o.SRC_COLOR,[Qh]:o.SRC_ALPHA,[px]:o.SRC_ALPHA_SATURATE,[hx]:o.DST_COLOR,[ux]:o.DST_ALPHA,[cx]:o.ONE_MINUS_SRC_COLOR,[Jh]:o.ONE_MINUS_SRC_ALPHA,[dx]:o.ONE_MINUS_DST_COLOR,[fx]:o.ONE_MINUS_DST_ALPHA,[mx]:o.CONSTANT_COLOR,[gx]:o.ONE_MINUS_CONSTANT_COLOR,[_x]:o.CONSTANT_ALPHA,[vx]:o.ONE_MINUS_CONSTANT_ALPHA};function Ae(X,Tt,Rt,zt,xt,gt,Bt,ie,Pe,Te){if(X===Wa){A===!0&&(wt(o.BLEND),A=!1);return}if(A===!1&&(ct(o.BLEND),A=!0),X!==ex){if(X!==x||Te!==w){if((g!==Es||D!==Es)&&(o.blendEquation(o.FUNC_ADD),g=Es,D=Es),Te)switch(X){case Ur:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Y0:o.blendFunc(o.ONE,o.ONE);break;case Z0:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case j0:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case Ur:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Y0:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case Z0:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case j0:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}P=null,N=null,G=null,F=null,z.set(0,0,0),W=0,x=X,w=Te}return}xt=xt||Tt,gt=gt||Rt,Bt=Bt||zt,(Tt!==g||xt!==D)&&(o.blendEquationSeparate(ln[Tt],ln[xt]),g=Tt,D=xt),(Rt!==P||zt!==N||gt!==G||Bt!==F)&&(o.blendFuncSeparate(H[Rt],H[zt],H[gt],H[Bt]),P=Rt,N=zt,G=gt,F=Bt),(ie.equals(z)===!1||Pe!==W)&&(o.blendColor(ie.r,ie.g,ie.b,Pe),z.copy(ie),W=Pe),x=X,w=!1}function ne(X,Tt){X.side===zi?wt(o.CULL_FACE):ct(o.CULL_FACE);let Rt=X.side===jn;Tt&&(Rt=!Rt),$t(Rt),X.blending===Ur&&X.transparent===!1?Ae(Wa):Ae(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),h.setFunc(X.depthFunc),h.setTest(X.depthTest),h.setMask(X.depthWrite),c.setMask(X.colorWrite);const zt=X.stencilWrite;d.setTest(zt),zt&&(d.setMask(X.stencilWriteMask),d.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),d.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),Vt(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?ct(o.SAMPLE_ALPHA_TO_COVERAGE):wt(o.SAMPLE_ALPHA_TO_COVERAGE)}function $t(X){R!==X&&(X?o.frontFace(o.CW):o.frontFace(o.CCW),R=X)}function Xt(X){X!==$y?(ct(o.CULL_FACE),X!==V&&(X===q0?o.cullFace(o.BACK):X===tx?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):wt(o.CULL_FACE),V=X}function Xe(X){X!==K&&(O&&o.lineWidth(X),K=X)}function Vt(X,Tt,Rt){X?(ct(o.POLYGON_OFFSET_FILL),(rt!==Tt||ht!==Rt)&&(o.polygonOffset(Tt,Rt),rt=Tt,ht=Rt)):wt(o.POLYGON_OFFSET_FILL)}function se(X){X?ct(o.SCISSOR_TEST):wt(o.SCISSOR_TEST)}function tn(X){X===void 0&&(X=o.TEXTURE0+lt-1),vt!==X&&(o.activeTexture(X),vt=X)}function $e(X,Tt,Rt){Rt===void 0&&(vt===null?Rt=o.TEXTURE0+lt-1:Rt=vt);let zt=Mt[Rt];zt===void 0&&(zt={type:void 0,texture:void 0},Mt[Rt]=zt),(zt.type!==X||zt.texture!==Tt)&&(vt!==Rt&&(o.activeTexture(Rt),vt=Rt),o.bindTexture(X,Tt||it[X]),zt.type=X,zt.texture=Tt)}function U(){const X=Mt[vt];X!==void 0&&X.type!==void 0&&(o.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function E(){try{o.compressedTexImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function tt(){try{o.compressedTexImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function dt(){try{o.texSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function St(){try{o.texSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ut(){try{o.compressedTexSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Zt(){try{o.compressedTexSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function At(){try{o.texStorage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function qt(){try{o.texStorage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Yt(){try{o.texImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Et(){try{o.texImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ct(X){yt.equals(X)===!1&&(o.scissor(X.x,X.y,X.z,X.w),yt.copy(X))}function jt(X){bt.equals(X)===!1&&(o.viewport(X.x,X.y,X.z,X.w),bt.copy(X))}function Ot(X,Tt){let Rt=p.get(Tt);Rt===void 0&&(Rt=new WeakMap,p.set(Tt,Rt));let zt=Rt.get(X);zt===void 0&&(zt=o.getUniformBlockIndex(Tt,X.name),Rt.set(X,zt))}function Dt(X,Tt){const zt=p.get(Tt).get(X);m.get(Tt)!==zt&&(o.uniformBlockBinding(Tt,zt,X.__bindingPointIndex),m.set(Tt,zt))}function oe(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),h.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),S={},vt=null,Mt={},_={},y=new WeakMap,M=[],T=null,A=!1,x=null,g=null,P=null,N=null,D=null,G=null,F=null,z=new ve(0,0,0),W=0,w=!1,R=null,V=null,K=null,rt=null,ht=null,yt.set(0,0,o.canvas.width,o.canvas.height),bt.set(0,0,o.canvas.width,o.canvas.height),c.reset(),h.reset(),d.reset()}return{buffers:{color:c,depth:h,stencil:d},enable:ct,disable:wt,bindFramebuffer:It,drawBuffers:kt,useProgram:de,setBlending:Ae,setMaterial:ne,setFlipSided:$t,setCullFace:Xt,setLineWidth:Xe,setPolygonOffset:Vt,setScissorTest:se,activeTexture:tn,bindTexture:$e,unbindTexture:U,compressedTexImage2D:E,compressedTexImage3D:tt,texImage2D:Yt,texImage3D:Et,updateUBOMapping:Ot,uniformBlockBinding:Dt,texStorage2D:At,texStorage3D:qt,texSubImage2D:dt,texSubImage3D:St,compressedTexSubImage2D:ut,compressedTexSubImage3D:Zt,scissor:Ct,viewport:jt,reset:oe}}function SA(o,t,i,s,l,c,h){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new fe,S=new WeakMap;let _;const y=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(U,E){return M?new OffscreenCanvas(U,E):Yc("canvas")}function A(U,E,tt){let dt=1;const St=$e(U);if((St.width>tt||St.height>tt)&&(dt=tt/Math.max(St.width,St.height)),dt<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const ut=Math.floor(dt*St.width),Zt=Math.floor(dt*St.height);_===void 0&&(_=T(ut,Zt));const At=E?T(ut,Zt):_;return At.width=ut,At.height=Zt,At.getContext("2d").drawImage(U,0,0,ut,Zt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+St.width+"x"+St.height+") to ("+ut+"x"+Zt+")."),At}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+St.width+"x"+St.height+")."),U;return U}function x(U){return U.generateMipmaps}function g(U){o.generateMipmap(U)}function P(U){return U.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?o.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function N(U,E,tt,dt,St=!1){if(U!==null){if(o[U]!==void 0)return o[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let ut=E;if(E===o.RED&&(tt===o.FLOAT&&(ut=o.R32F),tt===o.HALF_FLOAT&&(ut=o.R16F),tt===o.UNSIGNED_BYTE&&(ut=o.R8)),E===o.RED_INTEGER&&(tt===o.UNSIGNED_BYTE&&(ut=o.R8UI),tt===o.UNSIGNED_SHORT&&(ut=o.R16UI),tt===o.UNSIGNED_INT&&(ut=o.R32UI),tt===o.BYTE&&(ut=o.R8I),tt===o.SHORT&&(ut=o.R16I),tt===o.INT&&(ut=o.R32I)),E===o.RG&&(tt===o.FLOAT&&(ut=o.RG32F),tt===o.HALF_FLOAT&&(ut=o.RG16F),tt===o.UNSIGNED_BYTE&&(ut=o.RG8)),E===o.RG_INTEGER&&(tt===o.UNSIGNED_BYTE&&(ut=o.RG8UI),tt===o.UNSIGNED_SHORT&&(ut=o.RG16UI),tt===o.UNSIGNED_INT&&(ut=o.RG32UI),tt===o.BYTE&&(ut=o.RG8I),tt===o.SHORT&&(ut=o.RG16I),tt===o.INT&&(ut=o.RG32I)),E===o.RGB_INTEGER&&(tt===o.UNSIGNED_BYTE&&(ut=o.RGB8UI),tt===o.UNSIGNED_SHORT&&(ut=o.RGB16UI),tt===o.UNSIGNED_INT&&(ut=o.RGB32UI),tt===o.BYTE&&(ut=o.RGB8I),tt===o.SHORT&&(ut=o.RGB16I),tt===o.INT&&(ut=o.RGB32I)),E===o.RGBA_INTEGER&&(tt===o.UNSIGNED_BYTE&&(ut=o.RGBA8UI),tt===o.UNSIGNED_SHORT&&(ut=o.RGBA16UI),tt===o.UNSIGNED_INT&&(ut=o.RGBA32UI),tt===o.BYTE&&(ut=o.RGBA8I),tt===o.SHORT&&(ut=o.RGBA16I),tt===o.INT&&(ut=o.RGBA32I)),E===o.RGB&&(tt===o.UNSIGNED_INT_5_9_9_9_REV&&(ut=o.RGB9_E5),tt===o.UNSIGNED_INT_10F_11F_11F_REV&&(ut=o.R11F_G11F_B10F)),E===o.RGBA){const Zt=St?Wc:we.getTransfer(dt);tt===o.FLOAT&&(ut=o.RGBA32F),tt===o.HALF_FLOAT&&(ut=o.RGBA16F),tt===o.UNSIGNED_BYTE&&(ut=Zt===Ve?o.SRGB8_ALPHA8:o.RGBA8),tt===o.UNSIGNED_SHORT_4_4_4_4&&(ut=o.RGBA4),tt===o.UNSIGNED_SHORT_5_5_5_1&&(ut=o.RGB5_A1)}return(ut===o.R16F||ut===o.R32F||ut===o.RG16F||ut===o.RG32F||ut===o.RGBA16F||ut===o.RGBA32F)&&t.get("EXT_color_buffer_float"),ut}function D(U,E){let tt;return U?E===null||E===Cs||E===jo?tt=o.DEPTH24_STENCIL8:E===fa?tt=o.DEPTH32F_STENCIL8:E===Zo&&(tt=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Cs||E===jo?tt=o.DEPTH_COMPONENT24:E===fa?tt=o.DEPTH_COMPONENT32F:E===Zo&&(tt=o.DEPTH_COMPONENT16),tt}function G(U,E){return x(U)===!0||U.isFramebufferTexture&&U.minFilter!==Ci&&U.minFilter!==Ii?Math.log2(Math.max(E.width,E.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?E.mipmaps.length:1}function F(U){const E=U.target;E.removeEventListener("dispose",F),W(E),E.isVideoTexture&&S.delete(E)}function z(U){const E=U.target;E.removeEventListener("dispose",z),R(E)}function W(U){const E=s.get(U);if(E.__webglInit===void 0)return;const tt=U.source,dt=y.get(tt);if(dt){const St=dt[E.__cacheKey];St.usedTimes--,St.usedTimes===0&&w(U),Object.keys(dt).length===0&&y.delete(tt)}s.remove(U)}function w(U){const E=s.get(U);o.deleteTexture(E.__webglTexture);const tt=U.source,dt=y.get(tt);delete dt[E.__cacheKey],h.memory.textures--}function R(U){const E=s.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),s.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let dt=0;dt<6;dt++){if(Array.isArray(E.__webglFramebuffer[dt]))for(let St=0;St<E.__webglFramebuffer[dt].length;St++)o.deleteFramebuffer(E.__webglFramebuffer[dt][St]);else o.deleteFramebuffer(E.__webglFramebuffer[dt]);E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer[dt])}else{if(Array.isArray(E.__webglFramebuffer))for(let dt=0;dt<E.__webglFramebuffer.length;dt++)o.deleteFramebuffer(E.__webglFramebuffer[dt]);else o.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&o.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let dt=0;dt<E.__webglColorRenderbuffer.length;dt++)E.__webglColorRenderbuffer[dt]&&o.deleteRenderbuffer(E.__webglColorRenderbuffer[dt]);E.__webglDepthRenderbuffer&&o.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const tt=U.textures;for(let dt=0,St=tt.length;dt<St;dt++){const ut=s.get(tt[dt]);ut.__webglTexture&&(o.deleteTexture(ut.__webglTexture),h.memory.textures--),s.remove(tt[dt])}s.remove(U)}let V=0;function K(){V=0}function rt(){const U=V;return U>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+l.maxTextures),V+=1,U}function ht(U){const E=[];return E.push(U.wrapS),E.push(U.wrapT),E.push(U.wrapR||0),E.push(U.magFilter),E.push(U.minFilter),E.push(U.anisotropy),E.push(U.internalFormat),E.push(U.format),E.push(U.type),E.push(U.generateMipmaps),E.push(U.premultiplyAlpha),E.push(U.flipY),E.push(U.unpackAlignment),E.push(U.colorSpace),E.join()}function lt(U,E){const tt=s.get(U);if(U.isVideoTexture&&se(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&tt.__version!==U.version){const dt=U.image;if(dt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(dt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{it(tt,U,E);return}}else U.isExternalTexture&&(tt.__webglTexture=U.sourceTexture?U.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,tt.__webglTexture,o.TEXTURE0+E)}function O(U,E){const tt=s.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&tt.__version!==U.version){it(tt,U,E);return}i.bindTexture(o.TEXTURE_2D_ARRAY,tt.__webglTexture,o.TEXTURE0+E)}function Q(U,E){const tt=s.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&tt.__version!==U.version){it(tt,U,E);return}i.bindTexture(o.TEXTURE_3D,tt.__webglTexture,o.TEXTURE0+E)}function j(U,E){const tt=s.get(U);if(U.version>0&&tt.__version!==U.version){ct(tt,U,E);return}i.bindTexture(o.TEXTURE_CUBE_MAP,tt.__webglTexture,o.TEXTURE0+E)}const vt={[ld]:o.REPEAT,[bs]:o.CLAMP_TO_EDGE,[cd]:o.MIRRORED_REPEAT},Mt={[Ci]:o.NEAREST,[Rx]:o.NEAREST_MIPMAP_NEAREST,[dc]:o.NEAREST_MIPMAP_LINEAR,[Ii]:o.LINEAR,[mh]:o.LINEAR_MIPMAP_NEAREST,[As]:o.LINEAR_MIPMAP_LINEAR},L={[Lx]:o.NEVER,[Bx]:o.ALWAYS,[Nx]:o.LESS,[dv]:o.LEQUAL,[Px]:o.EQUAL,[Ix]:o.GEQUAL,[Ox]:o.GREATER,[zx]:o.NOTEQUAL};function nt(U,E){if(E.type===fa&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===Ii||E.magFilter===mh||E.magFilter===dc||E.magFilter===As||E.minFilter===Ii||E.minFilter===mh||E.minFilter===dc||E.minFilter===As)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(U,o.TEXTURE_WRAP_S,vt[E.wrapS]),o.texParameteri(U,o.TEXTURE_WRAP_T,vt[E.wrapT]),(U===o.TEXTURE_3D||U===o.TEXTURE_2D_ARRAY)&&o.texParameteri(U,o.TEXTURE_WRAP_R,vt[E.wrapR]),o.texParameteri(U,o.TEXTURE_MAG_FILTER,Mt[E.magFilter]),o.texParameteri(U,o.TEXTURE_MIN_FILTER,Mt[E.minFilter]),E.compareFunction&&(o.texParameteri(U,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(U,o.TEXTURE_COMPARE_FUNC,L[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Ci||E.minFilter!==dc&&E.minFilter!==As||E.type===fa&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||s.get(E).__currentAnisotropy){const tt=t.get("EXT_texture_filter_anisotropic");o.texParameterf(U,tt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),s.get(E).__currentAnisotropy=E.anisotropy}}}function yt(U,E){let tt=!1;U.__webglInit===void 0&&(U.__webglInit=!0,E.addEventListener("dispose",F));const dt=E.source;let St=y.get(dt);St===void 0&&(St={},y.set(dt,St));const ut=ht(E);if(ut!==U.__cacheKey){St[ut]===void 0&&(St[ut]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,tt=!0),St[ut].usedTimes++;const Zt=St[U.__cacheKey];Zt!==void 0&&(St[U.__cacheKey].usedTimes--,Zt.usedTimes===0&&w(E)),U.__cacheKey=ut,U.__webglTexture=St[ut].texture}return tt}function bt(U,E,tt){return Math.floor(Math.floor(U/tt)/E)}function Nt(U,E,tt,dt){const ut=U.updateRanges;if(ut.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,E.width,E.height,tt,dt,E.data);else{ut.sort((Et,Ct)=>Et.start-Ct.start);let Zt=0;for(let Et=1;Et<ut.length;Et++){const Ct=ut[Zt],jt=ut[Et],Ot=Ct.start+Ct.count,Dt=bt(jt.start,E.width,4),oe=bt(Ct.start,E.width,4);jt.start<=Ot+1&&Dt===oe&&bt(jt.start+jt.count-1,E.width,4)===Dt?Ct.count=Math.max(Ct.count,jt.start+jt.count-Ct.start):(++Zt,ut[Zt]=jt)}ut.length=Zt+1;const At=o.getParameter(o.UNPACK_ROW_LENGTH),qt=o.getParameter(o.UNPACK_SKIP_PIXELS),Yt=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,E.width);for(let Et=0,Ct=ut.length;Et<Ct;Et++){const jt=ut[Et],Ot=Math.floor(jt.start/4),Dt=Math.ceil(jt.count/4),oe=Ot%E.width,X=Math.floor(Ot/E.width),Tt=Dt,Rt=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,oe),o.pixelStorei(o.UNPACK_SKIP_ROWS,X),i.texSubImage2D(o.TEXTURE_2D,0,oe,X,Tt,Rt,tt,dt,E.data)}U.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,At),o.pixelStorei(o.UNPACK_SKIP_PIXELS,qt),o.pixelStorei(o.UNPACK_SKIP_ROWS,Yt)}}function it(U,E,tt){let dt=o.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(dt=o.TEXTURE_2D_ARRAY),E.isData3DTexture&&(dt=o.TEXTURE_3D);const St=yt(U,E),ut=E.source;i.bindTexture(dt,U.__webglTexture,o.TEXTURE0+tt);const Zt=s.get(ut);if(ut.version!==Zt.__version||St===!0){i.activeTexture(o.TEXTURE0+tt);const At=we.getPrimaries(we.workingColorSpace),qt=E.colorSpace===Xa?null:we.getPrimaries(E.colorSpace),Yt=E.colorSpace===Xa||At===qt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Yt);let Et=A(E.image,!1,l.maxTextureSize);Et=tn(E,Et);const Ct=c.convert(E.format,E.colorSpace),jt=c.convert(E.type);let Ot=N(E.internalFormat,Ct,jt,E.colorSpace,E.isVideoTexture);nt(dt,E);let Dt;const oe=E.mipmaps,X=E.isVideoTexture!==!0,Tt=Zt.__version===void 0||St===!0,Rt=ut.dataReady,zt=G(E,Et);if(E.isDepthTexture)Ot=D(E.format===Qo,E.type),Tt&&(X?i.texStorage2D(o.TEXTURE_2D,1,Ot,Et.width,Et.height):i.texImage2D(o.TEXTURE_2D,0,Ot,Et.width,Et.height,0,Ct,jt,null));else if(E.isDataTexture)if(oe.length>0){X&&Tt&&i.texStorage2D(o.TEXTURE_2D,zt,Ot,oe[0].width,oe[0].height);for(let xt=0,gt=oe.length;xt<gt;xt++)Dt=oe[xt],X?Rt&&i.texSubImage2D(o.TEXTURE_2D,xt,0,0,Dt.width,Dt.height,Ct,jt,Dt.data):i.texImage2D(o.TEXTURE_2D,xt,Ot,Dt.width,Dt.height,0,Ct,jt,Dt.data);E.generateMipmaps=!1}else X?(Tt&&i.texStorage2D(o.TEXTURE_2D,zt,Ot,Et.width,Et.height),Rt&&Nt(E,Et,Ct,jt)):i.texImage2D(o.TEXTURE_2D,0,Ot,Et.width,Et.height,0,Ct,jt,Et.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){X&&Tt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,zt,Ot,oe[0].width,oe[0].height,Et.depth);for(let xt=0,gt=oe.length;xt<gt;xt++)if(Dt=oe[xt],E.format!==Ai)if(Ct!==null)if(X){if(Rt)if(E.layerUpdates.size>0){const Bt=b_(Dt.width,Dt.height,E.format,E.type);for(const ie of E.layerUpdates){const Pe=Dt.data.subarray(ie*Bt/Dt.data.BYTES_PER_ELEMENT,(ie+1)*Bt/Dt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,xt,0,0,ie,Dt.width,Dt.height,1,Ct,Pe)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,xt,0,0,0,Dt.width,Dt.height,Et.depth,Ct,Dt.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,xt,Ot,Dt.width,Dt.height,Et.depth,0,Dt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else X?Rt&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,xt,0,0,0,Dt.width,Dt.height,Et.depth,Ct,jt,Dt.data):i.texImage3D(o.TEXTURE_2D_ARRAY,xt,Ot,Dt.width,Dt.height,Et.depth,0,Ct,jt,Dt.data)}else{X&&Tt&&i.texStorage2D(o.TEXTURE_2D,zt,Ot,oe[0].width,oe[0].height);for(let xt=0,gt=oe.length;xt<gt;xt++)Dt=oe[xt],E.format!==Ai?Ct!==null?X?Rt&&i.compressedTexSubImage2D(o.TEXTURE_2D,xt,0,0,Dt.width,Dt.height,Ct,Dt.data):i.compressedTexImage2D(o.TEXTURE_2D,xt,Ot,Dt.width,Dt.height,0,Dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):X?Rt&&i.texSubImage2D(o.TEXTURE_2D,xt,0,0,Dt.width,Dt.height,Ct,jt,Dt.data):i.texImage2D(o.TEXTURE_2D,xt,Ot,Dt.width,Dt.height,0,Ct,jt,Dt.data)}else if(E.isDataArrayTexture)if(X){if(Tt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,zt,Ot,Et.width,Et.height,Et.depth),Rt)if(E.layerUpdates.size>0){const xt=b_(Et.width,Et.height,E.format,E.type);for(const gt of E.layerUpdates){const Bt=Et.data.subarray(gt*xt/Et.data.BYTES_PER_ELEMENT,(gt+1)*xt/Et.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,gt,Et.width,Et.height,1,Ct,jt,Bt)}E.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Et.width,Et.height,Et.depth,Ct,jt,Et.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Ot,Et.width,Et.height,Et.depth,0,Ct,jt,Et.data);else if(E.isData3DTexture)X?(Tt&&i.texStorage3D(o.TEXTURE_3D,zt,Ot,Et.width,Et.height,Et.depth),Rt&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Et.width,Et.height,Et.depth,Ct,jt,Et.data)):i.texImage3D(o.TEXTURE_3D,0,Ot,Et.width,Et.height,Et.depth,0,Ct,jt,Et.data);else if(E.isFramebufferTexture){if(Tt)if(X)i.texStorage2D(o.TEXTURE_2D,zt,Ot,Et.width,Et.height);else{let xt=Et.width,gt=Et.height;for(let Bt=0;Bt<zt;Bt++)i.texImage2D(o.TEXTURE_2D,Bt,Ot,xt,gt,0,Ct,jt,null),xt>>=1,gt>>=1}}else if(oe.length>0){if(X&&Tt){const xt=$e(oe[0]);i.texStorage2D(o.TEXTURE_2D,zt,Ot,xt.width,xt.height)}for(let xt=0,gt=oe.length;xt<gt;xt++)Dt=oe[xt],X?Rt&&i.texSubImage2D(o.TEXTURE_2D,xt,0,0,Ct,jt,Dt):i.texImage2D(o.TEXTURE_2D,xt,Ot,Ct,jt,Dt);E.generateMipmaps=!1}else if(X){if(Tt){const xt=$e(Et);i.texStorage2D(o.TEXTURE_2D,zt,Ot,xt.width,xt.height)}Rt&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Ct,jt,Et)}else i.texImage2D(o.TEXTURE_2D,0,Ot,Ct,jt,Et);x(E)&&g(dt),Zt.__version=ut.version,E.onUpdate&&E.onUpdate(E)}U.__version=E.version}function ct(U,E,tt){if(E.image.length!==6)return;const dt=yt(U,E),St=E.source;i.bindTexture(o.TEXTURE_CUBE_MAP,U.__webglTexture,o.TEXTURE0+tt);const ut=s.get(St);if(St.version!==ut.__version||dt===!0){i.activeTexture(o.TEXTURE0+tt);const Zt=we.getPrimaries(we.workingColorSpace),At=E.colorSpace===Xa?null:we.getPrimaries(E.colorSpace),qt=E.colorSpace===Xa||Zt===At?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,qt);const Yt=E.isCompressedTexture||E.image[0].isCompressedTexture,Et=E.image[0]&&E.image[0].isDataTexture,Ct=[];for(let gt=0;gt<6;gt++)!Yt&&!Et?Ct[gt]=A(E.image[gt],!0,l.maxCubemapSize):Ct[gt]=Et?E.image[gt].image:E.image[gt],Ct[gt]=tn(E,Ct[gt]);const jt=Ct[0],Ot=c.convert(E.format,E.colorSpace),Dt=c.convert(E.type),oe=N(E.internalFormat,Ot,Dt,E.colorSpace),X=E.isVideoTexture!==!0,Tt=ut.__version===void 0||dt===!0,Rt=St.dataReady;let zt=G(E,jt);nt(o.TEXTURE_CUBE_MAP,E);let xt;if(Yt){X&&Tt&&i.texStorage2D(o.TEXTURE_CUBE_MAP,zt,oe,jt.width,jt.height);for(let gt=0;gt<6;gt++){xt=Ct[gt].mipmaps;for(let Bt=0;Bt<xt.length;Bt++){const ie=xt[Bt];E.format!==Ai?Ot!==null?X?Rt&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Bt,0,0,ie.width,ie.height,Ot,ie.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Bt,oe,ie.width,ie.height,0,ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?Rt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Bt,0,0,ie.width,ie.height,Ot,Dt,ie.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Bt,oe,ie.width,ie.height,0,Ot,Dt,ie.data)}}}else{if(xt=E.mipmaps,X&&Tt){xt.length>0&&zt++;const gt=$e(Ct[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,zt,oe,gt.width,gt.height)}for(let gt=0;gt<6;gt++)if(Et){X?Rt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,Ct[gt].width,Ct[gt].height,Ot,Dt,Ct[gt].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,oe,Ct[gt].width,Ct[gt].height,0,Ot,Dt,Ct[gt].data);for(let Bt=0;Bt<xt.length;Bt++){const Pe=xt[Bt].image[gt].image;X?Rt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Bt+1,0,0,Pe.width,Pe.height,Ot,Dt,Pe.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Bt+1,oe,Pe.width,Pe.height,0,Ot,Dt,Pe.data)}}else{X?Rt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,Ot,Dt,Ct[gt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,oe,Ot,Dt,Ct[gt]);for(let Bt=0;Bt<xt.length;Bt++){const ie=xt[Bt];X?Rt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Bt+1,0,0,Ot,Dt,ie.image[gt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Bt+1,oe,Ot,Dt,ie.image[gt])}}}x(E)&&g(o.TEXTURE_CUBE_MAP),ut.__version=St.version,E.onUpdate&&E.onUpdate(E)}U.__version=E.version}function wt(U,E,tt,dt,St,ut){const Zt=c.convert(tt.format,tt.colorSpace),At=c.convert(tt.type),qt=N(tt.internalFormat,Zt,At,tt.colorSpace),Yt=s.get(E),Et=s.get(tt);if(Et.__renderTarget=E,!Yt.__hasExternalTextures){const Ct=Math.max(1,E.width>>ut),jt=Math.max(1,E.height>>ut);St===o.TEXTURE_3D||St===o.TEXTURE_2D_ARRAY?i.texImage3D(St,ut,qt,Ct,jt,E.depth,0,Zt,At,null):i.texImage2D(St,ut,qt,Ct,jt,0,Zt,At,null)}i.bindFramebuffer(o.FRAMEBUFFER,U),Vt(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,dt,St,Et.__webglTexture,0,Xe(E)):(St===o.TEXTURE_2D||St>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&St<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,dt,St,Et.__webglTexture,ut),i.bindFramebuffer(o.FRAMEBUFFER,null)}function It(U,E,tt){if(o.bindRenderbuffer(o.RENDERBUFFER,U),E.depthBuffer){const dt=E.depthTexture,St=dt&&dt.isDepthTexture?dt.type:null,ut=D(E.stencilBuffer,St),Zt=E.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,At=Xe(E);Vt(E)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,At,ut,E.width,E.height):tt?o.renderbufferStorageMultisample(o.RENDERBUFFER,At,ut,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,ut,E.width,E.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Zt,o.RENDERBUFFER,U)}else{const dt=E.textures;for(let St=0;St<dt.length;St++){const ut=dt[St],Zt=c.convert(ut.format,ut.colorSpace),At=c.convert(ut.type),qt=N(ut.internalFormat,Zt,At,ut.colorSpace),Yt=Xe(E);tt&&Vt(E)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,Yt,qt,E.width,E.height):Vt(E)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Yt,qt,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,qt,E.width,E.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function kt(U,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,U),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const dt=s.get(E.depthTexture);dt.__renderTarget=E,(!dt.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),lt(E.depthTexture,0);const St=dt.__webglTexture,ut=Xe(E);if(E.depthTexture.format===Ko)Vt(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,St,0,ut):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,St,0);else if(E.depthTexture.format===Qo)Vt(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,St,0,ut):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,St,0);else throw new Error("Unknown depthTexture format")}function de(U){const E=s.get(U),tt=U.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==U.depthTexture){const dt=U.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),dt){const St=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,dt.removeEventListener("dispose",St)};dt.addEventListener("dispose",St),E.__depthDisposeCallback=St}E.__boundDepthTexture=dt}if(U.depthTexture&&!E.__autoAllocateDepthBuffer){if(tt)throw new Error("target.depthTexture not supported in Cube render targets");const dt=U.texture.mipmaps;dt&&dt.length>0?kt(E.__webglFramebuffer[0],U):kt(E.__webglFramebuffer,U)}else if(tt){E.__webglDepthbuffer=[];for(let dt=0;dt<6;dt++)if(i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[dt]),E.__webglDepthbuffer[dt]===void 0)E.__webglDepthbuffer[dt]=o.createRenderbuffer(),It(E.__webglDepthbuffer[dt],U,!1);else{const St=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ut=E.__webglDepthbuffer[dt];o.bindRenderbuffer(o.RENDERBUFFER,ut),o.framebufferRenderbuffer(o.FRAMEBUFFER,St,o.RENDERBUFFER,ut)}}else{const dt=U.texture.mipmaps;if(dt&&dt.length>0?i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=o.createRenderbuffer(),It(E.__webglDepthbuffer,U,!1);else{const St=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ut=E.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,ut),o.framebufferRenderbuffer(o.FRAMEBUFFER,St,o.RENDERBUFFER,ut)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function ln(U,E,tt){const dt=s.get(U);E!==void 0&&wt(dt.__webglFramebuffer,U,U.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),tt!==void 0&&de(U)}function H(U){const E=U.texture,tt=s.get(U),dt=s.get(E);U.addEventListener("dispose",z);const St=U.textures,ut=U.isWebGLCubeRenderTarget===!0,Zt=St.length>1;if(Zt||(dt.__webglTexture===void 0&&(dt.__webglTexture=o.createTexture()),dt.__version=E.version,h.memory.textures++),ut){tt.__webglFramebuffer=[];for(let At=0;At<6;At++)if(E.mipmaps&&E.mipmaps.length>0){tt.__webglFramebuffer[At]=[];for(let qt=0;qt<E.mipmaps.length;qt++)tt.__webglFramebuffer[At][qt]=o.createFramebuffer()}else tt.__webglFramebuffer[At]=o.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){tt.__webglFramebuffer=[];for(let At=0;At<E.mipmaps.length;At++)tt.__webglFramebuffer[At]=o.createFramebuffer()}else tt.__webglFramebuffer=o.createFramebuffer();if(Zt)for(let At=0,qt=St.length;At<qt;At++){const Yt=s.get(St[At]);Yt.__webglTexture===void 0&&(Yt.__webglTexture=o.createTexture(),h.memory.textures++)}if(U.samples>0&&Vt(U)===!1){tt.__webglMultisampledFramebuffer=o.createFramebuffer(),tt.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,tt.__webglMultisampledFramebuffer);for(let At=0;At<St.length;At++){const qt=St[At];tt.__webglColorRenderbuffer[At]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,tt.__webglColorRenderbuffer[At]);const Yt=c.convert(qt.format,qt.colorSpace),Et=c.convert(qt.type),Ct=N(qt.internalFormat,Yt,Et,qt.colorSpace,U.isXRRenderTarget===!0),jt=Xe(U);o.renderbufferStorageMultisample(o.RENDERBUFFER,jt,Ct,U.width,U.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+At,o.RENDERBUFFER,tt.__webglColorRenderbuffer[At])}o.bindRenderbuffer(o.RENDERBUFFER,null),U.depthBuffer&&(tt.__webglDepthRenderbuffer=o.createRenderbuffer(),It(tt.__webglDepthRenderbuffer,U,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(ut){i.bindTexture(o.TEXTURE_CUBE_MAP,dt.__webglTexture),nt(o.TEXTURE_CUBE_MAP,E);for(let At=0;At<6;At++)if(E.mipmaps&&E.mipmaps.length>0)for(let qt=0;qt<E.mipmaps.length;qt++)wt(tt.__webglFramebuffer[At][qt],U,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+At,qt);else wt(tt.__webglFramebuffer[At],U,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+At,0);x(E)&&g(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Zt){for(let At=0,qt=St.length;At<qt;At++){const Yt=St[At],Et=s.get(Yt);let Ct=o.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Ct=U.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Ct,Et.__webglTexture),nt(Ct,Yt),wt(tt.__webglFramebuffer,U,Yt,o.COLOR_ATTACHMENT0+At,Ct,0),x(Yt)&&g(Ct)}i.unbindTexture()}else{let At=o.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(At=U.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(At,dt.__webglTexture),nt(At,E),E.mipmaps&&E.mipmaps.length>0)for(let qt=0;qt<E.mipmaps.length;qt++)wt(tt.__webglFramebuffer[qt],U,E,o.COLOR_ATTACHMENT0,At,qt);else wt(tt.__webglFramebuffer,U,E,o.COLOR_ATTACHMENT0,At,0);x(E)&&g(At),i.unbindTexture()}U.depthBuffer&&de(U)}function Ae(U){const E=U.textures;for(let tt=0,dt=E.length;tt<dt;tt++){const St=E[tt];if(x(St)){const ut=P(U),Zt=s.get(St).__webglTexture;i.bindTexture(ut,Zt),g(ut),i.unbindTexture()}}}const ne=[],$t=[];function Xt(U){if(U.samples>0){if(Vt(U)===!1){const E=U.textures,tt=U.width,dt=U.height;let St=o.COLOR_BUFFER_BIT;const ut=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Zt=s.get(U),At=E.length>1;if(At)for(let Yt=0;Yt<E.length;Yt++)i.bindFramebuffer(o.FRAMEBUFFER,Zt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Yt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Zt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Yt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Zt.__webglMultisampledFramebuffer);const qt=U.texture.mipmaps;qt&&qt.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Zt.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Zt.__webglFramebuffer);for(let Yt=0;Yt<E.length;Yt++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(St|=o.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(St|=o.STENCIL_BUFFER_BIT)),At){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Zt.__webglColorRenderbuffer[Yt]);const Et=s.get(E[Yt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Et,0)}o.blitFramebuffer(0,0,tt,dt,0,0,tt,dt,St,o.NEAREST),m===!0&&(ne.length=0,$t.length=0,ne.push(o.COLOR_ATTACHMENT0+Yt),U.depthBuffer&&U.resolveDepthBuffer===!1&&(ne.push(ut),$t.push(ut),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,$t)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,ne))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),At)for(let Yt=0;Yt<E.length;Yt++){i.bindFramebuffer(o.FRAMEBUFFER,Zt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Yt,o.RENDERBUFFER,Zt.__webglColorRenderbuffer[Yt]);const Et=s.get(E[Yt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Zt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Yt,o.TEXTURE_2D,Et,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Zt.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&m){const E=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[E])}}}function Xe(U){return Math.min(l.maxSamples,U.samples)}function Vt(U){const E=s.get(U);return U.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function se(U){const E=h.render.frame;S.get(U)!==E&&(S.set(U,E),U.update())}function tn(U,E){const tt=U.colorSpace,dt=U.format,St=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||tt!==zr&&tt!==Xa&&(we.getTransfer(tt)===Ve?(dt!==Ai||St!==Fi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",tt)),E}function $e(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(p.width=U.naturalWidth||U.width,p.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(p.width=U.displayWidth,p.height=U.displayHeight):(p.width=U.width,p.height=U.height),p}this.allocateTextureUnit=rt,this.resetTextureUnits=K,this.setTexture2D=lt,this.setTexture2DArray=O,this.setTexture3D=Q,this.setTextureCube=j,this.rebindTextures=ln,this.setupRenderTarget=H,this.updateRenderTargetMipmap=Ae,this.updateMultisampleRenderTarget=Xt,this.setupDepthRenderbuffer=de,this.setupFrameBufferTexture=wt,this.useMultisampledRTT=Vt}function yA(o,t){function i(s,l=Xa){let c;const h=we.getTransfer(l);if(s===Fi)return o.UNSIGNED_BYTE;if(s===kd)return o.UNSIGNED_SHORT_4_4_4_4;if(s===Xd)return o.UNSIGNED_SHORT_5_5_5_1;if(s===rv)return o.UNSIGNED_INT_5_9_9_9_REV;if(s===ov)return o.UNSIGNED_INT_10F_11F_11F_REV;if(s===av)return o.BYTE;if(s===sv)return o.SHORT;if(s===Zo)return o.UNSIGNED_SHORT;if(s===Vd)return o.INT;if(s===Cs)return o.UNSIGNED_INT;if(s===fa)return o.FLOAT;if(s===tl)return o.HALF_FLOAT;if(s===lv)return o.ALPHA;if(s===cv)return o.RGB;if(s===Ai)return o.RGBA;if(s===Ko)return o.DEPTH_COMPONENT;if(s===Qo)return o.DEPTH_STENCIL;if(s===uv)return o.RED;if(s===Wd)return o.RED_INTEGER;if(s===fv)return o.RG;if(s===qd)return o.RG_INTEGER;if(s===Yd)return o.RGBA_INTEGER;if(s===Hc||s===Gc||s===Vc||s===kc)if(h===Ve)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===Hc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Gc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Vc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===kc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===Hc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Gc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Vc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===kc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===ud||s===fd||s===hd||s===dd)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===ud)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===fd)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===hd)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===dd)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===pd||s===md||s===gd)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(s===pd||s===md)return h===Ve?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===gd)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===_d||s===vd||s===Sd||s===yd||s===xd||s===Md||s===Ed||s===Td||s===bd||s===Ad||s===Cd||s===Rd||s===wd||s===Dd)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(s===_d)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===vd)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Sd)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===yd)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===xd)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Md)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Ed)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Td)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===bd)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Ad)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Cd)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Rd)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===wd)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Dd)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Ud||s===Ld||s===Nd)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(s===Ud)return h===Ve?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Ld)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Nd)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Pd||s===Od||s===zd||s===Id)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(s===Pd)return c.COMPRESSED_RED_RGTC1_EXT;if(s===Od)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===zd)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Id)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===jo?o.UNSIGNED_INT_24_8:o[s]!==void 0?o[s]:null}return{convert:i}}const xA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,MA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class EA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const s=new Rv(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new ja({vertexShader:xA,fragmentShader:MA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Ue(new Br(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class TA extends Fr{constructor(t,i){super();const s=this;let l=null,c=1,h=null,d="local-floor",m=1,p=null,S=null,_=null,y=null,M=null,T=null;const A=typeof XRWebGLBinding<"u",x=new EA,g={},P=i.getContextAttributes();let N=null,D=null;const G=[],F=[],z=new fe;let W=null;const w=new oi;w.viewport=new ke;const R=new oi;R.viewport=new ke;const V=[w,R],K=new kM;let rt=null,ht=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(it){let ct=G[it];return ct===void 0&&(ct=new zh,G[it]=ct),ct.getTargetRaySpace()},this.getControllerGrip=function(it){let ct=G[it];return ct===void 0&&(ct=new zh,G[it]=ct),ct.getGripSpace()},this.getHand=function(it){let ct=G[it];return ct===void 0&&(ct=new zh,G[it]=ct),ct.getHandSpace()};function lt(it){const ct=F.indexOf(it.inputSource);if(ct===-1)return;const wt=G[ct];wt!==void 0&&(wt.update(it.inputSource,it.frame,p||h),wt.dispatchEvent({type:it.type,data:it.inputSource}))}function O(){l.removeEventListener("select",lt),l.removeEventListener("selectstart",lt),l.removeEventListener("selectend",lt),l.removeEventListener("squeeze",lt),l.removeEventListener("squeezestart",lt),l.removeEventListener("squeezeend",lt),l.removeEventListener("end",O),l.removeEventListener("inputsourceschange",Q);for(let it=0;it<G.length;it++){const ct=F[it];ct!==null&&(F[it]=null,G[it].disconnect(ct))}rt=null,ht=null,x.reset();for(const it in g)delete g[it];t.setRenderTarget(N),M=null,y=null,_=null,l=null,D=null,Nt.stop(),s.isPresenting=!1,t.setPixelRatio(W),t.setSize(z.width,z.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(it){c=it,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(it){d=it,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(it){p=it},this.getBaseLayer=function(){return y!==null?y:M},this.getBinding=function(){return _===null&&A&&(_=new XRWebGLBinding(l,i)),_},this.getFrame=function(){return T},this.getSession=function(){return l},this.setSession=async function(it){if(l=it,l!==null){if(N=t.getRenderTarget(),l.addEventListener("select",lt),l.addEventListener("selectstart",lt),l.addEventListener("selectend",lt),l.addEventListener("squeeze",lt),l.addEventListener("squeezestart",lt),l.addEventListener("squeezeend",lt),l.addEventListener("end",O),l.addEventListener("inputsourceschange",Q),P.xrCompatible!==!0&&await i.makeXRCompatible(),W=t.getPixelRatio(),t.getSize(z),A&&"createProjectionLayer"in XRWebGLBinding.prototype){let wt=null,It=null,kt=null;P.depth&&(kt=P.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,wt=P.stencil?Qo:Ko,It=P.stencil?jo:Cs);const de={colorFormat:i.RGBA8,depthFormat:kt,scaleFactor:c};_=this.getBinding(),y=_.createProjectionLayer(de),l.updateRenderState({layers:[y]}),t.setPixelRatio(1),t.setSize(y.textureWidth,y.textureHeight,!1),D=new Rs(y.textureWidth,y.textureHeight,{format:Ai,type:Fi,depthTexture:new Cv(y.textureWidth,y.textureHeight,It,void 0,void 0,void 0,void 0,void 0,void 0,wt),stencilBuffer:P.stencil,colorSpace:t.outputColorSpace,samples:P.antialias?4:0,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}else{const wt={antialias:P.antialias,alpha:!0,depth:P.depth,stencil:P.stencil,framebufferScaleFactor:c};M=new XRWebGLLayer(l,i,wt),l.updateRenderState({baseLayer:M}),t.setPixelRatio(1),t.setSize(M.framebufferWidth,M.framebufferHeight,!1),D=new Rs(M.framebufferWidth,M.framebufferHeight,{format:Ai,type:Fi,colorSpace:t.outputColorSpace,stencilBuffer:P.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}D.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),Nt.setContext(l),Nt.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function Q(it){for(let ct=0;ct<it.removed.length;ct++){const wt=it.removed[ct],It=F.indexOf(wt);It>=0&&(F[It]=null,G[It].disconnect(wt))}for(let ct=0;ct<it.added.length;ct++){const wt=it.added[ct];let It=F.indexOf(wt);if(It===-1){for(let de=0;de<G.length;de++)if(de>=F.length){F.push(wt),It=de;break}else if(F[de]===null){F[de]=wt,It=de;break}if(It===-1)break}const kt=G[It];kt&&kt.connect(wt)}}const j=new I,vt=new I;function Mt(it,ct,wt){j.setFromMatrixPosition(ct.matrixWorld),vt.setFromMatrixPosition(wt.matrixWorld);const It=j.distanceTo(vt),kt=ct.projectionMatrix.elements,de=wt.projectionMatrix.elements,ln=kt[14]/(kt[10]-1),H=kt[14]/(kt[10]+1),Ae=(kt[9]+1)/kt[5],ne=(kt[9]-1)/kt[5],$t=(kt[8]-1)/kt[0],Xt=(de[8]+1)/de[0],Xe=ln*$t,Vt=ln*Xt,se=It/(-$t+Xt),tn=se*-$t;if(ct.matrixWorld.decompose(it.position,it.quaternion,it.scale),it.translateX(tn),it.translateZ(se),it.matrixWorld.compose(it.position,it.quaternion,it.scale),it.matrixWorldInverse.copy(it.matrixWorld).invert(),kt[10]===-1)it.projectionMatrix.copy(ct.projectionMatrix),it.projectionMatrixInverse.copy(ct.projectionMatrixInverse);else{const $e=ln+se,U=H+se,E=Xe-tn,tt=Vt+(It-tn),dt=Ae*H/U*$e,St=ne*H/U*$e;it.projectionMatrix.makePerspective(E,tt,dt,St,$e,U),it.projectionMatrixInverse.copy(it.projectionMatrix).invert()}}function L(it,ct){ct===null?it.matrixWorld.copy(it.matrix):it.matrixWorld.multiplyMatrices(ct.matrixWorld,it.matrix),it.matrixWorldInverse.copy(it.matrixWorld).invert()}this.updateCamera=function(it){if(l===null)return;let ct=it.near,wt=it.far;x.texture!==null&&(x.depthNear>0&&(ct=x.depthNear),x.depthFar>0&&(wt=x.depthFar)),K.near=R.near=w.near=ct,K.far=R.far=w.far=wt,(rt!==K.near||ht!==K.far)&&(l.updateRenderState({depthNear:K.near,depthFar:K.far}),rt=K.near,ht=K.far),K.layers.mask=it.layers.mask|6,w.layers.mask=K.layers.mask&3,R.layers.mask=K.layers.mask&5;const It=it.parent,kt=K.cameras;L(K,It);for(let de=0;de<kt.length;de++)L(kt[de],It);kt.length===2?Mt(K,w,R):K.projectionMatrix.copy(w.projectionMatrix),nt(it,K,It)};function nt(it,ct,wt){wt===null?it.matrix.copy(ct.matrixWorld):(it.matrix.copy(wt.matrixWorld),it.matrix.invert(),it.matrix.multiply(ct.matrixWorld)),it.matrix.decompose(it.position,it.quaternion,it.scale),it.updateMatrixWorld(!0),it.projectionMatrix.copy(ct.projectionMatrix),it.projectionMatrixInverse.copy(ct.projectionMatrixInverse),it.isPerspectiveCamera&&(it.fov=Jo*2*Math.atan(1/it.projectionMatrix.elements[5]),it.zoom=1)}this.getCamera=function(){return K},this.getFoveation=function(){if(!(y===null&&M===null))return m},this.setFoveation=function(it){m=it,y!==null&&(y.fixedFoveation=it),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=it)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(K)},this.getCameraTexture=function(it){return g[it]};let yt=null;function bt(it,ct){if(S=ct.getViewerPose(p||h),T=ct,S!==null){const wt=S.views;M!==null&&(t.setRenderTargetFramebuffer(D,M.framebuffer),t.setRenderTarget(D));let It=!1;wt.length!==K.cameras.length&&(K.cameras.length=0,It=!0);for(let H=0;H<wt.length;H++){const Ae=wt[H];let ne=null;if(M!==null)ne=M.getViewport(Ae);else{const Xt=_.getViewSubImage(y,Ae);ne=Xt.viewport,H===0&&(t.setRenderTargetTextures(D,Xt.colorTexture,Xt.depthStencilTexture),t.setRenderTarget(D))}let $t=V[H];$t===void 0&&($t=new oi,$t.layers.enable(H),$t.viewport=new ke,V[H]=$t),$t.matrix.fromArray(Ae.transform.matrix),$t.matrix.decompose($t.position,$t.quaternion,$t.scale),$t.projectionMatrix.fromArray(Ae.projectionMatrix),$t.projectionMatrixInverse.copy($t.projectionMatrix).invert(),$t.viewport.set(ne.x,ne.y,ne.width,ne.height),H===0&&(K.matrix.copy($t.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale)),It===!0&&K.cameras.push($t)}const kt=l.enabledFeatures;if(kt&&kt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&A){_=s.getBinding();const H=_.getDepthInformation(wt[0]);H&&H.isValid&&H.texture&&x.init(H,l.renderState)}if(kt&&kt.includes("camera-access")&&A){t.state.unbindTexture(),_=s.getBinding();for(let H=0;H<wt.length;H++){const Ae=wt[H].camera;if(Ae){let ne=g[Ae];ne||(ne=new Rv,g[Ae]=ne);const $t=_.getCameraImage(Ae);ne.sourceTexture=$t}}}}for(let wt=0;wt<G.length;wt++){const It=F[wt],kt=G[wt];It!==null&&kt!==void 0&&kt.update(It,ct,p||h)}yt&&yt(it,ct),ct.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:ct}),T=null}const Nt=new Uv;Nt.setAnimationLoop(bt),this.setAnimationLoop=function(it){yt=it},this.dispose=function(){}}}const ys=new Hi,bA=new Je;function AA(o,t){function i(x,g){x.matrixAutoUpdate===!0&&x.updateMatrix(),g.value.copy(x.matrix)}function s(x,g){g.color.getRGB(x.fogColor.value,xv(o)),g.isFog?(x.fogNear.value=g.near,x.fogFar.value=g.far):g.isFogExp2&&(x.fogDensity.value=g.density)}function l(x,g,P,N,D){g.isMeshBasicMaterial||g.isMeshLambertMaterial?c(x,g):g.isMeshToonMaterial?(c(x,g),_(x,g)):g.isMeshPhongMaterial?(c(x,g),S(x,g)):g.isMeshStandardMaterial?(c(x,g),y(x,g),g.isMeshPhysicalMaterial&&M(x,g,D)):g.isMeshMatcapMaterial?(c(x,g),T(x,g)):g.isMeshDepthMaterial?c(x,g):g.isMeshDistanceMaterial?(c(x,g),A(x,g)):g.isMeshNormalMaterial?c(x,g):g.isLineBasicMaterial?(h(x,g),g.isLineDashedMaterial&&d(x,g)):g.isPointsMaterial?m(x,g,P,N):g.isSpriteMaterial?p(x,g):g.isShadowMaterial?(x.color.value.copy(g.color),x.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function c(x,g){x.opacity.value=g.opacity,g.color&&x.diffuse.value.copy(g.color),g.emissive&&x.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(x.map.value=g.map,i(g.map,x.mapTransform)),g.alphaMap&&(x.alphaMap.value=g.alphaMap,i(g.alphaMap,x.alphaMapTransform)),g.bumpMap&&(x.bumpMap.value=g.bumpMap,i(g.bumpMap,x.bumpMapTransform),x.bumpScale.value=g.bumpScale,g.side===jn&&(x.bumpScale.value*=-1)),g.normalMap&&(x.normalMap.value=g.normalMap,i(g.normalMap,x.normalMapTransform),x.normalScale.value.copy(g.normalScale),g.side===jn&&x.normalScale.value.negate()),g.displacementMap&&(x.displacementMap.value=g.displacementMap,i(g.displacementMap,x.displacementMapTransform),x.displacementScale.value=g.displacementScale,x.displacementBias.value=g.displacementBias),g.emissiveMap&&(x.emissiveMap.value=g.emissiveMap,i(g.emissiveMap,x.emissiveMapTransform)),g.specularMap&&(x.specularMap.value=g.specularMap,i(g.specularMap,x.specularMapTransform)),g.alphaTest>0&&(x.alphaTest.value=g.alphaTest);const P=t.get(g),N=P.envMap,D=P.envMapRotation;N&&(x.envMap.value=N,ys.copy(D),ys.x*=-1,ys.y*=-1,ys.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(ys.y*=-1,ys.z*=-1),x.envMapRotation.value.setFromMatrix4(bA.makeRotationFromEuler(ys)),x.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=g.reflectivity,x.ior.value=g.ior,x.refractionRatio.value=g.refractionRatio),g.lightMap&&(x.lightMap.value=g.lightMap,x.lightMapIntensity.value=g.lightMapIntensity,i(g.lightMap,x.lightMapTransform)),g.aoMap&&(x.aoMap.value=g.aoMap,x.aoMapIntensity.value=g.aoMapIntensity,i(g.aoMap,x.aoMapTransform))}function h(x,g){x.diffuse.value.copy(g.color),x.opacity.value=g.opacity,g.map&&(x.map.value=g.map,i(g.map,x.mapTransform))}function d(x,g){x.dashSize.value=g.dashSize,x.totalSize.value=g.dashSize+g.gapSize,x.scale.value=g.scale}function m(x,g,P,N){x.diffuse.value.copy(g.color),x.opacity.value=g.opacity,x.size.value=g.size*P,x.scale.value=N*.5,g.map&&(x.map.value=g.map,i(g.map,x.uvTransform)),g.alphaMap&&(x.alphaMap.value=g.alphaMap,i(g.alphaMap,x.alphaMapTransform)),g.alphaTest>0&&(x.alphaTest.value=g.alphaTest)}function p(x,g){x.diffuse.value.copy(g.color),x.opacity.value=g.opacity,x.rotation.value=g.rotation,g.map&&(x.map.value=g.map,i(g.map,x.mapTransform)),g.alphaMap&&(x.alphaMap.value=g.alphaMap,i(g.alphaMap,x.alphaMapTransform)),g.alphaTest>0&&(x.alphaTest.value=g.alphaTest)}function S(x,g){x.specular.value.copy(g.specular),x.shininess.value=Math.max(g.shininess,1e-4)}function _(x,g){g.gradientMap&&(x.gradientMap.value=g.gradientMap)}function y(x,g){x.metalness.value=g.metalness,g.metalnessMap&&(x.metalnessMap.value=g.metalnessMap,i(g.metalnessMap,x.metalnessMapTransform)),x.roughness.value=g.roughness,g.roughnessMap&&(x.roughnessMap.value=g.roughnessMap,i(g.roughnessMap,x.roughnessMapTransform)),g.envMap&&(x.envMapIntensity.value=g.envMapIntensity)}function M(x,g,P){x.ior.value=g.ior,g.sheen>0&&(x.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),x.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(x.sheenColorMap.value=g.sheenColorMap,i(g.sheenColorMap,x.sheenColorMapTransform)),g.sheenRoughnessMap&&(x.sheenRoughnessMap.value=g.sheenRoughnessMap,i(g.sheenRoughnessMap,x.sheenRoughnessMapTransform))),g.clearcoat>0&&(x.clearcoat.value=g.clearcoat,x.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(x.clearcoatMap.value=g.clearcoatMap,i(g.clearcoatMap,x.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,i(g.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(x.clearcoatNormalMap.value=g.clearcoatNormalMap,i(g.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===jn&&x.clearcoatNormalScale.value.negate())),g.dispersion>0&&(x.dispersion.value=g.dispersion),g.iridescence>0&&(x.iridescence.value=g.iridescence,x.iridescenceIOR.value=g.iridescenceIOR,x.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(x.iridescenceMap.value=g.iridescenceMap,i(g.iridescenceMap,x.iridescenceMapTransform)),g.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=g.iridescenceThicknessMap,i(g.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),g.transmission>0&&(x.transmission.value=g.transmission,x.transmissionSamplerMap.value=P.texture,x.transmissionSamplerSize.value.set(P.width,P.height),g.transmissionMap&&(x.transmissionMap.value=g.transmissionMap,i(g.transmissionMap,x.transmissionMapTransform)),x.thickness.value=g.thickness,g.thicknessMap&&(x.thicknessMap.value=g.thicknessMap,i(g.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=g.attenuationDistance,x.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(x.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(x.anisotropyMap.value=g.anisotropyMap,i(g.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=g.specularIntensity,x.specularColor.value.copy(g.specularColor),g.specularColorMap&&(x.specularColorMap.value=g.specularColorMap,i(g.specularColorMap,x.specularColorMapTransform)),g.specularIntensityMap&&(x.specularIntensityMap.value=g.specularIntensityMap,i(g.specularIntensityMap,x.specularIntensityMapTransform))}function T(x,g){g.matcap&&(x.matcap.value=g.matcap)}function A(x,g){const P=t.get(g).light;x.referencePosition.value.setFromMatrixPosition(P.matrixWorld),x.nearDistance.value=P.shadow.camera.near,x.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function CA(o,t,i,s){let l={},c={},h=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(P,N){const D=N.program;s.uniformBlockBinding(P,D)}function p(P,N){let D=l[P.id];D===void 0&&(T(P),D=S(P),l[P.id]=D,P.addEventListener("dispose",x));const G=N.program;s.updateUBOMapping(P,G);const F=t.render.frame;c[P.id]!==F&&(y(P),c[P.id]=F)}function S(P){const N=_();P.__bindingPointIndex=N;const D=o.createBuffer(),G=P.__size,F=P.usage;return o.bindBuffer(o.UNIFORM_BUFFER,D),o.bufferData(o.UNIFORM_BUFFER,G,F),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,N,D),D}function _(){for(let P=0;P<d;P++)if(h.indexOf(P)===-1)return h.push(P),P;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(P){const N=l[P.id],D=P.uniforms,G=P.__cache;o.bindBuffer(o.UNIFORM_BUFFER,N);for(let F=0,z=D.length;F<z;F++){const W=Array.isArray(D[F])?D[F]:[D[F]];for(let w=0,R=W.length;w<R;w++){const V=W[w];if(M(V,F,w,G)===!0){const K=V.__offset,rt=Array.isArray(V.value)?V.value:[V.value];let ht=0;for(let lt=0;lt<rt.length;lt++){const O=rt[lt],Q=A(O);typeof O=="number"||typeof O=="boolean"?(V.__data[0]=O,o.bufferSubData(o.UNIFORM_BUFFER,K+ht,V.__data)):O.isMatrix3?(V.__data[0]=O.elements[0],V.__data[1]=O.elements[1],V.__data[2]=O.elements[2],V.__data[3]=0,V.__data[4]=O.elements[3],V.__data[5]=O.elements[4],V.__data[6]=O.elements[5],V.__data[7]=0,V.__data[8]=O.elements[6],V.__data[9]=O.elements[7],V.__data[10]=O.elements[8],V.__data[11]=0):(O.toArray(V.__data,ht),ht+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,K,V.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function M(P,N,D,G){const F=P.value,z=N+"_"+D;if(G[z]===void 0)return typeof F=="number"||typeof F=="boolean"?G[z]=F:G[z]=F.clone(),!0;{const W=G[z];if(typeof F=="number"||typeof F=="boolean"){if(W!==F)return G[z]=F,!0}else if(W.equals(F)===!1)return W.copy(F),!0}return!1}function T(P){const N=P.uniforms;let D=0;const G=16;for(let z=0,W=N.length;z<W;z++){const w=Array.isArray(N[z])?N[z]:[N[z]];for(let R=0,V=w.length;R<V;R++){const K=w[R],rt=Array.isArray(K.value)?K.value:[K.value];for(let ht=0,lt=rt.length;ht<lt;ht++){const O=rt[ht],Q=A(O),j=D%G,vt=j%Q.boundary,Mt=j+vt;D+=vt,Mt!==0&&G-Mt<Q.storage&&(D+=G-Mt),K.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),K.__offset=D,D+=Q.storage}}}const F=D%G;return F>0&&(D+=G-F),P.__size=D,P.__cache={},this}function A(P){const N={boundary:0,storage:0};return typeof P=="number"||typeof P=="boolean"?(N.boundary=4,N.storage=4):P.isVector2?(N.boundary=8,N.storage=8):P.isVector3||P.isColor?(N.boundary=16,N.storage=12):P.isVector4?(N.boundary=16,N.storage=16):P.isMatrix3?(N.boundary=48,N.storage=48):P.isMatrix4?(N.boundary=64,N.storage=64):P.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",P),N}function x(P){const N=P.target;N.removeEventListener("dispose",x);const D=h.indexOf(N.__bindingPointIndex);h.splice(D,1),o.deleteBuffer(l[N.id]),delete l[N.id],delete c[N.id]}function g(){for(const P in l)o.deleteBuffer(l[P]);h=[],l={},c={}}return{bind:m,update:p,dispose:g}}class RA{constructor(t={}){const{canvas:i=eM(),context:s=null,depth:l=!0,stencil:c=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:S="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:y=!1}=t;this.isWebGLRenderer=!0;let M;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=s.getContextAttributes().alpha}else M=h;const T=new Uint32Array(4),A=new Int32Array(4);let x=null,g=null;const P=[],N=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=qa,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const D=this;let G=!1;this._outputColorSpace=Zn;let F=0,z=0,W=null,w=-1,R=null;const V=new ke,K=new ke;let rt=null;const ht=new ve(0);let lt=0,O=i.width,Q=i.height,j=1,vt=null,Mt=null;const L=new ke(0,0,O,Q),nt=new ke(0,0,O,Q);let yt=!1;const bt=new Qd;let Nt=!1,it=!1;const ct=new Je,wt=new I,It=new ke,kt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let de=!1;function ln(){return W===null?j:1}let H=s;function Ae(C,q){return i.getContext(C,q)}try{const C={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:S,failIfMajorPerformanceCaveat:_};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Gd}`),i.addEventListener("webglcontextlost",Rt,!1),i.addEventListener("webglcontextrestored",zt,!1),i.addEventListener("webglcontextcreationerror",xt,!1),H===null){const q="webgl2";if(H=Ae(q,C),H===null)throw Ae(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let ne,$t,Xt,Xe,Vt,se,tn,$e,U,E,tt,dt,St,ut,Zt,At,qt,Yt,Et,Ct,jt,Ot,Dt,oe;function X(){ne=new BT(H),ne.init(),Ot=new yA(H,ne),$t=new UT(H,ne,t,Ot),Xt=new vA(H,ne),$t.reversedDepthBuffer&&y&&Xt.buffers.depth.setReversed(!0),Xe=new GT(H),Vt=new sA,se=new SA(H,ne,Xt,Vt,$t,Ot,Xe),tn=new NT(D),$e=new IT(D),U=new YM(H),Dt=new wT(H,U),E=new FT(H,U,Xe,Dt),tt=new kT(H,E,U,Xe),Et=new VT(H,$t,se),At=new LT(Vt),dt=new aA(D,tn,$e,ne,$t,Dt,At),St=new AA(D,Vt),ut=new oA,Zt=new dA(ne),Yt=new RT(D,tn,$e,Xt,tt,M,m),qt=new gA(D,tt,$t),oe=new CA(H,Xe,$t,Xt),Ct=new DT(H,ne,Xe),jt=new HT(H,ne,Xe),Xe.programs=dt.programs,D.capabilities=$t,D.extensions=ne,D.properties=Vt,D.renderLists=ut,D.shadowMap=qt,D.state=Xt,D.info=Xe}X();const Tt=new TA(D,H);this.xr=Tt,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const C=ne.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=ne.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(C){C!==void 0&&(j=C,this.setSize(O,Q,!1))},this.getSize=function(C){return C.set(O,Q)},this.setSize=function(C,q,at=!0){if(Tt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=C,Q=q,i.width=Math.floor(C*j),i.height=Math.floor(q*j),at===!0&&(i.style.width=C+"px",i.style.height=q+"px"),this.setViewport(0,0,C,q)},this.getDrawingBufferSize=function(C){return C.set(O*j,Q*j).floor()},this.setDrawingBufferSize=function(C,q,at){O=C,Q=q,j=at,i.width=Math.floor(C*at),i.height=Math.floor(q*at),this.setViewport(0,0,C,q)},this.getCurrentViewport=function(C){return C.copy(V)},this.getViewport=function(C){return C.copy(L)},this.setViewport=function(C,q,at,st){C.isVector4?L.set(C.x,C.y,C.z,C.w):L.set(C,q,at,st),Xt.viewport(V.copy(L).multiplyScalar(j).round())},this.getScissor=function(C){return C.copy(nt)},this.setScissor=function(C,q,at,st){C.isVector4?nt.set(C.x,C.y,C.z,C.w):nt.set(C,q,at,st),Xt.scissor(K.copy(nt).multiplyScalar(j).round())},this.getScissorTest=function(){return yt},this.setScissorTest=function(C){Xt.setScissorTest(yt=C)},this.setOpaqueSort=function(C){vt=C},this.setTransparentSort=function(C){Mt=C},this.getClearColor=function(C){return C.copy(Yt.getClearColor())},this.setClearColor=function(){Yt.setClearColor(...arguments)},this.getClearAlpha=function(){return Yt.getClearAlpha()},this.setClearAlpha=function(){Yt.setClearAlpha(...arguments)},this.clear=function(C=!0,q=!0,at=!0){let st=0;if(C){let Z=!1;if(W!==null){const _t=W.texture.format;Z=_t===Yd||_t===qd||_t===Wd}if(Z){const _t=W.texture.type,Ut=_t===Fi||_t===Cs||_t===Zo||_t===jo||_t===kd||_t===Xd,Ht=Yt.getClearColor(),Pt=Yt.getClearAlpha(),Kt=Ht.r,ee=Ht.g,Qt=Ht.b;Ut?(T[0]=Kt,T[1]=ee,T[2]=Qt,T[3]=Pt,H.clearBufferuiv(H.COLOR,0,T)):(A[0]=Kt,A[1]=ee,A[2]=Qt,A[3]=Pt,H.clearBufferiv(H.COLOR,0,A))}else st|=H.COLOR_BUFFER_BIT}q&&(st|=H.DEPTH_BUFFER_BIT),at&&(st|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(st)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Rt,!1),i.removeEventListener("webglcontextrestored",zt,!1),i.removeEventListener("webglcontextcreationerror",xt,!1),Yt.dispose(),ut.dispose(),Zt.dispose(),Vt.dispose(),tn.dispose(),$e.dispose(),tt.dispose(),Dt.dispose(),oe.dispose(),dt.dispose(),Tt.dispose(),Tt.removeEventListener("sessionstart",li),Tt.removeEventListener("sessionend",Gr),wi.stop()};function Rt(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),G=!0}function zt(){console.log("THREE.WebGLRenderer: Context Restored."),G=!1;const C=Xe.autoReset,q=qt.enabled,at=qt.autoUpdate,st=qt.needsUpdate,Z=qt.type;X(),Xe.autoReset=C,qt.enabled=q,qt.autoUpdate=at,qt.needsUpdate=st,qt.type=Z}function xt(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function gt(C){const q=C.target;q.removeEventListener("dispose",gt),Bt(q)}function Bt(C){ie(C),Vt.remove(C)}function ie(C){const q=Vt.get(C).programs;q!==void 0&&(q.forEach(function(at){dt.releaseProgram(at)}),C.isShaderMaterial&&dt.releaseShaderCache(C))}this.renderBufferDirect=function(C,q,at,st,Z,_t){q===null&&(q=kt);const Ut=Z.isMesh&&Z.matrixWorld.determinant()<0,Ht=pa(C,q,at,st,Z);Xt.setMaterial(st,Ut);let Pt=at.index,Kt=1;if(st.wireframe===!0){if(Pt=E.getWireframeAttribute(at),Pt===void 0)return;Kt=2}const ee=at.drawRange,Qt=at.attributes.position;let pe=ee.start*Kt,Le=(ee.start+ee.count)*Kt;_t!==null&&(pe=Math.max(pe,_t.start*Kt),Le=Math.min(Le,(_t.start+_t.count)*Kt)),Pt!==null?(pe=Math.max(pe,0),Le=Math.min(Le,Pt.count)):Qt!=null&&(pe=Math.max(pe,0),Le=Math.min(Le,Qt.count));const We=Le-pe;if(We<0||We===1/0)return;Dt.setup(Z,st,Ht,at,Pt);let Ne,me=Ct;if(Pt!==null&&(Ne=U.get(Pt),me=jt,me.setIndex(Ne)),Z.isMesh)st.wireframe===!0?(Xt.setLineWidth(st.wireframeLinewidth*ln()),me.setMode(H.LINES)):me.setMode(H.TRIANGLES);else if(Z.isLine){let Gt=st.linewidth;Gt===void 0&&(Gt=1),Xt.setLineWidth(Gt*ln()),Z.isLineSegments?me.setMode(H.LINES):Z.isLineLoop?me.setMode(H.LINE_LOOP):me.setMode(H.LINE_STRIP)}else Z.isPoints?me.setMode(H.POINTS):Z.isSprite&&me.setMode(H.TRIANGLES);if(Z.isBatchedMesh)if(Z._multiDrawInstances!==null)$o("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),me.renderMultiDrawInstances(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount,Z._multiDrawInstances);else if(ne.get("WEBGL_multi_draw"))me.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const Gt=Z._multiDrawStarts,Ye=Z._multiDrawCounts,be=Z._multiDrawCount,bn=Pt?U.get(Pt).bytesPerElement:1,Gi=Vt.get(st).currentProgram.getUniforms();for(let yn=0;yn<be;yn++)Gi.setValue(H,"_gl_DrawID",yn),me.render(Gt[yn]/bn,Ye[yn])}else if(Z.isInstancedMesh)me.renderInstances(pe,We,Z.count);else if(at.isInstancedBufferGeometry){const Gt=at._maxInstanceCount!==void 0?at._maxInstanceCount:1/0,Ye=Math.min(at.instanceCount,Gt);me.renderInstances(pe,We,Ye)}else me.render(pe,We)};function Pe(C,q,at){C.transparent===!0&&C.side===zi&&C.forceSinglePass===!1?(C.side=jn,C.needsUpdate=!0,Kn(C,q,at),C.side=Za,C.needsUpdate=!0,Kn(C,q,at),C.side=zi):Kn(C,q,at)}this.compile=function(C,q,at=null){at===null&&(at=C),g=Zt.get(at),g.init(q),N.push(g),at.traverseVisible(function(Z){Z.isLight&&Z.layers.test(q.layers)&&(g.pushLight(Z),Z.castShadow&&g.pushShadow(Z))}),C!==at&&C.traverseVisible(function(Z){Z.isLight&&Z.layers.test(q.layers)&&(g.pushLight(Z),Z.castShadow&&g.pushShadow(Z))}),g.setupLights();const st=new Set;return C.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;const _t=Z.material;if(_t)if(Array.isArray(_t))for(let Ut=0;Ut<_t.length;Ut++){const Ht=_t[Ut];Pe(Ht,at,Z),st.add(Ht)}else Pe(_t,at,Z),st.add(_t)}),g=N.pop(),st},this.compileAsync=function(C,q,at=null){const st=this.compile(C,q,at);return new Promise(Z=>{function _t(){if(st.forEach(function(Ut){Vt.get(Ut).currentProgram.isReady()&&st.delete(Ut)}),st.size===0){Z(C);return}setTimeout(_t,10)}ne.get("KHR_parallel_shader_compile")!==null?_t():setTimeout(_t,10)})};let Te=null;function Pn(C){Te&&Te(C)}function li(){wi.stop()}function Gr(){wi.start()}const wi=new Uv;wi.setAnimationLoop(Pn),typeof self<"u"&&wi.setContext(self),this.setAnimationLoop=function(C){Te=C,Tt.setAnimationLoop(C),C===null?wi.stop():wi.start()},Tt.addEventListener("sessionstart",li),Tt.addEventListener("sessionend",Gr),this.render=function(C,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(G===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),Tt.enabled===!0&&Tt.isPresenting===!0&&(Tt.cameraAutoUpdate===!0&&Tt.updateCamera(q),q=Tt.getCamera()),C.isScene===!0&&C.onBeforeRender(D,C,q,W),g=Zt.get(C,N.length),g.init(q),N.push(g),ct.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),bt.setFromProjectionMatrix(ct,Bi,q.reversedDepth),it=this.localClippingEnabled,Nt=At.init(this.clippingPlanes,it),x=ut.get(C,P.length),x.init(),P.push(x),Tt.enabled===!0&&Tt.isPresenting===!0){const _t=D.xr.getDepthSensingMesh();_t!==null&&Ds(_t,q,-1/0,D.sortObjects)}Ds(C,q,0,D.sortObjects),x.finish(),D.sortObjects===!0&&x.sort(vt,Mt),de=Tt.enabled===!1||Tt.isPresenting===!1||Tt.hasDepthSensing()===!1,de&&Yt.addToRenderList(x,C),this.info.render.frame++,Nt===!0&&At.beginShadows();const at=g.state.shadowsArray;qt.render(at,C,q),Nt===!0&&At.endShadows(),this.info.autoReset===!0&&this.info.reset();const st=x.opaque,Z=x.transmissive;if(g.setupLights(),q.isArrayCamera){const _t=q.cameras;if(Z.length>0)for(let Ut=0,Ht=_t.length;Ut<Ht;Ut++){const Pt=_t[Ut];Ls(st,Z,C,Pt)}de&&Yt.render(C);for(let Ut=0,Ht=_t.length;Ut<Ht;Ut++){const Pt=_t[Ut];Us(x,C,Pt,Pt.viewport)}}else Z.length>0&&Ls(st,Z,C,q),de&&Yt.render(C),Us(x,C,q);W!==null&&z===0&&(se.updateMultisampleRenderTarget(W),se.updateRenderTargetMipmap(W)),C.isScene===!0&&C.onAfterRender(D,C,q),Dt.resetDefaultState(),w=-1,R=null,N.pop(),N.length>0?(g=N[N.length-1],Nt===!0&&At.setGlobalState(D.clippingPlanes,g.state.camera)):g=null,P.pop(),P.length>0?x=P[P.length-1]:x=null};function Ds(C,q,at,st){if(C.visible===!1)return;if(C.layers.test(q.layers)){if(C.isGroup)at=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(q);else if(C.isLight)g.pushLight(C),C.castShadow&&g.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||bt.intersectsSprite(C)){st&&It.setFromMatrixPosition(C.matrixWorld).applyMatrix4(ct);const Ut=tt.update(C),Ht=C.material;Ht.visible&&x.push(C,Ut,Ht,at,It.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||bt.intersectsObject(C))){const Ut=tt.update(C),Ht=C.material;if(st&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),It.copy(C.boundingSphere.center)):(Ut.boundingSphere===null&&Ut.computeBoundingSphere(),It.copy(Ut.boundingSphere.center)),It.applyMatrix4(C.matrixWorld).applyMatrix4(ct)),Array.isArray(Ht)){const Pt=Ut.groups;for(let Kt=0,ee=Pt.length;Kt<ee;Kt++){const Qt=Pt[Kt],pe=Ht[Qt.materialIndex];pe&&pe.visible&&x.push(C,Ut,pe,at,It.z,Qt)}}else Ht.visible&&x.push(C,Ut,Ht,at,It.z,null)}}const _t=C.children;for(let Ut=0,Ht=_t.length;Ut<Ht;Ut++)Ds(_t[Ut],q,at,st)}function Us(C,q,at,st){const Z=C.opaque,_t=C.transmissive,Ut=C.transparent;g.setupLightsView(at),Nt===!0&&At.setGlobalState(D.clippingPlanes,at),st&&Xt.viewport(V.copy(st)),Z.length>0&&Ka(Z,q,at),_t.length>0&&Ka(_t,q,at),Ut.length>0&&Ka(Ut,q,at),Xt.buffers.depth.setTest(!0),Xt.buffers.depth.setMask(!0),Xt.buffers.color.setMask(!0),Xt.setPolygonOffset(!1)}function Ls(C,q,at,st){if((at.isScene===!0?at.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[st.id]===void 0&&(g.state.transmissionRenderTarget[st.id]=new Rs(1,1,{generateMipmaps:!0,type:ne.has("EXT_color_buffer_half_float")||ne.has("EXT_color_buffer_float")?tl:Fi,minFilter:As,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:we.workingColorSpace}));const _t=g.state.transmissionRenderTarget[st.id],Ut=st.viewport||V;_t.setSize(Ut.z*D.transmissionResolutionScale,Ut.w*D.transmissionResolutionScale);const Ht=D.getRenderTarget(),Pt=D.getActiveCubeFace(),Kt=D.getActiveMipmapLevel();D.setRenderTarget(_t),D.getClearColor(ht),lt=D.getClearAlpha(),lt<1&&D.setClearColor(16777215,.5),D.clear(),de&&Yt.render(at);const ee=D.toneMapping;D.toneMapping=qa;const Qt=st.viewport;if(st.viewport!==void 0&&(st.viewport=void 0),g.setupLightsView(st),Nt===!0&&At.setGlobalState(D.clippingPlanes,st),Ka(C,at,st),se.updateMultisampleRenderTarget(_t),se.updateRenderTargetMipmap(_t),ne.has("WEBGL_multisampled_render_to_texture")===!1){let pe=!1;for(let Le=0,We=q.length;Le<We;Le++){const Ne=q[Le],me=Ne.object,Gt=Ne.geometry,Ye=Ne.material,be=Ne.group;if(Ye.side===zi&&me.layers.test(st.layers)){const bn=Ye.side;Ye.side=jn,Ye.needsUpdate=!0,Vr(me,at,st,Gt,Ye,be),Ye.side=bn,Ye.needsUpdate=!0,pe=!0}}pe===!0&&(se.updateMultisampleRenderTarget(_t),se.updateRenderTargetMipmap(_t))}D.setRenderTarget(Ht,Pt,Kt),D.setClearColor(ht,lt),Qt!==void 0&&(st.viewport=Qt),D.toneMapping=ee}function Ka(C,q,at){const st=q.isScene===!0?q.overrideMaterial:null;for(let Z=0,_t=C.length;Z<_t;Z++){const Ut=C[Z],Ht=Ut.object,Pt=Ut.geometry,Kt=Ut.group;let ee=Ut.material;ee.allowOverride===!0&&st!==null&&(ee=st),Ht.layers.test(at.layers)&&Vr(Ht,q,at,Pt,ee,Kt)}}function Vr(C,q,at,st,Z,_t){C.onBeforeRender(D,q,at,st,Z,_t),C.modelViewMatrix.multiplyMatrices(at.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),Z.onBeforeRender(D,q,at,st,C,_t),Z.transparent===!0&&Z.side===zi&&Z.forceSinglePass===!1?(Z.side=jn,Z.needsUpdate=!0,D.renderBufferDirect(at,q,st,Z,C,_t),Z.side=Za,Z.needsUpdate=!0,D.renderBufferDirect(at,q,st,Z,C,_t),Z.side=zi):D.renderBufferDirect(at,q,st,Z,C,_t),C.onAfterRender(D,q,at,st,Z,_t)}function Kn(C,q,at){q.isScene!==!0&&(q=kt);const st=Vt.get(C),Z=g.state.lights,_t=g.state.shadowsArray,Ut=Z.state.version,Ht=dt.getParameters(C,Z.state,_t,q,at),Pt=dt.getProgramCacheKey(Ht);let Kt=st.programs;st.environment=C.isMeshStandardMaterial?q.environment:null,st.fog=q.fog,st.envMap=(C.isMeshStandardMaterial?$e:tn).get(C.envMap||st.environment),st.envMapRotation=st.environment!==null&&C.envMap===null?q.environmentRotation:C.envMapRotation,Kt===void 0&&(C.addEventListener("dispose",gt),Kt=new Map,st.programs=Kt);let ee=Kt.get(Pt);if(ee!==void 0){if(st.currentProgram===ee&&st.lightsStateVersion===Ut)return Tn(C,Ht),ee}else Ht.uniforms=dt.getUniforms(C),C.onBeforeCompile(Ht,D),ee=dt.acquireProgram(Ht,Pt),Kt.set(Pt,ee),st.uniforms=Ht.uniforms;const Qt=st.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Qt.clippingPlanes=At.uniform),Tn(C,Ht),st.needsLights=nu(C),st.lightsStateVersion=Ut,st.needsLights&&(Qt.ambientLightColor.value=Z.state.ambient,Qt.lightProbe.value=Z.state.probe,Qt.directionalLights.value=Z.state.directional,Qt.directionalLightShadows.value=Z.state.directionalShadow,Qt.spotLights.value=Z.state.spot,Qt.spotLightShadows.value=Z.state.spotShadow,Qt.rectAreaLights.value=Z.state.rectArea,Qt.ltc_1.value=Z.state.rectAreaLTC1,Qt.ltc_2.value=Z.state.rectAreaLTC2,Qt.pointLights.value=Z.state.point,Qt.pointLightShadows.value=Z.state.pointShadow,Qt.hemisphereLights.value=Z.state.hemi,Qt.directionalShadowMap.value=Z.state.directionalShadowMap,Qt.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Qt.spotShadowMap.value=Z.state.spotShadowMap,Qt.spotLightMatrix.value=Z.state.spotLightMatrix,Qt.spotLightMap.value=Z.state.spotLightMap,Qt.pointShadowMap.value=Z.state.pointShadowMap,Qt.pointShadowMatrix.value=Z.state.pointShadowMatrix),st.currentProgram=ee,st.uniformsList=null,ee}function cn(C){if(C.uniformsList===null){const q=C.currentProgram.getUniforms();C.uniformsList=Xc.seqWithValue(q.seq,C.uniforms)}return C.uniformsList}function Tn(C,q){const at=Vt.get(C);at.outputColorSpace=q.outputColorSpace,at.batching=q.batching,at.batchingColor=q.batchingColor,at.instancing=q.instancing,at.instancingColor=q.instancingColor,at.instancingMorph=q.instancingMorph,at.skinning=q.skinning,at.morphTargets=q.morphTargets,at.morphNormals=q.morphNormals,at.morphColors=q.morphColors,at.morphTargetsCount=q.morphTargetsCount,at.numClippingPlanes=q.numClippingPlanes,at.numIntersection=q.numClipIntersection,at.vertexAlphas=q.vertexAlphas,at.vertexTangents=q.vertexTangents,at.toneMapping=q.toneMapping}function pa(C,q,at,st,Z){q.isScene!==!0&&(q=kt),se.resetTextureUnits();const _t=q.fog,Ut=st.isMeshStandardMaterial?q.environment:null,Ht=W===null?D.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:zr,Pt=(st.isMeshStandardMaterial?$e:tn).get(st.envMap||Ut),Kt=st.vertexColors===!0&&!!at.attributes.color&&at.attributes.color.itemSize===4,ee=!!at.attributes.tangent&&(!!st.normalMap||st.anisotropy>0),Qt=!!at.morphAttributes.position,pe=!!at.morphAttributes.normal,Le=!!at.morphAttributes.color;let We=qa;st.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(We=D.toneMapping);const Ne=at.morphAttributes.position||at.morphAttributes.normal||at.morphAttributes.color,me=Ne!==void 0?Ne.length:0,Gt=Vt.get(st),Ye=g.state.lights;if(Nt===!0&&(it===!0||C!==R)){const mn=C===R&&st.id===w;At.setState(st,C,mn)}let be=!1;st.version===Gt.__version?(Gt.needsLights&&Gt.lightsStateVersion!==Ye.state.version||Gt.outputColorSpace!==Ht||Z.isBatchedMesh&&Gt.batching===!1||!Z.isBatchedMesh&&Gt.batching===!0||Z.isBatchedMesh&&Gt.batchingColor===!0&&Z.colorTexture===null||Z.isBatchedMesh&&Gt.batchingColor===!1&&Z.colorTexture!==null||Z.isInstancedMesh&&Gt.instancing===!1||!Z.isInstancedMesh&&Gt.instancing===!0||Z.isSkinnedMesh&&Gt.skinning===!1||!Z.isSkinnedMesh&&Gt.skinning===!0||Z.isInstancedMesh&&Gt.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&Gt.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&Gt.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&Gt.instancingMorph===!1&&Z.morphTexture!==null||Gt.envMap!==Pt||st.fog===!0&&Gt.fog!==_t||Gt.numClippingPlanes!==void 0&&(Gt.numClippingPlanes!==At.numPlanes||Gt.numIntersection!==At.numIntersection)||Gt.vertexAlphas!==Kt||Gt.vertexTangents!==ee||Gt.morphTargets!==Qt||Gt.morphNormals!==pe||Gt.morphColors!==Le||Gt.toneMapping!==We||Gt.morphTargetsCount!==me)&&(be=!0):(be=!0,Gt.__version=st.version);let bn=Gt.currentProgram;be===!0&&(bn=Kn(st,q,Z));let Gi=!1,yn=!1,Ja=!1;const Se=bn.getUniforms(),Dn=Gt.uniforms;if(Xt.useProgram(bn.program)&&(Gi=!0,yn=!0,Ja=!0),st.id!==w&&(w=st.id,yn=!0),Gi||R!==C){Xt.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),Se.setValue(H,"projectionMatrix",C.projectionMatrix),Se.setValue(H,"viewMatrix",C.matrixWorldInverse);const sn=Se.map.cameraPosition;sn!==void 0&&sn.setValue(H,wt.setFromMatrixPosition(C.matrixWorld)),$t.logarithmicDepthBuffer&&Se.setValue(H,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(st.isMeshPhongMaterial||st.isMeshToonMaterial||st.isMeshLambertMaterial||st.isMeshBasicMaterial||st.isMeshStandardMaterial||st.isShaderMaterial)&&Se.setValue(H,"isOrthographic",C.isOrthographicCamera===!0),R!==C&&(R=C,yn=!0,Ja=!0)}if(Z.isSkinnedMesh){Se.setOptional(H,Z,"bindMatrix"),Se.setOptional(H,Z,"bindMatrixInverse");const mn=Z.skeleton;mn&&(mn.boneTexture===null&&mn.computeBoneTexture(),Se.setValue(H,"boneTexture",mn.boneTexture,se))}Z.isBatchedMesh&&(Se.setOptional(H,Z,"batchingTexture"),Se.setValue(H,"batchingTexture",Z._matricesTexture,se),Se.setOptional(H,Z,"batchingIdTexture"),Se.setValue(H,"batchingIdTexture",Z._indirectTexture,se),Se.setOptional(H,Z,"batchingColorTexture"),Z._colorsTexture!==null&&Se.setValue(H,"batchingColorTexture",Z._colorsTexture,se));const On=at.morphAttributes;if((On.position!==void 0||On.normal!==void 0||On.color!==void 0)&&Et.update(Z,at,bn),(yn||Gt.receiveShadow!==Z.receiveShadow)&&(Gt.receiveShadow=Z.receiveShadow,Se.setValue(H,"receiveShadow",Z.receiveShadow)),st.isMeshGouraudMaterial&&st.envMap!==null&&(Dn.envMap.value=Pt,Dn.flipEnvMap.value=Pt.isCubeTexture&&Pt.isRenderTargetTexture===!1?-1:1),st.isMeshStandardMaterial&&st.envMap===null&&q.environment!==null&&(Dn.envMapIntensity.value=q.environmentIntensity),yn&&(Se.setValue(H,"toneMappingExposure",D.toneMappingExposure),Gt.needsLights&&kr(Dn,Ja),_t&&st.fog===!0&&St.refreshFogUniforms(Dn,_t),St.refreshMaterialUniforms(Dn,st,j,Q,g.state.transmissionRenderTarget[C.id]),Xc.upload(H,cn(Gt),Dn,se)),st.isShaderMaterial&&st.uniformsNeedUpdate===!0&&(Xc.upload(H,cn(Gt),Dn,se),st.uniformsNeedUpdate=!1),st.isSpriteMaterial&&Se.setValue(H,"center",Z.center),Se.setValue(H,"modelViewMatrix",Z.modelViewMatrix),Se.setValue(H,"normalMatrix",Z.normalMatrix),Se.setValue(H,"modelMatrix",Z.matrixWorld),st.isShaderMaterial||st.isRawShaderMaterial){const mn=st.uniformsGroups;for(let sn=0,Ns=mn.length;sn<Ns;sn++){const Di=mn[sn];oe.update(Di,bn),oe.bind(Di,bn)}}return bn}function kr(C,q){C.ambientLightColor.needsUpdate=q,C.lightProbe.needsUpdate=q,C.directionalLights.needsUpdate=q,C.directionalLightShadows.needsUpdate=q,C.pointLights.needsUpdate=q,C.pointLightShadows.needsUpdate=q,C.spotLights.needsUpdate=q,C.spotLightShadows.needsUpdate=q,C.rectAreaLights.needsUpdate=q,C.hemisphereLights.needsUpdate=q}function nu(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return W},this.setRenderTargetTextures=function(C,q,at){const st=Vt.get(C);st.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,st.__autoAllocateDepthBuffer===!1&&(st.__useRenderToTexture=!1),Vt.get(C.texture).__webglTexture=q,Vt.get(C.depthTexture).__webglTexture=st.__autoAllocateDepthBuffer?void 0:at,st.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,q){const at=Vt.get(C);at.__webglFramebuffer=q,at.__useDefaultFramebuffer=q===void 0};const iu=H.createFramebuffer();this.setRenderTarget=function(C,q=0,at=0){W=C,F=q,z=at;let st=!0,Z=null,_t=!1,Ut=!1;if(C){const Pt=Vt.get(C);if(Pt.__useDefaultFramebuffer!==void 0)Xt.bindFramebuffer(H.FRAMEBUFFER,null),st=!1;else if(Pt.__webglFramebuffer===void 0)se.setupRenderTarget(C);else if(Pt.__hasExternalTextures)se.rebindTextures(C,Vt.get(C.texture).__webglTexture,Vt.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const Qt=C.depthTexture;if(Pt.__boundDepthTexture!==Qt){if(Qt!==null&&Vt.has(Qt)&&(C.width!==Qt.image.width||C.height!==Qt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");se.setupDepthRenderbuffer(C)}}const Kt=C.texture;(Kt.isData3DTexture||Kt.isDataArrayTexture||Kt.isCompressedArrayTexture)&&(Ut=!0);const ee=Vt.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(ee[q])?Z=ee[q][at]:Z=ee[q],_t=!0):C.samples>0&&se.useMultisampledRTT(C)===!1?Z=Vt.get(C).__webglMultisampledFramebuffer:Array.isArray(ee)?Z=ee[at]:Z=ee,V.copy(C.viewport),K.copy(C.scissor),rt=C.scissorTest}else V.copy(L).multiplyScalar(j).floor(),K.copy(nt).multiplyScalar(j).floor(),rt=yt;if(at!==0&&(Z=iu),Xt.bindFramebuffer(H.FRAMEBUFFER,Z)&&st&&Xt.drawBuffers(C,Z),Xt.viewport(V),Xt.scissor(K),Xt.setScissorTest(rt),_t){const Pt=Vt.get(C.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+q,Pt.__webglTexture,at)}else if(Ut){const Pt=q;for(let Kt=0;Kt<C.textures.length;Kt++){const ee=Vt.get(C.textures[Kt]);H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0+Kt,ee.__webglTexture,at,Pt)}}else if(C!==null&&at!==0){const Pt=Vt.get(C.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Pt.__webglTexture,at)}w=-1},this.readRenderTargetPixels=function(C,q,at,st,Z,_t,Ut,Ht=0){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pt=Vt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ut!==void 0&&(Pt=Pt[Ut]),Pt){Xt.bindFramebuffer(H.FRAMEBUFFER,Pt);try{const Kt=C.textures[Ht],ee=Kt.format,Qt=Kt.type;if(!$t.textureFormatReadable(ee)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!$t.textureTypeReadable(Qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=C.width-st&&at>=0&&at<=C.height-Z&&(C.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Ht),H.readPixels(q,at,st,Z,Ot.convert(ee),Ot.convert(Qt),_t))}finally{const Kt=W!==null?Vt.get(W).__webglFramebuffer:null;Xt.bindFramebuffer(H.FRAMEBUFFER,Kt)}}},this.readRenderTargetPixelsAsync=async function(C,q,at,st,Z,_t,Ut,Ht=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pt=Vt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ut!==void 0&&(Pt=Pt[Ut]),Pt)if(q>=0&&q<=C.width-st&&at>=0&&at<=C.height-Z){Xt.bindFramebuffer(H.FRAMEBUFFER,Pt);const Kt=C.textures[Ht],ee=Kt.format,Qt=Kt.type;if(!$t.textureFormatReadable(ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!$t.textureTypeReadable(Qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const pe=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,pe),H.bufferData(H.PIXEL_PACK_BUFFER,_t.byteLength,H.STREAM_READ),C.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Ht),H.readPixels(q,at,st,Z,Ot.convert(ee),Ot.convert(Qt),0);const Le=W!==null?Vt.get(W).__webglFramebuffer:null;Xt.bindFramebuffer(H.FRAMEBUFFER,Le);const We=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await nM(H,We,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,pe),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,_t),H.deleteBuffer(pe),H.deleteSync(We),_t}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,q=null,at=0){const st=Math.pow(2,-at),Z=Math.floor(C.image.width*st),_t=Math.floor(C.image.height*st),Ut=q!==null?q.x:0,Ht=q!==null?q.y:0;se.setTexture2D(C,0),H.copyTexSubImage2D(H.TEXTURE_2D,at,0,0,Ut,Ht,Z,_t),Xt.unbindTexture()};const il=H.createFramebuffer(),Qa=H.createFramebuffer();this.copyTextureToTexture=function(C,q,at=null,st=null,Z=0,_t=null){_t===null&&(Z!==0?($o("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),_t=Z,Z=0):_t=0);let Ut,Ht,Pt,Kt,ee,Qt,pe,Le,We;const Ne=C.isCompressedTexture?C.mipmaps[_t]:C.image;if(at!==null)Ut=at.max.x-at.min.x,Ht=at.max.y-at.min.y,Pt=at.isBox3?at.max.z-at.min.z:1,Kt=at.min.x,ee=at.min.y,Qt=at.isBox3?at.min.z:0;else{const On=Math.pow(2,-Z);Ut=Math.floor(Ne.width*On),Ht=Math.floor(Ne.height*On),C.isDataArrayTexture?Pt=Ne.depth:C.isData3DTexture?Pt=Math.floor(Ne.depth*On):Pt=1,Kt=0,ee=0,Qt=0}st!==null?(pe=st.x,Le=st.y,We=st.z):(pe=0,Le=0,We=0);const me=Ot.convert(q.format),Gt=Ot.convert(q.type);let Ye;q.isData3DTexture?(se.setTexture3D(q,0),Ye=H.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(se.setTexture2DArray(q,0),Ye=H.TEXTURE_2D_ARRAY):(se.setTexture2D(q,0),Ye=H.TEXTURE_2D),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,q.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,q.unpackAlignment);const be=H.getParameter(H.UNPACK_ROW_LENGTH),bn=H.getParameter(H.UNPACK_IMAGE_HEIGHT),Gi=H.getParameter(H.UNPACK_SKIP_PIXELS),yn=H.getParameter(H.UNPACK_SKIP_ROWS),Ja=H.getParameter(H.UNPACK_SKIP_IMAGES);H.pixelStorei(H.UNPACK_ROW_LENGTH,Ne.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Ne.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,Kt),H.pixelStorei(H.UNPACK_SKIP_ROWS,ee),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Qt);const Se=C.isDataArrayTexture||C.isData3DTexture,Dn=q.isDataArrayTexture||q.isData3DTexture;if(C.isDepthTexture){const On=Vt.get(C),mn=Vt.get(q),sn=Vt.get(On.__renderTarget),Ns=Vt.get(mn.__renderTarget);Xt.bindFramebuffer(H.READ_FRAMEBUFFER,sn.__webglFramebuffer),Xt.bindFramebuffer(H.DRAW_FRAMEBUFFER,Ns.__webglFramebuffer);for(let Di=0;Di<Pt;Di++)Se&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Vt.get(C).__webglTexture,Z,Qt+Di),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Vt.get(q).__webglTexture,_t,We+Di)),H.blitFramebuffer(Kt,ee,Ut,Ht,pe,Le,Ut,Ht,H.DEPTH_BUFFER_BIT,H.NEAREST);Xt.bindFramebuffer(H.READ_FRAMEBUFFER,null),Xt.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(Z!==0||C.isRenderTargetTexture||Vt.has(C)){const On=Vt.get(C),mn=Vt.get(q);Xt.bindFramebuffer(H.READ_FRAMEBUFFER,il),Xt.bindFramebuffer(H.DRAW_FRAMEBUFFER,Qa);for(let sn=0;sn<Pt;sn++)Se?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,On.__webglTexture,Z,Qt+sn):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,On.__webglTexture,Z),Dn?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,mn.__webglTexture,_t,We+sn):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,mn.__webglTexture,_t),Z!==0?H.blitFramebuffer(Kt,ee,Ut,Ht,pe,Le,Ut,Ht,H.COLOR_BUFFER_BIT,H.NEAREST):Dn?H.copyTexSubImage3D(Ye,_t,pe,Le,We+sn,Kt,ee,Ut,Ht):H.copyTexSubImage2D(Ye,_t,pe,Le,Kt,ee,Ut,Ht);Xt.bindFramebuffer(H.READ_FRAMEBUFFER,null),Xt.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else Dn?C.isDataTexture||C.isData3DTexture?H.texSubImage3D(Ye,_t,pe,Le,We,Ut,Ht,Pt,me,Gt,Ne.data):q.isCompressedArrayTexture?H.compressedTexSubImage3D(Ye,_t,pe,Le,We,Ut,Ht,Pt,me,Ne.data):H.texSubImage3D(Ye,_t,pe,Le,We,Ut,Ht,Pt,me,Gt,Ne):C.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,_t,pe,Le,Ut,Ht,me,Gt,Ne.data):C.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,_t,pe,Le,Ne.width,Ne.height,me,Ne.data):H.texSubImage2D(H.TEXTURE_2D,_t,pe,Le,Ut,Ht,me,Gt,Ne);H.pixelStorei(H.UNPACK_ROW_LENGTH,be),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,bn),H.pixelStorei(H.UNPACK_SKIP_PIXELS,Gi),H.pixelStorei(H.UNPACK_SKIP_ROWS,yn),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Ja),_t===0&&q.generateMipmaps&&H.generateMipmap(Ye),Xt.unbindTexture()},this.initRenderTarget=function(C){Vt.get(C).__webglFramebuffer===void 0&&se.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?se.setTextureCube(C,0):C.isData3DTexture?se.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?se.setTexture2DArray(C,0):se.setTexture2D(C,0),Xt.unbindTexture()},this.resetState=function(){F=0,z=0,W=null,Xt.reset(),Dt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Bi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=we._getDrawingBufferColorSpace(t),i.unpackColorSpace=we._getUnpackColorSpace()}}const Fc=7.2,K_=-4.8,Q_=4.7,wA=4,DA=new I(5.45,0,6.05),Zh=[new I(5.45,0,4.42),new I(4.35,0,2.65),new I(4.18,0,.62)],jh=[new I(1.95,0,-1.32),new I(2.55,0,-.82),new I(3.15,0,-.32),new I(3.75,0,.18),new I(4.35,0,.68),new I(4.95,0,1.18),new I(5.55,0,1.68),new I(6.15,0,2.18)],J_=[[new I(5.45,0,6.05),new I(5.45,0,4.38),new I(4.45,0,3.35),new I(4.45,0,1.3),new I(6.85,0,.2),new I(7.65,0,.2)],[new I(5.45,0,6.05),new I(5.45,0,4.4),new I(6.25,0,3.55),new I(6.35,0,-.75),new I(4.65,0,-1.2),new I(4.2,0,-4.95)]],Ge=[{id:"machine",label:"COFFEE MACHINE",hint:"Pick up fresh coffee",position:new I(-5.15,0,-2.55),radius:1.25,color:3113197},{id:"packing",label:"PACK",hint:"Stand here to package courier orders",position:new I(-2.15,0,-2.15),radius:1.1,color:47252},{id:"sales",label:"SALES",hint:"Sell unpacked coffee to walk-in customers",position:new I(1.3,0,-2.45),radius:1.15,color:15911244},{id:"pickup",label:"PICKUP",hint:"Deliver packed coffee to courier cars",position:new I(5.75,0,.65),radius:1.2,color:15423319},{id:"hr",label:"HR",hint:"Hire employees with H",position:new I(-5.05,0,3.25),radius:1.1,color:2600544},{id:"upgrade",label:"UPGRADE",hint:"Upgrade business systems with 1, 2, 3",position:new I(1.95,0,3.25),radius:1.25,color:10179040},{id:"pizza",label:"PIZZA $1000",hint:"Unlock the pizza machine with P",position:new I(4.85,0,-3.65),radius:1.2,color:16744209}];class UA{container;onUiChange;scene=new CM;camera=new oi(38,1,.1,120);renderer=new RA({antialias:!0});clock=new XM;keys=new Set;cameraFocus=new I(0,0,-.2);baseCameraOffset=new I(9.8,12.2,11.6);animationId=0;emitTimer=0;lastCashPileCount=-1;cameraYaw=0;targetCameraYaw=0;cameraTilt=0;targetCameraTilt=0;isCameraDragging=!1;cameraPointerId=-1;lastCameraPointerX=0;lastCameraPointerY=0;player=new an;playerVelocity=new I;playerRadius=.42;carryStackGroup=new an;machineStockGroup=new an;cashPileGroup=new an;pickupShelfPackageGroup=new an;courierVan=new an;pizzaStationGroup=new an;zoneRings=new Map;staticColliders=[];status="active";carriedCoffees=0;carriedPackages=0;cash=120;sales=0;reputation=5;machineLevel=1;packingLevel=1;staffLevel=1;machineTimer=0;machineStock=0;pickupShelfPackages=0;packingProgress=0;walkInTimer=2;courierState="away";courierTimer=8;courierPatience=0;rushTimer=4;alert="Start with the coffee machine. Fresh coffee appears on the tray.";alertTimer=0;previousAlert="";salesCooldown=0;pickupCooldown=0;pizzaUnlocked=!1;pizzaRevenueTimer=0;pizzaUnlockCost=1e3;walkIns=[];rushCustomers=[];employees=[];constructor(t,i){this.container=t,this.onUiChange=i}start(){this.setupRenderer(),this.createScene(),this.restart(),window.addEventListener("resize",this.handleResize),window.addEventListener("keydown",this.handleKeyDown),window.addEventListener("keyup",this.handleKeyUp),window.addEventListener("pointermove",this.handlePointerMove),window.addEventListener("pointerup",this.handlePointerUp),window.addEventListener("pointercancel",this.handlePointerUp),this.renderer.domElement.addEventListener("pointerdown",this.handlePointerDown),this.renderer.domElement.addEventListener("contextmenu",this.handleContextMenu),this.handleResize(),this.loop()}dispose(){cancelAnimationFrame(this.animationId),window.removeEventListener("resize",this.handleResize),window.removeEventListener("keydown",this.handleKeyDown),window.removeEventListener("keyup",this.handleKeyUp),window.removeEventListener("pointermove",this.handlePointerMove),window.removeEventListener("pointerup",this.handlePointerUp),window.removeEventListener("pointercancel",this.handlePointerUp),this.renderer.domElement.removeEventListener("pointerdown",this.handlePointerDown),this.renderer.domElement.removeEventListener("contextmenu",this.handleContextMenu),this.renderer.dispose(),this.container.replaceChildren()}restart(){this.status="active",this.carriedCoffees=0,this.carriedPackages=0,this.cash=120,this.sales=0,this.reputation=5,this.machineLevel=1,this.packingLevel=1,this.staffLevel=1,this.machineTimer=1.6,this.machineStock=0,this.pickupShelfPackages=0,this.packingProgress=0,this.walkInTimer=1.2,this.courierState="away",this.courierTimer=7,this.courierPatience=0,this.rushTimer=4.2,this.alert="New shift started. Follow the floor labels: MACHINE, SALES, PACK, PICKUP.",this.alertTimer=0,this.previousAlert="",this.salesCooldown=0,this.pickupCooldown=0,this.pizzaUnlocked=!1,this.pizzaRevenueTimer=0,this.player.position.set(-.4,0,.85),this.playerVelocity.set(0,0,0),this.clearDynamicObjects(),this.updateCarryVisuals(),this.updateMachineStockVisuals(),this.updatePickupShelfVisuals(),this.updateCashPiles(!0),this.courierVan.visible=!1,this.courierVan.position.set(11.2,0,.85),this.updatePizzaStationVisuals(),this.emitUi(!0)}upgradeMachineAction(){this.status==="active"&&(this.buyMachineUpgrade(),this.emitUi(!0))}upgradePackingAction(){this.status==="active"&&(this.buyPackingUpgrade(),this.emitUi(!0))}upgradeStaffAction(){this.status==="active"&&(this.buyStaffUpgrade(),this.emitUi(!0))}hireEmployeeAction(){this.status==="active"&&(this.hireEmployee(),this.emitUi(!0))}unlockPizzaMachineAction(){this.status==="active"&&(this.unlockPizzaMachine(),this.emitUi(!0))}setupRenderer(){this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=ev,this.renderer.outputColorSpace=Zn,this.container.appendChild(this.renderer.domElement)}createScene(){this.scene.background=new ve(11130359),this.scene.fog=new Kd(11130359,28,58),this.updateCameraControls(1);const t=new VM(16777215,.74);this.scene.add(t);const i=new GM(16777215,1.72);i.position.set(8,14,7),i.castShadow=!0,i.shadow.mapSize.set(2048,2048),i.shadow.camera.left=-15,i.shadow.camera.right=15,i.shadow.camera.top=15,i.shadow.camera.bottom=-15,this.scene.add(i);const s=new FM(7065599,.85,13);s.position.set(-4.5,3.4,-1.2),this.scene.add(s),this.createEnvironment(),this.createShopLayout(),this.createStations(),this.createZones(),this.createPlayer(),this.createCourierVan(),this.createPizzaExpansion(),this.scene.add(this.machineStockGroup,this.cashPileGroup,this.pickupShelfPackageGroup)}createEnvironment(){const t=this.plane([30,22],[0,-.035,0],8242269);this.scene.add(t);const i=this.plane([3.2,17],[-9,-.02,0],2303790),s=this.plane([2.4,10.5],[-7.15,-.015,-.7],3949903),l=this.plane([1,17],[-6.95,-.012,0],14211288);this.scene.add(i,s,l);for(let p=-6.5;p<7;p+=1.6){const S=this.box("road stripe",[.12,.02,.78],[-9,.015,p],16777215,!1,1,!1);this.scene.add(S)}const c=this.createFloorSign("DRIVE THRU",3113197,16777215,2.35,.78);c.position.set(-7.15,.035,-4.5),c.rotation.z=Math.PI/2,this.scene.add(c);const h=this.box("drive thru awning",[1.45,.16,2.25],[-7.03,1.6,1.8],3113197),d=this.box("awning pole",[.12,1.55,.12],[-7.62,.75,1],2056111),m=this.box("awning pole",[.12,1.55,.12],[-7.62,.75,2.6],2056111);this.scene.add(h,d,m)}createShopLayout(){const t=this.plane([15.8,11],[0,0,0],15857647),i=this.plane([8.3,6.1],[-3.75,.012,-2],15330801),s=this.plane([7.5,8],[3.75,.016,.3],16046264),l=this.plane([7.7,2.75],[-1.9,.018,3.55],15200484);this.scene.add(t,i,s,l);const c=new WM(8.2,10,14015456,14015456);c.position.set(-3.75,.035,-2),c.scale.z=.75,this.scene.add(c);const h=[this.box("back wall",[15.9,1.35,.22],[0,.68,-5.42],15267299),this.box("left wall",[.22,1.35,10.95],[-7.9,.68,0],15267299),this.box("right wall",[.22,1.35,7],[7.9,.68,1.35],15267299),this.box("front low wall left",[4.5,.8,.2],[2.55,.4,5.48],15267299),this.box("front low wall right",[1.05,.8,.2],[6.92,.4,5.48],15267299),this.box("office partition",[3.8,1.2,.2],[-2.05,.62,2.15],15267299),this.box("office divider",[.2,1.2,2.72],[-1.8,.62,3.55],15267299)];this.scene.add(...h),this.addStaticCollider(0,-5.42,8,.18),this.addStaticCollider(-7.9,0,.18,5.55),this.addStaticCollider(7.9,1.35,.18,3.55),this.addStaticCollider(2.55,5.48,2.3,.18),this.addStaticCollider(6.92,5.48,.58,.18),this.addStaticCollider(-2.05,2.15,1.9,.16),this.addStaticCollider(-1.8,3.55,.16,1.42);const d=this.createFloorSign("ENTRY",2600544,16777215,1.26,.42);d.position.set(5.45,.068,4.82),this.scene.add(d);const m=[this.box("blue trim",[15.9,.13,.12],[0,1.4,-5.27],3113197),this.box("blue trim",[.12,.13,10.8],[-7.75,1.4,0],3113197),this.box("blue trim",[.12,.13,7],[7.75,1.4,1.35],3113197),this.box("blue trim",[7.7,.13,.12],[-1.9,1.32,2.3],3113197)];this.scene.add(...m),this.createDiningFurniture()}createDiningFurniture(){const t=[new I(3.1,0,1.15),new I(5.35,0,2.55),new I(2.25,0,3.95),new I(5.65,0,-1.85)];for(const i of t){const s=this.box("table",[1.15,.18,.85],[i.x,.45,i.z],5613764),l=this.box("table leg",[.18,.74,.18],[i.x,.1,i.z],2503490);this.scene.add(s,l),this.addStaticCollider(i.x,i.z,.68,.52);const c=[new I(-.82,0,0),new I(.82,0,0),new I(0,0,-.68)];for(const h of c){const d=this.box("chair",[.36,.45,.36],[i.x+h.x,.23,i.z+h.z],3113197);this.scene.add(d)}}}createStations(){this.createMachineStation(),this.createPackingStation(),this.createSalesStation(),this.createPickupStation(),this.createHrOffice(),this.createUpgradeOffice()}createMachineStation(){const t=new an;t.position.copy(Ge[0].position);const i=this.box("machine base",[1.6,.55,1.35],[0,.28,0],5998490),s=this.box("coffee machine body",[1.1,1.35,.85],[0,1.08,-.05],3362408),l=this.box("machine panel",[.78,.45,.06],[0,1.2,.41],5688562),c=this.box("machine tray",[1.25,.12,.65],[0,.72,.56],2306367),h=new Ue(new ri(.08,.08,.52,16),new _n({color:1448482,roughness:.4}));h.position.set(-.22,1.64,.16),h.rotation.z=Math.PI/2,h.castShadow=!0;const d=h.clone();d.position.x=.22,t.add(i,s,l,c,h,d),this.scene.add(t),this.addStaticCollider(Ge[0].position.x,Ge[0].position.z,.9,.78);const m=this.createBillboardLabel("LV.1 MACHINE",3113197,16777215,1.85,.42);m.position.set(Ge[0].position.x,2.25,Ge[0].position.z-.22),this.scene.add(m)}createPackingStation(){const t=new an;t.position.copy(Ge[1].position);const i=this.box("packing table",[1.85,.55,1.15],[0,.34,0],43140),s=[this.box("package stack",[.42,.22,.42],[-.42,.82,-.18],15898954),this.box("package stack",[.42,.22,.42],[.02,.82,.16],15911244),this.box("tape unit",[.36,.28,.42],[.55,.86,-.1],3113197)];t.add(i,...s),this.scene.add(t),this.addStaticCollider(Ge[1].position.x,Ge[1].position.z,1.05,.7)}createSalesStation(){const t=new an;t.position.copy(Ge[2].position);const i=this.box("sales counter",[2,.85,1.1],[0,.43,0],3113197),s=this.box("register",[.48,.26,.34],[.55,1,-.1],2042167),l=this.box("register display",[.36,.22,.04],[.55,1.18,-.29],7268279),c=this.createBillboardLabel("WALK-IN SALES",15911244,2105636,1.8,.36);c.position.set(0,1.58,.1),t.add(i,s,l,c),this.scene.add(t),this.addStaticCollider(Ge[2].position.x,Ge[2].position.z,1.12,.68)}createPickupStation(){const t=new an;t.position.copy(Ge[3].position);const i=this.box("pickup shelf base",[1.8,.62,.92],[0,.31,0],3113197),s=this.box("pickup shelf top",[1.86,.14,.98],[0,.74,0],5688562),l=this.createBillboardLabel("PICKUP",15423319,16777215,1.4,.4);l.position.set(0,1.35,0),t.add(i,s,l),this.scene.add(t),this.addStaticCollider(Ge[3].position.x,Ge[3].position.z,1.02,.58)}createHrOffice(){const t=new an;t.position.copy(Ge[4].position);const i=this.box("hr desk",[1.45,.62,.78],[0,.31,0],7327639),s=this.box("hr computer",[.38,.26,.06],[-.25,.82,-.22],2042167),l=this.createCharacter(16752512,3113197);l.position.set(.52,0,.42),l.scale.setScalar(.82),t.add(i,s,l),this.scene.add(t),this.addStaticCollider(Ge[4].position.x,Ge[4].position.z,.82,.52)}createUpgradeOffice(){const t=new an;t.position.copy(Ge[5].position);const i=this.box("upgrade terminal",[1.52,.82,.86],[0,.41,0],10179040),s=this.box("upgrade screen",[.8,.42,.06],[0,1.04,-.38],14730239),l=[this.box("upgrade cash",[.32,.13,.32],[-.42,.92,.1],7327639),this.box("upgrade cash",[.32,.13,.32],[-.1,.95,.1],7327639),this.box("upgrade cash",[.32,.13,.32],[.22,.98,.1],7327639)];t.add(i,s,...l),this.scene.add(t),this.addStaticCollider(Ge[5].position.x,Ge[5].position.z,.9,.58)}createPizzaExpansion(){this.pizzaStationGroup.position.copy(Ge[6].position),this.scene.add(this.pizzaStationGroup),this.addStaticCollider(Ge[6].position.x,Ge[6].position.z,.9,.68),this.updatePizzaStationVisuals()}createZones(){for(const i of Ge){const s=new Ue(new Jd(i.radius*.72,i.radius,52),new Yo({color:i.color,transparent:!0,opacity:.58,side:zi}));s.rotation.x=-Math.PI/2,s.position.set(i.position.x,.055,i.position.z),this.zoneRings.set(i.id,s),this.scene.add(s);const l=this.createFloorSign(i.label,i.color,16777215,i.radius*1.8,.58);l.position.copy(this.getZoneFloorSignPosition(i)),this.scene.add(l)}const t=this.createFloorSign("MACHINE -> SALES   |   MACHINE -> PACK -> PICKUP",16777215,2372679,5.9,.48);t.position.set(-1.95,.07,.55),this.scene.add(t)}createPlayer(){this.player.name="Player barista";const t=new Ue(new $d(.48,.035,8,36),new Yo({color:2600544}));t.rotation.x=Math.PI/2,t.position.y=.05;const i=new Ue(new Qc(.31,.58,5,14),new _n({color:3113197,roughness:.55}));i.position.y=.83,i.castShadow=!0;const s=this.box("barista apron",[.42,.38,.08],[0,.78,.3],15423319),l=new Ue(new Jc(.22,18,18),new _n({color:16763301,roughness:.48}));l.position.y=1.35,l.castShadow=!0;const c=new Ue(new ri(.23,.25,.12,18),new _n({color:15423319,roughness:.55}));c.position.y=1.52,c.castShadow=!0,this.carryStackGroup.position.set(.42,.93,.18),this.player.add(t,i,s,l,c,this.carryStackGroup),this.scene.add(this.player)}createCourierVan(){const t=this.box("courier van body",[1.65,.82,.95],[0,.48,0],15423319),i=this.box("courier van cab",[.78,.7,.92],[-.74,.6,0],16747146),s=this.box("courier van window",[.36,.26,.96],[-.94,.82,0],14678271),l=this.createBillboardLabel("COURIER",15423319,16777215,1.12,.3);l.position.set(.02,1.18,0);const c=this.wheel(-.55,-.5),h=this.wheel(.58,-.5),d=this.wheel(-.55,.5),m=this.wheel(.58,.5);this.courierVan.add(t,i,s,l,c,h,d,m),this.courierVan.position.set(11.2,0,.85),this.courierVan.visible=!1,this.scene.add(this.courierVan)}loop=()=>{const t=Math.min(this.clock.getDelta(),.05);this.update(t),this.renderer.render(this.scene,this.camera),this.animationId=requestAnimationFrame(this.loop)};update(t){this.updateCameraControls(t),this.animateScene(t),this.status==="active"&&(this.updatePlayer(t),this.updateMachine(t),this.updateWalkInOrders(t),this.updatePacking(t),this.updateSales(t),this.updateCourier(t),this.updateRushCustomers(t),this.updateEmployees(t),this.updatePizzaRevenue(t),this.updateCashPiles(),this.checkBankruptcy()),this.alert!==this.previousAlert&&(this.previousAlert=this.alert,this.alertTimer=2.4),this.alertTimer>0&&(this.alertTimer=Math.max(0,this.alertTimer-t)),this.emitTimer+=t,this.emitTimer>=.08&&(this.emitTimer=0,this.emitUi())}updateCameraControls(t){this.keys.has("KeyQ")&&(this.targetCameraYaw=In.clamp(this.targetCameraYaw+t*1.15,-.72,.72)),this.keys.has("KeyE")&&(this.targetCameraYaw=In.clamp(this.targetCameraYaw-t*1.15,-.72,.72)),this.cameraYaw=In.damp(this.cameraYaw,this.targetCameraYaw,8,t),this.cameraTilt=In.damp(this.cameraTilt,this.targetCameraTilt,8,t);const i=this.baseCameraOffset.clone();i.y+=this.cameraTilt*5.5,i.applyAxisAngle(new I(0,1,0),this.cameraYaw),this.camera.position.copy(this.cameraFocus).add(i),this.camera.lookAt(this.cameraFocus)}animateScene(t){for(const[i,s]of this.zoneRings)s.rotation.z+=t*(i==="pickup"?-.75:.55);this.machineStockGroup.rotation.y=Math.sin(performance.now()*.0012)*.03,this.cashPileGroup.children.forEach((i,s)=>{i.position.y+=Math.sin(performance.now()*.002+s)*8e-4})}updatePlayer(t){const i=new I;if((this.keys.has("KeyW")||this.keys.has("ArrowUp"))&&(i.z-=1),(this.keys.has("KeyS")||this.keys.has("ArrowDown"))&&(i.z+=1),(this.keys.has("KeyA")||this.keys.has("ArrowLeft"))&&(i.x-=1),(this.keys.has("KeyD")||this.keys.has("ArrowRight"))&&(i.x+=1),i.lengthSq()>0){i.normalize();const l=4.25+(this.staffLevel-1)*.42;this.playerVelocity.lerp(i.multiplyScalar(l),.2),this.player.rotation.y=Math.atan2(this.playerVelocity.x,this.playerVelocity.z)}else this.playerVelocity.lerp(new I,.24);const s=this.playerVelocity.clone().multiplyScalar(t);this.moveWithCollisions(this.player,s,this.playerRadius)}updateMachine(t){this.machineStock<this.getMachineCapacity()&&(this.machineTimer-=t,this.machineTimer<=0&&(this.machineStock+=1,this.machineTimer=this.getMachineDuration(),this.alert="Fresh coffee is ready on the machine tray.",this.updateMachineStockVisuals()));const i=this.getCarryCapacity()-this.getCarriedTotal();if(i>0&&this.machineStock>0&&this.isPlayerInZone("machine")){const s=Math.min(this.machineStock,i);this.machineStock-=s,this.carriedCoffees+=s,this.alert=`Picked up ${s} coffee${s>1?"s":""}. Carrying ${this.getCarriedTotal()}/${this.getCarryCapacity()}.`,this.updateMachineStockVisuals(),this.updateCarryVisuals()}}updateWalkInOrders(t){this.walkInTimer-=t,this.walkInTimer<=0&&(this.walkInTimer=this.getWalkInSpawnInterval(),this.walkIns.length<this.getMaxWalkInQueue()&&this.spawnWalkInOrder());for(let i=this.walkIns.length-1;i>=0;i-=1){const s=this.walkIns[i];if(this.updateWalkInMovement(s,i,t),s.state!=="queued"){s.bar.scale.x=1;continue}s.patience-=t;const l=In.clamp(s.patience/s.maxPatience,0,1);s.bar.scale.x=l,s.patience<=0&&(this.scene.remove(s.mesh),this.walkIns.splice(i,1),this.damageReputation("A walk-in customer waited too long."))}}updatePacking(t){if(this.carriedCoffees>0&&this.isPlayerInZone("packing")){this.packingProgress+=t/this.getPackingDuration(),this.alert="Packing coffee for courier delivery. Stay inside the PACK zone.",this.packingProgress>=1&&(this.packingProgress=0,this.carriedCoffees-=1,this.carriedPackages+=1,this.alert=`Package ready. Packages: ${this.carriedPackages}.`,this.updateCarryVisuals());return}this.packingProgress>0&&(this.packingProgress=Math.max(0,this.packingProgress-t*.4))}updateSales(t){if(this.salesCooldown=Math.max(0,this.salesCooldown-t),this.carriedCoffees>0&&this.isWalkInReadyForSale()&&this.isPlayerInZone("sales")&&this.salesCooldown<=0){const i=this.getWalkInSaleValue();this.cash+=i,this.sales+=1,this.carriedCoffees-=1,this.salesCooldown=.22,this.removeWalkIn(0),this.alert=`Walk-in sale completed. +$${i}`,this.updateCarryVisuals()}}updateCourier(t){if(this.pickupCooldown=Math.max(0,this.pickupCooldown-t),this.carriedPackages>0&&this.isPlayerInZone("pickup")&&this.pickupCooldown<=0){const i=this.carriedPackages;this.carriedPackages=0,this.pickupShelfPackages+=i,this.pickupCooldown=.35,this.alert=`${i} package${i>1?"s":""} staged on PICKUP shelf. Courier will collect automatically.`,this.updateCarryVisuals(),this.updatePickupShelfVisuals()}if(this.courierState==="away"){this.courierTimer-=t,this.courierTimer<=0&&(this.courierState="arriving",this.courierVan.visible=!0,this.courierVan.position.set(11.2,0,.85));return}if(this.courierState==="arriving"){this.courierVan.position.x=Math.max(8.9,this.courierVan.position.x-t*3.2),this.courierVan.position.x<=8.92&&(this.courierState="waiting",this.courierPatience=this.getCourierPatienceDuration(),this.alert="Courier arrived at PICKUP and is checking the shelf.",this.collectPickupShelfPackages());return}if(this.courierState==="waiting"){if(this.collectPickupShelfPackages())return;this.courierPatience-=t,this.courierPatience<=0&&(this.damageReputation("Courier left because the PICKUP shelf was empty."),this.courierState="leaving");return}this.courierVan.position.x+=t*3.6,this.courierVan.position.x>11.1&&(this.courierState="away",this.courierVan.visible=!1,this.courierPatience=0,this.courierTimer=Math.max(4.8,10.5-this.sales*.08))}updateRushCustomers(t){this.rushTimer-=t,this.rushTimer<=0&&(this.spawnRushCustomer(),this.rushTimer=Math.max(2.6,5.8-this.sales*.035));for(let i=this.rushCustomers.length-1;i>=0;i-=1){const s=this.rushCustomers[i],l=s.path[s.targetIndex];if(s.life-=t,!l||s.life<=0){this.scene.remove(s.mesh),this.rushCustomers.splice(i,1);continue}const c=l.clone().sub(s.mesh.position);c.y=0;const h=c.length();if(h<=.08){s.mesh.position.copy(l),s.targetIndex+=1,s.targetIndex>=s.path.length&&(this.scene.remove(s.mesh),this.rushCustomers.splice(i,1));continue}if(c.normalize(),s.mesh.position.add(c.clone().multiplyScalar(Math.min(h,s.speed*t))),s.mesh.rotation.y=Math.atan2(c.x,c.z),this.flatDistance(s.mesh.position,this.player.position)<s.radius+this.playerRadius){this.scene.remove(s.mesh),this.rushCustomers.splice(i,1),this.getCarriedTotal()>0?(this.carriedCoffees=0,this.carriedPackages=0,this.packingProgress=0,this.updateCarryVisuals(),this.damageReputation("You bumped into a rushing customer and dropped the order.")):this.alert="Careful. Rushing customers can knock orders out of your hands.";continue}}}updateEmployees(t){for(const i of this.employees){if(i.phase==="waitMachine"){i.wait-=t,i.wait<=0&&(i.carrying="coffee",this.updateEmployeeCargo(i),i.phase=i.route==="sales"?"toSales":"toPacking",this.alert="Employee prepared a coffee order.");continue}if(i.phase==="pack"){i.wait-=t,i.mesh.rotation.y+=t*4.2,i.wait<=0&&(i.carrying="package",this.updateEmployeeCargo(i),i.phase="toPickup",this.alert="Employee packed a courier order.");continue}if(i.phase==="sell"){i.wait-=t,i.wait<=0&&(i.route=i.route==="sales"?"pickup":"sales",i.phase="toMachine");continue}const l=this.getEmployeeTarget(i).clone().sub(i.mesh.position);l.y=0;const c=l.length();if(c<=.08){this.advanceEmployee(i);continue}l.normalize();const h=Math.min(c,(2.2+this.staffLevel*.34)*t);this.moveEmployee(i,l.clone().multiplyScalar(h)),i.mesh.rotation.y=Math.atan2(l.x,l.z)}}moveEmployee(t,i){t.mesh.position.x=In.clamp(t.mesh.position.x+i.x,-Fc+.28,Fc-.28),t.mesh.position.z=In.clamp(t.mesh.position.z+i.z,K_+.28,Q_-.28)}updatePizzaRevenue(t){if(this.pizzaUnlocked&&(this.pizzaRevenueTimer-=t,this.pizzaRevenueTimer<=0)){const i=18+this.staffLevel*2;this.cash+=i,this.sales+=1,this.pizzaRevenueTimer=5.5,this.alert=`Pizza machine side sale. +$${i}`}}checkBankruptcy(){this.status==="active"&&this.cash<=-50&&(this.status="gameOver",this.alert="Shop bankrupt. Cash reached -$50.",this.alertTimer=3,this.playerVelocity.set(0,0,0))}spawnWalkInOrder(){const t=this.createCharacter(16758531,1002625),i=this.box("patience bar back",[.52,.06,.05],[0,1.64,0],16777215,!1,1,!1),s=this.box("patience bar fill",[.5,.07,.055],[0,1.65,.01],2600544,!1,1,!1);t.add(i,s),t.position.copy(DA);const l=Math.max(13,22+this.staffLevel*.55-this.sales*.025);this.walkIns.push({mesh:t,bar:s,state:"entering",pathIndex:0,patience:l,maxPatience:l}),this.scene.add(t),this.alert="A walk-in customer is entering from the front door."}updateWalkInMovement(t,i,s){const l=this.getWalkInQueuePosition(i),c=t.state==="entering"&&t.pathIndex<Zh.length?Zh[t.pathIndex]:l,h=c.clone().sub(t.mesh.position);h.y=0;const d=h.length();if(d<=.06){if(t.mesh.position.copy(c),t.state==="entering"&&t.pathIndex<Zh.length){t.pathIndex+=1;return}t.state!=="queued"&&(t.state="queued",this.alert="Walk-in customer joined the SALES queue."),t.mesh.rotation.y=Math.PI;return}h.normalize();const m=t.state==="entering"?1.35:1.05,p=Math.min(d,m*s);t.mesh.position.add(h.multiplyScalar(p)),t.mesh.rotation.y=Math.atan2(h.x,h.z)}getWalkInQueuePosition(t){return jh[Math.min(t,jh.length-1)]}isWalkInReadyForSale(){return this.walkIns[0]?.state==="queued"}removeWalkIn(t){const[i]=this.walkIns.splice(t,1);i&&this.scene.remove(i.mesh)}collectPickupShelfPackages(){if(this.courierState!=="waiting"||this.pickupShelfPackages<=0)return!1;const t=this.pickupShelfPackages,i=t*this.getCourierSaleValue();return this.cash+=i,this.sales+=t,this.pickupShelfPackages=0,this.courierState="leaving",this.courierPatience=0,this.alert=`Courier collected ${t} package${t>1?"s":""} from PICKUP shelf. +$${i}`,this.updatePickupShelfVisuals(),!0}spawnRushCustomer(){const t=J_[Math.floor(Math.random()*J_.length)],i=this.createCharacter(9358054,4014171);i.scale.setScalar(.88),i.position.copy(t[0]);const s=1.75+Math.min(1.2,this.sales*.025);this.scene.add(i),this.rushCustomers.push({mesh:i,path:t,targetIndex:1,radius:.34,speed:s,life:14})}hireEmployee(){const t=this.getHireCost();if(!this.isPlayerInZone("hr")){this.alert="Go to the HR room and press H to hire employees.";return}if(this.cash<t){this.alert=`Need $${t} to hire an employee.`;return}this.cash-=t;const i=this.createCharacter(7327639,3113197);i.position.set(-5.3+this.employees.length*.28,0,3.85);const s=new an;s.position.set(.32,.88,.16),i.add(s),this.scene.add(i),this.employees.push({mesh:i,cargo:s,phase:"toMachine",route:this.employees.length%2===0?"sales":"pickup",carrying:"none",wait:0}),this.alert="Employee hired from HR. They will automate coffee sales.",this.updateCashPiles(!0)}unlockPizzaMachine(){if(!this.isPlayerInZone("pizza")){this.alert="Go to the PIZZA $1000 area and press P.";return}if(this.pizzaUnlocked){this.alert="Pizza machine is already active.";return}if(this.cash<this.pizzaUnlockCost){this.alert=`Need $${this.pizzaUnlockCost} to unlock the pizza machine.`;return}this.cash-=this.pizzaUnlockCost,this.pizzaUnlocked=!0,this.pizzaRevenueTimer=1.5,this.updatePizzaStationVisuals(),this.updateCashPiles(!0),this.alert="Pizza machine unlocked. Side income is now active."}upgradeMachine(){if(!this.isPlayerInZone("upgrade")&&!this.isPlayerInZone("machine")){this.alert="Go to UPGRADE or the machine zone, then press 1.";return}this.buyMachineUpgrade()}buyMachineUpgrade(){const t=this.getMachineUpgradeCost();if(this.cash<t){this.alert=`Need $${t} for the coffee machine upgrade.`;return}this.cash-=t,this.machineLevel+=1,this.machineTimer=Math.min(this.machineTimer,this.getMachineDuration()),this.alert=`Coffee machine upgraded to level ${this.machineLevel}. Faster production and more tray capacity.`,this.updateCashPiles(!0)}upgradePacking(){if(!this.isPlayerInZone("upgrade")&&!this.isPlayerInZone("packing")){this.alert="Go to UPGRADE or the PACK zone, then press 2.";return}this.buyPackingUpgrade()}buyPackingUpgrade(){const t=this.getPackingUpgradeCost();if(this.cash<t){this.alert=`Need $${t} for the packing upgrade.`;return}this.cash-=t,this.packingLevel+=1,this.alert=`Packing upgraded to level ${this.packingLevel}. Courier orders package faster.`,this.updateCashPiles(!0)}upgradeStaff(){if(!this.isPlayerInZone("upgrade")&&!this.isPlayerInZone("hr")){this.alert="Go to UPGRADE or HR, then press 3 for staff training.";return}this.buyStaffUpgrade()}buyStaffUpgrade(){const t=this.getStaffUpgradeCost();if(this.cash<t){this.alert=`Need $${t} for staff training.`;return}this.cash-=t,this.staffLevel+=1,this.alert=`Staff training upgraded to level ${this.staffLevel}. Movement and employees are faster.`,this.updateCashPiles(!0)}advanceEmployee(t){if(t.phase==="toMachine"){this.machineStock>0?(this.machineStock-=1,this.updateMachineStockVisuals(),t.carrying="coffee",this.updateEmployeeCargo(t),t.phase=t.route==="sales"?"toSales":"toPacking",this.alert="Employee picked up machine coffee."):(t.phase="waitMachine",t.wait=this.getEmployeeBrewDuration());return}if(t.phase==="toPacking"){t.phase="pack",t.wait=Math.max(.65,this.getPackingDuration()*.58);return}if(t.phase==="toSales"){const i=6+this.staffLevel*2;this.cash+=i,this.sales+=1,this.isWalkInReadyForSale()&&this.removeWalkIn(0),t.carrying="none",this.updateEmployeeCargo(t),t.phase="sell",t.wait=.35,this.alert=`Employee served a walk-in order. +$${i}`;return}t.phase==="toPickup"&&(this.pickupShelfPackages+=1,this.updatePickupShelfVisuals(),this.collectPickupShelfPackages(),t.carrying="none",this.updateEmployeeCargo(t),t.phase="sell",t.wait=.35,this.courierState!=="leaving"&&(this.alert="Employee staged a package on the PICKUP shelf."))}getEmployeeTarget(t){return t.phase==="toMachine"?new I(-4.15,0,-1.55):t.phase==="toPacking"?new I(-2.15,0,-1):t.phase==="toSales"?new I(1.3,0,-1.15):t.phase==="toPickup"?new I(4.55,0,.65):t.mesh.position.clone()}damageReputation(t){if(this.status!=="active")return;const i=8;this.cash-=i,this.alert=`${t} -$${i}`,this.checkBankruptcy()}updateMachineStockVisuals(){this.machineStockGroup.clear(),this.machineStockGroup.position.copy(Ge[0].position);for(let t=0;t<this.machineStock;t+=1){const i=this.createCoffeeCup(),s=Math.floor(t/3),l=t%3;i.scale.setScalar(.76),i.position.set(-.38+l*.38,.82,.62+s*.32),this.machineStockGroup.add(i)}}updatePickupShelfVisuals(){this.pickupShelfPackageGroup.clear(),this.pickupShelfPackageGroup.position.copy(Ge[3].position);const t=Math.min(this.pickupShelfPackages,8);for(let i=0;i<t;i+=1){const s=this.createPackage(),l=Math.floor(i/4),c=i%4;s.scale.setScalar(.46),s.position.set(-.58+c*.38,.86+l*.18,-.18+l*.28),s.rotation.y=i%2*.24,this.pickupShelfPackageGroup.add(s)}}updateCashPiles(t=!1){const i=Math.max(0,Math.min(18,Math.floor(this.cash/28)));if(!(!t&&i===this.lastCashPileCount)){this.lastCashPileCount=i,this.cashPileGroup.clear(),this.cashPileGroup.position.set(2.9,0,-1.5);for(let s=0;s<i;s+=1){const l=Math.floor(s/6),c=s%6,h=this.box("cash pile",[.34,.1,.22],[c*.24,.08+l*.08,l*.28],7327639);h.rotation.y=s%2*.35,this.cashPileGroup.add(h)}}}updatePizzaStationVisuals(){this.pizzaStationGroup.clear();const t=this.box("pizza expansion base",[1.75,.24,1.15],[0,.12,0],this.pizzaUnlocked?16744209:10135474),i=new Ue(new ri(.42,.42,.08,32),new _n({color:this.pizzaUnlocked?15911244:13358559,roughness:.62}));if(i.position.set(0,.34,.14),i.castShadow=!0,!this.pizzaUnlocked){const d=this.createBillboardLabel("LOCKED $1000",16744209,16777215,1.55,.34);d.position.set(0,1.2,0);const m=this.box("locked pizza crate",[.72,.55,.72],[0,.58,0],8226704);this.pizzaStationGroup.add(t,i,m,d);return}const s=this.box("pizza oven",[1,.78,.82],[0,.62,-.08],2503490),l=this.box("pizza oven firebox",[.74,.32,.05],[0,.62,.35],16758531),c=this.createPizzaMesh();c.position.set(0,1.08,.28);const h=this.createBillboardLabel("PIZZA ACTIVE",16744209,16777215,1.45,.34);h.position.set(0,1.58,0),this.pizzaStationGroup.add(t,s,l,i,c,h)}updateCarryVisuals(){this.carryStackGroup.clear();const t=Math.min(this.carriedCoffees,5),i=Math.min(this.carriedPackages,4);for(let s=0;s<t;s+=1){const l=this.createCoffeeCup(),c=Math.floor(s/2),h=s%2;l.scale.setScalar(.62),l.position.set(h*.18,c*.18,0),this.carryStackGroup.add(l)}for(let s=0;s<i;s+=1){const l=this.createPackage();l.scale.setScalar(.42),l.position.set(.06*(s%2),t>0?.48+s*.12:s*.15,.02),this.carryStackGroup.add(l)}}updateEmployeeCargo(t){if(t.cargo.clear(),t.carrying==="coffee"){const i=this.createCoffeeCup();i.scale.setScalar(.58),t.cargo.add(i);return}if(t.carrying==="package"){const i=this.createPackage();i.scale.setScalar(.42),t.cargo.add(i)}}clearDynamicObjects(){for(const t of this.walkIns)this.scene.remove(t.mesh);for(const t of this.rushCustomers)this.scene.remove(t.mesh);for(const t of this.employees)this.scene.remove(t.mesh);this.walkIns.length=0,this.rushCustomers.length=0,this.employees.length=0}isPlayerInZone(t){const i=Ge.find(s=>s.id===t);return i?this.flatDistance(this.player.position,i.position)<=i.radius+this.playerRadius+.2:!1}getZoneFloorSignPosition(t){const i=t.position.clone();return i.y=.065,t.id==="sales"?i.set(.45,.065,-1.05):t.id==="pickup"?i.set(5.75,.065,2.05):t.id==="pizza"?i.set(3.7,.065,-2.55):i.z+=t.radius*.92,i}getCurrentZone(){return Ge.find(t=>this.flatDistance(this.player.position,t.position)<=t.radius+this.playerRadius+.2)}getActiveMenu(){const t=this.getCurrentZone();return t?.id==="upgrade"?"upgrade":t?.id==="hr"?"hr":t?.id==="pizza"?"pizza":"none"}getObjective(){return this.status==="gameOver"?"Press R to restart the shop.":this.carriedPackages>0&&this.carriedCoffees===0?"Drop packaged coffee on the PICKUP shelf for courier collection.":this.pickupShelfPackages>0?"Pickup shelf is staged. Keep producing while the courier drives in.":this.carriedCoffees>0?this.walkIns.length>0?"Sell coffee at SALES for quick cash.":"Pack coffee at PACK for the courier order.":this.machineStock>0?"Pick up fresh coffee from MACHINE.":this.cash>=this.getHireCost()&&this.employees.length===0?"Hire your first employee in HR.":"Wait for machine stock or upgrade the business."}getRouteHint(){return this.carriedCoffees>0?"Normal sale needs no package: go directly to SALES. Courier sale needs PACK first.":this.carriedPackages>0?"Leave packages on the PICKUP shelf. The courier collects staged orders automatically.":this.pickupShelfPackages>0?`PICKUP shelf has ${this.pickupShelfPackages} package${this.pickupShelfPackages>1?"s":""} waiting for the courier.`:this.courierState==="waiting"?"Courier is at PICKUP. Stage a packaged coffee on the shelf.":"Core loop: MACHINE -> SALES, or MACHINE -> PACK -> PICKUP. HR hires workers."}getPrompt(){if(this.status==="gameOver")return"Shop closed. Press R to restart.";const t=this.getCurrentZone();return t?t.id==="machine"?this.machineStock>0?"MACHINE: coffee pickup is automatic.":`MACHINE: producing coffee. Press 1 here or in UPGRADE to upgrade for $${this.getMachineUpgradeCost()}.`:t.id==="packing"?this.carriedCoffees>0?"PACK: stay here until the bar fills to prepare a courier package.":`PACK: press 2 here or in UPGRADE to upgrade for $${this.getPackingUpgradeCost()}.`:t.id==="sales"?this.carriedCoffees>0?"SALES: unpacked coffee sells here to walk-in customers.":"SALES: bring fresh coffee here when customers are waiting.":t.id==="pickup"?this.carriedPackages>0?"PICKUP: package drop-off is automatic. Courier collects the shelf.":this.pickupShelfPackages>0?`PICKUP: ${this.pickupShelfPackages} package${this.pickupShelfPackages>1?"s":""} staged for courier pickup.`:"PICKUP: bring packaged coffee here and leave it on the shelf.":t.id==="hr"?`HR: press H to hire for $${this.getHireCost()}, or 3 for staff training.`:t.id==="upgrade"?"UPGRADE: press 1 machine, 2 packing, 3 staff training.":this.pizzaUnlocked?"PIZZA: machine is active and generating side income.":"PIZZA: press P here to unlock the pizza machine for $1000.":"Follow floor labels. WASD moves the barista. Drag, Q/E rotate camera; C resets it."}getCourierStatus(){return this.courierState==="away"?"Away":this.courierState==="arriving"?"Arriving":this.courierState==="waiting"?"Waiting":"Leaving"}getShopLevel(){return Math.max(1,Math.floor(this.sales/8)+Math.floor((this.machineLevel+this.packingLevel+this.staffLevel)/5))}getMaxWalkInQueue(){return Math.min(jh.length,wA+Math.floor((this.machineLevel+this.staffLevel-2)/2))}getWalkInSpawnInterval(){const t=this.machineLevel*.52+this.staffLevel*.32+this.getShopLevel()*.22+this.sales*.012;return Math.max(1.35,6.6-t)}getMachineCapacity(){return Math.min(8,2+this.machineLevel)}getCarryCapacity(){return Math.min(8,3+this.staffLevel)}getCarriedTotal(){return this.carriedCoffees+this.carriedPackages}getMachineDuration(){return Math.max(.85,3.8-(this.machineLevel-1)*.36)}getPackingDuration(){return Math.max(.75,2.55-(this.packingLevel-1)*.25)}getEmployeeBrewDuration(){return Math.max(.75,2.2-this.machineLevel*.18)}getCourierPatienceDuration(){return Math.max(9,19-this.sales*.05)}getWalkInSaleValue(){return 12+this.machineLevel*2+Math.floor(this.staffLevel/2)}getCourierSaleValue(){return 26+this.packingLevel*4+this.staffLevel}getMachineUpgradeCost(){return 45+(this.machineLevel-1)*42}getPackingUpgradeCost(){return 55+(this.packingLevel-1)*46}getStaffUpgradeCost(){return 70+(this.staffLevel-1)*58}getHireCost(){return 80+this.employees.length*55}emitUi(t=!1){const i=this.machineStock>=this.getMachineCapacity()?1:1-In.clamp(this.machineTimer/this.getMachineDuration(),0,1),s=this.courierState==="waiting"?In.clamp(this.courierPatience/this.getCourierPatienceDuration(),0,1):0;!t&&this.status==="gameOver"&&this.emitTimer!==0||this.onUiChange({status:this.status,shopLevel:this.getShopLevel(),cash:Math.floor(this.cash),sales:this.sales,reputation:this.reputation,carrying:this.getCarryingLabel(),coffeeStock:this.machineStock,walkInQueue:this.walkIns.length,maxWalkInQueue:this.getMaxWalkInQueue(),machineLevel:this.machineLevel,packingLevel:this.packingLevel,staffLevel:this.staffLevel,employees:this.employees.length,machineProgress:i,packingProgress:this.packingProgress,courierPatience:s,courierStatus:this.getCourierStatus(),pickupShelfPackages:this.pickupShelfPackages,activeMenu:this.getActiveMenu(),pizzaUnlocked:this.pizzaUnlocked,pizzaUnlockCost:this.pizzaUnlockCost,objective:this.getObjective(),routeHint:this.getRouteHint(),prompt:this.getPrompt(),alert:this.alertTimer>0?this.alert:"",machineUpgradeCost:this.getMachineUpgradeCost(),packingUpgradeCost:this.getPackingUpgradeCost(),staffUpgradeCost:this.getStaffUpgradeCost(),hireCost:this.getHireCost(),courierWaiting:this.courierState==="waiting"})}getCarryingLabel(){return this.carriedCoffees>0&&this.carriedPackages>0?`Coffee x${this.carriedCoffees}, Package x${this.carriedPackages}`:this.carriedCoffees>0?`Coffee x${this.carriedCoffees}`:this.carriedPackages>0?`Package x${this.carriedPackages}`:"Empty"}flatDistance(t,i){const s=t.x-i.x,l=t.z-i.z;return Math.sqrt(s*s+l*l)}addStaticCollider(t,i,s,l){this.staticColliders.push({center:new I(t,0,i),halfX:s,halfZ:l})}moveWithCollisions(t,i,s){const l=t.position.clone();l.x=In.clamp(l.x+i.x,-Fc+s,Fc-s),this.collidesWithStatic(l,s)?t===this.player&&(this.playerVelocity.x=0):t.position.x=l.x;const c=t.position.clone();c.z=In.clamp(c.z+i.z,K_+s,Q_-s),this.collidesWithStatic(c,s)?t===this.player&&(this.playerVelocity.z=0):t.position.z=c.z}collidesWithStatic(t,i){return this.staticColliders.some(s=>{const l=In.clamp(t.x,s.center.x-s.halfX,s.center.x+s.halfX),c=In.clamp(t.z,s.center.z-s.halfZ,s.center.z+s.halfZ),h=t.x-l,d=t.z-c;return h*h+d*d<i*i})}createCoffeeCup(){const t=new an,i=new Ue(new ri(.16,.12,.33,18),new _n({color:16777215,roughness:.44}));i.position.y=.17,i.castShadow=!0;const s=new Ue(new ri(.165,.13,.12,18),new _n({color:8081208,roughness:.75}));s.position.y=.16;const l=new Ue(new ri(.17,.17,.05,18),new _n({color:15922935,roughness:.32}));return l.position.y=.37,t.add(i,s,l),t}createPackage(){const t=new an,i=new Ue(new Ya(.48,.34,.48),new _n({color:15898954,roughness:.72}));i.castShadow=!0;const s=new Ue(new Ya(.51,.065,.51),new _n({color:3113197,roughness:.42}));return s.position.y=.03,t.add(i,s),t}createPizzaMesh(){const t=new an,i=new Ue(new ri(.36,.36,.06,32),new _n({color:14258741,roughness:.68}));i.castShadow=!0;const s=new Ue(new ri(.31,.31,.065,32),new _n({color:16242541,roughness:.55}));s.position.y=.025,s.castShadow=!0,t.add(i,s);const l=new _n({color:15423319,roughness:.5}),c=[[-.14,.08],[.1,.12],[.16,-.08],[-.05,-.14]];for(const[h,d]of c){const m=new Ue(new ri(.045,.045,.025,12),l);m.position.set(h,.075,d),m.castShadow=!0,t.add(m)}return t}createCharacter(t,i){const s=new an,l=new Ue(new Qc(.25,.46,5,12),new _n({color:t,roughness:.54}));l.position.y=.78,l.castShadow=!0;const c=this.box("character apron",[.34,.3,.06],[0,.72,.24],i),h=new Ue(new Jc(.19,16,16),new _n({color:16763301,roughness:.48}));h.position.y=1.18,h.castShadow=!0;const d=new Ue(new ri(.19,.2,.09,16),new _n({color:i,roughness:.52}));return d.position.y=1.32,d.castShadow=!0,s.add(l,c,h,d),s}wheel(t,i){const s=new Ue(new ri(.18,.18,.16,18),new _n({color:2042163,roughness:.72}));return s.rotation.z=Math.PI/2,s.position.set(t,.16,i),s.castShadow=!0,s}plane(t,i,s){const l=new Ue(new Br(t[0],t[1]),new _n({color:s,roughness:.76,metalness:.02}));return l.rotation.x=-Math.PI/2,l.position.set(i[0],i[1],i[2]),l.receiveShadow=!0,l}box(t,i,s,l,c=!1,h=1,d=!0){const m=new Ue(new Ya(i[0],i[1],i[2]),new _n({color:l,roughness:.62,metalness:.03,transparent:c,opacity:h}));return m.name=t,m.position.set(s[0],s[1],s[2]),m.castShadow=!0,m.receiveShadow=d,m}createFloorSign(t,i,s,l,c){const h=this.createTextTexture(t,i,s,512,128,54),d=new Ue(new Br(l,c),new Yo({map:h,transparent:!0}));return d.rotation.x=-Math.PI/2,d}createBillboardLabel(t,i,s,l,c){const h=this.createTextTexture(t,i,s,512,128,50),d=new Tv({map:h,transparent:!0}),m=new wM(d);return m.scale.set(l,c,1),m}createTextTexture(t,i,s,l,c,h){const d=document.createElement("canvas");d.width=l,d.height=c;const m=d.getContext("2d");if(!m)throw new Error("Could not create canvas texture.");m.clearRect(0,0,l,c),m.fillStyle=`#${i.toString(16).padStart(6,"0")}`,this.roundRect(m,8,8,l-16,c-16,26),m.fill(),m.strokeStyle="rgba(255,255,255,0.72)",m.lineWidth=8,this.roundRect(m,12,12,l-24,c-24,22),m.stroke(),m.fillStyle=`#${s.toString(16).padStart(6,"0")}`,m.font=`900 ${h}px Arial`,m.textAlign="center",m.textBaseline="middle",m.fillText(t,l/2,c/2+2,l-52);const p=new OM(d);return p.colorSpace=Zn,p}roundRect(t,i,s,l,c,h){t.beginPath(),t.moveTo(i+h,s),t.arcTo(i+l,s,i+l,s+c,h),t.arcTo(i+l,s+c,i,s+c,h),t.arcTo(i,s+c,i,s,h),t.arcTo(i,s,i+l,s,h),t.closePath()}handleResize=()=>{const t=Math.max(1,this.container.clientWidth),i=Math.max(1,this.container.clientHeight);this.camera.aspect=t/i,this.camera.updateProjectionMatrix(),this.renderer.setSize(t,i,!1)};handleKeyDown=t=>{if((t.code.startsWith("Arrow")||t.code==="Space"||t.code==="KeyW"||t.code==="KeyA"||t.code==="KeyS"||t.code==="KeyD"||t.code==="KeyQ"||t.code==="KeyE"||t.code==="KeyC")&&t.preventDefault(),this.keys.add(t.code),!t.repeat){if(t.code==="KeyR"){this.restart();return}if(this.status==="active"){if(t.code==="KeyC"){this.targetCameraYaw=0,this.targetCameraTilt=0;return}t.code==="Digit1"&&this.upgradeMachine(),t.code==="Digit2"&&this.upgradePacking(),t.code==="Digit3"&&this.upgradeStaff(),t.code==="KeyH"&&this.hireEmployee(),t.code==="KeyP"&&this.unlockPizzaMachine(),this.emitUi(!0)}}};handleKeyUp=t=>{this.keys.delete(t.code)};handlePointerDown=t=>{t.button!==0&&t.button!==2||(this.isCameraDragging=!0,this.cameraPointerId=t.pointerId,this.lastCameraPointerX=t.clientX,this.lastCameraPointerY=t.clientY,this.renderer.domElement.setPointerCapture(t.pointerId),t.preventDefault())};handlePointerMove=t=>{if(!this.isCameraDragging||t.pointerId!==this.cameraPointerId)return;const i=t.clientX-this.lastCameraPointerX,s=t.clientY-this.lastCameraPointerY;this.lastCameraPointerX=t.clientX,this.lastCameraPointerY=t.clientY,this.targetCameraYaw=In.clamp(this.targetCameraYaw-i*.0042,-.72,.72),this.targetCameraTilt=In.clamp(this.targetCameraTilt+s*.003,-.2,.24),t.preventDefault()};handlePointerUp=t=>{t.pointerId===this.cameraPointerId&&(this.isCameraDragging=!1,this.cameraPointerId=-1,this.renderer.domElement.hasPointerCapture(t.pointerId)&&this.renderer.domElement.releasePointerCapture(t.pointerId))};handleContextMenu=t=>{t.preventDefault()}}const LA={status:"active",shopLevel:1,cash:120,sales:0,reputation:5,carrying:"Empty",coffeeStock:0,walkInQueue:0,maxWalkInQueue:4,machineLevel:1,packingLevel:1,staffLevel:1,employees:0,machineProgress:0,packingProgress:0,courierPatience:0,courierStatus:"Away",pickupShelfPackages:0,activeMenu:"none",pizzaUnlocked:!1,pizzaUnlockCost:1e3,objective:"Start the shift",routeHint:"Machine -> Sales, or Machine -> Pack -> Pickup",prompt:"Move with WASD or arrow keys. Drag, Q/E rotate camera; C resets it.",alert:"Coffee machine is warming up.",machineUpgradeCost:45,packingUpgradeCost:55,staffUpgradeCost:70,hireCost:80,courierWaiting:!1};function NA(){const o=ko.useRef(null),t=ko.useRef(null),[i,s]=ko.useState(LA);return ko.useEffect(()=>{if(!o.current)return;const l=new UA(o.current,s);return t.current=l,l.start(),()=>{l.dispose(),t.current=null}},[]),ae.jsxs("main",{className:"game-shell",children:[ae.jsx("div",{ref:o,className:"canvas-host","aria-label":"Coffee Ready 3D game canvas"}),ae.jsxs("section",{className:"cash-pill",children:[ae.jsx("span",{children:"$"}),ae.jsx("strong",{children:i.cash})]}),i.activeMenu==="upgrade"&&ae.jsxs("section",{className:"zone-menu",children:[ae.jsxs("div",{className:"zone-menu__title",children:[ae.jsx("span",{children:"Upgrade"}),ae.jsxs("strong",{children:["Business Lv ",i.shopLevel]})]}),ae.jsx(Kh,{label:"Coffee Machine",level:i.machineLevel,cost:i.machineUpgradeCost,keyName:"1",onClick:()=>t.current?.upgradeMachineAction()}),ae.jsx(Kh,{label:"Packing Speed",level:i.packingLevel,cost:i.packingUpgradeCost,keyName:"2",onClick:()=>t.current?.upgradePackingAction()}),ae.jsx(Kh,{label:"Staff Speed",level:i.staffLevel,cost:i.staffUpgradeCost,keyName:"3",onClick:()=>t.current?.upgradeStaffAction()})]}),i.activeMenu==="hr"&&ae.jsxs("section",{className:"zone-menu",children:[ae.jsxs("div",{className:"zone-menu__title",children:[ae.jsx("span",{children:"HR Department"}),ae.jsxs("strong",{children:[i.employees," Employees"]})]}),ae.jsxs("div",{className:"upgrade-row",children:[ae.jsx("span",{children:"Hire Worker"}),ae.jsx("strong",{children:"Auto sales"}),ae.jsx("kbd",{children:"H"}),ae.jsxs("button",{onClick:()=>t.current?.hireEmployeeAction(),children:["$",i.hireCost]})]}),ae.jsx("div",{className:"menu-hint",children:"Workers carry coffee between machine, sales, pack and pickup."})]}),i.activeMenu==="pizza"&&ae.jsxs("section",{className:"zone-menu",children:[ae.jsxs("div",{className:"zone-menu__title",children:[ae.jsx("span",{children:"Pizza Expansion"}),ae.jsx("strong",{children:i.pizzaUnlocked?"Unlocked":"Locked"})]}),i.pizzaUnlocked?ae.jsx("div",{className:"menu-hint",children:"Pizza machine is active. It adds automatic side income while the shop runs."}):ae.jsxs("div",{className:"upgrade-row",children:[ae.jsx("span",{children:"Unlock Pizza Machine"}),ae.jsx("strong",{children:"New product"}),ae.jsx("kbd",{children:"P"}),ae.jsxs("button",{onClick:()=>t.current?.unlockPizzaMachineAction(),children:["$",i.pizzaUnlockCost]})]})]}),i.alert&&ae.jsx("section",{className:"toast",children:i.alert}),i.status==="gameOver"&&ae.jsx("section",{className:"game-over",children:ae.jsxs("div",{children:[ae.jsx("h1",{children:"Shop Bankrupt"}),ae.jsx("p",{children:"Cash dropped to -$50. Press R to restart the business."}),ae.jsx("button",{onClick:()=>t.current?.restart(),children:"Restart"})]})})]})}function Kh({label:o,level:t,cost:i,keyName:s,onClick:l}){return ae.jsxs("div",{className:"upgrade-row",children:[ae.jsx("span",{children:o}),ae.jsxs("strong",{children:["Lv ",t]}),ae.jsx("kbd",{children:s}),ae.jsxs("button",{onClick:l,children:["$",i]})]})}Jy.createRoot(document.getElementById("root")).render(ae.jsx(Xy.StrictMode,{children:ae.jsx(NA,{})}));
