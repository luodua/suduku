(function(){"use strict";var A={7091:function(A,e,n){var w=n(9963),t=n(4241),g=n(6252),C=n.p+"img/sudoku.babf5217.png",d="data:image/png;base64,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";const o={id:"anchor-0",style:{background:"#ececec",padding:"30px"}},a=(0,g._)("img",{style:{width:"800px",height:"800px",opacity:"0.8"},alt:"example",src:C},null,-1),f=(0,g._)("div",{style:{height:"50px"}},null,-1),c=(0,g._)("div",{style:{height:"10px"}},null,-1),l=(0,g._)("div",{style:{height:"10px"}},null,-1),u={id:"anchor-1",style:{display:"none",background:"#ececec",padding:"30px"}},B=(0,g._)("span",{style:{fontSize:"50px"}},"难度选择",-1),D=(0,g._)("div",{style:{height:"50px"}},null,-1),r=(0,g._)("div",{style:{height:"10px"}},null,-1),E={id:"anchor-2",style:{display:"none",background:"#ececec",padding:"30px"}},Q=(0,g._)("span",{style:{fontSize:"50px"}},"第1题/共9题",-1),P=(0,g._)("canvas",{style:{"border-width":"1px","border-style":"solid"},id:"canvas",width:"830",height:"830"},null,-1),i=(0,g._)("img",{src:d,id:"image",style:{display:"none"}},null,-1),s=(0,g._)("div",{style:{height:"10px"}},null,-1),y=(0,g._)("div",{style:{height:"10px"}},null,-1),I=(0,g._)("div",{style:{height:"10px"}},null,-1);function k(A,e,n,w,t,C){const d=(0,g.up)("a-col"),k=(0,g.up)("a-row"),h=(0,g.up)("a-button"),J=(0,g.up)("a-card"),m=(0,g.up)("LeftOutlined"),v=(0,g.up)("StarFilled"),H=(0,g.up)("SmileTwoTone"),M=(0,g.up)("HeartTwoTone"),p=(0,g.up)("CheckCircleTwoTone"),z=(0,g.up)("a-input");return(0,g.wg)(),(0,g.iD)(g.HY,null,[(0,g._)("div",o,[(0,g.Wm)(k,null,{default:(0,g.w5)((()=>[(0,g.Wm)(d,{span:4}),(0,g.Wm)(d,{span:16},{default:(0,g.w5)((()=>[(0,g.Wm)(J,{title:"数独游戏",bordered:!1,style:{width:"1000px",height:"1200px"},hoverable:"true"},{default:(0,g.w5)((()=>[(0,g.Wm)(k,{justify:"center"},{default:(0,g.w5)((()=>[a])),_:1}),f,(0,g.Wm)(k,{justify:"center"},{default:(0,g.w5)((()=>[(0,g.Wm)(h,{shape:"round",size:"large",onClick:w.choose},{default:(0,g.w5)((()=>[(0,g.Uk)(" 开始游戏 ")])),_:1},8,["onClick"])])),_:1}),(0,g.Wm)(k,{justify:"center"},{default:(0,g.w5)((()=>[c])),_:1}),(0,g.Wm)(k,{justify:"center"},{default:(0,g.w5)((()=>[(0,g.Wm)(h,{shape:"round",size:"large"},{default:(0,g.w5)((()=>[(0,g.Uk)(" 退出游戏")])),_:1})])),_:1}),(0,g.Wm)(k,{justify:"center"},{default:(0,g.w5)((()=>[l])),_:1}),(0,g.Wm)(k,{justify:"center"},{default:(0,g.w5)((()=>[(0,g.Wm)(h,{shape:"round",size:"large"},{default:(0,g.w5)((()=>[(0,g.Uk)(" 分享游戏")])),_:1})])),_:1})])),_:1})])),_:1}),(0,g.Wm)(d,{span:4})])),_:1})]),(0,g._)("div",u,[(0,g.Wm)(k,null,{default:(0,g.w5)((()=>[(0,g.Wm)(d,{span:4}),(0,g.Wm)(d,{span:16},{default:(0,g.w5)((()=>[(0,g.Wm)(J,{title:"数独游戏",bordered:!1,style:{width:"1000px",height:"1200px"},hoverable:"true"},{default:(0,g.w5)((()=>[(0,g.Wm)(k,{justify:"center"},{default:(0,g.w5)((()=>[(0,g.Wm)(d,{span:4},{default:(0,g.w5)((()=>[(0,g.Wm)(m,{style:{fontSize:"80px"}})])),_:1}),(0,g.Wm)(d,{span:16},{default:(0,g.w5)((()=>[B])),_:1}),(0,g.Wm)(d,{span:4})])),_:1}),(0,g.Wm)(k,null,{default:(0,g.w5)((()=>[(0,g.Wm)(v)])),_:1}),(0,g.Wm)(k,null,{default:(0,g.w5)((()=>[(0,g.Wm)(v),(0,g.Wm)(v)])),_:1}),(0,g.Wm)(k,null,{default:(0,g.w5)((()=>[(0,g.Wm)(v),(0,g.Wm)(v),(0,g.Wm)(v)])),_:1}),D,(0,g.Wm)(k,{justify:"center"},{default:(0,g.w5)((()=>[(0,g.Wm)(h,{shape:"round",size:"large",onClick:w.gamepage},{default:(0,g.w5)((()=>[(0,g.Uk)(" 简单模式 ")])),_:1},8,["onClick"])])),_:1}),(0,g.Wm)(k,{justify:"center"},{default:(0,g.w5)((()=>[r])),_:1}),(0,g.Wm)(k,{justify:"center"},{default:(0,g.w5)((()=>[(0,g.Wm)(h,{shape:"round",size:"large",onClick:w.back},{default:(0,g.w5)((()=>[(0,g.Uk)("　返回　")])),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1}),(0,g.Wm)(d,{span:4})])),_:1})]),(0,g._)("div",E,[(0,g.Wm)(k,null,{default:(0,g.w5)((()=>[(0,g.Wm)(d,{span:4}),(0,g.Wm)(d,{span:16},{default:(0,g.w5)((()=>[(0,g.Wm)(J,{title:"数独游戏",bordered:!1,style:{width:"1000px",height:"1200px"},hoverable:"true"},{default:(0,g.w5)((()=>[(0,g.Wm)(k,{justify:"center"},{default:(0,g.w5)((()=>[(0,g.Wm)(d,{span:4},{default:(0,g.w5)((()=>[(0,g.Wm)(m,{style:{fontSize:"80px"}})])),_:1}),(0,g.Wm)(d,{span:16},{default:(0,g.w5)((()=>[Q])),_:1}),(0,g.Wm)(d,{span:4})])),_:1}),(0,g.Wm)(k,{justify:"center"},{default:(0,g.w5)((()=>[P,i])),_:1}),(0,g.Wm)(k,{justify:"center"},{default:(0,g.w5)((()=>[s])),_:1}),(0,g.Wm)(k,{justify:"center"},{default:(0,g.w5)((()=>[(0,g.Wm)(h,{shape:"round",size:"large"},{default:(0,g.w5)((()=>[(0,g.Uk)(" 上一题 ")])),_:1})])),_:1}),(0,g.Wm)(k,{justify:"center"},{default:(0,g.w5)((()=>[y])),_:1}),(0,g.Wm)(k,{justify:"center"},{default:(0,g.w5)((()=>[(0,g.Wm)(h,{shape:"round",size:"large"},{default:(0,g.w5)((()=>[(0,g.Uk)(" 下一题 ")])),_:1})])),_:1}),(0,g.Wm)(k,{justify:"center"},{default:(0,g.w5)((()=>[I])),_:1}),(0,g.Wm)(k,{justify:"center"},{default:(0,g.w5)((()=>[(0,g.Wm)(h,{shape:"round",size:"large",onClick:w.back},{default:(0,g.w5)((()=>[(0,g.Uk)(" 结束游戏 ")])),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1}),(0,g.Wm)(d,{span:4})])),_:1})]),(0,g.Wm)(h,{type:"primary"},{default:(0,g.w5)((()=>[(0,g.Wm)(H),(0,g.Wm)(M,{twoToneColor:"#eb2f96"}),(0,g.Wm)(p,{twoToneColor:"#52c41a"}),(0,g.Uk)(" List ")])),_:1}),(0,g.Wm)(h,null,{default:(0,g.w5)((()=>[(0,g.Uk)("Default Button")])),_:1}),(0,g.Wm)(z)],64)}var h=n(6154);const J=[{name:"Name",dataIndex:"name",key:"name"},{title:"时长",dataIndex:"age",key:"age"},{title:"Address",dataIndex:"address",key:"address"},{title:"Tags",key:"tags",dataIndex:"tags"},{title:"Action",key:"action"}],m=[{key:"1",name:"John Brown",age:32,address:"New York No. 1 Lake Park",tags:["nice","developer"]},{key:"2",name:"Jim Green",age:42,address:"London No. 1 Lake Park",tags:["loser"]},{key:"3",name:"Joe Black",age:32,address:"Sidney No. 1 Lake Park",tags:["cool","teacher"]}];var v={name:"App",setup(){const A=()=>{var A=document.getElementById("anchor-0");A.style.display="block";var e=document.getElementById("anchor-1");e.style.display="none";var n=document.getElementById("anchor-2");n.style.display="none"},e=()=>{var A=document.getElementById("anchor-1");A.style.display="block";var e=document.getElementById("anchor-0");e.style.display="none"},n=()=>{var A="/api",e="123456789123456789123456789123456789123456789123456789123456789123456789123456789";h.Z.get(A,{params:{}}).then((function(A){console.log(A.request.responseText),e=A.request.responseText;var n=document.getElementById("anchor-2");n.style.display="block";var w=document.getElementById("anchor-1");w.style.display="none";var t=document.getElementById("canvas"),g=t.getContext("2d"),C=document.getElementById("image");g.drawImage(C,0,0);g.measureText(e).height;g.font="40px Arial";var d=0,o=0,a=0,f=0,c=0;for(c=0;c<3;c++)for(a=0;a<3;a++)for(f=0;f<3;f++)for(o=0;o<3;o++)g.fillText(e[d],50+85*o+271*f,80+85*a+271*c),d++})).catch((function(A){console.log(A)}))};return{columns:J,data:m,back:A,choose:e,gamepage:n}},components:{}},H=n(3744);const M=(0,H.Z)(v,[["render",k]]);var p=M,z=(n(1849),n(3424));const O=(0,w.ri)(p);O.config.productionTip=!1;for(const T in z)O.component(T,z[T]);O.use(t.ZP,h.Z).mount("#app")}},e={};function n(w){var t=e[w];if(void 0!==t)return t.exports;var g=e[w]={exports:{}};return A[w].call(g.exports,g,g.exports,n),g.exports}n.m=A,function(){var A=[];n.O=function(e,w,t,g){if(!w){var C=1/0;for(f=0;f<A.length;f++){w=A[f][0],t=A[f][1],g=A[f][2];for(var d=!0,o=0;o<w.length;o++)(!1&g||C>=g)&&Object.keys(n.O).every((function(A){return n.O[A](w[o])}))?w.splice(o--,1):(d=!1,g<C&&(C=g));if(d){A.splice(f--,1);var a=t();void 0!==a&&(e=a)}}return e}g=g||0;for(var f=A.length;f>0&&A[f-1][2]>g;f--)A[f]=A[f-1];A[f]=[w,t,g]}}(),function(){n.n=function(A){var e=A&&A.__esModule?function(){return A["default"]}:function(){return A};return n.d(e,{a:e}),e}}(),function(){n.d=function(A,e){for(var w in e)n.o(e,w)&&!n.o(A,w)&&Object.defineProperty(A,w,{enumerable:!0,get:e[w]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(A){if("object"===typeof window)return window}}()}(),function(){n.o=function(A,e){return Object.prototype.hasOwnProperty.call(A,e)}}(),function(){n.r=function(A){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(A,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(A,"__esModule",{value:!0})}}(),function(){n.p=""}(),function(){var A={143:0};n.O.j=function(e){return 0===A[e]};var e=function(e,w){var t,g,C=w[0],d=w[1],o=w[2],a=0;if(C.some((function(e){return 0!==A[e]}))){for(t in d)n.o(d,t)&&(n.m[t]=d[t]);if(o)var f=o(n)}for(e&&e(w);a<C.length;a++)g=C[a],n.o(A,g)&&A[g]&&A[g][0](),A[g]=0;return n.O(f)},w=self["webpackChunksdyx"]=self["webpackChunksdyx"]||[];w.forEach(e.bind(null,0)),w.push=e.bind(null,w.push.bind(w))}();var w=n.O(void 0,[998],(function(){return n(7091)}));w=n.O(w)})();
//# sourceMappingURL=app.234bde67.js.map