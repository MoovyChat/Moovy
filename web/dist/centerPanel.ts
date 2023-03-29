import{a as t,r as e,O as i}from"./index.js";import{s}from"./styled-components.browser.esm.ts";import a from"./logoLoading.ts";import{u as m}from"./isAuthUser.ts";import"./Helmet.ts";import"./loading.ts";import"./loading.styles.ts";import"./moovy-text-logo-white.ts";import"./splashScreen.styles.ts";import"./hooks.ts";const n=s.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100%;
  width: 100%;
  overflow: hidden;
`,w=({className:r,id:o})=>(m(),t(n,{className:r,id:o,children:t(e.Suspense,{fallback:t(a,{}),children:t(i,{})})}));export{w as default};
