import{w as $,e as k,r as o,P as I,Q,a as e,j as s,C as _,i as f,t as L}from"./index.js";import{s as g}from"./styled-components.browser.esm.ts";import O from"./childHeader.ts";import{C as R}from"./commentButton.ts";import{C as q}from"./commentCard.ts";import z from"./emptyPage.ts";import{H as A}from"./Helmet.ts";import D from"./loading.ts";import{M as F}from"./movieCard.ts";import v from"./notFound.ts";import{W as G}from"./watchVideo.ts";import{i as U}from"./helpers.ts";import{u as W}from"./isAuthUser.ts";import"./commentThread.styles.ts";import"./index.esm.ts";import"./iconBase.ts";import"./hooks.ts";import"./cardTemplate.ts";import"./movieInfo.ts";import"./image.ts";import"./moovy-white.ts";import"./tooltip.ts";import"./CSSTransition.ts";import"./inheritsLoose.ts";import"./loading.styles.ts";import"./movieCard.styles.ts";const B=g.div`
  display: flex;
  flex-direction: column;
  margin: 0px 10px;
  width: 99%;
  height: 99%;
  overflow: auto;
  position: absolute;
  .movie-container {
    position: absolute;
    top: 9%;
    height: 86%;
    width: 100%;
    .no-data {
      display: flex;
      justify-content: center;
      align-items: flex-start;
      margin-top: 20px;
      width: 100%;
    }
    .thread-movie {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      height: auto;
      width: 100%;
      overflow: hidden;
    }
    .thread-comments {
      margin-top: 10px;
      position: relative;
      display: block;
      height: calc(100% - 100px);
      margin-left: auto;
      margin-right: auto;
      width: 90%;
      font-weight: 700;
      .show-more {
        font-size: 0.7em;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 15px 0;
        padding-bottom: 25px;
        z-index: 10;
        :hover {
          cursor: pointer;
          text-decoration: underline;
        }
      }
    }
  }
  @media (max-width: 900px) {
    .movie-container {
      .thread-movie {
        padding-bottom: 6px;
      }
      .thread-comments {
      }
    }
  }
  @media (max-width: 500px) {
    .movie-container {
      .thread-movie {
        padding-bottom: 6px;
      }
      .thread-comments {
      }
    }
  }
`,X=g.div`
  display: flex;
  align-items: center;
  .watch-video {
    margin-left: 40px;
  }
`,J=()=>{W();const{id:a}=k();o.useEffect(()=>{document.title="Movie - Moovy"},[]);const p=o.useRef(null),[x,h]=o.useState(!1),[i,C]=o.useState(),[m,y]=o.useState(1),[K,M]=o.useState(1),[w,N]=o.useState(!1),[Y,S]=o.useState(1),[P,b]=o.useState(0),[n,T]=o.useState([]),[{data:l,error:d,fetching:c}]=I({variables:{mid:a,page:m},pause:f()});o.useEffect(()=>{if(!a){h(!1);return}const t=U(a);h(t)},[a]);const[u,Z]=Q({variables:{mid:a},pause:f()});o.useMemo(()=>{const{data:t,error:r,fetching:H}=u;if(r&&console.log(r),!H&&t){const V=t.getMovie;C(()=>V)}},[u]),o.useMemo(()=>{if(d&&console.log(d),!c&&l){const t=l.getCommentsOfTheMovie,r=t.lastPage;S(()=>r),N(()=>t.hasMoreComments),T(()=>t.comments)}},[l,d,c]);const E=t=>{t.stopPropagation();const r=p.current.scrollTop;b(r)};let j=P>40?`${i==null?void 0:i.name}`:"Movie";return c?e(D,{}):i?s("div",{children:[s(A,{children:[e("title",{children:`${i.name}: Comments`}),e("meta",{name:"description",content:`${i.name}: Comments`}),e("link",{rel:"canonical",href:`${_}/movie/${i.id}`})]}),x?s(B,{onScroll:E,ref:p,children:[e(O,{className:"movie-header",children:s(X,{children:[e("span",{children:j}),e(G,{id:a,platform:"NETFLIX",type:"movie",className:"watch-video"})]})}),s("div",{className:"movie-container",children:[e("div",{className:"thread-movie",children:e(F,{movieId:i.id})}),n&&n.length!==0?s("div",{className:"thread-comments",children:[n==null?void 0:n.map(t=>e(q,{comment:t,isMain:!0},t.id)),w&&e("div",{className:"show-more",onClick:t=>{t.stopPropagation(),y(m+1),M(()=>m+1)},children:"Show more comments"})]}):e("div",{className:"no-data",children:e(z,{msg:"No Comments yet. Make your first comment"})})]}),e(R,{type:"movie",data:i})]}):e(v,{})]}):e(v,{})},be=$(L)(J);export{be as default};
