import{k as R,r as l,X as g,_ as C,w as x,e as U,Y as v,a as s,j as h,C as N,i as T,t as E}from"./index.js";import{C as O}from"./comments.styles.ts";import P from"./emptyPage.ts";import{H as q}from"./Helmet.ts";import M from"./loading.ts";import w from"./notFound.ts";import{R as y}from"./replyCard.ts";import{V as H}from"./index.ts";import"./styled-components.browser.esm.ts";import"./CSSTransition.ts";import"./inheritsLoose.ts";import"./loading.styles.ts";import"./moovy-white.ts";import"./cardTemplate.ts";import"./movieInfo.ts";import"./index.esm.ts";import"./iconBase.ts";import"./helpers.ts";import"./hooks.ts";import"./image.ts";import"./tooltip.ts";const S=(i,m,r)=>{const c=R();return{fetchMore:l.useCallback(()=>{var a;const{pageInfo:t}=((a=r==null?void 0:r.data)==null?void 0:a.getRepliesOfTheUser)||{};!(r!=null&&r.data)||!(t!=null&&t.hasNextPage)||c.query(g,{first:10,after:t==null?void 0:t.endCursor,uid:i}).toPromise().then(p=>{const{data:e,error:o}=p;console.log(p);const n=e==null?void 0:e.getRepliesOfTheUser;n==null||n.pageInfo;const u=n==null?void 0:n.nodes;m(d=>C.chain(d).concat(u).uniqBy("id").value())})},[r])}},$=()=>{const{id:i}=U();l.useEffect(()=>{document.title="Replies - Moovy"},[]);const m=l.useRef(null),[r,c]=l.useState([]),f=l.useRef(null),[t]=v({variables:{uid:i,first:10},pause:T()&&!i});l.useEffect(()=>{const{data:e,fetching:o}=t;if(!o&&e){const u=e.getRepliesOfTheUser.nodes;c(u)}},[t]);const a=e=>{e.stopPropagation();const o=e.target;o.scrollHeight-o.scrollTop-2<=o.clientHeight&&p()},{fetchMore:p}=S(i,c,t);return!i||t.error?s(w,{}):r.length<=0?s(P,{msg:"No Replies!"}):h(O,{children:[h(q,{children:[s("title",{children:`${i}: Replies`}),s("meta",{name:"description",content:`${i} replies`}),s("link",{rel:"canonical",href:`${N}/replies/${i}`})]}),s(l.Fragment,{children:h("div",{className:"child",onScroll:a,ref:f,children:[s(H,{ref:m,viewportRef:f,items:r,children:(e,o)=>e&&s(y,{comment:e},e.id)}),s("div",{className:"extra",children:t.fetching&&s(M,{})})]})})]})},te=x(E,{ssr:!0})($);export{te as default};