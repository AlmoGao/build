import{e3 as e,e1 as t,e2 as i}from"./32802e0d.js";import{a as r}from"./32802e0d1085.js";import"./32802e0d1100.js";import"./32802e0d2.js";import"./32802e0d3.js";import"./32802e0d1084.js";import"./32802e0d1087.js";import"./32802e0d899.js";import"./32802e0d1088.js";import"./32802e0d1089.js";import"./32802e0d1093.js";const o=e`
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
