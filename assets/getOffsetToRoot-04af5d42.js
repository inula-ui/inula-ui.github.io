import{o as s,l as e}from"./index-249b6286.js";function u(o){s.useEffect(()=>o(),[])}function p(o,f="top"){let t=0;for(;!e.isNull(o);)t+=o[f==="top"?"offsetTop":"offsetLeft"],o=o.offsetParent;return t}export{p as g,u};
