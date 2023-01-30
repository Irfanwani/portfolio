(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function L0(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var ee={},P0={get exports(){return ee},set exports(n){ee=n}},pl={},ss={},R0={get exports(){return ss},set exports(n){ss=n}},Fe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Po=Symbol.for("react.element"),D0=Symbol.for("react.portal"),I0=Symbol.for("react.fragment"),N0=Symbol.for("react.strict_mode"),k0=Symbol.for("react.profiler"),z0=Symbol.for("react.provider"),F0=Symbol.for("react.context"),O0=Symbol.for("react.forward_ref"),U0=Symbol.for("react.suspense"),B0=Symbol.for("react.memo"),V0=Symbol.for("react.lazy"),fh=Symbol.iterator;function G0(n){return n===null||typeof n!="object"?null:(n=fh&&n[fh]||n["@@iterator"],typeof n=="function"?n:null)}var Up={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Bp=Object.assign,Vp={};function vs(n,e,t){this.props=n,this.context=e,this.refs=Vp,this.updater=t||Up}vs.prototype.isReactComponent={};vs.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};vs.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function Gp(){}Gp.prototype=vs.prototype;function tf(n,e,t){this.props=n,this.context=e,this.refs=Vp,this.updater=t||Up}var nf=tf.prototype=new Gp;nf.constructor=tf;Bp(nf,vs.prototype);nf.isPureReactComponent=!0;var hh=Array.isArray,Hp=Object.prototype.hasOwnProperty,rf={current:null},Wp={key:!0,ref:!0,__self:!0,__source:!0};function jp(n,e,t){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Hp.call(e,i)&&!Wp.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(n&&n.defaultProps)for(i in a=n.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Po,type:n,key:s,ref:o,props:r,_owner:rf.current}}function H0(n,e){return{$$typeof:Po,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function sf(n){return typeof n=="object"&&n!==null&&n.$$typeof===Po}function W0(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var dh=/\/+/g;function Ul(n,e){return typeof n=="object"&&n!==null&&n.key!=null?W0(""+n.key):e.toString(36)}function ba(n,e,t,i,r){var s=typeof n;(s==="undefined"||s==="boolean")&&(n=null);var o=!1;if(n===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(n.$$typeof){case Po:case D0:o=!0}}if(o)return o=n,r=r(o),n=i===""?"."+Ul(o,0):i,hh(r)?(t="",n!=null&&(t=n.replace(dh,"$&/")+"/"),ba(r,e,t,"",function(u){return u})):r!=null&&(sf(r)&&(r=H0(r,t+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(dh,"$&/")+"/")+n)),e.push(r)),1;if(o=0,i=i===""?".":i+":",hh(n))for(var a=0;a<n.length;a++){s=n[a];var l=i+Ul(s,a);o+=ba(s,e,t,l,r)}else if(l=G0(n),typeof l=="function")for(n=l.call(n),a=0;!(s=n.next()).done;)s=s.value,l=i+Ul(s,a++),o+=ba(s,e,t,l,r);else if(s==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Bo(n,e,t){if(n==null)return n;var i=[],r=0;return ba(n,i,"","",function(s){return e.call(t,s,r++)}),i}function j0(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var Gt={current:null},Ca={transition:null},X0={ReactCurrentDispatcher:Gt,ReactCurrentBatchConfig:Ca,ReactCurrentOwner:rf};Fe.Children={map:Bo,forEach:function(n,e,t){Bo(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return Bo(n,function(){e++}),e},toArray:function(n){return Bo(n,function(e){return e})||[]},only:function(n){if(!sf(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};Fe.Component=vs;Fe.Fragment=I0;Fe.Profiler=k0;Fe.PureComponent=tf;Fe.StrictMode=N0;Fe.Suspense=U0;Fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=X0;Fe.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var i=Bp({},n.props),r=n.key,s=n.ref,o=n._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=rf.current),e.key!==void 0&&(r=""+e.key),n.type&&n.type.defaultProps)var a=n.type.defaultProps;for(l in e)Hp.call(e,l)&&!Wp.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:Po,type:n.type,key:r,ref:s,props:i,_owner:o}};Fe.createContext=function(n){return n={$$typeof:F0,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:z0,_context:n},n.Consumer=n};Fe.createElement=jp;Fe.createFactory=function(n){var e=jp.bind(null,n);return e.type=n,e};Fe.createRef=function(){return{current:null}};Fe.forwardRef=function(n){return{$$typeof:O0,render:n}};Fe.isValidElement=sf;Fe.lazy=function(n){return{$$typeof:V0,_payload:{_status:-1,_result:n},_init:j0}};Fe.memo=function(n,e){return{$$typeof:B0,type:n,compare:e===void 0?null:e}};Fe.startTransition=function(n){var e=Ca.transition;Ca.transition={};try{n()}finally{Ca.transition=e}};Fe.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Fe.useCallback=function(n,e){return Gt.current.useCallback(n,e)};Fe.useContext=function(n){return Gt.current.useContext(n)};Fe.useDebugValue=function(){};Fe.useDeferredValue=function(n){return Gt.current.useDeferredValue(n)};Fe.useEffect=function(n,e){return Gt.current.useEffect(n,e)};Fe.useId=function(){return Gt.current.useId()};Fe.useImperativeHandle=function(n,e,t){return Gt.current.useImperativeHandle(n,e,t)};Fe.useInsertionEffect=function(n,e){return Gt.current.useInsertionEffect(n,e)};Fe.useLayoutEffect=function(n,e){return Gt.current.useLayoutEffect(n,e)};Fe.useMemo=function(n,e){return Gt.current.useMemo(n,e)};Fe.useReducer=function(n,e,t){return Gt.current.useReducer(n,e,t)};Fe.useRef=function(n){return Gt.current.useRef(n)};Fe.useState=function(n){return Gt.current.useState(n)};Fe.useSyncExternalStore=function(n,e,t){return Gt.current.useSyncExternalStore(n,e,t)};Fe.useTransition=function(){return Gt.current.useTransition()};Fe.version="18.2.0";(function(n){n.exports=Fe})(R0);const q0=L0(ss);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Y0=ss,$0=Symbol.for("react.element"),Z0=Symbol.for("react.fragment"),J0=Object.prototype.hasOwnProperty,K0=Y0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Q0={key:!0,ref:!0,__self:!0,__source:!0};function Xp(n,e,t){var i,r={},s=null,o=null;t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)J0.call(e,i)&&!Q0.hasOwnProperty(i)&&(r[i]=e[i]);if(n&&n.defaultProps)for(i in e=n.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:$0,type:n,key:s,ref:o,props:r,_owner:K0.current}}pl.Fragment=Z0;pl.jsx=Xp;pl.jsxs=Xp;(function(n){n.exports=pl})(P0);var $u={},Zu={},ev={get exports(){return Zu},set exports(n){Zu=n}},un={},Ju={},tv={get exports(){return Ju},set exports(n){Ju=n}},qp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(D,W){var G=D.length;D.push(W);e:for(;0<G;){var O=G-1>>>1,B=D[O];if(0<r(B,W))D[O]=W,D[G]=B,G=O;else break e}}function t(D){return D.length===0?null:D[0]}function i(D){if(D.length===0)return null;var W=D[0],G=D.pop();if(G!==W){D[0]=G;e:for(var O=0,B=D.length,te=B>>>1;O<te;){var ne=2*(O+1)-1,ce=D[ne],j=ne+1,Ae=D[j];if(0>r(ce,G))j<B&&0>r(Ae,ce)?(D[O]=Ae,D[j]=G,O=j):(D[O]=ce,D[ne]=G,O=ne);else if(j<B&&0>r(Ae,G))D[O]=Ae,D[j]=G,O=j;else break e}}return W}function r(D,W){var G=D.sortIndex-W.sortIndex;return G!==0?G:D.id-W.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();n.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,f=null,h=3,m=!1,x=!1,d=!1,p=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(D){for(var W=t(u);W!==null;){if(W.callback===null)i(u);else if(W.startTime<=D)i(u),W.sortIndex=W.expirationTime,e(l,W);else break;W=t(u)}}function S(D){if(d=!1,v(D),!x)if(t(l)!==null)x=!0,K(M);else{var W=t(u);W!==null&&Q(S,W.startTime-D)}}function M(D,W){x=!1,d&&(d=!1,g(y),y=-1),m=!0;var G=h;try{for(v(W),f=t(l);f!==null&&(!(f.expirationTime>W)||D&&!V());){var O=f.callback;if(typeof O=="function"){f.callback=null,h=f.priorityLevel;var B=O(f.expirationTime<=W);W=n.unstable_now(),typeof B=="function"?f.callback=B:f===t(l)&&i(l),v(W)}else i(l);f=t(l)}if(f!==null)var te=!0;else{var ne=t(u);ne!==null&&Q(S,ne.startTime-W),te=!1}return te}finally{f=null,h=G,m=!1}}var T=!1,A=null,y=-1,C=5,P=-1;function V(){return!(n.unstable_now()-P<C)}function oe(){if(A!==null){var D=n.unstable_now();P=D;var W=!0;try{W=A(!0,D)}finally{W?k():(T=!1,A=null)}}else T=!1}var k;if(typeof _=="function")k=function(){_(oe)};else if(typeof MessageChannel<"u"){var N=new MessageChannel,X=N.port2;N.port1.onmessage=oe,k=function(){X.postMessage(null)}}else k=function(){p(oe,0)};function K(D){A=D,T||(T=!0,k())}function Q(D,W){y=p(function(){D(n.unstable_now())},W)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(D){D.callback=null},n.unstable_continueExecution=function(){x||m||(x=!0,K(M))},n.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<D?Math.floor(1e3/D):5},n.unstable_getCurrentPriorityLevel=function(){return h},n.unstable_getFirstCallbackNode=function(){return t(l)},n.unstable_next=function(D){switch(h){case 1:case 2:case 3:var W=3;break;default:W=h}var G=h;h=W;try{return D()}finally{h=G}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(D,W){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var G=h;h=D;try{return W()}finally{h=G}},n.unstable_scheduleCallback=function(D,W,G){var O=n.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?O+G:O):G=O,D){case 1:var B=-1;break;case 2:B=250;break;case 5:B=1073741823;break;case 4:B=1e4;break;default:B=5e3}return B=G+B,D={id:c++,callback:W,priorityLevel:D,startTime:G,expirationTime:B,sortIndex:-1},G>O?(D.sortIndex=G,e(u,D),t(l)===null&&D===t(u)&&(d?(g(y),y=-1):d=!0,Q(S,G-O))):(D.sortIndex=B,e(l,D),x||m||(x=!0,K(M))),D},n.unstable_shouldYield=V,n.unstable_wrapCallback=function(D){var W=h;return function(){var G=h;h=W;try{return D.apply(this,arguments)}finally{h=G}}}})(qp);(function(n){n.exports=qp})(tv);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yp=ss,ln=Ju;function ie(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var $p=new Set,ro={};function pr(n,e){os(n,e),os(n+"Capture",e)}function os(n,e){for(ro[n]=e,n=0;n<e.length;n++)$p.add(e[n])}var si=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ku=Object.prototype.hasOwnProperty,nv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ph={},mh={};function iv(n){return Ku.call(mh,n)?!0:Ku.call(ph,n)?!1:nv.test(n)?mh[n]=!0:(ph[n]=!0,!1)}function rv(n,e,t,i){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function sv(n,e,t,i){if(e===null||typeof e>"u"||rv(n,e,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Ht(n,e,t,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var At={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){At[n]=new Ht(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];At[e]=new Ht(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){At[n]=new Ht(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){At[n]=new Ht(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){At[n]=new Ht(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){At[n]=new Ht(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){At[n]=new Ht(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){At[n]=new Ht(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){At[n]=new Ht(n,5,!1,n.toLowerCase(),null,!1,!1)});var of=/[\-:]([a-z])/g;function af(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(of,af);At[e]=new Ht(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(of,af);At[e]=new Ht(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(of,af);At[e]=new Ht(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){At[n]=new Ht(n,1,!1,n.toLowerCase(),null,!1,!1)});At.xlinkHref=new Ht("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){At[n]=new Ht(n,1,!1,n.toLowerCase(),null,!0,!0)});function lf(n,e,t,i){var r=At.hasOwnProperty(e)?At[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(sv(e,t,r,i)&&(t=null),i||r===null?iv(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):r.mustUseProperty?n[r.propertyName]=t===null?r.type===3?!1:"":t:(e=r.attributeName,i=r.attributeNamespace,t===null?n.removeAttribute(e):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,i?n.setAttributeNS(i,e,t):n.setAttribute(e,t))))}var ui=Yp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Vo=Symbol.for("react.element"),zr=Symbol.for("react.portal"),Fr=Symbol.for("react.fragment"),uf=Symbol.for("react.strict_mode"),Qu=Symbol.for("react.profiler"),Zp=Symbol.for("react.provider"),Jp=Symbol.for("react.context"),cf=Symbol.for("react.forward_ref"),ec=Symbol.for("react.suspense"),tc=Symbol.for("react.suspense_list"),ff=Symbol.for("react.memo"),mi=Symbol.for("react.lazy"),Kp=Symbol.for("react.offscreen"),gh=Symbol.iterator;function Ms(n){return n===null||typeof n!="object"?null:(n=gh&&n[gh]||n["@@iterator"],typeof n=="function"?n:null)}var at=Object.assign,Bl;function Os(n){if(Bl===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);Bl=e&&e[1]||""}return`
`+Bl+n}var Vl=!1;function Gl(n,e){if(!n||Vl)return"";Vl=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(n,[],e)}else{try{e.call()}catch(u){i=u}n.call(e.prototype)}else{try{throw Error()}catch(u){i=u}n()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return n.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",n.displayName)),l}while(1<=o&&0<=a);break}}}finally{Vl=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?Os(n):""}function ov(n){switch(n.tag){case 5:return Os(n.type);case 16:return Os("Lazy");case 13:return Os("Suspense");case 19:return Os("SuspenseList");case 0:case 2:case 15:return n=Gl(n.type,!1),n;case 11:return n=Gl(n.type.render,!1),n;case 1:return n=Gl(n.type,!0),n;default:return""}}function nc(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case Fr:return"Fragment";case zr:return"Portal";case Qu:return"Profiler";case uf:return"StrictMode";case ec:return"Suspense";case tc:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case Jp:return(n.displayName||"Context")+".Consumer";case Zp:return(n._context.displayName||"Context")+".Provider";case cf:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case ff:return e=n.displayName||null,e!==null?e:nc(n.type)||"Memo";case mi:e=n._payload,n=n._init;try{return nc(n(e))}catch{}}return null}function av(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return nc(e);case 8:return e===uf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Pi(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Qp(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function lv(n){var e=Qp(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),i=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,s=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function Go(n){n._valueTracker||(n._valueTracker=lv(n))}function em(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),i="";return n&&(i=Qp(n)?n.checked?"true":"false":n.value),n=i,n!==t?(e.setValue(n),!0):!1}function Va(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function ic(n,e){var t=e.checked;return at({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??n._wrapperState.initialChecked})}function vh(n,e){var t=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;t=Pi(e.value!=null?e.value:t),n._wrapperState={initialChecked:i,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function tm(n,e){e=e.checked,e!=null&&lf(n,"checked",e,!1)}function rc(n,e){tm(n,e);var t=Pi(e.value),i=e.type;if(t!=null)i==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(i==="submit"||i==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?sc(n,e.type,t):e.hasOwnProperty("defaultValue")&&sc(n,e.type,Pi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function _h(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function sc(n,e,t){(e!=="number"||Va(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var Us=Array.isArray;function Zr(n,e,t,i){if(n=n.options,e){e={};for(var r=0;r<t.length;r++)e["$"+t[r]]=!0;for(t=0;t<n.length;t++)r=e.hasOwnProperty("$"+n[t].value),n[t].selected!==r&&(n[t].selected=r),r&&i&&(n[t].defaultSelected=!0)}else{for(t=""+Pi(t),e=null,r=0;r<n.length;r++){if(n[r].value===t){n[r].selected=!0,i&&(n[r].defaultSelected=!0);return}e!==null||n[r].disabled||(e=n[r])}e!==null&&(e.selected=!0)}}function oc(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ie(91));return at({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function xh(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(ie(92));if(Us(t)){if(1<t.length)throw Error(ie(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:Pi(t)}}function nm(n,e){var t=Pi(e.value),i=Pi(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),i!=null&&(n.defaultValue=""+i)}function yh(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function im(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ac(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?im(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Ho,rm=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,i,r){MSApp.execUnsafeLocalFunction(function(){return n(e,t,i,r)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(Ho=Ho||document.createElement("div"),Ho.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ho.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function so(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var js={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},uv=["Webkit","ms","Moz","O"];Object.keys(js).forEach(function(n){uv.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),js[e]=js[n]})});function sm(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||js.hasOwnProperty(n)&&js[n]?(""+e).trim():e+"px"}function om(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var i=t.indexOf("--")===0,r=sm(t,e[t],i);t==="float"&&(t="cssFloat"),i?n.setProperty(t,r):n[t]=r}}var cv=at({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function lc(n,e){if(e){if(cv[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ie(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ie(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ie(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ie(62))}}function uc(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var cc=null;function hf(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var fc=null,Jr=null,Kr=null;function Sh(n){if(n=Io(n)){if(typeof fc!="function")throw Error(ie(280));var e=n.stateNode;e&&(e=xl(e),fc(n.stateNode,n.type,e))}}function am(n){Jr?Kr?Kr.push(n):Kr=[n]:Jr=n}function lm(){if(Jr){var n=Jr,e=Kr;if(Kr=Jr=null,Sh(n),e)for(n=0;n<e.length;n++)Sh(e[n])}}function um(n,e){return n(e)}function cm(){}var Hl=!1;function fm(n,e,t){if(Hl)return n(e,t);Hl=!0;try{return um(n,e,t)}finally{Hl=!1,(Jr!==null||Kr!==null)&&(cm(),lm())}}function oo(n,e){var t=n.stateNode;if(t===null)return null;var i=xl(t);if(i===null)return null;t=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break e;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(ie(231,e,typeof t));return t}var hc=!1;if(si)try{var ws={};Object.defineProperty(ws,"passive",{get:function(){hc=!0}}),window.addEventListener("test",ws,ws),window.removeEventListener("test",ws,ws)}catch{hc=!1}function fv(n,e,t,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(t,u)}catch(c){this.onError(c)}}var Xs=!1,Ga=null,Ha=!1,dc=null,hv={onError:function(n){Xs=!0,Ga=n}};function dv(n,e,t,i,r,s,o,a,l){Xs=!1,Ga=null,fv.apply(hv,arguments)}function pv(n,e,t,i,r,s,o,a,l){if(dv.apply(this,arguments),Xs){if(Xs){var u=Ga;Xs=!1,Ga=null}else throw Error(ie(198));Ha||(Ha=!0,dc=u)}}function mr(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,e.flags&4098&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function hm(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function Mh(n){if(mr(n)!==n)throw Error(ie(188))}function mv(n){var e=n.alternate;if(!e){if(e=mr(n),e===null)throw Error(ie(188));return e!==n?null:n}for(var t=n,i=e;;){var r=t.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){t=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===t)return Mh(r),n;if(s===i)return Mh(r),e;s=s.sibling}throw Error(ie(188))}if(t.return!==i.return)t=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===t){o=!0,t=r,i=s;break}if(a===i){o=!0,i=r,t=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===t){o=!0,t=s,i=r;break}if(a===i){o=!0,i=s,t=r;break}a=a.sibling}if(!o)throw Error(ie(189))}}if(t.alternate!==i)throw Error(ie(190))}if(t.tag!==3)throw Error(ie(188));return t.stateNode.current===t?n:e}function dm(n){return n=mv(n),n!==null?pm(n):null}function pm(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=pm(n);if(e!==null)return e;n=n.sibling}return null}var mm=ln.unstable_scheduleCallback,wh=ln.unstable_cancelCallback,gv=ln.unstable_shouldYield,vv=ln.unstable_requestPaint,ut=ln.unstable_now,_v=ln.unstable_getCurrentPriorityLevel,df=ln.unstable_ImmediatePriority,gm=ln.unstable_UserBlockingPriority,Wa=ln.unstable_NormalPriority,xv=ln.unstable_LowPriority,vm=ln.unstable_IdlePriority,ml=null,Un=null;function yv(n){if(Un&&typeof Un.onCommitFiberRoot=="function")try{Un.onCommitFiberRoot(ml,n,void 0,(n.current.flags&128)===128)}catch{}}var Rn=Math.clz32?Math.clz32:wv,Sv=Math.log,Mv=Math.LN2;function wv(n){return n>>>=0,n===0?32:31-(Sv(n)/Mv|0)|0}var Wo=64,jo=4194304;function Bs(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function ja(n,e){var t=n.pendingLanes;if(t===0)return 0;var i=0,r=n.suspendedLanes,s=n.pingedLanes,o=t&268435455;if(o!==0){var a=o&~r;a!==0?i=Bs(a):(s&=o,s!==0&&(i=Bs(s)))}else o=t&~r,o!==0?i=Bs(o):s!==0&&(i=Bs(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=i;0<e;)t=31-Rn(e),r=1<<t,i|=n[t],e&=~r;return i}function Ev(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Tv(n,e){for(var t=n.suspendedLanes,i=n.pingedLanes,r=n.expirationTimes,s=n.pendingLanes;0<s;){var o=31-Rn(s),a=1<<o,l=r[o];l===-1?(!(a&t)||a&i)&&(r[o]=Ev(a,e)):l<=e&&(n.expiredLanes|=a),s&=~a}}function pc(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function _m(){var n=Wo;return Wo<<=1,!(Wo&4194240)&&(Wo=64),n}function Wl(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function Ro(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-Rn(e),n[e]=t}function bv(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var i=n.eventTimes;for(n=n.expirationTimes;0<t;){var r=31-Rn(t),s=1<<r;e[r]=0,i[r]=-1,n[r]=-1,t&=~s}}function pf(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var i=31-Rn(t),r=1<<i;r&e|n[i]&e&&(n[i]|=e),t&=~r}}var qe=0;function xm(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var ym,mf,Sm,Mm,wm,mc=!1,Xo=[],Si=null,Mi=null,wi=null,ao=new Map,lo=new Map,vi=[],Cv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Eh(n,e){switch(n){case"focusin":case"focusout":Si=null;break;case"dragenter":case"dragleave":Mi=null;break;case"mouseover":case"mouseout":wi=null;break;case"pointerover":case"pointerout":ao.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":lo.delete(e.pointerId)}}function Es(n,e,t,i,r,s){return n===null||n.nativeEvent!==s?(n={blockedOn:e,domEventName:t,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Io(e),e!==null&&mf(e)),n):(n.eventSystemFlags|=i,e=n.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),n)}function Av(n,e,t,i,r){switch(e){case"focusin":return Si=Es(Si,n,e,t,i,r),!0;case"dragenter":return Mi=Es(Mi,n,e,t,i,r),!0;case"mouseover":return wi=Es(wi,n,e,t,i,r),!0;case"pointerover":var s=r.pointerId;return ao.set(s,Es(ao.get(s)||null,n,e,t,i,r)),!0;case"gotpointercapture":return s=r.pointerId,lo.set(s,Es(lo.get(s)||null,n,e,t,i,r)),!0}return!1}function Em(n){var e=qi(n.target);if(e!==null){var t=mr(e);if(t!==null){if(e=t.tag,e===13){if(e=hm(t),e!==null){n.blockedOn=e,wm(n.priority,function(){Sm(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Aa(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=gc(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var i=new t.constructor(t.type,t);cc=i,t.target.dispatchEvent(i),cc=null}else return e=Io(t),e!==null&&mf(e),n.blockedOn=t,!1;e.shift()}return!0}function Th(n,e,t){Aa(n)&&t.delete(e)}function Lv(){mc=!1,Si!==null&&Aa(Si)&&(Si=null),Mi!==null&&Aa(Mi)&&(Mi=null),wi!==null&&Aa(wi)&&(wi=null),ao.forEach(Th),lo.forEach(Th)}function Ts(n,e){n.blockedOn===e&&(n.blockedOn=null,mc||(mc=!0,ln.unstable_scheduleCallback(ln.unstable_NormalPriority,Lv)))}function uo(n){function e(r){return Ts(r,n)}if(0<Xo.length){Ts(Xo[0],n);for(var t=1;t<Xo.length;t++){var i=Xo[t];i.blockedOn===n&&(i.blockedOn=null)}}for(Si!==null&&Ts(Si,n),Mi!==null&&Ts(Mi,n),wi!==null&&Ts(wi,n),ao.forEach(e),lo.forEach(e),t=0;t<vi.length;t++)i=vi[t],i.blockedOn===n&&(i.blockedOn=null);for(;0<vi.length&&(t=vi[0],t.blockedOn===null);)Em(t),t.blockedOn===null&&vi.shift()}var Qr=ui.ReactCurrentBatchConfig,Xa=!0;function Pv(n,e,t,i){var r=qe,s=Qr.transition;Qr.transition=null;try{qe=1,gf(n,e,t,i)}finally{qe=r,Qr.transition=s}}function Rv(n,e,t,i){var r=qe,s=Qr.transition;Qr.transition=null;try{qe=4,gf(n,e,t,i)}finally{qe=r,Qr.transition=s}}function gf(n,e,t,i){if(Xa){var r=gc(n,e,t,i);if(r===null)eu(n,e,i,qa,t),Eh(n,i);else if(Av(r,n,e,t,i))i.stopPropagation();else if(Eh(n,i),e&4&&-1<Cv.indexOf(n)){for(;r!==null;){var s=Io(r);if(s!==null&&ym(s),s=gc(n,e,t,i),s===null&&eu(n,e,i,qa,t),s===r)break;r=s}r!==null&&i.stopPropagation()}else eu(n,e,i,null,t)}}var qa=null;function gc(n,e,t,i){if(qa=null,n=hf(i),n=qi(n),n!==null)if(e=mr(n),e===null)n=null;else if(t=e.tag,t===13){if(n=hm(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return qa=n,null}function Tm(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(_v()){case df:return 1;case gm:return 4;case Wa:case xv:return 16;case vm:return 536870912;default:return 16}default:return 16}}var xi=null,vf=null,La=null;function bm(){if(La)return La;var n,e=vf,t=e.length,i,r="value"in xi?xi.value:xi.textContent,s=r.length;for(n=0;n<t&&e[n]===r[n];n++);var o=t-n;for(i=1;i<=o&&e[t-i]===r[s-i];i++);return La=r.slice(n,1<i?1-i:void 0)}function Pa(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function qo(){return!0}function bh(){return!1}function cn(n){function e(t,i,r,s,o){this._reactName=t,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in n)n.hasOwnProperty(a)&&(t=n[a],this[a]=t?t(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?qo:bh,this.isPropagationStopped=bh,this}return at(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=qo)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=qo)},persist:function(){},isPersistent:qo}),e}var _s={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},_f=cn(_s),Do=at({},_s,{view:0,detail:0}),Dv=cn(Do),jl,Xl,bs,gl=at({},Do,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:xf,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==bs&&(bs&&n.type==="mousemove"?(jl=n.screenX-bs.screenX,Xl=n.screenY-bs.screenY):Xl=jl=0,bs=n),jl)},movementY:function(n){return"movementY"in n?n.movementY:Xl}}),Ch=cn(gl),Iv=at({},gl,{dataTransfer:0}),Nv=cn(Iv),kv=at({},Do,{relatedTarget:0}),ql=cn(kv),zv=at({},_s,{animationName:0,elapsedTime:0,pseudoElement:0}),Fv=cn(zv),Ov=at({},_s,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Uv=cn(Ov),Bv=at({},_s,{data:0}),Ah=cn(Bv),Vv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Gv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Hv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Wv(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=Hv[n])?!!e[n]:!1}function xf(){return Wv}var jv=at({},Do,{key:function(n){if(n.key){var e=Vv[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=Pa(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Gv[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:xf,charCode:function(n){return n.type==="keypress"?Pa(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Pa(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Xv=cn(jv),qv=at({},gl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Lh=cn(qv),Yv=at({},Do,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:xf}),$v=cn(Yv),Zv=at({},_s,{propertyName:0,elapsedTime:0,pseudoElement:0}),Jv=cn(Zv),Kv=at({},gl,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Qv=cn(Kv),e_=[9,13,27,32],yf=si&&"CompositionEvent"in window,qs=null;si&&"documentMode"in document&&(qs=document.documentMode);var t_=si&&"TextEvent"in window&&!qs,Cm=si&&(!yf||qs&&8<qs&&11>=qs),Ph=String.fromCharCode(32),Rh=!1;function Am(n,e){switch(n){case"keyup":return e_.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Lm(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Or=!1;function n_(n,e){switch(n){case"compositionend":return Lm(e);case"keypress":return e.which!==32?null:(Rh=!0,Ph);case"textInput":return n=e.data,n===Ph&&Rh?null:n;default:return null}}function i_(n,e){if(Or)return n==="compositionend"||!yf&&Am(n,e)?(n=bm(),La=vf=xi=null,Or=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Cm&&e.locale!=="ko"?null:e.data;default:return null}}var r_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Dh(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!r_[n.type]:e==="textarea"}function Pm(n,e,t,i){am(i),e=Ya(e,"onChange"),0<e.length&&(t=new _f("onChange","change",null,t,i),n.push({event:t,listeners:e}))}var Ys=null,co=null;function s_(n){Vm(n,0)}function vl(n){var e=Vr(n);if(em(e))return n}function o_(n,e){if(n==="change")return e}var Rm=!1;if(si){var Yl;if(si){var $l="oninput"in document;if(!$l){var Ih=document.createElement("div");Ih.setAttribute("oninput","return;"),$l=typeof Ih.oninput=="function"}Yl=$l}else Yl=!1;Rm=Yl&&(!document.documentMode||9<document.documentMode)}function Nh(){Ys&&(Ys.detachEvent("onpropertychange",Dm),co=Ys=null)}function Dm(n){if(n.propertyName==="value"&&vl(co)){var e=[];Pm(e,co,n,hf(n)),fm(s_,e)}}function a_(n,e,t){n==="focusin"?(Nh(),Ys=e,co=t,Ys.attachEvent("onpropertychange",Dm)):n==="focusout"&&Nh()}function l_(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return vl(co)}function u_(n,e){if(n==="click")return vl(e)}function c_(n,e){if(n==="input"||n==="change")return vl(e)}function f_(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var In=typeof Object.is=="function"?Object.is:f_;function fo(n,e){if(In(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),i=Object.keys(e);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var r=t[i];if(!Ku.call(e,r)||!In(n[r],e[r]))return!1}return!0}function kh(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function zh(n,e){var t=kh(n);n=0;for(var i;t;){if(t.nodeType===3){if(i=n+t.textContent.length,n<=e&&i>=e)return{node:t,offset:e-n};n=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=kh(t)}}function Im(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?Im(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function Nm(){for(var n=window,e=Va();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=Va(n.document)}return e}function Sf(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function h_(n){var e=Nm(),t=n.focusedElem,i=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&Im(t.ownerDocument.documentElement,t)){if(i!==null&&Sf(t)){if(e=i.start,n=i.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var r=t.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!n.extend&&s>i&&(r=i,i=s,s=r),r=zh(t,s);var o=zh(t,i);r&&o&&(n.rangeCount!==1||n.anchorNode!==r.node||n.anchorOffset!==r.offset||n.focusNode!==o.node||n.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),n.removeAllRanges(),s>i?(n.addRange(e),n.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var d_=si&&"documentMode"in document&&11>=document.documentMode,Ur=null,vc=null,$s=null,_c=!1;function Fh(n,e,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;_c||Ur==null||Ur!==Va(i)||(i=Ur,"selectionStart"in i&&Sf(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),$s&&fo($s,i)||($s=i,i=Ya(vc,"onSelect"),0<i.length&&(e=new _f("onSelect","select",null,e,t),n.push({event:e,listeners:i}),e.target=Ur)))}function Yo(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var Br={animationend:Yo("Animation","AnimationEnd"),animationiteration:Yo("Animation","AnimationIteration"),animationstart:Yo("Animation","AnimationStart"),transitionend:Yo("Transition","TransitionEnd")},Zl={},km={};si&&(km=document.createElement("div").style,"AnimationEvent"in window||(delete Br.animationend.animation,delete Br.animationiteration.animation,delete Br.animationstart.animation),"TransitionEvent"in window||delete Br.transitionend.transition);function _l(n){if(Zl[n])return Zl[n];if(!Br[n])return n;var e=Br[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in km)return Zl[n]=e[t];return n}var zm=_l("animationend"),Fm=_l("animationiteration"),Om=_l("animationstart"),Um=_l("transitionend"),Bm=new Map,Oh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Di(n,e){Bm.set(n,e),pr(e,[n])}for(var Jl=0;Jl<Oh.length;Jl++){var Kl=Oh[Jl],p_=Kl.toLowerCase(),m_=Kl[0].toUpperCase()+Kl.slice(1);Di(p_,"on"+m_)}Di(zm,"onAnimationEnd");Di(Fm,"onAnimationIteration");Di(Om,"onAnimationStart");Di("dblclick","onDoubleClick");Di("focusin","onFocus");Di("focusout","onBlur");Di(Um,"onTransitionEnd");os("onMouseEnter",["mouseout","mouseover"]);os("onMouseLeave",["mouseout","mouseover"]);os("onPointerEnter",["pointerout","pointerover"]);os("onPointerLeave",["pointerout","pointerover"]);pr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));pr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));pr("onBeforeInput",["compositionend","keypress","textInput","paste"]);pr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));pr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));pr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Vs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),g_=new Set("cancel close invalid load scroll toggle".split(" ").concat(Vs));function Uh(n,e,t){var i=n.type||"unknown-event";n.currentTarget=t,pv(i,e,void 0,n),n.currentTarget=null}function Vm(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var i=n[t],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Uh(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Uh(r,a,u),s=l}}}if(Ha)throw n=dc,Ha=!1,dc=null,n}function Ke(n,e){var t=e[wc];t===void 0&&(t=e[wc]=new Set);var i=n+"__bubble";t.has(i)||(Gm(e,n,2,!1),t.add(i))}function Ql(n,e,t){var i=0;e&&(i|=4),Gm(t,n,i,e)}var $o="_reactListening"+Math.random().toString(36).slice(2);function ho(n){if(!n[$o]){n[$o]=!0,$p.forEach(function(t){t!=="selectionchange"&&(g_.has(t)||Ql(t,!1,n),Ql(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[$o]||(e[$o]=!0,Ql("selectionchange",!1,e))}}function Gm(n,e,t,i){switch(Tm(e)){case 1:var r=Pv;break;case 4:r=Rv;break;default:r=gf}t=r.bind(null,e,t,n),r=void 0,!hc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?n.addEventListener(e,t,{capture:!0,passive:r}):n.addEventListener(e,t,!0):r!==void 0?n.addEventListener(e,t,{passive:r}):n.addEventListener(e,t,!1)}function eu(n,e,t,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=qi(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}fm(function(){var u=s,c=hf(t),f=[];e:{var h=Bm.get(n);if(h!==void 0){var m=_f,x=n;switch(n){case"keypress":if(Pa(t)===0)break e;case"keydown":case"keyup":m=Xv;break;case"focusin":x="focus",m=ql;break;case"focusout":x="blur",m=ql;break;case"beforeblur":case"afterblur":m=ql;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Ch;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=Nv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=$v;break;case zm:case Fm:case Om:m=Fv;break;case Um:m=Jv;break;case"scroll":m=Dv;break;case"wheel":m=Qv;break;case"copy":case"cut":case"paste":m=Uv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Lh}var d=(e&4)!==0,p=!d&&n==="scroll",g=d?h!==null?h+"Capture":null:h;d=[];for(var _=u,v;_!==null;){v=_;var S=v.stateNode;if(v.tag===5&&S!==null&&(v=S,g!==null&&(S=oo(_,g),S!=null&&d.push(po(_,S,v)))),p)break;_=_.return}0<d.length&&(h=new m(h,x,null,t,c),f.push({event:h,listeners:d}))}}if(!(e&7)){e:{if(h=n==="mouseover"||n==="pointerover",m=n==="mouseout"||n==="pointerout",h&&t!==cc&&(x=t.relatedTarget||t.fromElement)&&(qi(x)||x[oi]))break e;if((m||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,m?(x=t.relatedTarget||t.toElement,m=u,x=x?qi(x):null,x!==null&&(p=mr(x),x!==p||x.tag!==5&&x.tag!==6)&&(x=null)):(m=null,x=u),m!==x)){if(d=Ch,S="onMouseLeave",g="onMouseEnter",_="mouse",(n==="pointerout"||n==="pointerover")&&(d=Lh,S="onPointerLeave",g="onPointerEnter",_="pointer"),p=m==null?h:Vr(m),v=x==null?h:Vr(x),h=new d(S,_+"leave",m,t,c),h.target=p,h.relatedTarget=v,S=null,qi(c)===u&&(d=new d(g,_+"enter",x,t,c),d.target=v,d.relatedTarget=p,S=d),p=S,m&&x)t:{for(d=m,g=x,_=0,v=d;v;v=_r(v))_++;for(v=0,S=g;S;S=_r(S))v++;for(;0<_-v;)d=_r(d),_--;for(;0<v-_;)g=_r(g),v--;for(;_--;){if(d===g||g!==null&&d===g.alternate)break t;d=_r(d),g=_r(g)}d=null}else d=null;m!==null&&Bh(f,h,m,d,!1),x!==null&&p!==null&&Bh(f,p,x,d,!0)}}e:{if(h=u?Vr(u):window,m=h.nodeName&&h.nodeName.toLowerCase(),m==="select"||m==="input"&&h.type==="file")var M=o_;else if(Dh(h))if(Rm)M=c_;else{M=l_;var T=a_}else(m=h.nodeName)&&m.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(M=u_);if(M&&(M=M(n,u))){Pm(f,M,t,c);break e}T&&T(n,h,u),n==="focusout"&&(T=h._wrapperState)&&T.controlled&&h.type==="number"&&sc(h,"number",h.value)}switch(T=u?Vr(u):window,n){case"focusin":(Dh(T)||T.contentEditable==="true")&&(Ur=T,vc=u,$s=null);break;case"focusout":$s=vc=Ur=null;break;case"mousedown":_c=!0;break;case"contextmenu":case"mouseup":case"dragend":_c=!1,Fh(f,t,c);break;case"selectionchange":if(d_)break;case"keydown":case"keyup":Fh(f,t,c)}var A;if(yf)e:{switch(n){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else Or?Am(n,t)&&(y="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(y="onCompositionStart");y&&(Cm&&t.locale!=="ko"&&(Or||y!=="onCompositionStart"?y==="onCompositionEnd"&&Or&&(A=bm()):(xi=c,vf="value"in xi?xi.value:xi.textContent,Or=!0)),T=Ya(u,y),0<T.length&&(y=new Ah(y,n,null,t,c),f.push({event:y,listeners:T}),A?y.data=A:(A=Lm(t),A!==null&&(y.data=A)))),(A=t_?n_(n,t):i_(n,t))&&(u=Ya(u,"onBeforeInput"),0<u.length&&(c=new Ah("onBeforeInput","beforeinput",null,t,c),f.push({event:c,listeners:u}),c.data=A))}Vm(f,e)})}function po(n,e,t){return{instance:n,listener:e,currentTarget:t}}function Ya(n,e){for(var t=e+"Capture",i=[];n!==null;){var r=n,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=oo(n,t),s!=null&&i.unshift(po(n,s,r)),s=oo(n,e),s!=null&&i.push(po(n,s,r))),n=n.return}return i}function _r(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Bh(n,e,t,i,r){for(var s=e._reactName,o=[];t!==null&&t!==i;){var a=t,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=oo(t,s),l!=null&&o.unshift(po(t,l,a))):r||(l=oo(t,s),l!=null&&o.push(po(t,l,a)))),t=t.return}o.length!==0&&n.push({event:e,listeners:o})}var v_=/\r\n?/g,__=/\u0000|\uFFFD/g;function Vh(n){return(typeof n=="string"?n:""+n).replace(v_,`
`).replace(__,"")}function Zo(n,e,t){if(e=Vh(e),Vh(n)!==e&&t)throw Error(ie(425))}function $a(){}var xc=null,yc=null;function Sc(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Mc=typeof setTimeout=="function"?setTimeout:void 0,x_=typeof clearTimeout=="function"?clearTimeout:void 0,Gh=typeof Promise=="function"?Promise:void 0,y_=typeof queueMicrotask=="function"?queueMicrotask:typeof Gh<"u"?function(n){return Gh.resolve(null).then(n).catch(S_)}:Mc;function S_(n){setTimeout(function(){throw n})}function tu(n,e){var t=e,i=0;do{var r=t.nextSibling;if(n.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(i===0){n.removeChild(r),uo(e);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=r}while(t);uo(e)}function Ei(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function Hh(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var xs=Math.random().toString(36).slice(2),On="__reactFiber$"+xs,mo="__reactProps$"+xs,oi="__reactContainer$"+xs,wc="__reactEvents$"+xs,M_="__reactListeners$"+xs,w_="__reactHandles$"+xs;function qi(n){var e=n[On];if(e)return e;for(var t=n.parentNode;t;){if(e=t[oi]||t[On]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=Hh(n);n!==null;){if(t=n[On])return t;n=Hh(n)}return e}n=t,t=n.parentNode}return null}function Io(n){return n=n[On]||n[oi],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Vr(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(ie(33))}function xl(n){return n[mo]||null}var Ec=[],Gr=-1;function Ii(n){return{current:n}}function et(n){0>Gr||(n.current=Ec[Gr],Ec[Gr]=null,Gr--)}function Je(n,e){Gr++,Ec[Gr]=n.current,n.current=e}var Ri={},Nt=Ii(Ri),qt=Ii(!1),nr=Ri;function as(n,e){var t=n.type.contextTypes;if(!t)return Ri;var i=n.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in t)r[s]=e[s];return i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=r),r}function Yt(n){return n=n.childContextTypes,n!=null}function Za(){et(qt),et(Nt)}function Wh(n,e,t){if(Nt.current!==Ri)throw Error(ie(168));Je(Nt,e),Je(qt,t)}function Hm(n,e,t){var i=n.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ie(108,av(n)||"Unknown",r));return at({},t,i)}function Ja(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Ri,nr=Nt.current,Je(Nt,n),Je(qt,qt.current),!0}function jh(n,e,t){var i=n.stateNode;if(!i)throw Error(ie(169));t?(n=Hm(n,e,nr),i.__reactInternalMemoizedMergedChildContext=n,et(qt),et(Nt),Je(Nt,n)):et(qt),Je(qt,t)}var Qn=null,yl=!1,nu=!1;function Wm(n){Qn===null?Qn=[n]:Qn.push(n)}function E_(n){yl=!0,Wm(n)}function Ni(){if(!nu&&Qn!==null){nu=!0;var n=0,e=qe;try{var t=Qn;for(qe=1;n<t.length;n++){var i=t[n];do i=i(!0);while(i!==null)}Qn=null,yl=!1}catch(r){throw Qn!==null&&(Qn=Qn.slice(n+1)),mm(df,Ni),r}finally{qe=e,nu=!1}}return null}var Hr=[],Wr=0,Ka=null,Qa=0,dn=[],pn=0,ir=null,ti=1,ni="";function Gi(n,e){Hr[Wr++]=Qa,Hr[Wr++]=Ka,Ka=n,Qa=e}function jm(n,e,t){dn[pn++]=ti,dn[pn++]=ni,dn[pn++]=ir,ir=n;var i=ti;n=ni;var r=32-Rn(i)-1;i&=~(1<<r),t+=1;var s=32-Rn(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,ti=1<<32-Rn(e)+r|t<<r|i,ni=s+n}else ti=1<<s|t<<r|i,ni=n}function Mf(n){n.return!==null&&(Gi(n,1),jm(n,1,0))}function wf(n){for(;n===Ka;)Ka=Hr[--Wr],Hr[Wr]=null,Qa=Hr[--Wr],Hr[Wr]=null;for(;n===ir;)ir=dn[--pn],dn[pn]=null,ni=dn[--pn],dn[pn]=null,ti=dn[--pn],dn[pn]=null}var an=null,sn=null,nt=!1,An=null;function Xm(n,e){var t=gn(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function Xh(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,an=n,sn=Ei(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,an=n,sn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=ir!==null?{id:ti,overflow:ni}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=gn(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,an=n,sn=null,!0):!1;default:return!1}}function Tc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function bc(n){if(nt){var e=sn;if(e){var t=e;if(!Xh(n,e)){if(Tc(n))throw Error(ie(418));e=Ei(t.nextSibling);var i=an;e&&Xh(n,e)?Xm(i,t):(n.flags=n.flags&-4097|2,nt=!1,an=n)}}else{if(Tc(n))throw Error(ie(418));n.flags=n.flags&-4097|2,nt=!1,an=n}}}function qh(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;an=n}function Jo(n){if(n!==an)return!1;if(!nt)return qh(n),nt=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!Sc(n.type,n.memoizedProps)),e&&(e=sn)){if(Tc(n))throw qm(),Error(ie(418));for(;e;)Xm(n,e),e=Ei(e.nextSibling)}if(qh(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(ie(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){sn=Ei(n.nextSibling);break e}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}sn=null}}else sn=an?Ei(n.stateNode.nextSibling):null;return!0}function qm(){for(var n=sn;n;)n=Ei(n.nextSibling)}function ls(){sn=an=null,nt=!1}function Ef(n){An===null?An=[n]:An.push(n)}var T_=ui.ReactCurrentBatchConfig;function bn(n,e){if(n&&n.defaultProps){e=at({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}var el=Ii(null),tl=null,jr=null,Tf=null;function bf(){Tf=jr=tl=null}function Cf(n){var e=el.current;et(el),n._currentValue=e}function Cc(n,e,t){for(;n!==null;){var i=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),n===t)break;n=n.return}}function es(n,e){tl=n,Tf=jr=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&e&&(Xt=!0),n.firstContext=null)}function yn(n){var e=n._currentValue;if(Tf!==n)if(n={context:n,memoizedValue:e,next:null},jr===null){if(tl===null)throw Error(ie(308));jr=n,tl.dependencies={lanes:0,firstContext:n}}else jr=jr.next=n;return e}var Yi=null;function Af(n){Yi===null?Yi=[n]:Yi.push(n)}function Ym(n,e,t,i){var r=e.interleaved;return r===null?(t.next=t,Af(e)):(t.next=r.next,r.next=t),e.interleaved=t,ai(n,i)}function ai(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var gi=!1;function Lf(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function $m(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function ii(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function Ti(n,e,t){var i=n.updateQueue;if(i===null)return null;if(i=i.shared,He&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,ai(n,t)}return r=i.interleaved,r===null?(e.next=e,Af(i)):(e.next=r.next,r.next=e),i.interleaved=e,ai(n,t)}function Ra(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,pf(n,t)}}function Yh(n,e){var t=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var r=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?r=s=o:s=s.next=o,t=t.next}while(t!==null);s===null?r=s=e:s=s.next=e}else r=s=e;t={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function nl(n,e,t,i){var r=n.updateQueue;gi=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=n.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;o=0,c=u=l=null,a=s;do{var h=a.lane,m=a.eventTime;if((i&h)===h){c!==null&&(c=c.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var x=n,d=a;switch(h=e,m=t,d.tag){case 1:if(x=d.payload,typeof x=="function"){f=x.call(m,f,h);break e}f=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=d.payload,h=typeof x=="function"?x.call(m,f,h):x,h==null)break e;f=at({},f,h);break e;case 2:gi=!0}}a.callback!==null&&a.lane!==0&&(n.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else m={eventTime:m,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=m,l=f):c=c.next=m,o|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(1);if(c===null&&(l=f),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=c,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);sr|=o,n.lanes=o,n.memoizedState=f}}function $h(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var i=n[e],r=i.callback;if(r!==null){if(i.callback=null,i=t,typeof r!="function")throw Error(ie(191,r));r.call(i)}}}var Zm=new Yp.Component().refs;function Ac(n,e,t,i){e=n.memoizedState,t=t(i,e),t=t==null?e:at({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var Sl={isMounted:function(n){return(n=n._reactInternals)?mr(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var i=Bt(),r=Ci(n),s=ii(i,r);s.payload=e,t!=null&&(s.callback=t),e=Ti(n,s,r),e!==null&&(Dn(e,n,r,i),Ra(e,n,r))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var i=Bt(),r=Ci(n),s=ii(i,r);s.tag=1,s.payload=e,t!=null&&(s.callback=t),e=Ti(n,s,r),e!==null&&(Dn(e,n,r,i),Ra(e,n,r))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=Bt(),i=Ci(n),r=ii(t,i);r.tag=2,e!=null&&(r.callback=e),e=Ti(n,r,i),e!==null&&(Dn(e,n,i,t),Ra(e,n,i))}};function Zh(n,e,t,i,r,s,o){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!fo(t,i)||!fo(r,s):!0}function Jm(n,e,t){var i=!1,r=Ri,s=e.contextType;return typeof s=="object"&&s!==null?s=yn(s):(r=Yt(e)?nr:Nt.current,i=e.contextTypes,s=(i=i!=null)?as(n,r):Ri),e=new e(t,s),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Sl,n.stateNode=e,e._reactInternals=n,i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=s),e}function Jh(n,e,t,i){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,i),e.state!==n&&Sl.enqueueReplaceState(e,e.state,null)}function Lc(n,e,t,i){var r=n.stateNode;r.props=t,r.state=n.memoizedState,r.refs=Zm,Lf(n);var s=e.contextType;typeof s=="object"&&s!==null?r.context=yn(s):(s=Yt(e)?nr:Nt.current,r.context=as(n,s)),r.state=n.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Ac(n,e,s,t),r.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Sl.enqueueReplaceState(r,r.state,null),nl(n,t,r,i),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308)}function Cs(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(ie(309));var i=t.stateNode}if(!i)throw Error(ie(147,n));var r=i,s=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;a===Zm&&(a=r.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof n!="string")throw Error(ie(284));if(!t._owner)throw Error(ie(290,n))}return n}function Ko(n,e){throw n=Object.prototype.toString.call(e),Error(ie(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function Kh(n){var e=n._init;return e(n._payload)}function Km(n){function e(g,_){if(n){var v=g.deletions;v===null?(g.deletions=[_],g.flags|=16):v.push(_)}}function t(g,_){if(!n)return null;for(;_!==null;)e(g,_),_=_.sibling;return null}function i(g,_){for(g=new Map;_!==null;)_.key!==null?g.set(_.key,_):g.set(_.index,_),_=_.sibling;return g}function r(g,_){return g=Ai(g,_),g.index=0,g.sibling=null,g}function s(g,_,v){return g.index=v,n?(v=g.alternate,v!==null?(v=v.index,v<_?(g.flags|=2,_):v):(g.flags|=2,_)):(g.flags|=1048576,_)}function o(g){return n&&g.alternate===null&&(g.flags|=2),g}function a(g,_,v,S){return _===null||_.tag!==6?(_=uu(v,g.mode,S),_.return=g,_):(_=r(_,v),_.return=g,_)}function l(g,_,v,S){var M=v.type;return M===Fr?c(g,_,v.props.children,S,v.key):_!==null&&(_.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===mi&&Kh(M)===_.type)?(S=r(_,v.props),S.ref=Cs(g,_,v),S.return=g,S):(S=Fa(v.type,v.key,v.props,null,g.mode,S),S.ref=Cs(g,_,v),S.return=g,S)}function u(g,_,v,S){return _===null||_.tag!==4||_.stateNode.containerInfo!==v.containerInfo||_.stateNode.implementation!==v.implementation?(_=cu(v,g.mode,S),_.return=g,_):(_=r(_,v.children||[]),_.return=g,_)}function c(g,_,v,S,M){return _===null||_.tag!==7?(_=Qi(v,g.mode,S,M),_.return=g,_):(_=r(_,v),_.return=g,_)}function f(g,_,v){if(typeof _=="string"&&_!==""||typeof _=="number")return _=uu(""+_,g.mode,v),_.return=g,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Vo:return v=Fa(_.type,_.key,_.props,null,g.mode,v),v.ref=Cs(g,null,_),v.return=g,v;case zr:return _=cu(_,g.mode,v),_.return=g,_;case mi:var S=_._init;return f(g,S(_._payload),v)}if(Us(_)||Ms(_))return _=Qi(_,g.mode,v,null),_.return=g,_;Ko(g,_)}return null}function h(g,_,v,S){var M=_!==null?_.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return M!==null?null:a(g,_,""+v,S);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Vo:return v.key===M?l(g,_,v,S):null;case zr:return v.key===M?u(g,_,v,S):null;case mi:return M=v._init,h(g,_,M(v._payload),S)}if(Us(v)||Ms(v))return M!==null?null:c(g,_,v,S,null);Ko(g,v)}return null}function m(g,_,v,S,M){if(typeof S=="string"&&S!==""||typeof S=="number")return g=g.get(v)||null,a(_,g,""+S,M);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Vo:return g=g.get(S.key===null?v:S.key)||null,l(_,g,S,M);case zr:return g=g.get(S.key===null?v:S.key)||null,u(_,g,S,M);case mi:var T=S._init;return m(g,_,v,T(S._payload),M)}if(Us(S)||Ms(S))return g=g.get(v)||null,c(_,g,S,M,null);Ko(_,S)}return null}function x(g,_,v,S){for(var M=null,T=null,A=_,y=_=0,C=null;A!==null&&y<v.length;y++){A.index>y?(C=A,A=null):C=A.sibling;var P=h(g,A,v[y],S);if(P===null){A===null&&(A=C);break}n&&A&&P.alternate===null&&e(g,A),_=s(P,_,y),T===null?M=P:T.sibling=P,T=P,A=C}if(y===v.length)return t(g,A),nt&&Gi(g,y),M;if(A===null){for(;y<v.length;y++)A=f(g,v[y],S),A!==null&&(_=s(A,_,y),T===null?M=A:T.sibling=A,T=A);return nt&&Gi(g,y),M}for(A=i(g,A);y<v.length;y++)C=m(A,g,y,v[y],S),C!==null&&(n&&C.alternate!==null&&A.delete(C.key===null?y:C.key),_=s(C,_,y),T===null?M=C:T.sibling=C,T=C);return n&&A.forEach(function(V){return e(g,V)}),nt&&Gi(g,y),M}function d(g,_,v,S){var M=Ms(v);if(typeof M!="function")throw Error(ie(150));if(v=M.call(v),v==null)throw Error(ie(151));for(var T=M=null,A=_,y=_=0,C=null,P=v.next();A!==null&&!P.done;y++,P=v.next()){A.index>y?(C=A,A=null):C=A.sibling;var V=h(g,A,P.value,S);if(V===null){A===null&&(A=C);break}n&&A&&V.alternate===null&&e(g,A),_=s(V,_,y),T===null?M=V:T.sibling=V,T=V,A=C}if(P.done)return t(g,A),nt&&Gi(g,y),M;if(A===null){for(;!P.done;y++,P=v.next())P=f(g,P.value,S),P!==null&&(_=s(P,_,y),T===null?M=P:T.sibling=P,T=P);return nt&&Gi(g,y),M}for(A=i(g,A);!P.done;y++,P=v.next())P=m(A,g,y,P.value,S),P!==null&&(n&&P.alternate!==null&&A.delete(P.key===null?y:P.key),_=s(P,_,y),T===null?M=P:T.sibling=P,T=P);return n&&A.forEach(function(oe){return e(g,oe)}),nt&&Gi(g,y),M}function p(g,_,v,S){if(typeof v=="object"&&v!==null&&v.type===Fr&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Vo:e:{for(var M=v.key,T=_;T!==null;){if(T.key===M){if(M=v.type,M===Fr){if(T.tag===7){t(g,T.sibling),_=r(T,v.props.children),_.return=g,g=_;break e}}else if(T.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===mi&&Kh(M)===T.type){t(g,T.sibling),_=r(T,v.props),_.ref=Cs(g,T,v),_.return=g,g=_;break e}t(g,T);break}else e(g,T);T=T.sibling}v.type===Fr?(_=Qi(v.props.children,g.mode,S,v.key),_.return=g,g=_):(S=Fa(v.type,v.key,v.props,null,g.mode,S),S.ref=Cs(g,_,v),S.return=g,g=S)}return o(g);case zr:e:{for(T=v.key;_!==null;){if(_.key===T)if(_.tag===4&&_.stateNode.containerInfo===v.containerInfo&&_.stateNode.implementation===v.implementation){t(g,_.sibling),_=r(_,v.children||[]),_.return=g,g=_;break e}else{t(g,_);break}else e(g,_);_=_.sibling}_=cu(v,g.mode,S),_.return=g,g=_}return o(g);case mi:return T=v._init,p(g,_,T(v._payload),S)}if(Us(v))return x(g,_,v,S);if(Ms(v))return d(g,_,v,S);Ko(g,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,_!==null&&_.tag===6?(t(g,_.sibling),_=r(_,v),_.return=g,g=_):(t(g,_),_=uu(v,g.mode,S),_.return=g,g=_),o(g)):t(g,_)}return p}var us=Km(!0),Qm=Km(!1),No={},Bn=Ii(No),go=Ii(No),vo=Ii(No);function $i(n){if(n===No)throw Error(ie(174));return n}function Pf(n,e){switch(Je(vo,e),Je(go,n),Je(Bn,No),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:ac(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=ac(e,n)}et(Bn),Je(Bn,e)}function cs(){et(Bn),et(go),et(vo)}function eg(n){$i(vo.current);var e=$i(Bn.current),t=ac(e,n.type);e!==t&&(Je(go,n),Je(Bn,t))}function Rf(n){go.current===n&&(et(Bn),et(go))}var rt=Ii(0);function il(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var iu=[];function Df(){for(var n=0;n<iu.length;n++)iu[n]._workInProgressVersionPrimary=null;iu.length=0}var Da=ui.ReactCurrentDispatcher,ru=ui.ReactCurrentBatchConfig,rr=0,ot=null,gt=null,wt=null,rl=!1,Zs=!1,_o=0,b_=0;function Pt(){throw Error(ie(321))}function If(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!In(n[t],e[t]))return!1;return!0}function Nf(n,e,t,i,r,s){if(rr=s,ot=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Da.current=n===null||n.memoizedState===null?P_:R_,n=t(i,r),Zs){s=0;do{if(Zs=!1,_o=0,25<=s)throw Error(ie(301));s+=1,wt=gt=null,e.updateQueue=null,Da.current=D_,n=t(i,r)}while(Zs)}if(Da.current=sl,e=gt!==null&&gt.next!==null,rr=0,wt=gt=ot=null,rl=!1,e)throw Error(ie(300));return n}function kf(){var n=_o!==0;return _o=0,n}function kn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return wt===null?ot.memoizedState=wt=n:wt=wt.next=n,wt}function Sn(){if(gt===null){var n=ot.alternate;n=n!==null?n.memoizedState:null}else n=gt.next;var e=wt===null?ot.memoizedState:wt.next;if(e!==null)wt=e,gt=n;else{if(n===null)throw Error(ie(310));gt=n,n={memoizedState:gt.memoizedState,baseState:gt.baseState,baseQueue:gt.baseQueue,queue:gt.queue,next:null},wt===null?ot.memoizedState=wt=n:wt=wt.next=n}return wt}function xo(n,e){return typeof e=="function"?e(n):e}function su(n){var e=Sn(),t=e.queue;if(t===null)throw Error(ie(311));t.lastRenderedReducer=n;var i=gt,r=i.baseQueue,s=t.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,t.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((rr&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:n(i,u.action);else{var f={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=f,o=i):l=l.next=f,ot.lanes|=c,sr|=c}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,In(i,e.memoizedState)||(Xt=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,t.lastRenderedState=i}if(n=t.interleaved,n!==null){r=n;do s=r.lane,ot.lanes|=s,sr|=s,r=r.next;while(r!==n)}else r===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function ou(n){var e=Sn(),t=e.queue;if(t===null)throw Error(ie(311));t.lastRenderedReducer=n;var i=t.dispatch,r=t.pending,s=e.memoizedState;if(r!==null){t.pending=null;var o=r=r.next;do s=n(s,o.action),o=o.next;while(o!==r);In(s,e.memoizedState)||(Xt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),t.lastRenderedState=s}return[s,i]}function tg(){}function ng(n,e){var t=ot,i=Sn(),r=e(),s=!In(i.memoizedState,r);if(s&&(i.memoizedState=r,Xt=!0),i=i.queue,zf(sg.bind(null,t,i,n),[n]),i.getSnapshot!==e||s||wt!==null&&wt.memoizedState.tag&1){if(t.flags|=2048,yo(9,rg.bind(null,t,i,r,e),void 0,null),Et===null)throw Error(ie(349));rr&30||ig(t,e,r)}return r}function ig(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=ot.updateQueue,e===null?(e={lastEffect:null,stores:null},ot.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function rg(n,e,t,i){e.value=t,e.getSnapshot=i,og(e)&&ag(n)}function sg(n,e,t){return t(function(){og(e)&&ag(n)})}function og(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!In(n,t)}catch{return!0}}function ag(n){var e=ai(n,1);e!==null&&Dn(e,n,1,-1)}function Qh(n){var e=kn();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:xo,lastRenderedState:n},e.queue=n,n=n.dispatch=L_.bind(null,ot,n),[e.memoizedState,n]}function yo(n,e,t,i){return n={tag:n,create:e,destroy:t,deps:i,next:null},e=ot.updateQueue,e===null?(e={lastEffect:null,stores:null},ot.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(i=t.next,t.next=n,n.next=i,e.lastEffect=n)),n}function lg(){return Sn().memoizedState}function Ia(n,e,t,i){var r=kn();ot.flags|=n,r.memoizedState=yo(1|e,t,void 0,i===void 0?null:i)}function Ml(n,e,t,i){var r=Sn();i=i===void 0?null:i;var s=void 0;if(gt!==null){var o=gt.memoizedState;if(s=o.destroy,i!==null&&If(i,o.deps)){r.memoizedState=yo(e,t,s,i);return}}ot.flags|=n,r.memoizedState=yo(1|e,t,s,i)}function ed(n,e){return Ia(8390656,8,n,e)}function zf(n,e){return Ml(2048,8,n,e)}function ug(n,e){return Ml(4,2,n,e)}function cg(n,e){return Ml(4,4,n,e)}function fg(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function hg(n,e,t){return t=t!=null?t.concat([n]):null,Ml(4,4,fg.bind(null,e,n),t)}function Ff(){}function dg(n,e){var t=Sn();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&If(e,i[1])?i[0]:(t.memoizedState=[n,e],n)}function pg(n,e){var t=Sn();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&If(e,i[1])?i[0]:(n=n(),t.memoizedState=[n,e],n)}function mg(n,e,t){return rr&21?(In(t,e)||(t=_m(),ot.lanes|=t,sr|=t,n.baseState=!0),e):(n.baseState&&(n.baseState=!1,Xt=!0),n.memoizedState=t)}function C_(n,e){var t=qe;qe=t!==0&&4>t?t:4,n(!0);var i=ru.transition;ru.transition={};try{n(!1),e()}finally{qe=t,ru.transition=i}}function gg(){return Sn().memoizedState}function A_(n,e,t){var i=Ci(n);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},vg(n))_g(e,t);else if(t=Ym(n,e,t,i),t!==null){var r=Bt();Dn(t,n,i,r),xg(t,e,i)}}function L_(n,e,t){var i=Ci(n),r={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(vg(n))_g(e,r);else{var s=n.alternate;if(n.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,t);if(r.hasEagerState=!0,r.eagerState=a,In(a,o)){var l=e.interleaved;l===null?(r.next=r,Af(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}t=Ym(n,e,r,i),t!==null&&(r=Bt(),Dn(t,n,i,r),xg(t,e,i))}}function vg(n){var e=n.alternate;return n===ot||e!==null&&e===ot}function _g(n,e){Zs=rl=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function xg(n,e,t){if(t&4194240){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,pf(n,t)}}var sl={readContext:yn,useCallback:Pt,useContext:Pt,useEffect:Pt,useImperativeHandle:Pt,useInsertionEffect:Pt,useLayoutEffect:Pt,useMemo:Pt,useReducer:Pt,useRef:Pt,useState:Pt,useDebugValue:Pt,useDeferredValue:Pt,useTransition:Pt,useMutableSource:Pt,useSyncExternalStore:Pt,useId:Pt,unstable_isNewReconciler:!1},P_={readContext:yn,useCallback:function(n,e){return kn().memoizedState=[n,e===void 0?null:e],n},useContext:yn,useEffect:ed,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,Ia(4194308,4,fg.bind(null,e,n),t)},useLayoutEffect:function(n,e){return Ia(4194308,4,n,e)},useInsertionEffect:function(n,e){return Ia(4,2,n,e)},useMemo:function(n,e){var t=kn();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var i=kn();return e=t!==void 0?t(e):e,i.memoizedState=i.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},i.queue=n,n=n.dispatch=A_.bind(null,ot,n),[i.memoizedState,n]},useRef:function(n){var e=kn();return n={current:n},e.memoizedState=n},useState:Qh,useDebugValue:Ff,useDeferredValue:function(n){return kn().memoizedState=n},useTransition:function(){var n=Qh(!1),e=n[0];return n=C_.bind(null,n[1]),kn().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var i=ot,r=kn();if(nt){if(t===void 0)throw Error(ie(407));t=t()}else{if(t=e(),Et===null)throw Error(ie(349));rr&30||ig(i,e,t)}r.memoizedState=t;var s={value:t,getSnapshot:e};return r.queue=s,ed(sg.bind(null,i,s,n),[n]),i.flags|=2048,yo(9,rg.bind(null,i,s,t,e),void 0,null),t},useId:function(){var n=kn(),e=Et.identifierPrefix;if(nt){var t=ni,i=ti;t=(i&~(1<<32-Rn(i)-1)).toString(32)+t,e=":"+e+"R"+t,t=_o++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=b_++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},R_={readContext:yn,useCallback:dg,useContext:yn,useEffect:zf,useImperativeHandle:hg,useInsertionEffect:ug,useLayoutEffect:cg,useMemo:pg,useReducer:su,useRef:lg,useState:function(){return su(xo)},useDebugValue:Ff,useDeferredValue:function(n){var e=Sn();return mg(e,gt.memoizedState,n)},useTransition:function(){var n=su(xo)[0],e=Sn().memoizedState;return[n,e]},useMutableSource:tg,useSyncExternalStore:ng,useId:gg,unstable_isNewReconciler:!1},D_={readContext:yn,useCallback:dg,useContext:yn,useEffect:zf,useImperativeHandle:hg,useInsertionEffect:ug,useLayoutEffect:cg,useMemo:pg,useReducer:ou,useRef:lg,useState:function(){return ou(xo)},useDebugValue:Ff,useDeferredValue:function(n){var e=Sn();return gt===null?e.memoizedState=n:mg(e,gt.memoizedState,n)},useTransition:function(){var n=ou(xo)[0],e=Sn().memoizedState;return[n,e]},useMutableSource:tg,useSyncExternalStore:ng,useId:gg,unstable_isNewReconciler:!1};function fs(n,e){try{var t="",i=e;do t+=ov(i),i=i.return;while(i);var r=t}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:n,source:e,stack:r,digest:null}}function au(n,e,t){return{value:n,source:null,stack:t??null,digest:e??null}}function Pc(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var I_=typeof WeakMap=="function"?WeakMap:Map;function yg(n,e,t){t=ii(-1,t),t.tag=3,t.payload={element:null};var i=e.value;return t.callback=function(){al||(al=!0,Bc=i),Pc(n,e)},t}function Sg(n,e,t){t=ii(-1,t),t.tag=3;var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;t.payload=function(){return i(r)},t.callback=function(){Pc(n,e)}}var s=n.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){Pc(n,e),typeof i!="function"&&(bi===null?bi=new Set([this]):bi.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),t}function td(n,e,t){var i=n.pingCache;if(i===null){i=n.pingCache=new I_;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(t)||(r.add(t),n=q_.bind(null,n,e,t),e.then(n,n))}function nd(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function id(n,e,t,i,r){return n.mode&1?(n.flags|=65536,n.lanes=r,n):(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=ii(-1,1),e.tag=2,Ti(t,e,1))),t.lanes|=1),n)}var N_=ui.ReactCurrentOwner,Xt=!1;function Ot(n,e,t,i){e.child=n===null?Qm(e,null,t,i):us(e,n.child,t,i)}function rd(n,e,t,i,r){t=t.render;var s=e.ref;return es(e,r),i=Nf(n,e,t,i,s,r),t=kf(),n!==null&&!Xt?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,li(n,e,r)):(nt&&t&&Mf(e),e.flags|=1,Ot(n,e,i,r),e.child)}function sd(n,e,t,i,r){if(n===null){var s=t.type;return typeof s=="function"&&!jf(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=s,Mg(n,e,s,i,r)):(n=Fa(t.type,null,i,e,e.mode,r),n.ref=e.ref,n.return=e,e.child=n)}if(s=n.child,!(n.lanes&r)){var o=s.memoizedProps;if(t=t.compare,t=t!==null?t:fo,t(o,i)&&n.ref===e.ref)return li(n,e,r)}return e.flags|=1,n=Ai(s,i),n.ref=e.ref,n.return=e,e.child=n}function Mg(n,e,t,i,r){if(n!==null){var s=n.memoizedProps;if(fo(s,i)&&n.ref===e.ref)if(Xt=!1,e.pendingProps=i=s,(n.lanes&r)!==0)n.flags&131072&&(Xt=!0);else return e.lanes=n.lanes,li(n,e,r)}return Rc(n,e,t,i,r)}function wg(n,e,t){var i=e.pendingProps,r=i.children,s=n!==null?n.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Je(qr,nn),nn|=t;else{if(!(t&1073741824))return n=s!==null?s.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,Je(qr,nn),nn|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:t,Je(qr,nn),nn|=i}else s!==null?(i=s.baseLanes|t,e.memoizedState=null):i=t,Je(qr,nn),nn|=i;return Ot(n,e,r,t),e.child}function Eg(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function Rc(n,e,t,i,r){var s=Yt(t)?nr:Nt.current;return s=as(e,s),es(e,r),t=Nf(n,e,t,i,s,r),i=kf(),n!==null&&!Xt?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,li(n,e,r)):(nt&&i&&Mf(e),e.flags|=1,Ot(n,e,t,r),e.child)}function od(n,e,t,i,r){if(Yt(t)){var s=!0;Ja(e)}else s=!1;if(es(e,r),e.stateNode===null)Na(n,e),Jm(e,t,i),Lc(e,t,i,r),i=!0;else if(n===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=t.contextType;typeof u=="object"&&u!==null?u=yn(u):(u=Yt(t)?nr:Nt.current,u=as(e,u));var c=t.getDerivedStateFromProps,f=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&Jh(e,o,i,u),gi=!1;var h=e.memoizedState;o.state=h,nl(e,i,o,r),l=e.memoizedState,a!==i||h!==l||qt.current||gi?(typeof c=="function"&&(Ac(e,t,c,i),l=e.memoizedState),(a=gi||Zh(e,t,a,i,h,l,u))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,$m(n,e),a=e.memoizedProps,u=e.type===e.elementType?a:bn(e.type,a),o.props=u,f=e.pendingProps,h=o.context,l=t.contextType,typeof l=="object"&&l!==null?l=yn(l):(l=Yt(t)?nr:Nt.current,l=as(e,l));var m=t.getDerivedStateFromProps;(c=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||h!==l)&&Jh(e,o,i,l),gi=!1,h=e.memoizedState,o.state=h,nl(e,i,o,r);var x=e.memoizedState;a!==f||h!==x||qt.current||gi?(typeof m=="function"&&(Ac(e,t,m,i),x=e.memoizedState),(u=gi||Zh(e,t,u,i,h,x,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,x,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,x,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=x),o.props=i,o.state=x,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=1024),i=!1)}return Dc(n,e,t,i,s,r)}function Dc(n,e,t,i,r,s){Eg(n,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&jh(e,t,!1),li(n,e,s);i=e.stateNode,N_.current=e;var a=o&&typeof t.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,n!==null&&o?(e.child=us(e,n.child,null,s),e.child=us(e,null,a,s)):Ot(n,e,a,s),e.memoizedState=i.state,r&&jh(e,t,!0),e.child}function Tg(n){var e=n.stateNode;e.pendingContext?Wh(n,e.pendingContext,e.pendingContext!==e.context):e.context&&Wh(n,e.context,!1),Pf(n,e.containerInfo)}function ad(n,e,t,i,r){return ls(),Ef(r),e.flags|=256,Ot(n,e,t,i),e.child}var Ic={dehydrated:null,treeContext:null,retryLane:0};function Nc(n){return{baseLanes:n,cachePool:null,transitions:null}}function bg(n,e,t){var i=e.pendingProps,r=rt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=n!==null&&n.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(r|=1),Je(rt,r&1),n===null)return bc(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(e.mode&1?n.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,n=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Tl(o,i,0,null),n=Qi(n,i,t,null),s.return=e,n.return=e,s.sibling=n,e.child=s,e.child.memoizedState=Nc(t),e.memoizedState=Ic,n):Of(e,o));if(r=n.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return k_(n,e,o,i,a,r,t);if(s){s=i.fallback,o=e.mode,r=n.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Ai(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Ai(a,s):(s=Qi(s,o,t,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=n.child.memoizedState,o=o===null?Nc(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=n.childLanes&~t,e.memoizedState=Ic,i}return s=n.child,n=s.sibling,i=Ai(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=t),i.return=e,i.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=i,e.memoizedState=null,i}function Of(n,e){return e=Tl({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function Qo(n,e,t,i){return i!==null&&Ef(i),us(e,n.child,null,t),n=Of(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function k_(n,e,t,i,r,s,o){if(t)return e.flags&256?(e.flags&=-257,i=au(Error(ie(422))),Qo(n,e,o,i)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Tl({mode:"visible",children:i.children},r,0,null),s=Qi(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&us(e,n.child,null,o),e.child.memoizedState=Nc(o),e.memoizedState=Ic,s);if(!(e.mode&1))return Qo(n,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ie(419)),i=au(s,i,void 0),Qo(n,e,o,i)}if(a=(o&n.childLanes)!==0,Xt||a){if(i=Et,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,ai(n,r),Dn(i,n,r,-1))}return Wf(),i=au(Error(ie(421))),Qo(n,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=n.child,e=Y_.bind(null,n),r._reactRetry=e,null):(n=s.treeContext,sn=Ei(r.nextSibling),an=e,nt=!0,An=null,n!==null&&(dn[pn++]=ti,dn[pn++]=ni,dn[pn++]=ir,ti=n.id,ni=n.overflow,ir=e),e=Of(e,i.children),e.flags|=4096,e)}function ld(n,e,t){n.lanes|=e;var i=n.alternate;i!==null&&(i.lanes|=e),Cc(n.return,e,t)}function lu(n,e,t,i,r){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=t,s.tailMode=r)}function Cg(n,e,t){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Ot(n,e,i.children,t),i=rt.current,i&2)i=i&1|2,e.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&ld(n,t,e);else if(n.tag===19)ld(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}i&=1}if(Je(rt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(t=e.child,r=null;t!==null;)n=t.alternate,n!==null&&il(n)===null&&(r=t),t=t.sibling;t=r,t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null),lu(e,!1,r,t,s);break;case"backwards":for(t=null,r=e.child,e.child=null;r!==null;){if(n=r.alternate,n!==null&&il(n)===null){e.child=r;break}n=r.sibling,r.sibling=t,t=r,r=n}lu(e,!0,t,null,s);break;case"together":lu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Na(n,e){!(e.mode&1)&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function li(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),sr|=e.lanes,!(t&e.childLanes))return null;if(n!==null&&e.child!==n.child)throw Error(ie(153));if(e.child!==null){for(n=e.child,t=Ai(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=Ai(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function z_(n,e,t){switch(e.tag){case 3:Tg(e),ls();break;case 5:eg(e);break;case 1:Yt(e.type)&&Ja(e);break;case 4:Pf(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;Je(el,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(Je(rt,rt.current&1),e.flags|=128,null):t&e.child.childLanes?bg(n,e,t):(Je(rt,rt.current&1),n=li(n,e,t),n!==null?n.sibling:null);Je(rt,rt.current&1);break;case 19:if(i=(t&e.childLanes)!==0,n.flags&128){if(i)return Cg(n,e,t);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Je(rt,rt.current),i)break;return null;case 22:case 23:return e.lanes=0,wg(n,e,t)}return li(n,e,t)}var Ag,kc,Lg,Pg;Ag=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};kc=function(){};Lg=function(n,e,t,i){var r=n.memoizedProps;if(r!==i){n=e.stateNode,$i(Bn.current);var s=null;switch(t){case"input":r=ic(n,r),i=ic(n,i),s=[];break;case"select":r=at({},r,{value:void 0}),i=at({},i,{value:void 0}),s=[];break;case"textarea":r=oc(n,r),i=oc(n,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(n.onclick=$a)}lc(t,i);var o;t=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ro.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(t||(t={}),t[o]=l[o])}else t||(s||(s=[]),s.push(u,t)),t=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ro.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Ke("scroll",n),s||a===l||(s=[])):(s=s||[]).push(u,l))}t&&(s=s||[]).push("style",t);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};Pg=function(n,e,t,i){t!==i&&(e.flags|=4)};function As(n,e){if(!nt)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function Rt(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,i=0;if(e)for(var r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=n,r=r.sibling;else for(r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=n,r=r.sibling;return n.subtreeFlags|=i,n.childLanes=t,e}function F_(n,e,t){var i=e.pendingProps;switch(wf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Rt(e),null;case 1:return Yt(e.type)&&Za(),Rt(e),null;case 3:return i=e.stateNode,cs(),et(qt),et(Nt),Df(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(n===null||n.child===null)&&(Jo(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,An!==null&&(Hc(An),An=null))),kc(n,e),Rt(e),null;case 5:Rf(e);var r=$i(vo.current);if(t=e.type,n!==null&&e.stateNode!=null)Lg(n,e,t,i,r),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ie(166));return Rt(e),null}if(n=$i(Bn.current),Jo(e)){i=e.stateNode,t=e.type;var s=e.memoizedProps;switch(i[On]=e,i[mo]=s,n=(e.mode&1)!==0,t){case"dialog":Ke("cancel",i),Ke("close",i);break;case"iframe":case"object":case"embed":Ke("load",i);break;case"video":case"audio":for(r=0;r<Vs.length;r++)Ke(Vs[r],i);break;case"source":Ke("error",i);break;case"img":case"image":case"link":Ke("error",i),Ke("load",i);break;case"details":Ke("toggle",i);break;case"input":vh(i,s),Ke("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},Ke("invalid",i);break;case"textarea":xh(i,s),Ke("invalid",i)}lc(t,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Zo(i.textContent,a,n),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Zo(i.textContent,a,n),r=["children",""+a]):ro.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Ke("scroll",i)}switch(t){case"input":Go(i),_h(i,s,!0);break;case"textarea":Go(i),yh(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=$a)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=im(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=o.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof i.is=="string"?n=o.createElement(t,{is:i.is}):(n=o.createElement(t),t==="select"&&(o=n,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):n=o.createElementNS(n,t),n[On]=e,n[mo]=i,Ag(n,e,!1,!1),e.stateNode=n;e:{switch(o=uc(t,i),t){case"dialog":Ke("cancel",n),Ke("close",n),r=i;break;case"iframe":case"object":case"embed":Ke("load",n),r=i;break;case"video":case"audio":for(r=0;r<Vs.length;r++)Ke(Vs[r],n);r=i;break;case"source":Ke("error",n),r=i;break;case"img":case"image":case"link":Ke("error",n),Ke("load",n),r=i;break;case"details":Ke("toggle",n),r=i;break;case"input":vh(n,i),r=ic(n,i),Ke("invalid",n);break;case"option":r=i;break;case"select":n._wrapperState={wasMultiple:!!i.multiple},r=at({},i,{value:void 0}),Ke("invalid",n);break;case"textarea":xh(n,i),r=oc(n,i),Ke("invalid",n);break;default:r=i}lc(t,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?om(n,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&rm(n,l)):s==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&so(n,l):typeof l=="number"&&so(n,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ro.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Ke("scroll",n):l!=null&&lf(n,s,l,o))}switch(t){case"input":Go(n),_h(n,i,!1);break;case"textarea":Go(n),yh(n);break;case"option":i.value!=null&&n.setAttribute("value",""+Pi(i.value));break;case"select":n.multiple=!!i.multiple,s=i.value,s!=null?Zr(n,!!i.multiple,s,!1):i.defaultValue!=null&&Zr(n,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(n.onclick=$a)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Rt(e),null;case 6:if(n&&e.stateNode!=null)Pg(n,e,n.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ie(166));if(t=$i(vo.current),$i(Bn.current),Jo(e)){if(i=e.stateNode,t=e.memoizedProps,i[On]=e,(s=i.nodeValue!==t)&&(n=an,n!==null))switch(n.tag){case 3:Zo(i.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Zo(i.nodeValue,t,(n.mode&1)!==0)}s&&(e.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[On]=e,e.stateNode=i}return Rt(e),null;case 13:if(et(rt),i=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(nt&&sn!==null&&e.mode&1&&!(e.flags&128))qm(),ls(),e.flags|=98560,s=!1;else if(s=Jo(e),i!==null&&i.dehydrated!==null){if(n===null){if(!s)throw Error(ie(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ie(317));s[On]=e}else ls(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Rt(e),s=!1}else An!==null&&(Hc(An),An=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=t,e):(i=i!==null,i!==(n!==null&&n.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(n===null||rt.current&1?vt===0&&(vt=3):Wf())),e.updateQueue!==null&&(e.flags|=4),Rt(e),null);case 4:return cs(),kc(n,e),n===null&&ho(e.stateNode.containerInfo),Rt(e),null;case 10:return Cf(e.type._context),Rt(e),null;case 17:return Yt(e.type)&&Za(),Rt(e),null;case 19:if(et(rt),s=e.memoizedState,s===null)return Rt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)As(s,!1);else{if(vt!==0||n!==null&&n.flags&128)for(n=e.child;n!==null;){if(o=il(n),o!==null){for(e.flags|=128,As(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=t,t=e.child;t!==null;)s=t,n=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=n,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,n=o.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return Je(rt,rt.current&1|2),e.child}n=n.sibling}s.tail!==null&&ut()>hs&&(e.flags|=128,i=!0,As(s,!1),e.lanes=4194304)}else{if(!i)if(n=il(o),n!==null){if(e.flags|=128,i=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),As(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!nt)return Rt(e),null}else 2*ut()-s.renderingStartTime>hs&&t!==1073741824&&(e.flags|=128,i=!0,As(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(t=s.last,t!==null?t.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=ut(),e.sibling=null,t=rt.current,Je(rt,i?t&1|2:t&1),e):(Rt(e),null);case 22:case 23:return Hf(),i=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?nn&1073741824&&(Rt(e),e.subtreeFlags&6&&(e.flags|=8192)):Rt(e),null;case 24:return null;case 25:return null}throw Error(ie(156,e.tag))}function O_(n,e){switch(wf(e),e.tag){case 1:return Yt(e.type)&&Za(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return cs(),et(qt),et(Nt),Df(),n=e.flags,n&65536&&!(n&128)?(e.flags=n&-65537|128,e):null;case 5:return Rf(e),null;case 13:if(et(rt),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(ie(340));ls()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return et(rt),null;case 4:return cs(),null;case 10:return Cf(e.type._context),null;case 22:case 23:return Hf(),null;case 24:return null;default:return null}}var ea=!1,It=!1,U_=typeof WeakSet=="function"?WeakSet:Set,_e=null;function Xr(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){lt(n,e,i)}else t.current=null}function zc(n,e,t){try{t()}catch(i){lt(n,e,i)}}var ud=!1;function B_(n,e){if(xc=Xa,n=Nm(),Sf(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else e:{t=(t=n.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var o=0,a=-1,l=-1,u=0,c=0,f=n,h=null;t:for(;;){for(var m;f!==t||r!==0&&f.nodeType!==3||(a=o+r),f!==s||i!==0&&f.nodeType!==3||(l=o+i),f.nodeType===3&&(o+=f.nodeValue.length),(m=f.firstChild)!==null;)h=f,f=m;for(;;){if(f===n)break t;if(h===t&&++u===r&&(a=o),h===s&&++c===i&&(l=o),(m=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=m}t=a===-1||l===-1?null:{start:a,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(yc={focusedElem:n,selectionRange:t},Xa=!1,_e=e;_e!==null;)if(e=_e,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,_e=n;else for(;_e!==null;){e=_e;try{var x=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var d=x.memoizedProps,p=x.memoizedState,g=e.stateNode,_=g.getSnapshotBeforeUpdate(e.elementType===e.type?d:bn(e.type,d),p);g.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ie(163))}}catch(S){lt(e,e.return,S)}if(n=e.sibling,n!==null){n.return=e.return,_e=n;break}_e=e.return}return x=ud,ud=!1,x}function Js(n,e,t){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&n)===n){var s=r.destroy;r.destroy=void 0,s!==void 0&&zc(e,t,s)}r=r.next}while(r!==i)}}function wl(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var i=t.create;t.destroy=i()}t=t.next}while(t!==e)}}function Fc(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function Rg(n){var e=n.alternate;e!==null&&(n.alternate=null,Rg(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[On],delete e[mo],delete e[wc],delete e[M_],delete e[w_])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Dg(n){return n.tag===5||n.tag===3||n.tag===4}function cd(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Dg(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Oc(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=$a));else if(i!==4&&(n=n.child,n!==null))for(Oc(n,e,t),n=n.sibling;n!==null;)Oc(n,e,t),n=n.sibling}function Uc(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(i!==4&&(n=n.child,n!==null))for(Uc(n,e,t),n=n.sibling;n!==null;)Uc(n,e,t),n=n.sibling}var Tt=null,Cn=!1;function ci(n,e,t){for(t=t.child;t!==null;)Ig(n,e,t),t=t.sibling}function Ig(n,e,t){if(Un&&typeof Un.onCommitFiberUnmount=="function")try{Un.onCommitFiberUnmount(ml,t)}catch{}switch(t.tag){case 5:It||Xr(t,e);case 6:var i=Tt,r=Cn;Tt=null,ci(n,e,t),Tt=i,Cn=r,Tt!==null&&(Cn?(n=Tt,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):Tt.removeChild(t.stateNode));break;case 18:Tt!==null&&(Cn?(n=Tt,t=t.stateNode,n.nodeType===8?tu(n.parentNode,t):n.nodeType===1&&tu(n,t),uo(n)):tu(Tt,t.stateNode));break;case 4:i=Tt,r=Cn,Tt=t.stateNode.containerInfo,Cn=!0,ci(n,e,t),Tt=i,Cn=r;break;case 0:case 11:case 14:case 15:if(!It&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&zc(t,e,o),r=r.next}while(r!==i)}ci(n,e,t);break;case 1:if(!It&&(Xr(t,e),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(a){lt(t,e,a)}ci(n,e,t);break;case 21:ci(n,e,t);break;case 22:t.mode&1?(It=(i=It)||t.memoizedState!==null,ci(n,e,t),It=i):ci(n,e,t);break;default:ci(n,e,t)}}function fd(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new U_),e.forEach(function(i){var r=$_.bind(null,n,i);t.has(i)||(t.add(i),i.then(r,r))})}}function Mn(n,e){var t=e.deletions;if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];try{var s=n,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Tt=a.stateNode,Cn=!1;break e;case 3:Tt=a.stateNode.containerInfo,Cn=!0;break e;case 4:Tt=a.stateNode.containerInfo,Cn=!0;break e}a=a.return}if(Tt===null)throw Error(ie(160));Ig(s,o,r),Tt=null,Cn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){lt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Ng(e,n),e=e.sibling}function Ng(n,e){var t=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Mn(e,n),Nn(n),i&4){try{Js(3,n,n.return),wl(3,n)}catch(d){lt(n,n.return,d)}try{Js(5,n,n.return)}catch(d){lt(n,n.return,d)}}break;case 1:Mn(e,n),Nn(n),i&512&&t!==null&&Xr(t,t.return);break;case 5:if(Mn(e,n),Nn(n),i&512&&t!==null&&Xr(t,t.return),n.flags&32){var r=n.stateNode;try{so(r,"")}catch(d){lt(n,n.return,d)}}if(i&4&&(r=n.stateNode,r!=null)){var s=n.memoizedProps,o=t!==null?t.memoizedProps:s,a=n.type,l=n.updateQueue;if(n.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&tm(r,s),uc(a,o);var u=uc(a,s);for(o=0;o<l.length;o+=2){var c=l[o],f=l[o+1];c==="style"?om(r,f):c==="dangerouslySetInnerHTML"?rm(r,f):c==="children"?so(r,f):lf(r,c,f,u)}switch(a){case"input":rc(r,s);break;case"textarea":nm(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?Zr(r,!!s.multiple,m,!1):h!==!!s.multiple&&(s.defaultValue!=null?Zr(r,!!s.multiple,s.defaultValue,!0):Zr(r,!!s.multiple,s.multiple?[]:"",!1))}r[mo]=s}catch(d){lt(n,n.return,d)}}break;case 6:if(Mn(e,n),Nn(n),i&4){if(n.stateNode===null)throw Error(ie(162));r=n.stateNode,s=n.memoizedProps;try{r.nodeValue=s}catch(d){lt(n,n.return,d)}}break;case 3:if(Mn(e,n),Nn(n),i&4&&t!==null&&t.memoizedState.isDehydrated)try{uo(e.containerInfo)}catch(d){lt(n,n.return,d)}break;case 4:Mn(e,n),Nn(n);break;case 13:Mn(e,n),Nn(n),r=n.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Vf=ut())),i&4&&fd(n);break;case 22:if(c=t!==null&&t.memoizedState!==null,n.mode&1?(It=(u=It)||c,Mn(e,n),It=u):Mn(e,n),Nn(n),i&8192){if(u=n.memoizedState!==null,(n.stateNode.isHidden=u)&&!c&&n.mode&1)for(_e=n,c=n.child;c!==null;){for(f=_e=c;_e!==null;){switch(h=_e,m=h.child,h.tag){case 0:case 11:case 14:case 15:Js(4,h,h.return);break;case 1:Xr(h,h.return);var x=h.stateNode;if(typeof x.componentWillUnmount=="function"){i=h,t=h.return;try{e=i,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(d){lt(i,t,d)}}break;case 5:Xr(h,h.return);break;case 22:if(h.memoizedState!==null){dd(f);continue}}m!==null?(m.return=h,_e=m):dd(f)}c=c.sibling}e:for(c=null,f=n;;){if(f.tag===5){if(c===null){c=f;try{r=f.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=sm("display",o))}catch(d){lt(n,n.return,d)}}}else if(f.tag===6){if(c===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(d){lt(n,n.return,d)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===n)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===n)break e;for(;f.sibling===null;){if(f.return===null||f.return===n)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Mn(e,n),Nn(n),i&4&&fd(n);break;case 21:break;default:Mn(e,n),Nn(n)}}function Nn(n){var e=n.flags;if(e&2){try{e:{for(var t=n.return;t!==null;){if(Dg(t)){var i=t;break e}t=t.return}throw Error(ie(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(so(r,""),i.flags&=-33);var s=cd(n);Uc(n,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=cd(n);Oc(n,a,o);break;default:throw Error(ie(161))}}catch(l){lt(n,n.return,l)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function V_(n,e,t){_e=n,kg(n)}function kg(n,e,t){for(var i=(n.mode&1)!==0;_e!==null;){var r=_e,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||ea;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||It;a=ea;var u=It;if(ea=o,(It=l)&&!u)for(_e=r;_e!==null;)o=_e,l=o.child,o.tag===22&&o.memoizedState!==null?pd(r):l!==null?(l.return=o,_e=l):pd(r);for(;s!==null;)_e=s,kg(s),s=s.sibling;_e=r,ea=a,It=u}hd(n)}else r.subtreeFlags&8772&&s!==null?(s.return=r,_e=s):hd(n)}}function hd(n){for(;_e!==null;){var e=_e;if(e.flags&8772){var t=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:It||wl(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!It)if(t===null)i.componentDidMount();else{var r=e.elementType===e.type?t.memoizedProps:bn(e.type,t.memoizedProps);i.componentDidUpdate(r,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&$h(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}$h(e,o,t)}break;case 5:var a=e.stateNode;if(t===null&&e.flags&4){t=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var f=c.dehydrated;f!==null&&uo(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ie(163))}It||e.flags&512&&Fc(e)}catch(h){lt(e,e.return,h)}}if(e===n){_e=null;break}if(t=e.sibling,t!==null){t.return=e.return,_e=t;break}_e=e.return}}function dd(n){for(;_e!==null;){var e=_e;if(e===n){_e=null;break}var t=e.sibling;if(t!==null){t.return=e.return,_e=t;break}_e=e.return}}function pd(n){for(;_e!==null;){var e=_e;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{wl(4,e)}catch(l){lt(e,t,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){lt(e,r,l)}}var s=e.return;try{Fc(e)}catch(l){lt(e,s,l)}break;case 5:var o=e.return;try{Fc(e)}catch(l){lt(e,o,l)}}}catch(l){lt(e,e.return,l)}if(e===n){_e=null;break}var a=e.sibling;if(a!==null){a.return=e.return,_e=a;break}_e=e.return}}var G_=Math.ceil,ol=ui.ReactCurrentDispatcher,Uf=ui.ReactCurrentOwner,_n=ui.ReactCurrentBatchConfig,He=0,Et=null,pt=null,Ct=0,nn=0,qr=Ii(0),vt=0,So=null,sr=0,El=0,Bf=0,Ks=null,jt=null,Vf=0,hs=1/0,Kn=null,al=!1,Bc=null,bi=null,ta=!1,yi=null,ll=0,Qs=0,Vc=null,ka=-1,za=0;function Bt(){return He&6?ut():ka!==-1?ka:ka=ut()}function Ci(n){return n.mode&1?He&2&&Ct!==0?Ct&-Ct:T_.transition!==null?(za===0&&(za=_m()),za):(n=qe,n!==0||(n=window.event,n=n===void 0?16:Tm(n.type)),n):1}function Dn(n,e,t,i){if(50<Qs)throw Qs=0,Vc=null,Error(ie(185));Ro(n,t,i),(!(He&2)||n!==Et)&&(n===Et&&(!(He&2)&&(El|=t),vt===4&&_i(n,Ct)),$t(n,i),t===1&&He===0&&!(e.mode&1)&&(hs=ut()+500,yl&&Ni()))}function $t(n,e){var t=n.callbackNode;Tv(n,e);var i=ja(n,n===Et?Ct:0);if(i===0)t!==null&&wh(t),n.callbackNode=null,n.callbackPriority=0;else if(e=i&-i,n.callbackPriority!==e){if(t!=null&&wh(t),e===1)n.tag===0?E_(md.bind(null,n)):Wm(md.bind(null,n)),y_(function(){!(He&6)&&Ni()}),t=null;else{switch(xm(i)){case 1:t=df;break;case 4:t=gm;break;case 16:t=Wa;break;case 536870912:t=vm;break;default:t=Wa}t=Hg(t,zg.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function zg(n,e){if(ka=-1,za=0,He&6)throw Error(ie(327));var t=n.callbackNode;if(ts()&&n.callbackNode!==t)return null;var i=ja(n,n===Et?Ct:0);if(i===0)return null;if(i&30||i&n.expiredLanes||e)e=ul(n,i);else{e=i;var r=He;He|=2;var s=Og();(Et!==n||Ct!==e)&&(Kn=null,hs=ut()+500,Ki(n,e));do try{j_();break}catch(a){Fg(n,a)}while(1);bf(),ol.current=s,He=r,pt!==null?e=0:(Et=null,Ct=0,e=vt)}if(e!==0){if(e===2&&(r=pc(n),r!==0&&(i=r,e=Gc(n,r))),e===1)throw t=So,Ki(n,0),_i(n,i),$t(n,ut()),t;if(e===6)_i(n,i);else{if(r=n.current.alternate,!(i&30)&&!H_(r)&&(e=ul(n,i),e===2&&(s=pc(n),s!==0&&(i=s,e=Gc(n,s))),e===1))throw t=So,Ki(n,0),_i(n,i),$t(n,ut()),t;switch(n.finishedWork=r,n.finishedLanes=i,e){case 0:case 1:throw Error(ie(345));case 2:Hi(n,jt,Kn);break;case 3:if(_i(n,i),(i&130023424)===i&&(e=Vf+500-ut(),10<e)){if(ja(n,0)!==0)break;if(r=n.suspendedLanes,(r&i)!==i){Bt(),n.pingedLanes|=n.suspendedLanes&r;break}n.timeoutHandle=Mc(Hi.bind(null,n,jt,Kn),e);break}Hi(n,jt,Kn);break;case 4:if(_i(n,i),(i&4194240)===i)break;for(e=n.eventTimes,r=-1;0<i;){var o=31-Rn(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=ut()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*G_(i/1960))-i,10<i){n.timeoutHandle=Mc(Hi.bind(null,n,jt,Kn),i);break}Hi(n,jt,Kn);break;case 5:Hi(n,jt,Kn);break;default:throw Error(ie(329))}}}return $t(n,ut()),n.callbackNode===t?zg.bind(null,n):null}function Gc(n,e){var t=Ks;return n.current.memoizedState.isDehydrated&&(Ki(n,e).flags|=256),n=ul(n,e),n!==2&&(e=jt,jt=t,e!==null&&Hc(e)),n}function Hc(n){jt===null?jt=n:jt.push.apply(jt,n)}function H_(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var r=t[i],s=r.getSnapshot;r=r.value;try{if(!In(s(),r))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function _i(n,e){for(e&=~Bf,e&=~El,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-Rn(e),i=1<<t;n[t]=-1,e&=~i}}function md(n){if(He&6)throw Error(ie(327));ts();var e=ja(n,0);if(!(e&1))return $t(n,ut()),null;var t=ul(n,e);if(n.tag!==0&&t===2){var i=pc(n);i!==0&&(e=i,t=Gc(n,i))}if(t===1)throw t=So,Ki(n,0),_i(n,e),$t(n,ut()),t;if(t===6)throw Error(ie(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,Hi(n,jt,Kn),$t(n,ut()),null}function Gf(n,e){var t=He;He|=1;try{return n(e)}finally{He=t,He===0&&(hs=ut()+500,yl&&Ni())}}function or(n){yi!==null&&yi.tag===0&&!(He&6)&&ts();var e=He;He|=1;var t=_n.transition,i=qe;try{if(_n.transition=null,qe=1,n)return n()}finally{qe=i,_n.transition=t,He=e,!(He&6)&&Ni()}}function Hf(){nn=qr.current,et(qr)}function Ki(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,x_(t)),pt!==null)for(t=pt.return;t!==null;){var i=t;switch(wf(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Za();break;case 3:cs(),et(qt),et(Nt),Df();break;case 5:Rf(i);break;case 4:cs();break;case 13:et(rt);break;case 19:et(rt);break;case 10:Cf(i.type._context);break;case 22:case 23:Hf()}t=t.return}if(Et=n,pt=n=Ai(n.current,null),Ct=nn=e,vt=0,So=null,Bf=El=sr=0,jt=Ks=null,Yi!==null){for(e=0;e<Yi.length;e++)if(t=Yi[e],i=t.interleaved,i!==null){t.interleaved=null;var r=i.next,s=t.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}t.pending=i}Yi=null}return n}function Fg(n,e){do{var t=pt;try{if(bf(),Da.current=sl,rl){for(var i=ot.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}rl=!1}if(rr=0,wt=gt=ot=null,Zs=!1,_o=0,Uf.current=null,t===null||t.return===null){vt=1,So=e,pt=null;break}e:{var s=n,o=t.return,a=t,l=e;if(e=Ct,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,f=c.tag;if(!(c.mode&1)&&(f===0||f===11||f===15)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var m=nd(o);if(m!==null){m.flags&=-257,id(m,o,a,s,e),m.mode&1&&td(s,u,e),e=m,l=u;var x=e.updateQueue;if(x===null){var d=new Set;d.add(l),e.updateQueue=d}else x.add(l);break e}else{if(!(e&1)){td(s,u,e),Wf();break e}l=Error(ie(426))}}else if(nt&&a.mode&1){var p=nd(o);if(p!==null){!(p.flags&65536)&&(p.flags|=256),id(p,o,a,s,e),Ef(fs(l,a));break e}}s=l=fs(l,a),vt!==4&&(vt=2),Ks===null?Ks=[s]:Ks.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var g=yg(s,l,e);Yh(s,g);break e;case 1:a=l;var _=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(bi===null||!bi.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=Sg(s,a,e);Yh(s,S);break e}}s=s.return}while(s!==null)}Bg(t)}catch(M){e=M,pt===t&&t!==null&&(pt=t=t.return);continue}break}while(1)}function Og(){var n=ol.current;return ol.current=sl,n===null?sl:n}function Wf(){(vt===0||vt===3||vt===2)&&(vt=4),Et===null||!(sr&268435455)&&!(El&268435455)||_i(Et,Ct)}function ul(n,e){var t=He;He|=2;var i=Og();(Et!==n||Ct!==e)&&(Kn=null,Ki(n,e));do try{W_();break}catch(r){Fg(n,r)}while(1);if(bf(),He=t,ol.current=i,pt!==null)throw Error(ie(261));return Et=null,Ct=0,vt}function W_(){for(;pt!==null;)Ug(pt)}function j_(){for(;pt!==null&&!gv();)Ug(pt)}function Ug(n){var e=Gg(n.alternate,n,nn);n.memoizedProps=n.pendingProps,e===null?Bg(n):pt=e,Uf.current=null}function Bg(n){var e=n;do{var t=e.alternate;if(n=e.return,e.flags&32768){if(t=O_(t,e),t!==null){t.flags&=32767,pt=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{vt=6,pt=null;return}}else if(t=F_(t,e,nn),t!==null){pt=t;return}if(e=e.sibling,e!==null){pt=e;return}pt=e=n}while(e!==null);vt===0&&(vt=5)}function Hi(n,e,t){var i=qe,r=_n.transition;try{_n.transition=null,qe=1,X_(n,e,t,i)}finally{_n.transition=r,qe=i}return null}function X_(n,e,t,i){do ts();while(yi!==null);if(He&6)throw Error(ie(327));t=n.finishedWork;var r=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(ie(177));n.callbackNode=null,n.callbackPriority=0;var s=t.lanes|t.childLanes;if(bv(n,s),n===Et&&(pt=Et=null,Ct=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||ta||(ta=!0,Hg(Wa,function(){return ts(),null})),s=(t.flags&15990)!==0,t.subtreeFlags&15990||s){s=_n.transition,_n.transition=null;var o=qe;qe=1;var a=He;He|=4,Uf.current=null,B_(n,t),Ng(t,n),h_(yc),Xa=!!xc,yc=xc=null,n.current=t,V_(t),vv(),He=a,qe=o,_n.transition=s}else n.current=t;if(ta&&(ta=!1,yi=n,ll=r),s=n.pendingLanes,s===0&&(bi=null),yv(t.stateNode),$t(n,ut()),e!==null)for(i=n.onRecoverableError,t=0;t<e.length;t++)r=e[t],i(r.value,{componentStack:r.stack,digest:r.digest});if(al)throw al=!1,n=Bc,Bc=null,n;return ll&1&&n.tag!==0&&ts(),s=n.pendingLanes,s&1?n===Vc?Qs++:(Qs=0,Vc=n):Qs=0,Ni(),null}function ts(){if(yi!==null){var n=xm(ll),e=_n.transition,t=qe;try{if(_n.transition=null,qe=16>n?16:n,yi===null)var i=!1;else{if(n=yi,yi=null,ll=0,He&6)throw Error(ie(331));var r=He;for(He|=4,_e=n.current;_e!==null;){var s=_e,o=s.child;if(_e.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(_e=u;_e!==null;){var c=_e;switch(c.tag){case 0:case 11:case 15:Js(8,c,s)}var f=c.child;if(f!==null)f.return=c,_e=f;else for(;_e!==null;){c=_e;var h=c.sibling,m=c.return;if(Rg(c),c===u){_e=null;break}if(h!==null){h.return=m,_e=h;break}_e=m}}}var x=s.alternate;if(x!==null){var d=x.child;if(d!==null){x.child=null;do{var p=d.sibling;d.sibling=null,d=p}while(d!==null)}}_e=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,_e=o;else e:for(;_e!==null;){if(s=_e,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Js(9,s,s.return)}var g=s.sibling;if(g!==null){g.return=s.return,_e=g;break e}_e=s.return}}var _=n.current;for(_e=_;_e!==null;){o=_e;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,_e=v;else e:for(o=_;_e!==null;){if(a=_e,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:wl(9,a)}}catch(M){lt(a,a.return,M)}if(a===o){_e=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,_e=S;break e}_e=a.return}}if(He=r,Ni(),Un&&typeof Un.onPostCommitFiberRoot=="function")try{Un.onPostCommitFiberRoot(ml,n)}catch{}i=!0}return i}finally{qe=t,_n.transition=e}}return!1}function gd(n,e,t){e=fs(t,e),e=yg(n,e,1),n=Ti(n,e,1),e=Bt(),n!==null&&(Ro(n,1,e),$t(n,e))}function lt(n,e,t){if(n.tag===3)gd(n,n,t);else for(;e!==null;){if(e.tag===3){gd(e,n,t);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(bi===null||!bi.has(i))){n=fs(t,n),n=Sg(e,n,1),e=Ti(e,n,1),n=Bt(),e!==null&&(Ro(e,1,n),$t(e,n));break}}e=e.return}}function q_(n,e,t){var i=n.pingCache;i!==null&&i.delete(e),e=Bt(),n.pingedLanes|=n.suspendedLanes&t,Et===n&&(Ct&t)===t&&(vt===4||vt===3&&(Ct&130023424)===Ct&&500>ut()-Vf?Ki(n,0):Bf|=t),$t(n,e)}function Vg(n,e){e===0&&(n.mode&1?(e=jo,jo<<=1,!(jo&130023424)&&(jo=4194304)):e=1);var t=Bt();n=ai(n,e),n!==null&&(Ro(n,e,t),$t(n,t))}function Y_(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),Vg(n,t)}function $_(n,e){var t=0;switch(n.tag){case 13:var i=n.stateNode,r=n.memoizedState;r!==null&&(t=r.retryLane);break;case 19:i=n.stateNode;break;default:throw Error(ie(314))}i!==null&&i.delete(e),Vg(n,t)}var Gg;Gg=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||qt.current)Xt=!0;else{if(!(n.lanes&t)&&!(e.flags&128))return Xt=!1,z_(n,e,t);Xt=!!(n.flags&131072)}else Xt=!1,nt&&e.flags&1048576&&jm(e,Qa,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Na(n,e),n=e.pendingProps;var r=as(e,Nt.current);es(e,t),r=Nf(null,e,i,n,r,t);var s=kf();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Yt(i)?(s=!0,Ja(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Lf(e),r.updater=Sl,e.stateNode=r,r._reactInternals=e,Lc(e,i,n,t),e=Dc(null,e,i,!0,s,t)):(e.tag=0,nt&&s&&Mf(e),Ot(null,e,r,t),e=e.child),e;case 16:i=e.elementType;e:{switch(Na(n,e),n=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=J_(i),n=bn(i,n),r){case 0:e=Rc(null,e,i,n,t);break e;case 1:e=od(null,e,i,n,t);break e;case 11:e=rd(null,e,i,n,t);break e;case 14:e=sd(null,e,i,bn(i.type,n),t);break e}throw Error(ie(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:bn(i,r),Rc(n,e,i,r,t);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:bn(i,r),od(n,e,i,r,t);case 3:e:{if(Tg(e),n===null)throw Error(ie(387));i=e.pendingProps,s=e.memoizedState,r=s.element,$m(n,e),nl(e,i,null,t);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=fs(Error(ie(423)),e),e=ad(n,e,i,t,r);break e}else if(i!==r){r=fs(Error(ie(424)),e),e=ad(n,e,i,t,r);break e}else for(sn=Ei(e.stateNode.containerInfo.firstChild),an=e,nt=!0,An=null,t=Qm(e,null,i,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(ls(),i===r){e=li(n,e,t);break e}Ot(n,e,i,t)}e=e.child}return e;case 5:return eg(e),n===null&&bc(e),i=e.type,r=e.pendingProps,s=n!==null?n.memoizedProps:null,o=r.children,Sc(i,r)?o=null:s!==null&&Sc(i,s)&&(e.flags|=32),Eg(n,e),Ot(n,e,o,t),e.child;case 6:return n===null&&bc(e),null;case 13:return bg(n,e,t);case 4:return Pf(e,e.stateNode.containerInfo),i=e.pendingProps,n===null?e.child=us(e,null,i,t):Ot(n,e,i,t),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:bn(i,r),rd(n,e,i,r,t);case 7:return Ot(n,e,e.pendingProps,t),e.child;case 8:return Ot(n,e,e.pendingProps.children,t),e.child;case 12:return Ot(n,e,e.pendingProps.children,t),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,Je(el,i._currentValue),i._currentValue=o,s!==null)if(In(s.value,o)){if(s.children===r.children&&!qt.current){e=li(n,e,t);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=ii(-1,t&-t),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),Cc(s.return,t,e),a.lanes|=t;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ie(341));o.lanes|=t,a=o.alternate,a!==null&&(a.lanes|=t),Cc(o,t,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Ot(n,e,r.children,t),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,es(e,t),r=yn(r),i=i(r),e.flags|=1,Ot(n,e,i,t),e.child;case 14:return i=e.type,r=bn(i,e.pendingProps),r=bn(i.type,r),sd(n,e,i,r,t);case 15:return Mg(n,e,e.type,e.pendingProps,t);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:bn(i,r),Na(n,e),e.tag=1,Yt(i)?(n=!0,Ja(e)):n=!1,es(e,t),Jm(e,i,r),Lc(e,i,r,t),Dc(null,e,i,!0,n,t);case 19:return Cg(n,e,t);case 22:return wg(n,e,t)}throw Error(ie(156,e.tag))};function Hg(n,e){return mm(n,e)}function Z_(n,e,t,i){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function gn(n,e,t,i){return new Z_(n,e,t,i)}function jf(n){return n=n.prototype,!(!n||!n.isReactComponent)}function J_(n){if(typeof n=="function")return jf(n)?1:0;if(n!=null){if(n=n.$$typeof,n===cf)return 11;if(n===ff)return 14}return 2}function Ai(n,e){var t=n.alternate;return t===null?(t=gn(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function Fa(n,e,t,i,r,s){var o=2;if(i=n,typeof n=="function")jf(n)&&(o=1);else if(typeof n=="string")o=5;else e:switch(n){case Fr:return Qi(t.children,r,s,e);case uf:o=8,r|=8;break;case Qu:return n=gn(12,t,e,r|2),n.elementType=Qu,n.lanes=s,n;case ec:return n=gn(13,t,e,r),n.elementType=ec,n.lanes=s,n;case tc:return n=gn(19,t,e,r),n.elementType=tc,n.lanes=s,n;case Kp:return Tl(t,r,s,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case Zp:o=10;break e;case Jp:o=9;break e;case cf:o=11;break e;case ff:o=14;break e;case mi:o=16,i=null;break e}throw Error(ie(130,n==null?n:typeof n,""))}return e=gn(o,t,e,r),e.elementType=n,e.type=i,e.lanes=s,e}function Qi(n,e,t,i){return n=gn(7,n,i,e),n.lanes=t,n}function Tl(n,e,t,i){return n=gn(22,n,i,e),n.elementType=Kp,n.lanes=t,n.stateNode={isHidden:!1},n}function uu(n,e,t){return n=gn(6,n,null,e),n.lanes=t,n}function cu(n,e,t){return e=gn(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function K_(n,e,t,i,r){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Wl(0),this.expirationTimes=Wl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Wl(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Xf(n,e,t,i,r,s,o,a,l){return n=new K_(n,e,t,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=gn(3,null,null,e),n.current=s,s.stateNode=n,s.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Lf(s),n}function Q_(n,e,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:zr,key:i==null?null:""+i,children:n,containerInfo:e,implementation:t}}function Wg(n){if(!n)return Ri;n=n._reactInternals;e:{if(mr(n)!==n||n.tag!==1)throw Error(ie(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Yt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ie(171))}if(n.tag===1){var t=n.type;if(Yt(t))return Hm(n,t,e)}return e}function jg(n,e,t,i,r,s,o,a,l){return n=Xf(t,i,!0,n,r,s,o,a,l),n.context=Wg(null),t=n.current,i=Bt(),r=Ci(t),s=ii(i,r),s.callback=e??null,Ti(t,s,r),n.current.lanes=r,Ro(n,r,i),$t(n,i),n}function bl(n,e,t,i){var r=e.current,s=Bt(),o=Ci(r);return t=Wg(t),e.context===null?e.context=t:e.pendingContext=t,e=ii(s,o),e.payload={element:n},i=i===void 0?null:i,i!==null&&(e.callback=i),n=Ti(r,e,o),n!==null&&(Dn(n,r,o,s),Ra(n,r,o)),o}function cl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function vd(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function qf(n,e){vd(n,e),(n=n.alternate)&&vd(n,e)}function ex(){return null}var Xg=typeof reportError=="function"?reportError:function(n){console.error(n)};function Yf(n){this._internalRoot=n}Cl.prototype.render=Yf.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(ie(409));bl(n,e,null,null)};Cl.prototype.unmount=Yf.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;or(function(){bl(null,n,null,null)}),e[oi]=null}};function Cl(n){this._internalRoot=n}Cl.prototype.unstable_scheduleHydration=function(n){if(n){var e=Mm();n={blockedOn:null,target:n,priority:e};for(var t=0;t<vi.length&&e!==0&&e<vi[t].priority;t++);vi.splice(t,0,n),t===0&&Em(n)}};function $f(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Al(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function _d(){}function tx(n,e,t,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=cl(o);s.call(u)}}var o=jg(e,i,n,0,null,!1,!1,"",_d);return n._reactRootContainer=o,n[oi]=o.current,ho(n.nodeType===8?n.parentNode:n),or(),o}for(;r=n.lastChild;)n.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=cl(l);a.call(u)}}var l=Xf(n,0,!1,null,null,!1,!1,"",_d);return n._reactRootContainer=l,n[oi]=l.current,ho(n.nodeType===8?n.parentNode:n),or(function(){bl(e,l,t,i)}),l}function Ll(n,e,t,i,r){var s=t._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=cl(o);a.call(l)}}bl(e,o,n,r)}else o=tx(t,e,n,r,i);return cl(o)}ym=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=Bs(e.pendingLanes);t!==0&&(pf(e,t|1),$t(e,ut()),!(He&6)&&(hs=ut()+500,Ni()))}break;case 13:or(function(){var i=ai(n,1);if(i!==null){var r=Bt();Dn(i,n,1,r)}}),qf(n,1)}};mf=function(n){if(n.tag===13){var e=ai(n,134217728);if(e!==null){var t=Bt();Dn(e,n,134217728,t)}qf(n,134217728)}};Sm=function(n){if(n.tag===13){var e=Ci(n),t=ai(n,e);if(t!==null){var i=Bt();Dn(t,n,e,i)}qf(n,e)}};Mm=function(){return qe};wm=function(n,e){var t=qe;try{return qe=n,e()}finally{qe=t}};fc=function(n,e,t){switch(e){case"input":if(rc(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var i=t[e];if(i!==n&&i.form===n.form){var r=xl(i);if(!r)throw Error(ie(90));em(i),rc(i,r)}}}break;case"textarea":nm(n,t);break;case"select":e=t.value,e!=null&&Zr(n,!!t.multiple,e,!1)}};um=Gf;cm=or;var nx={usingClientEntryPoint:!1,Events:[Io,Vr,xl,am,lm,Gf]},Ls={findFiberByHostInstance:qi,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},ix={bundleType:Ls.bundleType,version:Ls.version,rendererPackageName:Ls.rendererPackageName,rendererConfig:Ls.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ui.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=dm(n),n===null?null:n.stateNode},findFiberByHostInstance:Ls.findFiberByHostInstance||ex,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var na=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!na.isDisabled&&na.supportsFiber)try{ml=na.inject(ix),Un=na}catch{}}un.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=nx;un.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!$f(e))throw Error(ie(200));return Q_(n,e,null,t)};un.createRoot=function(n,e){if(!$f(n))throw Error(ie(299));var t=!1,i="",r=Xg;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Xf(n,1,!1,null,null,t,!1,i,r),n[oi]=e.current,ho(n.nodeType===8?n.parentNode:n),new Yf(e)};un.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(ie(188)):(n=Object.keys(n).join(","),Error(ie(268,n)));return n=dm(e),n=n===null?null:n.stateNode,n};un.flushSync=function(n){return or(n)};un.hydrate=function(n,e,t){if(!Al(e))throw Error(ie(200));return Ll(null,n,e,!0,t)};un.hydrateRoot=function(n,e,t){if(!$f(n))throw Error(ie(405));var i=t!=null&&t.hydratedSources||null,r=!1,s="",o=Xg;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),e=jg(e,null,n,1,t??null,r,!1,s,o),n[oi]=e.current,ho(n),i)for(n=0;n<i.length;n++)t=i[n],r=t._getVersion,r=r(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,r]:e.mutableSourceEagerHydrationData.push(t,r);return new Cl(e)};un.render=function(n,e,t){if(!Al(e))throw Error(ie(200));return Ll(null,n,e,!1,t)};un.unmountComponentAtNode=function(n){if(!Al(n))throw Error(ie(40));return n._reactRootContainer?(or(function(){Ll(null,null,n,!1,function(){n._reactRootContainer=null,n[oi]=null})}),!0):!1};un.unstable_batchedUpdates=Gf;un.unstable_renderSubtreeIntoContainer=function(n,e,t,i){if(!Al(t))throw Error(ie(200));if(n==null||n._reactInternals===void 0)throw Error(ie(38));return Ll(n,e,t,!1,i)};un.version="18.2.0-next-9e3b772b8-20220608";(function(n){function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}e(),n.exports=un})(ev);var xd=Zu;$u.createRoot=xd.createRoot,$u.hydrateRoot=xd.hydrateRoot;const ko=({children:n,className:e})=>ee.jsx("div",{className:`card ${e}`,children:n}),rx=()=>ee.jsx(ko,{className:"first",children:ee.jsxs("div",{className:"center column",children:[ee.jsx("div",{className:"title titlecolor",children:"Hello World!"}),ee.jsxs("h3",{className:"descolor",children:["This is Irfan wani. Welcome to my Portfolio!!!",ee.jsx("br",{})]}),ee.jsx("h2",{className:"descolor",children:"Who am I?"}),ee.jsx("h3",{className:"descolor",children:"Self Taught Full stack web and app developer, building nice things from last 3 YEARS."}),ee.jsx("h2",{className:"descolor",children:"Keep Scrolling to explore more about ME!"})]})}),fu=({title:n,date:e,children:t,href:i})=>ee.jsxs("div",{className:"expsingle spacebetween",children:[ee.jsxs("div",{className:"column marginright",children:[ee.jsx("a",{href:i,target:"_blank",className:"title titlecolor",children:n}),ee.jsx("div",{className:"date descolor",children:e})]}),ee.jsx("div",{id:"el",className:"description descolor",children:t})]}),sx=()=>ee.jsxs("div",{children:["Working as a mobile app developer, upgraded and published multiple versions of multiple apps on respective app stores. Some of the projects are:",ee.jsxs("ul",{children:[ee.jsx("li",{children:ee.jsx("a",{className:"a",href:"https://play.google.com/store/apps/developer?id=Rock+Pros+USA+LLC&hl=en&gl=US",target:"_blank",children:"Rocks Pro Android Apps"})}),ee.jsx("li",{children:ee.jsx("a",{className:"a",href:"https://apps.apple.com/in/developer/rock-pros/id1604082793",target:"_blank",children:"Rocks Pro iOS apps"})})]}),"Tech stack used:",ee.jsx("h6",{className:"techstack",children:"React Native, Redux, Firebase, Android Studio, Xcode."})]}),ox=()=>ee.jsxs("div",{children:["Worked as a mobile App developer, Created an android app, integrated APIs and also worked a bit on backend and website.",ee.jsx("br",{}),ee.jsx("br",{}),"Tech stack used:",ee.jsx("h6",{className:"techstack",children:"Typescript, React Native, Expo, Redux Toolkit, GraphQL (apollo client), Firebase, Android Studio, charts."})]}),ax=()=>ee.jsxs("div",{children:["Blockchain Internship, learned about blockchains, smart contracts, NFTs, DeFi, Dapps, etc.",ee.jsx("br",{}),ee.jsx("br",{}),"Tech stack used:",ee.jsx("h6",{className:"techstack",children:"Python, Brownie, Ethereum Blockchain, Solidity, chainlink, MetaMask."})]}),lx=()=>ee.jsx(ko,{children:ee.jsxs("div",{children:[ee.jsx(fu,{title:"Appsdeployer",date:"Oct-2022 to Present",href:"https://appsdeployer.com",children:ee.jsx(sx,{})}),ee.jsx(fu,{title:"Solvevolve",date:"Oct-2022 to Dec-2022",href:"https://www.linkedin.com/company/solvevolve/",children:ee.jsx(ox,{})}),ee.jsx(fu,{title:"NIT Srinagar",date:"Jun-2022 to Jul-2022",href:"https://nitsri.ac.in/Department/Deptindex.aspx?page=a&ItemID=cs&nDeptID=cs",children:ee.jsx(ax,{})})]})});/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Zf="148",xr={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},yr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},ux=0,yd=1,cx=2,qg=1,fx=2,Gs=3,ar=0,xn=1,Jf=2,ia=3,Li=0,ns=1,Sd=2,Md=3,wd=4,hx=5,kr=100,dx=101,px=102,Ed=103,Td=104,mx=200,gx=201,vx=202,_x=203,Yg=204,$g=205,xx=206,yx=207,Sx=208,Mx=209,wx=210,Ex=0,Tx=1,bx=2,Wc=3,Cx=4,Ax=5,Lx=6,Px=7,Zg=0,Rx=1,Dx=2,ri=0,Ix=1,Nx=2,kx=3,zx=4,Fx=5,Jg=300,ds=301,ps=302,jc=303,Xc=304,Pl=306,qc=1e3,Ln=1001,Yc=1002,Ut=1003,bd=1004,hu=1005,mn=1006,Ox=1007,Mo=1008,lr=1009,Ux=1010,Bx=1011,Kg=1012,Vx=1013,Zi=1014,Ji=1015,wo=1016,Gx=1017,Hx=1018,is=1020,Wx=1021,jx=1022,Pn=1023,Xx=1024,qx=1025,er=1026,ms=1027,Yx=1028,$x=1029,Zx=1030,Jx=1031,Kx=1033,du=33776,pu=33777,mu=33778,gu=33779,Cd=35840,Ad=35841,Ld=35842,Pd=35843,Qx=36196,Rd=37492,Dd=37496,Id=37808,Nd=37809,kd=37810,zd=37811,Fd=37812,Od=37813,Ud=37814,Bd=37815,Vd=37816,Gd=37817,Hd=37818,Wd=37819,jd=37820,Xd=37821,qd=36492,ur=3e3,Qe=3001,ey=3200,ty=3201,Qg=0,ny=1,zn="srgb",Eo="srgb-linear",vu=7680,iy=519,Yd=35044,$d="300 es",$c=1035;class gr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Dt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Zd=1234567;const eo=Math.PI/180,fl=180/Math.PI;function vr(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Dt[n&255]+Dt[n>>8&255]+Dt[n>>16&255]+Dt[n>>24&255]+"-"+Dt[e&255]+Dt[e>>8&255]+"-"+Dt[e>>16&15|64]+Dt[e>>24&255]+"-"+Dt[t&63|128]+Dt[t>>8&255]+"-"+Dt[t>>16&255]+Dt[t>>24&255]+Dt[i&255]+Dt[i>>8&255]+Dt[i>>16&255]+Dt[i>>24&255]).toLowerCase()}function bt(n,e,t){return Math.max(e,Math.min(t,n))}function Kf(n,e){return(n%e+e)%e}function ry(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function sy(n,e,t){return n!==e?(t-n)/(e-n):0}function to(n,e,t){return(1-t)*n+t*e}function oy(n,e,t,i){return to(n,e,1-Math.exp(-t*i))}function ay(n,e=1){return e-Math.abs(Kf(n,e*2)-e)}function ly(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function uy(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function cy(n,e){return n+Math.floor(Math.random()*(e-n+1))}function fy(n,e){return n+Math.random()*(e-n)}function hy(n){return n*(.5-Math.random())}function dy(n){n!==void 0&&(Zd=n);let e=Zd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function py(n){return n*eo}function my(n){return n*fl}function Zc(n){return(n&n-1)===0&&n!==0}function gy(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function hl(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function vy(n,e,t,i,r){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),u=s((e+i)/2),c=o((e+i)/2),f=s((e-i)/2),h=o((e-i)/2),m=s((i-e)/2),x=o((i-e)/2);switch(r){case"XYX":n.set(a*c,l*f,l*h,a*u);break;case"YZY":n.set(l*h,a*c,l*f,a*u);break;case"ZXZ":n.set(l*f,l*h,a*c,a*u);break;case"XZX":n.set(a*c,l*x,l*m,a*u);break;case"YXY":n.set(l*m,a*c,l*x,a*u);break;case"ZYZ":n.set(l*x,l*m,a*c,a*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Hs(n,e){switch(e.constructor){case Float32Array:return n;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Wt(n,e){switch(e.constructor){case Float32Array:return n;case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var _y=Object.freeze({__proto__:null,DEG2RAD:eo,RAD2DEG:fl,generateUUID:vr,clamp:bt,euclideanModulo:Kf,mapLinear:ry,inverseLerp:sy,lerp:to,damp:oy,pingpong:ay,smoothstep:ly,smootherstep:uy,randInt:cy,randFloat:fy,randFloatSpread:hy,seededRandom:dy,degToRad:py,radToDeg:my,isPowerOfTwo:Zc,ceilPowerOfTwo:gy,floorPowerOfTwo:hl,setQuaternionFromProperEuler:vy,normalize:Wt,denormalize:Hs});class ue{constructor(e=0,t=0){ue.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class on{constructor(){on.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,i,r,s,o,a,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=t,c[4]=s,c[5]=l,c[6]=i,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],c=i[4],f=i[7],h=i[2],m=i[5],x=i[8],d=r[0],p=r[3],g=r[6],_=r[1],v=r[4],S=r[7],M=r[2],T=r[5],A=r[8];return s[0]=o*d+a*_+l*M,s[3]=o*p+a*v+l*T,s[6]=o*g+a*S+l*A,s[1]=u*d+c*_+f*M,s[4]=u*p+c*v+f*T,s[7]=u*g+c*S+f*A,s[2]=h*d+m*_+x*M,s[5]=h*p+m*v+x*T,s[8]=h*g+m*S+x*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return t*o*c-t*a*u-i*s*c+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],f=c*o-a*u,h=a*l-c*s,m=u*s-o*l,x=t*f+i*h+r*m;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const d=1/x;return e[0]=f*d,e[1]=(r*u-c*i)*d,e[2]=(a*i-r*o)*d,e[3]=h*d,e[4]=(c*t-r*l)*d,e[5]=(r*s-a*t)*d,e[6]=m*d,e[7]=(i*l-u*t)*d,e[8]=(o*t-i*s)*d,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(_u.makeScale(e,t)),this}rotate(e){return this.premultiply(_u.makeRotation(-e)),this}translate(e,t){return this.premultiply(_u.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const _u=new on;function e0(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function To(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function tr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Oa(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const xu={[zn]:{[Eo]:tr},[Eo]:{[zn]:Oa}},zt={legacyMode:!0,get workingColorSpace(){return Eo},set workingColorSpace(n){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(n,e,t){if(this.legacyMode||e===t||!e||!t)return n;if(xu[e]&&xu[e][t]!==void 0){const i=xu[e][t];return n.r=i(n.r),n.g=i(n.g),n.b=i(n.b),n}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)}},t0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},mt={r:0,g:0,b:0},wn={h:0,s:0,l:0},ra={h:0,s:0,l:0};function yu(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}function sa(n,e){return e.r=n.r,e.g=n.g,e.b=n.b,e}class Ze{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&i===void 0?this.set(e):this.setRGB(e,t,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=zn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,zt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=zt.workingColorSpace){return this.r=e,this.g=t,this.b=i,zt.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=zt.workingColorSpace){if(e=Kf(e,1),t=bt(t,0,1),i=bt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=yu(o,s,e+1/3),this.g=yu(o,s,e),this.b=yu(o,s,e-1/3)}return zt.toWorkingColorSpace(this,r),this}setStyle(e,t=zn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,zt.toWorkingColorSpace(this,t),i(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,zt.toWorkingColorSpace(this,t),i(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(s[1])/360,u=parseFloat(s[2])/100,c=parseFloat(s[3])/100;return i(s[4]),this.setHSL(l,u,c,t)}break}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,zt.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,zt.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=zn){const i=t0[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=tr(e.r),this.g=tr(e.g),this.b=tr(e.b),this}copyLinearToSRGB(e){return this.r=Oa(e.r),this.g=Oa(e.g),this.b=Oa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=zn){return zt.fromWorkingColorSpace(sa(this,mt),e),bt(mt.r*255,0,255)<<16^bt(mt.g*255,0,255)<<8^bt(mt.b*255,0,255)<<0}getHexString(e=zn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=zt.workingColorSpace){zt.fromWorkingColorSpace(sa(this,mt),t);const i=mt.r,r=mt.g,s=mt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const f=o-a;switch(u=c<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,t=zt.workingColorSpace){return zt.fromWorkingColorSpace(sa(this,mt),t),e.r=mt.r,e.g=mt.g,e.b=mt.b,e}getStyle(e=zn){return zt.fromWorkingColorSpace(sa(this,mt),e),e!==zn?`color(${e} ${mt.r} ${mt.g} ${mt.b})`:`rgb(${mt.r*255|0},${mt.g*255|0},${mt.b*255|0})`}offsetHSL(e,t,i){return this.getHSL(wn),wn.h+=e,wn.s+=t,wn.l+=i,this.setHSL(wn.h,wn.s,wn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(wn),e.getHSL(ra);const i=to(wn.h,ra.h,t),r=to(wn.s,ra.s,t),s=to(wn.l,ra.l,t);return this.setHSL(i,r,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Ze.NAMES=t0;let Sr;class n0{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Sr===void 0&&(Sr=To("canvas")),Sr.width=e.width,Sr.height=e.height;const i=Sr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Sr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=To("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=tr(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(tr(t[i]/255)*255):t[i]=tr(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class i0{constructor(e=null){this.isSource=!0,this.uuid=vr(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Su(r[o].image)):s.push(Su(r[o]))}else s=Su(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Su(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?n0.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let xy=0;class Zt extends gr{constructor(e=Zt.DEFAULT_IMAGE,t=Zt.DEFAULT_MAPPING,i=Ln,r=Ln,s=mn,o=Mo,a=Pn,l=lr,u=Zt.DEFAULT_ANISOTROPY,c=ur){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:xy++}),this.uuid=vr(),this.name="",this.source=new i0(e),this.mipmaps=[],this.mapping=t,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ue(0,0),this.repeat=new ue(1,1),this.center=new ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new on,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Jg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case qc:e.x=e.x-Math.floor(e.x);break;case Ln:e.x=e.x<0?0:1;break;case Yc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case qc:e.y=e.y-Math.floor(e.y);break;case Ln:e.y=e.y<0?0:1;break;case Yc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Zt.DEFAULT_IMAGE=null;Zt.DEFAULT_MAPPING=Jg;Zt.DEFAULT_ANISOTROPY=1;class it{constructor(e=0,t=0,i=0,r=1){it.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,u=l[0],c=l[4],f=l[8],h=l[1],m=l[5],x=l[9],d=l[2],p=l[6],g=l[10];if(Math.abs(c-h)<.01&&Math.abs(f-d)<.01&&Math.abs(x-p)<.01){if(Math.abs(c+h)<.1&&Math.abs(f+d)<.1&&Math.abs(x+p)<.1&&Math.abs(u+m+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(u+1)/2,S=(m+1)/2,M=(g+1)/2,T=(c+h)/4,A=(f+d)/4,y=(x+p)/4;return v>S&&v>M?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=T/i,s=A/i):S>M?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=T/r,s=y/r):M<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(M),i=A/s,r=y/s),this.set(i,r,s,t),this}let _=Math.sqrt((p-x)*(p-x)+(f-d)*(f-d)+(h-c)*(h-c));return Math.abs(_)<.001&&(_=1),this.x=(p-x)/_,this.y=(f-d)/_,this.z=(h-c)/_,this.w=Math.acos((u+m+g-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class cr extends gr{constructor(e=1,t=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new it(0,0,e,t),this.scissorTest=!1,this.viewport=new it(0,0,e,t);const r={width:e,height:t,depth:1};this.texture=new Zt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:mn,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new i0(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class r0 extends Zt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Ut,this.minFilter=Ut,this.wrapR=Ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class yy extends Zt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Ut,this.minFilter=Ut,this.wrapR=Ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class fr{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],u=i[r+1],c=i[r+2],f=i[r+3];const h=s[o+0],m=s[o+1],x=s[o+2],d=s[o+3];if(a===0){e[t+0]=l,e[t+1]=u,e[t+2]=c,e[t+3]=f;return}if(a===1){e[t+0]=h,e[t+1]=m,e[t+2]=x,e[t+3]=d;return}if(f!==d||l!==h||u!==m||c!==x){let p=1-a;const g=l*h+u*m+c*x+f*d,_=g>=0?1:-1,v=1-g*g;if(v>Number.EPSILON){const M=Math.sqrt(v),T=Math.atan2(M,g*_);p=Math.sin(p*T)/M,a=Math.sin(a*T)/M}const S=a*_;if(l=l*p+h*S,u=u*p+m*S,c=c*p+x*S,f=f*p+d*S,p===1-a){const M=1/Math.sqrt(l*l+u*u+c*c+f*f);l*=M,u*=M,c*=M,f*=M}}e[t]=l,e[t+1]=u,e[t+2]=c,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],f=s[o],h=s[o+1],m=s[o+2],x=s[o+3];return e[t]=a*x+c*f+l*m-u*h,e[t+1]=l*x+c*h+u*f-a*m,e[t+2]=u*x+c*m+a*h-l*f,e[t+3]=c*x-a*f-l*h-u*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),f=a(s/2),h=l(i/2),m=l(r/2),x=l(s/2);switch(o){case"XYZ":this._x=h*c*f+u*m*x,this._y=u*m*f-h*c*x,this._z=u*c*x+h*m*f,this._w=u*c*f-h*m*x;break;case"YXZ":this._x=h*c*f+u*m*x,this._y=u*m*f-h*c*x,this._z=u*c*x-h*m*f,this._w=u*c*f+h*m*x;break;case"ZXY":this._x=h*c*f-u*m*x,this._y=u*m*f+h*c*x,this._z=u*c*x+h*m*f,this._w=u*c*f-h*m*x;break;case"ZYX":this._x=h*c*f-u*m*x,this._y=u*m*f+h*c*x,this._z=u*c*x-h*m*f,this._w=u*c*f+h*m*x;break;case"YZX":this._x=h*c*f+u*m*x,this._y=u*m*f+h*c*x,this._z=u*c*x-h*m*f,this._w=u*c*f-h*m*x;break;case"XZY":this._x=h*c*f-u*m*x,this._y=u*m*f-h*c*x,this._z=u*c*x+h*m*f,this._w=u*c*f+h*m*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],u=t[2],c=t[6],f=t[10],h=i+a+f;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(c-l)*m,this._y=(s-u)*m,this._z=(o-r)*m}else if(i>a&&i>f){const m=2*Math.sqrt(1+i-a-f);this._w=(c-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+u)/m}else if(a>f){const m=2*Math.sqrt(1+a-i-f);this._w=(s-u)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+c)/m}else{const m=2*Math.sqrt(1+f-i-a);this._w=(o-r)/m,this._x=(s+u)/m,this._y=(l+c)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(bt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,u=t._z,c=t._w;return this._x=i*c+o*a+r*u-s*l,this._y=r*c+o*l+s*a-i*u,this._z=s*c+o*u+i*l-r*a,this._w=o*c-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*i+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),f=Math.sin((1-t)*c)/u,h=Math.sin(t*c)/u;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class R{constructor(e=0,t=0,i=0){R.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Jd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Jd.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=l*t+o*r-a*i,c=l*i+a*t-s*r,f=l*r+s*i-o*t,h=-s*t-o*i-a*r;return this.x=u*l+h*-s+c*-a-f*-o,this.y=c*l+h*-o+f*-s-u*-a,this.z=f*l+h*-a+u*-o-c*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Mu.copy(this).projectOnVector(e),this.sub(Mu)}reflect(e){return this.sub(Mu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(bt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Mu=new R,Jd=new fr;class zo{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,i=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,u=e.length;l<u;l+=3){const c=e[l],f=e[l+1],h=e[l+2];c<t&&(t=c),f<i&&(i=f),h<r&&(r=h),c>s&&(s=c),f>o&&(o=f),h>a&&(a=h)}return this.min.set(t,i,r),this.max.set(s,o,a),this}setFromBufferAttribute(e){let t=1/0,i=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,u=e.count;l<u;l++){const c=e.getX(l),f=e.getY(l),h=e.getZ(l);c<t&&(t=c),f<i&&(i=f),h<r&&(r=h),c>s&&(s=c),f>o&&(o=f),h>a&&(a=h)}return this.min.set(t,i,r),this.max.set(s,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Ui.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0)if(t&&i.attributes!=null&&i.attributes.position!==void 0){const s=i.attributes.position;for(let o=0,a=s.count;o<a;o++)Ui.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(Ui)}else i.boundingBox===null&&i.computeBoundingBox(),wu.copy(i.boundingBox),wu.applyMatrix4(e.matrixWorld),this.union(wu);const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Ui),Ui.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ps),oa.subVectors(this.max,Ps),Mr.subVectors(e.a,Ps),wr.subVectors(e.b,Ps),Er.subVectors(e.c,Ps),fi.subVectors(wr,Mr),hi.subVectors(Er,wr),Bi.subVectors(Mr,Er);let t=[0,-fi.z,fi.y,0,-hi.z,hi.y,0,-Bi.z,Bi.y,fi.z,0,-fi.x,hi.z,0,-hi.x,Bi.z,0,-Bi.x,-fi.y,fi.x,0,-hi.y,hi.x,0,-Bi.y,Bi.x,0];return!Eu(t,Mr,wr,Er,oa)||(t=[1,0,0,0,1,0,0,0,1],!Eu(t,Mr,wr,Er,oa))?!1:(aa.crossVectors(fi,hi),t=[aa.x,aa.y,aa.z],Eu(t,Mr,wr,Er,oa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Ui.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(Ui).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Xn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Xn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Xn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Xn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Xn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Xn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Xn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Xn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Xn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Xn=[new R,new R,new R,new R,new R,new R,new R,new R],Ui=new R,wu=new zo,Mr=new R,wr=new R,Er=new R,fi=new R,hi=new R,Bi=new R,Ps=new R,oa=new R,aa=new R,Vi=new R;function Eu(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Vi.fromArray(n,s);const a=r.x*Math.abs(Vi.x)+r.y*Math.abs(Vi.y)+r.z*Math.abs(Vi.z),l=e.dot(Vi),u=t.dot(Vi),c=i.dot(Vi);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const Sy=new zo,Rs=new R,Tu=new R;class Qf{constructor(e=new R,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Sy.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Rs.subVectors(e,this.center);const t=Rs.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Rs,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Tu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Rs.copy(e.center).add(Tu)),this.expandByPoint(Rs.copy(e.center).sub(Tu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const qn=new R,bu=new R,la=new R,di=new R,Cu=new R,ua=new R,Au=new R;class My{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,qn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(i).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=qn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(qn.copy(this.direction).multiplyScalar(t).add(this.origin),qn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){bu.copy(e).add(t).multiplyScalar(.5),la.copy(t).sub(e).normalize(),di.copy(this.origin).sub(bu);const s=e.distanceTo(t)*.5,o=-this.direction.dot(la),a=di.dot(this.direction),l=-di.dot(la),u=di.lengthSq(),c=Math.abs(1-o*o);let f,h,m,x;if(c>0)if(f=o*l-a,h=o*a-l,x=s*c,f>=0)if(h>=-x)if(h<=x){const d=1/c;f*=d,h*=d,m=f*(f+o*h+2*a)+h*(o*f+h+2*l)+u}else h=s,f=Math.max(0,-(o*h+a)),m=-f*f+h*(h+2*l)+u;else h=-s,f=Math.max(0,-(o*h+a)),m=-f*f+h*(h+2*l)+u;else h<=-x?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),m=-f*f+h*(h+2*l)+u):h<=x?(f=0,h=Math.min(Math.max(-s,-l),s),m=h*(h+2*l)+u):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),m=-f*f+h*(h+2*l)+u);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),m=-f*f+h*(h+2*l)+u;return i&&i.copy(this.direction).multiplyScalar(f).add(this.origin),r&&r.copy(la).multiplyScalar(h).add(bu),m}intersectSphere(e,t){qn.subVectors(e.center,this.origin);const i=qn.dot(this.direction),r=qn.dot(qn)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return a<0&&l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,f=1/this.direction.z,h=this.origin;return u>=0?(i=(e.min.x-h.x)*u,r=(e.max.x-h.x)*u):(i=(e.max.x-h.x)*u,r=(e.min.x-h.x)*u),c>=0?(s=(e.min.y-h.y)*c,o=(e.max.y-h.y)*c):(s=(e.max.y-h.y)*c,o=(e.min.y-h.y)*c),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,qn)!==null}intersectTriangle(e,t,i,r,s){Cu.subVectors(t,e),ua.subVectors(i,e),Au.crossVectors(Cu,ua);let o=this.direction.dot(Au),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;di.subVectors(this.origin,e);const l=a*this.direction.dot(ua.crossVectors(di,ua));if(l<0)return null;const u=a*this.direction.dot(Cu.cross(di));if(u<0||l+u>o)return null;const c=-a*di.dot(Au);return c<0?null:this.at(c/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ct{constructor(){ct.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,i,r,s,o,a,l,u,c,f,h,m,x,d,p){const g=this.elements;return g[0]=e,g[4]=t,g[8]=i,g[12]=r,g[1]=s,g[5]=o,g[9]=a,g[13]=l,g[2]=u,g[6]=c,g[10]=f,g[14]=h,g[3]=m,g[7]=x,g[11]=d,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ct().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Tr.setFromMatrixColumn(e,0).length(),s=1/Tr.setFromMatrixColumn(e,1).length(),o=1/Tr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*c,m=o*f,x=a*c,d=a*f;t[0]=l*c,t[4]=-l*f,t[8]=u,t[1]=m+x*u,t[5]=h-d*u,t[9]=-a*l,t[2]=d-h*u,t[6]=x+m*u,t[10]=o*l}else if(e.order==="YXZ"){const h=l*c,m=l*f,x=u*c,d=u*f;t[0]=h+d*a,t[4]=x*a-m,t[8]=o*u,t[1]=o*f,t[5]=o*c,t[9]=-a,t[2]=m*a-x,t[6]=d+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*c,m=l*f,x=u*c,d=u*f;t[0]=h-d*a,t[4]=-o*f,t[8]=x+m*a,t[1]=m+x*a,t[5]=o*c,t[9]=d-h*a,t[2]=-o*u,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*c,m=o*f,x=a*c,d=a*f;t[0]=l*c,t[4]=x*u-m,t[8]=h*u+d,t[1]=l*f,t[5]=d*u+h,t[9]=m*u-x,t[2]=-u,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,m=o*u,x=a*l,d=a*u;t[0]=l*c,t[4]=d-h*f,t[8]=x*f+m,t[1]=f,t[5]=o*c,t[9]=-a*c,t[2]=-u*c,t[6]=m*f+x,t[10]=h-d*f}else if(e.order==="XZY"){const h=o*l,m=o*u,x=a*l,d=a*u;t[0]=l*c,t[4]=-f,t[8]=u*c,t[1]=h*f+d,t[5]=o*c,t[9]=m*f-x,t[2]=x*f-m,t[6]=a*c,t[10]=d*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(wy,e,Ey)}lookAt(e,t,i){const r=this.elements;return en.subVectors(e,t),en.lengthSq()===0&&(en.z=1),en.normalize(),pi.crossVectors(i,en),pi.lengthSq()===0&&(Math.abs(i.z)===1?en.x+=1e-4:en.z+=1e-4,en.normalize(),pi.crossVectors(i,en)),pi.normalize(),ca.crossVectors(en,pi),r[0]=pi.x,r[4]=ca.x,r[8]=en.x,r[1]=pi.y,r[5]=ca.y,r[9]=en.y,r[2]=pi.z,r[6]=ca.z,r[10]=en.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],c=i[1],f=i[5],h=i[9],m=i[13],x=i[2],d=i[6],p=i[10],g=i[14],_=i[3],v=i[7],S=i[11],M=i[15],T=r[0],A=r[4],y=r[8],C=r[12],P=r[1],V=r[5],oe=r[9],k=r[13],N=r[2],X=r[6],K=r[10],Q=r[14],D=r[3],W=r[7],G=r[11],O=r[15];return s[0]=o*T+a*P+l*N+u*D,s[4]=o*A+a*V+l*X+u*W,s[8]=o*y+a*oe+l*K+u*G,s[12]=o*C+a*k+l*Q+u*O,s[1]=c*T+f*P+h*N+m*D,s[5]=c*A+f*V+h*X+m*W,s[9]=c*y+f*oe+h*K+m*G,s[13]=c*C+f*k+h*Q+m*O,s[2]=x*T+d*P+p*N+g*D,s[6]=x*A+d*V+p*X+g*W,s[10]=x*y+d*oe+p*K+g*G,s[14]=x*C+d*k+p*Q+g*O,s[3]=_*T+v*P+S*N+M*D,s[7]=_*A+v*V+S*X+M*W,s[11]=_*y+v*oe+S*K+M*G,s[15]=_*C+v*k+S*Q+M*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],c=e[2],f=e[6],h=e[10],m=e[14],x=e[3],d=e[7],p=e[11],g=e[15];return x*(+s*l*f-r*u*f-s*a*h+i*u*h+r*a*m-i*l*m)+d*(+t*l*m-t*u*h+s*o*h-r*o*m+r*u*c-s*l*c)+p*(+t*u*f-t*a*m-s*o*f+i*o*m+s*a*c-i*u*c)+g*(-r*a*c-t*l*f+t*a*h+r*o*f-i*o*h+i*l*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],f=e[9],h=e[10],m=e[11],x=e[12],d=e[13],p=e[14],g=e[15],_=f*p*u-d*h*u+d*l*m-a*p*m-f*l*g+a*h*g,v=x*h*u-c*p*u-x*l*m+o*p*m+c*l*g-o*h*g,S=c*d*u-x*f*u+x*a*m-o*d*m-c*a*g+o*f*g,M=x*f*l-c*d*l-x*a*h+o*d*h+c*a*p-o*f*p,T=t*_+i*v+r*S+s*M;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/T;return e[0]=_*A,e[1]=(d*h*s-f*p*s-d*r*m+i*p*m+f*r*g-i*h*g)*A,e[2]=(a*p*s-d*l*s+d*r*u-i*p*u-a*r*g+i*l*g)*A,e[3]=(f*l*s-a*h*s-f*r*u+i*h*u+a*r*m-i*l*m)*A,e[4]=v*A,e[5]=(c*p*s-x*h*s+x*r*m-t*p*m-c*r*g+t*h*g)*A,e[6]=(x*l*s-o*p*s-x*r*u+t*p*u+o*r*g-t*l*g)*A,e[7]=(o*h*s-c*l*s+c*r*u-t*h*u-o*r*m+t*l*m)*A,e[8]=S*A,e[9]=(x*f*s-c*d*s-x*i*m+t*d*m+c*i*g-t*f*g)*A,e[10]=(o*d*s-x*a*s+x*i*u-t*d*u-o*i*g+t*a*g)*A,e[11]=(c*a*s-o*f*s-c*i*u+t*f*u+o*i*m-t*a*m)*A,e[12]=M*A,e[13]=(c*d*r-x*f*r+x*i*h-t*d*h-c*i*p+t*f*p)*A,e[14]=(x*a*r-o*d*r-x*i*l+t*d*l+o*i*p-t*a*p)*A,e[15]=(o*f*r-c*a*r+c*i*l-t*f*l-o*i*h+t*a*h)*A,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,c=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*o,0,u*l-r*a,c*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,u=s+s,c=o+o,f=a+a,h=s*u,m=s*c,x=s*f,d=o*c,p=o*f,g=a*f,_=l*u,v=l*c,S=l*f,M=i.x,T=i.y,A=i.z;return r[0]=(1-(d+g))*M,r[1]=(m+S)*M,r[2]=(x-v)*M,r[3]=0,r[4]=(m-S)*T,r[5]=(1-(h+g))*T,r[6]=(p+_)*T,r[7]=0,r[8]=(x+v)*A,r[9]=(p-_)*A,r[10]=(1-(h+d))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Tr.set(r[0],r[1],r[2]).length();const o=Tr.set(r[4],r[5],r[6]).length(),a=Tr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],En.copy(this);const u=1/s,c=1/o,f=1/a;return En.elements[0]*=u,En.elements[1]*=u,En.elements[2]*=u,En.elements[4]*=c,En.elements[5]*=c,En.elements[6]*=c,En.elements[8]*=f,En.elements[9]*=f,En.elements[10]*=f,t.setFromRotationMatrix(En),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o){const a=this.elements,l=2*s/(t-e),u=2*s/(i-r),c=(t+e)/(t-e),f=(i+r)/(i-r),h=-(o+s)/(o-s),m=-2*o*s/(o-s);return a[0]=l,a[4]=0,a[8]=c,a[12]=0,a[1]=0,a[5]=u,a[9]=f,a[13]=0,a[2]=0,a[6]=0,a[10]=h,a[14]=m,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,i,r,s,o){const a=this.elements,l=1/(t-e),u=1/(i-r),c=1/(o-s),f=(t+e)*l,h=(i+r)*u,m=(o+s)*c;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-f,a[1]=0,a[5]=2*u,a[9]=0,a[13]=-h,a[2]=0,a[6]=0,a[10]=-2*c,a[14]=-m,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Tr=new R,En=new ct,wy=new R(0,0,0),Ey=new R(1,1,1),pi=new R,ca=new R,en=new R,Kd=new ct,Qd=new fr;class Fo{constructor(e=0,t=0,i=0,r=Fo.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],c=r[9],f=r[2],h=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(bt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-bt(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(bt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-bt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(bt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-bt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Kd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Kd,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Qd.setFromEuler(this),this.setFromQuaternion(Qd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}Fo.DefaultOrder="XYZ";Fo.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class s0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ty=0;const ep=new R,br=new fr,Yn=new ct,fa=new R,Ds=new R,by=new R,Cy=new fr,tp=new R(1,0,0),np=new R(0,1,0),ip=new R(0,0,1),Ay={type:"added"},rp={type:"removed"};class Jt extends gr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ty++}),this.uuid=vr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Jt.DefaultUp.clone();const e=new R,t=new Fo,i=new fr,r=new R(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ct},normalMatrix:{value:new on}}),this.matrix=new ct,this.matrixWorld=new ct,this.matrixAutoUpdate=Jt.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Jt.DefaultMatrixWorldAutoUpdate,this.layers=new s0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return br.setFromAxisAngle(e,t),this.quaternion.multiply(br),this}rotateOnWorldAxis(e,t){return br.setFromAxisAngle(e,t),this.quaternion.premultiply(br),this}rotateX(e){return this.rotateOnAxis(tp,e)}rotateY(e){return this.rotateOnAxis(np,e)}rotateZ(e){return this.rotateOnAxis(ip,e)}translateOnAxis(e,t){return ep.copy(e).applyQuaternion(this.quaternion),this.position.add(ep.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(tp,e)}translateY(e){return this.translateOnAxis(np,e)}translateZ(e){return this.translateOnAxis(ip,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Yn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?fa.copy(e):fa.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ds.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Yn.lookAt(Ds,fa,this.up):Yn.lookAt(fa,Ds,this.up),this.quaternion.setFromRotationMatrix(Yn),r&&(Yn.extractRotation(r.matrixWorld),br.setFromRotationMatrix(Yn),this.quaternion.premultiply(br.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Ay)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(rp)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(rp)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Yn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Yn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Yn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let i=[];this[e]===t&&i.push(this);for(let r=0,s=this.children.length;r<s;r++){const o=this.children[r].getObjectsByProperty(e,t);o.length>0&&(i=i.concat(o))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ds,e,by),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ds,Cy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const f=l[u];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),c=o(e.images),f=o(e.shapes),h=o(e.skeletons),m=o(e.animations),x=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),m.length>0&&(i.animations=m),x.length>0&&(i.nodes=x)}return i.object=r,i;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Jt.DefaultUp=new R(0,1,0);Jt.DefaultMatrixAutoUpdate=!0;Jt.DefaultMatrixWorldAutoUpdate=!0;const Tn=new R,$n=new R,Lu=new R,Zn=new R,Cr=new R,Ar=new R,sp=new R,Pu=new R,Ru=new R,Du=new R;class ei{constructor(e=new R,t=new R,i=new R){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Tn.subVectors(e,t),r.cross(Tn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Tn.subVectors(r,t),$n.subVectors(i,t),Lu.subVectors(e,t);const o=Tn.dot(Tn),a=Tn.dot($n),l=Tn.dot(Lu),u=$n.dot($n),c=$n.dot(Lu),f=o*u-a*a;if(f===0)return s.set(-2,-1,-1);const h=1/f,m=(u*l-a*c)*h,x=(o*c-a*l)*h;return s.set(1-m-x,x,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Zn),Zn.x>=0&&Zn.y>=0&&Zn.x+Zn.y<=1}static getUV(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,Zn),l.set(0,0),l.addScaledVector(s,Zn.x),l.addScaledVector(o,Zn.y),l.addScaledVector(a,Zn.z),l}static isFrontFacing(e,t,i,r){return Tn.subVectors(i,t),$n.subVectors(e,t),Tn.cross($n).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Tn.subVectors(this.c,this.b),$n.subVectors(this.a,this.b),Tn.cross($n).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ei.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ei.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return ei.getUV(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return ei.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ei.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;Cr.subVectors(r,i),Ar.subVectors(s,i),Pu.subVectors(e,i);const l=Cr.dot(Pu),u=Ar.dot(Pu);if(l<=0&&u<=0)return t.copy(i);Ru.subVectors(e,r);const c=Cr.dot(Ru),f=Ar.dot(Ru);if(c>=0&&f<=c)return t.copy(r);const h=l*f-c*u;if(h<=0&&l>=0&&c<=0)return o=l/(l-c),t.copy(i).addScaledVector(Cr,o);Du.subVectors(e,s);const m=Cr.dot(Du),x=Ar.dot(Du);if(x>=0&&m<=x)return t.copy(s);const d=m*u-l*x;if(d<=0&&u>=0&&x<=0)return a=u/(u-x),t.copy(i).addScaledVector(Ar,a);const p=c*x-m*f;if(p<=0&&f-c>=0&&m-x>=0)return sp.subVectors(s,r),a=(f-c)/(f-c+(m-x)),t.copy(r).addScaledVector(sp,a);const g=1/(p+d+h);return o=d*g,a=h*g,t.copy(i).addScaledVector(Cr,o).addScaledVector(Ar,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Ly=0;class Oo extends gr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ly++}),this.uuid=vr(),this.name="",this.type="Material",this.blending=ns,this.side=ar,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Yg,this.blendDst=$g,this.blendEquation=kr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Wc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=iy,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=vu,this.stencilZFail=vu,this.stencilZPass=vu,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const r=this[t];if(r===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ns&&(i.blending=this.blending),this.side!==ar&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class bo extends Oo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Zg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const dt=new R,ha=new ue;class Vn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Yd,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ha.fromBufferAttribute(this,t),ha.applyMatrix3(e),this.setXY(t,ha.x,ha.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)dt.fromBufferAttribute(this,t),dt.applyMatrix3(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)dt.fromBufferAttribute(this,t),dt.applyMatrix4(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)dt.fromBufferAttribute(this,t),dt.applyNormalMatrix(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)dt.fromBufferAttribute(this,t),dt.transformDirection(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Hs(t,this.array)),t}setX(e,t){return this.normalized&&(t=Wt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Hs(t,this.array)),t}setY(e,t){return this.normalized&&(t=Wt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Hs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Wt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Hs(t,this.array)),t}setW(e,t){return this.normalized&&(t=Wt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Wt(t,this.array),i=Wt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Wt(t,this.array),i=Wt(i,this.array),r=Wt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Wt(t,this.array),i=Wt(i,this.array),r=Wt(r,this.array),s=Wt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Yd&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class o0 extends Vn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class a0 extends Vn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Vt extends Vn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Py=0;const hn=new ct,Iu=new Jt,Lr=new R,tn=new zo,Is=new zo,Mt=new R;class Gn extends gr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Py++}),this.uuid=vr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(e0(e)?a0:o0)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new on().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return hn.makeRotationFromQuaternion(e),this.applyMatrix4(hn),this}rotateX(e){return hn.makeRotationX(e),this.applyMatrix4(hn),this}rotateY(e){return hn.makeRotationY(e),this.applyMatrix4(hn),this}rotateZ(e){return hn.makeRotationZ(e),this.applyMatrix4(hn),this}translate(e,t,i){return hn.makeTranslation(e,t,i),this.applyMatrix4(hn),this}scale(e,t,i){return hn.makeScale(e,t,i),this.applyMatrix4(hn),this}lookAt(e){return Iu.lookAt(e),Iu.updateMatrix(),this.applyMatrix4(Iu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Lr).negate(),this.translate(Lr.x,Lr.y,Lr.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Vt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new zo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];tn.setFromBufferAttribute(s),this.morphTargetsRelative?(Mt.addVectors(this.boundingBox.min,tn.min),this.boundingBox.expandByPoint(Mt),Mt.addVectors(this.boundingBox.max,tn.max),this.boundingBox.expandByPoint(Mt)):(this.boundingBox.expandByPoint(tn.min),this.boundingBox.expandByPoint(tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Qf);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new R,1/0);return}if(e){const i=this.boundingSphere.center;if(tn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Is.setFromBufferAttribute(a),this.morphTargetsRelative?(Mt.addVectors(tn.min,Is.min),tn.expandByPoint(Mt),Mt.addVectors(tn.max,Is.max),tn.expandByPoint(Mt)):(tn.expandByPoint(Is.min),tn.expandByPoint(Is.max))}tn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Mt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Mt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)Mt.fromBufferAttribute(a,u),l&&(Lr.fromBufferAttribute(e,u),Mt.add(Lr)),r=Math.max(r,i.distanceToSquared(Mt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Vn(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,u=[],c=[];for(let P=0;P<a;P++)u[P]=new R,c[P]=new R;const f=new R,h=new R,m=new R,x=new ue,d=new ue,p=new ue,g=new R,_=new R;function v(P,V,oe){f.fromArray(r,P*3),h.fromArray(r,V*3),m.fromArray(r,oe*3),x.fromArray(o,P*2),d.fromArray(o,V*2),p.fromArray(o,oe*2),h.sub(f),m.sub(f),d.sub(x),p.sub(x);const k=1/(d.x*p.y-p.x*d.y);isFinite(k)&&(g.copy(h).multiplyScalar(p.y).addScaledVector(m,-d.y).multiplyScalar(k),_.copy(m).multiplyScalar(d.x).addScaledVector(h,-p.x).multiplyScalar(k),u[P].add(g),u[V].add(g),u[oe].add(g),c[P].add(_),c[V].add(_),c[oe].add(_))}let S=this.groups;S.length===0&&(S=[{start:0,count:i.length}]);for(let P=0,V=S.length;P<V;++P){const oe=S[P],k=oe.start,N=oe.count;for(let X=k,K=k+N;X<K;X+=3)v(i[X+0],i[X+1],i[X+2])}const M=new R,T=new R,A=new R,y=new R;function C(P){A.fromArray(s,P*3),y.copy(A);const V=u[P];M.copy(V),M.sub(A.multiplyScalar(A.dot(V))).normalize(),T.crossVectors(y,V);const k=T.dot(c[P])<0?-1:1;l[P*4]=M.x,l[P*4+1]=M.y,l[P*4+2]=M.z,l[P*4+3]=k}for(let P=0,V=S.length;P<V;++P){const oe=S[P],k=oe.start,N=oe.count;for(let X=k,K=k+N;X<K;X+=3)C(i[X+0]),C(i[X+1]),C(i[X+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Vn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,m=i.count;h<m;h++)i.setXYZ(h,0,0,0);const r=new R,s=new R,o=new R,a=new R,l=new R,u=new R,c=new R,f=new R;if(e)for(let h=0,m=e.count;h<m;h+=3){const x=e.getX(h+0),d=e.getX(h+1),p=e.getX(h+2);r.fromBufferAttribute(t,x),s.fromBufferAttribute(t,d),o.fromBufferAttribute(t,p),c.subVectors(o,s),f.subVectors(r,s),c.cross(f),a.fromBufferAttribute(i,x),l.fromBufferAttribute(i,d),u.fromBufferAttribute(i,p),a.add(c),l.add(c),u.add(c),i.setXYZ(x,a.x,a.y,a.z),i.setXYZ(d,l.x,l.y,l.z),i.setXYZ(p,u.x,u.y,u.z)}else for(let h=0,m=t.count;h<m;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),c.subVectors(o,s),f.subVectors(r,s),c.cross(f),i.setXYZ(h+0,c.x,c.y,c.z),i.setXYZ(h+1,c.x,c.y,c.z),i.setXYZ(h+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Mt.fromBufferAttribute(e,t),Mt.normalize(),e.setXYZ(t,Mt.x,Mt.y,Mt.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,f=a.normalized,h=new u.constructor(l.length*c);let m=0,x=0;for(let d=0,p=l.length;d<p;d++){a.isInterleavedBufferAttribute?m=l[d]*a.data.stride+a.offset:m=l[d]*c;for(let g=0;g<c;g++)h[x++]=u[m++]}return new Vn(h,c,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Gn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);t.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let c=0,f=u.length;c<f;c++){const h=u[c],m=e(h,i);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let f=0,h=u.length;f<h;f++){const m=u[f];c.push(m.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(t))}const s=e.morphAttributes;for(const u in s){const c=[],f=s[u];for(let h=0,m=f.length;h<m;h++)c.push(f[h].clone(t));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,c=o.length;u<c;u++){const f=o[u];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const op=new ct,Pr=new My,Nu=new Qf,Ns=new R,ks=new R,zs=new R,ku=new R,da=new R,pa=new ue,ma=new ue,ga=new ue,zu=new R,va=new R;class vn extends Jt{constructor(e=new Gn,t=new bo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){da.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const c=a[l],f=s[l];c!==0&&(ku.fromBufferAttribute(f,e),o?da.addScaledVector(ku,c):da.addScaledVector(ku.sub(t),c))}t.add(da)}return this.isSkinnedMesh&&this.boneTransform(e,t),t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;if(r===void 0||(i.boundingSphere===null&&i.computeBoundingSphere(),Nu.copy(i.boundingSphere),Nu.applyMatrix4(s),e.ray.intersectsSphere(Nu)===!1)||(op.copy(s).invert(),Pr.copy(e.ray).applyMatrix4(op),i.boundingBox!==null&&Pr.intersectsBox(i.boundingBox)===!1))return;let o;const a=i.index,l=i.attributes.position,u=i.attributes.uv,c=i.attributes.uv2,f=i.groups,h=i.drawRange;if(a!==null)if(Array.isArray(r))for(let m=0,x=f.length;m<x;m++){const d=f[m],p=r[d.materialIndex],g=Math.max(d.start,h.start),_=Math.min(a.count,Math.min(d.start+d.count,h.start+h.count));for(let v=g,S=_;v<S;v+=3){const M=a.getX(v),T=a.getX(v+1),A=a.getX(v+2);o=_a(this,p,e,Pr,u,c,M,T,A),o&&(o.faceIndex=Math.floor(v/3),o.face.materialIndex=d.materialIndex,t.push(o))}}else{const m=Math.max(0,h.start),x=Math.min(a.count,h.start+h.count);for(let d=m,p=x;d<p;d+=3){const g=a.getX(d),_=a.getX(d+1),v=a.getX(d+2);o=_a(this,r,e,Pr,u,c,g,_,v),o&&(o.faceIndex=Math.floor(d/3),t.push(o))}}else if(l!==void 0)if(Array.isArray(r))for(let m=0,x=f.length;m<x;m++){const d=f[m],p=r[d.materialIndex],g=Math.max(d.start,h.start),_=Math.min(l.count,Math.min(d.start+d.count,h.start+h.count));for(let v=g,S=_;v<S;v+=3){const M=v,T=v+1,A=v+2;o=_a(this,p,e,Pr,u,c,M,T,A),o&&(o.faceIndex=Math.floor(v/3),o.face.materialIndex=d.materialIndex,t.push(o))}}else{const m=Math.max(0,h.start),x=Math.min(l.count,h.start+h.count);for(let d=m,p=x;d<p;d+=3){const g=d,_=d+1,v=d+2;o=_a(this,r,e,Pr,u,c,g,_,v),o&&(o.faceIndex=Math.floor(d/3),t.push(o))}}}}function Ry(n,e,t,i,r,s,o,a){let l;if(e.side===xn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===ar,a),l===null)return null;va.copy(a),va.applyMatrix4(n.matrixWorld);const u=t.ray.origin.distanceTo(va);return u<t.near||u>t.far?null:{distance:u,point:va.clone(),object:n}}function _a(n,e,t,i,r,s,o,a,l){n.getVertexPosition(o,Ns),n.getVertexPosition(a,ks),n.getVertexPosition(l,zs);const u=Ry(n,e,t,i,Ns,ks,zs,zu);if(u){r&&(pa.fromBufferAttribute(r,o),ma.fromBufferAttribute(r,a),ga.fromBufferAttribute(r,l),u.uv=ei.getUV(zu,Ns,ks,zs,pa,ma,ga,new ue)),s&&(pa.fromBufferAttribute(s,o),ma.fromBufferAttribute(s,a),ga.fromBufferAttribute(s,l),u.uv2=ei.getUV(zu,Ns,ks,zs,pa,ma,ga,new ue));const c={a:o,b:a,c:l,normal:new R,materialIndex:0};ei.getNormal(Ns,ks,zs,c.normal),u.face=c}return u}class Uo extends Gn{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],c=[],f=[];let h=0,m=0;x("z","y","x",-1,-1,i,t,e,o,s,0),x("z","y","x",1,-1,i,t,-e,o,s,1),x("x","z","y",1,1,e,i,t,r,o,2),x("x","z","y",1,-1,e,i,-t,r,o,3),x("x","y","z",1,-1,e,t,i,r,s,4),x("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Vt(u,3)),this.setAttribute("normal",new Vt(c,3)),this.setAttribute("uv",new Vt(f,2));function x(d,p,g,_,v,S,M,T,A,y,C){const P=S/A,V=M/y,oe=S/2,k=M/2,N=T/2,X=A+1,K=y+1;let Q=0,D=0;const W=new R;for(let G=0;G<K;G++){const O=G*V-k;for(let B=0;B<X;B++){const te=B*P-oe;W[d]=te*_,W[p]=O*v,W[g]=N,u.push(W.x,W.y,W.z),W[d]=0,W[p]=0,W[g]=T>0?1:-1,c.push(W.x,W.y,W.z),f.push(B/A),f.push(1-G/y),Q+=1}}for(let G=0;G<y;G++)for(let O=0;O<A;O++){const B=h+O+X*G,te=h+O+X*(G+1),ne=h+(O+1)+X*(G+1),ce=h+(O+1)+X*G;l.push(B,te,ce),l.push(te,ne,ce),D+=6}a.addGroup(m,D,C),m+=D,h+=Q}}static fromJSON(e){return new Uo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function gs(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Ft(n){const e={};for(let t=0;t<n.length;t++){const i=gs(n[t]);for(const r in i)e[r]=i[r]}return e}function Dy(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function l0(n){return n.getRenderTarget()===null&&n.outputEncoding===Qe?zn:Eo}const Iy={clone:gs,merge:Ft};var Ny=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ky=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class hr extends Oo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ny,this.fragmentShader=ky,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=gs(e.uniforms),this.uniformsGroups=Dy(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class u0 extends Jt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ct,this.projectionMatrix=new ct,this.projectionMatrixInverse=new ct}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class rn extends u0{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=fl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(eo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return fl*2*Math.atan(Math.tan(eo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(eo*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Rr=-90,Dr=1;class zy extends Jt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i;const r=new rn(Rr,Dr,e,t);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(1,0,0),this.add(r);const s=new rn(Rr,Dr,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const o=new rn(Rr,Dr,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const a=new rn(Rr,Dr,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const l=new rn(Rr,Dr,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const u=new rn(Rr,Dr,e,t);u.layers=this.layers,u.up.set(0,1,0),u.lookAt(0,0,-1),this.add(u)}update(e,t){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[r,s,o,a,l,u]=this.children,c=e.getRenderTarget(),f=e.toneMapping,h=e.xr.enabled;e.toneMapping=ri,e.xr.enabled=!1;const m=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,r),e.setRenderTarget(i,1),e.render(t,s),e.setRenderTarget(i,2),e.render(t,o),e.setRenderTarget(i,3),e.render(t,a),e.setRenderTarget(i,4),e.render(t,l),i.texture.generateMipmaps=m,e.setRenderTarget(i,5),e.render(t,u),e.setRenderTarget(c),e.toneMapping=f,e.xr.enabled=h,i.texture.needsPMREMUpdate=!0}}class c0 extends Zt{constructor(e,t,i,r,s,o,a,l,u,c){e=e!==void 0?e:[],t=t!==void 0?t:ds,super(e,t,i,r,s,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Fy extends cr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new c0(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:mn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Uo(5,5,5),s=new hr({name:"CubemapFromEquirect",uniforms:gs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:xn,blending:Li});s.uniforms.tEquirect.value=t;const o=new vn(r,s),a=t.minFilter;return t.minFilter===Mo&&(t.minFilter=mn),new zy(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const Fu=new R,Oy=new R,Uy=new on;class Wi{constructor(e=new R(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Fu.subVectors(i,t).cross(Oy.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const i=e.delta(Fu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(i).multiplyScalar(s).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Uy.getNormalMatrix(e),r=this.coplanarPoint(Fu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ir=new Qf,xa=new R;class eh{constructor(e=new Wi,t=new Wi,i=new Wi,r=new Wi,s=new Wi,o=new Wi){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const t=this.planes,i=e.elements,r=i[0],s=i[1],o=i[2],a=i[3],l=i[4],u=i[5],c=i[6],f=i[7],h=i[8],m=i[9],x=i[10],d=i[11],p=i[12],g=i[13],_=i[14],v=i[15];return t[0].setComponents(a-r,f-l,d-h,v-p).normalize(),t[1].setComponents(a+r,f+l,d+h,v+p).normalize(),t[2].setComponents(a+s,f+u,d+m,v+g).normalize(),t[3].setComponents(a-s,f-u,d-m,v-g).normalize(),t[4].setComponents(a-o,f-c,d-x,v-_).normalize(),t[5].setComponents(a+o,f+c,d+x,v+_).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Ir.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Ir)}intersectsSprite(e){return Ir.center.set(0,0,0),Ir.radius=.7071067811865476,Ir.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ir)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(xa.x=r.normal.x>0?e.max.x:e.min.x,xa.y=r.normal.y>0?e.max.y:e.min.y,xa.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(xa)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function f0(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function By(n,e){const t=e.isWebGL2,i=new WeakMap;function r(u,c){const f=u.array,h=u.usage,m=n.createBuffer();n.bindBuffer(c,m),n.bufferData(c,f,h),u.onUploadCallback();let x;if(f instanceof Float32Array)x=5126;else if(f instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(t)x=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=5123;else if(f instanceof Int16Array)x=5122;else if(f instanceof Uint32Array)x=5125;else if(f instanceof Int32Array)x=5124;else if(f instanceof Int8Array)x=5120;else if(f instanceof Uint8Array)x=5121;else if(f instanceof Uint8ClampedArray)x=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:m,type:x,bytesPerElement:f.BYTES_PER_ELEMENT,version:u.version}}function s(u,c,f){const h=c.array,m=c.updateRange;n.bindBuffer(f,u),m.count===-1?n.bufferSubData(f,0,h):(t?n.bufferSubData(f,m.offset*h.BYTES_PER_ELEMENT,h,m.offset,m.count):n.bufferSubData(f,m.offset*h.BYTES_PER_ELEMENT,h.subarray(m.offset,m.offset+m.count)),m.count=-1),c.onUploadCallback()}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),i.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const c=i.get(u);c&&(n.deleteBuffer(c.buffer),i.delete(u))}function l(u,c){if(u.isGLBufferAttribute){const h=i.get(u);(!h||h.version<u.version)&&i.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const f=i.get(u);f===void 0?i.set(u,r(u,c)):f.version<u.version&&(s(f.buffer,u,c),f.version=u.version)}return{get:o,remove:a,update:l}}class th extends Gn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,f=e/a,h=t/l,m=[],x=[],d=[],p=[];for(let g=0;g<c;g++){const _=g*h-o;for(let v=0;v<u;v++){const S=v*f-s;x.push(S,-_,0),d.push(0,0,1),p.push(v/a),p.push(1-g/l)}}for(let g=0;g<l;g++)for(let _=0;_<a;_++){const v=_+u*g,S=_+u*(g+1),M=_+1+u*(g+1),T=_+1+u*g;m.push(v,S,T),m.push(S,M,T)}this.setIndex(m),this.setAttribute("position",new Vt(x,3)),this.setAttribute("normal",new Vt(d,3)),this.setAttribute("uv",new Vt(p,2))}static fromJSON(e){return new th(e.width,e.height,e.widthSegments,e.heightSegments)}}var Vy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Gy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Hy=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Wy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,jy=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Xy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,qy="vec3 transformed = vec3( position );",Yy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,$y=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
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
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
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
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
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
float G_BlinnPhong_Implicit( ) {
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
#endif`,Zy=`#ifdef USE_IRIDESCENCE
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
		float R21 = R12;
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
#endif`,Jy=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Ky=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,Qy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,e1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,t1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,n1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,i1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,r1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,s1=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,o1=`#define PI 3.141592653589793
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
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
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
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,a1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
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
#endif`,l1=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,u1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,c1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,f1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,h1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,d1="gl_FragColor = linearToOutputTexel( gl_FragColor );",p1=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,m1=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,g1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,v1=`#ifdef USE_ENVMAP
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
#endif`,_1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,x1=`#ifdef USE_ENVMAP
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
#endif`,y1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,S1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,M1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,w1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,E1=`#ifdef USE_GRADIENTMAP
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
}`,T1=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,b1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,C1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,A1=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,L1=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
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
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
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
#endif`,P1=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,R1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,D1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,I1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,N1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,k1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
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
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,z1=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,F1=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
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
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometry, directLight );
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,O1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,U1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,B1=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,V1=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,G1=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,H1=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,W1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,j1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,X1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,q1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Y1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,$1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Z1=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,J1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,K1=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Q1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,eS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,tS=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,nS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,iS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,sS=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,oS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,aS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,lS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,uS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,cS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,fS=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,hS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,dS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,pS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,mS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,gS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,vS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,_S=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,xS=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,yS=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_COORDS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
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
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,SS=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,MS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,wS=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,ES=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,TS=`#ifdef USE_SKINNING
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
#endif`,bS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,CS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,AS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,LS=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,PS=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,RS=`#ifdef USE_TRANSMISSION
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
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,DS=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,IS=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,NS=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,kS=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,zS=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,FS=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,OS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const US=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,BS=`uniform sampler2D t2D;
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
	#include <encodings_fragment>
}`,VS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,GS=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,HS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,WS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,jS=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,XS=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,qS=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,YS=`#define DISTANCE
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
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,$S=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ZS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,JS=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,KS=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,QS=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,eM=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tM=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,nM=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,iM=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,rM=`#define MATCAP
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
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sM=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,oM=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
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
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,aM=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,lM=`#define PHONG
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
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uM=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,cM=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
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
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fM=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,hM=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dM=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
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
}`,pM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,mM=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gM=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,vM=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,_M=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Ne={alphamap_fragment:Vy,alphamap_pars_fragment:Gy,alphatest_fragment:Hy,alphatest_pars_fragment:Wy,aomap_fragment:jy,aomap_pars_fragment:Xy,begin_vertex:qy,beginnormal_vertex:Yy,bsdfs:$y,iridescence_fragment:Zy,bumpmap_pars_fragment:Jy,clipping_planes_fragment:Ky,clipping_planes_pars_fragment:Qy,clipping_planes_pars_vertex:e1,clipping_planes_vertex:t1,color_fragment:n1,color_pars_fragment:i1,color_pars_vertex:r1,color_vertex:s1,common:o1,cube_uv_reflection_fragment:a1,defaultnormal_vertex:l1,displacementmap_pars_vertex:u1,displacementmap_vertex:c1,emissivemap_fragment:f1,emissivemap_pars_fragment:h1,encodings_fragment:d1,encodings_pars_fragment:p1,envmap_fragment:m1,envmap_common_pars_fragment:g1,envmap_pars_fragment:v1,envmap_pars_vertex:_1,envmap_physical_pars_fragment:P1,envmap_vertex:x1,fog_vertex:y1,fog_pars_vertex:S1,fog_fragment:M1,fog_pars_fragment:w1,gradientmap_pars_fragment:E1,lightmap_fragment:T1,lightmap_pars_fragment:b1,lights_lambert_fragment:C1,lights_lambert_pars_fragment:A1,lights_pars_begin:L1,lights_toon_fragment:R1,lights_toon_pars_fragment:D1,lights_phong_fragment:I1,lights_phong_pars_fragment:N1,lights_physical_fragment:k1,lights_physical_pars_fragment:z1,lights_fragment_begin:F1,lights_fragment_maps:O1,lights_fragment_end:U1,logdepthbuf_fragment:B1,logdepthbuf_pars_fragment:V1,logdepthbuf_pars_vertex:G1,logdepthbuf_vertex:H1,map_fragment:W1,map_pars_fragment:j1,map_particle_fragment:X1,map_particle_pars_fragment:q1,metalnessmap_fragment:Y1,metalnessmap_pars_fragment:$1,morphcolor_vertex:Z1,morphnormal_vertex:J1,morphtarget_pars_vertex:K1,morphtarget_vertex:Q1,normal_fragment_begin:eS,normal_fragment_maps:tS,normal_pars_fragment:nS,normal_pars_vertex:iS,normal_vertex:rS,normalmap_pars_fragment:sS,clearcoat_normal_fragment_begin:oS,clearcoat_normal_fragment_maps:aS,clearcoat_pars_fragment:lS,iridescence_pars_fragment:uS,output_fragment:cS,packing:fS,premultiplied_alpha_fragment:hS,project_vertex:dS,dithering_fragment:pS,dithering_pars_fragment:mS,roughnessmap_fragment:gS,roughnessmap_pars_fragment:vS,shadowmap_pars_fragment:_S,shadowmap_pars_vertex:xS,shadowmap_vertex:yS,shadowmask_pars_fragment:SS,skinbase_vertex:MS,skinning_pars_vertex:wS,skinning_vertex:ES,skinnormal_vertex:TS,specularmap_fragment:bS,specularmap_pars_fragment:CS,tonemapping_fragment:AS,tonemapping_pars_fragment:LS,transmission_fragment:PS,transmission_pars_fragment:RS,uv_pars_fragment:DS,uv_pars_vertex:IS,uv_vertex:NS,uv2_pars_fragment:kS,uv2_pars_vertex:zS,uv2_vertex:FS,worldpos_vertex:OS,background_vert:US,background_frag:BS,backgroundCube_vert:VS,backgroundCube_frag:GS,cube_vert:HS,cube_frag:WS,depth_vert:jS,depth_frag:XS,distanceRGBA_vert:qS,distanceRGBA_frag:YS,equirect_vert:$S,equirect_frag:ZS,linedashed_vert:JS,linedashed_frag:KS,meshbasic_vert:QS,meshbasic_frag:eM,meshlambert_vert:tM,meshlambert_frag:nM,meshmatcap_vert:iM,meshmatcap_frag:rM,meshnormal_vert:sM,meshnormal_frag:oM,meshphong_vert:aM,meshphong_frag:lM,meshphysical_vert:uM,meshphysical_frag:cM,meshtoon_vert:fM,meshtoon_frag:hM,points_vert:dM,points_frag:pM,shadow_vert:mM,shadow_frag:gM,sprite_vert:vM,sprite_frag:_M},he={common:{diffuse:{value:new Ze(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new on},uv2Transform:{value:new on},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new on}},sprite:{diffuse:{value:new Ze(16777215)},opacity:{value:1},center:{value:new ue(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new on}}},Fn={basic:{uniforms:Ft([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:Ne.meshbasic_vert,fragmentShader:Ne.meshbasic_frag},lambert:{uniforms:Ft([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Ze(0)}}]),vertexShader:Ne.meshlambert_vert,fragmentShader:Ne.meshlambert_frag},phong:{uniforms:Ft([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Ze(0)},specular:{value:new Ze(1118481)},shininess:{value:30}}]),vertexShader:Ne.meshphong_vert,fragmentShader:Ne.meshphong_frag},standard:{uniforms:Ft([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new Ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag},toon:{uniforms:Ft([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new Ze(0)}}]),vertexShader:Ne.meshtoon_vert,fragmentShader:Ne.meshtoon_frag},matcap:{uniforms:Ft([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:Ne.meshmatcap_vert,fragmentShader:Ne.meshmatcap_frag},points:{uniforms:Ft([he.points,he.fog]),vertexShader:Ne.points_vert,fragmentShader:Ne.points_frag},dashed:{uniforms:Ft([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ne.linedashed_vert,fragmentShader:Ne.linedashed_frag},depth:{uniforms:Ft([he.common,he.displacementmap]),vertexShader:Ne.depth_vert,fragmentShader:Ne.depth_frag},normal:{uniforms:Ft([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:Ne.meshnormal_vert,fragmentShader:Ne.meshnormal_frag},sprite:{uniforms:Ft([he.sprite,he.fog]),vertexShader:Ne.sprite_vert,fragmentShader:Ne.sprite_frag},background:{uniforms:{uvTransform:{value:new on},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ne.background_vert,fragmentShader:Ne.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ne.backgroundCube_vert,fragmentShader:Ne.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ne.cube_vert,fragmentShader:Ne.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ne.equirect_vert,fragmentShader:Ne.equirect_frag},distanceRGBA:{uniforms:Ft([he.common,he.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ne.distanceRGBA_vert,fragmentShader:Ne.distanceRGBA_frag},shadow:{uniforms:Ft([he.lights,he.fog,{color:{value:new Ze(0)},opacity:{value:1}}]),vertexShader:Ne.shadow_vert,fragmentShader:Ne.shadow_frag}};Fn.physical={uniforms:Ft([Fn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new ue(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Ze(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Ze(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Ze(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag};const ya={r:0,b:0,g:0};function xM(n,e,t,i,r,s,o){const a=new Ze(0);let l=s===!0?0:1,u,c,f=null,h=0,m=null;function x(p,g){let _=!1,v=g.isScene===!0?g.background:null;v&&v.isTexture&&(v=(g.backgroundBlurriness>0?t:e).get(v));const S=n.xr,M=S.getSession&&S.getSession();M&&M.environmentBlendMode==="additive"&&(v=null),v===null?d(a,l):v&&v.isColor&&(d(v,1),_=!0),(n.autoClear||_)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Pl)?(c===void 0&&(c=new vn(new Uo(1,1,1),new hr({name:"BackgroundCubeMaterial",uniforms:gs(Fn.backgroundCube.uniforms),vertexShader:Fn.backgroundCube.vertexShader,fragmentShader:Fn.backgroundCube.fragmentShader,side:xn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,A,y){this.matrixWorld.copyPosition(y.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,c.material.toneMapped=v.encoding!==Qe,(f!==v||h!==v.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,f=v,h=v.version,m=n.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(u===void 0&&(u=new vn(new th(2,2),new hr({name:"BackgroundMaterial",uniforms:gs(Fn.background.uniforms),vertexShader:Fn.background.vertexShader,fragmentShader:Fn.background.fragmentShader,side:ar,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=v,u.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,u.material.toneMapped=v.encoding!==Qe,v.matrixAutoUpdate===!0&&v.updateMatrix(),u.material.uniforms.uvTransform.value.copy(v.matrix),(f!==v||h!==v.version||m!==n.toneMapping)&&(u.material.needsUpdate=!0,f=v,h=v.version,m=n.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null))}function d(p,g){p.getRGB(ya,l0(n)),i.buffers.color.setClear(ya.r,ya.g,ya.b,g,o)}return{getClearColor:function(){return a},setClearColor:function(p,g=1){a.set(p),l=g,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,d(a,l)},render:x}}function yM(n,e,t,i){const r=n.getParameter(34921),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=p(null);let u=l,c=!1;function f(N,X,K,Q,D){let W=!1;if(o){const G=d(Q,K,X);u!==G&&(u=G,m(u.object)),W=g(N,Q,K,D),W&&_(N,Q,K,D)}else{const G=X.wireframe===!0;(u.geometry!==Q.id||u.program!==K.id||u.wireframe!==G)&&(u.geometry=Q.id,u.program=K.id,u.wireframe=G,W=!0)}D!==null&&t.update(D,34963),(W||c)&&(c=!1,y(N,X,K,Q),D!==null&&n.bindBuffer(34963,t.get(D).buffer))}function h(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function m(N){return i.isWebGL2?n.bindVertexArray(N):s.bindVertexArrayOES(N)}function x(N){return i.isWebGL2?n.deleteVertexArray(N):s.deleteVertexArrayOES(N)}function d(N,X,K){const Q=K.wireframe===!0;let D=a[N.id];D===void 0&&(D={},a[N.id]=D);let W=D[X.id];W===void 0&&(W={},D[X.id]=W);let G=W[Q];return G===void 0&&(G=p(h()),W[Q]=G),G}function p(N){const X=[],K=[],Q=[];for(let D=0;D<r;D++)X[D]=0,K[D]=0,Q[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:X,enabledAttributes:K,attributeDivisors:Q,object:N,attributes:{},index:null}}function g(N,X,K,Q){const D=u.attributes,W=X.attributes;let G=0;const O=K.getAttributes();for(const B in O)if(O[B].location>=0){const ne=D[B];let ce=W[B];if(ce===void 0&&(B==="instanceMatrix"&&N.instanceMatrix&&(ce=N.instanceMatrix),B==="instanceColor"&&N.instanceColor&&(ce=N.instanceColor)),ne===void 0||ne.attribute!==ce||ce&&ne.data!==ce.data)return!0;G++}return u.attributesNum!==G||u.index!==Q}function _(N,X,K,Q){const D={},W=X.attributes;let G=0;const O=K.getAttributes();for(const B in O)if(O[B].location>=0){let ne=W[B];ne===void 0&&(B==="instanceMatrix"&&N.instanceMatrix&&(ne=N.instanceMatrix),B==="instanceColor"&&N.instanceColor&&(ne=N.instanceColor));const ce={};ce.attribute=ne,ne&&ne.data&&(ce.data=ne.data),D[B]=ce,G++}u.attributes=D,u.attributesNum=G,u.index=Q}function v(){const N=u.newAttributes;for(let X=0,K=N.length;X<K;X++)N[X]=0}function S(N){M(N,0)}function M(N,X){const K=u.newAttributes,Q=u.enabledAttributes,D=u.attributeDivisors;K[N]=1,Q[N]===0&&(n.enableVertexAttribArray(N),Q[N]=1),D[N]!==X&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](N,X),D[N]=X)}function T(){const N=u.newAttributes,X=u.enabledAttributes;for(let K=0,Q=X.length;K<Q;K++)X[K]!==N[K]&&(n.disableVertexAttribArray(K),X[K]=0)}function A(N,X,K,Q,D,W){i.isWebGL2===!0&&(K===5124||K===5125)?n.vertexAttribIPointer(N,X,K,D,W):n.vertexAttribPointer(N,X,K,Q,D,W)}function y(N,X,K,Q){if(i.isWebGL2===!1&&(N.isInstancedMesh||Q.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const D=Q.attributes,W=K.getAttributes(),G=X.defaultAttributeValues;for(const O in W){const B=W[O];if(B.location>=0){let te=D[O];if(te===void 0&&(O==="instanceMatrix"&&N.instanceMatrix&&(te=N.instanceMatrix),O==="instanceColor"&&N.instanceColor&&(te=N.instanceColor)),te!==void 0){const ne=te.normalized,ce=te.itemSize,j=t.get(te);if(j===void 0)continue;const Ae=j.buffer,ye=j.type,Le=j.bytesPerElement;if(te.isInterleavedBufferAttribute){const de=te.data,Ie=de.stride,J=te.offset;if(de.isInstancedInterleavedBuffer){for(let Z=0;Z<B.locationSize;Z++)M(B.location+Z,de.meshPerAttribute);N.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let Z=0;Z<B.locationSize;Z++)S(B.location+Z);n.bindBuffer(34962,Ae);for(let Z=0;Z<B.locationSize;Z++)A(B.location+Z,ce/B.locationSize,ye,ne,Ie*Le,(J+ce/B.locationSize*Z)*Le)}else{if(te.isInstancedBufferAttribute){for(let de=0;de<B.locationSize;de++)M(B.location+de,te.meshPerAttribute);N.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let de=0;de<B.locationSize;de++)S(B.location+de);n.bindBuffer(34962,Ae);for(let de=0;de<B.locationSize;de++)A(B.location+de,ce/B.locationSize,ye,ne,ce*Le,ce/B.locationSize*de*Le)}}else if(G!==void 0){const ne=G[O];if(ne!==void 0)switch(ne.length){case 2:n.vertexAttrib2fv(B.location,ne);break;case 3:n.vertexAttrib3fv(B.location,ne);break;case 4:n.vertexAttrib4fv(B.location,ne);break;default:n.vertexAttrib1fv(B.location,ne)}}}}T()}function C(){oe();for(const N in a){const X=a[N];for(const K in X){const Q=X[K];for(const D in Q)x(Q[D].object),delete Q[D];delete X[K]}delete a[N]}}function P(N){if(a[N.id]===void 0)return;const X=a[N.id];for(const K in X){const Q=X[K];for(const D in Q)x(Q[D].object),delete Q[D];delete X[K]}delete a[N.id]}function V(N){for(const X in a){const K=a[X];if(K[N.id]===void 0)continue;const Q=K[N.id];for(const D in Q)x(Q[D].object),delete Q[D];delete K[N.id]}}function oe(){k(),c=!0,u!==l&&(u=l,m(u.object))}function k(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:oe,resetDefaultState:k,dispose:C,releaseStatesOfGeometry:P,releaseStatesOfProgram:V,initAttributes:v,enableAttribute:S,disableUnusedAttributes:T}}function SM(n,e,t,i){const r=i.isWebGL2;let s;function o(u){s=u}function a(u,c){n.drawArrays(s,u,c),t.update(c,s,1)}function l(u,c,f){if(f===0)return;let h,m;if(r)h=n,m="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[m](s,u,c,f),t.update(c,s,f)}this.setMode=o,this.render=a,this.renderInstances=l}function MM(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(A){if(A==="highp"){if(n.getShaderPrecisionFormat(35633,36338).precision>0&&n.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(35633,36337).precision>0&&n.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&n instanceof WebGL2ComputeRenderingContext;let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const u=o||e.has("WEBGL_draw_buffers"),c=t.logarithmicDepthBuffer===!0,f=n.getParameter(34930),h=n.getParameter(35660),m=n.getParameter(3379),x=n.getParameter(34076),d=n.getParameter(34921),p=n.getParameter(36347),g=n.getParameter(36348),_=n.getParameter(36349),v=h>0,S=o||e.has("OES_texture_float"),M=v&&S,T=o?n.getParameter(36183):0;return{isWebGL2:o,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:c,maxTextures:f,maxVertexTextures:h,maxTextureSize:m,maxCubemapSize:x,maxAttributes:d,maxVertexUniforms:p,maxVaryings:g,maxFragmentUniforms:_,vertexTextures:v,floatFragmentTextures:S,floatVertexTextures:M,maxSamples:T}}function wM(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new Wi,a=new on,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h,m){const x=f.length!==0||h||i!==0||r;return r=h,t=c(f,m,0),i=f.length,x},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1,u()},this.setState=function(f,h,m){const x=f.clippingPlanes,d=f.clipIntersection,p=f.clipShadows,g=n.get(f);if(!r||x===null||x.length===0||s&&!p)s?c(null):u();else{const _=s?0:i,v=_*4;let S=g.clippingState||null;l.value=S,S=c(x,h,v,m);for(let M=0;M!==v;++M)S[M]=t[M];g.clippingState=S,this.numIntersection=d?this.numPlanes:0,this.numPlanes+=_}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(f,h,m,x){const d=f!==null?f.length:0;let p=null;if(d!==0){if(p=l.value,x!==!0||p===null){const g=m+d*4,_=h.matrixWorldInverse;a.getNormalMatrix(_),(p===null||p.length<g)&&(p=new Float32Array(g));for(let v=0,S=m;v!==d;++v,S+=4)o.copy(f[v]).applyMatrix4(_,a),o.normal.toArray(p,S),p[S+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=d,e.numIntersection=0,p}}function EM(n){let e=new WeakMap;function t(o,a){return a===jc?o.mapping=ds:a===Xc&&(o.mapping=ps),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===jc||a===Xc)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new Fy(l.height/2);return u.fromEquirectangularTexture(n,o),e.set(o,u),o.addEventListener("dispose",r),t(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class TM extends u0{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Yr=4,ap=[.125,.215,.35,.446,.526,.582],Xi=20,Ou=new TM,lp=new Ze;let Uu=null;const ji=(1+Math.sqrt(5))/2,Nr=1/ji,up=[new R(1,1,1),new R(-1,1,1),new R(1,1,-1),new R(-1,1,-1),new R(0,ji,Nr),new R(0,ji,-Nr),new R(Nr,0,ji),new R(-Nr,0,ji),new R(ji,Nr,0),new R(-ji,Nr,0)];class cp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Uu=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=dp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=hp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Uu),e.scissorTest=!1,Sa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ds||e.mapping===ps?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Uu=this._renderer.getRenderTarget();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:mn,minFilter:mn,generateMipmaps:!1,type:wo,format:Pn,encoding:ur,depthBuffer:!1},r=fp(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=fp(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=bM(s)),this._blurMaterial=CM(s,e,t)}return r}_compileMaterial(e){const t=new vn(this._lodPlanes[0],e);this._renderer.compile(t,Ou)}_sceneToCubeUV(e,t,i,r){const a=new rn(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,f=c.autoClear,h=c.toneMapping;c.getClearColor(lp),c.toneMapping=ri,c.autoClear=!1;const m=new bo({name:"PMREM.Background",side:xn,depthWrite:!1,depthTest:!1}),x=new vn(new Uo,m);let d=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,d=!0):(m.color.copy(lp),d=!0);for(let g=0;g<6;g++){const _=g%3;_===0?(a.up.set(0,l[g],0),a.lookAt(u[g],0,0)):_===1?(a.up.set(0,0,l[g]),a.lookAt(0,u[g],0)):(a.up.set(0,l[g],0),a.lookAt(0,0,u[g]));const v=this._cubeSize;Sa(r,_*v,g>2?v:0,v,v),c.setRenderTarget(r),d&&c.render(x,a),c.render(e,a)}x.geometry.dispose(),x.material.dispose(),c.toneMapping=h,c.autoClear=f,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===ds||e.mapping===ps;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=dp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=hp());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new vn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Sa(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Ou)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=up[(r-1)%up.length];this._blur(e,r-1,r,s,o)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,f=new vn(this._lodPlanes[r],u),h=u.uniforms,m=this._sizeLods[i]-1,x=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Xi-1),d=s/x,p=isFinite(s)?1+Math.floor(c*d):Xi;p>Xi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Xi}`);const g=[];let _=0;for(let A=0;A<Xi;++A){const y=A/d,C=Math.exp(-y*y/2);g.push(C),A===0?_+=C:A<p&&(_+=2*C)}for(let A=0;A<g.length;A++)g[A]=g[A]/_;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=g,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:v}=this;h.dTheta.value=x,h.mipInt.value=v-i;const S=this._sizeLods[r],M=3*S*(r>v-Yr?r-v+Yr:0),T=4*(this._cubeSize-S);Sa(t,M,T,3*S,2*S),l.setRenderTarget(t),l.render(f,Ou)}}function bM(n){const e=[],t=[],i=[];let r=n;const s=n-Yr+1+ap.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-Yr?l=ap[o-n+Yr-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),c=-u,f=1+u,h=[c,c,f,c,f,f,c,c,f,f,c,f],m=6,x=6,d=3,p=2,g=1,_=new Float32Array(d*x*m),v=new Float32Array(p*x*m),S=new Float32Array(g*x*m);for(let T=0;T<m;T++){const A=T%3*2/3-1,y=T>2?0:-1,C=[A,y,0,A+2/3,y,0,A+2/3,y+1,0,A,y,0,A+2/3,y+1,0,A,y+1,0];_.set(C,d*x*T),v.set(h,p*x*T);const P=[T,T,T,T,T,T];S.set(P,g*x*T)}const M=new Gn;M.setAttribute("position",new Vn(_,d)),M.setAttribute("uv",new Vn(v,p)),M.setAttribute("faceIndex",new Vn(S,g)),e.push(M),r>Yr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function fp(n,e,t){const i=new cr(n,e,t);return i.texture.mapping=Pl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Sa(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function CM(n,e,t){const i=new Float32Array(Xi),r=new R(0,1,0);return new hr({name:"SphericalGaussianBlur",defines:{n:Xi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:nh(),fragmentShader:`

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
		`,blending:Li,depthTest:!1,depthWrite:!1})}function hp(){return new hr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:nh(),fragmentShader:`

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
		`,blending:Li,depthTest:!1,depthWrite:!1})}function dp(){return new hr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:nh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Li,depthTest:!1,depthWrite:!1})}function nh(){return`

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
	`}function AM(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===jc||l===Xc,c=l===ds||l===ps;if(u||c)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return t===null&&(t=new cp(n)),f=u?t.fromEquirectangular(a,f):t.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{const f=a.image;if(u&&f&&f.height>0||c&&f&&r(f)){t===null&&(t=new cp(n));const h=u?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",s),h.texture}else return null}}}return a}function r(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function LM(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function PM(n,e,t,i){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const x in h.attributes)e.remove(h.attributes[x]);h.removeEventListener("dispose",o),delete r[h.id];const m=s.get(h);m&&(e.remove(m),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const x in h)e.update(h[x],34962);const m=f.morphAttributes;for(const x in m){const d=m[x];for(let p=0,g=d.length;p<g;p++)e.update(d[p],34962)}}function u(f){const h=[],m=f.index,x=f.attributes.position;let d=0;if(m!==null){const _=m.array;d=m.version;for(let v=0,S=_.length;v<S;v+=3){const M=_[v+0],T=_[v+1],A=_[v+2];h.push(M,T,T,A,A,M)}}else{const _=x.array;d=x.version;for(let v=0,S=_.length/3-1;v<S;v+=3){const M=v+0,T=v+1,A=v+2;h.push(M,T,T,A,A,M)}}const p=new(e0(h)?a0:o0)(h,1);p.version=d;const g=s.get(f);g&&e.remove(g),s.set(f,p)}function c(f){const h=s.get(f);if(h){const m=f.index;m!==null&&h.version<m.version&&u(f)}else u(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:c}}function RM(n,e,t,i){const r=i.isWebGL2;let s;function o(h){s=h}let a,l;function u(h){a=h.type,l=h.bytesPerElement}function c(h,m){n.drawElements(s,m,a,h*l),t.update(m,s,1)}function f(h,m,x){if(x===0)return;let d,p;if(r)d=n,p="drawElementsInstanced";else if(d=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",d===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[p](s,m,a,h*l,x),t.update(m,s,x)}this.setMode=o,this.setIndex=u,this.render=c,this.renderInstances=f}function DM(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(s/3);break;case 1:t.lines+=a*(s/2);break;case 3:t.lines+=a*(s-1);break;case 2:t.lines+=a*s;break;case 0:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function IM(n,e){return n[0]-e[0]}function NM(n,e){return Math.abs(e[1])-Math.abs(n[1])}function kM(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,o=new it,a=[];for(let u=0;u<8;u++)a[u]=[u,0];function l(u,c,f,h){const m=u.morphTargetInfluences;if(e.isWebGL2===!0){const d=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,p=d!==void 0?d.length:0;let g=s.get(c);if(g===void 0||g.count!==p){let K=function(){N.dispose(),s.delete(c),c.removeEventListener("dispose",K)};var x=K;g!==void 0&&g.texture.dispose();const S=c.morphAttributes.position!==void 0,M=c.morphAttributes.normal!==void 0,T=c.morphAttributes.color!==void 0,A=c.morphAttributes.position||[],y=c.morphAttributes.normal||[],C=c.morphAttributes.color||[];let P=0;S===!0&&(P=1),M===!0&&(P=2),T===!0&&(P=3);let V=c.attributes.position.count*P,oe=1;V>e.maxTextureSize&&(oe=Math.ceil(V/e.maxTextureSize),V=e.maxTextureSize);const k=new Float32Array(V*oe*4*p),N=new r0(k,V,oe,p);N.type=Ji,N.needsUpdate=!0;const X=P*4;for(let Q=0;Q<p;Q++){const D=A[Q],W=y[Q],G=C[Q],O=V*oe*4*Q;for(let B=0;B<D.count;B++){const te=B*X;S===!0&&(o.fromBufferAttribute(D,B),k[O+te+0]=o.x,k[O+te+1]=o.y,k[O+te+2]=o.z,k[O+te+3]=0),M===!0&&(o.fromBufferAttribute(W,B),k[O+te+4]=o.x,k[O+te+5]=o.y,k[O+te+6]=o.z,k[O+te+7]=0),T===!0&&(o.fromBufferAttribute(G,B),k[O+te+8]=o.x,k[O+te+9]=o.y,k[O+te+10]=o.z,k[O+te+11]=G.itemSize===4?o.w:1)}}g={count:p,texture:N,size:new ue(V,oe)},s.set(c,g),c.addEventListener("dispose",K)}let _=0;for(let S=0;S<m.length;S++)_+=m[S];const v=c.morphTargetsRelative?1:1-_;h.getUniforms().setValue(n,"morphTargetBaseInfluence",v),h.getUniforms().setValue(n,"morphTargetInfluences",m),h.getUniforms().setValue(n,"morphTargetsTexture",g.texture,t),h.getUniforms().setValue(n,"morphTargetsTextureSize",g.size)}else{const d=m===void 0?0:m.length;let p=i[c.id];if(p===void 0||p.length!==d){p=[];for(let M=0;M<d;M++)p[M]=[M,0];i[c.id]=p}for(let M=0;M<d;M++){const T=p[M];T[0]=M,T[1]=m[M]}p.sort(NM);for(let M=0;M<8;M++)M<d&&p[M][1]?(a[M][0]=p[M][0],a[M][1]=p[M][1]):(a[M][0]=Number.MAX_SAFE_INTEGER,a[M][1]=0);a.sort(IM);const g=c.morphAttributes.position,_=c.morphAttributes.normal;let v=0;for(let M=0;M<8;M++){const T=a[M],A=T[0],y=T[1];A!==Number.MAX_SAFE_INTEGER&&y?(g&&c.getAttribute("morphTarget"+M)!==g[A]&&c.setAttribute("morphTarget"+M,g[A]),_&&c.getAttribute("morphNormal"+M)!==_[A]&&c.setAttribute("morphNormal"+M,_[A]),r[M]=y,v+=y):(g&&c.hasAttribute("morphTarget"+M)===!0&&c.deleteAttribute("morphTarget"+M),_&&c.hasAttribute("morphNormal"+M)===!0&&c.deleteAttribute("morphNormal"+M),r[M]=0)}const S=c.morphTargetsRelative?1:1-v;h.getUniforms().setValue(n,"morphTargetBaseInfluence",S),h.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function zM(n,e,t,i){let r=new WeakMap;function s(l){const u=i.render.frame,c=l.geometry,f=e.get(l,c);return r.get(f)!==u&&(e.update(f),r.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),f}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:o}}const h0=new Zt,d0=new r0,p0=new yy,m0=new c0,pp=[],mp=[],gp=new Float32Array(16),vp=new Float32Array(9),_p=new Float32Array(4);function ys(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=pp[r];if(s===void 0&&(s=new Float32Array(r),pp[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function _t(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function xt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Rl(n,e){let t=mp[e];t===void 0&&(t=new Int32Array(e),mp[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function FM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function OM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;n.uniform2fv(this.addr,e),xt(t,e)}}function UM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(_t(t,e))return;n.uniform3fv(this.addr,e),xt(t,e)}}function BM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;n.uniform4fv(this.addr,e),xt(t,e)}}function VM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(_t(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),xt(t,e)}else{if(_t(t,i))return;_p.set(i),n.uniformMatrix2fv(this.addr,!1,_p),xt(t,i)}}function GM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(_t(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),xt(t,e)}else{if(_t(t,i))return;vp.set(i),n.uniformMatrix3fv(this.addr,!1,vp),xt(t,i)}}function HM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(_t(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),xt(t,e)}else{if(_t(t,i))return;gp.set(i),n.uniformMatrix4fv(this.addr,!1,gp),xt(t,i)}}function WM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function jM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;n.uniform2iv(this.addr,e),xt(t,e)}}function XM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_t(t,e))return;n.uniform3iv(this.addr,e),xt(t,e)}}function qM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;n.uniform4iv(this.addr,e),xt(t,e)}}function YM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function $M(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;n.uniform2uiv(this.addr,e),xt(t,e)}}function ZM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_t(t,e))return;n.uniform3uiv(this.addr,e),xt(t,e)}}function JM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;n.uniform4uiv(this.addr,e),xt(t,e)}}function KM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2D(e||h0,r)}function QM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||p0,r)}function ew(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||m0,r)}function tw(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||d0,r)}function nw(n){switch(n){case 5126:return FM;case 35664:return OM;case 35665:return UM;case 35666:return BM;case 35674:return VM;case 35675:return GM;case 35676:return HM;case 5124:case 35670:return WM;case 35667:case 35671:return jM;case 35668:case 35672:return XM;case 35669:case 35673:return qM;case 5125:return YM;case 36294:return $M;case 36295:return ZM;case 36296:return JM;case 35678:case 36198:case 36298:case 36306:case 35682:return KM;case 35679:case 36299:case 36307:return QM;case 35680:case 36300:case 36308:case 36293:return ew;case 36289:case 36303:case 36311:case 36292:return tw}}function iw(n,e){n.uniform1fv(this.addr,e)}function rw(n,e){const t=ys(e,this.size,2);n.uniform2fv(this.addr,t)}function sw(n,e){const t=ys(e,this.size,3);n.uniform3fv(this.addr,t)}function ow(n,e){const t=ys(e,this.size,4);n.uniform4fv(this.addr,t)}function aw(n,e){const t=ys(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function lw(n,e){const t=ys(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function uw(n,e){const t=ys(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function cw(n,e){n.uniform1iv(this.addr,e)}function fw(n,e){n.uniform2iv(this.addr,e)}function hw(n,e){n.uniform3iv(this.addr,e)}function dw(n,e){n.uniform4iv(this.addr,e)}function pw(n,e){n.uniform1uiv(this.addr,e)}function mw(n,e){n.uniform2uiv(this.addr,e)}function gw(n,e){n.uniform3uiv(this.addr,e)}function vw(n,e){n.uniform4uiv(this.addr,e)}function _w(n,e,t){const i=this.cache,r=e.length,s=Rl(t,r);_t(i,s)||(n.uniform1iv(this.addr,s),xt(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||h0,s[o])}function xw(n,e,t){const i=this.cache,r=e.length,s=Rl(t,r);_t(i,s)||(n.uniform1iv(this.addr,s),xt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||p0,s[o])}function yw(n,e,t){const i=this.cache,r=e.length,s=Rl(t,r);_t(i,s)||(n.uniform1iv(this.addr,s),xt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||m0,s[o])}function Sw(n,e,t){const i=this.cache,r=e.length,s=Rl(t,r);_t(i,s)||(n.uniform1iv(this.addr,s),xt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||d0,s[o])}function Mw(n){switch(n){case 5126:return iw;case 35664:return rw;case 35665:return sw;case 35666:return ow;case 35674:return aw;case 35675:return lw;case 35676:return uw;case 5124:case 35670:return cw;case 35667:case 35671:return fw;case 35668:case 35672:return hw;case 35669:case 35673:return dw;case 5125:return pw;case 36294:return mw;case 36295:return gw;case 36296:return vw;case 35678:case 36198:case 36298:case 36306:case 35682:return _w;case 35679:case 36299:case 36307:return xw;case 35680:case 36300:case 36308:case 36293:return yw;case 36289:case 36303:case 36311:case 36292:return Sw}}class ww{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=nw(t.type)}}class Ew{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=Mw(t.type)}}class Tw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const Bu=/(\w+)(\])?(\[|\.)?/g;function xp(n,e){n.seq.push(e),n.map[e.id]=e}function bw(n,e,t){const i=n.name,r=i.length;for(Bu.lastIndex=0;;){const s=Bu.exec(i),o=Bu.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){xp(t,u===void 0?new ww(a,n,e):new Ew(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new Tw(a),xp(t,f)),t=f}}}class Ua{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,35718);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);bw(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function yp(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}let Cw=0;function Aw(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function Lw(n){switch(n){case ur:return["Linear","( value )"];case Qe:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",n),["Linear","( value )"]}}function Sp(n,e,t){const i=n.getShaderParameter(e,35713),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+Aw(n.getShaderSource(e),o)}else return r}function Pw(n,e){const t=Lw(e);return"vec4 "+n+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Rw(n,e){let t;switch(e){case Ix:t="Linear";break;case Nx:t="Reinhard";break;case kx:t="OptimizedCineon";break;case zx:t="ACESFilmic";break;case Fx:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Dw(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.tangentSpaceNormalMap||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ws).join(`
`)}function Iw(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Nw(n,e){const t={},i=n.getProgramParameter(e,35721);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Ws(n){return n!==""}function Mp(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function wp(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const kw=/^[ \t]*#include +<([\w\d./]+)>/gm;function Jc(n){return n.replace(kw,zw)}function zw(n,e){const t=Ne[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Jc(t)}const Fw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ep(n){return n.replace(Fw,Ow)}function Ow(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Tp(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Uw(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===qg?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===fx?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Gs&&(e="SHADOWMAP_TYPE_VSM"),e}function Bw(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ds:case ps:e="ENVMAP_TYPE_CUBE";break;case Pl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Vw(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case ps:e="ENVMAP_MODE_REFRACTION";break}return e}function Gw(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Zg:e="ENVMAP_BLENDING_MULTIPLY";break;case Rx:e="ENVMAP_BLENDING_MIX";break;case Dx:e="ENVMAP_BLENDING_ADD";break}return e}function Hw(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function Ww(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Uw(t),u=Bw(t),c=Vw(t),f=Gw(t),h=Hw(t),m=t.isWebGL2?"":Dw(t),x=Iw(s),d=r.createProgram();let p,g,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=[x].filter(Ws).join(`
`),p.length>0&&(p+=`
`),g=[m,x].filter(Ws).join(`
`),g.length>0&&(g+=`
`)):(p=[Tp(t),"#define SHADER_NAME "+t.shaderName,x,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ws).join(`
`),g=[m,Tp(t),"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+c:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ri?"#define TONE_MAPPING":"",t.toneMapping!==ri?Ne.tonemapping_pars_fragment:"",t.toneMapping!==ri?Rw("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ne.encodings_pars_fragment,Pw("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ws).join(`
`)),o=Jc(o),o=Mp(o,t),o=wp(o,t),a=Jc(a),a=Mp(a,t),a=wp(a,t),o=Ep(o),a=Ep(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,g=["#define varying in",t.glslVersion===$d?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===$d?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const v=_+p+o,S=_+g+a,M=yp(r,35633,v),T=yp(r,35632,S);if(r.attachShader(d,M),r.attachShader(d,T),t.index0AttributeName!==void 0?r.bindAttribLocation(d,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(d,0,"position"),r.linkProgram(d),n.debug.checkShaderErrors){const C=r.getProgramInfoLog(d).trim(),P=r.getShaderInfoLog(M).trim(),V=r.getShaderInfoLog(T).trim();let oe=!0,k=!0;if(r.getProgramParameter(d,35714)===!1){oe=!1;const N=Sp(r,M,"vertex"),X=Sp(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(d,35715)+`

Program Info Log: `+C+`
`+N+`
`+X)}else C!==""?console.warn("THREE.WebGLProgram: Program Info Log:",C):(P===""||V==="")&&(k=!1);k&&(this.diagnostics={runnable:oe,programLog:C,vertexShader:{log:P,prefix:p},fragmentShader:{log:V,prefix:g}})}r.deleteShader(M),r.deleteShader(T);let A;this.getUniforms=function(){return A===void 0&&(A=new Ua(r,d)),A};let y;return this.getAttributes=function(){return y===void 0&&(y=Nw(r,d)),y},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(d),this.program=void 0},this.name=t.shaderName,this.id=Cw++,this.cacheKey=e,this.usedTimes=1,this.program=d,this.vertexShader=M,this.fragmentShader=T,this}let jw=0;class Xw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new qw(e),t.set(e,i)),i}}class qw{constructor(e){this.id=jw++,this.code=e,this.usedTimes=0}}function Yw(n,e,t,i,r,s,o){const a=new s0,l=new Xw,u=[],c=r.isWebGL2,f=r.logarithmicDepthBuffer,h=r.vertexTextures;let m=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(y,C,P,V,oe){const k=V.fog,N=oe.geometry,X=y.isMeshStandardMaterial?V.environment:null,K=(y.isMeshStandardMaterial?t:e).get(y.envMap||X),Q=K&&K.mapping===Pl?K.image.height:null,D=x[y.type];y.precision!==null&&(m=r.getMaxPrecision(y.precision),m!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",m,"instead."));const W=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,G=W!==void 0?W.length:0;let O=0;N.morphAttributes.position!==void 0&&(O=1),N.morphAttributes.normal!==void 0&&(O=2),N.morphAttributes.color!==void 0&&(O=3);let B,te,ne,ce;if(D){const Ie=Fn[D];B=Ie.vertexShader,te=Ie.fragmentShader}else B=y.vertexShader,te=y.fragmentShader,l.update(y),ne=l.getVertexShaderID(y),ce=l.getFragmentShaderID(y);const j=n.getRenderTarget(),Ae=y.alphaTest>0,ye=y.clearcoat>0,Le=y.iridescence>0;return{isWebGL2:c,shaderID:D,shaderName:y.type,vertexShader:B,fragmentShader:te,defines:y.defines,customVertexShaderID:ne,customFragmentShaderID:ce,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:m,instancing:oe.isInstancedMesh===!0,instancingColor:oe.isInstancedMesh===!0&&oe.instanceColor!==null,supportsVertexTextures:h,outputEncoding:j===null?n.outputEncoding:j.isXRRenderTarget===!0?j.texture.encoding:ur,map:!!y.map,matcap:!!y.matcap,envMap:!!K,envMapMode:K&&K.mapping,envMapCubeUVHeight:Q,lightMap:!!y.lightMap,aoMap:!!y.aoMap,emissiveMap:!!y.emissiveMap,bumpMap:!!y.bumpMap,normalMap:!!y.normalMap,objectSpaceNormalMap:y.normalMapType===ny,tangentSpaceNormalMap:y.normalMapType===Qg,decodeVideoTexture:!!y.map&&y.map.isVideoTexture===!0&&y.map.encoding===Qe,clearcoat:ye,clearcoatMap:ye&&!!y.clearcoatMap,clearcoatRoughnessMap:ye&&!!y.clearcoatRoughnessMap,clearcoatNormalMap:ye&&!!y.clearcoatNormalMap,iridescence:Le,iridescenceMap:Le&&!!y.iridescenceMap,iridescenceThicknessMap:Le&&!!y.iridescenceThicknessMap,displacementMap:!!y.displacementMap,roughnessMap:!!y.roughnessMap,metalnessMap:!!y.metalnessMap,specularMap:!!y.specularMap,specularIntensityMap:!!y.specularIntensityMap,specularColorMap:!!y.specularColorMap,opaque:y.transparent===!1&&y.blending===ns,alphaMap:!!y.alphaMap,alphaTest:Ae,gradientMap:!!y.gradientMap,sheen:y.sheen>0,sheenColorMap:!!y.sheenColorMap,sheenRoughnessMap:!!y.sheenRoughnessMap,transmission:y.transmission>0,transmissionMap:!!y.transmissionMap,thicknessMap:!!y.thicknessMap,combine:y.combine,vertexTangents:!!y.normalMap&&!!N.attributes.tangent,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,vertexUvs:!!y.map||!!y.bumpMap||!!y.normalMap||!!y.specularMap||!!y.alphaMap||!!y.emissiveMap||!!y.roughnessMap||!!y.metalnessMap||!!y.clearcoatMap||!!y.clearcoatRoughnessMap||!!y.clearcoatNormalMap||!!y.iridescenceMap||!!y.iridescenceThicknessMap||!!y.displacementMap||!!y.transmissionMap||!!y.thicknessMap||!!y.specularIntensityMap||!!y.specularColorMap||!!y.sheenColorMap||!!y.sheenRoughnessMap,uvsVertexOnly:!(y.map||y.bumpMap||y.normalMap||y.specularMap||y.alphaMap||y.emissiveMap||y.roughnessMap||y.metalnessMap||y.clearcoatNormalMap||y.iridescenceMap||y.iridescenceThicknessMap||y.transmission>0||y.transmissionMap||y.thicknessMap||y.specularIntensityMap||y.specularColorMap||y.sheen>0||y.sheenColorMap||y.sheenRoughnessMap)&&!!y.displacementMap,fog:!!k,useFog:y.fog===!0,fogExp2:k&&k.isFogExp2,flatShading:!!y.flatShading,sizeAttenuation:y.sizeAttenuation,logarithmicDepthBuffer:f,skinning:oe.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:G,morphTextureStride:O,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:y.toneMapped?n.toneMapping:ri,physicallyCorrectLights:n.physicallyCorrectLights,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Jf,flipSided:y.side===xn,useDepthPacking:!!y.depthPacking,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:y.extensions&&y.extensions.derivatives,extensionFragDepth:y.extensions&&y.extensions.fragDepth,extensionDrawBuffers:y.extensions&&y.extensions.drawBuffers,extensionShaderTextureLOD:y.extensions&&y.extensions.shaderTextureLOD,rendererExtensionFragDepth:c||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:c||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:c||i.has("EXT_shader_texture_lod"),customProgramCacheKey:y.customProgramCacheKey()}}function p(y){const C=[];if(y.shaderID?C.push(y.shaderID):(C.push(y.customVertexShaderID),C.push(y.customFragmentShaderID)),y.defines!==void 0)for(const P in y.defines)C.push(P),C.push(y.defines[P]);return y.isRawShaderMaterial===!1&&(g(C,y),_(C,y),C.push(n.outputEncoding)),C.push(y.customProgramCacheKey),C.join()}function g(y,C){y.push(C.precision),y.push(C.outputEncoding),y.push(C.envMapMode),y.push(C.envMapCubeUVHeight),y.push(C.combine),y.push(C.vertexUvs),y.push(C.fogExp2),y.push(C.sizeAttenuation),y.push(C.morphTargetsCount),y.push(C.morphAttributeCount),y.push(C.numDirLights),y.push(C.numPointLights),y.push(C.numSpotLights),y.push(C.numSpotLightMaps),y.push(C.numHemiLights),y.push(C.numRectAreaLights),y.push(C.numDirLightShadows),y.push(C.numPointLightShadows),y.push(C.numSpotLightShadows),y.push(C.numSpotLightShadowsWithMaps),y.push(C.shadowMapType),y.push(C.toneMapping),y.push(C.numClippingPlanes),y.push(C.numClipIntersection),y.push(C.depthPacking)}function _(y,C){a.disableAll(),C.isWebGL2&&a.enable(0),C.supportsVertexTextures&&a.enable(1),C.instancing&&a.enable(2),C.instancingColor&&a.enable(3),C.map&&a.enable(4),C.matcap&&a.enable(5),C.envMap&&a.enable(6),C.lightMap&&a.enable(7),C.aoMap&&a.enable(8),C.emissiveMap&&a.enable(9),C.bumpMap&&a.enable(10),C.normalMap&&a.enable(11),C.objectSpaceNormalMap&&a.enable(12),C.tangentSpaceNormalMap&&a.enable(13),C.clearcoat&&a.enable(14),C.clearcoatMap&&a.enable(15),C.clearcoatRoughnessMap&&a.enable(16),C.clearcoatNormalMap&&a.enable(17),C.iridescence&&a.enable(18),C.iridescenceMap&&a.enable(19),C.iridescenceThicknessMap&&a.enable(20),C.displacementMap&&a.enable(21),C.specularMap&&a.enable(22),C.roughnessMap&&a.enable(23),C.metalnessMap&&a.enable(24),C.gradientMap&&a.enable(25),C.alphaMap&&a.enable(26),C.alphaTest&&a.enable(27),C.vertexColors&&a.enable(28),C.vertexAlphas&&a.enable(29),C.vertexUvs&&a.enable(30),C.vertexTangents&&a.enable(31),C.uvsVertexOnly&&a.enable(32),y.push(a.mask),a.disableAll(),C.fog&&a.enable(0),C.useFog&&a.enable(1),C.flatShading&&a.enable(2),C.logarithmicDepthBuffer&&a.enable(3),C.skinning&&a.enable(4),C.morphTargets&&a.enable(5),C.morphNormals&&a.enable(6),C.morphColors&&a.enable(7),C.premultipliedAlpha&&a.enable(8),C.shadowMapEnabled&&a.enable(9),C.physicallyCorrectLights&&a.enable(10),C.doubleSided&&a.enable(11),C.flipSided&&a.enable(12),C.useDepthPacking&&a.enable(13),C.dithering&&a.enable(14),C.specularIntensityMap&&a.enable(15),C.specularColorMap&&a.enable(16),C.transmission&&a.enable(17),C.transmissionMap&&a.enable(18),C.thicknessMap&&a.enable(19),C.sheen&&a.enable(20),C.sheenColorMap&&a.enable(21),C.sheenRoughnessMap&&a.enable(22),C.decodeVideoTexture&&a.enable(23),C.opaque&&a.enable(24),y.push(a.mask)}function v(y){const C=x[y.type];let P;if(C){const V=Fn[C];P=Iy.clone(V.uniforms)}else P=y.uniforms;return P}function S(y,C){let P;for(let V=0,oe=u.length;V<oe;V++){const k=u[V];if(k.cacheKey===C){P=k,++P.usedTimes;break}}return P===void 0&&(P=new Ww(n,C,y,s),u.push(P)),P}function M(y){if(--y.usedTimes===0){const C=u.indexOf(y);u[C]=u[u.length-1],u.pop(),y.destroy()}}function T(y){l.remove(y)}function A(){l.dispose()}return{getParameters:d,getProgramCacheKey:p,getUniforms:v,acquireProgram:S,releaseProgram:M,releaseShaderCache:T,programs:u,dispose:A}}function $w(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function Zw(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function bp(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Cp(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(f,h,m,x,d,p){let g=n[e];return g===void 0?(g={id:f.id,object:f,geometry:h,material:m,groupOrder:x,renderOrder:f.renderOrder,z:d,group:p},n[e]=g):(g.id=f.id,g.object=f,g.geometry=h,g.material=m,g.groupOrder=x,g.renderOrder=f.renderOrder,g.z=d,g.group=p),e++,g}function a(f,h,m,x,d,p){const g=o(f,h,m,x,d,p);m.transmission>0?i.push(g):m.transparent===!0?r.push(g):t.push(g)}function l(f,h,m,x,d,p){const g=o(f,h,m,x,d,p);m.transmission>0?i.unshift(g):m.transparent===!0?r.unshift(g):t.unshift(g)}function u(f,h){t.length>1&&t.sort(f||Zw),i.length>1&&i.sort(h||bp),r.length>1&&r.sort(h||bp)}function c(){for(let f=e,h=n.length;f<h;f++){const m=n[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:c,sort:u}}function Jw(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new Cp,n.set(i,[o])):r>=s.length?(o=new Cp,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function Kw(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new R,color:new Ze};break;case"SpotLight":t={position:new R,direction:new R,color:new Ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new R,color:new Ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new R,skyColor:new Ze,groundColor:new Ze};break;case"RectAreaLight":t={color:new Ze,position:new R,halfWidth:new R,halfHeight:new R};break}return n[e.id]=t,t}}}function Qw(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let eE=0;function tE(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function nE(n,e){const t=new Kw,i=Qw(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let c=0;c<9;c++)r.probe.push(new R);const s=new R,o=new ct,a=new ct;function l(c,f){let h=0,m=0,x=0;for(let V=0;V<9;V++)r.probe[V].set(0,0,0);let d=0,p=0,g=0,_=0,v=0,S=0,M=0,T=0,A=0,y=0;c.sort(tE);const C=f!==!0?Math.PI:1;for(let V=0,oe=c.length;V<oe;V++){const k=c[V],N=k.color,X=k.intensity,K=k.distance,Q=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)h+=N.r*X*C,m+=N.g*X*C,x+=N.b*X*C;else if(k.isLightProbe)for(let D=0;D<9;D++)r.probe[D].addScaledVector(k.sh.coefficients[D],X);else if(k.isDirectionalLight){const D=t.get(k);if(D.color.copy(k.color).multiplyScalar(k.intensity*C),k.castShadow){const W=k.shadow,G=i.get(k);G.shadowBias=W.bias,G.shadowNormalBias=W.normalBias,G.shadowRadius=W.radius,G.shadowMapSize=W.mapSize,r.directionalShadow[d]=G,r.directionalShadowMap[d]=Q,r.directionalShadowMatrix[d]=k.shadow.matrix,S++}r.directional[d]=D,d++}else if(k.isSpotLight){const D=t.get(k);D.position.setFromMatrixPosition(k.matrixWorld),D.color.copy(N).multiplyScalar(X*C),D.distance=K,D.coneCos=Math.cos(k.angle),D.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),D.decay=k.decay,r.spot[g]=D;const W=k.shadow;if(k.map&&(r.spotLightMap[A]=k.map,A++,W.updateMatrices(k),k.castShadow&&y++),r.spotLightMatrix[g]=W.matrix,k.castShadow){const G=i.get(k);G.shadowBias=W.bias,G.shadowNormalBias=W.normalBias,G.shadowRadius=W.radius,G.shadowMapSize=W.mapSize,r.spotShadow[g]=G,r.spotShadowMap[g]=Q,T++}g++}else if(k.isRectAreaLight){const D=t.get(k);D.color.copy(N).multiplyScalar(X),D.halfWidth.set(k.width*.5,0,0),D.halfHeight.set(0,k.height*.5,0),r.rectArea[_]=D,_++}else if(k.isPointLight){const D=t.get(k);if(D.color.copy(k.color).multiplyScalar(k.intensity*C),D.distance=k.distance,D.decay=k.decay,k.castShadow){const W=k.shadow,G=i.get(k);G.shadowBias=W.bias,G.shadowNormalBias=W.normalBias,G.shadowRadius=W.radius,G.shadowMapSize=W.mapSize,G.shadowCameraNear=W.camera.near,G.shadowCameraFar=W.camera.far,r.pointShadow[p]=G,r.pointShadowMap[p]=Q,r.pointShadowMatrix[p]=k.shadow.matrix,M++}r.point[p]=D,p++}else if(k.isHemisphereLight){const D=t.get(k);D.skyColor.copy(k.color).multiplyScalar(X*C),D.groundColor.copy(k.groundColor).multiplyScalar(X*C),r.hemi[v]=D,v++}}_>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=he.LTC_FLOAT_1,r.rectAreaLTC2=he.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=he.LTC_HALF_1,r.rectAreaLTC2=he.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=m,r.ambient[2]=x;const P=r.hash;(P.directionalLength!==d||P.pointLength!==p||P.spotLength!==g||P.rectAreaLength!==_||P.hemiLength!==v||P.numDirectionalShadows!==S||P.numPointShadows!==M||P.numSpotShadows!==T||P.numSpotMaps!==A)&&(r.directional.length=d,r.spot.length=g,r.rectArea.length=_,r.point.length=p,r.hemi.length=v,r.directionalShadow.length=S,r.directionalShadowMap.length=S,r.pointShadow.length=M,r.pointShadowMap.length=M,r.spotShadow.length=T,r.spotShadowMap.length=T,r.directionalShadowMatrix.length=S,r.pointShadowMatrix.length=M,r.spotLightMatrix.length=T+A-y,r.spotLightMap.length=A,r.numSpotLightShadowsWithMaps=y,P.directionalLength=d,P.pointLength=p,P.spotLength=g,P.rectAreaLength=_,P.hemiLength=v,P.numDirectionalShadows=S,P.numPointShadows=M,P.numSpotShadows=T,P.numSpotMaps=A,r.version=eE++)}function u(c,f){let h=0,m=0,x=0,d=0,p=0;const g=f.matrixWorldInverse;for(let _=0,v=c.length;_<v;_++){const S=c[_];if(S.isDirectionalLight){const M=r.directional[h];M.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(g),h++}else if(S.isSpotLight){const M=r.spot[x];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(g),M.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(g),x++}else if(S.isRectAreaLight){const M=r.rectArea[d];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(g),a.identity(),o.copy(S.matrixWorld),o.premultiply(g),a.extractRotation(o),M.halfWidth.set(S.width*.5,0,0),M.halfHeight.set(0,S.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),d++}else if(S.isPointLight){const M=r.point[m];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(g),m++}else if(S.isHemisphereLight){const M=r.hemi[p];M.direction.setFromMatrixPosition(S.matrixWorld),M.direction.transformDirection(g),p++}}}return{setup:l,setupView:u,state:r}}function Ap(n,e){const t=new nE(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(f){i.push(f)}function a(f){r.push(f)}function l(f){t.setup(i,f)}function u(f){t.setupView(i,f)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a}}function iE(n,e){let t=new WeakMap;function i(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new Ap(n,e),t.set(s,[l])):o>=a.length?(l=new Ap(n,e),a.push(l)):l=a[o],l}function r(){t=new WeakMap}return{get:i,dispose:r}}class rE extends Oo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ey,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class sE extends Oo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new R,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const oE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,aE=`uniform sampler2D shadow_pass;
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
}`;function lE(n,e,t){let i=new eh;const r=new ue,s=new ue,o=new it,a=new rE({depthPacking:ty}),l=new sE,u={},c=t.maxTextureSize,f={0:xn,1:ar,2:Jf},h=new hr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ue},radius:{value:4}},vertexShader:oE,fragmentShader:aE}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const x=new Gn;x.setAttribute("position",new Vn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const d=new vn(x,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=qg,this.render=function(S,M,T){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||S.length===0)return;const A=n.getRenderTarget(),y=n.getActiveCubeFace(),C=n.getActiveMipmapLevel(),P=n.state;P.setBlending(Li),P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);for(let V=0,oe=S.length;V<oe;V++){const k=S[V],N=k.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",k,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;r.copy(N.mapSize);const X=N.getFrameExtents();if(r.multiply(X),s.copy(N.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/X.x),r.x=s.x*X.x,N.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/X.y),r.y=s.y*X.y,N.mapSize.y=s.y)),N.map===null){const Q=this.type!==Gs?{minFilter:Ut,magFilter:Ut}:{};N.map=new cr(r.x,r.y,Q),N.map.texture.name=k.name+".shadowMap",N.camera.updateProjectionMatrix()}n.setRenderTarget(N.map),n.clear();const K=N.getViewportCount();for(let Q=0;Q<K;Q++){const D=N.getViewport(Q);o.set(s.x*D.x,s.y*D.y,s.x*D.z,s.y*D.w),P.viewport(o),N.updateMatrices(k,Q),i=N.getFrustum(),v(M,T,N.camera,k,this.type)}N.isPointLightShadow!==!0&&this.type===Gs&&g(N,T),N.needsUpdate=!1}p.needsUpdate=!1,n.setRenderTarget(A,y,C)};function g(S,M){const T=e.update(d);h.defines.VSM_SAMPLES!==S.blurSamples&&(h.defines.VSM_SAMPLES=S.blurSamples,m.defines.VSM_SAMPLES=S.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new cr(r.x,r.y)),h.uniforms.shadow_pass.value=S.map.texture,h.uniforms.resolution.value=S.mapSize,h.uniforms.radius.value=S.radius,n.setRenderTarget(S.mapPass),n.clear(),n.renderBufferDirect(M,null,T,h,d,null),m.uniforms.shadow_pass.value=S.mapPass.texture,m.uniforms.resolution.value=S.mapSize,m.uniforms.radius.value=S.radius,n.setRenderTarget(S.map),n.clear(),n.renderBufferDirect(M,null,T,m,d,null)}function _(S,M,T,A,y,C){let P=null;const V=T.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(V!==void 0)P=V;else if(P=T.isPointLight===!0?l:a,n.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0){const oe=P.uuid,k=M.uuid;let N=u[oe];N===void 0&&(N={},u[oe]=N);let X=N[k];X===void 0&&(X=P.clone(),N[k]=X),P=X}return P.visible=M.visible,P.wireframe=M.wireframe,C===Gs?P.side=M.shadowSide!==null?M.shadowSide:M.side:P.side=M.shadowSide!==null?M.shadowSide:f[M.side],P.alphaMap=M.alphaMap,P.alphaTest=M.alphaTest,P.map=M.map,P.clipShadows=M.clipShadows,P.clippingPlanes=M.clippingPlanes,P.clipIntersection=M.clipIntersection,P.displacementMap=M.displacementMap,P.displacementScale=M.displacementScale,P.displacementBias=M.displacementBias,P.wireframeLinewidth=M.wireframeLinewidth,P.linewidth=M.linewidth,T.isPointLight===!0&&P.isMeshDistanceMaterial===!0&&(P.referencePosition.setFromMatrixPosition(T.matrixWorld),P.nearDistance=A,P.farDistance=y),P}function v(S,M,T,A,y){if(S.visible===!1)return;if(S.layers.test(M.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&y===Gs)&&(!S.frustumCulled||i.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,S.matrixWorld);const V=e.update(S),oe=S.material;if(Array.isArray(oe)){const k=V.groups;for(let N=0,X=k.length;N<X;N++){const K=k[N],Q=oe[K.materialIndex];if(Q&&Q.visible){const D=_(S,Q,A,T.near,T.far,y);n.renderBufferDirect(T,null,V,D,S,K)}}}else if(oe.visible){const k=_(S,oe,A,T.near,T.far,y);n.renderBufferDirect(T,null,V,k,S,null)}}const P=S.children;for(let V=0,oe=P.length;V<oe;V++)v(P[V],M,T,A,y)}}function uE(n,e,t){const i=t.isWebGL2;function r(){let I=!1;const q=new it;let se=null;const ve=new it(0,0,0,0);return{setMask:function(Ee){se!==Ee&&!I&&(n.colorMask(Ee,Ee,Ee,Ee),se=Ee)},setLocked:function(Ee){I=Ee},setClear:function(Ee,Xe,yt,Lt,ki){ki===!0&&(Ee*=Lt,Xe*=Lt,yt*=Lt),q.set(Ee,Xe,yt,Lt),ve.equals(q)===!1&&(n.clearColor(Ee,Xe,yt,Lt),ve.copy(q))},reset:function(){I=!1,se=null,ve.set(-1,0,0,0)}}}function s(){let I=!1,q=null,se=null,ve=null;return{setTest:function(Ee){Ee?Ae(2929):ye(2929)},setMask:function(Ee){q!==Ee&&!I&&(n.depthMask(Ee),q=Ee)},setFunc:function(Ee){if(se!==Ee){switch(Ee){case Ex:n.depthFunc(512);break;case Tx:n.depthFunc(519);break;case bx:n.depthFunc(513);break;case Wc:n.depthFunc(515);break;case Cx:n.depthFunc(514);break;case Ax:n.depthFunc(518);break;case Lx:n.depthFunc(516);break;case Px:n.depthFunc(517);break;default:n.depthFunc(515)}se=Ee}},setLocked:function(Ee){I=Ee},setClear:function(Ee){ve!==Ee&&(n.clearDepth(Ee),ve=Ee)},reset:function(){I=!1,q=null,se=null,ve=null}}}function o(){let I=!1,q=null,se=null,ve=null,Ee=null,Xe=null,yt=null,Lt=null,ki=null;return{setTest:function(tt){I||(tt?Ae(2960):ye(2960))},setMask:function(tt){q!==tt&&!I&&(n.stencilMask(tt),q=tt)},setFunc:function(tt,Wn,fn){(se!==tt||ve!==Wn||Ee!==fn)&&(n.stencilFunc(tt,Wn,fn),se=tt,ve=Wn,Ee=fn)},setOp:function(tt,Wn,fn){(Xe!==tt||yt!==Wn||Lt!==fn)&&(n.stencilOp(tt,Wn,fn),Xe=tt,yt=Wn,Lt=fn)},setLocked:function(tt){I=tt},setClear:function(tt){ki!==tt&&(n.clearStencil(tt),ki=tt)},reset:function(){I=!1,q=null,se=null,ve=null,Ee=null,Xe=null,yt=null,Lt=null,ki=null}}}const a=new r,l=new s,u=new o,c=new WeakMap,f=new WeakMap;let h={},m={},x=new WeakMap,d=[],p=null,g=!1,_=null,v=null,S=null,M=null,T=null,A=null,y=null,C=!1,P=null,V=null,oe=null,k=null,N=null;const X=n.getParameter(35661);let K=!1,Q=0;const D=n.getParameter(7938);D.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(D)[1]),K=Q>=1):D.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(D)[1]),K=Q>=2);let W=null,G={};const O=n.getParameter(3088),B=n.getParameter(2978),te=new it().fromArray(O),ne=new it().fromArray(B);function ce(I,q,se){const ve=new Uint8Array(4),Ee=n.createTexture();n.bindTexture(I,Ee),n.texParameteri(I,10241,9728),n.texParameteri(I,10240,9728);for(let Xe=0;Xe<se;Xe++)n.texImage2D(q+Xe,0,6408,1,1,0,6408,5121,ve);return Ee}const j={};j[3553]=ce(3553,3553,1),j[34067]=ce(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),u.setClear(0),Ae(2929),l.setFunc(Wc),fe(!1),Re(yd),Ae(2884),le(Li);function Ae(I){h[I]!==!0&&(n.enable(I),h[I]=!0)}function ye(I){h[I]!==!1&&(n.disable(I),h[I]=!1)}function Le(I,q){return m[I]!==q?(n.bindFramebuffer(I,q),m[I]=q,i&&(I===36009&&(m[36160]=q),I===36160&&(m[36009]=q)),!0):!1}function de(I,q){let se=d,ve=!1;if(I)if(se=x.get(q),se===void 0&&(se=[],x.set(q,se)),I.isWebGLMultipleRenderTargets){const Ee=I.texture;if(se.length!==Ee.length||se[0]!==36064){for(let Xe=0,yt=Ee.length;Xe<yt;Xe++)se[Xe]=36064+Xe;se.length=Ee.length,ve=!0}}else se[0]!==36064&&(se[0]=36064,ve=!0);else se[0]!==1029&&(se[0]=1029,ve=!0);ve&&(t.isWebGL2?n.drawBuffers(se):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(se))}function Ie(I){return p!==I?(n.useProgram(I),p=I,!0):!1}const J={[kr]:32774,[dx]:32778,[px]:32779};if(i)J[Ed]=32775,J[Td]=32776;else{const I=e.get("EXT_blend_minmax");I!==null&&(J[Ed]=I.MIN_EXT,J[Td]=I.MAX_EXT)}const Z={[mx]:0,[gx]:1,[vx]:768,[Yg]:770,[wx]:776,[Sx]:774,[xx]:772,[_x]:769,[$g]:771,[Mx]:775,[yx]:773};function le(I,q,se,ve,Ee,Xe,yt,Lt){if(I===Li){g===!0&&(ye(3042),g=!1);return}if(g===!1&&(Ae(3042),g=!0),I!==hx){if(I!==_||Lt!==C){if((v!==kr||T!==kr)&&(n.blendEquation(32774),v=kr,T=kr),Lt)switch(I){case ns:n.blendFuncSeparate(1,771,1,771);break;case Sd:n.blendFunc(1,1);break;case Md:n.blendFuncSeparate(0,769,0,1);break;case wd:n.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case ns:n.blendFuncSeparate(770,771,1,771);break;case Sd:n.blendFunc(770,1);break;case Md:n.blendFuncSeparate(0,769,0,1);break;case wd:n.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}S=null,M=null,A=null,y=null,_=I,C=Lt}return}Ee=Ee||q,Xe=Xe||se,yt=yt||ve,(q!==v||Ee!==T)&&(n.blendEquationSeparate(J[q],J[Ee]),v=q,T=Ee),(se!==S||ve!==M||Xe!==A||yt!==y)&&(n.blendFuncSeparate(Z[se],Z[ve],Z[Xe],Z[yt]),S=se,M=ve,A=Xe,y=yt),_=I,C=!1}function Se(I,q){I.side===Jf?ye(2884):Ae(2884);let se=I.side===xn;q&&(se=!se),fe(se),I.blending===ns&&I.transparent===!1?le(Li):le(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.premultipliedAlpha),l.setFunc(I.depthFunc),l.setTest(I.depthTest),l.setMask(I.depthWrite),a.setMask(I.colorWrite);const ve=I.stencilWrite;u.setTest(ve),ve&&(u.setMask(I.stencilWriteMask),u.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),u.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Te(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?Ae(32926):ye(32926)}function fe(I){P!==I&&(I?n.frontFace(2304):n.frontFace(2305),P=I)}function Re(I){I!==ux?(Ae(2884),I!==V&&(I===yd?n.cullFace(1029):I===cx?n.cullFace(1028):n.cullFace(1032))):ye(2884),V=I}function be(I){I!==oe&&(K&&n.lineWidth(I),oe=I)}function Te(I,q,se){I?(Ae(32823),(k!==q||N!==se)&&(n.polygonOffset(q,se),k=q,N=se)):ye(32823)}function Ye(I){I?Ae(3089):ye(3089)}function We(I){I===void 0&&(I=33984+X-1),W!==I&&(n.activeTexture(I),W=I)}function b(I,q,se){se===void 0&&(W===null?se=33984+X-1:se=W);let ve=G[se];ve===void 0&&(ve={type:void 0,texture:void 0},G[se]=ve),(ve.type!==I||ve.texture!==q)&&(W!==se&&(n.activeTexture(se),W=se),n.bindTexture(I,q||j[I]),ve.type=I,ve.texture=q)}function w(){const I=G[W];I!==void 0&&I.type!==void 0&&(n.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function H(){try{n.compressedTexImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function re(){try{n.compressedTexImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ae(){try{n.texSubImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function pe(){try{n.texSubImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Pe(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function L(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function z(){try{n.texStorage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function me(){try{n.texStorage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function xe(){try{n.texImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ge(){try{n.texImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function we(I){te.equals(I)===!1&&(n.scissor(I.x,I.y,I.z,I.w),te.copy(I))}function Me(I){ne.equals(I)===!1&&(n.viewport(I.x,I.y,I.z,I.w),ne.copy(I))}function Oe(I,q){let se=f.get(q);se===void 0&&(se=new WeakMap,f.set(q,se));let ve=se.get(I);ve===void 0&&(ve=n.getUniformBlockIndex(q,I.name),se.set(I,ve))}function Ue(I,q){const ve=f.get(q).get(I);c.get(q)!==ve&&(n.uniformBlockBinding(q,ve,I.__bindingPointIndex),c.set(q,ve))}function $e(){n.disable(3042),n.disable(2884),n.disable(2929),n.disable(32823),n.disable(3089),n.disable(2960),n.disable(32926),n.blendEquation(32774),n.blendFunc(1,0),n.blendFuncSeparate(1,0,1,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(513),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(519,0,4294967295),n.stencilOp(7680,7680,7680),n.clearStencil(0),n.cullFace(1029),n.frontFace(2305),n.polygonOffset(0,0),n.activeTexture(33984),n.bindFramebuffer(36160,null),i===!0&&(n.bindFramebuffer(36009,null),n.bindFramebuffer(36008,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},W=null,G={},m={},x=new WeakMap,d=[],p=null,g=!1,_=null,v=null,S=null,M=null,T=null,A=null,y=null,C=!1,P=null,V=null,oe=null,k=null,N=null,te.set(0,0,n.canvas.width,n.canvas.height),ne.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),u.reset()}return{buffers:{color:a,depth:l,stencil:u},enable:Ae,disable:ye,bindFramebuffer:Le,drawBuffers:de,useProgram:Ie,setBlending:le,setMaterial:Se,setFlipSided:fe,setCullFace:Re,setLineWidth:be,setPolygonOffset:Te,setScissorTest:Ye,activeTexture:We,bindTexture:b,unbindTexture:w,compressedTexImage2D:H,compressedTexImage3D:re,texImage2D:xe,texImage3D:ge,updateUBOMapping:Oe,uniformBlockBinding:Ue,texStorage2D:z,texStorage3D:me,texSubImage2D:ae,texSubImage3D:pe,compressedTexSubImage2D:Pe,compressedTexSubImage3D:L,scissor:we,viewport:Me,reset:$e}}function cE(n,e,t,i,r,s,o){const a=r.isWebGL2,l=r.maxTextures,u=r.maxCubemapSize,c=r.maxTextureSize,f=r.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),x=new WeakMap;let d;const p=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(b,w){return g?new OffscreenCanvas(b,w):To("canvas")}function v(b,w,H,re){let ae=1;if((b.width>re||b.height>re)&&(ae=re/Math.max(b.width,b.height)),ae<1||w===!0)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap){const pe=w?hl:Math.floor,Pe=pe(ae*b.width),L=pe(ae*b.height);d===void 0&&(d=_(Pe,L));const z=H?_(Pe,L):d;return z.width=Pe,z.height=L,z.getContext("2d").drawImage(b,0,0,Pe,L),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+b.width+"x"+b.height+") to ("+Pe+"x"+L+")."),z}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+b.width+"x"+b.height+")."),b;return b}function S(b){return Zc(b.width)&&Zc(b.height)}function M(b){return a?!1:b.wrapS!==Ln||b.wrapT!==Ln||b.minFilter!==Ut&&b.minFilter!==mn}function T(b,w){return b.generateMipmaps&&w&&b.minFilter!==Ut&&b.minFilter!==mn}function A(b){n.generateMipmap(b)}function y(b,w,H,re,ae=!1){if(a===!1)return w;if(b!==null){if(n[b]!==void 0)return n[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let pe=w;return w===6403&&(H===5126&&(pe=33326),H===5131&&(pe=33325),H===5121&&(pe=33321)),w===33319&&(H===5126&&(pe=33328),H===5131&&(pe=33327),H===5121&&(pe=33323)),w===6408&&(H===5126&&(pe=34836),H===5131&&(pe=34842),H===5121&&(pe=re===Qe&&ae===!1?35907:32856),H===32819&&(pe=32854),H===32820&&(pe=32855)),(pe===33325||pe===33326||pe===33327||pe===33328||pe===34842||pe===34836)&&e.get("EXT_color_buffer_float"),pe}function C(b,w,H){return T(b,H)===!0||b.isFramebufferTexture&&b.minFilter!==Ut&&b.minFilter!==mn?Math.log2(Math.max(w.width,w.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?w.mipmaps.length:1}function P(b){return b===Ut||b===bd||b===hu?9728:9729}function V(b){const w=b.target;w.removeEventListener("dispose",V),k(w),w.isVideoTexture&&x.delete(w)}function oe(b){const w=b.target;w.removeEventListener("dispose",oe),X(w)}function k(b){const w=i.get(b);if(w.__webglInit===void 0)return;const H=b.source,re=p.get(H);if(re){const ae=re[w.__cacheKey];ae.usedTimes--,ae.usedTimes===0&&N(b),Object.keys(re).length===0&&p.delete(H)}i.remove(b)}function N(b){const w=i.get(b);n.deleteTexture(w.__webglTexture);const H=b.source,re=p.get(H);delete re[w.__cacheKey],o.memory.textures--}function X(b){const w=b.texture,H=i.get(b),re=i.get(w);if(re.__webglTexture!==void 0&&(n.deleteTexture(re.__webglTexture),o.memory.textures--),b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let ae=0;ae<6;ae++)n.deleteFramebuffer(H.__webglFramebuffer[ae]),H.__webglDepthbuffer&&n.deleteRenderbuffer(H.__webglDepthbuffer[ae]);else{if(n.deleteFramebuffer(H.__webglFramebuffer),H.__webglDepthbuffer&&n.deleteRenderbuffer(H.__webglDepthbuffer),H.__webglMultisampledFramebuffer&&n.deleteFramebuffer(H.__webglMultisampledFramebuffer),H.__webglColorRenderbuffer)for(let ae=0;ae<H.__webglColorRenderbuffer.length;ae++)H.__webglColorRenderbuffer[ae]&&n.deleteRenderbuffer(H.__webglColorRenderbuffer[ae]);H.__webglDepthRenderbuffer&&n.deleteRenderbuffer(H.__webglDepthRenderbuffer)}if(b.isWebGLMultipleRenderTargets)for(let ae=0,pe=w.length;ae<pe;ae++){const Pe=i.get(w[ae]);Pe.__webglTexture&&(n.deleteTexture(Pe.__webglTexture),o.memory.textures--),i.remove(w[ae])}i.remove(w),i.remove(b)}let K=0;function Q(){K=0}function D(){const b=K;return b>=l&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+l),K+=1,b}function W(b){const w=[];return w.push(b.wrapS),w.push(b.wrapT),w.push(b.wrapR||0),w.push(b.magFilter),w.push(b.minFilter),w.push(b.anisotropy),w.push(b.internalFormat),w.push(b.format),w.push(b.type),w.push(b.generateMipmaps),w.push(b.premultiplyAlpha),w.push(b.flipY),w.push(b.unpackAlignment),w.push(b.encoding),w.join()}function G(b,w){const H=i.get(b);if(b.isVideoTexture&&Ye(b),b.isRenderTargetTexture===!1&&b.version>0&&H.__version!==b.version){const re=b.image;if(re===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(re.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ye(H,b,w);return}}t.bindTexture(3553,H.__webglTexture,33984+w)}function O(b,w){const H=i.get(b);if(b.version>0&&H.__version!==b.version){ye(H,b,w);return}t.bindTexture(35866,H.__webglTexture,33984+w)}function B(b,w){const H=i.get(b);if(b.version>0&&H.__version!==b.version){ye(H,b,w);return}t.bindTexture(32879,H.__webglTexture,33984+w)}function te(b,w){const H=i.get(b);if(b.version>0&&H.__version!==b.version){Le(H,b,w);return}t.bindTexture(34067,H.__webglTexture,33984+w)}const ne={[qc]:10497,[Ln]:33071,[Yc]:33648},ce={[Ut]:9728,[bd]:9984,[hu]:9986,[mn]:9729,[Ox]:9985,[Mo]:9987};function j(b,w,H){if(H?(n.texParameteri(b,10242,ne[w.wrapS]),n.texParameteri(b,10243,ne[w.wrapT]),(b===32879||b===35866)&&n.texParameteri(b,32882,ne[w.wrapR]),n.texParameteri(b,10240,ce[w.magFilter]),n.texParameteri(b,10241,ce[w.minFilter])):(n.texParameteri(b,10242,33071),n.texParameteri(b,10243,33071),(b===32879||b===35866)&&n.texParameteri(b,32882,33071),(w.wrapS!==Ln||w.wrapT!==Ln)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(b,10240,P(w.magFilter)),n.texParameteri(b,10241,P(w.minFilter)),w.minFilter!==Ut&&w.minFilter!==mn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const re=e.get("EXT_texture_filter_anisotropic");if(w.magFilter===Ut||w.minFilter!==hu&&w.minFilter!==Mo||w.type===Ji&&e.has("OES_texture_float_linear")===!1||a===!1&&w.type===wo&&e.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||i.get(w).__currentAnisotropy)&&(n.texParameterf(b,re.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,r.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy)}}function Ae(b,w){let H=!1;b.__webglInit===void 0&&(b.__webglInit=!0,w.addEventListener("dispose",V));const re=w.source;let ae=p.get(re);ae===void 0&&(ae={},p.set(re,ae));const pe=W(w);if(pe!==b.__cacheKey){ae[pe]===void 0&&(ae[pe]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,H=!0),ae[pe].usedTimes++;const Pe=ae[b.__cacheKey];Pe!==void 0&&(ae[b.__cacheKey].usedTimes--,Pe.usedTimes===0&&N(w)),b.__cacheKey=pe,b.__webglTexture=ae[pe].texture}return H}function ye(b,w,H){let re=3553;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(re=35866),w.isData3DTexture&&(re=32879);const ae=Ae(b,w),pe=w.source;t.bindTexture(re,b.__webglTexture,33984+H);const Pe=i.get(pe);if(pe.version!==Pe.__version||ae===!0){t.activeTexture(33984+H),n.pixelStorei(37440,w.flipY),n.pixelStorei(37441,w.premultiplyAlpha),n.pixelStorei(3317,w.unpackAlignment),n.pixelStorei(37443,0);const L=M(w)&&S(w.image)===!1;let z=v(w.image,L,!1,c);z=We(w,z);const me=S(z)||a,xe=s.convert(w.format,w.encoding);let ge=s.convert(w.type),we=y(w.internalFormat,xe,ge,w.encoding,w.isVideoTexture);j(re,w,me);let Me;const Oe=w.mipmaps,Ue=a&&w.isVideoTexture!==!0,$e=Pe.__version===void 0||ae===!0,I=C(w,z,me);if(w.isDepthTexture)we=6402,a?w.type===Ji?we=36012:w.type===Zi?we=33190:w.type===is?we=35056:we=33189:w.type===Ji&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===er&&we===6402&&w.type!==Kg&&w.type!==Zi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=Zi,ge=s.convert(w.type)),w.format===ms&&we===6402&&(we=34041,w.type!==is&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=is,ge=s.convert(w.type))),$e&&(Ue?t.texStorage2D(3553,1,we,z.width,z.height):t.texImage2D(3553,0,we,z.width,z.height,0,xe,ge,null));else if(w.isDataTexture)if(Oe.length>0&&me){Ue&&$e&&t.texStorage2D(3553,I,we,Oe[0].width,Oe[0].height);for(let q=0,se=Oe.length;q<se;q++)Me=Oe[q],Ue?t.texSubImage2D(3553,q,0,0,Me.width,Me.height,xe,ge,Me.data):t.texImage2D(3553,q,we,Me.width,Me.height,0,xe,ge,Me.data);w.generateMipmaps=!1}else Ue?($e&&t.texStorage2D(3553,I,we,z.width,z.height),t.texSubImage2D(3553,0,0,0,z.width,z.height,xe,ge,z.data)):t.texImage2D(3553,0,we,z.width,z.height,0,xe,ge,z.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Ue&&$e&&t.texStorage3D(35866,I,we,Oe[0].width,Oe[0].height,z.depth);for(let q=0,se=Oe.length;q<se;q++)Me=Oe[q],w.format!==Pn?xe!==null?Ue?t.compressedTexSubImage3D(35866,q,0,0,0,Me.width,Me.height,z.depth,xe,Me.data,0,0):t.compressedTexImage3D(35866,q,we,Me.width,Me.height,z.depth,0,Me.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ue?t.texSubImage3D(35866,q,0,0,0,Me.width,Me.height,z.depth,xe,ge,Me.data):t.texImage3D(35866,q,we,Me.width,Me.height,z.depth,0,xe,ge,Me.data)}else{Ue&&$e&&t.texStorage2D(3553,I,we,Oe[0].width,Oe[0].height);for(let q=0,se=Oe.length;q<se;q++)Me=Oe[q],w.format!==Pn?xe!==null?Ue?t.compressedTexSubImage2D(3553,q,0,0,Me.width,Me.height,xe,Me.data):t.compressedTexImage2D(3553,q,we,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ue?t.texSubImage2D(3553,q,0,0,Me.width,Me.height,xe,ge,Me.data):t.texImage2D(3553,q,we,Me.width,Me.height,0,xe,ge,Me.data)}else if(w.isDataArrayTexture)Ue?($e&&t.texStorage3D(35866,I,we,z.width,z.height,z.depth),t.texSubImage3D(35866,0,0,0,0,z.width,z.height,z.depth,xe,ge,z.data)):t.texImage3D(35866,0,we,z.width,z.height,z.depth,0,xe,ge,z.data);else if(w.isData3DTexture)Ue?($e&&t.texStorage3D(32879,I,we,z.width,z.height,z.depth),t.texSubImage3D(32879,0,0,0,0,z.width,z.height,z.depth,xe,ge,z.data)):t.texImage3D(32879,0,we,z.width,z.height,z.depth,0,xe,ge,z.data);else if(w.isFramebufferTexture){if($e)if(Ue)t.texStorage2D(3553,I,we,z.width,z.height);else{let q=z.width,se=z.height;for(let ve=0;ve<I;ve++)t.texImage2D(3553,ve,we,q,se,0,xe,ge,null),q>>=1,se>>=1}}else if(Oe.length>0&&me){Ue&&$e&&t.texStorage2D(3553,I,we,Oe[0].width,Oe[0].height);for(let q=0,se=Oe.length;q<se;q++)Me=Oe[q],Ue?t.texSubImage2D(3553,q,0,0,xe,ge,Me):t.texImage2D(3553,q,we,xe,ge,Me);w.generateMipmaps=!1}else Ue?($e&&t.texStorage2D(3553,I,we,z.width,z.height),t.texSubImage2D(3553,0,0,0,xe,ge,z)):t.texImage2D(3553,0,we,xe,ge,z);T(w,me)&&A(re),Pe.__version=pe.version,w.onUpdate&&w.onUpdate(w)}b.__version=w.version}function Le(b,w,H){if(w.image.length!==6)return;const re=Ae(b,w),ae=w.source;t.bindTexture(34067,b.__webglTexture,33984+H);const pe=i.get(ae);if(ae.version!==pe.__version||re===!0){t.activeTexture(33984+H),n.pixelStorei(37440,w.flipY),n.pixelStorei(37441,w.premultiplyAlpha),n.pixelStorei(3317,w.unpackAlignment),n.pixelStorei(37443,0);const Pe=w.isCompressedTexture||w.image[0].isCompressedTexture,L=w.image[0]&&w.image[0].isDataTexture,z=[];for(let q=0;q<6;q++)!Pe&&!L?z[q]=v(w.image[q],!1,!0,u):z[q]=L?w.image[q].image:w.image[q],z[q]=We(w,z[q]);const me=z[0],xe=S(me)||a,ge=s.convert(w.format,w.encoding),we=s.convert(w.type),Me=y(w.internalFormat,ge,we,w.encoding),Oe=a&&w.isVideoTexture!==!0,Ue=pe.__version===void 0||re===!0;let $e=C(w,me,xe);j(34067,w,xe);let I;if(Pe){Oe&&Ue&&t.texStorage2D(34067,$e,Me,me.width,me.height);for(let q=0;q<6;q++){I=z[q].mipmaps;for(let se=0;se<I.length;se++){const ve=I[se];w.format!==Pn?ge!==null?Oe?t.compressedTexSubImage2D(34069+q,se,0,0,ve.width,ve.height,ge,ve.data):t.compressedTexImage2D(34069+q,se,Me,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Oe?t.texSubImage2D(34069+q,se,0,0,ve.width,ve.height,ge,we,ve.data):t.texImage2D(34069+q,se,Me,ve.width,ve.height,0,ge,we,ve.data)}}}else{I=w.mipmaps,Oe&&Ue&&(I.length>0&&$e++,t.texStorage2D(34067,$e,Me,z[0].width,z[0].height));for(let q=0;q<6;q++)if(L){Oe?t.texSubImage2D(34069+q,0,0,0,z[q].width,z[q].height,ge,we,z[q].data):t.texImage2D(34069+q,0,Me,z[q].width,z[q].height,0,ge,we,z[q].data);for(let se=0;se<I.length;se++){const Ee=I[se].image[q].image;Oe?t.texSubImage2D(34069+q,se+1,0,0,Ee.width,Ee.height,ge,we,Ee.data):t.texImage2D(34069+q,se+1,Me,Ee.width,Ee.height,0,ge,we,Ee.data)}}else{Oe?t.texSubImage2D(34069+q,0,0,0,ge,we,z[q]):t.texImage2D(34069+q,0,Me,ge,we,z[q]);for(let se=0;se<I.length;se++){const ve=I[se];Oe?t.texSubImage2D(34069+q,se+1,0,0,ge,we,ve.image[q]):t.texImage2D(34069+q,se+1,Me,ge,we,ve.image[q])}}}T(w,xe)&&A(34067),pe.__version=ae.version,w.onUpdate&&w.onUpdate(w)}b.__version=w.version}function de(b,w,H,re,ae){const pe=s.convert(H.format,H.encoding),Pe=s.convert(H.type),L=y(H.internalFormat,pe,Pe,H.encoding);i.get(w).__hasExternalTextures||(ae===32879||ae===35866?t.texImage3D(ae,0,L,w.width,w.height,w.depth,0,pe,Pe,null):t.texImage2D(ae,0,L,w.width,w.height,0,pe,Pe,null)),t.bindFramebuffer(36160,b),Te(w)?h.framebufferTexture2DMultisampleEXT(36160,re,ae,i.get(H).__webglTexture,0,be(w)):(ae===3553||ae>=34069&&ae<=34074)&&n.framebufferTexture2D(36160,re,ae,i.get(H).__webglTexture,0),t.bindFramebuffer(36160,null)}function Ie(b,w,H){if(n.bindRenderbuffer(36161,b),w.depthBuffer&&!w.stencilBuffer){let re=33189;if(H||Te(w)){const ae=w.depthTexture;ae&&ae.isDepthTexture&&(ae.type===Ji?re=36012:ae.type===Zi&&(re=33190));const pe=be(w);Te(w)?h.renderbufferStorageMultisampleEXT(36161,pe,re,w.width,w.height):n.renderbufferStorageMultisample(36161,pe,re,w.width,w.height)}else n.renderbufferStorage(36161,re,w.width,w.height);n.framebufferRenderbuffer(36160,36096,36161,b)}else if(w.depthBuffer&&w.stencilBuffer){const re=be(w);H&&Te(w)===!1?n.renderbufferStorageMultisample(36161,re,35056,w.width,w.height):Te(w)?h.renderbufferStorageMultisampleEXT(36161,re,35056,w.width,w.height):n.renderbufferStorage(36161,34041,w.width,w.height),n.framebufferRenderbuffer(36160,33306,36161,b)}else{const re=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let ae=0;ae<re.length;ae++){const pe=re[ae],Pe=s.convert(pe.format,pe.encoding),L=s.convert(pe.type),z=y(pe.internalFormat,Pe,L,pe.encoding),me=be(w);H&&Te(w)===!1?n.renderbufferStorageMultisample(36161,me,z,w.width,w.height):Te(w)?h.renderbufferStorageMultisampleEXT(36161,me,z,w.width,w.height):n.renderbufferStorage(36161,z,w.width,w.height)}}n.bindRenderbuffer(36161,null)}function J(b,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,b),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),G(w.depthTexture,0);const re=i.get(w.depthTexture).__webglTexture,ae=be(w);if(w.depthTexture.format===er)Te(w)?h.framebufferTexture2DMultisampleEXT(36160,36096,3553,re,0,ae):n.framebufferTexture2D(36160,36096,3553,re,0);else if(w.depthTexture.format===ms)Te(w)?h.framebufferTexture2DMultisampleEXT(36160,33306,3553,re,0,ae):n.framebufferTexture2D(36160,33306,3553,re,0);else throw new Error("Unknown depthTexture format")}function Z(b){const w=i.get(b),H=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!w.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");J(w.__webglFramebuffer,b)}else if(H){w.__webglDepthbuffer=[];for(let re=0;re<6;re++)t.bindFramebuffer(36160,w.__webglFramebuffer[re]),w.__webglDepthbuffer[re]=n.createRenderbuffer(),Ie(w.__webglDepthbuffer[re],b,!1)}else t.bindFramebuffer(36160,w.__webglFramebuffer),w.__webglDepthbuffer=n.createRenderbuffer(),Ie(w.__webglDepthbuffer,b,!1);t.bindFramebuffer(36160,null)}function le(b,w,H){const re=i.get(b);w!==void 0&&de(re.__webglFramebuffer,b,b.texture,36064,3553),H!==void 0&&Z(b)}function Se(b){const w=b.texture,H=i.get(b),re=i.get(w);b.addEventListener("dispose",oe),b.isWebGLMultipleRenderTargets!==!0&&(re.__webglTexture===void 0&&(re.__webglTexture=n.createTexture()),re.__version=w.version,o.memory.textures++);const ae=b.isWebGLCubeRenderTarget===!0,pe=b.isWebGLMultipleRenderTargets===!0,Pe=S(b)||a;if(ae){H.__webglFramebuffer=[];for(let L=0;L<6;L++)H.__webglFramebuffer[L]=n.createFramebuffer()}else{if(H.__webglFramebuffer=n.createFramebuffer(),pe)if(r.drawBuffers){const L=b.texture;for(let z=0,me=L.length;z<me;z++){const xe=i.get(L[z]);xe.__webglTexture===void 0&&(xe.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&b.samples>0&&Te(b)===!1){const L=pe?w:[w];H.__webglMultisampledFramebuffer=n.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,H.__webglMultisampledFramebuffer);for(let z=0;z<L.length;z++){const me=L[z];H.__webglColorRenderbuffer[z]=n.createRenderbuffer(),n.bindRenderbuffer(36161,H.__webglColorRenderbuffer[z]);const xe=s.convert(me.format,me.encoding),ge=s.convert(me.type),we=y(me.internalFormat,xe,ge,me.encoding,b.isXRRenderTarget===!0),Me=be(b);n.renderbufferStorageMultisample(36161,Me,we,b.width,b.height),n.framebufferRenderbuffer(36160,36064+z,36161,H.__webglColorRenderbuffer[z])}n.bindRenderbuffer(36161,null),b.depthBuffer&&(H.__webglDepthRenderbuffer=n.createRenderbuffer(),Ie(H.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(36160,null)}}if(ae){t.bindTexture(34067,re.__webglTexture),j(34067,w,Pe);for(let L=0;L<6;L++)de(H.__webglFramebuffer[L],b,w,36064,34069+L);T(w,Pe)&&A(34067),t.unbindTexture()}else if(pe){const L=b.texture;for(let z=0,me=L.length;z<me;z++){const xe=L[z],ge=i.get(xe);t.bindTexture(3553,ge.__webglTexture),j(3553,xe,Pe),de(H.__webglFramebuffer,b,xe,36064+z,3553),T(xe,Pe)&&A(3553)}t.unbindTexture()}else{let L=3553;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(a?L=b.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(L,re.__webglTexture),j(L,w,Pe),de(H.__webglFramebuffer,b,w,36064,L),T(w,Pe)&&A(L),t.unbindTexture()}b.depthBuffer&&Z(b)}function fe(b){const w=S(b)||a,H=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let re=0,ae=H.length;re<ae;re++){const pe=H[re];if(T(pe,w)){const Pe=b.isWebGLCubeRenderTarget?34067:3553,L=i.get(pe).__webglTexture;t.bindTexture(Pe,L),A(Pe),t.unbindTexture()}}}function Re(b){if(a&&b.samples>0&&Te(b)===!1){const w=b.isWebGLMultipleRenderTargets?b.texture:[b.texture],H=b.width,re=b.height;let ae=16384;const pe=[],Pe=b.stencilBuffer?33306:36096,L=i.get(b),z=b.isWebGLMultipleRenderTargets===!0;if(z)for(let me=0;me<w.length;me++)t.bindFramebuffer(36160,L.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064+me,36161,null),t.bindFramebuffer(36160,L.__webglFramebuffer),n.framebufferTexture2D(36009,36064+me,3553,null,0);t.bindFramebuffer(36008,L.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,L.__webglFramebuffer);for(let me=0;me<w.length;me++){pe.push(36064+me),b.depthBuffer&&pe.push(Pe);const xe=L.__ignoreDepthValues!==void 0?L.__ignoreDepthValues:!1;if(xe===!1&&(b.depthBuffer&&(ae|=256),b.stencilBuffer&&(ae|=1024)),z&&n.framebufferRenderbuffer(36008,36064,36161,L.__webglColorRenderbuffer[me]),xe===!0&&(n.invalidateFramebuffer(36008,[Pe]),n.invalidateFramebuffer(36009,[Pe])),z){const ge=i.get(w[me]).__webglTexture;n.framebufferTexture2D(36009,36064,3553,ge,0)}n.blitFramebuffer(0,0,H,re,0,0,H,re,ae,9728),m&&n.invalidateFramebuffer(36008,pe)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),z)for(let me=0;me<w.length;me++){t.bindFramebuffer(36160,L.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064+me,36161,L.__webglColorRenderbuffer[me]);const xe=i.get(w[me]).__webglTexture;t.bindFramebuffer(36160,L.__webglFramebuffer),n.framebufferTexture2D(36009,36064+me,3553,xe,0)}t.bindFramebuffer(36009,L.__webglMultisampledFramebuffer)}}function be(b){return Math.min(f,b.samples)}function Te(b){const w=i.get(b);return a&&b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Ye(b){const w=o.render.frame;x.get(b)!==w&&(x.set(b,w),b.update())}function We(b,w){const H=b.encoding,re=b.format,ae=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||b.format===$c||H!==ur&&(H===Qe?a===!1?e.has("EXT_sRGB")===!0&&re===Pn?(b.format=$c,b.minFilter=mn,b.generateMipmaps=!1):w=n0.sRGBToLinear(w):(re!==Pn||ae!==lr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",H)),w}this.allocateTextureUnit=D,this.resetTextureUnits=Q,this.setTexture2D=G,this.setTexture2DArray=O,this.setTexture3D=B,this.setTextureCube=te,this.rebindTextures=le,this.setupRenderTarget=Se,this.updateRenderTargetMipmap=fe,this.updateMultisampleRenderTarget=Re,this.setupDepthRenderbuffer=Z,this.setupFrameBufferTexture=de,this.useMultisampledRTT=Te}function fE(n,e,t){const i=t.isWebGL2;function r(s,o=null){let a;if(s===lr)return 5121;if(s===Gx)return 32819;if(s===Hx)return 32820;if(s===Ux)return 5120;if(s===Bx)return 5122;if(s===Kg)return 5123;if(s===Vx)return 5124;if(s===Zi)return 5125;if(s===Ji)return 5126;if(s===wo)return i?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Wx)return 6406;if(s===Pn)return 6408;if(s===Xx)return 6409;if(s===qx)return 6410;if(s===er)return 6402;if(s===ms)return 34041;if(s===jx)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(s===$c)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===Yx)return 6403;if(s===$x)return 36244;if(s===Zx)return 33319;if(s===Jx)return 33320;if(s===Kx)return 36249;if(s===du||s===pu||s===mu||s===gu)if(o===Qe)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===du)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===pu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===mu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===gu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===du)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===pu)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===mu)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===gu)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Cd||s===Ad||s===Ld||s===Pd)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Cd)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Ad)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Ld)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Pd)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Qx)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Rd||s===Dd)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Rd)return o===Qe?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Dd)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Id||s===Nd||s===kd||s===zd||s===Fd||s===Od||s===Ud||s===Bd||s===Vd||s===Gd||s===Hd||s===Wd||s===jd||s===Xd)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Id)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Nd)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===kd)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===zd)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Fd)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Od)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Ud)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Bd)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Vd)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Gd)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Hd)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Wd)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===jd)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Xd)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===qd)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===qd)return o===Qe?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return s===is?i?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class hE extends rn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ma extends Jt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const dE={type:"move"};class Vu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ma,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ma,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ma,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const d of e.hand.values()){const p=t.getJointPose(d,i),g=this._getHandJoint(u,d);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.jointRadius=p.radius),g.visible=p!==null}const c=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],h=c.position.distanceTo(f.position),m=.02,x=.005;u.inputState.pinching&&h>m+x?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&h<=m-x&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(dE)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Ma;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class pE extends Zt{constructor(e,t,i,r,s,o,a,l,u,c){if(c=c!==void 0?c:er,c!==er&&c!==ms)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===er&&(i=Zi),i===void 0&&c===ms&&(i=is),super(null,r,s,o,a,l,c,i,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Ut,this.minFilter=l!==void 0?l:Ut,this.flipY=!1,this.generateMipmaps=!1}}class mE extends gr{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=null,u=null,c=null,f=null,h=null,m=null;const x=t.getContextAttributes();let d=null,p=null;const g=[],_=[],v=new Set,S=new Map,M=new rn;M.layers.enable(1),M.viewport=new it;const T=new rn;T.layers.enable(2),T.viewport=new it;const A=[M,T],y=new hE;y.layers.enable(1),y.layers.enable(2);let C=null,P=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(O){let B=g[O];return B===void 0&&(B=new Vu,g[O]=B),B.getTargetRaySpace()},this.getControllerGrip=function(O){let B=g[O];return B===void 0&&(B=new Vu,g[O]=B),B.getGripSpace()},this.getHand=function(O){let B=g[O];return B===void 0&&(B=new Vu,g[O]=B),B.getHandSpace()};function V(O){const B=_.indexOf(O.inputSource);if(B===-1)return;const te=g[B];te!==void 0&&te.dispatchEvent({type:O.type,data:O.inputSource})}function oe(){r.removeEventListener("select",V),r.removeEventListener("selectstart",V),r.removeEventListener("selectend",V),r.removeEventListener("squeeze",V),r.removeEventListener("squeezestart",V),r.removeEventListener("squeezeend",V),r.removeEventListener("end",oe),r.removeEventListener("inputsourceschange",k);for(let O=0;O<g.length;O++){const B=_[O];B!==null&&(_[O]=null,g[O].disconnect(B))}C=null,P=null,e.setRenderTarget(d),h=null,f=null,c=null,r=null,p=null,G.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(O){s=O,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(O){a=O,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(O){l=O},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return c},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(O){if(r=O,r!==null){if(d=e.getRenderTarget(),r.addEventListener("select",V),r.addEventListener("selectstart",V),r.addEventListener("selectend",V),r.addEventListener("squeeze",V),r.addEventListener("squeezestart",V),r.addEventListener("squeezeend",V),r.addEventListener("end",oe),r.addEventListener("inputsourceschange",k),x.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const B={antialias:r.renderState.layers===void 0?x.antialias:!0,alpha:x.alpha,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(r,t,B),r.updateRenderState({baseLayer:h}),p=new cr(h.framebufferWidth,h.framebufferHeight,{format:Pn,type:lr,encoding:e.outputEncoding,stencilBuffer:x.stencil})}else{let B=null,te=null,ne=null;x.depth&&(ne=x.stencil?35056:33190,B=x.stencil?ms:er,te=x.stencil?is:Zi);const ce={colorFormat:32856,depthFormat:ne,scaleFactor:s};c=new XRWebGLBinding(r,t),f=c.createProjectionLayer(ce),r.updateRenderState({layers:[f]}),p=new cr(f.textureWidth,f.textureHeight,{format:Pn,type:lr,depthTexture:new pE(f.textureWidth,f.textureHeight,te,void 0,void 0,void 0,void 0,void 0,void 0,B),stencilBuffer:x.stencil,encoding:e.outputEncoding,samples:x.antialias?4:0});const j=e.properties.get(p);j.__ignoreDepthValues=f.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(1),l=null,o=await r.requestReferenceSpace(a),G.setContext(r),G.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}};function k(O){for(let B=0;B<O.removed.length;B++){const te=O.removed[B],ne=_.indexOf(te);ne>=0&&(_[ne]=null,g[ne].disconnect(te))}for(let B=0;B<O.added.length;B++){const te=O.added[B];let ne=_.indexOf(te);if(ne===-1){for(let j=0;j<g.length;j++)if(j>=_.length){_.push(te),ne=j;break}else if(_[j]===null){_[j]=te,ne=j;break}if(ne===-1)break}const ce=g[ne];ce&&ce.connect(te)}}const N=new R,X=new R;function K(O,B,te){N.setFromMatrixPosition(B.matrixWorld),X.setFromMatrixPosition(te.matrixWorld);const ne=N.distanceTo(X),ce=B.projectionMatrix.elements,j=te.projectionMatrix.elements,Ae=ce[14]/(ce[10]-1),ye=ce[14]/(ce[10]+1),Le=(ce[9]+1)/ce[5],de=(ce[9]-1)/ce[5],Ie=(ce[8]-1)/ce[0],J=(j[8]+1)/j[0],Z=Ae*Ie,le=Ae*J,Se=ne/(-Ie+J),fe=Se*-Ie;B.matrixWorld.decompose(O.position,O.quaternion,O.scale),O.translateX(fe),O.translateZ(Se),O.matrixWorld.compose(O.position,O.quaternion,O.scale),O.matrixWorldInverse.copy(O.matrixWorld).invert();const Re=Ae+Se,be=ye+Se,Te=Z-fe,Ye=le+(ne-fe),We=Le*ye/be*Re,b=de*ye/be*Re;O.projectionMatrix.makePerspective(Te,Ye,We,b,Re,be)}function Q(O,B){B===null?O.matrixWorld.copy(O.matrix):O.matrixWorld.multiplyMatrices(B.matrixWorld,O.matrix),O.matrixWorldInverse.copy(O.matrixWorld).invert()}this.updateCamera=function(O){if(r===null)return;y.near=T.near=M.near=O.near,y.far=T.far=M.far=O.far,(C!==y.near||P!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),C=y.near,P=y.far);const B=O.parent,te=y.cameras;Q(y,B);for(let ce=0;ce<te.length;ce++)Q(te[ce],B);y.matrixWorld.decompose(y.position,y.quaternion,y.scale),O.matrix.copy(y.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale);const ne=O.children;for(let ce=0,j=ne.length;ce<j;ce++)ne[ce].updateMatrixWorld(!0);te.length===2?K(y,M,T):y.projectionMatrix.copy(M.projectionMatrix)},this.getCamera=function(){return y},this.getFoveation=function(){if(f!==null)return f.fixedFoveation;if(h!==null)return h.fixedFoveation},this.setFoveation=function(O){f!==null&&(f.fixedFoveation=O),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=O)},this.getPlanes=function(){return v};let D=null;function W(O,B){if(u=B.getViewerPose(l||o),m=B,u!==null){const te=u.views;h!==null&&(e.setRenderTargetFramebuffer(p,h.framebuffer),e.setRenderTarget(p));let ne=!1;te.length!==y.cameras.length&&(y.cameras.length=0,ne=!0);for(let ce=0;ce<te.length;ce++){const j=te[ce];let Ae=null;if(h!==null)Ae=h.getViewport(j);else{const Le=c.getViewSubImage(f,j);Ae=Le.viewport,ce===0&&(e.setRenderTargetTextures(p,Le.colorTexture,f.ignoreDepthValues?void 0:Le.depthStencilTexture),e.setRenderTarget(p))}let ye=A[ce];ye===void 0&&(ye=new rn,ye.layers.enable(ce),ye.viewport=new it,A[ce]=ye),ye.matrix.fromArray(j.transform.matrix),ye.projectionMatrix.fromArray(j.projectionMatrix),ye.viewport.set(Ae.x,Ae.y,Ae.width,Ae.height),ce===0&&y.matrix.copy(ye.matrix),ne===!0&&y.cameras.push(ye)}}for(let te=0;te<g.length;te++){const ne=_[te],ce=g[te];ne!==null&&ce!==void 0&&ce.update(ne,B,l||o)}if(D&&D(O,B),B.detectedPlanes){i.dispatchEvent({type:"planesdetected",data:B.detectedPlanes});let te=null;for(const ne of v)B.detectedPlanes.has(ne)||(te===null&&(te=[]),te.push(ne));if(te!==null)for(const ne of te)v.delete(ne),S.delete(ne),i.dispatchEvent({type:"planeremoved",data:ne});for(const ne of B.detectedPlanes)if(!v.has(ne))v.add(ne),S.set(ne,B.lastChangedTime),i.dispatchEvent({type:"planeadded",data:ne});else{const ce=S.get(ne);ne.lastChangedTime>ce&&(S.set(ne,ne.lastChangedTime),i.dispatchEvent({type:"planechanged",data:ne}))}}m=null}const G=new f0;G.setAnimationLoop(W),this.setAnimationLoop=function(O){D=O},this.dispose=function(){}}}function gE(n,e){function t(d,p){p.color.getRGB(d.fogColor.value,l0(n)),p.isFog?(d.fogNear.value=p.near,d.fogFar.value=p.far):p.isFogExp2&&(d.fogDensity.value=p.density)}function i(d,p,g,_,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(d,p):p.isMeshToonMaterial?(r(d,p),c(d,p)):p.isMeshPhongMaterial?(r(d,p),u(d,p)):p.isMeshStandardMaterial?(r(d,p),f(d,p),p.isMeshPhysicalMaterial&&h(d,p,v)):p.isMeshMatcapMaterial?(r(d,p),m(d,p)):p.isMeshDepthMaterial?r(d,p):p.isMeshDistanceMaterial?(r(d,p),x(d,p)):p.isMeshNormalMaterial?r(d,p):p.isLineBasicMaterial?(s(d,p),p.isLineDashedMaterial&&o(d,p)):p.isPointsMaterial?a(d,p,g,_):p.isSpriteMaterial?l(d,p):p.isShadowMaterial?(d.color.value.copy(p.color),d.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(d,p){d.opacity.value=p.opacity,p.color&&d.diffuse.value.copy(p.color),p.emissive&&d.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(d.map.value=p.map),p.alphaMap&&(d.alphaMap.value=p.alphaMap),p.bumpMap&&(d.bumpMap.value=p.bumpMap,d.bumpScale.value=p.bumpScale,p.side===xn&&(d.bumpScale.value*=-1)),p.displacementMap&&(d.displacementMap.value=p.displacementMap,d.displacementScale.value=p.displacementScale,d.displacementBias.value=p.displacementBias),p.emissiveMap&&(d.emissiveMap.value=p.emissiveMap),p.normalMap&&(d.normalMap.value=p.normalMap,d.normalScale.value.copy(p.normalScale),p.side===xn&&d.normalScale.value.negate()),p.specularMap&&(d.specularMap.value=p.specularMap),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest);const g=e.get(p).envMap;if(g&&(d.envMap.value=g,d.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=p.reflectivity,d.ior.value=p.ior,d.refractionRatio.value=p.refractionRatio),p.lightMap){d.lightMap.value=p.lightMap;const S=n.physicallyCorrectLights!==!0?Math.PI:1;d.lightMapIntensity.value=p.lightMapIntensity*S}p.aoMap&&(d.aoMap.value=p.aoMap,d.aoMapIntensity.value=p.aoMapIntensity);let _;p.map?_=p.map:p.specularMap?_=p.specularMap:p.displacementMap?_=p.displacementMap:p.normalMap?_=p.normalMap:p.bumpMap?_=p.bumpMap:p.roughnessMap?_=p.roughnessMap:p.metalnessMap?_=p.metalnessMap:p.alphaMap?_=p.alphaMap:p.emissiveMap?_=p.emissiveMap:p.clearcoatMap?_=p.clearcoatMap:p.clearcoatNormalMap?_=p.clearcoatNormalMap:p.clearcoatRoughnessMap?_=p.clearcoatRoughnessMap:p.iridescenceMap?_=p.iridescenceMap:p.iridescenceThicknessMap?_=p.iridescenceThicknessMap:p.specularIntensityMap?_=p.specularIntensityMap:p.specularColorMap?_=p.specularColorMap:p.transmissionMap?_=p.transmissionMap:p.thicknessMap?_=p.thicknessMap:p.sheenColorMap?_=p.sheenColorMap:p.sheenRoughnessMap&&(_=p.sheenRoughnessMap),_!==void 0&&(_.isWebGLRenderTarget&&(_=_.texture),_.matrixAutoUpdate===!0&&_.updateMatrix(),d.uvTransform.value.copy(_.matrix));let v;p.aoMap?v=p.aoMap:p.lightMap&&(v=p.lightMap),v!==void 0&&(v.isWebGLRenderTarget&&(v=v.texture),v.matrixAutoUpdate===!0&&v.updateMatrix(),d.uv2Transform.value.copy(v.matrix))}function s(d,p){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity}function o(d,p){d.dashSize.value=p.dashSize,d.totalSize.value=p.dashSize+p.gapSize,d.scale.value=p.scale}function a(d,p,g,_){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.size.value=p.size*g,d.scale.value=_*.5,p.map&&(d.map.value=p.map),p.alphaMap&&(d.alphaMap.value=p.alphaMap),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest);let v;p.map?v=p.map:p.alphaMap&&(v=p.alphaMap),v!==void 0&&(v.matrixAutoUpdate===!0&&v.updateMatrix(),d.uvTransform.value.copy(v.matrix))}function l(d,p){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.rotation.value=p.rotation,p.map&&(d.map.value=p.map),p.alphaMap&&(d.alphaMap.value=p.alphaMap),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest);let g;p.map?g=p.map:p.alphaMap&&(g=p.alphaMap),g!==void 0&&(g.matrixAutoUpdate===!0&&g.updateMatrix(),d.uvTransform.value.copy(g.matrix))}function u(d,p){d.specular.value.copy(p.specular),d.shininess.value=Math.max(p.shininess,1e-4)}function c(d,p){p.gradientMap&&(d.gradientMap.value=p.gradientMap)}function f(d,p){d.roughness.value=p.roughness,d.metalness.value=p.metalness,p.roughnessMap&&(d.roughnessMap.value=p.roughnessMap),p.metalnessMap&&(d.metalnessMap.value=p.metalnessMap),e.get(p).envMap&&(d.envMapIntensity.value=p.envMapIntensity)}function h(d,p,g){d.ior.value=p.ior,p.sheen>0&&(d.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),d.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(d.sheenColorMap.value=p.sheenColorMap),p.sheenRoughnessMap&&(d.sheenRoughnessMap.value=p.sheenRoughnessMap)),p.clearcoat>0&&(d.clearcoat.value=p.clearcoat,d.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(d.clearcoatMap.value=p.clearcoatMap),p.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap),p.clearcoatNormalMap&&(d.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),d.clearcoatNormalMap.value=p.clearcoatNormalMap,p.side===xn&&d.clearcoatNormalScale.value.negate())),p.iridescence>0&&(d.iridescence.value=p.iridescence,d.iridescenceIOR.value=p.iridescenceIOR,d.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(d.iridescenceMap.value=p.iridescenceMap),p.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=p.iridescenceThicknessMap)),p.transmission>0&&(d.transmission.value=p.transmission,d.transmissionSamplerMap.value=g.texture,d.transmissionSamplerSize.value.set(g.width,g.height),p.transmissionMap&&(d.transmissionMap.value=p.transmissionMap),d.thickness.value=p.thickness,p.thicknessMap&&(d.thicknessMap.value=p.thicknessMap),d.attenuationDistance.value=p.attenuationDistance,d.attenuationColor.value.copy(p.attenuationColor)),d.specularIntensity.value=p.specularIntensity,d.specularColor.value.copy(p.specularColor),p.specularIntensityMap&&(d.specularIntensityMap.value=p.specularIntensityMap),p.specularColorMap&&(d.specularColorMap.value=p.specularColorMap)}function m(d,p){p.matcap&&(d.matcap.value=p.matcap)}function x(d,p){d.referencePosition.value.copy(p.referencePosition),d.nearDistance.value=p.nearDistance,d.farDistance.value=p.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:i}}function vE(n,e,t,i){let r={},s={},o=[];const a=t.isWebGL2?n.getParameter(35375):0;function l(_,v){const S=v.program;i.uniformBlockBinding(_,S)}function u(_,v){let S=r[_.id];S===void 0&&(x(_),S=c(_),r[_.id]=S,_.addEventListener("dispose",p));const M=v.program;i.updateUBOMapping(_,M);const T=e.render.frame;s[_.id]!==T&&(h(_),s[_.id]=T)}function c(_){const v=f();_.__bindingPointIndex=v;const S=n.createBuffer(),M=_.__size,T=_.usage;return n.bindBuffer(35345,S),n.bufferData(35345,M,T),n.bindBuffer(35345,null),n.bindBufferBase(35345,v,S),S}function f(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(_){const v=r[_.id],S=_.uniforms,M=_.__cache;n.bindBuffer(35345,v);for(let T=0,A=S.length;T<A;T++){const y=S[T];if(m(y,T,M)===!0){const C=y.__offset,P=Array.isArray(y.value)?y.value:[y.value];let V=0;for(let oe=0;oe<P.length;oe++){const k=P[oe],N=d(k);typeof k=="number"?(y.__data[0]=k,n.bufferSubData(35345,C+V,y.__data)):k.isMatrix3?(y.__data[0]=k.elements[0],y.__data[1]=k.elements[1],y.__data[2]=k.elements[2],y.__data[3]=k.elements[0],y.__data[4]=k.elements[3],y.__data[5]=k.elements[4],y.__data[6]=k.elements[5],y.__data[7]=k.elements[0],y.__data[8]=k.elements[6],y.__data[9]=k.elements[7],y.__data[10]=k.elements[8],y.__data[11]=k.elements[0]):(k.toArray(y.__data,V),V+=N.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(35345,C,y.__data)}}n.bindBuffer(35345,null)}function m(_,v,S){const M=_.value;if(S[v]===void 0){if(typeof M=="number")S[v]=M;else{const T=Array.isArray(M)?M:[M],A=[];for(let y=0;y<T.length;y++)A.push(T[y].clone());S[v]=A}return!0}else if(typeof M=="number"){if(S[v]!==M)return S[v]=M,!0}else{const T=Array.isArray(S[v])?S[v]:[S[v]],A=Array.isArray(M)?M:[M];for(let y=0;y<T.length;y++){const C=T[y];if(C.equals(A[y])===!1)return C.copy(A[y]),!0}}return!1}function x(_){const v=_.uniforms;let S=0;const M=16;let T=0;for(let A=0,y=v.length;A<y;A++){const C=v[A],P={boundary:0,storage:0},V=Array.isArray(C.value)?C.value:[C.value];for(let oe=0,k=V.length;oe<k;oe++){const N=V[oe],X=d(N);P.boundary+=X.boundary,P.storage+=X.storage}if(C.__data=new Float32Array(P.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=S,A>0){T=S%M;const oe=M-T;T!==0&&oe-P.boundary<0&&(S+=M-T,C.__offset=S)}S+=P.storage}return T=S%M,T>0&&(S+=M-T),_.__size=S,_.__cache={},this}function d(_){const v={boundary:0,storage:0};return typeof _=="number"?(v.boundary=4,v.storage=4):_.isVector2?(v.boundary=8,v.storage=8):_.isVector3||_.isColor?(v.boundary=16,v.storage=12):_.isVector4?(v.boundary=16,v.storage=16):_.isMatrix3?(v.boundary=48,v.storage=48):_.isMatrix4?(v.boundary=64,v.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),v}function p(_){const v=_.target;v.removeEventListener("dispose",p);const S=o.indexOf(v.__bindingPointIndex);o.splice(S,1),n.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function g(){for(const _ in r)n.deleteBuffer(r[_]);o=[],r={},s={}}return{bind:l,update:u,dispose:g}}function _E(){const n=To("canvas");return n.style.display="block",n}function g0(n={}){this.isWebGLRenderer=!0;const e=n.canvas!==void 0?n.canvas:_E(),t=n.context!==void 0?n.context:null,i=n.depth!==void 0?n.depth:!0,r=n.stencil!==void 0?n.stencil:!0,s=n.antialias!==void 0?n.antialias:!1,o=n.premultipliedAlpha!==void 0?n.premultipliedAlpha:!0,a=n.preserveDrawingBuffer!==void 0?n.preserveDrawingBuffer:!1,l=n.powerPreference!==void 0?n.powerPreference:"default",u=n.failIfMajorPerformanceCaveat!==void 0?n.failIfMajorPerformanceCaveat:!1;let c;t!==null?c=t.getContextAttributes().alpha:c=n.alpha!==void 0?n.alpha:!1;let f=null,h=null;const m=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=ur,this.physicallyCorrectLights=!1,this.toneMapping=ri,this.toneMappingExposure=1;const d=this;let p=!1,g=0,_=0,v=null,S=-1,M=null;const T=new it,A=new it;let y=null,C=e.width,P=e.height,V=1,oe=null,k=null;const N=new it(0,0,C,P),X=new it(0,0,C,P);let K=!1;const Q=new eh;let D=!1,W=!1,G=null;const O=new ct,B=new ue,te=new R,ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ce(){return v===null?V:1}let j=t;function Ae(E,U){for(let Y=0;Y<E.length;Y++){const F=E[Y],$=e.getContext(F,U);if($!==null)return $}return null}try{const E={alpha:!0,depth:i,stencil:r,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:l,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Zf}`),e.addEventListener("webglcontextlost",we,!1),e.addEventListener("webglcontextrestored",Me,!1),e.addEventListener("webglcontextcreationerror",Oe,!1),j===null){const U=["webgl2","webgl","experimental-webgl"];if(d.isWebGL1Renderer===!0&&U.shift(),j=Ae(U,E),j===null)throw Ae(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}j.getShaderPrecisionFormat===void 0&&(j.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let ye,Le,de,Ie,J,Z,le,Se,fe,Re,be,Te,Ye,We,b,w,H,re,ae,pe,Pe,L,z,me;function xe(){ye=new LM(j),Le=new MM(j,ye,n),ye.init(Le),L=new fE(j,ye,Le),de=new uE(j,ye,Le),Ie=new DM,J=new $w,Z=new cE(j,ye,de,J,Le,L,Ie),le=new EM(d),Se=new AM(d),fe=new By(j,Le),z=new yM(j,ye,fe,Le),Re=new PM(j,fe,Ie,z),be=new zM(j,Re,fe,Ie),ae=new kM(j,Le,Z),w=new wM(J),Te=new Yw(d,le,Se,ye,Le,z,w),Ye=new gE(d,J),We=new Jw,b=new iE(ye,Le),re=new xM(d,le,Se,de,be,c,o),H=new lE(d,be,Le),me=new vE(j,Ie,Le,de),pe=new SM(j,ye,Ie,Le),Pe=new RM(j,ye,Ie,Le),Ie.programs=Te.programs,d.capabilities=Le,d.extensions=ye,d.properties=J,d.renderLists=We,d.shadowMap=H,d.state=de,d.info=Ie}xe();const ge=new mE(d,j);this.xr=ge,this.getContext=function(){return j},this.getContextAttributes=function(){return j.getContextAttributes()},this.forceContextLoss=function(){const E=ye.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=ye.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(E){E!==void 0&&(V=E,this.setSize(C,P,!1))},this.getSize=function(E){return E.set(C,P)},this.setSize=function(E,U,Y){if(ge.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}C=E,P=U,e.width=Math.floor(E*V),e.height=Math.floor(U*V),Y!==!1&&(e.style.width=E+"px",e.style.height=U+"px"),this.setViewport(0,0,E,U)},this.getDrawingBufferSize=function(E){return E.set(C*V,P*V).floor()},this.setDrawingBufferSize=function(E,U,Y){C=E,P=U,V=Y,e.width=Math.floor(E*Y),e.height=Math.floor(U*Y),this.setViewport(0,0,E,U)},this.getCurrentViewport=function(E){return E.copy(T)},this.getViewport=function(E){return E.copy(N)},this.setViewport=function(E,U,Y,F){E.isVector4?N.set(E.x,E.y,E.z,E.w):N.set(E,U,Y,F),de.viewport(T.copy(N).multiplyScalar(V).floor())},this.getScissor=function(E){return E.copy(X)},this.setScissor=function(E,U,Y,F){E.isVector4?X.set(E.x,E.y,E.z,E.w):X.set(E,U,Y,F),de.scissor(A.copy(X).multiplyScalar(V).floor())},this.getScissorTest=function(){return K},this.setScissorTest=function(E){de.setScissorTest(K=E)},this.setOpaqueSort=function(E){oe=E},this.setTransparentSort=function(E){k=E},this.getClearColor=function(E){return E.copy(re.getClearColor())},this.setClearColor=function(){re.setClearColor.apply(re,arguments)},this.getClearAlpha=function(){return re.getClearAlpha()},this.setClearAlpha=function(){re.setClearAlpha.apply(re,arguments)},this.clear=function(E=!0,U=!0,Y=!0){let F=0;E&&(F|=16384),U&&(F|=256),Y&&(F|=1024),j.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",we,!1),e.removeEventListener("webglcontextrestored",Me,!1),e.removeEventListener("webglcontextcreationerror",Oe,!1),We.dispose(),b.dispose(),J.dispose(),le.dispose(),Se.dispose(),be.dispose(),z.dispose(),me.dispose(),Te.dispose(),ge.dispose(),ge.removeEventListener("sessionstart",ve),ge.removeEventListener("sessionend",Ee),G&&(G.dispose(),G=null),Xe.stop()};function we(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),p=!0}function Me(){console.log("THREE.WebGLRenderer: Context Restored."),p=!1;const E=Ie.autoReset,U=H.enabled,Y=H.autoUpdate,F=H.needsUpdate,$=H.type;xe(),Ie.autoReset=E,H.enabled=U,H.autoUpdate=Y,H.needsUpdate=F,H.type=$}function Oe(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Ue(E){const U=E.target;U.removeEventListener("dispose",Ue),$e(U)}function $e(E){I(E),J.remove(E)}function I(E){const U=J.get(E).programs;U!==void 0&&(U.forEach(function(Y){Te.releaseProgram(Y)}),E.isShaderMaterial&&Te.releaseShaderCache(E))}this.renderBufferDirect=function(E,U,Y,F,$,Ce){U===null&&(U=ne);const De=$.isMesh&&$.matrixWorld.determinant()<0,ke=T0(E,U,Y,F,$);de.setMaterial(F,De);let ze=Y.index,je=1;F.wireframe===!0&&(ze=Re.getWireframeAttribute(Y),je=2);const Be=Y.drawRange,Ve=Y.attributes.position;let ft=Be.start*je,Kt=(Be.start+Be.count)*je;Ce!==null&&(ft=Math.max(ft,Ce.start*je),Kt=Math.min(Kt,(Ce.start+Ce.count)*je)),ze!==null?(ft=Math.max(ft,0),Kt=Math.min(Kt,ze.count)):Ve!=null&&(ft=Math.max(ft,0),Kt=Math.min(Kt,Ve.count));const jn=Kt-ft;if(jn<0||jn===1/0)return;z.setup($,F,ke,Y,ze);let zi,ht=pe;if(ze!==null&&(zi=fe.get(ze),ht=Pe,ht.setIndex(zi)),$.isMesh)F.wireframe===!0?(de.setLineWidth(F.wireframeLinewidth*ce()),ht.setMode(1)):ht.setMode(4);else if($.isLine){let Ge=F.linewidth;Ge===void 0&&(Ge=1),de.setLineWidth(Ge*ce()),$.isLineSegments?ht.setMode(1):$.isLineLoop?ht.setMode(2):ht.setMode(3)}else $.isPoints?ht.setMode(0):$.isSprite&&ht.setMode(4);if($.isInstancedMesh)ht.renderInstances(ft,jn,$.count);else if(Y.isInstancedBufferGeometry){const Ge=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,kl=Math.min(Y.instanceCount,Ge);ht.renderInstances(ft,jn,kl)}else ht.render(ft,jn)},this.compile=function(E,U){function Y(F,$,Ce){F.transparent===!0&&F.side===ia?(F.side=xn,F.needsUpdate=!0,fn(F,$,Ce),F.side=ar,F.needsUpdate=!0,fn(F,$,Ce),F.side=ia):fn(F,$,Ce)}h=b.get(E),h.init(),x.push(h),E.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(h.pushLight(F),F.castShadow&&h.pushShadow(F))}),h.setupLights(d.physicallyCorrectLights),E.traverse(function(F){const $=F.material;if($)if(Array.isArray($))for(let Ce=0;Ce<$.length;Ce++){const De=$[Ce];Y(De,E,F)}else Y($,E,F)}),x.pop(),h=null};let q=null;function se(E){q&&q(E)}function ve(){Xe.stop()}function Ee(){Xe.start()}const Xe=new f0;Xe.setAnimationLoop(se),typeof self<"u"&&Xe.setContext(self),this.setAnimationLoop=function(E){q=E,ge.setAnimationLoop(E),E===null?Xe.stop():Xe.start()},ge.addEventListener("sessionstart",ve),ge.addEventListener("sessionend",Ee),this.render=function(E,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(p===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),ge.enabled===!0&&ge.isPresenting===!0&&(ge.cameraAutoUpdate===!0&&ge.updateCamera(U),U=ge.getCamera()),E.isScene===!0&&E.onBeforeRender(d,E,U,v),h=b.get(E,x.length),h.init(),x.push(h),O.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Q.setFromProjectionMatrix(O),W=this.localClippingEnabled,D=w.init(this.clippingPlanes,W,U),f=We.get(E,m.length),f.init(),m.push(f),yt(E,U,0,d.sortObjects),f.finish(),d.sortObjects===!0&&f.sort(oe,k),D===!0&&w.beginShadows();const Y=h.state.shadowsArray;if(H.render(Y,E,U),D===!0&&w.endShadows(),this.info.autoReset===!0&&this.info.reset(),re.render(f,E),h.setupLights(d.physicallyCorrectLights),U.isArrayCamera){const F=U.cameras;for(let $=0,Ce=F.length;$<Ce;$++){const De=F[$];Lt(f,E,De,De.viewport)}}else Lt(f,E,U);v!==null&&(Z.updateMultisampleRenderTarget(v),Z.updateRenderTargetMipmap(v)),E.isScene===!0&&E.onAfterRender(d,E,U),z.resetDefaultState(),S=-1,M=null,x.pop(),x.length>0?h=x[x.length-1]:h=null,m.pop(),m.length>0?f=m[m.length-1]:f=null};function yt(E,U,Y,F){if(E.visible===!1)return;if(E.layers.test(U.layers)){if(E.isGroup)Y=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(U);else if(E.isLight)h.pushLight(E),E.castShadow&&h.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Q.intersectsSprite(E)){F&&te.setFromMatrixPosition(E.matrixWorld).applyMatrix4(O);const De=be.update(E),ke=E.material;ke.visible&&f.push(E,De,ke,Y,te.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(E.isSkinnedMesh&&E.skeleton.frame!==Ie.render.frame&&(E.skeleton.update(),E.skeleton.frame=Ie.render.frame),!E.frustumCulled||Q.intersectsObject(E))){F&&te.setFromMatrixPosition(E.matrixWorld).applyMatrix4(O);const De=be.update(E),ke=E.material;if(Array.isArray(ke)){const ze=De.groups;for(let je=0,Be=ze.length;je<Be;je++){const Ve=ze[je],ft=ke[Ve.materialIndex];ft&&ft.visible&&f.push(E,De,ft,Y,te.z,Ve)}}else ke.visible&&f.push(E,De,ke,Y,te.z,null)}}const Ce=E.children;for(let De=0,ke=Ce.length;De<ke;De++)yt(Ce[De],U,Y,F)}function Lt(E,U,Y,F){const $=E.opaque,Ce=E.transmissive,De=E.transparent;h.setupLightsView(Y),Ce.length>0&&ki($,U,Y),F&&de.viewport(T.copy(F)),$.length>0&&tt($,U,Y),Ce.length>0&&tt(Ce,U,Y),De.length>0&&tt(De,U,Y),de.buffers.depth.setTest(!0),de.buffers.depth.setMask(!0),de.buffers.color.setMask(!0),de.setPolygonOffset(!1)}function ki(E,U,Y){const F=Le.isWebGL2;G===null&&(G=new cr(1,1,{generateMipmaps:!0,type:ye.has("EXT_color_buffer_half_float")?wo:lr,minFilter:Mo,samples:F&&s===!0?4:0})),d.getDrawingBufferSize(B),F?G.setSize(B.x,B.y):G.setSize(hl(B.x),hl(B.y));const $=d.getRenderTarget();d.setRenderTarget(G),d.clear();const Ce=d.toneMapping;d.toneMapping=ri,tt(E,U,Y),d.toneMapping=Ce,Z.updateMultisampleRenderTarget(G),Z.updateRenderTargetMipmap(G),d.setRenderTarget($)}function tt(E,U,Y){const F=U.isScene===!0?U.overrideMaterial:null;for(let $=0,Ce=E.length;$<Ce;$++){const De=E[$],ke=De.object,ze=De.geometry,je=F===null?De.material:F,Be=De.group;ke.layers.test(Y.layers)&&Wn(ke,U,Y,ze,je,Be)}}function Wn(E,U,Y,F,$,Ce){E.onBeforeRender(d,U,Y,F,$,Ce),E.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),$.onBeforeRender(d,U,Y,F,E,Ce),$.transparent===!0&&$.side===ia?($.side=xn,$.needsUpdate=!0,d.renderBufferDirect(Y,U,F,$,E,Ce),$.side=ar,$.needsUpdate=!0,d.renderBufferDirect(Y,U,F,$,E,Ce),$.side=ia):d.renderBufferDirect(Y,U,F,$,E,Ce),E.onAfterRender(d,U,Y,F,$,Ce)}function fn(E,U,Y){U.isScene!==!0&&(U=ne);const F=J.get(E),$=h.state.lights,Ce=h.state.shadowsArray,De=$.state.version,ke=Te.getParameters(E,$.state,Ce,U,Y),ze=Te.getProgramCacheKey(ke);let je=F.programs;F.environment=E.isMeshStandardMaterial?U.environment:null,F.fog=U.fog,F.envMap=(E.isMeshStandardMaterial?Se:le).get(E.envMap||F.environment),je===void 0&&(E.addEventListener("dispose",Ue),je=new Map,F.programs=je);let Be=je.get(ze);if(Be!==void 0){if(F.currentProgram===Be&&F.lightsStateVersion===De)return lh(E,ke),Be}else ke.uniforms=Te.getUniforms(E),E.onBuild(Y,ke,d),E.onBeforeCompile(ke,d),Be=Te.acquireProgram(ke,ze),je.set(ze,Be),F.uniforms=ke.uniforms;const Ve=F.uniforms;(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ve.clippingPlanes=w.uniform),lh(E,ke),F.needsLights=C0(E),F.lightsStateVersion=De,F.needsLights&&(Ve.ambientLightColor.value=$.state.ambient,Ve.lightProbe.value=$.state.probe,Ve.directionalLights.value=$.state.directional,Ve.directionalLightShadows.value=$.state.directionalShadow,Ve.spotLights.value=$.state.spot,Ve.spotLightShadows.value=$.state.spotShadow,Ve.rectAreaLights.value=$.state.rectArea,Ve.ltc_1.value=$.state.rectAreaLTC1,Ve.ltc_2.value=$.state.rectAreaLTC2,Ve.pointLights.value=$.state.point,Ve.pointLightShadows.value=$.state.pointShadow,Ve.hemisphereLights.value=$.state.hemi,Ve.directionalShadowMap.value=$.state.directionalShadowMap,Ve.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Ve.spotShadowMap.value=$.state.spotShadowMap,Ve.spotLightMatrix.value=$.state.spotLightMatrix,Ve.spotLightMap.value=$.state.spotLightMap,Ve.pointShadowMap.value=$.state.pointShadowMap,Ve.pointShadowMatrix.value=$.state.pointShadowMatrix);const ft=Be.getUniforms(),Kt=Ua.seqWithValue(ft.seq,Ve);return F.currentProgram=Be,F.uniformsList=Kt,Be}function lh(E,U){const Y=J.get(E);Y.outputEncoding=U.outputEncoding,Y.instancing=U.instancing,Y.skinning=U.skinning,Y.morphTargets=U.morphTargets,Y.morphNormals=U.morphNormals,Y.morphColors=U.morphColors,Y.morphTargetsCount=U.morphTargetsCount,Y.numClippingPlanes=U.numClippingPlanes,Y.numIntersection=U.numClipIntersection,Y.vertexAlphas=U.vertexAlphas,Y.vertexTangents=U.vertexTangents,Y.toneMapping=U.toneMapping}function T0(E,U,Y,F,$){U.isScene!==!0&&(U=ne),Z.resetTextureUnits();const Ce=U.fog,De=F.isMeshStandardMaterial?U.environment:null,ke=v===null?d.outputEncoding:v.isXRRenderTarget===!0?v.texture.encoding:ur,ze=(F.isMeshStandardMaterial?Se:le).get(F.envMap||De),je=F.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Be=!!F.normalMap&&!!Y.attributes.tangent,Ve=!!Y.morphAttributes.position,ft=!!Y.morphAttributes.normal,Kt=!!Y.morphAttributes.color,jn=F.toneMapped?d.toneMapping:ri,zi=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,ht=zi!==void 0?zi.length:0,Ge=J.get(F),kl=h.state.lights;if(D===!0&&(W===!0||E!==M)){const Qt=E===M&&F.id===S;w.setState(F,E,Qt)}let St=!1;F.version===Ge.__version?(Ge.needsLights&&Ge.lightsStateVersion!==kl.state.version||Ge.outputEncoding!==ke||$.isInstancedMesh&&Ge.instancing===!1||!$.isInstancedMesh&&Ge.instancing===!0||$.isSkinnedMesh&&Ge.skinning===!1||!$.isSkinnedMesh&&Ge.skinning===!0||Ge.envMap!==ze||F.fog===!0&&Ge.fog!==Ce||Ge.numClippingPlanes!==void 0&&(Ge.numClippingPlanes!==w.numPlanes||Ge.numIntersection!==w.numIntersection)||Ge.vertexAlphas!==je||Ge.vertexTangents!==Be||Ge.morphTargets!==Ve||Ge.morphNormals!==ft||Ge.morphColors!==Kt||Ge.toneMapping!==jn||Le.isWebGL2===!0&&Ge.morphTargetsCount!==ht)&&(St=!0):(St=!0,Ge.__version=F.version);let Fi=Ge.currentProgram;St===!0&&(Fi=fn(F,U,$));let uh=!1,Ss=!1,zl=!1;const kt=Fi.getUniforms(),Oi=Ge.uniforms;if(de.useProgram(Fi.program)&&(uh=!0,Ss=!0,zl=!0),F.id!==S&&(S=F.id,Ss=!0),uh||M!==E){if(kt.setValue(j,"projectionMatrix",E.projectionMatrix),Le.logarithmicDepthBuffer&&kt.setValue(j,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),M!==E&&(M=E,Ss=!0,zl=!0),F.isShaderMaterial||F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshStandardMaterial||F.envMap){const Qt=kt.map.cameraPosition;Qt!==void 0&&Qt.setValue(j,te.setFromMatrixPosition(E.matrixWorld))}(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&kt.setValue(j,"isOrthographic",E.isOrthographicCamera===!0),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial||F.isShadowMaterial||$.isSkinnedMesh)&&kt.setValue(j,"viewMatrix",E.matrixWorldInverse)}if($.isSkinnedMesh){kt.setOptional(j,$,"bindMatrix"),kt.setOptional(j,$,"bindMatrixInverse");const Qt=$.skeleton;Qt&&(Le.floatVertexTextures?(Qt.boneTexture===null&&Qt.computeBoneTexture(),kt.setValue(j,"boneTexture",Qt.boneTexture,Z),kt.setValue(j,"boneTextureSize",Qt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Fl=Y.morphAttributes;if((Fl.position!==void 0||Fl.normal!==void 0||Fl.color!==void 0&&Le.isWebGL2===!0)&&ae.update($,Y,F,Fi),(Ss||Ge.receiveShadow!==$.receiveShadow)&&(Ge.receiveShadow=$.receiveShadow,kt.setValue(j,"receiveShadow",$.receiveShadow)),F.isMeshGouraudMaterial&&F.envMap!==null&&(Oi.envMap.value=ze,Oi.flipEnvMap.value=ze.isCubeTexture&&ze.isRenderTargetTexture===!1?-1:1),Ss&&(kt.setValue(j,"toneMappingExposure",d.toneMappingExposure),Ge.needsLights&&b0(Oi,zl),Ce&&F.fog===!0&&Ye.refreshFogUniforms(Oi,Ce),Ye.refreshMaterialUniforms(Oi,F,V,P,G),Ua.upload(j,Ge.uniformsList,Oi,Z)),F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&(Ua.upload(j,Ge.uniformsList,Oi,Z),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&kt.setValue(j,"center",$.center),kt.setValue(j,"modelViewMatrix",$.modelViewMatrix),kt.setValue(j,"normalMatrix",$.normalMatrix),kt.setValue(j,"modelMatrix",$.matrixWorld),F.isShaderMaterial||F.isRawShaderMaterial){const Qt=F.uniformsGroups;for(let Ol=0,A0=Qt.length;Ol<A0;Ol++)if(Le.isWebGL2){const ch=Qt[Ol];me.update(ch,Fi),me.bind(ch,Fi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Fi}function b0(E,U){E.ambientLightColor.needsUpdate=U,E.lightProbe.needsUpdate=U,E.directionalLights.needsUpdate=U,E.directionalLightShadows.needsUpdate=U,E.pointLights.needsUpdate=U,E.pointLightShadows.needsUpdate=U,E.spotLights.needsUpdate=U,E.spotLightShadows.needsUpdate=U,E.rectAreaLights.needsUpdate=U,E.hemisphereLights.needsUpdate=U}function C0(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return g},this.getActiveMipmapLevel=function(){return _},this.getRenderTarget=function(){return v},this.setRenderTargetTextures=function(E,U,Y){J.get(E.texture).__webglTexture=U,J.get(E.depthTexture).__webglTexture=Y;const F=J.get(E);F.__hasExternalTextures=!0,F.__hasExternalTextures&&(F.__autoAllocateDepthBuffer=Y===void 0,F.__autoAllocateDepthBuffer||ye.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),F.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,U){const Y=J.get(E);Y.__webglFramebuffer=U,Y.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(E,U=0,Y=0){v=E,g=U,_=Y;let F=!0,$=null,Ce=!1,De=!1;if(E){const ze=J.get(E);ze.__useDefaultFramebuffer!==void 0?(de.bindFramebuffer(36160,null),F=!1):ze.__webglFramebuffer===void 0?Z.setupRenderTarget(E):ze.__hasExternalTextures&&Z.rebindTextures(E,J.get(E.texture).__webglTexture,J.get(E.depthTexture).__webglTexture);const je=E.texture;(je.isData3DTexture||je.isDataArrayTexture||je.isCompressedArrayTexture)&&(De=!0);const Be=J.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?($=Be[U],Ce=!0):Le.isWebGL2&&E.samples>0&&Z.useMultisampledRTT(E)===!1?$=J.get(E).__webglMultisampledFramebuffer:$=Be,T.copy(E.viewport),A.copy(E.scissor),y=E.scissorTest}else T.copy(N).multiplyScalar(V).floor(),A.copy(X).multiplyScalar(V).floor(),y=K;if(de.bindFramebuffer(36160,$)&&Le.drawBuffers&&F&&de.drawBuffers(E,$),de.viewport(T),de.scissor(A),de.setScissorTest(y),Ce){const ze=J.get(E.texture);j.framebufferTexture2D(36160,36064,34069+U,ze.__webglTexture,Y)}else if(De){const ze=J.get(E.texture),je=U||0;j.framebufferTextureLayer(36160,36064,ze.__webglTexture,Y||0,je)}S=-1},this.readRenderTargetPixels=function(E,U,Y,F,$,Ce,De){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ke=J.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&De!==void 0&&(ke=ke[De]),ke){de.bindFramebuffer(36160,ke);try{const ze=E.texture,je=ze.format,Be=ze.type;if(je!==Pn&&L.convert(je)!==j.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ve=Be===wo&&(ye.has("EXT_color_buffer_half_float")||Le.isWebGL2&&ye.has("EXT_color_buffer_float"));if(Be!==lr&&L.convert(Be)!==j.getParameter(35738)&&!(Be===Ji&&(Le.isWebGL2||ye.has("OES_texture_float")||ye.has("WEBGL_color_buffer_float")))&&!Ve){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=E.width-F&&Y>=0&&Y<=E.height-$&&j.readPixels(U,Y,F,$,L.convert(je),L.convert(Be),Ce)}finally{const ze=v!==null?J.get(v).__webglFramebuffer:null;de.bindFramebuffer(36160,ze)}}},this.copyFramebufferToTexture=function(E,U,Y=0){const F=Math.pow(2,-Y),$=Math.floor(U.image.width*F),Ce=Math.floor(U.image.height*F);Z.setTexture2D(U,0),j.copyTexSubImage2D(3553,Y,0,0,E.x,E.y,$,Ce),de.unbindTexture()},this.copyTextureToTexture=function(E,U,Y,F=0){const $=U.image.width,Ce=U.image.height,De=L.convert(Y.format),ke=L.convert(Y.type);Z.setTexture2D(Y,0),j.pixelStorei(37440,Y.flipY),j.pixelStorei(37441,Y.premultiplyAlpha),j.pixelStorei(3317,Y.unpackAlignment),U.isDataTexture?j.texSubImage2D(3553,F,E.x,E.y,$,Ce,De,ke,U.image.data):U.isCompressedTexture?j.compressedTexSubImage2D(3553,F,E.x,E.y,U.mipmaps[0].width,U.mipmaps[0].height,De,U.mipmaps[0].data):j.texSubImage2D(3553,F,E.x,E.y,De,ke,U.image),F===0&&Y.generateMipmaps&&j.generateMipmap(3553),de.unbindTexture()},this.copyTextureToTexture3D=function(E,U,Y,F,$=0){if(d.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ce=E.max.x-E.min.x+1,De=E.max.y-E.min.y+1,ke=E.max.z-E.min.z+1,ze=L.convert(F.format),je=L.convert(F.type);let Be;if(F.isData3DTexture)Z.setTexture3D(F,0),Be=32879;else if(F.isDataArrayTexture)Z.setTexture2DArray(F,0),Be=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}j.pixelStorei(37440,F.flipY),j.pixelStorei(37441,F.premultiplyAlpha),j.pixelStorei(3317,F.unpackAlignment);const Ve=j.getParameter(3314),ft=j.getParameter(32878),Kt=j.getParameter(3316),jn=j.getParameter(3315),zi=j.getParameter(32877),ht=Y.isCompressedTexture?Y.mipmaps[0]:Y.image;j.pixelStorei(3314,ht.width),j.pixelStorei(32878,ht.height),j.pixelStorei(3316,E.min.x),j.pixelStorei(3315,E.min.y),j.pixelStorei(32877,E.min.z),Y.isDataTexture||Y.isData3DTexture?j.texSubImage3D(Be,$,U.x,U.y,U.z,Ce,De,ke,ze,je,ht.data):Y.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),j.compressedTexSubImage3D(Be,$,U.x,U.y,U.z,Ce,De,ke,ze,ht.data)):j.texSubImage3D(Be,$,U.x,U.y,U.z,Ce,De,ke,ze,je,ht),j.pixelStorei(3314,Ve),j.pixelStorei(32878,ft),j.pixelStorei(3316,Kt),j.pixelStorei(3315,jn),j.pixelStorei(32877,zi),$===0&&F.generateMipmaps&&j.generateMipmap(Be),de.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?Z.setTextureCube(E,0):E.isData3DTexture?Z.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Z.setTexture2DArray(E,0):Z.setTexture2D(E,0),de.unbindTexture()},this.resetState=function(){g=0,_=0,v=null,de.reset(),z.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class xE extends g0{}xE.prototype.isWebGL1Renderer=!0;class yE extends Jt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class Hn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),t.push(s),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const i=this.getLengths();let r=0;const s=i.length;let o;t?o=t:o=e*i[s-1];let a=0,l=s-1,u;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),u=i[r]-o,u<0)a=r+1;else if(u>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);const c=i[r],h=i[r+1]-c,m=(o-c)/h;return(r+m)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=t||(o.isVector2?new ue:new R);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){const i=new R,r=[],s=[],o=[],a=new R,l=new ct;for(let m=0;m<=e;m++){const x=m/e;r[m]=this.getTangentAt(x,new R)}s[0]=new R,o[0]=new R;let u=Number.MAX_VALUE;const c=Math.abs(r[0].x),f=Math.abs(r[0].y),h=Math.abs(r[0].z);c<=u&&(u=c,i.set(1,0,0)),f<=u&&(u=f,i.set(0,1,0)),h<=u&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let m=1;m<=e;m++){if(s[m]=s[m-1].clone(),o[m]=o[m-1].clone(),a.crossVectors(r[m-1],r[m]),a.length()>Number.EPSILON){a.normalize();const x=Math.acos(bt(r[m-1].dot(r[m]),-1,1));s[m].applyMatrix4(l.makeRotationAxis(a,x))}o[m].crossVectors(r[m],s[m])}if(t===!0){let m=Math.acos(bt(s[0].dot(s[e]),-1,1));m/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(m=-m);for(let x=1;x<=e;x++)s[x].applyMatrix4(l.makeRotationAxis(r[x],m*x)),o[x].crossVectors(r[x],s[x])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class ih extends Hn{constructor(e=0,t=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t){const i=t||new ue,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),u=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const c=Math.cos(this.aRotation),f=Math.sin(this.aRotation),h=l-this.aX,m=u-this.aY;l=h*c-m*f+this.aX,u=h*f+m*c+this.aY}return i.set(l,u)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class SE extends ih{constructor(e,t,i,r,s,o){super(e,t,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function rh(){let n=0,e=0,t=0,i=0;function r(s,o,a,l){n=s,e=a,t=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,u){r(o,a,u*(a-s),u*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,u,c,f){let h=(o-s)/u-(a-s)/(u+c)+(a-o)/c,m=(a-o)/c-(l-o)/(c+f)+(l-a)/f;h*=c,m*=c,r(o,a,h,m)},calc:function(s){const o=s*s,a=o*s;return n+e*s+t*o+i*a}}}const wa=new R,Gu=new rh,Hu=new rh,Wu=new rh;class ME extends Hn{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new R){const i=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let u,c;this.closed||a>0?u=r[(a-1)%s]:(wa.subVectors(r[0],r[1]).add(r[0]),u=wa);const f=r[a%s],h=r[(a+1)%s];if(this.closed||a+2<s?c=r[(a+2)%s]:(wa.subVectors(r[s-1],r[s-2]).add(r[s-1]),c=wa),this.curveType==="centripetal"||this.curveType==="chordal"){const m=this.curveType==="chordal"?.5:.25;let x=Math.pow(u.distanceToSquared(f),m),d=Math.pow(f.distanceToSquared(h),m),p=Math.pow(h.distanceToSquared(c),m);d<1e-4&&(d=1),x<1e-4&&(x=d),p<1e-4&&(p=d),Gu.initNonuniformCatmullRom(u.x,f.x,h.x,c.x,x,d,p),Hu.initNonuniformCatmullRom(u.y,f.y,h.y,c.y,x,d,p),Wu.initNonuniformCatmullRom(u.z,f.z,h.z,c.z,x,d,p)}else this.curveType==="catmullrom"&&(Gu.initCatmullRom(u.x,f.x,h.x,c.x,this.tension),Hu.initCatmullRom(u.y,f.y,h.y,c.y,this.tension),Wu.initCatmullRom(u.z,f.z,h.z,c.z,this.tension));return i.set(Gu.calc(l),Hu.calc(l),Wu.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new R().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Lp(n,e,t,i,r){const s=(i-e)*.5,o=(r-t)*.5,a=n*n,l=n*a;return(2*t-2*i+s+o)*l+(-3*t+3*i-2*s-o)*a+s*n+t}function wE(n,e){const t=1-n;return t*t*e}function EE(n,e){return 2*(1-n)*n*e}function TE(n,e){return n*n*e}function no(n,e,t,i){return wE(n,e)+EE(n,t)+TE(n,i)}function bE(n,e){const t=1-n;return t*t*t*e}function CE(n,e){const t=1-n;return 3*t*t*n*e}function AE(n,e){return 3*(1-n)*n*n*e}function LE(n,e){return n*n*n*e}function io(n,e,t,i,r){return bE(n,e)+CE(n,t)+AE(n,i)+LE(n,r)}class v0 extends Hn{constructor(e=new ue,t=new ue,i=new ue,r=new ue){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new ue){const i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(io(e,r.x,s.x,o.x,a.x),io(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class PE extends Hn{constructor(e=new R,t=new R,i=new R,r=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new R){const i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(io(e,r.x,s.x,o.x,a.x),io(e,r.y,s.y,o.y,a.y),io(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class sh extends Hn{constructor(e=new ue,t=new ue){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ue){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t){const i=t||new ue;return i.copy(this.v2).sub(this.v1).normalize(),i}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class RE extends Hn{constructor(e=new R,t=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new R){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class _0 extends Hn{constructor(e=new ue,t=new ue,i=new ue){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new ue){const i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(no(e,r.x,s.x,o.x),no(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class DE extends Hn{constructor(e=new R,t=new R,i=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new R){const i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(no(e,r.x,s.x,o.x),no(e,r.y,s.y,o.y),no(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class x0 extends Hn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ue){const i=t,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],u=r[o],c=r[o>r.length-2?r.length-1:o+1],f=r[o>r.length-3?r.length-1:o+2];return i.set(Lp(a,l.x,u.x,c.x,f.x),Lp(a,l.y,u.y,c.y,f.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new ue().fromArray(r))}return this}}var y0=Object.freeze({__proto__:null,ArcCurve:SE,CatmullRomCurve3:ME,CubicBezierCurve:v0,CubicBezierCurve3:PE,EllipseCurve:ih,LineCurve:sh,LineCurve3:RE,QuadraticBezierCurve:_0,QuadraticBezierCurve3:DE,SplineCurve:x0});class IE extends Hn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);e.equals(t)||this.curves.push(new sh(t,e))}getPoint(e,t){const i=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=i){const o=r[s]-i,a=this.curves[s],l=a.getLength(),u=l===0?0:1-o/l;return a.getPointAt(u,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,r=this.curves.length;i<r;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let u=0;u<l.length;u++){const c=l[u];i&&i.equals(c)||(t.push(c),i=c)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(new y0[r.type]().fromJSON(r))}return this}}class Kc extends IE{constructor(e){super(),this.type="Path",this.currentPoint=new ue,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new sh(this.currentPoint.clone(),new ue(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,r){const s=new _0(this.currentPoint.clone(),new ue(e,t),new ue(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,t,i,r,s,o){const a=new v0(this.currentPoint.clone(),new ue(e,t),new ue(i,r),new ue(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new x0(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,r,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,r,s,o),this}absarc(e,t,i,r,s,o){return this.absellipse(e,t,i,i,r,s,o),this}ellipse(e,t,i,r,s,o,a,l){const u=this.currentPoint.x,c=this.currentPoint.y;return this.absellipse(e+u,t+c,i,r,s,o,a,l),this}absellipse(e,t,i,r,s,o,a,l){const u=new ih(e,t,i,r,s,o,a,l);if(this.curves.length>0){const f=u.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(u);const c=u.getPoint(1);return this.currentPoint.copy(c),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Ba extends Kc{constructor(e){super(e),this.uuid=vr(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,r=this.holes.length;i<r;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(new Kc().fromJSON(r))}return this}}const NE={triangulate:function(n,e,t=2){const i=e&&e.length,r=i?e[0]*t:n.length;let s=S0(n,0,r,t,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,u,c,f,h,m;if(i&&(s=UE(n,e,s,t)),n.length>80*t){a=u=n[0],l=c=n[1];for(let x=t;x<r;x+=t)f=n[x],h=n[x+1],f<a&&(a=f),h<l&&(l=h),f>u&&(u=f),h>c&&(c=h);m=Math.max(u-a,c-l),m=m!==0?32767/m:0}return Co(s,o,t,a,l,m,0),o}};function S0(n,e,t,i,r){let s,o;if(r===ZE(n,e,t,i)>0)for(s=e;s<t;s+=i)o=Pp(s,n[s],n[s+1],o);else for(s=t-i;s>=e;s-=i)o=Pp(s,n[s],n[s+1],o);return o&&Dl(o,o.next)&&(Lo(o),o=o.next),o}function dr(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(Dl(t,t.next)||st(t.prev,t,t.next)===0)){if(Lo(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Co(n,e,t,i,r,s,o){if(!n)return;!o&&s&&WE(n,i,r,s);let a=n,l,u;for(;n.prev!==n.next;){if(l=n.prev,u=n.next,s?zE(n,i,r,s):kE(n)){e.push(l.i/t|0),e.push(n.i/t|0),e.push(u.i/t|0),Lo(n),n=u.next,a=u.next;continue}if(n=u,n===a){o?o===1?(n=FE(dr(n),e,t),Co(n,e,t,i,r,s,2)):o===2&&OE(n,e,t,i,r,s):Co(dr(n),e,t,i,r,s,1);break}}}function kE(n){const e=n.prev,t=n,i=n.next;if(st(e,t,i)>=0)return!1;const r=e.x,s=t.x,o=i.x,a=e.y,l=t.y,u=i.y,c=r<s?r<o?r:o:s<o?s:o,f=a<l?a<u?a:u:l<u?l:u,h=r>s?r>o?r:o:s>o?s:o,m=a>l?a>u?a:u:l>u?l:u;let x=i.next;for(;x!==e;){if(x.x>=c&&x.x<=h&&x.y>=f&&x.y<=m&&$r(r,a,s,l,o,u,x.x,x.y)&&st(x.prev,x,x.next)>=0)return!1;x=x.next}return!0}function zE(n,e,t,i){const r=n.prev,s=n,o=n.next;if(st(r,s,o)>=0)return!1;const a=r.x,l=s.x,u=o.x,c=r.y,f=s.y,h=o.y,m=a<l?a<u?a:u:l<u?l:u,x=c<f?c<h?c:h:f<h?f:h,d=a>l?a>u?a:u:l>u?l:u,p=c>f?c>h?c:h:f>h?f:h,g=Qc(m,x,e,t,i),_=Qc(d,p,e,t,i);let v=n.prevZ,S=n.nextZ;for(;v&&v.z>=g&&S&&S.z<=_;){if(v.x>=m&&v.x<=d&&v.y>=x&&v.y<=p&&v!==r&&v!==o&&$r(a,c,l,f,u,h,v.x,v.y)&&st(v.prev,v,v.next)>=0||(v=v.prevZ,S.x>=m&&S.x<=d&&S.y>=x&&S.y<=p&&S!==r&&S!==o&&$r(a,c,l,f,u,h,S.x,S.y)&&st(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;v&&v.z>=g;){if(v.x>=m&&v.x<=d&&v.y>=x&&v.y<=p&&v!==r&&v!==o&&$r(a,c,l,f,u,h,v.x,v.y)&&st(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;S&&S.z<=_;){if(S.x>=m&&S.x<=d&&S.y>=x&&S.y<=p&&S!==r&&S!==o&&$r(a,c,l,f,u,h,S.x,S.y)&&st(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function FE(n,e,t){let i=n;do{const r=i.prev,s=i.next.next;!Dl(r,s)&&M0(r,i,i.next,s)&&Ao(r,s)&&Ao(s,r)&&(e.push(r.i/t|0),e.push(i.i/t|0),e.push(s.i/t|0),Lo(i),Lo(i.next),i=n=s),i=i.next}while(i!==n);return dr(i)}function OE(n,e,t,i,r,s){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&qE(o,a)){let l=w0(o,a);o=dr(o,o.next),l=dr(l,l.next),Co(o,e,t,i,r,s,0),Co(l,e,t,i,r,s,0);return}a=a.next}o=o.next}while(o!==n)}function UE(n,e,t,i){const r=[];let s,o,a,l,u;for(s=0,o=e.length;s<o;s++)a=e[s]*i,l=s<o-1?e[s+1]*i:n.length,u=S0(n,a,l,i,!1),u===u.next&&(u.steiner=!0),r.push(XE(u));for(r.sort(BE),s=0;s<r.length;s++)t=VE(r[s],t);return t}function BE(n,e){return n.x-e.x}function VE(n,e){const t=GE(n,e);if(!t)return e;const i=w0(t,n);return dr(i,i.next),dr(t,t.next)}function GE(n,e){let t=e,i=-1/0,r;const s=n.x,o=n.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const h=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(h<=s&&h>i&&(i=h,r=t.x<t.next.x?t:t.next,h===s))return r}t=t.next}while(t!==e);if(!r)return null;const a=r,l=r.x,u=r.y;let c=1/0,f;t=r;do s>=t.x&&t.x>=l&&s!==t.x&&$r(o<u?s:i,o,l,u,o<u?i:s,o,t.x,t.y)&&(f=Math.abs(o-t.y)/(s-t.x),Ao(t,n)&&(f<c||f===c&&(t.x>r.x||t.x===r.x&&HE(r,t)))&&(r=t,c=f)),t=t.next;while(t!==a);return r}function HE(n,e){return st(n.prev,n,e.prev)<0&&st(e.next,n,n.next)<0}function WE(n,e,t,i){let r=n;do r.z===0&&(r.z=Qc(r.x,r.y,e,t,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==n);r.prevZ.nextZ=null,r.prevZ=null,jE(r)}function jE(n){let e,t,i,r,s,o,a,l,u=1;do{for(t=n,n=null,s=null,o=0;t;){for(o++,i=t,a=0,e=0;e<u&&(a++,i=i.nextZ,!!i);e++);for(l=u;a>0||l>0&&i;)a!==0&&(l===0||!i||t.z<=i.z)?(r=t,t=t.nextZ,a--):(r=i,i=i.nextZ,l--),s?s.nextZ=r:n=r,r.prevZ=s,s=r;t=i}s.nextZ=null,u*=2}while(o>1);return n}function Qc(n,e,t,i,r){return n=(n-t)*r|0,e=(e-i)*r|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function XE(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function $r(n,e,t,i,r,s,o,a){return(r-o)*(e-a)>=(n-o)*(s-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(r-o)*(i-a)}function qE(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!YE(n,e)&&(Ao(n,e)&&Ao(e,n)&&$E(n,e)&&(st(n.prev,n,e.prev)||st(n,e.prev,e))||Dl(n,e)&&st(n.prev,n,n.next)>0&&st(e.prev,e,e.next)>0)}function st(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function Dl(n,e){return n.x===e.x&&n.y===e.y}function M0(n,e,t,i){const r=Ta(st(n,e,t)),s=Ta(st(n,e,i)),o=Ta(st(t,i,n)),a=Ta(st(t,i,e));return!!(r!==s&&o!==a||r===0&&Ea(n,t,e)||s===0&&Ea(n,i,e)||o===0&&Ea(t,n,i)||a===0&&Ea(t,e,i))}function Ea(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function Ta(n){return n>0?1:n<0?-1:0}function YE(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&M0(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function Ao(n,e){return st(n.prev,n,n.next)<0?st(n,e,n.next)>=0&&st(n,n.prev,e)>=0:st(n,e,n.prev)<0||st(n,n.next,e)<0}function $E(n,e){let t=n,i=!1;const r=(n.x+e.x)/2,s=(n.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function w0(n,e){const t=new ef(n.i,n.x,n.y),i=new ef(e.i,e.x,e.y),r=n.next,s=e.prev;return n.next=e,e.prev=n,t.next=r,r.prev=t,i.next=t,t.prev=i,s.next=i,i.prev=s,i}function Pp(n,e,t,i){const r=new ef(n,e,t);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function Lo(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function ef(n,e,t){this.i=n,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function ZE(n,e,t,i){let r=0;for(let s=e,o=t-i;s<t;s+=i)r+=(n[o]-n[s])*(n[s+1]+n[o+1]),o=s;return r}class rs{static area(e){const t=e.length;let i=0;for(let r=t-1,s=0;s<t;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return i*.5}static isClockWise(e){return rs.area(e)<0}static triangulateShape(e,t){const i=[],r=[],s=[];Rp(e),Dp(i,e);let o=e.length;t.forEach(Rp);for(let l=0;l<t.length;l++)r.push(o),o+=t[l].length,Dp(i,t[l]);const a=NE.triangulate(i,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function Rp(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function Dp(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class oh extends Gn{constructor(e=new Ba([new ue(.5,.5),new ue(-.5,.5),new ue(-.5,-.5),new ue(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const i=this,r=[],s=[];for(let a=0,l=e.length;a<l;a++){const u=e[a];o(u)}this.setAttribute("position",new Vt(r,3)),this.setAttribute("uv",new Vt(s,2)),this.computeVertexNormals();function o(a){const l=[],u=t.curveSegments!==void 0?t.curveSegments:12,c=t.steps!==void 0?t.steps:1,f=t.depth!==void 0?t.depth:1;let h=t.bevelEnabled!==void 0?t.bevelEnabled:!0,m=t.bevelThickness!==void 0?t.bevelThickness:.2,x=t.bevelSize!==void 0?t.bevelSize:m-.1,d=t.bevelOffset!==void 0?t.bevelOffset:0,p=t.bevelSegments!==void 0?t.bevelSegments:3;const g=t.extrudePath,_=t.UVGenerator!==void 0?t.UVGenerator:JE;let v,S=!1,M,T,A,y;g&&(v=g.getSpacedPoints(c),S=!0,h=!1,M=g.computeFrenetFrames(c,!1),T=new R,A=new R,y=new R),h||(p=0,m=0,x=0,d=0);const C=a.extractPoints(u);let P=C.shape;const V=C.holes;if(!rs.isClockWise(P)){P=P.reverse();for(let J=0,Z=V.length;J<Z;J++){const le=V[J];rs.isClockWise(le)&&(V[J]=le.reverse())}}const k=rs.triangulateShape(P,V),N=P;for(let J=0,Z=V.length;J<Z;J++){const le=V[J];P=P.concat(le)}function X(J,Z,le){return Z||console.error("THREE.ExtrudeGeometry: vec does not exist"),Z.clone().multiplyScalar(le).add(J)}const K=P.length,Q=k.length;function D(J,Z,le){let Se,fe,Re;const be=J.x-Z.x,Te=J.y-Z.y,Ye=le.x-J.x,We=le.y-J.y,b=be*be+Te*Te,w=be*We-Te*Ye;if(Math.abs(w)>Number.EPSILON){const H=Math.sqrt(b),re=Math.sqrt(Ye*Ye+We*We),ae=Z.x-Te/H,pe=Z.y+be/H,Pe=le.x-We/re,L=le.y+Ye/re,z=((Pe-ae)*We-(L-pe)*Ye)/(be*We-Te*Ye);Se=ae+be*z-J.x,fe=pe+Te*z-J.y;const me=Se*Se+fe*fe;if(me<=2)return new ue(Se,fe);Re=Math.sqrt(me/2)}else{let H=!1;be>Number.EPSILON?Ye>Number.EPSILON&&(H=!0):be<-Number.EPSILON?Ye<-Number.EPSILON&&(H=!0):Math.sign(Te)===Math.sign(We)&&(H=!0),H?(Se=-Te,fe=be,Re=Math.sqrt(b)):(Se=be,fe=Te,Re=Math.sqrt(b/2))}return new ue(Se/Re,fe/Re)}const W=[];for(let J=0,Z=N.length,le=Z-1,Se=J+1;J<Z;J++,le++,Se++)le===Z&&(le=0),Se===Z&&(Se=0),W[J]=D(N[J],N[le],N[Se]);const G=[];let O,B=W.concat();for(let J=0,Z=V.length;J<Z;J++){const le=V[J];O=[];for(let Se=0,fe=le.length,Re=fe-1,be=Se+1;Se<fe;Se++,Re++,be++)Re===fe&&(Re=0),be===fe&&(be=0),O[Se]=D(le[Se],le[Re],le[be]);G.push(O),B=B.concat(O)}for(let J=0;J<p;J++){const Z=J/p,le=m*Math.cos(Z*Math.PI/2),Se=x*Math.sin(Z*Math.PI/2)+d;for(let fe=0,Re=N.length;fe<Re;fe++){const be=X(N[fe],W[fe],Se);Ae(be.x,be.y,-le)}for(let fe=0,Re=V.length;fe<Re;fe++){const be=V[fe];O=G[fe];for(let Te=0,Ye=be.length;Te<Ye;Te++){const We=X(be[Te],O[Te],Se);Ae(We.x,We.y,-le)}}}const te=x+d;for(let J=0;J<K;J++){const Z=h?X(P[J],B[J],te):P[J];S?(A.copy(M.normals[0]).multiplyScalar(Z.x),T.copy(M.binormals[0]).multiplyScalar(Z.y),y.copy(v[0]).add(A).add(T),Ae(y.x,y.y,y.z)):Ae(Z.x,Z.y,0)}for(let J=1;J<=c;J++)for(let Z=0;Z<K;Z++){const le=h?X(P[Z],B[Z],te):P[Z];S?(A.copy(M.normals[J]).multiplyScalar(le.x),T.copy(M.binormals[J]).multiplyScalar(le.y),y.copy(v[J]).add(A).add(T),Ae(y.x,y.y,y.z)):Ae(le.x,le.y,f/c*J)}for(let J=p-1;J>=0;J--){const Z=J/p,le=m*Math.cos(Z*Math.PI/2),Se=x*Math.sin(Z*Math.PI/2)+d;for(let fe=0,Re=N.length;fe<Re;fe++){const be=X(N[fe],W[fe],Se);Ae(be.x,be.y,f+le)}for(let fe=0,Re=V.length;fe<Re;fe++){const be=V[fe];O=G[fe];for(let Te=0,Ye=be.length;Te<Ye;Te++){const We=X(be[Te],O[Te],Se);S?Ae(We.x,We.y+v[c-1].y,v[c-1].x+le):Ae(We.x,We.y,f+le)}}}ne(),ce();function ne(){const J=r.length/3;if(h){let Z=0,le=K*Z;for(let Se=0;Se<Q;Se++){const fe=k[Se];ye(fe[2]+le,fe[1]+le,fe[0]+le)}Z=c+p*2,le=K*Z;for(let Se=0;Se<Q;Se++){const fe=k[Se];ye(fe[0]+le,fe[1]+le,fe[2]+le)}}else{for(let Z=0;Z<Q;Z++){const le=k[Z];ye(le[2],le[1],le[0])}for(let Z=0;Z<Q;Z++){const le=k[Z];ye(le[0]+K*c,le[1]+K*c,le[2]+K*c)}}i.addGroup(J,r.length/3-J,0)}function ce(){const J=r.length/3;let Z=0;j(N,Z),Z+=N.length;for(let le=0,Se=V.length;le<Se;le++){const fe=V[le];j(fe,Z),Z+=fe.length}i.addGroup(J,r.length/3-J,1)}function j(J,Z){let le=J.length;for(;--le>=0;){const Se=le;let fe=le-1;fe<0&&(fe=J.length-1);for(let Re=0,be=c+p*2;Re<be;Re++){const Te=K*Re,Ye=K*(Re+1),We=Z+Se+Te,b=Z+fe+Te,w=Z+fe+Ye,H=Z+Se+Ye;Le(We,b,w,H)}}}function Ae(J,Z,le){l.push(J),l.push(Z),l.push(le)}function ye(J,Z,le){de(J),de(Z),de(le);const Se=r.length/3,fe=_.generateTopUV(i,r,Se-3,Se-2,Se-1);Ie(fe[0]),Ie(fe[1]),Ie(fe[2])}function Le(J,Z,le,Se){de(J),de(Z),de(Se),de(Z),de(le),de(Se);const fe=r.length/3,Re=_.generateSideWallUV(i,r,fe-6,fe-3,fe-2,fe-1);Ie(Re[0]),Ie(Re[1]),Ie(Re[3]),Ie(Re[1]),Ie(Re[2]),Ie(Re[3])}function de(J){r.push(l[J*3+0]),r.push(l[J*3+1]),r.push(l[J*3+2])}function Ie(J){s.push(J.x),s.push(J.y)}}}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return KE(t,i,e)}static fromJSON(e,t){const i=[];for(let s=0,o=e.shapes.length;s<o;s++){const a=t[e.shapes[s]];i.push(a)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new y0[r.type]().fromJSON(r)),new oh(i,e.options)}}const JE={generateTopUV:function(n,e,t,i,r){const s=e[t*3],o=e[t*3+1],a=e[i*3],l=e[i*3+1],u=e[r*3],c=e[r*3+1];return[new ue(s,o),new ue(a,l),new ue(u,c)]},generateSideWallUV:function(n,e,t,i,r,s){const o=e[t*3],a=e[t*3+1],l=e[t*3+2],u=e[i*3],c=e[i*3+1],f=e[i*3+2],h=e[r*3],m=e[r*3+1],x=e[r*3+2],d=e[s*3],p=e[s*3+1],g=e[s*3+2];return Math.abs(a-c)<Math.abs(o-u)?[new ue(o,1-l),new ue(u,1-f),new ue(h,1-x),new ue(d,1-g)]:[new ue(a,1-l),new ue(c,1-f),new ue(m,1-x),new ue(p,1-g)]}};function KE(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,r=n.length;i<r;i++){const s=n[i];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Il extends Gn{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let u=0;const c=[],f=new R,h=new R,m=[],x=[],d=[],p=[];for(let g=0;g<=i;g++){const _=[],v=g/i;let S=0;g==0&&o==0?S=.5/t:g==i&&l==Math.PI&&(S=-.5/t);for(let M=0;M<=t;M++){const T=M/t;f.x=-e*Math.cos(r+T*s)*Math.sin(o+v*a),f.y=e*Math.cos(o+v*a),f.z=e*Math.sin(r+T*s)*Math.sin(o+v*a),x.push(f.x,f.y,f.z),h.copy(f).normalize(),d.push(h.x,h.y,h.z),p.push(T+S,1-v),_.push(u++)}c.push(_)}for(let g=0;g<i;g++)for(let _=0;_<t;_++){const v=c[g][_+1],S=c[g][_],M=c[g+1][_],T=c[g+1][_+1];(g!==0||o>0)&&m.push(v,S,T),(g!==i-1||l<Math.PI)&&m.push(S,M,T)}this.setIndex(m),this.setAttribute("position",new Vt(x,3)),this.setAttribute("normal",new Vt(d,3)),this.setAttribute("uv",new Vt(p,2))}static fromJSON(e){return new Il(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class ah extends Gn{constructor(e=1,t=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const o=[],a=[],l=[],u=[],c=new R,f=new R,h=new R;for(let m=0;m<=i;m++)for(let x=0;x<=r;x++){const d=x/r*s,p=m/i*Math.PI*2;f.x=(e+t*Math.cos(p))*Math.cos(d),f.y=(e+t*Math.cos(p))*Math.sin(d),f.z=t*Math.sin(p),a.push(f.x,f.y,f.z),c.x=e*Math.cos(d),c.y=e*Math.sin(d),h.subVectors(f,c).normalize(),l.push(h.x,h.y,h.z),u.push(x/r),u.push(m/i)}for(let m=1;m<=i;m++)for(let x=1;x<=r;x++){const d=(r+1)*m+x-1,p=(r+1)*(m-1)+x-1,g=(r+1)*(m-1)+x,_=(r+1)*m+x;o.push(d,p,_),o.push(p,g,_)}this.setIndex(o),this.setAttribute("position",new Vt(a,3)),this.setAttribute("normal",new Vt(l,3)),this.setAttribute("uv",new Vt(u,2))}static fromJSON(e){return new ah(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class QE extends Oo{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qg,this.normalScale=new ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const dl={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class e2{constructor(e,t,i){const r=this;let s=!1,o=0,a=0,l;const u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(c){a++,s===!1&&r.onStart!==void 0&&r.onStart(c,o,a),s=!0},this.itemEnd=function(c){o++,r.onProgress!==void 0&&r.onProgress(c,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(c){r.onError!==void 0&&r.onError(c)},this.resolveURL=function(c){return l?l(c):c},this.setURLModifier=function(c){return l=c,this},this.addHandler=function(c,f){return u.push(c,f),this},this.removeHandler=function(c){const f=u.indexOf(c);return f!==-1&&u.splice(f,2),this},this.getHandler=function(c){for(let f=0,h=u.length;f<h;f+=2){const m=u[f],x=u[f+1];if(m.global&&(m.lastIndex=0),m.test(c))return x}return null}}}const t2=new e2;class Nl{constructor(e){this.manager=e!==void 0?e:t2,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const Jn={};class n2 extends Error{constructor(e,t){super(e),this.response=t}}class i2 extends Nl{constructor(e){super(e)}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=dl.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Jn[e]!==void 0){Jn[e].push({onLoad:t,onProgress:i,onError:r});return}Jn[e]=[],Jn[e].push({onLoad:t,onProgress:i,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(u=>{if(u.status===200||u.status===0){if(u.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||u.body===void 0||u.body.getReader===void 0)return u;const c=Jn[e],f=u.body.getReader(),h=u.headers.get("Content-Length")||u.headers.get("X-File-Size"),m=h?parseInt(h):0,x=m!==0;let d=0;const p=new ReadableStream({start(g){_();function _(){f.read().then(({done:v,value:S})=>{if(v)g.close();else{d+=S.byteLength;const M=new ProgressEvent("progress",{lengthComputable:x,loaded:d,total:m});for(let T=0,A=c.length;T<A;T++){const y=c[T];y.onProgress&&y.onProgress(M)}g.enqueue(S),_()}})}}});return new Response(p)}else throw new n2(`fetch for "${u.url}" responded with ${u.status}: ${u.statusText}`,u)}).then(u=>{switch(l){case"arraybuffer":return u.arrayBuffer();case"blob":return u.blob();case"document":return u.text().then(c=>new DOMParser().parseFromString(c,a));case"json":return u.json();default:if(a===void 0)return u.text();{const f=/charset="?([^;"\s]*)"?/i.exec(a),h=f&&f[1]?f[1].toLowerCase():void 0,m=new TextDecoder(h);return u.arrayBuffer().then(x=>m.decode(x))}}}).then(u=>{dl.add(e,u);const c=Jn[e];delete Jn[e];for(let f=0,h=c.length;f<h;f++){const m=c[f];m.onLoad&&m.onLoad(u)}}).catch(u=>{const c=Jn[e];if(c===void 0)throw this.manager.itemError(e),u;delete Jn[e];for(let f=0,h=c.length;f<h;f++){const m=c[f];m.onError&&m.onError(u)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class r2 extends Nl{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=dl.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=To("img");function l(){c(),dl.add(e,this),t&&t(this),s.manager.itemEnd(e)}function u(f){c(),r&&r(f),s.manager.itemError(e),s.manager.itemEnd(e)}function c(){a.removeEventListener("load",l,!1),a.removeEventListener("error",u,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",u,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class s2 extends Nl{constructor(e){super(e)}load(e,t,i,r){const s=new Zt,o=new r2(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}class E0 extends Jt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ze(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const ju=new ct,Ip=new R,Np=new R;class o2{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ue(512,512),this.map=null,this.mapPass=null,this.matrix=new ct,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new eh,this._frameExtents=new ue(1,1),this._viewportCount=1,this._viewports=[new it(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Ip.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ip),Np.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Np),t.updateMatrixWorld(),ju.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ju),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ju)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const kp=new ct,Fs=new R,Xu=new R;class a2 extends o2{constructor(){super(new rn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ue(4,2),this._viewportCount=6,this._viewports=[new it(2,1,1,1),new it(0,1,1,1),new it(3,1,1,1),new it(1,1,1,1),new it(3,0,1,1),new it(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Fs.setFromMatrixPosition(e.matrixWorld),i.position.copy(Fs),Xu.copy(i.position),Xu.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Xu),i.updateMatrixWorld(),r.makeTranslation(-Fs.x,-Fs.y,-Fs.z),kp.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(kp)}}class l2 extends E0{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new a2}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class u2 extends E0{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class zp{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(bt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class c2{constructor(){this.type="ShapePath",this.color=new Ze,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new Kc,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,i,r){return this.currentPath.quadraticCurveTo(e,t,i,r),this}bezierCurveTo(e,t,i,r,s,o){return this.currentPath.bezierCurveTo(e,t,i,r,s,o),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(g){const _=[];for(let v=0,S=g.length;v<S;v++){const M=g[v],T=new Ba;T.curves=M.curves,_.push(T)}return _}function i(g,_){const v=_.length;let S=!1;for(let M=v-1,T=0;T<v;M=T++){let A=_[M],y=_[T],C=y.x-A.x,P=y.y-A.y;if(Math.abs(P)>Number.EPSILON){if(P<0&&(A=_[T],C=-C,y=_[M],P=-P),g.y<A.y||g.y>y.y)continue;if(g.y===A.y){if(g.x===A.x)return!0}else{const V=P*(g.x-A.x)-C*(g.y-A.y);if(V===0)return!0;if(V<0)continue;S=!S}}else{if(g.y!==A.y)continue;if(y.x<=g.x&&g.x<=A.x||A.x<=g.x&&g.x<=y.x)return!0}}return S}const r=rs.isClockWise,s=this.subPaths;if(s.length===0)return[];let o,a,l;const u=[];if(s.length===1)return a=s[0],l=new Ba,l.curves=a.curves,u.push(l),u;let c=!r(s[0].getPoints());c=e?!c:c;const f=[],h=[];let m=[],x=0,d;h[x]=void 0,m[x]=[];for(let g=0,_=s.length;g<_;g++)a=s[g],d=a.getPoints(),o=r(d),o=e?!o:o,o?(!c&&h[x]&&x++,h[x]={s:new Ba,p:d},h[x].s.curves=a.curves,c&&x++,m[x]=[]):m[x].push({h:a,p:d[0]});if(!h[0])return t(s);if(h.length>1){let g=!1,_=0;for(let v=0,S=h.length;v<S;v++)f[v]=[];for(let v=0,S=h.length;v<S;v++){const M=m[v];for(let T=0;T<M.length;T++){const A=M[T];let y=!0;for(let C=0;C<h.length;C++)i(A.p,h[C].p)&&(v!==C&&_++,y?(y=!1,f[C].push(A)):g=!0);y&&f[v].push(A)}}_>0&&g===!1&&(m=f)}let p;for(let g=0,_=h.length;g<_;g++){l=h[g].s,u.push(l),p=m[g];for(let v=0,S=p.length;v<S;v++)l.holes.push(p[v].h)}return u}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Zf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Zf);const Fp={type:"change"},qu={type:"start"},Op={type:"end"};class f2 extends gr{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new R,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:xr.ROTATE,MIDDLE:xr.DOLLY,RIGHT:xr.PAN},this.touches={ONE:yr.ROTATE,TWO:yr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(L){L.addEventListener("keydown",We),this._domElementKeyEvents=L},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(Fp),i.update(),s=r.NONE},this.update=function(){const L=new R,z=new fr().setFromUnitVectors(e.up,new R(0,1,0)),me=z.clone().invert(),xe=new R,ge=new fr,we=2*Math.PI;return function(){const Oe=i.object.position;L.copy(Oe).sub(i.target),L.applyQuaternion(z),a.setFromVector3(L),i.autoRotate&&s===r.NONE&&C(A()),i.enableDamping?(a.theta+=l.theta*i.dampingFactor,a.phi+=l.phi*i.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let Ue=i.minAzimuthAngle,$e=i.maxAzimuthAngle;return isFinite(Ue)&&isFinite($e)&&(Ue<-Math.PI?Ue+=we:Ue>Math.PI&&(Ue-=we),$e<-Math.PI?$e+=we:$e>Math.PI&&($e-=we),Ue<=$e?a.theta=Math.max(Ue,Math.min($e,a.theta)):a.theta=a.theta>(Ue+$e)/2?Math.max(Ue,a.theta):Math.min($e,a.theta)),a.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=u,a.radius=Math.max(i.minDistance,Math.min(i.maxDistance,a.radius)),i.enableDamping===!0?i.target.addScaledVector(c,i.dampingFactor):i.target.add(c),L.setFromSpherical(a),L.applyQuaternion(me),Oe.copy(i.target).add(L),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,c.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),c.set(0,0,0)),u=1,f||xe.distanceToSquared(i.object.position)>o||8*(1-ge.dot(i.object.quaternion))>o?(i.dispatchEvent(Fp),xe.copy(i.object.position),ge.copy(i.object.quaternion),f=!1,!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",H),i.domElement.removeEventListener("pointerdown",le),i.domElement.removeEventListener("pointercancel",Re),i.domElement.removeEventListener("wheel",Ye),i.domElement.removeEventListener("pointermove",Se),i.domElement.removeEventListener("pointerup",fe),i._domElementKeyEvents!==null&&i._domElementKeyEvents.removeEventListener("keydown",We)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const o=1e-6,a=new zp,l=new zp;let u=1;const c=new R;let f=!1;const h=new ue,m=new ue,x=new ue,d=new ue,p=new ue,g=new ue,_=new ue,v=new ue,S=new ue,M=[],T={};function A(){return 2*Math.PI/60/60*i.autoRotateSpeed}function y(){return Math.pow(.95,i.zoomSpeed)}function C(L){l.theta-=L}function P(L){l.phi-=L}const V=function(){const L=new R;return function(me,xe){L.setFromMatrixColumn(xe,0),L.multiplyScalar(-me),c.add(L)}}(),oe=function(){const L=new R;return function(me,xe){i.screenSpacePanning===!0?L.setFromMatrixColumn(xe,1):(L.setFromMatrixColumn(xe,0),L.crossVectors(i.object.up,L)),L.multiplyScalar(me),c.add(L)}}(),k=function(){const L=new R;return function(me,xe){const ge=i.domElement;if(i.object.isPerspectiveCamera){const we=i.object.position;L.copy(we).sub(i.target);let Me=L.length();Me*=Math.tan(i.object.fov/2*Math.PI/180),V(2*me*Me/ge.clientHeight,i.object.matrix),oe(2*xe*Me/ge.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(V(me*(i.object.right-i.object.left)/i.object.zoom/ge.clientWidth,i.object.matrix),oe(xe*(i.object.top-i.object.bottom)/i.object.zoom/ge.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function N(L){i.object.isPerspectiveCamera?u/=L:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom*L)),i.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function X(L){i.object.isPerspectiveCamera?u*=L:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/L)),i.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function K(L){h.set(L.clientX,L.clientY)}function Q(L){_.set(L.clientX,L.clientY)}function D(L){d.set(L.clientX,L.clientY)}function W(L){m.set(L.clientX,L.clientY),x.subVectors(m,h).multiplyScalar(i.rotateSpeed);const z=i.domElement;C(2*Math.PI*x.x/z.clientHeight),P(2*Math.PI*x.y/z.clientHeight),h.copy(m),i.update()}function G(L){v.set(L.clientX,L.clientY),S.subVectors(v,_),S.y>0?N(y()):S.y<0&&X(y()),_.copy(v),i.update()}function O(L){p.set(L.clientX,L.clientY),g.subVectors(p,d).multiplyScalar(i.panSpeed),k(g.x,g.y),d.copy(p),i.update()}function B(L){L.deltaY<0?X(y()):L.deltaY>0&&N(y()),i.update()}function te(L){let z=!1;switch(L.code){case i.keys.UP:L.ctrlKey||L.metaKey||L.shiftKey?P(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):k(0,i.keyPanSpeed),z=!0;break;case i.keys.BOTTOM:L.ctrlKey||L.metaKey||L.shiftKey?P(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):k(0,-i.keyPanSpeed),z=!0;break;case i.keys.LEFT:L.ctrlKey||L.metaKey||L.shiftKey?C(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):k(i.keyPanSpeed,0),z=!0;break;case i.keys.RIGHT:L.ctrlKey||L.metaKey||L.shiftKey?C(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):k(-i.keyPanSpeed,0),z=!0;break}z&&(L.preventDefault(),i.update())}function ne(){if(M.length===1)h.set(M[0].pageX,M[0].pageY);else{const L=.5*(M[0].pageX+M[1].pageX),z=.5*(M[0].pageY+M[1].pageY);h.set(L,z)}}function ce(){if(M.length===1)d.set(M[0].pageX,M[0].pageY);else{const L=.5*(M[0].pageX+M[1].pageX),z=.5*(M[0].pageY+M[1].pageY);d.set(L,z)}}function j(){const L=M[0].pageX-M[1].pageX,z=M[0].pageY-M[1].pageY,me=Math.sqrt(L*L+z*z);_.set(0,me)}function Ae(){i.enableZoom&&j(),i.enablePan&&ce()}function ye(){i.enableZoom&&j(),i.enableRotate&&ne()}function Le(L){if(M.length==1)m.set(L.pageX,L.pageY);else{const me=Pe(L),xe=.5*(L.pageX+me.x),ge=.5*(L.pageY+me.y);m.set(xe,ge)}x.subVectors(m,h).multiplyScalar(i.rotateSpeed);const z=i.domElement;C(2*Math.PI*x.x/z.clientHeight),P(2*Math.PI*x.y/z.clientHeight),h.copy(m)}function de(L){if(M.length===1)p.set(L.pageX,L.pageY);else{const z=Pe(L),me=.5*(L.pageX+z.x),xe=.5*(L.pageY+z.y);p.set(me,xe)}g.subVectors(p,d).multiplyScalar(i.panSpeed),k(g.x,g.y),d.copy(p)}function Ie(L){const z=Pe(L),me=L.pageX-z.x,xe=L.pageY-z.y,ge=Math.sqrt(me*me+xe*xe);v.set(0,ge),S.set(0,Math.pow(v.y/_.y,i.zoomSpeed)),N(S.y),_.copy(v)}function J(L){i.enableZoom&&Ie(L),i.enablePan&&de(L)}function Z(L){i.enableZoom&&Ie(L),i.enableRotate&&Le(L)}function le(L){i.enabled!==!1&&(M.length===0&&(i.domElement.setPointerCapture(L.pointerId),i.domElement.addEventListener("pointermove",Se),i.domElement.addEventListener("pointerup",fe)),re(L),L.pointerType==="touch"?b(L):be(L))}function Se(L){i.enabled!==!1&&(L.pointerType==="touch"?w(L):Te(L))}function fe(L){ae(L),M.length===0&&(i.domElement.releasePointerCapture(L.pointerId),i.domElement.removeEventListener("pointermove",Se),i.domElement.removeEventListener("pointerup",fe)),i.dispatchEvent(Op),s=r.NONE}function Re(L){ae(L)}function be(L){let z;switch(L.button){case 0:z=i.mouseButtons.LEFT;break;case 1:z=i.mouseButtons.MIDDLE;break;case 2:z=i.mouseButtons.RIGHT;break;default:z=-1}switch(z){case xr.DOLLY:if(i.enableZoom===!1)return;Q(L),s=r.DOLLY;break;case xr.ROTATE:if(L.ctrlKey||L.metaKey||L.shiftKey){if(i.enablePan===!1)return;D(L),s=r.PAN}else{if(i.enableRotate===!1)return;K(L),s=r.ROTATE}break;case xr.PAN:if(L.ctrlKey||L.metaKey||L.shiftKey){if(i.enableRotate===!1)return;K(L),s=r.ROTATE}else{if(i.enablePan===!1)return;D(L),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(qu)}function Te(L){switch(s){case r.ROTATE:if(i.enableRotate===!1)return;W(L);break;case r.DOLLY:if(i.enableZoom===!1)return;G(L);break;case r.PAN:if(i.enablePan===!1)return;O(L);break}}function Ye(L){i.enabled===!1||i.enableZoom===!1||s!==r.NONE||(L.preventDefault(),i.dispatchEvent(qu),B(L),i.dispatchEvent(Op))}function We(L){i.enabled===!1||i.enablePan===!1||te(L)}function b(L){switch(pe(L),M.length){case 1:switch(i.touches.ONE){case yr.ROTATE:if(i.enableRotate===!1)return;ne(),s=r.TOUCH_ROTATE;break;case yr.PAN:if(i.enablePan===!1)return;ce(),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(i.touches.TWO){case yr.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Ae(),s=r.TOUCH_DOLLY_PAN;break;case yr.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;ye(),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(qu)}function w(L){switch(pe(L),s){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;Le(L),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;de(L),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;J(L),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Z(L),i.update();break;default:s=r.NONE}}function H(L){i.enabled!==!1&&L.preventDefault()}function re(L){M.push(L)}function ae(L){delete T[L.pointerId];for(let z=0;z<M.length;z++)if(M[z].pointerId==L.pointerId){M.splice(z,1);return}}function pe(L){let z=T[L.pointerId];z===void 0&&(z=new ue,T[L.pointerId]=z),z.set(L.pageX,L.pageY)}function Pe(L){const z=L.pointerId===M[0].pointerId?M[1]:M[0];return T[z.pointerId]}i.domElement.addEventListener("contextmenu",H),i.domElement.addEventListener("pointerdown",le),i.domElement.addEventListener("pointercancel",Re),i.domElement.addEventListener("wheel",Ye,{passive:!1}),this.update()}}class h2 extends Nl{constructor(e){super(e)}load(e,t,i,r){const s=this,o=new i2(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){const l=s.parse(JSON.parse(a));t&&t(l)},i,r)}parse(e){return new d2(e)}}class d2{constructor(e){this.isFont=!0,this.type="Font",this.data=e}generateShapes(e,t=100){const i=[],r=p2(e,t,this.data);for(let s=0,o=r.length;s<o;s++)i.push(...r[s].toShapes());return i}}function p2(n,e,t){const i=Array.from(n),r=e/t.resolution,s=(t.boundingBox.yMax-t.boundingBox.yMin+t.underlineThickness)*r,o=[];let a=0,l=0;for(let u=0;u<i.length;u++){const c=i[u];if(c===`
`)a=0,l-=s;else{const f=m2(c,r,a,l,t);a+=f.offsetX,o.push(f.path)}}return o}function m2(n,e,t,i,r){const s=r.glyphs[n]||r.glyphs["?"];if(!s){console.error('THREE.Font: character "'+n+'" does not exists in font family '+r.familyName+".");return}const o=new c2;let a,l,u,c,f,h,m,x;if(s.o){const d=s._cachedOutline||(s._cachedOutline=s.o.split(" "));for(let p=0,g=d.length;p<g;)switch(d[p++]){case"m":a=d[p++]*e+t,l=d[p++]*e+i,o.moveTo(a,l);break;case"l":a=d[p++]*e+t,l=d[p++]*e+i,o.lineTo(a,l);break;case"q":u=d[p++]*e+t,c=d[p++]*e+i,f=d[p++]*e+t,h=d[p++]*e+i,o.quadraticCurveTo(f,h,u,c);break;case"b":u=d[p++]*e+t,c=d[p++]*e+i,f=d[p++]*e+t,h=d[p++]*e+i,m=d[p++]*e+t,x=d[p++]*e+i,o.bezierCurveTo(f,h,m,x,u,c);break}}return{offsetX:s.ha*e,path:o}}class g2 extends oh{constructor(e,t={}){const i=t.font;if(i===void 0)super();else{const r=i.generateShapes(e,t.size);t.depth=t.height!==void 0?t.height:50,t.bevelThickness===void 0&&(t.bevelThickness=10),t.bevelSize===void 0&&(t.bevelSize=8),t.bevelEnabled===void 0&&(t.bevelEnabled=!1),super(r,t)}this.type="TextGeometry"}}const Yu=(n,e,t,i,r,s)=>{const o=new Il(n,e,t),a=new bo({color:s,map:i}),l=new vn(o,a);return r.add(l),l},v2="/assets/saturn_ring_alpha-4b0644b2.png",_2="/assets/saturn-54a900ca.jpeg",x2="/assets/jupiter-b0f04d00.jpeg",y2="/assets/mars-38f9d6ac.jpg",S2=()=>{const n=new yE,e=new s2,t=new rn(70,window.innerWidth/window.innerHeight,.01,1e7),i=new g0({canvas:document.getElementById("bg"),antialias:!0});i.setPixelRatio(window.devicePixelRatio),i.setSize(window.innerWidth,window.innerHeight),t.position.setZ(30);const r=()=>{const{innerHeight:k,innerWidth:N}=window;t.aspect=N/k,t.updateProjectionMatrix(),i.setSize(N,k)};window.addEventListener("resize",r);const s=new h2,o=(k,N,X,K,Q,D)=>{s.load("/droid_sans_bold.typeface.json",W=>{const G=new g2(k,{height:0,size:D,font:W}),O=new bo({color:Q}),B=new vn(G,O);B.position.x=N,B.position.y=X,B.position.z=K,B.name=k,n.add(B)})},{innerHeight:a,innerWidth:l}=window;let u=l<a?-5:-20,c=l<a?1:2;o(`Irfan
wani`,u,17,0,"rgb(198, 185, 158)",c);const f=e.load(v2),h=new ah(10,3,2,100),m=new QE({map:f}),x=new vn(h,m);n.add(x);const d=e.load(_2),p=Yu(5,32,32,d,n),g=new l2(16777215);g.position.set(5,5,5);const _=new u2(16777215);n.add(g,_);const v=new f2(t,i.domElement);v.enabled=!1;const S=new Il(.25,24,24),M=new bo({color:16777215});function T(){const k=new vn(S,M),[N,X,K]=Array(3).fill(0).map(()=>_y.randFloatSpread(2e3));k.position.set(N,X,K),n.add(k)}Array(4e3).fill(0).forEach(T);const A=e.load(x2),y=Yu(200,50,50,A,n,1162167620);y.position.z=300,y.position.x=-10;const C=e.load(y2),P=Yu(30,50,50,C,n);P.position.z=-70,P.position.x=500,P.position.y=-50;const V=()=>{const k=window.scrollY;y.rotation.x+=.05,y.rotation.y+=.05,y.rotation.z+=.05,P.rotation.x+=.01,P.rotation.y+=.008,P.rotation.z+=.01,t.position.x=-k/10,t.position.y=-k/10};document.body.onscroll=V;const oe=()=>{x.rotation.x+=.01,x.rotation.y+=.005,x.rotation.z+=.01,p.rotation.x+=.01,p.rotation.y+=.005,p.rotation.z+=.01,v.update(),i.render(n,t),window.requestAnimationFrame(oe)};oe()},M2=()=>ee.jsx(ko,{className:"flexstart",children:ee.jsxs("div",{children:[ee.jsxs("ul",{children:[ee.jsxs("li",{className:"titlecolor",children:["Programming Languages",ee.jsxs("ul",{children:[ee.jsx("li",{children:"Python"}),ee.jsx("li",{children:"Javascript"}),ee.jsx("li",{children:"Typescript"}),ee.jsx("li",{children:"SQL"}),ee.jsx("li",{children:"Solidity"})]})]}),ee.jsxs("li",{className:"titlecolor",children:["Frameworks and Libraries",ee.jsxs("ul",{children:[ee.jsx("li",{children:"React Native"}),ee.jsx("li",{children:"React"}),ee.jsx("li",{children:"Redux"}),ee.jsx("li",{children:"Redux Toolkit and RTK query"}),ee.jsx("li",{children:"Three js"}),ee.jsx("li",{children:"GraphQL"}),ee.jsx("li",{children:"Socket io"}),ee.jsx("li",{children:"Expo"}),ee.jsx("li",{children:"Django"}),ee.jsx("li",{children:"Django Rest Framework"}),ee.jsx("li",{children:"Flask"}),ee.jsx("li",{children:"Matplotlib"}),ee.jsx("li",{children:"Brownie"}),ee.jsx("li",{children:"Hardhat"})]})]}),ee.jsxs("li",{className:"titlecolor",children:["Databases",ee.jsxs("ul",{children:[ee.jsx("li",{children:"PostgreSQL"}),ee.jsx("li",{children:"MongoDB"}),ee.jsx("li",{children:"Sqlite3"})]})]}),ee.jsxs("li",{className:"titlecolor",children:["Extras",ee.jsx("ul",{children:ee.jsx("li",{children:"Data Structures and Algorithms"})})]})]}),ee.jsx("h3",{className:"titlecolor",children:"Last But not the least"}),ee.jsx("li",{children:"HTML and CSS"})]})}),w2=()=>ee.jsx(ko,{className:"flexend",children:ee.jsxs("div",{className:"titlecolor",children:["Checkout my github",ee.jsx("li",{children:ee.jsx("a",{target:"_blank",href:"https://github.com/irfanwani",children:"Github"})}),"Make sure to follow me on",ee.jsx("li",{children:ee.jsx("a",{target:"_blank",href:"https://www.linkedin.com/in/irfan-wani-6891b1181/",children:"LinkedIn"})}),ee.jsx("li",{children:ee.jsx("a",{target:"_blank",href:"https://www.instagram.com/irfanwani347/",children:"Instagram"})}),ee.jsx("li",{children:ee.jsx("a",{target:"_blank",href:"https://twitter.com/Irfan__wani",children:"Twitter"})}),"Email me at",ee.jsx("li",{children:ee.jsx("a",{href:"mailto:irfanwani347@gmail.com",children:"Email"})})]})}),E2=()=>ee.jsx(ko,{children:ee.jsx("footer",{className:"titlecolor title",children:"Thank You!"})});function T2(){return ss.useEffect(()=>{S2()},[]),ee.jsxs(ee.Fragment,{children:[ee.jsx("canvas",{id:"bg"}),ee.jsx("main",{children:ee.jsxs("div",{className:"main center column",children:[ee.jsx(rx,{}),ee.jsx(lx,{}),ee.jsx(M2,{}),ee.jsx(w2,{}),ee.jsx(E2,{})]})})]})}$u.createRoot(document.getElementById("root")).render(ee.jsx(q0.StrictMode,{children:ee.jsx(T2,{})}));
