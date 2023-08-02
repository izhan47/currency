import{_ as b}from"./Modal-1fcc9568.js";import{u as w}from"./useAPI-d04b5e55.js";import{u as P}from"./notification-c7ee7316.js";import{_ as d}from"./FiftyText-1e25ff4f.js";import{N as u}from"./NewActionButton-14875054.js";import{_ as $}from"./_plugin-vue_export-helper-c27b6911.js";import{o as c,c as p,b as s,e as C,a as o,w as a,u as y,j as _,f as k,n as x,t as S,s as O}from"./app-2cac3384.js";const B={transaction_initialized:1,pairing_pending:2,pairing_complete:3,payment_to_receiver_pending:4,payment_to_receiver_complete:5,payment_to_receiver_confirmed:6,payment_to_opposite_receiver_pending:7,payment_to_opposite_receiver_complete:8,transaction_completed:10,transaction_cancelled:0},X={transaction_initialized:1,pairing_complete:2,payment_to_opposite_receiver_confirmed:3,payment_to_receiver_complete:4,payment_to_receiver_confirmed:5,transaction_completed:6,transaction_cancelled:0},N={name:"SuccessIcon"},T={"aria-hidden":"true",class:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},j=s("path",{"clip-rule":"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z","fill-rule":"evenodd"},null,-1),z=[j];function M(t,m,i,n,l,r){return c(),p("svg",T,z)}const R=$(N,[["render",M]]),H=s("div",{class:"track-step-icon w-3 h-3 mt-1.5 -left-1.5 border border-white"},null,-1),I={class:"receiver-action-buttons"},L={class:"p-6"},V=["src"],q={key:0,class:"confirmed-button"},E={name:"PaymentToReceiverCompleted"},A=Object.assign(E,{props:{transaction:{type:Object,required:!0},isHidden:{type:Boolean,default:!1}},emits:["transactionUpdated"],setup(t,{emit:m}){const i=t,n=w(),l=P(),r=C(!1),v=()=>{r.value=!1},h=()=>{i.isHidden||(r.value=!0)},g=async()=>{if(!i.isHidden){n.startRequest();try{const e=await axios.post("/api/confirm-payment-to-receiver",{transactionId:i.transaction.id});console.log(e),e.data.status==="success"&&(l.notify("Payment to receiver confirmed","success"),m("transactionUpdated",e.data.transaction))}catch(e){n.handleErrors(e),l.notify("Error confirming payment...","error")}finally{n.requestCompleted()}}};return(e,U)=>(c(),p("li",{class:x({"opacity-30":t.isHidden})},[H,o(d,{class:"mb-2"},{default:a(()=>[_(S(t.transaction.payment_to_receiver_completed_at),1)]),_:1}),o(d,{variation:"body-xl",color:"dark"},{default:a(()=>[_(" Payment Complete ")]),_:1}),o(d,null,{default:a(()=>[O(e.$slots,"default")]),_:3}),s("div",I,[o(b,{close:v,isOpen:r.value,header:"Proof Of Payment"},{button:a(()=>[o(u,{onClick:h,title:"View Proof"})]),content:a(()=>{var f;return[s("div",L,[s("img",{src:`${(f=t.transaction.opposite_transaction)==null?void 0:f.payment_intent.payment_proof}`,alt:"proof of payment"},null,8,V)])]}),_:1},8,["isOpen"]),y(B)[t.transaction.status]>5?(c(),p("div",q,[o(R,{class:"icon"}),_(" Payment Confirmed ")])):(c(),k(u,{key:1,isLoading:y(n).isLoading.value,onClick:g,title:"Confirm Payment Received",reversed:!0},null,8,["isLoading"]))])],2))}}),Y=Object.freeze(Object.defineProperty({__proto__:null,default:A},Symbol.toStringTag,{value:"Module"}));export{Y as P,A as _,X as o,B as t};
