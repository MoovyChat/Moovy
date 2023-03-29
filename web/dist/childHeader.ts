import{u as s,j as n,a as e}from"./index.js";import{s as d}from"./styled-components.browser.esm.ts";import{H as c}from"./commentThread.styles.ts";import{r as l}from"./index.esm.ts";import"./iconBase.ts";const f=d.div`
  position: sticky;
  top: 0;
  padding: 5px 0;
  display: flex;
  align-items: center;
  z-index: 5;
  width: 100%;
  backdrop-filter: blur(10px);
  .back-button {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    padding: 4px;
    margin-left: 2px;
    :hover {
      cursor: pointer;
      background-color: #ffffff2c;
      box-shadow: 0 0 5px;
    }
    :active {
      background-color: #ffffffa2;
    }
  }
  .header-text {
    font-size: 1.1rem;
    margin-left: 10px;
  }
`,h=({text:a,className:t,children:r})=>{const o=s();return n(f,{className:t,children:[e("div",{className:"back-button",onClick:i=>{i.stopPropagation(),o(-1)},children:e(l,{size:30})}),e(c,{className:"header-text",children:a||r})]})};export{h as default};
