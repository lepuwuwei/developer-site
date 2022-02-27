"use strict";(self.webpackChunkdeveloper=self.webpackChunkdeveloper||[]).push([[499],{94579:function(e,t,n){var i=n(97218),r=n(59301),o=(n(94648),[{title:"\u5c5e\u6027\u540d",dataIndex:"attr",width:"20%"},{title:"\u5c5e\u6027Code",dataIndex:"code",width:"10%"},{title:"\u7c7b\u578b",dataIndex:"type",width:"10%"},{title:"\u6570\u636e\u793a\u4f8b",dataIndex:"demo",width:"30%"},{title:"\u5907\u6ce8",dataIndex:"desc",width:"20%"}]);t.Z=function(e){return r.createElement(i.Z,{className:"attr-table",dataSource:e.dataSource,columns:o,pagination:!1})}},50199:function(e,t,n){n.d(t,{Z:function(){return a}});var i=n(44117),r=n(59301),o=function(){function e(){this.subscriptions={},window.addEventListener("message",this.handleMsg.bind(this),!1)}var t=e.prototype;return t.on=function(e,t){this.subscriptions[e]=this.subscriptions[e]||[],this.subscriptions[e].push(t)},t.off=function(e,t){if(this.subscriptions[e]){var n=this.subscriptions[e].findIndex((function(e){return e===t}));this.subscriptions[e].splice(n,1)}},t.handleMsg=function(e){e.data&&e.data.type&&(this.subscriptions[e.data.type]||[]).forEach((function(t){t(e.data,e.origin,e.source)}))},t.destroy=function(){window.removeEventListener("message",this.handleMsg),this.subscriptions={}},e}(),a=function(e){function t(t){var n;return(n=e.call(this,t)||this).createRecevier=function(){n.destroyRecevier(),n.recevier=new o,n.recevier.on("updateHeight",(function(e,t,i){n.iframe&&i===n.iframe.contentWindow&&(n.container.style.height=(e.msg||0)+"px",n.props.onUpdateHeight&&n.props.onUpdateHeight(e.msg||"#"))}))},n.destroyRecevier=function(){n.recevier&&(n.recevier.destroy(),n.recevier=null)},n.container=null,n.iframe=null,n}(0,i.Z)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.props.disableHeightSync||this.createRecevier()},n.componentDidUpdate=function(e){e.url.replace(/#.*$/,"")!==this.props.url.replace(/#.*$/,"")&&this.container&&(this.container.style.height=this.props.style&&this.props.style.height.toString()||"800px"),void 0!==e.disableHeightSync&&e.disableHeightSync!==this.props.disableHeightSync&&(this.props.disableHeightSync?this.destroyRecevier():this.createRecevier())},n.componentWillUnmount=function(){this.destroyRecevier()},n.render=function(){var e=this,t=this.props,n=t.className,i=t.id,o=t.style,a=t.url;return a?r.createElement("div",{className:"bg-iframe "+n,id:i,style:Object.assign({height:400,width:"100%"},o),ref:function(t){e.container=t}},r.createElement("iframe",{src:a,style:{border:"none",width:"100%",height:"100%"},ref:function(t){e.iframe=t}})):r.createElement("div",{className:"bg-iframe empty"},"Iframe")},t}(r.PureComponent);a.displayName="bg-iframe"},15309:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return p},default:function(){return f}});var i=n(21810),r=n(86919),o=(n(59301),n(99278)),a=n(50199),s=n(94579),d=["components"],c={title:"\u591a\u884c\u8f93\u5165\u6846",order:11},l="\u591a\u884c\u8f93\u5165\u6846",u={unversionedId:"components/form/textInputs",id:"components/form/textInputs",title:"\u591a\u884c\u8f93\u5165\u6846",description:"\u4f55\u65f6\u4f7f\u7528",source:"@site/docs/components/form/textInputs.mdx",sourceDirName:"components/form",slug:"/components/form/textInputs",permalink:"/developer-site/docs/components/form/textInputs",editUrl:"https://github.com/dingtalk-yida/developer-site/edit/feat/init/docs/components/form/textInputs.mdx",tags:[],version:"current",frontMatter:{title:"\u591a\u884c\u8f93\u5165\u6846",order:11},sidebar:"components",previous:{title:"\u8f93\u5165\u6846",permalink:"/developer-site/docs/components/form/textField"},next:{title:"\u4eba\u5458\u641c\u7d22\u6846",permalink:"/developer-site/docs/components/form/peopleSearch"}},p=[{value:"\u4f55\u65f6\u4f7f\u7528",id:"\u4f55\u65f6\u4f7f\u7528",children:[],level:2},{value:"\u7ec4\u4ef6\u793a\u4f8b",id:"\u7ec4\u4ef6\u793a\u4f8b",children:[],level:2},{value:"\u7ec4\u4ef6\u5c5e\u6027",id:"\u7ec4\u4ef6\u5c5e\u6027",children:[],level:2}],m={toc:p};function f(e){var t=e.components,n=(0,r.Z)(e,d);return(0,o.kt)("wrapper",(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u591a\u884c\u8f93\u5165\u6846"},"\u591a\u884c\u8f93\u5165\u6846"),(0,o.kt)("h2",{id:"\u4f55\u65f6\u4f7f\u7528"},"\u4f55\u65f6\u4f7f\u7528"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u7528\u4e8e\u5927\u91cf\u6587\u5b57\u8f93\u5165\u8f93\u5165\u573a\u666f\uff0c\u53ef\u662f\u533a\u57df\u6bd4\u6587\u672c\u8f93\u5165\u6846\u5927\uff1b")),(0,o.kt)("h2",{id:"\u7ec4\u4ef6\u793a\u4f8b"},"\u7ec4\u4ef6\u793a\u4f8b"),(0,o.kt)(a.Z,{url:"https://www.aliwork.com/developer/textarea-field-v2?isRenderNav=false",mdxType:"Iframe"}),(0,o.kt)("h2",{id:"\u7ec4\u4ef6\u5c5e\u6027"},"\u7ec4\u4ef6\u5c5e\u6027"),(0,o.kt)(s.Z,{dataSource:[{attr:"\u6807\u9898",code:"label",type:"String",demo:'"\u6807\u9898"',dafault:"",desc:""},{attr:"\u503c",code:"value",type:"String/Number ",demo:'"\u5185\u5bb9"',dafault:"",desc:""},{attr:"\u6807\u9898\u4f4d\u7f6e",code:"labelAlign",type:"String",demo:'"left"',dafault:"",desc:'\u53ef\u9009\u503c\uff1a"left", "top"'},{attr:"\u6807\u9898\u5bbd\u5ea6",code:"labelColSpan",type:"Number",demo:"4",dafault:"",desc:""},{attr:"\u6807\u9898\u504f\u79fb",code:"labelColOffset",type:"Number",demo:"0",dafault:"",desc:""},{attr:"\u5185\u5bb9\u5bbd\u5ea6",code:"wrapperColSpan",type:"Number",demo:"0",dafault:"",desc:""},{attr:"\u5185\u5bb9\u504f\u79fb",code:"wrapperColOffset",type:"Number",demo:"0",dafault:"",desc:""},{attr:"\u6807\u9898\u5bf9\u9f50",code:"labelTextAlign",type:"String",demo:'"left"',dafault:"",desc:'\u53ef\u9009\u503c\uff1a"left", "right"'},{attr:"\u5360\u4f4d\u63d0\u793a",code:"placeholder",type:"String",demo:'"\u8bf7\u9009\u62e9\u65e5\u671f"',dafault:"",desc:""},{attr:"\u63cf\u8ff0\u4fe1\u606f",code:"tips",type:"String",demo:'"\u8fd9\u662f\u4e00\u6bb5\u63cf\u8ff0\u4fe1\u606f"',dafault:"",desc:""},{attr:"\u5c3a\u5bf8",code:"size",type:"String",demo:'"small"',dafault:"",desc:'\u53ef\u9009\u503c\uff1a"small", "medium", "large"'},{attr:"\u72b6\u6001",code:"behavior",type:"String",demo:'"NORMAL"',dafault:"",desc:'\u53ef\u9009\u503c\uff1a"NORMAL", "DISABLED", "READONLY", "HIDDEN"'},{attr:"\u6821\u9a8c",code:"validation",type:"Array",demo:'[{type:"required"}]',dafault:"",desc:""},{attr:"\u503c\u53d1\u751f\u6539\u53d8\u4e8b\u4ef6",code:"onChange",type:"Function",demo:'function onChange({ value }) {console.log("onChange", value);}',dafault:"",desc:'\u53ef\u9009\u503c\uff1a{type:"required"}, {type: "customValidate", message: "\u8bf7\u9009\u62e9\u4eca\u65e5\u4e4b\u524d\u7684\u65e5\u671f", param: "function validateRule(value) { return value <= new Date().getTime(); }"}'}],mdxType:"AttrTable"}))}f.isMDXComponent=!0}}]);