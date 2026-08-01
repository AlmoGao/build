import{dS as t,dQ as e,dR as i}from"./4d9d2b6f.js";import{a as r}from"./4d9d2b6f959.js";import"./4d9d2b6f974.js";import"./4d9d2b6f2.js";import"./4d9d2b6f3.js";import"./4d9d2b6f958.js";import"./4d9d2b6f961.js";import"./4d9d2b6f802.js";import"./4d9d2b6f962.js";import"./4d9d2b6f963.js";import"./4d9d2b6f967.js";const o=t`
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
    `}};d.styles=o,d=function(t,e,i,r){var o,d=arguments.length,s=d<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,r);else for(var f=t.length-1;f>=0;f--)(o=t[f])&&(s=(d<3?o(s):d>3?o(e,i,s):o(e,i))||s);return d>3&&s&&Object.defineProperty(e,i,s),s}([r("w3m-transactions-view")],d);export{d as W3mTransactionsView};
