import{N as e,j as t,o as s,a,w as n,m as r,F as o,e as i,f as l,p,t as u,l as m,am as c,g,an as d,ao as f,i as _}from"./index-CKmb8B-R.js";import{_ as h}from"./uni-popup-dialog.Dvp62xzX.js";import{r as A}from"./uni-app.es.C8008jpp.js";import{_ as k}from"./uni-popup.DkI5CpE0.js";import{c as x}from"./store.D0bvSpmK.js";import{_ as v}from"./_plugin-vue_export-helper.BCo6x5W8.js";let y=()=>console.log("为定义");const C=v({name:"uni-agreements",computed:{agreements(){if(!x.agreements)return[];let{serviceUrl:e,privacyUrl:t}=x.agreements;return[{url:e,title:"用户服务协议"},{url:t,title:"隐私政策条款"}]}},props:{scope:{type:String,default:()=>"register"}},methods:{popupConfirm(){this.isAgree=!0,y()},popup(e){this.needPopupAgreements=!0,this.$nextTick((()=>{e&&(y=e),this.$refs.popupAgreement.open()}))},navigateTo({url:t,title:s}){e({url:"/uni_modules/uni-id-pages/pages/common/webview/webview?url="+t+"&title="+s,success:e=>{},fail:()=>{},complete:()=>{}})},hasAnd:(e,t)=>e.length-1>t,setAgree(e){this.isAgree=!this.isAgree,this.$emit("setAgree",this.isAgree)}},created(){var e,t;this.needAgreements=((null==(t=null==(e=x)?void 0:e.agreements)?void 0:t.scope)||[]).includes(this.scope)},data:()=>({isAgree:!1,needAgreements:!0,needPopupAgreements:!1})},[["render",function(e,x,v,y,C,j){const b=c,T=g,w=d,P=f,U=_,$=A(t("uni-popup-dialog"),h),B=A(t("uni-popup"),k);return j.agreements.length?(s(),a(U,{key:0,class:"root"},{default:n((()=>[C.needAgreements?(s(),r(o,{key:0},[i(P,{onChange:j.setAgree},{default:n((()=>[i(w,{class:"checkbox-box"},{default:n((()=>[i(b,{checked:C.isAgree,style:{transform:"scale(0.5)","margin-right":"-6px"}},null,8,["checked"]),i(T,{class:"text"},{default:n((()=>[l("同意")])),_:1})])),_:1})])),_:1},8,["onChange"]),i(U,{class:"content"},{default:n((()=>[(s(!0),r(o,null,p(j.agreements,((e,t)=>(s(),a(U,{class:"item",key:t},{default:n((()=>[i(T,{class:"agreement text",onClick:t=>j.navigateTo(e)},{default:n((()=>[l(u(e.title),1)])),_:2},1032,["onClick"]),j.hasAnd(j.agreements,t)?(s(),a(T,{key:0,class:"text and",space:"nbsp"},{default:n((()=>[l(" 和 ")])),_:1})):m("",!0)])),_:2},1024)))),128))])),_:1})],64)):m("",!0),C.needAgreements||C.needPopupAgreements?(s(),a(B,{key:1,ref:"popupAgreement",type:"center"},{default:n((()=>[i($,{confirmText:"同意",onConfirm:j.popupConfirm},{default:n((()=>[i(U,{class:"content"},{default:n((()=>[i(T,{class:"text"},{default:n((()=>[l("请先阅读并同意")])),_:1}),(s(!0),r(o,null,p(j.agreements,((e,t)=>(s(),a(U,{class:"item",key:t},{default:n((()=>[i(T,{class:"agreement text",onClick:t=>j.navigateTo(e)},{default:n((()=>[l(u(e.title),1)])),_:2},1032,["onClick"]),j.hasAnd(j.agreements,t)?(s(),a(T,{key:0,class:"text and",space:"nbsp"},{default:n((()=>[l(" 和 ")])),_:1})):m("",!0)])),_:2},1024)))),128))])),_:1})])),_:1},8,["onConfirm"])])),_:1},512)):m("",!0)])),_:1})):m("",!0)}],["__scopeId","data-v-2709ff10"]]);export{C as _};
