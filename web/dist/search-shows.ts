import{e as P,r,u as T,a9 as x,a as s,j as g,C as w}from"./index.js";import{a as C}from"./catalog.styles.ts";import E from"./emptyPage.ts";import{H}from"./Helmet.ts";import N from"./loading.ts";import{T as R}from"./titleCard.ts";import"./styled-components.browser.esm.ts";import"./CSSTransition.ts";import"./inheritsLoose.ts";import"./loading.styles.ts";const D=()=>{const{search:o}=P();let m=r.useRef(null);T();const[p,h]=r.useState(1),[f,u]=r.useState(1),[a,S]=r.useState([]),[{data:l,error:n,fetching:c}]=x({variables:{search:o,page:p,limit:10}});r.useMemo(()=>{if(n&&console.log(n),l&&!c){const t=l.searchTitles,e=t==null?void 0:t.lastPage;e&&u(()=>e);const i=t==null?void 0:t.titles;i&&S(()=>i)}},[l,c,n,o]);const d=t=>{t.stopPropagation();const e=t.target;e.scrollHeight-e.scrollTop-2<=e.clientHeight&&p!==f&&h(i=>i+1)};return c?s(N,{}):a.length<=0?s(E,{msg:"No Shows found"}):g(C,{ref:m,onScroll:d,children:[g(H,{children:[s("title",{children:`${o}: Shows`}),s("meta",{name:"description",content:`${o}: Shows`}),s("link",{rel:"canonical",href:`${w}/search/${o}/shows}`})]}),a&&a.map((t,e)=>s(R,{title:t,parentRef:m,index:e+1,totalItems:a.length},t.id))]})};export{D as default};