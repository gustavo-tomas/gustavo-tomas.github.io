(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function Kc(n,e){const t=Object.create(null),i=n.split(",");for(let r=0;r<i.length;r++)t[i[r]]=!0;return e?r=>!!t[r.toLowerCase()]:r=>!!t[r]}const Zg="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Jg=Kc(Zg);function dp(n){return!!n||n===""}function Zc(n){if(Ue(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=Tt(i)?t_(i):Zc(i);if(r)for(const s in r)e[s]=r[s]}return e}else{if(Tt(n))return n;if(ct(n))return n}}const Qg=/;(?![^(]*\))/g,e_=/:(.+)/;function t_(n){const e={};return n.split(Qg).forEach(t=>{if(t){const i=t.split(e_);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Jc(n){let e="";if(Tt(n))e=n;else if(Ue(n))for(let t=0;t<n.length;t++){const i=Jc(n[t]);i&&(e+=i+" ")}else if(ct(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const it={},Hr=[],gn=()=>{},n_=()=>!1,i_=/^on[^a-z]/,Io=n=>i_.test(n),Qc=n=>n.startsWith("onUpdate:"),St=Object.assign,eu=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},r_=Object.prototype.hasOwnProperty,We=(n,e)=>r_.call(n,e),Ue=Array.isArray,Ns=n=>Do(n)==="[object Map]",s_=n=>Do(n)==="[object Set]",Be=n=>typeof n=="function",Tt=n=>typeof n=="string",tu=n=>typeof n=="symbol",ct=n=>n!==null&&typeof n=="object",pp=n=>ct(n)&&Be(n.then)&&Be(n.catch),a_=Object.prototype.toString,Do=n=>a_.call(n),o_=n=>Do(n).slice(8,-1),l_=n=>Do(n)==="[object Object]",nu=n=>Tt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,co=Kc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),No=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},c_=/-(\w)/g,Rn=No(n=>n.replace(c_,(e,t)=>t?t.toUpperCase():"")),u_=/\B([A-Z])/g,as=No(n=>n.replace(u_,"-$1").toLowerCase()),Oo=No(n=>n.charAt(0).toUpperCase()+n.slice(1)),ll=No(n=>n?`on${Oo(n)}`:""),js=(n,e)=>!Object.is(n,e),cl=(n,e)=>{for(let t=0;t<n.length;t++)n[t](e)},xo=(n,e,t)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,value:t})},mp=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let Zu;const f_=()=>Zu||(Zu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Sn;class h_{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&Sn&&(this.parent=Sn,this.index=(Sn.scopes||(Sn.scopes=[])).push(this)-1)}run(e){if(this.active){const t=Sn;try{return Sn=this,e()}finally{Sn=t}}}on(){Sn=this}off(){Sn=this.parent}stop(e){if(this.active){let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.scopes)for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);if(this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.active=!1}}}function d_(n,e=Sn){e&&e.active&&e.effects.push(n)}const iu=n=>{const e=new Set(n);return e.w=0,e.n=0,e},gp=n=>(n.w&Ai)>0,_p=n=>(n.n&Ai)>0,p_=({deps:n})=>{if(n.length)for(let e=0;e<n.length;e++)n[e].w|=Ai},m_=n=>{const{deps:e}=n;if(e.length){let t=0;for(let i=0;i<e.length;i++){const r=e[i];gp(r)&&!_p(r)?r.delete(n):e[t++]=r,r.w&=~Ai,r.n&=~Ai}e.length=t}},oc=new WeakMap;let Es=0,Ai=1;const lc=30;let cn;const tr=Symbol(""),cc=Symbol("");class ru{constructor(e,t=null,i){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,d_(this,i)}run(){if(!this.active)return this.fn();let e=cn,t=Si;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=cn,cn=this,Si=!0,Ai=1<<++Es,Es<=lc?p_(this):Ju(this),this.fn()}finally{Es<=lc&&m_(this),Ai=1<<--Es,cn=this.parent,Si=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){cn===this?this.deferStop=!0:this.active&&(Ju(this),this.onStop&&this.onStop(),this.active=!1)}}function Ju(n){const{deps:e}=n;if(e.length){for(let t=0;t<e.length;t++)e[t].delete(n);e.length=0}}let Si=!0;const vp=[];function os(){vp.push(Si),Si=!1}function ls(){const n=vp.pop();Si=n===void 0?!0:n}function Wt(n,e,t){if(Si&&cn){let i=oc.get(n);i||oc.set(n,i=new Map);let r=i.get(t);r||i.set(t,r=iu()),xp(r)}}function xp(n,e){let t=!1;Es<=lc?_p(n)||(n.n|=Ai,t=!gp(n)):t=!n.has(cn),t&&(n.add(cn),cn.deps.push(n))}function Kn(n,e,t,i,r,s){const a=oc.get(n);if(!a)return;let o=[];if(e==="clear")o=[...a.values()];else if(t==="length"&&Ue(n))a.forEach((l,c)=>{(c==="length"||c>=i)&&o.push(l)});else switch(t!==void 0&&o.push(a.get(t)),e){case"add":Ue(n)?nu(t)&&o.push(a.get("length")):(o.push(a.get(tr)),Ns(n)&&o.push(a.get(cc)));break;case"delete":Ue(n)||(o.push(a.get(tr)),Ns(n)&&o.push(a.get(cc)));break;case"set":Ns(n)&&o.push(a.get(tr));break}if(o.length===1)o[0]&&uc(o[0]);else{const l=[];for(const c of o)c&&l.push(...c);uc(iu(l))}}function uc(n,e){const t=Ue(n)?n:[...n];for(const i of t)i.computed&&Qu(i);for(const i of t)i.computed||Qu(i)}function Qu(n,e){(n!==cn||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const g_=Kc("__proto__,__v_isRef,__isVue"),yp=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(tu)),__=su(),v_=su(!1,!0),x_=su(!0),ef=y_();function y_(){const n={};return["includes","indexOf","lastIndexOf"].forEach(e=>{n[e]=function(...t){const i=$e(this);for(let s=0,a=this.length;s<a;s++)Wt(i,"get",s+"");const r=i[e](...t);return r===-1||r===!1?i[e](...t.map($e)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{n[e]=function(...t){os();const i=$e(this)[e].apply(this,t);return ls(),i}}),n}function su(n=!1,e=!1){return function(i,r,s){if(r==="__v_isReactive")return!n;if(r==="__v_isReadonly")return n;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&s===(n?e?F_:Tp:e?wp:Sp).get(i))return i;const a=Ue(i);if(!n&&a&&We(ef,r))return Reflect.get(ef,r,s);const o=Reflect.get(i,r,s);return(tu(r)?yp.has(r):g_(r))||(n||Wt(i,"get",r),e)?o:Lt(o)?a&&nu(r)?o:o.value:ct(o)?n?Ep(o):ha(o):o}}const b_=bp(),M_=bp(!0);function bp(n=!1){return function(t,i,r,s){let a=t[i];if($r(a)&&Lt(a)&&!Lt(r))return!1;if(!n&&(!yo(r)&&!$r(r)&&(a=$e(a),r=$e(r)),!Ue(t)&&Lt(a)&&!Lt(r)))return a.value=r,!0;const o=Ue(t)&&nu(i)?Number(i)<t.length:We(t,i),l=Reflect.set(t,i,r,s);return t===$e(s)&&(o?js(r,a)&&Kn(t,"set",i,r):Kn(t,"add",i,r)),l}}function S_(n,e){const t=We(n,e);n[e];const i=Reflect.deleteProperty(n,e);return i&&t&&Kn(n,"delete",e,void 0),i}function w_(n,e){const t=Reflect.has(n,e);return(!tu(e)||!yp.has(e))&&Wt(n,"has",e),t}function T_(n){return Wt(n,"iterate",Ue(n)?"length":tr),Reflect.ownKeys(n)}const Mp={get:__,set:b_,deleteProperty:S_,has:w_,ownKeys:T_},E_={get:x_,set(n,e){return!0},deleteProperty(n,e){return!0}},A_=St({},Mp,{get:v_,set:M_}),au=n=>n,Fo=n=>Reflect.getPrototypeOf(n);function Sa(n,e,t=!1,i=!1){n=n.__v_raw;const r=$e(n),s=$e(e);t||(e!==s&&Wt(r,"get",e),Wt(r,"get",s));const{has:a}=Fo(r),o=i?au:t?cu:Xs;if(a.call(r,e))return o(n.get(e));if(a.call(r,s))return o(n.get(s));n!==r&&n.get(e)}function wa(n,e=!1){const t=this.__v_raw,i=$e(t),r=$e(n);return e||(n!==r&&Wt(i,"has",n),Wt(i,"has",r)),n===r?t.has(n):t.has(n)||t.has(r)}function Ta(n,e=!1){return n=n.__v_raw,!e&&Wt($e(n),"iterate",tr),Reflect.get(n,"size",n)}function tf(n){n=$e(n);const e=$e(this);return Fo(e).has.call(e,n)||(e.add(n),Kn(e,"add",n,n)),this}function nf(n,e){e=$e(e);const t=$e(this),{has:i,get:r}=Fo(t);let s=i.call(t,n);s||(n=$e(n),s=i.call(t,n));const a=r.call(t,n);return t.set(n,e),s?js(e,a)&&Kn(t,"set",n,e):Kn(t,"add",n,e),this}function rf(n){const e=$e(this),{has:t,get:i}=Fo(e);let r=t.call(e,n);r||(n=$e(n),r=t.call(e,n)),i&&i.call(e,n);const s=e.delete(n);return r&&Kn(e,"delete",n,void 0),s}function sf(){const n=$e(this),e=n.size!==0,t=n.clear();return e&&Kn(n,"clear",void 0,void 0),t}function Ea(n,e){return function(i,r){const s=this,a=s.__v_raw,o=$e(a),l=e?au:n?cu:Xs;return!n&&Wt(o,"iterate",tr),a.forEach((c,u)=>i.call(r,l(c),l(u),s))}}function Aa(n,e,t){return function(...i){const r=this.__v_raw,s=$e(r),a=Ns(s),o=n==="entries"||n===Symbol.iterator&&a,l=n==="keys"&&a,c=r[n](...i),u=t?au:e?cu:Xs;return!e&&Wt(s,"iterate",l?cc:tr),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:o?[u(f[0]),u(f[1])]:u(f),done:h}},[Symbol.iterator](){return this}}}}function si(n){return function(...e){return n==="delete"?!1:this}}function C_(){const n={get(s){return Sa(this,s)},get size(){return Ta(this)},has:wa,add:tf,set:nf,delete:rf,clear:sf,forEach:Ea(!1,!1)},e={get(s){return Sa(this,s,!1,!0)},get size(){return Ta(this)},has:wa,add:tf,set:nf,delete:rf,clear:sf,forEach:Ea(!1,!0)},t={get(s){return Sa(this,s,!0)},get size(){return Ta(this,!0)},has(s){return wa.call(this,s,!0)},add:si("add"),set:si("set"),delete:si("delete"),clear:si("clear"),forEach:Ea(!0,!1)},i={get(s){return Sa(this,s,!0,!0)},get size(){return Ta(this,!0)},has(s){return wa.call(this,s,!0)},add:si("add"),set:si("set"),delete:si("delete"),clear:si("clear"),forEach:Ea(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=Aa(s,!1,!1),t[s]=Aa(s,!0,!1),e[s]=Aa(s,!1,!0),i[s]=Aa(s,!0,!0)}),[n,t,e,i]}const[R_,L_,P_,I_]=C_();function ou(n,e){const t=e?n?I_:P_:n?L_:R_;return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(We(t,r)&&r in i?t:i,r,s)}const D_={get:ou(!1,!1)},N_={get:ou(!1,!0)},O_={get:ou(!0,!1)},Sp=new WeakMap,wp=new WeakMap,Tp=new WeakMap,F_=new WeakMap;function k_(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function U_(n){return n.__v_skip||!Object.isExtensible(n)?0:k_(o_(n))}function ha(n){return $r(n)?n:lu(n,!1,Mp,D_,Sp)}function z_(n){return lu(n,!1,A_,N_,wp)}function Ep(n){return lu(n,!0,E_,O_,Tp)}function lu(n,e,t,i,r){if(!ct(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=r.get(n);if(s)return s;const a=U_(n);if(a===0)return n;const o=new Proxy(n,a===2?i:t);return r.set(n,o),o}function Vr(n){return $r(n)?Vr(n.__v_raw):!!(n&&n.__v_isReactive)}function $r(n){return!!(n&&n.__v_isReadonly)}function yo(n){return!!(n&&n.__v_isShallow)}function Ap(n){return Vr(n)||$r(n)}function $e(n){const e=n&&n.__v_raw;return e?$e(e):n}function Cp(n){return xo(n,"__v_skip",!0),n}const Xs=n=>ct(n)?ha(n):n,cu=n=>ct(n)?Ep(n):n;function Rp(n){Si&&cn&&(n=$e(n),xp(n.dep||(n.dep=iu())))}function Lp(n,e){n=$e(n),n.dep&&uc(n.dep)}function Lt(n){return!!(n&&n.__v_isRef===!0)}function B_(n){return Pp(n,!1)}function H_(n){return Pp(n,!0)}function Pp(n,e){return Lt(n)?n:new V_(n,e)}class V_{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:$e(e),this._value=t?e:Xs(e)}get value(){return Rp(this),this._value}set value(e){const t=this.__v_isShallow||yo(e)||$r(e);e=t?e:$e(e),js(e,this._rawValue)&&(this._rawValue=e,this._value=t?e:Xs(e),Lp(this))}}function Gr(n){return Lt(n)?n.value:n}const G_={get:(n,e,t)=>Gr(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return Lt(r)&&!Lt(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function Ip(n){return Vr(n)?n:new Proxy(n,G_)}var Dp;class W_{constructor(e,t,i,r){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this[Dp]=!1,this._dirty=!0,this.effect=new ru(e,()=>{this._dirty||(this._dirty=!0,Lp(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=i}get value(){const e=$e(this);return Rp(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}Dp="__v_isReadonly";function j_(n,e,t=!1){let i,r;const s=Be(n);return s?(i=n,r=gn):(i=n.get,r=n.set),new W_(i,r,s||!r,t)}function wi(n,e,t,i){let r;try{r=i?n(...i):n()}catch(s){ko(s,e,t)}return r}function en(n,e,t,i){if(Be(n)){const s=wi(n,e,t,i);return s&&pp(s)&&s.catch(a=>{ko(a,e,t)}),s}const r=[];for(let s=0;s<n.length;s++)r.push(en(n[s],e,t,i));return r}function ko(n,e,t,i=!0){const r=e?e.vnode:null;if(e){let s=e.parent;const a=e.proxy,o=t;for(;s;){const c=s.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](n,a,o)===!1)return}s=s.parent}const l=e.appContext.config.errorHandler;if(l){wi(l,null,10,[n,a,o]);return}}X_(n,t,r,i)}function X_(n,e,t,i=!0){console.error(n)}let qs=!1,fc=!1;const Rt=[];let En=0;const Wr=[];let Gn=null,Xi=0;const Np=Promise.resolve();let uu=null;function Op(n){const e=uu||Np;return n?e.then(this?n.bind(this):n):e}function q_(n){let e=En+1,t=Rt.length;for(;e<t;){const i=e+t>>>1;$s(Rt[i])<n?e=i+1:t=i}return e}function fu(n){(!Rt.length||!Rt.includes(n,qs&&n.allowRecurse?En+1:En))&&(n.id==null?Rt.push(n):Rt.splice(q_(n.id),0,n),Fp())}function Fp(){!qs&&!fc&&(fc=!0,uu=Np.then(Up))}function $_(n){const e=Rt.indexOf(n);e>En&&Rt.splice(e,1)}function Y_(n){Ue(n)?Wr.push(...n):(!Gn||!Gn.includes(n,n.allowRecurse?Xi+1:Xi))&&Wr.push(n),Fp()}function af(n,e=qs?En+1:0){for(;e<Rt.length;e++){const t=Rt[e];t&&t.pre&&(Rt.splice(e,1),e--,t())}}function kp(n){if(Wr.length){const e=[...new Set(Wr)];if(Wr.length=0,Gn){Gn.push(...e);return}for(Gn=e,Gn.sort((t,i)=>$s(t)-$s(i)),Xi=0;Xi<Gn.length;Xi++)Gn[Xi]();Gn=null,Xi=0}}const $s=n=>n.id==null?1/0:n.id,K_=(n,e)=>{const t=$s(n)-$s(e);if(t===0){if(n.pre&&!e.pre)return-1;if(e.pre&&!n.pre)return 1}return t};function Up(n){fc=!1,qs=!0,Rt.sort(K_);const e=gn;try{for(En=0;En<Rt.length;En++){const t=Rt[En];t&&t.active!==!1&&wi(t,null,14)}}finally{En=0,Rt.length=0,kp(),qs=!1,uu=null,(Rt.length||Wr.length)&&Up()}}function Z_(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||it;let r=t;const s=e.startsWith("update:"),a=s&&e.slice(7);if(a&&a in i){const u=`${a==="modelValue"?"model":a}Modifiers`,{number:f,trim:h}=i[u]||it;h&&(r=t.map(m=>m.trim())),f&&(r=t.map(mp))}let o,l=i[o=ll(e)]||i[o=ll(Rn(e))];!l&&s&&(l=i[o=ll(as(e))]),l&&en(l,n,6,r);const c=i[o+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[o])return;n.emitted[o]=!0,en(c,n,6,r)}}function zp(n,e,t=!1){const i=e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let a={},o=!1;if(!Be(n)){const l=c=>{const u=zp(c,e,!0);u&&(o=!0,St(a,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!o?(ct(n)&&i.set(n,null),null):(Ue(s)?s.forEach(l=>a[l]=null):St(a,s),ct(n)&&i.set(n,a),a)}function Uo(n,e){return!n||!Io(e)?!1:(e=e.slice(2).replace(/Once$/,""),We(n,e[0].toLowerCase()+e.slice(1))||We(n,as(e))||We(n,e))}let fn=null,zo=null;function bo(n){const e=fn;return fn=n,zo=n&&n.type.__scopeId||null,e}function Bo(n){zo=n}function Ho(){zo=null}function uo(n,e=fn,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&_f(-1);const s=bo(e),a=n(...r);return bo(s),i._d&&_f(1),a};return i._n=!0,i._c=!0,i._d=!0,i}function ul(n){const{type:e,vnode:t,proxy:i,withProxy:r,props:s,propsOptions:[a],slots:o,attrs:l,emit:c,render:u,renderCache:f,data:h,setupState:m,ctx:g,inheritAttrs:p}=n;let d,_;const v=bo(n);try{if(t.shapeFlag&4){const x=r||i;d=wn(u.call(x,x,f,s,m,h,g)),_=l}else{const x=e;d=wn(x.length>1?x(s,{attrs:l,slots:o,emit:c}):x(s,null)),_=e.props?l:J_(l)}}catch(x){Fs.length=0,ko(x,n,1),d=pt($n)}let S=d;if(_&&p!==!1){const x=Object.keys(_),{shapeFlag:w}=S;x.length&&w&7&&(a&&x.some(Qc)&&(_=Q_(_,a)),S=Ci(S,_))}return t.dirs&&(S=Ci(S),S.dirs=S.dirs?S.dirs.concat(t.dirs):t.dirs),t.transition&&(S.transition=t.transition),d=S,bo(v),d}const J_=n=>{let e;for(const t in n)(t==="class"||t==="style"||Io(t))&&((e||(e={}))[t]=n[t]);return e},Q_=(n,e)=>{const t={};for(const i in n)(!Qc(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function e0(n,e,t){const{props:i,children:r,component:s}=n,{props:a,children:o,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?of(i,a,c):!!a;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(a[h]!==i[h]&&!Uo(c,h))return!0}}}else return(r||o)&&(!o||!o.$stable)?!0:i===a?!1:i?a?of(i,a,c):!0:!!a;return!1}function of(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==n[s]&&!Uo(t,s))return!0}return!1}function t0({vnode:n,parent:e},t){for(;e&&e.subTree===n;)(n=e.vnode).el=t,e=e.parent}const n0=n=>n.__isSuspense;function i0(n,e){e&&e.pendingBranch?Ue(n)?e.effects.push(...n):e.effects.push(n):Y_(n)}function fo(n,e){if(Mt){let t=Mt.provides;const i=Mt.parent&&Mt.parent.provides;i===t&&(t=Mt.provides=Object.create(i)),t[n]=e}}function Ti(n,e,t=!1){const i=Mt||fn;if(i){const r=i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides;if(r&&n in r)return r[n];if(arguments.length>1)return t&&Be(e)?e.call(i.proxy):e}}const lf={};function Os(n,e,t){return Bp(n,e,t)}function Bp(n,e,{immediate:t,deep:i,flush:r,onTrack:s,onTrigger:a}=it){const o=Mt;let l,c=!1,u=!1;if(Lt(n)?(l=()=>n.value,c=yo(n)):Vr(n)?(l=()=>n,i=!0):Ue(n)?(u=!0,c=n.some(_=>Vr(_)||yo(_)),l=()=>n.map(_=>{if(Lt(_))return _.value;if(Vr(_))return kr(_);if(Be(_))return wi(_,o,2)})):Be(n)?e?l=()=>wi(n,o,2):l=()=>{if(!(o&&o.isUnmounted))return f&&f(),en(n,o,3,[h])}:l=gn,e&&i){const _=l;l=()=>kr(_())}let f,h=_=>{f=d.onStop=()=>{wi(_,o,4)}};if(Js)return h=gn,e?t&&en(e,o,3,[l(),u?[]:void 0,h]):l(),gn;let m=u?[]:lf;const g=()=>{if(!!d.active)if(e){const _=d.run();(i||c||(u?_.some((v,S)=>js(v,m[S])):js(_,m)))&&(f&&f(),en(e,o,3,[_,m===lf?void 0:m,h]),m=_)}else d.run()};g.allowRecurse=!!e;let p;r==="sync"?p=g:r==="post"?p=()=>kt(g,o&&o.suspense):(g.pre=!0,o&&(g.id=o.uid),p=()=>fu(g));const d=new ru(l,p);return e?t?g():m=d.run():r==="post"?kt(d.run.bind(d),o&&o.suspense):d.run(),()=>{d.stop(),o&&o.scope&&eu(o.scope.effects,d)}}function r0(n,e,t){const i=this.proxy,r=Tt(n)?n.includes(".")?Hp(i,n):()=>i[n]:n.bind(i,i);let s;Be(e)?s=e:(s=e.handler,t=e);const a=Mt;Yr(this);const o=Bp(r,s.bind(i),t);return a?Yr(a):nr(),o}function Hp(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}function kr(n,e){if(!ct(n)||n.__v_skip||(e=e||new Set,e.has(n)))return n;if(e.add(n),Lt(n))kr(n.value,e);else if(Ue(n))for(let t=0;t<n.length;t++)kr(n[t],e);else if(s_(n)||Ns(n))n.forEach(t=>{kr(t,e)});else if(l_(n))for(const t in n)kr(n[t],e);return n}function Vp(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return jp(()=>{n.isMounted=!0}),qp(()=>{n.isUnmounting=!0}),n}const $t=[Function,Array],s0={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:$t,onEnter:$t,onAfterEnter:$t,onEnterCancelled:$t,onBeforeLeave:$t,onLeave:$t,onAfterLeave:$t,onLeaveCancelled:$t,onBeforeAppear:$t,onAppear:$t,onAfterAppear:$t,onAppearCancelled:$t},setup(n,{slots:e}){const t=am(),i=Vp();let r;return()=>{const s=e.default&&hu(e.default(),!0);if(!s||!s.length)return;let a=s[0];if(s.length>1){for(const p of s)if(p.type!==$n){a=p;break}}const o=$e(n),{mode:l}=o;if(i.isLeaving)return fl(a);const c=cf(a);if(!c)return fl(a);const u=Ys(c,o,i,t);Ks(c,u);const f=t.subTree,h=f&&cf(f);let m=!1;const{getTransitionKey:g}=c.type;if(g){const p=g();r===void 0?r=p:p!==r&&(r=p,m=!0)}if(h&&h.type!==$n&&(!qi(c,h)||m)){const p=Ys(h,o,i,t);if(Ks(h,p),l==="out-in")return i.isLeaving=!0,p.afterLeave=()=>{i.isLeaving=!1,t.update()},fl(a);l==="in-out"&&c.type!==$n&&(p.delayLeave=(d,_,v)=>{const S=Gp(i,h);S[String(h.key)]=h,d._leaveCb=()=>{_(),d._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=v})}return a}}},a0=s0;function Gp(n,e){const{leavingVNodes:t}=n;let i=t.get(e.type);return i||(i=Object.create(null),t.set(e.type,i)),i}function Ys(n,e,t,i){const{appear:r,mode:s,persisted:a=!1,onBeforeEnter:o,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:f,onLeave:h,onAfterLeave:m,onLeaveCancelled:g,onBeforeAppear:p,onAppear:d,onAfterAppear:_,onAppearCancelled:v}=e,S=String(n.key),x=Gp(t,n),w=(b,A)=>{b&&en(b,i,9,A)},R=(b,A)=>{const F=A[1];w(b,A),Ue(b)?b.every(ee=>ee.length<=1)&&F():b.length<=1&&F()},D={mode:s,persisted:a,beforeEnter(b){let A=o;if(!t.isMounted)if(r)A=p||o;else return;b._leaveCb&&b._leaveCb(!0);const F=x[S];F&&qi(n,F)&&F.el._leaveCb&&F.el._leaveCb(),w(A,[b])},enter(b){let A=l,F=c,ee=u;if(!t.isMounted)if(r)A=d||l,F=_||c,ee=v||u;else return;let X=!1;const H=b._enterCb=U=>{X||(X=!0,U?w(ee,[b]):w(F,[b]),D.delayedLeave&&D.delayedLeave(),b._enterCb=void 0)};A?R(A,[b,H]):H()},leave(b,A){const F=String(n.key);if(b._enterCb&&b._enterCb(!0),t.isUnmounting)return A();w(f,[b]);let ee=!1;const X=b._leaveCb=H=>{ee||(ee=!0,A(),H?w(g,[b]):w(m,[b]),b._leaveCb=void 0,x[F]===n&&delete x[F])};x[F]=n,h?R(h,[b,X]):X()},clone(b){return Ys(b,e,t,i)}};return D}function fl(n){if(Vo(n))return n=Ci(n),n.children=null,n}function cf(n){return Vo(n)?n.children?n.children[0]:void 0:n}function Ks(n,e){n.shapeFlag&6&&n.component?Ks(n.component.subTree,e):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function hu(n,e=!1,t){let i=[],r=0;for(let s=0;s<n.length;s++){let a=n[s];const o=t==null?a.key:String(t)+String(a.key!=null?a.key:s);a.type===Zt?(a.patchFlag&128&&r++,i=i.concat(hu(a.children,e,o))):(e||a.type!==$n)&&i.push(o!=null?Ci(a,{key:o}):a)}if(r>1)for(let s=0;s<i.length;s++)i[s].patchFlag=-2;return i}function da(n){return Be(n)?{setup:n,name:n.name}:n}const ho=n=>!!n.type.__asyncLoader,Vo=n=>n.type.__isKeepAlive;function o0(n,e){Wp(n,"a",e)}function l0(n,e){Wp(n,"da",e)}function Wp(n,e,t=Mt){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(Go(e,i,t),t){let r=t.parent;for(;r&&r.parent;)Vo(r.parent.vnode)&&c0(i,e,t,r),r=r.parent}}function c0(n,e,t,i){const r=Go(e,n,i,!0);$p(()=>{eu(i[e],r)},t)}function Go(n,e,t=Mt,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...a)=>{if(t.isUnmounted)return;os(),Yr(t);const o=en(e,t,n,a);return nr(),ls(),o});return i?r.unshift(s):r.push(s),s}}const ti=n=>(e,t=Mt)=>(!Js||n==="sp")&&Go(n,e,t),u0=ti("bm"),jp=ti("m"),f0=ti("bu"),Xp=ti("u"),qp=ti("bum"),$p=ti("um"),h0=ti("sp"),d0=ti("rtg"),p0=ti("rtc");function m0(n,e=Mt){Go("ec",n,e)}function Oi(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let a=0;a<r.length;a++){const o=r[a];s&&(o.oldValue=s[a].value);let l=o.dir[i];l&&(os(),en(l,t,8,[n.el,o,n,e]),ls())}}const Yp="components";function hc(n,e){return _0(Yp,n,!0,e)||n}const g0=Symbol();function _0(n,e,t=!0,i=!1){const r=fn||Mt;if(r){const s=r.type;if(n===Yp){const o=X0(s,!1);if(o&&(o===e||o===Rn(e)||o===Oo(Rn(e))))return s}const a=uf(r[n]||s[n],e)||uf(r.appContext[n],e);return!a&&i?s:a}}function uf(n,e){return n&&(n[e]||n[Rn(e)]||n[Oo(Rn(e))])}function nC(n,e,t,i){let r;const s=t&&t[i];if(Ue(n)||Tt(n)){r=new Array(n.length);for(let a=0,o=n.length;a<o;a++)r[a]=e(n[a],a,void 0,s&&s[a])}else if(typeof n=="number"){r=new Array(n);for(let a=0;a<n;a++)r[a]=e(a+1,a,void 0,s&&s[a])}else if(ct(n))if(n[Symbol.iterator])r=Array.from(n,(a,o)=>e(a,o,void 0,s&&s[o]));else{const a=Object.keys(n);r=new Array(a.length);for(let o=0,l=a.length;o<l;o++){const c=a[o];r[o]=e(n[c],c,o,s&&s[o])}}else r=[];return t&&(t[i]=r),r}const dc=n=>n?om(n)?_u(n)||n.proxy:dc(n.parent):null,Mo=St(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>dc(n.parent),$root:n=>dc(n.root),$emit:n=>n.emit,$options:n=>du(n),$forceUpdate:n=>n.f||(n.f=()=>fu(n.update)),$nextTick:n=>n.n||(n.n=Op.bind(n.proxy)),$watch:n=>r0.bind(n)}),v0={get({_:n},e){const{ctx:t,setupState:i,data:r,props:s,accessCache:a,type:o,appContext:l}=n;let c;if(e[0]!=="$"){const m=a[e];if(m!==void 0)switch(m){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(i!==it&&We(i,e))return a[e]=1,i[e];if(r!==it&&We(r,e))return a[e]=2,r[e];if((c=n.propsOptions[0])&&We(c,e))return a[e]=3,s[e];if(t!==it&&We(t,e))return a[e]=4,t[e];pc&&(a[e]=0)}}const u=Mo[e];let f,h;if(u)return e==="$attrs"&&Wt(n,"get",e),u(n);if((f=o.__cssModules)&&(f=f[e]))return f;if(t!==it&&We(t,e))return a[e]=4,t[e];if(h=l.config.globalProperties,We(h,e))return h[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return r!==it&&We(r,e)?(r[e]=t,!0):i!==it&&We(i,e)?(i[e]=t,!0):We(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,propsOptions:s}},a){let o;return!!t[a]||n!==it&&We(n,a)||e!==it&&We(e,a)||(o=s[0])&&We(o,a)||We(i,a)||We(Mo,a)||We(r.config.globalProperties,a)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:We(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};let pc=!0;function x0(n){const e=du(n),t=n.proxy,i=n.ctx;pc=!1,e.beforeCreate&&ff(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:a,watch:o,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:m,updated:g,activated:p,deactivated:d,beforeDestroy:_,beforeUnmount:v,destroyed:S,unmounted:x,render:w,renderTracked:R,renderTriggered:D,errorCaptured:b,serverPrefetch:A,expose:F,inheritAttrs:ee,components:X,directives:H,filters:U}=e;if(c&&y0(c,i,null,n.appContext.config.unwrapInjectedRef),a)for(const ie in a){const q=a[ie];Be(q)&&(i[ie]=q.bind(t))}if(r){const ie=r.call(t,t);ct(ie)&&(n.data=ha(ie))}if(pc=!0,s)for(const ie in s){const q=s[ie],z=Be(q)?q.bind(t,t):Be(q.get)?q.get.bind(t,t):gn,W=!Be(q)&&Be(q.set)?q.set.bind(t):gn,me=ot({get:z,set:W});Object.defineProperty(i,ie,{enumerable:!0,configurable:!0,get:()=>me.value,set:ae=>me.value=ae})}if(o)for(const ie in o)Kp(o[ie],i,t,ie);if(l){const ie=Be(l)?l.call(t):l;Reflect.ownKeys(ie).forEach(q=>{fo(q,ie[q])})}u&&ff(u,n,"c");function Z(ie,q){Ue(q)?q.forEach(z=>ie(z.bind(t))):q&&ie(q.bind(t))}if(Z(u0,f),Z(jp,h),Z(f0,m),Z(Xp,g),Z(o0,p),Z(l0,d),Z(m0,b),Z(p0,R),Z(d0,D),Z(qp,v),Z($p,x),Z(h0,A),Ue(F))if(F.length){const ie=n.exposed||(n.exposed={});F.forEach(q=>{Object.defineProperty(ie,q,{get:()=>t[q],set:z=>t[q]=z})})}else n.exposed||(n.exposed={});w&&n.render===gn&&(n.render=w),ee!=null&&(n.inheritAttrs=ee),X&&(n.components=X),H&&(n.directives=H)}function y0(n,e,t=gn,i=!1){Ue(n)&&(n=mc(n));for(const r in n){const s=n[r];let a;ct(s)?"default"in s?a=Ti(s.from||r,s.default,!0):a=Ti(s.from||r):a=Ti(s),Lt(a)&&i?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>a.value,set:o=>a.value=o}):e[r]=a}}function ff(n,e,t){en(Ue(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function Kp(n,e,t,i){const r=i.includes(".")?Hp(t,i):()=>t[i];if(Tt(n)){const s=e[n];Be(s)&&Os(r,s)}else if(Be(n))Os(r,n.bind(t));else if(ct(n))if(Ue(n))n.forEach(s=>Kp(s,e,t,i));else{const s=Be(n.handler)?n.handler.bind(t):e[n.handler];Be(s)&&Os(r,s,n)}}function du(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:a}}=n.appContext,o=s.get(e);let l;return o?l=o:!r.length&&!t&&!i?l=e:(l={},r.length&&r.forEach(c=>So(l,c,a,!0)),So(l,e,a)),ct(e)&&s.set(e,l),l}function So(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&So(n,s,t,!0),r&&r.forEach(a=>So(n,a,t,!0));for(const a in e)if(!(i&&a==="expose")){const o=b0[a]||t&&t[a];n[a]=o?o(n[a],e[a]):e[a]}return n}const b0={data:hf,props:Hi,emits:Hi,methods:Hi,computed:Hi,beforeCreate:Dt,created:Dt,beforeMount:Dt,mounted:Dt,beforeUpdate:Dt,updated:Dt,beforeDestroy:Dt,beforeUnmount:Dt,destroyed:Dt,unmounted:Dt,activated:Dt,deactivated:Dt,errorCaptured:Dt,serverPrefetch:Dt,components:Hi,directives:Hi,watch:S0,provide:hf,inject:M0};function hf(n,e){return e?n?function(){return St(Be(n)?n.call(this,this):n,Be(e)?e.call(this,this):e)}:e:n}function M0(n,e){return Hi(mc(n),mc(e))}function mc(n){if(Ue(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Dt(n,e){return n?[...new Set([].concat(n,e))]:e}function Hi(n,e){return n?St(St(Object.create(null),n),e):e}function S0(n,e){if(!n)return e;if(!e)return n;const t=St(Object.create(null),n);for(const i in e)t[i]=Dt(n[i],e[i]);return t}function w0(n,e,t,i=!1){const r={},s={};xo(s,Xo,1),n.propsDefaults=Object.create(null),Zp(n,e,r,s);for(const a in n.propsOptions[0])a in r||(r[a]=void 0);t?n.props=i?r:z_(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function T0(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:a}}=n,o=$e(r),[l]=n.propsOptions;let c=!1;if((i||a>0)&&!(a&16)){if(a&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(Uo(n.emitsOptions,h))continue;const m=e[h];if(l)if(We(s,h))m!==s[h]&&(s[h]=m,c=!0);else{const g=Rn(h);r[g]=gc(l,o,g,m,n,!1)}else m!==s[h]&&(s[h]=m,c=!0)}}}else{Zp(n,e,r,s)&&(c=!0);let u;for(const f in o)(!e||!We(e,f)&&((u=as(f))===f||!We(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(r[f]=gc(l,o,f,void 0,n,!0)):delete r[f]);if(s!==o)for(const f in s)(!e||!We(e,f)&&!0)&&(delete s[f],c=!0)}c&&Kn(n,"set","$attrs")}function Zp(n,e,t,i){const[r,s]=n.propsOptions;let a=!1,o;if(e)for(let l in e){if(co(l))continue;const c=e[l];let u;r&&We(r,u=Rn(l))?!s||!s.includes(u)?t[u]=c:(o||(o={}))[u]=c:Uo(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,a=!0)}if(s){const l=$e(t),c=o||it;for(let u=0;u<s.length;u++){const f=s[u];t[f]=gc(r,l,f,c[f],n,!We(c,f))}}return a}function gc(n,e,t,i,r,s){const a=n[t];if(a!=null){const o=We(a,"default");if(o&&i===void 0){const l=a.default;if(a.type!==Function&&Be(l)){const{propsDefaults:c}=r;t in c?i=c[t]:(Yr(r),i=c[t]=l.call(null,e),nr())}else i=l}a[0]&&(s&&!o?i=!1:a[1]&&(i===""||i===as(t))&&(i=!0))}return i}function Jp(n,e,t=!1){const i=e.propsCache,r=i.get(n);if(r)return r;const s=n.props,a={},o=[];let l=!1;if(!Be(n)){const u=f=>{l=!0;const[h,m]=Jp(f,e,!0);St(a,h),m&&o.push(...m)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!l)return ct(n)&&i.set(n,Hr),Hr;if(Ue(s))for(let u=0;u<s.length;u++){const f=Rn(s[u]);df(f)&&(a[f]=it)}else if(s)for(const u in s){const f=Rn(u);if(df(f)){const h=s[u],m=a[f]=Ue(h)||Be(h)?{type:h}:h;if(m){const g=gf(Boolean,m.type),p=gf(String,m.type);m[0]=g>-1,m[1]=p<0||g<p,(g>-1||We(m,"default"))&&o.push(f)}}}const c=[a,o];return ct(n)&&i.set(n,c),c}function df(n){return n[0]!=="$"}function pf(n){const e=n&&n.toString().match(/^\s*function (\w+)/);return e?e[1]:n===null?"null":""}function mf(n,e){return pf(n)===pf(e)}function gf(n,e){return Ue(e)?e.findIndex(t=>mf(t,n)):Be(e)&&mf(e,n)?0:-1}const Qp=n=>n[0]==="_"||n==="$stable",pu=n=>Ue(n)?n.map(wn):[wn(n)],E0=(n,e,t)=>{if(e._n)return e;const i=uo((...r)=>pu(e(...r)),t);return i._c=!1,i},em=(n,e,t)=>{const i=n._ctx;for(const r in n){if(Qp(r))continue;const s=n[r];if(Be(s))e[r]=E0(r,s,i);else if(s!=null){const a=pu(s);e[r]=()=>a}}},tm=(n,e)=>{const t=pu(e);n.slots.default=()=>t},A0=(n,e)=>{if(n.vnode.shapeFlag&32){const t=e._;t?(n.slots=$e(e),xo(e,"_",t)):em(e,n.slots={})}else n.slots={},e&&tm(n,e);xo(n.slots,Xo,1)},C0=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,a=it;if(i.shapeFlag&32){const o=e._;o?t&&o===1?s=!1:(St(r,e),!t&&o===1&&delete r._):(s=!e.$stable,em(e,r)),a=e}else e&&(tm(n,e),a={default:1});if(s)for(const o in r)!Qp(o)&&!(o in a)&&delete r[o]};function nm(){return{app:null,config:{isNativeTag:n_,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let R0=0;function L0(n,e){return function(i,r=null){Be(i)||(i=Object.assign({},i)),r!=null&&!ct(r)&&(r=null);const s=nm(),a=new Set;let o=!1;const l=s.app={_uid:R0++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:$0,get config(){return s.config},set config(c){},use(c,...u){return a.has(c)||(c&&Be(c.install)?(a.add(c),c.install(l,...u)):Be(c)&&(a.add(c),c(l,...u))),l},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),l},component(c,u){return u?(s.components[c]=u,l):s.components[c]},directive(c,u){return u?(s.directives[c]=u,l):s.directives[c]},mount(c,u,f){if(!o){const h=pt(i,r);return h.appContext=s,u&&e?e(h,c):n(h,c,f),o=!0,l._container=c,c.__vue_app__=l,_u(h.component)||h.component.proxy}},unmount(){o&&(n(null,l._container),delete l._container.__vue_app__)},provide(c,u){return s.provides[c]=u,l}};return l}}function _c(n,e,t,i,r=!1){if(Ue(n)){n.forEach((h,m)=>_c(h,e&&(Ue(e)?e[m]:e),t,i,r));return}if(ho(i)&&!r)return;const s=i.shapeFlag&4?_u(i.component)||i.component.proxy:i.el,a=r?null:s,{i:o,r:l}=n,c=e&&e.r,u=o.refs===it?o.refs={}:o.refs,f=o.setupState;if(c!=null&&c!==l&&(Tt(c)?(u[c]=null,We(f,c)&&(f[c]=null)):Lt(c)&&(c.value=null)),Be(l))wi(l,o,12,[a,u]);else{const h=Tt(l),m=Lt(l);if(h||m){const g=()=>{if(n.f){const p=h?u[l]:l.value;r?Ue(p)&&eu(p,s):Ue(p)?p.includes(s)||p.push(s):h?(u[l]=[s],We(f,l)&&(f[l]=u[l])):(l.value=[s],n.k&&(u[n.k]=l.value))}else h?(u[l]=a,We(f,l)&&(f[l]=a)):m&&(l.value=a,n.k&&(u[n.k]=a))};a?(g.id=-1,kt(g,t)):g()}}}const kt=i0;function P0(n){return I0(n)}function I0(n,e){const t=f_();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:a,createText:o,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:m=gn,cloneNode:g,insertStaticContent:p}=n,d=(T,L,V,J=null,te=null,ce=null,ue=!1,fe=null,de=!!L.dynamicChildren)=>{if(T===L)return;T&&!qi(T,L)&&(J=le(T),pe(T,te,ce,!0),T=null),L.patchFlag===-2&&(de=!1,L.dynamicChildren=null);const{type:M,ref:y,shapeFlag:N}=L;switch(M){case mu:_(T,L,V,J);break;case $n:v(T,L,V,J);break;case hl:T==null&&S(L,V,J,ue);break;case Zt:H(T,L,V,J,te,ce,ue,fe,de);break;default:N&1?R(T,L,V,J,te,ce,ue,fe,de):N&6?U(T,L,V,J,te,ce,ue,fe,de):(N&64||N&128)&&M.process(T,L,V,J,te,ce,ue,fe,de,he)}y!=null&&te&&_c(y,T&&T.ref,ce,L||T,!L)},_=(T,L,V,J)=>{if(T==null)i(L.el=o(L.children),V,J);else{const te=L.el=T.el;L.children!==T.children&&c(te,L.children)}},v=(T,L,V,J)=>{T==null?i(L.el=l(L.children||""),V,J):L.el=T.el},S=(T,L,V,J)=>{[T.el,T.anchor]=p(T.children,L,V,J,T.el,T.anchor)},x=({el:T,anchor:L},V,J)=>{let te;for(;T&&T!==L;)te=h(T),i(T,V,J),T=te;i(L,V,J)},w=({el:T,anchor:L})=>{let V;for(;T&&T!==L;)V=h(T),r(T),T=V;r(L)},R=(T,L,V,J,te,ce,ue,fe,de)=>{ue=ue||L.type==="svg",T==null?D(L,V,J,te,ce,ue,fe,de):F(T,L,te,ce,ue,fe,de)},D=(T,L,V,J,te,ce,ue,fe)=>{let de,M;const{type:y,props:N,shapeFlag:$,transition:K,patchFlag:oe,dirs:Me}=T;if(T.el&&g!==void 0&&oe===-1)de=T.el=g(T.el);else{if(de=T.el=a(T.type,ce,N&&N.is,N),$&8?u(de,T.children):$&16&&A(T.children,de,null,J,te,ce&&y!=="foreignObject",ue,fe),Me&&Oi(T,null,J,"created"),N){for(const O in N)O!=="value"&&!co(O)&&s(de,O,null,N[O],ce,T.children,J,te,se);"value"in N&&s(de,"value",null,N.value),(M=N.onVnodeBeforeMount)&&yn(M,J,T)}b(de,T,T.scopeId,ue,J)}Me&&Oi(T,null,J,"beforeMount");const C=(!te||te&&!te.pendingBranch)&&K&&!K.persisted;C&&K.beforeEnter(de),i(de,L,V),((M=N&&N.onVnodeMounted)||C||Me)&&kt(()=>{M&&yn(M,J,T),C&&K.enter(de),Me&&Oi(T,null,J,"mounted")},te)},b=(T,L,V,J,te)=>{if(V&&m(T,V),J)for(let ce=0;ce<J.length;ce++)m(T,J[ce]);if(te){let ce=te.subTree;if(L===ce){const ue=te.vnode;b(T,ue,ue.scopeId,ue.slotScopeIds,te.parent)}}},A=(T,L,V,J,te,ce,ue,fe,de=0)=>{for(let M=de;M<T.length;M++){const y=T[M]=fe?xi(T[M]):wn(T[M]);d(null,y,L,V,J,te,ce,ue,fe)}},F=(T,L,V,J,te,ce,ue)=>{const fe=L.el=T.el;let{patchFlag:de,dynamicChildren:M,dirs:y}=L;de|=T.patchFlag&16;const N=T.props||it,$=L.props||it;let K;V&&Fi(V,!1),(K=$.onVnodeBeforeUpdate)&&yn(K,V,L,T),y&&Oi(L,T,V,"beforeUpdate"),V&&Fi(V,!0);const oe=te&&L.type!=="foreignObject";if(M?ee(T.dynamicChildren,M,fe,V,J,oe,ce):ue||z(T,L,fe,null,V,J,oe,ce,!1),de>0){if(de&16)X(fe,L,N,$,V,J,te);else if(de&2&&N.class!==$.class&&s(fe,"class",null,$.class,te),de&4&&s(fe,"style",N.style,$.style,te),de&8){const Me=L.dynamicProps;for(let C=0;C<Me.length;C++){const O=Me[C],_e=N[O],Ee=$[O];(Ee!==_e||O==="value")&&s(fe,O,_e,Ee,te,T.children,V,J,se)}}de&1&&T.children!==L.children&&u(fe,L.children)}else!ue&&M==null&&X(fe,L,N,$,V,J,te);((K=$.onVnodeUpdated)||y)&&kt(()=>{K&&yn(K,V,L,T),y&&Oi(L,T,V,"updated")},J)},ee=(T,L,V,J,te,ce,ue)=>{for(let fe=0;fe<L.length;fe++){const de=T[fe],M=L[fe],y=de.el&&(de.type===Zt||!qi(de,M)||de.shapeFlag&70)?f(de.el):V;d(de,M,y,null,J,te,ce,ue,!0)}},X=(T,L,V,J,te,ce,ue)=>{if(V!==J){for(const fe in J){if(co(fe))continue;const de=J[fe],M=V[fe];de!==M&&fe!=="value"&&s(T,fe,M,de,ue,L.children,te,ce,se)}if(V!==it)for(const fe in V)!co(fe)&&!(fe in J)&&s(T,fe,V[fe],null,ue,L.children,te,ce,se);"value"in J&&s(T,"value",V.value,J.value)}},H=(T,L,V,J,te,ce,ue,fe,de)=>{const M=L.el=T?T.el:o(""),y=L.anchor=T?T.anchor:o("");let{patchFlag:N,dynamicChildren:$,slotScopeIds:K}=L;K&&(fe=fe?fe.concat(K):K),T==null?(i(M,V,J),i(y,V,J),A(L.children,V,y,te,ce,ue,fe,de)):N>0&&N&64&&$&&T.dynamicChildren?(ee(T.dynamicChildren,$,V,te,ce,ue,fe),(L.key!=null||te&&L===te.subTree)&&im(T,L,!0)):z(T,L,V,y,te,ce,ue,fe,de)},U=(T,L,V,J,te,ce,ue,fe,de)=>{L.slotScopeIds=fe,T==null?L.shapeFlag&512?te.ctx.activate(L,V,J,ue,de):Y(L,V,J,te,ce,ue,de):Z(T,L,de)},Y=(T,L,V,J,te,ce,ue)=>{const fe=T.component=H0(T,J,te);if(Vo(T)&&(fe.ctx.renderer=he),V0(fe),fe.asyncDep){if(te&&te.registerDep(fe,ie),!T.el){const de=fe.subTree=pt($n);v(null,de,L,V)}return}ie(fe,T,L,V,te,ce,ue)},Z=(T,L,V)=>{const J=L.component=T.component;if(e0(T,L,V))if(J.asyncDep&&!J.asyncResolved){q(J,L,V);return}else J.next=L,$_(J.update),J.update();else L.el=T.el,J.vnode=L},ie=(T,L,V,J,te,ce,ue)=>{const fe=()=>{if(T.isMounted){let{next:y,bu:N,u:$,parent:K,vnode:oe}=T,Me=y,C;Fi(T,!1),y?(y.el=oe.el,q(T,y,ue)):y=oe,N&&cl(N),(C=y.props&&y.props.onVnodeBeforeUpdate)&&yn(C,K,y,oe),Fi(T,!0);const O=ul(T),_e=T.subTree;T.subTree=O,d(_e,O,f(_e.el),le(_e),T,te,ce),y.el=O.el,Me===null&&t0(T,O.el),$&&kt($,te),(C=y.props&&y.props.onVnodeUpdated)&&kt(()=>yn(C,K,y,oe),te)}else{let y;const{el:N,props:$}=L,{bm:K,m:oe,parent:Me}=T,C=ho(L);if(Fi(T,!1),K&&cl(K),!C&&(y=$&&$.onVnodeBeforeMount)&&yn(y,Me,L),Fi(T,!0),N&&ge){const O=()=>{T.subTree=ul(T),ge(N,T.subTree,T,te,null)};C?L.type.__asyncLoader().then(()=>!T.isUnmounted&&O()):O()}else{const O=T.subTree=ul(T);d(null,O,V,J,T,te,ce),L.el=O.el}if(oe&&kt(oe,te),!C&&(y=$&&$.onVnodeMounted)){const O=L;kt(()=>yn(y,Me,O),te)}(L.shapeFlag&256||Me&&ho(Me.vnode)&&Me.vnode.shapeFlag&256)&&T.a&&kt(T.a,te),T.isMounted=!0,L=V=J=null}},de=T.effect=new ru(fe,()=>fu(M),T.scope),M=T.update=()=>de.run();M.id=T.uid,Fi(T,!0),M()},q=(T,L,V)=>{L.component=T;const J=T.vnode.props;T.vnode=L,T.next=null,T0(T,L.props,J,V),C0(T,L.children,V),os(),af(),ls()},z=(T,L,V,J,te,ce,ue,fe,de=!1)=>{const M=T&&T.children,y=T?T.shapeFlag:0,N=L.children,{patchFlag:$,shapeFlag:K}=L;if($>0){if($&128){me(M,N,V,J,te,ce,ue,fe,de);return}else if($&256){W(M,N,V,J,te,ce,ue,fe,de);return}}K&8?(y&16&&se(M,te,ce),N!==M&&u(V,N)):y&16?K&16?me(M,N,V,J,te,ce,ue,fe,de):se(M,te,ce,!0):(y&8&&u(V,""),K&16&&A(N,V,J,te,ce,ue,fe,de))},W=(T,L,V,J,te,ce,ue,fe,de)=>{T=T||Hr,L=L||Hr;const M=T.length,y=L.length,N=Math.min(M,y);let $;for($=0;$<N;$++){const K=L[$]=de?xi(L[$]):wn(L[$]);d(T[$],K,V,null,te,ce,ue,fe,de)}M>y?se(T,te,ce,!0,!1,N):A(L,V,J,te,ce,ue,fe,de,N)},me=(T,L,V,J,te,ce,ue,fe,de)=>{let M=0;const y=L.length;let N=T.length-1,$=y-1;for(;M<=N&&M<=$;){const K=T[M],oe=L[M]=de?xi(L[M]):wn(L[M]);if(qi(K,oe))d(K,oe,V,null,te,ce,ue,fe,de);else break;M++}for(;M<=N&&M<=$;){const K=T[N],oe=L[$]=de?xi(L[$]):wn(L[$]);if(qi(K,oe))d(K,oe,V,null,te,ce,ue,fe,de);else break;N--,$--}if(M>N){if(M<=$){const K=$+1,oe=K<y?L[K].el:J;for(;M<=$;)d(null,L[M]=de?xi(L[M]):wn(L[M]),V,oe,te,ce,ue,fe,de),M++}}else if(M>$)for(;M<=N;)pe(T[M],te,ce,!0),M++;else{const K=M,oe=M,Me=new Map;for(M=oe;M<=$;M++){const Ne=L[M]=de?xi(L[M]):wn(L[M]);Ne.key!=null&&Me.set(Ne.key,M)}let C,O=0;const _e=$-oe+1;let Ee=!1,we=0;const Le=new Array(_e);for(M=0;M<_e;M++)Le[M]=0;for(M=K;M<=N;M++){const Ne=T[M];if(O>=_e){pe(Ne,te,ce,!0);continue}let P;if(Ne.key!=null)P=Me.get(Ne.key);else for(C=oe;C<=$;C++)if(Le[C-oe]===0&&qi(Ne,L[C])){P=C;break}P===void 0?pe(Ne,te,ce,!0):(Le[P-oe]=M+1,P>=we?we=P:Ee=!0,d(Ne,L[P],V,null,te,ce,ue,fe,de),O++)}const Ie=Ee?D0(Le):Hr;for(C=Ie.length-1,M=_e-1;M>=0;M--){const Ne=oe+M,P=L[Ne],Se=Ne+1<y?L[Ne+1].el:J;Le[M]===0?d(null,P,V,Se,te,ce,ue,fe,de):Ee&&(C<0||M!==Ie[C]?ae(P,V,Se,2):C--)}}},ae=(T,L,V,J,te=null)=>{const{el:ce,type:ue,transition:fe,children:de,shapeFlag:M}=T;if(M&6){ae(T.component.subTree,L,V,J);return}if(M&128){T.suspense.move(L,V,J);return}if(M&64){ue.move(T,L,V,he);return}if(ue===Zt){i(ce,L,V);for(let N=0;N<de.length;N++)ae(de[N],L,V,J);i(T.anchor,L,V);return}if(ue===hl){x(T,L,V);return}if(J!==2&&M&1&&fe)if(J===0)fe.beforeEnter(ce),i(ce,L,V),kt(()=>fe.enter(ce),te);else{const{leave:N,delayLeave:$,afterLeave:K}=fe,oe=()=>i(ce,L,V),Me=()=>{N(ce,()=>{oe(),K&&K()})};$?$(ce,oe,Me):Me()}else i(ce,L,V)},pe=(T,L,V,J=!1,te=!1)=>{const{type:ce,props:ue,ref:fe,children:de,dynamicChildren:M,shapeFlag:y,patchFlag:N,dirs:$}=T;if(fe!=null&&_c(fe,null,V,T,!0),y&256){L.ctx.deactivate(T);return}const K=y&1&&$,oe=!ho(T);let Me;if(oe&&(Me=ue&&ue.onVnodeBeforeUnmount)&&yn(Me,L,T),y&6)k(T.component,V,J);else{if(y&128){T.suspense.unmount(V,J);return}K&&Oi(T,null,L,"beforeUnmount"),y&64?T.type.remove(T,L,V,te,he,J):M&&(ce!==Zt||N>0&&N&64)?se(M,L,V,!1,!0):(ce===Zt&&N&384||!te&&y&16)&&se(de,L,V),J&&Ae(T)}(oe&&(Me=ue&&ue.onVnodeUnmounted)||K)&&kt(()=>{Me&&yn(Me,L,T),K&&Oi(T,null,L,"unmounted")},V)},Ae=T=>{const{type:L,el:V,anchor:J,transition:te}=T;if(L===Zt){G(V,J);return}if(L===hl){w(T);return}const ce=()=>{r(V),te&&!te.persisted&&te.afterLeave&&te.afterLeave()};if(T.shapeFlag&1&&te&&!te.persisted){const{leave:ue,delayLeave:fe}=te,de=()=>ue(V,ce);fe?fe(T.el,ce,de):de()}else ce()},G=(T,L)=>{let V;for(;T!==L;)V=h(T),r(T),T=V;r(L)},k=(T,L,V)=>{const{bum:J,scope:te,update:ce,subTree:ue,um:fe}=T;J&&cl(J),te.stop(),ce&&(ce.active=!1,pe(ue,T,L,V)),fe&&kt(fe,L),kt(()=>{T.isUnmounted=!0},L),L&&L.pendingBranch&&!L.isUnmounted&&T.asyncDep&&!T.asyncResolved&&T.suspenseId===L.pendingId&&(L.deps--,L.deps===0&&L.resolve())},se=(T,L,V,J=!1,te=!1,ce=0)=>{for(let ue=ce;ue<T.length;ue++)pe(T[ue],L,V,J,te)},le=T=>T.shapeFlag&6?le(T.component.subTree):T.shapeFlag&128?T.suspense.next():h(T.anchor||T.el),be=(T,L,V)=>{T==null?L._vnode&&pe(L._vnode,null,null,!0):d(L._vnode||null,T,L,null,null,null,V),af(),kp(),L._vnode=T},he={p:d,um:pe,m:ae,r:Ae,mt:Y,mc:A,pc:z,pbc:ee,n:le,o:n};let Te,ge;return e&&([Te,ge]=e(he)),{render:be,hydrate:Te,createApp:L0(be,Te)}}function Fi({effect:n,update:e},t){n.allowRecurse=e.allowRecurse=t}function im(n,e,t=!1){const i=n.children,r=e.children;if(Ue(i)&&Ue(r))for(let s=0;s<i.length;s++){const a=i[s];let o=r[s];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=r[s]=xi(r[s]),o.el=a.el),t||im(a,o))}}function D0(n){const e=n.slice(),t=[0];let i,r,s,a,o;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(r=t[t.length-1],n[r]<c){e[i]=r,t.push(i);continue}for(s=0,a=t.length-1;s<a;)o=s+a>>1,n[t[o]]<c?s=o+1:a=o;c<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,a=t[s-1];s-- >0;)t[s]=a,a=e[a];return t}const N0=n=>n.__isTeleport,Zt=Symbol(void 0),mu=Symbol(void 0),$n=Symbol(void 0),hl=Symbol(void 0),Fs=[];let hn=null;function Wo(n=!1){Fs.push(hn=n?null:[])}function O0(){Fs.pop(),hn=Fs[Fs.length-1]||null}let Zs=1;function _f(n){Zs+=n}function rm(n){return n.dynamicChildren=Zs>0?hn||Hr:null,O0(),Zs>0&&hn&&hn.push(n),n}function jo(n,e,t,i,r,s){return rm(et(n,e,t,i,r,s,!0))}function iC(n,e,t,i,r){return rm(pt(n,e,t,i,r,!0))}function vc(n){return n?n.__v_isVNode===!0:!1}function qi(n,e){return n.type===e.type&&n.key===e.key}const Xo="__vInternal",sm=({key:n})=>n!=null?n:null,po=({ref:n,ref_key:e,ref_for:t})=>n!=null?Tt(n)||Lt(n)||Be(n)?{i:fn,r:n,k:e,f:!!t}:n:null;function et(n,e=null,t=null,i=0,r=null,s=n===Zt?0:1,a=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&sm(e),ref:e&&po(e),scopeId:zo,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null};return o?(gu(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=Tt(t)?8:16),Zs>0&&!a&&hn&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&hn.push(l),l}const pt=F0;function F0(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===g0)&&(n=$n),vc(n)){const o=Ci(n,e,!0);return t&&gu(o,t),Zs>0&&!s&&hn&&(o.shapeFlag&6?hn[hn.indexOf(n)]=o:hn.push(o)),o.patchFlag|=-2,o}if(q0(n)&&(n=n.__vccOpts),e){e=k0(e);let{class:o,style:l}=e;o&&!Tt(o)&&(e.class=Jc(o)),ct(l)&&(Ap(l)&&!Ue(l)&&(l=St({},l)),e.style=Zc(l))}const a=Tt(n)?1:n0(n)?128:N0(n)?64:ct(n)?4:Be(n)?2:0;return et(n,e,t,i,r,a,s,!0)}function k0(n){return n?Ap(n)||Xo in n?St({},n):n:null}function Ci(n,e,t=!1){const{props:i,ref:r,patchFlag:s,children:a}=n,o=e?U0(i||{},e):i;return{__v_isVNode:!0,__v_skip:!0,type:n.type,props:o,key:o&&sm(o),ref:e&&e.ref?t&&r?Ue(r)?r.concat(po(e)):[r,po(e)]:po(e):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==Zt?s===-1?16:s|16:s,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:n.transition,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Ci(n.ssContent),ssFallback:n.ssFallback&&Ci(n.ssFallback),el:n.el,anchor:n.anchor}}function cs(n=" ",e=0){return pt(mu,null,n,e)}function wn(n){return n==null||typeof n=="boolean"?pt($n):Ue(n)?pt(Zt,null,n.slice()):typeof n=="object"?xi(n):pt(mu,null,String(n))}function xi(n){return n.el===null||n.memo?n:Ci(n)}function gu(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Ue(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),gu(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!(Xo in e)?e._ctx=fn:r===3&&fn&&(fn.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else Be(e)?(e={default:e,_ctx:fn},t=32):(e=String(e),i&64?(t=16,e=[cs(e)]):t=8);n.children=e,n.shapeFlag|=t}function U0(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=Jc([e.class,i.class]));else if(r==="style")e.style=Zc([e.style,i.style]);else if(Io(r)){const s=e[r],a=i[r];a&&s!==a&&!(Ue(s)&&s.includes(a))&&(e[r]=s?[].concat(s,a):a)}else r!==""&&(e[r]=i[r])}return e}function yn(n,e,t,i=null){en(n,e,7,[t,i])}const z0=nm();let B0=0;function H0(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||z0,s={uid:B0++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new h_(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Jp(i,r),emitsOptions:zp(i,r),emit:null,emitted:null,propsDefaults:it,inheritAttrs:i.inheritAttrs,ctx:it,data:it,props:it,attrs:it,slots:it,refs:it,setupState:it,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=Z_.bind(null,s),n.ce&&n.ce(s),s}let Mt=null;const am=()=>Mt||fn,Yr=n=>{Mt=n,n.scope.on()},nr=()=>{Mt&&Mt.scope.off(),Mt=null};function om(n){return n.vnode.shapeFlag&4}let Js=!1;function V0(n,e=!1){Js=e;const{props:t,children:i}=n.vnode,r=om(n);w0(n,t,r,e),A0(n,i);const s=r?G0(n,e):void 0;return Js=!1,s}function G0(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=Cp(new Proxy(n.ctx,v0));const{setup:i}=t;if(i){const r=n.setupContext=i.length>1?j0(n):null;Yr(n),os();const s=wi(i,n,0,[n.props,r]);if(ls(),nr(),pp(s)){if(s.then(nr,nr),e)return s.then(a=>{vf(n,a,e)}).catch(a=>{ko(a,n,0)});n.asyncDep=s}else vf(n,s,e)}else lm(n,e)}function vf(n,e,t){Be(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:ct(e)&&(n.setupState=Ip(e)),lm(n,t)}let xf;function lm(n,e,t){const i=n.type;if(!n.render){if(!e&&xf&&!i.render){const r=i.template||du(n).template;if(r){const{isCustomElement:s,compilerOptions:a}=n.appContext.config,{delimiters:o,compilerOptions:l}=i,c=St(St({isCustomElement:s,delimiters:o},a),l);i.render=xf(r,c)}}n.render=i.render||gn}Yr(n),os(),x0(n),ls(),nr()}function W0(n){return new Proxy(n.attrs,{get(e,t){return Wt(n,"get","$attrs"),e[t]}})}function j0(n){const e=i=>{n.exposed=i||{}};let t;return{get attrs(){return t||(t=W0(n))},slots:n.slots,emit:n.emit,expose:e}}function _u(n){if(n.exposed)return n.exposeProxy||(n.exposeProxy=new Proxy(Ip(Cp(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Mo)return Mo[t](n)}}))}function X0(n,e=!0){return Be(n)?n.displayName||n.name:n.name||e&&n.__name}function q0(n){return Be(n)&&"__vccOpts"in n}const ot=(n,e)=>j_(n,e,Js);function qo(n,e,t){const i=arguments.length;return i===2?ct(e)&&!Ue(e)?vc(e)?pt(n,null,[e]):pt(n,e):pt(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&vc(t)&&(t=[t]),pt(n,e,t))}const $0="3.2.39",Y0="http://www.w3.org/2000/svg",$i=typeof document<"u"?document:null,yf=$i&&$i.createElement("template"),K0={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e?$i.createElementNS(Y0,n):$i.createElement(n,t?{is:t}:void 0);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>$i.createTextNode(n),createComment:n=>$i.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>$i.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},cloneNode(n){const e=n.cloneNode(!0);return"_value"in n&&(e._value=n._value),e},insertStaticContent(n,e,t,i,r,s){const a=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{yf.innerHTML=i?`<svg>${n}</svg>`:n;const o=yf.content;if(i){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}e.insertBefore(o,t)}return[a?a.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}};function Z0(n,e,t){const i=n._vtc;i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}function J0(n,e,t){const i=n.style,r=Tt(t);if(t&&!r){for(const s in t)xc(i,s,t[s]);if(e&&!Tt(e))for(const s in e)t[s]==null&&xc(i,s,"")}else{const s=i.display;r?e!==t&&(i.cssText=t):e&&n.removeAttribute("style"),"_vod"in n&&(i.display=s)}}const bf=/\s*!important$/;function xc(n,e,t){if(Ue(t))t.forEach(i=>xc(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=Q0(n,e);bf.test(t)?n.setProperty(as(i),t.replace(bf,""),"important"):n[i]=t}}const Mf=["Webkit","Moz","ms"],dl={};function Q0(n,e){const t=dl[e];if(t)return t;let i=Rn(e);if(i!=="filter"&&i in n)return dl[e]=i;i=Oo(i);for(let r=0;r<Mf.length;r++){const s=Mf[r]+i;if(s in n)return dl[e]=s}return e}const Sf="http://www.w3.org/1999/xlink";function ev(n,e,t,i,r){if(i&&e.startsWith("xlink:"))t==null?n.removeAttributeNS(Sf,e.slice(6,e.length)):n.setAttributeNS(Sf,e,t);else{const s=Jg(e);t==null||s&&!dp(t)?n.removeAttribute(e):n.setAttribute(e,s?"":t)}}function tv(n,e,t,i,r,s,a){if(e==="innerHTML"||e==="textContent"){i&&a(i,r,s),n[e]=t==null?"":t;return}if(e==="value"&&n.tagName!=="PROGRESS"&&!n.tagName.includes("-")){n._value=t;const l=t==null?"":t;(n.value!==l||n.tagName==="OPTION")&&(n.value=l),t==null&&n.removeAttribute(e);return}let o=!1;if(t===""||t==null){const l=typeof n[e];l==="boolean"?t=dp(t):t==null&&l==="string"?(t="",o=!0):l==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(e)}const[cm,nv]=(()=>{let n=Date.now,e=!1;if(typeof window<"u"){Date.now()>document.createEvent("Event").timeStamp&&(n=performance.now.bind(performance));const t=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(t&&Number(t[1])<=53)}return[n,e]})();let yc=0;const iv=Promise.resolve(),rv=()=>{yc=0},sv=()=>yc||(iv.then(rv),yc=cm());function av(n,e,t,i){n.addEventListener(e,t,i)}function ov(n,e,t,i){n.removeEventListener(e,t,i)}function lv(n,e,t,i,r=null){const s=n._vei||(n._vei={}),a=s[e];if(i&&a)a.value=i;else{const[o,l]=cv(e);if(i){const c=s[e]=uv(i,r);av(n,o,c,l)}else a&&(ov(n,o,a,l),s[e]=void 0)}}const wf=/(?:Once|Passive|Capture)$/;function cv(n){let e;if(wf.test(n)){e={};let i;for(;i=n.match(wf);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):as(n.slice(2)),e]}function uv(n,e){const t=i=>{const r=i.timeStamp||cm();(nv||r>=t.attached-1)&&en(fv(i,t.value),e,5,[i])};return t.value=n,t.attached=sv(),t}function fv(n,e){if(Ue(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const Tf=/^on[a-z]/,hv=(n,e,t,i,r=!1,s,a,o,l)=>{e==="class"?Z0(n,i,r):e==="style"?J0(n,t,i):Io(e)?Qc(e)||lv(n,e,t,i,a):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):dv(n,e,i,r))?tv(n,e,i,s,a,o,l):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),ev(n,e,i,r))};function dv(n,e,t,i){return i?!!(e==="innerHTML"||e==="textContent"||e in n&&Tf.test(e)&&Be(t)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA"||Tf.test(e)&&Tt(t)?!1:e in n}const ai="transition",vs="animation",um={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},pv=St({},a0.props,um),ki=(n,e=[])=>{Ue(n)?n.forEach(t=>t(...e)):n&&n(...e)},Ef=n=>n?Ue(n)?n.some(e=>e.length>1):n.length>1:!1;function mv(n){const e={};for(const X in n)X in um||(e[X]=n[X]);if(n.css===!1)return e;const{name:t="v",type:i,duration:r,enterFromClass:s=`${t}-enter-from`,enterActiveClass:a=`${t}-enter-active`,enterToClass:o=`${t}-enter-to`,appearFromClass:l=s,appearActiveClass:c=a,appearToClass:u=o,leaveFromClass:f=`${t}-leave-from`,leaveActiveClass:h=`${t}-leave-active`,leaveToClass:m=`${t}-leave-to`}=n,g=gv(r),p=g&&g[0],d=g&&g[1],{onBeforeEnter:_,onEnter:v,onEnterCancelled:S,onLeave:x,onLeaveCancelled:w,onBeforeAppear:R=_,onAppear:D=v,onAppearCancelled:b=S}=e,A=(X,H,U)=>{vi(X,H?u:o),vi(X,H?c:a),U&&U()},F=(X,H)=>{X._isLeaving=!1,vi(X,f),vi(X,m),vi(X,h),H&&H()},ee=X=>(H,U)=>{const Y=X?D:v,Z=()=>A(H,X,U);ki(Y,[H,Z]),Af(()=>{vi(H,X?l:s),Vn(H,X?u:o),Ef(Y)||Cf(H,i,p,Z)})};return St(e,{onBeforeEnter(X){ki(_,[X]),Vn(X,s),Vn(X,a)},onBeforeAppear(X){ki(R,[X]),Vn(X,l),Vn(X,c)},onEnter:ee(!1),onAppear:ee(!0),onLeave(X,H){X._isLeaving=!0;const U=()=>F(X,H);Vn(X,f),hm(),Vn(X,h),Af(()=>{!X._isLeaving||(vi(X,f),Vn(X,m),Ef(x)||Cf(X,i,d,U))}),ki(x,[X,U])},onEnterCancelled(X){A(X,!1),ki(S,[X])},onAppearCancelled(X){A(X,!0),ki(b,[X])},onLeaveCancelled(X){F(X),ki(w,[X])}})}function gv(n){if(n==null)return null;if(ct(n))return[pl(n.enter),pl(n.leave)];{const e=pl(n);return[e,e]}}function pl(n){return mp(n)}function Vn(n,e){e.split(/\s+/).forEach(t=>t&&n.classList.add(t)),(n._vtc||(n._vtc=new Set)).add(e)}function vi(n,e){e.split(/\s+/).forEach(i=>i&&n.classList.remove(i));const{_vtc:t}=n;t&&(t.delete(e),t.size||(n._vtc=void 0))}function Af(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let _v=0;function Cf(n,e,t,i){const r=n._endId=++_v,s=()=>{r===n._endId&&i()};if(t)return setTimeout(s,t);const{type:a,timeout:o,propCount:l}=fm(n,e);if(!a)return i();const c=a+"end";let u=0;const f=()=>{n.removeEventListener(c,h),s()},h=m=>{m.target===n&&++u>=l&&f()};setTimeout(()=>{u<l&&f()},o+1),n.addEventListener(c,h)}function fm(n,e){const t=window.getComputedStyle(n),i=g=>(t[g]||"").split(", "),r=i(ai+"Delay"),s=i(ai+"Duration"),a=Rf(r,s),o=i(vs+"Delay"),l=i(vs+"Duration"),c=Rf(o,l);let u=null,f=0,h=0;e===ai?a>0&&(u=ai,f=a,h=s.length):e===vs?c>0&&(u=vs,f=c,h=l.length):(f=Math.max(a,c),u=f>0?a>c?ai:vs:null,h=u?u===ai?s.length:l.length:0);const m=u===ai&&/\b(transform|all)(,|$)/.test(t[ai+"Property"]);return{type:u,timeout:f,propCount:h,hasTransform:m}}function Rf(n,e){for(;n.length<e.length;)n=n.concat(n);return Math.max(...e.map((t,i)=>Lf(t)+Lf(n[i])))}function Lf(n){return Number(n.slice(0,-1).replace(",","."))*1e3}function hm(){return document.body.offsetHeight}const dm=new WeakMap,pm=new WeakMap,vv={name:"TransitionGroup",props:St({},pv,{tag:String,moveClass:String}),setup(n,{slots:e}){const t=am(),i=Vp();let r,s;return Xp(()=>{if(!r.length)return;const a=n.moveClass||`${n.name||"v"}-move`;if(!Mv(r[0].el,t.vnode.el,a))return;r.forEach(xv),r.forEach(yv);const o=r.filter(bv);hm(),o.forEach(l=>{const c=l.el,u=c.style;Vn(c,a),u.transform=u.webkitTransform=u.transitionDuration="";const f=c._moveCb=h=>{h&&h.target!==c||(!h||/transform$/.test(h.propertyName))&&(c.removeEventListener("transitionend",f),c._moveCb=null,vi(c,a))};c.addEventListener("transitionend",f)})}),()=>{const a=$e(n),o=mv(a);let l=a.tag||Zt;r=s,s=e.default?hu(e.default()):[];for(let c=0;c<s.length;c++){const u=s[c];u.key!=null&&Ks(u,Ys(u,o,i,t))}if(r)for(let c=0;c<r.length;c++){const u=r[c];Ks(u,Ys(u,o,i,t)),dm.set(u,u.el.getBoundingClientRect())}return pt(l,null,s)}}},rC=vv;function xv(n){const e=n.el;e._moveCb&&e._moveCb(),e._enterCb&&e._enterCb()}function yv(n){pm.set(n,n.el.getBoundingClientRect())}function bv(n){const e=dm.get(n),t=pm.get(n),i=e.left-t.left,r=e.top-t.top;if(i||r){const s=n.el.style;return s.transform=s.webkitTransform=`translate(${i}px,${r}px)`,s.transitionDuration="0s",n}}function Mv(n,e,t){const i=n.cloneNode();n._vtc&&n._vtc.forEach(a=>{a.split(/\s+/).forEach(o=>o&&i.classList.remove(o))}),t.split(/\s+/).forEach(a=>a&&i.classList.add(a)),i.style.display="none";const r=e.nodeType===1?e:e.parentNode;r.appendChild(i);const{hasTransform:s}=fm(i);return r.removeChild(i),s}const Sv=St({patchProp:hv},K0);let Pf;function wv(){return Pf||(Pf=P0(Sv))}const Tv=(...n)=>{const e=wv().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=Ev(i);if(!r)return;const s=e._component;!Be(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.innerHTML="";const a=t(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),a},e};function Ev(n){return Tt(n)?document.querySelector(n):n}/*!
  * vue-router v4.1.5
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Nr=typeof window<"u";function Av(n){return n.__esModule||n[Symbol.toStringTag]==="Module"}const Je=Object.assign;function ml(n,e){const t={};for(const i in e){const r=e[i];t[i]=vn(r)?r.map(n):n(r)}return t}const ks=()=>{},vn=Array.isArray,Cv=/\/$/,Rv=n=>n.replace(Cv,"");function gl(n,e,t="/"){let i,r={},s="",a="";const o=e.indexOf("#");let l=e.indexOf("?");return o<l&&o>=0&&(l=-1),l>-1&&(i=e.slice(0,l),s=e.slice(l+1,o>-1?o:e.length),r=n(s)),o>-1&&(i=i||e.slice(0,o),a=e.slice(o,e.length)),i=Dv(i!=null?i:e,t),{fullPath:i+(s&&"?")+s+a,path:i,query:r,hash:a}}function Lv(n,e){const t=e.query?n(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function If(n,e){return!e||!n.toLowerCase().startsWith(e.toLowerCase())?n:n.slice(e.length)||"/"}function Pv(n,e,t){const i=e.matched.length-1,r=t.matched.length-1;return i>-1&&i===r&&Kr(e.matched[i],t.matched[r])&&mm(e.params,t.params)&&n(e.query)===n(t.query)&&e.hash===t.hash}function Kr(n,e){return(n.aliasOf||n)===(e.aliasOf||e)}function mm(n,e){if(Object.keys(n).length!==Object.keys(e).length)return!1;for(const t in n)if(!Iv(n[t],e[t]))return!1;return!0}function Iv(n,e){return vn(n)?Df(n,e):vn(e)?Df(e,n):n===e}function Df(n,e){return vn(e)?n.length===e.length&&n.every((t,i)=>t===e[i]):n.length===1&&n[0]===e}function Dv(n,e){if(n.startsWith("/"))return n;if(!n)return e;const t=e.split("/"),i=n.split("/");let r=t.length-1,s,a;for(s=0;s<i.length;s++)if(a=i[s],a!==".")if(a==="..")r>1&&r--;else break;return t.slice(0,r).join("/")+"/"+i.slice(s-(s===i.length?1:0)).join("/")}var Qs;(function(n){n.pop="pop",n.push="push"})(Qs||(Qs={}));var Us;(function(n){n.back="back",n.forward="forward",n.unknown=""})(Us||(Us={}));function Nv(n){if(!n)if(Nr){const e=document.querySelector("base");n=e&&e.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),Rv(n)}const Ov=/^[^#]+#/;function Fv(n,e){return n.replace(Ov,"#")+e}function kv(n,e){const t=document.documentElement.getBoundingClientRect(),i=n.getBoundingClientRect();return{behavior:e.behavior,left:i.left-t.left-(e.left||0),top:i.top-t.top-(e.top||0)}}const $o=()=>({left:window.pageXOffset,top:window.pageYOffset});function Uv(n){let e;if("el"in n){const t=n.el,i=typeof t=="string"&&t.startsWith("#"),r=typeof t=="string"?i?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!r)return;e=kv(r,n)}else e=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Nf(n,e){return(history.state?history.state.position-e:-1)+n}const bc=new Map;function zv(n,e){bc.set(n,e)}function Bv(n){const e=bc.get(n);return bc.delete(n),e}let Hv=()=>location.protocol+"//"+location.host;function gm(n,e){const{pathname:t,search:i,hash:r}=e,s=n.indexOf("#");if(s>-1){let o=r.includes(n.slice(s))?n.slice(s).length:1,l=r.slice(o);return l[0]!=="/"&&(l="/"+l),If(l,"")}return If(t,n)+i+r}function Vv(n,e,t,i){let r=[],s=[],a=null;const o=({state:h})=>{const m=gm(n,location),g=t.value,p=e.value;let d=0;if(h){if(t.value=m,e.value=h,a&&a===g){a=null;return}d=p?h.position-p.position:0}else i(m);r.forEach(_=>{_(t.value,g,{delta:d,type:Qs.pop,direction:d?d>0?Us.forward:Us.back:Us.unknown})})};function l(){a=t.value}function c(h){r.push(h);const m=()=>{const g=r.indexOf(h);g>-1&&r.splice(g,1)};return s.push(m),m}function u(){const{history:h}=window;!h.state||h.replaceState(Je({},h.state,{scroll:$o()}),"")}function f(){for(const h of s)h();s=[],window.removeEventListener("popstate",o),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",o),window.addEventListener("beforeunload",u),{pauseListeners:l,listen:c,destroy:f}}function Of(n,e,t,i=!1,r=!1){return{back:n,current:e,forward:t,replaced:i,position:window.history.length,scroll:r?$o():null}}function Gv(n){const{history:e,location:t}=window,i={value:gm(n,t)},r={value:e.state};r.value||s(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(l,c,u){const f=n.indexOf("#"),h=f>-1?(t.host&&document.querySelector("base")?n:n.slice(f))+l:Hv()+n+l;try{e[u?"replaceState":"pushState"](c,"",h),r.value=c}catch(m){console.error(m),t[u?"replace":"assign"](h)}}function a(l,c){const u=Je({},e.state,Of(r.value.back,l,r.value.forward,!0),c,{position:r.value.position});s(l,u,!0),i.value=l}function o(l,c){const u=Je({},r.value,e.state,{forward:l,scroll:$o()});s(u.current,u,!0);const f=Je({},Of(i.value,l,null),{position:u.position+1},c);s(l,f,!1),i.value=l}return{location:i,state:r,push:o,replace:a}}function Wv(n){n=Nv(n);const e=Gv(n),t=Vv(n,e.state,e.location,e.replace);function i(s,a=!0){a||t.pauseListeners(),history.go(s)}const r=Je({location:"",base:n,go:i,createHref:Fv.bind(null,n)},e,t);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function jv(n){return typeof n=="string"||n&&typeof n=="object"}function _m(n){return typeof n=="string"||typeof n=="symbol"}const oi={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},vm=Symbol("");var Ff;(function(n){n[n.aborted=4]="aborted",n[n.cancelled=8]="cancelled",n[n.duplicated=16]="duplicated"})(Ff||(Ff={}));function Zr(n,e){return Je(new Error,{type:n,[vm]:!0},e)}function Nn(n,e){return n instanceof Error&&vm in n&&(e==null||!!(n.type&e))}const kf="[^/]+?",Xv={sensitive:!1,strict:!1,start:!0,end:!0},qv=/[.+*?^${}()[\]/\\]/g;function $v(n,e){const t=Je({},Xv,e),i=[];let r=t.start?"^":"";const s=[];for(const c of n){const u=c.length?[]:[90];t.strict&&!c.length&&(r+="/");for(let f=0;f<c.length;f++){const h=c[f];let m=40+(t.sensitive?.25:0);if(h.type===0)f||(r+="/"),r+=h.value.replace(qv,"\\$&"),m+=40;else if(h.type===1){const{value:g,repeatable:p,optional:d,regexp:_}=h;s.push({name:g,repeatable:p,optional:d});const v=_||kf;if(v!==kf){m+=10;try{new RegExp(`(${v})`)}catch(x){throw new Error(`Invalid custom RegExp for param "${g}" (${v}): `+x.message)}}let S=p?`((?:${v})(?:/(?:${v}))*)`:`(${v})`;f||(S=d&&c.length<2?`(?:/${S})`:"/"+S),d&&(S+="?"),r+=S,m+=20,d&&(m+=-8),p&&(m+=-20),v===".*"&&(m+=-50)}u.push(m)}i.push(u)}if(t.strict&&t.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}t.strict||(r+="/?"),t.end?r+="$":t.strict&&(r+="(?:/|$)");const a=new RegExp(r,t.sensitive?"":"i");function o(c){const u=c.match(a),f={};if(!u)return null;for(let h=1;h<u.length;h++){const m=u[h]||"",g=s[h-1];f[g.name]=m&&g.repeatable?m.split("/"):m}return f}function l(c){let u="",f=!1;for(const h of n){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const m of h)if(m.type===0)u+=m.value;else if(m.type===1){const{value:g,repeatable:p,optional:d}=m,_=g in c?c[g]:"";if(vn(_)&&!p)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const v=vn(_)?_.join("/"):_;if(!v)if(d)h.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${g}"`);u+=v}}return u||"/"}return{re:a,score:i,keys:s,parse:o,stringify:l}}function Yv(n,e){let t=0;for(;t<n.length&&t<e.length;){const i=e[t]-n[t];if(i)return i;t++}return n.length<e.length?n.length===1&&n[0]===40+40?-1:1:n.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function Kv(n,e){let t=0;const i=n.score,r=e.score;for(;t<i.length&&t<r.length;){const s=Yv(i[t],r[t]);if(s)return s;t++}if(Math.abs(r.length-i.length)===1){if(Uf(i))return 1;if(Uf(r))return-1}return r.length-i.length}function Uf(n){const e=n[n.length-1];return n.length>0&&e[e.length-1]<0}const Zv={type:0,value:""},Jv=/[a-zA-Z0-9_]/;function Qv(n){if(!n)return[[]];if(n==="/")return[[Zv]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function e(m){throw new Error(`ERR (${t})/"${c}": ${m}`)}let t=0,i=t;const r=[];let s;function a(){s&&r.push(s),s=[]}let o=0,l,c="",u="";function f(){!c||(t===0?s.push({type:0,value:c}):t===1||t===2||t===3?(s.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function h(){c+=l}for(;o<n.length;){if(l=n[o++],l==="\\"&&t!==2){i=t,t=4;continue}switch(t){case 0:l==="/"?(c&&f(),a()):l===":"?(f(),t=1):h();break;case 4:h(),t=i;break;case 1:l==="("?t=2:Jv.test(l)?h():(f(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&o--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:t=3:u+=l;break;case 3:f(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&o--,u="";break;default:e("Unknown state");break}}return t===2&&e(`Unfinished custom RegExp for param "${c}"`),f(),a(),r}function ex(n,e,t){const i=$v(Qv(n.path),t),r=Je(i,{record:n,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function tx(n,e){const t=[],i=new Map;e=Hf({strict:!1,end:!0,sensitive:!1},e);function r(u){return i.get(u)}function s(u,f,h){const m=!h,g=nx(u);g.aliasOf=h&&h.record;const p=Hf(e,u),d=[g];if("alias"in u){const S=typeof u.alias=="string"?[u.alias]:u.alias;for(const x of S)d.push(Je({},g,{components:h?h.record.components:g.components,path:x,aliasOf:h?h.record:g}))}let _,v;for(const S of d){const{path:x}=S;if(f&&x[0]!=="/"){const w=f.record.path,R=w[w.length-1]==="/"?"":"/";S.path=f.record.path+(x&&R+x)}if(_=ex(S,f,p),h?h.alias.push(_):(v=v||_,v!==_&&v.alias.push(_),m&&u.name&&!Bf(_)&&a(u.name)),g.children){const w=g.children;for(let R=0;R<w.length;R++)s(w[R],_,h&&h.children[R])}h=h||_,l(_)}return v?()=>{a(v)}:ks}function a(u){if(_m(u)){const f=i.get(u);f&&(i.delete(u),t.splice(t.indexOf(f),1),f.children.forEach(a),f.alias.forEach(a))}else{const f=t.indexOf(u);f>-1&&(t.splice(f,1),u.record.name&&i.delete(u.record.name),u.children.forEach(a),u.alias.forEach(a))}}function o(){return t}function l(u){let f=0;for(;f<t.length&&Kv(u,t[f])>=0&&(u.record.path!==t[f].record.path||!xm(u,t[f]));)f++;t.splice(f,0,u),u.record.name&&!Bf(u)&&i.set(u.record.name,u)}function c(u,f){let h,m={},g,p;if("name"in u&&u.name){if(h=i.get(u.name),!h)throw Zr(1,{location:u});p=h.record.name,m=Je(zf(f.params,h.keys.filter(v=>!v.optional).map(v=>v.name)),u.params&&zf(u.params,h.keys.map(v=>v.name))),g=h.stringify(m)}else if("path"in u)g=u.path,h=t.find(v=>v.re.test(g)),h&&(m=h.parse(g),p=h.record.name);else{if(h=f.name?i.get(f.name):t.find(v=>v.re.test(f.path)),!h)throw Zr(1,{location:u,currentLocation:f});p=h.record.name,m=Je({},f.params,u.params),g=h.stringify(m)}const d=[];let _=h;for(;_;)d.unshift(_.record),_=_.parent;return{name:p,path:g,params:m,matched:d,meta:rx(d)}}return n.forEach(u=>s(u)),{addRoute:s,resolve:c,removeRoute:a,getRoutes:o,getRecordMatcher:r}}function zf(n,e){const t={};for(const i of e)i in n&&(t[i]=n[i]);return t}function nx(n){return{path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:void 0,beforeEnter:n.beforeEnter,props:ix(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}}}function ix(n){const e={},t=n.props||!1;if("component"in n)e.default=t;else for(const i in n.components)e[i]=typeof t=="boolean"?t:t[i];return e}function Bf(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function rx(n){return n.reduce((e,t)=>Je(e,t.meta),{})}function Hf(n,e){const t={};for(const i in n)t[i]=i in e?e[i]:n[i];return t}function xm(n,e){return e.children.some(t=>t===n||xm(n,t))}const ym=/#/g,sx=/&/g,ax=/\//g,ox=/=/g,lx=/\?/g,bm=/\+/g,cx=/%5B/g,ux=/%5D/g,Mm=/%5E/g,fx=/%60/g,Sm=/%7B/g,hx=/%7C/g,wm=/%7D/g,dx=/%20/g;function vu(n){return encodeURI(""+n).replace(hx,"|").replace(cx,"[").replace(ux,"]")}function px(n){return vu(n).replace(Sm,"{").replace(wm,"}").replace(Mm,"^")}function Mc(n){return vu(n).replace(bm,"%2B").replace(dx,"+").replace(ym,"%23").replace(sx,"%26").replace(fx,"`").replace(Sm,"{").replace(wm,"}").replace(Mm,"^")}function mx(n){return Mc(n).replace(ox,"%3D")}function gx(n){return vu(n).replace(ym,"%23").replace(lx,"%3F")}function _x(n){return n==null?"":gx(n).replace(ax,"%2F")}function wo(n){try{return decodeURIComponent(""+n)}catch{}return""+n}function vx(n){const e={};if(n===""||n==="?")return e;const i=(n[0]==="?"?n.slice(1):n).split("&");for(let r=0;r<i.length;++r){const s=i[r].replace(bm," "),a=s.indexOf("="),o=wo(a<0?s:s.slice(0,a)),l=a<0?null:wo(s.slice(a+1));if(o in e){let c=e[o];vn(c)||(c=e[o]=[c]),c.push(l)}else e[o]=l}return e}function Vf(n){let e="";for(let t in n){const i=n[t];if(t=mx(t),i==null){i!==void 0&&(e+=(e.length?"&":"")+t);continue}(vn(i)?i.map(s=>s&&Mc(s)):[i&&Mc(i)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+t,s!=null&&(e+="="+s))})}return e}function xx(n){const e={};for(const t in n){const i=n[t];i!==void 0&&(e[t]=vn(i)?i.map(r=>r==null?null:""+r):i==null?i:""+i)}return e}const yx=Symbol(""),Gf=Symbol(""),xu=Symbol(""),Tm=Symbol(""),Sc=Symbol("");function xs(){let n=[];function e(i){return n.push(i),()=>{const r=n.indexOf(i);r>-1&&n.splice(r,1)}}function t(){n=[]}return{add:e,list:()=>n,reset:t}}function yi(n,e,t,i,r){const s=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise((a,o)=>{const l=f=>{f===!1?o(Zr(4,{from:t,to:e})):f instanceof Error?o(f):jv(f)?o(Zr(2,{from:e,to:f})):(s&&i.enterCallbacks[r]===s&&typeof f=="function"&&s.push(f),a())},c=n.call(i&&i.instances[r],e,t,l);let u=Promise.resolve(c);n.length<3&&(u=u.then(l)),u.catch(f=>o(f))})}function _l(n,e,t,i){const r=[];for(const s of n)for(const a in s.components){let o=s.components[a];if(!(e!=="beforeRouteEnter"&&!s.instances[a]))if(bx(o)){const c=(o.__vccOpts||o)[e];c&&r.push(yi(c,t,i,s,a))}else{let l=o();r.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${s.path}"`));const u=Av(c)?c.default:c;s.components[a]=u;const h=(u.__vccOpts||u)[e];return h&&yi(h,t,i,s,a)()}))}}return r}function bx(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function Wf(n){const e=Ti(xu),t=Ti(Tm),i=ot(()=>e.resolve(Gr(n.to))),r=ot(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],f=t.matched;if(!u||!f.length)return-1;const h=f.findIndex(Kr.bind(null,u));if(h>-1)return h;const m=jf(l[c-2]);return c>1&&jf(u)===m&&f[f.length-1].path!==m?f.findIndex(Kr.bind(null,l[c-2])):h}),s=ot(()=>r.value>-1&&Tx(t.params,i.value.params)),a=ot(()=>r.value>-1&&r.value===t.matched.length-1&&mm(t.params,i.value.params));function o(l={}){return wx(l)?e[Gr(n.replace)?"replace":"push"](Gr(n.to)).catch(ks):Promise.resolve()}return{route:i,href:ot(()=>i.value.href),isActive:s,isExactActive:a,navigate:o}}const Mx=da({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Wf,setup(n,{slots:e}){const t=ha(Wf(n)),{options:i}=Ti(xu),r=ot(()=>({[Xf(n.activeClass,i.linkActiveClass,"router-link-active")]:t.isActive,[Xf(n.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const s=e.default&&e.default(t);return n.custom?s:qo("a",{"aria-current":t.isExactActive?n.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:r.value},s)}}}),Sx=Mx;function wx(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const e=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return n.preventDefault&&n.preventDefault(),!0}}function Tx(n,e){for(const t in e){const i=e[t],r=n[t];if(typeof i=="string"){if(i!==r)return!1}else if(!vn(r)||r.length!==i.length||i.some((s,a)=>s!==r[a]))return!1}return!0}function jf(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const Xf=(n,e,t)=>n!=null?n:e!=null?e:t,Ex=da({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:e,slots:t}){const i=Ti(Sc),r=ot(()=>n.route||i.value),s=Ti(Gf,0),a=ot(()=>{let c=Gr(s);const{matched:u}=r.value;let f;for(;(f=u[c])&&!f.components;)c++;return c}),o=ot(()=>r.value.matched[a.value]);fo(Gf,ot(()=>a.value+1)),fo(yx,o),fo(Sc,r);const l=B_();return Os(()=>[l.value,o.value,n.name],([c,u,f],[h,m,g])=>{u&&(u.instances[f]=c,m&&m!==u&&c&&c===h&&(u.leaveGuards.size||(u.leaveGuards=m.leaveGuards),u.updateGuards.size||(u.updateGuards=m.updateGuards))),c&&u&&(!m||!Kr(u,m)||!h)&&(u.enterCallbacks[f]||[]).forEach(p=>p(c))},{flush:"post"}),()=>{const c=r.value,u=n.name,f=o.value,h=f&&f.components[u];if(!h)return qf(t.default,{Component:h,route:c});const m=f.props[u],g=m?m===!0?c.params:typeof m=="function"?m(c):m:null,d=qo(h,Je({},g,e,{onVnodeUnmounted:_=>{_.component.isUnmounted&&(f.instances[u]=null)},ref:l}));return qf(t.default,{Component:d,route:c})||d}}});function qf(n,e){if(!n)return null;const t=n(e);return t.length===1?t[0]:t}const Em=Ex;function Ax(n){const e=tx(n.routes,n),t=n.parseQuery||vx,i=n.stringifyQuery||Vf,r=n.history,s=xs(),a=xs(),o=xs(),l=H_(oi);let c=oi;Nr&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=ml.bind(null,G=>""+G),f=ml.bind(null,_x),h=ml.bind(null,wo);function m(G,k){let se,le;return _m(G)?(se=e.getRecordMatcher(G),le=k):le=G,e.addRoute(le,se)}function g(G){const k=e.getRecordMatcher(G);k&&e.removeRoute(k)}function p(){return e.getRoutes().map(G=>G.record)}function d(G){return!!e.getRecordMatcher(G)}function _(G,k){if(k=Je({},k||l.value),typeof G=="string"){const ge=gl(t,G,k.path),T=e.resolve({path:ge.path},k),L=r.createHref(ge.fullPath);return Je(ge,T,{params:h(T.params),hash:wo(ge.hash),redirectedFrom:void 0,href:L})}let se;if("path"in G)se=Je({},G,{path:gl(t,G.path,k.path).path});else{const ge=Je({},G.params);for(const T in ge)ge[T]==null&&delete ge[T];se=Je({},G,{params:f(G.params)}),k.params=f(k.params)}const le=e.resolve(se,k),be=G.hash||"";le.params=u(h(le.params));const he=Lv(i,Je({},G,{hash:px(be),path:le.path})),Te=r.createHref(he);return Je({fullPath:he,hash:be,query:i===Vf?xx(G.query):G.query||{}},le,{redirectedFrom:void 0,href:Te})}function v(G){return typeof G=="string"?gl(t,G,l.value.path):Je({},G)}function S(G,k){if(c!==G)return Zr(8,{from:k,to:G})}function x(G){return D(G)}function w(G){return x(Je(v(G),{replace:!0}))}function R(G){const k=G.matched[G.matched.length-1];if(k&&k.redirect){const{redirect:se}=k;let le=typeof se=="function"?se(G):se;return typeof le=="string"&&(le=le.includes("?")||le.includes("#")?le=v(le):{path:le},le.params={}),Je({query:G.query,hash:G.hash,params:"path"in le?{}:G.params},le)}}function D(G,k){const se=c=_(G),le=l.value,be=G.state,he=G.force,Te=G.replace===!0,ge=R(se);if(ge)return D(Je(v(ge),{state:typeof ge=="object"?Je({},be,ge.state):be,force:he,replace:Te}),k||se);const T=se;T.redirectedFrom=k;let L;return!he&&Pv(i,le,se)&&(L=Zr(16,{to:T,from:le}),W(le,le,!0,!1)),(L?Promise.resolve(L):A(T,le)).catch(V=>Nn(V)?Nn(V,2)?V:z(V):ie(V,T,le)).then(V=>{if(V){if(Nn(V,2))return D(Je({replace:Te},v(V.to),{state:typeof V.to=="object"?Je({},be,V.to.state):be,force:he}),k||T)}else V=ee(T,le,!0,Te,be);return F(T,le,V),V})}function b(G,k){const se=S(G,k);return se?Promise.reject(se):Promise.resolve()}function A(G,k){let se;const[le,be,he]=Cx(G,k);se=_l(le.reverse(),"beforeRouteLeave",G,k);for(const ge of le)ge.leaveGuards.forEach(T=>{se.push(yi(T,G,k))});const Te=b.bind(null,G,k);return se.push(Te),_r(se).then(()=>{se=[];for(const ge of s.list())se.push(yi(ge,G,k));return se.push(Te),_r(se)}).then(()=>{se=_l(be,"beforeRouteUpdate",G,k);for(const ge of be)ge.updateGuards.forEach(T=>{se.push(yi(T,G,k))});return se.push(Te),_r(se)}).then(()=>{se=[];for(const ge of G.matched)if(ge.beforeEnter&&!k.matched.includes(ge))if(vn(ge.beforeEnter))for(const T of ge.beforeEnter)se.push(yi(T,G,k));else se.push(yi(ge.beforeEnter,G,k));return se.push(Te),_r(se)}).then(()=>(G.matched.forEach(ge=>ge.enterCallbacks={}),se=_l(he,"beforeRouteEnter",G,k),se.push(Te),_r(se))).then(()=>{se=[];for(const ge of a.list())se.push(yi(ge,G,k));return se.push(Te),_r(se)}).catch(ge=>Nn(ge,8)?ge:Promise.reject(ge))}function F(G,k,se){for(const le of o.list())le(G,k,se)}function ee(G,k,se,le,be){const he=S(G,k);if(he)return he;const Te=k===oi,ge=Nr?history.state:{};se&&(le||Te?r.replace(G.fullPath,Je({scroll:Te&&ge&&ge.scroll},be)):r.push(G.fullPath,be)),l.value=G,W(G,k,se,Te),z()}let X;function H(){X||(X=r.listen((G,k,se)=>{if(!Ae.listening)return;const le=_(G),be=R(le);if(be){D(Je(be,{replace:!0}),le).catch(ks);return}c=le;const he=l.value;Nr&&zv(Nf(he.fullPath,se.delta),$o()),A(le,he).catch(Te=>Nn(Te,12)?Te:Nn(Te,2)?(D(Te.to,le).then(ge=>{Nn(ge,20)&&!se.delta&&se.type===Qs.pop&&r.go(-1,!1)}).catch(ks),Promise.reject()):(se.delta&&r.go(-se.delta,!1),ie(Te,le,he))).then(Te=>{Te=Te||ee(le,he,!1),Te&&(se.delta&&!Nn(Te,8)?r.go(-se.delta,!1):se.type===Qs.pop&&Nn(Te,20)&&r.go(-1,!1)),F(le,he,Te)}).catch(ks)}))}let U=xs(),Y=xs(),Z;function ie(G,k,se){z(G);const le=Y.list();return le.length?le.forEach(be=>be(G,k,se)):console.error(G),Promise.reject(G)}function q(){return Z&&l.value!==oi?Promise.resolve():new Promise((G,k)=>{U.add([G,k])})}function z(G){return Z||(Z=!G,H(),U.list().forEach(([k,se])=>G?se(G):k()),U.reset()),G}function W(G,k,se,le){const{scrollBehavior:be}=n;if(!Nr||!be)return Promise.resolve();const he=!se&&Bv(Nf(G.fullPath,0))||(le||!se)&&history.state&&history.state.scroll||null;return Op().then(()=>be(G,k,he)).then(Te=>Te&&Uv(Te)).catch(Te=>ie(Te,G,k))}const me=G=>r.go(G);let ae;const pe=new Set,Ae={currentRoute:l,listening:!0,addRoute:m,removeRoute:g,hasRoute:d,getRoutes:p,resolve:_,options:n,push:x,replace:w,go:me,back:()=>me(-1),forward:()=>me(1),beforeEach:s.add,beforeResolve:a.add,afterEach:o.add,onError:Y.add,isReady:q,install(G){const k=this;G.component("RouterLink",Sx),G.component("RouterView",Em),G.config.globalProperties.$router=k,Object.defineProperty(G.config.globalProperties,"$route",{enumerable:!0,get:()=>Gr(l)}),Nr&&!ae&&l.value===oi&&(ae=!0,x(r.location).catch(be=>{}));const se={};for(const be in oi)se[be]=ot(()=>l.value[be]);G.provide(xu,k),G.provide(Tm,ha(se)),G.provide(Sc,l);const le=G.unmount;pe.add(G),G.unmount=function(){pe.delete(G),pe.size<1&&(c=oi,X&&X(),X=null,l.value=oi,ae=!1,Z=!1),le()}}};return Ae}function _r(n){return n.reduce((e,t)=>e.then(()=>t()),Promise.resolve())}function Cx(n,e){const t=[],i=[],r=[],s=Math.max(e.matched.length,n.matched.length);for(let a=0;a<s;a++){const o=e.matched[a];o&&(n.matched.find(c=>Kr(c,o))?i.push(o):t.push(o));const l=n.matched[a];l&&(e.matched.find(c=>Kr(c,l))||r.push(l))}return[t,i,r]}const Yo=(n,e)=>{const t=n.__vccOpts||n;for(const[i,r]of e)t[i]=r;return t},Rx={name:"HeaderComponent"},Lx=n=>(Bo("data-v-5583bfc1"),n=n(),Ho(),n),Px={class:"wrapper"},Ix=Lx(()=>et("div",{class:"profile-wrapper"},[et("a",{href:"https://github.com/gustavo-tomas/MyPortfolio",target:"_blank",class:"soc-link",title:"Source code"},[et("div",{class:"profile-image"})]),et("div",{class:"profile-name"},"Gustavo Tom\xE1s")],-1)),Dx={class:"socials-wrapper"},Nx={href:"https://github.com/gustavo-tomas/",target:"_blank",class:"soc-link"},Ox={href:"https://t.me/gustavo_tomas",target:"_blank",class:"soc-link"},Fx={href:"mailto:guga.tomas10@gmail.com",target:"_blank",class:"soc-link"},kx={href:"https://www.linkedin.com/in/gustavo-tom%C3%A1s-373560212/",target:"_blank",class:"soc-link"},Ux={class:"sections-wrapper"},zx=cs("HOME"),Bx=cs("PROJECTS"),Hx=cs("RENDERS");function Vx(n,e,t,i,r,s){const a=hc("font-awesome-icon"),o=hc("RouterLink");return Wo(),jo("header",null,[et("div",Px,[et("nav",null,[Ix,et("div",Dx,[et("a",Nx,[pt(a,{icon:"fa-brands fa-github",class:"fa-icon"})]),et("a",Ox,[pt(a,{icon:"fa-brands fa-telegram",class:"fa-icon"})]),et("a",Fx,[pt(a,{icon:"fa-brands fa-square-google-plus",class:"fa-icon"})]),et("a",kx,[pt(a,{icon:"fa-brands fa-linkedin",class:"fa-icon"})])])]),et("div",Ux,[pt(o,{class:"router-link",to:"/"},{default:uo(()=>[zx]),_:1}),pt(o,{class:"router-link",to:"/projects"},{default:uo(()=>[Bx]),_:1}),pt(o,{class:"router-link",to:"/renders"},{default:uo(()=>[Hx]),_:1})])])])}const Gx=Yo(Rx,[["render",Vx],["__scopeId","data-v-5583bfc1"]]);/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const yu="145",vr={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},xr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Wx=0,$f=1,jx=2,Am=1,Xx=2,As=3,ar=0,tn=1,Xn=2,Ei=0,jr=1,Yf=2,Kf=3,Zf=4,qx=5,Or=100,$x=101,Yx=102,Jf=103,Qf=104,Kx=200,Zx=201,Jx=202,Qx=203,Cm=204,Rm=205,ey=206,ty=207,ny=208,iy=209,ry=210,sy=0,ay=1,oy=2,wc=3,ly=4,cy=5,uy=6,fy=7,Lm=0,hy=1,dy=2,Yn=0,py=1,my=2,gy=3,_y=4,vy=5,Pm=300,Jr=301,Qr=302,Tc=303,Ec=304,Ko=306,es=1e3,Jt=1001,To=1002,wt=1003,Ac=1004,Cc=1005,Ut=1006,Im=1007,us=1008,or=1009,xy=1010,yy=1011,Dm=1012,by=1013,Ki=1014,bi=1015,ea=1016,My=1017,Sy=1018,Xr=1020,wy=1021,Ty=1022,dn=1023,Ey=1024,Ay=1025,ir=1026,ts=1027,Cy=1028,Ry=1029,Ly=1030,Py=1031,Iy=1033,vl=33776,xl=33777,yl=33778,bl=33779,eh=35840,th=35841,nh=35842,ih=35843,Dy=36196,rh=37492,sh=37496,ah=37808,oh=37809,lh=37810,ch=37811,uh=37812,fh=37813,hh=37814,dh=37815,ph=37816,mh=37817,gh=37818,_h=37819,vh=37820,xh=37821,yh=36492,ta=2300,ns=2301,Ml=2302,bh=2400,Mh=2401,Sh=2402,Ny=2500,Oy=1,Nm=2,lr=3e3,Ke=3001,Fy=3200,ky=3201,bu=0,Uy=1,Wn="srgb",Zi="srgb-linear",Sl=7680,zy=519,Rc=35044,wh="300 es",Lc=1035;class hr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Et=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Th=1234567;const zs=Math.PI/180,na=180/Math.PI;function _n(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Et[n&255]+Et[n>>8&255]+Et[n>>16&255]+Et[n>>24&255]+"-"+Et[e&255]+Et[e>>8&255]+"-"+Et[e>>16&15|64]+Et[e>>24&255]+"-"+Et[t&63|128]+Et[t>>8&255]+"-"+Et[t>>16&255]+Et[t>>24&255]+Et[i&255]+Et[i>>8&255]+Et[i>>16&255]+Et[i>>24&255]).toLowerCase()}function Ct(n,e,t){return Math.max(e,Math.min(t,n))}function Mu(n,e){return(n%e+e)%e}function By(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function Hy(n,e,t){return n!==e?(t-n)/(e-n):0}function Bs(n,e,t){return(1-t)*n+t*e}function Vy(n,e,t,i){return Bs(n,e,1-Math.exp(-t*i))}function Gy(n,e=1){return e-Math.abs(Mu(n,e*2)-e)}function Wy(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function jy(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Xy(n,e){return n+Math.floor(Math.random()*(e-n+1))}function qy(n,e){return n+Math.random()*(e-n)}function $y(n){return n*(.5-Math.random())}function Yy(n){n!==void 0&&(Th=n);let e=Th+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Ky(n){return n*zs}function Zy(n){return n*na}function Pc(n){return(n&n-1)===0&&n!==0}function Om(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Eo(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Jy(n,e,t,i,r){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+i)/2),u=a((e+i)/2),f=s((e-i)/2),h=a((e-i)/2),m=s((i-e)/2),g=a((i-e)/2);switch(r){case"XYX":n.set(o*u,l*f,l*h,o*c);break;case"YZY":n.set(l*h,o*u,l*f,o*c);break;case"ZXZ":n.set(l*f,l*h,o*u,o*c);break;case"XZX":n.set(o*u,l*g,l*m,o*c);break;case"YXY":n.set(l*m,o*u,l*g,o*c);break;case"ZYZ":n.set(l*g,l*m,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function qn(n,e){switch(e.constructor){case Float32Array:return n;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function tt(n,e){switch(e.constructor){case Float32Array:return n;case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var Qy=Object.freeze({__proto__:null,DEG2RAD:zs,RAD2DEG:na,generateUUID:_n,clamp:Ct,euclideanModulo:Mu,mapLinear:By,inverseLerp:Hy,lerp:Bs,damp:Vy,pingpong:Gy,smoothstep:Wy,smootherstep:jy,randInt:Xy,randFloat:qy,randFloatSpread:$y,seededRandom:Yy,degToRad:Ky,radToDeg:Zy,isPowerOfTwo:Pc,ceilPowerOfTwo:Om,floorPowerOfTwo:Eo,setQuaternionFromProperEuler:Jy,normalize:tt,denormalize:qn});class Oe{constructor(e=0,t=0){Oe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Qt{constructor(){Qt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,i,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],m=i[5],g=i[8],p=r[0],d=r[3],_=r[6],v=r[1],S=r[4],x=r[7],w=r[2],R=r[5],D=r[8];return s[0]=a*p+o*v+l*w,s[3]=a*d+o*S+l*R,s[6]=a*_+o*x+l*D,s[1]=c*p+u*v+f*w,s[4]=c*d+u*S+f*R,s[7]=c*_+u*x+f*D,s[2]=h*p+m*v+g*w,s[5]=h*d+m*S+g*R,s[8]=h*_+m*x+g*D,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*s*u+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*a-o*c,h=o*l-u*s,m=c*s-a*l,g=t*f+i*h+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const p=1/g;return e[0]=f*p,e[1]=(r*c-u*i)*p,e[2]=(o*i-r*a)*p,e[3]=h*p,e[4]=(u*t-r*l)*p,e[5]=(r*s-o*t)*p,e[6]=m*p,e[7]=(i*l-c*t)*p,e[8]=(a*t-i*s)*p,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=t,i[4]*=t,i[7]*=t,this}rotate(e){const t=Math.cos(e),i=Math.sin(e),r=this.elements,s=r[0],a=r[3],o=r[6],l=r[1],c=r[4],u=r[7];return r[0]=t*s+i*l,r[3]=t*a+i*c,r[6]=t*o+i*u,r[1]=-i*s+t*l,r[4]=-i*a+t*c,r[7]=-i*o+t*u,this}translate(e,t){const i=this.elements;return i[0]+=e*i[2],i[3]+=e*i[5],i[6]+=e*i[8],i[1]+=t*i[2],i[4]+=t*i[5],i[7]+=t*i[8],this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}function Fm(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function ia(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function rr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function mo(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const wl={[Wn]:{[Zi]:rr},[Zi]:{[Wn]:mo}},rn={legacyMode:!0,get workingColorSpace(){return Zi},set workingColorSpace(n){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(n,e,t){if(this.legacyMode||e===t||!e||!t)return n;if(wl[e]&&wl[e][t]!==void 0){const i=wl[e][t];return n.r=i(n.r),n.g=i(n.g),n.b=i(n.b),n}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)}},km={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_t={r:0,g:0,b:0},sn={h:0,s:0,l:0},Ca={h:0,s:0,l:0};function Tl(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}function Ra(n,e){return e.r=n.r,e.g=n.g,e.b=n.b,e}class Fe{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&i===void 0?this.set(e):this.setRGB(e,t,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Wn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,rn.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=Zi){return this.r=e,this.g=t,this.b=i,rn.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=Zi){if(e=Mu(e,1),t=Ct(t,0,1),i=Ct(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=Tl(a,s,e+1/3),this.g=Tl(a,s,e),this.b=Tl(a,s,e-1/3)}return rn.toWorkingColorSpace(this,r),this}setStyle(e,t=Wn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,rn.toWorkingColorSpace(this,t),i(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,rn.toWorkingColorSpace(this,t),i(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){const l=parseFloat(s[1])/360,c=parseFloat(s[2])/100,u=parseFloat(s[3])/100;return i(s[4]),this.setHSL(l,c,u,t)}break}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,rn.toWorkingColorSpace(this,t),this;if(a===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,rn.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=Wn){const i=km[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=rr(e.r),this.g=rr(e.g),this.b=rr(e.b),this}copyLinearToSRGB(e){return this.r=mo(e.r),this.g=mo(e.g),this.b=mo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Wn){return rn.fromWorkingColorSpace(Ra(this,_t),e),Ct(_t.r*255,0,255)<<16^Ct(_t.g*255,0,255)<<8^Ct(_t.b*255,0,255)<<0}getHexString(e=Wn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Zi){rn.fromWorkingColorSpace(Ra(this,_t),t);const i=_t.r,r=_t.g,s=_t.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Zi){return rn.fromWorkingColorSpace(Ra(this,_t),t),e.r=_t.r,e.g=_t.g,e.b=_t.b,e}getStyle(e=Wn){return rn.fromWorkingColorSpace(Ra(this,_t),e),e!==Wn?`color(${e} ${_t.r} ${_t.g} ${_t.b})`:`rgb(${_t.r*255|0},${_t.g*255|0},${_t.b*255|0})`}offsetHSL(e,t,i){return this.getHSL(sn),sn.h+=e,sn.s+=t,sn.l+=i,this.setHSL(sn.h,sn.s,sn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(sn),e.getHSL(Ca);const i=Bs(sn.h,Ca.h,t),r=Bs(sn.s,Ca.s,t),s=Bs(sn.l,Ca.l,t);return this.setHSL(i,r,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Fe.NAMES=km;let yr;class Um{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{yr===void 0&&(yr=ia("canvas")),yr.width=e.width,yr.height=e.height;const i=yr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=yr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ia("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=rr(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(rr(t[i]/255)*255):t[i]=rr(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class zm{constructor(e=null){this.isSource=!0,this.uuid=_n(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(El(r[a].image)):s.push(El(r[a]))}else s=El(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function El(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Um.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let eb=0;class Ot extends hr{constructor(e=Ot.DEFAULT_IMAGE,t=Ot.DEFAULT_MAPPING,i=Jt,r=Jt,s=Ut,a=us,o=dn,l=or,c=1,u=lr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:eb++}),this.uuid=_n(),this.name="",this.source=new zm(e),this.mipmaps=[],this.mapping=t,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Oe(0,0),this.repeat=new Oe(1,1),this.center=new Oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Pm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case es:e.x=e.x-Math.floor(e.x);break;case Jt:e.x=e.x<0?0:1;break;case To:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case es:e.y=e.y-Math.floor(e.y);break;case Jt:e.y=e.y<0?0:1;break;case To:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Ot.DEFAULT_IMAGE=null;Ot.DEFAULT_MAPPING=Pm;class nt{constructor(e=0,t=0,i=0,r=1){nt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],m=l[5],g=l[9],p=l[2],d=l[6],_=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-p)<.01&&Math.abs(g-d)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+p)<.1&&Math.abs(g+d)<.1&&Math.abs(c+m+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(c+1)/2,x=(m+1)/2,w=(_+1)/2,R=(u+h)/4,D=(f+p)/4,b=(g+d)/4;return S>x&&S>w?S<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(S),r=R/i,s=D/i):x>w?x<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),i=R/r,s=b/r):w<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(w),i=D/s,r=b/s),this.set(i,r,s,t),this}let v=Math.sqrt((d-g)*(d-g)+(f-p)*(f-p)+(h-u)*(h-u));return Math.abs(v)<.001&&(v=1),this.x=(d-g)/v,this.y=(f-p)/v,this.z=(h-u)/v,this.w=Math.acos((c+m+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ri extends hr{constructor(e,t,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new nt(0,0,e,t),this.scissorTest=!1,this.viewport=new nt(0,0,e,t);const r={width:e,height:t,depth:1};this.texture=new Ot(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Ut,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new zm(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Bm extends Ot{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=wt,this.minFilter=wt,this.wrapR=Jt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class tb extends Ot{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=wt,this.minFilter=wt,this.wrapR=Jt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ln{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const h=s[a+0],m=s[a+1],g=s[a+2],p=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(o===1){e[t+0]=h,e[t+1]=m,e[t+2]=g,e[t+3]=p;return}if(f!==p||l!==h||c!==m||u!==g){let d=1-o;const _=l*h+c*m+u*g+f*p,v=_>=0?1:-1,S=1-_*_;if(S>Number.EPSILON){const w=Math.sqrt(S),R=Math.atan2(w,_*v);d=Math.sin(d*R)/w,o=Math.sin(o*R)/w}const x=o*v;if(l=l*d+h*x,c=c*d+m*x,u=u*d+g*x,f=f*d+p*x,d===1-o){const w=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=w,c*=w,u*=w,f*=w}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[a],h=s[a+1],m=s[a+2],g=s[a+3];return e[t]=o*g+u*f+l*m-c*h,e[t+1]=l*g+u*h+c*f-o*m,e[t+2]=c*g+u*m+o*h-l*f,e[t+3]=u*g-o*f-l*h-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),f=o(s/2),h=l(i/2),m=l(r/2),g=l(s/2);switch(a){case"XYZ":this._x=h*u*f+c*m*g,this._y=c*m*f-h*u*g,this._z=c*u*g+h*m*f,this._w=c*u*f-h*m*g;break;case"YXZ":this._x=h*u*f+c*m*g,this._y=c*m*f-h*u*g,this._z=c*u*g-h*m*f,this._w=c*u*f+h*m*g;break;case"ZXY":this._x=h*u*f-c*m*g,this._y=c*m*f+h*u*g,this._z=c*u*g+h*m*f,this._w=c*u*f-h*m*g;break;case"ZYX":this._x=h*u*f-c*m*g,this._y=c*m*f+h*u*g,this._z=c*u*g-h*m*f,this._w=c*u*f+h*m*g;break;case"YZX":this._x=h*u*f+c*m*g,this._y=c*m*f+h*u*g,this._z=c*u*g-h*m*f,this._w=c*u*f-h*m*g;break;case"XZY":this._x=h*u*f-c*m*g,this._y=c*m*f-h*u*g,this._z=c*u*g+h*m*f,this._w=c*u*f+h*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=i+o+f;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(a-r)*m}else if(i>o&&i>f){const m=2*Math.sqrt(1+i-o-f);this._w=(u-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+c)/m}else if(o>f){const m=2*Math.sqrt(1+o-i-f);this._w=(s-c)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+f-i-o);this._w=(a-r)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ct(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-i*c,this._z=s*u+a*c+i*l-r*o,this._w=a*u-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-t;return this._w=m*a+t*this._w,this._x=m*i+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),f=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=a*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,t=0,i=0){I.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Eh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Eh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=l*t+a*r-o*i,u=l*i+o*t-s*r,f=l*r+s*i-a*t,h=-s*t-a*i-o*r;return this.x=c*l+h*-s+u*-o-f*-a,this.y=u*l+h*-a+f*-s-c*-o,this.z=f*l+h*-o+c*-a-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Al.copy(this).projectOnVector(e),this.sub(Al)}reflect(e){return this.sub(Al.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ct(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Al=new I,Eh=new Ln;class fs{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,i=1/0,r=1/0,s=-1/0,a=-1/0,o=-1/0;for(let l=0,c=e.length;l<c;l+=3){const u=e[l],f=e[l+1],h=e[l+2];u<t&&(t=u),f<i&&(i=f),h<r&&(r=h),u>s&&(s=u),f>a&&(a=f),h>o&&(o=h)}return this.min.set(t,i,r),this.max.set(s,a,o),this}setFromBufferAttribute(e){let t=1/0,i=1/0,r=1/0,s=-1/0,a=-1/0,o=-1/0;for(let l=0,c=e.count;l<c;l++){const u=e.getX(l),f=e.getY(l),h=e.getZ(l);u<t&&(t=u),f<i&&(i=f),h<r&&(r=h),u>s&&(s=u),f>a&&(a=f),h>o&&(o=h)}return this.min.set(t,i,r),this.max.set(s,a,o),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Ui.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0)if(t&&i.attributes!=null&&i.attributes.position!==void 0){const s=i.attributes.position;for(let a=0,o=s.count;a<o;a++)Ui.fromBufferAttribute(s,a).applyMatrix4(e.matrixWorld),this.expandByPoint(Ui)}else i.boundingBox===null&&i.computeBoundingBox(),Cl.copy(i.boundingBox),Cl.applyMatrix4(e.matrixWorld),this.union(Cl);const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Ui),Ui.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ys),La.subVectors(this.max,ys),br.subVectors(e.a,ys),Mr.subVectors(e.b,ys),Sr.subVectors(e.c,ys),li.subVectors(Mr,br),ci.subVectors(Sr,Mr),zi.subVectors(br,Sr);let t=[0,-li.z,li.y,0,-ci.z,ci.y,0,-zi.z,zi.y,li.z,0,-li.x,ci.z,0,-ci.x,zi.z,0,-zi.x,-li.y,li.x,0,-ci.y,ci.x,0,-zi.y,zi.x,0];return!Rl(t,br,Mr,Sr,La)||(t=[1,0,0,0,1,0,0,0,1],!Rl(t,br,Mr,Sr,La))?!1:(Pa.crossVectors(li,ci),t=[Pa.x,Pa.y,Pa.z],Rl(t,br,Mr,Sr,La))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Ui.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(Ui).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(On[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),On[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),On[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),On[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),On[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),On[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),On[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),On[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(On),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const On=[new I,new I,new I,new I,new I,new I,new I,new I],Ui=new I,Cl=new fs,br=new I,Mr=new I,Sr=new I,li=new I,ci=new I,zi=new I,ys=new I,La=new I,Pa=new I,Bi=new I;function Rl(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){Bi.fromArray(n,s);const o=r.x*Math.abs(Bi.x)+r.y*Math.abs(Bi.y)+r.z*Math.abs(Bi.z),l=e.dot(Bi),c=t.dot(Bi),u=i.dot(Bi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const nb=new fs,Ah=new I,Ia=new I,Ll=new I;class hs{constructor(e=new I,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):nb.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ll.subVectors(e,this.center);const t=Ll.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.add(Ll.multiplyScalar(r/i)),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?Ia.set(0,0,1).multiplyScalar(e.radius):Ia.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(Ah.copy(e.center).add(Ia)),this.expandByPoint(Ah.copy(e.center).sub(Ia)),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Fn=new I,Pl=new I,Da=new I,ui=new I,Il=new I,Na=new I,Dl=new I;class Su{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Fn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(i).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Fn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Fn.copy(this.direction).multiplyScalar(t).add(this.origin),Fn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Pl.copy(e).add(t).multiplyScalar(.5),Da.copy(t).sub(e).normalize(),ui.copy(this.origin).sub(Pl);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Da),o=ui.dot(this.direction),l=-ui.dot(Da),c=ui.lengthSq(),u=Math.abs(1-a*a);let f,h,m,g;if(u>0)if(f=a*l-o,h=a*o-l,g=s*u,f>=0)if(h>=-g)if(h<=g){const p=1/u;f*=p,h*=p,m=f*(f+a*h+2*o)+h*(a*f+h+2*l)+c}else h=s,f=Math.max(0,-(a*h+o)),m=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(a*h+o)),m=-f*f+h*(h+2*l)+c;else h<=-g?(f=Math.max(0,-(-a*s+o)),h=f>0?-s:Math.min(Math.max(-s,-l),s),m=-f*f+h*(h+2*l)+c):h<=g?(f=0,h=Math.min(Math.max(-s,-l),s),m=h*(h+2*l)+c):(f=Math.max(0,-(a*s+o)),h=f>0?s:Math.min(Math.max(-s,-l),s),m=-f*f+h*(h+2*l)+c);else h=a>0?-s:s,f=Math.max(0,-(a*h+o)),m=-f*f+h*(h+2*l)+c;return i&&i.copy(this.direction).multiplyScalar(f).add(this.origin),r&&r.copy(Da).multiplyScalar(h).add(Pl),m}intersectSphere(e,t){Fn.subVectors(e.center,this.origin);const i=Fn.dot(this.direction),r=Fn.dot(Fn)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return o<0&&l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),i>a||s>r||((s>i||i!==i)&&(i=s),(a<r||r!==r)&&(r=a),f>=0?(o=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(o=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Fn)!==null}intersectTriangle(e,t,i,r,s){Il.subVectors(t,e),Na.subVectors(i,e),Dl.crossVectors(Il,Na);let a=this.direction.dot(Dl),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ui.subVectors(this.origin,e);const l=o*this.direction.dot(Na.crossVectors(ui,Na));if(l<0)return null;const c=o*this.direction.dot(Il.cross(ui));if(c<0||l+c>a)return null;const u=-o*ui.dot(Dl);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class je{constructor(){je.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,i,r,s,a,o,l,c,u,f,h,m,g,p,d){const _=this.elements;return _[0]=e,_[4]=t,_[8]=i,_[12]=r,_[1]=s,_[5]=a,_[9]=o,_[13]=l,_[2]=c,_[6]=u,_[10]=f,_[14]=h,_[3]=m,_[7]=g,_[11]=p,_[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new je().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/wr.setFromMatrixColumn(e,0).length(),s=1/wr.setFromMatrixColumn(e,1).length(),a=1/wr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=a*u,m=a*f,g=o*u,p=o*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=m+g*c,t[5]=h-p*c,t[9]=-o*l,t[2]=p-h*c,t[6]=g+m*c,t[10]=a*l}else if(e.order==="YXZ"){const h=l*u,m=l*f,g=c*u,p=c*f;t[0]=h+p*o,t[4]=g*o-m,t[8]=a*c,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=m*o-g,t[6]=p+h*o,t[10]=a*l}else if(e.order==="ZXY"){const h=l*u,m=l*f,g=c*u,p=c*f;t[0]=h-p*o,t[4]=-a*f,t[8]=g+m*o,t[1]=m+g*o,t[5]=a*u,t[9]=p-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const h=a*u,m=a*f,g=o*u,p=o*f;t[0]=l*u,t[4]=g*c-m,t[8]=h*c+p,t[1]=l*f,t[5]=p*c+h,t[9]=m*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const h=a*l,m=a*c,g=o*l,p=o*c;t[0]=l*u,t[4]=p-h*f,t[8]=g*f+m,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=m*f+g,t[10]=h-p*f}else if(e.order==="XZY"){const h=a*l,m=a*c,g=o*l,p=o*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+p,t[5]=a*u,t[9]=m*f-g,t[2]=g*f-m,t[6]=o*u,t[10]=p*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ib,e,rb)}lookAt(e,t,i){const r=this.elements;return Bt.subVectors(e,t),Bt.lengthSq()===0&&(Bt.z=1),Bt.normalize(),fi.crossVectors(i,Bt),fi.lengthSq()===0&&(Math.abs(i.z)===1?Bt.x+=1e-4:Bt.z+=1e-4,Bt.normalize(),fi.crossVectors(i,Bt)),fi.normalize(),Oa.crossVectors(Bt,fi),r[0]=fi.x,r[4]=Oa.x,r[8]=Bt.x,r[1]=fi.y,r[5]=Oa.y,r[9]=Bt.y,r[2]=fi.z,r[6]=Oa.z,r[10]=Bt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],m=i[13],g=i[2],p=i[6],d=i[10],_=i[14],v=i[3],S=i[7],x=i[11],w=i[15],R=r[0],D=r[4],b=r[8],A=r[12],F=r[1],ee=r[5],X=r[9],H=r[13],U=r[2],Y=r[6],Z=r[10],ie=r[14],q=r[3],z=r[7],W=r[11],me=r[15];return s[0]=a*R+o*F+l*U+c*q,s[4]=a*D+o*ee+l*Y+c*z,s[8]=a*b+o*X+l*Z+c*W,s[12]=a*A+o*H+l*ie+c*me,s[1]=u*R+f*F+h*U+m*q,s[5]=u*D+f*ee+h*Y+m*z,s[9]=u*b+f*X+h*Z+m*W,s[13]=u*A+f*H+h*ie+m*me,s[2]=g*R+p*F+d*U+_*q,s[6]=g*D+p*ee+d*Y+_*z,s[10]=g*b+p*X+d*Z+_*W,s[14]=g*A+p*H+d*ie+_*me,s[3]=v*R+S*F+x*U+w*q,s[7]=v*D+S*ee+x*Y+w*z,s[11]=v*b+S*X+x*Z+w*W,s[15]=v*A+S*H+x*ie+w*me,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],m=e[14],g=e[3],p=e[7],d=e[11],_=e[15];return g*(+s*l*f-r*c*f-s*o*h+i*c*h+r*o*m-i*l*m)+p*(+t*l*m-t*c*h+s*a*h-r*a*m+r*c*u-s*l*u)+d*(+t*c*f-t*o*m-s*a*f+i*a*m+s*o*u-i*c*u)+_*(-r*o*u-t*l*f+t*o*h+r*a*f-i*a*h+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],m=e[11],g=e[12],p=e[13],d=e[14],_=e[15],v=f*d*c-p*h*c+p*l*m-o*d*m-f*l*_+o*h*_,S=g*h*c-u*d*c-g*l*m+a*d*m+u*l*_-a*h*_,x=u*p*c-g*f*c+g*o*m-a*p*m-u*o*_+a*f*_,w=g*f*l-u*p*l-g*o*h+a*p*h+u*o*d-a*f*d,R=t*v+i*S+r*x+s*w;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D=1/R;return e[0]=v*D,e[1]=(p*h*s-f*d*s-p*r*m+i*d*m+f*r*_-i*h*_)*D,e[2]=(o*d*s-p*l*s+p*r*c-i*d*c-o*r*_+i*l*_)*D,e[3]=(f*l*s-o*h*s-f*r*c+i*h*c+o*r*m-i*l*m)*D,e[4]=S*D,e[5]=(u*d*s-g*h*s+g*r*m-t*d*m-u*r*_+t*h*_)*D,e[6]=(g*l*s-a*d*s-g*r*c+t*d*c+a*r*_-t*l*_)*D,e[7]=(a*h*s-u*l*s+u*r*c-t*h*c-a*r*m+t*l*m)*D,e[8]=x*D,e[9]=(g*f*s-u*p*s-g*i*m+t*p*m+u*i*_-t*f*_)*D,e[10]=(a*p*s-g*o*s+g*i*c-t*p*c-a*i*_+t*o*_)*D,e[11]=(u*o*s-a*f*s-u*i*c+t*f*c+a*i*m-t*o*m)*D,e[12]=w*D,e[13]=(u*p*r-g*f*r+g*i*h-t*p*h-u*i*d+t*f*d)*D,e[14]=(g*o*r-a*p*r-g*i*l+t*p*l+a*i*d-t*o*d)*D,e[15]=(a*f*r-u*o*r+u*i*l-t*f*l-a*i*h+t*o*h)*D,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,f=o+o,h=s*c,m=s*u,g=s*f,p=a*u,d=a*f,_=o*f,v=l*c,S=l*u,x=l*f,w=i.x,R=i.y,D=i.z;return r[0]=(1-(p+_))*w,r[1]=(m+x)*w,r[2]=(g-S)*w,r[3]=0,r[4]=(m-x)*R,r[5]=(1-(h+_))*R,r[6]=(d+v)*R,r[7]=0,r[8]=(g+S)*D,r[9]=(d-v)*D,r[10]=(1-(h+p))*D,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=wr.set(r[0],r[1],r[2]).length();const a=wr.set(r[4],r[5],r[6]).length(),o=wr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],an.copy(this);const c=1/s,u=1/a,f=1/o;return an.elements[0]*=c,an.elements[1]*=c,an.elements[2]*=c,an.elements[4]*=u,an.elements[5]*=u,an.elements[6]*=u,an.elements[8]*=f,an.elements[9]*=f,an.elements[10]*=f,t.setFromRotationMatrix(an),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a){const o=this.elements,l=2*s/(t-e),c=2*s/(i-r),u=(t+e)/(t-e),f=(i+r)/(i-r),h=-(a+s)/(a-s),m=-2*a*s/(a-s);return o[0]=l,o[4]=0,o[8]=u,o[12]=0,o[1]=0,o[5]=c,o[9]=f,o[13]=0,o[2]=0,o[6]=0,o[10]=h,o[14]=m,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,i,r,s,a){const o=this.elements,l=1/(t-e),c=1/(i-r),u=1/(a-s),f=(t+e)*l,h=(i+r)*c,m=(a+s)*u;return o[0]=2*l,o[4]=0,o[8]=0,o[12]=-f,o[1]=0,o[5]=2*c,o[9]=0,o[13]=-h,o[2]=0,o[6]=0,o[10]=-2*u,o[14]=-m,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const wr=new I,an=new je,ib=new I(0,0,0),rb=new I(1,1,1),fi=new I,Oa=new I,Bt=new I,Ch=new je,Rh=new Ln;class pa{constructor(e=0,t=0,i=0,r=pa.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(Ct(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ct(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ct(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ct(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ct(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Ct(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Ch.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ch,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Rh.setFromEuler(this),this.setFromQuaternion(Rh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}pa.DefaultOrder="XYZ";pa.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class Hm{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let sb=0;const Lh=new I,Tr=new Ln,kn=new je,Fa=new I,bs=new I,ab=new I,ob=new Ln,Ph=new I(1,0,0),Ih=new I(0,1,0),Dh=new I(0,0,1),lb={type:"added"},Nh={type:"removed"};class lt extends hr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:sb++}),this.uuid=_n(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=lt.DefaultUp.clone();const e=new I,t=new pa,i=new Ln,r=new I(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new je},normalMatrix:{value:new Qt}}),this.matrix=new je,this.matrixWorld=new je,this.matrixAutoUpdate=lt.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=lt.DefaultMatrixWorldAutoUpdate,this.layers=new Hm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Tr.setFromAxisAngle(e,t),this.quaternion.multiply(Tr),this}rotateOnWorldAxis(e,t){return Tr.setFromAxisAngle(e,t),this.quaternion.premultiply(Tr),this}rotateX(e){return this.rotateOnAxis(Ph,e)}rotateY(e){return this.rotateOnAxis(Ih,e)}rotateZ(e){return this.rotateOnAxis(Dh,e)}translateOnAxis(e,t){return Lh.copy(e).applyQuaternion(this.quaternion),this.position.add(Lh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ph,e)}translateY(e){return this.translateOnAxis(Ih,e)}translateZ(e){return this.translateOnAxis(Dh,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(kn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Fa.copy(e):Fa.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),bs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?kn.lookAt(bs,Fa,this.up):kn.lookAt(Fa,bs,this.up),this.quaternion.setFromRotationMatrix(kn),r&&(kn.extractRotation(r.matrixWorld),Tr.setFromRotationMatrix(kn),this.quaternion.premultiply(Tr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(lb)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Nh)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Nh)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),kn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),kn.multiply(e.parent.matrixWorld)),e.applyMatrix4(kn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bs,e,ab),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bs,ob,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),f=a(e.shapes),h=a(e.skeletons),m=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=r,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}lt.DefaultUp=new I(0,1,0);lt.DefaultMatrixAutoUpdate=!0;lt.DefaultMatrixWorldAutoUpdate=!0;const on=new I,Un=new I,Nl=new I,zn=new I,Er=new I,Ar=new I,Oh=new I,Ol=new I,Fl=new I,kl=new I;class jn{constructor(e=new I,t=new I,i=new I){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),on.subVectors(e,t),r.cross(on);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){on.subVectors(r,t),Un.subVectors(i,t),Nl.subVectors(e,t);const a=on.dot(on),o=on.dot(Un),l=on.dot(Nl),c=Un.dot(Un),u=Un.dot(Nl),f=a*c-o*o;if(f===0)return s.set(-2,-1,-1);const h=1/f,m=(c*l-o*u)*h,g=(a*u-o*l)*h;return s.set(1-m-g,g,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,zn),zn.x>=0&&zn.y>=0&&zn.x+zn.y<=1}static getUV(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,zn),l.set(0,0),l.addScaledVector(s,zn.x),l.addScaledVector(a,zn.y),l.addScaledVector(o,zn.z),l}static isFrontFacing(e,t,i,r){return on.subVectors(i,t),Un.subVectors(e,t),on.cross(Un).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return on.subVectors(this.c,this.b),Un.subVectors(this.a,this.b),on.cross(Un).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return jn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return jn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return jn.getUV(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return jn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return jn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;Er.subVectors(r,i),Ar.subVectors(s,i),Ol.subVectors(e,i);const l=Er.dot(Ol),c=Ar.dot(Ol);if(l<=0&&c<=0)return t.copy(i);Fl.subVectors(e,r);const u=Er.dot(Fl),f=Ar.dot(Fl);if(u>=0&&f<=u)return t.copy(r);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector(Er,a);kl.subVectors(e,s);const m=Er.dot(kl),g=Ar.dot(kl);if(g>=0&&m<=g)return t.copy(s);const p=m*c-l*g;if(p<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(i).addScaledVector(Ar,o);const d=u*g-m*f;if(d<=0&&f-u>=0&&m-g>=0)return Oh.subVectors(s,r),o=(f-u)/(f-u+(m-g)),t.copy(r).addScaledVector(Oh,o);const _=1/(d+p+h);return a=p*_,o=h*_,t.copy(i).addScaledVector(Er,a).addScaledVector(Ar,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let cb=0;class Cn extends hr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:cb++}),this.uuid=_n(),this.name="",this.type="Material",this.blending=jr,this.side=ar,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Cm,this.blendDst=Rm,this.blendEquation=Or,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=wc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=zy,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Sl,this.stencilZFail=Sl,this.stencilZPass=Sl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const r=this[t];if(r===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==jr&&(i.blending=this.blending),this.side!==ar&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Ji extends Cn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Lm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const gt=new I,ka=new Oe;class Vt{constructor(e,t,i){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i===!0,this.usage=Rc,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ka.fromBufferAttribute(this,t),ka.applyMatrix3(e),this.setXY(t,ka.x,ka.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix3(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix4(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)gt.fromBufferAttribute(this,t),gt.applyNormalMatrix(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)gt.fromBufferAttribute(this,t),gt.transformDirection(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=qn(t,this.array)),t}setX(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=qn(t,this.array)),t}setY(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=qn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=qn(t,this.array)),t}setW(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=tt(t,this.array),i=tt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=tt(t,this.array),i=tt(i,this.array),r=tt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=tt(t,this.array),i=tt(i,this.array),r=tt(r,this.array),s=tt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Rc&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Vm extends Vt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Gm extends Vt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Gt extends Vt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let ub=0;const Yt=new je,Ul=new lt,Cr=new I,Ht=new fs,Ms=new fs,bt=new I;class nn extends hr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ub++}),this.uuid=_n(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Fm(e)?Gm:Vm)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Qt().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Yt.makeRotationFromQuaternion(e),this.applyMatrix4(Yt),this}rotateX(e){return Yt.makeRotationX(e),this.applyMatrix4(Yt),this}rotateY(e){return Yt.makeRotationY(e),this.applyMatrix4(Yt),this}rotateZ(e){return Yt.makeRotationZ(e),this.applyMatrix4(Yt),this}translate(e,t,i){return Yt.makeTranslation(e,t,i),this.applyMatrix4(Yt),this}scale(e,t,i){return Yt.makeScale(e,t,i),this.applyMatrix4(Yt),this}lookAt(e){return Ul.lookAt(e),Ul.updateMatrix(),this.applyMatrix4(Ul.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Cr).negate(),this.translate(Cr.x,Cr.y,Cr.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Gt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new fs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Ht.setFromBufferAttribute(s),this.morphTargetsRelative?(bt.addVectors(this.boundingBox.min,Ht.min),this.boundingBox.expandByPoint(bt),bt.addVectors(this.boundingBox.max,Ht.max),this.boundingBox.expandByPoint(bt)):(this.boundingBox.expandByPoint(Ht.min),this.boundingBox.expandByPoint(Ht.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new hs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new I,1/0);return}if(e){const i=this.boundingSphere.center;if(Ht.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Ms.setFromBufferAttribute(o),this.morphTargetsRelative?(bt.addVectors(Ht.min,Ms.min),Ht.expandByPoint(bt),bt.addVectors(Ht.max,Ms.max),Ht.expandByPoint(bt)):(Ht.expandByPoint(Ms.min),Ht.expandByPoint(Ms.max))}Ht.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)bt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(bt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)bt.fromBufferAttribute(o,c),l&&(Cr.fromBufferAttribute(e,c),bt.add(Cr)),r=Math.max(r,i.distanceToSquared(bt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,s=t.normal.array,a=t.uv.array,o=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Vt(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let F=0;F<o;F++)c[F]=new I,u[F]=new I;const f=new I,h=new I,m=new I,g=new Oe,p=new Oe,d=new Oe,_=new I,v=new I;function S(F,ee,X){f.fromArray(r,F*3),h.fromArray(r,ee*3),m.fromArray(r,X*3),g.fromArray(a,F*2),p.fromArray(a,ee*2),d.fromArray(a,X*2),h.sub(f),m.sub(f),p.sub(g),d.sub(g);const H=1/(p.x*d.y-d.x*p.y);!isFinite(H)||(_.copy(h).multiplyScalar(d.y).addScaledVector(m,-p.y).multiplyScalar(H),v.copy(m).multiplyScalar(p.x).addScaledVector(h,-d.x).multiplyScalar(H),c[F].add(_),c[ee].add(_),c[X].add(_),u[F].add(v),u[ee].add(v),u[X].add(v))}let x=this.groups;x.length===0&&(x=[{start:0,count:i.length}]);for(let F=0,ee=x.length;F<ee;++F){const X=x[F],H=X.start,U=X.count;for(let Y=H,Z=H+U;Y<Z;Y+=3)S(i[Y+0],i[Y+1],i[Y+2])}const w=new I,R=new I,D=new I,b=new I;function A(F){D.fromArray(s,F*3),b.copy(D);const ee=c[F];w.copy(ee),w.sub(D.multiplyScalar(D.dot(ee))).normalize(),R.crossVectors(b,ee);const H=R.dot(u[F])<0?-1:1;l[F*4]=w.x,l[F*4+1]=w.y,l[F*4+2]=w.z,l[F*4+3]=H}for(let F=0,ee=x.length;F<ee;++F){const X=x[F],H=X.start,U=X.count;for(let Y=H,Z=H+U;Y<Z;Y+=3)A(i[Y+0]),A(i[Y+1]),A(i[Y+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Vt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,m=i.count;h<m;h++)i.setXYZ(h,0,0,0);const r=new I,s=new I,a=new I,o=new I,l=new I,c=new I,u=new I,f=new I;if(e)for(let h=0,m=e.count;h<m;h+=3){const g=e.getX(h+0),p=e.getX(h+1),d=e.getX(h+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,p),a.fromBufferAttribute(t,d),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,p),c.fromBufferAttribute(i,d),o.add(u),l.add(u),c.add(u),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(p,l.x,l.y,l.z),i.setXYZ(d,c.x,c.y,c.z)}else for(let h=0,m=t.count;h<m;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)bt.fromBufferAttribute(e,t),bt.normalize(),e.setXYZ(t,bt.x,bt.y,bt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,f=o.normalized,h=new c.constructor(l.length*u);let m=0,g=0;for(let p=0,d=l.length;p<d;p++){o.isInterleavedBufferAttribute?m=l[p]*o.data.stride+o.offset:m=l[p]*u;for(let _=0;_<u;_++)h[g++]=c[m++]}return new Vt(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new nn,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,f=c.length;u<f;u++){const h=c[u],m=e(h,i);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const m=c[f];u.push(m.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,m=f.length;h<m;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const Fh=new je,Rr=new Su,zl=new hs,hi=new I,di=new I,pi=new I,Bl=new I,Hl=new I,Vl=new I,Ua=new I,za=new I,Ba=new I,Ha=new Oe,Va=new Oe,Ga=new Oe,Gl=new I,Wa=new I;class pn extends lt{constructor(e=new nn,t=new Ji){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;if(r===void 0||(i.boundingSphere===null&&i.computeBoundingSphere(),zl.copy(i.boundingSphere),zl.applyMatrix4(s),e.ray.intersectsSphere(zl)===!1)||(Fh.copy(s).invert(),Rr.copy(e.ray).applyMatrix4(Fh),i.boundingBox!==null&&Rr.intersectsBox(i.boundingBox)===!1))return;let a;const o=i.index,l=i.attributes.position,c=i.morphAttributes.position,u=i.morphTargetsRelative,f=i.attributes.uv,h=i.attributes.uv2,m=i.groups,g=i.drawRange;if(o!==null)if(Array.isArray(r))for(let p=0,d=m.length;p<d;p++){const _=m[p],v=r[_.materialIndex],S=Math.max(_.start,g.start),x=Math.min(o.count,Math.min(_.start+_.count,g.start+g.count));for(let w=S,R=x;w<R;w+=3){const D=o.getX(w),b=o.getX(w+1),A=o.getX(w+2);a=ja(this,v,e,Rr,l,c,u,f,h,D,b,A),a&&(a.faceIndex=Math.floor(w/3),a.face.materialIndex=_.materialIndex,t.push(a))}}else{const p=Math.max(0,g.start),d=Math.min(o.count,g.start+g.count);for(let _=p,v=d;_<v;_+=3){const S=o.getX(_),x=o.getX(_+1),w=o.getX(_+2);a=ja(this,r,e,Rr,l,c,u,f,h,S,x,w),a&&(a.faceIndex=Math.floor(_/3),t.push(a))}}else if(l!==void 0)if(Array.isArray(r))for(let p=0,d=m.length;p<d;p++){const _=m[p],v=r[_.materialIndex],S=Math.max(_.start,g.start),x=Math.min(l.count,Math.min(_.start+_.count,g.start+g.count));for(let w=S,R=x;w<R;w+=3){const D=w,b=w+1,A=w+2;a=ja(this,v,e,Rr,l,c,u,f,h,D,b,A),a&&(a.faceIndex=Math.floor(w/3),a.face.materialIndex=_.materialIndex,t.push(a))}}else{const p=Math.max(0,g.start),d=Math.min(l.count,g.start+g.count);for(let _=p,v=d;_<v;_+=3){const S=_,x=_+1,w=_+2;a=ja(this,r,e,Rr,l,c,u,f,h,S,x,w),a&&(a.faceIndex=Math.floor(_/3),t.push(a))}}}}function fb(n,e,t,i,r,s,a,o){let l;if(e.side===tn?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side!==Xn,o),l===null)return null;Wa.copy(o),Wa.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Wa);return c<t.near||c>t.far?null:{distance:c,point:Wa.clone(),object:n}}function ja(n,e,t,i,r,s,a,o,l,c,u,f){hi.fromBufferAttribute(r,c),di.fromBufferAttribute(r,u),pi.fromBufferAttribute(r,f);const h=n.morphTargetInfluences;if(s&&h){Ua.set(0,0,0),za.set(0,0,0),Ba.set(0,0,0);for(let g=0,p=s.length;g<p;g++){const d=h[g],_=s[g];d!==0&&(Bl.fromBufferAttribute(_,c),Hl.fromBufferAttribute(_,u),Vl.fromBufferAttribute(_,f),a?(Ua.addScaledVector(Bl,d),za.addScaledVector(Hl,d),Ba.addScaledVector(Vl,d)):(Ua.addScaledVector(Bl.sub(hi),d),za.addScaledVector(Hl.sub(di),d),Ba.addScaledVector(Vl.sub(pi),d)))}hi.add(Ua),di.add(za),pi.add(Ba)}n.isSkinnedMesh&&(n.boneTransform(c,hi),n.boneTransform(u,di),n.boneTransform(f,pi));const m=fb(n,e,t,i,hi,di,pi,Gl);if(m){o&&(Ha.fromBufferAttribute(o,c),Va.fromBufferAttribute(o,u),Ga.fromBufferAttribute(o,f),m.uv=jn.getUV(Gl,hi,di,pi,Ha,Va,Ga,new Oe)),l&&(Ha.fromBufferAttribute(l,c),Va.fromBufferAttribute(l,u),Ga.fromBufferAttribute(l,f),m.uv2=jn.getUV(Gl,hi,di,pi,Ha,Va,Ga,new Oe));const g={a:c,b:u,c:f,normal:new I,materialIndex:0};jn.getNormal(hi,di,pi,g.normal),m.face=g}return m}class ma extends nn{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],f=[];let h=0,m=0;g("z","y","x",-1,-1,i,t,e,a,s,0),g("z","y","x",1,-1,i,t,-e,a,s,1),g("x","z","y",1,1,e,i,t,r,a,2),g("x","z","y",1,-1,e,i,-t,r,a,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Gt(c,3)),this.setAttribute("normal",new Gt(u,3)),this.setAttribute("uv",new Gt(f,2));function g(p,d,_,v,S,x,w,R,D,b,A){const F=x/D,ee=w/b,X=x/2,H=w/2,U=R/2,Y=D+1,Z=b+1;let ie=0,q=0;const z=new I;for(let W=0;W<Z;W++){const me=W*ee-H;for(let ae=0;ae<Y;ae++){const pe=ae*F-X;z[p]=pe*v,z[d]=me*S,z[_]=U,c.push(z.x,z.y,z.z),z[p]=0,z[d]=0,z[_]=R>0?1:-1,u.push(z.x,z.y,z.z),f.push(ae/D),f.push(1-W/b),ie+=1}}for(let W=0;W<b;W++)for(let me=0;me<D;me++){const ae=h+me+Y*W,pe=h+me+Y*(W+1),Ae=h+(me+1)+Y*(W+1),G=h+(me+1)+Y*W;l.push(ae,pe,G),l.push(pe,Ae,G),q+=6}o.addGroup(m,q,A),m+=q,h+=ie}}static fromJSON(e){return new ma(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function is(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function At(n){const e={};for(let t=0;t<n.length;t++){const i=is(n[t]);for(const r in i)e[r]=i[r]}return e}function hb(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}const Wm={clone:is,merge:At};var db=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,pb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Zn extends Cn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=db,this.fragmentShader=pb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=is(e.uniforms),this.uniformsGroups=hb(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class jm extends lt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new je,this.projectionMatrix=new je,this.projectionMatrixInverse=new je}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Nt extends jm{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=na*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(zs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return na*2*Math.atan(Math.tan(zs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(zs*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Lr=90,Pr=1;class mb extends lt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i;const r=new Nt(Lr,Pr,e,t);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new I(1,0,0)),this.add(r);const s=new Nt(Lr,Pr,e,t);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new I(-1,0,0)),this.add(s);const a=new Nt(Lr,Pr,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(new I(0,1,0)),this.add(a);const o=new Nt(Lr,Pr,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(new I(0,-1,0)),this.add(o);const l=new Nt(Lr,Pr,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new I(0,0,1)),this.add(l);const c=new Nt(Lr,Pr,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new I(0,0,-1)),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[r,s,a,o,l,c]=this.children,u=e.getRenderTarget(),f=e.toneMapping,h=e.xr.enabled;e.toneMapping=Yn,e.xr.enabled=!1;const m=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,r),e.setRenderTarget(i,1),e.render(t,s),e.setRenderTarget(i,2),e.render(t,a),e.setRenderTarget(i,3),e.render(t,o),e.setRenderTarget(i,4),e.render(t,l),i.texture.generateMipmaps=m,e.setRenderTarget(i,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=f,e.xr.enabled=h,i.texture.needsPMREMUpdate=!0}}class Xm extends Ot{constructor(e,t,i,r,s,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Jr,super(e,t,i,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class gb extends Ri{constructor(e,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Xm(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ut}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ma(5,5,5),s=new Zn({name:"CubemapFromEquirect",uniforms:is(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:tn,blending:Ei});s.uniforms.tEquirect.value=t;const a=new pn(r,s),o=t.minFilter;return t.minFilter===us&&(t.minFilter=Ut),new mb(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}const Wl=new I,_b=new I,vb=new Qt;class Vi{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Wl.subVectors(i,t).cross(_b.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const i=e.delta(Wl),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(i).multiplyScalar(s).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||vb.getNormalMatrix(e),r=this.coplanarPoint(Wl).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ir=new hs,Xa=new I;class wu{constructor(e=new Vi,t=new Vi,i=new Vi,r=new Vi,s=new Vi,a=new Vi){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const t=this.planes,i=e.elements,r=i[0],s=i[1],a=i[2],o=i[3],l=i[4],c=i[5],u=i[6],f=i[7],h=i[8],m=i[9],g=i[10],p=i[11],d=i[12],_=i[13],v=i[14],S=i[15];return t[0].setComponents(o-r,f-l,p-h,S-d).normalize(),t[1].setComponents(o+r,f+l,p+h,S+d).normalize(),t[2].setComponents(o+s,f+c,p+m,S+_).normalize(),t[3].setComponents(o-s,f-c,p-m,S-_).normalize(),t[4].setComponents(o-a,f-u,p-g,S-v).normalize(),t[5].setComponents(o+a,f+u,p+g,S+v).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Ir.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Ir)}intersectsSprite(e){return Ir.center.set(0,0,0),Ir.radius=.7071067811865476,Ir.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ir)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Xa.x=r.normal.x>0?e.max.x:e.min.x,Xa.y=r.normal.y>0?e.max.y:e.min.y,Xa.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Xa)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function qm(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function xb(n,e){const t=e.isWebGL2,i=new WeakMap;function r(c,u){const f=c.array,h=c.usage,m=n.createBuffer();n.bindBuffer(u,m),n.bufferData(u,f,h),c.onUploadCallback();let g;if(f instanceof Float32Array)g=5126;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(f instanceof Int16Array)g=5122;else if(f instanceof Uint32Array)g=5125;else if(f instanceof Int32Array)g=5124;else if(f instanceof Int8Array)g=5120;else if(f instanceof Uint8Array)g=5121;else if(f instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:m,type:g,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,f){const h=u.array,m=u.updateRange;n.bindBuffer(f,c),m.count===-1?n.bufferSubData(f,0,h):(t?n.bufferSubData(f,m.offset*h.BYTES_PER_ELEMENT,h,m.offset,m.count):n.bufferSubData(f,m.offset*h.BYTES_PER_ELEMENT,h.subarray(m.offset,m.offset+m.count)),m.count=-1)}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(n.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const h=i.get(c);(!h||h.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=i.get(c);f===void 0?i.set(c,r(c,u)):f.version<c.version&&(s(f.buffer,c,u),f.version=c.version)}return{get:a,remove:o,update:l}}class Tu extends nn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,f=e/o,h=t/l,m=[],g=[],p=[],d=[];for(let _=0;_<u;_++){const v=_*h-a;for(let S=0;S<c;S++){const x=S*f-s;g.push(x,-v,0),p.push(0,0,1),d.push(S/o),d.push(1-_/l)}}for(let _=0;_<l;_++)for(let v=0;v<o;v++){const S=v+c*_,x=v+c*(_+1),w=v+1+c*(_+1),R=v+1+c*_;m.push(S,x,R),m.push(x,w,R)}this.setIndex(m),this.setAttribute("position",new Gt(g,3)),this.setAttribute("normal",new Gt(p,3)),this.setAttribute("uv",new Gt(d,2))}static fromJSON(e){return new Tu(e.width,e.height,e.widthSegments,e.heightSegments)}}var yb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,bb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Mb=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Sb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,wb=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Tb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Eb="vec3 transformed = vec3( position );",Ab=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Cb=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
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
#endif`,Rb=`#ifdef USE_IRIDESCENCE
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
#endif`,Lb=`#ifdef USE_BUMPMAP
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
#endif`,Pb=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ib=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Db=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Nb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ob=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Fb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,kb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Ub=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,zb=`#define PI 3.141592653589793
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
}`,Bb=`#ifdef ENVMAP_TYPE_CUBE_UV
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
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
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
#endif`,Hb=`vec3 transformedNormal = objectNormal;
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
#endif`,Vb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Gb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Wb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,jb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Xb="gl_FragColor = linearToOutputTexel( gl_FragColor );",qb=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,$b=`#ifdef USE_ENVMAP
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
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
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
#endif`,Yb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Kb=`#ifdef USE_ENVMAP
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
#endif`,Zb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Jb=`#ifdef USE_ENVMAP
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
#endif`,Qb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,eM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,tM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,nM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,iM=`#ifdef USE_GRADIENTMAP
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
}`,rM=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,sM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,aM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,oM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert
#define Material_LightProbeLOD( material )	(0)`,lM=`uniform bool receiveShadow;
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
#endif`,cM=`#if defined( USE_ENVMAP )
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
#endif`,uM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,fM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,hM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,dM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,pM=`PhysicalMaterial material;
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
#endif`,mM=`struct PhysicalMaterial {
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
}`,gM=`
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
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,_M=`#if defined( RE_IndirectDiffuse )
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
#endif`,vM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,xM=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,yM=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bM=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,MM=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,SM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,wM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,TM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,EM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,AM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,CM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,RM=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,LM=`#ifdef USE_MORPHNORMALS
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
#endif`,PM=`#ifdef USE_MORPHTARGETS
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
#endif`,IM=`#ifdef USE_MORPHTARGETS
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
#endif`,DM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,NM=`#ifdef OBJECTSPACE_NORMALMAP
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
#endif`,OM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,FM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,UM=`#ifdef USE_NORMALMAP
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
#endif`,zM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,BM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,HM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,VM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,GM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,WM=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,jM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,XM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,qM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,$M=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,YM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,KM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ZM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
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
#endif`,JM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,QM=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,e1=`float getShadowMask() {
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
}`,t1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,n1=`#ifdef USE_SKINNING
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
#endif`,i1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,r1=`#ifdef USE_SKINNING
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
#endif`,s1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,a1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,o1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,l1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,c1=`#ifdef USE_TRANSMISSION
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
#endif`,u1=`#ifdef USE_TRANSMISSION
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
#endif`,f1=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,h1=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,d1=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,p1=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,m1=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,g1=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,_1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const v1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,x1=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,y1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,b1=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,M1=`#include <common>
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
}`,S1=`#if DEPTH_PACKING == 3200
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
}`,w1=`#define DISTANCE
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
}`,T1=`#define DISTANCE
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
}`,E1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,A1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,C1=`uniform float scale;
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
}`,R1=`uniform vec3 diffuse;
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
}`,L1=`#include <common>
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
}`,P1=`uniform vec3 diffuse;
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
}`,I1=`#define LAMBERT
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
}`,D1=`#define LAMBERT
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
}`,N1=`#define MATCAP
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
}`,O1=`#define MATCAP
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
}`,F1=`#define NORMAL
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
}`,k1=`#define NORMAL
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
}`,U1=`#define PHONG
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
}`,z1=`#define PHONG
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
}`,B1=`#define STANDARD
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
}`,H1=`#define STANDARD
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
}`,V1=`#define TOON
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
}`,G1=`#define TOON
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
}`,W1=`uniform float size;
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
}`,j1=`uniform vec3 diffuse;
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
}`,X1=`#include <common>
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
}`,q1=`uniform vec3 color;
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
}`,$1=`uniform float rotation;
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
}`,Y1=`uniform vec3 diffuse;
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
}`,Ve={alphamap_fragment:yb,alphamap_pars_fragment:bb,alphatest_fragment:Mb,alphatest_pars_fragment:Sb,aomap_fragment:wb,aomap_pars_fragment:Tb,begin_vertex:Eb,beginnormal_vertex:Ab,bsdfs:Cb,iridescence_fragment:Rb,bumpmap_pars_fragment:Lb,clipping_planes_fragment:Pb,clipping_planes_pars_fragment:Ib,clipping_planes_pars_vertex:Db,clipping_planes_vertex:Nb,color_fragment:Ob,color_pars_fragment:Fb,color_pars_vertex:kb,color_vertex:Ub,common:zb,cube_uv_reflection_fragment:Bb,defaultnormal_vertex:Hb,displacementmap_pars_vertex:Vb,displacementmap_vertex:Gb,emissivemap_fragment:Wb,emissivemap_pars_fragment:jb,encodings_fragment:Xb,encodings_pars_fragment:qb,envmap_fragment:$b,envmap_common_pars_fragment:Yb,envmap_pars_fragment:Kb,envmap_pars_vertex:Zb,envmap_physical_pars_fragment:cM,envmap_vertex:Jb,fog_vertex:Qb,fog_pars_vertex:eM,fog_fragment:tM,fog_pars_fragment:nM,gradientmap_pars_fragment:iM,lightmap_fragment:rM,lightmap_pars_fragment:sM,lights_lambert_fragment:aM,lights_lambert_pars_fragment:oM,lights_pars_begin:lM,lights_toon_fragment:uM,lights_toon_pars_fragment:fM,lights_phong_fragment:hM,lights_phong_pars_fragment:dM,lights_physical_fragment:pM,lights_physical_pars_fragment:mM,lights_fragment_begin:gM,lights_fragment_maps:_M,lights_fragment_end:vM,logdepthbuf_fragment:xM,logdepthbuf_pars_fragment:yM,logdepthbuf_pars_vertex:bM,logdepthbuf_vertex:MM,map_fragment:SM,map_pars_fragment:wM,map_particle_fragment:TM,map_particle_pars_fragment:EM,metalnessmap_fragment:AM,metalnessmap_pars_fragment:CM,morphcolor_vertex:RM,morphnormal_vertex:LM,morphtarget_pars_vertex:PM,morphtarget_vertex:IM,normal_fragment_begin:DM,normal_fragment_maps:NM,normal_pars_fragment:OM,normal_pars_vertex:FM,normal_vertex:kM,normalmap_pars_fragment:UM,clearcoat_normal_fragment_begin:zM,clearcoat_normal_fragment_maps:BM,clearcoat_pars_fragment:HM,iridescence_pars_fragment:VM,output_fragment:GM,packing:WM,premultiplied_alpha_fragment:jM,project_vertex:XM,dithering_fragment:qM,dithering_pars_fragment:$M,roughnessmap_fragment:YM,roughnessmap_pars_fragment:KM,shadowmap_pars_fragment:ZM,shadowmap_pars_vertex:JM,shadowmap_vertex:QM,shadowmask_pars_fragment:e1,skinbase_vertex:t1,skinning_pars_vertex:n1,skinning_vertex:i1,skinnormal_vertex:r1,specularmap_fragment:s1,specularmap_pars_fragment:a1,tonemapping_fragment:o1,tonemapping_pars_fragment:l1,transmission_fragment:c1,transmission_pars_fragment:u1,uv_pars_fragment:f1,uv_pars_vertex:h1,uv_vertex:d1,uv2_pars_fragment:p1,uv2_pars_vertex:m1,uv2_vertex:g1,worldpos_vertex:_1,background_vert:v1,background_frag:x1,cube_vert:y1,cube_frag:b1,depth_vert:M1,depth_frag:S1,distanceRGBA_vert:w1,distanceRGBA_frag:T1,equirect_vert:E1,equirect_frag:A1,linedashed_vert:C1,linedashed_frag:R1,meshbasic_vert:L1,meshbasic_frag:P1,meshlambert_vert:I1,meshlambert_frag:D1,meshmatcap_vert:N1,meshmatcap_frag:O1,meshnormal_vert:F1,meshnormal_frag:k1,meshphong_vert:U1,meshphong_frag:z1,meshphysical_vert:B1,meshphysical_frag:H1,meshtoon_vert:V1,meshtoon_frag:G1,points_vert:W1,points_frag:j1,shadow_vert:X1,shadow_frag:q1,sprite_vert:$1,sprite_frag:Y1},xe={common:{diffuse:{value:new Fe(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Qt},uv2Transform:{value:new Qt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Fe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Fe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Qt}},sprite:{diffuse:{value:new Fe(16777215)},opacity:{value:1},center:{value:new Oe(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Qt}}},Tn={basic:{uniforms:At([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:At([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new Fe(0)}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:At([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new Fe(0)},specular:{value:new Fe(1118481)},shininess:{value:30}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:At([xe.common,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.roughnessmap,xe.metalnessmap,xe.fog,xe.lights,{emissive:{value:new Fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:At([xe.common,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.gradientmap,xe.fog,xe.lights,{emissive:{value:new Fe(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:At([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:At([xe.points,xe.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:At([xe.common,xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:At([xe.common,xe.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:At([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:At([xe.sprite,xe.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new Qt},t2D:{value:null}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},cube:{uniforms:At([xe.envmap,{opacity:{value:1}}]),vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distanceRGBA:{uniforms:At([xe.common,xe.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distanceRGBA_vert,fragmentShader:Ve.distanceRGBA_frag},shadow:{uniforms:At([xe.lights,xe.fog,{color:{value:new Fe(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};Tn.physical={uniforms:At([Tn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Oe(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Fe(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Fe(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Fe(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};function K1(n,e,t,i,r,s){const a=new Fe(0);let o=r===!0?0:1,l,c,u=null,f=0,h=null;function m(p,d){let _=!1,v=d.isScene===!0?d.background:null;v&&v.isTexture&&(v=e.get(v));const S=n.xr,x=S.getSession&&S.getSession();x&&x.environmentBlendMode==="additive"&&(v=null),v===null?g(a,o):v&&v.isColor&&(g(v,1),_=!0),(n.autoClear||_)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Ko)?(c===void 0&&(c=new pn(new ma(1,1,1),new Zn({name:"BackgroundCubeMaterial",uniforms:is(Tn.cube.uniforms),vertexShader:Tn.cube.vertexShader,fragmentShader:Tn.cube.fragmentShader,side:tn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,R,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,(u!==v||f!==v.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,u=v,f=v.version,h=n.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new pn(new Tu(2,2),new Zn({name:"BackgroundMaterial",uniforms:is(Tn.background.uniforms),vertexShader:Tn.background.vertexShader,fragmentShader:Tn.background.fragmentShader,side:ar,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=v,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||f!==v.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,u=v,f=v.version,h=n.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null))}function g(p,d){t.buffers.color.setClear(p.r,p.g,p.b,d,s)}return{getClearColor:function(){return a},setClearColor:function(p,d=1){a.set(p),o=d,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(p){o=p,g(a,o)},render:m}}function Z1(n,e,t,i){const r=n.getParameter(34921),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||s!==null,o={},l=d(null);let c=l,u=!1;function f(U,Y,Z,ie,q){let z=!1;if(a){const W=p(ie,Z,Y);c!==W&&(c=W,m(c.object)),z=_(U,ie,Z,q),z&&v(U,ie,Z,q)}else{const W=Y.wireframe===!0;(c.geometry!==ie.id||c.program!==Z.id||c.wireframe!==W)&&(c.geometry=ie.id,c.program=Z.id,c.wireframe=W,z=!0)}q!==null&&t.update(q,34963),(z||u)&&(u=!1,b(U,Y,Z,ie),q!==null&&n.bindBuffer(34963,t.get(q).buffer))}function h(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function m(U){return i.isWebGL2?n.bindVertexArray(U):s.bindVertexArrayOES(U)}function g(U){return i.isWebGL2?n.deleteVertexArray(U):s.deleteVertexArrayOES(U)}function p(U,Y,Z){const ie=Z.wireframe===!0;let q=o[U.id];q===void 0&&(q={},o[U.id]=q);let z=q[Y.id];z===void 0&&(z={},q[Y.id]=z);let W=z[ie];return W===void 0&&(W=d(h()),z[ie]=W),W}function d(U){const Y=[],Z=[],ie=[];for(let q=0;q<r;q++)Y[q]=0,Z[q]=0,ie[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Y,enabledAttributes:Z,attributeDivisors:ie,object:U,attributes:{},index:null}}function _(U,Y,Z,ie){const q=c.attributes,z=Y.attributes;let W=0;const me=Z.getAttributes();for(const ae in me)if(me[ae].location>=0){const Ae=q[ae];let G=z[ae];if(G===void 0&&(ae==="instanceMatrix"&&U.instanceMatrix&&(G=U.instanceMatrix),ae==="instanceColor"&&U.instanceColor&&(G=U.instanceColor)),Ae===void 0||Ae.attribute!==G||G&&Ae.data!==G.data)return!0;W++}return c.attributesNum!==W||c.index!==ie}function v(U,Y,Z,ie){const q={},z=Y.attributes;let W=0;const me=Z.getAttributes();for(const ae in me)if(me[ae].location>=0){let Ae=z[ae];Ae===void 0&&(ae==="instanceMatrix"&&U.instanceMatrix&&(Ae=U.instanceMatrix),ae==="instanceColor"&&U.instanceColor&&(Ae=U.instanceColor));const G={};G.attribute=Ae,Ae&&Ae.data&&(G.data=Ae.data),q[ae]=G,W++}c.attributes=q,c.attributesNum=W,c.index=ie}function S(){const U=c.newAttributes;for(let Y=0,Z=U.length;Y<Z;Y++)U[Y]=0}function x(U){w(U,0)}function w(U,Y){const Z=c.newAttributes,ie=c.enabledAttributes,q=c.attributeDivisors;Z[U]=1,ie[U]===0&&(n.enableVertexAttribArray(U),ie[U]=1),q[U]!==Y&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](U,Y),q[U]=Y)}function R(){const U=c.newAttributes,Y=c.enabledAttributes;for(let Z=0,ie=Y.length;Z<ie;Z++)Y[Z]!==U[Z]&&(n.disableVertexAttribArray(Z),Y[Z]=0)}function D(U,Y,Z,ie,q,z){i.isWebGL2===!0&&(Z===5124||Z===5125)?n.vertexAttribIPointer(U,Y,Z,q,z):n.vertexAttribPointer(U,Y,Z,ie,q,z)}function b(U,Y,Z,ie){if(i.isWebGL2===!1&&(U.isInstancedMesh||ie.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;S();const q=ie.attributes,z=Z.getAttributes(),W=Y.defaultAttributeValues;for(const me in z){const ae=z[me];if(ae.location>=0){let pe=q[me];if(pe===void 0&&(me==="instanceMatrix"&&U.instanceMatrix&&(pe=U.instanceMatrix),me==="instanceColor"&&U.instanceColor&&(pe=U.instanceColor)),pe!==void 0){const Ae=pe.normalized,G=pe.itemSize,k=t.get(pe);if(k===void 0)continue;const se=k.buffer,le=k.type,be=k.bytesPerElement;if(pe.isInterleavedBufferAttribute){const he=pe.data,Te=he.stride,ge=pe.offset;if(he.isInstancedInterleavedBuffer){for(let T=0;T<ae.locationSize;T++)w(ae.location+T,he.meshPerAttribute);U.isInstancedMesh!==!0&&ie._maxInstanceCount===void 0&&(ie._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let T=0;T<ae.locationSize;T++)x(ae.location+T);n.bindBuffer(34962,se);for(let T=0;T<ae.locationSize;T++)D(ae.location+T,G/ae.locationSize,le,Ae,Te*be,(ge+G/ae.locationSize*T)*be)}else{if(pe.isInstancedBufferAttribute){for(let he=0;he<ae.locationSize;he++)w(ae.location+he,pe.meshPerAttribute);U.isInstancedMesh!==!0&&ie._maxInstanceCount===void 0&&(ie._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let he=0;he<ae.locationSize;he++)x(ae.location+he);n.bindBuffer(34962,se);for(let he=0;he<ae.locationSize;he++)D(ae.location+he,G/ae.locationSize,le,Ae,G*be,G/ae.locationSize*he*be)}}else if(W!==void 0){const Ae=W[me];if(Ae!==void 0)switch(Ae.length){case 2:n.vertexAttrib2fv(ae.location,Ae);break;case 3:n.vertexAttrib3fv(ae.location,Ae);break;case 4:n.vertexAttrib4fv(ae.location,Ae);break;default:n.vertexAttrib1fv(ae.location,Ae)}}}}R()}function A(){X();for(const U in o){const Y=o[U];for(const Z in Y){const ie=Y[Z];for(const q in ie)g(ie[q].object),delete ie[q];delete Y[Z]}delete o[U]}}function F(U){if(o[U.id]===void 0)return;const Y=o[U.id];for(const Z in Y){const ie=Y[Z];for(const q in ie)g(ie[q].object),delete ie[q];delete Y[Z]}delete o[U.id]}function ee(U){for(const Y in o){const Z=o[Y];if(Z[U.id]===void 0)continue;const ie=Z[U.id];for(const q in ie)g(ie[q].object),delete ie[q];delete Z[U.id]}}function X(){H(),u=!0,c!==l&&(c=l,m(c.object))}function H(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:X,resetDefaultState:H,dispose:A,releaseStatesOfGeometry:F,releaseStatesOfProgram:ee,initAttributes:S,enableAttribute:x,disableUnusedAttributes:R}}function J1(n,e,t,i){const r=i.isWebGL2;let s;function a(c){s=c}function o(c,u){n.drawArrays(s,c,u),t.update(u,s,1)}function l(c,u,f){if(f===0)return;let h,m;if(r)h=n,m="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[m](s,c,u,f),t.update(u,s,f)}this.setMode=a,this.render=o,this.renderInstances=l}function Q1(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const D=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(D){if(D==="highp"){if(n.getShaderPrecisionFormat(35633,36338).precision>0&&n.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";D="mediump"}return D==="mediump"&&n.getShaderPrecisionFormat(35633,36337).precision>0&&n.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&n instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&n instanceof WebGL2ComputeRenderingContext;let o=t.precision!==void 0?t.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,f=n.getParameter(34930),h=n.getParameter(35660),m=n.getParameter(3379),g=n.getParameter(34076),p=n.getParameter(34921),d=n.getParameter(36347),_=n.getParameter(36348),v=n.getParameter(36349),S=h>0,x=a||e.has("OES_texture_float"),w=S&&x,R=a?n.getParameter(36183):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:h,maxTextureSize:m,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:d,maxVaryings:_,maxFragmentUniforms:v,vertexTextures:S,floatFragmentTextures:x,floatVertexTextures:w,maxSamples:R}}function eS(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new Vi,o=new Qt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h,m){const g=f.length!==0||h||i!==0||r;return r=h,t=u(f,m,0),i=f.length,g},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1,c()},this.setState=function(f,h,m){const g=f.clippingPlanes,p=f.clipIntersection,d=f.clipShadows,_=n.get(f);if(!r||g===null||g.length===0||s&&!d)s?u(null):c();else{const v=s?0:i,S=v*4;let x=_.clippingState||null;l.value=x,x=u(g,h,S,m);for(let w=0;w!==S;++w)x[w]=t[w];_.clippingState=x,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,m,g){const p=f!==null?f.length:0;let d=null;if(p!==0){if(d=l.value,g!==!0||d===null){const _=m+p*4,v=h.matrixWorldInverse;o.getNormalMatrix(v),(d===null||d.length<_)&&(d=new Float32Array(_));for(let S=0,x=m;S!==p;++S,x+=4)a.copy(f[S]).applyMatrix4(v,o),a.normal.toArray(d,x),d[x+3]=a.constant}l.value=d,l.needsUpdate=!0}return e.numPlanes=p,e.numIntersection=0,d}}function tS(n){let e=new WeakMap;function t(a,o){return o===Tc?a.mapping=Jr:o===Ec&&(a.mapping=Qr),a}function i(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===Tc||o===Ec)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new gb(l.height/2);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class ga extends jm{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ur=4,kh=[.125,.215,.35,.446,.526,.582],Yi=20,jl=new ga,Uh=new Fe;let Xl=null;const Gi=(1+Math.sqrt(5))/2,Dr=1/Gi,zh=[new I(1,1,1),new I(-1,1,1),new I(1,1,-1),new I(-1,1,-1),new I(0,Gi,Dr),new I(0,Gi,-Dr),new I(Dr,0,Gi),new I(-Dr,0,Gi),new I(Gi,Dr,0),new I(-Gi,Dr,0)];class Bh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Xl=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Gh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Vh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Xl),e.scissorTest=!1,qa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Jr||e.mapping===Qr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Xl=this._renderer.getRenderTarget();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Ut,minFilter:Ut,generateMipmaps:!1,type:ea,format:dn,encoding:lr,depthBuffer:!1},r=Hh(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Hh(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=nS(s)),this._blurMaterial=iS(s,e,t)}return r}_compileMaterial(e){const t=new pn(this._lodPlanes[0],e);this._renderer.compile(t,jl)}_sceneToCubeUV(e,t,i,r){const o=new Nt(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(Uh),u.toneMapping=Yn,u.autoClear=!1;const m=new Ji({name:"PMREM.Background",side:tn,depthWrite:!1,depthTest:!1}),g=new pn(new ma,m);let p=!1;const d=e.background;d?d.isColor&&(m.color.copy(d),e.background=null,p=!0):(m.color.copy(Uh),p=!0);for(let _=0;_<6;_++){const v=_%3;v===0?(o.up.set(0,l[_],0),o.lookAt(c[_],0,0)):v===1?(o.up.set(0,0,l[_]),o.lookAt(0,c[_],0)):(o.up.set(0,l[_],0),o.lookAt(0,0,c[_]));const S=this._cubeSize;qa(r,v*S,_>2?S:0,S,S),u.setRenderTarget(r),p&&u.render(g,o),u.render(e,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=d}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Jr||e.mapping===Qr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Gh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Vh());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new pn(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;qa(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,jl)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=zh[(r-1)%zh.length];this._blur(e,r-1,r,s,a)}t.autoClear=i}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new pn(this._lodPlanes[r],c),h=c.uniforms,m=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Yi-1),p=s/g,d=isFinite(s)?1+Math.floor(u*p):Yi;d>Yi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${Yi}`);const _=[];let v=0;for(let D=0;D<Yi;++D){const b=D/p,A=Math.exp(-b*b/2);_.push(A),D===0?v+=A:D<d&&(v+=2*A)}for(let D=0;D<_.length;D++)_[D]=_[D]/v;h.envMap.value=e.texture,h.samples.value=d,h.weights.value=_,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:S}=this;h.dTheta.value=g,h.mipInt.value=S-i;const x=this._sizeLods[r],w=3*x*(r>S-Ur?r-S+Ur:0),R=4*(this._cubeSize-x);qa(t,w,R,3*x,2*x),l.setRenderTarget(t),l.render(f,jl)}}function nS(n){const e=[],t=[],i=[];let r=n;const s=n-Ur+1+kh.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>n-Ur?l=kh[a-n+Ur-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],m=6,g=6,p=3,d=2,_=1,v=new Float32Array(p*g*m),S=new Float32Array(d*g*m),x=new Float32Array(_*g*m);for(let R=0;R<m;R++){const D=R%3*2/3-1,b=R>2?0:-1,A=[D,b,0,D+2/3,b,0,D+2/3,b+1,0,D,b,0,D+2/3,b+1,0,D,b+1,0];v.set(A,p*g*R),S.set(h,d*g*R);const F=[R,R,R,R,R,R];x.set(F,_*g*R)}const w=new nn;w.setAttribute("position",new Vt(v,p)),w.setAttribute("uv",new Vt(S,d)),w.setAttribute("faceIndex",new Vt(x,_)),e.push(w),r>Ur&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Hh(n,e,t){const i=new Ri(n,e,t);return i.texture.mapping=Ko,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function qa(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function iS(n,e,t){const i=new Float32Array(Yi),r=new I(0,1,0);return new Zn({name:"SphericalGaussianBlur",defines:{n:Yi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Eu(),fragmentShader:`

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
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function Vh(){return new Zn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Eu(),fragmentShader:`

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
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function Gh(){return new Zn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Eu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function Eu(){return`

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
	`}function rS(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===Tc||l===Ec,u=l===Jr||l===Qr;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let f=e.get(o);return t===null&&(t=new Bh(n)),f=c?t.fromEquirectangular(o,f):t.fromCubemap(o,f),e.set(o,f),f.texture}else{if(e.has(o))return e.get(o).texture;{const f=o.image;if(c&&f&&f.height>0||u&&f&&r(f)){t===null&&(t=new Bh(n));const h=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,h),o.addEventListener("dispose",s),h.texture}else return null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function sS(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function aS(n,e,t,i){const r={},s=new WeakMap;function a(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",a),delete r[h.id];const m=s.get(h);m&&(e.remove(m),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(f,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const g in h)e.update(h[g],34962);const m=f.morphAttributes;for(const g in m){const p=m[g];for(let d=0,_=p.length;d<_;d++)e.update(p[d],34962)}}function c(f){const h=[],m=f.index,g=f.attributes.position;let p=0;if(m!==null){const v=m.array;p=m.version;for(let S=0,x=v.length;S<x;S+=3){const w=v[S+0],R=v[S+1],D=v[S+2];h.push(w,R,R,D,D,w)}}else{const v=g.array;p=g.version;for(let S=0,x=v.length/3-1;S<x;S+=3){const w=S+0,R=S+1,D=S+2;h.push(w,R,R,D,D,w)}}const d=new(Fm(h)?Gm:Vm)(h,1);d.version=p;const _=s.get(f);_&&e.remove(_),s.set(f,d)}function u(f){const h=s.get(f);if(h){const m=f.index;m!==null&&h.version<m.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function oS(n,e,t,i){const r=i.isWebGL2;let s;function a(h){s=h}let o,l;function c(h){o=h.type,l=h.bytesPerElement}function u(h,m){n.drawElements(s,m,o,h*l),t.update(m,s,1)}function f(h,m,g){if(g===0)return;let p,d;if(r)p=n,d="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[d](s,m,o,h*l,g),t.update(m,s,g)}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=f}function lS(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case 4:t.triangles+=o*(s/3);break;case 1:t.lines+=o*(s/2);break;case 3:t.lines+=o*(s-1);break;case 2:t.lines+=o*s;break;case 0:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function cS(n,e){return n[0]-e[0]}function uS(n,e){return Math.abs(e[1])-Math.abs(n[1])}function fS(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,a=new nt,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,f,h){const m=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,p=g!==void 0?g.length:0;let d=s.get(u);if(d===void 0||d.count!==p){let Y=function(){H.dispose(),s.delete(u),u.removeEventListener("dispose",Y)};d!==void 0&&d.texture.dispose();const S=u.morphAttributes.position!==void 0,x=u.morphAttributes.normal!==void 0,w=u.morphAttributes.color!==void 0,R=u.morphAttributes.position||[],D=u.morphAttributes.normal||[],b=u.morphAttributes.color||[];let A=0;S===!0&&(A=1),x===!0&&(A=2),w===!0&&(A=3);let F=u.attributes.position.count*A,ee=1;F>e.maxTextureSize&&(ee=Math.ceil(F/e.maxTextureSize),F=e.maxTextureSize);const X=new Float32Array(F*ee*4*p),H=new Bm(X,F,ee,p);H.type=bi,H.needsUpdate=!0;const U=A*4;for(let Z=0;Z<p;Z++){const ie=R[Z],q=D[Z],z=b[Z],W=F*ee*4*Z;for(let me=0;me<ie.count;me++){const ae=me*U;S===!0&&(a.fromBufferAttribute(ie,me),X[W+ae+0]=a.x,X[W+ae+1]=a.y,X[W+ae+2]=a.z,X[W+ae+3]=0),x===!0&&(a.fromBufferAttribute(q,me),X[W+ae+4]=a.x,X[W+ae+5]=a.y,X[W+ae+6]=a.z,X[W+ae+7]=0),w===!0&&(a.fromBufferAttribute(z,me),X[W+ae+8]=a.x,X[W+ae+9]=a.y,X[W+ae+10]=a.z,X[W+ae+11]=z.itemSize===4?a.w:1)}}d={count:p,texture:H,size:new Oe(F,ee)},s.set(u,d),u.addEventListener("dispose",Y)}let _=0;for(let S=0;S<m.length;S++)_+=m[S];const v=u.morphTargetsRelative?1:1-_;h.getUniforms().setValue(n,"morphTargetBaseInfluence",v),h.getUniforms().setValue(n,"morphTargetInfluences",m),h.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),h.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}else{const g=m===void 0?0:m.length;let p=i[u.id];if(p===void 0||p.length!==g){p=[];for(let x=0;x<g;x++)p[x]=[x,0];i[u.id]=p}for(let x=0;x<g;x++){const w=p[x];w[0]=x,w[1]=m[x]}p.sort(uS);for(let x=0;x<8;x++)x<g&&p[x][1]?(o[x][0]=p[x][0],o[x][1]=p[x][1]):(o[x][0]=Number.MAX_SAFE_INTEGER,o[x][1]=0);o.sort(cS);const d=u.morphAttributes.position,_=u.morphAttributes.normal;let v=0;for(let x=0;x<8;x++){const w=o[x],R=w[0],D=w[1];R!==Number.MAX_SAFE_INTEGER&&D?(d&&u.getAttribute("morphTarget"+x)!==d[R]&&u.setAttribute("morphTarget"+x,d[R]),_&&u.getAttribute("morphNormal"+x)!==_[R]&&u.setAttribute("morphNormal"+x,_[R]),r[x]=D,v+=D):(d&&u.hasAttribute("morphTarget"+x)===!0&&u.deleteAttribute("morphTarget"+x),_&&u.hasAttribute("morphNormal"+x)===!0&&u.deleteAttribute("morphNormal"+x),r[x]=0)}const S=u.morphTargetsRelative?1:1-v;h.getUniforms().setValue(n,"morphTargetBaseInfluence",S),h.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function hS(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);return r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),f}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}const $m=new Ot,Ym=new Bm,Km=new tb,Zm=new Xm,Wh=[],jh=[],Xh=new Float32Array(16),qh=new Float32Array(9),$h=new Float32Array(4);function ds(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Wh[r];if(s===void 0&&(s=new Float32Array(r),Wh[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function vt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function xt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Zo(n,e){let t=jh[e];t===void 0&&(t=new Int32Array(e),jh[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function dS(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function pS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vt(t,e))return;n.uniform2fv(this.addr,e),xt(t,e)}}function mS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(vt(t,e))return;n.uniform3fv(this.addr,e),xt(t,e)}}function gS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vt(t,e))return;n.uniform4fv(this.addr,e),xt(t,e)}}function _S(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(vt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),xt(t,e)}else{if(vt(t,i))return;$h.set(i),n.uniformMatrix2fv(this.addr,!1,$h),xt(t,i)}}function vS(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(vt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),xt(t,e)}else{if(vt(t,i))return;qh.set(i),n.uniformMatrix3fv(this.addr,!1,qh),xt(t,i)}}function xS(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(vt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),xt(t,e)}else{if(vt(t,i))return;Xh.set(i),n.uniformMatrix4fv(this.addr,!1,Xh),xt(t,i)}}function yS(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function bS(n,e){const t=this.cache;vt(t,e)||(n.uniform2iv(this.addr,e),xt(t,e))}function MS(n,e){const t=this.cache;vt(t,e)||(n.uniform3iv(this.addr,e),xt(t,e))}function SS(n,e){const t=this.cache;vt(t,e)||(n.uniform4iv(this.addr,e),xt(t,e))}function wS(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function TS(n,e){const t=this.cache;vt(t,e)||(n.uniform2uiv(this.addr,e),xt(t,e))}function ES(n,e){const t=this.cache;vt(t,e)||(n.uniform3uiv(this.addr,e),xt(t,e))}function AS(n,e){const t=this.cache;vt(t,e)||(n.uniform4uiv(this.addr,e),xt(t,e))}function CS(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2D(e||$m,r)}function RS(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Km,r)}function LS(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Zm,r)}function PS(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Ym,r)}function IS(n){switch(n){case 5126:return dS;case 35664:return pS;case 35665:return mS;case 35666:return gS;case 35674:return _S;case 35675:return vS;case 35676:return xS;case 5124:case 35670:return yS;case 35667:case 35671:return bS;case 35668:case 35672:return MS;case 35669:case 35673:return SS;case 5125:return wS;case 36294:return TS;case 36295:return ES;case 36296:return AS;case 35678:case 36198:case 36298:case 36306:case 35682:return CS;case 35679:case 36299:case 36307:return RS;case 35680:case 36300:case 36308:case 36293:return LS;case 36289:case 36303:case 36311:case 36292:return PS}}function DS(n,e){n.uniform1fv(this.addr,e)}function NS(n,e){const t=ds(e,this.size,2);n.uniform2fv(this.addr,t)}function OS(n,e){const t=ds(e,this.size,3);n.uniform3fv(this.addr,t)}function FS(n,e){const t=ds(e,this.size,4);n.uniform4fv(this.addr,t)}function kS(n,e){const t=ds(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function US(n,e){const t=ds(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function zS(n,e){const t=ds(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function BS(n,e){n.uniform1iv(this.addr,e)}function HS(n,e){n.uniform2iv(this.addr,e)}function VS(n,e){n.uniform3iv(this.addr,e)}function GS(n,e){n.uniform4iv(this.addr,e)}function WS(n,e){n.uniform1uiv(this.addr,e)}function jS(n,e){n.uniform2uiv(this.addr,e)}function XS(n,e){n.uniform3uiv(this.addr,e)}function qS(n,e){n.uniform4uiv(this.addr,e)}function $S(n,e,t){const i=this.cache,r=e.length,s=Zo(t,r);vt(i,s)||(n.uniform1iv(this.addr,s),xt(i,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||$m,s[a])}function YS(n,e,t){const i=this.cache,r=e.length,s=Zo(t,r);vt(i,s)||(n.uniform1iv(this.addr,s),xt(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Km,s[a])}function KS(n,e,t){const i=this.cache,r=e.length,s=Zo(t,r);vt(i,s)||(n.uniform1iv(this.addr,s),xt(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Zm,s[a])}function ZS(n,e,t){const i=this.cache,r=e.length,s=Zo(t,r);vt(i,s)||(n.uniform1iv(this.addr,s),xt(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Ym,s[a])}function JS(n){switch(n){case 5126:return DS;case 35664:return NS;case 35665:return OS;case 35666:return FS;case 35674:return kS;case 35675:return US;case 35676:return zS;case 5124:case 35670:return BS;case 35667:case 35671:return HS;case 35668:case 35672:return VS;case 35669:case 35673:return GS;case 5125:return WS;case 36294:return jS;case 36295:return XS;case 36296:return qS;case 35678:case 36198:case 36298:case 36306:case 35682:return $S;case 35679:case 36299:case 36307:return YS;case 35680:case 36300:case 36308:case 36293:return KS;case 36289:case 36303:case 36311:case 36292:return ZS}}class QS{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=IS(t.type)}}class ew{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=JS(t.type)}}class tw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const ql=/(\w+)(\])?(\[|\.)?/g;function Yh(n,e){n.seq.push(e),n.map[e.id]=e}function nw(n,e,t){const i=n.name,r=i.length;for(ql.lastIndex=0;;){const s=ql.exec(i),a=ql.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Yh(t,c===void 0?new QS(o,n,e):new ew(o,n,e));break}else{let f=t.map[o];f===void 0&&(f=new tw(o),Yh(t,f)),t=f}}}class go{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,35718);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);nw(s,a,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function Kh(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}let iw=0;function rw(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}function sw(n){switch(n){case lr:return["Linear","( value )"];case Ke:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",n),["Linear","( value )"]}}function Zh(n,e,t){const i=n.getShaderParameter(e,35713),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+rw(n.getShaderSource(e),a)}else return r}function aw(n,e){const t=sw(e);return"vec4 "+n+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function ow(n,e){let t;switch(e){case py:t="Linear";break;case my:t="Reinhard";break;case gy:t="OptimizedCineon";break;case _y:t="ACESFilmic";break;case vy:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function lw(n){return[n.extensionDerivatives||!!n.envMapCubeUVHeight||n.bumpMap||n.tangentSpaceNormalMap||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Cs).join(`
`)}function cw(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function uw(n,e){const t={},i=n.getProgramParameter(e,35721);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===35674&&(o=2),s.type===35675&&(o=3),s.type===35676&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Cs(n){return n!==""}function Jh(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Qh(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const fw=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ic(n){return n.replace(fw,hw)}function hw(n,e){const t=Ve[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Ic(t)}const dw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ed(n){return n.replace(dw,pw)}function pw(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function td(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function mw(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Am?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Xx?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===As&&(e="SHADOWMAP_TYPE_VSM"),e}function gw(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Jr:case Qr:e="ENVMAP_TYPE_CUBE";break;case Ko:e="ENVMAP_TYPE_CUBE_UV";break}return e}function _w(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Qr:e="ENVMAP_MODE_REFRACTION";break}return e}function vw(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Lm:e="ENVMAP_BLENDING_MULTIPLY";break;case hy:e="ENVMAP_BLENDING_MIX";break;case dy:e="ENVMAP_BLENDING_ADD";break}return e}function xw(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function yw(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=mw(t),c=gw(t),u=_w(t),f=vw(t),h=xw(t),m=t.isWebGL2?"":lw(t),g=cw(s),p=r.createProgram();let d,_,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=[g].filter(Cs).join(`
`),d.length>0&&(d+=`
`),_=[m,g].filter(Cs).join(`
`),_.length>0&&(_+=`
`)):(d=[td(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Cs).join(`
`),_=[m,td(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Yn?"#define TONE_MAPPING":"",t.toneMapping!==Yn?Ve.tonemapping_pars_fragment:"",t.toneMapping!==Yn?ow("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ve.encodings_pars_fragment,aw("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Cs).join(`
`)),a=Ic(a),a=Jh(a,t),a=Qh(a,t),o=Ic(o),o=Jh(o,t),o=Qh(o,t),a=ed(a),o=ed(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,d=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,_=["#define varying in",t.glslVersion===wh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===wh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const S=v+d+a,x=v+_+o,w=Kh(r,35633,S),R=Kh(r,35632,x);if(r.attachShader(p,w),r.attachShader(p,R),t.index0AttributeName!==void 0?r.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p),n.debug.checkShaderErrors){const A=r.getProgramInfoLog(p).trim(),F=r.getShaderInfoLog(w).trim(),ee=r.getShaderInfoLog(R).trim();let X=!0,H=!0;if(r.getProgramParameter(p,35714)===!1){X=!1;const U=Zh(r,w,"vertex"),Y=Zh(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,35715)+`

Program Info Log: `+A+`
`+U+`
`+Y)}else A!==""?console.warn("THREE.WebGLProgram: Program Info Log:",A):(F===""||ee==="")&&(H=!1);H&&(this.diagnostics={runnable:X,programLog:A,vertexShader:{log:F,prefix:d},fragmentShader:{log:ee,prefix:_}})}r.deleteShader(w),r.deleteShader(R);let D;this.getUniforms=function(){return D===void 0&&(D=new go(r,p)),D};let b;return this.getAttributes=function(){return b===void 0&&(b=uw(r,p)),b},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.name=t.shaderName,this.id=iw++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=w,this.fragmentShader=R,this}let bw=0;class Mw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Sw(e),t.set(e,i)),i}}class Sw{constructor(e){this.id=bw++,this.code=e,this.usedTimes=0}}function ww(n,e,t,i,r,s,a){const o=new Hm,l=new Mw,c=[],u=r.isWebGL2,f=r.logarithmicDepthBuffer,h=r.vertexTextures;let m=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(b,A,F,ee,X){const H=ee.fog,U=X.geometry,Y=b.isMeshStandardMaterial?ee.environment:null,Z=(b.isMeshStandardMaterial?t:e).get(b.envMap||Y),ie=!!Z&&Z.mapping===Ko?Z.image.height:null,q=g[b.type];b.precision!==null&&(m=r.getMaxPrecision(b.precision),m!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",m,"instead."));const z=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,W=z!==void 0?z.length:0;let me=0;U.morphAttributes.position!==void 0&&(me=1),U.morphAttributes.normal!==void 0&&(me=2),U.morphAttributes.color!==void 0&&(me=3);let ae,pe,Ae,G;if(q){const Te=Tn[q];ae=Te.vertexShader,pe=Te.fragmentShader}else ae=b.vertexShader,pe=b.fragmentShader,l.update(b),Ae=l.getVertexShaderID(b),G=l.getFragmentShaderID(b);const k=n.getRenderTarget(),se=b.alphaTest>0,le=b.clearcoat>0,be=b.iridescence>0;return{isWebGL2:u,shaderID:q,shaderName:b.type,vertexShader:ae,fragmentShader:pe,defines:b.defines,customVertexShaderID:Ae,customFragmentShaderID:G,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:m,instancing:X.isInstancedMesh===!0,instancingColor:X.isInstancedMesh===!0&&X.instanceColor!==null,supportsVertexTextures:h,outputEncoding:k===null?n.outputEncoding:k.isXRRenderTarget===!0?k.texture.encoding:lr,map:!!b.map,matcap:!!b.matcap,envMap:!!Z,envMapMode:Z&&Z.mapping,envMapCubeUVHeight:ie,lightMap:!!b.lightMap,aoMap:!!b.aoMap,emissiveMap:!!b.emissiveMap,bumpMap:!!b.bumpMap,normalMap:!!b.normalMap,objectSpaceNormalMap:b.normalMapType===Uy,tangentSpaceNormalMap:b.normalMapType===bu,decodeVideoTexture:!!b.map&&b.map.isVideoTexture===!0&&b.map.encoding===Ke,clearcoat:le,clearcoatMap:le&&!!b.clearcoatMap,clearcoatRoughnessMap:le&&!!b.clearcoatRoughnessMap,clearcoatNormalMap:le&&!!b.clearcoatNormalMap,iridescence:be,iridescenceMap:be&&!!b.iridescenceMap,iridescenceThicknessMap:be&&!!b.iridescenceThicknessMap,displacementMap:!!b.displacementMap,roughnessMap:!!b.roughnessMap,metalnessMap:!!b.metalnessMap,specularMap:!!b.specularMap,specularIntensityMap:!!b.specularIntensityMap,specularColorMap:!!b.specularColorMap,opaque:b.transparent===!1&&b.blending===jr,alphaMap:!!b.alphaMap,alphaTest:se,gradientMap:!!b.gradientMap,sheen:b.sheen>0,sheenColorMap:!!b.sheenColorMap,sheenRoughnessMap:!!b.sheenRoughnessMap,transmission:b.transmission>0,transmissionMap:!!b.transmissionMap,thicknessMap:!!b.thicknessMap,combine:b.combine,vertexTangents:!!b.normalMap&&!!U.attributes.tangent,vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,vertexUvs:!!b.map||!!b.bumpMap||!!b.normalMap||!!b.specularMap||!!b.alphaMap||!!b.emissiveMap||!!b.roughnessMap||!!b.metalnessMap||!!b.clearcoatMap||!!b.clearcoatRoughnessMap||!!b.clearcoatNormalMap||!!b.iridescenceMap||!!b.iridescenceThicknessMap||!!b.displacementMap||!!b.transmissionMap||!!b.thicknessMap||!!b.specularIntensityMap||!!b.specularColorMap||!!b.sheenColorMap||!!b.sheenRoughnessMap,uvsVertexOnly:!(!!b.map||!!b.bumpMap||!!b.normalMap||!!b.specularMap||!!b.alphaMap||!!b.emissiveMap||!!b.roughnessMap||!!b.metalnessMap||!!b.clearcoatNormalMap||!!b.iridescenceMap||!!b.iridescenceThicknessMap||b.transmission>0||!!b.transmissionMap||!!b.thicknessMap||!!b.specularIntensityMap||!!b.specularColorMap||b.sheen>0||!!b.sheenColorMap||!!b.sheenRoughnessMap)&&!!b.displacementMap,fog:!!H,useFog:b.fog===!0,fogExp2:H&&H.isFogExp2,flatShading:!!b.flatShading,sizeAttenuation:b.sizeAttenuation,logarithmicDepthBuffer:f,skinning:X.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:W,morphTextureStride:me,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:n.shadowMap.enabled&&F.length>0,shadowMapType:n.shadowMap.type,toneMapping:b.toneMapped?n.toneMapping:Yn,physicallyCorrectLights:n.physicallyCorrectLights,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Xn,flipSided:b.side===tn,useDepthPacking:!!b.depthPacking,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionDerivatives:b.extensions&&b.extensions.derivatives,extensionFragDepth:b.extensions&&b.extensions.fragDepth,extensionDrawBuffers:b.extensions&&b.extensions.drawBuffers,extensionShaderTextureLOD:b.extensions&&b.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),customProgramCacheKey:b.customProgramCacheKey()}}function d(b){const A=[];if(b.shaderID?A.push(b.shaderID):(A.push(b.customVertexShaderID),A.push(b.customFragmentShaderID)),b.defines!==void 0)for(const F in b.defines)A.push(F),A.push(b.defines[F]);return b.isRawShaderMaterial===!1&&(_(A,b),v(A,b),A.push(n.outputEncoding)),A.push(b.customProgramCacheKey),A.join()}function _(b,A){b.push(A.precision),b.push(A.outputEncoding),b.push(A.envMapMode),b.push(A.envMapCubeUVHeight),b.push(A.combine),b.push(A.vertexUvs),b.push(A.fogExp2),b.push(A.sizeAttenuation),b.push(A.morphTargetsCount),b.push(A.morphAttributeCount),b.push(A.numDirLights),b.push(A.numPointLights),b.push(A.numSpotLights),b.push(A.numSpotLightMaps),b.push(A.numHemiLights),b.push(A.numRectAreaLights),b.push(A.numDirLightShadows),b.push(A.numPointLightShadows),b.push(A.numSpotLightShadows),b.push(A.numSpotLightShadowsWithMaps),b.push(A.shadowMapType),b.push(A.toneMapping),b.push(A.numClippingPlanes),b.push(A.numClipIntersection),b.push(A.depthPacking)}function v(b,A){o.disableAll(),A.isWebGL2&&o.enable(0),A.supportsVertexTextures&&o.enable(1),A.instancing&&o.enable(2),A.instancingColor&&o.enable(3),A.map&&o.enable(4),A.matcap&&o.enable(5),A.envMap&&o.enable(6),A.lightMap&&o.enable(7),A.aoMap&&o.enable(8),A.emissiveMap&&o.enable(9),A.bumpMap&&o.enable(10),A.normalMap&&o.enable(11),A.objectSpaceNormalMap&&o.enable(12),A.tangentSpaceNormalMap&&o.enable(13),A.clearcoat&&o.enable(14),A.clearcoatMap&&o.enable(15),A.clearcoatRoughnessMap&&o.enable(16),A.clearcoatNormalMap&&o.enable(17),A.iridescence&&o.enable(18),A.iridescenceMap&&o.enable(19),A.iridescenceThicknessMap&&o.enable(20),A.displacementMap&&o.enable(21),A.specularMap&&o.enable(22),A.roughnessMap&&o.enable(23),A.metalnessMap&&o.enable(24),A.gradientMap&&o.enable(25),A.alphaMap&&o.enable(26),A.alphaTest&&o.enable(27),A.vertexColors&&o.enable(28),A.vertexAlphas&&o.enable(29),A.vertexUvs&&o.enable(30),A.vertexTangents&&o.enable(31),A.uvsVertexOnly&&o.enable(32),b.push(o.mask),o.disableAll(),A.fog&&o.enable(0),A.useFog&&o.enable(1),A.flatShading&&o.enable(2),A.logarithmicDepthBuffer&&o.enable(3),A.skinning&&o.enable(4),A.morphTargets&&o.enable(5),A.morphNormals&&o.enable(6),A.morphColors&&o.enable(7),A.premultipliedAlpha&&o.enable(8),A.shadowMapEnabled&&o.enable(9),A.physicallyCorrectLights&&o.enable(10),A.doubleSided&&o.enable(11),A.flipSided&&o.enable(12),A.useDepthPacking&&o.enable(13),A.dithering&&o.enable(14),A.specularIntensityMap&&o.enable(15),A.specularColorMap&&o.enable(16),A.transmission&&o.enable(17),A.transmissionMap&&o.enable(18),A.thicknessMap&&o.enable(19),A.sheen&&o.enable(20),A.sheenColorMap&&o.enable(21),A.sheenRoughnessMap&&o.enable(22),A.decodeVideoTexture&&o.enable(23),A.opaque&&o.enable(24),b.push(o.mask)}function S(b){const A=g[b.type];let F;if(A){const ee=Tn[A];F=Wm.clone(ee.uniforms)}else F=b.uniforms;return F}function x(b,A){let F;for(let ee=0,X=c.length;ee<X;ee++){const H=c[ee];if(H.cacheKey===A){F=H,++F.usedTimes;break}}return F===void 0&&(F=new yw(n,A,b,s),c.push(F)),F}function w(b){if(--b.usedTimes===0){const A=c.indexOf(b);c[A]=c[c.length-1],c.pop(),b.destroy()}}function R(b){l.remove(b)}function D(){l.dispose()}return{getParameters:p,getProgramCacheKey:d,getUniforms:S,acquireProgram:x,releaseProgram:w,releaseShaderCache:R,programs:c,dispose:D}}function Tw(){let n=new WeakMap;function e(s){let a=n.get(s);return a===void 0&&(a={},n.set(s,a)),a}function t(s){n.delete(s)}function i(s,a,o){n.get(s)[a]=o}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function Ew(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function nd(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function id(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(f,h,m,g,p,d){let _=n[e];return _===void 0?(_={id:f.id,object:f,geometry:h,material:m,groupOrder:g,renderOrder:f.renderOrder,z:p,group:d},n[e]=_):(_.id=f.id,_.object=f,_.geometry=h,_.material=m,_.groupOrder=g,_.renderOrder=f.renderOrder,_.z=p,_.group=d),e++,_}function o(f,h,m,g,p,d){const _=a(f,h,m,g,p,d);m.transmission>0?i.push(_):m.transparent===!0?r.push(_):t.push(_)}function l(f,h,m,g,p,d){const _=a(f,h,m,g,p,d);m.transmission>0?i.unshift(_):m.transparent===!0?r.unshift(_):t.unshift(_)}function c(f,h){t.length>1&&t.sort(f||Ew),i.length>1&&i.sort(h||nd),r.length>1&&r.sort(h||nd)}function u(){for(let f=e,h=n.length;f<h;f++){const m=n[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function Aw(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new id,n.set(i,[a])):r>=s.length?(a=new id,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function Cw(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new Fe};break;case"SpotLight":t={position:new I,direction:new I,color:new Fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new Fe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new Fe,groundColor:new Fe};break;case"RectAreaLight":t={color:new Fe,position:new I,halfWidth:new I,halfHeight:new I};break}return n[e.id]=t,t}}}function Rw(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Lw=0;function Pw(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Iw(n,e){const t=new Cw,i=Rw(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)r.probe.push(new I);const s=new I,a=new je,o=new je;function l(u,f){let h=0,m=0,g=0;for(let ee=0;ee<9;ee++)r.probe[ee].set(0,0,0);let p=0,d=0,_=0,v=0,S=0,x=0,w=0,R=0,D=0,b=0;u.sort(Pw);const A=f!==!0?Math.PI:1;for(let ee=0,X=u.length;ee<X;ee++){const H=u[ee],U=H.color,Y=H.intensity,Z=H.distance,ie=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)h+=U.r*Y*A,m+=U.g*Y*A,g+=U.b*Y*A;else if(H.isLightProbe)for(let q=0;q<9;q++)r.probe[q].addScaledVector(H.sh.coefficients[q],Y);else if(H.isDirectionalLight){const q=t.get(H);if(q.color.copy(H.color).multiplyScalar(H.intensity*A),H.castShadow){const z=H.shadow,W=i.get(H);W.shadowBias=z.bias,W.shadowNormalBias=z.normalBias,W.shadowRadius=z.radius,W.shadowMapSize=z.mapSize,r.directionalShadow[p]=W,r.directionalShadowMap[p]=ie,r.directionalShadowMatrix[p]=H.shadow.matrix,x++}r.directional[p]=q,p++}else if(H.isSpotLight){const q=t.get(H);q.position.setFromMatrixPosition(H.matrixWorld),q.color.copy(U).multiplyScalar(Y*A),q.distance=Z,q.coneCos=Math.cos(H.angle),q.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),q.decay=H.decay,r.spot[_]=q;const z=H.shadow;if(H.map&&(r.spotLightMap[D]=H.map,D++,z.updateMatrices(H),H.castShadow&&b++),r.spotLightMatrix[_]=z.matrix,H.castShadow){const W=i.get(H);W.shadowBias=z.bias,W.shadowNormalBias=z.normalBias,W.shadowRadius=z.radius,W.shadowMapSize=z.mapSize,r.spotShadow[_]=W,r.spotShadowMap[_]=ie,R++}_++}else if(H.isRectAreaLight){const q=t.get(H);q.color.copy(U).multiplyScalar(Y),q.halfWidth.set(H.width*.5,0,0),q.halfHeight.set(0,H.height*.5,0),r.rectArea[v]=q,v++}else if(H.isPointLight){const q=t.get(H);if(q.color.copy(H.color).multiplyScalar(H.intensity*A),q.distance=H.distance,q.decay=H.decay,H.castShadow){const z=H.shadow,W=i.get(H);W.shadowBias=z.bias,W.shadowNormalBias=z.normalBias,W.shadowRadius=z.radius,W.shadowMapSize=z.mapSize,W.shadowCameraNear=z.camera.near,W.shadowCameraFar=z.camera.far,r.pointShadow[d]=W,r.pointShadowMap[d]=ie,r.pointShadowMatrix[d]=H.shadow.matrix,w++}r.point[d]=q,d++}else if(H.isHemisphereLight){const q=t.get(H);q.skyColor.copy(H.color).multiplyScalar(Y*A),q.groundColor.copy(H.groundColor).multiplyScalar(Y*A),r.hemi[S]=q,S++}}v>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=xe.LTC_FLOAT_1,r.rectAreaLTC2=xe.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=xe.LTC_HALF_1,r.rectAreaLTC2=xe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=m,r.ambient[2]=g;const F=r.hash;(F.directionalLength!==p||F.pointLength!==d||F.spotLength!==_||F.rectAreaLength!==v||F.hemiLength!==S||F.numDirectionalShadows!==x||F.numPointShadows!==w||F.numSpotShadows!==R||F.numSpotMaps!==D)&&(r.directional.length=p,r.spot.length=_,r.rectArea.length=v,r.point.length=d,r.hemi.length=S,r.directionalShadow.length=x,r.directionalShadowMap.length=x,r.pointShadow.length=w,r.pointShadowMap.length=w,r.spotShadow.length=R,r.spotShadowMap.length=R,r.directionalShadowMatrix.length=x,r.pointShadowMatrix.length=w,r.spotLightMatrix.length=R+D-b,r.spotLightMap.length=D,r.numSpotLightShadowsWithMaps=b,F.directionalLength=p,F.pointLength=d,F.spotLength=_,F.rectAreaLength=v,F.hemiLength=S,F.numDirectionalShadows=x,F.numPointShadows=w,F.numSpotShadows=R,F.numSpotMaps=D,r.version=Lw++)}function c(u,f){let h=0,m=0,g=0,p=0,d=0;const _=f.matrixWorldInverse;for(let v=0,S=u.length;v<S;v++){const x=u[v];if(x.isDirectionalLight){const w=r.directional[h];w.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(_),h++}else if(x.isSpotLight){const w=r.spot[g];w.position.setFromMatrixPosition(x.matrixWorld),w.position.applyMatrix4(_),w.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(_),g++}else if(x.isRectAreaLight){const w=r.rectArea[p];w.position.setFromMatrixPosition(x.matrixWorld),w.position.applyMatrix4(_),o.identity(),a.copy(x.matrixWorld),a.premultiply(_),o.extractRotation(a),w.halfWidth.set(x.width*.5,0,0),w.halfHeight.set(0,x.height*.5,0),w.halfWidth.applyMatrix4(o),w.halfHeight.applyMatrix4(o),p++}else if(x.isPointLight){const w=r.point[m];w.position.setFromMatrixPosition(x.matrixWorld),w.position.applyMatrix4(_),m++}else if(x.isHemisphereLight){const w=r.hemi[d];w.direction.setFromMatrixPosition(x.matrixWorld),w.direction.transformDirection(_),d++}}}return{setup:l,setupView:c,state:r}}function rd(n,e){const t=new Iw(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function a(f){i.push(f)}function o(f){r.push(f)}function l(f){t.setup(i,f)}function c(f){t.setupView(i,f)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function Dw(n,e){let t=new WeakMap;function i(s,a=0){const o=t.get(s);let l;return o===void 0?(l=new rd(n,e),t.set(s,[l])):a>=o.length?(l=new rd(n,e),o.push(l)):l=o[a],l}function r(){t=new WeakMap}return{get:i,dispose:r}}class Nw extends Cn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Fy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Ow extends Cn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new I,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Fw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,kw=`uniform sampler2D shadow_pass;
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
}`;function Uw(n,e,t){let i=new wu;const r=new Oe,s=new Oe,a=new nt,o=new Nw({depthPacking:ky}),l=new Ow,c={},u=t.maxTextureSize,f={0:tn,1:ar,2:Xn},h=new Zn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Oe},radius:{value:4}},vertexShader:Fw,fragmentShader:kw}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const g=new nn;g.setAttribute("position",new Vt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p=new pn(g,h),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Am,this.render=function(x,w,R){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||x.length===0)return;const D=n.getRenderTarget(),b=n.getActiveCubeFace(),A=n.getActiveMipmapLevel(),F=n.state;F.setBlending(Ei),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);for(let ee=0,X=x.length;ee<X;ee++){const H=x[ee],U=H.shadow;if(U===void 0){console.warn("THREE.WebGLShadowMap:",H,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;r.copy(U.mapSize);const Y=U.getFrameExtents();if(r.multiply(Y),s.copy(U.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/Y.x),r.x=s.x*Y.x,U.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/Y.y),r.y=s.y*Y.y,U.mapSize.y=s.y)),U.map===null){const ie=this.type!==As?{minFilter:wt,magFilter:wt}:{};U.map=new Ri(r.x,r.y,ie),U.map.texture.name=H.name+".shadowMap",U.camera.updateProjectionMatrix()}n.setRenderTarget(U.map),n.clear();const Z=U.getViewportCount();for(let ie=0;ie<Z;ie++){const q=U.getViewport(ie);a.set(s.x*q.x,s.y*q.y,s.x*q.z,s.y*q.w),F.viewport(a),U.updateMatrices(H,ie),i=U.getFrustum(),S(w,R,U.camera,H,this.type)}U.isPointLightShadow!==!0&&this.type===As&&_(U,R),U.needsUpdate=!1}d.needsUpdate=!1,n.setRenderTarget(D,b,A)};function _(x,w){const R=e.update(p);h.defines.VSM_SAMPLES!==x.blurSamples&&(h.defines.VSM_SAMPLES=x.blurSamples,m.defines.VSM_SAMPLES=x.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),x.mapPass===null&&(x.mapPass=new Ri(r.x,r.y)),h.uniforms.shadow_pass.value=x.map.texture,h.uniforms.resolution.value=x.mapSize,h.uniforms.radius.value=x.radius,n.setRenderTarget(x.mapPass),n.clear(),n.renderBufferDirect(w,null,R,h,p,null),m.uniforms.shadow_pass.value=x.mapPass.texture,m.uniforms.resolution.value=x.mapSize,m.uniforms.radius.value=x.radius,n.setRenderTarget(x.map),n.clear(),n.renderBufferDirect(w,null,R,m,p,null)}function v(x,w,R,D,b,A){let F=null;const ee=R.isPointLight===!0?x.customDistanceMaterial:x.customDepthMaterial;if(ee!==void 0?F=ee:F=R.isPointLight===!0?l:o,n.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0){const X=F.uuid,H=w.uuid;let U=c[X];U===void 0&&(U={},c[X]=U);let Y=U[H];Y===void 0&&(Y=F.clone(),U[H]=Y),F=Y}return F.visible=w.visible,F.wireframe=w.wireframe,A===As?F.side=w.shadowSide!==null?w.shadowSide:w.side:F.side=w.shadowSide!==null?w.shadowSide:f[w.side],F.alphaMap=w.alphaMap,F.alphaTest=w.alphaTest,F.clipShadows=w.clipShadows,F.clippingPlanes=w.clippingPlanes,F.clipIntersection=w.clipIntersection,F.displacementMap=w.displacementMap,F.displacementScale=w.displacementScale,F.displacementBias=w.displacementBias,F.wireframeLinewidth=w.wireframeLinewidth,F.linewidth=w.linewidth,R.isPointLight===!0&&F.isMeshDistanceMaterial===!0&&(F.referencePosition.setFromMatrixPosition(R.matrixWorld),F.nearDistance=D,F.farDistance=b),F}function S(x,w,R,D,b){if(x.visible===!1)return;if(x.layers.test(w.layers)&&(x.isMesh||x.isLine||x.isPoints)&&(x.castShadow||x.receiveShadow&&b===As)&&(!x.frustumCulled||i.intersectsObject(x))){x.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,x.matrixWorld);const ee=e.update(x),X=x.material;if(Array.isArray(X)){const H=ee.groups;for(let U=0,Y=H.length;U<Y;U++){const Z=H[U],ie=X[Z.materialIndex];if(ie&&ie.visible){const q=v(x,ie,D,R.near,R.far,b);n.renderBufferDirect(R,null,ee,q,x,Z)}}}else if(X.visible){const H=v(x,X,D,R.near,R.far,b);n.renderBufferDirect(R,null,ee,H,x,null)}}const F=x.children;for(let ee=0,X=F.length;ee<X;ee++)S(F[ee],w,R,D,b)}}function zw(n,e,t){const i=t.isWebGL2;function r(){let P=!1;const Se=new nt;let ve=null;const re=new nt(0,0,0,0);return{setMask:function(ye){ve!==ye&&!P&&(n.colorMask(ye,ye,ye,ye),ve=ye)},setLocked:function(ye){P=ye},setClear:function(ye,De,rt,dt,ii){ii===!0&&(ye*=dt,De*=dt,rt*=dt),Se.set(ye,De,rt,dt),re.equals(Se)===!1&&(n.clearColor(ye,De,rt,dt),re.copy(Se))},reset:function(){P=!1,ve=null,re.set(-1,0,0,0)}}}function s(){let P=!1,Se=null,ve=null,re=null;return{setTest:function(ye){ye?se(2929):le(2929)},setMask:function(ye){Se!==ye&&!P&&(n.depthMask(ye),Se=ye)},setFunc:function(ye){if(ve!==ye){switch(ye){case sy:n.depthFunc(512);break;case ay:n.depthFunc(519);break;case oy:n.depthFunc(513);break;case wc:n.depthFunc(515);break;case ly:n.depthFunc(514);break;case cy:n.depthFunc(518);break;case uy:n.depthFunc(516);break;case fy:n.depthFunc(517);break;default:n.depthFunc(515)}ve=ye}},setLocked:function(ye){P=ye},setClear:function(ye){re!==ye&&(n.clearDepth(ye),re=ye)},reset:function(){P=!1,Se=null,ve=null,re=null}}}function a(){let P=!1,Se=null,ve=null,re=null,ye=null,De=null,rt=null,dt=null,ii=null;return{setTest:function(ut){P||(ut?se(2960):le(2960))},setMask:function(ut){Se!==ut&&!P&&(n.stencilMask(ut),Se=ut)},setFunc:function(ut,Dn,Xt){(ve!==ut||re!==Dn||ye!==Xt)&&(n.stencilFunc(ut,Dn,Xt),ve=ut,re=Dn,ye=Xt)},setOp:function(ut,Dn,Xt){(De!==ut||rt!==Dn||dt!==Xt)&&(n.stencilOp(ut,Dn,Xt),De=ut,rt=Dn,dt=Xt)},setLocked:function(ut){P=ut},setClear:function(ut){ii!==ut&&(n.clearStencil(ut),ii=ut)},reset:function(){P=!1,Se=null,ve=null,re=null,ye=null,De=null,rt=null,dt=null,ii=null}}}const o=new r,l=new s,c=new a,u=new WeakMap,f=new WeakMap;let h={},m={},g=new WeakMap,p=[],d=null,_=!1,v=null,S=null,x=null,w=null,R=null,D=null,b=null,A=!1,F=null,ee=null,X=null,H=null,U=null;const Y=n.getParameter(35661);let Z=!1,ie=0;const q=n.getParameter(7938);q.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec(q)[1]),Z=ie>=1):q.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),Z=ie>=2);let z=null,W={};const me=n.getParameter(3088),ae=n.getParameter(2978),pe=new nt().fromArray(me),Ae=new nt().fromArray(ae);function G(P,Se,ve){const re=new Uint8Array(4),ye=n.createTexture();n.bindTexture(P,ye),n.texParameteri(P,10241,9728),n.texParameteri(P,10240,9728);for(let De=0;De<ve;De++)n.texImage2D(Se+De,0,6408,1,1,0,6408,5121,re);return ye}const k={};k[3553]=G(3553,3553,1),k[34067]=G(34067,34069,6),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),se(2929),l.setFunc(wc),J(!1),te($f),se(2884),L(Ei);function se(P){h[P]!==!0&&(n.enable(P),h[P]=!0)}function le(P){h[P]!==!1&&(n.disable(P),h[P]=!1)}function be(P,Se){return m[P]!==Se?(n.bindFramebuffer(P,Se),m[P]=Se,i&&(P===36009&&(m[36160]=Se),P===36160&&(m[36009]=Se)),!0):!1}function he(P,Se){let ve=p,re=!1;if(P)if(ve=g.get(Se),ve===void 0&&(ve=[],g.set(Se,ve)),P.isWebGLMultipleRenderTargets){const ye=P.texture;if(ve.length!==ye.length||ve[0]!==36064){for(let De=0,rt=ye.length;De<rt;De++)ve[De]=36064+De;ve.length=ye.length,re=!0}}else ve[0]!==36064&&(ve[0]=36064,re=!0);else ve[0]!==1029&&(ve[0]=1029,re=!0);re&&(t.isWebGL2?n.drawBuffers(ve):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ve))}function Te(P){return d!==P?(n.useProgram(P),d=P,!0):!1}const ge={[Or]:32774,[$x]:32778,[Yx]:32779};if(i)ge[Jf]=32775,ge[Qf]=32776;else{const P=e.get("EXT_blend_minmax");P!==null&&(ge[Jf]=P.MIN_EXT,ge[Qf]=P.MAX_EXT)}const T={[Kx]:0,[Zx]:1,[Jx]:768,[Cm]:770,[ry]:776,[ny]:774,[ey]:772,[Qx]:769,[Rm]:771,[iy]:775,[ty]:773};function L(P,Se,ve,re,ye,De,rt,dt){if(P===Ei){_===!0&&(le(3042),_=!1);return}if(_===!1&&(se(3042),_=!0),P!==qx){if(P!==v||dt!==A){if((S!==Or||R!==Or)&&(n.blendEquation(32774),S=Or,R=Or),dt)switch(P){case jr:n.blendFuncSeparate(1,771,1,771);break;case Yf:n.blendFunc(1,1);break;case Kf:n.blendFuncSeparate(0,769,0,1);break;case Zf:n.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case jr:n.blendFuncSeparate(770,771,1,771);break;case Yf:n.blendFunc(770,1);break;case Kf:n.blendFuncSeparate(0,769,0,1);break;case Zf:n.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}x=null,w=null,D=null,b=null,v=P,A=dt}return}ye=ye||Se,De=De||ve,rt=rt||re,(Se!==S||ye!==R)&&(n.blendEquationSeparate(ge[Se],ge[ye]),S=Se,R=ye),(ve!==x||re!==w||De!==D||rt!==b)&&(n.blendFuncSeparate(T[ve],T[re],T[De],T[rt]),x=ve,w=re,D=De,b=rt),v=P,A=null}function V(P,Se){P.side===Xn?le(2884):se(2884);let ve=P.side===tn;Se&&(ve=!ve),J(ve),P.blending===jr&&P.transparent===!1?L(Ei):L(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.premultipliedAlpha),l.setFunc(P.depthFunc),l.setTest(P.depthTest),l.setMask(P.depthWrite),o.setMask(P.colorWrite);const re=P.stencilWrite;c.setTest(re),re&&(c.setMask(P.stencilWriteMask),c.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),c.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),ue(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?se(32926):le(32926)}function J(P){F!==P&&(P?n.frontFace(2304):n.frontFace(2305),F=P)}function te(P){P!==Wx?(se(2884),P!==ee&&(P===$f?n.cullFace(1029):P===jx?n.cullFace(1028):n.cullFace(1032))):le(2884),ee=P}function ce(P){P!==X&&(Z&&n.lineWidth(P),X=P)}function ue(P,Se,ve){P?(se(32823),(H!==Se||U!==ve)&&(n.polygonOffset(Se,ve),H=Se,U=ve)):le(32823)}function fe(P){P?se(3089):le(3089)}function de(P){P===void 0&&(P=33984+Y-1),z!==P&&(n.activeTexture(P),z=P)}function M(P,Se,ve){ve===void 0&&(z===null?ve=33984+Y-1:ve=z);let re=W[ve];re===void 0&&(re={type:void 0,texture:void 0},W[ve]=re),(re.type!==P||re.texture!==Se)&&(z!==ve&&(n.activeTexture(ve),z=ve),n.bindTexture(P,Se||k[P]),re.type=P,re.texture=Se)}function y(){const P=W[z];P!==void 0&&P.type!==void 0&&(n.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function N(){try{n.compressedTexImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function $(){try{n.texSubImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function K(){try{n.texSubImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function oe(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Me(){try{n.texStorage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function C(){try{n.texStorage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function O(){try{n.texImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function _e(){try{n.texImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ee(P){pe.equals(P)===!1&&(n.scissor(P.x,P.y,P.z,P.w),pe.copy(P))}function we(P){Ae.equals(P)===!1&&(n.viewport(P.x,P.y,P.z,P.w),Ae.copy(P))}function Le(P,Se){let ve=f.get(Se);ve===void 0&&(ve=new WeakMap,f.set(Se,ve));let re=ve.get(P);re===void 0&&(re=n.getUniformBlockIndex(Se,P.name),ve.set(P,re))}function Ie(P,Se){const re=f.get(Se).get(P);u.get(P)!==re&&(n.uniformBlockBinding(Se,re,P.__bindingPointIndex),u.set(P,re))}function Ne(){n.disable(3042),n.disable(2884),n.disable(2929),n.disable(32823),n.disable(3089),n.disable(2960),n.disable(32926),n.blendEquation(32774),n.blendFunc(1,0),n.blendFuncSeparate(1,0,1,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(513),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(519,0,4294967295),n.stencilOp(7680,7680,7680),n.clearStencil(0),n.cullFace(1029),n.frontFace(2305),n.polygonOffset(0,0),n.activeTexture(33984),n.bindFramebuffer(36160,null),i===!0&&(n.bindFramebuffer(36009,null),n.bindFramebuffer(36008,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},z=null,W={},m={},g=new WeakMap,p=[],d=null,_=!1,v=null,S=null,x=null,w=null,R=null,D=null,b=null,A=!1,F=null,ee=null,X=null,H=null,U=null,pe.set(0,0,n.canvas.width,n.canvas.height),Ae.set(0,0,n.canvas.width,n.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:se,disable:le,bindFramebuffer:be,drawBuffers:he,useProgram:Te,setBlending:L,setMaterial:V,setFlipSided:J,setCullFace:te,setLineWidth:ce,setPolygonOffset:ue,setScissorTest:fe,activeTexture:de,bindTexture:M,unbindTexture:y,compressedTexImage2D:N,texImage2D:O,texImage3D:_e,updateUBOMapping:Le,uniformBlockBinding:Ie,texStorage2D:Me,texStorage3D:C,texSubImage2D:$,texSubImage3D:K,compressedTexSubImage2D:oe,scissor:Ee,viewport:we,reset:Ne}}function Bw(n,e,t,i,r,s,a){const o=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,u=r.maxTextureSize,f=r.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let p;const d=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(M,y){return _?new OffscreenCanvas(M,y):ia("canvas")}function S(M,y,N,$){let K=1;if((M.width>$||M.height>$)&&(K=$/Math.max(M.width,M.height)),K<1||y===!0)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap){const oe=y?Eo:Math.floor,Me=oe(K*M.width),C=oe(K*M.height);p===void 0&&(p=v(Me,C));const O=N?v(Me,C):p;return O.width=Me,O.height=C,O.getContext("2d").drawImage(M,0,0,Me,C),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+M.width+"x"+M.height+") to ("+Me+"x"+C+")."),O}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+M.width+"x"+M.height+")."),M;return M}function x(M){return Pc(M.width)&&Pc(M.height)}function w(M){return o?!1:M.wrapS!==Jt||M.wrapT!==Jt||M.minFilter!==wt&&M.minFilter!==Ut}function R(M,y){return M.generateMipmaps&&y&&M.minFilter!==wt&&M.minFilter!==Ut}function D(M){n.generateMipmap(M)}function b(M,y,N,$,K=!1){if(o===!1)return y;if(M!==null){if(n[M]!==void 0)return n[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let oe=y;return y===6403&&(N===5126&&(oe=33326),N===5131&&(oe=33325),N===5121&&(oe=33321)),y===33319&&(N===5126&&(oe=33328),N===5131&&(oe=33327),N===5121&&(oe=33323)),y===6408&&(N===5126&&(oe=34836),N===5131&&(oe=34842),N===5121&&(oe=$===Ke&&K===!1?35907:32856),N===32819&&(oe=32854),N===32820&&(oe=32855)),(oe===33325||oe===33326||oe===33327||oe===33328||oe===34842||oe===34836)&&e.get("EXT_color_buffer_float"),oe}function A(M,y,N){return R(M,N)===!0||M.isFramebufferTexture&&M.minFilter!==wt&&M.minFilter!==Ut?Math.log2(Math.max(y.width,y.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?y.mipmaps.length:1}function F(M){return M===wt||M===Ac||M===Cc?9728:9729}function ee(M){const y=M.target;y.removeEventListener("dispose",ee),H(y),y.isVideoTexture&&g.delete(y)}function X(M){const y=M.target;y.removeEventListener("dispose",X),Y(y)}function H(M){const y=i.get(M);if(y.__webglInit===void 0)return;const N=M.source,$=d.get(N);if($){const K=$[y.__cacheKey];K.usedTimes--,K.usedTimes===0&&U(M),Object.keys($).length===0&&d.delete(N)}i.remove(M)}function U(M){const y=i.get(M);n.deleteTexture(y.__webglTexture);const N=M.source,$=d.get(N);delete $[y.__cacheKey],a.memory.textures--}function Y(M){const y=M.texture,N=i.get(M),$=i.get(y);if($.__webglTexture!==void 0&&(n.deleteTexture($.__webglTexture),a.memory.textures--),M.depthTexture&&M.depthTexture.dispose(),M.isWebGLCubeRenderTarget)for(let K=0;K<6;K++)n.deleteFramebuffer(N.__webglFramebuffer[K]),N.__webglDepthbuffer&&n.deleteRenderbuffer(N.__webglDepthbuffer[K]);else{if(n.deleteFramebuffer(N.__webglFramebuffer),N.__webglDepthbuffer&&n.deleteRenderbuffer(N.__webglDepthbuffer),N.__webglMultisampledFramebuffer&&n.deleteFramebuffer(N.__webglMultisampledFramebuffer),N.__webglColorRenderbuffer)for(let K=0;K<N.__webglColorRenderbuffer.length;K++)N.__webglColorRenderbuffer[K]&&n.deleteRenderbuffer(N.__webglColorRenderbuffer[K]);N.__webglDepthRenderbuffer&&n.deleteRenderbuffer(N.__webglDepthRenderbuffer)}if(M.isWebGLMultipleRenderTargets)for(let K=0,oe=y.length;K<oe;K++){const Me=i.get(y[K]);Me.__webglTexture&&(n.deleteTexture(Me.__webglTexture),a.memory.textures--),i.remove(y[K])}i.remove(y),i.remove(M)}let Z=0;function ie(){Z=0}function q(){const M=Z;return M>=l&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+l),Z+=1,M}function z(M){const y=[];return y.push(M.wrapS),y.push(M.wrapT),y.push(M.magFilter),y.push(M.minFilter),y.push(M.anisotropy),y.push(M.internalFormat),y.push(M.format),y.push(M.type),y.push(M.generateMipmaps),y.push(M.premultiplyAlpha),y.push(M.flipY),y.push(M.unpackAlignment),y.push(M.encoding),y.join()}function W(M,y){const N=i.get(M);if(M.isVideoTexture&&fe(M),M.isRenderTargetTexture===!1&&M.version>0&&N.__version!==M.version){const $=M.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{le(N,M,y);return}}t.bindTexture(3553,N.__webglTexture,33984+y)}function me(M,y){const N=i.get(M);if(M.version>0&&N.__version!==M.version){le(N,M,y);return}t.bindTexture(35866,N.__webglTexture,33984+y)}function ae(M,y){const N=i.get(M);if(M.version>0&&N.__version!==M.version){le(N,M,y);return}t.bindTexture(32879,N.__webglTexture,33984+y)}function pe(M,y){const N=i.get(M);if(M.version>0&&N.__version!==M.version){be(N,M,y);return}t.bindTexture(34067,N.__webglTexture,33984+y)}const Ae={[es]:10497,[Jt]:33071,[To]:33648},G={[wt]:9728,[Ac]:9984,[Cc]:9986,[Ut]:9729,[Im]:9985,[us]:9987};function k(M,y,N){if(N?(n.texParameteri(M,10242,Ae[y.wrapS]),n.texParameteri(M,10243,Ae[y.wrapT]),(M===32879||M===35866)&&n.texParameteri(M,32882,Ae[y.wrapR]),n.texParameteri(M,10240,G[y.magFilter]),n.texParameteri(M,10241,G[y.minFilter])):(n.texParameteri(M,10242,33071),n.texParameteri(M,10243,33071),(M===32879||M===35866)&&n.texParameteri(M,32882,33071),(y.wrapS!==Jt||y.wrapT!==Jt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(M,10240,F(y.magFilter)),n.texParameteri(M,10241,F(y.minFilter)),y.minFilter!==wt&&y.minFilter!==Ut&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const $=e.get("EXT_texture_filter_anisotropic");if(y.type===bi&&e.has("OES_texture_float_linear")===!1||o===!1&&y.type===ea&&e.has("OES_texture_half_float_linear")===!1)return;(y.anisotropy>1||i.get(y).__currentAnisotropy)&&(n.texParameterf(M,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,r.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy)}}function se(M,y){let N=!1;M.__webglInit===void 0&&(M.__webglInit=!0,y.addEventListener("dispose",ee));const $=y.source;let K=d.get($);K===void 0&&(K={},d.set($,K));const oe=z(y);if(oe!==M.__cacheKey){K[oe]===void 0&&(K[oe]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,N=!0),K[oe].usedTimes++;const Me=K[M.__cacheKey];Me!==void 0&&(K[M.__cacheKey].usedTimes--,Me.usedTimes===0&&U(y)),M.__cacheKey=oe,M.__webglTexture=K[oe].texture}return N}function le(M,y,N){let $=3553;y.isDataArrayTexture&&($=35866),y.isData3DTexture&&($=32879);const K=se(M,y),oe=y.source;t.bindTexture($,M.__webglTexture,33984+N);const Me=i.get(oe);if(oe.version!==Me.__version||K===!0){t.activeTexture(33984+N),n.pixelStorei(37440,y.flipY),n.pixelStorei(37441,y.premultiplyAlpha),n.pixelStorei(3317,y.unpackAlignment),n.pixelStorei(37443,0);const C=w(y)&&x(y.image)===!1;let O=S(y.image,C,!1,u);O=de(y,O);const _e=x(O)||o,Ee=s.convert(y.format,y.encoding);let we=s.convert(y.type),Le=b(y.internalFormat,Ee,we,y.encoding,y.isVideoTexture);k($,y,_e);let Ie;const Ne=y.mipmaps,P=o&&y.isVideoTexture!==!0,Se=Me.__version===void 0||K===!0,ve=A(y,O,_e);if(y.isDepthTexture)Le=6402,o?y.type===bi?Le=36012:y.type===Ki?Le=33190:y.type===Xr?Le=35056:Le=33189:y.type===bi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),y.format===ir&&Le===6402&&y.type!==Dm&&y.type!==Ki&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),y.type=Ki,we=s.convert(y.type)),y.format===ts&&Le===6402&&(Le=34041,y.type!==Xr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),y.type=Xr,we=s.convert(y.type))),Se&&(P?t.texStorage2D(3553,1,Le,O.width,O.height):t.texImage2D(3553,0,Le,O.width,O.height,0,Ee,we,null));else if(y.isDataTexture)if(Ne.length>0&&_e){P&&Se&&t.texStorage2D(3553,ve,Le,Ne[0].width,Ne[0].height);for(let re=0,ye=Ne.length;re<ye;re++)Ie=Ne[re],P?t.texSubImage2D(3553,re,0,0,Ie.width,Ie.height,Ee,we,Ie.data):t.texImage2D(3553,re,Le,Ie.width,Ie.height,0,Ee,we,Ie.data);y.generateMipmaps=!1}else P?(Se&&t.texStorage2D(3553,ve,Le,O.width,O.height),t.texSubImage2D(3553,0,0,0,O.width,O.height,Ee,we,O.data)):t.texImage2D(3553,0,Le,O.width,O.height,0,Ee,we,O.data);else if(y.isCompressedTexture){P&&Se&&t.texStorage2D(3553,ve,Le,Ne[0].width,Ne[0].height);for(let re=0,ye=Ne.length;re<ye;re++)Ie=Ne[re],y.format!==dn?Ee!==null?P?t.compressedTexSubImage2D(3553,re,0,0,Ie.width,Ie.height,Ee,Ie.data):t.compressedTexImage2D(3553,re,Le,Ie.width,Ie.height,0,Ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):P?t.texSubImage2D(3553,re,0,0,Ie.width,Ie.height,Ee,we,Ie.data):t.texImage2D(3553,re,Le,Ie.width,Ie.height,0,Ee,we,Ie.data)}else if(y.isDataArrayTexture)P?(Se&&t.texStorage3D(35866,ve,Le,O.width,O.height,O.depth),t.texSubImage3D(35866,0,0,0,0,O.width,O.height,O.depth,Ee,we,O.data)):t.texImage3D(35866,0,Le,O.width,O.height,O.depth,0,Ee,we,O.data);else if(y.isData3DTexture)P?(Se&&t.texStorage3D(32879,ve,Le,O.width,O.height,O.depth),t.texSubImage3D(32879,0,0,0,0,O.width,O.height,O.depth,Ee,we,O.data)):t.texImage3D(32879,0,Le,O.width,O.height,O.depth,0,Ee,we,O.data);else if(y.isFramebufferTexture){if(Se)if(P)t.texStorage2D(3553,ve,Le,O.width,O.height);else{let re=O.width,ye=O.height;for(let De=0;De<ve;De++)t.texImage2D(3553,De,Le,re,ye,0,Ee,we,null),re>>=1,ye>>=1}}else if(Ne.length>0&&_e){P&&Se&&t.texStorage2D(3553,ve,Le,Ne[0].width,Ne[0].height);for(let re=0,ye=Ne.length;re<ye;re++)Ie=Ne[re],P?t.texSubImage2D(3553,re,0,0,Ee,we,Ie):t.texImage2D(3553,re,Le,Ee,we,Ie);y.generateMipmaps=!1}else P?(Se&&t.texStorage2D(3553,ve,Le,O.width,O.height),t.texSubImage2D(3553,0,0,0,Ee,we,O)):t.texImage2D(3553,0,Le,Ee,we,O);R(y,_e)&&D($),Me.__version=oe.version,y.onUpdate&&y.onUpdate(y)}M.__version=y.version}function be(M,y,N){if(y.image.length!==6)return;const $=se(M,y),K=y.source;t.bindTexture(34067,M.__webglTexture,33984+N);const oe=i.get(K);if(K.version!==oe.__version||$===!0){t.activeTexture(33984+N),n.pixelStorei(37440,y.flipY),n.pixelStorei(37441,y.premultiplyAlpha),n.pixelStorei(3317,y.unpackAlignment),n.pixelStorei(37443,0);const Me=y.isCompressedTexture||y.image[0].isCompressedTexture,C=y.image[0]&&y.image[0].isDataTexture,O=[];for(let re=0;re<6;re++)!Me&&!C?O[re]=S(y.image[re],!1,!0,c):O[re]=C?y.image[re].image:y.image[re],O[re]=de(y,O[re]);const _e=O[0],Ee=x(_e)||o,we=s.convert(y.format,y.encoding),Le=s.convert(y.type),Ie=b(y.internalFormat,we,Le,y.encoding),Ne=o&&y.isVideoTexture!==!0,P=oe.__version===void 0||$===!0;let Se=A(y,_e,Ee);k(34067,y,Ee);let ve;if(Me){Ne&&P&&t.texStorage2D(34067,Se,Ie,_e.width,_e.height);for(let re=0;re<6;re++){ve=O[re].mipmaps;for(let ye=0;ye<ve.length;ye++){const De=ve[ye];y.format!==dn?we!==null?Ne?t.compressedTexSubImage2D(34069+re,ye,0,0,De.width,De.height,we,De.data):t.compressedTexImage2D(34069+re,ye,Ie,De.width,De.height,0,De.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ne?t.texSubImage2D(34069+re,ye,0,0,De.width,De.height,we,Le,De.data):t.texImage2D(34069+re,ye,Ie,De.width,De.height,0,we,Le,De.data)}}}else{ve=y.mipmaps,Ne&&P&&(ve.length>0&&Se++,t.texStorage2D(34067,Se,Ie,O[0].width,O[0].height));for(let re=0;re<6;re++)if(C){Ne?t.texSubImage2D(34069+re,0,0,0,O[re].width,O[re].height,we,Le,O[re].data):t.texImage2D(34069+re,0,Ie,O[re].width,O[re].height,0,we,Le,O[re].data);for(let ye=0;ye<ve.length;ye++){const rt=ve[ye].image[re].image;Ne?t.texSubImage2D(34069+re,ye+1,0,0,rt.width,rt.height,we,Le,rt.data):t.texImage2D(34069+re,ye+1,Ie,rt.width,rt.height,0,we,Le,rt.data)}}else{Ne?t.texSubImage2D(34069+re,0,0,0,we,Le,O[re]):t.texImage2D(34069+re,0,Ie,we,Le,O[re]);for(let ye=0;ye<ve.length;ye++){const De=ve[ye];Ne?t.texSubImage2D(34069+re,ye+1,0,0,we,Le,De.image[re]):t.texImage2D(34069+re,ye+1,Ie,we,Le,De.image[re])}}}R(y,Ee)&&D(34067),oe.__version=K.version,y.onUpdate&&y.onUpdate(y)}M.__version=y.version}function he(M,y,N,$,K){const oe=s.convert(N.format,N.encoding),Me=s.convert(N.type),C=b(N.internalFormat,oe,Me,N.encoding);i.get(y).__hasExternalTextures||(K===32879||K===35866?t.texImage3D(K,0,C,y.width,y.height,y.depth,0,oe,Me,null):t.texImage2D(K,0,C,y.width,y.height,0,oe,Me,null)),t.bindFramebuffer(36160,M),ue(y)?h.framebufferTexture2DMultisampleEXT(36160,$,K,i.get(N).__webglTexture,0,ce(y)):n.framebufferTexture2D(36160,$,K,i.get(N).__webglTexture,0),t.bindFramebuffer(36160,null)}function Te(M,y,N){if(n.bindRenderbuffer(36161,M),y.depthBuffer&&!y.stencilBuffer){let $=33189;if(N||ue(y)){const K=y.depthTexture;K&&K.isDepthTexture&&(K.type===bi?$=36012:K.type===Ki&&($=33190));const oe=ce(y);ue(y)?h.renderbufferStorageMultisampleEXT(36161,oe,$,y.width,y.height):n.renderbufferStorageMultisample(36161,oe,$,y.width,y.height)}else n.renderbufferStorage(36161,$,y.width,y.height);n.framebufferRenderbuffer(36160,36096,36161,M)}else if(y.depthBuffer&&y.stencilBuffer){const $=ce(y);N&&ue(y)===!1?n.renderbufferStorageMultisample(36161,$,35056,y.width,y.height):ue(y)?h.renderbufferStorageMultisampleEXT(36161,$,35056,y.width,y.height):n.renderbufferStorage(36161,34041,y.width,y.height),n.framebufferRenderbuffer(36160,33306,36161,M)}else{const $=y.isWebGLMultipleRenderTargets===!0?y.texture:[y.texture];for(let K=0;K<$.length;K++){const oe=$[K],Me=s.convert(oe.format,oe.encoding),C=s.convert(oe.type),O=b(oe.internalFormat,Me,C,oe.encoding),_e=ce(y);N&&ue(y)===!1?n.renderbufferStorageMultisample(36161,_e,O,y.width,y.height):ue(y)?h.renderbufferStorageMultisampleEXT(36161,_e,O,y.width,y.height):n.renderbufferStorage(36161,O,y.width,y.height)}}n.bindRenderbuffer(36161,null)}function ge(M,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,M),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),W(y.depthTexture,0);const $=i.get(y.depthTexture).__webglTexture,K=ce(y);if(y.depthTexture.format===ir)ue(y)?h.framebufferTexture2DMultisampleEXT(36160,36096,3553,$,0,K):n.framebufferTexture2D(36160,36096,3553,$,0);else if(y.depthTexture.format===ts)ue(y)?h.framebufferTexture2DMultisampleEXT(36160,33306,3553,$,0,K):n.framebufferTexture2D(36160,33306,3553,$,0);else throw new Error("Unknown depthTexture format")}function T(M){const y=i.get(M),N=M.isWebGLCubeRenderTarget===!0;if(M.depthTexture&&!y.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");ge(y.__webglFramebuffer,M)}else if(N){y.__webglDepthbuffer=[];for(let $=0;$<6;$++)t.bindFramebuffer(36160,y.__webglFramebuffer[$]),y.__webglDepthbuffer[$]=n.createRenderbuffer(),Te(y.__webglDepthbuffer[$],M,!1)}else t.bindFramebuffer(36160,y.__webglFramebuffer),y.__webglDepthbuffer=n.createRenderbuffer(),Te(y.__webglDepthbuffer,M,!1);t.bindFramebuffer(36160,null)}function L(M,y,N){const $=i.get(M);y!==void 0&&he($.__webglFramebuffer,M,M.texture,36064,3553),N!==void 0&&T(M)}function V(M){const y=M.texture,N=i.get(M),$=i.get(y);M.addEventListener("dispose",X),M.isWebGLMultipleRenderTargets!==!0&&($.__webglTexture===void 0&&($.__webglTexture=n.createTexture()),$.__version=y.version,a.memory.textures++);const K=M.isWebGLCubeRenderTarget===!0,oe=M.isWebGLMultipleRenderTargets===!0,Me=x(M)||o;if(K){N.__webglFramebuffer=[];for(let C=0;C<6;C++)N.__webglFramebuffer[C]=n.createFramebuffer()}else{if(N.__webglFramebuffer=n.createFramebuffer(),oe)if(r.drawBuffers){const C=M.texture;for(let O=0,_e=C.length;O<_e;O++){const Ee=i.get(C[O]);Ee.__webglTexture===void 0&&(Ee.__webglTexture=n.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&M.samples>0&&ue(M)===!1){const C=oe?y:[y];N.__webglMultisampledFramebuffer=n.createFramebuffer(),N.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,N.__webglMultisampledFramebuffer);for(let O=0;O<C.length;O++){const _e=C[O];N.__webglColorRenderbuffer[O]=n.createRenderbuffer(),n.bindRenderbuffer(36161,N.__webglColorRenderbuffer[O]);const Ee=s.convert(_e.format,_e.encoding),we=s.convert(_e.type),Le=b(_e.internalFormat,Ee,we,_e.encoding,M.isXRRenderTarget===!0),Ie=ce(M);n.renderbufferStorageMultisample(36161,Ie,Le,M.width,M.height),n.framebufferRenderbuffer(36160,36064+O,36161,N.__webglColorRenderbuffer[O])}n.bindRenderbuffer(36161,null),M.depthBuffer&&(N.__webglDepthRenderbuffer=n.createRenderbuffer(),Te(N.__webglDepthRenderbuffer,M,!0)),t.bindFramebuffer(36160,null)}}if(K){t.bindTexture(34067,$.__webglTexture),k(34067,y,Me);for(let C=0;C<6;C++)he(N.__webglFramebuffer[C],M,y,36064,34069+C);R(y,Me)&&D(34067),t.unbindTexture()}else if(oe){const C=M.texture;for(let O=0,_e=C.length;O<_e;O++){const Ee=C[O],we=i.get(Ee);t.bindTexture(3553,we.__webglTexture),k(3553,Ee,Me),he(N.__webglFramebuffer,M,Ee,36064+O,3553),R(Ee,Me)&&D(3553)}t.unbindTexture()}else{let C=3553;(M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(o?C=M.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(C,$.__webglTexture),k(C,y,Me),he(N.__webglFramebuffer,M,y,36064,C),R(y,Me)&&D(C),t.unbindTexture()}M.depthBuffer&&T(M)}function J(M){const y=x(M)||o,N=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let $=0,K=N.length;$<K;$++){const oe=N[$];if(R(oe,y)){const Me=M.isWebGLCubeRenderTarget?34067:3553,C=i.get(oe).__webglTexture;t.bindTexture(Me,C),D(Me),t.unbindTexture()}}}function te(M){if(o&&M.samples>0&&ue(M)===!1){const y=M.isWebGLMultipleRenderTargets?M.texture:[M.texture],N=M.width,$=M.height;let K=16384;const oe=[],Me=M.stencilBuffer?33306:36096,C=i.get(M),O=M.isWebGLMultipleRenderTargets===!0;if(O)for(let _e=0;_e<y.length;_e++)t.bindFramebuffer(36160,C.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064+_e,36161,null),t.bindFramebuffer(36160,C.__webglFramebuffer),n.framebufferTexture2D(36009,36064+_e,3553,null,0);t.bindFramebuffer(36008,C.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,C.__webglFramebuffer);for(let _e=0;_e<y.length;_e++){oe.push(36064+_e),M.depthBuffer&&oe.push(Me);const Ee=C.__ignoreDepthValues!==void 0?C.__ignoreDepthValues:!1;if(Ee===!1&&(M.depthBuffer&&(K|=256),M.stencilBuffer&&(K|=1024)),O&&n.framebufferRenderbuffer(36008,36064,36161,C.__webglColorRenderbuffer[_e]),Ee===!0&&(n.invalidateFramebuffer(36008,[Me]),n.invalidateFramebuffer(36009,[Me])),O){const we=i.get(y[_e]).__webglTexture;n.framebufferTexture2D(36009,36064,3553,we,0)}n.blitFramebuffer(0,0,N,$,0,0,N,$,K,9728),m&&n.invalidateFramebuffer(36008,oe)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),O)for(let _e=0;_e<y.length;_e++){t.bindFramebuffer(36160,C.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064+_e,36161,C.__webglColorRenderbuffer[_e]);const Ee=i.get(y[_e]).__webglTexture;t.bindFramebuffer(36160,C.__webglFramebuffer),n.framebufferTexture2D(36009,36064+_e,3553,Ee,0)}t.bindFramebuffer(36009,C.__webglMultisampledFramebuffer)}}function ce(M){return Math.min(f,M.samples)}function ue(M){const y=i.get(M);return o&&M.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function fe(M){const y=a.render.frame;g.get(M)!==y&&(g.set(M,y),M.update())}function de(M,y){const N=M.encoding,$=M.format,K=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||M.format===Lc||N!==lr&&(N===Ke?o===!1?e.has("EXT_sRGB")===!0&&$===dn?(M.format=Lc,M.minFilter=Ut,M.generateMipmaps=!1):y=Um.sRGBToLinear(y):($!==dn||K!==or)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",N)),y}this.allocateTextureUnit=q,this.resetTextureUnits=ie,this.setTexture2D=W,this.setTexture2DArray=me,this.setTexture3D=ae,this.setTextureCube=pe,this.rebindTextures=L,this.setupRenderTarget=V,this.updateRenderTargetMipmap=J,this.updateMultisampleRenderTarget=te,this.setupDepthRenderbuffer=T,this.setupFrameBufferTexture=he,this.useMultisampledRTT=ue}function Hw(n,e,t){const i=t.isWebGL2;function r(s,a=null){let o;if(s===or)return 5121;if(s===My)return 32819;if(s===Sy)return 32820;if(s===xy)return 5120;if(s===yy)return 5122;if(s===Dm)return 5123;if(s===by)return 5124;if(s===Ki)return 5125;if(s===bi)return 5126;if(s===ea)return i?5131:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===wy)return 6406;if(s===dn)return 6408;if(s===Ey)return 6409;if(s===Ay)return 6410;if(s===ir)return 6402;if(s===ts)return 34041;if(s===Cy)return 6403;if(s===Ty)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(s===Lc)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===Ry)return 36244;if(s===Ly)return 33319;if(s===Py)return 33320;if(s===Iy)return 36249;if(s===vl||s===xl||s===yl||s===bl)if(a===Ke)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===vl)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===xl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===yl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===bl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===vl)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===xl)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===yl)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===bl)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===eh||s===th||s===nh||s===ih)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===eh)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===th)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===nh)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===ih)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Dy)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===rh||s===sh)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===rh)return a===Ke?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===sh)return a===Ke?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===ah||s===oh||s===lh||s===ch||s===uh||s===fh||s===hh||s===dh||s===ph||s===mh||s===gh||s===_h||s===vh||s===xh)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===ah)return a===Ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===oh)return a===Ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===lh)return a===Ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===ch)return a===Ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===uh)return a===Ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===fh)return a===Ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===hh)return a===Ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===dh)return a===Ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===ph)return a===Ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===mh)return a===Ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===gh)return a===Ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===_h)return a===Ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===vh)return a===Ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===xh)return a===Ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===yh)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===yh)return a===Ke?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return s===Xr?i?34042:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class Vw extends Nt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Mi extends lt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Gw={type:"move"};class $l{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Mi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Mi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Mi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const p of e.hand.values()){const d=t.getJointPose(p,i);if(c.joints[p.jointName]===void 0){const v=new Mi;v.matrixAutoUpdate=!1,v.visible=!1,c.joints[p.jointName]=v,c.add(v)}const _=c.joints[p.jointName];d!==null&&(_.matrix.fromArray(d.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.jointRadius=d.radius),_.visible=d!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),m=.02,g=.005;c.inputState.pinching&&h>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Gw)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}}class Ww extends Ot{constructor(e,t,i,r,s,a,o,l,c,u){if(u=u!==void 0?u:ir,u!==ir&&u!==ts)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===ir&&(i=Ki),i===void 0&&u===ts&&(i=Xr),super(null,r,s,a,o,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:wt,this.minFilter=l!==void 0?l:wt,this.flipY=!1,this.generateMipmaps=!1}}class jw extends hr{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=null,c=null,u=null,f=null,h=null,m=null;const g=t.getContextAttributes();let p=null,d=null;const _=[],v=[],S=new Nt;S.layers.enable(1),S.viewport=new nt;const x=new Nt;x.layers.enable(2),x.viewport=new nt;const w=[S,x],R=new Vw;R.layers.enable(1),R.layers.enable(2);let D=null,b=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let W=_[z];return W===void 0&&(W=new $l,_[z]=W),W.getTargetRaySpace()},this.getControllerGrip=function(z){let W=_[z];return W===void 0&&(W=new $l,_[z]=W),W.getGripSpace()},this.getHand=function(z){let W=_[z];return W===void 0&&(W=new $l,_[z]=W),W.getHandSpace()};function A(z){const W=v.indexOf(z.inputSource);if(W===-1)return;const me=_[W];me!==void 0&&me.dispatchEvent({type:z.type,data:z.inputSource})}function F(){r.removeEventListener("select",A),r.removeEventListener("selectstart",A),r.removeEventListener("selectend",A),r.removeEventListener("squeeze",A),r.removeEventListener("squeezestart",A),r.removeEventListener("squeezeend",A),r.removeEventListener("end",F),r.removeEventListener("inputsourceschange",ee);for(let z=0;z<_.length;z++){const W=v[z];W!==null&&(v[z]=null,_[z].disconnect(W))}D=null,b=null,e.setRenderTarget(p),h=null,f=null,u=null,r=null,d=null,q.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){s=z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){o=z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(z){l=z},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(z){if(r=z,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",A),r.addEventListener("selectstart",A),r.addEventListener("selectend",A),r.addEventListener("squeeze",A),r.addEventListener("squeezestart",A),r.addEventListener("squeezeend",A),r.addEventListener("end",F),r.addEventListener("inputsourceschange",ee),g.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const W={antialias:r.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(r,t,W),r.updateRenderState({baseLayer:h}),d=new Ri(h.framebufferWidth,h.framebufferHeight,{format:dn,type:or,encoding:e.outputEncoding,stencilBuffer:g.stencil})}else{let W=null,me=null,ae=null;g.depth&&(ae=g.stencil?35056:33190,W=g.stencil?ts:ir,me=g.stencil?Xr:Ki);const pe={colorFormat:32856,depthFormat:ae,scaleFactor:s};u=new XRWebGLBinding(r,t),f=u.createProjectionLayer(pe),r.updateRenderState({layers:[f]}),d=new Ri(f.textureWidth,f.textureHeight,{format:dn,type:or,depthTexture:new Ww(f.textureWidth,f.textureHeight,me,void 0,void 0,void 0,void 0,void 0,void 0,W),stencilBuffer:g.stencil,encoding:e.outputEncoding,samples:g.antialias?4:0});const Ae=e.properties.get(d);Ae.__ignoreDepthValues=f.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(1),l=null,a=await r.requestReferenceSpace(o),q.setContext(r),q.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}};function ee(z){for(let W=0;W<z.removed.length;W++){const me=z.removed[W],ae=v.indexOf(me);ae>=0&&(v[ae]=null,_[ae].dispatchEvent({type:"disconnected",data:me}))}for(let W=0;W<z.added.length;W++){const me=z.added[W];let ae=v.indexOf(me);if(ae===-1){for(let Ae=0;Ae<_.length;Ae++)if(Ae>=v.length){v.push(me),ae=Ae;break}else if(v[Ae]===null){v[Ae]=me,ae=Ae;break}if(ae===-1)break}const pe=_[ae];pe&&pe.dispatchEvent({type:"connected",data:me})}}const X=new I,H=new I;function U(z,W,me){X.setFromMatrixPosition(W.matrixWorld),H.setFromMatrixPosition(me.matrixWorld);const ae=X.distanceTo(H),pe=W.projectionMatrix.elements,Ae=me.projectionMatrix.elements,G=pe[14]/(pe[10]-1),k=pe[14]/(pe[10]+1),se=(pe[9]+1)/pe[5],le=(pe[9]-1)/pe[5],be=(pe[8]-1)/pe[0],he=(Ae[8]+1)/Ae[0],Te=G*be,ge=G*he,T=ae/(-be+he),L=T*-be;W.matrixWorld.decompose(z.position,z.quaternion,z.scale),z.translateX(L),z.translateZ(T),z.matrixWorld.compose(z.position,z.quaternion,z.scale),z.matrixWorldInverse.copy(z.matrixWorld).invert();const V=G+T,J=k+T,te=Te-L,ce=ge+(ae-L),ue=se*k/J*V,fe=le*k/J*V;z.projectionMatrix.makePerspective(te,ce,ue,fe,V,J)}function Y(z,W){W===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices(W.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(r===null)return;R.near=x.near=S.near=z.near,R.far=x.far=S.far=z.far,(D!==R.near||b!==R.far)&&(r.updateRenderState({depthNear:R.near,depthFar:R.far}),D=R.near,b=R.far);const W=z.parent,me=R.cameras;Y(R,W);for(let pe=0;pe<me.length;pe++)Y(me[pe],W);R.matrixWorld.decompose(R.position,R.quaternion,R.scale),z.matrix.copy(R.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale);const ae=z.children;for(let pe=0,Ae=ae.length;pe<Ae;pe++)ae[pe].updateMatrixWorld(!0);me.length===2?U(R,S,x):R.projectionMatrix.copy(S.projectionMatrix)},this.getCamera=function(){return R},this.getFoveation=function(){if(f!==null)return f.fixedFoveation;if(h!==null)return h.fixedFoveation},this.setFoveation=function(z){f!==null&&(f.fixedFoveation=z),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=z)};let Z=null;function ie(z,W){if(c=W.getViewerPose(l||a),m=W,c!==null){const me=c.views;h!==null&&(e.setRenderTargetFramebuffer(d,h.framebuffer),e.setRenderTarget(d));let ae=!1;me.length!==R.cameras.length&&(R.cameras.length=0,ae=!0);for(let pe=0;pe<me.length;pe++){const Ae=me[pe];let G=null;if(h!==null)G=h.getViewport(Ae);else{const se=u.getViewSubImage(f,Ae);G=se.viewport,pe===0&&(e.setRenderTargetTextures(d,se.colorTexture,f.ignoreDepthValues?void 0:se.depthStencilTexture),e.setRenderTarget(d))}let k=w[pe];k===void 0&&(k=new Nt,k.layers.enable(pe),k.viewport=new nt,w[pe]=k),k.matrix.fromArray(Ae.transform.matrix),k.projectionMatrix.fromArray(Ae.projectionMatrix),k.viewport.set(G.x,G.y,G.width,G.height),pe===0&&R.matrix.copy(k.matrix),ae===!0&&R.cameras.push(k)}}for(let me=0;me<_.length;me++){const ae=v[me],pe=_[me];ae!==null&&pe!==void 0&&pe.update(ae,W,l||a)}Z&&Z(z,W),m=null}const q=new qm;q.setAnimationLoop(ie),this.setAnimationLoop=function(z){Z=z},this.dispose=function(){}}}function Xw(n,e){function t(p,d){p.fogColor.value.copy(d.color),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function i(p,d,_,v,S){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(p,d):d.isMeshToonMaterial?(r(p,d),u(p,d)):d.isMeshPhongMaterial?(r(p,d),c(p,d)):d.isMeshStandardMaterial?(r(p,d),f(p,d),d.isMeshPhysicalMaterial&&h(p,d,S)):d.isMeshMatcapMaterial?(r(p,d),m(p,d)):d.isMeshDepthMaterial?r(p,d):d.isMeshDistanceMaterial?(r(p,d),g(p,d)):d.isMeshNormalMaterial?r(p,d):d.isLineBasicMaterial?(s(p,d),d.isLineDashedMaterial&&a(p,d)):d.isPointsMaterial?o(p,d,_,v):d.isSpriteMaterial?l(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map),d.alphaMap&&(p.alphaMap.value=d.alphaMap),d.bumpMap&&(p.bumpMap.value=d.bumpMap,p.bumpScale.value=d.bumpScale,d.side===tn&&(p.bumpScale.value*=-1)),d.displacementMap&&(p.displacementMap.value=d.displacementMap,p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap),d.normalMap&&(p.normalMap.value=d.normalMap,p.normalScale.value.copy(d.normalScale),d.side===tn&&p.normalScale.value.negate()),d.specularMap&&(p.specularMap.value=d.specularMap),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const _=e.get(d).envMap;if(_&&(p.envMap.value=_,p.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap){p.lightMap.value=d.lightMap;const x=n.physicallyCorrectLights!==!0?Math.PI:1;p.lightMapIntensity.value=d.lightMapIntensity*x}d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity);let v;d.map?v=d.map:d.specularMap?v=d.specularMap:d.displacementMap?v=d.displacementMap:d.normalMap?v=d.normalMap:d.bumpMap?v=d.bumpMap:d.roughnessMap?v=d.roughnessMap:d.metalnessMap?v=d.metalnessMap:d.alphaMap?v=d.alphaMap:d.emissiveMap?v=d.emissiveMap:d.clearcoatMap?v=d.clearcoatMap:d.clearcoatNormalMap?v=d.clearcoatNormalMap:d.clearcoatRoughnessMap?v=d.clearcoatRoughnessMap:d.iridescenceMap?v=d.iridescenceMap:d.iridescenceThicknessMap?v=d.iridescenceThicknessMap:d.specularIntensityMap?v=d.specularIntensityMap:d.specularColorMap?v=d.specularColorMap:d.transmissionMap?v=d.transmissionMap:d.thicknessMap?v=d.thicknessMap:d.sheenColorMap?v=d.sheenColorMap:d.sheenRoughnessMap&&(v=d.sheenRoughnessMap),v!==void 0&&(v.isWebGLRenderTarget&&(v=v.texture),v.matrixAutoUpdate===!0&&v.updateMatrix(),p.uvTransform.value.copy(v.matrix));let S;d.aoMap?S=d.aoMap:d.lightMap&&(S=d.lightMap),S!==void 0&&(S.isWebGLRenderTarget&&(S=S.texture),S.matrixAutoUpdate===!0&&S.updateMatrix(),p.uv2Transform.value.copy(S.matrix))}function s(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity}function a(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function o(p,d,_,v){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*_,p.scale.value=v*.5,d.map&&(p.map.value=d.map),d.alphaMap&&(p.alphaMap.value=d.alphaMap),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);let S;d.map?S=d.map:d.alphaMap&&(S=d.alphaMap),S!==void 0&&(S.matrixAutoUpdate===!0&&S.updateMatrix(),p.uvTransform.value.copy(S.matrix))}function l(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map),d.alphaMap&&(p.alphaMap.value=d.alphaMap),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);let _;d.map?_=d.map:d.alphaMap&&(_=d.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),p.uvTransform.value.copy(_.matrix))}function c(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function u(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function f(p,d){p.roughness.value=d.roughness,p.metalness.value=d.metalness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap),d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap),e.get(d).envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function h(p,d,_){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap)),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap),d.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),p.clearcoatNormalMap.value=d.clearcoatNormalMap,d.side===tn&&p.clearcoatNormalScale.value.negate())),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap)),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=_.texture,p.transmissionSamplerSize.value.set(_.width,_.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap)}function m(p,d){d.matcap&&(p.matcap.value=d.matcap)}function g(p,d){p.referencePosition.value.copy(d.referencePosition),p.nearDistance.value=d.nearDistance,p.farDistance.value=d.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:i}}function qw(n,e,t,i){let r={},s={},a=[];const o=t.isWebGL2?n.getParameter(35375):0;function l(v,S){const x=S.program;i.uniformBlockBinding(v,x)}function c(v,S){let x=r[v.id];x===void 0&&(g(v),x=u(v),r[v.id]=x,v.addEventListener("dispose",d));const w=S.program;i.updateUBOMapping(v,w);const R=e.render.frame;s[v.id]!==R&&(h(v),s[v.id]=R)}function u(v){const S=f();v.__bindingPointIndex=S;const x=n.createBuffer(),w=v.__size,R=v.usage;return n.bindBuffer(35345,x),n.bufferData(35345,w,R),n.bindBuffer(35345,null),n.bindBufferBase(35345,S,x),x}function f(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){const S=r[v.id],x=v.uniforms,w=v.__cache;n.bindBuffer(35345,S);for(let R=0,D=x.length;R<D;R++){const b=x[R];if(m(b,R,w)===!0){const A=b.value,F=b.__offset;typeof A=="number"?(b.__data[0]=A,n.bufferSubData(35345,F,b.__data)):(b.value.isMatrix3?(b.__data[0]=b.value.elements[0],b.__data[1]=b.value.elements[1],b.__data[2]=b.value.elements[2],b.__data[3]=b.value.elements[0],b.__data[4]=b.value.elements[3],b.__data[5]=b.value.elements[4],b.__data[6]=b.value.elements[5],b.__data[7]=b.value.elements[0],b.__data[8]=b.value.elements[6],b.__data[9]=b.value.elements[7],b.__data[10]=b.value.elements[8],b.__data[11]=b.value.elements[0]):A.toArray(b.__data),n.bufferSubData(35345,F,b.__data))}}n.bindBuffer(35345,null)}function m(v,S,x){const w=v.value;if(x[S]===void 0)return typeof w=="number"?x[S]=w:x[S]=w.clone(),!0;if(typeof w=="number"){if(x[S]!==w)return x[S]=w,!0}else{const R=x[S];if(R.equals(w)===!1)return R.copy(w),!0}return!1}function g(v){const S=v.uniforms;let x=0;const w=16;let R=0;for(let D=0,b=S.length;D<b;D++){const A=S[D],F=p(A);if(A.__data=new Float32Array(F.storage/Float32Array.BYTES_PER_ELEMENT),A.__offset=x,D>0){R=x%w;const ee=w-R;R!==0&&ee-F.boundary<0&&(x+=w-R,A.__offset=x)}x+=F.storage}return R=x%w,R>0&&(x+=w-R),v.__size=x,v.__cache={},this}function p(v){const S=v.value,x={boundary:0,storage:0};return typeof S=="number"?(x.boundary=4,x.storage=4):S.isVector2?(x.boundary=8,x.storage=8):S.isVector3||S.isColor?(x.boundary=16,x.storage=12):S.isVector4?(x.boundary=16,x.storage=16):S.isMatrix3?(x.boundary=48,x.storage=48):S.isMatrix4?(x.boundary=64,x.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),x}function d(v){const S=v.target;S.removeEventListener("dispose",d);const x=a.indexOf(S.__bindingPointIndex);a.splice(x,1),n.deleteBuffer(r[S.id]),delete r[S.id],delete s[S.id]}function _(){for(const v in r)n.deleteBuffer(r[v]);a=[],r={},s={}}return{bind:l,update:c,dispose:_}}function $w(){const n=ia("canvas");return n.style.display="block",n}function Jm(n={}){this.isWebGLRenderer=!0;const e=n.canvas!==void 0?n.canvas:$w(),t=n.context!==void 0?n.context:null,i=n.depth!==void 0?n.depth:!0,r=n.stencil!==void 0?n.stencil:!0,s=n.antialias!==void 0?n.antialias:!1,a=n.premultipliedAlpha!==void 0?n.premultipliedAlpha:!0,o=n.preserveDrawingBuffer!==void 0?n.preserveDrawingBuffer:!1,l=n.powerPreference!==void 0?n.powerPreference:"default",c=n.failIfMajorPerformanceCaveat!==void 0?n.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=n.alpha!==void 0?n.alpha:!1;let f=null,h=null;const m=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=lr,this.physicallyCorrectLights=!1,this.toneMapping=Yn,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const p=this;let d=!1,_=0,v=0,S=null,x=-1,w=null;const R=new nt,D=new nt;let b=null,A=e.width,F=e.height,ee=1,X=null,H=null;const U=new nt(0,0,A,F),Y=new nt(0,0,A,F);let Z=!1;const ie=new wu;let q=!1,z=!1,W=null;const me=new je,ae=new Oe,pe=new I,Ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function G(){return S===null?ee:1}let k=t;function se(E,j){for(let Q=0;Q<E.length;Q++){const B=E[Q],ne=e.getContext(B,j);if(ne!==null)return ne}return null}try{const E={alpha:!0,depth:i,stencil:r,antialias:s,premultipliedAlpha:a,preserveDrawingBuffer:o,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${yu}`),e.addEventListener("webglcontextlost",Le,!1),e.addEventListener("webglcontextrestored",Ie,!1),e.addEventListener("webglcontextcreationerror",Ne,!1),k===null){const j=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&j.shift(),k=se(j,E),k===null)throw se(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}k.getShaderPrecisionFormat===void 0&&(k.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let le,be,he,Te,ge,T,L,V,J,te,ce,ue,fe,de,M,y,N,$,K,oe,Me,C,O,_e;function Ee(){le=new sS(k),be=new Q1(k,le,n),le.init(be),C=new Hw(k,le,be),he=new zw(k,le,be),Te=new lS,ge=new Tw,T=new Bw(k,le,he,ge,be,C,Te),L=new tS(p),V=new rS(p),J=new xb(k,be),O=new Z1(k,le,J,be),te=new aS(k,J,Te,O),ce=new hS(k,te,J,Te),K=new fS(k,be,T),y=new eS(ge),ue=new ww(p,L,V,le,be,O,y),fe=new Xw(p,ge),de=new Aw,M=new Dw(le,be),$=new K1(p,L,he,ce,u,a),N=new Uw(p,ce,be),_e=new qw(k,Te,be,he),oe=new J1(k,le,Te,be),Me=new oS(k,le,Te,be),Te.programs=ue.programs,p.capabilities=be,p.extensions=le,p.properties=ge,p.renderLists=de,p.shadowMap=N,p.state=he,p.info=Te}Ee();const we=new jw(p,k);this.xr=we,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const E=le.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=le.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(E){E!==void 0&&(ee=E,this.setSize(A,F,!1))},this.getSize=function(E){return E.set(A,F)},this.setSize=function(E,j,Q){if(we.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}A=E,F=j,e.width=Math.floor(E*ee),e.height=Math.floor(j*ee),Q!==!1&&(e.style.width=E+"px",e.style.height=j+"px"),this.setViewport(0,0,E,j)},this.getDrawingBufferSize=function(E){return E.set(A*ee,F*ee).floor()},this.setDrawingBufferSize=function(E,j,Q){A=E,F=j,ee=Q,e.width=Math.floor(E*Q),e.height=Math.floor(j*Q),this.setViewport(0,0,E,j)},this.getCurrentViewport=function(E){return E.copy(R)},this.getViewport=function(E){return E.copy(U)},this.setViewport=function(E,j,Q,B){E.isVector4?U.set(E.x,E.y,E.z,E.w):U.set(E,j,Q,B),he.viewport(R.copy(U).multiplyScalar(ee).floor())},this.getScissor=function(E){return E.copy(Y)},this.setScissor=function(E,j,Q,B){E.isVector4?Y.set(E.x,E.y,E.z,E.w):Y.set(E,j,Q,B),he.scissor(D.copy(Y).multiplyScalar(ee).floor())},this.getScissorTest=function(){return Z},this.setScissorTest=function(E){he.setScissorTest(Z=E)},this.setOpaqueSort=function(E){X=E},this.setTransparentSort=function(E){H=E},this.getClearColor=function(E){return E.copy($.getClearColor())},this.setClearColor=function(){$.setClearColor.apply($,arguments)},this.getClearAlpha=function(){return $.getClearAlpha()},this.setClearAlpha=function(){$.setClearAlpha.apply($,arguments)},this.clear=function(E=!0,j=!0,Q=!0){let B=0;E&&(B|=16384),j&&(B|=256),Q&&(B|=1024),k.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Le,!1),e.removeEventListener("webglcontextrestored",Ie,!1),e.removeEventListener("webglcontextcreationerror",Ne,!1),de.dispose(),M.dispose(),ge.dispose(),L.dispose(),V.dispose(),ce.dispose(),O.dispose(),_e.dispose(),ue.dispose(),we.dispose(),we.removeEventListener("sessionstart",De),we.removeEventListener("sessionend",rt),W&&(W.dispose(),W=null),dt.stop()};function Le(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),d=!0}function Ie(){console.log("THREE.WebGLRenderer: Context Restored."),d=!1;const E=Te.autoReset,j=N.enabled,Q=N.autoUpdate,B=N.needsUpdate,ne=N.type;Ee(),Te.autoReset=E,N.enabled=j,N.autoUpdate=Q,N.needsUpdate=B,N.type=ne}function Ne(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function P(E){const j=E.target;j.removeEventListener("dispose",P),Se(j)}function Se(E){ve(E),ge.remove(E)}function ve(E){const j=ge.get(E).programs;j!==void 0&&(j.forEach(function(Q){ue.releaseProgram(Q)}),E.isShaderMaterial&&ue.releaseShaderCache(E))}this.renderBufferDirect=function(E,j,Q,B,ne,Pe){j===null&&(j=Ae);const ke=ne.isMesh&&ne.matrixWorld.determinant()<0,He=qg(E,j,Q,B,ne);he.setMaterial(B,ke);let ze=Q.index;const Ze=Q.attributes.position;if(ze===null){if(Ze===void 0||Ze.count===0)return}else if(ze.count===0)return;let Xe=1;B.wireframe===!0&&(ze=te.getWireframeAttribute(Q),Xe=2),O.setup(ne,B,He,Q,ze);let qe,ft=oe;ze!==null&&(qe=J.get(ze),ft=Me,ft.setIndex(qe));const Di=ze!==null?ze.count:Ze.count,pr=Q.drawRange.start*Xe,mr=Q.drawRange.count*Xe,xn=Pe!==null?Pe.start*Xe:0,Ye=Pe!==null?Pe.count*Xe:1/0,gr=Math.max(pr,xn),mt=Math.min(Di,pr+mr,xn+Ye)-1,qt=Math.max(0,mt-gr+1);if(qt!==0){if(ne.isMesh)B.wireframe===!0?(he.setLineWidth(B.wireframeLinewidth*G()),ft.setMode(1)):ft.setMode(4);else if(ne.isLine){let ri=B.linewidth;ri===void 0&&(ri=1),he.setLineWidth(ri*G()),ne.isLineSegments?ft.setMode(1):ne.isLineLoop?ft.setMode(2):ft.setMode(3)}else ne.isPoints?ft.setMode(0):ne.isSprite&&ft.setMode(4);if(ne.isInstancedMesh)ft.renderInstances(gr,qt,ne.count);else if(Q.isInstancedBufferGeometry){const ri=Math.min(Q.instanceCount,Q._maxInstanceCount);ft.renderInstances(gr,qt,ri)}else ft.render(gr,qt)}},this.compile=function(E,j){function Q(B,ne,Pe){B.transparent===!0&&B.side===Xn?(B.side=tn,B.needsUpdate=!0,Ma(B,ne,Pe),B.side=ar,B.needsUpdate=!0,Ma(B,ne,Pe),B.side=Xn):Ma(B,ne,Pe)}h=M.get(E),h.init(),g.push(h),E.traverseVisible(function(B){B.isLight&&B.layers.test(j.layers)&&(h.pushLight(B),B.castShadow&&h.pushShadow(B))}),h.setupLights(p.physicallyCorrectLights),E.traverse(function(B){const ne=B.material;if(ne)if(Array.isArray(ne))for(let Pe=0;Pe<ne.length;Pe++){const ke=ne[Pe];Q(ke,E,B)}else Q(ne,E,B)}),g.pop(),h=null};let re=null;function ye(E){re&&re(E)}function De(){dt.stop()}function rt(){dt.start()}const dt=new qm;dt.setAnimationLoop(ye),typeof self<"u"&&dt.setContext(self),this.setAnimationLoop=function(E){re=E,we.setAnimationLoop(E),E===null?dt.stop():dt.start()},we.addEventListener("sessionstart",De),we.addEventListener("sessionend",rt),this.render=function(E,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(d===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),we.enabled===!0&&we.isPresenting===!0&&(we.cameraAutoUpdate===!0&&we.updateCamera(j),j=we.getCamera()),E.isScene===!0&&E.onBeforeRender(p,E,j,S),h=M.get(E,g.length),h.init(),g.push(h),me.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),ie.setFromProjectionMatrix(me),z=this.localClippingEnabled,q=y.init(this.clippingPlanes,z,j),f=de.get(E,m.length),f.init(),m.push(f),ii(E,j,0,p.sortObjects),f.finish(),p.sortObjects===!0&&f.sort(X,H),q===!0&&y.beginShadows();const Q=h.state.shadowsArray;if(N.render(Q,E,j),q===!0&&y.endShadows(),this.info.autoReset===!0&&this.info.reset(),$.render(f,E),h.setupLights(p.physicallyCorrectLights),j.isArrayCamera){const B=j.cameras;for(let ne=0,Pe=B.length;ne<Pe;ne++){const ke=B[ne];ut(f,E,ke,ke.viewport)}}else ut(f,E,j);S!==null&&(T.updateMultisampleRenderTarget(S),T.updateRenderTargetMipmap(S)),E.isScene===!0&&E.onAfterRender(p,E,j),O.resetDefaultState(),x=-1,w=null,g.pop(),g.length>0?h=g[g.length-1]:h=null,m.pop(),m.length>0?f=m[m.length-1]:f=null};function ii(E,j,Q,B){if(E.visible===!1)return;if(E.layers.test(j.layers)){if(E.isGroup)Q=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(j);else if(E.isLight)h.pushLight(E),E.castShadow&&h.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||ie.intersectsSprite(E)){B&&pe.setFromMatrixPosition(E.matrixWorld).applyMatrix4(me);const ke=ce.update(E),He=E.material;He.visible&&f.push(E,ke,He,Q,pe.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(E.isSkinnedMesh&&E.skeleton.frame!==Te.render.frame&&(E.skeleton.update(),E.skeleton.frame=Te.render.frame),!E.frustumCulled||ie.intersectsObject(E))){B&&pe.setFromMatrixPosition(E.matrixWorld).applyMatrix4(me);const ke=ce.update(E),He=E.material;if(Array.isArray(He)){const ze=ke.groups;for(let Ze=0,Xe=ze.length;Ze<Xe;Ze++){const qe=ze[Ze],ft=He[qe.materialIndex];ft&&ft.visible&&f.push(E,ke,ft,Q,pe.z,qe)}}else He.visible&&f.push(E,ke,He,Q,pe.z,null)}}const Pe=E.children;for(let ke=0,He=Pe.length;ke<He;ke++)ii(Pe[ke],j,Q,B)}function ut(E,j,Q,B){const ne=E.opaque,Pe=E.transmissive,ke=E.transparent;h.setupLightsView(Q),Pe.length>0&&Dn(ne,j,Q),B&&he.viewport(R.copy(B)),ne.length>0&&Xt(ne,j,Q),Pe.length>0&&Xt(Pe,j,Q),ke.length>0&&Xt(ke,j,Q),he.buffers.depth.setTest(!0),he.buffers.depth.setMask(!0),he.buffers.color.setMask(!0),he.setPolygonOffset(!1)}function Dn(E,j,Q){const B=be.isWebGL2;W===null&&(W=new Ri(1,1,{generateMipmaps:!0,type:le.has("EXT_color_buffer_half_float")?ea:or,minFilter:us,samples:B&&s===!0?4:0})),p.getDrawingBufferSize(ae),B?W.setSize(ae.x,ae.y):W.setSize(Eo(ae.x),Eo(ae.y));const ne=p.getRenderTarget();p.setRenderTarget(W),p.clear();const Pe=p.toneMapping;p.toneMapping=Yn,Xt(E,j,Q),p.toneMapping=Pe,T.updateMultisampleRenderTarget(W),T.updateRenderTargetMipmap(W),p.setRenderTarget(ne)}function Xt(E,j,Q){const B=j.isScene===!0?j.overrideMaterial:null;for(let ne=0,Pe=E.length;ne<Pe;ne++){const ke=E[ne],He=ke.object,ze=ke.geometry,Ze=B===null?ke.material:B,Xe=ke.group;He.layers.test(Q.layers)&&Xg(He,j,Q,ze,Ze,Xe)}}function Xg(E,j,Q,B,ne,Pe){E.onBeforeRender(p,j,Q,B,ne,Pe),E.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),ne.onBeforeRender(p,j,Q,B,E,Pe),ne.transparent===!0&&ne.side===Xn?(ne.side=tn,ne.needsUpdate=!0,p.renderBufferDirect(Q,j,B,ne,E,Pe),ne.side=ar,ne.needsUpdate=!0,p.renderBufferDirect(Q,j,B,ne,E,Pe),ne.side=Xn):p.renderBufferDirect(Q,j,B,ne,E,Pe),E.onAfterRender(p,j,Q,B,ne,Pe)}function Ma(E,j,Q){j.isScene!==!0&&(j=Ae);const B=ge.get(E),ne=h.state.lights,Pe=h.state.shadowsArray,ke=ne.state.version,He=ue.getParameters(E,ne.state,Pe,j,Q),ze=ue.getProgramCacheKey(He);let Ze=B.programs;B.environment=E.isMeshStandardMaterial?j.environment:null,B.fog=j.fog,B.envMap=(E.isMeshStandardMaterial?V:L).get(E.envMap||B.environment),Ze===void 0&&(E.addEventListener("dispose",P),Ze=new Map,B.programs=Ze);let Xe=Ze.get(ze);if(Xe!==void 0){if(B.currentProgram===Xe&&B.lightsStateVersion===ke)return Yu(E,He),Xe}else He.uniforms=ue.getUniforms(E),E.onBuild(Q,He,p),E.onBeforeCompile(He,p),Xe=ue.acquireProgram(He,ze),Ze.set(ze,Xe),B.uniforms=He.uniforms;const qe=B.uniforms;(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(qe.clippingPlanes=y.uniform),Yu(E,He),B.needsLights=Yg(E),B.lightsStateVersion=ke,B.needsLights&&(qe.ambientLightColor.value=ne.state.ambient,qe.lightProbe.value=ne.state.probe,qe.directionalLights.value=ne.state.directional,qe.directionalLightShadows.value=ne.state.directionalShadow,qe.spotLights.value=ne.state.spot,qe.spotLightShadows.value=ne.state.spotShadow,qe.rectAreaLights.value=ne.state.rectArea,qe.ltc_1.value=ne.state.rectAreaLTC1,qe.ltc_2.value=ne.state.rectAreaLTC2,qe.pointLights.value=ne.state.point,qe.pointLightShadows.value=ne.state.pointShadow,qe.hemisphereLights.value=ne.state.hemi,qe.directionalShadowMap.value=ne.state.directionalShadowMap,qe.directionalShadowMatrix.value=ne.state.directionalShadowMatrix,qe.spotShadowMap.value=ne.state.spotShadowMap,qe.spotLightMatrix.value=ne.state.spotLightMatrix,qe.spotLightMap.value=ne.state.spotLightMap,qe.pointShadowMap.value=ne.state.pointShadowMap,qe.pointShadowMatrix.value=ne.state.pointShadowMatrix);const ft=Xe.getUniforms(),Di=go.seqWithValue(ft.seq,qe);return B.currentProgram=Xe,B.uniformsList=Di,Xe}function Yu(E,j){const Q=ge.get(E);Q.outputEncoding=j.outputEncoding,Q.instancing=j.instancing,Q.skinning=j.skinning,Q.morphTargets=j.morphTargets,Q.morphNormals=j.morphNormals,Q.morphColors=j.morphColors,Q.morphTargetsCount=j.morphTargetsCount,Q.numClippingPlanes=j.numClippingPlanes,Q.numIntersection=j.numClipIntersection,Q.vertexAlphas=j.vertexAlphas,Q.vertexTangents=j.vertexTangents,Q.toneMapping=j.toneMapping}function qg(E,j,Q,B,ne){j.isScene!==!0&&(j=Ae),T.resetTextureUnits();const Pe=j.fog,ke=B.isMeshStandardMaterial?j.environment:null,He=S===null?p.outputEncoding:S.isXRRenderTarget===!0?S.texture.encoding:lr,ze=(B.isMeshStandardMaterial?V:L).get(B.envMap||ke),Ze=B.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,Xe=!!B.normalMap&&!!Q.attributes.tangent,qe=!!Q.morphAttributes.position,ft=!!Q.morphAttributes.normal,Di=!!Q.morphAttributes.color,pr=B.toneMapped?p.toneMapping:Yn,mr=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,xn=mr!==void 0?mr.length:0,Ye=ge.get(B),gr=h.state.lights;if(q===!0&&(z===!0||E!==w)){const zt=E===w&&B.id===x;y.setState(B,E,zt)}let mt=!1;B.version===Ye.__version?(Ye.needsLights&&Ye.lightsStateVersion!==gr.state.version||Ye.outputEncoding!==He||ne.isInstancedMesh&&Ye.instancing===!1||!ne.isInstancedMesh&&Ye.instancing===!0||ne.isSkinnedMesh&&Ye.skinning===!1||!ne.isSkinnedMesh&&Ye.skinning===!0||Ye.envMap!==ze||B.fog===!0&&Ye.fog!==Pe||Ye.numClippingPlanes!==void 0&&(Ye.numClippingPlanes!==y.numPlanes||Ye.numIntersection!==y.numIntersection)||Ye.vertexAlphas!==Ze||Ye.vertexTangents!==Xe||Ye.morphTargets!==qe||Ye.morphNormals!==ft||Ye.morphColors!==Di||Ye.toneMapping!==pr||be.isWebGL2===!0&&Ye.morphTargetsCount!==xn)&&(mt=!0):(mt=!0,Ye.__version=B.version);let qt=Ye.currentProgram;mt===!0&&(qt=Ma(B,j,ne));let ri=!1,_s=!1,sl=!1;const Pt=qt.getUniforms(),Ni=Ye.uniforms;if(he.useProgram(qt.program)&&(ri=!0,_s=!0,sl=!0),B.id!==x&&(x=B.id,_s=!0),ri||w!==E){if(Pt.setValue(k,"projectionMatrix",E.projectionMatrix),be.logarithmicDepthBuffer&&Pt.setValue(k,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),w!==E&&(w=E,_s=!0,sl=!0),B.isShaderMaterial||B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshStandardMaterial||B.envMap){const zt=Pt.map.cameraPosition;zt!==void 0&&zt.setValue(k,pe.setFromMatrixPosition(E.matrixWorld))}(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&Pt.setValue(k,"isOrthographic",E.isOrthographicCamera===!0),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial||B.isShadowMaterial||ne.isSkinnedMesh)&&Pt.setValue(k,"viewMatrix",E.matrixWorldInverse)}if(ne.isSkinnedMesh){Pt.setOptional(k,ne,"bindMatrix"),Pt.setOptional(k,ne,"bindMatrixInverse");const zt=ne.skeleton;zt&&(be.floatVertexTextures?(zt.boneTexture===null&&zt.computeBoneTexture(),Pt.setValue(k,"boneTexture",zt.boneTexture,T),Pt.setValue(k,"boneTextureSize",zt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const al=Q.morphAttributes;if((al.position!==void 0||al.normal!==void 0||al.color!==void 0&&be.isWebGL2===!0)&&K.update(ne,Q,B,qt),(_s||Ye.receiveShadow!==ne.receiveShadow)&&(Ye.receiveShadow=ne.receiveShadow,Pt.setValue(k,"receiveShadow",ne.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(Ni.envMap.value=ze,Ni.flipEnvMap.value=ze.isCubeTexture&&ze.isRenderTargetTexture===!1?-1:1),_s&&(Pt.setValue(k,"toneMappingExposure",p.toneMappingExposure),Ye.needsLights&&$g(Ni,sl),Pe&&B.fog===!0&&fe.refreshFogUniforms(Ni,Pe),fe.refreshMaterialUniforms(Ni,B,ee,F,W),go.upload(k,Ye.uniformsList,Ni,T)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(go.upload(k,Ye.uniformsList,Ni,T),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&Pt.setValue(k,"center",ne.center),Pt.setValue(k,"modelViewMatrix",ne.modelViewMatrix),Pt.setValue(k,"normalMatrix",ne.normalMatrix),Pt.setValue(k,"modelMatrix",ne.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){const zt=B.uniformsGroups;for(let ol=0,Kg=zt.length;ol<Kg;ol++)if(be.isWebGL2){const Ku=zt[ol];_e.update(Ku,qt),_e.bind(Ku,qt)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return qt}function $g(E,j){E.ambientLightColor.needsUpdate=j,E.lightProbe.needsUpdate=j,E.directionalLights.needsUpdate=j,E.directionalLightShadows.needsUpdate=j,E.pointLights.needsUpdate=j,E.pointLightShadows.needsUpdate=j,E.spotLights.needsUpdate=j,E.spotLightShadows.needsUpdate=j,E.rectAreaLights.needsUpdate=j,E.hemisphereLights.needsUpdate=j}function Yg(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return v},this.getRenderTarget=function(){return S},this.setRenderTargetTextures=function(E,j,Q){ge.get(E.texture).__webglTexture=j,ge.get(E.depthTexture).__webglTexture=Q;const B=ge.get(E);B.__hasExternalTextures=!0,B.__hasExternalTextures&&(B.__autoAllocateDepthBuffer=Q===void 0,B.__autoAllocateDepthBuffer||le.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,j){const Q=ge.get(E);Q.__webglFramebuffer=j,Q.__useDefaultFramebuffer=j===void 0},this.setRenderTarget=function(E,j=0,Q=0){S=E,_=j,v=Q;let B=!0;if(E){const ze=ge.get(E);ze.__useDefaultFramebuffer!==void 0?(he.bindFramebuffer(36160,null),B=!1):ze.__webglFramebuffer===void 0?T.setupRenderTarget(E):ze.__hasExternalTextures&&T.rebindTextures(E,ge.get(E.texture).__webglTexture,ge.get(E.depthTexture).__webglTexture)}let ne=null,Pe=!1,ke=!1;if(E){const ze=E.texture;(ze.isData3DTexture||ze.isDataArrayTexture)&&(ke=!0);const Ze=ge.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(ne=Ze[j],Pe=!0):be.isWebGL2&&E.samples>0&&T.useMultisampledRTT(E)===!1?ne=ge.get(E).__webglMultisampledFramebuffer:ne=Ze,R.copy(E.viewport),D.copy(E.scissor),b=E.scissorTest}else R.copy(U).multiplyScalar(ee).floor(),D.copy(Y).multiplyScalar(ee).floor(),b=Z;if(he.bindFramebuffer(36160,ne)&&be.drawBuffers&&B&&he.drawBuffers(E,ne),he.viewport(R),he.scissor(D),he.setScissorTest(b),Pe){const ze=ge.get(E.texture);k.framebufferTexture2D(36160,36064,34069+j,ze.__webglTexture,Q)}else if(ke){const ze=ge.get(E.texture),Ze=j||0;k.framebufferTextureLayer(36160,36064,ze.__webglTexture,Q||0,Ze)}x=-1},this.readRenderTargetPixels=function(E,j,Q,B,ne,Pe,ke){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let He=ge.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ke!==void 0&&(He=He[ke]),He){he.bindFramebuffer(36160,He);try{const ze=E.texture,Ze=ze.format,Xe=ze.type;if(Ze!==dn&&C.convert(Ze)!==k.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const qe=Xe===ea&&(le.has("EXT_color_buffer_half_float")||be.isWebGL2&&le.has("EXT_color_buffer_float"));if(Xe!==or&&C.convert(Xe)!==k.getParameter(35738)&&!(Xe===bi&&(be.isWebGL2||le.has("OES_texture_float")||le.has("WEBGL_color_buffer_float")))&&!qe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=E.width-B&&Q>=0&&Q<=E.height-ne&&k.readPixels(j,Q,B,ne,C.convert(Ze),C.convert(Xe),Pe)}finally{const ze=S!==null?ge.get(S).__webglFramebuffer:null;he.bindFramebuffer(36160,ze)}}},this.copyFramebufferToTexture=function(E,j,Q=0){const B=Math.pow(2,-Q),ne=Math.floor(j.image.width*B),Pe=Math.floor(j.image.height*B);T.setTexture2D(j,0),k.copyTexSubImage2D(3553,Q,0,0,E.x,E.y,ne,Pe),he.unbindTexture()},this.copyTextureToTexture=function(E,j,Q,B=0){const ne=j.image.width,Pe=j.image.height,ke=C.convert(Q.format),He=C.convert(Q.type);T.setTexture2D(Q,0),k.pixelStorei(37440,Q.flipY),k.pixelStorei(37441,Q.premultiplyAlpha),k.pixelStorei(3317,Q.unpackAlignment),j.isDataTexture?k.texSubImage2D(3553,B,E.x,E.y,ne,Pe,ke,He,j.image.data):j.isCompressedTexture?k.compressedTexSubImage2D(3553,B,E.x,E.y,j.mipmaps[0].width,j.mipmaps[0].height,ke,j.mipmaps[0].data):k.texSubImage2D(3553,B,E.x,E.y,ke,He,j.image),B===0&&Q.generateMipmaps&&k.generateMipmap(3553),he.unbindTexture()},this.copyTextureToTexture3D=function(E,j,Q,B,ne=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Pe=E.max.x-E.min.x+1,ke=E.max.y-E.min.y+1,He=E.max.z-E.min.z+1,ze=C.convert(B.format),Ze=C.convert(B.type);let Xe;if(B.isData3DTexture)T.setTexture3D(B,0),Xe=32879;else if(B.isDataArrayTexture)T.setTexture2DArray(B,0),Xe=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}k.pixelStorei(37440,B.flipY),k.pixelStorei(37441,B.premultiplyAlpha),k.pixelStorei(3317,B.unpackAlignment);const qe=k.getParameter(3314),ft=k.getParameter(32878),Di=k.getParameter(3316),pr=k.getParameter(3315),mr=k.getParameter(32877),xn=Q.isCompressedTexture?Q.mipmaps[0]:Q.image;k.pixelStorei(3314,xn.width),k.pixelStorei(32878,xn.height),k.pixelStorei(3316,E.min.x),k.pixelStorei(3315,E.min.y),k.pixelStorei(32877,E.min.z),Q.isDataTexture||Q.isData3DTexture?k.texSubImage3D(Xe,ne,j.x,j.y,j.z,Pe,ke,He,ze,Ze,xn.data):Q.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),k.compressedTexSubImage3D(Xe,ne,j.x,j.y,j.z,Pe,ke,He,ze,xn.data)):k.texSubImage3D(Xe,ne,j.x,j.y,j.z,Pe,ke,He,ze,Ze,xn),k.pixelStorei(3314,qe),k.pixelStorei(32878,ft),k.pixelStorei(3316,Di),k.pixelStorei(3315,pr),k.pixelStorei(32877,mr),ne===0&&B.generateMipmaps&&k.generateMipmap(Xe),he.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?T.setTextureCube(E,0):E.isData3DTexture?T.setTexture3D(E,0):E.isDataArrayTexture?T.setTexture2DArray(E,0):T.setTexture2D(E,0),he.unbindTexture()},this.resetState=function(){_=0,v=0,S=null,he.reset(),O.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class Yw extends Jm{}Yw.prototype.isWebGL1Renderer=!0;class Qm extends lt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class Kw{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Rc,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=_n()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=_n()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=_n()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const It=new I;class Au{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r===!0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)It.fromBufferAttribute(this,t),It.applyMatrix4(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)It.fromBufferAttribute(this,t),It.applyNormalMatrix(e),this.setXYZ(t,It.x,It.y,It.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)It.fromBufferAttribute(this,t),It.transformDirection(e),this.setXYZ(t,It.x,It.y,It.z);return this}setX(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=qn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=qn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=qn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=qn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=tt(t,this.array),i=tt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=tt(t,this.array),i=tt(i,this.array),r=tt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=tt(t,this.array),i=tt(i,this.array),r=tt(r,this.array),s=tt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will deinterleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new Vt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Au(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will deinterleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const sd=new I,ad=new nt,od=new nt,Zw=new I,ld=new je;class Jw extends pn{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new je,this.bindMatrixInverse=new je}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new nt,t=this.geometry.attributes.skinWeight;for(let i=0,r=t.count;i<r;i++){e.fromBufferAttribute(t,i);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(e,t){const i=this.skeleton,r=this.geometry;ad.fromBufferAttribute(r.attributes.skinIndex,e),od.fromBufferAttribute(r.attributes.skinWeight,e),sd.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const a=od.getComponent(s);if(a!==0){const o=ad.getComponent(s);ld.multiplyMatrices(i.bones[o].matrixWorld,i.boneInverses[o]),t.addScaledVector(Zw.copy(sd).applyMatrix4(ld),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class eg extends lt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Qw extends Ot{constructor(e=null,t=1,i=1,r,s,a,o,l,c=wt,u=wt,f,h){super(null,a,o,l,c,u,r,s,f,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const cd=new je,eT=new je;class Cu{constructor(e=[],t=[]){this.uuid=_n(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,r=this.bones.length;i<r;i++)this.boneInverses.push(new je)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new je;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,r=this.boneTexture;for(let s=0,a=e.length;s<a;s++){const o=e[s]?e[s].matrixWorld:eT;cd.multiplyMatrices(o,t[s]),cd.toArray(i,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new Cu(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Om(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new Qw(t,e,e,dn,bi);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,r=e.bones.length;i<r;i++){const s=e.bones[i];let a=t[s];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),a=new eg),this.bones.push(a),this.boneInverses.push(new je().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let r=0,s=t.length;r<s;r++){const a=t[r];e.bones.push(a.uuid);const o=i[r];e.boneInverses.push(o.toArray())}return e}}class tg extends Cn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Fe(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ud=new I,fd=new I,hd=new je,Yl=new Su,$a=new hs;class Ru extends lt{constructor(e=new nn,t=new tg){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)ud.fromBufferAttribute(t,r-1),fd.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=ud.distanceTo(fd);e.setAttribute("lineDistance",new Gt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),$a.copy(i.boundingSphere),$a.applyMatrix4(r),$a.radius+=s,e.ray.intersectsSphere($a)===!1)return;hd.copy(r).invert(),Yl.copy(e.ray).applyMatrix4(hd);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new I,u=new I,f=new I,h=new I,m=this.isLineSegments?2:1,g=i.index,d=i.attributes.position;if(g!==null){const _=Math.max(0,a.start),v=Math.min(g.count,a.start+a.count);for(let S=_,x=v-1;S<x;S+=m){const w=g.getX(S),R=g.getX(S+1);if(c.fromBufferAttribute(d,w),u.fromBufferAttribute(d,R),Yl.distanceSqToSegment(c,u,h,f)>l)continue;h.applyMatrix4(this.matrixWorld);const b=e.ray.origin.distanceTo(h);b<e.near||b>e.far||t.push({distance:b,point:f.clone().applyMatrix4(this.matrixWorld),index:S,face:null,faceIndex:null,object:this})}}else{const _=Math.max(0,a.start),v=Math.min(d.count,a.start+a.count);for(let S=_,x=v-1;S<x;S+=m){if(c.fromBufferAttribute(d,S),u.fromBufferAttribute(d,S+1),Yl.distanceSqToSegment(c,u,h,f)>l)continue;h.applyMatrix4(this.matrixWorld);const R=e.ray.origin.distanceTo(h);R<e.near||R>e.far||t.push({distance:R,point:f.clone().applyMatrix4(this.matrixWorld),index:S,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}const dd=new I,pd=new I;class tT extends Ru{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)dd.fromBufferAttribute(t,r),pd.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+dd.distanceTo(pd);e.setAttribute("lineDistance",new Gt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class nT extends Ru{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class ng extends Cn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Fe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const md=new je,Dc=new Su,Ya=new hs,Ka=new I;class iT extends lt{constructor(e=new nn,t=new ng){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ya.copy(i.boundingSphere),Ya.applyMatrix4(r),Ya.radius+=s,e.ray.intersectsSphere(Ya)===!1)return;md.copy(r).invert(),Dc.copy(e.ray).applyMatrix4(md);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,f=i.attributes.position;if(c!==null){const h=Math.max(0,a.start),m=Math.min(c.count,a.start+a.count);for(let g=h,p=m;g<p;g++){const d=c.getX(g);Ka.fromBufferAttribute(f,d),gd(Ka,d,l,r,e,t,this)}}else{const h=Math.max(0,a.start),m=Math.min(f.count,a.start+a.count);for(let g=h,p=m;g<p;g++)Ka.fromBufferAttribute(f,g),gd(Ka,g,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function gd(n,e,t,i,r,s,a){const o=Dc.distanceSqToPoint(n);if(o<t){const l=new I;Dc.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}class Jo extends Cn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Fe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=bu,this.normalScale=new Oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class dr extends Jo{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Oe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ct(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Fe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Fe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Fe(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._iridescence=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function mi(n,e,t){return ig(n)?new n.constructor(n.subarray(e,t!==void 0?t:n.length)):n.slice(e,t)}function Za(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function ig(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function rT(n){function e(r,s){return n[r]-n[s]}const t=n.length,i=new Array(t);for(let r=0;r!==t;++r)i[r]=r;return i.sort(e),i}function _d(n,e,t){const i=n.length,r=new n.constructor(i);for(let s=0,a=0;a!==i;++s){const o=t[s]*e;for(let l=0;l!==e;++l)r[a++]=n[o+l]}return r}function rg(n,e,t,i){let r=1,s=n[0];for(;s!==void 0&&s[i]===void 0;)s=n[r++];if(s===void 0)return;let a=s[i];if(a!==void 0)if(Array.isArray(a))do a=s[i],a!==void 0&&(e.push(s.time),t.push.apply(t,a)),s=n[r++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[i],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=n[r++];while(s!==void 0);else do a=s[i],a!==void 0&&(e.push(s.time),t.push(a)),s=n[r++];while(s!==void 0)}class _a{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,r=t[i],s=t[i-1];n:{e:{let a;t:{i:if(!(e<r)){for(let o=i+2;;){if(r===void 0){if(e<s)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(s=r,r=t[++i],e<r)break e}a=t.length;break t}if(!(e>=s)){const o=t[1];e<o&&(i=2,s=o);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(r=s,s=t[--i-1],e>=s)break e}a=i,i=0;break t}break n}for(;i<a;){const o=i+a>>>1;e<t[o]?a=o:i=o+1}if(r=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let a=0;a!==r;++a)t[a]=i[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class sT extends _a{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:bh,endingEnd:bh}}intervalChanged_(e,t,i){const r=this.parameterPositions;let s=e-2,a=e+1,o=r[s],l=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case Mh:s=e,o=2*t-i;break;case Sh:s=r.length-2,o=t+r[s]-r[s+1];break;default:s=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Mh:a=e,l=2*i-t;break;case Sh:a=1,l=i+r[1]-r[0];break;default:a=e-1,l=t}const c=(i-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-i),this._offsetPrev=s*u,this._offsetNext=a*u}interpolate_(e,t,i,r){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,f=this._offsetNext,h=this._weightPrev,m=this._weightNext,g=(i-t)/(r-t),p=g*g,d=p*g,_=-h*d+2*h*p-h*g,v=(1+h)*d+(-1.5-2*h)*p+(-.5+h)*g+1,S=(-1-m)*d+(1.5+m)*p+.5*g,x=m*d-m*p;for(let w=0;w!==o;++w)s[w]=_*a[u+w]+v*a[c+w]+S*a[l+w]+x*a[f+w];return s}}class aT extends _a{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(i-t)/(r-t),f=1-u;for(let h=0;h!==o;++h)s[h]=a[c+h]*f+a[l+h]*u;return s}}class oT extends _a{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class In{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Za(t,this.TimeBufferType),this.values=Za(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Za(e.times,Array),values:Za(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new oT(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new aT(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new sT(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ta:t=this.InterpolantFactoryMethodDiscrete;break;case ns:t=this.InterpolantFactoryMethodLinear;break;case Ml:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ta;case this.InterpolantFactoryMethodLinear:return ns;case this.InterpolantFactoryMethodSmooth:return Ml}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){const i=this.times,r=i.length;let s=0,a=r-1;for(;s!==r&&i[s]<e;)++s;for(;a!==-1&&i[a]>t;)--a;if(++a,s!==0||a!==r){s>=a&&(a=Math.max(a,1),s=a-1);const o=this.getValueSize();this.times=mi(i,s,a),this.values=mi(this.values,s*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,r=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){const l=i[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(r!==void 0&&ig(r))for(let o=0,l=r.length;o!==l;++o){const c=r[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=mi(this.times),t=mi(this.values),i=this.getValueSize(),r=this.getInterpolation()===Ml,s=e.length-1;let a=1;for(let o=1;o<s;++o){let l=!1;const c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(r)l=!0;else{const f=o*i,h=f-i,m=f+i;for(let g=0;g!==i;++g){const p=t[f+g];if(p!==t[h+g]||p!==t[m+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const f=o*i,h=a*i;for(let m=0;m!==i;++m)t[h+m]=t[f+m]}++a}}if(s>0){e[a]=e[s];for(let o=s*i,l=a*i,c=0;c!==i;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=mi(e,0,a),this.values=mi(t,0,a*i)):(this.times=e,this.values=t),this}clone(){const e=mi(this.times,0),t=mi(this.values,0),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}}In.prototype.TimeBufferType=Float32Array;In.prototype.ValueBufferType=Float32Array;In.prototype.DefaultInterpolation=ns;class ps extends In{}ps.prototype.ValueTypeName="bool";ps.prototype.ValueBufferType=Array;ps.prototype.DefaultInterpolation=ta;ps.prototype.InterpolantFactoryMethodLinear=void 0;ps.prototype.InterpolantFactoryMethodSmooth=void 0;class sg extends In{}sg.prototype.ValueTypeName="color";class ra extends In{}ra.prototype.ValueTypeName="number";class lT extends _a{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-t)/(r-t);let c=e*o;for(let u=c+o;c!==u;c+=4)Ln.slerpFlat(s,0,a,c-o,a,c,l);return s}}class cr extends In{InterpolantFactoryMethodLinear(e){return new lT(this.times,this.values,this.getValueSize(),e)}}cr.prototype.ValueTypeName="quaternion";cr.prototype.DefaultInterpolation=ns;cr.prototype.InterpolantFactoryMethodSmooth=void 0;class ms extends In{}ms.prototype.ValueTypeName="string";ms.prototype.ValueBufferType=Array;ms.prototype.DefaultInterpolation=ta;ms.prototype.InterpolantFactoryMethodLinear=void 0;ms.prototype.InterpolantFactoryMethodSmooth=void 0;class sa extends In{}sa.prototype.ValueTypeName="vector";class cT{constructor(e,t=-1,i,r=Ny){this.name=e,this.tracks=i,this.duration=t,this.blendMode=r,this.uuid=_n(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,r=1/(e.fps||1);for(let a=0,o=i.length;a!==o;++a)t.push(fT(i[a]).scale(r));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],i=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,a=i.length;s!==a;++s)t.push(In.toJSON(i[s]));return r}static CreateFromMorphTargetSequence(e,t,i,r){const s=t.length,a=[];for(let o=0;o<s;o++){let l=[],c=[];l.push((o+s-1)%s,o,(o+1)%s),c.push(0,1,0);const u=rT(l);l=_d(l,1,u),c=_d(c,1,u),!r&&l[0]===0&&(l.push(s),c.push(c[0])),a.push(new ra(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/i))}return new this(e,-1,a)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const r=e;i=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<i.length;r++)if(i[r].name===t)return i[r];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const r={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],u=c.name.match(s);if(u&&u.length>1){const f=u[1];let h=r[f];h||(r[f]=h=[]),h.push(c)}}const a=[];for(const o in r)a.push(this.CreateFromMorphTargetSequence(o,r[o],t,i));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(f,h,m,g,p){if(m.length!==0){const d=[],_=[];rg(m,d,_,g),d.length!==0&&p.push(new f(h,d,_))}},r=[],s=e.name||"default",a=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let f=0;f<c.length;f++){const h=c[f].keys;if(!(!h||h.length===0))if(h[0].morphTargets){const m={};let g;for(g=0;g<h.length;g++)if(h[g].morphTargets)for(let p=0;p<h[g].morphTargets.length;p++)m[h[g].morphTargets[p]]=-1;for(const p in m){const d=[],_=[];for(let v=0;v!==h[g].morphTargets.length;++v){const S=h[g];d.push(S.time),_.push(S.morphTarget===p?1:0)}r.push(new ra(".morphTargetInfluence["+p+"]",d,_))}l=m.length*a}else{const m=".bones["+t[f].name+"]";i(sa,m+".position",h,"pos",r),i(cr,m+".quaternion",h,"rot",r),i(sa,m+".scale",h,"scl",r)}}return r.length===0?null:new this(s,l,r,o)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,r=e.length;i!==r;++i){const s=this.tracks[i];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function uT(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ra;case"vector":case"vector2":case"vector3":case"vector4":return sa;case"color":return sg;case"quaternion":return cr;case"bool":case"boolean":return ps;case"string":return ms}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function fT(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=uT(n.type);if(n.times===void 0){const t=[],i=[];rg(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}const rs={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class ag{constructor(e,t,i){const r=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){o++,s===!1&&r.onStart!==void 0&&r.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,r.onProgress!==void 0&&r.onProgress(u,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){const m=c[f],g=c[f+1];if(m.global&&(m.lastIndex=0),m.test(u))return g}return null}}}const hT=new ag;class va{constructor(e){this.manager=e!==void 0?e:hT,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const Bn={};class dT extends Error{constructor(e,t){super(e),this.response=t}}class og extends va{constructor(e){super(e)}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=rs.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Bn[e]!==void 0){Bn[e].push({onLoad:t,onProgress:i,onError:r});return}Bn[e]=[],Bn[e].push({onLoad:t,onProgress:i,onError:r});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Bn[e],f=c.body.getReader(),h=c.headers.get("Content-Length"),m=h?parseInt(h):0,g=m!==0;let p=0;const d=new ReadableStream({start(_){v();function v(){f.read().then(({done:S,value:x})=>{if(S)_.close();else{p+=x.byteLength;const w=new ProgressEvent("progress",{lengthComputable:g,loaded:p,total:m});for(let R=0,D=u.length;R<D;R++){const b=u[R];b.onProgress&&b.onProgress(w)}_.enqueue(x),v()}})}}});return new Response(d)}else throw new dT(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o===void 0)return c.text();{const f=/charset="?([^;"\s]*)"?/i.exec(o),h=f&&f[1]?f[1].toLowerCase():void 0,m=new TextDecoder(h);return c.arrayBuffer().then(g=>m.decode(g))}}}).then(c=>{rs.add(e,c);const u=Bn[e];delete Bn[e];for(let f=0,h=u.length;f<h;f++){const m=u[f];m.onLoad&&m.onLoad(c)}}).catch(c=>{const u=Bn[e];if(u===void 0)throw this.manager.itemError(e),c;delete Bn[e];for(let f=0,h=u.length;f<h;f++){const m=u[f];m.onError&&m.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class pT extends va{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=rs.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const o=ia("img");function l(){u(),rs.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(f){u(),r&&r(f),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class mT extends va{constructor(e){super(e)}load(e,t,i,r){const s=new Ot,a=new pT(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}class Qo extends lt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Fe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Kl=new je,vd=new I,xd=new I;class Lu{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Oe(512,512),this.map=null,this.mapPass=null,this.matrix=new je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new wu,this._frameExtents=new Oe(1,1),this._viewportCount=1,this._viewports=[new nt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;vd.setFromMatrixPosition(e.matrixWorld),t.position.copy(vd),xd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(xd),t.updateMatrixWorld(),Kl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Kl),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Kl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class gT extends Lu{constructor(){super(new Nt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,i=na*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(i!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=i,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class _T extends Qo{constructor(e,t,i=0,r=Math.PI/3,s=0,a=1){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(lt.DefaultUp),this.updateMatrix(),this.target=new lt,this.distance=i,this.angle=r,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new gT}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const yd=new je,Ss=new I,Zl=new I;class vT extends Lu{constructor(){super(new Nt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Oe(4,2),this._viewportCount=6,this._viewports=[new nt(2,1,1,1),new nt(0,1,1,1),new nt(3,1,1,1),new nt(1,1,1,1),new nt(3,0,1,1),new nt(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Ss.setFromMatrixPosition(e.matrixWorld),i.position.copy(Ss),Zl.copy(i.position),Zl.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Zl),i.updateMatrixWorld(),r.makeTranslation(-Ss.x,-Ss.y,-Ss.z),yd.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(yd)}}class xT extends Qo{constructor(e,t,i=0,r=1){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new vT}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class yT extends Lu{constructor(){super(new ga(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class bT extends Qo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(lt.DefaultUp),this.updateMatrix(),this.target=new lt,this.shadow=new yT}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class MT extends Qo{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class sr{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,r=e.length;i<r;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class ST extends va{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=rs.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){rs.add(e,l),t&&t(l),s.manager.itemEnd(e)}).catch(function(l){r&&r(l),s.manager.itemError(e),s.manager.itemEnd(e)}),s.manager.itemStart(e)}}class wT{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=bd(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=bd();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function bd(){return(typeof performance>"u"?Date:performance).now()}const Pu="\\[\\]\\.:\\/",TT=new RegExp("["+Pu+"]","g"),Iu="[^"+Pu+"]",ET="[^"+Pu.replace("\\.","")+"]",AT=/((?:WC+[\/:])*)/.source.replace("WC",Iu),CT=/(WCOD+)?/.source.replace("WCOD",ET),RT=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Iu),LT=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Iu),PT=new RegExp("^"+AT+CT+RT+LT+"$"),IT=["material","materials","bones","map"];class DT{constructor(e,t,i){const r=i||Qe.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class Qe{constructor(e,t,i){this.path=t,this.parsedPath=i||Qe.parseTrackName(t),this.node=Qe.findNode(e,this.parsedPath.nodeName)||e,this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new Qe.Composite(e,t,i):new Qe(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(TT,"")}static parseTrackName(e){const t=PT.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const s=i.nodeName.substring(r+1);IT.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(s){for(let a=0;a<s.length;a++){const o=s[a];if(o.name===t||o.uuid===t)return o;const l=i(o.children);if(l)return l}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[t++]=i[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,r=t.propertyName;let s=t.propertyIndex;if(e||(e=Qe.findNode(this.rootNode,t.nodeName)||this.rootNode,this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[r];if(a===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Qe.Composite=DT;Qe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Qe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Qe.prototype.GetterByBindingType=[Qe.prototype._getValue_direct,Qe.prototype._getValue_array,Qe.prototype._getValue_arrayElement,Qe.prototype._getValue_toArray];Qe.prototype.SetterByBindingTypeAndVersioning=[[Qe.prototype._setValue_direct,Qe.prototype._setValue_direct_setNeedsUpdate,Qe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Qe.prototype._setValue_array,Qe.prototype._setValue_array_setNeedsUpdate,Qe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Qe.prototype._setValue_arrayElement,Qe.prototype._setValue_arrayElement_setNeedsUpdate,Qe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Qe.prototype._setValue_fromArray,Qe.prototype._setValue_fromArray_setNeedsUpdate,Qe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Md{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Ct(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:yu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=yu);var Hs={Linear:{None:function(n){return n}},Quadratic:{In:function(n){return n*n},Out:function(n){return n*(2-n)},InOut:function(n){return(n*=2)<1?.5*n*n:-.5*(--n*(n-2)-1)}},Cubic:{In:function(n){return n*n*n},Out:function(n){return--n*n*n+1},InOut:function(n){return(n*=2)<1?.5*n*n*n:.5*((n-=2)*n*n+2)}},Quartic:{In:function(n){return n*n*n*n},Out:function(n){return 1- --n*n*n*n},InOut:function(n){return(n*=2)<1?.5*n*n*n*n:-.5*((n-=2)*n*n*n-2)}},Quintic:{In:function(n){return n*n*n*n*n},Out:function(n){return--n*n*n*n*n+1},InOut:function(n){return(n*=2)<1?.5*n*n*n*n*n:.5*((n-=2)*n*n*n*n+2)}},Sinusoidal:{In:function(n){return 1-Math.cos(n*Math.PI/2)},Out:function(n){return Math.sin(n*Math.PI/2)},InOut:function(n){return .5*(1-Math.cos(Math.PI*n))}},Exponential:{In:function(n){return n===0?0:Math.pow(1024,n-1)},Out:function(n){return n===1?1:1-Math.pow(2,-10*n)},InOut:function(n){return n===0?0:n===1?1:(n*=2)<1?.5*Math.pow(1024,n-1):.5*(-Math.pow(2,-10*(n-1))+2)}},Circular:{In:function(n){return 1-Math.sqrt(1-n*n)},Out:function(n){return Math.sqrt(1- --n*n)},InOut:function(n){return(n*=2)<1?-.5*(Math.sqrt(1-n*n)-1):.5*(Math.sqrt(1-(n-=2)*n)+1)}},Elastic:{In:function(n){return n===0?0:n===1?1:-Math.pow(2,10*(n-1))*Math.sin((n-1.1)*5*Math.PI)},Out:function(n){return n===0?0:n===1?1:Math.pow(2,-10*n)*Math.sin((n-.1)*5*Math.PI)+1},InOut:function(n){return n===0?0:n===1?1:(n*=2,n<1?-.5*Math.pow(2,10*(n-1))*Math.sin((n-1.1)*5*Math.PI):.5*Math.pow(2,-10*(n-1))*Math.sin((n-1.1)*5*Math.PI)+1)}},Back:{In:function(n){var e=1.70158;return n*n*((e+1)*n-e)},Out:function(n){var e=1.70158;return--n*n*((e+1)*n+e)+1},InOut:function(n){var e=2.5949095;return(n*=2)<1?.5*(n*n*((e+1)*n-e)):.5*((n-=2)*n*((e+1)*n+e)+2)}},Bounce:{In:function(n){return 1-Hs.Bounce.Out(1-n)},Out:function(n){return n<1/2.75?7.5625*n*n:n<2/2.75?7.5625*(n-=1.5/2.75)*n+.75:n<2.5/2.75?7.5625*(n-=2.25/2.75)*n+.9375:7.5625*(n-=2.625/2.75)*n+.984375},InOut:function(n){return n<.5?Hs.Bounce.In(n*2)*.5:Hs.Bounce.Out(n*2-1)*.5+.5}}},Rs;typeof self>"u"&&typeof process<"u"&&process.hrtime?Rs=function(){var n=process.hrtime();return n[0]*1e3+n[1]/1e6}:typeof self<"u"&&self.performance!==void 0&&self.performance.now!==void 0?Rs=self.performance.now.bind(self.performance):Date.now!==void 0?Rs=Date.now:Rs=function(){return new Date().getTime()};var Fr=Rs,NT=function(){function n(){this._tweens={},this._tweensAddedDuringUpdate={}}return n.prototype.getAll=function(){var e=this;return Object.keys(this._tweens).map(function(t){return e._tweens[t]})},n.prototype.removeAll=function(){this._tweens={}},n.prototype.add=function(e){this._tweens[e.getId()]=e,this._tweensAddedDuringUpdate[e.getId()]=e},n.prototype.remove=function(e){delete this._tweens[e.getId()],delete this._tweensAddedDuringUpdate[e.getId()]},n.prototype.update=function(e,t){e===void 0&&(e=Fr()),t===void 0&&(t=!1);var i=Object.keys(this._tweens);if(i.length===0)return!1;for(;i.length>0;){this._tweensAddedDuringUpdate={};for(var r=0;r<i.length;r++){var s=this._tweens[i[r]],a=!t;s&&s.update(e,a)===!1&&!t&&delete this._tweens[i[r]]}i=Object.keys(this._tweensAddedDuringUpdate)}return!0},n}(),Ls={Linear:function(n,e){var t=n.length-1,i=t*e,r=Math.floor(i),s=Ls.Utils.Linear;return e<0?s(n[0],n[1],i):e>1?s(n[t],n[t-1],t-i):s(n[r],n[r+1>t?t:r+1],i-r)},Bezier:function(n,e){for(var t=0,i=n.length-1,r=Math.pow,s=Ls.Utils.Bernstein,a=0;a<=i;a++)t+=r(1-e,i-a)*r(e,a)*n[a]*s(i,a);return t},CatmullRom:function(n,e){var t=n.length-1,i=t*e,r=Math.floor(i),s=Ls.Utils.CatmullRom;return n[0]===n[t]?(e<0&&(r=Math.floor(i=t*(1+e))),s(n[(r-1+t)%t],n[r],n[(r+1)%t],n[(r+2)%t],i-r)):e<0?n[0]-(s(n[0],n[0],n[1],n[1],-i)-n[0]):e>1?n[t]-(s(n[t],n[t],n[t-1],n[t-1],i-t)-n[t]):s(n[r?r-1:0],n[r],n[t<r+1?t:r+1],n[t<r+2?t:r+2],i-r)},Utils:{Linear:function(n,e,t){return(e-n)*t+n},Bernstein:function(n,e){var t=Ls.Utils.Factorial;return t(n)/t(e)/t(n-e)},Factorial:function(){var n=[1];return function(e){var t=1;if(n[e])return n[e];for(var i=e;i>1;i--)t*=i;return n[e]=t,t}}(),CatmullRom:function(n,e,t,i,r){var s=(t-n)*.5,a=(i-e)*.5,o=r*r,l=r*o;return(2*e-2*t+s+a)*l+(-3*e+3*t-2*s-a)*o+s*r+e}}},lg=function(){function n(){}return n.nextId=function(){return n._nextId++},n._nextId=0,n}(),cg=new NT,OT=function(){function n(e,t){t===void 0&&(t=cg),this._object=e,this._group=t,this._isPaused=!1,this._pauseStart=0,this._valuesStart={},this._valuesEnd={},this._valuesStartRepeat={},this._duration=1e3,this._initialRepeat=0,this._repeat=0,this._yoyo=!1,this._isPlaying=!1,this._reversed=!1,this._delayTime=0,this._startTime=0,this._easingFunction=Hs.Linear.None,this._interpolationFunction=Ls.Linear,this._chainedTweens=[],this._onStartCallbackFired=!1,this._id=lg.nextId(),this._isChainStopped=!1,this._goToEnd=!1}return n.prototype.getId=function(){return this._id},n.prototype.isPlaying=function(){return this._isPlaying},n.prototype.isPaused=function(){return this._isPaused},n.prototype.to=function(e,t){return this._valuesEnd=Object.create(e),t!==void 0&&(this._duration=t),this},n.prototype.duration=function(e){return this._duration=e,this},n.prototype.start=function(e){if(this._isPlaying)return this;if(this._group&&this._group.add(this),this._repeat=this._initialRepeat,this._reversed){this._reversed=!1;for(var t in this._valuesStartRepeat)this._swapEndStartRepeatValues(t),this._valuesStart[t]=this._valuesStartRepeat[t]}return this._isPlaying=!0,this._isPaused=!1,this._onStartCallbackFired=!1,this._isChainStopped=!1,this._startTime=e!==void 0?typeof e=="string"?Fr()+parseFloat(e):e:Fr(),this._startTime+=this._delayTime,this._setupProperties(this._object,this._valuesStart,this._valuesEnd,this._valuesStartRepeat),this},n.prototype._setupProperties=function(e,t,i,r){for(var s in i){var a=e[s],o=Array.isArray(a),l=o?"array":typeof a,c=!o&&Array.isArray(i[s]);if(!(l==="undefined"||l==="function")){if(c){var u=i[s];if(u.length===0)continue;u=u.map(this._handleRelativeValue.bind(this,a)),i[s]=[a].concat(u)}if((l==="object"||o)&&a&&!c){t[s]=o?[]:{};for(var f in a)t[s][f]=a[f];r[s]=o?[]:{},this._setupProperties(a,t[s],i[s],r[s])}else typeof t[s]>"u"&&(t[s]=a),o||(t[s]*=1),c?r[s]=i[s].slice().reverse():r[s]=t[s]||0}}},n.prototype.stop=function(){return this._isChainStopped||(this._isChainStopped=!0,this.stopChainedTweens()),this._isPlaying?(this._group&&this._group.remove(this),this._isPlaying=!1,this._isPaused=!1,this._onStopCallback&&this._onStopCallback(this._object),this):this},n.prototype.end=function(){return this._goToEnd=!0,this.update(1/0),this},n.prototype.pause=function(e){return e===void 0&&(e=Fr()),this._isPaused||!this._isPlaying?this:(this._isPaused=!0,this._pauseStart=e,this._group&&this._group.remove(this),this)},n.prototype.resume=function(e){return e===void 0&&(e=Fr()),!this._isPaused||!this._isPlaying?this:(this._isPaused=!1,this._startTime+=e-this._pauseStart,this._pauseStart=0,this._group&&this._group.add(this),this)},n.prototype.stopChainedTweens=function(){for(var e=0,t=this._chainedTweens.length;e<t;e++)this._chainedTweens[e].stop();return this},n.prototype.group=function(e){return this._group=e,this},n.prototype.delay=function(e){return this._delayTime=e,this},n.prototype.repeat=function(e){return this._initialRepeat=e,this._repeat=e,this},n.prototype.repeatDelay=function(e){return this._repeatDelayTime=e,this},n.prototype.yoyo=function(e){return this._yoyo=e,this},n.prototype.easing=function(e){return this._easingFunction=e,this},n.prototype.interpolation=function(e){return this._interpolationFunction=e,this},n.prototype.chain=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return this._chainedTweens=e,this},n.prototype.onStart=function(e){return this._onStartCallback=e,this},n.prototype.onUpdate=function(e){return this._onUpdateCallback=e,this},n.prototype.onRepeat=function(e){return this._onRepeatCallback=e,this},n.prototype.onComplete=function(e){return this._onCompleteCallback=e,this},n.prototype.onStop=function(e){return this._onStopCallback=e,this},n.prototype.update=function(e,t){if(e===void 0&&(e=Fr()),t===void 0&&(t=!0),this._isPaused)return!0;var i,r,s=this._startTime+this._duration;if(!this._goToEnd&&!this._isPlaying){if(e>s)return!1;t&&this.start(e)}if(this._goToEnd=!1,e<this._startTime)return!0;this._onStartCallbackFired===!1&&(this._onStartCallback&&this._onStartCallback(this._object),this._onStartCallbackFired=!0),r=(e-this._startTime)/this._duration,r=this._duration===0||r>1?1:r;var a=this._easingFunction(r);if(this._updateProperties(this._object,this._valuesStart,this._valuesEnd,a),this._onUpdateCallback&&this._onUpdateCallback(this._object,r),r===1)if(this._repeat>0){isFinite(this._repeat)&&this._repeat--;for(i in this._valuesStartRepeat)!this._yoyo&&typeof this._valuesEnd[i]=="string"&&(this._valuesStartRepeat[i]=this._valuesStartRepeat[i]+parseFloat(this._valuesEnd[i])),this._yoyo&&this._swapEndStartRepeatValues(i),this._valuesStart[i]=this._valuesStartRepeat[i];return this._yoyo&&(this._reversed=!this._reversed),this._repeatDelayTime!==void 0?this._startTime=e+this._repeatDelayTime:this._startTime=e+this._delayTime,this._onRepeatCallback&&this._onRepeatCallback(this._object),!0}else{this._onCompleteCallback&&this._onCompleteCallback(this._object);for(var o=0,l=this._chainedTweens.length;o<l;o++)this._chainedTweens[o].start(this._startTime+this._duration);return this._isPlaying=!1,!1}return!0},n.prototype._updateProperties=function(e,t,i,r){for(var s in i)if(t[s]!==void 0){var a=t[s]||0,o=i[s],l=Array.isArray(e[s]),c=Array.isArray(o),u=!l&&c;u?e[s]=this._interpolationFunction(o,r):typeof o=="object"&&o?this._updateProperties(e[s],a,o,r):(o=this._handleRelativeValue(a,o),typeof o=="number"&&(e[s]=a+(o-a)*r))}},n.prototype._handleRelativeValue=function(e,t){return typeof t!="string"?t:t.charAt(0)==="+"||t.charAt(0)==="-"?e+parseFloat(t):parseFloat(t)},n.prototype._swapEndStartRepeatValues=function(e){var t=this._valuesStartRepeat[e],i=this._valuesEnd[e];typeof i=="string"?this._valuesStartRepeat[e]=this._valuesStartRepeat[e]+parseFloat(i):this._valuesStartRepeat[e]=this._valuesEnd[e],this._valuesEnd[e]=t},n}();lg.nextId;var Pn=cg;Pn.getAll.bind(Pn);Pn.removeAll.bind(Pn);Pn.add.bind(Pn);Pn.remove.bind(Pn);var FT=Pn.update.bind(Pn);class kT extends va{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new VT(t)}),this.register(function(t){return new YT(t)}),this.register(function(t){return new KT(t)}),this.register(function(t){return new WT(t)}),this.register(function(t){return new jT(t)}),this.register(function(t){return new XT(t)}),this.register(function(t){return new qT(t)}),this.register(function(t){return new HT(t)}),this.register(function(t){return new $T(t)}),this.register(function(t){return new GT(t)}),this.register(function(t){return new zT(t)}),this.register(function(t){return new ZT(t)})}load(e,t,i,r){const s=this;let a;this.resourcePath!==""?a=this.resourcePath:this.path!==""?a=this.path:a=sr.extractUrlBase(e),this.manager.itemStart(e);const o=function(c){r?r(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new og(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,a,function(u){t(u),s.manager.itemEnd(e)},o)}catch(u){o(u)}},i,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,r){let s;const a={},o={};if(typeof e=="string")s=e;else if(sr.decodeText(new Uint8Array(e,0,4))===ug){try{a[Ge.KHR_BINARY_GLTF]=new JT(e)}catch(f){r&&r(f);return}s=a[Ge.KHR_BINARY_GLTF].content}else s=sr.decodeText(new Uint8Array(e));const l=JSON.parse(s);if(l.asset===void 0||l.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new fE(l,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const f=this.pluginCallbacks[u](c);o[f.name]=f,a[f.name]=!0}if(l.extensionsUsed)for(let u=0;u<l.extensionsUsed.length;++u){const f=l.extensionsUsed[u],h=l.extensionsRequired||[];switch(f){case Ge.KHR_MATERIALS_UNLIT:a[f]=new BT;break;case Ge.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:a[f]=new tE;break;case Ge.KHR_DRACO_MESH_COMPRESSION:a[f]=new QT(l,this.dracoLoader);break;case Ge.KHR_TEXTURE_TRANSFORM:a[f]=new eE;break;case Ge.KHR_MESH_QUANTIZATION:a[f]=new nE;break;default:h.indexOf(f)>=0&&o[f]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+f+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(i,r)}parseAsync(e,t){const i=this;return new Promise(function(r,s){i.parse(e,t,r,s)})}}function UT(){let n={};return{get:function(e){return n[e]},add:function(e,t){n[e]=t},remove:function(e){delete n[e]},removeAll:function(){n={}}}}const Ge={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:"KHR_materials_pbrSpecularGlossiness",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression"};class zT{constructor(e){this.parser=e,this.name=Ge.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let i=0,r=t.length;i<r;i++){const s=t[i];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,i="light:"+e;let r=t.cache.get(i);if(r)return r;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const u=new Fe(16777215);l.color!==void 0&&u.fromArray(l.color);const f=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new bT(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new xT(u),c.distance=f;break;case"spot":c=new _T(u),c.distance=f,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),r=Promise.resolve(c),t.cache.add(i,r),r}createNodeAttachment(e){const t=this,i=this.parser,s=i.json.nodes[e],o=(s.extensions&&s.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return i._getNodeRef(t.cache,o,l)})}}class BT{constructor(){this.name=Ge.KHR_MATERIALS_UNLIT}getMaterialType(){return Ji}extendParams(e,t,i){const r=[];e.color=new Fe(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const a=s.baseColorFactor;e.color.fromArray(a),e.opacity=a[3]}s.baseColorTexture!==void 0&&r.push(i.assignTexture(e,"map",s.baseColorTexture,Ke))}return Promise.all(r)}}class HT{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class VT{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:dr}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],a=r.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&s.push(i.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&s.push(i.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(s.push(i.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Oe(o,o)}return Promise.all(s)}}class GT{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:dr}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],a=r.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&s.push(i.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&s.push(i.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(s)}}class WT{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_SHEEN}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:dr}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new Fe(0,0,0),t.sheenRoughness=0,t.sheen=1;const a=r.extensions[this.name];return a.sheenColorFactor!==void 0&&t.sheenColor.fromArray(a.sheenColorFactor),a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&s.push(i.assignTexture(t,"sheenColorMap",a.sheenColorTexture,Ke)),a.sheenRoughnessTexture!==void 0&&s.push(i.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(s)}}class jT{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:dr}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],a=r.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&s.push(i.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(s)}}class XT{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_VOLUME}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:dr}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],a=r.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&s.push(i.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;const o=a.attenuationColor||[1,1,1];return t.attenuationColor=new Fe(o[0],o[1],o[2]),Promise.all(s)}}class qT{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_IOR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:dr}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class $T{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_SPECULAR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:dr}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],a=r.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&s.push(i.assignTexture(t,"specularIntensityMap",a.specularTexture));const o=a.specularColorFactor||[1,1,1];return t.specularColor=new Fe(o[0],o[1],o[2]),a.specularColorTexture!==void 0&&s.push(i.assignTexture(t,"specularColorMap",a.specularColorTexture,Ke)),Promise.all(s)}}class YT{constructor(e){this.parser=e,this.name=Ge.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,i=t.json,r=i.textures[e];if(!r.extensions||!r.extensions[this.name])return null;const s=r.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,a)}}class KT{constructor(e){this.parser=e,this.name=Ge.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,r=i.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const a=s.extensions[t],o=r.images[a.source];let l=i.textureLoader;if(o.uri){const c=i.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,a.source,l);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class ZT{constructor(e){this.name=Ge.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const r=i.extensions[this.name],s=this.parser.getDependency("buffer",r.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(o){const l=r.byteOffset||0,c=r.byteLength||0,u=r.count,f=r.byteStride,h=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(u,f,h,r.mode,r.filter).then(function(m){return m.buffer}):a.ready.then(function(){const m=new ArrayBuffer(u*f);return a.decodeGltfBuffer(new Uint8Array(m),u,f,h,r.mode,r.filter),m})})}else return null}}const ug="glTF",ws=12,Sd={JSON:1313821514,BIN:5130562};class JT{constructor(e){this.name=Ge.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,ws);if(this.header={magic:sr.decodeText(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==ug)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-ws,r=new DataView(e,ws);let s=0;for(;s<i;){const a=r.getUint32(s,!0);s+=4;const o=r.getUint32(s,!0);if(s+=4,o===Sd.JSON){const l=new Uint8Array(e,ws+s,a);this.content=sr.decodeText(l)}else if(o===Sd.BIN){const l=ws+s;this.body=e.slice(l,l+a)}s+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class QT{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ge.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const i=this.json,r=this.dracoLoader,s=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(const u in a){const f=Oc[u]||u.toLowerCase();o[f]=a[u]}for(const u in e.attributes){const f=Oc[u]||u.toLowerCase();if(a[u]!==void 0){const h=i.accessors[e.attributes[u]],m=aa[h.componentType];c[f]=m.name,l[f]=h.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(f){r.decodeDracoFile(u,function(h){for(const m in h.attributes){const g=h.attributes[m],p=l[m];p!==void 0&&(g.normalized=p)}f(h)},o,c)})})}}class eE{constructor(){this.name=Ge.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return t.texCoord!==void 0&&console.warn('THREE.GLTFLoader: Custom UV sets in "'+this.name+'" extension not yet supported.'),t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class Nc extends Jo{constructor(e){super(),this.isGLTFSpecularGlossinessMaterial=!0;const t=["#ifdef USE_SPECULARMAP","	uniform sampler2D specularMap;","#endif"].join(`
`),i=["#ifdef USE_GLOSSINESSMAP","	uniform sampler2D glossinessMap;","#endif"].join(`
`),r=["vec3 specularFactor = specular;","#ifdef USE_SPECULARMAP","	vec4 texelSpecular = texture2D( specularMap, vUv );","	// reads channel RGB, compatible with a glTF Specular-Glossiness (RGBA) texture","	specularFactor *= texelSpecular.rgb;","#endif"].join(`
`),s=["float glossinessFactor = glossiness;","#ifdef USE_GLOSSINESSMAP","	vec4 texelGlossiness = texture2D( glossinessMap, vUv );","	// reads channel A, compatible with a glTF Specular-Glossiness (RGBA) texture","	glossinessFactor *= texelGlossiness.a;","#endif"].join(`
`),a=["PhysicalMaterial material;","material.diffuseColor = diffuseColor.rgb * ( 1. - max( specularFactor.r, max( specularFactor.g, specularFactor.b ) ) );","vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );","float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );","material.roughness = max( 1.0 - glossinessFactor, 0.0525 ); // 0.0525 corresponds to the base mip of a 256 cubemap.","material.roughness += geometryRoughness;","material.roughness = min( material.roughness, 1.0 );","material.specularColor = specularFactor;"].join(`
`),o={specular:{value:new Fe().setHex(16777215)},glossiness:{value:1},specularMap:{value:null},glossinessMap:{value:null}};this._extraUniforms=o,this.onBeforeCompile=function(l){for(const c in o)l.uniforms[c]=o[c];l.fragmentShader=l.fragmentShader.replace("uniform float roughness;","uniform vec3 specular;").replace("uniform float metalness;","uniform float glossiness;").replace("#include <roughnessmap_pars_fragment>",t).replace("#include <metalnessmap_pars_fragment>",i).replace("#include <roughnessmap_fragment>",r).replace("#include <metalnessmap_fragment>",s).replace("#include <lights_physical_fragment>",a)},Object.defineProperties(this,{specular:{get:function(){return o.specular.value},set:function(l){o.specular.value=l}},specularMap:{get:function(){return o.specularMap.value},set:function(l){o.specularMap.value=l,l?this.defines.USE_SPECULARMAP="":delete this.defines.USE_SPECULARMAP}},glossiness:{get:function(){return o.glossiness.value},set:function(l){o.glossiness.value=l}},glossinessMap:{get:function(){return o.glossinessMap.value},set:function(l){o.glossinessMap.value=l,l?(this.defines.USE_GLOSSINESSMAP="",this.defines.USE_UV=""):(delete this.defines.USE_GLOSSINESSMAP,delete this.defines.USE_UV)}}}),delete this.metalness,delete this.roughness,delete this.metalnessMap,delete this.roughnessMap,this.setValues(e)}copy(e){return super.copy(e),this.specularMap=e.specularMap,this.specular.copy(e.specular),this.glossinessMap=e.glossinessMap,this.glossiness=e.glossiness,delete this.metalness,delete this.roughness,delete this.metalnessMap,delete this.roughnessMap,this}}class tE{constructor(){this.name=Ge.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS,this.specularGlossinessParams=["color","map","lightMap","lightMapIntensity","aoMap","aoMapIntensity","emissive","emissiveIntensity","emissiveMap","bumpMap","bumpScale","normalMap","normalMapType","displacementMap","displacementScale","displacementBias","specularMap","specular","glossinessMap","glossiness","alphaMap","envMap","envMapIntensity"]}getMaterialType(){return Nc}extendParams(e,t,i){const r=t.extensions[this.name];e.color=new Fe(1,1,1),e.opacity=1;const s=[];if(Array.isArray(r.diffuseFactor)){const a=r.diffuseFactor;e.color.fromArray(a),e.opacity=a[3]}if(r.diffuseTexture!==void 0&&s.push(i.assignTexture(e,"map",r.diffuseTexture,Ke)),e.emissive=new Fe(0,0,0),e.glossiness=r.glossinessFactor!==void 0?r.glossinessFactor:1,e.specular=new Fe(1,1,1),Array.isArray(r.specularFactor)&&e.specular.fromArray(r.specularFactor),r.specularGlossinessTexture!==void 0){const a=r.specularGlossinessTexture;s.push(i.assignTexture(e,"glossinessMap",a)),s.push(i.assignTexture(e,"specularMap",a,Ke))}return Promise.all(s)}createMaterial(e){const t=new Nc(e);return t.fog=!0,t.color=e.color,t.map=e.map===void 0?null:e.map,t.lightMap=null,t.lightMapIntensity=1,t.aoMap=e.aoMap===void 0?null:e.aoMap,t.aoMapIntensity=1,t.emissive=e.emissive,t.emissiveIntensity=e.emissiveIntensity===void 0?1:e.emissiveIntensity,t.emissiveMap=e.emissiveMap===void 0?null:e.emissiveMap,t.bumpMap=e.bumpMap===void 0?null:e.bumpMap,t.bumpScale=1,t.normalMap=e.normalMap===void 0?null:e.normalMap,t.normalMapType=bu,e.normalScale&&(t.normalScale=e.normalScale),t.displacementMap=null,t.displacementScale=1,t.displacementBias=0,t.specularMap=e.specularMap===void 0?null:e.specularMap,t.specular=e.specular,t.glossinessMap=e.glossinessMap===void 0?null:e.glossinessMap,t.glossiness=e.glossiness,t.alphaMap=null,t.envMap=e.envMap===void 0?null:e.envMap,t.envMapIntensity=1,t}}class nE{constructor(){this.name=Ge.KHR_MESH_QUANTIZATION}}class fg extends _a{constructor(e,t,i,r){super(e,t,i,r)}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r*3+r;for(let a=0;a!==r;a++)t[a]=i[s+a];return t}interpolate_(e,t,i,r){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,u=r-t,f=(i-t)/u,h=f*f,m=h*f,g=e*c,p=g-c,d=-2*m+3*h,_=m-h,v=1-d,S=_-h+f;for(let x=0;x!==o;x++){const w=a[p+x+o],R=a[p+x+l]*u,D=a[g+x+o],b=a[g+x]*u;s[x]=v*w+S*R+d*D+_*b}return s}}const iE=new Ln;class rE extends fg{interpolate_(e,t,i,r){const s=super.interpolate_(e,t,i,r);return iE.fromArray(s).normalize().toArray(s),s}}const Hn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},aa={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},wd={9728:wt,9729:Ut,9984:Ac,9985:Im,9986:Cc,9987:us},Td={33071:Jt,33648:To,10497:es},Ed={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Oc={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv2",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},gi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},sE={CUBICSPLINE:void 0,LINEAR:ns,STEP:ta},Jl={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function aE(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new Jo({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ar})),n.DefaultMaterial}function Ts(n,e,t){for(const i in t.extensions)n[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function Wi(n,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(n.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function oE(n,e,t){let i=!1,r=!1,s=!1;for(let c=0,u=e.length;c<u;c++){const f=e[c];if(f.POSITION!==void 0&&(i=!0),f.NORMAL!==void 0&&(r=!0),f.COLOR_0!==void 0&&(s=!0),i&&r&&s)break}if(!i&&!r&&!s)return Promise.resolve(n);const a=[],o=[],l=[];for(let c=0,u=e.length;c<u;c++){const f=e[c];if(i){const h=f.POSITION!==void 0?t.getDependency("accessor",f.POSITION):n.attributes.position;a.push(h)}if(r){const h=f.NORMAL!==void 0?t.getDependency("accessor",f.NORMAL):n.attributes.normal;o.push(h)}if(s){const h=f.COLOR_0!==void 0?t.getDependency("accessor",f.COLOR_0):n.attributes.color;l.push(h)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){const u=c[0],f=c[1],h=c[2];return i&&(n.morphAttributes.position=u),r&&(n.morphAttributes.normal=f),s&&(n.morphAttributes.color=h),n.morphTargetsRelative=!0,n})}function lE(n,e){if(n.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)n.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(n.morphTargetInfluences.length===t.length){n.morphTargetDictionary={};for(let i=0,r=t.length;i<r;i++)n.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function cE(n){const e=n.extensions&&n.extensions[Ge.KHR_DRACO_MESH_COMPRESSION];let t;return e?t="draco:"+e.bufferView+":"+e.indices+":"+Ad(e.attributes):t=n.indices+":"+Ad(n.attributes)+":"+n.mode,t}function Ad(n){let e="";const t=Object.keys(n).sort();for(let i=0,r=t.length;i<r;i++)e+=t[i]+":"+n[t[i]]+";";return e}function Fc(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function uE(n){return n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0?"image/jpeg":n.search(/\.webp($|\?)/i)>0||n.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}class fE{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new UT,this.associations=new Map,this.primitiveCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};const i=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,r=navigator.userAgent.indexOf("Firefox")>-1,s=r?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1;typeof createImageBitmap>"u"||i||r&&s<98?this.textureLoader=new mT(this.options.manager):this.textureLoader=new ST(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new og(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const i=this,r=this.json,s=this.extensions;this.cache.removeAll(),this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(a){const o={scene:a[0][r.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:r.asset,parser:i,userData:{}};Ts(s,o,r),Wi(o,r),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let r=0,s=t.length;r<s;r++){const a=t[r].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let r=0,s=e.length;r<s;r++){const a=e[r];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(i[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;const r=i.clone(),s=(a,o)=>{const l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(const[c,u]of a.children.entries())s(u,o.children[c])};return s(i,r),r.name+="_instance_"+e.uses[t]++,r}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const r=e(t[i]);if(r)return r}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let r=0;r<t.length;r++){const s=e(t[r]);s&&i.push(s)}return i}getDependency(e,t){const i=e+":"+t;let r=this.cache.get(i);if(!r){switch(e){case"scene":r=this.loadScene(t);break;case"node":r=this.loadNode(t);break;case"mesh":r=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":r=this.loadAccessor(t);break;case"bufferView":r=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":r=this.loadBuffer(t);break;case"material":r=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":r=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":r=this.loadSkin(t);break;case"animation":r=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":r=this.loadCamera(t);break;default:throw new Error("Unknown type: "+e)}this.cache.add(i,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){const i=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(r.map(function(s,a){return i.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ge.KHR_BINARY_GLTF].body);const r=this.options;return new Promise(function(s,a){i.load(sr.resolveURL(t.uri,r.path),s,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){const r=t.byteLength||0,s=t.byteOffset||0;return i.slice(s,s+r)})}loadAccessor(e){const t=this,i=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0)return Promise.resolve(null);const s=[];return r.bufferView!==void 0?s.push(this.getDependency("bufferView",r.bufferView)):s.push(null),r.sparse!==void 0&&(s.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(s).then(function(a){const o=a[0],l=Ed[r.type],c=aa[r.componentType],u=c.BYTES_PER_ELEMENT,f=u*l,h=r.byteOffset||0,m=r.bufferView!==void 0?i.bufferViews[r.bufferView].byteStride:void 0,g=r.normalized===!0;let p,d;if(m&&m!==f){const _=Math.floor(h/m),v="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+_+":"+r.count;let S=t.cache.get(v);S||(p=new c(o,_*m,r.count*m/u),S=new Kw(p,m/u),t.cache.add(v,S)),d=new Au(S,l,h%m/u,g)}else o===null?p=new c(r.count*l):p=new c(o,h,r.count*l),d=new Vt(p,l,g);if(r.sparse!==void 0){const _=Ed.SCALAR,v=aa[r.sparse.indices.componentType],S=r.sparse.indices.byteOffset||0,x=r.sparse.values.byteOffset||0,w=new v(a[1],S,r.sparse.count*_),R=new c(a[2],x,r.sparse.count*l);o!==null&&(d=new Vt(d.array.slice(),d.itemSize,d.normalized));for(let D=0,b=w.length;D<b;D++){const A=w[D];if(d.setX(A,R[D*l]),l>=2&&d.setY(A,R[D*l+1]),l>=3&&d.setZ(A,R[D*l+2]),l>=4&&d.setW(A,R[D*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return d})}loadTexture(e){const t=this.json,i=this.options,s=t.textures[e].source,a=t.images[s];let o=this.textureLoader;if(a.uri){const l=i.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,s,o)}loadTextureImage(e,t,i){const r=this,s=this.json,a=s.textures[e],o=s.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,i).then(function(u){u.flipY=!1,a.name&&(u.name=a.name);const h=(s.samplers||{})[a.sampler]||{};return u.magFilter=wd[h.magFilter]||Ut,u.minFilter=wd[h.minFilter]||us,u.wrapS=Td[h.wrapS]||es,u.wrapT=Td[h.wrapT]||es,r.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const i=this,r=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(f=>f.clone());const a=r.images[e],o=self.URL||self.webkitURL;let l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=i.getDependency("bufferView",a.bufferView).then(function(f){c=!0;const h=new Blob([f],{type:a.mimeType});return l=o.createObjectURL(h),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(f){return new Promise(function(h,m){let g=h;t.isImageBitmapLoader===!0&&(g=function(p){const d=new Ot(p);d.needsUpdate=!0,h(d)}),t.load(sr.resolveURL(f,s.path),g,void 0,m)})}).then(function(f){return c===!0&&o.revokeObjectURL(l),f.userData.mimeType=a.mimeType||uE(a.uri),f}).catch(function(f){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),f});return this.sourceCache[e]=u,u}assignTexture(e,t,i,r){const s=this;return this.getDependency("texture",i.index).then(function(a){if(i.texCoord!==void 0&&i.texCoord!=0&&!(t==="aoMap"&&i.texCoord==1)&&console.warn("THREE.GLTFLoader: Custom UV set "+i.texCoord+" for texture "+t+" not yet supported."),s.extensions[Ge.KHR_TEXTURE_TRANSFORM]){const o=i.extensions!==void 0?i.extensions[Ge.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const l=s.associations.get(a);a=s.extensions[Ge.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),s.associations.set(a,l)}}return r!==void 0&&(a.encoding=r),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let i=e.material;const r=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+i.uuid;let l=this.cache.get(o);l||(l=new ng,Cn.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(o,l)),i=l}else if(e.isLine){const o="LineBasicMaterial:"+i.uuid;let l=this.cache.get(o);l||(l=new tg,Cn.prototype.copy.call(l,i),l.color.copy(i.color),this.cache.add(o,l)),i=l}if(r||s||a){let o="ClonedMaterial:"+i.uuid+":";i.isGLTFSpecularGlossinessMaterial&&(o+="specular-glossiness:"),r&&(o+="derivative-tangents:"),s&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=i.clone(),s&&(l.vertexColors=!0),a&&(l.flatShading=!0),r&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(i))),i=l}i.aoMap&&t.attributes.uv2===void 0&&t.attributes.uv!==void 0&&t.setAttribute("uv2",t.attributes.uv),e.material=i}getMaterialType(){return Jo}loadMaterial(e){const t=this,i=this.json,r=this.extensions,s=i.materials[e];let a;const o={},l=s.extensions||{},c=[];if(l[Ge.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS]){const f=r[Ge.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS];a=f.getMaterialType(),c.push(f.extendParams(o,s,t))}else if(l[Ge.KHR_MATERIALS_UNLIT]){const f=r[Ge.KHR_MATERIALS_UNLIT];a=f.getMaterialType(),c.push(f.extendParams(o,s,t))}else{const f=s.pbrMetallicRoughness||{};if(o.color=new Fe(1,1,1),o.opacity=1,Array.isArray(f.baseColorFactor)){const h=f.baseColorFactor;o.color.fromArray(h),o.opacity=h[3]}f.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",f.baseColorTexture,Ke)),o.metalness=f.metallicFactor!==void 0?f.metallicFactor:1,o.roughness=f.roughnessFactor!==void 0?f.roughnessFactor:1,f.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",f.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",f.metallicRoughnessTexture))),a=this._invokeOne(function(h){return h.getMaterialType&&h.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(h){return h.extendMaterialParams&&h.extendMaterialParams(e,o)})))}s.doubleSided===!0&&(o.side=Xn);const u=s.alphaMode||Jl.OPAQUE;if(u===Jl.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,u===Jl.MASK&&(o.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&a!==Ji&&(c.push(t.assignTexture(o,"normalMap",s.normalTexture)),o.normalScale=new Oe(1,1),s.normalTexture.scale!==void 0)){const f=s.normalTexture.scale;o.normalScale.set(f,f)}return s.occlusionTexture!==void 0&&a!==Ji&&(c.push(t.assignTexture(o,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&a!==Ji&&(o.emissive=new Fe().fromArray(s.emissiveFactor)),s.emissiveTexture!==void 0&&a!==Ji&&c.push(t.assignTexture(o,"emissiveMap",s.emissiveTexture,Ke)),Promise.all(c).then(function(){let f;return a===Nc?f=r[Ge.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS].createMaterial(o):f=new a(o),s.name&&(f.name=s.name),Wi(f,s),t.associations.set(f,{materials:e}),s.extensions&&Ts(r,f,s),f})}createUniqueName(e){const t=Qe.sanitizeNodeName(e||"");let i=t;for(let r=1;this.nodeNamesUsed[i];++r)i=t+"_"+r;return this.nodeNamesUsed[i]=!0,i}loadGeometries(e){const t=this,i=this.extensions,r=this.primitiveCache;function s(o){return i[Ge.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return Cd(l,o,t)})}const a=[];for(let o=0,l=e.length;o<l;o++){const c=e[o],u=cE(c),f=r[u];if(f)a.push(f.promise);else{let h;c.extensions&&c.extensions[Ge.KHR_DRACO_MESH_COMPRESSION]?h=s(c):h=Cd(new nn,c,t),r[u]={primitive:c,promise:h},a.push(h)}}return Promise.all(a)}loadMesh(e){const t=this,i=this.json,r=this.extensions,s=i.meshes[e],a=s.primitives,o=[];for(let l=0,c=a.length;l<c;l++){const u=a[l].material===void 0?aE(this.cache):this.getDependency("material",a[l].material);o.push(u)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],f=[];for(let m=0,g=u.length;m<g;m++){const p=u[m],d=a[m];let _;const v=c[m];if(d.mode===Hn.TRIANGLES||d.mode===Hn.TRIANGLE_STRIP||d.mode===Hn.TRIANGLE_FAN||d.mode===void 0)_=s.isSkinnedMesh===!0?new Jw(p,v):new pn(p,v),_.isSkinnedMesh===!0&&!_.geometry.attributes.skinWeight.normalized&&_.normalizeSkinWeights(),d.mode===Hn.TRIANGLE_STRIP?_.geometry=Rd(_.geometry,Oy):d.mode===Hn.TRIANGLE_FAN&&(_.geometry=Rd(_.geometry,Nm));else if(d.mode===Hn.LINES)_=new tT(p,v);else if(d.mode===Hn.LINE_STRIP)_=new Ru(p,v);else if(d.mode===Hn.LINE_LOOP)_=new nT(p,v);else if(d.mode===Hn.POINTS)_=new iT(p,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+d.mode);Object.keys(_.geometry.morphAttributes).length>0&&lE(_,s),_.name=t.createUniqueName(s.name||"mesh_"+e),Wi(_,s),d.extensions&&Ts(r,_,d),t.assignFinalMaterial(_),f.push(_)}for(let m=0,g=f.length;m<g;m++)t.associations.set(f[m],{meshes:e,primitives:m});if(f.length===1)return f[0];const h=new Mi;t.associations.set(h,{meshes:e});for(let m=0,g=f.length;m<g;m++)h.add(f[m]);return h})}loadCamera(e){let t;const i=this.json.cameras[e],r=i[i.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new Nt(Qy.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):i.type==="orthographic"&&(t=new ga(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),Wi(t,i),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],i={joints:t.joints};return t.inverseBindMatrices===void 0?Promise.resolve(i):this.getDependency("accessor",t.inverseBindMatrices).then(function(r){return i.inverseBindMatrices=r,i})}loadAnimation(e){const i=this.json.animations[e],r=[],s=[],a=[],o=[],l=[];for(let c=0,u=i.channels.length;c<u;c++){const f=i.channels[c],h=i.samplers[f.sampler],m=f.target,g=m.node,p=i.parameters!==void 0?i.parameters[h.input]:h.input,d=i.parameters!==void 0?i.parameters[h.output]:h.output;r.push(this.getDependency("node",g)),s.push(this.getDependency("accessor",p)),a.push(this.getDependency("accessor",d)),o.push(h),l.push(m)}return Promise.all([Promise.all(r),Promise.all(s),Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){const u=c[0],f=c[1],h=c[2],m=c[3],g=c[4],p=[];for(let _=0,v=u.length;_<v;_++){const S=u[_],x=f[_],w=h[_],R=m[_],D=g[_];if(S===void 0)continue;S.updateMatrix();let b;switch(gi[D.path]){case gi.weights:b=ra;break;case gi.rotation:b=cr;break;case gi.position:case gi.scale:default:b=sa;break}const A=S.name?S.name:S.uuid,F=R.interpolation!==void 0?sE[R.interpolation]:ns,ee=[];gi[D.path]===gi.weights?S.traverse(function(H){H.morphTargetInfluences&&ee.push(H.name?H.name:H.uuid)}):ee.push(A);let X=w.array;if(w.normalized){const H=Fc(X.constructor),U=new Float32Array(X.length);for(let Y=0,Z=X.length;Y<Z;Y++)U[Y]=X[Y]*H;X=U}for(let H=0,U=ee.length;H<U;H++){const Y=new b(ee[H]+"."+gi[D.path],x.array,X,F);R.interpolation==="CUBICSPLINE"&&(Y.createInterpolant=function(ie){const q=this instanceof cr?rE:fg;return new q(this.times,this.values,this.getValueSize()/3,ie)},Y.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0),p.push(Y)}}const d=i.name?i.name:"animation_"+e;return new cT(d,void 0,p)})}createNodeMesh(e){const t=this.json,i=this,r=t.nodes[e];return r.mesh===void 0?null:i.getDependency("mesh",r.mesh).then(function(s){const a=i._getNodeRef(i.meshCache,r.mesh,s);return r.weights!==void 0&&a.traverse(function(o){if(!!o.isMesh)for(let l=0,c=r.weights.length;l<c;l++)o.morphTargetInfluences[l]=r.weights[l]}),a})}loadNode(e){const t=this.json,i=this.extensions,r=this,s=t.nodes[e],a=s.name?r.createUniqueName(s.name):"";return function(){const o=[],l=r._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),s.camera!==void 0&&o.push(r.getDependency("camera",s.camera).then(function(c){return r._getNodeRef(r.cameraCache,s.camera,c)})),r._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),Promise.all(o)}().then(function(o){let l;if(s.isBone===!0?l=new eg:o.length>1?l=new Mi:o.length===1?l=o[0]:l=new lt,l!==o[0])for(let c=0,u=o.length;c<u;c++)l.add(o[c]);if(s.name&&(l.userData.name=s.name,l.name=a),Wi(l,s),s.extensions&&Ts(i,l,s),s.matrix!==void 0){const c=new je;c.fromArray(s.matrix),l.applyMatrix4(c)}else s.translation!==void 0&&l.position.fromArray(s.translation),s.rotation!==void 0&&l.quaternion.fromArray(s.rotation),s.scale!==void 0&&l.scale.fromArray(s.scale);return r.associations.has(l)||r.associations.set(l,{}),r.associations.get(l).nodes=e,l})}loadScene(e){const t=this.json,i=this.extensions,r=this.json.scenes[e],s=this,a=new Mi;r.name&&(a.name=s.createUniqueName(r.name)),Wi(a,r),r.extensions&&Ts(i,a,r);const o=r.nodes||[],l=[];for(let c=0,u=o.length;c<u;c++)l.push(hg(o[c],a,t,s));return Promise.all(l).then(function(){const c=u=>{const f=new Map;for(const[h,m]of s.associations)(h instanceof Cn||h instanceof Ot)&&f.set(h,m);return u.traverse(h=>{const m=s.associations.get(h);m!=null&&f.set(h,m)}),f};return s.associations=c(a),a})}}function hg(n,e,t,i){const r=t.nodes[n];return i.getDependency("node",n).then(function(s){if(r.skin===void 0)return s;let a;return i.getDependency("skin",r.skin).then(function(o){a=o;const l=[];for(let c=0,u=a.joints.length;c<u;c++)l.push(i.getDependency("node",a.joints[c]));return Promise.all(l)}).then(function(o){return s.traverse(function(l){if(!l.isMesh)return;const c=[],u=[];for(let f=0,h=o.length;f<h;f++){const m=o[f];if(m){c.push(m);const g=new je;a.inverseBindMatrices!==void 0&&g.fromArray(a.inverseBindMatrices.array,f*16),u.push(g)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',a.joints[f])}l.bind(new Cu(c,u),l.matrixWorld)}),s})}).then(function(s){e.add(s);const a=[];if(r.children){const o=r.children;for(let l=0,c=o.length;l<c;l++){const u=o[l];a.push(hg(u,s,t,i))}}return Promise.all(a)})}function hE(n,e,t){const i=e.attributes,r=new fs;if(i.POSITION!==void 0){const o=t.json.accessors[i.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(r.set(new I(l[0],l[1],l[2]),new I(c[0],c[1],c[2])),o.normalized){const u=Fc(aa[o.componentType]);r.min.multiplyScalar(u),r.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const o=new I,l=new I;for(let c=0,u=s.length;c<u;c++){const f=s[c];if(f.POSITION!==void 0){const h=t.json.accessors[f.POSITION],m=h.min,g=h.max;if(m!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(m[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(m[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(m[2]),Math.abs(g[2]))),h.normalized){const p=Fc(aa[h.componentType]);l.multiplyScalar(p)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(o)}n.boundingBox=r;const a=new hs;r.getCenter(a.center),a.radius=r.min.distanceTo(r.max)/2,n.boundingSphere=a}function Cd(n,e,t){const i=e.attributes,r=[];function s(a,o){return t.getDependency("accessor",a).then(function(l){n.setAttribute(o,l)})}for(const a in i){const o=Oc[a]||a.toLowerCase();o in n.attributes||r.push(s(i[a],o))}if(e.indices!==void 0&&!n.index){const a=t.getDependency("accessor",e.indices).then(function(o){n.setIndex(o)});r.push(a)}return Wi(n,e),hE(n,e,t),Promise.all(r).then(function(){return e.targets!==void 0?oE(n,e.targets,t):n})}function Rd(n,e){let t=n.getIndex();if(t===null){const a=[],o=n.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);n.setIndex(a),t=n.getIndex()}else return console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}const i=t.count-2,r=[];if(e===Nm)for(let a=1;a<=i;a++)r.push(t.getX(0)),r.push(t.getX(a)),r.push(t.getX(a+1));else for(let a=0;a<i;a++)a%2===0?(r.push(t.getX(a)),r.push(t.getX(a+1)),r.push(t.getX(a+2))):(r.push(t.getX(a+2)),r.push(t.getX(a+1)),r.push(t.getX(a)));r.length/3!==i&&console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=n.clone();return s.setIndex(r),s}const Ld={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );
			gl_FragColor.a *= opacity;


		}`};class el{constructor(){this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}}const dE=new ga(-1,1,1,-1,0,1),Du=new nn;Du.setAttribute("position",new Gt([-1,3,0,-1,-1,0,3,-1,0],3));Du.setAttribute("uv",new Gt([0,2,0,0,2,0],2));class pE{constructor(e){this._mesh=new pn(Du,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,dE)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Pd extends el{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Zn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Wm.clone(e.uniforms),this.material=new Zn({defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new pE(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}}class Id extends el{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const r=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,a,4294967295),s.buffers.stencil.setClear(o),s.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}}class mE extends el{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class gE{constructor(e,t){if(this.renderer=e,t===void 0){const i=e.getSize(new Oe);this._pixelRatio=e.getPixelRatio(),this._width=i.width,this._height=i.height,t=new Ri(this._width*this._pixelRatio,this._height*this._pixelRatio),t.texture.name="EffectComposer.rt1"}else this._pixelRatio=1,this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],Ld===void 0&&console.error("THREE.EffectComposer relies on CopyShader"),Pd===void 0&&console.error("THREE.EffectComposer relies on ShaderPass"),this.copyPass=new Pd(Ld),this.clock=new wT}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let r=0,s=this.passes.length;r<s;r++){const a=this.passes[r];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),a.needsSwap){if(i){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Id!==void 0&&(a instanceof Id?i=!0:a instanceof mE&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Oe);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(i,r),this.renderTarget2.setSize(i,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(i,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}}new ga(-1,1,1,-1,0,1);const dg=new nn;dg.setAttribute("position",new Gt([-1,3,0,-1,-1,0,3,-1,0],3));dg.setAttribute("uv",new Gt([0,2,0,0,2,0],2));class _E extends el{constructor(e,t,i,r,s){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=r,this.clearAlpha=s!==void 0?s:0,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Fe}render(e,t,i){const r=e.autoClear;e.autoClear=!1;let s,a;this.overrideMaterial!==void 0&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor&&(e.getClearColor(this._oldClearColor),s=e.getClearAlpha(),e.setClearColor(this.clearColor,this.clearAlpha)),this.clearDepth&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor&&e.setClearColor(this._oldClearColor,s),this.overrideMaterial!==void 0&&(this.scene.overrideMaterial=a),e.autoClear=r}}const Dd={type:"change"},Ql={type:"start"},Nd={type:"end"};class vE extends hr{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new I,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:vr.ROTATE,MIDDLE:vr.DOLLY,RIGHT:vr.PAN},this.touches={ONE:xr.ROTATE,TWO:xr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(C){C.addEventListener("keydown",de),this._domElementKeyEvents=C},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(Dd),i.update(),s=r.NONE},this.update=function(){const C=new I,O=new Ln().setFromUnitVectors(e.up,new I(0,1,0)),_e=O.clone().invert(),Ee=new I,we=new Ln,Le=2*Math.PI;return function(){const Ne=i.object.position;C.copy(Ne).sub(i.target),C.applyQuaternion(O),o.setFromVector3(C),i.autoRotate&&s===r.NONE&&A(D()),i.enableDamping?(o.theta+=l.theta*i.dampingFactor,o.phi+=l.phi*i.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let P=i.minAzimuthAngle,Se=i.maxAzimuthAngle;return isFinite(P)&&isFinite(Se)&&(P<-Math.PI?P+=Le:P>Math.PI&&(P-=Le),Se<-Math.PI?Se+=Le:Se>Math.PI&&(Se-=Le),P<=Se?o.theta=Math.max(P,Math.min(Se,o.theta)):o.theta=o.theta>(P+Se)/2?Math.max(P,o.theta):Math.min(Se,o.theta)),o.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,o.phi)),o.makeSafe(),o.radius*=c,o.radius=Math.max(i.minDistance,Math.min(i.maxDistance,o.radius)),i.enableDamping===!0?i.target.addScaledVector(u,i.dampingFactor):i.target.add(u),C.setFromSpherical(o),C.applyQuaternion(_e),Ne.copy(i.target).add(C),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,u.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),c=1,f||Ee.distanceToSquared(i.object.position)>a||8*(1-we.dot(i.object.quaternion))>a?(i.dispatchEvent(Dd),Ee.copy(i.object.position),we.copy(i.object.quaternion),f=!1,!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",N),i.domElement.removeEventListener("pointerdown",L),i.domElement.removeEventListener("pointercancel",te),i.domElement.removeEventListener("wheel",fe),i.domElement.removeEventListener("pointermove",V),i.domElement.removeEventListener("pointerup",J),i._domElementKeyEvents!==null&&i._domElementKeyEvents.removeEventListener("keydown",de)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const a=1e-6,o=new Md,l=new Md;let c=1;const u=new I;let f=!1;const h=new Oe,m=new Oe,g=new Oe,p=new Oe,d=new Oe,_=new Oe,v=new Oe,S=new Oe,x=new Oe,w=[],R={};function D(){return 2*Math.PI/60/60*i.autoRotateSpeed}function b(){return Math.pow(.95,i.zoomSpeed)}function A(C){l.theta-=C}function F(C){l.phi-=C}const ee=function(){const C=new I;return function(_e,Ee){C.setFromMatrixColumn(Ee,0),C.multiplyScalar(-_e),u.add(C)}}(),X=function(){const C=new I;return function(_e,Ee){i.screenSpacePanning===!0?C.setFromMatrixColumn(Ee,1):(C.setFromMatrixColumn(Ee,0),C.crossVectors(i.object.up,C)),C.multiplyScalar(_e),u.add(C)}}(),H=function(){const C=new I;return function(_e,Ee){const we=i.domElement;if(i.object.isPerspectiveCamera){const Le=i.object.position;C.copy(Le).sub(i.target);let Ie=C.length();Ie*=Math.tan(i.object.fov/2*Math.PI/180),ee(2*_e*Ie/we.clientHeight,i.object.matrix),X(2*Ee*Ie/we.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(ee(_e*(i.object.right-i.object.left)/i.object.zoom/we.clientWidth,i.object.matrix),X(Ee*(i.object.top-i.object.bottom)/i.object.zoom/we.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function U(C){i.object.isPerspectiveCamera?c/=C:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom*C)),i.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function Y(C){i.object.isPerspectiveCamera?c*=C:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/C)),i.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function Z(C){h.set(C.clientX,C.clientY)}function ie(C){v.set(C.clientX,C.clientY)}function q(C){p.set(C.clientX,C.clientY)}function z(C){m.set(C.clientX,C.clientY),g.subVectors(m,h).multiplyScalar(i.rotateSpeed);const O=i.domElement;A(2*Math.PI*g.x/O.clientHeight),F(2*Math.PI*g.y/O.clientHeight),h.copy(m),i.update()}function W(C){S.set(C.clientX,C.clientY),x.subVectors(S,v),x.y>0?U(b()):x.y<0&&Y(b()),v.copy(S),i.update()}function me(C){d.set(C.clientX,C.clientY),_.subVectors(d,p).multiplyScalar(i.panSpeed),H(_.x,_.y),p.copy(d),i.update()}function ae(C){C.deltaY<0?Y(b()):C.deltaY>0&&U(b()),i.update()}function pe(C){let O=!1;switch(C.code){case i.keys.UP:H(0,i.keyPanSpeed),O=!0;break;case i.keys.BOTTOM:H(0,-i.keyPanSpeed),O=!0;break;case i.keys.LEFT:H(i.keyPanSpeed,0),O=!0;break;case i.keys.RIGHT:H(-i.keyPanSpeed,0),O=!0;break}O&&(C.preventDefault(),i.update())}function Ae(){if(w.length===1)h.set(w[0].pageX,w[0].pageY);else{const C=.5*(w[0].pageX+w[1].pageX),O=.5*(w[0].pageY+w[1].pageY);h.set(C,O)}}function G(){if(w.length===1)p.set(w[0].pageX,w[0].pageY);else{const C=.5*(w[0].pageX+w[1].pageX),O=.5*(w[0].pageY+w[1].pageY);p.set(C,O)}}function k(){const C=w[0].pageX-w[1].pageX,O=w[0].pageY-w[1].pageY,_e=Math.sqrt(C*C+O*O);v.set(0,_e)}function se(){i.enableZoom&&k(),i.enablePan&&G()}function le(){i.enableZoom&&k(),i.enableRotate&&Ae()}function be(C){if(w.length==1)m.set(C.pageX,C.pageY);else{const _e=Me(C),Ee=.5*(C.pageX+_e.x),we=.5*(C.pageY+_e.y);m.set(Ee,we)}g.subVectors(m,h).multiplyScalar(i.rotateSpeed);const O=i.domElement;A(2*Math.PI*g.x/O.clientHeight),F(2*Math.PI*g.y/O.clientHeight),h.copy(m)}function he(C){if(w.length===1)d.set(C.pageX,C.pageY);else{const O=Me(C),_e=.5*(C.pageX+O.x),Ee=.5*(C.pageY+O.y);d.set(_e,Ee)}_.subVectors(d,p).multiplyScalar(i.panSpeed),H(_.x,_.y),p.copy(d)}function Te(C){const O=Me(C),_e=C.pageX-O.x,Ee=C.pageY-O.y,we=Math.sqrt(_e*_e+Ee*Ee);S.set(0,we),x.set(0,Math.pow(S.y/v.y,i.zoomSpeed)),U(x.y),v.copy(S)}function ge(C){i.enableZoom&&Te(C),i.enablePan&&he(C)}function T(C){i.enableZoom&&Te(C),i.enableRotate&&be(C)}function L(C){i.enabled!==!1&&(w.length===0&&(i.domElement.setPointerCapture(C.pointerId),i.domElement.addEventListener("pointermove",V),i.domElement.addEventListener("pointerup",J)),$(C),C.pointerType==="touch"?M(C):ce(C))}function V(C){i.enabled!==!1&&(C.pointerType==="touch"?y(C):ue(C))}function J(C){K(C),w.length===0&&(i.domElement.releasePointerCapture(C.pointerId),i.domElement.removeEventListener("pointermove",V),i.domElement.removeEventListener("pointerup",J)),i.dispatchEvent(Nd),s=r.NONE}function te(C){K(C)}function ce(C){let O;switch(C.button){case 0:O=i.mouseButtons.LEFT;break;case 1:O=i.mouseButtons.MIDDLE;break;case 2:O=i.mouseButtons.RIGHT;break;default:O=-1}switch(O){case vr.DOLLY:if(i.enableZoom===!1)return;ie(C),s=r.DOLLY;break;case vr.ROTATE:if(C.ctrlKey||C.metaKey||C.shiftKey){if(i.enablePan===!1)return;q(C),s=r.PAN}else{if(i.enableRotate===!1)return;Z(C),s=r.ROTATE}break;case vr.PAN:if(C.ctrlKey||C.metaKey||C.shiftKey){if(i.enableRotate===!1)return;Z(C),s=r.ROTATE}else{if(i.enablePan===!1)return;q(C),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Ql)}function ue(C){switch(s){case r.ROTATE:if(i.enableRotate===!1)return;z(C);break;case r.DOLLY:if(i.enableZoom===!1)return;W(C);break;case r.PAN:if(i.enablePan===!1)return;me(C);break}}function fe(C){i.enabled===!1||i.enableZoom===!1||s!==r.NONE||(C.preventDefault(),i.dispatchEvent(Ql),ae(C),i.dispatchEvent(Nd))}function de(C){i.enabled===!1||i.enablePan===!1||pe(C)}function M(C){switch(oe(C),w.length){case 1:switch(i.touches.ONE){case xr.ROTATE:if(i.enableRotate===!1)return;Ae(),s=r.TOUCH_ROTATE;break;case xr.PAN:if(i.enablePan===!1)return;G(),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(i.touches.TWO){case xr.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;se(),s=r.TOUCH_DOLLY_PAN;break;case xr.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;le(),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Ql)}function y(C){switch(oe(C),s){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;be(C),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;he(C),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;ge(C),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;T(C),i.update();break;default:s=r.NONE}}function N(C){i.enabled!==!1&&C.preventDefault()}function $(C){w.push(C)}function K(C){delete R[C.pointerId];for(let O=0;O<w.length;O++)if(w[O].pointerId==C.pointerId){w.splice(O,1);return}}function oe(C){let O=R[C.pointerId];O===void 0&&(O=new Oe,R[C.pointerId]=O),O.set(C.pageX,C.pageY)}function Me(C){const O=C.pointerId===w[0].pointerId?w[1]:w[0];return R[O.pointerId]}i.domElement.addEventListener("contextmenu",N),i.domElement.addEventListener("pointerdown",L),i.domElement.addEventListener("pointercancel",te),i.domElement.addEventListener("wheel",fe,{passive:!1}),this.update()}}var xE=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},pg={exports:{}};(function(n,e){(function(t,i){n.exports=i()})(xE,function(){var t=function(){function i(m){return a.appendChild(m.dom),m}function r(m){for(var g=0;g<a.children.length;g++)a.children[g].style.display=g===m?"block":"none";s=m}var s=0,a=document.createElement("div");a.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",a.addEventListener("click",function(m){m.preventDefault(),r(++s%a.children.length)},!1);var o=(performance||Date).now(),l=o,c=0,u=i(new t.Panel("FPS","#0ff","#002")),f=i(new t.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var h=i(new t.Panel("MB","#f08","#201"));return r(0),{REVISION:16,dom:a,addPanel:i,showPanel:r,begin:function(){o=(performance||Date).now()},end:function(){c++;var m=(performance||Date).now();if(f.update(m-o,200),m>l+1e3&&(u.update(1e3*c/(m-l),100),l=m,c=0,h)){var g=performance.memory;h.update(g.usedJSHeapSize/1048576,g.jsHeapSizeLimit/1048576)}return m},update:function(){o=this.end()},domElement:a,setMode:r}};return t.Panel=function(i,r,s){var a=1/0,o=0,l=Math.round,c=l(window.devicePixelRatio||1),u=80*c,f=48*c,h=3*c,m=2*c,g=3*c,p=15*c,d=74*c,_=30*c,v=document.createElement("canvas");v.width=u,v.height=f,v.style.cssText="width:80px;height:48px";var S=v.getContext("2d");return S.font="bold "+9*c+"px Helvetica,Arial,sans-serif",S.textBaseline="top",S.fillStyle=s,S.fillRect(0,0,u,f),S.fillStyle=r,S.fillText(i,h,m),S.fillRect(g,p,d,_),S.fillStyle=s,S.globalAlpha=.9,S.fillRect(g,p,d,_),{dom:v,update:function(x,w){a=Math.min(a,x),o=Math.max(o,x),S.fillStyle=s,S.globalAlpha=1,S.fillRect(0,0,u,p),S.fillStyle=r,S.fillText(l(x)+" "+i+" ("+l(a)+"-"+l(o)+")",h,m),S.drawImage(v,g+c,p,d-c,_,g,p,d-c,_),S.fillRect(g+d-c,p,c,_),S.fillStyle=s,S.globalAlpha=.9,S.fillRect(g+d-c,p,c,l((1-x/w)*_))}}},t})})(pg);const yE=pg.exports,Od=new I,bE=new Ln,Fd=new I;class kd extends lt{constructor(e=document.createElement("div")){super(),this.isCSS3DObject=!0,this.element=e,this.element.style.position="absolute",this.element.style.pointerEvents="auto",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.addEventListener("removed",function(){this.traverse(function(t){t.element instanceof Element&&t.element.parentNode!==null&&t.element.parentNode.removeChild(t.element)})})}copy(e,t){return super.copy(e,t),this.element=e.element.cloneNode(!0),this}}const bn=new je,ME=new je;class SE{constructor(e={}){const t=this;let i,r,s,a;const o={camera:{fov:0,style:""},objects:new WeakMap},l=e.element!==void 0?e.element:document.createElement("div");l.style.overflow="hidden",this.domElement=l;const c=document.createElement("div");c.style.transformStyle="preserve-3d",c.style.pointerEvents="none",l.appendChild(c),this.getSize=function(){return{width:i,height:r}},this.render=function(g,p){const d=p.projectionMatrix.elements[5]*a;o.camera.fov!==d&&(l.style.perspective=p.isPerspectiveCamera?d+"px":"",o.camera.fov=d),g.matrixWorldAutoUpdate===!0&&g.updateMatrixWorld(),p.parent===null&&p.matrixWorldAutoUpdate===!0&&p.updateMatrixWorld();let _,v;p.isOrthographicCamera&&(_=-(p.right+p.left)/2,v=(p.top+p.bottom)/2);const x=(p.isOrthographicCamera?"scale("+d+")translate("+u(_)+"px,"+u(v)+"px)"+f(p.matrixWorldInverse):"translateZ("+d+"px)"+f(p.matrixWorldInverse))+"translate("+s+"px,"+a+"px)";o.camera.style!==x&&(c.style.transform=x,o.camera.style=x),m(g,g,p)},this.setSize=function(g,p){i=g,r=p,s=i/2,a=r/2,l.style.width=g+"px",l.style.height=p+"px",c.style.width=g+"px",c.style.height=p+"px"};function u(g){return Math.abs(g)<1e-10?0:g}function f(g){const p=g.elements;return"matrix3d("+u(p[0])+","+u(-p[1])+","+u(p[2])+","+u(p[3])+","+u(p[4])+","+u(-p[5])+","+u(p[6])+","+u(p[7])+","+u(p[8])+","+u(-p[9])+","+u(p[10])+","+u(p[11])+","+u(p[12])+","+u(-p[13])+","+u(p[14])+","+u(p[15])+")"}function h(g){const p=g.elements,d="matrix3d("+u(p[0])+","+u(p[1])+","+u(p[2])+","+u(p[3])+","+u(-p[4])+","+u(-p[5])+","+u(-p[6])+","+u(-p[7])+","+u(p[8])+","+u(p[9])+","+u(p[10])+","+u(p[11])+","+u(p[12])+","+u(p[13])+","+u(p[14])+","+u(p[15])+")";return"translate(-50%,-50%)"+d}function m(g,p,d,_){if(g.isCSS3DObject){const v=g.visible===!0&&g.layers.test(d.layers)===!0;if(g.element.style.display=v===!0?"":"none",v===!0){g.onBeforeRender(t,p,d);let S;g.isCSS3DSprite?(bn.copy(d.matrixWorldInverse),bn.transpose(),g.rotation2D!==0&&bn.multiply(ME.makeRotationZ(g.rotation2D)),g.matrixWorld.decompose(Od,bE,Fd),bn.setPosition(Od),bn.scale(Fd),bn.elements[3]=0,bn.elements[7]=0,bn.elements[11]=0,bn.elements[15]=1,S=h(bn)):S=h(g.matrixWorld);const x=g.element,w=o.objects.get(g);if(w===void 0||w.style!==S){x.style.transform=S;const R={style:S};o.objects.set(g,R)}x.parentNode!==c&&c.appendChild(x),g.onAfterRender(t,p,d)}}for(let v=0,S=g.children.length;v<S;v++)m(g.children[v],p,d)}}}var ec=new yE;const Ja=new Qm,Ud=new Qm,Ps=new SE,ji=new Jm({antialias:!0}),Kt=new Nt(45.6,window.innerWidth/window.innerHeight,.1,50),wE=new MT(16777215,4),Qa=new gE(ji),Is=new ag,Mn=new kT(Is),tc=[],ln=new vE(Kt,Ps.domElement),TE={name:"CanvasComponent",data(){return{setTableView:!0}},methods:{async init(){Ja.background=new Fe(0),this.setCameraToTableView(),Ps.setSize(window.innerWidth,window.innerHeight),ji.setSize(window.innerWidth,window.innerHeight),ji.setPixelRatio(window.devicePixelRatio),ji.outputEncoding=Ke,ji.physicallyCorrectLights=!0,Ja.add(wE),Qa.setPixelRatio(window.devicePixelRatio),Qa.setSize(window.innerWidth,window.innerHeight),Qa.addPass(new _E(Ja,Kt)),ln.enablePan=!1,ln.enableZoom=!1,ln.enableDamping=!0,ln.dampingFactor=.05,ln.rotateSpeed=.2212,ln.maxPolarAngle=Math.PI/1.75,ln.minPolarAngle=Math.PI/2.5,ln.maxAzimuthAngle=Math.PI/3,ln.minAzimuthAngle=-Math.PI/7,Is.onStart=this.onLoadingStart,Is.onProgress=this.onLoadingProgress,Is.onLoad=this.onLoadingEnd,Is.onError=this.onLoadingError,Mn.setPath("src/assets/models/"),(await Promise.all([Mn.loadAsync("room.glb"),Mn.loadAsync("table.glb"),Mn.loadAsync("headphone.glb"),Mn.loadAsync("led.glb"),Mn.loadAsync("mousepad.glb"),Mn.loadAsync("mousepadLogo.glb"),Mn.loadAsync("monitor.glb"),Mn.loadAsync("monitorStand.glb"),Mn.loadAsync("keyboard.glb")])).forEach(c=>{const u=c.scene.getObjectByName("Scene");tc.push(...u.children),Ja.add(u)});const e=new Mi,t=this.$refs.iframeContainer,i=tc.filter(c=>c.name==="Monitor")[0],r=i.position.clone(),s=i.rotation.clone(),a=new kd(t);a.scale.set(.001,.001,.001),a.position.copy(r),a.rotation.copy(s),a.rotation.x=0;const o=this.$refs.instructionsContainer,l=new kd(o);l.scale.set(.0025,.0025,.0025),l.position.copy(r),l.rotation.copy(s),l.rotation.x=0,l.position.x+=1.72,l.position.y-=.25,e.add(a,l),Ud.add(e),this.$refs.cssCanvas.appendChild(Ps.domElement),this.$refs.webglCanvas.appendChild(ji.domElement),this.$refs.webglCanvas.appendChild(ec.dom),window.addEventListener("resize",()=>this.onResize(),!1),window.addEventListener("keydown",c=>this.onKeyDown(c),!1)},onLoadingStart(n,e,t){},onLoadingProgress(n,e,t){const i=this.$refs.progressBar;i.value=e/t*100,console.log(`Started loading ${n}`)},onLoadingEnd(){const n=this.$refs.progressBarContainer,e=this.$refs.progressBar;n.classList.add("finished"),e.classList.add("finished"),console.log("Finished loading assets")},onLoadingError(n){console.error(`Error loading ${n}`)},calculateTarget(n,e=.01){return new I().addVectors(n.getWorldPosition(new I),n.getWorldDirection(new I).multiplyScalar(e))},transitionBetweenViews(n,e,t=500,i){const r=new OT({x:n.x,y:n.y,z:n.z,rX:n.rX,rY:n.rY,rZ:n.rZ}).to({x:e.x,y:e.y,z:e.z,rX:e.rX,rY:e.rY,rZ:e.rZ},t).easing(Hs.Sinusoidal.InOut);r.onUpdate(function(s){i.position.set(s.x,s.y,s.z),i.rotation.set(s.rX,s.rY,s.rZ)}),r.start()},toggleCameraView(){this.setTableView=!this.setTableView,this.setTableView?this.setCameraToTableView():this.setCameraToMonitorView()},setCameraToMonitorView(){const e=tc.filter(a=>a.name==="Monitor")[0].position.clone();e.z+=1.8;const t=Kt.position.clone(),i=Kt.rotation.clone(),r={x:t.x,y:t.y,z:t.z,rX:i.x,rY:i.y,rZ:i.z},s={x:e.x,y:e.y,z:e.z,rX:0,rY:0,rZ:0};this.transitionBetweenViews(r,s,750,Kt)},setCameraToTableView(){const n={x:-1.2672,y:.266311,z:5.58409},e={x:0,y:.455882,z:0},t=Kt.position.clone(),i=Kt.rotation.clone(),r={x:t.x,y:t.y,z:t.z,rX:i.x,rY:i.y,rZ:i.z},s={x:n.x,y:n.y,z:n.z,rX:e.x,rY:e.y,rZ:e.z};this.transitionBetweenViews(r,s,750,Kt)},animate(){requestAnimationFrame(this.animate),ec.begin();const n=this.calculateTarget(Kt);ln.target.set(n.x,n.y,n.z),ln.update(),FT(),Qa.render(),Ps.render(Ud,Kt),ec.end()},onResize(){Kt.aspect=window.innerWidth/window.innerHeight,Kt.updateProjectionMatrix(),ji.setSize(window.innerWidth,window.innerHeight),Ps.setSize(window.innerWidth,window.innerHeight)},onKeyDown(n){n.key===" "&&this.toggleCameraView()}},mounted(){this.init(),this.animate()}},EE=n=>(Bo("data-v-240ff24d"),n=n(),Ho(),n),AE={class:"webglCanvas",ref:"webglCanvas"},CE={class:"cssCanvas",ref:"cssCanvas"},RE={class:"iframe-container",ref:"iframeContainer"},LE={class:"iframe",ref:"iframe",src:"https://www.youtube.com/"},PE={class:"instructions-container",ref:"instructionsContainer"},IE={class:"instructions",ref:"instructions"},DE={class:"instruction"},NE=cs(" - Press to alternate view "),OE=EE(()=>et("div",{class:"instruction"},[et("div",{class:"control"},"MOUSE"),cs(" - Drag to look around ")],-1)),FE={class:"progress-bar-container"},kE={for:"progress-bar",ref:"progressBarContainer"},UE={id:"progress-bar",value:"0",max:"100",ref:"progressBar"};function zE(n,e,t,i,r,s){return Wo(),jo(Zt,null,[et("div",AE,null,512),et("div",CE,[et("div",RE,[et("iframe",LE,null,512)],512),et("div",PE,[et("div",IE,[et("div",DE,[et("div",{class:"control space-control",onClick:e[0]||(e[0]=(...a)=>s.toggleCameraView&&s.toggleCameraView(...a))}," SPACE "),NE]),OE],512)],512)],512),et("div",FE,[et("label",kE," Loading assets... ",512),et("progress",UE,null,512)])],64)}const BE=Yo(TE,[["render",zE],["__scopeId","data-v-240ff24d"]]);const HE={name:"FooterComponent"},VE=n=>(Bo("data-v-e5362aad"),n=n(),Ho(),n),GE=VE(()=>et("div",{class:"wrapper"},"2022, Gustavo Tom\xE1s",-1)),WE=[GE];function jE(n,e,t,i,r,s){return Wo(),jo("footer",null,WE)}const XE=Yo(HE,[["render",jE],["__scopeId","data-v-e5362aad"]]);const qE={name:"App",components:{RouterView:Em,HeaderComponent:Gx,CanvasComponent:BE,FooterComponent:XE}},$E=n=>(Bo("data-v-698de9c8"),n=n(),Ho(),n),YE={class:"main-wrapper"},KE=$E(()=>et("main",{id:"main"},null,-1));function ZE(n,e,t,i,r,s){const a=hc("CanvasComponent");return Wo(),jo("div",YE,[pt(a),KE])}const JE=Yo(qE,[["render",ZE],["__scopeId","data-v-698de9c8"]]),QE="modulepreload",e2=function(n){return"/MyPortfolio/"+n},zd={},nc=function(e,t,i){return!t||t.length===0?e():Promise.all(t.map(r=>{if(r=e2(r),r in zd)return;zd[r]=!0;const s=r.endsWith(".css"),a=s?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${a}`))return;const o=document.createElement("link");if(o.rel=s?"stylesheet":QE,s||(o.as="script",o.crossOrigin=""),o.href=r,document.head.appendChild(o),s)return new Promise((l,c)=>{o.addEventListener("load",l),o.addEventListener("error",()=>c(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>e())},mg=Ax({history:Wv("/MyPortfolio/"),routes:[{path:"/",name:"home",meta:{title:"MyPortfolio"},component:()=>nc(()=>import("./HomeView.443fa715.js"),["assets/HomeView.443fa715.js","assets/HomeView.2e99eb81.css"])},{path:"/projects",name:"projects",meta:{title:"MyProjects"},component:()=>nc(()=>import("./ProjectsView.011aaac9.js"),["assets/ProjectsView.011aaac9.js","assets/GridComponent.225044eb.js","assets/GridComponent.c67de46d.css"])},{path:"/renders",name:"renders",meta:{title:"MyRenders"},component:()=>nc(()=>import("./RendersView.7ecae1ec.js"),["assets/RendersView.7ecae1ec.js","assets/GridComponent.225044eb.js","assets/GridComponent.c67de46d.css"])}]});mg.beforeEach((n,e,t)=>{document.title=`${n.meta.title}`,t()});function Bd(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})),t.push.apply(t,i)}return t}function Ce(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?Bd(Object(t),!0).forEach(function(i){yt(n,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):Bd(Object(t)).forEach(function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(t,i))})}return n}function Ao(n){return Ao=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ao(n)}function t2(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function Hd(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function n2(n,e,t){return e&&Hd(n.prototype,e),t&&Hd(n,t),Object.defineProperty(n,"prototype",{writable:!1}),n}function yt(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function Nu(n,e){return r2(n)||a2(n,e)||gg(n,e)||l2()}function xa(n){return i2(n)||s2(n)||gg(n)||o2()}function i2(n){if(Array.isArray(n))return kc(n)}function r2(n){if(Array.isArray(n))return n}function s2(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function a2(n,e){var t=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var i=[],r=!0,s=!1,a,o;try{for(t=t.call(n);!(r=(a=t.next()).done)&&(i.push(a.value),!(e&&i.length===e));r=!0);}catch(l){s=!0,o=l}finally{try{!r&&t.return!=null&&t.return()}finally{if(s)throw o}}return i}}function gg(n,e){if(!!n){if(typeof n=="string")return kc(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return kc(n,e)}}function kc(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=n[t];return i}function o2(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function l2(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Vd=function(){},Ou={},_g={},vg=null,xg={mark:Vd,measure:Vd};try{typeof window<"u"&&(Ou=window),typeof document<"u"&&(_g=document),typeof MutationObserver<"u"&&(vg=MutationObserver),typeof performance<"u"&&(xg=performance)}catch{}var c2=Ou.navigator||{},Gd=c2.userAgent,Wd=Gd===void 0?"":Gd,Li=Ou,at=_g,jd=vg,eo=xg;Li.document;var ni=!!at.documentElement&&!!at.head&&typeof at.addEventListener=="function"&&typeof at.createElement=="function",yg=~Wd.indexOf("MSIE")||~Wd.indexOf("Trident/"),to,no,io,ro,so,Jn="___FONT_AWESOME___",Uc=16,bg="fa",Mg="svg-inline--fa",ur="data-fa-i2svg",zc="data-fa-pseudo-element",u2="data-fa-pseudo-element-pending",Fu="data-prefix",ku="data-icon",Xd="fontawesome-i2svg",f2="async",h2=["HTML","HEAD","STYLE","SCRIPT"],Sg=function(){try{return!0}catch{return!1}}(),st="classic",ht="sharp",Uu=[st,ht];function ya(n){return new Proxy(n,{get:function(t,i){return i in t?t[i]:t[st]}})}var oa=ya((to={},yt(to,st,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),yt(to,ht,{fa:"solid",fass:"solid","fa-solid":"solid"}),to)),la=ya((no={},yt(no,st,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),yt(no,ht,{solid:"fass"}),no)),ca=ya((io={},yt(io,st,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),yt(io,ht,{fass:"fa-solid"}),io)),d2=ya((ro={},yt(ro,st,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),yt(ro,ht,{"fa-solid":"fass"}),ro)),p2=/fa(s|r|l|t|d|b|k|ss)?[\-\ ]/,wg="fa-layers-text",m2=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,g2=ya((so={},yt(so,st,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),yt(so,ht,{900:"fass"}),so)),Tg=[1,2,3,4,5,6,7,8,9,10],_2=Tg.concat([11,12,13,14,15,16,17,18,19,20]),v2=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Qi={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},ua=new Set;Object.keys(la[st]).map(ua.add.bind(ua));Object.keys(la[ht]).map(ua.add.bind(ua));var x2=[].concat(Uu,xa(ua),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Qi.GROUP,Qi.SWAP_OPACITY,Qi.PRIMARY,Qi.SECONDARY]).concat(Tg.map(function(n){return"".concat(n,"x")})).concat(_2.map(function(n){return"w-".concat(n)})),Vs=Li.FontAwesomeConfig||{};function y2(n){var e=at.querySelector("script["+n+"]");if(e)return e.getAttribute(n)}function b2(n){return n===""?!0:n==="false"?!1:n==="true"?!0:n}if(at&&typeof at.querySelector=="function"){var M2=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];M2.forEach(function(n){var e=Nu(n,2),t=e[0],i=e[1],r=b2(y2(t));r!=null&&(Vs[i]=r)})}var Eg={styleDefault:"solid",familyDefault:"classic",cssPrefix:bg,replacementClass:Mg,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Vs.familyPrefix&&(Vs.cssPrefix=Vs.familyPrefix);var ss=Ce(Ce({},Eg),Vs);ss.autoReplaceSvg||(ss.observeMutations=!1);var Re={};Object.keys(Eg).forEach(function(n){Object.defineProperty(Re,n,{enumerable:!0,set:function(t){ss[n]=t,Gs.forEach(function(i){return i(Re)})},get:function(){return ss[n]}})});Object.defineProperty(Re,"familyPrefix",{enumerable:!0,set:function(e){ss.cssPrefix=e,Gs.forEach(function(t){return t(Re)})},get:function(){return ss.cssPrefix}});Li.FontAwesomeConfig=Re;var Gs=[];function S2(n){return Gs.push(n),function(){Gs.splice(Gs.indexOf(n),1)}}var _i=Uc,An={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function w2(n){if(!(!n||!ni)){var e=at.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=n;for(var t=at.head.childNodes,i=null,r=t.length-1;r>-1;r--){var s=t[r],a=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(a)>-1&&(i=s)}return at.head.insertBefore(e,i),n}}var T2="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function fa(){for(var n=12,e="";n-- >0;)e+=T2[Math.random()*62|0];return e}function gs(n){for(var e=[],t=(n||[]).length>>>0;t--;)e[t]=n[t];return e}function zu(n){return n.classList?gs(n.classList):(n.getAttribute("class")||"").split(" ").filter(function(e){return e})}function Ag(n){return"".concat(n).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function E2(n){return Object.keys(n||{}).reduce(function(e,t){return e+"".concat(t,'="').concat(Ag(n[t]),'" ')},"").trim()}function tl(n){return Object.keys(n||{}).reduce(function(e,t){return e+"".concat(t,": ").concat(n[t].trim(),";")},"")}function Bu(n){return n.size!==An.size||n.x!==An.x||n.y!==An.y||n.rotate!==An.rotate||n.flipX||n.flipY}function A2(n){var e=n.transform,t=n.containerWidth,i=n.iconWidth,r={transform:"translate(".concat(t/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),a="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),o="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(s," ").concat(a," ").concat(o)},c={transform:"translate(".concat(i/2*-1," -256)")};return{outer:r,inner:l,path:c}}function C2(n){var e=n.transform,t=n.width,i=t===void 0?Uc:t,r=n.height,s=r===void 0?Uc:r,a=n.startCentered,o=a===void 0?!1:a,l="";return o&&yg?l+="translate(".concat(e.x/_i-i/2,"em, ").concat(e.y/_i-s/2,"em) "):o?l+="translate(calc(-50% + ".concat(e.x/_i,"em), calc(-50% + ").concat(e.y/_i,"em)) "):l+="translate(".concat(e.x/_i,"em, ").concat(e.y/_i,"em) "),l+="scale(".concat(e.size/_i*(e.flipX?-1:1),", ").concat(e.size/_i*(e.flipY?-1:1),") "),l+="rotate(".concat(e.rotate,"deg) "),l}var R2=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Cg(){var n=bg,e=Mg,t=Re.cssPrefix,i=Re.replacementClass,r=R2;if(t!==n||i!==e){var s=new RegExp("\\.".concat(n,"\\-"),"g"),a=new RegExp("\\--".concat(n,"\\-"),"g"),o=new RegExp("\\.".concat(e),"g");r=r.replace(s,".".concat(t,"-")).replace(a,"--".concat(t,"-")).replace(o,".".concat(i))}return r}var qd=!1;function ic(){Re.autoAddCss&&!qd&&(w2(Cg()),qd=!0)}var L2={mixout:function(){return{dom:{css:Cg,insertCss:ic}}},hooks:function(){return{beforeDOMElementCreation:function(){ic()},beforeI2svg:function(){ic()}}}},Qn=Li||{};Qn[Jn]||(Qn[Jn]={});Qn[Jn].styles||(Qn[Jn].styles={});Qn[Jn].hooks||(Qn[Jn].hooks={});Qn[Jn].shims||(Qn[Jn].shims=[]);var mn=Qn[Jn],Rg=[],P2=function n(){at.removeEventListener("DOMContentLoaded",n),Co=1,Rg.map(function(e){return e()})},Co=!1;ni&&(Co=(at.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(at.readyState),Co||at.addEventListener("DOMContentLoaded",P2));function I2(n){!ni||(Co?setTimeout(n,0):Rg.push(n))}function ba(n){var e=n.tag,t=n.attributes,i=t===void 0?{}:t,r=n.children,s=r===void 0?[]:r;return typeof n=="string"?Ag(n):"<".concat(e," ").concat(E2(i),">").concat(s.map(ba).join(""),"</").concat(e,">")}function $d(n,e,t){if(n&&n[e]&&n[e][t])return{prefix:e,iconName:t,icon:n[e][t]}}var D2=function(e,t){return function(i,r,s,a){return e.call(t,i,r,s,a)}},rc=function(e,t,i,r){var s=Object.keys(e),a=s.length,o=r!==void 0?D2(t,r):t,l,c,u;for(i===void 0?(l=1,u=e[s[0]]):(l=0,u=i);l<a;l++)c=s[l],u=o(u,e[c],c,e);return u};function N2(n){for(var e=[],t=0,i=n.length;t<i;){var r=n.charCodeAt(t++);if(r>=55296&&r<=56319&&t<i){var s=n.charCodeAt(t++);(s&64512)==56320?e.push(((r&1023)<<10)+(s&1023)+65536):(e.push(r),t--)}else e.push(r)}return e}function Bc(n){var e=N2(n);return e.length===1?e[0].toString(16):null}function O2(n,e){var t=n.length,i=n.charCodeAt(e),r;return i>=55296&&i<=56319&&t>e+1&&(r=n.charCodeAt(e+1),r>=56320&&r<=57343)?(i-55296)*1024+r-56320+65536:i}function Yd(n){return Object.keys(n).reduce(function(e,t){var i=n[t],r=!!i.icon;return r?e[i.iconName]=i.icon:e[t]=i,e},{})}function Hc(n,e){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=t.skipHooks,r=i===void 0?!1:i,s=Yd(e);typeof mn.hooks.addPack=="function"&&!r?mn.hooks.addPack(n,Yd(e)):mn.styles[n]=Ce(Ce({},mn.styles[n]||{}),s),n==="fas"&&Hc("fa",e)}var ao,oo,lo,zr=mn.styles,F2=mn.shims,k2=(ao={},yt(ao,st,Object.values(ca[st])),yt(ao,ht,Object.values(ca[ht])),ao),Hu=null,Lg={},Pg={},Ig={},Dg={},Ng={},U2=(oo={},yt(oo,st,Object.keys(oa[st])),yt(oo,ht,Object.keys(oa[ht])),oo);function z2(n){return~x2.indexOf(n)}function B2(n,e){var t=e.split("-"),i=t[0],r=t.slice(1).join("-");return i===n&&r!==""&&!z2(r)?r:null}var Og=function(){var e=function(s){return rc(zr,function(a,o,l){return a[l]=rc(o,s,{}),a},{})};Lg=e(function(r,s,a){if(s[3]&&(r[s[3]]=a),s[2]){var o=s[2].filter(function(l){return typeof l=="number"});o.forEach(function(l){r[l.toString(16)]=a})}return r}),Pg=e(function(r,s,a){if(r[a]=a,s[2]){var o=s[2].filter(function(l){return typeof l=="string"});o.forEach(function(l){r[l]=a})}return r}),Ng=e(function(r,s,a){var o=s[2];return r[a]=a,o.forEach(function(l){r[l]=a}),r});var t="far"in zr||Re.autoFetchSvg,i=rc(F2,function(r,s){var a=s[0],o=s[1],l=s[2];return o==="far"&&!t&&(o="fas"),typeof a=="string"&&(r.names[a]={prefix:o,iconName:l}),typeof a=="number"&&(r.unicodes[a.toString(16)]={prefix:o,iconName:l}),r},{names:{},unicodes:{}});Ig=i.names,Dg=i.unicodes,Hu=nl(Re.styleDefault,{family:Re.familyDefault})};S2(function(n){Hu=nl(n.styleDefault,{family:Re.familyDefault})});Og();function Vu(n,e){return(Lg[n]||{})[e]}function H2(n,e){return(Pg[n]||{})[e]}function er(n,e){return(Ng[n]||{})[e]}function Fg(n){return Ig[n]||{prefix:null,iconName:null}}function V2(n){var e=Dg[n],t=Vu("fas",n);return e||(t?{prefix:"fas",iconName:t}:null)||{prefix:null,iconName:null}}function Pi(){return Hu}var Gu=function(){return{prefix:null,iconName:null,rest:[]}};function nl(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=e.family,i=t===void 0?st:t,r=oa[i][n],s=la[i][n]||la[i][r],a=n in mn.styles?n:null;return s||a||null}var Kd=(lo={},yt(lo,st,Object.keys(ca[st])),yt(lo,ht,Object.keys(ca[ht])),lo);function il(n){var e,t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=t.skipLookups,r=i===void 0?!1:i,s=(e={},yt(e,st,"".concat(Re.cssPrefix,"-").concat(st)),yt(e,ht,"".concat(Re.cssPrefix,"-").concat(ht)),e),a=null,o=st;(n.includes(s[st])||n.some(function(c){return Kd[st].includes(c)}))&&(o=st),(n.includes(s[ht])||n.some(function(c){return Kd[ht].includes(c)}))&&(o=ht);var l=n.reduce(function(c,u){var f=B2(Re.cssPrefix,u);if(zr[u]?(u=k2[o].includes(u)?d2[o][u]:u,a=u,c.prefix=u):U2[o].indexOf(u)>-1?(a=u,c.prefix=nl(u,{family:o})):f?c.iconName=f:u!==Re.replacementClass&&u!==s[st]&&u!==s[ht]&&c.rest.push(u),!r&&c.prefix&&c.iconName){var h=a==="fa"?Fg(c.iconName):{},m=er(c.prefix,c.iconName);h.prefix&&(a=null),c.iconName=h.iconName||m||c.iconName,c.prefix=h.prefix||c.prefix,c.prefix==="far"&&!zr.far&&zr.fas&&!Re.autoFetchSvg&&(c.prefix="fas")}return c},Gu());return(n.includes("fa-brands")||n.includes("fab"))&&(l.prefix="fab"),(n.includes("fa-duotone")||n.includes("fad"))&&(l.prefix="fad"),!l.prefix&&o===ht&&(zr.fass||Re.autoFetchSvg)&&(l.prefix="fass",l.iconName=er(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||a==="fa")&&(l.prefix=Pi()||"fas"),l}var G2=function(){function n(){t2(this,n),this.definitions={}}return n2(n,[{key:"add",value:function(){for(var t=this,i=arguments.length,r=new Array(i),s=0;s<i;s++)r[s]=arguments[s];var a=r.reduce(this._pullDefinitions,{});Object.keys(a).forEach(function(o){t.definitions[o]=Ce(Ce({},t.definitions[o]||{}),a[o]),Hc(o,a[o]);var l=ca[st][o];l&&Hc(l,a[o]),Og()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(t,i){var r=i.prefix&&i.iconName&&i.icon?{0:i}:i;return Object.keys(r).map(function(s){var a=r[s],o=a.prefix,l=a.iconName,c=a.icon,u=c[2];t[o]||(t[o]={}),u.length>0&&u.forEach(function(f){typeof f=="string"&&(t[o][f]=c)}),t[o][l]=c}),t}}]),n}(),Zd=[],Br={},qr={},W2=Object.keys(qr);function j2(n,e){var t=e.mixoutsTo;return Zd=n,Br={},Object.keys(qr).forEach(function(i){W2.indexOf(i)===-1&&delete qr[i]}),Zd.forEach(function(i){var r=i.mixout?i.mixout():{};if(Object.keys(r).forEach(function(a){typeof r[a]=="function"&&(t[a]=r[a]),Ao(r[a])==="object"&&Object.keys(r[a]).forEach(function(o){t[a]||(t[a]={}),t[a][o]=r[a][o]})}),i.hooks){var s=i.hooks();Object.keys(s).forEach(function(a){Br[a]||(Br[a]=[]),Br[a].push(s[a])})}i.provides&&i.provides(qr)}),t}function Vc(n,e){for(var t=arguments.length,i=new Array(t>2?t-2:0),r=2;r<t;r++)i[r-2]=arguments[r];var s=Br[n]||[];return s.forEach(function(a){e=a.apply(null,[e].concat(i))}),e}function fr(n){for(var e=arguments.length,t=new Array(e>1?e-1:0),i=1;i<e;i++)t[i-1]=arguments[i];var r=Br[n]||[];r.forEach(function(s){s.apply(null,t)})}function ei(){var n=arguments[0],e=Array.prototype.slice.call(arguments,1);return qr[n]?qr[n].apply(null,e):void 0}function Gc(n){n.prefix==="fa"&&(n.prefix="fas");var e=n.iconName,t=n.prefix||Pi();if(!!e)return e=er(t,e)||e,$d(kg.definitions,t,e)||$d(mn.styles,t,e)}var kg=new G2,X2=function(){Re.autoReplaceSvg=!1,Re.observeMutations=!1,fr("noAuto")},q2={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return ni?(fr("beforeI2svg",e),ei("pseudoElements2svg",e),ei("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=e.autoReplaceSvgRoot;Re.autoReplaceSvg===!1&&(Re.autoReplaceSvg=!0),Re.observeMutations=!0,I2(function(){Y2({autoReplaceSvgRoot:t}),fr("watch",e)})}},$2={icon:function(e){if(e===null)return null;if(Ao(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:er(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var t=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],i=nl(e[0]);return{prefix:i,iconName:er(i,t)||t}}if(typeof e=="string"&&(e.indexOf("".concat(Re.cssPrefix,"-"))>-1||e.match(p2))){var r=il(e.split(" "),{skipLookups:!0});return{prefix:r.prefix||Pi(),iconName:er(r.prefix,r.iconName)||r.iconName}}if(typeof e=="string"){var s=Pi();return{prefix:s,iconName:er(s,e)||e}}}},jt={noAuto:X2,config:Re,dom:q2,parse:$2,library:kg,findIconDefinition:Gc,toHtml:ba},Y2=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=e.autoReplaceSvgRoot,i=t===void 0?at:t;(Object.keys(mn.styles).length>0||Re.autoFetchSvg)&&ni&&Re.autoReplaceSvg&&jt.dom.i2svg({node:i})};function rl(n,e){return Object.defineProperty(n,"abstract",{get:e}),Object.defineProperty(n,"html",{get:function(){return n.abstract.map(function(i){return ba(i)})}}),Object.defineProperty(n,"node",{get:function(){if(!!ni){var i=at.createElement("div");return i.innerHTML=n.html,i.children}}}),n}function K2(n){var e=n.children,t=n.main,i=n.mask,r=n.attributes,s=n.styles,a=n.transform;if(Bu(a)&&t.found&&!i.found){var o=t.width,l=t.height,c={x:o/l/2,y:.5};r.style=tl(Ce(Ce({},s),{},{"transform-origin":"".concat(c.x+a.x/16,"em ").concat(c.y+a.y/16,"em")}))}return[{tag:"svg",attributes:r,children:e}]}function Z2(n){var e=n.prefix,t=n.iconName,i=n.children,r=n.attributes,s=n.symbol,a=s===!0?"".concat(e,"-").concat(Re.cssPrefix,"-").concat(t):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:Ce(Ce({},r),{},{id:a}),children:i}]}]}function Wu(n){var e=n.icons,t=e.main,i=e.mask,r=n.prefix,s=n.iconName,a=n.transform,o=n.symbol,l=n.title,c=n.maskId,u=n.titleId,f=n.extra,h=n.watchable,m=h===void 0?!1:h,g=i.found?i:t,p=g.width,d=g.height,_=r==="fak",v=[Re.replacementClass,s?"".concat(Re.cssPrefix,"-").concat(s):""].filter(function(A){return f.classes.indexOf(A)===-1}).filter(function(A){return A!==""||!!A}).concat(f.classes).join(" "),S={children:[],attributes:Ce(Ce({},f.attributes),{},{"data-prefix":r,"data-icon":s,class:v,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(p," ").concat(d)})},x=_&&!~f.classes.indexOf("fa-fw")?{width:"".concat(p/d*16*.0625,"em")}:{};m&&(S.attributes[ur]=""),l&&(S.children.push({tag:"title",attributes:{id:S.attributes["aria-labelledby"]||"title-".concat(u||fa())},children:[l]}),delete S.attributes.title);var w=Ce(Ce({},S),{},{prefix:r,iconName:s,main:t,mask:i,maskId:c,transform:a,symbol:o,styles:Ce(Ce({},x),f.styles)}),R=i.found&&t.found?ei("generateAbstractMask",w)||{children:[],attributes:{}}:ei("generateAbstractIcon",w)||{children:[],attributes:{}},D=R.children,b=R.attributes;return w.children=D,w.attributes=b,o?Z2(w):K2(w)}function Jd(n){var e=n.content,t=n.width,i=n.height,r=n.transform,s=n.title,a=n.extra,o=n.watchable,l=o===void 0?!1:o,c=Ce(Ce(Ce({},a.attributes),s?{title:s}:{}),{},{class:a.classes.join(" ")});l&&(c[ur]="");var u=Ce({},a.styles);Bu(r)&&(u.transform=C2({transform:r,startCentered:!0,width:t,height:i}),u["-webkit-transform"]=u.transform);var f=tl(u);f.length>0&&(c.style=f);var h=[];return h.push({tag:"span",attributes:c,children:[e]}),s&&h.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),h}function J2(n){var e=n.content,t=n.title,i=n.extra,r=Ce(Ce(Ce({},i.attributes),t?{title:t}:{}),{},{class:i.classes.join(" ")}),s=tl(i.styles);s.length>0&&(r.style=s);var a=[];return a.push({tag:"span",attributes:r,children:[e]}),t&&a.push({tag:"span",attributes:{class:"sr-only"},children:[t]}),a}var sc=mn.styles;function Wc(n){var e=n[0],t=n[1],i=n.slice(4),r=Nu(i,1),s=r[0],a=null;return Array.isArray(s)?a={tag:"g",attributes:{class:"".concat(Re.cssPrefix,"-").concat(Qi.GROUP)},children:[{tag:"path",attributes:{class:"".concat(Re.cssPrefix,"-").concat(Qi.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(Re.cssPrefix,"-").concat(Qi.PRIMARY),fill:"currentColor",d:s[1]}}]}:a={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:e,height:t,icon:a}}var Q2={found:!1,width:512,height:512};function eA(n,e){!Sg&&!Re.showMissingIcons&&n&&console.error('Icon with name "'.concat(n,'" and prefix "').concat(e,'" is missing.'))}function jc(n,e){var t=e;return e==="fa"&&Re.styleDefault!==null&&(e=Pi()),new Promise(function(i,r){if(ei("missingIconAbstract"),t==="fa"){var s=Fg(n)||{};n=s.iconName||n,e=s.prefix||e}if(n&&e&&sc[e]&&sc[e][n]){var a=sc[e][n];return i(Wc(a))}eA(n,e),i(Ce(Ce({},Q2),{},{icon:Re.showMissingIcons&&n?ei("missingIconAbstract")||{}:{}}))})}var Qd=function(){},Xc=Re.measurePerformance&&eo&&eo.mark&&eo.measure?eo:{mark:Qd,measure:Qd},Ds='FA "6.2.0"',tA=function(e){return Xc.mark("".concat(Ds," ").concat(e," begins")),function(){return Ug(e)}},Ug=function(e){Xc.mark("".concat(Ds," ").concat(e," ends")),Xc.measure("".concat(Ds," ").concat(e),"".concat(Ds," ").concat(e," begins"),"".concat(Ds," ").concat(e," ends"))},ju={begin:tA,end:Ug},_o=function(){};function ep(n){var e=n.getAttribute?n.getAttribute(ur):null;return typeof e=="string"}function nA(n){var e=n.getAttribute?n.getAttribute(Fu):null,t=n.getAttribute?n.getAttribute(ku):null;return e&&t}function iA(n){return n&&n.classList&&n.classList.contains&&n.classList.contains(Re.replacementClass)}function rA(){if(Re.autoReplaceSvg===!0)return vo.replace;var n=vo[Re.autoReplaceSvg];return n||vo.replace}function sA(n){return at.createElementNS("http://www.w3.org/2000/svg",n)}function aA(n){return at.createElement(n)}function zg(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=e.ceFn,i=t===void 0?n.tag==="svg"?sA:aA:t;if(typeof n=="string")return at.createTextNode(n);var r=i(n.tag);Object.keys(n.attributes||[]).forEach(function(a){r.setAttribute(a,n.attributes[a])});var s=n.children||[];return s.forEach(function(a){r.appendChild(zg(a,{ceFn:i}))}),r}function oA(n){var e=" ".concat(n.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var vo={replace:function(e){var t=e[0];if(t.parentNode)if(e[1].forEach(function(r){t.parentNode.insertBefore(zg(r),t)}),t.getAttribute(ur)===null&&Re.keepOriginalSource){var i=at.createComment(oA(t));t.parentNode.replaceChild(i,t)}else t.remove()},nest:function(e){var t=e[0],i=e[1];if(~zu(t).indexOf(Re.replacementClass))return vo.replace(e);var r=new RegExp("".concat(Re.cssPrefix,"-.*"));if(delete i[0].attributes.id,i[0].attributes.class){var s=i[0].attributes.class.split(" ").reduce(function(o,l){return l===Re.replacementClass||l.match(r)?o.toSvg.push(l):o.toNode.push(l),o},{toNode:[],toSvg:[]});i[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?t.removeAttribute("class"):t.setAttribute("class",s.toNode.join(" "))}var a=i.map(function(o){return ba(o)}).join(`
`);t.setAttribute(ur,""),t.innerHTML=a}};function tp(n){n()}function Bg(n,e){var t=typeof e=="function"?e:_o;if(n.length===0)t();else{var i=tp;Re.mutateApproach===f2&&(i=Li.requestAnimationFrame||tp),i(function(){var r=rA(),s=ju.begin("mutate");n.map(r),s(),t()})}}var Xu=!1;function Hg(){Xu=!0}function qc(){Xu=!1}var Ro=null;function np(n){if(!!jd&&!!Re.observeMutations){var e=n.treeCallback,t=e===void 0?_o:e,i=n.nodeCallback,r=i===void 0?_o:i,s=n.pseudoElementsCallback,a=s===void 0?_o:s,o=n.observeMutationsRoot,l=o===void 0?at:o;Ro=new jd(function(c){if(!Xu){var u=Pi();gs(c).forEach(function(f){if(f.type==="childList"&&f.addedNodes.length>0&&!ep(f.addedNodes[0])&&(Re.searchPseudoElements&&a(f.target),t(f.target)),f.type==="attributes"&&f.target.parentNode&&Re.searchPseudoElements&&a(f.target.parentNode),f.type==="attributes"&&ep(f.target)&&~v2.indexOf(f.attributeName))if(f.attributeName==="class"&&nA(f.target)){var h=il(zu(f.target)),m=h.prefix,g=h.iconName;f.target.setAttribute(Fu,m||u),g&&f.target.setAttribute(ku,g)}else iA(f.target)&&r(f.target)})}}),ni&&Ro.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function lA(){!Ro||Ro.disconnect()}function cA(n){var e=n.getAttribute("style"),t=[];return e&&(t=e.split(";").reduce(function(i,r){var s=r.split(":"),a=s[0],o=s.slice(1);return a&&o.length>0&&(i[a]=o.join(":").trim()),i},{})),t}function uA(n){var e=n.getAttribute("data-prefix"),t=n.getAttribute("data-icon"),i=n.innerText!==void 0?n.innerText.trim():"",r=il(zu(n));return r.prefix||(r.prefix=Pi()),e&&t&&(r.prefix=e,r.iconName=t),r.iconName&&r.prefix||(r.prefix&&i.length>0&&(r.iconName=H2(r.prefix,n.innerText)||Vu(r.prefix,Bc(n.innerText))),!r.iconName&&Re.autoFetchSvg&&n.firstChild&&n.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=n.firstChild.data)),r}function fA(n){var e=gs(n.attributes).reduce(function(r,s){return r.name!=="class"&&r.name!=="style"&&(r[s.name]=s.value),r},{}),t=n.getAttribute("title"),i=n.getAttribute("data-fa-title-id");return Re.autoA11y&&(t?e["aria-labelledby"]="".concat(Re.replacementClass,"-title-").concat(i||fa()):(e["aria-hidden"]="true",e.focusable="false")),e}function hA(){return{iconName:null,title:null,titleId:null,prefix:null,transform:An,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function ip(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},t=uA(n),i=t.iconName,r=t.prefix,s=t.rest,a=fA(n),o=Vc("parseNodeAttributes",{},n),l=e.styleParser?cA(n):[];return Ce({iconName:i,title:n.getAttribute("title"),titleId:n.getAttribute("data-fa-title-id"),prefix:r,transform:An,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:l,attributes:a}},o)}var dA=mn.styles;function Vg(n){var e=Re.autoReplaceSvg==="nest"?ip(n,{styleParser:!1}):ip(n);return~e.extra.classes.indexOf(wg)?ei("generateLayersText",n,e):ei("generateSvgReplacementMutation",n,e)}var Ii=new Set;Uu.map(function(n){Ii.add("fa-".concat(n))});Object.keys(oa[st]).map(Ii.add.bind(Ii));Object.keys(oa[ht]).map(Ii.add.bind(Ii));Ii=xa(Ii);function rp(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!ni)return Promise.resolve();var t=at.documentElement.classList,i=function(f){return t.add("".concat(Xd,"-").concat(f))},r=function(f){return t.remove("".concat(Xd,"-").concat(f))},s=Re.autoFetchSvg?Ii:Uu.map(function(u){return"fa-".concat(u)}).concat(Object.keys(dA));s.includes("fa")||s.push("fa");var a=[".".concat(wg,":not([").concat(ur,"])")].concat(s.map(function(u){return".".concat(u,":not([").concat(ur,"])")})).join(", ");if(a.length===0)return Promise.resolve();var o=[];try{o=gs(n.querySelectorAll(a))}catch{}if(o.length>0)i("pending"),r("complete");else return Promise.resolve();var l=ju.begin("onTree"),c=o.reduce(function(u,f){try{var h=Vg(f);h&&u.push(h)}catch(m){Sg||m.name==="MissingIcon"&&console.error(m)}return u},[]);return new Promise(function(u,f){Promise.all(c).then(function(h){Bg(h,function(){i("active"),i("complete"),r("pending"),typeof e=="function"&&e(),l(),u()})}).catch(function(h){l(),f(h)})})}function pA(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Vg(n).then(function(t){t&&Bg([t],e)})}function mA(n){return function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=(e||{}).icon?e:Gc(e||{}),r=t.mask;return r&&(r=(r||{}).icon?r:Gc(r||{})),n(i,Ce(Ce({},t),{},{mask:r}))}}var gA=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=t.transform,r=i===void 0?An:i,s=t.symbol,a=s===void 0?!1:s,o=t.mask,l=o===void 0?null:o,c=t.maskId,u=c===void 0?null:c,f=t.title,h=f===void 0?null:f,m=t.titleId,g=m===void 0?null:m,p=t.classes,d=p===void 0?[]:p,_=t.attributes,v=_===void 0?{}:_,S=t.styles,x=S===void 0?{}:S;if(!!e){var w=e.prefix,R=e.iconName,D=e.icon;return rl(Ce({type:"icon"},e),function(){return fr("beforeDOMElementCreation",{iconDefinition:e,params:t}),Re.autoA11y&&(h?v["aria-labelledby"]="".concat(Re.replacementClass,"-title-").concat(g||fa()):(v["aria-hidden"]="true",v.focusable="false")),Wu({icons:{main:Wc(D),mask:l?Wc(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:w,iconName:R,transform:Ce(Ce({},An),r),symbol:a,title:h,maskId:u,titleId:g,extra:{attributes:v,styles:x,classes:d}})})}},_A={mixout:function(){return{icon:mA(gA)}},hooks:function(){return{mutationObserverCallbacks:function(t){return t.treeCallback=rp,t.nodeCallback=pA,t}}},provides:function(e){e.i2svg=function(t){var i=t.node,r=i===void 0?at:i,s=t.callback,a=s===void 0?function(){}:s;return rp(r,a)},e.generateSvgReplacementMutation=function(t,i){var r=i.iconName,s=i.title,a=i.titleId,o=i.prefix,l=i.transform,c=i.symbol,u=i.mask,f=i.maskId,h=i.extra;return new Promise(function(m,g){Promise.all([jc(r,o),u.iconName?jc(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(p){var d=Nu(p,2),_=d[0],v=d[1];m([t,Wu({icons:{main:_,mask:v},prefix:o,iconName:r,transform:l,symbol:c,maskId:f,title:s,titleId:a,extra:h,watchable:!0})])}).catch(g)})},e.generateAbstractIcon=function(t){var i=t.children,r=t.attributes,s=t.main,a=t.transform,o=t.styles,l=tl(o);l.length>0&&(r.style=l);var c;return Bu(a)&&(c=ei("generateAbstractTransformGrouping",{main:s,transform:a,containerWidth:s.width,iconWidth:s.width})),i.push(c||s.icon),{children:i,attributes:r}}}},vA={mixout:function(){return{layer:function(t){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=i.classes,s=r===void 0?[]:r;return rl({type:"layer"},function(){fr("beforeDOMElementCreation",{assembler:t,params:i});var a=[];return t(function(o){Array.isArray(o)?o.map(function(l){a=a.concat(l.abstract)}):a=a.concat(o.abstract)}),[{tag:"span",attributes:{class:["".concat(Re.cssPrefix,"-layers")].concat(xa(s)).join(" ")},children:a}]})}}}},xA={mixout:function(){return{counter:function(t){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=i.title,s=r===void 0?null:r,a=i.classes,o=a===void 0?[]:a,l=i.attributes,c=l===void 0?{}:l,u=i.styles,f=u===void 0?{}:u;return rl({type:"counter",content:t},function(){return fr("beforeDOMElementCreation",{content:t,params:i}),J2({content:t.toString(),title:s,extra:{attributes:c,styles:f,classes:["".concat(Re.cssPrefix,"-layers-counter")].concat(xa(o))}})})}}}},yA={mixout:function(){return{text:function(t){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=i.transform,s=r===void 0?An:r,a=i.title,o=a===void 0?null:a,l=i.classes,c=l===void 0?[]:l,u=i.attributes,f=u===void 0?{}:u,h=i.styles,m=h===void 0?{}:h;return rl({type:"text",content:t},function(){return fr("beforeDOMElementCreation",{content:t,params:i}),Jd({content:t,transform:Ce(Ce({},An),s),title:o,extra:{attributes:f,styles:m,classes:["".concat(Re.cssPrefix,"-layers-text")].concat(xa(c))}})})}}},provides:function(e){e.generateLayersText=function(t,i){var r=i.title,s=i.transform,a=i.extra,o=null,l=null;if(yg){var c=parseInt(getComputedStyle(t).fontSize,10),u=t.getBoundingClientRect();o=u.width/c,l=u.height/c}return Re.autoA11y&&!r&&(a.attributes["aria-hidden"]="true"),Promise.resolve([t,Jd({content:t.innerHTML,width:o,height:l,transform:s,title:r,extra:a,watchable:!0})])}}},bA=new RegExp('"',"ug"),sp=[1105920,1112319];function MA(n){var e=n.replace(bA,""),t=O2(e,0),i=t>=sp[0]&&t<=sp[1],r=e.length===2?e[0]===e[1]:!1;return{value:Bc(r?e[0]:e),isSecondary:i||r}}function ap(n,e){var t="".concat(u2).concat(e.replace(":","-"));return new Promise(function(i,r){if(n.getAttribute(t)!==null)return i();var s=gs(n.children),a=s.filter(function(D){return D.getAttribute(zc)===e})[0],o=Li.getComputedStyle(n,e),l=o.getPropertyValue("font-family").match(m2),c=o.getPropertyValue("font-weight"),u=o.getPropertyValue("content");if(a&&!l)return n.removeChild(a),i();if(l&&u!=="none"&&u!==""){var f=o.getPropertyValue("content"),h=~["Sharp"].indexOf(l[2])?ht:st,m=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?la[h][l[2].toLowerCase()]:g2[h][c],g=MA(f),p=g.value,d=g.isSecondary,_=l[0].startsWith("FontAwesome"),v=Vu(m,p),S=v;if(_){var x=V2(p);x.iconName&&x.prefix&&(v=x.iconName,m=x.prefix)}if(v&&!d&&(!a||a.getAttribute(Fu)!==m||a.getAttribute(ku)!==S)){n.setAttribute(t,S),a&&n.removeChild(a);var w=hA(),R=w.extra;R.attributes[zc]=e,jc(v,m).then(function(D){var b=Wu(Ce(Ce({},w),{},{icons:{main:D,mask:Gu()},prefix:m,iconName:S,extra:R,watchable:!0})),A=at.createElement("svg");e==="::before"?n.insertBefore(A,n.firstChild):n.appendChild(A),A.outerHTML=b.map(function(F){return ba(F)}).join(`
`),n.removeAttribute(t),i()}).catch(r)}else i()}else i()})}function SA(n){return Promise.all([ap(n,"::before"),ap(n,"::after")])}function wA(n){return n.parentNode!==document.head&&!~h2.indexOf(n.tagName.toUpperCase())&&!n.getAttribute(zc)&&(!n.parentNode||n.parentNode.tagName!=="svg")}function op(n){if(!!ni)return new Promise(function(e,t){var i=gs(n.querySelectorAll("*")).filter(wA).map(SA),r=ju.begin("searchPseudoElements");Hg(),Promise.all(i).then(function(){r(),qc(),e()}).catch(function(){r(),qc(),t()})})}var TA={hooks:function(){return{mutationObserverCallbacks:function(t){return t.pseudoElementsCallback=op,t}}},provides:function(e){e.pseudoElements2svg=function(t){var i=t.node,r=i===void 0?at:i;Re.searchPseudoElements&&op(r)}}},lp=!1,EA={mixout:function(){return{dom:{unwatch:function(){Hg(),lp=!0}}}},hooks:function(){return{bootstrap:function(){np(Vc("mutationObserverCallbacks",{}))},noAuto:function(){lA()},watch:function(t){var i=t.observeMutationsRoot;lp?qc():np(Vc("mutationObserverCallbacks",{observeMutationsRoot:i}))}}}},cp=function(e){var t={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(i,r){var s=r.toLowerCase().split("-"),a=s[0],o=s.slice(1).join("-");if(a&&o==="h")return i.flipX=!0,i;if(a&&o==="v")return i.flipY=!0,i;if(o=parseFloat(o),isNaN(o))return i;switch(a){case"grow":i.size=i.size+o;break;case"shrink":i.size=i.size-o;break;case"left":i.x=i.x-o;break;case"right":i.x=i.x+o;break;case"up":i.y=i.y-o;break;case"down":i.y=i.y+o;break;case"rotate":i.rotate=i.rotate+o;break}return i},t)},AA={mixout:function(){return{parse:{transform:function(t){return cp(t)}}}},hooks:function(){return{parseNodeAttributes:function(t,i){var r=i.getAttribute("data-fa-transform");return r&&(t.transform=cp(r)),t}}},provides:function(e){e.generateAbstractTransformGrouping=function(t){var i=t.main,r=t.transform,s=t.containerWidth,a=t.iconWidth,o={transform:"translate(".concat(s/2," 256)")},l="translate(".concat(r.x*32,", ").concat(r.y*32,") "),c="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),u="rotate(".concat(r.rotate," 0 0)"),f={transform:"".concat(l," ").concat(c," ").concat(u)},h={transform:"translate(".concat(a/2*-1," -256)")},m={outer:o,inner:f,path:h};return{tag:"g",attributes:Ce({},m.outer),children:[{tag:"g",attributes:Ce({},m.inner),children:[{tag:i.icon.tag,children:i.icon.children,attributes:Ce(Ce({},i.icon.attributes),m.path)}]}]}}}},ac={x:0,y:0,width:"100%",height:"100%"};function up(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return n.attributes&&(n.attributes.fill||e)&&(n.attributes.fill="black"),n}function CA(n){return n.tag==="g"?n.children:[n]}var RA={hooks:function(){return{parseNodeAttributes:function(t,i){var r=i.getAttribute("data-fa-mask"),s=r?il(r.split(" ").map(function(a){return a.trim()})):Gu();return s.prefix||(s.prefix=Pi()),t.mask=s,t.maskId=i.getAttribute("data-fa-mask-id"),t}}},provides:function(e){e.generateAbstractMask=function(t){var i=t.children,r=t.attributes,s=t.main,a=t.mask,o=t.maskId,l=t.transform,c=s.width,u=s.icon,f=a.width,h=a.icon,m=A2({transform:l,containerWidth:f,iconWidth:c}),g={tag:"rect",attributes:Ce(Ce({},ac),{},{fill:"white"})},p=u.children?{children:u.children.map(up)}:{},d={tag:"g",attributes:Ce({},m.inner),children:[up(Ce({tag:u.tag,attributes:Ce(Ce({},u.attributes),m.path)},p))]},_={tag:"g",attributes:Ce({},m.outer),children:[d]},v="mask-".concat(o||fa()),S="clip-".concat(o||fa()),x={tag:"mask",attributes:Ce(Ce({},ac),{},{id:v,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[g,_]},w={tag:"defs",children:[{tag:"clipPath",attributes:{id:S},children:CA(h)},x]};return i.push(w,{tag:"rect",attributes:Ce({fill:"currentColor","clip-path":"url(#".concat(S,")"),mask:"url(#".concat(v,")")},ac)}),{children:i,attributes:r}}}},LA={provides:function(e){var t=!1;Li.matchMedia&&(t=Li.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var i=[],r={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};i.push({tag:"path",attributes:Ce(Ce({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var a=Ce(Ce({},s),{},{attributeName:"opacity"}),o={tag:"circle",attributes:Ce(Ce({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return t||o.children.push({tag:"animate",attributes:Ce(Ce({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:Ce(Ce({},a),{},{values:"1;0;1;1;0;1;"})}),i.push(o),i.push({tag:"path",attributes:Ce(Ce({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:t?[]:[{tag:"animate",attributes:Ce(Ce({},a),{},{values:"1;0;0;0;0;1;"})}]}),t||i.push({tag:"path",attributes:Ce(Ce({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:Ce(Ce({},a),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:i}}}},PA={hooks:function(){return{parseNodeAttributes:function(t,i){var r=i.getAttribute("data-fa-symbol"),s=r===null?!1:r===""?!0:r;return t.symbol=s,t}}}},IA=[L2,_A,vA,xA,yA,TA,EA,AA,RA,LA,PA];j2(IA,{mixoutsTo:jt});jt.noAuto;var Gg=jt.config,DA=jt.library;jt.dom;var Lo=jt.parse;jt.findIconDefinition;jt.toHtml;var NA=jt.icon;jt.layer;var OA=jt.text;jt.counter;function fp(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})),t.push.apply(t,i)}return t}function un(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?fp(Object(t),!0).forEach(function(i){Ft(n,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):fp(Object(t)).forEach(function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(t,i))})}return n}function Po(n){return Po=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Po(n)}function Ft(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function FA(n,e){if(n==null)return{};var t={},i=Object.keys(n),r,s;for(s=0;s<i.length;s++)r=i[s],!(e.indexOf(r)>=0)&&(t[r]=n[r]);return t}function kA(n,e){if(n==null)return{};var t=FA(n,e),i,r;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);for(r=0;r<s.length;r++)i=s[r],!(e.indexOf(i)>=0)&&(!Object.prototype.propertyIsEnumerable.call(n,i)||(t[i]=n[i]))}return t}function $c(n){return UA(n)||zA(n)||BA(n)||HA()}function UA(n){if(Array.isArray(n))return Yc(n)}function zA(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function BA(n,e){if(!!n){if(typeof n=="string")return Yc(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Yc(n,e)}}function Yc(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=n[t];return i}function HA(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var VA=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Wg={exports:{}};(function(n){(function(e){var t=function(_,v,S){if(!c(v)||f(v)||h(v)||m(v)||l(v))return v;var x,w=0,R=0;if(u(v))for(x=[],R=v.length;w<R;w++)x.push(t(_,v[w],S));else{x={};for(var D in v)Object.prototype.hasOwnProperty.call(v,D)&&(x[_(D,S)]=t(_,v[D],S))}return x},i=function(_,v){v=v||{};var S=v.separator||"_",x=v.split||/(?=[A-Z])/;return _.split(x).join(S)},r=function(_){return g(_)?_:(_=_.replace(/[\-_\s]+(.)?/g,function(v,S){return S?S.toUpperCase():""}),_.substr(0,1).toLowerCase()+_.substr(1))},s=function(_){var v=r(_);return v.substr(0,1).toUpperCase()+v.substr(1)},a=function(_,v){return i(_,v).toLowerCase()},o=Object.prototype.toString,l=function(_){return typeof _=="function"},c=function(_){return _===Object(_)},u=function(_){return o.call(_)=="[object Array]"},f=function(_){return o.call(_)=="[object Date]"},h=function(_){return o.call(_)=="[object RegExp]"},m=function(_){return o.call(_)=="[object Boolean]"},g=function(_){return _=_-0,_===_},p=function(_,v){var S=v&&"process"in v?v.process:v;return typeof S!="function"?_:function(x,w){return S(x,_,w)}},d={camelize:r,decamelize:a,pascalize:s,depascalize:a,camelizeKeys:function(_,v){return t(p(r,v),_)},decamelizeKeys:function(_,v){return t(p(a,v),_,v)},pascalizeKeys:function(_,v){return t(p(s,v),_)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};n.exports?n.exports=d:e.humps=d})(VA)})(Wg);var GA=Wg.exports,WA=["class","style"];function jA(n){return n.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,t){var i=t.indexOf(":"),r=GA.camelize(t.slice(0,i)),s=t.slice(i+1).trim();return e[r]=s,e},{})}function XA(n){return n.split(/\s+/).reduce(function(e,t){return e[t]=!0,e},{})}function qu(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof n=="string")return n;var i=(n.children||[]).map(function(l){return qu(l)}),r=Object.keys(n.attributes||{}).reduce(function(l,c){var u=n.attributes[c];switch(c){case"class":l.class=XA(u);break;case"style":l.style=jA(u);break;default:l.attrs[c]=u}return l},{attrs:{},class:{},style:{}});t.class;var s=t.style,a=s===void 0?{}:s,o=kA(t,WA);return qo(n.tag,un(un(un({},e),{},{class:r.class,style:un(un({},r.style),a)},r.attrs),o),i)}var jg=!1;try{jg=!0}catch{}function qA(){if(!jg&&console&&typeof console.error=="function"){var n;(n=console).error.apply(n,arguments)}}function Ws(n,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?Ft({},n,e):{}}function $A(n){var e,t=(e={"fa-spin":n.spin,"fa-pulse":n.pulse,"fa-fw":n.fixedWidth,"fa-border":n.border,"fa-li":n.listItem,"fa-inverse":n.inverse,"fa-flip":n.flip===!0,"fa-flip-horizontal":n.flip==="horizontal"||n.flip==="both","fa-flip-vertical":n.flip==="vertical"||n.flip==="both"},Ft(e,"fa-".concat(n.size),n.size!==null),Ft(e,"fa-rotate-".concat(n.rotation),n.rotation!==null),Ft(e,"fa-pull-".concat(n.pull),n.pull!==null),Ft(e,"fa-swap-opacity",n.swapOpacity),Ft(e,"fa-bounce",n.bounce),Ft(e,"fa-shake",n.shake),Ft(e,"fa-beat",n.beat),Ft(e,"fa-fade",n.fade),Ft(e,"fa-beat-fade",n.beatFade),Ft(e,"fa-flash",n.flash),Ft(e,"fa-spin-pulse",n.spinPulse),Ft(e,"fa-spin-reverse",n.spinReverse),e);return Object.keys(t).map(function(i){return t[i]?i:null}).filter(function(i){return i})}function hp(n){if(n&&Po(n)==="object"&&n.prefix&&n.iconName&&n.icon)return n;if(Lo.icon)return Lo.icon(n);if(n===null)return null;if(Po(n)==="object"&&n.prefix&&n.iconName)return n;if(Array.isArray(n)&&n.length===2)return{prefix:n[0],iconName:n[1]};if(typeof n=="string")return{prefix:"fas",iconName:n}}var YA=da({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(e,t){var i=t.attrs,r=ot(function(){return hp(e.icon)}),s=ot(function(){return Ws("classes",$A(e))}),a=ot(function(){return Ws("transform",typeof e.transform=="string"?Lo.transform(e.transform):e.transform)}),o=ot(function(){return Ws("mask",hp(e.mask))}),l=ot(function(){return NA(r.value,un(un(un(un({},s.value),a.value),o.value),{},{symbol:e.symbol,title:e.title}))});Os(l,function(u){if(!u)return qA("Could not find one or more icon(s)",r.value,o.value)},{immediate:!0});var c=ot(function(){return l.value?qu(l.value.abstract[0],{},i):null});return function(){return c.value}}});da({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(e,t){var i=t.slots,r=Gg.familyPrefix,s=ot(function(){return["".concat(r,"-layers")].concat($c(e.fixedWidth?["".concat(r,"-fw")]:[]))});return function(){return qo("div",{class:s.value},i.default?i.default():[])}}});da({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(e){return["bottom-left","bottom-right","top-left","top-right"].indexOf(e)>-1}}},setup:function(e,t){var i=t.attrs,r=Gg.familyPrefix,s=ot(function(){return Ws("classes",[].concat($c(e.counter?["".concat(r,"-layers-counter")]:[]),$c(e.position?["".concat(r,"-layers-").concat(e.position)]:[])))}),a=ot(function(){return Ws("transform",typeof e.transform=="string"?Lo.transform(e.transform):e.transform)}),o=ot(function(){var c=OA(e.value.toString(),un(un({},a.value),s.value)),u=c.abstract;return e.counter&&(u[0].attributes.class=u[0].attributes.class.replace("fa-layers-text","")),u[0]}),l=ot(function(){return qu(o.value,{},i)});return function(){return l.value}}});var KA={prefix:"fab",iconName:"google-plus-g",icon:[640,512,[],"f0d5","M386.061 228.496c1.834 9.692 3.143 19.384 3.143 31.956C389.204 370.205 315.599 448 204.8 448c-106.084 0-192-85.915-192-192s85.916-192 192-192c51.864 0 95.083 18.859 128.611 50.292l-52.126 50.03c-14.145-13.621-39.028-29.599-76.485-29.599-65.484 0-118.92 54.221-118.92 121.277 0 67.056 53.436 121.277 118.92 121.277 75.961 0 104.513-54.745 108.965-82.773H204.8v-66.009h181.261zm185.406 6.437V179.2h-56.001v55.733h-55.733v56.001h55.733v55.733h56.001v-55.733H627.2v-56.001h-55.733z"]},ZA={prefix:"fab",iconName:"linkedin-in",icon:[448,512,[],"f0e1","M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"]},JA={prefix:"fab",iconName:"square-google-plus",icon:[448,512,["google-plus-square"],"f0d4","M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM164 356c-55.3 0-100-44.7-100-100s44.7-100 100-100c27 0 49.5 9.8 67 26.2l-27.1 26.1c-7.4-7.1-20.3-15.4-39.8-15.4-34.1 0-61.9 28.2-61.9 63.2 0 34.9 27.8 63.2 61.9 63.2 39.6 0 54.4-28.5 56.8-43.1H164v-34.4h94.4c1 5 1.6 10.1 1.6 16.6 0 57.1-38.3 97.6-96 97.6zm220-81.8h-29v29h-29.2v-29h-29V245h29v-29H355v29h29v29.2z"]},QA={prefix:"fab",iconName:"linkedin",icon:[448,512,[],"f08c","M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"]},eC={prefix:"fab",iconName:"github",icon:[496,512,[],"f09b","M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]},tC={prefix:"fab",iconName:"telegram",icon:[496,512,[62462,"telegram-plane"],"f2c6","M248,8C111.033,8,0,119.033,0,256S111.033,504,248,504,496,392.967,496,256,384.967,8,248,8ZM362.952,176.66c-3.732,39.215-19.881,134.378-28.1,178.3-3.476,18.584-10.322,24.816-16.948,25.425-14.4,1.326-25.338-9.517-39.287-18.661-21.827-14.308-34.158-23.215-55.346-37.177-24.485-16.135-8.612-25,5.342-39.5,3.652-3.793,67.107-61.51,68.335-66.746.153-.655.3-3.1-1.154-4.384s-3.59-.849-5.135-.5q-3.283.746-104.608,69.142-14.845,10.194-26.894,9.934c-8.855-.191-25.888-5.006-38.551-9.123-15.531-5.048-27.875-7.717-26.8-16.291q.84-6.7,18.45-13.7,108.446-47.248,144.628-62.3c68.872-28.647,83.183-33.623,92.511-33.789,2.052-.034,6.639.474,9.61,2.885a10.452,10.452,0,0,1,3.53,6.716A43.765,43.765,0,0,1,362.952,176.66Z"]};DA.add(eC,QA,ZA,tC,KA,JA);const $u=Tv(JE);$u.use(mg);$u.component("font-awesome-icon",YA);$u.mount("#app");export{Zt as F,rC as T,Yo as _,iC as a,et as b,jo as c,pt as d,nC as e,Wo as o,hc as r,uo as w};
