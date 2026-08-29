import{dT as e,dU as t,cM as i,cS as o,cO as r,eT as s,eU as a,d_ as n,d$ as c,dX as l,cN as d}from"./59977a62.js";import{n as u,r as p}from"./59977a621007.js";import{o as w}from"./59977a62845.js";import{c as h,r as m,e as f,a as g,U as b}from"./59977a621008.js";import"./59977a621012.js";import"./59977a621055.js";import"./59977a622.js";import"./59977a623.js";const k=h`
  button {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: ${({spacing:e})=>e[4]};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[3]};
    border: none;
    padding: ${({spacing:e})=>e[3]};
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color;
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  button:hover:enabled,
  button:active:enabled {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  wui-text {
    flex: 1;
    color: ${({tokens:e})=>e.theme.textSecondary};
  }

  wui-flex {
    width: auto;
    display: flex;
    align-items: center;
    gap: ${({spacing:e})=>e["01"]};
  }

  wui-icon {
    color: ${({tokens:e})=>e.theme.iconDefault};
  }

  .network-icon {
    position: relative;
    width: 20px;
    height: 20px;
    border-radius: ${({borderRadius:e})=>e[4]};
    overflow: hidden;
    margin-left: -8px;
  }

  .network-icon:first-child {
    margin-left: 0px;
  }

  .network-icon:after {
    position: absolute;
    inset: 0;
    content: '';
    display: block;
    height: 100%;
    width: 100%;
    border-radius: ${({borderRadius:e})=>e[4]};
    box-shadow: inset 0 0 0 1px ${({tokens:e})=>e.core.glass010};
  }
`;var y=function(e,t,i,o){var r,s=arguments.length,a=s<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var n=e.length-1;n>=0;n--)(r=e[n])&&(a=(s<3?r(a):s>3?r(t,i,a):r(t,i))||a);return s>3&&a&&Object.defineProperty(t,i,a),a};let x=class extends e{constructor(){super(...arguments),this.networkImages=[""],this.text=""}render(){return t`
      <button>
        <wui-text variant="md-regular" color="inherit">${this.text}</wui-text>
        <wui-flex>
          ${this.networksTemplate()}
          <wui-icon name="chevronRight" size="sm" color="inherit"></wui-icon>
        </wui-flex>
      </button>
    `}networksTemplate(){const e=this.networkImages.slice(0,5);return t` <wui-flex class="networks">
      ${e?.map(e=>t` <wui-flex class="network-icon"> <wui-image src=${e}></wui-image> </wui-flex>`)}
    </wui-flex>`}};x.styles=[m,f,k],y([u({type:Array})],x.prototype,"networkImages",void 0),y([u()],x.prototype,"text",void 0),x=y([g("wui-compatible-network")],x);const v=h`
  wui-compatible-network {
    margin-top: ${({spacing:e})=>e[4]};
    width: 100%;
  }

  wui-qr-code {
    width: unset !important;
    height: unset !important;
  }

  wui-icon {
    align-items: normal;
  }
`;var $=function(e,t,i,o){var r,s=arguments.length,a=s<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var n=e.length-1;n>=0;n--)(r=e[n])&&(a=(s<3?r(a):s>3?r(t,i,a):r(t,i))||a);return s>3&&a&&Object.defineProperty(t,i,a),a};let N=class extends e{constructor(){super(),this.unsubscribe=[],this.address=i.state.address,this.profileName=i.state.profileName,this.network=o.state.activeCaipNetwork,this.unsubscribe.push(i.subscribe(e=>{e.address?(this.address=e.address,this.profileName=e.profileName):r.showError("Account not found")}),o.subscribeKey("activeCaipNetwork",e=>{e?.id&&(this.network=e)}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){if(!this.address)throw new Error("w3m-wallet-receive-view: No account provided");const e=s.getNetworkImage(this.network);return t` <wui-flex
      flexDirection="column"
      .padding=${["0","4","4","4"]}
      alignItems="center"
    >
      <wui-chip-button
        data-testid="receive-address-copy-button"
        @click=${this.onCopyClick.bind(this)}
        text=${b.getTruncateString({string:this.profileName||this.address||"",charsStart:this.profileName?18:4,charsEnd:this.profileName?0:4,truncate:this.profileName?"end":"middle"})}
        icon="copy"
        size="sm"
        imageSrc=${e||""}
        variant="gray"
      ></wui-chip-button>
      <wui-flex
        flexDirection="column"
        .padding=${["4","0","0","0"]}
        alignItems="center"
        gap="4"
      >
        <wui-qr-code
          size=${232}
          theme=${a.state.themeMode}
          uri=${this.address}
          ?arenaClear=${!0}
          color=${w(a.state.themeVariables["--w3m-qr-color"])}
          data-testid="wui-qr-code"
        ></wui-qr-code>
        <wui-text variant="lg-regular" color="primary" align="center">
          Copy your address or scan this QR code
        </wui-text>
        <wui-button @click=${this.onCopyClick.bind(this)} size="sm" variant="neutral-secondary">
          <wui-icon slot="iconLeft" size="sm" color="inherit" name="copy"></wui-icon>
          <wui-text variant="md-regular" color="inherit">Copy address</wui-text>
        </wui-button>
      </wui-flex>
      ${this.networkTemplate()}
    </wui-flex>`}networkTemplate(){const e=o.getAllRequestedCaipNetworks(),i=o.checkIfSmartAccountEnabled(),r=o.state.activeCaipNetwork,a=e.filter(e=>e?.chainNamespace===r?.chainNamespace);if(n(r?.chainNamespace)===c.ACCOUNT_TYPES.SMART_ACCOUNT&&i)return r?t`<wui-compatible-network
        @click=${this.onReceiveClick.bind(this)}
        text="Only receive assets on this network"
        .networkImages=${[s.getNetworkImage(r)??""]}
      ></wui-compatible-network>`:null;const l=a?.filter(e=>e?.assets?.imageId)?.slice(0,5),d=l.map(s.getNetworkImage).filter(Boolean);return t`<wui-compatible-network
      @click=${this.onReceiveClick.bind(this)}
      text="Only receive assets on these networks"
      .networkImages=${d}
    ></wui-compatible-network>`}onReceiveClick(){l.push("WalletCompatibleNetworks")}onCopyClick(){try{this.address&&(d.copyToClopboard(this.address),r.showSuccess("Address copied"))}catch{r.showError("Failed to copy")}}};N.styles=v,$([p()],N.prototype,"address",void 0),$([p()],N.prototype,"profileName",void 0),$([p()],N.prototype,"network",void 0),N=$([g("w3m-wallet-receive-view")],N);export{N as W3mWalletReceiveView};
