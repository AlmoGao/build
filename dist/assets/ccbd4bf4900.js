import{dS as t,dQ as e,dR as c}from"./ccbd4bf4.js";import{a as i}from"./ccbd4bf4886.js";import"./ccbd4bf4901.js";import"./ccbd4bf42.js";import"./ccbd4bf43.js";import"./ccbd4bf4885.js";import"./ccbd4bf4888.js";import"./ccbd4bf4736.js";import"./ccbd4bf4889.js";import"./ccbd4bf4890.js";import"./ccbd4bf4894.js";const r=t`
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
    `}};o.styles=r,o=function(t,e,c,i){var r,o=arguments.length,s=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,c):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,c,i);else for(var f=t.length-1;f>=0;f--)(r=t[f])&&(s=(o<3?r(s):o>3?r(e,c,s):r(e,c))||s);return o>3&&s&&Object.defineProperty(e,c,s),s}([i("w3m-transactions-view")],o);export{o as W3mTransactionsView};
