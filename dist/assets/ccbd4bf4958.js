import{a as e,c as t}from"./ccbd4bf4886.js";import{W as i}from"./ccbd4bf4947.js";import{cX as r,dV as n,cZ as a,cQ as o,dU as c,et as s,cT as l,cS as d,dQ as h,e0 as u,dR as p,dS as m,f_ as f,dW as w}from"./ccbd4bf4.js";import{r as E}from"./ccbd4bf4885.js";import"./ccbd4bf4888.js";import"./ccbd4bf4889.js";import{e as v,n as b}from"./ccbd4bf4892.js";import"./ccbd4bf4893.js";import"./ccbd4bf4887.js";import"./ccbd4bf42.js";import"./ccbd4bf43.js";import"./ccbd4bf4736.js";import"./ccbd4bf4891.js";let g=class extends i{constructor(){super(...arguments),this.onOtpSubmit=async e=>{try{if(this.authConnector){const t=r.state.activeChain,i=n.getConnections(t),d=a.state.remoteFeatures?.multiWallet,h=i.length>0;if(await this.authConnector.provider.connectOtp({otp:e}),o.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_PASS"}),!t)throw new Error("Active chain is not set on ChainControll");if(await n.connectExternal(this.authConnector,t),o.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"email",name:this.authConnector.name||"Unknown",view:c.state.view,walletRank:void 0}}),a.state.remoteFeatures?.emailCapture)return;if(a.state.siwx)return void s.close();if(h&&d)return c.replace("ProfileWallets"),void l.showSuccess("New Wallet Added");s.close()}}catch(t){throw o.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_FAIL",properties:{message:d.parseError(t)}}),t}},this.onOtpResend=async e=>{this.authConnector&&(await this.authConnector.provider.connectEmail({email:e}),o.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_SENT"}))}}};g=function(e,t,i,r){var n,a=arguments.length,o=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,r);else for(var c=e.length-1;c>=0;c--)(n=e[c])&&(o=(a<3?n(o):a>3?n(t,i,o):n(t,i))||o);return a>3&&o&&Object.defineProperty(t,i,o),o}([e("w3m-email-verify-otp-view")],g);const y=t`
  wui-icon-box {
    height: ${({spacing:e})=>e[16]};
    width: ${({spacing:e})=>e[16]};
  }
`;var C=function(e,t,i,r){var n,a=arguments.length,o=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,r);else for(var c=e.length-1;c>=0;c--)(n=e[c])&&(o=(a<3?n(o):a>3?n(t,i,o):n(t,i))||o);return a>3&&o&&Object.defineProperty(t,i,o),o};let O=class extends h{constructor(){super(),this.email=c.state.data?.email,this.authConnector=u.getAuthConnector(),this.loading=!1,this.listenForDeviceApproval()}render(){if(!this.email)throw new Error("w3m-email-verify-device-view: No email provided");if(!this.authConnector)throw new Error("w3m-email-verify-device-view: No auth connector provided");return p`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["6","3","6","3"]}
        gap="4"
      >
        <wui-icon-box size="xl" color="accent-primary" icon="sealCheck"></wui-icon-box>

        <wui-flex flexDirection="column" alignItems="center" gap="3">
          <wui-flex flexDirection="column" alignItems="center">
            <wui-text variant="md-regular" color="primary">
              Approve the login link we sent to
            </wui-text>
            <wui-text variant="md-regular" color="primary"><b>${this.email}</b></wui-text>
          </wui-flex>

          <wui-text variant="sm-regular" color="secondary" align="center">
            The code expires in 20 minutes
          </wui-text>

          <wui-flex alignItems="center" id="w3m-resend-section" gap="2">
            <wui-text variant="sm-regular" color="primary" align="center">
              Didn't receive it?
            </wui-text>
            <wui-link @click=${this.onResendCode.bind(this)} .disabled=${this.loading}>
              Resend email
            </wui-link>
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `}async listenForDeviceApproval(){if(this.authConnector)try{await this.authConnector.provider.connectDevice(),o.sendEvent({type:"track",event:"DEVICE_REGISTERED_FOR_EMAIL"}),o.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_SENT"}),c.replace("EmailVerifyOtp",{email:this.email})}catch(e){c.goBack()}}async onResendCode(){try{if(!this.loading){if(!this.authConnector||!this.email)throw new Error("w3m-email-login-widget: Unable to resend email");this.loading=!0,await this.authConnector.provider.connectEmail({email:this.email}),this.listenForDeviceApproval(),l.showSuccess("Code email resent")}}catch(e){l.showError(e)}finally{this.loading=!1}}};O.styles=y,C([E()],O.prototype,"loading",void 0),O=C([e("w3m-email-verify-device-view")],O);const I=m`
  wui-email-input {
    width: 100%;
  }

  form {
    width: 100%;
    display: block;
    position: relative;
  }
`;var A=function(e,t,i,r){var n,a=arguments.length,o=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,r);else for(var c=e.length-1;c>=0;c--)(n=e[c])&&(o=(a<3?n(o):a>3?n(t,i,o):n(t,i))||o);return a>3&&o&&Object.defineProperty(t,i,o),o};let R=class extends h{constructor(){super(...arguments),this.formRef=v(),this.initialEmail=c.state.data?.email??"",this.redirectView=c.state.data?.redirectView,this.email="",this.loading=!1}firstUpdated(){this.formRef.value?.addEventListener("keydown",e=>{"Enter"===e.key&&this.onSubmitEmail(e)})}render(){return p`
      <wui-flex flexDirection="column" padding="4" gap="4">
        <form ${b(this.formRef)} @submit=${this.onSubmitEmail.bind(this)}>
          <wui-email-input
            value=${this.initialEmail}
            .disabled=${this.loading}
            @inputChange=${this.onEmailInputChange.bind(this)}
          >
          </wui-email-input>
          <input type="submit" hidden />
        </form>
        ${this.buttonsTemplate()}
      </wui-flex>
    `}onEmailInputChange(e){this.email=e.detail}async onSubmitEmail(e){try{if(this.loading)return;this.loading=!0,e.preventDefault();const t=u.getAuthConnector();if(!t)throw new Error("w3m-update-email-wallet: Auth connector not found");const i=await t.provider.updateEmail({email:this.email});o.sendEvent({type:"track",event:"EMAIL_EDIT"}),"VERIFY_SECONDARY_OTP"===i.action?c.push("UpdateEmailSecondaryOtp",{email:this.initialEmail,newEmail:this.email,redirectView:this.redirectView}):c.push("UpdateEmailPrimaryOtp",{email:this.initialEmail,newEmail:this.email,redirectView:this.redirectView})}catch(t){l.showError(t),this.loading=!1}}buttonsTemplate(){const e=!this.loading&&this.email.length>3&&this.email!==this.initialEmail;return this.redirectView?p`
      <wui-flex gap="3">
        <wui-button size="md" variant="neutral" fullWidth @click=${c.goBack}>
          Cancel
        </wui-button>

        <wui-button
          size="md"
          variant="accent-primary"
          fullWidth
          @click=${this.onSubmitEmail.bind(this)}
          .disabled=${!e}
          .loading=${this.loading}
        >
          Save
        </wui-button>
      </wui-flex>
    `:p`
        <wui-button
          size="md"
          variant="accent-primary"
          fullWidth
          @click=${this.onSubmitEmail.bind(this)}
          .disabled=${!e}
          .loading=${this.loading}
        >
          Save
        </wui-button>
      `}};R.styles=I,A([E()],R.prototype,"email",void 0),A([E()],R.prototype,"loading",void 0),R=A([e("w3m-update-email-wallet-view")],R);let x=class extends i{constructor(){super(),this.email=c.state.data?.email,this.onOtpSubmit=async e=>{try{this.authConnector&&(await this.authConnector.provider.updateEmailPrimaryOtp({otp:e}),o.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_PASS"}),c.replace("UpdateEmailSecondaryOtp",c.state.data))}catch(t){throw o.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_FAIL",properties:{message:d.parseError(t)}}),t}},this.onStartOver=()=>{c.replace("UpdateEmailWallet",c.state.data)}}};x=function(e,t,i,r){var n,a=arguments.length,o=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,r);else for(var c=e.length-1;c>=0;c--)(n=e[c])&&(o=(a<3?n(o):a>3?n(t,i,o):n(t,i))||o);return a>3&&o&&Object.defineProperty(t,i,o),o}([e("w3m-update-email-primary-otp-view")],x);let _=class extends i{constructor(){super(),this.email=c.state.data?.newEmail,this.redirectView=c.state.data?.redirectView,this.onOtpSubmit=async e=>{try{this.authConnector&&(await this.authConnector.provider.updateEmailSecondaryOtp({otp:e}),o.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_PASS"}),this.redirectView&&c.reset(this.redirectView))}catch(t){throw o.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_FAIL",properties:{message:d.parseError(t)}}),t}},this.onStartOver=()=>{c.replace("UpdateEmailWallet",c.state.data)}}};_=function(e,t,i,r){var n,a=arguments.length,o=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,r);else for(var c=e.length-1;c>=0;c--)(n=e[c])&&(o=(a<3?n(o):a>3?n(t,i,o):n(t,i))||o);return a>3&&o&&Object.defineProperty(t,i,o),o}([e("w3m-update-email-secondary-otp-view")],_);var S=function(e,t,i,r){var n,a=arguments.length,o=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,r);else for(var c=e.length-1;c>=0;c--)(n=e[c])&&(o=(a<3?n(o):a>3?n(t,i,o):n(t,i))||o);return a>3&&o&&Object.defineProperty(t,i,o),o};let j=class extends h{constructor(){super(),this.authConnector=u.getAuthConnector(),this.isEmailEnabled=a.state.remoteFeatures?.email,this.isAuthEnabled=this.checkIfAuthEnabled(u.state.connectors),this.connectors=u.state.connectors,u.subscribeKey("connectors",e=>{this.connectors=e,this.isAuthEnabled=this.checkIfAuthEnabled(this.connectors)})}render(){if(!this.isEmailEnabled)throw new Error("w3m-email-login-view: Email is not enabled");if(!this.isAuthEnabled)throw new Error("w3m-email-login-view: No auth connector provided");return p`<wui-flex flexDirection="column" .padding=${["1","3","3","3"]} gap="4">
      <w3m-email-login-widget></w3m-email-login-widget>
    </wui-flex> `}checkIfAuthEnabled(e){const t=e.filter(e=>e.type===f.CONNECTOR_TYPE_AUTH).map(e=>e.chain);return w.AUTH_CONNECTOR_SUPPORTED_CHAINS.some(e=>t.includes(e))}};S([E()],j.prototype,"connectors",void 0),j=S([e("w3m-email-login-view")],j);export{j as W3mEmailLoginView,i as W3mEmailOtpWidget,O as W3mEmailVerifyDeviceView,g as W3mEmailVerifyOtpView,x as W3mUpdateEmailPrimaryOtpView,_ as W3mUpdateEmailSecondaryOtpView,R as W3mUpdateEmailWalletView};
