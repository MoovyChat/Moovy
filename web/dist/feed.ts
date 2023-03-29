import{k as x,r as c,D as y,_ as A,E as a,H as L,i as N,a as t,j as m,F as E,C as R}from"./index.js";import{C as T}from"./comments.styles.ts";import{H as v}from"./Helmet.ts";import{V}from"./index.ts";import{l as d}from"./loadable.esm.ts";import{a as I}from"./hooks.ts";import"./styled-components.browser.esm.ts";import"./inheritsLoose.ts";const O=(i,h,o,u,f)=>{const p=x();return{fetchMore:c.useCallback(()=>{var _;const{pageInfo:n}=((_=o==null?void 0:o.data)==null?void 0:_.getFeed)||{};!(o!=null&&o.data)||!(n!=null&&n.hasNextPage)||p.query(y,{first:10,after:u,uid:i}).toPromise().then(g=>{const{data:e,error:r}=g;console.log({data:e});const s=e==null?void 0:e.getFeed,l=s==null?void 0:s.pageInfo;f(()=>l==null?void 0:l.endCursor);const C=s==null?void 0:s.nodes;h(D=>A.chain(D).concat(C).uniqBy("id").value())})},[o])}},H=d(()=>a(()=>import("./feedComment.ts"),["feedComment.ts","index.js","index.css","commentCard.ts","cardTemplate.ts","movieInfo.ts","index.esm.ts","iconBase.ts","styled-components.browser.esm.ts","helpers.ts","hooks.ts","image.ts","moovy-white.ts","tooltip.ts","loading.ts","Helmet.ts","loading.styles.ts","CSSTransition.ts","inheritsLoose.ts","cardTemplate.css"])),S=d(()=>a(()=>import("./feedReply.ts"),["feedReply.ts","index.js","index.css","loading.ts","Helmet.ts","loading.styles.ts","styled-components.browser.esm.ts","miniCommentCard.ts","tooltip.ts","hooks.ts","image.ts","moovy-white.ts","helpers.ts","replyCard.ts","cardTemplate.ts","movieInfo.ts","index.esm.ts","iconBase.ts","CSSTransition.ts","inheritsLoose.ts","cardTemplate.css"])),M=d(()=>a(()=>import("./loading.ts"),["loading.ts","index.js","index.css","Helmet.ts","loading.styles.ts","styled-components.browser.esm.ts"])),k=d(()=>a(()=>import("./notFound.ts"),["notFound.ts","index.js","index.css","Helmet.ts","moovy-white.ts","styled-components.browser.esm.ts"])),b=d(()=>a(()=>import("./emptyPage.ts"),["emptyPage.ts","index.js","index.css","styled-components.browser.esm.ts","CSSTransition.ts","inheritsLoose.ts"])),P=d(()=>a(()=>import("./childHeader.ts"),["childHeader.ts","index.js","index.css","styled-components.browser.esm.ts","commentThread.styles.ts","index.esm.ts","iconBase.ts"])),Y=()=>{const i=I(e=>e.user),h=c.useRef(null),o=c.useRef(null),[u,f]=c.useState([]),[p,F]=c.useState(""),[n]=L({variables:{uid:i==null?void 0:i.id,first:10,after:p},pause:N()}),{fetchMore:_}=O(i.id,f,n,p,F),g=e=>{e.stopPropagation();const r=e.target;r.scrollHeight-r.scrollTop-2<=r.clientHeight&&(console.log("fetching more"),_())};return c.useEffect(()=>{const{error:e,data:r,fetching:s}=n;if(e&&console.log(e),!s&&r){const l=r.getFeed;f(()=>l.nodes)}},[n]),n.error?t(k,{}):u.length<=0?m(E,{children:[m(v,{children:[t("title",{children:"Feed"}),t("meta",{name:"description",content:"Feed"}),t("link",{rel:"canonical",href:`${R}`})]}),t(P,{text:"Feed",className:"feed-header"}),t(b,{msg:"Your Feed is empty!"})]}):m(E,{children:[t(P,{text:"Feed",className:"feed-header"}),m(v,{children:[t("title",{children:"Feed"}),t("meta",{name:"description",content:"Feed"}),t("link",{rel:"canonical",href:`${R}`})]}),t(T,{children:m("div",{className:"child",ref:o,onScroll:g,children:[t(V,{ref:h,viewportRef:o,items:u,children:(e,r)=>e.type==="comment"?t(H,{id:e.id},r+e.id):t(S,{id:e.id},r+e.id)}),t("div",{className:"extra",children:n.fetching&&t(M,{})})]})})]})};export{Y as default};