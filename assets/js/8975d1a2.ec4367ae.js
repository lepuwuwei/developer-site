"use strict";(self.webpackChunkyida_developer=self.webpackChunkyida_developer||[]).push([[562],{99278:function(t,e,n){n.d(e,{Zo:function(){return s},kt:function(){return d}});var a=n(59301);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function p(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?p(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},p=Object.keys(t);for(a=0;a<p.length;a++)n=p[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(t);for(a=0;a<p.length;a++)n=p[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o=a.createContext({}),m=function(t){var e=a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},s=function(t){var e=m(t.components);return a.createElement(o.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,p=t.originalType,o=t.parentName,s=i(t,["components","mdxType","originalType","parentName"]),u=m(n),d=r,k=u["".concat(o,".").concat(d)]||u[d]||c[d]||p;return n?a.createElement(k,l(l({ref:e},s),{},{components:n})):a.createElement(k,l({ref:e},s))}));function d(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var p=n.length,l=new Array(p);l[0]=u;var i={};for(var o in e)hasOwnProperty.call(e,o)&&(i[o]=e[o]);i.originalType=t,i.mdxType="string"==typeof t?t:r,l[1]=i;for(var m=2;m<p;m++)l[m]=n[m];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},39159:function(t,e,n){n.r(e),n.d(e,{assets:function(){return s},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return i},metadata:function(){return m},toc:function(){return c}});var a=n(47145),r=n(24736),p=(n(59301),n(99278)),l=["components"],i={title:"\u5feb\u901f\u5f00\u59cb",order:1},o=void 0,m={unversionedId:"guide/customComponent/start",id:"guide/customComponent/start",title:"\u5feb\u901f\u5f00\u59cb",description:"\u672c\u6587\u6863\u901a\u8fc7\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u5b9e\u73b0\u6587\u672c\u590d\u5236\u529f\u80fd\u7684\u5c0f\u6848\u4f8b\uff0c\u4f53\u9a8c\u4e00\u4e0b\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u5f00\u53d1\u8c03\u8bd5\u4ee5\u53ca\u5b89\u88c5\u4f7f\u7528\u7684\u5177\u4f53\u64cd\u4f5c\u3002",source:"@site/docs/guide/customComponent/start.md",sourceDirName:"guide/customComponent",slug:"/guide/customComponent/start",permalink:"/developer-site/docs/guide/customComponent/start",draft:!1,editUrl:"https://github.com/dingtalk-yida/developer-site/edit/master/docs/guide/customComponent/start.md",tags:[],version:"current",lastUpdatedBy:"\u4e0b\u7f8a",lastUpdatedAt:1647522908,formattedLastUpdatedAt:"2022/3/17",frontMatter:{title:"\u5feb\u901f\u5f00\u59cb",order:1},sidebar:"guide",previous:{title:"\u8c03\u8bd5",permalink:"/developer-site/docs/guide/concept/debug"},next:{title:"\u7ec4\u4ef6\u7ba1\u7406",permalink:"/developer-site/docs/guide/customComponent/manage"}},s={},c=[{value:"\u6848\u4f8b\u573a\u666f",id:"\u6848\u4f8b\u573a\u666f",level:2},{value:"\u5b9e\u73b0\u6548\u679c",id:"\u5b9e\u73b0\u6548\u679c",level:2},{value:"\u64cd\u4f5c\u6b65\u9aa4",id:"\u64cd\u4f5c\u6b65\u9aa4",level:2},{value:"\u6b65\u9aa4 1\uff1a\u521b\u5efa\u81ea\u5b9a\u4e49\u7ec4\u4ef6",id:"\u6b65\u9aa4-1\u521b\u5efa\u81ea\u5b9a\u4e49\u7ec4\u4ef6",level:3},{value:"\u6b65\u9aa4 2\uff1a\u5f00\u53d1\u8c03\u8bd5\u81ea\u5b9a\u4e49\u7ec4\u4ef6",id:"\u6b65\u9aa4-2\u5f00\u53d1\u8c03\u8bd5\u81ea\u5b9a\u4e49\u7ec4\u4ef6",level:3},{value:"\u6b65\u9aa4 3\uff1a\u5b89\u88c5\u81ea\u5b9a\u4e49\u7ec4\u4ef6",id:"\u6b65\u9aa4-3\u5b89\u88c5\u81ea\u5b9a\u4e49\u7ec4\u4ef6",level:3},{value:"\u6b65\u9aa4 4\uff1a\u4f7f\u7528\u81ea\u5b9a\u4e49\u7ec4\u4ef6",id:"\u6b65\u9aa4-4\u4f7f\u7528\u81ea\u5b9a\u4e49\u7ec4\u4ef6",level:3},{value:"\u6b65\u9aa4 5\uff1a\u67e5\u770b/\u4fee\u6539\u7ec4\u4ef6\u4fe1\u606f",id:"\u6b65\u9aa4-5\u67e5\u770b\u4fee\u6539\u7ec4\u4ef6\u4fe1\u606f",level:3},{value:"\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u5c5e\u6027",id:"\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u5c5e\u6027",level:2},{value:"\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u5c5e\u6027\u914d\u7f6e\u5165\u53e3",id:"\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u5c5e\u6027\u914d\u7f6e\u5165\u53e3",level:3},{value:"\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u5c5e\u6027\u914d\u7f6e\u8bf4\u660e",id:"\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u5c5e\u6027\u914d\u7f6e\u8bf4\u660e",level:3}],u={toc:c};function d(t){var e=t.components,n=(0,r.Z)(t,l);return(0,p.kt)("wrapper",(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"\u672c\u6587\u6863\u901a\u8fc7\u81ea\u5b9a\u4e49\u7ec4\u4ef6",(0,p.kt)("strong",{parentName:"p"},"\u5b9e\u73b0\u6587\u672c\u590d\u5236\u529f\u80fd"),"\u7684\u5c0f\u6848\u4f8b\uff0c\u4f53\u9a8c\u4e00\u4e0b\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u5f00\u53d1\u8c03\u8bd5\u4ee5\u53ca\u5b89\u88c5\u4f7f\u7528\u7684\u5177\u4f53\u64cd\u4f5c\u3002"),(0,p.kt)("h2",{id:"\u6848\u4f8b\u573a\u666f"},"\u6848\u4f8b\u573a\u666f"),(0,p.kt)("p",null,"\u4f7f\u7528\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u529f\u80fd\uff0c\u5bf9\u5b9c\u642d\u73b0\u6709\u7684\u6587\u672c\u7ec4\u4ef6\u8fdb\u884c\u4f4e\u4ee3\u7801\u6539\u9020\uff0c\u5b9e\u73b0\u6587\u672c\u590d\u5236\u529f\u80fd\u3002\u7528\u4e8e\u6587\u672c\u5185\u5bb9\u590d\u5236\u5230\u526a\u5207\u677f\uff0c\u4fbf\u4e8e\u7528\u6237\u8fdb\u884c\u91cd\u590d\u5b57\u6bb5\u7684\u586b\u5199\u3002"),(0,p.kt)("h2",{id:"\u5b9e\u73b0\u6548\u679c"},"\u5b9e\u73b0\u6548\u679c"),(0,p.kt)("p",null,(0,p.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i4/O1CN01H9M3PF28UHWe391bD_!!6000000007935-2-tps-959-530.png_.webp",alt:null})),(0,p.kt)("h2",{id:"\u64cd\u4f5c\u6b65\u9aa4"},"\u64cd\u4f5c\u6b65\u9aa4"),(0,p.kt)("h3",{id:"\u6b65\u9aa4-1\u521b\u5efa\u81ea\u5b9a\u4e49\u7ec4\u4ef6"},"\u6b65\u9aa4 1\uff1a\u521b\u5efa\u81ea\u5b9a\u4e49\u7ec4\u4ef6"),(0,p.kt)("p",null,"\u901a\u8fc7\u5bf9\u7ec4\u4ef6\u540d\u79f0\u3001\u7c7b\u578b\u3001\u6807\u8bc6\u7b49\u5c5e\u6027\u7684\u914d\u7f6e\uff0c\u4f4e\u6210\u672c\u3001\u81ea\u5b9a\u4e49\u4e00\u6b3e\u66f4\u8d34\u5408\u4e1a\u52a1\u9700\u6c42\u7684\u7ec4\u4ef6\u3002\n",(0,p.kt)("strong",{parentName:"p"},"\u64cd\u4f5c\u6b65\u9aa4\uff1a")),(0,p.kt)("ol",null,(0,p.kt)("li",{parentName:"ol"},"\u5b9c\u642d\u5e94\u7528 >> \u5e94\u7528\u8bbe\u7f6e >> \u7ec4\u4ef6\u7ba1\u7406 >> \u7ec4\u4ef6\u4e2d\u5fc3\uff08\u64cd\u4f5c\u5982\u4e0b\u56fe\u6240\u793a\uff09")),(0,p.kt)("p",null,(0,p.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i3/O1CN01MZ8RQY1eG8pH1qVH9_!!6000000003843-2-tps-959-531.png_.webp",alt:null})),(0,p.kt)("ol",{start:2},(0,p.kt)("li",{parentName:"ol"},"\u65b0\u589e\u7ec4\u4ef6 >> \u586b\u5199\u7ec4\u4ef6\u540d\u79f0\u3001",(0,p.kt)("a",{parentName:"li",href:"#dU0sh"},"\u7ec4\u4ef6\u7c7b\u578b"),"\u3001\u7ec4\u4ef6\u6807\u8bc6\u7b49\u7ec4\u4ef6\u5c5e\u6027 >> \u786e\u5b9a\uff08\u64cd\u4f5c\u5982\u4e0b\u56fe\u6240\u793a\uff09")),(0,p.kt)("p",null,(0,p.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i4/O1CN01YhSa3q1bt7gfYpGsY_!!6000000003522-2-tps-959-530.png_.webp",alt:null})),(0,p.kt)("h3",{id:"\u6b65\u9aa4-2\u5f00\u53d1\u8c03\u8bd5\u81ea\u5b9a\u4e49\u7ec4\u4ef6"},"\u6b65\u9aa4 2\uff1a\u5f00\u53d1\u8c03\u8bd5\u81ea\u5b9a\u4e49\u7ec4\u4ef6"),(0,p.kt)("p",null,"\u5bf9\u7ec4\u4ef6\u8fdb\u884c\u5f00\u53d1\u8c03\u8bd5\uff0c\u4ee5\u6ee1\u8db3\u4e0d\u540c\u7684\u4e1a\u52a1\u9700\u6c42\u3002\u672c\u6848\u4f8b\u4e2d\u5b9e\u73b0\u7ec4\u4ef6\u7684\u8ba1\u6570\u529f\u80fd\u3002\n",(0,p.kt)("strong",{parentName:"p"},"\u64cd\u4f5c\u6b65\u9aa4\uff1a")),(0,p.kt)("ol",null,(0,p.kt)("li",{parentName:"ol"},"\u7ec4\u4ef6\u4e2d\u5fc3 >> \u6211\u7684\u7ec4\u4ef6 >> \u627e\u5230\u9700\u8981\u8c03\u8bd5\u7684\u7ec4\u4ef6 >> \u5f00\u53d1\uff08\u64cd\u4f5c\u5982\u4e0b\u56fe\u6240\u793a\uff09")),(0,p.kt)("p",null,(0,p.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i3/O1CN014zyeGb1Mkg9GV32NQ_!!6000000001473-2-tps-959-530.png_.webp",alt:null})),(0,p.kt)("ol",{start:2},(0,p.kt)("li",{parentName:"ol"},"\u524d\u9762\u6709\u8bf4\u9053\u7ec4\u4ef6\u7531\u89c6\u56fe\u548c\u5c5e\u6027\u6784\u5efa\uff0c\u5f53\u5f00\u53d1\u4e00\u4e2a\u7ec4\u4ef6\u65f6\u9700\u8981\u5148\u62bd\u8c61\u51fa\u8fd9\u4e2a\u7ec4\u4ef6\u6240\u9700\u8981\u7684\u5c5e\u6027\uff0c\u6211\u5148\u6765\u6784\u5efa\u7ec4\u4ef6\u7684\u5c5e\u6027\uff0c\u8be5\u7ec4\u4ef6\u53ea\u9700\u8981\u4e00\u4e2a\u6587\u672c\u5185\u5bb9\u7684\u5c5e\u6027\uff0c\u5c5e\u6027\u914d\u7f6e >> \u5c5e\u6027\u5b9a\u4e49\uff0c\u6dfb\u52a0\u4e00\u4e2a\u6587\u672c\u5185\u5bb9\u7684\u5c5e\u6027\uff0c\u540d\u79f0\u4e3a content\uff0c\u5c5e\u6027\u7c7b\u578b\u9009\u6587\u672c\uff0c\u8bbe\u7f6e\u5668\u9009 textSetter\u3002")),(0,p.kt)("p",null,(0,p.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i2/O1CN01gWs6sk1LTu1dISw3r_!!6000000001301-2-tps-5114-714.png_.webp",alt:null}),"\n",(0,p.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i3/O1CN01270X0S1aD9mYRwf0J_!!6000000003295-2-tps-1706-456.png_.webp",alt:null})),(0,p.kt)("ol",{start:3},(0,p.kt)("li",{parentName:"ol"},"\u7ec4\u4ef6\u5c5e\u6027\u6784\u5efa\u5b8c\u6210\u540e\uff0c\u6765\u6784\u5efa\u7ec4\u4ef6\u7684\u89c6\u56fe\uff0c\u6dfb\u52a0\u6240\u9700\u7684",(0,p.kt)("a",{parentName:"li",href:"https://www.yuque.com/yida/support/zqpbaq"},"\u5b9c\u642d\u666e\u901a\u7ec4\u4ef6"),"\u5230\u753b\u5e03\u4e2d\uff08\u672c\u6848\u4f8b\u6240\u9700\u7ec4\u4ef6\u4e3a\u4e24\u4e2a\u6587\u672c\u7ec4\u4ef6\u3002\u5206\u522b\u547d\u540d\u4e3a\u300c\u6587\u672c\u300d\u53ca\u300c\u590d\u5236\u300d\uff09\uff0c\u5e76\u8fdb\u884c\u57fa\u672c\u5c5e\u6027\u7684\u914d\u7f6e\uff0c\u5c06\u6587\u672c\u7ec4\u4ef6\u7684\u5185\u5bb9\u8fdb\u884c\u53d8\u91cf\u7ed1\u5b9a\uff0c\u7ed1\u5b9a\u4e3a\u521a\u624d\u6784\u5efa\u7684\u5c5e\u6027 props.content, \u8fd9\u6837\u5c31\u53ef\u4ee5\u5728\u8fd0\u884c\u65f6\u663e\u793a\u4f20\u8fc7\u6765\u7684\u5c5e\u6027\u503c\u3002\uff08\u64cd\u4f5c\u5982\u4e0b\u56fe\u6240\u793a\uff09")),(0,p.kt)("p",null,(0,p.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i3/O1CN0182x1m31JwBFTHSOP4_!!6000000001092-2-tps-1706-663.png_.webp",alt:null})),(0,p.kt)("ol",{start:4},(0,p.kt)("li",{parentName:"ol"},"\u4e3a\u6309\u94ae\u7ec4\u4ef6\u8fdb\u884c\u52a8\u4f5c\u8bbe\u7f6e\uff0c\u4ee5\u6587\u672c\u590d\u5236\u6548\u679c\u3002\u9009\u4e2d\u300c\u590d\u5236\u300d\u6587\u672c >> \u65b0\u5efa\u52a8\u4f5c >> onCopyText \u70b9\u51fb\u3002\uff08\u64cd\u4f5c\u5982\u4e0b\u56fe\u6240\u793a\uff09")),(0,p.kt)("p",null,(0,p.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i1/O1CN01d5AIjX28gBp3Ne4aS_!!6000000007961-2-tps-959-531.png_.webp",alt:null})),(0,p.kt)("ol",{start:5},(0,p.kt)("li",{parentName:"ol"},"\u5728 JS \u9762\u677f\u8fdb\u884c\u590d\u5236\u903b\u8f91\u7684\u7f16\u5199\u3002\uff08\u5982\u4e0b\u56fe\u6240\u793a\uff09")),(0,p.kt)("p",null,(0,p.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i3/O1CN01aibC6P1r4m071UxeZ_!!6000000005578-2-tps-959-531.png_.webp",alt:null})),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-javascript"},"export function onCopyText() {\n  const input = document.createElement('input');\n  input.setAttribute('readonly', 'readonly');\n  // \u901a\u8fc7 this.props.xxx \u83b7\u53d6\u5c5e\u6027\n  input.setAttribute('value', this.props.content);\n  document.body.appendChild(input);\n  input.select();\n  input.setSelectionRange(0, 9999);\n  document.execCommand('copy');\n  document.body.removeChild(input);\n  this.utils.toast('\u5df2\u6210\u529f\u590d\u5236\u5230\u526a\u8d34\u677f');\n}\n")),(0,p.kt)("ol",{start:6},(0,p.kt)("li",{parentName:"ol"},"\u4fdd\u5b58 >> \u9884\u89c8\u7ec4\u4ef6")),(0,p.kt)("p",null,(0,p.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i3/O1CN01NhdcnK27DxnZAPSMA_!!6000000007764-2-tps-1704-543.png_.webp1",alt:null})),(0,p.kt)("ol",{start:7},(0,p.kt)("li",{parentName:"ol"},"\u53d1\u5e03 >> \u586b\u5199\u7ec4\u4ef6\u53d1\u5e03\u7684",(0,p.kt)("a",{parentName:"li",href:"/docs/guide/concept/customComponent#%E7%BB%84%E4%BB%B6%E7%89%88%E6%9C%AC%E8%AF%B4%E6%98%8E"},"\u7248\u672c\u53f7"),"\u53ca\u76f8\u5173\u8bf4\u660e >> \u786e\u5b9a\u3002\uff08\u64cd\u4f5c\u5982\u4e0b\u56fe\u6240\u793a\uff09")),(0,p.kt)("p",null,(0,p.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i3/O1CN01GYalDn1uoWPGpFgWI_!!6000000006084-2-tps-959-530.png_.webp",alt:null})),(0,p.kt)("ol",{start:8},(0,p.kt)("li",{parentName:"ol"},"\u53d1\u5e03\u6210\u529f\u4f1a\u770b\u5230\u63d0\u793a\u3002\uff08\u64cd\u4f5c\u5982\u4e0b\u56fe\u6240\u793a\uff09\u5728\u5b9e\u9645\u7684\u7ec4\u4ef6\u5f00\u53d1\u4e2d\uff0c\u4fdd\u5b58\u540e\u5373\u53ef\u5b89\u88c5\u7ec4\u4ef6\u7684\u5f00\u53d1\u7248(0.1.0)\u8fdb\u884c\u5b9e\u65f6\u8c03\u8bd5\uff0c\u5f53\u7ec4\u4ef6\u5b8c\u6210\u4e86\u5f00\u53d1\u540e\u624d\u9700\u8981\u53d1\u5e03\u6b63\u5f0f\u7248\u672c\u3002")),(0,p.kt)("p",null,(0,p.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i4/O1CN0136UVji1Xnqf5Re5Ed_!!6000000002969-2-tps-959-530.png_.webp",alt:null})),(0,p.kt)("h3",{id:"\u6b65\u9aa4-3\u5b89\u88c5\u81ea\u5b9a\u4e49\u7ec4\u4ef6"},"\u6b65\u9aa4 3\uff1a\u5b89\u88c5\u81ea\u5b9a\u4e49\u7ec4\u4ef6"),(0,p.kt)("p",null,"\u5c06\u5f00\u53d1\u8c03\u8bd5\u5b8c\u6210\u7684\u81ea\u5b9a\u4e49\u7ec4\u4ef6\uff0c\u5b89\u88c5\u5230\u9875\u9762\u5185\uff0c\u5373\u53ef\u5728\u9875\u9762\u8bbe\u8ba1\u7684\u8fc7\u7a0b\u4e2d\u8fdb\u884c\u4f7f\u7528\u3002",(0,p.kt)("a",{parentName:"p",href:"/docs/guide/concept/customComponent#%E7%BB%84%E4%BB%B6%E5%AE%89%E8%A3%85%E7%B1%BB%E5%9E%8B"},"\u7ec4\u4ef6\u5b89\u88c5"),"\u9700\u9009\u62e9\u9875\u9762\u7c7b\u578b\uff0c\u9009\u62e9\u540e\u624d\u4f1a\u5728\u5bf9\u5e94\u7684\u9875\u9762\u8bbe\u8ba1\u5668\u4e2d\u770b\u5230\u5bf9\u5e94\u7684\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u3002\n",(0,p.kt)("strong",{parentName:"p"},"\u64cd\u4f5c\u6b65\u9aa4\uff1a")),(0,p.kt)("ol",null,(0,p.kt)("li",{parentName:"ol"},"\u8868\u5355\u8bbe\u8ba1\u9875 >> \u7ec4\u4ef6\u5e93 >> \u81ea\u5b9a\u4e49\u7ec4\u4ef6 >> \u7ec4\u4ef6\u7ba1\u7406\u3002\uff08\u64cd\u4f5c\u5982\u4e0b\u56fe\u6240\u793a\uff09")),(0,p.kt)("p",null,(0,p.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i1/O1CN01r3hGAI20enhADo9Lf_!!6000000006875-2-tps-959-531.png_.webp",alt:null})),(0,p.kt)("ol",{start:2},(0,p.kt)("li",{parentName:"ol"},"\u7ec4\u4ef6\u7ba1\u7406\u9875\u9762 >> \u7ec4\u4ef6\u5217\u8868 >> \u9009\u62e9\u9700\u8981\u5b89\u88c5\u7684\u81ea\u5b9a\u4e49\u7ec4\u4ef6 >> \u5b89\u88c5\u3002\uff08\u64cd\u4f5c\u5982\u4e0b\u56fe\u6240\u793a\uff09")),(0,p.kt)("p",null,(0,p.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i4/O1CN015vfPeL1RhzuUsGbzE_!!6000000002144-2-tps-959-531.png_.webp",alt:null})),(0,p.kt)("ol",{start:3},(0,p.kt)("li",{parentName:"ol"},"\u9009\u62e9",(0,p.kt)("a",{parentName:"li",href:"/docs/guide/concept/customComponent#%E7%BB%84%E4%BB%B6%E7%89%88%E6%9C%AC%E8%AF%B4%E6%98%8E"},"\u5b89\u88c5\u7248\u672c"),"\u53ca",(0,p.kt)("a",{parentName:"li",href:"/docs/guide/concept/customComponent#%E7%BB%84%E4%BB%B6%E5%AE%89%E8%A3%85%E7%B1%BB%E5%9E%8B"},"\u5b89\u88c5\u8303\u56f4")," >> \u5b89\u88c5\u3002\uff08\u64cd\u4f5c\u5982\u4e0b\u56fe\u6240\u793a\uff09")),(0,p.kt)("p",null,(0,p.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i3/O1CN01ZePgeG1JRx6kuEq0c_!!6000000001026-2-tps-959-531.png_.webp",alt:null})),(0,p.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,p.kt)("div",{parentName:"div",className:"admonition-heading"},(0,p.kt)("h5",{parentName:"div"},(0,p.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,p.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,p.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),(0,p.kt)("div",{parentName:"div",className:"admonition-content"},(0,p.kt)("ol",{parentName:"div"},(0,p.kt)("li",{parentName:"ol"},"\u4e3a\u4fdd\u8bc1\u7ebf\u4e0a\u4f7f\u7528\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u7684\u7a33\u5b9a\u6027\uff0c\u5728\u7ec4\u4ef6\u7248\u672c\u9009\u62e9\u65f6\uff0c",(0,p.kt)("strong",{parentName:"li"},"\u8bf7\u52a1\u5fc5\u5b89\u88c5 1.x.x \u53d1\u5e03\u540e\u7684\u6b63\u5f0f\u7248\u672c\u3002")),(0,p.kt)("li",{parentName:"ol"},"\u4e3a\u4fdd\u8bc1\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u53ef\u4ee5\u5728\u9875\u9762\u8bbe\u8ba1\u5668\u4e2d\u4f7f\u7528\uff0c\u5728\u9009\u62e9\u5b89\u88c5\u8303\u56f4\u65f6\uff0c\u53ea\u6709\u9009\u62e9\u4e86\u5bf9\u5e94\u7684\u9875\u9762\u7c7b\u578b\u540e\uff0c\u624d\u4f1a\u5728\u5bf9\u5e94\u7684\u9875\u9762\u8bbe\u8ba1\u5668\u4e2d\u5219\u4f1a\u770b\u5230\u5bf9\u5e94\u5b89\u88c5\u7684\u7ec4\u4ef6\u3002")))),(0,p.kt)("h3",{id:"\u6b65\u9aa4-4\u4f7f\u7528\u81ea\u5b9a\u4e49\u7ec4\u4ef6"},"\u6b65\u9aa4 4\uff1a\u4f7f\u7528\u81ea\u5b9a\u4e49\u7ec4\u4ef6"),(0,p.kt)("p",null,"\u901a\u8fc7\u4e0a\u8ff0\u6b65\u9aa4\uff0c\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u5df2\u7ecf\u88ab\u5b89\u88c5\u81f3\u9875\u9762\u7ec4\u4ef6\u5e93\u7684\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u7c7b\u76ee\u4e2d\uff0c\u901a\u8fc7\u4e0b\u8ff0\u6b65\u9aa4\u5373\u53ef\u4f7f\u7528\u3002\n",(0,p.kt)("strong",{parentName:"p"},"\u64cd\u4f5c\u6b65\u9aa4\uff1a")),(0,p.kt)("ol",null,(0,p.kt)("li",{parentName:"ol"},"\u8868\u5355\u8bbe\u8ba1\u9875 >> \u7ec4\u4ef6\u5e93 >> \u81ea\u5b9a\u4e49\u7ec4\u4ef6 >> \u9009\u62e9\u9700\u8981\u7684\u7ec4\u4ef6 >> \u62d6\u62fd\u81f3\u753b\u5e03\u5373\u53ef\u3002\uff08\u64cd\u4f5c\u5982\u4e0b\u56fe\u6240\u793a\uff09")),(0,p.kt)("p",null,(0,p.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i2/O1CN01IYfbLx1XFUxWZzTVC_!!6000000002894-2-tps-959-530.png_.webp",alt:null})),(0,p.kt)("h3",{id:"\u6b65\u9aa4-5\u67e5\u770b\u4fee\u6539\u7ec4\u4ef6\u4fe1\u606f"},"\u6b65\u9aa4 5\uff1a\u67e5\u770b/\u4fee\u6539\u7ec4\u4ef6\u4fe1\u606f"),(0,p.kt)("p",null,"\u5728\u7ec4\u4ef6\u4f7f\u7528\u7684\u8fc7\u7a0b\u4e2d\uff0c\u5982\u9700\u5bf9\u7ec4\u4ef6\u7684\u7f29\u7565\u56fe\u3001\u7ec4\u4ef6\u7684\u8bf4\u660e\u6587\u6863\u5730\u5740\u3001\u7ec4\u4ef6\u7684\u63cf\u8ff0\u4fe1\u606f\u8fdb\u884c\u4fee\u6539\uff0c\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u8def\u5f84\u8fdb\u884c\u64cd\u4f5c\u3002\n",(0,p.kt)("strong",{parentName:"p"},"\u64cd\u4f5c\u6b65\u9aa4")),(0,p.kt)("ol",null,(0,p.kt)("li",{parentName:"ol"},"\u5e94\u7528\u8bbe\u7f6e >> \u7ec4\u4ef6\u7ba1\u7406 >> \u7ec4\u4ef6\u4e2d\u5fc3\uff08\u64cd\u4f5c\u5982\u4e0b\u56fe\u6240\u793a\uff09")),(0,p.kt)("p",null,(0,p.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i4/O1CN0199ILCG1xeOUuAjB7y_!!6000000006468-2-tps-959-531.png_.webp",alt:null})),(0,p.kt)("ol",{start:2},(0,p.kt)("li",{parentName:"ol"},"\u9009\u62e9\u9700\u8981\u67e5\u770b/\u4fee\u6539\u8be6\u60c5\u7684\u7ec4\u4ef6 >> \u8be6\u60c5\uff08\u64cd\u4f5c\u5982\u4e0b\u56fe\u6240\u793a\uff09")),(0,p.kt)("p",null,(0,p.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i2/O1CN01ukcLky1kungCIAxMx_!!6000000004744-2-tps-959-530.png_.webp",alt:null})),(0,p.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,p.kt)("div",{parentName:"div",className:"admonition-heading"},(0,p.kt)("h5",{parentName:"div"},(0,p.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,p.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,p.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,p.kt)("div",{parentName:"div",className:"admonition-content"},(0,p.kt)("p",{parentName:"div"},(0,p.kt)("strong",{parentName:"p"},"\u8bf4\u660e\uff1a"),"\u7ec4\u4ef6\u8be6\u60c5\u9875\u9762\u5206\u4e3a",(0,p.kt)("strong",{parentName:"p"},"\u57fa\u672c\u4fe1\u606f\u3001\u53d1\u5e03\u4fe1\u606f"),"\u53ca",(0,p.kt)("strong",{parentName:"p"},"\u7ba1\u7406\u5458"),"\u4e09\u4e2a\u6a21\u5757\uff08\u5982\u4e0b\u56fe\u6240\u793a\uff09\uff0c\u5176\u4e2d:"),(0,p.kt)("ol",{parentName:"div"},(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("strong",{parentName:"li"},"\u57fa\u672c\u4fe1\u606f"),"\uff1a\u70b9\u51fb\u300c\u7f16\u8f91\u300d\u53ef\u4ee5\u5bf9\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u7684\u7f29\u7565\u56fe\u3001\u5e2e\u52a9\u6587\u6863\u5730\u5740\u3001\u7ec4\u4ef6\u63cf\u8ff0\u8fdb\u884c\u4fee\u6539\uff0c\u5176\u4f59\u914d\u7f6e\u4e3a\u7ec4\u4ef6\u521b\u5efa\u4e4b\u521d\u8fdb\u884c\u914d\u7f6e\u4e14\u4e0d\u53ef\u4fee\u6539\u7684\u3002"),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("strong",{parentName:"li"},"\u53d1\u5e03\u4fe1\u606f"),"\uff1a\u53ef\u4ee5\u67e5\u770b\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u7684\u8fed\u4ee3\u8bb0\u5f55\uff0c\u5305\u62ec\u7ec4\u4ef6\u7248\u672c\u53ca\u5bf9\u5e94\u7684\u53d1\u5e03\u8bf4\u660e\u3002"),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("strong",{parentName:"li"},"\u7ba1\u7406\u5458\uff08\u62e5\u6709\u5bf9\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u8fdb\u884c\u5f00\u53d1\u8c03\u8bd5\u6743\u9650\uff0c\u9ed8\u8ba4\u4e3a\u7ec4\u4ef6\u521b\u5efa\u8005\uff09"),"\uff1a\u53ef\u4ee5\u5bf9\u7ba1\u7406\u5458\u8fdb\u884c\u6dfb\u52a0\u6216\u5220\u9664\u64cd\u4f5c\uff0c\u7528\u4e8e\u6743\u9650\u7684\u7ba1\u7406\u3002")))),(0,p.kt)("p",null,(0,p.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i1/O1CN01lpaGZH1E8eKqIs1ri_!!6000000000307-2-tps-959-530.png_.webp",alt:null})),(0,p.kt)("h2",{id:"\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u5c5e\u6027"},"\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u5c5e\u6027"),(0,p.kt)("p",null,"\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u5728\u652f\u6301\u5bf9\u5b9c\u642d\u73b0\u6709\u7ec4\u4ef6\u8fdb\u884c\u6539\u9020\u7684\u540c\u65f6\uff0c\u4e5f\u652f\u6301\u5bf9\u751f\u6210\u7684\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u8fdb\u884c\u5c5e\u6027( propTypes )\u7684\u81ea\u5b9a\u4e49\u64cd\u4f5c\u3002\u4f7f\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u66f4\u52a0\u8d34\u5408\u5f00\u53d1\u8005\u7684\u65e5\u5e38\u5de5\u4f5c\u573a\u666f\u3001\u7b26\u5408\u5f00\u53d1\u8005\u65e5\u5e38\u5de5\u4f5c\u4e60\u60ef\u7684\u540c\u65f6\uff0c\u4f7f\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u62e5\u6709\u66f4\u9ad8\u7684\u7075\u6d3b\u6027\u53ca\u53ef\u5b9a\u5236\u6027\u3002"),(0,p.kt)("h3",{id:"\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u5c5e\u6027\u914d\u7f6e\u5165\u53e3"},"\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u5c5e\u6027\u914d\u7f6e\u5165\u53e3"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"\u8def\u5f84\uff1a"),"\u4f4e\u4ee3\u7801\u7ec4\u4ef6\u8bbe\u8ba1\u5668 >> \u9009\u4e2d\u753b\u5e03\u4e2d\u300c\u4f4e\u4ee3\u7801\u4e1a\u52a1\u7ec4\u4ef6\u300d>> \u53f3\u4fa7\u5c5e\u6027\uff08\u8def\u5f84\u5982\u4e0b\u56fe\u6240\u793a\uff09\n",(0,p.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i1/O1CN01BBSg7K26RPoSYbEOS_!!6000000007658-2-tps-959-531.png_.webp",alt:null})),(0,p.kt)("h3",{id:"\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u5c5e\u6027\u914d\u7f6e\u8bf4\u660e"},"\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u5c5e\u6027\u914d\u7f6e\u8bf4\u660e"),(0,p.kt)("p",null,"\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u5c5e\u6027\u5206\u4e3a",(0,p.kt)("strong",{parentName:"p"},"\u53cc\u7aef\u642d\u5efa\u3001\u5c5e\u6027\u5b9a\u4e49\uff08 "),(0,p.kt)("inlineCode",{parentName:"p"},"propTypes"),(0,p.kt)("strong",{parentName:"p"},"\uff09\u3001\u751f\u547d\u5468\u671f"),"\u53ca",(0,p.kt)("strong",{parentName:"p"},"\u552f\u4e00\u6807\u8bc6"),"\u56db\u4e2a\u6a21\u5757\u3002\u5176\u4e2d\uff0c"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("strong",{parentName:"li"},"\u53cc\u7aef\u642d\u5efa\uff1a"),"\u53cc\u7aef\u642d\u5efa\u4e3a\u914d\u7f6e\u5f00\u5173\uff0c\u5f00\u542f\u5373\u53ef\u8fdb\u884c PC \u7aef\u53ca\u79fb\u52a8\u7aef\u5b8c\u5168\u5206\u79bb\uff0c\u5206\u522b\u8bbe\u8ba1\uff0c\u4ee5\u6ee1\u8db3\u53cc\u7aef\u9002\u914d\u7684\u4e2a\u6027\u4e1a\u52a1\u9700\u6c42\u3002"),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("strong",{parentName:"li"},"\u5c5e\u6027\u5b9a\u4e49\uff08 propTypes \uff09\uff1a"),"\u53ef\u5bf9\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u7684",(0,p.kt)("strong",{parentName:"li"},"\u6807\u9898"),"\u3001",(0,p.kt)("strong",{parentName:"li"},"\u540d\u79f0"),"\u3001",(0,p.kt)("strong",{parentName:"li"},"\u7c7b\u578b\uff08\u5373\u6570\u636e\u683c\u5f0f\uff09"),"\u3001",(0,p.kt)("strong",{parentName:"li"},"\u9ed8\u8ba4\u503c"),"\u7b49\u57fa\u672c\u5c5e\u6027\u8fdb\u884c\u81ea\u5b9a\u4e49\uff0c\u4e5f\u53ef\u5bf9\u7ec4\u4ef6",(0,p.kt)("strong",{parentName:"li"},"\u662f\u5426\u9690\u85cf\uff08\u7ec4\u4ef6\u9690\u85cf\u4e0e\u5426\u7684\u72b6\u6001\uff09"),"\u3001",(0,p.kt)("strong",{parentName:"li"},"\u5f53\u53d8\u5316\u65f6\uff08\u7ec4\u4ef6\u663e\u793a\u503c\u7684\u4e0d\u540c\uff09"),"\u8fdb\u884c\u4e8b\u4ef6\u7ed1\u5b9a\uff0c\u4ee5\u6ee1\u8db3\u591a\u79cd\u591a\u6837\u7684\u4e1a\u52a1\u9700\u6c42\u3002\u8be6\u7ec6\u4ecb\u7ecd\u8bf7\u53c2\u89c1\uff0c",(0,p.kt)("a",{parentName:"li",href:"https://www.yuque.com/yida/support/zyrrlb?view=doc_embed"},"\u7ec4\u4ef6\u5c5e\u6027\u914d\u7f6e"),"\u3002"),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("strong",{parentName:"li"},"\u751f\u547d\u5468\u671f\uff1a"),"\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u7684\u751f\u547d\u5468\u671f\u5206\u4e3a",(0,p.kt)("strong",{parentName:"li"},"\u7ec4\u4ef6\u6e32\u67d3\u5b8c\u6210\uff08"),(0,p.kt)("inlineCode",{parentName:"li"},"componentDidMount"),(0,p.kt)("strong",{parentName:"li"},"\uff09"),"\u3001",(0,p.kt)("strong",{parentName:"li"},"\u7ec4\u4ef6\u66f4\u65b0\u5b8c\u6210\uff08"),(0,p.kt)("inlineCode",{parentName:"li"},"componentDidUpdate"),(0,p.kt)("strong",{parentName:"li"},"\uff09"),"\u3001",(0,p.kt)("strong",{parentName:"li"},"\u7ec4\u4ef6\u6355\u6349\u9519\u8bef\uff08"),(0,p.kt)("inlineCode",{parentName:"li"},"componentDidCatch"),(0,p.kt)("strong",{parentName:"li"},"\uff09"),"\u3001",(0,p.kt)("strong",{parentName:"li"},"\u7ec4\u4ef6\u9500\u6bc1\u524d\uff08"),(0,p.kt)("inlineCode",{parentName:"li"},"componentWillUnmount"),(0,p.kt)("strong",{parentName:"li"},"\uff09"),"\u56db\u4e2a\u9636\u6bb5\uff0c\u5728\u4e0d\u540c\u7684\u751f\u547d\u5468\u671f\u4e2d\u8fdb\u884c\u4e0d\u540c\u7684\u903b\u8f91\u7f16\u5199\uff0c\u4ee5\u6ee1\u8db3\u590d\u6742\u7684\u4e1a\u52a1\u9700\u6c42\u3002"),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("strong",{parentName:"li"},"\u552f\u4e00\u6807\u8bc6\uff1a"),"\u540c\u5b9c\u642d\u666e\u901a\u7ec4\u4ef6\u4e00\u6837\uff0c\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u4e5f\u62e5\u6709\u552f\u4e00\u6807\u8bc6\u5c5e\u6027\uff0c\u4f5c\u4e3a\u7ec4\u4ef6\u7684\u552f\u4e00\u8bc6\u522b\u7801\uff0c\u7531\u7cfb\u7edf\u81ea\u52a8\u751f\u6210\uff0c\u4e00\u822c\u4e0d\u9700\u8981\u66f4\u6539\u3002\u7528\u4e8e\u5b9c\u642d\u540e\u53f0\u5b58\u50a8\u6570\u636e\uff0c\u4ee3\u7801\u7ed1\u5b9a\u7b49\u3002")),(0,p.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,p.kt)("div",{parentName:"div",className:"admonition-heading"},(0,p.kt)("h5",{parentName:"div"},(0,p.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,p.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,p.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),(0,p.kt)("div",{parentName:"div",className:"admonition-content"},(0,p.kt)("p",{parentName:"div"},(0,p.kt)("strong",{parentName:"p"},"\u7279\u522b\u6ce8\u610f\uff1a")),(0,p.kt)("ul",{parentName:"div"},(0,p.kt)("li",{parentName:"ul"},"\u7ec4\u4ef6\u7684",(0,p.kt)("strong",{parentName:"li"},"\u552f\u4e00\u6807\u8bc6\uff08 fiedId \uff09\u662f\u5b9c\u642d\u6307\u5411\u8be5\u7ec4\u4ef6\u7684\u552f\u4e00\u6807\u8bc6\u7801"),"\uff0c\u66f4\u6539\u6807\u8bc6\u53ef\u80fd\u4f1a\u5f71\u54cd\u5230\u8be5\u7ec4\u4ef6\u4e0a\u6240\u4f7f\u7528\u7684\u516c\u5f0f\u3001\u6570\u636e\u5b58\u50a8\uff08\u6570\u636e\u4e5f\u53ef\u80fd\u4f1a\u51fa\u73b0\u4e22\u5931\uff09\uff0cJS \u51fd\u6570\u4fa7\u7684\u6307\u5411\u7b49\u3002",(0,p.kt)("strong",{parentName:"li"},"\u6211\u4eec\u5f3a\u70c8\u4e0d\u5efa\u8bae\u4f60\u53bb\u4fee\u6539\u7ec4\u4ef6\u7684\u552f\u4e00\u6807\u8bc6\u5c5e\u6027\uff01")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("strong",{parentName:"li"},"\u5982\u679c\u4f60\u575a\u6301\u8981\u4fee\u6539\u8be5\u6807\u8bc6\uff08\u76ee\u524d\u53ea\u80fd\u901a\u8fc7 "),(0,p.kt)("a",{parentName:"li",href:"https://www.yuque.com/yida/topics/2396"},(0,p.kt)("strong",{parentName:"a"},"schema \u5bfc\u5165\u7684\u65b9\u5f0f")),(0,p.kt)("strong",{parentName:"li"},"\uff0c\u5982\u679c\u4f60\u9009\u62e9\u4f7f\u7528\u6b64\u65b9\u6cd5\u6765\u4fee\u6539\u7ec4\u4ef6\u552f\u4e00\u6807\u8bc6\uff0c\u90a3\u4e48\u8868\u793a\u4f60\u5df2\u7ecf\u660e\u786e\u8fd9\u4e48\u505a\u7684\u540e\u679c\u4ee5\u53ca\u8868\u660e\u81ea\u5df1\u4f1a\u72ec\u81ea\u627f\u62c5\u8fd9\u4e2a\u540e\u679c\uff0c\u5b9c\u642d\u6709\u6743\u4e0d\u5bf9\u8be5\u540e\u679c\u8d1f\u4efb\u4f55\u8d23\u4efb\uff0c\u611f\u8c22\u4f60\u7684\u7406\u89e3\u548c\u652f\u6301\u3002"))))))}d.isMDXComponent=!0}}]);