import{u as L,b as R,e as w,m as A,j as a,Y as z,I as C,x as G,d as F,o as S,B as H,N as J,a as Q,c as V,L as ee,l as O,V as ae,P as te,q as oe,T as D,R as I,ac as re,X as le}from"./index-249b6286.js";import{S as ne}from"./check_circle-451d2513.js";import{S as de}from"./highlight_off-bdbbe95d.js";import{S as se}from"./info-03acfef8.js";import{a as ie}from"./Route-992b6be7.js";const T={modal:"^modal","modal--center":"^modal--center","modal--alert":"^modal--alert",modal__content:"^modal__content",modal__header:"^modal__header","modal__header-title":"^modal__header-title","modal__header-actions":"^modal__header-actions",modal__body:"^modal__body",modal__footer:"^modal__footer","modal__footer--left":"^modal__footer--left","modal__footer--center":"^modal__footer--center","modal__footer--right":"^modal__footer--right",modal__alert:"^modal__alert","modal__alert--success":"^modal__alert--success","modal__alert--warning":"^modal__alert--warning","modal__alert--error":"^modal__alert--error","modal__alert--info":"^modal__alert--info","modal__alert-icon":"^modal__alert-icon","modal__alert-content":"^modal__alert-content","modal__alert-title":"^modal__alert-title","modal__alert-message":"^modal__alert-message"};function ce(v){const{styleOverrides:y,styleProvider:s,children:_,type:n,title:o,icon:d,...i}=L("ModalAlert",v),t=R(T,{modal:s==null?void 0:s.modal},y);return w("div",{...i,...A(t("modal__alert",`modal__alert--${n}`),{className:i.className,style:i.style}),children:[a("div",{...t("modal__alert-icon"),children:z(d)?d:a(C,{children:n==="success"?a(ne,{}):n==="warning"?a(ie,{}):n==="error"?a(de,{}):a(se,{})})}),w("div",{...t("modal__alert-content"),children:[z(o)&&a("div",{...t("modal__alert-title"),children:o}),z(_)&&a("div",{...t("modal__alert-message"),children:_})]})]})}function me(v){const{styleOverrides:y,styleProvider:s,align:_="right",actions:n=["cancel","ok"],cancelProps:o,okProps:d,onCancelClick:i,onOkClick:t,_onClose:e,...h}=L("ModalFooter",v),N=R(T,{modal:s==null?void 0:s.modal},y),{t:b}=G(),[E,p]=F(!1,o==null?void 0:o.loading),[m,r]=F(!1,d==null?void 0:d.loading),f={...o,loading:E,onClick:()=>{const l=i==null?void 0:i();l instanceof Promise?(p(!0),l.then(x=>{p(!1),x!==!1&&(e==null||e())})):l!==!1&&(e==null||e())}},u={...d,loading:m,onClick:()=>{const l=t==null?void 0:t();l instanceof Promise?(r(!0),l.then(x=>{r(!1),x!==!1&&(e==null||e())})):l!==!1&&(e==null||e())}};return a("div",{...h,...A(N("modal__footer",`modal__footer--${_}`),{className:h.className,style:h.style}),children:S.Children.map(n,l=>l==="cancel"?a(H,{...f,pattern:f.pattern??"secondary",children:f.children??b("Footer","Cancel")}):l==="ok"?a(H,{...u,children:u.children??b("Footer","OK")}):l)})}function X(v){const{styleOverrides:y,styleProvider:s,children:_,actions:n=["close"],closeProps:o,onCloseClick:d,_id:i,_onClose:t,...e}=L("ModalHeader",v),h=R(T,{modal:s==null?void 0:s.modal},y),{t:N}=G(),[b,E]=F(!1,o==null?void 0:o.loading),p={...o,loading:b,onClick:()=>{const m=d==null?void 0:d();m instanceof Promise?(E(!0),m.then(r=>{E(!1),r!==!1&&(t==null||t())})):m!==!1&&(t==null||t())}};return w("div",{...e,...A(h("modal__header"),{className:e.className,style:e.style}),children:[a("div",{...h("modal__header-title"),id:i,children:_}),a("div",{...h("modal__header-actions"),children:S.Children.map(n,m=>m==="close"?a(H,{...p,"aria-label":p["aria-label"]??N("Close"),pattern:p.pattern??"text",icon:p.icon??a(C,{children:a(J,{})})}):m)})]})}const j=v=>{const{children:y,styleOverrides:s,styleProvider:_,visible:n,header:o,footer:d,alert:i,width:t=520,top:e=100,mask:h=!0,maskClosable:N=!0,escClosable:b=!0,skipFirstTransition:E=!0,destroyAfterClose:p=!0,zIndex:m,onClose:r,afterVisibleChange:f,...u}=L("Modal",v),l=Q(),x=R(T,{modal:_==null?void 0:_.modal},s),P=S.useRef(null),M=S.useRef(null),$=S.useRef({prevActiveEl:null}),B=V(),K=`${l}-modal-title-${B}`,U=`${l}-modal-content-${B}`,Y=ee(n),Z=O.isUndefined(m)?`calc(var(--${l}-zindex-fixed) + ${Y})`:m;ae(n);const W=(()=>{if(o){const c=O.isString(o)?a(X,{children:o}):o;return S.cloneElement(c,{_id:K,_onClose:()=>{r==null||r()}})}})();return a(te,{selector:()=>{let c=document.getElementById(`${l}-modal-root`);return c||(c=document.createElement("div"),c.id=`${l}-modal-root`,document.body.appendChild(c)),c},children:a(oe,{enter:n,during:D,skipFirstTransition:E,destroyWhenLeaved:p,afterRender:()=>{if(O.isUndefined(I.clickEvent)||performance.now()-I.clickEvent.time>100)$.current.transformOrigin=void 0;else if(M.current){const c=`${(I.windowSize.width-M.current.offsetWidth)/2}px`,k=e==="center"?`${(I.windowSize.height-M.current.offsetHeight)/2}px`:`${e}${O.isNumber(e)?"px":""}`;$.current.transformOrigin=`calc(${I.clickEvent.x}px - ${c}) calc(${I.clickEvent.y}px - ${k})`}},afterEnter:()=>{f==null||f(!0),$.current.prevActiveEl=document.activeElement,P.current&&P.current.focus({preventScroll:!0})},afterLeave:()=>{f==null||f(!1),$.current.prevActiveEl&&$.current.prevActiveEl.focus({preventScroll:!0})},children:c=>{let k={};switch(c){case"enter":k={transform:"scale(0.3)",opacity:0};break;case"entering":k={transition:["transform","opacity"].map(g=>`${g} ${D}ms ease-out`).join(", "),transformOrigin:$.current.transformOrigin};break;case"leaving":k={transform:"scale(0.3)",opacity:0,transition:["transform","opacity"].map(g=>`${g} ${D}ms ease-in`).join(", "),transformOrigin:$.current.transformOrigin};break}return w("div",{...u,...A(x("modal",{"modal--center":e==="center","modal--alert":i}),{className:u.className,style:{...u.style,display:c==="leaved"?"none":void 0,zIndex:Z}}),ref:P,tabIndex:u.tabIndex??-1,role:"dialog","aria-modal":!0,"aria-labelledby":W?K:void 0,"aria-describedby":U,onKeyDown:g=>{var q;(q=u.onKeyDown)==null||q.call(u,g),n&&b&&g.code==="Escape"&&(g.stopPropagation(),g.preventDefault(),r==null||r()),re(g)},children:[h&&a(le,{visible:n,onClose:()=>{N&&(r==null||r())}}),w("div",{...A(x("modal__content"),{style:{width:t,top:e==="center"?void 0:e,maxHeight:e==="center"?void 0:`calc(100% - ${e}${O.isNumber(e)?"px":""} - 20px)`,...k}}),ref:M,children:[W,a("div",{...x("modal__body"),id:U,children:i??y}),d&&S.cloneElement(d,{_onClose:()=>{r==null||r()}})]})]})}})})};j.Header=X;j.Footer=me;j.Alert=ce;export{j as M};
