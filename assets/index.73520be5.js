import{k as l,r as a,l as p,b as f,V as d,W as _,X as v,a6 as m,_ as x}from"./index.35c382be.js";const h={"3.1":["\u7A7F","\u72FC","\u5BB6","\u91D1\u9C7C","\u8DD1","\u867E","\u5BB3\u6015","\u6253\u96F7"],"3.2":["\u8349\u5730","\u68A6","\u5403","\u82F9\u679C","\u6478","\u6BDB\u6BDB\u866B","\u6795\u5934","\u7A97\u6237","\u53D1\u73B0","\u9999\u55B7\u55B7","\u4E1C\u897F","\u523A\u53D8","\u9192","\u88AB\u7A9D","\u8FDB","\u6765"],"3.3":["\u541E","\u86C7","\u957F\u9888\u9E7F","\u5B54\u96C0","\u866B\u5B50","\u888B\u9F20","\u8138\u76C6","\u6C60\u5858","\u6709","\u8D2A\u5403","\u72EE\u5B50","\u809A\u5B50","\u52A8\u7269","\u6253","\u55B7","\u5B9D\u5B9D"],"3.4":["\u68D5\u8272","\u88E4\u5B50","\u5C0F\u4E11","\u683C\u5B50","\u7EA2\u8272","\u6761\u7EB9","\u523A\u732C","\u6361","\u60F3","\u7ED9","\u4EC0\u4E48","\u76AE\u6BDB","\u7A7F","\u897F\u74DC","\u7334\u5B50","\u6EDA"],"3.5":["\u68C9\u8884","\u6C64","\u80E1\u841D\u535C","\u9752\u83DC","\u8461\u8404","\u9999\u8549","\u5435\u67B6","\u73A9","\u51AC\u5929","\u70ED","\u51B7","\u539A","\u6696\u548C","\u7626","\u660E\u5929","\u4ECA\u5929"],"3.6":["\u5E8A","\u5C71\u6D1E","\u706F","\u9ED1","\u6708\u4EAE","\u62B1","\u9ED1\u591C","\u767D\u5929","\u592A\u9633","\u665A\u5B89","\u8BA9","\u559C\u6B22","\u653E","\u95EA","\u70ED\u95F9","\u5C0F\u8349"],"3.7":["\u98CE\u7B5D","\u81EA\u884C\u8F66","\u6728\u7B1B","\u98CE\u8F66","\u79CD\u5B50","\u98DE\u673A","\u6C57\u6C34","\u897F\u74DC","\u8C46","\u73A9\u5177","\u53EF\u7231","\u9AD8","\u623F\u5B50","\u6C7D\u8F66","\u9F13","\u8DF3\u821E"],"3.8":["\u8E66\u5E8A","\u8377\u53F6","\u5730\u9F20","\u6C34\u7F38","\u79CB\u5343","\u8FF7\u5BAB","\u68C9\u82B1\u7CD6","\u767D\u4E91","\u65B0","\u6C60\u5858","\u94BB","\u628A","\u7070\u5C18","\u6811\u679D","\u770B","\u8863\u670D"],"4.1":["\u91D1\u8272","\u4E3A\u4EC0\u4E48","\u6CB3\u6C34","\u5C0F\u7334","\u671B","\u6C99\u6EE9","\u70B9\u5934","\u9A6C","\u5C0F\u9E1F","\u5C0F\u9C7C","\u5929\u7A7A","\u8361\u79CB\u5343","\u6F02\u4EAE","\u5E7C\u513F\u56ED","\u5C0F\u5154\u5B50","\u6652"],"4.2":["\u74E2\u866B","\u6D17\u5934","\u8FAB\u5B50","\u6D74\u7F38","\u6BCD\u9E21","\u7A3B\u8349","\u7B14","\u7EB8","\u526A","\u6293","\u53EF\u7231","\u7011\u5E03","\u8DD1\u6B65","\u8774\u8776","\u82B1\u56ED","\u8111\u888B"],"4.3":["\u77ED","\u957F","\u7A7A\u7A7A\u7684","\u65E7","\u6EE1\u6EE1\u7684","\u65B0","\u91C7","\u6234","\u90CA\u6E38","\u80CC\u5305","\u5E10\u7BF7","\u65D7\u6746","\u6458","\u8DB4","\u6253\u778C\u7761","\u4F24\u5FC3"],"4.4":["\u8116\u5B50","\u5C71\u9876","\u80CC","\u52A8\u7269","\u8DF3","\u5C1D","\u964D\u843D\u4F1E","\u7EF3","\u5473\u9053","\u5927\u8C61","\u6E38\u620F","\u9C7C","\u888B\u9F20","\u54AC","\u4F38\u624B","\u98DE\u673A"],"4.5":["\u751F\u6C14","\u5730\u9762","\u706B\u7130","\u6C14\u7403","\u73A9\u5177","\u8611\u83C7","\u592A\u7A7A","\u9AD8\u697C","\u5706","\u773C\u775B","\u8377\u53F6","\u529B\u6C14","\u89D2\u843D","\u809A\u76AE","\u4E16\u754C","\u9C9C\u82B1"],"4.6":["\u7709\u6BDB","\u6D17\u624B","\u95E8\u628A\u624B","\u722C\u5C71\u864E","\u7A97\u5E18","\u9B54\u6CD5\u5E08","\u623F\u5C4B","\u5587\u53ED","\u987D\u76AE","\u68EE\u6797","\u6905\u5B50","\u5934\u53D1","\u7709\u6BDB","\u80E1\u5B50","\u9752\u86D9","\u53FD\u53FD\u55B3\u55B3"],"4.7":["\u684C\u5B50","\u4E66","\u5730\u677F","\u7070\u5C18","\u5BB6\u5177","\u591C\u665A","\u52FA\u5B50","\u76D8\u5B50","\u804A\u5929","\u55B7\u568F","\u4E71\u4E03\u516B\u7CDF","\u6536\u62FE","\u5E72\u51C0","\u8718\u86DB","\u649E","\u5976\u725B"],"4.8":["\u730E\u72D7","\u8D5B\u8DD1","\u7EC8\u70B9","\u91CE\u5154","\u67AA","\u718A","\u4E91\u6735","\u9493","\u5144\u5F1F","\u53D6\u6D88","\u5E2E\u52A9","\u76F8\u4FE1","\u5C71","\u7B2C\u4E00","\u665A\u4E0A","\u661F\u661F"]},g={class:"content"},T=l({__name:"index",setup(y){let D=a([]);const n=a([]),E=a([]),A=p(()=>{const e=n.value.at(-1);return D.value[e]||""});f(()=>{const u=new URLSearchParams(window.location.search).get("version")||"<=100";D.value=i(h,u),E.value=D.value.map((B,t)=>t),r()});function F(e){const{clientX:u}=e,B=e.currentTarget,{left:t,width:C}=B.getBoundingClientRect();u<t+C/2?o():r()}function r(){if(E.value.length>0){const e=Math.floor(Math.random()*E.value.length),u=E.value.splice(e,1)[0];u!==void 0&&n.value.push(u)}}function o(){n.value.length>1&&E.value.push(n.value.pop())}function c(e,u){const B=e.split(".").map(Number),t=u.split(".").map(Number);return B[0]>t[0]?1:B[0]<t[0]?-1:B[1]>t[1]?1:B[1]<t[1]?-1:0}function i(e,u){const B=[],t=u.startsWith("l");let C=u;return t&&(C=u.slice(1)),Object.keys(e).forEach(s=>{t?c(s,C)<=0&&B.push(...e[s]):s===C&&B.push(...e[s])}),B}return(e,u)=>(d(),_("div",{class:"wrapper",onClick:u[0]||(u[0]=B=>F(B))},[v("div",g,m(A.value),1)]))}});const k=x(T,[["__scopeId","data-v-a143f9b0"]]);export{k as default};
