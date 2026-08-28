import{dV as t,dT as e,dU as c}from"./29c85c59.js";import{a as i}from"./29c85c591008.js";import"./29c85c591023.js";import"./29c85c592.js";import"./29c85c593.js";import"./29c85c591007.js";import"./29c85c591010.js";import"./29c85c59845.js";import"./29c85c591011.js";import"./29c85c591012.js";import"./29c85c591016.js";const r=t`
  :host > wui-flex:first-child {
    height: 500px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  :host > wui-flex:first-child::-webkit-scrollbar {
    display: none;
  }
`;let o=class extends e{render(){return c`
      <wui-flex flexDirection="column" .padding=${["0","3","3","3"]} gap="3">
        <w3m-activity-list page="activity"></w3m-activity-list>
      </wui-flex>
    `}};o.styles=r,o=function(t,e,c,i){var r,o=arguments.length,s=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,c):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,c,i);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(s=(o<3?r(s):o>3?r(e,c,s):r(e,c))||s);return o>3&&s&&Object.defineProperty(e,c,s),s}([i("w3m-transactions-view")],o);export{o as W3mTransactionsView};
