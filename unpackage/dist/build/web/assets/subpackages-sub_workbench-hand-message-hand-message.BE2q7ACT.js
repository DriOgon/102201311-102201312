import{d as e,Y as a,h as l,J as s,j as t,o,a as d,w as u,e as r,f as n,m as i,p,F as m,s as c,X as v,i as f,Q as _,t as h}from"./index-CKmb8B-R.js";import{_ as b,a as j}from"./mp-html.xHRuou5Z.js";import{a as w,r as g}from"./uni-app.es.C8008jpp.js";import{_ as k}from"./wd-icon.CKzk4z_r.js";import{_ as x,a as y}from"./wd-radio-group.DlPH21dL.js";import{_ as V}from"./wd-textarea.Cflx1t40.js";import{_ as C}from"./wd-divider.BwiCAeSf.js";import{_ as I}from"./_plugin-vue_export-helper.BCo6x5W8.js";import"./props.DIUoDIPf.js";import"./useChildren.Cmfbpnhq.js";import"./types.TAN2fzfK.js";import"./useTranslate.DFMOv7A2.js";const J=I(e({__name:"hand-message",setup(e){const I=a.database(),J=l(!0),T=l(""),U=l(),z=l(!1),A=s([{label:"确认处理",value:2},{label:"不予处理",value:3}]),B=l(2),D=l("");return w((e=>{T.value=(null==e?void 0:e.id)||"",I.collection("travel-feed-back").where(`_id == "${T.value}"`).get({getOne:!0}).then((e=>{U.value=e.result.data})).finally((()=>{J.value=!1}))})),(e,a)=>{const l=g(t("wd-skeleton"),b),s=f,w=g(t("wd-icon"),k),F=_,O=g(t("wd-radio"),x),P=g(t("wd-radio-group"),y),Q=g(t("wd-textarea"),V),X=g(t("wd-divider"),C),Y=g(t("mp-html"),j);return o(),d(s,{class:"content"},{default:u((()=>[J.value?(o(),d(s,{key:0,class:"skeleton"},{default:u((()=>[r(l,{animation:"gradient",theme:"paragraph"})])),_:1})):(o(),d(s,{key:1},{default:u((()=>[r(s,{class:"header"},{default:u((()=>[r(F,{class:"submit-btn",disabled:z.value,onClick:a[0]||(a[0]=e=>(z.value=!0,void I.collection("travel-feed-back").doc(T.value).update({process_status:B.value,process_result:D.value}).then((()=>{c({title:"保存成功",icon:"none"}),setTimeout((()=>{z.value=!1,v()}),1500)})).catch((e=>{console.log("保存失败error----",e),c({title:"保存失败，请联系管理员",icon:"none"}),z.value=!1}))))},{default:u((()=>[r(w,{name:"file-paste",size:"28rpx"}),n(" 确认 ")])),_:1},8,["disabled"])])),_:1}),r(s,{class:"feed-type"},{default:u((()=>[r(P,{modelValue:B.value,"onUpdate:modelValue":a[1]||(a[1]=e=>B.value=e),shape:"button"},{default:u((()=>[(o(!0),i(m,null,p(A,((e,a)=>(o(),d(O,{key:"feed"+a,value:e.value},{default:u((()=>[n(h(e.label),1)])),_:2},1032,["value"])))),128))])),_:1},8,["modelValue"])])),_:1}),r(Q,{modelValue:D.value,"onUpdate:modelValue":a[2]||(a[2]=e=>D.value=e),placeholder:"请填写处理结果"},null,8,["modelValue"]),r(X,null,{default:u((()=>[n("留言详情")])),_:1}),r(Y,{content:U.value.feedback_content},null,8,["content"])])),_:1}))])),_:1})}}}),[["__scopeId","data-v-43408eef"]]);export{J as default};
