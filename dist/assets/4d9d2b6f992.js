import{dQ as t,dR as e,dU as o,et as r,cZ as a,dW as s}from"./4d9d2b6f.js";import{n as i}from"./4d9d2b6f958.js";import{c as n,r as c,a as d}from"./4d9d2b6f959.js";const l=n`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: ${({spacing:t})=>t[1]};
    text-transform: uppercase;
  }

  :host([data-variant='accent']) {
    background-color: ${({tokens:t})=>t.core.foregroundAccent010};
    color: ${({tokens:t})=>t.core.textAccentPrimary};
  }

  :host([data-variant='info']) {
    background-color: ${({tokens:t})=>t.theme.foregroundSecondary};
    color: ${({tokens:t})=>t.theme.textSecondary};
  }

  :host([data-variant='success']) {
    background-color: ${({tokens:t})=>t.core.backgroundSuccess};
    color: ${({tokens:t})=>t.core.textSuccess};
  }

  :host([data-variant='warning']) {
    background-color: ${({tokens:t})=>t.core.backgroundWarning};
    color: ${({tokens:t})=>t.core.textWarning};
  }

  :host([data-variant='error']) {
    background-color: ${({tokens:t})=>t.core.backgroundError};
    color: ${({tokens:t})=>t.core.textError};
  }

  :host([data-variant='certified']) {
    background-color: ${({tokens:t})=>t.theme.foregroundSecondary};
    color: ${({tokens:t})=>t.theme.textSecondary};
  }

  :host([data-size='md']) {
    height: 30px;
    padding: 0 ${({spacing:t})=>t[2]};
    border-radius: ${({borderRadius:t})=>t[2]};
  }

  :host([data-size='sm']) {
    height: 20px;
    padding: 0 ${({spacing:t})=>t[1]};
    border-radius: ${({borderRadius:t})=>t[1]};
  }
`;var u=function(t,e,o,r){var a,s=arguments.length,i=s<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,o,r);else for(var n=t.length-1;n>=0;n--)(a=t[n])&&(i=(s<3?a(i):s>3?a(e,o,i):a(e,o))||i);return s>3&&i&&Object.defineProperty(e,o,i),i};let g=class extends t{constructor(){super(...arguments),this.variant="accent",this.size="md",this.icon=void 0}render(){this.dataset.variant=this.variant,this.dataset.size=this.size;const t="md"===this.size?"md-medium":"sm-medium",o="md"===this.size?"md":"sm";return e`
      ${this.icon?e`<wui-icon size=${o} name=${this.icon}></wui-icon>`:null}
      <wui-text data-variant=${this.variant} variant=${t} color="inherit">
        <slot></slot>
      </wui-text>
    `}};g.styles=[c,l],u([i()],g.prototype,"variant",void 0),u([i()],g.prototype,"size",void 0),u([i()],g.prototype,"icon",void 0),g=u([d("wui-tag")],g);const h={getTabsByNamespace:t=>Boolean(t)&&t===s.CHAIN.EVM?!1===a.state.remoteFeatures?.activity?r.ACCOUNT_TABS.filter(t=>"Activity"!==t.label):r.ACCOUNT_TABS:[],isValidReownName:t=>/^[a-zA-Z0-9]+$/gu.test(t),isValidEmail:t=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/gu.test(t),validateReownName:t=>t.replace(/\^/gu,"").toLowerCase().replace(/[^a-zA-Z0-9]/gu,""),hasFooter(){const t=o.state.view;if(r.VIEWS_WITH_LEGAL_FOOTER.includes(t)){const{termsConditionsUrl:t,privacyPolicyUrl:e}=a.state,o=a.state.features?.legalCheckbox;return!(!t&&!e||o)}return r.VIEWS_WITH_DEFAULT_FOOTER.includes(t)}};export{h as H};
