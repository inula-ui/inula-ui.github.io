import{o as b,u as C,b as B,e as R,m as w,j as n,I as E,t as F,g as A,h as I,v as P,k as j,n as L,p as z,q as O,T as v,l as V,d as G}from"./index-249b6286.js";import{s as M}from"./scrollTo-ba138f67.js";import{t as D}from"./toPx-08738a81.js";import{S as U}from"./add-e5ea1ef0.js";const q=c=>b.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",...c},b.createElement("path",{d:"M8 11h3v10h2V11h3l-4-4-4 4zM4 3v2h16V3H4z"})),H={fab:"^fab",fab__actions:"^fab__actions","fab__actions--top":"^fab__actions--top","fab__actions--right":"^fab__actions--right","fab__actions--bottom":"^fab__actions--bottom","fab__actions--left":"^fab__actions--left"},J={"fab-button":"^fab-button","fab-button.t-primary":"t-primary","fab-button.t-success":"t-success","fab-button.t-warning":"t-warning","fab-button.t-danger":"t-danger","fab-button.is-expand":"is-expand","fab-button.is-loading":"is-loading","fab-button--in-actions":"^fab-button--in-actions","fab-button--primary":"^fab-button--primary","fab-button--secondary":"^fab-button--secondary","fab-button--outline":"^fab-button--outline","fab-button--dashed":"^fab-button--dashed","fab-button--text":"^fab-button--text","fab-button--link":"^fab-button--link","fab-button--circle":"^fab-button--circle","fab-button--round":"^fab-button--round","fab-button__icon":"^fab-button__icon","fab-button__content":"^fab-button__content"},$=b.forwardRef((c,p)=>{const{children:h,styleOverrides:a,styleProvider:l,pattern:g="primary",theme:f="primary",loading:d=!1,shape:t,_expand:u=!1,_action:_=!1,...o}=C("FabButton",c),e=B(J,{"fab-button":l==null?void 0:l["fab-button"]},a);return R("button",{...o,...w(e("fab-button",`fab-button.t-${f}`,`fab-button--${g}`,{"fab-button.is-expand":u,"fab-button.is-loading":d,"fab-button--in-actions":_,[`fab-button--${t}`]:t}),{className:o.className,style:o.style}),ref:p,type:o.type??"button",children:[n(E,{...e("fab-button__icon"),children:n(U,{})}),n("div",{...e("fab-button__content"),children:d?n(E,{children:n(F,{})}):h})]})});function K(c){const{children:p,page:h,distance:a=400,scrollBehavior:l="instant",...g}=C("FabBacktop",c),{pageScrollRef:f,contentResizeRef:d}=A(),t=I(h??(()=>f.current)),u=b.useRef({}),[_,o]=b.useState(!1),e={enter:{opacity:0},entering:{transition:["opacity"].map(r=>`${r} ${v}ms linear`).join(", ")},leaving:{opacity:0,transition:["opacity"].map(r=>`${r} ${v}ms linear`).join(", ")},leaved:{display:"none"}},s=()=>{if(t.current){const r=V.isString(a)?D(a,!0):a;o(Math.ceil(t.current.scrollTop)>=r)}};P(()=>{s()},[]);const m=j(s);L(t,"scroll",s,{passive:!0},m),z(d,s);const i=n($,{...g,children:p??n(E,{children:n(q,{})})});return n(O,{enter:_,during:v,children:r=>b.cloneElement(i,{style:{...i.props.style,...e[r]},onClick:S=>{var y,x,k,T;(x=(y=i.props).onClick)==null||x.call(y,S),t.current&&((T=(k=u.current).clearTid)==null||T.call(k),u.current.clearTid=M(t.current,{top:0,behavior:l}))}})})}const N=c=>{const{children:p,styleOverrides:h,styleProvider:a,expand:l,defaultExpand:g,list:f,onExpandChange:d,...t}=C("Fab",c),u=B(H,{fab:a==null?void 0:a.fab},h),[_,o]=G(g??!1,l,d);return R("div",{...t,...w(u("fab"),{className:t.className,style:t.style}),children:[b.cloneElement(p,{_expand:_,onClick:e=>{var s,m;(m=(s=p.props).onClick)==null||m.call(s,e),f&&o(i=>!i)}}),_&&f&&f.map(({placement:e,actions:s},m)=>n("div",{...u("fab__actions",`fab__actions--${e}`),children:b.Children.map(s,(i,r)=>b.cloneElement(i,{_action:!0,style:{...i.props.style,animationDelay:`${r*33}ms`},onClick:S=>{var y,x;(x=(y=i.props).onClick)==null||x.call(y,S),o(!1)}}))},m))]})};N.Button=$;N.Backtop=K;export{N as F};
