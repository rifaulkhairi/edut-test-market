import{r as t,j as e}from"./app-Y8fBfMZs.js";import{S as c,H as p}from"./index-tWi1DKgk.js";import{M as d}from"./index-6YM1zTMh.js";import{J as o,T as x}from"./index-VgBGwfeL.js";import{H as u}from"./Harga-G0ikm7Bp.js";import{B as f}from"./iconBase-DK_xsFNO.js";import{C as j}from"./Chip-CdGu1IYc.js";import"./logo-edu-test-market-T3xA_ChN.js";import"./index-CAKqQOEl.js";import"./index-HHHjHxmM.js";import"./Menu-CQMxSYT2.js";import"./Modal-HlqBTzN1.js";import"./ownerWindow-1SRb00m4.js";import"./useSlotProps-CAAdliou.js";import"./debounce-Be36O1Ab.js";import"./useControlled-Bfflip85.js";import"./useId-CD70gIem.js";import"./index-DFMUMDAf.js";import"./Typography-Bn1kZTH6.js";import"./Checkbox-CNQveSpx.js";import"./SwitchBase-Cn5PiAKs.js";import"./useFormControl-BM4KQ2Ov.js";import"./createSvgIcon-WjNjJaoi.js";import"./MenuItem-DnDX5PU7.js";import"./createSvgIcon-Cgl5eho9.js";import"./isMuiElement-CM5X0VDR.js";import"./FormControl-XM3Zm5CH.js";import"./FormGroup-CZu4cfU8.js";import"./TextField-BnqsF6By.js";import"./KeyboardArrowRight-PujepGha.js";const G=({orders:a,flash:r})=>{t.useState({});const i=[{name:"No",label:"No",options:{filter:!1,sort:!1,customBodyRender:(s,n)=>n.rowIndex+1}},{name:"invoice",label:"No.Invoice",options:{customBodyRender:s=>e.jsx("div",{className:"flex",children:e.jsx("div",{dangerouslySetInnerHTML:{__html:s},className:"line-clamp-1"})})}},{name:"created_at",label:"Tanggal Pesan",options:{customBodyRender:s=>e.jsx("div",{className:"flex",children:new Date(s).toLocaleString()})}},{name:"email_user",label:"Email User "},{name:"gross_amount",label:"Total",options:{customBodyRender:s=>e.jsx("div",{className:"flex",children:e.jsx(u,{nilai:s})})}},{name:"status",label:"Status",options:{customBodyRender:s=>e.jsx("div",{className:"flex",children:e.jsx(j,{label:s,color:`${l(s)}`})})}}],l=s=>{switch(s){case"paid":return"success";case"pending":return"warning";case"expire":return"error"}},m={filterType:"multiselect",selectableRows:!1};return t.useEffect(()=>{r.message!=null&&(r.message.success?o.success(r.message.success):r.message.error&&o.error(r.message.error))},[r]),e.jsxs("section",{className:"main flex",children:[e.jsx(x,{position:"top-right",richColors:!0}),e.jsx("div",{className:"sidebarWrapper w-[15%]",children:e.jsx(c,{tab:2})}),e.jsxs("div",{className:"content-right w-[85%] px-3",children:[e.jsx(p,{}),e.jsx("div",{className:"space"}),e.jsxs("div",{className:"flex w-full gap-y-3 flex-col",children:[e.jsx("div",{className:"flex w-full justify-end",children:e.jsx(f,{variant:"contained",sx:{textTransform:"capitalize"},onClick:s=>{s.preventDefault()},children:"Tambah"})}),e.jsx(d,{title:"Daftar Order",data:a,columns:i,options:m})]})]})]})};export{G as default};
