import{o as c,u as Me,a as Re,b as Ae,y as Ne,c as ze,d as Oe,L as He,w as Ue,p as fe,i as Be,e as _,m as We,j as i,I,O as Ve,t as Fe,l as V,a0 as qe,a1 as F,a2 as xe,a3 as Ke,a4 as Ge,a5 as q,z as X,a6 as Ee,a7 as ge}from"./index-f6f0aeca.js";import{u as Je}from"./getOffsetToRoot-cb87f6b3.js";import{d as K,M as Ye}from"./MdRoute-c362a4cd.js";import{S as Ze}from"./add-68a39c46.js";function Xe(e){return{x:e.scrollWidth<=Math.ceil(e.scrollLeft)+e.clientWidth,y:e.scrollHeight<=Math.ceil(e.scrollTop)+e.clientHeight}}function Qe(e){if(navigator.clipboard)navigator.clipboard.writeText(e);else{let t=document.createElement("textarea");t.style.cssText="position:fixed;opacity:0;",t.value=e,document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t),t=null}}const et=e=>c.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",...e},c.createElement("path",{d:"M12 5.99 19.53 19H4.47L12 5.99M12 2 1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"})),tt=e=>c.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",...e},c.createElement("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"})),st=e=>c.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",...e},c.createElement("path",{d:"M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"})),nt={tabs:"^tabs","tabs--wrap":"^tabs--wrap","tabs--slider":"^tabs--slider","tabs--top":"^tabs--top","tabs--right":"^tabs--right","tabs--bottom":"^tabs--bottom","tabs--left":"^tabs--left","tabs--small":"^tabs--small","tabs--medium":"^tabs--medium","tabs--large":"^tabs--large","tabs--center":"^tabs--center","tabs__tablist-wrapper":"^tabs__tablist-wrapper",tabs__tablist:"^tabs__tablist",tabs__tab:"^tabs__tab","tabs__tab.is-active":"is-active","tabs__tab.is-disabled":"is-disabled","tabs__tab--first":"^tabs__tab--first","tabs__tab--last":"^tabs__tab--last",tabs__close:"^tabs__close","tabs__button-container":"^tabs__button-container",tabs__button:"^tabs__button","tabs__button.is-end":"is-end","tabs__button--more":"^tabs__button--more","tabs__button--add":"^tabs__button--add",tabs__indicator:"^tabs__indicator","tabs__wrap-indicator":"^tabs__wrap-indicator","tabs__slider-indicator":"^tabs__slider-indicator",tabs__tabpanel:"^tabs__tabpanel"};function it(e,t){const{styleOverrides:s,styleProvider:n,list:o,active:r,defaultActive:u,pattern:p,placement:l="top",center:d=!1,size:m="medium",addible:k=!1,onActiveChange:P,onAddClick:D,onClose:L,...T}=Me("Tabs",e),y=Re(),w=Ae(nt,{tabs:n==null?void 0:n.tabs},s),{t:A}=Ne(),H=ze(),N=a=>`${y}-tabs-tab-${a}-${H}`,G=a=>`${y}-tabs-panel-${a}-${H}`,se=c.useRef(null),U=c.useRef(null),z=c.useRef(null),x=c.useRef(null),J=c.useRef(null),[ue,Ie]=c.useState(!1),[De,Te]=c.useState([]),[Pe,Le]=c.useState(!1),me=m==="small"?16:m==="large"?20:18,B=l==="top"||l==="bottom",[Y,ne]=Oe(u??(()=>{for(const a of o)if(!a.disabled)return a.id;return null}),r,a=>{P&&P(a,He(o,h=>h.id===a))}),Z=()=>{const a=U.current;if(a){const h=B?a.scrollWidth>a.clientWidth:a.scrollHeight>a.clientHeight;if(Ie(h),Le(Xe(a)[B?"x":"y"]),h){const g=a.getBoundingClientRect(),S=[];o.forEach(j=>{var M,R;const W=document.getElementById(N(j.id));if(W){const E=W.getBoundingClientRect();B?(E.right+(((M=x.current)==null?void 0:M.offsetWidth)??0)>g.right||E.left<g.left)&&S.push(j):(E.bottom+(((R=x.current)==null?void 0:R.offsetHeight)??0)>g.bottom||E.top<g.top)&&S.push(j)}}),Te(S)}}};Ue(()=>{Z()},[]),fe(U,Z),fe(z,Z);const ie=Be(()=>{if(z.current&&J.current){const a=z.current.getBoundingClientRect();for(const h of o)if(h.id===Y){const g=document.getElementById(N(h.id));if(g){const S=g.getBoundingClientRect();B?J.current.style.cssText=`left:${S.left-a.left}px;width:${S.width}px;opacity:1;`:J.current.style.cssText=`top:${S.top-a.top}px;opacity:1;`}}}});return c.useEffect(()=>{ie()}),c.useImperativeHandle(t,()=>({updateIndicator:ie}),[ie]),_("div",{...T,...We(w("tabs",`tabs--${l}`,`tabs--${m}`,{[`tabs--${p}`]:p,"tabs--center":d}),{className:T.className,style:T.style}),ref:se,children:[i("div",{...w("tabs__tablist-wrapper"),ref:U,onScroll:()=>{Z()},children:_("div",{...w("tabs__tablist"),ref:z,role:"tablist","aria-orientation":B?"horizontal":"vertical",children:[o.map((a,h)=>{const{id:g,title:S,disabled:j,closable:W}=a,M=g===Y,R=(f,b=h)=>{for(let $=f?b+1:b-1,be=0;be<o.length;f?$++:$--,be++){const oe=V.nth(o,$%o.length);if(oe&&!oe.disabled)return oe}},E=f=>{if(f){ne(f.id);const b=document.getElementById(N(f.id));b&&b.focus()}},he=()=>{if(M){let f=!1;for(let b=h+1;b<o.length;b++){const $=V.nth(o,b);if($&&!$.disabled){f=!0,E($);break}}if(!f)for(let b=h-1;b>=0;b--){const $=V.nth(o,b);if($&&!$.disabled){E($);break}}}L==null||L(g,a)};return c.createElement("div",{...w("tabs__tab",{"tabs__tab.is-active":M,"tabs__tab.is-disabled":j,"tabs__tab--first":h===0,"tabs__tab--last":h===o.length-1}),key:g,id:N(g),tabIndex:M&&!j?0:-1,role:"tab","aria-controls":G(g),"aria-selected":M,"aria-disabled":j,onClick:()=>{ne(g)},onKeyDown:f=>{switch(f.code){case"Delete":f.preventDefault(),W&&he();break;case"ArrowLeft":f.preventDefault(),(l==="top"||l==="bottom")&&E(R(!1));break;case"ArrowRight":f.preventDefault(),(l==="top"||l==="bottom")&&E(R(!0));break;case"ArrowUp":f.preventDefault(),(l==="left"||l==="right")&&E(R(!1));break;case"ArrowDown":f.preventDefault(),(l==="left"||l==="right")&&E(R(!0));break;case"Home":f.preventDefault();for(const b of o)if(!b.disabled){E(b);break}break;case"End":f.preventDefault();for(let b=o.length-1;b>=0;b--)if(!o[b].disabled){E(o[b]);break}break}}},S,!j&&W&&i("div",{...w("tabs__close"),role:"button","aria-label":A("Close"),onClick:f=>{f.stopPropagation(),he()},children:i(I,{children:i(Ve,{})})}))}),(ue||k)&&_("div",{...w("tabs__button-container"),ref:x,children:[ue&&i(Fe,{list:De.map(a=>{const{id:h,title:g,dropdownRender:S,disabled:j}=a;return{id:h,title:V.isUndefined(S)?g:S,type:"item",disabled:j,style:h===Y?{color:`var(--${y}-color-primary)`}:void 0}}),placement:l==="left"?"bottom-left":"bottom-right",onClick:a=>{ne(a)},children:i("div",{...w("tabs__button","tabs__button--more",{"tabs__button.is-end":Pe}),"aria-label":A("More"),children:i(I,{size:me,children:i(tt,{})})})}),k&&i("div",{...w("tabs__button","tabs__button--add"),role:"button","aria-label":A("Add"),onClick:()=>{D==null||D()},children:i(I,{size:me,children:i(Ze,{})})})]}),i("div",{...w(p==="wrap"?"tabs__wrap-indicator":p==="slider"?"tabs__slider-indicator":"tabs__indicator"),ref:J})]})}),o.map(a=>{const{id:h,panel:g}=a;return c.createElement("div",{...w("tabs__tabpanel"),key:h,id:G(h),tabIndex:0,hidden:h!==Y,role:"tabpanel","aria-labelledby":N(h)},g)})]})}const ot=c.forwardRef(it),rt=e=>c.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",...e},c.createElement("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"})),v={"index.html":`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Inula UI</title>
    <link rel="stylesheet" href="/src/styles/vendor/bootstrap.scss" />
    <link rel="stylesheet" href="/src/styles/vendor/inula-ui.scss" />
    <link rel="stylesheet" href="/src/styles/index.scss" />
    <link rel="stylesheet" href="/src/index.scss" />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"><\/script>
  </body>
</html>
`,"src/main.tsx":`import { createRoot } from 'openinula';

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<App />);
`,"src/App.tsx":`import type { LContextIn } from '@inula-ui/components/context';

import { ConfigProvider, Root } from '@inula-ui/components';
import { useMemo } from 'openinula';

import Demo from './Demo';

export function App() {
  const lContext = useMemo<LContextIn>(
    () => ({
      layoutPageScrollEl: '#app-main',
      layoutContentResizeEl: '#app-content',
    }),
    [],
  );

  return (
    <ConfigProvider context={lContext}>
      <Root>
        <main id="app-main">
          <section id="app-content">
            <Demo />
          </section>
        </main>
      </Root>
    </ConfigProvider>
  );
}

export default App;
`,"src/styles/vendor/bootstrap.scss":`/* stylelint-disable no-invalid-position-at-import-rule */
@import 'bootstrap/scss/mixins/banner';
@include bsBanner('');

// scss-docs-start import-stack
// Configuration
@import 'bootstrap/scss/functions';
@import 'bootstrap/scss/variables';
@import 'bootstrap/scss/variables-dark';
@import 'bootstrap/scss/maps';
@import 'bootstrap/scss/mixins';
@import 'bootstrap/scss/utilities';

// Layout & components
@import 'bootstrap/scss/grid';

// Helpers
@import 'bootstrap/scss/helpers';

// Utilities
@import 'bootstrap/scss/utilities/api';
// scss-docs-end import-stack
`,"src/styles/vendor/inula-ui.scss":`@use '@inula-ui/themes/index';
`,"src/styles/index.scss":`body {
  margin: 0;
}

#app-main {
  width: 100%;
  height: 100vh;
  padding: 20px;
  overflow: auto;
}

#app-content {
  height: 200vh;
}
`,"tsconfig.json":`{
  "compilerOptions": {
    "strict": true,
    "esModuleInterop": true,
    "lib": ["dom", "es2015"],
    "skipLibCheck": true,
    "skipDefaultLibCheck": true,
    "jsx": "react-jsx"
  }
}
`,"vite.config.ts":`import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  resolve: {
    alias: {
      react: 'openinula',
      'react-dom': 'openinula',
      'react/jsx-dev-runtime': 'openinula/jsx-dev-runtime'
    }
  },
  server: {
    port: 3000
  },
  plugins: [react(), svgr()],
});
`},at=`{
    "infiniteLoopProtection": true,
    "hardReloadOnChange": true,
    "view": "browser",
    "container": {
      "port": 3000,
      "node": "16"
    }
  }
`,ct="node_modules/lerna/schemas/lerna-schema.json",lt=["libs/components","libs/hooks","libs/utils","libs/themes"],dt="0.0.1",pt={version:{conventionalCommits:!0,message:"chore: release %v",createRelease:"github",forcePublish:!0,exact:!0},publish:{yes:!0}},Q={$schema:ct,packages:lt,version:dt,command:pt},ut="@inula-ui/source",mt="0.0.0",ht="MIT",bt={"build:affected":"nx affected -t build","lint:affected":"nx affected -t lint","lint:style":"stylelint **/*.{css,scss,html,md}",prepare:"husky install && ts-node -P ./tools/tsconfig.tools.json ./tools/scripts/husky.ts",prepublishOnly:"nx run-many -t build -p components hooks utils themes","test:affected":"nx affected -t test","util:sort-package-json":"sort-package-json 'package.json' 'libs/*/package.json'",version:"prettier lerna.json --write"},ft={"@babel/core":"^7.22.17","@babel/preset-react":"^7.22.15","@commitlint/cli":"^17.7.1","@commitlint/config-conventional":"^17.7.0","@material-design-icons/svg":"^0.14.12","@nx/cypress":"17.0.2","@nx/devkit":"17.0.2","@nx/eslint":"17.0.2","@nx/eslint-plugin":"17.0.2","@nx/jest":"17.0.2","@nx/js":"17.0.2","@nx/plugin":"17.0.2","@nx/react":"17.0.2","@nx/vite":"17.0.2","@nx/workspace":"17.0.2","@stackblitz/sdk":"^1.9.0","@swc-node/register":"1.6.8","@swc/cli":"~0.1.62","@swc/core":"1.3.95","@swc/helpers":"0.5.3","@testing-library/react":"14.0.0","@types/fs-extra":"^11.0.1","@types/lodash":"^4.14.198","@types/node":"18.14.2","@types/react":"^17.0.76","@types/react-dom":"^17.0.25","@types/yaml-front-matter":"^4.1.0","@typescript-eslint/eslint-plugin":"5.62.0","@typescript-eslint/parser":"5.62.0","@vitejs/plugin-react":"~4.0.4","@vitest/coverage-c8":"~0.32.4","@vitest/ui":"~0.32.4",bootstrap:"^5.3.2",codesandbox:"^2.2.3",cypress:"^13.0.0",dayjs:"^1.11.9",eslint:"8.46.0","eslint-config-prettier":"9.0.0","eslint-plugin-cypress":"2.14.0","eslint-plugin-import":"2.27.5","eslint-plugin-jsx-a11y":"6.7.1","eslint-plugin-markdown":"^3.0.1","eslint-plugin-prettier":"^5.0.0","eslint-plugin-react":"7.32.2","eslint-plugin-react-hooks":"4.6.0","eslint-plugin-react-refresh":"^0.4.3","fs-extra":"^11.1.1","highlight.js":"^11.8.0","html-react-parser":"^5.1.8",husky:"^8.0.0",i18next:"^23.5.1",immer:"^10.0.2","inula-intl":"^0.0.5","inula-router":"^0.0.4",jsdom:"~22.1.0",jss:"^10.10.0","jss-preset-default":"^10.10.0",lerna:"^8.0.2",lodash:"^4.17.21",marked:"^6.0.0","marked-highlight":"^2.0.6",nx:"17.0.2",openinula:"0.1.2-SNAPSHOT","postcss-html":"^1.5.0","postcss-markdown":"^1.2.0",prettier:"^3.0.3",rfs:"^10.0.0",rxjs:"^7.8.1","rxjs-for-await":"^1.0.0",sass:"^1.66.1","sort-package-json":"^2.5.1",stylelint:"^15.10.3","stylelint-config-recess-order":"^4.3.0","stylelint-config-recommended-scss":"^12.0.0","stylelint-config-standard":"^34.0.0","stylelint-scss":"^5.1.0",surge:"^0.23.1","ts-node":"^10.9.1",tslib:"^2.6.2",typescript:"~5.1.3",verdaccio:"^5.0.4",vite:"~4.3.9","vite-plugin-svgr":"^4.2.0","vite-tsconfig-paths":"~4.2.1",vitest:"~0.32.4","yaml-front-matter":"^4.1.1"},gt={node:"16.x || 18.x",npm:"Please use pnpm instead of NPM to install dependencies",pnpm:"8.x"},vt={includedScripts:[]},C={name:ut,version:mt,private:!0,license:ht,scripts:bt,devDependencies:ft,engines:gt,nx:vt};function Se(e){return`{
  "name": "${e}",
  "version": "0.0.0",
  "private": true,
  "main": "src/index.tsx",
  "dependencies": {
    "@inula-ui/components": "${Q.version}",
    "@inula-ui/hooks": "${Q.version}",
    "@inula-ui/themes": "${Q.version}",
    "@inula-ui/utils": "${Q.version}",
    "bootstrap": "${C.devDependencies.bootstrap}",
    "dayjs": "${C.devDependencies.dayjs}",
    "immer": "${C.devDependencies.immer}",
    "openinula": "${C.devDependencies.openinula}",
    "tslib": "${C.devDependencies.tslib}"
  },
  "devDependencies": {
    "@types/react": "${C.devDependencies["@types/react"]}",
    "@types/react-dom": "${C.devDependencies["@types/react-dom"]}",
    "@vitejs/plugin-react": "${C.devDependencies["@vitejs/plugin-react"]}",
    "sass": "${C.devDependencies.sass}",
    "typescript": "${C.devDependencies.typescript}",
    "vite": "${C.devDependencies.vite}",
    "vite-plugin-svgr": "${C.devDependencies["vite-plugin-svgr"]}"
  },
  "scripts": {
    "start": "vite",
    "build": "vite build"
  }
}
`}function _t(e,t,s){const n={"index.html":{content:v["index.html"]},"src/App.tsx":{content:v["src/App.tsx"]},"src/Demo.tsx":{content:t},"src/main.tsx":{content:v["src/main.tsx"]},"src/styles/index.scss":{content:v["src/styles/index.scss"]},"src/styles/vendor/bootstrap.scss":{content:v["src/styles/vendor/bootstrap.scss"]},"src/styles/vendor/inula-ui.scss":{content:v["src/styles/vendor/inula-ui.scss"]},"package.json":{content:Se(e)},"tsconfig.json":{content:v["tsconfig.json"]},"vite.config.ts":{content:v["vite.config.ts"]},"sandbox.config.json":{content:at}};s&&(n["src/styles/index.scss"]={content:`${v["src/styles/index.scss"]}
${s}`});const o=qe({files:n}),r=document.createElement("form");r.method="POST",r.action="https://codesandbox.io/api/v1/sandboxes/define",r.target="_blank";const u=document.createElement("input");u.name="parameters",u.value=o;const p=document.createElement("input");p.name="query",p.value="module=/src/Demo.tsx",r.appendChild(u),r.appendChild(p),document.body.append(r),r.submit(),document.body.removeChild(r)}const yt=500,wt=20,xt=300,Et="https://stackblitz.com",ve=["angular-cli","create-react-app","html","javascript","node","polymer","typescript","vue"],St=["project","search","ports","settings"],Ct=["light","dark"],$t=["editor","preview"],_e={clickToLoad:e=>O("ctl",e),devToolsHeight:e=>ye("devtoolsheight",e),forceEmbedLayout:e=>O("embed",e),hideDevTools:e=>O("hidedevtools",e),hideExplorer:e=>O("hideExplorer",e),hideNavigation:e=>O("hideNavigation",e),openFile:e=>we("file",e),showSidebar:e=>kt("showSidebar",e),sidebarView:e=>re("sidebarView",e,St),startScript:e=>we("startScript",e),terminalHeight:e=>ye("terminalHeight",e),theme:e=>re("theme",e,Ct),view:e=>re("view",e,$t),zenMode:e=>O("zenMode",e)};function Ce(e={}){const t=Object.entries(e).map(([s,n])=>n!=null&&_e.hasOwnProperty(s)?_e[s](n):"").filter(Boolean);return t.length?`?${t.join("&")}`:""}function O(e,t){return t===!0?`${e}=1`:""}function kt(e,t){return typeof t=="boolean"?`${e}=${t?"1":"0"}`:""}function ye(e,t){if(typeof t=="number"&&!Number.isNaN(t)){const s=Math.min(100,Math.max(0,t));return`${e}=${encodeURIComponent(Math.round(s))}`}return""}function re(e,t="",s=[]){return s.includes(t)?`${e}=${encodeURIComponent(t)}`:""}function we(e,t){return(Array.isArray(t)?t:[t]).filter(n=>typeof n=="string"&&n.trim()!=="").map(n=>`${e}=${encodeURIComponent(n)}`).join("&")}function $e(){return Math.random().toString(36).slice(2,6)+Math.random().toString(36).slice(2,6)}function ae(e,t){return`${ke(t)}${e}${Ce(t)}`}function ce(e,t){const s={forceEmbedLayout:!0};return t&&typeof t=="object"&&Object.assign(s,t),`${ke(s)}${e}${Ce(s)}`}function ke(e={}){return(typeof e.origin=="string"?e.origin:Et).replace(/\/$/,"")}function le(e,t,s){if(!t||!e||!e.parentNode)throw new Error("Invalid Element");e.id&&(t.id=e.id),e.className&&(t.className=e.className),jt(t,s),e.replaceWith(t)}function de(e){if(typeof e=="string"){const t=document.getElementById(e);if(!t)throw new Error(`Could not find element with id '${e}'`);return t}else if(e instanceof HTMLElement)return e;throw new Error(`Invalid element: ${e}`)}function pe(e){return e&&e.newWindow===!1?"_self":"_blank"}function jt(e,t={}){const s=Object.hasOwnProperty.call(t,"height")?`${t.height}`:`${xt}`,n=Object.hasOwnProperty.call(t,"width")?`${t.width}`:void 0;e.setAttribute("height",s),n?e.setAttribute("width",n):e.setAttribute("style","width:100%;")}class It{constructor(t){this.pending={},this.port=t,this.port.onmessage=this.messageListener.bind(this)}request({type:t,payload:s}){return new Promise((n,o)=>{const r=$e();this.pending[r]={resolve:n,reject:o},this.port.postMessage({type:t,payload:{...s,__reqid:r}})})}messageListener(t){var p;if(typeof((p=t.data.payload)==null?void 0:p.__reqid)!="string")return;const{type:s,payload:n}=t.data,{__reqid:o,__success:r,__error:u}=n;this.pending[o]&&(r?this.pending[o].resolve(this.cleanResult(n)):this.pending[o].reject(u?`${s}: ${u}`:s),delete this.pending[o])}cleanResult(t){const s={...t};return delete s.__reqid,delete s.__success,delete s.__error,Object.keys(s).length?s:null}}class Dt{constructor(t,s){this.editor={openFile:n=>this._rdc.request({type:"SDK_OPEN_FILE",payload:{path:n}}),setCurrentFile:n=>this._rdc.request({type:"SDK_SET_CURRENT_FILE",payload:{path:n}}),setTheme:n=>this._rdc.request({type:"SDK_SET_UI_THEME",payload:{theme:n}}),setView:n=>this._rdc.request({type:"SDK_SET_UI_VIEW",payload:{view:n}}),showSidebar:(n=!0)=>this._rdc.request({type:"SDK_TOGGLE_SIDEBAR",payload:{visible:n}})},this.preview={origin:"",getUrl:()=>this._rdc.request({type:"SDK_GET_PREVIEW_URL",payload:{}}).then(n=>(n==null?void 0:n.url)??null),setUrl:(n="/")=>{if(typeof n!="string"||!n.startsWith("/"))throw new Error(`Invalid argument: expected a path starting with '/', got '${n}'`);return this._rdc.request({type:"SDK_SET_PREVIEW_URL",payload:{path:n}})}},this._rdc=new It(t),Object.defineProperty(this.preview,"origin",{value:typeof s.previewOrigin=="string"?s.previewOrigin:null,writable:!1})}applyFsDiff(t){const s=n=>n!==null&&typeof n=="object";if(!s(t)||!s(t.create))throw new Error("Invalid diff object: expected diff.create to be an object.");if(!Array.isArray(t.destroy))throw new Error("Invalid diff object: expected diff.destroy to be an array.");return this._rdc.request({type:"SDK_APPLY_FS_DIFF",payload:t})}getDependencies(){return this._rdc.request({type:"SDK_GET_DEPS_SNAPSHOT",payload:{}})}getFsSnapshot(){return this._rdc.request({type:"SDK_GET_FS_SNAPSHOT",payload:{}})}}const ee=[];class Tt{constructor(t){this.id=$e(),this.element=t,this.pending=new Promise((s,n)=>{const o=({data:d,ports:m})=>{(d==null?void 0:d.action)==="SDK_INIT_SUCCESS"&&d.id===this.id&&(this.vm=new Dt(m[0],d.payload),s(this.vm),u())},r=()=>{var d;(d=this.element.contentWindow)==null||d.postMessage({action:"SDK_INIT",id:this.id},"*")};function u(){window.clearInterval(l),window.removeEventListener("message",o)}window.addEventListener("message",o),r();let p=0;const l=window.setInterval(()=>{if(this.vm){u();return}if(p>=wt){u(),n("Timeout: Unable to establish a connection with the StackBlitz VM"),ee.forEach((d,m)=>{d.id===this.id&&ee.splice(m,1)});return}p++,r()},yt)}),ee.push(this)}}const Pt=e=>{const t=e instanceof Element?"element":"id";return ee.find(s=>s[t]===e)??null};function Lt(e,t){const s=document.createElement("input");return s.type="hidden",s.name=e,s.value=t,s}function Mt(e){return e.replace(/\[/g,"%5B").replace(/\]/g,"%5D")}function je({template:e,title:t,description:s,dependencies:n,files:o,settings:r}){if(!ve.includes(e)){const d=ve.map(m=>`'${m}'`).join(", ");console.warn(`Unsupported project.template: must be one of ${d}`)}const u=[],p=(d,m,k="")=>{u.push(Lt(d,typeof m=="string"?m:k))};p("project[title]",t),typeof s=="string"&&s.length>0&&p("project[description]",s),p("project[template]",e,"javascript"),n&&(e==="node"?console.warn("Invalid project.dependencies: dependencies must be provided as a 'package.json' file when using the 'node' template."):p("project[dependencies]",JSON.stringify(n))),r&&p("project[settings]",JSON.stringify(r)),Object.entries(o).forEach(([d,m])=>{p(`project[files][${Mt(d)}]`,m)});const l=document.createElement("form");return l.method="POST",l.setAttribute("style","display:none!important;"),l.append(...u),l}function Rt(e,t){const s=je(e);return s.action=ce("/run",t),s.id="sb_run",`<!doctype html>
<html>
<head><title></title></head>
<body>
  ${s.outerHTML}
  <script>document.getElementById('${s.id}').submit();<\/script>
</body>
</html>`}function At(e,t){const s=je(e);s.action=ae("/run",t),s.target=pe(t),document.body.appendChild(s),s.submit(),document.body.removeChild(s)}function te(e){return e!=null&&e.contentWindow?(Pt(e)??new Tt(e)).pending:Promise.reject("Provided element is not an iframe.")}function Nt(e,t){At(e,t)}function zt(e,t){const s=ae(`/edit/${e}`,t),n=pe(t);window.open(s,n)}function Ot(e,t){const s=ae(`/github/${e}`,t),n=pe(t);window.open(s,n)}function Ht(e,t,s){var u;const n=de(e),o=Rt(t,s),r=document.createElement("iframe");return le(n,r,s),(u=r.contentDocument)==null||u.write(o),te(r)}function Ut(e,t,s){const n=de(e),o=document.createElement("iframe");return o.src=ce(`/edit/${t}`,s),le(n,o,s),te(o)}function Bt(e,t,s){const n=de(e),o=document.createElement("iframe");return o.src=ce(`/github/${t}`,s),le(n,o,s),te(o)}const Wt={connect:te,embedGithubProject:Bt,embedProject:Ht,embedProjectId:Ut,openGithubProject:Ot,openProject:Nt,openProjectId:zt};function Vt(e,t,s){const n={"index.html":v["index.html"],"src/App.tsx":v["src/App.tsx"],"src/Demo.tsx":t,"src/main.tsx":v["src/main.tsx"],"src/styles/index.scss":v["src/styles/index.scss"],"src/styles/vendor/bootstrap.scss":v["src/styles/vendor/bootstrap.scss"],"src/styles/vendor/inula-ui.scss":v["src/styles/vendor/inula-ui.scss"],"package.json":Se(e),"tsconfig.json":v["tsconfig.json"],"vite.config.ts":v["vite.config.ts"]};s&&(n["src/styles/index.scss"]=`${v["src/styles/index.scss"]}
${s}`),Wt.openProject({title:e,description:"Demo of Inula UI",template:"node",files:n},{openFile:"Demo.tsx"})}function Xt(e){const{id:t,renderer:s,title:n,description:o,tsxSource:r,scssSource:u}=e,p=F(K(o)),l=K(r),d=u?K(u):void 0,m=xe.useIntl(),k=c.useRef(null),P=F(String.raw`
${"```tsx"}
${l}
${"```"}
`),D=d?F(String.raw`
${"```scss"}
${d}
${"```"}
`):void 0,[L,T]=c.useState("tsx"),[y,w]=c.useState(!1),[A,H]=c.useState(!1),G=Ke().hash===`#${t}`,se=()=>{w(x=>!x)},U=()=>{Qe(L==="tsx"?l:d),H(!0)},z=x=>{x||H(!1)};return Je(()=>{window.location.hash===`#${t}`&&k.current&&k.current.scrollIntoView()}),_("section",{ref:k,id:t,className:Ge("app-demo-box",{"is-active":G}),children:[i("div",{className:"app-demo-box__renderer",children:V.isArray(s)?_("div",{className:"app-demo-box__window",children:[_("div",{className:"app-demo-box__window-header",children:[i("div",{}),i("div",{}),i("div",{}),i("div",{})]}),i("iframe",{src:s[0],title:"demo",height:s[1]})]}):s}),_("div",{className:"app-demo-box__title",children:[i("div",{className:"app-demo-box__title-divider",style:{width:20}}),i("div",{className:"app-demo-box__title-text",children:n.replace("#","")}),i("div",{className:"app-demo-box__title-divider",style:{flexGrow:1}})]}),i("div",{className:"app-demo-box__description",children:q(p)}),_("div",{className:"app-demo-box__toolbar",children:[i(X,{title:m.formatMessage({id:"Open in CodeSandbox"}),children:i(I,{className:"app-demo-box__button",size:18,onClick:()=>{_t(`${document.getElementById("component-route-title").textContent.match(/[a-zA-Z]+/)[0]}`,l,d)},children:i("svg",{viewBox:"64 64 896 896",xmlns:"http://www.w3.org/2000/svg",children:i("path",{d:"M709.6 210l.4-.2h.2L512 96 313.9 209.8h-.2l.7.3L151.5 304v416L512 928l360.5-208V304l-162.9-94zM482.7 843.6L339.6 761V621.4L210 547.8V372.9l272.7 157.3v313.4zM238.2 321.5l134.7-77.8 138.9 79.7 139.1-79.9 135.2 78-273.9 158-274-158zM814 548.3l-128.8 73.1v139.1l-143.9 83V530.4L814 373.1v175.2z"})})})}),i(X,{title:m.formatMessage({id:"Open in Stackblitz"}),children:i(I,{className:"app-demo-box__button",size:18,onClick:()=>{Vt(`${document.getElementById("component-route-title").textContent.match(/[a-zA-Z]+/)[0]}`,l,d)},children:i("svg",{viewBox:"64 64 896 896",xmlns:"http://www.w3.org/2000/svg",children:i("path",{d:"M848 359.3H627.7L825.8 109c4.1-5.3.4-13-6.3-13H436c-2.8 0-5.5 1.5-6.9 4L170 547.5c-3.1 5.3.7 12 6.9 12h174.4l-89.4 357.6c-1.9 7.8 7.5 13.3 13.3 7.7L853.5 373c5.2-4.9 1.7-13.7-5.5-13.7zM378.2 732.5l60.3-241H281.1l189.6-327.4h224.6L487 427.4h211L378.2 732.5z"})})})}),i(X,{title:m.formatMessage({id:A?"Copied!":"Copy code"}),afterVisibleChange:z,children:i("div",{className:"app-demo-box__button",onClick:U,children:A?i(I,{size:18,theme:"success",children:i(st,{})}):i(I,{size:18,children:i(rt,{})})})}),i(X,{title:m.formatMessage({id:y?"Hide code":"Show code"}),children:i(I,{className:"app-demo-box__button",size:18,onClick:se,children:i("svg",{viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg",children:y?i("path",{d:"M1018.645 531.298c8.635-18.61 4.601-41.42-11.442-55.864l-205.108-184.68c-19.7-17.739-50.05-16.148-67.789 3.552-17.738 19.7-16.148 50.051 3.553 67.79l166.28 149.718-167.28 150.62c-19.7 17.738-21.291 48.088-3.553 67.789 17.739 19.7 48.089 21.291 67.79 3.553l205.107-184.68a47.805 47.805 0 0 0 12.442-17.798zM119.947 511.39l166.28-149.719c19.7-17.738 21.29-48.088 3.552-67.789-17.738-19.7-48.088-21.291-67.789-3.553L16.882 475.01C.84 489.456-3.194 512.264 5.44 530.874a47.805 47.805 0 0 0 12.442 17.798l205.108 184.68c19.7 17.739 50.05 16.148 67.79-3.552 17.738-19.7 16.147-50.051-3.553-67.79l-167.28-150.62zm529.545-377.146c24.911 9.066 37.755 36.61 28.688 61.522L436.03 861.068c-9.067 24.911-36.611 37.755-61.522 28.688-24.911-9.066-37.755-36.61-28.688-61.522l242.15-665.302c9.067-24.911 36.611-37.755 61.522-28.688z"}):i("path",{d:"M1018.645 531.298c8.635-18.61 4.601-41.42-11.442-55.864l-205.108-184.68c-19.7-17.739-50.05-16.148-67.789 3.552-17.738 19.7-16.148 50.051 3.553 67.79l166.28 149.718-167.28 150.62c-19.7 17.738-21.291 48.088-3.553 67.789 17.739 19.7 48.089 21.291 67.79 3.553l205.107-184.68a47.805 47.805 0 0 0 12.442-17.798zM119.947 511.39l166.28-149.719c19.7-17.738 21.29-48.088 3.552-67.789-17.738-19.7-48.088-21.291-67.789-3.553L16.882 475.01C.84 489.456-3.194 512.264 5.44 530.874a47.805 47.805 0 0 0 12.442 17.798l205.108 184.68c19.7 17.739 50.05 16.148 67.79-3.552 17.738-19.7 16.147-50.051-3.553-67.79l-167.28-150.62z"})})})})]}),y&&_("div",{className:"app-demo-box__code",children:[!D&&i("div",{children:q(P)}),D&&i(ot,{styleOverrides:{tabs__tabpanel:{style:{margin:0}}},list:["tsx","scss"].map(x=>({id:x,title:x,panel:i("div",{children:q(x==="tsx"?P:D)})})),active:L,size:"small",center:!0,onActiveChange:x=>{T(x)}})]})]})}const Ft="/assets/compose-d10d9fb4.png",qt="/assets/virtual-scroll-fe1c26ec.png";function Kt(e){const{title:t,subtitle:s,description:n,aria:o,compose:r,virtualScroll:u,api:p,demos:l,links:d}=e,m=F(K(n)),k=F(K(p)),[P,D]=(()=>{if(o){let y=o;const w=o.endsWith("!");return w&&(y=y.slice(0,-1)),y=y.startsWith("http")?y:`https://www.w3.org/WAI/ARIA/apg/patterns/${y}/`,[y,w]}return[]})(),L=xe.useIntl(),T=Ee("language");return c.useEffect(()=>{document.title=t+(T.value!=="en-US"?` ${s}`:"")+" - Inula UI"},[T.value,s,t]),_(Ye,{links:d,children:[_("h1",{id:"component-route-title",className:"app-h app-h--1",children:[t,T.value!=="en-US"&&i("span",{className:"app-component-route__subtitle",children:s})]}),_("ul",{className:"app-component-route__tag-list",children:[P&&i("li",{children:_("a",{className:"app-component-route__tag-link",href:P,target:"_blank",rel:"noreferrer",children:[i(I,{size:24,children:i("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:_("g",{children:[i("path",{d:"M6.92 6.1l2.33 7.99 2.32-8h6.3v.8l-2.37 4.14c.83.27 1.46.76 1.89 1.47.43.71.64 1.55.64 2.51 0 1.2-.31 2.2-.94 3a2.93 2.93 0 01-2.42 1.22 2.9 2.9 0 01-1.96-.72 4.25 4.25 0 01-1.23-1.96l1.31-.55c.2.5.45.9.76 1.18.32.28.69.43 1.12.43.44 0 .82-.26 1.13-.76.31-.51.47-1.12.47-1.84 0-.79-.17-1.4-.5-1.83-.38-.5-.99-.76-1.81-.76h-.64v-.78l2.24-3.92h-2.7l-.16.26-3.3 11.25h-.15l-2.4-8.14-2.41 8.14h-.16L.43 6.1H2.1l2.33 7.99L6 8.71 5.24 6.1h1.68z",fill:"#005A9C"}),i("g",{children:i("path",{d:"M23.52 6.25l.28 1.62-.98 1.8s-.38-.76-1.01-1.19c-.53-.35-.87-.43-1.41-.33-.7.14-1.48.93-1.82 1.9-.41 1.18-.42 1.74-.43 2.26a4.9 4.9 0 00.11 1.33s-.6-1.06-.59-2.61c0-1.1.19-2.11.72-3.1.47-.87 1.17-1.4 1.8-1.45.63-.07 1.14.23 1.53.55.42.33.83 1.07.83 1.07l.97-1.85zM23.64 15.4s-.43.75-.7 1.04c-.27.28-.76.79-1.36 1.04-.6.25-.91.3-1.5.25a3.03 3.03 0 01-1.34-.52 5.08 5.08 0 01-1.67-2.04s.24.75.39 1.07c.09.18.36.74.74 1.23a3.5 3.5 0 002.1 1.42c1.04.18 1.76-.27 1.94-.38a5.32 5.32 0 001.4-1.43c.1-.14.25-.43.25-.43l-.25-1.25z"})})]})})}),i("span",{children:"WAI-ARIA"}),D&&i(I,{theme:"warning",children:i(et,{})})]})}),r&&i("li",{children:_(ge,{className:"app-component-route__tag-link",to:"/components/Compose",children:[i("img",{src:Ft,alt:"Compose",width:20,height:20}),i("span",{children:"Compose"})]})}),u&&i("li",{children:_(ge,{className:"app-component-route__tag-link",to:"/components/VirtualScroll",children:[i("img",{src:qt,alt:"VirtualScroll",width:16,height:16}),i("span",{children:"VirtualScroll"})]})})]}),i("section",{children:q(m)}),i("h2",{id:"component-route-examples",className:"app-h app-h--2",children:L.formatMessage({id:"Examples"})}),i("section",{"data-demo":t,children:l}),i("section",{children:q(k)})]})}function Qt(e){const t=Ee("language");return c.createElement(Kt,e[t.value])}export{Xt as D,Qt as R,tt as S,ot as T,et as a,st as b,Xe as c};
