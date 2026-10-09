import{e1 as t,d$ as e,e0 as i}from"./7f376638.js";import{a as r}from"./7f3766381084.js";import"./7f3766381099.js";import"./7f3766382.js";import"./7f3766383.js";import"./7f3766381083.js";import"./7f3766381086.js";import"./7f376638899.js";import"./7f3766381087.js";import"./7f3766381088.js";import"./7f3766381092.js";const o=t`
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
    `}};s.styles=o,s=function(t,e,i,r){var o,s=arguments.length,f=s<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)f=Reflect.decorate(t,e,i,r);else for(var l=t.length-1;l>=0;l--)(o=t[l])&&(f=(s<3?o(f):s>3?o(e,i,f):o(e,i))||f);return s>3&&f&&Object.defineProperty(e,i,f),f}([r("w3m-transactions-view")],s);export{s as W3mTransactionsView};
