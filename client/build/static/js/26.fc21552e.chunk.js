(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[26],{649:function(e,t,c){"use strict";var n=c(663),s=c.n(n).a.create({baseURL:"http://support.jetterhover.com/api",responseType:"json"});t.a=s},741:function(e,t,c){"use strict";c.r(t);var n=c(651),s=c.n(n),r=c(652),a=c(644),l=c(1),j=c(171),o=c(642),i=c(22),b=function(e){switch(e.status){case"open":return Object(i.jsx)("button",{className:"btn btn-danger",children:"\u041e\u0442\u043a\u0440\u044b\u0442\u043e"});case"process":return Object(i.jsx)("button",{className:"btn btn-warning",children:"\u0412 \u0440\u0430\u0431\u043e\u0442\u0435"});case"closed":return Object(i.jsx)("button",{className:"btn btn-success",children:"\u0417\u0430\u043a\u0440\u044b\u0442\u043e"});default:console.log("k")}},d=function(e){var t=e.appeals;return Object(i.jsx)(o.ub,{children:Object(i.jsx)(o.u,{children:Object(i.jsxs)(o.j,{children:[Object(i.jsx)(o.n,{children:"\u041f\u043e\u0441\u043b\u0435\u0434\u043d\u0438\u0435 \u043e\u0431\u0440\u0430\u0449\u0435\u043d\u0438\u044f"}),Object(i.jsx)(o.k,{children:Object(i.jsxs)("table",{className:"table",children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{scope:"col",children:"ID"}),Object(i.jsx)("th",{scope:"col",children:"\u0418\u043c\u044f \u043a\u043b\u0438\u0435\u043d\u0442\u0430"}),t.length&&t[0].orderId?Object(i.jsx)("th",{scope:"col",children:"\u041d\u043e\u043c\u0435\u0440 \u0437\u0430\u043a\u0430\u0437\u0430"}):null,Object(i.jsx)("th",{scope:"col",children:"\u0414\u0430\u0442\u0430 \u043e\u0431\u0440\u0430\u0449\u0435\u043d\u0438\u044f"}),Object(i.jsx)("th",{scope:"col",children:"\u0421\u0442\u0430\u0442\u0443\u0441"}),Object(i.jsx)("th",{scope:"col"})]})}),Object(i.jsx)("tbody",{children:t.length?t.map((function(e){return Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{scope:"row",children:e.reqidenty}),Object(i.jsx)("td",{children:e.from.name}),e.orderId?Object(i.jsx)("th",{scope:"row",children:e.orderId}):null,Object(i.jsx)("td",{children:e.date.split("T")[0]}),Object(i.jsx)("td",{children:Object(i.jsx)(b,{status:e.status})}),Object(i.jsx)("td",{children:Object(i.jsx)(j.b,{to:"/appeal/".concat(e._id),children:Object(i.jsx)("button",{className:"btn btn-primary",children:"\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u043a \u0437\u0430\u043f\u0440\u043e\u0441\u0443"})})})]},e._id)})):null})]})})]})})})},h=c(21),u=c(649);t.default=function(){var e=Object(h.h)(),t=Object(l.useState)([]),c=Object(a.a)(t,2),n=c[0],j=c[1],o=e.pathname.split("/").lastItem;return Object(l.useEffect)((function(){var e=function(){var e=Object(r.a)(s.a.mark((function e(){var t,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t="appeal"==o?"":o,e.next=4,u.a.get("appeal/".concat(t));case 4:c=e.sent,j(c.data),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),Object(i.jsx)(d,{appeals:n})}}}]);
//# sourceMappingURL=26.fc21552e.chunk.js.map