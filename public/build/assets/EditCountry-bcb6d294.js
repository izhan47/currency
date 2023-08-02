import{u as q}from"./useAPI-d04b5e55.js";import{u as U}from"./notification-c7ee7316.js";import{_ as s}from"./TextInput-ce71653f.js";import{_ as i}from"./SelectInput-08f1fdd6.js";import{_ as E}from"./Spinner-dd5ccd9b.js";import{d as S,i as h,c as N,b as n,a as d,u as a,f as w,g as O,o as k}from"./app-2cac3384.js";const A={class:"border-gray-400 border rounded-lg p-6 mb-8"},B={class:"grid gap-6 mb-10 md:grid-cols-2"},I={class:"flex gap-4 items-center"},$={name:"EditCountry"},z=Object.assign($,{props:{currencies:{type:Array,required:!0},editedCountry:{type:Object,required:!0}},emits:["countryEdited","endEdit"],setup(c,{emit:m}){const l=c,o=q(),y=U(),p=()=>{o.errors.value={},m("endEdit")},x=async()=>{o.startRequest();try{(await axios.put("/admin/countries/update/"+l.editedCountry.value.id,e)).data&&(y.notify("Country updated","success"),p(),m("countryEdited",e))}catch(u){y.notify("Error","error"),o.handleErrors(u)}finally{o.requestCompleted()}},b=[{label:"Yes",value:"Y"},{label:"No",value:"N"}],e=S({});return h(()=>{e.id=l.editedCountry.value.id,e.label=l.editedCountry.value.label,e.code=l.editedCountry.value.code,e.code_iso_2=l.editedCountry.value.code_iso_2,e.can_send=l.editedCountry.value.can_send,e.can_receive=l.editedCountry.value.can_receive,e.currency_id=l.editedCountry.value.currency_id,e.currency=l.editedCountry.value.currency}),(u,r)=>{var _,v,f,g,C,V;return k(),N("div",null,[n("form",A,[n("div",B,[d(s,{modelValue:e.label,"onUpdate:modelValue":r[0]||(r[0]=t=>e.label=t),errors:(_=a(o).errors.value)==null?void 0:_.label,label:"Country Name",placeholder:"United States of America",required:"",title:"label"},null,8,["modelValue","errors"]),d(s,{modelValue:e.code,"onUpdate:modelValue":r[1]||(r[1]=t=>e.code=t),errors:(v=a(o).errors.value)==null?void 0:v.code,label:"Code ISO 3",placeholder:"USA",required:"",title:"code"},null,8,["modelValue","errors"]),d(s,{modelValue:e.code_iso_2,"onUpdate:modelValue":r[2]||(r[2]=t=>e.code_iso_2=t),errors:(f=a(o).errors.value)==null?void 0:f.code_iso_2,label:"Code ISO 2",placeholder:"US",required:"",title:"code_iso_2"},null,8,["modelValue","errors"]),d(i,{modelValue:e.can_send,"onUpdate:modelValue":r[3]||(r[3]=t=>e.can_send=t),errors:(g=a(o).errors.value)==null?void 0:g.can_send,options:b,label:"Can send",required:"",placeholder:" Select ",title:"can_send",type:"text"},null,8,["modelValue","errors"]),d(i,{modelValue:e.can_receive,"onUpdate:modelValue":r[4]||(r[4]=t=>e.can_receive=t),errors:(C=a(o).errors.value)==null?void 0:C.can_receive,options:b,label:"Can receive",required:"",placeholder:" Select ",title:"can_receive",type:"text"},null,8,["modelValue","errors"]),d(i,{modelValue:e.currency_id,"onUpdate:modelValue":r[5]||(r[5]=t=>e.currency_id=t),errors:(V=a(o).errors.value)==null?void 0:V.currency_id,options:c.currencies,label:"Currency",required:"",placeholder:" Select ",title:"currency_id",type:"text","value-accessor":"id","label-accessor":"name"},null,8,["modelValue","errors","options"])]),n("div",I,[n("button",{onClick:x,type:"button",class:"text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"}," Update "),n("button",{type:"button",onClick:p,class:"text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"}," Cancel "),a(o).isLoading.value?(k(),w(E,{key:0,class:"button-spinner-center action-btn"})):O("",!0)])])])}}});export{z as default};
