"use strict";(self.webpackChunkdeveloper=self.webpackChunkdeveloper||[]).push([[5756],{94579:function(e,t,i){var o=i(97218),r=i(59301),a=(i(94648),[{title:"\u5c5e\u6027\u540d",dataIndex:"attr",width:"20%"},{title:"\u5c5e\u6027Code",dataIndex:"code",width:"10%"},{title:"\u7c7b\u578b",dataIndex:"type",width:"10%"},{title:"\u6570\u636e\u793a\u4f8b",dataIndex:"demo",width:"30%"},{title:"\u5907\u6ce8",dataIndex:"desc",width:"20%"}]);t.Z=function(e){return r.createElement(o.Z,{className:"attr-table",dataSource:e.dataSource,columns:a,pagination:!1})}},50199:function(e,t,i){i.d(t,{Z:function(){return n}});var o=i(44117),r=i(59301),a=function(){function e(){this.subscriptions={},window.addEventListener("message",this.handleMsg.bind(this),!1)}var t=e.prototype;return t.on=function(e,t){this.subscriptions[e]=this.subscriptions[e]||[],this.subscriptions[e].push(t)},t.off=function(e,t){if(this.subscriptions[e]){var i=this.subscriptions[e].findIndex((function(e){return e===t}));this.subscriptions[e].splice(i,1)}},t.handleMsg=function(e){e.data&&e.data.type&&(this.subscriptions[e.data.type]||[]).forEach((function(t){t(e.data,e.origin,e.source)}))},t.destroy=function(){window.removeEventListener("message",this.handleMsg),this.subscriptions={}},e}(),n=function(e){function t(t){var i;return(i=e.call(this,t)||this).createRecevier=function(){i.destroyRecevier(),i.recevier=new a,i.recevier.on("updateHeight",(function(e,t,o){i.iframe&&o===i.iframe.contentWindow&&(i.container.style.height=(e.msg||0)+"px",i.props.onUpdateHeight&&i.props.onUpdateHeight(e.msg||"#"))}))},i.destroyRecevier=function(){i.recevier&&(i.recevier.destroy(),i.recevier=null)},i.container=null,i.iframe=null,i}(0,o.Z)(t,e);var i=t.prototype;return i.componentDidMount=function(){this.props.disableHeightSync||this.createRecevier()},i.componentDidUpdate=function(e){e.url.replace(/#.*$/,"")!==this.props.url.replace(/#.*$/,"")&&this.container&&(this.container.style.height=this.props.style&&this.props.style.height.toString()||"800px"),void 0!==e.disableHeightSync&&e.disableHeightSync!==this.props.disableHeightSync&&(this.props.disableHeightSync?this.destroyRecevier():this.createRecevier())},i.componentWillUnmount=function(){this.destroyRecevier()},i.render=function(){var e=this,t=this.props,i=t.className,o=t.id,a=t.style,n=t.url;return n?r.createElement("div",{className:"bg-iframe "+i,id:o,style:Object.assign({height:400,width:"100%"},a),ref:function(t){e.container=t}},r.createElement("iframe",{src:n,style:{border:"none",width:"100%",height:"100%"},ref:function(t){e.iframe=t}})):r.createElement("div",{className:"bg-iframe empty"},"Iframe")},t}(r.PureComponent);n.displayName="bg-iframe"},18245:function(e,t,i){i.r(t),i.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return p},default:function(){return f}});var o=i(21810),r=i(86919),a=(i(59301),i(99278)),n=i(50199),s=i(94579),d=["components"],c={title:"\u4e0b\u62c9\u591a\u9009",order:5},l="\u4e0b\u62c9\u591a\u9009",u={unversionedId:"components/form/selects",id:"components/form/selects",title:"\u4e0b\u62c9\u591a\u9009",description:"\u4f55\u65f6\u4f7f\u7528",source:"@site/docs/components/form/selects.mdx",sourceDirName:"components/form",slug:"/components/form/selects",permalink:"/developer-site/docs/components/form/selects",editUrl:"https://github.com/dingtalk-yida/developer-site/edit/feat/init/docs/components/form/selects.mdx",tags:[],version:"current",frontMatter:{title:"\u4e0b\u62c9\u591a\u9009",order:5},sidebar:"components",previous:{title:"\u591a\u9009",permalink:"/developer-site/docs/components/form/checkbox"},next:{title:"\u65e5\u671f\u9009\u62e9",permalink:"/developer-site/docs/components/form/dateSelect"}},p=[{value:"\u4f55\u65f6\u4f7f\u7528",id:"\u4f55\u65f6\u4f7f\u7528",children:[],level:2},{value:"\u7ec4\u4ef6\u793a\u4f8b",id:"\u7ec4\u4ef6\u793a\u4f8b",children:[],level:2},{value:"\u7ec4\u4ef6\u5c5e\u6027",id:"\u7ec4\u4ef6\u5c5e\u6027",children:[],level:2}],m={toc:p};function f(e){var t=e.components,i=(0,r.Z)(e,d);return(0,a.kt)("wrapper",(0,o.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u4e0b\u62c9\u591a\u9009"},"\u4e0b\u62c9\u591a\u9009"),(0,a.kt)("h2",{id:"\u4f55\u65f6\u4f7f\u7528"},"\u4f55\u65f6\u4f7f\u7528"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u7528\u4e8e\u66ff\u4ee3\u539f\u751f select\uff0c\u5728\u9650\u5b9a\u7684\u53ef\u9009\u6027\u5185\u8fdb\u884c\u9009\u62e9\uff0c\u6838\u5fc3\u80fd\u529b\u662f \u9009\u62e9\uff1b")),(0,a.kt)("h2",{id:"\u7ec4\u4ef6\u793a\u4f8b"},"\u7ec4\u4ef6\u793a\u4f8b"),(0,a.kt)(n.Z,{url:"https://www.aliwork.com/developer/multi-select-field-v2?isRenderNav=false",mdxType:"Iframe"}),(0,a.kt)("h2",{id:"\u7ec4\u4ef6\u5c5e\u6027"},"\u7ec4\u4ef6\u5c5e\u6027"),(0,a.kt)(s.Z,{dataSource:[{attr:"\u6807\u9898",code:"label",type:"String",demo:"\u6807\u9898",dafault:"",desc:""},{attr:"\u503c",code:"fieldData",type:"Object",demo:'\u5355\u9009: "4121", \u591a\u9009: ["4102", "4212"]',dafault:"",desc:""},{attr:"\u6807\u9898\u4f4d\u7f6e",code:"labelAlign",type:"String",demo:'"left"',dafault:"",desc:'\u53ef\u9009\u503c\uff1a"left", "top"'},{attr:"\u6807\u9898\u5bbd\u5ea6",code:"labelColSpan",type:"Number",demo:"4",dafault:"",desc:""},{attr:"\u6807\u9898\u504f\u79fb",code:"labelColOffset",type:"Number",demo:"0",dafault:"",desc:""},{attr:"\u5185\u5bb9\u5bbd\u5ea6",code:"wrapperColSpan",type:"Number",demo:"0",dafault:"",desc:""},{attr:"\u5185\u5bb9\u504f\u79fb",code:"wrapperColOffset",type:"Number",demo:"0",dafault:"",desc:""},{attr:"\u6807\u9898\u5bf9\u9f50",code:"labelTextAlign",type:"String",demo:'"left"',dafault:"",desc:'\u53ef\u9009\u503c\uff1a"left", "right"'},{attr:"\u63d0\u793a\u6587\u5b57",code:"placeholder",type:"String",demo:'"\u8bf7\u9009\u62e9"',dafault:"",desc:""},{attr:"\u63cf\u8ff0\u4fe1\u606f",code:"tips",type:"String",demo:"\u8fd9\u662f\u4e00\u6bb5\u63cf\u8ff0\u4fe1\u606f",dafault:"",desc:""},{attr:"\u5c3a\u5bf8",code:"size",type:"String",demo:'"small"',dafault:"",desc:'\u53ef\u9009\u503c\uff1a"small", "medium", "large"'},{attr:"\u72b6\u6001",code:"behavior",type:"String",demo:'{fieldBehavior: "NORMAL"}',dafault:"",desc:'fieldBehavior \u53ef\u9009\u503c\uff1a"NORMAL", "DISABLED", "READONLY", "HIDDEN"'},{attr:"\u72b6\u6001",code:"behavior",type:"String",demo:'{fieldBehavior: "NORMAL"}',dafault:"",desc:'fieldBehavior \u53ef\u9009\u503c\uff1a"NORMAL", "DISABLED", "READONLY", "HIDDEN" '},{attr:"\u6821\u9a8c",code:"validation",type:"Array",demo:'[{type:"required"}]',dafault:"",desc:'\u53ef\u9009\u503c\uff1a{type:"required"}, {type: "customValidate", message: "\u8bf7\u9009\u62e9\u6307\u5b9a\u9879", param: "function validateRule(value) { return value === test; }"} '},{attr:"\u662f\u5426\u6709\u4e0b\u62c9\u7bad\u5934",code:"hasArrow",type:"Boolean",demo:"true",dafault:"",desc:"\u53ef\u9009\u503c\uff1atrue, false"},{attr:"\u662f\u5426\u591a\u9009",code:"multiple",type:"BoBooleanol",demo:"true",dafault:"",desc:"\u53ef\u9009\u503c\uff1atrue, false "},{attr:"\u6821\u9a8c",code:"validation",type:"Array",demo:'[{type:"required"}] ',dafault:"",desc:'\u53ef\u9009\u503c\uff1a{type:"required"}, {type: "customValidate", message: "\u8bf7\u9009\u62e9\u4eca\u65e5\u4e4b\u524d\u7684\u65e5\u671f", param: "function validateRule(value) { return value <= new Date().getTime(); }"}'},{attr:"\u662f\u5426\u6709\u641c\u7d22",code:"showSearch",type:"Boolean",demo:"true",dafault:"",desc:" \u53ef\u9009\u503c\uff1atrue, false"},{attr:"\u4e0b\u62c9\u6846\u663e\u793a\u6216\u5173\u95ed\u4e8b\u4ef6",code:"onVisibleChange",type:"Function",demo:'function onVisibleChange({ visible, type }){console.log("onVisibleChange", visible, type);} ',dafault:"",desc:""},{attr:"\u503c\u53d1\u751f\u6539\u53d8\u4e8b\u4ef6",code:"onChange",type:"Function",demo:' function onChange({ value, data, extra }){ console.log("onChange", value, data, extra);} ',dafault:"",desc:""}],mdxType:"AttrTable"}))}f.isMDXComponent=!0}}]);