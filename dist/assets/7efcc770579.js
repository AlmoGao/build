import{d5 as e,db as t,d4 as o,ei as r,eq as i,d7 as a,d6 as n,fI as s,ek as c,ee as l,ef as d}from"./7efcc770.js";import{n as u}from"./7efcc770529.js";import{o as p}from"./7efcc770410.js";import{c as f,r as g,a as h,e as w}from"./7efcc770530.js";async function m(o){r.push("ConnectingSocial");const l=i.getAuthConnector();let d=null;try{const r=setTimeout(()=>{throw new Error("Social login timed out. Please try again.")},45e3);if(l&&o){if(n.isTelegram()||(d=function(){try{return n.returnOpenHref(`${c.SECURE_SITE_SDK_ORIGIN}/loading`,"popupWindow","width=600,height=800,scrollbars=yes")}catch(e){throw new Error("Could not open social popup")}}()),d)e.setSocialWindow(d,t.state.activeChain);else if(!n.isTelegram())throw new Error("Could not create social popup");const{uri:i}=await l.provider.getSocialRedirectUri({provider:o});if(!i)throw d?.close(),new Error("Could not fetch the social redirect uri");if(d&&(d.location.href=i),n.isTelegram()){s.setTelegramSocialProvider(o);const e=n.formatTelegramSocialLoginUrl(i);n.openHref(e,"_top")}clearTimeout(r)}}catch(u){d?.close(),a.showError(u?.message)}}async function y(n){e.setSocialProvider(n,t.state.activeChain),o.sendEvent({type:"track",event:"SOCIAL_LOGIN_STARTED",properties:{provider:n}}),"farcaster"===n?await async function(){r.push("ConnectingFarcaster");const o=i.getAuthConnector();if(o&&!e.state.farcasterUrl)try{const{url:r}=await o.provider.getFarcasterUri();e.setFarcasterUrl(r,t.state.activeChain)}catch(n){r.goBack(),a.showError(n)}}():await m(n)}const b=f`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: ${({borderRadius:e})=>e[20]};
    overflow: hidden;
  }

  wui-icon {
    width: 100%;
    height: 100%;
  }
`;var v=function(e,t,o,r){var i,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,o,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(n=(a<3?i(n):a>3?i(t,o,n):i(t,o))||n);return a>3&&n&&Object.defineProperty(t,o,n),n};let x=class extends l{constructor(){super(...arguments),this.logo="google"}render(){return d`<wui-icon color="inherit" size="inherit" name=${this.logo}></wui-icon> `}};x.styles=[g,b],v([u()],x.prototype,"logo",void 0),x=v([h("wui-logo")],x);const C=f`
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
`;var R=function(e,t,o,r){var i,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,o,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(n=(a<3?i(n):a>3?i(t,o,n):i(t,o))||n);return a>3&&n&&Object.defineProperty(t,o,n),n};let j=class extends l{constructor(){super(...arguments),this.logo="google",this.name="Continue with google",this.disabled=!1}render(){return d`
      <button ?disabled=${this.disabled} tabindex=${p(this.tabIdx)}>
        <wui-flex gap="2" alignItems="center">
          <wui-image ?boxed=${!0} logo=${this.logo}></wui-image>
          <wui-text variant="lg-regular" color="primary">${this.name}</wui-text>
        </wui-flex>
        <wui-icon name="chevronRight" size="lg" color="default"></wui-icon>
      </button>
    `}};j.styles=[g,w,C],R([u()],j.prototype,"logo",void 0),R([u()],j.prototype,"name",void 0),R([u()],j.prototype,"tabIdx",void 0),R([u({type:Boolean})],j.prototype,"disabled",void 0),j=R([h("wui-list-social")],j);export{y as e};
