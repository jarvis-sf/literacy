import{k as l,r as c,b as a,V as i,W as f,a6 as d}from"./index.35c382be.js";const _=l({__name:"index",setup(g){const r=c("\u8FDB\u5165\u9875\u9762"),s=e=>{if(!e)return null;const n=decodeURI(window.location.href);console.log("searchStr:",n);const t=n.indexOf(e+"=");if(t===-1)return null;let o=n.substring(t+e.length+1);const u=o.indexOf("&");return u!==-1&&(o=o.substring(0,u)),o};return a(()=>{const e=s("url");if(console.log("url:",e),e){const n=`${encodeURIComponent(e)}`;window.location.href=n}else console.error('URL\u53C2\u6570 "url" \u4E0D\u5B58\u5728.'),r.value='URL\u53C2\u6570 "url" \u4E0D\u5B58\u5728.'}),(e,n)=>(i(),f("div",null,d(r.value),1))}});export{_ as default};
