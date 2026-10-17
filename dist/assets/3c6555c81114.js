import{e5 as t,e3 as e,e4 as c}from"./3c6555c8.js";import{a as i}from"./3c6555c81100.js";import"./3c6555c81115.js";import"./3c6555c82.js";import"./3c6555c83.js";import"./3c6555c81099.js";import"./3c6555c81102.js";import"./3c6555c8912.js";import"./3c6555c81103.js";import"./3c6555c81104.js";import"./3c6555c81108.js";const r=t`
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
