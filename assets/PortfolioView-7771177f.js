import{_ as g,r as b,b as n,d as w,o as d,c as f,e,n as r,F as k,f as L,p as x,g as y,h as z}from"./index-5ab1abb2.js";const E="/assets/weather-44458149.jpg",S="/assets/cinema-c30e88e6.jpg",V="/assets/airpods-fb5557ed.jpg",C="/assets/zone-e8636d4d.jpg";const _=t=>(x("data-v-d54634a6"),t=t(),y(),t),j={id:"portfolio"},I=_(()=>e("div",{class:"portfolio"},[e("h2",{class:"portfolio-title"},"Portfolio")],-1)),P={class:"portfolio__content"},B=_(()=>e("h3",{class:"portfolio__content-title"},[z("Gallery "),e("span",{class:"underline"})],-1)),W=_(()=>e("div",{class:"line"},[e("div",{class:"line_"})],-1)),A={class:"portfolio__content-item"},F={class:"all__maket"},N=["href"],R=["src"],G=_(()=>e("div",{id:"sign-eye"},[e("i",{class:"fal fa-eye"})],-1)),M={__name:"PortfolioView",setup(t){const h=b([{id:1,href:"https://wexrizadamm.github.io/weather-vuex/",class:["all__link","web-ap"],img:E},{id:2,href:"https://mirzohidovv.github.io/Vue-cinema/",class:["all__link","web-site"],img:S},{id:3,href:"https://mirzohidovv.github.io/Air-pods/",class:["all__link","web-site"],img:V},{id:4,href:"https://mirzohidovv.github.io/zone-simple-site-/",class:["all__link","web-site"],img:C}]),o=n([]),i=n(!1),l=n(!1),c=n(!1),v=()=>{i.value=!0,l.value=!1,c.value=!1,o.value.forEach(s=>{s.classList.add("active")})},u=()=>{i.value=!1,l.value=!0,c.value=!1,o.value.forEach((s,p)=>{s.classList.remove("active"),s.classList.forEach(a=>{a=="web-ap"&&s.classList.add("active")})})},m=()=>{i.value=!1,l.value=!1,c.value=!0,o.value.forEach((s,p)=>{s.classList.remove("active"),s.classList.forEach(a=>{a=="web-site"&&s.classList.add("active")})})};return w(()=>{v()}),(s,p)=>(d(),f("section",j,[I,e("div",P,[B,W,e("ul",A,[e("li",{class:r(["portfolio__content-link",{active:i.value}]),onClick:v}," All ",2),e("li",{class:r(["portfolio__content-link",{active:l.value}]),onClick:u}," Web-aplications ",2),e("li",{class:r(["portfolio__content-link",{active:c.value}]),onClick:m}," Web-Sites ",2)]),e("div",F,[(d(!0),f(k,null,L(h,a=>(d(),f("a",{key:a.id,href:a.href,target:"_blank",class:r(a.class),ref_for:!0,ref_key:"linksRef",ref:o},[e("img",{class:"all_img",src:a.img,alt:""},null,8,R)],10,N))),128)),G])])]))}},Z=g(M,[["__scopeId","data-v-d54634a6"]]);export{Z as default};
