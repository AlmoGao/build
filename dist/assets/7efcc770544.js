import{eg as e,ee as t,ef as c}from"./7efcc770.js";import{a as i}from"./7efcc770530.js";import"./7efcc770545.js";import"./7efcc770529.js";import"./7efcc770532.js";import"./7efcc770410.js";import"./7efcc770533.js";import"./7efcc770534.js";import"./7efcc770538.js";const r=e`
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
    `}};o.styles=r,o=function(e,t,c,i){var r,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,c):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,c,i);else for(var f=e.length-1;f>=0;f--)(r=e[f])&&(s=(o<3?r(s):o>3?r(t,c,s):r(t,c))||s);return o>3&&s&&Object.defineProperty(t,c,s),s}([i("w3m-transactions-view")],o);export{o as W3mTransactionsView};
