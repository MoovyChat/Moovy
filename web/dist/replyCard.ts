import{w as R,u as v,r as d,a0 as S,av as I,i as U,a as y,F as T,t as h}from"./index.js";import{C as w}from"./cardTemplate.ts";import{a as x}from"./hooks.ts";const _=({comment:e,isMain:g})=>{const L=e&&e.movieId,f=v(),[o,n]=d.useState(e?e.likesCount:0),u=x(s=>s.user),[i,r]=d.useState(!1),[,C]=S(),[k]=I({variables:{uid:u.id,rid:e&&e.id},pause:U()});return d.useEffect(()=>{const{error:s,data:a,fetching:t}=k;if(s&&console.log(s),!t&&a){const p=a.getIsUserLikedReply.isLiked;r(p)}},[k]),y(T,{children:e&&y(w,{type:"reply",isMain:g,updateLike:async s=>{var c;s.stopPropagation(),r(!i),n(i?o-1:o+1);const a=await C({uid:u.id,rid:e.id,like:!i,mid:L}),{data:t,error:l}=a;l&&console.log(l);const p=(c=t==null?void 0:t.setReplyLike)==null?void 0:c.likeStatus.like;r(p)},likeCount:o,like:i,goToComment:s=>{s.stopPropagation(),f(`/reply/${e.id}`)},comment:e})})},$=R(h)(_);export{$ as R};
