import{dT as e,dU as t,cS as i,cU as n,g8 as o,eT as r,cM as a,cN as s,ex as c,dV as l,cL as d,f2 as u,e3 as h,dZ as p,dX as w,cT as m,cO as g,d_ as b,d$ as f,dY as y,gl as v,hS as x,hT as $,hU as k,gI as C,gF as S,gH as R,hV as E,e1 as I,fW as T,fV as A,fU as O,eU as N,hW as P,hX as j,hY as D,hZ as L,gG as W}from"./29c85c59.js";import{n as z,r as _,a as U}from"./29c85c591007.js";import{o as B}from"./29c85c59845.js";import{c as F,r as M,e as V,a as K,U as H}from"./29c85c591008.js";import"./29c85c591012.js";import"./29c85c591009.js";import"./29c85c591020.js";import"./29c85c591010.js";import{a as q,W as G}from"./29c85c591075.js";import"./29c85c591006.js";import"./29c85c591021.js";import{e as Y,n as X}from"./29c85c591014.js";import{H as Q}from"./29c85c591040.js";import"./29c85c591023.js";import"./29c85c591011.js";import"./29c85c591053.js";import{M as Z}from"./29c85c591041.js";import"./29c85c591042.js";import"./29c85c591013.js";import"./29c85c591016.js";import"./29c85c591067.js";import"./29c85c591015.js";import{O as J}from"./29c85c591066.js";import{e as ee}from"./29c85c591057.js";import"./29c85c591055.js";import{N as te}from"./29c85c59844.js";import"./29c85c591079.js";import"./29c85c592.js";import"./29c85c593.js";const ie=F`
  :host {
    display: block;
  }

  button {
    border-radius: ${({borderRadius:e})=>e[20]};
    background: ${({tokens:e})=>e.theme.foregroundPrimary};
    display: flex;
    gap: ${({spacing:e})=>e[1]};
    padding: ${({spacing:e})=>e[1]};
    color: ${({tokens:e})=>e.theme.textSecondary};
    border-radius: ${({borderRadius:e})=>e[16]};
    height: 32px;
    transition: box-shadow ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
    will-change: box-shadow;
  }

  button wui-flex.avatar-container {
    width: 28px;
    height: 24px;
    position: relative;

    wui-flex.network-image-container {
      position: absolute;
      bottom: 0px;
      right: 0px;
      width: 12px;
      height: 12px;
    }

    wui-avatar {
      width: 24px;
      min-width: 24px;
      height: 24px;
    }

    wui-icon {
      width: 12px;
      height: 12px;
    }
  }

  wui-image,
  wui-icon {
    border-radius: ${({borderRadius:e})=>e[16]};
  }

  wui-text {
    white-space: nowrap;
  }

  button wui-flex.balance-container {
    height: 100%;
    border-radius: ${({borderRadius:e})=>e[16]};
    padding-left: ${({spacing:e})=>e[1]};
    padding-right: ${({spacing:e})=>e[1]};
    background: ${({tokens:e})=>e.theme.foregroundSecondary};
    color: ${({tokens:e})=>e.theme.textPrimary};
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color;
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  button:hover:enabled,
  button:focus-visible:enabled,
  button:active:enabled {
    box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.2);

    wui-flex.balance-container {
      background: ${({tokens:e})=>e.theme.foregroundTertiary};
    }
  }

  /* -- Disabled states --------------------------------------------------- */
  button:disabled wui-text,
  button:disabled wui-flex.avatar-container {
    opacity: 0.3;
  }
`;var ne=function(e,t,i,n){var o,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,n);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(r<3?o(a):r>3?o(t,i,a):o(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let oe=class extends e{constructor(){super(...arguments),this.networkSrc=void 0,this.avatarSrc=void 0,this.balance=void 0,this.isUnsupportedChain=void 0,this.disabled=!1,this.loading=!1,this.address="",this.profileName="",this.charsStart=4,this.charsEnd=6}render(){return t`
      <button
        ?disabled=${this.disabled}
        class=${B(this.balance?void 0:"local-no-balance")}
        data-error=${B(this.isUnsupportedChain)}
      >
        ${this.imageTemplate()} ${this.addressTemplate()} ${this.balanceTemplate()}
      </button>
    `}imageTemplate(){const e=this.networkSrc?t`<wui-image src=${this.networkSrc}></wui-image>`:t` <wui-icon size="inherit" color="inherit" icon="networkPlaceholder"></wui-icon> `;return t`<wui-flex class="avatar-container">
      <wui-avatar
        .imageSrc=${this.avatarSrc}
        alt=${this.address}
        address=${this.address}
      ></wui-avatar>

      <wui-flex class="network-image-container">${e}</wui-flex>
    </wui-flex>`}addressTemplate(){return t`<wui-text variant="md-regular" color="inherit">
      ${this.address?H.getTruncateString({string:this.profileName||this.address,charsStart:this.profileName?18:this.charsStart,charsEnd:this.profileName?0:this.charsEnd,truncate:this.profileName?"end":"middle"}):null}
    </wui-text>`}balanceTemplate(){if(this.balance){const e=this.loading?t`<wui-loading-spinner size="md" color="inherit"></wui-loading-spinner>`:t`<wui-text variant="md-regular" color="inherit"> ${this.balance}</wui-text>`;return t`<wui-flex alignItems="center" justifyContent="center" class="balance-container"
        >${e}</wui-flex
      >`}return null}};oe.styles=[M,V,ie],ne([z()],oe.prototype,"networkSrc",void 0),ne([z()],oe.prototype,"avatarSrc",void 0),ne([z()],oe.prototype,"balance",void 0),ne([z({type:Boolean})],oe.prototype,"isUnsupportedChain",void 0),ne([z({type:Boolean})],oe.prototype,"disabled",void 0),ne([z({type:Boolean})],oe.prototype,"loading",void 0),ne([z()],oe.prototype,"address",void 0),ne([z()],oe.prototype,"profileName",void 0),ne([z()],oe.prototype,"charsStart",void 0),ne([z()],oe.prototype,"charsEnd",void 0),oe=ne([K("wui-account-button")],oe);var re=function(e,t,i,n){var o,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,n);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(r<3?o(a):r>3?o(t,i,a):o(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};class ae extends e{constructor(){super(...arguments),this.unsubscribe=[],this.disabled=!1,this.balance="show",this.charsStart=4,this.charsEnd=6,this.namespace=void 0,this.isSupported=!!n.state.allowUnsupportedChain||(!i.state.activeChain||i.checkIfSupportedNetwork(i.state.activeChain))}connectedCallback(){super.connectedCallback(),this.setAccountData(i.getAccountData(this.namespace)),this.setNetworkData(i.getNetworkData(this.namespace))}firstUpdated(){const e=this.namespace;e?this.unsubscribe.push(i.subscribeChainProp("accountState",e=>{this.setAccountData(e)},e),i.subscribeChainProp("networkState",t=>{this.setNetworkData(t),this.isSupported=i.checkIfSupportedNetwork(e,t?.caipNetwork?.caipNetworkId)},e)):this.unsubscribe.push(o.subscribeNetworkImages(()=>{this.networkImage=r.getNetworkImage(this.network)}),i.subscribeKey("activeCaipAddress",e=>{this.caipAddress=e}),a.subscribeKey("balance",e=>this.balanceVal=e),a.subscribeKey("balanceSymbol",e=>this.balanceSymbol=e),a.subscribeKey("profileName",e=>this.profileName=e),a.subscribeKey("profileImage",e=>this.profileImage=e),i.subscribeKey("activeCaipNetwork",e=>{this.network=e,this.networkImage=r.getNetworkImage(e),this.isSupported=!e?.chainNamespace||i.checkIfSupportedNetwork(e?.chainNamespace),this.fetchNetworkImage(e)}))}updated(){this.fetchNetworkImage(this.network)}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){if(!i.state.activeChain)return null;const e="show"===this.balance,o="string"!=typeof this.balanceVal,{formattedText:r}=s.parseBalance(this.balanceVal,this.balanceSymbol);return t`
      <wui-account-button
        .disabled=${Boolean(this.disabled)}
        .isUnsupportedChain=${!n.state.allowUnsupportedChain&&!this.isSupported}
        address=${B(s.getPlainAddress(this.caipAddress))}
        profileName=${B(this.profileName)}
        networkSrc=${B(this.networkImage)}
        avatarSrc=${B(this.profileImage)}
        balance=${e?r:""}
        @click=${this.onClick.bind(this)}
        data-testid=${"account-button"+(this.namespace?`-${this.namespace}`:"")}
        .charsStart=${this.charsStart}
        .charsEnd=${this.charsEnd}
        ?loading=${o}
      >
      </wui-account-button>
    `}onClick(){this.isSupported||n.state.allowUnsupportedChain?c.open({namespace:this.namespace}):c.open({view:"UnsupportedChain"})}async fetchNetworkImage(e){e?.assets?.imageId&&(this.networkImage=await r.fetchNetworkImage(e?.assets?.imageId))}setAccountData(e){e&&(this.caipAddress=e.caipAddress,this.balanceVal=e.balance,this.balanceSymbol=e.balanceSymbol,this.profileName=e.profileName,this.profileImage=e.profileImage)}setNetworkData(e){e&&(this.network=e.caipNetwork,this.networkImage=r.getNetworkImage(e.caipNetwork))}}re([z({type:Boolean})],ae.prototype,"disabled",void 0),re([z()],ae.prototype,"balance",void 0),re([z()],ae.prototype,"charsStart",void 0),re([z()],ae.prototype,"charsEnd",void 0),re([z()],ae.prototype,"namespace",void 0),re([_()],ae.prototype,"caipAddress",void 0),re([_()],ae.prototype,"balanceVal",void 0),re([_()],ae.prototype,"balanceSymbol",void 0),re([_()],ae.prototype,"profileName",void 0),re([_()],ae.prototype,"profileImage",void 0),re([_()],ae.prototype,"network",void 0),re([_()],ae.prototype,"networkImage",void 0),re([_()],ae.prototype,"isSupported",void 0);let se=class extends ae{};se=re([K("w3m-account-button")],se);let ce=class extends ae{};ce=re([K("appkit-account-button")],ce);const le=l`
  :host {
    display: block;
    width: max-content;
  }
`;var de=function(e,t,i,n){var o,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,n);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(r<3?o(a):r>3?o(t,i,a):o(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};class ue extends e{constructor(){super(...arguments),this.unsubscribe=[],this.disabled=!1,this.balance=void 0,this.size=void 0,this.label=void 0,this.loadingLabel=void 0,this.charsStart=4,this.charsEnd=6,this.namespace=void 0}firstUpdated(){this.caipAddress=this.namespace?i.state.chains.get(this.namespace)?.accountState?.caipAddress:i.state.activeCaipAddress,this.namespace?this.unsubscribe.push(i.subscribeChainProp("accountState",e=>{this.caipAddress=e?.caipAddress},this.namespace)):this.unsubscribe.push(i.subscribeKey("activeCaipAddress",e=>this.caipAddress=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return this.caipAddress?t`
          <appkit-account-button
            .disabled=${Boolean(this.disabled)}
            balance=${B(this.balance)}
            .charsStart=${B(this.charsStart)}
            .charsEnd=${B(this.charsEnd)}
            namespace=${B(this.namespace)}
          >
          </appkit-account-button>
        `:t`
          <appkit-connect-button
            size=${B(this.size)}
            label=${B(this.label)}
            loadingLabel=${B(this.loadingLabel)}
            namespace=${B(this.namespace)}
          ></appkit-connect-button>
        `}}ue.styles=le,de([z({type:Boolean})],ue.prototype,"disabled",void 0),de([z()],ue.prototype,"balance",void 0),de([z()],ue.prototype,"size",void 0),de([z()],ue.prototype,"label",void 0),de([z()],ue.prototype,"loadingLabel",void 0),de([z()],ue.prototype,"charsStart",void 0),de([z()],ue.prototype,"charsEnd",void 0),de([z()],ue.prototype,"namespace",void 0),de([_()],ue.prototype,"caipAddress",void 0);let he=class extends ue{};he=de([K("w3m-button")],he);let pe=class extends ue{};pe=de([K("appkit-button")],pe);const we=F`
  :host {
    position: relative;
    display: block;
  }

  button {
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  button[data-size='sm'] {
    padding: ${({spacing:e})=>e[2]};
  }

  button[data-size='md'] {
    padding: ${({spacing:e})=>e[3]};
  }

  button[data-size='lg'] {
    padding: ${({spacing:e})=>e[4]};
  }

  button[data-variant='primary'] {
    background: ${({tokens:e})=>e.core.backgroundAccentPrimary};
  }

  button[data-variant='secondary'] {
    background: ${({tokens:e})=>e.core.foregroundAccent010};
  }

  button:hover:enabled {
    border-radius: ${({borderRadius:e})=>e[3]};
  }

  button:disabled {
    cursor: not-allowed;
  }

  button[data-loading='true'] {
    cursor: not-allowed;
  }

  button[data-loading='true'][data-size='sm'] {
    border-radius: ${({borderRadius:e})=>e[32]};
    padding: ${({spacing:e})=>e[2]} ${({spacing:e})=>e[3]};
  }

  button[data-loading='true'][data-size='md'] {
    border-radius: ${({borderRadius:e})=>e[20]};
    padding: ${({spacing:e})=>e[3]} ${({spacing:e})=>e[4]};
  }

  button[data-loading='true'][data-size='lg'] {
    border-radius: ${({borderRadius:e})=>e[16]};
    padding: ${({spacing:e})=>e[4]} ${({spacing:e})=>e[5]};
  }
`;var me=function(e,t,i,n){var o,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,n);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(r<3?o(a):r>3?o(t,i,a):o(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let ge=class extends e{constructor(){super(...arguments),this.size="md",this.variant="primary",this.loading=!1,this.text="Connect Wallet"}render(){return t`
      <button
        data-loading=${this.loading}
        data-variant=${this.variant}
        data-size=${this.size}
        ?disabled=${this.loading}
      >
        ${this.contentTemplate()}
      </button>
    `}contentTemplate(){const e={lg:"lg-regular",md:"md-regular",sm:"sm-regular"},i={primary:"invert",secondary:"accent-primary"};return this.loading?t`<wui-loading-spinner
      color=${i[this.variant]}
      size=${this.size}
    ></wui-loading-spinner>`:t` <wui-text variant=${e[this.size]} color=${i[this.variant]}>
        ${this.text}
      </wui-text>`}};ge.styles=[M,V,we],me([z()],ge.prototype,"size",void 0),me([z()],ge.prototype,"variant",void 0),me([z({type:Boolean})],ge.prototype,"loading",void 0),me([z()],ge.prototype,"text",void 0),ge=me([K("wui-connect-button")],ge);var be=function(e,t,i,n){var o,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,n);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(r<3?o(a):r>3?o(t,i,a):o(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};class fe extends e{constructor(){super(),this.unsubscribe=[],this.size="md",this.label="Connect Wallet",this.loadingLabel="Connecting...",this.open=c.state.open,this.loading=this.namespace?c.state.loadingNamespaceMap.get(this.namespace):c.state.loading,this.unsubscribe.push(c.subscribe(e=>{this.open=e.open,this.loading=this.namespace?e.loadingNamespaceMap.get(this.namespace):e.loading}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return t`
      <wui-connect-button
        size=${B(this.size)}
        .loading=${this.loading}
        @click=${this.onClick.bind(this)}
        data-testid=${"connect-button"+(this.namespace?`-${this.namespace}`:"")}
      >
        ${this.loading?this.loadingLabel:this.label}
      </wui-connect-button>
    `}onClick(){this.open?c.close():this.loading||c.open({view:"Connect",namespace:this.namespace})}}be([z()],fe.prototype,"size",void 0),be([z()],fe.prototype,"label",void 0),be([z()],fe.prototype,"loadingLabel",void 0),be([z()],fe.prototype,"namespace",void 0),be([_()],fe.prototype,"open",void 0),be([_()],fe.prototype,"loading",void 0);let ye=class extends fe{};ye=be([K("w3m-connect-button")],ye);let ve=class extends fe{};ve=be([K("appkit-connect-button")],ve);const xe=F`
  :host {
    display: block;
  }

  button {
    border-radius: ${({borderRadius:e})=>e[32]};
    display: flex;
    gap: ${({spacing:e})=>e[1]};
    padding: ${({spacing:e})=>e[1]} ${({spacing:e})=>e[2]}
      ${({spacing:e})=>e[1]} ${({spacing:e})=>e[1]};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  @media (hover: hover) {
    button:hover:enabled {
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    }
  }

  button[data-size='sm'] > wui-icon-box,
  button[data-size='sm'] > wui-image {
    width: 16px;
    height: 16px;
  }

  button[data-size='md'] > wui-icon-box,
  button[data-size='md'] > wui-image {
    width: 20px;
    height: 20px;
  }

  button[data-size='lg'] > wui-icon-box,
  button[data-size='lg'] > wui-image {
    width: 24px;
    height: 24px;
  }

  wui-image,
  wui-icon-box {
    border-radius: ${({borderRadius:e})=>e[32]};
  }
`;var $e=function(e,t,i,n){var o,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,n);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(r<3?o(a):r>3?o(t,i,a):o(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let ke=class extends e{constructor(){super(...arguments),this.imageSrc=void 0,this.isUnsupportedChain=void 0,this.disabled=!1,this.size="lg"}render(){return t`
      <button data-size=${this.size} data-testid="wui-network-button" ?disabled=${this.disabled}>
        ${this.visualTemplate()}
        <wui-text variant=${{sm:"sm-regular",md:"md-regular",lg:"lg-regular"}[this.size]} color="primary">
          <slot></slot>
        </wui-text>
      </button>
    `}visualTemplate(){return this.isUnsupportedChain?t` <wui-icon-box color="error" icon="warningCircle"></wui-icon-box> `:this.imageSrc?t`<wui-image src=${this.imageSrc}></wui-image>`:t` <wui-icon-box color="default" icon="networkPlaceholder"></wui-icon-box> `}};ke.styles=[M,V,xe],$e([z()],ke.prototype,"imageSrc",void 0),$e([z({type:Boolean})],ke.prototype,"isUnsupportedChain",void 0),$e([z({type:Boolean})],ke.prototype,"disabled",void 0),$e([z()],ke.prototype,"size",void 0),ke=$e([K("wui-network-button")],ke);const Ce=l`
  :host {
    display: block;
    width: max-content;
  }
`;var Se=function(e,t,i,n){var o,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,n);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(r<3?o(a):r>3?o(t,i,a):o(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};class Re extends e{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.network=i.state.activeCaipNetwork,this.networkImage=r.getNetworkImage(this.network),this.caipAddress=i.state.activeCaipAddress,this.loading=c.state.loading,this.isSupported=!!n.state.allowUnsupportedChain||(!i.state.activeChain||i.checkIfSupportedNetwork(i.state.activeChain)),this.unsubscribe.push(o.subscribeNetworkImages(()=>{this.networkImage=r.getNetworkImage(this.network)}),i.subscribeKey("activeCaipAddress",e=>{this.caipAddress=e}),i.subscribeKey("activeCaipNetwork",e=>{this.network=e,this.networkImage=r.getNetworkImage(e),this.isSupported=!e?.chainNamespace||i.checkIfSupportedNetwork(e.chainNamespace),r.fetchNetworkImage(e?.assets?.imageId)}),c.subscribeKey("loading",e=>this.loading=e))}firstUpdated(){r.fetchNetworkImage(this.network?.assets?.imageId)}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const e=!this.network||i.checkIfSupportedNetwork(this.network.chainNamespace);return t`
      <wui-network-button
        .disabled=${Boolean(this.disabled||this.loading)}
        .isUnsupportedChain=${!n.state.allowUnsupportedChain&&!e}
        imageSrc=${B(this.networkImage)}
        @click=${this.onClick.bind(this)}
        data-testid="w3m-network-button"
      >
        ${this.getLabel()}
        <slot></slot>
      </wui-network-button>
    `}getLabel(){return this.network?this.isSupported||n.state.allowUnsupportedChain?this.network.name:"Switch Network":this.label?this.label:this.caipAddress?"Unknown Network":"Select Network"}onClick(){this.loading||(d.sendEvent({type:"track",event:"CLICK_NETWORKS"}),c.open({view:"Networks"}))}}Re.styles=Ce,Se([z({type:Boolean})],Re.prototype,"disabled",void 0),Se([z({type:String})],Re.prototype,"label",void 0),Se([_()],Re.prototype,"network",void 0),Se([_()],Re.prototype,"networkImage",void 0),Se([_()],Re.prototype,"caipAddress",void 0),Se([_()],Re.prototype,"loading",void 0),Se([_()],Re.prototype,"isSupported",void 0);let Ee=class extends Re{};Ee=Se([K("w3m-network-button")],Ee);let Ie=class extends Re{};Ie=Se([K("appkit-network-button")],Ie);const Te=F`
  :host {
    display: block;
  }

  button {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: ${({spacing:e})=>e[4]};
    padding: ${({spacing:e})=>e[3]};
    border-radius: ${({borderRadius:e})=>e[4]};
    background-color: ${({tokens:e})=>e.core.foregroundAccent010};
  }

  wui-flex > wui-icon {
    padding: ${({spacing:e})=>e[2]};
    color: ${({tokens:e})=>e.theme.textInvert};
    background-color: ${({tokens:e})=>e.core.backgroundAccentPrimary};
    border-radius: ${({borderRadius:e})=>e[2]};
    align-items: normal;
  }

  @media (hover: hover) {
    button:hover:enabled {
      background-color: ${({tokens:e})=>e.core.foregroundAccent020};
    }
  }
`;var Ae=function(e,t,i,n){var o,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,n);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(r<3?o(a):r>3?o(t,i,a):o(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let Oe=class extends e{constructor(){super(...arguments),this.label="",this.description="",this.icon="wallet"}render(){return t`
      <button>
        <wui-flex gap="2" alignItems="center">
          <wui-icon weight="fill" size="md" name=${this.icon} color="inherit"></wui-icon>
          <wui-flex flexDirection="column" gap="1">
            <wui-text variant="md-medium" color="primary">${this.label}</wui-text>
            <wui-text variant="md-regular" color="tertiary">${this.description}</wui-text>
          </wui-flex>
        </wui-flex>
        <wui-icon size="lg" color="accent-primary" name="chevronRight"></wui-icon>
      </button>
    `}};Oe.styles=[M,V,Te],Ae([z()],Oe.prototype,"label",void 0),Ae([z()],Oe.prototype,"description",void 0),Ae([z()],Oe.prototype,"icon",void 0),Oe=Ae([K("wui-notice-card")],Oe);var Ne=function(e,t,i,n){var o,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,n);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(r<3?o(a):r>3?o(t,i,a):o(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let Pe=class extends e{constructor(){super(),this.unsubscribe=[],this.socialProvider=u.getConnectedSocialProvider(),this.socialUsername=u.getConnectedSocialUsername(),this.namespace=i.state.activeChain,this.unsubscribe.push(i.subscribeKey("activeChain",e=>{this.namespace=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const e=h.getConnectorId(this.namespace),i=h.getAuthConnector();if(!i||e!==p.CONNECTOR_ID.AUTH)return this.style.cssText="display: none",null;const n=i.provider.getEmail()??"";return n||this.socialUsername?t`
      <wui-list-item
        ?rounded=${!0}
        icon=${this.socialProvider??"mail"}
        data-testid="w3m-account-email-update"
        ?chevron=${!this.socialProvider}
        @click=${()=>{this.onGoToUpdateEmail(n,this.socialProvider)}}
      >
        <wui-text variant="lg-regular" color="primary">${this.getAuthName(n)}</wui-text>
      </wui-list-item>
    `:(this.style.cssText="display: none",null)}onGoToUpdateEmail(e,t){t||w.push("UpdateEmailWallet",{email:e,redirectView:"Account"})}getAuthName(e){return this.socialUsername?"discord"===this.socialProvider&&this.socialUsername.endsWith("0")?this.socialUsername.slice(0,-1):this.socialUsername:e.length>30?`${e.slice(0,-3)}...`:e}};Ne([_()],Pe.prototype,"namespace",void 0),Pe=Ne([K("w3m-account-auth-button")],Pe);var je=function(e,t,i,n){var o,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,n);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(r<3?o(a):r>3?o(t,i,a):o(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let De=class extends e{constructor(){super(),this.usubscribe=[],this.networkImages=o.state.networkImages,this.address=a.state.address,this.profileImage=a.state.profileImage,this.profileName=a.state.profileName,this.network=i.state.activeCaipNetwork,this.disconnecting=!1,this.loading=!1,this.switched=!1,this.text="",this.remoteFeatures=n.state.remoteFeatures,this.usubscribe.push(a.subscribe(e=>{e.address&&(this.address=e.address,this.profileImage=e.profileImage,this.profileName=e.profileName)}),i.subscribeKey("activeCaipNetwork",e=>{e?.id&&(this.network=e)}),n.subscribeKey("remoteFeatures",e=>{this.remoteFeatures=e}))}disconnectedCallback(){this.usubscribe.forEach(e=>e())}render(){if(!this.address)throw new Error("w3m-account-settings-view: No account provided");const e=this.networkImages[this.network?.assets?.imageId??""];return t`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="4"
        .padding=${["0","5","3","5"]}
      >
        <wui-avatar
          alt=${this.address}
          address=${this.address}
          imageSrc=${B(this.profileImage)}
          size="lg"
        ></wui-avatar>
        <wui-flex flexDirection="column" alignItems="center">
          <wui-flex gap="1" alignItems="center" justifyContent="center">
            <wui-text variant="h5-medium" color="primary" data-testid="account-settings-address">
              ${H.getTruncateString({string:this.address,charsStart:4,charsEnd:6,truncate:"middle"})}
            </wui-text>
            <wui-icon-link
              size="md"
              icon="copy"
              iconColor="default"
              @click=${this.onCopyAddress}
            ></wui-icon-link>
          </wui-flex>
        </wui-flex>
      </wui-flex>
      <wui-flex flexDirection="column" gap="4">
        <wui-flex flexDirection="column" gap="2" .padding=${["6","4","3","4"]}>
          ${this.authCardTemplate()}
          <w3m-account-auth-button></w3m-account-auth-button>
          <wui-list-item
            imageSrc=${B(e)}
            ?chevron=${this.isAllowedNetworkSwitch()}
            ?fullSize=${!0}
            ?rounded=${!0}
            @click=${this.onNetworks.bind(this)}
            data-testid="account-switch-network-button"
          >
            <wui-text variant="lg-regular" color="primary">
              ${this.network?.name??"Unknown"}
            </wui-text>
          </wui-list-item>
          ${this.togglePreferredAccountBtnTemplate()} ${this.chooseNameButtonTemplate()}
          <wui-list-item
            ?rounded=${!0}
            icon="power"
            iconColor="error"
            ?chevron=${!1}
            .loading=${this.disconnecting}
            @click=${this.onDisconnect.bind(this)}
            data-testid="disconnect-button"
          >
            <wui-text variant="lg-regular" color="primary">Disconnect</wui-text>
          </wui-list-item>
        </wui-flex>
      </wui-flex>
    `}chooseNameButtonTemplate(){const e=this.network?.chainNamespace,n=h.getConnectorId(e),o=h.getAuthConnector();return i.checkIfNamesSupported()&&o&&n===p.CONNECTOR_ID.AUTH&&!this.profileName?t`
      <wui-list-item
        icon="id"
        ?rounded=${!0}
        ?chevron=${!0}
        @click=${this.onChooseName.bind(this)}
        data-testid="account-choose-name-button"
      >
        <wui-text variant="lg-regular" color="primary">Choose account name </wui-text>
      </wui-list-item>
    `:null}authCardTemplate(){const e=h.getConnectorId(this.network?.chainNamespace),i=h.getAuthConnector(),{origin:n}=location;return!i||e!==p.CONNECTOR_ID.AUTH||n.includes(m.SECURE_SITE)?null:t`
      <wui-notice-card
        @click=${this.onGoToUpgradeView.bind(this)}
        label="Upgrade your wallet"
        description="Transition to a self-custodial wallet"
        icon="wallet"
        data-testid="w3m-wallet-upgrade-card"
      ></wui-notice-card>
    `}isAllowedNetworkSwitch(){const e=i.getAllRequestedCaipNetworks(),t=!!e&&e.length>1,n=e?.find(({id:e})=>e===this.network?.id);return t||!n}onCopyAddress(){try{this.address&&(s.copyToClopboard(this.address),g.showSuccess("Address copied"))}catch{g.showError("Failed to copy")}}togglePreferredAccountBtnTemplate(){const e=this.network?.chainNamespace,n=i.checkIfSmartAccountEnabled(),o=h.getConnectorId(e);return h.getAuthConnector()&&o===p.CONNECTOR_ID.AUTH&&n?(this.switched||(this.text=b(e)===f.ACCOUNT_TYPES.SMART_ACCOUNT?"Switch to your EOA":"Switch to your Smart Account"),t`
      <wui-list-item
        icon="swapHorizontal"
        ?rounded=${!0}
        ?chevron=${!0}
        ?loading=${this.loading}
        @click=${this.changePreferredAccountType.bind(this)}
        data-testid="account-toggle-preferred-account-type"
      >
        <wui-text variant="lg-regular" color="primary">${this.text}</wui-text>
      </wui-list-item>
    `):null}onChooseName(){w.push("ChooseAccountName")}async changePreferredAccountType(){const e=this.network?.chainNamespace,t=i.checkIfSmartAccountEnabled(),n=b(e)!==f.ACCOUNT_TYPES.SMART_ACCOUNT&&t?f.ACCOUNT_TYPES.SMART_ACCOUNT:f.ACCOUNT_TYPES.EOA;h.getAuthConnector()&&(this.loading=!0,await y.setPreferredAccountType(n,e),this.text=n===f.ACCOUNT_TYPES.SMART_ACCOUNT?"Switch to your EOA":"Switch to your Smart Account",this.switched=!0,v.resetSend(),this.loading=!1,this.requestUpdate())}onNetworks(){this.isAllowedNetworkSwitch()&&w.push("Networks")}async onDisconnect(){try{this.disconnecting=!0;const e=this.network?.chainNamespace,t=y.getConnections(e).length>0,i=e&&h.state.activeConnectorIds[e],n=this.remoteFeatures?.multiWallet;await y.disconnect(n?{id:i,namespace:e}:{}),t&&n&&(w.push("ProfileWallets"),g.showSuccess("Wallet deleted"))}catch{d.sendEvent({type:"track",event:"DISCONNECT_ERROR",properties:{message:"Failed to disconnect"}}),g.showError("Failed to disconnect")}finally{this.disconnecting=!1}}onGoToUpgradeView(){d.sendEvent({type:"track",event:"EMAIL_UPGRADE_FROM_MODAL"}),w.push("UpgradeEmailWallet")}};je([_()],De.prototype,"address",void 0),je([_()],De.prototype,"profileImage",void 0),je([_()],De.prototype,"profileName",void 0),je([_()],De.prototype,"network",void 0),je([_()],De.prototype,"disconnecting",void 0),je([_()],De.prototype,"loading",void 0),je([_()],De.prototype,"switched",void 0),je([_()],De.prototype,"text",void 0),je([_()],De.prototype,"remoteFeatures",void 0),De=je([K("w3m-account-settings-view")],De);const Le=F`
  :host {
    flex: 1;
    height: 100%;
  }

  button {
    width: 100%;
    height: 100%;
    display: inline-flex;
    align-items: center;
    padding: ${({spacing:e})=>e[1]} ${({spacing:e})=>e[2]};
    column-gap: ${({spacing:e})=>e[1]};
    color: ${({tokens:e})=>e.theme.textSecondary};
    border-radius: ${({borderRadius:e})=>e[20]};
    background-color: transparent;
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color;
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  button[data-active='true'] {
    color: ${({tokens:e})=>e.theme.textPrimary};
    background-color: ${({tokens:e})=>e.theme.foregroundTertiary};
  }

  button:hover:enabled:not([data-active='true']),
  button:active:enabled:not([data-active='true']) {
    wui-text,
    wui-icon {
      color: ${({tokens:e})=>e.theme.textPrimary};
    }
  }
`;var We=function(e,t,i,n){var o,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,n);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(r<3?o(a):r>3?o(t,i,a):o(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};const ze={lg:"lg-regular",md:"md-regular",sm:"sm-regular"},_e={lg:"md",md:"sm",sm:"sm"};let Ue=class extends e{constructor(){super(...arguments),this.icon="mobile",this.size="md",this.label="",this.active=!1}render(){return t`
      <button data-active=${this.active}>
        ${this.icon?t`<wui-icon size=${_e[this.size]} name=${this.icon}></wui-icon>`:""}
        <wui-text variant=${ze[this.size]}> ${this.label} </wui-text>
      </button>
    `}};Ue.styles=[M,V,Le],We([z()],Ue.prototype,"icon",void 0),We([z()],Ue.prototype,"size",void 0),We([z()],Ue.prototype,"label",void 0),We([z({type:Boolean})],Ue.prototype,"active",void 0),Ue=We([K("wui-tab-item")],Ue);const Be=F`
  :host {
    display: inline-flex;
    align-items: center;
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    border-radius: ${({borderRadius:e})=>e[32]};
    padding: ${({spacing:e})=>e["01"]};
    box-sizing: border-box;
  }

  :host([data-size='sm']) {
    height: 26px;
  }

  :host([data-size='md']) {
    height: 36px;
  }
`;var Fe=function(e,t,i,n){var o,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,n);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(r<3?o(a):r>3?o(t,i,a):o(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let Me=class extends e{constructor(){super(...arguments),this.tabs=[],this.onTabChange=()=>null,this.size="md",this.activeTab=0}render(){return this.dataset.size=this.size,this.tabs.map((e,i)=>{const n=i===this.activeTab;return t`
        <wui-tab-item
          @click=${()=>this.onTabClick(i)}
          icon=${e.icon}
          size=${this.size}
          label=${e.label}
          ?active=${n}
          data-active=${n}
          data-testid="tab-${e.label?.toLowerCase()}"
        ></wui-tab-item>
      `})}onTabClick(e){this.activeTab=e,this.onTabChange(e)}};Me.styles=[M,V,Be],Fe([z({type:Array})],Me.prototype,"tabs",void 0),Fe([z()],Me.prototype,"onTabChange",void 0),Fe([z()],Me.prototype,"size",void 0),Fe([_()],Me.prototype,"activeTab",void 0),Me=Fe([K("wui-tabs")],Me);const Ve=F`
  button {
    display: flex;
    align-items: center;
    height: 40px;
    padding: ${({spacing:e})=>e[2]};
    border-radius: ${({borderRadius:e})=>e[4]};
    column-gap: ${({spacing:e})=>e[1]};
    background-color: transparent;
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color;
  }

  wui-image,
  .icon-box {
    width: ${({spacing:e})=>e[6]};
    height: ${({spacing:e})=>e[6]};
    border-radius: ${({borderRadius:e})=>e[4]};
  }

  wui-text {
    flex: 1;
  }

  .icon-box {
    position: relative;
  }

  .icon-box[data-active='true'] {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  .circle {
    position: absolute;
    left: 16px;
    top: 15px;
    width: 8px;
    height: 8px;
    background-color: ${({tokens:e})=>e.core.textSuccess};
    box-shadow: 0 0 0 2px ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: 50%;
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  @media (hover: hover) {
    button:hover:enabled,
    button:active:enabled {
      background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    }
  }
`;var Ke=function(e,t,i,n){var o,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,n);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(r<3?o(a):r>3?o(t,i,a):o(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let He=class extends e{constructor(){super(...arguments),this.address="",this.profileName="",this.alt="",this.imageSrc="",this.icon=void 0,this.iconSize="md",this.loading=!1,this.charsStart=4,this.charsEnd=6}render(){return t`
      <button>
        ${this.leftImageTemplate()} ${this.textTemplate()} ${this.rightImageTemplate()}
      </button>
    `}leftImageTemplate(){const e=this.icon?t`<wui-icon
          size=${B(this.iconSize)}
          color="default"
          name=${this.icon}
          class="icon"
        ></wui-icon>`:t`<wui-image src=${this.imageSrc} alt=${this.alt}></wui-image>`;return t`
      <wui-flex
        alignItems="center"
        justifyContent="center"
        class="icon-box"
        data-active=${Boolean(this.icon)}
      >
        ${e}
        <wui-flex class="circle"></wui-flex>
      </wui-flex>
    `}textTemplate(){return t`
      <wui-text variant="lg-regular" color="primary">
        ${H.getTruncateString({string:this.profileName||this.address,charsStart:this.profileName?16:this.charsStart,charsEnd:this.profileName?0:this.charsEnd,truncate:this.profileName?"end":"middle"})}
      </wui-text>
    `}rightImageTemplate(){return t`<wui-icon name="chevronBottom" size="sm" color="default"></wui-icon>`}};He.styles=[M,V,Ve],Ke([z()],He.prototype,"address",void 0),Ke([z()],He.prototype,"profileName",void 0),Ke([z()],He.prototype,"alt",void 0),Ke([z()],He.prototype,"imageSrc",void 0),Ke([z()],He.prototype,"icon",void 0),Ke([z()],He.prototype,"iconSize",void 0),Ke([z({type:Boolean})],He.prototype,"loading",void 0),Ke([z({type:Number})],He.prototype,"charsStart",void 0),Ke([z({type:Number})],He.prototype,"charsEnd",void 0),He=Ke([K("wui-wallet-switch")],He);const qe=F`
  wui-icon-link {
    margin-right: calc(${({spacing:e})=>e[8]} * -1);
  }

  wui-notice-card {
    margin-bottom: ${({spacing:e})=>e[1]};
  }

  wui-list-item > wui-text {
    flex: 1;
  }

  w3m-transactions-view {
    max-height: 200px;
  }

  .tab-content-container {
    height: 300px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  .tab-content-container::-webkit-scrollbar {
    display: none;
  }

  .account-button {
    width: auto;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${({spacing:e})=>e[3]};
    height: 48px;
    padding: ${({spacing:e})=>e[2]};
    padding-right: ${({spacing:e})=>e[3]};
    box-shadow: inset 0 0 0 1px ${({tokens:e})=>e.theme.foregroundPrimary};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[6]};
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
  }

  .account-button:hover {
    background-color: ${({tokens:e})=>e.core.glass010};
  }

  .avatar-container {
    position: relative;
  }

  wui-avatar.avatar {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 2px ${({tokens:e})=>e.core.glass010};
  }

  wui-wallet-switch {
    margin-top: ${({spacing:e})=>e[2]};
  }

  wui-avatar.network-avatar {
    width: 16px;
    height: 16px;
    position: absolute;
    left: 100%;
    top: 100%;
    transform: translate(-75%, -75%);
    box-shadow: 0 0 0 2px ${({tokens:e})=>e.core.glass010};
  }

  .account-links {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .account-links wui-flex {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    background: red;
    align-items: center;
    justify-content: center;
    height: 48px;
    padding: 10px;
    flex: 1 0 0;
    border-radius: var(--XS, 16px);
    border: 1px solid var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    background: var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    transition:
      background-color ${({durations:e})=>e.md}
        ${({easings:e})=>e["ease-out-power-1"]},
      opacity ${({durations:e})=>e.md} ${({easings:e})=>e["ease-out-power-1"]};
    will-change: background-color, opacity;
  }

  .account-links wui-flex:hover {
    background: var(--dark-accent-glass-015, rgba(71, 161, 255, 0.15));
  }

  .account-links wui-flex wui-icon {
    width: var(--S, 20px);
    height: var(--S, 20px);
  }

  .account-links wui-flex wui-icon svg path {
    stroke: #667dff;
  }
`;var Ge=function(e,t,i,n){var o,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,n);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(r<3?o(a):r>3?o(t,i,a):o(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let Ye=class extends e{constructor(){super(),this.unsubscribe=[],this.caipAddress=a.state.caipAddress,this.address=s.getPlainAddress(a.state.caipAddress),this.profileImage=a.state.profileImage,this.profileName=a.state.profileName,this.disconnecting=!1,this.balance=a.state.balance,this.balanceSymbol=a.state.balanceSymbol,this.features=n.state.features,this.remoteFeatures=n.state.remoteFeatures,this.namespace=i.state.activeChain,this.activeConnectorIds=h.state.activeConnectorIds,this.unsubscribe.push(a.subscribeKey("caipAddress",e=>{this.address=s.getPlainAddress(e),this.caipAddress=e}),a.subscribeKey("balance",e=>this.balance=e),a.subscribeKey("balanceSymbol",e=>this.balanceSymbol=e),a.subscribeKey("profileName",e=>this.profileName=e),a.subscribeKey("profileImage",e=>this.profileImage=e),n.subscribeKey("features",e=>this.features=e),n.subscribeKey("remoteFeatures",e=>this.remoteFeatures=e),h.subscribeKey("activeConnectorIds",e=>{this.activeConnectorIds=e}),i.subscribeKey("activeChain",e=>this.namespace=e),i.subscribeKey("activeCaipNetwork",e=>{e?.chainNamespace&&(this.namespace=e?.chainNamespace)}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){if(!this.caipAddress||!this.namespace)return null;const e=this.activeConnectorIds[this.namespace],i=e?h.getConnectorById(e):void 0,n=r.getConnectorImage(i),{value:o,decimals:a,symbol:c}=s.parseBalance(this.balance,this.balanceSymbol);return t`<wui-flex
        flexDirection="column"
        .padding=${["0","5","4","5"]}
        alignItems="center"
        gap="3"
      >
        <wui-avatar
          alt=${B(this.caipAddress)}
          address=${B(s.getPlainAddress(this.caipAddress))}
          imageSrc=${B(null===this.profileImage?void 0:this.profileImage)}
          data-testid="single-account-avatar"
        ></wui-avatar>
        <wui-wallet-switch
          profileName=${this.profileName}
          address=${this.address}
          imageSrc=${n}
          alt=${i?.name}
          @click=${this.onGoToProfileWalletsView.bind(this)}
          data-testid="wui-wallet-switch"
        ></wui-wallet-switch>
        <wui-flex flexDirection="row" alignItems="flex-end" justifyContent="center" gap="1">
          <wui-text variant="h3-regular" color="primary">${o}</wui-text>
          <wui-text variant="h3-regular" color="secondary">.${a}</wui-text>
          <wui-text variant="h6-medium" color="primary">${c}</wui-text>
        </wui-flex>
        ${this.explorerBtnTemplate()}
      </wui-flex>

      <wui-flex flexDirection="column" gap="2" .padding=${["0","3","3","3"]}>
        ${this.authCardTemplate()} <w3m-account-auth-button></w3m-account-auth-button>
        ${this.orderedFeaturesTemplate()} ${this.activityTemplate()}
        <wui-list-item
          .rounded=${!0}
          icon="power"
          iconColor="error"
          ?chevron=${!1}
          .loading=${this.disconnecting}
          .rightIcon=${!1}
          @click=${this.onDisconnect.bind(this)}
          data-testid="disconnect-button"
        >
          <wui-text variant="lg-regular" color="primary">Disconnect</wui-text>
        </wui-list-item>
      </wui-flex>`}fundWalletTemplate(){if(!this.namespace)return null;const e=m.ONRAMP_SUPPORTED_CHAIN_NAMESPACES.includes(this.namespace),i=m.PAY_WITH_EXCHANGE_SUPPORTED_CHAIN_NAMESPACES.includes(this.namespace),n=Boolean(this.features?.receive),o=this.remoteFeatures?.onramp&&e,r=this.remoteFeatures?.payWithExchange&&i;return o||n||r?t`
      <wui-list-item
        .rounded=${!0}
        data-testid="w3m-account-default-fund-wallet-button"
        iconVariant="blue"
        icon="dollar"
        ?chevron=${!0}
        @click=${this.handleClickFundWallet.bind(this)}
      >
        <wui-text variant="lg-regular" color="primary">Fund wallet</wui-text>
      </wui-list-item>
    `:null}orderedFeaturesTemplate(){return(this.features?.walletFeaturesOrder||m.DEFAULT_FEATURES.walletFeaturesOrder).map(e=>{switch(e){case"onramp":return this.fundWalletTemplate();case"swaps":return this.swapsTemplate();case"send":return this.sendTemplate();default:return null}})}activityTemplate(){if(!this.namespace)return null;return this.remoteFeatures?.activity&&m.ACTIVITY_ENABLED_CHAIN_NAMESPACES.includes(this.namespace)?t` <wui-list-item
          .rounded=${!0}
          icon="clock"
          ?chevron=${!0}
          @click=${this.onTransactions.bind(this)}
          data-testid="w3m-account-default-activity-button"
        >
          <wui-text variant="lg-regular" color="primary">Activity</wui-text>
        </wui-list-item>`:null}swapsTemplate(){const e=this.remoteFeatures?.swaps,n=i.state.activeChain===p.CHAIN.EVM;return e&&n?t`
      <wui-list-item
        .rounded=${!0}
        icon="recycleHorizontal"
        ?chevron=${!0}
        @click=${this.handleClickSwap.bind(this)}
        data-testid="w3m-account-default-swaps-button"
      >
        <wui-text variant="lg-regular" color="primary">Swap</wui-text>
      </wui-list-item>
    `:null}sendTemplate(){const e=this.features?.send,n=i.state.activeChain;if(!n)throw new Error("SendController:sendTemplate - namespace is required");const o=m.SEND_SUPPORTED_NAMESPACES.includes(n);return e&&o?t`
      <wui-list-item
        .rounded=${!0}
        icon="send"
        ?chevron=${!0}
        @click=${this.handleClickSend.bind(this)}
        data-testid="w3m-account-default-send-button"
      >
        <wui-text variant="lg-regular" color="primary">Send</wui-text>
      </wui-list-item>
    `:null}authCardTemplate(){const e=i.state.activeChain;if(!e)throw new Error("AuthCardTemplate:authCardTemplate - namespace is required");const n=h.getConnectorId(e),o=h.getAuthConnector(),{origin:r}=location;return!o||n!==p.CONNECTOR_ID.AUTH||r.includes(m.SECURE_SITE)?null:t`
      <wui-notice-card
        @click=${this.onGoToUpgradeView.bind(this)}
        label="Upgrade your wallet"
        description="Transition to a self-custodial wallet"
        icon="wallet"
        data-testid="w3m-wallet-upgrade-card"
      ></wui-notice-card>
    `}handleClickFundWallet(){w.push("FundWallet")}handleClickSwap(){w.push("Swap")}handleClickSend(){w.push("WalletSend")}explorerBtnTemplate(){return a.state.addressExplorerUrl?t`
      <wui-button size="md" variant="accent-primary" @click=${this.onExplorer.bind(this)}>
        <wui-icon size="sm" color="inherit" slot="iconLeft" name="compass"></wui-icon>
        Block Explorer
        <wui-icon size="sm" color="inherit" slot="iconRight" name="externalLink"></wui-icon>
      </wui-button>
    `:null}onTransactions(){d.sendEvent({type:"track",event:"CLICK_TRANSACTIONS",properties:{isSmartAccount:b(i.state.activeChain)===f.ACCOUNT_TYPES.SMART_ACCOUNT}}),w.push("Transactions")}async onDisconnect(){try{this.disconnecting=!0;const e=y.getConnections(this.namespace).length>0,t=this.namespace&&h.state.activeConnectorIds[this.namespace],i=this.remoteFeatures?.multiWallet;await y.disconnect(i?{id:t,namespace:this.namespace}:{}),e&&i&&(w.push("ProfileWallets"),g.showSuccess("Wallet deleted"))}catch{d.sendEvent({type:"track",event:"DISCONNECT_ERROR",properties:{message:"Failed to disconnect"}}),g.showError("Failed to disconnect")}finally{this.disconnecting=!1}}onExplorer(){const e=a.state.addressExplorerUrl;e&&s.openHref(e,"_blank")}onGoToUpgradeView(){d.sendEvent({type:"track",event:"EMAIL_UPGRADE_FROM_MODAL"}),w.push("UpgradeEmailWallet")}onGoToProfileWalletsView(){w.push("ProfileWallets")}};Ye.styles=qe,Ge([_()],Ye.prototype,"caipAddress",void 0),Ge([_()],Ye.prototype,"address",void 0),Ge([_()],Ye.prototype,"profileImage",void 0),Ge([_()],Ye.prototype,"profileName",void 0),Ge([_()],Ye.prototype,"disconnecting",void 0),Ge([_()],Ye.prototype,"balance",void 0),Ge([_()],Ye.prototype,"balanceSymbol",void 0),Ge([_()],Ye.prototype,"features",void 0),Ge([_()],Ye.prototype,"remoteFeatures",void 0),Ge([_()],Ye.prototype,"namespace",void 0),Ge([_()],Ye.prototype,"activeConnectorIds",void 0),Ye=Ge([K("w3m-account-default-widget")],Ye);const Xe=F`
  span {
    font-weight: 500;
    font-size: 38px;
    color: ${({tokens:e})=>e.theme.textPrimary};
    line-height: 38px;
    letter-spacing: -2%;
    text-align: center;
    font-family: var(--apkt-fontFamily-regular);
  }

  .pennies {
    color: ${({tokens:e})=>e.theme.textSecondary};
  }
`;var Qe=function(e,t,i,n){var o,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,n);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(r<3?o(a):r>3?o(t,i,a):o(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let Ze=class extends e{constructor(){super(...arguments),this.dollars="0",this.pennies="00"}render(){return t`<span>$${this.dollars}<span class="pennies">.${this.pennies}</span></span>`}};Ze.styles=[M,Xe],Qe([z()],Ze.prototype,"dollars",void 0),Qe([z()],Ze.prototype,"pennies",void 0),Ze=Qe([K("wui-balance")],Ze);const Je=F`
  :host {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  wui-icon {
    position: absolute;
    width: 12px !important;
    height: 4px !important;
  }

  /* -- Variants --------------------------------------------------------- */
  :host([data-variant='fill']) {
    background-color: ${({colors:e})=>e.neutrals100};
  }

  :host([data-variant='shade']) {
    background-color: ${({colors:e})=>e.neutrals900};
  }

  :host([data-variant='fill']) > wui-text {
    color: ${({colors:e})=>e.black};
  }

  :host([data-variant='shade']) > wui-text {
    color: ${({colors:e})=>e.white};
  }

  :host([data-variant='fill']) > wui-icon {
    color: ${({colors:e})=>e.neutrals100};
  }

  :host([data-variant='shade']) > wui-icon {
    color: ${({colors:e})=>e.neutrals900};
  }

  /* -- Sizes --------------------------------------------------------- */
  :host([data-size='sm']) {
    padding: ${({spacing:e})=>e[1]} ${({spacing:e})=>e[2]};
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  :host([data-size='md']) {
    padding: ${({spacing:e})=>e[2]} ${({spacing:e})=>e[3]};
    border-radius: ${({borderRadius:e})=>e[3]};
  }

  /* -- Placements --------------------------------------------------------- */
  wui-icon[data-placement='top'] {
    bottom: 0px;
    left: 50%;
    transform: translate(-50%, 95%);
  }

  wui-icon[data-placement='bottom'] {
    top: 0;
    left: 50%;
    transform: translate(-50%, -95%) rotate(180deg);
  }

  wui-icon[data-placement='right'] {
    top: 50%;
    left: 0;
    transform: translate(-65%, -50%) rotate(90deg);
  }

  wui-icon[data-placement='left'] {
    top: 50%;
    right: 0%;
    transform: translate(65%, -50%) rotate(270deg);
  }
`;var et=function(e,t,i,n){var o,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,n);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(r<3?o(a):r>3?o(t,i,a):o(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};const tt={sm:"sm-regular",md:"md-regular"};let it=class extends e{constructor(){super(...arguments),this.placement="top",this.variant="fill",this.size="md",this.message=""}render(){return this.dataset.variant=this.variant,this.dataset.size=this.size,t`<wui-icon data-placement=${this.placement} size="inherit" name="cursor"></wui-icon>
      <wui-text variant=${tt[this.size]}>${this.message}</wui-text>`}};it.styles=[M,V,Je],et([z()],it.prototype,"placement",void 0),et([z()],it.prototype,"variant",void 0),et([z()],it.prototype,"size",void 0),et([z()],it.prototype,"message",void 0),it=et([K("wui-tooltip")],it);const nt=l`
  :host {
    width: 100%;
    max-height: 280px;
    overflow: scroll;
    scrollbar-width: none;
  }

  :host::-webkit-scrollbar {
    display: none;
  }
`;let ot=class extends e{render(){return t`<w3m-activity-list page="account"></w3m-activity-list>`}};ot.styles=nt,ot=function(e,t,i,n){var o,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,n);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(r<3?o(a):r>3?o(t,i,a):o(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a}([K("w3m-account-activity-widget")],ot);const rt=F`
  .contentContainer {
    height: 280px;
  }

  .contentContainer > wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: ${({borderRadius:e})=>e[3]};
  }

  .contentContainer > .textContent {
    width: 65%;
  }
`;let at=class extends e{render(){return t`${this.nftTemplate()}`}nftTemplate(){return t` <wui-flex
      class="contentContainer"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      gap="5"
    >
      <wui-icon-box icon="wallet" size="lg" color="default"></wui-icon-box>
      <wui-flex
        class="textContent"
        gap="2"
        flexDirection="column"
        justifyContent="center"
        flexDirection="column"
      >
        <wui-text
          variant="md-regular"
          align="center"
          color="primary"
          data-testid="nft-template-title"
          >Coming soon</wui-text
        >
        <wui-text
          variant="sm-regular"
          align="center"
          color="secondary"
          data-testid="nft-template-description"
          >Stay tuned for our upcoming NFT feature</wui-text
        >
      </wui-flex>
      <wui-link @click=${this.onReceiveClick.bind(this)} data-testid="link-receive-funds"
        >Receive funds</wui-link
      >
    </wui-flex>`}onReceiveClick(){w.push("WalletReceive")}};at.styles=rt,at=function(e,t,i,n){var o,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,n);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(r<3?o(a):r>3?o(t,i,a):o(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a}([K("w3m-account-nfts-widget")],at);const st=F`
  :host {
    width: 100%;
  }

  button {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: ${({spacing:e})=>e[4]};
    padding: ${({spacing:e})=>e[4]};
    background-color: transparent;
    border-radius: ${({borderRadius:e})=>e[4]};
  }

  wui-text {
    max-width: 174px;
  }

  .tag-container {
    width: fit-content;
  }

  @media (hover: hover) {
    button:hover:enabled {
      background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    }
  }
`;var ct=function(e,t,i,n){var o,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,n);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(r<3?o(a):r>3?o(t,i,a):o(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let lt=class extends e{constructor(){super(...arguments),this.icon="card",this.text="",this.description="",this.tag=void 0,this.disabled=!1}render(){return t`
      <button ?disabled=${this.disabled}>
        <wui-flex alignItems="center" gap="3">
          <wui-icon-box padding="2" color="secondary" icon=${this.icon} size="lg"></wui-icon-box>
          <wui-flex flexDirection="column" gap="1">
            <wui-text variant="md-medium" color="primary">${this.text}</wui-text>
            ${this.description?t`<wui-text variant="md-regular" color="secondary">
                  ${this.description}</wui-text
                >`:null}
          </wui-flex>
        </wui-flex>

        <wui-flex class="tag-container" alignItems="center" gap="1" justifyContent="flex-end">
          ${this.tag?t`<wui-tag tagType="main" size="sm">${this.tag}</wui-tag>`:null}
          <wui-icon size="md" name="chevronRight" color="default"></wui-icon>
        </wui-flex>
      </button>
    `}};lt.styles=[M,V,st],ct([z()],lt.prototype,"icon",void 0),ct([z()],lt.prototype,"text",void 0),ct([z()],lt.prototype,"description",void 0),ct([z()],lt.prototype,"tag",void 0),ct([z({type:Boolean})],lt.prototype,"disabled",void 0),lt=ct([K("wui-list-description")],lt);const dt=l`
  :host {
    width: 100%;
  }

  wui-flex {
    width: 100%;
  }

  .contentContainer {
    max-height: 280px;
    overflow: scroll;
    scrollbar-width: none;
  }

  .contentContainer::-webkit-scrollbar {
    display: none;
  }
`;var ut=function(e,t,i,n){var o,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,n);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(r<3?o(a):r>3?o(t,i,a):o(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let ht=class extends e{constructor(){super(),this.unsubscribe=[],this.tokenBalance=a.state.tokenBalance,this.remoteFeatures=n.state.remoteFeatures,this.unsubscribe.push(a.subscribe(e=>{this.tokenBalance=e.tokenBalance}),n.subscribeKey("remoteFeatures",e=>{this.remoteFeatures=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return t`${this.tokenTemplate()}`}tokenTemplate(){return this.tokenBalance&&this.tokenBalance?.length>0?t`<wui-flex class="contentContainer" flexDirection="column" gap="2">
        ${this.tokenItemTemplate()}
      </wui-flex>`:t` <wui-flex flexDirection="column">
      ${this.onRampTemplate()}
      <wui-list-description
        @click=${this.onReceiveClick.bind(this)}
        text="Receive funds"
        description="Scan the QR code and receive funds"
        icon="qrCode"
        iconColor="fg-200"
        iconBackgroundColor="fg-200"
        data-testid="w3m-account-receive-button"
      ></wui-list-description
    ></wui-flex>`}onRampTemplate(){return this.remoteFeatures?.onramp?t`<wui-list-description
        @click=${this.onBuyClick.bind(this)}
        text="Buy Crypto"
        description="Easy with card or bank account"
        icon="card"
        iconColor="success-100"
        iconBackgroundColor="success-100"
        tag="popular"
        data-testid="w3m-account-onramp-button"
      ></wui-list-description>`:t``}tokenItemTemplate(){return this.tokenBalance?.map(e=>t`<wui-list-token
          tokenName=${e.name}
          tokenImageUrl=${e.iconUrl}
          tokenAmount=${e.quantity.numeric}
          tokenValue=${e.value}
          tokenCurrency=${e.symbol}
        ></wui-list-token>`)}onReceiveClick(){w.push("WalletReceive")}onBuyClick(){d.sendEvent({type:"track",event:"SELECT_BUY_CRYPTO",properties:{isSmartAccount:b(i.state.activeChain)===f.ACCOUNT_TYPES.SMART_ACCOUNT}}),w.push("OnRampProviders")}};ht.styles=dt,ut([_()],ht.prototype,"tokenBalance",void 0),ut([_()],ht.prototype,"remoteFeatures",void 0),ht=ut([K("w3m-account-tokens-widget")],ht);const pt=F`
  wui-flex {
    width: 100%;
  }

  wui-promo {
    position: absolute;
    top: -32px;
  }

  wui-profile-button {
    margin-top: calc(-1 * ${({spacing:e})=>e[4]});
  }

  wui-promo + wui-profile-button {
    margin-top: ${({spacing:e})=>e[4]};
  }

  wui-tabs {
    width: 100%;
  }

  .contentContainer {
    height: 280px;
  }

  .contentContainer > wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: ${({borderRadius:e})=>e[3]};
  }

  .contentContainer > .textContent {
    width: 65%;
  }
`;var wt=function(e,t,i,n){var o,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,n);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(r<3?o(a):r>3?o(t,i,a):o(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let mt=class extends e{constructor(){super(),this.unsubscribe=[],this.address=a.state.address,this.profileName=a.state.profileName,this.network=i.state.activeCaipNetwork,this.currentTab=a.state.currentTab,this.tokenBalance=a.state.tokenBalance,this.features=n.state.features,this.namespace=i.state.activeChain,this.activeConnectorIds=h.state.activeConnectorIds,this.remoteFeatures=n.state.remoteFeatures,this.unsubscribe.push(a.subscribe(e=>{e.address?(this.address=e.address,this.profileName=e.profileName,this.currentTab=e.currentTab,this.tokenBalance=e.tokenBalance):c.close()}),h.subscribeKey("activeConnectorIds",e=>{this.activeConnectorIds=e}),i.subscribeKey("activeChain",e=>this.namespace=e),i.subscribeKey("activeCaipNetwork",e=>this.network=e),n.subscribeKey("features",e=>this.features=e),n.subscribeKey("remoteFeatures",e=>this.remoteFeatures=e)),this.watchSwapValues()}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),clearInterval(this.watchTokenBalance)}firstUpdated(){a.fetchTokenBalance()}render(){if(!this.address)throw new Error("w3m-account-view: No account provided");if(!this.namespace)return null;const e=this.activeConnectorIds[this.namespace],i=e?h.getConnectorById(e):void 0,{icon:n,iconSize:o}=this.getAuthData();return t`<wui-flex
      flexDirection="column"
      .padding=${["0","3","4","3"]}
      alignItems="center"
      gap="4"
      data-testid="w3m-account-wallet-features-widget"
    >
      <wui-flex flexDirection="column" justifyContent="center" alignItems="center" gap="2">
        <wui-wallet-switch
          profileName=${this.profileName}
          address=${this.address}
          icon=${n}
          iconSize=${o}
          alt=${i?.name}
          @click=${this.onGoToProfileWalletsView.bind(this)}
          data-testid="wui-wallet-switch"
        ></wui-wallet-switch>

        ${this.tokenBalanceTemplate()}
      </wui-flex>
      ${this.orderedWalletFeatures()} ${this.tabsTemplate()} ${this.listContentTemplate()}
    </wui-flex>`}orderedWalletFeatures(){const e=this.features?.walletFeaturesOrder||m.DEFAULT_FEATURES.walletFeaturesOrder;if(e.every(e=>"send"===e||"receive"===e?!this.features?.[e]:"swaps"!==e&&"onramp"!==e||!this.remoteFeatures?.[e]))return null;const i=e.map(e=>"receive"===e||"onramp"===e?"fund":e),n=[...new Set(i)];return t`<wui-flex gap="2">
      ${n.map(e=>{switch(e){case"fund":return this.fundWalletTemplate();case"swaps":return this.swapsTemplate();case"send":return this.sendTemplate();default:return null}})}
    </wui-flex>`}fundWalletTemplate(){if(!this.namespace)return null;const e=m.ONRAMP_SUPPORTED_CHAIN_NAMESPACES.includes(this.namespace),i=m.PAY_WITH_EXCHANGE_SUPPORTED_CHAIN_NAMESPACES.includes(this.namespace),n=this.features?.receive,o=this.remoteFeatures?.onramp&&e,r=this.remoteFeatures?.payWithExchange&&i;return o||n||r?t`
      <w3m-tooltip-trigger text="Fund wallet">
        <wui-button
          data-testid="wallet-features-fund-wallet-button"
          @click=${this.onFundWalletClick.bind(this)}
          variant="accent-secondary"
          size="lg"
          fullWidth
        >
          <wui-icon name="dollar"></wui-icon>
        </wui-button>
      </w3m-tooltip-trigger>
    `:null}swapsTemplate(){const e=this.remoteFeatures?.swaps,n=i.state.activeChain===p.CHAIN.EVM;return e&&n?t`
      <w3m-tooltip-trigger text="Swap">
        <wui-button
          fullWidth
          data-testid="wallet-features-swaps-button"
          @click=${this.onSwapClick.bind(this)}
          variant="accent-secondary"
          size="lg"
        >
          <wui-icon name="recycleHorizontal"></wui-icon>
        </wui-button>
      </w3m-tooltip-trigger>
    `:null}sendTemplate(){const e=this.features?.send,n=i.state.activeChain,o=m.SEND_SUPPORTED_NAMESPACES.includes(n);return e&&o?t`
      <w3m-tooltip-trigger text="Send">
        <wui-button
          fullWidth
          data-testid="wallet-features-send-button"
          @click=${this.onSendClick.bind(this)}
          variant="accent-secondary"
          size="lg"
        >
          <wui-icon name="send"></wui-icon>
        </wui-button>
      </w3m-tooltip-trigger>
    `:null}watchSwapValues(){this.watchTokenBalance=setInterval(()=>a.fetchTokenBalance(e=>this.onTokenBalanceError(e)),1e4)}onTokenBalanceError(e){if(e instanceof Error&&e.cause instanceof Response){e.cause.status===p.HTTP_STATUS_CODES.SERVICE_UNAVAILABLE&&clearInterval(this.watchTokenBalance)}}listContentTemplate(){return 0===this.currentTab?t`<w3m-account-tokens-widget></w3m-account-tokens-widget>`:1===this.currentTab?t`<w3m-account-nfts-widget></w3m-account-nfts-widget>`:2===this.currentTab?t`<w3m-account-activity-widget></w3m-account-activity-widget>`:t`<w3m-account-tokens-widget></w3m-account-tokens-widget>`}tokenBalanceTemplate(){if(this.tokenBalance&&this.tokenBalance?.length>=0){const e=s.calculateBalance(this.tokenBalance),{dollars:i="0",pennies:n="00"}=s.formatTokenBalance(e);return t`<wui-balance dollars=${i} pennies=${n}></wui-balance>`}return t`<wui-balance dollars="0" pennies="00"></wui-balance>`}tabsTemplate(){const e=Q.getTabsByNamespace(i.state.activeChain);return 0===e.length?null:t`<wui-tabs
      .onTabChange=${this.onTabChange.bind(this)}
      .activeTab=${this.currentTab}
      .tabs=${e}
    ></wui-tabs>`}onTabChange(e){a.setCurrentTab(e)}onFundWalletClick(){w.push("FundWallet")}onSwapClick(){this.network?.caipNetworkId&&!m.SWAP_SUPPORTED_NETWORKS.includes(this.network?.caipNetworkId)?w.push("UnsupportedChain",{swapUnsupportedChain:!0}):(d.sendEvent({type:"track",event:"OPEN_SWAP",properties:{network:this.network?.caipNetworkId||"",isSmartAccount:b(i.state.activeChain)===f.ACCOUNT_TYPES.SMART_ACCOUNT}}),w.push("Swap"))}getAuthData(){const e=u.getConnectedSocialProvider(),t=u.getConnectedSocialUsername(),i=h.getAuthConnector(),n=i?.provider.getEmail()??"";return{name:x.getAuthName({email:n,socialUsername:t,socialProvider:e}),icon:e??"mail",iconSize:e?"xl":"md"}}onGoToProfileWalletsView(){w.push("ProfileWallets")}onSendClick(){d.sendEvent({type:"track",event:"OPEN_SEND",properties:{network:this.network?.caipNetworkId||"",isSmartAccount:b(i.state.activeChain)===f.ACCOUNT_TYPES.SMART_ACCOUNT}}),w.push("WalletSend")}};mt.styles=pt,wt([_()],mt.prototype,"watchTokenBalance",void 0),wt([_()],mt.prototype,"address",void 0),wt([_()],mt.prototype,"profileName",void 0),wt([_()],mt.prototype,"network",void 0),wt([_()],mt.prototype,"currentTab",void 0),wt([_()],mt.prototype,"tokenBalance",void 0),wt([_()],mt.prototype,"features",void 0),wt([_()],mt.prototype,"namespace",void 0),wt([_()],mt.prototype,"activeConnectorIds",void 0),wt([_()],mt.prototype,"remoteFeatures",void 0),mt=wt([K("w3m-account-wallet-features-widget")],mt);var gt=function(e,t,i,n){var o,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,n);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(r<3?o(a):r>3?o(t,i,a):o(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let bt=class extends e{constructor(){super(),this.unsubscribe=[],this.namespace=i.state.activeChain,this.unsubscribe.push(i.subscribeKey("activeChain",e=>{this.namespace=e}))}render(){if(!this.namespace)return null;const e=h.getConnectorId(this.namespace),i=h.getAuthConnector();return t`
      ${i&&e===p.CONNECTOR_ID.AUTH?this.walletFeaturesTemplate():this.defaultTemplate()}
    `}walletFeaturesTemplate(){return t`<w3m-account-wallet-features-widget></w3m-account-wallet-features-widget>`}defaultTemplate(){return t`<w3m-account-default-widget></w3m-account-default-widget>`}};gt([_()],bt.prototype,"namespace",void 0),bt=gt([K("w3m-account-view")],bt);const ft=F`
  wui-image {
    width: 24px;
    height: 24px;
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  wui-image,
  .icon-box {
    width: 32px;
    height: 32px;
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  wui-icon:not(.custom-icon, .icon-badge) {
    cursor: pointer;
  }

  .icon-box {
    position: relative;
    border-radius: ${({borderRadius:e})=>e[2]};
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  .icon-badge {
    position: absolute;
    top: 18px;
    left: 23px;
    z-index: 3;
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border: 2px solid ${({tokens:e})=>e.theme.backgroundPrimary};
    border-radius: 50%;
    padding: ${({spacing:e})=>e["01"]};
  }

  .icon-badge {
    width: 8px;
    height: 8px;
  }
`;var yt=function(e,t,i,n){var o,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,n);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(r<3?o(a):r>3?o(t,i,a):o(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let vt=class extends e{constructor(){super(...arguments),this.address="",this.profileName="",this.content=[],this.alt="",this.imageSrc="",this.icon=void 0,this.iconSize="md",this.iconBadge=void 0,this.iconBadgeSize="md",this.buttonVariant="neutral-primary",this.enableMoreButton=!1,this.charsStart=4,this.charsEnd=6}render(){return t`
      <wui-flex flexDirection="column" rowgap="2">
        ${this.topTemplate()} ${this.bottomTemplate()}
      </wui-flex>
    `}topTemplate(){return t`
      <wui-flex alignItems="flex-start" justifyContent="space-between">
        ${this.imageOrIconTemplate()}
        <wui-icon-link
          variant="secondary"
          size="md"
          icon="copy"
          @click=${this.dispatchCopyEvent}
        ></wui-icon-link>
        <wui-icon-link
          variant="secondary"
          size="md"
          icon="externalLink"
          @click=${this.dispatchExternalLinkEvent}
        ></wui-icon-link>
        ${this.enableMoreButton?t`<wui-icon-link
              variant="secondary"
              size="md"
              icon="threeDots"
              @click=${this.dispatchMoreButtonEvent}
              data-testid="wui-active-profile-wallet-item-more-button"
            ></wui-icon-link>`:null}
      </wui-flex>
    `}bottomTemplate(){return t` <wui-flex flexDirection="column">${this.contentTemplate()}</wui-flex> `}imageOrIconTemplate(){return this.icon?t`
        <wui-flex flexGrow="1" alignItems="center">
          <wui-flex alignItems="center" justifyContent="center" class="icon-box">
            <wui-icon size="lg" color="default" name=${this.icon} class="custom-icon"></wui-icon>

            ${this.iconBadge?t`<wui-icon
                  color="accent-primary"
                  size="inherit"
                  name=${this.iconBadge}
                  class="icon-badge"
                ></wui-icon>`:null}
          </wui-flex>
        </wui-flex>
      `:t`
      <wui-flex flexGrow="1" alignItems="center">
        <wui-image objectFit="contain" src=${this.imageSrc} alt=${this.alt}></wui-image>
      </wui-flex>
    `}contentTemplate(){return 0===this.content.length?null:t`
      <wui-flex flexDirection="column" rowgap="3">
        ${this.content.map(e=>this.labelAndTagTemplate(e))}
      </wui-flex>
    `}labelAndTagTemplate({address:e,profileName:i,label:n,description:o,enableButton:r,buttonType:a,buttonLabel:s,buttonVariant:c,tagVariant:l,tagLabel:d,alignItems:u="flex-end"}){return t`
      <wui-flex justifyContent="space-between" alignItems=${u} columngap="1">
        <wui-flex flexDirection="column" rowgap="01">
          ${n?t`<wui-text variant="sm-medium" color="secondary">${n}</wui-text>`:null}

          <wui-flex alignItems="center" columngap="1">
            <wui-text variant="md-regular" color="primary">
              ${H.getTruncateString({string:i||e,charsStart:i?16:this.charsStart,charsEnd:i?0:this.charsEnd,truncate:i?"end":"middle"})}
            </wui-text>

            ${l&&d?t`<wui-tag variant=${l} size="sm">${d}</wui-tag>`:null}
          </wui-flex>

          ${o?t`<wui-text variant="sm-regular" color="secondary">${o}</wui-text>`:null}
        </wui-flex>

        ${r?this.buttonTemplate({buttonType:a,buttonLabel:s,buttonVariant:c}):null}
      </wui-flex>
    `}buttonTemplate({buttonType:e,buttonLabel:i,buttonVariant:n}){return t`
      <wui-button
        size="sm"
        variant=${n}
        @click=${"disconnect"===e?this.dispatchDisconnectEvent.bind(this):this.dispatchSwitchEvent.bind(this)}
        data-testid=${"disconnect"===e?"wui-active-profile-wallet-item-disconnect-button":"wui-active-profile-wallet-item-switch-button"}
      >
        ${i}
      </wui-button>
    `}dispatchDisconnectEvent(){this.dispatchEvent(new CustomEvent("disconnect",{bubbles:!0,composed:!0}))}dispatchSwitchEvent(){this.dispatchEvent(new CustomEvent("switch",{bubbles:!0,composed:!0}))}dispatchExternalLinkEvent(){this.dispatchEvent(new CustomEvent("externalLink",{bubbles:!0,composed:!0}))}dispatchMoreButtonEvent(){this.dispatchEvent(new CustomEvent("more",{bubbles:!0,composed:!0}))}dispatchCopyEvent(){this.dispatchEvent(new CustomEvent("copy",{bubbles:!0,composed:!0}))}};vt.styles=[M,V,ft],yt([z()],vt.prototype,"address",void 0),yt([z()],vt.prototype,"profileName",void 0),yt([z({type:Array})],vt.prototype,"content",void 0),yt([z()],vt.prototype,"alt",void 0),yt([z()],vt.prototype,"imageSrc",void 0),yt([z()],vt.prototype,"icon",void 0),yt([z()],vt.prototype,"iconSize",void 0),yt([z()],vt.prototype,"iconBadge",void 0),yt([z()],vt.prototype,"iconBadgeSize",void 0),yt([z()],vt.prototype,"buttonVariant",void 0),yt([z({type:Boolean})],vt.prototype,"enableMoreButton",void 0),yt([z({type:Number})],vt.prototype,"charsStart",void 0),yt([z({type:Number})],vt.prototype,"charsEnd",void 0),vt=yt([K("wui-active-profile-wallet-item")],vt);const xt=F`
  wui-image,
  .icon-box {
    width: 32px;
    height: 32px;
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  .right-icon {
    cursor: pointer;
  }

  .icon-box {
    position: relative;
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  .icon-badge {
    position: absolute;
    top: 18px;
    left: 23px;
    z-index: 3;
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border: 2px solid ${({tokens:e})=>e.theme.backgroundPrimary};
    border-radius: 50%;
    padding: ${({spacing:e})=>e["01"]};
  }

  .icon-badge {
    width: 8px;
    height: 8px;
  }
`;var $t=function(e,t,i,n){var o,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,n);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(r<3?o(a):r>3?o(t,i,a):o(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let kt=class extends e{constructor(){super(...arguments),this.address="",this.profileName="",this.alt="",this.buttonLabel="",this.buttonVariant="accent-primary",this.imageSrc="",this.icon=void 0,this.iconSize="md",this.iconBadgeSize="md",this.rightIcon="signOut",this.rightIconSize="md",this.loading=!1,this.charsStart=4,this.charsEnd=6}render(){return t`
      <wui-flex alignItems="center" columngap="2">
        ${this.imageOrIconTemplate()} ${this.labelAndDescriptionTemplate()}
        ${this.buttonActionTemplate()}
      </wui-flex>
    `}imageOrIconTemplate(){return this.icon?t`
        <wui-flex alignItems="center" justifyContent="center" class="icon-box">
          <wui-flex alignItems="center" justifyContent="center" class="icon-box">
            <wui-icon size="lg" color="default" name=${this.icon} class="custom-icon"></wui-icon>

            ${this.iconBadge?t`<wui-icon
                  color="default"
                  size="inherit"
                  name=${this.iconBadge}
                  class="icon-badge"
                ></wui-icon>`:null}
          </wui-flex>
        </wui-flex>
      `:t`<wui-image objectFit="contain" src=${this.imageSrc} alt=${this.alt}></wui-image>`}labelAndDescriptionTemplate(){return t`
      <wui-flex
        flexDirection="column"
        flexGrow="1"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        <wui-text variant="lg-regular" color="primary">
          ${H.getTruncateString({string:this.profileName||this.address,charsStart:this.profileName?16:this.charsStart,charsEnd:this.profileName?0:this.charsEnd,truncate:this.profileName?"end":"middle"})}
        </wui-text>
      </wui-flex>
    `}buttonActionTemplate(){return t`
      <wui-flex columngap="1" alignItems="center" justifyContent="center">
        <wui-button
          size="sm"
          variant=${this.buttonVariant}
          .loading=${this.loading}
          @click=${this.handleButtonClick}
          data-testid="wui-inactive-profile-wallet-item-button"
        >
          ${this.buttonLabel}
        </wui-button>

        <wui-icon-link
          variant="secondary"
          size="md"
          icon=${B(this.rightIcon)}
          class="right-icon"
          @click=${this.handleIconClick}
        ></wui-icon-link>
      </wui-flex>
    `}handleButtonClick(){this.dispatchEvent(new CustomEvent("buttonClick",{bubbles:!0,composed:!0}))}handleIconClick(){this.dispatchEvent(new CustomEvent("iconClick",{bubbles:!0,composed:!0}))}};kt.styles=[M,V,xt],$t([z()],kt.prototype,"address",void 0),$t([z()],kt.prototype,"profileName",void 0),$t([z()],kt.prototype,"alt",void 0),$t([z()],kt.prototype,"buttonLabel",void 0),$t([z()],kt.prototype,"buttonVariant",void 0),$t([z()],kt.prototype,"imageSrc",void 0),$t([z()],kt.prototype,"icon",void 0),$t([z()],kt.prototype,"iconSize",void 0),$t([z()],kt.prototype,"iconBadge",void 0),$t([z()],kt.prototype,"iconBadgeSize",void 0),$t([z()],kt.prototype,"rightIcon",void 0),$t([z()],kt.prototype,"rightIconSize",void 0),$t([z({type:Boolean})],kt.prototype,"loading",void 0),$t([z({type:Number})],kt.prototype,"charsStart",void 0),$t([z({type:Number})],kt.prototype,"charsEnd",void 0),kt=$t([K("wui-inactive-profile-wallet-item")],kt);const Ct={getAuthData(e){const t=e.connectorId===p.CONNECTOR_ID.AUTH;if(!t)return{isAuth:!1,icon:void 0,iconSize:void 0,name:void 0};const i=e?.auth?.name??u.getConnectedSocialProvider(),n=e?.auth?.username??u.getConnectedSocialUsername(),o=h.getAuthConnector(),r=o?.provider.getEmail()??"";return{isAuth:!0,icon:i??"mail",iconSize:i?"xl":"md",name:t?x.getAuthName({email:r,socialUsername:n,socialProvider:i}):void 0}}},St=F`
  :host {
    --connect-scroll--top-opacity: 0;
    --connect-scroll--bottom-opacity: 0;
  }

  .balance-amount {
    flex: 1;
  }

  .wallet-list {
    scrollbar-width: none;
    overflow-y: scroll;
    overflow-x: hidden;
    transition: opacity ${({easings:e})=>e["ease-out-power-1"]}
      ${({durations:e})=>e.md};
    will-change: opacity;
    mask-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, calc(1 - var(--connect-scroll--top-opacity))) 0px,
      rgba(200, 200, 200, calc(1 - var(--connect-scroll--top-opacity))) 1px,
      black 40px,
      black calc(100% - 40px),
      rgba(155, 155, 155, calc(1 - var(--connect-scroll--bottom-opacity))) calc(100% - 1px),
      rgba(0, 0, 0, calc(1 - var(--connect-scroll--bottom-opacity))) 100%
    );
  }

  .active-wallets {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[4]};
  }

  .active-wallets-box {
    height: 330px;
  }

  .empty-wallet-list-box {
    height: 400px;
  }

  .empty-box {
    width: 100%;
    padding: ${({spacing:e})=>e[4]};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[4]};
  }

  wui-separator {
    margin: ${({spacing:e})=>e[2]} 0 ${({spacing:e})=>e[2]} 0;
  }

  .active-connection {
    padding: ${({spacing:e})=>e[2]};
  }

  .recent-connection {
    padding: ${({spacing:e})=>e[2]} 0 ${({spacing:e})=>e[2]} 0;
  }

  @media (max-width: 430px) {
    .active-wallets-box,
    .empty-wallet-list-box {
      height: auto;
      max-height: clamp(360px, 470px, 80vh);
    }
  }
`;var Rt=function(e,t,i,n){var o,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,n);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(r<3?o(a):r>3?o(t,i,a):o(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};const Et={START:4,END:6},It={SIZE:"md",ICON:"lightbulb"},Tt=50,At=[0,1],Ot={eip155:"ethereum",solana:"solana",bip122:"bitcoin"},Nt=[{namespace:"eip155",icon:Ot.eip155,label:"EVM"},{namespace:"solana",icon:Ot.solana,label:"Solana"},{namespace:"bip122",icon:Ot.bip122,label:"Bitcoin"}],Pt={eip155:{title:"Add EVM Wallet",description:"Add your first EVM wallet"},solana:{title:"Add Solana Wallet",description:"Add your first Solana wallet"},bip122:{title:"Add Bitcoin Wallet",description:"Add your first Bitcoin wallet"}};let jt=class extends e{constructor(){super(),this.unsubscribers=[],this.currentTab=0,this.namespace=i.state.activeChain,this.namespaces=Array.from(i.state.chains.keys()),this.caipAddress=void 0,this.profileName=void 0,this.activeConnectorIds=h.state.activeConnectorIds,this.lastSelectedAddress="",this.lastSelectedConnectorId="",this.isSwitching=!1,this.caipNetwork=i.state.activeCaipNetwork,this.user=a.state.user,this.remoteFeatures=n.state.remoteFeatures,this.currentTab=this.namespace?this.namespaces.indexOf(this.namespace):0,this.caipAddress=i.getAccountData(this.namespace)?.caipAddress,this.profileName=i.getAccountData(this.namespace)?.profileName,this.unsubscribers.push(y.subscribeKey("connections",()=>this.onConnectionsChange()),y.subscribeKey("recentConnections",()=>this.requestUpdate()),h.subscribeKey("activeConnectorIds",e=>{this.activeConnectorIds=e}),i.subscribeKey("activeCaipNetwork",e=>this.caipNetwork=e),a.subscribeKey("user",e=>this.user=e),n.subscribeKey("remoteFeatures",e=>this.remoteFeatures=e)),this.chainListener=i.subscribeChainProp("accountState",e=>{this.caipAddress=e?.caipAddress,this.profileName=e?.profileName},this.namespace)}disconnectedCallback(){this.unsubscribers.forEach(e=>e()),this.resizeObserver?.disconnect(),this.removeScrollListener(),this.chainListener?.()}firstUpdated(){const e=this.shadowRoot?.querySelector(".wallet-list");if(!e)return;const t=()=>this.updateScrollOpacity(e);requestAnimationFrame(t),e.addEventListener("scroll",t),this.resizeObserver=new ResizeObserver(t),this.resizeObserver.observe(e),t()}render(){const e=this.namespace;if(!e)throw new Error("Namespace is not set");return t`
      <wui-flex flexDirection="column" .padding=${["0","4","4","4"]} gap="4">
        ${this.renderTabs()} ${this.renderHeader(e)} ${this.renderConnections(e)}
        ${this.renderAddConnectionButton(e)}
      </wui-flex>
    `}renderTabs(){const e=Nt.filter(e=>this.namespaces.includes(e.namespace));return e.length>1?t`
        <wui-tabs
          .onTabChange=${e=>this.handleTabChange(e)}
          .activeTab=${this.currentTab}
          .tabs=${e}
        ></wui-tabs>
      `:null}renderHeader(e){const i=this.getActiveConnections(e).flatMap(({accounts:e})=>e).length+(this.caipAddress?1:0);return t`
      <wui-flex alignItems="center" columngap="1">
        <wui-icon
          size="sm"
          name=${Ot[e]??Ot.eip155}
        ></wui-icon>
        <wui-text color="secondary" variant="lg-regular"
          >${i>1?"Wallets":"Wallet"}</wui-text
        >
        <wui-text
          color="primary"
          variant="lg-regular"
          class="balance-amount"
          data-testid="balance-amount"
        >
          ${i}
        </wui-text>
        <wui-link
          color="secondary"
          variant="secondary"
          @click=${()=>y.disconnect({namespace:e})}
          ?disabled=${!this.hasAnyConnections(e)}
          data-testid="disconnect-all-button"
        >
          Disconnect All
        </wui-link>
      </wui-flex>
    `}renderConnections(e){const i=this.hasAnyConnections(e);return t`
      <wui-flex flexDirection="column" class=${U({"wallet-list":!0,"active-wallets-box":i,"empty-wallet-list-box":!i})} rowgap="3">
        ${i?this.renderActiveConnections(e):this.renderEmptyState(e)}
      </wui-flex>
    `}renderActiveConnections(e){const i=this.getActiveConnections(e),n=this.activeConnectorIds[e],o=this.getPlainAddress();return t`
      ${o||n||i.length>0?t`<wui-flex
            flexDirection="column"
            .padding=${["4","0","4","0"]}
            class="active-wallets"
          >
            ${this.renderActiveProfile(e)} ${this.renderActiveConnectionsList(e)}
          </wui-flex>`:null}
      ${this.renderRecentConnections(e)}
    `}renderActiveProfile(e){const i=this.activeConnectorIds[e];if(!i)return null;const{connections:n}=$.getConnectionsData(e),o=h.getConnectorById(i),a=r.getConnectorImage(o),s=this.getPlainAddress();if(!s)return null;const c=e===p.CHAIN.BITCOIN,l=Ct.getAuthData({connectorId:i,accounts:[]}),d=this.getActiveConnections(e).flatMap(e=>e.accounts).length>0,u=n.find(e=>e.connectorId===i),w=u?.accounts.filter(e=>!k.isLowerCaseMatch(e.address,s));return t`
      <wui-flex flexDirection="column" .padding=${["0","4","0","4"]}>
        <wui-active-profile-wallet-item
          address=${s}
          alt=${o?.name}
          .content=${this.getProfileContent({address:s,connections:n,connectorId:i,namespace:e})}
          .charsStart=${Et.START}
          .charsEnd=${Et.END}
          .icon=${l.icon}
          .iconSize=${l.iconSize}
          .iconBadge=${this.isSmartAccount(s)?It.ICON:void 0}
          .iconBadgeSize=${this.isSmartAccount(s)?It.SIZE:void 0}
          imageSrc=${a}
          ?enableMoreButton=${l.isAuth}
          @copy=${()=>this.handleCopyAddress(s)}
          @disconnect=${()=>this.handleDisconnect(e,{id:i})}
          @switch=${()=>{c&&u&&w?.[0]&&this.handleSwitchWallet(u,w[0].address,e)}}
          @externalLink=${()=>this.handleExternalLink(s)}
          @more=${()=>this.handleMore()}
          data-testid="wui-active-profile-wallet-item"
        ></wui-active-profile-wallet-item>
        ${d?t`<wui-separator></wui-separator>`:null}
      </wui-flex>
    `}renderActiveConnectionsList(e){const i=this.getActiveConnections(e);return 0===i.length?null:t`
      <wui-flex flexDirection="column" .padding=${["0","2","0","2"]}>
        ${this.renderConnectionList(i,!1,e)}
      </wui-flex>
    `}renderRecentConnections(e){const{recentConnections:i}=$.getConnectionsData(e);return 0===i.flatMap(e=>e.accounts).length?null:t`
      <wui-flex flexDirection="column" .padding=${["0","2","0","2"]} rowGap="2">
        <wui-text color="secondary" variant="sm-medium" data-testid="recently-connected-text"
          >RECENTLY CONNECTED</wui-text
        >
        <wui-flex flexDirection="column" .padding=${["0","2","0","2"]}>
          ${this.renderConnectionList(i,!0,e)}
        </wui-flex>
      </wui-flex>
    `}renderConnectionList(e,i,n){return e.filter(e=>e.accounts.length>0).map((e,o)=>{const a=h.getConnectorById(e.connectorId),s=r.getConnectorImage(a)??"",c=Ct.getAuthData(e);return e.accounts.map((r,a)=>{const l=0!==o||0!==a,d=this.isAccountLoading(e.connectorId,r.address);return t`
            <wui-flex flexDirection="column">
              ${l?t`<wui-separator></wui-separator>`:null}
              <wui-inactive-profile-wallet-item
                address=${r.address}
                alt=${e.connectorId}
                buttonLabel=${i?"Connect":"Switch"}
                buttonVariant=${i?"neutral-secondary":"accent-secondary"}
                rightIcon=${i?"bin":"power"}
                rightIconSize="sm"
                class=${i?"recent-connection":"active-connection"}
                data-testid=${i?"recent-connection":"active-connection"}
                imageSrc=${s}
                .iconBadge=${this.isSmartAccount(r.address)?It.ICON:void 0}
                .iconBadgeSize=${this.isSmartAccount(r.address)?It.SIZE:void 0}
                .icon=${c.icon}
                .iconSize=${c.iconSize}
                .loading=${d}
                .showBalance=${!1}
                .charsStart=${Et.START}
                .charsEnd=${Et.END}
                @buttonClick=${()=>this.handleSwitchWallet(e,r.address,n)}
                @iconClick=${()=>this.handleWalletAction({connection:e,address:r.address,isRecentConnection:i,namespace:n})}
              ></wui-inactive-profile-wallet-item>
            </wui-flex>
          `})})}renderAddConnectionButton(e){if(!this.isMultiWalletEnabled()&&this.caipAddress)return null;if(!this.hasAnyConnections(e))return null;const{title:i}=this.getChainLabelInfo(e);return t`
      <wui-list-item
        variant="icon"
        iconVariant="overlay"
        icon="plus"
        iconSize="sm"
        ?chevron=${!0}
        @click=${()=>this.handleAddConnection(e)}
        data-testid="add-connection-button"
      >
        <wui-text variant="md-medium" color="secondary">${i}</wui-text>
      </wui-list-item>
    `}renderEmptyState(e){const{title:i,description:n}=this.getChainLabelInfo(e);return t`
      <wui-flex alignItems="flex-start" class="empty-template" data-testid="empty-template">
        <wui-flex
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          rowgap="3"
          class="empty-box"
        >
          <wui-icon-box size="xl" icon="wallet" color="secondary"></wui-icon-box>

          <wui-flex flexDirection="column" alignItems="center" justifyContent="center" gap="1">
            <wui-text color="primary" variant="lg-regular" data-testid="empty-state-text"
              >No wallet connected</wui-text
            >
            <wui-text color="secondary" variant="md-regular" data-testid="empty-state-description"
              >${n}</wui-text
            >
          </wui-flex>

          <wui-link
            @click=${()=>this.handleAddConnection(e)}
            data-testid="empty-state-button"
            icon="plus"
          >
            ${i}
          </wui-link>
        </wui-flex>
      </wui-flex>
    `}handleTabChange(e){const t=this.namespaces[e];t&&(this.chainListener?.(),this.currentTab=this.namespaces.indexOf(t),this.namespace=t,this.caipAddress=i.getAccountData(t)?.caipAddress,this.profileName=i.getAccountData(t)?.profileName,this.chainListener=i.subscribeChainProp("accountState",e=>{this.caipAddress=e?.caipAddress},t))}async handleSwitchWallet(e,t,i){try{this.isSwitching=!0,this.lastSelectedConnectorId=e.connectorId,this.lastSelectedAddress=t,await y.switchConnection({connection:e,address:t,namespace:i,closeModalOnConnect:!1,onChange({hasSwitchedAccount:e,hasSwitchedWallet:t}){t?g.showSuccess("Wallet switched"):e&&g.showSuccess("Account switched")}})}catch(n){g.showError("Failed to switch wallet")}finally{this.isSwitching=!1}}handleWalletAction(e){const{connection:t,address:i,isRecentConnection:n,namespace:o}=e;n?(u.deleteAddressFromConnection({connectorId:t.connectorId,address:i,namespace:o}),y.syncStorageConnections(),g.showSuccess("Wallet deleted")):this.handleDisconnect(o,{id:t.connectorId})}async handleDisconnect(e,{id:t}){try{await y.disconnect({id:t,namespace:e}),g.showSuccess("Wallet disconnected")}catch{g.showError("Failed to disconnect wallet")}}handleCopyAddress(e){s.copyToClopboard(e),g.showSuccess("Address copied")}handleMore(){w.push("AccountSettings")}handleExternalLink(e){const t=this.caipNetwork?.blockExplorers?.default.url;t&&s.openHref(`${t}/address/${e}`,"_blank")}handleAddConnection(e){h.setFilterByNamespace(e),w.push("Connect",{addWalletForNamespace:e})}getChainLabelInfo(e){return Pt[e]??{title:"Add Wallet",description:"Add your first wallet"}}isSmartAccount(e){if(!this.namespace)return!1;const t=this.user?.accounts?.find(e=>"smartAccount"===e.type);return!(!t||!e)&&k.isLowerCaseMatch(t.address,e)}getPlainAddress(){return this.caipAddress?s.getPlainAddress(this.caipAddress):void 0}getActiveConnections(e){const t=this.activeConnectorIds[e],{connections:i}=$.getConnectionsData(e),[n]=i.filter(e=>k.isLowerCaseMatch(e.connectorId,t));if(!t)return i;const o=e===p.CHAIN.BITCOIN,{address:r}=this.caipAddress?C.parseCaipAddress(this.caipAddress):{};let a=[...r?[r]:[]];return o&&n&&(a=n.accounts.map(e=>e.address)||[]),$.excludeConnectorAddressFromConnections({connectorId:t,addresses:a,connections:i})}hasAnyConnections(e){const t=this.getActiveConnections(e),{recentConnections:i}=$.getConnectionsData(e);return Boolean(this.caipAddress)||t.length>0||i.length>0}isAccountLoading(e,t){return k.isLowerCaseMatch(this.lastSelectedConnectorId,e)&&k.isLowerCaseMatch(this.lastSelectedAddress,t)&&this.isSwitching}getProfileContent(e){const{address:t,connections:i,connectorId:n,namespace:o}=e,[r]=i.filter(e=>k.isLowerCaseMatch(e.connectorId,n));if(o===p.CHAIN.BITCOIN&&r?.accounts.every(e=>"string"==typeof e.type))return this.getBitcoinProfileContent(r.accounts,t);const a=Ct.getAuthData({connectorId:n,accounts:[]});return[{address:t,tagLabel:"Active",tagVariant:"success",enableButton:!0,profileName:this.profileName,buttonType:"disconnect",buttonLabel:"Disconnect",buttonVariant:"neutral-secondary",...a.isAuth?{description:this.isSmartAccount(t)?"Smart Account":"EOA Account"}:{}}]}getBitcoinProfileContent(e,t){const i=e.length>1,n=this.getPlainAddress();return e.map(e=>{const o=k.isLowerCaseMatch(e.address,n);let r="PAYMENT";return"ordinal"===e.type&&(r="ORDINALS"),{address:e.address,tagLabel:k.isLowerCaseMatch(e.address,t)?"Active":void 0,tagVariant:k.isLowerCaseMatch(e.address,t)?"success":void 0,enableButton:!0,...i?{label:r,alignItems:"flex-end",buttonType:o?"disconnect":"switch",buttonLabel:o?"Disconnect":"Switch",buttonVariant:o?"neutral-secondary":"accent-secondary"}:{alignItems:"center",buttonType:"disconnect",buttonLabel:"Disconnect",buttonVariant:"neutral-secondary"}}})}removeScrollListener(){const e=this.shadowRoot?.querySelector(".wallet-list");e&&e.removeEventListener("scroll",()=>this.handleConnectListScroll())}handleConnectListScroll(){const e=this.shadowRoot?.querySelector(".wallet-list");e&&this.updateScrollOpacity(e)}isMultiWalletEnabled(){return Boolean(this.remoteFeatures?.multiWallet)}updateScrollOpacity(e){e.style.setProperty("--connect-scroll--top-opacity",Z.interpolate([0,Tt],At,e.scrollTop).toString()),e.style.setProperty("--connect-scroll--bottom-opacity",Z.interpolate([0,Tt],At,e.scrollHeight-e.scrollTop-e.offsetHeight).toString())}onConnectionsChange(){if(this.isMultiWalletEnabled()&&this.namespace){const{connections:e}=$.getConnectionsData(this.namespace);0===e.length&&w.reset("ProfileWallets")}this.requestUpdate()}};jt.styles=St,Rt([_()],jt.prototype,"currentTab",void 0),Rt([_()],jt.prototype,"namespace",void 0),Rt([_()],jt.prototype,"namespaces",void 0),Rt([_()],jt.prototype,"caipAddress",void 0),Rt([_()],jt.prototype,"profileName",void 0),Rt([_()],jt.prototype,"activeConnectorIds",void 0),Rt([_()],jt.prototype,"lastSelectedAddress",void 0),Rt([_()],jt.prototype,"lastSelectedConnectorId",void 0),Rt([_()],jt.prototype,"isSwitching",void 0),Rt([_()],jt.prototype,"caipNetwork",void 0),Rt([_()],jt.prototype,"user",void 0),Rt([_()],jt.prototype,"remoteFeatures",void 0),jt=Rt([K("w3m-profile-wallets-view")],jt);const Dt=F`
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  label {
    position: relative;
    display: inline-block;
    user-select: none;
    transition:
      background-color ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      color ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      border ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      box-shadow ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      width ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      height ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      transform ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      opacity ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color, color, border, box-shadow, width, height, transform, opacity;
  }

  input {
    width: 0;
    height: 0;
    opacity: 0;
  }

  span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${({colors:e})=>e.neutrals300};
    border-radius: ${({borderRadius:e})=>e.round};
    border: 1px solid transparent;
    will-change: border;
    transition:
      background-color ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      color ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      border ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      box-shadow ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      width ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      height ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      transform ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      opacity ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color, color, border, box-shadow, width, height, transform, opacity;
  }

  span:before {
    content: '';
    position: absolute;
    background-color: ${({colors:e})=>e.white};
    border-radius: 50%;
  }

  /* -- Sizes --------------------------------------------------------- */
  label[data-size='lg'] {
    width: 48px;
    height: 32px;
  }

  label[data-size='md'] {
    width: 40px;
    height: 28px;
  }

  label[data-size='sm'] {
    width: 32px;
    height: 22px;
  }

  label[data-size='lg'] > span:before {
    height: 24px;
    width: 24px;
    left: 4px;
    top: 3px;
  }

  label[data-size='md'] > span:before {
    height: 20px;
    width: 20px;
    left: 4px;
    top: 3px;
  }

  label[data-size='sm'] > span:before {
    height: 16px;
    width: 16px;
    left: 3px;
    top: 2px;
  }

  /* -- Focus states --------------------------------------------------- */
  input:focus-visible:not(:checked) + span,
  input:focus:not(:checked) + span {
    border: 1px solid ${({tokens:e})=>e.core.iconAccentPrimary};
    background-color: ${({tokens:e})=>e.theme.textTertiary};
    box-shadow: 0px 0px 0px 4px rgba(9, 136, 240, 0.2);
  }

  input:focus-visible:checked + span,
  input:focus:checked + span {
    border: 1px solid ${({tokens:e})=>e.core.iconAccentPrimary};
    box-shadow: 0px 0px 0px 4px rgba(9, 136, 240, 0.2);
  }

  /* -- Checked states --------------------------------------------------- */
  input:checked + span {
    background-color: ${({tokens:e})=>e.core.iconAccentPrimary};
  }

  label[data-size='lg'] > input:checked + span:before {
    transform: translateX(calc(100% - 9px));
  }

  label[data-size='md'] > input:checked + span:before {
    transform: translateX(calc(100% - 9px));
  }

  label[data-size='sm'] > input:checked + span:before {
    transform: translateX(calc(100% - 7px));
  }

  /* -- Hover states ------------------------------------------------------- */
  label:hover > input:not(:checked):not(:disabled) + span {
    background-color: ${({colors:e})=>e.neutrals400};
  }

  label:hover > input:checked:not(:disabled) + span {
    background-color: ${({colors:e})=>e.accent080};
  }

  /* -- Disabled state --------------------------------------------------- */
  label:has(input:disabled) {
    pointer-events: none;
    user-select: none;
  }

  input:not(:checked):disabled + span {
    background-color: ${({colors:e})=>e.neutrals700};
  }

  input:checked:disabled + span {
    background-color: ${({colors:e})=>e.neutrals700};
  }

  input:not(:checked):disabled + span::before {
    background-color: ${({colors:e})=>e.neutrals400};
  }

  input:checked:disabled + span::before {
    background-color: ${({tokens:e})=>e.theme.textTertiary};
  }
`;var Lt=function(e,t,i,n){var o,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,n);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(r<3?o(a):r>3?o(t,i,a):o(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let Wt=class extends e{constructor(){super(...arguments),this.inputElementRef=Y(),this.checked=!1,this.disabled=!1,this.size="md"}render(){return t`
      <label data-size=${this.size}>
        <input
          ${X(this.inputElementRef)}
          type="checkbox"
          ?checked=${this.checked}
          ?disabled=${this.disabled}
          @change=${this.dispatchChangeEvent.bind(this)}
        />
        <span></span>
      </label>
    `}dispatchChangeEvent(){this.dispatchEvent(new CustomEvent("switchChange",{detail:this.inputElementRef.value?.checked,bubbles:!0,composed:!0}))}};Wt.styles=[M,V,Dt],Lt([z({type:Boolean})],Wt.prototype,"checked",void 0),Lt([z({type:Boolean})],Wt.prototype,"disabled",void 0),Lt([z()],Wt.prototype,"size",void 0),Wt=Lt([K("wui-toggle")],Wt);const zt=F`
  :host {
    height: auto;
  }

  :host > wui-flex {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: ${({spacing:e})=>e[2]};
    padding: ${({spacing:e})=>e[2]} ${({spacing:e})=>e[3]};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[4]};
    box-shadow: inset 0 0 0 1px ${({tokens:e})=>e.theme.foregroundPrimary};
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color;
    cursor: pointer;
  }

  wui-switch {
    pointer-events: none;
  }
`;var _t=function(e,t,i,n){var o,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,n);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(r<3?o(a):r>3?o(t,i,a):o(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let Ut=class extends e{constructor(){super(...arguments),this.checked=!1}render(){return t`
      <wui-flex>
        <wui-icon size="xl" name="walletConnectBrown"></wui-icon>
        <wui-toggle
          ?checked=${this.checked}
          size="sm"
          @switchChange=${this.handleToggleChange.bind(this)}
        ></wui-toggle>
      </wui-flex>
    `}handleToggleChange(e){e.stopPropagation(),this.checked=e.detail,this.dispatchSwitchEvent()}dispatchSwitchEvent(){this.dispatchEvent(new CustomEvent("certifiedSwitchChange",{detail:this.checked,bubbles:!0,composed:!0}))}};Ut.styles=[M,V,zt],_t([z({type:Boolean})],Ut.prototype,"checked",void 0),Ut=_t([K("wui-certified-switch")],Ut);const Bt=F`
  :host {
    position: relative;
    display: inline-block;
    width: 100%;
  }

  wui-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: ${({spacing:e})=>e[3]};
    color: ${({tokens:e})=>e.theme.iconDefault};
    cursor: pointer;
    padding: ${({spacing:e})=>e[2]};
    background-color: transparent;
    border-radius: ${({borderRadius:e})=>e[4]};
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
  }

  @media (hover: hover) {
    wui-icon:hover {
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    }
  }
`;var Ft=function(e,t,i,n){var o,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,n);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(r<3?o(a):r>3?o(t,i,a):o(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let Mt=class extends e{constructor(){super(...arguments),this.inputComponentRef=Y(),this.inputValue=""}render(){return t`
      <wui-input-text
        ${X(this.inputComponentRef)}
        placeholder="Search wallet"
        icon="search"
        type="search"
        enterKeyHint="search"
        size="sm"
        @inputChange=${this.onInputChange}
      >
        ${this.inputValue?t`<wui-icon
              @click=${this.clearValue}
              color="inherit"
              size="sm"
              name="close"
            ></wui-icon>`:null}
      </wui-input-text>
    `}onInputChange(e){this.inputValue=e.detail||""}clearValue(){const e=this.inputComponentRef.value,t=e?.inputElementRef.value;t&&(t.value="",this.inputValue="",t.focus(),t.dispatchEvent(new Event("input")))}};Mt.styles=[M,Bt],Ft([z()],Mt.prototype,"inputValue",void 0),Mt=Ft([K("wui-search-bar")],Mt);const Vt=S`<svg  viewBox="0 0 48 54" fill="none">
  <path
    d="M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z"
  />
</svg>`,Kt=F`
  :host {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 104px;
    width: 104px;
    row-gap: ${({spacing:e})=>e[2]};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[5]};
    position: relative;
  }

  wui-shimmer[data-type='network'] {
    border: none;
    -webkit-clip-path: var(--apkt-path-network);
    clip-path: var(--apkt-path-network);
  }

  svg {
    position: absolute;
    width: 48px;
    height: 54px;
    z-index: 1;
  }

  svg > path {
    stroke: ${({tokens:e})=>e.theme.foregroundSecondary};
    stroke-width: 1px;
  }

  @media (max-width: 350px) {
    :host {
      width: 100%;
    }
  }
`;var Ht=function(e,t,i,n){var o,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,n);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(r<3?o(a):r>3?o(t,i,a):o(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let qt=class extends e{constructor(){super(...arguments),this.type="wallet"}render(){return t`
      ${this.shimmerTemplate()}
      <wui-shimmer width="80px" height="20px"></wui-shimmer>
    `}shimmerTemplate(){return"network"===this.type?t` <wui-shimmer data-type=${this.type} width="48px" height="54px"></wui-shimmer>
        ${Vt}`:t`<wui-shimmer width="56px" height="56px"></wui-shimmer>`}};qt.styles=[M,V,Kt],Ht([z()],qt.prototype,"type",void 0),qt=Ht([K("wui-card-select-loader")],qt);const Gt=l`
  :host {
    display: grid;
    width: inherit;
    height: inherit;
  }
`;var Yt=function(e,t,i,n){var o,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,n);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(r<3?o(a):r>3?o(t,i,a):o(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let Xt=class extends e{render(){return this.style.cssText=`\n      grid-template-rows: ${this.gridTemplateRows};\n      grid-template-columns: ${this.gridTemplateColumns};\n      justify-items: ${this.justifyItems};\n      align-items: ${this.alignItems};\n      justify-content: ${this.justifyContent};\n      align-content: ${this.alignContent};\n      column-gap: ${this.columnGap&&`var(--apkt-spacing-${this.columnGap})`};\n      row-gap: ${this.rowGap&&`var(--apkt-spacing-${this.rowGap})`};\n      gap: ${this.gap&&`var(--apkt-spacing-${this.gap})`};\n      padding-top: ${this.padding&&H.getSpacingStyles(this.padding,0)};\n      padding-right: ${this.padding&&H.getSpacingStyles(this.padding,1)};\n      padding-bottom: ${this.padding&&H.getSpacingStyles(this.padding,2)};\n      padding-left: ${this.padding&&H.getSpacingStyles(this.padding,3)};\n      margin-top: ${this.margin&&H.getSpacingStyles(this.margin,0)};\n      margin-right: ${this.margin&&H.getSpacingStyles(this.margin,1)};\n      margin-bottom: ${this.margin&&H.getSpacingStyles(this.margin,2)};\n      margin-left: ${this.margin&&H.getSpacingStyles(this.margin,3)};\n    `,t`<slot></slot>`}};Xt.styles=[M,Gt],Yt([z()],Xt.prototype,"gridTemplateRows",void 0),Yt([z()],Xt.prototype,"gridTemplateColumns",void 0),Yt([z()],Xt.prototype,"justifyItems",void 0),Yt([z()],Xt.prototype,"alignItems",void 0),Yt([z()],Xt.prototype,"justifyContent",void 0),Yt([z()],Xt.prototype,"alignContent",void 0),Yt([z()],Xt.prototype,"columnGap",void 0),Yt([z()],Xt.prototype,"rowGap",void 0),Yt([z()],Xt.prototype,"gap",void 0),Yt([z()],Xt.prototype,"padding",void 0),Yt([z()],Xt.prototype,"margin",void 0),Xt=Yt([K("wui-grid")],Xt);const Qt=F`
  button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 104px;
    row-gap: ${({spacing:e})=>e[2]};
    padding: ${({spacing:e})=>e[3]} ${({spacing:e})=>e[0]};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: clamp(0px, ${({borderRadius:e})=>e[4]}, 20px);
    transition:
      color ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-1"]},
      background-color ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-1"]},
      border-radius ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-1"]};
    will-change: background-color, color, border-radius;
    outline: none;
    border: none;
  }

  button > wui-flex > wui-text {
    color: ${({tokens:e})=>e.theme.textPrimary};
    max-width: 86px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    justify-content: center;
  }

  button > wui-flex > wui-text.certified {
    max-width: 66px;
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    }
  }

  button:disabled > wui-flex > wui-text {
    color: ${({tokens:e})=>e.core.glass010};
  }

  [data-selected='true'] {
    background-color: ${({colors:e})=>e.accent020};
  }

  @media (hover: hover) and (pointer: fine) {
    [data-selected='true']:hover:enabled {
      background-color: ${({colors:e})=>e.accent010};
    }
  }

  [data-selected='true']:active:enabled {
    background-color: ${({colors:e})=>e.accent010};
  }

  @media (max-width: 350px) {
    button {
      width: 100%;
    }
  }
`;var Zt=function(e,t,i,n){var o,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,n);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(r<3?o(a):r>3?o(t,i,a):o(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let Jt=class extends e{constructor(){super(),this.observer=new IntersectionObserver(()=>{}),this.visible=!1,this.imageSrc=void 0,this.imageLoading=!1,this.isImpressed=!1,this.explorerId="",this.walletQuery="",this.certified=!1,this.wallet=void 0,this.observer=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting?(this.visible=!0,this.fetchImageSrc(),this.sendImpressionEvent()):this.visible=!1})},{threshold:.01})}firstUpdated(){this.observer.observe(this)}disconnectedCallback(){this.observer.disconnect()}render(){const e="certified"===this.wallet?.badge_type;return t`
      <button>
        ${this.imageTemplate()}
        <wui-flex flexDirection="row" alignItems="center" justifyContent="center" gap="1">
          <wui-text
            variant="md-regular"
            color="inherit"
            class=${B(e?"certified":void 0)}
            >${this.wallet?.name}</wui-text
          >
          ${e?t`<wui-icon size="sm" name="walletConnectBrown"></wui-icon>`:null}
        </wui-flex>
      </button>
    `}imageTemplate(){return!this.visible&&!this.imageSrc||this.imageLoading?this.shimmerTemplate():t`
      <wui-wallet-image
        size="lg"
        imageSrc=${B(this.imageSrc)}
        name=${B(this.wallet?.name)}
        .installed=${this.wallet?.installed??!1}
        badgeSize="sm"
      >
      </wui-wallet-image>
    `}shimmerTemplate(){return t`<wui-shimmer width="56px" height="56px"></wui-shimmer>`}async fetchImageSrc(){this.wallet&&(this.imageSrc=r.getWalletImage(this.wallet),this.imageSrc||(this.imageLoading=!0,this.imageSrc=await r.fetchWalletImage(this.wallet.image_id),this.imageLoading=!1))}sendImpressionEvent(){this.wallet&&!this.isImpressed&&(this.isImpressed=!0,d.sendEvent({type:"track",event:"WALLET_IMPRESSION",properties:{name:this.wallet.name,walletRank:this.wallet.order,explorerId:this.explorerId,view:w.state.view,query:this.walletQuery,certified:this.certified}}))}};Jt.styles=Qt,Zt([_()],Jt.prototype,"visible",void 0),Zt([_()],Jt.prototype,"imageSrc",void 0),Zt([_()],Jt.prototype,"imageLoading",void 0),Zt([_()],Jt.prototype,"isImpressed",void 0),Zt([z()],Jt.prototype,"explorerId",void 0),Zt([z()],Jt.prototype,"walletQuery",void 0),Zt([z()],Jt.prototype,"certified",void 0),Zt([z({type:Object})],Jt.prototype,"wallet",void 0),Jt=Zt([K("w3m-all-wallets-list-item")],Jt);const ei=F`
  wui-grid {
    max-height: clamp(360px, 400px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 104px);
  }

  @media (max-width: 350px) {
    wui-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  w3m-all-wallets-list-item {
    opacity: 0;
    animation-duration: ${({durations:e})=>e.xl};
    animation-timing-function: ${({easings:e})=>e["ease-inout-power-2"]};
    animation-name: fade-in;
    animation-fill-mode: forwards;
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  wui-loading-spinner {
    padding-top: ${({spacing:e})=>e[4]};
    padding-bottom: ${({spacing:e})=>e[4]};
    justify-content: center;
    grid-column: 1 / span 4;
  }
`;var ti=function(e,t,i,n){var o,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,n);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(r<3?o(a):r>3?o(t,i,a):o(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};const ii="local-paginator";let ni=class extends e{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.loading=!R.state.wallets.length,this.wallets=R.state.wallets,this.recommended=R.state.recommended,this.featured=R.state.featured,this.filteredWallets=R.state.filteredWallets,this.unsubscribe.push(R.subscribeKey("wallets",e=>this.wallets=e),R.subscribeKey("recommended",e=>this.recommended=e),R.subscribeKey("featured",e=>this.featured=e),R.subscribeKey("filteredWallets",e=>this.filteredWallets=e))}firstUpdated(){this.initialFetch(),this.createPaginationObserver()}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),this.paginationObserver?.disconnect()}render(){return t`
      <wui-grid
        data-scroll=${!this.loading}
        .padding=${["0","3","3","3"]}
        gap="2"
        justifyContent="space-between"
      >
        ${this.loading?this.shimmerTemplate(16):this.walletsTemplate()}
        ${this.paginationLoaderTemplate()}
      </wui-grid>
    `}async initialFetch(){this.loading=!0;const e=this.shadowRoot?.querySelector("wui-grid");e&&(await R.fetchWalletsByPage({page:1}),await e.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.loading=!1,e.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}shimmerTemplate(e,i){return[...Array(e)].map(()=>t`
        <wui-card-select-loader type="wallet" id=${B(i)}></wui-card-select-loader>
      `)}getWallets(){const e=[...this.featured,...this.recommended];this.filteredWallets?.length>0?e.push(...this.filteredWallets):e.push(...this.wallets);const t=s.uniqueBy(e,"id"),i=E.markWalletsAsInstalled(t);return E.markWalletsWithDisplayIndex(i)}walletsTemplate(){return this.getWallets().map(e=>t`
        <w3m-all-wallets-list-item
          data-testid="wallet-search-item-${e.id}"
          @click=${()=>this.onConnectWallet(e)}
          .wallet=${e}
          explorerId=${e.id}
          certified=${"certified"===this.badge}
        ></w3m-all-wallets-list-item>
      `)}paginationLoaderTemplate(){const{wallets:e,recommended:t,featured:i,count:n,mobileFilteredOutWalletsLength:o}=R.state,r=window.innerWidth<352?3:4,a=e.length+t.length;let s=Math.ceil(a/r)*r-a+r;return s-=e.length?i.length%r:0,0===n&&i.length>0?null:0===n||[...i,...e,...t].length<n-(o??0)?this.shimmerTemplate(s,ii):null}createPaginationObserver(){const e=this.shadowRoot?.querySelector(`#${ii}`);e&&(this.paginationObserver=new IntersectionObserver(([e])=>{if(e?.isIntersecting&&!this.loading){const{page:e,count:t,wallets:i}=R.state;i.length<t&&R.fetchWalletsByPage({page:e+1})}}),this.paginationObserver.observe(e))}onConnectWallet(e){h.selectWalletConnector(e)}};ni.styles=ei,ti([_()],ni.prototype,"loading",void 0),ti([_()],ni.prototype,"wallets",void 0),ti([_()],ni.prototype,"recommended",void 0),ti([_()],ni.prototype,"featured",void 0),ti([_()],ni.prototype,"filteredWallets",void 0),ti([_()],ni.prototype,"badge",void 0),ni=ti([K("w3m-all-wallets-list")],ni);const oi=l`
  wui-grid,
  wui-loading-spinner,
  wui-flex {
    height: 360px;
  }

  wui-grid {
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 104px);
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 350px) {
    wui-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;var ri=function(e,t,i,n){var o,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,n);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(r<3?o(a):r>3?o(t,i,a):o(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let ai=class extends e{constructor(){super(...arguments),this.prevQuery="",this.prevBadge=void 0,this.loading=!0,this.query=""}render(){return this.onSearch(),this.loading?t`<wui-loading-spinner color="accent-primary"></wui-loading-spinner>`:this.walletsTemplate()}async onSearch(){this.query.trim()===this.prevQuery.trim()&&this.badge===this.prevBadge||(this.prevQuery=this.query,this.prevBadge=this.badge,this.loading=!0,await R.searchWallet({search:this.query,badge:this.badge}),this.loading=!1)}walletsTemplate(){const{search:e}=R.state,i=E.markWalletsAsInstalled(e);return e.length?t`
      <wui-grid
        data-testid="wallet-list"
        .padding=${["0","3","3","3"]}
        rowGap="4"
        columngap="2"
        justifyContent="space-between"
      >
        ${i.map(e=>t`
            <w3m-all-wallets-list-item
              @click=${()=>this.onConnectWallet(e)}
              .wallet=${e}
              data-testid="wallet-search-item-${e.id}"
              explorerId=${e.id}
              certified=${"certified"===this.badge}
              walletQuery=${this.query}
            ></w3m-all-wallets-list-item>
          `)}
      </wui-grid>
    `:t`
        <wui-flex
          data-testid="no-wallet-found"
          justifyContent="center"
          alignItems="center"
          gap="3"
          flexDirection="column"
        >
          <wui-icon-box size="lg" color="default" icon="wallet"></wui-icon-box>
          <wui-text data-testid="no-wallet-found-text" color="secondary" variant="md-medium">
            No Wallet found
          </wui-text>
        </wui-flex>
      `}onConnectWallet(e){h.selectWalletConnector(e)}};ai.styles=oi,ri([_()],ai.prototype,"loading",void 0),ri([z()],ai.prototype,"query",void 0),ri([z()],ai.prototype,"badge",void 0),ai=ri([K("w3m-all-wallets-search")],ai);var si=function(e,t,i,n){var o,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,n);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(r<3?o(a):r>3?o(t,i,a):o(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let ci=class extends e{constructor(){super(...arguments),this.search="",this.badge=void 0,this.onDebouncedSearch=s.debounce(e=>{this.search=e})}render(){const e=this.search.length>=2;return t`
      <wui-flex .padding=${["1","3","3","3"]} gap="2" alignItems="center">
        <wui-search-bar @inputChange=${this.onInputChange.bind(this)}></wui-search-bar>
        <wui-certified-switch
          ?checked=${"certified"===this.badge}
          @certifiedSwitchChange=${this.onCertifiedSwitchChange.bind(this)}
          data-testid="wui-certified-switch"
        ></wui-certified-switch>
        ${this.qrButtonTemplate()}
      </wui-flex>
      ${e||this.badge?t`<w3m-all-wallets-search
            query=${this.search}
            .badge=${this.badge}
          ></w3m-all-wallets-search>`:t`<w3m-all-wallets-list .badge=${this.badge}></w3m-all-wallets-list>`}
    `}onInputChange(e){this.onDebouncedSearch(e.detail)}onCertifiedSwitchChange(e){e.detail?(this.badge="certified",g.showSvg("Only WalletConnect certified",{icon:"walletConnectBrown",iconColor:"accent-100"})):this.badge=void 0}qrButtonTemplate(){return s.isMobile()?t`
        <wui-icon-box
          size="xl"
          iconSize="xl"
          color="accent-primary"
          icon="qrCode"
          border
          borderColor="wui-accent-glass-010"
          @click=${this.onWalletConnectQr.bind(this)}
        ></wui-icon-box>
      `:null}onWalletConnectQr(){w.push("ConnectingWalletConnect")}};si([_()],ci.prototype,"search",void 0),si([_()],ci.prototype,"badge",void 0),ci=si([K("w3m-all-wallets-view")],ci);const li=F`
  button {
    display: flex;
    gap: ${({spacing:e})=>e[1]};
    padding: ${({spacing:e})=>e[4]};
    width: 100%;
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[4]};
    justify-content: center;
    align-items: center;
  }

  :host([data-size='sm']) button {
    padding: ${({spacing:e})=>e[2]};
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  :host([data-size='md']) button {
    padding: ${({spacing:e})=>e[3]};
    border-radius: ${({borderRadius:e})=>e[3]};
  }

  button:hover {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  button:disabled {
    opacity: 0.5;
  }
`;var di=function(e,t,i,n){var o,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,n);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(r<3?o(a):r>3?o(t,i,a):o(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let ui=class extends e{constructor(){super(...arguments),this.text="",this.disabled=!1,this.size="lg",this.icon="copy",this.tabIdx=void 0}render(){this.dataset.size=this.size;const e=`${this.size}-regular`;return t`
      <button ?disabled=${this.disabled} tabindex=${B(this.tabIdx)}>
        <wui-icon name=${this.icon} size=${this.size} color="default"></wui-icon>
        <wui-text align="center" variant=${e} color="primary">${this.text}</wui-text>
      </button>
    `}};ui.styles=[M,V,li],di([z()],ui.prototype,"text",void 0),di([z({type:Boolean})],ui.prototype,"disabled",void 0),di([z()],ui.prototype,"size",void 0),di([z()],ui.prototype,"icon",void 0),di([z()],ui.prototype,"tabIdx",void 0),ui=di([K("wui-list-button")],ui);const hi=F`
  wui-separator {
    margin: ${({spacing:e})=>e[3]} calc(${({spacing:e})=>e[3]} * -1);
    width: calc(100% + ${({spacing:e})=>e[3]} * 2);
  }

  wui-email-input {
    width: 100%;
  }

  form {
    width: 100%;
    display: block;
    position: relative;
  }

  wui-icon-link,
  wui-loading-spinner {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  wui-icon-link {
    right: ${({spacing:e})=>e[2]};
  }

  wui-loading-spinner {
    right: ${({spacing:e})=>e[3]};
  }

  wui-text {
    margin: ${({spacing:e})=>e[2]} ${({spacing:e})=>e[3]}
      ${({spacing:e})=>e[0]} ${({spacing:e})=>e[3]};
  }
`;var pi=function(e,t,i,n){var o,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,n);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(r<3?o(a):r>3?o(t,i,a):o(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let wi=class extends e{constructor(){super(),this.unsubscribe=[],this.formRef=Y(),this.email="",this.loading=!1,this.error="",this.remoteFeatures=n.state.remoteFeatures,this.unsubscribe.push(n.subscribeKey("remoteFeatures",e=>{this.remoteFeatures=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}firstUpdated(){this.formRef.value?.addEventListener("keydown",e=>{"Enter"===e.key&&this.onSubmitEmail(e)})}render(){const e=y.hasAnyConnection(p.CONNECTOR_ID.AUTH);return t`
      <form ${X(this.formRef)} @submit=${this.onSubmitEmail.bind(this)}>
        <wui-email-input
          @focus=${this.onFocusEvent.bind(this)}
          .disabled=${this.loading}
          @inputChange=${this.onEmailInputChange.bind(this)}
          tabIdx=${B(this.tabIdx)}
          ?disabled=${e}
        >
        </wui-email-input>

        ${this.submitButtonTemplate()}${this.loadingTemplate()}
        <input type="submit" hidden />
      </form>
      ${this.templateError()}
    `}submitButtonTemplate(){return!this.loading&&this.email.length>3?t`
          <wui-icon-link
            size="sm"
            icon="chevronRight"
            iconcolor="accent-100"
            @click=${this.onSubmitEmail.bind(this)}
          >
          </wui-icon-link>
        `:null}loadingTemplate(){return this.loading?t`<wui-loading-spinner size="md" color="accent-primary"></wui-loading-spinner>`:null}templateError(){return this.error?t`<wui-text variant="sm-medium" color="error">${this.error}</wui-text>`:null}onEmailInputChange(e){this.email=e.detail.trim(),this.error=""}async onSubmitEmail(e){if(!Q.isValidEmail(this.email))return void I.open({displayMessage:T.ALERT_WARNINGS.INVALID_EMAIL.displayMessage},"warning");if(!p.AUTH_CONNECTOR_SUPPORTED_CHAINS.find(e=>e===i.state.activeChain)){const e=i.getFirstCaipNetworkSupportsAuthConnector();if(e)return void w.push("SwitchNetwork",{network:e})}try{if(this.loading)return;this.loading=!0,e.preventDefault();const t=h.getAuthConnector();if(!t)throw new Error("w3m-email-login-widget: Auth connector not found");const{action:n}=await t.provider.connectEmail({email:this.email});if(d.sendEvent({type:"track",event:"EMAIL_SUBMITTED"}),"VERIFY_OTP"===n)d.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_SENT"}),w.push("EmailVerifyOtp",{email:this.email});else if("VERIFY_DEVICE"===n)w.push("EmailVerifyDevice",{email:this.email});else if("CONNECT"===n){const e=this.remoteFeatures?.multiWallet;await y.connectExternal(t,i.state.activeChain),e?(w.replace("ProfileWallets"),g.showSuccess("New Wallet Added")):w.replace("Account")}}catch(t){const e=s.parseError(t);e?.includes("Invalid email")?this.error="Invalid email. Try again.":g.showError(t)}finally{this.loading=!1}}onFocusEvent(){d.sendEvent({type:"track",event:"EMAIL_LOGIN_SELECTED"})}};wi.styles=hi,pi([z()],wi.prototype,"tabIdx",void 0),pi([_()],wi.prototype,"email",void 0),pi([_()],wi.prototype,"loading",void 0),pi([_()],wi.prototype,"error",void 0),pi([_()],wi.prototype,"remoteFeatures",void 0),wi=pi([K("w3m-email-login-widget")],wi);const mi=F`
  :host {
    display: block;
    width: 100%;
  }

  button {
    width: 100%;
    height: 52px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[4]};
  }

  @media (hover: hover) {
    button:hover:enabled {
      background: ${({tokens:e})=>e.theme.foregroundSecondary};
    }
  }

  button:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  button > wui-icon {
    width: 24px;
    height: 24px;
  }
`;var gi=function(e,t,i,n){var o,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,n);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(r<3?o(a):r>3?o(t,i,a):o(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let bi=class extends e{constructor(){super(...arguments),this.logo="google",this.disabled=!1,this.tabIdx=void 0}render(){return t`
      <button ?disabled=${this.disabled} tabindex=${B(this.tabIdx)}>
        <wui-icon name=${this.logo}></wui-icon>
      </button>
    `}};bi.styles=[M,V,mi],gi([z()],bi.prototype,"logo",void 0),gi([z({type:Boolean})],bi.prototype,"disabled",void 0),gi([z()],bi.prototype,"tabIdx",void 0),bi=gi([K("wui-logo-select")],bi);const fi=F`
  wui-separator {
    margin: ${({spacing:e})=>e[3]} calc(${({spacing:e})=>e[3]} * -1)
      ${({spacing:e})=>e[3]} calc(${({spacing:e})=>e[3]} * -1);
    width: calc(100% + ${({spacing:e})=>e[3]} * 2);
  }
`;var yi=function(e,t,i,n){var o,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,n);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(r<3?o(a):r>3?o(t,i,a):o(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let vi=class extends e{constructor(){super(),this.unsubscribe=[],this.walletGuide="get-started",this.tabIdx=void 0,this.connectors=h.state.connectors,this.remoteFeatures=n.state.remoteFeatures,this.authConnector=this.connectors.find(e=>"AUTH"===e.type),this.isPwaLoading=!1,this.unsubscribe.push(h.subscribeKey("connectors",e=>{this.connectors=e,this.authConnector=this.connectors.find(e=>"AUTH"===e.type)}),n.subscribeKey("remoteFeatures",e=>this.remoteFeatures=e))}connectedCallback(){super.connectedCallback(),this.handlePwaFrameLoad()}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return t`
      <wui-flex
        class="container"
        flexDirection="column"
        gap="2"
        data-testid="w3m-social-login-widget"
      >
        ${this.topViewTemplate()}${this.bottomViewTemplate()}
      </wui-flex>
    `}topViewTemplate(){const e="explore"===this.walletGuide;let t=this.remoteFeatures?.socials;return!t&&e?(t=m.DEFAULT_SOCIALS,this.renderTopViewContent(t)):t?this.renderTopViewContent(t):null}renderTopViewContent(e){return 2===e.length?t` <wui-flex gap="2">
        ${e.slice(0,2).map(e=>t`<wui-logo-select
              data-testid=${`social-selector-${e}`}
              @click=${()=>{this.onSocialClick(e)}}
              logo=${e}
              tabIdx=${B(this.tabIdx)}
              ?disabled=${this.isPwaLoading||this.hasConnection()}
            ></wui-logo-select>`)}
      </wui-flex>`:t` <wui-list-button
      data-testid=${`social-selector-${e[0]}`}
      @click=${()=>{this.onSocialClick(e[0])}}
      size="lg"
      icon=${B(e[0])}
      text=${`Continue with ${e[0]}`}
      tabIdx=${B(this.tabIdx)}
      ?disabled=${this.isPwaLoading||this.hasConnection()}
    ></wui-list-button>`}bottomViewTemplate(){let e=this.remoteFeatures?.socials;const i="explore"===this.walletGuide;return(!this.authConnector||!e||0===e.length)&&i&&(e=m.DEFAULT_SOCIALS),e?e.length<=2?null:e&&e.length>6?t`<wui-flex gap="2">
        ${e.slice(1,5).map(e=>t`<wui-logo-select
              data-testid=${`social-selector-${e}`}
              @click=${()=>{this.onSocialClick(e)}}
              logo=${e}
              tabIdx=${B(this.tabIdx)}
              ?focusable=${void 0!==this.tabIdx&&this.tabIdx>=0}
              ?disabled=${this.isPwaLoading||this.hasConnection()}
            ></wui-logo-select>`)}
        <wui-logo-select
          logo="more"
          tabIdx=${B(this.tabIdx)}
          @click=${this.onMoreSocialsClick.bind(this)}
          ?disabled=${this.isPwaLoading||this.hasConnection()}
          data-testid="social-selector-more"
        ></wui-logo-select>
      </wui-flex>`:e?t`<wui-flex gap="2">
      ${e.slice(1,e.length).map(e=>t`<wui-logo-select
            data-testid=${`social-selector-${e}`}
            @click=${()=>{this.onSocialClick(e)}}
            logo=${e}
            tabIdx=${B(this.tabIdx)}
            ?focusable=${void 0!==this.tabIdx&&this.tabIdx>=0}
            ?disabled=${this.isPwaLoading||this.hasConnection()}
          ></wui-logo-select>`)}
    </wui-flex>`:null:null}onMoreSocialsClick(){w.push("ConnectSocials")}async onSocialClick(e){if(!p.AUTH_CONNECTOR_SUPPORTED_CHAINS.find(e=>e===i.state.activeChain)){const e=i.getFirstCaipNetworkSupportsAuthConnector();if(e)return void w.push("SwitchNetwork",{network:e})}e&&await ee(e)}async handlePwaFrameLoad(){if(s.isPWA()){this.isPwaLoading=!0;try{this.authConnector?.provider instanceof A&&await this.authConnector.provider.init()}catch(e){I.open({displayMessage:"Error loading embedded wallet in PWA",debugMessage:e.message},"error")}finally{this.isPwaLoading=!1}}}hasConnection(){return y.hasAnyConnection(p.CONNECTOR_ID.AUTH)}};vi.styles=fi,yi([z()],vi.prototype,"walletGuide",void 0),yi([z()],vi.prototype,"tabIdx",void 0),yi([_()],vi.prototype,"connectors",void 0),yi([_()],vi.prototype,"remoteFeatures",void 0),yi([_()],vi.prototype,"authConnector",void 0),yi([_()],vi.prototype,"isPwaLoading",void 0),vi=yi([K("w3m-social-login-widget")],vi);var xi=function(e,t,i,n){var o,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,n);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(r<3?o(a):r>3?o(t,i,a):o(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let $i=class extends e{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=h.state.connectors,this.count=R.state.count,this.filteredCount=R.state.filteredWallets.length,this.isFetchingRecommendedWallets=R.state.isFetchingRecommendedWallets,this.unsubscribe.push(h.subscribeKey("connectors",e=>this.connectors=e),R.subscribeKey("count",e=>this.count=e),R.subscribeKey("filteredWallets",e=>this.filteredCount=e.length),R.subscribeKey("isFetchingRecommendedWallets",e=>this.isFetchingRecommendedWallets=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const e=this.connectors.find(e=>"walletConnect"===e.id),{allWallets:i}=n.state;if(!e||"HIDE"===i)return null;if("ONLY_MOBILE"===i&&!s.isMobile())return null;const o=R.state.featured.length,r=this.count+o,a=r<10?r:10*Math.floor(r/10),c=this.filteredCount>0?this.filteredCount:a;let l=`${c}`;this.filteredCount>0?l=`${this.filteredCount}`:c<r&&(l=`${c}+`);const d=y.hasAnyConnection(p.CONNECTOR_ID.WALLET_CONNECT);return t`
      <wui-list-wallet
        name="Search Wallet"
        walletIcon="search"
        showAllWallets
        @click=${this.onAllWallets.bind(this)}
        tagLabel=${l}
        tagVariant="info"
        data-testid="all-wallets"
        tabIdx=${B(this.tabIdx)}
        .loading=${this.isFetchingRecommendedWallets}
        ?disabled=${d}
        size="sm"
      ></wui-list-wallet>
    `}onAllWallets(){d.sendEvent({type:"track",event:"CLICK_ALL_WALLETS"}),w.push("AllWallets")}};xi([z()],$i.prototype,"tabIdx",void 0),xi([_()],$i.prototype,"connectors",void 0),xi([_()],$i.prototype,"count",void 0),xi([_()],$i.prototype,"filteredCount",void 0),xi([_()],$i.prototype,"isFetchingRecommendedWallets",void 0),$i=xi([K("w3m-all-wallets-widget")],$i);var ki=function(e,t,i,n){var o,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,n);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(r<3?o(a):r>3?o(t,i,a):o(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let Ci=class extends e{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=[],this.connections=y.state.connections,this.unsubscribe.push(y.subscribeKey("connections",e=>this.connections=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const e=this.connectors.filter(e=>"ANNOUNCED"===e.type);if(!e?.length)return this.style.cssText="display: none",null;const i=x.sortConnectorsByExplorerWallet(e);return t`
      <wui-flex flexDirection="column" gap="2">
        ${i.filter(x.showConnector).map(e=>{const i=(this.connections.get(e.chain)??[]).some(t=>k.isLowerCaseMatch(t.connectorId,e.id));return t`
            <w3m-list-wallet
              imageSrc=${B(r.getConnectorImage(e))}
              name=${e.name??"Unknown"}
              @click=${()=>this.onConnector(e)}
              tagVariant=${i?"info":"success"}
              tagLabel=${i?"connected":"installed"}
              size="sm"
              data-testid=${`wallet-selector-${e.id}`}
              .installed=${!0}
              tabIdx=${B(this.tabIdx)}
              rdnsId=${e.explorerWallet?.rdns}
              walletRank=${e.explorerWallet?.order}
            >
            </w3m-list-wallet>
          `})}
      </wui-flex>
    `}onConnector(e){"walletConnect"===e.id?s.isMobile()?w.push("AllWallets"):w.push("ConnectingWalletConnect"):w.push("ConnectingExternal",{connector:e,wallet:e.explorerWallet})}};ki([z()],Ci.prototype,"tabIdx",void 0),ki([z()],Ci.prototype,"connectors",void 0),ki([_()],Ci.prototype,"connections",void 0),Ci=ki([K("w3m-connect-announced-widget")],Ci);var Si=function(e,t,i,n){var o,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,n);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(r<3?o(a):r>3?o(t,i,a):o(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let Ri=class extends e{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=h.state.connectors,this.loading=!1,this.unsubscribe.push(h.subscribeKey("connectors",e=>this.connectors=e)),s.isTelegram()&&s.isIos()&&(this.loading=!y.state.wcUri,this.unsubscribe.push(y.subscribeKey("wcUri",e=>this.loading=!e)))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const{customWallets:e}=n.state;if(!e?.length)return this.style.cssText="display: none",null;const i=this.filterOutDuplicateWallets(e),o=y.hasAnyConnection(p.CONNECTOR_ID.WALLET_CONNECT);return t`<wui-flex flexDirection="column" gap="2">
      ${i.map(e=>t`
          <w3m-list-wallet
            imageSrc=${B(r.getWalletImage(e))}
            name=${e.name??"Unknown"}
            @click=${()=>this.onConnectWallet(e)}
            size="sm"
            data-testid=${`wallet-selector-${e.id}`}
            tabIdx=${B(this.tabIdx)}
            ?loading=${this.loading}
            ?disabled=${o}
            rdnsId=${e.rdns}
            walletRank=${e.order}
          >
          </w3m-list-wallet>
        `)}
    </wui-flex>`}filterOutDuplicateWallets(e){const t=u.getRecentWallets(),i=this.connectors.map(e=>e.info?.rdns).filter(Boolean),n=t.map(e=>e.rdns).filter(Boolean),o=i.concat(n);if(o.includes("io.metamask.mobile")&&s.isMobile()){const e=o.indexOf("io.metamask.mobile");o[e]="io.metamask"}return e.filter(e=>!o.includes(String(e?.rdns)))}onConnectWallet(e){this.loading||w.push("ConnectingWalletConnect",{wallet:e})}};Si([z()],Ri.prototype,"tabIdx",void 0),Si([_()],Ri.prototype,"connectors",void 0),Si([_()],Ri.prototype,"loading",void 0),Ri=Si([K("w3m-connect-custom-widget")],Ri);var Ei=function(e,t,i,n){var o,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,n);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(r<3?o(a):r>3?o(t,i,a):o(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let Ii=class extends e{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=h.state.connectors,this.unsubscribe.push(h.subscribeKey("connectors",e=>this.connectors=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const e=this.connectors.filter(e=>"EXTERNAL"===e.type).filter(x.showConnector).filter(e=>e.id!==p.CONNECTOR_ID.COINBASE_SDK);if(!e?.length)return this.style.cssText="display: none",null;const i=y.hasAnyConnection(p.CONNECTOR_ID.WALLET_CONNECT);return t`
      <wui-flex flexDirection="column" gap="2">
        ${e.map(e=>t`
            <w3m-list-wallet
              imageSrc=${B(r.getConnectorImage(e))}
              .installed=${!0}
              name=${e.name??"Unknown"}
              data-testid=${`wallet-selector-external-${e.id}`}
              size="sm"
              @click=${()=>this.onConnector(e)}
              tabIdx=${B(this.tabIdx)}
              ?disabled=${i}
              rdnsId=${e.explorerWallet?.rdns}
              walletRank=${e.explorerWallet?.order}
            >
            </w3m-list-wallet>
          `)}
      </wui-flex>
    `}onConnector(e){w.push("ConnectingExternal",{connector:e})}};Ei([z()],Ii.prototype,"tabIdx",void 0),Ei([_()],Ii.prototype,"connectors",void 0),Ii=Ei([K("w3m-connect-external-widget")],Ii);var Ti=function(e,t,i,n){var o,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,n);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(r<3?o(a):r>3?o(t,i,a):o(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let Ai=class extends e{constructor(){super(...arguments),this.tabIdx=void 0,this.wallets=[]}render(){if(!this.wallets.length)return this.style.cssText="display: none",null;const e=y.hasAnyConnection(p.CONNECTOR_ID.WALLET_CONNECT);return t`
      <wui-flex flexDirection="column" gap="2">
        ${this.wallets.map(i=>t`
            <w3m-list-wallet
              data-testid=${`wallet-selector-featured-${i.id}`}
              imageSrc=${B(r.getWalletImage(i))}
              name=${i.name??"Unknown"}
              @click=${()=>this.onConnectWallet(i)}
              tabIdx=${B(this.tabIdx)}
              size="sm"
              ?disabled=${e}
              rdnsId=${i.rdns}
              walletRank=${i.order}
            >
            </w3m-list-wallet>
          `)}
      </wui-flex>
    `}onConnectWallet(e){h.selectWalletConnector(e)}};Ti([z()],Ai.prototype,"tabIdx",void 0),Ti([z()],Ai.prototype,"wallets",void 0),Ai=Ti([K("w3m-connect-featured-widget")],Ai);var Oi=function(e,t,i,n){var o,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,n);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(r<3?o(a):r>3?o(t,i,a):o(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let Ni=class extends e{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=[],this.connections=y.state.connections,this.unsubscribe.push(y.subscribeKey("connections",e=>this.connections=e))}render(){const e=this.connectors.filter(x.showConnector);if(0===e.length)return this.style.cssText="display: none",null;const i=x.sortConnectorsByExplorerWallet(e);return t`
      <wui-flex flexDirection="column" gap="2">
        ${i.map(e=>{const i=(this.connections.get(e.chain)??[]).some(t=>k.isLowerCaseMatch(t.connectorId,e.id));return t`
            <w3m-list-wallet
              imageSrc=${B(r.getConnectorImage(e))}
              .installed=${!0}
              name=${e.name??"Unknown"}
              tagVariant=${i?"info":"success"}
              tagLabel=${i?"connected":"installed"}
              data-testid=${`wallet-selector-${e.id}`}
              size="sm"
              @click=${()=>this.onConnector(e)}
              tabIdx=${B(this.tabIdx)}
              rdnsId=${e.explorerWallet?.rdns}
              walletRank=${e.explorerWallet?.order}
            >
            </w3m-list-wallet>
          `})}
      </wui-flex>
    `}onConnector(e){h.setActiveConnector(e),w.push("ConnectingExternal",{connector:e,wallet:e.explorerWallet})}};Oi([z()],Ni.prototype,"tabIdx",void 0),Oi([z()],Ni.prototype,"connectors",void 0),Oi([_()],Ni.prototype,"connections",void 0),Ni=Oi([K("w3m-connect-injected-widget")],Ni);var Pi=function(e,t,i,n){var o,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,n);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(r<3?o(a):r>3?o(t,i,a):o(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let ji=class extends e{constructor(){super(),this.tabIdx=void 0,this.connectors=[]}render(){const e=this.connectors.filter(e=>"MULTI_CHAIN"===e.type&&"WalletConnect"!==e.name);if(!e?.length)return this.style.cssText="display: none",null;const i=x.sortConnectorsByExplorerWallet(e);return t`
      <wui-flex flexDirection="column" gap="2">
        ${i.map(e=>t`
            <w3m-list-wallet
              imageSrc=${B(r.getConnectorImage(e))}
              .installed=${!0}
              name=${e.name??"Unknown"}
              tagVariant="info"
              tagLabel="multichain"
              data-testid=${`wallet-selector-${e.id}`}
              size="sm"
              @click=${()=>this.onConnector(e)}
              tabIdx=${B(this.tabIdx)}
              rdnsId=${e.explorerWallet?.rdns}
              walletRank=${e.explorerWallet?.order}
            >
            </w3m-list-wallet>
          `)}
      </wui-flex>
    `}onConnector(e){h.setActiveConnector(e),w.push("ConnectingMultiChain")}};Pi([z()],ji.prototype,"tabIdx",void 0),Pi([z()],ji.prototype,"connectors",void 0),ji=Pi([K("w3m-connect-multi-chain-widget")],ji);var Di=function(e,t,i,n){var o,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,n);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(r<3?o(a):r>3?o(t,i,a):o(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let Li=class extends e{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=h.state.connectors,this.loading=!1,this.unsubscribe.push(h.subscribeKey("connectors",e=>this.connectors=e)),s.isTelegram()&&s.isIos()&&(this.loading=!y.state.wcUri,this.unsubscribe.push(y.subscribeKey("wcUri",e=>this.loading=!e)))}render(){const e=u.getRecentWallets().filter(e=>!E.isExcluded(e)).filter(e=>!this.hasWalletConnector(e)).filter(e=>this.isWalletCompatibleWithCurrentChain(e));if(!e.length)return this.style.cssText="display: none",null;const i=y.hasAnyConnection(p.CONNECTOR_ID.WALLET_CONNECT);return t`
      <wui-flex flexDirection="column" gap="2">
        ${e.map(e=>t`
            <w3m-list-wallet
              imageSrc=${B(r.getWalletImage(e))}
              name=${e.name??"Unknown"}
              @click=${()=>this.onConnectWallet(e)}
              tagLabel="recent"
              tagVariant="info"
              size="sm"
              tabIdx=${B(this.tabIdx)}
              ?loading=${this.loading}
              ?disabled=${i}
              rdnsId=${e.rdns}
              walletRank=${e.order}
            >
            </w3m-list-wallet>
          `)}
      </wui-flex>
    `}onConnectWallet(e){this.loading||h.selectWalletConnector(e)}hasWalletConnector(e){return this.connectors.some(t=>t.id===e.id||t.name===e.name)}isWalletCompatibleWithCurrentChain(e){const t=i.state.activeChain;return!t||!e.chains||e.chains.some(e=>{const i=e.split(":")[0];return t===i})}};Di([z()],Li.prototype,"tabIdx",void 0),Di([_()],Li.prototype,"connectors",void 0),Di([_()],Li.prototype,"loading",void 0),Li=Di([K("w3m-connect-recent-widget")],Li);var Wi=function(e,t,i,n){var o,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,n);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(r<3?o(a):r>3?o(t,i,a):o(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let zi=class extends e{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.wallets=[],this.loading=!1,s.isTelegram()&&s.isIos()&&(this.loading=!y.state.wcUri,this.unsubscribe.push(y.subscribeKey("wcUri",e=>this.loading=!e)))}render(){const{connectors:e}=h.state,{customWallets:i,featuredWalletIds:o}=n.state,a=e.find(e=>"walletConnect"===e.id),s=e.filter(e=>"INJECTED"===e.type||"ANNOUNCED"===e.type||"MULTI_CHAIN"===e.type);if(!a&&!s.length&&!i?.length)return null;const c=Boolean(n.state.features?.email||n.state.remoteFeatures?.email),l=Array.isArray(n.state.features?.socials)&&n.state.features?.socials.length>0||Array.isArray(n.state.remoteFeatures?.socials)&&n.state.remoteFeatures?.socials.length>0,d=s.filter(e=>"Browser Wallet"!==e.name),u=(o?.length||0)+(i?.length||0)+(d.length||0)+(c?1:0)+(l?1:0);if(u>=4)return this.style.cssText="display: none",null;const w=E.filterOutDuplicateWallets(this.wallets).slice(0,4-u);if(!w.length)return this.style.cssText="display: none",null;const m=y.hasAnyConnection(p.CONNECTOR_ID.WALLET_CONNECT);return t`
      <wui-flex flexDirection="column" gap="2">
        ${w.map(e=>t`
            <w3m-list-wallet
              imageSrc=${B(r.getWalletImage(e))}
              name=${e?.name??"Unknown"}
              @click=${()=>this.onConnectWallet(e)}
              size="sm"
              tabIdx=${B(this.tabIdx)}
              ?loading=${this.loading}
              ?disabled=${m}
              rdnsId=${e.rdns}
              walletRank=${e.order}
            >
            </w3m-list-wallet>
          `)}
      </wui-flex>
    `}onConnectWallet(e){if(this.loading)return;const t=h.getConnector({id:e.id,rdns:e.rdns});t?w.push("ConnectingExternal",{connector:t}):w.push("ConnectingWalletConnect",{wallet:e})}};Wi([z()],zi.prototype,"tabIdx",void 0),Wi([z()],zi.prototype,"wallets",void 0),Wi([_()],zi.prototype,"loading",void 0),zi=Wi([K("w3m-connect-recommended-widget")],zi);var _i=function(e,t,i,n){var o,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,n);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(r<3?o(a):r>3?o(t,i,a):o(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let Ui=class extends e{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=h.state.connectors,this.connectorImages=o.state.connectorImages,this.unsubscribe.push(h.subscribeKey("connectors",e=>this.connectors=e),o.subscribeKey("connectorImages",e=>this.connectorImages=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){if(s.isMobile())return this.style.cssText="display: none",null;const e=this.connectors.find(e=>"walletConnect"===e.id);if(!e)return this.style.cssText="display: none",null;const i=e.imageUrl||this.connectorImages[e?.imageId??""],n=y.hasAnyConnection(p.CONNECTOR_ID.WALLET_CONNECT);return t`
      <w3m-list-wallet
        imageSrc=${B(i)}
        name=${e.name??"Unknown"}
        @click=${()=>this.onConnector(e)}
        tagLabel="qr code"
        tagVariant="accent"
        tabIdx=${B(this.tabIdx)}
        data-testid="wallet-selector-walletconnect"
        size="sm"
        ?disabled=${n}
        rdnsId=${e.explorerWallet?.rdns}
      >
      </w3m-list-wallet>
    `}onConnector(e){h.setActiveConnector(e),w.push("ConnectingWalletConnect")}};_i([z()],Ui.prototype,"tabIdx",void 0),_i([_()],Ui.prototype,"connectors",void 0),_i([_()],Ui.prototype,"connectorImages",void 0),Ui=_i([K("w3m-connect-walletconnect-widget")],Ui);const Bi=F`
  :host {
    margin-top: ${({spacing:e})=>e[1]};
  }
  wui-separator {
    margin: ${({spacing:e})=>e[3]} calc(${({spacing:e})=>e[3]} * -1)
      ${({spacing:e})=>e[2]} calc(${({spacing:e})=>e[3]} * -1);
    width: calc(100% + ${({spacing:e})=>e[3]} * 2);
  }
`;var Fi=function(e,t,i,n){var o,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,n);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(r<3?o(a):r>3?o(t,i,a):o(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let Mi=class extends e{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=h.state.connectors,this.recommended=R.state.recommended,this.featured=R.state.featured,this.wallets=[],this.unsubscribe.push(h.subscribeKey("connectors",e=>this.connectors=e),R.subscribeKey("recommended",e=>this.recommended=e),R.subscribeKey("featured",e=>this.featured=e))}async connectedCallback(){super.connectedCallback();const e={page:1,entries:20,badge:"certified",names:"",rdns:""};if(i.state.activeChain===p.CHAIN.EVM){const t=this.connectors.flatMap(e=>e.connectors?.map(e=>e.info?.rdns)||[]).concat(this.connectors.map(e=>e.info?.rdns)||[]).filter(Boolean);e.rdns=t.join(",")}e.names=this.connectors.map(e=>e.name).join(",");const{data:t}=await R.fetchWallets(e);this.wallets=t}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return t`
      <wui-flex flexDirection="column" gap="2"> ${this.connectorListTemplate()} </wui-flex>
    `}mapConnectorsToExplorerWallets(e,t){return e.map(e=>{if("MULTI_CHAIN"===e.type&&e.connectors){const i=e.connectors.map(e=>e.id),n=e.connectors.map(e=>e.name),o=e.connectors.map(e=>e.info?.rdns),r=t.find(e=>i.includes(e.id)||n.includes(e.name)||e.rdns&&(o.includes(e.rdns)||i.includes(e.rdns)));return e.explorerWallet=r,e}const i=t.find(t=>t.id===e.id||t.rdns===e.info?.rdns||t.name===e.name);return e.explorerWallet=i,e})}connectorListTemplate(){const e=this.mapConnectorsToExplorerWallets(this.connectors,this.wallets),i=x.getConnectorsByType(e,this.recommended,this.featured),{custom:n,recent:o,announced:r,injected:a,multiChain:s,recommended:c,featured:l,external:d}=i;return x.getConnectorTypeOrder({custom:n,recent:o,announced:r,injected:a,multiChain:s,recommended:c,featured:l,external:d}).map(e=>{switch(e){case"injected":return t`
            ${s.length?t`<w3m-connect-multi-chain-widget
                  tabIdx=${B(this.tabIdx)}
                  .connectors=${s}
                ></w3m-connect-multi-chain-widget>`:null}
            ${r.length?t`<w3m-connect-announced-widget
                  tabIdx=${B(this.tabIdx)}
                  .connectors=${r}
                ></w3m-connect-announced-widget>`:null}
            ${a.length?t`<w3m-connect-injected-widget
                  .connectors=${a}
                  tabIdx=${B(this.tabIdx)}
                ></w3m-connect-injected-widget>`:null}
          `;case"walletConnect":return t`<w3m-connect-walletconnect-widget
            tabIdx=${B(this.tabIdx)}
          ></w3m-connect-walletconnect-widget>`;case"recent":return t`<w3m-connect-recent-widget
            tabIdx=${B(this.tabIdx)}
          ></w3m-connect-recent-widget>`;case"featured":return t`<w3m-connect-featured-widget
            .wallets=${l}
            tabIdx=${B(this.tabIdx)}
          ></w3m-connect-featured-widget>`;case"custom":return t`<w3m-connect-custom-widget
            tabIdx=${B(this.tabIdx)}
          ></w3m-connect-custom-widget>`;case"external":return t`<w3m-connect-external-widget
            tabIdx=${B(this.tabIdx)}
          ></w3m-connect-external-widget>`;case"recommended":return t`<w3m-connect-recommended-widget
            .wallets=${c}
            tabIdx=${B(this.tabIdx)}
          ></w3m-connect-recommended-widget>`;default:return null}})}};Mi.styles=Bi,Fi([z()],Mi.prototype,"tabIdx",void 0),Fi([_()],Mi.prototype,"connectors",void 0),Fi([_()],Mi.prototype,"recommended",void 0),Fi([_()],Mi.prototype,"featured",void 0),Fi([_()],Mi.prototype,"wallets",void 0),Mi=Fi([K("w3m-connector-list")],Mi);var Vi=function(e,t,i,n){var o,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,n);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(r<3?o(a):r>3?o(t,i,a):o(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let Ki=class extends e{constructor(){super(...arguments),this.tabIdx=void 0}render(){return t`
      <wui-flex flexDirection="column" gap="2">
        <w3m-connector-list tabIdx=${B(this.tabIdx)}></w3m-connector-list>
        <w3m-all-wallets-widget tabIdx=${B(this.tabIdx)}></w3m-all-wallets-widget>
      </wui-flex>
    `}};Vi([z()],Ki.prototype,"tabIdx",void 0),Ki=Vi([K("w3m-wallet-login-list")],Ki);const Hi=F`
  :host {
    --connect-scroll--top-opacity: 0;
    --connect-scroll--bottom-opacity: 0;
    --connect-mask-image: none;
  }

  .connect {
    max-height: clamp(360px, 470px, 80vh);
    scrollbar-width: none;
    overflow-y: scroll;
    overflow-x: hidden;
    transition: opacity ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
    will-change: opacity;
    mask-image: var(--connect-mask-image);
  }

  .guide {
    transition: opacity ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
    will-change: opacity;
  }

  .connect::-webkit-scrollbar {
    display: none;
  }

  .all-wallets {
    flex-flow: column;
  }

  .connect.disabled,
  .guide.disabled {
    opacity: 0.3;
    pointer-events: none;
    user-select: none;
  }

  wui-separator {
    margin: ${({spacing:e})=>e[3]} calc(${({spacing:e})=>e[3]} * -1);
    width: calc(100% + ${({spacing:e})=>e[3]} * 2);
  }
`;var qi=function(e,t,i,n){var o,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,n);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(r<3?o(a):r>3?o(t,i,a):o(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let Gi=class extends e{constructor(){super(),this.unsubscribe=[],this.connectors=h.state.connectors,this.authConnector=this.connectors.find(e=>"AUTH"===e.type),this.features=n.state.features,this.remoteFeatures=n.state.remoteFeatures,this.enableWallets=n.state.enableWallets,this.noAdapters=i.state.noAdapters,this.walletGuide="get-started",this.checked=J.state.isLegalCheckboxChecked,this.isEmailEnabled=this.remoteFeatures?.email&&!i.state.noAdapters,this.isSocialEnabled=this.remoteFeatures?.socials&&this.remoteFeatures.socials.length>0&&!i.state.noAdapters,this.isAuthEnabled=this.checkIfAuthEnabled(this.connectors),this.unsubscribe.push(h.subscribeKey("connectors",e=>{this.connectors=e,this.authConnector=this.connectors.find(e=>"AUTH"===e.type),this.isAuthEnabled=this.checkIfAuthEnabled(this.connectors)}),n.subscribeKey("features",e=>{this.features=e}),n.subscribeKey("remoteFeatures",e=>{this.remoteFeatures=e,this.setEmailAndSocialEnableCheck(this.noAdapters,this.remoteFeatures)}),n.subscribeKey("enableWallets",e=>this.enableWallets=e),i.subscribeKey("noAdapters",e=>this.setEmailAndSocialEnableCheck(e,this.remoteFeatures)),J.subscribeKey("isLegalCheckboxChecked",e=>this.checked=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),this.resizeObserver?.disconnect();const e=this.shadowRoot?.querySelector(".connect");e?.removeEventListener("scroll",this.handleConnectListScroll.bind(this))}firstUpdated(){const e=this.shadowRoot?.querySelector(".connect");e&&(requestAnimationFrame(this.handleConnectListScroll.bind(this)),e?.addEventListener("scroll",this.handleConnectListScroll.bind(this)),this.resizeObserver=new ResizeObserver(()=>{this.handleConnectListScroll()}),this.resizeObserver?.observe(e),this.handleConnectListScroll())}render(){const{termsConditionsUrl:e,privacyPolicyUrl:i}=n.state,o=n.state.features?.legalCheckbox,r=Boolean(e||i)&&Boolean(o)&&"get-started"===this.walletGuide&&!this.checked,a={connect:!0,disabled:r},s=n.state.enableWalletGuide,c=this.enableWallets,l=this.isSocialEnabled||this.authConnector,d=r?-1:void 0;return t`
      <wui-flex flexDirection="column">
        ${this.legalCheckboxTemplate()}
        <wui-flex
          data-testid="w3m-connect-scroll-view"
          flexDirection="column"
          .padding=${["0","0","4","0"]}
          class=${U(a)}
        >
          <wui-flex
            class="connect-methods"
            flexDirection="column"
            gap="2"
            .padding=${l&&c&&s&&"get-started"===this.walletGuide?["0","3","0","3"]:["0","3","3","3"]}
          >
            ${this.renderConnectMethod(d)}
          </wui-flex>
        </wui-flex>
        ${this.reownBrandingTemplate()}
      </wui-flex>
    `}reownBrandingTemplate(){return Q.hasFooter()?null:this.remoteFeatures?.reownBranding?t`<wui-ux-by-reown></wui-ux-by-reown>`:null}setEmailAndSocialEnableCheck(e,t){this.isEmailEnabled=t?.email&&!e,this.isSocialEnabled=t?.socials&&t.socials.length>0&&!e,this.remoteFeatures=t,this.noAdapters=e}checkIfAuthEnabled(e){const t=e.filter(e=>e.type===O.CONNECTOR_TYPE_AUTH).map(e=>e.chain);return p.AUTH_CONNECTOR_SUPPORTED_CHAINS.some(e=>t.includes(e))}renderConnectMethod(e){const i=E.getConnectOrderMethod(this.features,this.connectors);return t`${i.map((i,n)=>{switch(i){case"email":return t`${this.emailTemplate(e)} ${this.separatorTemplate(n,"email")}`;case"social":return t`${this.socialListTemplate(e)}
          ${this.separatorTemplate(n,"social")}`;case"wallet":return t`${this.walletListTemplate(e)}
          ${this.separatorTemplate(n,"wallet")}`;default:return null}})}`}checkMethodEnabled(e){switch(e){case"wallet":return this.enableWallets;case"social":return this.isSocialEnabled&&this.isAuthEnabled;case"email":return this.isEmailEnabled&&this.isAuthEnabled;default:return null}}checkIsThereNextMethod(e){const t=E.getConnectOrderMethod(this.features,this.connectors)[e+1];if(!t)return;return this.checkMethodEnabled(t)?t:this.checkIsThereNextMethod(e+1)}separatorTemplate(e,i){const n=this.checkIsThereNextMethod(e),o="explore"===this.walletGuide;switch(i){case"wallet":return this.enableWallets&&n&&!o?t`<wui-separator data-testid="wui-separator" text="or"></wui-separator>`:null;case"email":{const e="social"===n;return this.isAuthEnabled&&this.isEmailEnabled&&!e&&n?t`<wui-separator
              data-testid="w3m-email-login-or-separator"
              text="or"
            ></wui-separator>`:null}case"social":{const e="email"===n;return this.isAuthEnabled&&this.isSocialEnabled&&!e&&n?t`<wui-separator data-testid="wui-separator" text="or"></wui-separator>`:null}default:return null}}emailTemplate(e){return this.isEmailEnabled&&this.isAuthEnabled?t`<w3m-email-login-widget tabIdx=${B(e)}></w3m-email-login-widget>`:null}socialListTemplate(e){return this.isSocialEnabled&&this.isAuthEnabled?t`<w3m-social-login-widget
      walletGuide=${this.walletGuide}
      tabIdx=${B(e)}
    ></w3m-social-login-widget>`:null}walletListTemplate(e){const i=this.enableWallets,n=!1===this.features?.emailShowWallets,o=this.features?.collapseWallets,r=n||o;if(!i)return null;if(s.isTelegram()&&(s.isSafari()||s.isIos())&&y.connectWalletConnect().catch(e=>({})),"explore"===this.walletGuide)return null;return this.isAuthEnabled&&(this.isEmailEnabled||this.isSocialEnabled)&&r?t`<wui-list-button
        data-testid="w3m-collapse-wallets-button"
        tabIdx=${B(e)}
        @click=${this.onContinueWalletClick.bind(this)}
        text="Continue with a wallet"
      ></wui-list-button>`:t`<w3m-wallet-login-list tabIdx=${B(e)}></w3m-wallet-login-list>`}legalCheckboxTemplate(){return"explore"===this.walletGuide?null:t`<w3m-legal-checkbox data-testid="w3m-legal-checkbox"></w3m-legal-checkbox>`}handleConnectListScroll(){const e=this.shadowRoot?.querySelector(".connect");if(!e)return;e.scrollHeight>470?(e.style.setProperty("--connect-mask-image","linear-gradient(\n          to bottom,\n          rgba(0, 0, 0, calc(1 - var(--connect-scroll--top-opacity))) 0px,\n          rgba(200, 200, 200, calc(1 - var(--connect-scroll--top-opacity))) 1px,\n          black 100px,\n          black calc(100% - 100px),\n          rgba(155, 155, 155, calc(1 - var(--connect-scroll--bottom-opacity))) calc(100% - 1px),\n          rgba(0, 0, 0, calc(1 - var(--connect-scroll--bottom-opacity))) 100%\n        )"),e.style.setProperty("--connect-scroll--top-opacity",Z.interpolate([0,50],[0,1],e.scrollTop).toString()),e.style.setProperty("--connect-scroll--bottom-opacity",Z.interpolate([0,50],[0,1],e.scrollHeight-e.scrollTop-e.offsetHeight).toString())):(e.style.setProperty("--connect-mask-image","none"),e.style.setProperty("--connect-scroll--top-opacity","0"),e.style.setProperty("--connect-scroll--bottom-opacity","0"))}onContinueWalletClick(){w.push("ConnectWallets")}};Gi.styles=Hi,qi([_()],Gi.prototype,"connectors",void 0),qi([_()],Gi.prototype,"authConnector",void 0),qi([_()],Gi.prototype,"features",void 0),qi([_()],Gi.prototype,"remoteFeatures",void 0),qi([_()],Gi.prototype,"enableWallets",void 0),qi([_()],Gi.prototype,"noAdapters",void 0),qi([z()],Gi.prototype,"walletGuide",void 0),qi([_()],Gi.prototype,"checked",void 0),qi([_()],Gi.prototype,"isEmailEnabled",void 0),qi([_()],Gi.prototype,"isSocialEnabled",void 0),qi([_()],Gi.prototype,"isAuthEnabled",void 0),Gi=qi([K("w3m-connect-view")],Gi);const Yi=F`
  wui-flex {
    width: 100%;
    height: 52px;
    box-sizing: border-box;
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[5]};
    padding-left: ${({spacing:e})=>e[3]};
    padding-right: ${({spacing:e})=>e[3]};
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: ${({spacing:e})=>e[6]};
  }

  wui-text {
    color: ${({tokens:e})=>e.theme.textSecondary};
  }

  wui-icon {
    width: 12px;
    height: 12px;
  }
`;var Xi=function(e,t,i,n){var o,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,n);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(r<3?o(a):r>3?o(t,i,a):o(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let Qi=class extends e{constructor(){super(...arguments),this.disabled=!1,this.label="",this.buttonLabel=""}render(){return t`
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="lg-regular" color="inherit">${this.label}</wui-text>
        <wui-button variant="accent-secondary" size="sm">
          ${this.buttonLabel}
          <wui-icon name="chevronRight" color="inherit" size="inherit" slot="iconRight"></wui-icon>
        </wui-button>
      </wui-flex>
    `}};Qi.styles=[M,V,Yi],Xi([z({type:Boolean})],Qi.prototype,"disabled",void 0),Xi([z()],Qi.prototype,"label",void 0),Xi([z()],Qi.prototype,"buttonLabel",void 0),Qi=Xi([K("wui-cta-button")],Qi);const Zi=F`
  :host {
    display: block;
    padding: 0 ${({spacing:e})=>e[5]} ${({spacing:e})=>e[5]};
  }
`;var Ji=function(e,t,i,n){var o,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,n);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(r<3?o(a):r>3?o(t,i,a):o(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let en=class extends e{constructor(){super(...arguments),this.wallet=void 0}render(){if(!this.wallet)return this.style.display="none",null;const{name:e,app_store:i,play_store:n,chrome_store:o,homepage:r}=this.wallet,a=s.isMobile(),c=s.isIos(),l=s.isAndroid(),d=[i,n,r,o].filter(Boolean).length>1,u=H.getTruncateString({string:e,charsStart:12,charsEnd:0,truncate:"end"});return d&&!a?t`
        <wui-cta-button
          label=${`Don't have ${u}?`}
          buttonLabel="Get"
          @click=${()=>w.push("Downloads",{wallet:this.wallet})}
        ></wui-cta-button>
      `:!d&&r?t`
        <wui-cta-button
          label=${`Don't have ${u}?`}
          buttonLabel="Get"
          @click=${this.onHomePage.bind(this)}
        ></wui-cta-button>
      `:i&&c?t`
        <wui-cta-button
          label=${`Don't have ${u}?`}
          buttonLabel="Get"
          @click=${this.onAppStore.bind(this)}
        ></wui-cta-button>
      `:n&&l?t`
        <wui-cta-button
          label=${`Don't have ${u}?`}
          buttonLabel="Get"
          @click=${this.onPlayStore.bind(this)}
        ></wui-cta-button>
      `:(this.style.display="none",null)}onAppStore(){this.wallet?.app_store&&s.openHref(this.wallet.app_store,"_blank")}onPlayStore(){this.wallet?.play_store&&s.openHref(this.wallet.play_store,"_blank")}onHomePage(){this.wallet?.homepage&&s.openHref(this.wallet.homepage,"_blank")}};en.styles=[Zi],Ji([z({type:Object})],en.prototype,"wallet",void 0),en=Ji([K("w3m-mobile-download-links")],en);const tn=F`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-wallet-image {
    width: 56px;
    height: 56px;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: calc(${({spacing:e})=>e[1]} * -1);
    bottom: calc(${({spacing:e})=>e[1]} * -1);
    opacity: 0;
    transform: scale(0.5);
    transition-property: opacity, transform;
    transition-duration: ${({durations:e})=>e.lg};
    transition-timing-function: ${({easings:e})=>e["ease-out-power-2"]};
    will-change: opacity, transform;
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px ${({spacing:e})=>e[4]};
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms ${({easings:e})=>e["ease-out-power-2"]} both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }

  w3m-mobile-download-links {
    padding: 0px;
    width: 100%;
  }
`;var nn=function(e,t,i,n){var o,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,n);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(r<3?o(a):r>3?o(t,i,a):o(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};class on extends e{constructor(){super(),this.wallet=w.state.data?.wallet,this.connector=w.state.data?.connector,this.timeout=void 0,this.secondaryBtnIcon="refresh",this.onConnect=void 0,this.onRender=void 0,this.onAutoConnect=void 0,this.isWalletConnect=!0,this.unsubscribe=[],this.imageSrc=r.getConnectorImage(this.connector)??r.getWalletImage(this.wallet),this.name=this.wallet?.name??this.connector?.name??"Wallet",this.isRetrying=!1,this.uri=y.state.wcUri,this.error=y.state.wcError,this.ready=!1,this.showRetry=!1,this.label=void 0,this.secondaryBtnLabel="Try again",this.secondaryLabel="Accept connection request in the wallet",this.isLoading=!1,this.isMobile=!1,this.onRetry=void 0,this.unsubscribe.push(y.subscribeKey("wcUri",e=>{this.uri=e,this.isRetrying&&this.onRetry&&(this.isRetrying=!1,this.onConnect?.())}),y.subscribeKey("wcError",e=>this.error=e)),(s.isTelegram()||s.isSafari())&&s.isIos()&&y.state.wcUri&&this.onConnect?.()}firstUpdated(){this.onAutoConnect?.(),this.showRetry=!this.onAutoConnect}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),y.setWcError(!1),clearTimeout(this.timeout)}render(){this.onRender?.(),this.onShowRetry();const e=this.error?"Connection can be declined if a previous request is still active":this.secondaryLabel;let i="";return this.label?i=this.label:(i=`Continue in ${this.name}`,this.error&&(i="Connection declined")),t`
      <wui-flex
        data-error=${B(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${["10","5","5","5"]}
        gap="6"
      >
        <wui-flex gap="2" justifyContent="center" alignItems="center">
          <wui-wallet-image size="lg" imageSrc=${B(this.imageSrc)}></wui-wallet-image>

          ${this.error?null:this.loaderTemplate()}

          <wui-icon-box
            color="error"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="6"> <wui-flex
          flexDirection="column"
          alignItems="center"
          gap="2"
          .padding=${["2","0","0","0"]}
        >
          <wui-text align="center" variant="lg-medium" color=${this.error?"error":"primary"}>
            ${i}
          </wui-text>
          <wui-text align="center" variant="lg-regular" color="secondary">${e}</wui-text>
        </wui-flex>

        ${this.secondaryBtnLabel?t`
                <wui-button
                  variant="neutral-secondary"
                  size="md"
                  ?disabled=${this.isRetrying||this.isLoading}
                  @click=${this.onTryAgain.bind(this)}
                  data-testid="w3m-connecting-widget-secondary-button"
                >
                  <wui-icon
                    color="inherit"
                    slot="iconLeft"
                    name=${this.secondaryBtnIcon}
                  ></wui-icon>
                  ${this.secondaryBtnLabel}
                </wui-button>
              `:null}
      </wui-flex>

      ${this.isWalletConnect?t`
              <wui-flex .padding=${["0","5","5","5"]} justifyContent="center">
                <wui-link
                  @click=${this.onCopyUri}
                  variant="secondary"
                  icon="copy"
                  data-testid="wui-link-copy"
                >
                  Copy link
                </wui-link>
              </wui-flex>
            `:null}

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links></wui-flex>
      </wui-flex>
    `}onShowRetry(){if(this.error&&!this.showRetry){this.showRetry=!0;const e=this.shadowRoot?.querySelector("wui-button");e?.animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"})}}onTryAgain(){y.setWcError(!1),this.onRetry?(this.isRetrying=!0,this.onRetry?.()):this.onConnect?.()}loaderTemplate(){const e=N.state.themeVariables["--w3m-border-radius-master"],i=e?parseInt(e.replace("px",""),10):4;return t`<wui-loading-thumbnail radius=${9*i}></wui-loading-thumbnail>`}onCopyUri(){try{this.uri&&(s.copyToClopboard(this.uri),g.showSuccess("Link copied"))}catch{g.showError("Failed to copy")}}}on.styles=tn,nn([_()],on.prototype,"isRetrying",void 0),nn([_()],on.prototype,"uri",void 0),nn([_()],on.prototype,"error",void 0),nn([_()],on.prototype,"ready",void 0),nn([_()],on.prototype,"showRetry",void 0),nn([_()],on.prototype,"label",void 0),nn([_()],on.prototype,"secondaryBtnLabel",void 0),nn([_()],on.prototype,"secondaryLabel",void 0),nn([_()],on.prototype,"isLoading",void 0),nn([z({type:Boolean})],on.prototype,"isMobile",void 0),nn([z()],on.prototype,"onRetry",void 0);let rn=class extends on{constructor(){if(super(),this.externalViewUnsubscribe=[],this.connectionsByNamespace=y.getConnections(this.connector?.chain),this.hasMultipleConnections=this.connectionsByNamespace.length>0,this.remoteFeatures=n.state.remoteFeatures,this.currentActiveConnectorId=h.state.activeConnectorIds[this.connector?.chain],!this.connector)throw new Error("w3m-connecting-view: No connector provided");const e=this.connector?.chain;this.isAlreadyConnected(this.connector)&&(this.secondaryBtnLabel=void 0,this.label=`This account is already linked, change your account in ${this.connector.name}`,this.secondaryLabel=`To link a new account, open ${this.connector.name} and switch to the account you want to link`),d.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.connector.name??"Unknown",platform:"browser",displayIndex:this.wallet?.display_index,walletRank:this.wallet?.order,view:w.state.view}}),this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),this.isWalletConnect=!1,this.externalViewUnsubscribe.push(h.subscribeKey("activeConnectorIds",t=>{const i=t[e],n=this.remoteFeatures?.multiWallet;i!==this.currentActiveConnectorId&&(this.hasMultipleConnections&&n?(w.replace("ProfileWallets"),g.showSuccess("New Wallet Added")):c.close())}),y.subscribeKey("connections",this.onConnectionsChange.bind(this)))}disconnectedCallback(){this.externalViewUnsubscribe.forEach(e=>e())}async onConnectProxy(){try{if(this.error=!1,this.connector){if(this.isAlreadyConnected(this.connector))return;this.connector.id===p.CONNECTOR_ID.COINBASE_SDK&&this.error||(await y.connectExternal(this.connector,this.connector.chain),d.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"browser",name:this.connector.name||"Unknown",view:w.state.view,walletRank:this.wallet?.order}}))}}catch(e){e instanceof P&&e.originalName===j.PROVIDER_RPC_ERROR_NAME.USER_REJECTED_REQUEST?d.sendEvent({type:"track",event:"USER_REJECTED",properties:{message:e.message}}):d.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:e?.message??"Unknown"}}),this.error=!0}}onConnectionsChange(e){if(this.connector?.chain&&e.get(this.connector.chain)&&this.isAlreadyConnected(this.connector)){const t=e.get(this.connector.chain)??[],i=this.remoteFeatures?.multiWallet;if(0===t.length)w.replace("Connect");else{const e=$.getConnectionsByConnectorId(this.connectionsByNamespace,this.connector.id).flatMap(e=>e.accounts),n=$.getConnectionsByConnectorId(t,this.connector.id).flatMap(e=>e.accounts);if(0===n.length)this.hasMultipleConnections&&i?(w.replace("ProfileWallets"),g.showSuccess("Wallet deleted")):c.close();else{!e.every(e=>n.some(t=>k.isLowerCaseMatch(e.address,t.address)))&&i&&w.replace("ProfileWallets")}}}}isAlreadyConnected(e){return Boolean(e)&&this.connectionsByNamespace.some(t=>k.isLowerCaseMatch(t.connectorId,e.id))}};rn=function(e,t,i,n){var o,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,n);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(r<3?o(a):r>3?o(t,i,a):o(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a}([K("w3m-connecting-external-view")],rn);const an=l`
  wui-flex,
  wui-list-wallet {
    width: 100%;
  }
`;var sn=function(e,t,i,n){var o,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,n);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(r<3?o(a):r>3?o(t,i,a):o(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let cn=class extends e{constructor(){super(),this.unsubscribe=[],this.activeConnector=h.state.activeConnector,this.unsubscribe.push(h.subscribeKey("activeConnector",e=>this.activeConnector=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return t`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["3","5","5","5"]}
        gap="5"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-wallet-image
            size="lg"
            imageSrc=${B(r.getConnectorImage(this.activeConnector))}
          ></wui-wallet-image>
        </wui-flex>
        <wui-flex
          flexDirection="column"
          alignItems="center"
          gap="2"
          .padding=${["0","3","0","3"]}
        >
          <wui-text variant="lg-medium" color="primary">
            Select Chain for ${this.activeConnector?.name}
          </wui-text>
          <wui-text align="center" variant="lg-regular" color="secondary"
            >Select which chain to connect to your multi chain wallet</wui-text
          >
        </wui-flex>
        <wui-flex
          flexGrow="1"
          flexDirection="column"
          alignItems="center"
          gap="2"
          .padding=${["2","0","2","0"]}
        >
          ${this.networksTemplate()}
        </wui-flex>
      </wui-flex>
    `}networksTemplate(){return this.activeConnector?.connectors?.map(e=>e.name?t`
            <w3m-list-wallet
              imageSrc=${B(r.getChainImage(e.chain))}
              name=${p.CHAIN_NAME_MAP[e.chain]}
              @click=${()=>this.onConnector(e)}
              size="sm"
              data-testid="wui-list-chain-${e.chain}"
              rdnsId=${e.explorerWallet?.rdns}
            ></w3m-list-wallet>
          `:null)}onConnector(e){const t=this.activeConnector?.connectors?.find(t=>t.chain===e.chain);t?"walletConnect"===t.id?s.isMobile()?w.push("AllWallets"):w.push("ConnectingWalletConnect"):w.push("ConnectingExternal",{connector:t,wallet:this.activeConnector?.explorerWallet}):g.showError("Failed to find connector")}};cn.styles=an,sn([_()],cn.prototype,"activeConnector",void 0),cn=sn([K("w3m-connecting-multi-chain-view")],cn);var ln=function(e,t,i,n){var o,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,n);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(r<3?o(a):r>3?o(t,i,a):o(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let dn=class extends e{constructor(){super(...arguments),this.platformTabs=[],this.unsubscribe=[],this.platforms=[],this.onSelectPlatfrom=void 0}disconnectCallback(){this.unsubscribe.forEach(e=>e())}render(){const e=this.generateTabs();return t`
      <wui-flex justifyContent="center" .padding=${["0","0","4","0"]}>
        <wui-tabs .tabs=${e} .onTabChange=${this.onTabChange.bind(this)}></wui-tabs>
      </wui-flex>
    `}generateTabs(){const e=this.platforms.map(e=>"browser"===e?{label:"Browser",icon:"extension",platform:"browser"}:"mobile"===e?{label:"Mobile",icon:"mobile",platform:"mobile"}:"qrcode"===e?{label:"Mobile",icon:"mobile",platform:"qrcode"}:"web"===e?{label:"Webapp",icon:"browser",platform:"web"}:"desktop"===e?{label:"Desktop",icon:"desktop",platform:"desktop"}:{label:"Browser",icon:"extension",platform:"unsupported"});return this.platformTabs=e.map(({platform:e})=>e),e}onTabChange(e){const t=this.platformTabs[e];t&&this.onSelectPlatfrom?.(t)}};ln([z({type:Array})],dn.prototype,"platforms",void 0),ln([z()],dn.prototype,"onSelectPlatfrom",void 0),dn=ln([K("w3m-connecting-header")],dn);let un=class extends on{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-browser: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),d.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser",displayIndex:this.wallet?.display_index,walletRank:this.wallet.order,view:w.state.view}})}async onConnectProxy(){try{this.error=!1;const{connectors:e}=h.state,t=e.find(e=>"ANNOUNCED"===e.type&&e.info?.rdns===this.wallet?.rdns||"INJECTED"===e.type||e.name===this.wallet?.name);if(!t)throw new Error("w3m-connecting-wc-browser: No connector found");await y.connectExternal(t,t.chain),c.close(),d.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"browser",name:this.wallet?.name||"Unknown",view:w.state.view,walletRank:this.wallet?.order}})}catch(e){e instanceof P&&e.originalName===j.PROVIDER_RPC_ERROR_NAME.USER_REJECTED_REQUEST?d.sendEvent({type:"track",event:"USER_REJECTED",properties:{message:e.message}}):d.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:e?.message??"Unknown"}}),this.error=!0}}};un=function(e,t,i,n){var o,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,n);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(r<3?o(a):r>3?o(t,i,a):o(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a}([K("w3m-connecting-wc-browser")],un);let hn=class extends on{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-desktop: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onRender=this.onRenderProxy.bind(this),d.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"desktop",displayIndex:this.wallet?.display_index,walletRank:this.wallet.order,view:w.state.view}})}onRenderProxy(){!this.ready&&this.uri&&(this.ready=!0,this.onConnect?.())}onConnectProxy(){if(this.wallet?.desktop_link&&this.uri)try{this.error=!1;const{desktop_link:e,name:t}=this.wallet,{redirect:i,href:n}=s.formatNativeUrl(e,this.uri);y.setWcLinking({name:t,href:n}),y.setRecentWallet(this.wallet),s.openHref(i,"_blank")}catch{this.error=!0}}};hn=function(e,t,i,n){var o,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,n);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(r<3?o(a):r>3?o(t,i,a):o(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a}([K("w3m-connecting-wc-desktop")],hn);var pn=function(e,t,i,n){var o,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,n);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(r<3?o(a):r>3?o(t,i,a):o(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let wn=class extends on{constructor(){if(super(),this.btnLabelTimeout=void 0,this.redirectDeeplink=void 0,this.redirectUniversalLink=void 0,this.target=void 0,this.preferUniversalLinks=n.state.experimental_preferUniversalLinks,this.isLoading=!0,this.onConnect=()=>{if(this.wallet?.mobile_link&&this.uri)try{this.error=!1;const{mobile_link:e,link_mode:t,name:i}=this.wallet,{redirect:n,redirectUniversalLink:o,href:r}=s.formatNativeUrl(e,this.uri,t);this.redirectDeeplink=n,this.redirectUniversalLink=o,this.target=s.isIframe()?"_top":"_self",y.setWcLinking({name:i,href:r}),y.setRecentWallet(this.wallet),this.preferUniversalLinks&&this.redirectUniversalLink?s.openHref(this.redirectUniversalLink,this.target):s.openHref(this.redirectDeeplink,this.target)}catch(e){d.sendEvent({type:"track",event:"CONNECT_PROXY_ERROR",properties:{message:e instanceof Error?e.message:"Error parsing the deeplink",uri:this.uri,mobile_link:this.wallet.mobile_link,name:this.wallet.name}}),this.error=!0}},!this.wallet)throw new Error("w3m-connecting-wc-mobile: No wallet provided");this.secondaryBtnLabel="Open",this.secondaryLabel=m.CONNECT_LABELS.MOBILE,this.secondaryBtnIcon="externalLink",this.onHandleURI(),this.unsubscribe.push(y.subscribeKey("wcUri",()=>{this.onHandleURI()})),d.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"mobile",displayIndex:this.wallet?.display_index,walletRank:this.wallet.order,view:w.state.view}})}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.btnLabelTimeout)}onHandleURI(){this.isLoading=!this.uri,!this.ready&&this.uri&&(this.ready=!0,this.onConnect?.())}onTryAgain(){y.setWcError(!1),this.onConnect?.()}};pn([_()],wn.prototype,"redirectDeeplink",void 0),pn([_()],wn.prototype,"redirectUniversalLink",void 0),pn([_()],wn.prototype,"target",void 0),pn([_()],wn.prototype,"preferUniversalLinks",void 0),pn([_()],wn.prototype,"isLoading",void 0),wn=pn([K("w3m-connecting-wc-mobile")],wn);const mn=F`
  wui-shimmer {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: ${({borderRadius:e})=>e[4]};
  }

  wui-qr-code {
    opacity: 0;
    animation-duration: ${({durations:e})=>e.xl};
    animation-timing-function: ${({easings:e})=>e["ease-out-power-2"]};
    animation-name: fade-in;
    animation-fill-mode: forwards;
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;var gn=function(e,t,i,n){var o,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,n);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(r<3?o(a):r>3?o(t,i,a):o(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let bn=class extends on{constructor(){super(),this.basic=!1,this.forceUpdate=()=>{this.requestUpdate()},window.addEventListener("resize",this.forceUpdate)}firstUpdated(){this.basic||d.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet?.name??"WalletConnect",platform:"qrcode",displayIndex:this.wallet?.display_index,walletRank:this.wallet?.order,view:w.state.view}})}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribe?.forEach(e=>e()),window.removeEventListener("resize",this.forceUpdate)}render(){return this.onRenderProxy(),t`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["0","5","5","5"]}
        gap="5"
      >
        <wui-shimmer width="100%"> ${this.qrCodeTemplate()} </wui-shimmer>
        <wui-text variant="lg-medium" color="primary"> Scan this QR Code with your phone </wui-text>
        ${this.copyTemplate()}
      </wui-flex>
      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onRenderProxy(){!this.ready&&this.uri&&(this.timeout=setTimeout(()=>{this.ready=!0},200))}qrCodeTemplate(){if(!this.uri||!this.ready)return null;const e=this.getBoundingClientRect().width-40,i=this.wallet?this.wallet.name:void 0;y.setWcLinking(void 0),y.setRecentWallet(this.wallet);let n=this.uri;if(this.wallet?.mobile_link){const{redirect:e}=s.formatNativeUrl(this.wallet?.mobile_link,this.uri,null);n=e}return t` <wui-qr-code
      size=${e}
      theme=${N.state.themeMode}
      uri=${n}
      imageSrc=${B(r.getWalletImage(this.wallet))}
      color=${B(N.state.themeVariables["--w3m-qr-color"])}
      alt=${B(i)}
      data-testid="wui-qr-code"
    ></wui-qr-code>`}copyTemplate(){const e=!this.uri||!this.ready;return t`<wui-button
      .disabled=${e}
      @click=${this.onCopyUri}
      variant="neutral-secondary"
      size="sm"
      data-testid="copy-wc2-uri"
    >
      Copy link
      <wui-icon size="sm" color="inherit" name="copy" slot="iconRight"></wui-icon>
    </wui-button>`}};bn.styles=mn,gn([z({type:Boolean})],bn.prototype,"basic",void 0),bn=gn([K("w3m-connecting-wc-qrcode")],bn);let fn=class extends e{constructor(){if(super(),this.wallet=w.state.data?.wallet,!this.wallet)throw new Error("w3m-connecting-wc-unsupported: No wallet provided");d.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser",displayIndex:this.wallet?.display_index,walletRank:this.wallet?.order,view:w.state.view}})}render(){return t`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["10","5","5","5"]}
        gap="5"
      >
        <wui-wallet-image
          size="lg"
          imageSrc=${B(r.getWalletImage(this.wallet))}
        ></wui-wallet-image>

        <wui-text variant="md-regular" color="primary">Not Detected</wui-text>
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}};fn=function(e,t,i,n){var o,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,n);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(r<3?o(a):r>3?o(t,i,a):o(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a}([K("w3m-connecting-wc-unsupported")],fn);var yn=function(e,t,i,n){var o,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,n);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(r<3?o(a):r>3?o(t,i,a):o(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let vn=class extends on{constructor(){if(super(),this.isLoading=!0,!this.wallet)throw new Error("w3m-connecting-wc-web: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.secondaryBtnLabel="Open",this.secondaryLabel=m.CONNECT_LABELS.MOBILE,this.secondaryBtnIcon="externalLink",this.updateLoadingState(),this.unsubscribe.push(y.subscribeKey("wcUri",()=>{this.updateLoadingState()})),d.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"web",displayIndex:this.wallet?.display_index,walletRank:this.wallet?.order,view:w.state.view}})}updateLoadingState(){this.isLoading=!this.uri}onConnectProxy(){if(this.wallet?.webapp_link&&this.uri)try{this.error=!1;const{webapp_link:e,name:t}=this.wallet,{redirect:i,href:n}=s.formatUniversalUrl(e,this.uri);y.setWcLinking({name:t,href:n}),y.setRecentWallet(this.wallet),s.openHref(i,"_blank")}catch{this.error=!0}}};yn([_()],vn.prototype,"isLoading",void 0),vn=yn([K("w3m-connecting-wc-web")],vn);var xn=function(e,t,i,n){var o,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,n);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(r<3?o(a):r>3?o(t,i,a):o(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let $n=class extends e{constructor(){super(),this.wallet=w.state.data?.wallet,this.unsubscribe=[],this.platform=void 0,this.platforms=[],this.isSiwxEnabled=Boolean(n.state.siwx),this.remoteFeatures=n.state.remoteFeatures,this.displayBranding=!0,this.basic=!1,this.determinePlatforms(),this.initializeConnection(),this.unsubscribe.push(n.subscribeKey("remoteFeatures",e=>this.remoteFeatures=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return t`
      ${this.headerTemplate()}
      <div>${this.platformTemplate()}</div>
      ${this.reownBrandingTemplate()}
    `}reownBrandingTemplate(){return this.remoteFeatures?.reownBranding&&this.displayBranding?t`<wui-ux-by-reown></wui-ux-by-reown>`:null}async initializeConnection(e=!1){if("browser"!==this.platform&&(!n.state.manualWCControl||e))try{const{wcPairingExpiry:t,status:o}=y.state;if(e||n.state.enableEmbedded||s.isPairingExpired(t)||"connecting"===o){const e=y.getConnections(i.state.activeChain),t=this.remoteFeatures?.multiWallet,n=e.length>0;await y.connectWalletConnect({cache:"never"}),this.isSiwxEnabled||(n&&t?(w.replace("ProfileWallets"),g.showSuccess("New Wallet Added")):c.close())}}catch(t){if(t instanceof Error&&t.message.includes("An error occurred when attempting to switch chain")&&!n.state.enableNetworkSwitch&&i.state.activeChain)return i.setActiveCaipNetwork(D.getUnsupportedNetwork(`${i.state.activeChain}:${i.state.activeCaipNetwork?.id}`)),void i.showUnsupportedChainUI();t instanceof P&&t.originalName===j.PROVIDER_RPC_ERROR_NAME.USER_REJECTED_REQUEST?d.sendEvent({type:"track",event:"USER_REJECTED",properties:{message:t.message}}):d.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:t?.message??"Unknown"}}),y.setWcError(!0),g.showError(t.message??"Connection error"),y.resetWcConnection(),w.goBack()}}determinePlatforms(){if(!this.wallet)return this.platforms.push("qrcode"),void(this.platform="qrcode");if(this.platform)return;const{mobile_link:e,desktop_link:t,webapp_link:o,injected:r,rdns:a}=this.wallet,c=r?.map(({injected_id:e})=>e).filter(Boolean),l=[...a?[a]:c??[]],d=!n.state.isUniversalProvider&&l.length,u=e,h=o,p=y.checkInstalled(l),w=d&&p,m=t&&!s.isMobile();w&&!i.state.noAdapters&&this.platforms.push("browser"),u&&this.platforms.push(s.isMobile()?"mobile":"qrcode"),h&&this.platforms.push("web"),m&&this.platforms.push("desktop"),w||!d||i.state.noAdapters||this.platforms.push("unsupported"),this.platform=this.platforms[0]}platformTemplate(){switch(this.platform){case"browser":return t`<w3m-connecting-wc-browser></w3m-connecting-wc-browser>`;case"web":return t`<w3m-connecting-wc-web></w3m-connecting-wc-web>`;case"desktop":return t`
          <w3m-connecting-wc-desktop .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-desktop>
        `;case"mobile":return t`
          <w3m-connecting-wc-mobile isMobile .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-mobile>
        `;case"qrcode":return t`<w3m-connecting-wc-qrcode ?basic=${this.basic}></w3m-connecting-wc-qrcode>`;default:return t`<w3m-connecting-wc-unsupported></w3m-connecting-wc-unsupported>`}}headerTemplate(){return this.platforms.length>1?t`
      <w3m-connecting-header
        .platforms=${this.platforms}
        .onSelectPlatfrom=${this.onSelectPlatform.bind(this)}
      >
      </w3m-connecting-header>
    `:null}async onSelectPlatform(e){const t=this.shadowRoot?.querySelector("div");t&&(await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.platform=e,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}};xn([_()],$n.prototype,"platform",void 0),xn([_()],$n.prototype,"platforms",void 0),xn([_()],$n.prototype,"isSiwxEnabled",void 0),xn([_()],$n.prototype,"remoteFeatures",void 0),xn([z({type:Boolean})],$n.prototype,"displayBranding",void 0),xn([z({type:Boolean})],$n.prototype,"basic",void 0),$n=xn([K("w3m-connecting-wc-view")],$n);var kn=function(e,t,i,n){var o,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,n);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(r<3?o(a):r>3?o(t,i,a):o(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let Cn=class extends e{constructor(){super(),this.unsubscribe=[],this.isMobile=s.isMobile(),this.remoteFeatures=n.state.remoteFeatures,this.unsubscribe.push(n.subscribeKey("remoteFeatures",e=>this.remoteFeatures=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){if(this.isMobile){const{featured:e,recommended:i}=R.state,{customWallets:o}=n.state,r=u.getRecentWallets(),a=e.length||i.length||o?.length||r.length;return t`<wui-flex flexDirection="column" gap="2" .margin=${["1","3","3","3"]}>
        ${a?t`<w3m-connector-list></w3m-connector-list>`:null}
        <w3m-all-wallets-widget></w3m-all-wallets-widget>
      </wui-flex>`}return t`<wui-flex flexDirection="column" .padding=${["0","0","4","0"]}>
        <w3m-connecting-wc-view ?basic=${!0} .displayBranding=${!1}></w3m-connecting-wc-view>
        <wui-flex flexDirection="column" .padding=${["0","3","0","3"]}>
          <w3m-all-wallets-widget></w3m-all-wallets-widget>
        </wui-flex>
      </wui-flex>
      ${this.reownBrandingTemplate()} `}reownBrandingTemplate(){return this.remoteFeatures?.reownBranding?t` <wui-flex flexDirection="column" .padding=${["1","0","1","0"]}>
      <wui-ux-by-reown></wui-ux-by-reown>
    </wui-flex>`:null}};kn([_()],Cn.prototype,"isMobile",void 0),kn([_()],Cn.prototype,"remoteFeatures",void 0),Cn=kn([K("w3m-connecting-wc-basic-view")],Cn);const Sn=l`
  .continue-button-container {
    width: 100%;
  }
`;var Rn=function(e,t,i,n){var o,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,n);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(r<3?o(a):r>3?o(t,i,a):o(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let En=class extends e{constructor(){super(...arguments),this.loading=!1}render(){return t`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="6"
        .padding=${["0","0","4","0"]}
      >
        ${this.onboardingTemplate()} ${this.buttonsTemplate()}
        <wui-link
          @click=${()=>{s.openHref(te.URLS.FAQ,"_blank")}}
        >
          Learn more about names
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-link>
      </wui-flex>
    `}onboardingTemplate(){return t` <wui-flex
      flexDirection="column"
      gap="6"
      alignItems="center"
      .padding=${["0","6","0","6"]}
    >
      <wui-flex gap="3" alignItems="center" justifyContent="center">
        <wui-icon-box icon="id" size="xl" iconSize="xxl" color="default"></wui-icon-box>
      </wui-flex>
      <wui-flex flexDirection="column" alignItems="center" gap="3">
        <wui-text align="center" variant="lg-medium" color="primary">
          Choose your account name
        </wui-text>
        <wui-text align="center" variant="md-regular" color="primary">
          Finally say goodbye to 0x addresses, name your account to make it easier to exchange
          assets
        </wui-text>
      </wui-flex>
    </wui-flex>`}buttonsTemplate(){return t`<wui-flex
      .padding=${["0","8","0","8"]}
      gap="3"
      class="continue-button-container"
    >
      <wui-button
        fullWidth
        .loading=${this.loading}
        size="lg"
        borderRadius="xs"
        @click=${this.handleContinue.bind(this)}
        >Choose name
      </wui-button>
    </wui-flex>`}handleContinue(){w.push("RegisterAccountName"),d.sendEvent({type:"track",event:"OPEN_ENS_FLOW",properties:{isSmartAccount:b(i.state.activeChain)===f.ACCOUNT_TYPES.SMART_ACCOUNT}})}};En.styles=Sn,Rn([_()],En.prototype,"loading",void 0),En=Rn([K("w3m-choose-account-name-view")],En);let In=class extends e{constructor(){super(...arguments),this.wallet=w.state.data?.wallet}render(){if(!this.wallet)throw new Error("w3m-downloads-view");return t`
      <wui-flex gap="2" flexDirection="column" .padding=${["3","3","4","3"]}>
        ${this.chromeTemplate()} ${this.iosTemplate()} ${this.androidTemplate()}
        ${this.homepageTemplate()}
      </wui-flex>
    `}chromeTemplate(){return this.wallet?.chrome_store?t`<wui-list-item
      variant="icon"
      icon="chromeStore"
      iconVariant="square"
      @click=${this.onChromeStore.bind(this)}
      chevron
    >
      <wui-text variant="md-medium" color="primary">Chrome Extension</wui-text>
    </wui-list-item>`:null}iosTemplate(){return this.wallet?.app_store?t`<wui-list-item
      variant="icon"
      icon="appStore"
      iconVariant="square"
      @click=${this.onAppStore.bind(this)}
      chevron
    >
      <wui-text variant="md-medium" color="primary">iOS App</wui-text>
    </wui-list-item>`:null}androidTemplate(){return this.wallet?.play_store?t`<wui-list-item
      variant="icon"
      icon="playStore"
      iconVariant="square"
      @click=${this.onPlayStore.bind(this)}
      chevron
    >
      <wui-text variant="md-medium" color="primary">Android App</wui-text>
    </wui-list-item>`:null}homepageTemplate(){return this.wallet?.homepage?t`
      <wui-list-item
        variant="icon"
        icon="browser"
        iconVariant="square-blue"
        @click=${this.onHomePage.bind(this)}
        chevron
      >
        <wui-text variant="md-medium" color="primary">Website</wui-text>
      </wui-list-item>
    `:null}openStore(e){e.href&&this.wallet&&(d.sendEvent({type:"track",event:"GET_WALLET",properties:{name:this.wallet.name,walletRank:this.wallet.order,explorerId:this.wallet.id,type:e.type}}),s.openHref(e.href,"_blank"))}onChromeStore(){this.wallet?.chrome_store&&this.openStore({href:this.wallet.chrome_store,type:"chrome_store"})}onAppStore(){this.wallet?.app_store&&this.openStore({href:this.wallet.app_store,type:"app_store"})}onPlayStore(){this.wallet?.play_store&&this.openStore({href:this.wallet.play_store,type:"play_store"})}onHomePage(){this.wallet?.homepage&&this.openStore({href:this.wallet.homepage,type:"homepage"})}};In=function(e,t,i,n){var o,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,n);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(r<3?o(a):r>3?o(t,i,a):o(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a}([K("w3m-downloads-view")],In);let Tn=class extends e{render(){return t`
      <wui-flex flexDirection="column" .padding=${["0","3","3","3"]} gap="2">
        ${this.recommendedWalletsTemplate()}
        <w3m-list-wallet
          name="Explore all"
          showAllWallets
          walletIcon="allWallets"
          icon="externalLink"
          size="sm"
          @click=${()=>{s.openHref("https://walletconnect.com/explorer?type=wallet","_blank")}}
        ></w3m-list-wallet>
      </wui-flex>
    `}recommendedWalletsTemplate(){const{recommended:e,featured:i}=R.state,{customWallets:o}=n.state;return[...i,...o??[],...e].slice(0,4).map(e=>t`
        <w3m-list-wallet
          name=${e.name??"Unknown"}
          tagVariant="accent"
          size="sm"
          imageSrc=${B(r.getWalletImage(e))}
          @click=${()=>{this.onWalletClick(e)}}
        ></w3m-list-wallet>
      `)}onWalletClick(e){d.sendEvent({type:"track",event:"GET_WALLET",properties:{name:e.name,walletRank:void 0,explorerId:e.id,type:"homepage"}}),s.openHref(e.homepage??"https://walletconnect.com/explorer","_blank")}};Tn=function(e,t,i,n){var o,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,n);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(r<3?o(a):r>3?o(t,i,a):o(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a}([K("w3m-get-wallet-view")],Tn);var An=function(e,t,i,n){var o,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,n);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(r<3?o(a):r>3?o(t,i,a):o(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let On=class extends e{constructor(){super(...arguments),this.data=[]}render(){return t`
      <wui-flex flexDirection="column" alignItems="center" gap="4">
        ${this.data.map(e=>t`
            <wui-flex flexDirection="column" alignItems="center" gap="5">
              <wui-flex flexDirection="row" justifyContent="center" gap="1">
                ${e.images.map(e=>t`<wui-visual size="sm" name=${e}></wui-visual>`)}
              </wui-flex>
            </wui-flex>
            <wui-flex flexDirection="column" alignItems="center" gap="1">
              <wui-text variant="md-regular" color="primary" align="center">${e.title}</wui-text>
              <wui-text variant="sm-regular" color="secondary" align="center"
                >${e.text}</wui-text
              >
            </wui-flex>
          `)}
      </wui-flex>
    `}};An([z({type:Array})],On.prototype,"data",void 0),On=An([K("w3m-help-widget")],On);const Nn=[{images:["login","profile","lock"],title:"One login for all of web3",text:"Log in to any app by connecting your wallet. Say goodbye to countless passwords!"},{images:["defi","nft","eth"],title:"A home for your digital assets",text:"A wallet lets you store, send and receive digital assets like cryptocurrencies and NFTs."},{images:["browser","noun","dao"],title:"Your gateway to a new web",text:"With your wallet, you can explore and interact with DeFi, NFTs, DAOs, and much more."}];let Pn=class extends e{render(){return t`
      <wui-flex
        flexDirection="column"
        .padding=${["6","5","5","5"]}
        alignItems="center"
        gap="5"
      >
        <w3m-help-widget .data=${Nn}></w3m-help-widget>
        <wui-button variant="accent-primary" size="md" @click=${this.onGetWallet.bind(this)}>
          <wui-icon color="inherit" slot="iconLeft" name="wallet"></wui-icon>
          Get a wallet
        </wui-button>
      </wui-flex>
    `}onGetWallet(){d.sendEvent({type:"track",event:"CLICK_GET_WALLET_HELP"}),w.push("GetWallet")}};Pn=function(e,t,i,n){var o,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,n);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(r<3?o(a):r>3?o(t,i,a):o(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a}([K("w3m-what-is-a-wallet-view")],Pn);const jn=F`
  wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    transition: opacity ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
    will-change: opacity;
  }
  wui-flex::-webkit-scrollbar {
    display: none;
  }
  wui-flex.disabled {
    opacity: 0.3;
    pointer-events: none;
    user-select: none;
  }
`;var Dn=function(e,t,i,n){var o,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,n);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(r<3?o(a):r>3?o(t,i,a):o(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let Ln=class extends e{constructor(){super(),this.unsubscribe=[],this.checked=J.state.isLegalCheckboxChecked,this.unsubscribe.push(J.subscribeKey("isLegalCheckboxChecked",e=>{this.checked=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const{termsConditionsUrl:e,privacyPolicyUrl:i}=n.state,o=n.state.features?.legalCheckbox,r=Boolean(e||i)&&Boolean(o),a=r&&!this.checked,s=a?-1:void 0;return t`
      <w3m-legal-checkbox></w3m-legal-checkbox>
      <wui-flex
        flexDirection="column"
        .padding=${r?["0","3","3","3"]:"3"}
        gap="2"
        class=${B(a?"disabled":void 0)}
      >
        <w3m-wallet-login-list tabIdx=${B(s)}></w3m-wallet-login-list>
      </wui-flex>
    `}};Ln.styles=jn,Dn([_()],Ln.prototype,"checked",void 0),Ln=Dn([K("w3m-connect-wallets-view")],Ln);const Wn=F`
  :host {
    display: block;
    width: 120px;
    height: 120px;
  }

  svg {
    width: 120px;
    height: 120px;
    fill: none;
    stroke: transparent;
    stroke-linecap: round;
  }

  use {
    stroke: ${e=>e.colors.accent100};
    stroke-width: 2px;
    stroke-dasharray: 54, 118;
    stroke-dashoffset: 172;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;let zn=class extends e{render(){return t`
      <svg viewBox="0 0 54 59">
        <path
          id="wui-loader-path"
          d="M17.22 5.295c3.877-2.277 5.737-3.363 7.72-3.726a11.44 11.44 0 0 1 4.12 0c1.983.363 3.844 1.45 7.72 3.726l6.065 3.562c3.876 2.276 5.731 3.372 7.032 4.938a11.896 11.896 0 0 1 2.06 3.63c.683 1.928.688 4.11.688 8.663v7.124c0 4.553-.005 6.735-.688 8.664a11.896 11.896 0 0 1-2.06 3.63c-1.3 1.565-3.156 2.66-7.032 4.937l-6.065 3.563c-3.877 2.276-5.737 3.362-7.72 3.725a11.46 11.46 0 0 1-4.12 0c-1.983-.363-3.844-1.449-7.72-3.726l-6.065-3.562c-3.876-2.276-5.731-3.372-7.032-4.938a11.885 11.885 0 0 1-2.06-3.63c-.682-1.928-.688-4.11-.688-8.663v-7.124c0-4.553.006-6.735.688-8.664a11.885 11.885 0 0 1 2.06-3.63c1.3-1.565 3.156-2.66 7.032-4.937l6.065-3.562Z"
        />
        <use xlink:href="#wui-loader-path"></use>
      </svg>
    `}};zn.styles=[M,Wn],zn=function(e,t,i,n){var o,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,n);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(r<3?o(a):r>3?o(t,i,a):o(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a}([K("wui-loading-hexagon")],zn);const _n=S`<svg width="86" height="96" fill="none">
  <path
    d="M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z"
  />
</svg>`,Un=S`
  <svg fill="none" viewBox="0 0 36 40">
    <path
      d="M15.4 2.1a5.21 5.21 0 0 1 5.2 0l11.61 6.7a5.21 5.21 0 0 1 2.61 4.52v13.4c0 1.87-1 3.59-2.6 4.52l-11.61 6.7c-1.62.93-3.6.93-5.22 0l-11.6-6.7a5.21 5.21 0 0 1-2.61-4.51v-13.4c0-1.87 1-3.6 2.6-4.52L15.4 2.1Z"
    />
  </svg>
`,Bn=F`
  :host {
    position: relative;
    border-radius: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-width);
    height: var(--local-height);
  }

  :host([data-round='true']) {
    background: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: 100%;
    outline: 1px solid ${({tokens:e})=>e.core.glass010};
  }

  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  }

  svg > path {
    stroke: var(--local-stroke);
  }

  wui-image {
    width: 100%;
    height: 100%;
    -webkit-clip-path: var(--local-path);
    clip-path: var(--local-path);
    background: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  wui-icon {
    transform: translateY(-5%);
    width: var(--local-icon-size);
    height: var(--local-icon-size);
  }
`;var Fn=function(e,t,i,n){var o,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,n);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(r<3?o(a):r>3?o(t,i,a):o(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let Mn=class extends e{constructor(){super(...arguments),this.size="md",this.name="uknown",this.networkImagesBySize={sm:Un,md:Vt,lg:_n},this.selected=!1,this.round=!1}render(){const e={sm:"4",md:"6",lg:"10"};return this.round?(this.dataset.round="true",this.style.cssText="\n      --local-width: var(--apkt-spacing-10);\n      --local-height: var(--apkt-spacing-10);\n      --local-icon-size: var(--apkt-spacing-4);\n    "):this.style.cssText=`\n\n      --local-path: var(--apkt-path-network-${this.size});\n      --local-width:  var(--apkt-width-network-${this.size});\n      --local-height:  var(--apkt-height-network-${this.size});\n      --local-icon-size:  var(--apkt-spacing-${e[this.size]});\n    `,t`${this.templateVisual()} ${this.svgTemplate()} `}svgTemplate(){return this.round?null:this.networkImagesBySize[this.size]}templateVisual(){return this.imageSrc?t`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:t`<wui-icon size="inherit" color="default" name="networkPlaceholder"></wui-icon>`}};Mn.styles=[M,Bn],Fn([z()],Mn.prototype,"size",void 0),Fn([z()],Mn.prototype,"name",void 0),Fn([z({type:Object})],Mn.prototype,"networkImagesBySize",void 0),Fn([z()],Mn.prototype,"imageSrc",void 0),Fn([z({type:Boolean})],Mn.prototype,"selected",void 0),Fn([z({type:Boolean})],Mn.prototype,"round",void 0),Mn=Fn([K("wui-network-image")],Mn);const Vn=l`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-hexagon {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: 4px;
    bottom: 0;
    opacity: 0;
    transform: scale(0.5);
    z-index: 1;
  }

  wui-button {
    display: none;
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  wui-button[data-retry='true'] {
    display: block;
    opacity: 1;
  }
`;var Kn=function(e,t,i,n){var o,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,n);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(r<3?o(a):r>3?o(t,i,a):o(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let Hn=class extends e{constructor(){super(),this.network=w.state.data?.network,this.unsubscribe=[],this.showRetry=!1,this.error=!1}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}firstUpdated(){this.onSwitchNetwork()}render(){if(!this.network)throw new Error("w3m-network-switch-view: No network provided");this.onShowRetry();const e=this.getLabel(),i=this.getSubLabel();return t`
      <wui-flex
        data-error=${this.error}
        flexDirection="column"
        alignItems="center"
        .padding=${["10","5","10","5"]}
        gap="7"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-network-image
            size="lg"
            imageSrc=${B(r.getNetworkImage(this.network))}
          ></wui-network-image>

          ${this.error?null:t`<wui-loading-hexagon></wui-loading-hexagon>`}

          <wui-icon-box color="error" icon="close" size="sm"></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="2">
          <wui-text align="center" variant="h6-regular" color="primary">${e}</wui-text>
          <wui-text align="center" variant="md-regular" color="secondary">${i}</wui-text>
        </wui-flex>

        <wui-button
          data-retry=${this.showRetry}
          variant="accent-primary"
          size="md"
          .disabled=${!this.error}
          @click=${this.onSwitchNetwork.bind(this)}
        >
          <wui-icon color="inherit" slot="iconLeft" name="refresh"></wui-icon>
          Try again
        </wui-button>
      </wui-flex>
    `}getSubLabel(){const e=h.getConnectorId(i.state.activeChain);return h.getAuthConnector()&&e===p.CONNECTOR_ID.AUTH?"":this.error?"Switch can be declined if chain is not supported by a wallet or previous request is still active":"Accept connection request in your wallet"}getLabel(){const e=h.getConnectorId(i.state.activeChain);return h.getAuthConnector()&&e===p.CONNECTOR_ID.AUTH?`Switching to ${this.network?.name??"Unknown"} network...`:this.error?"Switch declined":"Approve in wallet"}onShowRetry(){if(this.error&&!this.showRetry){this.showRetry=!0;const e=this.shadowRoot?.querySelector("wui-button");e?.animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"})}}async onSwitchNetwork(){try{this.error=!1,i.state.activeChain!==this.network?.chainNamespace&&i.setIsSwitchingNamespace(!0),this.network&&await i.switchActiveNetwork(this.network)}catch(e){this.error=!0}}};Hn.styles=Vn,Kn([_()],Hn.prototype,"showRetry",void 0),Kn([_()],Hn.prototype,"error",void 0),Hn=Kn([K("w3m-network-switch-view")],Hn);const qn=F`
  :host {
    width: 100%;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${({spacing:e})=>e[3]};
    width: 100%;
    background-color: transparent;
    border-radius: ${({borderRadius:e})=>e[4]};
  }

  wui-text {
    text-transform: capitalize;
  }

  @media (hover: hover) {
    button:hover:enabled {
      background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    }
  }

  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;var Gn=function(e,t,i,n){var o,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,n);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(r<3?o(a):r>3?o(t,i,a):o(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let Yn=class extends e{constructor(){super(...arguments),this.imageSrc="ethereum",this.name="Ethereum",this.disabled=!1}render(){return t`
      <button ?disabled=${this.disabled} tabindex=${B(this.tabIdx)}>
        <wui-flex gap="2" alignItems="center">
          <wui-image ?boxed=${!0} src=${this.imageSrc}></wui-image>
          <wui-text variant="lg-regular" color="primary">${this.name}</wui-text>
        </wui-flex>
        <wui-icon name="chevronRight" size="lg" color="default"></wui-icon>
      </button>
    `}};Yn.styles=[M,V,qn],Gn([z()],Yn.prototype,"imageSrc",void 0),Gn([z()],Yn.prototype,"name",void 0),Gn([z()],Yn.prototype,"tabIdx",void 0),Gn([z({type:Boolean})],Yn.prototype,"disabled",void 0),Yn=Gn([K("wui-list-network")],Yn);const Xn=l`
  .container {
    max-height: 360px;
    overflow: auto;
  }

  .container::-webkit-scrollbar {
    display: none;
  }
`;var Qn=function(e,t,i,n){var o,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,n);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(r<3?o(a):r>3?o(t,i,a):o(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let Zn=class extends e{constructor(){super(),this.unsubscribe=[],this.network=i.state.activeCaipNetwork,this.requestedCaipNetworks=i.getCaipNetworks(),this.search="",this.onDebouncedSearch=s.debounce(e=>{this.search=e},100),this.unsubscribe.push(o.subscribeNetworkImages(()=>this.requestUpdate()),i.subscribeKey("activeCaipNetwork",e=>this.network=e),i.subscribe(()=>{this.requestedCaipNetworks=i.getAllRequestedCaipNetworks()}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return t`
      ${this.templateSearchInput()}
      <wui-flex
        class="container"
        .padding=${["0","3","3","3"]}
        flexDirection="column"
        gap="2"
      >
        ${this.networksTemplate()}
      </wui-flex>
    `}templateSearchInput(){return t`
      <wui-flex gap="2" .padding=${["0","3","3","3"]}>
        <wui-input-text
          @inputChange=${this.onInputChange.bind(this)}
          class="network-search-input"
          size="md"
          placeholder="Search network"
          icon="search"
        ></wui-input-text>
      </wui-flex>
    `}onInputChange(e){this.onDebouncedSearch(e.detail)}networksTemplate(){const e=i.getAllApprovedCaipNetworkIds(),n=s.sortRequestedNetworks(e,this.requestedCaipNetworks);return this.search?this.filteredNetworks=n?.filter(e=>e?.name?.toLowerCase().includes(this.search.toLowerCase())):this.filteredNetworks=n,this.filteredNetworks?.map(e=>t`
        <wui-list-network
          .selected=${this.network?.id===e.id}
          imageSrc=${B(r.getNetworkImage(e))}
          type="network"
          name=${e.name??e.id}
          @click=${()=>this.onSwitchNetwork(e)}
          .disabled=${this.getNetworkDisabled(e)}
          data-testid=${`w3m-network-switch-${e.name??e.id}`}
        ></wui-list-network>
      `)}getNetworkDisabled(e){const t=e.chainNamespace,n=a.getCaipAddress(t),o=i.getAllApprovedCaipNetworkIds(),r=!1!==i.getNetworkProp("supportsAllNetworks",t),s=h.getConnectorId(t),c=h.getAuthConnector(),l=s===p.CONNECTOR_ID.AUTH&&c;return!(!n||r||l)&&!o?.includes(e.caipNetworkId)}onSwitchNetwork(e){L.onSwitchNetwork({network:e})}};Zn.styles=Xn,Qn([_()],Zn.prototype,"network",void 0),Qn([_()],Zn.prototype,"requestedCaipNetworks",void 0),Qn([_()],Zn.prototype,"filteredNetworks",void 0),Qn([_()],Zn.prototype,"search",void 0),Zn=Qn([K("w3m-networks-view")],Zn);const Jn=F`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-visual {
    border-radius: calc(
      ${({borderRadius:e})=>e[1]} * 9 - ${({borderRadius:e})=>e[3]}
    );
    position: relative;
    overflow: hidden;
  }

  wui-visual::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
    border-radius: calc(
      ${({borderRadius:e})=>e[1]} * 9 - ${({borderRadius:e})=>e[3]}
    );
    box-shadow: inset 0 0 0 1px ${({tokens:e})=>e.core.glass010};
  }

  wui-icon-box {
    position: absolute;
    right: calc(${({spacing:e})=>e[1]} * -1);
    bottom: calc(${({spacing:e})=>e[1]} * -1);
    opacity: 0;
    transform: scale(0.5);
    transition:
      opacity ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      transform ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]};
    will-change: opacity, transform;
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px ${({spacing:e})=>e[4]};
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms ${({easings:e})=>e["ease-out-power-2"]} both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }

  wui-link {
    padding: ${({spacing:e})=>e["01"]} ${({spacing:e})=>e[2]};
  }

  .capitalize {
    text-transform: capitalize;
  }
`;var eo=function(e,t,i,n){var o,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,n);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(r<3?o(a):r>3?o(t,i,a):o(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};const to={eip155:"eth",solana:"solana",bip122:"bitcoin",polkadot:void 0};let io=class extends e{constructor(){super(...arguments),this.unsubscribe=[],this.switchToChain=w.state.data?.switchToChain,this.caipNetwork=w.state.data?.network,this.activeChain=i.state.activeChain}firstUpdated(){this.unsubscribe.push(i.subscribeKey("activeChain",e=>this.activeChain=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const e=this.switchToChain?p.CHAIN_NAME_MAP[this.switchToChain]:"supported";if(!this.switchToChain)return null;const i=p.CHAIN_NAME_MAP[this.switchToChain];return t`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["4","2","2","2"]}
        gap="4"
      >
        <wui-flex justifyContent="center" flexDirection="column" alignItems="center" gap="2">
          <wui-visual
            size="md"
            name=${B(to[this.switchToChain])}
          ></wui-visual>
          <wui-flex gap="2" flexDirection="column">
            <wui-text
              data-testid=${`w3m-switch-active-chain-to-${i}`}
              variant="lg-regular"
              color="primary"
              align="center"
              >Switch to <span class="capitalize">${i}</span></wui-text
            >
            <wui-text variant="md-regular" color="secondary" align="center">
              Connected wallet doesn't support connecting to ${e} chain. You
              need to connect with a different wallet.
            </wui-text>
          </wui-flex>
          <wui-button
            data-testid="w3m-switch-active-chain-button"
            size="md"
            @click=${this.switchActiveChain.bind(this)}
            >Switch</wui-button
          >
        </wui-flex>
      </wui-flex>
    `}async switchActiveChain(){this.switchToChain&&(i.setIsSwitchingNamespace(!0),h.setFilterByNamespace(this.switchToChain),this.caipNetwork?await i.switchActiveNetwork(this.caipNetwork):i.setActiveNamespace(this.switchToChain),w.reset("Connect"))}};io.styles=Jn,eo([z()],io.prototype,"activeChain",void 0),io=eo([K("w3m-switch-active-chain-view")],io);const no=[{images:["network","layers","system"],title:"The system’s nuts and bolts",text:"A network is what brings the blockchain to life, as this technical infrastructure allows apps to access the ledger and smart contract services."},{images:["noun","defiAlt","dao"],title:"Designed for different uses",text:"Each network is designed differently, and may therefore suit certain apps and experiences."}];let oo=class extends e{render(){return t`
      <wui-flex
        flexDirection="column"
        .padding=${["6","5","5","5"]}
        alignItems="center"
        gap="5"
      >
        <w3m-help-widget .data=${no}></w3m-help-widget>
        <wui-button
          variant="accent-primary"
          size="md"
          @click=${()=>{s.openHref("https://ethereum.org/en/developers/docs/networks/","_blank")}}
        >
          Learn more
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-button>
      </wui-flex>
    `}};oo=function(e,t,i,n){var o,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,n);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(r<3?o(a):r>3?o(t,i,a):o(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a}([K("w3m-what-is-a-network-view")],oo);const ro=l`
  :host > wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }

  :host > wui-flex::-webkit-scrollbar {
    display: none;
  }
`;var ao=function(e,t,i,n){var o,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,n);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(r<3?o(a):r>3?o(t,i,a):o(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let so=class extends e{constructor(){super(),this.swapUnsupportedChain=w.state.data?.swapUnsupportedChain,this.unsubscribe=[],this.disconnecting=!1,this.remoteFeatures=n.state.remoteFeatures,this.unsubscribe.push(o.subscribeNetworkImages(()=>this.requestUpdate()),n.subscribeKey("remoteFeatures",e=>{this.remoteFeatures=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return t`
      <wui-flex class="container" flexDirection="column" gap="0">
        <wui-flex
          class="container"
          flexDirection="column"
          .padding=${["3","5","2","5"]}
          alignItems="center"
          gap="5"
        >
          ${this.descriptionTemplate()}
        </wui-flex>

        <wui-flex flexDirection="column" padding="3" gap="2"> ${this.networksTemplate()} </wui-flex>

        <wui-separator text="or"></wui-separator>
        <wui-flex flexDirection="column" padding="3" gap="2">
          <wui-list-item
            variant="icon"
            iconVariant="overlay"
            icon="signOut"
            ?chevron=${!1}
            .loading=${this.disconnecting}
            @click=${this.onDisconnect.bind(this)}
            data-testid="disconnect-button"
          >
            <wui-text variant="md-medium" color="secondary">Disconnect</wui-text>
          </wui-list-item>
        </wui-flex>
      </wui-flex>
    `}descriptionTemplate(){return this.swapUnsupportedChain?t`
        <wui-text variant="sm-regular" color="secondary" align="center">
          The swap feature doesn’t support your current network. Switch to an available option to
          continue.
        </wui-text>
      `:t`
      <wui-text variant="sm-regular" color="secondary" align="center">
        This app doesn’t support your current network. Switch to an available option to continue.
      </wui-text>
    `}networksTemplate(){const e=i.getAllRequestedCaipNetworks(),n=i.getAllApprovedCaipNetworkIds(),o=s.sortRequestedNetworks(n,e);return(this.swapUnsupportedChain?o.filter(e=>m.SWAP_SUPPORTED_NETWORKS.includes(e.caipNetworkId)):o).map(e=>t`
        <wui-list-network
          imageSrc=${B(r.getNetworkImage(e))}
          name=${e.name??"Unknown"}
          @click=${()=>this.onSwitchNetwork(e)}
        >
        </wui-list-network>
      `)}async onDisconnect(){try{this.disconnecting=!0;const e=i.state.activeChain,t=y.getConnections(e).length>0,n=e&&h.state.activeConnectorIds[e],o=this.remoteFeatures?.multiWallet;await y.disconnect(o?{id:n,namespace:e}:{}),t&&o&&(w.push("ProfileWallets"),g.showSuccess("Wallet deleted"))}catch{d.sendEvent({type:"track",event:"DISCONNECT_ERROR",properties:{message:"Failed to disconnect"}}),g.showError("Failed to disconnect")}finally{this.disconnecting=!1}}async onSwitchNetwork(e){const t=a.state.caipAddress,n=i.getAllApprovedCaipNetworkIds(),o=(i.getNetworkProp("supportsAllNetworks",e.chainNamespace),w.state.data);t?n?.includes(e.caipNetworkId)?await i.switchActiveNetwork(e):w.push("SwitchNetwork",{...o,network:e}):t||(i.setActiveCaipNetwork(e),w.push("Connect"))}};so.styles=ro,ao([_()],so.prototype,"disconnecting",void 0),ao([_()],so.prototype,"remoteFeatures",void 0),so=ao([K("w3m-unsupported-chain-view")],so);const co=F`
  wui-flex {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${({spacing:e})=>e[2]};
    border-radius: ${({borderRadius:e})=>e[4]};
    padding: ${({spacing:e})=>e[3]};
  }

  /* -- Types --------------------------------------------------------- */
  wui-flex[data-type='info'] {
    color: ${({tokens:e})=>e.theme.textSecondary};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  wui-flex[data-type='success'] {
    color: ${({tokens:e})=>e.core.textSuccess};
    background-color: ${({tokens:e})=>e.core.backgroundSuccess};
  }

  wui-flex[data-type='error'] {
    color: ${({tokens:e})=>e.core.textError};
    background-color: ${({tokens:e})=>e.core.backgroundError};
  }

  wui-flex[data-type='warning'] {
    color: ${({tokens:e})=>e.core.textWarning};
    background-color: ${({tokens:e})=>e.core.backgroundWarning};
  }

  wui-flex[data-type='info'] wui-icon-box {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  wui-flex[data-type='success'] wui-icon-box {
    background-color: ${({tokens:e})=>e.core.backgroundSuccess};
  }

  wui-flex[data-type='error'] wui-icon-box {
    background-color: ${({tokens:e})=>e.core.backgroundError};
  }

  wui-flex[data-type='warning'] wui-icon-box {
    background-color: ${({tokens:e})=>e.core.backgroundWarning};
  }

  wui-text {
    flex: 1;
  }
`;var lo=function(e,t,i,n){var o,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,n);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(r<3?o(a):r>3?o(t,i,a):o(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let uo=class extends e{constructor(){super(...arguments),this.icon="externalLink",this.text="",this.type="info"}render(){return t`
      <wui-flex alignItems="center" data-type=${this.type}>
        <wui-icon-box size="sm" color="inherit" icon=${this.icon}></wui-icon-box>
        <wui-text variant="md-regular" color="inherit">${this.text}</wui-text>
      </wui-flex>
    `}};uo.styles=[M,V,co],lo([z()],uo.prototype,"icon",void 0),lo([z()],uo.prototype,"text",void 0),lo([z()],uo.prototype,"type",void 0),uo=lo([K("wui-banner")],uo);const ho=l`
  :host > wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }

  :host > wui-flex::-webkit-scrollbar {
    display: none;
  }
`;let po=class extends e{constructor(){super(),this.unsubscribe=[]}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return t` <wui-flex flexDirection="column" .padding=${["2","3","3","3"]} gap="2">
      <wui-banner
        icon="warningCircle"
        text="You can only receive assets on these networks"
      ></wui-banner>
      ${this.networkTemplate()}
    </wui-flex>`}networkTemplate(){const e=i.getAllRequestedCaipNetworks(),n=i.getAllApprovedCaipNetworkIds(),o=i.state.activeCaipNetwork,a=i.checkIfSmartAccountEnabled();let c=s.sortRequestedNetworks(n,e);if(a&&b(o?.chainNamespace)===f.ACCOUNT_TYPES.SMART_ACCOUNT){if(!o)return null;c=[o]}return c.filter(e=>e.chainNamespace===o?.chainNamespace).map(e=>t`
        <wui-list-network
          imageSrc=${B(r.getNetworkImage(e))}
          name=${e.name??"Unknown"}
          ?transparent=${!0}
        >
        </wui-list-network>
      `)}};po.styles=ho,po=function(e,t,i,n){var o,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,n);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(r<3?o(a):r>3?o(t,i,a):o(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a}([K("w3m-wallet-compatible-networks-view")],po);const wo=F`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 56px;
    height: 56px;
    box-shadow: 0 0 0 8px ${({tokens:e})=>e.theme.borderPrimary};
    border-radius: ${({borderRadius:e})=>e[4]};
    overflow: hidden;
  }

  :host([data-border-radius-full='true']) {
    border-radius: 50px;
  }

  wui-icon {
    width: 32px;
    height: 32px;
  }
`;var mo=function(e,t,i,n){var o,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,n);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(r<3?o(a):r>3?o(t,i,a):o(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let go=class extends e{render(){return this.dataset.borderRadiusFull=this.borderRadiusFull?"true":"false",t`${this.templateVisual()}`}templateVisual(){return this.imageSrc?t`<wui-image src=${this.imageSrc} alt=${this.alt??""}></wui-image>`:t`<wui-icon
      data-parent-size="md"
      size="inherit"
      color="inherit"
      name="wallet"
    ></wui-icon>`}};go.styles=[M,wo],mo([z()],go.prototype,"imageSrc",void 0),mo([z()],go.prototype,"alt",void 0),mo([z({type:Boolean})],go.prototype,"borderRadiusFull",void 0),go=mo([K("wui-visual-thumbnail")],go);const bo=F`
  :host {
    display: flex;
    justify-content: center;
    gap: ${({spacing:e})=>e[4]};
  }

  wui-visual-thumbnail:nth-child(1) {
    z-index: 1;
  }
`;let fo=class extends e{constructor(){super(...arguments),this.dappImageUrl=n.state.metadata?.icons,this.walletImageUrl=a.state.connectedWalletInfo?.icon}firstUpdated(){const e=this.shadowRoot?.querySelectorAll("wui-visual-thumbnail");e?.[0]&&this.createAnimation(e[0],"translate(18px)"),e?.[1]&&this.createAnimation(e[1],"translate(-18px)")}render(){return t`
      <wui-visual-thumbnail
        ?borderRadiusFull=${!0}
        .imageSrc=${this.dappImageUrl?.[0]}
      ></wui-visual-thumbnail>
      <wui-visual-thumbnail .imageSrc=${this.walletImageUrl}></wui-visual-thumbnail>
    `}createAnimation(e,t){e.animate([{transform:"translateX(0px)"},{transform:t}],{duration:1600,easing:"cubic-bezier(0.56, 0, 0.48, 1)",direction:"alternate",iterations:1/0})}};fo.styles=bo,fo=function(e,t,i,n){var o,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,n);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(r<3?o(a):r>3?o(t,i,a):o(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a}([K("w3m-siwx-sign-message-thumbnails")],fo);var yo=function(e,t,i,n){var o,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,n);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(r<3?o(a):r>3?o(t,i,a):o(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let vo=class extends e{constructor(){super(...arguments),this.dappName=n.state.metadata?.name,this.isCancelling=!1,this.isSigning=!1}render(){return t`
      <wui-flex justifyContent="center" .padding=${["8","0","6","0"]}>
        <w3m-siwx-sign-message-thumbnails></w3m-siwx-sign-message-thumbnails>
      </wui-flex>
      <wui-flex .padding=${["0","20","5","20"]} gap="3" justifyContent="space-between">
        <wui-text variant="lg-medium" align="center" color="primary"
          >${this.dappName??"Dapp"} needs to connect to your wallet</wui-text
        >
      </wui-flex>
      <wui-flex .padding=${["0","10","4","10"]} gap="3" justifyContent="space-between">
        <wui-text variant="md-regular" align="center" color="secondary"
          >Sign this message to prove you own this wallet and proceed. Canceling will disconnect
          you.</wui-text
        >
      </wui-flex>
      <wui-flex .padding=${["4","5","5","5"]} gap="3" justifyContent="space-between">
        <wui-button
          size="lg"
          borderRadius="xs"
          fullWidth
          variant="neutral-secondary"
          ?loading=${this.isCancelling}
          @click=${this.onCancel.bind(this)}
          data-testid="w3m-connecting-siwe-cancel"
        >
          ${this.isCancelling?"Cancelling...":"Cancel"}
        </wui-button>
        <wui-button
          size="lg"
          borderRadius="xs"
          fullWidth
          variant="neutral-primary"
          @click=${this.onSign.bind(this)}
          ?loading=${this.isSigning}
          data-testid="w3m-connecting-siwe-sign"
        >
          ${this.isSigning?"Signing...":"Sign"}
        </wui-button>
      </wui-flex>
    `}async onSign(){this.isSigning=!0;try{await W.requestSignMessage()}catch(e){if(e instanceof Error&&e.message.includes("OTP is required"))return g.showError({message:"Something went wrong. We need to verify your account again."}),void w.replace("DataCapture");throw e}finally{this.isSigning=!1}}async onCancel(){this.isCancelling=!0,await W.cancelSignMessage().finally(()=>this.isCancelling=!1)}};yo([_()],vo.prototype,"isCancelling",void 0),yo([_()],vo.prototype,"isSigning",void 0),vo=yo([K("w3m-siwx-sign-message-view")],vo);export{ce as AppKitAccountButton,pe as AppKitButton,ve as AppKitConnectButton,Ie as AppKitNetworkButton,se as W3mAccountButton,De as W3mAccountSettingsView,bt as W3mAccountView,ci as W3mAllWalletsView,he as W3mButton,En as W3mChooseAccountNameView,ye as W3mConnectButton,Gi as W3mConnectView,Ln as W3mConnectWalletsView,rn as W3mConnectingExternalView,cn as W3mConnectingMultiChainView,Cn as W3mConnectingWcBasicView,$n as W3mConnectingWcView,In as W3mDownloadsView,q as W3mFooter,Tn as W3mGetWalletView,Ee as W3mNetworkButton,Hn as W3mNetworkSwitchView,Zn as W3mNetworksView,jt as W3mProfileWalletsView,G as W3mRouter,vo as W3mSIWXSignMessageView,io as W3mSwitchActiveChainView,so as W3mUnsupportedChainView,po as W3mWalletCompatibleNetworksView,oo as W3mWhatIsANetworkView,Pn as W3mWhatIsAWalletView};
