var co=Object.defineProperty;var po=(t,i,n)=>i in t?co(t,i,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[i]=n;var kt=(t,i,n)=>(po(t,typeof i!="symbol"?i+"":i,n),n);import{c as tt,p as uo,d as ho,l as mo,a as fo,b as gi,e as go,f as xo,g as vo,t as yo,r as a,R as xi,j as e,F as de,s as k,h as r,H as B,A as wo,i as bo,k as E,u as ne,m as O,n as vi,o as ko,q as qi,v as Co,w as W,x as re,y as Y,U as Ie,C as ht,z as mt,M as Et,B as Kt,D as No,E as So,G as Po,I as ue,J as $o,K as Mo,L as To,N as Eo,O as Io,P as ae,Q as He,S as Jt,T as It,V as Uo,_ as oe,W as Qi,X as Fo,Y as Ro,Z as Le,$ as Ao,a0 as Lo,a1 as zo,a2 as Oo,a3 as jo,a4 as Do,a5 as xe,a6 as _o,a7 as Ho,a8 as Go,a9 as Bo,aa as Ge,ab as Be,ac as yi,ad as qo,ae as Qo,af as Wi,ag as Wo,ah as Yt,ai as Yo,aj as Vo,ak as Xo,al as Ut,am as Ft,an as Ko,ao as wi,ap as Jo,aq as Yi,ar as Zo,as as Vi,at as es,au as Xi,av as ts,aw as is,ax as ns,ay as os,az as ss,aA as rs,aB as as,aC as ls,aD as Ki,aE as cs,aF as ds,aG as ps,aH as us,aI as Rt,aJ as hs,aK as ms,aL as fs,aM as gs,aN as xs,aO as vs,aP as ys,aQ as ws,aR as bs,aS as bi,aT as ks,aU as Cs,aV as Ns,aW as Ss,aX as Ps,aY as ki,aZ as $s,a_ as Ms,a$ as Ts,b0 as Es,b1 as Is,b2 as Us,b3 as F,b4 as Fs,b5 as Rs,b6 as As}from"./vendor-baec7a86.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))d(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const u of s.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&d(u)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function d(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}})();"serviceWorker"in navigator&&navigator.serviceWorker.register("/service-worker.js").then(()=>console.log("Service worker registered")).catch(t=>console.error("Error registering service worker",t));const Ls={isNavBarOpen:!1,emojiSearchValue:"",dominantColor:"",isProfileExists:!1,emojiGroupActive:{0:!0,1:!0,2:!0,3:!0,4:!0,5:!0,6:!0,7:!0,8:!0,9:!0,10:!0,11:!0,12:!0}},Ji=tt({name:"misc",initialState:Ls,reducers:{sliceSetNavBar:(t,i)=>({...t,isNavBarOpen:i.payload}),sliceSetIsProfileExists:(t,i)=>({...t,isProfileExists:i.payload}),sliceSetDominantColor:(t,i)=>({...t,dominantColor:i.payload}),sliceSetEmojiSearchValue:(t,i)=>({...t,emojiSearchValue:i.payload}),sliceSetEmojiGroupActive:(t,i)=>{const{key:n,value:d}=i.payload;return{...t,emojiGroupActive:{...t.emojiGroupActive,[n]:d}}}}}),{sliceSetNavBar:Vt,sliceSetDominantColor:Gu,sliceSetIsProfileExists:lt,sliceSetEmojiSearchValue:zs,sliceSetEmojiGroupActive:Ci}=Ji.actions,Os=Ji.reducer,js={isPopupOpened:!1,selectedElement:"",popupData:{}},Zi=tt({name:"popup",initialState:js,reducers:{sliceSetIsPopupOpened:(t,i)=>({...t,isPopupOpened:i.payload}),sliceSetSelectedElement:(t,i)=>({...t,selectedElement:i.payload}),sliceSetPopupData:(t,i)=>({...t,popupData:i.payload}),sliceResetPopup:t=>({...t,popupData:{},isPopupOpened:!1,selectedElement:""})}}),{sliceSetIsPopupOpened:V,sliceSetSelectedElement:Q,sliceSetPopupData:le,sliceResetPopup:Ds}=Zi.actions,_s=Zi.reducer,Hs={fullname:"",dob:"",gender:"",bio:"",createdAt:"",updatedAt:"",userId:"",deletedAt:""},en=tt({name:"user",initialState:Hs,reducers:{sliceSetProfile:(t,i)=>i.payload?i.payload:t,sliceUpdateProfileField:(t,i)=>{const{key:n,value:d}=i.payload;return{...t,[n]:d}}}}),{sliceSetProfile:Zt,sliceUpdateProfileField:Bu}=en.actions,Gs=en.reducer,_t={heading:"Now stream movies with comments",sub:"Moovy provides you a new way to enjoy your streaming experience with a comment section and video filters.",sub2:"Why wait? Install our extension and step up the game with your streaming experience. Please note that We are not affiliated with Netflix.",supported:"Supported Platforms:"},je={LIGHT:"LIGHT",DARK:"DARK"},A=()=>typeof window>"u",Oe={USER:"user",TIME:"time",BASIC:"basic",SPOILER:"spoiler"},te={IMAGE_POP_UP:"IMAGE_POP_UP",BG_POP_UP:"BACKGROUND_CHANGE",EDIT_PROFILE:"EDIT_PROFILE",ADD_COMMENT:"ADD_COMMENT",ADD_REPLY:"ADD_REPLY",OPEN_FOLLOW:"OPEN_FOLLOW",OPEN_LIKES:"OPEN_LIKES",DELETE_COMMENT:"DELETE_COMMENT",DELETE_REPLY:"DELETE_REPLY"},q="https://www.moovychat.com",tn="server.moovychat.com",Bs=`wss://${tn}/graphql`,qs=`https://${tn}/graphql`,Xt="ilkpekdilkpahngoeanmpnkegideejip",ei="https://chrome.google.com/webstore/detail/moovy-chat/ilkpekdilkpahngoeanmpnkegideejip",Qs="https://discord.gg/fndxsG7VcB",Ws="https://twitter.com/MoovyChat",Ys="https://www.tiktok.com/@moovychat?lang=en",Vs="https://www.instagram.com/moovychat/",Xs="https://www.patreon.com/MoovyChatLtd",Ks="https://www.buymeacoffee.com/moovychat",Js={theme:je.DARK},nn=tt({name:"settings",initialState:Js,reducers:{sliceSetTheme:(t,i)=>({...t,theme:i.payload?je.DARK:je.LIGHT})}}),{sliceSetTheme:Zs}=nn.actions,er=nn.reducer,tr={text:"",isTextAreaFocused:!1,isTextAreaClicked:!1,wordSuggestions:[]},on=tt({name:"textArea",initialState:tr,reducers:{sliceSetTextAreaMessage:(t,i)=>({...t,text:i.payload}),sliceSetIsTextAreaFocused:(t,i)=>({...t,isTextAreaFocused:i.payload}),sliceSetIsTextAreaClicked:(t,i)=>({...t,isTextAreaClicked:i.payload}),sliceSetWordSuggestions:(t,i)=>({...t,wordSuggestions:i.payload})}}),{sliceSetTextAreaMessage:ct,sliceSetIsTextAreaFocused:ir,sliceSetIsTextAreaClicked:qu,sliceSetWordSuggestions:Qu}=on.actions,nr=on.reducer,sn={id:"",name:"",email:"",nickname:"",photoUrl:"",bg:"",followerCount:0,followingCount:0,watchedMovies:[],joinedAt:"",updatedAt:"",deletedAt:""},rn=tt({name:"user",initialState:sn,reducers:{sliceSetUser:(t,i)=>i.payload,sliceSetUserNickName:(t,i)=>({...t,nickname:i.payload})}}),{sliceSetUser:Ee,sliceSetUserNickName:an}=rn.actions,or=rn.reducer,sr={key:"root",storage:ho},rr=uo(sr,er),ar={settings:rr,user:or,popup:_s,misc:Os,profile:Gs,textArea:nr},lr=mo(t=>t()),cr=fo(go(yo),gi(t=>{t()}),gi(lr)),ln=xo({reducer:ar,enhancers:[cr]}),dr=vo(ln),pr=()=>(a.useEffect(()=>{xi.initialize("G-N7MNCE11FQ"),xi.pageview(window.location.pathname+window.location.search)},[]),e(de,{})),ft=k.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  color: black;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`,gt=k.div`
  background-color: #fff;
  color: black;
  border-radius: 5px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  padding: 20px;
  max-width: 600px;
  width: 90%;
  max-height: 80vh;
  overflow-y: auto;
`,ur=k.h2`
  margin-bottom: 20px;
`,ke=k.h3`
  margin-bottom: 10px;
`,me=k.p`
  margin-bottom: 20px;
`;k.a`
  color: blue;
  text-decoration: underline;
`;const hr=k.p`
  font-size: 14px;
  color: #666;
  margin-top: 20px;
  text-align: right;
`,mr=()=>r(ft,{children:[r(B,{children:[e("title",{children:"About Us"}),e("meta",{name:"description",content:"About us"}),e("link",{rel:"canonical",href:`${q}/about-us`})]}),r(gt,{children:[e("h1",{children:"About Us"}),e("p",{children:"MoovyChat Ltd. is a startup company that provides a service for enhancing the user's experience on over-the-top (OTT) platforms, such as Netflix, Hulu, and Amazon Prime Video."}),e("p",{children:"Our mission is to help users discover new content, share their opinions with others, and connect with like-minded viewers around the world."}),e("p",{children:"We are a small team of developers, designers, and content enthusiasts who are passionate about movies and TV shows. We believe that technology can make the entertainment experience more social, interactive, and personalized."}),r("p",{children:["For any questions or feedback, please contact us at",e("a",{href:"mailto:support@moovychat.com",children:"support@moovychat.com"})," and ",e("a",{href:"mailto:chatmoovy@gmail.com",children:"chatmoovy@gmail.com"}),"."]})]})]}),fr=k.div`
  display: ${t=>t.contactSelected?"flex":"none"};
  justify-content: center;
  align-items: flex-start;

  .content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    background-color: #333;
    width: 100%;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
    padding: 16px;
    height: 100%;
    border-radius: 14px;

    .name {
      font-size: 24px;
      font-weight: 600;
      margin-right: 16px;
    }

    .time {
      font-size: 12px;
      font-weight: 600;
      opacity: 0.8;
      margin: 10px 0;
    }

    .subject {
      font-size: 18px;
      font-weight: 600;
    }

    .message {
      flex: 1;
      font-size: 16px;
      line-height: 1.5;
      color: #c2c2c2;
      white-space: pre-line;
    }
  }
`,Ni=k.div`
  display: flex;
  align-items: center;
  padding: 10px;
  cursor: pointer;
  border-bottom: 1px solid #ddd;
  background-color: ${t=>!t.read&&"#051f2a"};
  &:last-child {
    border-bottom: none;
  }
`,Si=k.div`
  margin-right: 10px;
`,gr=k.div`
  flex: 1;
  margin-right: 10px;
  font-size: 18px;
  font-weight: 500;
  color: #ffffff;
`,xr=k.div`
  flex: 2;
  margin-right: 10px;
  font-size: 16px;
  color: #999;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`,Ht=k.div`
  display: flex;
  align-items: center;
  .icon-btn {
    padding: 10px;
    :hover {
      box-shadow: inset 0 0 5px;
      border-radius: 50%;
    }
  }
  .time {
    font-size: 12px;
    font-weight: 600;
    opacity: 0.8;
    margin: 10px 0;
  }
`,Ct=k.div`
  margin-left: 10px;
  border: none;
  background-color: transparent;
  color: #ffffff;
  cursor: pointer;

  .dft-btn {
    align-items: center;
    background-color: #ffffff;
    border-radius: 16px;
    box-shadow: #3c4043 0px 1px 2px 0px;
    color: #5f6368;
    display: flex;
    font-size: 14px;
    font-weight: 600;
    line-height: 32px;
    padding: 0 12px;
    text-align: center;
  }
`,vr=k(wo)`
  color: #28a745;
  margin-right: 5px;
  pointer-events: none;
`,Pi=k(bo)`
  color: #dc3545;
  pointer-events: none;
  transition: all 300ms;
`,yr=k.div`
  padding: 10px;
  background-color: rgb(32, 33, 36);
  height: auto;
  min-height: 100dvh;
  font-family: 'Convergence', sans-serif;
  .logo {
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 200px;
      object-fit: contain;
    }
  }
  .parent-container {
    display: flex;
    width: 100%;
    gap: 10px;
    justify-content: center;
    .comments-container {
      flex: 1 1 70%;
      border-radius: 18px;
      overflow: hidden;
    }
    .full-message-container {
      flex: 1 1 30%;
    }
  }
`,wr=k.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  background-color: #333333;
  border-bottom: 1px solid #ddd;

  .title {
    margin-right: 10px;
    font-weight: 600;
  }
`,br=k.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`,$i=k.button`
  border: none;
  background-color: #007bff;
  color: #fff;
  padding: 5px 10px;
  margin-right: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }

  &:disabled {
    background-color: #6c757d;
    cursor: not-allowed;
  }
`,kr=k.div`
  display: flex;
  gap: 3px;
  justify-content: center;
  align-items: center;

  .multi-box {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #ccc;
    border-radius: 4px;
    overflow: hidden;
    height: 30px;
    input[type='radio'] {
      display: none;
    }
    label {
      display: flex;
      justify-content: center;
      align-items: center;
      flex: 1;
      height: 100%;
      font-size: 12px;
      font-weight: bold;
      color: #555;
      background-color: #fff;
      cursor: pointer;
      transition: all 0.3s ease;
      padding: 10px;
      :hover {
        background-color: #f0f0f0;
      }
    }
    input[type='radio']:checked + label {
      color: #fff;
      background-color: #007bff;
      :hover {
        background-color: #0069d9;
      }
    }
  }
`,cn=E`
    fragment FullTitle on Title {
  advisories
  artwork
  boxart
  createdAt
  deletedAt
  id
  rating
  runtime
  storyart
  synopsis
  title
  type
  updatedAt
  year
}
    `,Cr=E`
    fragment FollowNotification on FollowNotifications {
  __typename
  id
  toUserId
  message
  fromUser
  fromUserPhotoUrl
  isRead
  createdAt
  updatedAt
  deletedAt
}
    `,At=E`
    fragment FullComment on Comment {
  __typename
  id
  commentedUserId
  commentedUserName
  message
  likesCount
  repliesCount
  movieId
  platformId
  createdAt
  updatedAt
}
    `,ti=E`
    fragment FullMovie on Movie {
  __typename
  id
  name
  runtime
  platformId
  createdAt
  updatedAt
  thumbs
  season
  likesCount
  commentCount
  viewsCount
  favCount
  titleId
  parentTitleName
  stills
  synopsis
  year
}
    `,ii=E`
    fragment FullProfile on Profile {
  __typename
  bio
  createdAt
  deletedAt
  dob
  fullname
  gender
  updatedAt
  userId
}
    `,qe=E`
    fragment FullReply on Reply {
  __typename
  id
  message
  movieId
  parentCommentId
  commentedUserName
  parentRepliedUser
  parentReplyId
  commentedUserId
  likesCount
  repliesCount
  platformId
  createdAt
  updatedAt
}
    `,be=E`
    fragment FullUser on Users {
  __typename
  id
  email
  name
  nickname
  photoUrl
  bg
  admin
  watchedMovies
  followerCount
  followingCount
  joinedAt
  updatedAt
}
    `,Nr=E`
    fragment LikeNotification on LikeNotifications {
  __typename
  id
  toUserId
  commentId
  replyId
  fromUser
  message
  fromUserPhotoUrl
  isRead
  createdAt
  updatedAt
  deletedAt
}
    `,Sr=E`
    fragment ShortMovie on Movie {
  id
  name
  stills
  thumbs
  year
  runtime
  viewsCount
  platformId
  titleId
  season
  parentTitleName
}
    `,Pr=E`
    fragment ShortTitle on Title {
  id
  artwork
  boxart
  storyart
  title
  type
  runtime
  year
}
    `,$r=E`
    fragment ShortUser on Users {
  id
  name
  photoUrl
  nickname
}
    `,Mr=E`
    mutation DeleteComment($mid: String!, $cid: String!) {
  deleteComment(mid: $mid, cid: $cid) {
    ...FullComment
  }
}
    ${At}`;function Tr(){return ne(Mr)}const Er=E`
    mutation insertComment($options: CommentInput!) {
  insertComment(options: $options) {
    ...FullComment
  }
}
    ${At}`;function Ir(){return ne(Er)}const Ur=E`
    mutation setCommentLike($like: Boolean!, $mid: String!, $cid: String!, $uid: String!) {
  setCommentLike(like: $like, mid: $mid, cid: $cid, uid: $uid) {
    user {
      ...FullUser
    }
    likeStatus {
      id
      like
      movieId
      commentId
      userId
    }
  }
}
    ${be}`;function dn(){return ne(Ur)}const ni=E`
    query getComment($cid: String!) {
  getComment(cid: $cid) {
    ...FullComment
  }
}
    ${At}`;function pn(t){return O({query:ni,...t})}const un=E`
    query GetCommentLikes($limit: Int!, $cid: String!, $page: Int) {
  getCommentLikes(limit: $limit, cid: $cid, page: $page) {
    likes {
      id
      name
      nickname
      photoUrl
      followerCount
      followingCount
    }
    likesCount
    page
    lastPage
  }
}
    `;function hn(t){return O({query:un,...t})}const Fr=E`
    query GetCommentOrReply($type: String!, $id: String!) {
  getCommentOrReply(type: $type, id: $id) {
    comment {
      ...FullComment
    }
    reply {
      ...FullReply
    }
  }
}
    ${At}
${qe}`;function Rr(t){return O({query:Fr,...t})}const Ar=E`
    query getIsUserLikedComment($uid: String!, $cid: String!) {
  getIsUserLikedComment(uid: $uid, cid: $cid) {
    __typename
    id
    isLiked
  }
}
    `;function Lr(t){return O({query:Ar,...t})}const zr=E`
    mutation CreateMessage($message: String!, $subject: String!, $email: String!, $name: String!) {
  createMessage(message: $message, subject: $subject, email: $email, name: $name) {
    id
    name
    email
    subject
    message
    read
    createdAt
    updatedAt
    deletedAt
  }
}
    `;function Or(){return ne(zr)}E`
    mutation DeleteMessages($ids: [String!]!) {
  deleteMessages(ids: $ids)
}
    `;const jr=E`
    query GetAllMessages($limit: Int!, $page: Int, $read: Boolean) {
  getAllMessages(limit: $limit, page: $page, read: $read) {
    id
    name
    email
    message
    read
    createdAt
    updatedAt
    deletedAt
    subject
  }
}
    `;function Dr(t){return O({query:jr,...t})}const _r=E`
    mutation MarkMessageAsRead($markMessageAsReadId: String!) {
  markMessageAsRead(id: $markMessageAsReadId) {
    id
    name
    email
    message
    read
    createdAt
    updatedAt
    deletedAt
  }
}
    `;function Hr(){return ne(_r)}E`
    mutation MarkSelectedMessagesAsRead($ids: [String!]!) {
  markSelectedMessagesAsRead(ids: $ids) {
    id
    name
    email
    message
    read
    createdAt
    updatedAt
    deletedAt
  }
}
    `;const Gr=E`
    query getTitleInfo($getTitleInfoId: String!) {
  getTitleInfo(id: $getTitleInfoId) {
    advisories
    artwork
    boxart
    createdAt
    id
    rating
    runtime
    storyart
    synopsis
    title
    type
    year
  }
}
    `;function mn(t){return O({query:Gr,...t})}const Br=E`
    mutation UpdateUserMovieStats($options: UserMovieOptions!, $mid: String!, $uid: String!) {
  updateUserMovieStats(options: $options, mid: $mid, uid: $uid) {
    like
    favorite
  }
}
    `;function qr(){return ne(Br)}const Lt=E`
    query GetCommentsOfTheMovie($mid: String!, $page: Int, $time: String) {
  getCommentsOfTheMovie(mid: $mid, page: $page, time: $time) {
    id
    movie {
      id
      name
      parentTitleName
    }
    hasMoreComments
    totalCommentCount
    comments {
      id
      commentedUserId
      commentedUserName
      message
      movieId
      likesCount
      repliesCount
      platformId
      toxicityScore
      flagged
      type
      createdAt
      updatedAt
      deletedAt
    }
    lastPage
    pastLoadedCount
  }
}
    `;function Qr(t){return O({query:Lt,...t})}const Wr=E`
    query GetFavTitles($limit: Int!, $uid: String!, $page: Int) {
  getFavTitles(limit: $limit, uid: $uid, page: $page) {
    lastPage
    movieStats {
      favorite
      movieId
      userId
      createdAt
      updatedAt
      deletedAt
      like
    }
    page
    totalCount
  }
}
    `;function Yr(t){return O({query:Wr,...t})}const fn=E`
    query GetLikedTitles($limit: Int!, $uid: String!, $page: Int) {
  getLikedTitles(limit: $limit, uid: $uid, page: $page) {
    movieStats {
      like
      favorite
      movieId
      userId
      createdAt
      updatedAt
      deletedAt
    }
    totalCount
    lastPage
    page
  }
}
    `;function Vr(t){return O({query:fn,...t})}const oi=E`
    query getMovie($mid: String!) {
  getMovie(mid: $mid) {
    ...FullMovie
  }
}
    ${ti}`;function zt(t){return O({query:oi,...t})}const gn=E`
    query GetMoviesByTitleId($first: Int!, $tid: String!, $after: String) {
  getMoviesByTitleId(first: $first, tid: $tid, after: $after) {
    totalCount
    pageInfo {
      endCursor
      hasNextPage
    }
    nodes {
      ...FullMovie
    }
    edges {
      cursor
      node {
        ...FullMovie
      }
    }
  }
}
    ${ti}`;function Xr(t){return O({query:gn,...t})}const xn=E`
    query GetPaginatedTitles($first: Int!, $type: String!, $after: String) {
  getPaginatedTitles(first: $first, type: $type, after: $after) {
    totalCount
    pageInfo {
      endCursor
      hasNextPage
    }
    nodes {
      id
      artwork
      boxart
      storyart
      synopsis
      title
      type
      runtime
      year
      rating
      advisories
      createdAt
      updatedAt
      deletedAt
    }
    edges {
      node {
        id
        artwork
        boxart
        storyart
        synopsis
        title
        type
        runtime
        year
        rating
        advisories
        createdAt
        updatedAt
        deletedAt
      }
      cursor
    }
  }
}
    `;function vn(t){return O({query:xn,...t})}const Kr=E`
    query getTitle($getTitleId: String!) {
  getTitle(id: $getTitleId) {
    title
    synopsis
    storyart
    runtime
    rating
    id
    createdAt
    boxart
    artwork
    advisories
    type
    year
  }
}
    `;function Jr(t){return O({query:Kr,...t})}const Zr=E`
    query GetTrendingTitles($limit: Int!) {
  getTrendingTitles(limit: $limit) {
    movies {
      id
      title
      viewsCount
    }
    shows {
      id
      title
      viewsCount
    }
  }
}
    `;function ea(t){return O({query:Zr,...t})}const yn=E`
    query GetOnlyUserMovieStats($mid: String!, $uid: String!) {
  getOnlyUserMovieStats(mid: $mid, uid: $uid) {
    like
    favorite
    movieId
    userId
    createdAt
    updatedAt
    deletedAt
  }
}
    `;function ta(t){return O({query:yn,...t})}const ia=E`
    mutation ClearNotifications($uid: String!) {
  clearNotifications(uid: $uid)
}
    `;function na(){return ne(ia)}const oa=E`
    mutation ReadNotification($type: String!, $id: Float!, $uid: String!) {
  readNotification(type: $type, id: $id, uid: $uid) {
    follow {
      id
      toUserId
      message
      fromUser
      fromUserPhotoUrl
      isRead
      createdAt
      updatedAt
      deletedAt
    }
    like {
      id
      toUserId
      toUserNickName
      commentId
      replyId
      fromUser
      message
      fromUserPhotoUrl
      isRead
      createdAt
      updatedAt
      deletedAt
    }
  }
}
    `;function sa(){return ne(oa)}const si=E`
    query GetUserNotifications($limit: Int!, $uid: String!, $page: Int) {
  getUserNotifications(limit: $limit, uid: $uid, page: $page) {
    follow {
      ...FollowNotification
    }
    like {
      ...LikeNotification
    }
  }
}
    ${Cr}
${Nr}`;function ra(t){return O({query:si,...t})}const aa=E`
    query GetLinkPreview($url: String!) {
  getLinkPreview(url: $url) {
    description
    image
    title
    isVideo
    videoSrc
    videoType
  }
}
    `;function la(t){return O({query:aa,...t})}const ca=E`
    query GetUserViewHistory($page: Float!, $limit: Float!, $uid: String!) {
  getUserViewHistory(page: $page, limit: $limit, uid: $uid) {
    count
    lastPage
    page
    visited {
      userId
      movieId
      visitCount
      history
      createdAt
      updatedAt
      deletedAt
    }
  }
}
    `;function da(t){return O({query:ca,...t})}const pa=E`
    query GetVisited($mid: String!, $uid: String!) {
  getVisited(mid: $mid, uid: $uid) {
    userId
    movieId
    visitCount
    history
    createdAt
    updatedAt
    deletedAt
  }
}
    `;function ua(t){return O({query:pa,...t})}const ha=E`
    mutation DeleteReply($rid: String!) {
  deleteReply(rid: $rid) {
    ...FullReply
  }
}
    ${qe}`;function ma(){return ne(ha)}const fa=E`
    mutation insertReply($options: ReplyInput!) {
  insertReply(options: $options) {
    ...FullReply
  }
}
    ${qe}`;function ga(){return ne(fa)}const xa=E`
    mutation SetReplyLike($like: Boolean!, $mid: String!, $rid: String!, $uid: String!) {
  setReplyLike(like: $like, mid: $mid, rid: $rid, uid: $uid) {
    user {
      ...FullUser
    }
    likeStatus {
      id
      movieId
      replyId
      like
      updatedAt
      userId
      createdAt
    }
  }
}
    ${be}`;function wn(){return ne(xa)}const va=E`
    query GetIsUserLikedReply($uid: String!, $rid: String!) {
  getIsUserLikedReply(uid: $uid, rid: $rid) {
    id
    isLiked
  }
}
    `;function ya(t){return O({query:va,...t})}const wa=E`
    query getRepliedUser($rid: String!) {
  getRepliedUser(rid: $rid) {
    ...FullUser
  }
}
    ${be}`;function ba(t){return O({query:wa,...t})}const dt=E`
    query GetCommentReplies($cid: String!, $first: Int!, $after: String) {
  getCommentReplies(cid: $cid, first: $first, after: $after) {
    totalCount
    pageInfo {
      endCursor
      hasNextPage
    }
    nodes {
      ...FullReply
    }
    edges {
      node {
        ...FullReply
      }
    }
  }
}
    ${qe}`;function ka(t){return O({query:dt,...t})}const bn=E`
    query GetRepliesOfReply($first: Int!, $rid: String!, $after: String) {
  getRepliesOfReply(first: $first, rid: $rid, after: $after) {
    totalCount
    pageInfo {
      endCursor
      hasNextPage
    }
    nodes {
      ...FullReply
    }
    edges {
      cursor
      node {
        ...FullReply
      }
    }
  }
}
    ${qe}`;function Ca(t){return O({query:bn,...t})}const Na=E`
    query getReply($rid: String!) {
  getReply(rid: $rid) {
    ...FullReply
  }
}
    ${qe}`;function kn(t){return O({query:Na,...t})}const Cn=E`
    query GetReplyLikes($limit: Int!, $rid: String!, $page: Int) {
  getReplyLikes(limit: $limit, rid: $rid, page: $page) {
    page
    likesCount
    lastPage
    likes {
      id
      name
      nickname
      photoUrl
      followerCount
      followingCount
    }
  }
}
    `;function Nn(t){return O({query:Cn,...t})}const Sa=E`
    query GetSearchResults($search: String!) {
  getSearchResults(search: $search) {
    movies {
      ...ShortTitle
    }
    titles {
      ...ShortTitle
    }
    users {
      ...ShortUser
    }
    episodes {
      ...ShortMovie
    }
  }
}
    ${Pr}
${$r}
${Sr}`;function Pa(t){return O({query:Sa,...t})}const $a=E`
    query SearchPeople($page: Float!, $limit: Float!, $search: String!) {
  searchPeople(page: $page, limit: $limit, search: $search) {
    people {
      ...FullUser
    }
    page
    lastPage
  }
}
    ${be}`;function Ma(t){return O({query:$a,...t})}const Ta=E`
    query SearchEpisodes($page: Float!, $limit: Float!, $search: String!) {
  searchEpisodes(page: $page, limit: $limit, search: $search) {
    lastPage
    page
    movies {
      ...FullMovie
    }
  }
}
    ${ti}`;function Ea(t){return O({query:Ta,...t})}const Ia=E`
    query SearchMovies($page: Float!, $limit: Float!, $search: String!) {
  searchMovies(page: $page, limit: $limit, search: $search) {
    page
    lastPage
    titles {
      ...FullTitle
    }
  }
}
    ${cn}`;function Ua(t){return O({query:Ia,...t})}const Fa=E`
    query SearchTitles($page: Float!, $limit: Float!, $search: String!) {
  searchTitles(page: $page, limit: $limit, search: $search) {
    titles {
      ...FullTitle
    }
    page
    lastPage
  }
}
    ${cn}`;function Ra(t){return O({query:Fa,...t})}const Aa=E`
    mutation DecryptData($data: String!, $iv: String!) {
  decryptData(data: $data, iv: $iv)
}
    `;function La(){return ne(Aa)}const za=E`
    mutation createCharge($userId: String!) {
  createCharge(userId: $userId)
}
    `;function Oa(){return ne(za)}const ja=E`
    mutation CreateUser($options: UserInput!) {
  createUser(options: $options) {
    id
    email
    nickname
    name
    photoUrl
    joinedAt
    watchedMovies
    joinedAt
    updatedAt
  }
}
    `;function Sn(){return ne(ja)}const Da=E`
    mutation GetUserMut($uid: String!) {
  getUserMut(uid: $uid) {
    id
    name
    photoUrl
    nickname
  }
}
    `;function _a(){return ne(Da)}const Ha=E`
    mutation IsUserNameExists($text: String!) {
  isUserNameExists(text: $text)
}
    `;function Ga(){return ne(Ha)}const Ba=E`
    mutation login($uid: String!) {
  login(uid: $uid) {
    user {
      ...FullUser
    }
    error
  }
}
    ${be}`;function Pn(){return ne(Ba)}const qa=E`
    mutation logout {
  logout
}
    `;function $n(){return ne(qa)}const Qa=E`
    mutation updateUserBg($url: String!, $uid: String!) {
  updateUserBg(url: $url, uid: $uid) {
    user {
      bg
      deletedAt
      email
      followerCount
      id
      followingCount
      joinedAt
      name
      nickname
      updatedAt
      photoUrl
      watchedMovies
    }
    errors {
      field
      message
    }
  }
}
    `;function Wa(){return ne(Qa)}const Ya=E`
    mutation saveProfilePicture($url: String!, $uid: String!) {
  updateUserProfilePhoto(url: $url, uid: $uid) {
    errors {
      field
      message
    }
    user {
      ...FullUser
    }
  }
}
    ${be}`;function Va(){return ne(Ya)}const Xa=E`
    mutation ToggleFollow($follow: Boolean!, $followingId: String!, $uid: String!) {
  toggleFollow(follow: $follow, followingId: $followingId, uid: $uid) {
    userId
    followingId
    follows
    createdAt
    updatedAt
  }
}
    `;function Ka(){return ne(Xa)}const Ja=E`
    mutation updateProfile($options: InputArgs!) {
  upsertProfile(options: $options) {
    ...FullProfile
  }
}
    ${ii}`;function Mn(){return ne(Ja)}const Za=E`
    query getCommentedUser($cid: String!) {
  getCommentedUser(cid: $cid) {
    ...FullUser
  }
}
    ${be}`;function el(t){return O({query:Za,...t})}const Tn=E`
    query GetFeed($after: String!, $first: Int!, $uid: String!) {
  getFeed(after: $after, first: $first, uid: $uid) {
    totalCount
    pageInfo {
      endCursor
      hasNextPage
    }
    nodes {
      id
      type
      commentedUserId
      compositeKey
      createdAt
      updatedAt
    }
    edges {
      node {
        id
      }
      cursor
    }
  }
}
    `;function tl(t){return O({query:Tn,...t})}const il=E`
    query GetFollowers($limit: Float!, $page: Float!, $uid: String!) {
  getFollowers(limit: $limit, page: $page, uid: $uid) {
    user {
      ...FullUser
    }
    followers {
      ...FullUser
    }
    count
    page
    lastPage
  }
}
    ${be}`;function nl(t){return O({query:il,...t})}const ol=E`
    query GetFollowings($limit: Float!, $page: Float!, $uid: String!) {
  getFollowings(limit: $limit, page: $page, uid: $uid) {
    user {
      ...FullUser
    }
    followings {
      ...FullUser
    }
    count
    page
    lastPage
  }
}
    ${be}`;function sl(t){return O({query:ol,...t})}const En=E`
    query getUserMiniProfile($uid: String!) {
  getFullUserProfile(uid: $uid) {
    id
    followers {
      followerCount
      followers {
        ...FullUser
      }
      id
    }
    following {
      followingCount
      following {
        ...FullUser
      }
      id
    }
    history {
      history {
        history
        deletedAt
        createdAt
        movieId
        updatedAt
        userId
        visitCount
      }
      historyCount
      recentMovies {
        id
        name
        synopsis
        stills
        thumbs
        season
        year
        runtime
        likesCount
        commentCount
        viewsCount
        favCount
        platformId
        titleId
        parentTitleName
        createdAt
        updatedAt
        deletedAt
      }
      id
    }
    profile {
      ...FullProfile
    }
    likes {
      likesCount
      likes {
        id
        likesCount
        name
        parentTitleName
        platformId
        runtime
        season
        stills
        synopsis
        thumbs
        viewsCount
        year
        updatedAt
        titleId
        commentCount
        createdAt
        deletedAt
        favCount
      }
      id
    }
    favorites {
      favCount
      favorites {
        id
        name
        synopsis
        stills
        thumbs
        season
        year
        runtime
        likesCount
        commentCount
        viewsCount
        favCount
        platformId
        titleId
        parentTitleName
        createdAt
        updatedAt
        deletedAt
      }
      id
    }
  }
}
    ${be}
${ii}`;function rl(t){return O({query:En,...t})}const al=E`
    query getUser($uid: String!) {
  getUser(uid: $uid) {
    ...FullUser
  }
}
    ${be}`;function In(t){return O({query:al,...t})}const Un=E`
    query getUserByNickName($nickname: String!) {
  getUserByUserName(nickname: $nickname) {
    ...FullUser
  }
}
    ${be}`;function Fn(t){return O({query:Un,...t})}const ll=E`
    query getUserFullName($uid: String!) {
  getUserFullName(uid: $uid)
}
    `;function cl(t){return O({query:ll,...t})}const dl=E`
    query GetUserProfile($uid: String!) {
  getUserProfile(uid: $uid) {
    ...FullProfile
  }
}
    ${ii}`;function Rn(t){return O({query:dl,...t})}const An=E`
    query isFollowingUser($fid: String!, $uid: String!) {
  isFollowingUser(fid: $fid, uid: $uid)
}
    `;function pl(t){return O({query:An,...t})}const ri=E`
    query me {
  me {
    ...FullUser
  }
}
    ${be}`;function Ot(t){return O({query:ri,...t})}const Ln=E`
    query GetCommentsOfTheUser($first: Int!, $uid: String!, $after: String) {
  getCommentsOfTheUser(first: $first, uid: $uid, after: $after) {
    totalCount
    pageInfo {
      endCursor
      hasNextPage
    }
    nodes {
      id
      commentedUserId
      commentedUserName
      message
      movieId
      likesCount
      repliesCount
      platformId
      toxicityScore
      flagged
      type
      createdAt
      updatedAt
      deletedAt
    }
    edges {
      node {
        id
        commentedUserId
        commentedUserName
        message
        movieId
        likesCount
        repliesCount
        platformId
        toxicityScore
        flagged
        type
        createdAt
        updatedAt
        deletedAt
      }
      cursor
    }
  }
}
    `;function ul(t){return O({query:Ln,...t})}const zn=E`
    query GetRepliesOfTheUser($first: Int!, $uid: String!, $after: String) {
  getRepliesOfTheUser(first: $first, uid: $uid, after: $after) {
    totalCount
    pageInfo {
      endCursor
      hasNextPage
    }
    nodes {
      ...FullReply
    }
    edges {
      cursor
      node {
        ...FullReply
      }
    }
  }
}
    ${qe}`;function hl(t){return O({query:zn,...t})}E`
    query users {
  users {
    id
  }
}
    `;const ai=t=>{let n=Date.now()-parseInt(t);const d=1e3*60,o=d*60,s=o*24,u=s*365,p=Math.round(n/u),l=Math.round(n/o),c=Math.round(n/s),h=Math.round(n/d);let f="";return p===0?c===0?l===0?h===0?f="Just now":f=`${h}m`:f=`${l}h`:f=`${De(t)}`:f=`${De(t)}`,f},St=t=>{let i=parseInt(t);return!isNaN(i)},et=t=>Intl.NumberFormat("en-US",{notation:"compact",maximumFractionDigits:1}).format(t),On=t=>{if(!t)return;let i=parseInt(t);return new Intl.DateTimeFormat("en-GB",{dateStyle:"full",timeStyle:"long"}).format(i).toString()},De=t=>{if(!t)return;let i=parseInt(t);return new Intl.DateTimeFormat("en-US",{year:"numeric",month:"short",day:"numeric"}).format(i).toString()},Mi=t=>t.split(" ").map(i=>{if(i.startsWith("@"))return{message:i,type:Oe.USER};if(i.includes(":")){let n=i.split(":"),d=n.length===3?n[0]:"0",o=d!=="0"?n[1]:n[0],s=d!=="0"?n[2]:n[1];return St(d)&&St(o)&&St(s)?{message:i,type:Oe.TIME}:{message:i,type:Oe.BASIC}}else return{message:i,type:Oe.BASIC}}),$t=t=>{const i=/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/g,n=t.replace(i,o=>`<a href="${o}" target='_blank'>${o}</a>`);vi.addHook("afterSanitizeAttributes",function(o){"target"in o&&o.setAttribute("target","_blank"),!o.hasAttribute("target")&&(o.hasAttribute("xlink:href")||o.hasAttribute("href"))&&o.setAttribute("xlink:show","new")});let d=vi.sanitize(n,{ALLOWED_TAGS:["a"],ADD_ATTR:["target"]});return ko(d)};async function ml(t){return new Promise((i,n)=>{const d=document.createElement("canvas"),o=d.getContext("2d"),s=new Image;s.src=URL.createObjectURL(t),s.onload=()=>{d.width=s.width,d.height=s.height,o==null||o.drawImage(s,0,0),d.toBlob(u=>{u?i(u):n(null)},"image/jpeg",.5)}})}const fl=k.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  .lds-ellipsis {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
  }
  .lds-ellipsis div {
    position: absolute;
    top: 33px;
    width: 13px;
    height: 13px;
    border-radius: 50%;
    background: #fff;
    animation-timing-function: cubic-bezier(0, 1, 1, 0);
  }
  .lds-ellipsis div:nth-child(1) {
    left: 8px;
    animation: lds-ellipsis1 0.6s infinite;
    background-color: #12c7fa;
  }
  .lds-ellipsis div:nth-child(2) {
    left: 8px;
    animation: lds-ellipsis2 0.6s infinite;
    background-color: #5a6cf3;
  }
  .lds-ellipsis div:nth-child(3) {
    left: 32px;
    animation: lds-ellipsis2 0.6s infinite;
    background-color: #28a9f9;
  }
  .lds-ellipsis div:nth-child(4) {
    left: 56px;
    animation: lds-ellipsis3 0.6s infinite;
    background-color: #12c7fa;
  }
  @keyframes lds-ellipsis1 {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
  @keyframes lds-ellipsis3 {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(0);
    }
  }
  @keyframes lds-ellipsis2 {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(24px, 0);
    }
  }
`,ie=()=>r(fl,{children:[r(B,{children:[e("title",{children:"Loading..."}),e("meta",{name:"description",content:"Loading..."})]}),r("div",{className:"lds-ellipsis",children:[e("div",{}),e("div",{}),e("div",{}),e("div",{})]})]}),pt="/assets/moovy-text-logo-white-6bb6d5c8.png",jn=k.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 99vh;
  font-family: 'Convergence, sans-serif';
  gap: 15px;
  .logo {
    width: 30%;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  .loading {
  }
`,gl=()=>{const[t,i]=a.useState(1),[n,d]=a.useState(null),[o,s]=a.useState([]),[u,p]=a.useState(null),[l,c]=a.useState(null),[,h]=Hr(),[{data:f,fetching:g,error:m}]=Dr({variables:{page:t,limit:10,read:u}}),[x]=Ot();if(a.useEffect(()=>{const{data:y,fetching:N,error:P}=x;if(P&&console.log(P),y&&!N){const $=y.me;c(()=>$)}},[x]),m)return r("div",{children:["Error: ",m.message]});const v=y=>{y.stopPropagation(),h({markMessageAsReadId:y.target.id})},b=y=>{const N=y.target.value;p(N==="all"?null:N==="read")},C=(f==null?void 0:f.getAllMessages)||[];return g&&x.fetching?r(jn,{children:[e("div",{className:"logo",children:e("img",{src:pt,alt:"Moovy"})}),e("div",{className:"loading",children:e(ie,{})})]}):l!=null&&l.admin?r(yr,{contactSelected:n!==null,children:[r(B,{children:[e("title",{children:"Admin"}),e("meta",{name:"description",content:"Admin"}),e("link",{rel:"canonical",href:`${q}/admin`})]}),e("div",{className:"logo",children:e("img",{src:pt,alt:"Moovy"})}),r("div",{className:"parent-container",children:[r("div",{className:"comments-container",children:[r(wr,{children:[e(Si,{children:e("input",{type:"checkbox",onChange:y=>{y.stopPropagation(),y.target.checked?s(C):s([])}})}),e("div",{className:"title",children:o.length>0?`Selected ${o.length} items`:r(kr,{children:[r("div",{className:"multi-box",children:[e("input",{type:"radio",id:"all",name:"all",value:"all",checked:u===null,onChange:b}),e("label",{htmlFor:"all",children:"All"}),e("input",{type:"radio",id:"read",name:"read",value:"read",checked:u===!0,onChange:b}),e("label",{htmlFor:"read",children:"Read"}),e("input",{type:"radio",id:"unread",name:"unread",value:"unread",checked:u===!1,onChange:b}),e("label",{htmlFor:"unread",children:"Unread"})]}),e("p",{children:"Admin Inbox"})]})}),o.length>0&&r(Ht,{className:"options",children:[e(Ct,{children:e("div",{className:"dft-btn",children:"Mark as Read"})}),e(Ct,{children:e(Pi,{size:20})})]})]}),C.length>0?C.map(y=>r(Ni,{read:y.read,id:y.id,onClick:N=>{N.stopPropagation(),d(y),h({markMessageAsReadId:y.id})},children:[e(Si,{children:e("input",{type:"checkbox",checked:o.some(N=>N.id===y.id),onChange:N=>{N.stopPropagation();const P=N.target.checked;s($=>P?[...$,y]:$.filter(T=>T.id!==y.id))}})}),e(gr,{children:y.name}),e(xr,{children:y.subject}),o.some(N=>N.id===y.id)?r(Ht,{children:[e(Ct,{id:y.id,onClick:v,className:"icon-btn",children:e(vr,{size:20})}),e(Ct,{className:"icon-btn",id:y.id,children:e(Pi,{size:20})})]}):e(Ht,{children:e("div",{className:"time",children:On(y.createdAt)})})]},y.id)):e(Ni,{children:e("h3",{children:"Inbox is Empty!!"})}),r(br,{children:[e($i,{disabled:t<=1,onClick:()=>i(y=>y-1),children:"Previous"}),e($i,{disabled:C.length<10,onClick:()=>i(y=>y+1),children:"Next"})]})]}),e(fr,{className:"full-message-container",contactSelected:n!==null,children:n&&r("div",{className:"content",children:[e("div",{className:"name",children:n.name}),e("div",{className:"time",children:De(n.createdAt)}),e("div",{className:"subject",children:n.subject}),e("div",{className:"message",children:n.message})]})})]})]}):e("div",{children:"You don't have access to this page."})},xl=k.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  overflow: auto;
  .top {
    position: relative;
    width: 100%;
    min-height: 280px;
    overflow: hidden;
    :hover {
      transition: all 0.5s;
      .cover-photo {
        box-shadow: 0 0 15px;
      }
    }
    .cover-photo {
      width: 100%;
      position: absolute;
      top: 4px;
      /* aspect-ratio: 1.77; */
      height: 200px;
      z-index: 0;
      box-shadow: 0 0 10px;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .change-background {
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0px 12px;
      top: 150px;
      right: 10px;
      background-color: #ffffffb4;
      border-radius: 6px;
      color: #1c1e21;
      font-size: 12px;
      line-height: 16px;
      width: auto;
      height: 40px;
      z-index: 1;
      .add-cover {
        font-weight: 600;
        color: #050505;
        line-height: 20px;
        margin-left: 4px;
      }
      :hover {
        cursor: pointer;
        background-color: #f2f2f2;
      }
    }
    .user-photo {
      position: absolute;
      display: flex;
      top: 160px;
      left: 50px;
      width: calc(100% - 50px);
      /* ::before {
        content: '';
        position: absolute;
        top: -5px;
        left: -5px;
        width: 110px;
        height: 110px;
        border-radius: 50%;
        background: black;
        z-index: -1;
      } */
      .user-container {
        position: relative;
        width: 100px;
        height: 100px;
        .edit {
          position: absolute;
          display: flex;
          justify-content: center;
          align-items: center;
          right: 0;
          bottom: 0;
          width: 20px;
          height: 20px;
          background-color: #ffffff;
          color: black;
          border-radius: 50%;
          padding: 6px;
          :hover {
            cursor: pointer;
            background-color: #f2f2f2;
          }
        }
      }
      .user-info {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: flex-start;
        margin-left: 10px;
        width: 80%;
        .name {
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 15px;
          .main {
            font-weight: bold;
          }
          .us {
            opacity: 0.7;
            font-weight: 600;
            margin-left: 10px;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100%;
          }
          .i {
            margin-left: 5px;
            cursor: pointer;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 5px;
            :hover {
              border-radius: 50%;
              box-shadow: inset 0 0 10px;
            }
            :active {
              box-shadow: inset 0 0 20px;
            }
          }
        }
        .time {
          font-size: 14px;
          font-weight: 550;
          opacity: 0.6;
        }
        .follow {
          position: absolute;
          right: 0;
          top: 0;
        }
      }
    }
  }
  .sub-division {
    width: 100%;
    position: relative;
    .comments {
      overflow: initial;
      .child {
        overflow: initial;
      }
    }
  }

  @media (max-width: 400px) {
    .top {
      min-height: 160px;
      .cover-photo {
        height: 110px;
      }
      .change-background {
        top: 60px;
        font-size: 10px;
        padding: 0px 8px;
        height: 30px;
      }
      .user-photo {
        top: 75px;
        left: 20px;
        ::before {
          top: 0px;
          left: 0px;
          width: 0px;
          height: 0px;
        }
        .user-container {
          width: 70px;
          height: 70px;
        }
        .user-info {
          margin-left: 5px;
          .name {
            font-size: 12px;
          }
          .time {
            font-size: 11px;
          }
        }
      }
    }
  }
`,vl=k.div`
  display: flex;
  flex-direction: column;
  width: 98%;
  height: calc(100% - 390px);
  justify-content: flex-start;
  align-items: center;
  .pro {
    display: flex;
    flex-direction: column;
    width: 99%;
    font-size: 0.9rem;
    margin: 10px 0;
    .block {
      display: flex;
      padding: 5px;
      font-weight: 600;
      opacity: 0.8;
      .icon {
        display: flex;
        justify-content: center;
        align-items: center;
        flex: 1 1 10%;
      }
      .info {
        flex: 1 1 90%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        overflow: hidden;
        white-space: pre-wrap;
        font-size: 0.9em;
        ::first-letter {
          text-transform: capitalize;
        }
      }
    }
  }
  .follow {
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 99%;
    border: 1px solid;
    .followers,
    .following {
      padding: 20px 0;
      flex: 1 1 50%;
      display: flex;
      flex-direction: column;
      .fd {
        font-size: 15px;
        font-weight: 600;
        padding-bottom: 10px;
      }
      .pd {
        display: flex;
      }
    }
    .followers {
      padding-left: 20px;
    }
    .following {
      padding-right: 20px;
    }
  }
  .con {
    width: 99.5%;
    height: 50%;

    .box {
      display: flex;
      flex-direction: column;
      width: 100%;
      .hd {
        padding: 20px;
        background: ${t=>t.theme.background};
        font-size: 0.9rem;
        font-weight: 600;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 95%;
        .sm {
          font-size: 0.6rem;
          margin-right: 10px;
          :hover {
            cursor: pointer;
            text-decoration: underline;
          }
        }
      }
      .bd {
      }
    }
  }

  @media (max-width: 400px) {
    height: calc(100% - 215px);
    .pro {
      font-size: 0.6rem;
      .block {
        padding: 2px;
        .icon {
          svg {
            height: 20px;
            width: 20px;
          }
        }
      }
    }
    .follow {
    }
    .con {
    }
  }
`,Gt=k.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-weight: 600;
  padding: 10px;
  margin-bottom: 20px;
`,yl=k.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 100%;
  .title {
    flex: 1 1 20%;
    font-size: 0.8rem;
    font-weight: 600;
    display: flex;
    justify-content: flex-end;
    padding-right: 10px;
    align-items: center;
    color: ${t=>t.error&&t.error!=="none"?"red":t.theme.text};
  }
  .in {
    flex: 1 1 60%;
    display: flex;
    justify-content: center;
    align-items: center;
    input,
    select,
    textarea {
      font-family: inherit;
      width: 100%;
      padding: 10px;
      color: ${t=>t.theme.text};
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      background-color: transparent;
      box-shadow: 0 0 10px, inset 0 0 5px;
      border-radius: 10px;
      outline: none;
      :focus {
        box-shadow: 0 0 3px 3px #22b3e8;
      }
    }
  }
  .light-container {
    flex: 1 1 10%;
    display: flex;
    justify-content: center;
    align-items: center;
    .light {
      border-radius: 50%;
      background-color: ${t=>t.error==="none"?"#43586b":t.error===""?"#00ff00":"#ff0000"};
      box-shadow: 0 0 15px 6px
          ${t=>t.error==="none"?"#43586b":t.error===""?"#00ff00":"#ff0000"},
        inset 0 0 4px black;
      height: 15px;
      width: 15px;
      display: flex;
    }
  }
`,K=qi,L=Co;var Pe=(t=>(t.LEFT="left",t.RIGHT="right",t.TOP="top",t.BOTTOM="bottom",t.BOTTOM_RIGHT="bottom-right",t.TOP_RIGHT="top-right",t.TOP_LEFT="top-left",t.BOTTOM_LEFT="bottom-left",t))(Pe||{}),Je=(t=>(t.USER="USER",t))(Je||{}),ut=(t=>(t.EMOJI="EMOJI",t.HEADER_OPTIONS="HEADER_OPTIONS",t))(ut||{});const Dn=t=>a.createElement("svg",{id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 2000 2000",style:{enableBackground:"new 0 0 2000 2000"},xmlSpace:"preserve",...t},a.createElement("style",{type:"text/css"},`\r
	.st0{fill:#12C7FA;}\r
	.st1{fill:#5A6CF3;}\r
	.st2{fill:#28A9F9;}\r
	.st3{fill:#ffffff}\r
`),a.createElement("g",null,a.createElement("g",null,a.createElement("g",null,a.createElement("polygon",{className:"st3",points:"1126.17,1214.58 502.18,1574.84 502.18,425.16 595.85,479.24 596.05,1412.23 1016.5,1169.52  "}),a.createElement("polygon",{className:"st0",points:"802.15,598.33 802.15,706.73 690,641.99 690,533.59  "}),a.createElement("polygon",{className:"st1",points:"1214.68,836.52 1214.68,944.95 1102.56,880.2 1102.56,771.77  "}),a.createElement("polygon",{className:"st2",points:"1008.42,717.43 1008.42,825.82 896.3,761.08 896.3,652.68  "}),a.createElement("polygon",{className:"st3",points:"1497.82,1000 1129.45,1212.7 1129.45,1104.31 1308.83,1000.7 1308.83,890.87  "}),a.createElement("path",{className:"st0",d:"M792.53,1000c0,24.17-19.61,43.79-43.79,43.79c-24.17,0-43.79-19.61-43.79-43.79 c0-24.17,19.61-43.79,43.79-43.79C772.91,956.21,792.53,975.83,792.53,1000z"}),a.createElement("path",{className:"st2",d:"M951.69,1000c0,12.88-5.57,24.41-14.42,32.42c-7.78,7.04-18.04,11.37-29.37,11.37 c-24.17,0-43.79-19.61-43.79-43.79c0-20.15,13.65-37.08,32.19-42.18c3.69-1.01,7.58-1.61,11.6-1.61c12,0,22.83,4.83,30.74,12.64 C946.69,976.77,951.69,987.8,951.69,1000z"}),a.createElement("path",{className:"st1",d:"M1110.84,1000c0,24.17-19.58,43.79-43.79,43.79c-24.17,0-43.75-19.61-43.75-43.79 c0-24.17,19.58-43.79,43.75-43.79c14.65,0,27.56,7.21,35.51,18.21C1107.76,981.63,1110.84,990.45,1110.84,1000z"}))))),Mt="/assets/moovy-white-3d6f1ba5.svg",X=({src:t,alt:i,id:n,onClick:d,ref:o,className:s,lazy:u,onLoad:p})=>{const[l,c]=a.useState("1"),[h,f]=a.useState(!0);return a.useEffect(()=>{const g=setInterval(()=>{c(Math.random().toString(36).substring(7))},5e3);return()=>clearInterval(g)},[]),r(de,{children:[e("img",{src:t,alt:i,ref:o,onError:()=>f(()=>!0),onLoad:()=>{f(()=>!1)},style:{display:h?"none":"block"},className:s,id:n,loading:u?"lazy":"eager",onClick:d},l),e("div",{style:{display:h?"flex":"none",maxHeight:"100px"},children:e(Dn,{})})]})},wl=k.div`
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
`,Bt="/assets/moovy-logo-white-31b52ad5.jpg",bl="10px",kl=k.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  .component {
    position: relative;
  }
  .tooltip {
    position: absolute;
    display: ${t=>t.visible?"flex":"none"};
    left: 50%;
    transform: translateX(-50%);
    border-radius: 10px;
    line-height: 1;
    z-index: 999;
    width: ${t=>t.width};
    height: ${t=>t.height};
    justify-content: center;
    align-items: center;
  }
  .tooltip.bottom-right {
    bottom: calc((${t=>t.height}) * -1);
    left: calc((${t=>t.width}) * 0.5);
  }
  .tooltip.bottom-left {
    bottom: calc((${t=>t.height}) * -1);
    right: calc((${t=>t.width}) * 0.5);
  }
  .tooltip.bottom {
    bottom: calc((${t=>t.height}) * -1);
  }
  .tooltip.top {
    top: calc((${t=>t.height}) * -1);
  }
  .tooltip.right {
    left: calc((${t=>t.width}) * 0.3);
    top: 50%;
    transform: translateX(0) translateY(-50%);
    border-right-color: ${t=>t.theme.background};
  }
  .tooltip.left {
    left: auto;
    right: calc(100% + ${bl});
    top: 50%;
    transform: translateX(0) translateY(-50%);
  }
`,Cl=k.div`
  position: relative;
  padding: 10px 20px;
  font-size: 14px;
  font-weight: 700;
  border-radius: 10px;
  background: transparent;
  box-shadow: inset 0 0 2px;

  :hover {
    cursor: pointer;
    background-color: ${t=>t.isFollowingUser?"transparent":t.theme.body};
    color: ${t=>t.isFollowingUser&&"red"};
  }
`,xt=({userId:t,nickName:i})=>{const n=L(f=>f.user),d=n.id!==t,[o,s]=a.useState(!1),[u,p]=a.useState(!1),[,l]=Ka(),[c]=pl({variables:{uid:n.id,fid:t},pause:A()});return a.useMemo(()=>{const{data:f,error:g,fetching:m}=c;if(g&&console.log(g),!m&&f){const x=f.isFollowingUser;p(()=>x)}},[c]),e("div",{className:"follow",onMouseEnter:()=>s(()=>!0),onMouseLeave:()=>s(()=>!1),children:d&&e(Cl,{className:"follow-btn",color:u?"#13dbde31":"#de1328",isFollowingUser:u,onClick:f=>{f.stopPropagation(),p(!u),l({uid:n.id,followingId:t,follow:!u}).then(g=>{var b;const{error:m,data:x}=g;m&&console.log(m);const v=(b=x==null?void 0:x.toggleFollow)==null?void 0:b.follows;v!=null&&p(v)})},children:u?o?"UnFollow":"Following":"Follow"})})},Ti=k.div`
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
`,Ce=({src:t,user:i,tooltip:n})=>{const d=W(),o=s=>{s.stopPropagation(),i&&d(`/profile/${i==null?void 0:i.nickname}`)};return e(re.Fragment,{children:n?e(Ti,{onClick:o,id:"blur-escape",children:e("img",{src:t,alt:"profilePic",id:"blur-escape",loading:"lazy"})}):e(Pt,{height:"140px",width:"200px",data:i==null?void 0:i.id,message:Je.USER,children:e(Ti,{id:"blur-escape",children:e(X,{src:t,alt:"profilePic",lazy:!0})})})})},Nl=k.div`
  display: flex;
  position: relative;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 100%;
  border-radius: 18px;
  overflow: hidden;
  transition: all 0.5s;
  background-image: url(${t=>t.bg});
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
`,Sl=({userId:t})=>{const[i,n]=a.useState(null),[d]=In({variables:{uid:t},pause:A()});return a.useMemo(()=>{const{data:o,error:s,fetching:u}=d;if(s&&console.log(s),!u&&o){const p=o.getUser;n(()=>p)}},[d]),d.fetching?e(ie,{}):d.error?e(de,{children:"Error"}):e(Nl,{bg:i==null?void 0:i.bg,children:r("div",{className:"container",children:[r("div",{className:"first",children:[e("div",{className:"pic",children:e(Ce,{src:i==null?void 0:i.photoUrl,tooltip:!0})}),r("div",{className:"text",children:[r("div",{className:"username",children:["@",i==null?void 0:i.nickname]}),e("div",{className:"joined",children:De(i==null?void 0:i.joinedAt)})]})]}),r("div",{className:"second",children:[e("div",{className:"sec-follow",children:e(xt,{userId:i==null?void 0:i.id,nickName:i==null?void 0:i.nickname})}),r("div",{className:"batch",children:[e("div",{className:"name",children:"Followers"}),e("div",{className:"count",children:i!=null&&i.followerCount?i==null?void 0:i.followerCount:0})]}),r("div",{className:"batch",children:[e("div",{className:"name",children:"Following"}),e("div",{className:"count",children:i!=null&&i.followingCount?i==null?void 0:i.followingCount:0})]})]})]})})},Pt=({children:t,dir:i=Pe.BOTTOM,message:n,height:d,width:o,data:s})=>{const[u,p]=a.useState(!1),[l,c]=a.useState(!1);a.useEffect(()=>{window.matchMedia("(pointer: coarse)").matches?c(!0):c(!1)},[]);const h=a.useCallback(()=>{switch(n){case Je.USER:return e(Sl,{userId:s});default:return e("div",{})}},[n]);return r(kl,{className:"tooltip-wrapper",dir:i,height:d,width:o,visible:u,onMouseEnter:()=>p(!0),onMouseLeave:()=>p(!1),children:[e("div",{className:"component",children:t}),!l&&e("div",{className:`tooltip ${i||Pe.BOTTOM}`,children:e(h,{})})]})},Ei=({followers:t,following:i,count:n,user:d})=>{var x,v,b,C,y,N;const o=W(),s=K();let[u,p]=a.useState([]),[l,c]=a.useState(!1);const h=P=>{o(`/profile/${P}`)};a.useEffect(()=>{t?(p(t),c(!0)):i&&p(i)},[t,i]);let f=l?`${n} followers`:`${n} following`;const g=P=>{P.stopPropagation();const $={data:d.id,type:l?"Followers":"Following",isFollower:l};Y.unstable_batchedUpdates(()=>{s(le($)),s(V(!0)),s(Q(te.OPEN_FOLLOW))})};let m=l?"No followers":"0 following";return r(wl,{children:[r("div",{className:"gp",children:[e("div",{className:"one profile-box",children:u[0]?e(Pt,{height:"140px",message:Je.USER,width:"200px",data:(x=u[0])==null?void 0:x.id,dir:t?Pe.BOTTOM_RIGHT:Pe.BOTTOM,children:e(X,{src:(v=u[0])==null?void 0:v.photoUrl,alt:"profile",onClick:P=>{P.stopPropagation(),h(u[0].nickname)}})}):e(X,{src:Bt,alt:"profile"})}),e("div",{className:"two profile-box",children:u[1]?e(Pt,{height:"140px",message:Je.USER,width:"200px",data:(b=u[1])==null?void 0:b.id,dir:Pe.BOTTOM,children:e(X,{src:(C=u[1])==null?void 0:C.photoUrl,alt:"profile",onClick:P=>{P.stopPropagation(),h(u[1].nickname)}})}):e(X,{src:Bt,alt:"profile"})}),e("div",{className:"three profile-box",children:u[2]?e(Pt,{height:"140px",message:Je.USER,width:"200px",data:(y=u[2])==null?void 0:y.id,dir:i?Pe.BOTTOM_LEFT:Pe.BOTTOM,children:e(X,{src:(N=u[2])==null?void 0:N.photoUrl,alt:"profile",onClick:P=>{P.stopPropagation(),h(u[2].nickname)}})}):e(X,{src:Bt,alt:"profile"})})]}),e("div",{className:"count",onClick:g,children:n<=0?m:f})]})},li=k.div`
  display: flex;
  width: 90%;
  justify-content: center;
  align-items: center;
  margin: 10px 20px;
  border-radius: 3px;
  background-image: url(${t=>t.bg});
  background-size: cover;
  background-repeat: no-repeat;
  cursor: pointer;
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 3px;
    backdrop-filter: blur(5px) brightness(60%);
    .thumbs {
      flex: 1 1 15%;
      padding: 0 10px;
      overflow: hidden;
      img {
        height: 120px;
        width: 100%;
        object-fit: cover;
      }
    }
    .info {
      flex: 1 1 85%;
      width: 85%;
      overflow: hidden;
    }
  }
`,_n=Ie`
    0% {
        transform: scale(0.2);
      }
      40% {
        transform: scale(1.2);
      }
      100% {
        transform: scale(1);
      }
`,Pl=Ie`
 to {
    background-position-x: -200%;
  }
`;Ie`
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
`;Ie`
   0% {
    -ms-transform: rotateY(0deg);
    -moz-transform: rotateY(0deg);
    -webkit-transform: rotateY(0deg);
    -o-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }
  100% {
    -ms-transform: rotateY(360deg);
    -moz-transform: rotateY(360deg);
    -webkit-transform: rotateY(360deg);
    -o-transform: rotateY(360deg);
    transform: rotateY(360deg);
  }
`;Ie`
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
`;Ie`
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
`;Ie`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;Ie`
    0% {
      height: 0px;
    }
    100% {
      height: 100px;
    }
`;const $l=()=>ht`
  color: ${t=>t.theme.mention};
`,Ml=k.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 99%;
  min-height: 120px;
  justify-content: space-evenly;
  align-items: ${t=>t.isReply?"flex-end":"center"};
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
        color: ${t=>t.theme.mention};
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
            color: ${t=>t.theme.mention};
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
        max-height: ${t=>t.showMore?t.cardHeight:t.isHover?"200px":"100px"};
        transition: max-height 0.5s;
        white-space: pre-line;
        .message-box {
        }
        .time,
        .user {
          ${$l()};
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
          animation: ${_n} 0.3s linear forwards;
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
          background-color: ${t=>t.theme.themeType==="light"?" #c4c4c4":" #343434"};
        }
        :active {
          background-color: ${t=>t.theme.themeType==="light"?" #aeaeae":" #535353"};
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
          background-color: ${t=>t.theme.themeType==="light"?" #c4c4c4":" #343434"};
        }
        :active {
          background-color: ${t=>t.theme.themeType==="light"?" #aeaeae":" #535353"};
        }
      }
    }
  }
`,Tl=k.div`
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
      border: 1px solid ${t=>t.theme.border};
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
            animation: ${_n} 0.3s linear forwards;
            :hover {
            }
          }
        }
      }
    }
  }
`,Hn=k.span`
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
`,_e=({movie:t,title:i})=>{var v;const n=mt(),[d,o]=a.useState(!1),s=W(),[,u]=qr(),p=L(b=>b.user),[l,c]=a.useState(null),[h]=ua({variables:{uid:p.id,mid:t==null?void 0:t.id},pause:!!(A()||i)});a.useEffect(()=>{const{data:b,error:C,fetching:y}=h;if(!y&&b){const N=b.getVisited;if(N!==null){const P=N.history,$=JSON.parse(P.slice(-1)[0]);c(()=>$)}}},[h]);const[f]=ta({variables:{uid:p.id,mid:t==null?void 0:t.id},pause:A()}),g=b=>{b.stopPropagation(),t&&n.pathname!==`/show/${t.titleId}`&&s(`/show/${t.titleId}`)},m=b=>{b.stopPropagation(),i?n.pathname!==`/movie/${i.id}`&&s(`/movie/${i.id}`):n.pathname!==`/movie/${t==null?void 0:t.id}`&&s(`/movie/${t==null?void 0:t.id}`)},x=b=>{b.stopPropagation(),o(!d),u({uid:p.id,mid:t==null?void 0:t.id,options:{like:!d}}).then(C=>{const{data:y,error:N}=C;if(N&&console.log(N),y){const $=y.updateUserMovieStats.like;o($)}})};return a.useEffect(()=>{const{data:b,error:C,fetching:y}=f;if(C&&console.log(C),!y&&b){const N=b==null?void 0:b.getOnlyUserMovieStats,P=N==null?void 0:N.like;P&&o(()=>P)}},[f]),r(Tl,{children:[e("div",{className:"title",children:e("span",{onClick:m,children:t?t.name:i==null?void 0:i.title})}),t&&t.parentTitleName&&e("div",{className:"parent",children:e("span",{onClick:g,children:t==null?void 0:t.parentTitleName})}),e("div",{className:"group",children:t?r(re.Fragment,{children:[t.season&&e("div",{className:"year",children:`${t.season}`}),t.year&&r("div",{className:"year",children:[" Year ",t.year]}),e("div",{className:"year",children:t.runtime&&`${Math.round(t.runtime/60)} min`})]}):r(re.Fragment,{children:[e("div",{className:"year",children:i&&i.type}),i&&((v=i.advisories)==null?void 0:v.map((b,C)=>e("div",{className:"year",children:b},C))),(i==null?void 0:i.rating)&&e("div",{className:"year",children:i==null?void 0:i.rating})]})}),r("div",{className:"synopsis",children:[e("div",{className:"a",children:"Synopsis"}),e("div",{className:"b",children:t?t.synopsis:i==null?void 0:i.synopsis})]}),t&&r("div",{className:"stats-container",children:[r("div",{className:"stats",children:[r("div",{className:"likes",onClick:x,children:[e("div",{className:"count",children:t==null?void 0:t.likesCount}),e("div",{className:"icon",children:d?e(Et,{size:20,fill:"#ff005d"}):e(Kt,{size:20})})]}),r("div",{className:"comments",children:[e("div",{className:"count",children:t==null?void 0:t.commentCount}),e("div",{className:"icon",children:e(No,{size:20,fill:"violet"})})]}),r("div",{className:"views",children:[e("div",{className:"count",children:t==null?void 0:t.viewsCount}),e("div",{className:"icon",children:e(So,{size:20,fill:"#00dfff"})})]})]}),l&&(l==null?void 0:l.visitTime)&&e("div",{className:"stats ",children:r("div",{className:"likes history",children:[e("div",{className:"icon",children:e(Po,{size:20})}),e("div",{className:"count",children:De((l==null?void 0:l.visitTime)+"")})]})})]})]})},Ze=({movieId:t})=>{const i=W(),n=mt();L(l=>l.user);const[d,o]=a.useState(null),[s,u]=zt({variables:{mid:t},pause:A()});a.useMemo(()=>{const{data:l,error:c,fetching:h}=s;if(c&&console.log(c),!h&&l){const f=l.getMovie;o(()=>f)}},[s]);const p=l=>{l.stopPropagation(),n.pathname!==`/movie/${t}`&&i(`/movie/${t}`)};return e(li,{bg:d==null?void 0:d.stills,onClick:p,children:r("div",{className:"container",children:[e("div",{className:"thumbs",children:e(X,{src:d==null?void 0:d.thumbs,alt:"movie"})}),e("div",{className:"info",children:e(_e,{movie:d})})]})})},El=()=>{const{id:t}=ue(),i=W(),[n,d]=a.useState(null),[o,s]=a.useState(null),[u,p]=a.useState(null),[l,c]=a.useState(null),[h,f]=a.useState([]),[g,m]=a.useState([]),[x,v]=a.useState([]),[b,C]=a.useState(""),y=L(S=>S.user),N=K(),P=t!==y.nickname,[{error:$,fetching:T,data:w}]=Fn({variables:{nickname:t},pause:A()}),[M]=rl({variables:{uid:n==null?void 0:n.id},pause:A()});return a.useEffect(()=>{$&&console.log($),w&&d(w==null?void 0:w.getUserByUserName)},[T,t]),a.useMemo(()=>{if(!o)return;if(!o.dob){C("");return}let S=o.dob.split("-").join("/"),I=De(new Date(S).getTime().toString());I&&C(I)},[o==null?void 0:o.dob]),a.useEffect(()=>{var j,G,D;const{error:S,data:I,fetching:R}=M;if(S&&console.log(S),!R&&I){const _=I.getFullUserProfile,he=_==null?void 0:_.profile,J=_==null?void 0:_.followers,Ne=_==null?void 0:_.following,Fe=(j=_==null?void 0:_.favorites)==null?void 0:j.favorites,H=(G=_==null?void 0:_.likes)==null?void 0:G.likes,se=(D=_==null?void 0:_.history)==null?void 0:D.recentMovies;s(he),P||N(Zt(he)),p(J),c(Ne),f(Fe),m(H),v(se)}},[M,n==null?void 0:n.id]),r(vl,{children:[r("div",{className:"pro",children:[r("div",{className:"block",children:[e("div",{className:"icon",children:e($o,{size:25})}),e("div",{className:"info",children:b===""?"Not Specified":$t(b)})]}),o&&o.gender&&r("div",{className:"block",children:[e("div",{className:"icon",children:(o==null?void 0:o.gender)==="male"?e(Mo,{size:25}):e(To,{size:25})}),e("div",{className:"info",children:o&&o.gender?o.gender.charAt(0).toUpperCase()+o.gender.slice(1):"Not Specified"})]}),r("div",{className:"block",children:[e("div",{className:"icon",children:e(Eo,{size:25})}),e("div",{className:"info",children:o&&o.bio?$t(o.bio):"Not Specified"})]})]}),r("div",{className:"follow",children:[r("div",{className:"followers",children:[e("div",{className:"fd",children:"Followers"}),e("div",{className:"pd",children:n&&e(Ei,{user:n,followers:u==null?void 0:u.followers,count:n.followerCount?n.followerCount:0})})]}),r("div",{className:"following",children:[e("div",{className:"fd",children:"Following"}),e("div",{className:"pd",children:n&&e(Ei,{user:n,following:l==null?void 0:l.following,count:n.followingCount?n.followingCount:0})})]})]}),r("div",{className:"con",children:[r("div",{className:"history box",children:[r("div",{className:"hd",children:[e("div",{children:"Recently watched"}),x.length>0&&e("div",{className:"sm",onClick:S=>{S.stopPropagation(),i(`/activity/${n==null?void 0:n.nickname}/history`)},children:"Show more"})]}),x.length>0?e("div",{className:"bd",children:x.map(S=>e("div",{children:e(Ze,{movieId:S.id})},S.id))}):e(Gt,{children:"No titles"})]}),r("div",{className:"fav box",children:[r("div",{className:"hd",children:[e("div",{children:"Favorite Titles"}),h.length>0&&e("div",{className:"sm",onClick:S=>{S.stopPropagation(),i(`/activity/${n==null?void 0:n.nickname}/favorites`)},children:"Show more"})]}),h.length>0?e("div",{className:"bd",children:h.map(S=>e("div",{children:e(Ze,{movieId:S.id})},S.id))}):e(Gt,{children:"No titles"})]}),r("div",{className:"liked box",children:[r("div",{className:"hd",children:[e("div",{children:"Liked Titles"}),g.length>0&&e("div",{className:"sm",onClick:S=>{S.stopPropagation(),i(`/activity/${n==null?void 0:n.nickname}/liked`)},children:"Show more"})]}),g.length>0?e("div",{className:"bd",children:g.map(S=>e("div",{children:e(Ze,{movieId:S.id})},S.id))}):e(Gt,{children:"No titles"})]})]})]})},Il=k.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  max-width: 100%;
  min-width: 0;
  justify-content: flex-start;
  align-items: center;
  .heading {
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }

  .content {
    overflow: auto;
    height: 100%;
    width: 100%;
  }
`,Tt=k.div`
  display: flex;
  flex-wrap: wrap;
  overflow: auto;
  height: 100%;
  max-width: 100%;
  min-width: 0;
  justify-content: center;
  align-items: flex-start;
`,Ul=k.div`
  height: 121px;
  width: 215px;
  cursor: pointer;
  position: relative;
  margin: 10px;
  .container {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 0;
    height: 121px;
    width: 215px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: height 0.5s, width 0.5s;
    .title-bg {
      height: 100%;
      width: 100%;
      img {
        height: 100%;
        width: 100%;
        object-fit: cover;
      }
    }

    .info {
      width: 95%;
      height: 70px;
      background: black;
      color: white;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: flex-start;
      font-weight: 600;
      padding: 10px;
      box-shadow: inset 0px -3px 10px 1px #575757;
      .title {
        font-size: 1rem;
      }
      .title-attr {
        display: flex;
        font-size: 0.6rem;
        text-transform: capitalize;

        div {
          margin: 5px 0px;
          padding: 3px;
          border: 1px solid white;
        }
      }
    }
  }

  :hover {
    .container {
      height: ${t=>t.hover&&"220px"};
      width: ${t=>t.hover&&"300px"};
      z-index: 10;
      top: 50%;
      left: 50%;
      transform: ${t=>t.hover?t.styledHover:"translateX(-50%) translateY(-50%)"};
      overflow: hidden;
      border-radius: ${t=>t.hover&&"10px"};
      .title-bg {
        overflow: hidden;

        img {
          transform: scale(2);
          transition: transform 50s;
        }
      }

      .info {
      }
    }
  }
`,Fl=k.div`
  position: sticky;
  top: 0;
  padding: 5px 0;
  display: flex;
  align-items: center;
  z-index: 5;
  width: 100%;
  backdrop-filter: blur(10px);
  .back-button {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    padding: 4px;
    margin-left: 2px;
    :hover {
      cursor: pointer;
      background-color: #ffffff2c;
      box-shadow: 0 0 5px;
    }
    :active {
      background-color: #ffffffa2;
    }
  }
  .header-text {
    font-size: 1.1rem;
    margin-left: 10px;
  }
`,Rl=k.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .main-container {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: auto;
    top: 10%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    .cc {
      width: 90%;
      margin: 10px 20px;
    }
    .comment-container {
      position: relative;
      /* top: ${t=>t.isReply?"27%":"8%"}; */
      display: flex;
      width: 90%;
      flex-direction: column;
      .inner {
        position: relative;
        width: 100%;
        height: 100%;
        .comment-usr-detail {
          display: flex;
          align-items: center;
          .user-container {
            display: flex;
            width: 50%;
            height: 100px;
            align-items: center;
            padding-left: 20px;
            .user {
              width: 55px;
              height: 55px;
            }
            .name {
              padding: 10px;
              font-size: 1.1em;
              font-weight: 550;
            }
          }
          .options-container {
            display: flex;
            width: 50%;
            height: 100px;
            align-items: center;
            justify-content: flex-end;

            .follow {
              padding: 0 10px;
            }
            .option {
              display: flex;
              justify-content: center;
              align-items: center;
              border-radius: 50%;
              margin-right: 20px;
              width: 30px;
              height: 30px;
              position: relative;
              .option-icon {
                width: 30px;
                height: 30px;
                display: flex;
                justify-content: center;
                align-items: center;
                border-radius: 50%;
              }
              .option-window {
                position: absolute;
                z-index: 10;
                width: 180px;
                height: 200px;
                top: 45px;
                right: 0px;
                border-radius: 10px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                font-size: 0.8em;
                align-items: center;
                box-shadow: 0px 0px 5px, 0px 0px 3px 1px;
                background: ${t=>t.theme.body};
                .opo {
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  gap: 10px;
                  padding: 10px 0;
                  width: 98%;
                  .opo-icon {
                    flex: 1 1 20%;
                    display: flex;
                    justify-content: flex-end;
                    align-items: center;
                  }
                  .opo-text {
                    flex: 1 1 80%;
                  }
                  :hover {
                    background-color: ${t=>t.theme.hoverColor};
                    color: white;
                  }
                }
                .delete {
                  color: #f8021f;
                }
                ::before {
                  content: ' ';
                  position: absolute;
                  top: -6px;
                  right: 10px;
                  width: 0;
                  height: 0;
                  pointer-events: none;
                  border-left: 5px solid transparent;
                  border-right: 5px solid transparent;
                  border-bottom: 5px solid;
                }
              }
              :hover {
                cursor: pointer;
                background-color: #ffffff2c;
                box-shadow: 0 0 5px;
              }
              :active {
                background-color: #ffffffa2;
              }
            }
          }
        }

        .comment-usr-msg {
          padding-left: 20px;
          /* max-height: 60%; */
          .cm-us-xt {
            width: 100%;
            font-size: 1.3em;
            padding-bottom: 10px;
            max-height: ${t=>t.showMore?t.cardHeight:"200px"};
            overflow: hidden;
            transition: all 0.4s;
            white-space: pre-line;
            .time,
            .user {
              color: ${t=>t.theme.mention};
              :hover {
                cursor: pointer;
                text-decoration: underline;
                text-underline-offset: 2px;
              }
            }
          }
          .show-more {
            font-weight: 600;
            font-size: 12px;
            color: ${t=>t.theme.mention};
            text-decoration: underline;
            margin-bottom: 10px;
            cursor: pointer;
          }
        }
        .comment-usr-time {
          padding-left: 20px;
          opacity: 0.8;
          font-weight: 600;
          font-size: 0.7em;
        }
        .comment-usr-stats {
          display: flex;
          width: 100%;
          align-items: center;
          justify-content: space-around;
          border-top: 0.3px solid;
          border-bottom: 0.3px solid;
          margin: 10px 0;
          .cus {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 5px 10px;
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
                background-color: ${t=>t.theme.themeType==="light"?" #c4c4c4":" #343434"};
              }
              :active {
                background-color: ${t=>t.theme.themeType==="light"?" #aeaeae":" #535353"};
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
                background-color: ${t=>t.theme.themeType==="light"?" #c4c4c4":" #343434"};
              }
              :active {
                background-color: ${t=>t.theme.themeType==="light"?" #aeaeae":" #535353"};
              }
            }
          }
          .likes {
            svg {
              :hover {
                color: red;
              }
            }
          }
        }

        .movie-chips {
          display: flex;
          font-size: 0.5rem;
          font-weight: 600;
          margin: 5px 15px;
          .name {
            width: fit-content;
            block-size: fit-content;
            padding: 5px 8px;
            border-radius: 10px;
            color: #ffffff;
            background-color: #a42525;
            :hover {
              text-decoration: underline;
              text-decoration-color: white;
              text-decoration-thickness: 1px;
              cursor: pointer;
            }
          }
          .title {
            background-color: #2c4bc9;
            color: white;
            margin-right: 6px;
            :hover {
              text-decoration: underline;
              text-decoration-color: black;
              text-decoration-thickness: 1px;
              cursor: pointer;
            }
          }
        }
        .show-details {
          position: relative;
          font-size: 0.8em;
          font-weight: normal;
          overflow: hidden;
          border-radius: 10px;
          padding: ${t=>t.showEpisodeInfo||t.showTitleInfo?"10px":"0px"};
          height: 300px;
          max-height: ${t=>t.showEpisodeInfo||t.showTitleInfo?"180px":"0px"};
          transition: max-height 1s;
          .bg {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: #000000;
            opacity: 0.5;
            cursor: pointer;
            filter: blur(1px);
            z-index: -1;
            img {
              width: 100%;
              height: 100%;
              object-fit: cover;
              animation: fadeIn 0.6s linear forwards,
                scaleUp 10s linear forwards;
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
        }
        .comment-replies {
          width: 100%;
          height: auto;
          .no-data {
            width: 80%;
            text-align: center;
            margin: 60px;
            font-size: 1.1em;
            font-weight: 500;
          }
        }
      }
    }
  }
`,Al=k.div`
  padding: 10px 20px;
  font-size: 0.9em;
  font-weight: 700;
  border-radius: 10px;
  color: white;
  background-color: ${t=>t.color};
  :hover {
    cursor: pointer;
    background-color: ${t=>t.isFollowingUser?"transparent":t.color};
    box-shadow: ${t=>t.isFollowingUser&&"inset 0 0 2px red"};
    color: ${t=>t.isFollowingUser&&"red"};
  }
`,Gn=k.div`
  font-size: 1em;
  font-weight: 700;
`,$e=({text:t,className:i,children:n})=>{const d=W();return r(Fl,{className:i,children:[e("div",{className:"back-button",onClick:s=>{s.stopPropagation(),d(-1)},children:e(Io,{size:30})}),e(Gn,{className:"header-text",children:t||n})]})},Ll=k.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  border-top: 1px solid rgba(255, 255, 255, 0.4);
  padding: 10px;
  font-weight: 600;
  transition: all 0.5s;
  .nav {
    text-decoration: none;
    color: #929292;
    margin: 0 10px;
    padding: 10px;
    font-size: 14px;
    cursor: pointer;
    position: relative;

    &:before {
      content: '';
      position: absolute;
      left: 50%;
      bottom: -2px;
      width: 0%;
      height: 2px;
      background-color: ${t=>t.theme.nav};
      transition: width 0.3s ease-out, left 0.3s ease-out;
    }

    &:hover {
      color: ${t=>t.theme.nav};
      &:before {
        width: 100%;
        left: 0;
      }
    }

    &.active {
      font-weight: bold;
      color: ${t=>t.theme.nav};

      &:before {
        width: 100%;
        left: 0;
      }
    }

    @media (prefers-reduced-motion: no-preference) {
      &:before {
        transition-duration: 0.6s;
        transition-timing-function: cubic-bezier(0.22, 0.61, 0.36, 1);
        transition-delay: 0.05s;
      }

      &:hover:before,
      &.active:before {
        transition-duration: 0.3s;
        transition-timing-function: cubic-bezier(0.22, 0.61, 0.36, 1);
        transition-delay: 0s;
      }
    }
  }
`,jt=({children:t,className:i})=>e(Ll,{className:i,children:t}),zl=()=>(a.useEffect(()=>{document.title="Catalog - Moovy"},[]),r(Il,{children:[e($e,{text:"Catalog",className:"child-header"}),r(jt,{className:"options",children:[e(ae,{to:"",end:!0,className:"movies nav",defaultChecked:!0,children:e("div",{children:"Movies"})}),e(ae,{to:"/catalog/shows",className:"shows nav",children:e("div",{children:"Shows"})})]}),e("div",{className:"content",children:e(He,{})})]})),Ol=k.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  left: 69%;
  bottom: 5%;
  background-color: #6d0e85;
  box-shadow: inset 0 0 7px black, 0 0 5px;
  cursor: pointer;
  transition: all 0.4s;
  svg {
    fill: white;
  }
  :hover {
    box-shadow: inset 0 0 5px black, 0 0 12px;
  }
  :active {
    box-shadow: inset 0 0 10px black, 0 0 5px;
  }
`,Bn=({type:t,data:i})=>{const n=K(),d=L(s=>s.popup.isPopupOpened);return e(Ol,{onClick:s=>{s.stopPropagation(),d?Y.unstable_batchedUpdates(()=>{n(V(!1)),n(Q("")),n(le({}))}):(Y.unstable_batchedUpdates(()=>{n(V(!0)),t==="movie"?n(Q(te.ADD_COMMENT)):t==="comment"&&n(Q(te.ADD_REPLY))}),n(le(i)))},isOpen:d,children:e(Jt,{size:30})})},jl=k.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 99%;
  height: 100%;
  .logo {
    width: 30%;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  .text {
    font-size: 1rem;
    margin-top: 1rem;
    font-weight: 500;
  }
  //Enter to
  &.empty-enter-active {
    opacity: 0;
    transition: opacity 300ms ease-in;
  }
  //Enter to
  &.empty-enter-done {
    opacity: 1;
    transition: opacity 300ms ease-in;
  }

  // exit from
  &.empty-exit {
    opacity: 1;
    transition: opacity 300ms ease-in;
  }

  // exit to
  &.empty-exit-active {
    opacity: 1;
    transition: opacity 300ms ease-in;
  }
  // exit to
  &.empty-exit-done {
    background-color: #ff005d;
    opacity: 0;
    transition: opacity 300ms ease-in;
  }
`,Dl="/assets/moovy-text-58a51989.png",ve=({msg:t})=>{const i=a.useRef(!1),n=a.useRef(null);return a.useEffect(()=>(i.current=!0,()=>{i.current=!1}),[]),e(It,{in:i.current,classNames:"empty",timeout:500,nodeRef:n,children:r(jl,{children:[e("div",{className:"logo",children:e("img",{src:Dl,alt:"Moovy"})}),e("div",{className:"text",children:t})]})})},ci=()=>r(jn,{children:[r(B,{children:[e("title",{children:"Loading..."}),e("meta",{name:"description",content:"Loading..."})]}),e("div",{className:"logo",children:e("img",{src:pt,alt:"Moovy"})}),e("div",{className:"loading",children:e(ie,{})})]}),_l=k.div`
  display: flex;
  position: relative;
  width: 100%;
  max-height: ${t=>t.showMore?t.cardHeight:"100px"};
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 2px 1px;
  border-radius: 18px;
  transition: max-height 0.3s;
  cursor: pointer;
  .photo {
    align-self: flex-start;
    margin-top: 10px;
    width: 40px;
    height: 40px;
  }
  .data {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: calc(100% - 50px);
    padding-bottom: 15px;
    height: 100%;
    .name {
      font-size: 0.9em;
      font-weight: 600;
      margin-top: 10px;
      margin-left: 10px;
      display: flex;
      align-items: center;
      gap: 10px;
      .time {
        font-size: 0.6em;
        opacity: 0.6;
      }
    }
    .msg {
      display: block;
      font-size: 0.8em;
      margin-top: 10px;
      margin-left: 10px;
      white-space: pre-line;
      padding-bottom: 10px;
      width: 98%;
      overflow: hidden;
      transition: max-height 0.5s;
    }
    .show-more {
      font-weight: 600;
      font-size: 0.8em;
      color: ${t=>t.theme.mention};
    }
  }
`,Dt=({id:t,type:i,className:n,extendData:d})=>{const o=W(),[s,u]=a.useState(null),p=a.useRef(null),[l,c]=a.useState(""),[h,f]=a.useState(!1),[g,m]=a.useState(!1),[,x]=_a(),[v]=Rr({variables:{id:t,type:i},pause:A()}),b=a.useRef(null);return a.useEffect(()=>{var P;const{data:C,error:y,fetching:N}=v;if(y&&console.log(y),!N&&C){const $=C.getCommentOrReply;p.current=$!=null&&$.comment?$.comment:$==null?void 0:$.reply,x({uid:(P=p==null?void 0:p.current)==null?void 0:P.commentedUserId}).then(T=>{const{data:w,error:M}=T;if(M&&console.log(M),w){const S=w.getUserMut;u(()=>S)}})}},[v]),a.useEffect(()=>{if(!b||!b.current)return;const{clientHeight:C,scrollHeight:y}=b.current;c(()=>`${y}px`),C<y?f(()=>!0):f(()=>!1)},[b.current]),e(_l,{className:n,cardHeight:l,showMore:g,onClick:C=>{C.stopPropagation(),i==="reply"?o(`/reply/${t}`):i==="comment"&&o(`/comment/${t}`)},children:p.current?r(re.Fragment,{children:[e("div",{className:"photo",children:e(Ce,{src:s==null?void 0:s.photoUrl,user:s,tooltip:!0})}),r("div",{className:"data",children:[r("div",{className:"name",children:[e("span",{children:s&&s.nickname}),e("span",{className:"time",children:ai(p.current.createdAt)})]}),e("div",{className:"msg",ref:b,children:p.current.message}),h&&d&&e("div",{className:"show-more",onClick:C=>{C.stopPropagation(),m(!g)},children:g?"Show less":"Show more"})]})]}):e("div",{className:"not-found",children:"The comment/reply has been deleted."})})};const Hl=k.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 99%;
  min-height: 120px;
  justify-content: space-evenly;
  background-color: transparent;
  overflow: hidden;
  cursor: pointer;
  align-items: center;
  box-shadow: inset 0 0 7px 0px ${t=>t.theme.hoverColor};
  background: ${t=>` linear-gradient(110deg, ${t.theme.trendingTiles} 8%, ${t.theme.hoverColor} 18%, ${t.theme.trendingTiles} 33%)`};
  border-radius: 5px;
  background-size: 200% 100%;
  animation: 1s ${Pl} linear infinite;
  pointer-events: none;
  :first-child {
    margin-top: 10px;
  }
  .content {
    display: flex;
    width: 95%;
    align-items: flex-start;
    font-size: 14px;
    padding-top: 10px;
    .user-pic {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background-color: ${({theme:t})=>t.loadingCard};
    }
    .message {
      display: flex;
      padding-left: 15px;
      width: calc(100% - 50px);
      flex-direction: column;
      justify-content: center;
      padding-bottom: 10px;
      gap: 10px;
      .username {
        width: 100px;
        height: 12px;
        background-color: ${({theme:t})=>t.loadingCard};
        border-radius: 18px;
      }
      .msg {
        width: 60%;
        height: 10px;
        background-color: ${({theme:t})=>t.loadingCard};
        border-radius: 18px;
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
    .c {
      display: flex;
      -webkit-box-pack: center;
      justify-content: center;
      -webkit-box-align: center;
      align-items: center;
      margin: 5px 0px;
      width: 50px;
      height: 20px;
      background-color: ${({theme:t})=>t.loadingCard};
      border-radius: 18px;
    }
  }
`,Gl=()=>r(Hl,{children:[r("div",{className:"content",children:[e("div",{className:"user-pic"}),r("div",{className:"message",children:[e("div",{className:"username"}),e("div",{className:"msg"}),e("div",{className:"msg"})]})]}),r("div",{className:"options",children:[e("div",{className:"c"}),e("div",{className:"c"}),e("div",{className:"c"})]})]}),Bl=k.div`
  display: flex;
  width: calc(100% - 75px);
  align-self: end;
  border-radius: 18px;
  overflow: hidden;
  margin: 10px;
  box-shadow: 0 0 4px ${t=>t.theme.themeType==="dark"?"#8b8b8b":""};
  .link-image {
    position: relative;
    width: 150px;
    height: 120px;
    img {
      width: 150px;
      height: 100%;
      object-fit: cover;
    }
    .play-btn {
      position: absolute;
      display: flex;
      width: 50px;
      justify-content: space-evenly;
      align-items: center;
      left: 50%;
      top: 50%;
      font-size: 15px;
      z-index: 10;
      transform: translate(-50%, 40%);
      border: 1px solid;
      padding: 5px 15px;
      border-radius: 15px;
      font-size: 12px;
      font-weight: 600;
      backdrop-filter: brightness(0.2);
    }
  }
  .link-data {
    display: flex;
    flex-direction: column;
    padding: 5px 10px;
    .link-title {
      font-size: 14px;
      width: 100%;
      font-weight: 600;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .link-desc {
      font-size: 12px;
      font-weight: 500;
      margin-top: 5px;
      width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .link-sub {
      display: inline-block;
      font-size: 10px;
      font-weight: 500;
      margin-top: 5px;
      width: 100%;
    }
  }
`,ql=t=>{const[i,n]=a.useState(null),d=/(https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*))/;return a.useMemo(()=>{const o=t.match(d);n(o?()=>o[0]:null)},[t]),i},Ql=({text:t})=>{const i=ql(t),[n,d]=a.useState(""),[o,s]=a.useState(null),[u]=la({variables:{url:i},pause:A()&&i===null});return a.useEffect(()=>{if(i===null)return;const{error:p,fetching:l,data:c}=u;if(p&&console.log(p),!l&&c){const h=c.getLinkPreview;s(h),console.log({linkData:c})}},[u]),a.useEffect(()=>{var l;if(!i)return;let p=(l=Uo.parse(i).hostname)==null?void 0:l.replace("www.","");p&&(p=p.charAt(0).toUpperCase()+p.slice(1),d(p))},[i]),!o||!(o!=null&&o.image)||!i?e(re.Fragment,{}):r(Bl,{onClick:p=>{p.stopPropagation(),i&&window.open(i,"_open")},children:[e("div",{className:"link-image",onClick:p=>{p.stopPropagation(),i&&window.open(i,"_open")},children:e(X,{src:o.image,alt:"link-image",className:"link-img"})}),r("div",{className:"link-data",onClick:p=>{p.stopPropagation(),i&&window.open(i,"_open")},children:[e("div",{className:"link-title",children:n}),e("div",{className:"link-desc",children:o.title}),e("div",{className:"link-sub",children:o.description})]})]})},qn=t=>{const[i,n]=a.useState([]);return a.useMemo(()=>{let d=[];if(t){let o=t,s=0,u=0;for(;u<o.length;){let p=o.substring(u,o.length),l=p.indexOf("<s>"),c=p.indexOf("</s>");if(l===-1||c===-1||l>c)break;if(l>0){let h=p.substring(0,l),f=Mi(h);d=oe.concat(d,f)}if(l<c){let h={type:Oe.SPOILER,message:p.substring(l+3,c)};d.push(h)}u+=c+4,u<=o.length&&(s=u)}if(s!==o.length&&s<o.length){let p=o.substring(s,o.length),l=Mi(p);d=oe.concat(d,l)}n(d)}},[t]),i},Qn=({goToComment:t,comment:i,updateLike:n,like:d,likeCount:o,isMain:s,type:u})=>{var it,nt;const p=W(),l=a.useRef(!1),c=i.movieId,[h,f]=a.useState(!1),[g,m]=a.useState(!1),x=i.commentedUserId,v=L(z=>z.user),b=x===v.id,[C,y]=a.useState(null),[N,P]=a.useState(""),[$,T]=a.useState(null),w=a.useRef(null);let M=a.useRef(!1);const S=a.useRef(null);let I=a.useRef(!1);const R=!isNaN(parseInt(i.parentCommentId)),j=a.useRef(null),[G,D]=a.useState(!1),[_,he]=a.useState(!1),J=K(),[Ne,Fe]=a.useState("");let H=1e3;const[se]=In({variables:{uid:x},pause:b&&A()}),[pe]=zt({variables:{mid:c},pause:s||A()}),[Se]=mn({variables:{getTitleInfoId:N}});a.useEffect(()=>(l.current=!0,()=>{l.current=!1}),[l.current]);const ce=z=>{z.stopPropagation(),M.current=!0,setTimeout(()=>{M.current&&f(!0)},H)},we=z=>{z.stopPropagation(),M.current=!1,setTimeout(()=>{f(!1)},H)},fe=z=>{z.stopPropagation(),I.current=!0,setTimeout(()=>{I.current&&m(!0)},H)},Qe=z=>{z.stopPropagation(),I.current=!1,setTimeout(()=>{m(!1)},H)};a.useEffect(()=>{if(s)return;const{data:z,error:U,fetching:Z}=pe;if(!Z&&z){const Me=z.getMovie;y(()=>Me),P(()=>Me.titleId)}},[pe,s]),a.useEffect(()=>{const{data:z,fetching:U,error:Z}=Se;if(!U&&z){const Me=z.getTitleInfo;T(()=>Me)}},[Se]),a.useEffect(()=>{const{data:z,fetching:U,error:Z}=se;if(!U&&z){const Me=z.getUser;w.current=Me}},[w.current,se]);let Re=qn(i.message);a.useEffect(()=>{if(!j||!j.current)return;const{clientHeight:z,scrollHeight:U}=j.current;Fe(()=>`${U}px`),z<U?D(()=>!0):D(()=>!1)},[j.current]);const vt=z=>{z.stopPropagation(),Y.unstable_batchedUpdates(()=>{J(V(!0)),J(Q(te.ADD_REPLY)),J(le(i))})},yt=z=>{z.stopPropagation();const U={data:i.id,type:"Liked",isReply:R};Y.unstable_batchedUpdates(()=>{J(le(U)),J(V(!0)),J(Q(te.OPEN_LIKES))})},wt=z=>{z.stopPropagation(),Y.unstable_batchedUpdates(()=>{J(V(!0)),J(le(i)),u==="comment"?J(Q(te.DELETE_COMMENT)):u==="reply"&&J(Q(te.DELETE_REPLY))})},Ae=document.querySelector("div");return Ae.setAttribute("tabindex","0"),Ae.setAttribute("role","button"),Ae.setAttribute("href","#"),Ae.addEventListener("click",function(){this.getAttribute("tabindex")==="0"?this.setAttribute("tabindex","-1"):this.setAttribute("tabindex","0")}),pe.fetching||Se.fetching?e(Gl,{}):e(It,{in:l.current,classNames:"comment",timeout:300,nodeRef:S,children:r(Ml,{tabIndex:0,role:"button",onClick:t,showEpisodeInfo:h,showTitleInfo:g,episodePoster:C==null?void 0:C.stills,titlePoster:$==null?void 0:$.artwork,isHover:h||g,cardHeight:Ne,showMore:_,children:[e("div",{className:"bg",children:!s&&h?e(X,{src:C==null?void 0:C.stills,alt:"background-image"},"episode"):!s&&g?e(X,{src:$==null?void 0:$.artwork,alt:"background-image"},"title"):e(de,{})}),r("div",{className:"content",children:[e("div",{className:"user-pic",children:e("div",{className:"pic-container",children:e(Ce,{src:b?v.photoUrl:(it=w.current)==null?void 0:it.photoUrl,user:b?v:w.current,tooltip:!0})})}),r("div",{className:"message",onClick:t,children:[r("div",{className:"username",children:[r("div",{className:"container",children:[e("div",{className:"user",children:b?v.nickname:(nt=w.current)==null?void 0:nt.nickname}),e("div",{className:"time",children:i.createdAt==="Posting..."?"Posting...":ai(i.createdAt)})]}),R&&r("div",{className:"isReply",children:[e("span",{children:"Replying to"})," ",r("span",{className:"ru",onClick:z=>{z.stopPropagation(),p(`/profile/${i.parentRepliedUser}`)},children:["@",i.parentRepliedUser]})]}),!s&&r("div",{className:"movie",children:[$&&($==null?void 0:$.type)==="show"&&e(re.Fragment,{children:r("div",{className:"name title",onMouseEnter:fe,onMouseLeave:Qe,onClick:z=>{z.stopPropagation(),p(`/show/${$==null?void 0:$.id}`)},children:[$==null?void 0:$.title," ",C==null?void 0:C.season]})}),e("div",{className:"name episode",onMouseEnter:ce,onMouseLeave:we,onClick:z=>{z.stopPropagation(),p(`/movie/${C==null?void 0:C.id}`)},children:C==null?void 0:C.name})]})]}),e("div",{className:"msg",ref:j,onClick:t,children:!s&&h?e(_e,{movie:C}):!s&&g?e(_e,{title:$}):e("div",{className:"message-box",onClick:t,children:Re.map((z,U)=>z.type===Oe.SPOILER?e(Hn,{children:z.message},U):e(re.Fragment,{children:r("span",{className:z.type,onClick:Z=>{z.type==="user"&&(Z.stopPropagation(),p(`/profile/${z.message.slice(1)}`))},children:[$t(z.message)," "]},U)},U))})}),G&&!h&&!g&&e("div",{className:"show-more",onClick:z=>{z.stopPropagation(),he(!_)},children:_?"Show less":"Show more"})]})]}),!h&&!g&&e(Ql,{text:i.message}),!h&&!g&&r("div",{className:"options",children:[r("div",{className:"likes c",children:[e("span",{className:"icon",onClick:n,tabIndex:0,children:d?e(Et,{size:20,fill:"#ff005d"}):e(Kt,{size:20})}),r("span",{className:"count",onClick:yt,tabIndex:0,children:[et(o)," Likes"]})]}),r("div",{className:"replies c",children:[e("span",{className:"icon",onClick:vt,tabIndex:0,children:e(Jt,{size:20})}),r("span",{className:"count",children:[et(i.repliesCount)," Replies"]})]}),b&&r("div",{className:"delete c",onClick:wt,tabIndex:0,children:[e("span",{className:"icon",children:e(Qi,{size:20})}),e("span",{className:"count",children:"Delete"})]})]})]})})},Wl=(t,i,n,d)=>{n.updateQuery({query:ri},o=>{var s,u;return(s=t.login)!=null&&s.error?o:{me:(u=t.login)==null?void 0:u.user}})},Yl=(t,i,n,d)=>{n.updateQuery({query:ri},o=>({me:null}))},Vl=(t,i,n,d)=>{const o=n.inspectFields("Query"),s={getCommentLikes:"getCommentLikes",getComment:"getComment"},u=o.filter(l=>l.fieldName===s.getCommentLikes),p=o.filter(l=>l.fieldName===s.getComment);u.forEach(l=>{var c;i.cid===((c=l==null?void 0:l.arguments)==null?void 0:c.cid)&&n.updateQuery({query:un,variables:l.arguments},h=>{var y,N;if(!h)return null;let f=h.getCommentLikes;const g=f==null?void 0:f.likesCount,m=f==null?void 0:f.likes,x=(y=t.setCommentLike)==null?void 0:y.user,v=(N=t.setCommentLike)==null?void 0:N.likeStatus,b=v==null?void 0:v.like;return{...h,getCommentLikes:{...f,likesCount:b?g+1:Math.max(g-1,0),likes:b?[...m,x]:m==null?void 0:m.filter(P=>P.id!==x.id)}}})}),p.forEach(l=>{var c;i.cid===((c=l==null?void 0:l.arguments)==null?void 0:c.cid)&&n.updateQuery({query:ni,variables:l.arguments},h=>{var b;if(!h)return null;let f=h.getComment;const g=f.likesCount,m=(b=t.setCommentLike)==null?void 0:b.likeStatus,x=m==null?void 0:m.like;return{...h,getComment:{...f,likesCount:x?g+1:Math.max(g-1,0)}}})})},Xl=(t,i,n,d)=>{n.inspectFields("Query").filter(o=>o.fieldName==="getReplyLikes").forEach(o=>{var s;i.rid===((s=o==null?void 0:o.arguments)==null?void 0:s.rid)&&n.updateQuery({query:Cn,variables:o.arguments},u=>{var x,v;if(!u)return console.log("Data is null, returning"),null;let p=u.getReplyLikes;const l=p==null?void 0:p.likesCount,c=p==null?void 0:p.likes,h=(x=t.setReplyLike)==null?void 0:x.user,g=((v=t.setReplyLike)==null?void 0:v.likeStatus).like;return{...u,getReplyLikes:{...p,likesCount:g?l+1:Math.max(l-1,0),likes:g?[...c,h]:c==null?void 0:c.filter(b=>b.id!==h.id)}}})})},Kl=(t,i,n,d)=>{let o=i.options;n.inspectFields("Query").filter(s=>s.fieldName==="getFullUserProfile").forEach(s=>{var u;(o==null?void 0:o.uid)===((u=s==null?void 0:s.arguments)==null?void 0:u.uid)&&n.updateQuery({query:En,variables:s.arguments},p=>{if(!p)return console.log("Data is null, returning"),null;const l=p.getFullUserProfile;return{...p,getFullUserProfile:{...l,profile:t.upsertProfile}}})})},Jl=(t,i,n,d)=>{n.inspectFields("Query").map(o=>{var s,u;if(o.fieldName==="getCommentsOfTheMovie")((s=o==null?void 0:o.arguments)==null?void 0:s.mid)===(i==null?void 0:i.options).movieId&&((u=o==null?void 0:o.arguments)==null?void 0:u.page)===1&&n.updateQuery({query:Lt,variables:o.arguments},p=>{if(!p)return console.log("Data is null, returning"),null;let l=p.getCommentsOfTheMovie,c=l==null?void 0:l.comments,h=l==null?void 0:l.totalCommentCount;return{...p,getCommentsOfTheMovie:{...l,comments:[t.insertComment,...c],totalCommentCount:h+1}}});else return o})},Zl=(t,i,n,d)=>{const o=(i==null?void 0:i.options).parentCommentId;if(!n.readQuery({query:dt,variables:{cid:o,first:5}})){const p=[t.insertReply],l=1,c=p.map(g=>({__typename:"ReplyEdge",cursor:g==null?void 0:g.id,node:g})),h={__typename:"PageInfo",endCursor:c[c.length-1].cursor,hasNextPage:!1},f={getCommentReplies:{__typename:"ReplyConnection",nodes:p,totalCount:l,edges:c,pageInfo:h}};n.updateQuery({query:dt,variables:{cid:o,first:5}},g=>f)}n.inspectFields("Query").map(u=>{var p,l;u.fieldName==="getCommentReplies"?((p=u==null?void 0:u.arguments)==null?void 0:p.cid)===(i==null?void 0:i.options).parentCommentId&&n.updateQuery({query:dt,variables:u.arguments},c=>{var y,N,P;if(console.log({data:c}),!c)return console.log("Data is null, returning"),null;const h=(y=c.getCommentReplies)==null?void 0:y.nodes,f=t.insertReply;if(!h||!f)return console.log("No existing comments or new comment, returning"),null;const g=((N=c.getCommentReplies)==null?void 0:N.edges)||[];let m=[f,...h];m=oe.uniqBy(m,"id");const x=(P=c.getCommentReplies)!=null&&P.totalCount?c.getCommentReplies.totalCount+1:1,v=m.map($=>({__typename:"ReplyEdge",cursor:$.id,node:$})),b={__typename:"PageInfo",endCursor:v[v.length-1].cursor,hasNextPage:g.length<x},C={...c,getCommentReplies:{...c.getCommentReplies,nodes:m,totalCount:x,edges:v,pageInfo:b}};return console.log({newData:C}),C}):u.fieldName==="getCommentsOfTheMovie"&&((l=u==null?void 0:u.arguments)==null?void 0:l.mid)===(i==null?void 0:i.options).movieId&&n.updateQuery({query:Lt,variables:u.arguments},c=>{const h=c==null?void 0:c.getCommentsOfTheMovie,f=h==null?void 0:h.comments,m=i.options.parentCommentId,x=f==null?void 0:f.filter(b=>b.id===m);let v=f;return x&&x.length>0&&(v=f==null?void 0:f.map(b=>b.id===o?{...b,repliesCount:x[0].repliesCount+1}:b)),{...c,getCommentsOfTheMovie:{...c==null?void 0:c.getCommentsOfTheMovie,comments:v}}})})},ec=(t,i,n,d)=>{const o=n.inspectFields("Query");o.filter(p=>p.fieldName==="isFollowingUser").forEach(p=>{var l;((l=p.arguments)==null?void 0:l.uid)===i.uid&&n.updateQuery({query:An,variables:p.arguments},c=>{var f;return c?{isFollowingUser:(f=t.toggleFollow)==null?void 0:f.follows}:(console.log("Data is null, returning"),null)})}),o.filter(p=>p.fieldName==="getUserByUserName").forEach(p=>{var l;((l=p.arguments)==null?void 0:l.uid)===i.uid&&n.updateQuery({query:Un,variables:p.arguments},c=>{var m;if(!c)return console.log("Data is null, returning"),null;const h=c.getUserByUserName;let f=h.followingCount;return{...c,getUserByUserName:{...h,followingCount:((m=t.toggleFollow)==null?void 0:m.follows)===!0?f+1:Math.max(f-1,0)}}})})},tc=(t,i,n,d)=>{const o=n.inspectFields("Query"),s={getCommentsOfTheUser:"getCommentsOfTheUser",getCommentsOfTheMovie:"getCommentsOfTheMovie",getMovie:"getMovie",getComment:"getComment"};o.filter(c=>c.fieldName===s.getCommentsOfTheMovie).forEach(c=>{if(c.arguments.mid!==i.mid)return null;n.updateQuery({query:Lt,variables:c.arguments},h=>{if(!h)return console.log("Data is null, returning"),null;const f=h.getCommentsOfTheMovie,g=f.comments,m=f.totalCommentCount;return{...h,getCommentsOfTheMovie:{...f,comments:g.filter(x=>x.id!==i.cid),totalCommentCount:Math.max(m-1,0)}}})}),o.filter(c=>c.fieldName===s.getMovie).forEach(c=>{if(c.arguments.mid!==i.mid)return null;n.updateQuery({query:oi,variables:c.arguments},h=>{if(!h)return console.log("Data is null, returning"),null;const f=h.getMovie,g=f.commentCount;return{...h,getMovie:{...f,commentCount:Math.max(g-1,0)}}})}),o.filter(c=>c.fieldName===s.getComment).forEach(c=>{if(c.arguments.cid!==i.cid)return null;n.updateQuery({query:ni,variables:c.arguments},h=>{if(!h)return console.log("Data is null, returning"),null;const f=h.getComment;return{...h,getComment:{...f,message:"[Message is deleted]"}}})})},ic=(t,i,n,d)=>{},nc=(t,i,n,d)=>{const o=n.inspectFields("Query"),s={getMovie:"getMovie",getOnlyUserMovieStats:"getOnlyUserMovieStats",getLikedTitles:"getLikedTitles"},u=o.filter(c=>c.fieldName===s.getMovie),p=o.filter(c=>c.fieldName===s.getOnlyUserMovieStats),l=o.filter(c=>c.fieldName===s.getLikedTitles);u.forEach(c=>{c.arguments.mid===i.mid&&n.updateQuery({query:oi,variables:c.arguments},h=>{if(!h)return console.log("Data is null, returning"),null;const f=h.getMovie,g=i.options.like,m=f.likesCount;return{...h,getMovie:{...f,likesCount:g?m+1:Math.max(m-1,0)}}})}),p.forEach(c=>{c.arguments.mid===i.mid&&n.updateQuery({query:yn,variables:c.arguments},h=>{if(!h)return console.log("Data is null, returning"),null;const f=h.getOnlyUserMovieStats,g=i.options.like;return{...h,getOnlyUserMovieStats:{...f,like:g}}})}),l.forEach(c=>{console.log(c,i),c.arguments.uid===i.uid&&n.updateQuery({query:fn,variables:c.arguments},h=>{var x;if(!h)return console.log("Data is null, returning"),null;const f=h.getLikedTitles,g=i.options.like,m=f.movieStats;return{...h,getLikedTitles:{...f,movieStats:[...m,{userId:i.uid,like:g,favorite:(x=t.updateUserMovieStats)==null?void 0:x.favorite,movieId:i==null?void 0:i.mid,__typename:"MovieStats",createdAt:new Date().getTime().toString(),updatedAt:new Date().getTime().toString()}]}}})})},oc=(t,i,n,d)=>{const o=n.inspectFields("Query"),s={getUserNotifications:"getUserNotifications"};o.filter(p=>p.fieldName===s.getUserNotifications).forEach(p=>{p.arguments.uid===i.uid&&n.updateQuery({query:si,variables:p.arguments},l=>{if(!l)return console.log("Data is null, returning"),null;const c=l.getUserNotifications;let h=c.like,f=c.follow;return{...l,getUserNotifications:{...c,like:h.map(m=>({...m,isRead:!0})),follow:f.map(m=>({...m,isRead:!0}))}}})})},sc=(t,i,n,d)=>{const o=n.inspectFields("Query"),s={getUserNotifications:"getUserNotifications"};o.filter(p=>p.fieldName===s.getUserNotifications).forEach(p=>{p.arguments.uid===i.uid&&n.updateQuery({query:si,variables:p.arguments},l=>{if(!l)return console.log("Data is null, returning"),null;const c=l.getUserNotifications;return{...l,getUserNotifications:{...c,like:[],follow:[]}}})})},rc=()=>(t,i,n,d)=>{const{parentKey:o,fieldName:s}=d,p=n.inspectFields(o).filter(N=>N.fieldName===s);if(p.length===0)return;const c=`${s}(${Fo(i)})`,h=n.resolve(n.resolve(o,c),"comments");let f=[],g=0,m=0,x=0,v=!0,b="",C="";return p.forEach(N=>{const{fieldKey:P,arguments:$}=N;if($.mid!==i.mid)return;const T=n.resolve(o,P),w=n.resolve(T,"comments");f=oe.concat(f,w),f=oe.uniq(f),g=n.resolve(T,"lastPage"),m=n.resolve(T,"totalCommentCount"),x=n.resolve(T,"pastLoadedCount"),n.resolve(T,"hasMoreComments")===!1&&(v=!1),b=n.resolve(T,"id"),C=n.resolve(T,"movie")}),d.partial=!!h,{__typename:"PaginatedMovieComments",comments:f,hasMoreComments:v,id:b,lastPage:g,movie:C,pastLoadedCount:x,totalCommentCount:m}},ac=()=>(t,i,n,d)=>{const{parentKey:o,fieldName:s}=d,p=n.inspectFields(o).filter(m=>m.fieldName===s);if(p.length===0)return;let c=[],h=[],f="";return p.forEach(m=>{const{fieldKey:x,arguments:v}=m,b=n.resolve(o,x),C=n.resolve(b,"like"),y=n.resolve(b,"follow");f=n.resolve(b,"__typename"),c.push(...y),h.push(...C)}),d.partial=!0,{__typename:f,like:h,follow:c}},Ii=()=>(t,i,n,d)=>{const{parentKey:o,fieldName:s}=d,p=n.inspectFields(o).filter(x=>x.fieldName===s);if(p.length===0)return;let c=[],h="",f=1,g=1;return p.forEach(x=>{const{fieldKey:v,arguments:b}=x,C=n.resolve(o,v),y=n.resolve(C,"movieStats");f=n.resolve(C,"page"),g=n.resolve(C,"lastPage"),h=n.resolve(C,"__typename"),c.push(...y)}),d.partial=!0,{__typename:h,movieStats:c,page:f,lastPage:g}},lc=()=>(t,i,n,d)=>{const{parentKey:o,fieldName:s}=d,p=n.inspectFields(o).filter(v=>v.fieldName===s);if(p.length===0)return;let c=[],h="",f=1,g=1,m=0;return p.forEach(v=>{const{fieldKey:b,arguments:C}=v,y=n.resolve(o,b),N=n.resolve(y,"visited");f=n.resolve(y,"page"),m=n.resolve(y,"count"),g=n.resolve(y,"lastPage"),h=n.resolve(y,"__typename"),c.push(...N)}),d.partial=!0,{__typename:h,count:m,visited:c,page:f,lastPage:g}},Ui=()=>(t,i,n,d)=>{const{parentKey:o,fieldName:s}=d,p=n.inspectFields(o).filter(m=>m.fieldName===s);if(p.length===0)return;let c=[],h=0,f=0;return p.forEach(m=>{const{fieldKey:x,arguments:v}=m;if(v.search!==i.search)return;const b=n.resolve(o,x),C=n.resolve(b,"titles");f=n.resolve(b,"lastPage"),h=n.resolve(b,"page"),c=oe.concat(c,C),c=oe.uniq(c)}),d.partial=!0,{__typename:"SearchTitleObject",page:h,lastPage:f,titles:c}},cc=()=>(t,i,n,d)=>{const{parentKey:o,fieldName:s}=d,p=n.inspectFields(o).filter(m=>m.fieldName===s);if(p.length===0)return;let c=[],h=0,f=0;return p.forEach(m=>{const{fieldKey:x,arguments:v}=m;if(v.search!==i.search)return;const b=n.resolve(o,x),C=n.resolve(b,"movies");f=n.resolve(b,"lastPage"),h=n.resolve(b,"page"),c=oe.concat(c,C),c=oe.uniq(c)}),d.partial=!0,{__typename:"SearchMovieObject",page:h,lastPage:f,movies:c}},dc=()=>(t,i,n,d)=>{const{parentKey:o,fieldName:s}=d,p=n.inspectFields(o).filter(m=>m.fieldName===s);if(p.length===0)return;let c=[],h=0,f=0;return p.forEach(m=>{const{fieldKey:x,arguments:v}=m;if(v.search!==i.search)return;const b=n.resolve(o,x),C=n.resolve(b,"people");f=n.resolve(b,"lastPage"),h=n.resolve(b,"page"),c=oe.concat(c,C),c=oe.uniq(c)}),d.partial=!0,{__typename:"SearchPeopleObject",page:h,lastPage:f,people:c}},pc=Ro({url:Bs}),uc={keys:{RepliesObject:()=>null,CommentLikesObject:()=>null,replyLikesObject:()=>null,SearchObject:()=>null,Visited:()=>null,Profile:()=>null,MovieStats:()=>null,CommentOrReply:()=>null,NotificationObject:()=>null,LinkPreview:()=>null,SearchMovieObject:()=>null,SearchTitleObject:()=>null,SearchPeopleObject:()=>null},updates:{Mutation:{login:Wl,logout:Yl,setCommentLike:Vl,setReplyLike:Xl,upsertProfile:Kl,insertComment:Jl,insertReply:Zl,toggleFollow:ec,deleteComment:tc,deleteReply:ic,updateUserMovieStats:nc,readNotification:oc,clearNotifications:sc}},optimistic:{insertComment:(t,i,n)=>{const d=t.options;return{__typename:"Comment",id:`Optimistic-${Math.random()}`,flagged:!1,repliesCount:0,toxicityScore:0,type:"comment",createdAt:"Posting...",updatedAt:"Posting...",deletedAt:null,...d}},insertReply:(t,i,n)=>{const d=t.options;return{__typename:"Reply",id:`Optimistic-${Math.random()}`,flagged:!1,repliesCount:0,toxicityScore:0,type:"reply",createdAt:"Posting...",updatedAt:"Posting...",deletedAt:null,...d}}},resolvers:{Query:{getCommentReplies:Le(),getRepliesOfReply:Le(),getFeed:Le(),getCommentsOfTheUser:Le(),getRepliesOfTheUser:Le(),getPaginatedTitles:Le(),getMoviesByTitleId:Le(),getUserNotifications:ac(),getFavTitles:Ii(),getLikedTitles:Ii(),getUserViewHistory:lc(),searchTitles:Ui(),searchMovies:Ui(),searchEpisodes:cc(),searchPeople:dc(),getCommentsOfTheMovie:rc()}}},ye=t=>({url:qs,fetchOptions:{credentials:"include"},exchanges:[Ao,Lo,zo(uc),Oo({forwardSubscription:i=>({subscribe:n=>({unsubscribe:pc.subscribe(i,n)})})}),jo({retryIf:i=>!!(i.graphQLErrors.length>0||i.networkError)}),Do]}),hc=({comment:t,isMain:i})=>{const n=t&&t.movieId,d=W(),[o,s]=a.useState(t?t.likesCount:0),u=L(m=>m.user),[p,l]=a.useState(!1),[,c]=wn(),[h]=ya({variables:{uid:u.id,rid:t&&t.id},pause:A()});return a.useEffect(()=>{const{error:m,data:x,fetching:v}=h;if(m&&console.log(m),!v&&x){const C=x.getIsUserLikedReply.isLiked;l(C)}},[h]),e(de,{children:t&&e(Qn,{type:"reply",isMain:i,updateLike:async m=>{var y;m.stopPropagation(),l(!p),s(p?o-1:o+1);const x=await c({uid:u.id,rid:t.id,like:!p,mid:n}),{data:v,error:b}=x;b&&console.log(b);const C=(y=v==null?void 0:v.setReplyLike)==null?void 0:y.likeStatus.like;l(C)},likeCount:o,like:p,goToComment:m=>{m.stopPropagation(),d(`/reply/${t.id}`)},comment:t})})},di=xe(ye)(hc),mc=({type:t,comment:i,replies:n,userRef:d,like:o,fetchMore:s,likesCount:u,likedUsers:p,updateLike:l})=>{var Re,vt,yt,wt,Ae,it,nt,z;const c=a.useRef(null),h=K(),f=W(),[g]=zt({variables:{mid:i==null?void 0:i.movieId},pause:A()}),[m,x]=a.useState(null),[v,b]=a.useState(null),[C,y]=a.useState(""),N=a.useRef(null),P=L(U=>U.user),[$,T]=a.useState(!1),[w,M]=a.useState(!1),S=!!(i!=null&&i.parentCommentId),[I,R]=a.useState(!1),[j,G]=a.useState(!1),[D,_]=a.useState(""),[he,J]=a.useState(!1),[Ne]=mn({variables:{getTitleInfoId:C},pause:A()});a.useEffect(()=>{var U;c&&((U=c.current)==null||U.scrollIntoView())},[c.current]),a.useEffect(()=>{const{data:U,error:Z,fetching:Me}=g;if(Z&&console.log(Z),!Me&&U){const bt=U.getMovie;x(()=>bt),y(()=>bt.titleId)}},[g]),a.useEffect(()=>{const{data:U,fetching:Z,error:Me}=Ne;if(!Z&&U){const bt=U.getTitleInfo;b(()=>bt)}},[Ne]);const Fe=U=>{U.stopPropagation();const Z=U.target;Z.scrollHeight-Z.scrollTop-2<=Z.clientHeight&&s()},H=U=>{U.stopPropagation(),T(!0)},se=U=>{U.stopPropagation(),T(!1)},pe=U=>{U.stopPropagation(),M(!0)},Se=U=>{U.stopPropagation(),M(!1)};a.useEffect(()=>{if(!N||!N.current)return;const{clientHeight:U,scrollHeight:Z}=N.current;_(()=>`${Z}px`),U<Z?R(()=>!0):R(()=>!1)},[N.current]);const ce=U=>{U.stopPropagation(),Y.unstable_batchedUpdates(()=>{h(V(!0)),h(le(i)),t==="comment"?h(Q(te.DELETE_COMMENT)):t==="reply"&&h(Q(te.DELETE_REPLY)),J(()=>!1)})},we=U=>{U.stopPropagation();const Z={data:p,type:"Liked"};Y.unstable_batchedUpdates(()=>{h(le(Z)),h(V(!0)),h(Q(te.OPEN_FOLLOW))})},fe=U=>{U.stopPropagation(),Y.unstable_batchedUpdates(()=>{h(V(!0)),h(Q(te.ADD_REPLY)),h(le(i))})};let Qe=qn(i.message);return Ne.fetching?e(ci,{}):r(Rl,{cardHeight:D,showMore:j,showEpisodeInfo:$,showTitleInfo:w,isReply:S,movieBg:m==null?void 0:m.stills,titleBg:v==null?void 0:v.boxart,children:[r(B,{children:[e("title",{children:v==null?void 0:v.title}),e("meta",{name:"description",content:i.message}),e("link",{rel:"canonical",href:`${q}/${S?"reply":"comment"}/${i.id}`})]}),e($e,{className:"comment-header",text:t.charAt(0).toUpperCase()+t.slice(1)}),r("div",{className:"main-container",onScroll:Fe,children:[S&&e(Dt,{className:"cc",id:i==null?void 0:i.parentReplyId,type:(i==null?void 0:i.parentCommentId)===(i==null?void 0:i.parentReplyId)?"comment":"reply",extendData:!0}),e("div",{className:"comment-container",ref:c,children:r("div",{className:"inner",children:[r("div",{className:"comment-usr-detail",children:[r("div",{className:"user-container",children:[e("div",{className:"user",children:e(Ce,{src:(Re=d.current)==null?void 0:Re.photoUrl,user:d.current,tooltip:!0})}),e("div",{className:"name",children:(vt=d.current)==null?void 0:vt.nickname})]}),r("div",{className:"options-container",children:[((yt=d.current)==null?void 0:yt.nickname)!==P.nickname&&d&&d.current&&e(xt,{userId:(wt=d.current)==null?void 0:wt.id,nickName:(Ae=d.current)==null?void 0:Ae.nickname}),r("div",{className:"option",children:[e("div",{className:"option-icon",onClick:U=>{U.stopPropagation(),J(()=>!he)},children:e(_o,{className:"icon",size:20})}),he&&r("div",{className:"option-window",children:[((it=d.current)==null?void 0:it.nickname)===P.nickname&&r("div",{className:"opo delete",onClick:ce,children:[e("div",{className:"opo-icon",children:e(Qi,{size:20})}),e("div",{className:"opo-text",children:"Delete"})]}),r("div",{className:"opo",style:{pointerEvents:"none",opacity:"0.5"},children:[e("div",{className:"opo-icon",children:e(Ho,{size:20})}),e("div",{className:"opo-text",children:"Flag this comment (Beta)"})]}),r("div",{className:"opo",style:{pointerEvents:"none",opacity:"0.5"},children:[e("div",{className:"opo-icon",children:e(Go,{size:20})}),r("div",{className:"opo-text",children:["Block @",(nt=d.current)==null?void 0:nt.nickname," (Beta)"]})]}),r("div",{className:"opo",style:{pointerEvents:"none",opacity:"0.5"},children:[e("div",{className:"opo-icon",children:e(Bo,{size:20})}),r("div",{className:"opo-text",children:["Report @",(z=d.current)==null?void 0:z.nickname," (Beta)"]})]})]})]})]})]}),r("div",{className:"comment-usr-msg",children:[e("div",{className:"cm-us-xt",ref:N,children:Qe.map((U,Z)=>U.type===Oe.SPOILER?e(Hn,{children:U.message},Z):e(re.Fragment,{children:r("span",{className:U.type,onClick:Me=>{U.type==="user"&&f(`/profile/${U.message.slice(1)}`)},children:[$t(U.message)," "]},Z)},Z))}),I&&e("div",{className:"show-more",onClick:U=>{U.stopPropagation(),G(!j)},children:j?"Show less":"Show more"})]}),e("div",{className:"comment-usr-time",children:On(i==null?void 0:i.createdAt)}),r("div",{className:"movie-chips",children:[v&&(v==null?void 0:v.type)==="show"&&e(re.Fragment,{children:r("div",{className:"name title",onMouseEnter:pe,onMouseLeave:Se,onClick:U=>{U.stopPropagation(),f(`/show/${v==null?void 0:v.id}`)},children:[v==null?void 0:v.title," ",m==null?void 0:m.season]})}),e("div",{className:"name",onMouseEnter:H,onMouseLeave:se,onClick:U=>{U.stopPropagation(),f(`/movie/${m==null?void 0:m.id}`)},children:m==null?void 0:m.name})]}),r("div",{className:"show-details",children:[e("div",{className:"bg",children:$?e(X,{src:m==null?void 0:m.stills,alt:"background-image"},"episode"):w?e(X,{src:v==null?void 0:v.artwork,alt:"background-image"},"title"):e(X,{src:"https://png.pngtree.com/thumb_back/fh260/background/20210316/pngtree-black-abstract-fluorescent-line-background-image_587942.jpg",alt:"background-image"})}),$?e(_e,{movie:m}):w&&e(_e,{title:v})]}),r("div",{className:"comment-usr-stats",children:[r("div",{className:"likes cus",children:[e("span",{className:"icon",onClick:l,children:o?e(Et,{size:20,fill:"#ff005d"}):e(Kt,{size:20})}),r("span",{className:"count",onClick:we,children:[et(u)," Likes"]})]}),r("div",{className:"comment cus",children:[e("span",{className:"icon",onClick:fe,children:e(Jt,{size:20})}),r("span",{className:"count",children:[et(i==null?void 0:i.repliesCount)," Replies"]})]})]}),e("div",{className:"comment-replies",children:(n==null?void 0:n.length)>0?n==null?void 0:n.map(U=>e(di,{comment:U,isMain:!0},`reply${U==null?void 0:U.id}`)):e("div",{className:"no-data",children:e(ve,{msg:"No Replies yet"})})})]})}),e(Bn,{type:"comment",data:i})]})]})},Wn=xe(ye)(mc),fc=k.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  .bg {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -2;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0.1;
  }
  .wave {
    position: absolute;
    z-index: -1;
    bottom: 0px;
    width: 100%;
  }
  .code {
    display: flex;
    width: 100%;
    justify-content: center;
    text-align: center;
    border-radius: 50%;
    text-shadow: 0px 20px 9px;
    font-size: 5em;
  }
  .text {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 100;
    letter-spacing: 4px;
  }
`,gc=t=>a.createElement("svg",{width:"100%",height:"100%",id:"svg",viewBox:"0 0 1440 600",xmlns:"http://www.w3.org/2000/svg",className:"transition duration-300 ease-in-out delay-150",...t},a.createElement("style",null,`
          .path-0{
            animation:pathAnim-0 4s;
            animation-timing-function: linear;
            animation-iteration-count: infinite;
          }
          @keyframes pathAnim-0{
            0%{
              d: path("M 0,600 C 0,600 0,200 0,200 C 40.11478604020226,205.02172894314958 80.22957208040452,210.04345788629917 134,225 C 187.77042791959548,239.95654211370083 255.19649771858423,264.8478973979529 315,257 C 374.8035022814158,249.1521026020471 426.98443704525846,208.5649525218893 483,212 C 539.0155629547415,215.4350474781107 598.8657541003822,262.89229251449007 661,253 C 723.1342458996178,243.10770748550993 787.5525465532127,175.86587742015047 829,148 C 870.4474534467873,120.13412257984955 888.9240596867677,131.64419780490812 936,162 C 983.0759403132323,192.35580219509188 1058.7512146997165,241.55733136021706 1119,250 C 1179.2487853002835,258.44266863978294 1224.0710815143668,226.1264767542237 1275,211 C 1325.9289184856332,195.8735232457763 1382.9644592428167,197.93676162288816 1440,200 C 1440,200 1440,600 1440,600 Z");
            }
            25%{
              d: path("M 0,600 C 0,600 0,200 0,200 C 43.91407078554691,211.5510173880873 87.82814157109382,223.1020347761746 150,209 C 212.17185842890618,194.8979652238254 292.6015045011715,155.14287828338882 349,148 C 405.3984954988285,140.85712171661118 437.7658404242201,166.32645209027007 478,167 C 518.2341595757799,167.67354790972993 566.3351338019484,143.5513133555309 622,156 C 677.6648661980516,168.4486866444691 740.8936243679864,217.46829448760639 791,236 C 841.1063756320136,254.53170551239361 878.0903687261067,242.5755086940436 930,245 C 981.9096312738933,247.4244913059564 1048.7449007275866,264.229670736219 1110,247 C 1171.2550992724134,229.77032926378098 1226.9300283635466,178.50580836108026 1281,165 C 1335.0699716364534,151.49419163891974 1387.5349858182267,175.74709581945987 1440,200 C 1440,200 1440,600 1440,600 Z");
            }
            50%{
              d: path("M 0,600 C 0,600 0,200 0,200 C 57.2760143050931,228.43349364903193 114.5520286101862,256.86698729806386 175,241 C 235.4479713898138,225.13301270193614 299.0678998643483,164.96554445677646 342,138 C 384.9321001356517,111.03445554322356 407.1763719324207,117.27083487483043 460,141 C 512.8236280675793,164.72916512516957 596.2266124059687,205.95111604390186 663,224 C 729.7733875940313,242.04888395609814 779.9171784437045,236.92470094956218 822,224 C 864.0828215562955,211.07529905043782 898.1046738192132,190.3500801578493 949,193 C 999.8953261807868,195.6499198421507 1067.6641262794426,221.6749784190406 1127,227 C 1186.3358737205574,232.3250215809594 1237.2388210630163,216.95000616598838 1288,209 C 1338.7611789369837,201.04999383401162 1389.380589468492,200.5249969170058 1440,200 C 1440,200 1440,600 1440,600 Z");
            }
            75%{
              d: path("M 0,600 C 0,600 0,200 0,200 C 51.84323591071647,180.95336046368232 103.68647182143295,161.90672092736466 161,181 C 218.31352817856705,200.09327907263534 281.09734862498465,257.32647675422373 332,265 C 382.90265137501535,272.67352324577627 421.92413367862866,230.78737205574052 465,208 C 508.07586632137134,185.21262794425948 555.2061166605007,181.5240350228142 618,195 C 680.7938833394993,208.4759649771858 759.2513996793685,239.11648785300284 818,227 C 876.7486003206315,214.88351214699716 915.7882846220249,160.01001356517452 959,165 C 1002.2117153779751,169.98998643482548 1049.5954618325318,234.84345788629918 1108,248 C 1166.4045381674682,261.1565421137008 1235.8298680478483,222.6161548896288 1293,206 C 1350.1701319521517,189.3838451103712 1395.0850659760758,194.6919225551856 1440,200 C 1440,200 1440,600 1440,600 Z");
            }
            100%{
              d: path("M 0,600 C 0,600 0,200 0,200 C 40.11478604020226,205.02172894314958 80.22957208040452,210.04345788629917 134,225 C 187.77042791959548,239.95654211370083 255.19649771858423,264.8478973979529 315,257 C 374.8035022814158,249.1521026020471 426.98443704525846,208.5649525218893 483,212 C 539.0155629547415,215.4350474781107 598.8657541003822,262.89229251449007 661,253 C 723.1342458996178,243.10770748550993 787.5525465532127,175.86587742015047 829,148 C 870.4474534467873,120.13412257984955 888.9240596867677,131.64419780490812 936,162 C 983.0759403132323,192.35580219509188 1058.7512146997165,241.55733136021706 1119,250 C 1179.2487853002835,258.44266863978294 1224.0710815143668,226.1264767542237 1275,211 C 1325.9289184856332,195.8735232457763 1382.9644592428167,197.93676162288816 1440,200 C 1440,200 1440,600 1440,600 Z");
            }
          }`),a.createElement("defs",null,a.createElement("linearGradient",{id:"gradient",x1:"27%",y1:"6%",x2:"73%",y2:"94%"},a.createElement("stop",{offset:"5%",stopColor:"#000000"}),a.createElement("stop",{offset:"95%",stopColor:"#9900ef"}))),a.createElement("path",{d:"M 0,600 C 0,600 0,200 0,200 C 40.11478604020226,205.02172894314958 80.22957208040452,210.04345788629917 134,225 C 187.77042791959548,239.95654211370083 255.19649771858423,264.8478973979529 315,257 C 374.8035022814158,249.1521026020471 426.98443704525846,208.5649525218893 483,212 C 539.0155629547415,215.4350474781107 598.8657541003822,262.89229251449007 661,253 C 723.1342458996178,243.10770748550993 787.5525465532127,175.86587742015047 829,148 C 870.4474534467873,120.13412257984955 888.9240596867677,131.64419780490812 936,162 C 983.0759403132323,192.35580219509188 1058.7512146997165,241.55733136021706 1119,250 C 1179.2487853002835,258.44266863978294 1224.0710815143668,226.1264767542237 1275,211 C 1325.9289184856332,195.8735232457763 1382.9644592428167,197.93676162288816 1440,200 C 1440,200 1440,600 1440,600 Z",stroke:"none",strokeWidth:0,fill:"url(#gradient)",fillOpacity:.53,className:"transition-all duration-300 ease-in-out delay-150 path-0"}),a.createElement("style",null,`
          .path-1{
            animation:pathAnim-1 4s;
            animation-timing-function: linear;
            animation-iteration-count: infinite;
          }
          @keyframes pathAnim-1{
            0%{
              d: path("M 0,600 C 0,600 0,400 0,400 C 61.52595881119744,366.62483660130715 123.05191762239488,333.24967320261436 180,346 C 236.94808237760512,358.75032679738564 289.3182883216179,417.6261437908497 340,431 C 390.6817116783821,444.3738562091503 439.6749290911333,412.24575163398686 491,421 C 542.3250709088667,429.75424836601314 595.9819953138488,479.39084967320264 645,472 C 694.0180046861512,464.60915032679736 738.3970896534714,400.19084967320265 786,386 C 833.6029103465286,371.80915032679735 884.4296460722654,407.8457516339868 949,435 C 1013.5703539277346,462.1542483660132 1091.884326057467,480.4261437908498 1140,467 C 1188.115673942533,453.5738562091502 1206.0330496978663,408.44967320261435 1251,392 C 1295.9669503021337,375.55032679738565 1367.9834751510668,387.7751633986928 1440,400 C 1440,400 1440,600 1440,600 Z");
            }
            25%{
              d: path("M 0,600 C 0,600 0,400 0,400 C 70.73148353681096,376.45228758169935 141.4629670736219,352.90457516339865 183,352 C 224.5370329263781,351.09542483660135 236.87961524232338,372.8339869281046 292,384 C 347.1203847576766,395.1660130718954 445.01857195708476,395.75947712418304 507,406 C 568.9814280429152,416.24052287581696 595.0460969293378,436.12810457516343 645,452 C 694.9539030706622,467.87189542483657 768.7970403255642,479.72810457516334 826,466 C 883.2029596744358,452.27189542483666 923.7657417684054,412.959477124183 964,394 C 1004.2342582315946,375.040522875817 1044.1399926008141,376.4339869281046 1091,371 C 1137.8600073991859,365.5660130718954 1191.674287828339,353.3045751633987 1251,357 C 1310.325712171661,360.6954248366013 1375.1628560858305,380.34771241830066 1440,400 C 1440,400 1440,600 1440,600 Z");
            }
            50%{
              d: path("M 0,600 C 0,600 0,400 0,400 C 70.24432112467629,413.0792946109261 140.48864224935258,426.15858922185225 187,413 C 233.51135775064742,399.84141077814775 256.28975212726596,360.44493772351706 303,360 C 349.71024787273404,359.55506227648294 420.3523492415835,398.06165988407946 478,412 C 535.6476507584165,425.93834011592054 580.3008509064002,415.30842274016527 635,395 C 689.6991490935998,374.69157725983473 754.4442471328156,344.7046491552595 808,352 C 861.5557528671844,359.2953508447405 903.922160562338,403.8729806387964 955,425 C 1006.077839437662,446.1270193612036 1065.8671106178322,443.8034282895548 1121,436 C 1176.1328893821678,428.1965717104452 1226.6093969663336,414.91330620298436 1279,408 C 1331.3906030336664,401.08669379701564 1385.6953015168333,400.5433468985078 1440,400 C 1440,400 1440,600 1440,600 Z");
            }
            75%{
              d: path("M 0,600 C 0,600 0,400 0,400 C 48.05194228634848,434.187742015045 96.10388457269696,468.37548403009 153,470 C 209.89611542730304,471.62451596991 275.63640399556056,440.6858058946849 323,426 C 370.36359600443944,411.3141941053151 399.350499445061,412.88129239117035 451,415 C 502.649500554939,417.11870760882965 576.9615982241952,419.7890245406339 631,404 C 685.0384017758048,388.2109754593661 718.8031076581576,353.96260944629427 771,347 C 823.1968923418424,340.03739055370573 893.8259711431743,360.3605376741892 952,374 C 1010.1740288568257,387.6394623258108 1055.8930077691452,394.5952398569491 1105,407 C 1154.1069922308548,419.4047601430509 1206.6019977802443,437.25850289801457 1263,437 C 1319.3980022197557,436.74149710198543 1379.6990011098778,418.37074855099274 1440,400 C 1440,400 1440,600 1440,600 Z");
            }
            100%{
              d: path("M 0,600 C 0,600 0,400 0,400 C 61.52595881119744,366.62483660130715 123.05191762239488,333.24967320261436 180,346 C 236.94808237760512,358.75032679738564 289.3182883216179,417.6261437908497 340,431 C 390.6817116783821,444.3738562091503 439.6749290911333,412.24575163398686 491,421 C 542.3250709088667,429.75424836601314 595.9819953138488,479.39084967320264 645,472 C 694.0180046861512,464.60915032679736 738.3970896534714,400.19084967320265 786,386 C 833.6029103465286,371.80915032679735 884.4296460722654,407.8457516339868 949,435 C 1013.5703539277346,462.1542483660132 1091.884326057467,480.4261437908498 1140,467 C 1188.115673942533,453.5738562091502 1206.0330496978663,408.44967320261435 1251,392 C 1295.9669503021337,375.55032679738565 1367.9834751510668,387.7751633986928 1440,400 C 1440,400 1440,600 1440,600 Z");
            }
          }`),a.createElement("defs",null,a.createElement("linearGradient",{id:"gradient",x1:"27%",y1:"6%",x2:"73%",y2:"94%"},a.createElement("stop",{offset:"5%",stopColor:"#000000"}),a.createElement("stop",{offset:"95%",stopColor:"#9900ef"}))),a.createElement("path",{d:"M 0,600 C 0,600 0,400 0,400 C 61.52595881119744,366.62483660130715 123.05191762239488,333.24967320261436 180,346 C 236.94808237760512,358.75032679738564 289.3182883216179,417.6261437908497 340,431 C 390.6817116783821,444.3738562091503 439.6749290911333,412.24575163398686 491,421 C 542.3250709088667,429.75424836601314 595.9819953138488,479.39084967320264 645,472 C 694.0180046861512,464.60915032679736 738.3970896534714,400.19084967320265 786,386 C 833.6029103465286,371.80915032679735 884.4296460722654,407.8457516339868 949,435 C 1013.5703539277346,462.1542483660132 1091.884326057467,480.4261437908498 1140,467 C 1188.115673942533,453.5738562091502 1206.0330496978663,408.44967320261435 1251,392 C 1295.9669503021337,375.55032679738565 1367.9834751510668,387.7751633986928 1440,400 C 1440,400 1440,600 1440,600 Z",stroke:"none",strokeWidth:0,fill:"url(#gradient)",fillOpacity:1,className:"transition-all duration-300 ease-in-out delay-150 path-1"})),ee=()=>r(fc,{children:[r(B,{children:[e("title",{children:"404: Not Found"}),e("meta",{name:"description",content:"404: Not Found"})]}),e("div",{className:"bg",children:e(Dn,{})}),e("div",{className:"code",children:"404"}),e("div",{className:"text",children:"NOT FOUND"}),e("div",{className:"wave",children:e(gc,{})})]}),xc=(t,i,n,d,o)=>{const s=Ge();return{fetchMore:a.useCallback(()=>{var l;const{pageInfo:p}=((l=n==null?void 0:n.data)==null?void 0:l.getCommentReplies)||{};!(n!=null&&n.data)||!(p!=null&&p.hasNextPage)||s.query(dt,{first:5,after:d,cid:t==null?void 0:t.id}).toPromise().then(c=>{const{data:h,error:f}=c,g=h.getCommentReplies,m=g.pageInfo;o(()=>m.endCursor);const x=g.nodes;i(v=>oe.chain(v).concat(x).uniqBy("id").value())})},[n])}},vc=()=>{const{id:t}=ue();a.useEffect(()=>{document.title="Comment - Moovy"},[]);const i=a.useRef(null),n=L(w=>w.user),[d,o]=a.useState(!1),[s,u]=a.useState(0),[p,l]=a.useState([]),[c,h]=a.useState(""),[f,g]=a.useState([]),[m]=pn({variables:{cid:t},pause:A()}),[x]=el({variables:{cid:t},pause:A()}),[v,b]=a.useState(),[,C]=dn(),[y,N]=hn({variables:{cid:t,limit:10,page:1},pause:A()});a.useEffect(()=>{var I,R;const{data:w,fetching:M,error:S}=y;if(S&&console.log(S),!M&&w){const j=(I=w.getCommentLikes)==null?void 0:I.likesCount,G=(R=w.getCommentLikes)==null?void 0:R.likes,D=G==null?void 0:G.find(_=>_.id===n.id);o(!!D),g(G),u(j)}},[y.fetching]),a.useMemo(()=>{const{data:w,fetching:M,error:S}=m;if(S&&console.log(S),!M&&w){const I=w.getComment,R=w.getComment.likesCount;u(()=>R),b(()=>I)}},[m]),a.useMemo(()=>{const{data:w,error:M,fetching:S}=x;if(M&&console.log(M),!S&&w){const I=w.getCommentedUser;i.current=I}},[x]);const[P]=ka({variables:{cid:t,first:5,after:c},pause:A()});a.useEffect(()=>{const{error:w,data:M,fetching:S}=P;if(w&&console.log(w),!S&&M){const R=M.getCommentReplies.nodes;l(()=>R)}},[P]);const{fetchMore:$}=xc(v,l,P,c,h),T=async w=>{var j;w.stopPropagation(),o(!d),u(d?s-1:s+1);const M=await C({uid:n==null?void 0:n.id,cid:t,like:!d,mid:v==null?void 0:v.movieId}),{data:S,error:I}=M;I&&console.log(I);const R=(j=S==null?void 0:S.setCommentLike)==null?void 0:j.likeStatus.like;o(R),g(G=>{let D=[];return R?D=[...G,n]:D=G.filter(_=>(_==null?void 0:_.id)!==(n==null?void 0:n.id)),D})};return m.fetching?e(ie,{}):v?e(Wn,{type:"comment",userRef:i,replies:p,comment:v,like:d,fetchMore:$,setLike:o,likesCount:s,likedUsers:f,updateLike:T}):e(ee,{})},yc=xe(ye)(vc),wc=({comment:t,isMain:i})=>{const n=t.movieId,d=W(),o=L(m=>m.user),[s,u]=a.useState(!1),[p,l]=a.useState(t.likesCount),[,c]=dn(),[h]=Lr({variables:{uid:o.id,cid:t.id},pause:A()});return a.useEffect(()=>{const{error:m,data:x,fetching:v}=h;if(!v&&x){const C=x.getIsUserLikedComment.isLiked;u(C)}},[h]),e(Qn,{type:"comment",isMain:i,updateLike:async m=>{var y;m.stopPropagation(),u(!s),l(s?p-1:p+1);const x=await c({uid:o.id,cid:t.id,like:!s,mid:n}),{data:v,error:b}=x,C=(y=v==null?void 0:v.setCommentLike)==null?void 0:y.likeStatus.like;u(C)},likeCount:p,like:s,goToComment:m=>{m.stopPropagation(),d(`/comment/${t.id}`)},comment:t})},pi=xe(ye)(wc),ui=k.div`
  height: 100%;
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  .heading-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 40px;
    .heading,
    .sort {
      padding: 0 20px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .heading {
    }
  }
  .child {
    height: calc(100% - 10px);
    width: 100%;
    overflow: auto;
    .extra {
      display: flex;
      max-height: 120px;
      justify-content: center;
      align-items: center;
    }
  }
`;k.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin: 20px 0px;
  .movie {
    width: 100%;
    display: flex;
  }
  .comments {
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 99.9%;
    border-radius: 20px;
    box-shadow: inset 0 0 5px 1px;
    max-height: 40vh;
    overflow: hidden;
    .comments-child {
      display: block;
      position: relative;
      flex-direction: column;
      align-items: flex-end;
      height: 100%;
      width: 90%;
      margin: 4px 0;
      border-radius: 20px;
      scroll-behavior: smooth;
      overflow: auto;
      /* ::-webkit-scrollbar {
        display: none;
      } */
    }
  }
  @media (max-width: 900px) {
    .comments {
      border-radius: 0px;
    }
  }
`;const bc=(t,i,n)=>{const d=Ge();return{fetchMore:a.useCallback(()=>{var u;const{pageInfo:s}=((u=n==null?void 0:n.data)==null?void 0:u.getCommentsOfTheUser)||{};!(n!=null&&n.data)||!(s!=null&&s.hasNextPage)||d.query(Ln,{first:10,after:s==null?void 0:s.endCursor,uid:t}).toPromise().then(p=>{const{data:l,error:c}=p;console.log(p);const h=l==null?void 0:l.getCommentsOfTheUser;h==null||h.pageInfo;const f=h==null?void 0:h.nodes;i(g=>oe.chain(g).concat(f).uniqBy("id").value())})},[n])}},kc=()=>{const{id:t}=ue(),i=a.useRef(null),n=a.useRef(null);a.useState("");const[d,o]=a.useState([]);a.useEffect(()=>{document.title="Comments - Moovy"},[]);const[s]=ul({variables:{uid:t,first:10,after:""},pause:A()&&!t});a.useEffect(()=>{const{fetching:l,data:c}=s;if(!l&&c){const f=c.getCommentsOfTheUser.nodes;o(f)}},[s]);const u=l=>{l.stopPropagation();const c=l.target;c.scrollHeight-c.scrollTop-2<=c.clientHeight&&(console.log("fetching more"),p())},{fetchMore:p}=bc(t,o,s);return d.length<=0?e(ve,{msg:"No Comments!"}):r(ui,{className:"comments",children:[r(B,{children:[e("title",{children:`${t}: Comments`}),e("meta",{name:"description",content:`${t} comments`}),e("link",{rel:"canonical",href:`${q}/comments/${t}`})]}),e(a.Fragment,{children:r("div",{className:"child",ref:n,onScroll:u,children:[e(Be,{ref:i,viewportRef:n,items:d,children:(l,c)=>l&&e(pi,{comment:l},l.id)}),e("div",{className:"extra",children:s.fetching&&e(ie,{})})]})})]})},Fi=xe(ye,{ssr:!0})(kc),Ri=({type:t})=>{const i=mt();return r(de,{children:[e($e,{text:t,className:"comment-header"}),e(He,{},i.pathname)]})},Cc=k.form`
  display: flex;
  flex-direction: column;
  width: 95%;
  max-width: 600px;
  padding: 1rem;
  background-color: #fff;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  justify-content: center;

  label {
    font-weight: bold;
    margin-bottom: 8px;
    color: #333;
  }

  input,
  textarea {
    padding: 0.5rem;
    margin-bottom: 1rem;
    border: none;
    border-radius: 20px;
    font-size: 1rem;
    width: 95%;
    background-color: #f5f5f5;
    color: #333;
    transition: box-shadow 0.2s ease-in-out;

    &:hover,
    &:focus {
      box-shadow: 0px 0px 3px 3px rgba(0, 119, 255, 0.1);
      outline: none;
    }
  }

  textarea {
    height: 150px;
  }

  button[type='submit'] {
    font-size: 16px;
    font-weight: 600;
    color: #fff;
    background-color: #4e67eb;
    padding: 10px 20px;
    border: none;
    border-radius: 30px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    }

    &:active {
      transform: translateY(0);
      box-shadow: none;
    }
  }
`,Nc=()=>{const[t,i]=a.useState(""),[n,d]=a.useState(""),[o,s]=a.useState(""),[u,p]=a.useState(""),[{fetching:l,error:c},h]=Or(),f=g=>{g.preventDefault(),h({name:t,email:n,subject:u,message:o}).then(m=>{const{error:x,data:v}=m;x&&alert("Failed to send message"),v&&(alert("Message sent successfully!"),i(""),d(""),s(""),p(""))}).catch(()=>{alert("Failed to send message")})};return r(ft,{children:[r(B,{children:[e("title",{children:"Contact Us"}),e("meta",{name:"description",content:"Contact us"}),e("link",{rel:"canonical",href:`${q}/contact`})]}),r(gt,{children:[e("h1",{children:"Contact Us"}),e("p",{children:"Thank you for using MoovyChat. If you have any questions, comments, or concerns, please do not hesitate to contact us."}),r("p",{children:["You can reach us by email at"," ",e("a",{href:"mailto:support@moovychat.com",children:"support@moovychat.com"})," or"," ",e("a",{href:"mailto:chatmoovy@gmail.com",children:"chatmoovy@gmail.com"})," or by filling out the contact form below:"]}),r(Cc,{onSubmit:f,children:[e("label",{htmlFor:"name",children:"Name:"}),e("input",{type:"text",id:"name",name:"name",value:t,required:!0,onChange:g=>i(g.target.value)}),e("label",{htmlFor:"email",children:"Email:"}),e("input",{type:"email",id:"email",name:"email",value:n,required:!0,onChange:g=>d(g.target.value)}),e("label",{htmlFor:"subject",children:"Subject:"}),e("input",{type:"text",id:"subject",name:"subject",value:u,required:!0,onChange:g=>p(g.target.value)}),e("label",{htmlFor:"message",children:"Message:"}),e("textarea",{id:"message",name:"message",value:o,required:!0,onChange:g=>s(g.target.value)}),e("button",{type:"submit",disabled:l,children:l?"Sending message...":"Send"}),c&&e("p",{children:"Error sending message"})]})]})]})},Sc=xe(ye)(Nc),Pc=()=>r(ft,{children:[r(B,{children:[e("title",{children:"Cookie Policy"}),e("meta",{name:"description",content:"Cookie Policy"}),e("link",{rel:"canonical",href:`${q}/privacy`})]}),r(gt,{children:[e("h1",{children:"Cookie Policy"}),r("div",{children:[e("p",{children:"This website uses cookies to improve your experience while you navigate through the website. Out of these cookies, the cookies that are categorized as necessary are stored on your browser as they are essential for the working of basic functionalities of the website. We also use third-party cookies that help us analyze and understand how you use this website."}),e("h3",{children:"What are cookies?"}),e("p",{children:"Cookies are small text files that are stored on your device when you visit a website. Cookies are used to make websites work more efficiently, as well as to provide information to the owners of the site."}),e("h3",{children:"How do we use cookies?"}),e("p",{children:"We use cookies to improve your experience on our website. The cookies we use allow us to recognize you when you return to our website and to remember your preferences (such as language and region) so that you don’t have to set them every time you visit."}),e("h3",{children:"What types of cookies do we use?"}),e("p",{children:"We use the following types of cookies:"}),r("ul",{children:[e("li",{children:"Strictly necessary cookies – these are required for the website to function correctly."}),e("li",{children:"Performance cookies – these help us understand how visitors use our website so that we can improve it."}),e("li",{children:"Functionality cookies – these are used to remember your preferences and to personalize your experience."}),e("li",{children:"Targeting cookies – these are used to deliver advertisements that are relevant to you and your interests."})]}),e("h3",{children:"Third-party cookies"}),e("p",{children:"We also use third-party cookies to help us analyze and understand how you use this website. These cookies are placed by Google Analytics and Facebook Pixel. The information generated by these cookies about your use of the website (including your IP address) will be transmitted to and stored by Google and Facebook on servers in the United States."}),e("h3",{children:"How to control cookies"}),e("p",{children:"You can control the use of cookies on this website through your browser settings. However, please note that disabling cookies may affect the functionality of the website."}),e("h3",{children:"Changes to this Cookie Policy"}),e("p",{children:"We may update this Cookie Policy from time to time in order to reflect changes to the cookies we use or for other operational, legal or regulatory reasons. Please therefore re-visit this Cookie Policy regularly to stay informed about our use of cookies and related technologies."}),e("h3",{children:"Contact Information"}),r("p",{children:["If you have any questions about this Cookie Policy, please contact us at"," ",e("a",{href:"mailto:contact@moovychat.com",children:"contact@moovychat.com"}),"."]})]})]})]}),$c=({user:t,bgChangeHandler:i,profilePicChangeHandler:n,editProfileHandler:d,isDifferentUser:o})=>{const s=a.useRef(null),[u,p]=a.useState(null),[l,c]=a.useState(0),[h]=Rn({variables:{uid:t.id}});a.useMemo(()=>{const{error:m,data:x}=h;if(m&&console.log(m),x){const v=x.getUserProfile;p(v)}},[h]);const f=m=>{if(s&&s.current){const x=s.current.scrollTop;c(()=>x)}};let g=l>40?`${t==null?void 0:t.nickname}`:"Profile";return r(xl,{ref:s,onScroll:f,id:"profile-parent",children:[r(B,{children:[e("title",{children:`${t?t.nickname:"Moovy"}: Profile`}),e("meta",{name:"description",content:`${t?t.nickname:"Moovy"}: Profile`}),e("link",{rel:"canonical",href:`${q}/profile/${t.nickname}}`})]}),e($e,{text:g,className:"comment-header"}),r("div",{className:"top",children:[e("div",{className:"cover-photo",children:e(X,{src:`${t.bg?t.bg:"https://i.pinimg.com/736x/43/f4/1a/43f41accb2871c580fb630e0e8a484e8--cover-picture-cover-pics.jpg"}`,alt:"cover-photo"})}),!o&&r("div",{className:"change-background",onClick:i,children:[e(yi,{size:18}),e("div",{className:"add-cover",children:"Add Cover Photo"})]}),r("div",{className:"user-photo",children:[r("div",{className:"user-container",children:[e(Ce,{src:t.photoUrl,user:t,tooltip:!0}),!o&&e("div",{className:"edit",onClick:n,children:e(yi,{size:25})})]}),r("div",{className:"user-info",children:[r("div",{className:"name",children:[e("span",{className:"main",children:u==null?void 0:u.fullname}),r("span",{className:"us",children:["@",t.nickname]}),!o&&e("span",{className:"i",onClick:d,children:e(qo,{size:18})})]}),r("div",{className:"time",children:["Joined on ",De(t==null?void 0:t.joinedAt)]}),o&&e("div",{className:"follow",children:e(xt,{userId:t.id,nickName:t.nickname})})]})]})]}),r("div",{className:"sub-division",children:[o&&r(jt,{children:[e(ae,{to:"",end:!0,defaultChecked:!0,className:"nav",children:e("div",{children:"Basic"})}),e(ae,{to:"comments",className:"nav",children:e("div",{children:"Comments"})}),e(ae,{to:"replies",className:"nav",children:e("div",{children:"Replies"})})]}),e(He,{})]})]})},Mc=()=>{const{id:t}=ue(),[i,n]=a.useState(null),d=L(g=>g.user),o=K(),s=t!==d.nickname,[{error:u,fetching:p,data:l}]=Fn({variables:{nickname:t},pause:A()}),c=g=>{g.stopPropagation(),Y.unstable_batchedUpdates(()=>{o(V(!0)),o(Q(te.IMAGE_POP_UP))})},h=g=>{g.stopPropagation(),Y.unstable_batchedUpdates(()=>{o(V(!0)),o(Q(te.BG_POP_UP))})},f=g=>{g.stopPropagation(),Y.unstable_batchedUpdates(()=>{o(V(!0)),o(Q(te.EDIT_PROFILE))})};return a.useEffect(()=>{u&&console.log(u),l&&n(()=>l==null?void 0:l.getUserByUserName)},[p,l,u,t]),u?e(ee,{}):e(re.Fragment,{children:i&&e($c,{isDifferentUser:s,user:i,currentUser:d,profilePicChangeHandler:c,bgChangeHandler:h,editProfileHandler:f})})},Tc=k.div`
  width: 100%;
  height: 100px;
  color: white;
  font-size: 12px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #c034c0;
  .arc-btn {
    display: inline-block;
    padding: 10px 20px;
    background-color: #3498db;
    color: #fff;
    text-align: center;
    text-decoration: none;
    font-size: 14px;
    font-weight: bold;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition: all 0.2s ease-in-out;
    z-index: 1;
    ::before {
    }
    :hover {
      ::before {
        content: '';
        color: white;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: -1;
        width: 200px;
        height: 200px;
        background-image: url('https://images.unsplash.com/photo-1531328552016-28615c8ea91f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80');
        background-size: cover;
        animation: particles 1s ease-in-out;
      }
    }

    @keyframes particles {
      0% {
        transform: translate(-50%, -50%) scale(0.4);
        opacity: 0;
      }
      100% {
        transform: translate(-50%, -50%) scale(1);
        opacity: 1;
      }
    }
  }
`,Ec=()=>r(Tc,{children:[e("p",{children:"New version available. Please update to latest version."}),e("div",{className:"arc-btn",onClick:t=>{t.stopPropagation(),window.open("https://www.netflix.com/watch/81513788?trackId=14170287&tctx=2%2C1%2C425f6d7d-f1b3-4d5c-b76c-bdc44b9b384d-32516550%2CNES_21968F364C22BEA080F24A6E382619-B9F225DDE3A711-640966F254_p_1676936973581%2C%2C%2C%2C%2C%2CVideo%3A81091393","_blank")},children:"Update"})]}),Yn=ht`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100%;
  margin: 5px 0;
  overflow-y: auto;
  overflow-x: hidden;
`,Ic=k.div`
  ${Yn}
`,Uc=k.div`
  ${Yn}
  opacity: 0;
  transition: all 1s;
  // Enter from
  &.ttList-enter {
    opacity: 0;
    transition: opacity 100ms ease-in;
  }
  //Enter to
  &.ttList-enter-active {
    opacity: 0;
    transition: opacity 100ms ease-in;
  }
  //Enter to
  &.ttList-enter-done {
    opacity: 1;
    transition: opacity 100ms ease-in;
  }

  // exit from
  &.ttList-exit {
    opacity: 1;
    transition: opacity 100ms ease-in;
  }

  // exit to
  &.ttList-exit-active {
    opacity: 1;
    transition: opacity 100ms ease-in;
  }
  // exit to
  &.ttList-exit-done {
    background-color: #ff005d;
    opacity: 0;
    transition: opacity 100ms ease-in;
  }
`,hi=({page:t,setPage:i,lastPage:n,movieStatsData:d,fetching:o})=>{const s=a.useRef(null),u=a.useRef(null),p=a.useRef(!1);a.useEffect(()=>(p.current=!0,()=>{p.current=!1}),[]);const l=c=>{c.stopPropagation();const h=c.target;h.scrollHeight-h.scrollTop-2<=h.clientHeight&&t!==n&&i(f=>f+1)};return e(It,{in:p.current,classNames:"ttList",timeout:100,nodeRef:u,children:r(Uc,{onScroll:l,ref:u,className:"styled-titleList",children:[d.length>0?e(re.Fragment,{children:e(Be,{ref:s,viewportRef:u,items:d,children:(c,h)=>e(Ze,{movieId:c.movieId},c.movieId)})}):e(ve,{msg:"List is empty."}),e("div",{className:"extra",children:o&&e(ie,{})})]})})},Ue=()=>{const t=W(),[{data:i,fetching:n,error:d}]=Ot(),o=K();a.useEffect(()=>{if(d&&console.log(d),!n&&i){const s=i==null?void 0:i.me;s||t("/"),o(Ee(s))}},[n,i,d])},Fc=()=>{const{id:t}=ue();Ue();const[i,n]=a.useState(1),[d,o]=a.useState([]),[s,u]=a.useState(1),[p]=Yr({variables:{page:i,uid:t,limit:6},pause:A()});return a.useEffect(()=>{const{data:l,error:c,fetching:h}=p;if(c&&console.log(c),!h&&l){const f=l.getFavTitles,g=f.movieStats;o(()=>g);const m=f.lastPage;u(()=>m)}},[p]),p.error?e(ee,{}):r(de,{children:[r(B,{children:[e("title",{children:`${t}: Favorites`}),e("meta",{name:"description",content:`${t}: Favorites`}),e("link",{rel:"canonical",href:`${q}/activity/${t}/favorites`})]}),e(hi,{page:i,setPage:n,fetching:p.fetching,lastPage:s,movieStatsData:d})]})},Rc=()=>{const{id:t}=ue();return r(Ic,{children:[r(B,{children:[e("title",{children:`${t}: Favorites`}),e("meta",{name:"description",content:`${t}: Favorites`}),e("link",{rel:"canonical",href:`${q}/activity/${t}/favorites`})]}),e($e,{text:"Favorites",className:"feed-header"}),r(jt,{children:[e(ae,{to:`${t}/favorites`,end:!0,defaultChecked:!0,className:"nav",children:e("div",{children:"Favorite Titles"})}),e(ae,{to:`${t}/liked`,className:"nav",children:e("div",{children:"Liked Titles"})}),e(ae,{to:`${t}/history`,className:"nav",children:e("div",{children:"History"})})]}),e(He,{})]})},Ac=({id:t})=>{const[i,n]=a.useState(null),[d]=pn({variables:{cid:t},pause:A()});return a.useEffect(()=>{const{error:o,data:s,fetching:u}=d;if(!u&&s){const p=s.getComment;n(()=>p)}},[d]),d.fetching?e(ie,{}):i?e(pi,{comment:i}):e(de,{})},Lc=k.div`
  .mini {
    width: 90%;
    float: right;
    margin-right: 10px;
    margin-bottom: 10px;
  }
`,zc=({id:t})=>{const[i,n]=a.useState(null),[d]=kn({variables:{rid:t},pause:A()});return a.useEffect(()=>{const{error:o,data:s,fetching:u}=d;if(!u&&s){const p=s.getReply;n(()=>p)}},[d]),d.data?d.fetching?e(ie,{}):i?r(Lc,{children:[e(di,{comment:i}),e(Dt,{className:"mini",type:i.parentCommentId===i.parentReplyId?"comment":"reply",id:i.parentReplyId})]}):e(de,{}):e(de,{})},Oc=(t,i,n,d,o)=>{const s=Ge();return{fetchMore:a.useCallback(()=>{var l;const{pageInfo:p}=((l=n==null?void 0:n.data)==null?void 0:l.getFeed)||{};!(n!=null&&n.data)||!(p!=null&&p.hasNextPage)||s.query(Tn,{first:10,after:d,uid:t}).toPromise().then(c=>{const{data:h,error:f}=c;console.log({data:h});const g=h==null?void 0:h.getFeed,m=g==null?void 0:g.pageInfo;o(()=>m==null?void 0:m.endCursor);const x=g==null?void 0:g.nodes;i(v=>oe.chain(v).concat(x).uniqBy("id").value())})},[n])}},jc=()=>{const t=L(h=>h.user),i=a.useRef(null),n=a.useRef(null),[d,o]=a.useState([]),[s,u]=a.useState(""),[p]=tl({variables:{uid:t==null?void 0:t.id,first:10,after:s},pause:A()}),{fetchMore:l}=Oc(t.id,o,p,s,u),c=h=>{h.stopPropagation();const f=h.target;f.scrollHeight-f.scrollTop-2<=f.clientHeight&&(console.log("fetching more"),l())};return a.useEffect(()=>{const{error:h,data:f,fetching:g}=p;if(h&&console.log(h),!g&&f){const m=f.getFeed;o(()=>m.nodes)}},[p]),p.error?e(ee,{}):d.length<=0?r(de,{children:[r(B,{children:[e("title",{children:"Feed"}),e("meta",{name:"description",content:"Feed"}),e("link",{rel:"canonical",href:`${q}`})]}),e($e,{text:"Feed",className:"feed-header"}),e(ve,{msg:"Your Feed is empty!"})]}):r(de,{children:[e($e,{text:"Feed",className:"feed-header"}),r(B,{children:[e("title",{children:"Feed"}),e("meta",{name:"description",content:"Feed"}),e("link",{rel:"canonical",href:`${q}`})]}),e(ui,{children:r("div",{className:"child",ref:n,onScroll:c,children:[e(Be,{ref:i,viewportRef:n,items:d,children:(h,f)=>h.type==="comment"?e(Ac,{id:h.id},f+h.id):e(zc,{id:h.id},f+h.id)}),e("div",{className:"extra",children:p.fetching&&e(ie,{})})]})})]})},Dc=k.div`
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
`,_c={apiKey:"AIzaSyCqvcYWcvSpwFJrT-zls8LIFv3ovu9lBIk",authDomain:"netflix-comments-357200.firebaseapp.com",projectId:"netflix-comments-357200",storageBucket:"netflix-comments-357200.appspot.com",messagingSenderId:"596322814794",appId:"1:596322814794:web:7ff40e1b178548308dcfb3",measurementId:"G-D9XS9MB3K3"},Vn=Qo(_c);Wi(Vn);Wo();const Hc=Wi(Vn);var Gc=new Yt;const Xn=()=>new Promise((t,i)=>{Yo(Hc,Gc).then(n=>{const d=Yt.credentialFromResult(n);if(!d)throw new Error("Login failed");d.accessToken;const o=n.user;if(!o)throw new Error("User not found");const s={id:o.uid,name:o.displayName,nickname:o.displayName,email:o.email,photoUrl:o.photoURL};t(s)}).catch(n=>{console.error(n),i(n),n.code,n.message,n.customData.email,Yt.credentialFromError(n)})}),Bc=()=>{const[,t]=Pn(),[i,n]=Sn(),[d,o]=a.useState(null),s=K(),u=W(),[p,l]=a.useState(!1),[c,h]=a.useState(!1),[f,g]=a.useState(!1);a.useEffect(()=>{const v=new Image;v.src=pt,v.addEventListener("load",()=>{l(!0)})},[]);const m=["https://play-lh.googleusercontent.com/TBRwjS_qfJCSj1m7zZB93FnpJM5fSpMA_wUlFDLxWAb45T9RmwBvQd5cWR5viJJOhkI","https://play-lh.googleusercontent.com/xoGGYH2LgLibLDBoxMg-ZE16b-RNfITw_OgXBWRAPin2FZY4FGB9QKBYApR-0rSCkQ=w240-h480-rw","https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/bk8cux6dapq8qjzylfaj","https://play-lh.googleusercontent.com/1iyX7VdQ7MlM7iotI9XDtTwgiVmqFGzqwz10L67XVoyiTmJVoHX87QtqvcXgUnb0AC8","https://images-na.ssl-images-amazon.com/images/I/41mpv9rBhmL.png"],x=async v=>{var P;v.stopPropagation();const b=await Xn(),C=await t({uid:b.id}),{data:y}=C,N=(P=y==null?void 0:y.login)==null?void 0:P.user;if(N){try{chrome.runtime.sendMessage(Xt,{type:"EXTENSION_LOG_IN",user:N},$=>{$.loggedIn?g(!0):h(!0)})}catch($){console.log($)}localStorage.setItem("user",JSON.stringify(d)),s(Ee(N)),o(()=>N)}else{const{name:$,email:T,photoUrl:w,nickname:M,id:S}=b;n({options:{name:$,email:T,photoUrl:w,nickname:M,id:S}}).then(R=>{const{data:j,error:G}=R;G&&console.log(G);const D=j==null?void 0:j.createUser;try{chrome.runtime.sendMessage(Xt,{type:"EXTENSION_LOG_IN",user:D},_=>{_.loggedIn?g(!0):h(!0)})}catch(_){console.log(_)}localStorage.setItem("user",JSON.stringify(D)),s(Ee(D)),t({uid:D==null?void 0:D.id})}).catch(R=>{console.log("ERR: Unable to create user",R)})}try{new BroadcastChannel("reloadTabsChannel").postMessage("reload")}catch($){console.log($)}window.close(),u("/")};return r(Dc,{children:[r(B,{children:[e("title",{children:"Google Login"}),e("meta",{name:"description",content:"Google Login"}),e("link",{rel:"canonical",href:`${q}/google-login`})]}),r("div",{className:"bubble-container",children:[e("div",{className:"bubble",children:e("img",{src:m[0],alt:"Netflix"})}),e("div",{className:"bubble",children:e("img",{src:m[1],alt:"Disney+"})}),e("div",{className:"bubble",children:e("img",{src:m[2],alt:"Amazon Prime Video"})}),e("div",{className:"bubble",children:e("img",{src:m[3],alt:"Hulu"})}),e("div",{className:"bubble",children:e("img",{src:m[4],alt:"Hulk"})})]}),e("div",{className:"logo",children:e("img",{src:pt,alt:"Moovy"})}),e("button",{className:"popup-spl-btn",onClick:x,children:"Log in"}),c&&e("div",{children:"Login Error"}),f&&e("div",{children:"Login Success"}),r("div",{className:"text-msg",children:[e("div",{children:"**Currently, only Netflix is supported"}),e("div",{children:"MoovyChat, 2023"}),e("a",{href:"www.moovychat.com",target:"_blank",children:"www.moovychat.com"})]})]})},qc=()=>{const{id:t}=ue();Ue();const[i,n]=a.useState(1),[d,o]=a.useState([]),[s,u]=a.useState(1),[p]=Vr({variables:{page:i,uid:t,limit:6},pause:A()});return a.useEffect(()=>{const{data:l,error:c,fetching:h}=p;if(c&&console.log(c),!h&&l){const f=l.getLikedTitles,g=f.movieStats;o(()=>g);const m=f.lastPage;u(()=>m)}},[p]),p.error?e(ee,{}):r(de,{children:[r(B,{children:[e("title",{children:`${t}: Liked Titles`}),e("meta",{name:"description",content:`${t}: Liked Titles`}),e("link",{rel:"canonical",href:`${q}/activity/${t}/liked`})]}),e(hi,{page:i,setPage:n,fetching:p.fetching,lastPage:s,movieStatsData:d})]})},Qc=k.div`
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
`,Wc=k.div`
  display: flex;
  align-items: center;
  .watch-video {
    margin-left: 40px;
  }
`,Yc=k.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 15px;
  border-radius: 15px;
  background-color: #a31414;
  font-size: 0.6em;
  color: #fff;
  gap: 10px;
  transition: all 0.3s ease-in-out;
  :hover {
    cursor: pointer;
    filter: contrast(120%);
    border-radius: 0px;
    box-shadow: 0 0 5px;
    transform: scale(1.1);
  }
`,Kn=({className:t,platform:i,url:n,type:d,id:o})=>r(Yc,{onClick:u=>{if(u.stopPropagation(),i==="NETFLIX"){let p=`https://www.netflix.com/${d==="show"?"title":"watch"}/${o}`;window.open(p,"_blank")}},className:t,children:[e("span",{children:e(Vo,{size:20})}),r("span",{children:[" Watch on ",i]})]}),Vc=()=>{Ue();const{id:t}=ue();a.useEffect(()=>{document.title="Movie - Moovy"},[]);const i=a.useRef(null),[n,d]=a.useState(!1),[o,s]=a.useState(),[u,p]=a.useState(1),[l,c]=a.useState(1),[h,f]=a.useState(!1),[g,m]=a.useState(1),[x,v]=a.useState(0),[b,C]=a.useState([]),[{data:y,error:N,fetching:P}]=Qr({variables:{mid:t,page:u},pause:A()});a.useEffect(()=>{if(!t){d(!1);return}const S=St(t);d(S)},[t]);const[$,T]=zt({variables:{mid:t},pause:A()});a.useMemo(()=>{const{data:S,error:I,fetching:R}=$;if(I&&console.log(I),!R&&S){const j=S.getMovie;s(()=>j)}},[$]),a.useMemo(()=>{if(N&&console.log(N),!P&&y){const S=y.getCommentsOfTheMovie,I=S.lastPage;m(()=>I),f(()=>S.hasMoreComments),C(()=>S.comments)}},[y,N,P]);const w=S=>{S.stopPropagation();const I=i.current.scrollTop;v(I)};let M=x>40?`${o==null?void 0:o.name}`:"Movie";return P?e(ie,{}):o?r("div",{children:[r(B,{children:[e("title",{children:`${o.name}: Comments`}),e("meta",{name:"description",content:`${o.name}: Comments`}),e("link",{rel:"canonical",href:`${q}/movie/${o.id}`})]}),n?r(Qc,{onScroll:w,ref:i,children:[e($e,{className:"movie-header",children:r(Wc,{children:[e("span",{children:M}),e(Kn,{id:t,platform:"NETFLIX",type:"movie",className:"watch-video"})]})}),r("div",{className:"movie-container",children:[e("div",{className:"thread-movie",children:e(Ze,{movieId:o.id})}),b&&b.length!==0?r("div",{className:"thread-comments",children:[b==null?void 0:b.map(S=>e(pi,{comment:S,isMain:!0},S.id)),h&&e("div",{className:"show-more",onClick:S=>{S.stopPropagation(),p(u+1),c(()=>u+1)},children:"Show more comments"})]}):e("div",{className:"no-data",children:e(ve,{msg:"No Comments yet. Make your first comment"})})]}),e(Bn,{type:"movie",data:o})]}):e(ee,{})]}):e(ee,{})},Xc=xe(ye)(Vc),mi=({title:t,parentRef:i,index:n,totalItems:d})=>{const o=W(),s=a.useRef(null),[u,p]=a.useState(!1),l=a.useRef(null),[c,h]=a.useState(0),[f,g]=a.useState(!1),[m,x]=a.useState(!1),[v,b]=a.useState(!1),[C,y]=a.useState(!1),[N,P]=a.useState("");a.useEffect(()=>{var j,G;const M=(j=i.current)==null?void 0:j.offsetWidth,S=(G=s.current)==null?void 0:G.offsetWidth;h(()=>Math.floor(M/S));const I=d%c===0?c:d%c;n%c!==0&&n%c!==1?(x(()=>!1),g(()=>!1)):(n%c===0&&(g(()=>!1),x(()=>!0)),n%c===1&&(g(()=>!0),x(()=>!1))),n<=c?(b(()=>!0),y(()=>!1)):n>d-I&&(b(()=>!1),y(()=>!0));const R=u?f?v?"translateX(-40%) translateY(-30%)":C?"translateX(-40%) translateY(-65%)":"translateX(-40%) translateY(-50%)":m?v?"translateX(-60%) translateY(-30%)":C?"translateX(-60%) translateY(-65%)":"translateX(-60%) translateY(-50%)":v?"translateX(-50%) translateY(-30%)":C?"translateX(-50%) translateY(-70%)":"translateX(-50%) translateY(-50%)":"";P(()=>R)},[i.current,s.current,u]);let $;const T=M=>{M?$=setTimeout(()=>{!u&&p(()=>M)},500):(u&&p(()=>M),$&&clearTimeout($))};return e(Ul,{hover:u,ref:s,styledHover:N,onClick:M=>{M.stopPropagation(),t.type==="movie"?o(`/movie/${t.id}`):t.type==="show"&&o(`/show/${t.id}`)},onMouseEnter:()=>T(!0),onMouseLeave:()=>T(!1),children:r("div",{className:"container",ref:l,children:[e("div",{className:"title-bg",children:e("img",{src:t.artwork,alt:"title",loading:"lazy"})}),u&&r("div",{className:"info",children:[e("div",{className:"title",children:t.title}),r("div",{className:"title-attr",children:[e("div",{children:t.type}),t.year!==0&&e("div",{children:t.year}),r("div",{children:["Rating: ",t.rating]}),t.runtime!==0&&r("div",{children:[Math.round(t.runtime/60)," min"]})]})]})]})})},Jn=(t,i,n)=>{const d=Ge();return{fetchMore:a.useCallback(()=>{var u;const{pageInfo:s}=((u=n==null?void 0:n.data)==null?void 0:u.getPaginatedTitles)||{};!(n!=null&&n.data)||!(s!=null&&s.hasNextPage)||d.query(xn,{first:9,after:s==null?void 0:s.endCursor,type:t}).toPromise().then(p=>{const{data:l,error:c}=p,h=l==null?void 0:l.getPaginatedTitles,f=h==null?void 0:h.nodes;i(g=>oe.chain(g).concat(f).uniqBy("id").value())})},[n])}},Kc=()=>{const t=a.useRef(null);a.useEffect(()=>{document.title="Movies - Moovy"},[]);const[i,n]=a.useState([]),[d]=vn({variables:{type:"movie",first:15,after:""},pause:A()});a.useMemo(()=>{const{data:u,error:p,fetching:l}=d;if(p&&console.log(p),!l&&u){const c=u.getPaginatedTitles,h=c==null?void 0:c.nodes;n(h)}},[d]);const{fetchMore:o}=Jn("movie",n,d),s=u=>{u.stopPropagation();const p=u.target;p.scrollHeight-p.scrollTop-2<=p.clientHeight&&o()};return d.fetching?r(Tt,{children:[e(ie,{}),";"]}):i&&(i==null?void 0:i.length)<=0?e(ve,{msg:"Movies catalog is empty"}):r(Tt,{ref:t,onScroll:s,children:[r(B,{children:[e("title",{children:"Moovy: Movies"}),e("meta",{name:"description",content:"List of all movies"}),e("link",{rel:"canonical",href:`${q}/catalog`})]}),i&&i.map((u,p)=>u&&e(mi,{title:u,parentRef:t,index:p+1,totalItems:i.length},u.id))]})},Jc=k.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 100%;
  height: 100%;
  .header {
    width: 100%;
    .header-text {
      width: 100%;
    }
    .heading {
      padding: 20px 0;
      display: flex;
      width: 100%;
      justify-content: space-between;
      align-items: center;
      .count {
        margin-left: 10px;
        padding: 2px 10px;
        font-size: 0.6em;
        background-color: ${t=>t.theme.nav};
        color: white;
        font-weight: 700;
        border-radius: 18px;
      }
      .clear {
        font-size: 14px;
        margin-right: 10px;
        box-shadow: 0 0 1px;
        padding: 7px 10px;
        border-radius: 18px;
        cursor: pointer;
        :hover {
          box-shadow: 0 0 5px;
        }
      }
    }
  }
  .notifications {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    overflow: auto;
  }
`,Zc=k.div`
  display: flex;
  position: relative;
  width: 100%;
  flex-direction: column;
  padding: 25px 0px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-top: 0.3px solid #8f8f8f81;
  :nth-last-child(2) {
    border-bottom: 0.3px solid #8f8f8f81;
  }
  .first {
    display: flex;
    width: 100%;
    height: 100%;
    min-height: 40px;
    .profile-pic {
      position: absolute;
      top: 20px;
      left: 25px;
      width: 50px;
      height: 50px;
    }
    .message {
      position: absolute;
      left: 90px;
      width: 70%;
      font-weight: 500;
      line-height: 16px;
      .new {
        margin-right: 10px;
        padding: 2px 10px;
        font-size: 0.7em;
        background-color: #0099ff;
        color: white;
        font-weight: 700;
        border-radius: 18px;
      }
    }
    .timestamp {
      position: absolute;
      right: 20px;
      font-size: 0.8em;
      font-weight: 600;
    }
  }
  .second {
    width: 70%;
  }
`,ed=({notification:t,onClick:i,type:n})=>r(Zc,{onClick:i,children:[r("div",{className:"first",children:[e("div",{className:"profile-pic",children:e(Ce,{src:t.fromUserPhotoUrl,tooltip:!0})}),r("div",{className:"message",children:[!t.isRead&&e("span",{className:"new",children:"New"}),e("span",{children:t.message})]}),e("div",{className:"timestamp",children:ai(t.createdAt)})]}),e("div",{className:"second",children:n==="LikeNotifications"&&e(Dt,{id:t.commentId,type:"comment",className:"mini"})})]}),td=()=>{const t=L(x=>x.user),i=a.useRef(null),n=a.useRef(null),d=W(),[o,s]=a.useState([]),[,u]=na(),[p,l]=a.useState(1),[c]=ra({variables:{uid:t.id,page:p,limit:5},pause:A()}),[,h]=sa();a.useEffect(()=>{document.title="Notifications - Moovy"},[]);const f=x=>{x.stopPropagation();const v=x.target;v.scrollHeight-v.scrollTop-2<=v.clientHeight&&l(b=>b+1)};a.useEffect(()=>{o.map(x=>{h({id:parseInt(x.id),type:x.__typename==="LikeNotifications"?"like":"follow",uid:t.id})})},[o.length]),a.useEffect(()=>{const{data:x,error:v,fetching:b}=c;if(v&&console.log(v),!b&&x){const C=x.getUserNotifications,y=C.follow,N=C.like;let P=[];const $=oe.chain(P).concat(y).concat(N).uniqBy("createdAt").orderBy("updatedAt","desc").value();s(()=>$)}},[c]);const g=x=>{x.__typename==="LikeNotifications"?d(`/comment/${x.commentId}`):d(`/profile/${x.fromUser}`)},m=x=>{x.stopPropagation(),u({uid:t.id})};return c.fetching?e(ie,{}):c.error?e(ee,{}):r(Jc,{children:[r(B,{children:[e("title",{children:"Moovy: Notifications"}),e("meta",{name:"description",content:"Notifications"}),e("link",{rel:"canonical",href:`${q}/notifications}`})]}),e($e,{className:"header",children:r(Gn,{className:"heading",children:[r("div",{children:[e("span",{children:"Notifications"}),e("span",{className:"count",children:o==null?void 0:o.filter(x=>!x.isRead).length})]}),o.length>0&&e("div",{className:"clear",onClick:m,children:"Clear Notifications"})]})}),o.length>0?e("div",{className:"notifications",onScroll:f,ref:n,children:e(Be,{ref:i,viewportRef:n,items:o,children:(x,v)=>x&&e(ed,{type:x.__typename,notification:x,onClick:b=>{b.stopPropagation(),g(x)}},x.createdAt)})}):e(ve,{msg:"Notifications are empty"})]})},id=xe(ye)(td),nd=()=>{const[,t]=La(),[i,n]=a.useState(!1);return a.useEffect(()=>{const d=new URL(window.location.href),o=new URLSearchParams(d.search),s=o.get("iv"),u=o.get("data");s&&u&&t({iv:s,data:u}).then(p=>{const{error:l,data:c}=p;if(l&&console.log(l),c){const h=c==null?void 0:c.decryptData,f=h==null?void 0:h.split("?")[1];f==null||f.split("=")[0].trim().toLowerCase(),f==null||f.split("=")[1].trim().toLowerCase()}})},[]),e("div",{children:i?"Please do not close the browser":"You can safely close this tab"})},od=()=>{const t="February 19, 2023";return a.useEffect(()=>{document.title="Privacy Policy"},[]),r(ft,{children:[r(B,{children:[e("title",{children:"Privacy Policy"}),e("meta",{name:"description",content:"Privacy Policy"}),e("link",{rel:"canonical",href:`${q}/privacy}`})]}),r(gt,{children:[e(ur,{children:"Privacy Policy"}),r(hr,{children:["Last updated: ",t]}),e(me,{children:"This Privacy Policy sets out how MoovyChat Ltd. (“MoovyChat”) uses and protects any information that you give MoovyChat when you use our website, tool, and Chrome extension (collectively, the “Service”)."}),e(me,{children:"MoovyChat is committed to ensuring that your privacy is protected. Should we ask you to provide certain information by which you can be identified when using the Service, then you can be assured that it will only be used in accordance with this Privacy Policy."}),e(ke,{children:"Information We Collect"}),r(me,{children:["We may collect the following information:",r("ul",{children:[e("li",{children:"Information you provide when you sign up for the Service, such as your name and email address"}),e("li",{children:"Information related to your use of the Service, such as your comments and feedback, your activity on the Service (such as views and visits), and technical information (such as device type and browser type)"}),e("li",{children:"Information from third party platforms that you use to sign in to the Service, such as Google Login"})]})]}),e(ke,{children:"Relationship to OTT Platforms"}),e(me,{children:"We are not affiliated with any OTT platforms, such as Netflix, and we are an independent developer offering a tool and chrome extension to enhance users' OTT watching experience. We do not collect any personal information about users' activity on any OTT platforms other than our own Service, and we do not share any user data with OTT platforms or their partners."}),e(ke,{children:"How We Use Your Information"}),r(me,{children:["We may use the information we collect from you for the following purposes:",r("ul",{children:[e("li",{children:"To provide and improve the Service"}),e("li",{children:"To personalize your experience on the Service"}),e("li",{children:"To communicate with you about the Service and related products and services"}),e("li",{children:"To monitor and analyze usage of the Service"}),e("li",{children:"To comply with legal obligations"})]})]}),e(ke,{children:"Sharing Your Information"}),r(me,{children:["We may share your information with third parties in the following circumstances:",r("ul",{children:[e("li",{children:"With service providers who help us to provide the Service, such as hosting providers and analytics providers"}),e("li",{children:"To comply with legal obligations, such as in response to a subpoena or court order"}),e("li",{children:"If we believe that disclosure is necessary to protect our rights or property, or the rights or property of others"}),e("li",{children:"In connection with a sale, merger, acquisition, or other corporate transaction"})]})]}),e(ke,{children:"Security"}),e(me,{children:"We are committed to ensuring that your information is secure. In order to prevent unauthorized access or disclosure, we have put in place suitable physical, electronic, and managerial procedures to safeguard and secure the information we collect online."}),e(ke,{children:"Google Analytics and Firebase"}),e(me,{children:"We use Google Analytics and Firebase to help us understand how our users engage with the Service. Google Analytics and Firebase use cookies to collect information about your use of the Service. This information is used to compile reports and to help us improve the Service. The information collected by Google Analytics and Firebase is anonymous and does not identify you as an individual."}),e(me,{children:"We also use Firebase to authenticate users who sign in to the Service using Google Login. When you sign in using Google Login, we collect your name and email address from Google to create a user profile on the Service."}),e(ke,{children:"Third-Party Links"}),e(me,{children:"The Service may contain links to third-party websites or services. We are not responsible for the privacy practices or the content of such websites or services. We encourage you to read the privacy policies of any third-party websites or services that you visit."}),e(ke,{children:"Data Security"}),e(me,{children:"We take reasonable measures to protect your information from unauthorized access, disclosure, and alteration. However, no method of transmission over the internet or electronic storage is completely secure."}),e(ke,{children:"Children's Privacy"}),e(me,{children:"The Service is not intended for use by children under the age of 13. We do not knowingly collect personal information from children under 13."}),e(ke,{children:"Your Choices"}),r(me,{children:["You may access and update your information by contacting us at"," ",e("a",{href:"mailto:support@moovychat.com",children:"support@moovychat.com"})," or"," ",e("a",{href:"mailto:chatmoovy@gmail.com",children:"chatmoovy@gmail.com"}),". You may also opt-out of receiving promotional messages from us by following the instructions in those messages."]}),e(ke,{children:"Changes to this Privacy Policy"}),e(me,{children:"MoovyChat may change this Privacy Policy from time to time. We will post the updated Privacy Policy on the Service and will indicate the date of the latest revision. We encourage you to review the Privacy Policy regularly for any updates or changes."}),e(ke,{children:"Contact Us"}),r(me,{children:["If you have any questions or concerns about this Privacy Policy, please contact us at"," ",e("a",{href:"mailto:support@moovychat.com",children:"support@moovychat.com"})," or"," ",e("a",{href:"mailto:chatmoovy@gmail.com",children:"chatmoovy@gmail.com"})," ."]})]})]})},sd=(t,i,n)=>{const d=Ge();return{fetchMore:a.useCallback(()=>{var u;const{pageInfo:s}=((u=n==null?void 0:n.data)==null?void 0:u.getRepliesOfTheUser)||{};!(n!=null&&n.data)||!(s!=null&&s.hasNextPage)||d.query(zn,{first:10,after:s==null?void 0:s.endCursor,uid:t}).toPromise().then(p=>{const{data:l,error:c}=p;console.log(p);const h=l==null?void 0:l.getRepliesOfTheUser;h==null||h.pageInfo;const f=h==null?void 0:h.nodes;i(g=>oe.chain(g).concat(f).uniqBy("id").value())})},[n])}},rd=()=>{const{id:t}=ue();a.useEffect(()=>{document.title="Replies - Moovy"},[]);const i=a.useRef(null),[n,d]=a.useState([]),o=a.useRef(null),[s]=hl({variables:{uid:t,first:10},pause:A()&&!t});a.useEffect(()=>{const{data:l,fetching:c}=s;if(!c&&l){const f=l.getRepliesOfTheUser.nodes;d(f)}},[s]);const u=l=>{l.stopPropagation();const c=l.target;c.scrollHeight-c.scrollTop-2<=c.clientHeight&&p()},{fetchMore:p}=sd(t,d,s);return!t||s.error?e(ee,{}):n.length<=0?e(ve,{msg:"No Replies!"}):r(ui,{children:[r(B,{children:[e("title",{children:`${t}: Replies`}),e("meta",{name:"description",content:`${t} replies`}),e("link",{rel:"canonical",href:`${q}/replies/${t}`})]}),e(a.Fragment,{children:r("div",{className:"child",onScroll:u,ref:o,children:[e(Be,{ref:i,viewportRef:o,items:n,children:(l,c)=>l&&e(di,{comment:l},l.id)}),e("div",{className:"extra",children:s.fetching&&e(ie,{})})]})})]})},Ai=xe(ye,{ssr:!0})(rd),ad=(t,i,n,d,o)=>{const s=Ge();return{fetchMore:a.useCallback(()=>{var l;const{pageInfo:p}=((l=n==null?void 0:n.data)==null?void 0:l.getRepliesOfReply)||{};!(n!=null&&n.data)||!(p!=null&&p.hasNextPage)||s.query(bn,{first:5,after:d,rid:t==null?void 0:t.id}).toPromise().then(c=>{const{data:h,error:f}=c;console.log(h);const g=h==null?void 0:h.getRepliesOfReply,m=g==null?void 0:g.pageInfo;o(()=>m==null?void 0:m.endCursor);const x=g==null?void 0:g.nodes;i(v=>oe.chain(v).concat(x).uniqBy("id").value())})},[n])}},ld=()=>{const{id:t}=ue();a.useEffect(()=>{document.title="Reply - Moovy"},[]);const i=a.useRef(null),n=L(w=>w.user);a.useState(1);const[d,o]=a.useState(!1),[s,u]=a.useState([]),[p,l]=a.useState(0),[c,h]=a.useState(""),[f,g]=a.useState([]),[m,x]=Nn({variables:{rid:t,limit:10,page:1},pause:A()}),[,v]=wn(),[b]=kn({variables:{rid:t},pause:A()}),[C]=ba({variables:{rid:t},pause:A()}),[y]=Ca({variables:{rid:t,first:5,after:c},pause:A()}),[N,P]=a.useState(null);a.useEffect(()=>{var I,R;const{data:w,fetching:M,error:S}=m;if(S&&console.log(S),!M&&w){const j=(I=w.getReplyLikes)==null?void 0:I.likesCount,G=(R=w.getReplyLikes)==null?void 0:R.likes,D=G==null?void 0:G.find(_=>_.id===n.id);o(!!D),g(G),l(j)}},[m.fetching]),a.useEffect(()=>{const{data:w,fetching:M,error:S}=b;if(S&&console.log(S),!M&&w){const I=w.getReply;P(()=>I)}},[b]),a.useEffect(()=>{const{data:w,error:M,fetching:S}=C;if(M&&console.log(M),!S&&w){const I=w.getRepliedUser;i.current=I}},[C]),a.useEffect(()=>{const{data:w,error:M,fetching:S}=y;if(M&&console.log(M),!S&&w){const I=w.getRepliesOfReply;u(()=>I.nodes),console.log(I)}},[y]);const{fetchMore:$}=ad(N,u,y,c,h),T=async w=>{var j;w.stopPropagation(),o(!d),l(d?p-1:p+1);const M=await v({uid:n==null?void 0:n.id,rid:t,like:!d,mid:N==null?void 0:N.movieId}),{data:S,error:I}=M;I&&console.log(I);const R=(j=S==null?void 0:S.setReplyLike)==null?void 0:j.likeStatus.like;o(R)};return b.fetching?e(ie,{}):N?e(Wn,{type:"reply",userRef:i,comment:N,replies:s,like:d,setLike:o,fetchMore:$,likesCount:p,likedUsers:f,updateLike:T}):e(ee,{})},cd=xe(ye)(ld),dd=k.div`
  height: 100%;
  width: 100%;
  .content {
    overflow: auto;
    height: calc(100% - 100px);
    width: 100%;
  }
`,Zn=k.div`
  display: flex;
  flex-wrap: wrap;
  overflow: auto;
  height: 100%;
  max-width: 100%;
  min-width: 0;
  justify-content: center;
  align-items: flex-start;
  align-content: flex-start;
`,pd=k.div`
  padding: 20px;
  gap: 20px;
  display: flex;
  flex-direction: column;
  height: calc(100% - 40px);
  overflow: auto;
`,ud=()=>{const{search:t}=ue();a.useRef(null),a.useRef(null);const i=W(),[n,d]=a.useState(1),[o,s]=a.useState(1),[u,p]=a.useState([]),[{data:l,error:c,fetching:h}]=Ea({variables:{search:t,page:n,limit:10}});a.useMemo(()=>{if(c&&console.log(c),l&&!h){const g=l.searchEpisodes,m=g==null?void 0:g.lastPage;m&&s(()=>m);const x=g==null?void 0:g.movies;x&&p(()=>x)}},[l,h,c,t]);const f=g=>{g.stopPropagation();const m=g.target;m.scrollHeight-m.scrollTop-2<=m.clientHeight&&n!==o&&d(x=>x+1)};return h?e(ie,{}):u.length<=0?e(ve,{msg:"No Episodes found"}):r(Zn,{onScroll:f,children:[r(B,{children:[e("title",{children:`${t}: Episodes`}),e("meta",{name:"description",content:`${t}: Episodes`}),e("link",{rel:"canonical",href:`${q}/search/${t}/episodes}`})]}),u.map(g=>e(li,{bg:g==null?void 0:g.stills,onClick:m=>{m.stopPropagation(),location.pathname!==`/movie/${g.id}`&&i(`/movie/${g.id}`)},children:r("div",{className:"container",children:[e("div",{className:"thumbs",children:e(X,{src:g==null?void 0:g.thumbs,alt:"movie"})}),e("div",{className:"info",children:e(_e,{movie:g})})]})}))]})},hd=()=>{const{search:t}=ue();a.useRef(null);const i=a.useRef(null),n=W(),[d,o]=a.useState(1),[s,u]=a.useState(1),[p,l]=a.useState([]),[{data:c,error:h,fetching:f}]=Ua({variables:{search:t,page:d,limit:8}});a.useMemo(()=>{if(h&&console.log(h),c&&!f){const m=c.searchMovies,x=m==null?void 0:m.lastPage;x&&u(()=>x);const v=m==null?void 0:m.titles;v&&l(()=>v)}},[c,f,h,t]);const g=m=>{m.stopPropagation();const x=m.target;x.scrollHeight-x.scrollTop-2<=x.clientHeight&&d!==s&&o(v=>v+1)};return f?e(ie,{}):p.length<=0?e(ve,{msg:"No Movies found"}):r(Zn,{onScroll:g,ref:i,children:[r(B,{children:[e("title",{children:`${t}: Movies`}),e("meta",{name:"description",content:`${t}: Movies`}),e("link",{rel:"canonical",href:`${q}/search/${t}/movies}`})]}),p.map(m=>e(li,{bg:m==null?void 0:m.artwork,onClick:x=>{x.stopPropagation(),location.pathname!==`/movie/${m.id}`&&n(`/movie/${m.id}`)},children:r("div",{className:"container",children:[e("div",{className:"thumbs",children:e(X,{src:m==null?void 0:m.boxart,alt:"movie"})}),e("div",{className:"info",children:e(_e,{title:m})})]})}))]})},md=k.div`
  display: flex;
  justify-content: space-evenly;
  .usr-sec-1 {
    flex: 1 1 10%;
  }
  .usr-sec-2 {
    flex: 1 1 70%;
    display: flex;
    flex-direction: column;
    margin: 0 30px;
    gap: 4px;
    .name {
      font-size: 16px;
      font-weight: 600;
      :hover {
        text-decoration: underline;
        cursor: pointer;
      }
    }
    .nickname {
      font-size: 12px;
      font-weight: 600;
      opacity: 0.8;
    }
  }
  .usr-sec-3 {
    flex: 1 1 15%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`,fd=({user:t})=>{const i=W();return r(md,{children:[e("div",{className:"usr-sec-1",children:e(Ce,{user:t,src:t.photoUrl,tooltip:!0})}),r("div",{className:"usr-sec-2",children:[e("div",{className:"name",onClick:n=>{n.stopPropagation(),i(`/profile/${t.nickname}`)},children:t.name}),r("div",{className:"nickname",children:["@",t.nickname]})]}),e("div",{className:"usr-sec-3",children:e(xt,{userId:t.id,nickName:t.nickname})})]})},gd=()=>{const{search:t}=ue(),[i,n]=a.useState(1),[d,o]=a.useState(1),[s,u]=a.useState([]),[{data:p,fetching:l,error:c}]=Ma({variables:{search:t,page:i,limit:10}});return a.useEffect(()=>{if(c&&console.log(c),p&&!l){const h=p.searchPeople,f=h==null?void 0:h.lastPage;o(()=>f);const g=h==null?void 0:h.people;u(()=>g)}},[p,l,c]),l?e(ie,{}):s.length<=0?e(ve,{msg:`No users found matching "${t}"`}):r(pd,{children:[r(B,{children:[e("title",{children:`${t}: People`}),e("meta",{name:"description",content:`${t}: People`}),e("link",{rel:"canonical",href:`${q}/search/${t}/people}`})]}),s&&s.map(h=>e(fd,{user:h}))]})},xd=()=>{const{search:t}=ue();return r(dd,{children:[r(B,{children:[e("title",{children:`${t}: Search`}),e("meta",{name:"description",content:`${t}: Movies`}),e("link",{rel:"canonical",href:`${q}/search/${t}}`})]}),e($e,{text:`Search Results (${t})`,className:"child"}),r(jt,{className:"options",children:[e(ae,{to:"episodes",end:!0,className:"episodes nav",defaultChecked:!0,children:e("div",{children:"Episodes"})}),e(ae,{to:"shows",className:"shows nav",children:e("div",{children:"Shows"})}),e(ae,{to:"people",className:"people nav",children:e("div",{children:"People"})}),e(ae,{to:"movies",className:"movies nav",children:e("div",{children:"Movies"})})]}),e("div",{className:"content",children:e(He,{})})]})},vd=()=>{const{search:t}=ue();let i=a.useRef(null);W();const[n,d]=a.useState(1),[o,s]=a.useState(1),[u,p]=a.useState([]),[{data:l,error:c,fetching:h}]=Ra({variables:{search:t,page:n,limit:10}});a.useMemo(()=>{if(c&&console.log(c),l&&!h){const g=l.searchTitles,m=g==null?void 0:g.lastPage;m&&s(()=>m);const x=g==null?void 0:g.titles;x&&p(()=>x)}},[l,h,c,t]);const f=g=>{g.stopPropagation();const m=g.target;m.scrollHeight-m.scrollTop-2<=m.clientHeight&&n!==o&&d(x=>x+1)};return h?e(ie,{}):u.length<=0?e(ve,{msg:"No Shows found"}):r(Tt,{ref:i,onScroll:f,children:[r(B,{children:[e("title",{children:`${t}: Shows`}),e("meta",{name:"description",content:`${t}: Shows`}),e("link",{rel:"canonical",href:`${q}/search/${t}/shows}`})]}),u&&u.map((g,m)=>e(mi,{title:g,parentRef:i,index:m+1,totalItems:u.length},g.id))]})},yd=()=>{const t=a.useRef(null),[i,n]=a.useState([]),[d]=vn({variables:{type:"show",first:15,after:""},pause:A()});a.useMemo(()=>{const{data:u,error:p,fetching:l}=d;if(p&&console.log(p),!l&&u){const c=u.getPaginatedTitles,h=c==null?void 0:c.nodes;n(h)}},[d]);const{fetchMore:o}=Jn("show",n,d),s=u=>{u.stopPropagation();const p=u.target;p.scrollHeight-p.scrollTop-2<=p.clientHeight&&o()};return i&&i.length<=0?e(ve,{msg:"Shows catalog is empty"}):r(Tt,{ref:t,onScroll:s,children:[r(B,{children:[e("title",{children:"Moovy: Shows"}),e("meta",{name:"description",content:"List of all shows"}),e("link",{rel:"canonical",href:`${q}/catalog/shows`})]}),i&&i.map((u,p)=>e(mi,{title:u,parentRef:t,index:p+1,totalItems:i.length},u.id))]})},wd=k.div`
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
`,bd=k.div`
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
`,kd=(t,i,n)=>{const d=Ge();return{fetchMore:a.useCallback(()=>{var u;const{pageInfo:s}=((u=n==null?void 0:n.data)==null?void 0:u.getMoviesByTitleId)||{};n!=null&&n.data&&d.query(gn,{first:10,after:s==null?void 0:s.endCursor,tid:t}).toPromise().then(p=>{const{data:l,error:c}=p,h=l==null?void 0:l.getMoviesByTitleId,f=h==null?void 0:h.nodes;i(g=>oe.chain(g).concat(f).uniqBy("id").value())})},[n])}},Cd=()=>{var h,f,g;Ue();const{id:t}=ue(),i=a.useRef(null),n=a.useRef(null),d=a.useRef(null),[o,s]=a.useState([]),[u]=Jr({variables:{getTitleId:t},pause:A()}),[p]=Xr({variables:{tid:t,first:10,after:""},pause:A()});a.useMemo(()=>{const{data:m,error:x,fetching:v}=u;if(x)return console.error(x);!v&&m&&(d.current=m.getTitle)},[u.fetching]),a.useMemo(()=>{const{data:m,error:x,fetching:v}=p;if(x)return console.error(x);if(!v&&m){const C=m.getMoviesByTitleId.nodes;s(()=>C)}},[p]);const{fetchMore:l}=kd(t,s,p),c=m=>{m.stopPropagation();const x=m.target;x.scrollHeight-x.scrollTop-2<=x.clientHeight&&l()};return p.fetching||u.fetching,r(wd,{onScroll:c,children:[r(B,{children:[e("title",{children:"Moovy: Show"}),e("meta",{name:"description",content:"List of all episodes of a show."}),e("link",{rel:"canonical",href:`${q}/show/${t}}`})]}),e($e,{className:"movie-header",children:r(bd,{children:[e("div",{className:"title-image",children:e("img",{src:(h=d.current)==null?void 0:h.boxart,alt:"title"})}),e("div",{className:"title-text",children:(f=d.current)==null?void 0:f.title}),e(Kn,{className:"watch-video",platform:"NETFLIX",id:(g=d.current)==null?void 0:g.id,type:"show"})]})}),e("div",{className:"movies-container",ref:n,children:o&&e(Be,{ref:i,viewportRef:n,items:o,children:(m,x)=>{if(m)return e("div",{className:"movie",children:e(Ze,{movieId:m.id})},m.id);re.Fragment}})})]})},We=()=>{const t=mt();return e(re.Fragment,{children:e(He,{},t.pathname)})},Nd={body:"linear-gradient(180deg, #2c94ab 30%, #0e756b 70%);",text:"#363537",toggleBorder:"#b8b7b7",background:"#ffffff"},Sd={body:"linear-gradient(180deg, #750e0e 10%,#0a0a0a 30%,#000000 55%, #0e756b 70%);",text:"#FAFAFA",toggleBorder:"#6B8096",background:"#000000"},Pd={body:"linear-gradient(86deg, rgb(174 233 255) 0%, rgb(255 255 255 / 68%) 100%);",text:"#363537",toggleBorder:"#b8b7b7",background:"linear-gradient(to right, #1f86e1, #c9f8fe, #78caf0)",movieHeader:"linear-gradient(to right, #e11f1f, #e3c9fe, #f07878)",trendingTiles:"#c9eaff",hoverColor:"#1f86e1",mention:"#1d7cf0",nav:"#0088ff",border:"#1f86e1",loadingCard:"#d0d0d0",premium:"linear-gradient(45deg, #58e6f3, #1da3f0) border-box",themeType:"light"},$d={body:"linear-gradient(86deg, #0f1130 0%, black 100%);",text:"#FAFAFA",toggleBorder:"#6B8096",background:"linear-gradient(to right, #681515, #302b63, #3e2524)",movieHeader:"linear-gradient(to right, #681515, #302b63, #3e2524)",trendingTiles:"#0c0c0c",hoverColor:"#451374",nav:"rgb(131 0 255)",mention:"#00ff99",border:"#f00f0f",loadingCard:"#444",premium:"linear-gradient(45deg, #be3944, #681515) border-box",themeType:"dark"},eo=Xo`
  body {
    background: ${({theme:t})=>t.body};
    color: ${({theme:t})=>t.text};
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
    -webkit-box-shadow: inset 0 0 6px ${t=>t.theme.hoverColor};
    box-shadow: inset 0 0 6px ${t=>t.theme.hoverColor};
    background-color: #555;
  }
`,Md=k.div`
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
`,ot=k.div`
  padding: 10px 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20px;
  font-weight: 500;
  border-radius: 10px;
  cursor: pointer;
`,Td=()=>{const t=W(),i=L(g=>g.user),n=K(),[d,o]=Sn(),[,s]=Pn(),[,u]=$n(),[p,l]=Ot({});a.useEffect(()=>{const{data:g,error:m,fetching:x}=p;m&&console.log(m),!x&&g&&n(Ee(g.me))},[p.fetching]);const c=async g=>{g.stopPropagation();const m=await Xn();s({uid:m.id}).then(x=>{var C;const{data:v}=x,b=(C=v==null?void 0:v.login)==null?void 0:C.user;if(b)localStorage.setItem("user",JSON.stringify(b)),n(Ee(b));else{const{name:y,email:N,photoUrl:P,nickname:$,id:T}=m;o({options:{name:y,email:N,photoUrl:P,nickname:$,id:T}}).then(M=>{const{data:S,error:I}=M;I&&console.log(I);const R=S==null?void 0:S.createUser;localStorage.setItem("user",JSON.stringify(R)),n(Ee(R)),s({uid:R==null?void 0:R.id}),t("/")}).catch(M=>{console.log("ERR: Unable to create user",M)})}t("/")})},h=async g=>{g.stopPropagation(),(await u({})).data&&n(Ee(sn))},f=g=>{const m=document.getElementById(g);if(m){const b=m.getBoundingClientRect().top+window.pageYOffset-window.innerHeight/6;window.scrollTo({top:b,behavior:"smooth"})}};return r(Md,{children:[e("div",{className:"header",children:r("div",{className:"logo-image",children:[e("img",{className:"image",src:Mt,alt:"QuietChat",id:"blur-escape",loading:"lazy"}),e("div",{className:"beta",children:"(beta)"})]})}),r("div",{className:"header-buttons",children:[e(ot,{className:"install-button hb",onClick:g=>{g.stopPropagation(),f("screenshots")},children:"Screenshots"}),e(ot,{className:"install-button hb",onClick:g=>{g.stopPropagation(),f("features")},children:"Features"}),i&&i.id?e(ot,{className:"hb",id:"logout-btn",onClick:h,children:"Logout"}):e(ot,{className:"hb",id:"login-btn",onClick:c,children:"Login"}),e(ot,{className:"install-button hb",onClick:g=>{g.stopPropagation(),window.open(ei,"_blank")},children:"Install Extension"})]})]})},Ed=xe(ye)(Td);const to="/assets/dark-chat-cb2d142f.png",Id=k.div`
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
`,Ye=({info:t})=>{const{title:i,content:n,src:d}=t;return e(Id,{children:r("div",{className:"container",children:[e("div",{className:"title",children:i}),e("img",{src:d,className:"shc-img",alt:"image"}),e("div",{className:"content",children:n})]})})},io="/assets/screenshot8-437b8898.png",fi=ht`
  display: flex;
  font-size: 3rem;
  font-weight: 600;
  text-transform: uppercase;
  margin-left: 20px;
  letter-spacing: 10px;
  color: transparent;
  -webkit-text-stroke: 2px ${t=>t.theme.text};
  word-break: break-all;
  @media (max-width: 500px) {
    font-size: 2rem;
    word-wrap: break-word;
  }
`,Ud=k(Ut.div)`
  display: flex;
  flex-direction: column;
  margin: 15px 0;
  gap: 20px;
  min-height: 100vh;
  min-height: 100dvh;
  justify-content: space-evenly;
  .heading {
    ${fi}
  }
`,Fd=k(Ut.div)`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  min-height: 100dvh;
  .heading {
    ${fi}
    justify-content:flex-end;
  }
  .features {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    margin: 20px;
  }
`,Rd="/assets/accent-4afd8f63.png",Ad="/assets/ambience-c441c5c8.png",Ld="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAaAAAADECAMAAADu+gWTAAAA21BMVEUAAAD///+AgIAYGBgcHBxmZmY/Pz9WVlYnJyfn5+fw8PCxsbGBgYEjIyO1tbVCQkIsLCxNTU3IyMj6+vqlpaUhISH39/fX19fMzMzf398GBgaioqIvLy/8/Px1dXXCwsJxcXFeXl6srKyKioo6OjoZGRmYmJh9fX1cXFw0NDTy8vJJSUkqKiru7u6dnZ2NjY1ra2tjY2NSUlJFRUURERH5+fn09PTp6emgoKDj4+Nubm67u7uRkZGGhoYLCwva2trT09PPz8/KysqUlJR6enpgYGCnp6dPT0/r6+t6PB1VAAAHdUlEQVR42uzWQQ3AQBACwEVA//s6F+ffWp+V0ITMWCAQBgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACA/5y9qXH3TJdnU2afaVKXT7JT5KRQ08oVFqirQkX/4HOnRypNj1SaHi97d7eUNhSFYXh//UAEgvykhGYMgkCEVgGFqVq0Y0Wlvf8rKpuE8pcAbaetXbOfAx1dEw54CbMYDjZEUnJAJCUHRFJyQCQlB0RSckAkJQdEUnJAJCUHRFJyQCQlB0RSckAkJQdEUnJAJCUHRFJyQCQlB/ZX/VRr1D5V8R9QcmBfaStHLTFyEThotdpYNmq1itjhQ6vVOsevMYG26CU4lzipQkuQSSxLkQXskCF5iGifms3mI2KZQFs0fE6VPZ+a9WcClUgeI44JtIWbIFl/AOx3V5xqRAY6q9fb2GAC/YVAb3UfBOokB4tAO5lAfyHQiGQNgYxPlm0T6C/BXs5J9hAaeJ5XWQ7kNC3LKgHHltXH1PSvGsbW4DBf73URE+jMsrL4MLn0vEH/OrgqSTJlWZPZ8Aj207Ccx9TNWX2YG47ObkygOFckDxwsWwRyUiQvq8GSEA7umz5n3j/GBDogR5lzznhfAPgMdWbDk25eXw7g6IKBi6wJFGPCKe82sxko7HNSxUqgIslEmfpnNjbQ6TmZS1DHtzcDFRkEeqaWo/ZsAkWzW9QSxWbJXgv0UfdpA6uByOHYsd+9kCw4cYHIzgPsu4tgLaxUJiSblcqn2bA1rTPq91EjWe65cHu6d80EinaTZ6jcuXWWAtkdkp+xEWjgYKo6IvkUG6gD7Vg/wvKSENa7dADYB2S5BG1cJlu2CRTNuc1zrjD5Ecg+JXmPzUBjzHTLZCE2UAVammRyM1Ae2hHJNgJtklkTKNaXs06ZgV7Y4eWF5AibgQ4QOiHZjQ6kf89Ln24GuoPWJ+ki4JJsmkDb2CWrxamEGzyvPqcO05uBXhC6JfkuJlAegVxkoA/QkmQZczkyaQJtF269J7MOoc5moGeE7kg2fiVQATPD8G6c/3sIwARa97Zer48xd09yGAZKZPO6wEagS4SyJI9+JVA4TJEe5jwyZQJFOAv2rFCF5PugQ/kOj75+k1sPVFy+tPIbgdqk7yDg+OSzCRRhTLKIuUeSycUH1TbJ0/VA5RsEvpJ0fiPQ8dJbZIPkrQkUwUksLdO4JNlbBLp+T7KxFohvFjEH+IlAvbVArl4JbWh2Xm8nJlCUzyT90QOmXN0n8bAIhCOShzdrgfxZzy8XJGv7BqqQvMTa0CKZugZwnSJpwQSKUk1RK5wXC5zyV7+wuyL5shpIv+6fPw90qnPsGyjjkzxItVeG1x7Ji6v+lW7tfTCBomUGXPB7WAmUzpFsrAS6emGo2N07EJLUOitDuEXOFV2YQHFq80S5tovVQOiRvPi2HChpPx1St6g72D9Q90SnPl0NhOq9R827r8IE2iJdavSfsuNr7BCWs0uTyQN+Vsa9icjQrR3XupgzgXbbHegfMoG2MoFMoB1MoK1MIBNoBxNoh3Q63cU/ZAK9ekoOiKTkgEhKDoik5IBISg6IpOSASEoOiKTkgEhKDoik5IBISg5zuMYrZ46neeXMAU+vncBbSNINZA4Z/A+YYzoNwzAMwzAMwzAMw/jenr32Jg2GcRj/XwLW2UHkLBUEx+Q0lE0qB3G4uRn8/p/IjAIthxlNqNF4/141aV80ufI8T3rXGGOMMcYYY4wxxhhjjDHGGGOMMcYYY/4Uf/j61edUV6Hkh9PC9ZukHuO4E61cZDcSMnHoPGfJfaaA12Tp48DXQekRJ+u4hC5kYvAK6NUrQC8olHgJnNTHwM1cB3g5NoHOLVDMHOhlPelFfd2jBeUXkrIVeK8DnhAGuoR0YsWTOTqvQq2rB/MyOJKe5an4etAvQUJ7zmu93CZQi4pMjIbghmupKekaGgq0Dm1b8y9cFTaB6rgyMboCR4E0zIIzKRHebEvS62bzSmstMgoD9TiVidET6CpQDRZTnZJWGqvFVIaMVrK8exsGKsKHY73Jf0W/qus4cwXewLWkCyerlQkMdwIlxjgKAy2geFG4mc4GXQsUS6CQd7t74hRHlPydQC5nigRqky+wVPs8t0CxBmrCTFHzOrS1LcWJHw10BvQyp5MykLFAMQbyJvC8r4jkS7j1tOXZiIWigcrQWj5zOYKOBYotUPUWxlVFOGPI+TsVvzLRVqD2IKXAN/hugWIK5F3nIZdWKHEGTObadsrUDwPtyEHaAsUSqHsDpXtFdN7BdLE/QmCoRwM1YSETg081cIsKeQXIN+fa1aKXCZzwMZNx9z5572WO7x7edRThuVDual+LLXnJTya11oZLmaP7AF+SiroD19MBl+7alJLrni2jPNVK4eHaHJtXYbrdp19j5ulx0TNoCHcKJHuUfJlja+xtTC70te31YHB1MJA/gmwQOoONTeOQgUZq41xSj2kqVAxHPQcCqQO19+d+0SnDF/thF4MxUXdSny3OzwOpyVq9KHN0RXYDffu9QOrOakD+piHzl/Kqi6rtbsYYY/5dPwApL9GVr9U0DQAAAABJRU5ErkJggg==",zd="/assets/filters-3f3afc50.png",Od="/assets/spoiler-438d3a6a.png",jd=({id:t})=>{const i=a.useRef(null),[n,d]=a.useState(!1);a.useEffect(()=>{const u=()=>{if(i.current){const p=i.current.getBoundingClientRect().top;d(p<=window.innerHeight*.8)}};return window.addEventListener("scroll",u),()=>window.removeEventListener("scroll",u)},[]);const o=Ft({from:{opacity:0},to:{opacity:1}}),s={filters:{title:"Filters",src:zd,content:"Enhance your videos with our powerful filters that allow you to adjust brightness, contrast, saturation, color balance, and more with just a few clicks."},accent:{title:"Accent Color",src:Rd,content:"Customize your video player with our accent color feature, allowing you to change the timeline color and adjust it across various UI elements for a cohesive and personalized viewing experience."},ambience:{title:"Ambience",src:Ad,content:"Elevate the ambiance of your videos with our border feature, adding a stylish frame around your video element to enhance its visual appeal and draw attention to your content."},spoiler:{title:"Spoiler",src:Od,content:"Keep your audience on the edge of their seats with our spoiler feature, allowing you to hide specific parts of your video and keep viewers engaged until the big reveal."},community:{title:"Community",src:io,content:"Foster a sense of community around your videos with our built-in sign-up feature, encouraging your viewers to become members and engage with your content on a deeper level."},autoSkip:{title:"Skip Intro",src:Ld,content:'"Skip Intro" feature allows viewers to automatically skip the opening credits of a TV show, saving time and allowing for uninterrupted binge-watching.'}};return r(Fd,{id:t,ref:i,style:o,children:[e("div",{className:"heading",children:"Features"}),r("div",{className:"features",children:[e(Ye,{info:s.filters}),e(Ye,{info:s.accent}),e(Ye,{info:s.ambience}),e(Ye,{info:s.spoiler}),e(Ye,{info:s.community}),e(Ye,{info:s.autoSkip})]})]})};const Dd=k.div`
  height: 200px;
  width: 99.5vw;
  background-color: #222;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
`,Li=k.p`
  margin: 0;
  font-size: 14px;
  opacity: 0.8;
  line-height: 1.5;
  text-align: center;
`,_d=k.footer`
  background-color: #222;
  color: #fff;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`,st=k.span`
  color: #fff;
  text-decoration: none;
  transition: color 0.2s ease-in-out;
  cursor: pointer;
  &:hover {
    color: #ccc;
  }
`,Hd=({id:t})=>r(Dd,{id:t,children:[e("div",{className:"custom-shape-divider-top-143",children:e("svg",{"data-name":"Layer 2",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1200 120",preserveAspectRatio:"none",children:e("path",{d:"M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z",className:"shape-fill"})})}),r(_d,{children:[r(Li,{children:[e(st,{onClick:i=>{i.stopPropagation(),window.open("/privacy","_blank")},children:"Privacy Policy"})," ","|"," ",e(st,{onClick:i=>{i.stopPropagation(),window.open("/cookie-policy","_blank")},children:"Cookie Policy"})," ","|"," ",e(st,{onClick:i=>{i.stopPropagation(),window.open("/terms-and-conditions","_blank")},children:"Terms and Conditions"})," ","|"," ",e(st,{onClick:i=>{i.stopPropagation(),window.open("/about-us","_blank")},children:"About us"})," ","|"," ",e(st,{onClick:i=>{i.stopPropagation(),window.open("/contact","_blank")},children:"Contact Us"})]}),e(Li,{children:"MoovyChat Ltd. 2023"})]})]}),Gd="/assets/step1-a9f42756.gif",Bd="/assets/step2-81bb913e.gif",qd="/assets/step3-6ebc18cc.gif",Qd="/assets/step4-0ac2c7fa.gif",Wd="/assets/step5-efafa99c.gif",Yd=k(Ut.div)`
  display: flex;
  width: 100%;
  min-height: 400px;
  transition: all 1s;
  height: 100vh;
  height: 100dvh;
  .steps {
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;
    .heading {
      display: flex;
      justify-content: center;
      align-items: center;
      ${fi}
    }
    .one,
    .two,
    .three,
    .four,
    .five {
      transition: all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
    }
    .one {
      background-color: ${t=>t.selectedOption===1?"black":"none"};
      color: ${t=>t.selectedOption===1?"white":""};
      width: ${t=>t.selectedOption===1?"100%":"50%"};
    }
    .two {
      background-color: ${t=>t.selectedOption===2?"black":"none"};
      width: ${t=>t.selectedOption===2?"100%":"50%"};
      color: ${t=>t.selectedOption===2?"white":""};
    }
    .three {
      background-color: ${t=>t.selectedOption===3?"black":"none"};
      width: ${t=>t.selectedOption===3?"100%":"80%"};
      color: ${t=>t.selectedOption===3?"white":""};
    }
    .four {
      background-color: ${t=>t.selectedOption===4?"black":"none"};
      width: ${t=>t.selectedOption===4?"100%":"50%"};
      color: ${t=>t.selectedOption===4?"white":""};
    }
    .five {
      background-color: ${t=>t.selectedOption===5?"black":"none"};
      width: ${t=>t.selectedOption===5?"100%":"80%"};
      color: ${t=>t.selectedOption===5?"white":""};
    }
    .step {
      font-size: 16px;
      font-weight: 600;
      padding: 5px 20px;
      cursor: pointer;
      p,
      .info {
        display: flex;
        align-items: center;
        white-space: nowrap;
        flex-wrap: wrap;
      }
      .info {
        opacity: 0.6;
      }
    }
  }
  .gif-container {
    width: 60%;
    height: 100vh;
    height: 100dvh;
    display: flex;
    justify-content: center;
    align-items: center;
    .gif {
      max-height: 400px;
      width: 80%;
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        box-shadow: 0px 0px 30px #000000;
      }
    }
  }

  @media (max-width: 800px) {
    flex-direction: column;
    .steps {
      width: 100%;
      justify-content: flex-start;
    }
    .gif-container {
      width: 100%;
    }
  }
`,Vd=({id:t})=>{const[i,n]=a.useState(1),[d,o]=a.useState(""),s=a.useRef(null),[u,p]=a.useState(!1);a.useEffect(()=>{const c=()=>{if(s.current){const h=s.current.getBoundingClientRect().top;p(h<=window.innerHeight*.8)}};return window.addEventListener("scroll",c),()=>window.removeEventListener("scroll",c)},[]);const l=Ft({from:{opacity:0},to:{opacity:1}});return a.useEffect(()=>{switch(i){case 1:o(()=>Gd);break;case 2:o(()=>Bd);break;case 3:o(()=>qd);break;case 4:o(()=>Qd);break;case 5:o(()=>Wd);break;default:o("");break}},[i]),r(Yd,{selectedOption:i,id:t,ref:s,style:l,children:[r("div",{className:"steps",children:[e("div",{className:"heading",children:"Installation Guide"}),r("div",{className:"step one",onClick:c=>{c.stopPropagation(),n(1)},children:[e("p",{children:"1. Install MoovyChat"}),i===1&&r("div",{className:"info",children:["Install the Chrome extension from"," ",e("a",{target:"_blank",href:ei,style:{padding:"0 5px",fontSize:"16px",color:"white"},children:"here"})]})]}),r("div",{className:"step two",onClick:c=>{c.stopPropagation(),n(2)},children:[e("p",{children:'2. Pin "MoovyChat" to Chrome'}),i===2&&r("div",{className:"info",children:["Click on the",e(Ko,{style:{padding:"0 10px"}}),"icon and pin the"," ",e("img",{src:Mt,alt:"logo",width:30,height:30})," icon"]})]}),r("div",{className:"step three",onClick:c=>{c.stopPropagation(),n(3)},children:[e("p",{children:"3. Open your favorite show"}),i===3&&e("div",{className:"info",children:"Open your favorite show on Netflix"})]}),r("div",{className:"step four",onClick:c=>{c.stopPropagation(),n(4)},children:[e("p",{children:"4. Login to MoovyChat"}),i===4&&r("div",{className:"info",children:[e("span",{style:{display:"inline-block"},children:"Click on the"}),e("img",{src:Mt,alt:"logo",style:{display:"inline-block",verticalAlign:"middle",width:"30px",height:"30px"}}),e("span",{style:{display:"inline-block"},children:"icon and Login with your Google account"})]})]}),r("div",{className:"step five",onClick:c=>{c.stopPropagation(),n(5)},children:[r("p",{children:["5. Click on"," ",e(wi,{style:{padding:"0 10px",display:"inline-block",verticalAlign:"middle"}})," ","icon to open a chat window."]}),i===5&&r("div",{className:"info",children:["You will see"," ",e(wi,{style:{padding:"0 10px",display:"inline-block",verticalAlign:"middle"}})," ","icon after you installed the extension."]})]})]}),e("div",{className:"gif-container",children:e("div",{className:"gif",children:e("img",{src:d,alt:"ext"})})})]})},no="/assets/light-chat-8e69a6f9.png",Xd=k.div`
  img {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
  }
`,Kd=({platform:t})=>e(Xd,{className:"platform",children:e("div",{className:"set",children:e(X,{src:t.imgUrl,alt:t.title})})}),Jd="/assets/screenshot1-807cf6a8.png",Zd="/assets/screenshot10-ba1b827e.png",ep="/assets/screenshot11-c50d10c5.png",tp="/assets/screenshot12-e14dd2d5.png",ip="/assets/screenshot13-3a6b9040.png",np="/assets/screenshot14-6a1bd796.png",op="/assets/screenshot15-9e4e7fb4.png",sp="/assets/screenshot16-e5d4173f.png",rp="/assets/screenshot2-eef8b8ec.png",ap="/assets/screenshot3-79e723c4.png",lp="/assets/screenshot4-0db2d30b.png",cp="/assets/screenshot5-c501f7ae.png",dp="/assets/screenshot6-430fcb6b.png",pp="/assets/screenshot7-9b2b92ec.png",up="/assets/screenshot9-b6770b92.png",hp=k.div`
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
`,mp=()=>{const t=[to,no,Jd,rp,ap,lp,cp,dp,pp,io,up,Zd,ep,tp,ip,np,op,sp],[i,n]=a.useState(0),d=a.useRef(null),o=5e3;a.useEffect(()=>(d.current=setTimeout(()=>n(p=>p===t.length-1?0:p+1),o),()=>{d.current&&clearTimeout(d.current)}),[i,o,t.length]);const s=()=>{n(i===0?t.length-1:i-1)},u=()=>{i===t.length-1?n(0):n(i+1)};return r(hp,{className:"slideshow",children:[t.map((p,l)=>e("div",{className:`slide ${i===l?"active":""} ${i-1===l||i===0&&l===t.length-1?"prev":""} ${i+1===l||i===t.length-1&&l===0?"next":""}`,children:e("img",{src:p,alt:`slide ${l+1}`})},p)),e("button",{className:"prev-arrow",onClick:s,children:"❮"}),e("button",{className:"next-arrow",onClick:u,children:"❯"})]})},fp=({id:t})=>{const i=a.useRef(null),[n,d]=a.useState(!1);a.useEffect(()=>{const s=()=>{if(i.current){const u=i.current.getBoundingClientRect().top;d(u<=window.innerHeight*.8)}};return window.addEventListener("scroll",s),()=>window.removeEventListener("scroll",s)},[]);const o=Ft({from:{opacity:0},to:{opacity:1}});return r(Ud,{id:t,ref:i,style:o,children:[e("div",{className:"heading",children:"Screenshots"}),e(mp,{})]})},gp=k.div`
  display: flex;
  width: 99vw;
  flex-direction: column;
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
          background-color: ${t=>t.theme.background};
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
`,xp=[{title:"Netflix",imgUrl:"https://play-lh.googleusercontent.com/TBRwjS_qfJCSj1m7zZB93FnpJM5fSpMA_wUlFDLxWAb45T9RmwBvQd5cWR5viJJOhkI",color:"#E50915",home:"https://www.netflix.com/",status:"Available"},{title:"Disney+",imgUrl:"https://play-lh.googleusercontent.com/xoGGYH2LgLibLDBoxMg-ZE16b-RNfITw_OgXBWRAPin2FZY4FGB9QKBYApR-0rSCkQ=w240-h480-rw",color:"#022B78",home:"https://www.disneyplus.com/home",status:"Available soon"},{title:"Hulu",imgUrl:"https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/bk8cux6dapq8qjzylfaj",color:"#21E684",home:"https://www.hulu.com/",status:"Available soon"},{title:"HBO Max",imgUrl:"https://play-lh.googleusercontent.com/1iyX7VdQ7MlM7iotI9XDtTwgiVmqFGzqwz10L67XVoyiTmJVoHX87QtqvcXgUnb0AC8",color:"#370766",home:"https://www.hbomax.com/",status:"Available soon"},{title:"Amazon Prime Video",imgUrl:"https://images-na.ssl-images-amazon.com/images/I/41mpv9rBhmL.png",color:"#2b9ec1",home:"https://www.amazon.com/gp/video/storefront/",status:"Available soon"}],vp=()=>{const t=()=>{window.location.reload()};return a.useEffect(()=>{const i=new BroadcastChannel("reloadTabsChannel");return i.addEventListener("message",t),()=>{i.removeEventListener("message",t)}},[]),r(gp,{children:[r(B,{children:[e("title",{children:"MoovyChat: Welcome"}),e("meta",{name:"description",content:"Home page of MoovyChat."}),e("link",{rel:"canonical",href:`${q}}`})]}),e("div",{className:"custom-shape-divider-top-1672047931",children:e("svg",{"data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1200 120",preserveAspectRatio:"none",children:e("path",{d:"M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z",className:"shape-fill"})})}),r("div",{className:"home",children:[r("div",{className:"pics",children:[e("div",{className:"first pic",children:e("picture",{children:e(X,{className:"image",src:no,alt:"light"})})}),e("div",{className:"second pic",children:e("picture",{children:e(X,{className:"image",src:to,alt:"dark"})})})]}),r("div",{className:"heading",children:[r("div",{className:"company",children:[e("p",{children:"Supported Platforms"}),e("span",{className:"supported-platforms",children:xp.map(i=>i.title==="Netflix"&&e(Kd,{platform:i},i.title))})]}),e("div",{className:"text",children:_t.heading}),e("div",{className:"sub",children:_t.sub}),e("div",{className:"sub2",children:_t.sub2}),r("div",{className:"get-started",onClick:i=>{i.stopPropagation(),window.open(ei,"_blank")},children:[e("div",{className:"fill"}),e("label",{children:"Install Extension"}),e(Jo,{size:25})]})]}),e("div",{className:"embed",children:"MOOVY"})]}),e(fp,{id:"screenshots"}),e(jd,{id:"features"}),e(Vd,{id:"install-guide"}),e(Hd,{id:"footer"})]})},zi=()=>{const t=L(i=>i.settings.theme);return r(Yi,{theme:t===je.DARK?Sd:Nd,children:[r(B,{children:[e("title",{children:"Moovy: Welcome"}),e("meta",{name:"description",content:"Welcome"}),e("link",{rel:"canonical",href:`${q}`})]}),e(eo,{}),e(Ed,{}),e(vp,{})]})},oo=60,yp=k.div`
  display: flex;
  position: relative;
  align-items: center;
  width: 99.5vw;
  height: 98.6dvh;
  flex-direction: column;
  .home-header {
    display: flex;
    width: 99.9%;
    height: ${oo}px;
  }
`,wp=k.div`
  display: flex;
  position: relative;
  justify-content: space-evenly;
  align-items: center;
  height: calc(100% - ${oo}px);
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
      left: ${t=>t.isNavBarOpen?"0%":"-60%"};
      backdrop-filter: blur(15px);
      transition: left 0.3s linear;
    }
  }
  /* @media (max-width: 900px) {
      .right {
        display: none;
      }
    } */
`,bp=k.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100%;
  width: 100%;
  overflow: hidden;
`,kp=({className:t,id:i})=>(Ue(),e(bp,{className:t,id:i,children:e(He,{})})),Cp=k.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: auto;
  height: auto;
  top: 10px;
  left: 0;
  padding: 0px 20px;
  border-radius: 18px;
  border: 1px solid;
  backdrop-filter: blur(10px);
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    position: relative;
    width: 320px;
    height: 250px;
    overflow-x: auto;
    overflow-y: hidden;
    .group-container {
      display: flex;
      height: 100%;
    }
  }
`,Np=k.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  justify-content: space-evenly;
  gap: 10px;
  border-radius: 18px;
  padding: 5px 10px;
  border-bottom: 1px solid;
  backdrop-filter: blur(10px);
`,Sp=k.div`
  font-size: 1em;
  cursor: pointer;
  border-radius: 50%;
  padding: 5px;
  box-shadow: 0 0 5px white, inset 0 0 5px #6d0e85;
  border: ${t=>t.selectedGroup?"1px solid":"none"};
  filter: ${t=>t.active?t.selectedGroup?"contrast(1.5)":"brightness(0.8)":"grayscale(1)"};
  transform: ${t=>t.selectedGroup?"scale(1.3)":"scale(0.9)"};
  transition: transform 0.5s linear;
  pointer-events: ${t=>t.active?"auto":"none"};
`,Pp=k.div`
  border: 1px solid;
  width: 100%;
  height: 30px;
  margin: 5px 0;
  border-radius: 18px;
  input {
    background: transparent;
    border: none;
    font-size: 1rem;
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
    outline: none;
    width: calc(100% - 50px);
    color: ${t=>t.theme.text};
  }
`,$p=k.div`
  height: 20px;
  width: 20px;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  flex: 0 0 10%;
  button {
    color: ${t=>t.theme.text};
    height: 100%;
    width: 100%;
    display: flex;
    font-size: 1.2rem;
    overflow: hidden;
    position: relative;
    justify-content: center;
    align-items: center;
    background: none;
    border: none;
    :hover {
      transform: scale(1.1);
      animation: smile 1s ease-in-out infinite;
      cursor: pointer;
    }
  }

  @keyframes smile {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }
`;class Mp extends Zo{constructor(){super("emojiDB");kt(this,"emojis");kt(this,"frequent");kt(this,"recent");this.version(1).stores({emojis:"++id, emojis",frequent:"++id, count, emoji",recent:"++id, recent"})}}const ge=new Mp,Tp=({emoji:t})=>{const i=L(o=>o.textArea.text),n=K();return e($p,{className:"emoji-button",onClick:o=>{if(o.stopPropagation(),i.length>=300)return;n(ct(`${i}${t.emoji}`)),n(ir(!0));const s=async()=>{try{const p=await ge.recent.add({emoji:t}),l=await ge.recent.filter(h=>h.emoji.emoji===t.emoji).keys();await ge.recent.bulkDelete(l);const c=await ge.recent.add({emoji:t});await ge.recent.count()>12&&ge.recent.delete(2),console.log(`Successfully added to recent: ${c}`)}catch(p){console.log("Error",p)}};(async()=>{try{let l=await(await ge.frequent.filter(c=>c.emoji.emoji===t.emoji)).first();if(l)await ge.frequent.update(l.id,{count:l.count+1,emoji:t});else{const c=await ge.frequent.add({count:1,emoji:t});console.log(`Successfully added: ${c}`)}}catch(p){console.log(`Failed to add} ${p}`)}})(),s()},children:e("button",{id:"text-focus",children:t.emoji})})},Ep=k.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 5px;
  .subgroup-name {
  }
  .subgroup-emojis {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    gap: 5px;
  }
`,Ip=({emojiSet:t,setValues:i,index:n})=>{const{subgroups:d}=Vi,o=L(c=>c.misc.emojiSearchValue),[s,u]=a.useState([...t]),p=t[0].subgroup,l=p?d[p]:"smiley";return a.useEffect(()=>{i(c=>({...c,[n]:s.length}))},[s,n]),a.useMemo(()=>{let c=t.filter(h=>{var g;let f=(g=h.tags)==null?void 0:g.filter(m=>m.match(new RegExp(o,"i")));return f&&f.length>0?h:null});o.length<=0?u(()=>t):u(()=>c)},[o]),e(de,{children:s.length>0&&r(Ep,{className:"emoji-sub-group",children:[e("div",{className:"subgroup-name chip",children:oe.capitalize(l.split("-").join(" "))}),e("div",{className:"subgroup-emojis",children:s.map((c,h)=>e(Tp,{emoji:c},c.label))})]})})},Up=k.div`
  display: flex;
  flex-direction: column;
  width: 340px;
  gap: 10px;
  overflow: auto;
`,Fp=({subGroup:t,groupNumber:i,index:n})=>{const d=K(),o=a.useRef(null),s=a.useRef(null),u=Object.values(t).length;let p={};for(let h=0;h<u;h++)p={...p,[h]:0};const[l,c]=a.useState({...p});return a.useEffect(()=>{var h;i===n&&((h=s.current)==null||h.scrollIntoView())},[i,n,s==null?void 0:s.current]),a.useEffect(()=>{Object.values(l).filter(f=>f!==0).length===0?d(Ci({key:n,value:!1})):d(Ci({key:n,value:!0}))},[l,n]),e(Up,{ref:s,children:t&&e(Be,{ref:o,viewportRef:s,items:Object.values(t),children:(h,f)=>e(Ip,{emojiSet:h,setValues:c,index:f},f)})})},Rp=()=>{const[t,i]=a.useState({}),n=a.useCallback(async()=>{let d={};return(await es("en/data.json")).map(s=>{let u=s.group,p=s.subgroup;d[u]===void 0?d={...d,[u]:{[p]:[s]}}:d[u][p]===void 0?d={...d,[u]:{...d[u],[p]:[s]}}:d={...d,[u]:{...d[u],[p]:[...d[u][p],s]}}}),d},[]);return a.useMemo(async()=>{(async()=>{try{if(await ge.emojis.get(1)){const s=await ge.emojis.get(1);i(s==null?void 0:s.emojis)}else{const s=await n();i(s),await ge.emojis.add({emojis:s});const u=s[0],p=u[0].slice(0,10).map((c,h)=>({id:h,count:1,emoji:c})),l=u[1].slice(0,10).map((c,h)=>({id:h,emoji:c}));await ge.frequent.bulkAdd(p),await ge.recent.bulkAdd(l),console.log("Successfully initialized emojiDB")}}catch(o){console.log(`Failed to add emojiDB ${o}`)}})()},[]),t};let Ap={"smileys-emotion":"🤣","people-body":"👨‍👩‍👧","animals-nature":"🐵","food-drink":"🍇","travel-places":"🏖️",activities:"🎄",objects:"💎",symbols:"🛂",flags:"🏁"};const Lp=()=>{const{groups:t}=Vi,i=L(f=>f.misc.emojiSearchValue),n=K();let d=L(f=>f.misc.emojiGroupActive);const o=a.useRef(null),[s,u]=a.useState(0),p=Rp(),l=f=>{u(f)},c=f=>{f.stopPropagation(),n(zs(f.target.value))},h=f=>{if(f.stopPropagation(),!o||!o.current)return;const g=(o==null?void 0:o.current.clientWidth)-10,m=o==null?void 0:o.current.scrollLeft;let x=Math.floor(m/g);x>=2&&(x=x+1),u(x)};return r(Cp,{children:[e(Pp,{children:e("input",{type:"text",id:"search",name:"search",value:i,onChange:c,placeholder:"Search Emoji"})}),e(Np,{children:Object.values(t).map((f,g)=>g!==2&&e(Sp,{active:d[g],className:"header-key",selectedGroup:g===s,onClick:m=>{m.stopPropagation(),l(g)},children:Ap[f]},g))}),e("div",{className:"container",ref:o,onScroll:h,children:p&&e("div",{className:"group-container",children:Object.values(p).map((f,g)=>g!==2&&e(Fp,{subGroup:f,groupNumber:s,index:g},g))})})]})},zp=k.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 100%;
  background: ${({theme:t})=>t.body};
  box-shadow: 0 0 3px;
  border-radius: 5px;
  margin-bottom: 10px;
  .us {
    display: flex;
    flex-direction: column;
    padding: 4px;
    gap: 5px;
    font-weight: 600;
    .full {
      font-size: 14px;
    }
    .nick {
      font-size: 14px;
      opacity: 0.7;
    }
  }
  .option {
    width: 100%;
    height: 20px;
    display: flex;
    align-items: center;
    margin: 0 10px;
    padding: 10px 0;
    .icon {
      flex: 1 1 20%;
      display: flex;
      justify-content: center;
      align-items: center;
      pointer-events: none;
    }
    .text {
      flex: 1 1 80%;
      font-size: 0.9em;
      font-weight: 500;
    }
    :hover {
      cursor: pointer;
      .icon {
        color: #ce2216;
      }
    }
  }
`,Op=()=>{var p;const[,t]=$n(),i=L(l=>l.user),n=W();K();const d=L(l=>l.profile),[o]=cl({variables:{uid:i.id},pause:A()}),s=l=>{l.stopPropagation(),n(`/profile/${i.nickname}`)},u=l=>{l.stopPropagation(),t({}).then(c=>{const{data:h,error:f}=c;if(f){console.log(f);return}if(h==null?void 0:h.logout){n("/");return}})};return r(zp,{children:[r("div",{className:"us",children:[e("div",{className:"full",children:d.fullname!==""?`${d.fullname}`:(p=o.data)==null?void 0:p.getUserFullName}),r("div",{className:"nick",children:["@",i.nickname]})]}),r("div",{className:"option",onClick:s,children:[e("div",{className:"icon",children:e(Xi,{size:20})}),e("div",{className:"text",children:"Profile"})]}),r("div",{className:"option",onClick:u,children:[e("div",{className:"icon",children:e(ts,{size:20})}),e("div",{className:"text",children:"Logout"})]}),r("div",{className:"option",onClick:l=>{l.stopPropagation(),chrome.runtime.sendMessage(Xt,{type:"EXTENSION_LOG_IN",user:i},c=>{console.log("response",c)})},id:"sync-login",children:[e("div",{className:"icon",children:e(is,{size:20})}),e("div",{className:"text",children:"Sync Login with Extension"})]})]})},jp="10px",Dp=k.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  .component {
    position: relative;
  }
  .tooltip {
    position: absolute;
    display: ${t=>t.clicked?"flex":"none"};
    left: 0%;
    transform: translateX(-50%);
    border-radius: 10px;
    line-height: 1;
    z-index: 999;
    width: ${t=>t.width};
    height: ${t=>t.height};
    justify-content: center;
    align-items: center;
  }
  .tooltip.bottom-right {
    bottom: calc((${t=>t.height}) * -1);
    left: calc((${t=>t.width}) * 0.5);
  }
  .tooltip.bottom-left {
    bottom: calc((${t=>t.height}) * -1.05);
    right: calc((${t=>t.width}) * 0.5);
    left: -30px;
  }
  .tooltip.bottom {
    bottom: calc((${t=>t.height}) * -1);
  }
  .tooltip.top {
    top: calc((${t=>t.height}) * -1);
  }
  .tooltip.right {
    left: calc((${t=>t.width}) * 0.3);
    top: 50%;
    transform: translateX(0) translateY(-50%);
    border-right-color: ${t=>t.theme.background};
  }
  .tooltip.left {
    left: auto;
    right: calc(100% + ${jp});
    top: 50%;
    transform: translateX(0) translateY(-50%);
  }
`,so=({children:t,dir:i=Pe.BOTTOM,message:n,height:d,width:o,data:s})=>{const[u,p]=a.useState(!1),l=a.useRef(null),c=a.useCallback(()=>{switch(n){case ut.EMOJI:return e(Lp,{});case ut.HEADER_OPTIONS:return e(Op,{});default:return e("div",{})}},[n]),h=f=>{var m;const g=f.target;(m=l.current)!=null&&m.contains(g)||(p(!1),document.removeEventListener("mousedown",h))};return document.addEventListener("mousedown",h),r(Dp,{id:"tooltip",ref:l,className:"tooltip-wrapper",dir:i,clicked:u,height:d,width:o,children:[e("div",{className:"component",onClick:()=>p(!u),children:t}),u&&e("div",{className:`tooltip ${i||Pe.BOTTOM}`,children:e(c,{})})]})},_p=k.div`
  display: flex;
  width: 100vw;
  justify-content: space-between;
  border-bottom: 1px solid #8f8f8f81;
  .logo,
  .user {
    position: relative;
    display: flex;
    height: 100%;
    margin: 0px 50px;
    justify-content: space-evenly;
    align-items: center;

    .logo-image {
      width: 100%;
      display: flex;
      justify-content: space-evenly;
      .image {
        width: 40px;
        height: 40px;
        object-fit: contain;
      }
      .logo-text {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
    .logo-icon {
      width: 100%;
      display: flex;
      justify-content: space-evenly;
      .icon {
        display: none;
      }
    }
  }
  .logo {
  }
  .user {
    justify-content: space-evenly;
    cursor: pointer;
    :hover {
      border-radius: 50%;
      box-shadow: 0 0 3px;
    }
    .logo-image {
      display: flex;
      align-items: center;
      overflow: hidden;
      border-radius: 50%;
      img {
        border-radius: 50%;
      }
    }
  }
  .search {
    width: 40%;
    align-self: center;
  }

  @media (max-width: 800px) {
    .logo {
      .logo-image {
        display: none;
      }
      .logo-icon {
        .icon {
          display: flex;
          padding: 5px;
          :hover {
            background-color: #6e6e6e50;
            cursor: pointer;
            border-radius: 50%;
          }
          :active {
            background-color: #6e6e6e7d;
          }
        }
      }
    }
  }
`,Hp="/assets/moovy-black-1c122438.svg",Gp=k.div`
  width: 100%;
  overflow: hidden;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: auto;
  backdrop-filter: contrast(0.8);
  .icon {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 50px;
  }
  form {
    width: calc(100% - 50px);
    input {
      background: transparent;
      border: none;
      font-size: 1rem;
      padding: 0.7rem 1rem;
      border-radius: 0.25rem;
      outline: none;
      width: calc(100% - 50px);
      color: ${t=>t.theme.text};
    }
  }
`,Bp=k.div`
  position: absolute;
  width: 50%;
  height: 70vh;
  overflow: auto;
  top: 7%;
  left: 50%;
  transform: translate(-50%, 0%);
  z-index: 99;
  border-radius: 20px;
  box-shadow: 0 0 5px, inset 0 0 5px;
  backdrop-filter: blur(10px) brightness(0.6);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  .heading {
    font-size: 1.2em;
    font-weight: bold;
    margin-left: 20px;
    margin-top: 20px;
  }
  .content {
    margin-left: 20px;
    margin-top: 20px;
    width: 97%;
    .content-container {
      width: 98%;
      .people,
      .movies,
      .shows {
        margin-top: 15px;
        margin-bottom: 10px;
        font-size: 1em;
        font-weight: 600;
      }
      .users-content {
        display: flex;
        gap: 1em;
      }
      .movies-content {
        display: flex;
        flex-direction: column;
        width: 100%;
      }
    }
    .more {
      margin: 15px 0;
      font-weight: 600;
      :hover {
        cursor: pointer;
        text-decoration: underline;
      }
    }
  }
`,qp=k.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 120px;
  gap: 5px;
  .p {
    width: 60px;
    height: 60px;
  }
  .n {
    width: 100%;
    display: block;
    overflow: hidden;
    font-size: 0.9em;
    word-wrap: break-word;
    word-break: break-all;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    text-align: center;
  }
  :hover {
    cursor: pointer;
  }
`,qt=k.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-weight: 500;
  .thumbs {
    width: 50px;
    height: 70px;
    object-fit: contain;
    margin: 10px;
  }
  :hover {
    cursor: pointer;
    .t {
      text-decoration: underline;
    }
  }
`;k.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-weight: 500;
  width: 95%;
  height: 70px;
  margin: 10px 0;
  position: relative;
  text-align: center;
  justify-content: center;
  :hover {
    cursor: pointer;
    .mc {
      backdrop-filter: blur(3px) brightness(0.8);
    }
  }
  .mc {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-weight: 600;
    backdrop-filter: blur(3px) brightness(0.5);
    gap: 10px;
    padding-left: 10px;
    .year,
    .runtime {
      border: 1px solid red;
      padding: 10px;
      border-radius: 10px;
    }
    .year {
    }
    .runtime {
    }
  }
`;const Qp=()=>{const t=mt(),i=W(),n=a.useRef(null),[d,o]=a.useState(""),[s,u]=a.useState(""),[p,l]=a.useState(!1),[c,h]=a.useState([]),[f,g]=a.useState([]),[m,x]=a.useState([]),[v,b]=a.useState([]),C=w=>{w.stopPropagation(),o(()=>w.target.value)};a.useEffect(()=>{const w=oe.debounce(M=>{u(M)},500);return w(d),()=>{w.cancel()}},[d]);const[y]=Pa({variables:{search:s},pause:A()});a.useEffect(()=>{const{data:w,error:M,fetching:S}=y;if(M&&console.log(M),!S&&w){const I=w.getSearchResults,R=I==null?void 0:I.users,j=I==null?void 0:I.movies,G=I==null?void 0:I.titles,D=I==null?void 0:I.episodes;R&&h(()=>R),j&&g(()=>j),G&&b(()=>G),D&&x(()=>D)}},[y,d]);const N=w=>{var S;const M=w.target;(S=n.current)!=null&&S.contains(M)||l(()=>!1),document.removeEventListener("mousedown",N)};return document.addEventListener("mousedown",N),r("div",{ref:n,children:[r(Gp,{children:[e("div",{className:"icon blur-escape",children:e(ns,{size:25})}),e("form",{onSubmit:w=>{w.stopPropagation(),w.preventDefault();let M=t.pathname,S=`/search/${d}/episodes`,I=M.split("/");I[1]==="search"&&(S=`/${I[1]}/${d}/${I[3]}`),i(S),l(()=>!1)},children:e("input",{type:"text",id:"search blur-escape",name:"search",value:d,onFocus:w=>{w.stopPropagation(),l(()=>!0)},onBlur:w=>{w.stopPropagation()},onChange:C,placeholder:"Search people, movies, shows."})})]}),p&&d&&e(Bp,{className:"search-results",children:y.fetching?e(ie,{}):r(a.Fragment,{children:[e("div",{className:"heading",children:d?"Search Results":"Recent searches"}),r("div",{className:"content",children:[!c&&!f&&!v&&!m?e("div",{children:"No Recent searches were found"}):r("div",{className:"content-container",children:[c.length>0&&r(re.Fragment,{children:[e("div",{className:"people",children:"People"}),e("div",{className:"users-content",children:c.map(w=>r(qp,{onClick:M=>{i(`/profile/${w.nickname}`),l(()=>!1)},children:[e("div",{className:"p",onClick:M=>{i(`/profile/${w.nickname}`),l(()=>!1)},children:e(Ce,{src:w.photoUrl,tooltip:!0,user:w})}),e("div",{className:"n",children:w.nickname})]}))})]}),v.length>0&&r(re.Fragment,{children:[e("div",{className:"shows",children:"Shows"}),e("div",{className:"titles-content",children:v.map(w=>r(qt,{onClick:M=>{M.stopPropagation(),i(`/show/${w.id}`),l(()=>!1)},children:[e(X,{src:w.boxart,alt:w.title,className:"thumbs"}),e("div",{className:"t",children:w.title})]}))})]}),f.length>0&&r(re.Fragment,{children:[e("div",{className:"movies",children:"Movies"}),e("div",{className:"movies-content",children:f.map(w=>r(qt,{onClick:M=>{M.stopPropagation(),i(`/movie/${w.id}`),l(()=>!1)},children:[e(X,{src:w.boxart,alt:w.title,className:"thumbs"}),r("div",{className:"t",children:[w.title," (",w.year,")"]})]}))})]}),m.length>0&&r(re.Fragment,{children:[e("div",{className:"movies",children:"Episodes"}),e("div",{className:"movies-content",children:m.map(w=>r(qt,{onClick:M=>{M.stopPropagation(),i(`/movie/${w.id}`),l(()=>!1)},children:[w.thumbs&&e(X,{src:w.thumbs,alt:w.name,className:"thumbs"}),r("div",{className:"t",children:[w.parentTitleName," - ",w.season," -",w.name," (",w.year,")"]})]}))})]})]}),d&&r("div",{className:"more",onClick:w=>{w.stopPropagation(),i(`/search/${d}/episodes`),l(()=>!1)},children:['Search more for "',d,'"']})]})]})})]})},Wp=({className:t})=>{Ue();const i=os(),n=L(u=>u.misc.isNavBarOpen),d=K(),o=u=>{u.stopPropagation(),d(Vt(!n))},s=L(u=>u.user);return r(_p,{className:t,children:[r("div",{className:"logo",children:[r("div",{className:"logo-image",children:[e("img",{className:"image",src:i.themeType==="light"?Hp:Mt,alt:"QuietChat",id:"blur-escape",loading:"lazy"}),e("p",{style:{fontWeight:600,fontSize:"12px",alignSelf:"flex-end"},children:"(Beta)"})]}),e("div",{className:"logo-icon",onClick:o,children:n?e(ss,{className:"icon",size:20}):e(rs,{className:"icon",size:20})})]}),e("div",{className:"search",children:e(Qp,{})}),e(so,{message:ut.HEADER_OPTIONS,dir:Pe.BOTTOM_LEFT,height:"200px",width:"220px",children:e("div",{className:"user",children:e("div",{className:"logo-image",children:e(X,{className:"image",src:s.photoUrl,alt:"user"})})})})]})},Yp=k.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  border-right: 0.3px solid #8f8f8f81;
  .parent-profile {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    gap: 25px;
    width: 100%;
    justify-content: center;
    .profile {
      width: 50px;
      height: 50px;
      aspect-ratio: 1;
      position: relative;
      margin: 10% 0;
    }
    .profile-text {
      display: flex;
      flex-direction: column;
      gap: 5px;
      .welcome-text {
        font-size: 13px;
      }
      .user-text {
        font-size: 15px;
        font-weight: 600;
      }
    }
  }
  .options {
    width: 100%;
    height: 60%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    .option {
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 18px;
      width: 50%;
      padding: 10px;
      color: inherit;
      text-decoration: none;
      font-size: 14px;
      :hover {
        background-color: ${t=>t.theme.hoverColor};
        cursor: pointer;
      }
      .icon {
        display: flex;
        justify-content: center;
        align-items: center;
        flex: 1 0 30%;
      }
      .text {
        flex: 1 0 80%;
        font-weight: 600;
      }
    }
    .active {
      transition: all 1s;
      background-color: ${t=>t.theme.hoverColor};
      .icon {
        svg {
          height: 27px;
          width: 27px;
        }
      }
      .icon.feed {
        svg {
          fill: red;
        }
      }
      .icon.catalog {
        svg {
          fill: #ff7b00;
        }
      }
      .icon.p {
        svg {
          fill: #3db847;
        }
      }
      .icon.favorites {
        svg {
          fill: #ff0000;
        }
      }
      .icon.comments {
        svg {
          fill: #6a30ac;
        }
      }
      .icon.replies {
        svg {
          fill: #478887;
        }
      }
      .icon.notifications {
        svg {
          fill: #426bda;
        }
      }
      .text {
      }
    }
  }

  @media (max-height: 700px) {
    .parent-profile {
      .profile {
        width: 70px;
        height: 70px;
        margin: 20% 0;
      }
    }
  }

  @media (max-height: 550px) {
    .parent-profile {
      display: none;
      .profile {
        display: none;
      }
    }

    .options {
      display: flex;
      justify-content: flex-start;
      margin-top: 20px;
      height: 100%;
      overflow: auto;
      .option {
        .icon {
          display: flex;
          justify-content: center;
          align-items: center;
          flex: 1 0 30%;
          svg {
            height: 20px;
            width: 20px;
          }
        }
        .text {
          flex: 1 0 80%;
          font-size: 0.7rem;
          font-weight: 600;
        }
      }
    }
  }
`,Vp=k.div`
  padding: 20px;
  flex-wrap: wrap;
  width: 80%;
  font-size: 10px;
  line-height: 15px;
  color: #71767b;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  div {
    cursor: pointer;
    :hover {
      text-decoration: underline;
    }
  }
`,Xp=({className:t})=>{Ue();const i=a.useRef(null),n=L(l=>l.user),d=L(l=>l.settings.theme),o=qi(),s=l=>{l.stopPropagation();const c=d!==je.DARK;o(Zs(c))},u=25;a.useEffect(()=>{},[n.photoUrl]),a.useEffect(()=>{function l(c){var h;i&&!((h=i.current)!=null&&h.contains(c.target))&&o(Vt(!1))}return document.addEventListener("click",l),()=>{document.removeEventListener("click",l)}},[i]);const p=l=>{l.stopPropagation(),Y.unstable_batchedUpdates(()=>{o(V(!1)),o(Q("")),o(Vt(!1))})};return r(Yp,{className:t,ref:i,children:[r("div",{className:"parent-profile",children:[e("div",{className:"profile",children:e(Ce,{src:n==null?void 0:n.photoUrl,user:n,tooltip:!0})}),r("div",{className:"profile-text",children:[e("div",{className:"welcome-text",children:"Welcome back"}),e("div",{className:"user-text",children:n.nickname})]})]}),r("div",{className:"options",children:[r(ae,{to:"/",className:"option",end:!0,onClick:p,children:[e("div",{className:"icon feed",children:e(as,{size:u})}),e("div",{className:"text",children:"Feed"})]}),r(ae,{to:"/catalog",className:"option",onClick:p,children:[e("div",{className:"icon catalog",children:e(ls,{size:u})}),e("div",{className:"text",children:"Catalog"})]}),r(ae,{to:`/profile/${n.nickname}`,className:"option",onClick:p,children:[e("div",{className:"icon p",children:e(Xi,{size:u})}),e("div",{className:"text",children:"Profile"})]}),r(ae,{to:`activity/${n.nickname}/favorites`,className:"option",onClick:p,children:[e("div",{className:"icon favorites",children:e(Et,{size:u})}),e("div",{className:"text",children:"Favorites"})]}),r(ae,{to:`/comments/${n.nickname}`,className:"option",onClick:p,children:[e("div",{className:"icon comments",children:e(Ki,{size:u})}),e("div",{className:"text",children:"Comments"})]}),r(ae,{to:`/replies/${n.nickname}`,className:"option",onClick:p,children:[e("div",{className:"icon replies",children:e(cs,{size:u})}),e("div",{className:"text",children:"Replies"})]}),r(ae,{to:"/notifications",className:"option",onClick:p,children:[e("div",{className:"icon notifications",children:e(ds,{size:u})}),e("div",{className:"text",children:"Notifications"})]}),e("div",{className:"option",onClick:s,children:d===je.DARK?r(re.Fragment,{children:[e("div",{className:"icon",children:e(ps,{size:u})}),e("div",{className:"text",children:"Light"})]}):r(re.Fragment,{children:[e("div",{className:"icon",children:e(us,{size:u})}),e("div",{className:"text",children:"Dark"})]})})]}),r(Vp,{children:[e("div",{onClick:l=>{l.stopPropagation(),window.open("/terms-and-conditions","_blank")},children:"Terms of Service"}),e("div",{onClick:l=>{l.stopPropagation(),window.open("/privacy","_blank")},children:"Privacy Policy"}),e("div",{onClick:l=>{l.stopPropagation(),window.open("/cookie-policy","_blank")},children:"Cookie Policy"}),e("div",{onClick:l=>{l.stopPropagation(),window.open("/about-us","_blank")},children:"About us"}),e("div",{onClick:l=>{l.stopPropagation(),window.open("/contact","_blank")},children:"Contact us"}),e("div",{children:"© 2023 MoovyChat."})]})]})};const Xe={MOVIE:"MOVIE",COMMENT:"COMMENT"},ze={REPLY:"REPLY",COMMENT:"COMMENT"},Ke={BG:"BACKGROUND_IMAGE",PFP:"PROFILE_PICTURE"},Kp=k.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 7;
  backdrop-filter: blur(20px) brightness(0.5);
`,Jp=k.div`
  position: fixed;
  min-width: 10vw;
  min-height: 10vh;
  display: flex;
  border-radius: 18px;
  box-shadow: 0px 0px 5px, 0px 0px 3px 1px;
  top: 35%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  background: ${t=>t.theme.body};
  z-index: 8;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 500px) {
    width: 100vw;
    height: 99vh;
    top: 50%;
  }
`,Zp=k.div`
  position: relative;
  height: 50vh;
  width: 50vw;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: ${t=>t.theme.background};
  .heading {
    position: relative;
    height: 10%;
    width: 100%;
    display: flex;
    margin: 5px 0;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    overflow: hidden;
    /* box-shadow: 0px 3px 4px 0px; */
    .close {
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      top: 0px;
      right: 10px;
      border-radius: 50%;
      cursor: pointer;
      width: 30px;
      height: 30px;
      :hover {
        background-color: #ffffff57;
      }
    }
    .icon {
      margin: 0 10px;
    }
  }
  .context {
    position: relative;
    height: 90%;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    .user-container {
      height: 100%;
      flex: 1 1 15%;
      display: flex;
      justify-content: flex-end;
      margin-top: 80px;
      .user {
        width: 65px;
        height: 65px;
      }
    }
    .comment-section {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      margin-left: 40px;
      height: 100%;
      width: 80%;
      position: relative;
      .textarea-container {
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        height: 70%;
        width: 80%;
      }
      .title-details {
        position: relative;
        width: 100%;
        height: 50px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        .chip {
          margin: 0 5px;
        }
        .post {
          position: absolute;
          display: flex;
          justify-content: center;
          align-items: center;
          bottom: 70px;
          right: 40px;
          border-radius: 50%;
          background-color: #6d0e85;
          padding: 10px;
          cursor: pointer;
          transition: all 0.2s;

          :hover {
            transform: translateY(-2px) scale(1.05);
            box-shadow: 0px 1px 2px 0px white, inset 0px -2px 2px black;
          }
          :active {
            transform: translateY(0px) scale(1);
            box-shadow: inset 0px 0px 5px black;
          }
        }
      }
      .options {
        display: flex;
        gap: 10px;
        margin: 10px;
        .chip {
          display: flex;
          gap: 5px;
          justify-content: center;
          align-items: center;
          background-color: #6d0e85;
          .icon {
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .text {
          }
        }
        .down {
          pointer-events: none;
        }
      }
      .comment {
        width: 80%;
        .mini {
          width: 100%;
          height: 100%;
          .data {
            width: 80%;
            .msg {
              height: 100%;
              width: 100%;
              text-overflow: ellipsis;
              display: block;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: pre-line;
            }
          }
        }
      }
    }
  }
  @media (max-width: 760px) {
    height: 98vh;
    width: 98vw;
    .context {
      .user-container {
        display: none;
      }
      .comment-section {
        width: 99%;
        justify-content: flex-start;
        .textarea-container {
          width: 95%;
          height: 25%;
        }
        .options,
        .comment {
          width: 95%;
        }
        .comment {
          .mini {
            min-height: 100px;
          }
        }
        .title-details {
          display: flex;
          height: 150px;
          width: 98vw;
          flex-direction: column;
          justify-content: space-evenly;
          align-items: center;
          .post {
            position: relative;
            border-radius: 0px;
            display: flex;
            width: 60%;
            bottom: 0;
            right: 0;
            left: 0;
            top: 0;
          }
        }
      }
    }
  }
`,ro=()=>ht`
  overflow-x: hidden;
  overflow-y: auto;
  white-space: pre-wrap;
  overflow-wrap: break-word;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 1.2em;
  border: none;
  padding: 5px 0px;
  font-weight: 500;
  word-spacing: 0.2em;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 70%;
  width: 100%;
  outline: none;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
  resize: none;
`,eu=k.textarea`
  ${ro()}
  z-index: 2;
  background: transparent;
  color: #fafafa00;
  caret-color: ${t=>t.theme.text};
`,tu=k.div`
  ${ro()}
  z-index: 1;
  /* background-color: #0a0a0a;
  box-shadow: inset 0 0 10px black, inset 0 0 0px 2px; */
  .basic {
    white-space: pre-line;
  }
`;const Nt=({name:t})=>e("div",{className:"chip",onClick:i=>{i.stopPropagation()},children:t}),Oi=({type:t})=>{const[i,n]=Ir(),[d,o]=ga(),s=L(y=>y.textArea.text),u=a.useRef(null),p=L(y=>y.user);let l=L(y=>y.popup.popupData);const[c,h]=a.useState(),[f,g]=a.useState(),m=K(),[x,v]=a.useState(0);a.useEffect(()=>{t===Xe.MOVIE?h(l):g(()=>l)},[t]);const b=y=>{y.stopPropagation(),Y.unstable_batchedUpdates(()=>{m(V(!1)),m(Q("")),m(le({})),m(ct(""))})},C=y=>{if(y.stopPropagation(),s!==""&&(t===Xe.MOVIE&&(v(1),n({options:{commentedUserId:p.id,commentedUserName:p.nickname,likesCount:0,message:s,movieId:c==null?void 0:c.id,platformId:1}}).then(N=>{const{data:P,error:$}=N;$&&(console.log($),v(3)),P&&(v(2),Y.unstable_batchedUpdates(()=>{m(V(!1)),m(Q("")),m(le({}))}))})),t===Xe.COMMENT)){v(1);let N=f,P=N.parentCommentId;o({options:{commentedUserId:p.id,commentedUserName:p.nickname,likesCount:0,message:s,movieId:N==null?void 0:N.movieId,platformId:1,repliesCount:0,parentRepliedUser:N==null?void 0:N.commentedUserName,parentCommentId:isNaN(parseInt(P))?N.id:P,parentReplyId:N.id}}).then($=>{const{data:T,error:w}=$;w&&(console.log(w),v(3)),T&&(v(2),Y.unstable_batchedUpdates(()=>{m(V(!1)),m(Q("")),m(le({}))}))})}};return r(Zp,{children:[r("div",{className:"heading",children:[e(Ki,{size:25,className:"icon"}),e("span",{children:" Post your comment"}),e("div",{className:"close",onClick:b,children:e(Rt,{size:20})})]}),r("div",{className:"context",children:[e("div",{className:"user-container",children:e("div",{className:"user",children:e(Ce,{src:p==null?void 0:p.photoUrl,tooltip:!0})})}),r("div",{className:"comment-section",children:[r("div",{className:"textarea-container",children:[e(eu,{placeholder:"Hmm...",value:s,maxLength:300,autoFocus:!0,onChange:y=>{y.stopPropagation(),m(ct(y.target.value))}}),e(tu,{ref:u,children:s})]}),r("div",{className:"options",children:[e(so,{message:ut.EMOJI,height:"200px",width:"200px",children:r("div",{className:"chip",children:[e("div",{className:"icon",children:e(hs,{size:15})}),e("div",{className:"text",children:"Emoji"})]})}),r("div",{className:"chip",onClick:y=>{y.stopPropagation(),m(ct(s+"<s></s>"))},children:[e("div",{className:"icon",children:e(ms,{size:15})}),e("div",{className:"text",children:"Spoiler"})]}),r("div",{className:"chip down",style:{background:`linear-gradient(90deg, #df1212 ${s.length/3}%,#6d0e85 0%)`},children:[e("div",{className:"icon",children:e(fs,{size:15})}),r("div",{className:"text",children:[s.length,"/300"]})]})]}),t===Xe.COMMENT&&f&&e("div",{className:"comment",children:e(Dt,{id:f.id,type:f.parentCommentId?"reply":"comment",className:"mini",extendData:!1})}),r("div",{className:"title-details",children:[t==="movie"&&e(Nt,{name:c==null?void 0:c.name}),x===1&&e(Nt,{name:"Posting Comment"}),x===2&&e(Nt,{name:"Comment posted"}),x===3&&e(Nt,{name:"Error posting comment"}),e("div",{className:"post",onClick:C,children:e(gs,{size:25,fill:"white"})})]})]})]})]})},iu=k.div`
  padding: 20px 5px;
  min-width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .heading {
    font-size: 20px;
    font-weight: 600;
  }
  .sub {
    font-size: 0.8em;
    margin-top: 10px;
    width: 50%;
    text-align: center;
    opacity: 0.8;
  }
  .delete-cancel {
    margin: 30px 0;
    display: flex;
    gap: 15px;
    .del,
    .cancel {
      padding: 10px 20px;
      border-radius: 18px;
      font-size: 12px;
      box-shadow: 0 0 10px;
      transition: all 0.4s;
      cursor: pointer;
      :hover {
        transform: scale(1.05);
      }
      :active {
        transform: scale(0.95);
      }
    }
    .del {
      background-color: #ce1515;
      color: white;
      box-shadow: 0 0 5px
        ${t=>t.theme.themeType==="light"?"black":"white"};
    }
    .cancel {
    }
  }
`,ji=({type:t})=>{const i=L(f=>f.popup),[n,d]=a.useState(null),o=K(),[s,u]=a.useState(null),[,p]=Tr(),[,l]=ma();a.useEffect(()=>{t===ze.COMMENT?d(i.popupData):t===ze.REPLY&&u(i.popupData)},[t]);const c=f=>{f.stopPropagation(),t===ze.COMMENT?p({cid:n==null?void 0:n.id,mid:n==null?void 0:n.movieId}).then(g=>{const{data:m,error:x}=g;x&&console.log(x),m&&Y.unstable_batchedUpdates(()=>{o(V(!1)),o(Q("")),o(le(null))})}):t===ze.REPLY&&l({rid:s==null?void 0:s.id}).then(g=>{const{data:m,error:x}=g;(x||!m)&&console.log(x),m&&Y.unstable_batchedUpdates(()=>{o(V(!1)),o(Q("")),o(le(null))})})},h=()=>{Y.unstable_batchedUpdates(()=>{o(V(!1)),o(Q("")),o(le(null))})};return r(iu,{children:[r("div",{className:"heading",children:["Delete ",t===ze.COMMENT?"Comment":"Reply","?"]}),e("div",{className:"sub",children:"The comment will be deleted permanently from your profile, the feed for all the users, that follows you."}),r("div",{className:"delete-cancel",children:[e("div",{className:"del",onClick:c,children:"Delete"}),e("div",{className:"cancel",onClick:h,children:"Cancel"})]})]})},Qt=k.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  min-width: 50vw;
  min-height: 50vh;
  form {
    width: 100%;
    height: 100%;
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: space-evenly;
    #title {
      font-size: 1rem;
      font-weight: bold;
      color: ${t=>t.theme.text};
      margin-bottom: 1rem;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0 10px;
      #ic {
        padding: 10px;
      }
    }
    .ext {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      gap: 10px;
      flex-wrap: wrap;
      #save {
        background: ${t=>t.hasError?"#9bbc86":"#459d0e"};
        pointer-events: ${t=>t.hasError?"none":"auto"};
      }
      #cancel {
        background: #ffffff;
      }
      button {
        padding: 10px 20px;
        border: none;
        font-weight: 600;
        letter-spacing: 1px;
        box-shadow: 0 0 5px;
        transition: 0.2s;
        margin: 20px 0;
        :hover {
          cursor: pointer;
          box-shadow: 0 0 3px 1px ${t=>t.theme.text}, inset 0 0 5px black;
        }
        :active {
          box-shadow: 0 0 1px 1px ${t=>t.theme.text}, inset 0 0 7px black;
        }
      }
    }
  }
`,rt=({title:t,type:i,value:n,setValue:d,keyItem:o,error:s})=>r(yl,{error:s,children:[e("div",{className:"title",children:s&&s!=="none"?s:t}),e("div",{className:"in",children:i==="text"||i==="date"?e("input",{type:i,name:t,id:t,value:n,maxLength:25,minLength:2,onChange:u=>{u.stopPropagation(),d(o,u.target.value)}}):i==="textarea"?e("textarea",{id:t,value:n,maxLength:100,onChange:u=>{u.stopPropagation(),d(o,u.target.value)}}):r("select",{onChange:u=>{u.stopPropagation(),d(o,u.target.value)},value:n,children:[e("option",{defaultChecked:!0,value:"",children:"Choose your gender"}),e("option",{value:"male",children:"Male"}),e("option",{value:"female",children:"Female"}),e("option",{value:"other",children:"Other"})]})}),e("div",{className:"light-container",children:e("div",{className:"light"})})]}),nu=()=>{const t=L(P=>P.profile),i=L(P=>P.user),[n,d]=a.useState(t),[o,s]=a.useState(i.nickname),u=K(),[p,l]=a.useState(!1),[c,h]=a.useState(""),[f,g]=a.useState(!1),[,m]=Mn(),x=W(),[v,b]=a.useState({nickname:"",fullname:"",gender:""});a.useMemo(()=>{Object.values(v).filter($=>$!=="").length>0?g(()=>!0):g(()=>!1)},[v,g]),a.useEffect(()=>{n&&n.fullname&&n.fullname.length<2?b(P=>({...P,fullname:"Invalid name"})):b(P=>({...P,fullname:""})),n.gender===""?b(P=>({...P,gender:"Invalid value"})):b(P=>({...P,gender:""})),o.length<2?b(P=>({...P,nickname:"Invalid user name"})):b(P=>({...P,nickname:""}))},[n,o,b,g]);const C=P=>{P.stopPropagation(),l(()=>!0),m({options:{uid:i.id,nickname:o,gender:n.gender,fullname:n.fullname,dob:n.dob,bio:n.bio}}).then($=>{const{data:T,error:w}=$;if(w!=null&&w.message){l(()=>!1),console.log(w.message,w.name,w.graphQLErrors,w.networkError,w.response),h(w.message);return}Y.unstable_batchedUpdates(()=>{u(an(o)),u(Zt(T==null?void 0:T.upsertProfile)),d(T==null?void 0:T.upsertProfile),u(V(!1)),u(Q(""))}),x(`/profile/${o}`),l(()=>!1),window.location.reload()}).catch($=>(console.error($),g(!0),e("pre",{children:"error"})))},y=(P,$)=>{P==="nickname"?s($):d({...n,[P]:$})},N=P=>{P.stopPropagation(),Y.unstable_batchedUpdates(()=>{u(V(!1)),u(Q(""))})};return p?e(Qt,{hasError:!1,children:e(ie,{})}):c?r(Qt,{hasError:!0,children:[e("div",{id:"title",children:"Server Error"}),r("div",{id:"title",style:{fontSize:"2.5rem",display:"flex",flexDirection:"column",padding:"20px 30px",borderRadius:"50%",boxShadow:"0 0 5px"},children:[e(xs,{fill:"red"}),e("span",{children:"400"})]}),e("div",{id:"title",children:c})]}):e(Qt,{hasError:f,children:r("form",{onSubmit:C,children:[r("div",{id:"title",children:[e("span",{id:"ic",children:e(vs,{size:25})}),e("span",{children:"Edit Profile"})]}),e("div",{className:"nickname ext",children:e(rt,{title:"Username*",type:"text",value:o,keyItem:"nickname",setValue:y,error:v.nickname})}),e("div",{className:"first ext",children:e(rt,{title:"Full Name*",type:"text",keyItem:"fullname",value:n.fullname,setValue:y,error:v.fullname})}),e("div",{className:"dob ext",children:e(rt,{title:"DOB",type:"date",keyItem:"dob",value:n.dob,setValue:y,error:"none"})}),e("div",{className:"gender ext",children:e(rt,{title:"Gender*",type:"select",keyItem:"gender",value:n.gender,setValue:y,error:v.gender})}),e("div",{className:"gender ext",children:e(rt,{title:"Bio",type:"textarea",keyItem:"bio",value:n.bio,setValue:y,error:"none"})}),r("div",{className:"ext",children:[e("button",{id:"save",type:"submit",children:"Save"}),e("button",{id:"cancel",onClick:N,children:"Cancel"})]})]})})};const ou=k.div`
  position: relative;
  width: 50vw;
  min-height: 70vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  .heading {
    font-size: 1.1em;
    font-weight: 600;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    .close {
      cursor: pointer;
      position: absolute;
      right: 15px;
      top: 15px;
      z-index: 2;
      width: 25px;
      height: 25px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      :hover {
        box-shadow: inset 0 0 5px;
      }
    }
  }
  .save-close {
    display: flex;
    z-index: 6;
    .save {
      z-index: 2;
      position: absolute;
      pointer-events: ${t=>t.url?"all":"none"};
      right: 15px;
      bottom: 20px;
    }
  }
  .options {
    display: flex;
    position: relative;
    padding: 0px 0;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100px;
    .or {
      position: absolute;
      border: 1px solid;
      width: 20px;
      height: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      padding: 5px;
      box-shadow: inset 0 0 10px, 0 0 3px;
    }
    .from {
      flex: 1 1 50%;
      padding: 10px;
      display: flex;
      align-items: center;
      justify-content: space-around;
      height: 100%;
      .text {
        font-weight: 600;
        line-height: 16px;
        margin-bottom: 10px;
      }
    }
    .url,
    .local {
      flex-direction: column;
      .input {
        width: 90%;
        border-radius: 20px;
        padding: 5px;
        display: flex;
        box-shadow: inset 0 0 5px, 0 0 2px;
        justify-content: center;
        align-items: center;
        .icon {
          width: 10%;
        }
        input {
          border: none;
          background: none;
          width: 90%;
          height: 100%;
          color: ${t=>t.theme.text};
          :active,
          :focus {
            border: none;
            background: none;
            outline: none;
          }
        }
      }
    }
  }
  .error {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    .in {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      .loading {
        display: flex;
        align-items: center;
        flex-direction: column;
      }
      .e-in-e {
        font-size: 12px;
        font-weight: 600;
        margin-left: 10px;
      }
    }
  }
  @media (max-width: 500px) {
    width: 100vw;
    height: 50vh;
    .heading {
      font-size: 1em;
      font-weight: 600;
      height: 50px;
      .close {
        position: absolute;
        right: 10px;
        top: 10px;
      }
    }
    .save-close {
      width: 90%;
      .save {
        position: absolute;
        right: 20px;
        bottom: 100px;
      }
    }
    .options {
      flex-direction: column;
      height: 120px;
      margin-top: 12px;
      border: 1px solid;
      padding: 30px;
      .or {
        display: none;
      }
    }
  }
`,su=k.div`
  position: relative;
  align-items: flex-start;
  width: 100%;
  height: 60%;
  display: flex;
  justify-content: center;
  overflow: hidden;
  .display-container {
    width: 500px;
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    margin: 25px;
    .controls {
      position: absolute;
      bottom: 0;
      width: 200px;
      background-color: #181818bd;
      padding: 10px 20px;
      border-radius: 20px;
    }
    .cropper-container {
      display: flex;
      flex-direction: column;
      .container {
      }
    }
    .dropzone {
      width: 99%;
      height: 99%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      :hover {
        cursor: pointer;
      }
    }
    img {
      width: 100%;
      height: 100%;
      border: 0.3px solid;
    }
  }
`,ru=k.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-radius: 4px;
  background-color: ${({isDragActive:t})=>t?"rgba(255, 255, 255, 0.1)":"transparent"};
  color: ${({isDragReject:t})=>t?"#ff1744":"inherit"};
  transition: background-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  cursor: pointer;
  box-shadow: ${({isDragActive:t})=>t?"0px 0px 15px rgba(0, 128, 0, 0.3)":"0px 0px 15px rgba(0, 0, 0, 0.1)"};

  &:focus {
    outline: none;
  }

  ${({isDragActive:t,isDragReject:i})=>(t||i)&&ht`
      background-color: rgba(255, 255, 255, 0.1);
      box-shadow: 0px 0px 15px rgba(0, 128, 0, 0.3);
    `}

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    box-shadow: 0px 0px 15px rgba(0, 128, 0, 0.3);
  }
`,Di=k.p`
  color: #ff1744;
  font-size: 0.8em;
  margin-top: 0.5em;
`,au=k(ys)`
  font-size: 3em;
  margin-bottom: 1em;
`,lu=k.p`
  font-size: 1.2em;
  font-weight: bold;
  margin-bottom: 1em;
  text-align: center;
`,cu=k.ul`
  margin-top: 1em;
  list-style: none;
  padding-left: 0;
`;k.li`
  color: #ff1744;
  font-size: 0.8em;
  font-weight: bold;
  margin-top: 0.5em;
`;function du(t,i,n){const d=new Image;d.src=t;const o=document.createElement("canvas");o.width=n.width,o.height=n.height;const s=o.getContext("2d");return new Promise(u=>{d.onload=()=>{const p=d.naturalWidth/d.width,l=d.naturalHeight/d.height,c={x:i.x*p,y:i.y*l,width:i.width*p,height:i.height*l};o.width=c.width,o.height=c.height,s==null||s.drawImage(d,c.x,c.y,c.width,c.height,0,0,c.width,c.height),o.toBlob(h=>{u(h)},"image/jpeg",1)}})}const Te={INITIAL:"INITIAL",LOADING:"LOADING",ERROR:"ERROR",SUCCESS:"SUCCESS"},pu=({type:t})=>{const i=ws(),n=a.useRef(null),[d,o]=a.useState(""),[s,u]=a.useState({msg:"",status:Te.INITIAL}),p=L(H=>H.user),l=K(),[c,h]=a.useState(""),[f,g]=a.useState({x:0,y:0}),[m,x]=a.useState(1),[v,b]=a.useState({width:0,height:0,x:0,y:0}),[,C]=Va(),[,y]=Wa(),[N,P]=a.useState(!1),[$,T]=a.useState(!1),w=1e7,{acceptedFiles:M,fileRejections:S,isDragReject:I,getRootProps:R,getInputProps:j,isDragActive:G}=bs({accept:{"image/jpeg":[],"image/jpg":[]},maxSize:w,onDropRejected:H=>{H.forEach(se=>{const pe=se.file,Se=se.errors;pe.size&&pe.size>w&&D(pe),console.log(`Rejected file: ${pe.name}`),console.log("Reasons for rejection:"),Se.forEach(ce=>console.log(`- ${ce.message}`))})},maxFiles:1,multiple:!1}),D=a.useCallback(H=>{alert(`File "${H.name}" exceeds the maximum file size of ${w} bytes.`)},[w]),_=S.map(H=>{var se;return r("li",{children:[H.file.name," (",H.file.size||((se=H==null?void 0:H.file)==null?void 0:se.size)," bytes) -"," ",H.errors[0].message]},H.file.name)});a.useEffect(()=>{const H=document.getElementById("popup-child");H&&(H.style.cssText=`
      top: 50%;
    `)},[]);const he=async H=>{H.stopPropagation(),T(!0),P(!1);const se=Ns(i,p.id+"-"+t);let pe;if(u({msg:"Uploading image. Please stay on this page.",status:Te.LOADING}),c==="fromLocal"){const we=t===Ke.PFP?{width:320,height:320}:{width:820,height:312},fe=await du(d,v,we);if(!fe){console.log("Error creating blob"),u({msg:"Error creating blob",status:Te.ERROR});return}const Qe=await ml(fe);if(!Qe){u({msg:"Error compressing blob",status:Te.ERROR}),console.log("Error compressing blob");return}await Ss(se,Qe);const Re=await Ps(se);t===Ke.PFP?pe=await C({url:Re,uid:p.id}):pe=await y({url:Re,uid:p.id})}const{error:Se,data:ce}=pe;if(Se&&console.log(Se),!Se){if(t===Ke.PFP){const we=ce==null?void 0:ce.updateUserProfilePhoto.user,fe=ce==null?void 0:ce.updateUserProfilePhoto.errors;if(fe&&console.log(fe),fe||we==null)return;l(Ee(we))}else{const we=ce==null?void 0:ce.updateUserBg.user,fe=ce==null?void 0:ce.updateUserBg.errors;if(fe&&console.log(fe),fe||we==null)return;l(Ee(we))}u({msg:"Profile pic updated successfully",status:Te.SUCCESS}),P(!0),window.location.reload()}},J=a.useCallback((H,se)=>{b(se)},[]);return a.useEffect(()=>{if(M.length>0){const se=M[0];var H=new FileReader;H.onloadend=function(){var pe;o(((pe=H.result)==null?void 0:pe.toString())||""),h("fromLocal"),u({msg:"",status:Te.INITIAL})},H.readAsDataURL(se)}},[M]),r(ou,{url:d,children:[r("div",{className:"heading",children:[e("span",{children:"Upload the photo"}),e("div",{role:"button",className:"close",color:"#484242",onClick:H=>{H.stopPropagation(),Y.unstable_batchedUpdates(()=>{l(V(!1)),l(Q("")),l(le(null))})},children:e(Rt,{})})]}),e("div",{className:"save-close",children:e(Al,{className:"save",color:d?"#de1328":"#9c535b",onClick:he,children:$?N?"Saved":"Saving..":"Save"})}),e(su,{className:"display",children:e("div",{className:"display-container",children:d?c==="fromLocal"?r(de,{children:[e("div",{className:"cropper-container",children:t===Ke.PFP?e(bi,{aspect:1,crop:f,zoom:m,image:d,onCropComplete:J,onCropChange:g,onZoomChange:x,ref:n}):e(bi,{cropShape:"rect",aspect:3.5,crop:f,zoom:m,image:d,onCropComplete:J,onCropChange:g,onZoomChange:x,ref:n})}),e("div",{className:"controls",children:e("input",{type:"range",id:"image-slider",value:m,min:1,max:3,step:.1,"aria-labelledby":"Zoom",onChange:H=>{H.stopPropagation(),x(Number(H.target.value))}})})]}):e("img",{alt:"image-crop",src:d}):r(ru,{...R({className:"dropzone"}),isDragActive:G,isDragReject:I,children:[e("input",{...j()}),e(au,{}),e(lu,{children:"Drag and drop an image file here, or click to select file"}),r(Di,{children:["Maximum file size: ",w," bytes"]}),I&&e(Di,{children:"Only a single JPEG/JPG file is supported. Please check the file and try again."}),S.length>0&&e(cu,{children:_})]})})}),e("div",{className:"error",children:s.status!==Te.INITIAL?r("div",{className:"in",children:[e("div",{className:"loading",children:s.status===Te.LOADING?e(ie,{}):s.status===Te.ERROR?e(ks,{size:20,fill:"#c11d1d"}):s.status===Te.SUCCESS?e(Cs,{size:20,fill:"#00ff2f"}):""}),e("div",{className:"e-in-e",children:s.msg})]}):e(de,{})})]})},_i=xe(ye)(pu),ao=k.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50vw;
  height: 40vh;
  flex-direction: column;
  position: relative;
  padding: 10px 20px 100px 20px;
  .follow-head {
    margin: 15px 0;
    font-weight: bold;
    .close {
      position: absolute;
      right: 20px;
      top: 15px;
      svg {
        padding: 5px;
        :hover {
          padding: 5px;
          cursor: pointer;
          background-color: #6e6e6e8b;
          border-radius: 20px;
        }
        :active {
          background-color: #6e6e6eb7;
        }
      }
    }
  }
  .users-container {
    position: relative;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    overflow: auto;
  }
  @media (max-width: 500px) {
    width: 100vw;
    height: 99vh;
  }
`,uu=k.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 92%;
  max-height: 60px;
  padding: 10px;
  .user-block {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    .pic-container {
      width: 40px;
      height: 40px;
    }
    .user-name {
      font-weight: 600;
      line-height: 20px;
      margin: 0 10px;
    }
  }
  .follow {
  }
`,lo=({user:t})=>{const i=L(s=>s.user),n=t.id===i.id,d=W(),o=s=>{d(`/profile/${s}`)};return r(uu,{onClick:s=>{s.stopPropagation(),o(t.nickname)},children:[r("div",{className:"user-block",children:[e("div",{className:"pic-container",children:e(Ce,{src:t.photoUrl,tooltip:!0,user:t})}),e("div",{className:"user-name",children:t.nickname})]}),!n&&e(xt,{userId:t.id,nickName:t.nickname})]})},hu=()=>{const t=L(C=>C.popup),i=t.popupData.data,n=t.popupData.type,d=t.popupData.isFollower;console.log({userId:i,type:n,isFollower:d});const o=K(),[s,u]=a.useState([]),[p,l]=a.useState(0),[c,h]=a.useState(1),[f,g]=a.useState(1),[m]=nl({variables:{uid:i,page:c,limit:10},pause:A()&&!d}),[x]=sl({variables:{uid:i,page:c,limit:10},pause:A()&&d});return a.useEffect(()=>{var P;if(!d)return;const{data:C,fetching:y,error:N}=m;if(console.log(C),N&&console.log(N),!y&&C){const $=(P=C.getFollowers)==null?void 0:P.followers;u(()=>$),h(T=>T+1),g(()=>{var T;return(T=C.getFollowers)==null?void 0:T.lastPage}),l(()=>{var T;return(T=C.getFollowers)==null?void 0:T.count})}},[m.fetching]),a.useEffect(()=>{var P;if(d)return;const{data:C,fetching:y,error:N}=x;if(console.log(C),N&&console.log(N),!y&&C){const $=(P=C.getFollowings)==null?void 0:P.followings;u(()=>$),h(T=>T+1),g(()=>{var T;return(T=C.getFollowings)==null?void 0:T.lastPage}),l(()=>{var T;return(T=C.getFollowings)==null?void 0:T.count})}},[x.fetching]),r(ao,{children:[r("div",{className:"follow-head",children:[r("span",{children:[p," ",n]}),e("div",{className:"close",onClick:C=>{C.stopPropagation(),o(Ds())},children:e(Rt,{size:25})})]}),e("div",{className:"users-container",onScroll:C=>{C.stopPropagation();const y=C.target;y.scrollHeight-y.scrollTop-2<=y.clientHeight&&c!==f&&h(N=>N+1)},children:s&&s.map(C=>e(lo,{user:C}))})]})},mu=()=>{const t=L(y=>y.popup),i=t.popupData.data,n=t.popupData.type,d=t.popupData.isReply,o=K(),[s,u]=a.useState([]),[p,l]=a.useState(1),[c,h]=a.useState(1),[f,g]=a.useState(1),[m,x]=hn({variables:{cid:i,limit:10,page:c},pause:A()&&d}),[v]=Nn({variables:{rid:i,limit:10,page:c},pause:A()&&!d});return a.useEffect(()=>{var $,T;if(d)return;const{data:y,fetching:N,error:P}=m;if(P&&console.log(P),!N&&y){const w=($=y.getCommentLikes)==null?void 0:$.likesCount,M=(T=y.getCommentLikes)==null?void 0:T.likes,S=y.getCommentLikes.lastPage;g(S),u(M),l(w)}},[m.fetching]),a.useEffect(()=>{var $,T;if(!d)return;const{data:y,fetching:N,error:P}=v;if(P&&console.log(P),!N&&y){const w=($=y.getReplyLikes)==null?void 0:$.likesCount,M=(T=y.getReplyLikes)==null?void 0:T.likes,S=y.getReplyLikes.lastPage;g(S),u(M),l(w)}},[v.fetching]),r(ao,{children:[r("div",{className:"follow-head",children:[r("span",{children:[p," ",n]}),e("div",{className:"close",onClick:y=>{y.stopPropagation(),Y.unstable_batchedUpdates(()=>{o(V(!1)),o(Q("")),o(le(null))})},children:e(Rt,{size:25})})]}),e("div",{className:"users-container",onScroll:y=>{y.stopPropagation();const N=y.target;N.scrollHeight-N.scrollTop-2<=N.clientHeight&&c!==f&&h(P=>P+1)},children:s&&s.map(y=>e(lo,{user:y}))})]})},fu=()=>{const t=a.useRef(null),i=L(u=>u.popup.isPopupOpened),n=K(),d=L(u=>u.popup.selectedElement);function o(u){u.target.id==="popup-parent"&&Y.unstable_batchedUpdates(()=>{n(V(!1)),n(Q("")),n(le(null)),n(ct(""))})}document.addEventListener("click",o);const s=a.useCallback(()=>{switch(d){case te.IMAGE_POP_UP:return e(_i,{type:Ke.PFP});case te.EDIT_PROFILE:return e(nu,{});case te.BG_POP_UP:return e(_i,{type:Ke.BG});case te.ADD_COMMENT:return e(Oi,{type:Xe.MOVIE});case te.ADD_REPLY:return e(Oi,{type:Xe.COMMENT});case te.OPEN_FOLLOW:return e(hu,{});case te.OPEN_LIKES:return e(mu,{});case te.DELETE_COMMENT:return e(ji,{type:ze.COMMENT});case te.DELETE_REPLY:return e(ji,{type:ze.REPLY});default:return e("div",{})}},[d]);return e(It,{classNames:"alert",in:i,nodeRef:t,timeout:500,unmountOnExit:!0,children:e(Kp,{id:"popup-parent",ref:t,children:e(Jp,{id:"popup-child",children:e(s,{})})})})},gu="/assets/bmc-4dc157ca.png",xu="/assets/patreon-word-f01b88d4.png",vu=k.div`
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
`,yu=({className:t})=>{Oa();const[n,d]=a.useState(null),[o,s]=a.useState(null),u=W();L(l=>l.user.id),Ue();const[p]=ea({variables:{limit:5}});return a.useEffect(()=>{const{data:l,error:c,fetching:h}=p;if(c&&console.log(c),!h&&l){const f=l.getTrendingTitles;d(()=>f==null?void 0:f.movies),s(()=>f==null?void 0:f.shows)}},[p]),r(vu,{className:t,children:[r("div",{className:"trending titles",children:[r("div",{className:"heading",children:[e(ki,{color:"#fc0404",size:20}),e("div",{className:"sub",children:"Trending Movies"})]}),e("div",{className:"content",children:p.fetching?e(ie,{}):n&&n.map(l=>r("div",{className:"item",onClick:c=>{c.stopPropagation(),u(`/movie/${l.id}`)},children:[e("div",{className:"title",children:l.title}),r("div",{className:"count",children:[et(l.viewsCount)," views"]})]},l.title))})]}),r("div",{className:"trending titles",children:[r("div",{className:"heading",children:[e(ki,{color:"#fc0404",size:20}),e("div",{className:"sub",children:"Trending Shows"})]}),e("div",{className:"content",children:p.fetching?e(ie,{}):o&&o.map(l=>r("div",{className:"item",onClick:c=>{c.stopPropagation(),u(`/show/${l.id}`)},children:[e("div",{className:"title",children:l.title}),r("div",{className:"count",children:[et(l.viewsCount)," views"]})]},l.title))})]}),r("div",{className:"socials",children:[r("div",{className:"socials-block",children:[e("div",{className:"item-heading",children:"Socials"}),r("div",{className:"item-options",children:[e("div",{id:"text-focus",className:"discord social",onClick:l=>{l.stopPropagation(),window.open(Qs,"_blank")},children:e($s,{color:"cornflowerblue",size:25,style:{pointerEvents:"none"}})}),e("div",{className:"twitter social",id:"text-focus",onClick:l=>{l.stopPropagation(),window.open(Ws,"_blank")},children:e(Ms,{color:"deepskyblue",size:25,style:{pointerEvents:"none"}})}),e("div",{className:"tiktok social",id:"text-focus",onClick:l=>{l.stopPropagation(),window.open(Ys,"_blank")},children:e(Ts,{className:"icon",size:25,style:{pointerEvents:"none"}})}),e("div",{className:"instagram social",id:"text-focus",onClick:l=>{l.stopPropagation(),window.open(Vs,"_blank")},children:e(Es,{color:"hotpink",size:25,style:{pointerEvents:"none"}})})]})]}),r("div",{className:"socials-block",children:[e("div",{className:"item-heading",children:"Donate & Support"}),r("div",{className:"item-options",children:[e("div",{className:"patreon",onClick:l=>{l.stopPropagation(),window.open(Xs,"_blank")},children:e("div",{className:"logo",id:"text-focus",children:e("img",{src:xu,alt:"patreon",id:"text-focus"})})}),e("div",{className:"bmc",onClick:l=>{l.stopPropagation(),window.open(Ks,"_blank")},children:e("div",{className:"logo",id:"text-focus",children:e("img",{src:gu,alt:"bmc",id:"text-focus"})})})]})]})]})]})},wu=Ie`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`,bu=k.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: ${wu} 0.5s ease;
  width: 100%;
  min-height: 100dvh;
  font-family: system-ui;
  background-color: white;
  color: black;
  transition: all 0.5s;
  .title {
    .logo {
      padding: 10px 0;
      img {
        height: 100px;
      }
    }
  }
  .moovy-steps-container {
    display: flex;
    width: 99vw;
    color: black;
  }
  .moovy-profile-title {
    display: flex;
    align-items: flex-start;
    -webkit-box-pack: center;
    justify-content: flex-start;
    position: relative;
    gap: 20px;
    .pic-container {
      width: 60px;
      height: 60px;
    }
    .container {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      -webkit-box-pack: center;
      justify-content: space-evenly;
      gap: 5px;
      .title {
        font-weight: 600;
      }
      .description {
      }
    }
  }
`,ku=k.div`
  flex: 1;
  flex-basis: 20%;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  gap: 50px;
  padding: 50px 50px;
  justify-content: center;
  align-items: flex-start;
  .step {
  }
`,Cu=k.div`
  flex: 1 1 80%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  .item {
    display: flex;
    flex-direction: column;
    gap: 30px;
    .step-index {
      padding: 10px;
      font-size: 14px;
      font-weight: 700;
      background-color: blueviolet;
      width: 80px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 20px;
      color: white;
    }
    .next-index {
      background-color: black;
      cursor: pointer;
    }
    .title {
      font-weight: 500;
      font-size: 25px;
      padding: 20px 10px;
    }
  }
`,Wt=k.input`
  padding: 12px;
  border-radius: 14px;
  font-size: 30px;
  border: none;
  border-bottom: 1px solid;
  color: rgb(51, 51, 51);
  background-color: transparent;
  transition: all 0.3s ease 0s;
  width: auto;
  min-width: 50%;

  &:focus {
    outline: none;
    border-color: blueviolet;
  }
`,Nu=k.select`
  width: 50%;
  padding: 14px;
  border-radius: 4px;
  border: none;
  font-size: 16px;
  background-color: #f2f2f2;

  &:focus {
    outline: none;
    border-color: blueviolet;
  }

  & option {
    font-size: 16px;
    color: #333;
    background-color: #f2f2f2;
  }
`,Su=k.textarea`
  padding: 12px;
  border-radius: 14px;
  font-size: 20px;
  border: none;
  font-family: initial;
  border-bottom: 1px solid;
  color: rgb(51, 51, 51);
  background-color: transparent;
  transition: all 0.3s ease 0s;
  width: auto;
  min-width: 50%;

  &:focus {
    outline: none;
    border-color: blueviolet;
  }
`,Pu=k.div`
  display: flex;
  align-items: flex-start;
  -webkit-box-pack: center;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  position: relative;
  font-weight: 600;
  gap: 20px;
  cursor: pointer;
  .index {
    border: 1px solid;
    border-radius: 50%;
    min-width: 25px;
    height: 25px;
    justify-content: center;
    align-items: center;
    display: flex;
    z-index: 2;
    color: white;
    background-color: ${t=>t.isError?"red":t.isSelected?"blueviolet":"#343434"};
  }
  .line {
    position: absolute;
    width: 3px;
    height: 110px;
    left: 12px;
    background-color: black;
    z-index: 0;
  }
  .text {
    .value {
      font-weight: 400;
      font-size: 12px;
      padding: 10px;
      text-align: center;
      max-height: 30px;
      overflow-y: auto;
      overflow-x: hidden;
      width: 100%;
    }
  }
`,Hi=k.p`
  font-size: 14px;
  color: #f00;
  font-weight: 600;
`,Gi=k.p`
  font-size: 14px;
  color: green;
  font-weight: 600;
`,$u="/assets/moovy-text-logo-black-e05c16c3.png",Ve=[{title:"Full Name",description:"Please enter your full name.",mandatory:!0},{title:"Username",description:"Select a username for your account. Your username must be at least 5 characters long and may not contain any offensive or inappropriate language.",mandatory:!0},{title:"Gender",description:"Please select your gender from the options provided. This information is optional and will not impact your ability to use the platform.",mandatory:!1},{title:"Date of Birth",description:"Enter your date of birth using the provided format. This information is required to verify that you meet the minimum age requirements to use the platform.",mandatory:!0},{title:"Profile Description",description:"Please provide a brief description of yourself and your interests. This information will help other users better understand you and connect with you on the platform.",mandatory:!1}],at={fullName:{value:"",error:"",regex:/^[a-zA-Z ]{2,30}$/},userName:{value:"",error:"",regex:/^([a-zA-Z0-9_-]{4,20})$|^.*?([\s+=!@#$%^&*(){}[\]:;"'<>,.?/\\|`~]).*?$/},gender:{value:"",error:"",regex:/^(Male|Female|Other)$/i},dob:{value:"",error:"",regex:/^\d{4}-\d{2}-\d{2}$/},bio:{value:"",error:"",regex:/^.{0,150}$/}},Mu=({profile:t})=>{const i=L(T=>T.user),[n,d]=a.useState(0);W();const[,o]=Ga(),s=K(),[{fetching:u},p]=Mn(),[l,c]=a.useState({fullName:{value:t==null?void 0:t.fullname,error:"",regex:/^[a-zA-Z ]{2,30}$/},userName:{value:i.nickname,error:"",regex:/^([a-zA-Z0-9_-]{4,20})$|^.*?([\s+=!@#$%^&*(){}[\]:;"'<>,.?/\\|`~]).*?$/},gender:{value:t==null?void 0:t.gender,error:"",regex:/^(Male|Female|Other)$/i},dob:{value:t==null?void 0:t.dob,error:"",regex:/^\d{4}-\d{2}-\d{2}$/},bio:{value:t==null?void 0:t.bio,error:"",regex:/^.{0,150}$/}}),[h,f]=a.useState(n),[g,m]=a.useState(!1),[x,v]=a.useState(!1),b=Ft({opacity:n===h?1:0,config:{duration:500}});a.useEffect(()=>{const T=setTimeout(()=>{f(n)},500);return()=>{clearTimeout(T)}},[n]);const C=async(T,w,M)=>{switch(T){case"userName":const S=M.exec(w);if(S===null)return`Invalid ${T}`;if(S[2])return`Invalid ${T}: '${S[2]}' not allowed`;{const H=(await o({text:w})).data;if(H==null?void 0:H.isUserNameExists)return`${w} already exists`}return"";case"fullName":case"gender":case"bio":const I=M.exec(w);return I===null?`Invalid ${T}`:I[2]?`Invalid ${T}: '${I[2]}' not allowed`:"";case"dob":if(!w.match(M))return"Please enter a valid date in the format YYYY-MM-DD";const R=parseInt(w.substring(0,4)),j=parseInt(w.substring(5,7)),G=parseInt(w.substring(8,10)),D=new Date,_=D.getFullYear(),he=D.getMonth()+1,J=D.getDate();let Ne=_-R;return(he<j||he===j&&J<G)&&Ne--,Ne<13?"You must be at least 13 years old to sign up":""}},y=async T=>{const{name:w,value:M}=T.target;let S=at[w].regex,I=await C(w,M,S);c(R=>({...R,[w]:{value:M,error:I,regex:S}}))},N=()=>{const T=l.dob.error,w=l.gender.error,M=l.dob.value,S=l.gender.value,I=l.userName.error,R=l.fullName.error,j=l.userName.value,G=l.fullName.value;j===""&&c(D=>({...D,userName:{value:"",error:"Username Cannot be Empty",regex:at.userName.regex}})),G===""&&c(D=>({...D,fullName:{value:"",error:"Full name Cannot be Empty",regex:at.userName.regex}})),M===""&&c(D=>({...D,dob:{value:"",error:"Field cannot be Empty",regex:at.dob.regex}})),S===""&&c(D=>({...D,gender:{value:"",error:"Field Cannot be Empty",regex:at.gender.regex}})),M!==""&&S!==""&&T===""&&w===""&&j!==""&&G!==""&&I===""&&R===""&&p({options:{uid:i==null?void 0:i.id,nickname:l.userName.value,gender:l.gender.value,fullname:l.fullName.value,dob:l.dob.value,bio:l.bio.value}}).then(D=>{const _=D.error,he=D.data;_&&(m(()=>!1),v(()=>!0));const J=he==null?void 0:he.upsertProfile;J?(m(()=>!0),v(()=>!1),Y.unstable_batchedUpdates(()=>{s(lt(!0)),s(Zt(J)),s(an(l.userName.value))})):(m(()=>!1),v(()=>!0),s(lt(!1)))})},P=T=>{T.stopPropagation(),n<Ve.length-1?d(w=>w+1):n===Ve.length-1&&N()},$=[l.fullName.value,l.userName.value,l.gender.value,l.dob.value,l.bio.value];return r(bu,{children:[r(B,{children:[e("title",{children:"Update Profile"}),e("meta",{name:"description",content:"Update Profile"}),e("link",{rel:"canonical",href:`${q}/update-profile`})]}),e("div",{className:"title",children:e("div",{className:"logo",children:e("img",{src:$u,alt:"logo"})})}),r("div",{className:"moovy-profile-title",children:[e("div",{className:"pic-container",children:e(Ce,{src:i.photoUrl,tooltip:!0})}),r("div",{className:"container",children:[e("div",{className:"title",children:"User Information"}),e("div",{className:"description",children:"You can edit the public information about yourself. The changes will be displayed for other users after the update."})]})]}),r("div",{className:"moovy-steps-container",children:[e(ku,{children:Ve.map((T,w)=>r(Pu,{isSelected:w===n,isError:Object.values(l)[w].error!=="",className:"step",onClick:()=>d(w),children:[e("div",{className:"index",children:w+1}),r("div",{className:"text",children:[e("div",{children:T.title}),e("div",{className:"value",children:$[w]})]}),w!==Ve.length-1&&e("div",{className:"line"})]},w))}),e(Cu,{children:r(Ut.div,{className:"item",style:b,children:[e("div",{className:"step-index",children:`Step ${h+1}`}),e("div",{className:"title",children:Ve[h].description}),e("div",{className:"int-ctr",children:h===0?e(Wt,{type:"text",id:"fullName",name:"fullName",value:l.fullName.value,onChange:y}):h===1?e(Wt,{type:"text",id:"userName",name:"userName",value:l.userName.value,onChange:y}):h===2?r(Nu,{id:"gender",name:"gender",value:l.gender.value,onChange:y,children:[e("option",{value:"",children:"-- Select Gender --"}),e("option",{value:"male",children:"Male"}),e("option",{value:"female",children:"Female"}),e("option",{value:"other",children:"Other"})]}):h===3?e(Wt,{id:"dob",name:"dob",type:"date",value:l.dob.value,onChange:y}):e(Su,{id:"bio",name:"bio",value:l.bio.value,onChange:y})}),e(Hi,{children:Object.values(l)[n].error}),x&&e(Hi,{children:"Please fix the errors"}),u?e(Gi,{children:"Updating profile..."}):g&&e(Gi,{children:"Profile updated successfully"}),e("div",{className:"step-index next-index ",onClick:P,children:h===Ve.length-1?"Finish":"Next"})]})})]})]})},Tu=()=>{const t=W(),i=L(m=>m.settings.theme),n=L(m=>m.popup.isPopupOpened),d=L(m=>m.misc.isNavBarOpen),o=L(m=>m.user),s=K(),[u,p]=a.useState(null),[l,c]=a.useState(!0),h=L(m=>m.misc.isProfileExists),f=m=>{m.key.toLowerCase()==="escape"&&(n?Y.unstable_batchedUpdates(()=>{s(le(null)),s(V(!1)),s(Q(""))}):history.state!==null&&t(-1))},[g]=Rn({variables:{uid:o==null?void 0:o.id},pause:A()});return a.useEffect(()=>{let m=setTimeout(()=>{c(!1)},500);return()=>{clearTimeout(m)}},[]),a.useEffect(()=>{const{data:m,fetching:x}=g;if(!x&&m){const v=m.getUserProfile;p(v),v&&v.userId!==""&&v.fullname!==""&&v.userId!==null&&v.fullname!=null?s(lt(!0)):s(lt(!1))}},[g]),a.useMemo(()=>(document.addEventListener("keydown",f),()=>document.removeEventListener("keydown",f)),[]),g.fetching||l?e(ci,{}):r(Yi,{theme:i===je.DARK?$d:Pd,children:[e(eo,{}),r(B,{children:[e("title",{children:"Moovy"}),e("meta",{name:"description",content:"Home"}),e("link",{rel:"canonical",href:`${q}`})]}),h?r(yp,{children:[e(Wp,{className:"home-header"}),r(wp,{className:"panels",isNavBarOpen:d,children:[e(Xp,{className:"left"}),e(kp,{className:"center",id:"center"}),e(yu,{className:"right"})]}),e(fu,{})]}):e(Mu,{profile:u})]})},Eu=xe(ye)(Tu),Iu=()=>{const[{data:t,fetching:i,error:n}]=Ot(),d=K();a.useMemo(()=>{if(n&&console.log(n),!i&&t){const s=t==null?void 0:t.me;s&&(d(Ee(s)),localStorage.setItem("user",JSON.stringify(s)))}},[i,t,n]);const o=t==null?void 0:t.me;return n?e(zi,{}):i?e(ci,{}):o?e(Eu,{}):e(zi,{})},Uu=()=>r(ft,{children:[r(B,{children:[e("title",{children:"Terms and Conditions"}),e("meta",{name:"description",content:"Terms and Conditions"}),e("link",{rel:"canonical",href:`${q}/terms-and-conditions}`})]}),r(gt,{children:[e("h2",{children:"Terms and Conditions"}),e("p",{children:"Welcome to MoovyChat Ltd.!"}),e("p",{children:"These terms and conditions outline the rules and regulations for the use of MoovyChat Ltd.'s website, located at https://www.moovychat.com."}),e("p",{children:"By accessing this website we assume you accept these terms and conditions. Do not continue to use MoovyChat Ltd. if you do not agree to take all of the terms and conditions stated on this page."}),e("p",{children:`The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and all Agreements: "Client", "You" and "Your" refers to you, the person log on this website and compliant to the Company's terms and conditions. "The Company", "Ourselves", "We", "Our" and "Us", refers to our Company. "Party", "Parties", or "Us", refers to both the Client and ourselves. All terms refer to the offer, acceptance and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner for the express purpose of meeting the Client's needs in respect of provision of the Company's stated services, in accordance with and subject to, prevailing law of Netherlands. Any use of the above terminology or other words in the singular, plural, capitalization and/or he/she or they, are taken as interchangeable and therefore as referring to same.`}),e("h3",{children:"Cookies"}),e("p",{children:"We employ the use of cookies. By accessing MoovyChat Ltd., you agreed to use cookies in agreement with the MoovyChat Ltd.'s Privacy Policy."}),e("h3",{children:"Refunds and Cancellations"}),e("p",{children:"MoovyChat does not offer refunds for any reason. Once you purchase a subscription or make a payment for the Service, the transaction is final and no refund will be issued."}),e("h3",{children:"License"}),e("p",{children:"Unless otherwise stated, MoovyChat Ltd. and/or its licensors own the intellectual property rights in the website and material on the website. All intellectual property rights are reserved. You may view and/or print pages from https://www.moovychat.com for your own personal use subject to restrictions set in these terms and conditions."}),e("h3",{children:"Hyperlinking to our Content"}),e("p",{children:"The following organizations may link to our Website without prior written approval:"}),r("ul",{children:[e("li",{children:"Government agencies;"}),e("li",{children:"Search engines;"}),e("li",{children:"News organizations;"}),e("li",{children:"Online directory distributors may link to our Website in the same manner as they hyperlink to the Websites of other listed businesses; and"}),e("li",{children:"System wide Accredited Businesses except soliciting non-profit organizations, charity shopping malls, and charity fundraising groups which may not hyperlink to our Web site."})]}),e("p",{children:"These organizations may link to our home page, to publications or to other Website information so long as the link: (a) is not in any way misleading; (b) does not falsely imply sponsorship, endorsement or approval of the linking party and its products or services; and (c) fits within the context of the linking party's site."}),e("p",{children:"We may consider and approve other link requests from the following types of organizations:"}),r("ul",{children:[e("li",{children:"commonly-known consumer and/or business information sources;"}),e("li",{children:"dot.com community sites;"}),e("li",{children:"associations or other groups representing charities;"}),e("li",{children:"online directory distributors;"}),e("li",{children:"internet portals;"}),e("li",{children:"accounting, law and consulting firms; and"}),e("li",{children:"educational institutions and trade associations."})]}),e("p",{children:"We will approve link requests from these organizations if we decide that: (a) the link would not make us look unfavorably to ourselves or to our accredited businesses; (b) the organization does not have any negative records with us; (c) the benefit to us from the visibility of the hyperlink compensates the absence of MoovyChat Ltd.; and (d) the link is in the context of general resource information."}),e("p",{children:"These organizations may link to our home page so long as the link: (a) is not in any way misleading; (b) does not falsely imply sponsorship, endorsement or approval of the linking party and its products or services; and (c) fits within the context of the linking party's site."}),e("h3",{children:"Content Liability"}),e("p",{children:"We shall have no responsibility or liability for any content appearing on your Website. You agree to indemnify and defend us against all claims arising out of or based upon your Website. No link(s) may appear on any page on your Website or within any context containing content or materials that may be interpreted as libelous, obscene or criminal, or which infringes, otherwise violates, or advocates the infringement or other violation of, any third party rights."}),e("h3",{children:"Your Privacy"}),e("p",{children:"Please read our Privacy Policy."}),e("h3",{children:"Reservation of Rights"}),e("p",{children:"We reserve the right at any time and in its sole discretion to request that you remove all links or any particular link to our Website. You agree to immediately remove all links to our Website upon such request. We also reserve the right to amend these terms and conditions and its linking policy at any time. By continuing to link to our Website, you agree to be bound to and abide by these linking terms and conditions."}),e("h3",{children:"Removal of links from our website"}),e("p",{children:"If you find any link on our Website that is offensive for any reason, you are free to contact and inform us any moment. We will consider requests to remove links but we are not obligated to or so or to respond to you directly."}),e("h3",{children:"Disclaimer"}),e("p",{children:"To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website and the use of this website. Nothing in this disclaimer will:"}),r("ul",{children:[e("li",{children:"limit or exclude our or your liability for death or personal injury;"}),e("li",{children:"limit or exclude our or your liability for fraud or fraudulent misrepresentation;"}),e("li",{children:"limit any of our or your liabilities in any way that is not permitted under applicable law; or"}),e("li",{children:"exclude any of our or your liabilities that may not be excluded under applicable law."})]}),e("p",{children:"The limitations and prohibitions of liability set in this Section and elsewhere in this disclaimer: (a) are subject to the preceding paragraph; and (b) govern all liabilities arising under the disclaimer, including liabilities arising in contract, in tort and for breach of statutory duty, except to the extent expressly provided in this disclaimer."}),e("p",{children:"To the extent that the website and the information and services on the website are provided free-of-charge, we will not be liable for any loss or damage of any nature."}),e("h3",{children:"Governing Law"}),e("p",{children:"These terms and conditions are governed by and construed in accordance with the laws of the United States and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location."}),e("h3",{children:"Contact Information"}),r("p",{children:["If you have any questions about these Terms and Conditions, please contact us at"," ",e("a",{href:"mailto:support@moovychat.com",children:"support@moovychat.com"})," or"," ",e("a",{href:"mailto:chatmoovy@gmail.com",children:"chatmoovy@gmail.com"}),"."]})]})]}),Fu=()=>{const{id:t}=ue();Ue();const[i,n]=a.useState(1),[d,o]=a.useState([]),[s,u]=a.useState(1),[p]=da({variables:{page:i,uid:t,limit:6},pause:A()});return a.useEffect(()=>{const{data:l,error:c,fetching:h}=p;if(c&&console.log(c),!h&&l){const f=l.getUserViewHistory;if(f){const g=f.visited;o(()=>g);const m=f.lastPage;u(()=>m)}}},[p]),p.error?e(ee,{}):r(de,{children:[r(B,{children:[e("title",{children:`${t}: History`}),e("meta",{name:"description",content:`${t}: History`}),e("link",{rel:"canonical",href:`${q}/activity/${t}/history`})]}),e(hi,{page:i,setPage:n,fetching:p.fetching,lastPage:s,movieStatsData:d})]})},Ru=()=>e(Is,{children:r(Us,{children:[r(F,{path:"/",element:e(Iu,{}),children:[e(F,{index:!0,element:e(jc,{})}),r(F,{path:"comments",element:e(Ri,{type:"Comments"}),children:[e(F,{path:":id",element:e(Fi,{})}),e(F,{path:"*",element:e(ee,{})})]}),r(F,{path:"comment",element:e(We,{}),children:[e(F,{path:":id",element:e(yc,{})}),e(F,{path:"*",element:e(ee,{})})]}),r(F,{path:"reply",element:e(We,{}),children:[e(F,{path:":id",element:e(cd,{})}),e(F,{path:"*",element:e(ee,{})})]}),r(F,{path:"replies",element:e(Ri,{type:"Replies"}),children:[e(F,{path:":id",element:e(Ai,{})}),e(F,{path:"*",element:e(ee,{})})]}),r(F,{path:"search",element:e(We,{}),children:[r(F,{path:":search",element:e(xd,{}),children:[e(F,{path:"",element:e(ve,{msg:"Choose any of the above options"})}),e(F,{index:!0,path:"episodes",element:e(ud,{})}),e(F,{path:"shows",element:e(vd,{})}),e(F,{path:"movies",element:e(hd,{})}),e(F,{path:"people",element:e(gd,{})})]}),e(F,{path:"*",element:e(ee,{})})]}),e(F,{path:"notifications",element:e(id,{})}),r(F,{path:"activity",element:e(Rc,{}),children:[e(F,{index:!0,path:":id/favorites",element:e(Fc,{})}),e(F,{path:":id/liked",element:e(qc,{})}),e(F,{path:":id/history",element:e(Fu,{})}),e(F,{path:"*",element:e(ee,{})})]}),r(F,{path:"catalog",element:e(zl,{}),children:[e(F,{path:"",index:!0,element:e(Kc,{})}),e(F,{path:"shows",element:e(yd,{})}),e(F,{path:"*",element:e(ee,{})})]}),r(F,{path:"profile",element:e(We,{}),children:[r(F,{path:":id",element:e(Mc,{}),children:[e(F,{path:"",index:!0,element:e(El,{})}),e(F,{path:"comments",element:e(Fi,{})}),e(F,{path:"replies",element:e(Ai,{})}),e(F,{path:"*",element:e(ee,{})})]}),e(F,{path:"*",element:e(ee,{})})]}),r(F,{path:"show",element:e(We,{}),children:[e(F,{path:":id",index:!0,element:e(Cd,{})}),e(F,{path:"*",element:e(ee,{})})]}),r(F,{path:"movie",element:e(We,{}),children:[e(F,{path:":id",element:e(Xc,{})}),e(F,{path:"*",element:e(ee,{})})]}),e(F,{path:"*",element:e(ee,{})})]}),e(F,{path:"/privacy",element:e(od,{})}),e(F,{path:"/about-us",element:e(mr,{})}),e(F,{path:"/contact",element:e(Sc,{})}),e(F,{path:"/terms-and-conditions",element:e(Uu,{})}),e(F,{path:"/cookie-policy",element:e(Pc,{})}),e(F,{path:"/premium",element:e(nd,{})}),e(F,{path:"/embedded-content",element:e(Ec,{})}),e(F,{path:"/google-login",element:e(Bc,{})}),e(F,{path:"/admin",element:e(gl,{})})]})}),Au=xe(ye,{ssr:!0})(Ru),Lu="modulepreload",zu=function(t){return"/"+t},Bi={},Ou=function(i,n,d){if(!n||n.length===0)return i();const o=document.getElementsByTagName("link");return Promise.all(n.map(s=>{if(s=zu(s),s in Bi)return;Bi[s]=!0;const u=s.endsWith(".css"),p=u?'[rel="stylesheet"]':"";if(!!d)for(let h=o.length-1;h>=0;h--){const f=o[h];if(f.href===s&&(!u||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${p}`))return;const c=document.createElement("link");if(c.rel=u?"stylesheet":Lu,u||(c.as="script",c.crossOrigin=""),c.href=s,document.head.appendChild(c),u)return new Promise((h,f)=>{c.addEventListener("load",h),c.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>i())},ju=t=>{t&&t instanceof Function&&Ou(()=>import("./web-vitals-60d3425a.js"),[]).then(({getCLS:i,getFID:n,getFCP:d,getLCP:o,getTTFB:s})=>{i(t),n(t),d(t),o(t),s(t)})},Du=document.getElementById("root");Fs.render(e(re.StrictMode,{children:e(Rs,{store:ln,children:e(As,{loading:null,persistor:dr,children:r(de,{children:[e(pr,{}),e(Au,{})]})})})}),Du);ju();
