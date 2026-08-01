import{a as e,c as t}from"./845b7756998.js";import{W as i}from"./845b77561049.js";import{cS as r,dX as n,cU as a,cL as o,dW as s,ew as l,cO as c,cN as d,dS as h,e2 as u,dT as p,dU as m,fV as w,dY as f}from"./845b7756.js";import{r as E}from"./845b7756997.js";import"./845b77561000.js";import"./845b77561001.js";import{e as v,n as g}from"./845b77561004.js";import"./845b77561005.js";import"./845b7756999.js";import"./845b77562.js";import"./845b77563.js";import"./845b7756832.js";import"./845b77561003.js";let y=class extends i{constructor(){super(...arguments),this.onOtpSubmit=async e=>{try{if(this.authConnector){const t=r.state.activeChain,i=n.getConnections(t),d=a.state.remoteFeatures?.multiWallet,h=i.length>0;if(await this.authConnector.provider.connectOtp({otp:e}),o.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_PASS"}),!t)throw new Error("Active chain is not set on ChainControll");if(await n.connectExternal(this.authConnector,t),o.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"email",name:this.authConnector.name||"Unknown",view:s.state.view,walletRank:void 0}}),a.state.remoteFeatures?.emailCapture)return;if(a.state.siwx)return void l.close();if(h&&d)return s.replace("ProfileWallets"),void c.showSuccess("New Wallet Added");l.close()}}catch(t){throw o.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_FAIL",properties:{message:d.parseError(t)}}),t}},this.onOtpResend=async e=>{this.authConnector&&(await this.authConnector.provider.connectEmail({email:e}),o.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_SENT"}))}}};y=function(e,t,i,r){var n,a=arguments.length,o=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,i,o):n(t,i))||o);return a>3&&o&&Object.defineProperty(t,i,o),o}([e("w3m-email-verify-otp-view")],y);const b=t`
  wui-icon-box {
    height: ${({spacing:e})=>e[16]};
    width: ${({spacing:e})=>e[16]};
  }
`;var C=function(e,t,i,r){var n,a=arguments.length,o=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,i,o):n(t,i))||o);return a>3&&o&&Object.defineProperty(t,i,o),o};let O=class extends h{constructor(){super(),this.email=s.state.data?.email,this.authConnector=u.getAuthConnector(),this.loading=!1,this.listenForDeviceApproval()}render(){if(!this.email)throw new Error("w3m-email-verify-device-view: No email provided");if(!this.authConnector)throw new Error("w3m-email-verify-device-view: No auth connector provided");return p`
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
    `}async listenForDeviceApproval(){if(this.authConnector)try{await this.authConnector.provider.connectDevice(),o.sendEvent({type:"track",event:"DEVICE_REGISTERED_FOR_EMAIL"}),o.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_SENT"}),s.replace("EmailVerifyOtp",{email:this.email})}catch(e){s.goBack()}}async onResendCode(){try{if(!this.loading){if(!this.authConnector||!this.email)throw new Error("w3m-email-login-widget: Unable to resend email");this.loading=!0,await this.authConnector.provider.connectEmail({email:this.email}),this.listenForDeviceApproval(),c.showSuccess("Code email resent")}}catch(e){c.showError(e)}finally{this.loading=!1}}};O.styles=b,C([E()],O.prototype,"loading",void 0),O=C([e("w3m-email-verify-device-view")],O);const I=m`
  wui-email-input {
    width: 100%;
  }

  form {
    width: 100%;
    display: block;
    position: relative;
  }
`;var A=function(e,t,i,r){var n,a=arguments.length,o=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,i,o):n(t,i))||o);return a>3&&o&&Object.defineProperty(t,i,o),o};let R=class extends h{constructor(){super(...arguments),this.formRef=v(),this.initialEmail=s.state.data?.email??"",this.redirectView=s.state.data?.redirectView,this.email="",this.loading=!1}firstUpdated(){this.formRef.value?.addEventListener("keydown",e=>{"Enter"===e.key&&this.onSubmitEmail(e)})}render(){return p`
      <wui-flex flexDirection="column" padding="4" gap="4">
        <form ${g(this.formRef)} @submit=${this.onSubmitEmail.bind(this)}>
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
    `}onEmailInputChange(e){this.email=e.detail}async onSubmitEmail(e){try{if(this.loading)return;this.loading=!0,e.preventDefault();const t=u.getAuthConnector();if(!t)throw new Error("w3m-update-email-wallet: Auth connector not found");const i=await t.provider.updateEmail({email:this.email});o.sendEvent({type:"track",event:"EMAIL_EDIT"}),"VERIFY_SECONDARY_OTP"===i.action?s.push("UpdateEmailSecondaryOtp",{email:this.initialEmail,newEmail:this.email,redirectView:this.redirectView}):s.push("UpdateEmailPrimaryOtp",{email:this.initialEmail,newEmail:this.email,redirectView:this.redirectView})}catch(t){c.showError(t),this.loading=!1}}buttonsTemplate(){const e=!this.loading&&this.email.length>3&&this.email!==this.initialEmail;return this.redirectView?p`
      <wui-flex gap="3">
        <wui-button size="md" variant="neutral" fullWidth @click=${s.goBack}>
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
      `}};R.styles=I,A([E()],R.prototype,"email",void 0),A([E()],R.prototype,"loading",void 0),R=A([e("w3m-update-email-wallet-view")],R);let x=class extends i{constructor(){super(),this.email=s.state.data?.email,this.onOtpSubmit=async e=>{try{this.authConnector&&(await this.authConnector.provider.updateEmailPrimaryOtp({otp:e}),o.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_PASS"}),s.replace("UpdateEmailSecondaryOtp",s.state.data))}catch(t){throw o.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_FAIL",properties:{message:d.parseError(t)}}),t}},this.onStartOver=()=>{s.replace("UpdateEmailWallet",s.state.data)}}};x=function(e,t,i,r){var n,a=arguments.length,o=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,i,o):n(t,i))||o);return a>3&&o&&Object.defineProperty(t,i,o),o}([e("w3m-update-email-primary-otp-view")],x);let _=class extends i{constructor(){super(),this.email=s.state.data?.newEmail,this.redirectView=s.state.data?.redirectView,this.onOtpSubmit=async e=>{try{this.authConnector&&(await this.authConnector.provider.updateEmailSecondaryOtp({otp:e}),o.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_PASS"}),this.redirectView&&s.reset(this.redirectView))}catch(t){throw o.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_FAIL",properties:{message:d.parseError(t)}}),t}},this.onStartOver=()=>{s.replace("UpdateEmailWallet",s.state.data)}}};_=function(e,t,i,r){var n,a=arguments.length,o=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,i,o):n(t,i))||o);return a>3&&o&&Object.defineProperty(t,i,o),o}([e("w3m-update-email-secondary-otp-view")],_);var S=function(e,t,i,r){var n,a=arguments.length,o=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,i,o):n(t,i))||o);return a>3&&o&&Object.defineProperty(t,i,o),o};let j=class extends h{constructor(){super(),this.authConnector=u.getAuthConnector(),this.isEmailEnabled=a.state.remoteFeatures?.email,this.isAuthEnabled=this.checkIfAuthEnabled(u.state.connectors),this.connectors=u.state.connectors,u.subscribeKey("connectors",e=>{this.connectors=e,this.isAuthEnabled=this.checkIfAuthEnabled(this.connectors)})}render(){if(!this.isEmailEnabled)throw new Error("w3m-email-login-view: Email is not enabled");if(!this.isAuthEnabled)throw new Error("w3m-email-login-view: No auth connector provided");return p`<wui-flex flexDirection="column" .padding=${["1","3","3","3"]} gap="4">
      <w3m-email-login-widget></w3m-email-login-widget>
    </wui-flex> `}checkIfAuthEnabled(e){const t=e.filter(e=>e.type===w.CONNECTOR_TYPE_AUTH).map(e=>e.chain);return f.AUTH_CONNECTOR_SUPPORTED_CHAINS.some(e=>t.includes(e))}};S([E()],j.prototype,"connectors",void 0),j=S([e("w3m-email-login-view")],j);export{j as W3mEmailLoginView,i as W3mEmailOtpWidget,O as W3mEmailVerifyDeviceView,y as W3mEmailVerifyOtpView,x as W3mUpdateEmailPrimaryOtpView,_ as W3mUpdateEmailSecondaryOtpView,R as W3mUpdateEmailWalletView};
