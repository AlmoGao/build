import{ee as e,ef as t,ei as o,eW as r,dd as a,ek as s}from"./7efcc770.js";import{n as i}from"./7efcc770529.js";import{c as n,r as c,a as d}from"./7efcc770530.js";const l=n`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: ${({spacing:e})=>e[1]};
    text-transform: uppercase;
  }

  :host([data-variant='accent']) {
    background-color: ${({tokens:e})=>e.core.foregroundAccent010};
    color: ${({tokens:e})=>e.core.textAccentPrimary};
  }

  :host([data-variant='info']) {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    color: ${({tokens:e})=>e.theme.textSecondary};
  }

  :host([data-variant='success']) {
    background-color: ${({tokens:e})=>e.core.backgroundSuccess};
    color: ${({tokens:e})=>e.core.textSuccess};
  }

  :host([data-variant='warning']) {
    background-color: ${({tokens:e})=>e.core.backgroundWarning};
    color: ${({tokens:e})=>e.core.textWarning};
  }

  :host([data-variant='error']) {
    background-color: ${({tokens:e})=>e.core.backgroundError};
    color: ${({tokens:e})=>e.core.textError};
  }

  :host([data-variant='certified']) {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    color: ${({tokens:e})=>e.theme.textSecondary};
  }

  :host([data-size='md']) {
    height: 30px;
    padding: 0 ${({spacing:e})=>e[2]};
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  :host([data-size='sm']) {
    height: 20px;
    padding: 0 ${({spacing:e})=>e[1]};
    border-radius: ${({borderRadius:e})=>e[1]};
  }
`;var u=function(e,t,o,r){var a,s=arguments.length,i=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,o,r);else for(var n=e.length-1;n>=0;n--)(a=e[n])&&(i=(s<3?a(i):s>3?a(t,o,i):a(t,o))||i);return s>3&&i&&Object.defineProperty(t,o,i),i};let g=class extends e{constructor(){super(...arguments),this.variant="accent",this.size="md",this.icon=void 0}render(){this.dataset.variant=this.variant,this.dataset.size=this.size;const e="md"===this.size?"md-medium":"sm-medium",o="md"===this.size?"md":"sm";return t`
      ${this.icon?t`<wui-icon size=${o} name=${this.icon}></wui-icon>`:null}
      <wui-text data-variant=${this.variant} variant=${e} color="inherit">
        <slot></slot>
      </wui-text>
    `}};g.styles=[c,l],u([i()],g.prototype,"variant",void 0),u([i()],g.prototype,"size",void 0),u([i()],g.prototype,"icon",void 0),g=u([d("wui-tag")],g);const h={getTabsByNamespace:e=>Boolean(e)&&e===s.CHAIN.EVM?!1===a.state.remoteFeatures?.activity?r.ACCOUNT_TABS.filter(e=>"Activity"!==e.label):r.ACCOUNT_TABS:[],isValidReownName:e=>/^[a-zA-Z0-9]+$/gu.test(e),isValidEmail:e=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/gu.test(e),validateReownName:e=>e.replace(/\^/gu,"").toLowerCase().replace(/[^a-zA-Z0-9]/gu,""),hasFooter(){const e=o.state.view;if(r.VIEWS_WITH_LEGAL_FOOTER.includes(e)){const{termsConditionsUrl:e,privacyPolicyUrl:t}=a.state,o=a.state.features?.legalCheckbox;return!(!e&&!t||o)}return r.VIEWS_WITH_DEFAULT_FOOTER.includes(e)}};export{h as H};
