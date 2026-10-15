import{e1 as o,e2 as r}from"./eb06efab.js";import{n as e}from"./eb06efab1084.js";import{o as t}from"./eb06efab899.js";import{c as a,r as c,e as n,a as s}from"./eb06efab1085.js";const i=a`
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
`;var d=function(o,r,e,t){var a,c=arguments.length,n=c<3?r:null===t?t=Object.getOwnPropertyDescriptor(r,e):t;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(o,r,e,t);else for(var s=o.length-1;s>=0;s--)(a=o[s])&&(n=(c<3?a(n):c>3?a(r,e,n):a(r,e))||n);return c>3&&n&&Object.defineProperty(r,e,n),n};let l=class extends o{constructor(){super(...arguments),this.icon="copy",this.size="md",this.padding="1",this.color="default"}render(){return this.dataset.padding=this.padding,this.dataset.color=this.color,r`
      <wui-icon size=${t(this.size)} name=${this.icon} color="inherit"></wui-icon>
    `}};l.styles=[c,n,i],d([e()],l.prototype,"icon",void 0),d([e()],l.prototype,"size",void 0),d([e()],l.prototype,"padding",void 0),d([e()],l.prototype,"color",void 0),l=d([s("wui-icon-box")],l);
