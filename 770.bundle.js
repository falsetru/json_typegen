(()=>{"use strict";var e,t,n,r={770:(e,t,n)=>{let r,o;n.e(928).then(n.bind(n,928)).then((e=>{r=e,postMessage({type:"WASM_READY"})})),onmessage=e=>{const t=e.data;if("CODEGEN"===t.type){const e=o||t.input,n=r.run(t.typename,e,JSON.stringify(t.options));postMessage({type:"CODEGEN_COMPLETE",result:n,typename:t.typename,options:t.options})}else if("LOAD_FILE"===t.type){const e=new FileReader;e.onload=e=>{o=e.target.result,postMessage({type:"LOAD_FILE_COMPLETE"})},e.readAsText(t.file)}else"CLEAR_FILE"===t.type?o=void 0:console.warn("Unknown message to worker",e)}}},o={};function s(e){var t=o[e];if(void 0!==t)return t.exports;var n=o[e]={id:e,loaded:!1,exports:{}};return r[e](n,n.exports,s),n.loaded=!0,n.exports}s.m=r,s.c=o,s.d=(e,t)=>{for(var n in t)s.o(t,n)&&!s.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},s.f={},s.e=e=>Promise.all(Object.keys(s.f).reduce(((t,n)=>(s.f[n](e,t),t)),[])),s.u=e=>e+".bundle.js",s.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),s.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),s.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;s.g.importScripts&&(e=s.g.location+"");var t=s.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),s.p=e})(),(()=>{var e={770:1};s.f.i=(t,n)=>{e[t]||importScripts(s.p+s.u(t))};var t=self.webpackChunkjson_typegen_web=self.webpackChunkjson_typegen_web||[],n=t.push.bind(t);t.push=t=>{var[r,o,i]=t;for(var a in o)s.o(o,a)&&(s.m[a]=o[a]);for(i&&i(s);r.length;)e[r.pop()]=1;n(t)}})(),e={},t={368:function(){return{}}},n={928:[368]},s.w={},s.f.wasm=function(r,o){(n[r]||[]).forEach((function(n,i){var a=e[n];if(a)o.push(a);else{var p,c=t[n](),l=fetch(s.p+""+{928:{368:"f998b601cf837a38190b"}}[r][n]+".module.wasm");p=c&&"function"==typeof c.then&&"function"==typeof WebAssembly.compileStreaming?Promise.all([WebAssembly.compileStreaming(l),c]).then((function(e){return WebAssembly.instantiate(e[0],e[1])})):"function"==typeof WebAssembly.instantiateStreaming?WebAssembly.instantiateStreaming(l,c):l.then((function(e){return e.arrayBuffer()})).then((function(e){return WebAssembly.instantiate(e,c)})),o.push(e[n]=p.then((function(e){return s.w[n]=(e.instance||e).exports})))}}))},s(770)})();