parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"wcyC":[function(require,module,exports) {
const t={btnContainer:document.querySelector(".customer_swipe_container"),articleContainer:document.querySelector(".customer__box")};function e(e){if("button"===e.target.type){const c=e.target,r=[...e.currentTarget.children],o=[...t.articleContainer.children];n(r,"chosen"),n(o,"card_shown"),c.classList.add("chosen"),o[r.indexOf(c)].classList.add("card_shown")}}function n(t,e){[...t].forEach(t=>{t.classList.contains(e)&&t.classList.remove(e)})}t.btnContainer.addEventListener("click",e);
},{}]},{},["wcyC"], null)
//# sourceMappingURL=/01-team-project-ice-cream-website/swipeComment.ebbd9031.js.map