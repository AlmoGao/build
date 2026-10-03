import{e0 as e,d_ as t,d$ as r}from"./e9a5ac95.js";import{n as a}from"./e9a5ac951080.js";import{o as i}from"./e9a5ac95899.js";import{r as o,a as s}from"./e9a5ac951081.js";import"./e9a5ac951086.js";const l=e`
  :host {
    position: relative;
    display: inline-block;
    width: 100%;
  }
`;var p=function(e,t,r,a){var i,o=arguments.length,s=o<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,r):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,a);else for(var l=e.length-1;l>=0;l--)(i=e[l])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let d=class extends t{constructor(){super(...arguments),this.disabled=!1}render(){return r`
      <wui-input-text
        type="email"
        placeholder="Email"
        icon="mail"
        size="lg"
        .disabled=${this.disabled}
        .value=${this.value}
        data-testid="wui-email-input"
        tabIdx=${i(this.tabIdx)}
      ></wui-input-text>
      ${this.templateError()}
    `}templateError(){return this.errorMessage?r`<wui-text variant="sm-regular" color="error">${this.errorMessage}</wui-text>`:null}};d.styles=[o,l],p([a()],d.prototype,"errorMessage",void 0),p([a({type:Boolean})],d.prototype,"disabled",void 0),p([a()],d.prototype,"value",void 0),p([a()],d.prototype,"tabIdx",void 0),d=p([s("wui-email-input")],d);
