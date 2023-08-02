import{d as b,c as l,a as i,w as p,u as m,F as _,o as c,Z as k,b as e,t as s,f as h,g as x,r as w,h as C,v as E}from"./app-2cac3384.js";import{_ as I}from"./AdminLayout-01e4b994.js";import{P as N}from"./Pagination-c0764a58.js";import $ from"./CreateCountry-879cf6e2.js";import B from"./EditCountry-bcb6d294.js";import{u as P}from"./useAPI-d04b5e55.js";import{u as S}from"./notification-c7ee7316.js";import{E as j}from"./EditIcon-a8ad6404.js";import{_ as A}from"./Spinner-dd5ccd9b.js";import"./ResponsiveNavLink-a7d45309.js";import"./FlashMessage-9f6c2265.js";import"./CustomSidebar-a20985df.js";import"./SidebarElement-5e7556c1.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./TextInput-ce71653f.js";import"./SelectInput-08f1fdd6.js";const D=e("title",null,`
            Countries
        `,-1),V={class:"ml-4 md:ml-16"},q={class:"mt-16 mb-8 text-xl flex items-center justify-between"},F=e("div",null," Countries ",-1),L={class:"text-sm"},O={class:"relative overflow-x-auto shadow-md sm:rounded-lg"},R={class:"w-full text-sm text-left text-gray-500 dark:text-gray-400"},Z=e("thead",{class:"text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"},[e("tr",null,[e("th",{class:"px-6 py-3",scope:"col"}," #ID "),e("th",{class:"px-6 py-3",scope:"col"}," Country Name "),e("th",{class:"px-6 py-3",scope:"col"}," Currency "),e("th",{class:"px-6 py-3",scope:"col"}," Sending Countries "),e("th",{class:"px-6 py-3",scope:"col"}," Receiving Countries "),e("th",{class:"px-6 py-3",scope:"col"}," Actions ")])],-1),z={class:"px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white",scope:"row"},G={class:"px-6 py-4"},H={class:"px-6 py-4"},J={class:"px-6 py-4"},K={class:"px-6 py-4"},M={class:"px-6 py-4 flex gap-4 items-center"},Q={name:"Countries"},pe=Object.assign(Q,{props:{countries:{required:!0,type:Object},currencies:{type:Array,required:!0}},setup(d){const o=d,f=P();S();const n=b({}),y=r=>{n.value=r},g=()=>{n.value={}},v=r=>{console.log("edited");let u=o.countries.data.findIndex(a=>a.id===r.id);o.countries.data.splice(u,1,r)};return(r,u)=>(c(),l(_,null,[i(m(k),{title:"Countries"},{default:p(()=>[D]),_:1}),i(I,null,{default:p(()=>{var a;return[e("div",V,[e("div",q,[F,e("div",L," Page: "+s(o.countries.current_page)+" | total: "+s(o.countries.total)+" | from: "+s(o.countries.from)+", to: "+s(o.countries.to),1)]),i($,{currencies:d.currencies},null,8,["currencies"]),(a=n.value)!=null&&a.id?(c(),h(B,{key:0,onEndEdit:g,onCountryEdited:v,"edited-country":n,currencies:d.currencies},null,8,["edited-country","currencies"])):x("",!0),e("div",O,[e("table",R,[Z,e("tbody",null,[(c(!0),l(_,null,w(o.countries.data,t=>C((c(),l("tr",{key:t.id,class:"bg-white border-b dark:bg-gray-900 dark:border-gray-700"},[e("th",z,s(t.id),1),e("td",G,s(t.label)+" ("+s(t.code)+") ",1),e("td",H,s(t.currency.name)+" ("+s(t.currency.code)+") ",1),e("td",J,s(t.can_send),1),e("td",K,s(t.can_receive),1),e("td",M,[i(j,{onClick:T=>y(t),class:"w-8 hover:cursor-pointer hover:bg-blue-600 hover:text-white rounded-md p-1"},null,8,["onClick"]),m(f).isLoading.value&&r.deletingCountryId===t.id?(c(),h(A,{key:0,class:"button-spinner-center action-btn"})):x("",!0)])])),[[E,t.id!=="deleted"]])),128))])])]),i(N,{links:o.countries.links},null,8,["links"])])]}),_:1})],64))}});export{pe as default};
