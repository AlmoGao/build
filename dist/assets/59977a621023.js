import{dT as t,dU as e,cS as i,gJ as r,cN as n,dX as a,cU as s,cL as o,d_ as c,d$ as u}from"./59977a62.js";import{n as l,r as d}from"./59977a621007.js";import{U as p,c as h,a as m,r as f}from"./59977a621008.js";import{t as g}from"./59977a623.js";import"./59977a621010.js";import"./59977a621011.js";import{o as w}from"./59977a62845.js";import"./59977a621012.js";import"./59977a621016.js";var y,x={exports:{}};const v=g((y||(y=1,x.exports=function(){var t=1e3,e=6e4,i=36e5,r="millisecond",n="second",a="minute",s="hour",o="day",c="week",u="month",l="quarter",d="year",p="date",h="Invalid Date",m=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,f=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,g={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],i=t%100;return"["+t+(e[(i-20)%10]||e[i]||e[0])+"]"}},w=function(t,e,i){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(i)+t},y={s:w,z:function(t){var e=-t.utcOffset(),i=Math.abs(e),r=Math.floor(i/60),n=i%60;return(e<=0?"+":"-")+w(r,2,"0")+":"+w(n,2,"0")},m:function t(e,i){if(e.date()<i.date())return-t(i,e);var r=12*(i.year()-e.year())+(i.month()-e.month()),n=e.clone().add(r,u),a=i-n<0,s=e.clone().add(r+(a?-1:1),u);return+(-(r+(i-n)/(a?n-s:s-n))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:u,y:d,w:c,d:o,D:p,h:s,m:a,s:n,ms:r,Q:l}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},x="en",v={};v[x]=g;var b="$isDayjsObject",$=function(t){return t instanceof M||!(!t||!t[b])},T=function t(e,i,r){var n;if(!e)return x;if("string"==typeof e){var a=e.toLowerCase();v[a]&&(n=a),i&&(v[a]=i,n=a);var s=e.split("-");if(!n&&s.length>1)return t(s[0])}else{var o=e.name;v[o]=e,n=o}return!r&&n&&(x=n),n||!r&&x},D=function(t,e){if($(t))return t.clone();var i="object"==typeof e?e:{};return i.date=t,i.args=arguments,new M(i)},k=y;k.l=T,k.i=$,k.w=function(t,e){return D(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var M=function(){function g(t){this.$L=T(t.locale,null,!0),this.parse(t),this.$x=this.$x||t.x||{},this[b]=!0}var w=g.prototype;return w.parse=function(t){this.$d=function(t){var e=t.date,i=t.utc;if(null===e)return new Date(NaN);if(k.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(m);if(r){var n=r[2]-1||0,a=(r[7]||"0").substring(0,3);return i?new Date(Date.UTC(r[1],n,r[3]||1,r[4]||0,r[5]||0,r[6]||0,a)):new Date(r[1],n,r[3]||1,r[4]||0,r[5]||0,r[6]||0,a)}}return new Date(e)}(t),this.init()},w.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},w.$utils=function(){return k},w.isValid=function(){return!(this.$d.toString()===h)},w.isSame=function(t,e){var i=D(t);return this.startOf(e)<=i&&i<=this.endOf(e)},w.isAfter=function(t,e){return D(t)<this.startOf(e)},w.isBefore=function(t,e){return this.endOf(e)<D(t)},w.$g=function(t,e,i){return k.u(t)?this[e]:this.set(i,t)},w.unix=function(){return Math.floor(this.valueOf()/1e3)},w.valueOf=function(){return this.$d.getTime()},w.startOf=function(t,e){var i=this,r=!!k.u(e)||e,l=k.p(t),h=function(t,e){var n=k.w(i.$u?Date.UTC(i.$y,e,t):new Date(i.$y,e,t),i);return r?n:n.endOf(o)},m=function(t,e){return k.w(i.toDate()[t].apply(i.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),i)},f=this.$W,g=this.$M,w=this.$D,y="set"+(this.$u?"UTC":"");switch(l){case d:return r?h(1,0):h(31,11);case u:return r?h(1,g):h(0,g+1);case c:var x=this.$locale().weekStart||0,v=(f<x?f+7:f)-x;return h(r?w-v:w+(6-v),g);case o:case p:return m(y+"Hours",0);case s:return m(y+"Minutes",1);case a:return m(y+"Seconds",2);case n:return m(y+"Milliseconds",3);default:return this.clone()}},w.endOf=function(t){return this.startOf(t,!1)},w.$set=function(t,e){var i,c=k.p(t),l="set"+(this.$u?"UTC":""),h=(i={},i[o]=l+"Date",i[p]=l+"Date",i[u]=l+"Month",i[d]=l+"FullYear",i[s]=l+"Hours",i[a]=l+"Minutes",i[n]=l+"Seconds",i[r]=l+"Milliseconds",i)[c],m=c===o?this.$D+(e-this.$W):e;if(c===u||c===d){var f=this.clone().set(p,1);f.$d[h](m),f.init(),this.$d=f.set(p,Math.min(this.$D,f.daysInMonth())).$d}else h&&this.$d[h](m);return this.init(),this},w.set=function(t,e){return this.clone().$set(t,e)},w.get=function(t){return this[k.p(t)]()},w.add=function(r,l){var p,h=this;r=Number(r);var m=k.p(l),f=function(t){var e=D(h);return k.w(e.date(e.date()+Math.round(t*r)),h)};if(m===u)return this.set(u,this.$M+r);if(m===d)return this.set(d,this.$y+r);if(m===o)return f(1);if(m===c)return f(7);var g=(p={},p[a]=e,p[s]=i,p[n]=t,p)[m]||1,w=this.$d.getTime()+r*g;return k.w(w,this)},w.subtract=function(t,e){return this.add(-1*t,e)},w.format=function(t){var e=this,i=this.$locale();if(!this.isValid())return i.invalidDate||h;var r=t||"YYYY-MM-DDTHH:mm:ssZ",n=k.z(this),a=this.$H,s=this.$m,o=this.$M,c=i.weekdays,u=i.months,l=i.meridiem,d=function(t,i,n,a){return t&&(t[i]||t(e,r))||n[i].slice(0,a)},p=function(t){return k.s(a%12||12,t,"0")},m=l||function(t,e,i){var r=t<12?"AM":"PM";return i?r.toLowerCase():r};return r.replace(f,function(t,r){return r||function(t){switch(t){case"YY":return String(e.$y).slice(-2);case"YYYY":return k.s(e.$y,4,"0");case"M":return o+1;case"MM":return k.s(o+1,2,"0");case"MMM":return d(i.monthsShort,o,u,3);case"MMMM":return d(u,o);case"D":return e.$D;case"DD":return k.s(e.$D,2,"0");case"d":return String(e.$W);case"dd":return d(i.weekdaysMin,e.$W,c,2);case"ddd":return d(i.weekdaysShort,e.$W,c,3);case"dddd":return c[e.$W];case"H":return String(a);case"HH":return k.s(a,2,"0");case"h":return p(1);case"hh":return p(2);case"a":return m(a,s,!0);case"A":return m(a,s,!1);case"m":return String(s);case"mm":return k.s(s,2,"0");case"s":return String(e.$s);case"ss":return k.s(e.$s,2,"0");case"SSS":return k.s(e.$ms,3,"0");case"Z":return n}return null}(t)||n.replace(":","")})},w.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},w.diff=function(r,p,h){var m,f=this,g=k.p(p),w=D(r),y=(w.utcOffset()-this.utcOffset())*e,x=this-w,v=function(){return k.m(f,w)};switch(g){case d:m=v()/12;break;case u:m=v();break;case l:m=v()/3;break;case c:m=(x-y)/6048e5;break;case o:m=(x-y)/864e5;break;case s:m=x/i;break;case a:m=x/e;break;case n:m=x/t;break;default:m=x}return h?m:k.a(m)},w.daysInMonth=function(){return this.endOf(u).$D},w.$locale=function(){return v[this.$L]},w.locale=function(t,e){if(!t)return this.$L;var i=this.clone(),r=T(t,e,!0);return r&&(i.$L=r),i},w.clone=function(){return k.w(this.$d,this)},w.toDate=function(){return new Date(this.valueOf())},w.toJSON=function(){return this.isValid()?this.toISOString():null},w.toISOString=function(){return this.$d.toISOString()},w.toString=function(){return this.$d.toUTCString()},g}(),S=M.prototype;return D.prototype=S,[["$ms",r],["$s",n],["$m",a],["$H",s],["$W",o],["$M",u],["$y",d],["$D",p]].forEach(function(t){S[t[1]]=function(e){return this.$g(e,t[0],t[1])}}),D.extend=function(t,e){return t.$i||(t(e,M,D),t.$i=!0),D},D.locale=T,D.isDayjs=$,D.unix=function(t){return D(1e3*t)},D.en=v[x],D.Ls=v,D.p={},D}()),x.exports));var b,$={exports:{}};const T=g(b?$.exports:(b=1,$.exports={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],i=t%100;return"["+t+(e[(i-20)%10]||e[i]||e[0])+"]"}}));var D,k={exports:{}};const M=g(D?k.exports:(D=1,k.exports=function(t,e,i){t=t||{};var r=e.prototype,n={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function a(t,e,i,n){return r.fromToBase(t,e,i,n)}i.en.relativeTime=n,r.fromToBase=function(e,r,a,s,o){for(var c,u,l,d=a.$locale().relativeTime||n,p=t.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],h=p.length,m=0;m<h;m+=1){var f=p[m];f.d&&(c=s?i(e).diff(a,f.d,!0):a.diff(e,f.d,!0));var g=(t.rounding||Math.round)(Math.abs(c));if(l=c>0,g<=f.r||!f.r){g<=1&&m>0&&(f=p[m-1]);var w=d[f.l];o&&(g=o(""+g)),u="string"==typeof w?w.replace("%d",g):w(g,r,f.l,l);break}}if(r)return u;var y=l?d.future:d.past;return"function"==typeof y?y(u):y.replace("%s",u)},r.to=function(t,e){return a(t,e,this,!0)},r.from=function(t,e){return a(t,e,this)};var s=function(t){return t.$u?i.utc():i()};r.toNow=function(t){return this.to(s(this),t)},r.fromNow=function(t){return this.from(s(this),t)}}));var S,I={exports:{}};const O=g(S?I.exports:(S=1,I.exports=function(t,e,i){i.updateLocale=function(t,e){var r=i.Ls[t];if(r)return(e?Object.keys(e):[]).forEach(function(t){r[t]=e[t]}),r}}));v.extend(M),v.extend(O);const _={...T,name:"en-web3-modal",relativeTime:{future:"in %s",past:"%s ago",s:"%d sec",m:"1 min",mm:"%d min",h:"1 hr",hh:"%d hrs",d:"1 d",dd:"%d d",M:"1 mo",MM:"%d mo",y:"1 yr",yy:"%d yr"}},A=["January","February","March","April","May","June","July","August","September","October","November","December"];v.locale("en-web3-modal",_);const j={getMonthNameByIndex:t=>A[t],getYear:(t=(new Date).toISOString())=>v(t).year(),getRelativeDateFromNow:t=>v(t).locale("en-web3-modal").fromNow(!0),formatDate:(t,e="DD MMM")=>v(t).format(e)},R=["receive","deposit","borrow","claim"],C=["withdraw","repay","burn"],z={getTransactionGroupTitle(t,e){const i=j.getYear(),r=j.getMonthNameByIndex(e);return t===i?r:`${r} ${t}`},getTransactionImages(t){const[e,i]=t,r=Boolean(e)&&t?.every(t=>Boolean(t.nft_info)),n=t?.length>1;return 2===t?.length&&!r?[this.getTransactionImage(i),this.getTransactionImage(e)]:n?t.map(t=>this.getTransactionImage(t)):[this.getTransactionImage(e)]},getTransactionImage:t=>({type:z.getTransactionTransferTokenType(t),url:z.getTransactionImageURL(t)}),getTransactionImageURL(t){let e;const i=Boolean(t?.nft_info),r=Boolean(t?.fungible_info);return t&&i?e=t?.nft_info?.content?.preview?.url:t&&r&&(e=t?.fungible_info?.icon?.url),e},getTransactionTransferTokenType:t=>t?.fungible_info?"FUNGIBLE":t?.nft_info?"NFT":void 0,getTransactionDescriptions(t){const e=t?.metadata?.operationType,i=t?.transfers,r=t?.transfers?.length>0,n=t?.transfers?.length>1,a=r&&i?.every(t=>Boolean(t?.fungible_info)),[s,o]=i;let c=this.getTransferDescription(s),u=this.getTransferDescription(o);if(!r){return("send"===e||"receive"===e)&&a?(c=p.getTruncateString({string:t?.metadata.sentFrom,charsStart:4,charsEnd:6,truncate:"middle"}),u=p.getTruncateString({string:t?.metadata.sentTo,charsStart:4,charsEnd:6,truncate:"middle"}),[c,u]):[t.metadata.status]}if(n)return i.map(t=>this.getTransferDescription(t)).reverse();let l="";return R.includes(e)?l="+":C.includes(e)&&(l="-"),c=l.concat(c),[c]},getTransferDescription(t){let e="";return t?(t?.nft_info?e=t?.nft_info?.name||"-":t?.fungible_info&&(e=this.getFungibleTransferDescription(t)||"-"),e):e},getFungibleTransferDescription(t){if(!t)return null;return[this.getQuantityFixedValue(t?.quantity.numeric),t?.fungible_info?.symbol].join(" ").trim()},mergeTransfers(t){let e=t;return t?.length>1&&(e=t.reduce((t,e)=>{const i=e?.fungible_info?.name,r=t.find(({fungible_info:t})=>i&&i===t?.name);if(r){const t=Number(r.quantity.numeric)+Number(e.quantity.numeric);r.quantity.numeric=t.toString()}else t.push(e);return t},[])),e},getQuantityFixedValue(t){if(!t)return null;return parseFloat(t).toFixed(3)}};var P,N;(N=P||(P={})).approve="approved",N.bought="bought",N.borrow="borrowed",N.burn="burnt",N.cancel="canceled",N.claim="claimed",N.deploy="deployed",N.deposit="deposited",N.execute="executed",N.mint="minted",N.receive="received",N.repay="repaid",N.send="sent",N.sell="sold",N.stake="staked",N.trade="swapped",N.unstake="unstaked",N.withdraw="withdrawn";const B=h`
  :host > wui-flex {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 40px;
    height: 40px;
    box-shadow: inset 0 0 0 1px ${({tokens:t})=>t.core.glass010};
    background-color: ${({tokens:t})=>t.core.glass010};
  }

  :host([data-no-images='true']) > wui-flex {
    background-color: ${({tokens:t})=>t.theme.foregroundPrimary};
    border-radius: ${({borderRadius:t})=>t[3]} !important;
  }

  :host > wui-flex wui-image {
    display: block;
  }

  :host > wui-flex,
  :host > wui-flex wui-image,
  .swap-images-container,
  .swap-images-container.nft,
  wui-image.nft {
    border-top-left-radius: var(--local-left-border-radius);
    border-top-right-radius: var(--local-right-border-radius);
    border-bottom-left-radius: var(--local-left-border-radius);
    border-bottom-right-radius: var(--local-right-border-radius);
  }

  wui-icon {
    width: 20px;
    height: 20px;
  }

  .swap-images-container {
    position: relative;
    width: 40px;
    height: 40px;
    overflow: hidden;
  }

  .swap-images-container wui-image:first-child {
    position: absolute;
    width: 40px;
    height: 40px;
    top: 0;
    left: 0%;
    clip-path: inset(0px calc(50% + 2px) 0px 0%);
  }

  .swap-images-container wui-image:last-child {
    clip-path: inset(0px 0px 0px calc(50% + 2px));
  }

  wui-flex.status-box {
    position: absolute;
    right: 0;
    bottom: 0;
    transform: translate(20%, 20%);
    border-radius: ${({borderRadius:t})=>t[4]};
    background-color: ${({tokens:t})=>t.theme.backgroundPrimary};
    box-shadow: 0 0 0 2px ${({tokens:t})=>t.theme.backgroundPrimary};
    overflow: hidden;
    width: 16px;
    height: 16px;
  }
`;var Y=function(t,e,i,r){var n,a=arguments.length,s=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,r);else for(var o=t.length-1;o>=0;o--)(n=t[o])&&(s=(a<3?n(s):a>3?n(e,i,s):n(e,i))||s);return a>3&&s&&Object.defineProperty(e,i,s),s};let F=class extends t{constructor(){super(...arguments),this.images=[],this.secondImage={type:void 0,url:""}}render(){const[t,i]=this.images;this.images.length||(this.dataset.noImages="true");const r="NFT"===t?.type,n=r?"var(--apkt-borderRadius-3)":"var(--apkt-borderRadius-5)",a=(i?.url?"NFT"===i.type:r)?"var(--apkt-borderRadius-3)":"var(--apkt-borderRadius-5)";return this.style.cssText=`\n    --local-left-border-radius: ${n};\n    --local-right-border-radius: ${a};\n    `,e`<wui-flex> ${this.templateVisual()} ${this.templateIcon()} </wui-flex>`}templateVisual(){const[t,i]=this.images,r=t?.type;return 2===this.images.length&&(t?.url||i?.url)?e`<div class="swap-images-container">
        ${t?.url?e`<wui-image src=${t.url} alt="Transaction image"></wui-image>`:null}
        ${i?.url?e`<wui-image src=${i.url} alt="Transaction image"></wui-image>`:null}
      </div>`:t?.url?e`<wui-image src=${t.url} alt="Transaction image"></wui-image>`:"NFT"===r?e`<wui-icon size="inherit" color="default" name="nftPlaceholder"></wui-icon>`:e`<wui-icon size="inherit" color="default" name="coinPlaceholder"></wui-icon>`}templateIcon(){let t,i="accent-primary";return t=this.getIcon(),this.status&&(i=this.getStatusColor()),t?e`
      <wui-flex alignItems="center" justifyContent="center" class="status-box">
        <wui-icon-box size="sm" color=${i} icon=${t}></wui-icon-box>
      </wui-flex>
    `:null}getDirectionIcon(){switch(this.direction){case"in":return"arrowBottom";case"out":return"arrowTop";default:return}}getIcon(){return this.onlyDirectionIcon?this.getDirectionIcon():"trade"===this.type?"swapHorizontal":"approve"===this.type?"checkmark":"cancel"===this.type?"close":this.getDirectionIcon()}getStatusColor(){switch(this.status){case"confirmed":return"success";case"failed":return"error";case"pending":return"inverse";default:return"accent-primary"}}};F.styles=[B],Y([l()],F.prototype,"type",void 0),Y([l()],F.prototype,"status",void 0),Y([l()],F.prototype,"direction",void 0),Y([l({type:Boolean})],F.prototype,"onlyDirectionIcon",void 0),Y([l({type:Array})],F.prototype,"images",void 0),Y([l({type:Object})],F.prototype,"secondImage",void 0),F=Y([m("wui-transaction-visual")],F);const L=h`
  :host {
    width: 100%;
  }

  :host > wui-flex:first-child {
    align-items: center;
    column-gap: ${({spacing:t})=>t[2]};
    padding: ${({spacing:t})=>t[1]} ${({spacing:t})=>t[2]};
    width: 100%;
  }

  :host > wui-flex:first-child wui-text:nth-child(1) {
    text-transform: capitalize;
  }

  wui-transaction-visual {
    width: 40px;
    height: 40px;
  }

  wui-flex {
    flex: 1;
  }

  :host wui-flex wui-flex {
    overflow: hidden;
  }

  :host .description-container wui-text span {
    word-break: break-all;
  }

  :host .description-container wui-text {
    overflow: hidden;
  }

  :host .description-separator-icon {
    margin: 0px 6px;
  }

  :host wui-text > span {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }
`;var U=function(t,e,i,r){var n,a=arguments.length,s=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,r);else for(var o=t.length-1;o>=0;o--)(n=t[o])&&(s=(a<3?n(s):a>3?n(e,i,s):n(e,i))||s);return a>3&&s&&Object.defineProperty(e,i,s),s};let H=class extends t{constructor(){super(...arguments),this.type="approve",this.onlyDirectionIcon=!1,this.images=[]}render(){return e`
      <wui-flex>
        <wui-transaction-visual
          .status=${this.status}
          direction=${w(this.direction)}
          type=${this.type}
          .onlyDirectionIcon=${this.onlyDirectionIcon}
          .images=${this.images}
        ></wui-transaction-visual>
        <wui-flex flexDirection="column" gap="1">
          <wui-text variant="lg-medium" color="primary">
            ${P[this.type]||this.type}
          </wui-text>
          <wui-flex class="description-container">
            ${this.templateDescription()} ${this.templateSecondDescription()}
          </wui-flex>
        </wui-flex>
        <wui-text variant="sm-medium" color="secondary"><span>${this.date}</span></wui-text>
      </wui-flex>
    `}templateDescription(){const t=this.descriptions?.[0];return t?e`
          <wui-text variant="md-regular" color="secondary">
            <span>${t}</span>
          </wui-text>
        `:null}templateSecondDescription(){const t=this.descriptions?.[1];return t?e`
          <wui-icon class="description-separator-icon" size="sm" name="arrowRight"></wui-icon>
          <wui-text variant="md-regular" color="secondary">
            <span>${t}</span>
          </wui-text>
        `:null}};H.styles=[f,L],U([l()],H.prototype,"type",void 0),U([l({type:Array})],H.prototype,"descriptions",void 0),U([l()],H.prototype,"date",void 0),U([l({type:Boolean})],H.prototype,"onlyDirectionIcon",void 0),U([l()],H.prototype,"status",void 0),U([l()],H.prototype,"direction",void 0),U([l({type:Array})],H.prototype,"images",void 0),H=U([m("wui-transaction-list-item")],H);const V=h`
  wui-flex {
    position: relative;
    display: inline-flex;
    justify-content: center;
    align-items: center;
  }

  wui-image {
    border-radius: ${({borderRadius:t})=>t[128]};
  }

  .fallback-icon {
    color: ${({tokens:t})=>t.theme.iconInverse};
    border-radius: ${({borderRadius:t})=>t[3]};
    background-color: ${({tokens:t})=>t.theme.foregroundPrimary};
  }

  .direction-icon,
  .status-image {
    position: absolute;
    right: 0;
    bottom: 0;
    border-radius: ${({borderRadius:t})=>t[128]};
    border: 2px solid ${({tokens:t})=>t.theme.backgroundPrimary};
  }

  .direction-icon {
    padding: ${({spacing:t})=>t["01"]};
    color: ${({tokens:t})=>t.core.iconSuccess};

    background-color: color-mix(
      in srgb,
      ${({tokens:t})=>t.core.textSuccess} 30%,
      ${({tokens:t})=>t.theme.backgroundPrimary} 70%
    );
  }

  /* -- Sizes --------------------------------------------------- */
  :host([data-size='sm']) > wui-image:not(.status-image),
  :host([data-size='sm']) > wui-flex {
    width: 24px;
    height: 24px;
  }

  :host([data-size='lg']) > wui-image:not(.status-image),
  :host([data-size='lg']) > wui-flex {
    width: 40px;
    height: 40px;
  }

  :host([data-size='sm']) .fallback-icon {
    height: 16px;
    width: 16px;
    padding: ${({spacing:t})=>t[1]};
  }

  :host([data-size='lg']) .fallback-icon {
    height: 32px;
    width: 32px;
    padding: ${({spacing:t})=>t[1]};
  }

  :host([data-size='sm']) .direction-icon,
  :host([data-size='sm']) .status-image {
    transform: translate(40%, 30%);
  }

  :host([data-size='lg']) .direction-icon,
  :host([data-size='lg']) .status-image {
    transform: translate(40%, 10%);
  }

  :host([data-size='sm']) .status-image {
    height: 14px;
    width: 14px;
  }

  :host([data-size='lg']) .status-image {
    height: 20px;
    width: 20px;
  }

  /* -- Crop effects --------------------------------------------------- */
  .swap-crop-left-image,
  .swap-crop-right-image {
    position: absolute;
    top: 0;
    bottom: 0;
  }

  .swap-crop-left-image {
    left: 0;
    clip-path: inset(0px calc(50% + 1.5px) 0px 0%);
  }

  .swap-crop-right-image {
    right: 0;
    clip-path: inset(0px 0px 0px calc(50% + 1.5px));
  }
`;var W=function(t,e,i,r){var n,a=arguments.length,s=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,r);else for(var o=t.length-1;o>=0;o--)(n=t[o])&&(s=(a<3?n(s):a>3?n(e,i,s):n(e,i))||s);return a>3&&s&&Object.defineProperty(e,i,s),s};const E={sm:"xxs",lg:"md"};let J=class extends t{constructor(){super(...arguments),this.type="approve",this.size="lg",this.statusImageUrl="",this.images=[]}render(){return e`<wui-flex>${this.templateVisual()} ${this.templateIcon()}</wui-flex>`}templateVisual(){switch(this.dataset.size=this.size,this.type){case"trade":return this.swapTemplate();case"fiat":return this.fiatTemplate();case"unknown":return this.unknownTemplate();default:return this.tokenTemplate()}}swapTemplate(){const[t,i]=this.images;return 2===this.images.length&&(t||i)?e`
        <wui-image class="swap-crop-left-image" src=${t} alt="Swap image"></wui-image>
        <wui-image class="swap-crop-right-image" src=${i} alt="Swap image"></wui-image>
      `:t?e`<wui-image src=${t} alt="Swap image"></wui-image>`:null}fiatTemplate(){return e`<wui-icon
      class="fallback-icon"
      size=${E[this.size]}
      name="dollar"
    ></wui-icon>`}unknownTemplate(){return e`<wui-icon
      class="fallback-icon"
      size=${E[this.size]}
      name="questionMark"
    ></wui-icon>`}tokenTemplate(){const[t]=this.images;return t?e`<wui-image src=${t} alt="Token image"></wui-image> `:e`<wui-icon
      class="fallback-icon"
      name=${"nft"===this.type?"image":"coinPlaceholder"}
    ></wui-icon>`}templateIcon(){return this.statusImageUrl?e`<wui-image
        class="status-image"
        src=${this.statusImageUrl}
        alt="Status image"
      ></wui-image>`:e`<wui-icon
      class="direction-icon"
      size=${E[this.size]}
      name=${this.getTemplateIcon()}
    ></wui-icon>`}getTemplateIcon(){return"trade"===this.type?"arrowClockWise":"arrowBottom"}};J.styles=[V],W([l()],J.prototype,"type",void 0),W([l()],J.prototype,"size",void 0),W([l()],J.prototype,"statusImageUrl",void 0),W([l({type:Array})],J.prototype,"images",void 0),J=W([m("wui-transaction-thumbnail")],J);const q=h`
  :host > wui-flex:first-child {
    gap: ${({spacing:t})=>t[2]};
    padding: ${({spacing:t})=>t[3]};
    width: 100%;
  }

  wui-flex {
    display: flex;
    flex: 1;
  }
`;let G=class extends t{render(){return e`
      <wui-flex alignItems="center">
        <wui-shimmer width="40px" height="40px" rounded></wui-shimmer>
        <wui-flex flexDirection="column" gap="1">
          <wui-shimmer width="124px" height="16px" rounded></wui-shimmer>
          <wui-shimmer width="60px" height="14px" rounded></wui-shimmer>
        </wui-flex>
        <wui-shimmer width="24px" height="12px" rounded></wui-shimmer>
      </wui-flex>
    `}};G.styles=[f,q],G=function(t,e,i,r){var n,a=arguments.length,s=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,r);else for(var o=t.length-1;o>=0;o--)(n=t[o])&&(s=(a<3?n(s):a>3?n(e,i,s):n(e,i))||s);return a>3&&s&&Object.defineProperty(e,i,s),s}([m("wui-transaction-list-item-loader")],G);const Z=h`
  :host {
    min-height: 100%;
  }

  .group-container[last-group='true'] {
    padding-bottom: ${({spacing:t})=>t[3]};
  }

  .contentContainer {
    height: 280px;
  }

  .contentContainer > wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: ${({borderRadius:t})=>t[3]};
  }

  .contentContainer > .textContent {
    width: 65%;
  }

  .emptyContainer {
    height: 100%;
  }
`;var Q=function(t,e,i,r){var n,a=arguments.length,s=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,r);else for(var o=t.length-1;o>=0;o--)(n=t[o])&&(s=(a<3?n(s):a>3?n(e,i,s):n(e,i))||s);return a>3&&s&&Object.defineProperty(e,i,s),s};const K="last-transaction";let X=class extends t{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.page="activity",this.caipAddress=i.state.activeCaipAddress,this.transactionsByYear=r.state.transactionsByYear,this.loading=r.state.loading,this.empty=r.state.empty,this.next=r.state.next,r.clearCursor(),this.unsubscribe.push(i.subscribeKey("activeCaipAddress",t=>{t&&this.caipAddress!==t&&(r.resetTransactions(),r.fetchTransactions(t)),this.caipAddress=t}),i.subscribeKey("activeCaipNetwork",()=>{this.updateTransactionView()}),r.subscribe(t=>{this.transactionsByYear=t.transactionsByYear,this.loading=t.loading,this.empty=t.empty,this.next=t.next}))}firstUpdated(){this.updateTransactionView(),this.createPaginationObserver()}updated(){this.setPaginationObserver()}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){return e` ${this.empty?null:this.templateTransactionsByYear()}
    ${this.loading?this.templateLoading():null}
    ${!this.loading&&this.empty?this.templateEmpty():null}`}updateTransactionView(){r.resetTransactions(),this.caipAddress&&r.fetchTransactions(n.getPlainAddress(this.caipAddress))}templateTransactionsByYear(){return Object.keys(this.transactionsByYear).sort().reverse().map(t=>{const i=parseInt(t,10),r=new Array(12).fill(null).map((t,e)=>{const r=z.getTransactionGroupTitle(i,e),n=this.transactionsByYear[i]?.[e];return{groupTitle:r,transactions:n}}).filter(({transactions:t})=>t).reverse();return r.map(({groupTitle:t,transactions:i},n)=>{const a=n===r.length-1;return i?e`
          <wui-flex
            flexDirection="column"
            class="group-container"
            last-group="${a?"true":"false"}"
            data-testid="month-indexes"
          >
            <wui-flex
              alignItems="center"
              flexDirection="row"
              .padding=${["2","3","3","3"]}
            >
              <wui-text variant="md-medium" color="secondary" data-testid="group-title">
                ${t}
              </wui-text>
            </wui-flex>
            <wui-flex flexDirection="column" gap="2">
              ${this.templateTransactions(i,a)}
            </wui-flex>
          </wui-flex>
        `:null})})}templateRenderTransaction(t,i){const{date:r,descriptions:n,direction:a,images:s,status:o,type:c,transfers:u,isAllNFT:l}=this.getTransactionListItemProps(t);return e`
      <wui-transaction-list-item
        date=${r}
        .direction=${a}
        id=${i&&this.next?K:""}
        status=${o}
        type=${c}
        .images=${s}
        .onlyDirectionIcon=${l||1===u.length}
        .descriptions=${n}
      ></wui-transaction-list-item>
    `}templateTransactions(t,i){return t.map((r,n)=>{const a=i&&n===t.length-1;return e`${this.templateRenderTransaction(r,a)}`})}emptyStateActivity(){return e`<wui-flex
      class="emptyContainer"
      flexGrow="1"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      .padding=${["10","5","10","5"]}
      gap="5"
      data-testid="empty-activity-state"
    >
      <wui-icon-box color="default" icon="wallet" size="xl"></wui-icon-box>
      <wui-flex flexDirection="column" alignItems="center" gap="2">
        <wui-text align="center" variant="lg-medium" color="primary">No Transactions yet</wui-text>
        <wui-text align="center" variant="lg-regular" color="secondary"
          >Start trading on dApps <br />
          to grow your wallet!</wui-text
        >
      </wui-flex>
    </wui-flex>`}emptyStateAccount(){return e`<wui-flex
      class="contentContainer"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      gap="4"
      data-testid="empty-account-state"
    >
      <wui-icon-box icon="swapHorizontal" size="lg" color="default"></wui-icon-box>
      <wui-flex
        class="textContent"
        gap="2"
        flexDirection="column"
        justifyContent="center"
        flexDirection="column"
      >
        <wui-text variant="md-regular" align="center" color="primary">No activity yet</wui-text>
        <wui-text variant="sm-regular" align="center" color="secondary"
          >Your next transactions will appear here</wui-text
        >
      </wui-flex>
      <wui-link @click=${this.onReceiveClick.bind(this)}>Trade</wui-link>
    </wui-flex>`}templateEmpty(){return"account"===this.page?e`${this.emptyStateAccount()}`:e`${this.emptyStateActivity()}`}templateLoading(){return"activity"===this.page?Array(7).fill(e` <wui-transaction-list-item-loader></wui-transaction-list-item-loader> `).map(t=>t):null}onReceiveClick(){a.push("WalletReceive")}createPaginationObserver(){const{projectId:t}=s.state;this.paginationObserver=new IntersectionObserver(([e])=>{e?.isIntersecting&&!this.loading&&(r.fetchTransactions(n.getPlainAddress(this.caipAddress)),o.sendEvent({type:"track",event:"LOAD_MORE_TRANSACTIONS",properties:{address:n.getPlainAddress(this.caipAddress),projectId:t,cursor:this.next,isSmartAccount:c(i.state.activeChain)===u.ACCOUNT_TYPES.SMART_ACCOUNT}}))},{}),this.setPaginationObserver()}setPaginationObserver(){this.paginationObserver?.disconnect();const t=this.shadowRoot?.querySelector(`#${K}`);t&&this.paginationObserver?.observe(t)}getTransactionListItemProps(t){const e=j.formatDate(t?.metadata?.minedAt),i=z.getTransactionDescriptions(t),r=z.mergeTransfers(t?.transfers),n=r?.[0],a=Boolean(n)&&r?.every(t=>Boolean(t.nft_info)),s=z.getTransactionImages(r);return{date:e,direction:n?.direction,descriptions:i,isAllNFT:a,images:s,status:t.metadata?.status,transfers:r,type:t.metadata?.operationType}}};X.styles=Z,Q([l()],X.prototype,"page",void 0),Q([d()],X.prototype,"caipAddress",void 0),Q([d()],X.prototype,"transactionsByYear",void 0),Q([d()],X.prototype,"loading",void 0),Q([d()],X.prototype,"empty",void 0),Q([d()],X.prototype,"next",void 0),X=Q([m("w3m-activity-list")],X);
