import{u as v,y as d,r as i,Q as f,i as M,a as s,j as g}from"./index.js";import{I as h}from"./image.ts";import{M as x}from"./movieCard.styles.ts";import{M as b}from"./movieInfo.ts";import{a as C}from"./hooks.ts";const P=({movieId:o})=>{const n=v(),c=d();C(e=>e.user);const[a,l]=i.useState(null),[t,N]=f({variables:{mid:o},pause:M()});i.useMemo(()=>{const{data:e,error:r,fetching:u}=t;if(r&&console.log(r),!u&&e){const p=e.getMovie;l(()=>p)}},[t]);const m=e=>{e.stopPropagation(),c.pathname!==`/movie/${o}`&&n(`/movie/${o}`)};return s(x,{bg:a==null?void 0:a.stills,onClick:m,children:g("div",{className:"container",children:[s("div",{className:"thumbs",children:s(h,{src:a==null?void 0:a.thumbs,alt:"movie"})}),s("div",{className:"info",children:s(b,{movie:a})})]})})};export{P as M};
