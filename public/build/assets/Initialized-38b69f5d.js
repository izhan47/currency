import{_ as e}from"./FiftyText-1e25ff4f.js";import{c as i,a as t,w as a,b as o,o as c,j as s,t as n,s as d}from"./app-2cac3384.js";const u=o("div",{class:"track-step-icon w-3 h-3 mt-1.5 -left-1.5 border border-white"},null,-1),f={name:"Initialized"},b=Object.assign(f,{props:{transaction:{type:Object,required:!0},text:{type:String,default:"Your card has been successfully authorized and your transaction has been successfully initialized",required:!1}},setup(r){return(l,_)=>(c(),i("li",null,[u,t(e,{class:"mb-2"},{default:a(()=>[s(n(r.transaction.created_at),1)]),_:1}),t(e,{variation:"body-xl",color:"dark"},{default:a(()=>[s(" Transaction successfully initialized ")]),_:1}),t(e,null,{default:a(()=>[d(l.$slots,"default")]),_:3})]))}});export{b as default};
