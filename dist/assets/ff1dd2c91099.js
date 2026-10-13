import{e3 as t,e1 as e,e2 as f}from"./ff1dd2c9.js";import{a as i}from"./ff1dd2c91085.js";import"./ff1dd2c91100.js";import"./ff1dd2c92.js";import"./ff1dd2c93.js";import"./ff1dd2c91084.js";import"./ff1dd2c91087.js";import"./ff1dd2c9899.js";import"./ff1dd2c91088.js";import"./ff1dd2c91089.js";import"./ff1dd2c91093.js";const r=t`
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
    `}};o.styles=r,o=function(t,e,f,i){var r,o=arguments.length,d=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,f):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)d=Reflect.decorate(t,e,f,i);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(d=(o<3?r(d):o>3?r(e,f,d):r(e,f))||d);return o>3&&d&&Object.defineProperty(e,f,d),d}([i("w3m-transactions-view")],o);export{o as W3mTransactionsView};
