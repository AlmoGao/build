import{e3 as e,e1 as t,e2 as r}from"./bc0be15b.js";import{n as i}from"./bc0be15b1084.js";import{o}from"./bc0be15b899.js";import{r as s,a}from"./bc0be15b1085.js";import"./bc0be15b1090.js";const l=e`
  :host {
    position: relative;
    display: inline-block;
    width: 100%;
  }
`;var p=function(e,t,r,i){var o,s=arguments.length,a=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var l=e.length-1;l>=0;l--)(o=e[l])&&(a=(s<3?o(a):s>3?o(t,r,a):o(t,r))||a);return s>3&&a&&Object.defineProperty(t,r,a),a};let n=class extends t{constructor(){super(...arguments),this.disabled=!1}render(){return r`
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
    `}templateError(){return this.errorMessage?r`<wui-text variant="sm-regular" color="error">${this.errorMessage}</wui-text>`:null}};n.styles=[s,l],p([i()],n.prototype,"errorMessage",void 0),p([i({type:Boolean})],n.prototype,"disabled",void 0),p([i()],n.prototype,"value",void 0),p([i()],n.prototype,"tabIdx",void 0),n=p([a("wui-email-input")],n);
