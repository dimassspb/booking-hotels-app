(this.webpackJsonpbooking_hotels=this.webpackJsonpbooking_hotels||[]).push([[0],{105:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),i=t(17),c=t.n(i),s=(t(68),t(69),t(1)),o=function(){return Object(s.jsx)("div",{className:"sticky",children:Object(s.jsxs)("nav",{className:"navbar navbar-expand-lg",children:[Object(s.jsx)("a",{className:"navbar-brand",href:"#",children:Object(s.jsx)("img",{className:"brand-logo",src:"https://1000logos.net/wp-content/uploads/2020/08/Booking_Com_logo_PNG17.png",alt:""})}),Object(s.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(s.jsx)("span",{className:"navbar-toggler-icon"})}),Object(s.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNavAltMarkup",children:Object(s.jsxs)("div",{className:"navbar-nav",children:[Object(s.jsx)("a",{className:"nav-item nav-link active",href:"/register",children:"Register"}),Object(s.jsx)("a",{className:"nav-item nav-link",href:"/login",children:"Login"})]})})]})})},l=t(32),d=t(7),j=t(3),b=(t(71),t(109)),m=t(110),p=t(108),g=function(e){return e.toLocaleString("ru-RU",{style:"currency",currency:"EUR"})},h=function(e){var a=e.hotel;console.log("hotel",a.name);var t=Object(r.useState)(!1),n=Object(j.a)(t,2),i=n[0],c=n[1],o=function(){return c(!1)};return Object(s.jsx)("div",{children:Object(s.jsxs)("div",{className:"row bs",children:[Object(s.jsx)("div",{className:"col-md-5",children:Object(s.jsx)("img",{src:a.img,alt:"",className:"smallimg"})}),Object(s.jsxs)("div",{className:"col-md-7",children:[Object(s.jsxs)("h1",{children:[a.name," ",a.stars,"*"]}),Object(s.jsxs)("p",{children:["Location: ",a.location]}),Object(s.jsxs)("p",{children:["Services: ",a.services.join(", ")]}),Object(s.jsxs)("p",{children:["Rating: ",a.rating.toFixed(1)]}),Object(s.jsxs)("p",{children:["Price from: ",g(a.price)]}),Object(s.jsxs)("div",{style:{float:"right"},children:[Object(s.jsx)(l.b,{to:"/book/".concat(a.id),children:Object(s.jsx)("button",{className:"show-more-btn btn btn-primary m-2",children:"Book now"})}),Object(s.jsx)("button",{className:"show-more-btn btn btn-primary",onClick:function(){return c(!0)},children:"View more ..."})]})]}),Object(s.jsxs)(b.a,{show:i,onHide:o,size:"lg",children:[Object(s.jsx)(b.a.Header,{children:Object(s.jsx)(b.a.Title,{children:a.name})}),Object(s.jsxs)(b.a.Body,{children:[Object(s.jsx)(m.a,{prevLabel:"",nextLabel:"",children:a.img.map((function(e){return Object(s.jsx)(m.a.Item,{children:Object(s.jsx)("img",{className:"d-block w-100 bigimg",src:e,alt:""})},e)}))}),Object(s.jsx)("p",{children:a.description})]}),Object(s.jsx)(b.a.Footer,{children:Object(s.jsx)(p.a,{className:"btn btn-danger",variant:"secondary",onClick:o,children:"Close"})})]})]})})},u=[{id:"1",name:"INNSIDE Palma Bosque",persons:2,price:99,stars:4,rating:8.5,location:"Mallorca",comentary:"",lat:39.56691504622483,lng:2.6259714557131595,services:["restaurant","wifi","parking","air conditioner","gym","pool","breakfast"],filters:{restaurant:!0,wifi:!0,pool:!0,parking:!0,"air conditioner":!0,spa:!1,bar:!1,gym:!0,breakfast:!0},oferta:!0,recomendado:!0,img:["https://cf.bstatic.com/images/hotel/max1024x768/216/216165441.jpg"]},{id:"2",name:"GPRO Valparaiso Palace Hotel & SPA",persons:3,price:116,stars:5,rating:8.7,location:"Mallorca",comentary:"",lat:39.555737563510725,lng:2.6194336692029796,services:["restaurant","wifi","parking","air conditioner","gym","pool","breakfast","spa"],filters:{restaurant:!0,wifi:!0,pool:!0,parking:!0,"air conditioner":!0,spa:!0,bar:!1,gym:!0,breakfast:!0},oferta:!1,recomendado:!1,img:["https://media-cdn.tripadvisor.com/media/photo-s/0a/c6/d6/c4/gpro-valparaiso-palace.jpg"]},{id:"3",name:"Abelay",persons:4,price:69,stars:2,rating:7.3,location:"Mallorca",comentary:"",lat:39.58287838596287,lng:2.6549075692037736,services:["restaurant","wifi","parking","gym","breakfast"],filters:{restaurant:!0,wifi:!0,pool:!1,parking:!0,"air conditioner":!1,spa:!1,bar:!1,gym:!0,breakfast:!0},oferta:!0,recomendado:!1,img:["https://foto-origin.hrsstatic.com/foto/0/7/2/7//teaser_072735.jpg"]},{id:"4",name:"Amic Horizonte",persons:5,price:45,stars:3,rating:7,location:"Mallorca",comentary:"",lat:39.555929391042476,lng:2.6216264557128475,services:["restaurant","wifi","parking","air conditioner","gym","pool","breakfast"],filters:{restaurant:!0,wifi:!0,pool:!0,parking:!0,"air conditioner":!0,spa:!1,bar:!1,gym:!0,breakfast:!0},oferta:!1,recomendado:!1,img:["https://ofertasfindeano.com/wp-content/uploads/2016/09/Amic-Horizonte-1.jpg"]},{id:"5",name:"Sant Francesc Hotel Singular",persons:2,price:168,stars:5,rating:9.5,location:"Mallorca",comentary:"",lat:39.56921818017396,lng:2.652678071060803,services:["restaurant","wifi","parking","air conditioner","gym","pool","bar","breakfast","spa"],filters:{restaurant:!0,wifi:!0,pool:!0,parking:!0,"air conditioner":!0,spa:!0,bar:!0,breakfast:!0,gym:!0},oferta:!1,recomendado:!0,img:["https://cf.bstatic.com/images/hotel/max1280x900/146/146937606.jpg"]},{id:"6",name:"Hotel Meli\xe1 Mar\xeda Pita",persons:4,price:57,stars:4,rating:8.3,location:"Galicia",comentary:"",lat:43.37560065119445,lng:-8.402761715329996,services:["restaurant","wifi","parking","air conditioner","breakfast"],filters:{restaurant:!0,wifi:!0,pool:!1,parking:!0,"air conditioner":!0,spa:!1,bar:!1,gym:!1,breakfast:!0},oferta:!0,recomendado:!1,img:["https://cdn.atrapalo.com/hoteles/picture/l/22/4/1/206927166.jpg"]},{id:"7",name:"Hotel NH Collection Santiago de Compostela",persons:6,price:168,stars:5,rating:9.5,location:"Galicia",comentary:"",lat:42.88973467416019,lng:-8.543313386510711,services:["restaurant","wifi","parking","air conditioner","gym","pool","bar","breakfast","spa"],filters:{restaurant:!0,wifi:!0,pool:!0,parking:!0,"air conditioner":!0,spa:!0,bar:!0,gym:!0,breakfast:!0},oferta:!1,recomendado:!0,img:["https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/37/05/88/nh-collection-santiago.jpg?w=900&h=-1&s=1"]},{id:"8",name:"Barcel\xf3 Ourense",persons:3,price:63,stars:4,rating:8.9,location:"Galicia",comentary:"",lat:42.342332390728416,lng:-7.864267488384447,services:["restaurant","wifi","parking","air conditioner","breakfast"],filters:{restaurant:!1,wifi:!0,pool:!1,parking:!0,"air conditioner":!0,spa:!1,bar:!1,gym:!1,breakfast:!0},oferta:!1,recomendado:!1,img:["https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Barcelona_-_Estaci%C3%B3n_de_Sants_y_Hotel_Barcel%C3%B3_Sants_1.jpg/1200px-Barcelona_-_Estaci%C3%B3n_de_Sants_y_Hotel_Barcel%C3%B3_Sants_1.jpg"]},{id:"9",name:"Capitol Boutique Hotel",persons:2,price:50,stars:3,rating:8.5,location:"Galicia",comentary:"",lat:42.876834261208884,lng:-8.543256273020974,services:["wifi","parking","air conditioner","bar","breakfast"],filters:{restaurant:!1,wifi:!0,pool:!1,parking:!0,"air conditioner":!0,spa:!1,bar:!0,gym:!1,breakfast:!0},oferta:!0,recomendado:!1,img:["https://x.cdrst.com/foto/hotel-sf/59815/granderesp/capitol-boutique-hotel-general-9733a16.jpg"]},{id:"10",name:"Xinzo",persons:2,price:55,stars:2,rating:7.8,location:"Galicia",comentary:"",lat:42.06067735786035,lng:-7.7264047307201,services:["restaurant","wifi","parking","air conditioner","bar","breakfast"],filters:{restaurant:!0,wifi:!0,pool:!1,parking:!0,"air conditioner":!0,spa:!1,bar:!0,gym:!1,breakfast:!0},oferta:!1,recomendado:!0,img:["https://m02.tury.ru/hotel/90/9034255/9794014_700.jpg"]}],f=t(39),O=t.n(f),x=function(e){var a=e.onPageChange,t=e.itemsCount,r=e.pageSize,n=e.currentPage,i=Math.ceil(t/r);if(1===i)return null;var c=O.a.range(1,i+1);return Object(s.jsx)("nav",{children:Object(s.jsx)("ul",{className:"pagination",children:c.map((function(e){return Object(s.jsx)("li",{className:"mt-4 page-item "+(e===n?"active":""),children:Object(s.jsx)("a",{className:"page-link",role:"button",onClick:function(){return a(e)},children:e})},e)}))})})};var v,k=function(){return Object(s.jsx)("div",{children:Object(s.jsx)("div",{className:"alert alert-danger",role:"alert",children:"Something went wrong, please try again later."})})},y=t(61),w=t(62),N=t.n(w),S=t(48),_=function(){var e=Object(r.useState)(!0),a=Object(j.a)(e,2),t=a[0],n=(a[1],Object(S.css)(v||(v=Object(y.a)(["\n    display: block;\n    margin: 0 auto;\n    margin-top: 150px;\n  "]))));return Object(s.jsx)("div",{className:"sweet-loading",children:Object(s.jsx)(N.a,{color:"#003580",css:n,loading:t,size:100})})},C=function(){var e=Object(r.useState)([]),a=Object(j.a)(e,2),t=a[0],n=a[1],i=Object(r.useState)(),c=Object(j.a)(i,2),o=c[0],l=c[1],d=Object(r.useState)(),b=Object(j.a)(d,2),m=(b[0],b[1],Object(r.useState)(1)),p=Object(j.a)(m,2),g=p[0],f=p[1];Object(r.useEffect)((function(){l(!0),window.setTimeout((function(){n(u),l(!1)}),2e3)}),[]),console.log(u),Object(r.useEffect)((function(){f(1)}),[]);var v=t.length;console.log("Count:",v);var y=function(e,a,t){var r=(a-1)*t;return O()(e).slice(r).take(t).value()}(t,g,3);console.log("hotelsCrop",y);return console.log("currentPage",g),Object(s.jsxs)("div",{className:"container",children:[Object(s.jsx)("div",{className:"row justify-content-center mt-5 ",children:o?Object(s.jsx)(_,{}):y.length>=1?y.map((function(e){return Object(s.jsx)(s.Fragment,{children:Object(s.jsx)("div",{className:"col-md-9 mt-3",children:Object(s.jsx)(h,{hotel:e})},e.id)})})):Object(s.jsx)(k,{})}),Object(s.jsx)("div",{className:"d-flex justify-content-center",children:Object(s.jsx)(x,{itemsCount:v,pageSize:3,onPageChange:function(e){f(e),window.scrollTo(0,0)},currentPage:g})})]})},B=t(50),P=t.n(B),H=t(63),M=function(e){var a=e.match,t=Object(r.useState)(!0),n=Object(j.a)(t,2),i=n[0],c=n[1],o=Object(r.useState)(),l=Object(j.a)(o,2),d=(l[0],l[1],Object(r.useState)()),b=Object(j.a)(d,2),m=b[0],p=b[1];return Object(r.useEffect)((function(){function e(){return e=Object(H.a)(P.a.mark((function e(){return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c(!0),window.setTimeout((function(){u.map((function(e){return e.id===a.params.hotelId?p(e):""})),c(!1)}),2e3);case 2:case"end":return e.stop()}}),e)}))),e.apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(s.jsx)("div",{className:"m-5",children:i?Object(s.jsx)(_,{}):m?Object(s.jsx)("div",{children:Object(s.jsxs)("div",{className:"row justify-content-center mt-5 bs",children:[Object(s.jsxs)("div",{className:"col-md-6",children:[Object(s.jsx)("h1",{children:m.name}),Object(s.jsx)("img",{src:m.img,alt:"",className:"bigimg"})]}),Object(s.jsxs)("div",{className:"col-md-5",children:[Object(s.jsxs)("div",{style:{textAlign:"right"},children:[Object(s.jsx)("h1",{children:"Booking Details"}),Object(s.jsx)("hr",{}),Object(s.jsxs)("b",{children:[Object(s.jsx)("p",{children:"User:"}),Object(s.jsx)("p",{children:"From date:"}),Object(s.jsx)("p",{children:"To date:"})]})]}),Object(s.jsxs)("div",{style:{textAlign:"right"},children:[Object(s.jsx)("h1",{children:"Amount"}),Object(s.jsx)("hr",{}),Object(s.jsxs)("b",{children:[Object(s.jsx)("p",{children:"Total days:"}),Object(s.jsxs)("p",{children:["Rent per day: ",g(m.price)]}),Object(s.jsx)("h1",{children:"Total amount:"})]})]}),Object(s.jsx)("div",{style:{float:"right"},children:Object(s.jsx)("button",{className:"show-more-btn btn btn-primary",children:"Pay now"})})]})]})}):Object(s.jsx)(k,{})})};var A=function(){return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)(o,{}),Object(s.jsxs)(l.a,{children:[Object(s.jsx)(d.a,{path:"/home",exact:!0,component:C}),Object(s.jsx)(d.a,{path:"/book/:hotelId",exact:!0,component:M})]})]})},T=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,111)).then((function(a){var t=a.getCLS,r=a.getFID,n=a.getFCP,i=a.getLCP,c=a.getTTFB;t(e),r(e),n(e),i(e),c(e)}))};c.a.render(Object(s.jsx)(n.a.StrictMode,{children:Object(s.jsx)(A,{})}),document.getElementById("root")),T()},68:function(e,a,t){},69:function(e,a,t){}},[[105,1,2]]]);
//# sourceMappingURL=main.cc6bd03e.chunk.js.map