import{r as o,a1 as l,a as e,F as p,j as d,i as f}from"./index.js";import y from"./loading.ts";import{M as c}from"./miniCommentCard.ts";import{R as u}from"./replyCard.ts";import{s as g}from"./styled-components.browser.esm.ts";import"./Helmet.ts";import"./loading.styles.ts";import"./tooltip.ts";import"./hooks.ts";import"./image.ts";import"./moovy-white.ts";import"./helpers.ts";import"./cardTemplate.ts";import"./movieInfo.ts";import"./index.esm.ts";import"./iconBase.ts";import"./CSSTransition.ts";import"./inheritsLoose.ts";const x=g.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  .mini {
    width: 90%;
    margin-right: 10px;
    margin-bottom: 10px;
    align-self: flex-end;
  }
`,z=({id:m})=>{const[t,a]=o.useState(null),[r]=l({variables:{rid:m},pause:f()});return o.useEffect(()=>{const{error:R,data:i,fetching:s}=r;if(!s&&i){const n=i.getReply;a(()=>n)}},[r]),r.data?r.fetching?e(y,{}):t?d(x,{children:[e(u,{comment:t}),e(c,{className:"mini",type:t.parentCommentId===t.parentReplyId?"comment":"reply",id:t.parentReplyId})]}):e(p,{}):e(p,{})};export{z as default};
