import{r as e,j as h,F as p,a as t}from"./index.js";import{S as x}from"./moovy-white.ts";const j=({src:r,alt:o,id:n,onClick:l,ref:i,className:c,lazy:d,srcSet:g,onLoad:f})=>{const[m,u]=e.useState("1"),[a,s]=e.useState(!0);e.useState(!0);const[y,v]=e.useState(r||"");return e.useEffect(()=>{const S=setInterval(()=>{u(Math.random().toString(36).substring(7))},5e3);return()=>clearInterval(S)},[]),h(p,{children:[t("img",{src:y,srcSet:g,alt:o,ref:i,onError:()=>s(()=>!0),onLoad:()=>{s(()=>!1)},style:{display:a?"none":"block"},className:c,id:n,loading:d?"lazy":"eager",onClick:l},m),t("div",{style:{display:a?"flex":"none",maxHeight:"100px"},children:t(x,{})})]})};export{j as I};