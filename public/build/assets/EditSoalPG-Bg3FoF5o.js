import{r as l,j as e,a as v,y as O}from"./app-Y8fBfMZs.js";import{S as $,H as G}from"./index-tWi1DKgk.js";import"./index-CP_U59T8.js";import{b as A}from"./index-CAKqQOEl.js";import{E as c}from"./Editor-DVMIolCA.js";import{I as o}from"./InputError-rnu4anrE.js";import{B as D}from"./Breadcrumbs-DZLgd_Jj.js";import{A as N}from"./Autocomplete-B5aviKC8.js";import{T as n}from"./TextField-BnqsF6By.js";import{M as x}from"./MenuItem-DnDX5PU7.js";import{B as H}from"./iconBase-DK_xsFNO.js";import"./logo-edu-test-market-T3xA_ChN.js";import"./index-HHHjHxmM.js";import"./isEqual-pCLaa_SP.js";import"./createSvgIcon-WjNjJaoi.js";import"./Typography-Bn1kZTH6.js";import"./useSlotProps-CAAdliou.js";import"./index-DEiiZAl_.js";import"./Chip-CdGu1IYc.js";import"./ownerWindow-1SRb00m4.js";import"./Modal-HlqBTzN1.js";import"./Menu-CQMxSYT2.js";import"./debounce-Be36O1Ab.js";import"./useId-CD70gIem.js";import"./useControlled-Bfflip85.js";import"./FormControl-XM3Zm5CH.js";import"./useFormControl-BM4KQ2Ov.js";import"./isMuiElement-CM5X0VDR.js";const fe=({datasoal:L,tipetest:h,paketsoal:f,question:t,errors:i})=>{const[m,w]=l.useState(t.options),[u,T]=l.useState(t.tipe_soal),[r,y]=l.useState(t.paketsoal_id?f.find(a=>a.id===t.paketsoal_id):null),[p,C]=l.useState(t.tipetest_id?h.find(a=>a.id===t.tipetest_id):null),[I,P]=l.useState(r.id?r.id:null),[k,_]=l.useState(p.id?p.id:null),[j,E]=l.useState(t.question),[b,B]=l.useState(t.pembahasan),M=a=>{a.preventDefault(),O.post(`/admin/updatesoal/${t.id}`,{_method:"patch",soal:j,choices:m,pembahasan:b,idpaketsoal:I,idtipetest:k,tipesoal:u})},g=(a,s,d)=>{const S=[...m];S[a][s]=d,w(S)};return e.jsxs("section",{className:"main flex",children:[e.jsx("div",{className:"sidebarWrapper w-[15%]",children:e.jsx($,{tab:1})}),e.jsxs("div",{className:"content-right w-[85%] px-3",children:[e.jsx(G,{}),e.jsx("div",{className:"space"}),e.jsxs(D,{separator:e.jsx(A,{}),"aria-label":"breadcrumb",children:[e.jsx(v,{href:"/admin/daftarsoal",className:"text-blue-600",children:"Daftar Soal"}),e.jsx(v,{children:"Edit Soal"})]}),e.jsxs("form",{onSubmit:M,className:"flex w-full gap-y-3 flex-col mt-3",children:[e.jsxs("div",{className:"flex w-full gap-y-3 flex-col bg-white rounded-md p-4",children:[e.jsx("h2",{className:"text-secondary font-bold text-xl ",children:"Informasi Soal"}),e.jsx(N,{id:"paket_soal",value:r,options:f,getOptionLabel:a=>a.name,onChange:(a,s)=>{y(s),P(s.id)},renderInput:a=>e.jsx(n,{...a,label:"Paket Soal"})}),e.jsx(o,{message:i.idpaketsoal}),e.jsx(N,{id:"tipe_test",value:p,options:h,getOptionLabel:a=>a.name,onChange:(a,s)=>{C(s),_(s.id)},renderInput:a=>e.jsx(n,{...a,label:"Tipe Test"})}),e.jsx(o,{message:i.idtipetest}),e.jsxs(n,{id:"tipesoal",select:!0,label:"Tipe Soal",value:u,helperText:"Pilih Tipe Soal",onChange:(a,s)=>{T(a.target.value)},children:[e.jsx(x,{value:"pg",children:"Pilihan Ganda"}),e.jsx(x,{value:"pgcomplex",children:"Pilihan Ganda Kompleks"}),e.jsx(x,{value:"bs",children:"Benar Salah"})]}),e.jsx(o,{message:i.tipesoal})]}),e.jsxs("div",{className:"flex w-full bg-white h-fit flex-col p-6 rounded-md shadow-md",children:[e.jsx("h2",{className:"text-secondary font-bold text-xl mb-3 ",children:"Soal"}),e.jsx(c,{value:j,onChange:E}),e.jsx(o,{message:i.soal})]}),e.jsx("div",{className:"flex w-full h-full gap-y-4 flex-col",children:m.map((a,s)=>e.jsxs("div",{className:"flex w-full bg-white h-fit flex-col p-6 rounded-md shadow-md",children:[e.jsx("div",{className:"flex w-full flex-row justify-between",children:e.jsx("h2",{className:"text-secondary font-bold text-xl mb-3 ",children:`Opsi ${String.fromCharCode(97+s)}`})}),e.jsxs("div",{className:"flex flex-col gap-y-3",children:[e.jsx(c,{value:a.option,onChange:d=>{g(s,"option",d)}}),e.jsx(o,{message:i[`choices.${s}.choice_text`]}),e.jsx(n,{id:"nilai",type:"text",label:"Nilai",required:!0,value:a.nilai,onChange:d=>g(s,"nilai",d.target.value),inputMode:"decimal",sx:{width:100}}),e.jsx(o,{message:i[`choices.${s}.points`]})]})]},s))}),e.jsxs("div",{className:"flex w-full bg-white h-fit flex-col p-6 rounded-md shadow-md",children:[e.jsx("h2",{className:"text-secondary font-bold text-xl mb-3 ",children:"Pembahasan"}),e.jsx(c,{value:b,onChange:B}),e.jsx(o,{message:i.pembahasan})]}),e.jsx("div",{children:e.jsx(H,{type:"submit",sx:{textTransform:"capitalize"},variant:"contained",children:"Submit"})}),e.jsx("div",{className:"mb-24"})]})]})]})};export{fe as default};