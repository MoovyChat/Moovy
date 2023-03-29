import{C as e,s as t}from"./styled-components.browser.esm.ts";const i=e`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100%;
  margin: 5px 0;
  overflow-y: auto;
  overflow-x: hidden;
`,n=t.div`
  ${i}
`,s=t.div`
  ${i}
  opacity: 0;
  transition: all 1s;
  // Enter from
  &.ttList-enter {
    opacity: 0;
    transition: opacity 100ms ease-in;
  }
  //Enter to
  &.ttList-enter-active {
    opacity: 0;
    transition: opacity 100ms ease-in;
  }
  //Enter to
  &.ttList-enter-done {
    opacity: 1;
    transition: opacity 100ms ease-in;
  }

  // exit from
  &.ttList-exit {
    opacity: 1;
    transition: opacity 100ms ease-in;
  }

  // exit to
  &.ttList-exit-active {
    opacity: 1;
    transition: opacity 100ms ease-in;
  }
  // exit to
  &.ttList-exit-done {
    background-color: #ff005d;
    opacity: 0;
    transition: opacity 100ms ease-in;
  }
`;export{n as F,s as L};
