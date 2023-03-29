import{w as y,r as o,z as v,j as a,a as e,C,t as w}from"./index.js";import{P as j,a as M}from"./privacyPolicy.styles.ts";import{s as S}from"./styled-components.browser.esm.ts";import{H as q}from"./Helmet.ts";const F=S.form`
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
`,E=()=>{const[r,n]=o.useState(""),[s,i]=o.useState(""),[l,c]=o.useState(""),[m,d]=o.useState(""),[{fetching:u,error:h},p]=v(),g=t=>{t.preventDefault(),p({name:r,email:s,subject:m,message:l}).then(b=>{const{error:x,data:f}=b;x&&alert("Failed to send message"),f&&(alert("Message sent successfully!"),n(""),i(""),c(""),d(""))}).catch(()=>{alert("Failed to send message")})};return a(j,{children:[a(q,{children:[e("title",{children:"Contact Us"}),e("meta",{name:"description",content:"Contact us"}),e("link",{rel:"canonical",href:`${C}/contact`})]}),a(M,{children:[e("h1",{children:"Contact Us"}),e("p",{children:"Thank you for using MoovyChat. If you have any questions, comments, or concerns, please do not hesitate to contact us."}),a("p",{children:["You can reach us by email at"," ",e("a",{href:"mailto:support@moovychat.com",children:"support@moovychat.com"})," or"," ",e("a",{href:"mailto:chatmoovy@gmail.com",children:"chatmoovy@gmail.com"})," or by filling out the contact form below:"]}),a(F,{onSubmit:g,children:[e("label",{htmlFor:"name",children:"Name:"}),e("input",{type:"text",id:"name",name:"name",value:r,required:!0,onChange:t=>n(t.target.value)}),e("label",{htmlFor:"email",children:"Email:"}),e("input",{type:"email",id:"email",name:"email",value:s,required:!0,onChange:t=>i(t.target.value)}),e("label",{htmlFor:"subject",children:"Subject:"}),e("input",{type:"text",id:"subject",name:"subject",value:m,required:!0,onChange:t=>d(t.target.value)}),e("label",{htmlFor:"message",children:"Message:"}),e("textarea",{id:"message",name:"message",value:l,required:!0,onChange:t=>c(t.target.value)}),e("button",{type:"submit",disabled:u,children:u?"Sending message...":"Send"}),h&&e("p",{children:"Error sending message"})]})]})]})},z=y(w)(E);export{z as default};
