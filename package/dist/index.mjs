import{useState as L}from"react";import{FontAwesomeIcon as v}from"@fortawesome/react-fontawesome";import{faFacebook as K}from"@fortawesome/free-brands-svg-icons";import{faSmile as W}from"@fortawesome/free-regular-svg-icons";import{faChevronLeft as M,faChevronRight as D,faAngleDoubleLeft as j,faAngleDoubleRight as E}from"@fortawesome/free-solid-svg-icons";var d={faChevronLeft:M,faChevronRight:D,faAngleDoubleLeft:j,faAngleDoubleRight:E};import{jsx as g,jsxs as u}from"react/jsx-runtime";var J=({currentPage:r,totalPages:o,rowsPerPage:l,totalRows:x,onPageChange:s,onRowsPerPageChange:f,rowsPerPageOptions:p=[5,10,15],style:e={}})=>u("div",{className:"rgx-arrow-pagination",style:e["rgx-arrow-pagination"],children:[u("div",{className:"rgx-arrow-pagination-info",style:e["rgx-arrow-pagination-info"],children:["Showing ",(r-1)*l+1," to"," ",Math.min(r*l,x)," of ",x]}),u("div",{className:"rgx-arrow-pagination-row-per-page",style:e["rgx-arrow-pagination-row-per-page"],children:[u("div",{className:"rgx-arrow-rows-per-page",style:e["rgx-arrow-rows-per-page"],children:[g("label",{htmlFor:"rowsPerPage",className:"rgx-arrow-rows-per-page-label",style:e["rgx-arrow-rows-per-page-label"],children:"Rows per page:"}),g("select",{id:"rowsPerPage",className:"rgx-arrow-rows-per-page-select",style:e["rgx-arrow-rows-per-page-select"],value:l,onChange:n=>f(Number(n.target.value)),children:p?.map(n=>g("option",{value:n,children:n},n))})]}),u("div",{className:"rgx-arrow-pagination-controls",style:e["rgx-arrow-pagination-controls"],children:[g("button",{disabled:r===1,onClick:()=>s(1),className:"rgx-arrow-pagination-button",style:e["rgx-arrow-pagination-button"],children:g(v,{icon:d.faAngleDoubleLeft})}),g("button",{disabled:r===1,onClick:()=>s(r-1),className:"rgx-arrow-pagination-button",style:e["rgx-arrow-pagination-button"],children:g(v,{icon:d.faChevronLeft})}),u("div",{className:"rgx-arrow-pagination-page-of",style:e["rgx-arrow-pagination-page-of"],children:["Page ",r," of ",o]}),g("button",{disabled:r===o,onClick:()=>s(r+1),className:"rgx-arrow-pagination-button",style:e["rgx-arrow-pagination-button"],children:g(v,{icon:d.faChevronRight})}),g("button",{disabled:r===o,onClick:()=>s(o),className:"rgx-arrow-pagination-button",style:e["rgx-arrow-pagination-button"],children:g(v,{icon:d.faAngleDoubleRight})})]})]})]}),R=J;import{FontAwesomeIcon as A}from"@fortawesome/react-fontawesome";import{jsx as c,jsxs as y}from"react/jsx-runtime";var O=({currentPage:r,totalPages:o,rowsPerPage:l,totalRows:x,onPageChange:s,onRowsPerPageChange:f,rowsPerPageOptions:p=[5,10,15],style:e={}})=>{let h=(()=>{let a=[];if(o<=4)for(let t=1;t<=o;t++)a.push(t);else{r>2?a.push(1,"..."):a.push(1);let t=Math.max(2,r-1),k=Math.min(o-1,r+1);for(let w=t;w<=k;w++)a.push(w);r<o-1?a.push("...",o):a.push(o)}return a})();return y("div",{className:"rgx-table-pagination",style:e["rgx-table-pagination"],children:[y("div",{className:"rgx-table-pagination-info",style:e["rgx-table-pagination-info"],children:["Showing ",(r-1)*l+1," to"," ",Math.min(r*l,x)," of ",x]}),y("div",{className:"rgx-table-pagination-row-per-page",style:e["rgx-table-pagination-row-per-page"],children:[y("div",{className:"rgx-rows-per-page",style:e["rgx-rows-per-page"],children:[c("label",{htmlFor:"rowsPerPage",className:"rgx-rows-per-page-label",style:e["rgx-rows-per-page-label"],children:"Rows per page:"}),c("select",{id:"rowsPerPage",className:"rgx-rows-per-page-select",style:e["rgx-rows-per-page-select"],value:l,onChange:a=>f(Number(a.target.value)),children:p?.map(a=>c("option",{value:a,children:a},a))})]}),y("div",{className:"rgx-table-pagination-controls",style:e["rgx-table-pagination-controls"],children:[c("button",{disabled:r===1,onClick:()=>s(r-1),className:"rgx-table-pagination-button",style:e["rgx-table-pagination-button"],children:c(A,{icon:d.faChevronLeft})}),h.map((a,m)=>typeof a=="number"?c("button",{className:`rgx-table-pagination-button ${r===a?"rgx-active":""}`,style:r===a?{...e["rgx-table-pagination-button"],...e["rgx-table-pagination-button-active"]}:e["rgx-table-pagination-button"],onClick:()=>s(a),children:a},m):c("button",{disabled:!0,className:"rgx-table-pagination-button rgx-table-pagination-ellipsis",style:{...e["rgx-table-pagination-button"],cursor:"default",opacity:.6},children:a},m)),c("button",{disabled:r===o,onClick:()=>s(r+1),className:"rgx-table-pagination-button",style:e["rgx-table-pagination-button"],children:c(A,{icon:d.faChevronRight})})]})]})]})},P=O;import{jsx as b,jsxs as S}from"react/jsx-runtime";var U=({columns:r,data:o,theme:l="rgx-theme",rowsPerPageOptions:x=[5,10,15],paginationType:s="rgx-table-pagination",paginationStyle:f={},tableStyle:p={},serverSide:e=!1,onPaginationAndRowSizeChange:n,totalRows:h})=>{let[a,m]=L(1),[t,k]=L(x[0]),w=i=>{m(i),n&&n(i,t)},z=i=>{k(i),m(1),n&&n(1,i)},G=Math.ceil(e?(h??0)/t:o.length/t),T=e?o:o.slice((a-1)*t,a*t),F={"rgx-table-pagination":b(P,{currentPage:a,totalPages:G,rowsPerPage:t,totalRows:e?h??0:o.length,onPageChange:w,onRowsPerPageChange:z,rowsPerPageOptions:x,style:f}),"rgx-arrow-pagination":b(R,{currentPage:a,totalPages:G,rowsPerPage:t,totalRows:e?h??0:o.length,onPageChange:w,onRowsPerPageChange:z,rowsPerPageOptions:x,style:f})};return S("div",{children:[S("table",{className:l,style:p.table,children:[b("thead",{children:b("tr",{style:p["thead-tr"],children:r?.map((i,N)=>b("th",{style:{textAlign:"left",...p.th},children:i.name},N))})}),b("tbody",{style:p.tbody,children:T.map((i,N)=>b("tr",{className:"rgx-row",style:p.row,children:r.map((C,I)=>b("td",{style:p.td,children:C.render?C.render(i):i[C.name]??""},I))},i.id||N))})]}),F[s]]})},X=U;export{R as RGXArrowPagination,R as RGXArrowPaginationProps,P as RGXTablePagination,P as RGXTablePaginationProps,X as ReactGridX,X as ReactGridXColumnProps,X as ReactGridXProps};
//# sourceMappingURL=index.mjs.map