import{r as c,j as e,y as x}from"./app-Y8fBfMZs.js";import"./FrontpageLayout-CHDCaxRV.js";import{A as u,d as f,D as g}from"./slick-theme-BcbyHk5X.js";import{H as v}from"./Harga-G0ikm7Bp.js";import{R as b,a}from"./RadioCategory-DsSoTq4N.js";import{S as N,H as y}from"./index-tWi1DKgk.js";import{I as C}from"./index-7X9jRBCf.js";import{a as w}from"./index-CAKqQOEl.js";import{G as R}from"./iconBase-DK_xsFNO.js";import{R as t}from"./Rating-B5KoXfNX.js";import{I as o}from"./MenuItem-DnDX5PU7.js";import{T as H}from"./TextField-BnqsF6By.js";import"./Image-DfaaPNVt.js";import"./index-DEiiZAl_.js";import"./useSlotProps-CAAdliou.js";import"./index-NoXDXgi4.js";import"./index-DFMUMDAf.js";import"./logo-edu-test-market-T3xA_ChN.js";import"./Menu-CQMxSYT2.js";import"./Modal-HlqBTzN1.js";import"./ownerWindow-1SRb00m4.js";import"./debounce-Be36O1Ab.js";import"./createSvgIcon-WjNjJaoi.js";import"./index-HHHjHxmM.js";import"./useId-CD70gIem.js";import"./useControlled-Bfflip85.js";import"./FormControl-XM3Zm5CH.js";import"./useFormControl-BM4KQ2Ov.js";import"./isMuiElement-CM5X0VDR.js";function S(d){return R({tag:"svg",attr:{viewBox:"0 0 15 15",fill:"none"},child:[{tag:"path",attr:{fillRule:"evenodd",clipRule:"evenodd",d:"M5.49998 0.5C5.49998 0.223858 5.72383 0 5.99998 0H7.49998H8.99998C9.27612 0 9.49998 0.223858 9.49998 0.5C9.49998 0.776142 9.27612 1 8.99998 1H7.99998V2.11922C9.09832 2.20409 10.119 2.56622 10.992 3.13572C11.0116 3.10851 11.0336 3.08252 11.058 3.05806L12.058 2.05806C12.3021 1.81398 12.6978 1.81398 12.9419 2.05806C13.186 2.30214 13.186 2.69786 12.9419 2.94194L11.967 3.91682C13.1595 5.07925 13.9 6.70314 13.9 8.49998C13.9 12.0346 11.0346 14.9 7.49998 14.9C3.96535 14.9 1.09998 12.0346 1.09998 8.49998C1.09998 5.13361 3.69904 2.3743 6.99998 2.11922V1H5.99998C5.72383 1 5.49998 0.776142 5.49998 0.5ZM2.09998 8.49998C2.09998 5.51764 4.51764 3.09998 7.49998 3.09998C10.4823 3.09998 12.9 5.51764 12.9 8.49998C12.9 11.4823 10.4823 13.9 7.49998 13.9C4.51764 13.9 2.09998 11.4823 2.09998 8.49998ZM7.49998 8.49998V4.09998C5.06992 4.09998 3.09998 6.06992 3.09998 8.49998C3.09998 10.93 5.06992 12.9 7.49998 12.9C8.715 12.9 9.815 12.4075 10.6112 11.6112L7.49998 8.49998Z",fill:"currentColor"},child:[]}]})(d)}const le=({auth:d,detail:B,products:M,paketsoal:r})=>{const[m,p]=c.useState("semua"),[l,n]=c.useState({}),h=(s,i)=>{n({...l,[s]:i})},j=s=>{const i=l[s];i&&(x.post(`/admin/storereply/${s}`,{reply:i}),n({...l,[s]:""}))};return e.jsxs("section",{className:"main flex",children:[e.jsx("div",{className:"sidebarWrapper w-[15%]",children:e.jsx(N,{tab:1})}),e.jsxs("div",{className:"content-right w-[85%] px-3",children:[e.jsx(y,{}),e.jsx("div",{className:"space"}),e.jsxs("div",{className:"container px-20 pt-2",children:[e.jsxs("div",{className:"grid-cols-1 flex gap-4 bg-white shadow-md p-5 rounded-md",children:[e.jsx("div",{className:"flex-[0.3] text-center",children:e.jsx("img",{src:`${r.base_url}/storage/${r.link_cover}`,alt:"Product",className:"h-auto rounded-md",style:{maxHeight:"500px"}})}),e.jsxs("div",{className:"flex-1",children:[e.jsx("h1",{className:"text-2xl font-bold mb-2",children:r.name}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex flex-row justify-between",children:[e.jsxs("div",{children:[e.jsx("h2",{className:"text-xl text-indigo-600 mb-4",children:e.jsx(v,{nilai:r.price,className:"text-md font-semibold text-secondary"})}),e.jsx("p",{className:"text-md text-gray-600",children:`${r.terjual} terjual`}),e.jsxs("div",{className:"flex gap-x-2",children:[e.jsx("p",{className:"text-xl font-semibold text-secondary",children:r.rating}),e.jsx(t,{value:r.rating,readOnly:!0})]}),e.jsx("button",{disabled:!0,className:"mt-4 bg-secondary/15 border-secondary  border-2 text-secondary px-4 py-2 rounded hover:bg-secondary/10",children:"Add to Cart"})]}),e.jsx("div",{children:e.jsxs("div",{className:"flex flex-col items-center justify-center gap-y-2",children:[e.jsx(S,{className:"text-3xl text-[#184C80]"}),e.jsxs("div",{className:"flex flex-row gap-x-2 text-[#184C80] font-bold",children:[e.jsx("p",{children:r.jam}),e.jsx("p",{children:":"}),e.jsx("p",{children:r.menit}),e.jsx("p",{children:":"}),e.jsx("p",{children:r.detik})]})]})})]}),e.jsx("div",{className:"pr-20",children:e.jsx("p",{className:"ql-container mt-4",dangerouslySetInnerHTML:{__html:r.description}})})]})]})]}),e.jsxs("div",{className:"bg-white mt-5 rounded-md p-5 shadow-md",children:[e.jsx("h3",{className:"text-xl font-semibold mb-4",children:"Penilaian Produk"}),e.jsxs("div",{className:"flex w-full bg-secondary/5 px-5 py-3 border-2 border-secondary/15 items-center gap-x-5",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex w-full text-secondary font-semibold text-4xl items-center justify-center gap-3",children:[r.rating,e.jsx("span",{className:"font-normal text-xl",children:"dari 5"})]}),e.jsx(t,{value:r.rating,readOnly:!0,size:"large"})]}),e.jsx("div",{className:"flex gap-4 flex-wrap",children:e.jsxs(b,{value:m,onChange:s=>p(s.target.value),children:[e.jsx(a,{value:"semua",children:"Semua"}),e.jsx(a,{value:"5 bintang",children:"5 Bintang"}),e.jsx(a,{value:"4 bintang",children:"4 Bintang"}),e.jsx(a,{value:"3 bintang",children:"3 Bintang"}),e.jsx(a,{value:"2 bintang",children:"2 Bintang"}),e.jsx(a,{value:"1 bintang",children:"1 Bintang"})]})})]}),e.jsx("div",{children:e.jsx("div",{className:"mb-4 mt-4",children:e.jsx("div",{className:"flex w-full p-4 flex-col gap-y-4",children:r.penilaian.map(s=>e.jsxs("div",{className:"flex w-full gap-4",children:[e.jsx(u,{sx:{bgcolor:f[500]},children:"RU"}),e.jsxs("div",{className:" min-h-24 flex-col w-full",children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsx("p",{className:"text-md text-secondary font-semibold",children:s.created_by}),e.jsx(o,{onClick:i=>{i.preventDefault(),x.post(`/admin/deletepenilaian/${s.id}`,{_method:"delete"})},children:e.jsx(w,{})})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-xs text-gray-500",children:new Date(s.created_at).toLocaleString()}),e.jsx(t,{value:s.rating,readOnly:!0,size:"small",precision:.5})]}),e.jsx("p",{className:"text-gray-700",children:s.comment}),s.replies.map(i=>e.jsxs("div",{className:"bg-[#F5F5F5] p-5 my-3 rounded-sm",children:[e.jsx("p",{className:"text-black font-bold mb-2",children:"Edu Test Market"}),e.jsx("p",{children:i.comment})]})),e.jsxs("div",{className:"flex w-full",children:[e.jsx(H,{className:"flex p-3 w-full",InputProps:{disableUnderline:!0},value:l[s.id]||"",onChange:i=>h(s.id,i.target.value)}),e.jsx("div",{className:"flex items-center justify-center",children:e.jsx(o,{onClick:()=>j(s.id),children:e.jsx(C,{})})})]})]}),e.jsx(g,{orientation:"horizontal"})]},s.id))})})})]})]})]})]})};export{le as default};
