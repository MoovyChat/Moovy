import{r as i,S as u,j as n,a as r,C as h,i as v}from"./index.js";import{a as m}from"./catalog.styles.ts";import M from"./emptyPage.ts";import{H as T}from"./Helmet.ts";import x from"./loading.ts";import{T as y}from"./titleCard.ts";import{u as C}from"./useFetchMoreTitles.ts";import"./styled-components.browser.esm.ts";import"./CSSTransition.ts";import"./inheritsLoose.ts";import"./loading.styles.ts";const A=()=>{const l=i.useRef(null);i.useEffect(()=>{document.title="Movies - Moovy"},[]);const[o,c]=i.useState([]),[s]=u({variables:{type:"movie",first:15,after:""},pause:v()});i.useMemo(()=>{const{data:t,error:e,fetching:g}=s;if(e&&console.log(e),!g&&t){const a=t.getPaginatedTitles,d=a==null?void 0:a.nodes;c(d)}},[s]);const{fetchMore:f}=C("movie",c,s),p=t=>{t.stopPropagation();const e=t.target;e.scrollHeight-e.scrollTop-2<=e.clientHeight&&f()};return s.fetching?n(m,{children:[r(x,{}),";"]}):o&&(o==null?void 0:o.length)<=0?r(M,{msg:"Movies catalog is empty"}):n(m,{ref:l,onScroll:p,children:[n(T,{children:[r("title",{children:"Moovy: Movies"}),r("meta",{name:"description",content:"List of all movies"}),r("link",{rel:"canonical",href:`${h}/catalog`})]}),o&&o.map((t,e)=>t&&r(y,{title:t,parentRef:l,index:e+1,totalItems:o.length},t.id))]})};export{A as default};