import{u as $,b as C,d as T,z as A,O,j as e,e as o,m as n,F as R,Y as r,q as D,I as E,t as F}from"./index-249b6286.js";const M={switch:"^switch","switch.is-checked":"is-checked","switch.is-loading":"is-loading","switch.is-disabled":"is-disabled","switch--label-left":"^switch--label-left","switch--small":"^switch--small","switch--medium":"^switch--medium","switch--large":"^switch--large","switch__state-container":"^switch__state-container","switch__state-content":"^switch__state-content","switch__state-content--left":"^switch__state-content--left","switch__state-dot":"^switch__state-dot",switch__input:"^switch__input",switch__label:"^switch__label"},w=133;function G(b){const{children:_,styleOverrides:m,styleProvider:l,formControl:t,model:f,defaultModel:y,stateContent:a,labelPlacement:S="right",size:v,loading:p=!1,disabled:k=!1,inputRef:x,inputRender:g,onModelChange:N,...h}=$("Switch",b),s=C(M,{switch:l==null?void 0:l.switch},m),[c,P]=T(y??!1,f,N,void 0,t==null?void 0:t.control),{size:j,disabled:d}=A({size:v,disabled:k||(t==null?void 0:t.control.disabled)}),z=O({compose:{active:c,disabled:d}}),I={enter:{left:2},entering:{left:"calc(100% - 20px)",transition:["width","padding","margin","left"].map(i=>`${i} ${w}ms linear`).join(", ")},entered:{right:2},leave:{right:2},leaving:{right:"calc(100% - 20px)",transition:["width","padding","margin","right"].map(i=>`${i} ${w}ms linear`).join(", ")},leaved:{left:2}},u=e("input",{...s("switch__input"),...t==null?void 0:t.inputAria,ref:x,type:"checkbox",disabled:d,role:"switch","aria-checked":c,onChange:()=>{P(i=>!i)}});return o("label",{...h,...n(s("switch",`switch--${j}`,{"switch--label-left":S==="left","switch.is-checked":c,"switch.is-loading":p,"switch.is-disabled":d}),{className:h.className,style:h.style}),...z,children:[o("div",{...s("switch__state-container"),children:[a&&o(R,{children:[r(a[0])&&e("div",{...n(s("switch__state-content","switch__state-content--left"),{style:{opacity:c?1:0}}),children:a[0]}),r(a[1])&&e("div",{...n(s("switch__state-content"),{style:{opacity:c?0:1}}),children:a[1]})]}),g?g(u):u,e(D,{enter:c,during:w,children:i=>e("div",{...n(s("switch__state-dot"),{style:I[i]}),children:p&&e(E,{children:e(F,{})})})})]}),r(_)&&e("div",{...s("switch__label"),children:_})]})}export{G as S};
