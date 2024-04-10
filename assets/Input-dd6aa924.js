import{f as i,j as e,I as u,e as n,F as d,S as x,B as w}from"./index-67daa249.js";import{R as P,D as s}from"./Route-d8a22d9d.js";import{I as r}from"./Input-8645775f.js";import{S as N}from"./info-42c2b09c.js";import{S as m}from"./person-ec66af68.js";import{R as C}from"./Radio-fd37c9ee.js";import{C as a}from"./Compose-03703449.js";import{S as z}from"./search-e209e829.js";import{S as g}from"./Switch-5b9e3f5b.js";import"./getOffsetToRoot-f23c9dc0.js";import"./MdRoute-46c8df5b.js";import"./Anchor-c90cfd3e.js";import"./scrollTo-43681f28.js";import"./toPx-c5eafb8c.js";import"./add-a2fbbdd7.js";import"./useForkRef-a3c03025.js";import"./cancel-da720376.js";import"./visibility-f8bbfb37.js";import"./keyboard_arrow_down-86eb3efd.js";function p(){return i("div",{className:"row g-2",children:[e("div",{className:"col-auto",children:e(r,{placeholder:"Basic"})}),e("div",{className:"col-auto",children:e(r,{placeholder:"Basic",disabled:!0})})]})}function f(){return i("div",{className:"row g-2",children:[e("div",{className:"col-auto",children:e(r,{placeholder:"Text",prefix:e(u,{size:"1.25em",children:e(m,{})}),suffix:e(u,{size:"1.25em",children:e(N,{})})})}),e("div",{className:"col-auto",children:e(r,{placeholder:"Text",prefix:"Prefix",suffix:"Suffix"})}),e("div",{className:"col-auto",children:e(r,{placeholder:"Text",prefix:"Prefix",suffix:"Suffix",disabled:!0})})]})}function h(){return i("div",{className:"row g-2",children:[e("div",{className:"col-auto",children:e(r,{defaultModel:"Clearable",placeholder:"Clearable",clearable:!0})}),e("div",{className:"col-auto",children:e(r,{defaultModel:"Clearable",placeholder:"Clearable",suffix:"Suffix",clearable:!0})}),e("div",{className:"col-auto",children:e(r,{defaultModel:"Clearable",placeholder:"Clearable",clearable:!0,disabled:!0})})]})}function I(){return i("div",{className:"row g-2",children:[e("div",{className:"col-auto",children:e(r,{defaultModel:"Password",type:"password",placeholder:"Password"})}),e("div",{className:"col-auto",children:e(r,{defaultModel:"Password",type:"password",placeholder:"Password",clearable:!0})}),e("div",{className:"col-auto",children:e(r,{defaultModel:"Password",type:"password",placeholder:"Password",disabled:!0})})]})}function D(){return i("div",{className:"row g-2",children:[e("div",{className:"col-auto",children:e(r.Number,{placeholder:"Number"})}),e("div",{className:"col-auto",children:e(r.Number,{defaultModel:123,placeholder:"Number",clearable:!0})}),e("div",{className:"col-auto",children:e(r.Number,{max:1e3,min:10,step:10,placeholder:"max, min, step",prefix:"$"})}),e("div",{className:"col-auto",children:e(r.Number,{max:100,min:0,step:.01,placeholder:"decimal",suffix:"%"})}),e("div",{className:"col-auto",children:e(r.Number,{placeholder:"Number",disabled:!0})})]})}function S(){const[o,t]=n.useState("medium");return i(d,{children:[e(C.Group,{list:["small","medium","large"].map(l=>({label:l,value:l})),model:o,pattern:"outline",onModelChange:l=>{t(l)},children:l=>e(a,{children:l})}),e(x,{}),i("div",{className:"row g-2",children:[e("div",{className:"col-auto",children:e(r,{placeholder:o,size:o})}),e("div",{className:"col-auto",children:e(r,{placeholder:o,prefix:e(u,{size:"1.25em",children:e(m,{})}),suffix:e(u,{size:"1.25em",children:e(N,{})}),size:o})}),e("div",{className:"col-auto",children:e(r,{type:"password",placeholder:o,size:o})}),e("div",{className:"col-auto",children:e(r.Number,{placeholder:o,suffix:"%",size:o})})]})]})}function b(){const[o,t]=n.useState("medium"),[l,v]=n.useState(!1);return i(d,{children:[e(C.Group,{list:["small","medium","large"].map(c=>({label:c,value:c})),model:o,pattern:"outline",onModelChange:c=>{t(c)},children:c=>e(a,{className:"mb-3",children:c})}),e("br",{}),e(g,{model:l,onModelChange:v,children:"disabled"}),e(x,{}),i("div",{className:"row g-2",children:[e("div",{className:"col-auto",children:i(a,{size:o,disabled:l,children:[e(r,{placeholder:"Username",prefix:e(u,{size:"1.25em",children:e(m,{})})}),e(w,{icon:e(u,{children:e(z,{})})})]})}),e("div",{className:"col-auto",children:i(a,{size:o,disabled:l,children:[e(a.Item,{gray:!0,children:"http://"}),e(r,{placeholder:"URL"}),e(a.Item,{gray:!0,children:".com"})]})}),e("div",{className:"col-auto",children:i(a,{size:o,disabled:l,children:[e(a.Item,{children:"$"}),e(r.Number,{placeholder:"Price"})]})})]})]})}const O=n.memo(()=>{const o={InputBasicDemo:[105,109,112,111,114,116,32,123,32,73,110,112,117,116,32,125,32,102,114,111,109,32,39,64,105,110,117,108,97,45,117,105,47,99,111,109,112,111,110,101,110,116,115,39,59,10,10,101,120,112,111,114,116,32,100,101,102,97,117,108,116,32,102,117,110,99,116,105,111,110,32,68,101,109,111,40,41,32,123,10,32,32,114,101,116,117,114,110,32,40,10,32,32,32,32,60,100,105,118,32,99,108,97,115,115,78,97,109,101,61,34,114,111,119,32,103,45,50,34,62,10,32,32,32,32,32,32,60,100,105,118,32,99,108,97,115,115,78,97,109,101,61,34,99,111,108,45,97,117,116,111,34,62,10,32,32,32,32,32,32,32,32,60,73,110,112,117,116,32,112,108,97,99,101,104,111,108,100,101,114,61,34,66,97,115,105,99,34,32,47,62,10,32,32,32,32,32,32,60,47,100,105,118,62,10,32,32,32,32,32,32,60,100,105,118,32,99,108,97,115,115,78,97,109,101,61,34,99,111,108,45,97,117,116,111,34,62,10,32,32,32,32,32,32,32,32,60,73,110,112,117,116,32,112,108,97,99,101,104,111,108,100,101,114,61,34,66,97,115,105,99,34,32,100,105,115,97,98,108,101,100,32,47,62,10,32,32,32,32,32,32,60,47,100,105,118,62,10,32,32,32,32,60,47,100,105,118,62,10,32,32,41,59,10,125,10],InputAffixDemo:[105,109,112,111,114,116,32,123,32,73,99,111,110,44,32,73,110,112,117,116,32,125,32,102,114,111,109,32,39,64,105,110,117,108,97,45,117,105,47,99,111,109,112,111,110,101,110,116,115,39,59,10,105,109,112,111,114,116,32,73,110,102,111,79,117,116,108,105,110,101,100,32,102,114,111,109,32,39,64,109,97,116,101,114,105,97,108,45,100,101,115,105,103,110,45,105,99,111,110,115,47,115,118,103,47,111,117,116,108,105,110,101,100,47,105,110,102,111,46,115,118,103,63,114,101,97,99,116,39,59,10,105,109,112,111,114,116,32,80,101,114,115,111,110,79,117,116,108,105,110,101,100,32,102,114,111,109,32,39,64,109,97,116,101,114,105,97,108,45,100,101,115,105,103,110,45,105,99,111,110,115,47,115,118,103,47,111,117,116,108,105,110,101,100,47,112,101,114,115,111,110,46,115,118,103,63,114,101,97,99,116,39,59,10,10,101,120,112,111,114,116,32,100,101,102,97,117,108,116,32,102,117,110,99,116,105,111,110,32,68,101,109,111,40,41,32,123,10,32,32,114,101,116,117,114,110,32,40,10,32,32,32,32,60,100,105,118,32,99,108,97,115,115,78,97,109,101,61,34,114,111,119,32,103,45,50,34,62,10,32,32,32,32,32,32,60,100,105,118,32,99,108,97,115,115,78,97,109,101,61,34,99,111,108,45,97,117,116,111,34,62,10,32,32,32,32,32,32,32,32,60,73,110,112,117,116,10,32,32,32,32,32,32,32,32,32,32,112,108,97,99,101,104,111,108,100,101,114,61,34,84,101,120,116,34,10,32,32,32,32,32,32,32,32,32,32,112,114,101,102,105,120,61,123,10,32,32,32,32,32,32,32,32,32,32,32,32,60,73,99,111,110,32,115,105,122,101,61,34,49,46,50,53,101,109,34,62,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,60,80,101,114,115,111,110,79,117,116,108,105,110,101,100,32,47,62,10,32,32,32,32,32,32,32,32,32,32,32,32,60,47,73,99,111,110,62,10,32,32,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,32,32,32,32,115,117,102,102,105,120,61,123,10,32,32,32,32,32,32,32,32,32,32,32,32,60,73,99,111,110,32,115,105,122,101,61,34,49,46,50,53,101,109,34,62,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,60,73,110,102,111,79,117,116,108,105,110,101,100,32,47,62,10,32,32,32,32,32,32,32,32,32,32,32,32,60,47,73,99,111,110,62,10,32,32,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,32,32,47,62,10,32,32,32,32,32,32,60,47,100,105,118,62,10,32,32,32,32,32,32,60,100,105,118,32,99,108,97,115,115,78,97,109,101,61,34,99,111,108,45,97,117,116,111,34,62,10,32,32,32,32,32,32,32,32,60,73,110,112,117,116,32,112,108,97,99,101,104,111,108,100,101,114,61,34,84,101,120,116,34,32,112,114,101,102,105,120,61,34,80,114,101,102,105,120,34,32,115,117,102,102,105,120,61,34,83,117,102,102,105,120,34,32,47,62,10,32,32,32,32,32,32,60,47,100,105,118,62,10,32,32,32,32,32,32,60,100,105,118,32,99,108,97,115,115,78,97,109,101,61,34,99,111,108,45,97,117,116,111,34,62,10,32,32,32,32,32,32,32,32,60,73,110,112,117,116,32,112,108,97,99,101,104,111,108,100,101,114,61,34,84,101,120,116,34,32,112,114,101,102,105,120,61,34,80,114,101,102,105,120,34,32,115,117,102,102,105,120,61,34,83,117,102,102,105,120,34,32,100,105,115,97,98,108,101,100,32,47,62,10,32,32,32,32,32,32,60,47,100,105,118,62,10,32,32,32,32,60,47,100,105,118,62,10,32,32,41,59,10,125,10],InputClearableDemo:[105,109,112,111,114,116,32,123,32,73,110,112,117,116,32,125,32,102,114,111,109,32,39,64,105,110,117,108,97,45,117,105,47,99,111,109,112,111,110,101,110,116,115,39,59,10,10,101,120,112,111,114,116,32,100,101,102,97,117,108,116,32,102,117,110,99,116,105,111,110,32,68,101,109,111,40,41,32,123,10,32,32,114,101,116,117,114,110,32,40,10,32,32,32,32,60,100,105,118,32,99,108,97,115,115,78,97,109,101,61,34,114,111,119,32,103,45,50,34,62,10,32,32,32,32,32,32,60,100,105,118,32,99,108,97,115,115,78,97,109,101,61,34,99,111,108,45,97,117,116,111,34,62,10,32,32,32,32,32,32,32,32,60,73,110,112,117,116,32,100,101,102,97,117,108,116,77,111,100,101,108,61,34,67,108,101,97,114,97,98,108,101,34,32,112,108,97,99,101,104,111,108,100,101,114,61,34,67,108,101,97,114,97,98,108,101,34,32,99,108,101,97,114,97,98,108,101,32,47,62,10,32,32,32,32,32,32,60,47,100,105,118,62,10,32,32,32,32,32,32,60,100,105,118,32,99,108,97,115,115,78,97,109,101,61,34,99,111,108,45,97,117,116,111,34,62,10,32,32,32,32,32,32,32,32,60,73,110,112,117,116,32,100,101,102,97,117,108,116,77,111,100,101,108,61,34,67,108,101,97,114,97,98,108,101,34,32,112,108,97,99,101,104,111,108,100,101,114,61,34,67,108,101,97,114,97,98,108,101,34,32,115,117,102,102,105,120,61,34,83,117,102,102,105,120,34,32,99,108,101,97,114,97,98,108,101,32,47,62,10,32,32,32,32,32,32,60,47,100,105,118,62,10,32,32,32,32,32,32,60,100,105,118,32,99,108,97,115,115,78,97,109,101,61,34,99,111,108,45,97,117,116,111,34,62,10,32,32,32,32,32,32,32,32,60,73,110,112,117,116,32,100,101,102,97,117,108,116,77,111,100,101,108,61,34,67,108,101,97,114,97,98,108,101,34,32,112,108,97,99,101,104,111,108,100,101,114,61,34,67,108,101,97,114,97,98,108,101,34,32,99,108,101,97,114,97,98,108,101,32,100,105,115,97,98,108,101,100,32,47,62,10,32,32,32,32,32,32,60,47,100,105,118,62,10,32,32,32,32,60,47,100,105,118,62,10,32,32,41,59,10,125,10],InputPasswordDemo:[105,109,112,111,114,116,32,123,32,73,110,112,117,116,32,125,32,102,114,111,109,32,39,64,105,110,117,108,97,45,117,105,47,99,111,109,112,111,110,101,110,116,115,39,59,10,10,101,120,112,111,114,116,32,100,101,102,97,117,108,116,32,102,117,110,99,116,105,111,110,32,68,101,109,111,40,41,32,123,10,32,32,114,101,116,117,114,110,32,40,10,32,32,32,32,60,100,105,118,32,99,108,97,115,115,78,97,109,101,61,34,114,111,119,32,103,45,50,34,62,10,32,32,32,32,32,32,60,100,105,118,32,99,108,97,115,115,78,97,109,101,61,34,99,111,108,45,97,117,116,111,34,62,10,32,32,32,32,32,32,32,32,60,73,110,112,117,116,32,100,101,102,97,117,108,116,77,111,100,101,108,61,34,80,97,115,115,119,111,114,100,34,32,116,121,112,101,61,34,112,97,115,115,119,111,114,100,34,32,112,108,97,99,101,104,111,108,100,101,114,61,34,80,97,115,115,119,111,114,100,34,32,47,62,10,32,32,32,32,32,32,60,47,100,105,118,62,10,32,32,32,32,32,32,60,100,105,118,32,99,108,97,115,115,78,97,109,101,61,34,99,111,108,45,97,117,116,111,34,62,10,32,32,32,32,32,32,32,32,60,73,110,112,117,116,32,100,101,102,97,117,108,116,77,111,100,101,108,61,34,80,97,115,115,119,111,114,100,34,32,116,121,112,101,61,34,112,97,115,115,119,111,114,100,34,32,112,108,97,99,101,104,111,108,100,101,114,61,34,80,97,115,115,119,111,114,100,34,32,99,108,101,97,114,97,98,108,101,32,47,62,10,32,32,32,32,32,32,60,47,100,105,118,62,10,32,32,32,32,32,32,60,100,105,118,32,99,108,97,115,115,78,97,109,101,61,34,99,111,108,45,97,117,116,111,34,62,10,32,32,32,32,32,32,32,32,60,73,110,112,117,116,32,100,101,102,97,117,108,116,77,111,100,101,108,61,34,80,97,115,115,119,111,114,100,34,32,116,121,112,101,61,34,112,97,115,115,119,111,114,100,34,32,112,108,97,99,101,104,111,108,100,101,114,61,34,80,97,115,115,119,111,114,100,34,32,100,105,115,97,98,108,101,100,32,47,62,10,32,32,32,32,32,32,60,47,100,105,118,62,10,32,32,32,32,60,47,100,105,118,62,10,32,32,41,59,10,125,10],InputNumberDemo:[105,109,112,111,114,116,32,123,32,73,110,112,117,116,32,125,32,102,114,111,109,32,39,64,105,110,117,108,97,45,117,105,47,99,111,109,112,111,110,101,110,116,115,39,59,10,10,101,120,112,111,114,116,32,100,101,102,97,117,108,116,32,102,117,110,99,116,105,111,110,32,68,101,109,111,40,41,32,123,10,32,32,114,101,116,117,114,110,32,40,10,32,32,32,32,60,100,105,118,32,99,108,97,115,115,78,97,109,101,61,34,114,111,119,32,103,45,50,34,62,10,32,32,32,32,32,32,60,100,105,118,32,99,108,97,115,115,78,97,109,101,61,34,99,111,108,45,97,117,116,111,34,62,10,32,32,32,32,32,32,32,32,60,73,110,112,117,116,46,78,117,109,98,101,114,32,112,108,97,99,101,104,111,108,100,101,114,61,34,78,117,109,98,101,114,34,32,47,62,10,32,32,32,32,32,32,60,47,100,105,118,62,10,32,32,32,32,32,32,60,100,105,118,32,99,108,97,115,115,78,97,109,101,61,34,99,111,108,45,97,117,116,111,34,62,10,32,32,32,32,32,32,32,32,60,73,110,112,117,116,46,78,117,109,98,101,114,32,100,101,102,97,117,108,116,77,111,100,101,108,61,123,49,50,51,125,32,112,108,97,99,101,104,111,108,100,101,114,61,34,78,117,109,98,101,114,34,32,99,108,101,97,114,97,98,108,101,32,47,62,10,32,32,32,32,32,32,60,47,100,105,118,62,10,32,32,32,32,32,32,60,100,105,118,32,99,108,97,115,115,78,97,109,101,61,34,99,111,108,45,97,117,116,111,34,62,10,32,32,32,32,32,32,32,32,60,73,110,112,117,116,46,78,117,109,98,101,114,32,109,97,120,61,123,49,48,48,48,125,32,109,105,110,61,123,49,48,125,32,115,116,101,112,61,123,49,48,125,32,112,108,97,99,101,104,111,108,100,101,114,61,34,109,97,120,44,32,109,105,110,44,32,115,116,101,112,34,32,112,114,101,102,105,120,61,34,36,34,32,47,62,10,32,32,32,32,32,32,60,47,100,105,118,62,10,32,32,32,32,32,32,60,100,105,118,32,99,108,97,115,115,78,97,109,101,61,34,99,111,108,45,97,117,116,111,34,62,10,32,32,32,32,32,32,32,32,60,73,110,112,117,116,46,78,117,109,98,101,114,32,109,97,120,61,123,49,48,48,125,32,109,105,110,61,123,48,125,32,115,116,101,112,61,123,48,46,48,49,125,32,112,108,97,99,101,104,111,108,100,101,114,61,34,100,101,99,105,109,97,108,34,32,115,117,102,102,105,120,61,34,37,34,32,47,62,10,32,32,32,32,32,32,60,47,100,105,118,62,10,32,32,32,32,32,32,60,100,105,118,32,99,108,97,115,115,78,97,109,101,61,34,99,111,108,45,97,117,116,111,34,62,10,32,32,32,32,32,32,32,32,60,73,110,112,117,116,46,78,117,109,98,101,114,32,112,108,97,99,101,104,111,108,100,101,114,61,34,78,117,109,98,101,114,34,32,100,105,115,97,98,108,101,100,32,47,62,10,32,32,32,32,32,32,60,47,100,105,118,62,10,32,32,32,32,60,47,100,105,118,62,10,32,32,41,59,10,125,10],InputSizeDemo:[105,109,112,111,114,116,32,123,32,67,111,109,112,111,115,101,44,32,73,99,111,110,44,32,73,110,112,117,116,44,32,82,97,100,105,111,44,32,83,101,112,97,114,97,116,111,114,32,125,32,102,114,111,109,32,39,64,105,110,117,108,97,45,117,105,47,99,111,109,112,111,110,101,110,116,115,39,59,10,105,109,112,111,114,116,32,73,110,102,111,79,117,116,108,105,110,101,100,32,102,114,111,109,32,39,64,109,97,116,101,114,105,97,108,45,100,101,115,105,103,110,45,105,99,111,110,115,47,115,118,103,47,111,117,116,108,105,110,101,100,47,105,110,102,111,46,115,118,103,63,114,101,97,99,116,39,59,10,105,109,112,111,114,116,32,80,101,114,115,111,110,79,117,116,108,105,110,101,100,32,102,114,111,109,32,39,64,109,97,116,101,114,105,97,108,45,100,101,115,105,103,110,45,105,99,111,110,115,47,115,118,103,47,111,117,116,108,105,110,101,100,47,112,101,114,115,111,110,46,115,118,103,63,114,101,97,99,116,39,59,10,105,109,112,111,114,116,32,123,32,117,115,101,83,116,97,116,101,32,125,32,102,114,111,109,32,39,111,112,101,110,105,110,117,108,97,39,59,10,10,101,120,112,111,114,116,32,100,101,102,97,117,108,116,32,102,117,110,99,116,105,111,110,32,68,101,109,111,40,41,32,123,10,32,32,99,111,110,115,116,32,91,115,105,122,101,44,32,115,101,116,83,105,122,101,93,32,61,32,117,115,101,83,116,97,116,101,40,39,109,101,100,105,117,109,39,41,59,10,10,32,32,114,101,116,117,114,110,32,40,10,32,32,32,32,60,62,10,32,32,32,32,32,32,60,82,97,100,105,111,46,71,114,111,117,112,10,32,32,32,32,32,32,32,32,108,105,115,116,61,123,91,39,115,109,97,108,108,39,44,32,39,109,101,100,105,117,109,39,44,32,39,108,97,114,103,101,39,93,46,109,97,112,40,40,115,105,122,101,41,32,61,62,32,40,123,10,32,32,32,32,32,32,32,32,32,32,108,97,98,101,108,58,32,115,105,122,101,44,10,32,32,32,32,32,32,32,32,32,32,118,97,108,117,101,58,32,115,105,122,101,44,10,32,32,32,32,32,32,32,32,125,41,41,125,10,32,32,32,32,32,32,32,32,109,111,100,101,108,61,123,115,105,122,101,125,10,32,32,32,32,32,32,32,32,112,97,116,116,101,114,110,61,34,111,117,116,108,105,110,101,34,10,32,32,32,32,32,32,32,32,111,110,77,111,100,101,108,67,104,97,110,103,101,61,123,40,118,97,108,117,101,41,32,61,62,32,123,10,32,32,32,32,32,32,32,32,32,32,115,101,116,83,105,122,101,40,118,97,108,117,101,41,59,10,32,32,32,32,32,32,32,32,125,125,10,32,32,32,32,32,32,62,10,32,32,32,32,32,32,32,32,123,40,110,111,100,101,115,41,32,61,62,32,60,67,111,109,112,111,115,101,62,123,110,111,100,101,115,125,60,47,67,111,109,112,111,115,101,62,125,10,32,32,32,32,32,32,60,47,82,97,100,105,111,46,71,114,111,117,112,62,10,32,32,32,32,32,32,60,83,101,112,97,114,97,116,111,114,32,47,62,10,32,32,32,32,32,32,60,100,105,118,32,99,108,97,115,115,78,97,109,101,61,34,114,111,119,32,103,45,50,34,62,10,32,32,32,32,32,32,32,32,60,100,105,118,32,99,108,97,115,115,78,97,109,101,61,34,99,111,108,45,97,117,116,111,34,62,10,32,32,32,32,32,32,32,32,32,32,60,73,110,112,117,116,32,112,108,97,99,101,104,111,108,100,101,114,61,123,115,105,122,101,125,32,115,105,122,101,61,123,115,105,122,101,125,32,47,62,10,32,32,32,32,32,32,32,32,60,47,100,105,118,62,10,32,32,32,32,32,32,32,32,60,100,105,118,32,99,108,97,115,115,78,97,109,101,61,34,99,111,108,45,97,117,116,111,34,62,10,32,32,32,32,32,32,32,32,32,32,60,73,110,112,117,116,10,32,32,32,32,32,32,32,32,32,32,32,32,112,108,97,99,101,104,111,108,100,101,114,61,123,115,105,122,101,125,10,32,32,32,32,32,32,32,32,32,32,32,32,112,114,101,102,105,120,61,123,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,60,73,99,111,110,32,115,105,122,101,61,34,49,46,50,53,101,109,34,62,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,60,80,101,114,115,111,110,79,117,116,108,105,110,101,100,32,47,62,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,60,47,73,99,111,110,62,10,32,32,32,32,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,32,32,32,32,32,32,115,117,102,102,105,120,61,123,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,60,73,99,111,110,32,115,105,122,101,61,34,49,46,50,53,101,109,34,62,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,60,73,110,102,111,79,117,116,108,105,110,101,100,32,47,62,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,60,47,73,99,111,110,62,10,32,32,32,32,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,32,32,32,32,32,32,115,105,122,101,61,123,115,105,122,101,125,10,32,32,32,32,32,32,32,32,32,32,47,62,10,32,32,32,32,32,32,32,32,60,47,100,105,118,62,10,32,32,32,32,32,32,32,32,60,100,105,118,32,99,108,97,115,115,78,97,109,101,61,34,99,111,108,45,97,117,116,111,34,62,10,32,32,32,32,32,32,32,32,32,32,60,73,110,112,117,116,32,116,121,112,101,61,34,112,97,115,115,119,111,114,100,34,32,112,108,97,99,101,104,111,108,100,101,114,61,123,115,105,122,101,125,32,115,105,122,101,61,123,115,105,122,101,125,32,47,62,10,32,32,32,32,32,32,32,32,60,47,100,105,118,62,10,32,32,32,32,32,32,32,32,60,100,105,118,32,99,108,97,115,115,78,97,109,101,61,34,99,111,108,45,97,117,116,111,34,62,10,32,32,32,32,32,32,32,32,32,32,60,73,110,112,117,116,46,78,117,109,98,101,114,32,112,108,97,99,101,104,111,108,100,101,114,61,123,115,105,122,101,125,32,115,117,102,102,105,120,61,34,37,34,32,115,105,122,101,61,123,115,105,122,101,125,32,47,62,10,32,32,32,32,32,32,32,32,60,47,100,105,118,62,10,32,32,32,32,32,32,60,47,100,105,118,62,10,32,32,32,32,60,47,62,10,32,32,41,59,10,125,10],InputComposeDemo:[105,109,112,111,114,116,32,123,32,66,117,116,116,111,110,44,32,67,111,109,112,111,115,101,44,32,73,99,111,110,44,32,73,110,112,117,116,44,32,82,97,100,105,111,44,32,83,101,112,97,114,97,116,111,114,44,32,83,119,105,116,99,104,32,125,32,102,114,111,109,32,39,64,105,110,117,108,97,45,117,105,47,99,111,109,112,111,110,101,110,116,115,39,59,10,105,109,112,111,114,116,32,80,101,114,115,111,110,79,117,116,108,105,110,101,100,32,102,114,111,109,32,39,64,109,97,116,101,114,105,97,108,45,100,101,115,105,103,110,45,105,99,111,110,115,47,115,118,103,47,111,117,116,108,105,110,101,100,47,112,101,114,115,111,110,46,115,118,103,63,114,101,97,99,116,39,59,10,105,109,112,111,114,116,32,83,101,97,114,99,104,79,117,116,108,105,110,101,100,32,102,114,111,109,32,39,64,109,97,116,101,114,105,97,108,45,100,101,115,105,103,110,45,105,99,111,110,115,47,115,118,103,47,111,117,116,108,105,110,101,100,47,115,101,97,114,99,104,46,115,118,103,63,114,101,97,99,116,39,59,10,105,109,112,111,114,116,32,123,32,117,115,101,83,116,97,116,101,32,125,32,102,114,111,109,32,39,111,112,101,110,105,110,117,108,97,39,59,10,10,101,120,112,111,114,116,32,100,101,102,97,117,108,116,32,102,117,110,99,116,105,111,110,32,68,101,109,111,40,41,32,123,10,32,32,99,111,110,115,116,32,91,115,105,122,101,44,32,115,101,116,83,105,122,101,93,32,61,32,117,115,101,83,116,97,116,101,40,39,109,101,100,105,117,109,39,41,59,10,32,32,99,111,110,115,116,32,91,100,105,115,97,98,108,101,100,44,32,115,101,116,68,105,115,97,98,108,101,100,93,32,61,32,117,115,101,83,116,97,116,101,40,102,97,108,115,101,41,59,10,10,32,32,114,101,116,117,114,110,32,40,10,32,32,32,32,60,62,10,32,32,32,32,32,32,60,82,97,100,105,111,46,71,114,111,117,112,10,32,32,32,32,32,32,32,32,108,105,115,116,61,123,91,39,115,109,97,108,108,39,44,32,39,109,101,100,105,117,109,39,44,32,39,108,97,114,103,101,39,93,46,109,97,112,40,40,115,105,122,101,41,32,61,62,32,40,123,10,32,32,32,32,32,32,32,32,32,32,108,97,98,101,108,58,32,115,105,122,101,44,10,32,32,32,32,32,32,32,32,32,32,118,97,108,117,101,58,32,115,105,122,101,44,10,32,32,32,32,32,32,32,32,125,41,41,125,10,32,32,32,32,32,32,32,32,109,111,100,101,108,61,123,115,105,122,101,125,10,32,32,32,32,32,32,32,32,112,97,116,116,101,114,110,61,34,111,117,116,108,105,110,101,34,10,32,32,32,32,32,32,32,32,111,110,77,111,100,101,108,67,104,97,110,103,101,61,123,40,118,97,108,117,101,41,32,61,62,32,123,10,32,32,32,32,32,32,32,32,32,32,115,101,116,83,105,122,101,40,118,97,108,117,101,41,59,10,32,32,32,32,32,32,32,32,125,125,10,32,32,32,32,32,32,62,10,32,32,32,32,32,32,32,32,123,40,110,111,100,101,115,41,32,61,62,32,60,67,111,109,112,111,115,101,32,99,108,97,115,115,78,97,109,101,61,34,109,98,45,51,34,62,123,110,111,100,101,115,125,60,47,67,111,109,112,111,115,101,62,125,10,32,32,32,32,32,32,60,47,82,97,100,105,111,46,71,114,111,117,112,62,10,32,32,32,32,32,32,60,98,114,32,47,62,10,32,32,32,32,32,32,60,83,119,105,116,99,104,32,109,111,100,101,108,61,123,100,105,115,97,98,108,101,100,125,32,111,110,77,111,100,101,108,67,104,97,110,103,101,61,123,115,101,116,68,105,115,97,98,108,101,100,125,62,10,32,32,32,32,32,32,32,32,100,105,115,97,98,108,101,100,10,32,32,32,32,32,32,60,47,83,119,105,116,99,104,62,10,32,32,32,32,32,32,60,83,101,112,97,114,97,116,111,114,32,47,62,10,32,32,32,32,32,32,60,100,105,118,32,99,108,97,115,115,78,97,109,101,61,34,114,111,119,32,103,45,50,34,62,10,32,32,32,32,32,32,32,32,60,100,105,118,32,99,108,97,115,115,78,97,109,101,61,34,99,111,108,45,97,117,116,111,34,62,10,32,32,32,32,32,32,32,32,32,32,60,67,111,109,112,111,115,101,32,115,105,122,101,61,123,115,105,122,101,125,32,100,105,115,97,98,108,101,100,61,123,100,105,115,97,98,108,101,100,125,62,10,32,32,32,32,32,32,32,32,32,32,32,32,60,73,110,112,117,116,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,112,108,97,99,101,104,111,108,100,101,114,61,34,85,115,101,114,110,97,109,101,34,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,112,114,101,102,105,120,61,123,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,60,73,99,111,110,32,115,105,122,101,61,34,49,46,50,53,101,109,34,62,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,60,80,101,114,115,111,110,79,117,116,108,105,110,101,100,32,47,62,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,60,47,73,99,111,110,62,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,32,32,32,32,32,32,47,62,10,32,32,32,32,32,32,32,32,32,32,32,32,60,66,117,116,116,111,110,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,105,99,111,110,61,123,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,60,73,99,111,110,62,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,60,83,101,97,114,99,104,79,117,116,108,105,110,101,100,32,47,62,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,60,47,73,99,111,110,62,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,32,32,32,32,32,32,47,62,10,32,32,32,32,32,32,32,32,32,32,60,47,67,111,109,112,111,115,101,62,10,32,32,32,32,32,32,32,32,60,47,100,105,118,62,10,32,32,32,32,32,32,32,32,60,100,105,118,32,99,108,97,115,115,78,97,109,101,61,34,99,111,108,45,97,117,116,111,34,62,10,32,32,32,32,32,32,32,32,32,32,60,67,111,109,112,111,115,101,32,115,105,122,101,61,123,115,105,122,101,125,32,100,105,115,97,98,108,101,100,61,123,100,105,115,97,98,108,101,100,125,62,10,32,32,32,32,32,32,32,32,32,32,32,32,60,67,111,109,112,111,115,101,46,73,116,101,109,32,103,114,97,121,62,104,116,116,112,58,47,47,60,47,67,111,109,112,111,115,101,46,73,116,101,109,62,10,32,32,32,32,32,32,32,32,32,32,32,32,60,73,110,112,117,116,32,112,108,97,99,101,104,111,108,100,101,114,61,34,85,82,76,34,32,47,62,10,32,32,32,32,32,32,32,32,32,32,32,32,60,67,111,109,112,111,115,101,46,73,116,101,109,32,103,114,97,121,62,46,99,111,109,60,47,67,111,109,112,111,115,101,46,73,116,101,109,62,10,32,32,32,32,32,32,32,32,32,32,60,47,67,111,109,112,111,115,101,62,10,32,32,32,32,32,32,32,32,60,47,100,105,118,62,10,32,32,32,32,32,32,32,32,60,100,105,118,32,99,108,97,115,115,78,97,109,101,61,34,99,111,108,45,97,117,116,111,34,62,10,32,32,32,32,32,32,32,32,32,32,60,67,111,109,112,111,115,101,32,115,105,122,101,61,123,115,105,122,101,125,32,100,105,115,97,98,108,101,100,61,123,100,105,115,97,98,108,101,100,125,62,10,32,32,32,32,32,32,32,32,32,32,32,32,60,67,111,109,112,111,115,101,46,73,116,101,109,62,36,60,47,67,111,109,112,111,115,101,46,73,116,101,109,62,10,32,32,32,32,32,32,32,32,32,32,32,32,60,73,110,112,117,116,46,78,117,109,98,101,114,32,112,108,97,99,101,104,111,108,100,101,114,61,34,80,114,105,99,101,34,32,47,62,10,32,32,32,32,32,32,32,32,32,32,60,47,67,111,109,112,111,115,101,62,10,32,32,32,32,32,32,32,32,60,47,100,105,118,62,10,32,32,32,32,32,32,60,47,100,105,118,62,10,32,32,32,32,60,47,62,10,32,32,41,59,10,125,10]},t={InputBasicDemo:[46,105,45,105,110,112,117,116,32,123,10,32,32,119,105,100,116,104,58,32,50,52,48,112,120,59,10,125,10],InputAffixDemo:[46,105,45,105,110,112,117,116,32,123,10,32,32,119,105,100,116,104,58,32,50,52,48,112,120,59,10,125,10],InputClearableDemo:[46,105,45,105,110,112,117,116,32,123,10,32,32,119,105,100,116,104,58,32,50,52,48,112,120,59,10,125,10],InputPasswordDemo:[46,105,45,105,110,112,117,116,32,123,10,32,32,119,105,100,116,104,58,32,50,52,48,112,120,59,10,125,10],InputNumberDemo:[46,105,45,105,110,112,117,116,32,123,10,32,32,119,105,100,116,104,58,32,50,52,48,112,120,59,10,125,10],InputSizeDemo:[46,105,45,105,110,112,117,116,32,123,10,32,32,119,105,100,116,104,58,32,50,52,48,112,120,59,10,125,10],InputComposeDemo:[46,105,45,99,111,109,112,111,115,101,32,123,10,32,32,119,105,100,116,104,58,32,51,50,48,112,120,59,10,125,10,10,46,105,45,105,110,112,117,116,32,123,10,32,32,102,108,101,120,58,32,49,32,48,32,48,59,10,32,32,111,118,101,114,102,108,111,119,58,32,104,105,100,100,101,110,59,10,125,10]},l={"en-US":{title:"Input",subtitle:"Input",description:[10,10,84,104,101,32,96,73,110,112,117,116,96,32,99,111,109,112,111,110,101,110,116,46,10,10],aria:"",compose:"true",virtualScroll:"",api:[35,35,32,65,80,73,10,10,60,100,105,118,32,115,116,121,108,101,61,34,112,97,100,100,105,110,103,58,32,52,48,112,120,32,48,59,102,111,110,116,45,115,105,122,101,58,32,52,56,112,120,59,32,116,101,120,116,45,97,108,105,103,110,58,32,99,101,110,116,101,114,59,34,62,240,159,154,167,60,47,100,105,118,62,10],demos:i(d,{children:[e(s,{id:"InputBasicDemo",renderer:e(p,{}),title:"Basic",description:[10,10,84,104,101,32,115,105,109,112,108,101,115,116,32,117,115,97,103,101,46,10,10],tsxSource:o.InputBasicDemo,scssSource:t.InputBasicDemo}),e(s,{id:"InputAffixDemo",renderer:e(f,{}),title:"Prefix and suffix",description:[10,10,45,32,85,115,101,32,116,104,101,32,96,112,114,101,102,105,120,96,32,112,114,111,112,32,116,111,32,115,101,116,32,116,104,101,32,112,114,101,102,105,120,10,45,32,85,115,101,32,116,104,101,32,96,115,117,102,102,105,120,96,32,112,114,111,112,32,116,111,32,115,101,116,32,116,104,101,32,115,117,102,102,105,120,10,10],tsxSource:o.InputAffixDemo,scssSource:t.InputAffixDemo}),e(s,{id:"InputClearableDemo",renderer:e(h,{}),title:"Clearable",description:[10,10,73,102,32,116,104,101,32,96,99,108,101,97,114,97,98,108,101,96,32,112,114,111,112,32,105,115,32,96,116,114,117,101,96,44,32,116,104,101,32,99,108,101,97,114,32,98,117,116,116,111,110,32,105,115,32,115,104,111,119,110,46,10,10],tsxSource:o.InputClearableDemo,scssSource:t.InputClearableDemo}),e(s,{id:"InputPasswordDemo",renderer:e(I,{}),title:"Password box",description:[10,10,73,102,32,116,104,101,32,96,116,121,112,101,96,32,112,114,111,112,32,105,115,32,96,112,97,115,115,119,111,114,100,96,44,32,116,104,101,32,112,97,115,115,119,111,114,100,32,98,111,120,32,105,115,32,100,105,115,112,108,97,121,101,100,46,10,10],tsxSource:o.InputPasswordDemo,scssSource:t.InputPasswordDemo}),e(s,{id:"InputNumberDemo",renderer:e(D,{}),title:"Number input",description:[10,10,84,104,101,32,98,97,115,105,99,32,117,115,97,103,101,32,111,102,32,96,73,110,112,117,116,46,78,117,109,98,101,114,96,46,10,10],tsxSource:o.InputNumberDemo,scssSource:t.InputNumberDemo}),e(s,{id:"InputSizeDemo",renderer:e(S,{}),title:"Size",description:[10,10,84,104,101,32,96,73,110,112,117,116,96,32,104,97,115,32,51,32,115,105,122,101,115,58,32,96,115,109,97,108,108,96,44,32,96,109,101,100,105,117,109,96,32,97,110,100,32,96,108,97,114,103,101,96,46,10,10],tsxSource:o.InputSizeDemo,scssSource:t.InputSizeDemo}),e(s,{id:"InputComposeDemo",renderer:e(b,{}),title:"Compose",description:[10,10,83,117,112,112,111,114,116,32,117,115,105,110,103,32,96,67,111,109,112,111,115,101,96,32,102,111,114,32,99,111,109,98,105,110,97,116,105,111,110,46,10,10,70,111,114,32,109,111,114,101,32,117,115,97,103,101,44,32,112,108,101,97,115,101,32,114,101,102,101,114,32,116,111,32,91,67,111,109,112,111,115,101,93,40,47,99,111,109,112,111,110,101,110,116,115,47,67,111,109,112,111,115,101,41,46,10,10],tsxSource:o.InputComposeDemo,scssSource:t.InputComposeDemo})]}),links:[{title:"Basic",href:"InputBasicDemo"},{title:"Prefix and suffix",href:"InputAffixDemo"},{title:"Clearable",href:"InputClearableDemo"},{title:"Password box",href:"InputPasswordDemo"},{title:"Number input",href:"InputNumberDemo"},{title:"Size",href:"InputSizeDemo"},{title:"Compose",href:"InputComposeDemo"}]},"zh-CN":{title:"Input",subtitle:"输入框",description:[10,10,96,73,110,112,117,116,96,32,231,187,132,228,187,182,227,128,130,10,10],aria:"",compose:"true",virtualScroll:"",api:[35,35,32,65,80,73,10,10,60,100,105,118,32,115,116,121,108,101,61,34,112,97,100,100,105,110,103,58,32,52,48,112,120,32,48,59,102,111,110,116,45,115,105,122,101,58,32,52,56,112,120,59,32,116,101,120,116,45,97,108,105,103,110,58,32,99,101,110,116,101,114,59,34,62,240,159,154,167,60,47,100,105,118,62,10],demos:i(d,{children:[e(s,{id:"InputBasicDemo",renderer:e(p,{}),title:"基本",description:[10,10,230,156,128,231,174,128,229,141,149,231,154,132,231,148,168,230,179,149,227,128,130,10,10],tsxSource:o.InputBasicDemo,scssSource:t.InputBasicDemo}),e(s,{id:"InputAffixDemo",renderer:e(f,{}),title:"前缀和后缀",description:[10,10,45,32,228,189,191,231,148,168,32,96,112,114,101,102,105,120,96,32,229,177,158,230,128,167,232,174,190,231,189,174,229,137,141,231,188,128,10,45,32,228,189,191,231,148,168,32,96,115,117,102,102,105,120,96,32,229,177,158,230,128,167,232,174,190,231,189,174,229,144,142,231,188,128,10,10],tsxSource:o.InputAffixDemo,scssSource:t.InputAffixDemo}),e(s,{id:"InputClearableDemo",renderer:e(h,{}),title:"可清除",description:[10,10,96,99,108,101,97,114,97,98,108,101,96,32,229,177,158,230,128,167,228,184,186,32,96,116,114,117,101,96,32,230,151,182,239,188,140,230,152,190,231,164,186,230,184,133,233,153,164,230,140,137,233,146,174,227,128,130,10,10],tsxSource:o.InputClearableDemo,scssSource:t.InputClearableDemo}),e(s,{id:"InputPasswordDemo",renderer:e(I,{}),title:"密码框",description:[10,10,96,116,121,112,101,96,32,229,177,158,230,128,167,228,184,186,32,96,112,97,115,115,119,111,114,100,96,32,230,151,182,239,188,140,230,152,190,231,164,186,229,175,134,231,160,129,230,161,134,227,128,130,10,10],tsxSource:o.InputPasswordDemo,scssSource:t.InputPasswordDemo}),e(s,{id:"InputNumberDemo",renderer:e(D,{}),title:"数字输入框",description:[10,10,96,73,110,112,117,116,46,78,117,109,98,101,114,96,32,231,154,132,229,159,186,230,156,172,231,148,168,230,179,149,227,128,130,10,10],tsxSource:o.InputNumberDemo,scssSource:t.InputNumberDemo}),e(s,{id:"InputSizeDemo",renderer:e(S,{}),title:"尺寸",description:[10,10,96,73,110,112,117,116,96,32,230,156,137,32,51,32,231,167,141,229,176,186,229,175,184,239,188,154,96,115,109,97,108,108,96,227,128,129,96,109,101,100,105,117,109,96,32,229,146,140,32,96,108,97,114,103,101,96,227,128,130,10,10],tsxSource:o.InputSizeDemo,scssSource:t.InputSizeDemo}),e(s,{id:"InputComposeDemo",renderer:e(b,{}),title:"Compose",description:[10,10,230,148,175,230,140,129,228,189,191,231,148,168,32,96,67,111,109,112,111,115,101,96,32,232,191,155,232,161,140,231,187,132,229,144,136,227,128,130,10,10,230,155,180,229,164,154,231,148,168,230,179,149,232,175,183,229,143,130,232,128,131,32,91,67,111,109,112,111,115,101,93,40,47,99,111,109,112,111,110,101,110,116,115,47,67,111,109,112,111,115,101,41,227,128,130,10,10],tsxSource:o.InputComposeDemo,scssSource:t.InputComposeDemo})]}),links:[{title:"基本",href:"InputBasicDemo"},{title:"前缀和后缀",href:"InputAffixDemo"},{title:"可清除",href:"InputClearableDemo"},{title:"密码框",href:"InputPasswordDemo"},{title:"数字输入框",href:"InputNumberDemo"},{title:"尺寸",href:"InputSizeDemo"},{title:"Compose",href:"InputComposeDemo"}]}};return e(P,{...l})});export{O as Input,O as default};