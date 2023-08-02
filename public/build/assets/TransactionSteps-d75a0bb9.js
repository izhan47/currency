import{z as i,c as l,b as e,n as s,u as r,t as n,o as d}from"./app-2cac3384.js";const p={class:"transaction-timeline-steps"},u={class:"flex items-center w-full"},f=e("span",{class:"step-icon"},null,-1),S={class:"step-text first"},m=e("span",{class:"step-icon"},null,-1),_={class:"step-text"},h=e("span",{class:"step-icon"},null,-1),v={class:"step-text"},x=e("span",{class:"step-icon"},null,-1),g={class:"step-text last"},B={name:"TransactionSteps"},z=Object.assign(B,{props:{currentStep:{type:String,default:"sender-info"}},setup(t){const a=t,o={"sender-info":1,"transaction-info":2,"receiver-info":3,"card-info":4},c=i(()=>o[a.currentStep]);return(b,k)=>(d(),l("div",p,[e("ol",u,[e("li",{class:s({current:t.currentStep==="sender-info",completed:r(c)>1})},[f,e("div",S,n(t.currentStep.replace("-"," ")),1)],2),e("li",{class:s({current:t.currentStep==="transaction-info",completed:r(c)>2})},[m,e("div",_,n(t.currentStep.replace("-"," ")),1)],2),e("li",{class:s({current:t.currentStep==="receiver-info",completed:r(c)>3})},[h,e("div",v,n(t.currentStep.replace("-"," ")),1)],2),e("li",{class:s({current:t.currentStep==="card-info"})},[x,e("div",g,n(t.currentStep.replace("-"," ")),1)],2)])]))}});export{z as default};
