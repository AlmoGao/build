import{e7 as e,e5 as t,e6 as i}from"./c574e56f.js";import{a as r}from"./c574e56f1100.js";import"./c574e56f1115.js";import"./c574e56f2.js";import"./c574e56f3.js";import"./c574e56f1099.js";import"./c574e56f1102.js";import"./c574e56f913.js";import"./c574e56f1103.js";import"./c574e56f1104.js";import"./c574e56f1108.js";const o=e`
  :host > wui-flex:first-child {
    height: 500px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  :host > wui-flex:first-child::-webkit-scrollbar {
    display: none;
  }
`;let c=class extends t{render(){return i`
      <wui-flex flexDirection="column" .padding=${["0","3","3","3"]} gap="3">
        <w3m-activity-list page="activity"></w3m-activity-list>
      </wui-flex>
    `}};c.styles=o,c=function(e,t,i,r){var o,c=arguments.length,s=c<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,r);else for(var f=e.length-1;f>=0;f--)(o=e[f])&&(s=(c<3?o(s):c>3?o(t,i,s):o(t,i))||s);return c>3&&s&&Object.defineProperty(t,i,s),s}([r("w3m-transactions-view")],c);export{c as W3mTransactionsView};
