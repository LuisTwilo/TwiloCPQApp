var SLDS="object"==typeof SLDS?SLDS:{};SLDS["__internal/chunked/showcase/ui/components/datetime-picker/base/example.jsx.js"]=function(e){function t(t){for(var a,s,o=t[0],r=t[1],c=t[2],m=0,u=[];m<o.length;m++)s=o[m],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&u.push(n[s][0]),n[s]=0;for(a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a]);for(d&&d(t);u.length;)u.shift()();return i.push.apply(i,c||[]),l()}function l(){for(var e,t=0;t<i.length;t++){for(var l=i[t],a=!0,o=1;o<l.length;o++){var r=l[o];0!==n[r]&&(a=!1)}a&&(i.splice(t--,1),e=s(s.s=l[0]))}return e}var a={},n={58:0,6:0,13:0,14:0,22:0,24:0,26:0,36:0,37:0,56:0,72:0,73:0,79:0,80:0,93:0,94:0,96:0,97:0,98:0,103:0,104:0,112:0,117:0,118:0,122:0,124:0,127:0,131:0,133:0,135:0,136:0,137:0,140:0,142:0,145:0,146:0,147:0,150:0,154:0,157:0},i=[];function s(t){if(a[t])return a[t].exports;var l=a[t]={i:t,l:!1,exports:{}};return e[t].call(l.exports,l,l.exports,s),l.l=!0,l.exports}s.m=e,s.c=a,s.d=function(e,t,l){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:l})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var l=Object.create(null);if(s.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(l,a,function(t){return e[t]}.bind(null,a));return l},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/assets/scripts/bundle/";var o=this.webpackJsonpSLDS___internal_chunked_showcase=this.webpackJsonpSLDS___internal_chunked_showcase||[],r=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var d=r;return i.push([175,0]),l()}({0:function(e,t){e.exports=React},16:function(e,t){e.exports=ReactDOM},175:function(e,t,l){"use strict";l.r(t),l.d(t,"Context",(function(){return m})),l.d(t,"states",(function(){return u}));var a=l(0),n=l.n(a),i=l(12),s=l(31),o=l(4),r=l(5),c=l(10),d=function(e){return n.a.createElement(i.c,{listboxClassName:"slds-dropdown slds-dropdown_fluid slds-dropdown_length-5",vertical:!0},n.a.createElement(i.d,null,n.a.createElement(i.e,{id:"listbox-option-unique-id-01",title:"6:00am"})),n.a.createElement(i.d,null,n.a.createElement(i.e,{id:"listbox-option-unique-id-02",title:"7:00am"})),n.a.createElement(i.d,null,n.a.createElement(i.e,{id:"listbox-option-unique-id-03",title:"8:00am",selected:e.optionSelected})),n.a.createElement(i.d,null,n.a.createElement(i.e,{id:"listbox-option-unique-id-04",title:"9:00am"})),n.a.createElement(i.d,null,n.a.createElement(i.e,{id:"listbox-option-unique-id-05",title:"10:00am"})),n.a.createElement(i.d,null,n.a.createElement(i.e,{id:"listbox-option-unique-id-06",title:"11:00am"})),n.a.createElement(i.d,null,n.a.createElement(i.e,{id:"listbox-option-unique-id-07",title:"12:00pm"})),n.a.createElement(i.d,null,n.a.createElement(i.e,{id:"listbox-option-unique-id-08",title:"1:00pm"})),n.a.createElement(i.d,null,n.a.createElement(i.e,{id:"listbox-option-unique-id-09",title:"2:00pm"})),n.a.createElement(i.d,null,n.a.createElement(i.e,{id:"listbox-option-unique-id-10",title:"3:00pm"})),n.a.createElement(i.d,null,n.a.createElement(i.e,{id:"listbox-option-unique-id-11",title:"4:00pm"})),n.a.createElement(i.d,null,n.a.createElement(i.e,{id:"listbox-option-unique-id-12",title:"5:00pm"})))},m=function(e){return n.a.createElement("div",{style:{height:"25rem"}},e.children)};t.default=n.a.createElement("div",{className:"slds-form slds-form_compound"},n.a.createElement("fieldset",{className:"slds-form-element"},n.a.createElement("legend",{className:"slds-form-element__label slds-form-element__legend"},"Date and Time"),n.a.createElement("div",{className:"slds-form-element__control"},n.a.createElement("div",{className:"slds-form-element__group"},n.a.createElement("div",{className:"slds-form-element__row"},n.a.createElement(r.b,{formElementClassName:"slds-dropdown-trigger slds-dropdown-trigger_click slds-is-open",labelContent:"Date",inputId:"date-input-id",hasRightIcon:!0,dropdown:n.a.createElement(s.DatePicker,{todayActive:!0})},n.a.createElement(c.a,{id:"date-input-id",placeholder:" "}),n.a.createElement(o.b,{className:"slds-input__icon slds-input__icon_right",symbol:"event",assistiveText:"Select a date",title:"Select a date"})),n.a.createElement(i.a,{label:"Time",autocomplete:!0,className:"slds-combobox-picklist slds-timepicker",inputIcon:"right",inputIconRightSymbol:"clock",inputIconRightAssistiveText:!1,placeholder:" ",listbox:n.a.createElement(d,null)}))))));var u=[{id:"date-selection",label:"Date selected",element:n.a.createElement("div",{className:"slds-form slds-form_compound"},n.a.createElement("fieldset",{className:"slds-form-element"},n.a.createElement("legend",{className:"slds-form-element__label slds-form-element__legend"},"Date and Time"),n.a.createElement("div",{className:"slds-form-element__control"},n.a.createElement("div",{className:"slds-form-element__group"},n.a.createElement("div",{className:"slds-form-element__row"},n.a.createElement(r.b,{formElementClassName:"slds-dropdown-trigger slds-dropdown-trigger_click slds-is-open",labelContent:"Date",inputId:"date-input-id",hasRightIcon:!0,dropdown:n.a.createElement(s.DatePicker,{todayActive:!0,dateSelected:"single",dateRange:"week-4"})},n.a.createElement(c.a,{id:"date-input-id",placeholder:" ",defaultValue:"06/24/2020"}),n.a.createElement(o.b,{className:"slds-input__icon slds-input__icon_right",symbol:"event",assistiveText:"Select a date",title:"Select a date"})),n.a.createElement(i.a,{label:"Time",autocomplete:!0,className:"slds-combobox-picklist slds-timepicker",inputIcon:"right",inputIconRightSymbol:"clock",inputIconRightAssistiveText:!1,placeholder:" ",listbox:n.a.createElement(d,null)}))))))},{id:"time-selection",label:"Time selected",element:n.a.createElement("div",{className:"slds-form slds-form_compound"},n.a.createElement("fieldset",{className:"slds-form-element"},n.a.createElement("legend",{className:"slds-form-element__label slds-form-element__legend"},"Date and Time"),n.a.createElement("div",{className:"slds-form-element__control"},n.a.createElement("div",{className:"slds-form-element__group"},n.a.createElement("div",{className:"slds-form-element__row"},n.a.createElement(r.b,{formElementClassName:"slds-dropdown-trigger slds-dropdown-trigger_click",labelContent:"Date",inputId:"date-input-id",hasRightIcon:!0,dropdown:n.a.createElement(s.DatePicker,{todayActive:!0,dateSelected:"single",dateRange:"week-4"})},n.a.createElement(c.a,{id:"date-input-id",placeholder:" ",defaultValue:"06/24/2020"}),n.a.createElement(o.b,{className:"slds-input__icon slds-input__icon_right",symbol:"event",assistiveText:"Select a date",title:"Select a date"})),n.a.createElement(i.a,{label:"Time",autocomplete:!0,isOpen:!0,className:"slds-combobox-picklist slds-timepicker",inputIcon:"right",inputIconRightSymbol:"clock",inputIconRightAssistiveText:!1,placeholder:" ",value:"8:00am",listbox:n.a.createElement(d,{optionSelected:!0})}))))))}]}});