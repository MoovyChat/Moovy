import{s as N,a1 as s,r as p,a as v,a2 as y,k as t,j as e,a3 as a,a4 as x,R as g,a5 as w,a0 as u,K as C,N as b,O as M}from"./index-c87fafe8.js";import{P}from"./profilePic-3b95e47d.js";import{u as z}from"./isAuthUser-2dd943b7.js";import"./helpers-844ce213.js";const S=N.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  border-right: 0.3px solid #8f8f8f81;
  .parent-profile {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    gap: 25px;
    width: 100%;
    justify-content: center;
    .profile {
      width: 50px;
      height: 50px;
      aspect-ratio: 1;
      position: relative;
      margin: 10% 0;
    }
    .profile-text {
      display: flex;
      flex-direction: column;
      gap: 5px;
      .welcome-text {
        font-size: 13px;
      }
      .user-text {
        font-size: 15px;
        font-weight: 600;
      }
    }
  }
  .options {
    width: 100%;
    height: 60%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    .option {
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 18px;
      width: 50%;
      padding: 10px;
      color: inherit;
      text-decoration: none;
      font-size: 14px;
      :hover {
        background-color: ${l=>l.theme.hoverColor};
        cursor: pointer;
      }
      .icon {
        display: flex;
        justify-content: center;
        align-items: center;
        flex: 1 0 30%;
      }
      .text {
        flex: 1 0 80%;
        font-weight: 600;
      }
    }
    .active {
      transition: all 1s;
      background-color: ${l=>l.theme.hoverColor};
      .icon {
        svg {
          height: 27px;
          width: 27px;
        }
      }
      .icon.feed {
        svg {
          fill: red;
        }
      }
      .icon.catalog {
        svg {
          fill: #ff7b00;
        }
      }
      .icon.p {
        svg {
          fill: #3db847;
        }
      }
      .icon.favorites {
        svg {
          fill: #ff0000;
        }
      }
      .icon.comments {
        svg {
          fill: #6a30ac;
        }
      }
      .icon.replies {
        svg {
          fill: #478887;
        }
      }
      .icon.notifications {
        svg {
          fill: #426bda;
        }
      }
      .text {
      }
    }
  }

  @media (max-height: 700px) {
    .parent-profile {
      .profile {
        width: 70px;
        height: 70px;
        margin: 20% 0;
      }
    }
  }

  @media (max-height: 550px) {
    .parent-profile {
      display: none;
      .profile {
        display: none;
      }
    }

    .options {
      display: flex;
      justify-content: flex-start;
      margin-top: 20px;
      height: 100%;
      overflow: auto;
      .option {
        .icon {
          display: flex;
          justify-content: center;
          align-items: center;
          flex: 1 0 30%;
          svg {
            height: 20px;
            width: 20px;
          }
        }
        .text {
          flex: 1 0 80%;
          font-size: 0.7rem;
          font-weight: 600;
        }
      }
    }
  }
`,j=N.div`
  padding: 20px;
  flex-wrap: wrap;
  width: 80%;
  font-size: 10px;
  line-height: 15px;
  color: #71767b;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  div {
    cursor: pointer;
    :hover {
      text-decoration: underline;
    }
  }
`,F=s("MdDynamicFeed"),R=s("MdFavorite"),A=s("MdModeComment"),D=s("MdNightlight"),E=s("MdNotificationsActive"),L=s("MdOutlineReply"),O=s("MdOutlineWbSunny"),_=s("MdPerson"),$=s("MdStorage"),H=({className:l})=>{z();const d=p.useRef(null),n=v(i=>i.user),m=v(i=>i.settings.theme),r=y(),k=i=>{i.stopPropagation();const h=m!==x.DARK;r(w(h))},o=25;p.useEffect(()=>{},[n.photoUrl]),p.useEffect(()=>{function i(h){var f;d&&!((f=d.current)!=null&&f.contains(h.target))&&r(u(!1))}return document.addEventListener("click",i),()=>{document.removeEventListener("click",i)}},[d]);const c=i=>{i.stopPropagation(),C.unstable_batchedUpdates(()=>{r(b(!1)),r(M("")),r(u(!1))})};return t(S,{className:l,ref:d,children:[t("div",{className:"parent-profile",children:[e("div",{className:"profile",children:e(P,{src:n==null?void 0:n.photoUrl,user:n,tooltip:!0})}),t("div",{className:"profile-text",children:[e("div",{className:"welcome-text",children:"Welcome back"}),e("div",{className:"user-text",children:n.nickname})]})]}),e("div",{className:"options",children:t(p.Suspense,{children:[t(a,{to:"/",className:"option",end:!0,onClick:c,children:[e("div",{className:"icon feed",children:e(F,{size:o})}),e("div",{className:"text",children:"Feed"})]}),t(a,{to:"/catalog",className:"option",onClick:c,children:[e("div",{className:"icon catalog",children:e($,{size:o})}),e("div",{className:"text",children:"Catalog"})]}),t(a,{to:`/profile/${n.nickname}`,className:"option",onClick:c,children:[e("div",{className:"icon p",children:e(_,{size:o})}),e("div",{className:"text",children:"Profile"})]}),t(a,{to:`activity/${n.nickname}/favorites`,className:"option",onClick:c,children:[e("div",{className:"icon favorites",children:e(R,{size:o})}),e("div",{className:"text",children:"Favorites"})]}),t(a,{to:`/comments/${n.nickname}`,className:"option",onClick:c,children:[e("div",{className:"icon comments",children:e(A,{size:o})}),e("div",{className:"text",children:"Comments"})]}),t(a,{to:`/replies/${n.nickname}`,className:"option",onClick:c,children:[e("div",{className:"icon replies",children:e(L,{size:o})}),e("div",{className:"text",children:"Replies"})]}),t(a,{to:"/notifications",className:"option",onClick:c,children:[e("div",{className:"icon notifications",children:e(E,{size:o})}),e("div",{className:"text",children:"Notifications"})]}),e("div",{className:"option",onClick:k,children:m===x.DARK?t(g.Fragment,{children:[e("div",{className:"icon",children:e(O,{size:o})}),e("div",{className:"text",children:"Light"})]}):t(g.Fragment,{children:[e("div",{className:"icon",children:e(D,{size:o})}),e("div",{className:"text",children:"Dark"})]})})]})}),t(j,{children:[e("div",{onClick:i=>{i.stopPropagation(),window.open("/terms-and-conditions","_blank")},children:"Terms of Service"}),e("div",{onClick:i=>{i.stopPropagation(),window.open("/privacy","_blank")},children:"Privacy Policy"}),e("div",{onClick:i=>{i.stopPropagation(),window.open("/cookie-policy","_blank")},children:"Cookie Policy"}),e("div",{onClick:i=>{i.stopPropagation(),window.open("/about-us","_blank")},children:"About us"}),e("div",{onClick:i=>{i.stopPropagation(),window.open("/contact","_blank")},children:"Contact us"}),e("div",{children:"© 2023 MoovyChat."})]})]})};export{H as default};
