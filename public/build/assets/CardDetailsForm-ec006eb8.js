import"./Spinner-dd5ccd9b.js";import{u as g}from"./notification-c7ee7316.js";import{u as v}from"./useAPI-d04b5e55.js";import{e as C,i as k,c as h,b as p,a as l,o as b,O as B}from"./app-2cac3384.js";import{u as P}from"./useHelpers-046d81e5.js";/* empty css                                                     */import{N as m}from"./NewActionButton-14875054.js";import"./countries-4c15b513.js";import"./_plugin-vue_export-helper-c27b6911.js";const I={id:"payment-form",class:"payment-form-wrapper"},L=p("div",{id:"payment-element"},null,-1),N={class:"action-buttons"},O={name:"CardDetailsForm"},V=Object.assign(O,{props:{paymentIntent:{default:null,type:Object},stripeConfig:{default:null,type:Object}},emits:["stepChanged"],setup(u,{emit:S}){const n=u,a=P();v();const i=Stripe(n.stripeConfig.public_key),f=g(),o=C(!1);let r=null,s=null,c=null;const d=async t=>{t.preventDefault(),o.value=!0;const{error:e}=await i.confirmPayment({elements:r,confirmParams:{return_url:n.stripeConfig.redirect_url}});o.value=!1,e?f.notify(e.message,"error"):console.log("Success, and redirect to server endpoint")},y=()=>{s={clientSecret:n.paymentIntent.client_secret,appearance:{}},r=i.elements(s),c=r.create("payment"),c.mount("#payment-element")};k(()=>{y()});const _=()=>{const t=a.getURLParam("country"),e=a.getURLParam("payment-reference-identification");B.get("/receiver-info?payment-reference-identification="+e+"&country="+t)};return(t,e)=>(b(),h("form",I,[L,p("div",N,[l(m,{reversed:!0,title:"Back",onClick:_}),l(m,{onClick:d,isLoading:o.value,title:"Authorize Card"},null,8,["isLoading"])])]))}});export{V as default};
