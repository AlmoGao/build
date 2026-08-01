import{dQ as t,dR as o}from"./4d9d2b6f.js";import{n as e}from"./4d9d2b6f958.js";import{c as a,r as n,e as r,a as c}from"./4d9d2b6f959.js";const i=a`
  button {
    border: none;
    background: transparent;
    height: 20px;
    padding: ${({spacing:t})=>t[2]};
    column-gap: ${({spacing:t})=>t[1]};
    border-radius: ${({borderRadius:t})=>t[1]};
    padding: 0 ${({spacing:t})=>t[1]};
    border-radius: ${({spacing:t})=>t[1]};
  }

  /* -- Variants --------------------------------------------------------- */
  button[data-variant='accent'] {
    color: ${({tokens:t})=>t.core.textAccentPrimary};
  }

  button[data-variant='secondary'] {
    color: ${({tokens:t})=>t.theme.textSecondary};
  }

  /* -- Focus states --------------------------------------------------- */
  button:focus-visible:enabled {
    box-shadow: 0px 0px 0px 4px rgba(9, 136, 240, 0.2);
  }

  button[data-variant='accent']:focus-visible:enabled {
    background-color: ${({tokens:t})=>t.core.foregroundAccent010};
  }

  button[data-variant='secondary']:focus-visible:enabled {
    background-color: ${({tokens:t})=>t.theme.foregroundSecondary};
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  button[data-variant='accent']:hover:enabled {
    background-color: ${({tokens:t})=>t.core.foregroundAccent010};
  }

  button[data-variant='secondary']:hover:enabled {
    background-color: ${({tokens:t})=>t.theme.foregroundSecondary};
  }

  button[data-variant='accent']:focus-visible {
    background-color: ${({tokens:t})=>t.core.foregroundAccent010};
  }

  button[data-variant='secondary']:focus-visible {
    background-color: ${({tokens:t})=>t.theme.foregroundSecondary};
    box-shadow: 0px 0px 0px 4px rgba(9, 136, 240, 0.2);
  }

  button[disabled] {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;var s=function(t,o,e,a){var n,r=arguments.length,c=r<3?o:null===a?a=Object.getOwnPropertyDescriptor(o,e):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,o,e,a);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(c=(r<3?n(c):r>3?n(o,e,c):n(o,e))||c);return r>3&&c&&Object.defineProperty(o,e,c),c};const d={sm:"sm-medium",md:"md-medium"},u={accent:"accent-primary",secondary:"secondary"};let b=class extends t{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.variant="accent",this.icon=void 0}render(){return o`
      <button ?disabled=${this.disabled} data-variant=${this.variant}>
        <slot name="iconLeft"></slot>
        <wui-text
          color=${u[this.variant]}
          variant=${d[this.size]}
        >
          <slot></slot>
        </wui-text>
        ${this.iconTemplate()}
      </button>
    `}iconTemplate(){return this.icon?o`<wui-icon name=${this.icon} size="sm"></wui-icon>`:null}};b.styles=[n,r,i],s([e()],b.prototype,"size",void 0),s([e({type:Boolean})],b.prototype,"disabled",void 0),s([e()],b.prototype,"variant",void 0),s([e()],b.prototype,"icon",void 0),b=s([c("wui-link")],b);
