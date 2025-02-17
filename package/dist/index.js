"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; } function _nullishCoalesce(lhs, rhsFn) { if (lhs != null) { return lhs; } else { return rhsFn(); } } function _optionalChain(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) { return undefined; } if (op === 'access' || op === 'optionalAccess') { lastAccessLHS = value; value = fn(value); } else if (op === 'call' || op === 'optionalCall') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; }var _react = require('react'); var _react2 = _interopRequireDefault(_react);var _jsxruntime = require('react/jsx-runtime');var ve=({color:o="currentColor",svgPath:a,style:d={},className:p="",...g})=>{let w=a.match(/width=["']?(\d+)["']?/),t=a.match(/height=["']?(\d+)["']?/),s=w?`${w[1]}px`:"24px",x=t?`${t[1]}px`:"24px";return _jsxruntime.jsx.call(void 0, "span",{className:p,style:{display:"inline-block",width:s,height:x,...d},dangerouslySetInnerHTML:{__html:a.replace(/currentColor/g,o)},...g})},c= exports.RGXSVGIcon =ve;var ke=({currentPage:o,totalPages:a,rowsPerPage:d,totalRows:p,onPageChange:g,onRowsPerPageChange:w,rowsPerPageOptions:t=[5,10,15],style:s={},loading:x=!1})=>_jsxruntime.jsxs.call(void 0, "div",{className:"rgx-arrow-pagination",style:{...s["rgx-arrow-pagination"]},children:[_jsxruntime.jsxs.call(void 0, "div",{className:"rgx-arrow-pagination-info",style:{...s["rgx-arrow-pagination-info"]},children:["Showing ",(o-1)*d+1," to"," ",Math.min(o*d,p)," of ",p]}),_jsxruntime.jsxs.call(void 0, "div",{className:"rgx-arrow-pagination-row-per-page",style:{...s["rgx-arrow-pagination-row-per-page"]},children:[_jsxruntime.jsxs.call(void 0, "div",{className:"rgx-arrow-pagination-rows-per-page",style:{...s["rgx-arrow-pagination-rows-per-page"]},children:[_jsxruntime.jsx.call(void 0, "label",{htmlFor:"rowsPerPage",className:"rgx-arrow-pagination-rows-per-page-label",style:{...s["rgx-arrow-pagination-rows-per-page-label"]},children:"Rows per page:"}),_jsxruntime.jsx.call(void 0, "select",{id:"rowsPerPage",className:"rgx-arrow-pagination-rows-per-page-select",style:{...s["rgx-arrow-pagination-rows-per-page-select"]},value:d,onChange:y=>w(Number(y.target.value)),disabled:x,children:_optionalChain([t, 'optionalAccess', _2 => _2.map, 'call', _3 => _3(y=>_jsxruntime.jsx.call(void 0, "option",{value:y,children:y},y))])})]}),_jsxruntime.jsxs.call(void 0, "div",{className:"rgx-arrow-pagination-controls",style:{...s["rgx-arrow-pagination-controls"]},children:[_jsxruntime.jsx.call(void 0, "button",{disabled:o===1||x,onClick:()=>g(1),className:"rgx-arrow-pagination-button",style:{...s["rgx-arrow-pagination-button"]},children:_jsxruntime.jsx.call(void 0, c,{svgPath:'<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevrons-left"><path d="m11 17-5-5 5-5"/><path d="m18 17-5-5 5-5"/></svg>'})}),_jsxruntime.jsx.call(void 0, "button",{disabled:o===1||x,onClick:()=>g(o-1),className:"rgx-arrow-pagination-button",style:{...s["rgx-arrow-pagination-button"]},children:_jsxruntime.jsx.call(void 0, c,{svgPath:'<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-left"><path d="m15 18-6-6 6-6"/></svg>'})}),_jsxruntime.jsxs.call(void 0, "div",{className:"rgx-arrow-pagination-page-of",style:{...s["rgx-arrow-pagination-page-of"]},children:["Page ",o," of ",a]}),_jsxruntime.jsx.call(void 0, "button",{disabled:o===a||x,onClick:()=>g(o+1),className:"rgx-arrow-pagination-button",style:{...s["rgx-arrow-pagination-button"]},children:_jsxruntime.jsx.call(void 0, c,{svgPath:'<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>'})}),_jsxruntime.jsx.call(void 0, "button",{disabled:o===a||x,onClick:()=>g(a),className:"rgx-arrow-pagination-button",style:{...s["rgx-arrow-pagination-button"]},children:_jsxruntime.jsx.call(void 0, c,{svgPath:'<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevrons-right"><path d="m6 17 5-5-5-5"/><path d="m13 17 5-5-5-5"/></svg>'})})]})]})]}),K= exports.RGXArrowPagination =ke;var ye=({currentPage:o,totalPages:a,rowsPerPage:d,totalRows:p,onPageChange:g,onRowsPerPageChange:w,rowsPerPageOptions:t=[5,10,15],style:s={},loading:x=!1})=>{let N=(()=>{let n=[];if(a<=4)for(let v=1;v<=a;v++)n.push(v);else{o>2?n.push(1,"..."):n.push(1);let v=Math.max(2,o-1),A=Math.min(a-1,o+1);for(let F=v;F<=A;F++)n.push(F);o<a-1?n.push("...",a):n.push(a)}return n})();return _jsxruntime.jsxs.call(void 0, "div",{className:"rgx-table-pagination",style:{...s["rgx-table-pagination"]},children:[_jsxruntime.jsxs.call(void 0, "div",{className:"rgx-table-pagination-info",style:{...s["rgx-table-pagination-info"]},children:["Showing ",(o-1)*d+1," to"," ",Math.min(o*d,p)," of ",p]}),_jsxruntime.jsxs.call(void 0, "div",{className:"rgx-table-pagination-row-per-page",style:{...s["rgx-table-pagination-row-per-page"]},children:[_jsxruntime.jsxs.call(void 0, "div",{className:"rgx-table-pagination-rows-per-page",style:{...s["rgx-table-pagination-rows-per-page"]},children:[_jsxruntime.jsx.call(void 0, "label",{htmlFor:"rowsPerPage",className:"rgx-table-pagination-rows-per-page-label",style:{...s["rgx-table-pagination-rows-per-page-label"]},children:"Rows per page:"}),_jsxruntime.jsx.call(void 0, "select",{id:"rowsPerPage",className:"rgx-table-pagination-rows-per-page-select",style:{...s["rgx-table-pagination-rows-per-page-select"]},value:d,onChange:n=>w(Number(n.target.value)),disabled:x,children:_optionalChain([t, 'optionalAccess', _4 => _4.map, 'call', _5 => _5(n=>_jsxruntime.jsx.call(void 0, "option",{value:n,children:n},n))])})]}),_jsxruntime.jsxs.call(void 0, "div",{className:"rgx-table-pagination-controls",style:{...s["rgx-table-pagination-controls"]},children:[_jsxruntime.jsx.call(void 0, "button",{disabled:o===1||x,onClick:()=>g(o-1),className:"rgx-table-pagination-button-icon",style:{...s["rgx-table-pagination-button-icon"]},children:_jsxruntime.jsx.call(void 0, c,{svgPath:'<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-left"><path d="m15 18-6-6 6-6"/></svg>'})}),N.map((n,M)=>typeof n=="number"?_jsxruntime.jsx.call(void 0, "button",{className:`rgx-table-pagination-button ${o===n?"rgx-table-pagination-active":""}`,style:o===n?{...s["rgx-table-pagination-button"],...s["rgx-table-pagination-button-active"]}:{...s["rgx-table-pagination-button"]},onClick:()=>g(n),disabled:x,children:n},M):_jsxruntime.jsx.call(void 0, "button",{disabled:!0,className:"rgx-table-pagination-button rgx-table-pagination-ellipsis",style:{...s["rgx-table-pagination-button"],...s["rgx-table-pagination-ellipsis"],cursor:"default",opacity:.6},children:n},M)),_jsxruntime.jsx.call(void 0, "button",{disabled:o===a||x,onClick:()=>g(o+1),className:"rgx-table-pagination-button-icon",style:{...s["rgx-table-pagination-button-icon"]},children:_jsxruntime.jsx.call(void 0, c,{svgPath:'<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>'})})]})]})]})},O= exports.RGXTablePagination =ye;var Ne=({content:o,children:a,style:d={}})=>_jsxruntime.jsxs.call(void 0, "div",{className:"rgx-tooltip-container",style:{...d["rgx-tooltip-container"]},children:[a,_jsxruntime.jsx.call(void 0, "span",{className:"rgx-tooltip-text",style:{minWidth:_optionalChain([String, 'call', _6 => _6(o), 'optionalAccess', _7 => _7.length])*5,...d["rgx-tooltip-text"]},children:o})]}),Q= exports.RGXTooltip =Ne;var Me=({message:o="Loading, please wait...",style:a={}})=>_jsxruntime.jsxs.call(void 0, "div",{className:"rgx-loader-container",style:{...a["rgx-loader-container"]},children:[_jsxruntime.jsx.call(void 0, "div",{className:"rgx-loader-spinner",style:{...a["rgx-loader-spinner"]}}),_jsxruntime.jsx.call(void 0, "div",{className:"rgx-loader-message",style:{...a["rgx-loader-message"]},children:o})]}),Y= exports.RGXLoader =Me;var Be=({children:o,isOpen:a,onClose:d,style:p={}})=>{let g=_react.useRef.call(void 0, null);return _react.useEffect.call(void 0, ()=>{let w=t=>{g.current&&!g.current.contains(t.target)&&d()};return a&&document.addEventListener("mousedown",w),()=>document.removeEventListener("mousedown",w)},[a,d]),a?_jsxruntime.jsxs.call(void 0, "div",{className:"rgx-popover-content rgx-popover-show",ref:g,style:{...p["rgx-popover-content"],...p["rgx-popover-show"]},children:[_jsxruntime.jsx.call(void 0, "div",{className:"rgx-popover-arrow",style:{...p["rgx-popover-arrow"]}}),o," "]}):null},pe=Be;var Ve=({columns:o,data:a,theme:d="rgx-theme",rowsPerPageOptions:p=[5,10,15],paginationType:g="rgx-table-pagination",paginationStyle:w={},tableStyle:t={},loaderStyle:s={},popupStyle:x={},tooltipStyle:y={},serverSidePagination:N=!1,onPaginationAndRowSizeChange:n,totalRows:M,serverSideSorting:v=!1,onSorting:A,onRowClick:F,expandedComponent:q,loading:X=!1,loaderComponent:S=({style:L})=>_jsxruntime.jsx.call(void 0, Y,{style:L}),multiColumnSort:ce=!1,selectionCheckbox:ee=!1,onSelectionCheck:$,rowPerPage:E=10,page:H=1})=>{let[L,z]=_react.useState.call(void 0, H),[_,ge]=_react.useState.call(void 0, a),[R,J]=_react.useState.call(void 0, []),[G,te]=_react.useState.call(void 0, p[0]),[W,oe]=_react.useState.call(void 0, null),[U,re]=_react.useState.call(void 0, null),[V,ae]=_react.useState.call(void 0, {selectedRows:[],selectAllChecked:!1}),se=e=>{z(e),oe(null),n&&n(e,G)},ie=e=>{te(e),z(1),n&&n(1,e)},he=()=>{let e=!V.selectAllChecked,l=e?a.map(r=>r.id):[];ae({selectedRows:l,selectAllChecked:e}),$&&$(l,e)},xe=e=>{let l=V.selectedRows.includes(e)?V.selectedRows.filter(f=>f!==e):[...V.selectedRows,e],r=l.length===a.length;ae({selectedRows:l,selectAllChecked:r}),$&&$(l,r)},D=(e,l)=>{J(r=>{if(!ce)return[{key:e.key,direction:l||(_optionalChain([r, 'access', _8 => _8[0], 'optionalAccess', _9 => _9.key])===e.key&&r[0].direction==="asc"?"desc":"asc")}];let f=r.find(u=>u.key===e.key),b;return f?b=r.map(u=>u.key===e.key?{key:u.key,direction:l||(u.direction==="asc"?"desc":"asc")}:u):b=[...r,{key:e.key,direction:l||"asc"}],b=b.filter(u=>u.direction!==void 0),v&&A?A(b):J(b),b})},we=()=>{J([]),v&&A&&A([])},ne=_react.useMemo.call(void 0, ()=>v?a:[...a].sort((l,r)=>{for(let{key:f,direction:b}of R){let u=o.find(C=>C.key===f),P=l[f],B=r[f];if(_optionalChain([u, 'optionalAccess', _10 => _10.onSort])){let C=u.onSort(P,B,b);if(C!==0)return C}else if(typeof P=="string"&&typeof B=="string"){let C=P.localeCompare(B);if(C!==0)return b==="asc"?C:-C}else if(typeof P=="number"&&typeof B=="number"&&P!==B)return b==="asc"?P-B:B-P}return 0}),[a,R,o,v]),le=Math.ceil(N?(M||0)/G:_.length/G),be=N?_:_.slice((L-1)*G,L*G),ue=o.reduce((e,l)=>e+(l.width?l.width:100),0),me={"rgx-table-pagination":_jsxruntime.jsx.call(void 0, O,{currentPage:L,totalPages:le,rowsPerPage:G,totalRows:N?_nullishCoalesce(M, () => (0)):_.length,onPageChange:se,onRowsPerPageChange:ie,rowsPerPageOptions:p,style:w,loading:X}),"rgx-arrow-pagination":_jsxruntime.jsx.call(void 0, K,{currentPage:L,totalPages:le,rowsPerPage:G,totalRows:N?_nullishCoalesce(M, () => (0)):_.length,onPageChange:se,onRowsPerPageChange:ie,rowsPerPageOptions:p,style:w,loading:X})};return _react.useEffect.call(void 0, ()=>{ge(ne)},[ne]),_react.useEffect.call(void 0, ()=>{te(_optionalChain([p, 'optionalAccess', _11 => _11.includes, 'call', _12 => _12(E)])?E:p[0])},[E]),_react.useEffect.call(void 0, ()=>{N&&H&&E&&z(H)},[H,N,E]),_jsxruntime.jsxs.call(void 0, "div",{className:d,children:[_jsxruntime.jsxs.call(void 0, "div",{className:X?"rgx-table-container-loading rgx-table-container":"rgx-table-container",style:X?{...t["rgx-table-container-loading"],...t["rgx-table-container"]}:{...t["rgx-table-container"]},children:[X&&S&&S({style:s}),_jsxruntime.jsxs.call(void 0, "table",{className:"rgx-table",style:{minWidth:`${ue}px`,...t["rgx-table"]},children:[_jsxruntime.jsx.call(void 0, "thead",{className:"rgx-table-head",style:{...t["rgx-table-head"]},children:_jsxruntime.jsxs.call(void 0, "tr",{className:"rgx-table-head-tr",style:{...t["rgx-table-head-tr"]},children:[ee&&_jsxruntime.jsx.call(void 0, "th",{className:"rgx-table-head-th-checkbox",style:{width:"20px",...t["rgx-table-head-th-checkbox"]},children:_jsxruntime.jsx.call(void 0, "input",{type:"checkbox",className:"rgx-table-header-checkbox",style:{...t["rgx-table-header-checkbox"]},checked:V.selectAllChecked,onChange:he})}),_optionalChain([o, 'optionalAccess', _13 => _13.map, 'call', _14 => _14((e,l)=>_jsxruntime.jsx.call(void 0, "th",{className:"rgx-table-head-th",style:{textAlign:"left",width:e.width?`${e.width}px`:"100px",...t["rgx-table-head-th"]},children:_jsxruntime.jsxs.call(void 0, "div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[_jsxruntime.jsxs.call(void 0, "div",{onClick:()=>e.sortable&&D(e),style:{display:"flex",cursor:e.sortable?"pointer":"default"},children:[e.name," ",e.sortable&&_jsxruntime.jsx.call(void 0, c,{svgPath:R.some(r=>r.key===e.key)?_optionalChain([R, 'access', _15 => _15.find, 'call', _16 => _16(r=>r.key===e.key), 'optionalAccess', _17 => _17.direction])==="asc"?'<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-wide-narrow"><path d="m3 8 4-4 4 4"/><path d="M7 4v16"/><path d="M11 12h10"/><path d="M11 16h7"/><path d="M11 20h4"/></svg>':'<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-down-wide-narrow"><path d="m3 16 4 4 4-4"/><path d="M7 20V4"/><path d="M11 4h10"/><path d="M11 8h7"/><path d="M11 12h4"/></svg>':'<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-down-up"><path d="m3 16 4 4 4-4"/><path d="M7 20V4"/><path d="m21 8-4-4-4 4"/><path d="M17 4v16"/></svg>',className:"rgx-table-sort-icon",style:{marginLeft:"8px",...t["rgx-table-sort-icon"]}})]}),e.sortable&&_jsxruntime.jsxs.call(void 0, "div",{children:[_jsxruntime.jsx.call(void 0, "div",{style:{cursor:"pointer",display:"inline-block"},onClick:()=>{re(U===e.key?null:e.key)},children:_jsxruntime.jsx.call(void 0, c,{svgPath:'<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-ellipsis-vertical"><circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/></svg>',className:"rgx-table-ellipsis-vertical-icon",style:{marginRight:"8px",marginTop:"4px",marginBottom:"-4px",...t["rgx-table-ellipsis-vertical-icon"]}})}),U===e.key&&_jsxruntime.jsxs.call(void 0, pe,{isOpen:U===e.key,onClose:()=>{re(null)},style:x,children:[_optionalChain([R, 'access', _18 => _18.find, 'call', _19 => _19(r=>r.key===e.key), 'optionalAccess', _20 => _20.direction])==="desc"&&_jsxruntime.jsxs.call(void 0, "div",{className:"rgx-table-popup-items",style:{...t["rgx-table-popup-items"]},onClick:()=>{e.sortable&&D(e,"asc")},children:[_jsxruntime.jsx.call(void 0, c,{svgPath:'<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-wide-narrow"><path d="m3 8 4-4 4 4"/><path d="M7 4v16"/><path d="M11 12h10"/><path d="M11 16h7"/><path d="M11 20h4"/></svg>',style:{marginRight:"8px",fontSize:"14px",...t["rgx-table-asc-sort-icon"]},className:"rgx-table-asc-sort-icon"}),_jsxruntime.jsx.call(void 0, "span",{children:"Sort Ascending"})]}),_optionalChain([R, 'access', _21 => _21.find, 'call', _22 => _22(r=>r.key===e.key), 'optionalAccess', _23 => _23.direction])==="asc"&&_jsxruntime.jsxs.call(void 0, "div",{className:"rgx-table-popup-items",style:{...t["rgx-table-popup-items"]},onClick:()=>{e.sortable&&D(e,"desc")},children:[_jsxruntime.jsx.call(void 0, c,{svgPath:'<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-down-wide-narrow"><path d="m3 16 4 4 4-4"/><path d="M7 20V4"/><path d="M11 4h10"/><path d="M11 8h7"/><path d="M11 12h4"/></svg>',style:{marginRight:"8px",fontSize:"14px",...t["rgx-table-desc-sort-icon"]},className:"rgx-table-desc-sort-icon"}),_jsxruntime.jsx.call(void 0, "span",{children:"Sort Descending"})]}),!R.some(r=>r.key===e.key)&&_jsxruntime.jsxs.call(void 0, _jsxruntime.Fragment,{children:[_jsxruntime.jsxs.call(void 0, "div",{className:"rgx-table-popup-items",style:{...t["rgx-table-popup-items"]},onClick:()=>{e.sortable&&D(e,"asc")},children:[_jsxruntime.jsx.call(void 0, c,{svgPath:'<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-wide-narrow"><path d="m3 8 4-4 4 4"/><path d="M7 4v16"/><path d="M11 12h10"/><path d="M11 16h7"/><path d="M11 20h4"/></svg>',style:{marginRight:"8px",fontSize:"14px",...t["rgx-table-asc-sort-icon"]},className:"rgx-table-asc-sort-icon"}),_jsxruntime.jsx.call(void 0, "span",{children:"Sort Ascending"})]}),_jsxruntime.jsxs.call(void 0, "div",{className:"rgx-table-popup-items",style:{...t["rgx-table-popup-items"]},onClick:()=>{e.sortable&&D(e,"desc")},children:[_jsxruntime.jsx.call(void 0, c,{svgPath:'<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-down-wide-narrow"><path d="m3 16 4 4 4-4"/><path d="M7 20V4"/><path d="M11 4h10"/><path d="M11 8h7"/><path d="M11 12h4"/></svg>',style:{marginRight:"8px",fontSize:"14px",...t["rgx-table-desc-sort-icon"]},className:"rgx-table-desc-sort-icon"}),_jsxruntime.jsx.call(void 0, "span",{children:"Sort Descending"})]})]}),!!R.some(r=>r.key===e.key)&&_jsxruntime.jsxs.call(void 0, "div",{className:"rgx-table-popup-items",style:{...t["rgx-table-popup-items"]},onClick:()=>{we()},children:[_jsxruntime.jsx.call(void 0, c,{svgPath:'<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-down-up"><path d="m3 16 4 4 4-4"/><path d="M7 20V4"/><path d="m21 8-4-4-4 4"/><path d="M17 4v16"/></svg>',style:{marginRight:"8px",fontSize:"14px",...t["rgx-table-asc-desc-sort-icon"]},className:"rgx-table-asc-desc-sort-icon"}),_jsxruntime.jsx.call(void 0, "span",{children:"Clear Sort"})]})]})]})]})},l))])]})}),_jsxruntime.jsx.call(void 0, "tbody",{className:X?"rgx-table-body rgx-table-tobody-loading":"rgx-table-body",style:X?{...t["rgx-table-body"],...t["rgx-table-tobody-loading"]}:{...t["rgx-table-body"]},children:be.map((e,l)=>_jsxruntime.jsxs.call(void 0, _react2.default.Fragment,{children:[_jsxruntime.jsxs.call(void 0, "tr",{className:W===l?"rgx-table-body-tr rgx-table-body-tr-expanded":"rgx-table-body-tr",style:W===l?{...t["rgx-table-body-tr"],...t["rgx-table-body-tr-expanded"]}:{...t["rgx-table-body-tr"]},onClick:()=>{q&&oe(W===l?null:l),F&&F(e)},children:[ee&&_jsxruntime.jsx.call(void 0, "td",{className:"rgx-table-body-td-checkbox",style:{width:"20px",...t["rgx-table-body-td-checkbox"]},children:_jsxruntime.jsx.call(void 0, "input",{type:"checkbox",className:"rgx-table-row-checkbox",style:{...t["rgx-table-row-checkbox"]},checked:V.selectedRows.includes(e.id),onChange:()=>xe(e.id)})}),o.map((r,f)=>_jsxruntime.jsx.call(void 0, "td",{className:"rgx-table-body-td",style:{width:r.width||"auto",...t["rgx-table-body-td"]},children:r.tooltip?_jsxruntime.jsx.call(void 0, Q,{content:r.tooltipCustomContent?r.tooltipCustomContent(e):e[r.key],style:y,children:r.render?r.render(e):_nullishCoalesce(e[r.key], () => (""))}):r.render?r.render(e):_nullishCoalesce(e[r.key], () => (""))},f))]},e.id||l),W===l&&q&&_jsxruntime.jsx.call(void 0, "tr",{className:"rgx-table-expanded-row-tr",style:{...t["rgx-table-expanded-row-tr"]},children:_jsxruntime.jsx.call(void 0, "td",{colSpan:o.length,className:"rgx-table-expanded-row-td",style:{...t["rgx-table-expanded-row-td"]},children:q(e)})})]},e.id||l))})]})]}),me[g]]})},je= exports.ReactGridX =Ve;exports.RGXArrowPagination = K; exports.RGXLoader = Y; exports.RGXSVGIcon = c; exports.RGXTablePagination = O; exports.RGXTooltip = Q; exports.ReactGridX = je;
//# sourceMappingURL=index.js.map