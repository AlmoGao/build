import{dV as t,dT as e,dU as c}from"./c12d77c3.js";import{a as i}from"./c12d77c31049.js";import"./c12d77c31064.js";import"./c12d77c32.js";import"./c12d77c33.js";import"./c12d77c31048.js";import"./c12d77c31051.js";import"./c12d77c3884.js";import"./c12d77c31052.js";import"./c12d77c31053.js";import"./c12d77c31057.js";const r=t`
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
