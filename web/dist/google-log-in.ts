import{I as A,J as G,r as n,u as X,j as l,a as e,C as B,K as x,L as v}from"./index.js";import{H as O}from"./Helmet.ts";import"./loading.styles.ts";import{M as w}from"./moovy-text-logo-white.ts";import{s as z}from"./styled-components.browser.esm.ts";import{g as J}from"./login.ts";import{u as q}from"./hooks.ts";const D=z.div`
  height: 640px;
  width: 360px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: Arial, sans-serif;
  position: relative;
  overflow: hidden;

  .logo {
    margin-bottom: 20px;
    img {
      height: 50px;
    }
  }

  .popup-spl-btn {
    padding: 10px 20px;
    border: none;
    background-color: #4285f4;
    color: #ffffff;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #357ae8;
    }
  }

  .bubble-container {
    position: absolute;
    top: 25%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);

    .bubble {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 60px;
      height: 60px;
      border-radius: 50%;
      background-color: #ffffff;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      display: flex;
      justify-content: center;
      align-items: center;
      opacity: 0;
      animation: bubble 8s infinite;

      img {
        width: 45px;
        height: 45px;
        object-fit: contain;
        border-radius: 50%;
      }
    }

    .bubble:nth-child(1) {
      animation-delay: 0s;
    }

    .bubble:nth-child(2) {
      animation-delay: 2s;
    }

    .bubble:nth-child(3) {
      animation-delay: 4s;
    }

    .bubble:nth-child(4) {
      animation-delay: 6s;
    }
  }

  @keyframes bubble {
    0% {
      opacity: 0;
      transform: translate(-50%, -50%) scale(0);
    }
    50% {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1.2);
    }
    100% {
      opacity: 0;
      transform: translate(-50%, -50%) scale(0);
    }
  }

  .text-msg {
    position: absolute;
    font-size: 10px;
    top: 90%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 5px;
  }

  .text-msg div:first-child {
    font-weight: 700;
  }

  .text-msg div:last-child {
  }

  .text-msg a {
    color: #ffffff;
    text-decoration: underline;
  }
`,ee=()=>{const[,m]=A(),[H,I]=G(),[N,L]=n.useState(null),u=q(),S=X(),[F,E]=n.useState(!1),[M,p]=n.useState(!1),[_,f]=n.useState(!1);n.useEffect(()=>{const a=new Image;a.src=w,a.addEventListener("load",()=>{E(!0)})},[]);const s=["https://play-lh.googleusercontent.com/TBRwjS_qfJCSj1m7zZB93FnpJM5fSpMA_wUlFDLxWAb45T9RmwBvQd5cWR5viJJOhkI","https://play-lh.googleusercontent.com/xoGGYH2LgLibLDBoxMg-ZE16b-RNfITw_OgXBWRAPin2FZY4FGB9QKBYApR-0rSCkQ=w240-h480-rw","https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/bk8cux6dapq8qjzylfaj","https://play-lh.googleusercontent.com/1iyX7VdQ7MlM7iotI9XDtTwgiVmqFGzqwz10L67XVoyiTmJVoHX87QtqvcXgUnb0AC8","https://images-na.ssl-images-amazon.com/images/I/41mpv9rBhmL.png"],k=async a=>{var b;a.stopPropagation();const h=await J(),C=await m({uid:h.id}),{data:r}=C,i=(b=r==null?void 0:r.login)==null?void 0:b.user;if(i){try{chrome.runtime.sendMessage(x,{type:"EXTENSION_LOG_IN",user:i},t=>{t.loggedIn?f(!0):p(!0)})}catch(t){console.log(t)}localStorage.setItem("user",JSON.stringify(N)),u(v(i)),L(()=>i)}else{const{name:t,email:T,photoUrl:j,nickname:R,id:U}=h;I({options:{name:t,email:T,photoUrl:j,nickname:R,id:U}}).then(c=>{const{data:d,error:y}=c;y&&console.log(y);const o=d==null?void 0:d.createUser;try{chrome.runtime.sendMessage(x,{type:"EXTENSION_LOG_IN",user:o},g=>{g.loggedIn?f(!0):p(!0)})}catch(g){console.log(g)}localStorage.setItem("user",JSON.stringify(o)),u(v(o)),m({uid:o==null?void 0:o.id})}).catch(c=>{console.log("ERR: Unable to create user",c)})}try{new BroadcastChannel("reloadTabsChannel").postMessage("reload")}catch(t){console.log(t)}window.close(),S("/")};return l(D,{children:[l(O,{children:[e("title",{children:"Google Login"}),e("meta",{name:"description",content:"Google Login"}),e("link",{rel:"canonical",href:`${B}/google-login`})]}),l("div",{className:"bubble-container",children:[e("div",{className:"bubble",children:e("img",{src:s[0],alt:"Netflix"})}),e("div",{className:"bubble",children:e("img",{src:s[1],alt:"Disney+"})}),e("div",{className:"bubble",children:e("img",{src:s[2],alt:"Amazon Prime Video"})}),e("div",{className:"bubble",children:e("img",{src:s[3],alt:"Hulu"})}),e("div",{className:"bubble",children:e("img",{src:s[4],alt:"Hulk"})})]}),e("div",{className:"logo",children:e("img",{src:w,alt:"Moovy"})}),e("button",{className:"popup-spl-btn",onClick:k,children:"Log in"}),M&&e("div",{children:"Login Error"}),_&&e("div",{children:"Login Success"}),l("div",{className:"text-msg",children:[e("div",{children:"**Currently, only Netflix is supported"}),e("div",{children:"MoovyChat, 2023"}),e("a",{href:"www.moovychat.com",target:"_blank",children:"www.moovychat.com"})]})]})};export{ee as default};
