(this["webpackJsonppink-sale"]=this["webpackJsonppink-sale"]||[]).push([[15],{1277:function(e,t,n){"use strict";n.r(t);var c=n(17),r=n(1),a=n(876),s=n(28),i=n(1019),l=n(1260),o=n(808),u=n(302),d=n.n(u),b=n(56),j=n.n(b),O=n(7),f=n.n(O),m=n(13),h=n(45),v=n(846),x=n.n(v),p=n(1268),g=n(25),N=n(155),y=n(955),k=n(4),S=n(283),C=n(12),w=n(851),A=n(284),I=new w.a;function E(e,t,n,c){return T.apply(this,arguments)}function T(){return(T=Object(h.a)(f.a.mark((function e(t,n,r,a){var i,l,o,u,d,b,O,m,h,v,x,p,g,N,y,w,A,I,E,T,P,R,q,L,W,F,M,U,V,D,B,_,K,H,Y,z,J,G,Q,X,Z,$,ee,te,ne,ce,re,ae,se,ie,le,oe,ue,de,be,je,Oe,fe,me,he,ve,xe,pe,ge,Ne,ye,ke,Se,Ce,we,Ae,Ie,Ee,Te,Pe,Re,qe,Le,We,Fe,Me,Ue,Ve;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i={},e.prev=1,e.next=4,Object(S.a)(k.a.contract.pool.ABI,[{address:t,name:"version"}],{web3:r},n);case 4:if(l=e.sent,o=Object(c.a)(l,1),u=Object(c.a)(o[0],1),d=u[0],b=k.a.contract.pool.ABI,O=["endTime","liquidityPercent","liquidityUnlockTime","owner","rate","softCap","startTime","token","totalClaimed","totalRaised","poolDetails","liquidityLockDays","poolState"],!(d>=k.a.contract.FAIRLAUNCH_VERSION)){e.next=14;break}b=d===k.a.contract.FAIRLAUNCH_VERSION?k.a.contract.fairlaunchPool.ABI:k.a.contract.fairlaunchPoolV2.ABI,e.next=38;break;case 14:return m=["hardCap","liquidityListingRate","maxContribution","minContribution","refundType","totalVolumePurchased"].map((function(e){return{address:t,name:e}})),e.next=18,Object(S.a)(b,m,{web3:r},n);case 18:h=e.sent,v=Object(c.a)(h,6),x=Object(c.a)(v[0],1),p=x[0],g=Object(c.a)(v[1],1),N=g[0],y=Object(c.a)(v[2],1),w=y[0],A=Object(c.a)(v[3],1),I=A[0],E=Object(c.a)(v[4],1),T=E[0],P=Object(c.a)(v[5],1),R=P[0],i.hardCap=p.toString(),i.liquidityListingRate=N.toString(),i.maxContribution=w.toString(),i.minContribution=I.toString(),i.refundType=T.toString(),i.totalVolumePurchased=R.toString();case 38:return q=O.map((function(e){return{address:t,name:e}})),e.next=41,Object(S.a)(b,q,{web3:r},n);case 41:if(L=e.sent,W=Object(c.a)(L,13),F=Object(c.a)(W[0],1),M=F[0],U=Object(c.a)(W[1],1),V=U[0],D=Object(c.a)(W[2],1),B=D[0],_=Object(c.a)(W[3],1),K=_[0],H=Object(c.a)(W[4],1),Y=H[0],z=Object(c.a)(W[5],1),J=z[0],G=Object(c.a)(W[6],1),Q=G[0],X=Object(c.a)(W[7],1),Z=X[0],$=Object(c.a)(W[8],1),ee=$[0],te=Object(c.a)(W[9],1),ne=te[0],ce=Object(c.a)(W[10],1),re=ce[0],ae=Object(c.a)(W[11],1),se=ae[0],ie=Object(c.a)(W[12],1),le=ie[0],!(d>1&&d<21)){e.next=103;break}if(b=d>3&&d<21?k.a.contract.poolV3.ABI:k.a.contract.poolV2.ABI,!(d>=7)){e.next=90;break}return b=k.a.contract.poolV7.ABI,e.next=75,Object(S.a)(b,[{address:t,name:"publicSaleStartTime"},{address:t,name:"getNumberOfWhitelistedUsers"},{address:t,name:"kycDetails"}],{web3:r},n);case 75:oe=e.sent,ue=Object(c.a)(oe,3),de=Object(c.a)(ue[0],1),be=de[0],je=Object(c.a)(ue[1],1),Oe=je[0],fe=Object(c.a)(ue[2],1),me=fe[0],he=Math.trunc(+new Date/1e3),i.publicSaleStartTime=be.toString(),i.numberOfWhitelistedUsers=Oe.toString(),i.kycDetails=Object(C.e)(me),i.useWhitelisting=0!==Number(i.publicSaleStartTime)&&(Number(i.publicSaleStartTime)>he||Number(i.publicSaleStartTime)>=Number(M)),e.next=103;break;case 90:return e.next=92,Object(S.a)(b,[{address:t,name:"useWhitelisting"},{address:t,name:"completedKyc"},{address:t,name:"getNumberOfWhitelistedUsers"}],{web3:r},n);case 92:ve=e.sent,xe=Object(c.a)(ve,3),pe=Object(c.a)(xe[0],1),ge=pe[0],Ne=Object(c.a)(xe[1],1),ye=Ne[0],ke=Object(c.a)(xe[2],1),Se=ke[0],i.useWhitelisting=ge,i.completedKyc=ye,i.numberOfWhitelistedUsers=Se.toString();case 103:if(!(d>=2&&d<k.a.contract.FAIRLAUNCH_VERSION)){e.next=125;break}if(!(d>=7)){e.next=117;break}return b=k.a.contract.poolV7.ABI,e.next=108,Object(S.a)(b,[{address:t,name:"publicSaleStartTime"}],{web3:r},n);case 108:Ce=e.sent,we=Object(c.a)(Ce,1),Ae=Object(c.a)(we[0],1),Ie=Ae[0],Ee=+new Date/1e3,i.publicSaleStartTime=Ie,i.useWhitelisting=0!==Number(Ie)&&(Number(Ie)>Ee||Number(Ie)>=Number(M)),e.next=125;break;case 117:return b=k.a.contract.poolV2.ABI,e.next=120,Object(S.a)(b,[{address:t,name:"useWhitelisting"}],{web3:r},n);case 120:Te=e.sent,Pe=Object(c.a)(Te,1),Re=Object(c.a)(Pe[0],1),qe=Re[0],i.useWhitelisting=qe;case 125:return We=+new Date/1e3,Fe=Number(Q),Me=Number(M),We<Fe?Le="incoming":We>=Fe&&We<Me?Le="inprogress":We>=Me&&(Le="ended"),i.hardCap&&(Ue=Number(j.a.utils.fromWei(ne.toString())),Ve=Number(j.a.utils.fromWei(i.hardCap.toString())),Ue>=Ve&&(Le="filled")),1===Number(le)&&(Le="ended"),2===Number(le)&&(Le="canceled"),e.abrupt("return",Object(s.a)({endTime:M.toString(),liquidityPercent:V.toString(),liquidityUnlockTime:B.toString(),owner:K,rate:Y.toString(),softCap:J.toString(),startTime:Q.toString(),token:Z,totalClaimed:ee.toString(),totalRaised:ne.toString(),status:Le,poolDetails:Object(C.f)(re),liquidityLockDays:se.toString(),poolState:Number(le),version:d},i));case 135:return e.prev=135,e.t0=e.catch(1),e.abrupt("return",void 0);case 138:case"end":return e.stop()}}),e,null,[[1,135]])})))).apply(this,arguments)}function P(e,t,n,c){return R.apply(this,arguments)}function R(){return(R=Object(h.a)(f.a.mark((function e(t,n,r,a){var s,i,l,o,u,d,b,j,O,m,h,v;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return",void 0);case 2:return e.prev=2,s={},i=["name","symbol","decimals","totalSupply"].map((function(e){return{address:t,name:e}})),e.next=7,Object(S.a)(A,i,{web3:r},a);case 7:return l=e.sent,o=Object(c.a)(l,4),u=Object(c.a)(o[0],1),d=u[0],b=Object(c.a)(o[1],1),j=b[0],O=Object(c.a)(o[2],1),m=O[0],h=Object(c.a)(o[3],1),v=h[0],s.name=d,s.symbol=j,s.decimals=m.toString(),s.totalSupply=v.toString(),I.set("token/".concat(t),s),e.abrupt("return",s);case 25:return e.prev=25,e.t0=e.catch(2),e.abrupt("return",void 0);case 28:case"end":return e.stop()}}),e,null,[[2,25]])})))).apply(this,arguments)}function q(e,t,n,c,r){return L.apply(this,arguments)}function L(){return(L=Object(h.a)(f.a.mark((function e(t,n,c,r,a){var s,i;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E(t,a,n,r);case 2:return s=e.sent,e.next=5,P(null===s||void 0===s?void 0:s.token,c,n,a);case 5:return i=e.sent,e.abrupt("return",{address:t,pool:s,token:i});case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var W=n(141),F=n(55);function M(){var e=Object(F.c)().library,t=Object(r.useState)(0),n=Object(c.a)(t,2),a=n[0],s=n[1],i=function(e){s(e)},l=function e(){s((function(e){return e+1})),setTimeout((function(){e()}),1e4)};return Object(r.useEffect)((function(){return e&&e.once("block",i),function(){e&&e.off("block",i)}}),[a,e]),Object(r.useEffect)((function(){e||l()}),[e]),a}var U=!1,V=!1,D=0,B=1,_=void 0,K=15;var H=n(50),Y=n(1113),z=n.n(Y),J=n(19),G=n(308),Q=n(2),X=function(e){var t=e.url,n=Object(r.useState)(!1),a=Object(c.a)(n,2),s=a[0],i=a[1];return Object(Q.jsx)("figure",{className:"media-left",style:{border:"1px solid rgba(249, 81, 146,0.2)",borderRadius:"50%",overflow:"hidden"},children:Object(Q.jsx)("p",{className:"image is-48x48",children:Object(Q.jsx)("img",{style:{filter:s?"grayscale(1)":"grayscale(0)"},src:s?G.a:t,alt:"",onError:function(){return i(!0)},loading:"lazy"})})})},Z=Object(r.memo)(X),$=n(924),ee=n(285),te=function(e){var t=e.tokenName,n=e.tokenDecimals,c=e.tokenSymbol,r=e.rate,a=e.version,s=Object(ee.a)().symbol;return Object(Q.jsxs)("div",{className:"content-title",children:[Object(Q.jsx)("p",{className:"title",children:Object(Q.jsx)("span",{children:t||"-"})}),Number(a)>=k.a.contract.FAIRLAUNCH_VERSION?Object(Q.jsx)("p",{className:"subtitle",children:"Fair Launch"}):Object(Q.jsx)(Q.Fragment,{children:n?Object(Q.jsxs)("p",{className:"subtitle",children:["1 ",s," = ",Object(C.i)(r||"0",Number(n||"0"))," ",c]}):Object(Q.jsx)("p",{className:"subtitle",children:"-"})})]})},ne=Object(r.memo)(te),ce=function(e){var t=e.hardCap,n=e.softCap,c=e.version,r=Object(ee.a)().symbol;return Object(Q.jsxs)("div",{className:"soft-hard-cap",children:[Object(Q.jsxs)("p",{children:[Number(c)>=k.a.contract.FAIRLAUNCH_VERSION?"Soft":"Soft/Hard"," Cap:"]}),Number(c)>=k.a.contract.FAIRLAUNCH_VERSION?Object(Q.jsxs)("span",{children:[j.a.utils.fromWei(n||"0")," ",r]}):Object(Q.jsxs)("span",{children:[j.a.utils.fromWei(n||"0")," ",r," - ",j.a.utils.fromWei(t||"0")," ",r]})]})},re=Object(r.memo)(ce),ae=n(891),se=function(e){var t=e.status,n=e.softCap,c=e.hardCap,a=e.totalRaised,s=e.version,i=Object(ee.a)().symbol,l=Object(r.useMemo)((function(){if(Number(s)<k.a.contract.FAIRLAUNCH_VERSION){var e=c&&0!==Number(c)?Number(a)/Number(c)*100:0;return parseFloat(String(e)).toFixed(2)}var t=n&&0!==Number(n)?Number(a)/Number(n)*100:0;return parseFloat(String(t)).toFixed(2)}),[n,c,a,s]),o=Object(r.useMemo)((function(){if(!(Number(s)<k.a.contract.FAIRLAUNCH_VERSION))return 0===Number(l)?0:Number(l)<100?Number(l):100/Number(l)*100}),[l,s]);return Object(Q.jsxs)("div",{className:"content-progress",children:[Object(Q.jsxs)("p",{className:"title",children:["Progress (",l,"%)"]}),Number(s)>k.a.contract.FAIRLAUNCH_VERSION?Object(Q.jsx)(ae.a,{style:{marginTop:-4},percent:Number(l),strokeWidth:8,showInfo:!1,success:{percent:o,strokeColor:"#48c774"},status:"inprogress"===t?"active":"normal",strokeColor:"rgba(72, 199, 116, 0.5)"}):Object(Q.jsx)(ae.a,{style:{marginTop:-4},percent:Number(l),strokeWidth:8,showInfo:!1,status:"inprogress"===t?"active":"normal",strokeColor:"#48c774"}),Number(s)>=k.a.contract.FAIRLAUNCH_VERSION?Object(Q.jsx)("div",{className:"sub-title is-flex is-align-items-center",children:Object(Q.jsxs)("div",{className:"is-flex-grow-1",children:[a?j.a.utils.fromWei(a||"0"):0," ",i," Raised"]})}):Object(Q.jsxs)("div",{className:"sub-title is-flex is-align-items-center",children:[Object(Q.jsxs)("div",{className:"is-flex-grow-1",children:[a?j.a.utils.fromWei(a||"0"):0," ",i]}),Object(Q.jsxs)("div",{className:"is-flex-grow-1 has-text-right",children:[c?j.a.utils.fromWei(c||"0"):0," ",i]})]})]})},ie=Object(r.memo)(se),le=function(e){var t=e.liquidityPercent;return Object(Q.jsx)("div",{className:"liquidity-percent",children:Object(Q.jsxs)("div",{className:"is-flex is-align-items-center",children:[Object(Q.jsx)("p",{className:"is-flex-grow-1",children:"Liquidity %:"}),Object(Q.jsxs)("span",{className:"is-flex-grow-1 has-text-right time-text",children:[t?t||"0":0,"%"]})]})})},oe=Object(r.memo)(le),ue=n(862),de=function(e){var t=e.liquidityLockDays,n=Object(ue.a)(),c=Object(r.useMemo)((function(){return t?n?Number(t)/60:Number(t)/24/60/60:0}),[n,t]);return Object(Q.jsx)("div",{className:"lockup-time",children:Object(Q.jsxs)("div",{className:"is-flex is-align-items-center",children:[Object(Q.jsx)("p",{className:"is-flex-grow-1",children:"Lockup Time:"}),Object(Q.jsxs)("span",{className:"is-flex-grow-1 has-text-right time-text",children:[c," ",n?"minutes":"days"]})]})})},be=Object(r.memo)(de),je=n(850),Oe=function(e){var t=e.days,n=e.hours,c=e.minutes,r=e.seconds;return Object(Q.jsx)("div",{className:"countdown-text",children:Object(Q.jsxs)("strong",{children:[Object(Q.jsx)("span",{children:Object(je.b)(t)}),Object(Q.jsx)("span",{className:"dotdot",children:":"}),Object(Q.jsx)("span",{children:Object(je.b)(n)}),Object(Q.jsx)("span",{className:"dotdot",children:":"}),Object(Q.jsx)("span",{children:Object(je.b)(c)}),Object(Q.jsx)("span",{className:"dotdot",children:":"}),Object(Q.jsx)("span",{children:Object(je.b)(r)})]})})},fe=Object(r.memo)(Oe),me=function(e){var t=e.status,n=e.startTime,c=e.endTime;return Object(Q.jsxs)("div",{className:"countdown is-flex-grow-1 is-flex-direction-column",children:["incoming"===t&&Object(Q.jsxs)(Q.Fragment,{children:[Object(Q.jsx)("div",{children:"Sale Starts In:"}),Object(Q.jsx)(je.a,{date:1e3*Number(n||0),renderer:function(e){var t=e.days,n=e.hours,c=e.minutes,r=e.seconds;return Object(Q.jsx)(fe,{days:t,hours:n,minutes:c,seconds:r})}})]}),"inprogress"===t&&Object(Q.jsxs)(Q.Fragment,{children:[Object(Q.jsx)("div",{children:"Sale Ends In:"}),Object(Q.jsx)(je.a,{date:1e3*Number(c||0),renderer:function(e){var t=e.days,n=e.hours,c=e.minutes,r=e.seconds;return Object(Q.jsx)(fe,{days:t,hours:n,minutes:c,seconds:r})}})]}),"filled"===t&&Object(Q.jsxs)(Q.Fragment,{children:[Object(Q.jsx)("div",{children:"Presale:"}),Object(Q.jsx)("div",{children:"Filled"})]}),"ended"===t&&Object(Q.jsxs)(Q.Fragment,{children:[Object(Q.jsx)("div",{children:"Presale:"}),Object(Q.jsx)("div",{children:"Ended"})]}),"canceled"===t&&Object(Q.jsxs)(Q.Fragment,{children:[Object(Q.jsx)("div",{children:"Presale:"}),Object(Q.jsx)("div",{children:"Canceled"})]})]})},he=Object(r.memo)(me),ve=n(30),xe=n(927),pe=n(152),ge=n(855),Ne=function(e){return e.isOwner?Object(Q.jsx)(pe.a,{title:"You own this pool",children:Object(Q.jsx)("p",{className:"is-flex tag is-warning is-small mr-2",children:Object(Q.jsx)(ge.b,{})})}):null},ye=Object(r.memo)(Ne),ke=n(926),Se=function(e){var t,n,c,r,a,s=e.address,i=e.pool,l=Object(F.c)().account,o=Object(g.c)();return Object(Q.jsx)("div",{className:"column is-one-third",children:Object(Q.jsx)(z.a,{height:419,style:{height:"100%"},children:Object(Q.jsx)("div",{className:"custom-card card is-flex is-flex-direction-column",style:{height:"100%"},children:Object(Q.jsxs)("div",{className:"card-content is-flex-grow-1",children:[Object(Q.jsxs)("div",{className:"media is-flex is-align-items-center",children:[Object(Q.jsx)(Z,{url:null===i||void 0===i||null===(t=i.poolDetails)||void 0===t?void 0:t.logoUrl}),Object(Q.jsx)("div",{className:"media-content",children:Object(Q.jsx)("div",{className:"is-flex is-justify-content-flex-end",children:Object(Q.jsx)("div",{className:"is-flex has-text-right is-flex-direction-column",children:Object(Q.jsxs)("div",{className:"is-flex",children:[Object(Q.jsx)(ke.a,{url:null===i||void 0===i||null===(n=i.kycDetails)||void 0===n?void 0:n.audit}),Object(Q.jsx)(xe.a,{completed:null===i||void 0===i?void 0:i.completedKyc}),Object(Q.jsx)(ye,{isOwner:(null===i||void 0===i?void 0:i.owner)===l}),Object(Q.jsx)($.a,{status:null===i||void 0===i?void 0:i.status,useWhitelisting:null===i||void 0===i?void 0:i.useWhitelisting})]})})})})]}),Object(Q.jsx)(ne,{tokenDecimals:null===i||void 0===i||null===(c=i.tokenInfo)||void 0===c?void 0:c.decimals,tokenName:null===i||void 0===i||null===(r=i.tokenInfo)||void 0===r?void 0:r.name,tokenSymbol:null===i||void 0===i||null===(a=i.tokenInfo)||void 0===a?void 0:a.symbol,rate:null===i||void 0===i?void 0:i.rate,version:null===i||void 0===i?void 0:i.version}),Object(Q.jsx)(re,{version:null===i||void 0===i?void 0:i.version,softCap:null===i||void 0===i?void 0:i.softCap,hardCap:null===i||void 0===i?void 0:i.hardCap}),Object(Q.jsx)(ie,{status:null===i||void 0===i?void 0:i.status,version:null===i||void 0===i?void 0:i.version,softCap:null===i||void 0===i?void 0:i.softCap,hardCap:null===i||void 0===i?void 0:i.hardCap,totalRaised:null===i||void 0===i?void 0:i.totalRaised}),Object(Q.jsx)(oe,{liquidityPercent:null===i||void 0===i?void 0:i.liquidityPercent}),Object(Q.jsx)(be,{liquidityLockDays:null===i||void 0===i?void 0:i.liquidityLockDays}),Object(Q.jsx)("div",{className:"custom-card-footer",children:Object(Q.jsxs)("div",{className:"is-flex is-align-items-center",children:[Object(Q.jsx)(he,{status:null===i||void 0===i?void 0:i.status,endTime:null===i||void 0===i?void 0:i.endTime,startTime:null===i||void 0===i?void 0:i.startTime}),Object(Q.jsx)("div",{className:"view-pool has-text-right",children:Object(Q.jsx)(H.b,{to:Object(ve.a)(Object(J.b)(J.a.LauchpadDetail).replace(":id",s),o),className:"view-button",children:"View Pool"})})]})})]})})})})},Ce=Object(r.memo)(Se),we=function(e){var t=e.children,n=e.debounceMs,c=void 0===n?300:n,a=e.offset,s=void 0===a?500:a,i=e.enable,l=void 0===i||i,o=e.onEndReached,u=Object(r.useCallback)((function(){l&&Object(C.s)(s)&&(null===o||void 0===o||o())}),[o,s,l]),b=d()(u,c);return Object(r.useEffect)((function(){return window.addEventListener("scroll",b),function(){window.removeEventListener("scroll",b)}}),[b]),Object(Q.jsx)(Q.Fragment,{children:t})},Ae=i.a.Option;function Ie(){var e=window.scrollY;window.scroll(0,e-1),window.scroll(0,e+1)}var Ee=function(){var e=Object(r.useRef)(null),t=Object(r.useState)({query:"",filter:"",status:""}),n=Object(c.a)(t,2),a=n[0],u=n[1],b=function(e,t){var n=Object(g.i)(),a=M(),i=Object(N.s)(n),l=Object(N.r)(n),o=Object(N.A)(n),u=Object(g.c)(),d=Object(r.useState)([]),b=Object(c.a)(d,2),j=b[0],O=b[1],v=Object(p.a)(u),S=Object(r.useState)(1),w=Object(c.a)(S,2),A=w[0],I=w[1],E=Object(r.useState)(!1),T=Object(c.a)(E,2),P=T[0],R=T[1],L=Object(r.useState)(!1),F=Object(c.a)(L,2),H=F[0],Y=F[1],z=Object(y.a)(),J=Object(c.a)(z,2),G=J[0],Q=J[1];D=e&&"kyc"!==e?Object.values(G).reduce((function(e,t){return e.concat(t)}),[]).filter((function(t){return t.status===e})).length:0,_=t;var X=Object(r.useMemo)((function(){return Object.values(G).reduce((function(e,t){return e.concat(t)}),[])}),[G]),Z=Object(r.useMemo)((function(){return e&&"kyc"!==e?X.filter((function(t){return t.status===e})):X}),[X,e]),$=Object(r.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:K,c=arguments.length>2&&void 0!==arguments[2]&&arguments[2];B=e,Object(h.a)(f.a.mark((function r(){var a,i,d,b;return f.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(0!==j.length){r.next=2;break}return r.abrupt("return");case 2:if(a=x()(j,t),0!==(i=a[e-1]||[]).length&&!U){r.next=6;break}return r.abrupt("return");case 6:return R(!0),U=!0,I(B),v&&u!==v&&Q({}),r.prev=10,d={},b=i.map((function(e){return q(e,n,o,l,u)})),r.next=15,Promise.allSettled(b);case 15:r.sent.map((function(e){if("fulfilled"===e.status&&e.value){var t=e.value;t.pool&&(d[t.address]=Object(s.a)(Object(s.a)({},t.pool),{},{tokenInfo:t.token,address:t.address}))}return null})),Object.keys(d).length>0&&Q((function(t){return Object(s.a)(Object(s.a)({},t),{},Object(m.a)({},e,Object.values(d)))})),c&&D<K?V&&(U=!1,$(e+1,t,!0)):Object(C.s)(200)&&_?(U=!1,$(e+1,t)):R(!1),r.next=25;break;case 21:r.prev=21,r.t0=r.catch(10),R(!1),Object(C.s)(200)&&_&&(U=!1,$(e,t));case 25:return r.prev=25,U=!1,r.finish(25);case 28:case"end":return r.stop()}}),r,null,[[10,21,25,28]])})))()}),[j,v,u,Q,n,o,l]),ee=Object(r.useCallback)((function(){Object(h.a)(f.a.mark((function e(){var t,n,c,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,R(!0),Y(!1),e.next=5,W.a.pool.getBlacklistPools();case 5:return t=e.sent,n=t.filter((function(e){return e.chainId===u})).map((function(e){return e.address})),e.next=9,i.methods.getAllPools().call();case 9:c=e.sent,(r=n.length>0?c.filter((function(e){return n.indexOf(e)<0})):c).reverse(),O(r),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(0),Y(!0);case 18:case"end":return e.stop()}}),e,null,[[0,15]])})))()}),[u,i]),te=Object(r.useCallback)((function(){$(A+1),I((function(e){return e+1}))}),[$,A]),ne=Object(r.useCallback)((function(e){e&&$(A,K,!0)}),[$,A]),ce=B*K,re=Object(r.useMemo)((function(){return j.length}),[j.length]);return Object(r.useEffect)((function(){V=!0,ee()}),[ee,a]),Object(r.useEffect)((function(){var e=window.scrollY,t=419*(window.innerWidth<=k.a.MOBILE_BREAKPOINT?9:3)-150,n=e<=0?0:Math.trunc(e/t);$(B||n+1)}),[$]),Object(r.useEffect)((function(){return V=!0,function(){V=!1,B=1}}),[]),{addresses:j,pools:Z,loading:P,error:H,numberOfPoolsLoading:ce,totalPools:re,page:A,getAllPools:ee,getPools:$,loadMore:te,filterPools:ne}}(a.status,a.query),O=b.loading,v=b.pools,S=b.numberOfPoolsLoading,w=b.totalPools,A=b.page,I=b.loadMore,E=b.filterPools,T=b.getPools,P=Object(r.useMemo)((function(){var e=v;if(a.status&&"kyc"!==a.status&&(e=e.filter((function(e){return e.status===a.status}))),"kyc"===a.status&&(e=e.filter((function(e){return!!e.completedKyc}))),a.filter&&("hardcap"===a.filter||"softcap"===a.filter?e=e.sort((function(e,t){var n=Number(j.a.utils.fromWei(e.hardCap||"0"));return Number(j.a.utils.fromWei(t.hardCap||"0"))-n})):"liquidity"===a.filter?e=e.sort((function(e,t){var n=Number(j.a.utils.fromWei(e.liquidityPercent||"0"));return Number(j.a.utils.fromWei(t.liquidityPercent||"0"))-n})):"trustScores"===a.filter?e=e.sort((function(e,t){return(t.trustedScores||0)-(e.trustedScores||0)})):"startTime"===a.filter?e=e.sort((function(e,t){return Number(e.startTime||"0")-Number(t.startTime||"0")})):"endTime"===a.filter&&(e=e.sort((function(e,t){return Number(e.endTime||"0")-Number(t.endTime||"0")})))),a.query){var t=new RegExp(a.query.replaceAll("(","").replaceAll(")","").replaceAll("/","").replaceAll("\\",""),"gi");e=e.filter((function(e){var n,c,r="".concat(e.address,"|").concat(e.token,"|").concat(null===(n=e.tokenInfo)||void 0===n?void 0:n.name,"|").concat(null===(c=e.tokenInfo)||void 0===c?void 0:c.symbol).replaceAll("(","").replaceAll(")",""),a=t.test(r);return t.lastIndex=0,a}))}return e}),[v,a.filter,a.query,a.status]),R=Object(r.useCallback)((function(e){O||(e&&e.preventDefault&&e.preventDefault(),u((function(e){return Object(s.a)(Object(s.a)({},e),{},{filter:""})})),I())}),[O,I]),L=d()((function(e){u((function(t){return Object(s.a)(Object(s.a)({},t),{},{query:e.target.value||""})})),T(A),Ie()}),250);return Object(Q.jsxs)(Q.Fragment,{children:[Object(Q.jsxs)("div",{className:"pool-filter",children:[Object(Q.jsxs)("div",{className:"search",children:[Object(Q.jsx)("div",{className:"filter-title invisible",children:"s"}),Object(Q.jsx)(l.a,{placeholder:"Enter token name or token symbol",style:{borderRadius:16},onChange:L,allowClear:!0})]}),Object(Q.jsxs)("div",{className:"filter",children:[Object(Q.jsxs)("div",{className:"status",children:[Object(Q.jsx)("div",{className:"filter-title",children:"Filter By"}),Object(Q.jsxs)(i.a,{value:a.status,onChange:function(e){u((function(t){return Object(s.a)(Object(s.a)({},t),{},{status:e||""})})),E(e||""),Ie()},style:{width:110},children:[Object(Q.jsx)(Ae,{value:"",children:"All Status"}),Object(Q.jsx)(Ae,{value:"kyc",children:"KYC"}),Object(Q.jsx)(Ae,{value:"incoming",children:"Upcoming"}),Object(Q.jsx)(Ae,{value:"inprogress",children:"Inprogress"}),Object(Q.jsx)(Ae,{value:"filled",children:"Filled"}),Object(Q.jsx)(Ae,{value:"ended",children:"Ended"}),Object(Q.jsx)(Ae,{value:"canceled",children:"Canceled"})]})]}),Object(Q.jsxs)("div",{children:[Object(Q.jsx)("div",{className:"filter-title",children:"Sort By"}),Object(Q.jsxs)(i.a,{value:a.filter,onChange:function(e){u((function(t){return Object(s.a)(Object(s.a)({},t),{},{filter:e||""})}))},style:{width:110},children:[Object(Q.jsx)(Ae,{value:"",children:"No Filter"}),Object(Q.jsx)(Ae,{value:"hardcap",children:"Hard Cap"}),Object(Q.jsx)(Ae,{value:"softcap",children:"Soft Cap"}),Object(Q.jsx)(Ae,{value:"liquidity",children:"LP percent"}),Object(Q.jsx)(Ae,{value:"startTime",children:"Start time"}),Object(Q.jsx)(Ae,{value:"endTime",children:"End time"})]})]})]})]}),Object(Q.jsx)(we,{onEndReached:R,enable:!a.query,children:Object(Q.jsxs)(Q.Fragment,{children:[Object(Q.jsx)("div",{ref:e,className:"columns is-multiline",children:P.map((function(e){return Object(Q.jsx)(Ce,{address:e.address||"",pool:e},e.address)}))}),Object(Q.jsx)("div",{className:"has-text-centered mt-2",children:O?Object(Q.jsxs)("div",{children:[Object(Q.jsx)(o.a,{spinning:!0}),S&&w&&(a.status||a.query)?Object(Q.jsxs)("span",{children:[" ","Loading ",S,"/",w," pools"]}):null]}):Object(Q.jsx)("a",{href:"#",onClick:R,children:"View more pools"})})]})})]})},Te=n(1258),Pe=n(453),Re=Object(Pe.a)({});function qe(){return Re()}var Le=n(99),We=null,Fe=null;var Me=n(54),Ue=n(133),Ve=i.a.Option,De=function(){var e=Object(Me.f)(),t=Object(Me.g)(),n=Object(Ue.a)(),a=Object(r.useState)(t.page&&!isNaN(Number(t.page))?Number(t.page):1),u=Object(c.a)(a,2),b=u[0],O=u[1],m=Object(r.useState)({query:"",filter:"",status:""}),v=Object(c.a)(m,2),p=v[0],y=v[1],k=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:18,n=Object(g.i)(),a=Object(N.s)(n),i=Object(N.r)(n),l=Object(N.A)(n),o=Object(g.c)(),u=Object(F.c)().account,d=Object(r.useState)([]),b=Object(c.a)(d,2),j=b[0],O=b[1],m=Object(r.useState)(!0),v=Object(c.a)(m,2),p=v[0],y=v[1],k=qe(),S=Object(c.a)(k,2)[1],C=Object(r.useMemo)((function(){return x()(j,t)[e-1]||[]}),[j,e,t]),w=Object(r.useCallback)((function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];clearTimeout(Fe),Object(h.a)(f.a.mark((function c(){var r,a,u,d;return f.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:if(0!==e.length){c.next=2;break}return c.abrupt("return");case 2:for(t||y(!0),c.prev=3,r={},a=[],u=0,d=e.length;u<d;u++)a.push(q(e[u],n,l,i,o));return c.next=9,Promise.all(a);case 9:c.sent.map((function(e){return r[e.address]=Object(s.a)(Object(s.a)({},e.pool),{},{tokenInfo:e.token,address:e.address}),null})),S(r),c.next=16;break;case 14:c.prev=14,c.t0=c.catch(3);case 16:return c.prev=16,y(!1),Fe=setTimeout((function(){w(e,!0)}),5e3),c.finish(16);case 20:case"end":return c.stop()}}),c,null,[[3,14,16,20]])})))()}),[a,o,n,l]);return Object(r.useEffect)((function(){if(a)return clearTimeout(We),We=setTimeout((function(){Object(h.a)(f.a.mark((function e(){var t,n,c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(y(!0),e.prev=1,u){e.next=4;break}return e.abrupt("return");case 4:return e.next=6,a.methods.getPoolsOf(u).call();case 6:return t=e.sent,e.next=9,a.methods.getAllContributedPools(u).call();case 9:n=e.sent,(c=[].concat(Object(Le.a)(t),Object(Le.a)(n))).reverse(),O(c),e.next=17;break;case 15:e.prev=15,e.t0=e.catch(1);case 17:return e.prev=17,y(!1),e.finish(17);case 20:case"end":return e.stop()}}),e,null,[[1,15,17,20]])})))()}),250),function(){clearTimeout(We)}}),[a,o,u,e]),Object(r.useEffect)((function(){w(C)}),[C]),{pools:j,loading:p}}(b,18),S=k.loading,C=k.pools,w=qe(),A=Object(c.a)(w,1)[0],I=Object(r.useMemo)((function(){var e=Object.values(A);if(p.status&&"kyc"!==p.status&&(e=e.filter((function(e){return e.status===p.status}))),"kyc"===p.status&&(e=e.filter((function(e){return!!e.completedKyc}))),p.filter&&("hardcap"===p.filter||"softcap"===p.filter?e=e.sort((function(e,t){var n=Number(j.a.utils.fromWei(e.hardCap||"0"));return Number(j.a.utils.fromWei(t.hardCap||"0"))-n})):"liquidity"===p.filter&&(e=e.sort((function(e,t){var n=Number(j.a.utils.fromWei(e.liquidityPercent||"0"));return Number(j.a.utils.fromWei(t.liquidityPercent||"0"))-n})))),p.query){var t=new RegExp(p.query.replaceAll("(","").replaceAll(")",""),"gi");e=e.filter((function(e){var n,c,r="".concat(e.address,"|").concat(e.token,"|").concat(null===(n=e.tokenInfo)||void 0===n?void 0:n.name,"|").concat(null===(c=e.tokenInfo)||void 0===c?void 0:c.symbol).replaceAll("(","").replaceAll(")",""),a=t.test(r);return t.lastIndex=0,a}))}return e}),[A,p]),E=Object(r.useCallback)((function(t){O(t),e.push(Object(ve.b)(Object(J.b)(J.a.LauchpadList).replace(":tab?","my"),n)),window.scrollTo({top:100,behavior:"smooth"})}),[n,e]),T=d()((function(e){y((function(t){return Object(s.a)(Object(s.a)({},t),{},{query:e.target.value||""})}))}),150);return Object(r.useEffect)((function(){O(t.page&&!isNaN(Number(t.page))?Number(t.page):1)}),[t.page]),Object(Q.jsxs)(o.a,{spinning:S,children:[Object(Q.jsxs)("div",{className:"pool-filter",children:[Object(Q.jsxs)("div",{className:"search",children:[Object(Q.jsx)("div",{className:"filter-title invisible",children:"s"}),Object(Q.jsx)(l.a,{placeholder:"Enter token name or token symbol",style:{borderRadius:16},onChange:T,allowClear:!0})]}),Object(Q.jsxs)("div",{className:"filter",children:[Object(Q.jsxs)("div",{className:"status",children:[Object(Q.jsx)("div",{className:"filter-title",children:"Filter By"}),Object(Q.jsxs)(i.a,{value:p.status,onChange:function(e){y((function(t){return Object(s.a)(Object(s.a)({},t),{},{status:e||""})}))},children:[Object(Q.jsx)(Ve,{value:"",children:"All Status"}),Object(Q.jsx)(Ve,{value:"kyc",children:"KYC"}),Object(Q.jsx)(Ve,{value:"incoming",children:"Upcoming"}),Object(Q.jsx)(Ve,{value:"inprogress",children:"Inprogress"}),Object(Q.jsx)(Ve,{value:"filled",children:"Filled"}),Object(Q.jsx)(Ve,{value:"ended",children:"Ended"}),Object(Q.jsx)(Ve,{value:"canceled",children:"Canceled"})]})]}),Object(Q.jsxs)("div",{children:[Object(Q.jsx)("div",{className:"filter-title",children:"Sort By"}),Object(Q.jsxs)(i.a,{value:p.filter,onChange:function(e){y((function(t){return Object(s.a)(Object(s.a)({},t),{},{filter:e||""})}))},children:[Object(Q.jsx)(Ve,{value:"",children:"No Filter"}),Object(Q.jsx)(Ve,{value:"hardcap",children:"Hard Cap"}),Object(Q.jsx)(Ve,{value:"softcap",children:"Soft Cap"}),Object(Q.jsx)(Ve,{value:"liquidity",children:"LP percent"})]})]})]})]}),Object(Q.jsx)("div",{className:"columns is-multiline",children:I.map((function(e){return Object(Q.jsx)(Ce,{address:e.address||"",pool:e},e.address)}))}),0===I.length&&Object(Q.jsx)("div",{className:"has-text-centered p-4",children:"No data"}),C.length>0&&Object(Q.jsx)("div",{className:"has-text-centered",children:Object(Q.jsx)(Te.a,{defaultCurrent:1,current:b,total:C.length,pageSize:18,showSizeChanger:!1,onChange:E})})]})},Be=a.a.TabPane;t.default=function(){var e=Object(Me.g)(),t=Object(Me.f)(),n=Object(Ue.a)(),s=Object(r.useState)("my"===e.tab?"my":"all"),i=Object(c.a)(s,2),l=i[0],o=i[1],u=Object(r.useCallback)((function(e){o(e),t.push(Object(ve.b)(Object(J.b)(J.a.LauchpadList).replace(":tab?",e),n))}),[t,n]);return Object(r.useEffect)((function(){o("my"===e.tab?"my":"all")}),[e.tab]),Object(Q.jsxs)("div",{className:"py-6 container launchpad-page",children:[Object(Q.jsx)("div",{className:"launchpad-title",children:Object(Q.jsx)("h1",{children:"Current Presale"})}),Object(Q.jsxs)(a.a,{defaultActiveKey:"all",activeKey:l,centered:!0,size:"large",onChange:u,children:[Object(Q.jsx)(Be,{tab:"All launchpads",children:Object(Q.jsx)(Ee,{})},"all"),Object(Q.jsx)(Be,{tab:"My Contributions",children:Object(Q.jsx)(De,{})},"my")]})]})}},851:function(e,t,n){"use strict";var c=n(9),r=n(14),a=function(){function e(){Object(c.a)(this,e),this.NAMESPACE="cryptobazar"}return Object(r.a)(e,[{key:"get",value:function(e){try{var t=localStorage.getItem("".concat(this.NAMESPACE,"@").concat(e));return t?JSON.parse(t):t}catch(n){console.log("Unable to read this object: ",e)}}},{key:"set",value:function(e,t){try{return localStorage.setItem("".concat(this.NAMESPACE,"@").concat(e),JSON.stringify(t))}catch(n){console.log("Unable to store this object: ",e)}}},{key:"delete",value:function(e){return localStorage.removeItem("".concat(this.NAMESPACE,"@").concat(e))}},{key:"flash",value:function(e){var t=this.get(e);return this.delete(e),t}}]),e}();t.a=a},862:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var c=n(1),r=n(3),a=n(25);function s(){var e=Object(a.c)();return Object(c.useMemo)((function(){return[r.a.BSC_TESTNET,r.a.MATIC_TESTNET,r.a.KCC_TESTNET].includes(e)}),[e])}},924:function(e,t,n){"use strict";var c=n(1),r=n(152),a=n(77),s=n(925),i=n(2),l=function(e){var t=e.status,n=e.useWhitelisting,l=Object(c.useMemo)((function(){if(t)return{ended:{txt:" Sale Ended",cx:"ended"},inprogress:{txt:" Sale Live",cx:"inprogress"},incoming:{txt:" Upcoming",cx:"incoming"},filled:{txt:" Filled",cx:"filled"},canceled:{txt:" Canceled",cx:"canceled"}}[t]}),[t]);return l?Object(i.jsxs)("span",{className:"is-flex status-dot ".concat(l.cx),children:["undefined"!==typeof n&&n?Object(i.jsx)(r.a,{title:"Whitelist only",children:Object(i.jsx)(a.i,{size:16})}):Object(i.jsx)(s.a,{}),Object(i.jsx)("span",{children:l.txt})]}):null};t.a=Object(c.memo)(l)},926:function(e,t,n){"use strict";var c=n(1),r=n(152),a=n(2),s=function(e){var t=e.url;return t?Object(a.jsx)(r.a,{title:"Click to view audit details",children:Object(a.jsx)("a",{href:t,className:"is-flex tag is-small mr-2",style:{backgroundColor:"#00bcd4",color:"#ffffff"},target:"_blank",rel:"noopener nofollow noreferrer",children:"Audit"})}):null};t.a=Object(c.memo)(s)},927:function(e,t,n){"use strict";var c=n(152),r=n(1),a=n(2),s=function(e){var t=e.completed,n=e.url;return n?Object(a.jsx)(c.a,{title:"Click to view KYC details",children:Object(a.jsx)("a",{href:n,className:"is-flex tag is-success is-small mr-2",target:"_blank",rel:"noopener nofollow noreferrer",children:"KYC"})}):t?Object(a.jsx)("span",{className:"is-flex tag is-success is-small mr-2",children:"KYC"}):null};t.a=Object(r.memo)(s)},955:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var c=n(84),r=Object(c.b)({key:"allPoolState",default:{}});function a(){return Object(c.c)(r)}}}]);