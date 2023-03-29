import{j as a,a as t,w as R,r,u as M,T as _,U as H,i as U,V as E,_ as j,C as A,t as S}from"./index.js";import L from"./childHeader.ts";import T from"./emptyPage.ts";import{H as $}from"./commentThread.styles.ts";import{H as z}from"./Helmet.ts";import I from"./loading.ts";import q from"./notFound.ts";import{M as V}from"./miniCommentCard.ts";import{s as m}from"./styled-components.browser.esm.ts";import{P as B}from"./tooltip.ts";import{a as F}from"./helpers.ts";import{V as Q}from"./index.ts";import{a as D}from"./hooks.ts";import"./index.esm.ts";import"./iconBase.ts";import"./CSSTransition.ts";import"./inheritsLoose.ts";import"./loading.styles.ts";import"./moovy-white.ts";import"./image.ts";const G=m.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 100%;
  height: 100%;
  .header {
    width: 100%;
    .header-text {
      width: 100%;
    }
    .heading {
      padding: 20px 0;
      display: flex;
      width: 100%;
      justify-content: space-between;
      align-items: center;
      .count {
        margin-left: 10px;
        padding: 2px 10px;
        font-size: 0.6em;
        background-color: ${i=>i.theme.nav};
        color: white;
        font-weight: 700;
        border-radius: 18px;
      }
      .clear {
        font-size: 14px;
        margin-right: 10px;
        box-shadow: 0 0 1px;
        padding: 7px 10px;
        border-radius: 18px;
        cursor: pointer;
        :hover {
          box-shadow: 0 0 5px;
        }
      }
    }
  }
  .notifications {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    overflow: auto;
  }
`,O=m.div`
  display: flex;
  position: relative;
  width: 100%;
  flex-direction: column;
  padding: 25px 0px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-top: 0.3px solid #8f8f8f81;
  :nth-last-child(2) {
    border-bottom: 0.3px solid #8f8f8f81;
  }
  .first {
    display: flex;
    width: 100%;
    height: 100%;
    min-height: 40px;
    .profile-pic {
      position: absolute;
      top: 20px;
      left: 25px;
      width: 50px;
      height: 50px;
    }
    .message {
      position: absolute;
      left: 90px;
      width: 70%;
      font-weight: 500;
      line-height: 16px;
      .new {
        margin-right: 10px;
        padding: 2px 10px;
        font-size: 0.7em;
        background-color: #0099ff;
        color: white;
        font-weight: 700;
        border-radius: 18px;
      }
    }
    .timestamp {
      position: absolute;
      right: 20px;
      font-size: 0.8em;
      font-weight: 600;
    }
  }
  .second {
    width: 70%;
  }
`,J=({notification:i,onClick:d,type:c})=>a(O,{onClick:d,children:[a("div",{className:"first",children:[t("div",{className:"profile-pic",children:t(B,{src:i.fromUserPhotoUrl,tooltip:!0})}),a("div",{className:"message",children:[!i.isRead&&t("span",{className:"new",children:"New"}),t("span",{children:i.message})]}),t("div",{className:"timestamp",children:F(i.createdAt)})]}),t("div",{className:"second",children:c==="LikeNotifications"&&t(V,{id:i.commentId,type:"comment",className:"mini"})})]}),K=()=>{const i=D(e=>e.user),d=r.useRef(null),c=r.useRef(null),p=M(),[o,h]=r.useState([]),[,u]=_(),[g,x]=r.useState(1),[l]=H({variables:{uid:i.id,page:g,limit:5},pause:U()}),[,N]=E();r.useEffect(()=>{document.title="Notifications - Moovy"},[]);const w=e=>{e.stopPropagation();const s=e.target;s.scrollHeight-s.scrollTop-2<=s.clientHeight&&x(n=>n+1)};r.useEffect(()=>{o.map(e=>{N({id:parseInt(e.id),type:e.__typename==="LikeNotifications"?"like":"follow",uid:i.id})})},[o.length]),r.useEffect(()=>{const{data:e,error:s,fetching:n}=l;if(s&&console.log(s),!n&&e){const f=e.getUserNotifications,b=f.follow,C=f.like;let k=[];const P=j.chain(k).concat(b).concat(C).uniqBy("createdAt").orderBy("updatedAt","desc").value();h(()=>P)}},[l]);const v=e=>{e.__typename==="LikeNotifications"?p(`/comment/${e.commentId}`):p(`/profile/${e.fromUser}`)},y=e=>{e.stopPropagation(),u({uid:i.id})};return l.fetching?t(I,{}):l.error?t(q,{}):a(G,{children:[a(z,{children:[t("title",{children:"Moovy: Notifications"}),t("meta",{name:"description",content:"Notifications"}),t("link",{rel:"canonical",href:`${A}/notifications}`})]}),t(L,{className:"header",children:a($,{className:"heading",children:[a("div",{children:[t("span",{children:"Notifications"}),t("span",{className:"count",children:o==null?void 0:o.filter(e=>!e.isRead).length})]}),o.length>0&&t("div",{className:"clear",onClick:y,children:"Clear Notifications"})]})}),o.length>0?t("div",{className:"notifications",onScroll:w,ref:c,children:t(Q,{ref:d,viewportRef:c,items:o,children:(e,s)=>e&&t(J,{type:e.__typename,notification:e,onClick:n=>{n.stopPropagation(),v(e)}},e.createdAt)})}):t(T,{msg:"Notifications are empty"})]})},ge=R(S)(K);export{ge as default};
