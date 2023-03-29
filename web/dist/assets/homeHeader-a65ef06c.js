import{s as p,n as M,u as T,r as o,_ as A,V as D,k as s,j as t,W as L,L as I,R as u,I as g,i as V,Z as W,a as F,A as U,X as Q,Y as Z,$ as G,a0 as X}from"./index-c87fafe8.js";import{P as Y,F as _,D as q}from"./profilePic-3b95e47d.js";import{F as J}from"./focusWindow-10cbe72e.js";import{u as K}from"./isAuthUser-2dd943b7.js";import"./helpers-844ce213.js";const ee=p.div`
  display: flex;
  width: 100vw;
  justify-content: space-between;
  border-bottom: 1px solid #8f8f8f81;
  .logo,
  .user {
    position: relative;
    display: flex;
    height: 100%;
    margin: 0px 50px;
    justify-content: space-evenly;
    align-items: center;

    .logo-image {
      width: 100%;
      display: flex;
      justify-content: space-evenly;
      .image {
        width: 40px;
        height: 40px;
        object-fit: contain;
      }
      .logo-text {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
    .logo-icon {
      width: 100%;
      display: flex;
      justify-content: space-evenly;
      .icon {
        display: none;
      }
    }
  }
  .logo {
  }
  .user {
    justify-content: space-evenly;
    cursor: pointer;
    :hover {
      border-radius: 50%;
      box-shadow: 0 0 3px;
    }
    .logo-image {
      display: flex;
      align-items: center;
      overflow: hidden;
      border-radius: 50%;
      img {
        border-radius: 50%;
      }
    }
  }
  .search {
    width: 40%;
    align-self: center;
  }

  @media (max-width: 800px) {
    .user {
      margin: 0px 15px;
    }
    .search {
      width: 100%;
    }
    .logo {
      margin: 0px 15px;
      .logo-image {
        display: none;
      }
      .logo-icon {
        .icon {
          display: flex;
          padding: 5px;
          :hover {
            background-color: #6e6e6e50;
            cursor: pointer;
            border-radius: 50%;
          }
          :active {
            background-color: #6e6e6e7d;
          }
        }
      }
    }
  }
`,te="/assets/moovy-black-1c122438.svg",se=p.div`
  width: 100%;
  overflow: hidden;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: auto;
  backdrop-filter: contrast(0.8);
  .icon {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 50px;
  }
  form {
    width: calc(100% - 50px);
    input {
      background: transparent;
      border: none;
      font-size: 1rem;
      padding: 0.7rem 1rem;
      border-radius: 0.25rem;
      outline: none;
      width: calc(100% - 50px);
      color: ${h=>h.theme.text};
    }
  }
`,ie=p.div`
  position: absolute;
  width: 50%;
  height: 70vh;
  overflow: auto;
  top: 8%;
  left: 50%;
  transform: translate(-50%, 0%);
  z-index: 99;
  border-radius: 9px;
  box-shadow: 0px 0px 5px, 0px 0px 1px 0px;
  backdrop-filter: blur(10px) brightness(0.6);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  .heading {
    font-size: 1.2em;
    font-weight: bold;
    margin-left: 20px;
    margin-top: 20px;
  }
  .content {
    margin-left: 20px;
    margin-top: 20px;
    width: 95%;
    .content-container {
      width: 98%;
      .people,
      .movies,
      .shows {
        margin-top: 15px;
        margin-bottom: 10px;
        font-size: 1em;
        font-weight: 600;
      }
      .users-content {
        display: flex;
        gap: 1em;
      }
      .movies-content {
        display: flex;
        flex-direction: column;
        width: 100%;
      }
    }
    .more {
      margin: 15px 0;
      font-weight: 600;
      :hover {
        cursor: pointer;
        text-decoration: underline;
      }
    }
  }

  @media (max-width: 800px) {
    width: 95%;
    border-radius: 5px;
    box-shadow: 0px 0px 1px 0px, 0px 0px 5px inset;
    .content {
      margin-left: 20px;
      margin-top: 20px;
      width: 93%;
    }
  }
`,ae=p.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 120px;
  gap: 5px;
  .p {
    width: 60px;
    height: 60px;
  }
  .n {
    width: 100%;
    display: block;
    overflow: hidden;
    font-size: 0.9em;
    word-wrap: break-word;
    word-break: break-all;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    text-align: center;
  }
  :hover {
    cursor: pointer;
  }
`,S=p.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-weight: 500;
  .thumbs {
    width: 50px;
    height: 70px;
    object-fit: contain;
    margin: 10px;
  }
  :hover {
    cursor: pointer;
    .t {
      text-decoration: underline;
    }
  }
`;p.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-weight: 500;
  width: 95%;
  height: 70px;
  margin: 10px 0;
  position: relative;
  text-align: center;
  justify-content: center;
  :hover {
    cursor: pointer;
    .mc {
      backdrop-filter: blur(3px) brightness(0.8);
    }
  }
  .mc {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-weight: 600;
    backdrop-filter: blur(3px) brightness(0.5);
    gap: 10px;
    padding-left: 10px;
    .year,
    .runtime {
      border: 1px solid red;
      padding: 10px;
      border-radius: 10px;
    }
    .year {
    }
    .runtime {
    }
  }
`;const ne=()=>{const h=M(),r=T(),m=o.useRef(null),[n,f]=o.useState(""),[x,c]=o.useState(""),[R,l]=o.useState(!1),[v,H]=o.useState([]),[b,$]=o.useState([]),[w,E]=o.useState([]),[y,z]=o.useState([]),O=e=>{e.stopPropagation(),f(()=>e.target.value)};o.useEffect(()=>{const e=A.debounce(i=>{c(i)},500);return e(n),()=>{e.cancel()}},[n]);const[N]=D({variables:{search:x},pause:V()});o.useEffect(()=>{const{data:e,error:i,fetching:d}=N;if(i&&console.log(i),!d&&e){const a=e.getSearchResults,j=a==null?void 0:a.users,P=a==null?void 0:a.movies,B=a==null?void 0:a.titles,C=a==null?void 0:a.episodes;j&&H(()=>j),P&&$(()=>P),B&&z(()=>B),C&&E(()=>C)}},[N,n]);const k=e=>{var d;const i=e.target;(d=m.current)!=null&&d.contains(i)||l(()=>!1),document.removeEventListener("mousedown",k)};return document.addEventListener("mousedown",k),s("div",{ref:m,children:[s(se,{children:[t("div",{className:"icon blur-escape",children:t(L,{size:25})}),t("form",{onSubmit:e=>{e.stopPropagation(),e.preventDefault();let i=h.pathname,d=`/search/${n}/episodes`,a=i.split("/");a[1]==="search"&&(d=`/${a[1]}/${n}/${a[3]}`),r(d),l(()=>!1)},children:t("input",{type:"text",id:"search blur-escape",name:"search",value:n,onFocus:e=>{e.stopPropagation(),l(()=>!0)},onBlur:e=>{e.stopPropagation()},onChange:O,placeholder:"Search people, movies, shows."})})]}),R&&n&&t(ie,{className:"search-results",children:N.fetching?t(I,{}):s(o.Fragment,{children:[t("div",{className:"heading",children:n?"Search Results":"Recent searches"}),s("div",{className:"content",children:[!v&&!b&&!y&&!w?t("div",{children:"No Recent searches were found"}):s("div",{className:"content-container",children:[v.length>0&&s(u.Fragment,{children:[t("div",{className:"people",children:"People"}),t("div",{className:"users-content",children:v.map(e=>s(ae,{onClick:i=>{r(`/profile/${e.nickname}`),l(()=>!1)},children:[t("div",{className:"p",onClick:i=>{r(`/profile/${e.nickname}`),l(()=>!1)},children:t(Y,{src:e.photoUrl,tooltip:!0,user:e})}),t("div",{className:"n",children:e.nickname})]}))})]}),y.length>0&&s(u.Fragment,{children:[t("div",{className:"shows",children:"Shows"}),t("div",{className:"titles-content",children:y.map(e=>s(S,{onClick:i=>{i.stopPropagation(),r(`/show/${e.id}`),l(()=>!1)},children:[t(g,{src:e.boxart,alt:e.title,className:"thumbs"}),t("div",{className:"t",children:e.title})]}))})]}),b.length>0&&s(u.Fragment,{children:[t("div",{className:"movies",children:"Movies"}),t("div",{className:"movies-content",children:b.map(e=>s(S,{onClick:i=>{i.stopPropagation(),r(`/movie/${e.id}`),l(()=>!1)},children:[t(g,{src:e.boxart,alt:e.title,className:"thumbs"}),s("div",{className:"t",children:[e.title," (",e.year,")"]})]}))})]}),w.length>0&&s(u.Fragment,{children:[t("div",{className:"movies",children:"Episodes"}),t("div",{className:"movies-content",children:w.map(e=>s(S,{onClick:i=>{i.stopPropagation(),r(`/movie/${e.id}`),l(()=>!1)},children:[e.thumbs&&t(g,{src:e.thumbs,alt:e.name,className:"thumbs"}),s("div",{className:"t",children:[e.parentTitleName," - ",e.season," -",e.name," (",e.year,")"]})]}))})]})]}),n&&s("div",{className:"more",onClick:e=>{e.stopPropagation(),r(`/search/${n}/episodes`),l(()=>!1)},children:['Search more for "',n,'"']})]})]})})]})},ue=({className:h})=>{K();const r=W(),m=F(c=>c.misc.isNavBarOpen),n=U(),f=c=>{c.stopPropagation(),n(X(!m))},x=F(c=>c.user);return s(ee,{className:h,children:[s("div",{className:"logo",children:[s("div",{className:"logo-image",children:[t("img",{className:"image",src:r.themeType==="light"?te:Q,alt:"QuietChat",id:"blur-escape",loading:"lazy"}),t("p",{style:{fontWeight:600,fontSize:"12px",alignSelf:"flex-end"},children:"(Beta)"})]}),t("div",{className:"logo-icon",onClick:f,children:m?t(Z,{className:"icon",size:20}):t(G,{className:"icon",size:20})})]}),t("div",{className:"search",children:t(ne,{})}),t(J,{message:_.HEADER_OPTIONS,dir:q.BOTTOM_LEFT,height:"200px",width:"220px",children:t("div",{className:"user",children:t("div",{className:"logo-image",children:t(g,{className:"image",src:x.photoUrl,alt:"user"})})})})]})};export{ue as default};
