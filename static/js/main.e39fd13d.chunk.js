(this.webpackJsonpbooking_hotels=this.webpackJsonpbooking_hotels||[]).push([[0],{134:function(e,t,a){},135:function(e,t,a){},238:function(e,t,a){"use strict";a.r(t);var r,n=a(0),c=a.n(n),s=a(14),i=a.n(s),o=(a(134),a(135),a(42)),l=a(1),j=function(){var e=localStorage.getItem("currentUserName");return Object(l.jsx)("div",{className:"sticky",children:Object(l.jsxs)("nav",{className:"navbar navbar-expand-lg",children:[Object(l.jsx)(o.b,{className:"navbar-brand",to:"/",children:Object(l.jsx)("img",{className:"brand-logo",src:"https://1000logos.net/wp-content/uploads/2020/08/Booking_Com_logo_PNG17.png",alt:""})}),Object(l.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(l.jsx)("span",{className:"navbar-toggler-icon"})}),Object(l.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNavAltMarkup",children:Object(l.jsx)("div",{className:"navbar-nav mr-5",children:e?Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:"dropdown",children:[Object(l.jsxs)("button",{className:"btn btn-primary dropdown-toggle",type:"button",id:"dropdownMenuButton1","data-bs-toggle":"dropdown","aria-expanded":"false",children:[Object(l.jsx)("i",{className:"fa fa-user"})," ",e]}),Object(l.jsxs)("ul",{className:"dropdown-menu","aria-labelledby":"dropdownMenuButton1",children:[Object(l.jsx)("li",{children:Object(l.jsx)("a",{className:"dropdown-item",href:"#",children:"Booking"})}),Object(l.jsx)("li",{children:Object(l.jsx)("a",{className:"dropdown-item",href:"#",onClick:function(){localStorage.removeItem("currentUserName"),window.location.reload()},children:"Logout"})})]})]})}):Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(o.b,{className:"nav-item nav-link active",to:"/registration",children:"Register"}),Object(l.jsx)(o.b,{className:"nav-item nav-link",to:"/login",children:"Login"})]})})})]})})},d=a(12),b=a(8),m=a(245),p=a(246),g=a(243),u=function(e){return e.toLocaleString("ru-RU",{style:"currency",currency:"EUR"})},h=function(e){var t=e.hotel,a=e.fromDate,r=e.toDate,c=Object(n.useState)(!1),s=Object(b.a)(c,2),i=s[0],j=s[1],d=function(){return j(!1)};return Object(l.jsx)("div",{children:Object(l.jsxs)("div",{className:"row bs",children:[Object(l.jsx)("div",{className:"col-md-5",children:Object(l.jsx)("img",{src:t.img[0],alt:"",className:"smallimg"})}),Object(l.jsxs)("div",{className:"col-md-7",children:[Object(l.jsxs)("h1",{children:[t.name," ",t.stars,"*"]}),Object(l.jsxs)("p",{children:["Location: ",t.location]}),Object(l.jsxs)("p",{children:["Services: ",t.services.join(", ")]}),Object(l.jsxs)("p",{children:["Rating: ",t.rating.toFixed(1)]}),Object(l.jsxs)("p",{children:["Price from: ",u(t.price)]}),Object(l.jsxs)("div",{style:{float:"right"},children:[Object(l.jsx)(o.b,{to:"/book/".concat(t.id,"/").concat(a,"/").concat(r),children:Object(l.jsx)("button",{className:"show-more-btn btn btn-primary m-2",children:"Book now"})}),Object(l.jsx)("button",{className:"show-more-btn btn btn-primary",onClick:function(){return j(!0)},children:"View more ..."})]})]}),Object(l.jsxs)(m.a,{show:i,onHide:d,size:"lg",children:[Object(l.jsx)(m.a.Header,{children:Object(l.jsx)(m.a.Title,{children:t.name})}),Object(l.jsxs)(m.a.Body,{children:[Object(l.jsx)(p.a,{prevLabel:"",nextLabel:"",children:t.img.map((function(e){return Object(l.jsx)(p.a.Item,{children:Object(l.jsx)("img",{className:"scale d-block w-100 bigimg",src:e,alt:""})},e)}))}),Object(l.jsx)("p",{children:t.description})]}),Object(l.jsx)(m.a.Footer,{children:Object(l.jsx)(g.a,{className:"btn btn-danger",variant:"secondary",onClick:d,children:"Close"})})]})]})})},O=[{id:"1",name:"INNSIDE Palma Bosque",persons:2,price:99,stars:4,rating:8.5,location:"Mallorca",comentary:"",lat:39.56691504622483,lng:2.6259714557131595,services:["restaurant","wifi","parking","air conditioner","gym","pool","breakfast"],filters:{restaurant:!0,wifi:!0,pool:!0,parking:!0,"air conditioner":!0,spa:!1,bar:!1,gym:!0,breakfast:!0},oferta:!0,recomendado:!0,img:["https://cf.bstatic.com/images/hotel/max1024x768/216/216165441.jpg","https://avatars.mds.yandex.net/get-altay/947364/2a000001664e462a86b2192dd8882b8694b9/XXL","https://cdn.ostrovok.ru/t/1024x768/content/fd/b8/fdb89422cfba01184c3213e04429989b673d55ea.jpeg"]},{id:"2",name:"GPRO Valparaiso Palace Hotel & SPA",persons:3,price:116,stars:5,rating:8.7,location:"Mallorca",comentary:"",lat:39.555737563510725,lng:2.6194336692029796,services:["restaurant","wifi","parking","air conditioner","gym","pool","breakfast","spa"],filters:{restaurant:!0,wifi:!0,pool:!0,parking:!0,air_conditioner:!0,spa:!0,bar:!1,gym:!0,breakfast:!0},oferta:!1,recomendado:!1,img:["https://media-cdn.tripadvisor.com/media/photo-s/0a/c6/d6/c4/gpro-valparaiso-palace.jpg","https://anextour-moscow.ru/images/hotels/gallery/553844/0-0_15971600936829.jpg","https://thumbnails.trvl-media.com/LeSNtZWXIM1PINK06hhogQziBdg=/773x530/smart/filters:quality(60)/images.trvl-media.com/hotels/8000000/7840000/7830900/7830885/5438f706_z.jpg"]},{id:"3",name:"Abelay",persons:4,price:69,stars:2,rating:7.3,location:"Mallorca",comentary:"",lat:39.58287838596287,lng:2.6549075692037736,services:["restaurant","wifi","parking","gym","breakfast"],filters:{restaurant:!0,wifi:!0,pool:!1,parking:!0,air_conditioner:!1,spa:!1,bar:!1,gym:!0,breakfast:!0},oferta:!0,recomendado:!1,img:["https://foto-origin.hrsstatic.com/foto/0/7/2/7//teaser_072735.jpg","https://cdn.ostrovok.ru/t/1024x768/content/af/fd/affd7fdc3224caf54a5573c5df2f20a739e851bf.jpeg","https://avatars.mds.yandex.net/get-altay/1524599/2a00000169bc66aa883f2dd559f8b1967950/XXL"]},{id:"4",name:"Amic Horizonte",persons:5,price:45,stars:3,rating:7,location:"Mallorca",comentary:"",lat:39.555929391042476,lng:2.6216264557128475,services:["restaurant","wifi","parking","air conditioner","gym","pool","breakfast"],filters:{restaurant:!0,wifi:!0,pool:!0,parking:!0,air_conditioner:!0,spa:!1,bar:!1,gym:!0,breakfast:!0},oferta:!1,recomendado:!1,img:["https://ofertasfindeano.com/wp-content/uploads/2016/09/Amic-Horizonte-1.jpg"]},{id:"5",name:"Sant Francesc Hotel Singular",persons:2,price:168,stars:5,rating:9.5,location:"Mallorca",comentary:"",lat:39.56921818017396,lng:2.652678071060803,services:["restaurant","wifi","parking","air conditioner","gym","pool","bar","breakfast","spa"],filters:{restaurant:!0,wifi:!0,pool:!0,parking:!0,air_conditioner:!0,spa:!0,bar:!0,breakfast:!0,gym:!0},oferta:!1,recomendado:!0,img:["https://cf.bstatic.com/images/hotel/max1280x900/146/146937606.jpg"]},{id:"6",name:"Hotel Meli\xe1 Mar\xeda Pita",persons:4,price:57,stars:4,rating:8.3,location:"Galicia",comentary:"",lat:43.37560065119445,lng:-8.402761715329996,services:["restaurant","wifi","parking","air conditioner","breakfast"],filters:{restaurant:!0,wifi:!0,pool:!1,parking:!0,air_conditioner:!0,spa:!1,bar:!1,gym:!1,breakfast:!0},oferta:!0,recomendado:!1,img:["https://cdn.atrapalo.com/hoteles/picture/l/22/4/1/206927166.jpg"]},{id:"7",name:"Hotel NH Collection Santiago de Compostela",persons:6,price:168,stars:5,rating:9.5,location:"Galicia",comentary:"",lat:42.88973467416019,lng:-8.543313386510711,services:["restaurant","wifi","parking","air conditioner","gym","pool","bar","breakfast","spa"],filters:{restaurant:!0,wifi:!0,pool:!0,parking:!0,air_conditioner:!0,spa:!0,bar:!0,gym:!0,breakfast:!0},oferta:!1,recomendado:!0,img:["https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/37/05/88/nh-collection-santiago.jpg?w=900&h=-1&s=1"]},{id:"8",name:"Barcel\xf3 Ourense",persons:3,price:63,stars:4,rating:8.9,location:"Galicia",comentary:"",lat:42.342332390728416,lng:-7.864267488384447,services:["restaurant","wifi","parking","air conditioner","breakfast"],filters:{restaurant:!1,wifi:!0,pool:!1,parking:!0,air_conditioner:!0,spa:!1,bar:!1,gym:!1,breakfast:!0},oferta:!1,recomendado:!1,img:["https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Barcelona_-_Estaci%C3%B3n_de_Sants_y_Hotel_Barcel%C3%B3_Sants_1.jpg/1200px-Barcelona_-_Estaci%C3%B3n_de_Sants_y_Hotel_Barcel%C3%B3_Sants_1.jpg"]},{id:"9",name:"Capitol Boutique Hotel",persons:2,price:50,stars:3,rating:8.5,location:"Galicia",comentary:"",lat:42.876834261208884,lng:-8.543256273020974,services:["wifi","parking","air conditioner","bar","breakfast"],filters:{restaurant:!1,wifi:!0,pool:!1,parking:!0,air_conditioner:!0,spa:!1,bar:!0,gym:!1,breakfast:!0},oferta:!0,recomendado:!1,img:["https://x.cdrst.com/foto/hotel-sf/59815/granderesp/capitol-boutique-hotel-general-9733a16.jpg"]},{id:"10",name:"Xinzo",persons:2,price:55,stars:2,rating:7.8,location:"Galicia",comentary:"",lat:42.06067735786035,lng:-7.7264047307201,services:["restaurant","wifi","parking","air conditioner","bar","breakfast"],filters:{restaurant:!0,wifi:!0,pool:!1,parking:!0,air_conditioner:!0,spa:!1,bar:!0,gym:!1,breakfast:!0},oferta:!1,recomendado:!0,img:["https://m02.tury.ru/hotel/90/9034255/9794014_700.jpg"]}],f=a(72),x=a.n(f),v=function(e){var t=e.onPageChange,a=e.itemsCount,r=e.pageSize,n=e.currentPage,c=Math.ceil(a/r);if(1===c)return null;var s=x.a.range(1,c+1);return Object(l.jsx)("nav",{children:Object(l.jsx)("ul",{className:"pagination",children:s.map((function(e){return Object(l.jsx)("li",{className:"mt-4 page-item "+(e===n?"active":""),children:Object(l.jsx)("a",{className:"page-link",role:"button",onClick:function(){return t(e)},children:e})},e)}))})})},k=a(114),y=a(115),w=a.n(y),N=a(88),S=function(){var e=Object(n.useState)(!0),t=Object(b.a)(e,1)[0],a=Object(N.css)(r||(r=Object(k.a)(["\n    display: block;\n    margin: 0 auto;\n    margin-top: 150px;\n  "])));return Object(l.jsx)("div",{className:"sweet-loading",children:Object(l.jsx)(w.a,{color:"#003580",css:a,loading:t,size:100})})},_=function(e){var t=e.message;return Object(l.jsx)("div",{children:Object(l.jsx)("div",{className:"alert alert-danger",role:"alert",children:t})})};var C=a(22),D=a.n(C),M=a(244),B=(a(149),M.a.RangePicker),P=function(){var e=Object(n.useState)([]),t=Object(b.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(),s=Object(b.a)(c,2),i=s[0],o=s[1],j=Object(n.useState)(1),d=Object(b.a)(j,2),m=d[0],p=d[1],g=Object(n.useState)(),u=Object(b.a)(g,2),f=u[0],k=u[1],y=Object(n.useState)(),w=Object(b.a)(y,2),N=w[0],C=w[1];Object(n.useEffect)((function(){o(!0),window.setTimeout((function(){r(O),o(!1)}),2e3)}),[]),Object(n.useEffect)((function(){p(1)}),[]);var M=a.length,P=function(e,t,a){var r=(t-1)*a;return x()(e).slice(r).take(a).value()}(a,m,6);return Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("div",{className:"date-sticky row mt-5",children:Object(l.jsx)("div",{className:"col-md-3",children:Object(l.jsx)(B,{format:"DD-MM-YYYY",onChange:function(e){k(D()(e[0]).format("DD-MM-YYYY")),C(D()(e[1]).format("DD-MM-YYYY"))}})})}),Object(l.jsx)("div",{className:"row justify-content-center mt-5",children:i?Object(l.jsx)(S,{}):P.length>=1?P.map((function(e){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("div",{className:"col-md-9 mt-3",children:Object(l.jsx)(h,{hotel:e,fromDate:f,toDate:N},e.id)})})})):Object(l.jsx)(_,{})}),Object(l.jsx)("div",{className:"d-flex justify-content-center",children:Object(l.jsx)(v,{itemsCount:M,pageSize:6,onPageChange:function(e){p(e),window.scrollTo(0,0)},currentPage:m})})]})},Y=a(92),I=a.n(Y),F=a(127),L=(a(218),function(e){var t=e.match,a=Object(n.useState)(!0),r=Object(b.a)(a,2),c=r[0],s=r[1],i=Object(n.useState)(),o=Object(b.a)(i,2),j=(o[0],o[1],Object(n.useState)()),d=Object(b.a)(j,2),m=d[0],p=d[1],g=Object(n.useState)(),h=Object(b.a)(g,2),f=(h[0],h[1],D()(t.params.fromDate,"DD-MM-YYYY")),x=D()(t.params.toDate,"DD-MM-YYYY"),v=D.a.duration(x.diff(f)).asDays();Object(n.useEffect)((function(){function e(){return e=Object(F.a)(I.a.mark((function e(){return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s(!0),window.setTimeout((function(){O.map((function(e){return e.id===t.params.hotelId?p(e):""})),s(!1)}),2e3);case 2:case"end":return e.stop()}}),e)}))),e.apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);return Object(l.jsx)("div",{className:"m-5",children:c?Object(l.jsx)(S,{}):m?Object(l.jsx)("div",{children:Object(l.jsxs)("div",{className:"row justify-content-center mt-5 bs",children:[Object(l.jsxs)("div",{className:"col-md-6",children:[Object(l.jsx)("h1",{children:m.name}),Object(l.jsx)("img",{src:m.img[0],alt:"",className:"bigimg"})]}),Object(l.jsxs)("div",{className:"col-md-5",children:[Object(l.jsxs)("div",{style:{textAlign:"right"},children:[Object(l.jsx)("h1",{children:"Booking Details"}),Object(l.jsx)("hr",{}),Object(l.jsxs)("b",{children:[Object(l.jsx)("p",{children:"User:"}),Object(l.jsxs)("p",{children:["From date: ",t.params.fromDate]}),Object(l.jsxs)("p",{children:["To date: ",t.params.toDate]})]})]}),Object(l.jsxs)("div",{style:{textAlign:"right"},children:[Object(l.jsx)("h1",{children:"Amount"}),Object(l.jsx)("hr",{}),Object(l.jsxs)("b",{children:[Object(l.jsxs)("p",{children:["Total nights: ",v]}),Object(l.jsxs)("p",{children:["Rent per night: ",u(m.price)]}),Object(l.jsxs)("h1",{children:["Total amount:"," ",u(m.price*Number(v))]})]})]}),Object(l.jsx)("div",{style:{float:"right"},children:Object(l.jsx)("button",{className:"show-more-btn btn btn-primary",onClick:function(){var e={hotel:m.name,user:localStorage.getItem("currentUserName"),fromDate:f,toDate:x,totalNights:v,totalAmount:m.price*Number(v)};console.log(e)},children:"Pay now"})})]})]})}):Object(l.jsx)(_,{})})}),A=function(e){var t=e.message;return Object(l.jsx)("div",{children:Object(l.jsx)("div",{className:"alert alert-success",role:"alert",children:t})})},H=function(){var e=Object(n.useState)(""),t=Object(b.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(""),s=Object(b.a)(c,2),i=s[0],o=s[1],j=Object(n.useState)(""),d=Object(b.a)(j,2),m=d[0],p=d[1],g=Object(n.useState)(""),u=Object(b.a)(g,2),h=u[0],O=u[1],f=Object(n.useState)(!1),x=Object(b.a)(f,1)[0],v=Object(n.useState)(),k=Object(b.a)(v,1)[0],y=Object(n.useState)(),w=Object(b.a)(y,2),N=w[0],C=w[1];return Object(l.jsxs)(l.Fragment,{children:[x&&Object(l.jsx)(S,{}),k&&Object(l.jsx)(_,{}),Object(l.jsx)("div",{className:"row justify-content-center mt-5",children:Object(l.jsxs)("div",{className:"col-md-5 mt-5",children:[N&&Object(l.jsx)(A,{message:"Registration success"}),Object(l.jsxs)("div",{className:"bs",children:[Object(l.jsx)("h2",{children:"Register"}),Object(l.jsx)("input",{type:"text",className:"form-control mb-2",placeholder:"name",value:a,onChange:function(e){r(e.target.value)}}),Object(l.jsx)("input",{type:"text",className:"form-control mb-2",placeholder:"email",value:i,onChange:function(e){o(e.target.value)}}),Object(l.jsx)("input",{type:"text",className:"form-control mb-2 ",placeholder:"password",value:m,onChange:function(e){p(e.target.value)}}),Object(l.jsx)("input",{type:"text",className:"form-control mb-2",placeholder:"confirm password",value:h,onChange:function(e){O(e.target.value)}}),Object(l.jsx)("button",{className:"btn btn-primary show-more-btn mt-3",onClick:function(){if(m===h){var e={name:a,email:i,password:m,cpassword:h};console.log(e),localStorage.setItem("currentUserEmail",e.email),localStorage.setItem("currentUserPassword",e.password),localStorage.setItem("currentUserName",e.name),r(""),o(""),p(""),O(""),C(!0)}else alert("Password not matched")},children:"Register"})]})]})})]})},U=function(){var e=Object(n.useState)(""),t=Object(b.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(""),s=Object(b.a)(c,2),i=s[0],o=s[1],j=Object(n.useState)(!1),d=Object(b.a)(j,1)[0],m=Object(n.useState)(),p=Object(b.a)(m,1)[0];return Object(l.jsxs)(l.Fragment,{children:[d&&Object(l.jsx)(S,{}),Object(l.jsx)("div",{className:"row justify-content-center mt-5",children:Object(l.jsxs)("div",{className:"col-md-5 mt-5",children:[p&&Object(l.jsx)(_,{message:"Invalid Credentionals"}),Object(l.jsxs)("div",{className:"bs",children:[Object(l.jsx)("h2",{children:"Login"}),Object(l.jsx)("input",{type:"text",className:"form-control mb-2",placeholder:"email",value:a,onChange:function(e){r(e.target.value)}}),Object(l.jsx)("input",{type:"text",className:"form-control mb-2",placeholder:"password",value:i,onChange:function(e){o(e.target.value)}}),Object(l.jsx)("button",{className:"btn btn-primary show-more-btn mt-3",onClick:function(){var e=a,t=i,r=localStorage.getItem("currentUserEmail"),n=localStorage.getItem("currentUserPassword");r===e&&n===t?(console.log("super"),window.location.href="/"):console.log("not super")},children:"Login"})]})]})})]})},E=function(){return Object(l.jsx)("h1",{children:"Page is not found"})},R=function(){return Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)("ul",{class:"list-group",children:[Object(l.jsx)("li",{class:"list-group-item",children:1}),Object(l.jsx)("li",{class:"list-group-item",children:2}),Object(l.jsx)("li",{class:"list-group-item",children:3}),Object(l.jsx)("li",{class:"list-group-item",children:4}),Object(l.jsx)("li",{class:"list-group-item",children:5})]})})};var T=function(){return Object(l.jsx)("div",{className:"App",children:Object(l.jsxs)(o.a,{basename:"/booking-hotels-app",children:[Object(l.jsx)(j,{}),Object(l.jsxs)(d.c,{children:[Object(l.jsx)(d.a,{path:"/",exact:!0,component:P}),Object(l.jsx)(d.a,{path:"/book/:hotelId/:fromDate/:toDate",exact:!0,component:L}),Object(l.jsx)(d.a,{path:"/registration",exact:!0,component:H}),Object(l.jsx)(d.a,{path:"/login",exact:!0,component:U}),Object(l.jsx)(d.a,{path:"/pay",exact:!0,component:R}),Object(l.jsx)(d.a,{component:E})]})]})})},z=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,247)).then((function(t){var a=t.getCLS,r=t.getFID,n=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),r(e),n(e),c(e),s(e)}))};i.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(T,{})}),document.getElementById("root")),z()}},[[238,1,2]]]);
//# sourceMappingURL=main.e39fd13d.chunk.js.map