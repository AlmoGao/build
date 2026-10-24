import{e7 as e,e5 as t,e6 as i}from"./e1097781.js";import{a as r}from"./e10977811100.js";import"./e10977811115.js";import"./e10977812.js";import"./e10977813.js";import"./e10977811099.js";import"./e10977811102.js";import"./e1097781913.js";import"./e10977811103.js";import"./e10977811104.js";import"./e10977811108.js";const o=e`
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
