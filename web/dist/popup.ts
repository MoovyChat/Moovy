import{a as l,aX as xr,aY as wr,r as p,j as S,aR as Xe,b as Q,c as ee,d as te,s as se,aZ as yr,a_ as _r,a$ as Cr,u as Pn,b0 as Er,h as Rr,b1 as Ee,b2 as Re,b3 as Vt,b4 as Kt,as as O,R as ae,ag as Dr,w as Pr,b5 as Sr,b6 as Ar,F as Yt,t as Or,L as Xt,b7 as Tr,b8 as kr,i as et,b9 as Ir,o as Nr,$ as Mr,p as ie}from"./index.js";import{s as W,C as Sn}from"./styled-components.browser.esm.ts";import{a as J,u as ge}from"./hooks.ts";import{A as Fr,F as ot,G as Lr,H as Ur,I as zr,J as jr,K as Br,L as Wr}from"./index.esm.ts";import{b as Hr}from"./index.esm2.ts";import{P as An,b as $r,F as Gr}from"./tooltip.ts";import{F as Zr}from"./focusWindow.ts";import{M as Vr}from"./miniCommentCard.ts";import{F as Kr}from"./splashScreen.ts";import On from"./loading.ts";import{a as Yr}from"./profile.styles.ts";import{G as Xr}from"./iconBase.ts";import{_ as qr,C as Jr,r as qt,a as it,b as Qr,c as eo,d as to,S as no,e as ro,F as oo,i as io}from"./login.ts";import{S as ao}from"./commentThread.styles.ts";import{e as so}from"./helpers.ts";import{C as co}from"./CSSTransition.ts";import"./image.ts";import"./moovy-white.ts";import"./index.ts";import"./Helmet.ts";import"./loadable.esm.ts";import"./inheritsLoose.ts";import"./logoLoading.ts";import"./moovy-text-logo-white.ts";import"./splashScreen.styles.ts";import"./loading.styles.ts";const ye={MOVIE:"MOVIE",COMMENT:"COMMENT"},pe={REPLY:"REPLY",COMMENT:"COMMENT"},_e={BG:"BACKGROUND_IMAGE",PFP:"PROFILE_PICTURE"},lo=W.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 7;
  backdrop-filter: blur(20px) brightness(0.5);
`,uo=W.div`
  position: fixed;
  min-width: 10vw;
  min-height: 10vh;
  display: flex;
  border-radius: 18px;
  box-shadow: 0px 0px 5px, 0px 0px 3px 1px;
  top: 35%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  background: ${e=>e.theme.body};
  z-index: 8;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 500px) {
    width: 100vw;
    height: 99vh;
    top: 50%;
  }
`,po=W.div`
  position: relative;
  height: 50vh;
  width: 50vw;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: ${e=>e.theme.background};
  .heading {
    position: relative;
    height: 10%;
    width: 100%;
    display: flex;
    margin: 5px 0;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    overflow: hidden;
    /* box-shadow: 0px 3px 4px 0px; */
    .close {
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      top: 0px;
      right: 10px;
      border-radius: 50%;
      cursor: pointer;
      width: 30px;
      height: 30px;
      :hover {
        background-color: #ffffff57;
      }
    }
    .icon {
      margin: 0 10px;
    }
  }
  .context {
    position: relative;
    height: 90%;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    .user-container {
      height: 100%;
      flex: 1 1 15%;
      display: flex;
      justify-content: flex-end;
      margin-top: 80px;
      .user {
        width: 65px;
        height: 65px;
      }
    }
    .comment-section {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      margin-left: 40px;
      height: 100%;
      width: 80%;
      position: relative;
      .textarea-container {
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        height: 70%;
        width: 80%;
      }
      .title-details {
        position: relative;
        width: 100%;
        height: 50px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        .chip {
          margin: 0 5px;
        }
        .post {
          position: absolute;
          display: flex;
          justify-content: center;
          align-items: center;
          bottom: 70px;
          right: 40px;
          border-radius: 50%;
          background-color: #6d0e85;
          padding: 10px;
          cursor: pointer;
          transition: all 0.2s;

          :hover {
            transform: translateY(-2px) scale(1.05);
            box-shadow: 0px 1px 2px 0px white, inset 0px -2px 2px black;
          }
          :active {
            transform: translateY(0px) scale(1);
            box-shadow: inset 0px 0px 5px black;
          }
        }
      }
      .options {
        display: flex;
        gap: 10px;
        margin: 10px;
        .chip {
          display: flex;
          gap: 5px;
          justify-content: center;
          align-items: center;
          background-color: #6d0e85;
          .icon {
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .text {
          }
        }
        .down {
          pointer-events: none;
        }
      }
      .comment {
        width: 80%;
        .mini {
          width: 100%;
          height: 100%;
          .data {
            width: 80%;
            .msg {
              height: 100%;
              width: 100%;
              text-overflow: ellipsis;
              display: block;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: pre-line;
            }
          }
        }
      }
    }
  }
  @media (max-width: 760px) {
    height: 98vh;
    width: 98vw;
    .context {
      .user-container {
        display: none;
      }
      .comment-section {
        width: 99%;
        justify-content: flex-start;
        .textarea-container {
          width: 95%;
          height: 25%;
        }
        .options,
        .comment {
          width: 95%;
        }
        .comment {
          .mini {
            min-height: 100px;
          }
        }
        .title-details {
          display: flex;
          height: 150px;
          width: 98vw;
          flex-direction: column;
          justify-content: space-evenly;
          align-items: center;
          .post {
            position: relative;
            border-radius: 0px;
            display: flex;
            width: 60%;
            bottom: 0;
            right: 0;
            left: 0;
            top: 0;
          }
        }
      }
    }
  }
`,Tn=()=>Sn`
  overflow-x: hidden;
  overflow-y: auto;
  white-space: pre-wrap;
  overflow-wrap: break-word;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 1.2em;
  border: none;
  padding: 5px 0px;
  font-weight: 500;
  word-spacing: 0.2em;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 70%;
  width: 100%;
  outline: none;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
  resize: none;
`,ho=W.textarea`
  ${Tn()}
  z-index: 2;
  background: transparent;
  color: #fafafa00;
  caret-color: ${e=>e.theme.text};
`,fo=W.div`
  ${Tn()}
  z-index: 1;
  /* background-color: #0a0a0a;
  box-shadow: inset 0 0 10px black, inset 0 0 0px 2px; */
  .basic {
    white-space: pre-line;
  }
`;const He=({name:e})=>l("div",{className:"chip",onClick:n=>{n.stopPropagation()},children:e}),Jt=({type:e})=>{const[n,t]=xr(),[r,o]=wr(),i=J(f=>f.textArea.text),a=p.useRef(null),s=J(f=>f.user);let c=J(f=>f.popup.popupData);const[u,m]=p.useState(),[g,b]=p.useState(),v=ge(),[x,_]=p.useState(0);p.useEffect(()=>{e===ye.MOVIE?m(c):b(()=>c)},[e]);const E=f=>{f.stopPropagation(),Q.unstable_batchedUpdates(()=>{v(ee(!1)),v(te("")),v(se({})),v(Xe(""))})},D=f=>{if(f.stopPropagation(),i!==""&&(e===ye.MOVIE&&(_(1),t({options:{commentedUserId:s.id,commentedUserName:s.nickname,likesCount:0,message:i,movieId:u==null?void 0:u.id,platformId:1}}).then(w=>{const{data:h,error:P}=w;P&&(console.log(P),_(3)),h&&(_(2),Q.unstable_batchedUpdates(()=>{v(ee(!1)),v(te("")),v(se({}))}))})),e===ye.COMMENT)){_(1);let w=g,h=w.parentCommentId;o({options:{commentedUserId:s.id,commentedUserName:s.nickname,likesCount:0,message:i,movieId:w==null?void 0:w.movieId,platformId:1,repliesCount:0,parentRepliedUser:w==null?void 0:w.commentedUserName,parentCommentId:isNaN(parseInt(h))?w.id:h,parentReplyId:w.id}}).then(P=>{const{data:C,error:R}=P;R&&(console.log(R),_(3)),C&&(_(2),Q.unstable_batchedUpdates(()=>{v(ee(!1)),v(te("")),v(se({}))}))})}};return S(po,{children:[S("div",{className:"heading",children:[l(Fr,{size:25,className:"icon"}),l("span",{children:" Post your comment"}),l("div",{className:"close",onClick:E,children:l(ot,{size:20})})]}),S("div",{className:"context",children:[l("div",{className:"user-container",children:l("div",{className:"user",children:l(An,{src:s==null?void 0:s.photoUrl,tooltip:!0})})}),S("div",{className:"comment-section",children:[S("div",{className:"textarea-container",children:[l(ho,{placeholder:"Hmm...",value:i,maxLength:300,autoFocus:!0,onChange:f=>{f.stopPropagation(),v(Xe(f.target.value))}}),l(fo,{ref:a,children:i})]}),S("div",{className:"options",children:[l(Zr,{message:$r.EMOJI,height:"200px",width:"200px",children:S("div",{className:"chip",children:[l("div",{className:"icon",children:l(Lr,{size:15})}),l("div",{className:"text",children:"Emoji"})]})}),S("div",{className:"chip",onClick:f=>{f.stopPropagation(),v(Xe(i+"<s></s>"))},children:[l("div",{className:"icon",children:l(Ur,{size:15})}),l("div",{className:"text",children:"Spoiler"})]}),S("div",{className:"chip down",style:{background:`linear-gradient(90deg, #df1212 ${i.length/3}%,#6d0e85 0%)`},children:[l("div",{className:"icon",children:l(Hr,{size:15})}),S("div",{className:"text",children:[i.length,"/300"]})]})]}),e===ye.COMMENT&&g&&l("div",{className:"comment",children:l(Vr,{id:g.id,type:g.parentCommentId?"reply":"comment",className:"mini",extendData:!1})}),S("div",{className:"title-details",children:[e==="movie"&&l(He,{name:u==null?void 0:u.name}),x===1&&l(He,{name:"Posting Comment"}),x===2&&l(He,{name:"Comment posted"}),x===3&&l(He,{name:"Error posting comment"}),l("div",{className:"post",onClick:D,children:l(zr,{size:25,fill:"white"})})]})]})]})]})},mo=W.div`
  padding: 20px 5px;
  min-width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .heading {
    font-size: 20px;
    font-weight: 600;
  }
  .sub {
    font-size: 0.8em;
    margin-top: 10px;
    width: 50%;
    text-align: center;
    opacity: 0.8;
  }
  .delete-cancel {
    margin: 30px 0;
    display: flex;
    gap: 15px;
    .del,
    .cancel {
      padding: 10px 20px;
      border-radius: 18px;
      font-size: 12px;
      box-shadow: 0 0 10px;
      transition: all 0.4s;
      cursor: pointer;
      :hover {
        transform: scale(1.05);
      }
      :active {
        transform: scale(0.95);
      }
    }
    .del {
      background-color: #ce1515;
      color: white;
      box-shadow: 0 0 5px
        ${e=>e.theme.themeType==="light"?"black":"white"};
    }
    .cancel {
    }
  }
`,Qt=({type:e})=>{const n=J(g=>g.popup),[t,r]=p.useState(null),o=ge(),[i,a]=p.useState(null),[,s]=yr(),[,c]=_r();p.useEffect(()=>{e===pe.COMMENT?r(n.popupData):e===pe.REPLY&&a(n.popupData)},[e]);const u=g=>{g.stopPropagation(),e===pe.COMMENT?s({cid:t==null?void 0:t.id,mid:t==null?void 0:t.movieId}).then(b=>{const{data:v,error:x}=b;x&&console.log(x),v&&Q.unstable_batchedUpdates(()=>{o(ee(!1)),o(te("")),o(se(null))})}):e===pe.REPLY&&c({rid:i==null?void 0:i.id}).then(b=>{const{data:v,error:x}=b;(x||!v)&&console.log(x),v&&Q.unstable_batchedUpdates(()=>{o(ee(!1)),o(te("")),o(se(null))})})},m=()=>{Q.unstable_batchedUpdates(()=>{o(ee(!1)),o(te("")),o(se(null))})};return S(mo,{children:[S("div",{className:"heading",children:["Delete ",e===pe.COMMENT?"Comment":"Reply","?"]}),l("div",{className:"sub",children:"The comment will be deleted permanently from your profile, the feed for all the users, that follows you."}),S("div",{className:"delete-cancel",children:[l("div",{className:"del",onClick:u,children:"Delete"}),l("div",{className:"cancel",onClick:m,children:"Cancel"})]})]})},gt=W.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  min-width: 50vw;
  min-height: 50vh;
  form {
    width: 100%;
    height: 100%;
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: space-evenly;
    #title {
      font-size: 1rem;
      font-weight: bold;
      color: ${e=>e.theme.text};
      margin-bottom: 1rem;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0 10px;
      #ic {
        padding: 10px;
      }
    }
    .ext {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      gap: 10px;
      flex-wrap: wrap;
      #save {
        background: ${e=>e.hasError?"#9bbc86":"#459d0e"};
        pointer-events: ${e=>e.hasError?"none":"auto"};
      }
      #cancel {
        background: #ffffff;
      }
      button {
        padding: 10px 20px;
        border: none;
        font-weight: 600;
        letter-spacing: 1px;
        box-shadow: 0 0 5px;
        transition: 0.2s;
        margin: 20px 0;
        :hover {
          cursor: pointer;
          box-shadow: 0 0 3px 1px ${e=>e.theme.text}, inset 0 0 5px black;
        }
        :active {
          box-shadow: 0 0 1px 1px ${e=>e.theme.text}, inset 0 0 7px black;
        }
      }
    }
  }
`,Te=({title:e,type:n,value:t,setValue:r,keyItem:o,error:i})=>S(Yr,{error:i,children:[l("div",{className:"title",children:i&&i!=="none"?i:e}),l("div",{className:"in",children:n==="text"||n==="date"?l("input",{type:n,name:e,id:e,value:t,maxLength:25,minLength:2,onChange:a=>{a.stopPropagation(),r(o,a.target.value)}}):n==="textarea"?l("textarea",{id:e,value:t,maxLength:100,onChange:a=>{a.stopPropagation(),r(o,a.target.value)}}):S("select",{onChange:a=>{a.stopPropagation(),r(o,a.target.value)},value:t,children:[l("option",{defaultChecked:!0,value:"",children:"Choose your gender"}),l("option",{value:"male",children:"Male"}),l("option",{value:"female",children:"Female"}),l("option",{value:"other",children:"Other"})]})}),l("div",{className:"light-container",children:l("div",{className:"light"})})]}),go=()=>{const e=J(h=>h.profile),n=J(h=>h.user),[t,r]=p.useState(e),[o,i]=p.useState(n.nickname),a=ge(),[s,c]=p.useState(!1),[u,m]=p.useState(""),[g,b]=p.useState(!1),[,v]=Cr(),x=Pn(),[_,E]=p.useState({nickname:"",fullname:"",gender:""});p.useMemo(()=>{Object.values(_).filter(P=>P!=="").length>0?b(()=>!0):b(()=>!1)},[_,b]),p.useEffect(()=>{t&&t.fullname&&t.fullname.length<2?E(h=>({...h,fullname:"Invalid name"})):E(h=>({...h,fullname:""})),t.gender===""?E(h=>({...h,gender:"Invalid value"})):E(h=>({...h,gender:""})),o.length<2?E(h=>({...h,nickname:"Invalid user name"})):E(h=>({...h,nickname:""}))},[t,o,E,b]);const D=h=>{h.stopPropagation(),c(()=>!0),v({options:{uid:n.id,nickname:o,gender:t.gender,fullname:t.fullname,dob:t.dob,bio:t.bio}}).then(P=>{const{data:C,error:R}=P;if(R!=null&&R.message){c(()=>!1),console.log(R.message,R.name,R.graphQLErrors,R.networkError,R.response),m(R.message);return}Q.unstable_batchedUpdates(()=>{a(Er(o)),a(Rr(C==null?void 0:C.upsertProfile)),r(C==null?void 0:C.upsertProfile),a(ee(!1)),a(te(""))}),x(`/profile/${o}`),c(()=>!1),window.location.reload()}).catch(P=>(console.error(P),b(!0),l("pre",{children:"error"})))},f=(h,P)=>{h==="nickname"?i(P):r({...t,[h]:P})},w=h=>{h.stopPropagation(),Q.unstable_batchedUpdates(()=>{a(ee(!1)),a(te(""))})};return s?l(gt,{hasError:!1,children:l(On,{})}):u?S(gt,{hasError:!0,children:[l("div",{id:"title",children:"Server Error"}),S("div",{id:"title",style:{fontSize:"2.5rem",display:"flex",flexDirection:"column",padding:"20px 30px",borderRadius:"50%",boxShadow:"0 0 5px"},children:[l(jr,{fill:"red"}),l("span",{children:"400"})]}),l("div",{id:"title",children:u})]}):l(gt,{hasError:g,children:S("form",{onSubmit:D,children:[S("div",{id:"title",children:[l("span",{id:"ic",children:l(Kr,{size:25})}),l("span",{children:"Edit Profile"})]}),l("div",{className:"nickname ext",children:l(Te,{title:"Username*",type:"text",value:o,keyItem:"nickname",setValue:f,error:_.nickname})}),l("div",{className:"first ext",children:l(Te,{title:"Full Name*",type:"text",keyItem:"fullname",value:t.fullname,setValue:f,error:_.fullname})}),l("div",{className:"dob ext",children:l(Te,{title:"DOB",type:"date",keyItem:"dob",value:t.dob,setValue:f,error:"none"})}),l("div",{className:"gender ext",children:l(Te,{title:"Gender*",type:"select",keyItem:"gender",value:t.gender,setValue:f,error:_.gender})}),l("div",{className:"gender ext",children:l(Te,{title:"Bio",type:"textarea",keyItem:"bio",value:t.bio,setValue:f,error:"none"})}),S("div",{className:"ext",children:[l("button",{id:"save",type:"submit",children:"Save"}),l("button",{id:"cancel",onClick:w,children:"Cancel"})]})]})})};function vo(e){return Xr({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M320 367.79h76c55 0 100-29.21 100-83.6s-53-81.47-96-83.6c-8.89-85.06-71-136.8-144-136.8-69 0-113.44 45.79-128 91.2-60 5.7-112 43.88-112 106.4s54 106.4 120 106.4h56"}},{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M320 255.79l-64-64-64 64m64 192.42V207.79"}}]})(e)}const bo=W.div`
  position: relative;
  width: 50vw;
  min-height: 70vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  .heading {
    font-size: 1.1em;
    font-weight: 600;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    .close {
      cursor: pointer;
      position: absolute;
      right: 15px;
      top: 15px;
      z-index: 2;
      width: 25px;
      height: 25px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      :hover {
        box-shadow: inset 0 0 5px;
      }
    }
  }
  .save-close {
    display: flex;
    z-index: 6;
    .save {
      z-index: 2;
      position: absolute;
      pointer-events: ${e=>e.url?"all":"none"};
      right: 15px;
      bottom: 20px;
    }
  }
  .options {
    display: flex;
    position: relative;
    padding: 0px 0;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100px;
    .or {
      position: absolute;
      border: 1px solid;
      width: 20px;
      height: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      padding: 5px;
      box-shadow: inset 0 0 10px, 0 0 3px;
    }
    .from {
      flex: 1 1 50%;
      padding: 10px;
      display: flex;
      align-items: center;
      justify-content: space-around;
      height: 100%;
      .text {
        font-weight: 600;
        line-height: 16px;
        margin-bottom: 10px;
      }
    }
    .url,
    .local {
      flex-direction: column;
      .input {
        width: 90%;
        border-radius: 20px;
        padding: 5px;
        display: flex;
        box-shadow: inset 0 0 5px, 0 0 2px;
        justify-content: center;
        align-items: center;
        .icon {
          width: 10%;
        }
        input {
          border: none;
          background: none;
          width: 90%;
          height: 100%;
          color: ${e=>e.theme.text};
          :active,
          :focus {
            border: none;
            background: none;
            outline: none;
          }
        }
      }
    }
  }
  .error {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    .in {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      .loading {
        display: flex;
        align-items: center;
        flex-direction: column;
      }
      .e-in-e {
        font-size: 12px;
        font-weight: 600;
        margin-left: 10px;
      }
    }
  }
  @media (max-width: 500px) {
    width: 100vw;
    height: 50vh;
    .heading {
      font-size: 1em;
      font-weight: 600;
      height: 50px;
      .close {
        position: absolute;
        right: 10px;
        top: 10px;
      }
    }
    .save-close {
      width: 90%;
      .save {
        position: absolute;
        right: 20px;
        bottom: 100px;
      }
    }
    .options {
      flex-direction: column;
      height: 120px;
      margin-top: 12px;
      border: 1px solid;
      padding: 30px;
      .or {
        display: none;
      }
    }
  }
`,xo=W.div`
  position: relative;
  align-items: flex-start;
  width: 100%;
  height: 60%;
  display: flex;
  justify-content: center;
  overflow: hidden;
  .display-container {
    width: 500px;
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    margin: 25px;
    .controls {
      position: absolute;
      bottom: 0;
      width: 200px;
      background-color: #181818bd;
      padding: 10px 20px;
      border-radius: 20px;
    }
    .cropper-container {
      display: flex;
      flex-direction: column;
      .container {
      }
    }
    .dropzone {
      width: 99%;
      height: 99%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      :hover {
        cursor: pointer;
      }
    }
    img {
      width: 100%;
      height: 100%;
      border: 0.3px solid;
    }
  }
`,wo=W.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-radius: 4px;
  background-color: ${({isDragActive:e})=>e?"rgba(255, 255, 255, 0.1)":"transparent"};
  color: ${({isDragReject:e})=>e?"#ff1744":"inherit"};
  transition: background-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  cursor: pointer;
  box-shadow: ${({isDragActive:e})=>e?"0px 0px 15px rgba(0, 128, 0, 0.3)":"0px 0px 15px rgba(0, 0, 0, 0.1)"};

  &:focus {
    outline: none;
  }

  ${({isDragActive:e,isDragReject:n})=>(e||n)&&Sn`
      background-color: rgba(255, 255, 255, 0.1);
      box-shadow: 0px 0px 15px rgba(0, 128, 0, 0.3);
    `}

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    box-shadow: 0px 0px 15px rgba(0, 128, 0, 0.3);
  }
`,en=W.p`
  color: #ff1744;
  font-size: 0.8em;
  margin-top: 0.5em;
`,yo=W(vo)`
  font-size: 3em;
  margin-bottom: 1em;
`,_o=W.p`
  font-size: 1.2em;
  font-weight: bold;
  margin-bottom: 1em;
  text-align: center;
`,Co=W.ul`
  margin-top: 1em;
  list-style: none;
  padding-left: 0;
`;var Eo=new Map([["aac","audio/aac"],["abw","application/x-abiword"],["arc","application/x-freearc"],["avif","image/avif"],["avi","video/x-msvideo"],["azw","application/vnd.amazon.ebook"],["bin","application/octet-stream"],["bmp","image/bmp"],["bz","application/x-bzip"],["bz2","application/x-bzip2"],["cda","application/x-cdf"],["csh","application/x-csh"],["css","text/css"],["csv","text/csv"],["doc","application/msword"],["docx","application/vnd.openxmlformats-officedocument.wordprocessingml.document"],["eot","application/vnd.ms-fontobject"],["epub","application/epub+zip"],["gz","application/gzip"],["gif","image/gif"],["heic","image/heic"],["heif","image/heif"],["htm","text/html"],["html","text/html"],["ico","image/vnd.microsoft.icon"],["ics","text/calendar"],["jar","application/java-archive"],["jpeg","image/jpeg"],["jpg","image/jpeg"],["js","text/javascript"],["json","application/json"],["jsonld","application/ld+json"],["mid","audio/midi"],["midi","audio/midi"],["mjs","text/javascript"],["mp3","audio/mpeg"],["mp4","video/mp4"],["mpeg","video/mpeg"],["mpkg","application/vnd.apple.installer+xml"],["odp","application/vnd.oasis.opendocument.presentation"],["ods","application/vnd.oasis.opendocument.spreadsheet"],["odt","application/vnd.oasis.opendocument.text"],["oga","audio/ogg"],["ogv","video/ogg"],["ogx","application/ogg"],["opus","audio/opus"],["otf","font/otf"],["png","image/png"],["pdf","application/pdf"],["php","application/x-httpd-php"],["ppt","application/vnd.ms-powerpoint"],["pptx","application/vnd.openxmlformats-officedocument.presentationml.presentation"],["rar","application/vnd.rar"],["rtf","application/rtf"],["sh","application/x-sh"],["svg","image/svg+xml"],["swf","application/x-shockwave-flash"],["tar","application/x-tar"],["tif","image/tiff"],["tiff","image/tiff"],["ts","video/mp2t"],["ttf","font/ttf"],["txt","text/plain"],["vsd","application/vnd.visio"],["wav","audio/wav"],["weba","audio/webm"],["webm","video/webm"],["webp","image/webp"],["woff","font/woff"],["woff2","font/woff2"],["xhtml","application/xhtml+xml"],["xls","application/vnd.ms-excel"],["xlsx","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],["xml","application/xml"],["xul","application/vnd.mozilla.xul+xml"],["zip","application/zip"],["7z","application/x-7z-compressed"],["mkv","video/x-matroska"],["mov","video/quicktime"],["msg","application/vnd.ms-outlook"]]);function Me(e,n){var t=Ro(e);if(typeof t.path!="string"){var r=e.webkitRelativePath;Object.defineProperty(t,"path",{value:typeof n=="string"?n:typeof r=="string"&&r.length>0?r:e.name,writable:!1,configurable:!1,enumerable:!0})}return t}function Ro(e){var n=e.name,t=n&&n.lastIndexOf(".")!==-1;if(t&&!e.type){var r=n.split(".").pop().toLowerCase(),o=Eo.get(r);o&&Object.defineProperty(e,"type",{value:o,writable:!1,configurable:!1,enumerable:!0})}return e}var Do=[".DS_Store","Thumbs.db"];function Po(e){return Ee(this,void 0,void 0,function(){return Re(this,function(n){return tt(e)&&So(e.dataTransfer)?[2,ko(e.dataTransfer,e.type)]:Ao(e)?[2,Oo(e)]:Array.isArray(e)&&e.every(function(t){return"getFile"in t&&typeof t.getFile=="function"})?[2,To(e)]:[2,[]]})})}function So(e){return tt(e)}function Ao(e){return tt(e)&&tt(e.target)}function tt(e){return typeof e=="object"&&e!==null}function Oo(e){return wt(e.target.files).map(function(n){return Me(n)})}function To(e){return Ee(this,void 0,void 0,function(){var n;return Re(this,function(t){switch(t.label){case 0:return[4,Promise.all(e.map(function(r){return r.getFile()}))];case 1:return n=t.sent(),[2,n.map(function(r){return Me(r)})]}})})}function ko(e,n){return Ee(this,void 0,void 0,function(){var t,r;return Re(this,function(o){switch(o.label){case 0:return e.items?(t=wt(e.items).filter(function(i){return i.kind==="file"}),n!=="drop"?[2,t]:[4,Promise.all(t.map(Io))]):[3,2];case 1:return r=o.sent(),[2,tn(kn(r))];case 2:return[2,tn(wt(e.files).map(function(i){return Me(i)}))]}})})}function tn(e){return e.filter(function(n){return Do.indexOf(n.name)===-1})}function wt(e){if(e===null)return[];for(var n=[],t=0;t<e.length;t++){var r=e[t];n.push(r)}return n}function Io(e){if(typeof e.webkitGetAsEntry!="function")return nn(e);var n=e.webkitGetAsEntry();return n&&n.isDirectory?In(n):nn(e)}function kn(e){return e.reduce(function(n,t){return Vt(Vt([],Kt(n),!1),Kt(Array.isArray(t)?kn(t):[t]),!1)},[])}function nn(e){var n=e.getAsFile();if(!n)return Promise.reject("".concat(e," is not a File"));var t=Me(n);return Promise.resolve(t)}function No(e){return Ee(this,void 0,void 0,function(){return Re(this,function(n){return[2,e.isDirectory?In(e):Mo(e)]})})}function In(e){var n=e.createReader();return new Promise(function(t,r){var o=[];function i(){var a=this;n.readEntries(function(s){return Ee(a,void 0,void 0,function(){var c,u,m;return Re(this,function(g){switch(g.label){case 0:if(s.length)return[3,5];g.label=1;case 1:return g.trys.push([1,3,,4]),[4,Promise.all(o)];case 2:return c=g.sent(),t(c),[3,4];case 3:return u=g.sent(),r(u),[3,4];case 4:return[3,6];case 5:m=Promise.all(s.map(No)),o.push(m),i(),g.label=6;case 6:return[2]}})})},function(s){r(s)})}i()})}function Mo(e){return Ee(this,void 0,void 0,function(){return Re(this,function(n){return[2,new Promise(function(t,r){e.file(function(o){var i=Me(o,e.fullPath);t(i)},function(o){r(o)})})]})})}var Fo=function(e,n){if(e&&n){var t=Array.isArray(n)?n:n.split(","),r=e.name||"",o=(e.type||"").toLowerCase(),i=o.replace(/\/.*$/,"");return t.some(function(a){var s=a.trim().toLowerCase();return s.charAt(0)==="."?r.toLowerCase().endsWith(s):s.endsWith("/*")?i===s.replace(/\/.*$/,""):o===s})}return!0};function rn(e){return zo(e)||Uo(e)||Mn(e)||Lo()}function Lo(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Uo(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function zo(e){if(Array.isArray(e))return yt(e)}function on(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,r)}return t}function an(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?on(Object(t),!0).forEach(function(r){Nn(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):on(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function Nn(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function Ne(e,n){return Wo(e)||Bo(e,n)||Mn(e,n)||jo()}function jo(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Mn(e,n){if(e){if(typeof e=="string")return yt(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return yt(e,n)}}function yt(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function Bo(e,n){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var r=[],o=!0,i=!1,a,s;try{for(t=t.call(e);!(o=(a=t.next()).done)&&(r.push(a.value),!(n&&r.length===n));o=!0);}catch(c){i=!0,s=c}finally{try{!o&&t.return!=null&&t.return()}finally{if(i)throw s}}return r}}function Wo(e){if(Array.isArray(e))return e}var Ho="file-invalid-type",$o="file-too-large",Go="file-too-small",Zo="too-many-files",Vo=function(n){n=Array.isArray(n)&&n.length===1?n[0]:n;var t=Array.isArray(n)?"one of ".concat(n.join(", ")):n;return{code:Ho,message:"File type must be ".concat(t)}},sn=function(n){return{code:$o,message:"File is larger than ".concat(n," ").concat(n===1?"byte":"bytes")}},cn=function(n){return{code:Go,message:"File is smaller than ".concat(n," ").concat(n===1?"byte":"bytes")}},Ko={code:Zo,message:"Too many files"};function Fn(e,n){var t=e.type==="application/x-moz-file"||Fo(e,n);return[t,t?null:Vo(n)]}function Ln(e,n,t){if(de(e.size))if(de(n)&&de(t)){if(e.size>t)return[!1,sn(t)];if(e.size<n)return[!1,cn(n)]}else{if(de(n)&&e.size<n)return[!1,cn(n)];if(de(t)&&e.size>t)return[!1,sn(t)]}return[!0,null]}function de(e){return e!=null}function Yo(e){var n=e.files,t=e.accept,r=e.minSize,o=e.maxSize,i=e.multiple,a=e.maxFiles,s=e.validator;return!i&&n.length>1||i&&a>=1&&n.length>a?!1:n.every(function(c){var u=Fn(c,t),m=Ne(u,1),g=m[0],b=Ln(c,r,o),v=Ne(b,1),x=v[0],_=s?s(c):null;return g&&x&&!_})}function nt(e){return typeof e.isPropagationStopped=="function"?e.isPropagationStopped():typeof e.cancelBubble<"u"?e.cancelBubble:!1}function $e(e){return e.dataTransfer?Array.prototype.some.call(e.dataTransfer.types,function(n){return n==="Files"||n==="application/x-moz-file"}):!!e.target&&!!e.target.files}function ln(e){e.preventDefault()}function Xo(e){return e.indexOf("MSIE")!==-1||e.indexOf("Trident/")!==-1}function qo(e){return e.indexOf("Edge/")!==-1}function Jo(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:window.navigator.userAgent;return Xo(e)||qo(e)}function ne(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return function(r){for(var o=arguments.length,i=new Array(o>1?o-1:0),a=1;a<o;a++)i[a-1]=arguments[a];return n.some(function(s){return!nt(r)&&s&&s.apply(void 0,[r].concat(i)),nt(r)})}}function Qo(){return"showOpenFilePicker"in window}function ei(e){if(de(e)){var n=Object.entries(e).filter(function(t){var r=Ne(t,2),o=r[0],i=r[1],a=!0;return Un(o)||(console.warn('Skipped "'.concat(o,'" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')),a=!1),(!Array.isArray(i)||!i.every(zn))&&(console.warn('Skipped "'.concat(o,'" because an invalid file extension was provided.')),a=!1),a}).reduce(function(t,r){var o=Ne(r,2),i=o[0],a=o[1];return an(an({},t),{},Nn({},i,a))},{});return[{description:"Files",accept:n}]}return e}function ti(e){if(de(e))return Object.entries(e).reduce(function(n,t){var r=Ne(t,2),o=r[0],i=r[1];return[].concat(rn(n),[o],rn(i))},[]).filter(function(n){return Un(n)||zn(n)}).join(",")}function ni(e){return e instanceof DOMException&&(e.name==="AbortError"||e.code===e.ABORT_ERR)}function ri(e){return e instanceof DOMException&&(e.name==="SecurityError"||e.code===e.SECURITY_ERR)}function Un(e){return e==="audio/*"||e==="video/*"||e==="image/*"||e==="text/*"||/\w+\/[-+.\w]+/g.test(e)}function zn(e){return/^.*\.[\w]+$/.test(e)}var oi=["children"],ii=["open"],ai=["refKey","role","onKeyDown","onFocus","onBlur","onClick","onDragEnter","onDragOver","onDragLeave","onDrop"],si=["refKey","onChange","onClick"];function ci(e){return pi(e)||ui(e)||jn(e)||li()}function li(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ui(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function pi(e){if(Array.isArray(e))return _t(e)}function vt(e,n){return fi(e)||hi(e,n)||jn(e,n)||di()}function di(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function jn(e,n){if(e){if(typeof e=="string")return _t(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return _t(e,n)}}function _t(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function hi(e,n){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var r=[],o=!0,i=!1,a,s;try{for(t=t.call(e);!(o=(a=t.next()).done)&&(r.push(a.value),!(n&&r.length===n));o=!0);}catch(c){i=!0,s=c}finally{try{!o&&t.return!=null&&t.return()}finally{if(i)throw s}}return r}}function fi(e){if(Array.isArray(e))return e}function un(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,r)}return t}function T(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?un(Object(t),!0).forEach(function(r){Ct(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):un(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function Ct(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function rt(e,n){if(e==null)return{};var t=mi(e,n),r,o;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],!(n.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}function mi(e,n){if(e==null)return{};var t={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(n.indexOf(o)>=0)&&(t[o]=e[o]);return t}var Ft=p.forwardRef(function(e,n){var t=e.children,r=rt(e,oi),o=Wn(r),i=o.open,a=rt(o,ii);return p.useImperativeHandle(n,function(){return{open:i}},[i]),ae.createElement(p.Fragment,null,t(T(T({},a),{},{open:i})))});Ft.displayName="Dropzone";var Bn={disabled:!1,getFilesFromEvent:Po,maxSize:1/0,minSize:0,multiple:!0,maxFiles:0,preventDropOnDocument:!0,noClick:!1,noKeyboard:!1,noDrag:!1,noDragEventsBubbling:!1,validator:null,useFsAccessApi:!0,autoFocus:!1};Ft.defaultProps=Bn;Ft.propTypes={children:O.func,accept:O.objectOf(O.arrayOf(O.string)),multiple:O.bool,preventDropOnDocument:O.bool,noClick:O.bool,noKeyboard:O.bool,noDrag:O.bool,noDragEventsBubbling:O.bool,minSize:O.number,maxSize:O.number,maxFiles:O.number,disabled:O.bool,getFilesFromEvent:O.func,onFileDialogCancel:O.func,onFileDialogOpen:O.func,useFsAccessApi:O.bool,autoFocus:O.bool,onDragEnter:O.func,onDragLeave:O.func,onDragOver:O.func,onDrop:O.func,onDropAccepted:O.func,onDropRejected:O.func,onError:O.func,validator:O.func};var Et={isFocused:!1,isFileDialogActive:!1,isDragActive:!1,isDragAccept:!1,isDragReject:!1,acceptedFiles:[],fileRejections:[]};function Wn(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=T(T({},Bn),e),t=n.accept,r=n.disabled,o=n.getFilesFromEvent,i=n.maxSize,a=n.minSize,s=n.multiple,c=n.maxFiles,u=n.onDragEnter,m=n.onDragLeave,g=n.onDragOver,b=n.onDrop,v=n.onDropAccepted,x=n.onDropRejected,_=n.onFileDialogCancel,E=n.onFileDialogOpen,D=n.useFsAccessApi,f=n.autoFocus,w=n.preventDropOnDocument,h=n.noClick,P=n.noKeyboard,C=n.noDrag,R=n.noDragEventsBubbling,F=n.onError,G=n.validator,ce=p.useMemo(function(){return ti(t)},[t]),Fe=p.useMemo(function(){return ei(t)},[t]),De=p.useMemo(function(){return typeof E=="function"?E:pn},[E]),ve=p.useMemo(function(){return typeof _=="function"?_:pn},[_]),U=p.useRef(null),Z=p.useRef(null),st=p.useReducer(gi,Et),Pe=vt(st,2),Le=Pe[0],V=Pe[1],A=Le.isFocused,H=Le.isFileDialogActive,j=p.useRef(typeof window<"u"&&window.isSecureContext&&D&&Qo()),le=function(){!j.current&&H&&setTimeout(function(){if(Z.current){var y=Z.current.files;y.length||(V({type:"closeDialog"}),ve())}},300)};p.useEffect(function(){return window.addEventListener("focus",le,!1),function(){window.removeEventListener("focus",le,!1)}},[Z,H,ve,j]);var N=p.useRef([]),q=function(y){U.current&&U.current.contains(y.target)||(y.preventDefault(),N.current=[])};p.useEffect(function(){return w&&(document.addEventListener("dragover",ln,!1),document.addEventListener("drop",q,!1)),function(){w&&(document.removeEventListener("dragover",ln),document.removeEventListener("drop",q))}},[U,w]),p.useEffect(function(){return!r&&f&&U.current&&U.current.focus(),function(){}},[U,f,r]);var L=p.useCallback(function(d){F?F(d):console.error(d)},[F]),Se=p.useCallback(function(d){d.preventDefault(),d.persist(),Be(d),N.current=[].concat(ci(N.current),[d.target]),$e(d)&&Promise.resolve(o(d)).then(function(y){if(!(nt(d)&&!R)){var M=y.length,z=M>0&&Yo({files:y,accept:ce,minSize:a,maxSize:i,multiple:s,maxFiles:c,validator:G}),Y=M>0&&!z;V({isDragAccept:z,isDragReject:Y,isDragActive:!0,type:"setDraggedFiles"}),u&&u(d)}}).catch(function(y){return L(y)})},[o,u,L,R,ce,a,i,s,c,G]),Ae=p.useCallback(function(d){d.preventDefault(),d.persist(),Be(d);var y=$e(d);if(y&&d.dataTransfer)try{d.dataTransfer.dropEffect="copy"}catch{}return y&&g&&g(d),!1},[g,R]),Wt=p.useCallback(function(d){d.preventDefault(),d.persist(),Be(d);var y=N.current.filter(function(z){return U.current&&U.current.contains(z)}),M=y.indexOf(d.target);M!==-1&&y.splice(M,1),N.current=y,!(y.length>0)&&(V({type:"setDraggedFiles",isDragActive:!1,isDragAccept:!1,isDragReject:!1}),$e(d)&&m&&m(d))},[U,m,R]),Ue=p.useCallback(function(d,y){var M=[],z=[];d.forEach(function(Y){var Oe=Fn(Y,ce),we=vt(Oe,2),lt=we[0],ut=we[1],pt=Ln(Y,a,i),We=vt(pt,2),dt=We[0],ht=We[1],ft=G?G(Y):null;if(lt&&dt&&!ft)M.push(Y);else{var mt=[ut,ht];ft&&(mt=mt.concat(ft)),z.push({file:Y,errors:mt.filter(function(br){return br})})}}),(!s&&M.length>1||s&&c>=1&&M.length>c)&&(M.forEach(function(Y){z.push({file:Y,errors:[Ko]})}),M.splice(0)),V({acceptedFiles:M,fileRejections:z,type:"setFiles"}),b&&b(M,z,y),z.length>0&&x&&x(z,y),M.length>0&&v&&v(M,y)},[V,s,ce,a,i,c,b,v,x,G]),ze=p.useCallback(function(d){d.preventDefault(),d.persist(),Be(d),N.current=[],$e(d)&&Promise.resolve(o(d)).then(function(y){nt(d)&&!R||Ue(y,d)}).catch(function(y){return L(y)}),V({type:"reset"})},[o,Ue,L,R]),be=p.useCallback(function(){if(j.current){V({type:"openDialog"}),De();var d={multiple:s,types:Fe};window.showOpenFilePicker(d).then(function(y){return o(y)}).then(function(y){Ue(y,null),V({type:"closeDialog"})}).catch(function(y){ni(y)?(ve(y),V({type:"closeDialog"})):ri(y)?(j.current=!1,Z.current?(Z.current.value=null,Z.current.click()):L(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided."))):L(y)});return}Z.current&&(V({type:"openDialog"}),De(),Z.current.value=null,Z.current.click())},[V,De,ve,D,Ue,L,Fe,s]),Ht=p.useCallback(function(d){!U.current||!U.current.isEqualNode(d.target)||(d.key===" "||d.key==="Enter"||d.keyCode===32||d.keyCode===13)&&(d.preventDefault(),be())},[U,be]),$t=p.useCallback(function(){V({type:"focus"})},[]),Gt=p.useCallback(function(){V({type:"blur"})},[]),Zt=p.useCallback(function(){h||(Jo()?setTimeout(be,0):be())},[h,be]),xe=function(y){return r?null:y},ct=function(y){return P?null:xe(y)},je=function(y){return C?null:xe(y)},Be=function(y){R&&y.stopPropagation()},mr=p.useMemo(function(){return function(){var d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},y=d.refKey,M=y===void 0?"ref":y,z=d.role,Y=d.onKeyDown,Oe=d.onFocus,we=d.onBlur,lt=d.onClick,ut=d.onDragEnter,pt=d.onDragOver,We=d.onDragLeave,dt=d.onDrop,ht=rt(d,ai);return T(T(Ct({onKeyDown:ct(ne(Y,Ht)),onFocus:ct(ne(Oe,$t)),onBlur:ct(ne(we,Gt)),onClick:xe(ne(lt,Zt)),onDragEnter:je(ne(ut,Se)),onDragOver:je(ne(pt,Ae)),onDragLeave:je(ne(We,Wt)),onDrop:je(ne(dt,ze)),role:typeof z=="string"&&z!==""?z:"presentation"},M,U),!r&&!P?{tabIndex:0}:{}),ht)}},[U,Ht,$t,Gt,Zt,Se,Ae,Wt,ze,P,C,r]),gr=p.useCallback(function(d){d.stopPropagation()},[]),vr=p.useMemo(function(){return function(){var d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},y=d.refKey,M=y===void 0?"ref":y,z=d.onChange,Y=d.onClick,Oe=rt(d,si),we=Ct({accept:ce,multiple:s,type:"file",style:{display:"none"},onChange:xe(ne(z,ze)),onClick:xe(ne(Y,gr)),tabIndex:-1},M,Z);return T(T({},we),Oe)}},[Z,t,s,ze,r]);return T(T({},Le),{},{isFocused:A&&!r,getRootProps:mr,getInputProps:vr,rootRef:U,inputRef:Z,open:xe(be)})}function gi(e,n){switch(n.type){case"focus":return T(T({},e),{},{isFocused:!0});case"blur":return T(T({},e),{},{isFocused:!1});case"openDialog":return T(T({},Et),{},{isFileDialogActive:!0});case"closeDialog":return T(T({},e),{},{isFileDialogActive:!1});case"setDraggedFiles":return T(T({},e),{},{isDragActive:n.isDragActive,isDragAccept:n.isDragAccept,isDragReject:n.isDragReject});case"setFiles":return T(T({},e),{},{acceptedFiles:n.acceptedFiles,fileRejections:n.fileRejections});case"reset":return T({},Et);default:return e}}function pn(){}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hn="firebasestorage.googleapis.com",$n="storageBucket",vi=2*60*1e3,bi=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I extends oo{constructor(n,t,r=0){super(bt(n),`Firebase Storage: ${t} (${bt(n)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,I.prototype)}get status(){return this.status_}set status(n){this.status_=n}_codeEquals(n){return bt(n)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(n){this.customData.serverResponse=n,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var k;(function(e){e.UNKNOWN="unknown",e.OBJECT_NOT_FOUND="object-not-found",e.BUCKET_NOT_FOUND="bucket-not-found",e.PROJECT_NOT_FOUND="project-not-found",e.QUOTA_EXCEEDED="quota-exceeded",e.UNAUTHENTICATED="unauthenticated",e.UNAUTHORIZED="unauthorized",e.UNAUTHORIZED_APP="unauthorized-app",e.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",e.INVALID_CHECKSUM="invalid-checksum",e.CANCELED="canceled",e.INVALID_EVENT_NAME="invalid-event-name",e.INVALID_URL="invalid-url",e.INVALID_DEFAULT_BUCKET="invalid-default-bucket",e.NO_DEFAULT_BUCKET="no-default-bucket",e.CANNOT_SLICE_BLOB="cannot-slice-blob",e.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",e.NO_DOWNLOAD_URL="no-download-url",e.INVALID_ARGUMENT="invalid-argument",e.INVALID_ARGUMENT_COUNT="invalid-argument-count",e.APP_DELETED="app-deleted",e.INVALID_ROOT_OPERATION="invalid-root-operation",e.INVALID_FORMAT="invalid-format",e.INTERNAL_ERROR="internal-error",e.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(k||(k={}));function bt(e){return"storage/"+e}function Lt(){const e="An unknown error occurred, please check the error payload for server response.";return new I(k.UNKNOWN,e)}function xi(e){return new I(k.OBJECT_NOT_FOUND,"Object '"+e+"' does not exist.")}function wi(e){return new I(k.QUOTA_EXCEEDED,"Quota for bucket '"+e+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function yi(){const e="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new I(k.UNAUTHENTICATED,e)}function _i(){return new I(k.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function Ci(e){return new I(k.UNAUTHORIZED,"User does not have permission to access '"+e+"'.")}function Ei(){return new I(k.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Ri(){return new I(k.CANCELED,"User canceled the upload/download.")}function Di(e){return new I(k.INVALID_URL,"Invalid URL '"+e+"'.")}function Pi(e){return new I(k.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+e+"'.")}function Si(){return new I(k.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+$n+"' property when initializing the app?")}function Ai(){return new I(k.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function Oi(){return new I(k.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function Ti(e){return new I(k.UNSUPPORTED_ENVIRONMENT,`${e} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Rt(e){return new I(k.INVALID_ARGUMENT,e)}function Gn(){return new I(k.APP_DELETED,"The Firebase app was deleted.")}function ki(e){return new I(k.INVALID_ROOT_OPERATION,"The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Ie(e,n){return new I(k.INVALID_FORMAT,"String does not match format '"+e+"': "+n)}function ke(e){throw new I(k.INTERNAL_ERROR,"Internal error: "+e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(n,t){this.bucket=n,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const n=encodeURIComponent;return"/b/"+n(this.bucket)+"/o/"+n(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(n,t){let r;try{r=X.makeFromUrl(n,t)}catch{return new X(n,"")}if(r.path==="")return r;throw Pi(n)}static makeFromUrl(n,t){let r=null;const o="([A-Za-z0-9.\\-_]+)";function i(h){h.path.charAt(h.path.length-1)==="/"&&(h.path_=h.path_.slice(0,-1))}const a="(/(.*))?$",s=new RegExp("^gs://"+o+a,"i"),c={bucket:1,path:3};function u(h){h.path_=decodeURIComponent(h.path)}const m="v[A-Za-z0-9_]+",g=t.replace(/[.]/g,"\\."),b="(/([^?#]*).*)?$",v=new RegExp(`^https?://${g}/${m}/b/${o}/o${b}`,"i"),x={bucket:1,path:3},_=t===Hn?"(?:storage.googleapis.com|storage.cloud.google.com)":t,E="([^?#]*)",D=new RegExp(`^https?://${_}/${o}/${E}`,"i"),w=[{regex:s,indices:c,postModify:i},{regex:v,indices:x,postModify:u},{regex:D,indices:{bucket:1,path:2},postModify:u}];for(let h=0;h<w.length;h++){const P=w[h],C=P.regex.exec(n);if(C){const R=C[P.indices.bucket];let F=C[P.indices.path];F||(F=""),r=new X(R,F),P.postModify(r);break}}if(r==null)throw Di(n);return r}}class Ii{constructor(n){this.promise_=Promise.reject(n)}getPromise(){return this.promise_}cancel(n=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ni(e,n,t){let r=1,o=null,i=null,a=!1,s=0;function c(){return s===2}let u=!1;function m(...E){u||(u=!0,n.apply(null,E))}function g(E){o=setTimeout(()=>{o=null,e(v,c())},E)}function b(){i&&clearTimeout(i)}function v(E,...D){if(u){b();return}if(E){b(),m.call(null,E,...D);return}if(c()||a){b(),m.call(null,E,...D);return}r<64&&(r*=2);let w;s===1?(s=2,w=0):w=(r+Math.random())*1e3,g(w)}let x=!1;function _(E){x||(x=!0,b(),!u&&(o!==null?(E||(s=2),clearTimeout(o),g(0)):E||(s=1)))}return g(0),i=setTimeout(()=>{a=!0,_(!0)},t),_}function Mi(e){e(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fi(e){return e!==void 0}function Li(e){return typeof e=="object"&&!Array.isArray(e)}function Ut(e){return typeof e=="string"||e instanceof String}function dn(e){return zt()&&e instanceof Blob}function zt(){return typeof Blob<"u"&&!io()}function hn(e,n,t,r){if(r<n)throw Rt(`Invalid value for '${e}'. Expected ${n} or greater.`);if(r>t)throw Rt(`Invalid value for '${e}'. Expected ${t} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jt(e,n,t){let r=n;return t==null&&(r=`https://${n}`),`${t}://${r}/v0${e}`}function Zn(e){const n=encodeURIComponent;let t="?";for(const r in e)if(e.hasOwnProperty(r)){const o=n(r)+"="+n(e[r]);t=t+o+"&"}return t=t.slice(0,-1),t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var fe;(function(e){e[e.NO_ERROR=0]="NO_ERROR",e[e.NETWORK_ERROR=1]="NETWORK_ERROR",e[e.ABORT=2]="ABORT"})(fe||(fe={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ui(e,n){const t=e>=500&&e<600,o=[408,429].indexOf(e)!==-1,i=n.indexOf(e)!==-1;return t||o||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zi{constructor(n,t,r,o,i,a,s,c,u,m,g,b=!0){this.url_=n,this.method_=t,this.headers_=r,this.body_=o,this.successCodes_=i,this.additionalRetryCodes_=a,this.callback_=s,this.errorCallback_=c,this.timeout_=u,this.progressCallback_=m,this.connectionFactory_=g,this.retry=b,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((v,x)=>{this.resolve_=v,this.reject_=x,this.start_()})}start_(){const n=(r,o)=>{if(o){r(!1,new Ge(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const a=s=>{const c=s.loaded,u=s.lengthComputable?s.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,u)};this.progressCallback_!==null&&i.addUploadProgressListener(a),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(a),this.pendingConnection_=null;const s=i.getErrorCode()===fe.NO_ERROR,c=i.getStatus();if(!s||Ui(c,this.additionalRetryCodes_)&&this.retry){const m=i.getErrorCode()===fe.ABORT;r(!1,new Ge(!1,null,m));return}const u=this.successCodes_.indexOf(c)!==-1;r(!0,new Ge(u,i))})},t=(r,o)=>{const i=this.resolve_,a=this.reject_,s=o.connection;if(o.wasSuccessCode)try{const c=this.callback_(s,s.getResponse());Fi(c)?i(c):i()}catch(c){a(c)}else if(s!==null){const c=Lt();c.serverResponse=s.getErrorText(),this.errorCallback_?a(this.errorCallback_(s,c)):a(c)}else if(o.canceled){const c=this.appDelete_?Gn():Ri();a(c)}else{const c=Ei();a(c)}};this.canceled_?t(!1,new Ge(!1,null,!0)):this.backoffId_=Ni(n,t,this.timeout_)}getPromise(){return this.promise_}cancel(n){this.canceled_=!0,this.appDelete_=n||!1,this.backoffId_!==null&&Mi(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Ge{constructor(n,t,r){this.wasSuccessCode=n,this.connection=t,this.canceled=!!r}}function ji(e,n){n!==null&&n.length>0&&(e.Authorization="Firebase "+n)}function Bi(e,n){e["X-Firebase-Storage-Version"]="webjs/"+(n??"AppManager")}function Wi(e,n){n&&(e["X-Firebase-GMPID"]=n)}function Hi(e,n){n!==null&&(e["X-Firebase-AppCheck"]=n)}function $i(e,n,t,r,o,i,a=!0){const s=Zn(e.urlParams),c=e.url+s,u=Object.assign({},e.headers);return Wi(u,n),ji(u,t),Bi(u,i),Hi(u,r),new zi(c,e.method,u,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,o,a)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gi(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function Zi(...e){const n=Gi();if(n!==void 0){const t=new n;for(let r=0;r<e.length;r++)t.append(e[r]);return t.getBlob()}else{if(zt())return new Blob(e);throw new I(k.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function Vi(e,n,t){return e.webkitSlice?e.webkitSlice(n,t):e.mozSlice?e.mozSlice(n,t):e.slice?e.slice(n,t):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ki(e){if(typeof atob>"u")throw Ti("base-64");return atob(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oe={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class xt{constructor(n,t){this.data=n,this.contentType=t||null}}function Yi(e,n){switch(e){case oe.RAW:return new xt(Vn(n));case oe.BASE64:case oe.BASE64URL:return new xt(Kn(e,n));case oe.DATA_URL:return new xt(qi(n),Ji(n))}throw Lt()}function Vn(e){const n=[];for(let t=0;t<e.length;t++){let r=e.charCodeAt(t);if(r<=127)n.push(r);else if(r<=2047)n.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(t<e.length-1&&(e.charCodeAt(t+1)&64512)===56320))n.push(239,191,189);else{const i=r,a=e.charCodeAt(++t);r=65536|(i&1023)<<10|a&1023,n.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?n.push(239,191,189):n.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(n)}function Xi(e){let n;try{n=decodeURIComponent(e)}catch{throw Ie(oe.DATA_URL,"Malformed data URL.")}return Vn(n)}function Kn(e,n){switch(e){case oe.BASE64:{const o=n.indexOf("-")!==-1,i=n.indexOf("_")!==-1;if(o||i)throw Ie(e,"Invalid character '"+(o?"-":"_")+"' found: is it base64url encoded?");break}case oe.BASE64URL:{const o=n.indexOf("+")!==-1,i=n.indexOf("/")!==-1;if(o||i)throw Ie(e,"Invalid character '"+(o?"+":"/")+"' found: is it base64 encoded?");n=n.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=Ki(n)}catch(o){throw o.message.includes("polyfill")?o:Ie(e,"Invalid character found")}const r=new Uint8Array(t.length);for(let o=0;o<t.length;o++)r[o]=t.charCodeAt(o);return r}class Yn{constructor(n){this.base64=!1,this.contentType=null;const t=n.match(/^data:([^,]+)?,/);if(t===null)throw Ie(oe.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=t[1]||null;r!=null&&(this.base64=Qi(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=n.substring(n.indexOf(",")+1)}}function qi(e){const n=new Yn(e);return n.base64?Kn(oe.BASE64,n.rest):Xi(n.rest)}function Ji(e){return new Yn(e).contentType}function Qi(e,n){return e.length>=n.length?e.substring(e.length-n.length)===n:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(n,t){let r=0,o="";dn(n)?(this.data_=n,r=n.size,o=n.type):n instanceof ArrayBuffer?(t?this.data_=new Uint8Array(n):(this.data_=new Uint8Array(n.byteLength),this.data_.set(new Uint8Array(n))),r=this.data_.length):n instanceof Uint8Array&&(t?this.data_=n:(this.data_=new Uint8Array(n.length),this.data_.set(n)),r=n.length),this.size_=r,this.type_=o}size(){return this.size_}type(){return this.type_}slice(n,t){if(dn(this.data_)){const r=this.data_,o=Vi(r,n,t);return o===null?null:new ue(o)}else{const r=new Uint8Array(this.data_.buffer,n,t-n);return new ue(r,!0)}}static getBlob(...n){if(zt()){const t=n.map(r=>r instanceof ue?r.data_:r);return new ue(Zi.apply(null,t))}else{const t=n.map(a=>Ut(a)?Yi(oe.RAW,a).data:a.data_);let r=0;t.forEach(a=>{r+=a.byteLength});const o=new Uint8Array(r);let i=0;return t.forEach(a=>{for(let s=0;s<a.length;s++)o[i++]=a[s]}),new ue(o,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xn(e){let n;try{n=JSON.parse(e)}catch{return null}return Li(n)?n:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ea(e){if(e.length===0)return null;const n=e.lastIndexOf("/");return n===-1?"":e.slice(0,n)}function ta(e,n){const t=n.split("/").filter(r=>r.length>0).join("/");return e.length===0?t:e+"/"+t}function qn(e){const n=e.lastIndexOf("/",e.length-2);return n===-1?e:e.slice(n+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function na(e,n){return n}class ${constructor(n,t,r,o){this.server=n,this.local=t||n,this.writable=!!r,this.xform=o||na}}let Ze=null;function ra(e){return!Ut(e)||e.length<2?e:qn(e)}function Jn(){if(Ze)return Ze;const e=[];e.push(new $("bucket")),e.push(new $("generation")),e.push(new $("metageneration")),e.push(new $("name","fullPath",!0));function n(i,a){return ra(a)}const t=new $("name");t.xform=n,e.push(t);function r(i,a){return a!==void 0?Number(a):a}const o=new $("size");return o.xform=r,e.push(o),e.push(new $("timeCreated")),e.push(new $("updated")),e.push(new $("md5Hash",null,!0)),e.push(new $("cacheControl",null,!0)),e.push(new $("contentDisposition",null,!0)),e.push(new $("contentEncoding",null,!0)),e.push(new $("contentLanguage",null,!0)),e.push(new $("contentType",null,!0)),e.push(new $("metadata","customMetadata",!0)),Ze=e,Ze}function oa(e,n){function t(){const r=e.bucket,o=e.fullPath,i=new X(r,o);return n._makeStorageReference(i)}Object.defineProperty(e,"ref",{get:t})}function ia(e,n,t){const r={};r.type="file";const o=t.length;for(let i=0;i<o;i++){const a=t[i];r[a.local]=a.xform(r,n[a.server])}return oa(r,e),r}function Qn(e,n,t){const r=Xn(n);return r===null?null:ia(e,r,t)}function aa(e,n,t,r){const o=Xn(n);if(o===null||!Ut(o.downloadTokens))return null;const i=o.downloadTokens;if(i.length===0)return null;const a=encodeURIComponent;return i.split(",").map(u=>{const m=e.bucket,g=e.fullPath,b="/b/"+a(m)+"/o/"+a(g),v=jt(b,t,r),x=Zn({alt:"media",token:u});return v+x})[0]}function sa(e,n){const t={},r=n.length;for(let o=0;o<r;o++){const i=n[o];i.writable&&(t[i.server]=e[i.local])}return JSON.stringify(t)}class er{constructor(n,t,r,o){this.url=n,this.method=t,this.handler=r,this.timeout=o,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tr(e){if(!e)throw Lt()}function ca(e,n){function t(r,o){const i=Qn(e,o,n);return tr(i!==null),i}return t}function la(e,n){function t(r,o){const i=Qn(e,o,n);return tr(i!==null),aa(i,o,e.host,e._protocol)}return t}function nr(e){function n(t,r){let o;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?o=_i():o=yi():t.getStatus()===402?o=wi(e.bucket):t.getStatus()===403?o=Ci(e.path):o=r,o.status=t.getStatus(),o.serverResponse=r.serverResponse,o}return n}function ua(e){const n=nr(e);function t(r,o){let i=n(r,o);return r.getStatus()===404&&(i=xi(e.path)),i.serverResponse=o.serverResponse,i}return t}function pa(e,n,t){const r=n.fullServerUrl(),o=jt(r,e.host,e._protocol),i="GET",a=e.maxOperationRetryTime,s=new er(o,i,la(e,t),a);return s.errorHandler=ua(n),s}function da(e,n){return e&&e.contentType||n&&n.type()||"application/octet-stream"}function ha(e,n,t){const r=Object.assign({},t);return r.fullPath=e.path,r.size=n.size(),r.contentType||(r.contentType=da(null,n)),r}function fa(e,n,t,r,o){const i=n.bucketOnlyServerUrl(),a={"X-Goog-Upload-Protocol":"multipart"};function s(){let w="";for(let h=0;h<2;h++)w=w+Math.random().toString().slice(2);return w}const c=s();a["Content-Type"]="multipart/related; boundary="+c;const u=ha(n,r,o),m=sa(u,t),g="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+m+`\r
--`+c+`\r
Content-Type: `+u.contentType+`\r
\r
`,b=`\r
--`+c+"--",v=ue.getBlob(g,r,b);if(v===null)throw Ai();const x={name:u.fullPath},_=jt(i,e.host,e._protocol),E="POST",D=e.maxUploadRetryTime,f=new er(_,E,ca(e,t),D);return f.urlParams=x,f.headers=a,f.body=v.uploadData(),f.errorHandler=nr(n),f}class ma{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=fe.NO_ERROR,this.sendPromise_=new Promise(n=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=fe.ABORT,n()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=fe.NETWORK_ERROR,n()}),this.xhr_.addEventListener("load",()=>{n()})})}send(n,t,r,o){if(this.sent_)throw ke("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,n,!0),o!==void 0)for(const i in o)o.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,o[i].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw ke("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw ke("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw ke("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw ke("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(n){return this.xhr_.getResponseHeader(n)}addUploadProgressListener(n){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",n)}removeUploadProgressListener(n){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",n)}}class ga extends ma{initXhr(){this.xhr_.responseType="text"}}function rr(){return new ga}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me{constructor(n,t){this._service=n,t instanceof X?this._location=t:this._location=X.makeFromUrl(t,n.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(n,t){return new me(n,t)}get root(){const n=new X(this._location.bucket,"");return this._newRef(this._service,n)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return qn(this._location.path)}get storage(){return this._service}get parent(){const n=ea(this._location.path);if(n===null)return null;const t=new X(this._location.bucket,n);return new me(this._service,t)}_throwIfRoot(n){if(this._location.path==="")throw ki(n)}}function va(e,n,t){e._throwIfRoot("uploadBytes");const r=fa(e.storage,e._location,Jn(),new ue(n,!0),t);return e.storage.makeRequestWithTokens(r,rr).then(o=>({metadata:o,ref:e}))}function ba(e){e._throwIfRoot("getDownloadURL");const n=pa(e.storage,e._location,Jn());return e.storage.makeRequestWithTokens(n,rr).then(t=>{if(t===null)throw Oi();return t})}function xa(e,n){const t=ta(e._location.path,n),r=new X(e._location.bucket,t);return new me(e.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wa(e){return/^[A-Za-z]+:\/\//.test(e)}function ya(e,n){return new me(e,n)}function or(e,n){if(e instanceof Bt){const t=e;if(t._bucket==null)throw Si();const r=new me(t,t._bucket);return n!=null?or(r,n):r}else return n!==void 0?xa(e,n):e}function _a(e,n){if(n&&wa(n)){if(e instanceof Bt)return ya(e,n);throw Rt("To use ref(service, url), the first argument must be a Storage instance.")}else return or(e,n)}function fn(e,n){const t=n==null?void 0:n[$n];return t==null?null:X.makeFromBucketSpec(t,e)}function Ca(e,n,t,r={}){e.host=`${n}:${t}`,e._protocol="http";const{mockUserToken:o}=r;o&&(e._overrideAuthToken=typeof o=="string"?o:ro(o,e.app.options.projectId))}class Bt{constructor(n,t,r,o,i){this.app=n,this._authProvider=t,this._appCheckProvider=r,this._url=o,this._firebaseVersion=i,this._bucket=null,this._host=Hn,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=vi,this._maxUploadRetryTime=bi,this._requests=new Set,o!=null?this._bucket=X.makeFromBucketSpec(o,this._host):this._bucket=fn(this._host,this.app.options)}get host(){return this._host}set host(n){this._host=n,this._url!=null?this._bucket=X.makeFromBucketSpec(this._url,n):this._bucket=fn(n,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(n){hn("time",0,Number.POSITIVE_INFINITY,n),this._maxUploadRetryTime=n}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(n){hn("time",0,Number.POSITIVE_INFINITY,n),this._maxOperationRetryTime=n}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const n=this._authProvider.getImmediate({optional:!0});if(n){const t=await n.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){const n=this._appCheckProvider.getImmediate({optional:!0});return n?(await n.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(n=>n.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(n){return new me(this,n)}_makeRequest(n,t,r,o,i=!0){if(this._deleted)return new Ii(Gn());{const a=$i(n,this._appId,r,o,t,this._firebaseVersion,i);return this._requests.add(a),a.getPromise().then(()=>this._requests.delete(a),()=>this._requests.delete(a)),a}}async makeRequestWithTokens(n,t){const[r,o]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(n,t,r,o).getPromise()}}const mn="@firebase/storage",gn="0.11.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ir="storage";function Ea(e,n,t){return e=it(e),va(e,n,t)}function Ra(e){return e=it(e),ba(e)}function Da(e,n){return e=it(e),_a(e,n)}function Pa(e=to(),n){e=it(e);const r=Qr(e,ir).getImmediate({identifier:n}),o=eo("storage");return o&&Sa(r,...o),r}function Sa(e,n,t,r={}){Ca(e,n,t,r)}function Aa(e,{instanceIdentifier:n}){const t=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),o=e.getProvider("app-check-internal");return new Bt(t,r,o,n,no)}function Oa(){qr(new Jr(ir,Aa,"PUBLIC").setMultipleInstances(!0)),qt(mn,gn,""),qt(mn,gn,"esm2017")}Oa();/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Dt=function(e,n){return Dt=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,r){t.__proto__=r}||function(t,r){for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o])},Dt(e,n)};function Ta(e,n){Dt(e,n);function t(){this.constructor=e}e.prototype=n===null?Object.create(n):(t.prototype=n.prototype,new t)}var B=function(){return B=Object.assign||function(n){for(var t,r=1,o=arguments.length;r<o;r++){t=arguments[r];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},B.apply(this,arguments)},Pt={},ka={get exports(){return Pt},set exports(e){Pt=e}},vn=!1,he,St,At,qe,Je,ar,Qe,Ot,Tt,kt,sr,It,Nt,cr,lr;function K(){if(!vn){vn=!0;var e=navigator.userAgent,n=/(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(e),t=/(Mac OS X)|(Windows)|(Linux)/.exec(e);if(It=/\b(iPhone|iP[ao]d)/.exec(e),Nt=/\b(iP[ao]d)/.exec(e),kt=/Android/i.exec(e),cr=/FBAN\/\w+;/i.exec(e),lr=/Mobile/i.exec(e),sr=!!/Win64/.exec(e),n){he=n[1]?parseFloat(n[1]):n[5]?parseFloat(n[5]):NaN,he&&document&&document.documentMode&&(he=document.documentMode);var r=/(?:Trident\/(\d+.\d+))/.exec(e);ar=r?parseFloat(r[1])+4:he,St=n[2]?parseFloat(n[2]):NaN,At=n[3]?parseFloat(n[3]):NaN,qe=n[4]?parseFloat(n[4]):NaN,qe?(n=/(?:Chrome\/(\d+\.\d+))/.exec(e),Je=n&&n[1]?parseFloat(n[1]):NaN):Je=NaN}else he=St=At=Je=qe=NaN;if(t){if(t[1]){var o=/(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(e);Qe=o?parseFloat(o[1].replace("_",".")):!0}else Qe=!1;Ot=!!t[2],Tt=!!t[3]}else Qe=Ot=Tt=!1}}var Mt={ie:function(){return K()||he},ieCompatibilityMode:function(){return K()||ar>he},ie64:function(){return Mt.ie()&&sr},firefox:function(){return K()||St},opera:function(){return K()||At},webkit:function(){return K()||qe},safari:function(){return Mt.webkit()},chrome:function(){return K()||Je},windows:function(){return K()||Ot},osx:function(){return K()||Qe},linux:function(){return K()||Tt},iphone:function(){return K()||It},mobile:function(){return K()||It||Nt||kt||lr},nativeApp:function(){return K()||cr},android:function(){return K()||kt},ipad:function(){return K()||Nt}},Ia=Mt,Ve=!!(typeof window<"u"&&window.document&&window.document.createElement),Na={canUseDOM:Ve,canUseWorkers:typeof Worker<"u",canUseEventListeners:Ve&&!!(window.addEventListener||window.attachEvent),canUseViewport:Ve&&!!window.screen,isInWorker:!Ve},Ma=Na,ur=Ma,pr;ur.canUseDOM&&(pr=document.implementation&&document.implementation.hasFeature&&document.implementation.hasFeature("","")!==!0);/**
 * Checks if an event is supported in the current execution environment.
 *
 * NOTE: This will not work correctly for non-generic events such as `change`,
 * `reset`, `load`, `error`, and `select`.
 *
 * Borrows from Modernizr.
 *
 * @param {string} eventNameSuffix Event name, e.g. "click".
 * @param {?boolean} capture Check if the capture phase is supported.
 * @return {boolean} True if the event is supported.
 * @internal
 * @license Modernizr 3.0.0pre (Custom Build) | MIT
 */function Fa(e,n){if(!ur.canUseDOM||n&&!("addEventListener"in document))return!1;var t="on"+e,r=t in document;if(!r){var o=document.createElement("div");o.setAttribute(t,"return;"),r=typeof o[t]=="function"}return!r&&pr&&e==="wheel"&&(r=document.implementation.hasFeature("Events.wheel","3.0")),r}var La=Fa,Ua=Ia,za=La,bn=10,xn=40,wn=800;function dr(e){var n=0,t=0,r=0,o=0;return"detail"in e&&(t=e.detail),"wheelDelta"in e&&(t=-e.wheelDelta/120),"wheelDeltaY"in e&&(t=-e.wheelDeltaY/120),"wheelDeltaX"in e&&(n=-e.wheelDeltaX/120),"axis"in e&&e.axis===e.HORIZONTAL_AXIS&&(n=t,t=0),r=n*bn,o=t*bn,"deltaY"in e&&(o=e.deltaY),"deltaX"in e&&(r=e.deltaX),(r||o)&&e.deltaMode&&(e.deltaMode==1?(r*=xn,o*=xn):(r*=wn,o*=wn)),r&&!n&&(n=r<1?-1:1),o&&!t&&(t=o<1?-1:1),{spinX:n,spinY:t,pixelX:r,pixelY:o}}dr.getEventType=function(){return Ua.firefox()?"DOMMouseScroll":za("wheel")?"wheel":"mousewheel"};var ja=dr;(function(e){e.exports=ja})(ka);const Ba=Dr(Pt);function Wa(e,n,t,r,o,i){i===void 0&&(i=0);var a=Ce(e,n,i),s=a.width,c=a.height,u=Math.min(s,t),m=Math.min(c,r);return u>m*o?{width:m*o,height:m}:{width:u,height:u/o}}function Ha(e){return e.width>e.height?e.width/e.naturalWidth:e.height/e.naturalHeight}function Ke(e,n,t,r,o){o===void 0&&(o=0);var i=Ce(n.width,n.height,o),a=i.width,s=i.height;return{x:yn(e.x,a,t.width,r),y:yn(e.y,s,t.height,r)}}function yn(e,n,t,r){var o=n*r/2-t/2;return at(e,-o,o)}function _n(e,n){return Math.sqrt(Math.pow(e.y-n.y,2)+Math.pow(e.x-n.x,2))}function Cn(e,n){return Math.atan2(n.y-e.y,n.x-e.x)*180/Math.PI}function $a(e,n,t,r,o,i,a){i===void 0&&(i=0),a===void 0&&(a=!0);var s=a?Ga:Za,c=Ce(n.width,n.height,i),u=Ce(n.naturalWidth,n.naturalHeight,i),m={x:s(100,((c.width-t.width/o)/2-e.x/o)/c.width*100),y:s(100,((c.height-t.height/o)/2-e.y/o)/c.height*100),width:s(100,t.width/c.width*100/o),height:s(100,t.height/c.height*100/o)},g=Math.round(s(u.width,m.width*u.width/100)),b=Math.round(s(u.height,m.height*u.height/100)),v=u.width>=u.height*r,x=v?{width:Math.round(b*r),height:b}:{width:g,height:Math.round(g/r)},_=B(B({},x),{x:Math.round(s(u.width-x.width,m.x*u.width/100)),y:Math.round(s(u.height-x.height,m.y*u.height/100))});return{croppedAreaPercentages:m,croppedAreaPixels:_}}function Ga(e,n){return Math.min(e,Math.max(0,n))}function Za(e,n){return n}function Va(e,n,t,r,o,i){var a=Ce(n.width,n.height,t),s=at(r.width/a.width*(100/e.width),o,i),c={x:s*a.width/2-r.width/2-a.width*s*(e.x/100),y:s*a.height/2-r.height/2-a.height*s*(e.y/100)};return{crop:c,zoom:s}}function Ka(e,n,t){var r=Ha(n);return t.height>t.width?t.height/(e.height*r):t.width/(e.width*r)}function Ya(e,n,t,r,o,i){t===void 0&&(t=0);var a=Ce(n.naturalWidth,n.naturalHeight,t),s=at(Ka(e,n,r),o,i),c=r.height>r.width?r.height/e.height:r.width/e.width,u={x:((a.width-e.width)/2-e.x)*c,y:((a.height-e.height)/2-e.y)*c};return{crop:u,zoom:s}}function En(e,n){return{x:(n.x+e.x)/2,y:(n.y+e.y)/2}}function Xa(e){return e*Math.PI/180}function Ce(e,n,t){var r=Xa(t);return{width:Math.abs(Math.cos(r)*e)+Math.abs(Math.sin(r)*n),height:Math.abs(Math.sin(r)*e)+Math.abs(Math.cos(r)*n)}}function at(e,n,t){return Math.min(Math.max(e,n),t)}function Ye(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return e.filter(function(t){return typeof t=="string"&&t.length>0}).join(" ").trim()}var qa=`.reactEasyCrop_Container {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  user-select: none;
  touch-action: none;
  cursor: move;
  display: flex;
  justify-content: center;
  align-items: center;
}

.reactEasyCrop_Image,
.reactEasyCrop_Video {
  will-change: transform; /* this improves performances and prevent painting issues on iOS Chrome */
}

.reactEasyCrop_Contain {
  max-width: 100%;
  max-height: 100%;
  margin: auto;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
.reactEasyCrop_Cover_Horizontal {
  width: 100%;
  height: auto;
}
.reactEasyCrop_Cover_Vertical {
  width: auto;
  height: 100%;
}

.reactEasyCrop_CropArea {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid rgba(255, 255, 255, 0.5);
  box-sizing: border-box;
  box-shadow: 0 0 0 9999em;
  color: rgba(0, 0, 0, 0.5);
  overflow: hidden;
}

.reactEasyCrop_CropAreaRound {
  border-radius: 50%;
}

.reactEasyCrop_CropAreaGrid::before {
  content: ' ';
  box-sizing: border-box;
  position: absolute;
  border: 1px solid rgba(255, 255, 255, 0.5);
  top: 0;
  bottom: 0;
  left: 33.33%;
  right: 33.33%;
  border-top: 0;
  border-bottom: 0;
}

.reactEasyCrop_CropAreaGrid::after {
  content: ' ';
  box-sizing: border-box;
  position: absolute;
  border: 1px solid rgba(255, 255, 255, 0.5);
  top: 33.33%;
  bottom: 33.33%;
  left: 0;
  right: 0;
  border-left: 0;
  border-right: 0;
}
`,Ja=1,Qa=3,Rn=function(e){Ta(n,e);function n(){var t=e!==null&&e.apply(this,arguments)||this;return t.imageRef=ae.createRef(),t.videoRef=ae.createRef(),t.containerRef=null,t.styleRef=null,t.containerRect=null,t.mediaSize={width:0,height:0,naturalWidth:0,naturalHeight:0},t.dragStartPosition={x:0,y:0},t.dragStartCrop={x:0,y:0},t.gestureZoomStart=0,t.gestureRotationStart=0,t.isTouching=!1,t.lastPinchDistance=0,t.lastPinchRotation=0,t.rafDragTimeout=null,t.rafPinchTimeout=null,t.wheelTimer=null,t.currentDoc=typeof document<"u"?document:null,t.currentWindow=typeof window<"u"?window:null,t.resizeObserver=null,t.state={cropSize:null,hasWheelJustStarted:!1},t.initResizeObserver=function(){if(!(typeof window.ResizeObserver>"u"||!t.containerRef)){var r=!0;t.resizeObserver=new window.ResizeObserver(function(o){if(r){r=!1;return}t.computeSizes()}),t.resizeObserver.observe(t.containerRef)}},t.preventZoomSafari=function(r){return r.preventDefault()},t.cleanEvents=function(){t.currentDoc&&(t.currentDoc.removeEventListener("mousemove",t.onMouseMove),t.currentDoc.removeEventListener("mouseup",t.onDragStopped),t.currentDoc.removeEventListener("touchmove",t.onTouchMove),t.currentDoc.removeEventListener("touchend",t.onDragStopped),t.currentDoc.removeEventListener("gesturemove",t.onGestureMove),t.currentDoc.removeEventListener("gestureend",t.onGestureEnd))},t.clearScrollEvent=function(){t.containerRef&&t.containerRef.removeEventListener("wheel",t.onWheel),t.wheelTimer&&clearTimeout(t.wheelTimer)},t.onMediaLoad=function(){var r=t.computeSizes();r&&(t.emitCropData(),t.setInitialCrop(r)),t.props.onMediaLoaded&&t.props.onMediaLoaded(t.mediaSize)},t.setInitialCrop=function(r){if(t.props.initialCroppedAreaPercentages){var o=Va(t.props.initialCroppedAreaPercentages,t.mediaSize,t.props.rotation,r,t.props.minZoom,t.props.maxZoom),i=o.crop,a=o.zoom;t.props.onCropChange(i),t.props.onZoomChange&&t.props.onZoomChange(a)}else if(t.props.initialCroppedAreaPixels){var s=Ya(t.props.initialCroppedAreaPixels,t.mediaSize,t.props.rotation,r,t.props.minZoom,t.props.maxZoom),i=s.crop,a=s.zoom;t.props.onCropChange(i),t.props.onZoomChange&&t.props.onZoomChange(a)}},t.computeSizes=function(){var r,o,i,a,s,c,u=t.imageRef.current||t.videoRef.current;if(u&&t.containerRef){t.containerRect=t.containerRef.getBoundingClientRect();var m=t.containerRect.width/t.containerRect.height,g=((r=t.imageRef.current)===null||r===void 0?void 0:r.naturalWidth)||((o=t.videoRef.current)===null||o===void 0?void 0:o.videoWidth)||0,b=((i=t.imageRef.current)===null||i===void 0?void 0:i.naturalHeight)||((a=t.videoRef.current)===null||a===void 0?void 0:a.videoHeight)||0,v=u.offsetWidth<g||u.offsetHeight<b,x=g/b,_=void 0;if(v)switch(t.props.objectFit){default:case"contain":_=m>x?{width:t.containerRect.height*x,height:t.containerRect.height}:{width:t.containerRect.width,height:t.containerRect.width/x};break;case"horizontal-cover":_={width:t.containerRect.width,height:t.containerRect.width/x};break;case"vertical-cover":_={width:t.containerRect.height*x,height:t.containerRect.height};break;case"auto-cover":_=g>b?{width:t.containerRect.width,height:t.containerRect.width/x}:{width:t.containerRect.height*x,height:t.containerRect.height};break}else _={width:u.offsetWidth,height:u.offsetHeight};t.mediaSize=B(B({},_),{naturalWidth:g,naturalHeight:b}),t.props.setMediaSize&&t.props.setMediaSize(t.mediaSize);var E=t.props.cropSize?t.props.cropSize:Wa(t.mediaSize.width,t.mediaSize.height,t.containerRect.width,t.containerRect.height,t.props.aspect,t.props.rotation);return(((s=t.state.cropSize)===null||s===void 0?void 0:s.height)!==E.height||((c=t.state.cropSize)===null||c===void 0?void 0:c.width)!==E.width)&&t.props.onCropSizeChange&&t.props.onCropSizeChange(E),t.setState({cropSize:E},t.recomputeCropPosition),t.props.setCropSize&&t.props.setCropSize(E),E}},t.onMouseDown=function(r){t.currentDoc&&(r.preventDefault(),t.currentDoc.addEventListener("mousemove",t.onMouseMove),t.currentDoc.addEventListener("mouseup",t.onDragStopped),t.onDragStart(n.getMousePoint(r)))},t.onMouseMove=function(r){return t.onDrag(n.getMousePoint(r))},t.onTouchStart=function(r){t.currentDoc&&(t.isTouching=!0,!(t.props.onTouchRequest&&!t.props.onTouchRequest(r))&&(t.currentDoc.addEventListener("touchmove",t.onTouchMove,{passive:!1}),t.currentDoc.addEventListener("touchend",t.onDragStopped),r.touches.length===2?t.onPinchStart(r):r.touches.length===1&&t.onDragStart(n.getTouchPoint(r.touches[0]))))},t.onTouchMove=function(r){r.preventDefault(),r.touches.length===2?t.onPinchMove(r):r.touches.length===1&&t.onDrag(n.getTouchPoint(r.touches[0]))},t.onGestureStart=function(r){t.currentDoc&&(r.preventDefault(),t.currentDoc.addEventListener("gesturechange",t.onGestureMove),t.currentDoc.addEventListener("gestureend",t.onGestureEnd),t.gestureZoomStart=t.props.zoom,t.gestureRotationStart=t.props.rotation)},t.onGestureMove=function(r){if(r.preventDefault(),!t.isTouching){var o=n.getMousePoint(r),i=t.gestureZoomStart-1+r.scale;if(t.setNewZoom(i,o,{shouldUpdatePosition:!0}),t.props.onRotationChange){var a=t.gestureRotationStart+r.rotation;t.props.onRotationChange(a)}}},t.onGestureEnd=function(r){t.cleanEvents()},t.onDragStart=function(r){var o,i,a=r.x,s=r.y;t.dragStartPosition={x:a,y:s},t.dragStartCrop=B({},t.props.crop),(i=(o=t.props).onInteractionStart)===null||i===void 0||i.call(o)},t.onDrag=function(r){var o=r.x,i=r.y;t.currentWindow&&(t.rafDragTimeout&&t.currentWindow.cancelAnimationFrame(t.rafDragTimeout),t.rafDragTimeout=t.currentWindow.requestAnimationFrame(function(){if(t.state.cropSize&&!(o===void 0||i===void 0)){var a=o-t.dragStartPosition.x,s=i-t.dragStartPosition.y,c={x:t.dragStartCrop.x+a,y:t.dragStartCrop.y+s},u=t.props.restrictPosition?Ke(c,t.mediaSize,t.state.cropSize,t.props.zoom,t.props.rotation):c;t.props.onCropChange(u)}}))},t.onDragStopped=function(){var r,o;t.isTouching=!1,t.cleanEvents(),t.emitCropData(),(o=(r=t.props).onInteractionEnd)===null||o===void 0||o.call(r)},t.onWheel=function(r){if(t.currentWindow&&!(t.props.onWheelRequest&&!t.props.onWheelRequest(r))){r.preventDefault();var o=n.getMousePoint(r),i=Ba(r).pixelY,a=t.props.zoom-i*t.props.zoomSpeed/200;t.setNewZoom(a,o,{shouldUpdatePosition:!0}),t.state.hasWheelJustStarted||t.setState({hasWheelJustStarted:!0},function(){var s,c;return(c=(s=t.props).onInteractionStart)===null||c===void 0?void 0:c.call(s)}),t.wheelTimer&&clearTimeout(t.wheelTimer),t.wheelTimer=t.currentWindow.setTimeout(function(){return t.setState({hasWheelJustStarted:!1},function(){var s,c;return(c=(s=t.props).onInteractionEnd)===null||c===void 0?void 0:c.call(s)})},250)}},t.getPointOnContainer=function(r){var o=r.x,i=r.y;if(!t.containerRect)throw new Error("The Cropper is not mounted");return{x:t.containerRect.width/2-(o-t.containerRect.left),y:t.containerRect.height/2-(i-t.containerRect.top)}},t.getPointOnMedia=function(r){var o=r.x,i=r.y,a=t.props,s=a.crop,c=a.zoom;return{x:(o+s.x)/c,y:(i+s.y)/c}},t.setNewZoom=function(r,o,i){var a=i===void 0?{}:i,s=a.shouldUpdatePosition,c=s===void 0?!0:s;if(!(!t.state.cropSize||!t.props.onZoomChange)){var u=at(r,t.props.minZoom,t.props.maxZoom);if(c){var m=t.getPointOnContainer(o),g=t.getPointOnMedia(m),b={x:g.x*u-m.x,y:g.y*u-m.y},v=t.props.restrictPosition?Ke(b,t.mediaSize,t.state.cropSize,u,t.props.rotation):b;t.props.onCropChange(v)}t.props.onZoomChange(u)}},t.getCropData=function(){if(!t.state.cropSize)return null;var r=t.props.restrictPosition?Ke(t.props.crop,t.mediaSize,t.state.cropSize,t.props.zoom,t.props.rotation):t.props.crop;return $a(r,t.mediaSize,t.state.cropSize,t.getAspect(),t.props.zoom,t.props.rotation,t.props.restrictPosition)},t.emitCropData=function(){var r=t.getCropData();if(r){var o=r.croppedAreaPercentages,i=r.croppedAreaPixels;t.props.onCropComplete&&t.props.onCropComplete(o,i),t.props.onCropAreaChange&&t.props.onCropAreaChange(o,i)}},t.emitCropAreaChange=function(){var r=t.getCropData();if(r){var o=r.croppedAreaPercentages,i=r.croppedAreaPixels;t.props.onCropAreaChange&&t.props.onCropAreaChange(o,i)}},t.recomputeCropPosition=function(){if(t.state.cropSize){var r=t.props.restrictPosition?Ke(t.props.crop,t.mediaSize,t.state.cropSize,t.props.zoom,t.props.rotation):t.props.crop;t.props.onCropChange(r),t.emitCropData()}},t}return n.prototype.componentDidMount=function(){!this.currentDoc||!this.currentWindow||(this.containerRef&&(this.containerRef.ownerDocument&&(this.currentDoc=this.containerRef.ownerDocument),this.currentDoc.defaultView&&(this.currentWindow=this.currentDoc.defaultView),this.initResizeObserver(),typeof window.ResizeObserver>"u"&&this.currentWindow.addEventListener("resize",this.computeSizes),this.props.zoomWithScroll&&this.containerRef.addEventListener("wheel",this.onWheel,{passive:!1}),this.containerRef.addEventListener("gesturestart",this.onGestureStart)),this.props.disableAutomaticStylesInjection||(this.styleRef=this.currentDoc.createElement("style"),this.styleRef.setAttribute("type","text/css"),this.props.nonce&&this.styleRef.setAttribute("nonce",this.props.nonce),this.styleRef.innerHTML=qa,this.currentDoc.head.appendChild(this.styleRef)),this.imageRef.current&&this.imageRef.current.complete&&this.onMediaLoad(),this.props.setImageRef&&this.props.setImageRef(this.imageRef),this.props.setVideoRef&&this.props.setVideoRef(this.videoRef))},n.prototype.componentWillUnmount=function(){var t,r;!this.currentDoc||!this.currentWindow||(typeof window.ResizeObserver>"u"&&this.currentWindow.removeEventListener("resize",this.computeSizes),(t=this.resizeObserver)===null||t===void 0||t.disconnect(),this.containerRef&&this.containerRef.removeEventListener("gesturestart",this.preventZoomSafari),this.styleRef&&((r=this.styleRef.parentNode)===null||r===void 0||r.removeChild(this.styleRef)),this.cleanEvents(),this.props.zoomWithScroll&&this.clearScrollEvent())},n.prototype.componentDidUpdate=function(t){var r,o,i,a,s,c,u,m,g;t.rotation!==this.props.rotation?(this.computeSizes(),this.recomputeCropPosition()):t.aspect!==this.props.aspect?this.computeSizes():t.zoom!==this.props.zoom?this.recomputeCropPosition():((r=t.cropSize)===null||r===void 0?void 0:r.height)!==((o=this.props.cropSize)===null||o===void 0?void 0:o.height)||((i=t.cropSize)===null||i===void 0?void 0:i.width)!==((a=this.props.cropSize)===null||a===void 0?void 0:a.width)?this.computeSizes():(((s=t.crop)===null||s===void 0?void 0:s.x)!==((c=this.props.crop)===null||c===void 0?void 0:c.x)||((u=t.crop)===null||u===void 0?void 0:u.y)!==((m=this.props.crop)===null||m===void 0?void 0:m.y))&&this.emitCropAreaChange(),t.zoomWithScroll!==this.props.zoomWithScroll&&this.containerRef&&(this.props.zoomWithScroll?this.containerRef.addEventListener("wheel",this.onWheel,{passive:!1}):this.clearScrollEvent()),t.video!==this.props.video&&((g=this.videoRef.current)===null||g===void 0||g.load())},n.prototype.getAspect=function(){var t=this.props,r=t.cropSize,o=t.aspect;return r?r.width/r.height:o},n.prototype.onPinchStart=function(t){var r=n.getTouchPoint(t.touches[0]),o=n.getTouchPoint(t.touches[1]);this.lastPinchDistance=_n(r,o),this.lastPinchRotation=Cn(r,o),this.onDragStart(En(r,o))},n.prototype.onPinchMove=function(t){var r=this;if(!(!this.currentDoc||!this.currentWindow)){var o=n.getTouchPoint(t.touches[0]),i=n.getTouchPoint(t.touches[1]),a=En(o,i);this.onDrag(a),this.rafPinchTimeout&&this.currentWindow.cancelAnimationFrame(this.rafPinchTimeout),this.rafPinchTimeout=this.currentWindow.requestAnimationFrame(function(){var s=_n(o,i),c=r.props.zoom*(s/r.lastPinchDistance);r.setNewZoom(c,a,{shouldUpdatePosition:!1}),r.lastPinchDistance=s;var u=Cn(o,i),m=r.props.rotation+(u-r.lastPinchRotation);r.props.onRotationChange&&r.props.onRotationChange(m),r.lastPinchRotation=u})}},n.prototype.render=function(){var t=this,r=this.props,o=r.image,i=r.video,a=r.mediaProps,s=r.transform,c=r.crop,u=c.x,m=c.y,g=r.rotation,b=r.zoom,v=r.cropShape,x=r.showGrid,_=r.style,E=_.containerStyle,D=_.cropAreaStyle,f=_.mediaStyle,w=r.classes,h=w.containerClassName,P=w.cropAreaClassName,C=w.mediaClassName,R=r.objectFit;return ae.createElement("div",{onMouseDown:this.onMouseDown,onTouchStart:this.onTouchStart,ref:function(G){return t.containerRef=G},"data-testid":"container",style:E,className:Ye("reactEasyCrop_Container",h)},o?ae.createElement("img",B({alt:"",className:Ye("reactEasyCrop_Image",R==="contain"&&"reactEasyCrop_Contain",R==="horizontal-cover"&&"reactEasyCrop_Cover_Horizontal",R==="vertical-cover"&&"reactEasyCrop_Cover_Vertical",R==="auto-cover"&&(this.mediaSize.naturalWidth>this.mediaSize.naturalHeight?"reactEasyCrop_Cover_Horizontal":"reactEasyCrop_Cover_Vertical"),C)},a,{src:o,ref:this.imageRef,style:B(B({},f),{transform:s||"translate(".concat(u,"px, ").concat(m,"px) rotate(").concat(g,"deg) scale(").concat(b,")")}),onLoad:this.onMediaLoad})):i&&ae.createElement("video",B({autoPlay:!0,loop:!0,muted:!0,className:Ye("reactEasyCrop_Video",R==="contain"&&"reactEasyCrop_Contain",R==="horizontal-cover"&&"reactEasyCrop_Cover_Horizontal",R==="vertical-cover"&&"reactEasyCrop_Cover_Vertical",R==="auto-cover"&&(this.mediaSize.naturalWidth>this.mediaSize.naturalHeight?"reactEasyCrop_Cover_Horizontal":"reactEasyCrop_Cover_Vertical"),C)},a,{ref:this.videoRef,onLoadedMetadata:this.onMediaLoad,style:B(B({},f),{transform:s||"translate(".concat(u,"px, ").concat(m,"px) rotate(").concat(g,"deg) scale(").concat(b,")")}),controls:!1}),(Array.isArray(i)?i:[{src:i}]).map(function(F){return ae.createElement("source",B({key:F.src},F))})),this.state.cropSize&&ae.createElement("div",{style:B(B({},D),{width:this.state.cropSize.width,height:this.state.cropSize.height}),"data-testid":"cropper",className:Ye("reactEasyCrop_CropArea",v==="round"&&"reactEasyCrop_CropAreaRound",x&&"reactEasyCrop_CropAreaGrid",P)}))},n.defaultProps={zoom:1,rotation:0,aspect:4/3,maxZoom:Qa,minZoom:Ja,cropShape:"rect",objectFit:"contain",showGrid:!0,style:{},classes:{},mediaProps:{},zoomSpeed:1,restrictPosition:!0,zoomWithScroll:!0},n.getMousePoint=function(t){return{x:Number(t.clientX),y:Number(t.clientY)}},n.getTouchPoint=function(t){return{x:Number(t.clientX),y:Number(t.clientY)}},n}(ae.Component);function es(e,n,t){const r=new Image;r.src=e;const o=document.createElement("canvas");o.width=t.width,o.height=t.height;const i=o.getContext("2d");return new Promise(a=>{r.onload=()=>{const s=r.naturalWidth/r.width,c=r.naturalHeight/r.height,u={x:n.x*s,y:n.y*c,width:n.width*s,height:n.height*c};o.width=u.width,o.height=u.height,i==null||i.drawImage(r,u.x,u.y,u.width,u.height,0,0,u.width,u.height),o.toBlob(m=>{a(m)},"image/jpeg",1)}})}const re={INITIAL:"INITIAL",LOADING:"LOADING",ERROR:"ERROR",SUCCESS:"SUCCESS"},ts=({type:e})=>{const n=Pa(),t=p.useRef(null),[r,o]=p.useState(""),[i,a]=p.useState({msg:"",status:re.INITIAL}),s=J(A=>A.user),c=ge(),[u,m]=p.useState(""),[g,b]=p.useState({x:0,y:0}),[v,x]=p.useState(1),[_,E]=p.useState({width:0,height:0,x:0,y:0}),[,D]=Sr(),[,f]=Ar(),[w,h]=p.useState(!1),[P,C]=p.useState(!1),R=1e7,{acceptedFiles:F,fileRejections:G,isDragReject:ce,getRootProps:Fe,getInputProps:De,isDragActive:ve}=Wn({accept:{"image/jpeg":[],"image/jpg":[]},maxSize:R,onDropRejected:A=>{A.forEach(H=>{const j=H.file,le=H.errors;j.size&&j.size>R&&U(j),console.log(`Rejected file: ${j.name}`),console.log("Reasons for rejection:"),le.forEach(N=>console.log(`- ${N.message}`))})},maxFiles:1,multiple:!1}),U=p.useCallback(A=>{alert(`File "${A.name}" exceeds the maximum file size of ${R} bytes.`)},[R]),Z=G.map(A=>{var H;return S("li",{children:[A.file.name," (",A.file.size||((H=A==null?void 0:A.file)==null?void 0:H.size)," bytes) -"," ",A.errors[0].message]},A.file.name)});p.useEffect(()=>{const A=document.getElementById("popup-child");A&&(A.style.cssText=`
      top: 50%;
    `)},[]);const st=async A=>{A.stopPropagation(),C(!0),h(!1);const H=Da(n,s.id+"-"+e);let j;if(a({msg:"Uploading image. Please stay on this page.",status:re.LOADING}),u==="fromLocal"){const q=e===_e.PFP?{width:320,height:320}:{width:820,height:312},L=await es(r,_,q);if(!L){console.log("Error creating blob"),a({msg:"Error creating blob",status:re.ERROR});return}const Se=await so(L);if(!Se){a({msg:"Error compressing blob",status:re.ERROR}),console.log("Error compressing blob");return}await Ea(H,Se);const Ae=await Ra(H);e===_e.PFP?j=await D({url:Ae,uid:s.id}):j=await f({url:Ae,uid:s.id})}const{error:le,data:N}=j;if(le&&console.log(le),!le){if(e===_e.PFP){const q=N==null?void 0:N.updateUserProfilePhoto.user,L=N==null?void 0:N.updateUserProfilePhoto.errors;if(L&&console.log(L),L||q==null)return;c(Xt(q))}else{const q=N==null?void 0:N.updateUserBg.user,L=N==null?void 0:N.updateUserBg.errors;if(L&&console.log(L),L||q==null)return;c(Xt(q))}a({msg:"Profile pic updated successfully",status:re.SUCCESS}),h(!0),window.location.reload()}},Pe=p.useCallback((A,H)=>{E(H)},[]);return p.useEffect(()=>{if(F.length>0){const H=F[0];var A=new FileReader;A.onloadend=function(){var j;o(((j=A.result)==null?void 0:j.toString())||""),m("fromLocal"),a({msg:"",status:re.INITIAL})},A.readAsDataURL(H)}},[F]),S(bo,{url:r,children:[S("div",{className:"heading",children:[l("span",{children:"Upload the photo"}),l("div",{role:"button",className:"close",color:"#484242",onClick:A=>{A.stopPropagation(),Q.unstable_batchedUpdates(()=>{c(ee(!1)),c(te("")),c(se(null))})},children:l(ot,{})})]}),l("div",{className:"save-close",children:l(ao,{className:"save",color:r?"#de1328":"#9c535b",onClick:st,children:P?w?"Saved":"Saving..":"Save"})}),l(xo,{className:"display",children:l("div",{className:"display-container",children:r?u==="fromLocal"?S(Yt,{children:[l("div",{className:"cropper-container",children:e===_e.PFP?l(Rn,{aspect:1,crop:g,zoom:v,image:r,onCropComplete:Pe,onCropChange:b,onZoomChange:x,ref:t}):l(Rn,{cropShape:"rect",aspect:3.5,crop:g,zoom:v,image:r,onCropComplete:Pe,onCropChange:b,onZoomChange:x,ref:t})}),l("div",{className:"controls",children:l("input",{type:"range",id:"image-slider",value:v,min:1,max:3,step:.1,"aria-labelledby":"Zoom",onChange:A=>{A.stopPropagation(),x(Number(A.target.value))}})})]}):l("img",{alt:"image-crop",src:r}):S(wo,{...Fe({className:"dropzone"}),isDragActive:ve,isDragReject:ce,children:[l("input",{...De()}),l(yo,{}),l(_o,{children:"Drag and drop an image file here, or click to select file"}),S(en,{children:["Maximum file size: ",R," bytes"]}),ce&&l(en,{children:"Only a single JPEG/JPG file is supported. Please check the file and try again."}),G.length>0&&l(Co,{children:Z})]})})}),l("div",{className:"error",children:i.status!==re.INITIAL?S("div",{className:"in",children:[l("div",{className:"loading",children:i.status===re.LOADING?l(On,{}):i.status===re.ERROR?l(Br,{size:20,fill:"#c11d1d"}):i.status===re.SUCCESS?l(Wr,{size:20,fill:"#00ff2f"}):""}),l("div",{className:"e-in-e",children:i.msg})]}):l(Yt,{})})]})},Dn=Pr(Or)(ts),hr=W.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50vw;
  height: 40vh;
  flex-direction: column;
  position: relative;
  padding: 10px 20px 100px 20px;
  .follow-head {
    margin: 15px 0;
    font-weight: bold;
    .close {
      position: absolute;
      right: 20px;
      top: 15px;
      svg {
        padding: 5px;
        :hover {
          padding: 5px;
          cursor: pointer;
          background-color: #6e6e6e8b;
          border-radius: 20px;
        }
        :active {
          background-color: #6e6e6eb7;
        }
      }
    }
  }
  .users-container {
    position: relative;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    overflow: auto;
  }
  @media (max-width: 500px) {
    width: 100vw;
    height: 99vh;
  }
`,ns=W.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 92%;
  max-height: 60px;
  padding: 10px;
  .user-block {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    .pic-container {
      width: 40px;
      height: 40px;
    }
    .user-name {
      font-weight: 600;
      line-height: 20px;
      margin: 0 10px;
    }
  }
  .follow {
  }
`,fr=({user:e})=>{const n=J(i=>i.user),t=e.id===n.id,r=Pn(),o=i=>{r(`/profile/${i}`)};return S(ns,{onClick:i=>{i.stopPropagation(),o(e.nickname)},children:[S("div",{className:"user-block",children:[l("div",{className:"pic-container",children:l(An,{src:e.photoUrl,tooltip:!0,user:e})}),l("div",{className:"user-name",children:e.nickname})]}),!t&&l(Gr,{userId:e.id,nickName:e.nickname})]})},rs=()=>{const e=J(D=>D.popup),n=e.popupData.data,t=e.popupData.type,r=e.popupData.isFollower;console.log({userId:n,type:t,isFollower:r});const o=ge(),[i,a]=p.useState([]),[s,c]=p.useState(0),[u,m]=p.useState(1),[g,b]=p.useState(1),[v]=Tr({variables:{uid:n,page:u,limit:10},pause:et()&&!r}),[x]=kr({variables:{uid:n,page:u,limit:10},pause:et()&&r});return p.useEffect(()=>{var h;if(!r)return;const{data:D,fetching:f,error:w}=v;if(console.log(D),w&&console.log(w),!f&&D){const P=(h=D.getFollowers)==null?void 0:h.followers;a(()=>P),m(C=>C+1),b(()=>{var C;return(C=D.getFollowers)==null?void 0:C.lastPage}),c(()=>{var C;return(C=D.getFollowers)==null?void 0:C.count})}},[v.fetching]),p.useEffect(()=>{var h;if(r)return;const{data:D,fetching:f,error:w}=x;if(console.log(D),w&&console.log(w),!f&&D){const P=(h=D.getFollowings)==null?void 0:h.followings;a(()=>P),m(C=>C+1),b(()=>{var C;return(C=D.getFollowings)==null?void 0:C.lastPage}),c(()=>{var C;return(C=D.getFollowings)==null?void 0:C.count})}},[x.fetching]),S(hr,{children:[S("div",{className:"follow-head",children:[S("span",{children:[s," ",t]}),l("div",{className:"close",onClick:D=>{D.stopPropagation(),o(Ir())},children:l(ot,{size:25})})]}),l("div",{className:"users-container",onScroll:D=>{D.stopPropagation();const f=D.target;f.scrollHeight-f.scrollTop-2<=f.clientHeight&&u!==g&&m(w=>w+1)},children:i&&i.map(D=>l(fr,{user:D}))})]})},os=()=>{const e=J(f=>f.popup),n=e.popupData.data,t=e.popupData.type,r=e.popupData.isReply,o=ge(),[i,a]=p.useState([]),[s,c]=p.useState(1),[u,m]=p.useState(1),[g,b]=p.useState(1),[v,x]=Nr({variables:{cid:n,limit:10,page:u},pause:et()&&r}),[_]=Mr({variables:{rid:n,limit:10,page:u},pause:et()&&!r});return p.useEffect(()=>{var P,C;if(r)return;const{data:f,fetching:w,error:h}=v;if(h&&console.log(h),!w&&f){const R=(P=f.getCommentLikes)==null?void 0:P.likesCount,F=(C=f.getCommentLikes)==null?void 0:C.likes,G=f.getCommentLikes.lastPage;b(G),a(F),c(R)}},[v.fetching]),p.useEffect(()=>{var P,C;if(!r)return;const{data:f,fetching:w,error:h}=_;if(h&&console.log(h),!w&&f){const R=(P=f.getReplyLikes)==null?void 0:P.likesCount,F=(C=f.getReplyLikes)==null?void 0:C.likes,G=f.getReplyLikes.lastPage;b(G),a(F),c(R)}},[_.fetching]),S(hr,{children:[S("div",{className:"follow-head",children:[S("span",{children:[s," ",t]}),l("div",{className:"close",onClick:f=>{f.stopPropagation(),Q.unstable_batchedUpdates(()=>{o(ee(!1)),o(te("")),o(se(null))})},children:l(ot,{size:25})})]}),l("div",{className:"users-container",onScroll:f=>{f.stopPropagation();const w=f.target;w.scrollHeight-w.scrollTop-2<=w.clientHeight&&u!==g&&m(h=>h+1)},children:i&&i.map(f=>l(fr,{user:f}))})]})},Ts=()=>{const e=p.useRef(null),n=J(a=>a.popup.isPopupOpened),t=ge(),r=J(a=>a.popup.selectedElement);function o(a){a.target.id==="popup-parent"&&Q.unstable_batchedUpdates(()=>{t(ee(!1)),t(te("")),t(se(null)),t(Xe(""))})}document.addEventListener("click",o);const i=p.useCallback(()=>{switch(r){case ie.IMAGE_POP_UP:return l(Dn,{type:_e.PFP});case ie.EDIT_PROFILE:return l(go,{});case ie.BG_POP_UP:return l(Dn,{type:_e.BG});case ie.ADD_COMMENT:return l(Jt,{type:ye.MOVIE});case ie.ADD_REPLY:return l(Jt,{type:ye.COMMENT});case ie.OPEN_FOLLOW:return l(rs,{});case ie.OPEN_LIKES:return l(os,{});case ie.DELETE_COMMENT:return l(Qt,{type:pe.COMMENT});case ie.DELETE_REPLY:return l(Qt,{type:pe.REPLY});default:return l("div",{})}},[r]);return l(co,{classNames:"alert",in:n,nodeRef:e,timeout:500,unmountOnExit:!0,children:l(lo,{id:"popup-parent",ref:e,children:l(uo,{id:"popup-child",children:l(i,{})})})})};export{Ts as default};
