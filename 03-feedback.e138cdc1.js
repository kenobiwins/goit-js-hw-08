!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,c=parseInt,l="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,s=l||d||Function("return this")(),m=Object.prototype.toString,v=Math.max,g=Math.min,p=function(){return s.Date.now()};function y(e,t,n){var r,i,a,u,f,c,l=0,d=!1,s=!1,m=!0;if("function"!=typeof e)throw new TypeError(o);function y(t){var n=r,o=i;return r=i=void 0,l=t,u=e.apply(o,n)}function j(e){return l=e,f=setTimeout(O,t),d?y(e):u}function I(e){var n=e-c;return void 0===c||n>=t||n<0||s&&e-l>=a}function O(){var e=p();if(I(e))return T(e);f=setTimeout(O,function(e){var n=t-(e-c);return s?g(n,a-(e-l)):n}(e))}function T(e){return f=void 0,m&&r?y(e):(r=i=void 0,u)}function w(){var e=p(),n=I(e);if(r=arguments,i=this,c=e,n){if(void 0===f)return j(c);if(s)return f=setTimeout(O,t),y(c)}return void 0===f&&(f=setTimeout(O,t)),u}return t=h(t)||0,b(n)&&(d=!!n.leading,a=(s="maxWait"in n)?v(h(n.maxWait)||0,t):a,m="trailing"in n?!!n.trailing:m),w.cancel=function(){void 0!==f&&clearTimeout(f),l=0,r=c=i=f=void 0},w.flush=function(){return void 0===f?u:T(p())},w}function b(t){var n=void 0===t?"undefined":e(r)(t);return!!t&&("object"==n||"function"==n)}function h(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(r)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==m.call(t)}(t))return NaN;if(b(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=b(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var o=u.test(t);return o||f.test(t)?c(t.slice(2),o?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError(o);return b(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),y(e,t,{leading:r,maxWait:t,trailing:i})};var j={readItem:function(e,t){try{return JSON.parse(localStorage.getItem(e))}catch(e){console.error(e.name)}},updateItem:function(e,t){try{return null===j.readItem?void 0:localStorage.setItem(e,JSON.stringify(t))}catch(e){console.error(e.massage)}},deleteItem:function(e){return localStorage.removeItem(e)}},I=document.querySelector(".feedback-form"),O=I.email,T=I.message,w="feedback-form-state",S={};I.addEventListener("input",e(t)((function(e){var t=e.target,n=t.name,r=t.value;S[n]=r,j.updateItem(w,S)}),500)),I.addEventListener("submit",(function(e){e.preventDefault(),new FormData(e.currentTarget).forEach((function(e,t){console.log("".concat(t," : ").concat(e))})),e.currentTarget.reset(),j.deleteItem(w)})),addEventListener("DOMContentLoaded",(function(e){var t=j.readItem(w);t&&(O.value=t.email,T.value=t.message)}))}();
//# sourceMappingURL=03-feedback.e138cdc1.js.map
