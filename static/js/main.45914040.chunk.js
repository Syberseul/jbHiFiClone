(this.webpackJsonpjbhifi_clone=this.webpackJsonpjbhifi_clone||[]).push([[0],{92:function(n,e,t){"use strict";t.r(e);var i={};t.r(i),t.d(i,"toggleMenuOpen",(function(){return A})),t.d(i,"toggleMenuClose",(function(){return q}));var c={};t.r(c),t.d(c,"getHomeInfo",(function(){return J}));var a,r,o,s,d,l,b,p,x,j,h,m,u,f,_,O,g=t(0),y=t.n(g),w=t(21),v=t.n(w),H=t(23),k=t(18),L=t(5),I=t(25),N=t(42),T=t(43),M="open_menu",C="close_menu",S=t(22),z=Object(S.fromJS)({menuOpen:!1,totalItems:0}),A=function(){return{type:M}},q=function(){return{type:C}},W=t(44),E=t.n(W),D="update_home_data",J=function(){return function(n){E.a.get("https://fakestoreapi.com/products/").then((function(e){var t=e.data;n(function(n){return{type:D,data:n}}(t))})).catch((function(n){console.log(n)}))}},R=Object(S.fromJS)({items:[]}),B=Object(T.combineReducers)({header:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case M:return n.set("menuOpen",!0);case C:return n.set("menuOpen",!1);default:return n}},home:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case D:return n.set("items",e.data);default:return n}}}),F=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||I.b,P=Object(I.c)(B,F(Object(I.a)(N.a))),X=t(3),G=t(4),U=G.b.div(a||(a=Object(X.a)(["\n  width: 100%;\n  max-width: 1100px;\n  margin: auto;\n  padding-top: 5px;\n  background-color: #ffec0f;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n"]))),V=G.b.div(r||(r=Object(X.a)(["\n  display: flex;\n  align-items: center;\n  margin: 5px;\n  font-size: 15px;\n  .__Header__Icon {\n    font-size: 20px;\n    @media only screen and (max-width: 850px) {\n      display: none;\n    }\n  }\n"]))),$=G.b.p(o||(o=Object(X.a)(["\n  text-align: center;\n  cursor: pointer;\n  @media only screen and (max-width: 850px) {\n    display: none;\n  }\n"]))),K=G.b.div(s||(s=Object(X.a)(["\n  margin: 10px 20px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  cursor: pointer;\n  @media only screen and (min-width: 850px) {\n    display: none;\n  }\n"]))),Q=G.b.p(d||(d=Object(X.a)(["\n  text-align: center;\n  font-size: 10px;\n  @media only screen and (min-width: 850px) {\n    display: none;\n  }\n"]))),Y=G.b.div(l||(l=Object(X.a)(["\n  height: 70px;\n  width: 100%;\n  max-width: 1100px;\n  margin: auto;\n  background-color: #ffec0f;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n"]))),Z=G.b.div(b||(b=Object(X.a)(["\n  position: relative;\n  display: flex;\n  align-items: center;\n  flex-direction: row;\n  width: 100%;\n  margin: auto;\n  padding-left: 20px;\n  .__Header__SearchIcon {\n    position: absolute;\n    left: 30px;\n  }\n"]))),nn=G.b.img(p||(p=Object(X.a)(["\n  width: 200px;\n  height: 40px;\n  margin-right: 40px;\n  cursor: pointer;\n  @media only screen and (max-width: 850px) {\n    display: none;\n  }\n"]))),en=G.b.img(x||(x=Object(X.a)(["\n  width: 200px;\n  height: 40px;\n  margin: auto;\n  padding-left: 20px;\n  cursor: pointer;\n  @media only screen and (min-width: 850px) {\n    display: none;\n  }\n"]))),tn=G.b.input.attrs({placeholder:"Search products",type:"search"})(j||(j=Object(X.a)(["\n  height: 40px;\n  width: 100%;\n  padding: 5px;\n  padding-left: 35px;\n  border: none;\n  border-radius: 5px;\n  @media only screen and (max-width: 850px) {\n    margin-right: 20px;\n  }\n"]))),cn=G.b.div(h||(h=Object(X.a)(["\n  display: flex;\n  justify-content: flex-end;\n  width: 100%;\n  padding-left: 20px;\n  padding-right: 5px;\n  .__Header__Link {\n    text-decoration: none;\n    color: #000;\n  }\n  @media only screen and (max-width: 850px) {\n    display: none;\n  }\n"]))),an=G.b.div(m||(m=Object(X.a)(["\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  margin-left: 20px;\n  cursor: pointer;\n  &:hover {\n    color: #555;\n  }\n"]))),rn=G.b.p(u||(u=Object(X.a)(["\n  cursor: pointer;\n"]))),on=G.b.div(f||(f=Object(X.a)(["\n  height: 40px;\n  width: 100%;\n  max-width: 1100px;\n  margin: auto;\n  background-color: #000;\n  line-height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: start;\n  @media only screen and (max-width: 850px) {\n    display: none;\n  }\n"]))),sn=G.b.div(_||(_=Object(X.a)(["\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  .__Header__Line3Icon {\n    font-size: 20px;\n    color: #fff;\n    padding: 5px;\n    margin-left: 20px;\n  }\n  &:hover {\n    background-color: #ffec0f;\n  }\n  &:hover .__Header__Line3Icon {\n    color: #000;\n  }\n  &:hover .__Header__Line3Text {\n    color: #000;\n  }\n"]))),dn=G.b.div(O||(O=Object(X.a)(["\n  color: #fff;\n  margin-right: 20px;\n"]))),ln=t(49),bn=t.n(ln),pn=t(50),xn=t.n(pn),jn=t(51),hn=t.n(jn),mn=t(24),un=t.n(mn),fn=t(29),_n=t.n(fn),On=t(30),gn=t.n(On),yn=t(52),wn=t.n(yn),vn=t(53),Hn=t.n(vn),kn=t(54),Ln=t.n(kn),In=t(55),Nn=t.n(In),Tn=t(56),Mn=t.n(Tn),Cn=t(48),Sn=t.n(Cn),zn=t.p+"static/media/logo.0df215cc.jpg",An=t(1);var qn,Wn,En,Dn,Jn,Rn,Bn,Fn,Pn=Object(H.b)((function(n){return{menuOpen:n.getIn(["header","menuOpen"]),totalItems:n.getIn(["header","totalItems"])}}),(function(n){return{toggleMenuOpen:function(){n(i.toggleMenuOpen())},toggleMenuClose:function(){n(i.toggleMenuClose())}}}))((function(n){var e=n.menuOpen,t=n.toggleMenuClose,i=n.toggleMenuOpen;return Object(An.jsxs)(An.Fragment,{children:[Object(An.jsxs)("nav",{style:{backgroundColor:"#ffec0f"},children:[Object(An.jsxs)(U,{children:[Object(An.jsxs)(K,{className:"__Header__MenuIcon",onClick:!0===e?t:i,children:[Object(An.jsx)(Sn.a,{}),Object(An.jsx)(Q,{children:"Menu"})]}),Object(An.jsxs)(V,{children:[Object(An.jsx)(bn.a,{className:"__Header__Icon"}),Object(An.jsx)($,{children:"Store Finder"})]}),Object(An.jsx)(k.b,{to:"/",children:Object(An.jsx)(en,{src:zn,alt:""})}),Object(An.jsxs)(V,{children:[Object(An.jsx)(xn.a,{className:"__Header__Icon"}),Object(An.jsx)($,{children:"Help & Support"}),Object(An.jsxs)(K,{children:[Object(An.jsx)(_n.a,{}),Object(An.jsx)(Q,{children:"Account"})]}),Object(An.jsxs)(K,{children:[Object(An.jsx)(gn.a,{}),Object(An.jsx)(Q,{children:"Cart"})]})]})]}),Object(An.jsxs)(Y,{children:[Object(An.jsx)(k.b,{to:"/",children:Object(An.jsx)(nn,{src:zn,alt:""})}),Object(An.jsxs)(Z,{children:[Object(An.jsx)(hn.a,{className:"__Header__SearchIcon"}),Object(An.jsx)(tn,{})]}),Object(An.jsxs)(cn,{children:[Object(An.jsx)(k.b,{to:"/wishList",className:"__Header__Link",children:Object(An.jsxs)(an,{children:[Object(An.jsx)(un.a,{}),Object(An.jsx)(rn,{children:"Wish List"})]})}),Object(An.jsx)(k.b,{to:"/login",className:"__Header__Link",children:Object(An.jsxs)(an,{children:[Object(An.jsx)(_n.a,{}),Object(An.jsx)(rn,{children:"My Account"})]})}),Object(An.jsx)(k.b,{to:"/myCart",className:"__Header__Link",children:Object(An.jsxs)(an,{children:[Object(An.jsx)(gn.a,{}),Object(An.jsx)(rn,{children:"My Cart"})]})})]})]})]}),Object(An.jsx)("nav",{style:{backgroundColor:"#000"},children:Object(An.jsxs)(on,{children:[Object(An.jsxs)(sn,{children:[Object(An.jsx)(wn.a,{className:"__Header__Line3Icon"}),Object(An.jsx)(dn,{className:"__Header__Line3Text",children:"Products"})]}),Object(An.jsxs)(sn,{children:[Object(An.jsx)(Hn.a,{className:"__Header__Line3Icon"}),Object(An.jsx)(dn,{className:"__Header__Line3Text",children:"Brands"})]}),Object(An.jsxs)(sn,{children:[Object(An.jsx)(Ln.a,{className:"__Header__Line3Icon"}),Object(An.jsx)(dn,{className:"__Header__Line3Text",children:"Deals & Sales"})]}),Object(An.jsxs)(sn,{children:[Object(An.jsx)(Nn.a,{className:"__Header__Line3Icon"}),Object(An.jsx)(dn,{className:"__Header__Line3Text",children:"Services"})]}),Object(An.jsxs)(sn,{children:[Object(An.jsx)(Mn.a,{className:"__Header__Line3Icon"}),Object(An.jsx)(dn,{className:"__Header__Line3Text",children:"Gift Cards"})]})]})})]})})),Xn=G.b.div(qn||(qn=Object(X.a)(["\n  background-color: #fff;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-direction: column;\n  border: 1px solid #bbb;\n  margin: 20px auto;\n  height: 220px;\n  @media only screen and (max-width: 630px) {\n    width: 100%;\n  }\n  @media only screen and (min-width: 700px) {\n    width: 40%;\n  }\n  @media only screen and (min-width: 1000px) {\n    width: 20%;\n  }\n"]))),Gn=G.b.div(Wn||(Wn=Object(X.a)(["\n  width: 100%;\n  padding: 5px;\n  display: flex;\n  flex-direction: row;\n  justify-content: start;\n  align-items: center;\n"]))),Un=G.b.img(En||(En=Object(X.a)(["\n  width: 60px;\n  height: 60px;\n  margin: 10px 20px;\n"]))),Vn=G.b.div(Dn||(Dn=Object(X.a)(["\n  margin: 5px 20px;\n  display: flex;\n  flex-direction: column;\n  align-items: start;\n  justify-content: start;\n"]))),$n=G.b.p(Jn||(Jn=Object(X.a)(["\n  font-size: 20px;\n  font-weight: bold;\n  margin-bottom: 20px;\n"]))),Kn=G.b.p(Rn||(Rn=Object(X.a)(["\n  line-height: 30px;\n  overflow: hidden;\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n  @media only screen and (max-width: 630px) {\n    font-size: 20px;\n  }\n  @media only screen and (min-width: 700px) {\n    font-size: 15px;\n  }\n  @media only screen and (min-width: 1000px) {\n    font-size: 10px;\n  }\n"]))),Qn=G.b.div(Bn||(Bn=Object(X.a)(["\n  height: 50px;\n  width: 100%;\n  background-color: #ffec0f;\n  position: relative;\n  .__Home__AddToWishListWrapper {\n    &:hover {\n      .__Home__ToolTip {\n        display: block;\n      }\n    }\n  }\n  .__Home__AddToWishList {\n    position: absolute;\n    right: 50px;\n    top: 0;\n    width: 30px;\n    height: 30px;\n    padding: 10px;\n    background-color: #fff;\n    &:hover {\n      color: #cd0000;\n      cursor: pointer;\n    }\n  }\n  .__Home__AddToCart {\n    position: absolute;\n    right: 0;\n    top: 0;\n    width: 30px;\n    height: 30px;\n    padding: 10px;\n    background-color: #000;\n    color: #fff;\n    cursor: pointer;\n    &:hover {\n      background-color: #333;\n    }\n  }\n  .__Home__ToolTip {\n    position: absolute;\n    right: 20px;\n    top: -40px;\n    padding: 10px;\n    border: 1px solid #bbb;\n    border-radius: 10px;\n    box-shadow: 2px 2px rgba(100, 100, 100, 0.5);\n    cursor: default;\n    display: none;\n  }\n"]))),Yn=G.b.p(Fn||(Fn=Object(X.a)(["\n  font-size: 20px;\n  font-weight: bold;\n  color: red;\n  position: absolute;\n  top: -15px;\n  left: 15px;\n  border: 1px solid #000;\n  padding: 8px;\n  background-color: #ffec0f;\n  box-shadow: 2px 2px rgba(0, 0, 0, 1);\n"]))),Zn=t(57),ne=t.n(Zn);var ee,te,ie,ce=function(n){var e=n.item,t=e.title,i=e.price,c=e.image,a=e.category;return Object(An.jsxs)(Xn,{children:[Object(An.jsxs)(Gn,{children:[Object(An.jsx)(Un,{src:c,alt:""}),Object(An.jsxs)(Vn,{children:[Object(An.jsx)($n,{children:a}),Object(An.jsx)(Kn,{children:t})]})]}),Object(An.jsxs)(Qn,{children:[Object(An.jsxs)(Yn,{children:[" $",i]}),Object(An.jsxs)("div",{className:"__Home__AddToWishListWrapper",children:[Object(An.jsx)(un.a,{className:"__Home__AddToWishList"}),Object(An.jsx)("p",{className:"__Home__ToolTip",children:"Add to Wish List"})]}),Object(An.jsx)(ne.a,{className:"\r __Home__AddToCart"})]})]})},ae=G.b.div(ee||(ee=Object(X.a)(["\n  width: 100%;\n  max-width: 1100px;\n  margin: auto;\n"]))),re=G.b.p(te||(te=Object(X.a)(["\n  text-align: center;\n  font-size: 20px;\n  font-style: italic;\n  font-weight: bold;\n  margin: 40px auto 10px;\n"]))),oe=G.b.div(ie||(ie=Object(X.a)(["\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: start;\n"])));var se=Object(H.b)((function(n){return{menuOpen:n.getIn(["header","menuOpen"]),items:n.getIn(["home","items"])}}),(function(n){return{fetchHomeData:function(){n(c.getHomeInfo())}}}))((function(n){var e=n.menuOpen,t=n.items;return Object(g.useEffect)((function(){n.fetchHomeData()}),[]),!1===e?Object(An.jsxs)(ae,{children:[Object(An.jsx)(re,{children:"Recommended for you"}),Object(An.jsx)(oe,{children:t.slice(0,4).map((function(n,e){return Object(An.jsx)(ce,{item:n},e)}))})]}):Object(An.jsx)("div",{children:"This will show when menu is open"})}));var de,le=function(){return Object(An.jsx)(H.a,{store:P,children:Object(An.jsxs)(k.a,{children:[Object(An.jsx)(Pn,{}),Object(An.jsx)(L.a,{path:"/",exact:!0,children:Object(An.jsx)(se,{})}),Object(An.jsx)(L.a,{path:"/wishList",exact:!0,children:"My wish list"}),Object(An.jsx)(L.a,{path:"/login",exact:!0,children:"login"}),Object(An.jsx)(L.a,{path:"/myAccount",children:"my account"}),Object(An.jsx)(L.a,{path:"/myCart",children:"my cart"})]})})},be=Object(G.a)(de||(de=Object(X.a)(["\n  html, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n"])));v.a.render(Object(An.jsxs)(y.a.StrictMode,{children:[Object(An.jsx)(le,{}),Object(An.jsx)(be,{})]}),document.getElementById("root"))}},[[92,1,2]]]);
//# sourceMappingURL=main.45914040.chunk.js.map