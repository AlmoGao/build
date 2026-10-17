import{e5 as e,e3 as t,e4 as i}from"./494e424e.js";import{a as r}from"./494e424e1099.js";import"./494e424e1114.js";import"./494e424e2.js";import"./494e424e3.js";import"./494e424e1098.js";import"./494e424e1101.js";import"./494e424e912.js";import"./494e424e1102.js";import"./494e424e1103.js";import"./494e424e1107.js";const o=e`
  :host > wui-flex:first-child {
    height: 500px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  :host > wui-flex:first-child::-webkit-scrollbar {
    display: none;
  }
`;let s=class extends t{render(){return i`
      <wui-flex flexDirection="column" .padding=${["0","3","3","3"]} gap="3">
        <w3m-activity-list page="activity"></w3m-activity-list>
      </wui-flex>
    `}};s.styles=o,s=function(e,t,i,r){var o,s=arguments.length,l=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,i,r);else for(var n=e.length-1;n>=0;n--)(o=e[n])&&(l=(s<3?o(l):s>3?o(t,i,l):o(t,i))||l);return s>3&&l&&Object.defineProperty(t,i,l),l}([r("w3m-transactions-view")],s);export{s as W3mTransactionsView};
