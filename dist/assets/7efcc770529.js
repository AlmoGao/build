import{fF as t,fG as e,ef as s,fH as r}from"./7efcc770.js";
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const n={attribute:!0,type:String,converter:e,reflect:!1,hasChanged:t},i=(t=n,e,s)=>{const{kind:r,metadata:i}=s;let o=globalThis.litPropertyMetadata.get(i);if(void 0===o&&globalThis.litPropertyMetadata.set(i,o=new Map),"setter"===r&&((t=Object.create(t)).wrapped=!0),o.set(s.name,t),"accessor"===r){const{name:r}=s;return{set(s){const n=e.get.call(this);e.set.call(this,s),this.requestUpdate(r,n,t)},init(e){return void 0!==e&&this.C(r,void 0,t,e),e}}}if("setter"===r){const{name:r}=s;return function(s){const n=this[r];e.call(this,s),this.requestUpdate(r,n,t)}}throw Error("Unsupported decorator location: "+r)};function o(t){return(e,s)=>"object"==typeof s?i(t,e,s):((t,e,s)=>{const r=e.hasOwnProperty(s);return e.constructor.createProperty(s,t),r?Object.getOwnPropertyDescriptor(e,s):void 0})(t,e,s)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function a(t){return o({...t,state:!0,attribute:!1})}
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const c=Symbol.for(""),h=t=>{if(t?.r===c)return t?._$litStatic$},l=t=>({_$litStatic$:t,r:c}),u=new Map,d=(p=s,(t,...e)=>{const s=e.length;let r,n;const i=[],o=[];let a,c=0,l=!1;for(;c<s;){for(a=t[c];c<s&&void 0!==(n=e[c],r=h(n));)a+=r+t[++c],l=!0;c!==s&&o.push(n),i.push(a),c++}if(c===s&&i.push(t[s]),l){const s=i.join("$$lit$$");void 0===(t=u.get(s))&&(i.raw=i,u.set(s,t=i)),e=o}return p(t,...e)});
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var p;const f={ATTRIBUTE:1,CHILD:2},$=t=>(...e)=>({_$litDirective$:t,values:e});class g{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,s){this._$Ct=t,this._$AM=e,this._$Ci=s}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const v=$(class extends g{constructor(t){if(super(t),t.type!==f.ATTRIBUTE||"class"!==t.name||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){if(void 0===this.st){this.st=new Set,void 0!==t.strings&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(t=>""!==t)));for(const t in e)e[t]&&!this.nt?.has(t)&&this.st.add(t);return this.render(e)}const s=t.element.classList;for(const r of this.st)r in e||(s.remove(r),this.st.delete(r));for(const r in e){const t=!!e[r];t===this.st.has(r)||this.nt?.has(r)||(t?(s.add(r),this.st.add(r)):(s.remove(r),this.st.delete(r)))}return r}});export{v as a,$ as e,g as i,o as n,a as r,l as s,f as t,d as u};
