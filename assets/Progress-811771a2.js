import{o as g,u as z,a as E,b as I,c as L,l as x,e as m,m as c,j as e,I as $,Z as P,O as W}from"./index-72c6a3aa.js";import{S as N}from"./cancel-d1e7856a.js";import{b as U,a as j}from"./Route-fa35b548.js";const B=n=>g.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",...n},g.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"})),D=n=>g.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",...n},g.createElement("path",{d:"M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"})),M={progress:"^progress","progress--line":"^progress--line","progress--circle":"^progress--circle","progress--dashboard":"^progress--dashboard","progress--success":"^progress--success","progress--warning":"^progress--warning","progress--error":"^progress--error","progress--process":"^progress--process","progress__line-track":"^progress__line-track","progress__line-bar":"^progress__line-bar","progress__line-wave":"^progress__line-wave",progress__svg:"^progress__svg",progress__label:"^progress__label"};function q(n){const{styleOverrides:y,styleProvider:p,percent:s,pattern:r="line",state:u,label:d,size:w=120,wave:C=!1,lineCap:h="round",lineWidth:i=8,gapDegree:b=75,linearGradient:o,...v}=z("Progress",n),f=E(),a=I(M,{progress:p==null?void 0:p.progress},y),k=L(),t=x.isUndefined(u)?s===100?"success":"process":u;return m("div",{...v,...c(a("progress",`progress--${r}`,`progress--${t}`),{className:v.className,style:v.style}),role:"progressbar","aria-valuenow":s,"aria-valuemin":0,"aria-valuemax":100,children:[r==="line"?e("div",{...c(a("progress__line-track"),{style:{height:i,borderRadius:h==="round"?i/2:0}}),children:e("div",{...c(a("progress__line-bar"),{style:{opacity:s===0?0:1,width:`${s}%`,backgroundImage:o?`linear-gradient(to right, ${o[0]} 0%, ${o[100]} 100%)`:void 0}}),children:C&&s>0&&e("div",{...a("progress__line-wave")})})}):(()=>{const _=60-i/2,l=2*Math.PI*_,S=l-(r==="circle"?0:b/360*l);return e($,{size:w,rotate:r==="circle"?-90:90+b/2,children:m("svg",{...a("progress__svg"),viewBox:"0 0 120 120",children:[o&&e("defs",{children:m("linearGradient",{id:`${f}-progress-gradient-${k}-1`,gradientUnits:"userSpaceOnUse",children:[e("stop",{offset:"0%",stopColor:o[0]}),e("stop",{offset:"100%",stopColor:o[100]})]})}),e("circle",{cx:60,cy:60,r:_,strokeLinecap:h,strokeWidth:i,stroke:"var(--background-color)",fill:"none",strokeDasharray:`${S} ${l}`}),e("circle",{style:{opacity:s===0?0:1},cx:60,cy:60,r:_,strokeLinecap:h,strokeWidth:i,stroke:x.isUndefined(o)?"var(--color)":`url(#${f}-progress-gradient-${k}-1)`,fill:"none",strokeDasharray:`${S*(s/100)} ${l}`})]})})})(),d!==!1&&e("div",{...c(a("progress__label"),{style:{fontSize:r==="line"?void 0:`calc(${w}px / 5)`}}),children:P(d)?d:t==="process"?`${s}%`:e($,{size:"1.25em",children:t==="success"?r==="line"?e(B,{}):e(U,{}):t==="warning"?r==="line"?e(D,{}):e(j,{}):r==="line"?e(N,{}):e(W,{})})})]})}export{q as P,B as S,D as a};