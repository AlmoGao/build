import{dV as e,dT as t,dX as o,ex as i,dU as n}from"./59977a62.js";import{n as r,r as s}from"./59977a621007.js";import{a as h}from"./59977a621008.js";import{T as a}from"./59977a621042.js";const d={interpolate(e,t,o){if(2!==e.length||2!==t.length)throw new Error("inputRange and outputRange must be an array of length 2");const i=e[0]||0,n=e[1]||0,r=t[0]||0,s=t[1]||0;return o<i?r:o>n?s:(s-r)/(n-i)*(o-i)+r}},c=e`
  :host {
    width: 100%;
    display: block;
  }
`;var l=function(e,t,o,i){var n,r=arguments.length,s=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,i);else for(var h=e.length-1;h>=0;h--)(n=e[h])&&(s=(r<3?n(s):r>3?n(t,o,s):n(t,o))||s);return r>3&&s&&Object.defineProperty(t,o,s),s};let p=class extends t{constructor(){super(),this.unsubscribe=[],this.text="",this.open=a.state.open,this.unsubscribe.push(o.subscribeKey("view",()=>{a.hide()}),i.subscribeKey("open",e=>{e||a.hide()}),a.subscribeKey("open",e=>{this.open=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),a.hide()}render(){return n`
      <div
        @pointermove=${this.onMouseEnter.bind(this)}
        @pointerleave=${this.onMouseLeave.bind(this)}
      >
        ${this.renderChildren()}
      </div>
    `}renderChildren(){return n`<slot></slot> `}onMouseEnter(){const e=this.getBoundingClientRect();if(!this.open){const t=document.querySelector("w3m-modal"),o={width:e.width,height:e.height,left:e.left,top:e.top};if(t){const i=t.getBoundingClientRect();o.left=e.left-(window.innerWidth-i.width)/2,o.top=e.top-(window.innerHeight-i.height)/2}a.showTooltip({message:this.text,triggerRect:o,variant:"shade"})}}onMouseLeave(e){this.contains(e.relatedTarget)||a.hide()}};p.styles=[c],l([r()],p.prototype,"text",void 0),l([s()],p.prototype,"open",void 0),p=l([h("w3m-tooltip-trigger")],p);export{d as M};
