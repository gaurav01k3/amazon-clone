(this["webpackJsonpamazon-clone"]=this["webpackJsonpamazon-clone"]||[]).push([[0],{57:function(e,c,t){},58:function(e,c,t){},59:function(e,c,t){},70:function(e,c,t){},71:function(e,c,t){},72:function(e,c,t){},73:function(e,c,t){},74:function(e,c,t){},76:function(e,c,t){},77:function(e,c,t){},97:function(e,c,t){},99:function(e,c,t){"use strict";t.r(c);var s=t(3),i=t.n(s),n=t(25),a=t.n(n),r=(t(57),t(49)),l=t(11),j=(t(58),t(59),t(50)),o=t.n(j),d=t(51),b=t.n(d),h=t(6),O=t(2),m=Object(s.createContext)(),x=function(e){var c=e.reducer,t=e.initialState,i=e.children;return Object(O.jsx)(m.Provider,{value:Object(s.useReducer)(c,t),children:i})},u=function(){return Object(s.useContext)(m)},_=t(37),p=(_.a.initializeApp({apiKey:"AIzaSyAz8R7MGqezPGX6Fl7KiN3NeU3MyIoAFXI",authDomain:"challenge-80484.firebaseapp.com",projectId:"challenge-80484",storageBucket:"challenge-80484.appspot.com",messagingSenderId:"245754693367",appId:"1:245754693367:web:3c3e0de0f7d264eb3835f2",measurementId:"G-QSH8FLWEH1"}).firestore(),_.a.auth()),g=function(){var e=u(),c=Object(l.a)(e,2),t=c[0],s=t.basket,i=t.user;c[1];return Object(O.jsxs)("div",{className:"header",children:[Object(O.jsx)(h.b,{to:"/",children:Object(O.jsx)("div",{className:"header__logo",children:Object(O.jsx)("img",{src:"https://storage.googleapis.com/sm-studio-temp/trace/175d2b2d-1f86-4b35-b412-06c7ae61bb7b.png?f=38f1a1f725d002a2cf0caff187bdf4e5",alt:""})})}),Object(O.jsxs)("div",{className:"header__search",children:[Object(O.jsx)("input",{type:"text",className:"header__searchInput"}),Object(O.jsx)(o.a,{className:"header__searchIcon"})]}),Object(O.jsxs)("div",{className:"header__nav",children:[Object(O.jsx)(h.b,{to:!i&&"/login",children:Object(O.jsxs)("div",{onClick:function(){i&&p.signOut()},className:"header__option",children:[Object(O.jsx)("span",{className:"header__optionLineOne",children:i?i.email:"Hello Guest"}),Object(O.jsx)("span",{className:"header__optionLineTwo",children:i?"Log-out":"Sign-In"})]})}),Object(O.jsx)(h.b,{to:"/",children:Object(O.jsxs)("div",{className:"header__option",children:[Object(O.jsx)("span",{className:"header__optionLineOne",children:"returns"}),Object(O.jsx)("span",{className:"header__optionLineTwo",children:"&orders"})]})}),Object(O.jsx)(h.b,{to:"/",children:Object(O.jsxs)("div",{className:"header__option",children:[Object(O.jsx)("span",{className:"header__optionLineOne",children:"Your"}),Object(O.jsx)("span",{className:"header__optionLineTwo",children:"Prime"})]})}),Object(O.jsx)(h.b,{to:"/checkout",children:Object(O.jsxs)("div",{className:"header__optionBasket",children:[Object(O.jsx)("span",{className:"header__basketCount",children:null===s||void 0===s?void 0:s.length}),Object(O.jsx)(b.a,{className:"header__cartIcon"})]})})]})]})},v=(t(70),t(71),t(28)),f=t.n(v),N=function(e){var c=e.id,t=e.title,s=e.image,i=e.price,n=e.rating,a=u(),r=Object(l.a)(a,2),j=(r[0],r[1]);return Object(O.jsxs)("div",{className:"product",children:[Object(O.jsxs)("div",{className:"product__info",children:[Object(O.jsx)("p",{className:"product__title",children:t}),Object(O.jsxs)("p",{className:"product__price",children:[Object(O.jsx)("small",{children:"$"}),Object(O.jsx)("strong",{children:i})]}),Object(O.jsx)("div",{className:"product__rating",children:Array(n).fill().map((function(e,c){return Object(O.jsx)("p",{children:Object(O.jsx)(f.a,{})})}))})]}),Object(O.jsx)("img",{src:s,alt:""}),Object(O.jsx)("button",{onClick:function(){j({type:"ADD_TO_BASKET",item:{id:c,title:t,image:s,price:i,rating:n}})},children:"Add to Cart"})]})},A=function(){return Object(O.jsx)("div",{className:"home",children:Object(O.jsxs)("div",{className:"home__container",children:[Object(O.jsx)("img",{className:"home__image",src:"https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2020/X-site/Multititle/Aug/1500x600_Hero-Tall_np._CB404803728_.jpg",alt:""}),Object(O.jsxs)("div",{className:"home__row",children:[Object(O.jsx)(N,{id:"283687275",title:"Boya BYM1 Omnidirectional Lavalier Condenser Microphone with 20ft Audio Cable (Black)",price:1e4,image:"https://m.media-amazon.com/images/I/41UYenF+lnL._AC_SR250,230_.jpg",rating:5}),Object(O.jsx)(N,{id:"283623275",title:"Vandelay Infrared Thermometer - 3 years Sensor Warranty - MADE in INDIA",price:10,image:"https://images-na.ssl-images-amazon.com/images/I/51yhH82KvZL._SL1280_.jpg",rating:5}),Object(O.jsx)(N,{id:"283623275",title:"Vandelay Infrared Thermometer - 3 years Sensor Warranty - MADE in INDIA",price:10,image:"https://images-na.ssl-images-amazon.com/images/I/51yhH82KvZL._SL1280_.jpg",rating:5})]}),Object(O.jsxs)("div",{className:"home__row",children:[Object(O.jsx)(N,{id:"28323275",title:"Gaming chair\r\n",price:10,image:"https://images-eu.ssl-images-amazon.com/images/I/71KFirs5cWL._AC_UL200_SR150,200_.jpg",rating:5}),Object(O.jsx)(N,{id:"223244275",title:"DiSano All Natural Peanut Butter, Crunchy, 30% Protein, Unsweetened, Gluten Free, 1 Kg",price:10,image:"https://images-na.ssl-images-amazon.com/images/I/61szCyA-vBS._AC_SL1280_.jpg",rating:5}),Object(O.jsx)(N,{id:"123324543",title:"boAt Rockerz 400 Bluetooth On-Ear Headphone with Mic(Black/Blue)",price:10,image:"https://images-na.ssl-images-amazon.com/images/I/61TqvJ3mYPL._AC_SL1500_.jpg",rating:5})]}),Object(O.jsxs)("div",{className:"home__row",children:[Object(O.jsx)(N,{id:"2323653435",title:"Vandelay Infrared Thermometer - 3 years Sensor Warranty - MADE in INDIA",price:10,image:"https://images-eu.ssl-images-amazon.com/images/G/31/img21/PCA/GW/tile1_PC_1x-HEALTH2._SY304_CB670262824_.jpg",rating:5}),Object(O.jsx)(N,{id:"223244275",title:"DiSano All Natural Peanut Butter, Crunchy, 30% Protein, Unsweetened, Gluten Free, 1 Kg",price:10,image:"https://images-na.ssl-images-amazon.com/images/I/61szCyA-vBS._AC_SL1280_.jpg",rating:5}),Object(O.jsx)(N,{id:"123324543",title:"boAt Rockerz 400 Bluetooth On-Ear Headphone with Mic(Black/Blue)",price:10,image:"https://images-na.ssl-images-amazon.com/images/I/61TqvJ3mYPL._AC_SL1500_.jpg",rating:5})]}),Object(O.jsxs)("div",{className:"home__row",children:[Object(O.jsx)(N,{id:"223244275",title:"DiSano All Natural Peanut Butter, Crunchy, 30% Protein, Unsweetened, Gluten Free, 1 Kg",price:10,image:"https://images-na.ssl-images-amazon.com/images/I/61szCyA-vBS._AC_SL1280_.jpg",rating:5}),Object(O.jsx)(N,{id:"123324543",title:"boAt Rockerz 400 Bluetooth On-Ear Headphone with Mic(Black/Blue)",price:10,image:"https://images-na.ssl-images-amazon.com/images/I/61TqvJ3mYPL._AC_SL1500_.jpg",rating:5})]})]})})},k=t(10);t(72),t(73);var y=function(e){var c=e.id,t=e.title,s=e.image,i=e.price,n=e.rating,a=u(),r=Object(l.a)(a,2),j=(r[0].basket,r[1]);return Object(O.jsxs)("div",{className:"checkoutProduct",children:[Object(O.jsx)("img",{className:"checkoutProduct__image",src:s,alt:""}),Object(O.jsxs)("div",{className:"checkoutProduct__info",children:[Object(O.jsx)("p",{className:"checkoutProduct__title",children:t}),Object(O.jsxs)("p",{className:"checkoutProduct__price",children:[Object(O.jsx)("small",{children:"$"}),Object(O.jsx)("strong",{children:i})]}),Object(O.jsx)("div",{className:"checkoutProduct__rating",children:Array(n).fill().map((function(e,c){return Object(O.jsx)("p",{children:Object(O.jsx)(f.a,{})})}))}),Object(O.jsx)("button",{onClick:function(){j({type:"REMOVE_FROM_BASKET",id:c})},children:"Remove from Cart"})]})]})},C=(t(74),t(34)),S=t.n(C),B=t(38),z=t(22),I=function(e){return null===e||void 0===e?void 0:e.reduce((function(e,c){return c.price+e}),0)},w=function(e,c){switch(c.type){case"ADD_TO_BASKET":return Object(z.a)(Object(z.a)({},e),{},{basket:[].concat(Object(B.a)(e.basket),[c.item])});case"REMOVE_FROM_BASKET":for(var t=0;t<e.basket.length;t++)if(e.basket[t].id===c.id){e.basket.splice(t,1);break}return Object(z.a)(Object(z.a)({},e),{},{basket:Object(B.a)(e.basket)});case"SET_USER":return Object(z.a)(Object(z.a)({},e),{},{user:c.user});default:return e}},P=function(){var e=Object(k.f)(),c=u(),t=Object(l.a)(c,2),s=t[0].basket;t[1];return Object(O.jsxs)("div",{className:"subtotal",children:[Object(O.jsx)(S.a,{renderText:function(e){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("p",{children:["Subtotal (",s.length," items): ",Object(O.jsx)("strong",{children:e})]}),Object(O.jsxs)("small",{className:"subtotal__gift",children:[Object(O.jsx)("input",{type:"checkbox"}),"This order is a gift"]})]})},decimalScale:2,value:I(s),displayType:"text",thousandSeparator:!0,prefix:"$"}),Object(O.jsx)("button",{onClick:function(c){return e.push("/payment")},className:"subtotal__button",children:"Proceed to checkout"})]})},L=function(){var e=u(),c=Object(l.a)(e,2),t=c[0],s=t.basket,i=t.user;c[1];return Object(O.jsxs)("div",{className:"checkout",children:[Object(O.jsxs)("div",{className:"ckeckout__left",children:[Object(O.jsx)("img",{src:"https://328897-1008310-2-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2019/12/Amazon-Banner-Ad-Example-1-1.jpg",alt:"",className:"checkout__ad"}),Object(O.jsxs)("div",{children:[Object(O.jsxs)("h3",{children:["Hello, ",null===i||void 0===i?void 0:i.email]}),Object(O.jsx)("h2",{className:"checkout__title",children:"Shopping Basket"}),s.map((function(e){return Object(O.jsx)(y,{id:e.id,title:e.title,image:e.image,price:e.price,rating:e.rating})}))]})]}),Object(O.jsx)("div",{className:"checkout__right",children:Object(O.jsx)(P,{})})]})},E=(t(76),function(){var e=Object(k.f)(),c=Object(s.useState)(""),t=Object(l.a)(c,2),i=t[0],n=t[1],a=Object(s.useState)(""),r=Object(l.a)(a,2),j=r[0],o=r[1];return Object(O.jsxs)("div",{className:"login",children:[Object(O.jsx)(h.b,{to:"/",children:Object(O.jsx)("img",{className:"login__logo",src:"https://www.acisolutions.net/wp-content/uploads/2019/09/amazon-logo-vector-png-amazon-logo-vector-512.png",alt:""})}),Object(O.jsxs)("div",{className:"login__container",children:[Object(O.jsx)("h1",{children:"Sign-In"}),Object(O.jsxs)("form",{children:[Object(O.jsx)("h5",{children:"E-mail"}),Object(O.jsx)("input",{type:"text",value:i,onChange:function(e){return n(e.target.value)}}),Object(O.jsx)("h5",{children:"Password"}),Object(O.jsx)("input",{type:"password",value:j,onChange:function(e){return o(e.target.value)}})]}),Object(O.jsx)("button",{type:"submit",onClick:function(c){c.preventDefault(),p.signInWithEmailAndPassword(i,j).then((function(c){e.push("/")})).catch((function(e){return alert(e.message)}))},className:"login__signInButton",children:"Sign-In"}),Object(O.jsxs)("p",{children:["By continuing, you agree to Amazon's ",Object(O.jsx)("strong",{children:"CLONE"}),Object(O.jsx)("span",{className:"login__span",children:" Conditions of Use"})," and",Object(O.jsx)("span",{className:"login__span",children:" Privacy Notice."})]})]}),Object(O.jsx)("p",{children:"New to Amazon?"}),Object(O.jsx)("button",{onClick:function(c){c.preventDefault(),p.createUserWithEmailAndPassword(i,j).then((function(c){c&&e.push("/")})).catch((function(e){return alert(e.message)}))},className:"login__registerButton",children:"Create an Amazon account"})]})}),T=(t(77),t(40),t(78),function(){var e=u(),c=Object(l.a)(e,2),t=c[0],s=t.basket,i=t.user;c[1];return Object(O.jsx)("div",{className:"payment",children:Object(O.jsxs)("div",{className:"payment__container",children:[Object(O.jsxs)("h1",{children:["Checkout( ",Object(O.jsxs)(h.b,{to:"/checkout",children:[null===s||void 0===s?void 0:s.length," items"]})," )"]}),Object(O.jsxs)("div",{className:"payment__section",children:[Object(O.jsx)("div",{className:"payment__title",children:Object(O.jsx)("h3",{children:"Delivery address"})}),Object(O.jsxs)("div",{className:"payment__address",children:[Object(O.jsx)("p",{children:null===i||void 0===i?void 0:i.email}),Object(O.jsx)("p",{children:"123 street lane"}),Object(O.jsx)("p",{children:"Los Angeles CA"})]})]}),Object(O.jsxs)("div",{className:"payment__section",children:[Object(O.jsx)("div",{className:"payment__title",children:Object(O.jsx)("h3",{children:"Review Items and delivery"})}),Object(O.jsx)("div",{className:"payment__items",children:s.map((function(e){return Object(O.jsx)(y,{id:e.id,title:e.title,image:e.image,price:e.price,rating:e.rating})}))})]})]})})}),D=(t(96),t(97),function(){return Object(O.jsxs)("div",{children:[Object(O.jsxs)("div",{className:"footer",children:[Object(O.jsxs)("div",{className:"footer__links",children:[Object(O.jsxs)("div",{className:"footer__column",children:[Object(O.jsx)("h3",{children:"Get to Know Us"}),Object(O.jsxs)("ul",{children:[Object(O.jsx)(h.b,{children:Object(O.jsx)("li",{children:"About Us"})}),Object(O.jsx)(h.b,{children:Object(O.jsx)("li",{children:"Careers"})}),Object(O.jsx)(h.b,{children:Object(O.jsx)("li",{children:"Press Releases"})}),Object(O.jsx)(h.b,{children:Object(O.jsx)("li",{children:"Amazon Cares"})}),Object(O.jsx)(h.b,{children:Object(O.jsx)("li",{children:"Gift a Smile"})})]})]}),Object(O.jsxs)("div",{className:"footer__column",children:[Object(O.jsx)("h3",{children:"Connect with Us"}),Object(O.jsxs)("ul",{children:[Object(O.jsx)(h.b,{children:Object(O.jsx)("li",{children:"Facebook"})}),Object(O.jsx)(h.b,{children:Object(O.jsx)("li",{children:"Twitter"})}),Object(O.jsx)(h.b,{children:Object(O.jsx)("li",{children:"Instagram"})})]})]}),Object(O.jsxs)("div",{className:"footer__column",children:[Object(O.jsx)("h3",{children:"Make Money with Us"}),Object(O.jsxs)("ul",{children:[Object(O.jsx)(h.b,{children:Object(O.jsx)("li",{children:"Sell on Amazon"})}),Object(O.jsx)(h.b,{children:Object(O.jsx)("li",{children:"Sell under Amazon Accelerator"})}),Object(O.jsx)(h.b,{children:Object(O.jsx)("li",{children:"Amazon Global Selling"})}),Object(O.jsx)(h.b,{children:Object(O.jsx)("li",{children:"Become an Affiliate"})}),Object(O.jsx)(h.b,{children:Object(O.jsx)("li",{children:"Fulfilment by Amazon"})}),Object(O.jsx)(h.b,{children:Object(O.jsx)("li",{children:"Advertise Your Products"})}),Object(O.jsx)(h.b,{children:Object(O.jsx)("li",{children:"Amazon Pay on Merchants"})})]})]}),Object(O.jsxs)("div",{className:"footer__column",children:[Object(O.jsx)("h3",{children:"Let Us Help You"}),Object(O.jsxs)("ul",{children:[Object(O.jsx)(h.b,{children:Object(O.jsx)("li",{children:"COVID-19 and Amazon"})}),Object(O.jsx)(h.b,{children:Object(O.jsx)("li",{children:"Your Account"})}),Object(O.jsx)(h.b,{children:Object(O.jsx)("li",{children:"Returns Centre"})}),Object(O.jsx)(h.b,{children:Object(O.jsx)("li",{children:"100% Purchase Protection"})}),Object(O.jsx)(h.b,{children:Object(O.jsx)("li",{children:"Amazon App Download"})}),Object(O.jsx)(h.b,{children:Object(O.jsx)("li",{children:"Amazon Assistant Download"})}),Object(O.jsx)(h.b,{children:Object(O.jsx)("li",{children:"Help"})})]})]})]}),Object(O.jsxs)("div",{className:"footer__langs",children:[Object(O.jsx)("a",{href:"/",children:Object(O.jsx)("div",{className:"footer__logo",children:Object(O.jsx)("img",{src:"https://storage.googleapis.com/sm-studio-temp/trace/175d2b2d-1f86-4b35-b412-06c7ae61bb7b.png?f=38f1a1f725d002a2cf0caff187bdf4e5",alt:""})})}),Object(O.jsxs)("ul",{children:[Object(O.jsx)("li",{children:"Australia"}),Object(O.jsx)("li",{children:"Brazil"}),Object(O.jsx)("li",{children:"Canada"}),Object(O.jsx)("li",{children:"China"}),Object(O.jsx)("li",{children:"France"}),Object(O.jsx)("li",{children:"Germany"}),Object(O.jsx)("li",{children:"Italy"}),Object(O.jsx)("li",{children:"Japan"}),Object(O.jsx)("li",{children:"Mexico"}),Object(O.jsx)("li",{children:"Netherlands"}),Object(O.jsx)("li",{children:"Polands"}),Object(O.jsx)("li",{children:"Singapore"}),Object(O.jsx)("li",{children:"Spain"}),Object(O.jsx)("li",{children:"Turkey"}),Object(O.jsx)("li",{children:"Kingdom"}),Object(O.jsx)("li",{children:"United States"})]})]})]}),Object(O.jsx)("div",{className:"footer__servicesContainer",children:Object(O.jsxs)("div",{className:"footer__services",children:[Object(O.jsxs)("div",{className:"footer__servicesColumn",children:[Object(O.jsx)("h5",{children:"AbeBooks"}),Object(O.jsx)("div",{children:"Books,art"}),Object(O.jsx)("div",{children:"& collectibles"})]}),Object(O.jsxs)("div",{className:"footer__servicesColumn",children:[Object(O.jsx)("h5",{children:"AbeBooks"}),Object(O.jsx)("div",{children:"Books,art"}),Object(O.jsx)("div",{children:"& collectibles"})]}),Object(O.jsxs)("div",{className:"footer__servicesColumn",children:[Object(O.jsx)("h5",{children:"AbeBooks"}),Object(O.jsx)("div",{children:"Books,art"}),Object(O.jsx)("div",{children:"& collectibles"})]}),Object(O.jsxs)("div",{className:"footer__servicesColumn",children:[Object(O.jsx)("h5",{children:"AbeBooks"}),Object(O.jsx)("div",{children:"Books,art"}),Object(O.jsx)("div",{children:"& collectibles"})]}),Object(O.jsxs)("div",{className:"footer__servicesColumn",children:[Object(O.jsx)("h5",{children:"AbeBooks"}),Object(O.jsx)("div",{children:"Books,art"}),Object(O.jsx)("div",{children:"& collectibles"})]}),Object(O.jsxs)("div",{className:"footer__servicesColumn",children:[Object(O.jsx)("h5",{children:"AbeBooks"}),Object(O.jsx)("div",{children:"Books,art"}),Object(O.jsx)("div",{children:"& collectibles"})]})]})}),Object(O.jsx)("div",{className:"footer__terms",children:Object(O.jsxs)("ul",{children:[Object(O.jsx)("li",{children:"Conditions of Use & Sale"}),Object(O.jsx)("li",{children:"Privacy Notice"}),Object(O.jsx)("li",{children:"Interest-Based Ads"}),Object(O.jsx)("li",{children:"1996-2021, Amazon.com,Inc. or its affiliates"})]})})]})});var M=function(){var e=u(),c=Object(l.a)(e,2);Object(r.a)(c[0]);var t=c[1];return Object(s.useEffect)((function(){p.onAuthStateChanged((function(e){t(e?{type:"SET_USER",user:e}:{type:"SET_USER",user:null})}))}),[]),Object(O.jsx)(h.a,{children:Object(O.jsx)("div",{className:"app",children:Object(O.jsxs)(k.c,{children:[Object(O.jsx)(k.a,{exact:!0,path:"/login",children:Object(O.jsx)(E,{})}),Object(O.jsxs)(k.a,{exact:!0,path:"/checkout",children:[Object(O.jsx)(g,{}),Object(O.jsx)(L,{}),Object(O.jsx)(D,{})]}),Object(O.jsxs)(k.a,{exact:!0,path:"/payment",children:[Object(O.jsx)(g,{}),Object(O.jsx)(T,{}),Object(O.jsx)(D,{})]}),Object(O.jsxs)(k.a,{path:"/",children:[Object(O.jsx)(g,{}),Object(O.jsx)(A,{}),Object(O.jsx)(D,{})]})]})})})},F=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,111)).then((function(c){var t=c.getCLS,s=c.getFID,i=c.getFCP,n=c.getLCP,a=c.getTTFB;t(e),s(e),i(e),n(e),a(e)}))};a.a.render(Object(O.jsx)(i.a.StrictMode,{children:Object(O.jsx)(x,{initialState:{basket:[],user:null},reducer:w,children:Object(O.jsx)(M,{})})}),document.getElementById("root")),F()}},[[99,1,2]]]);
//# sourceMappingURL=main.e7ab7fc2.chunk.js.map