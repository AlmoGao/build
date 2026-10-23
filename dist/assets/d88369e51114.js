import{e7 as e,e5 as t,e6 as i}from"./d88369e5.js";import{a as r}from"./d88369e51100.js";import"./d88369e51115.js";import"./d88369e52.js";import"./d88369e53.js";import"./d88369e51099.js";import"./d88369e51102.js";import"./d88369e5913.js";import"./d88369e51103.js";import"./d88369e51104.js";import"./d88369e51108.js";const o=e`
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
    `}};s.styles=o,s=function(e,t,i,r){var o,s=arguments.length,l=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,i,r);else for(var d=e.length-1;d>=0;d--)(o=e[d])&&(l=(s<3?o(l):s>3?o(t,i,l):o(t,i))||l);return s>3&&l&&Object.defineProperty(t,i,l),l}([r("w3m-transactions-view")],s);export{s as W3mTransactionsView};
