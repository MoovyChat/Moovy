import{j as P,a as l,af as de,r as w,aw as Te,R as be,i as ve,_ as Ne,a5 as Fe,u as je,ao as Ue,Q as Me,a4 as Re,F as $e,b as me,c as ge,d as le,p as ce,s as xe}from"./index.js";import{s as De,C as _e,M as Ie,S as qe}from"./movieInfo.ts";import{k as ze,l as Ge,m as He,g as Ze}from"./index.esm.ts";import{d as Pe,a as Be,P as Ke,c as Ae}from"./helpers.ts";import{a as We,u as Qe}from"./hooks.ts";import{s as Le}from"./styled-components.browser.esm.ts";import{I as ye}from"./image.ts";import{P as Ye}from"./tooltip.ts";import{C as Ve}from"./CSSTransition.ts";const Je=Le.div`
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
  animation: 1s ${De} linear infinite;
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
`,Xe=()=>P(Je,{children:[P("div",{className:"content",children:[l("div",{className:"user-pic"}),P("div",{className:"message",children:[l("div",{className:"username"}),l("div",{className:"msg"}),l("div",{className:"msg"})]})]}),P("div",{className:"options",children:[l("div",{className:"c"}),l("div",{className:"c"}),l("div",{className:"c"})]})]}),et=Le.div`
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
`;var re={},ue={},tt={get exports(){return ue},set exports(e){ue=e}};/*! https://mths.be/punycode v1.3.2 by @mathias */(function(e,n){(function(t){var p=n&&!n.nodeType&&n,i=e&&!e.nodeType&&e,f=typeof de=="object"&&de;(f.global===f||f.window===f||f.self===f)&&(t=f);var d,s=2147483647,c=36,m=1,b=26,U=38,v=700,x=72,A=128,z="-",I=/^xn--/,C=/[^\x20-\x7E]/,o=/[\x2E\u3002\uFF0E\uFF61]/g,k={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},M=c-m,u=Math.floor,S=String.fromCharCode,_;function O(r){throw RangeError(k[r])}function R(r,h){for(var g=r.length,y=[];g--;)y[g]=h(r[g]);return y}function G(r,h){var g=r.split("@"),y="";g.length>1&&(y=g[0]+"@",r=g[1]),r=r.replace(o,".");var N=r.split("."),L=R(N,h).join(".");return y+L}function J(r){for(var h=[],g=0,y=r.length,N,L;g<y;)N=r.charCodeAt(g++),N>=55296&&N<=56319&&g<y?(L=r.charCodeAt(g++),(L&64512)==56320?h.push(((N&1023)<<10)+(L&1023)+65536):(h.push(N),g--)):h.push(N);return h}function Q(r){return R(r,function(h){var g="";return h>65535&&(h-=65536,g+=S(h>>>10&1023|55296),h=56320|h&1023),g+=S(h),g}).join("")}function X(r){return r-48<10?r-22:r-65<26?r-65:r-97<26?r-97:c}function ee(r,h){return r+22+75*(r<26)-((h!=0)<<5)}function Y(r,h,g){var y=0;for(r=g?u(r/v):r>>1,r+=u(r/h);r>M*b>>1;y+=c)r=u(r/M);return u(y+(M+1)*r/(r+U))}function te(r){var h=[],g=r.length,y,N=0,L=A,E=x,D,H,Z,K,F,T,q,W,a;for(D=r.lastIndexOf(z),D<0&&(D=0),H=0;H<D;++H)r.charCodeAt(H)>=128&&O("not-basic"),h.push(r.charCodeAt(H));for(Z=D>0?D+1:0;Z<g;){for(K=N,F=1,T=c;Z>=g&&O("invalid-input"),q=X(r.charCodeAt(Z++)),(q>=c||q>u((s-N)/F))&&O("overflow"),N+=q*F,W=T<=E?m:T>=E+b?b:T-E,!(q<W);T+=c)a=c-W,F>u(s/a)&&O("overflow"),F*=a;y=h.length+1,E=Y(N-K,y,K==0),u(N/y)>s-L&&O("overflow"),L+=u(N/y),N%=y,h.splice(N++,0,L)}return Q(h)}function $(r){var h,g,y,N,L,E,D,H,Z,K,F,T=[],q,W,a,j;for(r=J(r),q=r.length,h=A,g=0,L=x,E=0;E<q;++E)F=r[E],F<128&&T.push(S(F));for(y=N=T.length,N&&T.push(z);y<q;){for(D=s,E=0;E<q;++E)F=r[E],F>=h&&F<D&&(D=F);for(W=y+1,D-h>u((s-g)/W)&&O("overflow"),g+=(D-h)*W,h=D,E=0;E<q;++E)if(F=r[E],F<h&&++g>s&&O("overflow"),F==h){for(H=g,Z=c;K=Z<=L?m:Z>=L+b?b:Z-L,!(H<K);Z+=c)j=H-K,a=c-K,T.push(S(ee(K+j%a,0))),H=u(j/a);T.push(S(ee(H,0))),L=Y(g,W,y==N),g=0,++y}++g,++h}return T.join("")}function fe(r){return G(r,function(h){return I.test(h)?te(h.slice(4).toLowerCase()):h})}function pe(r){return G(r,function(h){return C.test(h)?"xn--"+$(h):h})}if(d={version:"1.3.2",ucs2:{decode:J,encode:Q},decode:te,encode:$,toASCII:pe,toUnicode:fe},p&&i)if(e.exports==p)i.exports=d;else for(_ in d)d.hasOwnProperty(_)&&(p[_]=d[_]);else t.punycode=d})(de)})(tt,ue);var st={isString:function(e){return typeof e=="string"},isObject:function(e){return typeof e=="object"&&e!==null},isNull:function(e){return e===null},isNullOrUndefined:function(e){return e==null}},oe={};function nt(e,n){return Object.prototype.hasOwnProperty.call(e,n)}var rt=function(e,n,t,p){n=n||"&",t=t||"=";var i={};if(typeof e!="string"||e.length===0)return i;var f=/\+/g;e=e.split(n);var d=1e3;p&&typeof p.maxKeys=="number"&&(d=p.maxKeys);var s=e.length;d>0&&s>d&&(s=d);for(var c=0;c<s;++c){var m=e[c].replace(f,"%20"),b=m.indexOf(t),U,v,x,A;b>=0?(U=m.substr(0,b),v=m.substr(b+1)):(U=m,v=""),x=decodeURIComponent(U),A=decodeURIComponent(v),nt(i,x)?Array.isArray(i[x])?i[x].push(A):i[x]=[i[x],A]:i[x]=A}return i},ae=function(e){switch(typeof e){case"string":return e;case"boolean":return e?"true":"false";case"number":return isFinite(e)?e:"";default:return""}},it=function(e,n,t,p){return n=n||"&",t=t||"=",e===null&&(e=void 0),typeof e=="object"?Object.keys(e).map(function(i){var f=encodeURIComponent(ae(i))+t;return Array.isArray(e[i])?e[i].map(function(d){return f+encodeURIComponent(ae(d))}).join(n):f+encodeURIComponent(ae(e[i]))}).join(n):p?encodeURIComponent(ae(p))+t+encodeURIComponent(ae(e)):""};oe.decode=oe.parse=rt;oe.encode=oe.stringify=it;var at=ue,V=st;re.parse=he;re.resolve=gt;re.resolveObject=xt;re.format=mt;re.Url=B;function B(){this.protocol=null,this.slashes=null,this.auth=null,this.host=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.query=null,this.pathname=null,this.path=null,this.href=null}var ot=/^([a-z0-9.+-]+:)/i,ht=/:[0-9]*$/,lt=/^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,ct=["<",">",'"',"`"," ","\r",`
`,"	"],ut=["{","}","|","\\","^","`"].concat(ct),we=["'"].concat(ut),Oe=["%","/","?",";","#"].concat(we),Se=["/","?","#"],ft=255,Ee=/^[+a-z0-9A-Z_-]{0,63}$/,pt=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,dt={javascript:!0,"javascript:":!0},Ce={javascript:!0,"javascript:":!0},ne={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0},ke=oe;function he(e,n,t){if(e&&V.isObject(e)&&e instanceof B)return e;var p=new B;return p.parse(e,n,t),p}B.prototype.parse=function(e,n,t){if(!V.isString(e))throw new TypeError("Parameter 'url' must be a string, not "+typeof e);var p=e.indexOf("?"),i=p!==-1&&p<e.indexOf("#")?"?":"#",f=e.split(i),d=/\\/g;f[0]=f[0].replace(d,"/"),e=f.join(i);var s=e;if(s=s.trim(),!t&&e.split("#").length===1){var c=lt.exec(s);if(c)return this.path=s,this.href=s,this.pathname=c[1],c[2]?(this.search=c[2],n?this.query=ke.parse(this.search.substr(1)):this.query=this.search.substr(1)):n&&(this.search="",this.query={}),this}var m=ot.exec(s);if(m){m=m[0];var b=m.toLowerCase();this.protocol=b,s=s.substr(m.length)}if(t||m||s.match(/^\/\/[^@\/]+@[^@\/]+/)){var U=s.substr(0,2)==="//";U&&!(m&&Ce[m])&&(s=s.substr(2),this.slashes=!0)}if(!Ce[m]&&(U||m&&!ne[m])){for(var v=-1,x=0;x<Se.length;x++){var A=s.indexOf(Se[x]);A!==-1&&(v===-1||A<v)&&(v=A)}var z,I;v===-1?I=s.lastIndexOf("@"):I=s.lastIndexOf("@",v),I!==-1&&(z=s.slice(0,I),s=s.slice(I+1),this.auth=decodeURIComponent(z)),v=-1;for(var x=0;x<Oe.length;x++){var A=s.indexOf(Oe[x]);A!==-1&&(v===-1||A<v)&&(v=A)}v===-1&&(v=s.length),this.host=s.slice(0,v),s=s.slice(v),this.parseHost(),this.hostname=this.hostname||"";var C=this.hostname[0]==="["&&this.hostname[this.hostname.length-1]==="]";if(!C)for(var o=this.hostname.split(/\./),x=0,k=o.length;x<k;x++){var M=o[x];if(M&&!M.match(Ee)){for(var u="",S=0,_=M.length;S<_;S++)M.charCodeAt(S)>127?u+="x":u+=M[S];if(!u.match(Ee)){var O=o.slice(0,x),R=o.slice(x+1),G=M.match(pt);G&&(O.push(G[1]),R.unshift(G[2])),R.length&&(s="/"+R.join(".")+s),this.hostname=O.join(".");break}}}this.hostname.length>ft?this.hostname="":this.hostname=this.hostname.toLowerCase(),C||(this.hostname=at.toASCII(this.hostname));var J=this.port?":"+this.port:"",Q=this.hostname||"";this.host=Q+J,this.href+=this.host,C&&(this.hostname=this.hostname.substr(1,this.hostname.length-2),s[0]!=="/"&&(s="/"+s))}if(!dt[b])for(var x=0,k=we.length;x<k;x++){var X=we[x];if(s.indexOf(X)!==-1){var ee=encodeURIComponent(X);ee===X&&(ee=escape(X)),s=s.split(X).join(ee)}}var Y=s.indexOf("#");Y!==-1&&(this.hash=s.substr(Y),s=s.slice(0,Y));var te=s.indexOf("?");if(te!==-1?(this.search=s.substr(te),this.query=s.substr(te+1),n&&(this.query=ke.parse(this.query)),s=s.slice(0,te)):n&&(this.search="",this.query={}),s&&(this.pathname=s),ne[b]&&this.hostname&&!this.pathname&&(this.pathname="/"),this.pathname||this.search){var J=this.pathname||"",$=this.search||"";this.path=J+$}return this.href=this.format(),this};function mt(e){return V.isString(e)&&(e=he(e)),e instanceof B?e.format():B.prototype.format.call(e)}B.prototype.format=function(){var e=this.auth||"";e&&(e=encodeURIComponent(e),e=e.replace(/%3A/i,":"),e+="@");var n=this.protocol||"",t=this.pathname||"",p=this.hash||"",i=!1,f="";this.host?i=e+this.host:this.hostname&&(i=e+(this.hostname.indexOf(":")===-1?this.hostname:"["+this.hostname+"]"),this.port&&(i+=":"+this.port)),this.query&&V.isObject(this.query)&&Object.keys(this.query).length&&(f=ke.stringify(this.query));var d=this.search||f&&"?"+f||"";return n&&n.substr(-1)!==":"&&(n+=":"),this.slashes||(!n||ne[n])&&i!==!1?(i="//"+(i||""),t&&t.charAt(0)!=="/"&&(t="/"+t)):i||(i=""),p&&p.charAt(0)!=="#"&&(p="#"+p),d&&d.charAt(0)!=="?"&&(d="?"+d),t=t.replace(/[?#]/g,function(s){return encodeURIComponent(s)}),d=d.replace("#","%23"),n+i+t+d+p};function gt(e,n){return he(e,!1,!0).resolve(n)}B.prototype.resolve=function(e){return this.resolveObject(he(e,!1,!0)).format()};function xt(e,n){return e?he(e,!1,!0).resolveObject(n):n}B.prototype.resolveObject=function(e){if(V.isString(e)){var n=new B;n.parse(e,!1,!0),e=n}for(var t=new B,p=Object.keys(this),i=0;i<p.length;i++){var f=p[i];t[f]=this[f]}if(t.hash=e.hash,e.href==="")return t.href=t.format(),t;if(e.slashes&&!e.protocol){for(var d=Object.keys(e),s=0;s<d.length;s++){var c=d[s];c!=="protocol"&&(t[c]=e[c])}return ne[t.protocol]&&t.hostname&&!t.pathname&&(t.path=t.pathname="/"),t.href=t.format(),t}if(e.protocol&&e.protocol!==t.protocol){if(!ne[e.protocol]){for(var m=Object.keys(e),b=0;b<m.length;b++){var U=m[b];t[U]=e[U]}return t.href=t.format(),t}if(t.protocol=e.protocol,!e.host&&!Ce[e.protocol]){for(var k=(e.pathname||"").split("/");k.length&&!(e.host=k.shift()););e.host||(e.host=""),e.hostname||(e.hostname=""),k[0]!==""&&k.unshift(""),k.length<2&&k.unshift(""),t.pathname=k.join("/")}else t.pathname=e.pathname;if(t.search=e.search,t.query=e.query,t.host=e.host||"",t.auth=e.auth,t.hostname=e.hostname||e.host,t.port=e.port,t.pathname||t.search){var v=t.pathname||"",x=t.search||"";t.path=v+x}return t.slashes=t.slashes||e.slashes,t.href=t.format(),t}var A=t.pathname&&t.pathname.charAt(0)==="/",z=e.host||e.pathname&&e.pathname.charAt(0)==="/",I=z||A||t.host&&e.pathname,C=I,o=t.pathname&&t.pathname.split("/")||[],k=e.pathname&&e.pathname.split("/")||[],M=t.protocol&&!ne[t.protocol];if(M&&(t.hostname="",t.port=null,t.host&&(o[0]===""?o[0]=t.host:o.unshift(t.host)),t.host="",e.protocol&&(e.hostname=null,e.port=null,e.host&&(k[0]===""?k[0]=e.host:k.unshift(e.host)),e.host=null),I=I&&(k[0]===""||o[0]==="")),z)t.host=e.host||e.host===""?e.host:t.host,t.hostname=e.hostname||e.hostname===""?e.hostname:t.hostname,t.search=e.search,t.query=e.query,o=k;else if(k.length)o||(o=[]),o.pop(),o=o.concat(k),t.search=e.search,t.query=e.query;else if(!V.isNullOrUndefined(e.search)){if(M){t.hostname=t.host=o.shift();var u=t.host&&t.host.indexOf("@")>0?t.host.split("@"):!1;u&&(t.auth=u.shift(),t.host=t.hostname=u.shift())}return t.search=e.search,t.query=e.query,(!V.isNull(t.pathname)||!V.isNull(t.search))&&(t.path=(t.pathname?t.pathname:"")+(t.search?t.search:"")),t.href=t.format(),t}if(!o.length)return t.pathname=null,t.search?t.path="/"+t.search:t.path=null,t.href=t.format(),t;for(var S=o.slice(-1)[0],_=(t.host||e.host||o.length>1)&&(S==="."||S==="..")||S==="",O=0,R=o.length;R>=0;R--)S=o[R],S==="."?o.splice(R,1):S===".."?(o.splice(R,1),O++):O&&(o.splice(R,1),O--);if(!I&&!C)for(;O--;O)o.unshift("..");I&&o[0]!==""&&(!o[0]||o[0].charAt(0)!=="/")&&o.unshift(""),_&&o.join("/").substr(-1)!=="/"&&o.push("");var G=o[0]===""||o[0]&&o[0].charAt(0)==="/";if(M){t.hostname=t.host=G?"":o.length?o.shift():"";var u=t.host&&t.host.indexOf("@")>0?t.host.split("@"):!1;u&&(t.auth=u.shift(),t.host=t.hostname=u.shift())}return I=I||t.host&&o.length,I&&!G&&o.unshift(""),o.length?t.pathname=o.join("/"):(t.pathname=null,t.path=null),(!V.isNull(t.pathname)||!V.isNull(t.search))&&(t.path=(t.pathname?t.pathname:"")+(t.search?t.search:"")),t.auth=e.auth||t.auth,t.slashes=t.slashes||e.slashes,t.href=t.format(),t};B.prototype.parseHost=function(){var e=this.host,n=ht.exec(e);n&&(n=n[0],n!==":"&&(this.port=n.substr(1)),e=e.substr(0,e.length-n.length)),e&&(this.hostname=e)};const bt=e=>{const[n,t]=w.useState(null),p=/(https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*))/;return w.useMemo(()=>{const i=e.match(p);t(i?()=>i[0]:null)},[e]),n},vt=({text:e})=>{const n=bt(e),[t,p]=w.useState(""),[i,f]=w.useState(null),[d]=Te({variables:{url:n},pause:ve()&&n===null});return w.useEffect(()=>{if(n===null)return;const{error:s,fetching:c,data:m}=d;if(s&&console.log(s),!c&&m){const b=m.getLinkPreview;f(b),console.log({linkData:m})}},[d]),w.useEffect(()=>{var c;if(!n)return;let s=(c=re.parse(n).hostname)==null?void 0:c.replace("www.","");s&&(s=s.charAt(0).toUpperCase()+s.slice(1),p(s))},[n]),!i||!(i!=null&&i.image)||!n?l(be.Fragment,{}):P(et,{onClick:s=>{s.stopPropagation(),n&&window.open(n,"_open")},children:[l("div",{className:"link-image",onClick:s=>{s.stopPropagation(),n&&window.open(n,"_open")},children:l(ye,{src:i.image,alt:"link-image",className:"link-img"})}),P("div",{className:"link-data",onClick:s=>{s.stopPropagation(),n&&window.open(n,"_open")},children:[l("div",{className:"link-title",children:t}),l("div",{className:"link-desc",children:i.title}),l("div",{className:"link-sub",children:i.description})]})]})},yt=e=>{const[n,t]=w.useState([]);return w.useMemo(()=>{let p=[];if(e){let i=e,f=0,d=0;for(;d<i.length;){let s=i.substring(d,i.length),c=s.indexOf("<s>"),m=s.indexOf("</s>");if(c===-1||m===-1||c>m)break;if(c>0){let b=s.substring(0,c),U=Pe(b);p=Ne.concat(p,U)}if(c<m){let b={type:Fe.SPOILER,message:s.substring(c+3,m)};p.push(b)}d+=m+4,d<=i.length&&(f=d)}if(f!==i.length&&f<i.length){let s=i.substring(f,i.length),c=Pe(s);p=Ne.concat(p,c)}t(p)}},[e]),n},Et=({goToComment:e,comment:n,updateLike:t,like:p,likeCount:i,isMain:f,type:d})=>{var q,W;const s=je(),c=w.useRef(!1),m=n.movieId,[b,U]=w.useState(!1),[v,x]=w.useState(!1),A=n.commentedUserId,z=We(a=>a.user),I=A===z.id,[C,o]=w.useState(null),[k,M]=w.useState(""),[u,S]=w.useState(null),_=w.useRef(null);let O=w.useRef(!1);const R=w.useRef(null);let G=w.useRef(!1);const J=!isNaN(parseInt(n.parentCommentId)),Q=w.useRef(null),[X,ee]=w.useState(!1),[Y,te]=w.useState(!1),$=Qe(),[fe,pe]=w.useState("");let r=1e3;const[h]=Ue({variables:{uid:A},pause:I&&ve()}),[g]=Me({variables:{mid:m},pause:f||ve()}),[y]=Re({variables:{getTitleInfoId:k}});w.useEffect(()=>(c.current=!0,()=>{c.current=!1}),[c.current]);const N=a=>{a.stopPropagation(),O.current=!0,setTimeout(()=>{O.current&&U(!0)},r)},L=a=>{a.stopPropagation(),O.current=!1,setTimeout(()=>{U(!1)},r)},E=a=>{a.stopPropagation(),G.current=!0,setTimeout(()=>{G.current&&x(!0)},r)},D=a=>{a.stopPropagation(),G.current=!1,setTimeout(()=>{x(!1)},r)};w.useEffect(()=>{if(f)return;const{data:a,error:j,fetching:ie}=g;if(!ie&&a){const se=a.getMovie;o(()=>se),M(()=>se.titleId)}},[g,f]),w.useEffect(()=>{const{data:a,fetching:j,error:ie}=y;if(!j&&a){const se=a.getTitleInfo;S(()=>se)}},[y]),w.useEffect(()=>{const{data:a,fetching:j,error:ie}=h;if(!j&&a){const se=a.getUser;_.current=se}},[_.current,h]);let H=yt(n.message);w.useEffect(()=>{if(!Q||!Q.current)return;const{clientHeight:a,scrollHeight:j}=Q.current;pe(()=>`${j}px`),a<j?ee(()=>!0):ee(()=>!1)},[Q.current]);const Z=a=>{a.stopPropagation(),me.unstable_batchedUpdates(()=>{$(ge(!0)),$(le(ce.ADD_REPLY)),$(xe(n))})},K=a=>{a.stopPropagation();const j={data:n.id,type:"Liked",isReply:J};me.unstable_batchedUpdates(()=>{$(xe(j)),$(ge(!0)),$(le(ce.OPEN_LIKES))})},F=a=>{a.stopPropagation(),me.unstable_batchedUpdates(()=>{$(ge(!0)),$(xe(n)),d==="comment"?$(le(ce.DELETE_COMMENT)):d==="reply"&&$(le(ce.DELETE_REPLY))})},T=document.querySelector("div");return T.setAttribute("tabindex","0"),T.setAttribute("role","button"),T.setAttribute("href","#"),T.addEventListener("click",function(){this.getAttribute("tabindex")==="0"?this.setAttribute("tabindex","-1"):this.setAttribute("tabindex","0")}),g.fetching||y.fetching?l(Xe,{}):l(Ve,{in:c.current,classNames:"comment",timeout:300,nodeRef:R,children:P(_e,{tabIndex:0,role:"button",onClick:e,showEpisodeInfo:b,showTitleInfo:v,episodePoster:C==null?void 0:C.stills,titlePoster:u==null?void 0:u.artwork,isHover:b||v,cardHeight:fe,showMore:Y,children:[l("div",{className:"bg",children:!f&&b?l(ye,{src:C==null?void 0:C.stills,alt:"background-image"},"episode"):!f&&v?l(ye,{src:u==null?void 0:u.artwork,alt:"background-image"},"title"):l($e,{})}),P("div",{className:"content",children:[l("div",{className:"user-pic",children:l("div",{className:"pic-container",children:l(Ye,{src:I?z.photoUrl:(q=_.current)==null?void 0:q.photoUrl,user:I?z:_.current,tooltip:!0})})}),P("div",{className:"message",onClick:e,children:[P("div",{className:"username",children:[P("div",{className:"container",children:[l("div",{className:"user",children:I?z.nickname:(W=_.current)==null?void 0:W.nickname}),l("div",{className:"time",children:n.createdAt==="Posting..."?"Posting...":Be(n.createdAt)})]}),J&&P("div",{className:"isReply",children:[l("span",{children:"Replying to"})," ",P("span",{className:"ru",onClick:a=>{a.stopPropagation(),s(`/profile/${n.parentRepliedUser}`)},children:["@",n.parentRepliedUser]})]}),!f&&P("div",{className:"movie",children:[u&&(u==null?void 0:u.type)==="show"&&l(be.Fragment,{children:P("div",{className:"name title",onMouseEnter:E,onMouseLeave:D,onClick:a=>{a.stopPropagation(),s(`/show/${u==null?void 0:u.id}`)},children:[u==null?void 0:u.title," ",C==null?void 0:C.season]})}),l("div",{className:"name episode",onMouseEnter:N,onMouseLeave:L,onClick:a=>{a.stopPropagation(),s(`/movie/${C==null?void 0:C.id}`)},children:C==null?void 0:C.name})]})]}),l("div",{className:"msg",ref:Q,onClick:e,children:!f&&b?l(Ie,{movie:C}):!f&&v?l(Ie,{title:u}):l("div",{className:"message-box",onClick:e,children:H.map((a,j)=>a.type===Fe.SPOILER?l(qe,{children:a.message},j):l(be.Fragment,{children:P("span",{className:a.type,onClick:ie=>{a.type==="user"&&(ie.stopPropagation(),s(`/profile/${a.message.slice(1)}`))},children:[Ke(a.message)," "]},j)},j))})}),X&&!b&&!v&&l("div",{className:"show-more",onClick:a=>{a.stopPropagation(),te(!Y)},children:Y?"Show less":"Show more"})]})]}),!b&&!v&&l(vt,{text:n.message}),!b&&!v&&P("div",{className:"options",children:[P("div",{className:"likes c",children:[l("span",{className:"icon",onClick:t,tabIndex:0,children:p?l(ze,{size:20,fill:"#ff005d"}):l(Ge,{size:20})}),P("span",{className:"count",onClick:K,tabIndex:0,children:[Ae(i)," Likes"]})]}),P("div",{className:"replies c",children:[l("span",{className:"icon",onClick:Z,tabIndex:0,children:l(He,{size:20})}),P("span",{className:"count",children:[Ae(n.repliesCount)," Replies"]})]}),I&&P("div",{className:"delete c",onClick:F,tabIndex:0,children:[l("span",{className:"icon",children:l(Ze,{size:20})}),l("span",{className:"count",children:"Delete"})]})]})]})})};export{Et as C,yt as u};
