import{dV as t,dT as e,dU as i}from"./59977a62.js";import{a as r}from"./59977a621008.js";import"./59977a621023.js";import"./59977a622.js";import"./59977a623.js";import"./59977a621007.js";import"./59977a621010.js";import"./59977a62845.js";import"./59977a621011.js";import"./59977a621012.js";import"./59977a621016.js";const o=t`
  :host > wui-flex:first-child {
    height: 500px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  :host > wui-flex:first-child::-webkit-scrollbar {
    display: none;
  }
`;let s=class extends e{render(){return i`
      <wui-flex flexDirection="column" .padding=${["0","3","3","3"]} gap="3">
        <w3m-activity-list page="activity"></w3m-activity-list>
      </wui-flex>
    `}};s.styles=o,s=function(t,e,i,r){var o,s=arguments.length,a=s<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,r);else for(var l=t.length-1;l>=0;l--)(o=t[l])&&(a=(s<3?o(a):s>3?o(e,i,a):o(e,i))||a);return s>3&&a&&Object.defineProperty(e,i,a),a}([r("w3m-transactions-view")],s);export{s as W3mTransactionsView};
