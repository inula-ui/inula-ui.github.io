import{o as i,l as t}from"./index-150908e9.js";function u(o,n){t.isFunction(o)?o(n):t.isObject(o)&&"current"in o&&(o.current=n)}function r(...o){return i.useCallback(n=>{o.forEach(s=>{u(s,n)})},[...o])}export{r as u};