"use strict";(self.webpackChunkdeveloper=self.webpackChunkdeveloper||[]).push([[5524],{99278:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(59301);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=l(n),f=i,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||o;return n?r.createElement(m,c(c({ref:t},p),{},{components:n})):r.createElement(m,c({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,c=new Array(o);c[0]=d;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:i,c[1]=a;for(var l=2;l<o;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},50199:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(44117),i=n(59301),o=function(){function e(){this.subscriptions={},window.addEventListener("message",this.handleMsg.bind(this),!1)}var t=e.prototype;return t.on=function(e,t){this.subscriptions[e]=this.subscriptions[e]||[],this.subscriptions[e].push(t)},t.off=function(e,t){if(this.subscriptions[e]){var n=this.subscriptions[e].findIndex((function(e){return e===t}));this.subscriptions[e].splice(n,1)}},t.handleMsg=function(e){e.data&&e.data.type&&(this.subscriptions[e.data.type]||[]).forEach((function(t){t(e.data,e.origin,e.source)}))},t.destroy=function(){window.removeEventListener("message",this.handleMsg),this.subscriptions={}},e}(),c=function(e){function t(t){var n;return(n=e.call(this,t)||this).createRecevier=function(){n.destroyRecevier(),n.recevier=new o,n.recevier.on("updateHeight",(function(e,t,r){n.iframe&&r===n.iframe.contentWindow&&(n.container.style.height=(e.msg||0)+"px",n.props.onUpdateHeight&&n.props.onUpdateHeight(e.msg||"#"))}))},n.destroyRecevier=function(){n.recevier&&(n.recevier.destroy(),n.recevier=null)},n.container=null,n.iframe=null,n}(0,r.Z)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.props.disableHeightSync||this.createRecevier()},n.componentDidUpdate=function(e){e.url.replace(/#.*$/,"")!==this.props.url.replace(/#.*$/,"")&&this.container&&(this.container.style.height=this.props.style&&this.props.style.height.toString()||"800px"),void 0!==e.disableHeightSync&&e.disableHeightSync!==this.props.disableHeightSync&&(this.props.disableHeightSync?this.destroyRecevier():this.createRecevier())},n.componentWillUnmount=function(){this.destroyRecevier()},n.render=function(){var e=this,t=this.props,n=t.className,r=t.id,o=t.style,c=t.url;return c?i.createElement("div",{className:"bg-iframe "+n,id:r,style:Object.assign({height:400,width:"100%"},o),ref:function(t){e.container=t}},i.createElement("iframe",{src:c,style:{border:"none",width:"100%",height:"100%"},ref:function(t){e.iframe=t}})):i.createElement("div",{className:"bg-iframe empty"},"Iframe")},t}(i.PureComponent);c.displayName="bg-iframe"},35444:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return u},default:function(){return f}});var r=n(21810),i=n(86919),o=(n(59301),n(99278)),c=n(50199),a=["components"],s={title:"\u8868\u683c",order:5},l="\u8868\u683c",p={unversionedId:"components/advanced/table",id:"components/advanced/table",title:"\u8868\u683c",description:"\u5c55\u793a\u884c\u5217\u6570\u636e\u3002",source:"@site/docs/components/advanced/table.mdx",sourceDirName:"components/advanced",slug:"/components/advanced/table",permalink:"/developer-site/docs/components/advanced/table",editUrl:"https://github.com/dingtalk-yida/developer-site/edit/feat/init/docs/components/advanced/table.mdx",tags:[],version:"current",frontMatter:{title:"\u8868\u683c",order:5},sidebar:"components",previous:{title:"\u5e95\u90e8\u901a\u680f",permalink:"/developer-site/docs/components/advanced/bottomBanner"},next:{title:"\u8f6e\u64ad\u56fe",permalink:"/developer-site/docs/components/advanced/slider"}},u=[{value:"\u4f55\u65f6\u4f7f\u7528",id:"\u4f55\u65f6\u4f7f\u7528",children:[],level:2},{value:"\u7ec4\u4ef6\u793a\u4f8b",id:"\u7ec4\u4ef6\u793a\u4f8b",children:[],level:2},{value:"\u7ec4\u4ef6\u5c5e\u6027",id:"\u7ec4\u4ef6\u5c5e\u6027",children:[],level:2}],d={toc:u};function f(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u8868\u683c"},"\u8868\u683c"),(0,o.kt)("p",null,"\u5c55\u793a\u884c\u5217\u6570\u636e\u3002"),(0,o.kt)("h2",{id:"\u4f55\u65f6\u4f7f\u7528"},"\u4f55\u65f6\u4f7f\u7528"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Table \u8d1f\u8d23\u5c06\u6570\u636e\u5448\u73b0\u4e3a\u9ad8\u5ea6\u53ef\u5b9a\u5236\u548c\u5177\u5907\u53ef\u8bbf\u95ee\u6027\u7684 HTML \u8868\u683c\uff0c\u5176\u6838\u5fc3\u529f\u80fd\u4e3a\u5c06\u7ed3\u6784\u5316\u7684\u6570\u636e\u4f7f\u7528\u8868\u683c\u7684\u65b9\u5f0f\u5c55\u73b0\uff1b"),(0,o.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u4f7f\u7528\u5404\u79cd\u53c2\u6570\u6765\u5411\u8868\u683c\u4e2d\u52a0\u5165\u4e00\u4e9b\u7279\u6027\uff0c\u6bd4\u5982\u6392\u5e8f\uff0c\u8fc7\u6ee4\uff0c\u6eda\u52a8\uff0c\u9501\u5217\u7b49\u3002")),(0,o.kt)("h2",{id:"\u7ec4\u4ef6\u793a\u4f8b"},"\u7ec4\u4ef6\u793a\u4f8b"),(0,o.kt)(c.Z,{url:"https://www.aliwork.com/developer/table-pc-v2?isRenderNav=false",mdxType:"Iframe"}),(0,o.kt)("h2",{id:"\u7ec4\u4ef6\u5c5e\u6027"},"\u7ec4\u4ef6\u5c5e\u6027"))}f.isMDXComponent=!0}}]);