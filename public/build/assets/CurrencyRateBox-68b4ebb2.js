import{K as i,c as a,b as e,u as o,g as l,t as c,o as n}from"./app-2cac3384.js";const d={class:"currency-box pair w-48 px-3 py-2 border-r border-b border-t border-gray-200"},_={class:"flex justify-between items-center"},u={class:"flex -space-x-1 overflow-hidden flags"},g={class:"image-wrapper"},m=["src"],p={key:0,class:"image-wrapper"},f=["src"],y={class:"flex mt-2 justify-between items-center"},x={id:"USD_EUR",class:"font-semibold text-md text-gray-800"},b={class:"font-semibold text-sm text-gray-800"},h={name:"CurrencyRateBox"},D=Object.assign(h,{props:{rate:{type:Object,default:{}}},setup(t){const s=i().props.geoDetails,r={USD:"images/countries/us.png",EUR:"images/countries/eu.png",CAD:"images/countries/ca.png",GBP:"images/countries/gb.png"};return(v,w)=>(n(),a("div",d,[e("div",_,[e("div",u,[e("div",g,[e("img",{class:"inline-block flex",src:`images/countries/${o(s).country.code_iso_2.toLowerCase()}.png`,alt:"flag"},null,8,m)]),o(s).country.currency.code!==t.rate.code?(n(),a("div",p,[e("img",{class:"inline-block flex",src:r[t.rate.code],alt:"flag"},null,8,f)])):l("",!0)])]),e("div",y,[e("span",x,c(parseFloat(t.rate.value).toFixed(4)),1),e("span",b,c(o(s).country.currency.code)+" / "+c(t.rate.code),1)])]))}});export{D as default};
