(this["webpackJsonppink-sale"]=this["webpackJsonppink-sale"]||[]).push([[15],{1272:function(e,t,n){"use strict";n.r(t);var c=n(17),r=n(1),a=n(873),s=n(28),i=n(1011),l=n(1256),o=n(807),u=n(299),d=n.n(u),j=n(56),b=n.n(j),O=n(7),f=n.n(O),m=n(13),h=n(45),v=n(845),x=n.n(v),p=n(1264),g=n(25),N=n(155),y=n(946),k=n(4),C=n(281),S=n(12),w=n(849),A=n(282),E=new w.a;function I(e,t,n,c){return T.apply(this,arguments)}function T(){return(T=Object(h.a)(f.a.mark((function e(t,n,r,a){var i,l,o,u,d,j,O,m,h,v,x,p,g,N,y,w,A,E,I,T,P,q,R,L,F,W,M,U,V,D,_,B,H,K,z,Y,J,G,Q,X,Z,$,ee,te,ne,ce,re,ae,se,ie,le,oe,ue,de,je,be,Oe,fe,me,he,ve,xe,pe;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i={},e.prev=1,e.next=4,Object(C.a)(k.a.contract.pool.ABI,[{address:t,name:"version"}],{web3:r},n);case 4:if(l=e.sent,o=Object(c.a)(l,1),u=Object(c.a)(o[0],1),d=u[0],j=k.a.contract.pool.ABI,O=["endTime","liquidityPercent","liquidityUnlockTime","owner","rate","softCap","startTime","token","totalClaimed","totalRaised","poolDetails","liquidityLockDays","completedKyc","poolState"],!(d>=k.a.contract.FAIRLAUNCH_VERSION)){e.next=14;break}j=d===k.a.contract.FAIRLAUNCH_VERSION?k.a.contract.fairlaunchPool.ABI:k.a.contract.fairlaunchPoolV2.ABI,e.next=38;break;case 14:return m=["hardCap","liquidityListingRate","maxContribution","minContribution","refundType","totalVolumePurchased"].map((function(e){return{address:t,name:e}})),e.next=18,Object(C.a)(j,m,{web3:r},n);case 18:h=e.sent,v=Object(c.a)(h,6),x=Object(c.a)(v[0],1),p=x[0],g=Object(c.a)(v[1],1),N=g[0],y=Object(c.a)(v[2],1),w=y[0],A=Object(c.a)(v[3],1),E=A[0],I=Object(c.a)(v[4],1),T=I[0],P=Object(c.a)(v[5],1),q=P[0],i.hardCap=p.toString(),i.liquidityListingRate=N.toString(),i.maxContribution=w.toString(),i.minContribution=E.toString(),i.refundType=T.toString(),i.totalVolumePurchased=q.toString();case 38:if(!(d>=2&&d<k.a.contract.FAIRLAUNCH_VERSION)){e.next=47;break}return j=k.a.contract.poolV2.ABI,e.next=42,Object(C.a)(j,[{address:t,name:"useWhitelisting"}],{web3:r},n);case 42:R=e.sent,L=Object(c.a)(R,1),F=Object(c.a)(L[0],1),W=F[0],i.useWhitelisting=W;case 47:return M=O.map((function(e){return{address:t,name:e}})),e.next=50,Object(C.a)(j,M,{web3:r},n);case 50:return U=e.sent,V=Object(c.a)(U,14),D=Object(c.a)(V[0],1),_=D[0],B=Object(c.a)(V[1],1),H=B[0],K=Object(c.a)(V[2],1),z=K[0],Y=Object(c.a)(V[3],1),J=Y[0],G=Object(c.a)(V[4],1),Q=G[0],X=Object(c.a)(V[5],1),Z=X[0],$=Object(c.a)(V[6],1),ee=$[0],te=Object(c.a)(V[7],1),ne=te[0],ce=Object(c.a)(V[8],1),re=ce[0],ae=Object(c.a)(V[9],1),se=ae[0],ie=Object(c.a)(V[10],1),le=ie[0],oe=Object(c.a)(V[11],1),ue=oe[0],de=Object(c.a)(V[12],1),je=de[0],be=Object(c.a)(V[13],1),Oe=be[0],me=+new Date/1e3,he=Number(ee),ve=Number(_),me<he?fe="incoming":me>=he&&me<ve?fe="inprogress":me>=ve&&(fe="ended"),i.hardCap&&(xe=Number(b.a.utils.fromWei(se.toString())),pe=Number(b.a.utils.fromWei(i.hardCap.toString())),xe>=pe&&(fe="filled")),1===Number(Oe)&&(fe="ended"),2===Number(Oe)&&(fe="canceled"),e.abrupt("return",Object(s.a)({endTime:_.toString(),liquidityPercent:H.toString(),liquidityUnlockTime:z.toString(),owner:J,rate:Q.toString(),softCap:Z.toString(),startTime:ee.toString(),token:ne,totalClaimed:re.toString(),totalRaised:se.toString(),status:fe,poolDetails:Object(S.e)(le),liquidityLockDays:ue.toString(),completedKyc:je,poolState:Number(Oe),version:d},i));case 90:return e.prev=90,e.t0=e.catch(1),e.abrupt("return",void 0);case 93:case"end":return e.stop()}}),e,null,[[1,90]])})))).apply(this,arguments)}function P(e,t,n,c){return q.apply(this,arguments)}function q(){return(q=Object(h.a)(f.a.mark((function e(t,n,r,a){var s,i,l,o,u,d,j,b,O,m,h,v;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return",void 0);case 2:return e.prev=2,s={},i=["name","symbol","decimals","totalSupply"].map((function(e){return{address:t,name:e}})),e.next=7,Object(C.a)(A,i,{web3:r},a);case 7:return l=e.sent,o=Object(c.a)(l,4),u=Object(c.a)(o[0],1),d=u[0],j=Object(c.a)(o[1],1),b=j[0],O=Object(c.a)(o[2],1),m=O[0],h=Object(c.a)(o[3],1),v=h[0],s.name=d,s.symbol=b,s.decimals=m.toString(),s.totalSupply=v.toString(),E.set("token/".concat(t),s),e.abrupt("return",s);case 25:return e.prev=25,e.t0=e.catch(2),e.abrupt("return",void 0);case 28:case"end":return e.stop()}}),e,null,[[2,25]])})))).apply(this,arguments)}function R(e,t,n,c,r){return L.apply(this,arguments)}function L(){return(L=Object(h.a)(f.a.mark((function e(t,n,c,r,a){var s,i;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I(t,a,n,r);case 2:return s=e.sent,e.next=5,P(null===s||void 0===s?void 0:s.token,c,n,a);case 5:return i=e.sent,e.abrupt("return",{address:t,pool:s,token:i});case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var F=n(141),W=n(55);function M(){var e=Object(W.c)().library,t=Object(r.useState)(0),n=Object(c.a)(t,2),a=n[0],s=n[1],i=function(e){s(e)},l=function e(){s((function(e){return e+1})),setTimeout((function(){e()}),1e4)};return Object(r.useEffect)((function(){return e&&e.once("block",i),function(){e&&e.off("block",i)}}),[a,e]),Object(r.useEffect)((function(){e||l()}),[e]),a}var U=!1,V=!1,D=0,_=1,B=void 0,H=15;var K=n(50),z=n(1104),Y=n.n(z),J=n(19),G=n(306),Q=n(2),X=function(e){var t=e.url,n=Object(r.useState)(!1),a=Object(c.a)(n,2),s=a[0],i=a[1];return Object(Q.jsx)("figure",{className:"media-left",style:{border:"1px solid rgba(249, 81, 146,0.2)",borderRadius:"50%",overflow:"hidden"},children:Object(Q.jsx)("p",{className:"image is-48x48",children:Object(Q.jsx)("img",{style:{filter:s?"grayscale(1)":"grayscale(0)"},src:s?G.a:t,alt:"",onError:function(){return i(!0)},loading:"lazy"})})})},Z=Object(r.memo)(X),$=n(914),ee=n(283),te=function(e){var t=e.tokenName,n=e.tokenDecimals,c=e.tokenSymbol,r=e.rate,a=e.version,s=Object(ee.a)().symbol;return Object(Q.jsxs)("div",{className:"content-title",children:[Object(Q.jsx)("p",{className:"title",children:Object(Q.jsx)("span",{children:t||"-"})}),Number(a)>=k.a.contract.FAIRLAUNCH_VERSION?Object(Q.jsx)("p",{className:"subtitle",children:"Fair Launch"}):Object(Q.jsx)(Q.Fragment,{children:n?Object(Q.jsxs)("p",{className:"subtitle",children:["1 ",s," = ",Object(S.g)(r||"0",Number(n||"0"))," ",c]}):Object(Q.jsx)("p",{className:"subtitle",children:"-"})})]})},ne=Object(r.memo)(te),ce=function(e){var t=e.hardCap,n=e.softCap,c=e.version,r=Object(ee.a)().symbol;return Object(Q.jsxs)("div",{className:"soft-hard-cap",children:[Object(Q.jsxs)("p",{children:[Number(c)>=k.a.contract.FAIRLAUNCH_VERSION?"Soft":"Soft/Hard"," Cap:"]}),Number(c)>=k.a.contract.FAIRLAUNCH_VERSION?Object(Q.jsxs)("span",{children:[b.a.utils.fromWei(n||"0")," ",r]}):Object(Q.jsxs)("span",{children:[b.a.utils.fromWei(n||"0")," ",r," - ",b.a.utils.fromWei(t||"0")," ",r]})]})},re=Object(r.memo)(ce),ae=n(887),se=function(e){var t=e.status,n=e.softCap,c=e.hardCap,a=e.totalRaised,s=e.version,i=Object(ee.a)().symbol,l=Object(r.useMemo)((function(){if(Number(s)<k.a.contract.FAIRLAUNCH_VERSION){var e=c&&0!==Number(c)?Number(a)/Number(c)*100:0;return parseFloat(String(e)).toFixed(2)}var t=n&&0!==Number(n)?Number(a)/Number(n)*100:0;return parseFloat(String(t)).toFixed(2)}),[n,c,a,s]),o=Object(r.useMemo)((function(){if(!(Number(s)<k.a.contract.FAIRLAUNCH_VERSION))return 0===Number(l)?0:Number(l)<100?Number(l):100/Number(l)*100}),[l,s]);return Object(Q.jsxs)("div",{className:"content-progress",children:[Object(Q.jsxs)("p",{className:"title",children:["Progress (",l,"%)"]}),Number(s)>k.a.contract.FAIRLAUNCH_VERSION?Object(Q.jsx)(ae.a,{style:{marginTop:-4},percent:Number(l),strokeWidth:8,showInfo:!1,success:{percent:o,strokeColor:"#48c774"},status:"inprogress"===t?"active":"normal",strokeColor:"rgba(72, 199, 116, 0.5)"}):Object(Q.jsx)(ae.a,{style:{marginTop:-4},percent:Number(l),strokeWidth:8,showInfo:!1,status:"inprogress"===t?"active":"normal",strokeColor:"#48c774"}),Number(s)>=k.a.contract.FAIRLAUNCH_VERSION?Object(Q.jsx)("div",{className:"sub-title is-flex is-align-items-center",children:Object(Q.jsxs)("div",{className:"is-flex-grow-1",children:[a?b.a.utils.fromWei(a||"0"):0," ",i," Raised"]})}):Object(Q.jsxs)("div",{className:"sub-title is-flex is-align-items-center",children:[Object(Q.jsxs)("div",{className:"is-flex-grow-1",children:[a?b.a.utils.fromWei(a||"0"):0," ",i]}),Object(Q.jsxs)("div",{className:"is-flex-grow-1 has-text-right",children:[c?b.a.utils.fromWei(c||"0"):0," ",i]})]})]})},ie=Object(r.memo)(se),le=function(e){var t=e.liquidityPercent;return Object(Q.jsx)("div",{className:"liquidity-percent",children:Object(Q.jsxs)("div",{className:"is-flex is-align-items-center",children:[Object(Q.jsx)("p",{className:"is-flex-grow-1",children:"Liquidity %:"}),Object(Q.jsxs)("span",{className:"is-flex-grow-1 has-text-right time-text",children:[t?t||"0":0,"%"]})]})})},oe=Object(r.memo)(le),ue=n(861),de=function(e){var t=e.liquidityLockDays,n=Object(ue.a)(),c=Object(r.useMemo)((function(){return t?n?Number(t)/60:Number(t)/24/60/60:0}),[n,t]);return Object(Q.jsx)("div",{className:"lockup-time",children:Object(Q.jsxs)("div",{className:"is-flex is-align-items-center",children:[Object(Q.jsx)("p",{className:"is-flex-grow-1",children:"Lockup Time:"}),Object(Q.jsxs)("span",{className:"is-flex-grow-1 has-text-right time-text",children:[c," ",n?"minutes":"days"]})]})})},je=Object(r.memo)(de),be=n(854),Oe=function(e){var t=e.days,n=e.hours,c=e.minutes,r=e.seconds;return Object(Q.jsx)("div",{className:"countdown-text",children:Object(Q.jsxs)("strong",{children:[Object(Q.jsx)("span",{children:Object(be.b)(t)}),Object(Q.jsx)("span",{className:"dotdot",children:":"}),Object(Q.jsx)("span",{children:Object(be.b)(n)}),Object(Q.jsx)("span",{className:"dotdot",children:":"}),Object(Q.jsx)("span",{children:Object(be.b)(c)}),Object(Q.jsx)("span",{className:"dotdot",children:":"}),Object(Q.jsx)("span",{children:Object(be.b)(r)})]})})},fe=Object(r.memo)(Oe),me=function(e){var t=e.status,n=e.startTime,c=e.endTime;return Object(Q.jsxs)("div",{className:"countdown is-flex-grow-1 is-flex-direction-column",children:["incoming"===t&&Object(Q.jsxs)(Q.Fragment,{children:[Object(Q.jsx)("div",{children:"Sale Starts In:"}),Object(Q.jsx)(be.a,{date:1e3*Number(n||0),renderer:function(e){var t=e.days,n=e.hours,c=e.minutes,r=e.seconds;return Object(Q.jsx)(fe,{days:t,hours:n,minutes:c,seconds:r})}})]}),"inprogress"===t&&Object(Q.jsxs)(Q.Fragment,{children:[Object(Q.jsx)("div",{children:"Sale Ends In:"}),Object(Q.jsx)(be.a,{date:1e3*Number(c||0),renderer:function(e){var t=e.days,n=e.hours,c=e.minutes,r=e.seconds;return Object(Q.jsx)(fe,{days:t,hours:n,minutes:c,seconds:r})}})]}),"filled"===t&&Object(Q.jsxs)(Q.Fragment,{children:[Object(Q.jsx)("div",{children:"Presale:"}),Object(Q.jsx)("div",{children:"Filled"})]}),"ended"===t&&Object(Q.jsxs)(Q.Fragment,{children:[Object(Q.jsx)("div",{children:"Presale:"}),Object(Q.jsx)("div",{children:"Ended"})]}),"canceled"===t&&Object(Q.jsxs)(Q.Fragment,{children:[Object(Q.jsx)("div",{children:"Presale:"}),Object(Q.jsx)("div",{children:"Canceled"})]})]})},he=Object(r.memo)(me),ve=n(30),xe=function(e){return e.completed?Object(Q.jsx)("p",{className:"is-flex tag is-success is-small mr-2",children:Object(Q.jsx)("span",{children:"KYC"})}):null},pe=Object(r.memo)(xe),ge=n(152),Ne=n(853),ye=function(e){return e.isOwner?Object(Q.jsx)(ge.a,{title:"You own this pool",children:Object(Q.jsx)("p",{className:"is-flex tag is-warning is-small mr-2",children:Object(Q.jsx)(Ne.b,{})})}):null},ke=Object(r.memo)(ye),Ce=function(e){var t,n,c,r,a=e.address,s=e.pool,i=Object(W.c)().account,l=Object(g.c)();return Object(Q.jsx)("div",{className:"column is-one-third",children:Object(Q.jsx)(Y.a,{height:419,style:{height:"100%"},children:Object(Q.jsx)("div",{className:"custom-card card is-flex is-flex-direction-column",style:{height:"100%"},children:Object(Q.jsxs)("div",{className:"card-content is-flex-grow-1",children:[Object(Q.jsxs)("div",{className:"media is-flex is-align-items-center",children:[Object(Q.jsx)(Z,{url:null===s||void 0===s||null===(t=s.poolDetails)||void 0===t?void 0:t.logoUrl}),Object(Q.jsx)("div",{className:"media-content",children:Object(Q.jsx)("div",{className:"is-flex is-justify-content-flex-end",children:Object(Q.jsx)("div",{className:"is-flex has-text-right is-flex-direction-column",children:Object(Q.jsxs)("div",{className:"is-flex",children:[Object(Q.jsx)(pe,{completed:null===s||void 0===s?void 0:s.completedKyc}),Object(Q.jsx)(ke,{isOwner:(null===s||void 0===s?void 0:s.owner)===i}),Object(Q.jsx)($.a,{status:null===s||void 0===s?void 0:s.status,useWhitelisting:null===s||void 0===s?void 0:s.useWhitelisting})]})})})})]}),Object(Q.jsx)(ne,{tokenDecimals:null===s||void 0===s||null===(n=s.tokenInfo)||void 0===n?void 0:n.decimals,tokenName:null===s||void 0===s||null===(c=s.tokenInfo)||void 0===c?void 0:c.name,tokenSymbol:null===s||void 0===s||null===(r=s.tokenInfo)||void 0===r?void 0:r.symbol,rate:null===s||void 0===s?void 0:s.rate,version:null===s||void 0===s?void 0:s.version}),Object(Q.jsx)(re,{version:null===s||void 0===s?void 0:s.version,softCap:null===s||void 0===s?void 0:s.softCap,hardCap:null===s||void 0===s?void 0:s.hardCap}),Object(Q.jsx)(ie,{status:null===s||void 0===s?void 0:s.status,version:null===s||void 0===s?void 0:s.version,softCap:null===s||void 0===s?void 0:s.softCap,hardCap:null===s||void 0===s?void 0:s.hardCap,totalRaised:null===s||void 0===s?void 0:s.totalRaised}),Object(Q.jsx)(oe,{liquidityPercent:null===s||void 0===s?void 0:s.liquidityPercent}),Object(Q.jsx)(je,{liquidityLockDays:null===s||void 0===s?void 0:s.liquidityLockDays}),Object(Q.jsx)("div",{className:"custom-card-footer",children:Object(Q.jsxs)("div",{className:"is-flex is-align-items-center",children:[Object(Q.jsx)(he,{status:null===s||void 0===s?void 0:s.status,endTime:null===s||void 0===s?void 0:s.endTime,startTime:null===s||void 0===s?void 0:s.startTime}),Object(Q.jsx)("div",{className:"view-pool has-text-right",children:Object(Q.jsx)(K.b,{to:Object(ve.a)(Object(J.b)(J.a.LauchpadDetail).replace(":id",a),l),className:"view-button",children:"View Pool"})})]})})]})})})})},Se=Object(r.memo)(Ce),we=function(e){var t=e.children,n=e.debounceMs,c=void 0===n?300:n,a=e.offset,s=void 0===a?500:a,i=e.enable,l=void 0===i||i,o=e.onEndReached,u=Object(r.useCallback)((function(){l&&Object(S.q)(s)&&(null===o||void 0===o||o())}),[o,s,l]),j=d()(u,c);return Object(r.useEffect)((function(){return window.addEventListener("scroll",j),function(){window.removeEventListener("scroll",j)}}),[j]),Object(Q.jsx)(Q.Fragment,{children:t})},Ae=i.a.Option;function Ee(){var e=window.scrollY;window.scroll(0,e-1),window.scroll(0,e+1)}var Ie=function(){var e=Object(r.useRef)(null),t=Object(r.useState)({query:"",filter:"",status:""}),n=Object(c.a)(t,2),a=n[0],u=n[1],j=function(e,t){var n=Object(g.i)(),a=M(),i=Object(N.s)(n),l=Object(N.r)(n),o=Object(N.z)(n),u=Object(g.c)(),d=Object(r.useState)([]),j=Object(c.a)(d,2),b=j[0],O=j[1],v=Object(p.a)(u),C=Object(r.useState)(1),w=Object(c.a)(C,2),A=w[0],E=w[1],I=Object(r.useState)(!1),T=Object(c.a)(I,2),P=T[0],q=T[1],L=Object(r.useState)(!1),W=Object(c.a)(L,2),K=W[0],z=W[1],Y=Object(y.a)(),J=Object(c.a)(Y,2),G=J[0],Q=J[1];D=e&&"kyc"!==e?Object.values(G).reduce((function(e,t){return e.concat(t)}),[]).filter((function(t){return t.status===e})).length:0,B=t;var X=Object(r.useMemo)((function(){return Object.values(G).reduce((function(e,t){return e.concat(t)}),[])}),[G]),Z=Object(r.useMemo)((function(){return e&&"kyc"!==e?X.filter((function(t){return t.status===e})):X}),[X,e]),$=Object(r.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:H,c=arguments.length>2&&void 0!==arguments[2]&&arguments[2];_=e,Object(h.a)(f.a.mark((function r(){var a,i,d,j;return f.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(0!==b.length){r.next=2;break}return r.abrupt("return");case 2:if(a=x()(b,t),0!==(i=a[e-1]||[]).length&&!U){r.next=6;break}return r.abrupt("return");case 6:return q(!0),U=!0,E(_),v&&u!==v&&Q({}),r.prev=10,d={},j=i.map((function(e){return R(e,n,o,l,u)})),r.next=15,Promise.allSettled(j);case 15:r.sent.map((function(e){if("fulfilled"===e.status&&e.value){var t=e.value;t.pool&&(d[t.address]=Object(s.a)(Object(s.a)({},t.pool),{},{tokenInfo:t.token,address:t.address}))}return null})),Object.keys(d).length>0&&Q((function(t){return Object(s.a)(Object(s.a)({},t),{},Object(m.a)({},e,Object.values(d)))})),c&&D<H?V&&(U=!1,$(e+1,t,!0)):Object(S.q)(200)&&B?(U=!1,$(e+1,t)):q(!1),r.next=24;break;case 21:r.prev=21,r.t0=r.catch(10),q(!1);case 24:return r.prev=24,U=!1,r.finish(24);case 27:case"end":return r.stop()}}),r,null,[[10,21,24,27]])})))()}),[b,v,u,Q,n,o,l]),ee=Object(r.useCallback)((function(){Object(h.a)(f.a.mark((function e(){var t,n,c,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,q(!0),z(!1),e.next=5,F.a.pool.getBlacklistPools();case 5:return t=e.sent,n=t.filter((function(e){return e.chainId===u})).map((function(e){return e.address})),e.next=9,i.methods.getAllPools().call();case 9:c=e.sent,(r=n.length>0?c.filter((function(e){return n.indexOf(e)<0})):c).reverse(),O(r),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(0),z(!0);case 18:case"end":return e.stop()}}),e,null,[[0,15]])})))()}),[u,i]),te=Object(r.useCallback)((function(){$(A+1),E((function(e){return e+1}))}),[$,A]),ne=Object(r.useCallback)((function(e){e&&$(A,H,!0)}),[$,A]),ce=_*H,re=Object(r.useMemo)((function(){return b.length}),[b.length]);return Object(r.useEffect)((function(){V=!0,ee()}),[ee,a]),Object(r.useEffect)((function(){var e=window.scrollY,t=419*(window.innerWidth<=k.a.MOBILE_BREAKPOINT?9:3)-150,n=e<=0?0:Math.trunc(e/t);$(_||n+1)}),[$]),Object(r.useEffect)((function(){return V=!0,function(){V=!1,_=1}}),[]),{addresses:b,pools:Z,loading:P,error:K,numberOfPoolsLoading:ce,totalPools:re,page:A,getAllPools:ee,getPools:$,loadMore:te,filterPools:ne}}(a.status,a.query),O=j.loading,v=j.pools,C=j.numberOfPoolsLoading,w=j.totalPools,A=j.page,E=j.loadMore,I=j.filterPools,T=j.getPools,P=Object(r.useMemo)((function(){var e=v;if(a.status&&"kyc"!==a.status&&(e=e.filter((function(e){return e.status===a.status}))),"kyc"===a.status&&(e=e.filter((function(e){return!!e.completedKyc}))),a.filter&&("hardcap"===a.filter||"softcap"===a.filter?e=e.sort((function(e,t){var n=Number(b.a.utils.fromWei(e.hardCap||"0"));return Number(b.a.utils.fromWei(t.hardCap||"0"))-n})):"liquidity"===a.filter?e=e.sort((function(e,t){var n=Number(b.a.utils.fromWei(e.liquidityPercent||"0"));return Number(b.a.utils.fromWei(t.liquidityPercent||"0"))-n})):"trustScores"===a.filter?e=e.sort((function(e,t){return(t.trustedScores||0)-(e.trustedScores||0)})):"startTime"===a.filter?e=e.sort((function(e,t){return Number(e.startTime||"0")-Number(t.startTime||"0")})):"endTime"===a.filter&&(e=e.sort((function(e,t){return Number(e.endTime||"0")-Number(t.endTime||"0")})))),a.query){var t=new RegExp(a.query.replaceAll("(","").replaceAll(")","").replaceAll("/","").replaceAll("\\",""),"gi");e=e.filter((function(e){var n,c,r="".concat(e.address,"|").concat(e.token,"|").concat(null===(n=e.tokenInfo)||void 0===n?void 0:n.name,"|").concat(null===(c=e.tokenInfo)||void 0===c?void 0:c.symbol).replaceAll("(","").replaceAll(")",""),a=t.test(r);return t.lastIndex=0,a}))}return e}),[v,a.filter,a.query,a.status]),q=Object(r.useCallback)((function(e){O||(e&&e.preventDefault&&e.preventDefault(),u((function(e){return Object(s.a)(Object(s.a)({},e),{},{filter:""})})),E())}),[O,E]),L=d()((function(e){u((function(t){return Object(s.a)(Object(s.a)({},t),{},{query:e.target.value||""})})),T(A),Ee()}),250);return Object(Q.jsxs)(Q.Fragment,{children:[Object(Q.jsxs)("div",{className:"pool-filter",children:[Object(Q.jsxs)("div",{className:"search",children:[Object(Q.jsx)("div",{className:"filter-title invisible",children:"s"}),Object(Q.jsx)(l.a,{placeholder:"Enter token name or token symbol",style:{borderRadius:16},onChange:L,allowClear:!0})]}),Object(Q.jsxs)("div",{className:"filter",children:[Object(Q.jsxs)("div",{className:"status",children:[Object(Q.jsx)("div",{className:"filter-title",children:"Filter By"}),Object(Q.jsxs)(i.a,{value:a.status,onChange:function(e){u((function(t){return Object(s.a)(Object(s.a)({},t),{},{status:e||""})})),I(e||""),Ee()},children:[Object(Q.jsx)(Ae,{value:"",children:"All Status"}),Object(Q.jsx)(Ae,{value:"kyc",children:"KYC"}),Object(Q.jsx)(Ae,{value:"incoming",children:"Upcoming"}),Object(Q.jsx)(Ae,{value:"inprogress",children:"Inprogress"}),Object(Q.jsx)(Ae,{value:"filled",children:"Filled"}),Object(Q.jsx)(Ae,{value:"ended",children:"Ended"}),Object(Q.jsx)(Ae,{value:"canceled",children:"Canceled"})]})]}),Object(Q.jsxs)("div",{children:[Object(Q.jsx)("div",{className:"filter-title",children:"Sort By"}),Object(Q.jsxs)(i.a,{value:a.filter,onChange:function(e){u((function(t){return Object(s.a)(Object(s.a)({},t),{},{filter:e||""})}))},children:[Object(Q.jsx)(Ae,{value:"",children:"No Filter"}),Object(Q.jsx)(Ae,{value:"hardcap",children:"Hard Cap"}),Object(Q.jsx)(Ae,{value:"softcap",children:"Soft Cap"}),Object(Q.jsx)(Ae,{value:"liquidity",children:"LP percent"}),Object(Q.jsx)(Ae,{value:"startTime",children:"Start time"}),Object(Q.jsx)(Ae,{value:"endTime",children:"End time"})]})]})]})]}),Object(Q.jsx)(we,{onEndReached:q,enable:!a.query,children:Object(Q.jsxs)(Q.Fragment,{children:[Object(Q.jsx)("div",{ref:e,className:"columns is-multiline",children:P.map((function(e){return Object(Q.jsx)(Se,{address:e.address||"",pool:e},e.address)}))}),Object(Q.jsx)("div",{className:"has-text-centered mt-2",children:O?Object(Q.jsxs)("div",{children:[Object(Q.jsx)(o.a,{spinning:!0}),C&&w&&(a.status||a.query)?Object(Q.jsxs)("span",{children:[" ","Loading ",C,"/",w," pools"]}):null]}):Object(Q.jsx)("a",{href:"#",onClick:q,children:"View more pools"})})]})})]})},Te=n(1254),Pe=n(452),qe=Object(Pe.a)({});function Re(){return qe()}var Le=n(99),Fe=null,We=null;var Me=n(54),Ue=n(133),Ve=i.a.Option,De=function(){var e=Object(Me.f)(),t=Object(Me.g)(),n=Object(Ue.a)(),a=Object(r.useState)(t.page&&!isNaN(Number(t.page))?Number(t.page):1),u=Object(c.a)(a,2),j=u[0],O=u[1],m=Object(r.useState)({query:"",filter:"",status:""}),v=Object(c.a)(m,2),p=v[0],y=v[1],k=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:18,n=Object(g.i)(),a=Object(N.s)(n),i=Object(N.r)(n),l=Object(N.z)(n),o=Object(g.c)(),u=Object(W.c)().account,d=Object(r.useState)([]),j=Object(c.a)(d,2),b=j[0],O=j[1],m=Object(r.useState)(!0),v=Object(c.a)(m,2),p=v[0],y=v[1],k=Re(),C=Object(c.a)(k,2)[1],S=Object(r.useMemo)((function(){return x()(b,t)[e-1]||[]}),[b,e,t]),w=Object(r.useCallback)((function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];clearTimeout(We),Object(h.a)(f.a.mark((function c(){var r,a,u,d;return f.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:if(0!==e.length){c.next=2;break}return c.abrupt("return");case 2:for(t||y(!0),c.prev=3,r={},a=[],u=0,d=e.length;u<d;u++)a.push(R(e[u],n,l,i,o));return c.next=9,Promise.all(a);case 9:c.sent.map((function(e){return r[e.address]=Object(s.a)(Object(s.a)({},e.pool),{},{tokenInfo:e.token,address:e.address}),null})),C(r),c.next=16;break;case 14:c.prev=14,c.t0=c.catch(3);case 16:return c.prev=16,y(!1),We=setTimeout((function(){w(e,!0)}),5e3),c.finish(16);case 20:case"end":return c.stop()}}),c,null,[[3,14,16,20]])})))()}),[a,o,n,l]);return Object(r.useEffect)((function(){if(a)return clearTimeout(Fe),Fe=setTimeout((function(){Object(h.a)(f.a.mark((function e(){var t,n,c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(y(!0),e.prev=1,u){e.next=4;break}return e.abrupt("return");case 4:return e.next=6,a.methods.getPoolsOf(u).call();case 6:return t=e.sent,e.next=9,a.methods.getAllContributedPools(u).call();case 9:n=e.sent,(c=[].concat(Object(Le.a)(t),Object(Le.a)(n))).reverse(),O(c),e.next=17;break;case 15:e.prev=15,e.t0=e.catch(1);case 17:return e.prev=17,y(!1),e.finish(17);case 20:case"end":return e.stop()}}),e,null,[[1,15,17,20]])})))()}),250),function(){clearTimeout(Fe)}}),[a,o,u,e]),Object(r.useEffect)((function(){w(S)}),[S]),{pools:b,loading:p}}(j,18),C=k.loading,S=k.pools,w=Re(),A=Object(c.a)(w,1)[0],E=Object(r.useMemo)((function(){var e=Object.values(A);if(p.status&&"kyc"!==p.status&&(e=e.filter((function(e){return e.status===p.status}))),"kyc"===p.status&&(e=e.filter((function(e){return!!e.completedKyc}))),p.filter&&("hardcap"===p.filter||"softcap"===p.filter?e=e.sort((function(e,t){var n=Number(b.a.utils.fromWei(e.hardCap||"0"));return Number(b.a.utils.fromWei(t.hardCap||"0"))-n})):"liquidity"===p.filter&&(e=e.sort((function(e,t){var n=Number(b.a.utils.fromWei(e.liquidityPercent||"0"));return Number(b.a.utils.fromWei(t.liquidityPercent||"0"))-n})))),p.query){var t=new RegExp(p.query.replaceAll("(","").replaceAll(")",""),"gi");e=e.filter((function(e){var n,c,r="".concat(e.address,"|").concat(e.token,"|").concat(null===(n=e.tokenInfo)||void 0===n?void 0:n.name,"|").concat(null===(c=e.tokenInfo)||void 0===c?void 0:c.symbol).replaceAll("(","").replaceAll(")",""),a=t.test(r);return t.lastIndex=0,a}))}return e}),[A,p]),I=Object(r.useCallback)((function(t){O(t),e.push(Object(ve.b)(Object(J.b)(J.a.LauchpadList).replace(":tab?","my"),n)),window.scrollTo({top:100,behavior:"smooth"})}),[n,e]),T=d()((function(e){y((function(t){return Object(s.a)(Object(s.a)({},t),{},{query:e.target.value||""})}))}),150);return Object(r.useEffect)((function(){O(t.page&&!isNaN(Number(t.page))?Number(t.page):1)}),[t.page]),Object(Q.jsxs)(o.a,{spinning:C,children:[Object(Q.jsxs)("div",{className:"pool-filter",children:[Object(Q.jsxs)("div",{className:"search",children:[Object(Q.jsx)("div",{className:"filter-title invisible",children:"s"}),Object(Q.jsx)(l.a,{placeholder:"Enter token name or token symbol",style:{borderRadius:16},onChange:T,allowClear:!0})]}),Object(Q.jsxs)("div",{className:"filter",children:[Object(Q.jsxs)("div",{className:"status",children:[Object(Q.jsx)("div",{className:"filter-title",children:"Filter By"}),Object(Q.jsxs)(i.a,{value:p.status,onChange:function(e){y((function(t){return Object(s.a)(Object(s.a)({},t),{},{status:e||""})}))},children:[Object(Q.jsx)(Ve,{value:"",children:"All Status"}),Object(Q.jsx)(Ve,{value:"kyc",children:"KYC"}),Object(Q.jsx)(Ve,{value:"incoming",children:"Upcoming"}),Object(Q.jsx)(Ve,{value:"inprogress",children:"Inprogress"}),Object(Q.jsx)(Ve,{value:"filled",children:"Filled"}),Object(Q.jsx)(Ve,{value:"ended",children:"Ended"}),Object(Q.jsx)(Ve,{value:"canceled",children:"Canceled"})]})]}),Object(Q.jsxs)("div",{children:[Object(Q.jsx)("div",{className:"filter-title",children:"Sort By"}),Object(Q.jsxs)(i.a,{value:p.filter,onChange:function(e){y((function(t){return Object(s.a)(Object(s.a)({},t),{},{filter:e||""})}))},children:[Object(Q.jsx)(Ve,{value:"",children:"No Filter"}),Object(Q.jsx)(Ve,{value:"hardcap",children:"Hard Cap"}),Object(Q.jsx)(Ve,{value:"softcap",children:"Soft Cap"}),Object(Q.jsx)(Ve,{value:"liquidity",children:"LP percent"})]})]})]})]}),Object(Q.jsx)("div",{className:"columns is-multiline",children:E.map((function(e){return Object(Q.jsx)(Se,{address:e.address||"",pool:e},e.address)}))}),0===E.length&&Object(Q.jsx)("div",{className:"has-text-centered p-4",children:"No data"}),S.length>0&&Object(Q.jsx)("div",{className:"has-text-centered",children:Object(Q.jsx)(Te.a,{defaultCurrent:1,current:j,total:S.length,pageSize:18,showSizeChanger:!1,onChange:I})})]})},_e=a.a.TabPane;t.default=function(){var e=Object(Me.g)(),t=Object(Me.f)(),n=Object(Ue.a)(),s=Object(r.useState)("my"===e.tab?"my":"all"),i=Object(c.a)(s,2),l=i[0],o=i[1],u=Object(r.useCallback)((function(e){o(e),t.push(Object(ve.b)(Object(J.b)(J.a.LauchpadList).replace(":tab?",e),n))}),[t,n]);return Object(r.useEffect)((function(){o("my"===e.tab?"my":"all")}),[e.tab]),Object(Q.jsxs)("div",{className:"py-6 container launchpad-page",children:[Object(Q.jsx)("div",{className:"launchpad-title",children:Object(Q.jsx)("h1",{children:"Current Presale"})}),Object(Q.jsxs)(a.a,{defaultActiveKey:"all",activeKey:l,centered:!0,size:"large",onChange:u,children:[Object(Q.jsx)(_e,{tab:"All launchpads",children:Object(Q.jsx)(Ie,{})},"all"),Object(Q.jsx)(_e,{tab:"My Contributions",children:Object(Q.jsx)(De,{})},"my")]})]})}},849:function(e,t,n){"use strict";var c=n(9),r=n(14),a=function(){function e(){Object(c.a)(this,e),this.NAMESPACE="cryptobazar"}return Object(r.a)(e,[{key:"get",value:function(e){try{var t=localStorage.getItem("".concat(this.NAMESPACE,"@").concat(e));return t?JSON.parse(t):t}catch(n){console.log("Unable to read this object: ",e)}}},{key:"set",value:function(e,t){try{return localStorage.setItem("".concat(this.NAMESPACE,"@").concat(e),JSON.stringify(t))}catch(n){console.log("Unable to store this object: ",e)}}},{key:"delete",value:function(e){return localStorage.removeItem("".concat(this.NAMESPACE,"@").concat(e))}},{key:"flash",value:function(e){var t=this.get(e);return this.delete(e),t}}]),e}();t.a=a},861:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var c=n(1),r=n(3),a=n(25);function s(){var e=Object(a.c)();return Object(c.useMemo)((function(){return[r.a.BSC_TESTNET,r.a.MATIC_TESTNET,r.a.KCC_TESTNET].includes(e)}),[e])}},914:function(e,t,n){"use strict";var c=n(1),r=n(152),a=n(77),s=n(915),i=n(2),l=function(e){var t=e.status,n=e.useWhitelisting,l=Object(c.useMemo)((function(){if(t)return{ended:{txt:" Sale Ended",cx:"ended"},inprogress:{txt:" Sale Live",cx:"inprogress"},incoming:{txt:" Upcoming",cx:"incoming"},filled:{txt:" Filled",cx:"filled"},canceled:{txt:" Canceled",cx:"canceled"}}[t]}),[t]);return l?Object(i.jsxs)("span",{className:"is-flex status-dot ".concat(l.cx),children:["undefined"!==typeof n&&n?Object(i.jsx)(r.a,{title:"Whitelist only",children:Object(i.jsx)(a.i,{size:16})}):Object(i.jsx)(s.a,{}),Object(i.jsx)("span",{children:l.txt})]}):null};t.a=Object(c.memo)(l)},946:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var c=n(84),r=Object(c.b)({key:"allPoolState",default:{}});function a(){return Object(c.c)(r)}}}]);