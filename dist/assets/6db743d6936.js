import{dP as t,dQ as o}from"./6db743d6.js";import{n as a}from"./6db743d6937.js";import{c as e,r as i,e as r,a as n}from"./6db743d6938.js";const s=e`
  button {
    background-color: transparent;
    padding: ${({spacing:t})=>t[1]};
  }

  button:focus-visible {
    box-shadow: 0 0 0 4px ${({tokens:t})=>t.core.foregroundAccent020};
  }

  button[data-variant='accent']:hover:enabled,
  button[data-variant='accent']:focus-visible {
    background-color: ${({tokens:t})=>t.core.foregroundAccent010};
  }

  button[data-variant='primary']:hover:enabled,
  button[data-variant='primary']:focus-visible,
  button[data-variant='secondary']:hover:enabled,
  button[data-variant='secondary']:focus-visible {
    background-color: ${({tokens:t})=>t.theme.foregroundSecondary};
  }

  button[data-size='xs'] > wui-icon {
    width: 8px;
    height: 8px;
  }

  button[data-size='sm'] > wui-icon {
    width: 12px;
    height: 12px;
  }

  button[data-size='xs'],
  button[data-size='sm'] {
    border-radius: ${({borderRadius:t})=>t[1]};
  }

  button[data-size='md'],
  button[data-size='lg'] {
    border-radius: ${({borderRadius:t})=>t[2]};
  }

  button[data-size='md'] > wui-icon {
    width: 16px;
    height: 16px;
  }

  button[data-size='lg'] > wui-icon {
    width: 20px;
    height: 20px;
  }

  button:disabled {
    background-color: transparent;
    cursor: not-allowed;
    opacity: 0.5;
  }

  button:hover:not(:disabled) {
    background-color: var(--wui-color-accent-glass-015);
  }

  button:focus-visible:not(:disabled) {
    background-color: var(--wui-color-accent-glass-015);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0 0 0 4px var(--wui-color-accent-glass-020);
  }
`;var d=function(t,o,a,e){var i,r=arguments.length,n=r<3?o:null===e?e=Object.getOwnPropertyDescriptor(o,a):e;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,o,a,e);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(n=(r<3?i(n):r>3?i(o,a,n):i(o,a))||n);return r>3&&n&&Object.defineProperty(o,a,n),n};let c=class extends t{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.icon="copy",this.iconColor="default",this.variant="accent"}render(){return o`
      <button data-variant=${this.variant} ?disabled=${this.disabled} data-size=${this.size}>
        <wui-icon
          color=${{accent:"accent-primary",primary:"inverse",secondary:"default"}[this.variant]||this.iconColor}
          size=${this.size}
          name=${this.icon}
        ></wui-icon>
      </button>
    `}};c.styles=[i,r,s],d([a()],c.prototype,"size",void 0),d([a({type:Boolean})],c.prototype,"disabled",void 0),d([a()],c.prototype,"icon",void 0),d([a()],c.prototype,"iconColor",void 0),d([a()],c.prototype,"variant",void 0),c=d([n("wui-icon-link")],c);
