"use strict";var L=Object.defineProperty;var B=Object.getOwnPropertyDescriptor;var K=Object.getOwnPropertyNames;var Q=Object.prototype.hasOwnProperty;var W=(e,t)=>{for(var g in t)L(e,g,{get:t[g],enumerable:!0})},Y=(e,t,g,c)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of K(t))!Q.call(e,i)&&i!==g&&L(e,i,{get:()=>t[i],enumerable:!(c=B(t,i))||c.enumerable});return e};var Z=e=>Y(L({},"__esModule",{value:!0}),e);var ae={};W(ae,{RGXArrowPagination:()=>S,RGXArrowPaginationProps:()=>S,RGXTablePagination:()=>X,RGXTablePaginationProps:()=>X,ReactGridX:()=>G,ReactGridXColumnProps:()=>G,ReactGridXProps:()=>G});module.exports=Z(ae);var P=require("react");var N=require("@fortawesome/react-fontawesome");var _=require("@fortawesome/free-brands-svg-icons"),ee=require("@fortawesome/free-regular-svg-icons"),p=require("@fortawesome/free-solid-svg-icons"),d={faChevronLeft:p.faChevronLeft,faChevronRight:p.faChevronRight,faAngleDoubleLeft:p.faAngleDoubleLeft,faAngleDoubleRight:p.faAngleDoubleRight,faSort:p.faSort,faSortUp:p.faSortUp,faSortDown:p.faSortDown};var n=require("react/jsx-runtime"),re=({currentPage:e,totalPages:t,rowsPerPage:g,totalRows:c,onPageChange:i,onRowsPerPageChange:v,rowsPerPageOptions:b=[5,10,15],style:r={}})=>(0,n.jsxs)("div",{className:"rgx-arrow-pagination",style:r["rgx-arrow-pagination"],children:[(0,n.jsxs)("div",{className:"rgx-arrow-pagination-info",style:r["rgx-arrow-pagination-info"],children:["Showing ",(e-1)*g+1," to"," ",Math.min(e*g,c)," of ",c]}),(0,n.jsxs)("div",{className:"rgx-arrow-pagination-row-per-page",style:r["rgx-arrow-pagination-row-per-page"],children:[(0,n.jsxs)("div",{className:"rgx-arrow-rows-per-page",style:r["rgx-arrow-rows-per-page"],children:[(0,n.jsx)("label",{htmlFor:"rowsPerPage",className:"rgx-arrow-rows-per-page-label",style:r["rgx-arrow-rows-per-page-label"],children:"Rows per page:"}),(0,n.jsx)("select",{id:"rowsPerPage",className:"rgx-arrow-rows-per-page-select",style:r["rgx-arrow-rows-per-page-select"],value:g,onChange:x=>v(Number(x.target.value)),children:b?.map(x=>(0,n.jsx)("option",{value:x,children:x},x))})]}),(0,n.jsxs)("div",{className:"rgx-arrow-pagination-controls",style:r["rgx-arrow-pagination-controls"],children:[(0,n.jsx)("button",{disabled:e===1,onClick:()=>i(1),className:"rgx-arrow-pagination-button",style:r["rgx-arrow-pagination-button"],children:(0,n.jsx)(N.FontAwesomeIcon,{icon:d.faAngleDoubleLeft})}),(0,n.jsx)("button",{disabled:e===1,onClick:()=>i(e-1),className:"rgx-arrow-pagination-button",style:r["rgx-arrow-pagination-button"],children:(0,n.jsx)(N.FontAwesomeIcon,{icon:d.faChevronLeft})}),(0,n.jsxs)("div",{className:"rgx-arrow-pagination-page-of",style:r["rgx-arrow-pagination-page-of"],children:["Page ",e," of ",t]}),(0,n.jsx)("button",{disabled:e===t,onClick:()=>i(e+1),className:"rgx-arrow-pagination-button",style:r["rgx-arrow-pagination-button"],children:(0,n.jsx)(N.FontAwesomeIcon,{icon:d.faChevronRight})}),(0,n.jsx)("button",{disabled:e===t,onClick:()=>i(t),className:"rgx-arrow-pagination-button",style:r["rgx-arrow-pagination-button"],children:(0,n.jsx)(N.FontAwesomeIcon,{icon:d.faAngleDoubleRight})})]})]})]}),S=re;var T=require("@fortawesome/react-fontawesome");var s=require("react/jsx-runtime"),oe=({currentPage:e,totalPages:t,rowsPerPage:g,totalRows:c,onPageChange:i,onRowsPerPageChange:v,rowsPerPageOptions:b=[5,10,15],style:r={}})=>{let k=(()=>{let a=[];if(t<=4)for(let f=1;f<=t;f++)a.push(f);else{e>2?a.push(1,"..."):a.push(1);let f=Math.max(2,e-1),z=Math.min(t-1,e+1);for(let m=f;m<=z;m++)a.push(m);e<t-1?a.push("...",t):a.push(t)}return a})();return(0,s.jsxs)("div",{className:"rgx-table-pagination",style:r["rgx-table-pagination"],children:[(0,s.jsxs)("div",{className:"rgx-table-pagination-info",style:r["rgx-table-pagination-info"],children:["Showing ",(e-1)*g+1," to"," ",Math.min(e*g,c)," of ",c]}),(0,s.jsxs)("div",{className:"rgx-table-pagination-row-per-page",style:r["rgx-table-pagination-row-per-page"],children:[(0,s.jsxs)("div",{className:"rgx-rows-per-page",style:r["rgx-rows-per-page"],children:[(0,s.jsx)("label",{htmlFor:"rowsPerPage",className:"rgx-rows-per-page-label",style:r["rgx-rows-per-page-label"],children:"Rows per page:"}),(0,s.jsx)("select",{id:"rowsPerPage",className:"rgx-rows-per-page-select",style:r["rgx-rows-per-page-select"],value:g,onChange:a=>v(Number(a.target.value)),children:b?.map(a=>(0,s.jsx)("option",{value:a,children:a},a))})]}),(0,s.jsxs)("div",{className:"rgx-table-pagination-controls",style:r["rgx-table-pagination-controls"],children:[(0,s.jsx)("button",{disabled:e===1,onClick:()=>i(e-1),className:"rgx-table-pagination-button",style:r["rgx-table-pagination-button"],children:(0,s.jsx)(T.FontAwesomeIcon,{icon:d.faChevronLeft})}),k.map((a,y)=>typeof a=="number"?(0,s.jsx)("button",{className:`rgx-table-pagination-button ${e===a?"rgx-active":""}`,style:e===a?{...r["rgx-table-pagination-button"],...r["rgx-table-pagination-button-active"]}:r["rgx-table-pagination-button"],onClick:()=>i(a),children:a},y):(0,s.jsx)("button",{disabled:!0,className:"rgx-table-pagination-button rgx-table-pagination-ellipsis",style:{...r["rgx-table-pagination-button"],cursor:"default",opacity:.6},children:a},y)),(0,s.jsx)("button",{disabled:e===t,onClick:()=>i(e+1),className:"rgx-table-pagination-button",style:r["rgx-table-pagination-button"],children:(0,s.jsx)(T.FontAwesomeIcon,{icon:d.faChevronRight})})]})]})]})},X=oe;var U=require("@fortawesome/react-fontawesome");var l=require("react/jsx-runtime"),te=({columns:e,data:t,theme:g="rgx-theme",rowsPerPageOptions:c=[5,10,15],paginationType:i="rgx-table-pagination",paginationStyle:v={},tableStyle:b={},serverSide:r=!1,onPaginationAndRowSizeChange:x,totalRows:k,serverSideSorting:a,onSorting:y})=>{let[f,z]=(0,P.useState)(1),[m,j]=(0,P.useState)(t),[D,E]=(0,P.useState)(null),[F,J]=(0,P.useState)("asc"),[u,H]=(0,P.useState)(c[0]),I=o=>{z(o),x&&x(o,u)},M=o=>{H(o),z(1),x&&x(1,o)},V=o=>{let w=D===o&&F==="asc"?"desc":"asc";if(E(o),J(w),a&&y)return y(o,w);let R=e.find(h=>h.key===o),A=R?.onSort?R.onSort([...t],w):[...t].sort((h,C)=>!isNaN(h[o])&&!isNaN(C[o])?w==="asc"?h[o]-C[o]:C[o]-h[o]:w==="asc"?String(h[o]).localeCompare(String(C[o])):String(C[o]).localeCompare(String(h[o])));j(A)},O=Math.ceil(r?(k??0)/u:m.length/u),q=r?m:m.slice((f-1)*u,f*u),$={"rgx-table-pagination":(0,l.jsx)(X,{currentPage:f,totalPages:O,rowsPerPage:u,totalRows:r?k??0:m.length,onPageChange:I,onRowsPerPageChange:M,rowsPerPageOptions:c,style:v}),"rgx-arrow-pagination":(0,l.jsx)(S,{currentPage:f,totalPages:O,rowsPerPage:u,totalRows:r?k??0:m.length,onPageChange:I,onRowsPerPageChange:M,rowsPerPageOptions:c,style:v})};return(0,l.jsxs)("div",{children:[(0,l.jsxs)("table",{className:g,style:b.table,children:[(0,l.jsx)("thead",{children:(0,l.jsx)("tr",{style:b["thead-tr"],children:e?.map((o,w)=>(0,l.jsxs)("th",{style:{textAlign:"left",cursor:o.sortable?"pointer":"default",...b.th},onClick:()=>o.sortable&&V(o.key),children:[o.name,o.sortable&&(0,l.jsx)(U.FontAwesomeIcon,{icon:D===o.key?F==="asc"?d.faSortUp:d.faSortDown:d.faSort,style:{marginLeft:"8px"}})]},w))})}),(0,l.jsx)("tbody",{style:b.tbody,children:q.map((o,w)=>(0,l.jsx)("tr",{className:"rgx-row",style:b.row,children:e.map((R,A)=>(0,l.jsx)("td",{style:b.td,children:R.render?R.render(o):o[R.name]??""},A))},o.id||w))})]}),$[i]]})},G=te;0&&(module.exports={RGXArrowPagination,RGXArrowPaginationProps,RGXTablePagination,RGXTablePaginationProps,ReactGridX,ReactGridXColumnProps,ReactGridXProps});
//# sourceMappingURL=index.js.map