import{r,j as e}from"./app-Y8fBfMZs.js";const h=({initialHours:d=0,initialMinutes:o=0,initialSeconds:x=0,onTimeUp:c})=>{const[s,u]=r.useState(d),[t,i]=r.useState(o),[l,n]=r.useState(x);return r.useEffect(()=>{const a=setInterval(()=>{l>0?n(l-1):t>0?(i(t-1),n(59)):s>0?(u(s-1),i(59),n(59)):(clearInterval(a),c())},1e3);return()=>clearInterval(a)},[s,t,l,c]),e.jsxs("div",{className:"waktu shadow-lg rounded-2xl bg-white pt-4",children:[e.jsx("h1",{className:"font-bold ml-4",children:"Sisa Waktu"}),e.jsxs("div",{className:"waktu grid grid-flow-col pb-4 pt-1 px-4 text-white gap-x-3",children:[e.jsxs("div",{className:"jam h-14 w-20 bg-tertiary rounded-lg flex items-center justify-center flex-col",children:[e.jsx("p",{className:"font-bold text-xl",children:s}),e.jsx("p",{children:"Jam"})]}),e.jsxs("div",{className:"menit h-14 w-20 bg-tertiary rounded-lg flex items-center justify-center flex-col",children:[e.jsx("p",{className:"font-bold text-xl",children:t}),e.jsx("p",{children:"Menit"})]}),e.jsxs("div",{className:"detik h-14 w-20 bg-tertiary rounded-lg flex items-center justify-center flex-col",children:[e.jsx("p",{className:"font-bold text-xl",children:l}),e.jsx("p",{children:"Detik"})]})]})]})};export{h as T};
