"use strict";(self.webpackChunktour_mbti=self.webpackChunktour_mbti||[]).push([[649],{43907:(e,t,n)=>{n.d(t,{A:()=>r});var i,a=n(57528),o=(n(65043),n(5464)),l=n(70579);const s=o.Ay.button(i||(i=(0,a.A)(["\n  background: ",";\n  color: ",";\n  border: ",";\n  border-radius: 8px;\n  display: block;\n  width: 100%;\n  height: ",";\n  box-shadow: 0px 0px 10px rgba(0, 28, 145, 0.2);\n  font-weight: 500;\n  font-size: 1em;\n  line-height: 1.25em;\n  letter-spacing: -0.07em;\n  text-align: center;\n\n  /* &:hover {\n    box-shadow: 0 80px 0 0 rgba(0, 0, 0, 0.25) inset,\n      0 -80px 0 0 rgba(0, 0, 0, 0.25) inset;\n  } */\n\n  &:active {\n    background: ",";\n\n  }\n"])),(e=>"basic"===e.type?"#6A8BFF":"#ffffff"),(e=>"basic"===e.type?"#ffffff":"#000000"),(e=>"basic"===e.type?"none":"1px solid #000000"),(e=>e.height),(e=>"basic"===e.type?"#021248":"#ffffff")),r=e=>{let{children:t,type:n,height:i,...a}=e;return(0,l.jsx)(s,{type:n,height:i,...a,children:t})}},20649:(e,t,n)=>{n.r(t),n.d(t,{default:()=>C});var i,a,o,l,s,r,d,c,h,p,u,f,g,x,b,m=n(57528),v=n(65043),y=n(73216),A=(n(43907),n(5464)),w=n(86213),j=(n(46391),n(62108),n(85006)),k=n(31355),S=n(70579);const C=()=>{var e,t,n,i,a,o,l,s;const[r,d]=(0,v.useState)(""),[c,h]=(0,v.useState)(""),[p,u]=(0,v.useState)(!1),[f,g]=(0,v.useState)(""),[x,b]=(0,v.useState)(!1),[m,A]=(0,v.useState)(null),[C,J]=(0,v.useState)(null),I=(0,y.Zp)(),[M,V]=(0,v.useState)(""),[Z,q]=(0,v.useState)([]),[G,H]=(0,v.useState)(1),[K,Q]=(0,v.useState)(0),[U,X]=(0,v.useState)([]),[Y,$]=(0,v.useState)([]),[ee,te]=(0,v.useState)([]),[ne,ie]=(0,v.useState)([]),[ae,oe]=(0,v.useState)(!0),{state:le}=(0,y.zy)(),[se,re]=(0,v.useState)({}),[de,ce]=(0,v.useState)([]),[he,pe]=(0,v.useState)(0),[ue,fe]=(0,v.useState)(1);(0,v.useEffect)((()=>{var e;u(!0),null===(e=window.ReactNativeWebView)||void 0===e||e.postMessage(JSON.stringify(!0)),document.addEventListener("message",(e=>{try{const t=JSON.parse(e.data);t.loginData&&(d(t.loginData.id),h(t.loginData.jwt)),b(!0),g(t.theme),A(t.isApp),J(t.platform)}catch(t){console.log(t)}})),window.addEventListener("message",(e=>{try{const t=JSON.parse(e.data);t.loginData&&(d(t.loginData.id),h(null===t||void 0===t?void 0:t.loginData.jwt)),b(!0),g(t.theme),A(t.isApp),J(t.platform)}catch(t){console.log(t)}}))}),[]),(0,v.useEffect)((()=>{x&&(async()=>{await(0,w.A)({method:"get",url:"".concat("https://dltour.data-labs.co.kr/api","/worldcup"),headers:{"Access-Control-Allow-Credentials":!0,"ngrok-skip-browser-warning":!0,Authorization:c}}).then((e=>{!1!==e.data.isPass&&!0!==e.data.isEnd||I("/worldcupselectresult",{state:{jwt:c,theme:f,userId:r,isApp:m,platform:C}}),re(e.data.worldcupList),ce(Object.keys(e.data.worldcupList)),V(e.data.round),q(e.data.matchNames),oe(!1)})).catch((e=>{console.log(e)}))})()}),[x]);const ge=e=>{"16"===M?(H(G+1),fe(ue+1),Q(K+2),pe(he),2===K&&(pe(he+1),Q(0),fe(1))):("8"===M||"4"===M)&&(H(G+1),Q(K+1),0===K&&(pe(he+1),Q(0)));let t=se[de[he]][e];ie([...ne,t])},xe=async e=>{if(0===e){let e=se[de[he]][0];ie([...ne,e]),await(0,w.A)({method:"post",url:"".concat("https://dltour.data-labs.co.kr/api","/worldcup/saveResult"),headers:{Authorization:c},data:{results:[...ne,e],round:M}}).then((e=>{I("/worldcupselectresult",{state:{jwt:c,isApp:m,platform:C,theme:f,gameRound:M,selectedArr:ne}})})).catch((e=>{console.log(e),alert(e)}))}else{let e=se[de[he+1]][0];ie([...ne,e]),await(0,w.A)({method:"post",url:"".concat("https://dltour.data-labs.co.kr/api","/worldcup/saveResult"),headers:{Authorization:c},data:{results:[...ne,e],round:M}}).then((e=>{I("/worldcupselectresult",{state:{jwt:c,isApp:m,platform:C,theme:f,gameRound:M,selectedArr:ne}})})).catch((e=>{console.log(e),alert(e)}))}},be=async e=>{let t=se[de[he]][e];await(0,w.A)({method:"post",url:"".concat("https://dltour.data-labs.co.kr/api","/worldcup/saveResult"),headers:{Authorization:c},data:{results:[...ne,t],round:M}}).then((e=>{I("/worldcupselectresult",{state:{jwt:c,isApp:m,platform:C,theme:f,gameRound:M,selectedArr:ne}})})).catch((e=>{console.log(e),alert(e)}))};return(0,S.jsx)(S.Fragment,{children:ae?(0,S.jsx)(T,{children:(0,S.jsx)(B,{})}):(0,S.jsx)(S.Fragment,{children:(0,S.jsxs)(z,{children:[(0,S.jsxs)(F,{children:[(0,S.jsx)(R,{children:(0,S.jsx)(E,{children:"\uc120\ud638\ud558\ub294 \ucde8\ud5a5\uc744 \uc120\ud0dd\ud574\uc8fc\uc138\uc694"})}),(0,S.jsx)(D,{children:(0,S.jsx)(E,{children:Z[G-1]})})]}),"2"===M?(0,S.jsxs)(N,{children:[(0,S.jsx)(k.P.div,{whileTap:{rotate:180},children:(0,S.jsxs)(P,{style:{borderStyle:"solid",borderColor:"black",borderWidth:2},children:[(0,S.jsx)(O,{onClick:()=>xe(0),src:null===(e=se[de[he]][K])||void 0===e?void 0:e.image}),(0,S.jsx)(L,{onClick:()=>xe(0),children:null===(t=se[de[he]][K])||void 0===t?void 0:t.title})]})}),(0,S.jsx)(_,{src:j}),(0,S.jsx)(k.P.div,{whileTap:{rotate:-180},children:(0,S.jsxs)(W,{style:{borderStyle:"solid",borderColor:"black",borderWidth:2},children:[(0,S.jsx)(O,{onClick:()=>xe(1),src:null===(n=se[de[he+1]][K])||void 0===n?void 0:n.image}),(0,S.jsx)(L,{onClick:()=>xe(1),children:null===(i=se[de[he+1]][K])||void 0===i?void 0:i.title})]})})]}):(0,S.jsxs)(N,{children:[(0,S.jsx)(k.P.div,{whileTap:{rotate:180},children:(0,S.jsxs)(P,{style:{borderStyle:"solid",borderColor:"black",borderWidth:2},children:[(0,S.jsx)(O,{onClick:()=>G<M/2?ge(K):be(K),src:null===(a=se[de[he]][K])||void 0===a?void 0:a.image}),(0,S.jsx)(L,{onClick:()=>G<M/2?ge(K):be(K),children:null===(o=se[de[he]][K])||void 0===o?void 0:o.title})]})}),(0,S.jsx)(_,{src:j}),(0,S.jsx)(k.P.div,{whileTap:{rotate:-180},children:(0,S.jsxs)(W,{style:{borderStyle:"solid",borderColor:"black",borderWidth:2},children:[(0,S.jsx)(O,{onClick:()=>G<M/2?ge(K+1):be(K+1),src:null===(l=se[de[he]][K+1])||void 0===l?void 0:l.image}),(0,S.jsx)(L,{onClick:()=>G<M/2?ge(K+1):be(K+1),children:null===(s=se[de[he]][K+1])||void 0===s?void 0:s.title})]})})]})]})})})},z=A.Ay.div(i||(i=(0,m.A)(["\n  vertical-align: middle;\n  text-align: left;\n  display: flex;\n  flex-direction: column;\n"]))),F=A.Ay.div(a||(a=(0,m.A)(["\n  background-color: black;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 12.5vh;\n"]))),R=A.Ay.div(o||(o=(0,m.A)(["\n  display: flex;\n"]))),D=A.Ay.div(l||(l=(0,m.A)(["\n  display: flex;\n"]))),E=A.Ay.p(s||(s=(0,m.A)(["\n  color: #ffffff;\n  font-size: 20px;\n  display: flex;\n  line-height: 30px;\n  font-weight: 500;\n"]))),N=A.Ay.div(r||(r=(0,m.A)(["\n  display: flex;\n  height: 87.5vh;\n  width: 100%;\n  flex-direction: column;\n  background-color: black;\n  position: relative;\n"]))),P=A.Ay.div(d||(d=(0,m.A)(["\n  height: 43.75vh;\n  display: flex;\n  width: 100%;\n  background-color: black;\n  position: relative;\n"]))),W=A.Ay.div(c||(c=(0,m.A)(["\n  height: 43.75vh;\n  display: flex;\n  width: 100%;\n  position: relative;\n  background-color: black;\n"]))),_=(A.Ay.span(h||(h=(0,m.A)(["\n  display: flex;\n  font-size: 72px;\n  position: absolute;\n  font-weight: 500;\n  /* line-height: 101.36px; */\n  color: #ffffff;\n  top: 50%;\n  left: 50%;\n  z-index: 100;\n  transform: translate(-50%, -50%); //\ud83d\udc9b \uc815\uc911\uc559 \ubc30\uce58\n"]))),A.Ay.img(p||(p=(0,m.A)(["\n  display: flex;\n  position: absolute;\n  width: 190px;\n  height: 190px;\n  top: 50%;\n  left: 50%;\n  z-index: 100;\n  transform: translate(-50%, -50%); //\ud83d\udc9b \uc815\uc911\uc559 \ubc30\uce58\n  pointer-events: none;\n"])))),L=A.Ay.button(u||(u=(0,m.A)(["\n  display: flex;\n  background-color: #000000;\n  border-radius: 8px;\n  /* width: 124px; */\n  height: 30px;\n  color: #F5F5F5;\n  font-weight: 500;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  z-index: 100;\n  transform: translate(-50%, -50%);\n  font-size: 18px;\n  /* text-align: center; */\n  align-items: center;\n  justify-content: center;\n  padding-left: 16px;\n  padding-top: 8px;\n  padding-bottom: 8px;\n  padding-right: 16px;\n  /* line-height: 24px; */\n"]))),O=A.Ay.img(f||(f=(0,m.A)(["\n  width: 100%;\n  height: 100%;\n"]))),T=A.Ay.div(g||(g=(0,m.A)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  background-color: black;\n  height: 100vh;\n"]))),J=(0,A.i7)(x||(x=(0,m.A)(["\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n"]))),B=A.Ay.div(b||(b=(0,m.A)(["\n  border: 4px solid rgba(0, 0, 0, 0.1);\n  border-top: 4px solid #3498db;\n  border-radius: 50%;\n  width: 40px;\n  height: 40px;\n  animation: "," 1s linear infinite;\n"])),J)},46391:(e,t,n)=>{e.exports=n.p+"static/media/test_image1.e88cd68e6cb845ec8449.png"},62108:(e,t,n)=>{e.exports=n.p+"static/media/test_image2.0ba6bcfe26c67f85b0d2.png"},85006:(e,t,n)=>{e.exports=n.p+"static/media/versus_image.2ea599975ddc21ee272a.png"}}]);
//# sourceMappingURL=649.a21283c2.chunk.js.map