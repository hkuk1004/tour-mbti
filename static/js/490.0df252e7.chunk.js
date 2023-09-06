/*! For license information please see 490.0df252e7.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunktour_mbti=self.webpackChunktour_mbti||[]).push([[490],{1568:function(t,n,e){e.r(n),e.d(n,{default:function(){return E}});var r,o,i,a,c,u,s=e(4165),h=e(5861),f=e(9439),l=e(168),d=e(2791),p=e.p+"static/media/popup_2.ce3977a466fb3d5ad2bd.png",v=(e(7843),e(7689)),g=e(5867),y=e(1243),m=e(184),w=g.ZP.div(r||(r=(0,l.Z)(["\n  position: fixed;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 100;\n"]))),x=g.ZP.div(o||(o=(0,l.Z)(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"]))),b=g.ZP.button(i||(i=(0,l.Z)(["\n  position: absolute;\n  width: 100%;\n  max-width: 350px;\n  height: 58px;\n  bottom: 20%;\n  background: #ffffff;\n  box-shadow: 0px 0px 10px rgba(0, 28, 145, 0.2);\n  border-radius: 8px;\n  cursor: pointer;\n  text-align: center;\n  font-weight: bold;\n  letter-spacing: 0.5em;\n  font-size: 18px;\n  color: #00b0d3;\n\n  @media (max-width: 720px) {\n    font-size: 1em;\n    width: 80%;\n    max-width: 350px;\n    height: 58px;\n    bottom: 20%;\n  }\n\n  @media (max-height: 600px) {\n    font-size: 1em;\n    height: 58px;\n    bottom: 20%;\n  }\n\n  @media (max-aspect-ratio: 4/3) {\n    font-size: 1em;\n    height: 58px;\n    bottom: 20%;\n  }\n"]))),A=g.ZP.img(a||(a=(0,l.Z)(["\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  cursor: pointer;\n"]))),j=(g.ZP.img(c||(c=(0,l.Z)(["\n  position: absolute;\n  top: 3%;\n  right: 3%;\n  width: 5%;\n  max-width: 26px;\n  height: auto;\n  cursor: pointer;\n  z-index: 2;\n\n  @media (max-width: 720px) {\n    display: none;\n  }\n"]))),g.ZP.div(u||(u=(0,l.Z)(["\n  position: absolute;\n  bottom: 10%;\n  font-size: 0.6em;\n"]))));var E=function(){var t=(0,d.useState)(""),n=(0,f.Z)(t,2),e=n[0],r=n[1],o=(0,d.useState)(""),i=(0,f.Z)(o,2),a=i[0],c=i[1],u=(0,d.useState)(!1),l=(0,f.Z)(u,2),g=l[0],E=l[1],L=(0,d.useState)(!1),Z=(0,f.Z)(L,2),O=Z[0],S=Z[1],k=(0,v.s0)();(0,d.useEffect)((function(){var t;E(!0),null===(t=window.ReactNativeWebView)||void 0===t||t.postMessage(JSON.stringify(!0)),document.addEventListener("message",(function(t){try{var n=JSON.parse(t.data);r(n.id),c(n.jwt),S(!0)}catch(e){console.log(e)}})),window.addEventListener("message",(function(t){try{var n=JSON.parse(t.data);r(n.id),c(n.jwt),S(!0)}catch(e){console.log(e)}}))}),[]),(0,d.useEffect)((function(){var t=function(){var t=(0,h.Z)((0,s.Z)().mark((function t(){return(0,s.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,y.Z)({method:"post",url:"".concat("https://dltour.data-labs.co.kr/api","/surbey/check"),headers:{Authorization:a}}).then((function(t){console.log(t.data),0===t.data.message&&k("/result",{state:{jwt:a,userId:e}})})).catch((function(t){console.log(t)}));case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();O&&t()}),[O]);var I=function(){E(!1),k("/question",{state:{jwt:a,userId:e}})};return(0,m.jsx)(m.Fragment,{children:g&&(0,m.jsx)(w,{children:(0,m.jsxs)(x,{children:[(0,m.jsx)(A,{src:p,alt:"Modal Image",onClick:I}),(0,m.jsx)(b,{onClick:I,children:"\uc2dc\uc791\ud558\uae30"}),(0,m.jsx)(j,{children:"\uc5ec\ud589\uc9c0 \uc81c\uacf5 : TourAPI4.0"})]})})})}},7843:function(t){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE4AAABOCAYAAACOqiAdAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHISURBVHgB7dtdTQNBFIbhFwdI+CQgAQl1gARwABKQghMkgIPiAHZTDint7vZ/Omfne5Nzw9XkSWjnJwXnnHPOOeecc8413WM3H928d7MgX3es1r7s5plCqZvvjXkgTz1aD7a+/nsKdM82XBa8IbR+nijQLat/02x4Y2j930ShRC68KbQ7Cidy4FWFFom68apEi0SdeFWjRaIuvBRokagDLxVaJK6LlxItEtfBS40WibJ4s0CLRBm8WaFF4rJ4s0SLxGXwZo0WifPiNYEWifPgNYUWidPwmkSLxHF4TaNF4jA8o60l9sMz2kBiGs9oE4lxPKPtSIzjGW1HYhrPaBMtGId7wQ029kWw7z6vyfZBM95GU1uOsc+85vF27dOE8bbad3MrjPfXoScCYbyjj1GiYbxTz56iQbxzHdhFQ3jnvuUQDeBd6mpIzBjv0vdpYoZ4pS4hxYzwSt/cihngXeu6WyTGu/YbgUiIV8vDikiEV9trlEiAV+sTnqgYr/Z3T1EhXpbHYlERXrYXdlEJ3jt50CIxjNev+5ZCLcmFFolhvGJwT+RDi8R/vFeO6IbjW/wu4q2bT3IlVr/0/mK1fuecc84555xzLn0/Z+loeutEG1MAAAAASUVORK5CYII="},5861:function(t,n,e){function r(t,n,e,r,o,i,a){try{var c=t[i](a),u=c.value}catch(s){return void e(s)}c.done?n(u):Promise.resolve(u).then(r,o)}function o(t){return function(){var n=this,e=arguments;return new Promise((function(o,i){var a=t.apply(n,e);function c(t){r(a,o,i,c,u,"next",t)}function u(t){r(a,o,i,c,u,"throw",t)}c(void 0)}))}}e.d(n,{Z:function(){return o}})},4165:function(t,n,e){e.d(n,{Z:function(){return o}});var r=e(1002);function o(){o=function(){return t};var t={},n=Object.prototype,e=n.hasOwnProperty,i=Object.defineProperty||function(t,n,e){t[n]=e.value},a="function"==typeof Symbol?Symbol:{},c=a.iterator||"@@iterator",u=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag";function h(t,n,e){return Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[n]}try{h({},"")}catch(k){h=function(t,n,e){return t[n]=e}}function f(t,n,e,r){var o=n&&n.prototype instanceof p?n:p,a=Object.create(o.prototype),c=new O(r||[]);return i(a,"_invoke",{value:j(t,e,c)}),a}function l(t,n,e){try{return{type:"normal",arg:t.call(n,e)}}catch(k){return{type:"throw",arg:k}}}t.wrap=f;var d={};function p(){}function v(){}function g(){}var y={};h(y,c,(function(){return this}));var m=Object.getPrototypeOf,w=m&&m(m(S([])));w&&w!==n&&e.call(w,c)&&(y=w);var x=g.prototype=p.prototype=Object.create(y);function b(t){["next","throw","return"].forEach((function(n){h(t,n,(function(t){return this._invoke(n,t)}))}))}function A(t,n){function o(i,a,c,u){var s=l(t[i],t,a);if("throw"!==s.type){var h=s.arg,f=h.value;return f&&"object"==(0,r.Z)(f)&&e.call(f,"__await")?n.resolve(f.__await).then((function(t){o("next",t,c,u)}),(function(t){o("throw",t,c,u)})):n.resolve(f).then((function(t){h.value=t,c(h)}),(function(t){return o("throw",t,c,u)}))}u(s.arg)}var a;i(this,"_invoke",{value:function(t,e){function r(){return new n((function(n,r){o(t,e,n,r)}))}return a=a?a.then(r,r):r()}})}function j(t,n,e){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return{value:void 0,done:!0}}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var c=E(a,e);if(c){if(c===d)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===r)throw r="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);r="executing";var u=l(t,n,e);if("normal"===u.type){if(r=e.done?"completed":"suspendedYield",u.arg===d)continue;return{value:u.arg,done:e.done}}"throw"===u.type&&(r="completed",e.method="throw",e.arg=u.arg)}}}function E(t,n){var e=n.method,r=t.iterator[e];if(void 0===r)return n.delegate=null,"throw"===e&&t.iterator.return&&(n.method="return",n.arg=void 0,E(t,n),"throw"===n.method)||"return"!==e&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+e+"' method")),d;var o=l(r,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,d;var i=o.arg;return i?i.done?(n[t.resultName]=i.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=void 0),n.delegate=null,d):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,d)}function L(t){var n={tryLoc:t[0]};1 in t&&(n.catchLoc=t[1]),2 in t&&(n.finallyLoc=t[2],n.afterLoc=t[3]),this.tryEntries.push(n)}function Z(t){var n=t.completion||{};n.type="normal",delete n.arg,t.completion=n}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function S(t){if(t||""===t){var n=t[c];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function n(){for(;++o<t.length;)if(e.call(t,o))return n.value=t[o],n.done=!1,n;return n.value=void 0,n.done=!0,n};return i.next=i}}throw new TypeError((0,r.Z)(t)+" is not iterable")}return v.prototype=g,i(x,"constructor",{value:g,configurable:!0}),i(g,"constructor",{value:v,configurable:!0}),v.displayName=h(g,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var n="function"==typeof t&&t.constructor;return!!n&&(n===v||"GeneratorFunction"===(n.displayName||n.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,h(t,s,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},b(A.prototype),h(A.prototype,u,(function(){return this})),t.AsyncIterator=A,t.async=function(n,e,r,o,i){void 0===i&&(i=Promise);var a=new A(f(n,e,r,o),i);return t.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},b(x),h(x,s,"Generator"),h(x,c,(function(){return this})),h(x,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var n=Object(t),e=[];for(var r in n)e.push(r);return e.reverse(),function t(){for(;e.length;){var r=e.pop();if(r in n)return t.value=r,t.done=!1,t}return t.done=!0,t}},t.values=S,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(Z),!t)for(var n in this)"t"===n.charAt(0)&&e.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function r(e,r){return a.type="throw",a.arg=t,n.next=e,r&&(n.method="next",n.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var c=e.call(i,"catchLoc"),u=e.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,n){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&e.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=n&&n<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=n,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(t,n){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&n&&(this.next=n),d},finish:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),Z(e),d}},catch:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.tryLoc===t){var r=e.completion;if("throw"===r.type){var o=r.arg;Z(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,e){return this.delegate={iterator:S(t),resultName:n,nextLoc:e},"next"===this.method&&(this.arg=void 0),d}},t}}}]);
//# sourceMappingURL=490.0df252e7.chunk.js.map