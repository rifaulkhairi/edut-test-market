import{r as d,j as e,y as i}from"./app-Y8fBfMZs.js";import{l as m}from"./logo-edu-test-market-T3xA_ChN.js";import{c as h}from"./index-CAKqQOEl.js";import{G as c,B as a}from"./iconBase-DK_xsFNO.js";import{a as p}from"./index-HHHjHxmM.js";function n(l){return c({tag:"svg",attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"},child:[]}]})(l)}function f(l){return c({tag:"svg",attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"},child:[]}]})(l)}function j(l){return c({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M402 168c-2.93 40.67-33.1 72-66 72s-63.12-31.32-66-72c-3-42.31 26.37-72 66-72s69 30.46 66 72z"},child:[]},{tag:"path",attr:{fill:"none",strokeMiterlimit:"10",strokeWidth:"32",d:"M336 304c-65.17 0-127.84 32.37-143.54 95.41-2.08 8.34 3.15 16.59 11.72 16.59h263.65c8.57 0 13.77-8.25 11.72-16.59C463.85 335.36 401.18 304 336 304z"},child:[]},{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M200 185.94c-2.34 32.48-26.72 58.06-53 58.06s-50.7-25.57-53-58.06C91.61 152.15 115.34 128 147 128s55.39 24.77 53 57.94z"},child:[]},{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"32",d:"M206 306c-18.05-8.27-37.93-11.45-59-11.45-52 0-102.1 25.85-114.65 76.2-1.65 6.66 2.53 13.25 9.37 13.25H154"},child:[]}]})(l)}const b=({tab:l})=>{const[t,o]=d.useState(l),[x,u]=d.useState(!0),r=s=>{o(s),u(!x)};return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"sidebar fixed top-0 left-0 z-[100] w-[15%] shadow-lg shadow-blue-500/10",children:[e.jsxs("div",{className:"logoWrapper py-3 px-5 flex items-center gap-2 cursor-pointer",onClick:s=>{s.preventDefault(),i.visit("/admin/dashboard")},children:[e.jsx("img",{src:m,className:"w-16"}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("span",{className:"font-semibold text-secondary text-xl",children:"EduTest"}),e.jsx("span",{className:"font-semibold text-secondary text-xl",children:"Market"})]})]}),e.jsx("div",{className:"sidebarTabs px-3 mt-4 ",children:e.jsxs("ul",{className:"flex gap-4 flex-col",children:[e.jsx("li",{children:e.jsxs(a,{className:`w-full ${t===0?"active":""}`,onClick:s=>{r(0),s.preventDefault(),i.visit("/admin/dashboard")},children:[e.jsx("span",{className:"icon w-[30px] h-[30px] flex items-center justify-center rounded-md",children:e.jsx(h,{})}),"Dashboard"]})}),e.jsxs("li",{children:[e.jsxs(a,{className:`w-full flex items-center justify-center ${t===1?"active":""}`,onClick:()=>r(1),children:[e.jsx("span",{className:"icon w-[30px] h-[30px] flex items-center justify-center rounded-md",children:e.jsx(p,{})}),"Products",e.jsx("span",{className:`arrow ml-auto w-[25px]  h-[25px] flex items-center justify-center ${t===1?"rotate":""}`,children:e.jsx(n,{})})]}),e.jsx("div",{className:`submenuWrapper ${t===1?"colapse":"colapsed"}`,children:e.jsxs("div",{className:"submenu",children:[e.jsx(a,{className:"w-full",onClick:s=>{s.preventDefault(),i.visit("/admin/daftarpaketsoal")},children:"Paket Soal"}),e.jsx(a,{className:"w-full",onClick:s=>{s.preventDefault(),i.visit("/admin/daftartipetest")},children:"Tipe Test"}),e.jsx(a,{className:"w-full",onClick:s=>{s.preventDefault(),i.visit("/admin/daftarsoal")},children:"Soal"})]})})]}),e.jsxs("li",{children:[e.jsxs(a,{className:`w-full ${t===2?"active":""}`,onClick:()=>r(2),children:[e.jsx("span",{className:"icon w-[30px] h-[30px] flex items-center justify-center rounded-md",children:e.jsx(f,{})}),"orders",e.jsx("span",{className:"arrow ml-auto w-[25px]  h-[25px] flex items-center justify-center",children:e.jsx(n,{})})]}),e.jsx("div",{className:`submenuWrapper ${t===2?"colapse":"colapsed"}`,children:e.jsx("div",{className:"submenu",children:e.jsx(a,{className:"w-full",onClick:s=>{s.preventDefault(),i.visit("/admin/order/list")},children:"Daftar Order"})})})]}),e.jsxs("li",{children:[e.jsxs(a,{className:`w-full flex items-center justify-center ${t===3?"active":""}`,onClick:()=>r(3),children:[e.jsx("span",{className:"icon w-[30px] h-[30px] flex items-center justify-center rounded-md",children:e.jsx(j,{})}),"Pengguna",e.jsx("span",{className:`arrow ml-auto w-[25px]  h-[25px] flex items-center justify-center ${t===3?"rotate":""}`,children:e.jsx(n,{})})]}),e.jsx("div",{className:`submenuWrapper ${t===3?"colapse":"colapsed"}`,children:e.jsx("div",{className:"submenu",children:e.jsx(a,{className:"w-full",onClick:s=>{s.preventDefault(),i.visit("/admin/listpengguna")},children:"Daftar Pengguna"})})})]})]})})]})})},y=()=>e.jsx("header",{className:"header fixed top-0 right-0 bg-white py-2 z-[100] shadow-md shadow-blue-500/10"});export{y as H,b as S};
