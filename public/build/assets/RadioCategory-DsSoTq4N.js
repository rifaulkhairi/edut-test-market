import{r as n,j as o}from"./app-Y8fBfMZs.js";const r=n.createContext();function i({children:a,...e}){const{value:t,onChange:s}=n.useContext(r);return o.jsxs("label",{className:`px-6 py-1 shadow rounded-md cursor-pointer transition-all ${t===e.value?"bg-secondary text-white text-md ":"bg-white text-secondary text-md"}`,children:[o.jsx("input",{type:"radio",className:"hidden",checked:t===e.value,onChange:s,...e}),a]})}function x({value:a,onChange:e,children:t}){return o.jsx(r.Provider,{value:{value:a,onChange:e,children:t},children:t})}export{x as R,i as a};
