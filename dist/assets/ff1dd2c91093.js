import{e1 as e,e2 as t}from"./ff1dd2c9.js";import{n as r}from"./ff1dd2c91084.js";import{c as o,a as i}from"./ff1dd2c91085.js";const d=o`
  :host {
    display: block;
    background: linear-gradient(
      90deg,
      ${({tokens:e})=>e.theme.foregroundSecondary} 0%,
      ${({tokens:e})=>e.theme.foregroundTertiary} 50%,
      ${({tokens:e})=>e.theme.foregroundSecondary} 100%
    );
    background-size: 200% 100%;
    animation: shimmer 1s ease-in-out infinite;
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  :host([data-rounded='true']) {
    border-radius: ${({borderRadius:e})=>e[16]};
  }

  @keyframes shimmer {
    0% {
      background-position: 200% 0;
    }
    100% {
      background-position: -200% 0;
    }
  }
`;var s=function(e,t,r,o){var i,d=arguments.length,s=d<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,o);else for(var n=e.length-1;n>=0;n--)(i=e[n])&&(s=(d<3?i(s):d>3?i(t,r,s):i(t,r))||s);return d>3&&s&&Object.defineProperty(t,r,s),s};let n=class extends e{constructor(){super(...arguments),this.width="",this.height="",this.variant="default",this.rounded=!1}render(){return this.style.cssText=`\n      width: ${this.width};\n      height: ${this.height};\n    `,this.dataset.rounded=this.rounded?"true":"false",t`<slot></slot>`}};n.styles=[d],s([r()],n.prototype,"width",void 0),s([r()],n.prototype,"height",void 0),s([r()],n.prototype,"variant",void 0),s([r({type:Boolean})],n.prototype,"rounded",void 0),n=s([i("wui-shimmer")],n);
