import{r as l,aN as E,aO as D,aA as O,j as t,a as e,C as W}from"./index.js";import{A as $,a as H}from"./index.esm2.ts";import{s as i}from"./styled-components.browser.esm.ts";import{b as U,g as B}from"./helpers.ts";import{H as Q}from"./Helmet.ts";import _ from"./loading.ts";import{M as w}from"./moovy-text-logo-white.ts";import{S as G}from"./splashScreen.styles.ts";import"./iconBase.ts";import"./loading.styles.ts";const L=i.div`
  display: ${a=>a.contactSelected?"flex":"none"};
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
`,N=i.div`
  display: flex;
  align-items: center;
  padding: 10px;
  cursor: pointer;
  border-bottom: 1px solid #ddd;
  background-color: ${a=>!a.read&&"#051f2a"};
  &:last-child {
    border-bottom: none;
  }
`,A=i.div`
  margin-right: 10px;
`,T=i.div`
  flex: 1;
  margin-right: 10px;
  font-size: 18px;
  font-weight: 500;
  color: #ffffff;
`,Y=i.div`
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
`,v=i.div`
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
`,f=i.div`
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
`,q=i($)`
  color: #28a745;
  margin-right: 5px;
  pointer-events: none;
`,M=i(H)`
  color: #dc3545;
  pointer-events: none;
  transition: all 300ms;
`,J=i.div`
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
`,K=i.div`
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
`,V=i.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`,j=i.button`
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
`,X=i.div`
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
`,de=()=>{const[a,y]=l.useState(1),[o,S]=l.useState(null),[s,g]=l.useState([]),[d,z]=l.useState(null),[m,R]=l.useState(null),[,k]=E(),[{data:u,fetching:P,error:C}]=D({variables:{page:a,limit:10,read:d}}),[x]=O();if(l.useEffect(()=>{const{data:n,fetching:r,error:p}=x;if(p&&console.log(p),n&&!r){const h=n.me;R(()=>h)}},[x]),C)return t("div",{children:["Error: ",C.message]});const F=n=>{n.stopPropagation(),k({markMessageAsReadId:n.target.id})},b=n=>{const r=n.target.value;z(r==="all"?null:r==="read")},c=(u==null?void 0:u.getAllMessages)||[];return P&&x.fetching?t(G,{children:[e("div",{className:"logo",children:e("img",{src:w,alt:"Moovy"})}),e("div",{className:"loading",children:e(_,{})})]}):m!=null&&m.admin?t(J,{contactSelected:o!==null,children:[t(Q,{children:[e("title",{children:"Admin"}),e("meta",{name:"description",content:"Admin"}),e("link",{rel:"canonical",href:`${W}/admin`})]}),e("div",{className:"logo",children:e("img",{src:w,alt:"Moovy"})}),t("div",{className:"parent-container",children:[t("div",{className:"comments-container",children:[t(K,{children:[e(A,{children:e("input",{type:"checkbox",onChange:n=>{n.stopPropagation(),n.target.checked?g(c):g([])}})}),e("div",{className:"title",children:s.length>0?`Selected ${s.length} items`:t(X,{children:[t("div",{className:"multi-box",children:[e("input",{type:"radio",id:"all",name:"all",value:"all",checked:d===null,onChange:b}),e("label",{htmlFor:"all",children:"All"}),e("input",{type:"radio",id:"read",name:"read",value:"read",checked:d===!0,onChange:b}),e("label",{htmlFor:"read",children:"Read"}),e("input",{type:"radio",id:"unread",name:"unread",value:"unread",checked:d===!1,onChange:b}),e("label",{htmlFor:"unread",children:"Unread"})]}),e("p",{children:"Admin Inbox"})]})}),s.length>0&&t(v,{className:"options",children:[e(f,{children:e("div",{className:"dft-btn",children:"Mark as Read"})}),e(f,{children:e(M,{size:20})})]})]}),c.length>0?c.map(n=>t(N,{read:n.read,id:n.id,onClick:r=>{r.stopPropagation(),S(n),k({markMessageAsReadId:n.id})},children:[e(A,{children:e("input",{type:"checkbox",checked:s.some(r=>r.id===n.id),onChange:r=>{r.stopPropagation();const p=r.target.checked;g(h=>p?[...h,n]:h.filter(I=>I.id!==n.id))}})}),e(T,{children:n.name}),e(Y,{children:n.subject}),s.some(r=>r.id===n.id)?t(v,{children:[e(f,{id:n.id,onClick:F,className:"icon-btn",children:e(q,{size:20})}),e(f,{className:"icon-btn",id:n.id,children:e(M,{size:20})})]}):e(v,{children:e("div",{className:"time",children:U(n.createdAt)})})]},n.id)):e(N,{children:e("h3",{children:"Inbox is Empty!!"})}),t(V,{children:[e(j,{disabled:a<=1,onClick:()=>y(n=>n-1),children:"Previous"}),e(j,{disabled:c.length<10,onClick:()=>y(n=>n+1),children:"Next"})]})]}),e(L,{className:"full-message-container",contactSelected:o!==null,children:o&&t("div",{className:"content",children:[e("div",{className:"name",children:o.name}),e("div",{className:"time",children:B(o.createdAt)}),e("div",{className:"subject",children:o.subject}),e("div",{className:"message",children:o.message})]})})]})]}):e("div",{children:"You don't have access to this page."})};export{de as default};
