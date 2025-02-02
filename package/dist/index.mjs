import{useState as C}from"react";import{FontAwesomeIcon as A}from"@fortawesome/react-fontawesome";import{faFacebook as Ce}from"@fortawesome/free-brands-svg-icons";import{faSmile as Se}from"@fortawesome/free-regular-svg-icons";import{faChevronLeft as re,faChevronRight as ae,faAngleDoubleLeft as ne,faAngleDoubleRight as ie,faSort as se,faSortUp as pe,faSortDown as le,faChevronDown as ge}from"@fortawesome/free-solid-svg-icons";var p={faChevronLeft:re,faChevronRight:ae,faAngleDoubleLeft:ne,faAngleDoubleRight:ie,faSort:se,faSortUp:pe,faSortDown:le,faChevronDown:ge};import{jsx as d,jsxs as k}from"react/jsx-runtime";var de=({currentPage:o,totalPages:a,rowsPerPage:b,totalRows:m,onPageChange:x,onRowsPerPageChange:y,rowsPerPageOptions:s=[5,10,15],style:t={},loading:i=!1})=>k("div",{className:"rgx-arrow-pagination",style:t["rgx-arrow-pagination"],children:[k("div",{className:"rgx-arrow-pagination-info",style:t["rgx-arrow-pagination-info"],children:["Showing ",(o-1)*b+1," to"," ",Math.min(o*b,m)," of ",m]}),k("div",{className:"rgx-arrow-pagination-row-per-page",style:t["rgx-arrow-pagination-row-per-page"],children:[k("div",{className:"rgx-arrow-rows-per-page",style:t["rgx-arrow-rows-per-page"],children:[d("label",{htmlFor:"rowsPerPage",className:"rgx-arrow-rows-per-page-label",style:t["rgx-arrow-rows-per-page-label"],children:"Rows per page:"}),d("select",{id:"rowsPerPage",className:"rgx-arrow-rows-per-page-select",style:t["rgx-arrow-rows-per-page-select"],value:b,onChange:c=>y(Number(c.target.value)),disabled:i,children:s?.map(c=>d("option",{value:c,children:c},c))})]}),k("div",{className:"rgx-arrow-pagination-controls",style:t["rgx-arrow-pagination-controls"],children:[d("button",{disabled:o===1||i,onClick:()=>x(1),className:"rgx-arrow-pagination-button",style:t["rgx-arrow-pagination-button"],children:d(A,{icon:p.faAngleDoubleLeft})}),d("button",{disabled:o===1||i,onClick:()=>x(o-1),className:"rgx-arrow-pagination-button",style:t["rgx-arrow-pagination-button"],children:d(A,{icon:p.faChevronLeft})}),k("div",{className:"rgx-arrow-pagination-page-of",style:t["rgx-arrow-pagination-page-of"],children:["Page ",o," of ",a]}),d("button",{disabled:o===a||i,onClick:()=>x(o+1),className:"rgx-arrow-pagination-button",style:t["rgx-arrow-pagination-button"],children:d(A,{icon:p.faChevronRight})}),d("button",{disabled:o===a||i,onClick:()=>x(a),className:"rgx-arrow-pagination-button",style:t["rgx-arrow-pagination-button"],children:d(A,{icon:p.faAngleDoubleRight})})]})]})]}),D=de;import{FontAwesomeIcon as B}from"@fortawesome/react-fontawesome";import{jsx as u,jsxs as L}from"react/jsx-runtime";var xe=({currentPage:o,totalPages:a,rowsPerPage:b,totalRows:m,onPageChange:x,onRowsPerPageChange:y,rowsPerPageOptions:s=[5,10,15],style:t={},loading:i=!1})=>{let M=(()=>{let r=[];if(a<=4)for(let f=1;f<=a;f++)r.push(f);else{o>2?r.push(1,"..."):r.push(1);let f=Math.max(2,o-1),h=Math.min(a-1,o+1);for(let P=f;P<=h;P++)r.push(P);o<a-1?r.push("...",a):r.push(a)}return r})();return L("div",{className:"rgx-table-pagination",style:t["rgx-table-pagination"],children:[L("div",{className:"rgx-table-pagination-info",style:t["rgx-table-pagination-info"],children:["Showing ",(o-1)*b+1," to"," ",Math.min(o*b,m)," of ",m]}),L("div",{className:"rgx-table-pagination-row-per-page",style:t["rgx-table-pagination-row-per-page"],children:[L("div",{className:"rgx-rows-per-page",style:t["rgx-rows-per-page"],children:[u("label",{htmlFor:"rowsPerPage",className:"rgx-rows-per-page-label",style:t["rgx-rows-per-page-label"],children:"Rows per page:"}),u("select",{id:"rowsPerPage",className:"rgx-rows-per-page-select",style:t["rgx-rows-per-page-select"],value:b,onChange:r=>y(Number(r.target.value)),disabled:i,children:s?.map(r=>u("option",{value:r,children:r},r))})]}),L("div",{className:"rgx-table-pagination-controls",style:t["rgx-table-pagination-controls"],children:[u("button",{disabled:o===1||i,onClick:()=>x(o-1),className:"rgx-table-pagination-button",style:t["rgx-table-pagination-button"],children:u(B,{icon:p.faChevronLeft})}),M.map((r,R)=>typeof r=="number"?u("button",{className:`rgx-table-pagination-button ${o===r?"rgx-active":""}`,style:o===r?{...t["rgx-table-pagination-button"],...t["rgx-table-pagination-button-active"]}:t["rgx-table-pagination-button"],onClick:()=>x(r),disabled:i,children:r},R):u("button",{disabled:!0,className:"rgx-table-pagination-button rgx-table-pagination-ellipsis",style:{...t["rgx-table-pagination-button"],cursor:"default",opacity:.6},children:r},R)),u("button",{disabled:o===a||i,onClick:()=>x(o+1),className:"rgx-table-pagination-button",style:t["rgx-table-pagination-button"],children:u(B,{icon:p.faChevronRight})})]})]})]})},F=xe;import{FontAwesomeIcon as Q}from"@fortawesome/react-fontawesome";import{jsx as fe,jsxs as be}from"react/jsx-runtime";var ce=({content:o,children:a})=>be("div",{className:"rgx-tooltip-container",children:[a,fe("span",{className:"rgx-tooltip-text",children:o})]}),E=ce;import{jsx as K,jsxs as we}from"react/jsx-runtime";var me=({message:o="Loading, please wait..."})=>we("div",{className:"rgx-loader-container",children:[K("div",{className:"rgx-spinner"}),K("div",{className:"rgx-loader-message",children:o})]}),J=me;import{Fragment as he,jsx as g,jsxs as N}from"react/jsx-runtime";var ue=({columns:o,data:a,theme:b="rgx-theme",rowsPerPageOptions:m=[5,10,15],paginationType:x="rgx-table-pagination",paginationStyle:y={},tableStyle:s={},serverSidePagination:t=!1,onPaginationAndRowSizeChange:i,totalRows:c,serverSideSorting:M=!1,onSorting:r,onRowClick:R,expandedComponent:f,loading:h=!1,loaderComponent:P=()=>g(J,{})})=>{let[G,U]=C(1),[S,W]=C(a),[$,Y]=C(null),[j,Z]=C("asc"),[v,_]=C(m[0]),[X,H]=C(null),V=e=>{U(e),i&&i(e,v)},q=e=>{_(e),U(1),i&&i(1,e)},ee=e=>{let n=$===e&&j==="asc"?"desc":"asc";if(Y(e),Z(n),M&&r)return r(e,n);let l=o.find(w=>w.key===e),T=l?.onSort?l.onSort([...a],n):[...a].sort((w,z)=>!isNaN(w[e])&&!isNaN(z[e])?n==="asc"?w[e]-z[e]:z[e]-w[e]:n==="asc"?String(w[e]).localeCompare(String(z[e])):String(z[e]).localeCompare(String(w[e])));W(T)},I=Math.ceil(t?(c??0)/v:S.length/v),oe=t?S:S.slice((G-1)*v,G*v),te={"rgx-table-pagination":g(F,{currentPage:G,totalPages:I,rowsPerPage:v,totalRows:t?c??0:S.length,onPageChange:V,onRowsPerPageChange:q,rowsPerPageOptions:m,style:y,loading:h}),"rgx-arrow-pagination":g(D,{currentPage:G,totalPages:I,rowsPerPage:v,totalRows:t?c??0:S.length,onPageChange:V,onRowsPerPageChange:q,rowsPerPageOptions:m,style:y,loading:h})};return N("div",{children:[N("div",{className:h?"rgx-table-container":"",children:[h&&P&&P(),N("table",{className:b,style:s.table,children:[g("thead",{children:g("tr",{style:s["thead-tr"],children:o?.map((e,n)=>N("th",{style:{textAlign:"left",cursor:e.sortable?"pointer":"default",...s.th},onClick:()=>e.sortable&&ee(e.key),children:[e.name,e.sortable&&g(Q,{icon:$===e.key?j==="asc"?p.faSortUp:p.faSortDown:p.faSort,style:{marginLeft:"8px"}})]},n))})}),g("tbody",{style:s.tbody,className:`${h?"rgx-tobody-loading":""}`,children:oe.map((e,n)=>N(he,{children:[g("tr",{className:`rgx-row ${X===n?"rgx-expanded":""}`,style:s.row,onClick:()=>{f&&H(X===n?null:n),R&&R(e)},children:o.map((l,T)=>N("td",{style:s.td,children:[f&&T===0&&g("span",{className:"rgx-expanded-arrow",style:s["rgx-expanded-arrow"],onClick:w=>{w.stopPropagation(),H(X===n?null:n)},children:g(Q,{icon:X===n?p.faChevronDown:p.faChevronRight,className:"rgx-arrow-icon",style:s["rgx-arrow-icon"]})}),l.tooltip?g(E,{content:l.tooltipCustomContent?l.tooltipCustomContent(e):e[l.key],children:l.render?l.render(e):e[l.key]??""}):l.render?l.render(e):e[l.key]??""]},T))},e.id||n),X===n&&f&&g("tr",{className:"rgx-expanded-row",style:s["rgx-expanded-row"],children:g("td",{colSpan:o.length,className:"rgx-expanded-row-td",style:s["rgx-expanded-row-td"],children:f(e)})})]}))})]})]}),te[x]]})},O=ue;export{J as LoaderProps,D as RGXArrowPagination,D as RGXArrowPaginationProps,J as RGXLoader,F as RGXTablePagination,F as RGXTablePaginationProps,E as RGXTooltip,O as ReactGridX,O as ReactGridXColumnProps,O as ReactGridXProps,E as TooltipProps};
//# sourceMappingURL=index.mjs.map