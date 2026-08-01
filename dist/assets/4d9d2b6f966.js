import{dS as e,dQ as t,dR as r}from"./4d9d2b6f.js";import{n as i}from"./4d9d2b6f958.js";import{o}from"./4d9d2b6f802.js";import{r as s,a}from"./4d9d2b6f959.js";import"./4d9d2b6f964.js";const d=e`
  :host {
    position: relative;
    display: inline-block;
    width: 100%;
  }
`;var l=function(e,t,r,i){var o,s=arguments.length,a=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var d=e.length-1;d>=0;d--)(o=e[d])&&(a=(s<3?o(a):s>3?o(t,r,a):o(t,r))||a);return s>3&&a&&Object.defineProperty(t,r,a),a};let p=class extends t{constructor(){super(...arguments),this.disabled=!1}render(){return r`
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
    `}templateError(){return this.errorMessage?r`<wui-text variant="sm-regular" color="error">${this.errorMessage}</wui-text>`:null}};p.styles=[s,d],l([i()],p.prototype,"errorMessage",void 0),l([i({type:Boolean})],p.prototype,"disabled",void 0),l([i()],p.prototype,"value",void 0),l([i()],p.prototype,"tabIdx",void 0),p=l([a("wui-email-input")],p);
