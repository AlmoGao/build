import{dV as e,dT as t,dU as r}from"./29c85c59.js";import{n as i}from"./29c85c591007.js";import{o}from"./29c85c59845.js";import{r as s,a}from"./29c85c591008.js";import"./29c85c591013.js";const l=e`
  :host {
    position: relative;
    display: inline-block;
    width: 100%;
  }
`;var p=function(e,t,r,i){var o,s=arguments.length,a=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var l=e.length-1;l>=0;l--)(o=e[l])&&(a=(s<3?o(a):s>3?o(t,r,a):o(t,r))||a);return s>3&&a&&Object.defineProperty(t,r,a),a};let c=class extends t{constructor(){super(...arguments),this.disabled=!1}render(){return r`
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
    `}templateError(){return this.errorMessage?r`<wui-text variant="sm-regular" color="error">${this.errorMessage}</wui-text>`:null}};c.styles=[s,l],p([i()],c.prototype,"errorMessage",void 0),p([i({type:Boolean})],c.prototype,"disabled",void 0),p([i()],c.prototype,"value",void 0),p([i()],c.prototype,"tabIdx",void 0),c=p([a("wui-email-input")],c);
