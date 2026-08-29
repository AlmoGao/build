import{dV as e,dT as t,dU as r}from"./acd90090.js";import{n as i}from"./acd900901007.js";import{o}from"./acd90090845.js";import{r as a,a as s}from"./acd900901008.js";import"./acd900901013.js";const l=e`
  :host {
    position: relative;
    display: inline-block;
    width: 100%;
  }
`;var d=function(e,t,r,i){var o,a=arguments.length,s=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var l=e.length-1;l>=0;l--)(o=e[l])&&(s=(a<3?o(s):a>3?o(t,r,s):o(t,r))||s);return a>3&&s&&Object.defineProperty(t,r,s),s};let p=class extends t{constructor(){super(...arguments),this.disabled=!1}render(){return r`
      <wui-input-text
        type="email"
        placeholder="Email"
        icon="mail"
        size="lg"
        .disabled=${this.disabled}
        .value=${this.value}
        data-testid="wui-email-input"
        tabIdx=${o(this.tabIdx)}
      ></wui-input-text>
      ${this.templateError()}
    `}templateError(){return this.errorMessage?r`<wui-text variant="sm-regular" color="error">${this.errorMessage}</wui-text>`:null}};p.styles=[a,l],d([i()],p.prototype,"errorMessage",void 0),d([i({type:Boolean})],p.prototype,"disabled",void 0),d([i()],p.prototype,"value",void 0),d([i()],p.prototype,"tabIdx",void 0),p=d([s("wui-email-input")],p);
