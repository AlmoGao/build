import{ee as e,ef as t}from"./7efcc770.js";import{n as o}from"./7efcc770529.js";import{o as r}from"./7efcc770410.js";import{c as i,r as s,a}from"./7efcc770530.js";const d=i`
  :host {
    display: block;
    width: var(--local-width);
    height: var(--local-height);
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    border-radius: inherit;
    user-select: none;
    user-drag: none;
    -webkit-user-drag: none;
    -khtml-user-drag: none;
    -moz-user-drag: none;
    -o-user-drag: none;
  }

  :host([data-boxed='true']) {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  :host([data-boxed='true']) img {
    width: 20px;
    height: 20px;
    border-radius: ${({borderRadius:e})=>e[16]};
  }

  :host([data-full='true']) img {
    width: 100%;
    height: 100%;
  }

  :host([data-boxed='true']) wui-icon {
    width: 20px;
    height: 20px;
  }

  :host([data-icon='error']) {
    background-color: ${({tokens:e})=>e.core.backgroundError};
  }

  :host([data-rounded='true']) {
    border-radius: ${({borderRadius:e})=>e[16]};
  }
`;var n=function(e,t,o,r){var i,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,r);else for(var d=e.length-1;d>=0;d--)(i=e[d])&&(a=(s<3?i(a):s>3?i(t,o,a):i(t,o))||a);return s>3&&a&&Object.defineProperty(t,o,a),a};let h=class extends e{constructor(){super(...arguments),this.src="./path/to/image.jpg",this.alt="Image",this.size=void 0,this.boxed=!1,this.rounded=!1,this.fullSize=!1}render(){const e={inherit:"inherit",xxs:"2",xs:"3",sm:"4",md:"4",mdl:"5",lg:"5",xl:"6",xxl:"7","3xl":"8","4xl":"9","5xl":"10"};return this.style.cssText=`\n      --local-width: ${this.size?`var(--apkt-spacing-${e[this.size]});`:"100%"};\n      --local-height: ${this.size?`var(--apkt-spacing-${e[this.size]});`:"100%"};\n      `,this.dataset.boxed=this.boxed?"true":"false",this.dataset.rounded=this.rounded?"true":"false",this.dataset.full=this.fullSize?"true":"false",this.dataset.icon=this.iconColor||"inherit",this.icon?t`<wui-icon
        color=${this.iconColor||"inherit"}
        name=${this.icon}
        size="lg"
      ></wui-icon> `:this.logo?t`<wui-icon size="lg" color="inherit" name=${this.logo}></wui-icon> `:t`<img src=${r(this.src)} alt=${this.alt} @error=${this.handleImageError} />`}handleImageError(){this.dispatchEvent(new CustomEvent("onLoadError",{bubbles:!0,composed:!0}))}};h.styles=[s,d],n([o()],h.prototype,"src",void 0),n([o()],h.prototype,"logo",void 0),n([o()],h.prototype,"icon",void 0),n([o()],h.prototype,"iconColor",void 0),n([o()],h.prototype,"alt",void 0),n([o()],h.prototype,"size",void 0),n([o({type:Boolean})],h.prototype,"boxed",void 0),n([o({type:Boolean})],h.prototype,"rounded",void 0),n([o({type:Boolean})],h.prototype,"fullSize",void 0),h=n([a("wui-image")],h);
