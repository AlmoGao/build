import{dP as e,dQ as t}from"./6db743d6.js";import{n as r}from"./6db743d6937.js";import{c as o,a as d}from"./6db743d6938.js";const i=o`
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
`;var s=function(e,t,r,o){var d,i=arguments.length,s=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,o);else for(var n=e.length-1;n>=0;n--)(d=e[n])&&(s=(i<3?d(s):i>3?d(t,r,s):d(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s};let n=class extends e{constructor(){super(...arguments),this.width="",this.height="",this.variant="default",this.rounded=!1}render(){return this.style.cssText=`\n      width: ${this.width};\n      height: ${this.height};\n    `,this.dataset.rounded=this.rounded?"true":"false",t`<slot></slot>`}};n.styles=[i],s([r()],n.prototype,"width",void 0),s([r()],n.prototype,"height",void 0),s([r()],n.prototype,"variant",void 0),s([r({type:Boolean})],n.prototype,"rounded",void 0),n=s([d("wui-shimmer")],n);
