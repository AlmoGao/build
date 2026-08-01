import{dU as e,dS as t,ew as i,cU as o,dT as r,e2 as s,eT as n,g2 as a,cT as d,g3 as c,cM as l,cN as u,dY as p,cL as h,dZ as m,cS as g,d_ as b,cO as f,dW as w}from"./845b7756.js";import{r as y,n as x}from"./845b7756997.js";import{a as v,c as $,r as k,e as S}from"./845b7756998.js";import"./845b77561002.js";import{e as R,n as E}from"./845b77561004.js";import"./845b7756999.js";import{H as T}from"./845b77561030.js";import{o as A}from"./845b7756832.js";import"./845b77561003.js";import"./845b7756996.js";import"./845b77561000.js";import"./845b77561001.js";import{N as j}from"./845b7756831.js";import"./845b77562.js";import"./845b77563.js";const C=e`
  div {
    width: 100%;
  }

  [data-ready='false'] {
    transform: scale(1.05);
  }

  @media (max-width: 430px) {
    [data-ready='false'] {
      transform: translateY(-50px);
    }
  }
`;var N=function(e,t,i,o){var r,s=arguments.length,n=s<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(n=(s<3?r(n):s>3?r(t,i,n):r(t,i))||n);return s>3&&n&&Object.defineProperty(t,i,n),n};let O=class extends t{constructor(){super(),this.bodyObserver=void 0,this.unsubscribe=[],this.iframe=document.getElementById("w3m-iframe"),this.ready=!1,this.unsubscribe.push(i.subscribeKey("open",e=>{e||this.onHideIframe()}),i.subscribeKey("shake",e=>{this.iframe.style.animation=e?"w3m-shake 500ms var(--apkt-easings-ease-out-power-2)":"none"}))}disconnectedCallback(){this.onHideIframe(),this.unsubscribe.forEach(e=>e()),this.bodyObserver?.unobserve(window.document.body)}async firstUpdated(){await this.syncTheme(),this.iframe.style.display="block";const e=this?.renderRoot?.querySelector("div");this.bodyObserver=new ResizeObserver(t=>{const i=t?.[0]?.contentBoxSize,r=i?.[0]?.inlineSize;this.iframe.style.height="600px",e.style.height="600px",o.state.enableEmbedded?this.updateFrameSizeForEmbeddedMode():r&&r<=430?(this.iframe.style.width="100%",this.iframe.style.left="0px",this.iframe.style.bottom="0px",this.iframe.style.top="unset",this.onShowIframe()):(this.iframe.style.width="360px",this.iframe.style.left="calc(50% - 180px)",this.iframe.style.top="calc(50% - 300px + 32px)",this.iframe.style.bottom="unset",this.onShowIframe())}),this.bodyObserver.observe(window.document.body)}render(){return r`<div data-ready=${this.ready} id="w3m-frame-container"></div>`}onShowIframe(){const e=window.innerWidth<=430;this.ready=!0,this.iframe.style.animation=e?"w3m-iframe-zoom-in-mobile 200ms var(--apkt-easings-ease-out-power-2)":"w3m-iframe-zoom-in 200ms var(--apkt-easings-ease-out-power-2)"}onHideIframe(){this.iframe.style.display="none",this.iframe.style.animation="w3m-iframe-fade-out 200ms var(--apkt-easings-ease-out-power-2)"}async syncTheme(){const e=s.getAuthConnector();if(e){const t=n.getSnapshot().themeMode,i=n.getSnapshot().themeVariables;await e.provider.syncTheme({themeVariables:i,w3mThemeVariables:a(i,t)})}}async updateFrameSizeForEmbeddedMode(){const e=this?.renderRoot?.querySelector("div");await new Promise(e=>{setTimeout(e,300)});const t=this.getBoundingClientRect();e.style.width="100%",this.iframe.style.left=`${t.left}px`,this.iframe.style.top=`${t.top}px`,this.iframe.style.width=`${t.width}px`,this.iframe.style.height=`${t.height}px`,this.onShowIframe()}};O.styles=C,N([y()],O.prototype,"ready",void 0),O=N([v("w3m-approve-transaction-view")],O);const z=$`
  a {
    border: none;
    border-radius: ${({borderRadius:e})=>e[20]};
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: ${({spacing:e})=>e[1]};
    transition:
      background-color ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      box-shadow ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      border ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color, box-shadow, border;
  }

  /* -- Variants --------------------------------------------------------------- */
  a[data-type='success'] {
    background-color: ${({tokens:e})=>e.core.backgroundSuccess};
    color: ${({tokens:e})=>e.core.textSuccess};
  }

  a[data-type='error'] {
    background-color: ${({tokens:e})=>e.core.backgroundError};
    color: ${({tokens:e})=>e.core.textError};
  }

  a[data-type='warning'] {
    background-color: ${({tokens:e})=>e.core.backgroundWarning};
    color: ${({tokens:e})=>e.core.textWarning};
  }

  /* -- Sizes --------------------------------------------------------------- */
  a[data-size='sm'] {
    height: 24px;
  }

  a[data-size='md'] {
    height: 28px;
  }

  a[data-size='lg'] {
    height: 32px;
  }

  a[data-size='sm'] > wui-image,
  a[data-size='sm'] > wui-icon {
    width: 16px;
    height: 16px;
  }

  a[data-size='md'] > wui-image,
  a[data-size='md'] > wui-icon {
    width: 20px;
    height: 20px;
  }

  a[data-size='lg'] > wui-image,
  a[data-size='lg'] > wui-icon {
    width: 24px;
    height: 24px;
  }

  wui-text {
    padding-left: ${({spacing:e})=>e[1]};
    padding-right: ${({spacing:e})=>e[1]};
  }

  wui-image {
    border-radius: ${({borderRadius:e})=>e[3]};
    overflow: hidden;
    user-drag: none;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
    -ms-user-select: none;
  }

  /* -- States --------------------------------------------------------------- */
  @media (hover: hover) and (pointer: fine) {
    a[data-type='success']:not(:disabled):hover {
      background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
      box-shadow: 0px 0px 0px 1px ${({tokens:e})=>e.core.borderSuccess};
    }

    a[data-type='error']:not(:disabled):hover {
      background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
      box-shadow: 0px 0px 0px 1px ${({tokens:e})=>e.core.borderError};
    }

    a[data-type='warning']:not(:disabled):hover {
      background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
      box-shadow: 0px 0px 0px 1px ${({tokens:e})=>e.core.borderWarning};
    }
  }

  a[data-type='success']:not(:disabled):focus-visible {
    box-shadow:
      0px 0px 0px 1px ${({tokens:e})=>e.core.backgroundAccentPrimary},
      0px 0px 0px 4px ${({tokens:e})=>e.core.foregroundAccent020};
  }

  a[data-type='error']:not(:disabled):focus-visible {
    box-shadow:
      0px 0px 0px 1px ${({tokens:e})=>e.core.backgroundAccentPrimary},
      0px 0px 0px 4px ${({tokens:e})=>e.core.foregroundAccent020};
  }

  a[data-type='warning']:not(:disabled):focus-visible {
    box-shadow:
      0px 0px 0px 1px ${({tokens:e})=>e.core.backgroundAccentPrimary},
      0px 0px 0px 4px ${({tokens:e})=>e.core.foregroundAccent020};
  }

  a:disabled {
    opacity: 0.5;
  }
`;var I=function(e,t,i,o){var r,s=arguments.length,n=s<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(n=(s<3?r(n):s>3?r(t,i,n):r(t,i))||n);return s>3&&n&&Object.defineProperty(t,i,n),n};const D={sm:"md-regular",md:"lg-regular",lg:"lg-regular"},P={success:"sealCheck",error:"warning",warning:"exclamationCircle"};let _=class extends t{constructor(){super(...arguments),this.type="success",this.size="md",this.imageSrc=void 0,this.disabled=!1,this.href="",this.text=void 0}render(){return r`
      <a
        rel="noreferrer"
        target="_blank"
        href=${this.href}
        class=${this.disabled?"disabled":""}
        data-type=${this.type}
        data-size=${this.size}
      >
        ${this.imageTemplate()}
        <wui-text variant=${D[this.size]} color="inherit">${this.text}</wui-text>
      </a>
    `}imageTemplate(){return this.imageSrc?r`<wui-image src=${this.imageSrc} size="inherit"></wui-image>`:r`<wui-icon
      name=${P[this.type]}
      weight="fill"
      color="inherit"
      size="inherit"
      class="image-icon"
    ></wui-icon>`}};_.styles=[k,S,z],I([x()],_.prototype,"type",void 0),I([x()],_.prototype,"size",void 0),I([x()],_.prototype,"imageSrc",void 0),I([x({type:Boolean})],_.prototype,"disabled",void 0),I([x()],_.prototype,"href",void 0),I([x()],_.prototype,"text",void 0),_=I([v("wui-semantic-chip")],_);let U=class extends t{render(){return r`
      <wui-flex flexDirection="column" alignItems="center" gap="5" padding="5">
        <wui-text variant="md-regular" color="primary">Follow the instructions on</wui-text>
        <wui-semantic-chip
          icon="externalLink"
          variant="fill"
          text=${d.SECURE_SITE_DASHBOARD}
          href=${d.SECURE_SITE_DASHBOARD}
          imageSrc=${d.SECURE_SITE_FAVICON}
          data-testid="w3m-secure-website-button"
        >
        </wui-semantic-chip>
        <wui-text variant="sm-regular" color="secondary">
          You will have to reconnect for security reasons
        </wui-text>
      </wui-flex>
    `}};U=function(e,t,i,o){var r,s=arguments.length,n=s<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(n=(s<3?r(n):s>3?r(t,i,n):r(t,i))||n);return s>3&&n&&Object.defineProperty(t,i,n),n}([v("w3m-upgrade-wallet-view")],U);const M=$`
  :host {
    width: 100%;
  }

  button {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[4]};
    padding: ${({spacing:e})=>e[4]};
  }

  .name {
    max-width: 75%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      cursor: pointer;
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
      border-radius: ${({borderRadius:e})=>e[6]};
    }
  }

  button:disabled {
    opacity: 0.5;
    cursor: default;
  }

  button:focus-visible:enabled {
    box-shadow: 0 0 0 4px ${({tokens:e})=>e.core.foregroundAccent040};
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
  }
`;var B=function(e,t,i,o){var r,s=arguments.length,n=s<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(n=(s<3?r(n):s>3?r(t,i,n):r(t,i))||n);return s>3&&n&&Object.defineProperty(t,i,n),n};let K=class extends t{constructor(){super(...arguments),this.name="",this.registered=!1,this.loading=!1,this.disabled=!1}render(){return r`
      <button ?disabled=${this.disabled}>
        <wui-text class="name" color="primary" variant="md-regular">${this.name}</wui-text>
        ${this.templateRightContent()}
      </button>
    `}templateRightContent(){return this.loading?r`<wui-loading-spinner size="lg" color="primary"></wui-loading-spinner>`:this.registered?r`<wui-tag variant="info" size="sm">Registered</wui-tag>`:r`<wui-tag variant="success" size="sm">Available</wui-tag>`}};K.styles=[k,S,M],B([x()],K.prototype,"name",void 0),B([x({type:Boolean})],K.prototype,"registered",void 0),B([x({type:Boolean})],K.prototype,"loading",void 0),B([x({type:Boolean})],K.prototype,"disabled",void 0),K=B([v("wui-account-name-suggestion-item")],K);const F=$`
  :host {
    position: relative;
    width: 100%;
    display: inline-block;
  }

  :host([disabled]) {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .base-name {
    position: absolute;
    right: ${({spacing:e})=>e[4]};
    top: 50%;
    transform: translateY(-50%);
    text-align: right;
    padding: ${({spacing:e})=>e[1]};
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    border-radius: ${({borderRadius:e})=>e[1]};
  }
`;var Y=function(e,t,i,o){var r,s=arguments.length,n=s<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(n=(s<3?r(n):s>3?r(t,i,n):r(t,i))||n);return s>3&&n&&Object.defineProperty(t,i,n),n};let L=class extends t{constructor(){super(...arguments),this.disabled=!1,this.loading=!1}render(){return r`
      <wui-input-text
        value=${A(this.value)}
        ?disabled=${this.disabled}
        .value=${this.value||""}
        data-testid="wui-ens-input"
        icon="search"
        inputRightPadding="5xl"
        .onKeyDown=${this.onKeyDown}
      ></wui-input-text>
    `}};L.styles=[k,F],Y([x()],L.prototype,"errorMessage",void 0),Y([x({type:Boolean})],L.prototype,"disabled",void 0),Y([x()],L.prototype,"value",void 0),Y([x({type:Boolean})],L.prototype,"loading",void 0),Y([x({attribute:!1})],L.prototype,"onKeyDown",void 0),L=Y([v("wui-ens-input")],L);const W=$`
  wui-flex {
    width: 100%;
  }

  .suggestion {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[4]};
  }

  .suggestion:hover:not(:disabled) {
    cursor: pointer;
    border: none;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    border-radius: ${({borderRadius:e})=>e[6]};
    padding: ${({spacing:e})=>e[4]};
  }

  .suggestion:disabled {
    opacity: 0.5;
    cursor: default;
  }

  .suggestion:focus-visible:not(:disabled) {
    box-shadow: 0 0 0 4px ${({tokens:e})=>e.core.foregroundAccent040};
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  .suggested-name {
    max-width: 75%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  form {
    width: 100%;
    position: relative;
  }

  .input-submit-button,
  .input-loading-spinner {
    position: absolute;
    top: 22px;
    transform: translateY(-50%);
    right: 10px;
  }
`;var H=function(e,t,i,o){var r,s=arguments.length,n=s<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(n=(s<3?r(n):s>3?r(t,i,n):r(t,i))||n);return s>3&&n&&Object.defineProperty(t,i,n),n};let V=class extends t{constructor(){super(),this.formRef=R(),this.usubscribe=[],this.name="",this.error="",this.loading=c.state.loading,this.suggestions=c.state.suggestions,this.profileName=l.state.profileName,this.onDebouncedNameInputChange=u.debounce(e=>{e.length<4?this.error="Name must be at least 4 characters long":T.isValidReownName(e)?(this.error="",c.getSuggestions(e)):this.error="The value is not a valid username"}),this.usubscribe.push(c.subscribe(e=>{this.suggestions=e.suggestions,this.loading=e.loading}),l.subscribeKey("profileName",e=>{this.profileName=e,e&&(this.error="You already own a name")}))}firstUpdated(){this.formRef.value?.addEventListener("keydown",this.onEnterKey.bind(this))}disconnectedCallback(){super.disconnectedCallback(),this.usubscribe.forEach(e=>e()),this.formRef.value?.removeEventListener("keydown",this.onEnterKey.bind(this))}render(){return r`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="4"
        .padding=${["1","3","4","3"]}
      >
        <form ${E(this.formRef)} @submit=${this.onSubmitName.bind(this)}>
          <wui-ens-input
            @inputChange=${this.onNameInputChange.bind(this)}
            .errorMessage=${this.error}
            .value=${this.name}
            .onKeyDown=${this.onKeyDown.bind(this)}
          >
          </wui-ens-input>
          ${this.submitButtonTemplate()}
          <input type="submit" hidden />
        </form>
        ${this.templateSuggestions()}
      </wui-flex>
    `}submitButtonTemplate(){const e=this.suggestions.find(e=>e.name?.split(".")?.[0]===this.name&&e.registered);if(this.loading)return r`<wui-loading-spinner
        class="input-loading-spinner"
        color="secondary"
      ></wui-loading-spinner>`;const t=`${this.name}${p.WC_NAME_SUFFIX}`;return r`
      <wui-icon-link
        ?disabled=${Boolean(e)}
        class="input-submit-button"
        size="sm"
        icon="chevronRight"
        iconColor=${e?"default":"accent-primary"}
        @click=${()=>this.onSubmitName(t)}
      >
      </wui-icon-link>
    `}onNameInputChange(e){const t=T.validateReownName(e.detail||"");this.name=t,this.onDebouncedNameInputChange(t)}onKeyDown(e){1!==e.key.length||T.isValidReownName(e.key)||e.preventDefault()}templateSuggestions(){return!this.name||this.name.length<4||this.error?null:r`<wui-flex flexDirection="column" gap="1" alignItems="center">
      ${this.suggestions.map(e=>r`<wui-account-name-suggestion-item
            name=${e.name}
            ?registered=${e.registered}
            ?loading=${this.loading}
            ?disabled=${e.registered||this.loading}
            data-testid="account-name-suggestion"
            @click=${()=>this.onSubmitName(e.name)}
          ></wui-account-name-suggestion-item>`)}
    </wui-flex>`}isAllowedToSubmit(e){const t=e.split(".")?.[0],i=this.suggestions.find(e=>e.name?.split(".")?.[0]===t&&e.registered);return!this.loading&&!this.error&&!this.profileName&&t&&c.validateName(t)&&!i}async onSubmitName(e){try{if(!this.isAllowedToSubmit(e))return;h.sendEvent({type:"track",event:"REGISTER_NAME_INITIATED",properties:{isSmartAccount:m(g.state.activeChain)===b.ACCOUNT_TYPES.SMART_ACCOUNT,ensName:e}}),await c.registerName(e),h.sendEvent({type:"track",event:"REGISTER_NAME_SUCCESS",properties:{isSmartAccount:m(g.state.activeChain)===b.ACCOUNT_TYPES.SMART_ACCOUNT,ensName:e}})}catch(t){f.showError(t.message),h.sendEvent({type:"track",event:"REGISTER_NAME_ERROR",properties:{isSmartAccount:m(g.state.activeChain)===b.ACCOUNT_TYPES.SMART_ACCOUNT,ensName:e,error:u.parseError(t)}})}}onEnterKey(e){if("Enter"===e.key&&this.name&&this.isAllowedToSubmit(this.name)){const e=`${this.name}${p.WC_NAME_SUFFIX}`;this.onSubmitName(e)}}};V.styles=W,H([x()],V.prototype,"errorMessage",void 0),H([y()],V.prototype,"name",void 0),H([y()],V.prototype,"error",void 0),H([y()],V.prototype,"loading",void 0),H([y()],V.prototype,"suggestions",void 0),H([y()],V.prototype,"profileName",void 0),V=H([v("w3m-register-account-name-view")],V);const G=e`
  .continue-button-container {
    width: 100%;
  }
`;let q=class extends t{render(){return r`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="6"
        .padding=${["0","0","4","0"]}
      >
        ${this.onboardingTemplate()} ${this.buttonsTemplate()}
        <wui-link
          @click=${()=>{u.openHref(j.URLS.FAQ,"_blank")}}
        >
          Learn more
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-link>
      </wui-flex>
    `}onboardingTemplate(){return r` <wui-flex
      flexDirection="column"
      gap="6"
      alignItems="center"
      .padding=${["0","6","0","6"]}
    >
      <wui-flex gap="3" alignItems="center" justifyContent="center">
        <wui-icon-box size="xl" color="success" icon="checkmark"></wui-icon-box>
      </wui-flex>
      <wui-flex flexDirection="column" alignItems="center" gap="3">
        <wui-text align="center" variant="md-medium" color="primary">
          Account name chosen successfully
        </wui-text>
        <wui-text align="center" variant="md-regular" color="primary">
          You can now fund your account and trade crypto
        </wui-text>
      </wui-flex>
    </wui-flex>`}buttonsTemplate(){return r`<wui-flex
      .padding=${["0","4","0","4"]}
      gap="3"
      class="continue-button-container"
    >
      <wui-button fullWidth size="lg" borderRadius="xs" @click=${this.redirectToAccount.bind(this)}
        >Let's Go!
      </wui-button>
    </wui-flex>`}redirectToAccount(){w.replace("Account")}};q.styles=G,q=function(e,t,i,o){var r,s=arguments.length,n=s<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(n=(s<3?r(n):s>3?r(t,i,n):r(t,i))||n);return s>3&&n&&Object.defineProperty(t,i,n),n}([v("w3m-register-account-name-success-view")],q);export{O as W3mApproveTransactionView,q as W3mRegisterAccountNameSuccess,V as W3mRegisterAccountNameView,U as W3mUpgradeWalletView};
