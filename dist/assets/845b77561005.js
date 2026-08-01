import{dU as e,dS as t,dT as r}from"./845b7756.js";import{n as i}from"./845b7756997.js";import{o}from"./845b7756832.js";import{r as s,a}from"./845b7756998.js";import"./845b77561003.js";const l=e`
  :host {
    position: relative;
    display: inline-block;
    width: 100%;
  }
`;var p=function(e,t,r,i){var o,s=arguments.length,a=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var l=e.length-1;l>=0;l--)(o=e[l])&&(a=(s<3?o(a):s>3?o(t,r,a):o(t,r))||a);return s>3&&a&&Object.defineProperty(t,r,a),a};let d=class extends t{constructor(){super(...arguments),this.disabled=!1}render(){return r`
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
    `}templateError(){return this.errorMessage?r`<wui-text variant="sm-regular" color="error">${this.errorMessage}</wui-text>`:null}};d.styles=[s,l],p([i()],d.prototype,"errorMessage",void 0),p([i({type:Boolean})],d.prototype,"disabled",void 0),p([i()],d.prototype,"value",void 0),p([i()],d.prototype,"tabIdx",void 0),d=p([a("wui-email-input")],d);
