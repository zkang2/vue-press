import{_ as g,g as d,i as f,r as e,o as s,c as n,e as a,w as c,F as _,m as h,A as x,b as v,j as y,E as b}from"./app-66188d86.js";const k={__name:"Test",setup(T){const l=d(["/images/1.jpg","/images/2.jpg","/images/3.png","/images/4.png","/images/5.jpg"]),r=async()=>{const{data:t}=await y({method:"get",url:"http://47.100.33.103:8080/captchaImage",parasms:{firstName:"Fred",lastName:"Flintstone"}});t&&b({message:t.msg,type:"success"})};return f(()=>{}),(t,j)=>{const p=e("el-image"),i=e("el-carousel-item"),m=e("el-carousel"),u=e("el-button");return s(),n(_,null,[a(m,{interval:2e3,type:"card",height:"200px"},{default:c(()=>[(s(!0),n(_,null,h(l.value,o=>(s(),x(i,{key:o,height:"200px"},{default:c(()=>[a(p,{src:o,fit:"contain"},null,8,["src"])]),_:2},1024))),128))]),_:1}),a(u,{type:"success",onClick:r},{default:c(()=>[v("Success")]),_:1})],64)}}},N=g(k,[["__scopeId","data-v-d3bc1e52"],["__file","Test.vue"]]);export{N as default};