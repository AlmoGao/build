import{dR as t,dP as e,dQ as i}from"./6db743d6.js";import{a as r}from"./6db743d6938.js";import"./6db743d6953.js";import"./6db743d62.js";import"./6db743d63.js";import"./6db743d6937.js";import"./6db743d6940.js";import"./6db743d6779.js";import"./6db743d6941.js";import"./6db743d6942.js";import"./6db743d6946.js";const o=t`
  :host > wui-flex:first-child {
    height: 500px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  :host > wui-flex:first-child::-webkit-scrollbar {
    display: none;
  }
`;let d=class extends e{render(){return i`
      <wui-flex flexDirection="column" .padding=${["0","3","3","3"]} gap="3">
        <w3m-activity-list page="activity"></w3m-activity-list>
      </wui-flex>
    `}};d.styles=o,d=function(t,e,i,r){var o,d=arguments.length,s=d<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,r);else for(var l=t.length-1;l>=0;l--)(o=t[l])&&(s=(d<3?o(s):d>3?o(e,i,s):o(e,i))||s);return d>3&&s&&Object.defineProperty(e,i,s),s}([r("w3m-transactions-view")],d);export{d as W3mTransactionsView};
