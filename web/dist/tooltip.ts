import{r as s,am as j,an as k,i as U,a as o,u as P,R as $,ao as M,F as N,j as d}from"./index.js";import{s as u}from"./styled-components.browser.esm.ts";import{a as S}from"./hooks.ts";import E from"./loading.ts";import{I as O}from"./image.ts";import{g as H}from"./helpers.ts";var b=(e=>(e.LEFT="left",e.RIGHT="right",e.TOP="top",e.BOTTOM="bottom",e.BOTTOM_RIGHT="bottom-right",e.TOP_RIGHT="top-right",e.TOP_LEFT="top-left",e.BOTTOM_LEFT="bottom-left",e))(b||{}),x=(e=>(e.USER="USER",e))(x||{}),z=(e=>(e.EMOJI="EMOJI",e.HEADER_OPTIONS="HEADER_OPTIONS",e))(z||{});const B="10px",_=u.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  .component {
    position: relative;
  }
  .tooltip {
    position: absolute;
    display: ${e=>e.visible?"flex":"none"};
    left: 50%;
    transform: translateX(-50%);
    border-radius: 10px;
    line-height: 1;
    z-index: 999;
    width: ${e=>e.width};
    height: ${e=>e.height};
    justify-content: center;
    align-items: center;
  }
  .tooltip.bottom-right {
    bottom: calc((${e=>e.height}) * -1);
    left: calc((${e=>e.width}) * 0.5);
  }
  .tooltip.bottom-left {
    bottom: calc((${e=>e.height}) * -1);
    right: calc((${e=>e.width}) * 0.5);
  }
  .tooltip.bottom {
    bottom: calc((${e=>e.height}) * -1);
  }
  .tooltip.top {
    top: calc((${e=>e.height}) * -1);
  }
  .tooltip.right {
    left: calc((${e=>e.width}) * 0.3);
    top: 50%;
    transform: translateX(0) translateY(-50%);
    border-right-color: ${e=>e.theme.background};
  }
  .tooltip.left {
    left: auto;
    right: calc(100% + ${B});
    top: 50%;
    transform: translateX(0) translateY(-50%);
  }
`,L=u.div`
  position: relative;
  padding: 10px 20px;
  font-size: 14px;
  font-weight: 700;
  border-radius: 10px;
  background: transparent;
  box-shadow: inset 0 0 2px;

  :hover {
    cursor: pointer;
    background-color: ${e=>e.isFollowingUser?"transparent":e.theme.body};
    color: ${e=>e.isFollowingUser&&"red"};
  }
`,R=({userId:e,nickName:t})=>{const i=S(f=>f.user),l=i.id!==e,[r,n]=s.useState(!1),[a,c]=s.useState(!1),[,w]=j(),[h]=k({variables:{uid:i.id,fid:e},pause:U()});return s.useMemo(()=>{const{data:f,error:p,fetching:m}=h;if(p&&console.log(p),!m&&f){const g=f.isFollowingUser;c(()=>g)}},[h]),o("div",{className:"follow",onMouseEnter:()=>n(()=>!0),onMouseLeave:()=>n(()=>!1),children:l&&o(L,{className:"follow-btn",color:a?"#13dbde31":"#de1328",isFollowingUser:a,onClick:f=>{f.stopPropagation(),c(!a),w({uid:i.id,followingId:e,follow:!a}).then(p=>{var F;const{error:m,data:g}=p;m&&console.log(m);const v=(F=g==null?void 0:g.toggleFollow)==null?void 0:F.follows;v!=null&&c(v)})},children:a?r?"UnFollow":"Following":"Follow"})})},T=u.div`
  display: inline-block;
  display: flex;
  justify-content: center;
  border-radius: 50%;
  overflow: hidden;
  width: 100%;
  height: 100%;
  :hover {
    cursor: pointer;
  }
  img {
    width: 100%;
    height: 100%;
  }
`,A=({src:e,user:t,tooltip:i})=>{const l=P(),r=n=>{n.stopPropagation(),t&&l(`/profile/${t==null?void 0:t.nickname}`)};return o($.Fragment,{children:i?o(T,{onClick:r,id:"blur-escape",children:o("img",{src:e,alt:"profilePic",id:"blur-escape",loading:"lazy"})}):o(J,{height:"140px",width:"200px",data:t==null?void 0:t.id,message:x.USER,children:o(T,{id:"blur-escape",children:o(O,{src:e,alt:"profilePic",lazy:!0})})})})},G=u.div`
  display: flex;
  position: relative;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 100%;
  border-radius: 18px;
  overflow: hidden;
  transition: all 0.5s;
  background-image: url(${e=>e.bg});
  background-size: cover;
  background-repeat: no-repeat;
  .container {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    position: relative;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(5px) grayscale(30%) brightness(60%);
    .first {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      width: 100%;
      .pic {
        width: 40px;
        height: 40px;
        border: 1px solid black;
        border-radius: 50%;
        box-shadow: 0 0 10px black;
      }
      .text {
        position: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .username {
          font-weight: 600;
          font-size: 1rem;
        }
        .joined {
          position: flex;
          justify-content: center;
          align-items: center;
          font-weight: 600;
          font-size: 0.8rem;
          opacity: 0.8;
        }
      }
    }
    .second {
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: space-evenly;
      width: inherit;
      .sec-follow {
        margin: none;
        .follow {
          height: auto;
          border: none;
        }
      }
      .batch {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        width: 99%;
        font-weight: 600;
        font-size: 0.8rem;
        padding: 5px;
        .name {
          flex: 1 1 50%;
          display: flex;
          justify-content: flex-end;
          align-items: center;
        }
        .count {
          flex: 1 1 50%;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
    }
  }
`,X=({userId:e})=>{const[t,i]=s.useState(null),[l]=M({variables:{uid:e},pause:U()});return s.useMemo(()=>{const{data:r,error:n,fetching:a}=l;if(n&&console.log(n),!a&&r){const c=r.getUser;i(()=>c)}},[l]),l.fetching?o(E,{}):l.error?o(N,{children:"Error"}):o(G,{bg:t==null?void 0:t.bg,children:d("div",{className:"container",children:[d("div",{className:"first",children:[o("div",{className:"pic",children:o(A,{src:t==null?void 0:t.photoUrl,tooltip:!0})}),d("div",{className:"text",children:[d("div",{className:"username",children:["@",t==null?void 0:t.nickname]}),o("div",{className:"joined",children:H(t==null?void 0:t.joinedAt)})]})]}),d("div",{className:"second",children:[o("div",{className:"sec-follow",children:o(R,{userId:t==null?void 0:t.id,nickName:t==null?void 0:t.nickname})}),d("div",{className:"batch",children:[o("div",{className:"name",children:"Followers"}),o("div",{className:"count",children:t!=null&&t.followerCount?t==null?void 0:t.followerCount:0})]}),d("div",{className:"batch",children:[o("div",{className:"name",children:"Following"}),o("div",{className:"count",children:t!=null&&t.followingCount?t==null?void 0:t.followingCount:0})]})]})]})})},J=({children:e,dir:t=b.BOTTOM,message:i,height:l,width:r,data:n})=>{const[a,c]=s.useState(!1),[w,h]=s.useState(!1);s.useEffect(()=>{window.matchMedia("(pointer: coarse)").matches?h(!0):h(!1)},[]);const y=s.useCallback(()=>{switch(i){case x.USER:return o(X,{userId:n});default:return o("div",{})}},[i]);return d(_,{className:"tooltip-wrapper",dir:t,height:l,width:r,visible:a,onMouseEnter:()=>c(!0),onMouseLeave:()=>c(!1),children:[o("div",{className:"component",children:e}),!w&&o("div",{className:`tooltip ${t||b.BOTTOM}`,children:o(y,{})})]})};export{b as D,R as F,A as P,J as T,x as a,z as b};
