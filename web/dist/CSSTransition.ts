import{_ as D,a as R,b as $}from"./inheritsLoose.ts";import{R as h,ax as g}from"./index.js";function L(r,l){return r.classList?!!l&&r.classList.contains(l):(" "+(r.className.baseVal||r.className)+" ").indexOf(" "+l+" ")!==-1}function M(r,l){r.classList?r.classList.add(l):L(r,l)||(typeof r.className=="string"?r.className=r.className+" "+l:r.setAttribute("class",(r.className&&r.className.baseVal||"")+" "+l))}function b(r,l){return r.replace(new RegExp("(^|\\s)"+l+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}function I(r,l){r.classList?r.classList.remove(l):typeof r.className=="string"?r.className=b(r.className,l):r.setAttribute("class",b(r.className&&r.className.baseVal||"",l))}const O={disabled:!1},k=h.createContext(null);var A=function(l){return l.scrollTop},C="unmounted",E="exited",v="entering",m="entered",S="exiting",c=function(r){D(l,r);function l(t,s){var e;e=r.call(this,t,s)||this;var a=s,n=a&&!a.isMounting?t.enter:t.appear,i;return e.appearStatus=null,t.in?n?(i=E,e.appearStatus=v):i=m:t.unmountOnExit||t.mountOnEnter?i=C:i=E,e.state={status:i},e.nextCallback=null,e}l.getDerivedStateFromProps=function(s,e){var a=s.in;return a&&e.status===C?{status:E}:null};var p=l.prototype;return p.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},p.componentDidUpdate=function(s){var e=null;if(s!==this.props){var a=this.state.status;this.props.in?a!==v&&a!==m&&(e=v):(a===v||a===m)&&(e=S)}this.updateStatus(!1,e)},p.componentWillUnmount=function(){this.cancelNextCallback()},p.getTimeouts=function(){var s=this.props.timeout,e,a,n;return e=a=n=s,s!=null&&typeof s!="number"&&(e=s.exit,a=s.enter,n=s.appear!==void 0?s.appear:a),{exit:e,enter:a,appear:n}},p.updateStatus=function(s,e){if(s===void 0&&(s=!1),e!==null)if(this.cancelNextCallback(),e===v){if(this.props.unmountOnExit||this.props.mountOnEnter){var a=this.props.nodeRef?this.props.nodeRef.current:g.findDOMNode(this);a&&A(a)}this.performEnter(s)}else this.performExit();else this.props.unmountOnExit&&this.state.status===E&&this.setState({status:C})},p.performEnter=function(s){var e=this,a=this.props.enter,n=this.context?this.context.isMounting:s,i=this.props.nodeRef?[n]:[g.findDOMNode(this),n],o=i[0],u=i[1],f=this.getTimeouts(),d=n?f.appear:f.enter;if(!s&&!a||O.disabled){this.safeSetState({status:m},function(){e.props.onEntered(o)});return}this.props.onEnter(o,u),this.safeSetState({status:v},function(){e.props.onEntering(o,u),e.onTransitionEnd(d,function(){e.safeSetState({status:m},function(){e.props.onEntered(o,u)})})})},p.performExit=function(){var s=this,e=this.props.exit,a=this.getTimeouts(),n=this.props.nodeRef?void 0:g.findDOMNode(this);if(!e||O.disabled){this.safeSetState({status:E},function(){s.props.onExited(n)});return}this.props.onExit(n),this.safeSetState({status:S},function(){s.props.onExiting(n),s.onTransitionEnd(a.exit,function(){s.safeSetState({status:E},function(){s.props.onExited(n)})})})},p.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},p.safeSetState=function(s,e){e=this.setNextCallback(e),this.setState(s,e)},p.setNextCallback=function(s){var e=this,a=!0;return this.nextCallback=function(n){a&&(a=!1,e.nextCallback=null,s(n))},this.nextCallback.cancel=function(){a=!1},this.nextCallback},p.onTransitionEnd=function(s,e){this.setNextCallback(e);var a=this.props.nodeRef?this.props.nodeRef.current:g.findDOMNode(this),n=s==null&&!this.props.addEndListener;if(!a||n){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var i=this.props.nodeRef?[this.nextCallback]:[a,this.nextCallback],o=i[0],u=i[1];this.props.addEndListener(o,u)}s!=null&&setTimeout(this.nextCallback,s)},p.render=function(){var s=this.state.status;if(s===C)return null;var e=this.props,a=e.children;e.in,e.mountOnEnter,e.unmountOnExit,e.appear,e.enter,e.exit,e.timeout,e.addEndListener,e.onEnter,e.onEntering,e.onEntered,e.onExit,e.onExiting,e.onExited,e.nodeRef;var n=R(e,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return h.createElement(k.Provider,{value:null},typeof a=="function"?a(s,n):h.cloneElement(h.Children.only(a),n))},l}(h.Component);c.contextType=k;c.propTypes={};function x(){}c.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:x,onEntering:x,onEntered:x,onExit:x,onExiting:x,onExited:x};c.UNMOUNTED=C;c.EXITED=E;c.ENTERING=v;c.ENTERED=m;c.EXITING=S;const U=c;var P=function(l,p){return l&&p&&p.split(" ").forEach(function(t){return M(l,t)})},N=function(l,p){return l&&p&&p.split(" ").forEach(function(t){return I(l,t)})},T=function(r){D(l,r);function l(){for(var t,s=arguments.length,e=new Array(s),a=0;a<s;a++)e[a]=arguments[a];return t=r.call.apply(r,[this].concat(e))||this,t.appliedClasses={appear:{},enter:{},exit:{}},t.onEnter=function(n,i){var o=t.resolveArguments(n,i),u=o[0],f=o[1];t.removeClasses(u,"exit"),t.addClass(u,f?"appear":"enter","base"),t.props.onEnter&&t.props.onEnter(n,i)},t.onEntering=function(n,i){var o=t.resolveArguments(n,i),u=o[0],f=o[1],d=f?"appear":"enter";t.addClass(u,d,"active"),t.props.onEntering&&t.props.onEntering(n,i)},t.onEntered=function(n,i){var o=t.resolveArguments(n,i),u=o[0],f=o[1],d=f?"appear":"enter";t.removeClasses(u,d),t.addClass(u,d,"done"),t.props.onEntered&&t.props.onEntered(n,i)},t.onExit=function(n){var i=t.resolveArguments(n),o=i[0];t.removeClasses(o,"appear"),t.removeClasses(o,"enter"),t.addClass(o,"exit","base"),t.props.onExit&&t.props.onExit(n)},t.onExiting=function(n){var i=t.resolveArguments(n),o=i[0];t.addClass(o,"exit","active"),t.props.onExiting&&t.props.onExiting(n)},t.onExited=function(n){var i=t.resolveArguments(n),o=i[0];t.removeClasses(o,"exit"),t.addClass(o,"exit","done"),t.props.onExited&&t.props.onExited(n)},t.resolveArguments=function(n,i){return t.props.nodeRef?[t.props.nodeRef.current,n]:[n,i]},t.getClassNames=function(n){var i=t.props.classNames,o=typeof i=="string",u=o&&i?i+"-":"",f=o?""+u+n:i[n],d=o?f+"-active":i[n+"Active"],_=o?f+"-done":i[n+"Done"];return{baseClassName:f,activeClassName:d,doneClassName:_}},t}var p=l.prototype;return p.addClass=function(s,e,a){var n=this.getClassNames(e)[a+"ClassName"],i=this.getClassNames("enter"),o=i.doneClassName;e==="appear"&&a==="done"&&o&&(n+=" "+o),a==="active"&&s&&A(s),n&&(this.appliedClasses[e][a]=n,P(s,n))},p.removeClasses=function(s,e){var a=this.appliedClasses[e],n=a.base,i=a.active,o=a.done;this.appliedClasses[e]={},n&&N(s,n),i&&N(s,i),o&&N(s,o)},p.render=function(){var s=this.props;s.classNames;var e=R(s,["classNames"]);return h.createElement(U,$({},e,{onEnter:this.onEnter,onEntered:this.onEntered,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}))},l}(h.Component);T.defaultProps={classNames:""};T.propTypes={};const X=T;export{X as C};
