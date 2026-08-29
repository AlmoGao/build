import{dT as e,dU as t,cS as i,dX as n,cO as s,cM as a,dY as o,cN as r}from"./acd90090.js";import{n as c,r as u}from"./acd900901007.js";import{a as m,c as l}from"./acd900901008.js";import"./acd900901014.js";import"./acd900901006.js";import"./acd900901012.js";import"./acd900901021.js";import"./acd900901016.js";import{o as d}from"./acd90090845.js";import"./acd900901019.js";import"./acd900901011.js";import{E as p}from"./acd90090846.js";import"./acd900901010.js";import"./acd900901013.js";import"./acd900901053.js";import"./acd900902.js";import"./acd900903.js";import"./acd900901009.js";var h=function(e,t,i,n){var s,a=arguments.length,o=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(s=e[r])&&(o=(a<3?s(o):a>3?s(t,i,o):s(t,i))||o);return a>3&&o&&Object.defineProperty(t,i,o),o};let g=class extends e{constructor(){super(...arguments),this.maxDecimals=void 0,this.maxIntegers=void 0}render(){return t`
      <wui-flex alignItems="center" gap="1">
        <wui-input-amount
          widthVariant="fit"
          .maxDecimals=${d(this.maxDecimals)}
          .maxIntegers=${d(this.maxIntegers)}
          .value=${this.amount?String(this.amount):""}
        ></wui-input-amount>
        <wui-text variant="md-regular" color="secondary">USD</wui-text>
      </wui-flex>
    `}};h([c({type:Number})],g.prototype,"amount",void 0),h([c({type:Number})],g.prototype,"maxDecimals",void 0),h([c({type:Number})],g.prototype,"maxIntegers",void 0),g=h([m("w3m-fund-input")],g);const x=l`
  .amount-input-container {
    border-radius: ${({borderRadius:e})=>e[5]};
    border-top-right-radius: 0;
    border-top-left-radius: 0;
    border-bottom: 1px solid ${({tokens:e})=>e.core.glass010};
    background-color: ${({tokens:e})=>e.theme.backgroundPrimary};
  }

  .container {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    border-radius: 30px;
  }
`;var w=function(e,t,i,n){var s,a=arguments.length,o=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(s=e[r])&&(o=(a<3?s(o):a>3?s(t,i,o):s(t,i))||o);return a>3&&o&&Object.defineProperty(t,i,o),o};const y=[10,50,100];let f=class extends e{constructor(){super(),this.unsubscribe=[],this.network=i.state.activeCaipNetwork,this.exchanges=p.state.exchanges,this.isLoading=p.state.isLoading,this.amount=p.state.amount,this.tokenAmount=p.state.tokenAmount,this.priceLoading=p.state.priceLoading,this.isPaymentInProgress=p.state.isPaymentInProgress,this.currentPayment=p.state.currentPayment,this.paymentId=p.state.paymentId,this.paymentAsset=p.state.paymentAsset,this.unsubscribe.push(i.subscribeKey("activeCaipNetwork",e=>{this.network=e,this.setDefaultPaymentAsset()}),p.subscribe(e=>{this.exchanges=e.exchanges,this.isLoading=e.isLoading,this.amount=e.amount,this.tokenAmount=e.tokenAmount,this.priceLoading=e.priceLoading,this.paymentId=e.paymentId,this.isPaymentInProgress=e.isPaymentInProgress,this.currentPayment=e.currentPayment,this.paymentAsset=e.paymentAsset;e.isPaymentInProgress&&e.currentPayment?.exchangeId&&e.currentPayment?.sessionId&&e.paymentId&&this.handlePaymentInProgress()}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),p.reset()}async firstUpdated(){await this.getPaymentAssets(),this.paymentAsset||await this.setDefaultPaymentAsset(),p.setAmount(y[0]),await p.fetchExchanges()}render(){return t`
      <wui-flex flexDirection="column" class="container">
        ${this.amountInputTemplate()} ${this.exchangesTemplate()}
      </wui-flex>
    `}exchangesLoadingTemplate(){return Array.from({length:2}).map(()=>t`<wui-shimmer width="100%" height="65px" borderRadius="xxs"></wui-shimmer>`)}_exchangesTemplate(){return this.exchanges.length>0?this.exchanges.map(e=>t`<wui-list-item
              @click=${()=>this.onExchangeClick(e)}
              chevron
              variant="image"
              imageSrc=${e.imageUrl}
              ?loading=${this.isLoading}
            >
              <wui-text variant="md-regular" color="secondary">
                Deposit from ${e.name}
              </wui-text>
            </wui-list-item>`):t`<wui-flex flexDirection="column" alignItems="center" gap="4" padding="4">
          <wui-text variant="lg-medium" align="center" color="primary">
            No exchanges support this asset on this network
          </wui-text>
        </wui-flex>`}exchangesTemplate(){return t`<wui-flex
      flexDirection="column"
      gap="2"
      .padding=${["3","3","3","3"]}
      class="exchanges-container"
    >
      ${this.isLoading?this.exchangesLoadingTemplate():this._exchangesTemplate()}
    </wui-flex>`}amountInputTemplate(){return t`
      <wui-flex
        flexDirection="column"
        .padding=${["0","3","3","3"]}
        class="amount-input-container"
      >
        <wui-flex
          justifyContent="space-between"
          alignItems="center"
          .margin=${["0","0","6","0"]}
        >
          <wui-text variant="md-medium" color="secondary">Asset</wui-text>
          <wui-token-button
            data-testid="deposit-from-exchange-asset-button"
            flexDirection="row-reverse"
            text=${this.paymentAsset?.metadata.symbol||""}
            imageSrc=${this.paymentAsset?.metadata.iconUrl||""}
            @click=${()=>n.push("PayWithExchangeSelectAsset")}
          >
          </wui-token-button>
        </wui-flex>
        <wui-flex
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          .margin=${["0","0","4","0"]}
        >
          <w3m-fund-input
            @inputChange=${this.onAmountChange.bind(this)}
            .amount=${this.amount}
            .maxDecimals=${6}
            .maxIntegers=${10}
          >
          </w3m-fund-input>
          ${this.tokenAmountTemplate()}
        </wui-flex>
        <wui-flex justifyContent="space-between" gap="2">
          ${y.map(e=>t`<wui-button
                @click=${()=>p.setAmount(e)}
                variant=${this.amount===e?"neutral-primary":"neutral-secondary"}
                size="sm"
                fullWidth
                >$${e}</wui-button
              >`)}
        </wui-flex>
      </wui-flex>
    `}tokenAmountTemplate(){return this.priceLoading?t`<wui-shimmer
        width="65px"
        height="20px"
        borderRadius="xxs"
        variant="light"
      ></wui-shimmer>`:t`
      <wui-text variant="md-regular" color="secondary">
        ${this.tokenAmount.toFixed(4)} ${this.paymentAsset?.metadata.symbol}
      </wui-text>
    `}async onExchangeClick(e){this.amount?await p.handlePayWithExchange(e.id):s.showError("Please enter an amount")}handlePaymentInProgress(){const e=i.state.activeChain;this.isPaymentInProgress&&this.currentPayment?.exchangeId&&this.currentPayment?.sessionId&&this.paymentId&&(p.waitUntilComplete({exchangeId:this.currentPayment.exchangeId,sessionId:this.currentPayment.sessionId,paymentId:this.paymentId}).then(t=>{"SUCCESS"===t.status?(s.showSuccess("Deposit completed"),e&&(a.fetchTokenBalance(),o.updateBalance(e))):"FAILED"===t.status&&s.showError("Deposit failed")}),s.showLoading("Deposit in progress..."),n.replace("Account"))}onAmountChange({detail:e}){p.setAmount(e?Number(e):null)}async getPaymentAssets(){this.network&&await p.getAssetsForNetwork(this.network.caipNetworkId)}async setDefaultPaymentAsset(){if(this.network){const e=await p.getAssetsForNetwork(this.network.caipNetworkId);e[0]&&p.setPaymentAsset(e[0])}}};f.styles=x,w([u()],f.prototype,"network",void 0),w([u()],f.prototype,"exchanges",void 0),w([u()],f.prototype,"isLoading",void 0),w([u()],f.prototype,"amount",void 0),w([u()],f.prototype,"tokenAmount",void 0),w([u()],f.prototype,"priceLoading",void 0),w([u()],f.prototype,"isPaymentInProgress",void 0),w([u()],f.prototype,"currentPayment",void 0),w([u()],f.prototype,"paymentId",void 0),w([u()],f.prototype,"paymentAsset",void 0),f=w([m("w3m-deposit-from-exchange-view")],f);const b=l`
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
`;var k=function(e,t,i,n){var s,a=arguments.length,o=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(s=e[r])&&(o=(a<3?s(o):a>3?s(t,i,o):s(t,i))||o);return a>3&&o&&Object.defineProperty(t,i,o),o};let v=class extends e{constructor(){super(),this.unsubscribe=[],this.assets=p.state.assets,this.search="",this.onDebouncedSearch=r.debounce(e=>{this.search=e}),this.unsubscribe.push(p.subscribe(e=>{this.assets=e.assets}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return t`
      <wui-flex flexDirection="column">
        ${this.templateSearchInput()} <wui-separator></wui-separator> ${this.templateTokens()}
      </wui-flex>
    `}templateSearchInput(){return t`
      <wui-flex gap="2" padding="3">
        <wui-input-text
          @inputChange=${this.onInputChange.bind(this)}
          class="network-search-input"
          size="sm"
          placeholder="Search token"
          icon="search"
        ></wui-input-text>
      </wui-flex>
    `}templateTokens(){const e=this.assets.filter(e=>e.metadata.name.toLowerCase().includes(this.search.toLowerCase())),i=e.length>0;return t`
      <wui-flex
        class="contentContainer"
        flexDirection="column"
        .padding=${["0","3","0","3"]}
      >
        <wui-flex justifyContent="flex-start" .padding=${["4","3","3","3"]}>
          <wui-text variant="md-medium" color="secondary">Available tokens</wui-text>
        </wui-flex>
        <wui-flex flexDirection="column" gap="2">
          ${i?e.map(e=>t`<wui-list-item
                    .imageSrc=${e.metadata.iconUrl}
                    ?clickable=${!0}
                    @click=${this.handleTokenClick.bind(this,e)}
                  >
                    <wui-text variant="md-medium" color="primary">${e.metadata.name}</wui-text>
                    <wui-text variant="md-regular" color="secondary"
                      >${e.metadata.symbol}</wui-text
                    >
                  </wui-list-item>`):t`<wui-flex
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
                >
                  <wui-text variant="lg-medium" align="center" color="primary">
                    No tokens found
                  </wui-text>
                </wui-flex>
                <wui-link @click=${this.onBuyClick.bind(this)}>Buy</wui-link>
              </wui-flex>`}
        </wui-flex>
      </wui-flex>
    `}onBuyClick(){n.push("OnRampProviders")}onInputChange(e){this.onDebouncedSearch(e.detail)}handleTokenClick(e){p.setPaymentAsset(e),n.goBack()}};v.styles=b,k([u()],v.prototype,"assets",void 0),k([u()],v.prototype,"search",void 0),v=k([m("w3m-deposit-from-exchange-select-asset-view")],v);export{v as W3mDepositFromExchangeSelectAssetView,f as W3mDepositFromExchangeView};
