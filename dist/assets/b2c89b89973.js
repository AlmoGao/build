import{dS as t,dQ as e,dR as i}from"./b2c89b89.js";import{a as r}from"./b2c89b89959.js";import"./b2c89b89974.js";import"./b2c89b892.js";import"./b2c89b893.js";import"./b2c89b89958.js";import"./b2c89b89961.js";import"./b2c89b89802.js";import"./b2c89b89962.js";import"./b2c89b89963.js";import"./b2c89b89967.js";const o=t`
  :host > wui-flex:first-child {
    height: 500px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  :host > wui-flex:first-child::-webkit-scrollbar {
    display: none;
  }
`;let c=class extends e{render(){return i`
      <wui-flex flexDirection="column" .padding=${["0","3","3","3"]} gap="3">
        <w3m-activity-list page="activity"></w3m-activity-list>
      </wui-flex>
    `}};c.styles=o,c=function(t,e,i,r){var o,c=arguments.length,s=c<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,r);else for(var b=t.length-1;b>=0;b--)(o=t[b])&&(s=(c<3?o(s):c>3?o(e,i,s):o(e,i))||s);return c>3&&s&&Object.defineProperty(e,i,s),s}([r("w3m-transactions-view")],c);export{c as W3mTransactionsView};
