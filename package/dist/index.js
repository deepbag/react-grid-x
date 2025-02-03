"use strict";var we=Object.create;var I=Object.defineProperty;var ve=Object.getOwnPropertyDescriptor;var ye=Object.getOwnPropertyNames;var ke=Object.getPrototypeOf,Re=Object.prototype.hasOwnProperty;var Ce=(t,a)=>{for(var p in a)I(t,p,{get:a[p],enumerable:!0})},le=(t,a,p,f)=>{if(a&&typeof a=="object"||typeof a=="function")for(let d of ye(a))!Re.call(t,d)&&d!==p&&I(t,d,{get:()=>a[d],enumerable:!(f=ve(a,d))||f.enumerable});return t};var Ne=(t,a,p)=>(p=t!=null?we(ke(t)):{},le(a||!t||!t.__esModule?I(p,"default",{value:t,enumerable:!0}):p,t)),Ae=t=>le(I({},"__esModule",{value:!0}),t);var Ee={};Ce(Ee,{RGXArrowPagination:()=>q,RGXLoader:()=>O,RGXTablePagination:()=>z,RGXTooltip:()=>B,ReactGridX:()=>ce});module.exports=Ae(Ee);var h=Ne(require("react"));var V=require("@fortawesome/react-fontawesome");var Xe=require("@fortawesome/free-brands-svg-icons"),Ge=require("@fortawesome/free-regular-svg-icons"),l=require("@fortawesome/free-solid-svg-icons"),c={faChevronLeft:l.faChevronLeft,faChevronRight:l.faChevronRight,faAngleDoubleLeft:l.faAngleDoubleLeft,faAngleDoubleRight:l.faAngleDoubleRight,faSort:l.faSort,faSortUp:l.faSortUp,faSortDown:l.faSortDown,faChevronDown:l.faChevronDown,faEllipsisVertical:l.faEllipsisVertical,faCircleArrowUp:l.faCircleArrowUp,faCircleArrowDown:l.faCircleArrowDown};var g=require("react/jsx-runtime"),Pe=({currentPage:t,totalPages:a,rowsPerPage:p,totalRows:f,onPageChange:d,onRowsPerPageChange:C,rowsPerPageOptions:x=[5,10,15],style:i={},loading:b=!1})=>(0,g.jsxs)("div",{className:"rgx-arrow-pagination",style:i["rgx-arrow-pagination"],children:[(0,g.jsxs)("div",{className:"rgx-arrow-pagination-info",style:i["rgx-arrow-pagination-info"],children:["Showing ",(t-1)*p+1," to"," ",Math.min(t*p,f)," of ",f]}),(0,g.jsxs)("div",{className:"rgx-arrow-pagination-row-per-page",style:i["rgx-arrow-pagination-row-per-page"],children:[(0,g.jsxs)("div",{className:"rgx-arrow-rows-per-page",style:i["rgx-arrow-rows-per-page"],children:[(0,g.jsx)("label",{htmlFor:"rowsPerPage",className:"rgx-arrow-rows-per-page-label",style:i["rgx-arrow-rows-per-page-label"],children:"Rows per page:"}),(0,g.jsx)("select",{id:"rowsPerPage",className:"rgx-arrow-rows-per-page-select",style:i["rgx-arrow-rows-per-page-select"],value:p,onChange:v=>C(Number(v.target.value)),disabled:b,children:x?.map(v=>(0,g.jsx)("option",{value:v,children:v},v))})]}),(0,g.jsxs)("div",{className:"rgx-arrow-pagination-controls",style:i["rgx-arrow-pagination-controls"],children:[(0,g.jsx)("button",{disabled:t===1||b,onClick:()=>d(1),className:"rgx-arrow-pagination-button",style:i["rgx-arrow-pagination-button"],children:(0,g.jsx)(V.FontAwesomeIcon,{icon:c.faAngleDoubleLeft})}),(0,g.jsx)("button",{disabled:t===1||b,onClick:()=>d(t-1),className:"rgx-arrow-pagination-button",style:i["rgx-arrow-pagination-button"],children:(0,g.jsx)(V.FontAwesomeIcon,{icon:c.faChevronLeft})}),(0,g.jsxs)("div",{className:"rgx-arrow-pagination-page-of",style:i["rgx-arrow-pagination-page-of"],children:["Page ",t," of ",a]}),(0,g.jsx)("button",{disabled:t===a||b,onClick:()=>d(t+1),className:"rgx-arrow-pagination-button",style:i["rgx-arrow-pagination-button"],children:(0,g.jsx)(V.FontAwesomeIcon,{icon:c.faChevronRight})}),(0,g.jsx)("button",{disabled:t===a||b,onClick:()=>d(a),className:"rgx-arrow-pagination-button",style:i["rgx-arrow-pagination-button"],children:(0,g.jsx)(V.FontAwesomeIcon,{icon:c.faAngleDoubleRight})})]})]})]}),q=Pe;var Z=require("@fortawesome/react-fontawesome");var m=require("react/jsx-runtime"),De=({currentPage:t,totalPages:a,rowsPerPage:p,totalRows:f,onPageChange:d,onRowsPerPageChange:C,rowsPerPageOptions:x=[5,10,15],style:i={},loading:b=!1})=>{let T=(()=>{let s=[];if(a<=4)for(let y=1;y<=a;y++)s.push(y);else{t>2?s.push(1,"..."):s.push(1);let y=Math.max(2,t-1),X=Math.min(a-1,t+1);for(let F=y;F<=X;F++)s.push(F);t<a-1?s.push("...",a):s.push(a)}return s})();return(0,m.jsxs)("div",{className:"rgx-table-pagination",style:i["rgx-table-pagination"],children:[(0,m.jsxs)("div",{className:"rgx-table-pagination-info",style:i["rgx-table-pagination-info"],children:["Showing ",(t-1)*p+1," to"," ",Math.min(t*p,f)," of ",f]}),(0,m.jsxs)("div",{className:"rgx-table-pagination-row-per-page",style:i["rgx-table-pagination-row-per-page"],children:[(0,m.jsxs)("div",{className:"rgx-rows-per-page",style:i["rgx-rows-per-page"],children:[(0,m.jsx)("label",{htmlFor:"rowsPerPage",className:"rgx-rows-per-page-label",style:i["rgx-rows-per-page-label"],children:"Rows per page:"}),(0,m.jsx)("select",{id:"rowsPerPage",className:"rgx-rows-per-page-select",style:i["rgx-rows-per-page-select"],value:p,onChange:s=>C(Number(s.target.value)),disabled:b,children:x?.map(s=>(0,m.jsx)("option",{value:s,children:s},s))})]}),(0,m.jsxs)("div",{className:"rgx-table-pagination-controls",style:i["rgx-table-pagination-controls"],children:[(0,m.jsx)("button",{disabled:t===1||b,onClick:()=>d(t-1),className:"rgx-table-pagination-button",style:i["rgx-table-pagination-button"],children:(0,m.jsx)(Z.FontAwesomeIcon,{icon:c.faChevronLeft})}),T.map((s,L)=>typeof s=="number"?(0,m.jsx)("button",{className:`rgx-table-pagination-button ${t===s?"rgx-active":""}`,style:t===s?{...i["rgx-table-pagination-button"],...i["rgx-table-pagination-button-active"]}:i["rgx-table-pagination-button"],onClick:()=>d(s),disabled:b,children:s},L):(0,m.jsx)("button",{disabled:!0,className:"rgx-table-pagination-button rgx-table-pagination-ellipsis",style:{...i["rgx-table-pagination-button"],cursor:"default",opacity:.6},children:s},L)),(0,m.jsx)("button",{disabled:t===a||b,onClick:()=>d(t+1),className:"rgx-table-pagination-button",style:i["rgx-table-pagination-button"],children:(0,m.jsx)(Z.FontAwesomeIcon,{icon:c.faChevronRight})})]})]})]})},z=De;var R=require("@fortawesome/react-fontawesome");var J=require("react/jsx-runtime"),Te=({content:t,children:a})=>(0,J.jsxs)("div",{className:"rgx-tooltip-container",children:[a,(0,J.jsx)("span",{className:"rgx-tooltip-text",children:t})]}),B=Te;var _=require("react/jsx-runtime"),Le=({message:t="Loading, please wait..."})=>(0,_.jsxs)("div",{className:"rgx-loader-container",children:[(0,_.jsx)("div",{className:"rgx-spinner"}),(0,_.jsx)("div",{className:"rgx-loader-message",children:t})]}),O=Le;var K=require("react"),Q=require("react/jsx-runtime"),Fe=({children:t,isOpen:a,onClose:p})=>{let f=(0,K.useRef)(null);return(0,K.useEffect)(()=>{let d=C=>{f.current&&!f.current.contains(C.target)&&p()};return a&&document.addEventListener("mousedown",d),()=>document.removeEventListener("mousedown",d)},[a,p]),a?(0,Q.jsxs)("div",{className:"popover-content show",ref:f,children:[(0,Q.jsx)("div",{className:"popover-arrow"}),t," "]}):null},pe=Fe;var o=require("react/jsx-runtime"),Se=({columns:t,data:a,theme:p="rgx-theme",rowsPerPageOptions:f=[5,10,15],paginationType:d="rgx-table-pagination",paginationStyle:C={},tableStyle:x={},serverSidePagination:i=!1,onPaginationAndRowSizeChange:b,totalRows:v,serverSideSorting:T=!1,onSorting:s,onRowClick:L,expandedComponent:y,loading:X=!1,loaderComponent:F=()=>(0,o.jsx)(O,{}),multiColumnSort:de=!0,selectionCheckbox:j=!1,onSelectionCheck:$})=>{let[H,ee]=(0,h.useState)(1),[E,ge]=(0,h.useState)(a),[N,W]=(0,h.useState)([]),[G,fe]=(0,h.useState)(f[0]),[M,te]=(0,h.useState)(null),[Y,oe]=(0,h.useState)(null),[S,ae]=(0,h.useState)({selectedRows:[],selectAllChecked:!1}),re=e=>{ee(e),b&&b(e,G)},ie=e=>{fe(e),ee(1),b&&b(1,e)},me=()=>{let e=!S.selectAllChecked,n=e?a.map(r=>r.id):[];ae({selectedRows:n,selectAllChecked:e}),$&&$(n,e)},be=e=>{let n=S.selectedRows.includes(e)?S.selectedRows.filter(k=>k!==e):[...S.selectedRows,e],r=n.length===a.length;ae({selectedRows:n,selectAllChecked:r}),$&&$(n,r)},U=(e,n)=>{W(r=>{if(!de)return[{key:e.key,direction:n||(r[0]?.key===e.key&&r[0].direction==="asc"?"desc":"asc")}];let k=r.find(w=>w.key===e.key),u;return k?u=r.map(w=>w.key===e.key?{key:w.key,direction:n||(w.direction==="asc"?"desc":"asc")}:w):u=[...r,{key:e.key,direction:n||"asc"}],u=u.filter(w=>w.direction!==void 0),T&&s?s(u):W(u),u})},xe=()=>{W([]),T&&s&&s([])},se=(0,h.useMemo)(()=>T?a:[...a].sort((n,r)=>{for(let{key:k,direction:u}of N){let w=t.find(A=>A.key===k),P=n[k],D=r[k];if(w?.onSort){let A=w.onSort(P,D,u);if(A!==0)return A}else if(typeof P=="string"&&typeof D=="string"){let A=P.localeCompare(D);if(A!==0)return u==="asc"?A:-A}else if(typeof P=="number"&&typeof D=="number"&&P!==D)return u==="asc"?P-D:D-P}return 0}),[a,N,t,T]),ne=Math.ceil(i?(v??0)/G:E.length/G),he=i?E:E.slice((H-1)*G,H*G),ue={"rgx-table-pagination":(0,o.jsx)(z,{currentPage:H,totalPages:ne,rowsPerPage:G,totalRows:i?v??0:E.length,onPageChange:re,onRowsPerPageChange:ie,rowsPerPageOptions:f,style:C,loading:X}),"rgx-arrow-pagination":(0,o.jsx)(q,{currentPage:H,totalPages:ne,rowsPerPage:G,totalRows:i?v??0:E.length,onPageChange:re,onRowsPerPageChange:ie,rowsPerPageOptions:f,style:C,loading:X})};return(0,h.useEffect)(()=>{ge(se)},[se]),(0,o.jsxs)("div",{children:[(0,o.jsxs)("div",{className:X?"rgx-table-container":"",children:[X&&F&&F(),(0,o.jsxs)("table",{className:p,style:x.table,children:[(0,o.jsx)("thead",{children:(0,o.jsxs)("tr",{style:x["thead-tr"],children:[j&&(0,o.jsx)("th",{style:{width:"20px"},children:(0,o.jsx)("input",{type:"checkbox",checked:S.selectAllChecked,onChange:me})}),t?.map((e,n)=>(0,o.jsx)("th",{style:{textAlign:"left",width:e.width||"auto",...x.th},children:(0,o.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,o.jsxs)("div",{onClick:()=>e.sortable&&U(e),style:{cursor:e.sortable?"pointer":"default"},children:[e.name," ",e.sortable&&(0,o.jsx)(R.FontAwesomeIcon,{icon:N.some(r=>r.key===e.key)?N.find(r=>r.key===e.key)?.direction==="asc"?c.faSortUp:c.faSortDown:c.faSort,style:{marginLeft:"8px"}})]}),e.sortable&&(0,o.jsxs)("div",{children:[(0,o.jsx)("div",{style:{cursor:"pointer",display:"inline-block"},onClick:()=>{oe(Y===e.key?null:e.key)},children:(0,o.jsx)(R.FontAwesomeIcon,{icon:c.faEllipsisVertical,style:{marginRight:"8px"}})}),Y===e.key&&(0,o.jsxs)(pe,{isOpen:Y===e.key,onClose:()=>{oe(null)},children:[N.find(r=>r.key===e.key)?.direction==="desc"&&(0,o.jsxs)("div",{className:"rgx-popup-items",onClick:()=>{e.sortable&&U(e,"asc")},children:[(0,o.jsx)(R.FontAwesomeIcon,{icon:c.faCircleArrowUp,style:{marginRight:"8px",fontSize:"14px"}}),(0,o.jsx)("span",{children:"Sort Ascending"})]}),N.find(r=>r.key===e.key)?.direction==="asc"&&(0,o.jsxs)("div",{className:"rgx-popup-items",onClick:()=>{e.sortable&&U(e,"desc")},children:[(0,o.jsx)(R.FontAwesomeIcon,{icon:c.faCircleArrowDown,style:{marginRight:"8px",fontSize:"14px"}}),(0,o.jsx)("span",{children:"Sort Descending"})]}),!N.some(r=>r.key===e.key)&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("div",{className:"rgx-popup-items",onClick:()=>{e.sortable&&U(e,"asc")},children:[(0,o.jsx)(R.FontAwesomeIcon,{icon:c.faCircleArrowUp,style:{marginRight:"8px",fontSize:"14px"}}),(0,o.jsx)("span",{children:"Sort Ascending"})]}),(0,o.jsxs)("div",{className:"rgx-popup-items",onClick:()=>{e.sortable&&U(e,"desc")},children:[(0,o.jsx)(R.FontAwesomeIcon,{icon:c.faCircleArrowDown,style:{marginRight:"8px",fontSize:"14px"}}),(0,o.jsx)("span",{children:"Sort Descending"})]})]}),!!N.some(r=>r.key===e.key)&&(0,o.jsxs)("div",{className:"rgx-popup-items",onClick:()=>{xe()},children:[(0,o.jsx)(R.FontAwesomeIcon,{icon:c.faSort,style:{marginRight:"8px",fontSize:"14px"}}),(0,o.jsx)("span",{children:"Clear Sort"})]})]})]})]})},n))]})}),(0,o.jsx)("tbody",{style:x.tbody,className:`${X?"rgx-tobody-loading":""}`,children:he.map((e,n)=>(0,o.jsxs)(h.default.Fragment,{children:[(0,o.jsxs)("tr",{className:`rgx-row ${M===n?"rgx-expanded":""}`,style:x.row,onClick:()=>{y&&te(M===n?null:n),L&&L(e)},children:[j&&(0,o.jsx)("td",{style:{width:"20px"},children:(0,o.jsx)("input",{type:"checkbox",checked:S.selectedRows.includes(e.id),onChange:()=>be(e.id)})}),t.map((r,k)=>(0,o.jsxs)("td",{style:{width:r.width||"auto",...x.td},children:[y&&k===0&&(0,o.jsx)("span",{className:"rgx-expanded-arrow",style:x["rgx-expanded-arrow"],onClick:u=>{u.stopPropagation(),te(M===n?null:n)},children:(0,o.jsx)(R.FontAwesomeIcon,{icon:M===n?c.faChevronDown:c.faChevronRight,className:"rgx-arrow-icon",style:x["rgx-arrow-icon"]})}),r.tooltip?(0,o.jsx)(B,{content:r.tooltipCustomContent?r.tooltipCustomContent(e):e[r.key],children:r.render?r.render(e):e[r.key]??""}):r.render?r.render(e):e[r.key]??""]},k))]},e.id||n),M===n&&y&&(0,o.jsx)("tr",{className:"rgx-expanded-row",style:x["rgx-expanded-row"],children:(0,o.jsx)("td",{colSpan:t.length,className:"rgx-expanded-row-td",style:x["rgx-expanded-row-td"],children:y(e)})})]},e.id||n))})]})]}),ue[d]]})},ce=Se;0&&(module.exports={RGXArrowPagination,RGXLoader,RGXTablePagination,RGXTooltip,ReactGridX});
//# sourceMappingURL=index.js.map