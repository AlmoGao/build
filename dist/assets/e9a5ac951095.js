import{e0 as e,d_ as t,d$ as a}from"./e9a5ac95.js";import{a as i}from"./e9a5ac951081.js";import"./e9a5ac951096.js";import"./e9a5ac952.js";import"./e9a5ac953.js";import"./e9a5ac951080.js";import"./e9a5ac951083.js";import"./e9a5ac95899.js";import"./e9a5ac951084.js";import"./e9a5ac951085.js";import"./e9a5ac951089.js";const r=e`
  :host > wui-flex:first-child {
    height: 500px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  :host > wui-flex:first-child::-webkit-scrollbar {
    display: none;
  }
`;let o=class extends t{render(){return a`
      <wui-flex flexDirection="column" .padding=${["0","3","3","3"]} gap="3">
        <w3m-activity-list page="activity"></w3m-activity-list>
      </wui-flex>
    `}};o.styles=r,o=function(e,t,a,i){var r,o=arguments.length,c=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,a):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,a,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(c=(o<3?r(c):o>3?r(t,a,c):r(t,a))||c);return o>3&&c&&Object.defineProperty(t,a,c),c}([i("w3m-transactions-view")],o);export{o as W3mTransactionsView};
