webpackJsonpNreachUI([4],{682:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var c=a(4),n=a(152),r=(a.n(n),a(281)),s=(a.n(r),a(845)),i=(a.n(s),a(693)),o=(a.n(i),a(276)),l=a(847),u=(a.n(l),a(722)),f=a.n(u),d=this&&this.__decorate||function(e,t,a,c){var n,r=arguments.length,s=r<3?t:null===c?c=Object.getOwnPropertyDescriptor(t,a):c;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,a,c);else for(var i=e.length-1;i>=0;i--)(n=e[i])&&(s=(r<3?n(s):r>3?n(t,a,s):n(t,a))||s);return r>3&&s&&Object.defineProperty(t,a,s),s},p=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},m=this&&this.__awaiter||function(e,t,a,c){return new(a||(a=Promise))(function(n,r){function s(e){try{o(c.next(e))}catch(e){r(e)}}function i(e){try{o(c.throw(e))}catch(e){r(e)}}function o(e){e.done?n(e.value):new a(function(t){t(e.value)}).then(s,i)}o((c=c.apply(e,t||[])).next())})};let b=class extends o.a{componentDidMount(){return m(this,void 0,void 0,function*(){let e=yield this.props.store.remote("typo3chatbot",{});this.props.store.chatLine=new r.DirectLine({token:e.token}),this.props.store.chatLine.activity$.filter(e=>{if("nreachbot"===e.from.id)switch(e.type){case"message":return!!e.entities;default:return!1}}).subscribe(this.onActivity)})}onActivity(e){return m(this,void 0,void 0,function*(){e.entities.forEach(e=>m(this,void 0,void 0,function*(){console.log(e.action)}))})}sendActivity(e,t){this.props.store.chatLine.postActivity({type:"event",value:t,from:{id:"user"},name:e}).subscribe(e=>console.log("success"))}render(){return c.createElement("div",{className:"chatbox"},c.createElement("div",{className:"webchat"},this.props.store.chatLine?c.createElement(r.Chat,{bot:{id:"bot"},user:{id:"user"},botConnection:this.props.store.chatLine}):c.createElement(i,null)))}};d([f.a,p("design:type",Function),p("design:paramtypes",[Object]),p("design:returntype",Promise)],b.prototype,"onActivity",null),b=d([Object(n.inject)("store"),n.observer],b),t.default=b},693:function(e,t,a){"use strict";function c(e){return e&&e.__esModule?e:{default:e}}function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(e[c]=a[c])}return e},l=function(){function e(e,t){for(var a=0;a<t.length;a++){var c=t[a];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(e,c.key,c)}}return function(t,a,c){return a&&e(t.prototype,a),c&&e(t,c),t}}(),u=c(a(10)),f=c(a(4)),d=c(a(694)),p=c(a(695));a(696),a(698),a(700),a(702),a(704),a(706),a(708),a(710),a(712),a(714),a(716),a(718);var m=function(e){function t(e){r(this,t);var a=s(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.displayName="SpinKit",a}return i(t,f.default.Component),l(t,[{key:"render",value:function(){var e,t=(0,d.default)((e={"sk-fade-in":!this.props.noFadeIn,"sk-spinner":""===this.props.overrideSpinnerClassName},n(e,this.props.overrideSpinnerClassName,!!this.props.overrideSpinnerClassName),n(e,this.props.className,!!this.props.className),e)),a=(0,p.default)({},this.props);delete a.spinnerName,delete a.noFadeIn,delete a.overrideSpinnerClassName,delete a.className;var c=void 0;switch(this.props.spinnerName){case"double-bounce":c=f.default.createElement("div",o({},a,{className:"sk-double-bounce "+t}),f.default.createElement("div",{className:"sk-double-bounce1"}),f.default.createElement("div",{className:"sk-double-bounce2"}));break;case"rotating-plane":c=f.default.createElement("div",o({},a,{className:t}),f.default.createElement("div",{className:"sk-rotating-plane"}));break;case"wave":c=f.default.createElement("div",o({},a,{className:"sk-wave "+t}),f.default.createElement("div",{className:"sk-rect1"}),f.default.createElement("div",{className:"sk-rect2"}),f.default.createElement("div",{className:"sk-rect3"}),f.default.createElement("div",{className:"sk-rect4"}),f.default.createElement("div",{className:"sk-rect5"}));break;case"wandering-cubes":c=f.default.createElement("div",o({},a,{className:"sk-wandering-cubes "+t}),f.default.createElement("div",{className:"sk-cube1"}),f.default.createElement("div",{className:"sk-cube2"}));break;case"pulse":c=f.default.createElement("div",o({},a,{className:t}),f.default.createElement("div",{className:"sk-pulse"}));break;case"chasing-dots":c=f.default.createElement("div",o({},a,{className:t}),f.default.createElement("div",{className:"sk-chasing-dots"},f.default.createElement("div",{className:"sk-dot1"}),f.default.createElement("div",{className:"sk-dot2"})));break;case"circle":c=f.default.createElement("div",o({},a,{className:"sk-circle-wrapper "+t}),f.default.createElement("div",{className:"sk-circle1 sk-circle"}),f.default.createElement("div",{className:"sk-circle2 sk-circle"}),f.default.createElement("div",{className:"sk-circle3 sk-circle"}),f.default.createElement("div",{className:"sk-circle4 sk-circle"}),f.default.createElement("div",{className:"sk-circle5 sk-circle"}),f.default.createElement("div",{className:"sk-circle6 sk-circle"}),f.default.createElement("div",{className:"sk-circle7 sk-circle"}),f.default.createElement("div",{className:"sk-circle8 sk-circle"}),f.default.createElement("div",{className:"sk-circle9 sk-circle"}),f.default.createElement("div",{className:"sk-circle10 sk-circle"}),f.default.createElement("div",{className:"sk-circle11 sk-circle"}),f.default.createElement("div",{className:"sk-circle12 sk-circle"}));break;case"cube-grid":c=f.default.createElement("div",o({},a,{className:"sk-cube-grid "+t}),f.default.createElement("div",{className:"sk-cube"}),f.default.createElement("div",{className:"sk-cube"}),f.default.createElement("div",{className:"sk-cube"}),f.default.createElement("div",{className:"sk-cube"}),f.default.createElement("div",{className:"sk-cube"}),f.default.createElement("div",{className:"sk-cube"}),f.default.createElement("div",{className:"sk-cube"}),f.default.createElement("div",{className:"sk-cube"}),f.default.createElement("div",{className:"sk-cube"}));break;case"folding-cube":c=f.default.createElement("div",o({},a,{className:"sk-folding-cube "+t}),f.default.createElement("div",{className:"sk-cube"}),f.default.createElement("div",{className:"sk-cube"}),f.default.createElement("div",{className:"sk-cube"}),f.default.createElement("div",{className:"sk-cube"}));break;case"wordpress":c=f.default.createElement("div",o({},a,{className:t}),f.default.createElement("div",{className:"sk-wordpress"},f.default.createElement("div",{className:"sk-inner-circle"})));break;case"three-bounce":default:c=f.default.createElement("div",o({},a,{className:"sk-three-bounce "+t}),f.default.createElement("div",{className:"sk-bounce1"}),f.default.createElement("div",{className:"sk-bounce2"}),f.default.createElement("div",{className:"sk-bounce3"}))}return c}}]),t}();m.propTypes={spinnerName:u.default.string.isRequired,noFadeIn:u.default.bool,overrideSpinnerClassName:u.default.string,className:u.default.string},m.defaultProps={spinnerName:"sk-three-bounce",noFadeIn:!1,overrideSpinnerClassName:""},e.exports=m},694:function(e,t,a){var c,n;/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
!function(){"use strict";function a(){for(var e=[],t=0;t<arguments.length;t++){var c=arguments[t];if(c){var n=typeof c;if("string"===n||"number"===n)e.push(c);else if(Array.isArray(c))e.push(a.apply(null,c));else if("object"===n)for(var s in c)r.call(c,s)&&c[s]&&e.push(s)}}return e.join(" ")}var r={}.hasOwnProperty;void 0!==e&&e.exports?e.exports=a:(c=[],void 0!==(n=function(){return a}.apply(t,c))&&(e.exports=n))}()},695:function(e,t,a){"use strict";function c(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var n=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},a=0;a<10;a++)t["_"+String.fromCharCode(a)]=a;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var c={};return"abcdefghijklmnopqrst".split("").forEach(function(e){c[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},c)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var a,i,o=c(e),l=1;l<arguments.length;l++){a=Object(arguments[l]);for(var u in a)r.call(a,u)&&(o[u]=a[u]);if(n){i=n(a);for(var f=0;f<i.length;f++)s.call(a,i[f])&&(o[i[f]]=a[i[f]])}}return o}},696:function(e,t,a){a(275)(a(697),{})},697:function(e,t,a){e.exports=a.p+"1143f7b4835986fc7b7bdf77bb1248ad.css"},698:function(e,t,a){a(275)(a(699),{})},699:function(e,t,a){e.exports=a.p+"05b8008013571ad166a1ad85208cda11.css"},700:function(e,t,a){a(275)(a(701),{})},701:function(e,t,a){e.exports=a.p+"e1a2f3cbd593e6e5d6fc8e948d6f3f22.css"},702:function(e,t,a){a(275)(a(703),{})},703:function(e,t,a){e.exports=a.p+"e8446909bc3464eb7b86faa3a1bcb80c.css"},704:function(e,t,a){a(275)(a(705),{})},705:function(e,t,a){e.exports=a.p+"fb5fc583946eedde1ffc866eb9155ea5.css"},706:function(e,t,a){a(275)(a(707),{})},707:function(e,t,a){e.exports=a.p+"f1a0f4f6cad42e45f1257c230c4981e6.css"},708:function(e,t,a){a(275)(a(709),{})},709:function(e,t,a){e.exports=a.p+"09e3f4eb9aaa709e54303d65edecc8b0.css"},710:function(e,t,a){a(275)(a(711),{})},711:function(e,t,a){e.exports=a.p+"6369dcc818ec82ef8e4799770e918114.css"},712:function(e,t,a){a(275)(a(713),{})},713:function(e,t,a){e.exports=a.p+"53230b3d2f0120ff444019e418dacc92.css"},714:function(e,t,a){a(275)(a(715),{})},715:function(e,t,a){e.exports=a.p+"fc859582076fb8fb48f278a93f7b4236.css"},716:function(e,t,a){a(275)(a(717),{})},717:function(e,t,a){e.exports=a.p+"cfac0379dfce9539b06fea1305e0a4ae.css"},718:function(e,t,a){a(275)(a(719),{})},719:function(e,t,a){e.exports=a.p+"a0fb3daa30c4b6603416712bdb025ad1.css"},722:function(e,t,a){"use strict";function c(e){var t=void 0;return"undefined"!=typeof Reflect&&"function"==typeof Reflect.ownKeys?t=Reflect.ownKeys(e.prototype):(t=Object.getOwnPropertyNames(e.prototype),"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(e.prototype)))),t.forEach(function(t){if("constructor"!==t){var a=Object.getOwnPropertyDescriptor(e.prototype,t);"function"==typeof a.value&&Object.defineProperty(e.prototype,t,n(e,t,a))}}),e}function n(e,t,a){var c=a.value;if("function"!=typeof c)throw new Error("@autobind decorator can only be applied to methods not: "+typeof c);var n=!1;return{configurable:!0,get:function(){if(n||this===e.prototype||this.hasOwnProperty(t))return c;var a=c.bind(this);return n=!0,Object.defineProperty(this,t,{value:a,configurable:!0,writable:!0}),n=!1,a}}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];return 1===t.length?c.apply(void 0,t):n.apply(void 0,t)},e.exports=t.default},845:function(e,t,a){a(275)(a(846),{})},846:function(e,t,a){e.exports=a.p+"105068610994fcf5b7fb05ceba60fdf5.css"},847:function(e,t,a){a(275)(a(848),{})},848:function(e,t,a){e.exports=a.p+"765da772e29ddb2da448b80d455a27ea.css"}});