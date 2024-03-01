import{o,x as Me,r as Ce,h as $e,U as m,n as Ve,e as V,j as n,I as F,H as Oe,u as Ue,a as je,b as We,f as Ke,E as Ge,g as qe,l as x,d as xe,z as Je,L as Qe,i as Ze,M as Xe,k as et,p as ve,O as tt,F as Ee,m as ge,P as rt,q as nt,Q as be,B as at,R as ct,W as Te}from"./index-249b6286.js";import{u as Pe}from"./useForkRef-71e20439.js";import{u as it}from"./MdRoute-0a6ea4db.js";import{S as ot}from"./cancel-bd11743d.js";import{d as st,S as lt,T as dt,o as ut}from"./utils-25d21dca.js";import{S as pt}from"./keyboard_arrow_left-9c5af2a5.js";import{S as ft,a as _t}from"./keyboard_double_arrow_right-1857b549.js";const ht=q=>o.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",...q},o.createElement("path",{d:"M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H4V10h16v11zm0-13H4V5h16v3z"})),mt=o.forwardRef((q,de)=>{const{styled:b,currentSelected:d,anotherSelected:p,config:J,range:te,onDateChange:ue}=q,E=o.useRef({}),{t:A,lang:f}=Me(),L=Ce(),pe=$e(()=>window),$=d?m(d):m().set("hour",0).set("minute",0).set("second",0),T=p?m(p):null,[fe,N]=o.useState($.toDate()),O=m(fe),[_,re]=o.useState(null),P=(s,l)=>{const c=()=>{N(i=>{const D=m(i);return D.set(s,D.get(s)+l).toDate()})};c();const u=()=>{c(),E.current.clearLoop=L.setTimeout(()=>u(),50)};E.current.clearTid=L.setTimeout(()=>u(),400)},U=()=>{var s,l,c,u;(l=(s=E.current).clearLoop)==null||l.call(s),(u=(c=E.current).clearTid)==null||u.call(c)};Ve(pe,"mouseup",U),o.useImperativeHandle(de,()=>N,[]);const j=(s,l)=>({onMouseDown:c=>{c.button===0&&P(s,l)},onTouchStart:()=>{P(s,l)},onTouchEnd:()=>{U()}}),_e=(()=>{const s=O.set("date",1),l=[];let c=[];for(let u=0,i=-s.day();u<7*6;u++,i++)c.push(s.add(i,"day").toDate()),c.length===7&&(l.push(c),c=[]);return l})();return V("div",{...b("date-picker__panel"),children:[V("div",{...b("date-picker__header"),children:[n("button",{...b("date-picker__header-button"),...j("year",-1),title:A("DatePicker","Previous year"),children:n(F,{children:n(ft,{})})}),n("button",{...b("date-picker__header-button"),...j("month",-1),title:A("DatePicker","Previous month"),children:n(F,{children:n(pt,{})})}),n("span",{...b("date-picker__header-date"),children:O.format(f==="zh-CN"?"YYYY年 M月":"MMM YYYY")}),n("button",{...b("date-picker__header-button"),...j("month",1),title:A("DatePicker","Next month"),children:n(F,{children:n(Oe,{})})}),n("button",{...b("date-picker__header-button"),...j("year",1),title:A("DatePicker","Next year"),children:n(F,{children:n(_t,{})})})]}),V("table",{...b("date-picker__table"),children:[n("thead",{children:n("tr",{children:m.weekdaysMin().map(s=>n("th",{children:s},s))})}),n("tbody",{children:_e.map((s,l)=>n("tr",{children:s.map((c,u)=>{const i=m(c),{disabled:D=!1}=(J==null?void 0:J(c))??{},k=d&&i.isSame($,"date"),H=T&&i.isSame(T,"date"),ne=!k&&!H&&T&&i.isSame(_,"date"),he=!k&&!k&&!ne&&d&&T&&i.isBetween($,T,"date"),me=!k&&_&&T&&i.isBetween(_,T,"date");return n("td",{style:{pointerEvents:D?"none":void 0},onClick:()=>{N(c),ue($.set("year",i.year()).set("month",i.month()).set("date",i.date()).toDate())},onMouseEnter:()=>{var v,h;(h=(v=E.current).clearHoverTid)==null||h.call(v),re(c)},onMouseLeave:()=>{var v,h;(h=(v=E.current).clearHoverTid)==null||h.call(v),E.current.clearHoverTid=L.setTimeout(()=>re(null),50)},children:n("div",{...b("date-picker__cell",{"date-picker__cell.is-active":te?H:k,"date-picker__cell.is-hover":ne||te&&k,"date-picker__cell.is-between":he,"date-picker__cell.is-between-hover":me,"date-picker__cell.is-disabled":D,"date-picker__cell--out-month":i.get("month")!==O.get("month"),"date-picker__cell--today":!k&&!H&&i.isSame(m(),"date")}),children:i.get("date")})},u)})},l))})]})]})}),kt={"date-picker":"^date-picker","date-picker.is-disabled":"is-disabled","date-picker--small":"^date-picker--small","date-picker--medium":"^date-picker--medium","date-picker--large":"^date-picker--large","date-picker__input":"^date-picker__input","date-picker__indicator":"^date-picker__indicator","date-picker__separator":"^date-picker__separator","date-picker__clear":"^date-picker__clear","date-picker__icon":"^date-picker__icon","date-picker-popup":"^date-picker-popup","date-picker__preset":"^date-picker__preset","date-picker__preset-option":"^date-picker__preset-option","date-picker__panel-wrapper":"^date-picker__panel-wrapper","date-picker__panel":"^date-picker__panel","date-picker__header":"^date-picker__header","date-picker__header-button":"^date-picker__header-button","date-picker__header-date":"^date-picker__header-date","date-picker__table":"^date-picker__table","date-picker__cell":"^date-picker__cell","date-picker__cell.is-active":"is-active","date-picker__cell.is-hover":"is-hover","date-picker__cell.is-between":"is-between","date-picker__cell.is-between-hover":"is-between-hover","date-picker__cell.is-disabled":"is-disabled","date-picker__cell--out-month":"^date-picker__cell--out-month","date-picker__cell--today":"^date-picker__cell--today","date-picker__footer":"^date-picker__footer","time-picker__panel":"^time-picker__panel","time-picker__header":"^time-picker__header","time-picker__column":"^time-picker__column","time-picker__cell":"^time-picker__cell","time-picker__cell.is-active":"is-active","time-picker__cell.is-disabled":"is-disabled"},Rt=o.forwardRef((q,de)=>{const{styleOverrides:b,styleProvider:d,formControl:p,model:J,defaultModel:te,visible:ue,defaultVisible:E,placeholder:A,range:f=!1,format:L,order:pe="ascend",clearable:$=!1,size:T,disabled:fe=!1,presetDate:N,config:O,showTime:_=!1,escClosable:re=!0,inputRef:P,inputRender:U,onModelChange:j,onVisibleChange:_e,onClear:s,afterVisibleChange:l,...c}=Ue("DatePicker",q),u=je(),i=We(kt,{"date-picker":d==null?void 0:d["date-picker"],"time-picker":d==null?void 0:d["time-picker"],"date-picker-popup":d==null?void 0:d["date-picker-popup"]},b),D=Ke(),{t:k}=Me(),H=Ge(),ne=Ce(),{pageScrollRef:he,contentResizeRef:me}=qe(),v=o.useRef(null),h=o.useRef(null),Y=o.useRef(null),W=o.useRef(null),Q=o.useRef(null),Ae=Pe(Y,P==null?void 0:P[0]),Ne=Pe(W,P==null?void 0:P[1]),ae=o.useRef(null),ce=o.useRef(null),ie=e=>{var r,t;(r=ae.current)==null||r.call(ae,e),(t=ce.current)==null||t.call(ce,e)},a=o.useRef({latestFocused:"start",onceVisible:!1,focusAnother:!1,inputValue:[void 0,void 0],rangeDate:[null,null]}),I=x.isUndefined(L)?_?"YYYY-MM-DD HH:mm:ss":"YYYY-MM-DD":L,we=e=>ut(e,pe,_?void 0:"date"),[w,K]=xe(E??!1,ue,_e),[z,De]=it([!1,!1]);z[0]&&(a.current.latestFocused="start"),z[1]&&(a.current.latestFocused="end");const[Z,G]=xe(te??null,J,j,(e,r)=>st(e,r,I),p==null?void 0:p.control);let[y,S=null]=f?Z??[null,null]:[Z,null];f&&(x.isNull(Z)?[y,S]=a.current.rangeDate:a.current.rangeDate=[null,null]);const oe=[0,1].map(e=>z[e]&&!x.isUndefined(a.current.inputValue[e])?a.current.inputValue[e]:(()=>{const r=e===0?y:S;return x.isNull(r)?"":m(r).format(I)})()),X=e=>{const r=z.findIndex(t=>t);f?x.isNull(Z)?(a.current.rangeDate[r]=e,a.current.rangeDate.every(t=>!x.isNull(t))&&(a.current.focusAnother=we(a.current.rangeDate),a.current.focusAnother&&a.current.rangeDate.reverse(),a.current.inputValue=[void 0,void 0],G(a.current.rangeDate))):(a.current.inputValue=[void 0,void 0],G(t=>{t[r]=e,a.current.focusAnother=we(t),a.current.focusAnother&&t.reverse()})):(a.current.inputValue=[void 0,void 0],G(e)),H()},[He=k("DatePicker",f?"Start date":"Select date"),Ye=k("DatePicker","End date")]=f?A??[]:[A],{size:Ie,disabled:se}=Je({size:T,disabled:fe||(p==null?void 0:p.control.disabled)}),ze=Qe(w),Be=`calc(var(--${u}-zindex-fixed) + ${ze})`,ke=o.useRef(),C=Ze(()=>{if(w&&v.current&&h.current){const e=h.current.offsetHeight,r=ct.windowSize.width-Te*2,t=Math.min(h.current.scrollWidth,r),R=Xe(v.current,{width:t,height:e},{placement:"bottom-left",inWindow:Te});ke.current=R.transformOrigin,D.classes.position&&h.current.classList.toggle(D.classes.position,!1),D.replaceRule("position",{top:R.top,left:R.left,maxWidth:r}),h.current.classList.toggle(D.classes.position,!0)}}),Fe=et(C,!w);Ve(he,"scroll",C,{passive:!0},!w||Fe),ve(v,C,void 0,!w),ve(h,C,void 0,!w),ve(me,C,void 0,!w),o.useImperativeHandle(de,()=>({updatePosition:C}),[C]),o.useEffect(()=>{if(v.current&&Q.current){let e=!1;const r=v.current.getBoundingClientRect();if(Y.current&&document.activeElement===Y.current){const t=Y.current.getBoundingClientRect();Q.current.style.cssText=`left:${t.left-r.left}px;width:${t.width}px;opacity:1;`,e=!0}if(W.current&&document.activeElement===W.current){const t=W.current.getBoundingClientRect();Q.current.style.cssText=`left:${t.left-r.left}px;width:${t.width}px;opacity:1;`,e=!0}e||(Q.current.style.cssText+="opacity:0;")}}),o.useEffect(()=>{if(a.current.focusAnother&&document.activeElement){const e=document.activeElement.parentElement;for(let r=0;r<e.childElementCount;r++){const t=e.children.item(r);if(t.tagName.toLowerCase()==="input"&&t!==document.activeElement){t.focus({preventScroll:!0});break}}}a.current.focusAnother=!1});const ee=e=>{if(f){const r=z.findIndex(t=>t);x.isNull(r===0?S:y)?(a.current.focusAnother=!0,H()):K(!1)}else K(!1);a.current.focusAnother||ie(e)},ye=$&&!x.isNull(Z)&&!w&&!se,Se=e=>{const r=e?0:1,t=e?y:S,R=U==null?void 0:U[r],M=n("input",{...i("date-picker__input"),...p==null?void 0:p.inputAria,ref:e?Ae:Ne,type:"text",autoComplete:"off",value:oe[r],size:22,placeholder:e?He:Ye,disabled:se,onChange:g=>{if(H(),a.current.inputValue[r]=g.currentTarget.value,m(g.currentTarget.value,I,!0).isValid()){const B=m(g.currentTarget.value,I).toDate();X(B),ie(B)}},onKeyDown:g=>{if(g.code==="Escape")w&&re&&(g.stopPropagation(),g.preventDefault(),K(!1));else if(g.code==="Enter"&&oe[r]&&m(oe[r],I,!0).isValid()){g.preventDefault();const B=m(oe[r],I).toDate();ee(B)}},onFocus:()=>{var g,B;(B=(g=a.current).clearTid)==null||B.call(g),De(Re=>{Re.fill(!1),Re[e?0:1]=!0}),a.current.inputValue=[void 0,void 0],w&&f&&t&&ie(t)},onBlur:()=>{a.current.clearTid=ne.setTimeout(()=>{De([!1,!1]),K(!1)},20)}});return R?R(M):M},le=e=>{(document.activeElement===Y.current||document.activeElement===W.current)&&e.target!==Y.current&&e.target!==W.current&&e.button===0&&e.preventDefault()},Le=tt({compose:{disabled:se},form:p});return V(Ee,{children:[V("div",{...c,...ge(i("date-picker",`date-picker--${Ie}`,{"date-picker.is-disabled":se}),{className:c.className,style:c.style}),...Le,ref:v,onMouseDown:e=>{var r;(r=c.onMouseDown)==null||r.call(c,e),le(e)},onMouseUp:e=>{var r;(r=c.onMouseUp)==null||r.call(c,e),le(e)},onClick:e=>{var r,t;(r=c.onClick)==null||r.call(c,e),z.some(R=>R)||(t=Y.current)==null||t.focus({preventScroll:!0}),K(!0)},children:[Se(!0),f&&V(Ee,{children:[n("div",{...i("date-picker__indicator"),ref:Q}),n("div",{...i("date-picker__separator"),children:n(F,{children:n(lt,{})})}),Se(!1)]}),ye&&n("div",{...i("date-picker__clear"),role:"button","aria-label":k("Clear"),onClick:e=>{e.stopPropagation(),a.current.inputValue=[void 0,void 0],G(null),s==null||s()},children:n(F,{children:n(ot,{})})}),n("div",{...ge(i("date-picker__icon"),{style:{visibility:ye?"hidden":void 0}}),children:n(F,{children:n(ht,{})})})]}),n(rt,{selector:()=>{let e=document.getElementById(`${u}-date-picker-root`);return e||(e=document.createElement("div"),e.id=`${u}-date-picker-root`,document.body.appendChild(e)),e},children:n(nt,{enter:w,during:be,afterRender:()=>{C();const e=()=>{const r=z[0]?y:S;r&&ie(r)};f?e():a.current.onceVisible||(a.current.onceVisible=!0,e())},afterEnter:()=>{l==null||l(!0)},afterLeave:()=>{l==null||l(!1)},children:e=>{let r={};switch(e){case"enter":r={transform:"scaleY(0.7)",opacity:0};break;case"entering":r={transition:["transform","opacity"].map(t=>`${t} ${be}ms ease-out`).join(", "),transformOrigin:ke.current};break;case"leaving":r={transform:"scaleY(0.7)",opacity:0,transition:["transform","opacity"].map(t=>`${t} ${be}ms ease-in`).join(", "),transformOrigin:ke.current};break;case"leaved":r={display:"none"};break}return V("div",{...ge(i("date-picker-popup"),{style:{zIndex:Be,...r}}),ref:h,onMouseDown:t=>{le(t)},onMouseUp:t=>{le(t)},children:[N&&n("ul",{...i("date-picker__preset"),children:Object.keys(N).map(t=>{const R=()=>{const M=N[t]();a.current.inputValue=[void 0,void 0],f?x.isArray(M)?(G(M),K(!1)):(X(M),ee(M)):(G(M),ee(M))};return o.createElement("li",{...i("date-picker__preset-option"),key:t,role:"button",onClick:R},t)})}),V("div",{...i("date-picker__panel-wrapper"),children:[n(mt,{ref:ae,styled:i,currentSelected:a.current.latestFocused==="start"?y:S,anotherSelected:a.current.latestFocused==="start"?S:y,config:O?(...t)=>O(...t,a.current.latestFocused,[y,S]):void 0,range:f,onDateChange:t=>{X(t),_||ee(t)}}),_&&n(dt,{ref:ce,styled:i,time:a.current.latestFocused==="start"?y:S,format:I,config:_&&!x.isBoolean(_)&&_.config?(...t)=>_.config(...t,a.current.latestFocused,[y,S]):void 0,inDatePicker:!0,onTimeChange:t=>{X(t)}}),n("div",{...i("date-picker__footer"),children:n(at,{pattern:"link",onClick:()=>{const t=new Date;X(t),ee(t)},children:k("DatePicker",_?"Now":"Today")})})]})]})}})})]})});export{Rt as D};
