import{u as _e,b as be,o as g,h as pe,d as ve,l as o,A as Me,n as J,P as xe,e as le,m as T,j as A,z as Xe}from"./index-d0d96015.js";const Ye={slider:"^slider","slider.is-disabled":"is-disabled","slider--horizontal":"^slider--horizontal","slider--vertical":"^slider--vertical",slider__track:"^slider__track","slider__track--reverse":"^slider__track--reverse",slider__thumb:"^slider__thumb","slider__thumb.is-focused":"is-focused","slider__thumb--draggable":"^slider__thumb--draggable",slider__mark:"^slider__mark","slider__mark--hidden":"^slider__mark--hidden","slider__mark-label":"^slider__mark-label","slider__mark-label.is-active":"is-active","slider__input-wrapper":"^slider__input-wrapper",slider__input:"^slider__input"};function ke(ne){const{styleOverrides:se,styleProvider:C,formControl:m,model:re,defaultModel:oe,max:c=100,min:a=0,step:M=1,range:p=!1,rangeMinDistance:_,rangeThumbDraggable:K=!1,tooltip:x,customTooltip:Q,marks:X,vertical:d=!1,reverse:k=!1,disabled:ce=!1,inputRef:D,inputRender:ae,onModelChange:ue,...u}=_e("Slider",ne),Y=be(Ye,{slider:C==null?void 0:C.slider},se),S=g.useRef(null),$=g.useRef(null),E=g.useRef(null),V=g.useRef(null),B=g.useRef(null),z=pe(()=>window),[N,W]=g.useState(null),[j,de]=g.useState(null),[F,P]=g.useState(null),[s,U]=g.useState(null),[I,w]=ve(oe??(p?[0,0]:0),re,ue,(e,i)=>o.isNumber(e)&&o.isNumber(i)?e===i:o.isArray(e)&&o.isArray(i)?e[0]===i[0]&&e[1]===i[1]:!1,m==null?void 0:m.control),[b,v=0]=p?I:[I],[he,fe]=(()=>p?[(x==null?void 0:x[0])??(j==="left"?!0:!!(N==="left"||s)),(x==null?void 0:x[1])??(j==="right"?!0:!!(N==="right"||s))]:[x??(j==="left"?!0:!!(N==="left"||s)),!1])(),{disabled:Z}=Me({disabled:ce||(m==null?void 0:m.control.disabled)}),y=(e,i="round")=>{let t=null;if(M){const l=Math[i](e/M);t=Math.min(c,Math.max(a,l*M))}if(o.isArray(X)){let l=t?Math.abs(t-e):1/0;if(l>0)for(const n of X){const r=o.isNumber(n)?n:n.value;if(i==="round"||i==="ceil"&&r-e>=0||i==="floor"&&r-e<=0){const f=Math.abs(r-e);f<l&&(l=f,t=r)}}}return t??a},O=(e,i)=>{if(i=i??N==="left",S.current){const t=S.current.getBoundingClientRect(),l=y((c-a)*(d?(k?e.clientY-t.top:t.bottom-e.clientY)/t.height:(k?t.right-e.clientX:e.clientX-t.left)/t.width));w(p?n=>{const r=i?0:1;if(n[r]!==l){const f=l-n[r],h=f>0;if(n[r]=l,o.isNumber(_)&&n[1]-n[0]<_){const R=i?1:0;n[R]=y(n[R]+f,h?"ceil":"floor"),n[1]-n[0]<_&&(n[r]=y(n[R]+(h?-_:_),h?"floor":"ceil"))}}}:l)}},L=e=>{if(M&&s&&S.current){const i=S.current.getBoundingClientRect(),t=Math.round((c-a)*(d?(k?e.clientY-s.clientY:s.clientY-e.clientY)/i.height:(k?s.clientX-e.clientX:e.clientX-s.clientX)/i.width)/M)*M,l=[0,0];let n=-1;for(const r of[s.left+t,s.right+t]){n+=1;const f=n===0?1:0;if(r<a){l[n]=a,l[f]=a+Math.abs(s.left-s.right);break}if(r>c){l[n]=c,l[f]=c-Math.abs(s.left-s.right);break}l[n]=r}w(l)}},ee=e=>{const i=(t=!0)=>{const l=t?$.current:E.current;l&&(O(e,t),P(t?"left":"right"),l.firstElementChild.focus({preventScroll:!0}))};if(p){if($.current&&E.current){const t=$.current.getBoundingClientRect(),l=E.current.getBoundingClientRect(),n=Math.abs(d?t.bottom-t.height/2-e.clientY:e.clientX-(t.left+t.width/2)),r=Math.abs(d?l.bottom-l.height/2-e.clientY:e.clientX-(l.left+l.width/2));K&&(d?e.clientY<Math.max(t.top,l.top):e.clientX>Math.min(t.right,l.right))&&(d?e.clientY>Math.min(t.bottom,l.bottom):e.clientX<Math.max(t.left,l.left))?U({left:b,right:v,clientX:e.clientX,clientY:e.clientY}):r<=n?i(!1):i(!0)}}else i(!0)};g.useEffect(()=>{var e,i,t,l;s?((e=V.current)==null||e.updatePosition(),(i=B.current)==null||i.updatePosition()):N==="left"?(t=V.current)==null||t.updatePosition():N==="right"&&((l=B.current)==null||l.updatePosition())},[I,N,s]);const q=!o.isNull(F)||!o.isNull(s);J(z,"touchmove",e=>{o.isNull(F)||(e.preventDefault(),O({clientX:e.touches[0].clientX,clientY:e.touches[0].clientY})),o.isNull(s)||(e.preventDefault(),L({clientX:e.touches[0].clientX,clientY:e.touches[0].clientY}))},{passive:!1},!q),J(z,"mousemove",e=>{o.isNull(F)||(e.preventDefault(),O({clientX:e.clientX,clientY:e.clientY})),o.isNull(s)||(e.preventDefault(),L({clientX:e.clientX,clientY:e.clientY}))},{},!q),J(z,"mouseup",()=>{P(null),U(null)},{},!q);const ge=(()=>{const e=[],i=(t,l=null)=>{let n=t/(c-a)*100;k&&(n=100-n),e.push(g.createElement("div",{...T(Y("slider__mark",{"slider__mark--hidden":t===a||t===c}),{style:{left:d?void 0:`${n}%`,bottom:d?`${n}%`:void 0}}),key:t},l&&g.createElement("div",{...Y("slider__mark-label",{"slider__mark-label.is-active":p?t<=Math.max(b,v)&&t>=Math.min(b,v):t<=b}),key:t},l)))};if(o.isArray(X))X.forEach(t=>{const l=o.isNumber(t)?t:t.value;i(l,o.isNumber(t)?null:t.label)});else if(o.isNumber(X))for(let t=0;t<(c-a)/X;t++){const l=t*X;i(l)}return e})(),te=e=>{const i=e?b:v,t=(ae??[])[e?0:1],l=A("input",{...Y("slider__input"),...m==null?void 0:m.inputAria,ref:e?D==null?void 0:D[0]:D==null?void 0:D[1],type:"range",value:i,max:c,min:a,step:M??void 0,disabled:Z,"aria-orientation":d?"vertical":"horizontal",onChange:n=>{const r=o.toNumber(n.currentTarget.value);if(p){const f=e?0:1;w(h=>{const R=r-h[f],G=R>0;if(h[f]=r,o.isNumber(_)&&h[1]-h[0]<_){const H=e?1:0;h[H]=y(h[H]+R,G?"ceil":"floor"),h[1]-h[0]<_&&(h[f]=y(h[H]+(G?-_:_),G?"floor":"ceil"))}})}else w(r)},onFocus:()=>{W(e?"left":"right")},onBlur:()=>{W(null)}});return A(Xe,{ref:e?V:B,visible:e?he:fe,title:Q?Q(i):i,placement:d?"right":"top",onVisibleChange:n=>{de(n?e?"left":"right":null)},children:A("div",{...T(Y("slider__input-wrapper"),{style:{left:d?void 0:`calc(${i} / ${c-a} * 100% - 7px)`,bottom:d?`calc(${i} / ${c-a} * 100% - 7px)`:void 0}}),ref:e?$:E,children:t?t(l):l})})},ie=e=>{e.button===0&&e.preventDefault()},me=xe({form:m});return le("div",{...u,...T(Y("slider",`slider--${d?"vertical":"horizontal"}`,{"slider.is-disabled":Z}),{className:u.className,style:u.style}),...me,ref:S,onMouseDown:e=>{var i;(i=u.onMouseDown)==null||i.call(u,e),ie(e),e.button===0&&ee(e)},onMouseUp:e=>{var i;(i=u.onMouseUp)==null||i.call(u,e),ie(e)},onTouchStart:e=>{var i;(i=u.onTouchStart)==null||i.call(u,e),ee({clientX:e.touches[0].clientX,clientY:e.touches[0].clientY})},onTouchEnd:e=>{var i;(i=u.onTouchEnd)==null||i.call(u,e),P(null),U(null)},children:[le("div",{...Y("slider__track",{"slider__track--reverse":k}),children:[A("div",{...T(Y("slider__thumb",{"slider__thumb.is-focused":s,"slider__thumb--draggable":K}),{style:d?{bottom:`calc(${Math.min(b,v)} / ${c-a} * 100%)`,top:`calc(${c-Math.max(b,v)} / ${c-a} * 100%)`}:{left:`calc(${Math.min(b,v)} / ${c-a} * 100%)`,right:`calc(${c-Math.max(b,v)} / ${c-a} * 100%)`}})}),te(!0),p&&te(!1)]}),ge]})}export{ke as S};