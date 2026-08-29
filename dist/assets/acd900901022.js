import{dV as t,dT as e,dU as i}from"./acd90090.js";import{a as r}from"./acd900901008.js";import"./acd900901023.js";import"./acd900902.js";import"./acd900903.js";import"./acd900901007.js";import"./acd900901010.js";import"./acd90090845.js";import"./acd900901011.js";import"./acd900901012.js";import"./acd900901016.js";const o=t`
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
    `}};c.styles=o,c=function(t,e,i,r){var o,c=arguments.length,s=c<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,r);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(c<3?o(s):c>3?o(e,i,s):o(e,i))||s);return c>3&&s&&Object.defineProperty(e,i,s),s}([r("w3m-transactions-view")],c);export{c as W3mTransactionsView};
