import{o as C,u as o,b as i,j as n,m as l,e as y,F as u,S as p}from"./index-249b6286.js";const _={card:"^card","card--shadow":"^card--shadow","card--shadow-hover":"^card--shadow-hover",card__header:"^card__header","card__header-title":"^card__header-title","card__header-action":"^card__header-action",card__content:"^card__content",card__actions:"^card__actions",card__action:"^card__action","card__action.is-disabled":"is-disabled"},v=C.forwardRef((c,t)=>{const{styleOverrides:a,styleProvider:e,children:r,disabled:s=!1,...d}=o("CardAction",c),m=i(_,{card:e==null?void 0:e.card},a);return n("div",{...d,...l(m("card__action",{"card__action.is-disabled":s}),{className:d.className,style:d.style}),ref:t,role:d.role??"button",tabIndex:d.tabIndex??(s?-1:0),children:r})});function N(c){const{styleOverrides:t,styleProvider:a,actions:e,...r}=o("CardActions",c),s=i(_,{card:a==null?void 0:a.card},t);return n("div",{...r,...l(s("card__actions"),{className:r.className,style:r.style}),children:C.Children.map(e,(d,m)=>y(u,{children:[d,m!==e.length-1&&n(p,{style:{margin:8},vertical:!0})]}))})}function b(c){const{styleOverrides:t,styleProvider:a,children:e,...r}=o("CardContent",c),s=i(_,{card:a==null?void 0:a.card},t);return n("div",{...r,...l(s("card__content"),{className:r.className,style:r.style}),children:e})}function f(c){const{styleOverrides:t,styleProvider:a,children:e,action:r,...s}=o("CardHeader",c),d=i(_,{card:a==null?void 0:a.card},t);return y("div",{...s,...l(d("card__header"),{className:s.className,style:s.style}),children:[n("div",{...d("card__header-title"),children:e}),n("div",{...d("card__header-action"),children:r})]})}const h=c=>{const{children:t,styleOverrides:a,styleProvider:e,shadow:r=!1,...s}=o("Card",c),d=i(_,{card:e==null?void 0:e.card},a);return n("div",{...s,...l(d("card",{"card--shadow":r===!0,"card--shadow-hover":r==="hover"}),{className:s.className,style:s.style}),children:t})};h.Header=f;h.Content=b;h.Actions=N;h.Action=v;export{h as C};
