import{ee as o,ef as r}from"./7efcc770.js";import{n as t}from"./7efcc770529.js";import{o as e}from"./7efcc770410.js";import{c,r as a,e as n,a as s}from"./7efcc770530.js";const i=c`
  :host {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border-radius: ${({borderRadius:o})=>o[2]};
    padding: ${({spacing:o})=>o[1]} !important;
    background-color: ${({tokens:o})=>o.theme.backgroundPrimary};
    position: relative;
  }

  :host([data-padding='2']) {
    padding: ${({spacing:o})=>o[2]} !important;
  }

  :host:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: ${({borderRadius:o})=>o[2]};
  }

  :host > wui-icon {
    z-index: 10;
  }

  /* -- Colors --------------------------------------------------- */
  :host([data-color='accent-primary']) {
    color: ${({tokens:o})=>o.core.iconAccentPrimary};
  }

  :host([data-color='accent-primary']):after {
    background-color: ${({tokens:o})=>o.core.foregroundAccent010};
  }

  :host([data-color='default']),
  :host([data-color='secondary']) {
    color: ${({tokens:o})=>o.theme.iconDefault};
  }

  :host([data-color='default']):after {
    background-color: ${({tokens:o})=>o.theme.foregroundPrimary};
  }

  :host([data-color='secondary']):after {
    background-color: ${({tokens:o})=>o.theme.foregroundSecondary};
  }

  :host([data-color='success']) {
    color: ${({tokens:o})=>o.core.iconSuccess};
  }

  :host([data-color='success']):after {
    background-color: ${({tokens:o})=>o.core.backgroundSuccess};
  }

  :host([data-color='error']) {
    color: ${({tokens:o})=>o.core.iconError};
  }

  :host([data-color='error']):after {
    background-color: ${({tokens:o})=>o.core.backgroundError};
  }

  :host([data-color='warning']) {
    color: ${({tokens:o})=>o.core.iconWarning};
  }

  :host([data-color='warning']):after {
    background-color: ${({tokens:o})=>o.core.backgroundWarning};
  }

  :host([data-color='inverse']) {
    color: ${({tokens:o})=>o.theme.iconInverse};
  }

  :host([data-color='inverse']):after {
    background-color: transparent;
  }
`;var d=function(o,r,t,e){var c,a=arguments.length,n=a<3?r:null===e?e=Object.getOwnPropertyDescriptor(r,t):e;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(o,r,t,e);else for(var s=o.length-1;s>=0;s--)(c=o[s])&&(n=(a<3?c(n):a>3?c(r,t,n):c(r,t))||n);return a>3&&n&&Object.defineProperty(r,t,n),n};let l=class extends o{constructor(){super(...arguments),this.icon="copy",this.size="md",this.padding="1",this.color="default"}render(){return this.dataset.padding=this.padding,this.dataset.color=this.color,r`
      <wui-icon size=${e(this.size)} name=${this.icon} color="inherit"></wui-icon>
    `}};l.styles=[a,n,i],d([t()],l.prototype,"icon",void 0),d([t()],l.prototype,"size",void 0),d([t()],l.prototype,"padding",void 0),d([t()],l.prototype,"color",void 0),l=d([s("wui-icon-box")],l);
