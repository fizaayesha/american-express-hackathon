(this["webpackJsonpbasic-banking-system"]=this["webpackJsonpbasic-banking-system"]||[]).push([[0],{40:function(e,a,t){},41:function(e,a,t){},43:function(e,a,t){},67:function(e,a,t){},68:function(e,a,t){},69:function(e,a,t){},71:function(e,a,t){},72:function(e,a,t){"use strict";t.r(a);var s=t(1),c=t(32),n=t.n(c),r=(t(40),t(41),t(15)),i=t(6),l=(t(21),t(0));var o=function(){return Object(l.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark",children:Object(l.jsxs)("div",{className:"container-fluid",children:[Object(l.jsx)("a",{className:"navbar-brand",href:"/",children:"Grip Bank"}),Object(l.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(l.jsx)("span",{className:"navbar-toggler-icon"})}),Object(l.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(l.jsxs)("ul",{className:"navbar-nav me-left mb-2 mb-lg-0",children:[Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)("a",{className:"nav-link active","aria-current":"page",href:"/",children:"Home"})}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)("a",{className:"nav-link active",href:"/about",children:"About"})}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)("a",{className:"nav-link active",href:"/users",children:"Users"})}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)("a",{className:"nav-link active",href:"/transactions",children:"Transactions"})})]})})]})})},d=t(13),b=(t(43),t(14)),j=t.n(b),h=t.p+"static/media/use-avatar.e27af672.svg",u=function(){var e=Object(s.useState)([]),a=Object(d.a)(e,2),t=a[0],c=a[1];Object(s.useEffect)((function(){j.a.get("/customers").then((function(e){return c(e.data)})).catch((function(e){return console.log(e)}))}),[]);var n=Object(i.f)();return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{className:"users",children:Object(l.jsx)("div",{className:"user",children:t.map((function(e){return Object(l.jsxs)("div",{className:"body",children:[Object(l.jsx)("img",{src:h,alt:"avatar",style:{width:"10rem"}}),Object(l.jsxs)("div",{className:"box",children:[Object(l.jsxs)("h6",{children:["Customer Id: ",e.customerId]}),Object(l.jsxs)("h6",{children:["Name:",e.firstname," ",e.lastname]}),Object(l.jsxs)("h6",{children:["Email: ",e.email]}),Object(l.jsxs)("h6",{children:["Amount: Rs. ",e.balance]}),Object(l.jsx)("button",{className:"but",id:e.id,onClick:function(){return a=e._id,void n.push({pathname:"/transfer/".concat(a),state:{users:t}});var a},children:"Transfer"})]})]},e.customerId)}))})}),Object(l.jsx)("div",{className:"footer",children:Object(l.jsx)("p",{children:"Copyright \xa9 2022 Grip Bank"})})]})},m=t.p+"static/media/about1.117828e6.svg",x=t.p+"static/media/about3.66235899.svg",O=t.p+"static/media/about2.497b3354.svg",p=t.p+"static/media/box1.5bb7aaca.svg",g=t.p+"static/media/box2.0349645c.svg",v=t.p+"static/media/box3.304f9d06.svg";t(67);var f=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{style:{background:"gray"},id:"carouselExampleCaptions",className:"carousel slide","data-bs-ride":"carousel",children:[Object(l.jsxs)("div",{className:"carousel-indicators",children:[Object(l.jsx)("button",{type:"button","data-bs-target":"#carouselExampleCaptions","data-bs-slide-to":"0",className:"active","aria-current":"true","aria-label":"Slide 1"}),Object(l.jsx)("button",{type:"button","data-bs-target":"#carouselExampleCaptions","data-bs-slide-to":"1","aria-label":"Slide 2"}),Object(l.jsx)("button",{type:"button","data-bs-target":"#carouselExampleCaptions","data-bs-slide-to":"2","aria-label":"Slide 3"})]}),Object(l.jsxs)("div",{className:"carousel-inner",children:[Object(l.jsxs)("div",{className:"carousel-item active",children:[Object(l.jsx)("img",{src:m,className:"d-block w-100",alt:"about1",style:{width:"36rem",height:"36rem"}}),Object(l.jsxs)("div",{className:"carousel-caption d-md-block",children:[Object(l.jsx)("h5",{children:"Credit Card"}),Object(l.jsx)("p",{children:"Credit Card is safer than carrying cash"})]})]}),Object(l.jsxs)("div",{className:"carousel-item",children:[Object(l.jsx)("img",{src:O,className:"d-block w-100",alt:"about2",style:{width:"36rem",height:"36rem"}}),Object(l.jsxs)("div",{className:"carousel-caption d-md-block",children:[Object(l.jsx)("h5",{children:"GRIP BANK Life Insurance"}),Object(l.jsx)("p",{children:"GRIP BANK provide funds for your kids' school or college education"})]})]}),Object(l.jsxs)("div",{className:"carousel-item",children:[Object(l.jsx)("img",{src:x,className:"d-block w-100",alt:"about3",style:{width:"36rem",height:"36rem"}}),Object(l.jsxs)("div",{className:"carousel-caption d-md-block",children:[Object(l.jsx)("h5",{children:"GRIP BANK, anytime anywhere"}),Object(l.jsx)("p",{children:"Online transactions are not bound by the geographical limits, you can transact anytime, anywhere"})]})]})]}),Object(l.jsxs)("button",{className:"carousel-control-prev",type:"button","data-bs-target":"#carouselExampleCaptions","data-bs-slide":"prev",children:[Object(l.jsx)("span",{className:"carousel-control-prev-icon","aria-hidden":"true"}),Object(l.jsx)("span",{className:"visually-hidden",children:"Previous"})]}),Object(l.jsxs)("button",{className:"carousel-control-next",type:"button","data-bs-target":"#carouselExampleCaptions","data-bs-slide":"next",children:[Object(l.jsx)("span",{className:"carousel-control-next-icon","aria-hidden":"true"}),Object(l.jsx)("span",{className:"visually-hidden",children:"Next"})]})]}),Object(l.jsxs)("div",{className:"card-group",children:[Object(l.jsxs)("div",{className:"card bg-secondary",id:"box",style:{margin:"20px"},children:[Object(l.jsx)("img",{src:p,className:"card-img-top",alt:"box1"}),Object(l.jsxs)("div",{className:"card-body text-light",style:{background:"rgb(75 119 197)"},children:[Object(l.jsx)("h5",{className:"card-title",children:"Loans"}),Object(l.jsx)("p",{className:"card-text",children:"Grip Bank provide loans at very low interest rates. The rates you pay will be cheaper than other types of highinterest loans. Grip Bank loans offer significantly lower interest rates than you will find with credit cards."})]})]}),Object(l.jsxs)("div",{className:"card bg-secondary",id:"box",style:{margin:"20px"},children:[Object(l.jsx)("img",{src:g,className:"card-img-top",alt:"box2"}),Object(l.jsxs)("div",{className:"card-body text-light",style:{background:"rgb(75 119 197)"},children:[Object(l.jsx)("h5",{className:"card-title",children:"Money is Safe"}),Object(l.jsx)("p",{className:"card-text",children:"A saving account is an interest-bearing deposit account held at a bank. There is a chance that your cash might get lost or stolen if you carry it with you. However, a savings account is insured for upto certain limit"})]})]}),Object(l.jsxs)("div",{className:"card bg-secondary",id:"box",style:{margin:"20px"},children:[Object(l.jsx)("img",{src:v,className:"card-img-top",alt:"box3"}),Object(l.jsxs)("div",{className:"card-body text-light",style:{background:"rgb(75 119 197)"},children:[Object(l.jsx)("h5",{className:"card-title",children:"Online Banking"}),Object(l.jsx)("p",{className:"card-text",children:"Banking online means accessing your bank account and carrying out financial transactions through the internet on your smartphone, tablet or computer. It's quick, usually free and allows you to do tasks, such as paying bills and transferring money, without having to visit or call your bank. Grip Bank provides you the facility of online banking anywhere anytime."})]})]})]}),Object(l.jsx)("div",{className:"footer",children:Object(l.jsx)("p",{children:"Copyright \xa9 2022 Grip Bank"})})]})},N=t.p+"static/media/one.f647428f.svg",y=t.p+"static/media/logo1.3f9a0205.svg";var k=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{style:{background:"gray"},id:"carouselExampleCaptions",className:"carousel slide","data-bs-ride":"carousel",children:[Object(l.jsx)("div",{className:"carousel-indicators"}),Object(l.jsx)("div",{className:"carousel-inner",children:Object(l.jsxs)("div",{className:"carousel-item active",children:[Object(l.jsx)("img",{src:N,className:"d-block w-100",alt:"bg1",style:{width:"35rem",height:"35rem"}}),Object(l.jsxs)("div",{className:"carousel-caption d-md-block",id:"my",children:[Object(l.jsx)("img",{src:y,alt:"logo",style:{width:"15rem",height:"15rem"}}),Object(l.jsx)("h1",{children:"GRIP BANK"}),Object(l.jsx)("p",{children:"A bank is a financial institution licensed to receive deposits and make loans. Banks may also provide financial services such as wealth management, currency exchange, and safe deposit boxes. There are several different kinds of banks including retail banks, commercial or corporate banks, and investment banks. Banks are \u201cspecial\u201d because they manage the payment system through which most economic payments are made. They are the functional equivalent of the water company connecting the transfer of water to and from all of our homes."}),Object(l.jsx)("a",{className:"btn btn-dark",href:"https://internship.thesparksfoundation.info/",role:"button",children:"Learn More"})]})]})})]}),Object(l.jsx)("div",{className:"footer",children:Object(l.jsx)("p",{children:"Copyright \xa9 2022 Grip Bank"})})]})},E=(t(68),function(){var e=Object(s.useState)([]),a=Object(d.a)(e,2),t=a[0],c=a[1];return Object(s.useEffect)((function(){j.a.get("http://localhost:5000/transactions/").then((function(e){return c(e.data)})).catch((function(e){return console.log(e)})),console.log(t)}),[t]),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{className:"users",children:Object(l.jsx)("div",{className:"user",children:t.map((function(e){return Object(l.jsxs)("div",{className:"body",children:[Object(l.jsx)("img",{src:h,alt:"avatar",style:{width:"10rem"}}),Object(l.jsxs)("div",{className:"box",children:[Object(l.jsxs)("h6",{children:["Transaction Id: ",e.transactionId]}),Object(l.jsxs)("h6",{children:["Sender:",e.sender]}),Object(l.jsxs)("h6",{children:["Receiver: ",e.receiver]}),Object(l.jsxs)("h6",{children:["Amount: Rs. ",e.amount]}),Object(l.jsxs)("h6",{children:["Date: ",e.date]})]})]},e._id)}))})}),Object(l.jsx)("div",{className:"footer",children:Object(l.jsx)("p",{children:"Copyright \xa9 2022 Grip Bank"})})]})}),C=t(75),I=t(74),w=t(73),B=t(34),T=t(76),L=(t(69),function(e){var a=Object(i.f)(),t=Object(s.useState)(e.location.state.users),c=Object(d.a)(t,1)[0],n=Object(s.useState)("select recepient"),r=Object(d.a)(n,2),o=r[0],b=r[1],u=Object(s.useState)("Entered amount"),m=Object(d.a)(u,2),x=m[0],O=m[1],p=Object(s.useState)(e.match.params.id),g=Object(d.a)(p,1)[0],v=c.find((function(a){return a._id===e.match.params.id}));var f=function(e,t,s){var n=c.find((function(a){return a._id===e})),r=c.find((function(e){return e._id===t})),i=s;n.balance=n.balance-i,r.balance=Number(r.balance)+Number(i),function(e,a,t){console.log(e),console.log(a),console.log(t);var s={transactionId:Number(String(e.customerId)+String(a.customerId)),sender:"".concat(e.firstname," ").concat(e.lastname),receiver:"".concat(a.firstname," ").concat(a.lastname),amount:Number(t)};console.log(s),j.a.post("/transactions/add",s).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)})),j.a.post("/customers/update/".concat(e._id),e).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)})),j.a.post("/customers/update/".concat(a._id),a).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)}))}(n,r,i),a.push("/success")};return Object(l.jsx)("div",{className:"transfer-card",children:Object(l.jsxs)(C.a,{style:{width:"22rem",background:"gray"},children:[Object(l.jsx)(C.a.Img,{variant:"top",src:h,className:"avatar",style:{width:"10rem"}}),Object(l.jsxs)(C.a.Body,{children:[Object(l.jsxs)(C.a.Title,{children:["Username: ",v.firstname," ",v.lastname]}),Object(l.jsxs)(C.a.Title,{children:["Balance: \u20b9.",v.balance]}),Object(l.jsxs)(I.a,{children:[Object(l.jsxs)(w.a,{className:"contentrow",children:[Object(l.jsx)(B.a,{md:"auto",children:Object(l.jsx)(I.a.Label,{children:Object(l.jsx)("b",{children:"Enter Amount:"})})}),Object(l.jsx)(B.a,{children:Object(l.jsx)(I.a.Control,{type:"number",placeholder:"Enter Amount",onChange:function(e){return function(e){O(e.target.value)}(e)}})})]}),Object(l.jsxs)(w.a,{className:"contentrow",children:[Object(l.jsx)(B.a,{children:Object(l.jsx)(I.a.Label,{children:Object(l.jsx)("b",{children:"Transfer To:"})})}),Object(l.jsx)(B.a,{md:"auto",children:Object(l.jsxs)(I.a.Control,{className:"sender",as:"select",onChange:function(e){b(e.target.value)},value:o,children:[Object(l.jsx)("option",{children:"Select Recipient"}),c.map((function(e){return Object(l.jsxs)("option",{value:e._id,children:[e.firstname," ",e.lastname]},e.customerId)}))]})})]}),Object(l.jsxs)(w.a,{className:"contentrow",children:[Object(l.jsx)(B.a,{children:Object(l.jsx)(T.a,{className:"Buttons",onClick:function(){return a.push("/users")},variant:"primary",children:"Go Back"})}),Object(l.jsx)(B.a,{children:Object(l.jsx)(T.a,{className:"Buttons",onClick:function(){return f(g,o,x)},variant:"dark",children:"Transfer"})})]})]})]})]})})}),A=(t(71),function(){var e=Object(i.f)(),a=function(a){"home"===a.target.value?e.push("/"):e.push("/users")};return Object(l.jsx)("div",{className:"success-portal",children:Object(l.jsx)(C.a,{style:{width:"20rem",height:"15rem"},className:"success-card",bg:"secondary",text:"light",border:"dark",children:Object(l.jsxs)(C.a.Body,{children:[Object(l.jsx)(C.a.Img,{variant:"top",src:"data:image/png;base64,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",className:"success"}),Object(l.jsx)(C.a.Title,{className:"mb-2 mx-auto my-2 success-title",children:"Transaction Successful"}),Object(l.jsx)(C.a.Text,{children:"Click on the 'Home' button to navigate to Home page or else Click on 'More' button to make another transaction."}),Object(l.jsxs)(w.a,{children:[Object(l.jsx)(B.a,{className:"success-buttons",size:"lg",mr:"auto",children:Object(l.jsx)(T.a,{variant:"primary",value:"home",onClick:function(e){return a(e)},children:"Home"})}),Object(l.jsx)(B.a,{size:"lg",className:"success-buttons",mr:"auto",children:Object(l.jsx)(T.a,{variant:"dark",value:"more",onClick:function(e){return a(e)},children:"More"})})]})]})})})});var G=function(){return Object(l.jsxs)(r.a,{children:[Object(l.jsx)(o,{}),Object(l.jsxs)(i.c,{children:[Object(l.jsx)(i.a,{path:"/",exact:!0,component:k}),Object(l.jsx)(i.a,{path:"/about",exact:!0,component:f}),Object(l.jsx)(i.a,{path:"/users",exact:!0,component:u}),Object(l.jsx)(i.a,{path:"/transactions",exact:!0,component:E}),Object(l.jsx)(i.a,{path:"/transfer/:id",exact:!0,component:L}),Object(l.jsx)(i.a,{path:"/success",exact:!0,component:A})]})]})},P=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,77)).then((function(a){var t=a.getCLS,s=a.getFID,c=a.getFCP,n=a.getLCP,r=a.getTTFB;t(e),s(e),c(e),n(e),r(e)}))};n.a.render(Object(l.jsx)(r.a,{children:Object(l.jsx)(G,{})}),document.getElementById("root")),P()}},[[72,1,2]]]);
//# sourceMappingURL=main.f6d5f4f6.chunk.js.map