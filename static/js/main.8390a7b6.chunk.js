(this["webpackJsonpexample-simple-react-context-api-high-order-component"]=this["webpackJsonpexample-simple-react-context-api-high-order-component"]||[]).push([[0],{27:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(15),r=n(10),i=n(2),s=n(4),j=n(5),o=n(6),l=n(8),h=n(7),b=n(1),u=Object(c.createContext)(),O=u.Provider,p=function(e){return function(t){Object(l.a)(c,t);var n=Object(h.a)(c);function c(){var e;Object(j.a)(this,c);for(var t=arguments.length,a=new Array(t),r=0;r<t;r++)a[r]=arguments[r];return(e=n.call.apply(n,[this].concat(a))).state={name:"anonymous",email:"your@maill.com"},e.changeGlobalState=function(t){return console.log(t),"SET_NAME"===t.type?e.setState(Object(s.a)(Object(s.a)({},e.state),{},{name:t.valInput})):"SET_EMAIL"===t.type?e.setState(Object(s.a)(Object(s.a)({},e.state),{},{email:t.valInput})):void 0},e}return Object(o.a)(c,[{key:"render",value:function(){return Object(b.jsx)(O,{value:{state:this.state,dispatch:this.changeGlobalState},children:Object(b.jsx)(e,Object(s.a)({},this.props))})}}]),c}(c.Component)},d=u.Consumer,x=function(e){return function(t){Object(l.a)(c,t);var n=Object(h.a)(c);function c(){return Object(j.a)(this,c),n.apply(this,arguments)}return Object(o.a)(c,[{key:"render",value:function(){var t=this;return Object(b.jsx)(d,{children:function(n){return Object(b.jsx)(e,Object(s.a)(Object(s.a)({},t.props),n))}})}}]),c}(c.Component)},m=n(16),f=n(11),v=n(13),y=n.n(v),g=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(j.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={name:"",email:""},e.handleChange=function(t){e.setState(Object(f.a)({},t.target.id,t.target.value))},e.handleSetData=function(){var t=Object(m.a)(y.a.mark((function t(n){return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(e.state),console.log(n),t.next=4,n({type:"SET_NAME",valInput:e.state.name});case 4:return t.next=6,n({type:"SET_EMAIL",valInput:e.state.email});case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(o.a)(n,[{key:"render",value:function(){var e=this;return Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{children:"Home"}),Object(b.jsx)("p",{children:"This is home page "}),Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("label",{children:" set name "}),Object(b.jsx)("input",{type:"text",id:"name",onChange:function(t){return e.handleChange(t)}})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("label",{children:" set email "}),Object(b.jsx)("input",{type:"email",id:"email",onChange:function(t){return e.handleChange(t)}})]}),Object(b.jsxs)("button",{onClick:function(){return e.handleSetData(e.props.dispatch)},children:[" ","save"," "]})]})]})}}]),n}(c.Component),C=x(g),S=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){return Object(j.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{children:"Profile"}),Object(b.jsx)("p",{children:"This is profile page "}),Object(b.jsxs)("p",{children:[" Welcome ",this.props.state.name," "]}),Object(b.jsxs)("p",{children:[" ",this.props.state.email," "]})]})}}]),n}(c.Component),E=x(S);var k=p((function(){return Object(b.jsx)(r.a,{children:Object(b.jsxs)("div",{children:[Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{children:Object(b.jsx)(r.b,{to:"/",children:"Dashboard"})}),Object(b.jsx)("li",{children:Object(b.jsx)(r.b,{to:"/profile",children:"Profile"})}),Object(b.jsx)("li",{children:Object(b.jsx)(r.b,{to:"/home",children:"Home"})})]}),Object(b.jsx)("hr",{}),Object(b.jsxs)(i.c,{children:[Object(b.jsx)(i.a,{path:"/",element:Object(b.jsx)(C,{})}),Object(b.jsx)(i.a,{path:"/Profile",element:Object(b.jsx)(E,{})}),Object(b.jsx)(i.a,{path:"/Home",element:Object(b.jsx)(C,{})})]})]})})})),I=document.getElementById("root");Object(a.createRoot)(I).render(Object(b.jsx)(c.StrictMode,{children:Object(b.jsx)(k,{})}))}},[[27,1,2]]]);
//# sourceMappingURL=main.8390a7b6.chunk.js.map