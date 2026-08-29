import{dQ as a,dR as t}from"./ccbd4bf4.js";import{n as e}from"./ccbd4bf4885.js";import"./ccbd4bf4890.js";import{c as r,r as o,a as l,U as i}from"./ccbd4bf4886.js";const c=r`
  :host {
    display: block;
    width: var(--local-width);
    height: var(--local-height);
    border-radius: ${({borderRadius:a})=>a[16]};
    overflow: hidden;
    position: relative;
  }

  :host([data-variant='generated']) {
    --mixed-local-color-1: var(--local-color-1);
    --mixed-local-color-2: var(--local-color-2);
    --mixed-local-color-3: var(--local-color-3);
    --mixed-local-color-4: var(--local-color-4);
    --mixed-local-color-5: var(--local-color-5);
  }

  :host([data-variant='generated']) {
    background: radial-gradient(
      var(--local-radial-circle),
      #fff 0.52%,
      var(--mixed-local-color-5) 31.25%,
      var(--mixed-local-color-3) 51.56%,
      var(--mixed-local-color-2) 65.63%,
      var(--mixed-local-color-1) 82.29%,
      var(--mixed-local-color-4) 100%
    );
  }

  :host([data-variant='default']) {
    background: radial-gradient(
      75.29% 75.29% at 64.96% 24.36%,
      #fff 0.52%,
      #f5ccfc 31.25%,
      #dba4f5 51.56%,
      #9a8ee8 65.63%,
      #6493da 82.29%,
      #6ebdea 100%
    );
  }
`;var s=function(a,t,e,r){var o,l=arguments.length,i=l<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,e):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(a,t,e,r);else for(var c=a.length-1;c>=0;c--)(o=a[c])&&(i=(l<3?o(i):l>3?o(t,e,i):o(t,e))||i);return l>3&&i&&Object.defineProperty(t,e,i),i};let d=class extends a{constructor(){super(...arguments),this.imageSrc=void 0,this.alt=void 0,this.address=void 0,this.size="xl"}render(){const a={inherit:"inherit",xxs:"3",xs:"5",sm:"6",md:"8",mdl:"8",lg:"10",xl:"16",xxl:"20"};return this.style.cssText=`\n    --local-width: var(--apkt-spacing-${a[this.size??"xl"]});\n    --local-height: var(--apkt-spacing-${a[this.size??"xl"]});\n    `,t`${this.visualTemplate()}`}visualTemplate(){if(this.imageSrc)return this.dataset.variant="image",t`<wui-image src=${this.imageSrc} alt=${this.alt??"avatar"}></wui-image>`;if(this.address){this.dataset.variant="generated";const a=i.generateAvatarColors(this.address);return this.style.cssText+=`\n ${a}`,null}return this.dataset.variant="default",null}};d.styles=[o,c],s([e()],d.prototype,"imageSrc",void 0),s([e()],d.prototype,"alt",void 0),s([e()],d.prototype,"address",void 0),s([e()],d.prototype,"size",void 0),d=s([l("wui-avatar")],d);
