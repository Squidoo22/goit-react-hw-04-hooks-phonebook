(this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]=this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]||[]).push([[0],{10:function(e,t,n){e.exports={input:"Filter_input__2oGNv",label:"Filter_label__veXJx"}},12:function(e,t,n){e.exports={list:"ContactList_list__1c079"}},13:function(e,t,n){e.exports={container:"Section_container__2OLb3",title:"Section_title__3xNIf"}},19:function(e,t,n){},2:function(e,t,n){e.exports={label:"ContactForm_label__C21A6",input:"ContactForm_input__vYHAO",btn:"ContactForm_btn__1qIbP"}},29:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(11),i=n.n(r),o=(n(19),n(14)),s=n(3),l=n(5),u=n.n(l),b=n(2),j=n.n(b),m=n(0);function d(e){var t=e.onSubmit,n=Object(c.useState)(""),a=Object(s.a)(n,2),r=a[0],i=a[1],o=Object(c.useState)(""),l=Object(s.a)(o,2),b=l[0],d=l[1],h=u.a.generate(),O=u.a.generate(),f=function(e){var t=e.currentTarget,n=t.name,c=t.value;switch(n){case"name":i(c);break;case"number":d(c);break;default:return}},x=function(){i(""),d("")};return Object(m.jsxs)("form",{className:j.a.form,onSubmit:function(e){e.preventDefault(),t({name:r,number:b}),x()},children:[Object(m.jsxs)("div",{className:j.a.block,children:[Object(m.jsx)("div",{className:j.a.label,children:Object(m.jsx)("label",{htmlFor:h,children:"Name"})}),Object(m.jsx)("input",{type:"text",name:"name",value:r,onChange:f,id:h,className:j.a.input})]}),Object(m.jsxs)("div",{className:j.a.block,children:[Object(m.jsx)("div",{className:j.a.label,children:Object(m.jsx)("label",{htmlFor:O,children:"Number"})}),Object(m.jsx)("input",{type:"tel",name:"number",value:b,onChange:f,placeholder:"+380 (00) 000-00-00",id:h,className:j.a.input})]}),Object(m.jsx)("div",{className:j.a.btnBlock,children:Object(m.jsx)("div",{children:Object(m.jsx)("button",{className:j.a.btn,type:"submit",children:"Add contact"})})})]})}var h=n(6),O=n.n(h),f=function(e){var t=e.name,n=e.number,c=e.id,a=e.onDeleteContact;return Object(m.jsxs)("li",{className:O.a.listItem,children:[Object(m.jsxs)("p",{className:O.a.itemDesc,children:[t,":"]}),Object(m.jsx)("p",{className:O.a.itemDesc,children:n}),Object(m.jsx)("button",{className:O.a.btn,type:"button",onClick:function(){return a(c)},children:"Delete"})]})},x=n(12),p=n.n(x),v=function(e){var t=e.contacts,n=e.onDeleteContact;return Object(m.jsx)("ul",{className:p.a.list,children:t.map((function(e){return Object(m.jsx)(f,{id:e.id,name:e.name,number:e.number,onDeleteContact:n},e.id)}))})},_=n(10),N=n.n(_),C=function(e){var t=e.value,n=e.onChange;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("div",{children:Object(m.jsx)("label",{className:N.a.label,htmlFor:"filter",children:"Find contacts by name"})}),Object(m.jsx)("input",{type:"text",id:"filter",name:"filter",value:t,onChange:n,className:N.a.input})]})},g=n(13),S=n.n(g),k=function(e){var t=e.children;return Object(m.jsx)("section",{className:S.a.container,children:t})};function w(){var e=function(e,t){var n=Object(c.useState)((function(){var n;return null!==(n=JSON.parse(window.localStorage.getItem(e)))&&void 0!==n?n:t})),a=Object(s.a)(n,2),r=a[0],i=a[1];return Object(c.useEffect)((function(){window.localStorage.setItem(e,JSON.stringify(r))}),[e,r]),[r,i]}("contacts",[]),t=Object(s.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(""),i=Object(s.a)(r,2),l=i[0],b=i[1],j=function(e){for(var t=!1,c=0;c<n.length;c+=1){if(n[c].name.toLowerCase()===e.toLowerCase())return!0;t=!1}return t},h=function(){var e=l.toLowerCase();return n.filter((function(t){return t.name.toLowerCase().includes(e)}))}();return Object(m.jsxs)(k,{children:[Object(m.jsx)("h1",{children:"Phonebook"}),Object(m.jsx)(d,{onSubmit:function(e){var t=e.name,n=e.number,c={id:u.a.generate(),name:t,number:n};!1===j(t)?a((function(e){return[c].concat(Object(o.a)(e))})):alert(t+" is already in contacts")}}),Object(m.jsx)("h2",{children:"Contacts"}),Object(m.jsx)(C,{value:l,onChange:function(e){b(e.currentTarget.value)}}),Object(m.jsx)(v,{contacts:h,onDeleteContact:function(e){a((function(t){return t.filter((function(t){return t.id!==e}))}))}})]})}i.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(w,{})}),document.getElementById("root"))},6:function(e,t,n){e.exports={listItem:"ContactListItem_listItem__2EFXD",itemDesc:"ContactListItem_itemDesc__npKqE"}}},[[29,1,2]]]);
//# sourceMappingURL=main.4d28f839.chunk.js.map