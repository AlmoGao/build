import{dP as e,cO as t,cT as i,dU as n,gi as r,dQ as o,dT as s,cW as a,cN as c,cP as l,cU as d,d_ as u,eL as h,dV as p,cM as m,dW as f,dX as w,er as g}from"./6db743d6.js";import{n as k,r as b}from"./6db743d6937.js";import{c as v,a as x,U as y,r as $,e as A}from"./6db743d6938.js";import{e as T,n as P}from"./6db743d6944.js";import"./6db743d6940.js";import"./6db743d6949.js";import"./6db743d6941.js";import"./6db743d6948.js";import{S as C}from"./6db743d6947.js";import"./6db743d6943.js";import"./6db743d6984.js";import"./6db743d6942.js";import"./6db743d6950.js";import{o as R}from"./6db743d6779.js";import"./6db743d62.js";import"./6db743d63.js";import"./6db743d6939.js";import"./6db743d6946.js";const N=v`
  :host {
    width: 100%;
    height: 100px;
    border-radius: ${({borderRadius:e})=>e[5]};
    border: 1px solid ${({tokens:e})=>e.theme.foregroundPrimary};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-1"]};
    will-change: background-color;
    position: relative;
  }

  :host(:hover) {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  wui-flex {
    width: 100%;
    height: fit-content;
  }

  wui-button {
    display: ruby;
    color: ${({tokens:e})=>e.theme.textPrimary};
    margin: 0 ${({spacing:e})=>e[2]};
  }

  .instruction {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 2;
  }

  .paste {
    display: inline-flex;
  }

  textarea {
    background: transparent;
    width: 100%;
    font-family: ${({fontFamily:e})=>e.regular};
    font-style: normal;
    font-weight: var(--apkt-font-weight-light);
    line-height: 130%;
    letter-spacing: ${({typography:e})=>e["md-medium"].letterSpacing};
    color: ${({tokens:e})=>e.theme.textPrimary};
    caret-color: ${({tokens:e})=>e.core.textAccentPrimary};
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: textfield;
    padding: 0px;
    border: none;
    outline: none;
    appearance: none;
    resize: none;
    overflow: hidden;
  }
`;var S=function(e,t,i,n){var r,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o<3?r(s):o>3?r(t,i,s):r(t,i))||s);return o>3&&s&&Object.defineProperty(t,i,s),s};let j=class extends e{constructor(){super(...arguments),this.inputElementRef=T(),this.instructionElementRef=T(),this.readOnly=!1,this.instructionHidden=Boolean(this.value),this.pasting=!1,this.onDebouncedSearch=t.debounce(async e=>{if(!e.length)return void this.setReceiverAddress("");const o=i.state.activeChain;if(t.isAddress(e,o))this.setReceiverAddress(e);else try{const t=await n.getEnsAddress(e);if(t){r.setReceiverProfileName(e),r.setReceiverAddress(t);const i=await n.getEnsAvatar(e);r.setReceiverProfileImageUrl(i||void 0)}}catch(s){this.setReceiverAddress(e)}finally{r.setLoading(!1)}})}firstUpdated(){this.value&&(this.instructionHidden=!0),this.checkHidden()}render(){return this.readOnly?o` <wui-flex
        flexDirection="column"
        justifyContent="center"
        gap="01"
        .padding=${["8","4","5","4"]}
      >
        <textarea
          spellcheck="false"
          ?disabled=${!0}
          autocomplete="off"
          .value=${this.value??""}
        >
           ${this.value??""}</textarea
        >
      </wui-flex>`:o` <wui-flex
      @click=${this.onBoxClick.bind(this)}
      flexDirection="column"
      justifyContent="center"
      gap="01"
      .padding=${["8","4","5","4"]}
    >
      <wui-text
        ${P(this.instructionElementRef)}
        class="instruction"
        color="secondary"
        variant="md-medium"
      >
        Type or
        <wui-button
          class="paste"
          size="md"
          variant="neutral-secondary"
          iconLeft="copy"
          @click=${this.onPasteClick.bind(this)}
        >
          <wui-icon size="sm" color="inherit" slot="iconLeft" name="copy"></wui-icon>
          Paste
        </wui-button>
        address
      </wui-text>
      <textarea
        spellcheck="false"
        ?disabled=${!this.instructionHidden}
        ${P(this.inputElementRef)}
        @input=${this.onInputChange.bind(this)}
        @blur=${this.onBlur.bind(this)}
        .value=${this.value??""}
        autocomplete="off"
      >
${this.value??""}</textarea
      >
    </wui-flex>`}async focusInput(){this.instructionElementRef.value&&(this.instructionHidden=!0,await this.toggleInstructionFocus(!1),this.instructionElementRef.value.style.pointerEvents="none",this.inputElementRef.value?.focus(),this.inputElementRef.value&&(this.inputElementRef.value.selectionStart=this.inputElementRef.value.selectionEnd=this.inputElementRef.value.value.length))}async focusInstruction(){this.instructionElementRef.value&&(this.instructionHidden=!1,await this.toggleInstructionFocus(!0),this.instructionElementRef.value.style.pointerEvents="auto",this.inputElementRef.value?.blur())}async toggleInstructionFocus(e){this.instructionElementRef.value&&await this.instructionElementRef.value.animate([{opacity:e?0:1},{opacity:e?1:0}],{duration:100,easing:"ease",fill:"forwards"}).finished}onBoxClick(){this.value||this.instructionHidden||this.focusInput()}onBlur(){this.value||!this.instructionHidden||this.pasting||this.focusInstruction()}checkHidden(){this.instructionHidden&&this.focusInput()}async onPasteClick(){this.pasting=!0;const e=await navigator.clipboard.readText();r.setReceiverAddress(e),this.focusInput()}onInputChange(e){const t=e.target;this.pasting=!1,this.value=e.target?.value,t.value&&!this.instructionHidden&&this.focusInput(),r.setLoading(!0),this.onDebouncedSearch(t.value)}setReceiverAddress(e){r.setReceiverAddress(e),r.setReceiverProfileName(void 0),r.setReceiverProfileImageUrl(void 0),r.setLoading(!1)}};j.styles=N,S([k()],j.prototype,"value",void 0),S([k({type:Boolean})],j.prototype,"readOnly",void 0),S([b()],j.prototype,"instructionHidden",void 0),S([b()],j.prototype,"pasting",void 0),j=S([x("w3m-input-address")],j);const I=v`
  :host {
    width: 100%;
    height: 100px;
    border-radius: ${({borderRadius:e})=>e[5]};
    border: 1px solid ${({tokens:e})=>e.theme.foregroundPrimary};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-1"]};
    will-change: background-color;
    transition: all ${({easings:e})=>e["ease-out-power-1"]}
      ${({durations:e})=>e.lg};
  }

  :host(:hover) {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  wui-flex {
    width: 100%;
    height: fit-content;
  }

  wui-button {
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }

  wui-input-amount {
    mask-image: linear-gradient(
      270deg,
      transparent 0px,
      transparent 8px,
      black 24px,
      black 25px,
      black 32px,
      black 100%
    );
  }

  .totalValue {
    width: 100%;
  }
`;var B=function(e,t,i,n){var r,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o<3?r(s):o>3?r(t,i,s):r(t,i))||s);return o>3&&s&&Object.defineProperty(t,i,s),s};let O=class extends e{constructor(){super(...arguments),this.readOnly=!1}render(){const e=this.readOnly||!this.token;return o` <wui-flex
      flexDirection="column"
      gap="01"
      .padding=${["5","3","4","3"]}
    >
      <wui-flex alignItems="center">
        <wui-input-amount
          @inputChange=${this.onInputChange.bind(this)}
          ?disabled=${e}
          .value=${this.sendTokenAmount?String(this.sendTokenAmount):""}
        ></wui-input-amount>
        ${this.buttonTemplate()}
      </wui-flex>
      ${this.bottomTemplate()}
    </wui-flex>`}buttonTemplate(){return this.token?o`<wui-token-button
        text=${this.token.symbol}
        imageSrc=${this.token.iconUrl}
        @click=${this.handleSelectButtonClick.bind(this)}
      >
      </wui-token-button>`:o`<wui-button
      size="md"
      variant="neutral-secondary"
      @click=${this.handleSelectButtonClick.bind(this)}
      >Select token</wui-button
    >`}handleSelectButtonClick(){this.readOnly||s.push("WalletSendSelectToken")}sendValueTemplate(){if(!this.readOnly&&this.token&&this.sendTokenAmount){const e=this.token.price*this.sendTokenAmount;return o`<wui-text class="totalValue" variant="sm-regular" color="secondary"
        >${e?`$${a.formatNumberToLocalString(e,2)}`:"Incorrect value"}</wui-text
      >`}return null}maxAmountTemplate(){return this.token?this.sendTokenAmount&&this.sendTokenAmount>Number(this.token.quantity.numeric)?o` <wui-text variant="sm-regular" color="error">
          ${y.roundNumber(Number(this.token.quantity.numeric),6,5)}
        </wui-text>`:o` <wui-text variant="sm-regular" color="secondary">
        ${y.roundNumber(Number(this.token.quantity.numeric),6,5)}
      </wui-text>`:null}actionTemplate(){return this.token?this.sendTokenAmount&&this.sendTokenAmount>Number(this.token.quantity.numeric)?o`<wui-link @click=${this.onBuyClick.bind(this)}>Buy</wui-link>`:o`<wui-link @click=${this.onMaxClick.bind(this)}>Max</wui-link>`:null}bottomTemplate(){return this.readOnly?null:o`<wui-flex alignItems="center" justifyContent="space-between">
      ${this.sendValueTemplate()}
      <wui-flex alignItems="center" gap="01" justifyContent="flex-end">
        ${this.maxAmountTemplate()} ${this.actionTemplate()}
      </wui-flex>
    </wui-flex>`}onInputChange(e){r.setTokenAmount(e.detail)}onMaxClick(){if(this.token){const e=a.bigNumber(this.token.quantity.numeric);r.setTokenAmount(Number(e.toFixed(20)))}}onBuyClick(){s.push("OnRampProviders")}};O.styles=I,B([k({type:Object})],O.prototype,"token",void 0),B([k({type:Boolean})],O.prototype,"readOnly",void 0),B([k({type:Number})],O.prototype,"sendTokenAmount",void 0),O=B([x("w3m-input-token")],O);const E=v`
  :host {
    display: block;
  }

  wui-flex {
    position: relative;
  }

  wui-icon-box {
    width: 32px;
    height: 32px;
    border-radius: ${({borderRadius:e})=>e[10]} !important;
    border: 4px solid ${({tokens:e})=>e.theme.backgroundPrimary};
    background: ${({tokens:e})=>e.theme.foregroundPrimary};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 3;
  }

  wui-button {
    --local-border-radius: ${({borderRadius:e})=>e[4]} !important;
  }

  .inputContainer {
    height: fit-content;
  }
`;var D=function(e,t,i,n){var r,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o<3?r(s):o>3?r(t,i,s):r(t,i))||s);return o>3&&s&&Object.defineProperty(t,i,s),s};let z=class extends e{constructor(){super(),this.unsubscribe=[],this.token=r.state.token,this.sendTokenAmount=r.state.sendTokenAmount,this.receiverAddress=r.state.receiverAddress,this.receiverProfileName=r.state.receiverProfileName,this.loading=r.state.loading,this.params=s.state.data?.send,this.caipAddress=c.state.caipAddress,this.message="Preview Send",this.token&&!this.params&&(this.fetchBalances(),this.fetchNetworkPrice()),this.unsubscribe.push(c.subscribeKey("caipAddress",e=>{this.caipAddress=e}),r.subscribe(e=>{this.token=e.token,this.sendTokenAmount=e.sendTokenAmount,this.receiverAddress=e.receiverAddress,this.receiverProfileName=e.receiverProfileName,this.loading=e.loading}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}async firstUpdated(){await this.handleSendParameters()}render(){this.getMessage();const e=Boolean(this.params);return o` <wui-flex flexDirection="column" .padding=${["0","4","4","4"]}>
      <wui-flex class="inputContainer" gap="2" flexDirection="column">
        <w3m-input-token
          .token=${this.token}
          .sendTokenAmount=${this.sendTokenAmount}
          ?readOnly=${e}
        ></w3m-input-token>
        <wui-icon-box size="md" variant="secondary" icon="arrowBottom"></wui-icon-box>
        <w3m-input-address
          ?readOnly=${e}
          .value=${this.receiverProfileName?this.receiverProfileName:this.receiverAddress}
        ></w3m-input-address>
      </wui-flex>
      <wui-flex .margin=${["4","0","0","0"]}>
        <wui-button
          @click=${this.onButtonClick.bind(this)}
          ?disabled=${!this.message.startsWith("Preview Send")}
          size="lg"
          variant="accent-primary"
          ?loading=${this.loading}
          fullWidth
        >
          ${this.message}
        </wui-button>
      </wui-flex>
    </wui-flex>`}async fetchBalances(){await r.fetchTokenBalance(),r.fetchNetworkBalance()}async fetchNetworkPrice(){await C.getNetworkTokenPrice()}onButtonClick(){s.push("WalletSendPreview",{send:this.params})}getMessage(){if(this.message="Preview Send",this.receiverAddress&&!t.isAddress(this.receiverAddress,i.state.activeChain)&&(this.message="Invalid Address"),this.receiverAddress||(this.message="Add Address"),this.sendTokenAmount&&this.token&&this.sendTokenAmount>Number(this.token.quantity.numeric)&&(this.message="Insufficient Funds"),this.sendTokenAmount||(this.message="Add Amount"),this.sendTokenAmount&&this.token?.price){this.sendTokenAmount*this.token.price||(this.message="Incorrect Value")}this.token||(this.message="Select Token")}async handleSendParameters(){if(this.loading=!0,!this.params)return void(this.loading=!1);const e=Number(this.params.amount);if(isNaN(e))return l.showError("Invalid amount"),void(this.loading=!1);const{namespace:t,chainId:n,assetAddress:o}=this.params;if(!d.SEND_PARAMS_SUPPORTED_CHAINS.includes(t))return l.showError(`Chain "${t}" is not supported for send parameters`),void(this.loading=!1);const s=i.getCaipNetworkById(n,t);if(!s)return l.showError(`Network with id "${n}" not found`),void(this.loading=!1);try{const{balance:t,name:i,symbol:n,decimals:a}=await u.fetchERC20Balance({caipAddress:this.caipAddress,assetAddress:o,caipNetwork:s});if(!(i&&n&&a&&t))return void l.showError("Token not found");r.setToken({name:i,symbol:n,chainId:s.id.toString(),address:`${s.chainNamespace}:${s.id}:${o}`,value:0,price:0,quantity:{decimals:a.toString(),numeric:t.toString()},iconUrl:h.getTokenImage(n)??""}),r.setTokenAmount(e),r.setReceiverAddress(this.params.to)}catch(a){l.showError("Failed to load token information")}finally{this.loading=!1}}};z.styles=E,D([b()],z.prototype,"token",void 0),D([b()],z.prototype,"sendTokenAmount",void 0),D([b()],z.prototype,"receiverAddress",void 0),D([b()],z.prototype,"receiverProfileName",void 0),D([b()],z.prototype,"loading",void 0),D([b()],z.prototype,"params",void 0),D([b()],z.prototype,"caipAddress",void 0),D([b()],z.prototype,"message",void 0),z=D([x("w3m-wallet-send-view")],z);const U=v`
  .contentContainer {
    height: 440px;
    overflow: scroll;
    scrollbar-width: none;
  }

  .contentContainer::-webkit-scrollbar {
    display: none;
  }

  wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: ${({borderRadius:e})=>e[3]};
  }
`;var H=function(e,t,i,n){var r,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o<3?r(s):o>3?r(t,i,s):r(t,i))||s);return o>3&&s&&Object.defineProperty(t,i,s),s};let V=class extends e{constructor(){super(),this.unsubscribe=[],this.tokenBalances=r.state.tokenBalances,this.search="",this.onDebouncedSearch=t.debounce(e=>{this.search=e}),this.fetchBalancesAndNetworkPrice(),this.unsubscribe.push(r.subscribe(e=>{this.tokenBalances=e.tokenBalances}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return o`
      <wui-flex flexDirection="column">
        ${this.templateSearchInput()} <wui-separator></wui-separator> ${this.templateTokens()}
      </wui-flex>
    `}async fetchBalancesAndNetworkPrice(){this.tokenBalances&&0!==this.tokenBalances?.length||(await this.fetchBalances(),await this.fetchNetworkPrice())}async fetchBalances(){await r.fetchTokenBalance(),r.fetchNetworkBalance()}async fetchNetworkPrice(){await C.getNetworkTokenPrice()}templateSearchInput(){return o`
      <wui-flex gap="2" padding="3">
        <wui-input-text
          @inputChange=${this.onInputChange.bind(this)}
          class="network-search-input"
          size="sm"
          placeholder="Search token"
          icon="search"
        ></wui-input-text>
      </wui-flex>
    `}templateTokens(){return this.tokens=this.tokenBalances?.filter(e=>e.chainId===i.state.activeCaipNetwork?.caipNetworkId),this.search?this.filteredTokens=this.tokenBalances?.filter(e=>e.name.toLowerCase().includes(this.search.toLowerCase())):this.filteredTokens=this.tokens,o`
      <wui-flex
        class="contentContainer"
        flexDirection="column"
        .padding=${["0","3","0","3"]}
      >
        <wui-flex justifyContent="flex-start" .padding=${["4","3","3","3"]}>
          <wui-text variant="md-medium" color="secondary">Your tokens</wui-text>
        </wui-flex>
        <wui-flex flexDirection="column" gap="2">
          ${this.filteredTokens&&this.filteredTokens.length>0?this.filteredTokens.map(e=>o`<wui-list-token
                    @click=${this.handleTokenClick.bind(this,e)}
                    ?clickable=${!0}
                    tokenName=${e.name}
                    tokenImageUrl=${e.iconUrl}
                    tokenAmount=${e.quantity.numeric}
                    tokenValue=${e.value}
                    tokenCurrency=${e.symbol}
                  ></wui-list-token>`):o`<wui-flex
                .padding=${["20","0","0","0"]}
                alignItems="center"
                flexDirection="column"
                gap="4"
              >
                <wui-icon-box icon="coinPlaceholder" color="default" size="lg"></wui-icon-box>
                <wui-flex
                  class="textContent"
                  gap="2"
                  flexDirection="column"
                  justifyContent="center"
                  flexDirection="column"
                >
                  <wui-text variant="lg-medium" align="center" color="primary">
                    No tokens found
                  </wui-text>
                  <wui-text variant="lg-regular" align="center" color="secondary">
                    Your tokens will appear here
                  </wui-text>
                </wui-flex>
                <wui-link @click=${this.onBuyClick.bind(this)}>Buy</wui-link>
              </wui-flex>`}
        </wui-flex>
      </wui-flex>
    `}onBuyClick(){s.push("OnRampProviders")}onInputChange(e){this.onDebouncedSearch(e.detail)}handleTokenClick(e){r.setToken(e),r.setTokenAmount(void 0),s.goBack()}};V.styles=U,H([b()],V.prototype,"tokenBalances",void 0),H([b()],V.prototype,"tokens",void 0),H([b()],V.prototype,"filteredTokens",void 0),H([b()],V.prototype,"search",void 0),V=H([x("w3m-wallet-send-select-token-view")],V);const L=v`
  :host {
    height: 32px;
    display: flex;
    align-items: center;
    gap: ${({spacing:e})=>e[1]};
    border-radius: ${({borderRadius:e})=>e[32]};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    padding: ${({spacing:e})=>e[1]};
    padding-left: ${({spacing:e})=>e[2]};
  }

  wui-avatar,
  wui-image {
    width: 24px;
    height: 24px;
    border-radius: ${({borderRadius:e})=>e[16]};
  }

  wui-icon {
    border-radius: ${({borderRadius:e})=>e[16]};
  }
`;var F=function(e,t,i,n){var r,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o<3?r(s):o>3?r(t,i,s):r(t,i))||s);return o>3&&s&&Object.defineProperty(t,i,s),s};let q=class extends e{constructor(){super(...arguments),this.text=""}render(){return o`<wui-text variant="lg-regular" color="primary">${this.text}</wui-text>
      ${this.imageTemplate()}`}imageTemplate(){return this.address?o`<wui-avatar address=${this.address} .imageSrc=${this.imageSrc}></wui-avatar>`:this.imageSrc?o`<wui-image src=${this.imageSrc}></wui-image>`:o`<wui-icon size="lg" color="inverse" name="networkPlaceholder"></wui-icon>`}};q.styles=[$,A,L],F([k({type:String})],q.prototype,"text",void 0),F([k({type:String})],q.prototype,"address",void 0),F([k({type:String})],q.prototype,"imageSrc",void 0),q=F([x("wui-preview-item")],q);const M=v`
  :host {
    display: flex;
    padding: ${({spacing:e})=>e[4]} ${({spacing:e})=>e[3]};
    width: 100%;
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[4]};
  }

  wui-image {
    width: 20px;
    height: 20px;
    border-radius: ${({borderRadius:e})=>e[16]};
  }

  wui-icon {
    width: 20px;
    height: 20px;
  }
`;var W=function(e,t,i,n){var r,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o<3?r(s):o>3?r(t,i,s):r(t,i))||s);return o>3&&s&&Object.defineProperty(t,i,s),s};let _=class extends e{constructor(){super(...arguments),this.imageSrc=void 0,this.textTitle="",this.textValue=void 0}render(){return o`
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="lg-regular" color="primary"> ${this.textTitle} </wui-text>
        ${this.templateContent()}
      </wui-flex>
    `}templateContent(){return this.imageSrc?o`<wui-image src=${this.imageSrc} alt=${this.textTitle}></wui-image>`:this.textValue?o` <wui-text variant="md-regular" color="secondary"> ${this.textValue} </wui-text>`:o`<wui-icon size="inherit" color="default" name="networkPlaceholder"></wui-icon>`}};_.styles=[$,A,M],W([k()],_.prototype,"imageSrc",void 0),W([k()],_.prototype,"textTitle",void 0),W([k()],_.prototype,"textValue",void 0),_=W([x("wui-list-content")],_);const Y=v`
  :host {
    display: flex;
    width: auto;
    flex-direction: column;
    gap: ${({spacing:e})=>e[1]};
    border-radius: ${({borderRadius:e})=>e[5]};
    background: ${({tokens:e})=>e.theme.foregroundPrimary};
    padding: ${({spacing:e})=>e[3]} ${({spacing:e})=>e[2]}
      ${({spacing:e})=>e[2]} ${({spacing:e})=>e[2]};
  }

  wui-list-content {
    width: -webkit-fill-available !important;
  }

  wui-text {
    padding: 0 ${({spacing:e})=>e[2]};
  }

  wui-flex {
    margin-top: ${({spacing:e})=>e[2]};
  }

  .network {
    cursor: pointer;
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-1"]};
    will-change: background-color;
  }

  .network:focus-visible {
    border: 1px solid ${({tokens:e})=>e.core.textAccentPrimary};
    background-color: ${({tokens:e})=>e.core.glass010};
    -webkit-box-shadow: 0px 0px 0px 4px ${({tokens:e})=>e.core.foregroundAccent010};
    -moz-box-shadow: 0px 0px 0px 4px ${({tokens:e})=>e.core.foregroundAccent010};
    box-shadow: 0px 0px 0px 4px ${({tokens:e})=>e.core.foregroundAccent010};
  }

  .network:hover {
    background-color: ${({tokens:e})=>e.core.glass010};
  }

  .network:active {
    background-color: ${({tokens:e})=>e.core.glass010};
  }
`;var K=function(e,t,i,n){var r,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o<3?r(s):o>3?r(t,i,s):r(t,i))||s);return o>3&&s&&Object.defineProperty(t,i,s),s};let Q=class extends e{constructor(){super(...arguments),this.params=s.state.data?.send}render(){return o` <wui-text variant="sm-regular" color="secondary">Details</wui-text>
      <wui-flex flexDirection="column" gap="1">
        <wui-list-content
          textTitle="Address"
          textValue=${y.getTruncateString({string:this.receiverAddress??"",charsStart:4,charsEnd:4,truncate:"middle"})}
        >
        </wui-list-content>
        ${this.networkTemplate()}
      </wui-flex>`}networkTemplate(){return this.caipNetwork?.name?o` <wui-list-content
        @click=${()=>this.onNetworkClick(this.caipNetwork)}
        class="network"
        textTitle="Network"
        imageSrc=${R(h.getNetworkImage(this.caipNetwork))}
      ></wui-list-content>`:null}onNetworkClick(e){e&&!this.params&&s.push("Networks",{network:e})}};Q.styles=Y,K([k()],Q.prototype,"receiverAddress",void 0),K([k({type:Object})],Q.prototype,"caipNetwork",void 0),K([b()],Q.prototype,"params",void 0),Q=K([x("w3m-wallet-send-details")],Q);const X=v`
  wui-avatar,
  wui-image {
    display: ruby;
    width: 32px;
    height: 32px;
    border-radius: ${({borderRadius:e})=>e[20]};
  }

  .sendButton {
    width: 70%;
    --local-width: 100% !important;
    --local-border-radius: ${({borderRadius:e})=>e[4]} !important;
  }

  .cancelButton {
    width: 30%;
    --local-width: 100% !important;
    --local-border-radius: ${({borderRadius:e})=>e[4]} !important;
  }
`;var G=function(e,t,i,n){var r,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o<3?r(s):o>3?r(t,i,s):r(t,i))||s);return o>3&&s&&Object.defineProperty(t,i,s),s};let J=class extends e{constructor(){super(),this.unsubscribe=[],this.token=r.state.token,this.sendTokenAmount=r.state.sendTokenAmount,this.receiverAddress=r.state.receiverAddress,this.receiverProfileName=r.state.receiverProfileName,this.receiverProfileImageUrl=r.state.receiverProfileImageUrl,this.caipNetwork=i.state.activeCaipNetwork,this.loading=r.state.loading,this.params=s.state.data?.send,this.unsubscribe.push(r.subscribe(e=>{this.token=e.token,this.sendTokenAmount=e.sendTokenAmount,this.receiverAddress=e.receiverAddress,this.receiverProfileName=e.receiverProfileName,this.receiverProfileImageUrl=e.receiverProfileImageUrl,this.loading=e.loading}),i.subscribeKey("activeCaipNetwork",e=>this.caipNetwork=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return o` <wui-flex flexDirection="column" .padding=${["0","4","4","4"]}>
      <wui-flex gap="2" flexDirection="column" .padding=${["0","2","0","2"]}>
        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-flex flexDirection="column" gap="01">
            <wui-text variant="sm-regular" color="secondary">Send</wui-text>
            ${this.sendValueTemplate()}
          </wui-flex>
          <wui-preview-item
            text="${this.sendTokenAmount?y.roundNumber(this.sendTokenAmount,6,5):"unknown"} ${this.token?.symbol}"
            .imageSrc=${this.token?.iconUrl}
          ></wui-preview-item>
        </wui-flex>
        <wui-flex>
          <wui-icon color="default" size="md" name="arrowBottom"></wui-icon>
        </wui-flex>
        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-text variant="sm-regular" color="secondary">To</wui-text>
          <wui-preview-item
            text="${this.receiverProfileName?y.getTruncateString({string:this.receiverProfileName,charsStart:20,charsEnd:0,truncate:"end"}):y.getTruncateString({string:this.receiverAddress?this.receiverAddress:"",charsStart:4,charsEnd:4,truncate:"middle"})}"
            address=${this.receiverAddress??""}
            .imageSrc=${this.receiverProfileImageUrl??void 0}
            .isAddress=${!0}
          ></wui-preview-item>
        </wui-flex>
      </wui-flex>
      <wui-flex flexDirection="column" .padding=${["6","0","0","0"]}>
        <w3m-wallet-send-details
          .caipNetwork=${this.caipNetwork}
          .receiverAddress=${this.receiverAddress}
        ></w3m-wallet-send-details>
        <wui-flex justifyContent="center" gap="1" .padding=${["3","0","0","0"]}>
          <wui-icon size="sm" color="default" name="warningCircle"></wui-icon>
          <wui-text variant="sm-regular" color="secondary">Review transaction carefully</wui-text>
        </wui-flex>
        <wui-flex justifyContent="center" gap="3" .padding=${["4","0","0","0"]}>
          <wui-button
            class="cancelButton"
            @click=${this.onCancelClick.bind(this)}
            size="lg"
            variant="neutral-secondary"
          >
            Cancel
          </wui-button>
          <wui-button
            class="sendButton"
            @click=${this.onSendClick.bind(this)}
            size="lg"
            variant="accent-primary"
            .loading=${this.loading}
          >
            Send
          </wui-button>
        </wui-flex>
      </wui-flex></wui-flex
    >`}sendValueTemplate(){if(!this.params&&this.token&&this.sendTokenAmount){const e=this.token.price*this.sendTokenAmount;return o`<wui-text variant="md-regular" color="primary"
        >$${e.toFixed(2)}</wui-text
      >`}return null}async onSendClick(){if(this.sendTokenAmount&&this.receiverAddress)try{await r.sendToken(),this.params?s.reset("WalletSendConfirmed"):(l.showSuccess("Transaction started"),s.replace("Account"))}catch(e){let n="Failed to send transaction. Please try again.";i.state.activeChain===p.CHAIN.SOLANA&&e instanceof Error&&(n=e.message),l.showError(n),m.sendEvent({type:"track",event:"SEND_ERROR",properties:{message:t.parseError(e),isSmartAccount:f(i.state.activeChain)===w.ACCOUNT_TYPES.SMART_ACCOUNT,token:this.token?.symbol||"",amount:this.sendTokenAmount,network:i.state.activeCaipNetwork?.caipNetworkId||""}})}else l.showError("Please enter a valid amount and receiver address")}onCancelClick(){s.goBack()}};J.styles=X,G([b()],J.prototype,"token",void 0),G([b()],J.prototype,"sendTokenAmount",void 0),G([b()],J.prototype,"receiverAddress",void 0),G([b()],J.prototype,"receiverProfileName",void 0),G([b()],J.prototype,"receiverProfileImageUrl",void 0),G([b()],J.prototype,"caipNetwork",void 0),G([b()],J.prototype,"loading",void 0),G([b()],J.prototype,"params",void 0),J=G([x("w3m-wallet-send-preview-view")],J);const Z=v`
  .icon-box {
    width: 64px;
    height: 64px;
    border-radius: 16px;
    background-color: ${({spacing:e})=>e[16]};
    border: 8px solid ${({tokens:e})=>e.theme.borderPrimary};
    border-radius: ${({borderRadius:e})=>e.round};
  }
`;let ee=class extends e{constructor(){super(),this.unsubscribe=[],this.unsubscribe.push()}render(){return o`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="4"
        .padding="${["1","3","4","3"]}"
      >
        <wui-flex justifyContent="center" alignItems="center" class="icon-box">
          <wui-icon size="xxl" color="success" name="checkmark"></wui-icon>
        </wui-flex>

        <wui-text variant="h6-medium" color="primary">You successfully sent asset</wui-text>

        <wui-button
          fullWidth
          @click=${this.onCloseClick.bind(this)}
          size="lg"
          variant="neutral-secondary"
        >
          Close
        </wui-button>
      </wui-flex>
    `}onCloseClick(){g.close()}};ee.styles=Z,ee=function(e,t,i,n){var r,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o<3?r(s):o>3?r(t,i,s):r(t,i))||s);return o>3&&s&&Object.defineProperty(t,i,s),s}([x("w3m-send-confirmed-view")],ee);export{ee as W3mSendConfirmedView,V as W3mSendSelectTokenView,J as W3mWalletSendPreviewView,z as W3mWalletSendView};
