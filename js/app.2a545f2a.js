(function(){"use strict";var t={3633:function(t,n,e){var o=e(5130),i=e(6768);const r={id:"app"};function a(t,n,e,o,a,s){const l=(0,i.g2)("TextAnimation");return(0,i.uX)(),(0,i.CE)("div",r,[(0,i.bF)(l)])}var s=e(4232);const l={class:"text-block",ref:"textBlock"},c={class:"button-group"};function u(t,n,e,o,r,a){return(0,i.uX)(),(0,i.CE)("div",{class:(0,s.C4)(["container",{dark:r.isDarkMode}])},[(0,i.Lk)("div",l,null,512),(0,i.Lk)("div",c,[(0,i.Lk)("button",{onClick:n[0]||(n[0]=(...t)=>a.typeAnimation&&a.typeAnimation(...t))},"Type Animation"),(0,i.Lk)("button",{onClick:n[1]||(n[1]=(...t)=>a.scrambleAnimation&&a.scrambleAnimation(...t))},"Scramble Animation"),(0,i.Lk)("button",{onClick:n[2]||(n[2]=(...t)=>a.flyInAnimation&&a.flyInAnimation(...t))},"Fly-In Animation"),(0,i.Lk)("button",{onClick:n[3]||(n[3]=(...t)=>a.blurAnimation&&a.blurAnimation(...t))},"Blur Animation"),(0,i.Lk)("button",{onClick:n[4]||(n[4]=(...t)=>a.boldAnimation&&a.boldAnimation(...t))},"Bold Animation")]),(0,i.Lk)("button",{class:"dark-mode-toggle",onClick:n[5]||(n[5]=(...t)=>a.toggleDarkMode&&a.toggleDarkMode(...t))},[(0,i.Lk)("i",{class:(0,s.C4)(r.isDarkMode?"fas fa-sun":"fas fa-moon")},null,2),(0,i.eW)(" "+(0,s.v_)(a.darkModeText),1)])],2)}var d=e(6059),p=e(2072);d.os.registerPlugin(p.J);var f={name:"TextAnimation",data(){return{text:"This is a sample block of text that will be animated using different effects. Some words are bolded for emphasis.",displayText:"",isDarkMode:!1,boldWords:["sample","effects","emphasis"]}},computed:{darkModeText(){return this.isDarkMode?"Light":"Dark"}},mounted(){this.displayText=this.text},methods:{toggleDarkMode(){this.isDarkMode=!this.isDarkMode},boldAnimation(){const t=this.$refs.textBlock,n=this.text.split(" ");t.innerHTML="",n.forEach(((e,o)=>{const i=document.createElement("span");if(i.style.display="inline-block",i.style.whiteSpace="pre",i.innerHTML=this.boldWords.includes(e.replace(/[^\w]/g,""))?`<strong>${e}</strong>`:e,t.appendChild(i),o<n.length-1&&t.appendChild(document.createTextNode(" ")),this.boldWords.includes(e.replace(/[^\w]/g,""))){const t=i.querySelector("strong"),n=d.os.timeline();n.fromTo(t,{scale:0,opacity:0,transformOrigin:"center"},{scale:10,opacity:1,duration:1,ease:"power1.inOut"}).to(t,{scale:1,duration:1,ease:"power1.inOut"})}}))},typeAnimation(){this.displayText="",d.os.to(this.$refs.textBlock,{duration:5,text:this.text,ease:"none"})},scrambleAnimation(){d.os.fromTo(this.$refs.textBlock,{text:{value:this.randomString(this.text.length),scrambleText:!0}},{duration:7,text:{value:this.text,scrambleText:!0},ease:"power2"})},flyInAnimation(){const t=this.$refs.textBlock;t.innerHTML="";const n=this.text.split(" ");n.forEach(((e,o)=>{const i=document.createElement("span");if(i.style.display="inline-block",i.style.whiteSpace="nowrap",t.appendChild(i),e.split("").forEach(((t,n)=>{const e=document.createElement("span");e.textContent=t,e.style.display="inline-block",i.appendChild(e),d.os.fromTo(e,{opacity:0,x:1e3*Math.random()-500,y:1e3*Math.random()-500,rotation:720*Math.random()-360},{opacity:1,x:0,y:0,rotation:0,duration:3,delay:.05*(o+n),ease:"power4.out"})})),o<n.length-1){const n=document.createElement("span");n.innerHTML="&nbsp;",t.appendChild(n)}}))},blurAnimation(){const t=this.$refs.textBlock;t.innerHTML=this.text,d.os.fromTo(t,{filter:"blur(20px)"},{duration:3,filter:"blur(0px)",ease:"power4.out"})},randomString(t){const n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";let e="";for(let o=0;o<t;o++)e+=n.charAt(Math.floor(Math.random()*n.length));return e}}},m=e(1241);const h=(0,m.A)(f,[["render",u],["__scopeId","data-v-688bca80"]]);var b=h,k={name:"App",components:{TextAnimation:b}};const x=(0,m.A)(k,[["render",a]]);var y=x;(0,o.Ef)(y).mount("#app")}},n={};function e(o){var i=n[o];if(void 0!==i)return i.exports;var r=n[o]={exports:{}};return t[o].call(r.exports,r,r.exports,e),r.exports}e.m=t,function(){var t=[];e.O=function(n,o,i,r){if(!o){var a=1/0;for(u=0;u<t.length;u++){o=t[u][0],i=t[u][1],r=t[u][2];for(var s=!0,l=0;l<o.length;l++)(!1&r||a>=r)&&Object.keys(e.O).every((function(t){return e.O[t](o[l])}))?o.splice(l--,1):(s=!1,r<a&&(a=r));if(s){t.splice(u--,1);var c=i();void 0!==c&&(n=c)}}return n}r=r||0;for(var u=t.length;u>0&&t[u-1][2]>r;u--)t[u]=t[u-1];t[u]=[o,i,r]}}(),function(){e.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(n,{a:n}),n}}(),function(){e.d=function(t,n){for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)}}(),function(){var t={524:0};e.O.j=function(n){return 0===t[n]};var n=function(n,o){var i,r,a=o[0],s=o[1],l=o[2],c=0;if(a.some((function(n){return 0!==t[n]}))){for(i in s)e.o(s,i)&&(e.m[i]=s[i]);if(l)var u=l(e)}for(n&&n(o);c<a.length;c++)r=a[c],e.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return e.O(u)},o=self["webpackChunktext_animation_app"]=self["webpackChunktext_animation_app"]||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))}();var o=e.O(void 0,[504],(function(){return e(3633)}));o=e.O(o)})();
//# sourceMappingURL=app.2a545f2a.js.map