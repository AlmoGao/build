import{e9 as t,e7 as f,e8 as e}from"./fdff1135.js";import{a as i}from"./fdff11351144.js";import"./fdff11351159.js";import"./fdff11352.js";import"./fdff11353.js";import"./fdff11351143.js";import"./fdff11351146.js";import"./fdff1135914.js";import"./fdff11351147.js";import"./fdff11351148.js";import"./fdff11351152.js";const r=t`
  :host > wui-flex:first-child {
    height: 500px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  :host > wui-flex:first-child::-webkit-scrollbar {
    display: none;
  }
`;let o=class extends f{render(){return e`
      <wui-flex flexDirection="column" .padding=${["0","3","3","3"]} gap="3">
        <w3m-activity-list page="activity"></w3m-activity-list>
      </wui-flex>
    `}};o.styles=r,o=function(t,f,e,i){var r,o=arguments.length,s=o<3?f:null===i?i=Object.getOwnPropertyDescriptor(f,e):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,f,e,i);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(s=(o<3?r(s):o>3?r(f,e,s):r(f,e))||s);return o>3&&s&&Object.defineProperty(f,e,s),s}([i("w3m-transactions-view")],o);export{o as W3mTransactionsView};
