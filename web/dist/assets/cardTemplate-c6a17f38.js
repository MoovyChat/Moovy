import{U as he,s as de,C as Re,k as v,j as n,l as be,r as C,m as _e,R as oe,I as ke,i as ce,n as Xe,u as Te,o as qe,a as Me,p as De,q as He,M as Ue,t as Ee,v as Ge,x as Be,y as Ke,_ as Pe,z as Fe,A as Ve,B as Ze,D as Qe,E as We,G as Ye,F as Je,H as et,J as tt,K as ye,N as we,O as pe,P as ue,Q as ve}from"./index-c87fafe8.js";import{g as st,a as Se,b as rt,P as nt,c as Ae}from"./helpers-844ce213.js";import{P as it}from"./profilePic-3b95e47d.js";const Le=he`
    0% {
        transform: scale(0.2);
      }
      40% {
        transform: scale(1.2);
      }
      100% {
        transform: scale(1);
      }
`,at=he`
 to {
    background-position-x: -200%;
  }
`;he`
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
`;he`
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
`;he`
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
`;const ot=()=>Re`
  color: ${e=>e.theme.mention};
`,ct=de.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 99%;
  min-height: 120px;
  justify-content: space-evenly;
  align-items: ${e=>e.isReply?"flex-end":"center"};
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
        color: ${e=>e.theme.mention};
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
            color: ${e=>e.theme.mention};
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
        max-height: ${e=>e.showMore?e.cardHeight:e.isHover?"200px":"100px"};
        transition: max-height 0.5s;
        white-space: pre-line;
        .message-box {
        }
        .time,
        .user {
          ${ot()};
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
          animation: ${Le} 0.3s linear forwards;
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
          background-color: ${e=>e.theme.themeType==="light"?" #c4c4c4":" #343434"};
        }
        :active {
          background-color: ${e=>e.theme.themeType==="light"?" #aeaeae":" #535353"};
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
          background-color: ${e=>e.theme.themeType==="light"?" #c4c4c4":" #343434"};
        }
        :active {
          background-color: ${e=>e.theme.themeType==="light"?" #aeaeae":" #535353"};
        }
      }
    }
  }
`,lt=de.div`
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
      border: 1px solid ${e=>e.theme.border};
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
            animation: ${Le} 0.3s linear forwards;
            :hover {
            }
          }
        }
      }
    }
  }
`,ht=de.span`
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
`,dt=de.div`
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
  box-shadow: inset 0 0 7px 0px ${e=>e.theme.hoverColor};
  background: ${e=>` linear-gradient(110deg, ${e.theme.trendingTiles} 8%, ${e.theme.hoverColor} 18%, ${e.theme.trendingTiles} 33%)`};
  border-radius: 5px;
  background-size: 200% 100%;
  animation: 1s ${at} linear infinite;
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
      background-color: ${({theme:e})=>e.loadingCard};
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
        background-color: ${({theme:e})=>e.loadingCard};
        border-radius: 18px;
      }
      .msg {
        width: 60%;
        height: 10px;
        background-color: ${({theme:e})=>e.loadingCard};
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
      background-color: ${({theme:e})=>e.loadingCard};
      border-radius: 18px;
    }
  }
`,ft=()=>v(dt,{children:[v("div",{className:"content",children:[n("div",{className:"user-pic"}),v("div",{className:"message",children:[n("div",{className:"username"}),n("div",{className:"msg"}),n("div",{className:"msg"})]})]}),v("div",{className:"options",children:[n("div",{className:"c"}),n("div",{className:"c"}),n("div",{className:"c"})]})]}),pt=de.div`
  display: flex;
  width: calc(100% - 75px);
  align-self: end;
  border-radius: 18px;
  overflow: hidden;
  margin: 10px;
  box-shadow: 0 0 4px ${e=>e.theme.themeType==="dark"?"#8b8b8b":""};
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
`;var ne={},me={},ut={get exports(){return me},set exports(e){me=e}};/*! https://mths.be/punycode v1.3.2 by @mathias */(function(e,s){(function(t){var p=s&&!s.nodeType&&s,i=e&&!e.nodeType&&e,f=typeof be=="object"&&be;(f.global===f||f.window===f||f.self===f)&&(t=f);var u,r=2147483647,c=36,g=1,y=26,z=38,N=700,x=72,S=128,F="-",m=/^xn--/,k=/[^\x20-\x7E]/,o=/[\x2E\u3002\uFF0E\uFF61]/g,w={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},A=c-g,h=Math.floor,$=String.fromCharCode,X;function O(a){throw RangeError(w[a])}function L(a,d){for(var b=a.length,I=[];b--;)I[b]=d(a[b]);return I}function D(a,d){var b=a.split("@"),I="";b.length>1&&(I=b[0]+"@",a=b[1]),a=a.replace(o,".");var P=a.split("."),M=L(P,d).join(".");return I+M}function Y(a){for(var d=[],b=0,I=a.length,P,M;b<I;)P=a.charCodeAt(b++),P>=55296&&P<=56319&&b<I?(M=a.charCodeAt(b++),(M&64512)==56320?d.push(((P&1023)<<10)+(M&1023)+65536):(d.push(P),b--)):d.push(P);return d}function Z(a){return L(a,function(d){var b="";return d>65535&&(d-=65536,b+=$(d>>>10&1023|55296),d=56320|d&1023),b+=$(d),b}).join("")}function J(a){return a-48<10?a-22:a-65<26?a-65:a-97<26?a-97:c}function ee(a,d){return a+22+75*(a<26)-((d!=0)<<5)}function Q(a,d,b){var I=0;for(a=b?h(a/N):a>>1,a+=h(a/d);a>A*y>>1;I+=c)a=h(a/A);return h(I+(A+1)*a/(a+z))}function te(a){var d=[],b=a.length,I,P=0,M=S,j=x,_,H,G,K,T,U,q,V,l;for(_=a.lastIndexOf(F),_<0&&(_=0),H=0;H<_;++H)a.charCodeAt(H)>=128&&O("not-basic"),d.push(a.charCodeAt(H));for(G=_>0?_+1:0;G<b;){for(K=P,T=1,U=c;G>=b&&O("invalid-input"),q=J(a.charCodeAt(G++)),(q>=c||q>h((r-P)/T))&&O("overflow"),P+=q*T,V=U<=j?g:U>=j+y?y:U-j,!(q<V);U+=c)l=c-V,T>h(r/l)&&O("overflow"),T*=l;I=d.length+1,j=Q(P-K,I,K==0),h(P/I)>r-M&&O("overflow"),M+=h(P/I),P%=I,d.splice(P++,0,M)}return Z(d)}function R(a){var d,b,I,P,M,j,_,H,G,K,T,U=[],q,V,l,E;for(a=Y(a),q=a.length,d=S,b=0,M=x,j=0;j<q;++j)T=a[j],T<128&&U.push($(T));for(I=P=U.length,P&&U.push(F);I<q;){for(_=r,j=0;j<q;++j)T=a[j],T>=d&&T<_&&(_=T);for(V=I+1,_-d>h((r-b)/V)&&O("overflow"),b+=(_-d)*V,d=_,j=0;j<q;++j)if(T=a[j],T<d&&++b>r&&O("overflow"),T==d){for(H=b,G=c;K=G<=M?g:G>=M+y?y:G-M,!(H<K);G+=c)E=H-K,l=c-K,U.push($(ee(K+E%l,0))),H=h(E/l);U.push($(ee(H,0))),M=Q(b,V,I==P),b=0,++I}++b,++d}return U.join("")}function ge(a){return D(a,function(d){return m.test(d)?te(d.slice(4).toLowerCase()):d})}function xe(a){return D(a,function(d){return k.test(d)?"xn--"+R(d):d})}if(u={version:"1.3.2",ucs2:{decode:Y,encode:Z},decode:te,encode:R,toASCII:xe,toUnicode:ge},p&&i)if(e.exports==p)i.exports=u;else for(X in u)u.hasOwnProperty(X)&&(p[X]=u[X]);else t.punycode=u})(be)})(ut,me);var mt={isString:function(e){return typeof e=="string"},isObject:function(e){return typeof e=="object"&&e!==null},isNull:function(e){return e===null},isNullOrUndefined:function(e){return e==null}},le={};function gt(e,s){return Object.prototype.hasOwnProperty.call(e,s)}var xt=function(e,s,t,p){s=s||"&",t=t||"=";var i={};if(typeof e!="string"||e.length===0)return i;var f=/\+/g;e=e.split(s);var u=1e3;p&&typeof p.maxKeys=="number"&&(u=p.maxKeys);var r=e.length;u>0&&r>u&&(r=u);for(var c=0;c<r;++c){var g=e[c].replace(f,"%20"),y=g.indexOf(t),z,N,x,S;y>=0?(z=g.substr(0,y),N=g.substr(y+1)):(z=g,N=""),x=decodeURIComponent(z),S=decodeURIComponent(N),gt(i,x)?Array.isArray(i[x])?i[x].push(S):i[x]=[i[x],S]:i[x]=S}return i},ae=function(e){switch(typeof e){case"string":return e;case"boolean":return e?"true":"false";case"number":return isFinite(e)?e:"";default:return""}},bt=function(e,s,t,p){return s=s||"&",t=t||"=",e===null&&(e=void 0),typeof e=="object"?Object.keys(e).map(function(i){var f=encodeURIComponent(ae(i))+t;return Array.isArray(e[i])?e[i].map(function(u){return f+encodeURIComponent(ae(u))}).join(s):f+encodeURIComponent(ae(e[i]))}).join(s):p?encodeURIComponent(ae(p))+t+encodeURIComponent(ae(e)):""};le.decode=le.parse=xt;le.encode=le.stringify=bt;var yt=me,W=mt;ne.parse=fe;ne.resolve=Ot;ne.resolveObject=zt;ne.format=At;ne.Url=B;function B(){this.protocol=null,this.slashes=null,this.auth=null,this.host=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.query=null,this.pathname=null,this.path=null,this.href=null}var wt=/^([a-z0-9.+-]+:)/i,vt=/:[0-9]*$/,kt=/^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,Nt=["<",">",'"',"`"," ","\r",`
`,"	"],Ct=["{","}","|","\\","^","`"].concat(Nt),Ne=["'"].concat(Ct),Oe=["%","/","?",";","#"].concat(Ne),ze=["/","?","#"],It=255,$e=/^[+a-z0-9A-Z_-]{0,63}$/,Pt=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,St={javascript:!0,"javascript:":!0},Ce={javascript:!0,"javascript:":!0},re={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0},Ie=le;function fe(e,s,t){if(e&&W.isObject(e)&&e instanceof B)return e;var p=new B;return p.parse(e,s,t),p}B.prototype.parse=function(e,s,t){if(!W.isString(e))throw new TypeError("Parameter 'url' must be a string, not "+typeof e);var p=e.indexOf("?"),i=p!==-1&&p<e.indexOf("#")?"?":"#",f=e.split(i),u=/\\/g;f[0]=f[0].replace(u,"/"),e=f.join(i);var r=e;if(r=r.trim(),!t&&e.split("#").length===1){var c=kt.exec(r);if(c)return this.path=r,this.href=r,this.pathname=c[1],c[2]?(this.search=c[2],s?this.query=Ie.parse(this.search.substr(1)):this.query=this.search.substr(1)):s&&(this.search="",this.query={}),this}var g=wt.exec(r);if(g){g=g[0];var y=g.toLowerCase();this.protocol=y,r=r.substr(g.length)}if(t||g||r.match(/^\/\/[^@\/]+@[^@\/]+/)){var z=r.substr(0,2)==="//";z&&!(g&&Ce[g])&&(r=r.substr(2),this.slashes=!0)}if(!Ce[g]&&(z||g&&!re[g])){for(var N=-1,x=0;x<ze.length;x++){var S=r.indexOf(ze[x]);S!==-1&&(N===-1||S<N)&&(N=S)}var F,m;N===-1?m=r.lastIndexOf("@"):m=r.lastIndexOf("@",N),m!==-1&&(F=r.slice(0,m),r=r.slice(m+1),this.auth=decodeURIComponent(F)),N=-1;for(var x=0;x<Oe.length;x++){var S=r.indexOf(Oe[x]);S!==-1&&(N===-1||S<N)&&(N=S)}N===-1&&(N=r.length),this.host=r.slice(0,N),r=r.slice(N),this.parseHost(),this.hostname=this.hostname||"";var k=this.hostname[0]==="["&&this.hostname[this.hostname.length-1]==="]";if(!k)for(var o=this.hostname.split(/\./),x=0,w=o.length;x<w;x++){var A=o[x];if(A&&!A.match($e)){for(var h="",$=0,X=A.length;$<X;$++)A.charCodeAt($)>127?h+="x":h+=A[$];if(!h.match($e)){var O=o.slice(0,x),L=o.slice(x+1),D=A.match(Pt);D&&(O.push(D[1]),L.unshift(D[2])),L.length&&(r="/"+L.join(".")+r),this.hostname=O.join(".");break}}}this.hostname.length>It?this.hostname="":this.hostname=this.hostname.toLowerCase(),k||(this.hostname=yt.toASCII(this.hostname));var Y=this.port?":"+this.port:"",Z=this.hostname||"";this.host=Z+Y,this.href+=this.host,k&&(this.hostname=this.hostname.substr(1,this.hostname.length-2),r[0]!=="/"&&(r="/"+r))}if(!St[y])for(var x=0,w=Ne.length;x<w;x++){var J=Ne[x];if(r.indexOf(J)!==-1){var ee=encodeURIComponent(J);ee===J&&(ee=escape(J)),r=r.split(J).join(ee)}}var Q=r.indexOf("#");Q!==-1&&(this.hash=r.substr(Q),r=r.slice(0,Q));var te=r.indexOf("?");if(te!==-1?(this.search=r.substr(te),this.query=r.substr(te+1),s&&(this.query=Ie.parse(this.query)),r=r.slice(0,te)):s&&(this.search="",this.query={}),r&&(this.pathname=r),re[y]&&this.hostname&&!this.pathname&&(this.pathname="/"),this.pathname||this.search){var Y=this.pathname||"",R=this.search||"";this.path=Y+R}return this.href=this.format(),this};function At(e){return W.isString(e)&&(e=fe(e)),e instanceof B?e.format():B.prototype.format.call(e)}B.prototype.format=function(){var e=this.auth||"";e&&(e=encodeURIComponent(e),e=e.replace(/%3A/i,":"),e+="@");var s=this.protocol||"",t=this.pathname||"",p=this.hash||"",i=!1,f="";this.host?i=e+this.host:this.hostname&&(i=e+(this.hostname.indexOf(":")===-1?this.hostname:"["+this.hostname+"]"),this.port&&(i+=":"+this.port)),this.query&&W.isObject(this.query)&&Object.keys(this.query).length&&(f=Ie.stringify(this.query));var u=this.search||f&&"?"+f||"";return s&&s.substr(-1)!==":"&&(s+=":"),this.slashes||(!s||re[s])&&i!==!1?(i="//"+(i||""),t&&t.charAt(0)!=="/"&&(t="/"+t)):i||(i=""),p&&p.charAt(0)!=="#"&&(p="#"+p),u&&u.charAt(0)!=="?"&&(u="?"+u),t=t.replace(/[?#]/g,function(r){return encodeURIComponent(r)}),u=u.replace("#","%23"),s+i+t+u+p};function Ot(e,s){return fe(e,!1,!0).resolve(s)}B.prototype.resolve=function(e){return this.resolveObject(fe(e,!1,!0)).format()};function zt(e,s){return e?fe(e,!1,!0).resolveObject(s):s}B.prototype.resolveObject=function(e){if(W.isString(e)){var s=new B;s.parse(e,!1,!0),e=s}for(var t=new B,p=Object.keys(this),i=0;i<p.length;i++){var f=p[i];t[f]=this[f]}if(t.hash=e.hash,e.href==="")return t.href=t.format(),t;if(e.slashes&&!e.protocol){for(var u=Object.keys(e),r=0;r<u.length;r++){var c=u[r];c!=="protocol"&&(t[c]=e[c])}return re[t.protocol]&&t.hostname&&!t.pathname&&(t.path=t.pathname="/"),t.href=t.format(),t}if(e.protocol&&e.protocol!==t.protocol){if(!re[e.protocol]){for(var g=Object.keys(e),y=0;y<g.length;y++){var z=g[y];t[z]=e[z]}return t.href=t.format(),t}if(t.protocol=e.protocol,!e.host&&!Ce[e.protocol]){for(var w=(e.pathname||"").split("/");w.length&&!(e.host=w.shift()););e.host||(e.host=""),e.hostname||(e.hostname=""),w[0]!==""&&w.unshift(""),w.length<2&&w.unshift(""),t.pathname=w.join("/")}else t.pathname=e.pathname;if(t.search=e.search,t.query=e.query,t.host=e.host||"",t.auth=e.auth,t.hostname=e.hostname||e.host,t.port=e.port,t.pathname||t.search){var N=t.pathname||"",x=t.search||"";t.path=N+x}return t.slashes=t.slashes||e.slashes,t.href=t.format(),t}var S=t.pathname&&t.pathname.charAt(0)==="/",F=e.host||e.pathname&&e.pathname.charAt(0)==="/",m=F||S||t.host&&e.pathname,k=m,o=t.pathname&&t.pathname.split("/")||[],w=e.pathname&&e.pathname.split("/")||[],A=t.protocol&&!re[t.protocol];if(A&&(t.hostname="",t.port=null,t.host&&(o[0]===""?o[0]=t.host:o.unshift(t.host)),t.host="",e.protocol&&(e.hostname=null,e.port=null,e.host&&(w[0]===""?w[0]=e.host:w.unshift(e.host)),e.host=null),m=m&&(w[0]===""||o[0]==="")),F)t.host=e.host||e.host===""?e.host:t.host,t.hostname=e.hostname||e.hostname===""?e.hostname:t.hostname,t.search=e.search,t.query=e.query,o=w;else if(w.length)o||(o=[]),o.pop(),o=o.concat(w),t.search=e.search,t.query=e.query;else if(!W.isNullOrUndefined(e.search)){if(A){t.hostname=t.host=o.shift();var h=t.host&&t.host.indexOf("@")>0?t.host.split("@"):!1;h&&(t.auth=h.shift(),t.host=t.hostname=h.shift())}return t.search=e.search,t.query=e.query,(!W.isNull(t.pathname)||!W.isNull(t.search))&&(t.path=(t.pathname?t.pathname:"")+(t.search?t.search:"")),t.href=t.format(),t}if(!o.length)return t.pathname=null,t.search?t.path="/"+t.search:t.path=null,t.href=t.format(),t;for(var $=o.slice(-1)[0],X=(t.host||e.host||o.length>1)&&($==="."||$==="..")||$==="",O=0,L=o.length;L>=0;L--)$=o[L],$==="."?o.splice(L,1):$===".."?(o.splice(L,1),O++):O&&(o.splice(L,1),O--);if(!m&&!k)for(;O--;O)o.unshift("..");m&&o[0]!==""&&(!o[0]||o[0].charAt(0)!=="/")&&o.unshift(""),X&&o.join("/").substr(-1)!=="/"&&o.push("");var D=o[0]===""||o[0]&&o[0].charAt(0)==="/";if(A){t.hostname=t.host=D?"":o.length?o.shift():"";var h=t.host&&t.host.indexOf("@")>0?t.host.split("@"):!1;h&&(t.auth=h.shift(),t.host=t.hostname=h.shift())}return m=m||t.host&&o.length,m&&!D&&o.unshift(""),o.length?t.pathname=o.join("/"):(t.pathname=null,t.path=null),(!W.isNull(t.pathname)||!W.isNull(t.search))&&(t.path=(t.pathname?t.pathname:"")+(t.search?t.search:"")),t.auth=e.auth||t.auth,t.slashes=t.slashes||e.slashes,t.href=t.format(),t};B.prototype.parseHost=function(){var e=this.host,s=vt.exec(e);s&&(s=s[0],s!==":"&&(this.port=s.substr(1)),e=e.substr(0,e.length-s.length)),e&&(this.hostname=e)};const $t=e=>{const[s,t]=C.useState(null),p=/(https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*))/;return C.useMemo(()=>{const i=e.match(p);t(i?()=>i[0]:null)},[e]),s},jt=({text:e})=>{const s=$t(e),[t,p]=C.useState(""),[i,f]=C.useState(null),[u]=_e({variables:{url:s},pause:ce()&&s===null});return C.useEffect(()=>{if(s===null)return;const{error:r,fetching:c,data:g}=u;if(r&&console.log(r),!c&&g){const y=g.getLinkPreview;f(y),console.log({linkData:g})}},[u]),C.useEffect(()=>{var c;if(!s)return;let r=(c=ne.parse(s).hostname)==null?void 0:c.replace("www.","");r&&(r=r.charAt(0).toUpperCase()+r.slice(1),p(r))},[s]),!i||!(i!=null&&i.image)||!s?n(oe.Fragment,{}):v(pt,{onClick:r=>{r.stopPropagation(),s&&window.open(s,"_open")},children:[n("div",{className:"link-image",onClick:r=>{r.stopPropagation(),s&&window.open(s,"_open")},children:n(ke,{src:i.image,alt:"link-image",className:"link-img"})}),v("div",{className:"link-data",onClick:r=>{r.stopPropagation(),s&&window.open(s,"_open")},children:[n("div",{className:"link-title",children:t}),n("div",{className:"link-desc",children:i.title}),n("div",{className:"link-sub",children:i.description})]})]})},je=({movie:e,title:s})=>{var F;const t=Xe(),[p,i]=C.useState(!1),f=Te(),[,u]=qe(),r=Me(m=>m.user),[c,g]=C.useState(null),[y]=De({variables:{uid:r.id,mid:e==null?void 0:e.id},pause:!!(ce()||s)});C.useEffect(()=>{const{data:m,error:k,fetching:o}=y;if(!o&&m){const w=m.getVisited;if(w!==null){const A=w.history,h=JSON.parse(A.slice(-1)[0]);g(()=>h)}}},[y]);const[z]=He({variables:{uid:r.id,mid:e==null?void 0:e.id},pause:ce()}),N=m=>{m.stopPropagation(),e&&t.pathname!==`/show/${e.titleId}`&&f(`/show/${e.titleId}`)},x=m=>{m.stopPropagation(),s?t.pathname!==`/movie/${s.id}`&&f(`/movie/${s.id}`):t.pathname!==`/movie/${e==null?void 0:e.id}`&&f(`/movie/${e==null?void 0:e.id}`)},S=m=>{m.stopPropagation(),i(!p),u({uid:r.id,mid:e==null?void 0:e.id,options:{like:!p}}).then(k=>{const{data:o,error:w}=k;if(w&&console.log(w),o){const h=o.updateUserMovieStats.like;i(h)}})};return C.useEffect(()=>{const{data:m,error:k,fetching:o}=z;if(k&&console.log(k),!o&&m){const w=m==null?void 0:m.getOnlyUserMovieStats,A=w==null?void 0:w.like;A&&i(()=>A)}},[z]),v(lt,{children:[n("div",{className:"title",children:n("span",{onClick:x,children:e?e.name:s==null?void 0:s.title})}),e&&e.parentTitleName&&n("div",{className:"parent",children:n("span",{onClick:N,children:e==null?void 0:e.parentTitleName})}),n("div",{className:"group",children:e?v(oe.Fragment,{children:[e.season&&n("div",{className:"year",children:`${e.season}`}),e.year&&v("div",{className:"year",children:[" Year ",e.year]}),n("div",{className:"year",children:e.runtime&&`${Math.round(e.runtime/60)} min`})]}):v(oe.Fragment,{children:[n("div",{className:"year",children:s&&s.type}),s&&((F=s.advisories)==null?void 0:F.map((m,k)=>n("div",{className:"year",children:m},k))),(s==null?void 0:s.rating)&&n("div",{className:"year",children:s==null?void 0:s.rating})]})}),v("div",{className:"synopsis",children:[n("div",{className:"a",children:"Synopsis"}),n("div",{className:"b",children:e?e.synopsis:s==null?void 0:s.synopsis})]}),e&&v("div",{className:"stats-container",children:[v("div",{className:"stats",children:[v("div",{className:"likes",onClick:S,children:[n("div",{className:"count",children:e==null?void 0:e.likesCount}),n("div",{className:"icon",children:p?n(Ue,{size:20,fill:"#ff005d"}):n(Ee,{size:20})})]}),v("div",{className:"comments",children:[n("div",{className:"count",children:e==null?void 0:e.commentCount}),n("div",{className:"icon",children:n(Ge,{size:20,fill:"violet"})})]}),v("div",{className:"views",children:[n("div",{className:"count",children:e==null?void 0:e.viewsCount}),n("div",{className:"icon",children:n(Be,{size:20,fill:"#00dfff"})})]})]}),c&&(c==null?void 0:c.visitTime)&&n("div",{className:"stats ",children:v("div",{className:"likes history",children:[n("div",{className:"icon",children:n(Ke,{size:20})}),n("div",{className:"count",children:st((c==null?void 0:c.visitTime)+"")})]})})]})]})},Tt=e=>{const[s,t]=C.useState([]);return C.useMemo(()=>{let p=[];if(e){let i=e,f=0,u=0;for(;u<i.length;){let r=i.substring(u,i.length),c=r.indexOf("<s>"),g=r.indexOf("</s>");if(c===-1||g===-1||c>g)break;if(c>0){let y=r.substring(0,c),z=Se(y);p=Pe.concat(p,z)}if(c<g){let y={type:Fe.SPOILER,message:r.substring(c+3,g)};p.push(y)}u+=g+4,u<=i.length&&(f=u)}if(f!==i.length&&f<i.length){let r=i.substring(f,i.length),c=Se(r);p=Pe.concat(p,c)}t(p)}},[e]),s},Ft=({goToComment:e,comment:s,updateLike:t,like:p,likeCount:i,isMain:f,type:u})=>{var q,V;const r=Te(),c=C.useRef(!1),g=s.movieId,[y,z]=C.useState(!1),[N,x]=C.useState(!1),S=s.commentedUserId,F=Me(l=>l.user),m=S===F.id,[k,o]=C.useState(null),[w,A]=C.useState(""),[h,$]=C.useState(null),X=C.useRef(null);let O=C.useRef(!1);const L=C.useRef(null);let D=C.useRef(!1);const Y=!isNaN(parseInt(s.parentCommentId)),Z=C.useRef(null),[J,ee]=C.useState(!1),[Q,te]=C.useState(!1),R=Ve(),[ge,xe]=C.useState("");let a=1e3;const[d]=Ze({variables:{uid:S},pause:m&&ce()}),[b]=Qe({variables:{mid:g},pause:f||ce()}),[I]=We({variables:{getTitleInfoId:w}});C.useEffect(()=>(c.current=!0,()=>{c.current=!1}),[c.current]);const P=l=>{l.stopPropagation(),O.current=!0,setTimeout(()=>{O.current&&z(!0)},a)},M=l=>{l.stopPropagation(),O.current=!1,setTimeout(()=>{z(!1)},a)},j=l=>{l.stopPropagation(),D.current=!0,setTimeout(()=>{D.current&&x(!0)},a)},_=l=>{l.stopPropagation(),D.current=!1,setTimeout(()=>{x(!1)},a)};C.useEffect(()=>{if(f)return;const{data:l,error:E,fetching:ie}=b;if(!ie&&l){const se=l.getMovie;o(()=>se),A(()=>se.titleId)}},[b,f]),C.useEffect(()=>{const{data:l,fetching:E,error:ie}=I;if(!E&&l){const se=l.getTitleInfo;$(()=>se)}},[I]),C.useEffect(()=>{const{data:l,fetching:E,error:ie}=d;if(!E&&l){const se=l.getUser;X.current=se}},[X.current,d]);let H=Tt(s.message);C.useEffect(()=>{if(!Z||!Z.current)return;const{clientHeight:l,scrollHeight:E}=Z.current;xe(()=>`${E}px`),l<E?ee(()=>!0):ee(()=>!1)},[Z.current]);const G=l=>{l.stopPropagation(),ye.unstable_batchedUpdates(()=>{R(we(!0)),R(pe(ue.ADD_REPLY)),R(ve(s))})},K=l=>{l.stopPropagation();const E={data:s.id,type:"Liked",isReply:Y};ye.unstable_batchedUpdates(()=>{R(ve(E)),R(we(!0)),R(pe(ue.OPEN_LIKES))})},T=l=>{l.stopPropagation(),ye.unstable_batchedUpdates(()=>{R(we(!0)),R(ve(s)),u==="comment"?R(pe(ue.DELETE_COMMENT)):u==="reply"&&R(pe(ue.DELETE_REPLY))})},U=document.querySelector("div");return U.setAttribute("tabindex","0"),U.setAttribute("role","button"),U.setAttribute("href","#"),U.addEventListener("click",function(){this.getAttribute("tabindex")==="0"?this.setAttribute("tabindex","-1"):this.setAttribute("tabindex","0")}),b.fetching||I.fetching?n(ft,{}):n(Ye,{in:c.current,classNames:"comment",timeout:300,nodeRef:L,children:v(ct,{tabIndex:0,role:"button",onClick:e,showEpisodeInfo:y,showTitleInfo:N,episodePoster:k==null?void 0:k.stills,titlePoster:h==null?void 0:h.artwork,isHover:y||N,cardHeight:ge,showMore:Q,children:[n("div",{className:"bg",children:!f&&y?n(ke,{src:k==null?void 0:k.stills,alt:"background-image"},"episode"):!f&&N?n(ke,{src:h==null?void 0:h.artwork,alt:"background-image"},"title"):n(Je,{})}),v("div",{className:"content",children:[n("div",{className:"user-pic",children:n("div",{className:"pic-container",children:n(it,{src:m?F.photoUrl:(q=X.current)==null?void 0:q.photoUrl,user:m?F:X.current,tooltip:!0})})}),v("div",{className:"message",onClick:e,children:[v("div",{className:"username",children:[v("div",{className:"container",children:[n("div",{className:"user",children:m?F.nickname:(V=X.current)==null?void 0:V.nickname}),n("div",{className:"time",children:s.createdAt==="Posting..."?"Posting...":rt(s.createdAt)})]}),Y&&v("div",{className:"isReply",children:[n("span",{children:"Replying to"})," ",v("span",{className:"ru",onClick:l=>{l.stopPropagation(),r(`/profile/${s.parentRepliedUser}`)},children:["@",s.parentRepliedUser]})]}),!f&&v("div",{className:"movie",children:[h&&(h==null?void 0:h.type)==="show"&&n(oe.Fragment,{children:v("div",{className:"name title",onMouseEnter:j,onMouseLeave:_,onClick:l=>{l.stopPropagation(),r(`/show/${h==null?void 0:h.id}`)},children:[h==null?void 0:h.title," ",k==null?void 0:k.season]})}),n("div",{className:"name episode",onMouseEnter:P,onMouseLeave:M,onClick:l=>{l.stopPropagation(),r(`/movie/${k==null?void 0:k.id}`)},children:k==null?void 0:k.name})]})]}),n("div",{className:"msg",ref:Z,onClick:e,children:!f&&y?n(je,{movie:k}):!f&&N?n(je,{title:h}):n("div",{className:"message-box",onClick:e,children:H.map((l,E)=>l.type===Fe.SPOILER?n(ht,{children:l.message},E):n(oe.Fragment,{children:v("span",{className:l.type,onClick:ie=>{l.type==="user"&&(ie.stopPropagation(),r(`/profile/${l.message.slice(1)}`))},children:[nt(l.message)," "]},E)},E))})}),J&&!y&&!N&&n("div",{className:"show-more",onClick:l=>{l.stopPropagation(),te(!Q)},children:Q?"Show less":"Show more"})]})]}),!y&&!N&&n(jt,{text:s.message}),!y&&!N&&v("div",{className:"options",children:[v("div",{className:"likes c",children:[n("span",{className:"icon",onClick:t,tabIndex:0,children:p?n(Ue,{size:20,fill:"#ff005d"}):n(Ee,{size:20})}),v("span",{className:"count",onClick:K,tabIndex:0,children:[Ae(i)," Likes"]})]}),v("div",{className:"replies c",children:[n("span",{className:"icon",onClick:G,tabIndex:0,children:n(et,{size:20})}),v("span",{className:"count",children:[Ae(s.repliesCount)," Replies"]})]}),m&&v("div",{className:"delete c",onClick:T,tabIndex:0,children:[n("span",{className:"icon",children:n(tt,{size:20})}),n("span",{className:"count",children:"Delete"})]})]})]})})};export{Ft as C};
