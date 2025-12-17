(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function By(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Wg={exports:{}},cc={},Xg={exports:{}},Ge={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var il=Symbol.for("react.element"),Vy=Symbol.for("react.portal"),Hy=Symbol.for("react.fragment"),Gy=Symbol.for("react.strict_mode"),Wy=Symbol.for("react.profiler"),Xy=Symbol.for("react.provider"),jy=Symbol.for("react.context"),Yy=Symbol.for("react.forward_ref"),qy=Symbol.for("react.suspense"),$y=Symbol.for("react.memo"),Ky=Symbol.for("react.lazy"),gm=Symbol.iterator;function Zy(n){return n===null||typeof n!="object"?null:(n=gm&&n[gm]||n["@@iterator"],typeof n=="function"?n:null)}var jg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Yg=Object.assign,qg={};function Bo(n,e,t){this.props=n,this.context=e,this.refs=qg,this.updater=t||jg}Bo.prototype.isReactComponent={};Bo.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};Bo.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function $g(){}$g.prototype=Bo.prototype;function Wh(n,e,t){this.props=n,this.context=e,this.refs=qg,this.updater=t||jg}var Xh=Wh.prototype=new $g;Xh.constructor=Wh;Yg(Xh,Bo.prototype);Xh.isPureReactComponent=!0;var vm=Array.isArray,Kg=Object.prototype.hasOwnProperty,jh={current:null},Zg={key:!0,ref:!0,__self:!0,__source:!0};function Qg(n,e,t){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Kg.call(e,i)&&!Zg.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(n&&n.defaultProps)for(i in a=n.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:il,type:n,key:s,ref:o,props:r,_owner:jh.current}}function Qy(n,e){return{$$typeof:il,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function Yh(n){return typeof n=="object"&&n!==null&&n.$$typeof===il}function Jy(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var xm=/\/+/g;function Nc(n,e){return typeof n=="object"&&n!==null&&n.key!=null?Jy(""+n.key):e.toString(36)}function su(n,e,t,i,r){var s=typeof n;(s==="undefined"||s==="boolean")&&(n=null);var o=!1;if(n===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(n.$$typeof){case il:case Vy:o=!0}}if(o)return o=n,r=r(o),n=i===""?"."+Nc(o,0):i,vm(r)?(t="",n!=null&&(t=n.replace(xm,"$&/")+"/"),su(r,e,t,"",function(u){return u})):r!=null&&(Yh(r)&&(r=Qy(r,t+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(xm,"$&/")+"/")+n)),e.push(r)),1;if(o=0,i=i===""?".":i+":",vm(n))for(var a=0;a<n.length;a++){s=n[a];var l=i+Nc(s,a);o+=su(s,e,t,l,r)}else if(l=Zy(n),typeof l=="function")for(n=l.call(n),a=0;!(s=n.next()).done;)s=s.value,l=i+Nc(s,a++),o+=su(s,e,t,l,r);else if(s==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function _l(n,e,t){if(n==null)return n;var i=[],r=0;return su(n,i,"","",function(s){return e.call(t,s,r++)}),i}function eS(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var cn={current:null},ou={transition:null},tS={ReactCurrentDispatcher:cn,ReactCurrentBatchConfig:ou,ReactCurrentOwner:jh};function Jg(){throw Error("act(...) is not supported in production builds of React.")}Ge.Children={map:_l,forEach:function(n,e,t){_l(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return _l(n,function(){e++}),e},toArray:function(n){return _l(n,function(e){return e})||[]},only:function(n){if(!Yh(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};Ge.Component=Bo;Ge.Fragment=Hy;Ge.Profiler=Wy;Ge.PureComponent=Wh;Ge.StrictMode=Gy;Ge.Suspense=qy;Ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=tS;Ge.act=Jg;Ge.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var i=Yg({},n.props),r=n.key,s=n.ref,o=n._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=jh.current),e.key!==void 0&&(r=""+e.key),n.type&&n.type.defaultProps)var a=n.type.defaultProps;for(l in e)Kg.call(e,l)&&!Zg.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:il,type:n.type,key:r,ref:s,props:i,_owner:o}};Ge.createContext=function(n){return n={$$typeof:jy,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:Xy,_context:n},n.Consumer=n};Ge.createElement=Qg;Ge.createFactory=function(n){var e=Qg.bind(null,n);return e.type=n,e};Ge.createRef=function(){return{current:null}};Ge.forwardRef=function(n){return{$$typeof:Yy,render:n}};Ge.isValidElement=Yh;Ge.lazy=function(n){return{$$typeof:Ky,_payload:{_status:-1,_result:n},_init:eS}};Ge.memo=function(n,e){return{$$typeof:$y,type:n,compare:e===void 0?null:e}};Ge.startTransition=function(n){var e=ou.transition;ou.transition={};try{n()}finally{ou.transition=e}};Ge.unstable_act=Jg;Ge.useCallback=function(n,e){return cn.current.useCallback(n,e)};Ge.useContext=function(n){return cn.current.useContext(n)};Ge.useDebugValue=function(){};Ge.useDeferredValue=function(n){return cn.current.useDeferredValue(n)};Ge.useEffect=function(n,e){return cn.current.useEffect(n,e)};Ge.useId=function(){return cn.current.useId()};Ge.useImperativeHandle=function(n,e,t){return cn.current.useImperativeHandle(n,e,t)};Ge.useInsertionEffect=function(n,e){return cn.current.useInsertionEffect(n,e)};Ge.useLayoutEffect=function(n,e){return cn.current.useLayoutEffect(n,e)};Ge.useMemo=function(n,e){return cn.current.useMemo(n,e)};Ge.useReducer=function(n,e,t){return cn.current.useReducer(n,e,t)};Ge.useRef=function(n){return cn.current.useRef(n)};Ge.useState=function(n){return cn.current.useState(n)};Ge.useSyncExternalStore=function(n,e,t){return cn.current.useSyncExternalStore(n,e,t)};Ge.useTransition=function(){return cn.current.useTransition()};Ge.version="18.3.1";Xg.exports=Ge;var Dt=Xg.exports;const ps=By(Dt);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nS=Dt,iS=Symbol.for("react.element"),rS=Symbol.for("react.fragment"),sS=Object.prototype.hasOwnProperty,oS=nS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,aS={key:!0,ref:!0,__self:!0,__source:!0};function ev(n,e,t){var i,r={},s=null,o=null;t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)sS.call(e,i)&&!aS.hasOwnProperty(i)&&(r[i]=e[i]);if(n&&n.defaultProps)for(i in e=n.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:iS,type:n,key:s,ref:o,props:r,_owner:oS.current}}cc.Fragment=rS;cc.jsx=ev;cc.jsxs=ev;Wg.exports=cc;var Z=Wg.exports,tv={exports:{}},Hn={},nv={exports:{}},iv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(I,q){var Q=I.length;I.push(q);e:for(;0<Q;){var ae=Q-1>>>1,me=I[ae];if(0<r(me,q))I[ae]=q,I[Q]=me,Q=ae;else break e}}function t(I){return I.length===0?null:I[0]}function i(I){if(I.length===0)return null;var q=I[0],Q=I.pop();if(Q!==q){I[0]=Q;e:for(var ae=0,me=I.length,We=me>>>1;ae<We;){var Ne=2*(ae+1)-1,Ue=I[Ne],K=Ne+1,ee=I[K];if(0>r(Ue,Q))K<me&&0>r(ee,Ue)?(I[ae]=ee,I[K]=Q,ae=K):(I[ae]=Ue,I[Ne]=Q,ae=Ne);else if(K<me&&0>r(ee,Q))I[ae]=ee,I[K]=Q,ae=K;else break e}}return q}function r(I,q){var Q=I.sortIndex-q.sortIndex;return Q!==0?Q:I.id-q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();n.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,d=null,h=3,p=!1,v=!1,m=!1,_=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,x=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function S(I){for(var q=t(u);q!==null;){if(q.callback===null)i(u);else if(q.startTime<=I)i(u),q.sortIndex=q.expirationTime,e(l,q);else break;q=t(u)}}function y(I){if(m=!1,S(I),!v)if(t(l)!==null)v=!0,B(E);else{var q=t(u);q!==null&&$(y,q.startTime-I)}}function E(I,q){v=!1,m&&(m=!1,f(b),b=-1),p=!0;var Q=h;try{for(S(q),d=t(l);d!==null&&(!(d.expirationTime>q)||I&&!P());){var ae=d.callback;if(typeof ae=="function"){d.callback=null,h=d.priorityLevel;var me=ae(d.expirationTime<=q);q=n.unstable_now(),typeof me=="function"?d.callback=me:d===t(l)&&i(l),S(q)}else i(l);d=t(l)}if(d!==null)var We=!0;else{var Ne=t(u);Ne!==null&&$(y,Ne.startTime-q),We=!1}return We}finally{d=null,h=Q,p=!1}}var w=!1,A=null,b=-1,M=5,T=-1;function P(){return!(n.unstable_now()-T<M)}function F(){if(A!==null){var I=n.unstable_now();T=I;var q=!0;try{q=A(!0,I)}finally{q?z():(w=!1,A=null)}}else w=!1}var z;if(typeof x=="function")z=function(){x(F)};else if(typeof MessageChannel<"u"){var X=new MessageChannel,j=X.port2;X.port1.onmessage=F,z=function(){j.postMessage(null)}}else z=function(){_(F,0)};function B(I){A=I,w||(w=!0,z())}function $(I,q){b=_(function(){I(n.unstable_now())},q)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(I){I.callback=null},n.unstable_continueExecution=function(){v||p||(v=!0,B(E))},n.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<I?Math.floor(1e3/I):5},n.unstable_getCurrentPriorityLevel=function(){return h},n.unstable_getFirstCallbackNode=function(){return t(l)},n.unstable_next=function(I){switch(h){case 1:case 2:case 3:var q=3;break;default:q=h}var Q=h;h=q;try{return I()}finally{h=Q}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(I,q){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var Q=h;h=I;try{return q()}finally{h=Q}},n.unstable_scheduleCallback=function(I,q,Q){var ae=n.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?ae+Q:ae):Q=ae,I){case 1:var me=-1;break;case 2:me=250;break;case 5:me=1073741823;break;case 4:me=1e4;break;default:me=5e3}return me=Q+me,I={id:c++,callback:q,priorityLevel:I,startTime:Q,expirationTime:me,sortIndex:-1},Q>ae?(I.sortIndex=Q,e(u,I),t(l)===null&&I===t(u)&&(m?(f(b),b=-1):m=!0,$(y,Q-ae))):(I.sortIndex=me,e(l,I),v||p||(v=!0,B(E))),I},n.unstable_shouldYield=P,n.unstable_wrapCallback=function(I){var q=h;return function(){var Q=h;h=q;try{return I.apply(this,arguments)}finally{h=Q}}}})(iv);nv.exports=iv;var lS=nv.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uS=Dt,zn=lS;function te(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var rv=new Set,Ra={};function bs(n,e){Mo(n,e),Mo(n+"Capture",e)}function Mo(n,e){for(Ra[n]=e,n=0;n<e.length;n++)rv.add(e[n])}var Ki=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Yf=Object.prototype.hasOwnProperty,cS=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ym={},Sm={};function fS(n){return Yf.call(Sm,n)?!0:Yf.call(ym,n)?!1:cS.test(n)?Sm[n]=!0:(ym[n]=!0,!1)}function dS(n,e,t,i){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function hS(n,e,t,i){if(e===null||typeof e>"u"||dS(n,e,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function fn(n,e,t,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var qt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){qt[n]=new fn(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];qt[e]=new fn(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){qt[n]=new fn(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){qt[n]=new fn(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){qt[n]=new fn(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){qt[n]=new fn(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){qt[n]=new fn(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){qt[n]=new fn(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){qt[n]=new fn(n,5,!1,n.toLowerCase(),null,!1,!1)});var qh=/[\-:]([a-z])/g;function $h(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(qh,$h);qt[e]=new fn(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(qh,$h);qt[e]=new fn(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(qh,$h);qt[e]=new fn(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){qt[n]=new fn(n,1,!1,n.toLowerCase(),null,!1,!1)});qt.xlinkHref=new fn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){qt[n]=new fn(n,1,!1,n.toLowerCase(),null,!0,!0)});function Kh(n,e,t,i){var r=qt.hasOwnProperty(e)?qt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(hS(e,t,r,i)&&(t=null),i||r===null?fS(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):r.mustUseProperty?n[r.propertyName]=t===null?r.type===3?!1:"":t:(e=r.attributeName,i=r.attributeNamespace,t===null?n.removeAttribute(e):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,i?n.setAttributeNS(i,e,t):n.setAttribute(e,t))))}var sr=uS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,gl=Symbol.for("react.element"),$s=Symbol.for("react.portal"),Ks=Symbol.for("react.fragment"),Zh=Symbol.for("react.strict_mode"),qf=Symbol.for("react.profiler"),sv=Symbol.for("react.provider"),ov=Symbol.for("react.context"),Qh=Symbol.for("react.forward_ref"),$f=Symbol.for("react.suspense"),Kf=Symbol.for("react.suspense_list"),Jh=Symbol.for("react.memo"),pr=Symbol.for("react.lazy"),av=Symbol.for("react.offscreen"),Mm=Symbol.iterator;function Yo(n){return n===null||typeof n!="object"?null:(n=Mm&&n[Mm]||n["@@iterator"],typeof n=="function"?n:null)}var Mt=Object.assign,Uc;function la(n){if(Uc===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);Uc=e&&e[1]||""}return`
`+Uc+n}var Fc=!1;function Oc(n,e){if(!n||Fc)return"";Fc=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(n,[],e)}else{try{e.call()}catch(u){i=u}n.call(e.prototype)}else{try{throw Error()}catch(u){i=u}n()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return n.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",n.displayName)),l}while(1<=o&&0<=a);break}}}finally{Fc=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?la(n):""}function pS(n){switch(n.tag){case 5:return la(n.type);case 16:return la("Lazy");case 13:return la("Suspense");case 19:return la("SuspenseList");case 0:case 2:case 15:return n=Oc(n.type,!1),n;case 11:return n=Oc(n.type.render,!1),n;case 1:return n=Oc(n.type,!0),n;default:return""}}function Zf(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case Ks:return"Fragment";case $s:return"Portal";case qf:return"Profiler";case Zh:return"StrictMode";case $f:return"Suspense";case Kf:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case ov:return(n.displayName||"Context")+".Consumer";case sv:return(n._context.displayName||"Context")+".Provider";case Qh:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Jh:return e=n.displayName||null,e!==null?e:Zf(n.type)||"Memo";case pr:e=n._payload,n=n._init;try{return Zf(n(e))}catch{}}return null}function mS(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Zf(e);case 8:return e===Zh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Fr(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function lv(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function _S(n){var e=lv(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),i=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,s=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function vl(n){n._valueTracker||(n._valueTracker=_S(n))}function uv(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),i="";return n&&(i=lv(n)?n.checked?"true":"false":n.value),n=i,n!==t?(e.setValue(n),!0):!1}function wu(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Qf(n,e){var t=e.checked;return Mt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??n._wrapperState.initialChecked})}function Em(n,e){var t=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;t=Fr(e.value!=null?e.value:t),n._wrapperState={initialChecked:i,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function cv(n,e){e=e.checked,e!=null&&Kh(n,"checked",e,!1)}function Jf(n,e){cv(n,e);var t=Fr(e.value),i=e.type;if(t!=null)i==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(i==="submit"||i==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?ed(n,e.type,t):e.hasOwnProperty("defaultValue")&&ed(n,e.type,Fr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function Tm(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function ed(n,e,t){(e!=="number"||wu(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var ua=Array.isArray;function co(n,e,t,i){if(n=n.options,e){e={};for(var r=0;r<t.length;r++)e["$"+t[r]]=!0;for(t=0;t<n.length;t++)r=e.hasOwnProperty("$"+n[t].value),n[t].selected!==r&&(n[t].selected=r),r&&i&&(n[t].defaultSelected=!0)}else{for(t=""+Fr(t),e=null,r=0;r<n.length;r++){if(n[r].value===t){n[r].selected=!0,i&&(n[r].defaultSelected=!0);return}e!==null||n[r].disabled||(e=n[r])}e!==null&&(e.selected=!0)}}function td(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(te(91));return Mt({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function wm(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(te(92));if(ua(t)){if(1<t.length)throw Error(te(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:Fr(t)}}function fv(n,e){var t=Fr(e.value),i=Fr(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),i!=null&&(n.defaultValue=""+i)}function Am(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function dv(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function nd(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?dv(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var xl,hv=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,i,r){MSApp.execUnsafeLocalFunction(function(){return n(e,t,i,r)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(xl=xl||document.createElement("div"),xl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=xl.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function ba(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var _a={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},gS=["Webkit","ms","Moz","O"];Object.keys(_a).forEach(function(n){gS.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),_a[e]=_a[n]})});function pv(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||_a.hasOwnProperty(n)&&_a[n]?(""+e).trim():e+"px"}function mv(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var i=t.indexOf("--")===0,r=pv(t,e[t],i);t==="float"&&(t="cssFloat"),i?n.setProperty(t,r):n[t]=r}}var vS=Mt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function id(n,e){if(e){if(vS[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(te(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(te(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(te(61))}if(e.style!=null&&typeof e.style!="object")throw Error(te(62))}}function rd(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var sd=null;function ep(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var od=null,fo=null,ho=null;function Cm(n){if(n=ol(n)){if(typeof od!="function")throw Error(te(280));var e=n.stateNode;e&&(e=mc(e),od(n.stateNode,n.type,e))}}function _v(n){fo?ho?ho.push(n):ho=[n]:fo=n}function gv(){if(fo){var n=fo,e=ho;if(ho=fo=null,Cm(n),e)for(n=0;n<e.length;n++)Cm(e[n])}}function vv(n,e){return n(e)}function xv(){}var kc=!1;function yv(n,e,t){if(kc)return n(e,t);kc=!0;try{return vv(n,e,t)}finally{kc=!1,(fo!==null||ho!==null)&&(xv(),gv())}}function Pa(n,e){var t=n.stateNode;if(t===null)return null;var i=mc(t);if(i===null)return null;t=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break e;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(te(231,e,typeof t));return t}var ad=!1;if(Ki)try{var qo={};Object.defineProperty(qo,"passive",{get:function(){ad=!0}}),window.addEventListener("test",qo,qo),window.removeEventListener("test",qo,qo)}catch{ad=!1}function xS(n,e,t,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(t,u)}catch(c){this.onError(c)}}var ga=!1,Au=null,Cu=!1,ld=null,yS={onError:function(n){ga=!0,Au=n}};function SS(n,e,t,i,r,s,o,a,l){ga=!1,Au=null,xS.apply(yS,arguments)}function MS(n,e,t,i,r,s,o,a,l){if(SS.apply(this,arguments),ga){if(ga){var u=Au;ga=!1,Au=null}else throw Error(te(198));Cu||(Cu=!0,ld=u)}}function Ps(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,e.flags&4098&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function Sv(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function Rm(n){if(Ps(n)!==n)throw Error(te(188))}function ES(n){var e=n.alternate;if(!e){if(e=Ps(n),e===null)throw Error(te(188));return e!==n?null:n}for(var t=n,i=e;;){var r=t.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){t=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===t)return Rm(r),n;if(s===i)return Rm(r),e;s=s.sibling}throw Error(te(188))}if(t.return!==i.return)t=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===t){o=!0,t=r,i=s;break}if(a===i){o=!0,i=r,t=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===t){o=!0,t=s,i=r;break}if(a===i){o=!0,i=s,t=r;break}a=a.sibling}if(!o)throw Error(te(189))}}if(t.alternate!==i)throw Error(te(190))}if(t.tag!==3)throw Error(te(188));return t.stateNode.current===t?n:e}function Mv(n){return n=ES(n),n!==null?Ev(n):null}function Ev(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=Ev(n);if(e!==null)return e;n=n.sibling}return null}var Tv=zn.unstable_scheduleCallback,bm=zn.unstable_cancelCallback,TS=zn.unstable_shouldYield,wS=zn.unstable_requestPaint,bt=zn.unstable_now,AS=zn.unstable_getCurrentPriorityLevel,tp=zn.unstable_ImmediatePriority,wv=zn.unstable_UserBlockingPriority,Ru=zn.unstable_NormalPriority,CS=zn.unstable_LowPriority,Av=zn.unstable_IdlePriority,fc=null,Pi=null;function RS(n){if(Pi&&typeof Pi.onCommitFiberRoot=="function")try{Pi.onCommitFiberRoot(fc,n,void 0,(n.current.flags&128)===128)}catch{}}var _i=Math.clz32?Math.clz32:DS,bS=Math.log,PS=Math.LN2;function DS(n){return n>>>=0,n===0?32:31-(bS(n)/PS|0)|0}var yl=64,Sl=4194304;function ca(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function bu(n,e){var t=n.pendingLanes;if(t===0)return 0;var i=0,r=n.suspendedLanes,s=n.pingedLanes,o=t&268435455;if(o!==0){var a=o&~r;a!==0?i=ca(a):(s&=o,s!==0&&(i=ca(s)))}else o=t&~r,o!==0?i=ca(o):s!==0&&(i=ca(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=i;0<e;)t=31-_i(e),r=1<<t,i|=n[t],e&=~r;return i}function LS(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function IS(n,e){for(var t=n.suspendedLanes,i=n.pingedLanes,r=n.expirationTimes,s=n.pendingLanes;0<s;){var o=31-_i(s),a=1<<o,l=r[o];l===-1?(!(a&t)||a&i)&&(r[o]=LS(a,e)):l<=e&&(n.expiredLanes|=a),s&=~a}}function ud(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Cv(){var n=yl;return yl<<=1,!(yl&4194240)&&(yl=64),n}function zc(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function rl(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-_i(e),n[e]=t}function NS(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var i=n.eventTimes;for(n=n.expirationTimes;0<t;){var r=31-_i(t),s=1<<r;e[r]=0,i[r]=-1,n[r]=-1,t&=~s}}function np(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var i=31-_i(t),r=1<<i;r&e|n[i]&e&&(n[i]|=e),t&=~r}}var tt=0;function Rv(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var bv,ip,Pv,Dv,Lv,cd=!1,Ml=[],Tr=null,wr=null,Ar=null,Da=new Map,La=new Map,_r=[],US="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Pm(n,e){switch(n){case"focusin":case"focusout":Tr=null;break;case"dragenter":case"dragleave":wr=null;break;case"mouseover":case"mouseout":Ar=null;break;case"pointerover":case"pointerout":Da.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":La.delete(e.pointerId)}}function $o(n,e,t,i,r,s){return n===null||n.nativeEvent!==s?(n={blockedOn:e,domEventName:t,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=ol(e),e!==null&&ip(e)),n):(n.eventSystemFlags|=i,e=n.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),n)}function FS(n,e,t,i,r){switch(e){case"focusin":return Tr=$o(Tr,n,e,t,i,r),!0;case"dragenter":return wr=$o(wr,n,e,t,i,r),!0;case"mouseover":return Ar=$o(Ar,n,e,t,i,r),!0;case"pointerover":var s=r.pointerId;return Da.set(s,$o(Da.get(s)||null,n,e,t,i,r)),!0;case"gotpointercapture":return s=r.pointerId,La.set(s,$o(La.get(s)||null,n,e,t,i,r)),!0}return!1}function Iv(n){var e=us(n.target);if(e!==null){var t=Ps(e);if(t!==null){if(e=t.tag,e===13){if(e=Sv(t),e!==null){n.blockedOn=e,Lv(n.priority,function(){Pv(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function au(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=fd(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var i=new t.constructor(t.type,t);sd=i,t.target.dispatchEvent(i),sd=null}else return e=ol(t),e!==null&&ip(e),n.blockedOn=t,!1;e.shift()}return!0}function Dm(n,e,t){au(n)&&t.delete(e)}function OS(){cd=!1,Tr!==null&&au(Tr)&&(Tr=null),wr!==null&&au(wr)&&(wr=null),Ar!==null&&au(Ar)&&(Ar=null),Da.forEach(Dm),La.forEach(Dm)}function Ko(n,e){n.blockedOn===e&&(n.blockedOn=null,cd||(cd=!0,zn.unstable_scheduleCallback(zn.unstable_NormalPriority,OS)))}function Ia(n){function e(r){return Ko(r,n)}if(0<Ml.length){Ko(Ml[0],n);for(var t=1;t<Ml.length;t++){var i=Ml[t];i.blockedOn===n&&(i.blockedOn=null)}}for(Tr!==null&&Ko(Tr,n),wr!==null&&Ko(wr,n),Ar!==null&&Ko(Ar,n),Da.forEach(e),La.forEach(e),t=0;t<_r.length;t++)i=_r[t],i.blockedOn===n&&(i.blockedOn=null);for(;0<_r.length&&(t=_r[0],t.blockedOn===null);)Iv(t),t.blockedOn===null&&_r.shift()}var po=sr.ReactCurrentBatchConfig,Pu=!0;function kS(n,e,t,i){var r=tt,s=po.transition;po.transition=null;try{tt=1,rp(n,e,t,i)}finally{tt=r,po.transition=s}}function zS(n,e,t,i){var r=tt,s=po.transition;po.transition=null;try{tt=4,rp(n,e,t,i)}finally{tt=r,po.transition=s}}function rp(n,e,t,i){if(Pu){var r=fd(n,e,t,i);if(r===null)$c(n,e,i,Du,t),Pm(n,i);else if(FS(r,n,e,t,i))i.stopPropagation();else if(Pm(n,i),e&4&&-1<US.indexOf(n)){for(;r!==null;){var s=ol(r);if(s!==null&&bv(s),s=fd(n,e,t,i),s===null&&$c(n,e,i,Du,t),s===r)break;r=s}r!==null&&i.stopPropagation()}else $c(n,e,i,null,t)}}var Du=null;function fd(n,e,t,i){if(Du=null,n=ep(i),n=us(n),n!==null)if(e=Ps(n),e===null)n=null;else if(t=e.tag,t===13){if(n=Sv(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return Du=n,null}function Nv(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(AS()){case tp:return 1;case wv:return 4;case Ru:case CS:return 16;case Av:return 536870912;default:return 16}default:return 16}}var xr=null,sp=null,lu=null;function Uv(){if(lu)return lu;var n,e=sp,t=e.length,i,r="value"in xr?xr.value:xr.textContent,s=r.length;for(n=0;n<t&&e[n]===r[n];n++);var o=t-n;for(i=1;i<=o&&e[t-i]===r[s-i];i++);return lu=r.slice(n,1<i?1-i:void 0)}function uu(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function El(){return!0}function Lm(){return!1}function Gn(n){function e(t,i,r,s,o){this._reactName=t,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in n)n.hasOwnProperty(a)&&(t=n[a],this[a]=t?t(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?El:Lm,this.isPropagationStopped=Lm,this}return Mt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=El)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=El)},persist:function(){},isPersistent:El}),e}var Vo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},op=Gn(Vo),sl=Mt({},Vo,{view:0,detail:0}),BS=Gn(sl),Bc,Vc,Zo,dc=Mt({},sl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ap,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Zo&&(Zo&&n.type==="mousemove"?(Bc=n.screenX-Zo.screenX,Vc=n.screenY-Zo.screenY):Vc=Bc=0,Zo=n),Bc)},movementY:function(n){return"movementY"in n?n.movementY:Vc}}),Im=Gn(dc),VS=Mt({},dc,{dataTransfer:0}),HS=Gn(VS),GS=Mt({},sl,{relatedTarget:0}),Hc=Gn(GS),WS=Mt({},Vo,{animationName:0,elapsedTime:0,pseudoElement:0}),XS=Gn(WS),jS=Mt({},Vo,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),YS=Gn(jS),qS=Mt({},Vo,{data:0}),Nm=Gn(qS),$S={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},KS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ZS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function QS(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=ZS[n])?!!e[n]:!1}function ap(){return QS}var JS=Mt({},sl,{key:function(n){if(n.key){var e=$S[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=uu(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?KS[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ap,charCode:function(n){return n.type==="keypress"?uu(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?uu(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),eM=Gn(JS),tM=Mt({},dc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Um=Gn(tM),nM=Mt({},sl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ap}),iM=Gn(nM),rM=Mt({},Vo,{propertyName:0,elapsedTime:0,pseudoElement:0}),sM=Gn(rM),oM=Mt({},dc,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),aM=Gn(oM),lM=[9,13,27,32],lp=Ki&&"CompositionEvent"in window,va=null;Ki&&"documentMode"in document&&(va=document.documentMode);var uM=Ki&&"TextEvent"in window&&!va,Fv=Ki&&(!lp||va&&8<va&&11>=va),Fm=" ",Om=!1;function Ov(n,e){switch(n){case"keyup":return lM.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function kv(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Zs=!1;function cM(n,e){switch(n){case"compositionend":return kv(e);case"keypress":return e.which!==32?null:(Om=!0,Fm);case"textInput":return n=e.data,n===Fm&&Om?null:n;default:return null}}function fM(n,e){if(Zs)return n==="compositionend"||!lp&&Ov(n,e)?(n=Uv(),lu=sp=xr=null,Zs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Fv&&e.locale!=="ko"?null:e.data;default:return null}}var dM={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function km(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!dM[n.type]:e==="textarea"}function zv(n,e,t,i){_v(i),e=Lu(e,"onChange"),0<e.length&&(t=new op("onChange","change",null,t,i),n.push({event:t,listeners:e}))}var xa=null,Na=null;function hM(n){Kv(n,0)}function hc(n){var e=eo(n);if(uv(e))return n}function pM(n,e){if(n==="change")return e}var Bv=!1;if(Ki){var Gc;if(Ki){var Wc="oninput"in document;if(!Wc){var zm=document.createElement("div");zm.setAttribute("oninput","return;"),Wc=typeof zm.oninput=="function"}Gc=Wc}else Gc=!1;Bv=Gc&&(!document.documentMode||9<document.documentMode)}function Bm(){xa&&(xa.detachEvent("onpropertychange",Vv),Na=xa=null)}function Vv(n){if(n.propertyName==="value"&&hc(Na)){var e=[];zv(e,Na,n,ep(n)),yv(hM,e)}}function mM(n,e,t){n==="focusin"?(Bm(),xa=e,Na=t,xa.attachEvent("onpropertychange",Vv)):n==="focusout"&&Bm()}function _M(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return hc(Na)}function gM(n,e){if(n==="click")return hc(e)}function vM(n,e){if(n==="input"||n==="change")return hc(e)}function xM(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var xi=typeof Object.is=="function"?Object.is:xM;function Ua(n,e){if(xi(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),i=Object.keys(e);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var r=t[i];if(!Yf.call(e,r)||!xi(n[r],e[r]))return!1}return!0}function Vm(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Hm(n,e){var t=Vm(n);n=0;for(var i;t;){if(t.nodeType===3){if(i=n+t.textContent.length,n<=e&&i>=e)return{node:t,offset:e-n};n=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Vm(t)}}function Hv(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?Hv(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function Gv(){for(var n=window,e=wu();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=wu(n.document)}return e}function up(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function yM(n){var e=Gv(),t=n.focusedElem,i=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&Hv(t.ownerDocument.documentElement,t)){if(i!==null&&up(t)){if(e=i.start,n=i.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var r=t.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!n.extend&&s>i&&(r=i,i=s,s=r),r=Hm(t,s);var o=Hm(t,i);r&&o&&(n.rangeCount!==1||n.anchorNode!==r.node||n.anchorOffset!==r.offset||n.focusNode!==o.node||n.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),n.removeAllRanges(),s>i?(n.addRange(e),n.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var SM=Ki&&"documentMode"in document&&11>=document.documentMode,Qs=null,dd=null,ya=null,hd=!1;function Gm(n,e,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;hd||Qs==null||Qs!==wu(i)||(i=Qs,"selectionStart"in i&&up(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),ya&&Ua(ya,i)||(ya=i,i=Lu(dd,"onSelect"),0<i.length&&(e=new op("onSelect","select",null,e,t),n.push({event:e,listeners:i}),e.target=Qs)))}function Tl(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var Js={animationend:Tl("Animation","AnimationEnd"),animationiteration:Tl("Animation","AnimationIteration"),animationstart:Tl("Animation","AnimationStart"),transitionend:Tl("Transition","TransitionEnd")},Xc={},Wv={};Ki&&(Wv=document.createElement("div").style,"AnimationEvent"in window||(delete Js.animationend.animation,delete Js.animationiteration.animation,delete Js.animationstart.animation),"TransitionEvent"in window||delete Js.transitionend.transition);function pc(n){if(Xc[n])return Xc[n];if(!Js[n])return n;var e=Js[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in Wv)return Xc[n]=e[t];return n}var Xv=pc("animationend"),jv=pc("animationiteration"),Yv=pc("animationstart"),qv=pc("transitionend"),$v=new Map,Wm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Hr(n,e){$v.set(n,e),bs(e,[n])}for(var jc=0;jc<Wm.length;jc++){var Yc=Wm[jc],MM=Yc.toLowerCase(),EM=Yc[0].toUpperCase()+Yc.slice(1);Hr(MM,"on"+EM)}Hr(Xv,"onAnimationEnd");Hr(jv,"onAnimationIteration");Hr(Yv,"onAnimationStart");Hr("dblclick","onDoubleClick");Hr("focusin","onFocus");Hr("focusout","onBlur");Hr(qv,"onTransitionEnd");Mo("onMouseEnter",["mouseout","mouseover"]);Mo("onMouseLeave",["mouseout","mouseover"]);Mo("onPointerEnter",["pointerout","pointerover"]);Mo("onPointerLeave",["pointerout","pointerover"]);bs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));bs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));bs("onBeforeInput",["compositionend","keypress","textInput","paste"]);bs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));bs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));bs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var fa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),TM=new Set("cancel close invalid load scroll toggle".split(" ").concat(fa));function Xm(n,e,t){var i=n.type||"unknown-event";n.currentTarget=t,MS(i,e,void 0,n),n.currentTarget=null}function Kv(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var i=n[t],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Xm(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Xm(r,a,u),s=l}}}if(Cu)throw n=ld,Cu=!1,ld=null,n}function ft(n,e){var t=e[vd];t===void 0&&(t=e[vd]=new Set);var i=n+"__bubble";t.has(i)||(Zv(e,n,2,!1),t.add(i))}function qc(n,e,t){var i=0;e&&(i|=4),Zv(t,n,i,e)}var wl="_reactListening"+Math.random().toString(36).slice(2);function Fa(n){if(!n[wl]){n[wl]=!0,rv.forEach(function(t){t!=="selectionchange"&&(TM.has(t)||qc(t,!1,n),qc(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[wl]||(e[wl]=!0,qc("selectionchange",!1,e))}}function Zv(n,e,t,i){switch(Nv(e)){case 1:var r=kS;break;case 4:r=zS;break;default:r=rp}t=r.bind(null,e,t,n),r=void 0,!ad||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?n.addEventListener(e,t,{capture:!0,passive:r}):n.addEventListener(e,t,!0):r!==void 0?n.addEventListener(e,t,{passive:r}):n.addEventListener(e,t,!1)}function $c(n,e,t,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=us(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}yv(function(){var u=s,c=ep(t),d=[];e:{var h=$v.get(n);if(h!==void 0){var p=op,v=n;switch(n){case"keypress":if(uu(t)===0)break e;case"keydown":case"keyup":p=eM;break;case"focusin":v="focus",p=Hc;break;case"focusout":v="blur",p=Hc;break;case"beforeblur":case"afterblur":p=Hc;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Im;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=HS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=iM;break;case Xv:case jv:case Yv:p=XS;break;case qv:p=sM;break;case"scroll":p=BS;break;case"wheel":p=aM;break;case"copy":case"cut":case"paste":p=YS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Um}var m=(e&4)!==0,_=!m&&n==="scroll",f=m?h!==null?h+"Capture":null:h;m=[];for(var x=u,S;x!==null;){S=x;var y=S.stateNode;if(S.tag===5&&y!==null&&(S=y,f!==null&&(y=Pa(x,f),y!=null&&m.push(Oa(x,y,S)))),_)break;x=x.return}0<m.length&&(h=new p(h,v,null,t,c),d.push({event:h,listeners:m}))}}if(!(e&7)){e:{if(h=n==="mouseover"||n==="pointerover",p=n==="mouseout"||n==="pointerout",h&&t!==sd&&(v=t.relatedTarget||t.fromElement)&&(us(v)||v[Zi]))break e;if((p||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,p?(v=t.relatedTarget||t.toElement,p=u,v=v?us(v):null,v!==null&&(_=Ps(v),v!==_||v.tag!==5&&v.tag!==6)&&(v=null)):(p=null,v=u),p!==v)){if(m=Im,y="onMouseLeave",f="onMouseEnter",x="mouse",(n==="pointerout"||n==="pointerover")&&(m=Um,y="onPointerLeave",f="onPointerEnter",x="pointer"),_=p==null?h:eo(p),S=v==null?h:eo(v),h=new m(y,x+"leave",p,t,c),h.target=_,h.relatedTarget=S,y=null,us(c)===u&&(m=new m(f,x+"enter",v,t,c),m.target=S,m.relatedTarget=_,y=m),_=y,p&&v)t:{for(m=p,f=v,x=0,S=m;S;S=Is(S))x++;for(S=0,y=f;y;y=Is(y))S++;for(;0<x-S;)m=Is(m),x--;for(;0<S-x;)f=Is(f),S--;for(;x--;){if(m===f||f!==null&&m===f.alternate)break t;m=Is(m),f=Is(f)}m=null}else m=null;p!==null&&jm(d,h,p,m,!1),v!==null&&_!==null&&jm(d,_,v,m,!0)}}e:{if(h=u?eo(u):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var E=pM;else if(km(h))if(Bv)E=vM;else{E=_M;var w=mM}else(p=h.nodeName)&&p.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(E=gM);if(E&&(E=E(n,u))){zv(d,E,t,c);break e}w&&w(n,h,u),n==="focusout"&&(w=h._wrapperState)&&w.controlled&&h.type==="number"&&ed(h,"number",h.value)}switch(w=u?eo(u):window,n){case"focusin":(km(w)||w.contentEditable==="true")&&(Qs=w,dd=u,ya=null);break;case"focusout":ya=dd=Qs=null;break;case"mousedown":hd=!0;break;case"contextmenu":case"mouseup":case"dragend":hd=!1,Gm(d,t,c);break;case"selectionchange":if(SM)break;case"keydown":case"keyup":Gm(d,t,c)}var A;if(lp)e:{switch(n){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else Zs?Ov(n,t)&&(b="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(b="onCompositionStart");b&&(Fv&&t.locale!=="ko"&&(Zs||b!=="onCompositionStart"?b==="onCompositionEnd"&&Zs&&(A=Uv()):(xr=c,sp="value"in xr?xr.value:xr.textContent,Zs=!0)),w=Lu(u,b),0<w.length&&(b=new Nm(b,n,null,t,c),d.push({event:b,listeners:w}),A?b.data=A:(A=kv(t),A!==null&&(b.data=A)))),(A=uM?cM(n,t):fM(n,t))&&(u=Lu(u,"onBeforeInput"),0<u.length&&(c=new Nm("onBeforeInput","beforeinput",null,t,c),d.push({event:c,listeners:u}),c.data=A))}Kv(d,e)})}function Oa(n,e,t){return{instance:n,listener:e,currentTarget:t}}function Lu(n,e){for(var t=e+"Capture",i=[];n!==null;){var r=n,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Pa(n,t),s!=null&&i.unshift(Oa(n,s,r)),s=Pa(n,e),s!=null&&i.push(Oa(n,s,r))),n=n.return}return i}function Is(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function jm(n,e,t,i,r){for(var s=e._reactName,o=[];t!==null&&t!==i;){var a=t,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=Pa(t,s),l!=null&&o.unshift(Oa(t,l,a))):r||(l=Pa(t,s),l!=null&&o.push(Oa(t,l,a)))),t=t.return}o.length!==0&&n.push({event:e,listeners:o})}var wM=/\r\n?/g,AM=/\u0000|\uFFFD/g;function Ym(n){return(typeof n=="string"?n:""+n).replace(wM,`
`).replace(AM,"")}function Al(n,e,t){if(e=Ym(e),Ym(n)!==e&&t)throw Error(te(425))}function Iu(){}var pd=null,md=null;function _d(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var gd=typeof setTimeout=="function"?setTimeout:void 0,CM=typeof clearTimeout=="function"?clearTimeout:void 0,qm=typeof Promise=="function"?Promise:void 0,RM=typeof queueMicrotask=="function"?queueMicrotask:typeof qm<"u"?function(n){return qm.resolve(null).then(n).catch(bM)}:gd;function bM(n){setTimeout(function(){throw n})}function Kc(n,e){var t=e,i=0;do{var r=t.nextSibling;if(n.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(i===0){n.removeChild(r),Ia(e);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=r}while(t);Ia(e)}function Cr(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function $m(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var Ho=Math.random().toString(36).slice(2),wi="__reactFiber$"+Ho,ka="__reactProps$"+Ho,Zi="__reactContainer$"+Ho,vd="__reactEvents$"+Ho,PM="__reactListeners$"+Ho,DM="__reactHandles$"+Ho;function us(n){var e=n[wi];if(e)return e;for(var t=n.parentNode;t;){if(e=t[Zi]||t[wi]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=$m(n);n!==null;){if(t=n[wi])return t;n=$m(n)}return e}n=t,t=n.parentNode}return null}function ol(n){return n=n[wi]||n[Zi],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function eo(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(te(33))}function mc(n){return n[ka]||null}var xd=[],to=-1;function Gr(n){return{current:n}}function dt(n){0>to||(n.current=xd[to],xd[to]=null,to--)}function ut(n,e){to++,xd[to]=n.current,n.current=e}var Or={},nn=Gr(Or),gn=Gr(!1),Ms=Or;function Eo(n,e){var t=n.type.contextTypes;if(!t)return Or;var i=n.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in t)r[s]=e[s];return i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=r),r}function vn(n){return n=n.childContextTypes,n!=null}function Nu(){dt(gn),dt(nn)}function Km(n,e,t){if(nn.current!==Or)throw Error(te(168));ut(nn,e),ut(gn,t)}function Qv(n,e,t){var i=n.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(te(108,mS(n)||"Unknown",r));return Mt({},t,i)}function Uu(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Or,Ms=nn.current,ut(nn,n),ut(gn,gn.current),!0}function Zm(n,e,t){var i=n.stateNode;if(!i)throw Error(te(169));t?(n=Qv(n,e,Ms),i.__reactInternalMemoizedMergedChildContext=n,dt(gn),dt(nn),ut(nn,n)):dt(gn),ut(gn,t)}var Hi=null,_c=!1,Zc=!1;function Jv(n){Hi===null?Hi=[n]:Hi.push(n)}function LM(n){_c=!0,Jv(n)}function Wr(){if(!Zc&&Hi!==null){Zc=!0;var n=0,e=tt;try{var t=Hi;for(tt=1;n<t.length;n++){var i=t[n];do i=i(!0);while(i!==null)}Hi=null,_c=!1}catch(r){throw Hi!==null&&(Hi=Hi.slice(n+1)),Tv(tp,Wr),r}finally{tt=e,Zc=!1}}return null}var no=[],io=0,Fu=null,Ou=0,$n=[],Kn=0,Es=null,Xi=1,ji="";function ns(n,e){no[io++]=Ou,no[io++]=Fu,Fu=n,Ou=e}function e0(n,e,t){$n[Kn++]=Xi,$n[Kn++]=ji,$n[Kn++]=Es,Es=n;var i=Xi;n=ji;var r=32-_i(i)-1;i&=~(1<<r),t+=1;var s=32-_i(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Xi=1<<32-_i(e)+r|t<<r|i,ji=s+n}else Xi=1<<s|t<<r|i,ji=n}function cp(n){n.return!==null&&(ns(n,1),e0(n,1,0))}function fp(n){for(;n===Fu;)Fu=no[--io],no[io]=null,Ou=no[--io],no[io]=null;for(;n===Es;)Es=$n[--Kn],$n[Kn]=null,ji=$n[--Kn],$n[Kn]=null,Xi=$n[--Kn],$n[Kn]=null}var Fn=null,Nn=null,pt=!1,di=null;function t0(n,e){var t=Zn(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function Qm(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,Fn=n,Nn=Cr(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,Fn=n,Nn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=Es!==null?{id:Xi,overflow:ji}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=Zn(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,Fn=n,Nn=null,!0):!1;default:return!1}}function yd(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Sd(n){if(pt){var e=Nn;if(e){var t=e;if(!Qm(n,e)){if(yd(n))throw Error(te(418));e=Cr(t.nextSibling);var i=Fn;e&&Qm(n,e)?t0(i,t):(n.flags=n.flags&-4097|2,pt=!1,Fn=n)}}else{if(yd(n))throw Error(te(418));n.flags=n.flags&-4097|2,pt=!1,Fn=n}}}function Jm(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Fn=n}function Cl(n){if(n!==Fn)return!1;if(!pt)return Jm(n),pt=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!_d(n.type,n.memoizedProps)),e&&(e=Nn)){if(yd(n))throw n0(),Error(te(418));for(;e;)t0(n,e),e=Cr(e.nextSibling)}if(Jm(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(te(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){Nn=Cr(n.nextSibling);break e}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}Nn=null}}else Nn=Fn?Cr(n.stateNode.nextSibling):null;return!0}function n0(){for(var n=Nn;n;)n=Cr(n.nextSibling)}function To(){Nn=Fn=null,pt=!1}function dp(n){di===null?di=[n]:di.push(n)}var IM=sr.ReactCurrentBatchConfig;function Qo(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(te(309));var i=t.stateNode}if(!i)throw Error(te(147,n));var r=i,s=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof n!="string")throw Error(te(284));if(!t._owner)throw Error(te(290,n))}return n}function Rl(n,e){throw n=Object.prototype.toString.call(e),Error(te(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function e_(n){var e=n._init;return e(n._payload)}function i0(n){function e(f,x){if(n){var S=f.deletions;S===null?(f.deletions=[x],f.flags|=16):S.push(x)}}function t(f,x){if(!n)return null;for(;x!==null;)e(f,x),x=x.sibling;return null}function i(f,x){for(f=new Map;x!==null;)x.key!==null?f.set(x.key,x):f.set(x.index,x),x=x.sibling;return f}function r(f,x){return f=Dr(f,x),f.index=0,f.sibling=null,f}function s(f,x,S){return f.index=S,n?(S=f.alternate,S!==null?(S=S.index,S<x?(f.flags|=2,x):S):(f.flags|=2,x)):(f.flags|=1048576,x)}function o(f){return n&&f.alternate===null&&(f.flags|=2),f}function a(f,x,S,y){return x===null||x.tag!==6?(x=sf(S,f.mode,y),x.return=f,x):(x=r(x,S),x.return=f,x)}function l(f,x,S,y){var E=S.type;return E===Ks?c(f,x,S.props.children,y,S.key):x!==null&&(x.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===pr&&e_(E)===x.type)?(y=r(x,S.props),y.ref=Qo(f,x,S),y.return=f,y):(y=_u(S.type,S.key,S.props,null,f.mode,y),y.ref=Qo(f,x,S),y.return=f,y)}function u(f,x,S,y){return x===null||x.tag!==4||x.stateNode.containerInfo!==S.containerInfo||x.stateNode.implementation!==S.implementation?(x=of(S,f.mode,y),x.return=f,x):(x=r(x,S.children||[]),x.return=f,x)}function c(f,x,S,y,E){return x===null||x.tag!==7?(x=_s(S,f.mode,y,E),x.return=f,x):(x=r(x,S),x.return=f,x)}function d(f,x,S){if(typeof x=="string"&&x!==""||typeof x=="number")return x=sf(""+x,f.mode,S),x.return=f,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case gl:return S=_u(x.type,x.key,x.props,null,f.mode,S),S.ref=Qo(f,null,x),S.return=f,S;case $s:return x=of(x,f.mode,S),x.return=f,x;case pr:var y=x._init;return d(f,y(x._payload),S)}if(ua(x)||Yo(x))return x=_s(x,f.mode,S,null),x.return=f,x;Rl(f,x)}return null}function h(f,x,S,y){var E=x!==null?x.key:null;if(typeof S=="string"&&S!==""||typeof S=="number")return E!==null?null:a(f,x,""+S,y);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case gl:return S.key===E?l(f,x,S,y):null;case $s:return S.key===E?u(f,x,S,y):null;case pr:return E=S._init,h(f,x,E(S._payload),y)}if(ua(S)||Yo(S))return E!==null?null:c(f,x,S,y,null);Rl(f,S)}return null}function p(f,x,S,y,E){if(typeof y=="string"&&y!==""||typeof y=="number")return f=f.get(S)||null,a(x,f,""+y,E);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case gl:return f=f.get(y.key===null?S:y.key)||null,l(x,f,y,E);case $s:return f=f.get(y.key===null?S:y.key)||null,u(x,f,y,E);case pr:var w=y._init;return p(f,x,S,w(y._payload),E)}if(ua(y)||Yo(y))return f=f.get(S)||null,c(x,f,y,E,null);Rl(x,y)}return null}function v(f,x,S,y){for(var E=null,w=null,A=x,b=x=0,M=null;A!==null&&b<S.length;b++){A.index>b?(M=A,A=null):M=A.sibling;var T=h(f,A,S[b],y);if(T===null){A===null&&(A=M);break}n&&A&&T.alternate===null&&e(f,A),x=s(T,x,b),w===null?E=T:w.sibling=T,w=T,A=M}if(b===S.length)return t(f,A),pt&&ns(f,b),E;if(A===null){for(;b<S.length;b++)A=d(f,S[b],y),A!==null&&(x=s(A,x,b),w===null?E=A:w.sibling=A,w=A);return pt&&ns(f,b),E}for(A=i(f,A);b<S.length;b++)M=p(A,f,b,S[b],y),M!==null&&(n&&M.alternate!==null&&A.delete(M.key===null?b:M.key),x=s(M,x,b),w===null?E=M:w.sibling=M,w=M);return n&&A.forEach(function(P){return e(f,P)}),pt&&ns(f,b),E}function m(f,x,S,y){var E=Yo(S);if(typeof E!="function")throw Error(te(150));if(S=E.call(S),S==null)throw Error(te(151));for(var w=E=null,A=x,b=x=0,M=null,T=S.next();A!==null&&!T.done;b++,T=S.next()){A.index>b?(M=A,A=null):M=A.sibling;var P=h(f,A,T.value,y);if(P===null){A===null&&(A=M);break}n&&A&&P.alternate===null&&e(f,A),x=s(P,x,b),w===null?E=P:w.sibling=P,w=P,A=M}if(T.done)return t(f,A),pt&&ns(f,b),E;if(A===null){for(;!T.done;b++,T=S.next())T=d(f,T.value,y),T!==null&&(x=s(T,x,b),w===null?E=T:w.sibling=T,w=T);return pt&&ns(f,b),E}for(A=i(f,A);!T.done;b++,T=S.next())T=p(A,f,b,T.value,y),T!==null&&(n&&T.alternate!==null&&A.delete(T.key===null?b:T.key),x=s(T,x,b),w===null?E=T:w.sibling=T,w=T);return n&&A.forEach(function(F){return e(f,F)}),pt&&ns(f,b),E}function _(f,x,S,y){if(typeof S=="object"&&S!==null&&S.type===Ks&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case gl:e:{for(var E=S.key,w=x;w!==null;){if(w.key===E){if(E=S.type,E===Ks){if(w.tag===7){t(f,w.sibling),x=r(w,S.props.children),x.return=f,f=x;break e}}else if(w.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===pr&&e_(E)===w.type){t(f,w.sibling),x=r(w,S.props),x.ref=Qo(f,w,S),x.return=f,f=x;break e}t(f,w);break}else e(f,w);w=w.sibling}S.type===Ks?(x=_s(S.props.children,f.mode,y,S.key),x.return=f,f=x):(y=_u(S.type,S.key,S.props,null,f.mode,y),y.ref=Qo(f,x,S),y.return=f,f=y)}return o(f);case $s:e:{for(w=S.key;x!==null;){if(x.key===w)if(x.tag===4&&x.stateNode.containerInfo===S.containerInfo&&x.stateNode.implementation===S.implementation){t(f,x.sibling),x=r(x,S.children||[]),x.return=f,f=x;break e}else{t(f,x);break}else e(f,x);x=x.sibling}x=of(S,f.mode,y),x.return=f,f=x}return o(f);case pr:return w=S._init,_(f,x,w(S._payload),y)}if(ua(S))return v(f,x,S,y);if(Yo(S))return m(f,x,S,y);Rl(f,S)}return typeof S=="string"&&S!==""||typeof S=="number"?(S=""+S,x!==null&&x.tag===6?(t(f,x.sibling),x=r(x,S),x.return=f,f=x):(t(f,x),x=sf(S,f.mode,y),x.return=f,f=x),o(f)):t(f,x)}return _}var wo=i0(!0),r0=i0(!1),ku=Gr(null),zu=null,ro=null,hp=null;function pp(){hp=ro=zu=null}function mp(n){var e=ku.current;dt(ku),n._currentValue=e}function Md(n,e,t){for(;n!==null;){var i=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),n===t)break;n=n.return}}function mo(n,e){zu=n,hp=ro=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&e&&(mn=!0),n.firstContext=null)}function ri(n){var e=n._currentValue;if(hp!==n)if(n={context:n,memoizedValue:e,next:null},ro===null){if(zu===null)throw Error(te(308));ro=n,zu.dependencies={lanes:0,firstContext:n}}else ro=ro.next=n;return e}var cs=null;function _p(n){cs===null?cs=[n]:cs.push(n)}function s0(n,e,t,i){var r=e.interleaved;return r===null?(t.next=t,_p(e)):(t.next=r.next,r.next=t),e.interleaved=t,Qi(n,i)}function Qi(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var mr=!1;function gp(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function o0(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Yi(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function Rr(n,e,t){var i=n.updateQueue;if(i===null)return null;if(i=i.shared,$e&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Qi(n,t)}return r=i.interleaved,r===null?(e.next=e,_p(i)):(e.next=r.next,r.next=e),i.interleaved=e,Qi(n,t)}function cu(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,np(n,t)}}function t_(n,e){var t=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var r=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?r=s=o:s=s.next=o,t=t.next}while(t!==null);s===null?r=s=e:s=s.next=e}else r=s=e;t={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function Bu(n,e,t,i){var r=n.updateQueue;mr=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=n.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;o=0,c=u=l=null,a=s;do{var h=a.lane,p=a.eventTime;if((i&h)===h){c!==null&&(c=c.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=n,m=a;switch(h=e,p=t,m.tag){case 1:if(v=m.payload,typeof v=="function"){d=v.call(p,d,h);break e}d=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=m.payload,h=typeof v=="function"?v.call(p,d,h):v,h==null)break e;d=Mt({},d,h);break e;case 2:mr=!0}}a.callback!==null&&a.lane!==0&&(n.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else p={eventTime:p,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=p,l=d):c=c.next=p,o|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(c===null&&(l=d),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=c,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);ws|=o,n.lanes=o,n.memoizedState=d}}function n_(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var i=n[e],r=i.callback;if(r!==null){if(i.callback=null,i=t,typeof r!="function")throw Error(te(191,r));r.call(i)}}}var al={},Di=Gr(al),za=Gr(al),Ba=Gr(al);function fs(n){if(n===al)throw Error(te(174));return n}function vp(n,e){switch(ut(Ba,e),ut(za,n),ut(Di,al),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:nd(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=nd(e,n)}dt(Di),ut(Di,e)}function Ao(){dt(Di),dt(za),dt(Ba)}function a0(n){fs(Ba.current);var e=fs(Di.current),t=nd(e,n.type);e!==t&&(ut(za,n),ut(Di,t))}function xp(n){za.current===n&&(dt(Di),dt(za))}var vt=Gr(0);function Vu(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Qc=[];function yp(){for(var n=0;n<Qc.length;n++)Qc[n]._workInProgressVersionPrimary=null;Qc.length=0}var fu=sr.ReactCurrentDispatcher,Jc=sr.ReactCurrentBatchConfig,Ts=0,St=null,Ft=null,Ht=null,Hu=!1,Sa=!1,Va=0,NM=0;function $t(){throw Error(te(321))}function Sp(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!xi(n[t],e[t]))return!1;return!0}function Mp(n,e,t,i,r,s){if(Ts=s,St=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,fu.current=n===null||n.memoizedState===null?kM:zM,n=t(i,r),Sa){s=0;do{if(Sa=!1,Va=0,25<=s)throw Error(te(301));s+=1,Ht=Ft=null,e.updateQueue=null,fu.current=BM,n=t(i,r)}while(Sa)}if(fu.current=Gu,e=Ft!==null&&Ft.next!==null,Ts=0,Ht=Ft=St=null,Hu=!1,e)throw Error(te(300));return n}function Ep(){var n=Va!==0;return Va=0,n}function Mi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ht===null?St.memoizedState=Ht=n:Ht=Ht.next=n,Ht}function si(){if(Ft===null){var n=St.alternate;n=n!==null?n.memoizedState:null}else n=Ft.next;var e=Ht===null?St.memoizedState:Ht.next;if(e!==null)Ht=e,Ft=n;else{if(n===null)throw Error(te(310));Ft=n,n={memoizedState:Ft.memoizedState,baseState:Ft.baseState,baseQueue:Ft.baseQueue,queue:Ft.queue,next:null},Ht===null?St.memoizedState=Ht=n:Ht=Ht.next=n}return Ht}function Ha(n,e){return typeof e=="function"?e(n):e}function ef(n){var e=si(),t=e.queue;if(t===null)throw Error(te(311));t.lastRenderedReducer=n;var i=Ft,r=i.baseQueue,s=t.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,t.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Ts&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:n(i,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,o=i):l=l.next=d,St.lanes|=c,ws|=c}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,xi(i,e.memoizedState)||(mn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,t.lastRenderedState=i}if(n=t.interleaved,n!==null){r=n;do s=r.lane,St.lanes|=s,ws|=s,r=r.next;while(r!==n)}else r===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function tf(n){var e=si(),t=e.queue;if(t===null)throw Error(te(311));t.lastRenderedReducer=n;var i=t.dispatch,r=t.pending,s=e.memoizedState;if(r!==null){t.pending=null;var o=r=r.next;do s=n(s,o.action),o=o.next;while(o!==r);xi(s,e.memoizedState)||(mn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),t.lastRenderedState=s}return[s,i]}function l0(){}function u0(n,e){var t=St,i=si(),r=e(),s=!xi(i.memoizedState,r);if(s&&(i.memoizedState=r,mn=!0),i=i.queue,Tp(d0.bind(null,t,i,n),[n]),i.getSnapshot!==e||s||Ht!==null&&Ht.memoizedState.tag&1){if(t.flags|=2048,Ga(9,f0.bind(null,t,i,r,e),void 0,null),Gt===null)throw Error(te(349));Ts&30||c0(t,e,r)}return r}function c0(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=St.updateQueue,e===null?(e={lastEffect:null,stores:null},St.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function f0(n,e,t,i){e.value=t,e.getSnapshot=i,h0(e)&&p0(n)}function d0(n,e,t){return t(function(){h0(e)&&p0(n)})}function h0(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!xi(n,t)}catch{return!0}}function p0(n){var e=Qi(n,1);e!==null&&gi(e,n,1,-1)}function i_(n){var e=Mi();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ha,lastRenderedState:n},e.queue=n,n=n.dispatch=OM.bind(null,St,n),[e.memoizedState,n]}function Ga(n,e,t,i){return n={tag:n,create:e,destroy:t,deps:i,next:null},e=St.updateQueue,e===null?(e={lastEffect:null,stores:null},St.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(i=t.next,t.next=n,n.next=i,e.lastEffect=n)),n}function m0(){return si().memoizedState}function du(n,e,t,i){var r=Mi();St.flags|=n,r.memoizedState=Ga(1|e,t,void 0,i===void 0?null:i)}function gc(n,e,t,i){var r=si();i=i===void 0?null:i;var s=void 0;if(Ft!==null){var o=Ft.memoizedState;if(s=o.destroy,i!==null&&Sp(i,o.deps)){r.memoizedState=Ga(e,t,s,i);return}}St.flags|=n,r.memoizedState=Ga(1|e,t,s,i)}function r_(n,e){return du(8390656,8,n,e)}function Tp(n,e){return gc(2048,8,n,e)}function _0(n,e){return gc(4,2,n,e)}function g0(n,e){return gc(4,4,n,e)}function v0(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function x0(n,e,t){return t=t!=null?t.concat([n]):null,gc(4,4,v0.bind(null,e,n),t)}function wp(){}function y0(n,e){var t=si();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&Sp(e,i[1])?i[0]:(t.memoizedState=[n,e],n)}function S0(n,e){var t=si();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&Sp(e,i[1])?i[0]:(n=n(),t.memoizedState=[n,e],n)}function M0(n,e,t){return Ts&21?(xi(t,e)||(t=Cv(),St.lanes|=t,ws|=t,n.baseState=!0),e):(n.baseState&&(n.baseState=!1,mn=!0),n.memoizedState=t)}function UM(n,e){var t=tt;tt=t!==0&&4>t?t:4,n(!0);var i=Jc.transition;Jc.transition={};try{n(!1),e()}finally{tt=t,Jc.transition=i}}function E0(){return si().memoizedState}function FM(n,e,t){var i=Pr(n);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},T0(n))w0(e,t);else if(t=s0(n,e,t,i),t!==null){var r=ln();gi(t,n,i,r),A0(t,e,i)}}function OM(n,e,t){var i=Pr(n),r={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(T0(n))w0(e,r);else{var s=n.alternate;if(n.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,t);if(r.hasEagerState=!0,r.eagerState=a,xi(a,o)){var l=e.interleaved;l===null?(r.next=r,_p(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}t=s0(n,e,r,i),t!==null&&(r=ln(),gi(t,n,i,r),A0(t,e,i))}}function T0(n){var e=n.alternate;return n===St||e!==null&&e===St}function w0(n,e){Sa=Hu=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function A0(n,e,t){if(t&4194240){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,np(n,t)}}var Gu={readContext:ri,useCallback:$t,useContext:$t,useEffect:$t,useImperativeHandle:$t,useInsertionEffect:$t,useLayoutEffect:$t,useMemo:$t,useReducer:$t,useRef:$t,useState:$t,useDebugValue:$t,useDeferredValue:$t,useTransition:$t,useMutableSource:$t,useSyncExternalStore:$t,useId:$t,unstable_isNewReconciler:!1},kM={readContext:ri,useCallback:function(n,e){return Mi().memoizedState=[n,e===void 0?null:e],n},useContext:ri,useEffect:r_,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,du(4194308,4,v0.bind(null,e,n),t)},useLayoutEffect:function(n,e){return du(4194308,4,n,e)},useInsertionEffect:function(n,e){return du(4,2,n,e)},useMemo:function(n,e){var t=Mi();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var i=Mi();return e=t!==void 0?t(e):e,i.memoizedState=i.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},i.queue=n,n=n.dispatch=FM.bind(null,St,n),[i.memoizedState,n]},useRef:function(n){var e=Mi();return n={current:n},e.memoizedState=n},useState:i_,useDebugValue:wp,useDeferredValue:function(n){return Mi().memoizedState=n},useTransition:function(){var n=i_(!1),e=n[0];return n=UM.bind(null,n[1]),Mi().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var i=St,r=Mi();if(pt){if(t===void 0)throw Error(te(407));t=t()}else{if(t=e(),Gt===null)throw Error(te(349));Ts&30||c0(i,e,t)}r.memoizedState=t;var s={value:t,getSnapshot:e};return r.queue=s,r_(d0.bind(null,i,s,n),[n]),i.flags|=2048,Ga(9,f0.bind(null,i,s,t,e),void 0,null),t},useId:function(){var n=Mi(),e=Gt.identifierPrefix;if(pt){var t=ji,i=Xi;t=(i&~(1<<32-_i(i)-1)).toString(32)+t,e=":"+e+"R"+t,t=Va++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=NM++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},zM={readContext:ri,useCallback:y0,useContext:ri,useEffect:Tp,useImperativeHandle:x0,useInsertionEffect:_0,useLayoutEffect:g0,useMemo:S0,useReducer:ef,useRef:m0,useState:function(){return ef(Ha)},useDebugValue:wp,useDeferredValue:function(n){var e=si();return M0(e,Ft.memoizedState,n)},useTransition:function(){var n=ef(Ha)[0],e=si().memoizedState;return[n,e]},useMutableSource:l0,useSyncExternalStore:u0,useId:E0,unstable_isNewReconciler:!1},BM={readContext:ri,useCallback:y0,useContext:ri,useEffect:Tp,useImperativeHandle:x0,useInsertionEffect:_0,useLayoutEffect:g0,useMemo:S0,useReducer:tf,useRef:m0,useState:function(){return tf(Ha)},useDebugValue:wp,useDeferredValue:function(n){var e=si();return Ft===null?e.memoizedState=n:M0(e,Ft.memoizedState,n)},useTransition:function(){var n=tf(Ha)[0],e=si().memoizedState;return[n,e]},useMutableSource:l0,useSyncExternalStore:u0,useId:E0,unstable_isNewReconciler:!1};function ci(n,e){if(n&&n.defaultProps){e=Mt({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}function Ed(n,e,t,i){e=n.memoizedState,t=t(i,e),t=t==null?e:Mt({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var vc={isMounted:function(n){return(n=n._reactInternals)?Ps(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var i=ln(),r=Pr(n),s=Yi(i,r);s.payload=e,t!=null&&(s.callback=t),e=Rr(n,s,r),e!==null&&(gi(e,n,r,i),cu(e,n,r))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var i=ln(),r=Pr(n),s=Yi(i,r);s.tag=1,s.payload=e,t!=null&&(s.callback=t),e=Rr(n,s,r),e!==null&&(gi(e,n,r,i),cu(e,n,r))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=ln(),i=Pr(n),r=Yi(t,i);r.tag=2,e!=null&&(r.callback=e),e=Rr(n,r,i),e!==null&&(gi(e,n,i,t),cu(e,n,i))}};function s_(n,e,t,i,r,s,o){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Ua(t,i)||!Ua(r,s):!0}function C0(n,e,t){var i=!1,r=Or,s=e.contextType;return typeof s=="object"&&s!==null?s=ri(s):(r=vn(e)?Ms:nn.current,i=e.contextTypes,s=(i=i!=null)?Eo(n,r):Or),e=new e(t,s),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=vc,n.stateNode=e,e._reactInternals=n,i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=s),e}function o_(n,e,t,i){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,i),e.state!==n&&vc.enqueueReplaceState(e,e.state,null)}function Td(n,e,t,i){var r=n.stateNode;r.props=t,r.state=n.memoizedState,r.refs={},gp(n);var s=e.contextType;typeof s=="object"&&s!==null?r.context=ri(s):(s=vn(e)?Ms:nn.current,r.context=Eo(n,s)),r.state=n.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Ed(n,e,s,t),r.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&vc.enqueueReplaceState(r,r.state,null),Bu(n,t,r,i),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308)}function Co(n,e){try{var t="",i=e;do t+=pS(i),i=i.return;while(i);var r=t}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:n,source:e,stack:r,digest:null}}function nf(n,e,t){return{value:n,source:null,stack:t??null,digest:e??null}}function wd(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var VM=typeof WeakMap=="function"?WeakMap:Map;function R0(n,e,t){t=Yi(-1,t),t.tag=3,t.payload={element:null};var i=e.value;return t.callback=function(){Xu||(Xu=!0,Ud=i),wd(n,e)},t}function b0(n,e,t){t=Yi(-1,t),t.tag=3;var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;t.payload=function(){return i(r)},t.callback=function(){wd(n,e)}}var s=n.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){wd(n,e),typeof i!="function"&&(br===null?br=new Set([this]):br.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),t}function a_(n,e,t){var i=n.pingCache;if(i===null){i=n.pingCache=new VM;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(t)||(r.add(t),n=tE.bind(null,n,e,t),e.then(n,n))}function l_(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function u_(n,e,t,i,r){return n.mode&1?(n.flags|=65536,n.lanes=r,n):(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=Yi(-1,1),e.tag=2,Rr(t,e,1))),t.lanes|=1),n)}var HM=sr.ReactCurrentOwner,mn=!1;function on(n,e,t,i){e.child=n===null?r0(e,null,t,i):wo(e,n.child,t,i)}function c_(n,e,t,i,r){t=t.render;var s=e.ref;return mo(e,r),i=Mp(n,e,t,i,s,r),t=Ep(),n!==null&&!mn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,Ji(n,e,r)):(pt&&t&&cp(e),e.flags|=1,on(n,e,i,r),e.child)}function f_(n,e,t,i,r){if(n===null){var s=t.type;return typeof s=="function"&&!Ip(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=s,P0(n,e,s,i,r)):(n=_u(t.type,null,i,e,e.mode,r),n.ref=e.ref,n.return=e,e.child=n)}if(s=n.child,!(n.lanes&r)){var o=s.memoizedProps;if(t=t.compare,t=t!==null?t:Ua,t(o,i)&&n.ref===e.ref)return Ji(n,e,r)}return e.flags|=1,n=Dr(s,i),n.ref=e.ref,n.return=e,e.child=n}function P0(n,e,t,i,r){if(n!==null){var s=n.memoizedProps;if(Ua(s,i)&&n.ref===e.ref)if(mn=!1,e.pendingProps=i=s,(n.lanes&r)!==0)n.flags&131072&&(mn=!0);else return e.lanes=n.lanes,Ji(n,e,r)}return Ad(n,e,t,i,r)}function D0(n,e,t){var i=e.pendingProps,r=i.children,s=n!==null?n.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ut(oo,Dn),Dn|=t;else{if(!(t&1073741824))return n=s!==null?s.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,ut(oo,Dn),Dn|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:t,ut(oo,Dn),Dn|=i}else s!==null?(i=s.baseLanes|t,e.memoizedState=null):i=t,ut(oo,Dn),Dn|=i;return on(n,e,r,t),e.child}function L0(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function Ad(n,e,t,i,r){var s=vn(t)?Ms:nn.current;return s=Eo(e,s),mo(e,r),t=Mp(n,e,t,i,s,r),i=Ep(),n!==null&&!mn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,Ji(n,e,r)):(pt&&i&&cp(e),e.flags|=1,on(n,e,t,r),e.child)}function d_(n,e,t,i,r){if(vn(t)){var s=!0;Uu(e)}else s=!1;if(mo(e,r),e.stateNode===null)hu(n,e),C0(e,t,i),Td(e,t,i,r),i=!0;else if(n===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=t.contextType;typeof u=="object"&&u!==null?u=ri(u):(u=vn(t)?Ms:nn.current,u=Eo(e,u));var c=t.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&o_(e,o,i,u),mr=!1;var h=e.memoizedState;o.state=h,Bu(e,i,o,r),l=e.memoizedState,a!==i||h!==l||gn.current||mr?(typeof c=="function"&&(Ed(e,t,c,i),l=e.memoizedState),(a=mr||s_(e,t,a,i,h,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,o0(n,e),a=e.memoizedProps,u=e.type===e.elementType?a:ci(e.type,a),o.props=u,d=e.pendingProps,h=o.context,l=t.contextType,typeof l=="object"&&l!==null?l=ri(l):(l=vn(t)?Ms:nn.current,l=Eo(e,l));var p=t.getDerivedStateFromProps;(c=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||h!==l)&&o_(e,o,i,l),mr=!1,h=e.memoizedState,o.state=h,Bu(e,i,o,r);var v=e.memoizedState;a!==d||h!==v||gn.current||mr?(typeof p=="function"&&(Ed(e,t,p,i),v=e.memoizedState),(u=mr||s_(e,t,u,i,h,v,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,v,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=v),o.props=i,o.state=v,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=1024),i=!1)}return Cd(n,e,t,i,s,r)}function Cd(n,e,t,i,r,s){L0(n,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Zm(e,t,!1),Ji(n,e,s);i=e.stateNode,HM.current=e;var a=o&&typeof t.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,n!==null&&o?(e.child=wo(e,n.child,null,s),e.child=wo(e,null,a,s)):on(n,e,a,s),e.memoizedState=i.state,r&&Zm(e,t,!0),e.child}function I0(n){var e=n.stateNode;e.pendingContext?Km(n,e.pendingContext,e.pendingContext!==e.context):e.context&&Km(n,e.context,!1),vp(n,e.containerInfo)}function h_(n,e,t,i,r){return To(),dp(r),e.flags|=256,on(n,e,t,i),e.child}var Rd={dehydrated:null,treeContext:null,retryLane:0};function bd(n){return{baseLanes:n,cachePool:null,transitions:null}}function N0(n,e,t){var i=e.pendingProps,r=vt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=n!==null&&n.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(r|=1),ut(vt,r&1),n===null)return Sd(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(e.mode&1?n.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,n=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Sc(o,i,0,null),n=_s(n,i,t,null),s.return=e,n.return=e,s.sibling=n,e.child=s,e.child.memoizedState=bd(t),e.memoizedState=Rd,n):Ap(e,o));if(r=n.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return GM(n,e,o,i,a,r,t);if(s){s=i.fallback,o=e.mode,r=n.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Dr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Dr(a,s):(s=_s(s,o,t,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=n.child.memoizedState,o=o===null?bd(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=n.childLanes&~t,e.memoizedState=Rd,i}return s=n.child,n=s.sibling,i=Dr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=t),i.return=e,i.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=i,e.memoizedState=null,i}function Ap(n,e){return e=Sc({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function bl(n,e,t,i){return i!==null&&dp(i),wo(e,n.child,null,t),n=Ap(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function GM(n,e,t,i,r,s,o){if(t)return e.flags&256?(e.flags&=-257,i=nf(Error(te(422))),bl(n,e,o,i)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Sc({mode:"visible",children:i.children},r,0,null),s=_s(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&wo(e,n.child,null,o),e.child.memoizedState=bd(o),e.memoizedState=Rd,s);if(!(e.mode&1))return bl(n,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(te(419)),i=nf(s,i,void 0),bl(n,e,o,i)}if(a=(o&n.childLanes)!==0,mn||a){if(i=Gt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Qi(n,r),gi(i,n,r,-1))}return Lp(),i=nf(Error(te(421))),bl(n,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=n.child,e=nE.bind(null,n),r._reactRetry=e,null):(n=s.treeContext,Nn=Cr(r.nextSibling),Fn=e,pt=!0,di=null,n!==null&&($n[Kn++]=Xi,$n[Kn++]=ji,$n[Kn++]=Es,Xi=n.id,ji=n.overflow,Es=e),e=Ap(e,i.children),e.flags|=4096,e)}function p_(n,e,t){n.lanes|=e;var i=n.alternate;i!==null&&(i.lanes|=e),Md(n.return,e,t)}function rf(n,e,t,i,r){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=t,s.tailMode=r)}function U0(n,e,t){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(on(n,e,i.children,t),i=vt.current,i&2)i=i&1|2,e.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&p_(n,t,e);else if(n.tag===19)p_(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}i&=1}if(ut(vt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(t=e.child,r=null;t!==null;)n=t.alternate,n!==null&&Vu(n)===null&&(r=t),t=t.sibling;t=r,t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null),rf(e,!1,r,t,s);break;case"backwards":for(t=null,r=e.child,e.child=null;r!==null;){if(n=r.alternate,n!==null&&Vu(n)===null){e.child=r;break}n=r.sibling,r.sibling=t,t=r,r=n}rf(e,!0,t,null,s);break;case"together":rf(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function hu(n,e){!(e.mode&1)&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function Ji(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),ws|=e.lanes,!(t&e.childLanes))return null;if(n!==null&&e.child!==n.child)throw Error(te(153));if(e.child!==null){for(n=e.child,t=Dr(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=Dr(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function WM(n,e,t){switch(e.tag){case 3:I0(e),To();break;case 5:a0(e);break;case 1:vn(e.type)&&Uu(e);break;case 4:vp(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;ut(ku,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(ut(vt,vt.current&1),e.flags|=128,null):t&e.child.childLanes?N0(n,e,t):(ut(vt,vt.current&1),n=Ji(n,e,t),n!==null?n.sibling:null);ut(vt,vt.current&1);break;case 19:if(i=(t&e.childLanes)!==0,n.flags&128){if(i)return U0(n,e,t);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ut(vt,vt.current),i)break;return null;case 22:case 23:return e.lanes=0,D0(n,e,t)}return Ji(n,e,t)}var F0,Pd,O0,k0;F0=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Pd=function(){};O0=function(n,e,t,i){var r=n.memoizedProps;if(r!==i){n=e.stateNode,fs(Di.current);var s=null;switch(t){case"input":r=Qf(n,r),i=Qf(n,i),s=[];break;case"select":r=Mt({},r,{value:void 0}),i=Mt({},i,{value:void 0}),s=[];break;case"textarea":r=td(n,r),i=td(n,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(n.onclick=Iu)}id(t,i);var o;t=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ra.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(t||(t={}),t[o]=l[o])}else t||(s||(s=[]),s.push(u,t)),t=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ra.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ft("scroll",n),s||a===l||(s=[])):(s=s||[]).push(u,l))}t&&(s=s||[]).push("style",t);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};k0=function(n,e,t,i){t!==i&&(e.flags|=4)};function Jo(n,e){if(!pt)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function Kt(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,i=0;if(e)for(var r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=n,r=r.sibling;else for(r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=n,r=r.sibling;return n.subtreeFlags|=i,n.childLanes=t,e}function XM(n,e,t){var i=e.pendingProps;switch(fp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Kt(e),null;case 1:return vn(e.type)&&Nu(),Kt(e),null;case 3:return i=e.stateNode,Ao(),dt(gn),dt(nn),yp(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(n===null||n.child===null)&&(Cl(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,di!==null&&(kd(di),di=null))),Pd(n,e),Kt(e),null;case 5:xp(e);var r=fs(Ba.current);if(t=e.type,n!==null&&e.stateNode!=null)O0(n,e,t,i,r),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(te(166));return Kt(e),null}if(n=fs(Di.current),Cl(e)){i=e.stateNode,t=e.type;var s=e.memoizedProps;switch(i[wi]=e,i[ka]=s,n=(e.mode&1)!==0,t){case"dialog":ft("cancel",i),ft("close",i);break;case"iframe":case"object":case"embed":ft("load",i);break;case"video":case"audio":for(r=0;r<fa.length;r++)ft(fa[r],i);break;case"source":ft("error",i);break;case"img":case"image":case"link":ft("error",i),ft("load",i);break;case"details":ft("toggle",i);break;case"input":Em(i,s),ft("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},ft("invalid",i);break;case"textarea":wm(i,s),ft("invalid",i)}id(t,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Al(i.textContent,a,n),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Al(i.textContent,a,n),r=["children",""+a]):Ra.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ft("scroll",i)}switch(t){case"input":vl(i),Tm(i,s,!0);break;case"textarea":vl(i),Am(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Iu)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=dv(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=o.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof i.is=="string"?n=o.createElement(t,{is:i.is}):(n=o.createElement(t),t==="select"&&(o=n,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):n=o.createElementNS(n,t),n[wi]=e,n[ka]=i,F0(n,e,!1,!1),e.stateNode=n;e:{switch(o=rd(t,i),t){case"dialog":ft("cancel",n),ft("close",n),r=i;break;case"iframe":case"object":case"embed":ft("load",n),r=i;break;case"video":case"audio":for(r=0;r<fa.length;r++)ft(fa[r],n);r=i;break;case"source":ft("error",n),r=i;break;case"img":case"image":case"link":ft("error",n),ft("load",n),r=i;break;case"details":ft("toggle",n),r=i;break;case"input":Em(n,i),r=Qf(n,i),ft("invalid",n);break;case"option":r=i;break;case"select":n._wrapperState={wasMultiple:!!i.multiple},r=Mt({},i,{value:void 0}),ft("invalid",n);break;case"textarea":wm(n,i),r=td(n,i),ft("invalid",n);break;default:r=i}id(t,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?mv(n,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&hv(n,l)):s==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&ba(n,l):typeof l=="number"&&ba(n,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ra.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ft("scroll",n):l!=null&&Kh(n,s,l,o))}switch(t){case"input":vl(n),Tm(n,i,!1);break;case"textarea":vl(n),Am(n);break;case"option":i.value!=null&&n.setAttribute("value",""+Fr(i.value));break;case"select":n.multiple=!!i.multiple,s=i.value,s!=null?co(n,!!i.multiple,s,!1):i.defaultValue!=null&&co(n,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(n.onclick=Iu)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Kt(e),null;case 6:if(n&&e.stateNode!=null)k0(n,e,n.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(te(166));if(t=fs(Ba.current),fs(Di.current),Cl(e)){if(i=e.stateNode,t=e.memoizedProps,i[wi]=e,(s=i.nodeValue!==t)&&(n=Fn,n!==null))switch(n.tag){case 3:Al(i.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Al(i.nodeValue,t,(n.mode&1)!==0)}s&&(e.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[wi]=e,e.stateNode=i}return Kt(e),null;case 13:if(dt(vt),i=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(pt&&Nn!==null&&e.mode&1&&!(e.flags&128))n0(),To(),e.flags|=98560,s=!1;else if(s=Cl(e),i!==null&&i.dehydrated!==null){if(n===null){if(!s)throw Error(te(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(te(317));s[wi]=e}else To(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Kt(e),s=!1}else di!==null&&(kd(di),di=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=t,e):(i=i!==null,i!==(n!==null&&n.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(n===null||vt.current&1?Ot===0&&(Ot=3):Lp())),e.updateQueue!==null&&(e.flags|=4),Kt(e),null);case 4:return Ao(),Pd(n,e),n===null&&Fa(e.stateNode.containerInfo),Kt(e),null;case 10:return mp(e.type._context),Kt(e),null;case 17:return vn(e.type)&&Nu(),Kt(e),null;case 19:if(dt(vt),s=e.memoizedState,s===null)return Kt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Jo(s,!1);else{if(Ot!==0||n!==null&&n.flags&128)for(n=e.child;n!==null;){if(o=Vu(n),o!==null){for(e.flags|=128,Jo(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=t,t=e.child;t!==null;)s=t,n=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=n,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,n=o.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return ut(vt,vt.current&1|2),e.child}n=n.sibling}s.tail!==null&&bt()>Ro&&(e.flags|=128,i=!0,Jo(s,!1),e.lanes=4194304)}else{if(!i)if(n=Vu(o),n!==null){if(e.flags|=128,i=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),Jo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!pt)return Kt(e),null}else 2*bt()-s.renderingStartTime>Ro&&t!==1073741824&&(e.flags|=128,i=!0,Jo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(t=s.last,t!==null?t.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=bt(),e.sibling=null,t=vt.current,ut(vt,i?t&1|2:t&1),e):(Kt(e),null);case 22:case 23:return Dp(),i=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Dn&1073741824&&(Kt(e),e.subtreeFlags&6&&(e.flags|=8192)):Kt(e),null;case 24:return null;case 25:return null}throw Error(te(156,e.tag))}function jM(n,e){switch(fp(e),e.tag){case 1:return vn(e.type)&&Nu(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return Ao(),dt(gn),dt(nn),yp(),n=e.flags,n&65536&&!(n&128)?(e.flags=n&-65537|128,e):null;case 5:return xp(e),null;case 13:if(dt(vt),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(te(340));To()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return dt(vt),null;case 4:return Ao(),null;case 10:return mp(e.type._context),null;case 22:case 23:return Dp(),null;case 24:return null;default:return null}}var Pl=!1,Jt=!1,YM=typeof WeakSet=="function"?WeakSet:Set,_e=null;function so(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){Tt(n,e,i)}else t.current=null}function Dd(n,e,t){try{t()}catch(i){Tt(n,e,i)}}var m_=!1;function qM(n,e){if(pd=Pu,n=Gv(),up(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else e:{t=(t=n.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var o=0,a=-1,l=-1,u=0,c=0,d=n,h=null;t:for(;;){for(var p;d!==t||r!==0&&d.nodeType!==3||(a=o+r),d!==s||i!==0&&d.nodeType!==3||(l=o+i),d.nodeType===3&&(o+=d.nodeValue.length),(p=d.firstChild)!==null;)h=d,d=p;for(;;){if(d===n)break t;if(h===t&&++u===r&&(a=o),h===s&&++c===i&&(l=o),(p=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=p}t=a===-1||l===-1?null:{start:a,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(md={focusedElem:n,selectionRange:t},Pu=!1,_e=e;_e!==null;)if(e=_e,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,_e=n;else for(;_e!==null;){e=_e;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var m=v.memoizedProps,_=v.memoizedState,f=e.stateNode,x=f.getSnapshotBeforeUpdate(e.elementType===e.type?m:ci(e.type,m),_);f.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var S=e.stateNode.containerInfo;S.nodeType===1?S.textContent="":S.nodeType===9&&S.documentElement&&S.removeChild(S.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(te(163))}}catch(y){Tt(e,e.return,y)}if(n=e.sibling,n!==null){n.return=e.return,_e=n;break}_e=e.return}return v=m_,m_=!1,v}function Ma(n,e,t){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&n)===n){var s=r.destroy;r.destroy=void 0,s!==void 0&&Dd(e,t,s)}r=r.next}while(r!==i)}}function xc(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var i=t.create;t.destroy=i()}t=t.next}while(t!==e)}}function Ld(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function z0(n){var e=n.alternate;e!==null&&(n.alternate=null,z0(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[wi],delete e[ka],delete e[vd],delete e[PM],delete e[DM])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function B0(n){return n.tag===5||n.tag===3||n.tag===4}function __(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||B0(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Id(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=Iu));else if(i!==4&&(n=n.child,n!==null))for(Id(n,e,t),n=n.sibling;n!==null;)Id(n,e,t),n=n.sibling}function Nd(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(i!==4&&(n=n.child,n!==null))for(Nd(n,e,t),n=n.sibling;n!==null;)Nd(n,e,t),n=n.sibling}var Xt=null,fi=!1;function ar(n,e,t){for(t=t.child;t!==null;)V0(n,e,t),t=t.sibling}function V0(n,e,t){if(Pi&&typeof Pi.onCommitFiberUnmount=="function")try{Pi.onCommitFiberUnmount(fc,t)}catch{}switch(t.tag){case 5:Jt||so(t,e);case 6:var i=Xt,r=fi;Xt=null,ar(n,e,t),Xt=i,fi=r,Xt!==null&&(fi?(n=Xt,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):Xt.removeChild(t.stateNode));break;case 18:Xt!==null&&(fi?(n=Xt,t=t.stateNode,n.nodeType===8?Kc(n.parentNode,t):n.nodeType===1&&Kc(n,t),Ia(n)):Kc(Xt,t.stateNode));break;case 4:i=Xt,r=fi,Xt=t.stateNode.containerInfo,fi=!0,ar(n,e,t),Xt=i,fi=r;break;case 0:case 11:case 14:case 15:if(!Jt&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Dd(t,e,o),r=r.next}while(r!==i)}ar(n,e,t);break;case 1:if(!Jt&&(so(t,e),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(a){Tt(t,e,a)}ar(n,e,t);break;case 21:ar(n,e,t);break;case 22:t.mode&1?(Jt=(i=Jt)||t.memoizedState!==null,ar(n,e,t),Jt=i):ar(n,e,t);break;default:ar(n,e,t)}}function g_(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new YM),e.forEach(function(i){var r=iE.bind(null,n,i);t.has(i)||(t.add(i),i.then(r,r))})}}function oi(n,e){var t=e.deletions;if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];try{var s=n,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Xt=a.stateNode,fi=!1;break e;case 3:Xt=a.stateNode.containerInfo,fi=!0;break e;case 4:Xt=a.stateNode.containerInfo,fi=!0;break e}a=a.return}if(Xt===null)throw Error(te(160));V0(s,o,r),Xt=null,fi=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){Tt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)H0(e,n),e=e.sibling}function H0(n,e){var t=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(oi(e,n),Si(n),i&4){try{Ma(3,n,n.return),xc(3,n)}catch(m){Tt(n,n.return,m)}try{Ma(5,n,n.return)}catch(m){Tt(n,n.return,m)}}break;case 1:oi(e,n),Si(n),i&512&&t!==null&&so(t,t.return);break;case 5:if(oi(e,n),Si(n),i&512&&t!==null&&so(t,t.return),n.flags&32){var r=n.stateNode;try{ba(r,"")}catch(m){Tt(n,n.return,m)}}if(i&4&&(r=n.stateNode,r!=null)){var s=n.memoizedProps,o=t!==null?t.memoizedProps:s,a=n.type,l=n.updateQueue;if(n.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&cv(r,s),rd(a,o);var u=rd(a,s);for(o=0;o<l.length;o+=2){var c=l[o],d=l[o+1];c==="style"?mv(r,d):c==="dangerouslySetInnerHTML"?hv(r,d):c==="children"?ba(r,d):Kh(r,c,d,u)}switch(a){case"input":Jf(r,s);break;case"textarea":fv(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?co(r,!!s.multiple,p,!1):h!==!!s.multiple&&(s.defaultValue!=null?co(r,!!s.multiple,s.defaultValue,!0):co(r,!!s.multiple,s.multiple?[]:"",!1))}r[ka]=s}catch(m){Tt(n,n.return,m)}}break;case 6:if(oi(e,n),Si(n),i&4){if(n.stateNode===null)throw Error(te(162));r=n.stateNode,s=n.memoizedProps;try{r.nodeValue=s}catch(m){Tt(n,n.return,m)}}break;case 3:if(oi(e,n),Si(n),i&4&&t!==null&&t.memoizedState.isDehydrated)try{Ia(e.containerInfo)}catch(m){Tt(n,n.return,m)}break;case 4:oi(e,n),Si(n);break;case 13:oi(e,n),Si(n),r=n.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(bp=bt())),i&4&&g_(n);break;case 22:if(c=t!==null&&t.memoizedState!==null,n.mode&1?(Jt=(u=Jt)||c,oi(e,n),Jt=u):oi(e,n),Si(n),i&8192){if(u=n.memoizedState!==null,(n.stateNode.isHidden=u)&&!c&&n.mode&1)for(_e=n,c=n.child;c!==null;){for(d=_e=c;_e!==null;){switch(h=_e,p=h.child,h.tag){case 0:case 11:case 14:case 15:Ma(4,h,h.return);break;case 1:so(h,h.return);var v=h.stateNode;if(typeof v.componentWillUnmount=="function"){i=h,t=h.return;try{e=i,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(m){Tt(i,t,m)}}break;case 5:so(h,h.return);break;case 22:if(h.memoizedState!==null){x_(d);continue}}p!==null?(p.return=h,_e=p):x_(d)}c=c.sibling}e:for(c=null,d=n;;){if(d.tag===5){if(c===null){c=d;try{r=d.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=pv("display",o))}catch(m){Tt(n,n.return,m)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(m){Tt(n,n.return,m)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===n)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===n)break e;for(;d.sibling===null;){if(d.return===null||d.return===n)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:oi(e,n),Si(n),i&4&&g_(n);break;case 21:break;default:oi(e,n),Si(n)}}function Si(n){var e=n.flags;if(e&2){try{e:{for(var t=n.return;t!==null;){if(B0(t)){var i=t;break e}t=t.return}throw Error(te(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(ba(r,""),i.flags&=-33);var s=__(n);Nd(n,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=__(n);Id(n,a,o);break;default:throw Error(te(161))}}catch(l){Tt(n,n.return,l)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function $M(n,e,t){_e=n,G0(n)}function G0(n,e,t){for(var i=(n.mode&1)!==0;_e!==null;){var r=_e,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Pl;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Jt;a=Pl;var u=Jt;if(Pl=o,(Jt=l)&&!u)for(_e=r;_e!==null;)o=_e,l=o.child,o.tag===22&&o.memoizedState!==null?y_(r):l!==null?(l.return=o,_e=l):y_(r);for(;s!==null;)_e=s,G0(s),s=s.sibling;_e=r,Pl=a,Jt=u}v_(n)}else r.subtreeFlags&8772&&s!==null?(s.return=r,_e=s):v_(n)}}function v_(n){for(;_e!==null;){var e=_e;if(e.flags&8772){var t=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Jt||xc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Jt)if(t===null)i.componentDidMount();else{var r=e.elementType===e.type?t.memoizedProps:ci(e.type,t.memoizedProps);i.componentDidUpdate(r,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&n_(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}n_(e,o,t)}break;case 5:var a=e.stateNode;if(t===null&&e.flags&4){t=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&Ia(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(te(163))}Jt||e.flags&512&&Ld(e)}catch(h){Tt(e,e.return,h)}}if(e===n){_e=null;break}if(t=e.sibling,t!==null){t.return=e.return,_e=t;break}_e=e.return}}function x_(n){for(;_e!==null;){var e=_e;if(e===n){_e=null;break}var t=e.sibling;if(t!==null){t.return=e.return,_e=t;break}_e=e.return}}function y_(n){for(;_e!==null;){var e=_e;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{xc(4,e)}catch(l){Tt(e,t,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Tt(e,r,l)}}var s=e.return;try{Ld(e)}catch(l){Tt(e,s,l)}break;case 5:var o=e.return;try{Ld(e)}catch(l){Tt(e,o,l)}}}catch(l){Tt(e,e.return,l)}if(e===n){_e=null;break}var a=e.sibling;if(a!==null){a.return=e.return,_e=a;break}_e=e.return}}var KM=Math.ceil,Wu=sr.ReactCurrentDispatcher,Cp=sr.ReactCurrentOwner,ii=sr.ReactCurrentBatchConfig,$e=0,Gt=null,Nt=null,jt=0,Dn=0,oo=Gr(0),Ot=0,Wa=null,ws=0,yc=0,Rp=0,Ea=null,pn=null,bp=0,Ro=1/0,Bi=null,Xu=!1,Ud=null,br=null,Dl=!1,yr=null,ju=0,Ta=0,Fd=null,pu=-1,mu=0;function ln(){return $e&6?bt():pu!==-1?pu:pu=bt()}function Pr(n){return n.mode&1?$e&2&&jt!==0?jt&-jt:IM.transition!==null?(mu===0&&(mu=Cv()),mu):(n=tt,n!==0||(n=window.event,n=n===void 0?16:Nv(n.type)),n):1}function gi(n,e,t,i){if(50<Ta)throw Ta=0,Fd=null,Error(te(185));rl(n,t,i),(!($e&2)||n!==Gt)&&(n===Gt&&(!($e&2)&&(yc|=t),Ot===4&&gr(n,jt)),xn(n,i),t===1&&$e===0&&!(e.mode&1)&&(Ro=bt()+500,_c&&Wr()))}function xn(n,e){var t=n.callbackNode;IS(n,e);var i=bu(n,n===Gt?jt:0);if(i===0)t!==null&&bm(t),n.callbackNode=null,n.callbackPriority=0;else if(e=i&-i,n.callbackPriority!==e){if(t!=null&&bm(t),e===1)n.tag===0?LM(S_.bind(null,n)):Jv(S_.bind(null,n)),RM(function(){!($e&6)&&Wr()}),t=null;else{switch(Rv(i)){case 1:t=tp;break;case 4:t=wv;break;case 16:t=Ru;break;case 536870912:t=Av;break;default:t=Ru}t=Z0(t,W0.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function W0(n,e){if(pu=-1,mu=0,$e&6)throw Error(te(327));var t=n.callbackNode;if(_o()&&n.callbackNode!==t)return null;var i=bu(n,n===Gt?jt:0);if(i===0)return null;if(i&30||i&n.expiredLanes||e)e=Yu(n,i);else{e=i;var r=$e;$e|=2;var s=j0();(Gt!==n||jt!==e)&&(Bi=null,Ro=bt()+500,ms(n,e));do try{JM();break}catch(a){X0(n,a)}while(!0);pp(),Wu.current=s,$e=r,Nt!==null?e=0:(Gt=null,jt=0,e=Ot)}if(e!==0){if(e===2&&(r=ud(n),r!==0&&(i=r,e=Od(n,r))),e===1)throw t=Wa,ms(n,0),gr(n,i),xn(n,bt()),t;if(e===6)gr(n,i);else{if(r=n.current.alternate,!(i&30)&&!ZM(r)&&(e=Yu(n,i),e===2&&(s=ud(n),s!==0&&(i=s,e=Od(n,s))),e===1))throw t=Wa,ms(n,0),gr(n,i),xn(n,bt()),t;switch(n.finishedWork=r,n.finishedLanes=i,e){case 0:case 1:throw Error(te(345));case 2:is(n,pn,Bi);break;case 3:if(gr(n,i),(i&130023424)===i&&(e=bp+500-bt(),10<e)){if(bu(n,0)!==0)break;if(r=n.suspendedLanes,(r&i)!==i){ln(),n.pingedLanes|=n.suspendedLanes&r;break}n.timeoutHandle=gd(is.bind(null,n,pn,Bi),e);break}is(n,pn,Bi);break;case 4:if(gr(n,i),(i&4194240)===i)break;for(e=n.eventTimes,r=-1;0<i;){var o=31-_i(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=bt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*KM(i/1960))-i,10<i){n.timeoutHandle=gd(is.bind(null,n,pn,Bi),i);break}is(n,pn,Bi);break;case 5:is(n,pn,Bi);break;default:throw Error(te(329))}}}return xn(n,bt()),n.callbackNode===t?W0.bind(null,n):null}function Od(n,e){var t=Ea;return n.current.memoizedState.isDehydrated&&(ms(n,e).flags|=256),n=Yu(n,e),n!==2&&(e=pn,pn=t,e!==null&&kd(e)),n}function kd(n){pn===null?pn=n:pn.push.apply(pn,n)}function ZM(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var r=t[i],s=r.getSnapshot;r=r.value;try{if(!xi(s(),r))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function gr(n,e){for(e&=~Rp,e&=~yc,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-_i(e),i=1<<t;n[t]=-1,e&=~i}}function S_(n){if($e&6)throw Error(te(327));_o();var e=bu(n,0);if(!(e&1))return xn(n,bt()),null;var t=Yu(n,e);if(n.tag!==0&&t===2){var i=ud(n);i!==0&&(e=i,t=Od(n,i))}if(t===1)throw t=Wa,ms(n,0),gr(n,e),xn(n,bt()),t;if(t===6)throw Error(te(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,is(n,pn,Bi),xn(n,bt()),null}function Pp(n,e){var t=$e;$e|=1;try{return n(e)}finally{$e=t,$e===0&&(Ro=bt()+500,_c&&Wr())}}function As(n){yr!==null&&yr.tag===0&&!($e&6)&&_o();var e=$e;$e|=1;var t=ii.transition,i=tt;try{if(ii.transition=null,tt=1,n)return n()}finally{tt=i,ii.transition=t,$e=e,!($e&6)&&Wr()}}function Dp(){Dn=oo.current,dt(oo)}function ms(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,CM(t)),Nt!==null)for(t=Nt.return;t!==null;){var i=t;switch(fp(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Nu();break;case 3:Ao(),dt(gn),dt(nn),yp();break;case 5:xp(i);break;case 4:Ao();break;case 13:dt(vt);break;case 19:dt(vt);break;case 10:mp(i.type._context);break;case 22:case 23:Dp()}t=t.return}if(Gt=n,Nt=n=Dr(n.current,null),jt=Dn=e,Ot=0,Wa=null,Rp=yc=ws=0,pn=Ea=null,cs!==null){for(e=0;e<cs.length;e++)if(t=cs[e],i=t.interleaved,i!==null){t.interleaved=null;var r=i.next,s=t.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}t.pending=i}cs=null}return n}function X0(n,e){do{var t=Nt;try{if(pp(),fu.current=Gu,Hu){for(var i=St.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Hu=!1}if(Ts=0,Ht=Ft=St=null,Sa=!1,Va=0,Cp.current=null,t===null||t.return===null){Ot=1,Wa=e,Nt=null;break}e:{var s=n,o=t.return,a=t,l=e;if(e=jt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=l_(o);if(p!==null){p.flags&=-257,u_(p,o,a,s,e),p.mode&1&&a_(s,u,e),e=p,l=u;var v=e.updateQueue;if(v===null){var m=new Set;m.add(l),e.updateQueue=m}else v.add(l);break e}else{if(!(e&1)){a_(s,u,e),Lp();break e}l=Error(te(426))}}else if(pt&&a.mode&1){var _=l_(o);if(_!==null){!(_.flags&65536)&&(_.flags|=256),u_(_,o,a,s,e),dp(Co(l,a));break e}}s=l=Co(l,a),Ot!==4&&(Ot=2),Ea===null?Ea=[s]:Ea.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var f=R0(s,l,e);t_(s,f);break e;case 1:a=l;var x=s.type,S=s.stateNode;if(!(s.flags&128)&&(typeof x.getDerivedStateFromError=="function"||S!==null&&typeof S.componentDidCatch=="function"&&(br===null||!br.has(S)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=b0(s,a,e);t_(s,y);break e}}s=s.return}while(s!==null)}q0(t)}catch(E){e=E,Nt===t&&t!==null&&(Nt=t=t.return);continue}break}while(!0)}function j0(){var n=Wu.current;return Wu.current=Gu,n===null?Gu:n}function Lp(){(Ot===0||Ot===3||Ot===2)&&(Ot=4),Gt===null||!(ws&268435455)&&!(yc&268435455)||gr(Gt,jt)}function Yu(n,e){var t=$e;$e|=2;var i=j0();(Gt!==n||jt!==e)&&(Bi=null,ms(n,e));do try{QM();break}catch(r){X0(n,r)}while(!0);if(pp(),$e=t,Wu.current=i,Nt!==null)throw Error(te(261));return Gt=null,jt=0,Ot}function QM(){for(;Nt!==null;)Y0(Nt)}function JM(){for(;Nt!==null&&!TS();)Y0(Nt)}function Y0(n){var e=K0(n.alternate,n,Dn);n.memoizedProps=n.pendingProps,e===null?q0(n):Nt=e,Cp.current=null}function q0(n){var e=n;do{var t=e.alternate;if(n=e.return,e.flags&32768){if(t=jM(t,e),t!==null){t.flags&=32767,Nt=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Ot=6,Nt=null;return}}else if(t=XM(t,e,Dn),t!==null){Nt=t;return}if(e=e.sibling,e!==null){Nt=e;return}Nt=e=n}while(e!==null);Ot===0&&(Ot=5)}function is(n,e,t){var i=tt,r=ii.transition;try{ii.transition=null,tt=1,eE(n,e,t,i)}finally{ii.transition=r,tt=i}return null}function eE(n,e,t,i){do _o();while(yr!==null);if($e&6)throw Error(te(327));t=n.finishedWork;var r=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(te(177));n.callbackNode=null,n.callbackPriority=0;var s=t.lanes|t.childLanes;if(NS(n,s),n===Gt&&(Nt=Gt=null,jt=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Dl||(Dl=!0,Z0(Ru,function(){return _o(),null})),s=(t.flags&15990)!==0,t.subtreeFlags&15990||s){s=ii.transition,ii.transition=null;var o=tt;tt=1;var a=$e;$e|=4,Cp.current=null,qM(n,t),H0(t,n),yM(md),Pu=!!pd,md=pd=null,n.current=t,$M(t),wS(),$e=a,tt=o,ii.transition=s}else n.current=t;if(Dl&&(Dl=!1,yr=n,ju=r),s=n.pendingLanes,s===0&&(br=null),RS(t.stateNode),xn(n,bt()),e!==null)for(i=n.onRecoverableError,t=0;t<e.length;t++)r=e[t],i(r.value,{componentStack:r.stack,digest:r.digest});if(Xu)throw Xu=!1,n=Ud,Ud=null,n;return ju&1&&n.tag!==0&&_o(),s=n.pendingLanes,s&1?n===Fd?Ta++:(Ta=0,Fd=n):Ta=0,Wr(),null}function _o(){if(yr!==null){var n=Rv(ju),e=ii.transition,t=tt;try{if(ii.transition=null,tt=16>n?16:n,yr===null)var i=!1;else{if(n=yr,yr=null,ju=0,$e&6)throw Error(te(331));var r=$e;for($e|=4,_e=n.current;_e!==null;){var s=_e,o=s.child;if(_e.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(_e=u;_e!==null;){var c=_e;switch(c.tag){case 0:case 11:case 15:Ma(8,c,s)}var d=c.child;if(d!==null)d.return=c,_e=d;else for(;_e!==null;){c=_e;var h=c.sibling,p=c.return;if(z0(c),c===u){_e=null;break}if(h!==null){h.return=p,_e=h;break}_e=p}}}var v=s.alternate;if(v!==null){var m=v.child;if(m!==null){v.child=null;do{var _=m.sibling;m.sibling=null,m=_}while(m!==null)}}_e=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,_e=o;else e:for(;_e!==null;){if(s=_e,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ma(9,s,s.return)}var f=s.sibling;if(f!==null){f.return=s.return,_e=f;break e}_e=s.return}}var x=n.current;for(_e=x;_e!==null;){o=_e;var S=o.child;if(o.subtreeFlags&2064&&S!==null)S.return=o,_e=S;else e:for(o=x;_e!==null;){if(a=_e,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:xc(9,a)}}catch(E){Tt(a,a.return,E)}if(a===o){_e=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,_e=y;break e}_e=a.return}}if($e=r,Wr(),Pi&&typeof Pi.onPostCommitFiberRoot=="function")try{Pi.onPostCommitFiberRoot(fc,n)}catch{}i=!0}return i}finally{tt=t,ii.transition=e}}return!1}function M_(n,e,t){e=Co(t,e),e=R0(n,e,1),n=Rr(n,e,1),e=ln(),n!==null&&(rl(n,1,e),xn(n,e))}function Tt(n,e,t){if(n.tag===3)M_(n,n,t);else for(;e!==null;){if(e.tag===3){M_(e,n,t);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(br===null||!br.has(i))){n=Co(t,n),n=b0(e,n,1),e=Rr(e,n,1),n=ln(),e!==null&&(rl(e,1,n),xn(e,n));break}}e=e.return}}function tE(n,e,t){var i=n.pingCache;i!==null&&i.delete(e),e=ln(),n.pingedLanes|=n.suspendedLanes&t,Gt===n&&(jt&t)===t&&(Ot===4||Ot===3&&(jt&130023424)===jt&&500>bt()-bp?ms(n,0):Rp|=t),xn(n,e)}function $0(n,e){e===0&&(n.mode&1?(e=Sl,Sl<<=1,!(Sl&130023424)&&(Sl=4194304)):e=1);var t=ln();n=Qi(n,e),n!==null&&(rl(n,e,t),xn(n,t))}function nE(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),$0(n,t)}function iE(n,e){var t=0;switch(n.tag){case 13:var i=n.stateNode,r=n.memoizedState;r!==null&&(t=r.retryLane);break;case 19:i=n.stateNode;break;default:throw Error(te(314))}i!==null&&i.delete(e),$0(n,t)}var K0;K0=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||gn.current)mn=!0;else{if(!(n.lanes&t)&&!(e.flags&128))return mn=!1,WM(n,e,t);mn=!!(n.flags&131072)}else mn=!1,pt&&e.flags&1048576&&e0(e,Ou,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;hu(n,e),n=e.pendingProps;var r=Eo(e,nn.current);mo(e,t),r=Mp(null,e,i,n,r,t);var s=Ep();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,vn(i)?(s=!0,Uu(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,gp(e),r.updater=vc,e.stateNode=r,r._reactInternals=e,Td(e,i,n,t),e=Cd(null,e,i,!0,s,t)):(e.tag=0,pt&&s&&cp(e),on(null,e,r,t),e=e.child),e;case 16:i=e.elementType;e:{switch(hu(n,e),n=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=sE(i),n=ci(i,n),r){case 0:e=Ad(null,e,i,n,t);break e;case 1:e=d_(null,e,i,n,t);break e;case 11:e=c_(null,e,i,n,t);break e;case 14:e=f_(null,e,i,ci(i.type,n),t);break e}throw Error(te(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ci(i,r),Ad(n,e,i,r,t);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ci(i,r),d_(n,e,i,r,t);case 3:e:{if(I0(e),n===null)throw Error(te(387));i=e.pendingProps,s=e.memoizedState,r=s.element,o0(n,e),Bu(e,i,null,t);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Co(Error(te(423)),e),e=h_(n,e,i,t,r);break e}else if(i!==r){r=Co(Error(te(424)),e),e=h_(n,e,i,t,r);break e}else for(Nn=Cr(e.stateNode.containerInfo.firstChild),Fn=e,pt=!0,di=null,t=r0(e,null,i,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(To(),i===r){e=Ji(n,e,t);break e}on(n,e,i,t)}e=e.child}return e;case 5:return a0(e),n===null&&Sd(e),i=e.type,r=e.pendingProps,s=n!==null?n.memoizedProps:null,o=r.children,_d(i,r)?o=null:s!==null&&_d(i,s)&&(e.flags|=32),L0(n,e),on(n,e,o,t),e.child;case 6:return n===null&&Sd(e),null;case 13:return N0(n,e,t);case 4:return vp(e,e.stateNode.containerInfo),i=e.pendingProps,n===null?e.child=wo(e,null,i,t):on(n,e,i,t),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ci(i,r),c_(n,e,i,r,t);case 7:return on(n,e,e.pendingProps,t),e.child;case 8:return on(n,e,e.pendingProps.children,t),e.child;case 12:return on(n,e,e.pendingProps.children,t),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,ut(ku,i._currentValue),i._currentValue=o,s!==null)if(xi(s.value,o)){if(s.children===r.children&&!gn.current){e=Ji(n,e,t);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Yi(-1,t&-t),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),Md(s.return,t,e),a.lanes|=t;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(te(341));o.lanes|=t,a=o.alternate,a!==null&&(a.lanes|=t),Md(o,t,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}on(n,e,r.children,t),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,mo(e,t),r=ri(r),i=i(r),e.flags|=1,on(n,e,i,t),e.child;case 14:return i=e.type,r=ci(i,e.pendingProps),r=ci(i.type,r),f_(n,e,i,r,t);case 15:return P0(n,e,e.type,e.pendingProps,t);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ci(i,r),hu(n,e),e.tag=1,vn(i)?(n=!0,Uu(e)):n=!1,mo(e,t),C0(e,i,r),Td(e,i,r,t),Cd(null,e,i,!0,n,t);case 19:return U0(n,e,t);case 22:return D0(n,e,t)}throw Error(te(156,e.tag))};function Z0(n,e){return Tv(n,e)}function rE(n,e,t,i){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Zn(n,e,t,i){return new rE(n,e,t,i)}function Ip(n){return n=n.prototype,!(!n||!n.isReactComponent)}function sE(n){if(typeof n=="function")return Ip(n)?1:0;if(n!=null){if(n=n.$$typeof,n===Qh)return 11;if(n===Jh)return 14}return 2}function Dr(n,e){var t=n.alternate;return t===null?(t=Zn(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function _u(n,e,t,i,r,s){var o=2;if(i=n,typeof n=="function")Ip(n)&&(o=1);else if(typeof n=="string")o=5;else e:switch(n){case Ks:return _s(t.children,r,s,e);case Zh:o=8,r|=8;break;case qf:return n=Zn(12,t,e,r|2),n.elementType=qf,n.lanes=s,n;case $f:return n=Zn(13,t,e,r),n.elementType=$f,n.lanes=s,n;case Kf:return n=Zn(19,t,e,r),n.elementType=Kf,n.lanes=s,n;case av:return Sc(t,r,s,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case sv:o=10;break e;case ov:o=9;break e;case Qh:o=11;break e;case Jh:o=14;break e;case pr:o=16,i=null;break e}throw Error(te(130,n==null?n:typeof n,""))}return e=Zn(o,t,e,r),e.elementType=n,e.type=i,e.lanes=s,e}function _s(n,e,t,i){return n=Zn(7,n,i,e),n.lanes=t,n}function Sc(n,e,t,i){return n=Zn(22,n,i,e),n.elementType=av,n.lanes=t,n.stateNode={isHidden:!1},n}function sf(n,e,t){return n=Zn(6,n,null,e),n.lanes=t,n}function of(n,e,t){return e=Zn(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function oE(n,e,t,i,r){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=zc(0),this.expirationTimes=zc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=zc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Np(n,e,t,i,r,s,o,a,l){return n=new oE(n,e,t,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Zn(3,null,null,e),n.current=s,s.stateNode=n,s.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},gp(s),n}function aE(n,e,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:$s,key:i==null?null:""+i,children:n,containerInfo:e,implementation:t}}function Q0(n){if(!n)return Or;n=n._reactInternals;e:{if(Ps(n)!==n||n.tag!==1)throw Error(te(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(vn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(te(171))}if(n.tag===1){var t=n.type;if(vn(t))return Qv(n,t,e)}return e}function J0(n,e,t,i,r,s,o,a,l){return n=Np(t,i,!0,n,r,s,o,a,l),n.context=Q0(null),t=n.current,i=ln(),r=Pr(t),s=Yi(i,r),s.callback=e??null,Rr(t,s,r),n.current.lanes=r,rl(n,r,i),xn(n,i),n}function Mc(n,e,t,i){var r=e.current,s=ln(),o=Pr(r);return t=Q0(t),e.context===null?e.context=t:e.pendingContext=t,e=Yi(s,o),e.payload={element:n},i=i===void 0?null:i,i!==null&&(e.callback=i),n=Rr(r,e,o),n!==null&&(gi(n,r,o,s),cu(n,r,o)),o}function qu(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function E_(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function Up(n,e){E_(n,e),(n=n.alternate)&&E_(n,e)}function lE(){return null}var ex=typeof reportError=="function"?reportError:function(n){console.error(n)};function Fp(n){this._internalRoot=n}Ec.prototype.render=Fp.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(te(409));Mc(n,e,null,null)};Ec.prototype.unmount=Fp.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;As(function(){Mc(null,n,null,null)}),e[Zi]=null}};function Ec(n){this._internalRoot=n}Ec.prototype.unstable_scheduleHydration=function(n){if(n){var e=Dv();n={blockedOn:null,target:n,priority:e};for(var t=0;t<_r.length&&e!==0&&e<_r[t].priority;t++);_r.splice(t,0,n),t===0&&Iv(n)}};function Op(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Tc(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function T_(){}function uE(n,e,t,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=qu(o);s.call(u)}}var o=J0(e,i,n,0,null,!1,!1,"",T_);return n._reactRootContainer=o,n[Zi]=o.current,Fa(n.nodeType===8?n.parentNode:n),As(),o}for(;r=n.lastChild;)n.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=qu(l);a.call(u)}}var l=Np(n,0,!1,null,null,!1,!1,"",T_);return n._reactRootContainer=l,n[Zi]=l.current,Fa(n.nodeType===8?n.parentNode:n),As(function(){Mc(e,l,t,i)}),l}function wc(n,e,t,i,r){var s=t._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=qu(o);a.call(l)}}Mc(e,o,n,r)}else o=uE(t,e,n,r,i);return qu(o)}bv=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=ca(e.pendingLanes);t!==0&&(np(e,t|1),xn(e,bt()),!($e&6)&&(Ro=bt()+500,Wr()))}break;case 13:As(function(){var i=Qi(n,1);if(i!==null){var r=ln();gi(i,n,1,r)}}),Up(n,1)}};ip=function(n){if(n.tag===13){var e=Qi(n,134217728);if(e!==null){var t=ln();gi(e,n,134217728,t)}Up(n,134217728)}};Pv=function(n){if(n.tag===13){var e=Pr(n),t=Qi(n,e);if(t!==null){var i=ln();gi(t,n,e,i)}Up(n,e)}};Dv=function(){return tt};Lv=function(n,e){var t=tt;try{return tt=n,e()}finally{tt=t}};od=function(n,e,t){switch(e){case"input":if(Jf(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var i=t[e];if(i!==n&&i.form===n.form){var r=mc(i);if(!r)throw Error(te(90));uv(i),Jf(i,r)}}}break;case"textarea":fv(n,t);break;case"select":e=t.value,e!=null&&co(n,!!t.multiple,e,!1)}};vv=Pp;xv=As;var cE={usingClientEntryPoint:!1,Events:[ol,eo,mc,_v,gv,Pp]},ea={findFiberByHostInstance:us,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},fE={bundleType:ea.bundleType,version:ea.version,rendererPackageName:ea.rendererPackageName,rendererConfig:ea.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:sr.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Mv(n),n===null?null:n.stateNode},findFiberByHostInstance:ea.findFiberByHostInstance||lE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ll=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ll.isDisabled&&Ll.supportsFiber)try{fc=Ll.inject(fE),Pi=Ll}catch{}}Hn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=cE;Hn.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Op(e))throw Error(te(200));return aE(n,e,null,t)};Hn.createRoot=function(n,e){if(!Op(n))throw Error(te(299));var t=!1,i="",r=ex;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Np(n,1,!1,null,null,t,!1,i,r),n[Zi]=e.current,Fa(n.nodeType===8?n.parentNode:n),new Fp(e)};Hn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(te(188)):(n=Object.keys(n).join(","),Error(te(268,n)));return n=Mv(e),n=n===null?null:n.stateNode,n};Hn.flushSync=function(n){return As(n)};Hn.hydrate=function(n,e,t){if(!Tc(e))throw Error(te(200));return wc(null,n,e,!0,t)};Hn.hydrateRoot=function(n,e,t){if(!Op(n))throw Error(te(405));var i=t!=null&&t.hydratedSources||null,r=!1,s="",o=ex;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),e=J0(e,null,n,1,t??null,r,!1,s,o),n[Zi]=e.current,Fa(n),i)for(n=0;n<i.length;n++)t=i[n],r=t._getVersion,r=r(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,r]:e.mutableSourceEagerHydrationData.push(t,r);return new Ec(e)};Hn.render=function(n,e,t){if(!Tc(e))throw Error(te(200));return wc(null,n,e,!1,t)};Hn.unmountComponentAtNode=function(n){if(!Tc(n))throw Error(te(40));return n._reactRootContainer?(As(function(){wc(null,null,n,!1,function(){n._reactRootContainer=null,n[Zi]=null})}),!0):!1};Hn.unstable_batchedUpdates=Pp;Hn.unstable_renderSubtreeIntoContainer=function(n,e,t,i){if(!Tc(t))throw Error(te(200));if(n==null||n._reactInternals===void 0)throw Error(te(38));return wc(n,e,t,!1,i)};Hn.version="18.3.1-next-f1338f8080-20240426";function tx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(tx)}catch(n){console.error(n)}}tx(),tv.exports=Hn;var dE=tv.exports,nx,w_=dE;nx=w_.createRoot,w_.hydrateRoot;function Vi(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function ix(n,e){n.prototype=Object.create(e.prototype),n.prototype.constructor=n,n.__proto__=e}/*!
 * GSAP 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var On={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},bo={duration:.5,overwrite:!1,delay:0},kp,Yt,mt,Qn=1e8,ot=1/Qn,zd=Math.PI*2,hE=zd/4,pE=0,rx=Math.sqrt,mE=Math.cos,_E=Math.sin,Wt=function(e){return typeof e=="string"},At=function(e){return typeof e=="function"},er=function(e){return typeof e=="number"},zp=function(e){return typeof e>"u"},Li=function(e){return typeof e=="object"},yn=function(e){return e!==!1},Bp=function(){return typeof window<"u"},Il=function(e){return At(e)||Wt(e)},sx=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},tn=Array.isArray,Bd=/(?:-?\.?\d|\.)+/gi,ox=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,ao=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,af=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,ax=/[+-]=-?[.\d]+/,lx=/[^,'"\[\]\s]+/gi,gE=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,xt,Ei,Vd,Vp,Bn={},$u={},ux,cx=function(e){return($u=Po(e,Bn))&&An},Hp=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Xa=function(e,t){return!t&&console.warn(e)},fx=function(e,t){return e&&(Bn[e]=t)&&$u&&($u[e]=t)||Bn},ja=function(){return 0},vE={suppressEvents:!0,isStart:!0,kill:!1},gu={suppressEvents:!0,kill:!1},xE={suppressEvents:!0},Gp={},Lr=[],Hd={},dx,Ln={},lf={},A_=30,vu=[],Wp="",Xp=function(e){var t=e[0],i,r;if(Li(t)||At(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(r=vu.length;r--&&!vu[r].targetTest(t););i=vu[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new Fx(e[r],i)))||e.splice(r,1);return e},gs=function(e){return e._gsap||Xp(Jn(e))[0]._gsap},hx=function(e,t,i){return(i=e[t])&&At(i)?e[t]():zp(i)&&e.getAttribute&&e.getAttribute(t)||i},Sn=function(e,t){return(e=e.split(",")).forEach(t)||e},Rt=function(e){return Math.round(e*1e5)/1e5||0},It=function(e){return Math.round(e*1e7)/1e7||0},go=function(e,t){var i=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+r:i==="-"?e-r:i==="*"?e*r:e/r},yE=function(e,t){for(var i=t.length,r=0;e.indexOf(t[r])<0&&++r<i;);return r<i},Ku=function(){var e=Lr.length,t=Lr.slice(0),i,r;for(Hd={},Lr.length=0,i=0;i<e;i++)r=t[i],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},jp=function(e){return!!(e._initted||e._startAt||e.add)},px=function(e,t,i,r){Lr.length&&!Yt&&Ku(),e.render(t,i,!!(Yt&&t<0&&jp(e))),Lr.length&&!Yt&&Ku()},mx=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(lx).length<2?t:Wt(e)?e.trim():e},_x=function(e){return e},Vn=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},SE=function(e){return function(t,i){for(var r in i)r in t||r==="duration"&&e||r==="ease"||(t[r]=i[r])}},Po=function(e,t){for(var i in t)e[i]=t[i];return e},C_=function n(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=Li(t[i])?n(e[i]||(e[i]={}),t[i]):t[i]);return e},Zu=function(e,t){var i={},r;for(r in e)r in t||(i[r]=e[r]);return i},wa=function(e){var t=e.parent||xt,i=e.keyframes?SE(tn(e.keyframes)):Vn;if(yn(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},ME=function(e,t){for(var i=e.length,r=i===t.length;r&&i--&&e[i]===t[i];);return i<0},gx=function(e,t,i,r,s){var o=e[r],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[r]=t,t._prev=o,t.parent=t._dp=e,t},Ac=function(e,t,i,r){i===void 0&&(i="_first"),r===void 0&&(r="_last");var s=t._prev,o=t._next;s?s._next=o:e[i]===t&&(e[i]=o),o?o._prev=s:e[r]===t&&(e[r]=s),t._next=t._prev=t.parent=null},kr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},vs=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},EE=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Gd=function(e,t,i,r){return e._startAt&&(Yt?e._startAt.revert(gu):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},TE=function n(e){return!e||e._ts&&n(e.parent)},R_=function(e){return e._repeat?Do(e._tTime,e=e.duration()+e._rDelay)*e:0},Do=function(e,t){var i=Math.floor(e=It(e/t));return e&&i===e?i-1:i},Qu=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Cc=function(e){return e._end=It(e._start+(e._tDur/Math.abs(e._ts||e._rts||ot)||0))},Rc=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=It(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Cc(e),i._dirty||vs(i,e)),e},vx=function(e,t){var i;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(i=Qu(e.rawTime(),t),(!t._dur||ll(0,t.totalDuration(),i)-t._tTime>ot)&&t.render(i,!0)),vs(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-ot}},Ai=function(e,t,i,r){return t.parent&&kr(t),t._start=It((er(i)?i:i||e!==xt?Yn(e,i,t):e._time)+t._delay),t._end=It(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),gx(e,t,"_first","_last",e._sort?"_start":0),Wd(t)||(e._recent=t),r||vx(e,t),e._ts<0&&Rc(e,e._tTime),e},xx=function(e,t){return(Bn.ScrollTrigger||Hp("scrollTrigger",t))&&Bn.ScrollTrigger.create(t,e)},yx=function(e,t,i,r,s){if(qp(e,t,s),!e._initted)return 1;if(!i&&e._pt&&!Yt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&dx!==In.frame)return Lr.push(e),e._lazy=[s,r],1},wE=function n(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||n(t))},Wd=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},AE=function(e,t,i,r){var s=e.ratio,o=t<0||!t&&(!e._start&&wE(e)&&!(!e._initted&&Wd(e))||(e._ts<0||e._dp._ts<0)&&!Wd(e))?0:1,a=e._rDelay,l=0,u,c,d;if(a&&e._repeat&&(l=ll(0,e._tDur,t),c=Do(l,a),e._yoyo&&c&1&&(o=1-o),c!==Do(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||Yt||r||e._zTime===ot||!t&&e._zTime){if(!e._initted&&yx(e,t,r,i,l))return;for(d=e._zTime,e._zTime=t||(i?ot:0),i||(i=t&&!d),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,u=e._pt;u;)u.r(o,u.d),u=u._next;t<0&&Gd(e,t,i,!0),e._onUpdate&&!i&&Un(e,"onUpdate"),l&&e._repeat&&!i&&e.parent&&Un(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&kr(e,1),!i&&!Yt&&(Un(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},CE=function(e,t,i){var r;if(i>t)for(r=e._first;r&&r._start<=i;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=i;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},Lo=function(e,t,i,r){var s=e._repeat,o=It(t)||0,a=e._tTime/e._tDur;return a&&!r&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:It(o*(s+1)+e._rDelay*s):o,a>0&&!r&&Rc(e,e._tTime=e._tDur*a),e.parent&&Cc(e),i||vs(e.parent,e),e},b_=function(e){return e instanceof an?vs(e):Lo(e,e._dur)},RE={_start:0,endTime:ja,totalDuration:ja},Yn=function n(e,t,i){var r=e.labels,s=e._recent||RE,o=e.duration()>=Qn?s.endTime(!1):e._dur,a,l,u;return Wt(t)&&(isNaN(t)||t in r)?(l=t.charAt(0),u=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(u?(a<0?s:i).totalDuration()/100:1)):a<0?(t in r||(r[t]=o),r[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),u&&i&&(l=l/100*(tn(i)?i[0]:i).totalDuration()),a>1?n(e,t.substr(0,a-1),i)+l:o+l)):t==null?o:+t},Aa=function(e,t,i){var r=er(t[1]),s=(r?2:1)+(e<2?0:1),o=t[s],a,l;if(r&&(o.duration=t[1]),o.parent=i,e){for(a=o,l=i;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=yn(l.vars.inherit)&&l.parent;o.immediateRender=yn(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new Lt(t[0],o,t[s+1])},Xr=function(e,t){return e||e===0?t(e):t},ll=function(e,t,i){return i<e?e:i>t?t:i},en=function(e,t){return!Wt(e)||!(t=gE.exec(e))?"":t[1]},bE=function(e,t,i){return Xr(i,function(r){return ll(e,t,r)})},Xd=[].slice,Sx=function(e,t){return e&&Li(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Li(e[0]))&&!e.nodeType&&e!==Ei},PE=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(r){var s;return Wt(r)&&!t||Sx(r,1)?(s=i).push.apply(s,Jn(r)):i.push(r)})||i},Jn=function(e,t,i){return mt&&!t&&mt.selector?mt.selector(e):Wt(e)&&!i&&(Vd||!Io())?Xd.call((t||Vp).querySelectorAll(e),0):tn(e)?PE(e,i):Sx(e)?Xd.call(e,0):e?[e]:[]},jd=function(e){return e=Jn(e)[0]||Xa("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return Jn(t,i.querySelectorAll?i:i===e?Xa("Invalid scope")||Vp.createElement("div"):e)}},Mx=function(e){return e.sort(function(){return .5-Math.random()})},Ex=function(e){if(At(e))return e;var t=Li(e)?e:{each:e},i=xs(t.ease),r=t.from||0,s=parseFloat(t.base)||0,o={},a=r>0&&r<1,l=isNaN(r)||a,u=t.axis,c=r,d=r;return Wt(r)?c=d={center:.5,edges:.5,end:1}[r]||0:!a&&l&&(c=r[0],d=r[1]),function(h,p,v){var m=(v||t).length,_=o[m],f,x,S,y,E,w,A,b,M;if(!_){if(M=t.grid==="auto"?0:(t.grid||[1,Qn])[1],!M){for(A=-Qn;A<(A=v[M++].getBoundingClientRect().left)&&M<m;);M<m&&M--}for(_=o[m]=[],f=l?Math.min(M,m)*c-.5:r%M,x=M===Qn?0:l?m*d/M-.5:r/M|0,A=0,b=Qn,w=0;w<m;w++)S=w%M-f,y=x-(w/M|0),_[w]=E=u?Math.abs(u==="y"?y:S):rx(S*S+y*y),E>A&&(A=E),E<b&&(b=E);r==="random"&&Mx(_),_.max=A-b,_.min=b,_.v=m=(parseFloat(t.amount)||parseFloat(t.each)*(M>m?m-1:u?u==="y"?m/M:M:Math.max(M,m/M))||0)*(r==="edges"?-1:1),_.b=m<0?s-m:s,_.u=en(t.amount||t.each)||0,i=i&&m<0?Ix(i):i}return m=(_[h]-_.min)/_.max||0,It(_.b+(i?i(m):m)*_.v)+_.u}},Yd=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var r=It(Math.round(parseFloat(i)/e)*e*t);return(r-r%1)/t+(er(i)?0:en(i))}},Tx=function(e,t){var i=tn(e),r,s;return!i&&Li(e)&&(r=i=e.radius||Qn,e.values?(e=Jn(e.values),(s=!er(e[0]))&&(r*=r)):e=Yd(e.increment)),Xr(t,i?At(e)?function(o){return s=e(o),Math.abs(s-o)<=r?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),u=Qn,c=0,d=e.length,h,p;d--;)s?(h=e[d].x-a,p=e[d].y-l,h=h*h+p*p):h=Math.abs(e[d]-a),h<u&&(u=h,c=d);return c=!r||u<=r?e[c]:o,s||c===o||er(o)?c:c+en(o)}:Yd(e))},wx=function(e,t,i,r){return Xr(tn(e)?!t:i===!0?!!(i=0):!r,function(){return tn(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(r=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*r)/r})},DE=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(r){return t.reduce(function(s,o){return o(s)},r)}},LE=function(e,t){return function(i){return e(parseFloat(i))+(t||en(i))}},IE=function(e,t,i){return Cx(e,t,0,1,i)},Ax=function(e,t,i){return Xr(i,function(r){return e[~~t(r)]})},NE=function n(e,t,i){var r=t-e;return tn(e)?Ax(e,n(0,e.length),t):Xr(i,function(s){return(r+(s-e)%r)%r+e})},UE=function n(e,t,i){var r=t-e,s=r*2;return tn(e)?Ax(e,n(0,e.length-1),t):Xr(i,function(o){return o=(s+(o-e)%s)%s||0,e+(o>r?s-o:o)})},Ya=function(e){for(var t=0,i="",r,s,o,a;~(r=e.indexOf("random(",t));)o=e.indexOf(")",r),a=e.charAt(r+7)==="[",s=e.substr(r+7,o-r-7).match(a?lx:Bd),i+=e.substr(t,r-t)+wx(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),t=o+1;return i+e.substr(t,e.length-t)},Cx=function(e,t,i,r,s){var o=t-e,a=r-i;return Xr(s,function(l){return i+((l-e)/o*a||0)})},FE=function n(e,t,i,r){var s=isNaN(e+t)?0:function(p){return(1-p)*e+p*t};if(!s){var o=Wt(e),a={},l,u,c,d,h;if(i===!0&&(r=1)&&(i=null),o)e={p:e},t={p:t};else if(tn(e)&&!tn(t)){for(c=[],d=e.length,h=d-2,u=1;u<d;u++)c.push(n(e[u-1],e[u]));d--,s=function(v){v*=d;var m=Math.min(h,~~v);return c[m](v-m)},i=t}else r||(e=Po(tn(e)?[]:{},e));if(!c){for(l in t)Yp.call(a,e,l,"get",t[l]);s=function(v){return Zp(v,a)||(o?e.p:e)}}}return Xr(i,s)},P_=function(e,t,i){var r=e.labels,s=Qn,o,a,l;for(o in r)a=r[o]-t,a<0==!!i&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},Un=function(e,t,i){var r=e.vars,s=r[t],o=mt,a=e._ctx,l,u,c;if(s)return l=r[t+"Params"],u=r.callbackScope||e,i&&Lr.length&&Ku(),a&&(mt=a),c=l?s.apply(u,l):s.call(u),mt=o,c},da=function(e){return kr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Yt),e.progress()<1&&Un(e,"onInterrupt"),e},lo,Rx=[],bx=function(e){if(e)if(e=!e.name&&e.default||e,Bp()||e.headless){var t=e.name,i=At(e),r=t&&!i&&e.init?function(){this._props=[]}:e,s={init:ja,render:Zp,add:Yp,kill:QE,modifier:ZE,rawVars:0},o={targetTest:0,get:0,getSetter:Kp,aliases:{},register:0};if(Io(),e!==r){if(Ln[t])return;Vn(r,Vn(Zu(e,s),o)),Po(r.prototype,Po(s,Zu(e,o))),Ln[r.prop=t]=r,e.targetTest&&(vu.push(r),Gp[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}fx(t,r),e.register&&e.register(An,r,Mn)}else Rx.push(e)},st=255,ha={aqua:[0,st,st],lime:[0,st,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,st],navy:[0,0,128],white:[st,st,st],olive:[128,128,0],yellow:[st,st,0],orange:[st,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[st,0,0],pink:[st,192,203],cyan:[0,st,st],transparent:[st,st,st,0]},uf=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*st+.5|0},Px=function(e,t,i){var r=e?er(e)?[e>>16,e>>8&st,e&st]:0:ha.black,s,o,a,l,u,c,d,h,p,v;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),ha[e])r=ha[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&st,r&st,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&st,e&st]}else if(e.substr(0,3)==="hsl"){if(r=v=e.match(Bd),!t)l=+r[0]%360/360,u=+r[1]/100,c=+r[2]/100,o=c<=.5?c*(u+1):c+u-c*u,s=c*2-o,r.length>3&&(r[3]*=1),r[0]=uf(l+1/3,s,o),r[1]=uf(l,s,o),r[2]=uf(l-1/3,s,o);else if(~e.indexOf("="))return r=e.match(ox),i&&r.length<4&&(r[3]=1),r}else r=e.match(Bd)||ha.transparent;r=r.map(Number)}return t&&!v&&(s=r[0]/st,o=r[1]/st,a=r[2]/st,d=Math.max(s,o,a),h=Math.min(s,o,a),c=(d+h)/2,d===h?l=u=0:(p=d-h,u=c>.5?p/(2-d-h):p/(d+h),l=d===s?(o-a)/p+(o<a?6:0):d===o?(a-s)/p+2:(s-o)/p+4,l*=60),r[0]=~~(l+.5),r[1]=~~(u*100+.5),r[2]=~~(c*100+.5)),i&&r.length<4&&(r[3]=1),r},Dx=function(e){var t=[],i=[],r=-1;return e.split(Ir).forEach(function(s){var o=s.match(ao)||[];t.push.apply(t,o),i.push(r+=o.length+1)}),t.c=i,t},D_=function(e,t,i){var r="",s=(e+r).match(Ir),o=t?"hsla(":"rgba(",a=0,l,u,c,d;if(!s)return e;if(s=s.map(function(h){return(h=Px(h,t,1))&&o+(t?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),i&&(c=Dx(e),l=i.c,l.join(r)!==c.c.join(r)))for(u=e.replace(Ir,"1").split(ao),d=u.length-1;a<d;a++)r+=u[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(c.length?c:s.length?s:i).shift());if(!u)for(u=e.split(Ir),d=u.length-1;a<d;a++)r+=u[a]+s[a];return r+u[d]},Ir=function(){var n="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in ha)n+="|"+e+"\\b";return new RegExp(n+")","gi")}(),OE=/hsl[a]?\(/,Lx=function(e){var t=e.join(" "),i;if(Ir.lastIndex=0,Ir.test(t))return i=OE.test(t),e[1]=D_(e[1],i),e[0]=D_(e[0],i,Dx(e[1])),!0},qa,In=function(){var n=Date.now,e=500,t=33,i=n(),r=i,s=1e3/240,o=s,a=[],l,u,c,d,h,p,v=function m(_){var f=n()-r,x=_===!0,S,y,E,w;if((f>e||f<0)&&(i+=f-t),r+=f,E=r-i,S=E-o,(S>0||x)&&(w=++d.frame,h=E-d.time*1e3,d.time=E=E/1e3,o+=S+(S>=s?4:s-S),y=1),x||(l=u(m)),y)for(p=0;p<a.length;p++)a[p](E,h,w,_)};return d={time:0,frame:0,tick:function(){v(!0)},deltaRatio:function(_){return h/(1e3/(_||60))},wake:function(){ux&&(!Vd&&Bp()&&(Ei=Vd=window,Vp=Ei.document||{},Bn.gsap=An,(Ei.gsapVersions||(Ei.gsapVersions=[])).push(An.version),cx($u||Ei.GreenSockGlobals||!Ei.gsap&&Ei||{}),Rx.forEach(bx)),c=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&d.sleep(),u=c||function(_){return setTimeout(_,o-d.time*1e3+1|0)},qa=1,v(2))},sleep:function(){(c?cancelAnimationFrame:clearTimeout)(l),qa=0,u=ja},lagSmoothing:function(_,f){e=_||1/0,t=Math.min(f||33,e)},fps:function(_){s=1e3/(_||240),o=d.time*1e3+s},add:function(_,f,x){var S=f?function(y,E,w,A){_(y,E,w,A),d.remove(S)}:_;return d.remove(_),a[x?"unshift":"push"](S),Io(),S},remove:function(_,f){~(f=a.indexOf(_))&&a.splice(f,1)&&p>=f&&p--},_listeners:a},d}(),Io=function(){return!qa&&In.wake()},qe={},kE=/^[\d.\-M][\d.\-,\s]/,zE=/["']/g,BE=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),r=i[0],s=1,o=i.length,a,l,u;s<o;s++)l=i[s],a=s!==o-1?l.lastIndexOf(","):l.length,u=l.substr(0,a),t[r]=isNaN(u)?u.replace(zE,"").trim():+u,r=l.substr(a+1).trim();return t},VE=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<i?e.indexOf(")",i+1):i)},HE=function(e){var t=(e+"").split("("),i=qe[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[BE(t[1])]:VE(e).split(",").map(mx)):qe._CE&&kE.test(e)?qe._CE("",e):i},Ix=function(e){return function(t){return 1-e(1-t)}},Nx=function n(e,t){for(var i=e._first,r;i;)i instanceof an?n(i,t):i.vars.yoyoEase&&(!i._yoyo||!i._repeat)&&i._yoyo!==t&&(i.timeline?n(i.timeline,t):(r=i._ease,i._ease=i._yEase,i._yEase=r,i._yoyo=t)),i=i._next},xs=function(e,t){return e&&(At(e)?e:qe[e]||HE(e))||t},Ds=function(e,t,i,r){i===void 0&&(i=function(l){return 1-t(1-l)}),r===void 0&&(r=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:i,easeInOut:r},o;return Sn(e,function(a){qe[a]=Bn[a]=s,qe[o=a.toLowerCase()]=i;for(var l in s)qe[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=qe[a+"."+l]=s[l]}),s},Ux=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},cf=function n(e,t,i){var r=t>=1?t:1,s=(i||(e?.3:.45))/(t<1?t:1),o=s/zd*(Math.asin(1/r)||0),a=function(c){return c===1?1:r*Math.pow(2,-10*c)*_E((c-o)*s)+1},l=e==="out"?a:e==="in"?function(u){return 1-a(1-u)}:Ux(a);return s=zd/s,l.config=function(u,c){return n(e,u,c)},l},ff=function n(e,t){t===void 0&&(t=1.70158);var i=function(o){return o?--o*o*((t+1)*o+t)+1:0},r=e==="out"?i:e==="in"?function(s){return 1-i(1-s)}:Ux(i);return r.config=function(s){return n(e,s)},r};Sn("Linear,Quad,Cubic,Quart,Quint,Strong",function(n,e){var t=e<5?e+1:e;Ds(n+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});qe.Linear.easeNone=qe.none=qe.Linear.easeIn;Ds("Elastic",cf("in"),cf("out"),cf());(function(n,e){var t=1/e,i=2*t,r=2.5*t,s=function(a){return a<t?n*a*a:a<i?n*Math.pow(a-1.5/e,2)+.75:a<r?n*(a-=2.25/e)*a+.9375:n*Math.pow(a-2.625/e,2)+.984375};Ds("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);Ds("Expo",function(n){return Math.pow(2,10*(n-1))*n+n*n*n*n*n*n*(1-n)});Ds("Circ",function(n){return-(rx(1-n*n)-1)});Ds("Sine",function(n){return n===1?1:-mE(n*hE)+1});Ds("Back",ff("in"),ff("out"),ff());qe.SteppedEase=qe.steps=Bn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,r=e+(t?0:1),s=t?1:0,o=1-ot;return function(a){return((r*ll(0,o,a)|0)+s)*i}}};bo.ease=qe["quad.out"];Sn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(n){return Wp+=n+","+n+"Params,"});var Fx=function(e,t){this.id=pE++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:hx,this.set=t?t.getSetter:Kp},$a=function(){function n(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Lo(this,+t.duration,1,1),this.data=t.data,mt&&(this._ctx=mt,mt.data.push(this)),qa||In.wake()}var e=n.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,Lo(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,r){if(Io(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Rc(this,i),!s._dp||s.parent||vx(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&Ai(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===ot||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),px(this,i,r)),this},e.time=function(i,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+R_(this))%(this._dur+this._rDelay)||(i?this._dur:0),r):this._time},e.totalProgress=function(i,r){return arguments.length?this.totalTime(this.totalDuration()*i,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(i,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+R_(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(i,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*s,r):this._repeat?Do(this._tTime,s)+1:1},e.timeScale=function(i,r){if(!arguments.length)return this._rts===-ot?0:this._rts;if(this._rts===i)return this;var s=this.parent&&this._ts?Qu(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-ot?0:this._rts,this.totalTime(ll(-Math.abs(this._delay),this.totalDuration(),s),r!==!1),Cc(this),EE(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Io(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==ot&&(this._tTime-=ot)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=i;var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&Ai(r,this,i-this._delay),this}return this._start},e.endTime=function(i){return this._start+(yn(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var r=this.parent||this._dp;return r?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Qu(r.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=xE);var r=Yt;return Yt=i,jp(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),Yt=r,this},e.globalTime=function(i){for(var r=this,s=arguments.length?i:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(i):s},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,b_(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var r=this._time;return this._rDelay=i,b_(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,r){return this.totalTime(Yn(this,i),yn(r))},e.restart=function(i,r){return this.play().totalTime(i?-this._delay:0,yn(r)),this._dur||(this._zTime=-ot),this},e.play=function(i,r){return i!=null&&this.seek(i,r),this.reversed(!1).paused(!1)},e.reverse=function(i,r){return i!=null&&this.seek(i||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(i,r){return i!=null&&this.seek(i,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-ot:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-ot,this},e.isActive=function(){var i=this.parent||this._dp,r=this._start,s;return!!(!i||this._ts&&this._initted&&i.isActive()&&(s=i.rawTime(!0))>=r&&s<this.endTime(!0)-ot)},e.eventCallback=function(i,r,s){var o=this.vars;return arguments.length>1?(r?(o[i]=r,s&&(o[i+"Params"]=s),i==="onUpdate"&&(this._onUpdate=r)):delete o[i],this):o[i]},e.then=function(i){var r=this;return new Promise(function(s){var o=At(i)?i:_x,a=function(){var u=r.then;r.then=null,At(o)&&(o=o(r))&&(o.then||o===r)&&(r.then=u),s(o),r.then=u};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?a():r._prom=a})},e.kill=function(){da(this)},n}();Vn($a.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-ot,_prom:0,_ps:!1,_rts:1});var an=function(n){ix(e,n);function e(i,r){var s;return i===void 0&&(i={}),s=n.call(this,i)||this,s.labels={},s.smoothChildTiming=!!i.smoothChildTiming,s.autoRemoveChildren=!!i.autoRemoveChildren,s._sort=yn(i.sortChildren),xt&&Ai(i.parent||xt,Vi(s),r),i.reversed&&s.reverse(),i.paused&&s.paused(!0),i.scrollTrigger&&xx(Vi(s),i.scrollTrigger),s}var t=e.prototype;return t.to=function(r,s,o){return Aa(0,arguments,this),this},t.from=function(r,s,o){return Aa(1,arguments,this),this},t.fromTo=function(r,s,o,a){return Aa(2,arguments,this),this},t.set=function(r,s,o){return s.duration=0,s.parent=this,wa(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Lt(r,s,Yn(this,o),1),this},t.call=function(r,s,o){return Ai(this,Lt.delayedCall(0,r,s),o)},t.staggerTo=function(r,s,o,a,l,u,c){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=u,o.onCompleteParams=c,o.parent=this,new Lt(r,o,Yn(this,l)),this},t.staggerFrom=function(r,s,o,a,l,u,c){return o.runBackwards=1,wa(o).immediateRender=yn(o.immediateRender),this.staggerTo(r,s,o,a,l,u,c)},t.staggerFromTo=function(r,s,o,a,l,u,c,d){return a.startAt=o,wa(a).immediateRender=yn(a.immediateRender),this.staggerTo(r,s,a,l,u,c,d)},t.render=function(r,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,u=this._dur,c=r<=0?0:It(r),d=this._zTime<0!=r<0&&(this._initted||!u),h,p,v,m,_,f,x,S,y,E,w,A;if(this!==xt&&c>l&&r>=0&&(c=l),c!==this._tTime||o||d){if(a!==this._time&&u&&(c+=this._time-a,r+=this._time-a),h=c,y=this._start,S=this._ts,f=!S,d&&(u||(a=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(w=this._yoyo,_=u+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(_*100+r,s,o);if(h=It(c%_),c===l?(m=this._repeat,h=u):(E=It(c/_),m=~~E,m&&m===E&&(h=u,m--),h>u&&(h=u)),E=Do(this._tTime,_),!a&&this._tTime&&E!==m&&this._tTime-E*_-this._dur<=0&&(E=m),w&&m&1&&(h=u-h,A=1),m!==E&&!this._lock){var b=w&&E&1,M=b===(w&&m&1);if(m<E&&(b=!b),a=b?0:c%u?u:c,this._lock=1,this.render(a||(A?0:It(m*_)),s,!u)._lock=0,this._tTime=c,!s&&this.parent&&Un(this,"onRepeat"),this.vars.repeatRefresh&&!A&&(this.invalidate()._lock=1),a&&a!==this._time||f!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(u=this._dur,l=this._tDur,M&&(this._lock=2,a=b?u:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!A&&this.invalidate()),this._lock=0,!this._ts&&!f)return this;Nx(this,A)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(x=CE(this,It(a),It(h)),x&&(c-=h-(h=x._start))),this._tTime=c,this._time=h,this._act=!S,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&c&&!s&&!E&&(Un(this,"onStart"),this._tTime!==c))return this;if(h>=a&&r>=0)for(p=this._first;p;){if(v=p._next,(p._act||h>=p._start)&&p._ts&&x!==p){if(p.parent!==this)return this.render(r,s,o);if(p.render(p._ts>0?(h-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(h-p._start)*p._ts,s,o),h!==this._time||!this._ts&&!f){x=0,v&&(c+=this._zTime=-ot);break}}p=v}else{p=this._last;for(var T=r<0?r:h;p;){if(v=p._prev,(p._act||T<=p._end)&&p._ts&&x!==p){if(p.parent!==this)return this.render(r,s,o);if(p.render(p._ts>0?(T-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(T-p._start)*p._ts,s,o||Yt&&jp(p)),h!==this._time||!this._ts&&!f){x=0,v&&(c+=this._zTime=T?-ot:ot);break}}p=v}}if(x&&!s&&(this.pause(),x.render(h>=a?0:-ot)._zTime=h>=a?1:-1,this._ts))return this._start=y,Cc(this),this.render(r,s,o);this._onUpdate&&!s&&Un(this,"onUpdate",!0),(c===l&&this._tTime>=this.totalDuration()||!c&&a)&&(y===this._start||Math.abs(S)!==Math.abs(this._ts))&&(this._lock||((r||!u)&&(c===l&&this._ts>0||!c&&this._ts<0)&&kr(this,1),!s&&!(r<0&&!a)&&(c||a||!l)&&(Un(this,c===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(c<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,s){var o=this;if(er(s)||(s=Yn(this,s,r)),!(r instanceof $a)){if(tn(r))return r.forEach(function(a){return o.add(a,s)}),this;if(Wt(r))return this.addLabel(r,s);if(At(r))r=Lt.delayedCall(0,r);else return this}return this!==r?Ai(this,r,s):this},t.getChildren=function(r,s,o,a){r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-Qn);for(var l=[],u=this._first;u;)u._start>=a&&(u instanceof Lt?s&&l.push(u):(o&&l.push(u),r&&l.push.apply(l,u.getChildren(!0,s,o)))),u=u._next;return l},t.getById=function(r){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===r)return s[o]},t.remove=function(r){return Wt(r)?this.removeLabel(r):At(r)?this.killTweensOf(r):(r.parent===this&&Ac(this,r),r===this._recent&&(this._recent=this._last),vs(this))},t.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=It(In.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),n.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},t.addLabel=function(r,s){return this.labels[r]=Yn(this,s),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,s,o){var a=Lt.delayedCall(0,s||ja,o);return a.data="isPause",this._hasPause=1,Ai(this,a,Yn(this,r))},t.removePause=function(r){var s=this._first;for(r=Yn(this,r);s;)s._start===r&&s.data==="isPause"&&kr(s),s=s._next},t.killTweensOf=function(r,s,o){for(var a=this.getTweensOf(r,o),l=a.length;l--;)Sr!==a[l]&&a[l].kill(r,s);return this},t.getTweensOf=function(r,s){for(var o=[],a=Jn(r),l=this._first,u=er(s),c;l;)l instanceof Lt?yE(l._targets,a)&&(u?(!Sr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(c=l.getTweensOf(a,s)).length&&o.push.apply(o,c),l=l._next;return o},t.tweenTo=function(r,s){s=s||{};var o=this,a=Yn(o,r),l=s,u=l.startAt,c=l.onStart,d=l.onStartParams,h=l.immediateRender,p,v=Lt.to(o,Vn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale())||ot,onStart:function(){if(o.pause(),!p){var _=s.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale());v._dur!==_&&Lo(v,_,0,1).render(v._time,!0,!0),p=1}c&&c.apply(v,d||[])}},s));return h?v.render(0):v},t.tweenFromTo=function(r,s,o){return this.tweenTo(s,Vn({startAt:{time:Yn(this,r)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),P_(this,Yn(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),P_(this,Yn(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+ot)},t.shiftChildren=function(r,s,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,u;a;)a._start>=o&&(a._start+=r,a._end+=r),a=a._next;if(s)for(u in l)l[u]>=o&&(l[u]+=r);return vs(this)},t.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return n.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),vs(this)},t.totalDuration=function(r){var s=0,o=this,a=o._last,l=Qn,u,c,d;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-r:r));if(o._dirty){for(d=o.parent;a;)u=a._prev,a._dirty&&a.totalDuration(),c=a._start,c>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Ai(o,a,c-a._delay,1)._lock=0):l=c,c<0&&a._ts&&(s-=c,(!d&&!o._dp||d&&d.smoothChildTiming)&&(o._start+=c/o._ts,o._time-=c,o._tTime-=c),o.shiftChildren(-c,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=u;Lo(o,o===xt&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(r){if(xt._ts&&(px(xt,Qu(r,xt)),dx=In.frame),In.frame>=A_){A_+=On.autoSleep||120;var s=xt._first;if((!s||!s._ts)&&On.autoSleep&&In._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||In.sleep()}}},e}($a);Vn(an.prototype,{_lock:0,_hasPause:0,_forcing:0});var GE=function(e,t,i,r,s,o,a){var l=new Mn(this._pt,e,t,0,1,Hx,null,s),u=0,c=0,d,h,p,v,m,_,f,x;for(l.b=i,l.e=r,i+="",r+="",(f=~r.indexOf("random("))&&(r=Ya(r)),o&&(x=[i,r],o(x,e,t),i=x[0],r=x[1]),h=i.match(af)||[];d=af.exec(r);)v=d[0],m=r.substring(u,d.index),p?p=(p+1)%5:m.substr(-5)==="rgba("&&(p=1),v!==h[c++]&&(_=parseFloat(h[c-1])||0,l._pt={_next:l._pt,p:m||c===1?m:",",s:_,c:v.charAt(1)==="="?go(_,v)-_:parseFloat(v)-_,m:p&&p<4?Math.round:0},u=af.lastIndex);return l.c=u<r.length?r.substring(u,r.length):"",l.fp=a,(ax.test(r)||f)&&(l.e=0),this._pt=l,l},Yp=function(e,t,i,r,s,o,a,l,u,c){At(r)&&(r=r(s||0,e,o));var d=e[t],h=i!=="get"?i:At(d)?u?e[t.indexOf("set")||!At(e["get"+t.substr(3)])?t:"get"+t.substr(3)](u):e[t]():d,p=At(d)?u?qE:Bx:$p,v;if(Wt(r)&&(~r.indexOf("random(")&&(r=Ya(r)),r.charAt(1)==="="&&(v=go(h,r)+(en(h)||0),(v||v===0)&&(r=v))),!c||h!==r||qd)return!isNaN(h*r)&&r!==""?(v=new Mn(this._pt,e,t,+h||0,r-(h||0),typeof d=="boolean"?KE:Vx,0,p),u&&(v.fp=u),a&&v.modifier(a,this,e),this._pt=v):(!d&&!(t in e)&&Hp(t,r),GE.call(this,e,t,h,r,p,l||On.stringFilter,u))},WE=function(e,t,i,r,s){if(At(e)&&(e=Ca(e,s,t,i,r)),!Li(e)||e.style&&e.nodeType||tn(e)||sx(e))return Wt(e)?Ca(e,s,t,i,r):e;var o={},a;for(a in e)o[a]=Ca(e[a],s,t,i,r);return o},Ox=function(e,t,i,r,s,o){var a,l,u,c;if(Ln[e]&&(a=new Ln[e]).init(s,a.rawVars?t[e]:WE(t[e],r,s,o,i),i,r,o)!==!1&&(i._pt=l=new Mn(i._pt,s,e,0,1,a.render,a,0,a.priority),i!==lo))for(u=i._ptLookup[i._targets.indexOf(s)],c=a._props.length;c--;)u[a._props[c]]=l;return a},Sr,qd,qp=function n(e,t,i){var r=e.vars,s=r.ease,o=r.startAt,a=r.immediateRender,l=r.lazy,u=r.onUpdate,c=r.runBackwards,d=r.yoyoEase,h=r.keyframes,p=r.autoRevert,v=e._dur,m=e._startAt,_=e._targets,f=e.parent,x=f&&f.data==="nested"?f.vars.targets:_,S=e._overwrite==="auto"&&!kp,y=e.timeline,E,w,A,b,M,T,P,F,z,X,j,B,$;if(y&&(!h||!s)&&(s="none"),e._ease=xs(s,bo.ease),e._yEase=d?Ix(xs(d===!0?s:d,bo.ease)):0,d&&e._yoyo&&!e._repeat&&(d=e._yEase,e._yEase=e._ease,e._ease=d),e._from=!y&&!!r.runBackwards,!y||h&&!r.stagger){if(F=_[0]?gs(_[0]).harness:0,B=F&&r[F.prop],E=Zu(r,Gp),m&&(m._zTime<0&&m.progress(1),t<0&&c&&a&&!p?m.render(-1,!0):m.revert(c&&v?gu:vE),m._lazy=0),o){if(kr(e._startAt=Lt.set(_,Vn({data:"isStart",overwrite:!1,parent:f,immediateRender:!0,lazy:!m&&yn(l),startAt:null,delay:0,onUpdate:u&&function(){return Un(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Yt||!a&&!p)&&e._startAt.revert(gu),a&&v&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(c&&v&&!m){if(t&&(a=!1),A=Vn({overwrite:!1,data:"isFromStart",lazy:a&&!m&&yn(l),immediateRender:a,stagger:0,parent:f},E),B&&(A[F.prop]=B),kr(e._startAt=Lt.set(_,A)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Yt?e._startAt.revert(gu):e._startAt.render(-1,!0)),e._zTime=t,!a)n(e._startAt,ot,ot);else if(!t)return}for(e._pt=e._ptCache=0,l=v&&yn(l)||l&&!v,w=0;w<_.length;w++){if(M=_[w],P=M._gsap||Xp(_)[w]._gsap,e._ptLookup[w]=X={},Hd[P.id]&&Lr.length&&Ku(),j=x===_?w:x.indexOf(M),F&&(z=new F).init(M,B||E,e,j,x)!==!1&&(e._pt=b=new Mn(e._pt,M,z.name,0,1,z.render,z,0,z.priority),z._props.forEach(function(I){X[I]=b}),z.priority&&(T=1)),!F||B)for(A in E)Ln[A]&&(z=Ox(A,E,e,j,M,x))?z.priority&&(T=1):X[A]=b=Yp.call(e,M,A,"get",E[A],j,x,0,r.stringFilter);e._op&&e._op[w]&&e.kill(M,e._op[w]),S&&e._pt&&(Sr=e,xt.killTweensOf(M,X,e.globalTime(t)),$=!e.parent,Sr=0),e._pt&&l&&(Hd[P.id]=1)}T&&Gx(e),e._onInit&&e._onInit(e)}e._onUpdate=u,e._initted=(!e._op||e._pt)&&!$,h&&t<=0&&y.render(Qn,!0,!0)},XE=function(e,t,i,r,s,o,a,l){var u=(e._pt&&e._ptCache||(e._ptCache={}))[t],c,d,h,p;if(!u)for(u=e._ptCache[t]=[],h=e._ptLookup,p=e._targets.length;p--;){if(c=h[p][t],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==t&&c.fp!==t;)c=c._next;if(!c)return qd=1,e.vars[t]="+=0",qp(e,a),qd=0,l?Xa(t+" not eligible for reset"):1;u.push(c)}for(p=u.length;p--;)d=u[p],c=d._pt||d,c.s=(r||r===0)&&!s?r:c.s+(r||0)+o*c.c,c.c=i-c.s,d.e&&(d.e=Rt(i)+en(d.e)),d.b&&(d.b=c.s+en(d.b))},jE=function(e,t){var i=e[0]?gs(e[0]).harness:0,r=i&&i.aliases,s,o,a,l;if(!r)return t;s=Po({},t);for(o in r)if(o in s)for(l=r[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},YE=function(e,t,i,r){var s=t.ease||r||"power1.inOut",o,a;if(tn(t))a=i[e]||(i[e]=[]),t.forEach(function(l,u){return a.push({t:u/(t.length-1)*100,v:l,e:s})});else for(o in t)a=i[o]||(i[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},Ca=function(e,t,i,r,s){return At(e)?e.call(t,i,r,s):Wt(e)&&~e.indexOf("random(")?Ya(e):e},kx=Wp+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",zx={};Sn(kx+",id,stagger,delay,duration,paused,scrollTrigger",function(n){return zx[n]=1});var Lt=function(n){ix(e,n);function e(i,r,s,o){var a;typeof r=="number"&&(s.duration=r,r=s,s=null),a=n.call(this,o?r:wa(r))||this;var l=a.vars,u=l.duration,c=l.delay,d=l.immediateRender,h=l.stagger,p=l.overwrite,v=l.keyframes,m=l.defaults,_=l.scrollTrigger,f=l.yoyoEase,x=r.parent||xt,S=(tn(i)||sx(i)?er(i[0]):"length"in r)?[i]:Jn(i),y,E,w,A,b,M,T,P;if(a._targets=S.length?Xp(S):Xa("GSAP target "+i+" not found. https://gsap.com",!On.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=p,v||h||Il(u)||Il(c)){if(r=a.vars,y=a.timeline=new an({data:"nested",defaults:m||{},targets:x&&x.data==="nested"?x.vars.targets:S}),y.kill(),y.parent=y._dp=Vi(a),y._start=0,h||Il(u)||Il(c)){if(A=S.length,T=h&&Ex(h),Li(h))for(b in h)~kx.indexOf(b)&&(P||(P={}),P[b]=h[b]);for(E=0;E<A;E++)w=Zu(r,zx),w.stagger=0,f&&(w.yoyoEase=f),P&&Po(w,P),M=S[E],w.duration=+Ca(u,Vi(a),E,M,S),w.delay=(+Ca(c,Vi(a),E,M,S)||0)-a._delay,!h&&A===1&&w.delay&&(a._delay=c=w.delay,a._start+=c,w.delay=0),y.to(M,w,T?T(E,M,S):0),y._ease=qe.none;y.duration()?u=c=0:a.timeline=0}else if(v){wa(Vn(y.vars.defaults,{ease:"none"})),y._ease=xs(v.ease||r.ease||"none");var F=0,z,X,j;if(tn(v))v.forEach(function(B){return y.to(S,B,">")}),y.duration();else{w={};for(b in v)b==="ease"||b==="easeEach"||YE(b,v[b],w,v.easeEach);for(b in w)for(z=w[b].sort(function(B,$){return B.t-$.t}),F=0,E=0;E<z.length;E++)X=z[E],j={ease:X.e,duration:(X.t-(E?z[E-1].t:0))/100*u},j[b]=X.v,y.to(S,j,F),F+=j.duration;y.duration()<u&&y.to({},{duration:u-y.duration()})}}u||a.duration(u=y.duration())}else a.timeline=0;return p===!0&&!kp&&(Sr=Vi(a),xt.killTweensOf(S),Sr=0),Ai(x,Vi(a),s),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(d||!u&&!v&&a._start===It(x._time)&&yn(d)&&TE(Vi(a))&&x.data!=="nested")&&(a._tTime=-ot,a.render(Math.max(0,-c)||0)),_&&xx(Vi(a),_),a}var t=e.prototype;return t.render=function(r,s,o){var a=this._time,l=this._tDur,u=this._dur,c=r<0,d=r>l-ot&&!c?l:r<ot?0:r,h,p,v,m,_,f,x,S,y;if(!u)AE(this,r,s,o);else if(d!==this._tTime||!r||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==c||this._lazy){if(h=d,S=this.timeline,this._repeat){if(m=u+this._rDelay,this._repeat<-1&&c)return this.totalTime(m*100+r,s,o);if(h=It(d%m),d===l?(v=this._repeat,h=u):(_=It(d/m),v=~~_,v&&v===_?(h=u,v--):h>u&&(h=u)),f=this._yoyo&&v&1,f&&(y=this._yEase,h=u-h),_=Do(this._tTime,m),h===a&&!o&&this._initted&&v===_)return this._tTime=d,this;v!==_&&(S&&this._yEase&&Nx(S,f),this.vars.repeatRefresh&&!f&&!this._lock&&h!==m&&this._initted&&(this._lock=o=1,this.render(It(m*v),!0).invalidate()._lock=0))}if(!this._initted){if(yx(this,c?r:h,o,s,d))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&v!==_))return this;if(u!==this._dur)return this.render(r,s,o)}if(this._tTime=d,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=x=(y||this._ease)(h/u),this._from&&(this.ratio=x=1-x),!a&&d&&!s&&!_&&(Un(this,"onStart"),this._tTime!==d))return this;for(p=this._pt;p;)p.r(x,p.d),p=p._next;S&&S.render(r<0?r:S._dur*S._ease(h/this._dur),s,o)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(c&&Gd(this,r,s,o),Un(this,"onUpdate")),this._repeat&&v!==_&&this.vars.onRepeat&&!s&&this.parent&&Un(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(c&&!this._onUpdate&&Gd(this,r,!0,!0),(r||!u)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&kr(this,1),!s&&!(c&&!a)&&(d||a||f)&&(Un(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),n.prototype.invalidate.call(this,r)},t.resetTo=function(r,s,o,a,l){qa||In.wake(),this._ts||this.play();var u=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||qp(this,u),c=this._ease(u/this._dur),XE(this,r,s,o,a,c,u,l)?this.resetTo(r,s,o,a,1):(Rc(this,0),this.parent||gx(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?da(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Yt),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,Sr&&Sr.vars.overwrite!==!0)._first||da(this),this.parent&&o!==this.timeline.totalDuration()&&Lo(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=r?Jn(r):a,u=this._ptLookup,c=this._pt,d,h,p,v,m,_,f;if((!s||s==="all")&&ME(a,l))return s==="all"&&(this._pt=0),da(this);for(d=this._op=this._op||[],s!=="all"&&(Wt(s)&&(m={},Sn(s,function(x){return m[x]=1}),s=m),s=jE(a,s)),f=a.length;f--;)if(~l.indexOf(a[f])){h=u[f],s==="all"?(d[f]=s,v=h,p={}):(p=d[f]=d[f]||{},v=s);for(m in v)_=h&&h[m],_&&((!("kill"in _.d)||_.d.kill(m)===!0)&&Ac(this,_,"_pt"),delete h[m]),p!=="all"&&(p[m]=1)}return this._initted&&!this._pt&&c&&da(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return Aa(1,arguments)},e.delayedCall=function(r,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(r,s,o){return Aa(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,o){return xt.killTweensOf(r,s,o)},e}($a);Vn(Lt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Sn("staggerTo,staggerFrom,staggerFromTo",function(n){Lt[n]=function(){var e=new an,t=Xd.call(arguments,0);return t.splice(n==="staggerFromTo"?5:4,0,0),e[n].apply(e,t)}});var $p=function(e,t,i){return e[t]=i},Bx=function(e,t,i){return e[t](i)},qE=function(e,t,i,r){return e[t](r.fp,i)},$E=function(e,t,i){return e.setAttribute(t,i)},Kp=function(e,t){return At(e[t])?Bx:zp(e[t])&&e.setAttribute?$E:$p},Vx=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},KE=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Hx=function(e,t){var i=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;i;)r=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+r,i=i._next;r+=t.c}t.set(t.t,t.p,r,t)},Zp=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},ZE=function(e,t,i,r){for(var s=this._pt,o;s;)o=s._next,s.p===r&&s.modifier(e,t,i),s=o},QE=function(e){for(var t=this._pt,i,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?Ac(this,t,"_pt"):t.dep||(i=1),t=r;return!i},JE=function(e,t,i,r){r.mSet(e,t,r.m.call(r.tween,i,r.mt),r)},Gx=function(e){for(var t=e._pt,i,r,s,o;t;){for(i=t._next,r=s;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:o)?t._prev._next=t:s=t,(t._next=r)?r._prev=t:o=t,t=i}e._pt=s},Mn=function(){function n(t,i,r,s,o,a,l,u,c){this.t=i,this.s=s,this.c=o,this.p=r,this.r=a||Vx,this.d=l||this,this.set=u||$p,this.pr=c||0,this._next=t,t&&(t._prev=this)}var e=n.prototype;return e.modifier=function(i,r,s){this.mSet=this.mSet||this.set,this.set=JE,this.m=i,this.mt=s,this.tween=r},n}();Sn(Wp+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(n){return Gp[n]=1});Bn.TweenMax=Bn.TweenLite=Lt;Bn.TimelineLite=Bn.TimelineMax=an;xt=new an({sortChildren:!1,defaults:bo,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});On.stringFilter=Lx;var ys=[],xu={},eT=[],L_=0,tT=0,df=function(e){return(xu[e]||eT).map(function(t){return t()})},$d=function(){var e=Date.now(),t=[];e-L_>2&&(df("matchMediaInit"),ys.forEach(function(i){var r=i.queries,s=i.conditions,o,a,l,u;for(a in r)o=Ei.matchMedia(r[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,u=1);u&&(i.revert(),l&&t.push(i))}),df("matchMediaRevert"),t.forEach(function(i){return i.onMatch(i,function(r){return i.add(null,r)})}),L_=e,df("matchMedia"))},Wx=function(){function n(t,i){this.selector=i&&jd(i),this.data=[],this._r=[],this.isReverted=!1,this.id=tT++,t&&this.add(t)}var e=n.prototype;return e.add=function(i,r,s){At(i)&&(s=r,r=i,i=At);var o=this,a=function(){var u=mt,c=o.selector,d;return u&&u!==o&&u.data.push(o),s&&(o.selector=jd(s)),mt=o,d=r.apply(o,arguments),At(d)&&o._r.push(d),mt=u,o.selector=c,o.isReverted=!1,d};return o.last=a,i===At?a(o,function(l){return o.add(null,l)}):i?o[i]=a:a},e.ignore=function(i){var r=mt;mt=null,i(this),mt=r},e.getTweens=function(){var i=[];return this.data.forEach(function(r){return r instanceof n?i.push.apply(i,r.getTweens()):r instanceof Lt&&!(r.parent&&r.parent.data==="nested")&&i.push(r)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,r){var s=this;if(i?function(){for(var a=s.getTweens(),l=s.data.length,u;l--;)u=s.data[l],u.data==="isFlip"&&(u.revert(),u.getChildren(!0,!0,!1).forEach(function(c){return a.splice(a.indexOf(c),1)}));for(a.map(function(c){return{g:c._dur||c._delay||c._sat&&!c._sat.vars.immediateRender?c.globalTime(0):-1/0,t:c}}).sort(function(c,d){return d.g-c.g||-1/0}).forEach(function(c){return c.t.revert(i)}),l=s.data.length;l--;)u=s.data[l],u instanceof an?u.data!=="nested"&&(u.scrollTrigger&&u.scrollTrigger.revert(),u.kill()):!(u instanceof Lt)&&u.revert&&u.revert(i);s._r.forEach(function(c){return c(i,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),r)for(var o=ys.length;o--;)ys[o].id===this.id&&ys.splice(o,1)},e.revert=function(i){this.kill(i||{})},n}(),nT=function(){function n(t){this.contexts=[],this.scope=t,mt&&mt.data.push(this)}var e=n.prototype;return e.add=function(i,r,s){Li(i)||(i={matches:i});var o=new Wx(0,s||this.scope),a=o.conditions={},l,u,c;mt&&!o.selector&&(o.selector=mt.selector),this.contexts.push(o),r=o.add("onMatch",r),o.queries=i;for(u in i)u==="all"?c=1:(l=Ei.matchMedia(i[u]),l&&(ys.indexOf(o)<0&&ys.push(o),(a[u]=l.matches)&&(c=1),l.addListener?l.addListener($d):l.addEventListener("change",$d)));return c&&r(o,function(d){return o.add(null,d)}),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(r){return r.kill(i,!0)})},n}(),Ju={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(r){return bx(r)})},timeline:function(e){return new an(e)},getTweensOf:function(e,t){return xt.getTweensOf(e,t)},getProperty:function(e,t,i,r){Wt(e)&&(e=Jn(e)[0]);var s=gs(e||{}).get,o=i?_x:mx;return i==="native"&&(i=""),e&&(t?o((Ln[t]&&Ln[t].get||s)(e,t,i,r)):function(a,l,u){return o((Ln[a]&&Ln[a].get||s)(e,a,l,u))})},quickSetter:function(e,t,i){if(e=Jn(e),e.length>1){var r=e.map(function(c){return An.quickSetter(c,t,i)}),s=r.length;return function(c){for(var d=s;d--;)r[d](c)}}e=e[0]||{};var o=Ln[t],a=gs(e),l=a.harness&&(a.harness.aliases||{})[t]||t,u=o?function(c){var d=new o;lo._pt=0,d.init(e,i?c+i:c,lo,0,[e]),d.render(1,d),lo._pt&&Zp(1,lo)}:a.set(e,l);return o?u:function(c){return u(e,l,i?c+i:c,a,1)}},quickTo:function(e,t,i){var r,s=An.to(e,Vn((r={},r[t]="+=0.1",r.paused=!0,r.stagger=0,r),i||{})),o=function(l,u,c){return s.resetTo(t,l,u,c)};return o.tween=s,o},isTweening:function(e){return xt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=xs(e.ease,bo.ease)),C_(bo,e||{})},config:function(e){return C_(On,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,r=e.plugins,s=e.defaults,o=e.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!Ln[a]&&!Bn[a]&&Xa(t+" effect requires "+a+" plugin.")}),lf[t]=function(a,l,u){return i(Jn(a),Vn(l||{},s),u)},o&&(an.prototype[t]=function(a,l,u){return this.add(lf[t](a,Li(l)?l:(u=l)&&{},this),u)})},registerEase:function(e,t){qe[e]=xs(t)},parseEase:function(e,t){return arguments.length?xs(e,t):qe},getById:function(e){return xt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new an(e),r,s;for(i.smoothChildTiming=yn(e.smoothChildTiming),xt.remove(i),i._dp=0,i._time=i._tTime=xt._time,r=xt._first;r;)s=r._next,(t||!(!r._dur&&r instanceof Lt&&r.vars.onComplete===r._targets[0]))&&Ai(i,r,r._start-r._delay),r=s;return Ai(xt,i,0),i},context:function(e,t){return e?new Wx(e,t):mt},matchMedia:function(e){return new nT(e)},matchMediaRefresh:function(){return ys.forEach(function(e){var t=e.conditions,i,r;for(r in t)t[r]&&(t[r]=!1,i=1);i&&e.revert()})||$d()},addEventListener:function(e,t){var i=xu[e]||(xu[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=xu[e],r=i&&i.indexOf(t);r>=0&&i.splice(r,1)},utils:{wrap:NE,wrapYoyo:UE,distribute:Ex,random:wx,snap:Tx,normalize:IE,getUnit:en,clamp:bE,splitColor:Px,toArray:Jn,selector:jd,mapRange:Cx,pipe:DE,unitize:LE,interpolate:FE,shuffle:Mx},install:cx,effects:lf,ticker:In,updateRoot:an.updateRoot,plugins:Ln,globalTimeline:xt,core:{PropTween:Mn,globals:fx,Tween:Lt,Timeline:an,Animation:$a,getCache:gs,_removeLinkedListItem:Ac,reverting:function(){return Yt},context:function(e){return e&&mt&&(mt.data.push(e),e._ctx=mt),mt},suppressOverwrites:function(e){return kp=e}}};Sn("to,from,fromTo,delayedCall,set,killTweensOf",function(n){return Ju[n]=Lt[n]});In.add(an.updateRoot);lo=Ju.to({},{duration:0});var iT=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},rT=function(e,t){var i=e._targets,r,s,o;for(r in t)for(s=i.length;s--;)o=e._ptLookup[s][r],o&&(o=o.d)&&(o._pt&&(o=iT(o,r)),o&&o.modifier&&o.modifier(t[r],e,i[s],r))},hf=function(e,t){return{name:e,headless:1,rawVars:1,init:function(r,s,o){o._onInit=function(a){var l,u;if(Wt(s)&&(l={},Sn(s,function(c){return l[c]=1}),s=l),t){l={};for(u in s)l[u]=t(s[u]);s=l}rT(a,s)}}}},An=Ju.registerPlugin({name:"attr",init:function(e,t,i,r,s){var o,a,l;this.tween=i;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],r,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var i=t._pt;i;)Yt?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",headless:1,init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},hf("roundProps",Yd),hf("modifiers"),hf("snap",Tx))||Ju;Lt.version=an.version=An.version="3.13.0";ux=1;Bp()&&Io();qe.Power0;qe.Power1;qe.Power2;qe.Power3;qe.Power4;qe.Linear;qe.Quad;qe.Cubic;qe.Quart;qe.Quint;qe.Strong;qe.Elastic;qe.Back;qe.SteppedEase;qe.Bounce;qe.Sine;qe.Expo;qe.Circ;/*!
 * CSSPlugin 3.13.0
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var I_,Mr,vo,Qp,ds,N_,Jp,sT=function(){return typeof window<"u"},tr={},rs=180/Math.PI,xo=Math.PI/180,Ns=Math.atan2,U_=1e8,em=/([A-Z])/g,oT=/(left|right|width|margin|padding|x)/i,aT=/[\s,\(]\S/,Ci={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Kd=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},lT=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},uT=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},cT=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},Xx=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},jx=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},fT=function(e,t,i){return e.style[t]=i},dT=function(e,t,i){return e.style.setProperty(t,i)},hT=function(e,t,i){return e._gsap[t]=i},pT=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},mT=function(e,t,i,r,s){var o=e._gsap;o.scaleX=o.scaleY=i,o.renderTransform(s,o)},_T=function(e,t,i,r,s){var o=e._gsap;o[t]=i,o.renderTransform(s,o)},yt="transform",En=yt+"Origin",gT=function n(e,t){var i=this,r=this.target,s=r.style,o=r._gsap;if(e in tr&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Ci[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return i.tfm[a]=Gi(r,a)}):this.tfm[e]=o.x?o[e]:Gi(r,e),e===En&&(this.tfm.zOrigin=o.zOrigin);else return Ci.transform.split(",").forEach(function(a){return n.call(i,a,t)});if(this.props.indexOf(yt)>=0)return;o.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(En,t,"")),e=yt}(s||t)&&this.props.push(e,t,s[e])},Yx=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},vT=function(){var e=this.props,t=this.target,i=t.style,r=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?i[e[s]]=e[s+2]:i.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(em,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)r[o]=this.tfm[o];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Jp(),(!s||!s.isStart)&&!i[yt]&&(Yx(i),r.zOrigin&&i[En]&&(i[En]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},qx=function(e,t){var i={target:e,props:[],revert:vT,save:gT};return e._gsap||An.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(r){return i.save(r)}),i},$x,Zd=function(e,t){var i=Mr.createElementNS?Mr.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Mr.createElement(e);return i&&i.style?i:Mr.createElement(e)},ei=function n(e,t,i){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(em,"-$1").toLowerCase())||r.getPropertyValue(t)||!i&&n(e,No(t)||t,1)||""},F_="O,Moz,ms,Ms,Webkit".split(","),No=function(e,t,i){var r=t||ds,s=r.style,o=5;if(e in s&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(F_[o]+e in s););return o<0?null:(o===3?"ms":o>=0?F_[o]:"")+e},Qd=function(){sT()&&window.document&&(I_=window,Mr=I_.document,vo=Mr.documentElement,ds=Zd("div")||{style:{}},Zd("div"),yt=No(yt),En=yt+"Origin",ds.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",$x=!!No("perspective"),Jp=An.core.reverting,Qp=1)},O_=function(e){var t=e.ownerSVGElement,i=Zd("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=e.cloneNode(!0),s;r.style.display="block",i.appendChild(r),vo.appendChild(i);try{s=r.getBBox()}catch{}return i.removeChild(r),vo.removeChild(i),s},k_=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},Kx=function(e){var t,i;try{t=e.getBBox()}catch{t=O_(e),i=1}return t&&(t.width||t.height)||i||(t=O_(e)),t&&!t.width&&!t.x&&!t.y?{x:+k_(e,["x","cx","x1"])||0,y:+k_(e,["y","cy","y1"])||0,width:0,height:0}:t},Zx=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Kx(e))},Cs=function(e,t){if(t){var i=e.style,r;t in tr&&t!==En&&(t=yt),i.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(r==="--"?t:t.replace(em,"-$1").toLowerCase())):i.removeAttribute(t)}},Er=function(e,t,i,r,s,o){var a=new Mn(e._pt,t,i,0,1,o?jx:Xx);return e._pt=a,a.b=r,a.e=s,e._props.push(i),a},z_={deg:1,rad:1,turn:1},xT={grid:1,flex:1},zr=function n(e,t,i,r){var s=parseFloat(i)||0,o=(i+"").trim().substr((s+"").length)||"px",a=ds.style,l=oT.test(t),u=e.tagName.toLowerCase()==="svg",c=(u?"client":"offset")+(l?"Width":"Height"),d=100,h=r==="px",p=r==="%",v,m,_,f;if(r===o||!s||z_[r]||z_[o])return s;if(o!=="px"&&!h&&(s=n(e,t,i,"px")),f=e.getCTM&&Zx(e),(p||o==="%")&&(tr[t]||~t.indexOf("adius")))return v=f?e.getBBox()[l?"width":"height"]:e[c],Rt(p?s/v*d:s/100*v);if(a[l?"width":"height"]=d+(h?o:r),m=r!=="rem"&&~t.indexOf("adius")||r==="em"&&e.appendChild&&!u?e:e.parentNode,f&&(m=(e.ownerSVGElement||{}).parentNode),(!m||m===Mr||!m.appendChild)&&(m=Mr.body),_=m._gsap,_&&p&&_.width&&l&&_.time===In.time&&!_.uncache)return Rt(s/_.width*d);if(p&&(t==="height"||t==="width")){var x=e.style[t];e.style[t]=d+r,v=e[c],x?e.style[t]=x:Cs(e,t)}else(p||o==="%")&&!xT[ei(m,"display")]&&(a.position=ei(e,"position")),m===e&&(a.position="static"),m.appendChild(ds),v=ds[c],m.removeChild(ds),a.position="absolute";return l&&p&&(_=gs(m),_.time=In.time,_.width=m[c]),Rt(h?v*s/d:v&&s?d/v*s:0)},Gi=function(e,t,i,r){var s;return Qp||Qd(),t in Ci&&t!=="transform"&&(t=Ci[t],~t.indexOf(",")&&(t=t.split(",")[0])),tr[t]&&t!=="transform"?(s=Za(e,r),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:tc(ei(e,En))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=ec[t]&&ec[t](e,t,i)||ei(e,t)||hx(e,t)||(t==="opacity"?1:0))),i&&!~(s+"").trim().indexOf(" ")?zr(e,t,s,i)+i:s},yT=function(e,t,i,r){if(!i||i==="none"){var s=No(t,e,1),o=s&&ei(e,s,1);o&&o!==i?(t=s,i=o):t==="borderColor"&&(i=ei(e,"borderTopColor"))}var a=new Mn(this._pt,e.style,t,0,1,Hx),l=0,u=0,c,d,h,p,v,m,_,f,x,S,y,E;if(a.b=i,a.e=r,i+="",r+="",r.substring(0,6)==="var(--"&&(r=ei(e,r.substring(4,r.indexOf(")")))),r==="auto"&&(m=e.style[t],e.style[t]=r,r=ei(e,t)||r,m?e.style[t]=m:Cs(e,t)),c=[i,r],Lx(c),i=c[0],r=c[1],h=i.match(ao)||[],E=r.match(ao)||[],E.length){for(;d=ao.exec(r);)_=d[0],x=r.substring(l,d.index),v?v=(v+1)%5:(x.substr(-5)==="rgba("||x.substr(-5)==="hsla(")&&(v=1),_!==(m=h[u++]||"")&&(p=parseFloat(m)||0,y=m.substr((p+"").length),_.charAt(1)==="="&&(_=go(p,_)+y),f=parseFloat(_),S=_.substr((f+"").length),l=ao.lastIndex-S.length,S||(S=S||On.units[t]||y,l===r.length&&(r+=S,a.e+=S)),y!==S&&(p=zr(e,t,m,S)||0),a._pt={_next:a._pt,p:x||u===1?x:",",s:p,c:f-p,m:v&&v<4||t==="zIndex"?Math.round:0});a.c=l<r.length?r.substring(l,r.length):""}else a.r=t==="display"&&r==="none"?jx:Xx;return ax.test(r)&&(a.e=0),this._pt=a,a},B_={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},ST=function(e){var t=e.split(" "),i=t[0],r=t[1]||"50%";return(i==="top"||i==="bottom"||r==="left"||r==="right")&&(e=i,i=r,r=e),t[0]=B_[i]||i,t[1]=B_[r]||r,t.join(" ")},MT=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,r=i.style,s=t.u,o=i._gsap,a,l,u;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),u=s.length;--u>-1;)a=s[u],tr[a]&&(l=1,a=a==="transformOrigin"?En:yt),Cs(i,a);l&&(Cs(i,yt),o&&(o.svg&&i.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",Za(i,1),o.uncache=1,Yx(r)))}},ec={clearProps:function(e,t,i,r,s){if(s.data!=="isFromStart"){var o=e._pt=new Mn(e._pt,t,i,0,0,MT);return o.u=r,o.pr=-10,o.tween=s,e._props.push(i),1}}},Ka=[1,0,0,1,0,0],Qx={},Jx=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},V_=function(e){var t=ei(e,yt);return Jx(t)?Ka:t.substr(7).match(ox).map(Rt)},tm=function(e,t){var i=e._gsap||gs(e),r=e.style,s=V_(e),o,a,l,u;return i.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Ka:s):(s===Ka&&!e.offsetParent&&e!==vo&&!i.svg&&(l=r.display,r.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(u=1,a=e.nextElementSibling,vo.appendChild(e)),s=V_(e),l?r.display=l:Cs(e,"display"),u&&(a?o.insertBefore(e,a):o?o.appendChild(e):vo.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Jd=function(e,t,i,r,s,o){var a=e._gsap,l=s||tm(e,!0),u=a.xOrigin||0,c=a.yOrigin||0,d=a.xOffset||0,h=a.yOffset||0,p=l[0],v=l[1],m=l[2],_=l[3],f=l[4],x=l[5],S=t.split(" "),y=parseFloat(S[0])||0,E=parseFloat(S[1])||0,w,A,b,M;i?l!==Ka&&(A=p*_-v*m)&&(b=y*(_/A)+E*(-m/A)+(m*x-_*f)/A,M=y*(-v/A)+E*(p/A)-(p*x-v*f)/A,y=b,E=M):(w=Kx(e),y=w.x+(~S[0].indexOf("%")?y/100*w.width:y),E=w.y+(~(S[1]||S[0]).indexOf("%")?E/100*w.height:E)),r||r!==!1&&a.smooth?(f=y-u,x=E-c,a.xOffset=d+(f*p+x*m)-f,a.yOffset=h+(f*v+x*_)-x):a.xOffset=a.yOffset=0,a.xOrigin=y,a.yOrigin=E,a.smooth=!!r,a.origin=t,a.originIsAbsolute=!!i,e.style[En]="0px 0px",o&&(Er(o,a,"xOrigin",u,y),Er(o,a,"yOrigin",c,E),Er(o,a,"xOffset",d,a.xOffset),Er(o,a,"yOffset",h,a.yOffset)),e.setAttribute("data-svg-origin",y+" "+E)},Za=function(e,t){var i=e._gsap||new Fx(e);if("x"in i&&!t&&!i.uncache)return i;var r=e.style,s=i.scaleX<0,o="px",a="deg",l=getComputedStyle(e),u=ei(e,En)||"0",c,d,h,p,v,m,_,f,x,S,y,E,w,A,b,M,T,P,F,z,X,j,B,$,I,q,Q,ae,me,We,Ne,Ue;return c=d=h=m=_=f=x=S=y=0,p=v=1,i.svg=!!(e.getCTM&&Zx(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[yt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[yt]!=="none"?l[yt]:"")),r.scale=r.rotate=r.translate="none"),A=tm(e,i.svg),i.svg&&(i.uncache?(I=e.getBBox(),u=i.xOrigin-I.x+"px "+(i.yOrigin-I.y)+"px",$=""):$=!t&&e.getAttribute("data-svg-origin"),Jd(e,$||u,!!$||i.originIsAbsolute,i.smooth!==!1,A)),E=i.xOrigin||0,w=i.yOrigin||0,A!==Ka&&(P=A[0],F=A[1],z=A[2],X=A[3],c=j=A[4],d=B=A[5],A.length===6?(p=Math.sqrt(P*P+F*F),v=Math.sqrt(X*X+z*z),m=P||F?Ns(F,P)*rs:0,x=z||X?Ns(z,X)*rs+m:0,x&&(v*=Math.abs(Math.cos(x*xo))),i.svg&&(c-=E-(E*P+w*z),d-=w-(E*F+w*X))):(Ue=A[6],We=A[7],Q=A[8],ae=A[9],me=A[10],Ne=A[11],c=A[12],d=A[13],h=A[14],b=Ns(Ue,me),_=b*rs,b&&(M=Math.cos(-b),T=Math.sin(-b),$=j*M+Q*T,I=B*M+ae*T,q=Ue*M+me*T,Q=j*-T+Q*M,ae=B*-T+ae*M,me=Ue*-T+me*M,Ne=We*-T+Ne*M,j=$,B=I,Ue=q),b=Ns(-z,me),f=b*rs,b&&(M=Math.cos(-b),T=Math.sin(-b),$=P*M-Q*T,I=F*M-ae*T,q=z*M-me*T,Ne=X*T+Ne*M,P=$,F=I,z=q),b=Ns(F,P),m=b*rs,b&&(M=Math.cos(b),T=Math.sin(b),$=P*M+F*T,I=j*M+B*T,F=F*M-P*T,B=B*M-j*T,P=$,j=I),_&&Math.abs(_)+Math.abs(m)>359.9&&(_=m=0,f=180-f),p=Rt(Math.sqrt(P*P+F*F+z*z)),v=Rt(Math.sqrt(B*B+Ue*Ue)),b=Ns(j,B),x=Math.abs(b)>2e-4?b*rs:0,y=Ne?1/(Ne<0?-Ne:Ne):0),i.svg&&($=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!Jx(ei(e,yt)),$&&e.setAttribute("transform",$))),Math.abs(x)>90&&Math.abs(x)<270&&(s?(p*=-1,x+=m<=0?180:-180,m+=m<=0?180:-180):(v*=-1,x+=x<=0?180:-180)),t=t||i.uncache,i.x=c-((i.xPercent=c&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-c)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+o,i.y=d-((i.yPercent=d&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-d)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+o,i.z=h+o,i.scaleX=Rt(p),i.scaleY=Rt(v),i.rotation=Rt(m)+a,i.rotationX=Rt(_)+a,i.rotationY=Rt(f)+a,i.skewX=x+a,i.skewY=S+a,i.transformPerspective=y+o,(i.zOrigin=parseFloat(u.split(" ")[2])||!t&&i.zOrigin||0)&&(r[En]=tc(u)),i.xOffset=i.yOffset=0,i.force3D=On.force3D,i.renderTransform=i.svg?TT:$x?ey:ET,i.uncache=0,i},tc=function(e){return(e=e.split(" "))[0]+" "+e[1]},pf=function(e,t,i){var r=en(t);return Rt(parseFloat(t)+parseFloat(zr(e,"x",i+"px",r)))+r},ET=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,ey(e,t)},qr="0deg",ta="0px",$r=") ",ey=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.z,u=i.rotation,c=i.rotationY,d=i.rotationX,h=i.skewX,p=i.skewY,v=i.scaleX,m=i.scaleY,_=i.transformPerspective,f=i.force3D,x=i.target,S=i.zOrigin,y="",E=f==="auto"&&e&&e!==1||f===!0;if(S&&(d!==qr||c!==qr)){var w=parseFloat(c)*xo,A=Math.sin(w),b=Math.cos(w),M;w=parseFloat(d)*xo,M=Math.cos(w),o=pf(x,o,A*M*-S),a=pf(x,a,-Math.sin(w)*-S),l=pf(x,l,b*M*-S+S)}_!==ta&&(y+="perspective("+_+$r),(r||s)&&(y+="translate("+r+"%, "+s+"%) "),(E||o!==ta||a!==ta||l!==ta)&&(y+=l!==ta||E?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+$r),u!==qr&&(y+="rotate("+u+$r),c!==qr&&(y+="rotateY("+c+$r),d!==qr&&(y+="rotateX("+d+$r),(h!==qr||p!==qr)&&(y+="skew("+h+", "+p+$r),(v!==1||m!==1)&&(y+="scale("+v+", "+m+$r),x.style[yt]=y||"translate(0, 0)"},TT=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.rotation,u=i.skewX,c=i.skewY,d=i.scaleX,h=i.scaleY,p=i.target,v=i.xOrigin,m=i.yOrigin,_=i.xOffset,f=i.yOffset,x=i.forceCSS,S=parseFloat(o),y=parseFloat(a),E,w,A,b,M;l=parseFloat(l),u=parseFloat(u),c=parseFloat(c),c&&(c=parseFloat(c),u+=c,l+=c),l||u?(l*=xo,u*=xo,E=Math.cos(l)*d,w=Math.sin(l)*d,A=Math.sin(l-u)*-h,b=Math.cos(l-u)*h,u&&(c*=xo,M=Math.tan(u-c),M=Math.sqrt(1+M*M),A*=M,b*=M,c&&(M=Math.tan(c),M=Math.sqrt(1+M*M),E*=M,w*=M)),E=Rt(E),w=Rt(w),A=Rt(A),b=Rt(b)):(E=d,b=h,w=A=0),(S&&!~(o+"").indexOf("px")||y&&!~(a+"").indexOf("px"))&&(S=zr(p,"x",o,"px"),y=zr(p,"y",a,"px")),(v||m||_||f)&&(S=Rt(S+v-(v*E+m*A)+_),y=Rt(y+m-(v*w+m*b)+f)),(r||s)&&(M=p.getBBox(),S=Rt(S+r/100*M.width),y=Rt(y+s/100*M.height)),M="matrix("+E+","+w+","+A+","+b+","+S+","+y+")",p.setAttribute("transform",M),x&&(p.style[yt]=M)},wT=function(e,t,i,r,s){var o=360,a=Wt(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?rs:1),u=l-r,c=r+u+"deg",d,h;return a&&(d=s.split("_")[1],d==="short"&&(u%=o,u!==u%(o/2)&&(u+=u<0?o:-o)),d==="cw"&&u<0?u=(u+o*U_)%o-~~(u/o)*o:d==="ccw"&&u>0&&(u=(u-o*U_)%o-~~(u/o)*o)),e._pt=h=new Mn(e._pt,t,i,r,u,lT),h.e=c,h.u="deg",e._props.push(i),h},H_=function(e,t){for(var i in t)e[i]=t[i];return e},AT=function(e,t,i){var r=H_({},i._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=i.style,a,l,u,c,d,h,p,v;r.svg?(u=i.getAttribute("transform"),i.setAttribute("transform",""),o[yt]=t,a=Za(i,1),Cs(i,yt),i.setAttribute("transform",u)):(u=getComputedStyle(i)[yt],o[yt]=t,a=Za(i,1),o[yt]=u);for(l in tr)u=r[l],c=a[l],u!==c&&s.indexOf(l)<0&&(p=en(u),v=en(c),d=p!==v?zr(i,l,u,v):parseFloat(u),h=parseFloat(c),e._pt=new Mn(e._pt,a,l,d,h-d,Kd),e._pt.u=v||0,e._props.push(l));H_(a,r)};Sn("padding,margin,Width,Radius",function(n,e){var t="Top",i="Right",r="Bottom",s="Left",o=(e<3?[t,i,r,s]:[t+s,t+i,r+i,r+s]).map(function(a){return e<2?n+a:"border"+a+n});ec[e>1?"border"+n:n]=function(a,l,u,c,d){var h,p;if(arguments.length<4)return h=o.map(function(v){return Gi(a,v,u)}),p=h.join(" "),p.split(h[0]).length===5?h[0]:p;h=(c+"").split(" "),p={},o.forEach(function(v,m){return p[v]=h[m]=h[m]||h[(m-1)/2|0]}),a.init(l,p,d)}});var ty={name:"css",register:Qd,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,r,s){var o=this._props,a=e.style,l=i.vars.startAt,u,c,d,h,p,v,m,_,f,x,S,y,E,w,A,b;Qp||Qd(),this.styles=this.styles||qx(e),b=this.styles.props,this.tween=i;for(m in t)if(m!=="autoRound"&&(c=t[m],!(Ln[m]&&Ox(m,t,i,r,e,s)))){if(p=typeof c,v=ec[m],p==="function"&&(c=c.call(i,r,e,s),p=typeof c),p==="string"&&~c.indexOf("random(")&&(c=Ya(c)),v)v(this,e,m,c,i)&&(A=1);else if(m.substr(0,2)==="--")u=(getComputedStyle(e).getPropertyValue(m)+"").trim(),c+="",Ir.lastIndex=0,Ir.test(u)||(_=en(u),f=en(c)),f?_!==f&&(u=zr(e,m,u,f)+f):_&&(c+=_),this.add(a,"setProperty",u,c,r,s,0,0,m),o.push(m),b.push(m,0,a[m]);else if(p!=="undefined"){if(l&&m in l?(u=typeof l[m]=="function"?l[m].call(i,r,e,s):l[m],Wt(u)&&~u.indexOf("random(")&&(u=Ya(u)),en(u+"")||u==="auto"||(u+=On.units[m]||en(Gi(e,m))||""),(u+"").charAt(1)==="="&&(u=Gi(e,m))):u=Gi(e,m),h=parseFloat(u),x=p==="string"&&c.charAt(1)==="="&&c.substr(0,2),x&&(c=c.substr(2)),d=parseFloat(c),m in Ci&&(m==="autoAlpha"&&(h===1&&Gi(e,"visibility")==="hidden"&&d&&(h=0),b.push("visibility",0,a.visibility),Er(this,a,"visibility",h?"inherit":"hidden",d?"inherit":"hidden",!d)),m!=="scale"&&m!=="transform"&&(m=Ci[m],~m.indexOf(",")&&(m=m.split(",")[0]))),S=m in tr,S){if(this.styles.save(m),p==="string"&&c.substring(0,6)==="var(--"&&(c=ei(e,c.substring(4,c.indexOf(")"))),d=parseFloat(c)),y||(E=e._gsap,E.renderTransform&&!t.parseTransform||Za(e,t.parseTransform),w=t.smoothOrigin!==!1&&E.smooth,y=this._pt=new Mn(this._pt,a,yt,0,1,E.renderTransform,E,0,-1),y.dep=1),m==="scale")this._pt=new Mn(this._pt,E,"scaleY",E.scaleY,(x?go(E.scaleY,x+d):d)-E.scaleY||0,Kd),this._pt.u=0,o.push("scaleY",m),m+="X";else if(m==="transformOrigin"){b.push(En,0,a[En]),c=ST(c),E.svg?Jd(e,c,0,w,0,this):(f=parseFloat(c.split(" ")[2])||0,f!==E.zOrigin&&Er(this,E,"zOrigin",E.zOrigin,f),Er(this,a,m,tc(u),tc(c)));continue}else if(m==="svgOrigin"){Jd(e,c,1,w,0,this);continue}else if(m in Qx){wT(this,E,m,h,x?go(h,x+c):c);continue}else if(m==="smoothOrigin"){Er(this,E,"smooth",E.smooth,c);continue}else if(m==="force3D"){E[m]=c;continue}else if(m==="transform"){AT(this,c,e);continue}}else m in a||(m=No(m)||m);if(S||(d||d===0)&&(h||h===0)&&!aT.test(c)&&m in a)_=(u+"").substr((h+"").length),d||(d=0),f=en(c)||(m in On.units?On.units[m]:_),_!==f&&(h=zr(e,m,u,f)),this._pt=new Mn(this._pt,S?E:a,m,h,(x?go(h,x+d):d)-h,!S&&(f==="px"||m==="zIndex")&&t.autoRound!==!1?cT:Kd),this._pt.u=f||0,_!==f&&f!=="%"&&(this._pt.b=u,this._pt.r=uT);else if(m in a)yT.call(this,e,m,u,x?x+c:c);else if(m in e)this.add(e,m,u||e[m],x?x+c:c,r,s);else if(m!=="parseTransform"){Hp(m,c);continue}S||(m in a?b.push(m,0,a[m]):typeof e[m]=="function"?b.push(m,2,e[m]()):b.push(m,1,u||e[m])),o.push(m)}}A&&Gx(this)},render:function(e,t){if(t.tween._time||!Jp())for(var i=t._pt;i;)i.r(e,i.d),i=i._next;else t.styles.revert()},get:Gi,aliases:Ci,getSetter:function(e,t,i){var r=Ci[t];return r&&r.indexOf(",")<0&&(t=r),t in tr&&t!==En&&(e._gsap.x||Gi(e,"x"))?i&&N_===i?t==="scale"?pT:hT:(N_=i||{})&&(t==="scale"?mT:_T):e.style&&!zp(e.style[t])?fT:~t.indexOf("-")?dT:Kp(e,t)},core:{_removeProperty:Cs,_getMatrix:tm}};An.utils.checkPrefix=No;An.core.getStyleSaver=qx;(function(n,e,t,i){var r=Sn(n+","+e+","+t,function(s){tr[s]=1});Sn(e,function(s){On.units[s]="deg",Qx[s]=1}),Ci[r[13]]=n+","+e,Sn(i,function(s){var o=s.split(":");Ci[o[1]]=r[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Sn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(n){On.units[n]="px"});An.registerPlugin(ty);var pa=An.registerPlugin(ty)||An;pa.core.Tween;var ny={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},G_=ps.createContext&&ps.createContext(ny),CT=["attr","size","title"];function RT(n,e){if(n==null)return{};var t=bT(n,e),i,r;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);for(r=0;r<s.length;r++)i=s[r],!(e.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(n,i)&&(t[i]=n[i])}return t}function bT(n,e){if(n==null)return{};var t={};for(var i in n)if(Object.prototype.hasOwnProperty.call(n,i)){if(e.indexOf(i)>=0)continue;t[i]=n[i]}return t}function nc(){return nc=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},nc.apply(this,arguments)}function W_(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})),t.push.apply(t,i)}return t}function ic(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?W_(Object(t),!0).forEach(function(i){PT(n,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):W_(Object(t)).forEach(function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(t,i))})}return n}function PT(n,e,t){return e=DT(e),e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function DT(n){var e=LT(n,"string");return typeof e=="symbol"?e:e+""}function LT(n,e){if(typeof n!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var i=t.call(n,e);if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function iy(n){return n&&n.map((e,t)=>ps.createElement(e.tag,ic({key:t},e.attr),iy(e.child)))}function IT(n){return e=>ps.createElement(NT,nc({attr:ic({},n.attr)},e),iy(n.child))}function NT(n){var e=t=>{var{attr:i,size:r,title:s}=n,o=RT(n,CT),a=r||t.size||"1em",l;return t.className&&(l=t.className),n.className&&(l=(l?l+" ":"")+n.className),ps.createElement("svg",nc({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,i,o,{className:l,style:ic(ic({color:n.color||t.color},t.style),n.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),s&&ps.createElement("title",null,s),n.children)};return G_!==void 0?ps.createElement(G_.Consumer,null,t=>e(t)):e(ny)}function UT(n){return IT({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M18.25 15.5a.75.75 0 0 1-.75-.75V7.56L7.28 17.78a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734L16.44 6.5H9.25a.75.75 0 0 1 0-1.5h9a.75.75 0 0 1 .75.75v9a.75.75 0 0 1-.75.75Z"},child:[]}]})(n)}const FT=({logo:n,logoAlt:e="Logo",items:t,className:i="",ease:r="power3.out",baseColor:s="#fff",menuColor:o,buttonBgColor:a,buttonTextColor:l})=>{const[u,c]=Dt.useState(!1),[d,h]=Dt.useState(!1),p=Dt.useRef(null),v=Dt.useRef([]),m=Dt.useRef(null),_=()=>{const y=p.current;if(!y)return 260;if(window.matchMedia("(max-width: 768px)").matches){const w=y.querySelector(".card-nav-content");if(w){const A=w.style.visibility,b=w.style.pointerEvents,M=w.style.position,T=w.style.height;w.style.visibility="visible",w.style.pointerEvents="auto",w.style.position="static",w.style.height="auto",w.offsetHeight;const P=60,F=16,z=w.scrollHeight;return w.style.visibility=A,w.style.pointerEvents=b,w.style.position=M,w.style.height=T,P+z+F}}return 260},f=()=>{const y=p.current;if(!y)return null;pa.set(y,{height:60,overflow:"hidden"}),pa.set(v.current,{y:50,opacity:0});const E=pa.timeline({paused:!0});return E.to(y,{height:_,duration:.4,ease:r}),E.to(v.current,{y:0,opacity:1,duration:.4,ease:r,stagger:.08},"-=0.1"),E};Dt.useLayoutEffect(()=>{const y=f();return m.current=y,()=>{y==null||y.kill(),m.current=null}},[r,t]),Dt.useLayoutEffect(()=>{const y=()=>{if(m.current)if(d){const E=_();pa.set(p.current,{height:E}),m.current.kill();const w=f();w&&(w.progress(1),m.current=w)}else{m.current.kill();const E=f();E&&(m.current=E)}};return window.addEventListener("resize",y),()=>window.removeEventListener("resize",y)},[d]);const x=()=>{const y=m.current;y&&(d?(c(!1),y.eventCallback("onReverseComplete",()=>h(!1)),y.reverse()):(c(!0),h(!0),y.play(0)))},S=y=>E=>{E&&(v.current[y]=E)};return Z.jsx("div",{className:`card-nav-container absolute left-1/2 -translate-x-1/2 w-[90%] max-w-[800px] z-[99] top-[1.2em] md:top-[2em] ${i}`,children:Z.jsxs("nav",{ref:p,className:`card-nav ${d?"open":""} block h-[60px] p-0 rounded-xl shadow-md relative overflow-hidden will-change-[height]`,style:{backgroundColor:s},children:[Z.jsxs("div",{className:"card-nav-top absolute inset-x-0 top-0 h-[60px] flex items-center justify-between p-2 pl-[1.1rem] z-[2]",children:[Z.jsxs("div",{className:`hamburger-menu ${u?"open":""} group h-full flex flex-col items-center justify-center cursor-pointer gap-[6px] order-2 md:order-none`,onClick:x,role:"button","aria-label":d?"Close menu":"Open menu",tabIndex:0,style:{color:o||"#000"},children:[Z.jsx("div",{className:`hamburger-line w-[30px] h-[2px] bg-current transition-[transform,opacity,margin] duration-300 ease-linear [transform-origin:50%_50%] ${u?"translate-y-[4px] rotate-45":""} group-hover:opacity-75`}),Z.jsx("div",{className:`hamburger-line w-[30px] h-[2px] bg-current transition-[transform,opacity,margin] duration-300 ease-linear [transform-origin:50%_50%] ${u?"-translate-y-[4px] -rotate-45":""} group-hover:opacity-75`})]}),Z.jsx("div",{className:"logo-container flex items-center md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 order-1 md:order-none",children:Z.jsx("img",{src:n,alt:e,className:"logo h-[32px]"})})]}),Z.jsx("div",{className:`card-nav-content absolute left-0 right-0 top-[60px] bottom-0 p-2 flex flex-col items-stretch gap-2 justify-start z-[1] ${d?"visible pointer-events-auto":"invisible pointer-events-none"} md:flex-row md:items-end md:gap-[12px]`,"aria-hidden":!d,children:(t||[]).slice(0,3).map((y,E)=>{var w;return Z.jsxs("div",{className:"nav-card select-none relative flex flex-col gap-2 p-[12px_16px] rounded-[calc(0.75rem-0.2rem)] min-w-0 flex-[1_1_auto] h-auto min-h-[60px] md:h-full md:min-h-0 md:flex-[1_1_0%]",ref:S(E),style:{backgroundColor:y.bgColor,color:y.textColor},children:[Z.jsx("div",{className:"nav-card-label font-normal tracking-[-0.5px] text-[18px] md:text-[22px]",children:y.label}),Z.jsx("div",{className:"nav-card-links mt-auto flex flex-col gap-[2px]",children:(w=y.links)==null?void 0:w.map((A,b)=>Z.jsxs("a",{className:"nav-card-link inline-flex items-center gap-[6px] no-underline cursor-pointer transition-opacity duration-300 hover:opacity-75 text-[15px] md:text-[16px]",href:A.href,"aria-label":A.ariaLabel,children:[Z.jsx(UT,{className:"nav-card-link-icon shrink-0","aria-hidden":"true"}),A.label]},`${A.label}-${b}`))})]},`${y.label}-${E}`)})})]})})};/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const nm="180",OT=0,X_=1,kT=2,ry=1,zT=2,zi=3,Br=0,Tn=1,Wi=2,Nr=0,yo=1,eh=2,j_=3,Y_=4,BT=5,as=100,VT=101,HT=102,GT=103,WT=104,XT=200,jT=201,YT=202,qT=203,th=204,nh=205,$T=206,KT=207,ZT=208,QT=209,JT=210,e1=211,t1=212,n1=213,i1=214,ih=0,rh=1,sh=2,Uo=3,oh=4,ah=5,lh=6,uh=7,sy=0,r1=1,s1=2,Ur=0,o1=1,a1=2,l1=3,u1=4,c1=5,f1=6,d1=7,oy=300,Fo=301,Oo=302,ch=303,fh=304,bc=306,dh=1e3,mi=1001,hh=1002,kn=1003,h1=1004,Nl=1005,_n=1006,mf=1007,hs=1008,nr=1009,ay=1010,ly=1011,Qa=1012,im=1013,Rs=1014,Ri=1015,Go=1016,rm=1017,sm=1018,Ja=1020,uy=35902,cy=35899,fy=1021,dy=1022,ti=1023,el=1026,tl=1027,hy=1028,om=1029,py=1030,am=1031,lm=1033,yu=33776,Su=33777,Mu=33778,Eu=33779,ph=35840,mh=35841,_h=35842,gh=35843,vh=36196,xh=37492,yh=37496,Sh=37808,Mh=37809,Eh=37810,Th=37811,wh=37812,Ah=37813,Ch=37814,Rh=37815,bh=37816,Ph=37817,Dh=37818,Lh=37819,Ih=37820,Nh=37821,Uh=36492,Fh=36494,Oh=36495,kh=36283,zh=36284,Bh=36285,Vh=36286,p1=3200,m1=3201,_1=0,g1=1,vr="",qn="srgb",ko="srgb-linear",rc="linear",it="srgb",Us=7680,q_=519,v1=512,x1=513,y1=514,my=515,S1=516,M1=517,E1=518,T1=519,$_=35044,K_="300 es",bi=2e3,sc=2001;class Wo{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],_f=Math.PI/180,Hh=180/Math.PI;function ul(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Zt[n&255]+Zt[n>>8&255]+Zt[n>>16&255]+Zt[n>>24&255]+"-"+Zt[e&255]+Zt[e>>8&255]+"-"+Zt[e>>16&15|64]+Zt[e>>24&255]+"-"+Zt[t&63|128]+Zt[t>>8&255]+"-"+Zt[t>>16&255]+Zt[t>>24&255]+Zt[i&255]+Zt[i>>8&255]+Zt[i>>16&255]+Zt[i>>24&255]).toLowerCase()}function Ye(n,e,t){return Math.max(e,Math.min(t,n))}function w1(n,e){return(n%e+e)%e}function gf(n,e,t){return(1-t)*n+t*e}function na(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function hn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class ke{constructor(e=0,t=0){ke.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ye(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ye(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class cl{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],u=i[r+1],c=i[r+2],d=i[r+3];const h=s[o+0],p=s[o+1],v=s[o+2],m=s[o+3];if(a===0){e[t+0]=l,e[t+1]=u,e[t+2]=c,e[t+3]=d;return}if(a===1){e[t+0]=h,e[t+1]=p,e[t+2]=v,e[t+3]=m;return}if(d!==m||l!==h||u!==p||c!==v){let _=1-a;const f=l*h+u*p+c*v+d*m,x=f>=0?1:-1,S=1-f*f;if(S>Number.EPSILON){const E=Math.sqrt(S),w=Math.atan2(E,f*x);_=Math.sin(_*w)/E,a=Math.sin(a*w)/E}const y=a*x;if(l=l*_+h*y,u=u*_+p*y,c=c*_+v*y,d=d*_+m*y,_===1-a){const E=1/Math.sqrt(l*l+u*u+c*c+d*d);l*=E,u*=E,c*=E,d*=E}}e[t]=l,e[t+1]=u,e[t+2]=c,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],d=s[o],h=s[o+1],p=s[o+2],v=s[o+3];return e[t]=a*v+c*d+l*p-u*h,e[t+1]=l*v+c*h+u*d-a*p,e[t+2]=u*v+c*p+a*h-l*d,e[t+3]=c*v-a*d-l*h-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),d=a(s/2),h=l(i/2),p=l(r/2),v=l(s/2);switch(o){case"XYZ":this._x=h*c*d+u*p*v,this._y=u*p*d-h*c*v,this._z=u*c*v+h*p*d,this._w=u*c*d-h*p*v;break;case"YXZ":this._x=h*c*d+u*p*v,this._y=u*p*d-h*c*v,this._z=u*c*v-h*p*d,this._w=u*c*d+h*p*v;break;case"ZXY":this._x=h*c*d-u*p*v,this._y=u*p*d+h*c*v,this._z=u*c*v+h*p*d,this._w=u*c*d-h*p*v;break;case"ZYX":this._x=h*c*d-u*p*v,this._y=u*p*d+h*c*v,this._z=u*c*v-h*p*d,this._w=u*c*d+h*p*v;break;case"YZX":this._x=h*c*d+u*p*v,this._y=u*p*d+h*c*v,this._z=u*c*v-h*p*d,this._w=u*c*d-h*p*v;break;case"XZY":this._x=h*c*d-u*p*v,this._y=u*p*d-h*c*v,this._z=u*c*v+h*p*d,this._w=u*c*d+h*p*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],u=t[2],c=t[6],d=t[10],h=i+a+d;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(c-l)*p,this._y=(s-u)*p,this._z=(o-r)*p}else if(i>a&&i>d){const p=2*Math.sqrt(1+i-a-d);this._w=(c-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+u)/p}else if(a>d){const p=2*Math.sqrt(1+a-i-d);this._w=(s-u)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+c)/p}else{const p=2*Math.sqrt(1+d-i-a);this._w=(o-r)/p,this._x=(s+u)/p,this._y=(l+c)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ye(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,u=t._z,c=t._w;return this._x=i*c+o*a+r*u-s*l,this._y=r*c+o*l+s*a-i*u,this._z=s*c+o*u+i*l-r*a,this._w=o*c-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),d=Math.sin((1-t)*c)/u,h=Math.sin(t*c)/u;return this._w=o*d+this._w*h,this._x=i*d+this._x*h,this._y=r*d+this._y*h,this._z=s*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class V{constructor(e=0,t=0,i=0){V.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Z_.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Z_.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=2*(o*r-a*i),c=2*(a*t-s*r),d=2*(s*i-o*t);return this.x=t+l*u+o*d-a*c,this.y=i+l*c+a*u-s*d,this.z=r+l*d+s*c-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this.z=Ye(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this.z=Ye(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ye(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return vf.copy(this).projectOnVector(e),this.sub(vf)}reflect(e){return this.sub(vf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ye(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const vf=new V,Z_=new cl;class Ve{constructor(e,t,i,r,s,o,a,l,u){Ve.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,u)}set(e,t,i,r,s,o,a,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=t,c[4]=s,c[5]=l,c[6]=i,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],c=i[4],d=i[7],h=i[2],p=i[5],v=i[8],m=r[0],_=r[3],f=r[6],x=r[1],S=r[4],y=r[7],E=r[2],w=r[5],A=r[8];return s[0]=o*m+a*x+l*E,s[3]=o*_+a*S+l*w,s[6]=o*f+a*y+l*A,s[1]=u*m+c*x+d*E,s[4]=u*_+c*S+d*w,s[7]=u*f+c*y+d*A,s[2]=h*m+p*x+v*E,s[5]=h*_+p*S+v*w,s[8]=h*f+p*y+v*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return t*o*c-t*a*u-i*s*c+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],d=c*o-a*u,h=a*l-c*s,p=u*s-o*l,v=t*d+i*h+r*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/v;return e[0]=d*m,e[1]=(r*u-c*i)*m,e[2]=(a*i-r*o)*m,e[3]=h*m,e[4]=(c*t-r*l)*m,e[5]=(r*s-a*t)*m,e[6]=p*m,e[7]=(i*l-u*t)*m,e[8]=(o*t-i*s)*m,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(xf.makeScale(e,t)),this}rotate(e){return this.premultiply(xf.makeRotation(-e)),this}translate(e,t){return this.premultiply(xf.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const xf=new Ve;function _y(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function oc(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function A1(){const n=oc("canvas");return n.style.display="block",n}const Q_={};function nl(n){n in Q_||(Q_[n]=!0,console.warn(n))}function C1(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const J_=new Ve().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),eg=new Ve().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function R1(){const n={enabled:!0,workingColorSpace:ko,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===it&&(r.r=qi(r.r),r.g=qi(r.g),r.b=qi(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===it&&(r.r=So(r.r),r.g=So(r.g),r.b=So(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===vr?rc:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return nl("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return nl("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[ko]:{primaries:e,whitePoint:i,transfer:rc,toXYZ:J_,fromXYZ:eg,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:qn},outputColorSpaceConfig:{drawingBufferColorSpace:qn}},[qn]:{primaries:e,whitePoint:i,transfer:it,toXYZ:J_,fromXYZ:eg,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:qn}}}),n}const Qe=R1();function qi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function So(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Fs;class b1{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Fs===void 0&&(Fs=oc("canvas")),Fs.width=e.width,Fs.height=e.height;const r=Fs.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Fs}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=oc("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=qi(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(qi(t[i]/255)*255):t[i]=qi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let P1=0;class um{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:P1++}),this.uuid=ul(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(yf(r[o].image)):s.push(yf(r[o]))}else s=yf(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function yf(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?b1.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let D1=0;const Sf=new V;class un extends Wo{constructor(e=un.DEFAULT_IMAGE,t=un.DEFAULT_MAPPING,i=mi,r=mi,s=_n,o=hs,a=ti,l=nr,u=un.DEFAULT_ANISOTROPY,c=vr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:D1++}),this.uuid=ul(),this.name="",this.source=new um(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ke(0,0),this.repeat=new ke(1,1),this.center=new ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Sf).x}get height(){return this.source.getSize(Sf).y}get depth(){return this.source.getSize(Sf).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==oy)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case dh:e.x=e.x-Math.floor(e.x);break;case mi:e.x=e.x<0?0:1;break;case hh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case dh:e.y=e.y-Math.floor(e.y);break;case mi:e.y=e.y<0?0:1;break;case hh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}un.DEFAULT_IMAGE=null;un.DEFAULT_MAPPING=oy;un.DEFAULT_ANISOTROPY=1;class wt{constructor(e=0,t=0,i=0,r=1){wt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,u=l[0],c=l[4],d=l[8],h=l[1],p=l[5],v=l[9],m=l[2],_=l[6],f=l[10];if(Math.abs(c-h)<.01&&Math.abs(d-m)<.01&&Math.abs(v-_)<.01){if(Math.abs(c+h)<.1&&Math.abs(d+m)<.1&&Math.abs(v+_)<.1&&Math.abs(u+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(u+1)/2,y=(p+1)/2,E=(f+1)/2,w=(c+h)/4,A=(d+m)/4,b=(v+_)/4;return S>y&&S>E?S<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(S),r=w/i,s=A/i):y>E?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=w/r,s=b/r):E<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(E),i=A/s,r=b/s),this.set(i,r,s,t),this}let x=Math.sqrt((_-v)*(_-v)+(d-m)*(d-m)+(h-c)*(h-c));return Math.abs(x)<.001&&(x=1),this.x=(_-v)/x,this.y=(d-m)/x,this.z=(h-c)/x,this.w=Math.acos((u+p+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this.z=Ye(this.z,e.z,t.z),this.w=Ye(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this.z=Ye(this.z,e,t),this.w=Ye(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ye(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class L1 extends Wo{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:_n,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new wt(0,0,e,t),this.scissorTest=!1,this.viewport=new wt(0,0,e,t);const r={width:e,height:t,depth:i.depth},s=new un(r);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:_n,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new um(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Vr extends L1{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class gy extends un{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=kn,this.minFilter=kn,this.wrapR=mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class I1 extends un{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=kn,this.minFilter=kn,this.wrapR=mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class fl{constructor(e=new V(1/0,1/0,1/0),t=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(ai.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(ai.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=ai.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ai):ai.fromBufferAttribute(s,o),ai.applyMatrix4(e.matrixWorld),this.expandByPoint(ai);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ul.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ul.copy(i.boundingBox)),Ul.applyMatrix4(e.matrixWorld),this.union(Ul)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ai),ai.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ia),Fl.subVectors(this.max,ia),Os.subVectors(e.a,ia),ks.subVectors(e.b,ia),zs.subVectors(e.c,ia),lr.subVectors(ks,Os),ur.subVectors(zs,ks),Kr.subVectors(Os,zs);let t=[0,-lr.z,lr.y,0,-ur.z,ur.y,0,-Kr.z,Kr.y,lr.z,0,-lr.x,ur.z,0,-ur.x,Kr.z,0,-Kr.x,-lr.y,lr.x,0,-ur.y,ur.x,0,-Kr.y,Kr.x,0];return!Mf(t,Os,ks,zs,Fl)||(t=[1,0,0,0,1,0,0,0,1],!Mf(t,Os,ks,zs,Fl))?!1:(Ol.crossVectors(lr,ur),t=[Ol.x,Ol.y,Ol.z],Mf(t,Os,ks,zs,Fl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ai).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ai).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ni[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ni[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ni[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ni[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ni[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ni[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ni[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ni[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ni),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ni=[new V,new V,new V,new V,new V,new V,new V,new V],ai=new V,Ul=new fl,Os=new V,ks=new V,zs=new V,lr=new V,ur=new V,Kr=new V,ia=new V,Fl=new V,Ol=new V,Zr=new V;function Mf(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Zr.fromArray(n,s);const a=r.x*Math.abs(Zr.x)+r.y*Math.abs(Zr.y)+r.z*Math.abs(Zr.z),l=e.dot(Zr),u=t.dot(Zr),c=i.dot(Zr);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const N1=new fl,ra=new V,Ef=new V;class Pc{constructor(e=new V,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):N1.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ra.subVectors(e,this.center);const t=ra.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(ra,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ef.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ra.copy(e.center).add(Ef)),this.expandByPoint(ra.copy(e.center).sub(Ef))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Ui=new V,Tf=new V,kl=new V,cr=new V,wf=new V,zl=new V,Af=new V;class vy{constructor(e=new V,t=new V(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ui)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ui.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ui.copy(this.origin).addScaledVector(this.direction,t),Ui.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Tf.copy(e).add(t).multiplyScalar(.5),kl.copy(t).sub(e).normalize(),cr.copy(this.origin).sub(Tf);const s=e.distanceTo(t)*.5,o=-this.direction.dot(kl),a=cr.dot(this.direction),l=-cr.dot(kl),u=cr.lengthSq(),c=Math.abs(1-o*o);let d,h,p,v;if(c>0)if(d=o*l-a,h=o*a-l,v=s*c,d>=0)if(h>=-v)if(h<=v){const m=1/c;d*=m,h*=m,p=d*(d+o*h+2*a)+h*(o*d+h+2*l)+u}else h=s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+u;else h=-s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+u;else h<=-v?(d=Math.max(0,-(-o*s+a)),h=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+h*(h+2*l)+u):h<=v?(d=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+u):(d=Math.max(0,-(o*s+a)),h=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+h*(h+2*l)+u);else h=o>0?-s:s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Tf).addScaledVector(kl,h),p}intersectSphere(e,t){Ui.subVectors(e.center,this.origin);const i=Ui.dot(this.direction),r=Ui.dot(Ui)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,d=1/this.direction.z,h=this.origin;return u>=0?(i=(e.min.x-h.x)*u,r=(e.max.x-h.x)*u):(i=(e.max.x-h.x)*u,r=(e.min.x-h.x)*u),c>=0?(s=(e.min.y-h.y)*c,o=(e.max.y-h.y)*c):(s=(e.max.y-h.y)*c,o=(e.min.y-h.y)*c),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Ui)!==null}intersectTriangle(e,t,i,r,s){wf.subVectors(t,e),zl.subVectors(i,e),Af.crossVectors(wf,zl);let o=this.direction.dot(Af),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;cr.subVectors(this.origin,e);const l=a*this.direction.dot(zl.crossVectors(cr,zl));if(l<0)return null;const u=a*this.direction.dot(wf.cross(cr));if(u<0||l+u>o)return null;const c=-a*cr.dot(Af);return c<0?null:this.at(c/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ut{constructor(e,t,i,r,s,o,a,l,u,c,d,h,p,v,m,_){Ut.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,u,c,d,h,p,v,m,_)}set(e,t,i,r,s,o,a,l,u,c,d,h,p,v,m,_){const f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=r,f[1]=s,f[5]=o,f[9]=a,f[13]=l,f[2]=u,f[6]=c,f[10]=d,f[14]=h,f[3]=p,f[7]=v,f[11]=m,f[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ut().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Bs.setFromMatrixColumn(e,0).length(),s=1/Bs.setFromMatrixColumn(e,1).length(),o=1/Bs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const h=o*c,p=o*d,v=a*c,m=a*d;t[0]=l*c,t[4]=-l*d,t[8]=u,t[1]=p+v*u,t[5]=h-m*u,t[9]=-a*l,t[2]=m-h*u,t[6]=v+p*u,t[10]=o*l}else if(e.order==="YXZ"){const h=l*c,p=l*d,v=u*c,m=u*d;t[0]=h+m*a,t[4]=v*a-p,t[8]=o*u,t[1]=o*d,t[5]=o*c,t[9]=-a,t[2]=p*a-v,t[6]=m+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*c,p=l*d,v=u*c,m=u*d;t[0]=h-m*a,t[4]=-o*d,t[8]=v+p*a,t[1]=p+v*a,t[5]=o*c,t[9]=m-h*a,t[2]=-o*u,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*c,p=o*d,v=a*c,m=a*d;t[0]=l*c,t[4]=v*u-p,t[8]=h*u+m,t[1]=l*d,t[5]=m*u+h,t[9]=p*u-v,t[2]=-u,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,p=o*u,v=a*l,m=a*u;t[0]=l*c,t[4]=m-h*d,t[8]=v*d+p,t[1]=d,t[5]=o*c,t[9]=-a*c,t[2]=-u*c,t[6]=p*d+v,t[10]=h-m*d}else if(e.order==="XZY"){const h=o*l,p=o*u,v=a*l,m=a*u;t[0]=l*c,t[4]=-d,t[8]=u*c,t[1]=h*d+m,t[5]=o*c,t[9]=p*d-v,t[2]=v*d-p,t[6]=a*c,t[10]=m*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(U1,e,F1)}lookAt(e,t,i){const r=this.elements;return bn.subVectors(e,t),bn.lengthSq()===0&&(bn.z=1),bn.normalize(),fr.crossVectors(i,bn),fr.lengthSq()===0&&(Math.abs(i.z)===1?bn.x+=1e-4:bn.z+=1e-4,bn.normalize(),fr.crossVectors(i,bn)),fr.normalize(),Bl.crossVectors(bn,fr),r[0]=fr.x,r[4]=Bl.x,r[8]=bn.x,r[1]=fr.y,r[5]=Bl.y,r[9]=bn.y,r[2]=fr.z,r[6]=Bl.z,r[10]=bn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],c=i[1],d=i[5],h=i[9],p=i[13],v=i[2],m=i[6],_=i[10],f=i[14],x=i[3],S=i[7],y=i[11],E=i[15],w=r[0],A=r[4],b=r[8],M=r[12],T=r[1],P=r[5],F=r[9],z=r[13],X=r[2],j=r[6],B=r[10],$=r[14],I=r[3],q=r[7],Q=r[11],ae=r[15];return s[0]=o*w+a*T+l*X+u*I,s[4]=o*A+a*P+l*j+u*q,s[8]=o*b+a*F+l*B+u*Q,s[12]=o*M+a*z+l*$+u*ae,s[1]=c*w+d*T+h*X+p*I,s[5]=c*A+d*P+h*j+p*q,s[9]=c*b+d*F+h*B+p*Q,s[13]=c*M+d*z+h*$+p*ae,s[2]=v*w+m*T+_*X+f*I,s[6]=v*A+m*P+_*j+f*q,s[10]=v*b+m*F+_*B+f*Q,s[14]=v*M+m*z+_*$+f*ae,s[3]=x*w+S*T+y*X+E*I,s[7]=x*A+S*P+y*j+E*q,s[11]=x*b+S*F+y*B+E*Q,s[15]=x*M+S*z+y*$+E*ae,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],c=e[2],d=e[6],h=e[10],p=e[14],v=e[3],m=e[7],_=e[11],f=e[15];return v*(+s*l*d-r*u*d-s*a*h+i*u*h+r*a*p-i*l*p)+m*(+t*l*p-t*u*h+s*o*h-r*o*p+r*u*c-s*l*c)+_*(+t*u*d-t*a*p-s*o*d+i*o*p+s*a*c-i*u*c)+f*(-r*a*c-t*l*d+t*a*h+r*o*d-i*o*h+i*l*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],d=e[9],h=e[10],p=e[11],v=e[12],m=e[13],_=e[14],f=e[15],x=d*_*u-m*h*u+m*l*p-a*_*p-d*l*f+a*h*f,S=v*h*u-c*_*u-v*l*p+o*_*p+c*l*f-o*h*f,y=c*m*u-v*d*u+v*a*p-o*m*p-c*a*f+o*d*f,E=v*d*l-c*m*l-v*a*h+o*m*h+c*a*_-o*d*_,w=t*x+i*S+r*y+s*E;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/w;return e[0]=x*A,e[1]=(m*h*s-d*_*s-m*r*p+i*_*p+d*r*f-i*h*f)*A,e[2]=(a*_*s-m*l*s+m*r*u-i*_*u-a*r*f+i*l*f)*A,e[3]=(d*l*s-a*h*s-d*r*u+i*h*u+a*r*p-i*l*p)*A,e[4]=S*A,e[5]=(c*_*s-v*h*s+v*r*p-t*_*p-c*r*f+t*h*f)*A,e[6]=(v*l*s-o*_*s-v*r*u+t*_*u+o*r*f-t*l*f)*A,e[7]=(o*h*s-c*l*s+c*r*u-t*h*u-o*r*p+t*l*p)*A,e[8]=y*A,e[9]=(v*d*s-c*m*s-v*i*p+t*m*p+c*i*f-t*d*f)*A,e[10]=(o*m*s-v*a*s+v*i*u-t*m*u-o*i*f+t*a*f)*A,e[11]=(c*a*s-o*d*s-c*i*u+t*d*u+o*i*p-t*a*p)*A,e[12]=E*A,e[13]=(c*m*r-v*d*r+v*i*h-t*m*h-c*i*_+t*d*_)*A,e[14]=(v*a*r-o*m*r-v*i*l+t*m*l+o*i*_-t*a*_)*A,e[15]=(o*d*r-c*a*r+c*i*l-t*d*l-o*i*h+t*a*h)*A,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,c=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*o,0,u*l-r*a,c*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,u=s+s,c=o+o,d=a+a,h=s*u,p=s*c,v=s*d,m=o*c,_=o*d,f=a*d,x=l*u,S=l*c,y=l*d,E=i.x,w=i.y,A=i.z;return r[0]=(1-(m+f))*E,r[1]=(p+y)*E,r[2]=(v-S)*E,r[3]=0,r[4]=(p-y)*w,r[5]=(1-(h+f))*w,r[6]=(_+x)*w,r[7]=0,r[8]=(v+S)*A,r[9]=(_-x)*A,r[10]=(1-(h+m))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Bs.set(r[0],r[1],r[2]).length();const o=Bs.set(r[4],r[5],r[6]).length(),a=Bs.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],li.copy(this);const u=1/s,c=1/o,d=1/a;return li.elements[0]*=u,li.elements[1]*=u,li.elements[2]*=u,li.elements[4]*=c,li.elements[5]*=c,li.elements[6]*=c,li.elements[8]*=d,li.elements[9]*=d,li.elements[10]*=d,t.setFromRotationMatrix(li),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=bi,l=!1){const u=this.elements,c=2*s/(t-e),d=2*s/(i-r),h=(t+e)/(t-e),p=(i+r)/(i-r);let v,m;if(l)v=s/(o-s),m=o*s/(o-s);else if(a===bi)v=-(o+s)/(o-s),m=-2*o*s/(o-s);else if(a===sc)v=-o/(o-s),m=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return u[0]=c,u[4]=0,u[8]=h,u[12]=0,u[1]=0,u[5]=d,u[9]=p,u[13]=0,u[2]=0,u[6]=0,u[10]=v,u[14]=m,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=bi,l=!1){const u=this.elements,c=2/(t-e),d=2/(i-r),h=-(t+e)/(t-e),p=-(i+r)/(i-r);let v,m;if(l)v=1/(o-s),m=o/(o-s);else if(a===bi)v=-2/(o-s),m=-(o+s)/(o-s);else if(a===sc)v=-1/(o-s),m=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return u[0]=c,u[4]=0,u[8]=0,u[12]=h,u[1]=0,u[5]=d,u[9]=0,u[13]=p,u[2]=0,u[6]=0,u[10]=v,u[14]=m,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Bs=new V,li=new Ut,U1=new V(0,0,0),F1=new V(1,1,1),fr=new V,Bl=new V,bn=new V,tg=new Ut,ng=new cl;class ir{constructor(e=0,t=0,i=0,r=ir.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],c=r[9],d=r[2],h=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(Ye(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Ye(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ye(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ye(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(Ye(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Ye(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return tg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(tg,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ng.setFromEuler(this),this.setFromQuaternion(ng,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ir.DEFAULT_ORDER="XYZ";class xy{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let O1=0;const ig=new V,Vs=new cl,Fi=new Ut,Vl=new V,sa=new V,k1=new V,z1=new cl,rg=new V(1,0,0),sg=new V(0,1,0),og=new V(0,0,1),ag={type:"added"},B1={type:"removed"},Hs={type:"childadded",child:null},Cf={type:"childremoved",child:null};class wn extends Wo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:O1++}),this.uuid=ul(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=wn.DEFAULT_UP.clone();const e=new V,t=new ir,i=new cl,r=new V(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ut},normalMatrix:{value:new Ve}}),this.matrix=new Ut,this.matrixWorld=new Ut,this.matrixAutoUpdate=wn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new xy,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Vs.setFromAxisAngle(e,t),this.quaternion.multiply(Vs),this}rotateOnWorldAxis(e,t){return Vs.setFromAxisAngle(e,t),this.quaternion.premultiply(Vs),this}rotateX(e){return this.rotateOnAxis(rg,e)}rotateY(e){return this.rotateOnAxis(sg,e)}rotateZ(e){return this.rotateOnAxis(og,e)}translateOnAxis(e,t){return ig.copy(e).applyQuaternion(this.quaternion),this.position.add(ig.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(rg,e)}translateY(e){return this.translateOnAxis(sg,e)}translateZ(e){return this.translateOnAxis(og,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Fi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Vl.copy(e):Vl.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),sa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Fi.lookAt(sa,Vl,this.up):Fi.lookAt(Vl,sa,this.up),this.quaternion.setFromRotationMatrix(Fi),r&&(Fi.extractRotation(r.matrixWorld),Vs.setFromRotationMatrix(Fi),this.quaternion.premultiply(Vs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ag),Hs.child=e,this.dispatchEvent(Hs),Hs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(B1),Cf.child=e,this.dispatchEvent(Cf),Cf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Fi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Fi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Fi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ag),Hs.child=e,this.dispatchEvent(Hs),Hs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sa,e,k1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sa,z1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const d=l[u];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),c=o(e.images),d=o(e.shapes),h=o(e.skeletons),p=o(e.animations),v=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),v.length>0&&(i.nodes=v)}return i.object=r,i;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}wn.DEFAULT_UP=new V(0,1,0);wn.DEFAULT_MATRIX_AUTO_UPDATE=!0;wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ui=new V,Oi=new V,Rf=new V,ki=new V,Gs=new V,Ws=new V,lg=new V,bf=new V,Pf=new V,Df=new V,Lf=new wt,If=new wt,Nf=new wt;class pi{constructor(e=new V,t=new V,i=new V){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),ui.subVectors(e,t),r.cross(ui);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){ui.subVectors(r,t),Oi.subVectors(i,t),Rf.subVectors(e,t);const o=ui.dot(ui),a=ui.dot(Oi),l=ui.dot(Rf),u=Oi.dot(Oi),c=Oi.dot(Rf),d=o*u-a*a;if(d===0)return s.set(0,0,0),null;const h=1/d,p=(u*l-a*c)*h,v=(o*c-a*l)*h;return s.set(1-p-v,v,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,ki)===null?!1:ki.x>=0&&ki.y>=0&&ki.x+ki.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,ki)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ki.x),l.addScaledVector(o,ki.y),l.addScaledVector(a,ki.z),l)}static getInterpolatedAttribute(e,t,i,r,s,o){return Lf.setScalar(0),If.setScalar(0),Nf.setScalar(0),Lf.fromBufferAttribute(e,t),If.fromBufferAttribute(e,i),Nf.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Lf,s.x),o.addScaledVector(If,s.y),o.addScaledVector(Nf,s.z),o}static isFrontFacing(e,t,i,r){return ui.subVectors(i,t),Oi.subVectors(e,t),ui.cross(Oi).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ui.subVectors(this.c,this.b),Oi.subVectors(this.a,this.b),ui.cross(Oi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return pi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return pi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return pi.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return pi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return pi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;Gs.subVectors(r,i),Ws.subVectors(s,i),bf.subVectors(e,i);const l=Gs.dot(bf),u=Ws.dot(bf);if(l<=0&&u<=0)return t.copy(i);Pf.subVectors(e,r);const c=Gs.dot(Pf),d=Ws.dot(Pf);if(c>=0&&d<=c)return t.copy(r);const h=l*d-c*u;if(h<=0&&l>=0&&c<=0)return o=l/(l-c),t.copy(i).addScaledVector(Gs,o);Df.subVectors(e,s);const p=Gs.dot(Df),v=Ws.dot(Df);if(v>=0&&p<=v)return t.copy(s);const m=p*u-l*v;if(m<=0&&u>=0&&v<=0)return a=u/(u-v),t.copy(i).addScaledVector(Ws,a);const _=c*v-p*d;if(_<=0&&d-c>=0&&p-v>=0)return lg.subVectors(s,r),a=(d-c)/(d-c+(p-v)),t.copy(r).addScaledVector(lg,a);const f=1/(_+m+h);return o=m*f,a=h*f,t.copy(i).addScaledVector(Gs,o).addScaledVector(Ws,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const yy={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},dr={h:0,s:0,l:0},Hl={h:0,s:0,l:0};function Uf(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Je{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=qn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=Qe.workingColorSpace){return this.r=e,this.g=t,this.b=i,Qe.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=Qe.workingColorSpace){if(e=w1(e,1),t=Ye(t,0,1),i=Ye(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Uf(o,s,e+1/3),this.g=Uf(o,s,e),this.b=Uf(o,s,e-1/3)}return Qe.colorSpaceToWorking(this,r),this}setStyle(e,t=qn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=qn){const i=yy[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=qi(e.r),this.g=qi(e.g),this.b=qi(e.b),this}copyLinearToSRGB(e){return this.r=So(e.r),this.g=So(e.g),this.b=So(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=qn){return Qe.workingToColorSpace(Qt.copy(this),e),Math.round(Ye(Qt.r*255,0,255))*65536+Math.round(Ye(Qt.g*255,0,255))*256+Math.round(Ye(Qt.b*255,0,255))}getHexString(e=qn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Qe.workingColorSpace){Qe.workingToColorSpace(Qt.copy(this),t);const i=Qt.r,r=Qt.g,s=Qt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const d=o-a;switch(u=c<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,t=Qe.workingColorSpace){return Qe.workingToColorSpace(Qt.copy(this),t),e.r=Qt.r,e.g=Qt.g,e.b=Qt.b,e}getStyle(e=qn){Qe.workingToColorSpace(Qt.copy(this),e);const t=Qt.r,i=Qt.g,r=Qt.b;return e!==qn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(dr),this.setHSL(dr.h+e,dr.s+t,dr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(dr),e.getHSL(Hl);const i=gf(dr.h,Hl.h,t),r=gf(dr.s,Hl.s,t),s=gf(dr.l,Hl.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Qt=new Je;Je.NAMES=yy;let V1=0;class dl extends Wo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:V1++}),this.uuid=ul(),this.name="",this.type="Material",this.blending=yo,this.side=Br,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=th,this.blendDst=nh,this.blendEquation=as,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Je(0,0,0),this.blendAlpha=0,this.depthFunc=Uo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=q_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Us,this.stencilZFail=Us,this.stencilZPass=Us,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==yo&&(i.blending=this.blending),this.side!==Br&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==th&&(i.blendSrc=this.blendSrc),this.blendDst!==nh&&(i.blendDst=this.blendDst),this.blendEquation!==as&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Uo&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==q_&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Us&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Us&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Us&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Sy extends dl{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ir,this.combine=sy,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Pt=new V,Gl=new ke;let H1=0;class vi{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:H1++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=$_,this.updateRanges=[],this.gpuType=Ri,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Gl.fromBufferAttribute(this,t),Gl.applyMatrix3(e),this.setXY(t,Gl.x,Gl.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix3(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix4(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Pt.fromBufferAttribute(this,t),Pt.applyNormalMatrix(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Pt.fromBufferAttribute(this,t),Pt.transformDirection(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=na(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=hn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=na(t,this.array)),t}setX(e,t){return this.normalized&&(t=hn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=na(t,this.array)),t}setY(e,t){return this.normalized&&(t=hn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=na(t,this.array)),t}setZ(e,t){return this.normalized&&(t=hn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=na(t,this.array)),t}setW(e,t){return this.normalized&&(t=hn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=hn(t,this.array),i=hn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=hn(t,this.array),i=hn(i,this.array),r=hn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=hn(t,this.array),i=hn(i,this.array),r=hn(r,this.array),s=hn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==$_&&(e.usage=this.usage),e}}class My extends vi{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Ey extends vi{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class $i extends vi{constructor(e,t,i){super(new Float32Array(e),t,i)}}let G1=0;const jn=new Ut,Ff=new wn,Xs=new V,Pn=new fl,oa=new fl,Vt=new V;class or extends Wo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:G1++}),this.uuid=ul(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(_y(e)?Ey:My)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ve().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return jn.makeRotationFromQuaternion(e),this.applyMatrix4(jn),this}rotateX(e){return jn.makeRotationX(e),this.applyMatrix4(jn),this}rotateY(e){return jn.makeRotationY(e),this.applyMatrix4(jn),this}rotateZ(e){return jn.makeRotationZ(e),this.applyMatrix4(jn),this}translate(e,t,i){return jn.makeTranslation(e,t,i),this.applyMatrix4(jn),this}scale(e,t,i){return jn.makeScale(e,t,i),this.applyMatrix4(jn),this}lookAt(e){return Ff.lookAt(e),Ff.updateMatrix(),this.applyMatrix4(Ff.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xs).negate(),this.translate(Xs.x,Xs.y,Xs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new $i(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new fl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Pn.setFromBufferAttribute(s),this.morphTargetsRelative?(Vt.addVectors(this.boundingBox.min,Pn.min),this.boundingBox.expandByPoint(Vt),Vt.addVectors(this.boundingBox.max,Pn.max),this.boundingBox.expandByPoint(Vt)):(this.boundingBox.expandByPoint(Pn.min),this.boundingBox.expandByPoint(Pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Pc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(e){const i=this.boundingSphere.center;if(Pn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];oa.setFromBufferAttribute(a),this.morphTargetsRelative?(Vt.addVectors(Pn.min,oa.min),Pn.expandByPoint(Vt),Vt.addVectors(Pn.max,oa.max),Pn.expandByPoint(Vt)):(Pn.expandByPoint(oa.min),Pn.expandByPoint(oa.max))}Pn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Vt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Vt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)Vt.fromBufferAttribute(a,u),l&&(Xs.fromBufferAttribute(e,u),Vt.add(Xs)),r=Math.max(r,i.distanceToSquared(Vt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new vi(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let b=0;b<i.count;b++)a[b]=new V,l[b]=new V;const u=new V,c=new V,d=new V,h=new ke,p=new ke,v=new ke,m=new V,_=new V;function f(b,M,T){u.fromBufferAttribute(i,b),c.fromBufferAttribute(i,M),d.fromBufferAttribute(i,T),h.fromBufferAttribute(s,b),p.fromBufferAttribute(s,M),v.fromBufferAttribute(s,T),c.sub(u),d.sub(u),p.sub(h),v.sub(h);const P=1/(p.x*v.y-v.x*p.y);isFinite(P)&&(m.copy(c).multiplyScalar(v.y).addScaledVector(d,-p.y).multiplyScalar(P),_.copy(d).multiplyScalar(p.x).addScaledVector(c,-v.x).multiplyScalar(P),a[b].add(m),a[M].add(m),a[T].add(m),l[b].add(_),l[M].add(_),l[T].add(_))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let b=0,M=x.length;b<M;++b){const T=x[b],P=T.start,F=T.count;for(let z=P,X=P+F;z<X;z+=3)f(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const S=new V,y=new V,E=new V,w=new V;function A(b){E.fromBufferAttribute(r,b),w.copy(E);const M=a[b];S.copy(M),S.sub(E.multiplyScalar(E.dot(M))).normalize(),y.crossVectors(w,M);const P=y.dot(l[b])<0?-1:1;o.setXYZW(b,S.x,S.y,S.z,P)}for(let b=0,M=x.length;b<M;++b){const T=x[b],P=T.start,F=T.count;for(let z=P,X=P+F;z<X;z+=3)A(e.getX(z+0)),A(e.getX(z+1)),A(e.getX(z+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new vi(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new V,s=new V,o=new V,a=new V,l=new V,u=new V,c=new V,d=new V;if(e)for(let h=0,p=e.count;h<p;h+=3){const v=e.getX(h+0),m=e.getX(h+1),_=e.getX(h+2);r.fromBufferAttribute(t,v),s.fromBufferAttribute(t,m),o.fromBufferAttribute(t,_),c.subVectors(o,s),d.subVectors(r,s),c.cross(d),a.fromBufferAttribute(i,v),l.fromBufferAttribute(i,m),u.fromBufferAttribute(i,_),a.add(c),l.add(c),u.add(c),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(m,l.x,l.y,l.z),i.setXYZ(_,u.x,u.y,u.z)}else for(let h=0,p=t.count;h<p;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),c.subVectors(o,s),d.subVectors(r,s),c.cross(d),i.setXYZ(h+0,c.x,c.y,c.z),i.setXYZ(h+1,c.x,c.y,c.z),i.setXYZ(h+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Vt.fromBufferAttribute(e,t),Vt.normalize(),e.setXYZ(t,Vt.x,Vt.y,Vt.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,d=a.normalized,h=new u.constructor(l.length*c);let p=0,v=0;for(let m=0,_=l.length;m<_;m++){a.isInterleavedBufferAttribute?p=l[m]*a.data.stride+a.offset:p=l[m]*c;for(let f=0;f<c;f++)h[v++]=u[p++]}return new vi(h,c,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new or,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);t.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let c=0,d=u.length;c<d;c++){const h=u[c],p=e(h,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let d=0,h=u.length;d<h;d++){const p=u[d];c.push(p.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(t))}const s=e.morphAttributes;for(const u in s){const c=[],d=s[u];for(let h=0,p=d.length;h<p;h++)c.push(d[h].clone(t));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,c=o.length;u<c;u++){const d=o[u];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ug=new Ut,Qr=new vy,Wl=new Pc,cg=new V,Xl=new V,jl=new V,Yl=new V,Of=new V,ql=new V,fg=new V,$l=new V;class ni extends wn{constructor(e=new or,t=new Sy){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){ql.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const c=a[l],d=s[l];c!==0&&(Of.fromBufferAttribute(d,e),o?ql.addScaledVector(Of,c):ql.addScaledVector(Of.sub(t),c))}t.add(ql)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Wl.copy(i.boundingSphere),Wl.applyMatrix4(s),Qr.copy(e.ray).recast(e.near),!(Wl.containsPoint(Qr.origin)===!1&&(Qr.intersectSphere(Wl,cg)===null||Qr.origin.distanceToSquared(cg)>(e.far-e.near)**2))&&(ug.copy(s).invert(),Qr.copy(e.ray).applyMatrix4(ug),!(i.boundingBox!==null&&Qr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Qr)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,c=s.attributes.uv1,d=s.attributes.normal,h=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,m=h.length;v<m;v++){const _=h[v],f=o[_.materialIndex],x=Math.max(_.start,p.start),S=Math.min(a.count,Math.min(_.start+_.count,p.start+p.count));for(let y=x,E=S;y<E;y+=3){const w=a.getX(y),A=a.getX(y+1),b=a.getX(y+2);r=Kl(this,f,e,i,u,c,d,w,A,b),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=_.materialIndex,t.push(r))}}else{const v=Math.max(0,p.start),m=Math.min(a.count,p.start+p.count);for(let _=v,f=m;_<f;_+=3){const x=a.getX(_),S=a.getX(_+1),y=a.getX(_+2);r=Kl(this,o,e,i,u,c,d,x,S,y),r&&(r.faceIndex=Math.floor(_/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,m=h.length;v<m;v++){const _=h[v],f=o[_.materialIndex],x=Math.max(_.start,p.start),S=Math.min(l.count,Math.min(_.start+_.count,p.start+p.count));for(let y=x,E=S;y<E;y+=3){const w=y,A=y+1,b=y+2;r=Kl(this,f,e,i,u,c,d,w,A,b),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=_.materialIndex,t.push(r))}}else{const v=Math.max(0,p.start),m=Math.min(l.count,p.start+p.count);for(let _=v,f=m;_<f;_+=3){const x=_,S=_+1,y=_+2;r=Kl(this,o,e,i,u,c,d,x,S,y),r&&(r.faceIndex=Math.floor(_/3),t.push(r))}}}}function W1(n,e,t,i,r,s,o,a){let l;if(e.side===Tn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Br,a),l===null)return null;$l.copy(a),$l.applyMatrix4(n.matrixWorld);const u=t.ray.origin.distanceTo($l);return u<t.near||u>t.far?null:{distance:u,point:$l.clone(),object:n}}function Kl(n,e,t,i,r,s,o,a,l,u){n.getVertexPosition(a,Xl),n.getVertexPosition(l,jl),n.getVertexPosition(u,Yl);const c=W1(n,e,t,i,Xl,jl,Yl,fg);if(c){const d=new V;pi.getBarycoord(fg,Xl,jl,Yl,d),r&&(c.uv=pi.getInterpolatedAttribute(r,a,l,u,d,new ke)),s&&(c.uv1=pi.getInterpolatedAttribute(s,a,l,u,d,new ke)),o&&(c.normal=pi.getInterpolatedAttribute(o,a,l,u,d,new V),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const h={a,b:l,c:u,normal:new V,materialIndex:0};pi.getNormal(Xl,jl,Yl,h.normal),c.face=h,c.barycoord=d}return c}class hl extends or{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],c=[],d=[];let h=0,p=0;v("z","y","x",-1,-1,i,t,e,o,s,0),v("z","y","x",1,-1,i,t,-e,o,s,1),v("x","z","y",1,1,e,i,t,r,o,2),v("x","z","y",1,-1,e,i,-t,r,o,3),v("x","y","z",1,-1,e,t,i,r,s,4),v("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new $i(u,3)),this.setAttribute("normal",new $i(c,3)),this.setAttribute("uv",new $i(d,2));function v(m,_,f,x,S,y,E,w,A,b,M){const T=y/A,P=E/b,F=y/2,z=E/2,X=w/2,j=A+1,B=b+1;let $=0,I=0;const q=new V;for(let Q=0;Q<B;Q++){const ae=Q*P-z;for(let me=0;me<j;me++){const We=me*T-F;q[m]=We*x,q[_]=ae*S,q[f]=X,u.push(q.x,q.y,q.z),q[m]=0,q[_]=0,q[f]=w>0?1:-1,c.push(q.x,q.y,q.z),d.push(me/A),d.push(1-Q/b),$+=1}}for(let Q=0;Q<b;Q++)for(let ae=0;ae<A;ae++){const me=h+ae+j*Q,We=h+ae+j*(Q+1),Ne=h+(ae+1)+j*(Q+1),Ue=h+(ae+1)+j*Q;l.push(me,We,Ue),l.push(We,Ne,Ue),I+=6}a.addGroup(p,I,M),p+=I,h+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function zo(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function sn(n){const e={};for(let t=0;t<n.length;t++){const i=zo(n[t]);for(const r in i)e[r]=i[r]}return e}function X1(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Ty(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Qe.workingColorSpace}const j1={clone:zo,merge:sn};var Y1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,q1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class rr extends dl{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Y1,this.fragmentShader=q1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=zo(e.uniforms),this.uniformsGroups=X1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class ac extends wn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ut,this.projectionMatrix=new Ut,this.projectionMatrixInverse=new Ut,this.coordinateSystem=bi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const hr=new V,dg=new ke,hg=new ke;class hi extends ac{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Hh*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(_f*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Hh*2*Math.atan(Math.tan(_f*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){hr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(hr.x,hr.y).multiplyScalar(-e/hr.z),hr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(hr.x,hr.y).multiplyScalar(-e/hr.z)}getViewSize(e,t){return this.getViewBounds(e,dg,hg),t.subVectors(hg,dg)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(_f*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const js=-90,Ys=1;class $1 extends wn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new hi(js,Ys,e,t);r.layers=this.layers,this.add(r);const s=new hi(js,Ys,e,t);s.layers=this.layers,this.add(s);const o=new hi(js,Ys,e,t);o.layers=this.layers,this.add(o);const a=new hi(js,Ys,e,t);a.layers=this.layers,this.add(a);const l=new hi(js,Ys,e,t);l.layers=this.layers,this.add(l);const u=new hi(js,Ys,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const u of t)this.remove(u);if(e===bi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===sc)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,u,c]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const m=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,u),i.texture.generateMipmaps=m,e.setRenderTarget(i,5,r),e.render(t,c),e.setRenderTarget(d,h,p),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class wy extends un{constructor(e=[],t=Fo,i,r,s,o,a,l,u,c){super(e,t,i,r,s,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class K1 extends Vr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new wy(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new hl(5,5,5),s=new rr({name:"CubemapFromEquirect",uniforms:zo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Tn,blending:Nr});s.uniforms.tEquirect.value=t;const o=new ni(r,s),a=t.minFilter;return t.minFilter===hs&&(t.minFilter=_n),new $1(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}class Zl extends wn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Z1={type:"move"};class kf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Zl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Zl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Zl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const m of e.hand.values()){const _=t.getJointPose(m,i),f=this._getHandJoint(u,m);_!==null&&(f.matrix.fromArray(_.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=_.radius),f.visible=_!==null}const c=u.joints["index-finger-tip"],d=u.joints["thumb-tip"],h=c.position.distanceTo(d.position),p=.02,v=.005;u.inputState.pinching&&h>p+v?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&h<=p-v&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Z1)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Zl;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class pg extends wn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ir,this.environmentIntensity=1,this.environmentRotation=new ir,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Q1 extends un{constructor(e=null,t=1,i=1,r,s,o,a,l,u=kn,c=kn,d,h){super(null,o,a,l,u,c,r,s,d,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const zf=new V,J1=new V,ew=new Ve;class ss{constructor(e=new V(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=zf.subVectors(i,t).cross(J1.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(zf),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||ew.getNormalMatrix(e),r=this.coplanarPoint(zf).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Jr=new Pc,tw=new ke(.5,.5),Ql=new V;class Ay{constructor(e=new ss,t=new ss,i=new ss,r=new ss,s=new ss,o=new ss){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=bi,i=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],u=s[3],c=s[4],d=s[5],h=s[6],p=s[7],v=s[8],m=s[9],_=s[10],f=s[11],x=s[12],S=s[13],y=s[14],E=s[15];if(r[0].setComponents(u-o,p-c,f-v,E-x).normalize(),r[1].setComponents(u+o,p+c,f+v,E+x).normalize(),r[2].setComponents(u+a,p+d,f+m,E+S).normalize(),r[3].setComponents(u-a,p-d,f-m,E-S).normalize(),i)r[4].setComponents(l,h,_,y).normalize(),r[5].setComponents(u-l,p-h,f-_,E-y).normalize();else if(r[4].setComponents(u-l,p-h,f-_,E-y).normalize(),t===bi)r[5].setComponents(u+l,p+h,f+_,E+y).normalize();else if(t===sc)r[5].setComponents(l,h,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Jr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Jr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Jr)}intersectsSprite(e){Jr.center.set(0,0,0);const t=tw.distanceTo(e.center);return Jr.radius=.7071067811865476+t,Jr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Jr)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Ql.x=r.normal.x>0?e.max.x:e.min.x,Ql.y=r.normal.y>0?e.max.y:e.min.y,Ql.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ql)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class nw extends dl{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Je(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const lc=new V,uc=new V,mg=new Ut,aa=new vy,Jl=new Pc,Bf=new V,_g=new V;class iw extends wn{constructor(e=new or,t=new nw){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)lc.fromBufferAttribute(t,r-1),uc.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=lc.distanceTo(uc);e.setAttribute("lineDistance",new $i(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Jl.copy(i.boundingSphere),Jl.applyMatrix4(r),Jl.radius+=s,e.ray.intersectsSphere(Jl)===!1)return;mg.copy(r).invert(),aa.copy(e.ray).applyMatrix4(mg);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=this.isLineSegments?2:1,c=i.index,h=i.attributes.position;if(c!==null){const p=Math.max(0,o.start),v=Math.min(c.count,o.start+o.count);for(let m=p,_=v-1;m<_;m+=u){const f=c.getX(m),x=c.getX(m+1),S=eu(this,e,aa,l,f,x,m);S&&t.push(S)}if(this.isLineLoop){const m=c.getX(v-1),_=c.getX(p),f=eu(this,e,aa,l,m,_,v-1);f&&t.push(f)}}else{const p=Math.max(0,o.start),v=Math.min(h.count,o.start+o.count);for(let m=p,_=v-1;m<_;m+=u){const f=eu(this,e,aa,l,m,m+1,m);f&&t.push(f)}if(this.isLineLoop){const m=eu(this,e,aa,l,v-1,p,v-1);m&&t.push(m)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function eu(n,e,t,i,r,s,o){const a=n.geometry.attributes.position;if(lc.fromBufferAttribute(a,r),uc.fromBufferAttribute(a,s),t.distanceSqToSegment(lc,uc,Bf,_g)>i)return;Bf.applyMatrix4(n.matrixWorld);const u=e.ray.origin.distanceTo(Bf);if(!(u<e.near||u>e.far))return{distance:u,point:_g.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}const gg=new V,vg=new V;class rw extends iw{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)gg.fromBufferAttribute(t,r),vg.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+gg.distanceTo(vg);e.setAttribute("lineDistance",new $i(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Cy extends un{constructor(e,t,i=Rs,r,s,o,a=kn,l=kn,u,c=el,d=1){if(c!==el&&c!==tl)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:d};super(h,r,s,o,a,l,c,i,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new um(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Ry extends un{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ss extends or{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,d=e/a,h=t/l,p=[],v=[],m=[],_=[];for(let f=0;f<c;f++){const x=f*h-o;for(let S=0;S<u;S++){const y=S*d-s;v.push(y,-x,0),m.push(0,0,1),_.push(S/a),_.push(1-f/l)}}for(let f=0;f<l;f++)for(let x=0;x<a;x++){const S=x+u*f,y=x+u*(f+1),E=x+1+u*(f+1),w=x+1+u*f;p.push(S,y,w),p.push(y,E,w)}this.setIndex(p),this.setAttribute("position",new $i(v,3)),this.setAttribute("normal",new $i(m,3)),this.setAttribute("uv",new $i(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ss(e.width,e.height,e.widthSegments,e.heightSegments)}}class tu extends rr{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class sw extends dl{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=p1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ow extends dl{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class aw extends ac{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class lw extends hi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class uw{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function xg(n,e,t,i){const r=cw(i);switch(t){case fy:return n*e;case hy:return n*e/r.components*r.byteLength;case om:return n*e/r.components*r.byteLength;case py:return n*e*2/r.components*r.byteLength;case am:return n*e*2/r.components*r.byteLength;case dy:return n*e*3/r.components*r.byteLength;case ti:return n*e*4/r.components*r.byteLength;case lm:return n*e*4/r.components*r.byteLength;case yu:case Su:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Mu:case Eu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case mh:case gh:return Math.max(n,16)*Math.max(e,8)/4;case ph:case _h:return Math.max(n,8)*Math.max(e,8)/2;case vh:case xh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case yh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Sh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Mh:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Eh:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Th:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case wh:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Ah:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Ch:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Rh:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case bh:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Ph:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Dh:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Lh:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Ih:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Nh:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Uh:case Fh:case Oh:return Math.ceil(n/4)*Math.ceil(e/4)*16;case kh:case zh:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Bh:case Vh:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function cw(n){switch(n){case nr:case ay:return{byteLength:1,components:1};case Qa:case ly:case Go:return{byteLength:2,components:1};case rm:case sm:return{byteLength:2,components:4};case Rs:case im:case Ri:return{byteLength:4,components:1};case uy:case cy:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:nm}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=nm);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function by(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function fw(n){const e=new WeakMap;function t(a,l){const u=a.array,c=a.usage,d=u.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,u,c),a.onUploadCallback();let p;if(u instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)p=n.HALF_FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(u instanceof Int16Array)p=n.SHORT;else if(u instanceof Uint32Array)p=n.UNSIGNED_INT;else if(u instanceof Int32Array)p=n.INT;else if(u instanceof Int8Array)p=n.BYTE;else if(u instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:h,type:p,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,u){const c=l.array,d=l.updateRanges;if(n.bindBuffer(u,a),d.length===0)n.bufferSubData(u,0,c);else{d.sort((p,v)=>p.start-v.start);let h=0;for(let p=1;p<d.length;p++){const v=d[h],m=d[p];m.start<=v.start+v.count+1?v.count=Math.max(v.count,m.start+m.count-v.start):(++h,d[h]=m)}d.length=h+1;for(let p=0,v=d.length;p<v;p++){const m=d[p];n.bufferSubData(u,m.start*c.BYTES_PER_ELEMENT,c,m.start,m.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const c=e.get(a);(!c||c.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const u=e.get(a);if(u===void 0)e.set(a,t(a,l));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,a,l),u.version=a.version}}return{get:r,remove:s,update:o}}var dw=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,hw=`#ifdef USE_ALPHAHASH
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
#endif`,pw=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,mw=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_w=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,gw=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,vw=`#ifdef USE_AOMAP
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
#endif`,xw=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,yw=`#ifdef USE_BATCHING
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
#endif`,Sw=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Mw=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ew=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Tw=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ww=`#ifdef USE_IRIDESCENCE
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
#endif`,Aw=`#ifdef USE_BUMPMAP
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
#endif`,Cw=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Rw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,bw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Pw=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Dw=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Lw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Iw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Nw=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Uw=`#define PI 3.141592653589793
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
} // validated`,Fw=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ow=`vec3 transformedNormal = objectNormal;
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
#endif`,kw=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,zw=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Bw=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Vw=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Hw="gl_FragColor = linearToOutputTexel( gl_FragColor );",Gw=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ww=`#ifdef USE_ENVMAP
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
#endif`,Xw=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,jw=`#ifdef USE_ENVMAP
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
#endif`,Yw=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,qw=`#ifdef USE_ENVMAP
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
#endif`,$w=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Kw=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Zw=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Qw=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Jw=`#ifdef USE_GRADIENTMAP
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
}`,eA=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,tA=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,nA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,iA=`uniform bool receiveShadow;
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
#endif`,rA=`#ifdef USE_ENVMAP
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
#endif`,sA=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,oA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,aA=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,uA=`PhysicalMaterial material;
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
#endif`,cA=`struct PhysicalMaterial {
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
}`,fA=`
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
#endif`,dA=`#if defined( RE_IndirectDiffuse )
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
#endif`,hA=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,pA=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,mA=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_A=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,vA=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,xA=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,yA=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,SA=`#if defined( USE_POINTS_UV )
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
#endif`,MA=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,EA=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,TA=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,wA=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,AA=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,CA=`#ifdef USE_MORPHTARGETS
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
#endif`,RA=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,PA=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,DA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,LA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,IA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,NA=`#ifdef USE_NORMALMAP
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
#endif`,UA=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,FA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,OA=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,kA=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,zA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,BA=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,VA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,HA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,GA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,WA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,XA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,jA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,YA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,qA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,$A=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,KA=`float getShadowMask() {
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
}`,ZA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,QA=`#ifdef USE_SKINNING
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
#endif`,JA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,eC=`#ifdef USE_SKINNING
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
#endif`,tC=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,nC=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,iC=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,rC=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,sC=`#ifdef USE_TRANSMISSION
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
#endif`,oC=`#ifdef USE_TRANSMISSION
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
#endif`,aC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cC=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const fC=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,dC=`uniform sampler2D t2D;
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
}`,hC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pC=`#ifdef ENVMAP_TYPE_CUBE
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
}`,mC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_C=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gC=`#include <common>
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
}`,vC=`#if DEPTH_PACKING == 3200
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
}`,xC=`#define DISTANCE
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
}`,yC=`#define DISTANCE
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
}`,SC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,MC=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,EC=`uniform float scale;
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
}`,TC=`uniform vec3 diffuse;
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
}`,wC=`#include <common>
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
}`,AC=`uniform vec3 diffuse;
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
}`,CC=`#define LAMBERT
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
}`,RC=`#define LAMBERT
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
}`,bC=`#define MATCAP
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
}`,PC=`#define MATCAP
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
}`,DC=`#define NORMAL
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
}`,LC=`#define NORMAL
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
}`,IC=`#define PHONG
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
}`,NC=`#define PHONG
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
}`,UC=`#define STANDARD
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
}`,FC=`#define STANDARD
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
}`,OC=`#define TOON
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
}`,kC=`#define TOON
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
}`,zC=`uniform float size;
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
}`,BC=`uniform vec3 diffuse;
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
}`,VC=`#include <common>
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
}`,HC=`uniform vec3 color;
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
}`,GC=`uniform float rotation;
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
}`,WC=`uniform vec3 diffuse;
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
}`,He={alphahash_fragment:dw,alphahash_pars_fragment:hw,alphamap_fragment:pw,alphamap_pars_fragment:mw,alphatest_fragment:_w,alphatest_pars_fragment:gw,aomap_fragment:vw,aomap_pars_fragment:xw,batching_pars_vertex:yw,batching_vertex:Sw,begin_vertex:Mw,beginnormal_vertex:Ew,bsdfs:Tw,iridescence_fragment:ww,bumpmap_pars_fragment:Aw,clipping_planes_fragment:Cw,clipping_planes_pars_fragment:Rw,clipping_planes_pars_vertex:bw,clipping_planes_vertex:Pw,color_fragment:Dw,color_pars_fragment:Lw,color_pars_vertex:Iw,color_vertex:Nw,common:Uw,cube_uv_reflection_fragment:Fw,defaultnormal_vertex:Ow,displacementmap_pars_vertex:kw,displacementmap_vertex:zw,emissivemap_fragment:Bw,emissivemap_pars_fragment:Vw,colorspace_fragment:Hw,colorspace_pars_fragment:Gw,envmap_fragment:Ww,envmap_common_pars_fragment:Xw,envmap_pars_fragment:jw,envmap_pars_vertex:Yw,envmap_physical_pars_fragment:rA,envmap_vertex:qw,fog_vertex:$w,fog_pars_vertex:Kw,fog_fragment:Zw,fog_pars_fragment:Qw,gradientmap_pars_fragment:Jw,lightmap_pars_fragment:eA,lights_lambert_fragment:tA,lights_lambert_pars_fragment:nA,lights_pars_begin:iA,lights_toon_fragment:sA,lights_toon_pars_fragment:oA,lights_phong_fragment:aA,lights_phong_pars_fragment:lA,lights_physical_fragment:uA,lights_physical_pars_fragment:cA,lights_fragment_begin:fA,lights_fragment_maps:dA,lights_fragment_end:hA,logdepthbuf_fragment:pA,logdepthbuf_pars_fragment:mA,logdepthbuf_pars_vertex:_A,logdepthbuf_vertex:gA,map_fragment:vA,map_pars_fragment:xA,map_particle_fragment:yA,map_particle_pars_fragment:SA,metalnessmap_fragment:MA,metalnessmap_pars_fragment:EA,morphinstance_vertex:TA,morphcolor_vertex:wA,morphnormal_vertex:AA,morphtarget_pars_vertex:CA,morphtarget_vertex:RA,normal_fragment_begin:bA,normal_fragment_maps:PA,normal_pars_fragment:DA,normal_pars_vertex:LA,normal_vertex:IA,normalmap_pars_fragment:NA,clearcoat_normal_fragment_begin:UA,clearcoat_normal_fragment_maps:FA,clearcoat_pars_fragment:OA,iridescence_pars_fragment:kA,opaque_fragment:zA,packing:BA,premultiplied_alpha_fragment:VA,project_vertex:HA,dithering_fragment:GA,dithering_pars_fragment:WA,roughnessmap_fragment:XA,roughnessmap_pars_fragment:jA,shadowmap_pars_fragment:YA,shadowmap_pars_vertex:qA,shadowmap_vertex:$A,shadowmask_pars_fragment:KA,skinbase_vertex:ZA,skinning_pars_vertex:QA,skinning_vertex:JA,skinnormal_vertex:eC,specularmap_fragment:tC,specularmap_pars_fragment:nC,tonemapping_fragment:iC,tonemapping_pars_fragment:rC,transmission_fragment:sC,transmission_pars_fragment:oC,uv_pars_fragment:aC,uv_pars_vertex:lC,uv_vertex:uC,worldpos_vertex:cC,background_vert:fC,background_frag:dC,backgroundCube_vert:hC,backgroundCube_frag:pC,cube_vert:mC,cube_frag:_C,depth_vert:gC,depth_frag:vC,distanceRGBA_vert:xC,distanceRGBA_frag:yC,equirect_vert:SC,equirect_frag:MC,linedashed_vert:EC,linedashed_frag:TC,meshbasic_vert:wC,meshbasic_frag:AC,meshlambert_vert:CC,meshlambert_frag:RC,meshmatcap_vert:bC,meshmatcap_frag:PC,meshnormal_vert:DC,meshnormal_frag:LC,meshphong_vert:IC,meshphong_frag:NC,meshphysical_vert:UC,meshphysical_frag:FC,meshtoon_vert:OC,meshtoon_frag:kC,points_vert:zC,points_frag:BC,shadow_vert:VC,shadow_frag:HC,sprite_vert:GC,sprite_frag:WC},ue={common:{diffuse:{value:new Je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ve}},envmap:{envMap:{value:null},envMapRotation:{value:new Ve},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ve},normalScale:{value:new ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0},uvTransform:{value:new Ve}},sprite:{diffuse:{value:new Je(16777215)},opacity:{value:1},center:{value:new ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}}},Ti={basic:{uniforms:sn([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.fog]),vertexShader:He.meshbasic_vert,fragmentShader:He.meshbasic_frag},lambert:{uniforms:sn([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Je(0)}}]),vertexShader:He.meshlambert_vert,fragmentShader:He.meshlambert_frag},phong:{uniforms:sn([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Je(0)},specular:{value:new Je(1118481)},shininess:{value:30}}]),vertexShader:He.meshphong_vert,fragmentShader:He.meshphong_frag},standard:{uniforms:sn([ue.common,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.roughnessmap,ue.metalnessmap,ue.fog,ue.lights,{emissive:{value:new Je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag},toon:{uniforms:sn([ue.common,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.gradientmap,ue.fog,ue.lights,{emissive:{value:new Je(0)}}]),vertexShader:He.meshtoon_vert,fragmentShader:He.meshtoon_frag},matcap:{uniforms:sn([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,{matcap:{value:null}}]),vertexShader:He.meshmatcap_vert,fragmentShader:He.meshmatcap_frag},points:{uniforms:sn([ue.points,ue.fog]),vertexShader:He.points_vert,fragmentShader:He.points_frag},dashed:{uniforms:sn([ue.common,ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:He.linedashed_vert,fragmentShader:He.linedashed_frag},depth:{uniforms:sn([ue.common,ue.displacementmap]),vertexShader:He.depth_vert,fragmentShader:He.depth_frag},normal:{uniforms:sn([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,{opacity:{value:1}}]),vertexShader:He.meshnormal_vert,fragmentShader:He.meshnormal_frag},sprite:{uniforms:sn([ue.sprite,ue.fog]),vertexShader:He.sprite_vert,fragmentShader:He.sprite_frag},background:{uniforms:{uvTransform:{value:new Ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:He.background_vert,fragmentShader:He.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ve}},vertexShader:He.backgroundCube_vert,fragmentShader:He.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:He.cube_vert,fragmentShader:He.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:He.equirect_vert,fragmentShader:He.equirect_frag},distanceRGBA:{uniforms:sn([ue.common,ue.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:He.distanceRGBA_vert,fragmentShader:He.distanceRGBA_frag},shadow:{uniforms:sn([ue.lights,ue.fog,{color:{value:new Je(0)},opacity:{value:1}}]),vertexShader:He.shadow_vert,fragmentShader:He.shadow_frag}};Ti.physical={uniforms:sn([Ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ve},clearcoatNormalScale:{value:new ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ve},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ve},sheen:{value:0},sheenColor:{value:new Je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ve},transmissionSamplerSize:{value:new ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ve},attenuationDistance:{value:0},attenuationColor:{value:new Je(0)},specularColor:{value:new Je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ve},anisotropyVector:{value:new ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ve}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag};const nu={r:0,b:0,g:0},es=new ir,XC=new Ut;function jC(n,e,t,i,r,s,o){const a=new Je(0);let l=s===!0?0:1,u,c,d=null,h=0,p=null;function v(S){let y=S.isScene===!0?S.background:null;return y&&y.isTexture&&(y=(S.backgroundBlurriness>0?t:e).get(y)),y}function m(S){let y=!1;const E=v(S);E===null?f(a,l):E&&E.isColor&&(f(E,1),y=!0);const w=n.xr.getEnvironmentBlendMode();w==="additive"?i.buffers.color.setClear(0,0,0,1,o):w==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function _(S,y){const E=v(y);E&&(E.isCubeTexture||E.mapping===bc)?(c===void 0&&(c=new ni(new hl(1,1,1),new rr({name:"BackgroundCubeMaterial",uniforms:zo(Ti.backgroundCube.uniforms),vertexShader:Ti.backgroundCube.vertexShader,fragmentShader:Ti.backgroundCube.fragmentShader,side:Tn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,A,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),es.copy(y.backgroundRotation),es.x*=-1,es.y*=-1,es.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(es.y*=-1,es.z*=-1),c.material.uniforms.envMap.value=E,c.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(XC.makeRotationFromEuler(es)),c.material.toneMapped=Qe.getTransfer(E.colorSpace)!==it,(d!==E||h!==E.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,d=E,h=E.version,p=n.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null)):E&&E.isTexture&&(u===void 0&&(u=new ni(new Ss(2,2),new rr({name:"BackgroundMaterial",uniforms:zo(Ti.background.uniforms),vertexShader:Ti.background.vertexShader,fragmentShader:Ti.background.fragmentShader,side:Br,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=E,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.toneMapped=Qe.getTransfer(E.colorSpace)!==it,E.matrixAutoUpdate===!0&&E.updateMatrix(),u.material.uniforms.uvTransform.value.copy(E.matrix),(d!==E||h!==E.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,d=E,h=E.version,p=n.toneMapping),u.layers.enableAll(),S.unshift(u,u.geometry,u.material,0,0,null))}function f(S,y){S.getRGB(nu,Ty(n)),i.buffers.color.setClear(nu.r,nu.g,nu.b,y,o)}function x(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,y=1){a.set(S),l=y,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,f(a,l)},render:m,addToRenderList:_,dispose:x}}function YC(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,o=!1;function a(T,P,F,z,X){let j=!1;const B=d(z,F,P);s!==B&&(s=B,u(s.object)),j=p(T,z,F,X),j&&v(T,z,F,X),X!==null&&e.update(X,n.ELEMENT_ARRAY_BUFFER),(j||o)&&(o=!1,y(T,P,F,z),X!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function l(){return n.createVertexArray()}function u(T){return n.bindVertexArray(T)}function c(T){return n.deleteVertexArray(T)}function d(T,P,F){const z=F.wireframe===!0;let X=i[T.id];X===void 0&&(X={},i[T.id]=X);let j=X[P.id];j===void 0&&(j={},X[P.id]=j);let B=j[z];return B===void 0&&(B=h(l()),j[z]=B),B}function h(T){const P=[],F=[],z=[];for(let X=0;X<t;X++)P[X]=0,F[X]=0,z[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:F,attributeDivisors:z,object:T,attributes:{},index:null}}function p(T,P,F,z){const X=s.attributes,j=P.attributes;let B=0;const $=F.getAttributes();for(const I in $)if($[I].location>=0){const Q=X[I];let ae=j[I];if(ae===void 0&&(I==="instanceMatrix"&&T.instanceMatrix&&(ae=T.instanceMatrix),I==="instanceColor"&&T.instanceColor&&(ae=T.instanceColor)),Q===void 0||Q.attribute!==ae||ae&&Q.data!==ae.data)return!0;B++}return s.attributesNum!==B||s.index!==z}function v(T,P,F,z){const X={},j=P.attributes;let B=0;const $=F.getAttributes();for(const I in $)if($[I].location>=0){let Q=j[I];Q===void 0&&(I==="instanceMatrix"&&T.instanceMatrix&&(Q=T.instanceMatrix),I==="instanceColor"&&T.instanceColor&&(Q=T.instanceColor));const ae={};ae.attribute=Q,Q&&Q.data&&(ae.data=Q.data),X[I]=ae,B++}s.attributes=X,s.attributesNum=B,s.index=z}function m(){const T=s.newAttributes;for(let P=0,F=T.length;P<F;P++)T[P]=0}function _(T){f(T,0)}function f(T,P){const F=s.newAttributes,z=s.enabledAttributes,X=s.attributeDivisors;F[T]=1,z[T]===0&&(n.enableVertexAttribArray(T),z[T]=1),X[T]!==P&&(n.vertexAttribDivisor(T,P),X[T]=P)}function x(){const T=s.newAttributes,P=s.enabledAttributes;for(let F=0,z=P.length;F<z;F++)P[F]!==T[F]&&(n.disableVertexAttribArray(F),P[F]=0)}function S(T,P,F,z,X,j,B){B===!0?n.vertexAttribIPointer(T,P,F,X,j):n.vertexAttribPointer(T,P,F,z,X,j)}function y(T,P,F,z){m();const X=z.attributes,j=F.getAttributes(),B=P.defaultAttributeValues;for(const $ in j){const I=j[$];if(I.location>=0){let q=X[$];if(q===void 0&&($==="instanceMatrix"&&T.instanceMatrix&&(q=T.instanceMatrix),$==="instanceColor"&&T.instanceColor&&(q=T.instanceColor)),q!==void 0){const Q=q.normalized,ae=q.itemSize,me=e.get(q);if(me===void 0)continue;const We=me.buffer,Ne=me.type,Ue=me.bytesPerElement,K=Ne===n.INT||Ne===n.UNSIGNED_INT||q.gpuType===im;if(q.isInterleavedBufferAttribute){const ee=q.data,pe=ee.stride,Le=q.offset;if(ee.isInstancedInterleavedBuffer){for(let we=0;we<I.locationSize;we++)f(I.location+we,ee.meshPerAttribute);T.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let we=0;we<I.locationSize;we++)_(I.location+we);n.bindBuffer(n.ARRAY_BUFFER,We);for(let we=0;we<I.locationSize;we++)S(I.location+we,ae/I.locationSize,Ne,Q,pe*Ue,(Le+ae/I.locationSize*we)*Ue,K)}else{if(q.isInstancedBufferAttribute){for(let ee=0;ee<I.locationSize;ee++)f(I.location+ee,q.meshPerAttribute);T.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let ee=0;ee<I.locationSize;ee++)_(I.location+ee);n.bindBuffer(n.ARRAY_BUFFER,We);for(let ee=0;ee<I.locationSize;ee++)S(I.location+ee,ae/I.locationSize,Ne,Q,ae*Ue,ae/I.locationSize*ee*Ue,K)}}else if(B!==void 0){const Q=B[$];if(Q!==void 0)switch(Q.length){case 2:n.vertexAttrib2fv(I.location,Q);break;case 3:n.vertexAttrib3fv(I.location,Q);break;case 4:n.vertexAttrib4fv(I.location,Q);break;default:n.vertexAttrib1fv(I.location,Q)}}}}x()}function E(){b();for(const T in i){const P=i[T];for(const F in P){const z=P[F];for(const X in z)c(z[X].object),delete z[X];delete P[F]}delete i[T]}}function w(T){if(i[T.id]===void 0)return;const P=i[T.id];for(const F in P){const z=P[F];for(const X in z)c(z[X].object),delete z[X];delete P[F]}delete i[T.id]}function A(T){for(const P in i){const F=i[P];if(F[T.id]===void 0)continue;const z=F[T.id];for(const X in z)c(z[X].object),delete z[X];delete F[T.id]}}function b(){M(),o=!0,s!==r&&(s=r,u(s.object))}function M(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:b,resetDefaultState:M,dispose:E,releaseStatesOfGeometry:w,releaseStatesOfProgram:A,initAttributes:m,enableAttribute:_,disableUnusedAttributes:x}}function qC(n,e,t){let i;function r(u){i=u}function s(u,c){n.drawArrays(i,u,c),t.update(c,i,1)}function o(u,c,d){d!==0&&(n.drawArraysInstanced(i,u,c,d),t.update(c,i,d))}function a(u,c,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,c,0,d);let p=0;for(let v=0;v<d;v++)p+=c[v];t.update(p,i,1)}function l(u,c,d,h){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let v=0;v<u.length;v++)o(u[v],c[v],h[v]);else{p.multiDrawArraysInstancedWEBGL(i,u,0,c,0,h,0,d);let v=0;for(let m=0;m<d;m++)v+=c[m]*h[m];t.update(v,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function $C(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(A){return!(A!==ti&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const b=A===Go&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==nr&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Ri&&!b)}function l(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=t.precision!==void 0?t.precision:"highp";const c=l(u);c!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",c,"instead."),u=c);const d=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_TEXTURE_SIZE),_=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),f=n.getParameter(n.MAX_VERTEX_ATTRIBS),x=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),S=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),E=v>0,w=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:p,maxVertexTextures:v,maxTextureSize:m,maxCubemapSize:_,maxAttributes:f,maxVertexUniforms:x,maxVaryings:S,maxFragmentUniforms:y,vertexTextures:E,maxSamples:w}}function KC(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new ss,a=new Ve,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const p=d.length!==0||h||i!==0||r;return r=h,i=d.length,p},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){t=c(d,h,0)},this.setState=function(d,h,p){const v=d.clippingPlanes,m=d.clipIntersection,_=d.clipShadows,f=n.get(d);if(!r||v===null||v.length===0||s&&!_)s?c(null):u();else{const x=s?0:i,S=x*4;let y=f.clippingState||null;l.value=y,y=c(v,h,S,p);for(let E=0;E!==S;++E)y[E]=t[E];f.clippingState=y,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=x}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(d,h,p,v){const m=d!==null?d.length:0;let _=null;if(m!==0){if(_=l.value,v!==!0||_===null){const f=p+m*4,x=h.matrixWorldInverse;a.getNormalMatrix(x),(_===null||_.length<f)&&(_=new Float32Array(f));for(let S=0,y=p;S!==m;++S,y+=4)o.copy(d[S]).applyMatrix4(x,a),o.normal.toArray(_,y),_[y+3]=o.constant}l.value=_,l.needsUpdate=!0}return e.numPlanes=m,e.numIntersection=0,_}}function ZC(n){let e=new WeakMap;function t(o,a){return a===ch?o.mapping=Fo:a===fh&&(o.mapping=Oo),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===ch||a===fh)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new K1(l.height);return u.fromEquirectangularTexture(n,o),e.set(o,u),o.addEventListener("dispose",r),t(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const uo=4,yg=[.125,.215,.35,.446,.526,.582],ls=20,Vf=new aw,Sg=new Je;let Hf=null,Gf=0,Wf=0,Xf=!1;const os=(1+Math.sqrt(5))/2,qs=1/os,Mg=[new V(-os,qs,0),new V(os,qs,0),new V(-qs,0,os),new V(qs,0,os),new V(0,os,-qs),new V(0,os,qs),new V(-1,1,-1),new V(1,1,-1),new V(-1,1,1),new V(1,1,1)],QC=new V;class Eg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100,s={}){const{size:o=256,position:a=QC}=s;Hf=this._renderer.getRenderTarget(),Gf=this._renderer.getActiveCubeFace(),Wf=this._renderer.getActiveMipmapLevel(),Xf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ag(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=wg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Hf,Gf,Wf),this._renderer.xr.enabled=Xf,e.scissorTest=!1,iu(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Fo||e.mapping===Oo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Hf=this._renderer.getRenderTarget(),Gf=this._renderer.getActiveCubeFace(),Wf=this._renderer.getActiveMipmapLevel(),Xf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:_n,minFilter:_n,generateMipmaps:!1,type:Go,format:ti,colorSpace:ko,depthBuffer:!1},r=Tg(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Tg(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=JC(s)),this._blurMaterial=eR(s,e,t)}return r}_compileMaterial(e){const t=new ni(this._lodPlanes[0],e);this._renderer.compile(t,Vf)}_sceneToCubeUV(e,t,i,r,s){const l=new hi(90,1,t,i),u=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,p=d.toneMapping;d.getClearColor(Sg),d.toneMapping=Ur,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null));const m=new Sy({name:"PMREM.Background",side:Tn,depthWrite:!1,depthTest:!1}),_=new ni(new hl,m);let f=!1;const x=e.background;x?x.isColor&&(m.color.copy(x),e.background=null,f=!0):(m.color.copy(Sg),f=!0);for(let S=0;S<6;S++){const y=S%3;y===0?(l.up.set(0,u[S],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+c[S],s.y,s.z)):y===1?(l.up.set(0,0,u[S]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+c[S],s.z)):(l.up.set(0,u[S],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+c[S]));const E=this._cubeSize;iu(r,y*E,S>2?E:0,E,E),d.setRenderTarget(r),f&&d.render(_,l),d.render(e,l)}_.geometry.dispose(),_.material.dispose(),d.toneMapping=p,d.autoClear=h,e.background=x}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Fo||e.mapping===Oo;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ag()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=wg());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new ni(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;iu(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Vf)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Mg[(r-s-1)%Mg.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,d=new ni(this._lodPlanes[r],u),h=u.uniforms,p=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*ls-1),m=s/v,_=isFinite(s)?1+Math.floor(c*m):ls;_>ls&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${ls}`);const f=[];let x=0;for(let A=0;A<ls;++A){const b=A/m,M=Math.exp(-b*b/2);f.push(M),A===0?x+=M:A<_&&(x+=2*M)}for(let A=0;A<f.length;A++)f[A]=f[A]/x;h.envMap.value=e.texture,h.samples.value=_,h.weights.value=f,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:S}=this;h.dTheta.value=v,h.mipInt.value=S-i;const y=this._sizeLods[r],E=3*y*(r>S-uo?r-S+uo:0),w=4*(this._cubeSize-y);iu(t,E,w,3*y,2*y),l.setRenderTarget(t),l.render(d,Vf)}}function JC(n){const e=[],t=[],i=[];let r=n;const s=n-uo+1+yg.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-uo?l=yg[o-n+uo-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),c=-u,d=1+u,h=[c,c,d,c,d,d,c,c,d,d,c,d],p=6,v=6,m=3,_=2,f=1,x=new Float32Array(m*v*p),S=new Float32Array(_*v*p),y=new Float32Array(f*v*p);for(let w=0;w<p;w++){const A=w%3*2/3-1,b=w>2?0:-1,M=[A,b,0,A+2/3,b,0,A+2/3,b+1,0,A,b,0,A+2/3,b+1,0,A,b+1,0];x.set(M,m*v*w),S.set(h,_*v*w);const T=[w,w,w,w,w,w];y.set(T,f*v*w)}const E=new or;E.setAttribute("position",new vi(x,m)),E.setAttribute("uv",new vi(S,_)),E.setAttribute("faceIndex",new vi(y,f)),e.push(E),r>uo&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Tg(n,e,t){const i=new Vr(n,e,t);return i.texture.mapping=bc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function iu(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function eR(n,e,t){const i=new Float32Array(ls),r=new V(0,1,0);return new rr({name:"SphericalGaussianBlur",defines:{n:ls,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:cm(),fragmentShader:`

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
		`,blending:Nr,depthTest:!1,depthWrite:!1})}function wg(){return new rr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:cm(),fragmentShader:`

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
		`,blending:Nr,depthTest:!1,depthWrite:!1})}function Ag(){return new rr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:cm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Nr,depthTest:!1,depthWrite:!1})}function cm(){return`

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
	`}function tR(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===ch||l===fh,c=l===Fo||l===Oo;if(u||c){let d=e.get(a);const h=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return t===null&&(t=new Eg(n)),d=u?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const p=a.image;return u&&p&&p.height>0||c&&p&&r(p)?(t===null&&(t=new Eg(n)),d=u?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function r(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function nR(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&nl("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function iR(n,e,t,i){const r={},s=new WeakMap;function o(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const v in h.attributes)e.remove(h.attributes[v]);h.removeEventListener("dispose",o),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(d,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function l(d){const h=d.attributes;for(const p in h)e.update(h[p],n.ARRAY_BUFFER)}function u(d){const h=[],p=d.index,v=d.attributes.position;let m=0;if(p!==null){const x=p.array;m=p.version;for(let S=0,y=x.length;S<y;S+=3){const E=x[S+0],w=x[S+1],A=x[S+2];h.push(E,w,w,A,A,E)}}else if(v!==void 0){const x=v.array;m=v.version;for(let S=0,y=x.length/3-1;S<y;S+=3){const E=S+0,w=S+1,A=S+2;h.push(E,w,w,A,A,E)}}else return;const _=new(_y(h)?Ey:My)(h,1);_.version=m;const f=s.get(d);f&&e.remove(f),s.set(d,_)}function c(d){const h=s.get(d);if(h){const p=d.index;p!==null&&h.version<p.version&&u(d)}else u(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:c}}function rR(n,e,t){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,p){n.drawElements(i,p,s,h*o),t.update(p,i,1)}function u(h,p,v){v!==0&&(n.drawElementsInstanced(i,p,s,h*o,v),t.update(p,i,v))}function c(h,p,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,h,0,v);let _=0;for(let f=0;f<v;f++)_+=p[f];t.update(_,i,1)}function d(h,p,v,m){if(v===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let f=0;f<h.length;f++)u(h[f]/o,p[f],m[f]);else{_.multiDrawElementsInstancedWEBGL(i,p,0,s,h,0,m,0,v);let f=0;for(let x=0;x<v;x++)f+=p[x]*m[x];t.update(f,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=c,this.renderMultiDrawInstances=d}function sR(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function oR(n,e,t){const i=new WeakMap,r=new wt;function s(o,a,l){const u=o.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=c!==void 0?c.length:0;let h=i.get(a);if(h===void 0||h.count!==d){let T=function(){b.dispose(),i.delete(a),a.removeEventListener("dispose",T)};var p=T;h!==void 0&&h.texture.dispose();const v=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],x=a.morphAttributes.normal||[],S=a.morphAttributes.color||[];let y=0;v===!0&&(y=1),m===!0&&(y=2),_===!0&&(y=3);let E=a.attributes.position.count*y,w=1;E>e.maxTextureSize&&(w=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const A=new Float32Array(E*w*4*d),b=new gy(A,E,w,d);b.type=Ri,b.needsUpdate=!0;const M=y*4;for(let P=0;P<d;P++){const F=f[P],z=x[P],X=S[P],j=E*w*4*P;for(let B=0;B<F.count;B++){const $=B*M;v===!0&&(r.fromBufferAttribute(F,B),A[j+$+0]=r.x,A[j+$+1]=r.y,A[j+$+2]=r.z,A[j+$+3]=0),m===!0&&(r.fromBufferAttribute(z,B),A[j+$+4]=r.x,A[j+$+5]=r.y,A[j+$+6]=r.z,A[j+$+7]=0),_===!0&&(r.fromBufferAttribute(X,B),A[j+$+8]=r.x,A[j+$+9]=r.y,A[j+$+10]=r.z,A[j+$+11]=X.itemSize===4?r.w:1)}}h={count:d,texture:b,size:new ke(E,w)},i.set(a,h),a.addEventListener("dispose",T)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let v=0;for(let _=0;_<u.length;_++)v+=u[_];const m=a.morphTargetsRelative?1:1-v;l.getUniforms().setValue(n,"morphTargetBaseInfluence",m),l.getUniforms().setValue(n,"morphTargetInfluences",u)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:s}}function aR(n,e,t,i){let r=new WeakMap;function s(l){const u=i.render.frame,c=l.geometry,d=e.get(l,c);if(r.get(d)!==u&&(e.update(d),r.set(d,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==u&&(h.update(),r.set(h,u))}return d}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:o}}const Py=new un,Cg=new Cy(1,1),Dy=new gy,Ly=new I1,Iy=new wy,Rg=[],bg=[],Pg=new Float32Array(16),Dg=new Float32Array(9),Lg=new Float32Array(4);function Xo(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Rg[r];if(s===void 0&&(s=new Float32Array(r),Rg[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function kt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function zt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Dc(n,e){let t=bg[e];t===void 0&&(t=new Int32Array(e),bg[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function lR(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function uR(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;n.uniform2fv(this.addr,e),zt(t,e)}}function cR(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(kt(t,e))return;n.uniform3fv(this.addr,e),zt(t,e)}}function fR(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;n.uniform4fv(this.addr,e),zt(t,e)}}function dR(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(kt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),zt(t,e)}else{if(kt(t,i))return;Lg.set(i),n.uniformMatrix2fv(this.addr,!1,Lg),zt(t,i)}}function hR(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(kt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),zt(t,e)}else{if(kt(t,i))return;Dg.set(i),n.uniformMatrix3fv(this.addr,!1,Dg),zt(t,i)}}function pR(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(kt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),zt(t,e)}else{if(kt(t,i))return;Pg.set(i),n.uniformMatrix4fv(this.addr,!1,Pg),zt(t,i)}}function mR(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function _R(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;n.uniform2iv(this.addr,e),zt(t,e)}}function gR(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(kt(t,e))return;n.uniform3iv(this.addr,e),zt(t,e)}}function vR(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;n.uniform4iv(this.addr,e),zt(t,e)}}function xR(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function yR(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;n.uniform2uiv(this.addr,e),zt(t,e)}}function SR(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(kt(t,e))return;n.uniform3uiv(this.addr,e),zt(t,e)}}function MR(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;n.uniform4uiv(this.addr,e),zt(t,e)}}function ER(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Cg.compareFunction=my,s=Cg):s=Py,t.setTexture2D(e||s,r)}function TR(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Ly,r)}function wR(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Iy,r)}function AR(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Dy,r)}function CR(n){switch(n){case 5126:return lR;case 35664:return uR;case 35665:return cR;case 35666:return fR;case 35674:return dR;case 35675:return hR;case 35676:return pR;case 5124:case 35670:return mR;case 35667:case 35671:return _R;case 35668:case 35672:return gR;case 35669:case 35673:return vR;case 5125:return xR;case 36294:return yR;case 36295:return SR;case 36296:return MR;case 35678:case 36198:case 36298:case 36306:case 35682:return ER;case 35679:case 36299:case 36307:return TR;case 35680:case 36300:case 36308:case 36293:return wR;case 36289:case 36303:case 36311:case 36292:return AR}}function RR(n,e){n.uniform1fv(this.addr,e)}function bR(n,e){const t=Xo(e,this.size,2);n.uniform2fv(this.addr,t)}function PR(n,e){const t=Xo(e,this.size,3);n.uniform3fv(this.addr,t)}function DR(n,e){const t=Xo(e,this.size,4);n.uniform4fv(this.addr,t)}function LR(n,e){const t=Xo(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function IR(n,e){const t=Xo(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function NR(n,e){const t=Xo(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function UR(n,e){n.uniform1iv(this.addr,e)}function FR(n,e){n.uniform2iv(this.addr,e)}function OR(n,e){n.uniform3iv(this.addr,e)}function kR(n,e){n.uniform4iv(this.addr,e)}function zR(n,e){n.uniform1uiv(this.addr,e)}function BR(n,e){n.uniform2uiv(this.addr,e)}function VR(n,e){n.uniform3uiv(this.addr,e)}function HR(n,e){n.uniform4uiv(this.addr,e)}function GR(n,e,t){const i=this.cache,r=e.length,s=Dc(t,r);kt(i,s)||(n.uniform1iv(this.addr,s),zt(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Py,s[o])}function WR(n,e,t){const i=this.cache,r=e.length,s=Dc(t,r);kt(i,s)||(n.uniform1iv(this.addr,s),zt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Ly,s[o])}function XR(n,e,t){const i=this.cache,r=e.length,s=Dc(t,r);kt(i,s)||(n.uniform1iv(this.addr,s),zt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Iy,s[o])}function jR(n,e,t){const i=this.cache,r=e.length,s=Dc(t,r);kt(i,s)||(n.uniform1iv(this.addr,s),zt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Dy,s[o])}function YR(n){switch(n){case 5126:return RR;case 35664:return bR;case 35665:return PR;case 35666:return DR;case 35674:return LR;case 35675:return IR;case 35676:return NR;case 5124:case 35670:return UR;case 35667:case 35671:return FR;case 35668:case 35672:return OR;case 35669:case 35673:return kR;case 5125:return zR;case 36294:return BR;case 36295:return VR;case 36296:return HR;case 35678:case 36198:case 36298:case 36306:case 35682:return GR;case 35679:case 36299:case 36307:return WR;case 35680:case 36300:case 36308:case 36293:return XR;case 36289:case 36303:case 36311:case 36292:return jR}}class qR{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=CR(t.type)}}class $R{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=YR(t.type)}}class KR{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const jf=/(\w+)(\])?(\[|\.)?/g;function Ig(n,e){n.seq.push(e),n.map[e.id]=e}function ZR(n,e,t){const i=n.name,r=i.length;for(jf.lastIndex=0;;){const s=jf.exec(i),o=jf.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){Ig(t,u===void 0?new qR(a,n,e):new $R(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new KR(a),Ig(t,d)),t=d}}}class Tu{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);ZR(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Ng(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const QR=37297;let JR=0;function eb(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const Ug=new Ve;function tb(n){Qe._getMatrix(Ug,Qe.workingColorSpace,n);const e=`mat3( ${Ug.elements.map(t=>t.toFixed(4))} )`;switch(Qe.getTransfer(n)){case rc:return[e,"LinearTransferOETF"];case it:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Fg(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+eb(n.getShaderSource(e),a)}else return s}function nb(n,e){const t=tb(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function ib(n,e){let t;switch(e){case o1:t="Linear";break;case a1:t="Reinhard";break;case l1:t="Cineon";break;case u1:t="ACESFilmic";break;case f1:t="AgX";break;case d1:t="Neutral";break;case c1:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ru=new V;function rb(){Qe.getLuminanceCoefficients(ru);const n=ru.x.toFixed(4),e=ru.y.toFixed(4),t=ru.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function sb(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ma).join(`
`)}function ob(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function ab(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function ma(n){return n!==""}function Og(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function kg(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const lb=/^[ \t]*#include +<([\w\d./]+)>/gm;function Gh(n){return n.replace(lb,cb)}const ub=new Map;function cb(n,e){let t=He[e];if(t===void 0){const i=ub.get(e);if(i!==void 0)t=He[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Gh(t)}const fb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function zg(n){return n.replace(fb,db)}function db(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Bg(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function hb(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===ry?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===zT?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===zi&&(e="SHADOWMAP_TYPE_VSM"),e}function pb(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Fo:case Oo:e="ENVMAP_TYPE_CUBE";break;case bc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function mb(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Oo:e="ENVMAP_MODE_REFRACTION";break}return e}function _b(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case sy:e="ENVMAP_BLENDING_MULTIPLY";break;case r1:e="ENVMAP_BLENDING_MIX";break;case s1:e="ENVMAP_BLENDING_ADD";break}return e}function gb(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function vb(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=hb(t),u=pb(t),c=mb(t),d=_b(t),h=gb(t),p=sb(t),v=ob(s),m=r.createProgram();let _,f,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(ma).join(`
`),_.length>0&&(_+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(ma).join(`
`),f.length>0&&(f+=`
`)):(_=[Bg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ma).join(`
`),f=[Bg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ur?"#define TONE_MAPPING":"",t.toneMapping!==Ur?He.tonemapping_pars_fragment:"",t.toneMapping!==Ur?ib("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",He.colorspace_pars_fragment,nb("linearToOutputTexel",t.outputColorSpace),rb(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ma).join(`
`)),o=Gh(o),o=Og(o,t),o=kg(o,t),a=Gh(a),a=Og(a,t),a=kg(a,t),o=zg(o),a=zg(a),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,_=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,f=["#define varying in",t.glslVersion===K_?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===K_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const S=x+_+o,y=x+f+a,E=Ng(r,r.VERTEX_SHADER,S),w=Ng(r,r.FRAGMENT_SHADER,y);r.attachShader(m,E),r.attachShader(m,w),t.index0AttributeName!==void 0?r.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m);function A(P){if(n.debug.checkShaderErrors){const F=r.getProgramInfoLog(m)||"",z=r.getShaderInfoLog(E)||"",X=r.getShaderInfoLog(w)||"",j=F.trim(),B=z.trim(),$=X.trim();let I=!0,q=!0;if(r.getProgramParameter(m,r.LINK_STATUS)===!1)if(I=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,m,E,w);else{const Q=Fg(r,E,"vertex"),ae=Fg(r,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+j+`
`+Q+`
`+ae)}else j!==""?console.warn("THREE.WebGLProgram: Program Info Log:",j):(B===""||$==="")&&(q=!1);q&&(P.diagnostics={runnable:I,programLog:j,vertexShader:{log:B,prefix:_},fragmentShader:{log:$,prefix:f}})}r.deleteShader(E),r.deleteShader(w),b=new Tu(r,m),M=ab(r,m)}let b;this.getUniforms=function(){return b===void 0&&A(this),b};let M;this.getAttributes=function(){return M===void 0&&A(this),M};let T=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=r.getProgramParameter(m,QR)),T},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=JR++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=E,this.fragmentShader=w,this}let xb=0;class yb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Sb(e),t.set(e,i)),i}}class Sb{constructor(e){this.id=xb++,this.code=e,this.usedTimes=0}}function Mb(n,e,t,i,r,s,o){const a=new xy,l=new yb,u=new Set,c=[],d=r.logarithmicDepthBuffer,h=r.vertexTextures;let p=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(M){return u.add(M),M===0?"uv":`uv${M}`}function _(M,T,P,F,z){const X=F.fog,j=z.geometry,B=M.isMeshStandardMaterial?F.environment:null,$=(M.isMeshStandardMaterial?t:e).get(M.envMap||B),I=$&&$.mapping===bc?$.image.height:null,q=v[M.type];M.precision!==null&&(p=r.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));const Q=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,ae=Q!==void 0?Q.length:0;let me=0;j.morphAttributes.position!==void 0&&(me=1),j.morphAttributes.normal!==void 0&&(me=2),j.morphAttributes.color!==void 0&&(me=3);let We,Ne,Ue,K;if(q){const et=Ti[q];We=et.vertexShader,Ne=et.fragmentShader}else We=M.vertexShader,Ne=M.fragmentShader,l.update(M),Ue=l.getVertexShaderID(M),K=l.getFragmentShaderID(M);const ee=n.getRenderTarget(),pe=n.state.buffers.depth.getReversed(),Le=z.isInstancedMesh===!0,we=z.isBatchedMesh===!0,Xe=!!M.map,Bt=!!M.matcap,L=!!$,at=!!M.aoMap,Fe=!!M.lightMap,be=!!M.bumpMap,Se=!!M.normalMap,Ke=!!M.displacementMap,ye=!!M.emissiveMap,ze=!!M.metalnessMap,Ct=!!M.roughnessMap,ht=M.anisotropy>0,R=M.clearcoat>0,g=M.dispersion>0,D=M.iridescence>0,k=M.sheen>0,Y=M.transmission>0,H=ht&&!!M.anisotropyMap,he=R&&!!M.clearcoatMap,oe=R&&!!M.clearcoatNormalMap,ve=R&&!!M.clearcoatRoughnessMap,Me=D&&!!M.iridescenceMap,re=D&&!!M.iridescenceThicknessMap,de=k&&!!M.sheenColorMap,De=k&&!!M.sheenRoughnessMap,Ae=!!M.specularMap,ce=!!M.specularColorMap,Be=!!M.specularIntensityMap,N=Y&&!!M.transmissionMap,se=Y&&!!M.thicknessMap,le=!!M.gradientMap,xe=!!M.alphaMap,ne=M.alphaTest>0,J=!!M.alphaHash,Te=!!M.extensions;let Oe=Ur;M.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(Oe=n.toneMapping);const lt={shaderID:q,shaderType:M.type,shaderName:M.name,vertexShader:We,fragmentShader:Ne,defines:M.defines,customVertexShaderID:Ue,customFragmentShaderID:K,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:we,batchingColor:we&&z._colorsTexture!==null,instancing:Le,instancingColor:Le&&z.instanceColor!==null,instancingMorph:Le&&z.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:ee===null?n.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:ko,alphaToCoverage:!!M.alphaToCoverage,map:Xe,matcap:Bt,envMap:L,envMapMode:L&&$.mapping,envMapCubeUVHeight:I,aoMap:at,lightMap:Fe,bumpMap:be,normalMap:Se,displacementMap:h&&Ke,emissiveMap:ye,normalMapObjectSpace:Se&&M.normalMapType===g1,normalMapTangentSpace:Se&&M.normalMapType===_1,metalnessMap:ze,roughnessMap:Ct,anisotropy:ht,anisotropyMap:H,clearcoat:R,clearcoatMap:he,clearcoatNormalMap:oe,clearcoatRoughnessMap:ve,dispersion:g,iridescence:D,iridescenceMap:Me,iridescenceThicknessMap:re,sheen:k,sheenColorMap:de,sheenRoughnessMap:De,specularMap:Ae,specularColorMap:ce,specularIntensityMap:Be,transmission:Y,transmissionMap:N,thicknessMap:se,gradientMap:le,opaque:M.transparent===!1&&M.blending===yo&&M.alphaToCoverage===!1,alphaMap:xe,alphaTest:ne,alphaHash:J,combine:M.combine,mapUv:Xe&&m(M.map.channel),aoMapUv:at&&m(M.aoMap.channel),lightMapUv:Fe&&m(M.lightMap.channel),bumpMapUv:be&&m(M.bumpMap.channel),normalMapUv:Se&&m(M.normalMap.channel),displacementMapUv:Ke&&m(M.displacementMap.channel),emissiveMapUv:ye&&m(M.emissiveMap.channel),metalnessMapUv:ze&&m(M.metalnessMap.channel),roughnessMapUv:Ct&&m(M.roughnessMap.channel),anisotropyMapUv:H&&m(M.anisotropyMap.channel),clearcoatMapUv:he&&m(M.clearcoatMap.channel),clearcoatNormalMapUv:oe&&m(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ve&&m(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Me&&m(M.iridescenceMap.channel),iridescenceThicknessMapUv:re&&m(M.iridescenceThicknessMap.channel),sheenColorMapUv:de&&m(M.sheenColorMap.channel),sheenRoughnessMapUv:De&&m(M.sheenRoughnessMap.channel),specularMapUv:Ae&&m(M.specularMap.channel),specularColorMapUv:ce&&m(M.specularColorMap.channel),specularIntensityMapUv:Be&&m(M.specularIntensityMap.channel),transmissionMapUv:N&&m(M.transmissionMap.channel),thicknessMapUv:se&&m(M.thicknessMap.channel),alphaMapUv:xe&&m(M.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(Se||ht),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!j.attributes.uv&&(Xe||xe),fog:!!X,useFog:M.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:M.flatShading===!0&&M.wireframe===!1,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:pe,skinning:z.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:ae,morphTextureStride:me,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:Oe,decodeVideoTexture:Xe&&M.map.isVideoTexture===!0&&Qe.getTransfer(M.map.colorSpace)===it,decodeVideoTextureEmissive:ye&&M.emissiveMap.isVideoTexture===!0&&Qe.getTransfer(M.emissiveMap.colorSpace)===it,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Wi,flipSided:M.side===Tn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Te&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Te&&M.extensions.multiDraw===!0||we)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return lt.vertexUv1s=u.has(1),lt.vertexUv2s=u.has(2),lt.vertexUv3s=u.has(3),u.clear(),lt}function f(M){const T=[];if(M.shaderID?T.push(M.shaderID):(T.push(M.customVertexShaderID),T.push(M.customFragmentShaderID)),M.defines!==void 0)for(const P in M.defines)T.push(P),T.push(M.defines[P]);return M.isRawShaderMaterial===!1&&(x(T,M),S(T,M),T.push(n.outputColorSpace)),T.push(M.customProgramCacheKey),T.join()}function x(M,T){M.push(T.precision),M.push(T.outputColorSpace),M.push(T.envMapMode),M.push(T.envMapCubeUVHeight),M.push(T.mapUv),M.push(T.alphaMapUv),M.push(T.lightMapUv),M.push(T.aoMapUv),M.push(T.bumpMapUv),M.push(T.normalMapUv),M.push(T.displacementMapUv),M.push(T.emissiveMapUv),M.push(T.metalnessMapUv),M.push(T.roughnessMapUv),M.push(T.anisotropyMapUv),M.push(T.clearcoatMapUv),M.push(T.clearcoatNormalMapUv),M.push(T.clearcoatRoughnessMapUv),M.push(T.iridescenceMapUv),M.push(T.iridescenceThicknessMapUv),M.push(T.sheenColorMapUv),M.push(T.sheenRoughnessMapUv),M.push(T.specularMapUv),M.push(T.specularColorMapUv),M.push(T.specularIntensityMapUv),M.push(T.transmissionMapUv),M.push(T.thicknessMapUv),M.push(T.combine),M.push(T.fogExp2),M.push(T.sizeAttenuation),M.push(T.morphTargetsCount),M.push(T.morphAttributeCount),M.push(T.numDirLights),M.push(T.numPointLights),M.push(T.numSpotLights),M.push(T.numSpotLightMaps),M.push(T.numHemiLights),M.push(T.numRectAreaLights),M.push(T.numDirLightShadows),M.push(T.numPointLightShadows),M.push(T.numSpotLightShadows),M.push(T.numSpotLightShadowsWithMaps),M.push(T.numLightProbes),M.push(T.shadowMapType),M.push(T.toneMapping),M.push(T.numClippingPlanes),M.push(T.numClipIntersection),M.push(T.depthPacking)}function S(M,T){a.disableAll(),T.supportsVertexTextures&&a.enable(0),T.instancing&&a.enable(1),T.instancingColor&&a.enable(2),T.instancingMorph&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),T.alphaHash&&a.enable(18),T.batching&&a.enable(19),T.dispersion&&a.enable(20),T.batchingColor&&a.enable(21),T.gradientMap&&a.enable(22),M.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),M.push(a.mask)}function y(M){const T=v[M.type];let P;if(T){const F=Ti[T];P=j1.clone(F.uniforms)}else P=M.uniforms;return P}function E(M,T){let P;for(let F=0,z=c.length;F<z;F++){const X=c[F];if(X.cacheKey===T){P=X,++P.usedTimes;break}}return P===void 0&&(P=new vb(n,T,M,s),c.push(P)),P}function w(M){if(--M.usedTimes===0){const T=c.indexOf(M);c[T]=c[c.length-1],c.pop(),M.destroy()}}function A(M){l.remove(M)}function b(){l.dispose()}return{getParameters:_,getProgramCacheKey:f,getUniforms:y,acquireProgram:E,releaseProgram:w,releaseShaderCache:A,programs:c,dispose:b}}function Eb(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,l){n.get(o)[a]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function Tb(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Vg(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Hg(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(d,h,p,v,m,_){let f=n[e];return f===void 0?(f={id:d.id,object:d,geometry:h,material:p,groupOrder:v,renderOrder:d.renderOrder,z:m,group:_},n[e]=f):(f.id=d.id,f.object=d,f.geometry=h,f.material=p,f.groupOrder=v,f.renderOrder=d.renderOrder,f.z=m,f.group=_),e++,f}function a(d,h,p,v,m,_){const f=o(d,h,p,v,m,_);p.transmission>0?i.push(f):p.transparent===!0?r.push(f):t.push(f)}function l(d,h,p,v,m,_){const f=o(d,h,p,v,m,_);p.transmission>0?i.unshift(f):p.transparent===!0?r.unshift(f):t.unshift(f)}function u(d,h){t.length>1&&t.sort(d||Tb),i.length>1&&i.sort(h||Vg),r.length>1&&r.sort(h||Vg)}function c(){for(let d=e,h=n.length;d<h;d++){const p=n[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:c,sort:u}}function wb(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new Hg,n.set(i,[o])):r>=s.length?(o=new Hg,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function Ab(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new V,color:new Je};break;case"SpotLight":t={position:new V,direction:new V,color:new Je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new V,color:new Je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new V,skyColor:new Je,groundColor:new Je};break;case"RectAreaLight":t={color:new Je,position:new V,halfWidth:new V,halfHeight:new V};break}return n[e.id]=t,t}}}function Cb(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Rb=0;function bb(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Pb(n){const e=new Ab,t=Cb(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new V);const r=new V,s=new Ut,o=new Ut;function a(u){let c=0,d=0,h=0;for(let M=0;M<9;M++)i.probe[M].set(0,0,0);let p=0,v=0,m=0,_=0,f=0,x=0,S=0,y=0,E=0,w=0,A=0;u.sort(bb);for(let M=0,T=u.length;M<T;M++){const P=u[M],F=P.color,z=P.intensity,X=P.distance,j=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)c+=F.r*z,d+=F.g*z,h+=F.b*z;else if(P.isLightProbe){for(let B=0;B<9;B++)i.probe[B].addScaledVector(P.sh.coefficients[B],z);A++}else if(P.isDirectionalLight){const B=e.get(P);if(B.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const $=P.shadow,I=t.get(P);I.shadowIntensity=$.intensity,I.shadowBias=$.bias,I.shadowNormalBias=$.normalBias,I.shadowRadius=$.radius,I.shadowMapSize=$.mapSize,i.directionalShadow[p]=I,i.directionalShadowMap[p]=j,i.directionalShadowMatrix[p]=P.shadow.matrix,x++}i.directional[p]=B,p++}else if(P.isSpotLight){const B=e.get(P);B.position.setFromMatrixPosition(P.matrixWorld),B.color.copy(F).multiplyScalar(z),B.distance=X,B.coneCos=Math.cos(P.angle),B.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),B.decay=P.decay,i.spot[m]=B;const $=P.shadow;if(P.map&&(i.spotLightMap[E]=P.map,E++,$.updateMatrices(P),P.castShadow&&w++),i.spotLightMatrix[m]=$.matrix,P.castShadow){const I=t.get(P);I.shadowIntensity=$.intensity,I.shadowBias=$.bias,I.shadowNormalBias=$.normalBias,I.shadowRadius=$.radius,I.shadowMapSize=$.mapSize,i.spotShadow[m]=I,i.spotShadowMap[m]=j,y++}m++}else if(P.isRectAreaLight){const B=e.get(P);B.color.copy(F).multiplyScalar(z),B.halfWidth.set(P.width*.5,0,0),B.halfHeight.set(0,P.height*.5,0),i.rectArea[_]=B,_++}else if(P.isPointLight){const B=e.get(P);if(B.color.copy(P.color).multiplyScalar(P.intensity),B.distance=P.distance,B.decay=P.decay,P.castShadow){const $=P.shadow,I=t.get(P);I.shadowIntensity=$.intensity,I.shadowBias=$.bias,I.shadowNormalBias=$.normalBias,I.shadowRadius=$.radius,I.shadowMapSize=$.mapSize,I.shadowCameraNear=$.camera.near,I.shadowCameraFar=$.camera.far,i.pointShadow[v]=I,i.pointShadowMap[v]=j,i.pointShadowMatrix[v]=P.shadow.matrix,S++}i.point[v]=B,v++}else if(P.isHemisphereLight){const B=e.get(P);B.skyColor.copy(P.color).multiplyScalar(z),B.groundColor.copy(P.groundColor).multiplyScalar(z),i.hemi[f]=B,f++}}_>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ue.LTC_FLOAT_1,i.rectAreaLTC2=ue.LTC_FLOAT_2):(i.rectAreaLTC1=ue.LTC_HALF_1,i.rectAreaLTC2=ue.LTC_HALF_2)),i.ambient[0]=c,i.ambient[1]=d,i.ambient[2]=h;const b=i.hash;(b.directionalLength!==p||b.pointLength!==v||b.spotLength!==m||b.rectAreaLength!==_||b.hemiLength!==f||b.numDirectionalShadows!==x||b.numPointShadows!==S||b.numSpotShadows!==y||b.numSpotMaps!==E||b.numLightProbes!==A)&&(i.directional.length=p,i.spot.length=m,i.rectArea.length=_,i.point.length=v,i.hemi.length=f,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=y+E-w,i.spotLightMap.length=E,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=A,b.directionalLength=p,b.pointLength=v,b.spotLength=m,b.rectAreaLength=_,b.hemiLength=f,b.numDirectionalShadows=x,b.numPointShadows=S,b.numSpotShadows=y,b.numSpotMaps=E,b.numLightProbes=A,i.version=Rb++)}function l(u,c){let d=0,h=0,p=0,v=0,m=0;const _=c.matrixWorldInverse;for(let f=0,x=u.length;f<x;f++){const S=u[f];if(S.isDirectionalLight){const y=i.directional[d];y.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(_),d++}else if(S.isSpotLight){const y=i.spot[p];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(_),y.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(_),p++}else if(S.isRectAreaLight){const y=i.rectArea[v];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(_),o.identity(),s.copy(S.matrixWorld),s.premultiply(_),o.extractRotation(s),y.halfWidth.set(S.width*.5,0,0),y.halfHeight.set(0,S.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),v++}else if(S.isPointLight){const y=i.point[h];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(_),h++}else if(S.isHemisphereLight){const y=i.hemi[m];y.direction.setFromMatrixPosition(S.matrixWorld),y.direction.transformDirection(_),m++}}}return{setup:a,setupView:l,state:i}}function Gg(n){const e=new Pb(n),t=[],i=[];function r(c){u.camera=c,t.length=0,i.length=0}function s(c){t.push(c)}function o(c){i.push(c)}function a(){e.setup(t)}function l(c){e.setupView(t,c)}const u={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function Db(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Gg(n),e.set(r,[a])):s>=o.length?(a=new Gg(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const Lb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ib=`uniform sampler2D shadow_pass;
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
}`;function Nb(n,e,t){let i=new Ay;const r=new ke,s=new ke,o=new wt,a=new sw({depthPacking:m1}),l=new ow,u={},c=t.maxTextureSize,d={[Br]:Tn,[Tn]:Br,[Wi]:Wi},h=new rr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ke},radius:{value:4}},vertexShader:Lb,fragmentShader:Ib}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const v=new or;v.setAttribute("position",new vi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new ni(v,h),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ry;let f=this.type;this.render=function(w,A,b){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||w.length===0)return;const M=n.getRenderTarget(),T=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),F=n.state;F.setBlending(Nr),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const z=f!==zi&&this.type===zi,X=f===zi&&this.type!==zi;for(let j=0,B=w.length;j<B;j++){const $=w[j],I=$.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;r.copy(I.mapSize);const q=I.getFrameExtents();if(r.multiply(q),s.copy(I.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/q.x),r.x=s.x*q.x,I.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/q.y),r.y=s.y*q.y,I.mapSize.y=s.y)),I.map===null||z===!0||X===!0){const ae=this.type!==zi?{minFilter:kn,magFilter:kn}:{};I.map!==null&&I.map.dispose(),I.map=new Vr(r.x,r.y,ae),I.map.texture.name=$.name+".shadowMap",I.camera.updateProjectionMatrix()}n.setRenderTarget(I.map),n.clear();const Q=I.getViewportCount();for(let ae=0;ae<Q;ae++){const me=I.getViewport(ae);o.set(s.x*me.x,s.y*me.y,s.x*me.z,s.y*me.w),F.viewport(o),I.updateMatrices($,ae),i=I.getFrustum(),y(A,b,I.camera,$,this.type)}I.isPointLightShadow!==!0&&this.type===zi&&x(I,b),I.needsUpdate=!1}f=this.type,_.needsUpdate=!1,n.setRenderTarget(M,T,P)};function x(w,A){const b=e.update(m);h.defines.VSM_SAMPLES!==w.blurSamples&&(h.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Vr(r.x,r.y)),h.uniforms.shadow_pass.value=w.map.texture,h.uniforms.resolution.value=w.mapSize,h.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(A,null,b,h,m,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(A,null,b,p,m,null)}function S(w,A,b,M){let T=null;const P=b.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(P!==void 0)T=P;else if(T=b.isPointLight===!0?l:a,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const F=T.uuid,z=A.uuid;let X=u[F];X===void 0&&(X={},u[F]=X);let j=X[z];j===void 0&&(j=T.clone(),X[z]=j,A.addEventListener("dispose",E)),T=j}if(T.visible=A.visible,T.wireframe=A.wireframe,M===zi?T.side=A.shadowSide!==null?A.shadowSide:A.side:T.side=A.shadowSide!==null?A.shadowSide:d[A.side],T.alphaMap=A.alphaMap,T.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,T.map=A.map,T.clipShadows=A.clipShadows,T.clippingPlanes=A.clippingPlanes,T.clipIntersection=A.clipIntersection,T.displacementMap=A.displacementMap,T.displacementScale=A.displacementScale,T.displacementBias=A.displacementBias,T.wireframeLinewidth=A.wireframeLinewidth,T.linewidth=A.linewidth,b.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const F=n.properties.get(T);F.light=b}return T}function y(w,A,b,M,T){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&T===zi)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,w.matrixWorld);const z=e.update(w),X=w.material;if(Array.isArray(X)){const j=z.groups;for(let B=0,$=j.length;B<$;B++){const I=j[B],q=X[I.materialIndex];if(q&&q.visible){const Q=S(w,q,M,T);w.onBeforeShadow(n,w,A,b,z,Q,I),n.renderBufferDirect(b,null,z,Q,w,I),w.onAfterShadow(n,w,A,b,z,Q,I)}}}else if(X.visible){const j=S(w,X,M,T);w.onBeforeShadow(n,w,A,b,z,j,null),n.renderBufferDirect(b,null,z,j,w,null),w.onAfterShadow(n,w,A,b,z,j,null)}}const F=w.children;for(let z=0,X=F.length;z<X;z++)y(F[z],A,b,M,T)}function E(w){w.target.removeEventListener("dispose",E);for(const b in u){const M=u[b],T=w.target.uuid;T in M&&(M[T].dispose(),delete M[T])}}}const Ub={[ih]:rh,[sh]:lh,[oh]:uh,[Uo]:ah,[rh]:ih,[lh]:sh,[uh]:oh,[ah]:Uo};function Fb(n,e){function t(){let N=!1;const se=new wt;let le=null;const xe=new wt(0,0,0,0);return{setMask:function(ne){le!==ne&&!N&&(n.colorMask(ne,ne,ne,ne),le=ne)},setLocked:function(ne){N=ne},setClear:function(ne,J,Te,Oe,lt){lt===!0&&(ne*=Oe,J*=Oe,Te*=Oe),se.set(ne,J,Te,Oe),xe.equals(se)===!1&&(n.clearColor(ne,J,Te,Oe),xe.copy(se))},reset:function(){N=!1,le=null,xe.set(-1,0,0,0)}}}function i(){let N=!1,se=!1,le=null,xe=null,ne=null;return{setReversed:function(J){if(se!==J){const Te=e.get("EXT_clip_control");J?Te.clipControlEXT(Te.LOWER_LEFT_EXT,Te.ZERO_TO_ONE_EXT):Te.clipControlEXT(Te.LOWER_LEFT_EXT,Te.NEGATIVE_ONE_TO_ONE_EXT),se=J;const Oe=ne;ne=null,this.setClear(Oe)}},getReversed:function(){return se},setTest:function(J){J?ee(n.DEPTH_TEST):pe(n.DEPTH_TEST)},setMask:function(J){le!==J&&!N&&(n.depthMask(J),le=J)},setFunc:function(J){if(se&&(J=Ub[J]),xe!==J){switch(J){case ih:n.depthFunc(n.NEVER);break;case rh:n.depthFunc(n.ALWAYS);break;case sh:n.depthFunc(n.LESS);break;case Uo:n.depthFunc(n.LEQUAL);break;case oh:n.depthFunc(n.EQUAL);break;case ah:n.depthFunc(n.GEQUAL);break;case lh:n.depthFunc(n.GREATER);break;case uh:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}xe=J}},setLocked:function(J){N=J},setClear:function(J){ne!==J&&(se&&(J=1-J),n.clearDepth(J),ne=J)},reset:function(){N=!1,le=null,xe=null,ne=null,se=!1}}}function r(){let N=!1,se=null,le=null,xe=null,ne=null,J=null,Te=null,Oe=null,lt=null;return{setTest:function(et){N||(et?ee(n.STENCIL_TEST):pe(n.STENCIL_TEST))},setMask:function(et){se!==et&&!N&&(n.stencilMask(et),se=et)},setFunc:function(et,Ii,yi){(le!==et||xe!==Ii||ne!==yi)&&(n.stencilFunc(et,Ii,yi),le=et,xe=Ii,ne=yi)},setOp:function(et,Ii,yi){(J!==et||Te!==Ii||Oe!==yi)&&(n.stencilOp(et,Ii,yi),J=et,Te=Ii,Oe=yi)},setLocked:function(et){N=et},setClear:function(et){lt!==et&&(n.clearStencil(et),lt=et)},reset:function(){N=!1,se=null,le=null,xe=null,ne=null,J=null,Te=null,Oe=null,lt=null}}}const s=new t,o=new i,a=new r,l=new WeakMap,u=new WeakMap;let c={},d={},h=new WeakMap,p=[],v=null,m=!1,_=null,f=null,x=null,S=null,y=null,E=null,w=null,A=new Je(0,0,0),b=0,M=!1,T=null,P=null,F=null,z=null,X=null;const j=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,$=0;const I=n.getParameter(n.VERSION);I.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(I)[1]),B=$>=1):I.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(I)[1]),B=$>=2);let q=null,Q={};const ae=n.getParameter(n.SCISSOR_BOX),me=n.getParameter(n.VIEWPORT),We=new wt().fromArray(ae),Ne=new wt().fromArray(me);function Ue(N,se,le,xe){const ne=new Uint8Array(4),J=n.createTexture();n.bindTexture(N,J),n.texParameteri(N,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(N,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Te=0;Te<le;Te++)N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY?n.texImage3D(se,0,n.RGBA,1,1,xe,0,n.RGBA,n.UNSIGNED_BYTE,ne):n.texImage2D(se+Te,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ne);return J}const K={};K[n.TEXTURE_2D]=Ue(n.TEXTURE_2D,n.TEXTURE_2D,1),K[n.TEXTURE_CUBE_MAP]=Ue(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[n.TEXTURE_2D_ARRAY]=Ue(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),K[n.TEXTURE_3D]=Ue(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ee(n.DEPTH_TEST),o.setFunc(Uo),be(!1),Se(X_),ee(n.CULL_FACE),at(Nr);function ee(N){c[N]!==!0&&(n.enable(N),c[N]=!0)}function pe(N){c[N]!==!1&&(n.disable(N),c[N]=!1)}function Le(N,se){return d[N]!==se?(n.bindFramebuffer(N,se),d[N]=se,N===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=se),N===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=se),!0):!1}function we(N,se){let le=p,xe=!1;if(N){le=h.get(se),le===void 0&&(le=[],h.set(se,le));const ne=N.textures;if(le.length!==ne.length||le[0]!==n.COLOR_ATTACHMENT0){for(let J=0,Te=ne.length;J<Te;J++)le[J]=n.COLOR_ATTACHMENT0+J;le.length=ne.length,xe=!0}}else le[0]!==n.BACK&&(le[0]=n.BACK,xe=!0);xe&&n.drawBuffers(le)}function Xe(N){return v!==N?(n.useProgram(N),v=N,!0):!1}const Bt={[as]:n.FUNC_ADD,[VT]:n.FUNC_SUBTRACT,[HT]:n.FUNC_REVERSE_SUBTRACT};Bt[GT]=n.MIN,Bt[WT]=n.MAX;const L={[XT]:n.ZERO,[jT]:n.ONE,[YT]:n.SRC_COLOR,[th]:n.SRC_ALPHA,[JT]:n.SRC_ALPHA_SATURATE,[ZT]:n.DST_COLOR,[$T]:n.DST_ALPHA,[qT]:n.ONE_MINUS_SRC_COLOR,[nh]:n.ONE_MINUS_SRC_ALPHA,[QT]:n.ONE_MINUS_DST_COLOR,[KT]:n.ONE_MINUS_DST_ALPHA,[e1]:n.CONSTANT_COLOR,[t1]:n.ONE_MINUS_CONSTANT_COLOR,[n1]:n.CONSTANT_ALPHA,[i1]:n.ONE_MINUS_CONSTANT_ALPHA};function at(N,se,le,xe,ne,J,Te,Oe,lt,et){if(N===Nr){m===!0&&(pe(n.BLEND),m=!1);return}if(m===!1&&(ee(n.BLEND),m=!0),N!==BT){if(N!==_||et!==M){if((f!==as||y!==as)&&(n.blendEquation(n.FUNC_ADD),f=as,y=as),et)switch(N){case yo:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case eh:n.blendFunc(n.ONE,n.ONE);break;case j_:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Y_:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case yo:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case eh:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case j_:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Y_:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}x=null,S=null,E=null,w=null,A.set(0,0,0),b=0,_=N,M=et}return}ne=ne||se,J=J||le,Te=Te||xe,(se!==f||ne!==y)&&(n.blendEquationSeparate(Bt[se],Bt[ne]),f=se,y=ne),(le!==x||xe!==S||J!==E||Te!==w)&&(n.blendFuncSeparate(L[le],L[xe],L[J],L[Te]),x=le,S=xe,E=J,w=Te),(Oe.equals(A)===!1||lt!==b)&&(n.blendColor(Oe.r,Oe.g,Oe.b,lt),A.copy(Oe),b=lt),_=N,M=!1}function Fe(N,se){N.side===Wi?pe(n.CULL_FACE):ee(n.CULL_FACE);let le=N.side===Tn;se&&(le=!le),be(le),N.blending===yo&&N.transparent===!1?at(Nr):at(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),s.setMask(N.colorWrite);const xe=N.stencilWrite;a.setTest(xe),xe&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),ye(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?ee(n.SAMPLE_ALPHA_TO_COVERAGE):pe(n.SAMPLE_ALPHA_TO_COVERAGE)}function be(N){T!==N&&(N?n.frontFace(n.CW):n.frontFace(n.CCW),T=N)}function Se(N){N!==OT?(ee(n.CULL_FACE),N!==P&&(N===X_?n.cullFace(n.BACK):N===kT?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):pe(n.CULL_FACE),P=N}function Ke(N){N!==F&&(B&&n.lineWidth(N),F=N)}function ye(N,se,le){N?(ee(n.POLYGON_OFFSET_FILL),(z!==se||X!==le)&&(n.polygonOffset(se,le),z=se,X=le)):pe(n.POLYGON_OFFSET_FILL)}function ze(N){N?ee(n.SCISSOR_TEST):pe(n.SCISSOR_TEST)}function Ct(N){N===void 0&&(N=n.TEXTURE0+j-1),q!==N&&(n.activeTexture(N),q=N)}function ht(N,se,le){le===void 0&&(q===null?le=n.TEXTURE0+j-1:le=q);let xe=Q[le];xe===void 0&&(xe={type:void 0,texture:void 0},Q[le]=xe),(xe.type!==N||xe.texture!==se)&&(q!==le&&(n.activeTexture(le),q=le),n.bindTexture(N,se||K[N]),xe.type=N,xe.texture=se)}function R(){const N=Q[q];N!==void 0&&N.type!==void 0&&(n.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function g(){try{n.compressedTexImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function D(){try{n.compressedTexImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function k(){try{n.texSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Y(){try{n.texSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function H(){try{n.compressedTexSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function he(){try{n.compressedTexSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function oe(){try{n.texStorage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ve(){try{n.texStorage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Me(){try{n.texImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function re(){try{n.texImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function de(N){We.equals(N)===!1&&(n.scissor(N.x,N.y,N.z,N.w),We.copy(N))}function De(N){Ne.equals(N)===!1&&(n.viewport(N.x,N.y,N.z,N.w),Ne.copy(N))}function Ae(N,se){let le=u.get(se);le===void 0&&(le=new WeakMap,u.set(se,le));let xe=le.get(N);xe===void 0&&(xe=n.getUniformBlockIndex(se,N.name),le.set(N,xe))}function ce(N,se){const xe=u.get(se).get(N);l.get(se)!==xe&&(n.uniformBlockBinding(se,xe,N.__bindingPointIndex),l.set(se,xe))}function Be(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},q=null,Q={},d={},h=new WeakMap,p=[],v=null,m=!1,_=null,f=null,x=null,S=null,y=null,E=null,w=null,A=new Je(0,0,0),b=0,M=!1,T=null,P=null,F=null,z=null,X=null,We.set(0,0,n.canvas.width,n.canvas.height),Ne.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ee,disable:pe,bindFramebuffer:Le,drawBuffers:we,useProgram:Xe,setBlending:at,setMaterial:Fe,setFlipSided:be,setCullFace:Se,setLineWidth:Ke,setPolygonOffset:ye,setScissorTest:ze,activeTexture:Ct,bindTexture:ht,unbindTexture:R,compressedTexImage2D:g,compressedTexImage3D:D,texImage2D:Me,texImage3D:re,updateUBOMapping:Ae,uniformBlockBinding:ce,texStorage2D:oe,texStorage3D:ve,texSubImage2D:k,texSubImage3D:Y,compressedTexSubImage2D:H,compressedTexSubImage3D:he,scissor:de,viewport:De,reset:Be}}function Ob(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new ke,c=new WeakMap;let d;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(R,g){return p?new OffscreenCanvas(R,g):oc("canvas")}function m(R,g,D){let k=1;const Y=ht(R);if((Y.width>D||Y.height>D)&&(k=D/Math.max(Y.width,Y.height)),k<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const H=Math.floor(k*Y.width),he=Math.floor(k*Y.height);d===void 0&&(d=v(H,he));const oe=g?v(H,he):d;return oe.width=H,oe.height=he,oe.getContext("2d").drawImage(R,0,0,H,he),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Y.width+"x"+Y.height+") to ("+H+"x"+he+")."),oe}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Y.width+"x"+Y.height+")."),R;return R}function _(R){return R.generateMipmaps}function f(R){n.generateMipmap(R)}function x(R){return R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?n.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function S(R,g,D,k,Y=!1){if(R!==null){if(n[R]!==void 0)return n[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let H=g;if(g===n.RED&&(D===n.FLOAT&&(H=n.R32F),D===n.HALF_FLOAT&&(H=n.R16F),D===n.UNSIGNED_BYTE&&(H=n.R8)),g===n.RED_INTEGER&&(D===n.UNSIGNED_BYTE&&(H=n.R8UI),D===n.UNSIGNED_SHORT&&(H=n.R16UI),D===n.UNSIGNED_INT&&(H=n.R32UI),D===n.BYTE&&(H=n.R8I),D===n.SHORT&&(H=n.R16I),D===n.INT&&(H=n.R32I)),g===n.RG&&(D===n.FLOAT&&(H=n.RG32F),D===n.HALF_FLOAT&&(H=n.RG16F),D===n.UNSIGNED_BYTE&&(H=n.RG8)),g===n.RG_INTEGER&&(D===n.UNSIGNED_BYTE&&(H=n.RG8UI),D===n.UNSIGNED_SHORT&&(H=n.RG16UI),D===n.UNSIGNED_INT&&(H=n.RG32UI),D===n.BYTE&&(H=n.RG8I),D===n.SHORT&&(H=n.RG16I),D===n.INT&&(H=n.RG32I)),g===n.RGB_INTEGER&&(D===n.UNSIGNED_BYTE&&(H=n.RGB8UI),D===n.UNSIGNED_SHORT&&(H=n.RGB16UI),D===n.UNSIGNED_INT&&(H=n.RGB32UI),D===n.BYTE&&(H=n.RGB8I),D===n.SHORT&&(H=n.RGB16I),D===n.INT&&(H=n.RGB32I)),g===n.RGBA_INTEGER&&(D===n.UNSIGNED_BYTE&&(H=n.RGBA8UI),D===n.UNSIGNED_SHORT&&(H=n.RGBA16UI),D===n.UNSIGNED_INT&&(H=n.RGBA32UI),D===n.BYTE&&(H=n.RGBA8I),D===n.SHORT&&(H=n.RGBA16I),D===n.INT&&(H=n.RGBA32I)),g===n.RGB&&(D===n.UNSIGNED_INT_5_9_9_9_REV&&(H=n.RGB9_E5),D===n.UNSIGNED_INT_10F_11F_11F_REV&&(H=n.R11F_G11F_B10F)),g===n.RGBA){const he=Y?rc:Qe.getTransfer(k);D===n.FLOAT&&(H=n.RGBA32F),D===n.HALF_FLOAT&&(H=n.RGBA16F),D===n.UNSIGNED_BYTE&&(H=he===it?n.SRGB8_ALPHA8:n.RGBA8),D===n.UNSIGNED_SHORT_4_4_4_4&&(H=n.RGBA4),D===n.UNSIGNED_SHORT_5_5_5_1&&(H=n.RGB5_A1)}return(H===n.R16F||H===n.R32F||H===n.RG16F||H===n.RG32F||H===n.RGBA16F||H===n.RGBA32F)&&e.get("EXT_color_buffer_float"),H}function y(R,g){let D;return R?g===null||g===Rs||g===Ja?D=n.DEPTH24_STENCIL8:g===Ri?D=n.DEPTH32F_STENCIL8:g===Qa&&(D=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===Rs||g===Ja?D=n.DEPTH_COMPONENT24:g===Ri?D=n.DEPTH_COMPONENT32F:g===Qa&&(D=n.DEPTH_COMPONENT16),D}function E(R,g){return _(R)===!0||R.isFramebufferTexture&&R.minFilter!==kn&&R.minFilter!==_n?Math.log2(Math.max(g.width,g.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?g.mipmaps.length:1}function w(R){const g=R.target;g.removeEventListener("dispose",w),b(g),g.isVideoTexture&&c.delete(g)}function A(R){const g=R.target;g.removeEventListener("dispose",A),T(g)}function b(R){const g=i.get(R);if(g.__webglInit===void 0)return;const D=R.source,k=h.get(D);if(k){const Y=k[g.__cacheKey];Y.usedTimes--,Y.usedTimes===0&&M(R),Object.keys(k).length===0&&h.delete(D)}i.remove(R)}function M(R){const g=i.get(R);n.deleteTexture(g.__webglTexture);const D=R.source,k=h.get(D);delete k[g.__cacheKey],o.memory.textures--}function T(R){const g=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let k=0;k<6;k++){if(Array.isArray(g.__webglFramebuffer[k]))for(let Y=0;Y<g.__webglFramebuffer[k].length;Y++)n.deleteFramebuffer(g.__webglFramebuffer[k][Y]);else n.deleteFramebuffer(g.__webglFramebuffer[k]);g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer[k])}else{if(Array.isArray(g.__webglFramebuffer))for(let k=0;k<g.__webglFramebuffer.length;k++)n.deleteFramebuffer(g.__webglFramebuffer[k]);else n.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&n.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let k=0;k<g.__webglColorRenderbuffer.length;k++)g.__webglColorRenderbuffer[k]&&n.deleteRenderbuffer(g.__webglColorRenderbuffer[k]);g.__webglDepthRenderbuffer&&n.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const D=R.textures;for(let k=0,Y=D.length;k<Y;k++){const H=i.get(D[k]);H.__webglTexture&&(n.deleteTexture(H.__webglTexture),o.memory.textures--),i.remove(D[k])}i.remove(R)}let P=0;function F(){P=0}function z(){const R=P;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),P+=1,R}function X(R){const g=[];return g.push(R.wrapS),g.push(R.wrapT),g.push(R.wrapR||0),g.push(R.magFilter),g.push(R.minFilter),g.push(R.anisotropy),g.push(R.internalFormat),g.push(R.format),g.push(R.type),g.push(R.generateMipmaps),g.push(R.premultiplyAlpha),g.push(R.flipY),g.push(R.unpackAlignment),g.push(R.colorSpace),g.join()}function j(R,g){const D=i.get(R);if(R.isVideoTexture&&ze(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&D.__version!==R.version){const k=R.image;if(k===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(k.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(D,R,g);return}}else R.isExternalTexture&&(D.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,D.__webglTexture,n.TEXTURE0+g)}function B(R,g){const D=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&D.__version!==R.version){K(D,R,g);return}t.bindTexture(n.TEXTURE_2D_ARRAY,D.__webglTexture,n.TEXTURE0+g)}function $(R,g){const D=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&D.__version!==R.version){K(D,R,g);return}t.bindTexture(n.TEXTURE_3D,D.__webglTexture,n.TEXTURE0+g)}function I(R,g){const D=i.get(R);if(R.version>0&&D.__version!==R.version){ee(D,R,g);return}t.bindTexture(n.TEXTURE_CUBE_MAP,D.__webglTexture,n.TEXTURE0+g)}const q={[dh]:n.REPEAT,[mi]:n.CLAMP_TO_EDGE,[hh]:n.MIRRORED_REPEAT},Q={[kn]:n.NEAREST,[h1]:n.NEAREST_MIPMAP_NEAREST,[Nl]:n.NEAREST_MIPMAP_LINEAR,[_n]:n.LINEAR,[mf]:n.LINEAR_MIPMAP_NEAREST,[hs]:n.LINEAR_MIPMAP_LINEAR},ae={[v1]:n.NEVER,[T1]:n.ALWAYS,[x1]:n.LESS,[my]:n.LEQUAL,[y1]:n.EQUAL,[E1]:n.GEQUAL,[S1]:n.GREATER,[M1]:n.NOTEQUAL};function me(R,g){if(g.type===Ri&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===_n||g.magFilter===mf||g.magFilter===Nl||g.magFilter===hs||g.minFilter===_n||g.minFilter===mf||g.minFilter===Nl||g.minFilter===hs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(R,n.TEXTURE_WRAP_S,q[g.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,q[g.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,q[g.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,Q[g.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,Q[g.minFilter]),g.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,ae[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===kn||g.minFilter!==Nl&&g.minFilter!==hs||g.type===Ri&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||i.get(g).__currentAnisotropy){const D=e.get("EXT_texture_filter_anisotropic");n.texParameterf(R,D.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,r.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy}}}function We(R,g){let D=!1;R.__webglInit===void 0&&(R.__webglInit=!0,g.addEventListener("dispose",w));const k=g.source;let Y=h.get(k);Y===void 0&&(Y={},h.set(k,Y));const H=X(g);if(H!==R.__cacheKey){Y[H]===void 0&&(Y[H]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,D=!0),Y[H].usedTimes++;const he=Y[R.__cacheKey];he!==void 0&&(Y[R.__cacheKey].usedTimes--,he.usedTimes===0&&M(g)),R.__cacheKey=H,R.__webglTexture=Y[H].texture}return D}function Ne(R,g,D){return Math.floor(Math.floor(R/D)/g)}function Ue(R,g,D,k){const H=R.updateRanges;if(H.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,g.width,g.height,D,k,g.data);else{H.sort((re,de)=>re.start-de.start);let he=0;for(let re=1;re<H.length;re++){const de=H[he],De=H[re],Ae=de.start+de.count,ce=Ne(De.start,g.width,4),Be=Ne(de.start,g.width,4);De.start<=Ae+1&&ce===Be&&Ne(De.start+De.count-1,g.width,4)===ce?de.count=Math.max(de.count,De.start+De.count-de.start):(++he,H[he]=De)}H.length=he+1;const oe=n.getParameter(n.UNPACK_ROW_LENGTH),ve=n.getParameter(n.UNPACK_SKIP_PIXELS),Me=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,g.width);for(let re=0,de=H.length;re<de;re++){const De=H[re],Ae=Math.floor(De.start/4),ce=Math.ceil(De.count/4),Be=Ae%g.width,N=Math.floor(Ae/g.width),se=ce,le=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Be),n.pixelStorei(n.UNPACK_SKIP_ROWS,N),t.texSubImage2D(n.TEXTURE_2D,0,Be,N,se,le,D,k,g.data)}R.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,oe),n.pixelStorei(n.UNPACK_SKIP_PIXELS,ve),n.pixelStorei(n.UNPACK_SKIP_ROWS,Me)}}function K(R,g,D){let k=n.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(k=n.TEXTURE_2D_ARRAY),g.isData3DTexture&&(k=n.TEXTURE_3D);const Y=We(R,g),H=g.source;t.bindTexture(k,R.__webglTexture,n.TEXTURE0+D);const he=i.get(H);if(H.version!==he.__version||Y===!0){t.activeTexture(n.TEXTURE0+D);const oe=Qe.getPrimaries(Qe.workingColorSpace),ve=g.colorSpace===vr?null:Qe.getPrimaries(g.colorSpace),Me=g.colorSpace===vr||oe===ve?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);let re=m(g.image,!1,r.maxTextureSize);re=Ct(g,re);const de=s.convert(g.format,g.colorSpace),De=s.convert(g.type);let Ae=S(g.internalFormat,de,De,g.colorSpace,g.isVideoTexture);me(k,g);let ce;const Be=g.mipmaps,N=g.isVideoTexture!==!0,se=he.__version===void 0||Y===!0,le=H.dataReady,xe=E(g,re);if(g.isDepthTexture)Ae=y(g.format===tl,g.type),se&&(N?t.texStorage2D(n.TEXTURE_2D,1,Ae,re.width,re.height):t.texImage2D(n.TEXTURE_2D,0,Ae,re.width,re.height,0,de,De,null));else if(g.isDataTexture)if(Be.length>0){N&&se&&t.texStorage2D(n.TEXTURE_2D,xe,Ae,Be[0].width,Be[0].height);for(let ne=0,J=Be.length;ne<J;ne++)ce=Be[ne],N?le&&t.texSubImage2D(n.TEXTURE_2D,ne,0,0,ce.width,ce.height,de,De,ce.data):t.texImage2D(n.TEXTURE_2D,ne,Ae,ce.width,ce.height,0,de,De,ce.data);g.generateMipmaps=!1}else N?(se&&t.texStorage2D(n.TEXTURE_2D,xe,Ae,re.width,re.height),le&&Ue(g,re,de,De)):t.texImage2D(n.TEXTURE_2D,0,Ae,re.width,re.height,0,de,De,re.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){N&&se&&t.texStorage3D(n.TEXTURE_2D_ARRAY,xe,Ae,Be[0].width,Be[0].height,re.depth);for(let ne=0,J=Be.length;ne<J;ne++)if(ce=Be[ne],g.format!==ti)if(de!==null)if(N){if(le)if(g.layerUpdates.size>0){const Te=xg(ce.width,ce.height,g.format,g.type);for(const Oe of g.layerUpdates){const lt=ce.data.subarray(Oe*Te/ce.data.BYTES_PER_ELEMENT,(Oe+1)*Te/ce.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ne,0,0,Oe,ce.width,ce.height,1,de,lt)}g.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ne,0,0,0,ce.width,ce.height,re.depth,de,ce.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ne,Ae,ce.width,ce.height,re.depth,0,ce.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else N?le&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ne,0,0,0,ce.width,ce.height,re.depth,de,De,ce.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ne,Ae,ce.width,ce.height,re.depth,0,de,De,ce.data)}else{N&&se&&t.texStorage2D(n.TEXTURE_2D,xe,Ae,Be[0].width,Be[0].height);for(let ne=0,J=Be.length;ne<J;ne++)ce=Be[ne],g.format!==ti?de!==null?N?le&&t.compressedTexSubImage2D(n.TEXTURE_2D,ne,0,0,ce.width,ce.height,de,ce.data):t.compressedTexImage2D(n.TEXTURE_2D,ne,Ae,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):N?le&&t.texSubImage2D(n.TEXTURE_2D,ne,0,0,ce.width,ce.height,de,De,ce.data):t.texImage2D(n.TEXTURE_2D,ne,Ae,ce.width,ce.height,0,de,De,ce.data)}else if(g.isDataArrayTexture)if(N){if(se&&t.texStorage3D(n.TEXTURE_2D_ARRAY,xe,Ae,re.width,re.height,re.depth),le)if(g.layerUpdates.size>0){const ne=xg(re.width,re.height,g.format,g.type);for(const J of g.layerUpdates){const Te=re.data.subarray(J*ne/re.data.BYTES_PER_ELEMENT,(J+1)*ne/re.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,J,re.width,re.height,1,de,De,Te)}g.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,de,De,re.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ae,re.width,re.height,re.depth,0,de,De,re.data);else if(g.isData3DTexture)N?(se&&t.texStorage3D(n.TEXTURE_3D,xe,Ae,re.width,re.height,re.depth),le&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,de,De,re.data)):t.texImage3D(n.TEXTURE_3D,0,Ae,re.width,re.height,re.depth,0,de,De,re.data);else if(g.isFramebufferTexture){if(se)if(N)t.texStorage2D(n.TEXTURE_2D,xe,Ae,re.width,re.height);else{let ne=re.width,J=re.height;for(let Te=0;Te<xe;Te++)t.texImage2D(n.TEXTURE_2D,Te,Ae,ne,J,0,de,De,null),ne>>=1,J>>=1}}else if(Be.length>0){if(N&&se){const ne=ht(Be[0]);t.texStorage2D(n.TEXTURE_2D,xe,Ae,ne.width,ne.height)}for(let ne=0,J=Be.length;ne<J;ne++)ce=Be[ne],N?le&&t.texSubImage2D(n.TEXTURE_2D,ne,0,0,de,De,ce):t.texImage2D(n.TEXTURE_2D,ne,Ae,de,De,ce);g.generateMipmaps=!1}else if(N){if(se){const ne=ht(re);t.texStorage2D(n.TEXTURE_2D,xe,Ae,ne.width,ne.height)}le&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,de,De,re)}else t.texImage2D(n.TEXTURE_2D,0,Ae,de,De,re);_(g)&&f(k),he.__version=H.version,g.onUpdate&&g.onUpdate(g)}R.__version=g.version}function ee(R,g,D){if(g.image.length!==6)return;const k=We(R,g),Y=g.source;t.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+D);const H=i.get(Y);if(Y.version!==H.__version||k===!0){t.activeTexture(n.TEXTURE0+D);const he=Qe.getPrimaries(Qe.workingColorSpace),oe=g.colorSpace===vr?null:Qe.getPrimaries(g.colorSpace),ve=g.colorSpace===vr||he===oe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);const Me=g.isCompressedTexture||g.image[0].isCompressedTexture,re=g.image[0]&&g.image[0].isDataTexture,de=[];for(let J=0;J<6;J++)!Me&&!re?de[J]=m(g.image[J],!0,r.maxCubemapSize):de[J]=re?g.image[J].image:g.image[J],de[J]=Ct(g,de[J]);const De=de[0],Ae=s.convert(g.format,g.colorSpace),ce=s.convert(g.type),Be=S(g.internalFormat,Ae,ce,g.colorSpace),N=g.isVideoTexture!==!0,se=H.__version===void 0||k===!0,le=Y.dataReady;let xe=E(g,De);me(n.TEXTURE_CUBE_MAP,g);let ne;if(Me){N&&se&&t.texStorage2D(n.TEXTURE_CUBE_MAP,xe,Be,De.width,De.height);for(let J=0;J<6;J++){ne=de[J].mipmaps;for(let Te=0;Te<ne.length;Te++){const Oe=ne[Te];g.format!==ti?Ae!==null?N?le&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,Te,0,0,Oe.width,Oe.height,Ae,Oe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,Te,Be,Oe.width,Oe.height,0,Oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,Te,0,0,Oe.width,Oe.height,Ae,ce,Oe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,Te,Be,Oe.width,Oe.height,0,Ae,ce,Oe.data)}}}else{if(ne=g.mipmaps,N&&se){ne.length>0&&xe++;const J=ht(de[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,xe,Be,J.width,J.height)}for(let J=0;J<6;J++)if(re){N?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,de[J].width,de[J].height,Ae,ce,de[J].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Be,de[J].width,de[J].height,0,Ae,ce,de[J].data);for(let Te=0;Te<ne.length;Te++){const lt=ne[Te].image[J].image;N?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,Te+1,0,0,lt.width,lt.height,Ae,ce,lt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,Te+1,Be,lt.width,lt.height,0,Ae,ce,lt.data)}}else{N?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Ae,ce,de[J]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Be,Ae,ce,de[J]);for(let Te=0;Te<ne.length;Te++){const Oe=ne[Te];N?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,Te+1,0,0,Ae,ce,Oe.image[J]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,Te+1,Be,Ae,ce,Oe.image[J])}}}_(g)&&f(n.TEXTURE_CUBE_MAP),H.__version=Y.version,g.onUpdate&&g.onUpdate(g)}R.__version=g.version}function pe(R,g,D,k,Y,H){const he=s.convert(D.format,D.colorSpace),oe=s.convert(D.type),ve=S(D.internalFormat,he,oe,D.colorSpace),Me=i.get(g),re=i.get(D);if(re.__renderTarget=g,!Me.__hasExternalTextures){const de=Math.max(1,g.width>>H),De=Math.max(1,g.height>>H);Y===n.TEXTURE_3D||Y===n.TEXTURE_2D_ARRAY?t.texImage3D(Y,H,ve,de,De,g.depth,0,he,oe,null):t.texImage2D(Y,H,ve,de,De,0,he,oe,null)}t.bindFramebuffer(n.FRAMEBUFFER,R),ye(g)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,k,Y,re.__webglTexture,0,Ke(g)):(Y===n.TEXTURE_2D||Y>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Y<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,k,Y,re.__webglTexture,H),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Le(R,g,D){if(n.bindRenderbuffer(n.RENDERBUFFER,R),g.depthBuffer){const k=g.depthTexture,Y=k&&k.isDepthTexture?k.type:null,H=y(g.stencilBuffer,Y),he=g.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,oe=Ke(g);ye(g)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,oe,H,g.width,g.height):D?n.renderbufferStorageMultisample(n.RENDERBUFFER,oe,H,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,H,g.width,g.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,he,n.RENDERBUFFER,R)}else{const k=g.textures;for(let Y=0;Y<k.length;Y++){const H=k[Y],he=s.convert(H.format,H.colorSpace),oe=s.convert(H.type),ve=S(H.internalFormat,he,oe,H.colorSpace),Me=Ke(g);D&&ye(g)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Me,ve,g.width,g.height):ye(g)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Me,ve,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,ve,g.width,g.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function we(R,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,R),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const k=i.get(g.depthTexture);k.__renderTarget=g,(!k.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),j(g.depthTexture,0);const Y=k.__webglTexture,H=Ke(g);if(g.depthTexture.format===el)ye(g)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Y,0,H):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Y,0);else if(g.depthTexture.format===tl)ye(g)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Y,0,H):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Y,0);else throw new Error("Unknown depthTexture format")}function Xe(R){const g=i.get(R),D=R.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==R.depthTexture){const k=R.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),k){const Y=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,k.removeEventListener("dispose",Y)};k.addEventListener("dispose",Y),g.__depthDisposeCallback=Y}g.__boundDepthTexture=k}if(R.depthTexture&&!g.__autoAllocateDepthBuffer){if(D)throw new Error("target.depthTexture not supported in Cube render targets");const k=R.texture.mipmaps;k&&k.length>0?we(g.__webglFramebuffer[0],R):we(g.__webglFramebuffer,R)}else if(D){g.__webglDepthbuffer=[];for(let k=0;k<6;k++)if(t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[k]),g.__webglDepthbuffer[k]===void 0)g.__webglDepthbuffer[k]=n.createRenderbuffer(),Le(g.__webglDepthbuffer[k],R,!1);else{const Y=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,H=g.__webglDepthbuffer[k];n.bindRenderbuffer(n.RENDERBUFFER,H),n.framebufferRenderbuffer(n.FRAMEBUFFER,Y,n.RENDERBUFFER,H)}}else{const k=R.texture.mipmaps;if(k&&k.length>0?t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=n.createRenderbuffer(),Le(g.__webglDepthbuffer,R,!1);else{const Y=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,H=g.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,H),n.framebufferRenderbuffer(n.FRAMEBUFFER,Y,n.RENDERBUFFER,H)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Bt(R,g,D){const k=i.get(R);g!==void 0&&pe(k.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),D!==void 0&&Xe(R)}function L(R){const g=R.texture,D=i.get(R),k=i.get(g);R.addEventListener("dispose",A);const Y=R.textures,H=R.isWebGLCubeRenderTarget===!0,he=Y.length>1;if(he||(k.__webglTexture===void 0&&(k.__webglTexture=n.createTexture()),k.__version=g.version,o.memory.textures++),H){D.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(g.mipmaps&&g.mipmaps.length>0){D.__webglFramebuffer[oe]=[];for(let ve=0;ve<g.mipmaps.length;ve++)D.__webglFramebuffer[oe][ve]=n.createFramebuffer()}else D.__webglFramebuffer[oe]=n.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){D.__webglFramebuffer=[];for(let oe=0;oe<g.mipmaps.length;oe++)D.__webglFramebuffer[oe]=n.createFramebuffer()}else D.__webglFramebuffer=n.createFramebuffer();if(he)for(let oe=0,ve=Y.length;oe<ve;oe++){const Me=i.get(Y[oe]);Me.__webglTexture===void 0&&(Me.__webglTexture=n.createTexture(),o.memory.textures++)}if(R.samples>0&&ye(R)===!1){D.__webglMultisampledFramebuffer=n.createFramebuffer(),D.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,D.__webglMultisampledFramebuffer);for(let oe=0;oe<Y.length;oe++){const ve=Y[oe];D.__webglColorRenderbuffer[oe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,D.__webglColorRenderbuffer[oe]);const Me=s.convert(ve.format,ve.colorSpace),re=s.convert(ve.type),de=S(ve.internalFormat,Me,re,ve.colorSpace,R.isXRRenderTarget===!0),De=Ke(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,De,de,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+oe,n.RENDERBUFFER,D.__webglColorRenderbuffer[oe])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(D.__webglDepthRenderbuffer=n.createRenderbuffer(),Le(D.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(H){t.bindTexture(n.TEXTURE_CUBE_MAP,k.__webglTexture),me(n.TEXTURE_CUBE_MAP,g);for(let oe=0;oe<6;oe++)if(g.mipmaps&&g.mipmaps.length>0)for(let ve=0;ve<g.mipmaps.length;ve++)pe(D.__webglFramebuffer[oe][ve],R,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,ve);else pe(D.__webglFramebuffer[oe],R,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);_(g)&&f(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(he){for(let oe=0,ve=Y.length;oe<ve;oe++){const Me=Y[oe],re=i.get(Me);let de=n.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(de=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(de,re.__webglTexture),me(de,Me),pe(D.__webglFramebuffer,R,Me,n.COLOR_ATTACHMENT0+oe,de,0),_(Me)&&f(de)}t.unbindTexture()}else{let oe=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(oe=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(oe,k.__webglTexture),me(oe,g),g.mipmaps&&g.mipmaps.length>0)for(let ve=0;ve<g.mipmaps.length;ve++)pe(D.__webglFramebuffer[ve],R,g,n.COLOR_ATTACHMENT0,oe,ve);else pe(D.__webglFramebuffer,R,g,n.COLOR_ATTACHMENT0,oe,0);_(g)&&f(oe),t.unbindTexture()}R.depthBuffer&&Xe(R)}function at(R){const g=R.textures;for(let D=0,k=g.length;D<k;D++){const Y=g[D];if(_(Y)){const H=x(R),he=i.get(Y).__webglTexture;t.bindTexture(H,he),f(H),t.unbindTexture()}}}const Fe=[],be=[];function Se(R){if(R.samples>0){if(ye(R)===!1){const g=R.textures,D=R.width,k=R.height;let Y=n.COLOR_BUFFER_BIT;const H=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,he=i.get(R),oe=g.length>1;if(oe)for(let Me=0;Me<g.length;Me++)t.bindFramebuffer(n.FRAMEBUFFER,he.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Me,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,he.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Me,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,he.__webglMultisampledFramebuffer);const ve=R.texture.mipmaps;ve&&ve.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,he.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,he.__webglFramebuffer);for(let Me=0;Me<g.length;Me++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(Y|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(Y|=n.STENCIL_BUFFER_BIT)),oe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,he.__webglColorRenderbuffer[Me]);const re=i.get(g[Me]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,re,0)}n.blitFramebuffer(0,0,D,k,0,0,D,k,Y,n.NEAREST),l===!0&&(Fe.length=0,be.length=0,Fe.push(n.COLOR_ATTACHMENT0+Me),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Fe.push(H),be.push(H),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,be)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Fe))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),oe)for(let Me=0;Me<g.length;Me++){t.bindFramebuffer(n.FRAMEBUFFER,he.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Me,n.RENDERBUFFER,he.__webglColorRenderbuffer[Me]);const re=i.get(g[Me]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,he.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Me,n.TEXTURE_2D,re,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,he.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const g=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[g])}}}function Ke(R){return Math.min(r.maxSamples,R.samples)}function ye(R){const g=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function ze(R){const g=o.render.frame;c.get(R)!==g&&(c.set(R,g),R.update())}function Ct(R,g){const D=R.colorSpace,k=R.format,Y=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||D!==ko&&D!==vr&&(Qe.getTransfer(D)===it?(k!==ti||Y!==nr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",D)),g}function ht(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(u.width=R.naturalWidth||R.width,u.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(u.width=R.displayWidth,u.height=R.displayHeight):(u.width=R.width,u.height=R.height),u}this.allocateTextureUnit=z,this.resetTextureUnits=F,this.setTexture2D=j,this.setTexture2DArray=B,this.setTexture3D=$,this.setTextureCube=I,this.rebindTextures=Bt,this.setupRenderTarget=L,this.updateRenderTargetMipmap=at,this.updateMultisampleRenderTarget=Se,this.setupDepthRenderbuffer=Xe,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=ye}function kb(n,e){function t(i,r=vr){let s;const o=Qe.getTransfer(r);if(i===nr)return n.UNSIGNED_BYTE;if(i===rm)return n.UNSIGNED_SHORT_4_4_4_4;if(i===sm)return n.UNSIGNED_SHORT_5_5_5_1;if(i===uy)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===cy)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===ay)return n.BYTE;if(i===ly)return n.SHORT;if(i===Qa)return n.UNSIGNED_SHORT;if(i===im)return n.INT;if(i===Rs)return n.UNSIGNED_INT;if(i===Ri)return n.FLOAT;if(i===Go)return n.HALF_FLOAT;if(i===fy)return n.ALPHA;if(i===dy)return n.RGB;if(i===ti)return n.RGBA;if(i===el)return n.DEPTH_COMPONENT;if(i===tl)return n.DEPTH_STENCIL;if(i===hy)return n.RED;if(i===om)return n.RED_INTEGER;if(i===py)return n.RG;if(i===am)return n.RG_INTEGER;if(i===lm)return n.RGBA_INTEGER;if(i===yu||i===Su||i===Mu||i===Eu)if(o===it)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===yu)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Su)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Mu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Eu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===yu)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Su)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Mu)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Eu)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ph||i===mh||i===_h||i===gh)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===ph)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===mh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===_h)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===gh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===vh||i===xh||i===yh)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===vh||i===xh)return o===it?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===yh)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Sh||i===Mh||i===Eh||i===Th||i===wh||i===Ah||i===Ch||i===Rh||i===bh||i===Ph||i===Dh||i===Lh||i===Ih||i===Nh)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Sh)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Mh)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Eh)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Th)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===wh)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ah)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ch)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Rh)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===bh)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ph)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Dh)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Lh)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ih)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Nh)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Uh||i===Fh||i===Oh)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Uh)return o===it?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Fh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Oh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===kh||i===zh||i===Bh||i===Vh)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===kh)return s.COMPRESSED_RED_RGTC1_EXT;if(i===zh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Bh)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Vh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ja?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const zb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Bb=`
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

}`;class Vb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Ry(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new rr({vertexShader:zb,fragmentShader:Bb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ni(new Ss(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Hb extends Wo{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,c=null,d=null,h=null,p=null,v=null;const m=typeof XRWebGLBinding<"u",_=new Vb,f={},x=t.getContextAttributes();let S=null,y=null;const E=[],w=[],A=new ke;let b=null;const M=new hi;M.viewport=new wt;const T=new hi;T.viewport=new wt;const P=[M,T],F=new lw;let z=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ee=E[K];return ee===void 0&&(ee=new kf,E[K]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(K){let ee=E[K];return ee===void 0&&(ee=new kf,E[K]=ee),ee.getGripSpace()},this.getHand=function(K){let ee=E[K];return ee===void 0&&(ee=new kf,E[K]=ee),ee.getHandSpace()};function j(K){const ee=w.indexOf(K.inputSource);if(ee===-1)return;const pe=E[ee];pe!==void 0&&(pe.update(K.inputSource,K.frame,u||o),pe.dispatchEvent({type:K.type,data:K.inputSource}))}function B(){r.removeEventListener("select",j),r.removeEventListener("selectstart",j),r.removeEventListener("selectend",j),r.removeEventListener("squeeze",j),r.removeEventListener("squeezestart",j),r.removeEventListener("squeezeend",j),r.removeEventListener("end",B),r.removeEventListener("inputsourceschange",$);for(let K=0;K<E.length;K++){const ee=w[K];ee!==null&&(w[K]=null,E[K].disconnect(ee))}z=null,X=null,_.reset();for(const K in f)delete f[K];e.setRenderTarget(S),p=null,h=null,d=null,r=null,y=null,Ue.stop(),i.isPresenting=!1,e.setPixelRatio(b),e.setSize(A.width,A.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){s=K,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(K){u=K},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return d===null&&m&&(d=new XRWebGLBinding(r,t)),d},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(K){if(r=K,r!==null){if(S=e.getRenderTarget(),r.addEventListener("select",j),r.addEventListener("selectstart",j),r.addEventListener("selectend",j),r.addEventListener("squeeze",j),r.addEventListener("squeezestart",j),r.addEventListener("squeezeend",j),r.addEventListener("end",B),r.addEventListener("inputsourceschange",$),x.xrCompatible!==!0&&await t.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(A),m&&"createProjectionLayer"in XRWebGLBinding.prototype){let pe=null,Le=null,we=null;x.depth&&(we=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,pe=x.stencil?tl:el,Le=x.stencil?Ja:Rs);const Xe={colorFormat:t.RGBA8,depthFormat:we,scaleFactor:s};d=this.getBinding(),h=d.createProjectionLayer(Xe),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),y=new Vr(h.textureWidth,h.textureHeight,{format:ti,type:nr,depthTexture:new Cy(h.textureWidth,h.textureHeight,Le,void 0,void 0,void 0,void 0,void 0,void 0,pe),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const pe={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,pe),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new Vr(p.framebufferWidth,p.framebufferHeight,{format:ti,type:nr,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),Ue.setContext(r),Ue.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function $(K){for(let ee=0;ee<K.removed.length;ee++){const pe=K.removed[ee],Le=w.indexOf(pe);Le>=0&&(w[Le]=null,E[Le].disconnect(pe))}for(let ee=0;ee<K.added.length;ee++){const pe=K.added[ee];let Le=w.indexOf(pe);if(Le===-1){for(let Xe=0;Xe<E.length;Xe++)if(Xe>=w.length){w.push(pe),Le=Xe;break}else if(w[Xe]===null){w[Xe]=pe,Le=Xe;break}if(Le===-1)break}const we=E[Le];we&&we.connect(pe)}}const I=new V,q=new V;function Q(K,ee,pe){I.setFromMatrixPosition(ee.matrixWorld),q.setFromMatrixPosition(pe.matrixWorld);const Le=I.distanceTo(q),we=ee.projectionMatrix.elements,Xe=pe.projectionMatrix.elements,Bt=we[14]/(we[10]-1),L=we[14]/(we[10]+1),at=(we[9]+1)/we[5],Fe=(we[9]-1)/we[5],be=(we[8]-1)/we[0],Se=(Xe[8]+1)/Xe[0],Ke=Bt*be,ye=Bt*Se,ze=Le/(-be+Se),Ct=ze*-be;if(ee.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Ct),K.translateZ(ze),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),we[10]===-1)K.projectionMatrix.copy(ee.projectionMatrix),K.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{const ht=Bt+ze,R=L+ze,g=Ke-Ct,D=ye+(Le-Ct),k=at*L/R*ht,Y=Fe*L/R*ht;K.projectionMatrix.makePerspective(g,D,k,Y,ht,R),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function ae(K,ee){ee===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ee.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(r===null)return;let ee=K.near,pe=K.far;_.texture!==null&&(_.depthNear>0&&(ee=_.depthNear),_.depthFar>0&&(pe=_.depthFar)),F.near=T.near=M.near=ee,F.far=T.far=M.far=pe,(z!==F.near||X!==F.far)&&(r.updateRenderState({depthNear:F.near,depthFar:F.far}),z=F.near,X=F.far),F.layers.mask=K.layers.mask|6,M.layers.mask=F.layers.mask&3,T.layers.mask=F.layers.mask&5;const Le=K.parent,we=F.cameras;ae(F,Le);for(let Xe=0;Xe<we.length;Xe++)ae(we[Xe],Le);we.length===2?Q(F,M,T):F.projectionMatrix.copy(M.projectionMatrix),me(K,F,Le)};function me(K,ee,pe){pe===null?K.matrix.copy(ee.matrixWorld):(K.matrix.copy(pe.matrixWorld),K.matrix.invert(),K.matrix.multiply(ee.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ee.projectionMatrix),K.projectionMatrixInverse.copy(ee.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Hh*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(K){l=K,h!==null&&(h.fixedFoveation=K),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=K)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(F)},this.getCameraTexture=function(K){return f[K]};let We=null;function Ne(K,ee){if(c=ee.getViewerPose(u||o),v=ee,c!==null){const pe=c.views;p!==null&&(e.setRenderTargetFramebuffer(y,p.framebuffer),e.setRenderTarget(y));let Le=!1;pe.length!==F.cameras.length&&(F.cameras.length=0,Le=!0);for(let L=0;L<pe.length;L++){const at=pe[L];let Fe=null;if(p!==null)Fe=p.getViewport(at);else{const Se=d.getViewSubImage(h,at);Fe=Se.viewport,L===0&&(e.setRenderTargetTextures(y,Se.colorTexture,Se.depthStencilTexture),e.setRenderTarget(y))}let be=P[L];be===void 0&&(be=new hi,be.layers.enable(L),be.viewport=new wt,P[L]=be),be.matrix.fromArray(at.transform.matrix),be.matrix.decompose(be.position,be.quaternion,be.scale),be.projectionMatrix.fromArray(at.projectionMatrix),be.projectionMatrixInverse.copy(be.projectionMatrix).invert(),be.viewport.set(Fe.x,Fe.y,Fe.width,Fe.height),L===0&&(F.matrix.copy(be.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),Le===!0&&F.cameras.push(be)}const we=r.enabledFeatures;if(we&&we.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&m){d=i.getBinding();const L=d.getDepthInformation(pe[0]);L&&L.isValid&&L.texture&&_.init(L,r.renderState)}if(we&&we.includes("camera-access")&&m){e.state.unbindTexture(),d=i.getBinding();for(let L=0;L<pe.length;L++){const at=pe[L].camera;if(at){let Fe=f[at];Fe||(Fe=new Ry,f[at]=Fe);const be=d.getCameraImage(at);Fe.sourceTexture=be}}}}for(let pe=0;pe<E.length;pe++){const Le=w[pe],we=E[pe];Le!==null&&we!==void 0&&we.update(Le,ee,u||o)}We&&We(K,ee),ee.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ee}),v=null}const Ue=new by;Ue.setAnimationLoop(Ne),this.setAnimationLoop=function(K){We=K},this.dispose=function(){}}}const ts=new ir,Gb=new Ut;function Wb(n,e){function t(_,f){_.matrixAutoUpdate===!0&&_.updateMatrix(),f.value.copy(_.matrix)}function i(_,f){f.color.getRGB(_.fogColor.value,Ty(n)),f.isFog?(_.fogNear.value=f.near,_.fogFar.value=f.far):f.isFogExp2&&(_.fogDensity.value=f.density)}function r(_,f,x,S,y){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(_,f):f.isMeshToonMaterial?(s(_,f),d(_,f)):f.isMeshPhongMaterial?(s(_,f),c(_,f)):f.isMeshStandardMaterial?(s(_,f),h(_,f),f.isMeshPhysicalMaterial&&p(_,f,y)):f.isMeshMatcapMaterial?(s(_,f),v(_,f)):f.isMeshDepthMaterial?s(_,f):f.isMeshDistanceMaterial?(s(_,f),m(_,f)):f.isMeshNormalMaterial?s(_,f):f.isLineBasicMaterial?(o(_,f),f.isLineDashedMaterial&&a(_,f)):f.isPointsMaterial?l(_,f,x,S):f.isSpriteMaterial?u(_,f):f.isShadowMaterial?(_.color.value.copy(f.color),_.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(_,f){_.opacity.value=f.opacity,f.color&&_.diffuse.value.copy(f.color),f.emissive&&_.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(_.map.value=f.map,t(f.map,_.mapTransform)),f.alphaMap&&(_.alphaMap.value=f.alphaMap,t(f.alphaMap,_.alphaMapTransform)),f.bumpMap&&(_.bumpMap.value=f.bumpMap,t(f.bumpMap,_.bumpMapTransform),_.bumpScale.value=f.bumpScale,f.side===Tn&&(_.bumpScale.value*=-1)),f.normalMap&&(_.normalMap.value=f.normalMap,t(f.normalMap,_.normalMapTransform),_.normalScale.value.copy(f.normalScale),f.side===Tn&&_.normalScale.value.negate()),f.displacementMap&&(_.displacementMap.value=f.displacementMap,t(f.displacementMap,_.displacementMapTransform),_.displacementScale.value=f.displacementScale,_.displacementBias.value=f.displacementBias),f.emissiveMap&&(_.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,_.emissiveMapTransform)),f.specularMap&&(_.specularMap.value=f.specularMap,t(f.specularMap,_.specularMapTransform)),f.alphaTest>0&&(_.alphaTest.value=f.alphaTest);const x=e.get(f),S=x.envMap,y=x.envMapRotation;S&&(_.envMap.value=S,ts.copy(y),ts.x*=-1,ts.y*=-1,ts.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(ts.y*=-1,ts.z*=-1),_.envMapRotation.value.setFromMatrix4(Gb.makeRotationFromEuler(ts)),_.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=f.reflectivity,_.ior.value=f.ior,_.refractionRatio.value=f.refractionRatio),f.lightMap&&(_.lightMap.value=f.lightMap,_.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,_.lightMapTransform)),f.aoMap&&(_.aoMap.value=f.aoMap,_.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,_.aoMapTransform))}function o(_,f){_.diffuse.value.copy(f.color),_.opacity.value=f.opacity,f.map&&(_.map.value=f.map,t(f.map,_.mapTransform))}function a(_,f){_.dashSize.value=f.dashSize,_.totalSize.value=f.dashSize+f.gapSize,_.scale.value=f.scale}function l(_,f,x,S){_.diffuse.value.copy(f.color),_.opacity.value=f.opacity,_.size.value=f.size*x,_.scale.value=S*.5,f.map&&(_.map.value=f.map,t(f.map,_.uvTransform)),f.alphaMap&&(_.alphaMap.value=f.alphaMap,t(f.alphaMap,_.alphaMapTransform)),f.alphaTest>0&&(_.alphaTest.value=f.alphaTest)}function u(_,f){_.diffuse.value.copy(f.color),_.opacity.value=f.opacity,_.rotation.value=f.rotation,f.map&&(_.map.value=f.map,t(f.map,_.mapTransform)),f.alphaMap&&(_.alphaMap.value=f.alphaMap,t(f.alphaMap,_.alphaMapTransform)),f.alphaTest>0&&(_.alphaTest.value=f.alphaTest)}function c(_,f){_.specular.value.copy(f.specular),_.shininess.value=Math.max(f.shininess,1e-4)}function d(_,f){f.gradientMap&&(_.gradientMap.value=f.gradientMap)}function h(_,f){_.metalness.value=f.metalness,f.metalnessMap&&(_.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,_.metalnessMapTransform)),_.roughness.value=f.roughness,f.roughnessMap&&(_.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,_.roughnessMapTransform)),f.envMap&&(_.envMapIntensity.value=f.envMapIntensity)}function p(_,f,x){_.ior.value=f.ior,f.sheen>0&&(_.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),_.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(_.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,_.sheenColorMapTransform)),f.sheenRoughnessMap&&(_.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,_.sheenRoughnessMapTransform))),f.clearcoat>0&&(_.clearcoat.value=f.clearcoat,_.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(_.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,_.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(_.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Tn&&_.clearcoatNormalScale.value.negate())),f.dispersion>0&&(_.dispersion.value=f.dispersion),f.iridescence>0&&(_.iridescence.value=f.iridescence,_.iridescenceIOR.value=f.iridescenceIOR,_.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(_.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,_.iridescenceMapTransform)),f.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),f.transmission>0&&(_.transmission.value=f.transmission,_.transmissionSamplerMap.value=x.texture,_.transmissionSamplerSize.value.set(x.width,x.height),f.transmissionMap&&(_.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,_.transmissionMapTransform)),_.thickness.value=f.thickness,f.thicknessMap&&(_.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=f.attenuationDistance,_.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(_.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(_.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=f.specularIntensity,_.specularColor.value.copy(f.specularColor),f.specularColorMap&&(_.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,_.specularColorMapTransform)),f.specularIntensityMap&&(_.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,_.specularIntensityMapTransform))}function v(_,f){f.matcap&&(_.matcap.value=f.matcap)}function m(_,f){const x=e.get(f).light;_.referencePosition.value.setFromMatrixPosition(x.matrixWorld),_.nearDistance.value=x.shadow.camera.near,_.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Xb(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,S){const y=S.program;i.uniformBlockBinding(x,y)}function u(x,S){let y=r[x.id];y===void 0&&(v(x),y=c(x),r[x.id]=y,x.addEventListener("dispose",_));const E=S.program;i.updateUBOMapping(x,E);const w=e.render.frame;s[x.id]!==w&&(h(x),s[x.id]=w)}function c(x){const S=d();x.__bindingPointIndex=S;const y=n.createBuffer(),E=x.__size,w=x.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,E,w),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,S,y),y}function d(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(x){const S=r[x.id],y=x.uniforms,E=x.__cache;n.bindBuffer(n.UNIFORM_BUFFER,S);for(let w=0,A=y.length;w<A;w++){const b=Array.isArray(y[w])?y[w]:[y[w]];for(let M=0,T=b.length;M<T;M++){const P=b[M];if(p(P,w,M,E)===!0){const F=P.__offset,z=Array.isArray(P.value)?P.value:[P.value];let X=0;for(let j=0;j<z.length;j++){const B=z[j],$=m(B);typeof B=="number"||typeof B=="boolean"?(P.__data[0]=B,n.bufferSubData(n.UNIFORM_BUFFER,F+X,P.__data)):B.isMatrix3?(P.__data[0]=B.elements[0],P.__data[1]=B.elements[1],P.__data[2]=B.elements[2],P.__data[3]=0,P.__data[4]=B.elements[3],P.__data[5]=B.elements[4],P.__data[6]=B.elements[5],P.__data[7]=0,P.__data[8]=B.elements[6],P.__data[9]=B.elements[7],P.__data[10]=B.elements[8],P.__data[11]=0):(B.toArray(P.__data,X),X+=$.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,F,P.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(x,S,y,E){const w=x.value,A=S+"_"+y;if(E[A]===void 0)return typeof w=="number"||typeof w=="boolean"?E[A]=w:E[A]=w.clone(),!0;{const b=E[A];if(typeof w=="number"||typeof w=="boolean"){if(b!==w)return E[A]=w,!0}else if(b.equals(w)===!1)return b.copy(w),!0}return!1}function v(x){const S=x.uniforms;let y=0;const E=16;for(let A=0,b=S.length;A<b;A++){const M=Array.isArray(S[A])?S[A]:[S[A]];for(let T=0,P=M.length;T<P;T++){const F=M[T],z=Array.isArray(F.value)?F.value:[F.value];for(let X=0,j=z.length;X<j;X++){const B=z[X],$=m(B),I=y%E,q=I%$.boundary,Q=I+q;y+=q,Q!==0&&E-Q<$.storage&&(y+=E-Q),F.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=y,y+=$.storage}}}const w=y%E;return w>0&&(y+=E-w),x.__size=y,x.__cache={},this}function m(x){const S={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(S.boundary=4,S.storage=4):x.isVector2?(S.boundary=8,S.storage=8):x.isVector3||x.isColor?(S.boundary=16,S.storage=12):x.isVector4?(S.boundary=16,S.storage=16):x.isMatrix3?(S.boundary=48,S.storage=48):x.isMatrix4?(S.boundary=64,S.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),S}function _(x){const S=x.target;S.removeEventListener("dispose",_);const y=o.indexOf(S.__bindingPointIndex);o.splice(y,1),n.deleteBuffer(r[S.id]),delete r[S.id],delete s[S.id]}function f(){for(const x in r)n.deleteBuffer(r[x]);o=[],r={},s={}}return{bind:l,update:u,dispose:f}}class jb{constructor(e={}){const{canvas:t=A1(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const v=new Uint32Array(4),m=new Int32Array(4);let _=null,f=null;const x=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ur,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const y=this;let E=!1;this._outputColorSpace=qn;let w=0,A=0,b=null,M=-1,T=null;const P=new wt,F=new wt;let z=null;const X=new Je(0);let j=0,B=t.width,$=t.height,I=1,q=null,Q=null;const ae=new wt(0,0,B,$),me=new wt(0,0,B,$);let We=!1;const Ne=new Ay;let Ue=!1,K=!1;const ee=new Ut,pe=new V,Le=new wt,we={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Xe=!1;function Bt(){return b===null?I:1}let L=i;function at(C,U){return t.getContext(C,U)}try{const C={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${nm}`),t.addEventListener("webglcontextlost",le,!1),t.addEventListener("webglcontextrestored",xe,!1),t.addEventListener("webglcontextcreationerror",ne,!1),L===null){const U="webgl2";if(L=at(U,C),L===null)throw at(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let Fe,be,Se,Ke,ye,ze,Ct,ht,R,g,D,k,Y,H,he,oe,ve,Me,re,de,De,Ae,ce,Be;function N(){Fe=new nR(L),Fe.init(),Ae=new kb(L,Fe),be=new $C(L,Fe,e,Ae),Se=new Fb(L,Fe),be.reversedDepthBuffer&&h&&Se.buffers.depth.setReversed(!0),Ke=new sR(L),ye=new Eb,ze=new Ob(L,Fe,Se,ye,be,Ae,Ke),Ct=new ZC(y),ht=new tR(y),R=new fw(L),ce=new YC(L,R),g=new iR(L,R,Ke,ce),D=new aR(L,g,R,Ke),re=new oR(L,be,ze),oe=new KC(ye),k=new Mb(y,Ct,ht,Fe,be,ce,oe),Y=new Wb(y,ye),H=new wb,he=new Db(Fe),Me=new jC(y,Ct,ht,Se,D,p,l),ve=new Nb(y,D,be),Be=new Xb(L,Ke,be,Se),de=new qC(L,Fe,Ke),De=new rR(L,Fe,Ke),Ke.programs=k.programs,y.capabilities=be,y.extensions=Fe,y.properties=ye,y.renderLists=H,y.shadowMap=ve,y.state=Se,y.info=Ke}N();const se=new Hb(y,L);this.xr=se,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const C=Fe.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Fe.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return I},this.setPixelRatio=function(C){C!==void 0&&(I=C,this.setSize(B,$,!1))},this.getSize=function(C){return C.set(B,$)},this.setSize=function(C,U,G=!0){if(se.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=C,$=U,t.width=Math.floor(C*I),t.height=Math.floor(U*I),G===!0&&(t.style.width=C+"px",t.style.height=U+"px"),this.setViewport(0,0,C,U)},this.getDrawingBufferSize=function(C){return C.set(B*I,$*I).floor()},this.setDrawingBufferSize=function(C,U,G){B=C,$=U,I=G,t.width=Math.floor(C*G),t.height=Math.floor(U*G),this.setViewport(0,0,C,U)},this.getCurrentViewport=function(C){return C.copy(P)},this.getViewport=function(C){return C.copy(ae)},this.setViewport=function(C,U,G,W){C.isVector4?ae.set(C.x,C.y,C.z,C.w):ae.set(C,U,G,W),Se.viewport(P.copy(ae).multiplyScalar(I).round())},this.getScissor=function(C){return C.copy(me)},this.setScissor=function(C,U,G,W){C.isVector4?me.set(C.x,C.y,C.z,C.w):me.set(C,U,G,W),Se.scissor(F.copy(me).multiplyScalar(I).round())},this.getScissorTest=function(){return We},this.setScissorTest=function(C){Se.setScissorTest(We=C)},this.setOpaqueSort=function(C){q=C},this.setTransparentSort=function(C){Q=C},this.getClearColor=function(C){return C.copy(Me.getClearColor())},this.setClearColor=function(){Me.setClearColor(...arguments)},this.getClearAlpha=function(){return Me.getClearAlpha()},this.setClearAlpha=function(){Me.setClearAlpha(...arguments)},this.clear=function(C=!0,U=!0,G=!0){let W=0;if(C){let O=!1;if(b!==null){const ie=b.texture.format;O=ie===lm||ie===am||ie===om}if(O){const ie=b.texture.type,fe=ie===nr||ie===Rs||ie===Qa||ie===Ja||ie===rm||ie===sm,Ee=Me.getClearColor(),ge=Me.getClearAlpha(),Pe=Ee.r,Ie=Ee.g,Ce=Ee.b;fe?(v[0]=Pe,v[1]=Ie,v[2]=Ce,v[3]=ge,L.clearBufferuiv(L.COLOR,0,v)):(m[0]=Pe,m[1]=Ie,m[2]=Ce,m[3]=ge,L.clearBufferiv(L.COLOR,0,m))}else W|=L.COLOR_BUFFER_BIT}U&&(W|=L.DEPTH_BUFFER_BIT),G&&(W|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",le,!1),t.removeEventListener("webglcontextrestored",xe,!1),t.removeEventListener("webglcontextcreationerror",ne,!1),Me.dispose(),H.dispose(),he.dispose(),ye.dispose(),Ct.dispose(),ht.dispose(),D.dispose(),ce.dispose(),Be.dispose(),k.dispose(),se.dispose(),se.removeEventListener("sessionstart",yi),se.removeEventListener("sessionend",fm),jr.stop()};function le(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function xe(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const C=Ke.autoReset,U=ve.enabled,G=ve.autoUpdate,W=ve.needsUpdate,O=ve.type;N(),Ke.autoReset=C,ve.enabled=U,ve.autoUpdate=G,ve.needsUpdate=W,ve.type=O}function ne(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function J(C){const U=C.target;U.removeEventListener("dispose",J),Te(U)}function Te(C){Oe(C),ye.remove(C)}function Oe(C){const U=ye.get(C).programs;U!==void 0&&(U.forEach(function(G){k.releaseProgram(G)}),C.isShaderMaterial&&k.releaseShaderCache(C))}this.renderBufferDirect=function(C,U,G,W,O,ie){U===null&&(U=we);const fe=O.isMesh&&O.matrixWorld.determinant()<0,Ee=Ny(C,U,G,W,O);Se.setMaterial(W,fe);let ge=G.index,Pe=1;if(W.wireframe===!0){if(ge=g.getWireframeAttribute(G),ge===void 0)return;Pe=2}const Ie=G.drawRange,Ce=G.attributes.position;let je=Ie.start*Pe,nt=(Ie.start+Ie.count)*Pe;ie!==null&&(je=Math.max(je,ie.start*Pe),nt=Math.min(nt,(ie.start+ie.count)*Pe)),ge!==null?(je=Math.max(je,0),nt=Math.min(nt,ge.count)):Ce!=null&&(je=Math.max(je,0),nt=Math.min(nt,Ce.count));const Et=nt-je;if(Et<0||Et===1/0)return;ce.setup(O,W,Ee,G,ge);let ct,rt=de;if(ge!==null&&(ct=R.get(ge),rt=De,rt.setIndex(ct)),O.isMesh)W.wireframe===!0?(Se.setLineWidth(W.wireframeLinewidth*Bt()),rt.setMode(L.LINES)):rt.setMode(L.TRIANGLES);else if(O.isLine){let Re=W.linewidth;Re===void 0&&(Re=1),Se.setLineWidth(Re*Bt()),O.isLineSegments?rt.setMode(L.LINES):O.isLineLoop?rt.setMode(L.LINE_LOOP):rt.setMode(L.LINE_STRIP)}else O.isPoints?rt.setMode(L.POINTS):O.isSprite&&rt.setMode(L.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)nl("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),rt.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(Fe.get("WEBGL_multi_draw"))rt.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const Re=O._multiDrawStarts,_t=O._multiDrawCounts,Ze=O._multiDrawCount,Cn=ge?R.get(ge).bytesPerElement:1,Ls=ye.get(W).currentProgram.getUniforms();for(let Rn=0;Rn<Ze;Rn++)Ls.setValue(L,"_gl_DrawID",Rn),rt.render(Re[Rn]/Cn,_t[Rn])}else if(O.isInstancedMesh)rt.renderInstances(je,Et,O.count);else if(G.isInstancedBufferGeometry){const Re=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,_t=Math.min(G.instanceCount,Re);rt.renderInstances(je,Et,_t)}else rt.render(je,Et)};function lt(C,U,G){C.transparent===!0&&C.side===Wi&&C.forceSinglePass===!1?(C.side=Tn,C.needsUpdate=!0,ml(C,U,G),C.side=Br,C.needsUpdate=!0,ml(C,U,G),C.side=Wi):ml(C,U,G)}this.compile=function(C,U,G=null){G===null&&(G=C),f=he.get(G),f.init(U),S.push(f),G.traverseVisible(function(O){O.isLight&&O.layers.test(U.layers)&&(f.pushLight(O),O.castShadow&&f.pushShadow(O))}),C!==G&&C.traverseVisible(function(O){O.isLight&&O.layers.test(U.layers)&&(f.pushLight(O),O.castShadow&&f.pushShadow(O))}),f.setupLights();const W=new Set;return C.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const ie=O.material;if(ie)if(Array.isArray(ie))for(let fe=0;fe<ie.length;fe++){const Ee=ie[fe];lt(Ee,G,O),W.add(Ee)}else lt(ie,G,O),W.add(ie)}),f=S.pop(),W},this.compileAsync=function(C,U,G=null){const W=this.compile(C,U,G);return new Promise(O=>{function ie(){if(W.forEach(function(fe){ye.get(fe).currentProgram.isReady()&&W.delete(fe)}),W.size===0){O(C);return}setTimeout(ie,10)}Fe.get("KHR_parallel_shader_compile")!==null?ie():setTimeout(ie,10)})};let et=null;function Ii(C){et&&et(C)}function yi(){jr.stop()}function fm(){jr.start()}const jr=new by;jr.setAnimationLoop(Ii),typeof self<"u"&&jr.setContext(self),this.setAnimationLoop=function(C){et=C,se.setAnimationLoop(C),C===null?jr.stop():jr.start()},se.addEventListener("sessionstart",yi),se.addEventListener("sessionend",fm),this.render=function(C,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),se.enabled===!0&&se.isPresenting===!0&&(se.cameraAutoUpdate===!0&&se.updateCamera(U),U=se.getCamera()),C.isScene===!0&&C.onBeforeRender(y,C,U,b),f=he.get(C,S.length),f.init(U),S.push(f),ee.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Ne.setFromProjectionMatrix(ee,bi,U.reversedDepth),K=this.localClippingEnabled,Ue=oe.init(this.clippingPlanes,K),_=H.get(C,x.length),_.init(),x.push(_),se.enabled===!0&&se.isPresenting===!0){const ie=y.xr.getDepthSensingMesh();ie!==null&&Lc(ie,U,-1/0,y.sortObjects)}Lc(C,U,0,y.sortObjects),_.finish(),y.sortObjects===!0&&_.sort(q,Q),Xe=se.enabled===!1||se.isPresenting===!1||se.hasDepthSensing()===!1,Xe&&Me.addToRenderList(_,C),this.info.render.frame++,Ue===!0&&oe.beginShadows();const G=f.state.shadowsArray;ve.render(G,C,U),Ue===!0&&oe.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=_.opaque,O=_.transmissive;if(f.setupLights(),U.isArrayCamera){const ie=U.cameras;if(O.length>0)for(let fe=0,Ee=ie.length;fe<Ee;fe++){const ge=ie[fe];hm(W,O,C,ge)}Xe&&Me.render(C);for(let fe=0,Ee=ie.length;fe<Ee;fe++){const ge=ie[fe];dm(_,C,ge,ge.viewport)}}else O.length>0&&hm(W,O,C,U),Xe&&Me.render(C),dm(_,C,U);b!==null&&A===0&&(ze.updateMultisampleRenderTarget(b),ze.updateRenderTargetMipmap(b)),C.isScene===!0&&C.onAfterRender(y,C,U),ce.resetDefaultState(),M=-1,T=null,S.pop(),S.length>0?(f=S[S.length-1],Ue===!0&&oe.setGlobalState(y.clippingPlanes,f.state.camera)):f=null,x.pop(),x.length>0?_=x[x.length-1]:_=null};function Lc(C,U,G,W){if(C.visible===!1)return;if(C.layers.test(U.layers)){if(C.isGroup)G=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(U);else if(C.isLight)f.pushLight(C),C.castShadow&&f.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Ne.intersectsSprite(C)){W&&Le.setFromMatrixPosition(C.matrixWorld).applyMatrix4(ee);const fe=D.update(C),Ee=C.material;Ee.visible&&_.push(C,fe,Ee,G,Le.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Ne.intersectsObject(C))){const fe=D.update(C),Ee=C.material;if(W&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Le.copy(C.boundingSphere.center)):(fe.boundingSphere===null&&fe.computeBoundingSphere(),Le.copy(fe.boundingSphere.center)),Le.applyMatrix4(C.matrixWorld).applyMatrix4(ee)),Array.isArray(Ee)){const ge=fe.groups;for(let Pe=0,Ie=ge.length;Pe<Ie;Pe++){const Ce=ge[Pe],je=Ee[Ce.materialIndex];je&&je.visible&&_.push(C,fe,je,G,Le.z,Ce)}}else Ee.visible&&_.push(C,fe,Ee,G,Le.z,null)}}const ie=C.children;for(let fe=0,Ee=ie.length;fe<Ee;fe++)Lc(ie[fe],U,G,W)}function dm(C,U,G,W){const O=C.opaque,ie=C.transmissive,fe=C.transparent;f.setupLightsView(G),Ue===!0&&oe.setGlobalState(y.clippingPlanes,G),W&&Se.viewport(P.copy(W)),O.length>0&&pl(O,U,G),ie.length>0&&pl(ie,U,G),fe.length>0&&pl(fe,U,G),Se.buffers.depth.setTest(!0),Se.buffers.depth.setMask(!0),Se.buffers.color.setMask(!0),Se.setPolygonOffset(!1)}function hm(C,U,G,W){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[W.id]===void 0&&(f.state.transmissionRenderTarget[W.id]=new Vr(1,1,{generateMipmaps:!0,type:Fe.has("EXT_color_buffer_half_float")||Fe.has("EXT_color_buffer_float")?Go:nr,minFilter:hs,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qe.workingColorSpace}));const ie=f.state.transmissionRenderTarget[W.id],fe=W.viewport||P;ie.setSize(fe.z*y.transmissionResolutionScale,fe.w*y.transmissionResolutionScale);const Ee=y.getRenderTarget(),ge=y.getActiveCubeFace(),Pe=y.getActiveMipmapLevel();y.setRenderTarget(ie),y.getClearColor(X),j=y.getClearAlpha(),j<1&&y.setClearColor(16777215,.5),y.clear(),Xe&&Me.render(G);const Ie=y.toneMapping;y.toneMapping=Ur;const Ce=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),f.setupLightsView(W),Ue===!0&&oe.setGlobalState(y.clippingPlanes,W),pl(C,G,W),ze.updateMultisampleRenderTarget(ie),ze.updateRenderTargetMipmap(ie),Fe.has("WEBGL_multisampled_render_to_texture")===!1){let je=!1;for(let nt=0,Et=U.length;nt<Et;nt++){const ct=U[nt],rt=ct.object,Re=ct.geometry,_t=ct.material,Ze=ct.group;if(_t.side===Wi&&rt.layers.test(W.layers)){const Cn=_t.side;_t.side=Tn,_t.needsUpdate=!0,pm(rt,G,W,Re,_t,Ze),_t.side=Cn,_t.needsUpdate=!0,je=!0}}je===!0&&(ze.updateMultisampleRenderTarget(ie),ze.updateRenderTargetMipmap(ie))}y.setRenderTarget(Ee,ge,Pe),y.setClearColor(X,j),Ce!==void 0&&(W.viewport=Ce),y.toneMapping=Ie}function pl(C,U,G){const W=U.isScene===!0?U.overrideMaterial:null;for(let O=0,ie=C.length;O<ie;O++){const fe=C[O],Ee=fe.object,ge=fe.geometry,Pe=fe.group;let Ie=fe.material;Ie.allowOverride===!0&&W!==null&&(Ie=W),Ee.layers.test(G.layers)&&pm(Ee,U,G,ge,Ie,Pe)}}function pm(C,U,G,W,O,ie){C.onBeforeRender(y,U,G,W,O,ie),C.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),O.onBeforeRender(y,U,G,W,C,ie),O.transparent===!0&&O.side===Wi&&O.forceSinglePass===!1?(O.side=Tn,O.needsUpdate=!0,y.renderBufferDirect(G,U,W,O,C,ie),O.side=Br,O.needsUpdate=!0,y.renderBufferDirect(G,U,W,O,C,ie),O.side=Wi):y.renderBufferDirect(G,U,W,O,C,ie),C.onAfterRender(y,U,G,W,O,ie)}function ml(C,U,G){U.isScene!==!0&&(U=we);const W=ye.get(C),O=f.state.lights,ie=f.state.shadowsArray,fe=O.state.version,Ee=k.getParameters(C,O.state,ie,U,G),ge=k.getProgramCacheKey(Ee);let Pe=W.programs;W.environment=C.isMeshStandardMaterial?U.environment:null,W.fog=U.fog,W.envMap=(C.isMeshStandardMaterial?ht:Ct).get(C.envMap||W.environment),W.envMapRotation=W.environment!==null&&C.envMap===null?U.environmentRotation:C.envMapRotation,Pe===void 0&&(C.addEventListener("dispose",J),Pe=new Map,W.programs=Pe);let Ie=Pe.get(ge);if(Ie!==void 0){if(W.currentProgram===Ie&&W.lightsStateVersion===fe)return _m(C,Ee),Ie}else Ee.uniforms=k.getUniforms(C),C.onBeforeCompile(Ee,y),Ie=k.acquireProgram(Ee,ge),Pe.set(ge,Ie),W.uniforms=Ee.uniforms;const Ce=W.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Ce.clippingPlanes=oe.uniform),_m(C,Ee),W.needsLights=Fy(C),W.lightsStateVersion=fe,W.needsLights&&(Ce.ambientLightColor.value=O.state.ambient,Ce.lightProbe.value=O.state.probe,Ce.directionalLights.value=O.state.directional,Ce.directionalLightShadows.value=O.state.directionalShadow,Ce.spotLights.value=O.state.spot,Ce.spotLightShadows.value=O.state.spotShadow,Ce.rectAreaLights.value=O.state.rectArea,Ce.ltc_1.value=O.state.rectAreaLTC1,Ce.ltc_2.value=O.state.rectAreaLTC2,Ce.pointLights.value=O.state.point,Ce.pointLightShadows.value=O.state.pointShadow,Ce.hemisphereLights.value=O.state.hemi,Ce.directionalShadowMap.value=O.state.directionalShadowMap,Ce.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Ce.spotShadowMap.value=O.state.spotShadowMap,Ce.spotLightMatrix.value=O.state.spotLightMatrix,Ce.spotLightMap.value=O.state.spotLightMap,Ce.pointShadowMap.value=O.state.pointShadowMap,Ce.pointShadowMatrix.value=O.state.pointShadowMatrix),W.currentProgram=Ie,W.uniformsList=null,Ie}function mm(C){if(C.uniformsList===null){const U=C.currentProgram.getUniforms();C.uniformsList=Tu.seqWithValue(U.seq,C.uniforms)}return C.uniformsList}function _m(C,U){const G=ye.get(C);G.outputColorSpace=U.outputColorSpace,G.batching=U.batching,G.batchingColor=U.batchingColor,G.instancing=U.instancing,G.instancingColor=U.instancingColor,G.instancingMorph=U.instancingMorph,G.skinning=U.skinning,G.morphTargets=U.morphTargets,G.morphNormals=U.morphNormals,G.morphColors=U.morphColors,G.morphTargetsCount=U.morphTargetsCount,G.numClippingPlanes=U.numClippingPlanes,G.numIntersection=U.numClipIntersection,G.vertexAlphas=U.vertexAlphas,G.vertexTangents=U.vertexTangents,G.toneMapping=U.toneMapping}function Ny(C,U,G,W,O){U.isScene!==!0&&(U=we),ze.resetTextureUnits();const ie=U.fog,fe=W.isMeshStandardMaterial?U.environment:null,Ee=b===null?y.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:ko,ge=(W.isMeshStandardMaterial?ht:Ct).get(W.envMap||fe),Pe=W.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Ie=!!G.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Ce=!!G.morphAttributes.position,je=!!G.morphAttributes.normal,nt=!!G.morphAttributes.color;let Et=Ur;W.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(Et=y.toneMapping);const ct=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,rt=ct!==void 0?ct.length:0,Re=ye.get(W),_t=f.state.lights;if(Ue===!0&&(K===!0||C!==T)){const rn=C===T&&W.id===M;oe.setState(W,C,rn)}let Ze=!1;W.version===Re.__version?(Re.needsLights&&Re.lightsStateVersion!==_t.state.version||Re.outputColorSpace!==Ee||O.isBatchedMesh&&Re.batching===!1||!O.isBatchedMesh&&Re.batching===!0||O.isBatchedMesh&&Re.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Re.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Re.instancing===!1||!O.isInstancedMesh&&Re.instancing===!0||O.isSkinnedMesh&&Re.skinning===!1||!O.isSkinnedMesh&&Re.skinning===!0||O.isInstancedMesh&&Re.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Re.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Re.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Re.instancingMorph===!1&&O.morphTexture!==null||Re.envMap!==ge||W.fog===!0&&Re.fog!==ie||Re.numClippingPlanes!==void 0&&(Re.numClippingPlanes!==oe.numPlanes||Re.numIntersection!==oe.numIntersection)||Re.vertexAlphas!==Pe||Re.vertexTangents!==Ie||Re.morphTargets!==Ce||Re.morphNormals!==je||Re.morphColors!==nt||Re.toneMapping!==Et||Re.morphTargetsCount!==rt)&&(Ze=!0):(Ze=!0,Re.__version=W.version);let Cn=Re.currentProgram;Ze===!0&&(Cn=ml(W,U,O));let Ls=!1,Rn=!1,jo=!1;const gt=Cn.getUniforms(),Wn=Re.uniforms;if(Se.useProgram(Cn.program)&&(Ls=!0,Rn=!0,jo=!0),W.id!==M&&(M=W.id,Rn=!0),Ls||T!==C){Se.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),gt.setValue(L,"projectionMatrix",C.projectionMatrix),gt.setValue(L,"viewMatrix",C.matrixWorldInverse);const dn=gt.map.cameraPosition;dn!==void 0&&dn.setValue(L,pe.setFromMatrixPosition(C.matrixWorld)),be.logarithmicDepthBuffer&&gt.setValue(L,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&gt.setValue(L,"isOrthographic",C.isOrthographicCamera===!0),T!==C&&(T=C,Rn=!0,jo=!0)}if(O.isSkinnedMesh){gt.setOptional(L,O,"bindMatrix"),gt.setOptional(L,O,"bindMatrixInverse");const rn=O.skeleton;rn&&(rn.boneTexture===null&&rn.computeBoneTexture(),gt.setValue(L,"boneTexture",rn.boneTexture,ze))}O.isBatchedMesh&&(gt.setOptional(L,O,"batchingTexture"),gt.setValue(L,"batchingTexture",O._matricesTexture,ze),gt.setOptional(L,O,"batchingIdTexture"),gt.setValue(L,"batchingIdTexture",O._indirectTexture,ze),gt.setOptional(L,O,"batchingColorTexture"),O._colorsTexture!==null&&gt.setValue(L,"batchingColorTexture",O._colorsTexture,ze));const Xn=G.morphAttributes;if((Xn.position!==void 0||Xn.normal!==void 0||Xn.color!==void 0)&&re.update(O,G,Cn),(Rn||Re.receiveShadow!==O.receiveShadow)&&(Re.receiveShadow=O.receiveShadow,gt.setValue(L,"receiveShadow",O.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(Wn.envMap.value=ge,Wn.flipEnvMap.value=ge.isCubeTexture&&ge.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&U.environment!==null&&(Wn.envMapIntensity.value=U.environmentIntensity),Rn&&(gt.setValue(L,"toneMappingExposure",y.toneMappingExposure),Re.needsLights&&Uy(Wn,jo),ie&&W.fog===!0&&Y.refreshFogUniforms(Wn,ie),Y.refreshMaterialUniforms(Wn,W,I,$,f.state.transmissionRenderTarget[C.id]),Tu.upload(L,mm(Re),Wn,ze)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Tu.upload(L,mm(Re),Wn,ze),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&gt.setValue(L,"center",O.center),gt.setValue(L,"modelViewMatrix",O.modelViewMatrix),gt.setValue(L,"normalMatrix",O.normalMatrix),gt.setValue(L,"modelMatrix",O.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const rn=W.uniformsGroups;for(let dn=0,Ic=rn.length;dn<Ic;dn++){const Yr=rn[dn];Be.update(Yr,Cn),Be.bind(Yr,Cn)}}return Cn}function Uy(C,U){C.ambientLightColor.needsUpdate=U,C.lightProbe.needsUpdate=U,C.directionalLights.needsUpdate=U,C.directionalLightShadows.needsUpdate=U,C.pointLights.needsUpdate=U,C.pointLightShadows.needsUpdate=U,C.spotLights.needsUpdate=U,C.spotLightShadows.needsUpdate=U,C.rectAreaLights.needsUpdate=U,C.hemisphereLights.needsUpdate=U}function Fy(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(C,U,G){const W=ye.get(C);W.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),ye.get(C.texture).__webglTexture=U,ye.get(C.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:G,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,U){const G=ye.get(C);G.__webglFramebuffer=U,G.__useDefaultFramebuffer=U===void 0};const Oy=L.createFramebuffer();this.setRenderTarget=function(C,U=0,G=0){b=C,w=U,A=G;let W=!0,O=null,ie=!1,fe=!1;if(C){const ge=ye.get(C);if(ge.__useDefaultFramebuffer!==void 0)Se.bindFramebuffer(L.FRAMEBUFFER,null),W=!1;else if(ge.__webglFramebuffer===void 0)ze.setupRenderTarget(C);else if(ge.__hasExternalTextures)ze.rebindTextures(C,ye.get(C.texture).__webglTexture,ye.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const Ce=C.depthTexture;if(ge.__boundDepthTexture!==Ce){if(Ce!==null&&ye.has(Ce)&&(C.width!==Ce.image.width||C.height!==Ce.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ze.setupDepthRenderbuffer(C)}}const Pe=C.texture;(Pe.isData3DTexture||Pe.isDataArrayTexture||Pe.isCompressedArrayTexture)&&(fe=!0);const Ie=ye.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Ie[U])?O=Ie[U][G]:O=Ie[U],ie=!0):C.samples>0&&ze.useMultisampledRTT(C)===!1?O=ye.get(C).__webglMultisampledFramebuffer:Array.isArray(Ie)?O=Ie[G]:O=Ie,P.copy(C.viewport),F.copy(C.scissor),z=C.scissorTest}else P.copy(ae).multiplyScalar(I).floor(),F.copy(me).multiplyScalar(I).floor(),z=We;if(G!==0&&(O=Oy),Se.bindFramebuffer(L.FRAMEBUFFER,O)&&W&&Se.drawBuffers(C,O),Se.viewport(P),Se.scissor(F),Se.setScissorTest(z),ie){const ge=ye.get(C.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+U,ge.__webglTexture,G)}else if(fe){const ge=U;for(let Pe=0;Pe<C.textures.length;Pe++){const Ie=ye.get(C.textures[Pe]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Pe,Ie.__webglTexture,G,ge)}}else if(C!==null&&G!==0){const ge=ye.get(C.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,ge.__webglTexture,G)}M=-1},this.readRenderTargetPixels=function(C,U,G,W,O,ie,fe,Ee=0){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ge=ye.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&fe!==void 0&&(ge=ge[fe]),ge){Se.bindFramebuffer(L.FRAMEBUFFER,ge);try{const Pe=C.textures[Ee],Ie=Pe.format,Ce=Pe.type;if(!be.textureFormatReadable(Ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!be.textureTypeReadable(Ce)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=C.width-W&&G>=0&&G<=C.height-O&&(C.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Ee),L.readPixels(U,G,W,O,Ae.convert(Ie),Ae.convert(Ce),ie))}finally{const Pe=b!==null?ye.get(b).__webglFramebuffer:null;Se.bindFramebuffer(L.FRAMEBUFFER,Pe)}}},this.readRenderTargetPixelsAsync=async function(C,U,G,W,O,ie,fe,Ee=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ge=ye.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&fe!==void 0&&(ge=ge[fe]),ge)if(U>=0&&U<=C.width-W&&G>=0&&G<=C.height-O){Se.bindFramebuffer(L.FRAMEBUFFER,ge);const Pe=C.textures[Ee],Ie=Pe.format,Ce=Pe.type;if(!be.textureFormatReadable(Ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!be.textureTypeReadable(Ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const je=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,je),L.bufferData(L.PIXEL_PACK_BUFFER,ie.byteLength,L.STREAM_READ),C.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Ee),L.readPixels(U,G,W,O,Ae.convert(Ie),Ae.convert(Ce),0);const nt=b!==null?ye.get(b).__webglFramebuffer:null;Se.bindFramebuffer(L.FRAMEBUFFER,nt);const Et=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await C1(L,Et,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,je),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,ie),L.deleteBuffer(je),L.deleteSync(Et),ie}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,U=null,G=0){const W=Math.pow(2,-G),O=Math.floor(C.image.width*W),ie=Math.floor(C.image.height*W),fe=U!==null?U.x:0,Ee=U!==null?U.y:0;ze.setTexture2D(C,0),L.copyTexSubImage2D(L.TEXTURE_2D,G,0,0,fe,Ee,O,ie),Se.unbindTexture()};const ky=L.createFramebuffer(),zy=L.createFramebuffer();this.copyTextureToTexture=function(C,U,G=null,W=null,O=0,ie=null){ie===null&&(O!==0?(nl("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ie=O,O=0):ie=0);let fe,Ee,ge,Pe,Ie,Ce,je,nt,Et;const ct=C.isCompressedTexture?C.mipmaps[ie]:C.image;if(G!==null)fe=G.max.x-G.min.x,Ee=G.max.y-G.min.y,ge=G.isBox3?G.max.z-G.min.z:1,Pe=G.min.x,Ie=G.min.y,Ce=G.isBox3?G.min.z:0;else{const Xn=Math.pow(2,-O);fe=Math.floor(ct.width*Xn),Ee=Math.floor(ct.height*Xn),C.isDataArrayTexture?ge=ct.depth:C.isData3DTexture?ge=Math.floor(ct.depth*Xn):ge=1,Pe=0,Ie=0,Ce=0}W!==null?(je=W.x,nt=W.y,Et=W.z):(je=0,nt=0,Et=0);const rt=Ae.convert(U.format),Re=Ae.convert(U.type);let _t;U.isData3DTexture?(ze.setTexture3D(U,0),_t=L.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(ze.setTexture2DArray(U,0),_t=L.TEXTURE_2D_ARRAY):(ze.setTexture2D(U,0),_t=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,U.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,U.unpackAlignment);const Ze=L.getParameter(L.UNPACK_ROW_LENGTH),Cn=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Ls=L.getParameter(L.UNPACK_SKIP_PIXELS),Rn=L.getParameter(L.UNPACK_SKIP_ROWS),jo=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,ct.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ct.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Pe),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ie),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Ce);const gt=C.isDataArrayTexture||C.isData3DTexture,Wn=U.isDataArrayTexture||U.isData3DTexture;if(C.isDepthTexture){const Xn=ye.get(C),rn=ye.get(U),dn=ye.get(Xn.__renderTarget),Ic=ye.get(rn.__renderTarget);Se.bindFramebuffer(L.READ_FRAMEBUFFER,dn.__webglFramebuffer),Se.bindFramebuffer(L.DRAW_FRAMEBUFFER,Ic.__webglFramebuffer);for(let Yr=0;Yr<ge;Yr++)gt&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,ye.get(C).__webglTexture,O,Ce+Yr),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,ye.get(U).__webglTexture,ie,Et+Yr)),L.blitFramebuffer(Pe,Ie,fe,Ee,je,nt,fe,Ee,L.DEPTH_BUFFER_BIT,L.NEAREST);Se.bindFramebuffer(L.READ_FRAMEBUFFER,null),Se.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(O!==0||C.isRenderTargetTexture||ye.has(C)){const Xn=ye.get(C),rn=ye.get(U);Se.bindFramebuffer(L.READ_FRAMEBUFFER,ky),Se.bindFramebuffer(L.DRAW_FRAMEBUFFER,zy);for(let dn=0;dn<ge;dn++)gt?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Xn.__webglTexture,O,Ce+dn):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Xn.__webglTexture,O),Wn?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,rn.__webglTexture,ie,Et+dn):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,rn.__webglTexture,ie),O!==0?L.blitFramebuffer(Pe,Ie,fe,Ee,je,nt,fe,Ee,L.COLOR_BUFFER_BIT,L.NEAREST):Wn?L.copyTexSubImage3D(_t,ie,je,nt,Et+dn,Pe,Ie,fe,Ee):L.copyTexSubImage2D(_t,ie,je,nt,Pe,Ie,fe,Ee);Se.bindFramebuffer(L.READ_FRAMEBUFFER,null),Se.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else Wn?C.isDataTexture||C.isData3DTexture?L.texSubImage3D(_t,ie,je,nt,Et,fe,Ee,ge,rt,Re,ct.data):U.isCompressedArrayTexture?L.compressedTexSubImage3D(_t,ie,je,nt,Et,fe,Ee,ge,rt,ct.data):L.texSubImage3D(_t,ie,je,nt,Et,fe,Ee,ge,rt,Re,ct):C.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,ie,je,nt,fe,Ee,rt,Re,ct.data):C.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,ie,je,nt,ct.width,ct.height,rt,ct.data):L.texSubImage2D(L.TEXTURE_2D,ie,je,nt,fe,Ee,rt,Re,ct);L.pixelStorei(L.UNPACK_ROW_LENGTH,Ze),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Cn),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Ls),L.pixelStorei(L.UNPACK_SKIP_ROWS,Rn),L.pixelStorei(L.UNPACK_SKIP_IMAGES,jo),ie===0&&U.generateMipmaps&&L.generateMipmap(_t),Se.unbindTexture()},this.initRenderTarget=function(C){ye.get(C).__webglFramebuffer===void 0&&ze.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?ze.setTextureCube(C,0):C.isData3DTexture?ze.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?ze.setTexture2DArray(C,0):ze.setTexture2D(C,0),Se.unbindTexture()},this.resetState=function(){w=0,A=0,b=null,Se.reset(),ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return bi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Qe._getDrawingBufferColorSpace(e),t.unpackColorSpace=Qe._getUnpackColorSpace()}}function Yb({mouseForce:n=20,cursorSize:e=100,isViscous:t=!1,viscous:i=30,iterationsViscous:r=32,iterationsPoisson:s=32,dt:o=.014,BFECC:a=!0,resolution:l=.5,isBounce:u=!1,colors:c=["#5227FF","#FF9FFC","#B19EEF"],style:d={},className:h="",autoDemo:p=!0,autoSpeed:v=.5,autoIntensity:m=2.2,takeoverDuration:_=.25,autoResumeDelay:f=1e3,autoRampDuration:x=.6}){const S=Dt.useRef(null),y=Dt.useRef(null),E=Dt.useRef(null),w=Dt.useRef(null),A=Dt.useRef(null),b=Dt.useRef(!0),M=Dt.useRef(null);return Dt.useEffect(()=>{if(!S.current)return;function T(R){let g;Array.isArray(R)&&R.length>0?R.length===1?g=[R[0],R[0]]:g=R:g=["#ffffff","#ffffff"];const D=g.length,k=new Uint8Array(D*4);for(let H=0;H<D;H++){const he=new Je(g[H]);k[H*4+0]=Math.round(he.r*255),k[H*4+1]=Math.round(he.g*255),k[H*4+2]=Math.round(he.b*255),k[H*4+3]=255}const Y=new Q1(k,D,1,ti);return Y.magFilter=_n,Y.minFilter=_n,Y.wrapS=mi,Y.wrapT=mi,Y.generateMipmaps=!1,Y.needsUpdate=!0,Y}const P=T(c),F=new wt(0,0,0,0);class z{constructor(){this.width=0,this.height=0,this.aspect=1,this.pixelRatio=1,this.isMobile=!1,this.breakpoint=768,this.fboWidth=null,this.fboHeight=null,this.time=0,this.delta=0,this.container=null,this.renderer=null,this.clock=null}init(g){this.container=g,this.pixelRatio=Math.min(window.devicePixelRatio||1,2),this.resize(),this.renderer=new jb({antialias:!0,alpha:!0}),this.renderer.autoClear=!1,this.renderer.setClearColor(new Je(0),0),this.renderer.setPixelRatio(this.pixelRatio),this.renderer.setSize(this.width,this.height),this.renderer.domElement.style.width="100%",this.renderer.domElement.style.height="100%",this.renderer.domElement.style.display="block",this.clock=new uw,this.clock.start()}resize(){if(!this.container)return;const g=this.container.getBoundingClientRect();this.width=Math.max(1,Math.floor(g.width)),this.height=Math.max(1,Math.floor(g.height)),this.aspect=this.width/this.height,this.renderer&&this.renderer.setSize(this.width,this.height,!1)}update(){this.delta=this.clock.getDelta(),this.time+=this.delta}}const X=new z;class j{constructor(){this.mouseMoved=!1,this.coords=new ke,this.coords_old=new ke,this.diff=new ke,this.timer=null,this.container=null,this.docTarget=null,this.listenerTarget=null,this.isHoverInside=!1,this.hasUserControl=!1,this.isAutoActive=!1,this.autoIntensity=2,this.takeoverActive=!1,this.takeoverStartTime=0,this.takeoverDuration=.25,this.takeoverFrom=new ke,this.takeoverTo=new ke,this.onInteract=null,this._onMouseMove=this.onDocumentMouseMove.bind(this),this._onTouchStart=this.onDocumentTouchStart.bind(this),this._onTouchMove=this.onDocumentTouchMove.bind(this),this._onTouchEnd=this.onTouchEnd.bind(this),this._onDocumentLeave=this.onDocumentLeave.bind(this)}init(g){this.container=g,this.docTarget=g.ownerDocument||null;const D=this.docTarget&&this.docTarget.defaultView||(typeof window<"u"?window:null);D&&(this.listenerTarget=D,this.listenerTarget.addEventListener("mousemove",this._onMouseMove),this.listenerTarget.addEventListener("touchstart",this._onTouchStart,{passive:!0}),this.listenerTarget.addEventListener("touchmove",this._onTouchMove,{passive:!0}),this.listenerTarget.addEventListener("touchend",this._onTouchEnd),this.docTarget&&this.docTarget.addEventListener("mouseleave",this._onDocumentLeave))}dispose(){this.listenerTarget&&(this.listenerTarget.removeEventListener("mousemove",this._onMouseMove),this.listenerTarget.removeEventListener("touchstart",this._onTouchStart),this.listenerTarget.removeEventListener("touchmove",this._onTouchMove),this.listenerTarget.removeEventListener("touchend",this._onTouchEnd)),this.docTarget&&this.docTarget.removeEventListener("mouseleave",this._onDocumentLeave),this.listenerTarget=null,this.docTarget=null,this.container=null}isPointInside(g,D){if(!this.container)return!1;const k=this.container.getBoundingClientRect();return k.width===0||k.height===0?!1:g>=k.left&&g<=k.right&&D>=k.top&&D<=k.bottom}updateHoverState(g,D){return this.isHoverInside=this.isPointInside(g,D),this.isHoverInside}setCoords(g,D){if(!this.container)return;this.timer&&window.clearTimeout(this.timer);const k=this.container.getBoundingClientRect();if(k.width===0||k.height===0)return;const Y=(g-k.left)/k.width,H=(D-k.top)/k.height;this.coords.set(Y*2-1,-(H*2-1)),this.mouseMoved=!0,this.timer=window.setTimeout(()=>{this.mouseMoved=!1},100)}setNormalized(g,D){this.coords.set(g,D),this.mouseMoved=!0}onDocumentMouseMove(g){if(this.updateHoverState(g.clientX,g.clientY)){if(this.onInteract&&this.onInteract(),this.isAutoActive&&!this.hasUserControl&&!this.takeoverActive){if(!this.container)return;const D=this.container.getBoundingClientRect();if(D.width===0||D.height===0)return;const k=(g.clientX-D.left)/D.width,Y=(g.clientY-D.top)/D.height;this.takeoverFrom.copy(this.coords),this.takeoverTo.set(k*2-1,-(Y*2-1)),this.takeoverStartTime=performance.now(),this.takeoverActive=!0,this.hasUserControl=!0,this.isAutoActive=!1;return}this.setCoords(g.clientX,g.clientY),this.hasUserControl=!0}}onDocumentTouchStart(g){if(g.touches.length!==1)return;const D=g.touches[0];this.updateHoverState(D.clientX,D.clientY)&&(this.onInteract&&this.onInteract(),this.setCoords(D.clientX,D.clientY),this.hasUserControl=!0)}onDocumentTouchMove(g){if(g.touches.length!==1)return;const D=g.touches[0];this.updateHoverState(D.clientX,D.clientY)&&(this.onInteract&&this.onInteract(),this.setCoords(D.clientX,D.clientY))}onTouchEnd(){this.isHoverInside=!1}onDocumentLeave(){this.isHoverInside=!1}update(){if(this.takeoverActive){const g=(performance.now()-this.takeoverStartTime)/(this.takeoverDuration*1e3);if(g>=1)this.takeoverActive=!1,this.coords.copy(this.takeoverTo),this.coords_old.copy(this.coords),this.diff.set(0,0);else{const D=g*g*(3-2*g);this.coords.copy(this.takeoverFrom).lerp(this.takeoverTo,D)}}this.diff.subVectors(this.coords,this.coords_old),this.coords_old.copy(this.coords),this.coords_old.x===0&&this.coords_old.y===0&&this.diff.set(0,0),this.isAutoActive&&!this.takeoverActive&&this.diff.multiplyScalar(this.autoIntensity)}}const B=new j;class ${constructor(g,D,k){this.mouse=g,this.manager=D,this.enabled=k.enabled,this.speed=k.speed,this.resumeDelay=k.resumeDelay||3e3,this.rampDurationMs=(k.rampDuration||0)*1e3,this.active=!1,this.current=new ke(0,0),this.target=new ke,this.lastTime=performance.now(),this.activationTime=0,this.margin=.2,this._tmpDir=new ke,this.pickNewTarget()}pickNewTarget(){const g=Math.random;this.target.set((g()*2-1)*(1-this.margin),(g()*2-1)*(1-this.margin))}forceStop(){this.active=!1,this.mouse.isAutoActive=!1}update(){if(!this.enabled)return;const g=performance.now();if(g-this.manager.lastUserInteraction<this.resumeDelay){this.active&&this.forceStop();return}if(this.mouse.isHoverInside){this.active&&this.forceStop();return}if(this.active||(this.active=!0,this.current.copy(this.mouse.coords),this.lastTime=g,this.activationTime=g),!this.active)return;this.mouse.isAutoActive=!0;let k=(g-this.lastTime)/1e3;this.lastTime=g,k>.2&&(k=.016);const Y=this._tmpDir.subVectors(this.target,this.current),H=Y.length();if(H<.01){this.pickNewTarget();return}Y.normalize();let he=1;if(this.rampDurationMs>0){const Me=Math.min(1,(g-this.activationTime)/this.rampDurationMs);he=Me*Me*(3-2*Me)}const oe=this.speed*k*he,ve=Math.min(oe,H);this.current.addScaledVector(Y,ve),this.mouse.setNormalized(this.current.x,this.current.y)}}const I=`
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
`,q=`
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
`,Q=`
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
`,ae=`
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
`,me=`
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
`,We=`
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
`,Ne=`
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
`,Ue=`
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
`,K=`
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
`,ee=`
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
`;class pe{constructor(g){var D;this.props=g||{},this.uniforms=(D=this.props.material)==null?void 0:D.uniforms,this.scene=null,this.camera=null,this.material=null,this.geometry=null,this.plane=null}init(){this.scene=new pg,this.camera=new ac,this.uniforms&&(this.material=new tu(this.props.material),this.geometry=new Ss(2,2),this.plane=new ni(this.geometry,this.material),this.scene.add(this.plane))}update(){X.renderer.setRenderTarget(this.props.output||null),X.renderer.render(this.scene,this.camera),X.renderer.setRenderTarget(null)}}class Le extends pe{constructor(g){super({material:{vertexShader:I,fragmentShader:ae,uniforms:{boundarySpace:{value:g.cellScale},px:{value:g.cellScale},fboSize:{value:g.fboSize},velocity:{value:g.src.texture},dt:{value:g.dt},isBFECC:{value:!0}}},output:g.dst}),this.uniforms=this.props.material.uniforms,this.init()}init(){super.init(),this.createBoundary()}createBoundary(){const g=new or,D=new Float32Array([-1,-1,0,-1,1,0,-1,1,0,1,1,0,1,1,0,1,-1,0,1,-1,0,-1,-1,0]);g.setAttribute("position",new vi(D,3));const k=new tu({vertexShader:q,fragmentShader:ae,uniforms:this.uniforms});this.line=new rw(g,k),this.scene.add(this.line)}update({dt:g,isBounce:D,BFECC:k}){this.uniforms.dt.value=g,this.line.visible=D,this.uniforms.isBFECC.value=k,super.update()}}class we extends pe{constructor(g){super({output:g.dst}),this.init(g)}init(g){super.init();const D=new Ss(1,1),k=new tu({vertexShader:Q,fragmentShader:Ne,blending:eh,depthWrite:!1,uniforms:{px:{value:g.cellScale},force:{value:new ke(0,0)},center:{value:new ke(0,0)},scale:{value:new ke(g.cursor_size,g.cursor_size)}}});this.mouse=new ni(D,k),this.scene.add(this.mouse)}update(g){const D=B.diff.x/2*g.mouse_force,k=B.diff.y/2*g.mouse_force,Y=g.cursor_size*g.cellScale.x,H=g.cursor_size*g.cellScale.y,he=Math.min(Math.max(B.coords.x,-1+Y+g.cellScale.x*2),1-Y-g.cellScale.x*2),oe=Math.min(Math.max(B.coords.y,-1+H+g.cellScale.y*2),1-H-g.cellScale.y*2),ve=this.mouse.material.uniforms;ve.force.value.set(D,k),ve.center.value.set(he,oe),ve.scale.value.set(g.cursor_size,g.cursor_size),super.update()}}class Xe extends pe{constructor(g){super({material:{vertexShader:I,fragmentShader:ee,uniforms:{boundarySpace:{value:g.boundarySpace},velocity:{value:g.src.texture},velocity_new:{value:g.dst_.texture},v:{value:g.viscous},px:{value:g.cellScale},dt:{value:g.dt}}},output:g.dst,output0:g.dst_,output1:g.dst}),this.init()}update({viscous:g,iterations:D,dt:k}){let Y,H;this.uniforms.v.value=g;for(let he=0;he<D;he++)he%2===0?(Y=this.props.output0,H=this.props.output1):(Y=this.props.output1,H=this.props.output0),this.uniforms.velocity_new.value=Y.texture,this.props.output=H,this.uniforms.dt.value=k,super.update();return H}}class Bt extends pe{constructor(g){super({material:{vertexShader:I,fragmentShader:We,uniforms:{boundarySpace:{value:g.boundarySpace},velocity:{value:g.src.texture},px:{value:g.cellScale},dt:{value:g.dt}}},output:g.dst}),this.init()}update({vel:g}){this.uniforms.velocity.value=g.texture,super.update()}}class L extends pe{constructor(g){super({material:{vertexShader:I,fragmentShader:Ue,uniforms:{boundarySpace:{value:g.boundarySpace},pressure:{value:g.dst_.texture},divergence:{value:g.src.texture},px:{value:g.cellScale}}},output:g.dst,output0:g.dst_,output1:g.dst}),this.init()}update({iterations:g}){let D,k;for(let Y=0;Y<g;Y++)Y%2===0?(D=this.props.output0,k=this.props.output1):(D=this.props.output1,k=this.props.output0),this.uniforms.pressure.value=D.texture,this.props.output=k,super.update();return k}}class at extends pe{constructor(g){super({material:{vertexShader:I,fragmentShader:K,uniforms:{boundarySpace:{value:g.boundarySpace},pressure:{value:g.src_p.texture},velocity:{value:g.src_v.texture},px:{value:g.cellScale},dt:{value:g.dt}}},output:g.dst}),this.init()}update({vel:g,pressure:D}){this.uniforms.velocity.value=g.texture,this.uniforms.pressure.value=D.texture,super.update()}}class Fe{constructor(g){this.options={iterations_poisson:32,iterations_viscous:32,mouse_force:20,resolution:.5,cursor_size:100,viscous:30,isBounce:!1,dt:.014,isViscous:!1,BFECC:!0,...g},this.fbos={vel_0:null,vel_1:null,vel_viscous0:null,vel_viscous1:null,div:null,pressure_0:null,pressure_1:null},this.fboSize=new ke,this.cellScale=new ke,this.boundarySpace=new ke,this.init()}init(){this.calcSize(),this.createAllFBO(),this.createShaderPass()}getFloatType(){return/(iPad|iPhone|iPod)/i.test(navigator.userAgent)?Go:Ri}createAllFBO(){const D={type:this.getFloatType(),depthBuffer:!1,stencilBuffer:!1,minFilter:_n,magFilter:_n,wrapS:mi,wrapT:mi};for(let k in this.fbos)this.fbos[k]=new Vr(this.fboSize.x,this.fboSize.y,D)}createShaderPass(){this.advection=new Le({cellScale:this.cellScale,fboSize:this.fboSize,dt:this.options.dt,src:this.fbos.vel_0,dst:this.fbos.vel_1}),this.externalForce=new we({cellScale:this.cellScale,cursor_size:this.options.cursor_size,dst:this.fbos.vel_1}),this.viscous=new Xe({cellScale:this.cellScale,boundarySpace:this.boundarySpace,viscous:this.options.viscous,src:this.fbos.vel_1,dst:this.fbos.vel_viscous1,dst_:this.fbos.vel_viscous0,dt:this.options.dt}),this.divergence=new Bt({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src:this.fbos.vel_viscous0,dst:this.fbos.div,dt:this.options.dt}),this.poisson=new L({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src:this.fbos.div,dst:this.fbos.pressure_1,dst_:this.fbos.pressure_0}),this.pressure=new at({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src_p:this.fbos.pressure_0,src_v:this.fbos.vel_viscous0,dst:this.fbos.vel_0,dt:this.options.dt})}calcSize(){const g=Math.max(1,Math.round(this.options.resolution*X.width)),D=Math.max(1,Math.round(this.options.resolution*X.height)),k=1/g,Y=1/D;this.cellScale.set(k,Y),this.fboSize.set(g,D)}resize(){this.calcSize();for(let g in this.fbos)this.fbos[g].setSize(this.fboSize.x,this.fboSize.y)}update(){this.options.isBounce?this.boundarySpace.set(0,0):this.boundarySpace.copy(this.cellScale),this.advection.update({dt:this.options.dt,isBounce:this.options.isBounce,BFECC:this.options.BFECC}),this.externalForce.update({cursor_size:this.options.cursor_size,mouse_force:this.options.mouse_force,cellScale:this.cellScale});let g=this.fbos.vel_1;this.options.isViscous&&(g=this.viscous.update({viscous:this.options.viscous,iterations:this.options.iterations_viscous,dt:this.options.dt})),this.divergence.update({vel:g});const D=this.poisson.update({iterations:this.options.iterations_poisson});this.pressure.update({vel:g,pressure:D})}}class be{constructor(){this.init()}init(){this.simulation=new Fe,this.scene=new pg,this.camera=new ac,this.output=new ni(new Ss(2,2),new tu({vertexShader:I,fragmentShader:me,transparent:!0,depthWrite:!1,uniforms:{velocity:{value:this.simulation.fbos.vel_0.texture},boundarySpace:{value:new ke},palette:{value:P},bgColor:{value:F}}})),this.scene.add(this.output)}addScene(g){this.scene.add(g)}resize(){this.simulation.resize()}render(){X.renderer.setRenderTarget(null),X.renderer.render(this.scene,this.camera)}update(){this.simulation.update(),this.render()}}class Se{constructor(g){this.props=g,X.init(g.$wrapper),B.init(g.$wrapper),B.autoIntensity=g.autoIntensity,B.takeoverDuration=g.takeoverDuration,this.lastUserInteraction=performance.now(),B.onInteract=()=>{this.lastUserInteraction=performance.now(),this.autoDriver&&this.autoDriver.forceStop()},this.autoDriver=new $(B,this,{enabled:g.autoDemo,speed:g.autoSpeed,resumeDelay:g.autoResumeDelay,rampDuration:g.autoRampDuration}),this.init(),this._loop=this.loop.bind(this),this._resize=this.resize.bind(this),window.addEventListener("resize",this._resize),this._onVisibility=()=>{document.hidden?this.pause():b.current&&this.start()},document.addEventListener("visibilitychange",this._onVisibility),this.running=!1}init(){this.props.$wrapper.prepend(X.renderer.domElement),this.output=new be}resize(){X.resize(),this.output.resize()}render(){this.autoDriver&&this.autoDriver.update(),B.update(),X.update(),this.output.update()}loop(){this.running&&(this.render(),w.current=requestAnimationFrame(this._loop))}start(){this.running||(this.running=!0,this._loop())}pause(){this.running=!1,w.current&&(cancelAnimationFrame(w.current),w.current=null)}dispose(){try{if(window.removeEventListener("resize",this._resize),document.removeEventListener("visibilitychange",this._onVisibility),B.dispose(),X.renderer){const g=X.renderer.domElement;g&&g.parentNode&&g.parentNode.removeChild(g),X.renderer.dispose()}}catch{}}}const Ke=S.current;Ke.style.position=Ke.style.position||"relative",Ke.style.overflow=Ke.style.overflow||"hidden";const ye=new Se({$wrapper:Ke,autoDemo:p,autoSpeed:v,autoIntensity:m,takeoverDuration:_,autoResumeDelay:f,autoRampDuration:x});y.current=ye,(()=>{var D;if(!y.current)return;const R=(D=y.current.output)==null?void 0:D.simulation;if(!R)return;const g=R.options.resolution;Object.assign(R.options,{mouse_force:n,cursor_size:e,isViscous:t,viscous:i,iterations_viscous:r,iterations_poisson:s,dt:o,BFECC:a,resolution:l,isBounce:u}),l!==g&&R.resize()})(),ye.start();const Ct=new IntersectionObserver(R=>{const g=R[0],D=g.isIntersecting&&g.intersectionRatio>0;b.current=D,y.current&&(D&&!document.hidden?y.current.start():y.current.pause())},{threshold:[0,.01,.1]});Ct.observe(Ke),A.current=Ct;const ht=new ResizeObserver(()=>{y.current&&(M.current&&cancelAnimationFrame(M.current),M.current=requestAnimationFrame(()=>{y.current&&y.current.resize()}))});return ht.observe(Ke),E.current=ht,()=>{if(w.current&&cancelAnimationFrame(w.current),E.current)try{E.current.disconnect()}catch{}if(A.current)try{A.current.disconnect()}catch{}y.current&&y.current.dispose(),y.current=null}},[a,e,o,u,t,s,r,n,l,i,c,p,v,m,_,f,x]),Dt.useEffect(()=>{var z;const T=y.current;if(!T)return;const P=(z=T.output)==null?void 0:z.simulation;if(!P)return;const F=P.options.resolution;Object.assign(P.options,{mouse_force:n,cursor_size:e,isViscous:t,viscous:i,iterations_viscous:r,iterations_poisson:s,dt:o,BFECC:a,resolution:l,isBounce:u}),T.autoDriver&&(T.autoDriver.enabled=p,T.autoDriver.speed=v,T.autoDriver.resumeDelay=f,T.autoDriver.rampDurationMs=x*1e3,T.autoDriver.mouse&&(T.autoDriver.mouse.autoIntensity=m,T.autoDriver.mouse.takeoverDuration=_)),l!==F&&P.resize()},[n,e,t,i,r,s,o,a,l,u,p,v,m,_,f,x]),Z.jsx("div",{ref:S,className:`w-full h-full relative overflow-hidden ${h||""}`,style:d})}const qb="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYwIiBoZWlnaHQ9IjMyIiB2aWV3Qm94PSIwIDAgMTYwIDMyIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDx0ZXh0IHg9IjAiIHk9IjI0IiBmb250LWZhbWlseT0ic3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE4IiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSIjNTIyN0ZGIiBsZXR0ZXItc3BhY2luZz0iLTAuNSI+CiAgICBzZWJrdWNlcmEuZGV2CiAgPC90ZXh0Pgo8L3N2Zz4K";function $b(){const n=[{label:"About",bgColor:"#1a1a1a",textColor:"#fff",links:[{label:"My Story",href:"#about",ariaLabel:"About me"},{label:"Skills",href:"#skills",ariaLabel:"My skills"}]},{label:"Projects",bgColor:"#2d1b3d",textColor:"#fff",links:[{label:"All Projects",href:"#projects",ariaLabel:"View all projects"},{label:"GitHub",href:"https://github.com/Rektoooooo",ariaLabel:"GitHub profile"}]},{label:"Contact",bgColor:"#1a1a2e",textColor:"#fff",links:[{label:"Email",href:"mailto:sebastian.kucera@icloud.com",ariaLabel:"Email me"},{label:"LinkedIn",href:"https://www.linkedin.com/in/sebastian-kucera-31719b1b0/",ariaLabel:"LinkedIn profile"}]}];return Z.jsxs(Z.Fragment,{children:[Z.jsx("div",{style:{position:"fixed",top:0,left:0,width:"100vw",height:"100vh",zIndex:0},children:Z.jsx(Yb,{colors:["#5227FF","#FF9FFC","#B19EEF"],mouseForce:20,cursorSize:100,isViscous:!1,viscous:30,iterationsViscous:32,iterationsPoisson:32,resolution:.5,isBounce:!1,autoDemo:!0,autoSpeed:.5,autoIntensity:2.2,takeoverDuration:.25,autoResumeDelay:3e3,autoRampDuration:.6})}),Z.jsx(FT,{logo:qb,logoAlt:"sebkucera.dev",items:n,baseColor:"rgba(0, 0, 0, 0.95)",menuColor:"#fff",buttonBgColor:"#5227FF",buttonTextColor:"#fff",ease:"power3.out"}),Z.jsxs("div",{className:"relative min-h-screen text-white",style:{position:"relative",zIndex:1},children:[Z.jsxs("main",{id:"top",className:"mx-auto max-w-6xl px-4 md:px-6",children:[Z.jsx("section",{className:"pt-20 md:pt-28 pb-14",children:Z.jsxs("div",{className:"grid items-center gap-10 md:grid-cols-2",children:[Z.jsxs("div",{children:[Z.jsx("h1",{className:"text-4xl/tight md:text-5xl/tight font-bold tracking-tight",children:"Sebastian Kučera"}),Z.jsx("p",{className:"mt-3 text-lg",children:"iOS Developer • Swift / SwiftUI • Student in Prague"}),Z.jsxs("div",{className:"mt-8 flex items-center gap-3",children:[Z.jsx("a",{href:"#projects",className:"inline-flex items-center rounded-2xl px-5 py-3 bg-zinc-900 text-white hover:bg-zinc-800 transition",children:"View Projects"}),Z.jsx("a",{href:"#contact",className:"inline-flex items-center px-5 py-3 hover:text-zinc-400 transition",children:"Contact"})]})]}),Z.jsxs("div",{className:"content-center flex flex-col items-center",children:[Z.jsxs("div",{className:"grid w-full gap-4 md:grid-cols-2 max-w-sm sm:max-w-md md:max-w-2xl",children:[Z.jsx("img",{src:"/images/main-portrait.png",alt:"Main app screen",className:"block w-56 sm:w-64 md:w-full h-auto mx-auto rounded-xl",loading:"lazy"}),Z.jsx("img",{src:"/images/settings-portrait.png",alt:"Settings screen",className:"block w-56 sm:w-64 md:w-full h-auto mx-auto rounded-xl",loading:"lazy"})]}),Z.jsx("div",{className:"mt-6 text-center w-full max-w-sm sm:max-w-md md:max-w-2xl",children:Z.jsx("p",{className:"text-sm",children:"Currently building a strength-training app in SwiftUI to track progress efficiently."})})]})]})}),Z.jsx("section",{id:"about",className:"py-14 border-t border-zinc-200",children:Z.jsxs("div",{className:"max-w-3xl",children:[Z.jsx("h2",{className:"text-2xl font-semibold tracking-tight",children:"About"}),Z.jsx("p",{className:"mt-4 leading-relaxed",children:"Hi, I'm Sebastian - a student of Software engineering at Unicorn University and an iOS developer focused on Swift & SwiftUI. I love working on ambitious projects like my fitness app, and I'm always up for learning, collaborating, and shipping clean, thoughtful interfaces."}),Z.jsx("p",{className:"mt-4 leading-relaxed",children:"Outside coding I'm into training and staying active. If you're interested in working together, feel free to reach out."})]})}),Z.jsxs("section",{id:"skills",className:"py-14 border-t border-zinc-200",children:[Z.jsx("h2",{className:"text-2xl font-semibold tracking-tight",children:"Skills"}),Z.jsxs("div",{className:"mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",children:[Z.jsxs("article",{className:"p-5 hover:shadow-sm transition",children:[Z.jsx("h3",{className:"font-bold",children:"Swift / SwiftUI"}),Z.jsx("p",{className:"mt-2 text-sm",children:"Modern iOS development with declarative and imperative UI stacks."})]}),Z.jsxs("article",{className:"p-5 hover:shadow-sm transition",children:[Z.jsx("h3",{className:"font-bold",children:"Java"}),Z.jsx("p",{className:"mt-2 text-sm",children:"Object‑oriented foundations, APIs, and tooling."})]}),Z.jsxs("article",{className:"p-5 hover:shadow-sm transition",children:[Z.jsx("h3",{className:"font-bold",children:"JavaScript / Web"}),Z.jsx("p",{className:"mt-2 text-sm",children:"Interactive UIs, TailwindCSS, and lightweight tooling."})]}),Z.jsxs("article",{className:"p-5 hover:shadow-sm transition",children:[Z.jsx("h3",{className:"font-bold",children:"Design"}),Z.jsx("p",{className:"mt-2 text-sm",children:"Minimal, accessible interfaces with focus on typography and spacing."})]})]})]}),Z.jsxs("section",{id:"projects",className:"py-14 border-t border-zinc-200",children:[Z.jsxs("div",{className:"flex items-end justify-between gap-4",children:[Z.jsx("h2",{className:"text-2xl font-semibold tracking-tight",children:"Projects"}),Z.jsx("a",{href:"https://github.com/Rektoooooo",target:"_blank",rel:"noopener noreferrer",className:"text-sm hover:text-zinc-400",children:"All on GitHub →"})]}),Z.jsxs("div",{className:"projects-grid",children:[Z.jsxs("a",{href:"https://sebkucera.dev/Fitness",target:"_blank",rel:"noopener noreferrer",className:"project-card",children:[Z.jsx("img",{src:"/images/App icons/LogoGymlyBlack%20copy.jpg",alt:"Fitness App",className:"app-icon"}),Z.jsxs("div",{className:"project-info",children:[Z.jsx("div",{className:"project-category",children:"Health & Fitness"}),Z.jsx("h3",{className:"project-title",children:"Fitness App"}),Z.jsx("p",{className:"project-description",children:"Track strength progress and optimize your workouts."}),Z.jsx("span",{className:"get-button",children:"VIEW"})]})]}),Z.jsxs("a",{href:"https://github.com/Rektoooooo/SwiftUIBattleShips/tree/main/Battleship-SwiftUI",target:"_blank",rel:"noopener noreferrer",className:"project-card",children:[Z.jsx("img",{src:"/images/App icons/Battle%20ships%20logo.png",alt:"BattleShips",className:"app-icon"}),Z.jsxs("div",{className:"project-info",children:[Z.jsx("div",{className:"project-category",children:"Games"}),Z.jsx("h3",{className:"project-title",children:"BattleShips"}),Z.jsx("p",{className:"project-description",children:"Classic strategy game with smart AI opponent."}),Z.jsx("span",{className:"get-button",children:"VIEW"})]})]}),Z.jsxs("a",{href:"https://apps.apple.com/us/app/fl-smart-id-thales/id1560687532",target:"_blank",rel:"noopener noreferrer",className:"project-card",children:[Z.jsx("img",{src:"/images/App icons/Smart%20id%20logo.png",alt:"Smart ID",className:"app-icon"}),Z.jsxs("div",{className:"project-info",children:[Z.jsx("div",{className:"project-category",children:"Utilities"}),Z.jsx("h3",{className:"project-title",children:"Smart ID Sample"}),Z.jsx("p",{className:"project-description",children:"Sample app showcasing Smart ID SDK integration."}),Z.jsx("span",{className:"get-button",children:"VIEW"})]})]}),Z.jsxs("a",{href:"https://github.com/Rektoooooo/Pushly",target:"_blank",rel:"noopener noreferrer",className:"project-card",children:[Z.jsx("img",{src:"/images/App icons/Puhsly%20logo.png",alt:"Pushly",className:"app-icon"}),Z.jsxs("div",{className:"project-info",children:[Z.jsx("div",{className:"project-category",children:"Health & Fitness"}),Z.jsx("h3",{className:"project-title",children:"Pushly"}),Z.jsx("p",{className:"project-description",children:"Friendly nudges to help you stay active."}),Z.jsx("span",{className:"get-button",children:"VIEW"})]})]}),Z.jsxs("a",{href:"https://github.com/Rektoooooo/Rick-Morty",target:"_blank",rel:"noopener noreferrer",className:"project-card",children:[Z.jsx("img",{src:"/images/App icons/Rick%20and%20morty.jpg",alt:"Rick & Morty",className:"app-icon"}),Z.jsxs("div",{className:"project-info",children:[Z.jsx("div",{className:"project-category",children:"Entertainment"}),Z.jsx("h3",{className:"project-title",children:"Rick & Morty API"}),Z.jsx("p",{className:"project-description",children:"SwiftUI app demonstrating modern API integration."}),Z.jsx("span",{className:"get-button",children:"VIEW"})]})]})]})]}),Z.jsxs("section",{id:"contact",className:"py-14 border-t border-zinc-200",children:[Z.jsx("h2",{className:"text-2xl font-semibold tracking-tight",children:"Contact"}),Z.jsxs("div",{className:"mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4",children:[Z.jsxs("a",{href:"mailto:sebastian.kucera@icloud.com",className:"p-5 hover:shadow-sm transition",children:[Z.jsx("h3",{className:"font-bold",children:"Email"}),Z.jsx("p",{className:"mt-2 text-sm text-zinc-400",children:"sebastian.kucera@icloud.com"})]}),Z.jsxs("a",{href:"https://www.linkedin.com/in/sebastian-kucera-31719b1b0/",target:"_blank",rel:"noopener noreferrer",className:"p-5 hover:shadow-sm transition",children:[Z.jsx("h3",{className:"font-bold",children:"LinkedIn"}),Z.jsx("p",{className:"mt-2 text-sm text-zinc-400",children:"Professional profile"})]}),Z.jsxs("a",{href:"https://github.com/Rektoooooo",target:"_blank",rel:"noopener noreferrer",className:"p-5 hover:shadow-sm transition",children:[Z.jsx("h3",{className:"font-bold",children:"GitHub"}),Z.jsx("p",{className:"mt-2 text-sm text-zinc-400",children:"Projects & code"})]}),Z.jsxs("a",{href:"https://www.instagram.com/seb.kuc/",target:"_blank",rel:"noopener noreferrer",className:"p-5 hover:shadow-sm transition",children:[Z.jsx("h3",{className:"font-bold",children:"Instagram"}),Z.jsx("p",{className:"mt-2 text-sm text-zinc-400",children:"Personal"})]})]})]})]}),Z.jsx("footer",{className:"border-t border-t-zinc-800 backdrop-blur supports-[backdrop-filter]:bg-black/70 bg-black/80",children:Z.jsxs("div",{className:"mx-auto max-w-6xl px-4 md:px-6 py-10 text-sm text-zinc-400 font-bold",children:[Z.jsx("p",{children:"© 2025 sebkucera.dev. All rights reserved."}),Z.jsxs("p",{className:"mt-2",children:["Connect on"," ",Z.jsx("a",{className:"underline decoration-zinc-300 hover:decoration-zinc-800",href:"https://www.linkedin.com/in/sebastian-kucera-31719b1b0/",target:"_blank",rel:"noopener noreferrer",children:"LinkedIn"})," ","and"," ",Z.jsx("a",{className:"underline decoration-zinc-300 hover:decoration-zinc-800",href:"https://github.com/Rektoooooo",target:"_blank",rel:"noopener noreferrer",children:"GitHub"}),"."]})]})})]})]})}nx(document.getElementById("root")).render(Z.jsx(Dt.StrictMode,{children:Z.jsx($b,{})}));
