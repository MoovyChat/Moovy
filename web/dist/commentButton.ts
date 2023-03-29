import{a,b as i,c as n,d as s,s as r,p as c}from"./index.js";import{u as l,a as m}from"./hooks.ts";import{s as u}from"./styled-components.browser.esm.ts";import{m as x}from"./index.esm.ts";const b=u.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  left: 69%;
  bottom: 5%;
  background-color: #6d0e85;
  box-shadow: inset 0 0 7px black, 0 0 5px;
  cursor: pointer;
  transition: all 0.4s;
  svg {
    fill: white;
  }
  :hover {
    box-shadow: inset 0 0 5px black, 0 0 12px;
  }
  :active {
    box-shadow: inset 0 0 10px black, 0 0 5px;
  }
`,S=({type:o,data:d})=>{const e=l(),p=m(t=>t.popup.isPopupOpened);return a(b,{onClick:t=>{t.stopPropagation(),p?i.unstable_batchedUpdates(()=>{e(n(!1)),e(s("")),e(r({}))}):(i.unstable_batchedUpdates(()=>{e(n(!0)),o==="movie"?e(s(c.ADD_COMMENT)):o==="comment"&&e(s(c.ADD_REPLY))}),e(r(d)))},isOpen:p,children:a(x,{size:30})})};export{S as C};
