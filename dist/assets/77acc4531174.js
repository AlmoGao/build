import{eb as t,e9 as e,ea as c}from"./77acc453.js";import{a as i}from"./77acc4531160.js";import"./77acc4531175.js";import"./77acc4532.js";import"./77acc4533.js";import"./77acc4531159.js";import"./77acc4531162.js";import"./77acc453929.js";import"./77acc4531163.js";import"./77acc4531164.js";import"./77acc4531168.js";const r=t`
  :host > wui-flex:first-child {
    height: 500px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  :host > wui-flex:first-child::-webkit-scrollbar {
    display: none;
  }
`;let o=class extends e{render(){return c`
      <wui-flex flexDirection="column" .padding=${["0","3","3","3"]} gap="3">
        <w3m-activity-list page="activity"></w3m-activity-list>
      </wui-flex>
    `}};o.styles=r,o=function(t,e,c,i){var r,o=arguments.length,a=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,c):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,c,i);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(o<3?r(a):o>3?r(e,c,a):r(e,c))||a);return o>3&&a&&Object.defineProperty(e,c,a),a}([i("w3m-transactions-view")],o);export{o as W3mTransactionsView};
