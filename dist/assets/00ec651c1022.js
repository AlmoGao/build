import{dV as e,dT as t,dU as c}from"./00ec651c.js";import{a as i}from"./00ec651c1008.js";import"./00ec651c1023.js";import"./00ec651c2.js";import"./00ec651c3.js";import"./00ec651c1007.js";import"./00ec651c1010.js";import"./00ec651c845.js";import"./00ec651c1011.js";import"./00ec651c1012.js";import"./00ec651c1016.js";const r=e`
  :host > wui-flex:first-child {
    height: 500px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  :host > wui-flex:first-child::-webkit-scrollbar {
    display: none;
  }
`;let o=class extends t{render(){return c`
      <wui-flex flexDirection="column" .padding=${["0","3","3","3"]} gap="3">
        <w3m-activity-list page="activity"></w3m-activity-list>
      </wui-flex>
    `}};o.styles=r,o=function(e,t,c,i){var r,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,c):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,c,i);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(s=(o<3?r(s):o>3?r(t,c,s):r(t,c))||s);return o>3&&s&&Object.defineProperty(t,c,s),s}([i("w3m-transactions-view")],o);export{o as W3mTransactionsView};
