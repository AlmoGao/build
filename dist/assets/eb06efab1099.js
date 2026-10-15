import{e3 as e,e1 as t,e2 as i}from"./eb06efab.js";import{a as r}from"./eb06efab1085.js";import"./eb06efab1100.js";import"./eb06efab2.js";import"./eb06efab3.js";import"./eb06efab1084.js";import"./eb06efab1087.js";import"./eb06efab899.js";import"./eb06efab1088.js";import"./eb06efab1089.js";import"./eb06efab1093.js";const o=e`
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
    `}};s.styles=o,s=function(e,t,i,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,r);else for(var f=e.length-1;f>=0;f--)(o=e[f])&&(a=(s<3?o(a):s>3?o(t,i,a):o(t,i))||a);return s>3&&a&&Object.defineProperty(t,i,a),a}([r("w3m-transactions-view")],s);export{s as W3mTransactionsView};
