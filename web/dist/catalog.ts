import{r as o,j as e,a,N as t,O as s}from"./index.js";import{C as r}from"./catalog.styles.ts";import i from"./childHeader.ts";import{N as l}from"./navLinks.ts";import"./styled-components.browser.esm.ts";import"./commentThread.styles.ts";import"./index.esm.ts";import"./iconBase.ts";const f=()=>(o.useEffect(()=>{document.title="Catalog - Moovy"},[]),e(r,{children:[a(i,{text:"Catalog",className:"child-header"}),e(l,{className:"options",children:[a(t,{to:"",end:!0,className:"movies nav",defaultChecked:!0,children:a("div",{children:"Movies"})}),a(t,{to:"/catalog/shows",className:"shows nav",children:a("div",{children:"Shows"})})]}),a("div",{className:"content",children:a(s,{})})]}));export{f as default};
