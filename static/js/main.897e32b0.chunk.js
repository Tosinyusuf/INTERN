(this.webpackJsonpenye=this.webpackJsonpenye||[]).push([[0],{27:function(e,t,c){},47:function(e,t,c){},48:function(e,t,c){},52:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c(0),a=c.n(s),r=c(17),l=c.n(r),i=(c(27),c(4)),j=c(7),o=c.n(j),d=c(18),b=c(5),u=c(19),h=c.n(u),O=(c(47),function(e){var t=e.user;return Object(n.jsx)("div",{children:Object(n.jsxs)("div",{className:"bodies",children:[Object(n.jsxs)("h1",{children:[t.FirstName," ",""," ",t.LastName]}),Object(n.jsxs)("p",{children:[Object(n.jsx)("b",{children:"Username:"})," ",Object(n.jsx)("span",{className:"value",children:t.UserName})]}),Object(n.jsxs)("p",{children:[Object(n.jsx)("b",{children:"Gender:"})," ",Object(n.jsx)("span",{className:"value",children:t.Gender})]}),Object(n.jsxs)("p",{children:[Object(n.jsx)("b",{children:"Email:"})," ",Object(n.jsx)("span",{className:"value",children:t.Email})]}),Object(n.jsxs)("p",{children:[Object(n.jsx)("b",{children:"Domain name:"})," ",Object(n.jsx)("span",{className:"value",children:t.DomainName})]}),Object(n.jsxs)("p",{children:[Object(n.jsx)("b",{children:"URL:"})," ",Object(n.jsx)("span",{className:"value",children:t.URL})]}),Object(n.jsxs)("p",{children:[Object(n.jsx)("b",{children:"Mac Address:"})," ",Object(n.jsx)("span",{className:"value",children:t.MacAddress})]}),Object(n.jsxs)("p",{children:[Object(n.jsx)("b",{children:"Last LogIn:"})," ",Object(n.jsx)("span",{className:"value",children:t.LastLogin})]}),Object(n.jsxs)("p",{children:[Object(n.jsx)("b",{children:"Latitude:"})," ",Object(n.jsx)("span",{className:"value",children:t.Latitude})]}),Object(n.jsxs)("p",{children:[Object(n.jsx)("b",{children:"Longitude:"})," ",Object(n.jsx)("span",{className:"value",children:t.Longitude})]}),Object(n.jsxs)("p",{children:[Object(n.jsx)("b",{children:"CreditCardType:"})," ",Object(n.jsx)("span",{className:"value",children:t.CreditCardType})]}),Object(n.jsxs)("p",{children:[Object(n.jsx)("b",{children:"CreditCardNumber:"})," ",Object(n.jsx)("span",{className:"value",children:t.CreditCardNumber})]}),Object(n.jsxs)("p",{children:[Object(n.jsx)("b",{children:"PaymentMethod:"})," ",Object(n.jsx)("span",{className:"value",children:t.PaymentMethod})]})]})})}),p=function(e){var t=e.posts,c=e.loading,s=e.handleBtns;return c?Object(n.jsx)("h2",{children:"loading..."}):Object(n.jsxs)(a.a.Fragment,{children:[Object(n.jsxs)("div",{className:"dropdown",children:[Object(n.jsx)("button",{className:"dropbtn",children:"Search by Gender"}),Object(n.jsxs)("div",{className:"dropdown-content",children:[Object(n.jsx)("button",{className:"drop",onClick:s,value:"Male",children:"Male"}),Object(n.jsx)("button",{className:"drop",onClick:s,value:"Female",children:"Female"})]})]}),Object(n.jsxs)("div",{className:"dropdown1",children:[Object(n.jsx)("button",{className:"dropbtn",children:"Search by Payment Method"}),Object(n.jsxs)("div",{className:"dropdown-content",children:[Object(n.jsx)("button",{className:"drop",onClick:s,value:"check",children:"check"}),Object(n.jsx)("button",{className:"drop",onClick:s,value:"money orde",children:"money orde"}),Object(n.jsx)("button",{className:"drop",onClick:s,value:"paypal",children:"paypal"}),Object(n.jsx)("button",{className:"drop",onClick:s,value:"cc",children:"cc"})]})]}),Object(n.jsx)("div",{children:t.map((function(e,t){return Object(n.jsx)(O,{user:e},t)}))})]})},x=function(e){for(var t=e.postPerPage,c=e.totalPosts,s=e.paginate,a=[],r=1;r<=Math.ceil(c/t);r++)a.push(r);return Object(n.jsx)("nav",{children:Object(n.jsx)("ul",{className:"pagination",children:a.map((function(e){return Object(n.jsx)("li",{className:"page-item",children:Object(n.jsx)("a",{onClick:function(){return s(e)},href:"!#",className:"page-link",children:e})},e)}))})})},m=c(54),v=function(){var e=Object(m.a)().y,t=Object(s.useState)(!1),c=Object(b.a)(t,2),a=c[0],r=c[1];Object(s.useEffect)((function(){r(e>400)}),[e]);return!!a&&Object(n.jsx)("div",{className:"scroll-to-top cursor-pointer text-center",onClick:function(){return window.scrollTo({top:0,behavior:"smooth"})},children:Object(n.jsx)("i",{class:" icon fas fa-angle-up"})})},f=c(21),g=(c(48),function(){var e=Object(s.useState)([]),t=Object(b.a)(e,2),c=t[0],a=t[1],r=Object(s.useState)([]),l=Object(b.a)(r,2),j=l[0],u=l[1],O=Object(s.useState)(!1),m=Object(b.a)(O,2),g=m[0],N=m[1],C=Object(s.useState)(1),y=Object(b.a)(C,2),k=y[0],w=y[1],L=Object(s.useState)(20),P=Object(b.a)(L,1)[0];Object(s.useEffect)((function(){(function(){var e=Object(d.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return N(!0),e.next=3,h.a.get("https://api.enye.tech/v1/challenge/records");case 3:t=e.sent,u(t.data.records.profiles),N(!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var S=Object(f.a)({items:c,onInputValueChange:function(e){var t=e.inputValue;a(j.filter((function(e){return e.FirstName.toLowerCase().startsWith(t.toLowerCase())})))}}),F=S.isOpen,M=S.getMenuProps,E=S.getInputProps,T=S.getComboboxProps,I=S.getItemProps,A=k*P,B=A-P,D=j.slice(B,A);return Object(n.jsx)("div",{children:Object(n.jsxs)("div",{className:"container",children:[Object(n.jsxs)("h1",{children:["SEDAQ ",Object(n.jsx)("span",{className:"small",children:"SALES"})]}),Object(n.jsx)("p",{className:"tag",children:"Transaction for the year"}),Object(n.jsx)("div",Object(i.a)(Object(i.a)({},T()),{},{children:Object(n.jsx)("input",Object(i.a)(Object(i.a)({},E()),{},{placeholder:"seach for a patient"}))})),Object(n.jsx)("ul",Object(i.a)(Object(i.a)({},M()),{},{children:F&&c.map((function(e,t){return Object(n.jsx)("span",Object(i.a)(Object(i.a)({},I({item:e,index:t})),{},{onClick:function(){return u(e.FirstName)},children:Object(n.jsx)("li",{children:e.FirstName})}),e)}))})),Object(n.jsx)("div",{className:"scroll-to-bottom ",onClick:function(){return window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})},children:Object(n.jsx)("i",{class:"icon fas fa-angle-down"})}),Object(n.jsx)(p,{posts:D,loading:g,handleBtns:function(e){"Male"===e.target.value||"Female"===e.target.value?u(j.filter((function(t){return t.Gender===e.target.value}))):"cc"===e.target.value||"check"===e.target.value||"money order"===e.target.value||"paypal"===e.target.value?u(j.filter((function(t){return t.PaymentMethod===e.target.value}))):u(j)}}),Object(n.jsx)(x,{postPerPage:P,totalPosts:j.length,paginate:function(e){return w(e)}}),Object(n.jsx)(v,{}),Object(n.jsx)("p",{className:"copyright",children:"Copyright\xa9 by yusuf oluwatosin"})]})})}),N=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,55)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,r=t.getTTFB;c(e),n(e),s(e),a(e),r(e)}))};l.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(g,{})}),document.getElementById("root")),N()}},[[52,1,2]]]);
//# sourceMappingURL=main.897e32b0.chunk.js.map