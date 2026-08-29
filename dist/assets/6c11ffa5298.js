import{e7 as t,e5 as e,e6 as i}from"./6c11ffa5.js";import{a as f}from"./6c11ffa5284.js";import"./6c11ffa5299.js";import"./6c11ffa5283.js";import"./6c11ffa5286.js";import"./6c11ffa5188.js";import"./6c11ffa5287.js";import"./6c11ffa5288.js";import"./6c11ffa5292.js";const r=t`
  :host > wui-flex:first-child {
    height: 500px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  :host > wui-flex:first-child::-webkit-scrollbar {
    display: none;
  }
`;let o=class extends e{render(){return i`
      <wui-flex flexDirection="column" .padding=${["0","3","3","3"]} gap="3">
        <w3m-activity-list page="activity"></w3m-activity-list>
      </wui-flex>
    `}};o.styles=r,o=function(t,e,i,f){var r,o=arguments.length,c=o<3?e:null===f?f=Object.getOwnPropertyDescriptor(e,i):f;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,i,f);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(c=(o<3?r(c):o>3?r(e,i,c):r(e,i))||c);return o>3&&c&&Object.defineProperty(e,i,c),c}([f("w3m-transactions-view")],o);export{o as W3mTransactionsView};
