import{a as N,c as A,o as F,e as M,F as P,j as s,l as y,z as R,u as V,b as $,d as j,A as H,m as L,Z as U,I as q}from"./index-d0d96015.js";import{S as O}from"./star-b5083470.js";function T(S){const{styled:o,value:e,hover:n,checked:c,icon:h,tooltip:i,name:r,half:I,disabled:_,inputProps:C,onCheck:l,onHoverChange:p}=S,f=N(),a=A(),k=`${f}-rating-star-input-${a}`,m=`${f}-rating-star-half-input-${a}`,v=e===c,t=e-.5,b=t===c,[x,u]=F.useState(e),g=M("div",{...o("rating__star"),children:[I&&M(P,{children:[s("input",{...o("rating__input","rating__input--half"),...C,id:m,type:"radio",name:r,checked:b,disabled:_,"aria-checked":b,onChange:()=>{l(t)},onMouseEnter:()=>{y.isUndefined(i)||u(t),p(t)}}),s("label",{...o("rating__icon","rating__icon--half",{"rating__icon.is-checked":t<=(n??c??0)}),htmlFor:m,children:h})]}),M("label",{...o("rating__icon",{"rating__icon.is-checked":e<=(n??c??0)}),children:[s("input",{...o("rating__input"),id:k,type:"radio",name:r,checked:v,disabled:_,"aria-checked":v,onChange:()=>{l(e)},onMouseEnter:()=>{y.isUndefined(i)||u(e),p(e)}}),h]})]});return y.isUndefined(i)?g:s(R,{title:i==null?void 0:i(x),children:g})}const z={rating:"^rating","rating.is-disabled":"is-disabled","rating--read-only":"^rating--read-only",rating__star:"^rating__star",rating__input:"^rating__input","rating__input--half":"^rating__input--half",rating__icon:"^rating__icon","rating__icon.is-checked":"is-checked","rating__icon--half":"^rating__icon--half"};function B(S){const{styleOverrides:o,styleProvider:e,formControl:n,model:c,defaultModel:h,total:i=5,icon:r,tooltip:I,name:_,half:C=!1,readOnly:l=!1,disabled:p=!1,onModelChange:f,...a}=V("Rating",S),k=$(z,{rating:e==null?void 0:e.rating},o),m=A(),[v,t]=F.useState(null),[b,x]=j(h??null,c,f,void 0,n==null?void 0:n.control),{disabled:u}=H({disabled:p||(n==null?void 0:n.control.disabled)});return s("div",{...a,...L(k("rating",{"rating.is-disabled":u,"rating--read-only":l}),{className:a.className,style:a.style}),role:"radiogroup",onMouseLeave:g=>{var d;(d=a.onMouseLeave)==null||d.call(a,g),t(null)},children:Array.from({length:i}).map((g,d)=>s(T,{styled:k,value:d+1,hover:v,checked:b,icon:y.isFunction(r)?r(d+1):U(r)?r:s(q,{children:s(O,{})}),tooltip:I,name:_??m,half:C,disabled:u||l,inputProps:n==null?void 0:n.inputAria,onCheck:E=>{x(E)},onHoverChange:E=>{t(E)}},d+1))})}export{B as R};
