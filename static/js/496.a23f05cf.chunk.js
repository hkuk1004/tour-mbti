"use strict";(self.webpackChunktour_mbti=self.webpackChunktour_mbti||[]).push([[496],{46496:(n,e,i)=>{i.r(e),i.d(e,{default:()=>S});var t=i(57528),o=i(65043),l=i(5464),d=i(73592);var a,r,s,p,c,u,f,v,x,h,g,m,w=i(70579);const y=l.I4.div(a||(a=(0,t.A)(["\n  width: 100%;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  flex: 1;\n  flex-direction: column;\n"]))),S=(l.I4.div(r||(r=(0,t.A)(["\n  width: 100%;\n  display: flex;\n  flex: 1;\n"]))),l.I4.div(s||(s=(0,t.A)(["\n  display: flex;\n  width: 100%;\n  height: 120px;\n  padding: 10px 20px;\n  flex-direction: row;\n  background-color: #fff;\n  border-top: 1px solid #d9d9d9;\n"]))),l.I4.img(p||(p=(0,t.A)(["\n  width: 100px;\n  height: 100px;\n  border-radius: 8px;\n  margin-right: 10px;\n"]))),l.I4.div(c||(c=(0,t.A)(["\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: space-between;\n"]))),l.I4.div(u||(u=(0,t.A)(["\n  display: flex;\n  width: 100%;\n  height: 45px;\n  flex-direction: column;\n  justify-content: space-between;\n"]))),l.I4.div(f||(f=(0,t.A)(["\n  display: flex;\n  width: 100%;\n  height: 42px;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n"]))),l.I4.div(v||(v=(0,t.A)(["\n  display: flex;\n  height: 26px;\n  flex: 1;\n  font-size: 18px;\n  font-weight: 500;\n  line-height: 26.06px;\n  color: #000;\n  align-items: center;\n"]))),l.I4.div(x||(x=(0,t.A)(["\n  display: flex;\n  font-size: 12px;\n  font-weight: 300;\n  line-height: 17.38px;\n  color: #25b1fa;\n"]))),l.I4.img(h||(h=(0,t.A)(["\n  width: 18px;\n  height: 18px;\n  margin-left: 10px;\n  margin-right: 6px;\n"]))),l.I4.div(g||(g=(0,t.A)(["\n  display: flex;\n  flex: 1;\n"]))),l.I4.div(m||(m=(0,t.A)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 55px;\n  height: 30px;\n  border: 1px solid #25b1fa;\n  border-radius: 8px;\n  font-size: 12px;\n  font-weight: 500;\n  line-height: 17.38px;\n  color: #25b1fa;\n  cursor: pointer;\n"]))),()=>{const[n,e]=(0,o.useState)([]),[i,t]=(0,o.useState)([]),{naver:l}=window,[a,r]=(0,o.useState)([]),s=(0,o.useRef)([]),[p,c]=(0,o.useState)([]),[u,f]=(0,o.useState)("\uc804\uad6d"),[v,x]=(0,o.useState)(!1),h=["\uacbd\uae30","\uacbd\ubd81","\uac15\uc6d0","\ucda9\ub0a8","\uacbd\ub0a8","\uc804\ub0a8","\ucda9\ubd81","\uc804\ubd81"],[g,m]=(0,o.useState)(!1),S=(0,o.useRef)("\uc804\uad6d"),L=n=>{var e;null===(e=window.ReactNativeWebView)||void 0===e||e.postMessage(JSON.stringify(n))};return(0,o.useEffect)((()=>{L("didMount"),document.addEventListener("message",(n=>{const i=JSON.parse(n.data);e(null===i||void 0===i?void 0:i.dataList);const o=[...null===i||void 0===i?void 0:i.dataList].map((n=>({lat:n.mapy,lng:n.mapx})));t(o),c(null===i||void 0===i?void 0:i.region),f(null===i||void 0===i?void 0:i.regionSelect),(null===i||void 0===i?void 0:i.regionSelect)!==S.current?(S.current=null===i||void 0===i?void 0:i.regionSelect,m(!0)):m(!1)})),window.addEventListener("message",(n=>{const i=JSON.parse(n.data);e(null===i||void 0===i?void 0:i.dataList);const o=[...null===i||void 0===i?void 0:i.dataList].map((n=>({lat:n.mapy,lng:n.mapx})));t(o),c(null===i||void 0===i?void 0:i.region),f(null===i||void 0===i?void 0:i.regionSelect),(null===i||void 0===i?void 0:i.regionSelect)!==S.current?(S.current=null===i||void 0===i?void 0:i.regionSelect,m(!0)):m(!1)}))}),[]),(0,o.useEffect)((()=>{const n=new l.maps.Map("map",{center:new l.maps.LatLng(36.5,127.6),zoomControl:!1,zoom:6});r(n),x(!0)}),[]),(0,o.useEffect)((()=>{s.current[0]&&(s.current.forEach((n=>{n.setMap(null)})),s.current.splice(0));for(let n=0;n<i.length;n++){const e=new l.maps.Marker({position:new l.maps.LatLng(i[n].lat,i[n].lng),map:a,icon:{url:d,size:new l.maps.Size(50,52),scaledSize:new l.maps.Size(50,52),origin:new l.maps.Point(0,0),anchor:new l.maps.Point(25,26)}});s.current.push(e)}const e=e=>()=>{const i={placeInfo:n[e],index:e};L(i)};for(let n=0;n<s.current.length;n+=1)l.maps.Event.addListener(s.current[n],"click",e(n));if(u){if(g)if("\uc804\uad6d"!==u){var t,o;const n=p.filter((n=>n.region===u));let e=new l.maps.LatLng(null===(t=n[0])||void 0===t?void 0:t.mapy,null===(o=n[0])||void 0===o?void 0:o.mapx);h.includes(u)?a.morph(e,8):"\uc81c\uc8fc"===u?a.morph(e,11):"\uc138\uc885"===u?a.morph(e,12):a.morph(e,11)}else if(v){let n=new l.maps.LatLng(36.5,127.6);a.morph(n,6)}}else{var r,c;let e=new l.maps.LatLng(null===(r=n[0])||void 0===r?void 0:r.mapy,null===(c=n[0])||void 0===c?void 0:c.mapx);a.morph(e,12)}}),[n]),(0,w.jsx)(y,{children:(0,w.jsx)("div",{id:"map",style:{width:"100%",display:"flex",flex:1}})})})},73592:(n,e,i)=>{n.exports=i.p+"static/media/marker.f0f4c4815deee63e7805.png"}}]);
//# sourceMappingURL=496.a23f05cf.chunk.js.map