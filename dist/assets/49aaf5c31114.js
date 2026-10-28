import{e7 as t,e5 as e,e6 as a}from"./49aaf5c3.js";import{a as i}from"./49aaf5c31100.js";import"./49aaf5c31115.js";import"./49aaf5c32.js";import"./49aaf5c33.js";import"./49aaf5c31099.js";import"./49aaf5c31102.js";import"./49aaf5c3913.js";import"./49aaf5c31103.js";import"./49aaf5c31104.js";import"./49aaf5c31108.js";const r=t`
  :host > wui-flex:first-child {
    height: 500px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  :host > wui-flex:first-child::-webkit-scrollbar {
    display: none;
  }
`;let o=class extends e{render(){return a`
      <wui-flex flexDirection="column" .padding=${["0","3","3","3"]} gap="3">
        <w3m-activity-list page="activity"></w3m-activity-list>
      </wui-flex>
    `}};o.styles=r,o=function(t,e,a,i){var r,o=arguments.length,c=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,a):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,a,i);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(c=(o<3?r(c):o>3?r(e,a,c):r(e,a))||c);return o>3&&c&&Object.defineProperty(e,a,c),c}([i("w3m-transactions-view")],o);export{o as W3mTransactionsView};
