import{r as i,a as t,j as s}from"./index.js";import{s as a}from"./styled-components.browser.esm.ts";import{C as r}from"./CSSTransition.ts";import"./inheritsLoose.ts";const c=a.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 99%;
  height: 100%;
  .logo {
    width: 30%;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  .text {
    font-size: 1rem;
    margin-top: 1rem;
    font-weight: 500;
  }
  //Enter to
  &.empty-enter-active {
    opacity: 0;
    transition: opacity 300ms ease-in;
  }
  //Enter to
  &.empty-enter-done {
    opacity: 1;
    transition: opacity 300ms ease-in;
  }

  // exit from
  &.empty-exit {
    opacity: 1;
    transition: opacity 300ms ease-in;
  }

  // exit to
  &.empty-exit-active {
    opacity: 1;
    transition: opacity 300ms ease-in;
  }
  // exit to
  &.empty-exit-done {
    background-color: #ff005d;
    opacity: 0;
    transition: opacity 300ms ease-in;
  }
`,m="/moovy-text.png",d=({msg:o})=>{const e=i.useRef(!1),n=i.useRef(null);return i.useEffect(()=>(e.current=!0,()=>{e.current=!1}),[]),t(r,{in:e.current,classNames:"empty",timeout:500,nodeRef:n,children:s(c,{children:[t("div",{className:"logo",children:t("img",{src:m,alt:"Moovy"})}),t("div",{className:"text",children:o})]})})};export{d as default};
