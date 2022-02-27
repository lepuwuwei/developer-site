"use strict";(self.webpackChunkdeveloper=self.webpackChunkdeveloper||[]).push([[1270],{94579:function(e,t,n){var i=n(97218),r=n(59301),o=(n(94648),[{title:"\u5c5e\u6027\u540d",dataIndex:"attr",width:"20%"},{title:"\u5c5e\u6027Code",dataIndex:"code",width:"10%"},{title:"\u7c7b\u578b",dataIndex:"type",width:"10%"},{title:"\u6570\u636e\u793a\u4f8b",dataIndex:"demo",width:"30%"},{title:"\u5907\u6ce8",dataIndex:"desc",width:"20%"}]);t.Z=function(e){return r.createElement(i.Z,{className:"attr-table",dataSource:e.dataSource,columns:o,pagination:!1})}},50199:function(e,t,n){n.d(t,{Z:function(){return a}});var i=n(44117),r=n(59301),o=function(){function e(){this.subscriptions={},window.addEventListener("message",this.handleMsg.bind(this),!1)}var t=e.prototype;return t.on=function(e,t){this.subscriptions[e]=this.subscriptions[e]||[],this.subscriptions[e].push(t)},t.off=function(e,t){if(this.subscriptions[e]){var n=this.subscriptions[e].findIndex((function(e){return e===t}));this.subscriptions[e].splice(n,1)}},t.handleMsg=function(e){e.data&&e.data.type&&(this.subscriptions[e.data.type]||[]).forEach((function(t){t(e.data,e.origin,e.source)}))},t.destroy=function(){window.removeEventListener("message",this.handleMsg),this.subscriptions={}},e}(),a=function(e){function t(t){var n;return(n=e.call(this,t)||this).createRecevier=function(){n.destroyRecevier(),n.recevier=new o,n.recevier.on("updateHeight",(function(e,t,i){n.iframe&&i===n.iframe.contentWindow&&(n.container.style.height=(e.msg||0)+"px",n.props.onUpdateHeight&&n.props.onUpdateHeight(e.msg||"#"))}))},n.destroyRecevier=function(){n.recevier&&(n.recevier.destroy(),n.recevier=null)},n.container=null,n.iframe=null,n}(0,i.Z)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.props.disableHeightSync||this.createRecevier()},n.componentDidUpdate=function(e){e.url.replace(/#.*$/,"")!==this.props.url.replace(/#.*$/,"")&&this.container&&(this.container.style.height=this.props.style&&this.props.style.height.toString()||"800px"),void 0!==e.disableHeightSync&&e.disableHeightSync!==this.props.disableHeightSync&&(this.props.disableHeightSync?this.destroyRecevier():this.createRecevier())},n.componentWillUnmount=function(){this.destroyRecevier()},n.render=function(){var e=this,t=this.props,n=t.className,i=t.id,o=t.style,a=t.url;return a?r.createElement("div",{className:"bg-iframe "+n,id:i,style:Object.assign({height:400,width:"100%"},o),ref:function(t){e.container=t}},r.createElement("iframe",{src:a,style:{border:"none",width:"100%",height:"100%"},ref:function(t){e.iframe=t}})):r.createElement("div",{className:"bg-iframe empty"},"Iframe")},t}(r.PureComponent);a.displayName="bg-iframe"},44243:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return d},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return u},default:function(){return m}});var i=n(21810),r=n(86919),o=(n(59301),n(99278)),a=n(50199),s=n(94579),c=["components"],d={title:"\u6b65\u9aa4\u6761",order:15},l="\u6b65\u9aa4\u6761",p={unversionedId:"components/advanced/steps",id:"components/advanced/steps",title:"\u6b65\u9aa4\u6761",description:"\u5f15\u5bfc\u7528\u6237\u6309\u7167\u6d41\u7a0b\u5b8c\u6210\u4efb\u52a1\u7684\u5bfc\u822a\u6761\u3002",source:"@site/docs/components/advanced/steps.mdx",sourceDirName:"components/advanced",slug:"/components/advanced/steps",permalink:"/developer-site/docs/components/advanced/steps",editUrl:"https://github.com/dingtalk-yida/developer-site/edit/feat/init/docs/components/advanced/steps.mdx",tags:[],version:"current",frontMatter:{title:"\u6b65\u9aa4\u6761",order:15},sidebar:"components",previous:{title:"\u65f6\u95f4\u8f74",permalink:"/developer-site/docs/components/advanced/timeLine"}},u=[{value:"\u4f55\u65f6\u4f7f\u7528",id:"\u4f55\u65f6\u4f7f\u7528",children:[],level:2},{value:"\u7ec4\u4ef6\u793a\u4f8b",id:"\u7ec4\u4ef6\u793a\u4f8b",children:[],level:2},{value:"\u7ec4\u4ef6\u5c5e\u6027",id:"\u7ec4\u4ef6\u5c5e\u6027",children:[],level:2}],h={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,c);return(0,o.kt)("wrapper",(0,i.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u6b65\u9aa4\u6761"},"\u6b65\u9aa4\u6761"),(0,o.kt)("p",null,"\u5f15\u5bfc\u7528\u6237\u6309\u7167\u6d41\u7a0b\u5b8c\u6210\u4efb\u52a1\u7684\u5bfc\u822a\u6761\u3002"),(0,o.kt)("h2",{id:"\u4f55\u65f6\u4f7f\u7528"},"\u4f55\u65f6\u4f7f\u7528"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u5f53\u4efb\u52a1\u590d\u6742\u6216\u8005\u5b58\u5728\u5148\u540e\u5173\u7cfb\u65f6\uff0c\u5c06\u5176\u5206\u89e3\u6210\u4e00\u7cfb\u5217\u6b65\u9aa4\uff0c\u4ece\u800c\u7b80\u5316\u4efb\u52a1\u3002")),(0,o.kt)("h2",{id:"\u7ec4\u4ef6\u793a\u4f8b"},"\u7ec4\u4ef6\u793a\u4f8b"),(0,o.kt)(a.Z,{url:"https://www.aliwork.com/developer/steps-v2?isRenderNav=false",mdxType:"Iframe"}),(0,o.kt)("h2",{id:"\u7ec4\u4ef6\u5c5e\u6027"},"\u7ec4\u4ef6\u5c5e\u6027"),(0,o.kt)(s.Z,{dataSource:[{attr:"\u6b65\u9aa4\u6570\u636e",code:"dataSource",type:"Array",demo:"[{ title: 'step1', content: 'Open' }, { title: 'step2', content: 'Put'}]",dafault:"",desc:""},{attr:"\u5f53\u524d\u6b65\u9aa4",code:"current",type:"number",demo:"1",dafault:"",desc:""},{attr:"\u7c7b\u578b",code:"shape",type:"String",demo:'"circle"',dafault:"",desc:'\u53ef\u9009\u503c:"circle", "arrow", "dot" '},{attr:"\u5c55\u793a\u65b9\u5411",code:"direction",type:"String",demo:'"horizontal"',dafault:"",desc:'\u53ef\u9009\u503c: "horizontal", "vertical"'},{attr:"\u6a2a\u5411\u5e03\u5c40\u65f6\u7684\u5185\u5bb9\u6392\u5217",code:"labelPlacement",type:"String",demo:'"vertical"',dafault:"",desc:'\u53ef\u9009\u503c: "vertical", "horizontal"'},{attr:"\u53ea\u8bfb\u6a21\u5f0f",code:"placeholder",type:"Boolean",demo:"false",dafault:"",desc:"\u53ef\u9009\u503c: true,false"},{attr:"\u5f00\u542f\u52a8\u6548",code:"animation",type:"Boolean",demo:"true",dafault:"",desc:"\u53ef\u9009\u503c: true,false"},{attr:"\u70b9\u51fb\u6309\u94ae\u52a8\u4f5c",code:"onClick",type:"Function",demo:'"function onClick(index) {}"',dafault:"",desc:""}],mdxType:"AttrTable"}))}m.isMDXComponent=!0}}]);