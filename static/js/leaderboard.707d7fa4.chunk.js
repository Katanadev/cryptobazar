(this["webpackJsonppink-sale"]=this["webpackJsonppink-sale"]||[]).push([[20],{1338:function(e,t,c){"use strict";c.r(t);var a=c(26),r=c(101),s=c(16),n=c(1),i=c(913),j=c(904),l=c(826),d=c(907),b=c(842),o=c(1310),O=c(92),p=c(876),x=c.n(p),h=c(10),u=c(7),m=c.n(u),f=c(35),v=c(465),g=c(21),_=c(110);var w=c(49),y=c(18),N=c(293),k=c(216),D=c(419),L=c(27),z=c(312),M=c.n(z),S=c(3);t.default=function(){var e=Object(n.useState)(+new Date),t=Object(s.a)(e,2),c=t[0],p=t[1],u=function(e){var t=Object(g.c)();return Object(v.a)(Object(f.a)(m.a.mark((function c(){return m.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.abrupt("return",_.a.pool.getLeaderboard(t,e));case 1:case"end":return c.stop()}}),c)}))),[e,t])}(c),z=u.loading,A=u.value,I=Object(N.a)(),T=Object(g.c)(),J=Object(k.a)(),B=Object(D.a)(),C=Object(n.useMemo)((function(){return[].concat(Object(r.a)(B||[]),Object(r.a)(J||[]))}),[J,B]),E=(A&&A.docs&&Array.isArray(A.docs)?A.docs:[]).map((function(e){return Object(a.a)(Object(a.a)({},e),{},{pool_detail:Object(h.f)(e.pool_detail)})})).filter((function(e){return C.indexOf(e.pool_address)<0})),F=Object(h.v)(+new Date(2021,6,25),+new Date),H=function(e){return+new Date-7*Number(e)*24*60*60*1e3};return Object(n.useEffect)((function(){M.a.send({hitType:"pageview",page:"/#/leaderboard/",page_title:"Leaderboards",title:"Leaderboards"})}),[]),Object(S.jsx)("div",{className:"py-6 container",children:Object(S.jsxs)(i.a,{children:[Object(S.jsx)(j.a,{defaultActiveKey:"0",onChange:function(e){p(H(e))},children:x()(F).map((function(e){var t=new Date(H(e)),c=Object(h.r)(t),a=Object(s.a)(c,2),r=a[0],n=a[1];return Object(S.jsx)(j.a.TabPane,{tab:"Week ".concat(n,"/").concat(r)},e)}))}),Object(S.jsx)(l.a,{spinning:z,children:Object(S.jsx)(d.b,{itemLayout:"horizontal",dataSource:E,renderItem:function(e,t){return Object(S.jsxs)(d.b.Item,{children:[Object(S.jsx)("div",{className:"mr-4",children:Object(S.jsx)(b.a.Title,{level:4,children:t+1})}),Object(S.jsx)(d.b.Item.Meta,{avatar:Object(S.jsx)(o.a,{size:{xs:24,sm:32,md:36,lg:44,xl:44,xxl:44},src:e.pool_detail.logoUrl}),title:Object(S.jsxs)("div",{children:[Object(S.jsx)("span",{children:e.token_name}),Object(S.jsx)("span",{className:"ml-2 is-size-7",children:e.token_symbol})]}),description:Object(S.jsxs)("div",{className:"flex items-center",children:[Object(S.jsxs)("p",{children:[Object(S.jsx)("span",{children:"Hardcap: "}),Object(S.jsxs)("a",{children:[Object(h.i)(e.hard_cap,I.decimals||0)," ",I.symbol]})]}),Object(S.jsx)("p",{children:"\xa0\u2013\xa0"}),Object(S.jsxs)("p",{children:[Object(S.jsx)("span",{children:"Listing time: "}),Object(S.jsx)("a",{children:Object(h.k)(Object(h.p)(e.finish_time))})]})]})}),Object(S.jsx)("div",{className:"mr-2",children:Object(S.jsx)("div",{className:"flex-wrapper",children:Object(S.jsx)("div",{className:"single-chart",children:Object(S.jsxs)("svg",{viewBox:"0 0 36 36",className:"circular-chart green",children:[Object(S.jsx)("path",{className:"circle-bg",d:"M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"}),Object(S.jsx)("path",{className:"circle",strokeDasharray:"".concat(e.raised_percent,", 100"),d:"M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"}),Object(S.jsxs)("text",{x:"18",y:"20.35",className:"percentage",children:[e.raised_percent.toString().length>3?e.raised_percent.toFixed(1):e.raised_percent,"%"]})]})})})}),Object(S.jsx)(w.b,{to:Object(L.a)(Object(y.b)(y.a.LauchpadDetail).replace(":id",e.pool_address),T),children:Object(S.jsx)(O.a,{type:"primary",size:"middle",children:"View pool"})})]},String(t))}})})]})})}}}]);