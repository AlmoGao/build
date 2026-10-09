import{e3 as e,e1 as t,e2 as r}from"./ba517cf2.js";import{n as i}from"./ba517cf21084.js";import{o}from"./ba517cf2899.js";import{r as a,a as s}from"./ba517cf21085.js";import"./ba517cf21090.js";const l=e`
  :host {
    position: relative;
    display: inline-block;
    width: 100%;
  }
`;var p=function(e,t,r,i){var o,a=arguments.length,s=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var l=e.length-1;l>=0;l--)(o=e[l])&&(s=(a<3?o(s):a>3?o(t,r,s):o(t,r))||s);return a>3&&s&&Object.defineProperty(t,r,s),s};let n=class extends t{constructor(){super(...arguments),this.disabled=!1}render(){return r`
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
    `}templateError(){return this.errorMessage?r`<wui-text variant="sm-regular" color="error">${this.errorMessage}</wui-text>`:null}};n.styles=[a,l],p([i()],n.prototype,"errorMessage",void 0),p([i({type:Boolean})],n.prototype,"disabled",void 0),p([i()],n.prototype,"value",void 0),p([i()],n.prototype,"tabIdx",void 0),n=p([s("wui-email-input")],n);
