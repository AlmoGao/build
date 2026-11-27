import{eb as t,e9 as e,ea as i}from"./68b537b4.js";import{a as r}from"./68b537b41160.js";import"./68b537b41175.js";import"./68b537b42.js";import"./68b537b43.js";import"./68b537b41159.js";import"./68b537b41162.js";import"./68b537b4929.js";import"./68b537b41163.js";import"./68b537b41164.js";import"./68b537b41168.js";const o=t`
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
    `}};s.styles=o,s=function(t,e,i,r){var o,s=arguments.length,b=s<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)b=Reflect.decorate(t,e,i,r);else for(var l=t.length-1;l>=0;l--)(o=t[l])&&(b=(s<3?o(b):s>3?o(e,i,b):o(e,i))||b);return s>3&&b&&Object.defineProperty(e,i,b),b}([r("w3m-transactions-view")],s);export{s as W3mTransactionsView};
