import{e7 as t,e5 as e,e6 as i}from"./391d0204.js";import{a as r}from"./391d02041100.js";import"./391d02041115.js";import"./391d02042.js";import"./391d02043.js";import"./391d02041099.js";import"./391d02041102.js";import"./391d0204913.js";import"./391d02041103.js";import"./391d02041104.js";import"./391d02041108.js";const o=t`
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
    `}};s.styles=o,s=function(t,e,i,r){var o,s=arguments.length,l=s<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,i,r);else for(var d=t.length-1;d>=0;d--)(o=t[d])&&(l=(s<3?o(l):s>3?o(e,i,l):o(e,i))||l);return s>3&&l&&Object.defineProperty(e,i,l),l}([r("w3m-transactions-view")],s);export{s as W3mTransactionsView};
