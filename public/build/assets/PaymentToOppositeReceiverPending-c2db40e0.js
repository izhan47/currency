import{c as v}from"./currencies_countries-fbccd8be.js";import h from"./FullReceiverItem-584933b9.js";import b from"./UploadPaymentProof-8b9e0903.js";import{_ as n}from"./FiftyText-1e25ff4f.js";import{c as k,a as f,w as r,f as i,g as s,n as x,b as c,o,j as t,t as a,u as g}from"./app-2cac3384.js";import"./Spinner-dd5ccd9b.js";import"./useAPI-d04b5e55.js";import"./notification-c7ee7316.js";import"./useHelpers-046d81e5.js";import"./countries-4c15b513.js";import"./NewActionButton-14875054.js";import"./_plugin-vue_export-helper-c27b6911.js";const B=c("div",{class:"track-step-icon w-3 h-3 mt-1.5 -left-1.5 border border-white"},null,-1),w={class:"uppercase"},N={name:"PaymentToOppositeReceiverPending"},E=Object.assign(N,{props:{transaction:{type:Object,required:!0},isHidden:{type:Boolean,default:!1}},setup(e){const _=y=>{};return(y,V)=>{var l;return o(),k("li",{class:x({"opacity-30":e.isHidden})},[B,f(n,{class:"mb-2"},{default:r(()=>[t(a(e.transaction.payment_to_receiver_confirmed_at),1)]),_:1}),e.transaction.opposite_transaction?(o(),i(n,{key:0,variation:"body-xl",color:"dark"},{default:r(()=>{var d,m,p,u;return[t(" Please send "),c("b",w,a(parseFloat((((d=e.transaction.opposite_transaction)==null?void 0:d.payment_intent.amount_in_receiver_currency)/100).toFixed(2)))+" ("+a(g(v)[(m=e.transaction.opposite_transaction)==null?void 0:m.receiver.country])+") ",1),t(" to "),c("b",null,a((p=e.transaction.opposite_transaction)==null?void 0:p.receiver.first_name)+" "+a((u=e.transaction.opposite_transaction)==null?void 0:u.receiver.last_name),1),t(" : ")]}),_:1})):s("",!0),e.transaction.opposite_transaction?(o(),i(h,{key:1,receiver:(l=e.transaction.opposite_transaction)==null?void 0:l.receiver},null,8,["receiver"])):s("",!0),f(n,null,{default:r(()=>[t(" To release the hold on your card and get refund, please complete the payment and upload the proof ")]),_:1}),e.isHidden?s("",!0):(o(),i(b,{key:2,transaction:e.transaction,url:"/upload-payment-proof-direct",onUploaded:_},null,8,["transaction"]))],2)}}});export{E as default};
