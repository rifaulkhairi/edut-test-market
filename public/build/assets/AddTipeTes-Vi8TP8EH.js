import{r as o,j as t,y as m}from"./app-Y8fBfMZs.js";import{S as p,H as l}from"./index-tWi1DKgk.js";import{u as n}from"./index-CP_U59T8.js";import{T as d}from"./TextField-BnqsF6By.js";import{B as u}from"./iconBase-DK_xsFNO.js";import"./logo-edu-test-market-T3xA_ChN.js";import"./index-CAKqQOEl.js";import"./index-HHHjHxmM.js";import"./FormControl-XM3Zm5CH.js";import"./useFormControl-BM4KQ2Ov.js";import"./isMuiElement-CM5X0VDR.js";import"./useId-CD70gIem.js";import"./Menu-CQMxSYT2.js";import"./Modal-HlqBTzN1.js";import"./ownerWindow-1SRb00m4.js";import"./useSlotProps-CAAdliou.js";import"./debounce-Be36O1Ab.js";import"./useControlled-Bfflip85.js";import"./createSvgIcon-WjNjJaoi.js";const W=()=>{const{data:c,setData:s,post:x,errors:f}=n({name:null}),[r,a]=o.useState(null),i=e=>{e.preventDefault(),m.post("/admin/tipetest/store",{_method:"post",name:r})};return t.jsxs("section",{className:"main flex",children:[t.jsx("div",{className:"sidebarWrapper w-[15%]",children:t.jsx(p,{tab:1})}),t.jsxs("div",{className:"content-right w-[85%] px-3",children:[t.jsx(l,{}),t.jsx("div",{className:"space"}),t.jsxs("form",{onSubmit:i,className:"flex w-full gap-y-3 flex-col",children:[t.jsx(d,{id:"name",label:"Nama Tes",required:!0,multiline:!0,value:r,onChange:(e,j)=>{a(e.target.value),s("name",e.target.value)},sx:{width:"100%"}}),t.jsx("div",{children:t.jsx(u,{type:"submit",sx:{textTransform:"capitalize"},variant:"contained",children:"Submit"})})]})]})]})};export{W as default};
