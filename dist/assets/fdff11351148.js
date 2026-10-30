import{e7 as e,e8 as t}from"./fdff1135.js";import{n as o}from"./fdff11351143.js";import{o as r}from"./fdff1135914.js";import{c as i,r as s,a as d}from"./fdff11351144.js";const a=i`
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
`;var n=function(e,t,o,r){var i,s=arguments.length,d=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)d=Reflect.decorate(e,t,o,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(d=(s<3?i(d):s>3?i(t,o,d):i(t,o))||d);return s>3&&d&&Object.defineProperty(t,o,d),d};let h=class extends e{constructor(){super(...arguments),this.src="./path/to/image.jpg",this.alt="Image",this.size=void 0,this.boxed=!1,this.rounded=!1,this.fullSize=!1}render(){const e={inherit:"inherit",xxs:"2",xs:"3",sm:"4",md:"4",mdl:"5",lg:"5",xl:"6",xxl:"7","3xl":"8","4xl":"9","5xl":"10"};return this.style.cssText=`\n      --local-width: ${this.size?`var(--apkt-spacing-${e[this.size]});`:"100%"};\n      --local-height: ${this.size?`var(--apkt-spacing-${e[this.size]});`:"100%"};\n      `,this.dataset.boxed=this.boxed?"true":"false",this.dataset.rounded=this.rounded?"true":"false",this.dataset.full=this.fullSize?"true":"false",this.dataset.icon=this.iconColor||"inherit",this.icon?t`<wui-icon
        color=${this.iconColor||"inherit"}
        name=${this.icon}
        size="lg"
      ></wui-icon> `:this.logo?t`<wui-icon size="lg" color="inherit" name=${this.logo}></wui-icon> `:t`<img src=${r(this.src)} alt=${this.alt} @error=${this.handleImageError} />`}handleImageError(){this.dispatchEvent(new CustomEvent("onLoadError",{bubbles:!0,composed:!0}))}};h.styles=[s,a],n([o()],h.prototype,"src",void 0),n([o()],h.prototype,"logo",void 0),n([o()],h.prototype,"icon",void 0),n([o()],h.prototype,"iconColor",void 0),n([o()],h.prototype,"alt",void 0),n([o()],h.prototype,"size",void 0),n([o({type:Boolean})],h.prototype,"boxed",void 0),n([o({type:Boolean})],h.prototype,"rounded",void 0),n([o({type:Boolean})],h.prototype,"fullSize",void 0),h=n([d("wui-image")],h);
