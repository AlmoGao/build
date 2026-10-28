import{e7 as t,e5 as e,e6 as c}from"./1dc5d75c.js";import{a as i}from"./1dc5d75c1100.js";import"./1dc5d75c1115.js";import"./1dc5d75c2.js";import"./1dc5d75c3.js";import"./1dc5d75c1099.js";import"./1dc5d75c1102.js";import"./1dc5d75c913.js";import"./1dc5d75c1103.js";import"./1dc5d75c1104.js";import"./1dc5d75c1108.js";const r=t`
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
    `}};o.styles=r,o=function(t,e,c,i){var r,o=arguments.length,d=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,c):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)d=Reflect.decorate(t,e,c,i);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(d=(o<3?r(d):o>3?r(e,c,d):r(e,c))||d);return o>3&&d&&Object.defineProperty(e,c,d),d}([i("w3m-transactions-view")],o);export{o as W3mTransactionsView};
