import{y as C,r as p,u as T,ap as U,aq as H,i as N,ar as I,j as n,a as t,R as z}from"./index.js";import{k as _,l as F,o as O,p as P,q as L}from"./index.esm.ts";import{U as l,s as y,C as R}from"./styled-components.browser.esm.ts";import{g as V}from"./helpers.ts";import{a as E}from"./hooks.ts";const X=l`
    0% {
        transform: scale(0.2);
      }
      40% {
        transform: scale(1.2);
      }
      100% {
        transform: scale(1);
      }
`,K=l`
 to {
    background-position-x: -200%;
  }
`;l`
   0% {
    -ms-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -ms-transform: rotate(180deg);
    -moz-transform: rotate(180deg);
    -webkit-transform: rotate(180deg);
    -o-transform: rotate(180deg);
    transform: rotate(180deg);
  }
`;l`
   0% {
    -ms-transform: rotateX(0deg);
    -moz-transform: rotateX(0deg);
    -webkit-transform: rotateX(0deg);
    -o-transform: rotateX(0deg);
    transform: rotateX(0deg);
  }
  20%{
    -ms-transform: rotateX(180deg);
    -moz-transform: rotateX(180deg);
    -webkit-transform: rotateX(180deg);
    -o-transform: rotateX(180deg);
    transform: rotateX(180deg);
  }
  60%{
     -ms-transform: rotateX(180deg);
    -moz-transform: rotateX(180deg);
    -webkit-transform: rotateX(180deg);
    -o-transform: rotateX(180deg);
    transform: rotateX(180deg);
  }
  70%{
    -ms-transform: rotateX(360deg);
    -moz-transform: rotateX(360deg);
    -webkit-transform: rotateX(360deg);
    -o-transform: rotateX(360deg);
    transform: rotateX(360deg);
  }
  100%{
    -ms-transform: rotateX(360deg);
    -moz-transform: rotateX(360deg);
    -webkit-transform: rotateX(360deg);
    -o-transform: rotateX(360deg);
    transform: rotateX(360deg);
  }
`;l`
    0% {
    -ms-transform: rotate(180deg);
    -moz-transform: rotate(180deg);
    -webkit-transform: rotate(180deg);
    -o-transform: rotate(180deg);
    transform: rotate(180deg);
  }
   100% {
    -ms-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
`;const q=()=>R`
  color: ${e=>e.theme.mention};
`,W=y.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 99%;
  min-height: 120px;
  justify-content: space-evenly;
  align-items: ${e=>e.isReply?"flex-end":"center"};
  background-color: transparent;
  overflow: hidden;
  cursor: pointer;
  font-size: 15px;
  border-top: 0.3px solid #8f8f8f81;
  :nth-last-child(3) {
    border-bottom: 0.3px solid #8f8f8f81;
  }
  :first-child {
    margin-top: 10px;
  }
  .bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
    filter: blur(1px);
    z-index: -1;
    filter: blur(2px) brightness(0.8);
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      animation: fadeIn 0.6s linear forwards, scaleUp 10s linear forwards;
    }
    @keyframes fadeIn {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
    @keyframes scaleUp {
      0% {
        transform: scale(1);
      }
      100% {
        transform: scale(1.2);
      }
    }
  }
  .content {
    display: flex;
    width: 95%;
    align-items: flex-start;
    font-size: 14px;
    padding-top: 10px;
    .user-pic {
      max-width: 50px;
      height: 100%;
      display: flex;
      margin-top: 5px;
      .pic-container {
        width: 40px;
        height: 40px;
        display: flex;
        flex-direction: column;
      }
    }
    .message {
      display: block;
      padding-left: 15px;
      width: calc(100% - 50px);
      flex-direction: column;
      justify-content: center;
      padding-bottom: 10px;
      .show-more {
        font-weight: 600;
        font-size: 12px;
        color: ${e=>e.theme.mention};
        text-decoration: underline;
      }
      .username {
        display: flex;
        flex-direction: column;
        .container {
          display: flex;
          align-items: center;
          .user {
            font-weight: 800;
          }
          .time {
            display: flex;
            justify-content: center;
            align-items: flex-end;
            height: 80%;
            font-weight: 600;
            font-size: 0.7em;
            margin-left: 5px;
            opacity: 0.6;
          }
        }
        .isReply {
          font-weight: 400;
          font-size: 0.7em;
          .ru {
            color: ${e=>e.theme.mention};
            font-weight: 600;
            :hover {
              text-decoration: underline;
            }
          }
        }
        .movie {
          display: flex;
          font-size: 0.5rem;
          font-weight: 600;
          margin: 5px 0;
          .name {
            position: relative;
            width: fit-content;
            block-size: fit-content;
            padding: 5px 8px;
            border-radius: 10px;
            color: #ffffff;
            overflow: hidden;
            :hover {
              text-decoration: underline;
              text-decoration-color: white;
              text-decoration-thickness: 1px;
              cursor: pointer;
            }
          }
          .title {
            background: linear-gradient(90deg, #2c4bc9 50%, #445ec4 0)
              var(--_p, 100%) / 200% no-repeat;
            color: white;
            margin-right: 6px;
            transition: 1s;
            :hover {
              --_p: 0%;
              text-decoration: underline;
              text-decoration-color: black;
              text-decoration-thickness: 1px;
              cursor: pointer;
            }
          }
          .episode {
            background: linear-gradient(90deg, #a42525 50%, #af540f 0)
              var(--_p, 100%) / 200% no-repeat;
            color: white;
            transition: 1s;
            :hover {
              --_p: 0%;
              text-decoration: underline;
              text-decoration-color: black;
              text-decoration-thickness: 1px;
              cursor: pointer;
            }
          }
        }
      }
      .msg {
        font-weight: 600;
        font-weight: normal;
        overflow: hidden;
        margin: 10px 0;
        max-height: ${e=>e.showMore?e.cardHeight:e.isHover?"200px":"100px"};
        transition: max-height 0.5s;
        white-space: pre-line;
        .message-box {
        }
        .time,
        .user {
          ${q()};
          :hover {
            cursor: pointer;
            text-decoration: underline;
            text-underline-offset: 2px;
          }
        }
      }
    }
  }

  .options {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 100%;
    padding-bottom: 10px;
    font-weight: 600;
    .delete {
      color: #e80d2d;
    }
    .replies {
      .icon {
        :hover {
          svg {
          }
        }
      }
    }
    .likes {
      .icon {
        svg {
          animation: ${X} 0.3s linear forwards;
          :hover {
          }
        }
      }
    }
    .c {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 5px 0;
      .icon {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 18px 0 0 18px;
        box-shadow: 0 0 2px;
        cursor: pointer;
        padding: 2px 10px 2px 10px;
        :hover {
          background-color: ${e=>e.theme.themeType==="light"?" #c4c4c4":" #343434"};
        }
        :active {
          background-color: ${e=>e.theme.themeType==="light"?" #aeaeae":" #535353"};
        }
      }
      .count {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 0.75em;
        font-weight: 600;
        padding: 5px 10px;
        border-radius: 0 18px 18px 0;
        box-shadow: 0 0 2px;
        cursor: pointer;
        :hover {
          background-color: ${e=>e.theme.themeType==="light"?" #c4c4c4":" #343434"};
        }
        :active {
          background-color: ${e=>e.theme.themeType==="light"?" #aeaeae":" #535353"};
        }
      }
    }
  }
`,A=y.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow: hidden;
  color: white;
  .title {
    font-size: 1.1rem;
    font-weight: 700;
    span {
      display: inline-block;
      :hover {
        cursor: pointer;
        text-decoration: underline;
      }
    }
  }
  .parent {
    font-size: 0.6rem;
    font-weight: 600;
    margin: 4px 0;
    span {
      display: inline-block;
      :hover {
        cursor: pointer;
        text-decoration: underline;
      }
    }
  }
  .group {
    display: flex;
    flex-wrap: wrap;
    .year,
    .runtime {
      padding: 5px 10px;
      border-radius: 3px;
      border: 1px solid ${e=>e.theme.border};
      margin: 2px;
    }
  }
  .synopsis {
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    .a {
      font-size: 1rem;
      font-weight: 600;
    }
    .b {
      margin-top: 5px;
      font-size: 0.8rem;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: initial;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
  }
  .stats-container {
    display: flex;
    width: 100%;
    justify-content: space-between;
    .stats {
      display: flex;
      margin: 5px 0;

      .history {
        .icon {
          margin-right: 5px;
        }
        .count {
          font-size: 10px;
        }
      }
      .likes,
      .comments,
      .views {
        display: flex;
        margin: 3px 5px;
        justify-content: center;
        align-items: center;
        .count {
          font-weight: 600;
          margin-right: 2px;
        }
        .icon {
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
      .likes {
        .icon {
          svg {
            animation: ${X} 0.3s linear forwards;
            :hover {
            }
          }
        }
      }
    }
  }
`,Z=y.span`
  filter: blur(2px);
  background-color: red;
  color: white;
  transition: filter 0.2s linear;
  margin: 0 5px;
  border-radius: 5px;
  padding: 1px 4px;
  cursor: pointer;
  :hover {
    filter: none;
  }
`,D=({movie:e,title:r})=>{var k;const f=C(),[m,g]=p.useState(!1),h=T(),[,v]=U(),x=E(a=>a.user),[s,$]=p.useState(null),[w]=H({variables:{uid:x.id,mid:e==null?void 0:e.id},pause:!!(N()||r)});p.useEffect(()=>{const{data:a,error:i,fetching:d}=w;if(!d&&a){const o=a.getVisited;if(o!==null){const c=o.history,u=JSON.parse(c.slice(-1)[0]);$(()=>u)}}},[w]);const[b]=I({variables:{uid:x.id,mid:e==null?void 0:e.id},pause:N()}),M=a=>{a.stopPropagation(),e&&f.pathname!==`/show/${e.titleId}`&&h(`/show/${e.titleId}`)},S=a=>{a.stopPropagation(),r?f.pathname!==`/movie/${r.id}`&&h(`/movie/${r.id}`):f.pathname!==`/movie/${e==null?void 0:e.id}`&&h(`/movie/${e==null?void 0:e.id}`)},j=a=>{a.stopPropagation(),g(!m),v({uid:x.id,mid:e==null?void 0:e.id,options:{like:!m}}).then(i=>{const{data:d,error:o}=i;if(o&&console.log(o),d){const u=d.updateUserMovieStats.like;g(u)}})};return p.useEffect(()=>{const{data:a,error:i,fetching:d}=b;if(i&&console.log(i),!d&&a){const o=a==null?void 0:a.getOnlyUserMovieStats,c=o==null?void 0:o.like;c&&g(()=>c)}},[b]),n(A,{children:[t("div",{className:"title",children:t("span",{onClick:S,children:e?e.name:r==null?void 0:r.title})}),e&&e.parentTitleName&&t("div",{className:"parent",children:t("span",{onClick:M,children:e==null?void 0:e.parentTitleName})}),t("div",{className:"group",children:e?n(z.Fragment,{children:[e.season&&t("div",{className:"year",children:`${e.season}`}),e.year&&n("div",{className:"year",children:[" Year ",e.year]}),t("div",{className:"year",children:e.runtime&&`${Math.round(e.runtime/60)} min`})]}):n(z.Fragment,{children:[t("div",{className:"year",children:r&&r.type}),r&&((k=r.advisories)==null?void 0:k.map((a,i)=>t("div",{className:"year",children:a},i))),(r==null?void 0:r.rating)&&t("div",{className:"year",children:r==null?void 0:r.rating})]})}),n("div",{className:"synopsis",children:[t("div",{className:"a",children:"Synopsis"}),t("div",{className:"b",children:e?e.synopsis:r==null?void 0:r.synopsis})]}),e&&n("div",{className:"stats-container",children:[n("div",{className:"stats",children:[n("div",{className:"likes",onClick:j,children:[t("div",{className:"count",children:e==null?void 0:e.likesCount}),t("div",{className:"icon",children:m?t(_,{size:20,fill:"#ff005d"}):t(F,{size:20})})]}),n("div",{className:"comments",children:[t("div",{className:"count",children:e==null?void 0:e.commentCount}),t("div",{className:"icon",children:t(O,{size:20,fill:"violet"})})]}),n("div",{className:"views",children:[t("div",{className:"count",children:e==null?void 0:e.viewsCount}),t("div",{className:"icon",children:t(P,{size:20,fill:"#00dfff"})})]})]}),s&&(s==null?void 0:s.visitTime)&&t("div",{className:"stats ",children:n("div",{className:"likes history",children:[t("div",{className:"icon",children:t(L,{size:20})}),t("div",{className:"count",children:V((s==null?void 0:s.visitTime)+"")})]})})]})]})};export{W as C,D as M,Z as S,K as s};
