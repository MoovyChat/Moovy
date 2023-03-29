import{s as u,a as k,r as s,be as j,bf as P,i as U,j as o,B as $,L as M,F as N,k as d,u as S,R as E,I as O}from"./index-c87fafe8.js";import{g as H}from"./helpers-844ce213.js";const T=u.div`
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
`;var b=(e=>(e.LEFT="left",e.RIGHT="right",e.TOP="top",e.BOTTOM="bottom",e.BOTTOM_RIGHT="bottom-right",e.TOP_RIGHT="top-right",e.TOP_LEFT="top-left",e.BOTTOM_LEFT="bottom-left",e))(b||{}),x=(e=>(e.USER="USER",e))(x||{}),z=(e=>(e.EMOJI="EMOJI",e.HEADER_OPTIONS="HEADER_OPTIONS",e))(z||{});const B="10px",L=u.div`
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
`,_=u.div`
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
`,R=({userId:e,nickName:t})=>{const i=k(h=>h.user),l=i.id!==e,[r,n]=s.useState(!1),[a,c]=s.useState(!1),[,w]=j(),[f]=P({variables:{uid:i.id,fid:e},pause:U()});return s.useMemo(()=>{const{data:h,error:p,fetching:m}=f;if(p&&console.log(p),!m&&h){const g=h.isFollowingUser;c(()=>g)}},[f]),o("div",{className:"follow",onMouseEnter:()=>n(()=>!0),onMouseLeave:()=>n(()=>!1),children:l&&o(_,{className:"follow-btn",color:a?"#13dbde31":"#de1328",isFollowingUser:a,onClick:h=>{h.stopPropagation(),c(!a),w({uid:i.id,followingId:e,follow:!a}).then(p=>{var F;const{error:m,data:g}=p;m&&console.log(m);const v=(F=g==null?void 0:g.toggleFollow)==null?void 0:F.follows;v!=null&&c(v)})},children:a?r?"UnFollow":"Following":"Follow"})})},A=u.div`
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
`,G=({userId:e})=>{const[t,i]=s.useState(null),[l]=$({variables:{uid:e},pause:U()});return s.useMemo(()=>{const{data:r,error:n,fetching:a}=l;if(n&&console.log(n),!a&&r){const c=r.getUser;i(()=>c)}},[l]),l.fetching?o(M,{}):l.error?o(N,{children:"Error"}):o(A,{bg:t==null?void 0:t.bg,children:d("div",{className:"container",children:[d("div",{className:"first",children:[o("div",{className:"pic",children:o(J,{src:t==null?void 0:t.photoUrl,tooltip:!0})}),d("div",{className:"text",children:[d("div",{className:"username",children:["@",t==null?void 0:t.nickname]}),o("div",{className:"joined",children:H(t==null?void 0:t.joinedAt)})]})]}),d("div",{className:"second",children:[o("div",{className:"sec-follow",children:o(R,{userId:t==null?void 0:t.id,nickName:t==null?void 0:t.nickname})}),d("div",{className:"batch",children:[o("div",{className:"name",children:"Followers"}),o("div",{className:"count",children:t!=null&&t.followerCount?t==null?void 0:t.followerCount:0})]}),d("div",{className:"batch",children:[o("div",{className:"name",children:"Following"}),o("div",{className:"count",children:t!=null&&t.followingCount?t==null?void 0:t.followingCount:0})]})]})]})})},X=({children:e,dir:t=b.BOTTOM,message:i,height:l,width:r,data:n})=>{const[a,c]=s.useState(!1),[w,f]=s.useState(!1);s.useEffect(()=>{window.matchMedia("(pointer: coarse)").matches?f(!0):f(!1)},[]);const y=s.useCallback(()=>{switch(i){case x.USER:return o(G,{userId:n});default:return o("div",{})}},[i]);return d(L,{className:"tooltip-wrapper",dir:t,height:l,width:r,visible:a,onMouseEnter:()=>c(!0),onMouseLeave:()=>c(!1),children:[o("div",{className:"component",children:e}),!w&&o("div",{className:`tooltip ${t||b.BOTTOM}`,children:o(y,{})})]})},J=({src:e,user:t,tooltip:i})=>{const l=S(),r=n=>{n.stopPropagation(),t&&l(`/profile/${t==null?void 0:t.nickname}`)};return o(E.Fragment,{children:i?o(T,{onClick:r,id:"blur-escape",children:o("img",{src:e,alt:"profilePic",id:"blur-escape",loading:"lazy"})}):o(X,{height:"140px",width:"200px",data:t==null?void 0:t.id,message:x.USER,children:o(T,{id:"blur-escape",children:o(O,{src:e,alt:"profilePic",lazy:!0})})})})};export{b as D,z as F,J as P,R as a};
