import{dU as t,dS as e,dT as i}from"./845b7756.js";import{a as r}from"./845b7756998.js";import"./845b77561013.js";import"./845b77562.js";import"./845b77563.js";import"./845b7756997.js";import"./845b77561000.js";import"./845b7756832.js";import"./845b77561001.js";import"./845b77561002.js";import"./845b77561006.js";const o=t`
  :host > wui-flex:first-child {
    height: 500px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  :host > wui-flex:first-child::-webkit-scrollbar {
    display: none;
  }
`;let s=class extends e{render(){return i`
      <wui-flex flexDirection="column" .padding=${["0","3","3","3"]} gap="3">
        <w3m-activity-list page="activity"></w3m-activity-list>
      </wui-flex>
    `}};s.styles=o,s=function(t,e,i,r){var o,s=arguments.length,l=s<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,i,r);else for(var n=t.length-1;n>=0;n--)(o=t[n])&&(l=(s<3?o(l):s>3?o(e,i,l):o(e,i))||l);return s>3&&l&&Object.defineProperty(e,i,l),l}([r("w3m-transactions-view")],s);export{s as W3mTransactionsView};
