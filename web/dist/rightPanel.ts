import{ba as v,r,u as x,bb as w,j as o,a as i,aF as N,aG as b,aH as y,aI as k,bc as T,bd as C}from"./index.js";import{a as S,b as z,c as I,d as E}from"./splashScreen.ts";import p from"./loading.ts";import{N as m}from"./index.esm.ts";import{s as P}from"./styled-components.browser.esm.ts";import{c as g}from"./helpers.ts";import{a as _}from"./hooks.ts";import{u as j}from"./isAuthUser.ts";import"./moovy-white.ts";import"./login.ts";import"./Helmet.ts";import"./iconBase.ts";import"./image.ts";import"./loadable.esm.ts";import"./inheritsLoose.ts";import"./logoLoading.ts";import"./moovy-text-logo-white.ts";import"./splashScreen.styles.ts";import"./loading.styles.ts";const F="/bmc.webp",M="/patreon-word.webp",A=P.div`
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
`,oe=({className:t})=>{v();const[c,h]=r.useState(null),[l,f]=r.useState(null),d=x();_(e=>e.user.id),j();const[a]=w({variables:{limit:5}});return r.useEffect(()=>{const{data:e,error:s,fetching:u}=a;if(s&&console.log(s),!u&&e){const n=e.getTrendingTitles;h(()=>n==null?void 0:n.movies),f(()=>n==null?void 0:n.shows)}},[a]),o(A,{className:t,children:[o("div",{className:"trending titles",children:[o("div",{className:"heading",children:[i(m,{color:"#fc0404",size:20}),i("div",{className:"sub",children:"Trending Movies"})]}),i("div",{className:"content",children:a.fetching?i(p,{}):c&&c.map(e=>o("div",{className:"item",onClick:s=>{s.stopPropagation(),d(`/movie/${e.id}`)},children:[i("div",{className:"title",children:e.title}),o("div",{className:"count",children:[g(e.viewsCount)," views"]})]},e.title))})]}),o("div",{className:"trending titles",children:[o("div",{className:"heading",children:[i(m,{color:"#fc0404",size:20}),i("div",{className:"sub",children:"Trending Shows"})]}),i("div",{className:"content",children:a.fetching?i(p,{}):l&&l.map(e=>o("div",{className:"item",onClick:s=>{s.stopPropagation(),d(`/show/${e.id}`)},children:[i("div",{className:"title",children:e.title}),o("div",{className:"count",children:[g(e.viewsCount)," views"]})]},e.title))})]}),o("div",{className:"socials",children:[o("div",{className:"socials-block",children:[i("div",{className:"item-heading",children:"Socials"}),o("div",{className:"item-options",children:[i("div",{id:"text-focus",className:"discord social",onClick:e=>{e.stopPropagation(),window.open(N,"_blank")},children:i(S,{color:"cornflowerblue",size:25,style:{pointerEvents:"none"}})}),i("div",{className:"twitter social",id:"text-focus",onClick:e=>{e.stopPropagation(),window.open(b,"_blank")},children:i(z,{color:"deepskyblue",size:25,style:{pointerEvents:"none"}})}),i("div",{className:"tiktok social",id:"text-focus",onClick:e=>{e.stopPropagation(),window.open(y,"_blank")},children:i(I,{className:"icon",size:25,style:{pointerEvents:"none"}})}),i("div",{className:"instagram social",id:"text-focus",onClick:e=>{e.stopPropagation(),window.open(k,"_blank")},children:i(E,{color:"hotpink",size:25,style:{pointerEvents:"none"}})})]})]}),o("div",{className:"socials-block",children:[i("div",{className:"item-heading",children:"Donate & Support"}),o("div",{className:"item-options",children:[i("div",{className:"patreon",onClick:e=>{e.stopPropagation(),window.open(T,"_blank")},children:i("div",{className:"logo",id:"text-focus",children:i("img",{src:M,alt:"patreon",id:"text-focus"})})}),i("div",{className:"bmc",onClick:e=>{e.stopPropagation(),window.open(C,"_blank")},children:i("div",{className:"logo",id:"text-focus",children:i("img",{src:F,alt:"bmc",id:"text-focus"})})})]})]})]})]})};export{oe as default};
