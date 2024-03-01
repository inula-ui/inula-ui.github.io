import{y as fe,o as g,c as ue,l as ae,e as C,Z as he,j as s,I as j,v as _e,u as pe,a as me,b as ge,d as q,A as Se,P as be,m as ve,B as Y,J as Ce}from"./index-27d4f0cf.js";import{S as ye}from"./keyboard_arrow_left-438dbe84.js";import{S as xe}from"./search-16204c83.js";import{C as ee}from"./Checkbox-672f50b0.js";import{I as Ie}from"./Input-299c1ed3.js";import{V as Ee}from"./VirtualScroll-3f2918ef.js";import{E as se}from"./Empty-b5fb88d9.js";const Pe={transfer:"^transfer","transfer.is-disabled":"is-disabled",transfer__panel:"^transfer__panel",transfer__actions:"^transfer__actions",transfer__header:"^transfer__header","transfer__header-title":"^transfer__header-title",transfer__search:"^transfer__search","transfer__list-container":"^transfer__list-container",transfer__list:"^transfer__list",transfer__loading:"^transfer__loading",transfer__option:"^transfer__option","transfer__option.is-disabled":"is-disabled","transfer__option-prefix":"^transfer__option-prefix","transfer__option-content":"^transfer__option-content"},m=Symbol();function te(B){const{namespace:D,styled:l,list:i,selectedCount:y,state:E,title:P,loading:F,searchable:K,virtual:_,customItem:w,onSelectedChange:x,onAllSelectedChange:f,onSearch:M,onScrollBottom:L}=B,{t:A}=fe(),V=g.useRef(null),c=ue(),k=t=>`${D}-transfer-item-${t}-${c}`,I=g.useCallback(t=>!t.disabled,[]),$=g.useMemo(()=>({list:i,itemKey:t=>t.value,itemSize:ae.isNumber(_)?_:32,itemFocusable:I}),[I,i,_]);return C("div",{...l("transfer__panel"),children:[C("div",{...l("transfer__header"),children:[C(ee,{model:E===!0,indeterminate:E==="mixed",disabled:i.length===0,onModelChange:t=>{f(t)},children:[y,"/",i.length]}),he(P)&&s("div",{...l("transfer__header-title"),children:P})]}),K&&s("div",{...l("transfer__search"),children:s(Ie,{style:{display:"flex"},placeholder:A("Search"),prefix:s(j,{children:s(xe,{})}),clearable:!0,onModelChange:M})}),C("div",{...l("transfer__list-container"),children:[F&&s("div",{...l("transfer__loading"),children:s(j,{children:s(_e,{})})}),s(Ee,{...$,ref:V,enable:_!==!1,listSize:192,listPadding:0,itemRender:(t,S,R)=>{const{label:p,value:b,disabled:v}=t;return g.createElement("li",{...l("transfer__option",{"transfer__option.is-disabled":v}),...R,key:b,id:k(b),title:p,onClick:()=>{v||x==null||x(b)}},s("div",{...l("transfer__option-prefix"),children:s(ee,{model:t[m],disabled:v})}),s("div",{...l("transfer__option-content"),children:w?w(t):p}))},placeholder:"li",onScrollEnd:L,children:(t,S)=>s("ul",{...l("transfer__list"),onScroll:S,children:i.length===0?s(se,{style:{marginTop:32},image:se.SIMPLE_IMG}):t})})]})]})}function Ne(B){const{styleOverrides:D,styleProvider:l,formControl:i,list:y,model:E,defaultModel:P,selected:F,defaultSelected:K,searchable:_=!1,searchValue:w,defaultSearchValue:x,title:f,loading:M=[!1,!1],disabled:L=!1,virtual:A=!1,customItem:V,customSearch:c,onModelChange:k,onSelectedChange:I,onSearch:$,onScrollBottom:t,...S}=pe("Transfer",B),R=me(),p=ge(Pe,{transfer:l==null?void 0:l.transfer},D),b=g.useMemo(()=>new Map(y.map(e=>[e.value,e])),[y]),[v,ne]=q(P??[],E,e=>{k&&k(e,e.map(a=>b.get(a)))},void 0,i==null?void 0:i.control),re=g.useMemo(()=>new Set(v),[v]),[G,z]=q(K??[],F,e=>{I&&I(e,e.map(a=>b.get(a)))}),le=g.useMemo(()=>new Set(G),[G]),[O,J]=q(x??["",""],w,$),{disabled:oe}=Se({disabled:L||(i==null?void 0:i.control.disabled)}),[u,U,T]=(()=>{const e=[[],[]],a=[0,0],o=[!0,!0],n=[!0,!0],h=[!1,!1],de=ae.isUndefined(c==null?void 0:c.filter)?(r,d)=>r.label.includes(d):(r,d)=>c.filter(d,r),N=c==null?void 0:c.sort;y.forEach(r=>{const d=re.has(r.value)?1:0,W=Object.assign({[m]:!1},r),X=O[d];(!X||de(r,X))&&(le.has(r.value)?(W[m]=!0,a[d]+=1,r.disabled||(h[d]=!0)):r.disabled||(n[d]=!1),e[d].push(W),r.disabled||(o[d]=!1))}),O[0]&&N&&e[0].sort(N),O[1]&&N&&e[1].sort(N);const ce=[0,1].map(r=>o[r]?!1:n[r]?!0:h[r]?"mixed":!1);return[e,a,ce]})(),Z=e=>{z(a=>{const o=a.findIndex(n=>n===e);o!==-1?a.splice(o,1):a.push(e)})},H=(e,a)=>{z(o=>{const n=new Set(o);for(const h of a?u[0]:u[1])h.disabled||(e&&!h[m]?n.add(h.value):!e&&h[m]&&n.delete(h.value));return Array.from(n)})},Q=e=>{ne(a=>{const o=new Set(a);return(e?u[0]:u[1]).forEach(n=>{n[m]&&(e?o.add(n.value):o.delete(n.value))}),Array.from(o)}),z(a=>{const o=new Set(a);return(e?u[0]:u[1]).forEach(n=>{n[m]&&o.delete(n.value)}),Array.from(o)})},ie=be({form:i});return C("div",{...S,...ve(p("transfer",{"transfer.is-disabled":oe}),{className:S.className,style:S.style}),...ie,children:[s(te,{namespace:R,styled:p,list:u[0],selectedCount:U[0],state:T[0],title:f==null?void 0:f[0],loading:M[0]??!1,searchable:_,virtual:A,customItem:V,onSelectedChange:Z,onAllSelectedChange:e=>{H(e,!0)},onSearch:e=>{J(a=>{a[0]=e})},onScrollBottom:()=>{t==null||t("left")}}),C("div",{...p("transfer__actions"),children:[s(Y,{disabled:T[0]===!1,pattern:"secondary",icon:s(j,{children:s(Ce,{})}),onClick:()=>{Q(!0)}}),s(Y,{disabled:T[1]===!1,pattern:"secondary",icon:s(j,{children:s(ye,{})}),onClick:()=>{Q(!1)}})]}),s(te,{namespace:R,styled:p,list:u[1],selectedCount:U[1],state:T[1],title:f==null?void 0:f[1],loading:M[1]??!1,searchable:_,virtual:A,customItem:V,onSelectedChange:Z,onAllSelectedChange:e=>{H(e,!1)},onSearch:e=>{J(a=>{a[1]=e})},onScrollBottom:()=>{t==null||t("right")}})]})}export{Ne as T};
