import{a as o}from"./index.js";import{s as i}from"./styled-components.browser.esm.ts";const n=i.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  border-top: 1px solid rgba(255, 255, 255, 0.4);
  padding: 10px;
  font-weight: 600;
  transition: all 0.5s;
  .nav {
    text-decoration: none;
    color: #929292;
    margin: 0 10px;
    padding: 10px;
    font-size: 14px;
    cursor: pointer;
    position: relative;

    &:before {
      content: '';
      position: absolute;
      left: 50%;
      bottom: -2px;
      width: 0%;
      height: 2px;
      background-color: ${t=>t.theme.nav};
      transition: width 0.3s ease-out, left 0.3s ease-out;
    }

    &:hover {
      color: ${t=>t.theme.nav};
      &:before {
        width: 100%;
        left: 0;
      }
    }

    &.active {
      font-weight: bold;
      color: ${t=>t.theme.nav};

      &:before {
        width: 100%;
        left: 0;
      }
    }

    @media (prefers-reduced-motion: no-preference) {
      &:before {
        transition-duration: 0.6s;
        transition-timing-function: cubic-bezier(0.22, 0.61, 0.36, 1);
        transition-delay: 0.05s;
      }

      &:hover:before,
      &.active:before {
        transition-duration: 0.3s;
        transition-timing-function: cubic-bezier(0.22, 0.61, 0.36, 1);
        transition-delay: 0s;
      }
    }
  }
`,s=({children:t,className:e})=>o(n,{className:e,children:t});export{s as N};
