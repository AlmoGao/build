import{e7 as t,e5 as e,e6 as i}from"./0a06dfc0.js";import{a as r}from"./0a06dfc01100.js";import"./0a06dfc01115.js";import"./0a06dfc02.js";import"./0a06dfc03.js";import"./0a06dfc01099.js";import"./0a06dfc01102.js";import"./0a06dfc0913.js";import"./0a06dfc01103.js";import"./0a06dfc01104.js";import"./0a06dfc01108.js";const o=t`
  :host > wui-flex:first-child {
    height: 500px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  :host > wui-flex:first-child::-webkit-scrollbar {
    display: none;
  }
`;let c=class extends e{render(){return i`
      <wui-flex flexDirection="column" .padding=${["0","3","3","3"]} gap="3">
        <w3m-activity-list page="activity"></w3m-activity-list>
      </wui-flex>
    `}};c.styles=o,c=function(t,e,i,r){var o,c=arguments.length,s=c<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,r);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(c<3?o(s):c>3?o(e,i,s):o(e,i))||s);return c>3&&s&&Object.defineProperty(e,i,s),s}([r("w3m-transactions-view")],c);export{c as W3mTransactionsView};
