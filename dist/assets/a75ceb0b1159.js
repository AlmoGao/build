import{ea as e,e8 as t,e9 as i}from"./a75ceb0b.js";import{a as r}from"./a75ceb0b1145.js";import"./a75ceb0b1160.js";import"./a75ceb0b2.js";import"./a75ceb0b3.js";import"./a75ceb0b1144.js";import"./a75ceb0b1147.js";import"./a75ceb0b915.js";import"./a75ceb0b1148.js";import"./a75ceb0b1149.js";import"./a75ceb0b1153.js";const o=e`
  :host > wui-flex:first-child {
    height: 500px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  :host > wui-flex:first-child::-webkit-scrollbar {
    display: none;
  }
`;let a=class extends t{render(){return i`
      <wui-flex flexDirection="column" .padding=${["0","3","3","3"]} gap="3">
        <w3m-activity-list page="activity"></w3m-activity-list>
      </wui-flex>
    `}};a.styles=o,a=function(e,t,i,r){var o,a=arguments.length,c=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(c=(a<3?o(c):a>3?o(t,i,c):o(t,i))||c);return a>3&&c&&Object.defineProperty(t,i,c),c}([r("w3m-transactions-view")],a);export{a as W3mTransactionsView};
