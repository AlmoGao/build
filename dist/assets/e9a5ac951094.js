import{d_ as e,d$ as o}from"./e9a5ac95.js";import{n as t}from"./e9a5ac951080.js";import{o as i}from"./e9a5ac95899.js";import"./e9a5ac951082.js";import{c as r,r as a,e as n,a as s}from"./e9a5ac951081.js";const d=r`
  :host {
    width: 100%;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${({spacing:e})=>e[3]};
    width: 100%;
    background-color: ${({tokens:e})=>e.theme.backgroundPrimary};
    border-radius: ${({borderRadius:e})=>e[4]};
    transition:
      background-color ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      scale ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color, scale;
  }

  wui-text {
    text-transform: capitalize;
  }

  wui-image {
    color: ${({tokens:e})=>e.theme.textPrimary};
  }

  @media (hover: hover) {
    button:hover:enabled {
      background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    }
  }

  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;var l=function(e,o,t,i){var r,a=arguments.length,n=a<3?o:null===i?i=Object.getOwnPropertyDescriptor(o,t):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,o,t,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(a<3?r(n):a>3?r(o,t,n):r(o,t))||n);return a>3&&n&&Object.defineProperty(o,t,n),n};let c=class extends e{constructor(){super(...arguments),this.imageSrc="google",this.loading=!1,this.disabled=!1,this.rightIcon=!0,this.rounded=!1,this.fullSize=!1}render(){return this.dataset.rounded=this.rounded?"true":"false",o`
      <button
        ?disabled=${!!this.loading||Boolean(this.disabled)}
        data-loading=${this.loading}
        tabindex=${i(this.tabIdx)}
      >
        <wui-flex gap="2" alignItems="center">
          ${this.templateLeftIcon()}
          <wui-flex gap="1">
            <slot></slot>
          </wui-flex>
        </wui-flex>
        ${this.templateRightIcon()}
      </button>
    `}templateLeftIcon(){return this.icon?o`<wui-image
        icon=${this.icon}
        iconColor=${i(this.iconColor)}
        ?boxed=${!0}
        ?rounded=${this.rounded}
      ></wui-image>`:o`<wui-image
      ?boxed=${!0}
      ?rounded=${this.rounded}
      ?fullSize=${this.fullSize}
      src=${this.imageSrc}
    ></wui-image>`}templateRightIcon(){return this.rightIcon?this.loading?o`<wui-loading-spinner size="md" color="accent-primary"></wui-loading-spinner>`:o`<wui-icon name="chevronRight" size="lg" color="default"></wui-icon>`:null}};c.styles=[a,n,d],l([t()],c.prototype,"imageSrc",void 0),l([t()],c.prototype,"icon",void 0),l([t()],c.prototype,"iconColor",void 0),l([t({type:Boolean})],c.prototype,"loading",void 0),l([t()],c.prototype,"tabIdx",void 0),l([t({type:Boolean})],c.prototype,"disabled",void 0),l([t({type:Boolean})],c.prototype,"rightIcon",void 0),l([t({type:Boolean})],c.prototype,"rounded",void 0),l([t({type:Boolean})],c.prototype,"fullSize",void 0),c=l([s("wui-list-item")],c);
