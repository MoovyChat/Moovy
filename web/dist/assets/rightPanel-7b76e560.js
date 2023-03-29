import{s as x,a$ as l,a1 as b,b0 as w,r as c,u as N,a as k,b1 as y,k as s,j as e,L as m,b2 as T,b3 as S,b4 as z,b5 as C,b6 as I,b7 as F}from"./index-c87fafe8.js";import{c as g}from"./helpers-844ce213.js";import{u as E}from"./isAuthUser-2dd943b7.js";const P="/assets/bmc-b4084f74.webp",_="/assets/patreon-word-b9a7fced.webp",M=x.div`
  height: 100%;
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow-y: scroll;
  overflow-x: hidden;
  border-left: 0.3px solid #8f8f8f81;
  .trending {
    position: relative;
    width: 80%;
    margin: 20px;
    padding-top: 10px;
    padding-bottom: 15px;
    border-radius: 20px;
    background: ${t=>t.theme.trendingTiles};
    box-shadow: 0 0 4px ${t=>t.theme.toggleBorder};
    .content {
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .item {
        padding: 10px 20px;
        display: flex;
        flex-direction: column;
        .title {
          font-weight: 600;
          :hover {
            text-decoration: underline;
            cursor: pointer;
          }
        }
        .count {
          font-size: 0.7em;
          opacity: 0.8;
        }
      }
    }
    .heading {
      display: flex;
      height: 40px;
      width: 100%;
      justify-content: center;
      align-items: center;
      font-weight: 600;
      .sub {
        padding-left: 10px;
      }
    }
  }

  .socials {
    width: 80%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 10px;
    .socials-block {
      display: flex;
      flex-direction: column;
      gap: 10px;
      .item-heading {
        font-size: 12px;
        font-weight: 600;
      }
      .item-options {
        display: flex;
        justify-content: space-evenly;
        border-radius: 20px;
        padding: 10px;
        background: ${t=>t.theme.trendingTiles};
        box-shadow: 0 0 4px ${t=>t.theme.toggleBorder};
        align-items: center;
        flex-wrap: wrap;
        gap: 10px;
        .patreon,
        .bmc {
          display: flex;
          justify-content: space-evenly;
          align-items: center;
          .logo {
            width: 100px;
            cursor: pointer;
            img {
              width: 100%;
              object-fit: contain;
            }
          }
        }

        .social {
          cursor: pointer;
          :hover {
            transform: scale(1.3);
            transition: transform 0.5s;
          }
          :active {
            transform: scale(1);
            transition: transform 0.2s;
          }
        }
      }
    }
  }
`,j=l("FaDiscord"),L=l("FaTwitter"),A=l("FaTiktok"),D=l("FaInstagram"),h=b("MdLocalFireDepartment"),O=({className:t})=>{w();const[r,f]=c.useState(null),[d,u]=c.useState(null),p=N();k(i=>i.user.id),E();const[a]=y({variables:{limit:5}});return c.useEffect(()=>{const{data:i,error:n,fetching:v}=a;if(n&&console.log(n),!v&&i){const o=i.getTrendingTitles;f(()=>o==null?void 0:o.movies),u(()=>o==null?void 0:o.shows)}},[a]),s(M,{className:t,children:[s("div",{className:"trending titles",children:[s("div",{className:"heading",children:[e(h,{color:"#fc0404",size:20}),e("div",{className:"sub",children:"Trending Movies"})]}),e("div",{className:"content",children:a.fetching?e(m,{}):r&&r.map(i=>s("div",{className:"item",onClick:n=>{n.stopPropagation(),p(`/movie/${i.id}`)},children:[e("div",{className:"title",children:i.title}),s("div",{className:"count",children:[g(i.viewsCount)," views"]})]},i.title))})]}),s("div",{className:"trending titles",children:[s("div",{className:"heading",children:[e(h,{color:"#fc0404",size:20}),e("div",{className:"sub",children:"Trending Shows"})]}),e("div",{className:"content",children:a.fetching?e(m,{}):d&&d.map(i=>s("div",{className:"item",onClick:n=>{n.stopPropagation(),p(`/show/${i.id}`)},children:[e("div",{className:"title",children:i.title}),s("div",{className:"count",children:[g(i.viewsCount)," views"]})]},i.title))})]}),e("div",{className:"socials",children:s(c.Suspense,{children:[s("div",{className:"socials-block",children:[e("div",{className:"item-heading",children:"Socials"}),s("div",{className:"item-options",children:[e("div",{id:"text-focus",className:"discord social",onClick:i=>{i.stopPropagation(),window.open(T,"_blank")},children:e(j,{color:"cornflowerblue",size:25,style:{pointerEvents:"none"}})}),e("div",{className:"twitter social",id:"text-focus",onClick:i=>{i.stopPropagation(),window.open(S,"_blank")},children:e(L,{color:"deepskyblue",size:25,style:{pointerEvents:"none"}})}),e("div",{className:"tiktok social",id:"text-focus",onClick:i=>{i.stopPropagation(),window.open(z,"_blank")},children:e(A,{className:"icon",size:25,style:{pointerEvents:"none"}})}),e("div",{className:"instagram social",id:"text-focus",onClick:i=>{i.stopPropagation(),window.open(C,"_blank")},children:e(D,{color:"hotpink",size:25,style:{pointerEvents:"none"}})})]})]}),s("div",{className:"socials-block",children:[e("div",{className:"item-heading",children:"Donate & Support"}),s("div",{className:"item-options",children:[e("div",{className:"patreon",onClick:i=>{i.stopPropagation(),window.open(I,"_blank")},children:e("div",{className:"logo",id:"text-focus",children:e("img",{src:_,alt:"patreon",id:"text-focus"})})}),e("div",{className:"bmc",onClick:i=>{i.stopPropagation(),window.open(F,"_blank")},children:e("div",{className:"logo",id:"text-focus",children:e("img",{src:P,alt:"bmc",id:"text-focus"})})})]})]})]})})]})};export{O as default};
