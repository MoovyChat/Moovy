import{u as E,r as s,at as H,au as $,a as r,j as p,R as j,i as k}from"./index.js";import{P as z}from"./tooltip.ts";import{s as F}from"./styled-components.browser.esm.ts";import{a as G}from"./helpers.ts";const I=F.div`
  display: flex;
  position: relative;
  width: 100%;
  max-height: ${e=>e.showMore?e.cardHeight:"100px"};
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 2px 1px;
  border-radius: 18px;
  transition: max-height 0.3s;
  cursor: pointer;
  .photo {
    align-self: flex-start;
    margin: 15px 5px 15px 15px;
    width: 40px;
    height: 40px;
  }
  .data {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: calc(100% - 50px);

    height: 100%;
    .name {
      font-size: 0.9em;
      font-weight: 600;
      margin-top: 10px;
      margin-left: 10px;
      display: flex;
      align-items: center;
      gap: 10px;
      .time {
        font-size: 0.6em;
        opacity: 0.6;
      }
    }
    .msg {
      display: block;
      font-size: 0.8em;
      margin-top: 10px;
      margin-left: 10px;
      white-space: pre-line;
      padding-bottom: 10px;
      width: 98%;
      overflow: hidden;
      transition: max-height 0.5s;
    }
    .show-more {
      font-weight: 600;
      font-size: 0.8em;
      color: ${e=>e.theme.mention};
    }
  }
`,q=({id:e,type:c,className:w,extendData:v})=>{const h=E(),[n,y]=s.useState(null),i=s.useRef(null),[C,M]=s.useState(""),[S,d]=s.useState(!1),[m,N]=s.useState(!1),[,R]=H(),[f]=$({variables:{id:e,type:c},pause:k()}),a=s.useRef(null);return s.useEffect(()=>{var g;const{data:t,error:l,fetching:b}=f;if(l&&console.log(l),!b&&t){const o=t.getCommentOrReply;i.current=o!=null&&o.comment?o.comment:o==null?void 0:o.reply,R({uid:(g=i==null?void 0:i.current)==null?void 0:g.commentedUserId}).then(P=>{const{data:u,error:x}=P;if(x&&console.log(x),u){const U=u.getUserMut;y(()=>U)}})}},[f]),s.useEffect(()=>{if(!a||!a.current)return;const{clientHeight:t,scrollHeight:l}=a.current;M(()=>`${l}px`),t<l?d(()=>!0):d(()=>!1)},[a.current]),r(I,{className:w,cardHeight:C,showMore:m,onClick:t=>{t.stopPropagation(),c==="reply"?h(`/reply/${e}`):c==="comment"&&h(`/comment/${e}`)},children:i.current?p(j.Fragment,{children:[r("div",{className:"photo",children:r(z,{src:n==null?void 0:n.photoUrl,user:n,tooltip:!0})}),p("div",{className:"data",children:[p("div",{className:"name",children:[r("span",{children:n&&n.nickname}),r("span",{className:"time",children:G(i.current.createdAt)})]}),r("div",{className:"msg",ref:a,children:i.current.message}),S&&v&&r("div",{className:"show-more",onClick:t=>{t.stopPropagation(),N(!m)},children:m?"Show less":"Show more"})]})]}):r("div",{className:"not-found",children:"The comment/reply has been deleted."})})};export{q as M};
