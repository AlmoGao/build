import{dT as t,dU as e,dV as i,f3 as n,dX as o,e3 as s,cN as r,cO as a}from"./00ec651c.js";import{n as l,r as u}from"./00ec651c1007.js";import{c,r as p,e as h,a as d,U as m}from"./00ec651c1008.js";import"./00ec651c1011.js";import"./00ec651c1009.js";const g=c`
  :host {
    position: relative;
    display: inline-block;
  }

  input {
    width: 48px;
    height: 48px;
    background: ${({tokens:t})=>t.theme.foregroundPrimary};
    border-radius: ${({borderRadius:t})=>t[4]};
    border: 1px solid ${({tokens:t})=>t.theme.borderPrimary};
    font-family: ${({fontFamily:t})=>t.regular};
    font-size: ${({textSize:t})=>t.large};
    line-height: 18px;
    letter-spacing: -0.16px;
    text-align: center;
    color: ${({tokens:t})=>t.theme.textPrimary};
    caret-color: ${({tokens:t})=>t.core.textAccentPrimary};
    transition:
      background-color ${({durations:t})=>t.lg}
        ${({easings:t})=>t["ease-out-power-2"]},
      border-color ${({durations:t})=>t.lg}
        ${({easings:t})=>t["ease-out-power-2"]},
      box-shadow ${({durations:t})=>t.lg}
        ${({easings:t})=>t["ease-out-power-2"]};
    will-change: background-color, border-color, box-shadow;
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: textfield;
    padding: ${({spacing:t})=>t[4]};
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  input:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  input:focus-visible:enabled {
    background-color: transparent;
    border: 1px solid ${({tokens:t})=>t.theme.borderSecondary};
    box-shadow: 0px 0px 0px 4px ${({tokens:t})=>t.core.foregroundAccent040};
  }
`;var f=function(t,e,i,n){var o,s=arguments.length,r=s<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(r=(s<3?o(r):s>3?o(e,i,r):o(e,i))||r);return s>3&&r&&Object.defineProperty(e,i,r),r};let w=class extends t{constructor(){super(...arguments),this.disabled=!1,this.value=""}render(){return e`<input
      type="number"
      maxlength="1"
      inputmode="numeric"
      autofocus
      ?disabled=${this.disabled}
      value=${this.value}
    /> `}};w.styles=[p,h,g],f([l({type:Boolean})],w.prototype,"disabled",void 0),f([l({type:String})],w.prototype,"value",void 0),w=f([d("wui-input-numeric")],w);const b=i`
  :host {
    position: relative;
    display: block;
  }
`;var y=function(t,e,i,n){var o,s=arguments.length,r=s<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(r=(s<3?o(r):s>3?o(e,i,r):o(e,i))||r);return s>3&&r&&Object.defineProperty(e,i,r),r};let v=class extends t{constructor(){super(...arguments),this.length=6,this.otp="",this.values=Array.from({length:this.length}).map(()=>""),this.numerics=[],this.shouldInputBeEnabled=t=>this.values.slice(0,t).every(t=>""!==t),this.handleKeyDown=(t,e)=>{const i=t.target,n=this.getInputElement(i);if(!n)return;["ArrowLeft","ArrowRight","Shift","Delete"].includes(t.key)&&t.preventDefault();const o=n.selectionStart;switch(t.key){case"ArrowLeft":o&&n.setSelectionRange(o+1,o+1),this.focusInputField("prev",e);break;case"ArrowRight":case"Shift":this.focusInputField("next",e);break;case"Delete":case"Backspace":""===n.value?this.focusInputField("prev",e):this.updateInput(n,e,"")}},this.focusInputField=(t,e)=>{if("next"===t){const t=e+1;if(!this.shouldInputBeEnabled(t))return;const i=this.numerics[t<this.length?t:e],n=i?this.getInputElement(i):void 0;n&&(n.disabled=!1,n.focus())}if("prev"===t){const t=e-1,i=this.numerics[t>-1?t:e],n=i?this.getInputElement(i):void 0;n&&n.focus()}}}firstUpdated(){this.otp&&(this.values=this.otp.split(""));const t=this.shadowRoot?.querySelectorAll("wui-input-numeric");t&&(this.numerics=Array.from(t)),this.numerics[0]?.focus()}render(){return e`
      <wui-flex gap="1" data-testid="wui-otp-input">
        ${Array.from({length:this.length}).map((t,i)=>e`
            <wui-input-numeric
              @input=${t=>this.handleInput(t,i)}
              @click=${t=>this.selectInput(t)}
              @keydown=${t=>this.handleKeyDown(t,i)}
              .disabled=${!this.shouldInputBeEnabled(i)}
              .value=${this.values[i]||""}
            >
            </wui-input-numeric>
          `)}
      </wui-flex>
    `}updateInput(t,e,i){const n=this.numerics[e],o=t||(n?this.getInputElement(n):void 0);o&&(o.value=i,this.values=this.values.map((t,n)=>n===e?i:t))}selectInput(t){const e=t.target;if(e){const t=this.getInputElement(e);t?.select()}}handleInput(t,e){const i=t.target,n=this.getInputElement(i);if(n){const i=n.value;if("insertFromPaste"===t.inputType)this.handlePaste(n,i,e);else{m.isNumber(i)&&t.data?(this.updateInput(n,e,t.data),this.focusInputField("next",e)):this.updateInput(n,e,"")}}this.dispatchInputChangeEvent()}handlePaste(t,e,i){const n=e[0];if(n&&m.isNumber(n)){this.updateInput(t,i,n);const o=e.substring(1);if(i+1<this.length&&o.length){const t=this.numerics[i+1],e=t?this.getInputElement(t):void 0;e&&this.handlePaste(e,o,i+1)}else this.focusInputField("next",i)}else this.updateInput(t,i,"")}getInputElement(t){return t.shadowRoot?.querySelector("input")?t.shadowRoot.querySelector("input"):null}dispatchInputChangeEvent(){const t=this.values.join("");this.dispatchEvent(new CustomEvent("inputChange",{detail:t,bubbles:!0,composed:!0}))}};v.styles=[p,b],y([l({type:Number})],v.prototype,"length",void 0),y([l({type:String})],v.prototype,"otp",void 0),y([u()],v.prototype,"values",void 0),v=y([d("wui-otp")],v);const x=i`
  wui-loading-spinner {
    margin: 9px auto;
  }

  .email-display,
  .email-display wui-text {
    max-width: 100%;
  }
`;var $,I=function(t,e,i,n){var o,s=arguments.length,r=s<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(r=(s<3?o(r):s>3?o(e,i,r):o(e,i))||r);return s>3&&r&&Object.defineProperty(e,i,r),r};let T=$=class extends t{firstUpdated(){this.startOTPTimeout()}disconnectedCallback(){clearTimeout(this.OTPTimeout)}constructor(){super(),this.loading=!1,this.timeoutTimeLeft=n.getTimeToNextEmailLogin(),this.error="",this.otp="",this.email=o.state.data?.email,this.authConnector=s.getAuthConnector()}render(){if(!this.email)throw new Error("w3m-email-otp-widget: No email provided");const t=Boolean(this.timeoutTimeLeft),i=this.getFooterLabels(t);return e`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["4","0","4","0"]}
        gap="4"
      >
        <wui-flex
          class="email-display"
          flexDirection="column"
          alignItems="center"
          .padding=${["0","5","0","5"]}
        >
          <wui-text variant="md-regular" color="primary" align="center">
            Enter the code we sent to
          </wui-text>
          <wui-text variant="md-medium" color="primary" lineClamp="1" align="center">
            ${this.email}
          </wui-text>
        </wui-flex>

        <wui-text variant="sm-regular" color="secondary">The code expires in 20 minutes</wui-text>

        ${this.loading?e`<wui-loading-spinner size="xl" color="accent-primary"></wui-loading-spinner>`:e` <wui-flex flexDirection="column" alignItems="center" gap="2">
              <wui-otp
                dissabled
                length="6"
                @inputChange=${this.onOtpInputChange.bind(this)}
                .otp=${this.otp}
              ></wui-otp>
              ${this.error?e`
                    <wui-text variant="sm-regular" align="center" color="error">
                      ${this.error}. Try Again
                    </wui-text>
                  `:null}
            </wui-flex>`}

        <wui-flex alignItems="center" gap="2">
          <wui-text variant="sm-regular" color="secondary">${i.title}</wui-text>
          <wui-link @click=${this.onResendCode.bind(this)} .disabled=${t}>
            ${i.action}
          </wui-link>
        </wui-flex>
      </wui-flex>
    `}startOTPTimeout(){this.timeoutTimeLeft=n.getTimeToNextEmailLogin(),this.OTPTimeout=setInterval(()=>{this.timeoutTimeLeft>0?this.timeoutTimeLeft=n.getTimeToNextEmailLogin():clearInterval(this.OTPTimeout)},1e3)}async onOtpInputChange(t){try{this.loading||(this.otp=t.detail,this.shouldSubmitOnOtpChange()&&(this.loading=!0,await(this.onOtpSubmit?.(this.otp))))}catch(e){this.error=r.parseError(e),this.loading=!1}}async onResendCode(){try{if(this.onOtpResend){if(!this.loading&&!this.timeoutTimeLeft){this.error="",this.otp="";if(!s.getAuthConnector()||!this.email)throw new Error("w3m-email-otp-widget: Unable to resend email");this.loading=!0,await this.onOtpResend(this.email),this.startOTPTimeout(),a.showSuccess("Code email resent")}}else this.onStartOver&&this.onStartOver()}catch(t){a.showError(t)}finally{this.loading=!1}}getFooterLabels(t){return this.onStartOver?{title:"Something wrong?",action:"Try again "+(t?`in ${this.timeoutTimeLeft}s`:"")}:{title:"Didn't receive it?",action:"Resend "+(t?`in ${this.timeoutTimeLeft}s`:"Code")}}shouldSubmitOnOtpChange(){return this.authConnector&&this.otp.length===$.OTP_LENGTH}};T.OTP_LENGTH=6,T.styles=x,I([u()],T.prototype,"loading",void 0),I([u()],T.prototype,"timeoutTimeLeft",void 0),I([u()],T.prototype,"error",void 0),T=$=I([d("w3m-email-otp-widget")],T);export{T as W};
