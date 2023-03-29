import{u as h,j as s,a as t,e as g,r as a,a8 as P,C as x}from"./index.js";import y from"./emptyPage.ts";import{H as v}from"./Helmet.ts";import N from"./loading.ts";import{P as k,F as S}from"./tooltip.ts";import{s as $}from"./styled-components.browser.esm.ts";import{a as j}from"./searchResults.styles.ts";import"./CSSTransition.ts";import"./inheritsLoose.ts";import"./loading.styles.ts";import"./hooks.ts";import"./image.ts";import"./moovy-white.ts";import"./helpers.ts";const C=$.div`
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
`,E=({user:e})=>{const r=h();return s(C,{children:[t("div",{className:"usr-sec-1",children:t(k,{user:e,src:e.photoUrl,tooltip:!0})}),s("div",{className:"usr-sec-2",children:[t("div",{className:"name",onClick:p=>{p.stopPropagation(),r(`/profile/${e.nickname}`)},children:e.name}),s("div",{className:"nickname",children:["@",e.nickname]})]}),t("div",{className:"usr-sec-3",children:t(S,{userId:e.id,nickName:e.nickname})})]})},T=()=>{const{search:e}=g(),[r,p]=a.useState(1),[w,m]=a.useState(1),[i,f]=a.useState([]),[{data:n,fetching:c,error:l}]=P({variables:{search:e,page:r,limit:10}});return a.useEffect(()=>{if(l&&console.log(l),n&&!c){const o=n.searchPeople,d=o==null?void 0:o.lastPage;m(()=>d);const u=o==null?void 0:o.people;f(()=>u)}},[n,c,l]),c?t(N,{}):i.length<=0?t(y,{msg:`No users found matching "${e}"`}):s(j,{children:[s(v,{children:[t("title",{children:`${e}: People`}),t("meta",{name:"description",content:`${e}: People`}),t("link",{rel:"canonical",href:`${x}/search/${e}/people}`})]}),i&&i.map(o=>t(E,{user:o}))]})};export{T as default};
