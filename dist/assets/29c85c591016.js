import{dT as e,dU as t}from"./29c85c59.js";import{n as r}from"./29c85c591007.js";import{c as o,a as i}from"./29c85c591008.js";const s=o`
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
`;var d=function(e,t,r,o){var i,s=arguments.length,d=s<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)d=Reflect.decorate(e,t,r,o);else for(var n=e.length-1;n>=0;n--)(i=e[n])&&(d=(s<3?i(d):s>3?i(t,r,d):i(t,r))||d);return s>3&&d&&Object.defineProperty(t,r,d),d};let n=class extends e{constructor(){super(...arguments),this.width="",this.height="",this.variant="default",this.rounded=!1}render(){return this.style.cssText=`\n      width: ${this.width};\n      height: ${this.height};\n    `,this.dataset.rounded=this.rounded?"true":"false",t`<slot></slot>`}};n.styles=[s],d([r()],n.prototype,"width",void 0),d([r()],n.prototype,"height",void 0),d([r()],n.prototype,"variant",void 0),d([r({type:Boolean})],n.prototype,"rounded",void 0),n=d([i("wui-shimmer")],n);
