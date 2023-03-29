import{r as f,u as _,be as B,a$ as J,j as l,a as e,C as L,b as K,aL as D,h as Q,b0 as W}from"./index.js";import{U as X,s as d}from"./styled-components.browser.esm.ts";import{J as ee,i as te}from"./splashScreen.ts";import{a as re,u as oe}from"./hooks.ts";import{H as ae}from"./Helmet.ts";import{P as ne}from"./tooltip.ts";import"./moovy-white.ts";import"./login.ts";import"./iconBase.ts";import"./image.ts";import"./loadable.esm.ts";import"./inheritsLoose.ts";import"./logoLoading.ts";import"./loading.ts";import"./loading.styles.ts";import"./moovy-text-logo-white.ts";import"./splashScreen.styles.ts";import"./helpers.ts";const ie=X`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`,se=d.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: ${ie} 0.5s ease;
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
`,le=d.div`
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
`,de=d.div`
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
`,U=d.input`
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
`,ce=d.select`
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
`,ue=d.textarea`
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
`,me=d.div`
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
    background-color: ${a=>a.isError?"red":a.isSelected?"blueviolet":"#343434"};
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
`,j=d.p`
  font-size: 14px;
  color: #f00;
  font-weight: 600;
`,F=d.p`
  font-size: 14px;
  color: green;
  font-weight: 600;
`,pe="/moovy-text-logo-black.png",x=[{title:"Full Name",description:"Please enter your full name.",mandatory:!0},{title:"Username",description:"Select a username for your account. Your username must be at least 5 characters long and may not contain any offensive or inappropriate language.",mandatory:!0},{title:"Gender",description:"Please select your gender from the options provided. This information is optional and will not impact your ability to use the platform.",mandatory:!1},{title:"Date of Birth",description:"Enter your date of birth using the provided format. This information is required to verify that you meet the minimum age requirements to use the platform.",mandatory:!0},{title:"Profile Description",description:"Please provide a brief description of yourself and your interests. This information will help other users better understand you and connect with you on the platform.",mandatory:!1}],N={fullName:{value:"",error:"",regex:/^[a-zA-Z ]{2,30}$/},userName:{value:"",error:"",regex:/^([a-zA-Z0-9_-]{4,20})$|^.*?([\s+=!@#$%^&*(){}[\]:;"'<>,.?/\\|`~]).*?$/},gender:{value:"",error:"",regex:/^(Male|Female|Other)$/i},dob:{value:"",error:"",regex:/^\d{4}-\d{2}-\d{2}$/},bio:{value:"",error:"",regex:/^.{0,150}$/}},Fe=({profile:a})=>{const h=re(o=>o.user),[c,z]=f.useState(0);_();const[,M]=B(),w=oe(),[{fetching:Y},A]=J(),[t,g]=f.useState({fullName:{value:a==null?void 0:a.fullname,error:"",regex:/^[a-zA-Z ]{2,30}$/},userName:{value:h.nickname,error:"",regex:/^([a-zA-Z0-9_-]{4,20})$|^.*?([\s+=!@#$%^&*(){}[\]:;"'<>,.?/\\|`~]).*?$/},gender:{value:a==null?void 0:a.gender,error:"",regex:/^(Male|Female|Other)$/i},dob:{value:a==null?void 0:a.dob,error:"",regex:/^\d{4}-\d{2}-\d{2}$/},bio:{value:a==null?void 0:a.bio,error:"",regex:/^.{0,150}$/}}),[u,T]=f.useState(c),[O,$]=f.useState(!1),[R,E]=f.useState(!1),Z=ee({opacity:c===u?1:0,config:{duration:500}});f.useEffect(()=>{const o=setTimeout(()=>{T(c)},500);return()=>{clearTimeout(o)}},[c]);const H=async(o,r,i)=>{switch(o){case"userName":const s=i.exec(r);if(s===null)return`Invalid ${o}`;if(s[2])return`Invalid ${o}: '${s[2]}' not allowed`;{const I=(await M({text:r})).data;if(I==null?void 0:I.isUserNameExists)return`${r} already exists`}return"";case"fullName":case"gender":case"bio":const m=i.exec(r);return m===null?`Invalid ${o}`:m[2]?`Invalid ${o}: '${m[2]}' not allowed`:"";case"dob":if(!r.match(i))return"Please enter a valid date in the format YYYY-MM-DD";const v=parseInt(r.substring(0,4)),y=parseInt(r.substring(5,7)),S=parseInt(r.substring(8,10)),n=new Date,P=n.getFullYear(),p=n.getMonth()+1,k=n.getDate();let C=P-v;return(p<y||p===y&&k<S)&&C--,C<13?"You must be at least 13 years old to sign up":""}},b=async o=>{const{name:r,value:i}=o.target;let s=N[r].regex,m=await H(r,i,s);g(v=>({...v,[r]:{value:i,error:m,regex:s}}))},q=()=>{const o=t.dob.error,r=t.gender.error,i=t.dob.value,s=t.gender.value,m=t.userName.error,v=t.fullName.error,y=t.userName.value,S=t.fullName.value;y===""&&g(n=>({...n,userName:{value:"",error:"Username Cannot be Empty",regex:N.userName.regex}})),S===""&&g(n=>({...n,fullName:{value:"",error:"Full name Cannot be Empty",regex:N.userName.regex}})),i===""&&g(n=>({...n,dob:{value:"",error:"Field cannot be Empty",regex:N.dob.regex}})),s===""&&g(n=>({...n,gender:{value:"",error:"Field Cannot be Empty",regex:N.gender.regex}})),i!==""&&s!==""&&o===""&&r===""&&y!==""&&S!==""&&m===""&&v===""&&A({options:{uid:h==null?void 0:h.id,nickname:t.userName.value,gender:t.gender.value,fullname:t.fullName.value,dob:t.dob.value,bio:t.bio.value}}).then(n=>{const P=n.error,p=n.data;P&&($(()=>!1),E(()=>!0));const k=p==null?void 0:p.upsertProfile;k?($(()=>!0),E(()=>!1),K.unstable_batchedUpdates(()=>{w(D(!0)),w(Q(k)),w(W(t.userName.value))})):($(()=>!1),E(()=>!0),w(D(!1)))})},G=o=>{o.stopPropagation(),c<x.length-1?z(r=>r+1):c===x.length-1&&q()},V=[t.fullName.value,t.userName.value,t.gender.value,t.dob.value,t.bio.value];return l(se,{children:[l(ae,{children:[e("title",{children:"Update Profile"}),e("meta",{name:"description",content:"Update Profile"}),e("link",{rel:"canonical",href:`${L}/update-profile`})]}),e("div",{className:"title",children:e("div",{className:"logo",children:e("img",{src:pe,alt:"logo"})})}),l("div",{className:"moovy-profile-title",children:[e("div",{className:"pic-container",children:e(ne,{src:h.photoUrl,tooltip:!0})}),l("div",{className:"container",children:[e("div",{className:"title",children:"User Information"}),e("div",{className:"description",children:"You can edit the public information about yourself. The changes will be displayed for other users after the update."})]})]}),l("div",{className:"moovy-steps-container",children:[e(le,{children:x.map((o,r)=>l(me,{isSelected:r===c,isError:Object.values(t)[r].error!=="",className:"step",onClick:()=>z(r),children:[e("div",{className:"index",children:r+1}),l("div",{className:"text",children:[e("div",{children:o.title}),e("div",{className:"value",children:V[r]})]}),r!==x.length-1&&e("div",{className:"line"})]},r))}),e(de,{children:l(te.div,{className:"item",style:Z,children:[e("div",{className:"step-index",children:`Step ${u+1}`}),e("div",{className:"title",children:x[u].description}),e("div",{className:"int-ctr",children:u===0?e(U,{type:"text",id:"fullName",name:"fullName",value:t.fullName.value,onChange:b}):u===1?e(U,{type:"text",id:"userName",name:"userName",value:t.userName.value,onChange:b}):u===2?l(ce,{id:"gender",name:"gender",value:t.gender.value,onChange:b,children:[e("option",{value:"",children:"-- Select Gender --"}),e("option",{value:"male",children:"Male"}),e("option",{value:"female",children:"Female"}),e("option",{value:"other",children:"Other"})]}):u===3?e(U,{id:"dob",name:"dob",type:"date",value:t.dob.value,onChange:b}):e(ue,{id:"bio",name:"bio",value:t.bio.value,onChange:b})}),e(j,{children:Object.values(t)[c].error}),R&&e(j,{children:"Please fix the errors"}),Y?e(F,{children:"Updating profile..."}):O&&e(F,{children:"Profile updated successfully"}),e("div",{className:"step-index next-index ",onClick:G,children:u===x.length-1?"Finish":"Next"})]})})]})]})};export{Fe as default};
