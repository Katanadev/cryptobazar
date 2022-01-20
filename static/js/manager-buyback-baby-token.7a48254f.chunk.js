(this["webpackJsonppink-sale"]=this["webpackJsonppink-sale"]||[]).push([[23],{1337:function(e,n,a){"use strict";a.r(n);var t=a(16),r=a(1),i=a(847),l=a(21),s=a(55),c=a(852),o=a(851),d=a(12),m=a.n(d),u=a(52),h=a.n(u),b=a(4),j=a(3),p=c.d().shape({enabled:c.c().required("Enabled cannot be blank").integer().min(0,"Please select valid option").max(1,"Please select valid option"),cap:c.c().required("Cap cannot be blank").min(0,"Cap must be greater or equal zero"),amount:c.c().required("Amount cannot be blank").min(0,"Amount must be greater or equal zero"),period:c.c().required("Period cannot be blank").min(0,"Period must be greater or equal zero")}),x=c.d().shape({numerator:c.c().required("Fee cannot be blank").test({test:function(e,n){return"standard"!==n.parent.tokenType||e&&e>0},message:"Invalid decimals"}),denominator:c.c().required("Cap cannot be blank").min(0,"Cap must be greater or equal zero"),length:c.c().required("Amount cannot be blank").min(0,"Amount must be greater or equal zero")}),O=c.d().shape({amount:c.c().required("Amount cannot be blank").min(0,"Amount must be greater or equal zero")}),g=c.d().shape({exempt:c.c().required("Amount cannot be blank").integer().min(0,"Please select valid option").max(1,"Please select valid option"),holder:c.f().required("Holder cannot be blank").test({test:function(e,n){return h.a.utils.isAddress(e)&&e!==b.a.ZERO_ADDRESS},message:"Address is invalid"})}),v=c.d().shape({exempt:c.c().required("Amount cannot be blank").integer().min(0,"Please select valid option").max(1,"Please select valid option"),holder:c.f().required("Holder cannot be blank").test({test:function(e,n){return h.a.utils.isAddress(e)&&e!==b.a.ZERO_ADDRESS},message:"Address is invalid"})}),N=c.d().shape({exempt:c.c().required("Amount cannot be blank").integer().min(0,"Please select valid option").max(1,"Please select valid option"),holder:c.f().required("Holder cannot be blank").test({test:function(e,n){return h.a.utils.isAddress(e)&&e!==b.a.ZERO_ADDRESS},message:"Address is invalid"})}),S=c.d().shape({add:c.c().required("Amount cannot be blank").integer().min(0,"Please select valid option").max(1,"Please select valid option"),acc:c.f().required("Holder cannot be blank").test({test:function(e,n){return h.a.utils.isAddress(e)&&e!==b.a.ZERO_ADDRESS},message:"Address is invalid"})}),f=c.d().shape({liquidityFee:c.c().required("LiquidityFee cannot be blank").min(0,"LiquidityFee must be greater or equal zero"),buybackFee:c.c().required("BuybackFee cannot be blank").min(0,"BuybackFee must be greater or equal zero"),reflectionFee:c.c().required("ReflectionFee cannot be blank").min(0,"ReflectionFee must be greater or equal zero"),marketingFee:c.c().required("MarketingFee cannot be blank").min(0,"MarketingFee must be greater or equal zero"),feeDenominator:c.c().required("FeeDenominator cannot be blank").min(0,"FeeDenominator must be greater or equal zero")}),B=c.d().shape({autoLiquidityReceiver:c.f().required("Holder cannot be blank").test({test:function(e,n){return h.a.utils.isAddress(e)&&e!==b.a.ZERO_ADDRESS},message:"Address is invalid"}),marketingFeeReceiver:c.f().required("Holder cannot be blank").test({test:function(e,n){return h.a.utils.isAddress(e)&&e!==b.a.ZERO_ADDRESS},message:"Address is invalid"})}),k=c.d().shape({enabled:c.c().required("enabled cannot be blank").integer().min(0,"Please select valid option").max(1,"Please select valid option"),amount:c.c().required("Holder cannot be blank").min(0,"Amount must be greater or equal zero")}),y=c.d().shape({denominator:c.c().required("Holder cannot be blank").min(0,"Denominator must be greater or equal zero"),target:c.c().required("Holder cannot be blank").min(0,"Target must be greater or equal zero")}),F=(c.d().shape({minPeriod:c.c().required("Holder cannot be blank").min(0,"MinPeriod must be greater or equal zero"),minDistribution:c.c().required("Holder cannot be blank").min(0,"MinDistribution must be greater or equal zero")}),c.d().shape({gas:c.c().required("Gas cannot be blank").min(0,"Gas must be greater or equal zero").max(75e4,"Gas maximum is 750000")})),C=function(){Object(s.h)(),Object(l.i)();var e=Object(r.useState)(!1),n=Object(t.a)(e,2),a=(n[0],n[1],Object(o.a)({initialValues:{enabled:1,amount:0,cap:0,period:0},validationSchema:p,validateOnMount:!1,onSubmit:function(e){console.log("onSubmitSetAutoBuybackSetting",e)}})),c=Object(o.a)({initialValues:{numerator:0,denominator:0,length:0},validationSchema:x,validateOnMount:!1,onSubmit:function(e){console.log("onSubmitSetBuybackMultiplierSetting",e)}}),d=Object(o.a)({initialValues:{amount:0},validationSchema:O,validateOnMount:!1,onSubmit:function(e){console.log("onSubmitsetTxLimit",e)}}),u=Object(o.a)({initialValues:{holder:"",exempt:1},validationSchema:g,validateOnMount:!1,onSubmit:function(e){console.log("onSetIsDividendExempt",e)}}),h=Object(o.a)({initialValues:{holder:"",exempt:1},validationSchema:v,validateOnMount:!1,onSubmit:function(e){console.log("onSetIsFeeExempt",e)}}),b=Object(o.a)({initialValues:{holder:"",exempt:1},validationSchema:N,validateOnMount:!1,onSubmit:function(e){console.log("onSetIsTxLimitExempt",e)}}),C=Object(o.a)({initialValues:{acc:"",add:1},validationSchema:S,validateOnMount:!1,onSubmit:function(e){console.log("onSetBuyBacker",e)}}),q=Object(o.a)({initialValues:{liquidityFee:0,buybackFee:0,reflectionFee:0,marketingFee:0,feeDenominator:0},validationSchema:f,validateOnMount:!1,onSubmit:function(e){console.log("onSetFees",e)}}),D=Object(o.a)({initialValues:{autoLiquidityReceiver:"",marketingFeeReceiver:""},validationSchema:B,validateOnMount:!1,onSubmit:function(e){console.log("onSetFeeReceivers",e)}}),A=Object(o.a)({initialValues:{amount:0,enabled:1},validationSchema:k,validateOnMount:!1,onSubmit:function(e){console.log("onSetSwapBackSettings",e)}}),R=Object(o.a)({initialValues:{target:0,denominator:0},validationSchema:y,validateOnMount:!1,onSubmit:function(e){console.log("onSetTargetLiquidity",e)}}),P=Object(o.a)({initialValues:{minDistribution:0,minPeriod:0},validationSchema:y,validateOnMount:!1,onSubmit:function(e){console.log("onSetDistributionCriteria",e)}}),M=Object(o.a)({initialValues:{gas:0},validationSchema:F,validateOnMount:!1,onSubmit:function(e){console.log("onSetDistributorSettings",e)}});return Object(j.jsxs)("div",{className:"py-6 container claim-reward-page",children:[Object(j.jsx)("form",{onSubmit:a.handleSubmit,children:Object(j.jsxs)("div",{className:"field",children:[Object(j.jsx)("label",{htmlFor:"tokenName",className:"label",children:"setAutoBuybackSettings"}),Object(j.jsxs)("div",{className:"columns",children:[Object(j.jsxs)("div",{className:"column",children:[Object(j.jsxs)("select",{name:"enabled",id:"enabled",onChange:a.handleChange,onBlur:a.handleBlur,value:a.values.enabled,className:"input",children:[Object(j.jsx)("option",{value:"1",children:"Active"}),Object(j.jsx)("option",{value:"0",children:"Disable"})]}),Boolean(a.touched.enabled&&a.errors.enabled)&&Object(j.jsx)("p",{className:"help is-danger",children:a.errors.enabled})]}),Object(j.jsxs)("div",{className:"column",children:[Object(j.jsx)("input",{type:"number",className:m()("input",a.touched.cap&&a.errors.cap?"is-danger":""),id:"cap",name:"cap",onChange:a.handleChange,onBlur:a.handleBlur,placeholder:"Cap"}),Boolean(a.touched.cap&&a.errors.cap)&&Object(j.jsx)("p",{className:"help is-danger",children:a.errors.cap})]}),Object(j.jsxs)("div",{className:"column",children:[Object(j.jsx)("input",{type:"number",className:m()("input",a.touched.amount&&a.errors.amount?"is-danger":""),id:"amount",name:"amount",onChange:a.handleChange,onBlur:a.handleBlur,placeholder:"Amount"}),Boolean(a.touched.amount&&a.errors.amount)&&Object(j.jsx)("p",{className:"help is-danger",children:a.errors.amount})]}),Object(j.jsxs)("div",{className:"column",children:[Object(j.jsx)("input",{type:"number",className:m()("input",a.touched.period&&a.errors.period?"is-danger":""),id:"period",name:"period",onChange:a.handleChange,onBlur:a.handleBlur,placeholder:"Period"}),Boolean(a.touched.period&&a.errors.period)&&Object(j.jsx)("p",{className:"help is-danger",children:a.errors.period})]}),Object(j.jsx)("div",{className:"column is-one-fifth has-text-centered",children:Object(j.jsx)(i.a,{primary:!0,type:"submit",children:"Submit"})})]})]})}),Object(j.jsx)("br",{}),Object(j.jsx)("form",{onSubmit:c.handleSubmit,children:Object(j.jsxs)("div",{className:"field",children:[Object(j.jsx)("label",{htmlFor:"tokenName",className:"label",children:"setBuybackMultiplierSettings"}),Object(j.jsxs)("div",{className:"columns",children:[Object(j.jsxs)("div",{className:"column",children:[Object(j.jsx)("input",{type:"number",className:m()("input",c.touched.numerator&&c.errors.numerator?"is-danger":""),id:"numerator",name:"numerator",onChange:c.handleChange,onBlur:c.handleBlur,placeholder:"Numerator"}),Boolean(c.touched.numerator&&c.errors.numerator)&&Object(j.jsx)("p",{className:"help is-danger",children:c.errors.numerator})]}),Object(j.jsxs)("div",{className:"column",children:[Object(j.jsx)("input",{type:"number",className:m()("input",c.touched.denominator&&c.errors.denominator?"is-danger":""),id:"denominator",name:"denominator",onChange:c.handleChange,onBlur:c.handleBlur,placeholder:"Denominator"}),Boolean(c.touched.denominator&&c.errors.denominator)&&Object(j.jsx)("p",{className:"help is-danger",children:c.errors.denominator})]}),Object(j.jsxs)("div",{className:"column",children:[Object(j.jsx)("input",{type:"number",className:m()("input",c.touched.length&&c.errors.length?"is-danger":""),id:"length",name:"length",onChange:c.handleChange,onBlur:c.handleBlur,placeholder:"Length"}),Boolean(c.touched.length&&c.errors.length)&&Object(j.jsx)("p",{className:"help is-danger",children:c.errors.length})]}),Object(j.jsx)("div",{className:"column is-one-fifth has-text-centered",children:Object(j.jsx)(i.a,{primary:!0,type:"submit",children:"Submit"})})]})]})}),Object(j.jsx)("br",{}),Object(j.jsx)("form",{onSubmit:d.handleSubmit,children:Object(j.jsxs)("div",{className:"field",children:[Object(j.jsx)("label",{htmlFor:"tokenName",className:"label",children:"setTxLimit"}),Object(j.jsxs)("div",{className:"columns",children:[Object(j.jsxs)("div",{className:"column",children:[Object(j.jsx)("input",{type:"number",className:m()("input",d.touched.amount&&d.errors.amount?"is-danger":""),id:"amount",name:"amount",onChange:d.handleChange,onBlur:d.handleBlur,placeholder:"Amount"}),Boolean(d.touched.amount&&d.errors.amount)&&Object(j.jsx)("p",{className:"help is-danger",children:d.errors.amount})]}),Object(j.jsx)("div",{className:"column is-one-fifth has-text-centered",children:Object(j.jsx)(i.a,{primary:!0,type:"submit",children:"Submit"})})]})]})}),Object(j.jsx)("br",{}),Object(j.jsx)("form",{onSubmit:u.handleSubmit,children:Object(j.jsxs)("div",{className:"field",children:[Object(j.jsx)("label",{htmlFor:"tokenName",className:"label",children:"setIsDividendExempt"}),Object(j.jsxs)("div",{className:"columns",children:[Object(j.jsxs)("div",{className:"column",children:[Object(j.jsx)("input",{type:"text",className:m()("input",u.touched.holder&&u.errors.holder?"is-danger":""),id:"holder",name:"holder",onChange:u.handleChange,onBlur:u.handleBlur,placeholder:"Holder"}),Boolean(u.touched.holder&&u.errors.holder)&&Object(j.jsx)("p",{className:"help is-danger",children:u.errors.holder})]}),Object(j.jsxs)("div",{className:"column",children:[Object(j.jsxs)("select",{name:"exempt",id:"exempt",onChange:u.handleChange,onBlur:u.handleBlur,value:u.values.exempt,className:"input",children:[Object(j.jsx)("option",{value:"1",children:"Active"}),Object(j.jsx)("option",{value:"0",children:"Disable"})]}),Boolean(u.touched.exempt&&u.errors.exempt)&&Object(j.jsx)("p",{className:"help is-danger",children:u.errors.exempt})]}),Object(j.jsx)("div",{className:"column is-one-fifth has-text-centered",children:Object(j.jsx)(i.a,{primary:!0,type:"submit",children:"Submit"})})]})]})}),Object(j.jsx)("br",{}),Object(j.jsx)("form",{onSubmit:h.handleSubmit,children:Object(j.jsxs)("div",{className:"field",children:[Object(j.jsx)("label",{htmlFor:"tokenName",className:"label",children:"setIsFeeExempt"}),Object(j.jsxs)("div",{className:"columns",children:[Object(j.jsxs)("div",{className:"column",children:[Object(j.jsx)("input",{type:"text",className:m()("input",h.touched.holder&&h.errors.holder?"is-danger":""),id:"holder",name:"holder",onChange:h.handleChange,onBlur:h.handleBlur,placeholder:"Holder"}),Boolean(h.touched.holder&&h.errors.holder)&&Object(j.jsx)("p",{className:"help is-danger",children:h.errors.holder})]}),Object(j.jsxs)("div",{className:"column",children:[Object(j.jsxs)("select",{name:"exempt",id:"exempt",onChange:h.handleChange,onBlur:h.handleBlur,value:h.values.exempt,className:"input",children:[Object(j.jsx)("option",{value:"1",children:"Active"}),Object(j.jsx)("option",{value:"0",children:"Disable"})]}),Boolean(h.touched.exempt&&h.errors.exempt)&&Object(j.jsx)("p",{className:"help is-danger",children:h.errors.exempt})]}),Object(j.jsx)("div",{className:"column is-one-fifth has-text-centered",children:Object(j.jsx)(i.a,{primary:!0,type:"submit",children:"Submit"})})]})]})}),Object(j.jsx)("br",{}),Object(j.jsx)("form",{onSubmit:b.handleSubmit,children:Object(j.jsxs)("div",{className:"field",children:[Object(j.jsx)("label",{htmlFor:"tokenName",className:"label",children:"setIsTxLimitExemptSchema"}),Object(j.jsxs)("div",{className:"columns",children:[Object(j.jsxs)("div",{className:"column",children:[Object(j.jsx)("input",{type:"text",className:m()("input",b.touched.holder&&b.errors.holder?"is-danger":""),id:"holder",name:"holder",onChange:b.handleChange,onBlur:b.handleBlur,placeholder:"Holder"}),Boolean(b.touched.holder&&b.errors.holder)&&Object(j.jsx)("p",{className:"help is-danger",children:b.errors.holder})]}),Object(j.jsxs)("div",{className:"column",children:[Object(j.jsxs)("select",{name:"exempt",id:"exempt",onChange:b.handleChange,onBlur:b.handleBlur,value:b.values.exempt,className:"input",children:[Object(j.jsx)("option",{value:"1",children:"Active"}),Object(j.jsx)("option",{value:"0",children:"Disable"})]}),Boolean(b.touched.exempt&&b.errors.exempt)&&Object(j.jsx)("p",{className:"help is-danger",children:b.errors.exempt})]}),Object(j.jsx)("div",{className:"column is-one-fifth has-text-centered",children:Object(j.jsx)(i.a,{primary:!0,type:"submit",children:"Submit"})})]})]})}),Object(j.jsx)("br",{}),Object(j.jsx)("form",{onSubmit:C.handleSubmit,children:Object(j.jsxs)("div",{className:"field",children:[Object(j.jsx)("label",{htmlFor:"tokenName",className:"label",children:"Set buy backer"}),Object(j.jsxs)("div",{className:"columns",children:[Object(j.jsxs)("div",{className:"column",children:[Object(j.jsx)("input",{type:"text",className:m()("input",C.touched.acc&&C.errors.acc?"is-danger":""),id:"acc",name:"acc",onChange:C.handleChange,onBlur:C.handleBlur,placeholder:"Address"}),Boolean(C.touched.acc&&C.errors.acc)&&Object(j.jsx)("p",{className:"help is-danger",children:C.errors.acc})]}),Object(j.jsxs)("div",{className:"column",children:[Object(j.jsxs)("select",{name:"add",id:"add",onChange:C.handleChange,onBlur:C.handleBlur,value:C.values.add,className:"input",children:[Object(j.jsx)("option",{value:"1",children:"Active"}),Object(j.jsx)("option",{value:"0",children:"Disable"})]}),Boolean(C.touched.add&&C.errors.add)&&Object(j.jsx)("p",{className:"help is-danger",children:C.errors.add})]}),Object(j.jsx)("div",{className:"column is-one-fifth has-text-centered",children:Object(j.jsx)(i.a,{primary:!0,type:"submit",children:"Submit"})})]})]})}),Object(j.jsx)("br",{}),Object(j.jsx)("form",{onSubmit:q.handleSubmit,children:Object(j.jsxs)("div",{className:"field",children:[Object(j.jsx)("label",{htmlFor:"tokenName",className:"label",children:"Set Fees"}),Object(j.jsxs)("div",{className:"columns",children:[Object(j.jsxs)("div",{className:"column",children:[Object(j.jsx)("input",{type:"number",className:m()("input",q.touched.liquidityFee&&q.errors.liquidityFee?"is-danger":""),id:"liquidityFee",name:"liquidityFee",onChange:q.handleChange,onBlur:q.handleBlur,placeholder:"LiquidityFee"}),Boolean(q.touched.liquidityFee&&q.errors.liquidityFee)&&Object(j.jsx)("p",{className:"help is-danger",children:q.errors.liquidityFee})]}),Object(j.jsxs)("div",{className:"column",children:[Object(j.jsx)("input",{type:"number",className:m()("input",q.touched.buybackFee&&q.errors.buybackFee?"is-danger":""),id:"buybackFee",name:"buybackFee",onChange:q.handleChange,onBlur:q.handleBlur,placeholder:"BuybackFee"}),Boolean(q.touched.buybackFee&&q.errors.buybackFee)&&Object(j.jsx)("p",{className:"help is-danger",children:q.errors.buybackFee})]}),Object(j.jsxs)("div",{className:"column",children:[Object(j.jsx)("input",{type:"number",className:m()("input",q.touched.reflectionFee&&q.errors.reflectionFee?"is-danger":""),id:"reflectionFee",name:"reflectionFee",onChange:q.handleChange,onBlur:q.handleBlur,placeholder:"ReflectionFee"}),Boolean(q.touched.reflectionFee&&q.errors.reflectionFee)&&Object(j.jsx)("p",{className:"help is-danger",children:q.errors.reflectionFee})]}),Object(j.jsxs)("div",{className:"column",children:[Object(j.jsx)("input",{type:"number",className:m()("input",q.touched.marketingFee&&q.errors.marketingFee?"is-danger":""),id:"marketingFee",name:"marketingFee",onChange:q.handleChange,onBlur:q.handleBlur,placeholder:"MarketingFee"}),Boolean(q.touched.marketingFee&&q.errors.marketingFee)&&Object(j.jsx)("p",{className:"help is-danger",children:q.errors.marketingFee})]}),Object(j.jsxs)("div",{className:"column",children:[Object(j.jsx)("input",{type:"number",className:m()("input",q.touched.feeDenominator&&q.errors.feeDenominator?"is-danger":""),id:"feeDenominator",name:"feeDenominator",onChange:q.handleChange,onBlur:q.handleBlur,placeholder:"FeeDenominator"}),Boolean(q.touched.feeDenominator&&q.errors.feeDenominator)&&Object(j.jsx)("p",{className:"help is-danger",children:q.errors.feeDenominator})]}),Object(j.jsx)("div",{className:"column is-one-fifth has-text-centered",children:Object(j.jsx)(i.a,{primary:!0,type:"submit",children:"Submit"})})]})]})}),Object(j.jsx)("br",{}),Object(j.jsx)("form",{onSubmit:D.handleSubmit,children:Object(j.jsxs)("div",{className:"field",children:[Object(j.jsx)("label",{htmlFor:"tokenName",className:"label",children:"Set Fee Receivers"}),Object(j.jsxs)("div",{className:"columns",children:[Object(j.jsxs)("div",{className:"column",children:[Object(j.jsx)("input",{type:"text",className:m()("input",D.touched.autoLiquidityReceiver&&D.errors.autoLiquidityReceiver?"is-danger":""),id:"autoLiquidityReceiver",name:"autoLiquidityReceiver",onChange:D.handleChange,onBlur:D.handleBlur,placeholder:"AutoLiquidityReceiver"}),Boolean(D.touched.marketingFeeReceiver&&D.errors.marketingFeeReceiver)&&Object(j.jsx)("p",{className:"help is-danger",children:D.errors.marketingFeeReceiver})]}),Object(j.jsxs)("div",{className:"column",children:[Object(j.jsx)("input",{type:"text",className:m()("input",D.touched.marketingFeeReceiver&&D.errors.marketingFeeReceiver?"is-danger":""),id:"marketingFeeReceiver",name:"marketingFeeReceiver",onChange:D.handleChange,onBlur:D.handleBlur,placeholder:"MarketingFeeReceiver"}),Boolean(D.touched.marketingFeeReceiver&&D.errors.marketingFeeReceiver)&&Object(j.jsx)("p",{className:"help is-danger",children:D.errors.marketingFeeReceiver})]}),Object(j.jsx)("div",{className:"column is-one-fifth has-text-centered",children:Object(j.jsx)(i.a,{primary:!0,type:"submit",children:"Submit"})})]})]})}),Object(j.jsx)("br",{}),Object(j.jsx)("form",{onSubmit:A.handleSubmit,children:Object(j.jsxs)("div",{className:"field",children:[Object(j.jsx)("label",{htmlFor:"tokenName",className:"label",children:"Set swap back setting"}),Object(j.jsxs)("div",{className:"columns",children:[Object(j.jsxs)("div",{className:"column",children:[Object(j.jsxs)("select",{name:"add",id:"add",onChange:A.handleChange,onBlur:A.handleBlur,value:A.values.enabled,className:"input",children:[Object(j.jsx)("option",{value:"1",children:"Active"}),Object(j.jsx)("option",{value:"0",children:"Disable"})]}),Boolean(A.touched.enabled&&A.errors.enabled)&&Object(j.jsx)("p",{className:"help is-danger",children:A.errors.enabled})]}),Object(j.jsxs)("div",{className:"column",children:[Object(j.jsx)("input",{type:"number",className:m()("input",A.touched.amount&&A.errors.amount?"is-danger":""),id:"amount",name:"amount",onChange:A.handleChange,onBlur:A.handleBlur,placeholder:"Amount"}),Boolean(A.touched.amount&&A.errors.amount)&&Object(j.jsx)("p",{className:"help is-danger",children:A.errors.amount})]}),Object(j.jsx)("div",{className:"column is-one-fifth has-text-centered",children:Object(j.jsx)(i.a,{primary:!0,type:"submit",children:"Submit"})})]})]})}),Object(j.jsx)("br",{}),Object(j.jsx)("form",{onSubmit:R.handleSubmit,children:Object(j.jsxs)("div",{className:"field",children:[Object(j.jsx)("label",{htmlFor:"tokenName",className:"label",children:"Set Target Liquidity"}),Object(j.jsxs)("div",{className:"columns",children:[Object(j.jsxs)("div",{className:"column",children:[Object(j.jsx)("input",{type:"number",className:m()("input",R.touched.target&&R.errors.target?"is-danger":""),id:"target",name:"target",onChange:R.handleChange,onBlur:R.handleBlur,placeholder:"Target"}),Boolean(R.touched.target&&R.errors.target)&&Object(j.jsx)("p",{className:"help is-danger",children:R.errors.target})]}),Object(j.jsxs)("div",{className:"column",children:[Object(j.jsx)("input",{type:"number",className:m()("input",R.touched.denominator&&R.errors.denominator?"is-danger":""),id:"denominator",name:"denominator",onChange:R.handleChange,onBlur:R.handleBlur,placeholder:"Denominator"}),Boolean(R.touched.denominator&&R.errors.denominator)&&Object(j.jsx)("p",{className:"help is-danger",children:R.errors.denominator})]}),Object(j.jsx)("div",{className:"column is-one-fifth has-text-centered",children:Object(j.jsx)(i.a,{primary:!0,type:"submit",children:"Submit"})})]})]})}),Object(j.jsx)("br",{}),Object(j.jsx)("form",{onSubmit:P.handleSubmit,children:Object(j.jsxs)("div",{className:"field",children:[Object(j.jsx)("label",{htmlFor:"tokenName",className:"label",children:"Set Distribution Criteria"}),Object(j.jsxs)("div",{className:"columns",children:[Object(j.jsxs)("div",{className:"column",children:[Object(j.jsx)("input",{type:"number",className:m()("input",P.touched.minPeriod&&P.errors.minPeriod?"is-danger":""),id:"minPeriod",name:"minPeriod",onChange:P.handleChange,onBlur:P.handleBlur,placeholder:"MinPeriod"}),Boolean(P.touched.minPeriod&&P.errors.minPeriod)&&Object(j.jsx)("p",{className:"help is-danger",children:P.errors.minPeriod})]}),Object(j.jsxs)("div",{className:"column",children:[Object(j.jsx)("input",{type:"number",className:m()("input",P.touched.minDistribution&&P.errors.minDistribution?"is-danger":""),id:"minDistribution",name:"minDistribution",onChange:P.handleChange,onBlur:P.handleBlur,placeholder:"MinDistribution"}),Boolean(P.touched.minDistribution&&P.errors.minDistribution)&&Object(j.jsx)("p",{className:"help is-danger",children:P.errors.minDistribution})]}),Object(j.jsx)("div",{className:"column is-one-fifth has-text-centered",children:Object(j.jsx)(i.a,{primary:!0,type:"submit",children:"Submit"})})]})]})}),Object(j.jsx)("br",{}),Object(j.jsx)("form",{onSubmit:M.handleSubmit,children:Object(j.jsxs)("div",{className:"field",children:[Object(j.jsx)("label",{htmlFor:"tokenName",className:"label",children:"Set Distribution Criteria"}),Object(j.jsxs)("div",{className:"columns",children:[Object(j.jsxs)("div",{className:"column",children:[Object(j.jsx)("input",{type:"number",className:m()("input",M.touched.gas&&M.errors.gas?"is-danger":""),id:"gas",name:"gas",onChange:M.handleChange,onBlur:M.handleBlur,placeholder:"Gas"}),Boolean(M.touched.gas&&M.errors.gas)&&Object(j.jsx)("p",{className:"help is-danger",children:M.errors.gas})]}),Object(j.jsx)("div",{className:"column is-one-fifth has-text-centered",children:Object(j.jsx)(i.a,{primary:!0,type:"submit",children:"Submit"})})]})]})})]})};n.default=function(){return Object(j.jsx)(C,{})}},847:function(e,n,a){"use strict";var t=a(92),r=a(3);n.a=function(e){var n=e.primary,a=void 0!==n&&n,i=e.loading,l=void 0!==i&&i,s=e.fullwidth,c=void 0!==s&&s,o=e.disabled,d=void 0!==o&&o,m=e.danger,u=void 0!==m&&m,h=e.type,b=void 0===h?"button":h,j=e.icon,p=e.children,x=e.onClick;return Object(r.jsx)(t.a,{type:a?"primary":"default",icon:j,htmlType:b,loading:l,block:c,disabled:d,danger:u,onClick:x,children:p})}}}]);