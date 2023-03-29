import{r as p,j as t,a as e,N as a,aK as f,R as x,aW as N,aQ as v,b as y,c as w,d as C}from"./index.js";import{s as u}from"./styled-components.browser.esm.ts";import{y as b,z as P,v as z,k as S,A as j,B as M,C as E,D as A,E as D}from"./index.esm.ts";import{P as L}from"./tooltip.ts";import{a as g,b as R}from"./hooks.ts";import{u as F}from"./isAuthUser.ts";import"./iconBase.ts";import"./loading.ts";import"./Helmet.ts";import"./loading.styles.ts";import"./image.ts";import"./moovy-white.ts";import"./helpers.ts";const _=u.div`
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
`,$=u.div`
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
`,X=({className:l})=>{F();const r=p.useRef(null),o=g(i=>i.user),m=g(i=>i.settings.theme),c=R(),k=i=>{i.stopPropagation();const d=m!==f.DARK;c(N(d))},n=25;p.useEffect(()=>{},[o.photoUrl]),p.useEffect(()=>{function i(d){var h;r&&!((h=r.current)!=null&&h.contains(d.target))&&c(v(!1))}return document.addEventListener("click",i),()=>{document.removeEventListener("click",i)}},[r]);const s=i=>{i.stopPropagation(),y.unstable_batchedUpdates(()=>{c(w(!1)),c(C("")),c(v(!1))})};return t(_,{className:l,ref:r,children:[t("div",{className:"parent-profile",children:[e("div",{className:"profile",children:e(L,{src:o==null?void 0:o.photoUrl,user:o,tooltip:!0})}),t("div",{className:"profile-text",children:[e("div",{className:"welcome-text",children:"Welcome back"}),e("div",{className:"user-text",children:o.nickname})]})]}),t("div",{className:"options",children:[t(a,{to:"/",className:"option",end:!0,onClick:s,children:[e("div",{className:"icon feed",children:e(b,{size:n})}),e("div",{className:"text",children:"Feed"})]}),t(a,{to:"/catalog",className:"option",onClick:s,children:[e("div",{className:"icon catalog",children:e(P,{size:n})}),e("div",{className:"text",children:"Catalog"})]}),t(a,{to:`/profile/${o.nickname}`,className:"option",onClick:s,children:[e("div",{className:"icon p",children:e(z,{size:n})}),e("div",{className:"text",children:"Profile"})]}),t(a,{to:`activity/${o.nickname}/favorites`,className:"option",onClick:s,children:[e("div",{className:"icon favorites",children:e(S,{size:n})}),e("div",{className:"text",children:"Favorites"})]}),t(a,{to:`/comments/${o.nickname}`,className:"option",onClick:s,children:[e("div",{className:"icon comments",children:e(j,{size:n})}),e("div",{className:"text",children:"Comments"})]}),t(a,{to:`/replies/${o.nickname}`,className:"option",onClick:s,children:[e("div",{className:"icon replies",children:e(M,{size:n})}),e("div",{className:"text",children:"Replies"})]}),t(a,{to:"/notifications",className:"option",onClick:s,children:[e("div",{className:"icon notifications",children:e(E,{size:n})}),e("div",{className:"text",children:"Notifications"})]}),e("div",{className:"option",onClick:k,children:m===f.DARK?t(x.Fragment,{children:[e("div",{className:"icon",children:e(A,{size:n})}),e("div",{className:"text",children:"Light"})]}):t(x.Fragment,{children:[e("div",{className:"icon",children:e(D,{size:n})}),e("div",{className:"text",children:"Dark"})]})})]}),t($,{children:[e("div",{onClick:i=>{i.stopPropagation(),window.open("/terms-and-conditions","_blank")},children:"Terms of Service"}),e("div",{onClick:i=>{i.stopPropagation(),window.open("/privacy","_blank")},children:"Privacy Policy"}),e("div",{onClick:i=>{i.stopPropagation(),window.open("/cookie-policy","_blank")},children:"Cookie Policy"}),e("div",{onClick:i=>{i.stopPropagation(),window.open("/about-us","_blank")},children:"About us"}),e("div",{onClick:i=>{i.stopPropagation(),window.open("/contact","_blank")},children:"Contact us"}),e("div",{children:"© 2023 MoovyChat."})]})]})};export{X as default};
