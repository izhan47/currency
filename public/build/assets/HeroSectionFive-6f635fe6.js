import{_ as g}from"./FiftyText-1e25ff4f.js";import l from"./Review-628bea50.js";import{_ as p}from"./_plugin-vue_export-helper-c27b6911.js";import{o as u,c as d,b as a,e as n,i as w,a as t,w as y,j as v}from"./app-2cac3384.js";const b={name:"ArrowRight"},x={"aria-hidden":"true",class:"right w-4 h-4 ml-2 -mr-1",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},$=a("path",{"clip-rule":"evenodd",d:"M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z","fill-rule":"evenodd"},null,-1),k=[$];function C(i,e,s,c,r,o){return u(),d("svg",x,k)}const f=p(b,[["render",C]]),A=["fill"],B=a("path",{"clip-rule":"evenodd",d:"M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z","fill-rule":"evenodd"},null,-1),P=[B],S={name:"ArrowLeft"},h=Object.assign(S,{props:{color:{type:String,default:"currentColor"}},setup(i){return(e,s)=>(u(),d("svg",{fill:i.color,"aria-hidden":"true",class:"w-4 h-4 ml-2 -mr-1",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},P,8,A))}}),E={class:"hero-section-five-container inside-container"},L={class:"flex flex-col justify-between"},N=a("br",null,null,-1),O={class:"arrow-desktop"},j={class:"outer-reviews-container"},I={class:"reviews",id:"reviews"},M={class:"arrows-mobile"},F={name:"HeroSectionFive"},z=Object.assign(F,{setup(i){const e=n(1),s=n(null),c=n(null),r=n(0),o=n(0),m=()=>{e.value>1&&(o.value=o.value+r.value,s.value.style.transform=`translateX(${o.value}px)`,e.value--)},_=()=>{e.value<4&&(o.value=-(r.value*e.value),s.value.style.transform=`translateX(${o.value}px)`,e.value++)};return w(()=>{s.value=document.getElementById("reviews"),c.value=document.getElementById("single-review"),r.value=c.value.clientWidth}),(J,T)=>(u(),d("div",E,[a("div",L,[t(g,{class:"title",color:"dark",variation:"heading-2"},{default:y(()=>[v(" What People"),N,v(" Are Saying ")]),_:1}),a("div",O,[t(f,{onClick:m,color:e.value>1?"#04A949":""},null,8,["color"]),t(h,{onClick:_,color:e.value<4?"#04A949":""},null,8,["color"])])]),a("div",j,[a("div",I,[t(l,{id:"single-review",numberOfStars:5,user:{icon:"images/homePage/avatars/1.png",name:"Navid Ershad",country:"Birmingham"},body:"Fifty fifty has changed the game in terms of simplicity, and certainly been a lifesaver for expat living."},null,8,["user"]),t(l,{numberOfStars:5,user:{icon:"images/homePage/avatars/2.png",name:"Jane Yun",country:"Chicago"},body:"For the first time in my life, I felt like I got real value for a straightforward service"},null,8,["user"]),t(l,{numberOfStars:5,user:{icon:"images/homePage/avatars/3.png",name:"Kamila Joshi",country:"Canada"},body:"This is the original intent of PayPal for sure. Simple, fast, effective, and almost no fees. Felt like handing money directly to my mum without sweating and at the best rates ever? Cant beat that…"},null,8,["user"]),t(l,{numberOfStars:5,user:{icon:"images/homePage/avatars/4.png",name:"Jimi Juba",country:"Canada"},body:"IT just makes perfect sense. No drama. Money sent. Money received back home. No ridiculous cost or fees!"},null,8,["user"])])]),a("div",M,[t(f,{onClick:m,color:e.value>1?"#04A949":""},null,8,["color"]),t(h,{onClick:_,color:e.value<4?"#04A949":""},null,8,["color"])])]))}});export{z as default};
