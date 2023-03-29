import{j as o,a as t}from"./index.js";import{s as n}from"./styled-components.browser.esm.ts";const i=n.div`
  width: 100%;
  height: 100px;
  color: white;
  font-size: 12px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #c034c0;
  .arc-btn {
    display: inline-block;
    padding: 10px 20px;
    background-color: #3498db;
    color: #fff;
    text-align: center;
    text-decoration: none;
    font-size: 14px;
    font-weight: bold;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition: all 0.2s ease-in-out;
    z-index: 1;
    ::before {
    }
    :hover {
      ::before {
        content: '';
        color: white;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: -1;
        width: 200px;
        height: 200px;
        background-image: url('https://images.unsplash.com/photo-1531328552016-28615c8ea91f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80');
        background-size: cover;
        animation: particles 1s ease-in-out;
      }
    }

    @keyframes particles {
      0% {
        transform: translate(-50%, -50%) scale(0.4);
        opacity: 0;
      }
      100% {
        transform: translate(-50%, -50%) scale(1);
        opacity: 1;
      }
    }
  }
`,s=()=>o(i,{children:[t("p",{children:"New version available. Please update to latest version."}),t("div",{className:"arc-btn",onClick:e=>{e.stopPropagation(),window.open("https://www.netflix.com/watch/81513788?trackId=14170287&tctx=2%2C1%2C425f6d7d-f1b3-4d5c-b76c-bdc44b9b384d-32516550%2CNES_21968F364C22BEA080F24A6E382619-B9F225DDE3A711-640966F254_p_1676936973581%2C%2C%2C%2C%2C%2CVideo%3A81091393","_blank")},children:"Update"})]});export{s as default};
