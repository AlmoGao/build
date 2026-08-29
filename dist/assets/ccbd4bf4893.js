import{dS as e,dQ as t,dR as r}from"./ccbd4bf4.js";import{n as i}from"./ccbd4bf4885.js";import{o}from"./ccbd4bf4736.js";import{r as s,a}from"./ccbd4bf4886.js";import"./ccbd4bf4891.js";const l=e`
  :host {
    position: relative;
    display: inline-block;
    width: 100%;
  }
`;var d=function(e,t,r,i){var o,s=arguments.length,a=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var l=e.length-1;l>=0;l--)(o=e[l])&&(a=(s<3?o(a):s>3?o(t,r,a):o(t,r))||a);return s>3&&a&&Object.defineProperty(t,r,a),a};let p=class extends t{constructor(){super(...arguments),this.disabled=!1}render(){return r`
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
    `}templateError(){return this.errorMessage?r`<wui-text variant="sm-regular" color="error">${this.errorMessage}</wui-text>`:null}};p.styles=[s,l],d([i()],p.prototype,"errorMessage",void 0),d([i({type:Boolean})],p.prototype,"disabled",void 0),d([i()],p.prototype,"value",void 0),d([i()],p.prototype,"tabIdx",void 0),p=d([a("wui-email-input")],p);
