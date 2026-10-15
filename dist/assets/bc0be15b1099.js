import{e3 as e,e1 as t,e2 as i}from"./bc0be15b.js";import{a as r}from"./bc0be15b1085.js";import"./bc0be15b1100.js";import"./bc0be15b2.js";import"./bc0be15b3.js";import"./bc0be15b1084.js";import"./bc0be15b1087.js";import"./bc0be15b899.js";import"./bc0be15b1088.js";import"./bc0be15b1089.js";import"./bc0be15b1093.js";const o=e`
  :host > wui-flex:first-child {
    height: 500px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  :host > wui-flex:first-child::-webkit-scrollbar {
    display: none;
  }
`;let b=class extends t{render(){return i`
      <wui-flex flexDirection="column" .padding=${["0","3","3","3"]} gap="3">
        <w3m-activity-list page="activity"></w3m-activity-list>
      </wui-flex>
    `}};b.styles=o,b=function(e,t,i,r){var o,b=arguments.length,c=b<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(c=(b<3?o(c):b>3?o(t,i,c):o(t,i))||c);return b>3&&c&&Object.defineProperty(t,i,c),c}([r("w3m-transactions-view")],b);export{b as W3mTransactionsView};
