(()=>{"use strict";var e,t,r,n={144:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(645),o=r.n(n)()((function(e){return e[1]}));o.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Open+Sans&display=swap);"]),o.push([e.id,'*,*::after,*::before{margin:0;padding:0;box-sizing:border-box}html{font-size:62.5%;font-family:"Open Sans",sans-serif;background-color:#ececec}.header{background-color:#0b0069;padding:2rem 0;border-bottom:.1rem solid #353434}.nav{display:flex;align-items:center}.nav__logo{width:3%;margin-left:2.5rem}.nav__text{color:#fff;margin-left:1rem;font-size:2rem}.info-section{display:flex;justify-content:space-between;background-color:#0b0069;padding:10rem 0 14rem 0;color:#e7e7e7}.covid-info{width:50%;padding:2rem 3rem}.covid-info__heading{font-size:3.5rem;padding:2rem 0}.covid-info__paragraph{font-size:2rem;padding:2rem 0 3rem 0}.btn{border-radius:.5rem;cursor:pointer;transition:all .2s ease-in;padding:1.1rem;color:#fff}.btn--primary{background-color:#af0303;border:.1rem solid #fff}.btn--secondary{background-color:#0b0069;margin-left:1rem;text-transform:uppercase;border:.1rem solid #fff}.btn:hover{transform:translateY(0.2rem);box-shadow:5px 4px 19px -1px rgba(255,255,255,.64)}.btn:focus{outline:none}.img-container{display:flex;justify-content:center;width:50%}.img-container__img{width:50%;animation:spin 30s linear infinite}.primary-stats{display:flex;justify-content:space-around;background-color:#fff;width:90%;margin:0 auto;margin-top:-5rem;padding:5rem 2rem;border-radius:1rem;box-shadow:5px 4px 19px -1px rgba(0,0,0,.64)}.stats-container{display:flex;flex-direction:column;align-items:center}.stats-container__img{width:20%}.stats-container__paragraph{font-size:1.5rem;margin-top:2rem}.stats-container__stats{font-size:2.5rem;margin-top:1rem}.secondary-stats{display:flex;justify-content:space-between;margin:0 auto;width:90%;max-height:800px;margin-top:10rem;margin-bottom:50rem}.secondary-stats-container-left{align-items:center;background-color:#fff;width:70%;padding:5rem 2rem;box-shadow:5px 4px 19px -1px rgba(0,0,0,.24)}.heading-tertiary{text-align:center;padding:2rem 0 5rem 0;font-size:2rem}.card-container-stats{display:flex;justify-content:center;flex-wrap:wrap}.card-stats{position:relative;display:flex;flex-direction:column;justify-content:center;width:20%;margin:4rem 3rem;padding:5rem 2rem 2rem 2rem;color:#fff}.card-stats__img{position:absolute;width:5rem;top:-2.5rem;left:0;right:0;margin:auto}.card-stats__stats{text-align:center;font-size:3rem}.card-stats__description{text-align:center;font-size:1.5rem;margin-top:.5rem}.card-stats--cases{background-color:#006e40}.card-stats--deaths{background-color:#1e699b}.card-stats--intensive{background-color:#460c88}.card-stats--cases-mil{background-color:#5906b8}.card-stats--deaths-mil{background-color:#0f3650}.card-stats--new{background-color:#3b928b}.secondary-stats-container-right{width:25%;background-color:#fff;box-shadow:5px 4px 19px -1px rgba(0,0,0,.64)}.input{width:90%;padding:1rem 0 1rem .8rem;border:.1rem solid #d3d3d3;border-radius:.5rem;outline:none}@keyframes spin{100%{transform:rotate(360deg)}}',""]);const a=o},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r=e(t);return t[2]?"@media ".concat(t[2]," {").concat(r,"}"):r})).join("")},t.i=function(e,r,n){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(n)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var s=0;s<e.length;s++){var c=[].concat(e[s]);n&&o[c[0]]||(r&&(c[2]?c[2]="".concat(r," and ").concat(c[2]):c[2]=r),t.push(c))}},t}},379:(e,t,r)=>{var n,o=function(){var e={};return function(t){if(void 0===e[t]){var r=document.querySelector(t);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}e[t]=r}return e[t]}}(),a=[];function i(e){for(var t=-1,r=0;r<a.length;r++)if(a[r].identifier===e){t=r;break}return t}function s(e,t){for(var r={},n=[],o=0;o<e.length;o++){var s=e[o],c=t.base?s[0]+t.base:s[0],d=r[c]||0,l="".concat(c," ").concat(d);r[c]=d+1;var f=i(l),m={css:s[1],media:s[2],sourceMap:s[3]};-1!==f?(a[f].references++,a[f].updater(m)):a.push({identifier:l,updater:g(m,t),references:1}),n.push(l)}return n}function c(e){var t=document.createElement("style"),n=e.attributes||{};if(void 0===n.nonce){var a=r.nc;a&&(n.nonce=a)}if(Object.keys(n).forEach((function(e){t.setAttribute(e,n[e])})),"function"==typeof e.insert)e.insert(t);else{var i=o(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}return t}var d,l=(d=[],function(e,t){return d[e]=t,d.filter(Boolean).join("\n")});function f(e,t,r,n){var o=r?"":n.media?"@media ".concat(n.media," {").concat(n.css,"}"):n.css;if(e.styleSheet)e.styleSheet.cssText=l(t,o);else{var a=document.createTextNode(o),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(a,i[t]):e.appendChild(a)}}function m(e,t,r){var n=r.css,o=r.media,a=r.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var u=null,p=0;function g(e,t){var r,n,o;if(t.singleton){var a=p++;r=u||(u=c(t)),n=f.bind(null,r,a,!1),o=f.bind(null,r,a,!0)}else r=c(t),n=m.bind(null,r,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(r)};return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===n&&(n=Boolean(window&&document&&document.all&&!window.atob)),n));var r=s(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var n=0;n<r.length;n++){var o=i(r[n]);a[o].references--}for(var c=s(e,t),d=0;d<r.length;d++){var l=i(r[d]);0===a[l].references&&(a[l].updater(),a.splice(l,1))}r=c}}}}},o={};function a(e){if(o[e])return o[e].exports;var t=o[e]={id:e,exports:{}};return n[e](t,t.exports,a),t.exports}a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e=a(379),t=a.n(e),r=a(144),t()(r.Z,{insert:"head",singleton:!1}),r.Z.locals})();