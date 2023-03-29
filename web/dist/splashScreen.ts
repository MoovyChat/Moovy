var ns=Object.defineProperty;var ss=(e,t,n)=>t in e?ns(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var p=(e,t,n)=>(ss(e,typeof t!="symbol"?t+"":t,n),n);import{w as un,u as dn,J as is,I as rs,aC as os,aA as hn,r as x,L as we,j as I,a as l,aD as pn,t as mn,aE as as,b as fn,aF as ls,aG as cs,aH as us,aI as ds,C as wt,aJ as Ze,aK as gn,E as te,A as hs,i as ps,aL as et,s as ms,c as fs,d as gs}from"./index.js";import{W as ws,s as V,C as vs,F as wn}from"./styled-components.browser.esm.ts";import{a as J,u as vt}from"./hooks.ts";import{M as ys}from"./moovy-white.ts";import{g as bs}from"./login.ts";import{H as yt}from"./Helmet.ts";import{G as ue}from"./iconBase.ts";import{I as xs}from"./image.ts";import{l as ne}from"./loadable.esm.ts";import Ss from"./logoLoading.ts";const _s={body:"linear-gradient(180deg, #2c94ab 30%, #0e756b 70%);",text:"#363537",toggleBorder:"#b8b7b7",background:"#ffffff"},ks={body:"linear-gradient(180deg, #750e0e 10%,#0a0a0a 30%,#000000 55%, #0e756b 70%);",text:"#FAFAFA",toggleBorder:"#6B8096",background:"#000000"},As={body:"linear-gradient(86deg, rgb(174 233 255) 0%, rgb(255 255 255 / 68%) 100%);",text:"#363537",toggleBorder:"#b8b7b7",background:"linear-gradient(to right, #1f86e1, #c9f8fe, #78caf0)",movieHeader:"linear-gradient(to right, #e11f1f, #e3c9fe, #f07878)",trendingTiles:"#c9eaff",hoverColor:"#1f86e1",mention:"#1d7cf0",nav:"#0088ff",border:"#1f86e1",loadingCard:"#d0d0d0",premium:"linear-gradient(45deg, #58e6f3, #1da3f0) border-box",themeType:"light"},Ps={body:"linear-gradient(86deg, #0f1130 0%, black 100%);",text:"#FAFAFA",toggleBorder:"#6B8096",background:"linear-gradient(to right, #681515, #302b63, #3e2524)",movieHeader:"linear-gradient(to right, #681515, #302b63, #3e2524)",trendingTiles:"#0c0c0c",hoverColor:"#451374",nav:"rgb(131 0 255)",mention:"#00ff99",border:"#f00f0f",loadingCard:"#444",premium:"linear-gradient(45deg, #be3944, #681515) border-box",themeType:"dark"},vn=ws`
  body {
    background: ${({theme:e})=>e.body};
    color: ${({theme:e})=>e.text};
    transition: all 0.50s linear;
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }

  div a {
  color: #0e4fdb;
  text-decoration: underline;
  font-size: 14px;
}
  /* Style for visited links */
  a:visited {
    color: purple;
  }

  /* Style for hover state */
  a:hover {
    color: #00ffe5;
  }

  ::-webkit-scrollbar {
    width: 5px;
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 8px;
    -webkit-box-shadow: inset 0 0 6px ${e=>e.theme.hoverColor};
    box-shadow: inset 0 0 6px ${e=>e.theme.hoverColor};
    background-color: #555;
  }
`,Is=V.div`
  position: fixed;
  top: 0;
  z-index: 10;
  display: flex;
  width: 100%;
  min-height: 40px;
  max-height: 60px;
  justify-content: flex-end;
  font-family: 'Prompt', sans-serif;
  padding: 15px 0px;
  backdrop-filter: blur(10px);
  .logo-image {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 20px;
    .beta {
      font-weight: 600;
      font-size: 12px;
    }
  }
  .header-buttons {
    display: flex;
    position: relative;
    align-self: flex-end;
    float: right;
    margin-right: 20px;
    gap: 10;
    flex-wrap: wrap-reverse;
    justify-content: flex-end;
    .hb {
      :hover {
        box-shadow: 0 0 2px;
      }
    }
  }
  .header {
    height: 40px;
    aspect-ratio: 1;
    position: absolute;
    top: 10px;
    left: 10px;
  }
`,he=V.div`
  padding: 10px 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20px;
  font-weight: 500;
  border-radius: 10px;
  cursor: pointer;
`,Cs=()=>{const e=dn(),t=J(d=>d.user),n=vt(),[s,i]=is(),[,r]=rs(),[,o]=os(),[a,u]=hn({});x.useEffect(()=>{const{data:d,error:w,fetching:g}=a;w&&console.log(w),!g&&d&&n(we(d.me))},[a.fetching]);const h=async d=>{d.stopPropagation();const w=await bs();r({uid:w.id}).then(g=>{var _;const{data:y}=g,v=(_=y==null?void 0:y.login)==null?void 0:_.user;if(v)localStorage.setItem("user",JSON.stringify(v)),n(we(v));else{const{name:k,email:P,photoUrl:b,nickname:C,id:E}=w;i({options:{name:k,email:P,photoUrl:b,nickname:C,id:E}}).then(z=>{const{data:Q,error:M}=z;M&&console.log(M);const L=Q==null?void 0:Q.createUser;localStorage.setItem("user",JSON.stringify(L)),n(we(L)),r({uid:L==null?void 0:L.id}),e("/")}).catch(z=>{console.log("ERR: Unable to create user",z)})}e("/")})},f=async d=>{d.stopPropagation(),(await o({})).data&&n(we(as))},m=d=>{const w=document.getElementById(d);if(w){const v=w.getBoundingClientRect().top+window.pageYOffset-window.innerHeight/6;window.scrollTo({top:v,behavior:"smooth"})}};return I(Is,{children:[l("div",{className:"header",children:I("div",{className:"logo-image",children:[l("img",{className:"image",src:ys,alt:"QuietChat",id:"blur-escape",loading:"lazy"}),l("div",{className:"beta",children:"(beta)"})]})}),I("div",{className:"header-buttons",children:[l(he,{className:"install-button hb",onClick:d=>{d.stopPropagation(),m("screenshots")},children:"Screenshots"}),l(he,{className:"install-button hb",onClick:d=>{d.stopPropagation(),m("features")},children:"Features"}),t&&t.id?l(he,{className:"hb",id:"logout-btn",onClick:f,children:"Logout"}):l(he,{className:"hb",id:"login-btn",onClick:h,children:"Login"}),l(he,{className:"install-button hb",onClick:d=>{d.stopPropagation(),window.open(pn,"_blank")},children:"Install Extension"})]})]})},Ms=un(mn)(Cs);function Vs(e){return ue({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"}}]})(e)}function Es(e){return ue({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"}}]})(e)}function Ns(e){return ue({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"}}]})(e)}function zs(e){return ue({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"}}]})(e)}function No(e){return ue({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h274.9c-2.4-6.8-3.4-14-2.6-21.3l6.8-60.9 1.2-11.1 7.9-7.9 77.3-77.3c-24.5-27.7-60-45.5-99.9-45.5zm45.3 145.3l-6.8 61c-1.1 10.2 7.5 18.8 17.6 17.6l60.9-6.8 137.9-137.9-71.7-71.7-137.9 137.8zM633 268.9L595.1 231c-9.3-9.3-24.5-9.3-33.8 0l-37.8 37.8-4.1 4.1 71.8 71.7 41.8-41.8c9.3-9.4 9.3-24.5 0-33.9z"}}]})(e)}const Os=V.div`
  display: flex;
  width: 96vw;
  flex-direction: column;
  overflow: hidden;
  .home {
    position: relative;
    display: flex;
    height: 100vh;
    height: 100dvh;
    width: 100%;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    .pics {
      display: flex;
      position: relative;
      justify-content: center;
      align-items: center;
      width: 45%;
      height: 100%;
      .pic {
        position: absolute;
        height: 70%;
        .image {
          height: 500px;
          width: 300px;
          transform: skew(351deg, 10deg) translateX(10px) translateY(50px);
          border: 1px solid;
          content: '';
        }
      }
      .first {
        /* transform: skewY(10deg) skewX(10deg); */
        transform: rotate(349deg) translateY(-33px) translateX(-40px);
        transition: all 0.5s;
      }
      .second {
        transition: all 0.5s;
      }
      :hover {
        .first {
          transform: rotate(340deg) translateY(-50px) translateX(-100px);
        }
        .second {
          transform: rotate(5deg) translateX(40px);
        }
      }
    }
    .heading {
      display: flex;
      position: relative;
      justify-content: center;
      align-items: flex-start;
      width: 50%;
      height: 100%;
      flex-direction: column;
      .company {
        font-weight: 900;
        font-size: 0.8rem;
        font-style: italic;
        .supported-platforms {
          gap: 5px;
          display: flex;
        }
      }
      .text {
        padding: 5% 0%;
        padding-top: 0px;
        font-size: 3rem;
        font-weight: 600;
        text-transform: uppercase;
      }
      .platform-container {
        height: 30%;
        width: 100%;
        margin-top: 50px;
      }
      .sub,
      .sub2 {
      }
      .sub2 {
        padding: 20px 0;
      }
      .get-started {
        border: 1px solid;
        position: relative;
        padding: 10px;
        width: 150px;
        margin-top: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        cursor: pointer;
        font-weight: 600;
        .fill {
          position: absolute;
          left: 0;
          height: 100%;
          width: 0%;
          z-index: -1;
          background-color: ${e=>e.theme.background};
        }
        label {
          cursor: pointer;
        }
        :hover {
          .fill {
            animation: fillBox 1s linear forwards;
          }
        }
      }
    }
    .embed {
      color: transparent;
      font-size: 150px;
      letter-spacing: 60px;
      -webkit-text-stroke: 1px #6f4646;
      position: absolute;
      bottom: 10px;
      right: 50px;
    }
  }

  .supported {
    padding: 20px;
    .supported-text {
    }
  }

  @media (max-width: 900px) {
    .home {
      .pics {
        display: none;
      }
      .heading {
        width: 100%;
        margin-left: 20px;
      }
      .embed {
        right: 0;
        left: 30px;
      }
    }
  }
  @media (max-width: 800px) {
    .home {
      .embed {
        font-size: 100px;
        letter-spacing: 50px;
      }
    }
  }
  @media (max-width: 700px) {
    .home {
      .embed {
        letter-spacing: 20px;
      }
    }
  }
  @media (max-width: 500px) {
    .home {
      .embed {
        font-size: 80px;
        letter-spacing: 15px;
      }
    }
  }
  @media (max-width: 430px) {
    .home {
      .embed {
        font-size: 70px;
        letter-spacing: 15px;
      }
    }
  }
  @media (max-width: 400px) {
    .home {
      .embed {
        font-size: 50px;
        letter-spacing: 15px;
        right: 0;
        left: 30px;
      }
    }
  }

  @keyframes fillBox {
    0% {
      width: 0%;
    }
    100% {
      width: 100%;
    }
  }
`,Rs=V.div`
  position: fixed;
  right: 0;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .social-container {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    border-radius: 20px;
    padding: 10px;
    background: ${e=>e.theme.trendingTiles};
    box-shadow: 0 0 4px ${e=>e.theme.toggleBorder};
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;
    height: 40%;
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
`,Ot="/dark-chat-300x.webp",Ts="/dark-chat-600x.webp",Ls=V.div`
  display: flex;
  flex-direction: column;
  height: 300px;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  flex: 1 1 30%;
  .container {
    width: 250px;
    height: 100%;
    padding: 10px;
    box-shadow: 0 0 1px;
    .title {
      font-size: 16px;
      font-weight: 600;
    }
    .shc-img {
      width: 100%;
      height: 140px;
      margin: 10px 0;
      object-fit: contain;
    }
    .content {
      font-size: 13px;
      font-weight: 600;
      font-style: italic;
      opacity: 0.8;
    }
  }
`,re=({info:e})=>{const{title:t,content:n,src:s}=e;return l(Ls,{children:I("div",{className:"container",children:[l("div",{className:"title",children:t}),l("img",{src:s,className:"shc-img",alt:"image",srcSet:e.srcSet,sizes:"250px"}),l("div",{className:"content",children:n})]})})},Fs="/screenshot8.webp",$s="/screenshot8-1200x.webp",Us="/screenshot8-600x.webp";var bt=Ne(),S=e=>Ee(e,bt),xt=Ne();S.write=e=>Ee(e,xt);var Qe=Ne();S.onStart=e=>Ee(e,Qe);var St=Ne();S.onFrame=e=>Ee(e,St);var _t=Ne();S.onFinish=e=>Ee(e,_t);var ae=[];S.setTimeout=(e,t)=>{let n=S.now()+t,s=()=>{let r=ae.findIndex(o=>o.cancel==s);~r&&ae.splice(r,1),W-=~r?1:0},i={time:n,handler:e,cancel:s};return ae.splice(yn(n),0,i),W+=1,bn(),i};var yn=e=>~(~ae.findIndex(t=>t.time>e)||~ae.length);S.cancel=e=>{Qe.delete(e),St.delete(e),_t.delete(e),bt.delete(e),xt.delete(e)};S.sync=e=>{at=!0,S.batchedUpdates(e),at=!1};S.throttle=e=>{let t;function n(){try{e(...t)}finally{t=null}}function s(...i){t=i,S.onStart(n)}return s.handler=e,s.cancel=()=>{Qe.delete(n),t=null},s};var kt=typeof window<"u"?window.requestAnimationFrame:()=>{};S.use=e=>kt=e;S.now=typeof performance<"u"?()=>performance.now():Date.now;S.batchedUpdates=e=>e();S.catch=console.error;S.frameLoop="always";S.advance=()=>{S.frameLoop!=="demand"?console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"):Sn()};var K=-1,W=0,at=!1;function Ee(e,t){at?(t.delete(e),e(0)):(t.add(e),bn())}function bn(){K<0&&(K=0,S.frameLoop!=="demand"&&kt(xn))}function js(){K=-1}function xn(){~K&&(kt(xn),S.batchedUpdates(Sn))}function Sn(){let e=K;K=S.now();let t=yn(K);if(t&&(_n(ae.splice(0,t),n=>n.handler()),W-=t),!W){js();return}Qe.flush(),bt.flush(e?Math.min(64,K-e):16.667),St.flush(),xt.flush(),_t.flush()}function Ne(){let e=new Set,t=e;return{add(n){W+=t==e&&!e.has(n)?1:0,e.add(n)},delete(n){return W-=t==e&&e.has(n)?1:0,e.delete(n)},flush(n){t.size&&(e=new Set,W-=t.size,_n(t,s=>s(n)&&e.add(s)),W+=e.size,t=e)}}}function _n(e,t){e.forEach(n=>{try{t(n)}catch(s){S.catch(s)}})}var Hs=Object.defineProperty,Bs=(e,t)=>{for(var n in t)Hs(e,n,{get:t[n],enumerable:!0})},j={};Bs(j,{assign:()=>Qs,colors:()=>Y,createStringInterpolator:()=>Pt,skipAnimation:()=>An,to:()=>kn,willAdvance:()=>It});function lt(){}var qs=(e,t,n)=>Object.defineProperty(e,t,{value:n,writable:!0,configurable:!0}),c={arr:Array.isArray,obj:e=>!!e&&e.constructor.name==="Object",fun:e=>typeof e=="function",str:e=>typeof e=="string",num:e=>typeof e=="number",und:e=>e===void 0};function q(e,t){if(c.arr(e)){if(!c.arr(t)||e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}return e===t}var A=(e,t)=>e.forEach(t);function B(e,t,n){if(c.arr(e)){for(let s=0;s<e.length;s++)t.call(n,e[s],`${s}`);return}for(let s in e)e.hasOwnProperty(s)&&t.call(n,e[s],s)}var O=e=>c.und(e)?[]:c.arr(e)?e:[e];function ye(e,t){if(e.size){let n=Array.from(e);e.clear(),A(n,t)}}var ve=(e,...t)=>ye(e,n=>n(...t)),At=()=>typeof window>"u"||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent),Pt,kn,Y=null,An=!1,It=lt,Qs=e=>{e.to&&(kn=e.to),e.now&&(S.now=e.now),e.colors!==void 0&&(Y=e.colors),e.skipAnimation!=null&&(An=e.skipAnimation),e.createStringInterpolator&&(Pt=e.createStringInterpolator),e.requestAnimationFrame&&S.use(e.requestAnimationFrame),e.batchedUpdates&&(S.batchedUpdates=e.batchedUpdates),e.willAdvance&&(It=e.willAdvance),e.frameLoop&&(S.frameLoop=e.frameLoop)},be=new Set,T=[],tt=[],Ue=0,De={get idle(){return!be.size&&!T.length},start(e){Ue>e.priority?(be.add(e),S.onStart(Ds)):(Pn(e),S(ct))},advance:ct,sort(e){if(Ue)S.onFrame(()=>De.sort(e));else{let t=T.indexOf(e);~t&&(T.splice(t,1),In(e))}},clear(){T=[],be.clear()}};function Ds(){be.forEach(Pn),be.clear(),S(ct)}function Pn(e){T.includes(e)||In(e)}function In(e){T.splice(Ks(T,t=>t.priority>e.priority),0,e)}function ct(e){let t=tt;for(let n=0;n<T.length;n++){let s=T[n];Ue=s.priority,s.idle||(It(s),s.advance(e),s.idle||t.push(s))}return Ue=0,tt=T,tt.length=0,T=t,T.length>0}function Ks(e,t){let n=e.findIndex(t);return n<0?e.length:n}var Ws=(e,t,n)=>Math.min(Math.max(n,e),t),Ys={transparent:0,aliceblue:4042850303,antiquewhite:4209760255,aqua:16777215,aquamarine:2147472639,azure:4043309055,beige:4126530815,bisque:4293182719,black:255,blanchedalmond:4293643775,blue:65535,blueviolet:2318131967,brown:2771004159,burlywood:3736635391,burntsienna:3934150143,cadetblue:1604231423,chartreuse:2147418367,chocolate:3530104575,coral:4286533887,cornflowerblue:1687547391,cornsilk:4294499583,crimson:3692313855,cyan:16777215,darkblue:35839,darkcyan:9145343,darkgoldenrod:3095792639,darkgray:2846468607,darkgreen:6553855,darkgrey:2846468607,darkkhaki:3182914559,darkmagenta:2332068863,darkolivegreen:1433087999,darkorange:4287365375,darkorchid:2570243327,darkred:2332033279,darksalmon:3918953215,darkseagreen:2411499519,darkslateblue:1211993087,darkslategray:793726975,darkslategrey:793726975,darkturquoise:13554175,darkviolet:2483082239,deeppink:4279538687,deepskyblue:12582911,dimgray:1768516095,dimgrey:1768516095,dodgerblue:512819199,firebrick:2988581631,floralwhite:4294635775,forestgreen:579543807,fuchsia:4278255615,gainsboro:3705462015,ghostwhite:4177068031,gold:4292280575,goldenrod:3668254975,gray:2155905279,green:8388863,greenyellow:2919182335,grey:2155905279,honeydew:4043305215,hotpink:4285117695,indianred:3445382399,indigo:1258324735,ivory:4294963455,khaki:4041641215,lavender:3873897215,lavenderblush:4293981695,lawngreen:2096890111,lemonchiffon:4294626815,lightblue:2916673279,lightcoral:4034953471,lightcyan:3774873599,lightgoldenrodyellow:4210742015,lightgray:3553874943,lightgreen:2431553791,lightgrey:3553874943,lightpink:4290167295,lightsalmon:4288707327,lightseagreen:548580095,lightskyblue:2278488831,lightslategray:2005441023,lightslategrey:2005441023,lightsteelblue:2965692159,lightyellow:4294959359,lime:16711935,limegreen:852308735,linen:4210091775,magenta:4278255615,maroon:2147483903,mediumaquamarine:1724754687,mediumblue:52735,mediumorchid:3126187007,mediumpurple:2473647103,mediumseagreen:1018393087,mediumslateblue:2070474495,mediumspringgreen:16423679,mediumturquoise:1221709055,mediumvioletred:3340076543,midnightblue:421097727,mintcream:4127193855,mistyrose:4293190143,moccasin:4293178879,navajowhite:4292783615,navy:33023,oldlace:4260751103,olive:2155872511,olivedrab:1804477439,orange:4289003775,orangered:4282712319,orchid:3664828159,palegoldenrod:4008225535,palegreen:2566625535,paleturquoise:2951671551,palevioletred:3681588223,papayawhip:4293907967,peachpuff:4292524543,peru:3448061951,pink:4290825215,plum:3718307327,powderblue:2967529215,purple:2147516671,rebeccapurple:1714657791,red:4278190335,rosybrown:3163525119,royalblue:1097458175,saddlebrown:2336560127,salmon:4202722047,sandybrown:4104413439,seagreen:780883967,seashell:4294307583,sienna:2689740287,silver:3233857791,skyblue:2278484991,slateblue:1784335871,slategray:1887473919,slategrey:1887473919,snow:4294638335,springgreen:16744447,steelblue:1182971135,tan:3535047935,teal:8421631,thistle:3636451583,tomato:4284696575,turquoise:1088475391,violet:4001558271,wheat:4125012991,white:4294967295,whitesmoke:4126537215,yellow:4294902015,yellowgreen:2597139199},U="[-+]?\\d*\\.?\\d+",je=U+"%";function Ke(...e){return"\\(\\s*("+e.join(")\\s*,\\s*(")+")\\s*\\)"}var Gs=new RegExp("rgb"+Ke(U,U,U)),Js=new RegExp("rgba"+Ke(U,U,U,U)),Xs=new RegExp("hsl"+Ke(U,je,je)),Zs=new RegExp("hsla"+Ke(U,je,je,U)),ei=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,ti=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,ni=/^#([0-9a-fA-F]{6})$/,si=/^#([0-9a-fA-F]{8})$/;function ii(e){let t;return typeof e=="number"?e>>>0===e&&e>=0&&e<=4294967295?e:null:(t=ni.exec(e))?parseInt(t[1]+"ff",16)>>>0:Y&&Y[e]!==void 0?Y[e]:(t=Gs.exec(e))?(oe(t[1])<<24|oe(t[2])<<16|oe(t[3])<<8|255)>>>0:(t=Js.exec(e))?(oe(t[1])<<24|oe(t[2])<<16|oe(t[3])<<8|Lt(t[4]))>>>0:(t=ei.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+"ff",16)>>>0:(t=si.exec(e))?parseInt(t[1],16)>>>0:(t=ti.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+t[4]+t[4],16)>>>0:(t=Xs.exec(e))?(Rt(Tt(t[1]),Oe(t[2]),Oe(t[3]))|255)>>>0:(t=Zs.exec(e))?(Rt(Tt(t[1]),Oe(t[2]),Oe(t[3]))|Lt(t[4]))>>>0:null}function nt(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function Rt(e,t,n){let s=n<.5?n*(1+t):n+t-n*t,i=2*n-s,r=nt(i,s,e+1/3),o=nt(i,s,e),a=nt(i,s,e-1/3);return Math.round(r*255)<<24|Math.round(o*255)<<16|Math.round(a*255)<<8}function oe(e){let t=parseInt(e,10);return t<0?0:t>255?255:t}function Tt(e){return(parseFloat(e)%360+360)%360/360}function Lt(e){let t=parseFloat(e);return t<0?0:t>1?255:Math.round(t*255)}function Oe(e){let t=parseFloat(e);return t<0?0:t>100?1:t/100}function Ft(e){let t=ii(e);if(t===null)return e;t=t||0;let n=(t&4278190080)>>>24,s=(t&16711680)>>>16,i=(t&65280)>>>8,r=(t&255)/255;return`rgba(${n}, ${s}, ${i}, ${r})`}var _e=(e,t,n)=>{if(c.fun(e))return e;if(c.arr(e))return _e({range:e,output:t,extrapolate:n});if(c.str(e.output[0]))return Pt(e);let s=e,i=s.output,r=s.range||[0,1],o=s.extrapolateLeft||s.extrapolate||"extend",a=s.extrapolateRight||s.extrapolate||"extend",u=s.easing||(h=>h);return h=>{let f=oi(h,r);return ri(h,r[f],r[f+1],i[f],i[f+1],u,o,a,s.map)}};function ri(e,t,n,s,i,r,o,a,u){let h=u?u(e):e;if(h<t){if(o==="identity")return h;o==="clamp"&&(h=t)}if(h>n){if(a==="identity")return h;a==="clamp"&&(h=n)}return s===i?s:t===n?e<=t?s:i:(t===-1/0?h=-h:n===1/0?h=h-t:h=(h-t)/(n-t),h=r(h),s===-1/0?h=-h:i===1/0?h=h+s:h=h*(i-s)+s,h)}function oi(e,t){for(var n=1;n<t.length-1&&!(t[n]>=e);++n);return n-1}var ai=(e,t="end")=>n=>{n=t==="end"?Math.min(n,.999):Math.max(n,.001);let s=n*e,i=t==="end"?Math.floor(s):Math.ceil(s);return Ws(0,1,i/e)},He=1.70158,Re=He*1.525,$t=He+1,Ut=2*Math.PI/3,jt=2*Math.PI/4.5,Te=e=>e<1/2.75?7.5625*e*e:e<2/2.75?7.5625*(e-=1.5/2.75)*e+.75:e<2.5/2.75?7.5625*(e-=2.25/2.75)*e+.9375:7.5625*(e-=2.625/2.75)*e+.984375,li={linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>1-(1-e)*(1-e),easeInOutQuad:e=>e<.5?2*e*e:1-Math.pow(-2*e+2,2)/2,easeInCubic:e=>e*e*e,easeOutCubic:e=>1-Math.pow(1-e,3),easeInOutCubic:e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,easeInQuart:e=>e*e*e*e,easeOutQuart:e=>1-Math.pow(1-e,4),easeInOutQuart:e=>e<.5?8*e*e*e*e:1-Math.pow(-2*e+2,4)/2,easeInQuint:e=>e*e*e*e*e,easeOutQuint:e=>1-Math.pow(1-e,5),easeInOutQuint:e=>e<.5?16*e*e*e*e*e:1-Math.pow(-2*e+2,5)/2,easeInSine:e=>1-Math.cos(e*Math.PI/2),easeOutSine:e=>Math.sin(e*Math.PI/2),easeInOutSine:e=>-(Math.cos(Math.PI*e)-1)/2,easeInExpo:e=>e===0?0:Math.pow(2,10*e-10),easeOutExpo:e=>e===1?1:1-Math.pow(2,-10*e),easeInOutExpo:e=>e===0?0:e===1?1:e<.5?Math.pow(2,20*e-10)/2:(2-Math.pow(2,-20*e+10))/2,easeInCirc:e=>1-Math.sqrt(1-Math.pow(e,2)),easeOutCirc:e=>Math.sqrt(1-Math.pow(e-1,2)),easeInOutCirc:e=>e<.5?(1-Math.sqrt(1-Math.pow(2*e,2)))/2:(Math.sqrt(1-Math.pow(-2*e+2,2))+1)/2,easeInBack:e=>$t*e*e*e-He*e*e,easeOutBack:e=>1+$t*Math.pow(e-1,3)+He*Math.pow(e-1,2),easeInOutBack:e=>e<.5?Math.pow(2*e,2)*((Re+1)*2*e-Re)/2:(Math.pow(2*e-2,2)*((Re+1)*(e*2-2)+Re)+2)/2,easeInElastic:e=>e===0?0:e===1?1:-Math.pow(2,10*e-10)*Math.sin((e*10-10.75)*Ut),easeOutElastic:e=>e===0?0:e===1?1:Math.pow(2,-10*e)*Math.sin((e*10-.75)*Ut)+1,easeInOutElastic:e=>e===0?0:e===1?1:e<.5?-(Math.pow(2,20*e-10)*Math.sin((20*e-11.125)*jt))/2:Math.pow(2,-20*e+10)*Math.sin((20*e-11.125)*jt)/2+1,easeInBounce:e=>1-Te(1-e),easeOutBounce:Te,easeInOutBounce:e=>e<.5?(1-Te(1-2*e))/2:(1+Te(2*e-1))/2,steps:ai},ce=Symbol.for("FluidValue.get"),Z=Symbol.for("FluidValue.observers"),R=e=>!!(e&&e[ce]),N=e=>e&&e[ce]?e[ce]():e,Ht=e=>e[Z]||null;function ci(e,t){e.eventObserved?e.eventObserved(t):e(t)}function ke(e,t){let n=e[Z];n&&n.forEach(s=>{ci(s,t)})}var yo,bo,cn,Cn=(cn=class{constructor(e){p(this,yo);p(this,bo);if(!e&&!(e=this.get))throw Error("Unknown getter");ui(this,e)}},yo=ce,bo=Z,cn),ui=(e,t)=>Mn(e,ce,t);function de(e,t){if(e[ce]){let n=e[Z];n||Mn(e,Z,n=new Set),n.has(t)||(n.add(t),e.observerAdded&&e.observerAdded(n.size,t))}return t}function Ae(e,t){let n=e[Z];if(n&&n.has(t)){let s=n.size-1;s?n.delete(t):e[Z]=null,e.observerRemoved&&e.observerRemoved(s,t)}}var Mn=(e,t,n)=>Object.defineProperty(e,t,{value:n,writable:!0,configurable:!0}),Fe=/[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,di=/(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,Bt=new RegExp(`(${Fe.source})(%|[a-z]+)`,"i"),hi=/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,We=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,Vn=e=>{let[t,n]=pi(e);if(!t||At())return e;let s=window.getComputedStyle(document.documentElement).getPropertyValue(t);return s?s.trim():n&&n.startsWith("--")?window.getComputedStyle(document.documentElement).getPropertyValue(n)||e:n&&We.test(n)?Vn(n):n||e},pi=e=>{let t=We.exec(e);if(!t)return[,];let[,n,s]=t;return[n,s]},st,mi=(e,t,n,s,i)=>`rgba(${Math.round(t)}, ${Math.round(n)}, ${Math.round(s)}, ${i})`,En=e=>{st||(st=Y?new RegExp(`(${Object.keys(Y).join("|")})(?!\\w)`,"g"):/^\b$/);let t=e.output.map(i=>N(i).replace(We,Vn).replace(di,Ft).replace(st,Ft)),n=t.map(i=>i.match(Fe).map(Number)),s=n[0].map((i,r)=>n.map(o=>{if(!(r in o))throw Error('The arity of each "output" value must be equal');return o[r]})).map(i=>_e({...e,output:i}));return i=>{var a;let r=!Bt.test(t[0])&&((a=t.find(u=>Bt.test(u)))==null?void 0:a.replace(Fe,"")),o=0;return t[0].replace(Fe,()=>`${s[o++](i)}${r||""}`).replace(hi,mi)}},Ct="react-spring: ",Nn=e=>{let t=e,n=!1;if(typeof t!="function")throw new TypeError(`${Ct}once requires a function parameter`);return(...s)=>{n||(t(...s),n=!0)}},fi=Nn(console.warn);function gi(){fi(`${Ct}The "interpolate" function is deprecated in v9 (use "to" instead)`)}var wi=Nn(console.warn);function vi(){wi(`${Ct}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`)}function Ye(e){return c.str(e)&&(e[0]=="#"||/\d/.test(e)||!At()&&We.test(e)||e in(Y||{}))}var Mt=At()?x.useEffect:x.useLayoutEffect,yi=()=>{let e=x.useRef(!1);return Mt(()=>(e.current=!0,()=>{e.current=!1}),[]),e};function zn(){let e=x.useState()[1],t=yi();return()=>{t.current&&e(Math.random())}}function bi(e,t){let[n]=x.useState(()=>({inputs:t,result:e()})),s=x.useRef(),i=s.current,r=i;return r?t&&r.inputs&&xi(t,r.inputs)||(r={inputs:t,result:e()}):r=n,x.useEffect(()=>{s.current=r,i==n&&(n.inputs=n.result=void 0)},[r]),r.result}function xi(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}var On=e=>x.useEffect(e,Si),Si=[];function qt(e){let t=x.useRef();return x.useEffect(()=>{t.current=e}),t.current}var Pe=Symbol.for("Animated:node"),_i=e=>!!e&&e[Pe]===e,H=e=>e&&e[Pe],Vt=(e,t)=>qs(e,Pe,t),Ge=e=>e&&e[Pe]&&e[Pe].getPayload(),Rn=class{constructor(){p(this,"payload");Vt(this,this)}getPayload(){return this.payload||[]}},ze=class extends Rn{constructor(t){super();p(this,"done",!0);p(this,"elapsedTime");p(this,"lastPosition");p(this,"lastVelocity");p(this,"v0");p(this,"durationProgress",0);this._value=t,c.num(this._value)&&(this.lastPosition=this._value)}static create(t){return new ze(t)}getPayload(){return[this]}getValue(){return this._value}setValue(t,n){return c.num(t)&&(this.lastPosition=t,n&&(t=Math.round(t/n)*n,this.done&&(this.lastPosition=t))),this._value===t?!1:(this._value=t,!0)}reset(){let{done:t}=this;this.done=!1,c.num(this._value)&&(this.elapsedTime=0,this.durationProgress=0,this.lastPosition=this._value,t&&(this.lastVelocity=null),this.v0=null)}},Ie=class extends ze{constructor(t){super(0);p(this,"_string",null);p(this,"_toString");this._toString=_e({output:[t,t]})}static create(t){return new Ie(t)}getValue(){return this._string??(this._string=this._toString(this._value))}setValue(t){if(c.str(t)){if(t==this._string)return!1;this._string=t,this._value=1}else if(super.setValue(t))this._string=null;else return!1;return!0}reset(t){t&&(this._toString=_e({output:[this.getValue(),t]})),this._value=0,super.reset()}},Be={dependencies:null},Je=class extends Rn{constructor(e){super(),this.source=e,this.setValue(e)}getValue(e){let t={};return B(this.source,(n,s)=>{_i(n)?t[s]=n.getValue(e):R(n)?t[s]=N(n):e||(t[s]=n)}),t}setValue(e){this.source=e,this.payload=this._makePayload(e)}reset(){this.payload&&A(this.payload,e=>e.reset())}_makePayload(e){if(e){let t=new Set;return B(e,this._addToPayload,t),Array.from(t)}}_addToPayload(e){Be.dependencies&&R(e)&&Be.dependencies.add(e);let t=Ge(e);t&&A(t,n=>this.add(n))}},Tn=class extends Je{constructor(t){super(t)}static create(t){return new Tn(t)}getValue(){return this.source.map(t=>t.getValue())}setValue(t){let n=this.getPayload();return t.length==n.length?n.map((s,i)=>s.setValue(t[i])).some(Boolean):(super.setValue(t.map(ki)),!0)}};function ki(e){return(Ye(e)?Ie:ze).create(e)}function ut(e){let t=H(e);return t?t.constructor:c.arr(e)?Tn:Ye(e)?Ie:ze}var Qt=(e,t)=>{let n=!c.fun(e)||e.prototype&&e.prototype.isReactComponent;return x.forwardRef((s,i)=>{let r=x.useRef(null),o=n&&x.useCallback(g=>{r.current=Ii(i,g)},[i]),[a,u]=Pi(s,t),h=zn(),f=()=>{let g=r.current;n&&!g||(g?t.applyAnimatedValues(g,a.getValue(!0)):!1)===!1&&h()},m=new Ai(f,u),d=x.useRef();Mt(()=>(d.current=m,A(u,g=>de(g,m)),()=>{d.current&&(A(d.current.deps,g=>Ae(g,d.current)),S.cancel(d.current.update))})),x.useEffect(f,[]),On(()=>()=>{let g=d.current;A(g.deps,y=>Ae(y,g))});let w=t.getComponentProps(a.getValue());return x.createElement(e,{...w,ref:o})})},Ai=class{constructor(e,t){this.update=e,this.deps=t}eventObserved(e){e.type=="change"&&S.write(this.update)}};function Pi(e,t){let n=new Set;return Be.dependencies=n,e.style&&(e={...e,style:t.createAnimatedStyle(e.style)}),e=new Je(e),Be.dependencies=null,[e,n]}function Ii(e,t){return e&&(c.fun(e)?e(t):e.current=t),t}var Dt=Symbol.for("AnimatedComponent"),Ci=(e,{applyAnimatedValues:t=()=>!1,createAnimatedStyle:n=i=>new Je(i),getComponentProps:s=i=>i}={})=>{let i={applyAnimatedValues:t,createAnimatedStyle:n,getComponentProps:s},r=o=>{let a=Kt(o)||"Anonymous";return c.str(o)?o=r[o]||(r[o]=Qt(o,i)):o=o[Dt]||(o[Dt]=Qt(o,i)),o.displayName=`Animated(${a})`,o};return B(e,(o,a)=>{c.arr(e)&&(a=Kt(o)),r[a]=r(o)}),{animated:r}},Kt=e=>c.str(e)?e:e&&c.str(e.displayName)?e.displayName:c.fun(e)&&e.name||null;function X(e,...t){return c.fun(e)?e(...t):e}var xe=(e,t)=>e===!0||!!(t&&e&&(c.fun(e)?e(t):O(e).includes(t))),Ln=(e,t)=>c.obj(e)?t&&e[t]:e,Fn=(e,t)=>e.default===!0?e[t]:e.default?e.default[t]:void 0,Mi=e=>e,Et=(e,t=Mi)=>{let n=Vi;e.default&&e.default!==!0&&(e=e.default,n=Object.keys(e));let s={};for(let i of n){let r=t(e[i],i);c.und(r)||(s[i]=r)}return s},Vi=["config","onProps","onStart","onChange","onPause","onResume","onRest"],Ei={config:1,from:1,to:1,ref:1,loop:1,reset:1,pause:1,cancel:1,reverse:1,immediate:1,default:1,delay:1,onProps:1,onStart:1,onChange:1,onPause:1,onResume:1,onRest:1,onResolve:1,items:1,trail:1,sort:1,expires:1,initial:1,enter:1,update:1,leave:1,children:1,onDestroyed:1,keys:1,callId:1,parentId:1};function Ni(e){let t={},n=0;if(B(e,(s,i)=>{Ei[i]||(t[i]=s,n++)}),n)return t}function $n(e){let t=Ni(e);if(t){let n={to:t};return B(e,(s,i)=>i in t||(n[i]=s)),n}return{...e}}function Ce(e){return e=N(e),c.arr(e)?e.map(Ce):Ye(e)?j.createStringInterpolator({range:[0,1],output:[e,e]})(1):e}function zi(e){for(let t in e)return!0;return!1}function dt(e){return c.fun(e)||c.arr(e)&&c.obj(e[0])}function Oi(e,t){var n;(n=e.ref)==null||n.delete(e),t==null||t.delete(e)}function Ri(e,t){var n;t&&e.ref!==t&&((n=e.ref)==null||n.delete(e),t.add(e),e.ref=t)}var Ti={default:{tension:170,friction:26},gentle:{tension:120,friction:14},wobbly:{tension:180,friction:12},stiff:{tension:210,friction:20},slow:{tension:280,friction:60},molasses:{tension:280,friction:120}},ht={...Ti.default,mass:1,damping:1,easing:li.linear,clamp:!1},Li=class{constructor(){p(this,"tension");p(this,"friction");p(this,"frequency");p(this,"damping");p(this,"mass");p(this,"velocity",0);p(this,"restVelocity");p(this,"precision");p(this,"progress");p(this,"duration");p(this,"easing");p(this,"clamp");p(this,"bounce");p(this,"decay");p(this,"round");Object.assign(this,ht)}};function Fi(e,t,n){n&&(n={...n},Wt(n,t),t={...n,...t}),Wt(e,t),Object.assign(e,t);for(let o in ht)e[o]==null&&(e[o]=ht[o]);let{mass:s,frequency:i,damping:r}=e;return c.und(i)||(i<.01&&(i=.01),r<0&&(r=0),e.tension=Math.pow(2*Math.PI/i,2)*s,e.friction=4*Math.PI*r*s/i),e}function Wt(e,t){if(!c.und(t.decay))e.duration=void 0;else{let n=!c.und(t.tension)||!c.und(t.friction);(n||!c.und(t.frequency)||!c.und(t.damping)||!c.und(t.mass))&&(e.duration=void 0,e.decay=void 0),n&&(e.frequency=void 0)}}var Yt=[],$i=class{constructor(){p(this,"changed",!1);p(this,"values",Yt);p(this,"toValues",null);p(this,"fromValues",Yt);p(this,"to");p(this,"from");p(this,"config",new Li);p(this,"immediate",!1)}};function Un(e,{key:t,props:n,defaultProps:s,state:i,actions:r}){return new Promise((o,a)=>{let u,h,f=xe(n.cancel??(s==null?void 0:s.cancel),t);if(f)w();else{c.und(n.pause)||(i.paused=xe(n.pause,t));let g=s==null?void 0:s.pause;g!==!0&&(g=i.paused||xe(g,t)),u=X(n.delay||0,t),g?(i.resumeQueue.add(d),r.pause()):(r.resume(),d())}function m(){i.resumeQueue.add(d),i.timeouts.delete(h),h.cancel(),u=h.time-S.now()}function d(){u>0&&!j.skipAnimation?(i.delayed=!0,h=S.setTimeout(w,u),i.pauseQueue.add(m),i.timeouts.add(h)):w()}function w(){i.delayed&&(i.delayed=!1),i.pauseQueue.delete(m),i.timeouts.delete(h),e<=(i.cancelId||0)&&(f=!0);try{r.start({...n,callId:e,cancel:f},o)}catch(g){a(g)}}})}var Nt=(e,t)=>t.length==1?t[0]:t.some(n=>n.cancelled)?le(e.get()):t.every(n=>n.noop)?jn(e.get()):$(e.get(),t.every(n=>n.finished)),jn=e=>({value:e,noop:!0,finished:!0,cancelled:!1}),$=(e,t,n=!1)=>({value:e,finished:t,cancelled:n}),le=e=>({value:e,cancelled:!0,finished:!1});function Hn(e,t,n,s){let{callId:i,parentId:r,onRest:o}=t,{asyncTo:a,promise:u}=n;return!r&&e===a&&!t.reset?u:n.promise=(async()=>{n.asyncId=i,n.asyncTo=e;let h=Et(t,(v,_)=>_==="onRest"?void 0:v),f,m,d=new Promise((v,_)=>(f=v,m=_)),w=v=>{let _=i<=(n.cancelId||0)&&le(s)||i!==n.asyncId&&$(s,!1);if(_)throw v.result=_,m(v),v},g=(v,_)=>{let k=new Gt,P=new Jt;return(async()=>{if(j.skipAnimation)throw Me(n),P.result=$(s,!1),m(P),P;w(k);let b=c.obj(v)?{...v}:{..._,to:v};b.parentId=i,B(h,(E,G)=>{c.und(b[G])&&(b[G]=E)});let C=await s.start(b);return w(k),n.paused&&await new Promise(E=>{n.resumeQueue.add(E)}),C})()},y;if(j.skipAnimation)return Me(n),$(s,!1);try{let v;c.arr(e)?v=(async _=>{for(let k of _)await g(k)})(e):v=Promise.resolve(e(g,s.stop.bind(s))),await Promise.all([v.then(f),d]),y=$(s.get(),!0,!1)}catch(v){if(v instanceof Gt)y=v.result;else if(v instanceof Jt)y=v.result;else throw v}finally{i==n.asyncId&&(n.asyncId=r,n.asyncTo=r?a:void 0,n.promise=r?u:void 0)}return c.fun(o)&&S.batchedUpdates(()=>{o(y,s,s.item)}),y})()}function Me(e,t){ye(e.timeouts,n=>n.cancel()),e.pauseQueue.clear(),e.resumeQueue.clear(),e.asyncId=e.asyncTo=e.promise=void 0,t&&(e.cancelId=t)}var Gt=class extends Error{constructor(){super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.");p(this,"result")}},Jt=class extends Error{constructor(){super("SkipAnimationSignal");p(this,"result")}},pt=e=>e instanceof zt,Ui=1,zt=class extends Cn{constructor(){super(...arguments);p(this,"id",Ui++);p(this,"_priority",0)}get priority(){return this._priority}set priority(t){this._priority!=t&&(this._priority=t,this._onPriorityChange(t))}get(){let t=H(this);return t&&t.getValue()}to(...t){return j.to(this,t)}interpolate(...t){return gi(),j.to(this,t)}toJSON(){return this.get()}observerAdded(t){t==1&&this._attach()}observerRemoved(t){t==0&&this._detach()}_attach(){}_detach(){}_onChange(t,n=!1){ke(this,{type:"change",parent:this,value:t,idle:n})}_onPriorityChange(t){this.idle||De.sort(this),ke(this,{type:"priority",parent:this,priority:t})}},ee=Symbol.for("SpringPhase"),Bn=1,mt=2,ft=4,it=e=>(e[ee]&Bn)>0,D=e=>(e[ee]&mt)>0,pe=e=>(e[ee]&ft)>0,Xt=(e,t)=>t?e[ee]|=mt|Bn:e[ee]&=~mt,Zt=(e,t)=>t?e[ee]|=ft:e[ee]&=~ft,ji=class extends zt{constructor(t,n){super();p(this,"key");p(this,"animation",new $i);p(this,"queue");p(this,"defaultProps",{});p(this,"_state",{paused:!1,delayed:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set});p(this,"_pendingCalls",new Set);p(this,"_lastCallId",0);p(this,"_lastToId",0);p(this,"_memoizedDuration",0);if(!c.und(t)||!c.und(n)){let s=c.obj(t)?{...t}:{...n,from:t};c.und(s.default)&&(s.default=!0),this.start(s)}}get idle(){return!(D(this)||this._state.asyncTo)||pe(this)}get goal(){return N(this.animation.to)}get velocity(){let t=H(this);return t instanceof ze?t.lastVelocity||0:t.getPayload().map(n=>n.lastVelocity||0)}get hasAnimated(){return it(this)}get isAnimating(){return D(this)}get isPaused(){return pe(this)}get isDelayed(){return this._state.delayed}advance(t){let n=!0,s=!1,i=this.animation,{config:r,toValues:o}=i,a=Ge(i.to);!a&&R(i.to)&&(o=O(N(i.to))),i.values.forEach((f,m)=>{if(f.done)return;let d=f.constructor==Ie?1:a?a[m].lastPosition:o[m],w=i.immediate,g=d;if(!w){if(g=f.lastPosition,r.tension<=0){f.done=!0;return}let y=f.elapsedTime+=t,v=i.fromValues[m],_=f.v0!=null?f.v0:f.v0=c.arr(r.velocity)?r.velocity[m]:r.velocity,k,P=r.precision||(v==d?.005:Math.min(1,Math.abs(d-v)*.001));if(c.und(r.duration))if(r.decay){let b=r.decay===!0?.998:r.decay,C=Math.exp(-(1-b)*y);g=v+_/(1-b)*(1-C),w=Math.abs(f.lastPosition-g)<=P,k=_*C}else{k=f.lastVelocity==null?_:f.lastVelocity;let b=r.restVelocity||P/10,C=r.clamp?0:r.bounce,E=!c.und(C),G=v==d?f.v0>0:v<d,z,Q=!1,M=1,L=Math.ceil(t/M);for(let F=0;F<L&&(z=Math.abs(k)>b,!(!z&&(w=Math.abs(d-g)<=P,w)));++F){E&&(Q=g==d||g>d==G,Q&&(k=-k*C,g=d));let se=-r.tension*1e-6*(g-d),ie=-r.friction*.001*k,ts=(se+ie)/r.mass;k=k+ts*M,g=g+k*M}}else{let b=1;r.duration>0&&(this._memoizedDuration!==r.duration&&(this._memoizedDuration=r.duration,f.durationProgress>0&&(f.elapsedTime=r.duration*f.durationProgress,y=f.elapsedTime+=t)),b=(r.progress||0)+y/this._memoizedDuration,b=b>1?1:b<0?0:b,f.durationProgress=b),g=v+r.easing(b)*(d-v),k=(g-f.lastPosition)/t,w=b==1}f.lastVelocity=k,Number.isNaN(g)&&(console.warn("Got NaN while animating:",this),w=!0)}a&&!a[m].done&&(w=!1),w?f.done=!0:n=!1,f.setValue(g,r.round)&&(s=!0)});let u=H(this),h=u.getValue();if(n){let f=N(i.to);(h!==f||s)&&!r.decay?(u.setValue(f),this._onChange(f)):s&&r.decay&&this._onChange(h),this._stop()}else s&&this._onChange(h)}set(t){return S.batchedUpdates(()=>{this._stop(),this._focus(t),this._set(t)}),this}pause(){this._update({pause:!0})}resume(){this._update({pause:!1})}finish(){if(D(this)){let{to:t,config:n}=this.animation;S.batchedUpdates(()=>{this._onStart(),n.decay||this._set(t,!1),this._stop()})}return this}update(t){return(this.queue||(this.queue=[])).push(t),this}start(t,n){let s;return c.und(t)?(s=this.queue||[],this.queue=[]):s=[c.obj(t)?t:{...n,to:t}],Promise.all(s.map(i=>this._update(i))).then(i=>Nt(this,i))}stop(t){let{to:n}=this.animation;return this._focus(this.get()),Me(this._state,t&&this._lastCallId),S.batchedUpdates(()=>this._stop(n,t)),this}reset(){this._update({reset:!0})}eventObserved(t){t.type=="change"?this._start():t.type=="priority"&&(this.priority=t.priority+1)}_prepareNode(t){let n=this.key||"",{to:s,from:i}=t;s=c.obj(s)?s[n]:s,(s==null||dt(s))&&(s=void 0),i=c.obj(i)?i[n]:i,i==null&&(i=void 0);let r={to:s,from:i};return it(this)||(t.reverse&&([s,i]=[i,s]),i=N(i),c.und(i)?H(this)||this._set(s):this._set(i)),r}_update({...t},n){let{key:s,defaultProps:i}=this;t.default&&Object.assign(i,Et(t,(a,u)=>/^on/.test(u)?Ln(a,s):a)),tn(this,t,"onProps"),fe(this,"onProps",t,this);let r=this._prepareNode(t);if(Object.isFrozen(this))throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");let o=this._state;return Un(++this._lastCallId,{key:s,props:t,defaultProps:i,state:o,actions:{pause:()=>{pe(this)||(Zt(this,!0),ve(o.pauseQueue),fe(this,"onPause",$(this,me(this,this.animation.to)),this))},resume:()=>{pe(this)&&(Zt(this,!1),D(this)&&this._resume(),ve(o.resumeQueue),fe(this,"onResume",$(this,me(this,this.animation.to)),this))},start:this._merge.bind(this,r)}}).then(a=>{if(t.loop&&a.finished&&!(n&&a.noop)){let u=qn(t);if(u)return this._update(u,!0)}return a})}_merge(t,n,s){if(n.cancel)return this.stop(!0),s(le(this));let i=!c.und(t.to),r=!c.und(t.from);if(i||r)if(n.callId>this._lastToId)this._lastToId=n.callId;else return s(le(this));let{key:o,defaultProps:a,animation:u}=this,{to:h,from:f}=u,{to:m=h,from:d=f}=t;r&&!i&&(!n.default||c.und(m))&&(m=d),n.reverse&&([m,d]=[d,m]);let w=!q(d,f);w&&(u.from=d),d=N(d);let g=!q(m,h);g&&this._focus(m);let y=dt(n.to),{config:v}=u,{decay:_,velocity:k}=v;(i||r)&&(v.velocity=0),n.config&&!y&&Fi(v,X(n.config,o),n.config!==a.config?X(a.config,o):void 0);let P=H(this);if(!P||c.und(m))return s($(this,!0));let b=c.und(n.reset)?r&&!n.default:!c.und(d)&&xe(n.reset,o),C=b?d:this.get(),E=Ce(m),G=c.num(E)||c.arr(E)||Ye(E),z=!y&&(!G||xe(a.immediate||n.immediate,o));if(g){let F=ut(m);if(F!==P.constructor)if(z)P=this._set(E);else throw Error(`Cannot animate between ${P.constructor.name} and ${F.name}, as the "to" prop suggests`)}let Q=P.constructor,M=R(m),L=!1;if(!M){let F=b||!it(this)&&w;(g||F)&&(L=q(Ce(C),E),M=!L),(!q(u.immediate,z)&&!z||!q(v.decay,_)||!q(v.velocity,k))&&(M=!0)}if(L&&D(this)&&(u.changed&&!b?M=!0:M||this._stop(h)),!y&&((M||R(h))&&(u.values=P.getPayload(),u.toValues=R(m)?null:Q==Ie?[1]:O(E)),u.immediate!=z&&(u.immediate=z,!z&&!b&&this._set(h)),M)){let{onRest:F}=u;A(Bi,ie=>tn(this,n,ie));let se=$(this,me(this,h));ve(this._pendingCalls,se),this._pendingCalls.add(s),u.changed&&S.batchedUpdates(()=>{var ie;u.changed=!b,F==null||F(se,this),b?X(a.onRest,se):(ie=u.onStart)==null||ie.call(u,se,this)})}b&&this._set(C),y?s(Hn(n.to,n,this._state,this)):M?this._start():D(this)&&!g?this._pendingCalls.add(s):s(jn(C))}_focus(t){let n=this.animation;t!==n.to&&(Ht(this)&&this._detach(),n.to=t,Ht(this)&&this._attach())}_attach(){let t=0,{to:n}=this.animation;R(n)&&(de(n,this),pt(n)&&(t=n.priority+1)),this.priority=t}_detach(){let{to:t}=this.animation;R(t)&&Ae(t,this)}_set(t,n=!0){let s=N(t);if(!c.und(s)){let i=H(this);if(!i||!q(s,i.getValue())){let r=ut(s);!i||i.constructor!=r?Vt(this,r.create(s)):i.setValue(s),i&&S.batchedUpdates(()=>{this._onChange(s,n)})}}return H(this)}_onStart(){let t=this.animation;t.changed||(t.changed=!0,fe(this,"onStart",$(this,me(this,t.to)),this))}_onChange(t,n){n||(this._onStart(),X(this.animation.onChange,t,this)),X(this.defaultProps.onChange,t,this),super._onChange(t,n)}_start(){let t=this.animation;H(this).reset(N(t.to)),t.immediate||(t.fromValues=t.values.map(n=>n.lastPosition)),D(this)||(Xt(this,!0),pe(this)||this._resume())}_resume(){j.skipAnimation?this.finish():De.start(this)}_stop(t,n){if(D(this)){Xt(this,!1);let s=this.animation;A(s.values,r=>{r.done=!0}),s.toValues&&(s.onChange=s.onPause=s.onResume=void 0),ke(this,{type:"idle",parent:this});let i=n?le(this.get()):$(this.get(),me(this,t??s.to));ve(this._pendingCalls,i),s.changed&&(s.changed=!1,fe(this,"onRest",i,this))}}};function me(e,t){let n=Ce(t),s=Ce(e.get());return q(s,n)}function qn(e,t=e.loop,n=e.to){let s=X(t);if(s){let i=s!==!0&&$n(s),r=(i||e).reverse,o=!i||i.reset;return Ve({...e,loop:t,default:!1,pause:void 0,to:!r||dt(n)?n:void 0,from:o?e.from:void 0,reset:o,...i})}}function Ve(e){let{to:t,from:n}=e=$n(e),s=new Set;return c.obj(t)&&en(t,s),c.obj(n)&&en(n,s),e.keys=s.size?Array.from(s):null,e}function Hi(e){let t=Ve(e);return c.und(t.default)&&(t.default=Et(t)),t}function en(e,t){B(e,(n,s)=>n!=null&&t.add(s))}var Bi=["onStart","onRest","onChange","onPause","onResume"];function tn(e,t,n){e.animation[n]=t[n]!==Fn(t,n)?Ln(t[n],e.key):void 0}function fe(e,t,...n){var s,i,r,o;(i=(s=e.animation)[t])==null||i.call(s,...n),(o=(r=e.defaultProps)[t])==null||o.call(r,...n)}var qi=["onStart","onChange","onRest"],Qi=1,Di=class{constructor(e,t){p(this,"id",Qi++);p(this,"springs",{});p(this,"queue",[]);p(this,"ref");p(this,"_flush");p(this,"_initialProps");p(this,"_lastAsyncId",0);p(this,"_active",new Set);p(this,"_changed",new Set);p(this,"_started",!1);p(this,"_item");p(this,"_state",{paused:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set});p(this,"_events",{onStart:new Map,onChange:new Map,onRest:new Map});this._onFrame=this._onFrame.bind(this),t&&(this._flush=t),e&&this.start({default:!0,...e})}get idle(){return!this._state.asyncTo&&Object.values(this.springs).every(e=>e.idle&&!e.isDelayed&&!e.isPaused)}get item(){return this._item}set item(e){this._item=e}get(){let e={};return this.each((t,n)=>e[n]=t.get()),e}set(e){for(let t in e){let n=e[t];c.und(n)||this.springs[t].set(n)}}update(e){return e&&this.queue.push(Ve(e)),this}start(e){let{queue:t}=this;return e?t=O(e).map(Ve):this.queue=[],this._flush?this._flush(this,t):(Yn(this,t),gt(this,t))}stop(e,t){if(e!==!!e&&(t=e),t){let n=this.springs;A(O(t),s=>n[s].stop(!!e))}else Me(this._state,this._lastAsyncId),this.each(n=>n.stop(!!e));return this}pause(e){if(c.und(e))this.start({pause:!0});else{let t=this.springs;A(O(e),n=>t[n].pause())}return this}resume(e){if(c.und(e))this.start({pause:!1});else{let t=this.springs;A(O(e),n=>t[n].resume())}return this}each(e){B(this.springs,e)}_onFrame(){let{onStart:e,onChange:t,onRest:n}=this._events,s=this._active.size>0,i=this._changed.size>0;(s&&!this._started||i&&!this._started)&&(this._started=!0,ye(e,([a,u])=>{u.value=this.get(),a(u,this,this._item)}));let r=!s&&this._started,o=i||r&&n.size?this.get():null;i&&t.size&&ye(t,([a,u])=>{u.value=o,a(u,this,this._item)}),r&&(this._started=!1,ye(n,([a,u])=>{u.value=o,a(u,this,this._item)}))}eventObserved(e){if(e.type=="change")this._changed.add(e.parent),e.idle||this._active.add(e.parent);else if(e.type=="idle")this._active.delete(e.parent);else return;S.onFrame(this._onFrame)}};function gt(e,t){return Promise.all(t.map(n=>Qn(e,n))).then(n=>Nt(e,n))}async function Qn(e,t,n){let{keys:s,to:i,from:r,loop:o,onRest:a,onResolve:u}=t,h=c.obj(t.default)&&t.default;o&&(t.loop=!1),i===!1&&(t.to=null),r===!1&&(t.from=null);let f=c.arr(i)||c.fun(i)?i:void 0;f?(t.to=void 0,t.onRest=void 0,h&&(h.onRest=void 0)):A(qi,y=>{let v=t[y];if(c.fun(v)){let _=e._events[y];t[y]=({finished:k,cancelled:P})=>{let b=_.get(v);b?(k||(b.finished=!1),P&&(b.cancelled=!0)):_.set(v,{value:null,finished:k||!1,cancelled:P||!1})},h&&(h[y]=t[y])}});let m=e._state;t.pause===!m.paused?(m.paused=t.pause,ve(t.pause?m.pauseQueue:m.resumeQueue)):m.paused&&(t.pause=!0);let d=(s||Object.keys(e.springs)).map(y=>e.springs[y].start(t)),w=t.cancel===!0||Fn(t,"cancel")===!0;(f||w&&m.asyncId)&&d.push(Un(++e._lastAsyncId,{props:t,state:m,actions:{pause:lt,resume:lt,start(y,v){w?(Me(m,e._lastAsyncId),v(le(e))):(y.onRest=a,v(Hn(f,y,m,e)))}}})),m.paused&&await new Promise(y=>{m.resumeQueue.add(y)});let g=Nt(e,await Promise.all(d));if(o&&g.finished&&!(n&&g.noop)){let y=qn(t,o,i);if(y)return Yn(e,[y]),Qn(e,y,!0)}return u&&S.batchedUpdates(()=>u(g,e,e.item)),g}function nn(e,t){let n={...e.springs};return t&&A(O(t),s=>{c.und(s.keys)&&(s=Ve(s)),c.obj(s.to)||(s={...s,to:void 0}),Wn(n,s,i=>Kn(i))}),Dn(e,n),n}function Dn(e,t){B(t,(n,s)=>{e.springs[s]||(e.springs[s]=n,de(n,e))})}function Kn(e,t){let n=new ji;return n.key=e,t&&de(n,t),n}function Wn(e,t,n){t.keys&&A(t.keys,s=>{(e[s]||(e[s]=n(s)))._prepareNode(t)})}function Yn(e,t){A(t,n=>{Wn(e.springs,n,s=>Kn(s,e))})}var Xe=({children:e,...t})=>{let n=x.useContext(qe),s=t.pause||!!n.pause,i=t.immediate||!!n.immediate;t=bi(()=>({pause:s,immediate:i}),[s,i]);let{Provider:r}=qe;return x.createElement(r,{value:t},e)},qe=Ki(Xe,{});Xe.Provider=qe.Provider;Xe.Consumer=qe.Consumer;function Ki(e,t){return Object.assign(e,x.createContext(t)),e.Provider._context=e,e.Consumer._context=e,e}var Wi=()=>{let e=[],t=function(s){vi();let i=[];return A(e,(r,o)=>{if(c.und(s))i.push(r.start());else{let a=n(s,r,o);a&&i.push(r.start(a))}}),i};t.current=e,t.add=function(s){e.includes(s)||e.push(s)},t.delete=function(s){let i=e.indexOf(s);~i&&e.splice(i,1)},t.pause=function(){return A(e,s=>s.pause(...arguments)),this},t.resume=function(){return A(e,s=>s.resume(...arguments)),this},t.set=function(s){A(e,(i,r)=>{let o=c.fun(s)?s(r,i):s;o&&i.set(o)})},t.start=function(s){let i=[];return A(e,(r,o)=>{if(c.und(s))i.push(r.start());else{let a=this._getProps(s,r,o);a&&i.push(r.start(a))}}),i},t.stop=function(){return A(e,s=>s.stop(...arguments)),this},t.update=function(s){return A(e,(i,r)=>i.update(this._getProps(s,i,r))),this};let n=function(s,i,r){return c.fun(s)?s(r,i):s};return t._getProps=n,t};function Yi(e,t,n){let s=c.fun(t)&&t;s&&!n&&(n=[]);let i=x.useMemo(()=>s||arguments.length==3?Wi():void 0,[]),r=x.useRef(0),o=zn(),a=x.useMemo(()=>({ctrls:[],queue:[],flush(_,k){let P=nn(_,k);return r.current>0&&!a.queue.length&&!Object.keys(P).some(b=>!_.springs[b])?gt(_,k):new Promise(b=>{Dn(_,P),a.queue.push(()=>{b(gt(_,k))}),o()})}}),[]),u=x.useRef([...a.ctrls]),h=[],f=qt(e)||0;x.useMemo(()=>{A(u.current.slice(e,f),_=>{Oi(_,i),_.stop(!0)}),u.current.length=e,m(f,e)},[e]),x.useMemo(()=>{m(0,Math.min(f,e))},n);function m(_,k){for(let P=_;P<k;P++){let b=u.current[P]||(u.current[P]=new Di(null,a.flush)),C=s?s(P,b):t[P];C&&(h[P]=Hi(C))}}let d=u.current.map((_,k)=>nn(_,h[k])),w=x.useContext(Xe),g=qt(w),y=w!==g&&zi(w);Mt(()=>{r.current++,a.ctrls=u.current;let{queue:_}=a;_.length&&(a.queue=[],A(_,k=>k())),A(u.current,(k,P)=>{i==null||i.add(k),y&&k.start({default:w});let b=h[P];b&&(Ri(k,b.ref),k.ref?k.queue.push(b):k.start(b))})}),On(()=>()=>{A(a.ctrls,_=>_.stop(!0))});let v=d.map(_=>({..._}));return i?[v,i]:v}function Gn(e,t){let n=c.fun(e),[[s],i]=Yi(1,n?e:[e],n?t||[]:t);return n||arguments.length==2?[s,i]:s}var Gi=class extends zt{constructor(t,n){super();p(this,"key");p(this,"idle",!0);p(this,"calc");p(this,"_active",new Set);this.source=t,this.calc=_e(...n);let s=this._get(),i=ut(s);Vt(this,i.create(s))}advance(t){let n=this._get(),s=this.get();q(n,s)||(H(this).setValue(n),this._onChange(n,this.idle)),!this.idle&&sn(this._active)&&rt(this)}_get(){let t=c.arr(this.source)?this.source.map(N):O(N(this.source));return this.calc(...t)}_start(){this.idle&&!sn(this._active)&&(this.idle=!1,A(Ge(this),t=>{t.done=!1}),j.skipAnimation?(S.batchedUpdates(()=>this.advance()),rt(this)):De.start(this))}_attach(){let t=1;A(O(this.source),n=>{R(n)&&de(n,this),pt(n)&&(n.idle||this._active.add(n),t=Math.max(t,n.priority+1))}),this.priority=t,this._start()}_detach(){A(O(this.source),t=>{R(t)&&Ae(t,this)}),this._active.clear(),rt(this)}eventObserved(t){t.type=="change"?t.idle?this.advance():(this._active.add(t.parent),this._start()):t.type=="idle"?this._active.delete(t.parent):t.type=="priority"&&(this.priority=O(this.source).reduce((n,s)=>Math.max(n,(pt(s)?s.priority:0)+1),0))}};function Ji(e){return e.idle!==!1}function sn(e){return!e.size||Array.from(e).every(Ji)}function rt(e){e.idle||(e.idle=!0,A(Ge(e),t=>{t.done=!0}),ke(e,{type:"idle",parent:e}))}j.assign({createStringInterpolator:En,to:(e,t)=>new Gi(e,t)});var Jn=/^--/;function Xi(e,t){return t==null||typeof t=="boolean"||t===""?"":typeof t=="number"&&t!==0&&!Jn.test(e)&&!(Se.hasOwnProperty(e)&&Se[e])?t+"px":(""+t).trim()}var rn={};function Zi(e,t){if(!e.nodeType||!e.setAttribute)return!1;let n=e.nodeName==="filter"||e.parentNode&&e.parentNode.nodeName==="filter",{style:s,children:i,scrollTop:r,scrollLeft:o,viewBox:a,...u}=t,h=Object.values(u),f=Object.keys(u).map(m=>n||e.hasAttribute(m)?m:rn[m]||(rn[m]=m.replace(/([A-Z])/g,d=>"-"+d.toLowerCase())));i!==void 0&&(e.textContent=i);for(let m in s)if(s.hasOwnProperty(m)){let d=Xi(m,s[m]);Jn.test(m)?e.style.setProperty(m,d):e.style[m]=d}f.forEach((m,d)=>{e.setAttribute(m,h[d])}),r!==void 0&&(e.scrollTop=r),o!==void 0&&(e.scrollLeft=o),a!==void 0&&e.setAttribute("viewBox",a)}var Se={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},er=(e,t)=>e+t.charAt(0).toUpperCase()+t.substring(1),tr=["Webkit","Ms","Moz","O"];Se=Object.keys(Se).reduce((e,t)=>(tr.forEach(n=>e[er(n,t)]=e[t]),e),Se);var nr=/^(matrix|translate|scale|rotate|skew)/,sr=/^(translate)/,ir=/^(rotate|skew)/,ot=(e,t)=>c.num(e)&&e!==0?e+t:e,$e=(e,t)=>c.arr(e)?e.every(n=>$e(n,t)):c.num(e)?e===t:parseFloat(e)===t,rr=class extends Je{constructor({x:e,y:t,z:n,...s}){let i=[],r=[];(e||t||n)&&(i.push([e||0,t||0,n||0]),r.push(o=>[`translate3d(${o.map(a=>ot(a,"px")).join(",")})`,$e(o,0)])),B(s,(o,a)=>{if(a==="transform")i.push([o||""]),r.push(u=>[u,u===""]);else if(nr.test(a)){if(delete s[a],c.und(o))return;let u=sr.test(a)?"px":ir.test(a)?"deg":"";i.push(O(o)),r.push(a==="rotate3d"?([h,f,m,d])=>[`rotate3d(${h},${f},${m},${ot(d,u)})`,$e(d,0)]:h=>[`${a}(${h.map(f=>ot(f,u)).join(",")})`,$e(h,a.startsWith("scale")?1:0)])}}),i.length&&(s.transform=new or(i,r)),super(s)}},or=class extends Cn{constructor(t,n){super();p(this,"_value",null);this.inputs=t,this.transforms=n}get(){return this._value||(this._value=this._get())}_get(){let t="",n=!0;return A(this.inputs,(s,i)=>{let r=N(s[0]),[o,a]=this.transforms[i](c.arr(r)?r:s.map(N));t+=" "+o,n=n&&a}),n?"none":t}observerAdded(t){t==1&&A(this.inputs,n=>A(n,s=>R(s)&&de(s,this)))}observerRemoved(t){t==0&&A(this.inputs,n=>A(n,s=>R(s)&&Ae(s,this)))}eventObserved(t){t.type=="change"&&(this._value=null),ke(this,t)}},ar=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"];j.assign({batchedUpdates:fn.unstable_batchedUpdates,createStringInterpolator:En,colors:Ys});var lr=Ci(ar,{applyAnimatedValues:Zi,createAnimatedStyle:e=>new rr(e),getComponentProps:({scrollTop:e,scrollLeft:t,...n})=>n}),Xn=lr.animated;const Zn=vs`
  display: flex;
  font-size: 3rem;
  font-weight: 600;
  text-transform: uppercase;
  margin-left: 20px;
  letter-spacing: 10px;
  color: transparent;
  -webkit-text-stroke: 2px ${e=>e.theme.text};
  word-break: break-all;
  @media (max-width: 500px) {
    font-size: 2rem;
    word-wrap: break-word;
  }
`,cr=V(Xn.div)`
  display: flex;
  flex-direction: column;
  margin: 15px 0;
  gap: 20px;
  min-height: 100vh;
  min-height: 100dvh;
  justify-content: space-evenly;
  .heading {
    ${Zn}
  }
`,ur=V(Xn.div)`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  min-height: 100dvh;
  .heading {
    ${Zn}
    justify-content:flex-end;
  }
  .features {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    margin: 20px;
  }
`,dr="data:image/webp;base64,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",hr="/ambience.webp",pr="/ambience-500x.webp",mr="data:image/webp;base64,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",fr="/filters.webp",gr="/spoiler.webp",wr=({id:e})=>{const t=x.useRef(null),[n,s]=x.useState(!1);x.useEffect(()=>{const o=()=>{if(t.current){const a=t.current.getBoundingClientRect().top;s(a<=window.innerHeight*.8)}};return window.addEventListener("scroll",o),()=>window.removeEventListener("scroll",o)},[]);const i=Gn({from:{opacity:0},to:{opacity:1}}),r={filters:{title:"Filters",src:fr,content:"Enhance your videos with our powerful filters that allow you to adjust brightness, contrast, saturation, color balance, and more with just a few clicks."},accent:{title:"Accent Color",src:dr,content:"Customize your video player with our accent color feature, allowing you to change the timeline color and adjust it across various UI elements for a cohesive and personalized viewing experience."},ambience:{title:"Ambience",src:hr,srcSet:`${pr} 500w`,content:"Elevate the ambiance of your videos with our border feature, adding a stylish frame around your video element to enhance its visual appeal and draw attention to your content."},spoiler:{title:"Spoiler",src:gr,content:"Keep your audience on the edge of their seats with our spoiler feature, allowing you to hide specific parts of your video and keep viewers engaged until the big reveal."},community:{title:"Community",src:Fs,srcSet:`${Us} 600w, ${$s} 1200w`,content:"Foster a sense of community around your videos with our built-in sign-up feature, encouraging your viewers to become members and engage with your content on a deeper level."},autoSkip:{title:"Skip Intro",src:mr,content:'"Skip Intro" feature allows viewers to automatically skip the opening credits of a TV show, saving time and allowing for uninterrupted binge-watching.'}};return I(ur,{id:e,ref:t,style:i,children:[l("div",{className:"heading",children:"Features"}),I("div",{className:"features",children:[l(re,{info:r.filters}),l(re,{info:r.accent}),l(re,{info:r.ambience}),l(re,{info:r.spoiler}),l(re,{info:r.community}),l(re,{info:r.autoSkip})]})]})};const vr=V.div`
  height: 200px;
  width: 99.5vw;
  background-color: #222;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
`,on=V.p`
  margin: 0;
  font-size: 14px;
  opacity: 0.8;
  line-height: 1.5;
  text-align: center;
`,yr=V.footer`
  background-color: #222;
  color: #fff;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`,ge=V.span`
  color: #fff;
  text-decoration: none;
  transition: color 0.2s ease-in-out;
  cursor: pointer;
  &:hover {
    color: #ccc;
  }
`,br=({id:e})=>I(vr,{id:e,children:[l("div",{className:"custom-shape-divider-top-143",children:l("svg",{"data-name":"Layer 2",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1200 120",preserveAspectRatio:"none",children:l("path",{d:"M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z",className:"shape-fill"})})}),I(yr,{children:[I(on,{children:[l(ge,{onClick:t=>{t.stopPropagation(),window.open("/privacy","_blank")},children:"Privacy Policy"})," ","|"," ",l(ge,{onClick:t=>{t.stopPropagation(),window.open("/cookie-policy","_blank")},children:"Cookie Policy"})," ","|"," ",l(ge,{onClick:t=>{t.stopPropagation(),window.open("/terms-and-conditions","_blank")},children:"Terms and Conditions"})," ","|"," ",l(ge,{onClick:t=>{t.stopPropagation(),window.open("/about-us","_blank")},children:"About us"})," ","|"," ",l(ge,{onClick:t=>{t.stopPropagation(),window.open("/contact","_blank")},children:"Contact Us"})]}),l(on,{children:"MoovyChat Ltd. 2023"})]})]}),an="/light-chat-300x.webp",xr="/light-chat-600x.webp",Sr=V.div`
  img {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
  }
`,_r=({platform:e})=>l(Sr,{className:"platform",children:l("div",{className:"set",children:l(xs,{src:e.imgUrl,alt:e.title})})});function kr(e){return ue({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2zm0 9H8v2h4v3l4-4-4-4v3z"}}]}]})(e)}const Ar="/screenshot10-1200x.webp",Pr="/screenshot10-600x.webp",Ir="/screenshot11-1200x.webp",Cr="/screenshot11-600x.webp",Mr="/screenshot12-1200x.webp",Vr="/screenshot12-600x.webp",Er="/screenshot13-1200x.webp",Nr="/screenshot13-600x.webp",zr="/screenshot14-1200x.webp",Or="/screenshot14-600x.webp",Rr="/screenshot15-1200x.webp",Tr="/screenshot15-600x.webp",Lr="/screenshot16-1200x.webp",Fr="/screenshot16-600x.webp",$r="/screenshot1-1200x.webp",Ur="/screenshot1-600x.webp",jr="/screenshot2-1200x.webp",Hr="/screenshot2-600x.webp",Br="/screenshot3-1200x.webp",qr="/screenshot3-600x.webp",Qr="/screenshot4-1200x.webp",Dr="/screenshot4-600x.webp",Kr="/screenshot5-1200x.webp",Wr="/screenshot5-600x.webp",Yr="/screenshot6-1200x.webp",Gr="/screenshot6-600x.webp",Jr="/screenshot7-1200x.webp",Xr="/screenshot7-600x.webp",Zr="/screenshot9-1200x.webp",eo="/screenshot9-600x.webp",to=V.div`
  position: relative;
  height: 400px;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;

  .slide {
    position: absolute;
    top: 0;
    height: 400px;
    width: 100%;
    max-width: 600px;
    transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
    z-index: -5;
    opacity: 0;
    img {
      height: 100%;
      width: 100%;
      object-fit: contain;
    }
  }

  .slide.active {
    opacity: 1;
    z-index: 1;
    left: 0px;
    transform: translateX(0);
  }

  .slide.prev {
    opacity: 0.2;
    z-index: -2;
    left: -200px; /* Set the left position of the previous slide */
    transform: translateX(-40%);
  }

  .slide.next {
    opacity: 0.2; /* Set the opacity to 0.2 for the next slide */
    z-index: -2;
    left: 200px;
    transform: translateX(40%);
  }
  .prev-arrow {
    position: absolute;
    top: 50%;
    left: 20px;
    transform: translateY(-50%);
    font-size: 36px;
    cursor: pointer;
    z-index: 3;
  }

  .next-arrow {
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
    font-size: 36px;
    cursor: pointer;
    z-index: 3;
  }

  @media screen and (max-width: 600px) {
    height: 200px;
    max-width: 300px;

    .slide {
      height: 200px;
      max-width: 300px;
    }

    .prev {
      left: 10px;
      font-size: 24px;
    }

    .next {
      right: 10px;
      font-size: 24px;
    }
  }
`,no=()=>{const e=[`${Ur} 600w, ${$r} 1200w`,`${Hr} 600w, ${jr} 1200w`,`${qr} 600w, ${Br} 1200w`,`${Dr} 600w, ${Qr} 1200w`,`${Wr} 600w, ${Kr} 1200w`,`${Gr} 600w, ${Yr} 1200w`,`${Xr} 600w, ${Jr} 1200w`,`${eo} 600w, ${Zr} 1200w`,`${Pr} 600w, ${Ar} 1200w`,`${Cr} 600w, ${Ir} 1200w`,`${Vr} 600w, ${Mr} 1200w`,`${Nr} 600w, ${Er} 1200w`,`${Or} 600w, ${zr} 1200w`,`${Tr} 600w, ${Rr} 1200w`,`${Fr} 600w, ${Lr} 1200w`],[t,n]=x.useState(0),s=x.useRef(null),i=5e3;x.useEffect(()=>(s.current=setTimeout(()=>n(a=>a===e.length-1?0:a+1),i),()=>{s.current&&clearTimeout(s.current)}),[t,i,e.length]);const r=()=>{n(t===0?e.length-1:t-1)},o=()=>{t===e.length-1?n(0):n(t+1)};return I(to,{className:"slideshow",children:[e.map((a,u)=>l("div",{className:`slide ${t===u?"active":""} ${t-1===u||t===0&&u===e.length-1?"prev":""} ${t+1===u||t===e.length-1&&u===0?"next":""}`,children:l("img",{srcSet:a,alt:`slide ${u+1}`,sizes:"(min-width: 620px) 594px, 276px",src:a.split(" ")[0]})},u)),l("button",{className:"prev-arrow",onClick:r,children:"❮"}),l("button",{className:"next-arrow",onClick:o,children:"❯"})]})},so=({id:e})=>{const t=x.useRef(null),[n,s]=x.useState(!1);x.useEffect(()=>{const r=()=>{if(t.current){const o=t.current.getBoundingClientRect().top;s(o<=window.innerHeight*.8)}};return window.addEventListener("scroll",r),()=>window.removeEventListener("scroll",r)},[]);const i=Gn({from:{opacity:0},to:{opacity:1}});return I(cr,{id:e,ref:t,style:i,children:[l("div",{className:"heading",children:"Screenshots"}),l(no,{})]})},Le=25,io=[{title:"Netflix",imgUrl:"https://play-lh.googleusercontent.com/TBRwjS_qfJCSj1m7zZB93FnpJM5fSpMA_wUlFDLxWAb45T9RmwBvQd5cWR5viJJOhkI",color:"#E50915",home:"https://www.netflix.com/",status:"Available"},{title:"Disney+",imgUrl:"https://play-lh.googleusercontent.com/xoGGYH2LgLibLDBoxMg-ZE16b-RNfITw_OgXBWRAPin2FZY4FGB9QKBYApR-0rSCkQ=w240-h480-rw",color:"#022B78",home:"https://www.disneyplus.com/home",status:"Available soon"},{title:"Hulu",imgUrl:"https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/bk8cux6dapq8qjzylfaj",color:"#21E684",home:"https://www.hulu.com/",status:"Available soon"},{title:"HBO Max",imgUrl:"https://play-lh.googleusercontent.com/1iyX7VdQ7MlM7iotI9XDtTwgiVmqFGzqwz10L67XVoyiTmJVoHX87QtqvcXgUnb0AC8",color:"#370766",home:"https://www.hbomax.com/",status:"Available soon"},{title:"Amazon Prime Video",imgUrl:"https://images-na.ssl-images-amazon.com/images/I/41mpv9rBhmL.webp",color:"#2b9ec1",home:"https://www.amazon.com/gp/video/storefront/",status:"Available soon"}],ro=()=>{const e=()=>{window.location.reload()};return x.useEffect(()=>{const t=new BroadcastChannel("reloadTabsChannel");return t.addEventListener("message",e),()=>{t.removeEventListener("message",e)}},[]),I(Os,{children:[l(Rs,{children:I("div",{className:"social-container",children:[l("div",{id:"text-focus",className:"discord social",onClick:t=>{t.stopPropagation(),window.open(ls,"_blank")},children:l(Vs,{color:"cornflowerblue",size:Le,style:{pointerEvents:"none"}})}),l("div",{className:"twitter social",id:"text-focus",onClick:t=>{t.stopPropagation(),window.open(cs,"_blank")},children:l(zs,{color:"deepskyblue",size:Le,style:{pointerEvents:"none"}})}),l("div",{className:"tiktok social",id:"text-focus",onClick:t=>{t.stopPropagation(),window.open(us,"_blank")},children:l(Ns,{className:"icon",size:Le,style:{pointerEvents:"none"}})}),l("div",{className:"instagram social",id:"text-focus",onClick:t=>{t.stopPropagation(),window.open(ds,"_blank")},children:l(Es,{color:"hotpink",size:Le,style:{pointerEvents:"none"}})})]})}),I(yt,{children:[l("title",{children:"MoovyChat: Welcome"}),l("meta",{name:"description",content:"Home page of MoovyChat."}),l("link",{rel:"canonical",href:`${wt}`})]}),l("div",{className:"custom-shape-divider-top-1672047931",children:l("svg",{"data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1200 120",preserveAspectRatio:"none",children:l("path",{d:"M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z",className:"shape-fill"})})}),I("div",{className:"home",children:[I("div",{className:"pics",children:[l("div",{className:"first pic",children:l("picture",{children:l("img",{className:"image",srcSet:`${an} 300w, ${xr} 600w`,src:an,alt:"light",sizes:"300px"})})}),l("div",{className:"second pic",children:l("picture",{children:l("img",{className:"image",srcSet:`${Ot} 300w, ${Ts} 600w`,src:Ot,alt:"dark",sizes:"300px"})})})]}),I("div",{className:"heading",children:[I("div",{className:"company",children:[l("p",{children:"Supported Platforms"}),l("span",{className:"supported-platforms",children:io.map(t=>t.title==="Netflix"&&l(_r,{platform:t},t.title))})]}),l("div",{className:"text",children:Ze.heading}),l("div",{className:"sub",children:Ze.sub}),l("div",{className:"sub2",children:Ze.sub2}),I("div",{className:"get-started",onClick:t=>{t.stopPropagation(),window.open(pn,"_blank")},children:[l("div",{className:"fill"}),l("label",{children:"Install Extension"}),l(kr,{size:25})]})]}),l("div",{className:"embed",children:"MOOVY"})]}),l(so,{id:"screenshots"}),l(wr,{id:"features"}),l(br,{id:"footer"})]})},ln=()=>{const e=J(t=>t.settings.theme);return I(wn,{theme:e===gn.DARK?ks:_s,children:[I(yt,{children:[l("title",{children:"Moovy: Welcome"}),l("meta",{name:"description",content:"Welcome"}),l("link",{rel:"canonical",href:`${wt}`})]}),l(vn,{}),l(Ms,{}),l(ro,{})]})},es=60,oo=V.div`
  display: flex;
  position: relative;
  align-items: center;
  width: 99.5vw;
  height: 98.6dvh;
  flex-direction: column;
  .home-header {
    display: flex;
    width: 99.9%;
    height: ${es}px;
  }
`,ao=V.div`
  display: flex;
  position: relative;
  justify-content: space-evenly;
  align-items: center;
  height: calc(104% - ${es}px);
  width: 100%;
  .left {
    flex: 1 0 25%;
    height: 100%;
  }
  .center {
    /* flex: 1 0 50%; */
  }
  .right {
    flex: 1 0 25%;
    height: 100%;
  }

  @media (max-width: 800px) {
    .right {
      display: none;
    }
    .left {
      flex: none;
      overflow: hidden;
      position: absolute;
      top: 0;
      z-index: 99;
      width: 60%;
      left: ${e=>e.isNavBarOpen?"0%":"-60%"};
      backdrop-filter: blur(15px);
      transition: left 0.3s linear;
    }
  }
  /* @media (max-width: 900px) {
      .right {
        display: none;
      }
    } */
`,lo=ne(()=>te(()=>import("./centerPanel.ts"),["centerPanel.ts","index.js","index.css","styled-components.browser.esm.ts","logoLoading.ts","Helmet.ts","loading.ts","loading.styles.ts","moovy-text-logo-white.ts","splashScreen.styles.ts","isAuthUser.ts","hooks.ts"])),co=ne(()=>te(()=>import("./homeHeader.ts"),["homeHeader.ts","index.js","index.css","tooltip.ts","styled-components.browser.esm.ts","hooks.ts","loading.ts","Helmet.ts","loading.styles.ts","image.ts","moovy-white.ts","helpers.ts","index.esm.ts","iconBase.ts","focusWindow.ts","index.ts","isAuthUser.ts"])),uo=ne(()=>te(()=>import("./leftPanel.ts"),["leftPanel.ts","index.js","index.css","styled-components.browser.esm.ts","index.esm.ts","iconBase.ts","tooltip.ts","hooks.ts","loading.ts","Helmet.ts","loading.styles.ts","image.ts","moovy-white.ts","helpers.ts","isAuthUser.ts"])),ho=ne(()=>te(()=>import("./logoLoading.ts"),["logoLoading.ts","index.js","index.css","Helmet.ts","loading.ts","loading.styles.ts","styled-components.browser.esm.ts","moovy-text-logo-white.ts","splashScreen.styles.ts"])),po=ne(()=>te(()=>import("./popup.ts"),["popup.ts","index.js","index.css","styled-components.browser.esm.ts","hooks.ts","index.esm.ts","iconBase.ts","index.esm2.ts","tooltip.ts","loading.ts","Helmet.ts","loading.styles.ts","image.ts","moovy-white.ts","helpers.ts","focusWindow.ts","index.ts","miniCommentCard.ts","profile.styles.ts","login.ts","commentThread.styles.ts","CSSTransition.ts","inheritsLoose.ts","loadable.esm.ts","logoLoading.ts","moovy-text-logo-white.ts","splashScreen.styles.ts","popup.css"])),mo=ne(()=>te(()=>import("./rightPanel.ts"),["rightPanel.ts","index.js","index.css","loading.ts","Helmet.ts","loading.styles.ts","styled-components.browser.esm.ts","index.esm.ts","iconBase.ts","helpers.ts","hooks.ts","isAuthUser.ts","moovy-white.ts","login.ts","image.ts","loadable.esm.ts","inheritsLoose.ts","logoLoading.ts","moovy-text-logo-white.ts","splashScreen.styles.ts"])),fo=ne(()=>te(()=>import("./setProfile.ts"),["setProfile.ts","index.js","index.css","styled-components.browser.esm.ts","hooks.ts","Helmet.ts","tooltip.ts","loading.ts","loading.styles.ts","image.ts","moovy-white.ts","helpers.ts","login.ts","iconBase.ts","loadable.esm.ts","inheritsLoose.ts","logoLoading.ts","moovy-text-logo-white.ts","splashScreen.styles.ts"])),go=()=>{const e=dn(),t=J(w=>w.settings.theme),n=J(w=>w.popup.isPopupOpened),s=J(w=>w.misc.isNavBarOpen),i=J(w=>w.user),r=vt(),[o,a]=x.useState(null),[u,h]=x.useState(!0),f=J(w=>w.misc.isProfileExists),m=w=>{w.key.toLowerCase()==="escape"&&(n?fn.unstable_batchedUpdates(()=>{r(ms(null)),r(fs(!1)),r(gs(""))}):history.state!==null&&e(-1))},[d]=hs({variables:{uid:i==null?void 0:i.id},pause:ps()});return x.useEffect(()=>{let w=setTimeout(()=>{h(!1)},500);return()=>{clearTimeout(w)}},[]),x.useEffect(()=>{const{data:w,fetching:g}=d;if(!g&&w){const y=w.getUserProfile;a(y),y?y.userId!==""&&y.fullname!==""&&y.userId!==null&&y.fullname!=null?r(et(!0)):r(et(!1)):r(et(!1))}},[d]),x.useMemo(()=>(document.addEventListener("keydown",m),()=>document.removeEventListener("keydown",m)),[]),d.fetching||u?l(ho,{}):I(wn,{theme:t===gn.DARK?Ps:As,children:[l(vn,{}),I(yt,{children:[l("title",{children:"Moovy"}),l("meta",{name:"description",content:"Home"}),l("link",{rel:"canonical",href:`${wt}`})]}),f?I(oo,{children:[l(co,{className:"home-header"}),I(ao,{className:"panels",isNavBarOpen:s,children:[l(uo,{className:"left"}),l(lo,{className:"center",id:"center"}),l(mo,{className:"right"})]}),l(po,{})]}):l(fo,{profile:o})]})},wo=un(mn)(go),vo=()=>{const[{data:e,fetching:t,error:n}]=hn(),s=vt();x.useMemo(()=>{if(n&&console.log(n),!t&&e){const r=e==null?void 0:e.me;r&&(s(we(r)),localStorage.setItem("user",JSON.stringify(r)))}},[t,e,n]);const i=e==null?void 0:e.me;return n?l(ln,{}):t?l(Ss,{}):i?l(wo,{}):l(ln,{})},Ro=Object.freeze(Object.defineProperty({__proto__:null,default:vo},Symbol.toStringTag,{value:"Module"}));export{No as F,Gn as J,Vs as a,zs as b,Ns as c,Es as d,Xn as i,Ro as s};
