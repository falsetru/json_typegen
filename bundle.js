(()=>{"use strict";var t={m:{},u:t=>t+".bundle.js"};t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),t.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var o=t.g.document;if(!e&&o&&(o.currentScript&&(e=o.currentScript.src),!e)){var n=o.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href;const e=t=>document.getElementById(t);let o;!function(){let t;try{let e=localStorage.getItem("json_typegen_params");t=e&&JSON.parse(e)}catch(t){console.error(t)}t&&(t.typename&&(e("typename").value=t.typename),t.input&&(e("input").value=t.input),t.options&&(e("outputmode").value=t.options.output_mode,e("propertynameformat").value=t.options.property_name_format,e("unwrap").value=t.options.unwrap,t.options.import_style&&(e("importstyle").value=t.options.import_style),t.options.collect_additional&&(e("collectadditional").checked=t.options.collect_additional)),t.extraoptions&&(e("extraoptions").value=t.extraoptions))}();const n=new Worker(new URL(t.p+t.u(770),t.b));let a,s=!1;const i=()=>{const t=e("typename").value;let o=e("input").value;const n={output_mode:e("outputmode").value,property_name_format:e("propertynameformat").value,import_style:e("importstyle").value,unwrap:e("unwrap").value,collect_additional:e("collectadditional").checked},a=e("extraoptions"),s=a.value;let i;try{i=s&&JSON.parse(s),a.classList.remove("is-danger")}catch(t){a.classList.add("is-danger")}var r;r={typename:t,input:o.length<1e6?o:"",options:n,extraoptions:i?s:void 0},localStorage.setItem("json_typegen_params",JSON.stringify(r));l({type:"CODEGEN",typename:t,input:o||"{}",options:Object.assign({},n,i||{})})};function l(t){s?(n.postMessage(t),s=!1,e("target-wrapper").classList.add("is-loading")):a=t}function r(){const t={propertynameformat:["rust","kotlin/jackson","python"],importstyle:["rust","kotlin/jackson","kotlin/kotlinx","python"],collectadditional:["rust","kotlin/jackson"]},o=e("outputmode").value;for(let n in t)t[n].includes(o)?e(n+"-wrapper").style.display="block":e(n+"-wrapper").style.display="none"}n.onmessage=t=>{const n=t.data;if("CODEGEN_COMPLETE"===n.type){e("target-wrapper").classList.remove("is-loading");const t=e("target");t.value=n.result.trim(),t.style.height="10px",t.style.height=t.scrollHeight+5+"px",function(t,n,a){o&&URL.revokeObjectURL(o);const s=new Blob([t],{type:"text/plain"});o=URL.createObjectURL(s);const i=e("filedownload");i.href=o,i.download=function(t,e){return t+"."+{rust:"rs",typescript:"ts","typescript/typealias":"ts","kotlin/jackson":"kt","kotlin/kotlinx":"kt",python:"py",json_schema:"json",shape:"json"}[e]}(n,a.output_mode)}(n.result,n.typename,n.options)}else"LOAD_FILE_COMPLETE"===n.type?(e("large-file-spinner").classList.add("is-invisible"),e("clear-input-button").classList.remove("is-invisible")):"WASM_READY"===n.type||console.warn("Unknown worker message ",t);s=!0,a&&(l(a),a=void 0)},e("typename").onkeyup=i,e("input").onkeyup=i,e("outputmode").onchange=()=>{r(),i()},e("propertynameformat").onchange=i,e("importstyle").onchange=i,e("collectadditional").onchange=i,e("unwrap").onkeyup=i,e("extraoptions").onkeyup=i,e("loadfile").onchange=t=>{const o=t.target.files[0];if(o)if(o.size>1e6){e("input").value="",e("large-file-overlay").classList.remove("is-invisible"),e("large-file-spinner").classList.remove("is-invisible"),e("clear-input-button").classList.add("is-invisible");const t=(o.size/1e6).toFixed(2);e("large-file-message").textContent=`"${o.name}" (${t} MB)`,n.postMessage({type:"LOAD_FILE",file:o}),s=!1,i()}else{const t=new FileReader;t.onload=t=>{e("input").value=t.target.result,i()},t.readAsText(o)}},e("clear-input-button").onclick=()=>{n.postMessage({type:"CLEAR_FILE"}),e("large-file-overlay").classList.add("is-invisible"),e("input").value="",i()},e("format-json-button").onclick=()=>{try{const t=e("input");t.value=JSON.stringify(JSON.parse(t.value),void 0,2)}catch(t){return void alert("Unable to parse input as JSON")}i()},r(),i()})();