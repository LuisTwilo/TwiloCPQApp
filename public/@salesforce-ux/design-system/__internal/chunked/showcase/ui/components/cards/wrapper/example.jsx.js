var SLDS="object"==typeof SLDS?SLDS:{};SLDS["__internal/chunked/showcase/ui/components/cards/wrapper/example.jsx.js"]=function(e){function t(t){for(var n,l,c=t[0],o=t[1],d=t[2],u=0,p=[];u<c.length;u++)l=c[u],Object.prototype.hasOwnProperty.call(r,l)&&r[l]&&p.push(r[l][0]),r[l]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n]);for(i&&i(t);p.length;)p.shift()();return s.push.apply(s,d||[]),a()}function a(){for(var e,t=0;t<s.length;t++){for(var a=s[t],n=!0,c=1;c<a.length;c++){var o=a[c];0!==r[o]&&(n=!1)}n&&(s.splice(t--,1),e=l(l.s=a[0]))}return e}var n={},r={30:0,6:0,22:0,73:0,80:0,93:0,94:0,96:0,97:0,98:0,103:0,104:0,127:0,131:0,135:0,140:0,142:0},s=[];function l(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.m=e,l.c=n,l.d=function(e,t,a){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)l.d(a,n,function(t){return e[t]}.bind(null,n));return a},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/assets/scripts/bundle/";var c=this.webpackJsonpSLDS___internal_chunked_showcase=this.webpackJsonpSLDS___internal_chunked_showcase||[],o=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var i=o;return s.push([231,0]),a()}({0:function(e,t){e.exports=React},231:function(e,t,a){"use strict";a.r(t),a.d(t,"examples",(function(){return c}));var n=a(0),r=a.n(n),s=a(11),l=a(23);t.default=r.a.createElement("div",{className:"slds-card-wrapper"},r.a.createElement(s.d,null,r.a.createElement(s.c,{title:"Contacts",href:"javascript:void(0);",symbol:"contact",action:r.a.createElement("button",{className:"slds-button slds-button_neutral"},"New")}),r.a.createElement(s.a,null,"This is a card inside an `slds-card-wrapper` to show how styling is removed when cards are nested inside."),r.a.createElement(s.b,null,"View All ",r.a.createElement("span",{className:"slds-assistive-text"},"Contacts"))),r.a.createElement(s.d,{hasCardBoundary:!0},r.a.createElement(s.c,{title:"Contacts",href:"javascript:void(0);",symbol:"contact",action:r.a.createElement("button",{className:"slds-button slds-button_neutral"},"New")}),r.a.createElement(s.a,{hasPadding:!0},"This is a card inside an `slds-card-wrapper` to illustrate how `slds-card_boundary` adds a rounded border when desired."),r.a.createElement(s.b,null,"View All ",r.a.createElement("span",{className:"slds-assistive-text"},"Contacts"))));var c=[{id:"tabs-wrapper",label:"Card wrapper for tabs",element:r.a.createElement("div",{className:"slds-card-wrapper"},r.a.createElement(l.a,{selectedIndex:0},r.a.createElement(l.a.Item,{title:"Item One",id:"tab-default-1"},r.a.createElement(s.d,null,r.a.createElement(s.c,{title:"Contacts",href:"javascript:void(0);",symbol:"contact",action:r.a.createElement("button",{className:"slds-button slds-button_neutral"},"New")}),r.a.createElement(s.a,null,"This is a card inside an `slds-card-wrapper` to show how styling is removed when cards are nested inside."),r.a.createElement(s.b,null,"View All ",r.a.createElement("span",{className:"slds-assistive-text"},"Contacts"))),r.a.createElement(s.d,{hasCardBoundary:!0},r.a.createElement(s.c,{title:"Contacts",href:"javascript:void(0);",symbol:"contact",action:r.a.createElement("button",{className:"slds-button slds-button_neutral"},"New")}),r.a.createElement(s.a,{hasPadding:!0},"This is a card inside an `slds-card-wrapper` to illustrate how `slds-card_boundary` adds a rounded border when desired."),r.a.createElement(s.b,null,"View All ",r.a.createElement("span",{className:"slds-assistive-text"},"Contacts")))),r.a.createElement(l.a.Item,{title:"Item Two",id:"tab-default-2"},"Item Two Content"),r.a.createElement(l.a.Item,{title:"Item Three",id:"tab-default-3"},"Item Three Content")))}]}});