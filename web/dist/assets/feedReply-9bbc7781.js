import{w as x,u as h,r as n,a as v,f as I,g as S,i as C,j as i,F as k,d as U,s as w,h as F,L as Q,k as T}from"./index-c87fafe8.js";import{M as _}from"./miniCommentCard-077275fc.js";import{C as b}from"./cardTemplate-c6a17f38.js";import"./profilePic-3b95e47d.js";import"./helpers-844ce213.js";const j=({comment:e,isMain:s})=>{const c=e&&e.movieId,a=h(),[p,o]=n.useState(e?e.likesCount:0),d=v(t=>t.user),[r,y]=n.useState(!1),[,m]=I(),[R]=S({variables:{uid:d.id,rid:e&&e.id},pause:C()});return n.useEffect(()=>{const{error:t,data:u,fetching:l}=R;if(t&&console.log(t),!l&&u){const g=u.getIsUserLikedReply.isLiked;y(g)}},[R]),i(k,{children:e&&i(b,{type:"reply",isMain:s,updateLike:async t=>{var L;t.stopPropagation(),y(!r),o(r?p-1:p+1);const u=await m({uid:d.id,rid:e.id,like:!r,mid:c}),{data:l,error:f}=u;f&&console.log(f);const g=(L=l==null?void 0:l.setReplyLike)==null?void 0:L.likeStatus.like;y(g)},likeCount:p,like:r,goToComment:t=>{t.stopPropagation(),a(`/reply/${e.id}`)},comment:e})})},E=x(U)(j),M=w.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  .mini {
    width: 90%;
    margin-right: 10px;
    margin-bottom: 10px;
    align-self: flex-end;
  }
`,B=({id:e})=>{const[s,c]=n.useState(null),[a]=F({variables:{rid:e},pause:C()});return n.useEffect(()=>{const{error:p,data:o,fetching:d}=a;if(!d&&o){const r=o.getReply;c(()=>r)}},[a]),a.data?a.fetching?i(Q,{}):s?T(M,{children:[i(E,{comment:s}),i(_,{className:"mini",type:s.parentCommentId===s.parentReplyId?"comment":"reply",id:s.parentReplyId})]}):i(k,{}):i(k,{})};export{B as default};
