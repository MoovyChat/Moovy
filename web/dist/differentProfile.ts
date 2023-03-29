import{r as n,A as E,j as t,a as e,C as _,N as P,O as x,e as A,f as I,R,i as y,b as g,c as k,d as b,p as S}from"./index.js";import{a as F,u as H}from"./hooks.ts";import{H as M}from"./Helmet.ts";import"./loading.styles.ts";import O from"./notFound.ts";import{d as C,e as $}from"./index.esm.ts";import j from"./childHeader.ts";import{P as B,F as T}from"./tooltip.ts";import{I as G}from"./image.ts";import{N as z}from"./navLinks.ts";import{P as D}from"./profile.styles.ts";import{g as L}from"./helpers.ts";import"./styled-components.browser.esm.ts";import"./moovy-white.ts";import"./iconBase.ts";import"./commentThread.styles.ts";import"./loading.ts";const Q=({user:a,bgChangeHandler:l,profilePicChangeHandler:h,editProfileHandler:d,isDifferentUser:o})=>{const c=n.useRef(null),[r,f]=n.useState(null),[s,u]=n.useState(0),[m]=E({variables:{uid:a.id}});n.useMemo(()=>{const{error:N,data:p}=m;if(N&&console.log(N),p){const U=p.getUserProfile;f(U)}},[m]);const v=N=>{if(c&&c.current){const p=c.current.scrollTop;u(()=>p)}};let i=s>40?`${a==null?void 0:a.nickname}`:"Profile";return t(D,{ref:c,onScroll:v,id:"profile-parent",children:[t(M,{children:[e("title",{children:`${a?a.nickname:"Moovy"}: Profile`}),e("meta",{name:"description",content:`${a?a.nickname:"Moovy"}: Profile`}),e("link",{rel:"canonical",href:`${_}/profile/${a.nickname}}`})]}),e(j,{text:i,className:"comment-header"}),t("div",{className:"top",children:[e("div",{className:"cover-photo",children:e(G,{src:`${a.bg?a.bg:"https://i.pinimg.com/736x/43/f4/1a/43f41accb2871c580fb630e0e8a484e8--cover-picture-cover-pics.jpg"}`,alt:"cover-photo"})}),!o&&t("div",{className:"change-background",onClick:l,children:[e(C,{size:18}),e("div",{className:"add-cover",children:"Add Cover Photo"})]}),t("div",{className:"user-photo",children:[t("div",{className:"user-container",children:[e(B,{src:a.photoUrl,user:a,tooltip:!0}),!o&&e("div",{className:"edit",onClick:h,children:e(C,{size:25})})]}),t("div",{className:"user-info",children:[t("div",{className:"name",children:[e("span",{className:"main",children:r==null?void 0:r.fullname}),t("span",{className:"us",children:["@",a.nickname]}),!o&&e("span",{className:"i",onClick:d,children:e($,{size:18})})]}),t("div",{className:"time",children:["Joined on ",L(a==null?void 0:a.joinedAt)]}),o&&e("div",{className:"follow",children:e(T,{userId:a.id,nickName:a.nickname})})]})]})]}),t("div",{className:"sub-division",children:[o&&t(z,{children:[e(P,{to:"",end:!0,defaultChecked:!0,className:"nav",children:e("div",{children:"Basic"})}),e(P,{to:"comments",className:"nav",children:e("div",{children:"Comments"})}),e(P,{to:"replies",className:"nav",children:e("div",{children:"Replies"})})]}),e(x,{})]})]})},ne=()=>{const{id:a}=A(),[l,h]=n.useState(null),d=F(i=>i.user),o=H(),c=a!==d.nickname,[{error:r,fetching:f,data:s}]=I({variables:{nickname:a},pause:y()}),u=i=>{i.stopPropagation(),g.unstable_batchedUpdates(()=>{o(k(!0)),o(b(S.IMAGE_POP_UP))})},m=i=>{i.stopPropagation(),g.unstable_batchedUpdates(()=>{o(k(!0)),o(b(S.BG_POP_UP))})},v=i=>{i.stopPropagation(),g.unstable_batchedUpdates(()=>{o(k(!0)),o(b(S.EDIT_PROFILE))})};return n.useEffect(()=>{r&&console.log(r),s&&h(()=>s==null?void 0:s.getUserByUserName)},[f,s,r,a]),r?e(O,{}):e(R.Fragment,{children:l&&e(Q,{isDifferentUser:c,user:l,currentUser:d,profilePicChangeHandler:u,bgChangeHandler:m,editProfileHandler:v})})};export{ne as default};
