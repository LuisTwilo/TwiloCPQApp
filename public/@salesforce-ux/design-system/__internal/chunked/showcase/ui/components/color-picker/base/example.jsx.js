var SLDS="object"==typeof SLDS?SLDS:{};SLDS["__internal/chunked/showcase/ui/components/color-picker/base/example.jsx.js"]=function(e){function t(t){for(var n,l,c=t[0],u=t[1],s=t[2],p=0,f=[];p<c.length;p++)l=c[p],Object.prototype.hasOwnProperty.call(o,l)&&o[l]&&f.push(o[l][0]),o[l]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);for(i&&i(t);f.length;)f.shift()();return a.push.apply(a,s||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,c=1;c<r.length;c++){var u=r[c];0!==o[u]&&(n=!1)}n&&(a.splice(t--,1),e=l(l.s=r[0]))}return e}var n={},o={39:0,6:0,13:0,14:0,22:0,24:0,26:0,36:0,37:0,56:0,72:0,73:0,79:0,80:0,93:0,94:0,96:0,97:0,98:0,103:0,104:0,112:0,117:0,118:0,122:0,124:0,127:0,131:0,133:0,135:0,136:0,137:0,140:0,142:0,145:0,146:0,147:0,150:0,154:0,157:0},a=[];function l(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,l),r.l=!0,r.exports}l.m=e,l.c=n,l.d=function(e,t,r){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(l.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)l.d(r,n,function(t){return e[t]}.bind(null,n));return r},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/assets/scripts/bundle/";var c=this.webpackJsonpSLDS___internal_chunked_showcase=this.webpackJsonpSLDS___internal_chunked_showcase||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var s=0;s<c.length;s++)t(c[s]);var i=u;return a.push([227,0]),r()}({0:function(e,t){e.exports=React},16:function(e,t){e.exports=ReactDOM},227:function(e,t,r){"use strict";r.r(t),r.d(t,"states",(function(){return l}));var n=r(0),o=r.n(n),a=r(44);t.default=o.a.createElement(a.b,null);var l=[{id:"summary-error",label:"Summary Error",element:o.a.createElement(a.b,{hasSummaryError:!0})},{id:"color-picker-open",label:"Open, default tab selected",element:o.a.createElement(a.b,{isOpen:!0})},{id:"custom-tab-selected",label:"Open, custom tab selected",element:o.a.createElement(a.b,{isOpen:!0,selectedTabIndex:1})},{id:"custom-tab-selected-error",label:"Open, custom tab selected, error state",element:o.a.createElement(a.b,{isOpen:!0,hasCustomError:!0,selectedTabIndex:1})}]}});