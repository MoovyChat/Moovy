import{u as H,r,j as l,a as e,b as _,s as ee,c as ie,d as se,p as oe,e as te,f as le,g as ae,i as G,h as re}from"./index.js";import{M as ne,a as ce,b as de,c as pe}from"./index.esm.ts";import{S as he,N as C}from"./profile.styles.ts";import{g as me,P as A}from"./helpers.ts";import{u as V,a as fe}from"./hooks.ts";import{T as I,a as D,D as w}from"./tooltip.ts";import{I as f}from"./image.ts";import{s as ve}from"./styled-components.browser.esm.ts";import{M as E}from"./movieCard.ts";import"./iconBase.ts";import"./loading.ts";import"./Helmet.ts";import"./loading.styles.ts";import"./moovy-white.ts";import"./movieCard.styles.ts";import"./movieInfo.ts";const ge=ve.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: relative;
  .gp {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40%;
    height: 50px;

    :hover {
      .two {
        left: 45px;
      }

      .three {
        left: 90px;
      }
    }
    .profile-box {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      border: 2px solid;
      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }
    .one,
    .two,
    .three {
      position: absolute;
      top: 3px;
      left: 0px;
      z-index: 2;
      transition: all 0.4s;
      :hover {
        cursor: pointer;
        box-shadow: 0 0 5px 5px, inset 0 0 5px 5px;
      }
    }
    .two {
      z-index: 1;
      left: 20px;
    }
    .three {
      z-index: 0;
      left: 40px;
    }
  }
  .count {
    width: 60%;
    display: flex;
    font-size: 13px;
    font-weight: 600;
    float: right;
    :hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }
`,B="/moovy-logo-white.jpg",Q=({followers:c,following:d,count:i,user:y})=>{var m,b,u,N,k,T;const o=H(),v=V();let[a,S]=r.useState([]),[p,O]=r.useState(!1);const h=n=>{o(`/profile/${n}`)};r.useEffect(()=>{c?(S(c),O(!0)):d&&S(d)},[c,d]);let U=p?`${i} followers`:`${i} following`;const g=n=>{n.stopPropagation();const M={data:y.id,type:p?"Followers":"Following",isFollower:p};_.unstable_batchedUpdates(()=>{v(ee(M)),v(ie(!0)),v(se(oe.OPEN_FOLLOW))})};let F=p?"No followers":"0 following";return l(ge,{children:[l("div",{className:"gp",children:[e("div",{className:"one profile-box",children:a[0]?e(I,{height:"140px",message:D.USER,width:"200px",data:(m=a[0])==null?void 0:m.id,dir:c?w.BOTTOM_RIGHT:w.BOTTOM,children:e(f,{src:(b=a[0])==null?void 0:b.photoUrl,alt:"profile",onClick:n=>{n.stopPropagation(),h(a[0].nickname)}})}):e(f,{src:B,alt:"profile"})}),e("div",{className:"two profile-box",children:a[1]?e(I,{height:"140px",message:D.USER,width:"200px",data:(u=a[1])==null?void 0:u.id,dir:w.BOTTOM,children:e(f,{src:(N=a[1])==null?void 0:N.photoUrl,alt:"profile",onClick:n=>{n.stopPropagation(),h(a[1].nickname)}})}):e(f,{src:B,alt:"profile"})}),e("div",{className:"three profile-box",children:a[2]?e(I,{height:"140px",message:D.USER,width:"200px",data:(k=a[2])==null?void 0:k.id,dir:d?w.BOTTOM_LEFT:w.BOTTOM,children:e(f,{src:(T=a[2])==null?void 0:T.photoUrl,alt:"profile",onClick:n=>{n.stopPropagation(),h(a[2].nickname)}})}):e(f,{src:B,alt:"profile"})})]}),e("div",{className:"count",onClick:g,children:i<=0?F:U})]})},De=()=>{const{id:c}=te(),d=H(),[i,y]=r.useState(null),[o,v]=r.useState(null),[a,S]=r.useState(null),[p,O]=r.useState(null),[h,U]=r.useState([]),[g,F]=r.useState([]),[m,b]=r.useState([]),[u,N]=r.useState(""),k=fe(s=>s.user),T=V(),n=c!==k.nickname,[{error:M,fetching:W,data:P}]=le({variables:{nickname:c},pause:G()}),[z]=ae({variables:{uid:i==null?void 0:i.id},pause:G()});return r.useEffect(()=>{M&&console.log(M),P&&y(P==null?void 0:P.getUserByUserName)},[W,c]),r.useMemo(()=>{if(!o)return;if(!o.dob){N("");return}let s=o.dob.split("-").join("/"),x=me(new Date(s).getTime().toString());x&&N(x)},[o==null?void 0:o.dob]),r.useEffect(()=>{var j,R,L;const{error:s,data:x,fetching:q}=z;if(s&&console.log(s),!q&&x){const t=x.getFullUserProfile,$=t==null?void 0:t.profile,J=t==null?void 0:t.followers,K=t==null?void 0:t.following,X=(j=t==null?void 0:t.favorites)==null?void 0:j.favorites,Y=(R=t==null?void 0:t.likes)==null?void 0:R.likes,Z=(L=t==null?void 0:t.history)==null?void 0:L.recentMovies;v($),n||T(re($)),S(J),O(K),U(X),F(Y),b(Z)}},[z,i==null?void 0:i.id]),l(he,{children:[l("div",{className:"pro",children:[l("div",{className:"block",children:[e("div",{className:"icon",children:e(ne,{size:25})}),e("div",{className:"info",children:u===""?"Not Specified":A(u)})]}),o&&o.gender&&l("div",{className:"block",children:[e("div",{className:"icon",children:(o==null?void 0:o.gender)==="male"?e(ce,{size:25}):e(de,{size:25})}),e("div",{className:"info",children:o&&o.gender?o.gender.charAt(0).toUpperCase()+o.gender.slice(1):"Not Specified"})]}),l("div",{className:"block",children:[e("div",{className:"icon",children:e(pe,{size:25})}),e("div",{className:"info",children:o&&o.bio?A(o.bio):"Not Specified"})]})]}),l("div",{className:"follow",children:[l("div",{className:"followers",children:[e("div",{className:"fd",children:"Followers"}),e("div",{className:"pd",children:i&&e(Q,{user:i,followers:a==null?void 0:a.followers,count:i.followerCount?i.followerCount:0})})]}),l("div",{className:"following",children:[e("div",{className:"fd",children:"Following"}),e("div",{className:"pd",children:i&&e(Q,{user:i,following:p==null?void 0:p.following,count:i.followingCount?i.followingCount:0})})]})]}),l("div",{className:"con",children:[l("div",{className:"history box",children:[l("div",{className:"hd",children:[e("div",{children:"Recently watched"}),m.length>0&&e("div",{className:"sm",onClick:s=>{s.stopPropagation(),d(`/activity/${i==null?void 0:i.nickname}/history`)},children:"Show more"})]}),m.length>0?e("div",{className:"bd",children:m.map(s=>e("div",{children:e(E,{movieId:s.id})},s.id))}):e(C,{children:"No titles"})]}),l("div",{className:"fav box",children:[l("div",{className:"hd",children:[e("div",{children:"Favorite Titles"}),h.length>0&&e("div",{className:"sm",onClick:s=>{s.stopPropagation(),d(`/activity/${i==null?void 0:i.nickname}/favorites`)},children:"Show more"})]}),h.length>0?e("div",{className:"bd",children:h.map(s=>e("div",{children:e(E,{movieId:s.id})},s.id))}):e(C,{children:"No titles"})]}),l("div",{className:"liked box",children:[l("div",{className:"hd",children:[e("div",{children:"Liked Titles"}),g.length>0&&e("div",{className:"sm",onClick:s=>{s.stopPropagation(),d(`/activity/${i==null?void 0:i.nickname}/liked`)},children:"Show more"})]}),g.length>0?e("div",{className:"bd",children:g.map(s=>e("div",{children:e(E,{movieId:s.id})},s.id))}):e(C,{children:"No titles"})]})]})]})};export{De as default};
