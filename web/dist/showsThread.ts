import{k as T,r,ab as R,_ as I,e as N,ac as C,ad as S,j as g,a as e,C as j,R as b,i as M}from"./index.js";import{s as x}from"./styled-components.browser.esm.ts";import B from"./childHeader.ts";import{H}from"./Helmet.ts";import"./loading.styles.ts";import{M as E}from"./movieCard.ts";import{V as P}from"./index.ts";import{W as k}from"./watchVideo.ts";import{u as q}from"./isAuthUser.ts";import"./commentThread.styles.ts";import"./index.esm.ts";import"./iconBase.ts";import"./image.ts";import"./moovy-white.ts";import"./movieCard.styles.ts";import"./movieInfo.ts";import"./helpers.ts";import"./hooks.ts";const F=x.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: auto;
  .movies-container {
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .movie {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`,G=x.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  .watch-video {
    margin-left: 40px;
  }
  .title-image {
    height: 50px;
    width: 50px;
    img {
      height: 100%;
      width: 100%;
      object-fit: contain;
    }
  }
  .title-text {
    margin: 0px 10px;
  }
`,L=(s,p,i)=>{const n=T();return{fetchMore:r.useCallback(()=>{var c;const{pageInfo:a}=((c=i==null?void 0:i.data)==null?void 0:c.getMoviesByTitleId)||{};i!=null&&i.data&&n.query(R,{first:10,after:a==null?void 0:a.endCursor,tid:s}).toPromise().then(l=>{const{data:m,error:y}=l,d=m==null?void 0:m.getMoviesByTitleId,h=d==null?void 0:d.nodes;p(f=>I.chain(f).concat(h).uniqBy("id").value())})},[i])}},re=()=>{var d,h,f;q();const{id:s}=N(),p=r.useRef(null),i=r.useRef(null),n=r.useRef(null),[u,a]=r.useState([]),[c]=C({variables:{getTitleId:s},pause:M()}),[l]=S({variables:{tid:s,first:10,after:""},pause:M()});r.useMemo(()=>{const{data:t,error:o,fetching:v}=c;if(o)return console.error(o);!v&&t&&(n.current=t.getTitle)},[c.fetching]),r.useMemo(()=>{const{data:t,error:o,fetching:v}=l;if(o)return console.error(o);if(!v&&t){const w=t.getMoviesByTitleId.nodes;a(()=>w)}},[l]);const{fetchMore:m}=L(s,a,l),y=t=>{t.stopPropagation();const o=t.target;o.scrollHeight-o.scrollTop-2<=o.clientHeight&&m()};return l.fetching||c.fetching,g(F,{onScroll:y,children:[g(H,{children:[e("title",{children:"Moovy: Show"}),e("meta",{name:"description",content:"List of all episodes of a show."}),e("link",{rel:"canonical",href:`${j}/show/${s}}`})]}),e(B,{className:"movie-header",children:g(G,{children:[e("div",{className:"title-image",children:e("img",{src:(d=n.current)==null?void 0:d.boxart,alt:"title"})}),e("div",{className:"title-text",children:(h=n.current)==null?void 0:h.title}),e(k,{className:"watch-video",platform:"NETFLIX",id:(f=n.current)==null?void 0:f.id,type:"show"})]})}),e("div",{className:"movies-container",ref:i,children:u&&e(P,{ref:p,viewportRef:i,items:u,children:(t,o)=>{if(t)return e("div",{className:"movie",children:e(E,{movieId:t.id})},t.id);b.Fragment}})})]})};export{re as default};
