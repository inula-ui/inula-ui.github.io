import{e as a,u as Re,a as Le,b as Ne,y as Ae,c as Me,d as ze,L as He,w as Oe,p as fe,k as Ue,f as v,m as Be,j as i,I as T,O as We,t as Fe,l as F,a0 as V,a1 as xe,a2 as Ve,a3 as qe,a4 as q,z as oe,a5 as Ee,a6 as ge}from"./index-ba6b8087.js";import{u as Ke}from"./getOffsetToRoot-345a52d3.js";import{d as K,M as Ge}from"./MdRoute-fc2b8f79.js";import{S as Je}from"./add-c821f3f0.js";function Ye(e){return{x:e.scrollWidth<=Math.ceil(e.scrollLeft)+e.clientWidth,y:e.scrollHeight<=Math.ceil(e.scrollTop)+e.clientHeight}}function Xe(e){if(navigator.clipboard)navigator.clipboard.writeText(e);else{let t=document.createElement("textarea");t.style.cssText="position:fixed;opacity:0;",t.value=e,document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t),t=null}}const Ze=e=>a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",...e},a.createElement("path",{d:"M12 5.99 19.53 19H4.47L12 5.99M12 2 1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"})),Qe=e=>a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",...e},a.createElement("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"})),et=e=>a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",...e},a.createElement("path",{d:"M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"})),tt={tabs:"^tabs","tabs--wrap":"^tabs--wrap","tabs--slider":"^tabs--slider","tabs--top":"^tabs--top","tabs--right":"^tabs--right","tabs--bottom":"^tabs--bottom","tabs--left":"^tabs--left","tabs--small":"^tabs--small","tabs--medium":"^tabs--medium","tabs--large":"^tabs--large","tabs--center":"^tabs--center","tabs__tablist-wrapper":"^tabs__tablist-wrapper",tabs__tablist:"^tabs__tablist",tabs__tab:"^tabs__tab","tabs__tab.is-active":"is-active","tabs__tab.is-disabled":"is-disabled","tabs__tab--first":"^tabs__tab--first","tabs__tab--last":"^tabs__tab--last",tabs__close:"^tabs__close","tabs__button-container":"^tabs__button-container",tabs__button:"^tabs__button","tabs__button.is-end":"is-end","tabs__button--more":"^tabs__button--more","tabs__button--add":"^tabs__button--add",tabs__indicator:"^tabs__indicator","tabs__wrap-indicator":"^tabs__wrap-indicator","tabs__slider-indicator":"^tabs__slider-indicator",tabs__tabpanel:"^tabs__tabpanel"};function st(e,t){const{styleOverrides:s,styleProvider:n,list:o,active:m,defaultActive:f,pattern:d,placement:c="top",center:l=!1,size:h="medium",addible:k=!1,onActiveChange:P,onAddClick:j,onClose:R,...I}=Re("Tabs",e),_=Le(),y=Ne(tt,{tabs:n==null?void 0:n.tabs},s),{t:A}=Ae(),O=Me(),M=r=>`${_}-tabs-tab-${r}-${O}`,G=r=>`${_}-tabs-panel-${r}-${O}`,te=a.useRef(null),U=a.useRef(null),z=a.useRef(null),w=a.useRef(null),J=a.useRef(null),[ue,je]=a.useState(!1),[Ie,De]=a.useState([]),[Te,Pe]=a.useState(!1),me=h==="small"?16:h==="large"?20:18,B=c==="top"||c==="bottom",[Y,se]=ze(f??(()=>{for(const r of o)if(!r.disabled)return r.id;return null}),m,r=>{P&&P(r,He(o,p=>p.id===r))}),X=()=>{const r=U.current;if(r){const p=B?r.scrollWidth>r.clientWidth:r.scrollHeight>r.clientHeight;if(je(p),Pe(Ye(r)[B?"x":"y"]),p){const g=r.getBoundingClientRect(),E=[];o.forEach(C=>{var L,N;const W=document.getElementById(M(C.id));if(W){const x=W.getBoundingClientRect();B?(x.right+(((L=w.current)==null?void 0:L.offsetWidth)??0)>g.right||x.left<g.left)&&E.push(C):(x.bottom+(((N=w.current)==null?void 0:N.offsetHeight)??0)>g.bottom||x.top<g.top)&&E.push(C)}}),De(E)}}};Oe(()=>{X()},[]),fe(U,X),fe(z,X);const ne=Ue(()=>{if(z.current&&J.current){const r=z.current.getBoundingClientRect();for(const p of o)if(p.id===Y){const g=document.getElementById(M(p.id));if(g){const E=g.getBoundingClientRect();B?J.current.style.cssText=`left:${E.left-r.left}px;width:${E.width}px;opacity:1;`:J.current.style.cssText=`top:${E.top-r.top}px;opacity:1;`}}}});return a.useEffect(()=>{ne()}),a.useImperativeHandle(t,()=>({updateIndicator:ne}),[ne]),v("div",{...I,...Be(y("tabs",`tabs--${c}`,`tabs--${h}`,{[`tabs--${d}`]:d,"tabs--center":l}),{className:I.className,style:I.style}),ref:te,children:[i("div",{...y("tabs__tablist-wrapper"),ref:U,onScroll:()=>{X()},children:v("div",{...y("tabs__tablist"),ref:z,role:"tablist","aria-orientation":B?"horizontal":"vertical",children:[o.map((r,p)=>{const{id:g,title:E,disabled:C,closable:W}=r,L=g===Y,N=(b,u=p)=>{for(let $=b?u+1:u-1,be=0;be<o.length;b?$++:$--,be++){const ie=F.nth(o,$%o.length);if(ie&&!ie.disabled)return ie}},x=b=>{if(b){se(b.id);const u=document.getElementById(M(b.id));u&&u.focus()}},he=()=>{if(L){let b=!1;for(let u=p+1;u<o.length;u++){const $=F.nth(o,u);if($&&!$.disabled){b=!0,x($);break}}if(!b)for(let u=p-1;u>=0;u--){const $=F.nth(o,u);if($&&!$.disabled){x($);break}}}R==null||R(g,r)};return a.createElement("div",{...y("tabs__tab",{"tabs__tab.is-active":L,"tabs__tab.is-disabled":C,"tabs__tab--first":p===0,"tabs__tab--last":p===o.length-1}),key:g,id:M(g),tabIndex:L&&!C?0:-1,role:"tab","aria-controls":G(g),"aria-selected":L,"aria-disabled":C,onClick:()=>{se(g)},onKeyDown:b=>{switch(b.code){case"Delete":b.preventDefault(),W&&he();break;case"ArrowLeft":b.preventDefault(),(c==="top"||c==="bottom")&&x(N(!1));break;case"ArrowRight":b.preventDefault(),(c==="top"||c==="bottom")&&x(N(!0));break;case"ArrowUp":b.preventDefault(),(c==="left"||c==="right")&&x(N(!1));break;case"ArrowDown":b.preventDefault(),(c==="left"||c==="right")&&x(N(!0));break;case"Home":b.preventDefault();for(const u of o)if(!u.disabled){x(u);break}break;case"End":b.preventDefault();for(let u=o.length-1;u>=0;u--)if(!o[u].disabled){x(o[u]);break}break}}},E,!C&&W&&i("div",{...y("tabs__close"),role:"button","aria-label":A("Close"),onClick:b=>{b.stopPropagation(),he()},children:i(T,{children:i(We,{})})}))}),(ue||k)&&v("div",{...y("tabs__button-container"),ref:w,children:[ue&&i(Fe,{list:Ie.map(r=>{const{id:p,title:g,dropdownRender:E,disabled:C}=r;return{id:p,title:F.isUndefined(E)?g:E,type:"item",disabled:C,style:p===Y?{color:`var(--${_}-color-primary)`}:void 0}}),placement:c==="left"?"bottom-left":"bottom-right",onClick:r=>{se(r)},children:i("div",{...y("tabs__button","tabs__button--more",{"tabs__button.is-end":Te}),"aria-label":A("More"),children:i(T,{size:me,children:i(Qe,{})})})}),k&&i("div",{...y("tabs__button","tabs__button--add"),role:"button","aria-label":A("Add"),onClick:()=>{j==null||j()},children:i(T,{size:me,children:i(Je,{})})})]}),i("div",{...y(d==="wrap"?"tabs__wrap-indicator":d==="slider"?"tabs__slider-indicator":"tabs__indicator"),ref:J})]})}),o.map(r=>{const{id:p,panel:g}=r;return a.createElement("div",{...y("tabs__tabpanel"),key:p,id:G(p),tabIndex:0,hidden:p!==Y,role:"tabpanel","aria-labelledby":M(p)},g)})]})}const nt=a.forwardRef(st),it=e=>a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",...e},a.createElement("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"})),D={"index.html":`<!DOCTYPE html>
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
`},ot="node_modules/lerna/schemas/lerna-schema.json",rt=["libs/components","libs/hooks","libs/utils","libs/themes"],at="0.0.2",ct={version:{conventionalCommits:!0,message:"chore: release %v",createRelease:"github",forcePublish:!0,exact:!0},publish:{yes:!0}},Z={$schema:ot,packages:rt,version:at,command:ct},lt="@inula-ui/source",dt="0.0.0",pt="MIT",ut={"build:affected":"nx affected -t build","lint:affected":"nx affected -t lint","lint:style":"stylelint **/*.{css,scss,html,md}",prepare:"husky install && ts-node -P ./tools/tsconfig.tools.json ./tools/scripts/husky.ts",prepublishOnly:"nx run-many -t build -p components hooks utils themes","test:affected":"nx affected -t test","util:prettier":"prettier . --write","util:sort-package-json":"sort-package-json 'package.json' 'libs/*/package.json'",version:"prettier lerna.json --write"},mt={"@babel/core":"^7.22.17","@babel/preset-react":"^7.22.15","@commitlint/cli":"^17.7.1","@commitlint/config-conventional":"^17.7.0","@material-design-icons/svg":"^0.14.12","@nx/cypress":"17.0.2","@nx/devkit":"17.0.2","@nx/eslint":"17.0.2","@nx/eslint-plugin":"17.0.2","@nx/jest":"17.0.2","@nx/js":"17.0.2","@nx/plugin":"17.0.2","@nx/react":"17.0.2","@nx/vite":"17.0.2","@nx/workspace":"17.0.2","@stackblitz/sdk":"^1.9.0","@swc-node/register":"1.6.8","@swc/cli":"~0.1.62","@swc/core":"1.3.95","@swc/helpers":"0.5.3","@testing-library/react":"14.0.0","@types/fs-extra":"^11.0.1","@types/lodash":"^4.14.198","@types/node":"18.14.2","@types/react":"^17.0.76","@types/react-dom":"^17.0.25","@types/yaml-front-matter":"^4.1.0","@typescript-eslint/eslint-plugin":"5.62.0","@typescript-eslint/parser":"5.62.0","@vitejs/plugin-react":"~4.0.4","@vitest/coverage-c8":"~0.32.4","@vitest/ui":"~0.32.4",bootstrap:"^5.3.2",codesandbox:"^2.2.3",cypress:"^13.0.0",dayjs:"^1.11.9",eslint:"8.46.0","eslint-config-prettier":"9.0.0","eslint-plugin-cypress":"2.14.0","eslint-plugin-import":"2.27.5","eslint-plugin-jsx-a11y":"6.7.1","eslint-plugin-markdown":"^3.0.1","eslint-plugin-prettier":"^5.0.0","eslint-plugin-react":"7.32.2","eslint-plugin-react-hooks":"4.6.0","eslint-plugin-react-refresh":"^0.4.3","fs-extra":"^11.1.1","highlight.js":"^11.8.0","html-react-parser":"^5.1.8",husky:"^8.0.0",i18next:"^23.5.1",immer:"^10.0.2","inula-intl":"^0.0.5","inula-router":"^0.0.4",jsdom:"~22.1.0",jss:"^10.10.0","jss-preset-default":"^10.10.0",lerna:"^8.0.2",lodash:"^4.17.21",marked:"^6.0.0","marked-highlight":"^2.0.6",nx:"17.0.2",openinula:"0.1.3","postcss-html":"^1.5.0","postcss-markdown":"^1.2.0",prettier:"^3.0.3",rfs:"^10.0.0",rxjs:"^7.8.1","rxjs-for-await":"^1.0.0",sass:"^1.66.1","sort-package-json":"^2.5.1",stylelint:"^15.10.3","stylelint-config-recess-order":"^4.3.0","stylelint-config-recommended-scss":"^12.0.0","stylelint-config-standard":"^34.0.0","stylelint-scss":"^5.1.0",surge:"^0.23.1","ts-node":"^10.9.1",tslib:"^2.6.2",typescript:"~5.1.3",verdaccio:"^5.0.4",vite:"~4.3.9","vite-plugin-svgr":"^4.2.0","vite-tsconfig-paths":"~4.2.1",vitest:"~0.32.4","yaml-front-matter":"^4.1.1"},ht={node:"16.x || 18.x || 20.x",npm:"Please use pnpm instead of NPM to install dependencies",pnpm:"8.x"},bt={includedScripts:[]},ft={patchedDependencies:{"@nx/js@17.0.2":"patches/@nx__js@17.0.2.patch"}},S={name:lt,version:dt,private:!0,license:pt,scripts:ut,devDependencies:mt,engines:ht,nx:bt,pnpm:ft};function gt(e){return`{
  "name": "${e}",
  "version": "0.0.0",
  "private": true,
  "main": "src/index.tsx",
  "dependencies": {
    "@inula-ui/components": "${Z.version}",
    "@inula-ui/hooks": "${Z.version}",
    "@inula-ui/themes": "${Z.version}",
    "@inula-ui/utils": "${Z.version}",
    "bootstrap": "${S.devDependencies.bootstrap}",
    "dayjs": "${S.devDependencies.dayjs}",
    "immer": "${S.devDependencies.immer}",
    "openinula": "${S.devDependencies.openinula}",
    "tslib": "${S.devDependencies.tslib}"
  },
  "devDependencies": {
    "@types/react": "${S.devDependencies["@types/react"]}",
    "@types/react-dom": "${S.devDependencies["@types/react-dom"]}",
    "@vitejs/plugin-react": "${S.devDependencies["@vitejs/plugin-react"]}",
    "sass": "${S.devDependencies.sass}",
    "typescript": "${S.devDependencies.typescript}",
    "vite": "${S.devDependencies.vite}",
    "vite-plugin-svgr": "${S.devDependencies["vite-plugin-svgr"]}"
  },
  "scripts": {
    "start": "vite",
    "build": "vite build"
  }
}
`}const vt=500,_t=20,yt=300,wt="https://stackblitz.com",ve=["angular-cli","create-react-app","html","javascript","node","polymer","typescript","vue"],xt=["project","search","ports","settings"],Et=["light","dark"],St=["editor","preview"],_e={clickToLoad:e=>H("ctl",e),devToolsHeight:e=>ye("devtoolsheight",e),forceEmbedLayout:e=>H("embed",e),hideDevTools:e=>H("hidedevtools",e),hideExplorer:e=>H("hideExplorer",e),hideNavigation:e=>H("hideNavigation",e),openFile:e=>we("file",e),showSidebar:e=>$t("showSidebar",e),sidebarView:e=>re("sidebarView",e,xt),startScript:e=>we("startScript",e),terminalHeight:e=>ye("terminalHeight",e),theme:e=>re("theme",e,Et),view:e=>re("view",e,St),zenMode:e=>H("zenMode",e)};function Se(e={}){const t=Object.entries(e).map(([s,n])=>n!=null&&_e.hasOwnProperty(s)?_e[s](n):"").filter(Boolean);return t.length?`?${t.join("&")}`:""}function H(e,t){return t===!0?`${e}=1`:""}function $t(e,t){return typeof t=="boolean"?`${e}=${t?"1":"0"}`:""}function ye(e,t){if(typeof t=="number"&&!Number.isNaN(t)){const s=Math.min(100,Math.max(0,t));return`${e}=${encodeURIComponent(Math.round(s))}`}return""}function re(e,t="",s=[]){return s.includes(t)?`${e}=${encodeURIComponent(t)}`:""}function we(e,t){return(Array.isArray(t)?t:[t]).filter(n=>typeof n=="string"&&n.trim()!=="").map(n=>`${e}=${encodeURIComponent(n)}`).join("&")}function $e(){return Math.random().toString(36).slice(2,6)+Math.random().toString(36).slice(2,6)}function ae(e,t){return`${ke(t)}${e}${Se(t)}`}function ce(e,t){const s={forceEmbedLayout:!0};return t&&typeof t=="object"&&Object.assign(s,t),`${ke(s)}${e}${Se(s)}`}function ke(e={}){return(typeof e.origin=="string"?e.origin:wt).replace(/\/$/,"")}function le(e,t,s){if(!t||!e||!e.parentNode)throw new Error("Invalid Element");e.id&&(t.id=e.id),e.className&&(t.className=e.className),kt(t,s),e.replaceWith(t)}function de(e){if(typeof e=="string"){const t=document.getElementById(e);if(!t)throw new Error(`Could not find element with id '${e}'`);return t}else if(e instanceof HTMLElement)return e;throw new Error(`Invalid element: ${e}`)}function pe(e){return e&&e.newWindow===!1?"_self":"_blank"}function kt(e,t={}){const s=Object.hasOwnProperty.call(t,"height")?`${t.height}`:`${yt}`,n=Object.hasOwnProperty.call(t,"width")?`${t.width}`:void 0;e.setAttribute("height",s),n?e.setAttribute("width",n):e.setAttribute("style","width:100%;")}class Ct{constructor(t){this.pending={},this.port=t,this.port.onmessage=this.messageListener.bind(this)}request({type:t,payload:s}){return new Promise((n,o)=>{const m=$e();this.pending[m]={resolve:n,reject:o},this.port.postMessage({type:t,payload:{...s,__reqid:m}})})}messageListener(t){var d;if(typeof((d=t.data.payload)==null?void 0:d.__reqid)!="string")return;const{type:s,payload:n}=t.data,{__reqid:o,__success:m,__error:f}=n;this.pending[o]&&(m?this.pending[o].resolve(this.cleanResult(n)):this.pending[o].reject(f?`${s}: ${f}`:s),delete this.pending[o])}cleanResult(t){const s={...t};return delete s.__reqid,delete s.__success,delete s.__error,Object.keys(s).length?s:null}}class jt{constructor(t,s){this.editor={openFile:n=>this._rdc.request({type:"SDK_OPEN_FILE",payload:{path:n}}),setCurrentFile:n=>this._rdc.request({type:"SDK_SET_CURRENT_FILE",payload:{path:n}}),setTheme:n=>this._rdc.request({type:"SDK_SET_UI_THEME",payload:{theme:n}}),setView:n=>this._rdc.request({type:"SDK_SET_UI_VIEW",payload:{view:n}}),showSidebar:(n=!0)=>this._rdc.request({type:"SDK_TOGGLE_SIDEBAR",payload:{visible:n}})},this.preview={origin:"",getUrl:()=>this._rdc.request({type:"SDK_GET_PREVIEW_URL",payload:{}}).then(n=>(n==null?void 0:n.url)??null),setUrl:(n="/")=>{if(typeof n!="string"||!n.startsWith("/"))throw new Error(`Invalid argument: expected a path starting with '/', got '${n}'`);return this._rdc.request({type:"SDK_SET_PREVIEW_URL",payload:{path:n}})}},this._rdc=new Ct(t),Object.defineProperty(this.preview,"origin",{value:typeof s.previewOrigin=="string"?s.previewOrigin:null,writable:!1})}applyFsDiff(t){const s=n=>n!==null&&typeof n=="object";if(!s(t)||!s(t.create))throw new Error("Invalid diff object: expected diff.create to be an object.");if(!Array.isArray(t.destroy))throw new Error("Invalid diff object: expected diff.destroy to be an array.");return this._rdc.request({type:"SDK_APPLY_FS_DIFF",payload:t})}getDependencies(){return this._rdc.request({type:"SDK_GET_DEPS_SNAPSHOT",payload:{}})}getFsSnapshot(){return this._rdc.request({type:"SDK_GET_FS_SNAPSHOT",payload:{}})}}const Q=[];class It{constructor(t){this.id=$e(),this.element=t,this.pending=new Promise((s,n)=>{const o=({data:l,ports:h})=>{(l==null?void 0:l.action)==="SDK_INIT_SUCCESS"&&l.id===this.id&&(this.vm=new jt(h[0],l.payload),s(this.vm),f())},m=()=>{var l;(l=this.element.contentWindow)==null||l.postMessage({action:"SDK_INIT",id:this.id},"*")};function f(){window.clearInterval(c),window.removeEventListener("message",o)}window.addEventListener("message",o),m();let d=0;const c=window.setInterval(()=>{if(this.vm){f();return}if(d>=_t){f(),n("Timeout: Unable to establish a connection with the StackBlitz VM"),Q.forEach((l,h)=>{l.id===this.id&&Q.splice(h,1)});return}d++,m()},vt)}),Q.push(this)}}const Dt=e=>{const t=e instanceof Element?"element":"id";return Q.find(s=>s[t]===e)??null};function Tt(e,t){const s=document.createElement("input");return s.type="hidden",s.name=e,s.value=t,s}function Pt(e){return e.replace(/\[/g,"%5B").replace(/\]/g,"%5D")}function Ce({template:e,title:t,description:s,dependencies:n,files:o,settings:m}){if(!ve.includes(e)){const l=ve.map(h=>`'${h}'`).join(", ");console.warn(`Unsupported project.template: must be one of ${l}`)}const f=[],d=(l,h,k="")=>{f.push(Tt(l,typeof h=="string"?h:k))};d("project[title]",t),typeof s=="string"&&s.length>0&&d("project[description]",s),d("project[template]",e,"javascript"),n&&(e==="node"?console.warn("Invalid project.dependencies: dependencies must be provided as a 'package.json' file when using the 'node' template."):d("project[dependencies]",JSON.stringify(n))),m&&d("project[settings]",JSON.stringify(m)),Object.entries(o).forEach(([l,h])=>{d(`project[files][${Pt(l)}]`,h)});const c=document.createElement("form");return c.method="POST",c.setAttribute("style","display:none!important;"),c.append(...f),c}function Rt(e,t){const s=Ce(e);return s.action=ce("/run",t),s.id="sb_run",`<!doctype html>
<html>
<head><title></title></head>
<body>
  ${s.outerHTML}
  <script>document.getElementById('${s.id}').submit();<\/script>
</body>
</html>`}function Lt(e,t){const s=Ce(e);s.action=ae("/run",t),s.target=pe(t),document.body.appendChild(s),s.submit(),document.body.removeChild(s)}function ee(e){return e!=null&&e.contentWindow?(Dt(e)??new It(e)).pending:Promise.reject("Provided element is not an iframe.")}function Nt(e,t){Lt(e,t)}function At(e,t){const s=ae(`/edit/${e}`,t),n=pe(t);window.open(s,n)}function Mt(e,t){const s=ae(`/github/${e}`,t),n=pe(t);window.open(s,n)}function zt(e,t,s){var f;const n=de(e),o=Rt(t,s),m=document.createElement("iframe");return le(n,m,s),(f=m.contentDocument)==null||f.write(o),ee(m)}function Ht(e,t,s){const n=de(e),o=document.createElement("iframe");return o.src=ce(`/edit/${t}`,s),le(n,o,s),ee(o)}function Ot(e,t,s){const n=de(e),o=document.createElement("iframe");return o.src=ce(`/github/${t}`,s),le(n,o,s),ee(o)}const Ut={connect:ee,embedGithubProject:Ot,embedProject:zt,embedProjectId:Ht,openGithubProject:Mt,openProject:Nt,openProjectId:At};function Bt(e,t,s){const n={"index.html":D["index.html"],"src/App.tsx":D["src/App.tsx"],"src/Demo.tsx":t,"src/main.tsx":D["src/main.tsx"],"src/styles/index.scss":D["src/styles/index.scss"],"src/styles/vendor/bootstrap.scss":D["src/styles/vendor/bootstrap.scss"],"src/styles/vendor/inula-ui.scss":D["src/styles/vendor/inula-ui.scss"],"package.json":gt(e),"tsconfig.json":D["tsconfig.json"],"vite.config.ts":D["vite.config.ts"]};s&&(n["src/styles/index.scss"]=`${D["src/styles/index.scss"]}
${s}`),Ut.openProject({title:e,description:"Demo of Inula UI",template:"node",files:n},{openFile:"Demo.tsx"})}function Yt(e){const{id:t,renderer:s,title:n,description:o,tsxSource:m,scssSource:f}=e,d=V(K(o)),c=K(m),l=f?K(f):void 0,h=xe.useIntl(),k=a.useRef(null),P=V(String.raw`
${"```tsx"}
${c}
${"```"}
`),j=l?V(String.raw`
${"```scss"}
${l}
${"```"}
`):void 0,[R,I]=a.useState("tsx"),[_,y]=a.useState(!1),[A,O]=a.useState(!1),G=Ve().hash===`#${t}`,te=()=>{y(w=>!w)},U=()=>{Xe(R==="tsx"?c:l),O(!0)},z=w=>{w||O(!1)};return Ke(()=>{window.location.hash===`#${t}`&&k.current&&k.current.scrollIntoView()}),v("section",{ref:k,id:t,className:qe("app-demo-box",{"is-active":G}),children:[i("div",{className:"app-demo-box__renderer",children:F.isArray(s)?v("div",{className:"app-demo-box__window",children:[v("div",{className:"app-demo-box__window-header",children:[i("div",{}),i("div",{}),i("div",{}),i("div",{})]}),i("iframe",{src:s[0],title:"demo",height:s[1]})]}):s}),v("div",{className:"app-demo-box__title",children:[i("div",{className:"app-demo-box__title-divider",style:{width:20}}),i("div",{className:"app-demo-box__title-text",children:n.replace("#","")}),i("div",{className:"app-demo-box__title-divider",style:{flexGrow:1}})]}),i("div",{className:"app-demo-box__description",children:q(d)}),v("div",{className:"app-demo-box__toolbar",children:[!1,i(oe,{title:h.formatMessage({id:"Open in Stackblitz"}),children:i(T,{className:"app-demo-box__button",size:18,onClick:()=>{Bt(`${document.getElementById("component-route-title").textContent.match(/[a-zA-Z]+/)[0]}`,c,l)},children:i("svg",{viewBox:"64 64 896 896",xmlns:"http://www.w3.org/2000/svg",children:i("path",{d:"M848 359.3H627.7L825.8 109c4.1-5.3.4-13-6.3-13H436c-2.8 0-5.5 1.5-6.9 4L170 547.5c-3.1 5.3.7 12 6.9 12h174.4l-89.4 357.6c-1.9 7.8 7.5 13.3 13.3 7.7L853.5 373c5.2-4.9 1.7-13.7-5.5-13.7zM378.2 732.5l60.3-241H281.1l189.6-327.4h224.6L487 427.4h211L378.2 732.5z"})})})}),i(oe,{title:h.formatMessage({id:A?"Copied!":"Copy code"}),afterVisibleChange:z,children:i("div",{className:"app-demo-box__button",onClick:U,children:A?i(T,{size:18,theme:"success",children:i(et,{})}):i(T,{size:18,children:i(it,{})})})}),i(oe,{title:h.formatMessage({id:_?"Hide code":"Show code"}),children:i(T,{className:"app-demo-box__button",size:18,onClick:te,children:i("svg",{viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg",children:_?i("path",{d:"M1018.645 531.298c8.635-18.61 4.601-41.42-11.442-55.864l-205.108-184.68c-19.7-17.739-50.05-16.148-67.789 3.552-17.738 19.7-16.148 50.051 3.553 67.79l166.28 149.718-167.28 150.62c-19.7 17.738-21.291 48.088-3.553 67.789 17.739 19.7 48.089 21.291 67.79 3.553l205.107-184.68a47.805 47.805 0 0 0 12.442-17.798zM119.947 511.39l166.28-149.719c19.7-17.738 21.29-48.088 3.552-67.789-17.738-19.7-48.088-21.291-67.789-3.553L16.882 475.01C.84 489.456-3.194 512.264 5.44 530.874a47.805 47.805 0 0 0 12.442 17.798l205.108 184.68c19.7 17.739 50.05 16.148 67.79-3.552 17.738-19.7 16.147-50.051-3.553-67.79l-167.28-150.62zm529.545-377.146c24.911 9.066 37.755 36.61 28.688 61.522L436.03 861.068c-9.067 24.911-36.611 37.755-61.522 28.688-24.911-9.066-37.755-36.61-28.688-61.522l242.15-665.302c9.067-24.911 36.611-37.755 61.522-28.688z"}):i("path",{d:"M1018.645 531.298c8.635-18.61 4.601-41.42-11.442-55.864l-205.108-184.68c-19.7-17.739-50.05-16.148-67.789 3.552-17.738 19.7-16.148 50.051 3.553 67.79l166.28 149.718-167.28 150.62c-19.7 17.738-21.291 48.088-3.553 67.789 17.739 19.7 48.089 21.291 67.79 3.553l205.107-184.68a47.805 47.805 0 0 0 12.442-17.798zM119.947 511.39l166.28-149.719c19.7-17.738 21.29-48.088 3.552-67.789-17.738-19.7-48.088-21.291-67.789-3.553L16.882 475.01C.84 489.456-3.194 512.264 5.44 530.874a47.805 47.805 0 0 0 12.442 17.798l205.108 184.68c19.7 17.739 50.05 16.148 67.79-3.552 17.738-19.7 16.147-50.051-3.553-67.79l-167.28-150.62z"})})})})]}),_&&v("div",{className:"app-demo-box__code",children:[!j&&i("div",{children:q(P)}),j&&i(nt,{styleOverrides:{tabs__tabpanel:{style:{margin:0}}},list:["tsx","scss"].map(w=>({id:w,title:w,panel:i("div",{children:q(w==="tsx"?P:j)})})),active:R,size:"small",center:!0,onActiveChange:w=>{I(w)}})]})]})}const Wt="/assets/compose-d10d9fb4.png",Ft="/assets/virtual-scroll-fe1c26ec.png";function Vt(e){const{title:t,subtitle:s,description:n,aria:o,compose:m,virtualScroll:f,api:d,demos:c,links:l}=e,h=V(K(n)),k=V(K(d)),[P,j]=(()=>{if(o){let _=o;const y=o.endsWith("!");return y&&(_=_.slice(0,-1)),_=_.startsWith("http")?_:`https://www.w3.org/WAI/ARIA/apg/patterns/${_}/`,[_,y]}return[]})(),R=xe.useIntl(),I=Ee("language");return a.useEffect(()=>{document.title=t+(I.value!=="en-US"?` ${s}`:"")+" - Inula UI"},[I.value,s,t]),v(Ge,{links:l,children:[v("h1",{id:"component-route-title",className:"app-h app-h--1",children:[t,I.value!=="en-US"&&i("span",{className:"app-component-route__subtitle",children:s})]}),v("ul",{className:"app-component-route__tag-list",children:[P&&i("li",{children:v("a",{className:"app-component-route__tag-link",href:P,target:"_blank",rel:"noreferrer",children:[i(T,{size:24,children:i("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:v("g",{children:[i("path",{d:"M6.92 6.1l2.33 7.99 2.32-8h6.3v.8l-2.37 4.14c.83.27 1.46.76 1.89 1.47.43.71.64 1.55.64 2.51 0 1.2-.31 2.2-.94 3a2.93 2.93 0 01-2.42 1.22 2.9 2.9 0 01-1.96-.72 4.25 4.25 0 01-1.23-1.96l1.31-.55c.2.5.45.9.76 1.18.32.28.69.43 1.12.43.44 0 .82-.26 1.13-.76.31-.51.47-1.12.47-1.84 0-.79-.17-1.4-.5-1.83-.38-.5-.99-.76-1.81-.76h-.64v-.78l2.24-3.92h-2.7l-.16.26-3.3 11.25h-.15l-2.4-8.14-2.41 8.14h-.16L.43 6.1H2.1l2.33 7.99L6 8.71 5.24 6.1h1.68z",fill:"#005A9C"}),i("g",{children:i("path",{d:"M23.52 6.25l.28 1.62-.98 1.8s-.38-.76-1.01-1.19c-.53-.35-.87-.43-1.41-.33-.7.14-1.48.93-1.82 1.9-.41 1.18-.42 1.74-.43 2.26a4.9 4.9 0 00.11 1.33s-.6-1.06-.59-2.61c0-1.1.19-2.11.72-3.1.47-.87 1.17-1.4 1.8-1.45.63-.07 1.14.23 1.53.55.42.33.83 1.07.83 1.07l.97-1.85zM23.64 15.4s-.43.75-.7 1.04c-.27.28-.76.79-1.36 1.04-.6.25-.91.3-1.5.25a3.03 3.03 0 01-1.34-.52 5.08 5.08 0 01-1.67-2.04s.24.75.39 1.07c.09.18.36.74.74 1.23a3.5 3.5 0 002.1 1.42c1.04.18 1.76-.27 1.94-.38a5.32 5.32 0 001.4-1.43c.1-.14.25-.43.25-.43l-.25-1.25z"})})]})})}),i("span",{children:"WAI-ARIA"}),j&&i(T,{theme:"warning",children:i(Ze,{})})]})}),m&&i("li",{children:v(ge,{className:"app-component-route__tag-link",to:"/components/Compose",children:[i("img",{src:Wt,alt:"Compose",width:20,height:20}),i("span",{children:"Compose"})]})}),f&&i("li",{children:v(ge,{className:"app-component-route__tag-link",to:"/components/VirtualScroll",children:[i("img",{src:Ft,alt:"VirtualScroll",width:16,height:16}),i("span",{children:"VirtualScroll"})]})})]}),i("section",{children:q(h)}),i("h2",{id:"component-route-examples",className:"app-h app-h--2",children:R.formatMessage({id:"Examples"})}),i("section",{"data-demo":t,children:c}),i("section",{children:q(k)})]})}function Xt(e){const t=Ee("language");return a.createElement(Vt,e[t.value])}export{Yt as D,Xt as R,Qe as S,nt as T,Ze as a,et as b,Ye as c};
