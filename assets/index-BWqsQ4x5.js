(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const u of a)if(u.type==="childList")for(const f of u.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function n(a){const u={};return a.integrity&&(u.integrity=a.integrity),a.referrerPolicy&&(u.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?u.credentials="include":a.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(a){if(a.ep)return;a.ep=!0;const u=n(a);fetch(a.href,u)}})();function Tm(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var cc={exports:{}},Eo={},fc={exports:{}},mt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gp;function Nv(){if(gp)return mt;gp=1;var o=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),f=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),x=Symbol.iterator;function S(N){return N===null||typeof N!="object"?null:(N=x&&N[x]||N["@@iterator"],typeof N=="function"?N:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,A={};function y(N,ie,ke){this.props=N,this.context=ie,this.refs=A,this.updater=ke||M}y.prototype.isReactComponent={},y.prototype.setState=function(N,ie){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,ie,"setState")},y.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function v(){}v.prototype=y.prototype;function F(N,ie,ke){this.props=N,this.context=ie,this.refs=A,this.updater=ke||M}var L=F.prototype=new v;L.constructor=F,w(L,y.prototype),L.isPureReactComponent=!0;var b=Array.isArray,V=Object.prototype.hasOwnProperty,k={current:null},z={key:!0,ref:!0,__self:!0,__source:!0};function Y(N,ie,ke){var Ge,He={},J=null,fe=null;if(ie!=null)for(Ge in ie.ref!==void 0&&(fe=ie.ref),ie.key!==void 0&&(J=""+ie.key),ie)V.call(ie,Ge)&&!z.hasOwnProperty(Ge)&&(He[Ge]=ie[Ge]);var _e=arguments.length-2;if(_e===1)He.children=ke;else if(1<_e){for(var De=Array(_e),Ne=0;Ne<_e;Ne++)De[Ne]=arguments[Ne+2];He.children=De}if(N&&N.defaultProps)for(Ge in _e=N.defaultProps,_e)He[Ge]===void 0&&(He[Ge]=_e[Ge]);return{$$typeof:o,type:N,key:J,ref:fe,props:He,_owner:k.current}}function P(N,ie){return{$$typeof:o,type:N.type,key:ie,ref:N.ref,props:N.props,_owner:N._owner}}function R(N){return typeof N=="object"&&N!==null&&N.$$typeof===o}function H(N){var ie={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(ke){return ie[ke]})}var Q=/\/+/g;function se(N,ie){return typeof N=="object"&&N!==null&&N.key!=null?H(""+N.key):ie.toString(36)}function ue(N,ie,ke,Ge,He){var J=typeof N;(J==="undefined"||J==="boolean")&&(N=null);var fe=!1;if(N===null)fe=!0;else switch(J){case"string":case"number":fe=!0;break;case"object":switch(N.$$typeof){case o:case e:fe=!0}}if(fe)return fe=N,He=He(fe),N=Ge===""?"."+se(fe,0):Ge,b(He)?(ke="",N!=null&&(ke=N.replace(Q,"$&/")+"/"),ue(He,ie,ke,"",function(Ne){return Ne})):He!=null&&(R(He)&&(He=P(He,ke+(!He.key||fe&&fe.key===He.key?"":(""+He.key).replace(Q,"$&/")+"/")+N)),ie.push(He)),1;if(fe=0,Ge=Ge===""?".":Ge+":",b(N))for(var _e=0;_e<N.length;_e++){J=N[_e];var De=Ge+se(J,_e);fe+=ue(J,ie,ke,De,He)}else if(De=S(N),typeof De=="function")for(N=De.call(N),_e=0;!(J=N.next()).done;)J=J.value,De=Ge+se(J,_e++),fe+=ue(J,ie,ke,De,He);else if(J==="object")throw ie=String(N),Error("Objects are not valid as a React child (found: "+(ie==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":ie)+"). If you meant to render a collection of children, use an array instead.");return fe}function de(N,ie,ke){if(N==null)return N;var Ge=[],He=0;return ue(N,Ge,"","",function(J){return ie.call(ke,J,He++)}),Ge}function oe(N){if(N._status===-1){var ie=N._result;ie=ie(),ie.then(function(ke){(N._status===0||N._status===-1)&&(N._status=1,N._result=ke)},function(ke){(N._status===0||N._status===-1)&&(N._status=2,N._result=ke)}),N._status===-1&&(N._status=0,N._result=ie)}if(N._status===1)return N._result.default;throw N._result}var he={current:null},B={transition:null},ce={ReactCurrentDispatcher:he,ReactCurrentBatchConfig:B,ReactCurrentOwner:k};function ae(){throw Error("act(...) is not supported in production builds of React.")}return mt.Children={map:de,forEach:function(N,ie,ke){de(N,function(){ie.apply(this,arguments)},ke)},count:function(N){var ie=0;return de(N,function(){ie++}),ie},toArray:function(N){return de(N,function(ie){return ie})||[]},only:function(N){if(!R(N))throw Error("React.Children.only expected to receive a single React element child.");return N}},mt.Component=y,mt.Fragment=n,mt.Profiler=a,mt.PureComponent=F,mt.StrictMode=r,mt.Suspense=m,mt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ce,mt.act=ae,mt.cloneElement=function(N,ie,ke){if(N==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+N+".");var Ge=w({},N.props),He=N.key,J=N.ref,fe=N._owner;if(ie!=null){if(ie.ref!==void 0&&(J=ie.ref,fe=k.current),ie.key!==void 0&&(He=""+ie.key),N.type&&N.type.defaultProps)var _e=N.type.defaultProps;for(De in ie)V.call(ie,De)&&!z.hasOwnProperty(De)&&(Ge[De]=ie[De]===void 0&&_e!==void 0?_e[De]:ie[De])}var De=arguments.length-2;if(De===1)Ge.children=ke;else if(1<De){_e=Array(De);for(var Ne=0;Ne<De;Ne++)_e[Ne]=arguments[Ne+2];Ge.children=_e}return{$$typeof:o,type:N.type,key:He,ref:J,props:Ge,_owner:fe}},mt.createContext=function(N){return N={$$typeof:f,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},N.Provider={$$typeof:u,_context:N},N.Consumer=N},mt.createElement=Y,mt.createFactory=function(N){var ie=Y.bind(null,N);return ie.type=N,ie},mt.createRef=function(){return{current:null}},mt.forwardRef=function(N){return{$$typeof:d,render:N}},mt.isValidElement=R,mt.lazy=function(N){return{$$typeof:_,_payload:{_status:-1,_result:N},_init:oe}},mt.memo=function(N,ie){return{$$typeof:p,type:N,compare:ie===void 0?null:ie}},mt.startTransition=function(N){var ie=B.transition;B.transition={};try{N()}finally{B.transition=ie}},mt.unstable_act=ae,mt.useCallback=function(N,ie){return he.current.useCallback(N,ie)},mt.useContext=function(N){return he.current.useContext(N)},mt.useDebugValue=function(){},mt.useDeferredValue=function(N){return he.current.useDeferredValue(N)},mt.useEffect=function(N,ie){return he.current.useEffect(N,ie)},mt.useId=function(){return he.current.useId()},mt.useImperativeHandle=function(N,ie,ke){return he.current.useImperativeHandle(N,ie,ke)},mt.useInsertionEffect=function(N,ie){return he.current.useInsertionEffect(N,ie)},mt.useLayoutEffect=function(N,ie){return he.current.useLayoutEffect(N,ie)},mt.useMemo=function(N,ie){return he.current.useMemo(N,ie)},mt.useReducer=function(N,ie,ke){return he.current.useReducer(N,ie,ke)},mt.useRef=function(N){return he.current.useRef(N)},mt.useState=function(N){return he.current.useState(N)},mt.useSyncExternalStore=function(N,ie,ke){return he.current.useSyncExternalStore(N,ie,ke)},mt.useTransition=function(){return he.current.useTransition()},mt.version="18.3.1",mt}var vp;function kf(){return vp||(vp=1,fc.exports=Nv()),fc.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _p;function Uv(){if(_p)return Eo;_p=1;var o=kf(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function f(d,m,p){var _,x={},S=null,M=null;p!==void 0&&(S=""+p),m.key!==void 0&&(S=""+m.key),m.ref!==void 0&&(M=m.ref);for(_ in m)r.call(m,_)&&!u.hasOwnProperty(_)&&(x[_]=m[_]);if(d&&d.defaultProps)for(_ in m=d.defaultProps,m)x[_]===void 0&&(x[_]=m[_]);return{$$typeof:e,type:d,key:S,ref:M,props:x,_owner:a.current}}return Eo.Fragment=n,Eo.jsx=f,Eo.jsxs=f,Eo}var xp;function Iv(){return xp||(xp=1,cc.exports=Uv()),cc.exports}var pe=Iv(),Bn=kf();const Fv=Tm(Bn);var Ya={},dc={exports:{}},Cn={},hc={exports:{}},pc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sp;function Ov(){return Sp||(Sp=1,(function(o){function e(B,ce){var ae=B.length;B.push(ce);e:for(;0<ae;){var N=ae-1>>>1,ie=B[N];if(0<a(ie,ce))B[N]=ce,B[ae]=ie,ae=N;else break e}}function n(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var ce=B[0],ae=B.pop();if(ae!==ce){B[0]=ae;e:for(var N=0,ie=B.length,ke=ie>>>1;N<ke;){var Ge=2*(N+1)-1,He=B[Ge],J=Ge+1,fe=B[J];if(0>a(He,ae))J<ie&&0>a(fe,He)?(B[N]=fe,B[J]=ae,N=J):(B[N]=He,B[Ge]=ae,N=Ge);else if(J<ie&&0>a(fe,ae))B[N]=fe,B[J]=ae,N=J;else break e}}return ce}function a(B,ce){var ae=B.sortIndex-ce.sortIndex;return ae!==0?ae:B.id-ce.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var f=Date,d=f.now();o.unstable_now=function(){return f.now()-d}}var m=[],p=[],_=1,x=null,S=3,M=!1,w=!1,A=!1,y=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,F=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function L(B){for(var ce=n(p);ce!==null;){if(ce.callback===null)r(p);else if(ce.startTime<=B)r(p),ce.sortIndex=ce.expirationTime,e(m,ce);else break;ce=n(p)}}function b(B){if(A=!1,L(B),!w)if(n(m)!==null)w=!0,oe(V);else{var ce=n(p);ce!==null&&he(b,ce.startTime-B)}}function V(B,ce){w=!1,A&&(A=!1,v(Y),Y=-1),M=!0;var ae=S;try{for(L(ce),x=n(m);x!==null&&(!(x.expirationTime>ce)||B&&!H());){var N=x.callback;if(typeof N=="function"){x.callback=null,S=x.priorityLevel;var ie=N(x.expirationTime<=ce);ce=o.unstable_now(),typeof ie=="function"?x.callback=ie:x===n(m)&&r(m),L(ce)}else r(m);x=n(m)}if(x!==null)var ke=!0;else{var Ge=n(p);Ge!==null&&he(b,Ge.startTime-ce),ke=!1}return ke}finally{x=null,S=ae,M=!1}}var k=!1,z=null,Y=-1,P=5,R=-1;function H(){return!(o.unstable_now()-R<P)}function Q(){if(z!==null){var B=o.unstable_now();R=B;var ce=!0;try{ce=z(!0,B)}finally{ce?se():(k=!1,z=null)}}else k=!1}var se;if(typeof F=="function")se=function(){F(Q)};else if(typeof MessageChannel<"u"){var ue=new MessageChannel,de=ue.port2;ue.port1.onmessage=Q,se=function(){de.postMessage(null)}}else se=function(){y(Q,0)};function oe(B){z=B,k||(k=!0,se())}function he(B,ce){Y=y(function(){B(o.unstable_now())},ce)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(B){B.callback=null},o.unstable_continueExecution=function(){w||M||(w=!0,oe(V))},o.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<B?Math.floor(1e3/B):5},o.unstable_getCurrentPriorityLevel=function(){return S},o.unstable_getFirstCallbackNode=function(){return n(m)},o.unstable_next=function(B){switch(S){case 1:case 2:case 3:var ce=3;break;default:ce=S}var ae=S;S=ce;try{return B()}finally{S=ae}},o.unstable_pauseExecution=function(){},o.unstable_requestPaint=function(){},o.unstable_runWithPriority=function(B,ce){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var ae=S;S=B;try{return ce()}finally{S=ae}},o.unstable_scheduleCallback=function(B,ce,ae){var N=o.unstable_now();switch(typeof ae=="object"&&ae!==null?(ae=ae.delay,ae=typeof ae=="number"&&0<ae?N+ae:N):ae=N,B){case 1:var ie=-1;break;case 2:ie=250;break;case 5:ie=1073741823;break;case 4:ie=1e4;break;default:ie=5e3}return ie=ae+ie,B={id:_++,callback:ce,priorityLevel:B,startTime:ae,expirationTime:ie,sortIndex:-1},ae>N?(B.sortIndex=ae,e(p,B),n(m)===null&&B===n(p)&&(A?(v(Y),Y=-1):A=!0,he(b,ae-N))):(B.sortIndex=ie,e(m,B),w||M||(w=!0,oe(V))),B},o.unstable_shouldYield=H,o.unstable_wrapCallback=function(B){var ce=S;return function(){var ae=S;S=ce;try{return B.apply(this,arguments)}finally{S=ae}}}})(pc)),pc}var yp;function kv(){return yp||(yp=1,hc.exports=Ov()),hc.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mp;function zv(){if(Mp)return Cn;Mp=1;var o=kf(),e=kv();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,s=1;s<arguments.length;s++)i+="&args[]="+encodeURIComponent(arguments[s]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,a={};function u(t,i){f(t,i),f(t+"Capture",i)}function f(t,i){for(a[t]=i,t=0;t<i.length;t++)r.add(i[t])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),m=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_={},x={};function S(t){return m.call(x,t)?!0:m.call(_,t)?!1:p.test(t)?x[t]=!0:(_[t]=!0,!1)}function M(t,i,s,l){if(s!==null&&s.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return l?!1:s!==null?!s.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function w(t,i,s,l){if(i===null||typeof i>"u"||M(t,i,s,l))return!0;if(l)return!1;if(s!==null)switch(s.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function A(t,i,s,l,c,h,E){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=l,this.attributeNamespace=c,this.mustUseProperty=s,this.propertyName=t,this.type=i,this.sanitizeURL=h,this.removeEmptyString=E}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){y[t]=new A(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];y[i]=new A(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){y[t]=new A(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){y[t]=new A(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){y[t]=new A(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){y[t]=new A(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){y[t]=new A(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){y[t]=new A(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){y[t]=new A(t,5,!1,t.toLowerCase(),null,!1,!1)});var v=/[\-:]([a-z])/g;function F(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(v,F);y[i]=new A(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(v,F);y[i]=new A(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(v,F);y[i]=new A(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){y[t]=new A(t,1,!1,t.toLowerCase(),null,!1,!1)}),y.xlinkHref=new A("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){y[t]=new A(t,1,!1,t.toLowerCase(),null,!0,!0)});function L(t,i,s,l){var c=y.hasOwnProperty(i)?y[i]:null;(c!==null?c.type!==0:l||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(w(i,s,c,l)&&(s=null),l||c===null?S(i)&&(s===null?t.removeAttribute(i):t.setAttribute(i,""+s)):c.mustUseProperty?t[c.propertyName]=s===null?c.type===3?!1:"":s:(i=c.attributeName,l=c.attributeNamespace,s===null?t.removeAttribute(i):(c=c.type,s=c===3||c===4&&s===!0?"":""+s,l?t.setAttributeNS(l,i,s):t.setAttribute(i,s))))}var b=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,V=Symbol.for("react.element"),k=Symbol.for("react.portal"),z=Symbol.for("react.fragment"),Y=Symbol.for("react.strict_mode"),P=Symbol.for("react.profiler"),R=Symbol.for("react.provider"),H=Symbol.for("react.context"),Q=Symbol.for("react.forward_ref"),se=Symbol.for("react.suspense"),ue=Symbol.for("react.suspense_list"),de=Symbol.for("react.memo"),oe=Symbol.for("react.lazy"),he=Symbol.for("react.offscreen"),B=Symbol.iterator;function ce(t){return t===null||typeof t!="object"?null:(t=B&&t[B]||t["@@iterator"],typeof t=="function"?t:null)}var ae=Object.assign,N;function ie(t){if(N===void 0)try{throw Error()}catch(s){var i=s.stack.trim().match(/\n( *(at )?)/);N=i&&i[1]||""}return`
`+N+t}var ke=!1;function Ge(t,i){if(!t||ke)return"";ke=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(ee){var l=ee}Reflect.construct(t,[],i)}else{try{i.call()}catch(ee){l=ee}t.call(i.prototype)}else{try{throw Error()}catch(ee){l=ee}t()}}catch(ee){if(ee&&l&&typeof ee.stack=="string"){for(var c=ee.stack.split(`
`),h=l.stack.split(`
`),E=c.length-1,D=h.length-1;1<=E&&0<=D&&c[E]!==h[D];)D--;for(;1<=E&&0<=D;E--,D--)if(c[E]!==h[D]){if(E!==1||D!==1)do if(E--,D--,0>D||c[E]!==h[D]){var O=`
`+c[E].replace(" at new "," at ");return t.displayName&&O.includes("<anonymous>")&&(O=O.replace("<anonymous>",t.displayName)),O}while(1<=E&&0<=D);break}}}finally{ke=!1,Error.prepareStackTrace=s}return(t=t?t.displayName||t.name:"")?ie(t):""}function He(t){switch(t.tag){case 5:return ie(t.type);case 16:return ie("Lazy");case 13:return ie("Suspense");case 19:return ie("SuspenseList");case 0:case 2:case 15:return t=Ge(t.type,!1),t;case 11:return t=Ge(t.type.render,!1),t;case 1:return t=Ge(t.type,!0),t;default:return""}}function J(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case z:return"Fragment";case k:return"Portal";case P:return"Profiler";case Y:return"StrictMode";case se:return"Suspense";case ue:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case H:return(t.displayName||"Context")+".Consumer";case R:return(t._context.displayName||"Context")+".Provider";case Q:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case de:return i=t.displayName||null,i!==null?i:J(t.type)||"Memo";case oe:i=t._payload,t=t._init;try{return J(t(i))}catch{}}return null}function fe(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return J(i);case 8:return i===Y?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function _e(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function De(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Ne(t){var i=De(t)?"checked":"value",s=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),l=""+t[i];if(!t.hasOwnProperty(i)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var c=s.get,h=s.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return c.call(this)},set:function(E){l=""+E,h.call(this,E)}}),Object.defineProperty(t,i,{enumerable:s.enumerable}),{getValue:function(){return l},setValue:function(E){l=""+E},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function dt(t){t._valueTracker||(t._valueTracker=Ne(t))}function Wt(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var s=i.getValue(),l="";return t&&(l=De(t)?t.checked?"true":"false":t.value),t=l,t!==s?(i.setValue(t),!0):!1}function U(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function At(t,i){var s=i.checked;return ae({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:s??t._wrapperState.initialChecked})}function st(t,i){var s=i.defaultValue==null?"":i.defaultValue,l=i.checked!=null?i.checked:i.defaultChecked;s=_e(i.value!=null?i.value:s),t._wrapperState={initialChecked:l,initialValue:s,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function Je(t,i){i=i.checked,i!=null&&L(t,"checked",i,!1)}function Ve(t,i){Je(t,i);var s=_e(i.value),l=i.type;if(s!=null)l==="number"?(s===0&&t.value===""||t.value!=s)&&(t.value=""+s):t.value!==""+s&&(t.value=""+s);else if(l==="submit"||l==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?ze(t,i.type,s):i.hasOwnProperty("defaultValue")&&ze(t,i.type,_e(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function _t(t,i,s){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var l=i.type;if(!(l!=="submit"&&l!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,s||i===t.value||(t.value=i),t.defaultValue=i}s=t.name,s!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,s!==""&&(t.name=s)}function ze(t,i,s){(i!=="number"||U(t.ownerDocument)!==t)&&(s==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+s&&(t.defaultValue=""+s))}var ot=Array.isArray;function Pt(t,i,s,l){if(t=t.options,i){i={};for(var c=0;c<s.length;c++)i["$"+s[c]]=!0;for(s=0;s<t.length;s++)c=i.hasOwnProperty("$"+t[s].value),t[s].selected!==c&&(t[s].selected=c),c&&l&&(t[s].defaultSelected=!0)}else{for(s=""+_e(s),i=null,c=0;c<t.length;c++){if(t[c].value===s){t[c].selected=!0,l&&(t[c].defaultSelected=!0);return}i!==null||t[c].disabled||(i=t[c])}i!==null&&(i.selected=!0)}}function Dt(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return ae({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function C(t,i){var s=i.value;if(s==null){if(s=i.children,i=i.defaultValue,s!=null){if(i!=null)throw Error(n(92));if(ot(s)){if(1<s.length)throw Error(n(93));s=s[0]}i=s}i==null&&(i=""),s=i}t._wrapperState={initialValue:_e(s)}}function g(t,i){var s=_e(i.value),l=_e(i.defaultValue);s!=null&&(s=""+s,s!==t.value&&(t.value=s),i.defaultValue==null&&t.defaultValue!==s&&(t.defaultValue=s)),l!=null&&(t.defaultValue=""+l)}function I(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function $(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function le(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?$(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Z,Le=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,s,l,c){MSApp.execUnsafeLocalFunction(function(){return t(i,s,l,c)})}:t})(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(Z=Z||document.createElement("div"),Z.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Z.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function ye(t,i){if(i){var s=t.firstChild;if(s&&s===t.lastChild&&s.nodeType===3){s.nodeValue=i;return}}t.textContent=i}var Ue={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},je=["Webkit","ms","Moz","O"];Object.keys(Ue).forEach(function(t){je.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),Ue[i]=Ue[t]})});function Te(t,i,s){return i==null||typeof i=="boolean"||i===""?"":s||typeof i!="number"||i===0||Ue.hasOwnProperty(t)&&Ue[t]?(""+i).trim():i+"px"}function Pe(t,i){t=t.style;for(var s in i)if(i.hasOwnProperty(s)){var l=s.indexOf("--")===0,c=Te(s,i[s],l);s==="float"&&(s="cssFloat"),l?t.setProperty(s,c):t[s]=c}}var it=ae({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function $e(t,i){if(i){if(it[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function Re(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ct=null;function G(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Me=null,Ae=null,Ie=null;function Se(t){if(t=ao(t)){if(typeof Me!="function")throw Error(n(280));var i=t.stateNode;i&&(i=la(i),Me(t.stateNode,t.type,i))}}function me(t){Ae?Ie?Ie.push(t):Ie=[t]:Ae=t}function Ye(){if(Ae){var t=Ae,i=Ie;if(Ie=Ae=null,Se(t),i)for(t=0;t<i.length;t++)Se(i[t])}}function ut(t,i){return t(i)}function Ct(){}var St=!1;function Vn(t,i,s){if(St)return t(i,s);St=!0;try{return ut(t,i,s)}finally{St=!1,(Ae!==null||Ie!==null)&&(Ct(),Ye())}}function ln(t,i){var s=t.stateNode;if(s===null)return null;var l=la(s);if(l===null)return null;s=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(s&&typeof s!="function")throw Error(n(231,i,typeof s));return s}var qr=!1;if(d)try{var Nn={};Object.defineProperty(Nn,"passive",{get:function(){qr=!0}}),window.addEventListener("test",Nn,Nn),window.removeEventListener("test",Nn,Nn)}catch{qr=!1}function Ws(t,i,s,l,c,h,E,D,O){var ee=Array.prototype.slice.call(arguments,3);try{i.apply(s,ee)}catch(ve){this.onError(ve)}}var Gi=!1,Sr=null,Si=!1,$r=null,Kr={onError:function(t){Gi=!0,Sr=t}};function Ho(t,i,s,l,c,h,E,D,O){Gi=!1,Sr=null,Ws.apply(Kr,arguments)}function Vo(t,i,s,l,c,h,E,D,O){if(Ho.apply(this,arguments),Gi){if(Gi){var ee=Sr;Gi=!1,Sr=null}else throw Error(n(198));Si||(Si=!0,$r=ee)}}function yi(t){var i=t,s=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(s=i.return),t=i.return;while(t)}return i.tag===3?s:null}function Go(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function Wo(t){if(yi(t)!==t)throw Error(n(188))}function Nl(t){var i=t.alternate;if(!i){if(i=yi(t),i===null)throw Error(n(188));return i!==t?null:t}for(var s=t,l=i;;){var c=s.return;if(c===null)break;var h=c.alternate;if(h===null){if(l=c.return,l!==null){s=l;continue}break}if(c.child===h.child){for(h=c.child;h;){if(h===s)return Wo(c),t;if(h===l)return Wo(c),i;h=h.sibling}throw Error(n(188))}if(s.return!==l.return)s=c,l=h;else{for(var E=!1,D=c.child;D;){if(D===s){E=!0,s=c,l=h;break}if(D===l){E=!0,l=c,s=h;break}D=D.sibling}if(!E){for(D=h.child;D;){if(D===s){E=!0,s=h,l=c;break}if(D===l){E=!0,l=h,s=c;break}D=D.sibling}if(!E)throw Error(n(189))}}if(s.alternate!==l)throw Error(n(190))}if(s.tag!==3)throw Error(n(188));return s.stateNode.current===s?t:i}function Xo(t){return t=Nl(t),t!==null?jo(t):null}function jo(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=jo(t);if(i!==null)return i;t=t.sibling}return null}var T=e.unstable_scheduleCallback,j=e.unstable_cancelCallback,ne=e.unstable_shouldYield,re=e.unstable_requestPaint,X=e.unstable_now,Ee=e.unstable_getCurrentPriorityLevel,Ce=e.unstable_ImmediatePriority,We=e.unstable_UserBlockingPriority,Fe=e.unstable_NormalPriority,nt=e.unstable_LowPriority,rt=e.unstable_IdlePriority,Ze=null,at=null;function Rt(t){if(at&&typeof at.onCommitFiberRoot=="function")try{at.onCommitFiberRoot(Ze,t,void 0,(t.current.flags&128)===128)}catch{}}var yt=Math.clz32?Math.clz32:Qe,Ut=Math.log,bt=Math.LN2;function Qe(t){return t>>>=0,t===0?32:31-(Ut(t)/bt|0)|0}var Lt=64,gt=4194304;function Kt(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Jn(t,i){var s=t.pendingLanes;if(s===0)return 0;var l=0,c=t.suspendedLanes,h=t.pingedLanes,E=s&268435455;if(E!==0){var D=E&~c;D!==0?l=Kt(D):(h&=E,h!==0&&(l=Kt(h)))}else E=s&~c,E!==0?l=Kt(E):h!==0&&(l=Kt(h));if(l===0)return 0;if(i!==0&&i!==l&&(i&c)===0&&(c=l&-l,h=i&-i,c>=h||c===16&&(h&4194240)!==0))return i;if((l&4)!==0&&(l|=s&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=l;0<i;)s=31-yt(i),c=1<<s,l|=t[s],i&=~c;return l}function vn(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function yr(t,i){for(var s=t.suspendedLanes,l=t.pingedLanes,c=t.expirationTimes,h=t.pendingLanes;0<h;){var E=31-yt(h),D=1<<E,O=c[E];O===-1?((D&s)===0||(D&l)!==0)&&(c[E]=vn(D,i)):O<=i&&(t.expiredLanes|=D),h&=~D}}function It(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function _n(){var t=Lt;return Lt<<=1,(Lt&4194240)===0&&(Lt=64),t}function un(t){for(var i=[],s=0;31>s;s++)i.push(t);return i}function Xt(t,i,s){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-yt(i),t[i]=s}function cn(t,i){var s=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var l=t.eventTimes;for(t=t.expirationTimes;0<s;){var c=31-yt(s),h=1<<c;i[c]=0,l[c]=-1,t[c]=-1,s&=~h}}function Mr(t,i){var s=t.entangledLanes|=i;for(t=t.entanglements;s;){var l=31-yt(s),c=1<<l;c&i|t[l]&i&&(t[l]|=i),s&=~c}}var vt=0;function qf(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var $f,Ul,Kf,Zf,Qf,Il=!1,Yo=[],Wi=null,Xi=null,ji=null,Xs=new Map,js=new Map,Yi=[],tg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Jf(t,i){switch(t){case"focusin":case"focusout":Wi=null;break;case"dragenter":case"dragleave":Xi=null;break;case"mouseover":case"mouseout":ji=null;break;case"pointerover":case"pointerout":Xs.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":js.delete(i.pointerId)}}function Ys(t,i,s,l,c,h){return t===null||t.nativeEvent!==h?(t={blockedOn:i,domEventName:s,eventSystemFlags:l,nativeEvent:h,targetContainers:[c]},i!==null&&(i=ao(i),i!==null&&Ul(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,c!==null&&i.indexOf(c)===-1&&i.push(c),t)}function ng(t,i,s,l,c){switch(i){case"focusin":return Wi=Ys(Wi,t,i,s,l,c),!0;case"dragenter":return Xi=Ys(Xi,t,i,s,l,c),!0;case"mouseover":return ji=Ys(ji,t,i,s,l,c),!0;case"pointerover":var h=c.pointerId;return Xs.set(h,Ys(Xs.get(h)||null,t,i,s,l,c)),!0;case"gotpointercapture":return h=c.pointerId,js.set(h,Ys(js.get(h)||null,t,i,s,l,c)),!0}return!1}function ed(t){var i=Er(t.target);if(i!==null){var s=yi(i);if(s!==null){if(i=s.tag,i===13){if(i=Go(s),i!==null){t.blockedOn=i,Qf(t.priority,function(){Kf(s)});return}}else if(i===3&&s.stateNode.current.memoizedState.isDehydrated){t.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}t.blockedOn=null}function qo(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var s=Ol(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(s===null){s=t.nativeEvent;var l=new s.constructor(s.type,s);ct=l,s.target.dispatchEvent(l),ct=null}else return i=ao(s),i!==null&&Ul(i),t.blockedOn=s,!1;i.shift()}return!0}function td(t,i,s){qo(t)&&s.delete(i)}function ig(){Il=!1,Wi!==null&&qo(Wi)&&(Wi=null),Xi!==null&&qo(Xi)&&(Xi=null),ji!==null&&qo(ji)&&(ji=null),Xs.forEach(td),js.forEach(td)}function qs(t,i){t.blockedOn===i&&(t.blockedOn=null,Il||(Il=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,ig)))}function $s(t){function i(c){return qs(c,t)}if(0<Yo.length){qs(Yo[0],t);for(var s=1;s<Yo.length;s++){var l=Yo[s];l.blockedOn===t&&(l.blockedOn=null)}}for(Wi!==null&&qs(Wi,t),Xi!==null&&qs(Xi,t),ji!==null&&qs(ji,t),Xs.forEach(i),js.forEach(i),s=0;s<Yi.length;s++)l=Yi[s],l.blockedOn===t&&(l.blockedOn=null);for(;0<Yi.length&&(s=Yi[0],s.blockedOn===null);)ed(s),s.blockedOn===null&&Yi.shift()}var Zr=b.ReactCurrentBatchConfig,$o=!0;function rg(t,i,s,l){var c=vt,h=Zr.transition;Zr.transition=null;try{vt=1,Fl(t,i,s,l)}finally{vt=c,Zr.transition=h}}function sg(t,i,s,l){var c=vt,h=Zr.transition;Zr.transition=null;try{vt=4,Fl(t,i,s,l)}finally{vt=c,Zr.transition=h}}function Fl(t,i,s,l){if($o){var c=Ol(t,i,s,l);if(c===null)eu(t,i,l,Ko,s),Jf(t,l);else if(ng(c,t,i,s,l))l.stopPropagation();else if(Jf(t,l),i&4&&-1<tg.indexOf(t)){for(;c!==null;){var h=ao(c);if(h!==null&&$f(h),h=Ol(t,i,s,l),h===null&&eu(t,i,l,Ko,s),h===c)break;c=h}c!==null&&l.stopPropagation()}else eu(t,i,l,null,s)}}var Ko=null;function Ol(t,i,s,l){if(Ko=null,t=G(l),t=Er(t),t!==null)if(i=yi(t),i===null)t=null;else if(s=i.tag,s===13){if(t=Go(i),t!==null)return t;t=null}else if(s===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return Ko=t,null}function nd(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ee()){case Ce:return 1;case We:return 4;case Fe:case nt:return 16;case rt:return 536870912;default:return 16}default:return 16}}var qi=null,kl=null,Zo=null;function id(){if(Zo)return Zo;var t,i=kl,s=i.length,l,c="value"in qi?qi.value:qi.textContent,h=c.length;for(t=0;t<s&&i[t]===c[t];t++);var E=s-t;for(l=1;l<=E&&i[s-l]===c[h-l];l++);return Zo=c.slice(t,1<l?1-l:void 0)}function Qo(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function Jo(){return!0}function rd(){return!1}function Un(t){function i(s,l,c,h,E){this._reactName=s,this._targetInst=c,this.type=l,this.nativeEvent=h,this.target=E,this.currentTarget=null;for(var D in t)t.hasOwnProperty(D)&&(s=t[D],this[D]=s?s(h):h[D]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?Jo:rd,this.isPropagationStopped=rd,this}return ae(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=Jo)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=Jo)},persist:function(){},isPersistent:Jo}),i}var Qr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},zl=Un(Qr),Ks=ae({},Qr,{view:0,detail:0}),og=Un(Ks),Bl,Hl,Zs,ea=ae({},Ks,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Gl,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Zs&&(Zs&&t.type==="mousemove"?(Bl=t.screenX-Zs.screenX,Hl=t.screenY-Zs.screenY):Hl=Bl=0,Zs=t),Bl)},movementY:function(t){return"movementY"in t?t.movementY:Hl}}),sd=Un(ea),ag=ae({},ea,{dataTransfer:0}),lg=Un(ag),ug=ae({},Ks,{relatedTarget:0}),Vl=Un(ug),cg=ae({},Qr,{animationName:0,elapsedTime:0,pseudoElement:0}),fg=Un(cg),dg=ae({},Qr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),hg=Un(dg),pg=ae({},Qr,{data:0}),od=Un(pg),mg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},gg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},vg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function _g(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=vg[t])?!!i[t]:!1}function Gl(){return _g}var xg=ae({},Ks,{key:function(t){if(t.key){var i=mg[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=Qo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?gg[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Gl,charCode:function(t){return t.type==="keypress"?Qo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Qo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Sg=Un(xg),yg=ae({},ea,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ad=Un(yg),Mg=ae({},Ks,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Gl}),Eg=Un(Mg),Tg=ae({},Qr,{propertyName:0,elapsedTime:0,pseudoElement:0}),wg=Un(Tg),Ag=ae({},ea,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Rg=Un(Ag),Cg=[9,13,27,32],Wl=d&&"CompositionEvent"in window,Qs=null;d&&"documentMode"in document&&(Qs=document.documentMode);var bg=d&&"TextEvent"in window&&!Qs,ld=d&&(!Wl||Qs&&8<Qs&&11>=Qs),ud=" ",cd=!1;function fd(t,i){switch(t){case"keyup":return Cg.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function dd(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Jr=!1;function Pg(t,i){switch(t){case"compositionend":return dd(i);case"keypress":return i.which!==32?null:(cd=!0,ud);case"textInput":return t=i.data,t===ud&&cd?null:t;default:return null}}function Dg(t,i){if(Jr)return t==="compositionend"||!Wl&&fd(t,i)?(t=id(),Zo=kl=qi=null,Jr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return ld&&i.locale!=="ko"?null:i.data;default:return null}}var Lg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function hd(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!Lg[t.type]:i==="textarea"}function pd(t,i,s,l){me(l),i=sa(i,"onChange"),0<i.length&&(s=new zl("onChange","change",null,s,l),t.push({event:s,listeners:i}))}var Js=null,eo=null;function Ng(t){Ld(t,0)}function ta(t){var i=rs(t);if(Wt(i))return t}function Ug(t,i){if(t==="change")return i}var md=!1;if(d){var Xl;if(d){var jl="oninput"in document;if(!jl){var gd=document.createElement("div");gd.setAttribute("oninput","return;"),jl=typeof gd.oninput=="function"}Xl=jl}else Xl=!1;md=Xl&&(!document.documentMode||9<document.documentMode)}function vd(){Js&&(Js.detachEvent("onpropertychange",_d),eo=Js=null)}function _d(t){if(t.propertyName==="value"&&ta(eo)){var i=[];pd(i,eo,t,G(t)),Vn(Ng,i)}}function Ig(t,i,s){t==="focusin"?(vd(),Js=i,eo=s,Js.attachEvent("onpropertychange",_d)):t==="focusout"&&vd()}function Fg(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ta(eo)}function Og(t,i){if(t==="click")return ta(i)}function kg(t,i){if(t==="input"||t==="change")return ta(i)}function zg(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var ei=typeof Object.is=="function"?Object.is:zg;function to(t,i){if(ei(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var s=Object.keys(t),l=Object.keys(i);if(s.length!==l.length)return!1;for(l=0;l<s.length;l++){var c=s[l];if(!m.call(i,c)||!ei(t[c],i[c]))return!1}return!0}function xd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Sd(t,i){var s=xd(t);t=0;for(var l;s;){if(s.nodeType===3){if(l=t+s.textContent.length,t<=i&&l>=i)return{node:s,offset:i-t};t=l}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=xd(s)}}function yd(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?yd(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function Md(){for(var t=window,i=U();i instanceof t.HTMLIFrameElement;){try{var s=typeof i.contentWindow.location.href=="string"}catch{s=!1}if(s)t=i.contentWindow;else break;i=U(t.document)}return i}function Yl(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function Bg(t){var i=Md(),s=t.focusedElem,l=t.selectionRange;if(i!==s&&s&&s.ownerDocument&&yd(s.ownerDocument.documentElement,s)){if(l!==null&&Yl(s)){if(i=l.start,t=l.end,t===void 0&&(t=i),"selectionStart"in s)s.selectionStart=i,s.selectionEnd=Math.min(t,s.value.length);else if(t=(i=s.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var c=s.textContent.length,h=Math.min(l.start,c);l=l.end===void 0?h:Math.min(l.end,c),!t.extend&&h>l&&(c=l,l=h,h=c),c=Sd(s,h);var E=Sd(s,l);c&&E&&(t.rangeCount!==1||t.anchorNode!==c.node||t.anchorOffset!==c.offset||t.focusNode!==E.node||t.focusOffset!==E.offset)&&(i=i.createRange(),i.setStart(c.node,c.offset),t.removeAllRanges(),h>l?(t.addRange(i),t.extend(E.node,E.offset)):(i.setEnd(E.node,E.offset),t.addRange(i)))}}for(i=[],t=s;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<i.length;s++)t=i[s],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Hg=d&&"documentMode"in document&&11>=document.documentMode,es=null,ql=null,no=null,$l=!1;function Ed(t,i,s){var l=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;$l||es==null||es!==U(l)||(l=es,"selectionStart"in l&&Yl(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),no&&to(no,l)||(no=l,l=sa(ql,"onSelect"),0<l.length&&(i=new zl("onSelect","select",null,i,s),t.push({event:i,listeners:l}),i.target=es)))}function na(t,i){var s={};return s[t.toLowerCase()]=i.toLowerCase(),s["Webkit"+t]="webkit"+i,s["Moz"+t]="moz"+i,s}var ts={animationend:na("Animation","AnimationEnd"),animationiteration:na("Animation","AnimationIteration"),animationstart:na("Animation","AnimationStart"),transitionend:na("Transition","TransitionEnd")},Kl={},Td={};d&&(Td=document.createElement("div").style,"AnimationEvent"in window||(delete ts.animationend.animation,delete ts.animationiteration.animation,delete ts.animationstart.animation),"TransitionEvent"in window||delete ts.transitionend.transition);function ia(t){if(Kl[t])return Kl[t];if(!ts[t])return t;var i=ts[t],s;for(s in i)if(i.hasOwnProperty(s)&&s in Td)return Kl[t]=i[s];return t}var wd=ia("animationend"),Ad=ia("animationiteration"),Rd=ia("animationstart"),Cd=ia("transitionend"),bd=new Map,Pd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function $i(t,i){bd.set(t,i),u(i,[t])}for(var Zl=0;Zl<Pd.length;Zl++){var Ql=Pd[Zl],Vg=Ql.toLowerCase(),Gg=Ql[0].toUpperCase()+Ql.slice(1);$i(Vg,"on"+Gg)}$i(wd,"onAnimationEnd"),$i(Ad,"onAnimationIteration"),$i(Rd,"onAnimationStart"),$i("dblclick","onDoubleClick"),$i("focusin","onFocus"),$i("focusout","onBlur"),$i(Cd,"onTransitionEnd"),f("onMouseEnter",["mouseout","mouseover"]),f("onMouseLeave",["mouseout","mouseover"]),f("onPointerEnter",["pointerout","pointerover"]),f("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var io="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Wg=new Set("cancel close invalid load scroll toggle".split(" ").concat(io));function Dd(t,i,s){var l=t.type||"unknown-event";t.currentTarget=s,Vo(l,i,void 0,t),t.currentTarget=null}function Ld(t,i){i=(i&4)!==0;for(var s=0;s<t.length;s++){var l=t[s],c=l.event;l=l.listeners;e:{var h=void 0;if(i)for(var E=l.length-1;0<=E;E--){var D=l[E],O=D.instance,ee=D.currentTarget;if(D=D.listener,O!==h&&c.isPropagationStopped())break e;Dd(c,D,ee),h=O}else for(E=0;E<l.length;E++){if(D=l[E],O=D.instance,ee=D.currentTarget,D=D.listener,O!==h&&c.isPropagationStopped())break e;Dd(c,D,ee),h=O}}}if(Si)throw t=$r,Si=!1,$r=null,t}function Ot(t,i){var s=i[ou];s===void 0&&(s=i[ou]=new Set);var l=t+"__bubble";s.has(l)||(Nd(i,t,2,!1),s.add(l))}function Jl(t,i,s){var l=0;i&&(l|=4),Nd(s,t,l,i)}var ra="_reactListening"+Math.random().toString(36).slice(2);function ro(t){if(!t[ra]){t[ra]=!0,r.forEach(function(s){s!=="selectionchange"&&(Wg.has(s)||Jl(s,!1,t),Jl(s,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[ra]||(i[ra]=!0,Jl("selectionchange",!1,i))}}function Nd(t,i,s,l){switch(nd(i)){case 1:var c=rg;break;case 4:c=sg;break;default:c=Fl}s=c.bind(null,i,s,t),c=void 0,!qr||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(c=!0),l?c!==void 0?t.addEventListener(i,s,{capture:!0,passive:c}):t.addEventListener(i,s,!0):c!==void 0?t.addEventListener(i,s,{passive:c}):t.addEventListener(i,s,!1)}function eu(t,i,s,l,c){var h=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var E=l.tag;if(E===3||E===4){var D=l.stateNode.containerInfo;if(D===c||D.nodeType===8&&D.parentNode===c)break;if(E===4)for(E=l.return;E!==null;){var O=E.tag;if((O===3||O===4)&&(O=E.stateNode.containerInfo,O===c||O.nodeType===8&&O.parentNode===c))return;E=E.return}for(;D!==null;){if(E=Er(D),E===null)return;if(O=E.tag,O===5||O===6){l=h=E;continue e}D=D.parentNode}}l=l.return}Vn(function(){var ee=h,ve=G(s),xe=[];e:{var ge=bd.get(t);if(ge!==void 0){var Oe=zl,Xe=t;switch(t){case"keypress":if(Qo(s)===0)break e;case"keydown":case"keyup":Oe=Sg;break;case"focusin":Xe="focus",Oe=Vl;break;case"focusout":Xe="blur",Oe=Vl;break;case"beforeblur":case"afterblur":Oe=Vl;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Oe=sd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Oe=lg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Oe=Eg;break;case wd:case Ad:case Rd:Oe=fg;break;case Cd:Oe=wg;break;case"scroll":Oe=og;break;case"wheel":Oe=Rg;break;case"copy":case"cut":case"paste":Oe=hg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Oe=ad}var qe=(i&4)!==0,jt=!qe&&t==="scroll",q=qe?ge!==null?ge+"Capture":null:ge;qe=[];for(var W=ee,K;W!==null;){K=W;var we=K.stateNode;if(K.tag===5&&we!==null&&(K=we,q!==null&&(we=ln(W,q),we!=null&&qe.push(so(W,we,K)))),jt)break;W=W.return}0<qe.length&&(ge=new Oe(ge,Xe,null,s,ve),xe.push({event:ge,listeners:qe}))}}if((i&7)===0){e:{if(ge=t==="mouseover"||t==="pointerover",Oe=t==="mouseout"||t==="pointerout",ge&&s!==ct&&(Xe=s.relatedTarget||s.fromElement)&&(Er(Xe)||Xe[Mi]))break e;if((Oe||ge)&&(ge=ve.window===ve?ve:(ge=ve.ownerDocument)?ge.defaultView||ge.parentWindow:window,Oe?(Xe=s.relatedTarget||s.toElement,Oe=ee,Xe=Xe?Er(Xe):null,Xe!==null&&(jt=yi(Xe),Xe!==jt||Xe.tag!==5&&Xe.tag!==6)&&(Xe=null)):(Oe=null,Xe=ee),Oe!==Xe)){if(qe=sd,we="onMouseLeave",q="onMouseEnter",W="mouse",(t==="pointerout"||t==="pointerover")&&(qe=ad,we="onPointerLeave",q="onPointerEnter",W="pointer"),jt=Oe==null?ge:rs(Oe),K=Xe==null?ge:rs(Xe),ge=new qe(we,W+"leave",Oe,s,ve),ge.target=jt,ge.relatedTarget=K,we=null,Er(ve)===ee&&(qe=new qe(q,W+"enter",Xe,s,ve),qe.target=K,qe.relatedTarget=jt,we=qe),jt=we,Oe&&Xe)t:{for(qe=Oe,q=Xe,W=0,K=qe;K;K=ns(K))W++;for(K=0,we=q;we;we=ns(we))K++;for(;0<W-K;)qe=ns(qe),W--;for(;0<K-W;)q=ns(q),K--;for(;W--;){if(qe===q||q!==null&&qe===q.alternate)break t;qe=ns(qe),q=ns(q)}qe=null}else qe=null;Oe!==null&&Ud(xe,ge,Oe,qe,!1),Xe!==null&&jt!==null&&Ud(xe,jt,Xe,qe,!0)}}e:{if(ge=ee?rs(ee):window,Oe=ge.nodeName&&ge.nodeName.toLowerCase(),Oe==="select"||Oe==="input"&&ge.type==="file")var Ke=Ug;else if(hd(ge))if(md)Ke=kg;else{Ke=Fg;var et=Ig}else(Oe=ge.nodeName)&&Oe.toLowerCase()==="input"&&(ge.type==="checkbox"||ge.type==="radio")&&(Ke=Og);if(Ke&&(Ke=Ke(t,ee))){pd(xe,Ke,s,ve);break e}et&&et(t,ge,ee),t==="focusout"&&(et=ge._wrapperState)&&et.controlled&&ge.type==="number"&&ze(ge,"number",ge.value)}switch(et=ee?rs(ee):window,t){case"focusin":(hd(et)||et.contentEditable==="true")&&(es=et,ql=ee,no=null);break;case"focusout":no=ql=es=null;break;case"mousedown":$l=!0;break;case"contextmenu":case"mouseup":case"dragend":$l=!1,Ed(xe,s,ve);break;case"selectionchange":if(Hg)break;case"keydown":case"keyup":Ed(xe,s,ve)}var tt;if(Wl)e:{switch(t){case"compositionstart":var lt="onCompositionStart";break e;case"compositionend":lt="onCompositionEnd";break e;case"compositionupdate":lt="onCompositionUpdate";break e}lt=void 0}else Jr?fd(t,s)&&(lt="onCompositionEnd"):t==="keydown"&&s.keyCode===229&&(lt="onCompositionStart");lt&&(ld&&s.locale!=="ko"&&(Jr||lt!=="onCompositionStart"?lt==="onCompositionEnd"&&Jr&&(tt=id()):(qi=ve,kl="value"in qi?qi.value:qi.textContent,Jr=!0)),et=sa(ee,lt),0<et.length&&(lt=new od(lt,t,null,s,ve),xe.push({event:lt,listeners:et}),tt?lt.data=tt:(tt=dd(s),tt!==null&&(lt.data=tt)))),(tt=bg?Pg(t,s):Dg(t,s))&&(ee=sa(ee,"onBeforeInput"),0<ee.length&&(ve=new od("onBeforeInput","beforeinput",null,s,ve),xe.push({event:ve,listeners:ee}),ve.data=tt))}Ld(xe,i)})}function so(t,i,s){return{instance:t,listener:i,currentTarget:s}}function sa(t,i){for(var s=i+"Capture",l=[];t!==null;){var c=t,h=c.stateNode;c.tag===5&&h!==null&&(c=h,h=ln(t,s),h!=null&&l.unshift(so(t,h,c)),h=ln(t,i),h!=null&&l.push(so(t,h,c))),t=t.return}return l}function ns(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Ud(t,i,s,l,c){for(var h=i._reactName,E=[];s!==null&&s!==l;){var D=s,O=D.alternate,ee=D.stateNode;if(O!==null&&O===l)break;D.tag===5&&ee!==null&&(D=ee,c?(O=ln(s,h),O!=null&&E.unshift(so(s,O,D))):c||(O=ln(s,h),O!=null&&E.push(so(s,O,D)))),s=s.return}E.length!==0&&t.push({event:i,listeners:E})}var Xg=/\r\n?/g,jg=/\u0000|\uFFFD/g;function Id(t){return(typeof t=="string"?t:""+t).replace(Xg,`
`).replace(jg,"")}function oa(t,i,s){if(i=Id(i),Id(t)!==i&&s)throw Error(n(425))}function aa(){}var tu=null,nu=null;function iu(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var ru=typeof setTimeout=="function"?setTimeout:void 0,Yg=typeof clearTimeout=="function"?clearTimeout:void 0,Fd=typeof Promise=="function"?Promise:void 0,qg=typeof queueMicrotask=="function"?queueMicrotask:typeof Fd<"u"?function(t){return Fd.resolve(null).then(t).catch($g)}:ru;function $g(t){setTimeout(function(){throw t})}function su(t,i){var s=i,l=0;do{var c=s.nextSibling;if(t.removeChild(s),c&&c.nodeType===8)if(s=c.data,s==="/$"){if(l===0){t.removeChild(c),$s(i);return}l--}else s!=="$"&&s!=="$?"&&s!=="$!"||l++;s=c}while(s);$s(i)}function Ki(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function Od(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var s=t.data;if(s==="$"||s==="$!"||s==="$?"){if(i===0)return t;i--}else s==="/$"&&i++}t=t.previousSibling}return null}var is=Math.random().toString(36).slice(2),hi="__reactFiber$"+is,oo="__reactProps$"+is,Mi="__reactContainer$"+is,ou="__reactEvents$"+is,Kg="__reactListeners$"+is,Zg="__reactHandles$"+is;function Er(t){var i=t[hi];if(i)return i;for(var s=t.parentNode;s;){if(i=s[Mi]||s[hi]){if(s=i.alternate,i.child!==null||s!==null&&s.child!==null)for(t=Od(t);t!==null;){if(s=t[hi])return s;t=Od(t)}return i}t=s,s=t.parentNode}return null}function ao(t){return t=t[hi]||t[Mi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function rs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function la(t){return t[oo]||null}var au=[],ss=-1;function Zi(t){return{current:t}}function kt(t){0>ss||(t.current=au[ss],au[ss]=null,ss--)}function Ft(t,i){ss++,au[ss]=t.current,t.current=i}var Qi={},fn=Zi(Qi),En=Zi(!1),Tr=Qi;function os(t,i){var s=t.type.contextTypes;if(!s)return Qi;var l=t.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===i)return l.__reactInternalMemoizedMaskedChildContext;var c={},h;for(h in s)c[h]=i[h];return l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=c),c}function Tn(t){return t=t.childContextTypes,t!=null}function ua(){kt(En),kt(fn)}function kd(t,i,s){if(fn.current!==Qi)throw Error(n(168));Ft(fn,i),Ft(En,s)}function zd(t,i,s){var l=t.stateNode;if(i=i.childContextTypes,typeof l.getChildContext!="function")return s;l=l.getChildContext();for(var c in l)if(!(c in i))throw Error(n(108,fe(t)||"Unknown",c));return ae({},s,l)}function ca(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Qi,Tr=fn.current,Ft(fn,t),Ft(En,En.current),!0}function Bd(t,i,s){var l=t.stateNode;if(!l)throw Error(n(169));s?(t=zd(t,i,Tr),l.__reactInternalMemoizedMergedChildContext=t,kt(En),kt(fn),Ft(fn,t)):kt(En),Ft(En,s)}var Ei=null,fa=!1,lu=!1;function Hd(t){Ei===null?Ei=[t]:Ei.push(t)}function Qg(t){fa=!0,Hd(t)}function Ji(){if(!lu&&Ei!==null){lu=!0;var t=0,i=vt;try{var s=Ei;for(vt=1;t<s.length;t++){var l=s[t];do l=l(!0);while(l!==null)}Ei=null,fa=!1}catch(c){throw Ei!==null&&(Ei=Ei.slice(t+1)),T(Ce,Ji),c}finally{vt=i,lu=!1}}return null}var as=[],ls=0,da=null,ha=0,Gn=[],Wn=0,wr=null,Ti=1,wi="";function Ar(t,i){as[ls++]=ha,as[ls++]=da,da=t,ha=i}function Vd(t,i,s){Gn[Wn++]=Ti,Gn[Wn++]=wi,Gn[Wn++]=wr,wr=t;var l=Ti;t=wi;var c=32-yt(l)-1;l&=~(1<<c),s+=1;var h=32-yt(i)+c;if(30<h){var E=c-c%5;h=(l&(1<<E)-1).toString(32),l>>=E,c-=E,Ti=1<<32-yt(i)+c|s<<c|l,wi=h+t}else Ti=1<<h|s<<c|l,wi=t}function uu(t){t.return!==null&&(Ar(t,1),Vd(t,1,0))}function cu(t){for(;t===da;)da=as[--ls],as[ls]=null,ha=as[--ls],as[ls]=null;for(;t===wr;)wr=Gn[--Wn],Gn[Wn]=null,wi=Gn[--Wn],Gn[Wn]=null,Ti=Gn[--Wn],Gn[Wn]=null}var In=null,Fn=null,zt=!1,ti=null;function Gd(t,i){var s=qn(5,null,null,0);s.elementType="DELETED",s.stateNode=i,s.return=t,i=t.deletions,i===null?(t.deletions=[s],t.flags|=16):i.push(s)}function Wd(t,i){switch(t.tag){case 5:var s=t.type;return i=i.nodeType!==1||s.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,In=t,Fn=Ki(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,In=t,Fn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(s=wr!==null?{id:Ti,overflow:wi}:null,t.memoizedState={dehydrated:i,treeContext:s,retryLane:1073741824},s=qn(18,null,null,0),s.stateNode=i,s.return=t,t.child=s,In=t,Fn=null,!0):!1;default:return!1}}function fu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function du(t){if(zt){var i=Fn;if(i){var s=i;if(!Wd(t,i)){if(fu(t))throw Error(n(418));i=Ki(s.nextSibling);var l=In;i&&Wd(t,i)?Gd(l,s):(t.flags=t.flags&-4097|2,zt=!1,In=t)}}else{if(fu(t))throw Error(n(418));t.flags=t.flags&-4097|2,zt=!1,In=t}}}function Xd(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;In=t}function pa(t){if(t!==In)return!1;if(!zt)return Xd(t),zt=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!iu(t.type,t.memoizedProps)),i&&(i=Fn)){if(fu(t))throw jd(),Error(n(418));for(;i;)Gd(t,i),i=Ki(i.nextSibling)}if(Xd(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var s=t.data;if(s==="/$"){if(i===0){Fn=Ki(t.nextSibling);break e}i--}else s!=="$"&&s!=="$!"&&s!=="$?"||i++}t=t.nextSibling}Fn=null}}else Fn=In?Ki(t.stateNode.nextSibling):null;return!0}function jd(){for(var t=Fn;t;)t=Ki(t.nextSibling)}function us(){Fn=In=null,zt=!1}function hu(t){ti===null?ti=[t]:ti.push(t)}var Jg=b.ReactCurrentBatchConfig;function lo(t,i,s){if(t=s.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(s._owner){if(s=s._owner,s){if(s.tag!==1)throw Error(n(309));var l=s.stateNode}if(!l)throw Error(n(147,t));var c=l,h=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===h?i.ref:(i=function(E){var D=c.refs;E===null?delete D[h]:D[h]=E},i._stringRef=h,i)}if(typeof t!="string")throw Error(n(284));if(!s._owner)throw Error(n(290,t))}return t}function ma(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function Yd(t){var i=t._init;return i(t._payload)}function qd(t){function i(q,W){if(t){var K=q.deletions;K===null?(q.deletions=[W],q.flags|=16):K.push(W)}}function s(q,W){if(!t)return null;for(;W!==null;)i(q,W),W=W.sibling;return null}function l(q,W){for(q=new Map;W!==null;)W.key!==null?q.set(W.key,W):q.set(W.index,W),W=W.sibling;return q}function c(q,W){return q=ar(q,W),q.index=0,q.sibling=null,q}function h(q,W,K){return q.index=K,t?(K=q.alternate,K!==null?(K=K.index,K<W?(q.flags|=2,W):K):(q.flags|=2,W)):(q.flags|=1048576,W)}function E(q){return t&&q.alternate===null&&(q.flags|=2),q}function D(q,W,K,we){return W===null||W.tag!==6?(W=rc(K,q.mode,we),W.return=q,W):(W=c(W,K),W.return=q,W)}function O(q,W,K,we){var Ke=K.type;return Ke===z?ve(q,W,K.props.children,we,K.key):W!==null&&(W.elementType===Ke||typeof Ke=="object"&&Ke!==null&&Ke.$$typeof===oe&&Yd(Ke)===W.type)?(we=c(W,K.props),we.ref=lo(q,W,K),we.return=q,we):(we=za(K.type,K.key,K.props,null,q.mode,we),we.ref=lo(q,W,K),we.return=q,we)}function ee(q,W,K,we){return W===null||W.tag!==4||W.stateNode.containerInfo!==K.containerInfo||W.stateNode.implementation!==K.implementation?(W=sc(K,q.mode,we),W.return=q,W):(W=c(W,K.children||[]),W.return=q,W)}function ve(q,W,K,we,Ke){return W===null||W.tag!==7?(W=Ur(K,q.mode,we,Ke),W.return=q,W):(W=c(W,K),W.return=q,W)}function xe(q,W,K){if(typeof W=="string"&&W!==""||typeof W=="number")return W=rc(""+W,q.mode,K),W.return=q,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case V:return K=za(W.type,W.key,W.props,null,q.mode,K),K.ref=lo(q,null,W),K.return=q,K;case k:return W=sc(W,q.mode,K),W.return=q,W;case oe:var we=W._init;return xe(q,we(W._payload),K)}if(ot(W)||ce(W))return W=Ur(W,q.mode,K,null),W.return=q,W;ma(q,W)}return null}function ge(q,W,K,we){var Ke=W!==null?W.key:null;if(typeof K=="string"&&K!==""||typeof K=="number")return Ke!==null?null:D(q,W,""+K,we);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case V:return K.key===Ke?O(q,W,K,we):null;case k:return K.key===Ke?ee(q,W,K,we):null;case oe:return Ke=K._init,ge(q,W,Ke(K._payload),we)}if(ot(K)||ce(K))return Ke!==null?null:ve(q,W,K,we,null);ma(q,K)}return null}function Oe(q,W,K,we,Ke){if(typeof we=="string"&&we!==""||typeof we=="number")return q=q.get(K)||null,D(W,q,""+we,Ke);if(typeof we=="object"&&we!==null){switch(we.$$typeof){case V:return q=q.get(we.key===null?K:we.key)||null,O(W,q,we,Ke);case k:return q=q.get(we.key===null?K:we.key)||null,ee(W,q,we,Ke);case oe:var et=we._init;return Oe(q,W,K,et(we._payload),Ke)}if(ot(we)||ce(we))return q=q.get(K)||null,ve(W,q,we,Ke,null);ma(W,we)}return null}function Xe(q,W,K,we){for(var Ke=null,et=null,tt=W,lt=W=0,rn=null;tt!==null&&lt<K.length;lt++){tt.index>lt?(rn=tt,tt=null):rn=tt.sibling;var Et=ge(q,tt,K[lt],we);if(Et===null){tt===null&&(tt=rn);break}t&&tt&&Et.alternate===null&&i(q,tt),W=h(Et,W,lt),et===null?Ke=Et:et.sibling=Et,et=Et,tt=rn}if(lt===K.length)return s(q,tt),zt&&Ar(q,lt),Ke;if(tt===null){for(;lt<K.length;lt++)tt=xe(q,K[lt],we),tt!==null&&(W=h(tt,W,lt),et===null?Ke=tt:et.sibling=tt,et=tt);return zt&&Ar(q,lt),Ke}for(tt=l(q,tt);lt<K.length;lt++)rn=Oe(tt,q,lt,K[lt],we),rn!==null&&(t&&rn.alternate!==null&&tt.delete(rn.key===null?lt:rn.key),W=h(rn,W,lt),et===null?Ke=rn:et.sibling=rn,et=rn);return t&&tt.forEach(function(lr){return i(q,lr)}),zt&&Ar(q,lt),Ke}function qe(q,W,K,we){var Ke=ce(K);if(typeof Ke!="function")throw Error(n(150));if(K=Ke.call(K),K==null)throw Error(n(151));for(var et=Ke=null,tt=W,lt=W=0,rn=null,Et=K.next();tt!==null&&!Et.done;lt++,Et=K.next()){tt.index>lt?(rn=tt,tt=null):rn=tt.sibling;var lr=ge(q,tt,Et.value,we);if(lr===null){tt===null&&(tt=rn);break}t&&tt&&lr.alternate===null&&i(q,tt),W=h(lr,W,lt),et===null?Ke=lr:et.sibling=lr,et=lr,tt=rn}if(Et.done)return s(q,tt),zt&&Ar(q,lt),Ke;if(tt===null){for(;!Et.done;lt++,Et=K.next())Et=xe(q,Et.value,we),Et!==null&&(W=h(Et,W,lt),et===null?Ke=Et:et.sibling=Et,et=Et);return zt&&Ar(q,lt),Ke}for(tt=l(q,tt);!Et.done;lt++,Et=K.next())Et=Oe(tt,q,lt,Et.value,we),Et!==null&&(t&&Et.alternate!==null&&tt.delete(Et.key===null?lt:Et.key),W=h(Et,W,lt),et===null?Ke=Et:et.sibling=Et,et=Et);return t&&tt.forEach(function(Lv){return i(q,Lv)}),zt&&Ar(q,lt),Ke}function jt(q,W,K,we){if(typeof K=="object"&&K!==null&&K.type===z&&K.key===null&&(K=K.props.children),typeof K=="object"&&K!==null){switch(K.$$typeof){case V:e:{for(var Ke=K.key,et=W;et!==null;){if(et.key===Ke){if(Ke=K.type,Ke===z){if(et.tag===7){s(q,et.sibling),W=c(et,K.props.children),W.return=q,q=W;break e}}else if(et.elementType===Ke||typeof Ke=="object"&&Ke!==null&&Ke.$$typeof===oe&&Yd(Ke)===et.type){s(q,et.sibling),W=c(et,K.props),W.ref=lo(q,et,K),W.return=q,q=W;break e}s(q,et);break}else i(q,et);et=et.sibling}K.type===z?(W=Ur(K.props.children,q.mode,we,K.key),W.return=q,q=W):(we=za(K.type,K.key,K.props,null,q.mode,we),we.ref=lo(q,W,K),we.return=q,q=we)}return E(q);case k:e:{for(et=K.key;W!==null;){if(W.key===et)if(W.tag===4&&W.stateNode.containerInfo===K.containerInfo&&W.stateNode.implementation===K.implementation){s(q,W.sibling),W=c(W,K.children||[]),W.return=q,q=W;break e}else{s(q,W);break}else i(q,W);W=W.sibling}W=sc(K,q.mode,we),W.return=q,q=W}return E(q);case oe:return et=K._init,jt(q,W,et(K._payload),we)}if(ot(K))return Xe(q,W,K,we);if(ce(K))return qe(q,W,K,we);ma(q,K)}return typeof K=="string"&&K!==""||typeof K=="number"?(K=""+K,W!==null&&W.tag===6?(s(q,W.sibling),W=c(W,K),W.return=q,q=W):(s(q,W),W=rc(K,q.mode,we),W.return=q,q=W),E(q)):s(q,W)}return jt}var cs=qd(!0),$d=qd(!1),ga=Zi(null),va=null,fs=null,pu=null;function mu(){pu=fs=va=null}function gu(t){var i=ga.current;kt(ga),t._currentValue=i}function vu(t,i,s){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===s)break;t=t.return}}function ds(t,i){va=t,pu=fs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&i)!==0&&(wn=!0),t.firstContext=null)}function Xn(t){var i=t._currentValue;if(pu!==t)if(t={context:t,memoizedValue:i,next:null},fs===null){if(va===null)throw Error(n(308));fs=t,va.dependencies={lanes:0,firstContext:t}}else fs=fs.next=t;return i}var Rr=null;function _u(t){Rr===null?Rr=[t]:Rr.push(t)}function Kd(t,i,s,l){var c=i.interleaved;return c===null?(s.next=s,_u(i)):(s.next=c.next,c.next=s),i.interleaved=s,Ai(t,l)}function Ai(t,i){t.lanes|=i;var s=t.alternate;for(s!==null&&(s.lanes|=i),s=t,t=t.return;t!==null;)t.childLanes|=i,s=t.alternate,s!==null&&(s.childLanes|=i),s=t,t=t.return;return s.tag===3?s.stateNode:null}var er=!1;function xu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Zd(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ri(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function tr(t,i,s){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(Mt&2)!==0){var c=l.pending;return c===null?i.next=i:(i.next=c.next,c.next=i),l.pending=i,Ai(t,s)}return c=l.interleaved,c===null?(i.next=i,_u(l)):(i.next=c.next,c.next=i),l.interleaved=i,Ai(t,s)}function _a(t,i,s){if(i=i.updateQueue,i!==null&&(i=i.shared,(s&4194240)!==0)){var l=i.lanes;l&=t.pendingLanes,s|=l,i.lanes=s,Mr(t,s)}}function Qd(t,i){var s=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,s===l)){var c=null,h=null;if(s=s.firstBaseUpdate,s!==null){do{var E={eventTime:s.eventTime,lane:s.lane,tag:s.tag,payload:s.payload,callback:s.callback,next:null};h===null?c=h=E:h=h.next=E,s=s.next}while(s!==null);h===null?c=h=i:h=h.next=i}else c=h=i;s={baseState:l.baseState,firstBaseUpdate:c,lastBaseUpdate:h,shared:l.shared,effects:l.effects},t.updateQueue=s;return}t=s.lastBaseUpdate,t===null?s.firstBaseUpdate=i:t.next=i,s.lastBaseUpdate=i}function xa(t,i,s,l){var c=t.updateQueue;er=!1;var h=c.firstBaseUpdate,E=c.lastBaseUpdate,D=c.shared.pending;if(D!==null){c.shared.pending=null;var O=D,ee=O.next;O.next=null,E===null?h=ee:E.next=ee,E=O;var ve=t.alternate;ve!==null&&(ve=ve.updateQueue,D=ve.lastBaseUpdate,D!==E&&(D===null?ve.firstBaseUpdate=ee:D.next=ee,ve.lastBaseUpdate=O))}if(h!==null){var xe=c.baseState;E=0,ve=ee=O=null,D=h;do{var ge=D.lane,Oe=D.eventTime;if((l&ge)===ge){ve!==null&&(ve=ve.next={eventTime:Oe,lane:0,tag:D.tag,payload:D.payload,callback:D.callback,next:null});e:{var Xe=t,qe=D;switch(ge=i,Oe=s,qe.tag){case 1:if(Xe=qe.payload,typeof Xe=="function"){xe=Xe.call(Oe,xe,ge);break e}xe=Xe;break e;case 3:Xe.flags=Xe.flags&-65537|128;case 0:if(Xe=qe.payload,ge=typeof Xe=="function"?Xe.call(Oe,xe,ge):Xe,ge==null)break e;xe=ae({},xe,ge);break e;case 2:er=!0}}D.callback!==null&&D.lane!==0&&(t.flags|=64,ge=c.effects,ge===null?c.effects=[D]:ge.push(D))}else Oe={eventTime:Oe,lane:ge,tag:D.tag,payload:D.payload,callback:D.callback,next:null},ve===null?(ee=ve=Oe,O=xe):ve=ve.next=Oe,E|=ge;if(D=D.next,D===null){if(D=c.shared.pending,D===null)break;ge=D,D=ge.next,ge.next=null,c.lastBaseUpdate=ge,c.shared.pending=null}}while(!0);if(ve===null&&(O=xe),c.baseState=O,c.firstBaseUpdate=ee,c.lastBaseUpdate=ve,i=c.shared.interleaved,i!==null){c=i;do E|=c.lane,c=c.next;while(c!==i)}else h===null&&(c.shared.lanes=0);Pr|=E,t.lanes=E,t.memoizedState=xe}}function Jd(t,i,s){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var l=t[i],c=l.callback;if(c!==null){if(l.callback=null,l=s,typeof c!="function")throw Error(n(191,c));c.call(l)}}}var uo={},pi=Zi(uo),co=Zi(uo),fo=Zi(uo);function Cr(t){if(t===uo)throw Error(n(174));return t}function Su(t,i){switch(Ft(fo,i),Ft(co,t),Ft(pi,uo),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:le(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=le(i,t)}kt(pi),Ft(pi,i)}function hs(){kt(pi),kt(co),kt(fo)}function eh(t){Cr(fo.current);var i=Cr(pi.current),s=le(i,t.type);i!==s&&(Ft(co,t),Ft(pi,s))}function yu(t){co.current===t&&(kt(pi),kt(co))}var Bt=Zi(0);function Sa(t){for(var i=t;i!==null;){if(i.tag===13){var s=i.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||s.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Mu=[];function Eu(){for(var t=0;t<Mu.length;t++)Mu[t]._workInProgressVersionPrimary=null;Mu.length=0}var ya=b.ReactCurrentDispatcher,Tu=b.ReactCurrentBatchConfig,br=0,Ht=null,Zt=null,tn=null,Ma=!1,ho=!1,po=0,ev=0;function dn(){throw Error(n(321))}function wu(t,i){if(i===null)return!1;for(var s=0;s<i.length&&s<t.length;s++)if(!ei(t[s],i[s]))return!1;return!0}function Au(t,i,s,l,c,h){if(br=h,Ht=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,ya.current=t===null||t.memoizedState===null?rv:sv,t=s(l,c),ho){h=0;do{if(ho=!1,po=0,25<=h)throw Error(n(301));h+=1,tn=Zt=null,i.updateQueue=null,ya.current=ov,t=s(l,c)}while(ho)}if(ya.current=wa,i=Zt!==null&&Zt.next!==null,br=0,tn=Zt=Ht=null,Ma=!1,i)throw Error(n(300));return t}function Ru(){var t=po!==0;return po=0,t}function mi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return tn===null?Ht.memoizedState=tn=t:tn=tn.next=t,tn}function jn(){if(Zt===null){var t=Ht.alternate;t=t!==null?t.memoizedState:null}else t=Zt.next;var i=tn===null?Ht.memoizedState:tn.next;if(i!==null)tn=i,Zt=t;else{if(t===null)throw Error(n(310));Zt=t,t={memoizedState:Zt.memoizedState,baseState:Zt.baseState,baseQueue:Zt.baseQueue,queue:Zt.queue,next:null},tn===null?Ht.memoizedState=tn=t:tn=tn.next=t}return tn}function mo(t,i){return typeof i=="function"?i(t):i}function Cu(t){var i=jn(),s=i.queue;if(s===null)throw Error(n(311));s.lastRenderedReducer=t;var l=Zt,c=l.baseQueue,h=s.pending;if(h!==null){if(c!==null){var E=c.next;c.next=h.next,h.next=E}l.baseQueue=c=h,s.pending=null}if(c!==null){h=c.next,l=l.baseState;var D=E=null,O=null,ee=h;do{var ve=ee.lane;if((br&ve)===ve)O!==null&&(O=O.next={lane:0,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null}),l=ee.hasEagerState?ee.eagerState:t(l,ee.action);else{var xe={lane:ve,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null};O===null?(D=O=xe,E=l):O=O.next=xe,Ht.lanes|=ve,Pr|=ve}ee=ee.next}while(ee!==null&&ee!==h);O===null?E=l:O.next=D,ei(l,i.memoizedState)||(wn=!0),i.memoizedState=l,i.baseState=E,i.baseQueue=O,s.lastRenderedState=l}if(t=s.interleaved,t!==null){c=t;do h=c.lane,Ht.lanes|=h,Pr|=h,c=c.next;while(c!==t)}else c===null&&(s.lanes=0);return[i.memoizedState,s.dispatch]}function bu(t){var i=jn(),s=i.queue;if(s===null)throw Error(n(311));s.lastRenderedReducer=t;var l=s.dispatch,c=s.pending,h=i.memoizedState;if(c!==null){s.pending=null;var E=c=c.next;do h=t(h,E.action),E=E.next;while(E!==c);ei(h,i.memoizedState)||(wn=!0),i.memoizedState=h,i.baseQueue===null&&(i.baseState=h),s.lastRenderedState=h}return[h,l]}function th(){}function nh(t,i){var s=Ht,l=jn(),c=i(),h=!ei(l.memoizedState,c);if(h&&(l.memoizedState=c,wn=!0),l=l.queue,Pu(sh.bind(null,s,l,t),[t]),l.getSnapshot!==i||h||tn!==null&&tn.memoizedState.tag&1){if(s.flags|=2048,go(9,rh.bind(null,s,l,c,i),void 0,null),nn===null)throw Error(n(349));(br&30)!==0||ih(s,i,c)}return c}function ih(t,i,s){t.flags|=16384,t={getSnapshot:i,value:s},i=Ht.updateQueue,i===null?(i={lastEffect:null,stores:null},Ht.updateQueue=i,i.stores=[t]):(s=i.stores,s===null?i.stores=[t]:s.push(t))}function rh(t,i,s,l){i.value=s,i.getSnapshot=l,oh(i)&&ah(t)}function sh(t,i,s){return s(function(){oh(i)&&ah(t)})}function oh(t){var i=t.getSnapshot;t=t.value;try{var s=i();return!ei(t,s)}catch{return!0}}function ah(t){var i=Ai(t,1);i!==null&&si(i,t,1,-1)}function lh(t){var i=mi();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:mo,lastRenderedState:t},i.queue=t,t=t.dispatch=iv.bind(null,Ht,t),[i.memoizedState,t]}function go(t,i,s,l){return t={tag:t,create:i,destroy:s,deps:l,next:null},i=Ht.updateQueue,i===null?(i={lastEffect:null,stores:null},Ht.updateQueue=i,i.lastEffect=t.next=t):(s=i.lastEffect,s===null?i.lastEffect=t.next=t:(l=s.next,s.next=t,t.next=l,i.lastEffect=t)),t}function uh(){return jn().memoizedState}function Ea(t,i,s,l){var c=mi();Ht.flags|=t,c.memoizedState=go(1|i,s,void 0,l===void 0?null:l)}function Ta(t,i,s,l){var c=jn();l=l===void 0?null:l;var h=void 0;if(Zt!==null){var E=Zt.memoizedState;if(h=E.destroy,l!==null&&wu(l,E.deps)){c.memoizedState=go(i,s,h,l);return}}Ht.flags|=t,c.memoizedState=go(1|i,s,h,l)}function ch(t,i){return Ea(8390656,8,t,i)}function Pu(t,i){return Ta(2048,8,t,i)}function fh(t,i){return Ta(4,2,t,i)}function dh(t,i){return Ta(4,4,t,i)}function hh(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function ph(t,i,s){return s=s!=null?s.concat([t]):null,Ta(4,4,hh.bind(null,i,t),s)}function Du(){}function mh(t,i){var s=jn();i=i===void 0?null:i;var l=s.memoizedState;return l!==null&&i!==null&&wu(i,l[1])?l[0]:(s.memoizedState=[t,i],t)}function gh(t,i){var s=jn();i=i===void 0?null:i;var l=s.memoizedState;return l!==null&&i!==null&&wu(i,l[1])?l[0]:(t=t(),s.memoizedState=[t,i],t)}function vh(t,i,s){return(br&21)===0?(t.baseState&&(t.baseState=!1,wn=!0),t.memoizedState=s):(ei(s,i)||(s=_n(),Ht.lanes|=s,Pr|=s,t.baseState=!0),i)}function tv(t,i){var s=vt;vt=s!==0&&4>s?s:4,t(!0);var l=Tu.transition;Tu.transition={};try{t(!1),i()}finally{vt=s,Tu.transition=l}}function _h(){return jn().memoizedState}function nv(t,i,s){var l=sr(t);if(s={lane:l,action:s,hasEagerState:!1,eagerState:null,next:null},xh(t))Sh(i,s);else if(s=Kd(t,i,s,l),s!==null){var c=Sn();si(s,t,l,c),yh(s,i,l)}}function iv(t,i,s){var l=sr(t),c={lane:l,action:s,hasEagerState:!1,eagerState:null,next:null};if(xh(t))Sh(i,c);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=i.lastRenderedReducer,h!==null))try{var E=i.lastRenderedState,D=h(E,s);if(c.hasEagerState=!0,c.eagerState=D,ei(D,E)){var O=i.interleaved;O===null?(c.next=c,_u(i)):(c.next=O.next,O.next=c),i.interleaved=c;return}}catch{}finally{}s=Kd(t,i,c,l),s!==null&&(c=Sn(),si(s,t,l,c),yh(s,i,l))}}function xh(t){var i=t.alternate;return t===Ht||i!==null&&i===Ht}function Sh(t,i){ho=Ma=!0;var s=t.pending;s===null?i.next=i:(i.next=s.next,s.next=i),t.pending=i}function yh(t,i,s){if((s&4194240)!==0){var l=i.lanes;l&=t.pendingLanes,s|=l,i.lanes=s,Mr(t,s)}}var wa={readContext:Xn,useCallback:dn,useContext:dn,useEffect:dn,useImperativeHandle:dn,useInsertionEffect:dn,useLayoutEffect:dn,useMemo:dn,useReducer:dn,useRef:dn,useState:dn,useDebugValue:dn,useDeferredValue:dn,useTransition:dn,useMutableSource:dn,useSyncExternalStore:dn,useId:dn,unstable_isNewReconciler:!1},rv={readContext:Xn,useCallback:function(t,i){return mi().memoizedState=[t,i===void 0?null:i],t},useContext:Xn,useEffect:ch,useImperativeHandle:function(t,i,s){return s=s!=null?s.concat([t]):null,Ea(4194308,4,hh.bind(null,i,t),s)},useLayoutEffect:function(t,i){return Ea(4194308,4,t,i)},useInsertionEffect:function(t,i){return Ea(4,2,t,i)},useMemo:function(t,i){var s=mi();return i=i===void 0?null:i,t=t(),s.memoizedState=[t,i],t},useReducer:function(t,i,s){var l=mi();return i=s!==void 0?s(i):i,l.memoizedState=l.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},l.queue=t,t=t.dispatch=nv.bind(null,Ht,t),[l.memoizedState,t]},useRef:function(t){var i=mi();return t={current:t},i.memoizedState=t},useState:lh,useDebugValue:Du,useDeferredValue:function(t){return mi().memoizedState=t},useTransition:function(){var t=lh(!1),i=t[0];return t=tv.bind(null,t[1]),mi().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,s){var l=Ht,c=mi();if(zt){if(s===void 0)throw Error(n(407));s=s()}else{if(s=i(),nn===null)throw Error(n(349));(br&30)!==0||ih(l,i,s)}c.memoizedState=s;var h={value:s,getSnapshot:i};return c.queue=h,ch(sh.bind(null,l,h,t),[t]),l.flags|=2048,go(9,rh.bind(null,l,h,s,i),void 0,null),s},useId:function(){var t=mi(),i=nn.identifierPrefix;if(zt){var s=wi,l=Ti;s=(l&~(1<<32-yt(l)-1)).toString(32)+s,i=":"+i+"R"+s,s=po++,0<s&&(i+="H"+s.toString(32)),i+=":"}else s=ev++,i=":"+i+"r"+s.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},sv={readContext:Xn,useCallback:mh,useContext:Xn,useEffect:Pu,useImperativeHandle:ph,useInsertionEffect:fh,useLayoutEffect:dh,useMemo:gh,useReducer:Cu,useRef:uh,useState:function(){return Cu(mo)},useDebugValue:Du,useDeferredValue:function(t){var i=jn();return vh(i,Zt.memoizedState,t)},useTransition:function(){var t=Cu(mo)[0],i=jn().memoizedState;return[t,i]},useMutableSource:th,useSyncExternalStore:nh,useId:_h,unstable_isNewReconciler:!1},ov={readContext:Xn,useCallback:mh,useContext:Xn,useEffect:Pu,useImperativeHandle:ph,useInsertionEffect:fh,useLayoutEffect:dh,useMemo:gh,useReducer:bu,useRef:uh,useState:function(){return bu(mo)},useDebugValue:Du,useDeferredValue:function(t){var i=jn();return Zt===null?i.memoizedState=t:vh(i,Zt.memoizedState,t)},useTransition:function(){var t=bu(mo)[0],i=jn().memoizedState;return[t,i]},useMutableSource:th,useSyncExternalStore:nh,useId:_h,unstable_isNewReconciler:!1};function ni(t,i){if(t&&t.defaultProps){i=ae({},i),t=t.defaultProps;for(var s in t)i[s]===void 0&&(i[s]=t[s]);return i}return i}function Lu(t,i,s,l){i=t.memoizedState,s=s(l,i),s=s==null?i:ae({},i,s),t.memoizedState=s,t.lanes===0&&(t.updateQueue.baseState=s)}var Aa={isMounted:function(t){return(t=t._reactInternals)?yi(t)===t:!1},enqueueSetState:function(t,i,s){t=t._reactInternals;var l=Sn(),c=sr(t),h=Ri(l,c);h.payload=i,s!=null&&(h.callback=s),i=tr(t,h,c),i!==null&&(si(i,t,c,l),_a(i,t,c))},enqueueReplaceState:function(t,i,s){t=t._reactInternals;var l=Sn(),c=sr(t),h=Ri(l,c);h.tag=1,h.payload=i,s!=null&&(h.callback=s),i=tr(t,h,c),i!==null&&(si(i,t,c,l),_a(i,t,c))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var s=Sn(),l=sr(t),c=Ri(s,l);c.tag=2,i!=null&&(c.callback=i),i=tr(t,c,l),i!==null&&(si(i,t,l,s),_a(i,t,l))}};function Mh(t,i,s,l,c,h,E){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,h,E):i.prototype&&i.prototype.isPureReactComponent?!to(s,l)||!to(c,h):!0}function Eh(t,i,s){var l=!1,c=Qi,h=i.contextType;return typeof h=="object"&&h!==null?h=Xn(h):(c=Tn(i)?Tr:fn.current,l=i.contextTypes,h=(l=l!=null)?os(t,c):Qi),i=new i(s,h),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Aa,t.stateNode=i,i._reactInternals=t,l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=c,t.__reactInternalMemoizedMaskedChildContext=h),i}function Th(t,i,s,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(s,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(s,l),i.state!==t&&Aa.enqueueReplaceState(i,i.state,null)}function Nu(t,i,s,l){var c=t.stateNode;c.props=s,c.state=t.memoizedState,c.refs={},xu(t);var h=i.contextType;typeof h=="object"&&h!==null?c.context=Xn(h):(h=Tn(i)?Tr:fn.current,c.context=os(t,h)),c.state=t.memoizedState,h=i.getDerivedStateFromProps,typeof h=="function"&&(Lu(t,i,h,s),c.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(i=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),i!==c.state&&Aa.enqueueReplaceState(c,c.state,null),xa(t,s,c,l),c.state=t.memoizedState),typeof c.componentDidMount=="function"&&(t.flags|=4194308)}function ps(t,i){try{var s="",l=i;do s+=He(l),l=l.return;while(l);var c=s}catch(h){c=`
Error generating stack: `+h.message+`
`+h.stack}return{value:t,source:i,stack:c,digest:null}}function Uu(t,i,s){return{value:t,source:null,stack:s??null,digest:i??null}}function Iu(t,i){try{console.error(i.value)}catch(s){setTimeout(function(){throw s})}}var av=typeof WeakMap=="function"?WeakMap:Map;function wh(t,i,s){s=Ri(-1,s),s.tag=3,s.payload={element:null};var l=i.value;return s.callback=function(){Na||(Na=!0,Ku=l),Iu(t,i)},s}function Ah(t,i,s){s=Ri(-1,s),s.tag=3;var l=t.type.getDerivedStateFromError;if(typeof l=="function"){var c=i.value;s.payload=function(){return l(c)},s.callback=function(){Iu(t,i)}}var h=t.stateNode;return h!==null&&typeof h.componentDidCatch=="function"&&(s.callback=function(){Iu(t,i),typeof l!="function"&&(ir===null?ir=new Set([this]):ir.add(this));var E=i.stack;this.componentDidCatch(i.value,{componentStack:E!==null?E:""})}),s}function Rh(t,i,s){var l=t.pingCache;if(l===null){l=t.pingCache=new av;var c=new Set;l.set(i,c)}else c=l.get(i),c===void 0&&(c=new Set,l.set(i,c));c.has(s)||(c.add(s),t=yv.bind(null,t,i,s),i.then(t,t))}function Ch(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function bh(t,i,s,l,c){return(t.mode&1)===0?(t===i?t.flags|=65536:(t.flags|=128,s.flags|=131072,s.flags&=-52805,s.tag===1&&(s.alternate===null?s.tag=17:(i=Ri(-1,1),i.tag=2,tr(s,i,1))),s.lanes|=1),t):(t.flags|=65536,t.lanes=c,t)}var lv=b.ReactCurrentOwner,wn=!1;function xn(t,i,s,l){i.child=t===null?$d(i,null,s,l):cs(i,t.child,s,l)}function Ph(t,i,s,l,c){s=s.render;var h=i.ref;return ds(i,c),l=Au(t,i,s,l,h,c),s=Ru(),t!==null&&!wn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~c,Ci(t,i,c)):(zt&&s&&uu(i),i.flags|=1,xn(t,i,l,c),i.child)}function Dh(t,i,s,l,c){if(t===null){var h=s.type;return typeof h=="function"&&!ic(h)&&h.defaultProps===void 0&&s.compare===null&&s.defaultProps===void 0?(i.tag=15,i.type=h,Lh(t,i,h,l,c)):(t=za(s.type,null,l,i,i.mode,c),t.ref=i.ref,t.return=i,i.child=t)}if(h=t.child,(t.lanes&c)===0){var E=h.memoizedProps;if(s=s.compare,s=s!==null?s:to,s(E,l)&&t.ref===i.ref)return Ci(t,i,c)}return i.flags|=1,t=ar(h,l),t.ref=i.ref,t.return=i,i.child=t}function Lh(t,i,s,l,c){if(t!==null){var h=t.memoizedProps;if(to(h,l)&&t.ref===i.ref)if(wn=!1,i.pendingProps=l=h,(t.lanes&c)!==0)(t.flags&131072)!==0&&(wn=!0);else return i.lanes=t.lanes,Ci(t,i,c)}return Fu(t,i,s,l,c)}function Nh(t,i,s){var l=i.pendingProps,c=l.children,h=t!==null?t.memoizedState:null;if(l.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ft(gs,On),On|=s;else{if((s&1073741824)===0)return t=h!==null?h.baseLanes|s:s,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,Ft(gs,On),On|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=h!==null?h.baseLanes:s,Ft(gs,On),On|=l}else h!==null?(l=h.baseLanes|s,i.memoizedState=null):l=s,Ft(gs,On),On|=l;return xn(t,i,c,s),i.child}function Uh(t,i){var s=i.ref;(t===null&&s!==null||t!==null&&t.ref!==s)&&(i.flags|=512,i.flags|=2097152)}function Fu(t,i,s,l,c){var h=Tn(s)?Tr:fn.current;return h=os(i,h),ds(i,c),s=Au(t,i,s,l,h,c),l=Ru(),t!==null&&!wn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~c,Ci(t,i,c)):(zt&&l&&uu(i),i.flags|=1,xn(t,i,s,c),i.child)}function Ih(t,i,s,l,c){if(Tn(s)){var h=!0;ca(i)}else h=!1;if(ds(i,c),i.stateNode===null)Ca(t,i),Eh(i,s,l),Nu(i,s,l,c),l=!0;else if(t===null){var E=i.stateNode,D=i.memoizedProps;E.props=D;var O=E.context,ee=s.contextType;typeof ee=="object"&&ee!==null?ee=Xn(ee):(ee=Tn(s)?Tr:fn.current,ee=os(i,ee));var ve=s.getDerivedStateFromProps,xe=typeof ve=="function"||typeof E.getSnapshotBeforeUpdate=="function";xe||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(D!==l||O!==ee)&&Th(i,E,l,ee),er=!1;var ge=i.memoizedState;E.state=ge,xa(i,l,E,c),O=i.memoizedState,D!==l||ge!==O||En.current||er?(typeof ve=="function"&&(Lu(i,s,ve,l),O=i.memoizedState),(D=er||Mh(i,s,D,l,ge,O,ee))?(xe||typeof E.UNSAFE_componentWillMount!="function"&&typeof E.componentWillMount!="function"||(typeof E.componentWillMount=="function"&&E.componentWillMount(),typeof E.UNSAFE_componentWillMount=="function"&&E.UNSAFE_componentWillMount()),typeof E.componentDidMount=="function"&&(i.flags|=4194308)):(typeof E.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=O),E.props=l,E.state=O,E.context=ee,l=D):(typeof E.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{E=i.stateNode,Zd(t,i),D=i.memoizedProps,ee=i.type===i.elementType?D:ni(i.type,D),E.props=ee,xe=i.pendingProps,ge=E.context,O=s.contextType,typeof O=="object"&&O!==null?O=Xn(O):(O=Tn(s)?Tr:fn.current,O=os(i,O));var Oe=s.getDerivedStateFromProps;(ve=typeof Oe=="function"||typeof E.getSnapshotBeforeUpdate=="function")||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(D!==xe||ge!==O)&&Th(i,E,l,O),er=!1,ge=i.memoizedState,E.state=ge,xa(i,l,E,c);var Xe=i.memoizedState;D!==xe||ge!==Xe||En.current||er?(typeof Oe=="function"&&(Lu(i,s,Oe,l),Xe=i.memoizedState),(ee=er||Mh(i,s,ee,l,ge,Xe,O)||!1)?(ve||typeof E.UNSAFE_componentWillUpdate!="function"&&typeof E.componentWillUpdate!="function"||(typeof E.componentWillUpdate=="function"&&E.componentWillUpdate(l,Xe,O),typeof E.UNSAFE_componentWillUpdate=="function"&&E.UNSAFE_componentWillUpdate(l,Xe,O)),typeof E.componentDidUpdate=="function"&&(i.flags|=4),typeof E.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof E.componentDidUpdate!="function"||D===t.memoizedProps&&ge===t.memoizedState||(i.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||D===t.memoizedProps&&ge===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=Xe),E.props=l,E.state=Xe,E.context=O,l=ee):(typeof E.componentDidUpdate!="function"||D===t.memoizedProps&&ge===t.memoizedState||(i.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||D===t.memoizedProps&&ge===t.memoizedState||(i.flags|=1024),l=!1)}return Ou(t,i,s,l,h,c)}function Ou(t,i,s,l,c,h){Uh(t,i);var E=(i.flags&128)!==0;if(!l&&!E)return c&&Bd(i,s,!1),Ci(t,i,h);l=i.stateNode,lv.current=i;var D=E&&typeof s.getDerivedStateFromError!="function"?null:l.render();return i.flags|=1,t!==null&&E?(i.child=cs(i,t.child,null,h),i.child=cs(i,null,D,h)):xn(t,i,D,h),i.memoizedState=l.state,c&&Bd(i,s,!0),i.child}function Fh(t){var i=t.stateNode;i.pendingContext?kd(t,i.pendingContext,i.pendingContext!==i.context):i.context&&kd(t,i.context,!1),Su(t,i.containerInfo)}function Oh(t,i,s,l,c){return us(),hu(c),i.flags|=256,xn(t,i,s,l),i.child}var ku={dehydrated:null,treeContext:null,retryLane:0};function zu(t){return{baseLanes:t,cachePool:null,transitions:null}}function kh(t,i,s){var l=i.pendingProps,c=Bt.current,h=!1,E=(i.flags&128)!==0,D;if((D=E)||(D=t!==null&&t.memoizedState===null?!1:(c&2)!==0),D?(h=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(c|=1),Ft(Bt,c&1),t===null)return du(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((i.mode&1)===0?i.lanes=1:t.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(E=l.children,t=l.fallback,h?(l=i.mode,h=i.child,E={mode:"hidden",children:E},(l&1)===0&&h!==null?(h.childLanes=0,h.pendingProps=E):h=Ba(E,l,0,null),t=Ur(t,l,s,null),h.return=i,t.return=i,h.sibling=t,i.child=h,i.child.memoizedState=zu(s),i.memoizedState=ku,t):Bu(i,E));if(c=t.memoizedState,c!==null&&(D=c.dehydrated,D!==null))return uv(t,i,E,l,D,c,s);if(h){h=l.fallback,E=i.mode,c=t.child,D=c.sibling;var O={mode:"hidden",children:l.children};return(E&1)===0&&i.child!==c?(l=i.child,l.childLanes=0,l.pendingProps=O,i.deletions=null):(l=ar(c,O),l.subtreeFlags=c.subtreeFlags&14680064),D!==null?h=ar(D,h):(h=Ur(h,E,s,null),h.flags|=2),h.return=i,l.return=i,l.sibling=h,i.child=l,l=h,h=i.child,E=t.child.memoizedState,E=E===null?zu(s):{baseLanes:E.baseLanes|s,cachePool:null,transitions:E.transitions},h.memoizedState=E,h.childLanes=t.childLanes&~s,i.memoizedState=ku,l}return h=t.child,t=h.sibling,l=ar(h,{mode:"visible",children:l.children}),(i.mode&1)===0&&(l.lanes=s),l.return=i,l.sibling=null,t!==null&&(s=i.deletions,s===null?(i.deletions=[t],i.flags|=16):s.push(t)),i.child=l,i.memoizedState=null,l}function Bu(t,i){return i=Ba({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function Ra(t,i,s,l){return l!==null&&hu(l),cs(i,t.child,null,s),t=Bu(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function uv(t,i,s,l,c,h,E){if(s)return i.flags&256?(i.flags&=-257,l=Uu(Error(n(422))),Ra(t,i,E,l)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(h=l.fallback,c=i.mode,l=Ba({mode:"visible",children:l.children},c,0,null),h=Ur(h,c,E,null),h.flags|=2,l.return=i,h.return=i,l.sibling=h,i.child=l,(i.mode&1)!==0&&cs(i,t.child,null,E),i.child.memoizedState=zu(E),i.memoizedState=ku,h);if((i.mode&1)===0)return Ra(t,i,E,null);if(c.data==="$!"){if(l=c.nextSibling&&c.nextSibling.dataset,l)var D=l.dgst;return l=D,h=Error(n(419)),l=Uu(h,l,void 0),Ra(t,i,E,l)}if(D=(E&t.childLanes)!==0,wn||D){if(l=nn,l!==null){switch(E&-E){case 4:c=2;break;case 16:c=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:c=32;break;case 536870912:c=268435456;break;default:c=0}c=(c&(l.suspendedLanes|E))!==0?0:c,c!==0&&c!==h.retryLane&&(h.retryLane=c,Ai(t,c),si(l,t,c,-1))}return nc(),l=Uu(Error(n(421))),Ra(t,i,E,l)}return c.data==="$?"?(i.flags|=128,i.child=t.child,i=Mv.bind(null,t),c._reactRetry=i,null):(t=h.treeContext,Fn=Ki(c.nextSibling),In=i,zt=!0,ti=null,t!==null&&(Gn[Wn++]=Ti,Gn[Wn++]=wi,Gn[Wn++]=wr,Ti=t.id,wi=t.overflow,wr=i),i=Bu(i,l.children),i.flags|=4096,i)}function zh(t,i,s){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),vu(t.return,i,s)}function Hu(t,i,s,l,c){var h=t.memoizedState;h===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:s,tailMode:c}:(h.isBackwards=i,h.rendering=null,h.renderingStartTime=0,h.last=l,h.tail=s,h.tailMode=c)}function Bh(t,i,s){var l=i.pendingProps,c=l.revealOrder,h=l.tail;if(xn(t,i,l.children,s),l=Bt.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&zh(t,s,i);else if(t.tag===19)zh(t,s,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}if(Ft(Bt,l),(i.mode&1)===0)i.memoizedState=null;else switch(c){case"forwards":for(s=i.child,c=null;s!==null;)t=s.alternate,t!==null&&Sa(t)===null&&(c=s),s=s.sibling;s=c,s===null?(c=i.child,i.child=null):(c=s.sibling,s.sibling=null),Hu(i,!1,c,s,h);break;case"backwards":for(s=null,c=i.child,i.child=null;c!==null;){if(t=c.alternate,t!==null&&Sa(t)===null){i.child=c;break}t=c.sibling,c.sibling=s,s=c,c=t}Hu(i,!0,s,null,h);break;case"together":Hu(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Ca(t,i){(i.mode&1)===0&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function Ci(t,i,s){if(t!==null&&(i.dependencies=t.dependencies),Pr|=i.lanes,(s&i.childLanes)===0)return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,s=ar(t,t.pendingProps),i.child=s,s.return=i;t.sibling!==null;)t=t.sibling,s=s.sibling=ar(t,t.pendingProps),s.return=i;s.sibling=null}return i.child}function cv(t,i,s){switch(i.tag){case 3:Fh(i),us();break;case 5:eh(i);break;case 1:Tn(i.type)&&ca(i);break;case 4:Su(i,i.stateNode.containerInfo);break;case 10:var l=i.type._context,c=i.memoizedProps.value;Ft(ga,l._currentValue),l._currentValue=c;break;case 13:if(l=i.memoizedState,l!==null)return l.dehydrated!==null?(Ft(Bt,Bt.current&1),i.flags|=128,null):(s&i.child.childLanes)!==0?kh(t,i,s):(Ft(Bt,Bt.current&1),t=Ci(t,i,s),t!==null?t.sibling:null);Ft(Bt,Bt.current&1);break;case 19:if(l=(s&i.childLanes)!==0,(t.flags&128)!==0){if(l)return Bh(t,i,s);i.flags|=128}if(c=i.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),Ft(Bt,Bt.current),l)break;return null;case 22:case 23:return i.lanes=0,Nh(t,i,s)}return Ci(t,i,s)}var Hh,Vu,Vh,Gh;Hh=function(t,i){for(var s=i.child;s!==null;){if(s.tag===5||s.tag===6)t.appendChild(s.stateNode);else if(s.tag!==4&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return;s=s.return}s.sibling.return=s.return,s=s.sibling}},Vu=function(){},Vh=function(t,i,s,l){var c=t.memoizedProps;if(c!==l){t=i.stateNode,Cr(pi.current);var h=null;switch(s){case"input":c=At(t,c),l=At(t,l),h=[];break;case"select":c=ae({},c,{value:void 0}),l=ae({},l,{value:void 0}),h=[];break;case"textarea":c=Dt(t,c),l=Dt(t,l),h=[];break;default:typeof c.onClick!="function"&&typeof l.onClick=="function"&&(t.onclick=aa)}$e(s,l);var E;s=null;for(ee in c)if(!l.hasOwnProperty(ee)&&c.hasOwnProperty(ee)&&c[ee]!=null)if(ee==="style"){var D=c[ee];for(E in D)D.hasOwnProperty(E)&&(s||(s={}),s[E]="")}else ee!=="dangerouslySetInnerHTML"&&ee!=="children"&&ee!=="suppressContentEditableWarning"&&ee!=="suppressHydrationWarning"&&ee!=="autoFocus"&&(a.hasOwnProperty(ee)?h||(h=[]):(h=h||[]).push(ee,null));for(ee in l){var O=l[ee];if(D=c!=null?c[ee]:void 0,l.hasOwnProperty(ee)&&O!==D&&(O!=null||D!=null))if(ee==="style")if(D){for(E in D)!D.hasOwnProperty(E)||O&&O.hasOwnProperty(E)||(s||(s={}),s[E]="");for(E in O)O.hasOwnProperty(E)&&D[E]!==O[E]&&(s||(s={}),s[E]=O[E])}else s||(h||(h=[]),h.push(ee,s)),s=O;else ee==="dangerouslySetInnerHTML"?(O=O?O.__html:void 0,D=D?D.__html:void 0,O!=null&&D!==O&&(h=h||[]).push(ee,O)):ee==="children"?typeof O!="string"&&typeof O!="number"||(h=h||[]).push(ee,""+O):ee!=="suppressContentEditableWarning"&&ee!=="suppressHydrationWarning"&&(a.hasOwnProperty(ee)?(O!=null&&ee==="onScroll"&&Ot("scroll",t),h||D===O||(h=[])):(h=h||[]).push(ee,O))}s&&(h=h||[]).push("style",s);var ee=h;(i.updateQueue=ee)&&(i.flags|=4)}},Gh=function(t,i,s,l){s!==l&&(i.flags|=4)};function vo(t,i){if(!zt)switch(t.tailMode){case"hidden":i=t.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?t.tail=null:s.sibling=null;break;case"collapsed":s=t.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function hn(t){var i=t.alternate!==null&&t.alternate.child===t.child,s=0,l=0;if(i)for(var c=t.child;c!==null;)s|=c.lanes|c.childLanes,l|=c.subtreeFlags&14680064,l|=c.flags&14680064,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)s|=c.lanes|c.childLanes,l|=c.subtreeFlags,l|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=l,t.childLanes=s,i}function fv(t,i,s){var l=i.pendingProps;switch(cu(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return hn(i),null;case 1:return Tn(i.type)&&ua(),hn(i),null;case 3:return l=i.stateNode,hs(),kt(En),kt(fn),Eu(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(pa(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,ti!==null&&(Ju(ti),ti=null))),Vu(t,i),hn(i),null;case 5:yu(i);var c=Cr(fo.current);if(s=i.type,t!==null&&i.stateNode!=null)Vh(t,i,s,l,c),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!l){if(i.stateNode===null)throw Error(n(166));return hn(i),null}if(t=Cr(pi.current),pa(i)){l=i.stateNode,s=i.type;var h=i.memoizedProps;switch(l[hi]=i,l[oo]=h,t=(i.mode&1)!==0,s){case"dialog":Ot("cancel",l),Ot("close",l);break;case"iframe":case"object":case"embed":Ot("load",l);break;case"video":case"audio":for(c=0;c<io.length;c++)Ot(io[c],l);break;case"source":Ot("error",l);break;case"img":case"image":case"link":Ot("error",l),Ot("load",l);break;case"details":Ot("toggle",l);break;case"input":st(l,h),Ot("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!h.multiple},Ot("invalid",l);break;case"textarea":C(l,h),Ot("invalid",l)}$e(s,h),c=null;for(var E in h)if(h.hasOwnProperty(E)){var D=h[E];E==="children"?typeof D=="string"?l.textContent!==D&&(h.suppressHydrationWarning!==!0&&oa(l.textContent,D,t),c=["children",D]):typeof D=="number"&&l.textContent!==""+D&&(h.suppressHydrationWarning!==!0&&oa(l.textContent,D,t),c=["children",""+D]):a.hasOwnProperty(E)&&D!=null&&E==="onScroll"&&Ot("scroll",l)}switch(s){case"input":dt(l),_t(l,h,!0);break;case"textarea":dt(l),I(l);break;case"select":case"option":break;default:typeof h.onClick=="function"&&(l.onclick=aa)}l=c,i.updateQueue=l,l!==null&&(i.flags|=4)}else{E=c.nodeType===9?c:c.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=$(s)),t==="http://www.w3.org/1999/xhtml"?s==="script"?(t=E.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof l.is=="string"?t=E.createElement(s,{is:l.is}):(t=E.createElement(s),s==="select"&&(E=t,l.multiple?E.multiple=!0:l.size&&(E.size=l.size))):t=E.createElementNS(t,s),t[hi]=i,t[oo]=l,Hh(t,i,!1,!1),i.stateNode=t;e:{switch(E=Re(s,l),s){case"dialog":Ot("cancel",t),Ot("close",t),c=l;break;case"iframe":case"object":case"embed":Ot("load",t),c=l;break;case"video":case"audio":for(c=0;c<io.length;c++)Ot(io[c],t);c=l;break;case"source":Ot("error",t),c=l;break;case"img":case"image":case"link":Ot("error",t),Ot("load",t),c=l;break;case"details":Ot("toggle",t),c=l;break;case"input":st(t,l),c=At(t,l),Ot("invalid",t);break;case"option":c=l;break;case"select":t._wrapperState={wasMultiple:!!l.multiple},c=ae({},l,{value:void 0}),Ot("invalid",t);break;case"textarea":C(t,l),c=Dt(t,l),Ot("invalid",t);break;default:c=l}$e(s,c),D=c;for(h in D)if(D.hasOwnProperty(h)){var O=D[h];h==="style"?Pe(t,O):h==="dangerouslySetInnerHTML"?(O=O?O.__html:void 0,O!=null&&Le(t,O)):h==="children"?typeof O=="string"?(s!=="textarea"||O!=="")&&ye(t,O):typeof O=="number"&&ye(t,""+O):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(a.hasOwnProperty(h)?O!=null&&h==="onScroll"&&Ot("scroll",t):O!=null&&L(t,h,O,E))}switch(s){case"input":dt(t),_t(t,l,!1);break;case"textarea":dt(t),I(t);break;case"option":l.value!=null&&t.setAttribute("value",""+_e(l.value));break;case"select":t.multiple=!!l.multiple,h=l.value,h!=null?Pt(t,!!l.multiple,h,!1):l.defaultValue!=null&&Pt(t,!!l.multiple,l.defaultValue,!0);break;default:typeof c.onClick=="function"&&(t.onclick=aa)}switch(s){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return hn(i),null;case 6:if(t&&i.stateNode!=null)Gh(t,i,t.memoizedProps,l);else{if(typeof l!="string"&&i.stateNode===null)throw Error(n(166));if(s=Cr(fo.current),Cr(pi.current),pa(i)){if(l=i.stateNode,s=i.memoizedProps,l[hi]=i,(h=l.nodeValue!==s)&&(t=In,t!==null))switch(t.tag){case 3:oa(l.nodeValue,s,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&oa(l.nodeValue,s,(t.mode&1)!==0)}h&&(i.flags|=4)}else l=(s.nodeType===9?s:s.ownerDocument).createTextNode(l),l[hi]=i,i.stateNode=l}return hn(i),null;case 13:if(kt(Bt),l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(zt&&Fn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)jd(),us(),i.flags|=98560,h=!1;else if(h=pa(i),l!==null&&l.dehydrated!==null){if(t===null){if(!h)throw Error(n(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(n(317));h[hi]=i}else us(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;hn(i),h=!1}else ti!==null&&(Ju(ti),ti=null),h=!0;if(!h)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=s,i):(l=l!==null,l!==(t!==null&&t.memoizedState!==null)&&l&&(i.child.flags|=8192,(i.mode&1)!==0&&(t===null||(Bt.current&1)!==0?Qt===0&&(Qt=3):nc())),i.updateQueue!==null&&(i.flags|=4),hn(i),null);case 4:return hs(),Vu(t,i),t===null&&ro(i.stateNode.containerInfo),hn(i),null;case 10:return gu(i.type._context),hn(i),null;case 17:return Tn(i.type)&&ua(),hn(i),null;case 19:if(kt(Bt),h=i.memoizedState,h===null)return hn(i),null;if(l=(i.flags&128)!==0,E=h.rendering,E===null)if(l)vo(h,!1);else{if(Qt!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(E=Sa(t),E!==null){for(i.flags|=128,vo(h,!1),l=E.updateQueue,l!==null&&(i.updateQueue=l,i.flags|=4),i.subtreeFlags=0,l=s,s=i.child;s!==null;)h=s,t=l,h.flags&=14680066,E=h.alternate,E===null?(h.childLanes=0,h.lanes=t,h.child=null,h.subtreeFlags=0,h.memoizedProps=null,h.memoizedState=null,h.updateQueue=null,h.dependencies=null,h.stateNode=null):(h.childLanes=E.childLanes,h.lanes=E.lanes,h.child=E.child,h.subtreeFlags=0,h.deletions=null,h.memoizedProps=E.memoizedProps,h.memoizedState=E.memoizedState,h.updateQueue=E.updateQueue,h.type=E.type,t=E.dependencies,h.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),s=s.sibling;return Ft(Bt,Bt.current&1|2),i.child}t=t.sibling}h.tail!==null&&X()>vs&&(i.flags|=128,l=!0,vo(h,!1),i.lanes=4194304)}else{if(!l)if(t=Sa(E),t!==null){if(i.flags|=128,l=!0,s=t.updateQueue,s!==null&&(i.updateQueue=s,i.flags|=4),vo(h,!0),h.tail===null&&h.tailMode==="hidden"&&!E.alternate&&!zt)return hn(i),null}else 2*X()-h.renderingStartTime>vs&&s!==1073741824&&(i.flags|=128,l=!0,vo(h,!1),i.lanes=4194304);h.isBackwards?(E.sibling=i.child,i.child=E):(s=h.last,s!==null?s.sibling=E:i.child=E,h.last=E)}return h.tail!==null?(i=h.tail,h.rendering=i,h.tail=i.sibling,h.renderingStartTime=X(),i.sibling=null,s=Bt.current,Ft(Bt,l?s&1|2:s&1),i):(hn(i),null);case 22:case 23:return tc(),l=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==l&&(i.flags|=8192),l&&(i.mode&1)!==0?(On&1073741824)!==0&&(hn(i),i.subtreeFlags&6&&(i.flags|=8192)):hn(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function dv(t,i){switch(cu(i),i.tag){case 1:return Tn(i.type)&&ua(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return hs(),kt(En),kt(fn),Eu(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 5:return yu(i),null;case 13:if(kt(Bt),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));us()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return kt(Bt),null;case 4:return hs(),null;case 10:return gu(i.type._context),null;case 22:case 23:return tc(),null;case 24:return null;default:return null}}var ba=!1,pn=!1,hv=typeof WeakSet=="function"?WeakSet:Set,Be=null;function ms(t,i){var s=t.ref;if(s!==null)if(typeof s=="function")try{s(null)}catch(l){Vt(t,i,l)}else s.current=null}function Gu(t,i,s){try{s()}catch(l){Vt(t,i,l)}}var Wh=!1;function pv(t,i){if(tu=$o,t=Md(),Yl(t)){if("selectionStart"in t)var s={start:t.selectionStart,end:t.selectionEnd};else e:{s=(s=t.ownerDocument)&&s.defaultView||window;var l=s.getSelection&&s.getSelection();if(l&&l.rangeCount!==0){s=l.anchorNode;var c=l.anchorOffset,h=l.focusNode;l=l.focusOffset;try{s.nodeType,h.nodeType}catch{s=null;break e}var E=0,D=-1,O=-1,ee=0,ve=0,xe=t,ge=null;t:for(;;){for(var Oe;xe!==s||c!==0&&xe.nodeType!==3||(D=E+c),xe!==h||l!==0&&xe.nodeType!==3||(O=E+l),xe.nodeType===3&&(E+=xe.nodeValue.length),(Oe=xe.firstChild)!==null;)ge=xe,xe=Oe;for(;;){if(xe===t)break t;if(ge===s&&++ee===c&&(D=E),ge===h&&++ve===l&&(O=E),(Oe=xe.nextSibling)!==null)break;xe=ge,ge=xe.parentNode}xe=Oe}s=D===-1||O===-1?null:{start:D,end:O}}else s=null}s=s||{start:0,end:0}}else s=null;for(nu={focusedElem:t,selectionRange:s},$o=!1,Be=i;Be!==null;)if(i=Be,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,Be=t;else for(;Be!==null;){i=Be;try{var Xe=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(Xe!==null){var qe=Xe.memoizedProps,jt=Xe.memoizedState,q=i.stateNode,W=q.getSnapshotBeforeUpdate(i.elementType===i.type?qe:ni(i.type,qe),jt);q.__reactInternalSnapshotBeforeUpdate=W}break;case 3:var K=i.stateNode.containerInfo;K.nodeType===1?K.textContent="":K.nodeType===9&&K.documentElement&&K.removeChild(K.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(we){Vt(i,i.return,we)}if(t=i.sibling,t!==null){t.return=i.return,Be=t;break}Be=i.return}return Xe=Wh,Wh=!1,Xe}function _o(t,i,s){var l=i.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var c=l=l.next;do{if((c.tag&t)===t){var h=c.destroy;c.destroy=void 0,h!==void 0&&Gu(i,s,h)}c=c.next}while(c!==l)}}function Pa(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var s=i=i.next;do{if((s.tag&t)===t){var l=s.create;s.destroy=l()}s=s.next}while(s!==i)}}function Wu(t){var i=t.ref;if(i!==null){var s=t.stateNode;switch(t.tag){case 5:t=s;break;default:t=s}typeof i=="function"?i(t):i.current=t}}function Xh(t){var i=t.alternate;i!==null&&(t.alternate=null,Xh(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[hi],delete i[oo],delete i[ou],delete i[Kg],delete i[Zg])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function jh(t){return t.tag===5||t.tag===3||t.tag===4}function Yh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||jh(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Xu(t,i,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?s.nodeType===8?s.parentNode.insertBefore(t,i):s.insertBefore(t,i):(s.nodeType===8?(i=s.parentNode,i.insertBefore(t,s)):(i=s,i.appendChild(t)),s=s._reactRootContainer,s!=null||i.onclick!==null||(i.onclick=aa));else if(l!==4&&(t=t.child,t!==null))for(Xu(t,i,s),t=t.sibling;t!==null;)Xu(t,i,s),t=t.sibling}function ju(t,i,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?s.insertBefore(t,i):s.appendChild(t);else if(l!==4&&(t=t.child,t!==null))for(ju(t,i,s),t=t.sibling;t!==null;)ju(t,i,s),t=t.sibling}var on=null,ii=!1;function nr(t,i,s){for(s=s.child;s!==null;)qh(t,i,s),s=s.sibling}function qh(t,i,s){if(at&&typeof at.onCommitFiberUnmount=="function")try{at.onCommitFiberUnmount(Ze,s)}catch{}switch(s.tag){case 5:pn||ms(s,i);case 6:var l=on,c=ii;on=null,nr(t,i,s),on=l,ii=c,on!==null&&(ii?(t=on,s=s.stateNode,t.nodeType===8?t.parentNode.removeChild(s):t.removeChild(s)):on.removeChild(s.stateNode));break;case 18:on!==null&&(ii?(t=on,s=s.stateNode,t.nodeType===8?su(t.parentNode,s):t.nodeType===1&&su(t,s),$s(t)):su(on,s.stateNode));break;case 4:l=on,c=ii,on=s.stateNode.containerInfo,ii=!0,nr(t,i,s),on=l,ii=c;break;case 0:case 11:case 14:case 15:if(!pn&&(l=s.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){c=l=l.next;do{var h=c,E=h.destroy;h=h.tag,E!==void 0&&((h&2)!==0||(h&4)!==0)&&Gu(s,i,E),c=c.next}while(c!==l)}nr(t,i,s);break;case 1:if(!pn&&(ms(s,i),l=s.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=s.memoizedProps,l.state=s.memoizedState,l.componentWillUnmount()}catch(D){Vt(s,i,D)}nr(t,i,s);break;case 21:nr(t,i,s);break;case 22:s.mode&1?(pn=(l=pn)||s.memoizedState!==null,nr(t,i,s),pn=l):nr(t,i,s);break;default:nr(t,i,s)}}function $h(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var s=t.stateNode;s===null&&(s=t.stateNode=new hv),i.forEach(function(l){var c=Ev.bind(null,t,l);s.has(l)||(s.add(l),l.then(c,c))})}}function ri(t,i){var s=i.deletions;if(s!==null)for(var l=0;l<s.length;l++){var c=s[l];try{var h=t,E=i,D=E;e:for(;D!==null;){switch(D.tag){case 5:on=D.stateNode,ii=!1;break e;case 3:on=D.stateNode.containerInfo,ii=!0;break e;case 4:on=D.stateNode.containerInfo,ii=!0;break e}D=D.return}if(on===null)throw Error(n(160));qh(h,E,c),on=null,ii=!1;var O=c.alternate;O!==null&&(O.return=null),c.return=null}catch(ee){Vt(c,i,ee)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Kh(i,t),i=i.sibling}function Kh(t,i){var s=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(ri(i,t),gi(t),l&4){try{_o(3,t,t.return),Pa(3,t)}catch(qe){Vt(t,t.return,qe)}try{_o(5,t,t.return)}catch(qe){Vt(t,t.return,qe)}}break;case 1:ri(i,t),gi(t),l&512&&s!==null&&ms(s,s.return);break;case 5:if(ri(i,t),gi(t),l&512&&s!==null&&ms(s,s.return),t.flags&32){var c=t.stateNode;try{ye(c,"")}catch(qe){Vt(t,t.return,qe)}}if(l&4&&(c=t.stateNode,c!=null)){var h=t.memoizedProps,E=s!==null?s.memoizedProps:h,D=t.type,O=t.updateQueue;if(t.updateQueue=null,O!==null)try{D==="input"&&h.type==="radio"&&h.name!=null&&Je(c,h),Re(D,E);var ee=Re(D,h);for(E=0;E<O.length;E+=2){var ve=O[E],xe=O[E+1];ve==="style"?Pe(c,xe):ve==="dangerouslySetInnerHTML"?Le(c,xe):ve==="children"?ye(c,xe):L(c,ve,xe,ee)}switch(D){case"input":Ve(c,h);break;case"textarea":g(c,h);break;case"select":var ge=c._wrapperState.wasMultiple;c._wrapperState.wasMultiple=!!h.multiple;var Oe=h.value;Oe!=null?Pt(c,!!h.multiple,Oe,!1):ge!==!!h.multiple&&(h.defaultValue!=null?Pt(c,!!h.multiple,h.defaultValue,!0):Pt(c,!!h.multiple,h.multiple?[]:"",!1))}c[oo]=h}catch(qe){Vt(t,t.return,qe)}}break;case 6:if(ri(i,t),gi(t),l&4){if(t.stateNode===null)throw Error(n(162));c=t.stateNode,h=t.memoizedProps;try{c.nodeValue=h}catch(qe){Vt(t,t.return,qe)}}break;case 3:if(ri(i,t),gi(t),l&4&&s!==null&&s.memoizedState.isDehydrated)try{$s(i.containerInfo)}catch(qe){Vt(t,t.return,qe)}break;case 4:ri(i,t),gi(t);break;case 13:ri(i,t),gi(t),c=t.child,c.flags&8192&&(h=c.memoizedState!==null,c.stateNode.isHidden=h,!h||c.alternate!==null&&c.alternate.memoizedState!==null||($u=X())),l&4&&$h(t);break;case 22:if(ve=s!==null&&s.memoizedState!==null,t.mode&1?(pn=(ee=pn)||ve,ri(i,t),pn=ee):ri(i,t),gi(t),l&8192){if(ee=t.memoizedState!==null,(t.stateNode.isHidden=ee)&&!ve&&(t.mode&1)!==0)for(Be=t,ve=t.child;ve!==null;){for(xe=Be=ve;Be!==null;){switch(ge=Be,Oe=ge.child,ge.tag){case 0:case 11:case 14:case 15:_o(4,ge,ge.return);break;case 1:ms(ge,ge.return);var Xe=ge.stateNode;if(typeof Xe.componentWillUnmount=="function"){l=ge,s=ge.return;try{i=l,Xe.props=i.memoizedProps,Xe.state=i.memoizedState,Xe.componentWillUnmount()}catch(qe){Vt(l,s,qe)}}break;case 5:ms(ge,ge.return);break;case 22:if(ge.memoizedState!==null){Jh(xe);continue}}Oe!==null?(Oe.return=ge,Be=Oe):Jh(xe)}ve=ve.sibling}e:for(ve=null,xe=t;;){if(xe.tag===5){if(ve===null){ve=xe;try{c=xe.stateNode,ee?(h=c.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none"):(D=xe.stateNode,O=xe.memoizedProps.style,E=O!=null&&O.hasOwnProperty("display")?O.display:null,D.style.display=Te("display",E))}catch(qe){Vt(t,t.return,qe)}}}else if(xe.tag===6){if(ve===null)try{xe.stateNode.nodeValue=ee?"":xe.memoizedProps}catch(qe){Vt(t,t.return,qe)}}else if((xe.tag!==22&&xe.tag!==23||xe.memoizedState===null||xe===t)&&xe.child!==null){xe.child.return=xe,xe=xe.child;continue}if(xe===t)break e;for(;xe.sibling===null;){if(xe.return===null||xe.return===t)break e;ve===xe&&(ve=null),xe=xe.return}ve===xe&&(ve=null),xe.sibling.return=xe.return,xe=xe.sibling}}break;case 19:ri(i,t),gi(t),l&4&&$h(t);break;case 21:break;default:ri(i,t),gi(t)}}function gi(t){var i=t.flags;if(i&2){try{e:{for(var s=t.return;s!==null;){if(jh(s)){var l=s;break e}s=s.return}throw Error(n(160))}switch(l.tag){case 5:var c=l.stateNode;l.flags&32&&(ye(c,""),l.flags&=-33);var h=Yh(t);ju(t,h,c);break;case 3:case 4:var E=l.stateNode.containerInfo,D=Yh(t);Xu(t,D,E);break;default:throw Error(n(161))}}catch(O){Vt(t,t.return,O)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function mv(t,i,s){Be=t,Zh(t)}function Zh(t,i,s){for(var l=(t.mode&1)!==0;Be!==null;){var c=Be,h=c.child;if(c.tag===22&&l){var E=c.memoizedState!==null||ba;if(!E){var D=c.alternate,O=D!==null&&D.memoizedState!==null||pn;D=ba;var ee=pn;if(ba=E,(pn=O)&&!ee)for(Be=c;Be!==null;)E=Be,O=E.child,E.tag===22&&E.memoizedState!==null?ep(c):O!==null?(O.return=E,Be=O):ep(c);for(;h!==null;)Be=h,Zh(h),h=h.sibling;Be=c,ba=D,pn=ee}Qh(t)}else(c.subtreeFlags&8772)!==0&&h!==null?(h.return=c,Be=h):Qh(t)}}function Qh(t){for(;Be!==null;){var i=Be;if((i.flags&8772)!==0){var s=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:pn||Pa(5,i);break;case 1:var l=i.stateNode;if(i.flags&4&&!pn)if(s===null)l.componentDidMount();else{var c=i.elementType===i.type?s.memoizedProps:ni(i.type,s.memoizedProps);l.componentDidUpdate(c,s.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var h=i.updateQueue;h!==null&&Jd(i,h,l);break;case 3:var E=i.updateQueue;if(E!==null){if(s=null,i.child!==null)switch(i.child.tag){case 5:s=i.child.stateNode;break;case 1:s=i.child.stateNode}Jd(i,E,s)}break;case 5:var D=i.stateNode;if(s===null&&i.flags&4){s=D;var O=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":O.autoFocus&&s.focus();break;case"img":O.src&&(s.src=O.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var ee=i.alternate;if(ee!==null){var ve=ee.memoizedState;if(ve!==null){var xe=ve.dehydrated;xe!==null&&$s(xe)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}pn||i.flags&512&&Wu(i)}catch(ge){Vt(i,i.return,ge)}}if(i===t){Be=null;break}if(s=i.sibling,s!==null){s.return=i.return,Be=s;break}Be=i.return}}function Jh(t){for(;Be!==null;){var i=Be;if(i===t){Be=null;break}var s=i.sibling;if(s!==null){s.return=i.return,Be=s;break}Be=i.return}}function ep(t){for(;Be!==null;){var i=Be;try{switch(i.tag){case 0:case 11:case 15:var s=i.return;try{Pa(4,i)}catch(O){Vt(i,s,O)}break;case 1:var l=i.stateNode;if(typeof l.componentDidMount=="function"){var c=i.return;try{l.componentDidMount()}catch(O){Vt(i,c,O)}}var h=i.return;try{Wu(i)}catch(O){Vt(i,h,O)}break;case 5:var E=i.return;try{Wu(i)}catch(O){Vt(i,E,O)}}}catch(O){Vt(i,i.return,O)}if(i===t){Be=null;break}var D=i.sibling;if(D!==null){D.return=i.return,Be=D;break}Be=i.return}}var gv=Math.ceil,Da=b.ReactCurrentDispatcher,Yu=b.ReactCurrentOwner,Yn=b.ReactCurrentBatchConfig,Mt=0,nn=null,Yt=null,an=0,On=0,gs=Zi(0),Qt=0,xo=null,Pr=0,La=0,qu=0,So=null,An=null,$u=0,vs=1/0,bi=null,Na=!1,Ku=null,ir=null,Ua=!1,rr=null,Ia=0,yo=0,Zu=null,Fa=-1,Oa=0;function Sn(){return(Mt&6)!==0?X():Fa!==-1?Fa:Fa=X()}function sr(t){return(t.mode&1)===0?1:(Mt&2)!==0&&an!==0?an&-an:Jg.transition!==null?(Oa===0&&(Oa=_n()),Oa):(t=vt,t!==0||(t=window.event,t=t===void 0?16:nd(t.type)),t)}function si(t,i,s,l){if(50<yo)throw yo=0,Zu=null,Error(n(185));Xt(t,s,l),((Mt&2)===0||t!==nn)&&(t===nn&&((Mt&2)===0&&(La|=s),Qt===4&&or(t,an)),Rn(t,l),s===1&&Mt===0&&(i.mode&1)===0&&(vs=X()+500,fa&&Ji()))}function Rn(t,i){var s=t.callbackNode;yr(t,i);var l=Jn(t,t===nn?an:0);if(l===0)s!==null&&j(s),t.callbackNode=null,t.callbackPriority=0;else if(i=l&-l,t.callbackPriority!==i){if(s!=null&&j(s),i===1)t.tag===0?Qg(np.bind(null,t)):Hd(np.bind(null,t)),qg(function(){(Mt&6)===0&&Ji()}),s=null;else{switch(qf(l)){case 1:s=Ce;break;case 4:s=We;break;case 16:s=Fe;break;case 536870912:s=rt;break;default:s=Fe}s=cp(s,tp.bind(null,t))}t.callbackPriority=i,t.callbackNode=s}}function tp(t,i){if(Fa=-1,Oa=0,(Mt&6)!==0)throw Error(n(327));var s=t.callbackNode;if(_s()&&t.callbackNode!==s)return null;var l=Jn(t,t===nn?an:0);if(l===0)return null;if((l&30)!==0||(l&t.expiredLanes)!==0||i)i=ka(t,l);else{i=l;var c=Mt;Mt|=2;var h=rp();(nn!==t||an!==i)&&(bi=null,vs=X()+500,Lr(t,i));do try{xv();break}catch(D){ip(t,D)}while(!0);mu(),Da.current=h,Mt=c,Yt!==null?i=0:(nn=null,an=0,i=Qt)}if(i!==0){if(i===2&&(c=It(t),c!==0&&(l=c,i=Qu(t,c))),i===1)throw s=xo,Lr(t,0),or(t,l),Rn(t,X()),s;if(i===6)or(t,l);else{if(c=t.current.alternate,(l&30)===0&&!vv(c)&&(i=ka(t,l),i===2&&(h=It(t),h!==0&&(l=h,i=Qu(t,h))),i===1))throw s=xo,Lr(t,0),or(t,l),Rn(t,X()),s;switch(t.finishedWork=c,t.finishedLanes=l,i){case 0:case 1:throw Error(n(345));case 2:Nr(t,An,bi);break;case 3:if(or(t,l),(l&130023424)===l&&(i=$u+500-X(),10<i)){if(Jn(t,0)!==0)break;if(c=t.suspendedLanes,(c&l)!==l){Sn(),t.pingedLanes|=t.suspendedLanes&c;break}t.timeoutHandle=ru(Nr.bind(null,t,An,bi),i);break}Nr(t,An,bi);break;case 4:if(or(t,l),(l&4194240)===l)break;for(i=t.eventTimes,c=-1;0<l;){var E=31-yt(l);h=1<<E,E=i[E],E>c&&(c=E),l&=~h}if(l=c,l=X()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*gv(l/1960))-l,10<l){t.timeoutHandle=ru(Nr.bind(null,t,An,bi),l);break}Nr(t,An,bi);break;case 5:Nr(t,An,bi);break;default:throw Error(n(329))}}}return Rn(t,X()),t.callbackNode===s?tp.bind(null,t):null}function Qu(t,i){var s=So;return t.current.memoizedState.isDehydrated&&(Lr(t,i).flags|=256),t=ka(t,i),t!==2&&(i=An,An=s,i!==null&&Ju(i)),t}function Ju(t){An===null?An=t:An.push.apply(An,t)}function vv(t){for(var i=t;;){if(i.flags&16384){var s=i.updateQueue;if(s!==null&&(s=s.stores,s!==null))for(var l=0;l<s.length;l++){var c=s[l],h=c.getSnapshot;c=c.value;try{if(!ei(h(),c))return!1}catch{return!1}}}if(s=i.child,i.subtreeFlags&16384&&s!==null)s.return=i,i=s;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function or(t,i){for(i&=~qu,i&=~La,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var s=31-yt(i),l=1<<s;t[s]=-1,i&=~l}}function np(t){if((Mt&6)!==0)throw Error(n(327));_s();var i=Jn(t,0);if((i&1)===0)return Rn(t,X()),null;var s=ka(t,i);if(t.tag!==0&&s===2){var l=It(t);l!==0&&(i=l,s=Qu(t,l))}if(s===1)throw s=xo,Lr(t,0),or(t,i),Rn(t,X()),s;if(s===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,Nr(t,An,bi),Rn(t,X()),null}function ec(t,i){var s=Mt;Mt|=1;try{return t(i)}finally{Mt=s,Mt===0&&(vs=X()+500,fa&&Ji())}}function Dr(t){rr!==null&&rr.tag===0&&(Mt&6)===0&&_s();var i=Mt;Mt|=1;var s=Yn.transition,l=vt;try{if(Yn.transition=null,vt=1,t)return t()}finally{vt=l,Yn.transition=s,Mt=i,(Mt&6)===0&&Ji()}}function tc(){On=gs.current,kt(gs)}function Lr(t,i){t.finishedWork=null,t.finishedLanes=0;var s=t.timeoutHandle;if(s!==-1&&(t.timeoutHandle=-1,Yg(s)),Yt!==null)for(s=Yt.return;s!==null;){var l=s;switch(cu(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&ua();break;case 3:hs(),kt(En),kt(fn),Eu();break;case 5:yu(l);break;case 4:hs();break;case 13:kt(Bt);break;case 19:kt(Bt);break;case 10:gu(l.type._context);break;case 22:case 23:tc()}s=s.return}if(nn=t,Yt=t=ar(t.current,null),an=On=i,Qt=0,xo=null,qu=La=Pr=0,An=So=null,Rr!==null){for(i=0;i<Rr.length;i++)if(s=Rr[i],l=s.interleaved,l!==null){s.interleaved=null;var c=l.next,h=s.pending;if(h!==null){var E=h.next;h.next=c,l.next=E}s.pending=l}Rr=null}return t}function ip(t,i){do{var s=Yt;try{if(mu(),ya.current=wa,Ma){for(var l=Ht.memoizedState;l!==null;){var c=l.queue;c!==null&&(c.pending=null),l=l.next}Ma=!1}if(br=0,tn=Zt=Ht=null,ho=!1,po=0,Yu.current=null,s===null||s.return===null){Qt=1,xo=i,Yt=null;break}e:{var h=t,E=s.return,D=s,O=i;if(i=an,D.flags|=32768,O!==null&&typeof O=="object"&&typeof O.then=="function"){var ee=O,ve=D,xe=ve.tag;if((ve.mode&1)===0&&(xe===0||xe===11||xe===15)){var ge=ve.alternate;ge?(ve.updateQueue=ge.updateQueue,ve.memoizedState=ge.memoizedState,ve.lanes=ge.lanes):(ve.updateQueue=null,ve.memoizedState=null)}var Oe=Ch(E);if(Oe!==null){Oe.flags&=-257,bh(Oe,E,D,h,i),Oe.mode&1&&Rh(h,ee,i),i=Oe,O=ee;var Xe=i.updateQueue;if(Xe===null){var qe=new Set;qe.add(O),i.updateQueue=qe}else Xe.add(O);break e}else{if((i&1)===0){Rh(h,ee,i),nc();break e}O=Error(n(426))}}else if(zt&&D.mode&1){var jt=Ch(E);if(jt!==null){(jt.flags&65536)===0&&(jt.flags|=256),bh(jt,E,D,h,i),hu(ps(O,D));break e}}h=O=ps(O,D),Qt!==4&&(Qt=2),So===null?So=[h]:So.push(h),h=E;do{switch(h.tag){case 3:h.flags|=65536,i&=-i,h.lanes|=i;var q=wh(h,O,i);Qd(h,q);break e;case 1:D=O;var W=h.type,K=h.stateNode;if((h.flags&128)===0&&(typeof W.getDerivedStateFromError=="function"||K!==null&&typeof K.componentDidCatch=="function"&&(ir===null||!ir.has(K)))){h.flags|=65536,i&=-i,h.lanes|=i;var we=Ah(h,D,i);Qd(h,we);break e}}h=h.return}while(h!==null)}op(s)}catch(Ke){i=Ke,Yt===s&&s!==null&&(Yt=s=s.return);continue}break}while(!0)}function rp(){var t=Da.current;return Da.current=wa,t===null?wa:t}function nc(){(Qt===0||Qt===3||Qt===2)&&(Qt=4),nn===null||(Pr&268435455)===0&&(La&268435455)===0||or(nn,an)}function ka(t,i){var s=Mt;Mt|=2;var l=rp();(nn!==t||an!==i)&&(bi=null,Lr(t,i));do try{_v();break}catch(c){ip(t,c)}while(!0);if(mu(),Mt=s,Da.current=l,Yt!==null)throw Error(n(261));return nn=null,an=0,Qt}function _v(){for(;Yt!==null;)sp(Yt)}function xv(){for(;Yt!==null&&!ne();)sp(Yt)}function sp(t){var i=up(t.alternate,t,On);t.memoizedProps=t.pendingProps,i===null?op(t):Yt=i,Yu.current=null}function op(t){var i=t;do{var s=i.alternate;if(t=i.return,(i.flags&32768)===0){if(s=fv(s,i,On),s!==null){Yt=s;return}}else{if(s=dv(s,i),s!==null){s.flags&=32767,Yt=s;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Qt=6,Yt=null;return}}if(i=i.sibling,i!==null){Yt=i;return}Yt=i=t}while(i!==null);Qt===0&&(Qt=5)}function Nr(t,i,s){var l=vt,c=Yn.transition;try{Yn.transition=null,vt=1,Sv(t,i,s,l)}finally{Yn.transition=c,vt=l}return null}function Sv(t,i,s,l){do _s();while(rr!==null);if((Mt&6)!==0)throw Error(n(327));s=t.finishedWork;var c=t.finishedLanes;if(s===null)return null;if(t.finishedWork=null,t.finishedLanes=0,s===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var h=s.lanes|s.childLanes;if(cn(t,h),t===nn&&(Yt=nn=null,an=0),(s.subtreeFlags&2064)===0&&(s.flags&2064)===0||Ua||(Ua=!0,cp(Fe,function(){return _s(),null})),h=(s.flags&15990)!==0,(s.subtreeFlags&15990)!==0||h){h=Yn.transition,Yn.transition=null;var E=vt;vt=1;var D=Mt;Mt|=4,Yu.current=null,pv(t,s),Kh(s,t),Bg(nu),$o=!!tu,nu=tu=null,t.current=s,mv(s),re(),Mt=D,vt=E,Yn.transition=h}else t.current=s;if(Ua&&(Ua=!1,rr=t,Ia=c),h=t.pendingLanes,h===0&&(ir=null),Rt(s.stateNode),Rn(t,X()),i!==null)for(l=t.onRecoverableError,s=0;s<i.length;s++)c=i[s],l(c.value,{componentStack:c.stack,digest:c.digest});if(Na)throw Na=!1,t=Ku,Ku=null,t;return(Ia&1)!==0&&t.tag!==0&&_s(),h=t.pendingLanes,(h&1)!==0?t===Zu?yo++:(yo=0,Zu=t):yo=0,Ji(),null}function _s(){if(rr!==null){var t=qf(Ia),i=Yn.transition,s=vt;try{if(Yn.transition=null,vt=16>t?16:t,rr===null)var l=!1;else{if(t=rr,rr=null,Ia=0,(Mt&6)!==0)throw Error(n(331));var c=Mt;for(Mt|=4,Be=t.current;Be!==null;){var h=Be,E=h.child;if((Be.flags&16)!==0){var D=h.deletions;if(D!==null){for(var O=0;O<D.length;O++){var ee=D[O];for(Be=ee;Be!==null;){var ve=Be;switch(ve.tag){case 0:case 11:case 15:_o(8,ve,h)}var xe=ve.child;if(xe!==null)xe.return=ve,Be=xe;else for(;Be!==null;){ve=Be;var ge=ve.sibling,Oe=ve.return;if(Xh(ve),ve===ee){Be=null;break}if(ge!==null){ge.return=Oe,Be=ge;break}Be=Oe}}}var Xe=h.alternate;if(Xe!==null){var qe=Xe.child;if(qe!==null){Xe.child=null;do{var jt=qe.sibling;qe.sibling=null,qe=jt}while(qe!==null)}}Be=h}}if((h.subtreeFlags&2064)!==0&&E!==null)E.return=h,Be=E;else e:for(;Be!==null;){if(h=Be,(h.flags&2048)!==0)switch(h.tag){case 0:case 11:case 15:_o(9,h,h.return)}var q=h.sibling;if(q!==null){q.return=h.return,Be=q;break e}Be=h.return}}var W=t.current;for(Be=W;Be!==null;){E=Be;var K=E.child;if((E.subtreeFlags&2064)!==0&&K!==null)K.return=E,Be=K;else e:for(E=W;Be!==null;){if(D=Be,(D.flags&2048)!==0)try{switch(D.tag){case 0:case 11:case 15:Pa(9,D)}}catch(Ke){Vt(D,D.return,Ke)}if(D===E){Be=null;break e}var we=D.sibling;if(we!==null){we.return=D.return,Be=we;break e}Be=D.return}}if(Mt=c,Ji(),at&&typeof at.onPostCommitFiberRoot=="function")try{at.onPostCommitFiberRoot(Ze,t)}catch{}l=!0}return l}finally{vt=s,Yn.transition=i}}return!1}function ap(t,i,s){i=ps(s,i),i=wh(t,i,1),t=tr(t,i,1),i=Sn(),t!==null&&(Xt(t,1,i),Rn(t,i))}function Vt(t,i,s){if(t.tag===3)ap(t,t,s);else for(;i!==null;){if(i.tag===3){ap(i,t,s);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(ir===null||!ir.has(l))){t=ps(s,t),t=Ah(i,t,1),i=tr(i,t,1),t=Sn(),i!==null&&(Xt(i,1,t),Rn(i,t));break}}i=i.return}}function yv(t,i,s){var l=t.pingCache;l!==null&&l.delete(i),i=Sn(),t.pingedLanes|=t.suspendedLanes&s,nn===t&&(an&s)===s&&(Qt===4||Qt===3&&(an&130023424)===an&&500>X()-$u?Lr(t,0):qu|=s),Rn(t,i)}function lp(t,i){i===0&&((t.mode&1)===0?i=1:(i=gt,gt<<=1,(gt&130023424)===0&&(gt=4194304)));var s=Sn();t=Ai(t,i),t!==null&&(Xt(t,i,s),Rn(t,s))}function Mv(t){var i=t.memoizedState,s=0;i!==null&&(s=i.retryLane),lp(t,s)}function Ev(t,i){var s=0;switch(t.tag){case 13:var l=t.stateNode,c=t.memoizedState;c!==null&&(s=c.retryLane);break;case 19:l=t.stateNode;break;default:throw Error(n(314))}l!==null&&l.delete(i),lp(t,s)}var up;up=function(t,i,s){if(t!==null)if(t.memoizedProps!==i.pendingProps||En.current)wn=!0;else{if((t.lanes&s)===0&&(i.flags&128)===0)return wn=!1,cv(t,i,s);wn=(t.flags&131072)!==0}else wn=!1,zt&&(i.flags&1048576)!==0&&Vd(i,ha,i.index);switch(i.lanes=0,i.tag){case 2:var l=i.type;Ca(t,i),t=i.pendingProps;var c=os(i,fn.current);ds(i,s),c=Au(null,i,l,t,c,s);var h=Ru();return i.flags|=1,typeof c=="object"&&c!==null&&typeof c.render=="function"&&c.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Tn(l)?(h=!0,ca(i)):h=!1,i.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,xu(i),c.updater=Aa,i.stateNode=c,c._reactInternals=i,Nu(i,l,t,s),i=Ou(null,i,l,!0,h,s)):(i.tag=0,zt&&h&&uu(i),xn(null,i,c,s),i=i.child),i;case 16:l=i.elementType;e:{switch(Ca(t,i),t=i.pendingProps,c=l._init,l=c(l._payload),i.type=l,c=i.tag=wv(l),t=ni(l,t),c){case 0:i=Fu(null,i,l,t,s);break e;case 1:i=Ih(null,i,l,t,s);break e;case 11:i=Ph(null,i,l,t,s);break e;case 14:i=Dh(null,i,l,ni(l.type,t),s);break e}throw Error(n(306,l,""))}return i;case 0:return l=i.type,c=i.pendingProps,c=i.elementType===l?c:ni(l,c),Fu(t,i,l,c,s);case 1:return l=i.type,c=i.pendingProps,c=i.elementType===l?c:ni(l,c),Ih(t,i,l,c,s);case 3:e:{if(Fh(i),t===null)throw Error(n(387));l=i.pendingProps,h=i.memoizedState,c=h.element,Zd(t,i),xa(i,l,null,s);var E=i.memoizedState;if(l=E.element,h.isDehydrated)if(h={element:l,isDehydrated:!1,cache:E.cache,pendingSuspenseBoundaries:E.pendingSuspenseBoundaries,transitions:E.transitions},i.updateQueue.baseState=h,i.memoizedState=h,i.flags&256){c=ps(Error(n(423)),i),i=Oh(t,i,l,s,c);break e}else if(l!==c){c=ps(Error(n(424)),i),i=Oh(t,i,l,s,c);break e}else for(Fn=Ki(i.stateNode.containerInfo.firstChild),In=i,zt=!0,ti=null,s=$d(i,null,l,s),i.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling;else{if(us(),l===c){i=Ci(t,i,s);break e}xn(t,i,l,s)}i=i.child}return i;case 5:return eh(i),t===null&&du(i),l=i.type,c=i.pendingProps,h=t!==null?t.memoizedProps:null,E=c.children,iu(l,c)?E=null:h!==null&&iu(l,h)&&(i.flags|=32),Uh(t,i),xn(t,i,E,s),i.child;case 6:return t===null&&du(i),null;case 13:return kh(t,i,s);case 4:return Su(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=cs(i,null,l,s):xn(t,i,l,s),i.child;case 11:return l=i.type,c=i.pendingProps,c=i.elementType===l?c:ni(l,c),Ph(t,i,l,c,s);case 7:return xn(t,i,i.pendingProps,s),i.child;case 8:return xn(t,i,i.pendingProps.children,s),i.child;case 12:return xn(t,i,i.pendingProps.children,s),i.child;case 10:e:{if(l=i.type._context,c=i.pendingProps,h=i.memoizedProps,E=c.value,Ft(ga,l._currentValue),l._currentValue=E,h!==null)if(ei(h.value,E)){if(h.children===c.children&&!En.current){i=Ci(t,i,s);break e}}else for(h=i.child,h!==null&&(h.return=i);h!==null;){var D=h.dependencies;if(D!==null){E=h.child;for(var O=D.firstContext;O!==null;){if(O.context===l){if(h.tag===1){O=Ri(-1,s&-s),O.tag=2;var ee=h.updateQueue;if(ee!==null){ee=ee.shared;var ve=ee.pending;ve===null?O.next=O:(O.next=ve.next,ve.next=O),ee.pending=O}}h.lanes|=s,O=h.alternate,O!==null&&(O.lanes|=s),vu(h.return,s,i),D.lanes|=s;break}O=O.next}}else if(h.tag===10)E=h.type===i.type?null:h.child;else if(h.tag===18){if(E=h.return,E===null)throw Error(n(341));E.lanes|=s,D=E.alternate,D!==null&&(D.lanes|=s),vu(E,s,i),E=h.sibling}else E=h.child;if(E!==null)E.return=h;else for(E=h;E!==null;){if(E===i){E=null;break}if(h=E.sibling,h!==null){h.return=E.return,E=h;break}E=E.return}h=E}xn(t,i,c.children,s),i=i.child}return i;case 9:return c=i.type,l=i.pendingProps.children,ds(i,s),c=Xn(c),l=l(c),i.flags|=1,xn(t,i,l,s),i.child;case 14:return l=i.type,c=ni(l,i.pendingProps),c=ni(l.type,c),Dh(t,i,l,c,s);case 15:return Lh(t,i,i.type,i.pendingProps,s);case 17:return l=i.type,c=i.pendingProps,c=i.elementType===l?c:ni(l,c),Ca(t,i),i.tag=1,Tn(l)?(t=!0,ca(i)):t=!1,ds(i,s),Eh(i,l,c),Nu(i,l,c,s),Ou(null,i,l,!0,t,s);case 19:return Bh(t,i,s);case 22:return Nh(t,i,s)}throw Error(n(156,i.tag))};function cp(t,i){return T(t,i)}function Tv(t,i,s,l){this.tag=t,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qn(t,i,s,l){return new Tv(t,i,s,l)}function ic(t){return t=t.prototype,!(!t||!t.isReactComponent)}function wv(t){if(typeof t=="function")return ic(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Q)return 11;if(t===de)return 14}return 2}function ar(t,i){var s=t.alternate;return s===null?(s=qn(t.tag,i,t.key,t.mode),s.elementType=t.elementType,s.type=t.type,s.stateNode=t.stateNode,s.alternate=t,t.alternate=s):(s.pendingProps=i,s.type=t.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=t.flags&14680064,s.childLanes=t.childLanes,s.lanes=t.lanes,s.child=t.child,s.memoizedProps=t.memoizedProps,s.memoizedState=t.memoizedState,s.updateQueue=t.updateQueue,i=t.dependencies,s.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},s.sibling=t.sibling,s.index=t.index,s.ref=t.ref,s}function za(t,i,s,l,c,h){var E=2;if(l=t,typeof t=="function")ic(t)&&(E=1);else if(typeof t=="string")E=5;else e:switch(t){case z:return Ur(s.children,c,h,i);case Y:E=8,c|=8;break;case P:return t=qn(12,s,i,c|2),t.elementType=P,t.lanes=h,t;case se:return t=qn(13,s,i,c),t.elementType=se,t.lanes=h,t;case ue:return t=qn(19,s,i,c),t.elementType=ue,t.lanes=h,t;case he:return Ba(s,c,h,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case R:E=10;break e;case H:E=9;break e;case Q:E=11;break e;case de:E=14;break e;case oe:E=16,l=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=qn(E,s,i,c),i.elementType=t,i.type=l,i.lanes=h,i}function Ur(t,i,s,l){return t=qn(7,t,l,i),t.lanes=s,t}function Ba(t,i,s,l){return t=qn(22,t,l,i),t.elementType=he,t.lanes=s,t.stateNode={isHidden:!1},t}function rc(t,i,s){return t=qn(6,t,null,i),t.lanes=s,t}function sc(t,i,s){return i=qn(4,t.children!==null?t.children:[],t.key,i),i.lanes=s,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function Av(t,i,s,l,c){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=un(0),this.expirationTimes=un(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=un(0),this.identifierPrefix=l,this.onRecoverableError=c,this.mutableSourceEagerHydrationData=null}function oc(t,i,s,l,c,h,E,D,O){return t=new Av(t,i,s,D,O),i===1?(i=1,h===!0&&(i|=8)):i=0,h=qn(3,null,null,i),t.current=h,h.stateNode=t,h.memoizedState={element:l,isDehydrated:s,cache:null,transitions:null,pendingSuspenseBoundaries:null},xu(h),t}function Rv(t,i,s){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:k,key:l==null?null:""+l,children:t,containerInfo:i,implementation:s}}function fp(t){if(!t)return Qi;t=t._reactInternals;e:{if(yi(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Tn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var s=t.type;if(Tn(s))return zd(t,s,i)}return i}function dp(t,i,s,l,c,h,E,D,O){return t=oc(s,l,!0,t,c,h,E,D,O),t.context=fp(null),s=t.current,l=Sn(),c=sr(s),h=Ri(l,c),h.callback=i??null,tr(s,h,c),t.current.lanes=c,Xt(t,c,l),Rn(t,l),t}function Ha(t,i,s,l){var c=i.current,h=Sn(),E=sr(c);return s=fp(s),i.context===null?i.context=s:i.pendingContext=s,i=Ri(h,E),i.payload={element:t},l=l===void 0?null:l,l!==null&&(i.callback=l),t=tr(c,i,E),t!==null&&(si(t,c,E,h),_a(t,c,E)),E}function Va(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function hp(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var s=t.retryLane;t.retryLane=s!==0&&s<i?s:i}}function ac(t,i){hp(t,i),(t=t.alternate)&&hp(t,i)}function Cv(){return null}var pp=typeof reportError=="function"?reportError:function(t){console.error(t)};function lc(t){this._internalRoot=t}Ga.prototype.render=lc.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));Ha(t,i,null,null)},Ga.prototype.unmount=lc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;Dr(function(){Ha(null,t,null,null)}),i[Mi]=null}};function Ga(t){this._internalRoot=t}Ga.prototype.unstable_scheduleHydration=function(t){if(t){var i=Zf();t={blockedOn:null,target:t,priority:i};for(var s=0;s<Yi.length&&i!==0&&i<Yi[s].priority;s++);Yi.splice(s,0,t),s===0&&ed(t)}};function uc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Wa(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function mp(){}function bv(t,i,s,l,c){if(c){if(typeof l=="function"){var h=l;l=function(){var ee=Va(E);h.call(ee)}}var E=dp(i,l,t,0,null,!1,!1,"",mp);return t._reactRootContainer=E,t[Mi]=E.current,ro(t.nodeType===8?t.parentNode:t),Dr(),E}for(;c=t.lastChild;)t.removeChild(c);if(typeof l=="function"){var D=l;l=function(){var ee=Va(O);D.call(ee)}}var O=oc(t,0,!1,null,null,!1,!1,"",mp);return t._reactRootContainer=O,t[Mi]=O.current,ro(t.nodeType===8?t.parentNode:t),Dr(function(){Ha(i,O,s,l)}),O}function Xa(t,i,s,l,c){var h=s._reactRootContainer;if(h){var E=h;if(typeof c=="function"){var D=c;c=function(){var O=Va(E);D.call(O)}}Ha(i,E,t,c)}else E=bv(s,i,t,c,l);return Va(E)}$f=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var s=Kt(i.pendingLanes);s!==0&&(Mr(i,s|1),Rn(i,X()),(Mt&6)===0&&(vs=X()+500,Ji()))}break;case 13:Dr(function(){var l=Ai(t,1);if(l!==null){var c=Sn();si(l,t,1,c)}}),ac(t,1)}},Ul=function(t){if(t.tag===13){var i=Ai(t,134217728);if(i!==null){var s=Sn();si(i,t,134217728,s)}ac(t,134217728)}},Kf=function(t){if(t.tag===13){var i=sr(t),s=Ai(t,i);if(s!==null){var l=Sn();si(s,t,i,l)}ac(t,i)}},Zf=function(){return vt},Qf=function(t,i){var s=vt;try{return vt=t,i()}finally{vt=s}},Me=function(t,i,s){switch(i){case"input":if(Ve(t,s),i=s.name,s.type==="radio"&&i!=null){for(s=t;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<s.length;i++){var l=s[i];if(l!==t&&l.form===t.form){var c=la(l);if(!c)throw Error(n(90));Wt(l),Ve(l,c)}}}break;case"textarea":g(t,s);break;case"select":i=s.value,i!=null&&Pt(t,!!s.multiple,i,!1)}},ut=ec,Ct=Dr;var Pv={usingClientEntryPoint:!1,Events:[ao,rs,la,me,Ye,ec]},Mo={findFiberByHostInstance:Er,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Dv={bundleType:Mo.bundleType,version:Mo.version,rendererPackageName:Mo.rendererPackageName,rendererConfig:Mo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:b.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Xo(t),t===null?null:t.stateNode},findFiberByHostInstance:Mo.findFiberByHostInstance||Cv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ja=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ja.isDisabled&&ja.supportsFiber)try{Ze=ja.inject(Dv),at=ja}catch{}}return Cn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Pv,Cn.createPortal=function(t,i){var s=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!uc(i))throw Error(n(200));return Rv(t,i,null,s)},Cn.createRoot=function(t,i){if(!uc(t))throw Error(n(299));var s=!1,l="",c=pp;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onRecoverableError!==void 0&&(c=i.onRecoverableError)),i=oc(t,1,!1,null,null,s,!1,l,c),t[Mi]=i.current,ro(t.nodeType===8?t.parentNode:t),new lc(i)},Cn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=Xo(i),t=t===null?null:t.stateNode,t},Cn.flushSync=function(t){return Dr(t)},Cn.hydrate=function(t,i,s){if(!Wa(i))throw Error(n(200));return Xa(null,t,i,!0,s)},Cn.hydrateRoot=function(t,i,s){if(!uc(t))throw Error(n(405));var l=s!=null&&s.hydratedSources||null,c=!1,h="",E=pp;if(s!=null&&(s.unstable_strictMode===!0&&(c=!0),s.identifierPrefix!==void 0&&(h=s.identifierPrefix),s.onRecoverableError!==void 0&&(E=s.onRecoverableError)),i=dp(i,null,t,1,s??null,c,!1,h,E),t[Mi]=i.current,ro(t),l)for(t=0;t<l.length;t++)s=l[t],c=s._getVersion,c=c(s._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[s,c]:i.mutableSourceEagerHydrationData.push(s,c);return new Ga(i)},Cn.render=function(t,i,s){if(!Wa(i))throw Error(n(200));return Xa(null,t,i,!1,s)},Cn.unmountComponentAtNode=function(t){if(!Wa(t))throw Error(n(40));return t._reactRootContainer?(Dr(function(){Xa(null,null,t,!1,function(){t._reactRootContainer=null,t[Mi]=null})}),!0):!1},Cn.unstable_batchedUpdates=ec,Cn.unstable_renderSubtreeIntoContainer=function(t,i,s,l){if(!Wa(s))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return Xa(t,i,s,!1,l)},Cn.version="18.3.1-next-f1338f8080-20240426",Cn}var Ep;function Bv(){if(Ep)return dc.exports;Ep=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),dc.exports=zv(),dc.exports}var Tp;function Hv(){if(Tp)return Ya;Tp=1;var o=Bv();return Ya.createRoot=o.createRoot,Ya.hydrateRoot=o.hydrateRoot,Ya}var Vv=Hv();const Gv=Tm(Vv);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const zf="180",Wv=0,wp=1,Xv=2,wm=1,jv=2,Ii=3,_r=0,Dn=1,Fi=2,gr=0,Us=1,Yc=2,Ap=3,Rp=4,Yv=5,Gr=100,qv=101,$v=102,Kv=103,Zv=104,Qv=200,Jv=201,e_=202,t_=203,qc=204,$c=205,n_=206,i_=207,r_=208,s_=209,o_=210,a_=211,l_=212,u_=213,c_=214,Kc=0,Zc=1,Qc=2,Fs=3,Jc=4,ef=5,tf=6,nf=7,Am=0,f_=1,d_=2,vr=0,h_=1,p_=2,m_=3,g_=4,v_=5,__=6,x_=7,Rm=300,Os=301,ks=302,rf=303,sf=304,Pl=306,of=1e3,fi=1001,af=1002,Hn=1003,S_=1004,qa=1005,Pn=1006,mc=1007,Xr=1008,zi=1009,Cm=1010,bm=1011,Do=1012,Bf=1013,Yr=1014,_i=1015,Hs=1016,Hf=1017,Vf=1018,Lo=1020,Pm=35902,Dm=35899,Lm=1021,Nm=1022,Zn=1023,No=1026,Uo=1027,Um=1028,Gf=1029,Im=1030,Wf=1031,Xf=1033,xl=33776,Sl=33777,yl=33778,Ml=33779,lf=35840,uf=35841,cf=35842,ff=35843,df=36196,hf=37492,pf=37496,mf=37808,gf=37809,vf=37810,_f=37811,xf=37812,Sf=37813,yf=37814,Mf=37815,Ef=37816,Tf=37817,wf=37818,Af=37819,Rf=37820,Cf=37821,bf=36492,Pf=36494,Df=36495,Lf=36283,Nf=36284,Uf=36285,If=36286,y_=3200,M_=3201,E_=0,T_=1,mr="",Kn="srgb",zs="srgb-linear",Tl="linear",Nt="srgb",xs=7680,Cp=519,w_=512,A_=513,R_=514,Fm=515,C_=516,b_=517,P_=518,D_=519,bp=35044,Pp="300 es",xi=2e3,wl=2001;class Vs{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){const r=this._listeners;if(r===void 0)return;const a=r[e];if(a!==void 0){const u=a.indexOf(n);u!==-1&&a.splice(u,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const r=n[e.type];if(r!==void 0){e.target=this;const a=r.slice(0);for(let u=0,f=a.length;u<f;u++)a[u].call(this,e);e.target=null}}}const mn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],gc=Math.PI/180,Ff=180/Math.PI;function Fo(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(mn[o&255]+mn[o>>8&255]+mn[o>>16&255]+mn[o>>24&255]+"-"+mn[e&255]+mn[e>>8&255]+"-"+mn[e>>16&15|64]+mn[e>>24&255]+"-"+mn[n&63|128]+mn[n>>8&255]+"-"+mn[n>>16&255]+mn[n>>24&255]+mn[r&255]+mn[r>>8&255]+mn[r>>16&255]+mn[r>>24&255]).toLowerCase()}function xt(o,e,n){return Math.max(e,Math.min(n,o))}function L_(o,e){return(o%e+e)%e}function vc(o,e,n){return(1-n)*o+n*e}function To(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function bn(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class ft{constructor(e=0,n=0){ft.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,a=e.elements;return this.x=a[0]*n+a[3]*r+a[6],this.y=a[1]*n+a[4]*r+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=xt(this.x,e.x,n.x),this.y=xt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=xt(this.x,e,n),this.y=xt(this.y,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(xt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(xt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),a=Math.sin(n),u=this.x-e.x,f=this.y-e.y;return this.x=u*r-f*a+e.x,this.y=u*a+f*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Oo{constructor(e=0,n=0,r=0,a=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=a}static slerpFlat(e,n,r,a,u,f,d){let m=r[a+0],p=r[a+1],_=r[a+2],x=r[a+3];const S=u[f+0],M=u[f+1],w=u[f+2],A=u[f+3];if(d===0){e[n+0]=m,e[n+1]=p,e[n+2]=_,e[n+3]=x;return}if(d===1){e[n+0]=S,e[n+1]=M,e[n+2]=w,e[n+3]=A;return}if(x!==A||m!==S||p!==M||_!==w){let y=1-d;const v=m*S+p*M+_*w+x*A,F=v>=0?1:-1,L=1-v*v;if(L>Number.EPSILON){const V=Math.sqrt(L),k=Math.atan2(V,v*F);y=Math.sin(y*k)/V,d=Math.sin(d*k)/V}const b=d*F;if(m=m*y+S*b,p=p*y+M*b,_=_*y+w*b,x=x*y+A*b,y===1-d){const V=1/Math.sqrt(m*m+p*p+_*_+x*x);m*=V,p*=V,_*=V,x*=V}}e[n]=m,e[n+1]=p,e[n+2]=_,e[n+3]=x}static multiplyQuaternionsFlat(e,n,r,a,u,f){const d=r[a],m=r[a+1],p=r[a+2],_=r[a+3],x=u[f],S=u[f+1],M=u[f+2],w=u[f+3];return e[n]=d*w+_*x+m*M-p*S,e[n+1]=m*w+_*S+p*x-d*M,e[n+2]=p*w+_*M+d*S-m*x,e[n+3]=_*w-d*x-m*S-p*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,a){return this._x=e,this._y=n,this._z=r,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,a=e._y,u=e._z,f=e._order,d=Math.cos,m=Math.sin,p=d(r/2),_=d(a/2),x=d(u/2),S=m(r/2),M=m(a/2),w=m(u/2);switch(f){case"XYZ":this._x=S*_*x+p*M*w,this._y=p*M*x-S*_*w,this._z=p*_*w+S*M*x,this._w=p*_*x-S*M*w;break;case"YXZ":this._x=S*_*x+p*M*w,this._y=p*M*x-S*_*w,this._z=p*_*w-S*M*x,this._w=p*_*x+S*M*w;break;case"ZXY":this._x=S*_*x-p*M*w,this._y=p*M*x+S*_*w,this._z=p*_*w+S*M*x,this._w=p*_*x-S*M*w;break;case"ZYX":this._x=S*_*x-p*M*w,this._y=p*M*x+S*_*w,this._z=p*_*w-S*M*x,this._w=p*_*x+S*M*w;break;case"YZX":this._x=S*_*x+p*M*w,this._y=p*M*x+S*_*w,this._z=p*_*w-S*M*x,this._w=p*_*x-S*M*w;break;case"XZY":this._x=S*_*x-p*M*w,this._y=p*M*x-S*_*w,this._z=p*_*w+S*M*x,this._w=p*_*x+S*M*w;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+f)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,a=Math.sin(r);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],a=n[4],u=n[8],f=n[1],d=n[5],m=n[9],p=n[2],_=n[6],x=n[10],S=r+d+x;if(S>0){const M=.5/Math.sqrt(S+1);this._w=.25/M,this._x=(_-m)*M,this._y=(u-p)*M,this._z=(f-a)*M}else if(r>d&&r>x){const M=2*Math.sqrt(1+r-d-x);this._w=(_-m)/M,this._x=.25*M,this._y=(a+f)/M,this._z=(u+p)/M}else if(d>x){const M=2*Math.sqrt(1+d-r-x);this._w=(u-p)/M,this._x=(a+f)/M,this._y=.25*M,this._z=(m+_)/M}else{const M=2*Math.sqrt(1+x-r-d);this._w=(f-a)/M,this._x=(u+p)/M,this._y=(m+_)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(xt(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const a=Math.min(1,n/r);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,a=e._y,u=e._z,f=e._w,d=n._x,m=n._y,p=n._z,_=n._w;return this._x=r*_+f*d+a*p-u*m,this._y=a*_+f*m+u*d-r*p,this._z=u*_+f*p+r*m-a*d,this._w=f*_-r*d-a*m-u*p,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const r=this._x,a=this._y,u=this._z,f=this._w;let d=f*e._w+r*e._x+a*e._y+u*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=f,this._x=r,this._y=a,this._z=u,this;const m=1-d*d;if(m<=Number.EPSILON){const M=1-n;return this._w=M*f+n*this._w,this._x=M*r+n*this._x,this._y=M*a+n*this._y,this._z=M*u+n*this._z,this.normalize(),this}const p=Math.sqrt(m),_=Math.atan2(p,d),x=Math.sin((1-n)*_)/p,S=Math.sin(n*_)/p;return this._w=f*x+this._w*S,this._x=r*x+this._x*S,this._y=a*x+this._y*S,this._z=u*x+this._z*S,this._onChangeCallback(),this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),a=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(a*Math.sin(e),a*Math.cos(e),u*Math.sin(n),u*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class te{constructor(e=0,n=0,r=0){te.prototype.isVector3=!0,this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Dp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Dp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,a=this.z,u=e.elements;return this.x=u[0]*n+u[3]*r+u[6]*a,this.y=u[1]*n+u[4]*r+u[7]*a,this.z=u[2]*n+u[5]*r+u[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,u=e.elements,f=1/(u[3]*n+u[7]*r+u[11]*a+u[15]);return this.x=(u[0]*n+u[4]*r+u[8]*a+u[12])*f,this.y=(u[1]*n+u[5]*r+u[9]*a+u[13])*f,this.z=(u[2]*n+u[6]*r+u[10]*a+u[14])*f,this}applyQuaternion(e){const n=this.x,r=this.y,a=this.z,u=e.x,f=e.y,d=e.z,m=e.w,p=2*(f*a-d*r),_=2*(d*n-u*a),x=2*(u*r-f*n);return this.x=n+m*p+f*x-d*_,this.y=r+m*_+d*p-u*x,this.z=a+m*x+u*_-f*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,a=this.z,u=e.elements;return this.x=u[0]*n+u[4]*r+u[8]*a,this.y=u[1]*n+u[5]*r+u[9]*a,this.z=u[2]*n+u[6]*r+u[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=xt(this.x,e.x,n.x),this.y=xt(this.y,e.y,n.y),this.z=xt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=xt(this.x,e,n),this.y=xt(this.y,e,n),this.z=xt(this.z,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(xt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,a=e.y,u=e.z,f=n.x,d=n.y,m=n.z;return this.x=a*m-u*d,this.y=u*f-r*m,this.z=r*d-a*f,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return _c.copy(this).projectOnVector(e),this.sub(_c)}reflect(e){return this.sub(_c.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(xt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,a=this.z-e.z;return n*n+r*r+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const a=Math.sin(n)*e;return this.x=a*Math.sin(r),this.y=Math.cos(n)*e,this.z=a*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=a,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const _c=new te,Dp=new Oo;class ht{constructor(e,n,r,a,u,f,d,m,p){ht.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,a,u,f,d,m,p)}set(e,n,r,a,u,f,d,m,p){const _=this.elements;return _[0]=e,_[1]=a,_[2]=d,_[3]=n,_[4]=u,_[5]=m,_[6]=r,_[7]=f,_[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,u=this.elements,f=r[0],d=r[3],m=r[6],p=r[1],_=r[4],x=r[7],S=r[2],M=r[5],w=r[8],A=a[0],y=a[3],v=a[6],F=a[1],L=a[4],b=a[7],V=a[2],k=a[5],z=a[8];return u[0]=f*A+d*F+m*V,u[3]=f*y+d*L+m*k,u[6]=f*v+d*b+m*z,u[1]=p*A+_*F+x*V,u[4]=p*y+_*L+x*k,u[7]=p*v+_*b+x*z,u[2]=S*A+M*F+w*V,u[5]=S*y+M*L+w*k,u[8]=S*v+M*b+w*z,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],a=e[2],u=e[3],f=e[4],d=e[5],m=e[6],p=e[7],_=e[8];return n*f*_-n*d*p-r*u*_+r*d*m+a*u*p-a*f*m}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],u=e[3],f=e[4],d=e[5],m=e[6],p=e[7],_=e[8],x=_*f-d*p,S=d*m-_*u,M=p*u-f*m,w=n*x+r*S+a*M;if(w===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/w;return e[0]=x*A,e[1]=(a*p-_*r)*A,e[2]=(d*r-a*f)*A,e[3]=S*A,e[4]=(_*n-a*m)*A,e[5]=(a*u-d*n)*A,e[6]=M*A,e[7]=(r*m-p*n)*A,e[8]=(f*n-r*u)*A,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,a,u,f,d){const m=Math.cos(u),p=Math.sin(u);return this.set(r*m,r*p,-r*(m*f+p*d)+f+e,-a*p,a*m,-a*(-p*f+m*d)+d+n,0,0,1),this}scale(e,n){return this.premultiply(xc.makeScale(e,n)),this}rotate(e){return this.premultiply(xc.makeRotation(-e)),this}translate(e,n){return this.premultiply(xc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<9;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const xc=new ht;function Om(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Al(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function N_(){const o=Al("canvas");return o.style.display="block",o}const Lp={};function Io(o){o in Lp||(Lp[o]=!0,console.warn(o))}function U_(o,e,n){return new Promise(function(r,a){function u(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:a();break;case o.TIMEOUT_EXPIRED:setTimeout(u,n);break;default:r()}}setTimeout(u,n)})}const Np=new ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Up=new ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function I_(){const o={enabled:!0,workingColorSpace:zs,spaces:{},convert:function(a,u,f){return this.enabled===!1||u===f||!u||!f||(this.spaces[u].transfer===Nt&&(a.r=Oi(a.r),a.g=Oi(a.g),a.b=Oi(a.b)),this.spaces[u].primaries!==this.spaces[f].primaries&&(a.applyMatrix3(this.spaces[u].toXYZ),a.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===Nt&&(a.r=Is(a.r),a.g=Is(a.g),a.b=Is(a.b))),a},workingToColorSpace:function(a,u){return this.convert(a,this.workingColorSpace,u)},colorSpaceToWorking:function(a,u){return this.convert(a,u,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===mr?Tl:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,u=this.workingColorSpace){return a.fromArray(this.spaces[u].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,u,f){return a.copy(this.spaces[u].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,u){return Io("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(a,u)},toWorkingColorSpace:function(a,u){return Io("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(a,u)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return o.define({[zs]:{primaries:e,whitePoint:r,transfer:Tl,toXYZ:Np,fromXYZ:Up,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Kn},outputColorSpaceConfig:{drawingBufferColorSpace:Kn}},[Kn]:{primaries:e,whitePoint:r,transfer:Nt,toXYZ:Np,fromXYZ:Up,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Kn}}}),o}const Tt=I_();function Oi(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Is(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let Ss;class F_{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Ss===void 0&&(Ss=Al("canvas")),Ss.width=e.width,Ss.height=e.height;const a=Ss.getContext("2d");e instanceof ImageData?a.putImageData(e,0,0):a.drawImage(e,0,0,e.width,e.height),r=Ss}return r.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Al("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const a=r.getImageData(0,0,e.width,e.height),u=a.data;for(let f=0;f<u.length;f++)u[f]=Oi(u[f]/255)*255;return r.putImageData(a,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(Oi(n[r]/255)*255):n[r]=Oi(n[r]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let O_=0;class jf{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:O_++}),this.uuid=Fo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},a=this.data;if(a!==null){let u;if(Array.isArray(a)){u=[];for(let f=0,d=a.length;f<d;f++)a[f].isDataTexture?u.push(Sc(a[f].image)):u.push(Sc(a[f]))}else u=Sc(a);r.url=u}return n||(e.images[this.uuid]=r),r}}function Sc(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?F_.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let k_=0;const yc=new te;class Mn extends Vs{constructor(e=Mn.DEFAULT_IMAGE,n=Mn.DEFAULT_MAPPING,r=fi,a=fi,u=Pn,f=Xr,d=Zn,m=zi,p=Mn.DEFAULT_ANISOTROPY,_=mr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:k_++}),this.uuid=Fo(),this.name="",this.source=new jf(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=u,this.minFilter=f,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new ft(0,0),this.repeat=new ft(1,1),this.center=new ft(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(yc).x}get height(){return this.source.getSize(yc).y}get depth(){return this.source.getSize(yc).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const r=e[n];if(r===void 0){console.warn(`THREE.Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){console.warn(`THREE.Texture.setValues(): property '${n}' does not exist.`);continue}a&&r&&a.isVector2&&r.isVector2||a&&r&&a.isVector3&&r.isVector3||a&&r&&a.isMatrix3&&r.isMatrix3?a.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Rm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case of:e.x=e.x-Math.floor(e.x);break;case fi:e.x=e.x<0?0:1;break;case af:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case of:e.y=e.y-Math.floor(e.y);break;case fi:e.y=e.y<0?0:1;break;case af:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Mn.DEFAULT_IMAGE=null;Mn.DEFAULT_MAPPING=Rm;Mn.DEFAULT_ANISOTROPY=1;class Gt{constructor(e=0,n=0,r=0,a=1){Gt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=r,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,a){return this.x=e,this.y=n,this.z=r,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,u=this.w,f=e.elements;return this.x=f[0]*n+f[4]*r+f[8]*a+f[12]*u,this.y=f[1]*n+f[5]*r+f[9]*a+f[13]*u,this.z=f[2]*n+f[6]*r+f[10]*a+f[14]*u,this.w=f[3]*n+f[7]*r+f[11]*a+f[15]*u,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,a,u;const m=e.elements,p=m[0],_=m[4],x=m[8],S=m[1],M=m[5],w=m[9],A=m[2],y=m[6],v=m[10];if(Math.abs(_-S)<.01&&Math.abs(x-A)<.01&&Math.abs(w-y)<.01){if(Math.abs(_+S)<.1&&Math.abs(x+A)<.1&&Math.abs(w+y)<.1&&Math.abs(p+M+v-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const L=(p+1)/2,b=(M+1)/2,V=(v+1)/2,k=(_+S)/4,z=(x+A)/4,Y=(w+y)/4;return L>b&&L>V?L<.01?(r=0,a=.707106781,u=.707106781):(r=Math.sqrt(L),a=k/r,u=z/r):b>V?b<.01?(r=.707106781,a=0,u=.707106781):(a=Math.sqrt(b),r=k/a,u=Y/a):V<.01?(r=.707106781,a=.707106781,u=0):(u=Math.sqrt(V),r=z/u,a=Y/u),this.set(r,a,u,n),this}let F=Math.sqrt((y-w)*(y-w)+(x-A)*(x-A)+(S-_)*(S-_));return Math.abs(F)<.001&&(F=1),this.x=(y-w)/F,this.y=(x-A)/F,this.z=(S-_)/F,this.w=Math.acos((p+M+v-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=xt(this.x,e.x,n.x),this.y=xt(this.y,e.y,n.y),this.z=xt(this.z,e.z,n.z),this.w=xt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=xt(this.x,e,n),this.y=xt(this.y,e,n),this.z=xt(this.z,e,n),this.w=xt(this.w,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(xt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class z_ extends Vs{constructor(e=1,n=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Pn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=r.depth,this.scissor=new Gt(0,0,e,n),this.scissorTest=!1,this.viewport=new Gt(0,0,e,n);const a={width:e,height:n,depth:r.depth},u=new Mn(a);this.textures=[];const f=r.count;for(let d=0;d<f;d++)this.textures[d]=u.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const n={minFilter:Pn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let a=0,u=this.textures.length;a<u;a++)this.textures[a].image.width=e,this.textures[a].image.height=n,this.textures[a].image.depth=r,this.textures[a].isArrayTexture=this.textures[a].image.depth>1;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const a=Object.assign({},e.textures[n].image);this.textures[n].source=new jf(a)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class xr extends z_{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class km extends Mn{constructor(e=null,n=1,r=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=Hn,this.minFilter=Hn,this.wrapR=fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class B_ extends Mn{constructor(e=null,n=1,r=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=Hn,this.minFilter=Hn,this.wrapR=fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ko{constructor(e=new te(1/0,1/0,1/0),n=new te(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(oi.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(oi.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=oi.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const u=r.getAttribute("position");if(n===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let f=0,d=u.count;f<d;f++)e.isMesh===!0?e.getVertexPosition(f,oi):oi.fromBufferAttribute(u,f),oi.applyMatrix4(e.matrixWorld),this.expandByPoint(oi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),$a.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),$a.copy(r.boundingBox)),$a.applyMatrix4(e.matrixWorld),this.union($a)}const a=e.children;for(let u=0,f=a.length;u<f;u++)this.expandByObject(a[u],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,oi),oi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(wo),Ka.subVectors(this.max,wo),ys.subVectors(e.a,wo),Ms.subVectors(e.b,wo),Es.subVectors(e.c,wo),ur.subVectors(Ms,ys),cr.subVectors(Es,Ms),Ir.subVectors(ys,Es);let n=[0,-ur.z,ur.y,0,-cr.z,cr.y,0,-Ir.z,Ir.y,ur.z,0,-ur.x,cr.z,0,-cr.x,Ir.z,0,-Ir.x,-ur.y,ur.x,0,-cr.y,cr.x,0,-Ir.y,Ir.x,0];return!Mc(n,ys,Ms,Es,Ka)||(n=[1,0,0,0,1,0,0,0,1],!Mc(n,ys,Ms,Es,Ka))?!1:(Za.crossVectors(ur,cr),n=[Za.x,Za.y,Za.z],Mc(n,ys,Ms,Es,Ka))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,oi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(oi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Pi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Pi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Pi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Pi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Pi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Pi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Pi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Pi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Pi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Pi=[new te,new te,new te,new te,new te,new te,new te,new te],oi=new te,$a=new ko,ys=new te,Ms=new te,Es=new te,ur=new te,cr=new te,Ir=new te,wo=new te,Ka=new te,Za=new te,Fr=new te;function Mc(o,e,n,r,a){for(let u=0,f=o.length-3;u<=f;u+=3){Fr.fromArray(o,u);const d=a.x*Math.abs(Fr.x)+a.y*Math.abs(Fr.y)+a.z*Math.abs(Fr.z),m=e.dot(Fr),p=n.dot(Fr),_=r.dot(Fr);if(Math.max(-Math.max(m,p,_),Math.min(m,p,_))>d)return!1}return!0}const H_=new ko,Ao=new te,Ec=new te;class Dl{constructor(e=new te,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):H_.setFromPoints(e).getCenter(r);let a=0;for(let u=0,f=e.length;u<f;u++)a=Math.max(a,r.distanceToSquared(e[u]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ao.subVectors(e,this.center);const n=Ao.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),a=(r-this.radius)*.5;this.center.addScaledVector(Ao,a/r),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ec.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ao.copy(e.center).add(Ec)),this.expandByPoint(Ao.copy(e.center).sub(Ec))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Di=new te,Tc=new te,Qa=new te,fr=new te,wc=new te,Ja=new te,Ac=new te;class zm{constructor(e=new te,n=new te(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Di)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Di.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Di.copy(this.origin).addScaledVector(this.direction,n),Di.distanceToSquared(e))}distanceSqToSegment(e,n,r,a){Tc.copy(e).add(n).multiplyScalar(.5),Qa.copy(n).sub(e).normalize(),fr.copy(this.origin).sub(Tc);const u=e.distanceTo(n)*.5,f=-this.direction.dot(Qa),d=fr.dot(this.direction),m=-fr.dot(Qa),p=fr.lengthSq(),_=Math.abs(1-f*f);let x,S,M,w;if(_>0)if(x=f*m-d,S=f*d-m,w=u*_,x>=0)if(S>=-w)if(S<=w){const A=1/_;x*=A,S*=A,M=x*(x+f*S+2*d)+S*(f*x+S+2*m)+p}else S=u,x=Math.max(0,-(f*S+d)),M=-x*x+S*(S+2*m)+p;else S=-u,x=Math.max(0,-(f*S+d)),M=-x*x+S*(S+2*m)+p;else S<=-w?(x=Math.max(0,-(-f*u+d)),S=x>0?-u:Math.min(Math.max(-u,-m),u),M=-x*x+S*(S+2*m)+p):S<=w?(x=0,S=Math.min(Math.max(-u,-m),u),M=S*(S+2*m)+p):(x=Math.max(0,-(f*u+d)),S=x>0?u:Math.min(Math.max(-u,-m),u),M=-x*x+S*(S+2*m)+p);else S=f>0?-u:u,x=Math.max(0,-(f*S+d)),M=-x*x+S*(S+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,x),a&&a.copy(Tc).addScaledVector(Qa,S),M}intersectSphere(e,n){Di.subVectors(e.center,this.origin);const r=Di.dot(this.direction),a=Di.dot(Di)-r*r,u=e.radius*e.radius;if(a>u)return null;const f=Math.sqrt(u-a),d=r-f,m=r+f;return m<0?null:d<0?this.at(m,n):this.at(d,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,a,u,f,d,m;const p=1/this.direction.x,_=1/this.direction.y,x=1/this.direction.z,S=this.origin;return p>=0?(r=(e.min.x-S.x)*p,a=(e.max.x-S.x)*p):(r=(e.max.x-S.x)*p,a=(e.min.x-S.x)*p),_>=0?(u=(e.min.y-S.y)*_,f=(e.max.y-S.y)*_):(u=(e.max.y-S.y)*_,f=(e.min.y-S.y)*_),r>f||u>a||((u>r||isNaN(r))&&(r=u),(f<a||isNaN(a))&&(a=f),x>=0?(d=(e.min.z-S.z)*x,m=(e.max.z-S.z)*x):(d=(e.max.z-S.z)*x,m=(e.min.z-S.z)*x),r>m||d>a)||((d>r||r!==r)&&(r=d),(m<a||a!==a)&&(a=m),a<0)?null:this.at(r>=0?r:a,n)}intersectsBox(e){return this.intersectBox(e,Di)!==null}intersectTriangle(e,n,r,a,u){wc.subVectors(n,e),Ja.subVectors(r,e),Ac.crossVectors(wc,Ja);let f=this.direction.dot(Ac),d;if(f>0){if(a)return null;d=1}else if(f<0)d=-1,f=-f;else return null;fr.subVectors(this.origin,e);const m=d*this.direction.dot(Ja.crossVectors(fr,Ja));if(m<0)return null;const p=d*this.direction.dot(wc.cross(fr));if(p<0||m+p>f)return null;const _=-d*fr.dot(Ac);return _<0?null:this.at(_/f,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class $t{constructor(e,n,r,a,u,f,d,m,p,_,x,S,M,w,A,y){$t.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,a,u,f,d,m,p,_,x,S,M,w,A,y)}set(e,n,r,a,u,f,d,m,p,_,x,S,M,w,A,y){const v=this.elements;return v[0]=e,v[4]=n,v[8]=r,v[12]=a,v[1]=u,v[5]=f,v[9]=d,v[13]=m,v[2]=p,v[6]=_,v[10]=x,v[14]=S,v[3]=M,v[7]=w,v[11]=A,v[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $t().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,r=e.elements,a=1/Ts.setFromMatrixColumn(e,0).length(),u=1/Ts.setFromMatrixColumn(e,1).length(),f=1/Ts.setFromMatrixColumn(e,2).length();return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=0,n[4]=r[4]*u,n[5]=r[5]*u,n[6]=r[6]*u,n[7]=0,n[8]=r[8]*f,n[9]=r[9]*f,n[10]=r[10]*f,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,a=e.y,u=e.z,f=Math.cos(r),d=Math.sin(r),m=Math.cos(a),p=Math.sin(a),_=Math.cos(u),x=Math.sin(u);if(e.order==="XYZ"){const S=f*_,M=f*x,w=d*_,A=d*x;n[0]=m*_,n[4]=-m*x,n[8]=p,n[1]=M+w*p,n[5]=S-A*p,n[9]=-d*m,n[2]=A-S*p,n[6]=w+M*p,n[10]=f*m}else if(e.order==="YXZ"){const S=m*_,M=m*x,w=p*_,A=p*x;n[0]=S+A*d,n[4]=w*d-M,n[8]=f*p,n[1]=f*x,n[5]=f*_,n[9]=-d,n[2]=M*d-w,n[6]=A+S*d,n[10]=f*m}else if(e.order==="ZXY"){const S=m*_,M=m*x,w=p*_,A=p*x;n[0]=S-A*d,n[4]=-f*x,n[8]=w+M*d,n[1]=M+w*d,n[5]=f*_,n[9]=A-S*d,n[2]=-f*p,n[6]=d,n[10]=f*m}else if(e.order==="ZYX"){const S=f*_,M=f*x,w=d*_,A=d*x;n[0]=m*_,n[4]=w*p-M,n[8]=S*p+A,n[1]=m*x,n[5]=A*p+S,n[9]=M*p-w,n[2]=-p,n[6]=d*m,n[10]=f*m}else if(e.order==="YZX"){const S=f*m,M=f*p,w=d*m,A=d*p;n[0]=m*_,n[4]=A-S*x,n[8]=w*x+M,n[1]=x,n[5]=f*_,n[9]=-d*_,n[2]=-p*_,n[6]=M*x+w,n[10]=S-A*x}else if(e.order==="XZY"){const S=f*m,M=f*p,w=d*m,A=d*p;n[0]=m*_,n[4]=-x,n[8]=p*_,n[1]=S*x+A,n[5]=f*_,n[9]=M*x-w,n[2]=w*x-M,n[6]=d*_,n[10]=A*x+S}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(V_,e,G_)}lookAt(e,n,r){const a=this.elements;return kn.subVectors(e,n),kn.lengthSq()===0&&(kn.z=1),kn.normalize(),dr.crossVectors(r,kn),dr.lengthSq()===0&&(Math.abs(r.z)===1?kn.x+=1e-4:kn.z+=1e-4,kn.normalize(),dr.crossVectors(r,kn)),dr.normalize(),el.crossVectors(kn,dr),a[0]=dr.x,a[4]=el.x,a[8]=kn.x,a[1]=dr.y,a[5]=el.y,a[9]=kn.y,a[2]=dr.z,a[6]=el.z,a[10]=kn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,u=this.elements,f=r[0],d=r[4],m=r[8],p=r[12],_=r[1],x=r[5],S=r[9],M=r[13],w=r[2],A=r[6],y=r[10],v=r[14],F=r[3],L=r[7],b=r[11],V=r[15],k=a[0],z=a[4],Y=a[8],P=a[12],R=a[1],H=a[5],Q=a[9],se=a[13],ue=a[2],de=a[6],oe=a[10],he=a[14],B=a[3],ce=a[7],ae=a[11],N=a[15];return u[0]=f*k+d*R+m*ue+p*B,u[4]=f*z+d*H+m*de+p*ce,u[8]=f*Y+d*Q+m*oe+p*ae,u[12]=f*P+d*se+m*he+p*N,u[1]=_*k+x*R+S*ue+M*B,u[5]=_*z+x*H+S*de+M*ce,u[9]=_*Y+x*Q+S*oe+M*ae,u[13]=_*P+x*se+S*he+M*N,u[2]=w*k+A*R+y*ue+v*B,u[6]=w*z+A*H+y*de+v*ce,u[10]=w*Y+A*Q+y*oe+v*ae,u[14]=w*P+A*se+y*he+v*N,u[3]=F*k+L*R+b*ue+V*B,u[7]=F*z+L*H+b*de+V*ce,u[11]=F*Y+L*Q+b*oe+V*ae,u[15]=F*P+L*se+b*he+V*N,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],a=e[8],u=e[12],f=e[1],d=e[5],m=e[9],p=e[13],_=e[2],x=e[6],S=e[10],M=e[14],w=e[3],A=e[7],y=e[11],v=e[15];return w*(+u*m*x-a*p*x-u*d*S+r*p*S+a*d*M-r*m*M)+A*(+n*m*M-n*p*S+u*f*S-a*f*M+a*p*_-u*m*_)+y*(+n*p*x-n*d*M-u*f*x+r*f*M+u*d*_-r*p*_)+v*(-a*d*_-n*m*x+n*d*S+a*f*x-r*f*S+r*m*_)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=n,a[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],u=e[3],f=e[4],d=e[5],m=e[6],p=e[7],_=e[8],x=e[9],S=e[10],M=e[11],w=e[12],A=e[13],y=e[14],v=e[15],F=x*y*p-A*S*p+A*m*M-d*y*M-x*m*v+d*S*v,L=w*S*p-_*y*p-w*m*M+f*y*M+_*m*v-f*S*v,b=_*A*p-w*x*p+w*d*M-f*A*M-_*d*v+f*x*v,V=w*x*m-_*A*m-w*d*S+f*A*S+_*d*y-f*x*y,k=n*F+r*L+a*b+u*V;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/k;return e[0]=F*z,e[1]=(A*S*u-x*y*u-A*a*M+r*y*M+x*a*v-r*S*v)*z,e[2]=(d*y*u-A*m*u+A*a*p-r*y*p-d*a*v+r*m*v)*z,e[3]=(x*m*u-d*S*u-x*a*p+r*S*p+d*a*M-r*m*M)*z,e[4]=L*z,e[5]=(_*y*u-w*S*u+w*a*M-n*y*M-_*a*v+n*S*v)*z,e[6]=(w*m*u-f*y*u-w*a*p+n*y*p+f*a*v-n*m*v)*z,e[7]=(f*S*u-_*m*u+_*a*p-n*S*p-f*a*M+n*m*M)*z,e[8]=b*z,e[9]=(w*x*u-_*A*u-w*r*M+n*A*M+_*r*v-n*x*v)*z,e[10]=(f*A*u-w*d*u+w*r*p-n*A*p-f*r*v+n*d*v)*z,e[11]=(_*d*u-f*x*u-_*r*p+n*x*p+f*r*M-n*d*M)*z,e[12]=V*z,e[13]=(_*A*a-w*x*a+w*r*S-n*A*S-_*r*y+n*x*y)*z,e[14]=(w*d*a-f*A*a-w*r*m+n*A*m+f*r*y-n*d*y)*z,e[15]=(f*x*a-_*d*a+_*r*m-n*x*m-f*r*S+n*d*S)*z,this}scale(e){const n=this.elements,r=e.x,a=e.y,u=e.z;return n[0]*=r,n[4]*=a,n[8]*=u,n[1]*=r,n[5]*=a,n[9]*=u,n[2]*=r,n[6]*=a,n[10]*=u,n[3]*=r,n[7]*=a,n[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,a))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),a=Math.sin(n),u=1-r,f=e.x,d=e.y,m=e.z,p=u*f,_=u*d;return this.set(p*f+r,p*d-a*m,p*m+a*d,0,p*d+a*m,_*d+r,_*m-a*f,0,p*m-a*d,_*m+a*f,u*m*m+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,a,u,f){return this.set(1,r,u,0,e,1,f,0,n,a,1,0,0,0,0,1),this}compose(e,n,r){const a=this.elements,u=n._x,f=n._y,d=n._z,m=n._w,p=u+u,_=f+f,x=d+d,S=u*p,M=u*_,w=u*x,A=f*_,y=f*x,v=d*x,F=m*p,L=m*_,b=m*x,V=r.x,k=r.y,z=r.z;return a[0]=(1-(A+v))*V,a[1]=(M+b)*V,a[2]=(w-L)*V,a[3]=0,a[4]=(M-b)*k,a[5]=(1-(S+v))*k,a[6]=(y+F)*k,a[7]=0,a[8]=(w+L)*z,a[9]=(y-F)*z,a[10]=(1-(S+A))*z,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,n,r){const a=this.elements;let u=Ts.set(a[0],a[1],a[2]).length();const f=Ts.set(a[4],a[5],a[6]).length(),d=Ts.set(a[8],a[9],a[10]).length();this.determinant()<0&&(u=-u),e.x=a[12],e.y=a[13],e.z=a[14],ai.copy(this);const p=1/u,_=1/f,x=1/d;return ai.elements[0]*=p,ai.elements[1]*=p,ai.elements[2]*=p,ai.elements[4]*=_,ai.elements[5]*=_,ai.elements[6]*=_,ai.elements[8]*=x,ai.elements[9]*=x,ai.elements[10]*=x,n.setFromRotationMatrix(ai),r.x=u,r.y=f,r.z=d,this}makePerspective(e,n,r,a,u,f,d=xi,m=!1){const p=this.elements,_=2*u/(n-e),x=2*u/(r-a),S=(n+e)/(n-e),M=(r+a)/(r-a);let w,A;if(m)w=u/(f-u),A=f*u/(f-u);else if(d===xi)w=-(f+u)/(f-u),A=-2*f*u/(f-u);else if(d===wl)w=-f/(f-u),A=-f*u/(f-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=_,p[4]=0,p[8]=S,p[12]=0,p[1]=0,p[5]=x,p[9]=M,p[13]=0,p[2]=0,p[6]=0,p[10]=w,p[14]=A,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,n,r,a,u,f,d=xi,m=!1){const p=this.elements,_=2/(n-e),x=2/(r-a),S=-(n+e)/(n-e),M=-(r+a)/(r-a);let w,A;if(m)w=1/(f-u),A=f/(f-u);else if(d===xi)w=-2/(f-u),A=-(f+u)/(f-u);else if(d===wl)w=-1/(f-u),A=-u/(f-u);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=_,p[4]=0,p[8]=0,p[12]=S,p[1]=0,p[5]=x,p[9]=0,p[13]=M,p[2]=0,p[6]=0,p[10]=w,p[14]=A,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<16;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}}const Ts=new te,ai=new $t,V_=new te(0,0,0),G_=new te(1,1,1),dr=new te,el=new te,kn=new te,Ip=new $t,Fp=new Oo;class Bi{constructor(e=0,n=0,r=0,a=Bi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,a=this._order){return this._x=e,this._y=n,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const a=e.elements,u=a[0],f=a[4],d=a[8],m=a[1],p=a[5],_=a[9],x=a[2],S=a[6],M=a[10];switch(n){case"XYZ":this._y=Math.asin(xt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-_,M),this._z=Math.atan2(-f,u)):(this._x=Math.atan2(S,p),this._z=0);break;case"YXZ":this._x=Math.asin(-xt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-x,u),this._z=0);break;case"ZXY":this._x=Math.asin(xt(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(-x,M),this._z=Math.atan2(-f,p)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-xt(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(S,M),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-f,p));break;case"YZX":this._z=Math.asin(xt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-_,p),this._y=Math.atan2(-x,u)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-xt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(S,p),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-_,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return Ip.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ip,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Fp.setFromEuler(this),this.setFromQuaternion(Fp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Bi.DEFAULT_ORDER="XYZ";class Bm{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let W_=0;const Op=new te,ws=new Oo,Li=new $t,tl=new te,Ro=new te,X_=new te,j_=new Oo,kp=new te(1,0,0),zp=new te(0,1,0),Bp=new te(0,0,1),Hp={type:"added"},Y_={type:"removed"},As={type:"childadded",child:null},Rc={type:"childremoved",child:null};class Ln extends Vs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:W_++}),this.uuid=Fo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ln.DEFAULT_UP.clone();const e=new te,n=new Bi,r=new Oo,a=new te(1,1,1);function u(){r.setFromEuler(n,!1)}function f(){n.setFromQuaternion(r,void 0,!1)}n._onChange(u),r._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new $t},normalMatrix:{value:new ht}}),this.matrix=new $t,this.matrixWorld=new $t,this.matrixAutoUpdate=Ln.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Bm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return ws.setFromAxisAngle(e,n),this.quaternion.multiply(ws),this}rotateOnWorldAxis(e,n){return ws.setFromAxisAngle(e,n),this.quaternion.premultiply(ws),this}rotateX(e){return this.rotateOnAxis(kp,e)}rotateY(e){return this.rotateOnAxis(zp,e)}rotateZ(e){return this.rotateOnAxis(Bp,e)}translateOnAxis(e,n){return Op.copy(e).applyQuaternion(this.quaternion),this.position.add(Op.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(kp,e)}translateY(e){return this.translateOnAxis(zp,e)}translateZ(e){return this.translateOnAxis(Bp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Li.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?tl.copy(e):tl.set(e,n,r);const a=this.parent;this.updateWorldMatrix(!0,!1),Ro.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Li.lookAt(Ro,tl,this.up):Li.lookAt(tl,Ro,this.up),this.quaternion.setFromRotationMatrix(Li),a&&(Li.extractRotation(a.matrixWorld),ws.setFromRotationMatrix(Li),this.quaternion.premultiply(ws.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Hp),As.child=e,this.dispatchEvent(As),As.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Y_),Rc.child=e,this.dispatchEvent(Rc),Rc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Li.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Li.multiply(e.parent.matrixWorld)),e.applyMatrix4(Li),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Hp),As.child=e,this.dispatchEvent(As),As.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,a=this.children.length;r<a;r++){const f=this.children[r].getObjectByProperty(e,n);if(f!==void 0)return f}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const a=this.children;for(let u=0,f=a.length;u<f;u++)a[u].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ro,e,X_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ro,j_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].updateMatrixWorld(e)}updateWorldMatrix(e,n){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const a=this.children;for(let u=0,f=a.length;u<f;u++)a[u].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(d=>({...d})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(e),a.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function u(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=u(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,_=m.length;p<_;p++){const x=m[p];u(e.shapes,x)}else u(e.shapes,m)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(u(e.materials,this.material[m]));a.material=d}else a.material=u(e.materials,this.material);if(this.children.length>0){a.children=[];for(let d=0;d<this.children.length;d++)a.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];a.animations.push(u(e.animations,m))}}if(n){const d=f(e.geometries),m=f(e.materials),p=f(e.textures),_=f(e.images),x=f(e.shapes),S=f(e.skeletons),M=f(e.animations),w=f(e.nodes);d.length>0&&(r.geometries=d),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),_.length>0&&(r.images=_),x.length>0&&(r.shapes=x),S.length>0&&(r.skeletons=S),M.length>0&&(r.animations=M),w.length>0&&(r.nodes=w)}return r.object=a,r;function f(d){const m=[];for(const p in d){const _=d[p];delete _.metadata,m.push(_)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const a=e.children[r];this.add(a.clone())}return this}}Ln.DEFAULT_UP=new te(0,1,0);Ln.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const li=new te,Ni=new te,Cc=new te,Ui=new te,Rs=new te,Cs=new te,Vp=new te,bc=new te,Pc=new te,Dc=new te,Lc=new Gt,Nc=new Gt,Uc=new Gt;class ci{constructor(e=new te,n=new te,r=new te){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,a){a.subVectors(r,n),li.subVectors(e,n),a.cross(li);const u=a.lengthSq();return u>0?a.multiplyScalar(1/Math.sqrt(u)):a.set(0,0,0)}static getBarycoord(e,n,r,a,u){li.subVectors(a,n),Ni.subVectors(r,n),Cc.subVectors(e,n);const f=li.dot(li),d=li.dot(Ni),m=li.dot(Cc),p=Ni.dot(Ni),_=Ni.dot(Cc),x=f*p-d*d;if(x===0)return u.set(0,0,0),null;const S=1/x,M=(p*m-d*_)*S,w=(f*_-d*m)*S;return u.set(1-M-w,w,M)}static containsPoint(e,n,r,a){return this.getBarycoord(e,n,r,a,Ui)===null?!1:Ui.x>=0&&Ui.y>=0&&Ui.x+Ui.y<=1}static getInterpolation(e,n,r,a,u,f,d,m){return this.getBarycoord(e,n,r,a,Ui)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,Ui.x),m.addScaledVector(f,Ui.y),m.addScaledVector(d,Ui.z),m)}static getInterpolatedAttribute(e,n,r,a,u,f){return Lc.setScalar(0),Nc.setScalar(0),Uc.setScalar(0),Lc.fromBufferAttribute(e,n),Nc.fromBufferAttribute(e,r),Uc.fromBufferAttribute(e,a),f.setScalar(0),f.addScaledVector(Lc,u.x),f.addScaledVector(Nc,u.y),f.addScaledVector(Uc,u.z),f}static isFrontFacing(e,n,r,a){return li.subVectors(r,n),Ni.subVectors(e,n),li.cross(Ni).dot(a)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,a){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,n,r,a){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return li.subVectors(this.c,this.b),Ni.subVectors(this.a,this.b),li.cross(Ni).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ci.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return ci.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,a,u){return ci.getInterpolation(e,this.a,this.b,this.c,n,r,a,u)}containsPoint(e){return ci.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ci.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,a=this.b,u=this.c;let f,d;Rs.subVectors(a,r),Cs.subVectors(u,r),bc.subVectors(e,r);const m=Rs.dot(bc),p=Cs.dot(bc);if(m<=0&&p<=0)return n.copy(r);Pc.subVectors(e,a);const _=Rs.dot(Pc),x=Cs.dot(Pc);if(_>=0&&x<=_)return n.copy(a);const S=m*x-_*p;if(S<=0&&m>=0&&_<=0)return f=m/(m-_),n.copy(r).addScaledVector(Rs,f);Dc.subVectors(e,u);const M=Rs.dot(Dc),w=Cs.dot(Dc);if(w>=0&&M<=w)return n.copy(u);const A=M*p-m*w;if(A<=0&&p>=0&&w<=0)return d=p/(p-w),n.copy(r).addScaledVector(Cs,d);const y=_*w-M*x;if(y<=0&&x-_>=0&&M-w>=0)return Vp.subVectors(u,a),d=(x-_)/(x-_+(M-w)),n.copy(a).addScaledVector(Vp,d);const v=1/(y+A+S);return f=A*v,d=S*v,n.copy(r).addScaledVector(Rs,f).addScaledVector(Cs,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Hm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hr={h:0,s:0,l:0},nl={h:0,s:0,l:0};function Ic(o,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?o+(e-o)*6*n:n<1/2?e:n<2/3?o+(e-o)*6*(2/3-n):o}class wt{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Kn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Tt.colorSpaceToWorking(this,n),this}setRGB(e,n,r,a=Tt.workingColorSpace){return this.r=e,this.g=n,this.b=r,Tt.colorSpaceToWorking(this,a),this}setHSL(e,n,r,a=Tt.workingColorSpace){if(e=L_(e,1),n=xt(n,0,1),r=xt(r,0,1),n===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+n):r+n-r*n,f=2*r-u;this.r=Ic(f,u,e+1/3),this.g=Ic(f,u,e),this.b=Ic(f,u,e-1/3)}return Tt.colorSpaceToWorking(this,a),this}setStyle(e,n=Kn){function r(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const f=a[1],d=a[2];switch(f){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,n);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,n);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=a[1],f=u.length;if(f===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,n);if(f===6)return this.setHex(parseInt(u,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Kn){const r=Hm[e.toLowerCase()];return r!==void 0?this.setHex(r,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Oi(e.r),this.g=Oi(e.g),this.b=Oi(e.b),this}copyLinearToSRGB(e){return this.r=Is(e.r),this.g=Is(e.g),this.b=Is(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Kn){return Tt.workingToColorSpace(gn.copy(this),e),Math.round(xt(gn.r*255,0,255))*65536+Math.round(xt(gn.g*255,0,255))*256+Math.round(xt(gn.b*255,0,255))}getHexString(e=Kn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Tt.workingColorSpace){Tt.workingToColorSpace(gn.copy(this),n);const r=gn.r,a=gn.g,u=gn.b,f=Math.max(r,a,u),d=Math.min(r,a,u);let m,p;const _=(d+f)/2;if(d===f)m=0,p=0;else{const x=f-d;switch(p=_<=.5?x/(f+d):x/(2-f-d),f){case r:m=(a-u)/x+(a<u?6:0);break;case a:m=(u-r)/x+2;break;case u:m=(r-a)/x+4;break}m/=6}return e.h=m,e.s=p,e.l=_,e}getRGB(e,n=Tt.workingColorSpace){return Tt.workingToColorSpace(gn.copy(this),n),e.r=gn.r,e.g=gn.g,e.b=gn.b,e}getStyle(e=Kn){Tt.workingToColorSpace(gn.copy(this),e);const n=gn.r,r=gn.g,a=gn.b;return e!==Kn?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(a*255)})`}offsetHSL(e,n,r){return this.getHSL(hr),this.setHSL(hr.h+e,hr.s+n,hr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(hr),e.getHSL(nl);const r=vc(hr.h,nl.h,n),a=vc(hr.s,nl.s,n),u=vc(hr.l,nl.l,n);return this.setHSL(r,a,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,a=this.b,u=e.elements;return this.r=u[0]*n+u[3]*r+u[6]*a,this.g=u[1]*n+u[4]*r+u[7]*a,this.b=u[2]*n+u[5]*r+u[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const gn=new wt;wt.NAMES=Hm;let q_=0;class zo extends Vs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:q_++}),this.uuid=Fo(),this.name="",this.type="Material",this.blending=Us,this.side=_r,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=qc,this.blendDst=$c,this.blendEquation=Gr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new wt(0,0,0),this.blendAlpha=0,this.depthFunc=Fs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Cp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xs,this.stencilZFail=xs,this.stencilZPass=xs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(r):a&&a.isVector3&&r&&r.isVector3?a.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Us&&(r.blending=this.blending),this.side!==_r&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==qc&&(r.blendSrc=this.blendSrc),this.blendDst!==$c&&(r.blendDst=this.blendDst),this.blendEquation!==Gr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Fs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Cp&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==xs&&(r.stencilFail=this.stencilFail),this.stencilZFail!==xs&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==xs&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function a(u){const f=[];for(const d in u){const m=u[d];delete m.metadata,f.push(m)}return f}if(n){const u=a(e.textures),f=a(e.images);u.length>0&&(r.textures=u),f.length>0&&(r.images=f)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const a=n.length;r=new Array(a);for(let u=0;u!==a;++u)r[u]=n[u].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Vm extends zo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bi,this.combine=Am,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const qt=new te,il=new ft;let $_=0;class di{constructor(e,n,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:$_++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=bp,this.updateRanges=[],this.gpuType=_i,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let a=0,u=this.itemSize;a<u;a++)this.array[e+a]=n.array[r+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)il.fromBufferAttribute(this,n),il.applyMatrix3(e),this.setXY(n,il.x,il.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)qt.fromBufferAttribute(this,n),qt.applyMatrix3(e),this.setXYZ(n,qt.x,qt.y,qt.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)qt.fromBufferAttribute(this,n),qt.applyMatrix4(e),this.setXYZ(n,qt.x,qt.y,qt.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)qt.fromBufferAttribute(this,n),qt.applyNormalMatrix(e),this.setXYZ(n,qt.x,qt.y,qt.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)qt.fromBufferAttribute(this,n),qt.transformDirection(e),this.setXYZ(n,qt.x,qt.y,qt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=To(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=bn(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=To(n,this.array)),n}setX(e,n){return this.normalized&&(n=bn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=To(n,this.array)),n}setY(e,n){return this.normalized&&(n=bn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=To(n,this.array)),n}setZ(e,n){return this.normalized&&(n=bn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=To(n,this.array)),n}setW(e,n){return this.normalized&&(n=bn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=bn(n,this.array),r=bn(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,a){return e*=this.itemSize,this.normalized&&(n=bn(n,this.array),r=bn(r,this.array),a=bn(a,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this}setXYZW(e,n,r,a,u){return e*=this.itemSize,this.normalized&&(n=bn(n,this.array),r=bn(r,this.array),a=bn(a,this.array),u=bn(u,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==bp&&(e.usage=this.usage),e}}class Gm extends di{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class Wm extends di{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class ki extends di{constructor(e,n,r){super(new Float32Array(e),n,r)}}let K_=0;const $n=new $t,Fc=new Ln,bs=new te,zn=new ko,Co=new ko,sn=new te;class Vi extends Vs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:K_++}),this.uuid=Fo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Om(e)?Wm:Gm)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new ht().getNormalMatrix(e);r.applyNormalMatrix(u),r.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return $n.makeRotationFromQuaternion(e),this.applyMatrix4($n),this}rotateX(e){return $n.makeRotationX(e),this.applyMatrix4($n),this}rotateY(e){return $n.makeRotationY(e),this.applyMatrix4($n),this}rotateZ(e){return $n.makeRotationZ(e),this.applyMatrix4($n),this}translate(e,n,r){return $n.makeTranslation(e,n,r),this.applyMatrix4($n),this}scale(e,n,r){return $n.makeScale(e,n,r),this.applyMatrix4($n),this}lookAt(e){return Fc.lookAt(e),Fc.updateMatrix(),this.applyMatrix4(Fc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(bs).negate(),this.translate(bs.x,bs.y,bs.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const r=[];for(let a=0,u=e.length;a<u;a++){const f=e[a];r.push(f.x,f.y,f.z||0)}this.setAttribute("position",new ki(r,3))}else{const r=Math.min(e.length,n.count);for(let a=0;a<r;a++){const u=e[a];n.setXYZ(a,u.x,u.y,u.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ko);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new te(-1/0,-1/0,-1/0),new te(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,a=n.length;r<a;r++){const u=n[r];zn.setFromBufferAttribute(u),this.morphTargetsRelative?(sn.addVectors(this.boundingBox.min,zn.min),this.boundingBox.expandByPoint(sn),sn.addVectors(this.boundingBox.max,zn.max),this.boundingBox.expandByPoint(sn)):(this.boundingBox.expandByPoint(zn.min),this.boundingBox.expandByPoint(zn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Dl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new te,1/0);return}if(e){const r=this.boundingSphere.center;if(zn.setFromBufferAttribute(e),n)for(let u=0,f=n.length;u<f;u++){const d=n[u];Co.setFromBufferAttribute(d),this.morphTargetsRelative?(sn.addVectors(zn.min,Co.min),zn.expandByPoint(sn),sn.addVectors(zn.max,Co.max),zn.expandByPoint(sn)):(zn.expandByPoint(Co.min),zn.expandByPoint(Co.max))}zn.getCenter(r);let a=0;for(let u=0,f=e.count;u<f;u++)sn.fromBufferAttribute(e,u),a=Math.max(a,r.distanceToSquared(sn));if(n)for(let u=0,f=n.length;u<f;u++){const d=n[u],m=this.morphTargetsRelative;for(let p=0,_=d.count;p<_;p++)sn.fromBufferAttribute(d,p),m&&(bs.fromBufferAttribute(e,p),sn.add(bs)),a=Math.max(a,r.distanceToSquared(sn))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,a=n.normal,u=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new di(new Float32Array(4*r.count),4));const f=this.getAttribute("tangent"),d=[],m=[];for(let Y=0;Y<r.count;Y++)d[Y]=new te,m[Y]=new te;const p=new te,_=new te,x=new te,S=new ft,M=new ft,w=new ft,A=new te,y=new te;function v(Y,P,R){p.fromBufferAttribute(r,Y),_.fromBufferAttribute(r,P),x.fromBufferAttribute(r,R),S.fromBufferAttribute(u,Y),M.fromBufferAttribute(u,P),w.fromBufferAttribute(u,R),_.sub(p),x.sub(p),M.sub(S),w.sub(S);const H=1/(M.x*w.y-w.x*M.y);isFinite(H)&&(A.copy(_).multiplyScalar(w.y).addScaledVector(x,-M.y).multiplyScalar(H),y.copy(x).multiplyScalar(M.x).addScaledVector(_,-w.x).multiplyScalar(H),d[Y].add(A),d[P].add(A),d[R].add(A),m[Y].add(y),m[P].add(y),m[R].add(y))}let F=this.groups;F.length===0&&(F=[{start:0,count:e.count}]);for(let Y=0,P=F.length;Y<P;++Y){const R=F[Y],H=R.start,Q=R.count;for(let se=H,ue=H+Q;se<ue;se+=3)v(e.getX(se+0),e.getX(se+1),e.getX(se+2))}const L=new te,b=new te,V=new te,k=new te;function z(Y){V.fromBufferAttribute(a,Y),k.copy(V);const P=d[Y];L.copy(P),L.sub(V.multiplyScalar(V.dot(P))).normalize(),b.crossVectors(k,P);const H=b.dot(m[Y])<0?-1:1;f.setXYZW(Y,L.x,L.y,L.z,H)}for(let Y=0,P=F.length;Y<P;++Y){const R=F[Y],H=R.start,Q=R.count;for(let se=H,ue=H+Q;se<ue;se+=3)z(e.getX(se+0)),z(e.getX(se+1)),z(e.getX(se+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new di(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let S=0,M=r.count;S<M;S++)r.setXYZ(S,0,0,0);const a=new te,u=new te,f=new te,d=new te,m=new te,p=new te,_=new te,x=new te;if(e)for(let S=0,M=e.count;S<M;S+=3){const w=e.getX(S+0),A=e.getX(S+1),y=e.getX(S+2);a.fromBufferAttribute(n,w),u.fromBufferAttribute(n,A),f.fromBufferAttribute(n,y),_.subVectors(f,u),x.subVectors(a,u),_.cross(x),d.fromBufferAttribute(r,w),m.fromBufferAttribute(r,A),p.fromBufferAttribute(r,y),d.add(_),m.add(_),p.add(_),r.setXYZ(w,d.x,d.y,d.z),r.setXYZ(A,m.x,m.y,m.z),r.setXYZ(y,p.x,p.y,p.z)}else for(let S=0,M=n.count;S<M;S+=3)a.fromBufferAttribute(n,S+0),u.fromBufferAttribute(n,S+1),f.fromBufferAttribute(n,S+2),_.subVectors(f,u),x.subVectors(a,u),_.cross(x),r.setXYZ(S+0,_.x,_.y,_.z),r.setXYZ(S+1,_.x,_.y,_.z),r.setXYZ(S+2,_.x,_.y,_.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)sn.fromBufferAttribute(e,n),sn.normalize(),e.setXYZ(n,sn.x,sn.y,sn.z)}toNonIndexed(){function e(d,m){const p=d.array,_=d.itemSize,x=d.normalized,S=new p.constructor(m.length*_);let M=0,w=0;for(let A=0,y=m.length;A<y;A++){d.isInterleavedBufferAttribute?M=m[A]*d.data.stride+d.offset:M=m[A]*_;for(let v=0;v<_;v++)S[w++]=p[M++]}return new di(S,_,x)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Vi,r=this.index.array,a=this.attributes;for(const d in a){const m=a[d],p=e(m,r);n.setAttribute(d,p)}const u=this.morphAttributes;for(const d in u){const m=[],p=u[d];for(let _=0,x=p.length;_<x;_++){const S=p[_],M=e(S,r);m.push(M)}n.morphAttributes[d]=m}n.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let d=0,m=f.length;d<m;d++){const p=f[d];n.addGroup(p.start,p.count,p.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const m in r){const p=r[m];e.data.attributes[m]=p.toJSON(e.data)}const a={};let u=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],_=[];for(let x=0,S=p.length;x<S;x++){const M=p[x];_.push(M.toJSON(e.data))}_.length>0&&(a[m]=_,u=!0)}u&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(e.data.groups=JSON.parse(JSON.stringify(f)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const a=e.attributes;for(const p in a){const _=a[p];this.setAttribute(p,_.clone(n))}const u=e.morphAttributes;for(const p in u){const _=[],x=u[p];for(let S=0,M=x.length;S<M;S++)_.push(x[S].clone(n));this.morphAttributes[p]=_}this.morphTargetsRelative=e.morphTargetsRelative;const f=e.groups;for(let p=0,_=f.length;p<_;p++){const x=f[p];this.addGroup(x.start,x.count,x.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Gp=new $t,Or=new zm,rl=new Dl,Wp=new te,sl=new te,ol=new te,al=new te,Oc=new te,ll=new te,Xp=new te,ul=new te;class Qn extends Ln{constructor(e=new Vi,n=new Vm){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,f=a.length;u<f;u++){const d=a[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}getVertexPosition(e,n){const r=this.geometry,a=r.attributes.position,u=r.morphAttributes.position,f=r.morphTargetsRelative;n.fromBufferAttribute(a,e);const d=this.morphTargetInfluences;if(u&&d){ll.set(0,0,0);for(let m=0,p=u.length;m<p;m++){const _=d[m],x=u[m];_!==0&&(Oc.fromBufferAttribute(x,e),f?ll.addScaledVector(Oc,_):ll.addScaledVector(Oc.sub(n),_))}n.add(ll)}return n}raycast(e,n){const r=this.geometry,a=this.material,u=this.matrixWorld;a!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),rl.copy(r.boundingSphere),rl.applyMatrix4(u),Or.copy(e.ray).recast(e.near),!(rl.containsPoint(Or.origin)===!1&&(Or.intersectSphere(rl,Wp)===null||Or.origin.distanceToSquared(Wp)>(e.far-e.near)**2))&&(Gp.copy(u).invert(),Or.copy(e.ray).applyMatrix4(Gp),!(r.boundingBox!==null&&Or.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,Or)))}_computeIntersections(e,n,r){let a;const u=this.geometry,f=this.material,d=u.index,m=u.attributes.position,p=u.attributes.uv,_=u.attributes.uv1,x=u.attributes.normal,S=u.groups,M=u.drawRange;if(d!==null)if(Array.isArray(f))for(let w=0,A=S.length;w<A;w++){const y=S[w],v=f[y.materialIndex],F=Math.max(y.start,M.start),L=Math.min(d.count,Math.min(y.start+y.count,M.start+M.count));for(let b=F,V=L;b<V;b+=3){const k=d.getX(b),z=d.getX(b+1),Y=d.getX(b+2);a=cl(this,v,e,r,p,_,x,k,z,Y),a&&(a.faceIndex=Math.floor(b/3),a.face.materialIndex=y.materialIndex,n.push(a))}}else{const w=Math.max(0,M.start),A=Math.min(d.count,M.start+M.count);for(let y=w,v=A;y<v;y+=3){const F=d.getX(y),L=d.getX(y+1),b=d.getX(y+2);a=cl(this,f,e,r,p,_,x,F,L,b),a&&(a.faceIndex=Math.floor(y/3),n.push(a))}}else if(m!==void 0)if(Array.isArray(f))for(let w=0,A=S.length;w<A;w++){const y=S[w],v=f[y.materialIndex],F=Math.max(y.start,M.start),L=Math.min(m.count,Math.min(y.start+y.count,M.start+M.count));for(let b=F,V=L;b<V;b+=3){const k=b,z=b+1,Y=b+2;a=cl(this,v,e,r,p,_,x,k,z,Y),a&&(a.faceIndex=Math.floor(b/3),a.face.materialIndex=y.materialIndex,n.push(a))}}else{const w=Math.max(0,M.start),A=Math.min(m.count,M.start+M.count);for(let y=w,v=A;y<v;y+=3){const F=y,L=y+1,b=y+2;a=cl(this,f,e,r,p,_,x,F,L,b),a&&(a.faceIndex=Math.floor(y/3),n.push(a))}}}}function Z_(o,e,n,r,a,u,f,d){let m;if(e.side===Dn?m=r.intersectTriangle(f,u,a,!0,d):m=r.intersectTriangle(a,u,f,e.side===_r,d),m===null)return null;ul.copy(d),ul.applyMatrix4(o.matrixWorld);const p=n.ray.origin.distanceTo(ul);return p<n.near||p>n.far?null:{distance:p,point:ul.clone(),object:o}}function cl(o,e,n,r,a,u,f,d,m,p){o.getVertexPosition(d,sl),o.getVertexPosition(m,ol),o.getVertexPosition(p,al);const _=Z_(o,e,n,r,sl,ol,al,Xp);if(_){const x=new te;ci.getBarycoord(Xp,sl,ol,al,x),a&&(_.uv=ci.getInterpolatedAttribute(a,d,m,p,x,new ft)),u&&(_.uv1=ci.getInterpolatedAttribute(u,d,m,p,x,new ft)),f&&(_.normal=ci.getInterpolatedAttribute(f,d,m,p,x,new te),_.normal.dot(r.direction)>0&&_.normal.multiplyScalar(-1));const S={a:d,b:m,c:p,normal:new te,materialIndex:0};ci.getNormal(sl,ol,al,S.normal),_.face=S,_.barycoord=x}return _}class Bo extends Vi{constructor(e=1,n=1,r=1,a=1,u=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:a,heightSegments:u,depthSegments:f};const d=this;a=Math.floor(a),u=Math.floor(u),f=Math.floor(f);const m=[],p=[],_=[],x=[];let S=0,M=0;w("z","y","x",-1,-1,r,n,e,f,u,0),w("z","y","x",1,-1,r,n,-e,f,u,1),w("x","z","y",1,1,e,r,n,a,f,2),w("x","z","y",1,-1,e,r,-n,a,f,3),w("x","y","z",1,-1,e,n,r,a,u,4),w("x","y","z",-1,-1,e,n,-r,a,u,5),this.setIndex(m),this.setAttribute("position",new ki(p,3)),this.setAttribute("normal",new ki(_,3)),this.setAttribute("uv",new ki(x,2));function w(A,y,v,F,L,b,V,k,z,Y,P){const R=b/z,H=V/Y,Q=b/2,se=V/2,ue=k/2,de=z+1,oe=Y+1;let he=0,B=0;const ce=new te;for(let ae=0;ae<oe;ae++){const N=ae*H-se;for(let ie=0;ie<de;ie++){const ke=ie*R-Q;ce[A]=ke*F,ce[y]=N*L,ce[v]=ue,p.push(ce.x,ce.y,ce.z),ce[A]=0,ce[y]=0,ce[v]=k>0?1:-1,_.push(ce.x,ce.y,ce.z),x.push(ie/z),x.push(1-ae/Y),he+=1}}for(let ae=0;ae<Y;ae++)for(let N=0;N<z;N++){const ie=S+N+de*ae,ke=S+N+de*(ae+1),Ge=S+(N+1)+de*(ae+1),He=S+(N+1)+de*ae;m.push(ie,ke,He),m.push(ke,Ge,He),B+=6}d.addGroup(M,B,P),M+=B,S+=he}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Bs(o){const e={};for(const n in o){e[n]={};for(const r in o[n]){const a=o[n][r];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=a.clone():Array.isArray(a)?e[n][r]=a.slice():e[n][r]=a}}return e}function yn(o){const e={};for(let n=0;n<o.length;n++){const r=Bs(o[n]);for(const a in r)e[a]=r[a]}return e}function Q_(o){const e=[];for(let n=0;n<o.length;n++)e.push(o[n].clone());return e}function Xm(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Tt.workingColorSpace}const J_={clone:Bs,merge:yn};var e0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,t0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Hi extends zo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=e0,this.fragmentShader=t0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Bs(e.uniforms),this.uniformsGroups=Q_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const a in this.uniforms){const f=this.uniforms[a].value;f&&f.isTexture?n.uniforms[a]={type:"t",value:f.toJSON(e).uuid}:f&&f.isColor?n.uniforms[a]={type:"c",value:f.getHex()}:f&&f.isVector2?n.uniforms[a]={type:"v2",value:f.toArray()}:f&&f.isVector3?n.uniforms[a]={type:"v3",value:f.toArray()}:f&&f.isVector4?n.uniforms[a]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?n.uniforms[a]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?n.uniforms[a]={type:"m4",value:f.toArray()}:n.uniforms[a]={value:f}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const a in this.extensions)this.extensions[a]===!0&&(r[a]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class Rl extends Ln{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $t,this.projectionMatrix=new $t,this.projectionMatrixInverse=new $t,this.coordinateSystem=xi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const pr=new te,jp=new ft,Yp=new ft;class ui extends Rl{constructor(e=50,n=1,r=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=a,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Ff*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(gc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ff*2*Math.atan(Math.tan(gc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){pr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(pr.x,pr.y).multiplyScalar(-e/pr.z),pr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(pr.x,pr.y).multiplyScalar(-e/pr.z)}getViewSize(e,n){return this.getViewBounds(e,jp,Yp),n.subVectors(Yp,jp)}setViewOffset(e,n,r,a,u,f){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=u,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(gc*.5*this.fov)/this.zoom,r=2*n,a=this.aspect*r,u=-.5*a;const f=this.view;if(this.view!==null&&this.view.enabled){const m=f.fullWidth,p=f.fullHeight;u+=f.offsetX*a/m,n-=f.offsetY*r/p,a*=f.width/m,r*=f.height/p}const d=this.filmOffset;d!==0&&(u+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+a,n,n-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Ps=-90,Ds=1;class n0 extends Ln{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new ui(Ps,Ds,e,n);a.layers=this.layers,this.add(a);const u=new ui(Ps,Ds,e,n);u.layers=this.layers,this.add(u);const f=new ui(Ps,Ds,e,n);f.layers=this.layers,this.add(f);const d=new ui(Ps,Ds,e,n);d.layers=this.layers,this.add(d);const m=new ui(Ps,Ds,e,n);m.layers=this.layers,this.add(m);const p=new ui(Ps,Ds,e,n);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,a,u,f,d,m]=n;for(const p of n)this.remove(p);if(e===xi)r.up.set(0,1,0),r.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===wl)r.up.set(0,-1,0),r.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of n)this.add(p),p.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,f,d,m,p,_]=this.children,x=e.getRenderTarget(),S=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),w=e.xr.enabled;e.xr.enabled=!1;const A=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,a),e.render(n,u),e.setRenderTarget(r,1,a),e.render(n,f),e.setRenderTarget(r,2,a),e.render(n,d),e.setRenderTarget(r,3,a),e.render(n,m),e.setRenderTarget(r,4,a),e.render(n,p),r.texture.generateMipmaps=A,e.setRenderTarget(r,5,a),e.render(n,_),e.setRenderTarget(x,S,M),e.xr.enabled=w,r.texture.needsPMREMUpdate=!0}}class jm extends Mn{constructor(e=[],n=Os,r,a,u,f,d,m,p,_){super(e,n,r,a,u,f,d,m,p,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class i0 extends xr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},a=[r,r,r,r,r,r];this.texture=new jm(a),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new Bo(5,5,5),u=new Hi({name:"CubemapFromEquirect",uniforms:Bs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Dn,blending:gr});u.uniforms.tEquirect.value=n;const f=new Qn(a,u),d=n.minFilter;return n.minFilter===Xr&&(n.minFilter=Pn),new n0(1,10,this).update(e,f),n.minFilter=d,f.geometry.dispose(),f.material.dispose(),this}clear(e,n=!0,r=!0,a=!0){const u=e.getRenderTarget();for(let f=0;f<6;f++)e.setRenderTarget(this,f),e.clear(n,r,a);e.setRenderTarget(u)}}class fl extends Ln{constructor(){super(),this.isGroup=!0,this.type="Group"}}const r0={type:"move"};class kc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new te,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new te),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new te,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new te),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let a=null,u=null,f=null;const d=this._targetRay,m=this._grip,p=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(p&&e.hand){f=!0;for(const A of e.hand.values()){const y=n.getJointPose(A,r),v=this._getHandJoint(p,A);y!==null&&(v.matrix.fromArray(y.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=y.radius),v.visible=y!==null}const _=p.joints["index-finger-tip"],x=p.joints["thumb-tip"],S=_.position.distanceTo(x.position),M=.02,w=.005;p.inputState.pinching&&S>M+w?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&S<=M-w&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(u=n.getPose(e.gripSpace,r),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(a=n.getPose(e.targetRaySpace,r),a===null&&u!==null&&(a=u),a!==null&&(d.matrix.fromArray(a.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,a.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(a.linearVelocity)):d.hasLinearVelocity=!1,a.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(a.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(r0)))}return d!==null&&(d.visible=a!==null),m!==null&&(m.visible=u!==null),p!==null&&(p.visible=f!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new fl;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}class qp extends Ln{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Bi,this.environmentIntensity=1,this.environmentRotation=new Bi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class s0 extends Mn{constructor(e=null,n=1,r=1,a,u,f,d,m,p=Hn,_=Hn,x,S){super(null,f,d,m,p,_,a,u,x,S),this.isDataTexture=!0,this.image={data:e,width:n,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const zc=new te,o0=new te,a0=new ht;class Hr{constructor(e=new te(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,a){return this.normal.set(e,n,r),this.constant=a,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const a=zc.subVectors(r,n).cross(o0.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const r=e.delta(zc),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/a;return u<0||u>1?null:n.copy(e.start).addScaledVector(r,u)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||a0.getNormalMatrix(e),a=this.coplanarPoint(zc).applyMatrix4(e),u=this.normal.applyMatrix3(r).normalize();return this.constant=-a.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const kr=new Dl,l0=new ft(.5,.5),dl=new te;class Ym{constructor(e=new Hr,n=new Hr,r=new Hr,a=new Hr,u=new Hr,f=new Hr){this.planes=[e,n,r,a,u,f]}set(e,n,r,a,u,f){const d=this.planes;return d[0].copy(e),d[1].copy(n),d[2].copy(r),d[3].copy(a),d[4].copy(u),d[5].copy(f),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=xi,r=!1){const a=this.planes,u=e.elements,f=u[0],d=u[1],m=u[2],p=u[3],_=u[4],x=u[5],S=u[6],M=u[7],w=u[8],A=u[9],y=u[10],v=u[11],F=u[12],L=u[13],b=u[14],V=u[15];if(a[0].setComponents(p-f,M-_,v-w,V-F).normalize(),a[1].setComponents(p+f,M+_,v+w,V+F).normalize(),a[2].setComponents(p+d,M+x,v+A,V+L).normalize(),a[3].setComponents(p-d,M-x,v-A,V-L).normalize(),r)a[4].setComponents(m,S,y,b).normalize(),a[5].setComponents(p-m,M-S,v-y,V-b).normalize();else if(a[4].setComponents(p-m,M-S,v-y,V-b).normalize(),n===xi)a[5].setComponents(p+m,M+S,v+y,V+b).normalize();else if(n===wl)a[5].setComponents(m,S,y,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),kr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),kr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(kr)}intersectsSprite(e){kr.center.set(0,0,0);const n=l0.distanceTo(e.center);return kr.radius=.7071067811865476+n,kr.applyMatrix4(e.matrixWorld),this.intersectsSphere(kr)}intersectsSphere(e){const n=this.planes,r=e.center,a=-e.radius;for(let u=0;u<6;u++)if(n[u].distanceToPoint(r)<a)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const a=n[r];if(dl.x=a.normal.x>0?e.max.x:e.min.x,dl.y=a.normal.y>0?e.max.y:e.min.y,dl.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(dl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class u0 extends zo{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new wt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Cl=new te,bl=new te,$p=new $t,bo=new zm,hl=new Dl,Bc=new te,Kp=new te;class c0 extends Ln{constructor(e=new Vi,n=new u0){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,r=[0];for(let a=1,u=n.count;a<u;a++)Cl.fromBufferAttribute(n,a-1),bl.fromBufferAttribute(n,a),r[a]=r[a-1],r[a]+=Cl.distanceTo(bl);e.setAttribute("lineDistance",new ki(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const r=this.geometry,a=this.matrixWorld,u=e.params.Line.threshold,f=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),hl.copy(r.boundingSphere),hl.applyMatrix4(a),hl.radius+=u,e.ray.intersectsSphere(hl)===!1)return;$p.copy(a).invert(),bo.copy(e.ray).applyMatrix4($p);const d=u/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=this.isLineSegments?2:1,_=r.index,S=r.attributes.position;if(_!==null){const M=Math.max(0,f.start),w=Math.min(_.count,f.start+f.count);for(let A=M,y=w-1;A<y;A+=p){const v=_.getX(A),F=_.getX(A+1),L=pl(this,e,bo,m,v,F,A);L&&n.push(L)}if(this.isLineLoop){const A=_.getX(w-1),y=_.getX(M),v=pl(this,e,bo,m,A,y,w-1);v&&n.push(v)}}else{const M=Math.max(0,f.start),w=Math.min(S.count,f.start+f.count);for(let A=M,y=w-1;A<y;A+=p){const v=pl(this,e,bo,m,A,A+1,A);v&&n.push(v)}if(this.isLineLoop){const A=pl(this,e,bo,m,w-1,M,w-1);A&&n.push(A)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,f=a.length;u<f;u++){const d=a[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}}function pl(o,e,n,r,a,u,f){const d=o.geometry.attributes.position;if(Cl.fromBufferAttribute(d,a),bl.fromBufferAttribute(d,u),n.distanceSqToSegment(Cl,bl,Bc,Kp)>r)return;Bc.applyMatrix4(o.matrixWorld);const p=e.ray.origin.distanceTo(Bc);if(!(p<e.near||p>e.far))return{distance:p,point:Kp.clone().applyMatrix4(o.matrixWorld),index:f,face:null,faceIndex:null,barycoord:null,object:o}}const Zp=new te,Qp=new te;class f0 extends c0{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,r=[];for(let a=0,u=n.count;a<u;a+=2)Zp.fromBufferAttribute(n,a),Qp.fromBufferAttribute(n,a+1),r[a]=a===0?0:r[a-1],r[a+1]=r[a]+Zp.distanceTo(Qp);e.setAttribute("lineDistance",new ki(r,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class qm extends Mn{constructor(e,n,r=Yr,a,u,f,d=Hn,m=Hn,p,_=No,x=1){if(_!==No&&_!==Uo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const S={width:e,height:n,depth:x};super(S,a,u,f,d,m,_,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new jf(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class $m extends Mn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class jr extends Vi{constructor(e=1,n=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:a};const u=e/2,f=n/2,d=Math.floor(r),m=Math.floor(a),p=d+1,_=m+1,x=e/d,S=n/m,M=[],w=[],A=[],y=[];for(let v=0;v<_;v++){const F=v*S-f;for(let L=0;L<p;L++){const b=L*x-u;w.push(b,-F,0),A.push(0,0,1),y.push(L/d),y.push(1-v/m)}}for(let v=0;v<m;v++)for(let F=0;F<d;F++){const L=F+p*v,b=F+p*(v+1),V=F+1+p*(v+1),k=F+1+p*v;M.push(L,b,k),M.push(b,V,k)}this.setIndex(M),this.setAttribute("position",new ki(w,3)),this.setAttribute("normal",new ki(A,3)),this.setAttribute("uv",new ki(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jr(e.width,e.height,e.widthSegments,e.heightSegments)}}class ml extends Hi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class d0 extends zo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=y_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class h0 extends zo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class p0 extends Rl{constructor(e=-1,n=1,r=1,a=-1,u=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=a,this.near=u,this.far=f,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,a,u,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=u,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let u=r-e,f=r+e,d=a+n,m=a-n;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=p*this.view.offsetX,f=u+p*this.view.width,d-=_*this.view.offsetY,m=d-_*this.view.height}this.projectionMatrix.makeOrthographic(u,f,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class m0 extends ui{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class g0{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=performance.now();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function Jp(o,e,n,r){const a=v0(r);switch(n){case Lm:return o*e;case Um:return o*e/a.components*a.byteLength;case Gf:return o*e/a.components*a.byteLength;case Im:return o*e*2/a.components*a.byteLength;case Wf:return o*e*2/a.components*a.byteLength;case Nm:return o*e*3/a.components*a.byteLength;case Zn:return o*e*4/a.components*a.byteLength;case Xf:return o*e*4/a.components*a.byteLength;case xl:case Sl:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case yl:case Ml:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case uf:case ff:return Math.max(o,16)*Math.max(e,8)/4;case lf:case cf:return Math.max(o,8)*Math.max(e,8)/2;case df:case hf:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case pf:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case mf:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case gf:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case vf:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case _f:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case xf:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case Sf:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case yf:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case Mf:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case Ef:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case Tf:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case wf:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case Af:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case Rf:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case Cf:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case bf:case Pf:case Df:return Math.ceil(o/4)*Math.ceil(e/4)*16;case Lf:case Nf:return Math.ceil(o/4)*Math.ceil(e/4)*8;case Uf:case If:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function v0(o){switch(o){case zi:case Cm:return{byteLength:1,components:1};case Do:case bm:case Hs:return{byteLength:2,components:1};case Hf:case Vf:return{byteLength:2,components:4};case Yr:case Bf:case _i:return{byteLength:4,components:1};case Pm:case Dm:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:zf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=zf);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Km(){let o=null,e=!1,n=null,r=null;function a(u,f){n(u,f),r=o.requestAnimationFrame(a)}return{start:function(){e!==!0&&n!==null&&(r=o.requestAnimationFrame(a),e=!0)},stop:function(){o.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(u){n=u},setContext:function(u){o=u}}}function _0(o){const e=new WeakMap;function n(d,m){const p=d.array,_=d.usage,x=p.byteLength,S=o.createBuffer();o.bindBuffer(m,S),o.bufferData(m,p,_),d.onUploadCallback();let M;if(p instanceof Float32Array)M=o.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)M=o.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?M=o.HALF_FLOAT:M=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=o.SHORT;else if(p instanceof Uint32Array)M=o.UNSIGNED_INT;else if(p instanceof Int32Array)M=o.INT;else if(p instanceof Int8Array)M=o.BYTE;else if(p instanceof Uint8Array)M=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:S,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:x}}function r(d,m,p){const _=m.array,x=m.updateRanges;if(o.bindBuffer(p,d),x.length===0)o.bufferSubData(p,0,_);else{x.sort((M,w)=>M.start-w.start);let S=0;for(let M=1;M<x.length;M++){const w=x[S],A=x[M];A.start<=w.start+w.count+1?w.count=Math.max(w.count,A.start+A.count-w.start):(++S,x[S]=A)}x.length=S+1;for(let M=0,w=x.length;M<w;M++){const A=x[M];o.bufferSubData(p,A.start*_.BYTES_PER_ELEMENT,_,A.start,A.count)}m.clearUpdateRanges()}m.onUploadCallback()}function a(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=e.get(d);m&&(o.deleteBuffer(m.buffer),e.delete(d))}function f(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const _=e.get(d);(!_||_.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=e.get(d);if(p===void 0)e.set(d,n(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,d,m),p.version=d.version}}return{get:a,remove:u,update:f}}var x0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,S0=`#ifdef USE_ALPHAHASH
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
#endif`,y0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,M0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,E0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,T0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,w0=`#ifdef USE_AOMAP
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
#endif`,A0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,R0=`#ifdef USE_BATCHING
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
#endif`,C0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,b0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,P0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,D0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,L0=`#ifdef USE_IRIDESCENCE
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
#endif`,N0=`#ifdef USE_BUMPMAP
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
#endif`,U0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,I0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,F0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,O0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,k0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,z0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,B0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,H0=`#if defined( USE_COLOR_ALPHA )
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
#endif`,V0=`#define PI 3.141592653589793
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
} // validated`,G0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,W0=`vec3 transformedNormal = objectNormal;
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
#endif`,X0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,j0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Y0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,q0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$0="gl_FragColor = linearToOutputTexel( gl_FragColor );",K0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Z0=`#ifdef USE_ENVMAP
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
#endif`,Q0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,J0=`#ifdef USE_ENVMAP
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
#endif`,ex=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,tx=`#ifdef USE_ENVMAP
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
#endif`,nx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ix=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,rx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,sx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ox=`#ifdef USE_GRADIENTMAP
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
}`,ax=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ux=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,cx=`uniform bool receiveShadow;
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
#endif`,fx=`#ifdef USE_ENVMAP
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
#endif`,dx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,hx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,px=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,mx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,gx=`PhysicalMaterial material;
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
#endif`,vx=`struct PhysicalMaterial {
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
}`,_x=`
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
#endif`,xx=`#if defined( RE_IndirectDiffuse )
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
#endif`,Sx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,yx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Mx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ex=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Tx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,wx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ax=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Rx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Cx=`#if defined( USE_POINTS_UV )
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
#endif`,bx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Px=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Dx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Lx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Nx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ux=`#ifdef USE_MORPHTARGETS
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
#endif`,Ix=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Fx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ox=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,kx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Hx=`#ifdef USE_NORMALMAP
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
#endif`,Vx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Gx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Wx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Xx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,jx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Yx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,qx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$x=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Kx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Zx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Qx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Jx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,eS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,tS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,nS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,iS=`float getShadowMask() {
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
}`,rS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,sS=`#ifdef USE_SKINNING
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
#endif`,oS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,aS=`#ifdef USE_SKINNING
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
#endif`,lS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,uS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,cS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,fS=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,dS=`#ifdef USE_TRANSMISSION
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
#endif`,hS=`#ifdef USE_TRANSMISSION
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
#endif`,pS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const _S=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,xS=`uniform sampler2D t2D;
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
}`,SS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yS=`#ifdef ENVMAP_TYPE_CUBE
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
}`,MS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ES=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,TS=`#include <common>
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
}`,wS=`#if DEPTH_PACKING == 3200
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
}`,AS=`#define DISTANCE
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
}`,RS=`#define DISTANCE
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
}`,CS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,bS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,PS=`uniform float scale;
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
}`,DS=`uniform vec3 diffuse;
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
}`,LS=`#include <common>
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
}`,NS=`uniform vec3 diffuse;
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
}`,US=`#define LAMBERT
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
}`,IS=`#define LAMBERT
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
}`,FS=`#define MATCAP
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
}`,OS=`#define MATCAP
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
}`,kS=`#define NORMAL
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
}`,zS=`#define NORMAL
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
}`,BS=`#define PHONG
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
}`,HS=`#define PHONG
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
}`,VS=`#define STANDARD
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
}`,GS=`#define STANDARD
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
}`,WS=`#define TOON
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
}`,XS=`#define TOON
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
}`,jS=`uniform float size;
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
}`,YS=`uniform vec3 diffuse;
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
}`,qS=`#include <common>
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
}`,$S=`uniform vec3 color;
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
}`,KS=`uniform float rotation;
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
}`,ZS=`uniform vec3 diffuse;
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
}`,pt={alphahash_fragment:x0,alphahash_pars_fragment:S0,alphamap_fragment:y0,alphamap_pars_fragment:M0,alphatest_fragment:E0,alphatest_pars_fragment:T0,aomap_fragment:w0,aomap_pars_fragment:A0,batching_pars_vertex:R0,batching_vertex:C0,begin_vertex:b0,beginnormal_vertex:P0,bsdfs:D0,iridescence_fragment:L0,bumpmap_pars_fragment:N0,clipping_planes_fragment:U0,clipping_planes_pars_fragment:I0,clipping_planes_pars_vertex:F0,clipping_planes_vertex:O0,color_fragment:k0,color_pars_fragment:z0,color_pars_vertex:B0,color_vertex:H0,common:V0,cube_uv_reflection_fragment:G0,defaultnormal_vertex:W0,displacementmap_pars_vertex:X0,displacementmap_vertex:j0,emissivemap_fragment:Y0,emissivemap_pars_fragment:q0,colorspace_fragment:$0,colorspace_pars_fragment:K0,envmap_fragment:Z0,envmap_common_pars_fragment:Q0,envmap_pars_fragment:J0,envmap_pars_vertex:ex,envmap_physical_pars_fragment:fx,envmap_vertex:tx,fog_vertex:nx,fog_pars_vertex:ix,fog_fragment:rx,fog_pars_fragment:sx,gradientmap_pars_fragment:ox,lightmap_pars_fragment:ax,lights_lambert_fragment:lx,lights_lambert_pars_fragment:ux,lights_pars_begin:cx,lights_toon_fragment:dx,lights_toon_pars_fragment:hx,lights_phong_fragment:px,lights_phong_pars_fragment:mx,lights_physical_fragment:gx,lights_physical_pars_fragment:vx,lights_fragment_begin:_x,lights_fragment_maps:xx,lights_fragment_end:Sx,logdepthbuf_fragment:yx,logdepthbuf_pars_fragment:Mx,logdepthbuf_pars_vertex:Ex,logdepthbuf_vertex:Tx,map_fragment:wx,map_pars_fragment:Ax,map_particle_fragment:Rx,map_particle_pars_fragment:Cx,metalnessmap_fragment:bx,metalnessmap_pars_fragment:Px,morphinstance_vertex:Dx,morphcolor_vertex:Lx,morphnormal_vertex:Nx,morphtarget_pars_vertex:Ux,morphtarget_vertex:Ix,normal_fragment_begin:Fx,normal_fragment_maps:Ox,normal_pars_fragment:kx,normal_pars_vertex:zx,normal_vertex:Bx,normalmap_pars_fragment:Hx,clearcoat_normal_fragment_begin:Vx,clearcoat_normal_fragment_maps:Gx,clearcoat_pars_fragment:Wx,iridescence_pars_fragment:Xx,opaque_fragment:jx,packing:Yx,premultiplied_alpha_fragment:qx,project_vertex:$x,dithering_fragment:Kx,dithering_pars_fragment:Zx,roughnessmap_fragment:Qx,roughnessmap_pars_fragment:Jx,shadowmap_pars_fragment:eS,shadowmap_pars_vertex:tS,shadowmap_vertex:nS,shadowmask_pars_fragment:iS,skinbase_vertex:rS,skinning_pars_vertex:sS,skinning_vertex:oS,skinnormal_vertex:aS,specularmap_fragment:lS,specularmap_pars_fragment:uS,tonemapping_fragment:cS,tonemapping_pars_fragment:fS,transmission_fragment:dS,transmission_pars_fragment:hS,uv_pars_fragment:pS,uv_pars_vertex:mS,uv_vertex:gS,worldpos_vertex:vS,background_vert:_S,background_frag:xS,backgroundCube_vert:SS,backgroundCube_frag:yS,cube_vert:MS,cube_frag:ES,depth_vert:TS,depth_frag:wS,distanceRGBA_vert:AS,distanceRGBA_frag:RS,equirect_vert:CS,equirect_frag:bS,linedashed_vert:PS,linedashed_frag:DS,meshbasic_vert:LS,meshbasic_frag:NS,meshlambert_vert:US,meshlambert_frag:IS,meshmatcap_vert:FS,meshmatcap_frag:OS,meshnormal_vert:kS,meshnormal_frag:zS,meshphong_vert:BS,meshphong_frag:HS,meshphysical_vert:VS,meshphysical_frag:GS,meshtoon_vert:WS,meshtoon_frag:XS,points_vert:jS,points_frag:YS,shadow_vert:qS,shadow_frag:$S,sprite_vert:KS,sprite_frag:ZS},be={common:{diffuse:{value:new wt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ht}},envmap:{envMap:{value:null},envMapRotation:{value:new ht},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ht},normalScale:{value:new ft(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new wt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new wt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0},uvTransform:{value:new ht}},sprite:{diffuse:{value:new wt(16777215)},opacity:{value:1},center:{value:new ft(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}}},vi={basic:{uniforms:yn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.fog]),vertexShader:pt.meshbasic_vert,fragmentShader:pt.meshbasic_frag},lambert:{uniforms:yn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new wt(0)}}]),vertexShader:pt.meshlambert_vert,fragmentShader:pt.meshlambert_frag},phong:{uniforms:yn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new wt(0)},specular:{value:new wt(1118481)},shininess:{value:30}}]),vertexShader:pt.meshphong_vert,fragmentShader:pt.meshphong_frag},standard:{uniforms:yn([be.common,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.roughnessmap,be.metalnessmap,be.fog,be.lights,{emissive:{value:new wt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag},toon:{uniforms:yn([be.common,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.gradientmap,be.fog,be.lights,{emissive:{value:new wt(0)}}]),vertexShader:pt.meshtoon_vert,fragmentShader:pt.meshtoon_frag},matcap:{uniforms:yn([be.common,be.bumpmap,be.normalmap,be.displacementmap,be.fog,{matcap:{value:null}}]),vertexShader:pt.meshmatcap_vert,fragmentShader:pt.meshmatcap_frag},points:{uniforms:yn([be.points,be.fog]),vertexShader:pt.points_vert,fragmentShader:pt.points_frag},dashed:{uniforms:yn([be.common,be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pt.linedashed_vert,fragmentShader:pt.linedashed_frag},depth:{uniforms:yn([be.common,be.displacementmap]),vertexShader:pt.depth_vert,fragmentShader:pt.depth_frag},normal:{uniforms:yn([be.common,be.bumpmap,be.normalmap,be.displacementmap,{opacity:{value:1}}]),vertexShader:pt.meshnormal_vert,fragmentShader:pt.meshnormal_frag},sprite:{uniforms:yn([be.sprite,be.fog]),vertexShader:pt.sprite_vert,fragmentShader:pt.sprite_frag},background:{uniforms:{uvTransform:{value:new ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pt.background_vert,fragmentShader:pt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ht}},vertexShader:pt.backgroundCube_vert,fragmentShader:pt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pt.cube_vert,fragmentShader:pt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pt.equirect_vert,fragmentShader:pt.equirect_frag},distanceRGBA:{uniforms:yn([be.common,be.displacementmap,{referencePosition:{value:new te},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pt.distanceRGBA_vert,fragmentShader:pt.distanceRGBA_frag},shadow:{uniforms:yn([be.lights,be.fog,{color:{value:new wt(0)},opacity:{value:1}}]),vertexShader:pt.shadow_vert,fragmentShader:pt.shadow_frag}};vi.physical={uniforms:yn([vi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ht},clearcoatNormalScale:{value:new ft(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ht},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ht},sheen:{value:0},sheenColor:{value:new wt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ht},transmissionSamplerSize:{value:new ft},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ht},attenuationDistance:{value:0},attenuationColor:{value:new wt(0)},specularColor:{value:new wt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ht},anisotropyVector:{value:new ft},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ht}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag};const gl={r:0,b:0,g:0},zr=new Bi,QS=new $t;function JS(o,e,n,r,a,u,f){const d=new wt(0);let m=u===!0?0:1,p,_,x=null,S=0,M=null;function w(L){let b=L.isScene===!0?L.background:null;return b&&b.isTexture&&(b=(L.backgroundBlurriness>0?n:e).get(b)),b}function A(L){let b=!1;const V=w(L);V===null?v(d,m):V&&V.isColor&&(v(V,1),b=!0);const k=o.xr.getEnvironmentBlendMode();k==="additive"?r.buffers.color.setClear(0,0,0,1,f):k==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,f),(o.autoClear||b)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function y(L,b){const V=w(b);V&&(V.isCubeTexture||V.mapping===Pl)?(_===void 0&&(_=new Qn(new Bo(1,1,1),new Hi({name:"BackgroundCubeMaterial",uniforms:Bs(vi.backgroundCube.uniforms),vertexShader:vi.backgroundCube.vertexShader,fragmentShader:vi.backgroundCube.fragmentShader,side:Dn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(k,z,Y){this.matrixWorld.copyPosition(Y.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(_)),zr.copy(b.backgroundRotation),zr.x*=-1,zr.y*=-1,zr.z*=-1,V.isCubeTexture&&V.isRenderTargetTexture===!1&&(zr.y*=-1,zr.z*=-1),_.material.uniforms.envMap.value=V,_.material.uniforms.flipEnvMap.value=V.isCubeTexture&&V.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(QS.makeRotationFromEuler(zr)),_.material.toneMapped=Tt.getTransfer(V.colorSpace)!==Nt,(x!==V||S!==V.version||M!==o.toneMapping)&&(_.material.needsUpdate=!0,x=V,S=V.version,M=o.toneMapping),_.layers.enableAll(),L.unshift(_,_.geometry,_.material,0,0,null)):V&&V.isTexture&&(p===void 0&&(p=new Qn(new jr(2,2),new Hi({name:"BackgroundMaterial",uniforms:Bs(vi.background.uniforms),vertexShader:vi.background.vertexShader,fragmentShader:vi.background.fragmentShader,side:_r,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(p)),p.material.uniforms.t2D.value=V,p.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,p.material.toneMapped=Tt.getTransfer(V.colorSpace)!==Nt,V.matrixAutoUpdate===!0&&V.updateMatrix(),p.material.uniforms.uvTransform.value.copy(V.matrix),(x!==V||S!==V.version||M!==o.toneMapping)&&(p.material.needsUpdate=!0,x=V,S=V.version,M=o.toneMapping),p.layers.enableAll(),L.unshift(p,p.geometry,p.material,0,0,null))}function v(L,b){L.getRGB(gl,Xm(o)),r.buffers.color.setClear(gl.r,gl.g,gl.b,b,f)}function F(){_!==void 0&&(_.geometry.dispose(),_.material.dispose(),_=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(L,b=1){d.set(L),m=b,v(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(L){m=L,v(d,m)},render:A,addToRenderList:y,dispose:F}}function ey(o,e){const n=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},a=S(null);let u=a,f=!1;function d(R,H,Q,se,ue){let de=!1;const oe=x(se,Q,H);u!==oe&&(u=oe,p(u.object)),de=M(R,se,Q,ue),de&&w(R,se,Q,ue),ue!==null&&e.update(ue,o.ELEMENT_ARRAY_BUFFER),(de||f)&&(f=!1,b(R,H,Q,se),ue!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(ue).buffer))}function m(){return o.createVertexArray()}function p(R){return o.bindVertexArray(R)}function _(R){return o.deleteVertexArray(R)}function x(R,H,Q){const se=Q.wireframe===!0;let ue=r[R.id];ue===void 0&&(ue={},r[R.id]=ue);let de=ue[H.id];de===void 0&&(de={},ue[H.id]=de);let oe=de[se];return oe===void 0&&(oe=S(m()),de[se]=oe),oe}function S(R){const H=[],Q=[],se=[];for(let ue=0;ue<n;ue++)H[ue]=0,Q[ue]=0,se[ue]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:Q,attributeDivisors:se,object:R,attributes:{},index:null}}function M(R,H,Q,se){const ue=u.attributes,de=H.attributes;let oe=0;const he=Q.getAttributes();for(const B in he)if(he[B].location>=0){const ae=ue[B];let N=de[B];if(N===void 0&&(B==="instanceMatrix"&&R.instanceMatrix&&(N=R.instanceMatrix),B==="instanceColor"&&R.instanceColor&&(N=R.instanceColor)),ae===void 0||ae.attribute!==N||N&&ae.data!==N.data)return!0;oe++}return u.attributesNum!==oe||u.index!==se}function w(R,H,Q,se){const ue={},de=H.attributes;let oe=0;const he=Q.getAttributes();for(const B in he)if(he[B].location>=0){let ae=de[B];ae===void 0&&(B==="instanceMatrix"&&R.instanceMatrix&&(ae=R.instanceMatrix),B==="instanceColor"&&R.instanceColor&&(ae=R.instanceColor));const N={};N.attribute=ae,ae&&ae.data&&(N.data=ae.data),ue[B]=N,oe++}u.attributes=ue,u.attributesNum=oe,u.index=se}function A(){const R=u.newAttributes;for(let H=0,Q=R.length;H<Q;H++)R[H]=0}function y(R){v(R,0)}function v(R,H){const Q=u.newAttributes,se=u.enabledAttributes,ue=u.attributeDivisors;Q[R]=1,se[R]===0&&(o.enableVertexAttribArray(R),se[R]=1),ue[R]!==H&&(o.vertexAttribDivisor(R,H),ue[R]=H)}function F(){const R=u.newAttributes,H=u.enabledAttributes;for(let Q=0,se=H.length;Q<se;Q++)H[Q]!==R[Q]&&(o.disableVertexAttribArray(Q),H[Q]=0)}function L(R,H,Q,se,ue,de,oe){oe===!0?o.vertexAttribIPointer(R,H,Q,ue,de):o.vertexAttribPointer(R,H,Q,se,ue,de)}function b(R,H,Q,se){A();const ue=se.attributes,de=Q.getAttributes(),oe=H.defaultAttributeValues;for(const he in de){const B=de[he];if(B.location>=0){let ce=ue[he];if(ce===void 0&&(he==="instanceMatrix"&&R.instanceMatrix&&(ce=R.instanceMatrix),he==="instanceColor"&&R.instanceColor&&(ce=R.instanceColor)),ce!==void 0){const ae=ce.normalized,N=ce.itemSize,ie=e.get(ce);if(ie===void 0)continue;const ke=ie.buffer,Ge=ie.type,He=ie.bytesPerElement,J=Ge===o.INT||Ge===o.UNSIGNED_INT||ce.gpuType===Bf;if(ce.isInterleavedBufferAttribute){const fe=ce.data,_e=fe.stride,De=ce.offset;if(fe.isInstancedInterleavedBuffer){for(let Ne=0;Ne<B.locationSize;Ne++)v(B.location+Ne,fe.meshPerAttribute);R.isInstancedMesh!==!0&&se._maxInstanceCount===void 0&&(se._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let Ne=0;Ne<B.locationSize;Ne++)y(B.location+Ne);o.bindBuffer(o.ARRAY_BUFFER,ke);for(let Ne=0;Ne<B.locationSize;Ne++)L(B.location+Ne,N/B.locationSize,Ge,ae,_e*He,(De+N/B.locationSize*Ne)*He,J)}else{if(ce.isInstancedBufferAttribute){for(let fe=0;fe<B.locationSize;fe++)v(B.location+fe,ce.meshPerAttribute);R.isInstancedMesh!==!0&&se._maxInstanceCount===void 0&&(se._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let fe=0;fe<B.locationSize;fe++)y(B.location+fe);o.bindBuffer(o.ARRAY_BUFFER,ke);for(let fe=0;fe<B.locationSize;fe++)L(B.location+fe,N/B.locationSize,Ge,ae,N*He,N/B.locationSize*fe*He,J)}}else if(oe!==void 0){const ae=oe[he];if(ae!==void 0)switch(ae.length){case 2:o.vertexAttrib2fv(B.location,ae);break;case 3:o.vertexAttrib3fv(B.location,ae);break;case 4:o.vertexAttrib4fv(B.location,ae);break;default:o.vertexAttrib1fv(B.location,ae)}}}}F()}function V(){Y();for(const R in r){const H=r[R];for(const Q in H){const se=H[Q];for(const ue in se)_(se[ue].object),delete se[ue];delete H[Q]}delete r[R]}}function k(R){if(r[R.id]===void 0)return;const H=r[R.id];for(const Q in H){const se=H[Q];for(const ue in se)_(se[ue].object),delete se[ue];delete H[Q]}delete r[R.id]}function z(R){for(const H in r){const Q=r[H];if(Q[R.id]===void 0)continue;const se=Q[R.id];for(const ue in se)_(se[ue].object),delete se[ue];delete Q[R.id]}}function Y(){P(),f=!0,u!==a&&(u=a,p(u.object))}function P(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:d,reset:Y,resetDefaultState:P,dispose:V,releaseStatesOfGeometry:k,releaseStatesOfProgram:z,initAttributes:A,enableAttribute:y,disableUnusedAttributes:F}}function ty(o,e,n){let r;function a(p){r=p}function u(p,_){o.drawArrays(r,p,_),n.update(_,r,1)}function f(p,_,x){x!==0&&(o.drawArraysInstanced(r,p,_,x),n.update(_,r,x))}function d(p,_,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,_,0,x);let M=0;for(let w=0;w<x;w++)M+=_[w];n.update(M,r,1)}function m(p,_,x,S){if(x===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let w=0;w<p.length;w++)f(p[w],_[w],S[w]);else{M.multiDrawArraysInstancedWEBGL(r,p,0,_,0,S,0,x);let w=0;for(let A=0;A<x;A++)w+=_[A]*S[A];n.update(w,r,1)}}this.setMode=a,this.render=u,this.renderInstances=f,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function ny(o,e,n,r){let a;function u(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const z=e.get("EXT_texture_filter_anisotropic");a=o.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function f(z){return!(z!==Zn&&r.convert(z)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(z){const Y=z===Hs&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(z!==zi&&r.convert(z)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==_i&&!Y)}function m(z){if(z==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=n.precision!==void 0?n.precision:"highp";const _=m(p);_!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",_,"instead."),p=_);const x=n.logarithmicDepthBuffer===!0,S=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),M=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),w=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=o.getParameter(o.MAX_TEXTURE_SIZE),y=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),v=o.getParameter(o.MAX_VERTEX_ATTRIBS),F=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),L=o.getParameter(o.MAX_VARYING_VECTORS),b=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),V=w>0,k=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:m,textureFormatReadable:f,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:x,reversedDepthBuffer:S,maxTextures:M,maxVertexTextures:w,maxTextureSize:A,maxCubemapSize:y,maxAttributes:v,maxVertexUniforms:F,maxVaryings:L,maxFragmentUniforms:b,vertexTextures:V,maxSamples:k}}function iy(o){const e=this;let n=null,r=0,a=!1,u=!1;const f=new Hr,d=new ht,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(x,S){const M=x.length!==0||S||r!==0||a;return a=S,r=x.length,M},this.beginShadows=function(){u=!0,_(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(x,S){n=_(x,S,0)},this.setState=function(x,S,M){const w=x.clippingPlanes,A=x.clipIntersection,y=x.clipShadows,v=o.get(x);if(!a||w===null||w.length===0||u&&!y)u?_(null):p();else{const F=u?0:r,L=F*4;let b=v.clippingState||null;m.value=b,b=_(w,S,L,M);for(let V=0;V!==L;++V)b[V]=n[V];v.clippingState=b,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=F}};function p(){m.value!==n&&(m.value=n,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function _(x,S,M,w){const A=x!==null?x.length:0;let y=null;if(A!==0){if(y=m.value,w!==!0||y===null){const v=M+A*4,F=S.matrixWorldInverse;d.getNormalMatrix(F),(y===null||y.length<v)&&(y=new Float32Array(v));for(let L=0,b=M;L!==A;++L,b+=4)f.copy(x[L]).applyMatrix4(F,d),f.normal.toArray(y,b),y[b+3]=f.constant}m.value=y,m.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,y}}function ry(o){let e=new WeakMap;function n(f,d){return d===rf?f.mapping=Os:d===sf&&(f.mapping=ks),f}function r(f){if(f&&f.isTexture){const d=f.mapping;if(d===rf||d===sf)if(e.has(f)){const m=e.get(f).texture;return n(m,f.mapping)}else{const m=f.image;if(m&&m.height>0){const p=new i0(m.height);return p.fromEquirectangularTexture(o,f),e.set(f,p),f.addEventListener("dispose",a),n(p.texture,f.mapping)}else return null}}return f}function a(f){const d=f.target;d.removeEventListener("dispose",a);const m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function u(){e=new WeakMap}return{get:r,dispose:u}}const Ns=4,em=[.125,.215,.35,.446,.526,.582],Wr=20,Hc=new p0,tm=new wt;let Vc=null,Gc=0,Wc=0,Xc=!1;const Vr=(1+Math.sqrt(5))/2,Ls=1/Vr,nm=[new te(-Vr,Ls,0),new te(Vr,Ls,0),new te(-Ls,0,Vr),new te(Ls,0,Vr),new te(0,Vr,-Ls),new te(0,Vr,Ls),new te(-1,1,-1),new te(1,1,-1),new te(-1,1,1),new te(1,1,1)],sy=new te;class im{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,r=.1,a=100,u={}){const{size:f=256,position:d=sy}=u;Vc=this._renderer.getRenderTarget(),Gc=this._renderer.getActiveCubeFace(),Wc=this._renderer.getActiveMipmapLevel(),Xc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,r,a,m,d),n>0&&this._blur(m,0,0,n),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=om(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=sm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Vc,Gc,Wc),this._renderer.xr.enabled=Xc,e.scissorTest=!1,vl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Os||e.mapping===ks?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Vc=this._renderer.getRenderTarget(),Gc=this._renderer.getActiveCubeFace(),Wc=this._renderer.getActiveMipmapLevel(),Xc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:Pn,minFilter:Pn,generateMipmaps:!1,type:Hs,format:Zn,colorSpace:zs,depthBuffer:!1},a=rm(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=rm(e,n,r);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=oy(u)),this._blurMaterial=ay(u,e,n)}return a}_compileMaterial(e){const n=new Qn(this._lodPlanes[0],e);this._renderer.compile(n,Hc)}_sceneToCubeUV(e,n,r,a,u){const m=new ui(90,1,n,r),p=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],x=this._renderer,S=x.autoClear,M=x.toneMapping;x.getClearColor(tm),x.toneMapping=vr,x.autoClear=!1,x.state.buffers.depth.getReversed()&&(x.setRenderTarget(a),x.clearDepth(),x.setRenderTarget(null));const A=new Vm({name:"PMREM.Background",side:Dn,depthWrite:!1,depthTest:!1}),y=new Qn(new Bo,A);let v=!1;const F=e.background;F?F.isColor&&(A.color.copy(F),e.background=null,v=!0):(A.color.copy(tm),v=!0);for(let L=0;L<6;L++){const b=L%3;b===0?(m.up.set(0,p[L],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x+_[L],u.y,u.z)):b===1?(m.up.set(0,0,p[L]),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y+_[L],u.z)):(m.up.set(0,p[L],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y,u.z+_[L]));const V=this._cubeSize;vl(a,b*V,L>2?V:0,V,V),x.setRenderTarget(a),v&&x.render(y,m),x.render(e,m)}y.geometry.dispose(),y.material.dispose(),x.toneMapping=M,x.autoClear=S,e.background=F}_textureToCubeUV(e,n){const r=this._renderer,a=e.mapping===Os||e.mapping===ks;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=om()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=sm());const u=a?this._cubemapMaterial:this._equirectMaterial,f=new Qn(this._lodPlanes[0],u),d=u.uniforms;d.envMap.value=e;const m=this._cubeSize;vl(n,0,0,3*m,2*m),r.setRenderTarget(n),r.render(f,Hc)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const a=this._lodPlanes.length;for(let u=1;u<a;u++){const f=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),d=nm[(a-u-1)%nm.length];this._blur(e,u-1,u,f,d)}n.autoClear=r}_blur(e,n,r,a,u){const f=this._pingPongRenderTarget;this._halfBlur(e,f,n,r,a,"latitudinal",u),this._halfBlur(f,e,r,r,a,"longitudinal",u)}_halfBlur(e,n,r,a,u,f,d){const m=this._renderer,p=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const _=3,x=new Qn(this._lodPlanes[a],p),S=p.uniforms,M=this._sizeLods[r]-1,w=isFinite(u)?Math.PI/(2*M):2*Math.PI/(2*Wr-1),A=u/w,y=isFinite(u)?1+Math.floor(_*A):Wr;y>Wr&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Wr}`);const v=[];let F=0;for(let z=0;z<Wr;++z){const Y=z/A,P=Math.exp(-Y*Y/2);v.push(P),z===0?F+=P:z<y&&(F+=2*P)}for(let z=0;z<v.length;z++)v[z]=v[z]/F;S.envMap.value=e.texture,S.samples.value=y,S.weights.value=v,S.latitudinal.value=f==="latitudinal",d&&(S.poleAxis.value=d);const{_lodMax:L}=this;S.dTheta.value=w,S.mipInt.value=L-r;const b=this._sizeLods[a],V=3*b*(a>L-Ns?a-L+Ns:0),k=4*(this._cubeSize-b);vl(n,V,k,3*b,2*b),m.setRenderTarget(n),m.render(x,Hc)}}function oy(o){const e=[],n=[],r=[];let a=o;const u=o-Ns+1+em.length;for(let f=0;f<u;f++){const d=Math.pow(2,a);n.push(d);let m=1/d;f>o-Ns?m=em[f-o+Ns-1]:f===0&&(m=0),r.push(m);const p=1/(d-2),_=-p,x=1+p,S=[_,_,x,_,x,x,_,_,x,x,_,x],M=6,w=6,A=3,y=2,v=1,F=new Float32Array(A*w*M),L=new Float32Array(y*w*M),b=new Float32Array(v*w*M);for(let k=0;k<M;k++){const z=k%3*2/3-1,Y=k>2?0:-1,P=[z,Y,0,z+2/3,Y,0,z+2/3,Y+1,0,z,Y,0,z+2/3,Y+1,0,z,Y+1,0];F.set(P,A*w*k),L.set(S,y*w*k);const R=[k,k,k,k,k,k];b.set(R,v*w*k)}const V=new Vi;V.setAttribute("position",new di(F,A)),V.setAttribute("uv",new di(L,y)),V.setAttribute("faceIndex",new di(b,v)),e.push(V),a>Ns&&a--}return{lodPlanes:e,sizeLods:n,sigmas:r}}function rm(o,e,n){const r=new xr(o,e,n);return r.texture.mapping=Pl,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function vl(o,e,n,r,a){o.viewport.set(e,n,r,a),o.scissor.set(e,n,r,a)}function ay(o,e,n){const r=new Float32Array(Wr),a=new te(0,1,0);return new Hi({name:"SphericalGaussianBlur",defines:{n:Wr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:Yf(),fragmentShader:`

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
		`,blending:gr,depthTest:!1,depthWrite:!1})}function sm(){return new Hi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Yf(),fragmentShader:`

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
		`,blending:gr,depthTest:!1,depthWrite:!1})}function om(){return new Hi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Yf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:gr,depthTest:!1,depthWrite:!1})}function Yf(){return`

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
	`}function ly(o){let e=new WeakMap,n=null;function r(d){if(d&&d.isTexture){const m=d.mapping,p=m===rf||m===sf,_=m===Os||m===ks;if(p||_){let x=e.get(d);const S=x!==void 0?x.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==S)return n===null&&(n=new im(o)),x=p?n.fromEquirectangular(d,x):n.fromCubemap(d,x),x.texture.pmremVersion=d.pmremVersion,e.set(d,x),x.texture;if(x!==void 0)return x.texture;{const M=d.image;return p&&M&&M.height>0||_&&M&&a(M)?(n===null&&(n=new im(o)),x=p?n.fromEquirectangular(d):n.fromCubemap(d),x.texture.pmremVersion=d.pmremVersion,e.set(d,x),d.addEventListener("dispose",u),x.texture):null}}}return d}function a(d){let m=0;const p=6;for(let _=0;_<p;_++)d[_]!==void 0&&m++;return m===p}function u(d){const m=d.target;m.removeEventListener("dispose",u);const p=e.get(m);p!==void 0&&(e.delete(m),p.dispose())}function f(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:f}}function uy(o){const e={};function n(r){if(e[r]!==void 0)return e[r];let a;switch(r){case"WEBGL_depth_texture":a=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=o.getExtension(r)}return e[r]=a,a}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const a=n(r);return a===null&&Io("THREE.WebGLRenderer: "+r+" extension not supported."),a}}}function cy(o,e,n,r){const a={},u=new WeakMap;function f(x){const S=x.target;S.index!==null&&e.remove(S.index);for(const w in S.attributes)e.remove(S.attributes[w]);S.removeEventListener("dispose",f),delete a[S.id];const M=u.get(S);M&&(e.remove(M),u.delete(S)),r.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,n.memory.geometries--}function d(x,S){return a[S.id]===!0||(S.addEventListener("dispose",f),a[S.id]=!0,n.memory.geometries++),S}function m(x){const S=x.attributes;for(const M in S)e.update(S[M],o.ARRAY_BUFFER)}function p(x){const S=[],M=x.index,w=x.attributes.position;let A=0;if(M!==null){const F=M.array;A=M.version;for(let L=0,b=F.length;L<b;L+=3){const V=F[L+0],k=F[L+1],z=F[L+2];S.push(V,k,k,z,z,V)}}else if(w!==void 0){const F=w.array;A=w.version;for(let L=0,b=F.length/3-1;L<b;L+=3){const V=L+0,k=L+1,z=L+2;S.push(V,k,k,z,z,V)}}else return;const y=new(Om(S)?Wm:Gm)(S,1);y.version=A;const v=u.get(x);v&&e.remove(v),u.set(x,y)}function _(x){const S=u.get(x);if(S){const M=x.index;M!==null&&S.version<M.version&&p(x)}else p(x);return u.get(x)}return{get:d,update:m,getWireframeAttribute:_}}function fy(o,e,n){let r;function a(S){r=S}let u,f;function d(S){u=S.type,f=S.bytesPerElement}function m(S,M){o.drawElements(r,M,u,S*f),n.update(M,r,1)}function p(S,M,w){w!==0&&(o.drawElementsInstanced(r,M,u,S*f,w),n.update(M,r,w))}function _(S,M,w){if(w===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,M,0,u,S,0,w);let y=0;for(let v=0;v<w;v++)y+=M[v];n.update(y,r,1)}function x(S,M,w,A){if(w===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let v=0;v<S.length;v++)p(S[v]/f,M[v],A[v]);else{y.multiDrawElementsInstancedWEBGL(r,M,0,u,S,0,A,0,w);let v=0;for(let F=0;F<w;F++)v+=M[F]*A[F];n.update(v,r,1)}}this.setMode=a,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=_,this.renderMultiDrawInstances=x}function dy(o){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,f,d){switch(n.calls++,f){case o.TRIANGLES:n.triangles+=d*(u/3);break;case o.LINES:n.lines+=d*(u/2);break;case o.LINE_STRIP:n.lines+=d*(u-1);break;case o.LINE_LOOP:n.lines+=d*u;break;case o.POINTS:n.points+=d*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",f);break}}function a(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:a,update:r}}function hy(o,e,n){const r=new WeakMap,a=new Gt;function u(f,d,m){const p=f.morphTargetInfluences,_=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,x=_!==void 0?_.length:0;let S=r.get(d);if(S===void 0||S.count!==x){let R=function(){Y.dispose(),r.delete(d),d.removeEventListener("dispose",R)};var M=R;S!==void 0&&S.texture.dispose();const w=d.morphAttributes.position!==void 0,A=d.morphAttributes.normal!==void 0,y=d.morphAttributes.color!==void 0,v=d.morphAttributes.position||[],F=d.morphAttributes.normal||[],L=d.morphAttributes.color||[];let b=0;w===!0&&(b=1),A===!0&&(b=2),y===!0&&(b=3);let V=d.attributes.position.count*b,k=1;V>e.maxTextureSize&&(k=Math.ceil(V/e.maxTextureSize),V=e.maxTextureSize);const z=new Float32Array(V*k*4*x),Y=new km(z,V,k,x);Y.type=_i,Y.needsUpdate=!0;const P=b*4;for(let H=0;H<x;H++){const Q=v[H],se=F[H],ue=L[H],de=V*k*4*H;for(let oe=0;oe<Q.count;oe++){const he=oe*P;w===!0&&(a.fromBufferAttribute(Q,oe),z[de+he+0]=a.x,z[de+he+1]=a.y,z[de+he+2]=a.z,z[de+he+3]=0),A===!0&&(a.fromBufferAttribute(se,oe),z[de+he+4]=a.x,z[de+he+5]=a.y,z[de+he+6]=a.z,z[de+he+7]=0),y===!0&&(a.fromBufferAttribute(ue,oe),z[de+he+8]=a.x,z[de+he+9]=a.y,z[de+he+10]=a.z,z[de+he+11]=ue.itemSize===4?a.w:1)}}S={count:x,texture:Y,size:new ft(V,k)},r.set(d,S),d.addEventListener("dispose",R)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",f.morphTexture,n);else{let w=0;for(let y=0;y<p.length;y++)w+=p[y];const A=d.morphTargetsRelative?1:1-w;m.getUniforms().setValue(o,"morphTargetBaseInfluence",A),m.getUniforms().setValue(o,"morphTargetInfluences",p)}m.getUniforms().setValue(o,"morphTargetsTexture",S.texture,n),m.getUniforms().setValue(o,"morphTargetsTextureSize",S.size)}return{update:u}}function py(o,e,n,r){let a=new WeakMap;function u(m){const p=r.render.frame,_=m.geometry,x=e.get(m,_);if(a.get(x)!==p&&(e.update(x),a.set(x,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),a.get(m)!==p&&(n.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&n.update(m.instanceColor,o.ARRAY_BUFFER),a.set(m,p))),m.isSkinnedMesh){const S=m.skeleton;a.get(S)!==p&&(S.update(),a.set(S,p))}return x}function f(){a=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),n.remove(p.instanceMatrix),p.instanceColor!==null&&n.remove(p.instanceColor)}return{update:u,dispose:f}}const Zm=new Mn,am=new qm(1,1),Qm=new km,Jm=new B_,eg=new jm,lm=[],um=[],cm=new Float32Array(16),fm=new Float32Array(9),dm=new Float32Array(4);function Gs(o,e,n){const r=o[0];if(r<=0||r>0)return o;const a=e*n;let u=lm[a];if(u===void 0&&(u=new Float32Array(a),lm[a]=u),e!==0){r.toArray(u,0);for(let f=1,d=0;f!==e;++f)d+=n,o[f].toArray(u,d)}return u}function Jt(o,e){if(o.length!==e.length)return!1;for(let n=0,r=o.length;n<r;n++)if(o[n]!==e[n])return!1;return!0}function en(o,e){for(let n=0,r=e.length;n<r;n++)o[n]=e[n]}function Ll(o,e){let n=um[e];n===void 0&&(n=new Int32Array(e),um[e]=n);for(let r=0;r!==e;++r)n[r]=o.allocateTextureUnit();return n}function my(o,e){const n=this.cache;n[0]!==e&&(o.uniform1f(this.addr,e),n[0]=e)}function gy(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Jt(n,e))return;o.uniform2fv(this.addr,e),en(n,e)}}function vy(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Jt(n,e))return;o.uniform3fv(this.addr,e),en(n,e)}}function _y(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Jt(n,e))return;o.uniform4fv(this.addr,e),en(n,e)}}function xy(o,e){const n=this.cache,r=e.elements;if(r===void 0){if(Jt(n,e))return;o.uniformMatrix2fv(this.addr,!1,e),en(n,e)}else{if(Jt(n,r))return;dm.set(r),o.uniformMatrix2fv(this.addr,!1,dm),en(n,r)}}function Sy(o,e){const n=this.cache,r=e.elements;if(r===void 0){if(Jt(n,e))return;o.uniformMatrix3fv(this.addr,!1,e),en(n,e)}else{if(Jt(n,r))return;fm.set(r),o.uniformMatrix3fv(this.addr,!1,fm),en(n,r)}}function yy(o,e){const n=this.cache,r=e.elements;if(r===void 0){if(Jt(n,e))return;o.uniformMatrix4fv(this.addr,!1,e),en(n,e)}else{if(Jt(n,r))return;cm.set(r),o.uniformMatrix4fv(this.addr,!1,cm),en(n,r)}}function My(o,e){const n=this.cache;n[0]!==e&&(o.uniform1i(this.addr,e),n[0]=e)}function Ey(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Jt(n,e))return;o.uniform2iv(this.addr,e),en(n,e)}}function Ty(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Jt(n,e))return;o.uniform3iv(this.addr,e),en(n,e)}}function wy(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Jt(n,e))return;o.uniform4iv(this.addr,e),en(n,e)}}function Ay(o,e){const n=this.cache;n[0]!==e&&(o.uniform1ui(this.addr,e),n[0]=e)}function Ry(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Jt(n,e))return;o.uniform2uiv(this.addr,e),en(n,e)}}function Cy(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Jt(n,e))return;o.uniform3uiv(this.addr,e),en(n,e)}}function by(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Jt(n,e))return;o.uniform4uiv(this.addr,e),en(n,e)}}function Py(o,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(o.uniform1i(this.addr,a),r[0]=a);let u;this.type===o.SAMPLER_2D_SHADOW?(am.compareFunction=Fm,u=am):u=Zm,n.setTexture2D(e||u,a)}function Dy(o,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(o.uniform1i(this.addr,a),r[0]=a),n.setTexture3D(e||Jm,a)}function Ly(o,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(o.uniform1i(this.addr,a),r[0]=a),n.setTextureCube(e||eg,a)}function Ny(o,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(o.uniform1i(this.addr,a),r[0]=a),n.setTexture2DArray(e||Qm,a)}function Uy(o){switch(o){case 5126:return my;case 35664:return gy;case 35665:return vy;case 35666:return _y;case 35674:return xy;case 35675:return Sy;case 35676:return yy;case 5124:case 35670:return My;case 35667:case 35671:return Ey;case 35668:case 35672:return Ty;case 35669:case 35673:return wy;case 5125:return Ay;case 36294:return Ry;case 36295:return Cy;case 36296:return by;case 35678:case 36198:case 36298:case 36306:case 35682:return Py;case 35679:case 36299:case 36307:return Dy;case 35680:case 36300:case 36308:case 36293:return Ly;case 36289:case 36303:case 36311:case 36292:return Ny}}function Iy(o,e){o.uniform1fv(this.addr,e)}function Fy(o,e){const n=Gs(e,this.size,2);o.uniform2fv(this.addr,n)}function Oy(o,e){const n=Gs(e,this.size,3);o.uniform3fv(this.addr,n)}function ky(o,e){const n=Gs(e,this.size,4);o.uniform4fv(this.addr,n)}function zy(o,e){const n=Gs(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,n)}function By(o,e){const n=Gs(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,n)}function Hy(o,e){const n=Gs(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,n)}function Vy(o,e){o.uniform1iv(this.addr,e)}function Gy(o,e){o.uniform2iv(this.addr,e)}function Wy(o,e){o.uniform3iv(this.addr,e)}function Xy(o,e){o.uniform4iv(this.addr,e)}function jy(o,e){o.uniform1uiv(this.addr,e)}function Yy(o,e){o.uniform2uiv(this.addr,e)}function qy(o,e){o.uniform3uiv(this.addr,e)}function $y(o,e){o.uniform4uiv(this.addr,e)}function Ky(o,e,n){const r=this.cache,a=e.length,u=Ll(n,a);Jt(r,u)||(o.uniform1iv(this.addr,u),en(r,u));for(let f=0;f!==a;++f)n.setTexture2D(e[f]||Zm,u[f])}function Zy(o,e,n){const r=this.cache,a=e.length,u=Ll(n,a);Jt(r,u)||(o.uniform1iv(this.addr,u),en(r,u));for(let f=0;f!==a;++f)n.setTexture3D(e[f]||Jm,u[f])}function Qy(o,e,n){const r=this.cache,a=e.length,u=Ll(n,a);Jt(r,u)||(o.uniform1iv(this.addr,u),en(r,u));for(let f=0;f!==a;++f)n.setTextureCube(e[f]||eg,u[f])}function Jy(o,e,n){const r=this.cache,a=e.length,u=Ll(n,a);Jt(r,u)||(o.uniform1iv(this.addr,u),en(r,u));for(let f=0;f!==a;++f)n.setTexture2DArray(e[f]||Qm,u[f])}function eM(o){switch(o){case 5126:return Iy;case 35664:return Fy;case 35665:return Oy;case 35666:return ky;case 35674:return zy;case 35675:return By;case 35676:return Hy;case 5124:case 35670:return Vy;case 35667:case 35671:return Gy;case 35668:case 35672:return Wy;case 35669:case 35673:return Xy;case 5125:return jy;case 36294:return Yy;case 36295:return qy;case 36296:return $y;case 35678:case 36198:case 36298:case 36306:case 35682:return Ky;case 35679:case 36299:case 36307:return Zy;case 35680:case 36300:case 36308:case 36293:return Qy;case 36289:case 36303:case 36311:case 36292:return Jy}}class tM{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=Uy(n.type)}}class nM{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=eM(n.type)}}class iM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const a=this.seq;for(let u=0,f=a.length;u!==f;++u){const d=a[u];d.setValue(e,n[d.id],r)}}}const jc=/(\w+)(\])?(\[|\.)?/g;function hm(o,e){o.seq.push(e),o.map[e.id]=e}function rM(o,e,n){const r=o.name,a=r.length;for(jc.lastIndex=0;;){const u=jc.exec(r),f=jc.lastIndex;let d=u[1];const m=u[2]==="]",p=u[3];if(m&&(d=d|0),p===void 0||p==="["&&f+2===a){hm(n,p===void 0?new tM(d,o,e):new nM(d,o,e));break}else{let x=n.map[d];x===void 0&&(x=new iM(d),hm(n,x)),n=x}}}class El{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<r;++a){const u=e.getActiveUniform(n,a),f=e.getUniformLocation(n,u.name);rM(u,f,this)}}setValue(e,n,r,a){const u=this.map[n];u!==void 0&&u.setValue(e,r,a)}setOptional(e,n,r){const a=n[r];a!==void 0&&this.setValue(e,r,a)}static upload(e,n,r,a){for(let u=0,f=n.length;u!==f;++u){const d=n[u],m=r[d.id];m.needsUpdate!==!1&&d.setValue(e,m.value,a)}}static seqWithValue(e,n){const r=[];for(let a=0,u=e.length;a!==u;++a){const f=e[a];f.id in n&&r.push(f)}return r}}function pm(o,e,n){const r=o.createShader(e);return o.shaderSource(r,n),o.compileShader(r),r}const sM=37297;let oM=0;function aM(o,e){const n=o.split(`
`),r=[],a=Math.max(e-6,0),u=Math.min(e+6,n.length);for(let f=a;f<u;f++){const d=f+1;r.push(`${d===e?">":" "} ${d}: ${n[f]}`)}return r.join(`
`)}const mm=new ht;function lM(o){Tt._getMatrix(mm,Tt.workingColorSpace,o);const e=`mat3( ${mm.elements.map(n=>n.toFixed(4))} )`;switch(Tt.getTransfer(o)){case Tl:return[e,"LinearTransferOETF"];case Nt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function gm(o,e,n){const r=o.getShaderParameter(e,o.COMPILE_STATUS),u=(o.getShaderInfoLog(e)||"").trim();if(r&&u==="")return"";const f=/ERROR: 0:(\d+)/.exec(u);if(f){const d=parseInt(f[1]);return n.toUpperCase()+`

`+u+`

`+aM(o.getShaderSource(e),d)}else return u}function uM(o,e){const n=lM(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function cM(o,e){let n;switch(e){case h_:n="Linear";break;case p_:n="Reinhard";break;case m_:n="Cineon";break;case g_:n="ACESFilmic";break;case __:n="AgX";break;case x_:n="Neutral";break;case v_:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+o+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const _l=new te;function fM(){Tt.getLuminanceCoefficients(_l);const o=_l.x.toFixed(4),e=_l.y.toFixed(4),n=_l.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function dM(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Po).join(`
`)}function hM(o){const e=[];for(const n in o){const r=o[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function pM(o,e){const n={},r=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){const u=o.getActiveAttrib(e,a),f=u.name;let d=1;u.type===o.FLOAT_MAT2&&(d=2),u.type===o.FLOAT_MAT3&&(d=3),u.type===o.FLOAT_MAT4&&(d=4),n[f]={type:u.type,location:o.getAttribLocation(e,f),locationSize:d}}return n}function Po(o){return o!==""}function vm(o,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function _m(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const mM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Of(o){return o.replace(mM,vM)}const gM=new Map;function vM(o,e){let n=pt[e];if(n===void 0){const r=gM.get(e);if(r!==void 0)n=pt[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Of(n)}const _M=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function xm(o){return o.replace(_M,xM)}function xM(o,e,n,r){let a="";for(let u=parseInt(e);u<parseInt(n);u++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return a}function Sm(o){let e=`precision ${o.precision} float;
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
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function SM(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===wm?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===jv?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===Ii&&(e="SHADOWMAP_TYPE_VSM"),e}function yM(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case Os:case ks:e="ENVMAP_TYPE_CUBE";break;case Pl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function MM(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case ks:e="ENVMAP_MODE_REFRACTION";break}return e}function EM(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case Am:e="ENVMAP_BLENDING_MULTIPLY";break;case f_:e="ENVMAP_BLENDING_MIX";break;case d_:e="ENVMAP_BLENDING_ADD";break}return e}function TM(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:r,maxMip:n}}function wM(o,e,n,r){const a=o.getContext(),u=n.defines;let f=n.vertexShader,d=n.fragmentShader;const m=SM(n),p=yM(n),_=MM(n),x=EM(n),S=TM(n),M=dM(n),w=hM(u),A=a.createProgram();let y,v,F=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(y=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w].filter(Po).join(`
`),y.length>0&&(y+=`
`),v=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w].filter(Po).join(`
`),v.length>0&&(v+=`
`)):(y=[Sm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+_:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Po).join(`
`),v=[Sm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+p:"",n.envMap?"#define "+_:"",n.envMap?"#define "+x:"",S?"#define CUBEUV_TEXEL_WIDTH "+S.texelWidth:"",S?"#define CUBEUV_TEXEL_HEIGHT "+S.texelHeight:"",S?"#define CUBEUV_MAX_MIP "+S.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==vr?"#define TONE_MAPPING":"",n.toneMapping!==vr?pt.tonemapping_pars_fragment:"",n.toneMapping!==vr?cM("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",pt.colorspace_pars_fragment,uM("linearToOutputTexel",n.outputColorSpace),fM(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Po).join(`
`)),f=Of(f),f=vm(f,n),f=_m(f,n),d=Of(d),d=vm(d,n),d=_m(d,n),f=xm(f),d=xm(d),n.isRawShaderMaterial!==!0&&(F=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,v=["#define varying in",n.glslVersion===Pp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Pp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const L=F+y+f,b=F+v+d,V=pm(a,a.VERTEX_SHADER,L),k=pm(a,a.FRAGMENT_SHADER,b);a.attachShader(A,V),a.attachShader(A,k),n.index0AttributeName!==void 0?a.bindAttribLocation(A,0,n.index0AttributeName):n.morphTargets===!0&&a.bindAttribLocation(A,0,"position"),a.linkProgram(A);function z(H){if(o.debug.checkShaderErrors){const Q=a.getProgramInfoLog(A)||"",se=a.getShaderInfoLog(V)||"",ue=a.getShaderInfoLog(k)||"",de=Q.trim(),oe=se.trim(),he=ue.trim();let B=!0,ce=!0;if(a.getProgramParameter(A,a.LINK_STATUS)===!1)if(B=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(a,A,V,k);else{const ae=gm(a,V,"vertex"),N=gm(a,k,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(A,a.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+de+`
`+ae+`
`+N)}else de!==""?console.warn("THREE.WebGLProgram: Program Info Log:",de):(oe===""||he==="")&&(ce=!1);ce&&(H.diagnostics={runnable:B,programLog:de,vertexShader:{log:oe,prefix:y},fragmentShader:{log:he,prefix:v}})}a.deleteShader(V),a.deleteShader(k),Y=new El(a,A),P=pM(a,A)}let Y;this.getUniforms=function(){return Y===void 0&&z(this),Y};let P;this.getAttributes=function(){return P===void 0&&z(this),P};let R=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=a.getProgramParameter(A,sM)),R},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(A),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=oM++,this.cacheKey=e,this.usedTimes=1,this.program=A,this.vertexShader=V,this.fragmentShader=k,this}let AM=0;class RM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,r=e.fragmentShader,a=this._getShaderStage(n),u=this._getShaderStage(r),f=this._getShaderCacheForMaterial(e);return f.has(a)===!1&&(f.add(a),a.usedTimes++),f.has(u)===!1&&(f.add(u),u.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new CM(e),n.set(e,r)),r}}class CM{constructor(e){this.id=AM++,this.code=e,this.usedTimes=0}}function bM(o,e,n,r,a,u,f){const d=new Bm,m=new RM,p=new Set,_=[],x=a.logarithmicDepthBuffer,S=a.vertexTextures;let M=a.precision;const w={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(P){return p.add(P),P===0?"uv":`uv${P}`}function y(P,R,H,Q,se){const ue=Q.fog,de=se.geometry,oe=P.isMeshStandardMaterial?Q.environment:null,he=(P.isMeshStandardMaterial?n:e).get(P.envMap||oe),B=he&&he.mapping===Pl?he.image.height:null,ce=w[P.type];P.precision!==null&&(M=a.getMaxPrecision(P.precision),M!==P.precision&&console.warn("THREE.WebGLProgram.getParameters:",P.precision,"not supported, using",M,"instead."));const ae=de.morphAttributes.position||de.morphAttributes.normal||de.morphAttributes.color,N=ae!==void 0?ae.length:0;let ie=0;de.morphAttributes.position!==void 0&&(ie=1),de.morphAttributes.normal!==void 0&&(ie=2),de.morphAttributes.color!==void 0&&(ie=3);let ke,Ge,He,J;if(ce){const St=vi[ce];ke=St.vertexShader,Ge=St.fragmentShader}else ke=P.vertexShader,Ge=P.fragmentShader,m.update(P),He=m.getVertexShaderID(P),J=m.getFragmentShaderID(P);const fe=o.getRenderTarget(),_e=o.state.buffers.depth.getReversed(),De=se.isInstancedMesh===!0,Ne=se.isBatchedMesh===!0,dt=!!P.map,Wt=!!P.matcap,U=!!he,At=!!P.aoMap,st=!!P.lightMap,Je=!!P.bumpMap,Ve=!!P.normalMap,_t=!!P.displacementMap,ze=!!P.emissiveMap,ot=!!P.metalnessMap,Pt=!!P.roughnessMap,Dt=P.anisotropy>0,C=P.clearcoat>0,g=P.dispersion>0,I=P.iridescence>0,$=P.sheen>0,le=P.transmission>0,Z=Dt&&!!P.anisotropyMap,Le=C&&!!P.clearcoatMap,ye=C&&!!P.clearcoatNormalMap,Ue=C&&!!P.clearcoatRoughnessMap,je=I&&!!P.iridescenceMap,Te=I&&!!P.iridescenceThicknessMap,Pe=$&&!!P.sheenColorMap,it=$&&!!P.sheenRoughnessMap,$e=!!P.specularMap,Re=!!P.specularColorMap,ct=!!P.specularIntensityMap,G=le&&!!P.transmissionMap,Me=le&&!!P.thicknessMap,Ae=!!P.gradientMap,Ie=!!P.alphaMap,Se=P.alphaTest>0,me=!!P.alphaHash,Ye=!!P.extensions;let ut=vr;P.toneMapped&&(fe===null||fe.isXRRenderTarget===!0)&&(ut=o.toneMapping);const Ct={shaderID:ce,shaderType:P.type,shaderName:P.name,vertexShader:ke,fragmentShader:Ge,defines:P.defines,customVertexShaderID:He,customFragmentShaderID:J,isRawShaderMaterial:P.isRawShaderMaterial===!0,glslVersion:P.glslVersion,precision:M,batching:Ne,batchingColor:Ne&&se._colorsTexture!==null,instancing:De,instancingColor:De&&se.instanceColor!==null,instancingMorph:De&&se.morphTexture!==null,supportsVertexTextures:S,outputColorSpace:fe===null?o.outputColorSpace:fe.isXRRenderTarget===!0?fe.texture.colorSpace:zs,alphaToCoverage:!!P.alphaToCoverage,map:dt,matcap:Wt,envMap:U,envMapMode:U&&he.mapping,envMapCubeUVHeight:B,aoMap:At,lightMap:st,bumpMap:Je,normalMap:Ve,displacementMap:S&&_t,emissiveMap:ze,normalMapObjectSpace:Ve&&P.normalMapType===T_,normalMapTangentSpace:Ve&&P.normalMapType===E_,metalnessMap:ot,roughnessMap:Pt,anisotropy:Dt,anisotropyMap:Z,clearcoat:C,clearcoatMap:Le,clearcoatNormalMap:ye,clearcoatRoughnessMap:Ue,dispersion:g,iridescence:I,iridescenceMap:je,iridescenceThicknessMap:Te,sheen:$,sheenColorMap:Pe,sheenRoughnessMap:it,specularMap:$e,specularColorMap:Re,specularIntensityMap:ct,transmission:le,transmissionMap:G,thicknessMap:Me,gradientMap:Ae,opaque:P.transparent===!1&&P.blending===Us&&P.alphaToCoverage===!1,alphaMap:Ie,alphaTest:Se,alphaHash:me,combine:P.combine,mapUv:dt&&A(P.map.channel),aoMapUv:At&&A(P.aoMap.channel),lightMapUv:st&&A(P.lightMap.channel),bumpMapUv:Je&&A(P.bumpMap.channel),normalMapUv:Ve&&A(P.normalMap.channel),displacementMapUv:_t&&A(P.displacementMap.channel),emissiveMapUv:ze&&A(P.emissiveMap.channel),metalnessMapUv:ot&&A(P.metalnessMap.channel),roughnessMapUv:Pt&&A(P.roughnessMap.channel),anisotropyMapUv:Z&&A(P.anisotropyMap.channel),clearcoatMapUv:Le&&A(P.clearcoatMap.channel),clearcoatNormalMapUv:ye&&A(P.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ue&&A(P.clearcoatRoughnessMap.channel),iridescenceMapUv:je&&A(P.iridescenceMap.channel),iridescenceThicknessMapUv:Te&&A(P.iridescenceThicknessMap.channel),sheenColorMapUv:Pe&&A(P.sheenColorMap.channel),sheenRoughnessMapUv:it&&A(P.sheenRoughnessMap.channel),specularMapUv:$e&&A(P.specularMap.channel),specularColorMapUv:Re&&A(P.specularColorMap.channel),specularIntensityMapUv:ct&&A(P.specularIntensityMap.channel),transmissionMapUv:G&&A(P.transmissionMap.channel),thicknessMapUv:Me&&A(P.thicknessMap.channel),alphaMapUv:Ie&&A(P.alphaMap.channel),vertexTangents:!!de.attributes.tangent&&(Ve||Dt),vertexColors:P.vertexColors,vertexAlphas:P.vertexColors===!0&&!!de.attributes.color&&de.attributes.color.itemSize===4,pointsUvs:se.isPoints===!0&&!!de.attributes.uv&&(dt||Ie),fog:!!ue,useFog:P.fog===!0,fogExp2:!!ue&&ue.isFogExp2,flatShading:P.flatShading===!0&&P.wireframe===!1,sizeAttenuation:P.sizeAttenuation===!0,logarithmicDepthBuffer:x,reversedDepthBuffer:_e,skinning:se.isSkinnedMesh===!0,morphTargets:de.morphAttributes.position!==void 0,morphNormals:de.morphAttributes.normal!==void 0,morphColors:de.morphAttributes.color!==void 0,morphTargetsCount:N,morphTextureStride:ie,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:P.dithering,shadowMapEnabled:o.shadowMap.enabled&&H.length>0,shadowMapType:o.shadowMap.type,toneMapping:ut,decodeVideoTexture:dt&&P.map.isVideoTexture===!0&&Tt.getTransfer(P.map.colorSpace)===Nt,decodeVideoTextureEmissive:ze&&P.emissiveMap.isVideoTexture===!0&&Tt.getTransfer(P.emissiveMap.colorSpace)===Nt,premultipliedAlpha:P.premultipliedAlpha,doubleSided:P.side===Fi,flipSided:P.side===Dn,useDepthPacking:P.depthPacking>=0,depthPacking:P.depthPacking||0,index0AttributeName:P.index0AttributeName,extensionClipCullDistance:Ye&&P.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ye&&P.extensions.multiDraw===!0||Ne)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:P.customProgramCacheKey()};return Ct.vertexUv1s=p.has(1),Ct.vertexUv2s=p.has(2),Ct.vertexUv3s=p.has(3),p.clear(),Ct}function v(P){const R=[];if(P.shaderID?R.push(P.shaderID):(R.push(P.customVertexShaderID),R.push(P.customFragmentShaderID)),P.defines!==void 0)for(const H in P.defines)R.push(H),R.push(P.defines[H]);return P.isRawShaderMaterial===!1&&(F(R,P),L(R,P),R.push(o.outputColorSpace)),R.push(P.customProgramCacheKey),R.join()}function F(P,R){P.push(R.precision),P.push(R.outputColorSpace),P.push(R.envMapMode),P.push(R.envMapCubeUVHeight),P.push(R.mapUv),P.push(R.alphaMapUv),P.push(R.lightMapUv),P.push(R.aoMapUv),P.push(R.bumpMapUv),P.push(R.normalMapUv),P.push(R.displacementMapUv),P.push(R.emissiveMapUv),P.push(R.metalnessMapUv),P.push(R.roughnessMapUv),P.push(R.anisotropyMapUv),P.push(R.clearcoatMapUv),P.push(R.clearcoatNormalMapUv),P.push(R.clearcoatRoughnessMapUv),P.push(R.iridescenceMapUv),P.push(R.iridescenceThicknessMapUv),P.push(R.sheenColorMapUv),P.push(R.sheenRoughnessMapUv),P.push(R.specularMapUv),P.push(R.specularColorMapUv),P.push(R.specularIntensityMapUv),P.push(R.transmissionMapUv),P.push(R.thicknessMapUv),P.push(R.combine),P.push(R.fogExp2),P.push(R.sizeAttenuation),P.push(R.morphTargetsCount),P.push(R.morphAttributeCount),P.push(R.numDirLights),P.push(R.numPointLights),P.push(R.numSpotLights),P.push(R.numSpotLightMaps),P.push(R.numHemiLights),P.push(R.numRectAreaLights),P.push(R.numDirLightShadows),P.push(R.numPointLightShadows),P.push(R.numSpotLightShadows),P.push(R.numSpotLightShadowsWithMaps),P.push(R.numLightProbes),P.push(R.shadowMapType),P.push(R.toneMapping),P.push(R.numClippingPlanes),P.push(R.numClipIntersection),P.push(R.depthPacking)}function L(P,R){d.disableAll(),R.supportsVertexTextures&&d.enable(0),R.instancing&&d.enable(1),R.instancingColor&&d.enable(2),R.instancingMorph&&d.enable(3),R.matcap&&d.enable(4),R.envMap&&d.enable(5),R.normalMapObjectSpace&&d.enable(6),R.normalMapTangentSpace&&d.enable(7),R.clearcoat&&d.enable(8),R.iridescence&&d.enable(9),R.alphaTest&&d.enable(10),R.vertexColors&&d.enable(11),R.vertexAlphas&&d.enable(12),R.vertexUv1s&&d.enable(13),R.vertexUv2s&&d.enable(14),R.vertexUv3s&&d.enable(15),R.vertexTangents&&d.enable(16),R.anisotropy&&d.enable(17),R.alphaHash&&d.enable(18),R.batching&&d.enable(19),R.dispersion&&d.enable(20),R.batchingColor&&d.enable(21),R.gradientMap&&d.enable(22),P.push(d.mask),d.disableAll(),R.fog&&d.enable(0),R.useFog&&d.enable(1),R.flatShading&&d.enable(2),R.logarithmicDepthBuffer&&d.enable(3),R.reversedDepthBuffer&&d.enable(4),R.skinning&&d.enable(5),R.morphTargets&&d.enable(6),R.morphNormals&&d.enable(7),R.morphColors&&d.enable(8),R.premultipliedAlpha&&d.enable(9),R.shadowMapEnabled&&d.enable(10),R.doubleSided&&d.enable(11),R.flipSided&&d.enable(12),R.useDepthPacking&&d.enable(13),R.dithering&&d.enable(14),R.transmission&&d.enable(15),R.sheen&&d.enable(16),R.opaque&&d.enable(17),R.pointsUvs&&d.enable(18),R.decodeVideoTexture&&d.enable(19),R.decodeVideoTextureEmissive&&d.enable(20),R.alphaToCoverage&&d.enable(21),P.push(d.mask)}function b(P){const R=w[P.type];let H;if(R){const Q=vi[R];H=J_.clone(Q.uniforms)}else H=P.uniforms;return H}function V(P,R){let H;for(let Q=0,se=_.length;Q<se;Q++){const ue=_[Q];if(ue.cacheKey===R){H=ue,++H.usedTimes;break}}return H===void 0&&(H=new wM(o,R,P,u),_.push(H)),H}function k(P){if(--P.usedTimes===0){const R=_.indexOf(P);_[R]=_[_.length-1],_.pop(),P.destroy()}}function z(P){m.remove(P)}function Y(){m.dispose()}return{getParameters:y,getProgramCacheKey:v,getUniforms:b,acquireProgram:V,releaseProgram:k,releaseShaderCache:z,programs:_,dispose:Y}}function PM(){let o=new WeakMap;function e(f){return o.has(f)}function n(f){let d=o.get(f);return d===void 0&&(d={},o.set(f,d)),d}function r(f){o.delete(f)}function a(f,d,m){o.get(f)[d]=m}function u(){o=new WeakMap}return{has:e,get:n,remove:r,update:a,dispose:u}}function DM(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function ym(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function Mm(){const o=[];let e=0;const n=[],r=[],a=[];function u(){e=0,n.length=0,r.length=0,a.length=0}function f(x,S,M,w,A,y){let v=o[e];return v===void 0?(v={id:x.id,object:x,geometry:S,material:M,groupOrder:w,renderOrder:x.renderOrder,z:A,group:y},o[e]=v):(v.id=x.id,v.object=x,v.geometry=S,v.material=M,v.groupOrder=w,v.renderOrder=x.renderOrder,v.z=A,v.group=y),e++,v}function d(x,S,M,w,A,y){const v=f(x,S,M,w,A,y);M.transmission>0?r.push(v):M.transparent===!0?a.push(v):n.push(v)}function m(x,S,M,w,A,y){const v=f(x,S,M,w,A,y);M.transmission>0?r.unshift(v):M.transparent===!0?a.unshift(v):n.unshift(v)}function p(x,S){n.length>1&&n.sort(x||DM),r.length>1&&r.sort(S||ym),a.length>1&&a.sort(S||ym)}function _(){for(let x=e,S=o.length;x<S;x++){const M=o[x];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:n,transmissive:r,transparent:a,init:u,push:d,unshift:m,finish:_,sort:p}}function LM(){let o=new WeakMap;function e(r,a){const u=o.get(r);let f;return u===void 0?(f=new Mm,o.set(r,[f])):a>=u.length?(f=new Mm,u.push(f)):f=u[a],f}function n(){o=new WeakMap}return{get:e,dispose:n}}function NM(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new te,color:new wt};break;case"SpotLight":n={position:new te,direction:new te,color:new wt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new te,color:new wt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new te,skyColor:new wt,groundColor:new wt};break;case"RectAreaLight":n={color:new wt,position:new te,halfWidth:new te,halfHeight:new te};break}return o[e.id]=n,n}}}function UM(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=n,n}}}let IM=0;function FM(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function OM(o){const e=new NM,n=UM(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new te);const a=new te,u=new $t,f=new $t;function d(p){let _=0,x=0,S=0;for(let P=0;P<9;P++)r.probe[P].set(0,0,0);let M=0,w=0,A=0,y=0,v=0,F=0,L=0,b=0,V=0,k=0,z=0;p.sort(FM);for(let P=0,R=p.length;P<R;P++){const H=p[P],Q=H.color,se=H.intensity,ue=H.distance,de=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)_+=Q.r*se,x+=Q.g*se,S+=Q.b*se;else if(H.isLightProbe){for(let oe=0;oe<9;oe++)r.probe[oe].addScaledVector(H.sh.coefficients[oe],se);z++}else if(H.isDirectionalLight){const oe=e.get(H);if(oe.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const he=H.shadow,B=n.get(H);B.shadowIntensity=he.intensity,B.shadowBias=he.bias,B.shadowNormalBias=he.normalBias,B.shadowRadius=he.radius,B.shadowMapSize=he.mapSize,r.directionalShadow[M]=B,r.directionalShadowMap[M]=de,r.directionalShadowMatrix[M]=H.shadow.matrix,F++}r.directional[M]=oe,M++}else if(H.isSpotLight){const oe=e.get(H);oe.position.setFromMatrixPosition(H.matrixWorld),oe.color.copy(Q).multiplyScalar(se),oe.distance=ue,oe.coneCos=Math.cos(H.angle),oe.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),oe.decay=H.decay,r.spot[A]=oe;const he=H.shadow;if(H.map&&(r.spotLightMap[V]=H.map,V++,he.updateMatrices(H),H.castShadow&&k++),r.spotLightMatrix[A]=he.matrix,H.castShadow){const B=n.get(H);B.shadowIntensity=he.intensity,B.shadowBias=he.bias,B.shadowNormalBias=he.normalBias,B.shadowRadius=he.radius,B.shadowMapSize=he.mapSize,r.spotShadow[A]=B,r.spotShadowMap[A]=de,b++}A++}else if(H.isRectAreaLight){const oe=e.get(H);oe.color.copy(Q).multiplyScalar(se),oe.halfWidth.set(H.width*.5,0,0),oe.halfHeight.set(0,H.height*.5,0),r.rectArea[y]=oe,y++}else if(H.isPointLight){const oe=e.get(H);if(oe.color.copy(H.color).multiplyScalar(H.intensity),oe.distance=H.distance,oe.decay=H.decay,H.castShadow){const he=H.shadow,B=n.get(H);B.shadowIntensity=he.intensity,B.shadowBias=he.bias,B.shadowNormalBias=he.normalBias,B.shadowRadius=he.radius,B.shadowMapSize=he.mapSize,B.shadowCameraNear=he.camera.near,B.shadowCameraFar=he.camera.far,r.pointShadow[w]=B,r.pointShadowMap[w]=de,r.pointShadowMatrix[w]=H.shadow.matrix,L++}r.point[w]=oe,w++}else if(H.isHemisphereLight){const oe=e.get(H);oe.skyColor.copy(H.color).multiplyScalar(se),oe.groundColor.copy(H.groundColor).multiplyScalar(se),r.hemi[v]=oe,v++}}y>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=be.LTC_FLOAT_1,r.rectAreaLTC2=be.LTC_FLOAT_2):(r.rectAreaLTC1=be.LTC_HALF_1,r.rectAreaLTC2=be.LTC_HALF_2)),r.ambient[0]=_,r.ambient[1]=x,r.ambient[2]=S;const Y=r.hash;(Y.directionalLength!==M||Y.pointLength!==w||Y.spotLength!==A||Y.rectAreaLength!==y||Y.hemiLength!==v||Y.numDirectionalShadows!==F||Y.numPointShadows!==L||Y.numSpotShadows!==b||Y.numSpotMaps!==V||Y.numLightProbes!==z)&&(r.directional.length=M,r.spot.length=A,r.rectArea.length=y,r.point.length=w,r.hemi.length=v,r.directionalShadow.length=F,r.directionalShadowMap.length=F,r.pointShadow.length=L,r.pointShadowMap.length=L,r.spotShadow.length=b,r.spotShadowMap.length=b,r.directionalShadowMatrix.length=F,r.pointShadowMatrix.length=L,r.spotLightMatrix.length=b+V-k,r.spotLightMap.length=V,r.numSpotLightShadowsWithMaps=k,r.numLightProbes=z,Y.directionalLength=M,Y.pointLength=w,Y.spotLength=A,Y.rectAreaLength=y,Y.hemiLength=v,Y.numDirectionalShadows=F,Y.numPointShadows=L,Y.numSpotShadows=b,Y.numSpotMaps=V,Y.numLightProbes=z,r.version=IM++)}function m(p,_){let x=0,S=0,M=0,w=0,A=0;const y=_.matrixWorldInverse;for(let v=0,F=p.length;v<F;v++){const L=p[v];if(L.isDirectionalLight){const b=r.directional[x];b.direction.setFromMatrixPosition(L.matrixWorld),a.setFromMatrixPosition(L.target.matrixWorld),b.direction.sub(a),b.direction.transformDirection(y),x++}else if(L.isSpotLight){const b=r.spot[M];b.position.setFromMatrixPosition(L.matrixWorld),b.position.applyMatrix4(y),b.direction.setFromMatrixPosition(L.matrixWorld),a.setFromMatrixPosition(L.target.matrixWorld),b.direction.sub(a),b.direction.transformDirection(y),M++}else if(L.isRectAreaLight){const b=r.rectArea[w];b.position.setFromMatrixPosition(L.matrixWorld),b.position.applyMatrix4(y),f.identity(),u.copy(L.matrixWorld),u.premultiply(y),f.extractRotation(u),b.halfWidth.set(L.width*.5,0,0),b.halfHeight.set(0,L.height*.5,0),b.halfWidth.applyMatrix4(f),b.halfHeight.applyMatrix4(f),w++}else if(L.isPointLight){const b=r.point[S];b.position.setFromMatrixPosition(L.matrixWorld),b.position.applyMatrix4(y),S++}else if(L.isHemisphereLight){const b=r.hemi[A];b.direction.setFromMatrixPosition(L.matrixWorld),b.direction.transformDirection(y),A++}}}return{setup:d,setupView:m,state:r}}function Em(o){const e=new OM(o),n=[],r=[];function a(_){p.camera=_,n.length=0,r.length=0}function u(_){n.push(_)}function f(_){r.push(_)}function d(){e.setup(n)}function m(_){e.setupView(n,_)}const p={lightsArray:n,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:p,setupLights:d,setupLightsView:m,pushLight:u,pushShadow:f}}function kM(o){let e=new WeakMap;function n(a,u=0){const f=e.get(a);let d;return f===void 0?(d=new Em(o),e.set(a,[d])):u>=f.length?(d=new Em(o),f.push(d)):d=f[u],d}function r(){e=new WeakMap}return{get:n,dispose:r}}const zM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,BM=`uniform sampler2D shadow_pass;
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
}`;function HM(o,e,n){let r=new Ym;const a=new ft,u=new ft,f=new Gt,d=new d0({depthPacking:M_}),m=new h0,p={},_=n.maxTextureSize,x={[_r]:Dn,[Dn]:_r,[Fi]:Fi},S=new Hi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ft},radius:{value:4}},vertexShader:zM,fragmentShader:BM}),M=S.clone();M.defines.HORIZONTAL_PASS=1;const w=new Vi;w.setAttribute("position",new di(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new Qn(w,S),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=wm;let v=this.type;this.render=function(k,z,Y){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||k.length===0)return;const P=o.getRenderTarget(),R=o.getActiveCubeFace(),H=o.getActiveMipmapLevel(),Q=o.state;Q.setBlending(gr),Q.buffers.depth.getReversed()===!0?Q.buffers.color.setClear(0,0,0,0):Q.buffers.color.setClear(1,1,1,1),Q.buffers.depth.setTest(!0),Q.setScissorTest(!1);const se=v!==Ii&&this.type===Ii,ue=v===Ii&&this.type!==Ii;for(let de=0,oe=k.length;de<oe;de++){const he=k[de],B=he.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",he,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;a.copy(B.mapSize);const ce=B.getFrameExtents();if(a.multiply(ce),u.copy(B.mapSize),(a.x>_||a.y>_)&&(a.x>_&&(u.x=Math.floor(_/ce.x),a.x=u.x*ce.x,B.mapSize.x=u.x),a.y>_&&(u.y=Math.floor(_/ce.y),a.y=u.y*ce.y,B.mapSize.y=u.y)),B.map===null||se===!0||ue===!0){const N=this.type!==Ii?{minFilter:Hn,magFilter:Hn}:{};B.map!==null&&B.map.dispose(),B.map=new xr(a.x,a.y,N),B.map.texture.name=he.name+".shadowMap",B.camera.updateProjectionMatrix()}o.setRenderTarget(B.map),o.clear();const ae=B.getViewportCount();for(let N=0;N<ae;N++){const ie=B.getViewport(N);f.set(u.x*ie.x,u.y*ie.y,u.x*ie.z,u.y*ie.w),Q.viewport(f),B.updateMatrices(he,N),r=B.getFrustum(),b(z,Y,B.camera,he,this.type)}B.isPointLightShadow!==!0&&this.type===Ii&&F(B,Y),B.needsUpdate=!1}v=this.type,y.needsUpdate=!1,o.setRenderTarget(P,R,H)};function F(k,z){const Y=e.update(A);S.defines.VSM_SAMPLES!==k.blurSamples&&(S.defines.VSM_SAMPLES=k.blurSamples,M.defines.VSM_SAMPLES=k.blurSamples,S.needsUpdate=!0,M.needsUpdate=!0),k.mapPass===null&&(k.mapPass=new xr(a.x,a.y)),S.uniforms.shadow_pass.value=k.map.texture,S.uniforms.resolution.value=k.mapSize,S.uniforms.radius.value=k.radius,o.setRenderTarget(k.mapPass),o.clear(),o.renderBufferDirect(z,null,Y,S,A,null),M.uniforms.shadow_pass.value=k.mapPass.texture,M.uniforms.resolution.value=k.mapSize,M.uniforms.radius.value=k.radius,o.setRenderTarget(k.map),o.clear(),o.renderBufferDirect(z,null,Y,M,A,null)}function L(k,z,Y,P){let R=null;const H=Y.isPointLight===!0?k.customDistanceMaterial:k.customDepthMaterial;if(H!==void 0)R=H;else if(R=Y.isPointLight===!0?m:d,o.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0||z.alphaToCoverage===!0){const Q=R.uuid,se=z.uuid;let ue=p[Q];ue===void 0&&(ue={},p[Q]=ue);let de=ue[se];de===void 0&&(de=R.clone(),ue[se]=de,z.addEventListener("dispose",V)),R=de}if(R.visible=z.visible,R.wireframe=z.wireframe,P===Ii?R.side=z.shadowSide!==null?z.shadowSide:z.side:R.side=z.shadowSide!==null?z.shadowSide:x[z.side],R.alphaMap=z.alphaMap,R.alphaTest=z.alphaToCoverage===!0?.5:z.alphaTest,R.map=z.map,R.clipShadows=z.clipShadows,R.clippingPlanes=z.clippingPlanes,R.clipIntersection=z.clipIntersection,R.displacementMap=z.displacementMap,R.displacementScale=z.displacementScale,R.displacementBias=z.displacementBias,R.wireframeLinewidth=z.wireframeLinewidth,R.linewidth=z.linewidth,Y.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const Q=o.properties.get(R);Q.light=Y}return R}function b(k,z,Y,P,R){if(k.visible===!1)return;if(k.layers.test(z.layers)&&(k.isMesh||k.isLine||k.isPoints)&&(k.castShadow||k.receiveShadow&&R===Ii)&&(!k.frustumCulled||r.intersectsObject(k))){k.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,k.matrixWorld);const se=e.update(k),ue=k.material;if(Array.isArray(ue)){const de=se.groups;for(let oe=0,he=de.length;oe<he;oe++){const B=de[oe],ce=ue[B.materialIndex];if(ce&&ce.visible){const ae=L(k,ce,P,R);k.onBeforeShadow(o,k,z,Y,se,ae,B),o.renderBufferDirect(Y,null,se,ae,k,B),k.onAfterShadow(o,k,z,Y,se,ae,B)}}}else if(ue.visible){const de=L(k,ue,P,R);k.onBeforeShadow(o,k,z,Y,se,de,null),o.renderBufferDirect(Y,null,se,de,k,null),k.onAfterShadow(o,k,z,Y,se,de,null)}}const Q=k.children;for(let se=0,ue=Q.length;se<ue;se++)b(Q[se],z,Y,P,R)}function V(k){k.target.removeEventListener("dispose",V);for(const Y in p){const P=p[Y],R=k.target.uuid;R in P&&(P[R].dispose(),delete P[R])}}}const VM={[Kc]:Zc,[Qc]:tf,[Jc]:nf,[Fs]:ef,[Zc]:Kc,[tf]:Qc,[nf]:Jc,[ef]:Fs};function GM(o,e){function n(){let G=!1;const Me=new Gt;let Ae=null;const Ie=new Gt(0,0,0,0);return{setMask:function(Se){Ae!==Se&&!G&&(o.colorMask(Se,Se,Se,Se),Ae=Se)},setLocked:function(Se){G=Se},setClear:function(Se,me,Ye,ut,Ct){Ct===!0&&(Se*=ut,me*=ut,Ye*=ut),Me.set(Se,me,Ye,ut),Ie.equals(Me)===!1&&(o.clearColor(Se,me,Ye,ut),Ie.copy(Me))},reset:function(){G=!1,Ae=null,Ie.set(-1,0,0,0)}}}function r(){let G=!1,Me=!1,Ae=null,Ie=null,Se=null;return{setReversed:function(me){if(Me!==me){const Ye=e.get("EXT_clip_control");me?Ye.clipControlEXT(Ye.LOWER_LEFT_EXT,Ye.ZERO_TO_ONE_EXT):Ye.clipControlEXT(Ye.LOWER_LEFT_EXT,Ye.NEGATIVE_ONE_TO_ONE_EXT),Me=me;const ut=Se;Se=null,this.setClear(ut)}},getReversed:function(){return Me},setTest:function(me){me?fe(o.DEPTH_TEST):_e(o.DEPTH_TEST)},setMask:function(me){Ae!==me&&!G&&(o.depthMask(me),Ae=me)},setFunc:function(me){if(Me&&(me=VM[me]),Ie!==me){switch(me){case Kc:o.depthFunc(o.NEVER);break;case Zc:o.depthFunc(o.ALWAYS);break;case Qc:o.depthFunc(o.LESS);break;case Fs:o.depthFunc(o.LEQUAL);break;case Jc:o.depthFunc(o.EQUAL);break;case ef:o.depthFunc(o.GEQUAL);break;case tf:o.depthFunc(o.GREATER);break;case nf:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Ie=me}},setLocked:function(me){G=me},setClear:function(me){Se!==me&&(Me&&(me=1-me),o.clearDepth(me),Se=me)},reset:function(){G=!1,Ae=null,Ie=null,Se=null,Me=!1}}}function a(){let G=!1,Me=null,Ae=null,Ie=null,Se=null,me=null,Ye=null,ut=null,Ct=null;return{setTest:function(St){G||(St?fe(o.STENCIL_TEST):_e(o.STENCIL_TEST))},setMask:function(St){Me!==St&&!G&&(o.stencilMask(St),Me=St)},setFunc:function(St,Vn,ln){(Ae!==St||Ie!==Vn||Se!==ln)&&(o.stencilFunc(St,Vn,ln),Ae=St,Ie=Vn,Se=ln)},setOp:function(St,Vn,ln){(me!==St||Ye!==Vn||ut!==ln)&&(o.stencilOp(St,Vn,ln),me=St,Ye=Vn,ut=ln)},setLocked:function(St){G=St},setClear:function(St){Ct!==St&&(o.clearStencil(St),Ct=St)},reset:function(){G=!1,Me=null,Ae=null,Ie=null,Se=null,me=null,Ye=null,ut=null,Ct=null}}}const u=new n,f=new r,d=new a,m=new WeakMap,p=new WeakMap;let _={},x={},S=new WeakMap,M=[],w=null,A=!1,y=null,v=null,F=null,L=null,b=null,V=null,k=null,z=new wt(0,0,0),Y=0,P=!1,R=null,H=null,Q=null,se=null,ue=null;const de=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let oe=!1,he=0;const B=o.getParameter(o.VERSION);B.indexOf("WebGL")!==-1?(he=parseFloat(/^WebGL (\d)/.exec(B)[1]),oe=he>=1):B.indexOf("OpenGL ES")!==-1&&(he=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),oe=he>=2);let ce=null,ae={};const N=o.getParameter(o.SCISSOR_BOX),ie=o.getParameter(o.VIEWPORT),ke=new Gt().fromArray(N),Ge=new Gt().fromArray(ie);function He(G,Me,Ae,Ie){const Se=new Uint8Array(4),me=o.createTexture();o.bindTexture(G,me),o.texParameteri(G,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(G,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Ye=0;Ye<Ae;Ye++)G===o.TEXTURE_3D||G===o.TEXTURE_2D_ARRAY?o.texImage3D(Me,0,o.RGBA,1,1,Ie,0,o.RGBA,o.UNSIGNED_BYTE,Se):o.texImage2D(Me+Ye,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Se);return me}const J={};J[o.TEXTURE_2D]=He(o.TEXTURE_2D,o.TEXTURE_2D,1),J[o.TEXTURE_CUBE_MAP]=He(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[o.TEXTURE_2D_ARRAY]=He(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),J[o.TEXTURE_3D]=He(o.TEXTURE_3D,o.TEXTURE_3D,1,1),u.setClear(0,0,0,1),f.setClear(1),d.setClear(0),fe(o.DEPTH_TEST),f.setFunc(Fs),Je(!1),Ve(wp),fe(o.CULL_FACE),At(gr);function fe(G){_[G]!==!0&&(o.enable(G),_[G]=!0)}function _e(G){_[G]!==!1&&(o.disable(G),_[G]=!1)}function De(G,Me){return x[G]!==Me?(o.bindFramebuffer(G,Me),x[G]=Me,G===o.DRAW_FRAMEBUFFER&&(x[o.FRAMEBUFFER]=Me),G===o.FRAMEBUFFER&&(x[o.DRAW_FRAMEBUFFER]=Me),!0):!1}function Ne(G,Me){let Ae=M,Ie=!1;if(G){Ae=S.get(Me),Ae===void 0&&(Ae=[],S.set(Me,Ae));const Se=G.textures;if(Ae.length!==Se.length||Ae[0]!==o.COLOR_ATTACHMENT0){for(let me=0,Ye=Se.length;me<Ye;me++)Ae[me]=o.COLOR_ATTACHMENT0+me;Ae.length=Se.length,Ie=!0}}else Ae[0]!==o.BACK&&(Ae[0]=o.BACK,Ie=!0);Ie&&o.drawBuffers(Ae)}function dt(G){return w!==G?(o.useProgram(G),w=G,!0):!1}const Wt={[Gr]:o.FUNC_ADD,[qv]:o.FUNC_SUBTRACT,[$v]:o.FUNC_REVERSE_SUBTRACT};Wt[Kv]=o.MIN,Wt[Zv]=o.MAX;const U={[Qv]:o.ZERO,[Jv]:o.ONE,[e_]:o.SRC_COLOR,[qc]:o.SRC_ALPHA,[o_]:o.SRC_ALPHA_SATURATE,[r_]:o.DST_COLOR,[n_]:o.DST_ALPHA,[t_]:o.ONE_MINUS_SRC_COLOR,[$c]:o.ONE_MINUS_SRC_ALPHA,[s_]:o.ONE_MINUS_DST_COLOR,[i_]:o.ONE_MINUS_DST_ALPHA,[a_]:o.CONSTANT_COLOR,[l_]:o.ONE_MINUS_CONSTANT_COLOR,[u_]:o.CONSTANT_ALPHA,[c_]:o.ONE_MINUS_CONSTANT_ALPHA};function At(G,Me,Ae,Ie,Se,me,Ye,ut,Ct,St){if(G===gr){A===!0&&(_e(o.BLEND),A=!1);return}if(A===!1&&(fe(o.BLEND),A=!0),G!==Yv){if(G!==y||St!==P){if((v!==Gr||b!==Gr)&&(o.blendEquation(o.FUNC_ADD),v=Gr,b=Gr),St)switch(G){case Us:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Yc:o.blendFunc(o.ONE,o.ONE);break;case Ap:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Rp:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case Us:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Yc:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case Ap:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Rp:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}F=null,L=null,V=null,k=null,z.set(0,0,0),Y=0,y=G,P=St}return}Se=Se||Me,me=me||Ae,Ye=Ye||Ie,(Me!==v||Se!==b)&&(o.blendEquationSeparate(Wt[Me],Wt[Se]),v=Me,b=Se),(Ae!==F||Ie!==L||me!==V||Ye!==k)&&(o.blendFuncSeparate(U[Ae],U[Ie],U[me],U[Ye]),F=Ae,L=Ie,V=me,k=Ye),(ut.equals(z)===!1||Ct!==Y)&&(o.blendColor(ut.r,ut.g,ut.b,Ct),z.copy(ut),Y=Ct),y=G,P=!1}function st(G,Me){G.side===Fi?_e(o.CULL_FACE):fe(o.CULL_FACE);let Ae=G.side===Dn;Me&&(Ae=!Ae),Je(Ae),G.blending===Us&&G.transparent===!1?At(gr):At(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),f.setFunc(G.depthFunc),f.setTest(G.depthTest),f.setMask(G.depthWrite),u.setMask(G.colorWrite);const Ie=G.stencilWrite;d.setTest(Ie),Ie&&(d.setMask(G.stencilWriteMask),d.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),d.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),ze(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?fe(o.SAMPLE_ALPHA_TO_COVERAGE):_e(o.SAMPLE_ALPHA_TO_COVERAGE)}function Je(G){R!==G&&(G?o.frontFace(o.CW):o.frontFace(o.CCW),R=G)}function Ve(G){G!==Wv?(fe(o.CULL_FACE),G!==H&&(G===wp?o.cullFace(o.BACK):G===Xv?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):_e(o.CULL_FACE),H=G}function _t(G){G!==Q&&(oe&&o.lineWidth(G),Q=G)}function ze(G,Me,Ae){G?(fe(o.POLYGON_OFFSET_FILL),(se!==Me||ue!==Ae)&&(o.polygonOffset(Me,Ae),se=Me,ue=Ae)):_e(o.POLYGON_OFFSET_FILL)}function ot(G){G?fe(o.SCISSOR_TEST):_e(o.SCISSOR_TEST)}function Pt(G){G===void 0&&(G=o.TEXTURE0+de-1),ce!==G&&(o.activeTexture(G),ce=G)}function Dt(G,Me,Ae){Ae===void 0&&(ce===null?Ae=o.TEXTURE0+de-1:Ae=ce);let Ie=ae[Ae];Ie===void 0&&(Ie={type:void 0,texture:void 0},ae[Ae]=Ie),(Ie.type!==G||Ie.texture!==Me)&&(ce!==Ae&&(o.activeTexture(Ae),ce=Ae),o.bindTexture(G,Me||J[G]),Ie.type=G,Ie.texture=Me)}function C(){const G=ae[ce];G!==void 0&&G.type!==void 0&&(o.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function g(){try{o.compressedTexImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function I(){try{o.compressedTexImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function $(){try{o.texSubImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function le(){try{o.texSubImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Z(){try{o.compressedTexSubImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Le(){try{o.compressedTexSubImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ye(){try{o.texStorage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ue(){try{o.texStorage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function je(){try{o.texImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Te(){try{o.texImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Pe(G){ke.equals(G)===!1&&(o.scissor(G.x,G.y,G.z,G.w),ke.copy(G))}function it(G){Ge.equals(G)===!1&&(o.viewport(G.x,G.y,G.z,G.w),Ge.copy(G))}function $e(G,Me){let Ae=p.get(Me);Ae===void 0&&(Ae=new WeakMap,p.set(Me,Ae));let Ie=Ae.get(G);Ie===void 0&&(Ie=o.getUniformBlockIndex(Me,G.name),Ae.set(G,Ie))}function Re(G,Me){const Ie=p.get(Me).get(G);m.get(Me)!==Ie&&(o.uniformBlockBinding(Me,Ie,G.__bindingPointIndex),m.set(Me,Ie))}function ct(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),f.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),_={},ce=null,ae={},x={},S=new WeakMap,M=[],w=null,A=!1,y=null,v=null,F=null,L=null,b=null,V=null,k=null,z=new wt(0,0,0),Y=0,P=!1,R=null,H=null,Q=null,se=null,ue=null,ke.set(0,0,o.canvas.width,o.canvas.height),Ge.set(0,0,o.canvas.width,o.canvas.height),u.reset(),f.reset(),d.reset()}return{buffers:{color:u,depth:f,stencil:d},enable:fe,disable:_e,bindFramebuffer:De,drawBuffers:Ne,useProgram:dt,setBlending:At,setMaterial:st,setFlipSided:Je,setCullFace:Ve,setLineWidth:_t,setPolygonOffset:ze,setScissorTest:ot,activeTexture:Pt,bindTexture:Dt,unbindTexture:C,compressedTexImage2D:g,compressedTexImage3D:I,texImage2D:je,texImage3D:Te,updateUBOMapping:$e,uniformBlockBinding:Re,texStorage2D:ye,texStorage3D:Ue,texSubImage2D:$,texSubImage3D:le,compressedTexSubImage2D:Z,compressedTexSubImage3D:Le,scissor:Pe,viewport:it,reset:ct}}function WM(o,e,n,r,a,u,f){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new ft,_=new WeakMap;let x;const S=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(C,g){return M?new OffscreenCanvas(C,g):Al("canvas")}function A(C,g,I){let $=1;const le=Dt(C);if((le.width>I||le.height>I)&&($=I/Math.max(le.width,le.height)),$<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const Z=Math.floor($*le.width),Le=Math.floor($*le.height);x===void 0&&(x=w(Z,Le));const ye=g?w(Z,Le):x;return ye.width=Z,ye.height=Le,ye.getContext("2d").drawImage(C,0,0,Z,Le),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+le.width+"x"+le.height+") to ("+Z+"x"+Le+")."),ye}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+le.width+"x"+le.height+")."),C;return C}function y(C){return C.generateMipmaps}function v(C){o.generateMipmap(C)}function F(C){return C.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?o.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function L(C,g,I,$,le=!1){if(C!==null){if(o[C]!==void 0)return o[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let Z=g;if(g===o.RED&&(I===o.FLOAT&&(Z=o.R32F),I===o.HALF_FLOAT&&(Z=o.R16F),I===o.UNSIGNED_BYTE&&(Z=o.R8)),g===o.RED_INTEGER&&(I===o.UNSIGNED_BYTE&&(Z=o.R8UI),I===o.UNSIGNED_SHORT&&(Z=o.R16UI),I===o.UNSIGNED_INT&&(Z=o.R32UI),I===o.BYTE&&(Z=o.R8I),I===o.SHORT&&(Z=o.R16I),I===o.INT&&(Z=o.R32I)),g===o.RG&&(I===o.FLOAT&&(Z=o.RG32F),I===o.HALF_FLOAT&&(Z=o.RG16F),I===o.UNSIGNED_BYTE&&(Z=o.RG8)),g===o.RG_INTEGER&&(I===o.UNSIGNED_BYTE&&(Z=o.RG8UI),I===o.UNSIGNED_SHORT&&(Z=o.RG16UI),I===o.UNSIGNED_INT&&(Z=o.RG32UI),I===o.BYTE&&(Z=o.RG8I),I===o.SHORT&&(Z=o.RG16I),I===o.INT&&(Z=o.RG32I)),g===o.RGB_INTEGER&&(I===o.UNSIGNED_BYTE&&(Z=o.RGB8UI),I===o.UNSIGNED_SHORT&&(Z=o.RGB16UI),I===o.UNSIGNED_INT&&(Z=o.RGB32UI),I===o.BYTE&&(Z=o.RGB8I),I===o.SHORT&&(Z=o.RGB16I),I===o.INT&&(Z=o.RGB32I)),g===o.RGBA_INTEGER&&(I===o.UNSIGNED_BYTE&&(Z=o.RGBA8UI),I===o.UNSIGNED_SHORT&&(Z=o.RGBA16UI),I===o.UNSIGNED_INT&&(Z=o.RGBA32UI),I===o.BYTE&&(Z=o.RGBA8I),I===o.SHORT&&(Z=o.RGBA16I),I===o.INT&&(Z=o.RGBA32I)),g===o.RGB&&(I===o.UNSIGNED_INT_5_9_9_9_REV&&(Z=o.RGB9_E5),I===o.UNSIGNED_INT_10F_11F_11F_REV&&(Z=o.R11F_G11F_B10F)),g===o.RGBA){const Le=le?Tl:Tt.getTransfer($);I===o.FLOAT&&(Z=o.RGBA32F),I===o.HALF_FLOAT&&(Z=o.RGBA16F),I===o.UNSIGNED_BYTE&&(Z=Le===Nt?o.SRGB8_ALPHA8:o.RGBA8),I===o.UNSIGNED_SHORT_4_4_4_4&&(Z=o.RGBA4),I===o.UNSIGNED_SHORT_5_5_5_1&&(Z=o.RGB5_A1)}return(Z===o.R16F||Z===o.R32F||Z===o.RG16F||Z===o.RG32F||Z===o.RGBA16F||Z===o.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function b(C,g){let I;return C?g===null||g===Yr||g===Lo?I=o.DEPTH24_STENCIL8:g===_i?I=o.DEPTH32F_STENCIL8:g===Do&&(I=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===Yr||g===Lo?I=o.DEPTH_COMPONENT24:g===_i?I=o.DEPTH_COMPONENT32F:g===Do&&(I=o.DEPTH_COMPONENT16),I}function V(C,g){return y(C)===!0||C.isFramebufferTexture&&C.minFilter!==Hn&&C.minFilter!==Pn?Math.log2(Math.max(g.width,g.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?g.mipmaps.length:1}function k(C){const g=C.target;g.removeEventListener("dispose",k),Y(g),g.isVideoTexture&&_.delete(g)}function z(C){const g=C.target;g.removeEventListener("dispose",z),R(g)}function Y(C){const g=r.get(C);if(g.__webglInit===void 0)return;const I=C.source,$=S.get(I);if($){const le=$[g.__cacheKey];le.usedTimes--,le.usedTimes===0&&P(C),Object.keys($).length===0&&S.delete(I)}r.remove(C)}function P(C){const g=r.get(C);o.deleteTexture(g.__webglTexture);const I=C.source,$=S.get(I);delete $[g.__cacheKey],f.memory.textures--}function R(C){const g=r.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),r.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(g.__webglFramebuffer[$]))for(let le=0;le<g.__webglFramebuffer[$].length;le++)o.deleteFramebuffer(g.__webglFramebuffer[$][le]);else o.deleteFramebuffer(g.__webglFramebuffer[$]);g.__webglDepthbuffer&&o.deleteRenderbuffer(g.__webglDepthbuffer[$])}else{if(Array.isArray(g.__webglFramebuffer))for(let $=0;$<g.__webglFramebuffer.length;$++)o.deleteFramebuffer(g.__webglFramebuffer[$]);else o.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&o.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&o.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let $=0;$<g.__webglColorRenderbuffer.length;$++)g.__webglColorRenderbuffer[$]&&o.deleteRenderbuffer(g.__webglColorRenderbuffer[$]);g.__webglDepthRenderbuffer&&o.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const I=C.textures;for(let $=0,le=I.length;$<le;$++){const Z=r.get(I[$]);Z.__webglTexture&&(o.deleteTexture(Z.__webglTexture),f.memory.textures--),r.remove(I[$])}r.remove(C)}let H=0;function Q(){H=0}function se(){const C=H;return C>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+a.maxTextures),H+=1,C}function ue(C){const g=[];return g.push(C.wrapS),g.push(C.wrapT),g.push(C.wrapR||0),g.push(C.magFilter),g.push(C.minFilter),g.push(C.anisotropy),g.push(C.internalFormat),g.push(C.format),g.push(C.type),g.push(C.generateMipmaps),g.push(C.premultiplyAlpha),g.push(C.flipY),g.push(C.unpackAlignment),g.push(C.colorSpace),g.join()}function de(C,g){const I=r.get(C);if(C.isVideoTexture&&ot(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&I.__version!==C.version){const $=C.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(I,C,g);return}}else C.isExternalTexture&&(I.__webglTexture=C.sourceTexture?C.sourceTexture:null);n.bindTexture(o.TEXTURE_2D,I.__webglTexture,o.TEXTURE0+g)}function oe(C,g){const I=r.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&I.__version!==C.version){J(I,C,g);return}n.bindTexture(o.TEXTURE_2D_ARRAY,I.__webglTexture,o.TEXTURE0+g)}function he(C,g){const I=r.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&I.__version!==C.version){J(I,C,g);return}n.bindTexture(o.TEXTURE_3D,I.__webglTexture,o.TEXTURE0+g)}function B(C,g){const I=r.get(C);if(C.version>0&&I.__version!==C.version){fe(I,C,g);return}n.bindTexture(o.TEXTURE_CUBE_MAP,I.__webglTexture,o.TEXTURE0+g)}const ce={[of]:o.REPEAT,[fi]:o.CLAMP_TO_EDGE,[af]:o.MIRRORED_REPEAT},ae={[Hn]:o.NEAREST,[S_]:o.NEAREST_MIPMAP_NEAREST,[qa]:o.NEAREST_MIPMAP_LINEAR,[Pn]:o.LINEAR,[mc]:o.LINEAR_MIPMAP_NEAREST,[Xr]:o.LINEAR_MIPMAP_LINEAR},N={[w_]:o.NEVER,[D_]:o.ALWAYS,[A_]:o.LESS,[Fm]:o.LEQUAL,[R_]:o.EQUAL,[P_]:o.GEQUAL,[C_]:o.GREATER,[b_]:o.NOTEQUAL};function ie(C,g){if(g.type===_i&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===Pn||g.magFilter===mc||g.magFilter===qa||g.magFilter===Xr||g.minFilter===Pn||g.minFilter===mc||g.minFilter===qa||g.minFilter===Xr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(C,o.TEXTURE_WRAP_S,ce[g.wrapS]),o.texParameteri(C,o.TEXTURE_WRAP_T,ce[g.wrapT]),(C===o.TEXTURE_3D||C===o.TEXTURE_2D_ARRAY)&&o.texParameteri(C,o.TEXTURE_WRAP_R,ce[g.wrapR]),o.texParameteri(C,o.TEXTURE_MAG_FILTER,ae[g.magFilter]),o.texParameteri(C,o.TEXTURE_MIN_FILTER,ae[g.minFilter]),g.compareFunction&&(o.texParameteri(C,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(C,o.TEXTURE_COMPARE_FUNC,N[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===Hn||g.minFilter!==qa&&g.minFilter!==Xr||g.type===_i&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||r.get(g).__currentAnisotropy){const I=e.get("EXT_texture_filter_anisotropic");o.texParameterf(C,I.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,a.getMaxAnisotropy())),r.get(g).__currentAnisotropy=g.anisotropy}}}function ke(C,g){let I=!1;C.__webglInit===void 0&&(C.__webglInit=!0,g.addEventListener("dispose",k));const $=g.source;let le=S.get($);le===void 0&&(le={},S.set($,le));const Z=ue(g);if(Z!==C.__cacheKey){le[Z]===void 0&&(le[Z]={texture:o.createTexture(),usedTimes:0},f.memory.textures++,I=!0),le[Z].usedTimes++;const Le=le[C.__cacheKey];Le!==void 0&&(le[C.__cacheKey].usedTimes--,Le.usedTimes===0&&P(g)),C.__cacheKey=Z,C.__webglTexture=le[Z].texture}return I}function Ge(C,g,I){return Math.floor(Math.floor(C/I)/g)}function He(C,g,I,$){const Z=C.updateRanges;if(Z.length===0)n.texSubImage2D(o.TEXTURE_2D,0,0,0,g.width,g.height,I,$,g.data);else{Z.sort((Te,Pe)=>Te.start-Pe.start);let Le=0;for(let Te=1;Te<Z.length;Te++){const Pe=Z[Le],it=Z[Te],$e=Pe.start+Pe.count,Re=Ge(it.start,g.width,4),ct=Ge(Pe.start,g.width,4);it.start<=$e+1&&Re===ct&&Ge(it.start+it.count-1,g.width,4)===Re?Pe.count=Math.max(Pe.count,it.start+it.count-Pe.start):(++Le,Z[Le]=it)}Z.length=Le+1;const ye=o.getParameter(o.UNPACK_ROW_LENGTH),Ue=o.getParameter(o.UNPACK_SKIP_PIXELS),je=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,g.width);for(let Te=0,Pe=Z.length;Te<Pe;Te++){const it=Z[Te],$e=Math.floor(it.start/4),Re=Math.ceil(it.count/4),ct=$e%g.width,G=Math.floor($e/g.width),Me=Re,Ae=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,ct),o.pixelStorei(o.UNPACK_SKIP_ROWS,G),n.texSubImage2D(o.TEXTURE_2D,0,ct,G,Me,Ae,I,$,g.data)}C.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,ye),o.pixelStorei(o.UNPACK_SKIP_PIXELS,Ue),o.pixelStorei(o.UNPACK_SKIP_ROWS,je)}}function J(C,g,I){let $=o.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&($=o.TEXTURE_2D_ARRAY),g.isData3DTexture&&($=o.TEXTURE_3D);const le=ke(C,g),Z=g.source;n.bindTexture($,C.__webglTexture,o.TEXTURE0+I);const Le=r.get(Z);if(Z.version!==Le.__version||le===!0){n.activeTexture(o.TEXTURE0+I);const ye=Tt.getPrimaries(Tt.workingColorSpace),Ue=g.colorSpace===mr?null:Tt.getPrimaries(g.colorSpace),je=g.colorSpace===mr||ye===Ue?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,g.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,g.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,je);let Te=A(g.image,!1,a.maxTextureSize);Te=Pt(g,Te);const Pe=u.convert(g.format,g.colorSpace),it=u.convert(g.type);let $e=L(g.internalFormat,Pe,it,g.colorSpace,g.isVideoTexture);ie($,g);let Re;const ct=g.mipmaps,G=g.isVideoTexture!==!0,Me=Le.__version===void 0||le===!0,Ae=Z.dataReady,Ie=V(g,Te);if(g.isDepthTexture)$e=b(g.format===Uo,g.type),Me&&(G?n.texStorage2D(o.TEXTURE_2D,1,$e,Te.width,Te.height):n.texImage2D(o.TEXTURE_2D,0,$e,Te.width,Te.height,0,Pe,it,null));else if(g.isDataTexture)if(ct.length>0){G&&Me&&n.texStorage2D(o.TEXTURE_2D,Ie,$e,ct[0].width,ct[0].height);for(let Se=0,me=ct.length;Se<me;Se++)Re=ct[Se],G?Ae&&n.texSubImage2D(o.TEXTURE_2D,Se,0,0,Re.width,Re.height,Pe,it,Re.data):n.texImage2D(o.TEXTURE_2D,Se,$e,Re.width,Re.height,0,Pe,it,Re.data);g.generateMipmaps=!1}else G?(Me&&n.texStorage2D(o.TEXTURE_2D,Ie,$e,Te.width,Te.height),Ae&&He(g,Te,Pe,it)):n.texImage2D(o.TEXTURE_2D,0,$e,Te.width,Te.height,0,Pe,it,Te.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){G&&Me&&n.texStorage3D(o.TEXTURE_2D_ARRAY,Ie,$e,ct[0].width,ct[0].height,Te.depth);for(let Se=0,me=ct.length;Se<me;Se++)if(Re=ct[Se],g.format!==Zn)if(Pe!==null)if(G){if(Ae)if(g.layerUpdates.size>0){const Ye=Jp(Re.width,Re.height,g.format,g.type);for(const ut of g.layerUpdates){const Ct=Re.data.subarray(ut*Ye/Re.data.BYTES_PER_ELEMENT,(ut+1)*Ye/Re.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Se,0,0,ut,Re.width,Re.height,1,Pe,Ct)}g.clearLayerUpdates()}else n.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Se,0,0,0,Re.width,Re.height,Te.depth,Pe,Re.data)}else n.compressedTexImage3D(o.TEXTURE_2D_ARRAY,Se,$e,Re.width,Re.height,Te.depth,0,Re.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else G?Ae&&n.texSubImage3D(o.TEXTURE_2D_ARRAY,Se,0,0,0,Re.width,Re.height,Te.depth,Pe,it,Re.data):n.texImage3D(o.TEXTURE_2D_ARRAY,Se,$e,Re.width,Re.height,Te.depth,0,Pe,it,Re.data)}else{G&&Me&&n.texStorage2D(o.TEXTURE_2D,Ie,$e,ct[0].width,ct[0].height);for(let Se=0,me=ct.length;Se<me;Se++)Re=ct[Se],g.format!==Zn?Pe!==null?G?Ae&&n.compressedTexSubImage2D(o.TEXTURE_2D,Se,0,0,Re.width,Re.height,Pe,Re.data):n.compressedTexImage2D(o.TEXTURE_2D,Se,$e,Re.width,Re.height,0,Re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):G?Ae&&n.texSubImage2D(o.TEXTURE_2D,Se,0,0,Re.width,Re.height,Pe,it,Re.data):n.texImage2D(o.TEXTURE_2D,Se,$e,Re.width,Re.height,0,Pe,it,Re.data)}else if(g.isDataArrayTexture)if(G){if(Me&&n.texStorage3D(o.TEXTURE_2D_ARRAY,Ie,$e,Te.width,Te.height,Te.depth),Ae)if(g.layerUpdates.size>0){const Se=Jp(Te.width,Te.height,g.format,g.type);for(const me of g.layerUpdates){const Ye=Te.data.subarray(me*Se/Te.data.BYTES_PER_ELEMENT,(me+1)*Se/Te.data.BYTES_PER_ELEMENT);n.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,me,Te.width,Te.height,1,Pe,it,Ye)}g.clearLayerUpdates()}else n.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Te.width,Te.height,Te.depth,Pe,it,Te.data)}else n.texImage3D(o.TEXTURE_2D_ARRAY,0,$e,Te.width,Te.height,Te.depth,0,Pe,it,Te.data);else if(g.isData3DTexture)G?(Me&&n.texStorage3D(o.TEXTURE_3D,Ie,$e,Te.width,Te.height,Te.depth),Ae&&n.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Te.width,Te.height,Te.depth,Pe,it,Te.data)):n.texImage3D(o.TEXTURE_3D,0,$e,Te.width,Te.height,Te.depth,0,Pe,it,Te.data);else if(g.isFramebufferTexture){if(Me)if(G)n.texStorage2D(o.TEXTURE_2D,Ie,$e,Te.width,Te.height);else{let Se=Te.width,me=Te.height;for(let Ye=0;Ye<Ie;Ye++)n.texImage2D(o.TEXTURE_2D,Ye,$e,Se,me,0,Pe,it,null),Se>>=1,me>>=1}}else if(ct.length>0){if(G&&Me){const Se=Dt(ct[0]);n.texStorage2D(o.TEXTURE_2D,Ie,$e,Se.width,Se.height)}for(let Se=0,me=ct.length;Se<me;Se++)Re=ct[Se],G?Ae&&n.texSubImage2D(o.TEXTURE_2D,Se,0,0,Pe,it,Re):n.texImage2D(o.TEXTURE_2D,Se,$e,Pe,it,Re);g.generateMipmaps=!1}else if(G){if(Me){const Se=Dt(Te);n.texStorage2D(o.TEXTURE_2D,Ie,$e,Se.width,Se.height)}Ae&&n.texSubImage2D(o.TEXTURE_2D,0,0,0,Pe,it,Te)}else n.texImage2D(o.TEXTURE_2D,0,$e,Pe,it,Te);y(g)&&v($),Le.__version=Z.version,g.onUpdate&&g.onUpdate(g)}C.__version=g.version}function fe(C,g,I){if(g.image.length!==6)return;const $=ke(C,g),le=g.source;n.bindTexture(o.TEXTURE_CUBE_MAP,C.__webglTexture,o.TEXTURE0+I);const Z=r.get(le);if(le.version!==Z.__version||$===!0){n.activeTexture(o.TEXTURE0+I);const Le=Tt.getPrimaries(Tt.workingColorSpace),ye=g.colorSpace===mr?null:Tt.getPrimaries(g.colorSpace),Ue=g.colorSpace===mr||Le===ye?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,g.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,g.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue);const je=g.isCompressedTexture||g.image[0].isCompressedTexture,Te=g.image[0]&&g.image[0].isDataTexture,Pe=[];for(let me=0;me<6;me++)!je&&!Te?Pe[me]=A(g.image[me],!0,a.maxCubemapSize):Pe[me]=Te?g.image[me].image:g.image[me],Pe[me]=Pt(g,Pe[me]);const it=Pe[0],$e=u.convert(g.format,g.colorSpace),Re=u.convert(g.type),ct=L(g.internalFormat,$e,Re,g.colorSpace),G=g.isVideoTexture!==!0,Me=Z.__version===void 0||$===!0,Ae=le.dataReady;let Ie=V(g,it);ie(o.TEXTURE_CUBE_MAP,g);let Se;if(je){G&&Me&&n.texStorage2D(o.TEXTURE_CUBE_MAP,Ie,ct,it.width,it.height);for(let me=0;me<6;me++){Se=Pe[me].mipmaps;for(let Ye=0;Ye<Se.length;Ye++){const ut=Se[Ye];g.format!==Zn?$e!==null?G?Ae&&n.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ye,0,0,ut.width,ut.height,$e,ut.data):n.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ye,ct,ut.width,ut.height,0,ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):G?Ae&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ye,0,0,ut.width,ut.height,$e,Re,ut.data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ye,ct,ut.width,ut.height,0,$e,Re,ut.data)}}}else{if(Se=g.mipmaps,G&&Me){Se.length>0&&Ie++;const me=Dt(Pe[0]);n.texStorage2D(o.TEXTURE_CUBE_MAP,Ie,ct,me.width,me.height)}for(let me=0;me<6;me++)if(Te){G?Ae&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,Pe[me].width,Pe[me].height,$e,Re,Pe[me].data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,ct,Pe[me].width,Pe[me].height,0,$e,Re,Pe[me].data);for(let Ye=0;Ye<Se.length;Ye++){const Ct=Se[Ye].image[me].image;G?Ae&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ye+1,0,0,Ct.width,Ct.height,$e,Re,Ct.data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ye+1,ct,Ct.width,Ct.height,0,$e,Re,Ct.data)}}else{G?Ae&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,$e,Re,Pe[me]):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,ct,$e,Re,Pe[me]);for(let Ye=0;Ye<Se.length;Ye++){const ut=Se[Ye];G?Ae&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ye+1,0,0,$e,Re,ut.image[me]):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ye+1,ct,$e,Re,ut.image[me])}}}y(g)&&v(o.TEXTURE_CUBE_MAP),Z.__version=le.version,g.onUpdate&&g.onUpdate(g)}C.__version=g.version}function _e(C,g,I,$,le,Z){const Le=u.convert(I.format,I.colorSpace),ye=u.convert(I.type),Ue=L(I.internalFormat,Le,ye,I.colorSpace),je=r.get(g),Te=r.get(I);if(Te.__renderTarget=g,!je.__hasExternalTextures){const Pe=Math.max(1,g.width>>Z),it=Math.max(1,g.height>>Z);le===o.TEXTURE_3D||le===o.TEXTURE_2D_ARRAY?n.texImage3D(le,Z,Ue,Pe,it,g.depth,0,Le,ye,null):n.texImage2D(le,Z,Ue,Pe,it,0,Le,ye,null)}n.bindFramebuffer(o.FRAMEBUFFER,C),ze(g)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,$,le,Te.__webglTexture,0,_t(g)):(le===o.TEXTURE_2D||le>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&le<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,$,le,Te.__webglTexture,Z),n.bindFramebuffer(o.FRAMEBUFFER,null)}function De(C,g,I){if(o.bindRenderbuffer(o.RENDERBUFFER,C),g.depthBuffer){const $=g.depthTexture,le=$&&$.isDepthTexture?$.type:null,Z=b(g.stencilBuffer,le),Le=g.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ye=_t(g);ze(g)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,ye,Z,g.width,g.height):I?o.renderbufferStorageMultisample(o.RENDERBUFFER,ye,Z,g.width,g.height):o.renderbufferStorage(o.RENDERBUFFER,Z,g.width,g.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Le,o.RENDERBUFFER,C)}else{const $=g.textures;for(let le=0;le<$.length;le++){const Z=$[le],Le=u.convert(Z.format,Z.colorSpace),ye=u.convert(Z.type),Ue=L(Z.internalFormat,Le,ye,Z.colorSpace),je=_t(g);I&&ze(g)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,je,Ue,g.width,g.height):ze(g)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,je,Ue,g.width,g.height):o.renderbufferStorage(o.RENDERBUFFER,Ue,g.width,g.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Ne(C,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(o.FRAMEBUFFER,C),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const $=r.get(g.depthTexture);$.__renderTarget=g,(!$.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),de(g.depthTexture,0);const le=$.__webglTexture,Z=_t(g);if(g.depthTexture.format===No)ze(g)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,le,0,Z):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,le,0);else if(g.depthTexture.format===Uo)ze(g)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,le,0,Z):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,le,0);else throw new Error("Unknown depthTexture format")}function dt(C){const g=r.get(C),I=C.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==C.depthTexture){const $=C.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),$){const le=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,$.removeEventListener("dispose",le)};$.addEventListener("dispose",le),g.__depthDisposeCallback=le}g.__boundDepthTexture=$}if(C.depthTexture&&!g.__autoAllocateDepthBuffer){if(I)throw new Error("target.depthTexture not supported in Cube render targets");const $=C.texture.mipmaps;$&&$.length>0?Ne(g.__webglFramebuffer[0],C):Ne(g.__webglFramebuffer,C)}else if(I){g.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(n.bindFramebuffer(o.FRAMEBUFFER,g.__webglFramebuffer[$]),g.__webglDepthbuffer[$]===void 0)g.__webglDepthbuffer[$]=o.createRenderbuffer(),De(g.__webglDepthbuffer[$],C,!1);else{const le=C.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Z=g.__webglDepthbuffer[$];o.bindRenderbuffer(o.RENDERBUFFER,Z),o.framebufferRenderbuffer(o.FRAMEBUFFER,le,o.RENDERBUFFER,Z)}}else{const $=C.texture.mipmaps;if($&&$.length>0?n.bindFramebuffer(o.FRAMEBUFFER,g.__webglFramebuffer[0]):n.bindFramebuffer(o.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=o.createRenderbuffer(),De(g.__webglDepthbuffer,C,!1);else{const le=C.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Z=g.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,Z),o.framebufferRenderbuffer(o.FRAMEBUFFER,le,o.RENDERBUFFER,Z)}}n.bindFramebuffer(o.FRAMEBUFFER,null)}function Wt(C,g,I){const $=r.get(C);g!==void 0&&_e($.__webglFramebuffer,C,C.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),I!==void 0&&dt(C)}function U(C){const g=C.texture,I=r.get(C),$=r.get(g);C.addEventListener("dispose",z);const le=C.textures,Z=C.isWebGLCubeRenderTarget===!0,Le=le.length>1;if(Le||($.__webglTexture===void 0&&($.__webglTexture=o.createTexture()),$.__version=g.version,f.memory.textures++),Z){I.__webglFramebuffer=[];for(let ye=0;ye<6;ye++)if(g.mipmaps&&g.mipmaps.length>0){I.__webglFramebuffer[ye]=[];for(let Ue=0;Ue<g.mipmaps.length;Ue++)I.__webglFramebuffer[ye][Ue]=o.createFramebuffer()}else I.__webglFramebuffer[ye]=o.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){I.__webglFramebuffer=[];for(let ye=0;ye<g.mipmaps.length;ye++)I.__webglFramebuffer[ye]=o.createFramebuffer()}else I.__webglFramebuffer=o.createFramebuffer();if(Le)for(let ye=0,Ue=le.length;ye<Ue;ye++){const je=r.get(le[ye]);je.__webglTexture===void 0&&(je.__webglTexture=o.createTexture(),f.memory.textures++)}if(C.samples>0&&ze(C)===!1){I.__webglMultisampledFramebuffer=o.createFramebuffer(),I.__webglColorRenderbuffer=[],n.bindFramebuffer(o.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let ye=0;ye<le.length;ye++){const Ue=le[ye];I.__webglColorRenderbuffer[ye]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,I.__webglColorRenderbuffer[ye]);const je=u.convert(Ue.format,Ue.colorSpace),Te=u.convert(Ue.type),Pe=L(Ue.internalFormat,je,Te,Ue.colorSpace,C.isXRRenderTarget===!0),it=_t(C);o.renderbufferStorageMultisample(o.RENDERBUFFER,it,Pe,C.width,C.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+ye,o.RENDERBUFFER,I.__webglColorRenderbuffer[ye])}o.bindRenderbuffer(o.RENDERBUFFER,null),C.depthBuffer&&(I.__webglDepthRenderbuffer=o.createRenderbuffer(),De(I.__webglDepthRenderbuffer,C,!0)),n.bindFramebuffer(o.FRAMEBUFFER,null)}}if(Z){n.bindTexture(o.TEXTURE_CUBE_MAP,$.__webglTexture),ie(o.TEXTURE_CUBE_MAP,g);for(let ye=0;ye<6;ye++)if(g.mipmaps&&g.mipmaps.length>0)for(let Ue=0;Ue<g.mipmaps.length;Ue++)_e(I.__webglFramebuffer[ye][Ue],C,g,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ue);else _e(I.__webglFramebuffer[ye],C,g,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0);y(g)&&v(o.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Le){for(let ye=0,Ue=le.length;ye<Ue;ye++){const je=le[ye],Te=r.get(je);let Pe=o.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(Pe=C.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),n.bindTexture(Pe,Te.__webglTexture),ie(Pe,je),_e(I.__webglFramebuffer,C,je,o.COLOR_ATTACHMENT0+ye,Pe,0),y(je)&&v(Pe)}n.unbindTexture()}else{let ye=o.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ye=C.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),n.bindTexture(ye,$.__webglTexture),ie(ye,g),g.mipmaps&&g.mipmaps.length>0)for(let Ue=0;Ue<g.mipmaps.length;Ue++)_e(I.__webglFramebuffer[Ue],C,g,o.COLOR_ATTACHMENT0,ye,Ue);else _e(I.__webglFramebuffer,C,g,o.COLOR_ATTACHMENT0,ye,0);y(g)&&v(ye),n.unbindTexture()}C.depthBuffer&&dt(C)}function At(C){const g=C.textures;for(let I=0,$=g.length;I<$;I++){const le=g[I];if(y(le)){const Z=F(C),Le=r.get(le).__webglTexture;n.bindTexture(Z,Le),v(Z),n.unbindTexture()}}}const st=[],Je=[];function Ve(C){if(C.samples>0){if(ze(C)===!1){const g=C.textures,I=C.width,$=C.height;let le=o.COLOR_BUFFER_BIT;const Z=C.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Le=r.get(C),ye=g.length>1;if(ye)for(let je=0;je<g.length;je++)n.bindFramebuffer(o.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+je,o.RENDERBUFFER,null),n.bindFramebuffer(o.FRAMEBUFFER,Le.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+je,o.TEXTURE_2D,null,0);n.bindFramebuffer(o.READ_FRAMEBUFFER,Le.__webglMultisampledFramebuffer);const Ue=C.texture.mipmaps;Ue&&Ue.length>0?n.bindFramebuffer(o.DRAW_FRAMEBUFFER,Le.__webglFramebuffer[0]):n.bindFramebuffer(o.DRAW_FRAMEBUFFER,Le.__webglFramebuffer);for(let je=0;je<g.length;je++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(le|=o.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(le|=o.STENCIL_BUFFER_BIT)),ye){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Le.__webglColorRenderbuffer[je]);const Te=r.get(g[je]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Te,0)}o.blitFramebuffer(0,0,I,$,0,0,I,$,le,o.NEAREST),m===!0&&(st.length=0,Je.length=0,st.push(o.COLOR_ATTACHMENT0+je),C.depthBuffer&&C.resolveDepthBuffer===!1&&(st.push(Z),Je.push(Z),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,Je)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,st))}if(n.bindFramebuffer(o.READ_FRAMEBUFFER,null),n.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),ye)for(let je=0;je<g.length;je++){n.bindFramebuffer(o.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+je,o.RENDERBUFFER,Le.__webglColorRenderbuffer[je]);const Te=r.get(g[je]).__webglTexture;n.bindFramebuffer(o.FRAMEBUFFER,Le.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+je,o.TEXTURE_2D,Te,0)}n.bindFramebuffer(o.DRAW_FRAMEBUFFER,Le.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&m){const g=C.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[g])}}}function _t(C){return Math.min(a.maxSamples,C.samples)}function ze(C){const g=r.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function ot(C){const g=f.render.frame;_.get(C)!==g&&(_.set(C,g),C.update())}function Pt(C,g){const I=C.colorSpace,$=C.format,le=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||I!==zs&&I!==mr&&(Tt.getTransfer(I)===Nt?($!==Zn||le!==zi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",I)),g}function Dt(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(p.width=C.naturalWidth||C.width,p.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(p.width=C.displayWidth,p.height=C.displayHeight):(p.width=C.width,p.height=C.height),p}this.allocateTextureUnit=se,this.resetTextureUnits=Q,this.setTexture2D=de,this.setTexture2DArray=oe,this.setTexture3D=he,this.setTextureCube=B,this.rebindTextures=Wt,this.setupRenderTarget=U,this.updateRenderTargetMipmap=At,this.updateMultisampleRenderTarget=Ve,this.setupDepthRenderbuffer=dt,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=ze}function XM(o,e){function n(r,a=mr){let u;const f=Tt.getTransfer(a);if(r===zi)return o.UNSIGNED_BYTE;if(r===Hf)return o.UNSIGNED_SHORT_4_4_4_4;if(r===Vf)return o.UNSIGNED_SHORT_5_5_5_1;if(r===Pm)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===Dm)return o.UNSIGNED_INT_10F_11F_11F_REV;if(r===Cm)return o.BYTE;if(r===bm)return o.SHORT;if(r===Do)return o.UNSIGNED_SHORT;if(r===Bf)return o.INT;if(r===Yr)return o.UNSIGNED_INT;if(r===_i)return o.FLOAT;if(r===Hs)return o.HALF_FLOAT;if(r===Lm)return o.ALPHA;if(r===Nm)return o.RGB;if(r===Zn)return o.RGBA;if(r===No)return o.DEPTH_COMPONENT;if(r===Uo)return o.DEPTH_STENCIL;if(r===Um)return o.RED;if(r===Gf)return o.RED_INTEGER;if(r===Im)return o.RG;if(r===Wf)return o.RG_INTEGER;if(r===Xf)return o.RGBA_INTEGER;if(r===xl||r===Sl||r===yl||r===Ml)if(f===Nt)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===xl)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Sl)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===yl)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Ml)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===xl)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Sl)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===yl)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Ml)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===lf||r===uf||r===cf||r===ff)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===lf)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===uf)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===cf)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===ff)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===df||r===hf||r===pf)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(r===df||r===hf)return f===Nt?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===pf)return f===Nt?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===mf||r===gf||r===vf||r===_f||r===xf||r===Sf||r===yf||r===Mf||r===Ef||r===Tf||r===wf||r===Af||r===Rf||r===Cf)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(r===mf)return f===Nt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===gf)return f===Nt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===vf)return f===Nt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===_f)return f===Nt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===xf)return f===Nt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Sf)return f===Nt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===yf)return f===Nt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Mf)return f===Nt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Ef)return f===Nt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Tf)return f===Nt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===wf)return f===Nt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Af)return f===Nt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Rf)return f===Nt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Cf)return f===Nt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===bf||r===Pf||r===Df)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(r===bf)return f===Nt?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Pf)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Df)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Lf||r===Nf||r===Uf||r===If)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(r===Lf)return u.COMPRESSED_RED_RGTC1_EXT;if(r===Nf)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Uf)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===If)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Lo?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:n}}const jM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,YM=`
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

}`;class qM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const r=new $m(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,r=new Hi({vertexShader:jM,fragmentShader:YM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Qn(new jr(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class $M extends Vs{constructor(e,n){super();const r=this;let a=null,u=1,f=null,d="local-floor",m=1,p=null,_=null,x=null,S=null,M=null,w=null;const A=typeof XRWebGLBinding<"u",y=new qM,v={},F=n.getContextAttributes();let L=null,b=null;const V=[],k=[],z=new ft;let Y=null;const P=new ui;P.viewport=new Gt;const R=new ui;R.viewport=new Gt;const H=[P,R],Q=new m0;let se=null,ue=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let fe=V[J];return fe===void 0&&(fe=new kc,V[J]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(J){let fe=V[J];return fe===void 0&&(fe=new kc,V[J]=fe),fe.getGripSpace()},this.getHand=function(J){let fe=V[J];return fe===void 0&&(fe=new kc,V[J]=fe),fe.getHandSpace()};function de(J){const fe=k.indexOf(J.inputSource);if(fe===-1)return;const _e=V[fe];_e!==void 0&&(_e.update(J.inputSource,J.frame,p||f),_e.dispatchEvent({type:J.type,data:J.inputSource}))}function oe(){a.removeEventListener("select",de),a.removeEventListener("selectstart",de),a.removeEventListener("selectend",de),a.removeEventListener("squeeze",de),a.removeEventListener("squeezestart",de),a.removeEventListener("squeezeend",de),a.removeEventListener("end",oe),a.removeEventListener("inputsourceschange",he);for(let J=0;J<V.length;J++){const fe=k[J];fe!==null&&(k[J]=null,V[J].disconnect(fe))}se=null,ue=null,y.reset();for(const J in v)delete v[J];e.setRenderTarget(L),M=null,S=null,x=null,a=null,b=null,He.stop(),r.isPresenting=!1,e.setPixelRatio(Y),e.setSize(z.width,z.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){u=J,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){d=J,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||f},this.setReferenceSpace=function(J){p=J},this.getBaseLayer=function(){return S!==null?S:M},this.getBinding=function(){return x===null&&A&&(x=new XRWebGLBinding(a,n)),x},this.getFrame=function(){return w},this.getSession=function(){return a},this.setSession=async function(J){if(a=J,a!==null){if(L=e.getRenderTarget(),a.addEventListener("select",de),a.addEventListener("selectstart",de),a.addEventListener("selectend",de),a.addEventListener("squeeze",de),a.addEventListener("squeezestart",de),a.addEventListener("squeezeend",de),a.addEventListener("end",oe),a.addEventListener("inputsourceschange",he),F.xrCompatible!==!0&&await n.makeXRCompatible(),Y=e.getPixelRatio(),e.getSize(z),A&&"createProjectionLayer"in XRWebGLBinding.prototype){let _e=null,De=null,Ne=null;F.depth&&(Ne=F.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,_e=F.stencil?Uo:No,De=F.stencil?Lo:Yr);const dt={colorFormat:n.RGBA8,depthFormat:Ne,scaleFactor:u};x=this.getBinding(),S=x.createProjectionLayer(dt),a.updateRenderState({layers:[S]}),e.setPixelRatio(1),e.setSize(S.textureWidth,S.textureHeight,!1),b=new xr(S.textureWidth,S.textureHeight,{format:Zn,type:zi,depthTexture:new qm(S.textureWidth,S.textureHeight,De,void 0,void 0,void 0,void 0,void 0,void 0,_e),stencilBuffer:F.stencil,colorSpace:e.outputColorSpace,samples:F.antialias?4:0,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}else{const _e={antialias:F.antialias,alpha:!0,depth:F.depth,stencil:F.stencil,framebufferScaleFactor:u};M=new XRWebGLLayer(a,n,_e),a.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),b=new xr(M.framebufferWidth,M.framebufferHeight,{format:Zn,type:zi,colorSpace:e.outputColorSpace,stencilBuffer:F.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(m),p=null,f=await a.requestReferenceSpace(d),He.setContext(a),He.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function he(J){for(let fe=0;fe<J.removed.length;fe++){const _e=J.removed[fe],De=k.indexOf(_e);De>=0&&(k[De]=null,V[De].disconnect(_e))}for(let fe=0;fe<J.added.length;fe++){const _e=J.added[fe];let De=k.indexOf(_e);if(De===-1){for(let dt=0;dt<V.length;dt++)if(dt>=k.length){k.push(_e),De=dt;break}else if(k[dt]===null){k[dt]=_e,De=dt;break}if(De===-1)break}const Ne=V[De];Ne&&Ne.connect(_e)}}const B=new te,ce=new te;function ae(J,fe,_e){B.setFromMatrixPosition(fe.matrixWorld),ce.setFromMatrixPosition(_e.matrixWorld);const De=B.distanceTo(ce),Ne=fe.projectionMatrix.elements,dt=_e.projectionMatrix.elements,Wt=Ne[14]/(Ne[10]-1),U=Ne[14]/(Ne[10]+1),At=(Ne[9]+1)/Ne[5],st=(Ne[9]-1)/Ne[5],Je=(Ne[8]-1)/Ne[0],Ve=(dt[8]+1)/dt[0],_t=Wt*Je,ze=Wt*Ve,ot=De/(-Je+Ve),Pt=ot*-Je;if(fe.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Pt),J.translateZ(ot),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Ne[10]===-1)J.projectionMatrix.copy(fe.projectionMatrix),J.projectionMatrixInverse.copy(fe.projectionMatrixInverse);else{const Dt=Wt+ot,C=U+ot,g=_t-Pt,I=ze+(De-Pt),$=At*U/C*Dt,le=st*U/C*Dt;J.projectionMatrix.makePerspective(g,I,$,le,Dt,C),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function N(J,fe){fe===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(fe.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(a===null)return;let fe=J.near,_e=J.far;y.texture!==null&&(y.depthNear>0&&(fe=y.depthNear),y.depthFar>0&&(_e=y.depthFar)),Q.near=R.near=P.near=fe,Q.far=R.far=P.far=_e,(se!==Q.near||ue!==Q.far)&&(a.updateRenderState({depthNear:Q.near,depthFar:Q.far}),se=Q.near,ue=Q.far),Q.layers.mask=J.layers.mask|6,P.layers.mask=Q.layers.mask&3,R.layers.mask=Q.layers.mask&5;const De=J.parent,Ne=Q.cameras;N(Q,De);for(let dt=0;dt<Ne.length;dt++)N(Ne[dt],De);Ne.length===2?ae(Q,P,R):Q.projectionMatrix.copy(P.projectionMatrix),ie(J,Q,De)};function ie(J,fe,_e){_e===null?J.matrix.copy(fe.matrixWorld):(J.matrix.copy(_e.matrixWorld),J.matrix.invert(),J.matrix.multiply(fe.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(fe.projectionMatrix),J.projectionMatrixInverse.copy(fe.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Ff*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return Q},this.getFoveation=function(){if(!(S===null&&M===null))return m},this.setFoveation=function(J){m=J,S!==null&&(S.fixedFoveation=J),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=J)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(Q)},this.getCameraTexture=function(J){return v[J]};let ke=null;function Ge(J,fe){if(_=fe.getViewerPose(p||f),w=fe,_!==null){const _e=_.views;M!==null&&(e.setRenderTargetFramebuffer(b,M.framebuffer),e.setRenderTarget(b));let De=!1;_e.length!==Q.cameras.length&&(Q.cameras.length=0,De=!0);for(let U=0;U<_e.length;U++){const At=_e[U];let st=null;if(M!==null)st=M.getViewport(At);else{const Ve=x.getViewSubImage(S,At);st=Ve.viewport,U===0&&(e.setRenderTargetTextures(b,Ve.colorTexture,Ve.depthStencilTexture),e.setRenderTarget(b))}let Je=H[U];Je===void 0&&(Je=new ui,Je.layers.enable(U),Je.viewport=new Gt,H[U]=Je),Je.matrix.fromArray(At.transform.matrix),Je.matrix.decompose(Je.position,Je.quaternion,Je.scale),Je.projectionMatrix.fromArray(At.projectionMatrix),Je.projectionMatrixInverse.copy(Je.projectionMatrix).invert(),Je.viewport.set(st.x,st.y,st.width,st.height),U===0&&(Q.matrix.copy(Je.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale)),De===!0&&Q.cameras.push(Je)}const Ne=a.enabledFeatures;if(Ne&&Ne.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&A){x=r.getBinding();const U=x.getDepthInformation(_e[0]);U&&U.isValid&&U.texture&&y.init(U,a.renderState)}if(Ne&&Ne.includes("camera-access")&&A){e.state.unbindTexture(),x=r.getBinding();for(let U=0;U<_e.length;U++){const At=_e[U].camera;if(At){let st=v[At];st||(st=new $m,v[At]=st);const Je=x.getCameraImage(At);st.sourceTexture=Je}}}}for(let _e=0;_e<V.length;_e++){const De=k[_e],Ne=V[_e];De!==null&&Ne!==void 0&&Ne.update(De,fe,p||f)}ke&&ke(J,fe),fe.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:fe}),w=null}const He=new Km;He.setAnimationLoop(Ge),this.setAnimationLoop=function(J){ke=J},this.dispose=function(){}}}const Br=new Bi,KM=new $t;function ZM(o,e){function n(y,v){y.matrixAutoUpdate===!0&&y.updateMatrix(),v.value.copy(y.matrix)}function r(y,v){v.color.getRGB(y.fogColor.value,Xm(o)),v.isFog?(y.fogNear.value=v.near,y.fogFar.value=v.far):v.isFogExp2&&(y.fogDensity.value=v.density)}function a(y,v,F,L,b){v.isMeshBasicMaterial||v.isMeshLambertMaterial?u(y,v):v.isMeshToonMaterial?(u(y,v),x(y,v)):v.isMeshPhongMaterial?(u(y,v),_(y,v)):v.isMeshStandardMaterial?(u(y,v),S(y,v),v.isMeshPhysicalMaterial&&M(y,v,b)):v.isMeshMatcapMaterial?(u(y,v),w(y,v)):v.isMeshDepthMaterial?u(y,v):v.isMeshDistanceMaterial?(u(y,v),A(y,v)):v.isMeshNormalMaterial?u(y,v):v.isLineBasicMaterial?(f(y,v),v.isLineDashedMaterial&&d(y,v)):v.isPointsMaterial?m(y,v,F,L):v.isSpriteMaterial?p(y,v):v.isShadowMaterial?(y.color.value.copy(v.color),y.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function u(y,v){y.opacity.value=v.opacity,v.color&&y.diffuse.value.copy(v.color),v.emissive&&y.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(y.map.value=v.map,n(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,n(v.alphaMap,y.alphaMapTransform)),v.bumpMap&&(y.bumpMap.value=v.bumpMap,n(v.bumpMap,y.bumpMapTransform),y.bumpScale.value=v.bumpScale,v.side===Dn&&(y.bumpScale.value*=-1)),v.normalMap&&(y.normalMap.value=v.normalMap,n(v.normalMap,y.normalMapTransform),y.normalScale.value.copy(v.normalScale),v.side===Dn&&y.normalScale.value.negate()),v.displacementMap&&(y.displacementMap.value=v.displacementMap,n(v.displacementMap,y.displacementMapTransform),y.displacementScale.value=v.displacementScale,y.displacementBias.value=v.displacementBias),v.emissiveMap&&(y.emissiveMap.value=v.emissiveMap,n(v.emissiveMap,y.emissiveMapTransform)),v.specularMap&&(y.specularMap.value=v.specularMap,n(v.specularMap,y.specularMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest);const F=e.get(v),L=F.envMap,b=F.envMapRotation;L&&(y.envMap.value=L,Br.copy(b),Br.x*=-1,Br.y*=-1,Br.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(Br.y*=-1,Br.z*=-1),y.envMapRotation.value.setFromMatrix4(KM.makeRotationFromEuler(Br)),y.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=v.reflectivity,y.ior.value=v.ior,y.refractionRatio.value=v.refractionRatio),v.lightMap&&(y.lightMap.value=v.lightMap,y.lightMapIntensity.value=v.lightMapIntensity,n(v.lightMap,y.lightMapTransform)),v.aoMap&&(y.aoMap.value=v.aoMap,y.aoMapIntensity.value=v.aoMapIntensity,n(v.aoMap,y.aoMapTransform))}function f(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,v.map&&(y.map.value=v.map,n(v.map,y.mapTransform))}function d(y,v){y.dashSize.value=v.dashSize,y.totalSize.value=v.dashSize+v.gapSize,y.scale.value=v.scale}function m(y,v,F,L){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.size.value=v.size*F,y.scale.value=L*.5,v.map&&(y.map.value=v.map,n(v.map,y.uvTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,n(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function p(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.rotation.value=v.rotation,v.map&&(y.map.value=v.map,n(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,n(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function _(y,v){y.specular.value.copy(v.specular),y.shininess.value=Math.max(v.shininess,1e-4)}function x(y,v){v.gradientMap&&(y.gradientMap.value=v.gradientMap)}function S(y,v){y.metalness.value=v.metalness,v.metalnessMap&&(y.metalnessMap.value=v.metalnessMap,n(v.metalnessMap,y.metalnessMapTransform)),y.roughness.value=v.roughness,v.roughnessMap&&(y.roughnessMap.value=v.roughnessMap,n(v.roughnessMap,y.roughnessMapTransform)),v.envMap&&(y.envMapIntensity.value=v.envMapIntensity)}function M(y,v,F){y.ior.value=v.ior,v.sheen>0&&(y.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),y.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(y.sheenColorMap.value=v.sheenColorMap,n(v.sheenColorMap,y.sheenColorMapTransform)),v.sheenRoughnessMap&&(y.sheenRoughnessMap.value=v.sheenRoughnessMap,n(v.sheenRoughnessMap,y.sheenRoughnessMapTransform))),v.clearcoat>0&&(y.clearcoat.value=v.clearcoat,y.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(y.clearcoatMap.value=v.clearcoatMap,n(v.clearcoatMap,y.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,n(v.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(y.clearcoatNormalMap.value=v.clearcoatNormalMap,n(v.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===Dn&&y.clearcoatNormalScale.value.negate())),v.dispersion>0&&(y.dispersion.value=v.dispersion),v.iridescence>0&&(y.iridescence.value=v.iridescence,y.iridescenceIOR.value=v.iridescenceIOR,y.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(y.iridescenceMap.value=v.iridescenceMap,n(v.iridescenceMap,y.iridescenceMapTransform)),v.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=v.iridescenceThicknessMap,n(v.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),v.transmission>0&&(y.transmission.value=v.transmission,y.transmissionSamplerMap.value=F.texture,y.transmissionSamplerSize.value.set(F.width,F.height),v.transmissionMap&&(y.transmissionMap.value=v.transmissionMap,n(v.transmissionMap,y.transmissionMapTransform)),y.thickness.value=v.thickness,v.thicknessMap&&(y.thicknessMap.value=v.thicknessMap,n(v.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=v.attenuationDistance,y.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(y.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(y.anisotropyMap.value=v.anisotropyMap,n(v.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=v.specularIntensity,y.specularColor.value.copy(v.specularColor),v.specularColorMap&&(y.specularColorMap.value=v.specularColorMap,n(v.specularColorMap,y.specularColorMapTransform)),v.specularIntensityMap&&(y.specularIntensityMap.value=v.specularIntensityMap,n(v.specularIntensityMap,y.specularIntensityMapTransform))}function w(y,v){v.matcap&&(y.matcap.value=v.matcap)}function A(y,v){const F=e.get(v).light;y.referencePosition.value.setFromMatrixPosition(F.matrixWorld),y.nearDistance.value=F.shadow.camera.near,y.farDistance.value=F.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function QM(o,e,n,r){let a={},u={},f=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(F,L){const b=L.program;r.uniformBlockBinding(F,b)}function p(F,L){let b=a[F.id];b===void 0&&(w(F),b=_(F),a[F.id]=b,F.addEventListener("dispose",y));const V=L.program;r.updateUBOMapping(F,V);const k=e.render.frame;u[F.id]!==k&&(S(F),u[F.id]=k)}function _(F){const L=x();F.__bindingPointIndex=L;const b=o.createBuffer(),V=F.__size,k=F.usage;return o.bindBuffer(o.UNIFORM_BUFFER,b),o.bufferData(o.UNIFORM_BUFFER,V,k),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,L,b),b}function x(){for(let F=0;F<d;F++)if(f.indexOf(F)===-1)return f.push(F),F;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function S(F){const L=a[F.id],b=F.uniforms,V=F.__cache;o.bindBuffer(o.UNIFORM_BUFFER,L);for(let k=0,z=b.length;k<z;k++){const Y=Array.isArray(b[k])?b[k]:[b[k]];for(let P=0,R=Y.length;P<R;P++){const H=Y[P];if(M(H,k,P,V)===!0){const Q=H.__offset,se=Array.isArray(H.value)?H.value:[H.value];let ue=0;for(let de=0;de<se.length;de++){const oe=se[de],he=A(oe);typeof oe=="number"||typeof oe=="boolean"?(H.__data[0]=oe,o.bufferSubData(o.UNIFORM_BUFFER,Q+ue,H.__data)):oe.isMatrix3?(H.__data[0]=oe.elements[0],H.__data[1]=oe.elements[1],H.__data[2]=oe.elements[2],H.__data[3]=0,H.__data[4]=oe.elements[3],H.__data[5]=oe.elements[4],H.__data[6]=oe.elements[5],H.__data[7]=0,H.__data[8]=oe.elements[6],H.__data[9]=oe.elements[7],H.__data[10]=oe.elements[8],H.__data[11]=0):(oe.toArray(H.__data,ue),ue+=he.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,Q,H.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function M(F,L,b,V){const k=F.value,z=L+"_"+b;if(V[z]===void 0)return typeof k=="number"||typeof k=="boolean"?V[z]=k:V[z]=k.clone(),!0;{const Y=V[z];if(typeof k=="number"||typeof k=="boolean"){if(Y!==k)return V[z]=k,!0}else if(Y.equals(k)===!1)return Y.copy(k),!0}return!1}function w(F){const L=F.uniforms;let b=0;const V=16;for(let z=0,Y=L.length;z<Y;z++){const P=Array.isArray(L[z])?L[z]:[L[z]];for(let R=0,H=P.length;R<H;R++){const Q=P[R],se=Array.isArray(Q.value)?Q.value:[Q.value];for(let ue=0,de=se.length;ue<de;ue++){const oe=se[ue],he=A(oe),B=b%V,ce=B%he.boundary,ae=B+ce;b+=ce,ae!==0&&V-ae<he.storage&&(b+=V-ae),Q.__data=new Float32Array(he.storage/Float32Array.BYTES_PER_ELEMENT),Q.__offset=b,b+=he.storage}}}const k=b%V;return k>0&&(b+=V-k),F.__size=b,F.__cache={},this}function A(F){const L={boundary:0,storage:0};return typeof F=="number"||typeof F=="boolean"?(L.boundary=4,L.storage=4):F.isVector2?(L.boundary=8,L.storage=8):F.isVector3||F.isColor?(L.boundary=16,L.storage=12):F.isVector4?(L.boundary=16,L.storage=16):F.isMatrix3?(L.boundary=48,L.storage=48):F.isMatrix4?(L.boundary=64,L.storage=64):F.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",F),L}function y(F){const L=F.target;L.removeEventListener("dispose",y);const b=f.indexOf(L.__bindingPointIndex);f.splice(b,1),o.deleteBuffer(a[L.id]),delete a[L.id],delete u[L.id]}function v(){for(const F in a)o.deleteBuffer(a[F]);f=[],a={},u={}}return{bind:m,update:p,dispose:v}}class JM{constructor(e={}){const{canvas:n=N_(),context:r=null,depth:a=!0,stencil:u=!1,alpha:f=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:x=!1,reversedDepthBuffer:S=!1}=e;this.isWebGLRenderer=!0;let M;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=r.getContextAttributes().alpha}else M=f;const w=new Uint32Array(4),A=new Int32Array(4);let y=null,v=null;const F=[],L=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=vr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const b=this;let V=!1;this._outputColorSpace=Kn;let k=0,z=0,Y=null,P=-1,R=null;const H=new Gt,Q=new Gt;let se=null;const ue=new wt(0);let de=0,oe=n.width,he=n.height,B=1,ce=null,ae=null;const N=new Gt(0,0,oe,he),ie=new Gt(0,0,oe,he);let ke=!1;const Ge=new Ym;let He=!1,J=!1;const fe=new $t,_e=new te,De=new Gt,Ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let dt=!1;function Wt(){return Y===null?B:1}let U=r;function At(T,j){return n.getContext(T,j)}try{const T={alpha:!0,depth:a,stencil:u,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:_,failIfMajorPerformanceCaveat:x};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${zf}`),n.addEventListener("webglcontextlost",Ae,!1),n.addEventListener("webglcontextrestored",Ie,!1),n.addEventListener("webglcontextcreationerror",Se,!1),U===null){const j="webgl2";if(U=At(j,T),U===null)throw At(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let st,Je,Ve,_t,ze,ot,Pt,Dt,C,g,I,$,le,Z,Le,ye,Ue,je,Te,Pe,it,$e,Re,ct;function G(){st=new uy(U),st.init(),$e=new XM(U,st),Je=new ny(U,st,e,$e),Ve=new GM(U,st),Je.reversedDepthBuffer&&S&&Ve.buffers.depth.setReversed(!0),_t=new dy(U),ze=new PM,ot=new WM(U,st,Ve,ze,Je,$e,_t),Pt=new ry(b),Dt=new ly(b),C=new _0(U),Re=new ey(U,C),g=new cy(U,C,_t,Re),I=new py(U,g,C,_t),Te=new hy(U,Je,ot),ye=new iy(ze),$=new bM(b,Pt,Dt,st,Je,Re,ye),le=new ZM(b,ze),Z=new LM,Le=new kM(st),je=new JS(b,Pt,Dt,Ve,I,M,m),Ue=new HM(b,I,Je),ct=new QM(U,_t,Je,Ve),Pe=new ty(U,st,_t),it=new fy(U,st,_t),_t.programs=$.programs,b.capabilities=Je,b.extensions=st,b.properties=ze,b.renderLists=Z,b.shadowMap=Ue,b.state=Ve,b.info=_t}G();const Me=new $M(b,U);this.xr=Me,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const T=st.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=st.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(T){T!==void 0&&(B=T,this.setSize(oe,he,!1))},this.getSize=function(T){return T.set(oe,he)},this.setSize=function(T,j,ne=!0){if(Me.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}oe=T,he=j,n.width=Math.floor(T*B),n.height=Math.floor(j*B),ne===!0&&(n.style.width=T+"px",n.style.height=j+"px"),this.setViewport(0,0,T,j)},this.getDrawingBufferSize=function(T){return T.set(oe*B,he*B).floor()},this.setDrawingBufferSize=function(T,j,ne){oe=T,he=j,B=ne,n.width=Math.floor(T*ne),n.height=Math.floor(j*ne),this.setViewport(0,0,T,j)},this.getCurrentViewport=function(T){return T.copy(H)},this.getViewport=function(T){return T.copy(N)},this.setViewport=function(T,j,ne,re){T.isVector4?N.set(T.x,T.y,T.z,T.w):N.set(T,j,ne,re),Ve.viewport(H.copy(N).multiplyScalar(B).round())},this.getScissor=function(T){return T.copy(ie)},this.setScissor=function(T,j,ne,re){T.isVector4?ie.set(T.x,T.y,T.z,T.w):ie.set(T,j,ne,re),Ve.scissor(Q.copy(ie).multiplyScalar(B).round())},this.getScissorTest=function(){return ke},this.setScissorTest=function(T){Ve.setScissorTest(ke=T)},this.setOpaqueSort=function(T){ce=T},this.setTransparentSort=function(T){ae=T},this.getClearColor=function(T){return T.copy(je.getClearColor())},this.setClearColor=function(){je.setClearColor(...arguments)},this.getClearAlpha=function(){return je.getClearAlpha()},this.setClearAlpha=function(){je.setClearAlpha(...arguments)},this.clear=function(T=!0,j=!0,ne=!0){let re=0;if(T){let X=!1;if(Y!==null){const Ee=Y.texture.format;X=Ee===Xf||Ee===Wf||Ee===Gf}if(X){const Ee=Y.texture.type,Ce=Ee===zi||Ee===Yr||Ee===Do||Ee===Lo||Ee===Hf||Ee===Vf,We=je.getClearColor(),Fe=je.getClearAlpha(),nt=We.r,rt=We.g,Ze=We.b;Ce?(w[0]=nt,w[1]=rt,w[2]=Ze,w[3]=Fe,U.clearBufferuiv(U.COLOR,0,w)):(A[0]=nt,A[1]=rt,A[2]=Ze,A[3]=Fe,U.clearBufferiv(U.COLOR,0,A))}else re|=U.COLOR_BUFFER_BIT}j&&(re|=U.DEPTH_BUFFER_BIT),ne&&(re|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(re)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Ae,!1),n.removeEventListener("webglcontextrestored",Ie,!1),n.removeEventListener("webglcontextcreationerror",Se,!1),je.dispose(),Z.dispose(),Le.dispose(),ze.dispose(),Pt.dispose(),Dt.dispose(),I.dispose(),Re.dispose(),ct.dispose(),$.dispose(),Me.dispose(),Me.removeEventListener("sessionstart",ln),Me.removeEventListener("sessionend",qr),Nn.stop()};function Ae(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),V=!0}function Ie(){console.log("THREE.WebGLRenderer: Context Restored."),V=!1;const T=_t.autoReset,j=Ue.enabled,ne=Ue.autoUpdate,re=Ue.needsUpdate,X=Ue.type;G(),_t.autoReset=T,Ue.enabled=j,Ue.autoUpdate=ne,Ue.needsUpdate=re,Ue.type=X}function Se(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function me(T){const j=T.target;j.removeEventListener("dispose",me),Ye(j)}function Ye(T){ut(T),ze.remove(T)}function ut(T){const j=ze.get(T).programs;j!==void 0&&(j.forEach(function(ne){$.releaseProgram(ne)}),T.isShaderMaterial&&$.releaseShaderCache(T))}this.renderBufferDirect=function(T,j,ne,re,X,Ee){j===null&&(j=Ne);const Ce=X.isMesh&&X.matrixWorld.determinant()<0,We=yi(T,j,ne,re,X);Ve.setMaterial(re,Ce);let Fe=ne.index,nt=1;if(re.wireframe===!0){if(Fe=g.getWireframeAttribute(ne),Fe===void 0)return;nt=2}const rt=ne.drawRange,Ze=ne.attributes.position;let at=rt.start*nt,Rt=(rt.start+rt.count)*nt;Ee!==null&&(at=Math.max(at,Ee.start*nt),Rt=Math.min(Rt,(Ee.start+Ee.count)*nt)),Fe!==null?(at=Math.max(at,0),Rt=Math.min(Rt,Fe.count)):Ze!=null&&(at=Math.max(at,0),Rt=Math.min(Rt,Ze.count));const yt=Rt-at;if(yt<0||yt===1/0)return;Re.setup(X,re,We,ne,Fe);let Ut,bt=Pe;if(Fe!==null&&(Ut=C.get(Fe),bt=it,bt.setIndex(Ut)),X.isMesh)re.wireframe===!0?(Ve.setLineWidth(re.wireframeLinewidth*Wt()),bt.setMode(U.LINES)):bt.setMode(U.TRIANGLES);else if(X.isLine){let Qe=re.linewidth;Qe===void 0&&(Qe=1),Ve.setLineWidth(Qe*Wt()),X.isLineSegments?bt.setMode(U.LINES):X.isLineLoop?bt.setMode(U.LINE_LOOP):bt.setMode(U.LINE_STRIP)}else X.isPoints?bt.setMode(U.POINTS):X.isSprite&&bt.setMode(U.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)Io("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),bt.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(st.get("WEBGL_multi_draw"))bt.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const Qe=X._multiDrawStarts,Lt=X._multiDrawCounts,gt=X._multiDrawCount,Kt=Fe?C.get(Fe).bytesPerElement:1,Jn=ze.get(re).currentProgram.getUniforms();for(let vn=0;vn<gt;vn++)Jn.setValue(U,"_gl_DrawID",vn),bt.render(Qe[vn]/Kt,Lt[vn])}else if(X.isInstancedMesh)bt.renderInstances(at,yt,X.count);else if(ne.isInstancedBufferGeometry){const Qe=ne._maxInstanceCount!==void 0?ne._maxInstanceCount:1/0,Lt=Math.min(ne.instanceCount,Qe);bt.renderInstances(at,yt,Lt)}else bt.render(at,yt)};function Ct(T,j,ne){T.transparent===!0&&T.side===Fi&&T.forceSinglePass===!1?(T.side=Dn,T.needsUpdate=!0,Kr(T,j,ne),T.side=_r,T.needsUpdate=!0,Kr(T,j,ne),T.side=Fi):Kr(T,j,ne)}this.compile=function(T,j,ne=null){ne===null&&(ne=T),v=Le.get(ne),v.init(j),L.push(v),ne.traverseVisible(function(X){X.isLight&&X.layers.test(j.layers)&&(v.pushLight(X),X.castShadow&&v.pushShadow(X))}),T!==ne&&T.traverseVisible(function(X){X.isLight&&X.layers.test(j.layers)&&(v.pushLight(X),X.castShadow&&v.pushShadow(X))}),v.setupLights();const re=new Set;return T.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const Ee=X.material;if(Ee)if(Array.isArray(Ee))for(let Ce=0;Ce<Ee.length;Ce++){const We=Ee[Ce];Ct(We,ne,X),re.add(We)}else Ct(Ee,ne,X),re.add(Ee)}),v=L.pop(),re},this.compileAsync=function(T,j,ne=null){const re=this.compile(T,j,ne);return new Promise(X=>{function Ee(){if(re.forEach(function(Ce){ze.get(Ce).currentProgram.isReady()&&re.delete(Ce)}),re.size===0){X(T);return}setTimeout(Ee,10)}st.get("KHR_parallel_shader_compile")!==null?Ee():setTimeout(Ee,10)})};let St=null;function Vn(T){St&&St(T)}function ln(){Nn.stop()}function qr(){Nn.start()}const Nn=new Km;Nn.setAnimationLoop(Vn),typeof self<"u"&&Nn.setContext(self),this.setAnimationLoop=function(T){St=T,Me.setAnimationLoop(T),T===null?Nn.stop():Nn.start()},Me.addEventListener("sessionstart",ln),Me.addEventListener("sessionend",qr),this.render=function(T,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(V===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),Me.enabled===!0&&Me.isPresenting===!0&&(Me.cameraAutoUpdate===!0&&Me.updateCamera(j),j=Me.getCamera()),T.isScene===!0&&T.onBeforeRender(b,T,j,Y),v=Le.get(T,L.length),v.init(j),L.push(v),fe.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),Ge.setFromProjectionMatrix(fe,xi,j.reversedDepth),J=this.localClippingEnabled,He=ye.init(this.clippingPlanes,J),y=Z.get(T,F.length),y.init(),F.push(y),Me.enabled===!0&&Me.isPresenting===!0){const Ee=b.xr.getDepthSensingMesh();Ee!==null&&Ws(Ee,j,-1/0,b.sortObjects)}Ws(T,j,0,b.sortObjects),y.finish(),b.sortObjects===!0&&y.sort(ce,ae),dt=Me.enabled===!1||Me.isPresenting===!1||Me.hasDepthSensing()===!1,dt&&je.addToRenderList(y,T),this.info.render.frame++,He===!0&&ye.beginShadows();const ne=v.state.shadowsArray;Ue.render(ne,T,j),He===!0&&ye.endShadows(),this.info.autoReset===!0&&this.info.reset();const re=y.opaque,X=y.transmissive;if(v.setupLights(),j.isArrayCamera){const Ee=j.cameras;if(X.length>0)for(let Ce=0,We=Ee.length;Ce<We;Ce++){const Fe=Ee[Ce];Sr(re,X,T,Fe)}dt&&je.render(T);for(let Ce=0,We=Ee.length;Ce<We;Ce++){const Fe=Ee[Ce];Gi(y,T,Fe,Fe.viewport)}}else X.length>0&&Sr(re,X,T,j),dt&&je.render(T),Gi(y,T,j);Y!==null&&z===0&&(ot.updateMultisampleRenderTarget(Y),ot.updateRenderTargetMipmap(Y)),T.isScene===!0&&T.onAfterRender(b,T,j),Re.resetDefaultState(),P=-1,R=null,L.pop(),L.length>0?(v=L[L.length-1],He===!0&&ye.setGlobalState(b.clippingPlanes,v.state.camera)):v=null,F.pop(),F.length>0?y=F[F.length-1]:y=null};function Ws(T,j,ne,re){if(T.visible===!1)return;if(T.layers.test(j.layers)){if(T.isGroup)ne=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(j);else if(T.isLight)v.pushLight(T),T.castShadow&&v.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Ge.intersectsSprite(T)){re&&De.setFromMatrixPosition(T.matrixWorld).applyMatrix4(fe);const Ce=I.update(T),We=T.material;We.visible&&y.push(T,Ce,We,ne,De.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Ge.intersectsObject(T))){const Ce=I.update(T),We=T.material;if(re&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),De.copy(T.boundingSphere.center)):(Ce.boundingSphere===null&&Ce.computeBoundingSphere(),De.copy(Ce.boundingSphere.center)),De.applyMatrix4(T.matrixWorld).applyMatrix4(fe)),Array.isArray(We)){const Fe=Ce.groups;for(let nt=0,rt=Fe.length;nt<rt;nt++){const Ze=Fe[nt],at=We[Ze.materialIndex];at&&at.visible&&y.push(T,Ce,at,ne,De.z,Ze)}}else We.visible&&y.push(T,Ce,We,ne,De.z,null)}}const Ee=T.children;for(let Ce=0,We=Ee.length;Ce<We;Ce++)Ws(Ee[Ce],j,ne,re)}function Gi(T,j,ne,re){const X=T.opaque,Ee=T.transmissive,Ce=T.transparent;v.setupLightsView(ne),He===!0&&ye.setGlobalState(b.clippingPlanes,ne),re&&Ve.viewport(H.copy(re)),X.length>0&&Si(X,j,ne),Ee.length>0&&Si(Ee,j,ne),Ce.length>0&&Si(Ce,j,ne),Ve.buffers.depth.setTest(!0),Ve.buffers.depth.setMask(!0),Ve.buffers.color.setMask(!0),Ve.setPolygonOffset(!1)}function Sr(T,j,ne,re){if((ne.isScene===!0?ne.overrideMaterial:null)!==null)return;v.state.transmissionRenderTarget[re.id]===void 0&&(v.state.transmissionRenderTarget[re.id]=new xr(1,1,{generateMipmaps:!0,type:st.has("EXT_color_buffer_half_float")||st.has("EXT_color_buffer_float")?Hs:zi,minFilter:Xr,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Tt.workingColorSpace}));const Ee=v.state.transmissionRenderTarget[re.id],Ce=re.viewport||H;Ee.setSize(Ce.z*b.transmissionResolutionScale,Ce.w*b.transmissionResolutionScale);const We=b.getRenderTarget(),Fe=b.getActiveCubeFace(),nt=b.getActiveMipmapLevel();b.setRenderTarget(Ee),b.getClearColor(ue),de=b.getClearAlpha(),de<1&&b.setClearColor(16777215,.5),b.clear(),dt&&je.render(ne);const rt=b.toneMapping;b.toneMapping=vr;const Ze=re.viewport;if(re.viewport!==void 0&&(re.viewport=void 0),v.setupLightsView(re),He===!0&&ye.setGlobalState(b.clippingPlanes,re),Si(T,ne,re),ot.updateMultisampleRenderTarget(Ee),ot.updateRenderTargetMipmap(Ee),st.has("WEBGL_multisampled_render_to_texture")===!1){let at=!1;for(let Rt=0,yt=j.length;Rt<yt;Rt++){const Ut=j[Rt],bt=Ut.object,Qe=Ut.geometry,Lt=Ut.material,gt=Ut.group;if(Lt.side===Fi&&bt.layers.test(re.layers)){const Kt=Lt.side;Lt.side=Dn,Lt.needsUpdate=!0,$r(bt,ne,re,Qe,Lt,gt),Lt.side=Kt,Lt.needsUpdate=!0,at=!0}}at===!0&&(ot.updateMultisampleRenderTarget(Ee),ot.updateRenderTargetMipmap(Ee))}b.setRenderTarget(We,Fe,nt),b.setClearColor(ue,de),Ze!==void 0&&(re.viewport=Ze),b.toneMapping=rt}function Si(T,j,ne){const re=j.isScene===!0?j.overrideMaterial:null;for(let X=0,Ee=T.length;X<Ee;X++){const Ce=T[X],We=Ce.object,Fe=Ce.geometry,nt=Ce.group;let rt=Ce.material;rt.allowOverride===!0&&re!==null&&(rt=re),We.layers.test(ne.layers)&&$r(We,j,ne,Fe,rt,nt)}}function $r(T,j,ne,re,X,Ee){T.onBeforeRender(b,j,ne,re,X,Ee),T.modelViewMatrix.multiplyMatrices(ne.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),X.onBeforeRender(b,j,ne,re,T,Ee),X.transparent===!0&&X.side===Fi&&X.forceSinglePass===!1?(X.side=Dn,X.needsUpdate=!0,b.renderBufferDirect(ne,j,re,X,T,Ee),X.side=_r,X.needsUpdate=!0,b.renderBufferDirect(ne,j,re,X,T,Ee),X.side=Fi):b.renderBufferDirect(ne,j,re,X,T,Ee),T.onAfterRender(b,j,ne,re,X,Ee)}function Kr(T,j,ne){j.isScene!==!0&&(j=Ne);const re=ze.get(T),X=v.state.lights,Ee=v.state.shadowsArray,Ce=X.state.version,We=$.getParameters(T,X.state,Ee,j,ne),Fe=$.getProgramCacheKey(We);let nt=re.programs;re.environment=T.isMeshStandardMaterial?j.environment:null,re.fog=j.fog,re.envMap=(T.isMeshStandardMaterial?Dt:Pt).get(T.envMap||re.environment),re.envMapRotation=re.environment!==null&&T.envMap===null?j.environmentRotation:T.envMapRotation,nt===void 0&&(T.addEventListener("dispose",me),nt=new Map,re.programs=nt);let rt=nt.get(Fe);if(rt!==void 0){if(re.currentProgram===rt&&re.lightsStateVersion===Ce)return Vo(T,We),rt}else We.uniforms=$.getUniforms(T),T.onBeforeCompile(We,b),rt=$.acquireProgram(We,Fe),nt.set(Fe,rt),re.uniforms=We.uniforms;const Ze=re.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ze.clippingPlanes=ye.uniform),Vo(T,We),re.needsLights=Wo(T),re.lightsStateVersion=Ce,re.needsLights&&(Ze.ambientLightColor.value=X.state.ambient,Ze.lightProbe.value=X.state.probe,Ze.directionalLights.value=X.state.directional,Ze.directionalLightShadows.value=X.state.directionalShadow,Ze.spotLights.value=X.state.spot,Ze.spotLightShadows.value=X.state.spotShadow,Ze.rectAreaLights.value=X.state.rectArea,Ze.ltc_1.value=X.state.rectAreaLTC1,Ze.ltc_2.value=X.state.rectAreaLTC2,Ze.pointLights.value=X.state.point,Ze.pointLightShadows.value=X.state.pointShadow,Ze.hemisphereLights.value=X.state.hemi,Ze.directionalShadowMap.value=X.state.directionalShadowMap,Ze.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Ze.spotShadowMap.value=X.state.spotShadowMap,Ze.spotLightMatrix.value=X.state.spotLightMatrix,Ze.spotLightMap.value=X.state.spotLightMap,Ze.pointShadowMap.value=X.state.pointShadowMap,Ze.pointShadowMatrix.value=X.state.pointShadowMatrix),re.currentProgram=rt,re.uniformsList=null,rt}function Ho(T){if(T.uniformsList===null){const j=T.currentProgram.getUniforms();T.uniformsList=El.seqWithValue(j.seq,T.uniforms)}return T.uniformsList}function Vo(T,j){const ne=ze.get(T);ne.outputColorSpace=j.outputColorSpace,ne.batching=j.batching,ne.batchingColor=j.batchingColor,ne.instancing=j.instancing,ne.instancingColor=j.instancingColor,ne.instancingMorph=j.instancingMorph,ne.skinning=j.skinning,ne.morphTargets=j.morphTargets,ne.morphNormals=j.morphNormals,ne.morphColors=j.morphColors,ne.morphTargetsCount=j.morphTargetsCount,ne.numClippingPlanes=j.numClippingPlanes,ne.numIntersection=j.numClipIntersection,ne.vertexAlphas=j.vertexAlphas,ne.vertexTangents=j.vertexTangents,ne.toneMapping=j.toneMapping}function yi(T,j,ne,re,X){j.isScene!==!0&&(j=Ne),ot.resetTextureUnits();const Ee=j.fog,Ce=re.isMeshStandardMaterial?j.environment:null,We=Y===null?b.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:zs,Fe=(re.isMeshStandardMaterial?Dt:Pt).get(re.envMap||Ce),nt=re.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,rt=!!ne.attributes.tangent&&(!!re.normalMap||re.anisotropy>0),Ze=!!ne.morphAttributes.position,at=!!ne.morphAttributes.normal,Rt=!!ne.morphAttributes.color;let yt=vr;re.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(yt=b.toneMapping);const Ut=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,bt=Ut!==void 0?Ut.length:0,Qe=ze.get(re),Lt=v.state.lights;if(He===!0&&(J===!0||T!==R)){const Xt=T===R&&re.id===P;ye.setState(re,T,Xt)}let gt=!1;re.version===Qe.__version?(Qe.needsLights&&Qe.lightsStateVersion!==Lt.state.version||Qe.outputColorSpace!==We||X.isBatchedMesh&&Qe.batching===!1||!X.isBatchedMesh&&Qe.batching===!0||X.isBatchedMesh&&Qe.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&Qe.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&Qe.instancing===!1||!X.isInstancedMesh&&Qe.instancing===!0||X.isSkinnedMesh&&Qe.skinning===!1||!X.isSkinnedMesh&&Qe.skinning===!0||X.isInstancedMesh&&Qe.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Qe.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Qe.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Qe.instancingMorph===!1&&X.morphTexture!==null||Qe.envMap!==Fe||re.fog===!0&&Qe.fog!==Ee||Qe.numClippingPlanes!==void 0&&(Qe.numClippingPlanes!==ye.numPlanes||Qe.numIntersection!==ye.numIntersection)||Qe.vertexAlphas!==nt||Qe.vertexTangents!==rt||Qe.morphTargets!==Ze||Qe.morphNormals!==at||Qe.morphColors!==Rt||Qe.toneMapping!==yt||Qe.morphTargetsCount!==bt)&&(gt=!0):(gt=!0,Qe.__version=re.version);let Kt=Qe.currentProgram;gt===!0&&(Kt=Kr(re,j,X));let Jn=!1,vn=!1,yr=!1;const It=Kt.getUniforms(),_n=Qe.uniforms;if(Ve.useProgram(Kt.program)&&(Jn=!0,vn=!0,yr=!0),re.id!==P&&(P=re.id,vn=!0),Jn||R!==T){Ve.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),It.setValue(U,"projectionMatrix",T.projectionMatrix),It.setValue(U,"viewMatrix",T.matrixWorldInverse);const cn=It.map.cameraPosition;cn!==void 0&&cn.setValue(U,_e.setFromMatrixPosition(T.matrixWorld)),Je.logarithmicDepthBuffer&&It.setValue(U,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(re.isMeshPhongMaterial||re.isMeshToonMaterial||re.isMeshLambertMaterial||re.isMeshBasicMaterial||re.isMeshStandardMaterial||re.isShaderMaterial)&&It.setValue(U,"isOrthographic",T.isOrthographicCamera===!0),R!==T&&(R=T,vn=!0,yr=!0)}if(X.isSkinnedMesh){It.setOptional(U,X,"bindMatrix"),It.setOptional(U,X,"bindMatrixInverse");const Xt=X.skeleton;Xt&&(Xt.boneTexture===null&&Xt.computeBoneTexture(),It.setValue(U,"boneTexture",Xt.boneTexture,ot))}X.isBatchedMesh&&(It.setOptional(U,X,"batchingTexture"),It.setValue(U,"batchingTexture",X._matricesTexture,ot),It.setOptional(U,X,"batchingIdTexture"),It.setValue(U,"batchingIdTexture",X._indirectTexture,ot),It.setOptional(U,X,"batchingColorTexture"),X._colorsTexture!==null&&It.setValue(U,"batchingColorTexture",X._colorsTexture,ot));const un=ne.morphAttributes;if((un.position!==void 0||un.normal!==void 0||un.color!==void 0)&&Te.update(X,ne,Kt),(vn||Qe.receiveShadow!==X.receiveShadow)&&(Qe.receiveShadow=X.receiveShadow,It.setValue(U,"receiveShadow",X.receiveShadow)),re.isMeshGouraudMaterial&&re.envMap!==null&&(_n.envMap.value=Fe,_n.flipEnvMap.value=Fe.isCubeTexture&&Fe.isRenderTargetTexture===!1?-1:1),re.isMeshStandardMaterial&&re.envMap===null&&j.environment!==null&&(_n.envMapIntensity.value=j.environmentIntensity),vn&&(It.setValue(U,"toneMappingExposure",b.toneMappingExposure),Qe.needsLights&&Go(_n,yr),Ee&&re.fog===!0&&le.refreshFogUniforms(_n,Ee),le.refreshMaterialUniforms(_n,re,B,he,v.state.transmissionRenderTarget[T.id]),El.upload(U,Ho(Qe),_n,ot)),re.isShaderMaterial&&re.uniformsNeedUpdate===!0&&(El.upload(U,Ho(Qe),_n,ot),re.uniformsNeedUpdate=!1),re.isSpriteMaterial&&It.setValue(U,"center",X.center),It.setValue(U,"modelViewMatrix",X.modelViewMatrix),It.setValue(U,"normalMatrix",X.normalMatrix),It.setValue(U,"modelMatrix",X.matrixWorld),re.isShaderMaterial||re.isRawShaderMaterial){const Xt=re.uniformsGroups;for(let cn=0,Mr=Xt.length;cn<Mr;cn++){const vt=Xt[cn];ct.update(vt,Kt),ct.bind(vt,Kt)}}return Kt}function Go(T,j){T.ambientLightColor.needsUpdate=j,T.lightProbe.needsUpdate=j,T.directionalLights.needsUpdate=j,T.directionalLightShadows.needsUpdate=j,T.pointLights.needsUpdate=j,T.pointLightShadows.needsUpdate=j,T.spotLights.needsUpdate=j,T.spotLightShadows.needsUpdate=j,T.rectAreaLights.needsUpdate=j,T.hemisphereLights.needsUpdate=j}function Wo(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return Y},this.setRenderTargetTextures=function(T,j,ne){const re=ze.get(T);re.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,re.__autoAllocateDepthBuffer===!1&&(re.__useRenderToTexture=!1),ze.get(T.texture).__webglTexture=j,ze.get(T.depthTexture).__webglTexture=re.__autoAllocateDepthBuffer?void 0:ne,re.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,j){const ne=ze.get(T);ne.__webglFramebuffer=j,ne.__useDefaultFramebuffer=j===void 0};const Nl=U.createFramebuffer();this.setRenderTarget=function(T,j=0,ne=0){Y=T,k=j,z=ne;let re=!0,X=null,Ee=!1,Ce=!1;if(T){const Fe=ze.get(T);if(Fe.__useDefaultFramebuffer!==void 0)Ve.bindFramebuffer(U.FRAMEBUFFER,null),re=!1;else if(Fe.__webglFramebuffer===void 0)ot.setupRenderTarget(T);else if(Fe.__hasExternalTextures)ot.rebindTextures(T,ze.get(T.texture).__webglTexture,ze.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Ze=T.depthTexture;if(Fe.__boundDepthTexture!==Ze){if(Ze!==null&&ze.has(Ze)&&(T.width!==Ze.image.width||T.height!==Ze.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ot.setupDepthRenderbuffer(T)}}const nt=T.texture;(nt.isData3DTexture||nt.isDataArrayTexture||nt.isCompressedArrayTexture)&&(Ce=!0);const rt=ze.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(rt[j])?X=rt[j][ne]:X=rt[j],Ee=!0):T.samples>0&&ot.useMultisampledRTT(T)===!1?X=ze.get(T).__webglMultisampledFramebuffer:Array.isArray(rt)?X=rt[ne]:X=rt,H.copy(T.viewport),Q.copy(T.scissor),se=T.scissorTest}else H.copy(N).multiplyScalar(B).floor(),Q.copy(ie).multiplyScalar(B).floor(),se=ke;if(ne!==0&&(X=Nl),Ve.bindFramebuffer(U.FRAMEBUFFER,X)&&re&&Ve.drawBuffers(T,X),Ve.viewport(H),Ve.scissor(Q),Ve.setScissorTest(se),Ee){const Fe=ze.get(T.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+j,Fe.__webglTexture,ne)}else if(Ce){const Fe=j;for(let nt=0;nt<T.textures.length;nt++){const rt=ze.get(T.textures[nt]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+nt,rt.__webglTexture,ne,Fe)}}else if(T!==null&&ne!==0){const Fe=ze.get(T.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Fe.__webglTexture,ne)}P=-1},this.readRenderTargetPixels=function(T,j,ne,re,X,Ee,Ce,We=0){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Fe=ze.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ce!==void 0&&(Fe=Fe[Ce]),Fe){Ve.bindFramebuffer(U.FRAMEBUFFER,Fe);try{const nt=T.textures[We],rt=nt.format,Ze=nt.type;if(!Je.textureFormatReadable(rt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Je.textureTypeReadable(Ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=T.width-re&&ne>=0&&ne<=T.height-X&&(T.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+We),U.readPixels(j,ne,re,X,$e.convert(rt),$e.convert(Ze),Ee))}finally{const nt=Y!==null?ze.get(Y).__webglFramebuffer:null;Ve.bindFramebuffer(U.FRAMEBUFFER,nt)}}},this.readRenderTargetPixelsAsync=async function(T,j,ne,re,X,Ee,Ce,We=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Fe=ze.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ce!==void 0&&(Fe=Fe[Ce]),Fe)if(j>=0&&j<=T.width-re&&ne>=0&&ne<=T.height-X){Ve.bindFramebuffer(U.FRAMEBUFFER,Fe);const nt=T.textures[We],rt=nt.format,Ze=nt.type;if(!Je.textureFormatReadable(rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Je.textureTypeReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const at=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,at),U.bufferData(U.PIXEL_PACK_BUFFER,Ee.byteLength,U.STREAM_READ),T.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+We),U.readPixels(j,ne,re,X,$e.convert(rt),$e.convert(Ze),0);const Rt=Y!==null?ze.get(Y).__webglFramebuffer:null;Ve.bindFramebuffer(U.FRAMEBUFFER,Rt);const yt=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await U_(U,yt,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,at),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,Ee),U.deleteBuffer(at),U.deleteSync(yt),Ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,j=null,ne=0){const re=Math.pow(2,-ne),X=Math.floor(T.image.width*re),Ee=Math.floor(T.image.height*re),Ce=j!==null?j.x:0,We=j!==null?j.y:0;ot.setTexture2D(T,0),U.copyTexSubImage2D(U.TEXTURE_2D,ne,0,0,Ce,We,X,Ee),Ve.unbindTexture()};const Xo=U.createFramebuffer(),jo=U.createFramebuffer();this.copyTextureToTexture=function(T,j,ne=null,re=null,X=0,Ee=null){Ee===null&&(X!==0?(Io("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ee=X,X=0):Ee=0);let Ce,We,Fe,nt,rt,Ze,at,Rt,yt;const Ut=T.isCompressedTexture?T.mipmaps[Ee]:T.image;if(ne!==null)Ce=ne.max.x-ne.min.x,We=ne.max.y-ne.min.y,Fe=ne.isBox3?ne.max.z-ne.min.z:1,nt=ne.min.x,rt=ne.min.y,Ze=ne.isBox3?ne.min.z:0;else{const un=Math.pow(2,-X);Ce=Math.floor(Ut.width*un),We=Math.floor(Ut.height*un),T.isDataArrayTexture?Fe=Ut.depth:T.isData3DTexture?Fe=Math.floor(Ut.depth*un):Fe=1,nt=0,rt=0,Ze=0}re!==null?(at=re.x,Rt=re.y,yt=re.z):(at=0,Rt=0,yt=0);const bt=$e.convert(j.format),Qe=$e.convert(j.type);let Lt;j.isData3DTexture?(ot.setTexture3D(j,0),Lt=U.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(ot.setTexture2DArray(j,0),Lt=U.TEXTURE_2D_ARRAY):(ot.setTexture2D(j,0),Lt=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,j.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,j.unpackAlignment);const gt=U.getParameter(U.UNPACK_ROW_LENGTH),Kt=U.getParameter(U.UNPACK_IMAGE_HEIGHT),Jn=U.getParameter(U.UNPACK_SKIP_PIXELS),vn=U.getParameter(U.UNPACK_SKIP_ROWS),yr=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,Ut.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Ut.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,nt),U.pixelStorei(U.UNPACK_SKIP_ROWS,rt),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Ze);const It=T.isDataArrayTexture||T.isData3DTexture,_n=j.isDataArrayTexture||j.isData3DTexture;if(T.isDepthTexture){const un=ze.get(T),Xt=ze.get(j),cn=ze.get(un.__renderTarget),Mr=ze.get(Xt.__renderTarget);Ve.bindFramebuffer(U.READ_FRAMEBUFFER,cn.__webglFramebuffer),Ve.bindFramebuffer(U.DRAW_FRAMEBUFFER,Mr.__webglFramebuffer);for(let vt=0;vt<Fe;vt++)It&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,ze.get(T).__webglTexture,X,Ze+vt),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,ze.get(j).__webglTexture,Ee,yt+vt)),U.blitFramebuffer(nt,rt,Ce,We,at,Rt,Ce,We,U.DEPTH_BUFFER_BIT,U.NEAREST);Ve.bindFramebuffer(U.READ_FRAMEBUFFER,null),Ve.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(X!==0||T.isRenderTargetTexture||ze.has(T)){const un=ze.get(T),Xt=ze.get(j);Ve.bindFramebuffer(U.READ_FRAMEBUFFER,Xo),Ve.bindFramebuffer(U.DRAW_FRAMEBUFFER,jo);for(let cn=0;cn<Fe;cn++)It?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,un.__webglTexture,X,Ze+cn):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,un.__webglTexture,X),_n?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Xt.__webglTexture,Ee,yt+cn):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Xt.__webglTexture,Ee),X!==0?U.blitFramebuffer(nt,rt,Ce,We,at,Rt,Ce,We,U.COLOR_BUFFER_BIT,U.NEAREST):_n?U.copyTexSubImage3D(Lt,Ee,at,Rt,yt+cn,nt,rt,Ce,We):U.copyTexSubImage2D(Lt,Ee,at,Rt,nt,rt,Ce,We);Ve.bindFramebuffer(U.READ_FRAMEBUFFER,null),Ve.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else _n?T.isDataTexture||T.isData3DTexture?U.texSubImage3D(Lt,Ee,at,Rt,yt,Ce,We,Fe,bt,Qe,Ut.data):j.isCompressedArrayTexture?U.compressedTexSubImage3D(Lt,Ee,at,Rt,yt,Ce,We,Fe,bt,Ut.data):U.texSubImage3D(Lt,Ee,at,Rt,yt,Ce,We,Fe,bt,Qe,Ut):T.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,Ee,at,Rt,Ce,We,bt,Qe,Ut.data):T.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,Ee,at,Rt,Ut.width,Ut.height,bt,Ut.data):U.texSubImage2D(U.TEXTURE_2D,Ee,at,Rt,Ce,We,bt,Qe,Ut);U.pixelStorei(U.UNPACK_ROW_LENGTH,gt),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Kt),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Jn),U.pixelStorei(U.UNPACK_SKIP_ROWS,vn),U.pixelStorei(U.UNPACK_SKIP_IMAGES,yr),Ee===0&&j.generateMipmaps&&U.generateMipmap(Lt),Ve.unbindTexture()},this.initRenderTarget=function(T){ze.get(T).__webglFramebuffer===void 0&&ot.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?ot.setTextureCube(T,0):T.isData3DTexture?ot.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?ot.setTexture2DArray(T,0):ot.setTexture2D(T,0),Ve.unbindTexture()},this.resetState=function(){k=0,z=0,Y=null,Ve.reset(),Re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return xi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Tt._getDrawingBufferColorSpace(e),n.unpackColorSpace=Tt._getUnpackColorSpace()}}function eE({mouseForce:o=20,cursorSize:e=100,isViscous:n=!1,viscous:r=30,iterationsViscous:a=32,iterationsPoisson:u=32,dt:f=.014,BFECC:d=!0,resolution:m=.5,isBounce:p=!1,colors:_=["#5227FF","#FF9FFC","#B19EEF"],style:x={},className:S="",autoDemo:M=!0,autoSpeed:w=.5,autoIntensity:A=2.2,takeoverDuration:y=.25,autoResumeDelay:v=1e3,autoRampDuration:F=.6}){const L=Bn.useRef(null),b=Bn.useRef(null),V=Bn.useRef(null),k=Bn.useRef(null),z=Bn.useRef(null),Y=Bn.useRef(!0),P=Bn.useRef(null);return Bn.useEffect(()=>{if(!L.current)return;function R(C){let g;Array.isArray(C)&&C.length>0?C.length===1?g=[C[0],C[0]]:g=C:g=["#ffffff","#ffffff"];const I=g.length,$=new Uint8Array(I*4);for(let Z=0;Z<I;Z++){const Le=new wt(g[Z]);$[Z*4+0]=Math.round(Le.r*255),$[Z*4+1]=Math.round(Le.g*255),$[Z*4+2]=Math.round(Le.b*255),$[Z*4+3]=255}const le=new s0($,I,1,Zn);return le.magFilter=Pn,le.minFilter=Pn,le.wrapS=fi,le.wrapT=fi,le.generateMipmaps=!1,le.needsUpdate=!0,le}const H=R(_),Q=new Gt(0,0,0,0);class se{constructor(){this.width=0,this.height=0,this.aspect=1,this.pixelRatio=1,this.isMobile=!1,this.breakpoint=768,this.fboWidth=null,this.fboHeight=null,this.time=0,this.delta=0,this.container=null,this.renderer=null,this.clock=null}init(g){this.container=g,this.pixelRatio=Math.min(window.devicePixelRatio||1,2),this.resize(),this.renderer=new JM({antialias:!0,alpha:!0}),this.renderer.autoClear=!1,this.renderer.setClearColor(new wt(0),0),this.renderer.setPixelRatio(this.pixelRatio),this.renderer.setSize(this.width,this.height),this.renderer.domElement.style.width="100%",this.renderer.domElement.style.height="100%",this.renderer.domElement.style.display="block",this.clock=new g0,this.clock.start()}resize(){if(!this.container)return;const g=this.container.getBoundingClientRect();this.width=Math.max(1,Math.floor(g.width)),this.height=Math.max(1,Math.floor(g.height)),this.aspect=this.width/this.height,this.renderer&&this.renderer.setSize(this.width,this.height,!1)}update(){this.delta=this.clock.getDelta(),this.time+=this.delta}}const ue=new se;class de{constructor(){this.mouseMoved=!1,this.coords=new ft,this.coords_old=new ft,this.diff=new ft,this.timer=null,this.container=null,this._onMouseMove=this.onDocumentMouseMove.bind(this),this._onTouchStart=this.onDocumentTouchStart.bind(this),this._onTouchMove=this.onDocumentTouchMove.bind(this),this._onMouseEnter=this.onMouseEnter.bind(this),this._onMouseLeave=this.onMouseLeave.bind(this),this._onTouchEnd=this.onTouchEnd.bind(this),this.isHoverInside=!1,this.hasUserControl=!1,this.isAutoActive=!1,this.autoIntensity=2,this.takeoverActive=!1,this.takeoverStartTime=0,this.takeoverDuration=.25,this.takeoverFrom=new ft,this.takeoverTo=new ft,this.onInteract=null}init(g){this.container=g,g.addEventListener("mousemove",this._onMouseMove,!1),g.addEventListener("touchstart",this._onTouchStart,!1),g.addEventListener("touchmove",this._onTouchMove,!1),g.addEventListener("mouseenter",this._onMouseEnter,!1),g.addEventListener("mouseleave",this._onMouseLeave,!1),g.addEventListener("touchend",this._onTouchEnd,!1)}dispose(){this.container&&(this.container.removeEventListener("mousemove",this._onMouseMove,!1),this.container.removeEventListener("touchstart",this._onTouchStart,!1),this.container.removeEventListener("touchmove",this._onTouchMove,!1),this.container.removeEventListener("mouseenter",this._onMouseEnter,!1),this.container.removeEventListener("mouseleave",this._onMouseLeave,!1),this.container.removeEventListener("touchend",this._onTouchEnd,!1))}setCoords(g,I){if(!this.container)return;this.timer&&clearTimeout(this.timer);const $=this.container.getBoundingClientRect(),le=(g-$.left)/$.width,Z=(I-$.top)/$.height;this.coords.set(le*2-1,-(Z*2-1)),this.mouseMoved=!0,this.timer=setTimeout(()=>{this.mouseMoved=!1},100)}setNormalized(g,I){this.coords.set(g,I),this.mouseMoved=!0}onDocumentMouseMove(g){if(this.onInteract&&this.onInteract(),this.isAutoActive&&!this.hasUserControl&&!this.takeoverActive){const I=this.container.getBoundingClientRect(),$=(g.clientX-I.left)/I.width,le=(g.clientY-I.top)/I.height;this.takeoverFrom.copy(this.coords),this.takeoverTo.set($*2-1,-(le*2-1)),this.takeoverStartTime=performance.now(),this.takeoverActive=!0,this.hasUserControl=!0,this.isAutoActive=!1;return}this.setCoords(g.clientX,g.clientY),this.hasUserControl=!0}onDocumentTouchStart(g){if(g.touches.length===1){const I=g.touches[0];this.onInteract&&this.onInteract(),this.setCoords(I.pageX,I.pageY),this.hasUserControl=!0}}onDocumentTouchMove(g){if(g.touches.length===1){const I=g.touches[0];this.onInteract&&this.onInteract(),this.setCoords(I.pageX,I.pageY)}}onTouchEnd(){this.isHoverInside=!1}onMouseEnter(){this.isHoverInside=!0}onMouseLeave(){this.isHoverInside=!1}update(){if(this.takeoverActive){const g=(performance.now()-this.takeoverStartTime)/(this.takeoverDuration*1e3);if(g>=1)this.takeoverActive=!1,this.coords.copy(this.takeoverTo),this.coords_old.copy(this.coords),this.diff.set(0,0);else{const I=g*g*(3-2*g);this.coords.copy(this.takeoverFrom).lerp(this.takeoverTo,I)}}this.diff.subVectors(this.coords,this.coords_old),this.coords_old.copy(this.coords),this.coords_old.x===0&&this.coords_old.y===0&&this.diff.set(0,0),this.isAutoActive&&!this.takeoverActive&&this.diff.multiplyScalar(this.autoIntensity)}}const oe=new de;class he{constructor(g,I,$){this.mouse=g,this.manager=I,this.enabled=$.enabled,this.speed=$.speed,this.resumeDelay=$.resumeDelay||3e3,this.rampDurationMs=($.rampDuration||0)*1e3,this.active=!1,this.current=new ft(0,0),this.target=new ft,this.lastTime=performance.now(),this.activationTime=0,this.margin=.2,this._tmpDir=new ft,this.pickNewTarget()}pickNewTarget(){const g=Math.random;this.target.set((g()*2-1)*(1-this.margin),(g()*2-1)*(1-this.margin))}forceStop(){this.active=!1,this.mouse.isAutoActive=!1}update(){if(!this.enabled)return;const g=performance.now();if(g-this.manager.lastUserInteraction<this.resumeDelay){this.active&&this.forceStop();return}if(this.mouse.isHoverInside){this.active&&this.forceStop();return}if(this.active||(this.active=!0,this.current.copy(this.mouse.coords),this.lastTime=g,this.activationTime=g),!this.active)return;this.mouse.isAutoActive=!0;let $=(g-this.lastTime)/1e3;this.lastTime=g,$>.2&&($=.016);const le=this._tmpDir.subVectors(this.target,this.current),Z=le.length();if(Z<.01){this.pickNewTarget();return}le.normalize();let Le=1;if(this.rampDurationMs>0){const je=Math.min(1,(g-this.activationTime)/this.rampDurationMs);Le=je*je*(3-2*je)}const ye=this.speed*$*Le,Ue=Math.min(ye,Z);this.current.addScaledVector(le,Ue),this.mouse.setNormalized(this.current.x,this.current.y)}}const B=`
  attribute vec3 position;
  uniform vec2 px;
  uniform vec2 boundarySpace;
  varying vec2 uv;
  precision highp float;
  void main(){
  vec3 pos = position;
  vec2 scale = 1.0 - boundarySpace * 2.0;
  pos.xy = pos.xy * scale;
  uv = vec2(0.5)+(pos.xy)*0.5;
  gl_Position = vec4(pos, 1.0);
}
`,ce=`
  attribute vec3 position;
  uniform vec2 px;
  precision highp float;
  varying vec2 uv;
  void main(){
  vec3 pos = position;
  uv = 0.5 + pos.xy * 0.5;
  vec2 n = sign(pos.xy);
  pos.xy = abs(pos.xy) - px * 1.0;
  pos.xy *= n;
  gl_Position = vec4(pos, 1.0);
}
`,ae=`
    precision highp float;
    attribute vec3 position;
    attribute vec2 uv;
    uniform vec2 center;
    uniform vec2 scale;
    uniform vec2 px;
    varying vec2 vUv;
    void main(){
    vec2 pos = position.xy * scale * 2.0 * px + center;
    vUv = uv;
    gl_Position = vec4(pos, 0.0, 1.0);
}
`,N=`
    precision highp float;
    uniform sampler2D velocity;
    uniform float dt;
    uniform bool isBFECC;
    uniform vec2 fboSize;
    uniform vec2 px;
    varying vec2 uv;
    void main(){
    vec2 ratio = max(fboSize.x, fboSize.y) / fboSize;
    if(isBFECC == false){
        vec2 vel = texture2D(velocity, uv).xy;
        vec2 uv2 = uv - vel * dt * ratio;
        vec2 newVel = texture2D(velocity, uv2).xy;
        gl_FragColor = vec4(newVel, 0.0, 0.0);
    } else {
        vec2 spot_new = uv;
        vec2 vel_old = texture2D(velocity, uv).xy;
        vec2 spot_old = spot_new - vel_old * dt * ratio;
        vec2 vel_new1 = texture2D(velocity, spot_old).xy;
        vec2 spot_new2 = spot_old + vel_new1 * dt * ratio;
        vec2 error = spot_new2 - spot_new;
        vec2 spot_new3 = spot_new - error / 2.0;
        vec2 vel_2 = texture2D(velocity, spot_new3).xy;
        vec2 spot_old2 = spot_new3 - vel_2 * dt * ratio;
        vec2 newVel2 = texture2D(velocity, spot_old2).xy; 
        gl_FragColor = vec4(newVel2, 0.0, 0.0);
    }
}
`,ie=`
    precision highp float;
    uniform sampler2D velocity;
    uniform sampler2D palette;
    uniform vec4 bgColor;
    varying vec2 uv;
    void main(){
    vec2 vel = texture2D(velocity, uv).xy;
    float lenv = clamp(length(vel), 0.0, 1.0);
    vec3 c = texture2D(palette, vec2(lenv, 0.5)).rgb;
    vec3 outRGB = mix(bgColor.rgb, c, lenv);
    float outA = mix(bgColor.a, 1.0, lenv);
    gl_FragColor = vec4(outRGB, outA);
}
`,ke=`
    precision highp float;
    uniform sampler2D velocity;
    uniform float dt;
    uniform vec2 px;
    varying vec2 uv;
    void main(){
    float x0 = texture2D(velocity, uv-vec2(px.x, 0.0)).x;
    float x1 = texture2D(velocity, uv+vec2(px.x, 0.0)).x;
    float y0 = texture2D(velocity, uv-vec2(0.0, px.y)).y;
    float y1 = texture2D(velocity, uv+vec2(0.0, px.y)).y;
    float divergence = (x1 - x0 + y1 - y0) / 2.0;
    gl_FragColor = vec4(divergence / dt);
}
`,Ge=`
    precision highp float;
    uniform vec2 force;
    uniform vec2 center;
    uniform vec2 scale;
    uniform vec2 px;
    varying vec2 vUv;
    void main(){
    vec2 circle = (vUv - 0.5) * 2.0;
    float d = 1.0 - min(length(circle), 1.0);
    d *= d;
    gl_FragColor = vec4(force * d, 0.0, 1.0);
}
`,He=`
    precision highp float;
    uniform sampler2D pressure;
    uniform sampler2D divergence;
    uniform vec2 px;
    varying vec2 uv;
    void main(){
    float p0 = texture2D(pressure, uv + vec2(px.x * 2.0, 0.0)).r;
    float p1 = texture2D(pressure, uv - vec2(px.x * 2.0, 0.0)).r;
    float p2 = texture2D(pressure, uv + vec2(0.0, px.y * 2.0)).r;
    float p3 = texture2D(pressure, uv - vec2(0.0, px.y * 2.0)).r;
    float div = texture2D(divergence, uv).r;
    float newP = (p0 + p1 + p2 + p3) / 4.0 - div;
    gl_FragColor = vec4(newP);
}
`,J=`
    precision highp float;
    uniform sampler2D pressure;
    uniform sampler2D velocity;
    uniform vec2 px;
    uniform float dt;
    varying vec2 uv;
    void main(){
    float step = 1.0;
    float p0 = texture2D(pressure, uv + vec2(px.x * step, 0.0)).r;
    float p1 = texture2D(pressure, uv - vec2(px.x * step, 0.0)).r;
    float p2 = texture2D(pressure, uv + vec2(0.0, px.y * step)).r;
    float p3 = texture2D(pressure, uv - vec2(0.0, px.y * step)).r;
    vec2 v = texture2D(velocity, uv).xy;
    vec2 gradP = vec2(p0 - p1, p2 - p3) * 0.5;
    v = v - gradP * dt;
    gl_FragColor = vec4(v, 0.0, 1.0);
}
`,fe=`
    precision highp float;
    uniform sampler2D velocity;
    uniform sampler2D velocity_new;
    uniform float v;
    uniform vec2 px;
    uniform float dt;
    varying vec2 uv;
    void main(){
    vec2 old = texture2D(velocity, uv).xy;
    vec2 new0 = texture2D(velocity_new, uv + vec2(px.x * 2.0, 0.0)).xy;
    vec2 new1 = texture2D(velocity_new, uv - vec2(px.x * 2.0, 0.0)).xy;
    vec2 new2 = texture2D(velocity_new, uv + vec2(0.0, px.y * 2.0)).xy;
    vec2 new3 = texture2D(velocity_new, uv - vec2(0.0, px.y * 2.0)).xy;
    vec2 newv = 4.0 * old + v * dt * (new0 + new1 + new2 + new3);
    newv /= 4.0 * (1.0 + v * dt);
    gl_FragColor = vec4(newv, 0.0, 0.0);
}
`;class _e{constructor(g){var I;this.props=g||{},this.uniforms=(I=this.props.material)==null?void 0:I.uniforms,this.scene=null,this.camera=null,this.material=null,this.geometry=null,this.plane=null}init(){this.scene=new qp,this.camera=new Rl,this.uniforms&&(this.material=new ml(this.props.material),this.geometry=new jr(2,2),this.plane=new Qn(this.geometry,this.material),this.scene.add(this.plane))}update(){ue.renderer.setRenderTarget(this.props.output||null),ue.renderer.render(this.scene,this.camera),ue.renderer.setRenderTarget(null)}}class De extends _e{constructor(g){super({material:{vertexShader:B,fragmentShader:N,uniforms:{boundarySpace:{value:g.cellScale},px:{value:g.cellScale},fboSize:{value:g.fboSize},velocity:{value:g.src.texture},dt:{value:g.dt},isBFECC:{value:!0}}},output:g.dst}),this.uniforms=this.props.material.uniforms,this.init()}init(){super.init(),this.createBoundary()}createBoundary(){const g=new Vi,I=new Float32Array([-1,-1,0,-1,1,0,-1,1,0,1,1,0,1,1,0,1,-1,0,1,-1,0,-1,-1,0]);g.setAttribute("position",new di(I,3));const $=new ml({vertexShader:ce,fragmentShader:N,uniforms:this.uniforms});this.line=new f0(g,$),this.scene.add(this.line)}update({dt:g,isBounce:I,BFECC:$}){this.uniforms.dt.value=g,this.line.visible=I,this.uniforms.isBFECC.value=$,super.update()}}class Ne extends _e{constructor(g){super({output:g.dst}),this.init(g)}init(g){super.init();const I=new jr(1,1),$=new ml({vertexShader:ae,fragmentShader:Ge,blending:Yc,depthWrite:!1,uniforms:{px:{value:g.cellScale},force:{value:new ft(0,0)},center:{value:new ft(0,0)},scale:{value:new ft(g.cursor_size,g.cursor_size)}}});this.mouse=new Qn(I,$),this.scene.add(this.mouse)}update(g){const I=oe.diff.x/2*g.mouse_force,$=oe.diff.y/2*g.mouse_force,le=g.cursor_size*g.cellScale.x,Z=g.cursor_size*g.cellScale.y,Le=Math.min(Math.max(oe.coords.x,-1+le+g.cellScale.x*2),1-le-g.cellScale.x*2),ye=Math.min(Math.max(oe.coords.y,-1+Z+g.cellScale.y*2),1-Z-g.cellScale.y*2),Ue=this.mouse.material.uniforms;Ue.force.value.set(I,$),Ue.center.value.set(Le,ye),Ue.scale.value.set(g.cursor_size,g.cursor_size),super.update()}}class dt extends _e{constructor(g){super({material:{vertexShader:B,fragmentShader:fe,uniforms:{boundarySpace:{value:g.boundarySpace},velocity:{value:g.src.texture},velocity_new:{value:g.dst_.texture},v:{value:g.viscous},px:{value:g.cellScale},dt:{value:g.dt}}},output:g.dst,output0:g.dst_,output1:g.dst}),this.init()}update({viscous:g,iterations:I,dt:$}){let le,Z;this.uniforms.v.value=g;for(let Le=0;Le<I;Le++)Le%2===0?(le=this.props.output0,Z=this.props.output1):(le=this.props.output1,Z=this.props.output0),this.uniforms.velocity_new.value=le.texture,this.props.output=Z,this.uniforms.dt.value=$,super.update();return Z}}class Wt extends _e{constructor(g){super({material:{vertexShader:B,fragmentShader:ke,uniforms:{boundarySpace:{value:g.boundarySpace},velocity:{value:g.src.texture},px:{value:g.cellScale},dt:{value:g.dt}}},output:g.dst}),this.init()}update({vel:g}){this.uniforms.velocity.value=g.texture,super.update()}}class U extends _e{constructor(g){super({material:{vertexShader:B,fragmentShader:He,uniforms:{boundarySpace:{value:g.boundarySpace},pressure:{value:g.dst_.texture},divergence:{value:g.src.texture},px:{value:g.cellScale}}},output:g.dst,output0:g.dst_,output1:g.dst}),this.init()}update({iterations:g}){let I,$;for(let le=0;le<g;le++)le%2===0?(I=this.props.output0,$=this.props.output1):(I=this.props.output1,$=this.props.output0),this.uniforms.pressure.value=I.texture,this.props.output=$,super.update();return $}}class At extends _e{constructor(g){super({material:{vertexShader:B,fragmentShader:J,uniforms:{boundarySpace:{value:g.boundarySpace},pressure:{value:g.src_p.texture},velocity:{value:g.src_v.texture},px:{value:g.cellScale},dt:{value:g.dt}}},output:g.dst}),this.init()}update({vel:g,pressure:I}){this.uniforms.velocity.value=g.texture,this.uniforms.pressure.value=I.texture,super.update()}}class st{constructor(g){this.options={iterations_poisson:32,iterations_viscous:32,mouse_force:20,resolution:.5,cursor_size:100,viscous:30,isBounce:!1,dt:.014,isViscous:!1,BFECC:!0,...g},this.fbos={vel_0:null,vel_1:null,vel_viscous0:null,vel_viscous1:null,div:null,pressure_0:null,pressure_1:null},this.fboSize=new ft,this.cellScale=new ft,this.boundarySpace=new ft,this.init()}init(){this.calcSize(),this.createAllFBO(),this.createShaderPass()}getFloatType(){return/(iPad|iPhone|iPod)/i.test(navigator.userAgent)?Hs:_i}createAllFBO(){const I={type:this.getFloatType(),depthBuffer:!1,stencilBuffer:!1,minFilter:Pn,magFilter:Pn,wrapS:fi,wrapT:fi};for(let $ in this.fbos)this.fbos[$]=new xr(this.fboSize.x,this.fboSize.y,I)}createShaderPass(){this.advection=new De({cellScale:this.cellScale,fboSize:this.fboSize,dt:this.options.dt,src:this.fbos.vel_0,dst:this.fbos.vel_1}),this.externalForce=new Ne({cellScale:this.cellScale,cursor_size:this.options.cursor_size,dst:this.fbos.vel_1}),this.viscous=new dt({cellScale:this.cellScale,boundarySpace:this.boundarySpace,viscous:this.options.viscous,src:this.fbos.vel_1,dst:this.fbos.vel_viscous1,dst_:this.fbos.vel_viscous0,dt:this.options.dt}),this.divergence=new Wt({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src:this.fbos.vel_viscous0,dst:this.fbos.div,dt:this.options.dt}),this.poisson=new U({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src:this.fbos.div,dst:this.fbos.pressure_1,dst_:this.fbos.pressure_0}),this.pressure=new At({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src_p:this.fbos.pressure_0,src_v:this.fbos.vel_viscous0,dst:this.fbos.vel_0,dt:this.options.dt})}calcSize(){const g=Math.max(1,Math.round(this.options.resolution*ue.width)),I=Math.max(1,Math.round(this.options.resolution*ue.height)),$=1/g,le=1/I;this.cellScale.set($,le),this.fboSize.set(g,I)}resize(){this.calcSize();for(let g in this.fbos)this.fbos[g].setSize(this.fboSize.x,this.fboSize.y)}update(){this.options.isBounce?this.boundarySpace.set(0,0):this.boundarySpace.copy(this.cellScale),this.advection.update({dt:this.options.dt,isBounce:this.options.isBounce,BFECC:this.options.BFECC}),this.externalForce.update({cursor_size:this.options.cursor_size,mouse_force:this.options.mouse_force,cellScale:this.cellScale});let g=this.fbos.vel_1;this.options.isViscous&&(g=this.viscous.update({viscous:this.options.viscous,iterations:this.options.iterations_viscous,dt:this.options.dt})),this.divergence.update({vel:g});const I=this.poisson.update({iterations:this.options.iterations_poisson});this.pressure.update({vel:g,pressure:I})}}class Je{constructor(){this.init()}init(){this.simulation=new st,this.scene=new qp,this.camera=new Rl,this.output=new Qn(new jr(2,2),new ml({vertexShader:B,fragmentShader:ie,transparent:!0,depthWrite:!1,uniforms:{velocity:{value:this.simulation.fbos.vel_0.texture},boundarySpace:{value:new ft},palette:{value:H},bgColor:{value:Q}}})),this.scene.add(this.output)}addScene(g){this.scene.add(g)}resize(){this.simulation.resize()}render(){ue.renderer.setRenderTarget(null),ue.renderer.render(this.scene,this.camera)}update(){this.simulation.update(),this.render()}}class Ve{constructor(g){this.props=g,ue.init(g.$wrapper),oe.init(g.$wrapper),oe.autoIntensity=g.autoIntensity,oe.takeoverDuration=g.takeoverDuration,this.lastUserInteraction=performance.now(),oe.onInteract=()=>{this.lastUserInteraction=performance.now(),this.autoDriver&&this.autoDriver.forceStop()},this.autoDriver=new he(oe,this,{enabled:g.autoDemo,speed:g.autoSpeed,resumeDelay:g.autoResumeDelay,rampDuration:g.autoRampDuration}),this.init(),this._loop=this.loop.bind(this),this._resize=this.resize.bind(this),window.addEventListener("resize",this._resize),this._onVisibility=()=>{document.hidden?this.pause():Y.current&&this.start()},document.addEventListener("visibilitychange",this._onVisibility),this.running=!1}init(){this.props.$wrapper.prepend(ue.renderer.domElement),this.output=new Je}resize(){ue.resize(),this.output.resize()}render(){this.autoDriver&&this.autoDriver.update(),oe.update(),ue.update(),this.output.update()}loop(){this.running&&(this.render(),k.current=requestAnimationFrame(this._loop))}start(){this.running||(this.running=!0,this._loop())}pause(){this.running=!1,k.current&&(cancelAnimationFrame(k.current),k.current=null)}dispose(){try{if(window.removeEventListener("resize",this._resize),document.removeEventListener("visibilitychange",this._onVisibility),oe.dispose(),ue.renderer){const g=ue.renderer.domElement;g&&g.parentNode&&g.parentNode.removeChild(g),ue.renderer.dispose()}}catch{}}}const _t=L.current;_t.style.position=_t.style.position||"relative",_t.style.overflow=_t.style.overflow||"hidden";const ze=new Ve({$wrapper:_t,autoDemo:M,autoSpeed:w,autoIntensity:A,takeoverDuration:y,autoResumeDelay:v,autoRampDuration:F});b.current=ze,(()=>{var I;if(!b.current)return;const C=(I=b.current.output)==null?void 0:I.simulation;if(!C)return;const g=C.options.resolution;Object.assign(C.options,{mouse_force:o,cursor_size:e,isViscous:n,viscous:r,iterations_viscous:a,iterations_poisson:u,dt:f,BFECC:d,resolution:m,isBounce:p}),m!==g&&C.resize()})(),ze.start();const Pt=new IntersectionObserver(C=>{const g=C[0],I=g.isIntersecting&&g.intersectionRatio>0;Y.current=I,b.current&&(I&&!document.hidden?b.current.start():b.current.pause())},{threshold:[0,.01,.1]});Pt.observe(_t),z.current=Pt;const Dt=new ResizeObserver(()=>{b.current&&(P.current&&cancelAnimationFrame(P.current),P.current=requestAnimationFrame(()=>{b.current&&b.current.resize()}))});return Dt.observe(_t),V.current=Dt,()=>{if(k.current&&cancelAnimationFrame(k.current),V.current)try{V.current.disconnect()}catch{}if(z.current)try{z.current.disconnect()}catch{}b.current&&b.current.dispose(),b.current=null}},[d,e,f,p,n,u,a,o,m,r,_,M,w,A,y,v,F]),Bn.useEffect(()=>{var se;const R=b.current;if(!R)return;const H=(se=R.output)==null?void 0:se.simulation;if(!H)return;const Q=H.options.resolution;Object.assign(H.options,{mouse_force:o,cursor_size:e,isViscous:n,viscous:r,iterations_viscous:a,iterations_poisson:u,dt:f,BFECC:d,resolution:m,isBounce:p}),R.autoDriver&&(R.autoDriver.enabled=M,R.autoDriver.speed=w,R.autoDriver.resumeDelay=v,R.autoDriver.rampDurationMs=F*1e3,R.autoDriver.mouse&&(R.autoDriver.mouse.autoIntensity=A,R.autoDriver.mouse.takeoverDuration=y)),m!==Q&&H.resize()},[o,e,n,r,a,u,f,d,m,p,M,w,A,y,v,F]),pe.jsx("div",{ref:L,className:`w-full h-full relative overflow-hidden ${S||""}`,style:x})}function tE(){const[o,e]=Bn.useState(!1),n=Bn.useRef(null),r=()=>{e(!o)},a=()=>{e(!1)};return Bn.useEffect(()=>{const u=f=>{if(n.current){const d=n.current.querySelector("canvas");if(d){const m=new MouseEvent("mousemove",{clientX:f.clientX,clientY:f.clientY,bubbles:!0});d.dispatchEvent(m)}}};return document.addEventListener("mousemove",u),()=>document.removeEventListener("mousemove",u)},[]),pe.jsxs(pe.Fragment,{children:[pe.jsx("div",{ref:n,style:{position:"fixed",top:0,left:0,width:"100vw",height:"100vh",zIndex:0},children:pe.jsx(eE,{colors:["#5227FF","#FF9FFC","#B19EEF"],mouseForce:20,cursorSize:100,isViscous:!1,viscous:30,iterationsViscous:32,iterationsPoisson:32,resolution:.5,isBounce:!1,autoDemo:!0,autoSpeed:.5,autoIntensity:2.2,takeoverDuration:.25,autoResumeDelay:3e3,autoRampDuration:.6})}),pe.jsxs("div",{className:"relative min-h-screen text-white",style:{position:"relative",zIndex:1},children:[pe.jsx("header",{className:"sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/70 bg-black/80 border-b border-b-zinc-800",children:pe.jsxs("nav",{className:"mx-auto max-w-6xl px-4 md:px-6",children:[pe.jsxs("div",{className:"h-16 flex items-center justify-between",children:[pe.jsx("a",{href:"#top",className:"text-lg font-bold text-purple-400 tracking-widest",children:"sebkucera.dev"}),pe.jsx("button",{onClick:r,className:"md:hidden inline-flex items-center justify-center rounded-lg p-2 hover:bg-purple-600/20 focus:outline-none text-purple-400","aria-label":"Open menu",children:pe.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",className:"pointer-events-none",children:pe.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 6h16M4 12h16M4 18h16"})})}),pe.jsxs("ul",{className:"hidden md:flex items-center gap-6 text-sm text-purple-400 transition-colors duration-200",children:[pe.jsx("li",{children:pe.jsx("a",{className:"hover:text-purple-300 font-bold tracking-widest",href:"#about",children:"About"})}),pe.jsx("li",{children:pe.jsx("a",{className:"hover:text-purple-300 font-bold tracking-widest",href:"#skills",children:"Skills"})}),pe.jsx("li",{children:pe.jsx("a",{className:"hover:text-purple-300 font-bold tracking-widest",href:"#projects",children:"Projects"})}),pe.jsx("li",{children:pe.jsx("a",{className:"hover:text-purple-300 font-bold tracking-widest",href:"#contact",children:"Contact"})})]})]}),pe.jsx("div",{className:`md:hidden border-t border-purple-500/30 py-2 ${o?"":"hidden"}`,children:pe.jsxs("ul",{className:"grid gap-2 py-2 text-sm",children:[pe.jsx("li",{children:pe.jsx("a",{className:"block px-2 py-2 rounded-lg hover:bg-purple-600/20 text-purple-300 hover:text-purple-200",href:"#about",onClick:a,children:"About"})}),pe.jsx("li",{children:pe.jsx("a",{className:"block px-2 py-2 rounded-lg hover:bg-purple-600/20 text-purple-300 hover:text-purple-200",href:"#skills",onClick:a,children:"Skills"})}),pe.jsx("li",{children:pe.jsx("a",{className:"block px-2 py-2 rounded-lg hover:bg-purple-600/20 text-purple-300 hover:text-purple-200",href:"#projects",onClick:a,children:"Projects"})}),pe.jsx("li",{children:pe.jsx("a",{className:"block px-2 py-2 rounded-lg hover:bg-purple-600/20 text-purple-300 hover:text-purple-200",href:"#contact",onClick:a,children:"Contact"})})]})})]})}),pe.jsxs("main",{id:"top",className:"mx-auto max-w-6xl px-4 md:px-6",children:[pe.jsx("section",{className:"pt-20 md:pt-28 pb-14",children:pe.jsxs("div",{className:"grid items-center gap-10 md:grid-cols-2",children:[pe.jsxs("div",{children:[pe.jsx("h1",{className:"text-4xl/tight md:text-5xl/tight font-bold tracking-tight",children:"Sebastian Kučera"}),pe.jsx("p",{className:"mt-3 text-lg",children:"iOS Developer • Swift / SwiftUI • Student in Prague"}),pe.jsxs("div",{className:"mt-8 flex items-center gap-3",children:[pe.jsx("a",{href:"#projects",className:"inline-flex items-center rounded-2xl px-5 py-3 bg-zinc-900 text-white hover:bg-zinc-800 transition",children:"View Projects"}),pe.jsx("a",{href:"#contact",className:"inline-flex items-center px-5 py-3 hover:text-zinc-400 transition",children:"Contact"})]})]}),pe.jsxs("div",{className:"content-center flex flex-col items-center",children:[pe.jsxs("div",{className:"grid w-full gap-4 md:grid-cols-2 max-w-sm sm:max-w-md md:max-w-2xl",children:[pe.jsx("img",{src:"/images/main-portrait.png",alt:"Main app screen",className:"block w-56 sm:w-64 md:w-full h-auto mx-auto rounded-xl",loading:"lazy"}),pe.jsx("img",{src:"/images/settings-portrait.png",alt:"Settings screen",className:"block w-56 sm:w-64 md:w-full h-auto mx-auto rounded-xl",loading:"lazy"})]}),pe.jsx("div",{className:"mt-6 text-center w-full max-w-sm sm:max-w-md md:max-w-2xl",children:pe.jsx("p",{className:"text-sm",children:"Currently building a strength-training app in SwiftUI to track progress efficiently."})})]})]})}),pe.jsx("section",{id:"about",className:"py-14 border-t border-zinc-200",children:pe.jsxs("div",{className:"max-w-3xl",children:[pe.jsx("h2",{className:"text-2xl font-semibold tracking-tight",children:"About"}),pe.jsx("p",{className:"mt-4 leading-relaxed",children:"Hi, I'm Sebastian - a student of Software engineering at Unicorn University and an iOS developer focused on Swift & SwiftUI. I love working on ambitious projects like my fitness app, and I'm always up for learning, collaborating, and shipping clean, thoughtful interfaces."}),pe.jsx("p",{className:"mt-4 leading-relaxed",children:"Outside coding I'm into training and staying active. If you're interested in working together, feel free to reach out."})]})}),pe.jsxs("section",{id:"skills",className:"py-14 border-t border-zinc-200",children:[pe.jsx("h2",{className:"text-2xl font-semibold tracking-tight",children:"Skills"}),pe.jsxs("div",{className:"mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",children:[pe.jsxs("article",{className:"p-5 hover:shadow-sm transition",children:[pe.jsx("h3",{className:"font-bold",children:"Swift / SwiftUI"}),pe.jsx("p",{className:"mt-2 text-sm",children:"Modern iOS development with declarative and imperative UI stacks."})]}),pe.jsxs("article",{className:"p-5 hover:shadow-sm transition",children:[pe.jsx("h3",{className:"font-bold",children:"Java"}),pe.jsx("p",{className:"mt-2 text-sm",children:"Object‑oriented foundations, APIs, and tooling."})]}),pe.jsxs("article",{className:"p-5 hover:shadow-sm transition",children:[pe.jsx("h3",{className:"font-bold",children:"JavaScript / Web"}),pe.jsx("p",{className:"mt-2 text-sm",children:"Interactive UIs, TailwindCSS, and lightweight tooling."})]}),pe.jsxs("article",{className:"p-5 hover:shadow-sm transition",children:[pe.jsx("h3",{className:"font-bold",children:"Design"}),pe.jsx("p",{className:"mt-2 text-sm",children:"Minimal, accessible interfaces with focus on typography and spacing."})]})]})]}),pe.jsxs("section",{id:"projects",className:"py-14 border-t border-zinc-200",children:[pe.jsxs("div",{className:"flex items-end justify-between gap-4",children:[pe.jsx("h2",{className:"text-2xl font-semibold tracking-tight",children:"Projects"}),pe.jsx("a",{href:"https://github.com/Rektoooooo",target:"_blank",rel:"noopener noreferrer",className:"text-sm hover:text-zinc-400",children:"All on GitHub →"})]}),pe.jsxs("div",{className:"mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3",children:[pe.jsxs("a",{href:"https://sebkucera.dev/Fitness",target:"_blank",rel:"noopener noreferrer",className:"group hover:shadow-sm transition flex flex-col items-center",children:[pe.jsx("img",{src:"/images/main-portrait.png",alt:"Main app screen",className:"w-64 rounded-xl object-cover",loading:"lazy"}),pe.jsxs("div",{className:"p-5",children:[pe.jsx("h3",{className:"font-bold group-hover:opacity-60 text-center",children:"Fitness App"}),pe.jsx("p",{className:"mt-2 text-sm text-zinc-400",children:"Track strength progress and optimize workouts."})]})]}),pe.jsxs("a",{href:"https://github.com/Rektoooooo/SwiftUIBattleShips/tree/main/Battleship-SwiftUI",target:"_blank",rel:"noopener noreferrer",className:"group hover:shadow-sm transition flex flex-col items-center",children:[pe.jsx("img",{src:"/images/battle-ships-portrait.png",alt:"Main app screen",className:"w-64 rounded-xl object-cover",loading:"lazy"}),pe.jsxs("div",{className:"p-5",children:[pe.jsx("h3",{className:"font-bold group-hover:opacity-60 text-center",children:"BattleShips"}),pe.jsx("p",{className:"mt-2 text-sm text-zinc-400",children:"Smart Battleship opponent with UI and features."})]})]}),pe.jsxs("a",{href:"https://apps.apple.com/us/app/fl-smart-id-thales/id1560687532",target:"_blank",rel:"noopener noreferrer",className:"group hover:shadow-sm transition flex flex-col items-center",children:[pe.jsx("img",{src:"/images/thales-portrait.png",alt:"Main app screen",className:"w-64 rounded-xl object-cover",loading:"lazy"}),pe.jsxs("div",{className:"p-5",children:[pe.jsx("h3",{className:"font-bold group-hover:opacity-60 text-center",children:"SwiftUI – Smart ID sample"}),pe.jsx("p",{className:"mt-2 text-sm text-zinc-400",children:"Sample app work for Smart ID SDK."})]})]}),pe.jsxs("a",{href:"https://github.com/Rektoooooo/Pushly",target:"_blank",rel:"noopener noreferrer",className:"group hover:shadow-sm transition flex flex-col items-center",children:[pe.jsx("img",{src:"/images/pushly-portrait.png",alt:"Main app screen",className:"w-64 rounded-xl object-cover",loading:"lazy"}),pe.jsxs("div",{className:"p-5",children:[pe.jsx("h3",{className:"font-bold group-hover:opacity-60 text-center",children:"Pushly"}),pe.jsx("p",{className:"mt-2 text-sm text-zinc-400",children:"SwiftUI app that nudges people to exercise."})]})]}),pe.jsxs("a",{href:"https://github.com/Rektoooooo/Rick-Morty",target:"_blank",rel:"noopener noreferrer",className:"group hover:shadow-sm transition flex flex-col items-center",children:[pe.jsx("img",{src:"/images/rick-portrait.png",alt:"Main app screen",className:"w-64 rounded-xl object-cover",loading:"lazy"}),pe.jsxs("div",{className:"p-5",children:[pe.jsx("h3",{className:"font-bold group-hover:opacity-60 text-center",children:"API Fetch – Rick & Morty"}),pe.jsx("p",{className:"mt-2 text-sm text-zinc-400",children:"Simple API client built in SwiftUI."})]})]})]})]}),pe.jsxs("section",{id:"contact",className:"py-14 border-t border-zinc-200",children:[pe.jsx("h2",{className:"text-2xl font-semibold tracking-tight",children:"Contact"}),pe.jsxs("div",{className:"mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4",children:[pe.jsxs("a",{href:"mailto:sebastian.kucera@icloud.com",className:"p-5 hover:shadow-sm transition",children:[pe.jsx("h3",{className:"font-bold",children:"Email"}),pe.jsx("p",{className:"mt-2 text-sm text-zinc-400",children:"sebastian.kucera@icloud.com"})]}),pe.jsxs("a",{href:"https://www.linkedin.com/in/sebastian-kucera-31719b1b0/",target:"_blank",rel:"noopener noreferrer",className:"p-5 hover:shadow-sm transition",children:[pe.jsx("h3",{className:"font-bold",children:"LinkedIn"}),pe.jsx("p",{className:"mt-2 text-sm text-zinc-400",children:"Professional profile"})]}),pe.jsxs("a",{href:"https://github.com/Rektoooooo",target:"_blank",rel:"noopener noreferrer",className:"p-5 hover:shadow-sm transition",children:[pe.jsx("h3",{className:"font-bold",children:"GitHub"}),pe.jsx("p",{className:"mt-2 text-sm text-zinc-400",children:"Projects & code"})]}),pe.jsxs("a",{href:"https://www.instagram.com/seb.kuc/",target:"_blank",rel:"noopener noreferrer",className:"p-5 hover:shadow-sm transition",children:[pe.jsx("h3",{className:"font-bold",children:"Instagram"}),pe.jsx("p",{className:"mt-2 text-sm text-zinc-400",children:"Personal"})]})]})]})]}),pe.jsx("footer",{className:"border-t border-t-zinc-800 backdrop-blur supports-[backdrop-filter]:bg-black/70 bg-black/80",children:pe.jsxs("div",{className:"mx-auto max-w-6xl px-4 md:px-6 py-10 text-sm text-zinc-400 font-bold",children:[pe.jsx("p",{children:"© 2025 sebkucera.dev. All rights reserved."}),pe.jsxs("p",{className:"mt-2",children:["Connect on"," ",pe.jsx("a",{className:"underline decoration-zinc-300 hover:decoration-zinc-800",href:"https://www.linkedin.com/in/sebastian-kucera-31719b1b0/",target:"_blank",rel:"noopener noreferrer",children:"LinkedIn"})," ","and"," ",pe.jsx("a",{className:"underline decoration-zinc-300 hover:decoration-zinc-800",href:"https://github.com/Rektoooooo",target:"_blank",rel:"noopener noreferrer",children:"GitHub"}),"."]})]})})]})]})}Gv.createRoot(document.getElementById("root")).render(pe.jsx(Fv.StrictMode,{children:pe.jsx(tE,{})}));
