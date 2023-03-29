import{j as n,a as r}from"./index.js";import{n as l}from"./index.esm.ts";import{s as c}from"./styled-components.browser.esm.ts";const d=c.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 15px;
  border-radius: 15px;
  background-color: #a31414;
  font-size: 0.6em;
  color: #fff;
  gap: 10px;
  transition: all 0.3s ease-in-out;
  :hover {
    cursor: pointer;
    filter: contrast(120%);
    border-radius: 0px;
    box-shadow: 0 0 5px;
    transform: scale(1.1);
  }
`,m=({className:t,platform:o,url:p,type:e,id:i})=>n(d,{onClick:s=>{if(s.stopPropagation(),o==="NETFLIX"){let a=`https://www.netflix.com/${e==="show"?"title":"watch"}/${i}`;window.open(a,"_blank")}},className:t,children:[r("span",{children:r(l,{size:20})}),n("span",{children:[" Watch on ",o]})]});export{m as W};
