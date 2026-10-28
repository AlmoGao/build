import{e7 as t,e5 as e,e6 as f}from"./378fbf22.js";import{a as i}from"./378fbf221100.js";import"./378fbf221115.js";import"./378fbf222.js";import"./378fbf223.js";import"./378fbf221099.js";import"./378fbf221102.js";import"./378fbf22913.js";import"./378fbf221103.js";import"./378fbf221104.js";import"./378fbf221108.js";const r=t`
  :host > wui-flex:first-child {
    height: 500px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  :host > wui-flex:first-child::-webkit-scrollbar {
    display: none;
  }
`;let o=class extends e{render(){return f`
      <wui-flex flexDirection="column" .padding=${["0","3","3","3"]} gap="3">
        <w3m-activity-list page="activity"></w3m-activity-list>
      </wui-flex>
    `}};o.styles=r,o=function(t,e,f,i){var r,o=arguments.length,s=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,f):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,f,i);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(s=(o<3?r(s):o>3?r(e,f,s):r(e,f))||s);return o>3&&s&&Object.defineProperty(e,f,s),s}([i("w3m-transactions-view")],o);export{o as W3mTransactionsView};
