(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[3],{70:function(e,t,a){"use strict";t.a=a.p+"static/media/defaultImg.2e01288c.jpg"},74:function(e,t,a){e.exports={Link:"MovieDetPageLinks_Link__1HluY",ActiveLink:"MovieDetPageLinks_ActiveLink__-6hT1 MovieDetPageLinks_Link__1HluY"}},75:function(e,t,a){e.exports={details:"MovieDetailsPage_details__2AaO8",title:"MovieDetailsPage_title__2z450",release:"MovieDetailsPage_release__20Jsk",genres:"MovieDetailsPage_genres__Jvt7q",genres__item:"MovieDetailsPage_genres__item__howUR",overview:"MovieDetailsPage_overview__31Sk0",details__img:"MovieDetailsPage_details__img__2YuRK",goBackButton:"MovieDetailsPage_goBackButton__24h_5"}},81:function(e,t,a){"use strict";a.r(t);var s=a(22),c=a(0),i=a(2),n=a(9),r=a(13),o=a(74),l=a.n(o),j=a(1),b=function(){var e=Object(i.i)().url,t=Object(i.g)();return Object(j.jsxs)("nav",{children:[Object(j.jsx)(r.c,{to:{pathname:"".concat(e,"/cast"),state:{from:t.state?t.state.from:"/",label:"back to movies"}},exact:!0,className:l.a.Link,activeClassName:l.a.ActiveLink,children:"Cast"}),Object(j.jsx)(r.c,{to:{pathname:"".concat(e,"/reviews"),state:{from:t.state?t.state.from:"/",label:"back to movies"}},className:l.a.Link,activeClassName:l.a.ActiveLink,children:"Reviews"})]})},u=a(25),v=a(23),_=a(70),d=a(75),m=a.n(d),h=Object(c.lazy)((function(){return a.e(0).then(a.bind(null,78))})),O=Object(c.lazy)((function(){return a.e(5).then(a.bind(null,79))}));t.default=function(){var e,t,a,r,o=Object(c.useState)(null),l=Object(s.a)(o,2),d=l[0],g=l[1],p=Object(i.h)().movie_id,x=Object(i.f)(),f=Object(i.g)(),k=Object(c.useRef)(null!==(e=null===f||void 0===f||null===(t=f.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/"),w=Object(c.useRef)(null!==(a=null===f||void 0===f||null===(r=f.state)||void 0===r?void 0:r.search)&&void 0!==a?a:"");Object(c.useEffect)((function(){N()}),[p]);var N=function(){Object(v.a)(p).then((function(e){return g(e)})).catch((function(e){return n.b.error("Sorry, no reviews found")}))},L=Object(c.useCallback)((function(){x.push({pathname:k.current,search:w.current})}),[x]);return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("button",{type:"button",className:m.a.goBackButton,onClick:L,children:" Go Back"}),d&&Object(j.jsxs)("div",{className:m.a.details,children:[Object(j.jsx)("h1",{className:m.a.title,children:d.original_title}),Object(j.jsxs)("p",{className:m.a.title,children:["Release date: ",d.release_date]}),Object(j.jsxs)("p",{className:m.a.genres,children:["Genres:",Object(j.jsx)("br",{}),Object(j.jsx)("span",{className:m.a.genres__item,children:d.genres.map((function(e){var t=e.id,a=e.name;return Object(j.jsx)("span",{children:"".concat(a,", ")},t)}))})]}),Object(j.jsx)("img",{src:d.backdrop_path?"https://image.tmdb.org/t/p/w500/".concat(d.backdrop_path):_.a,alt:"movie",className:m.a.details__img}),Object(j.jsxs)("p",{className:m.a.genres,children:["Production companies:",Object(j.jsx)("br",{}),Object(j.jsx)("span",{children:d.production_companies.map((function(e){var t=e.id,a=e.name,s=e.origin_country;return Object(j.jsx)("span",{className:m.a.genres__item,children:"".concat(a," ").concat(s&&"(".concat(s,")"),", ")},t)}))})]}),Object(j.jsxs)("p",{className:m.a.genres,children:["Overview:",Object(j.jsx)("br",{}),Object(j.jsx)("span",{className:m.a.overview,children:d.overview})]}),Object(j.jsx)(b,{}),Object(j.jsxs)(c.Suspense,{fallback:Object(j.jsx)(u.a,{}),children:[Object(j.jsx)(i.a,{path:"/movies/:movie_id/cast",children:Object(j.jsx)(h,{})}),Object(j.jsx)(i.a,{path:"/movies/:movie_id/reviews",children:Object(j.jsx)(O,{})})]})]})]})}}}]);
//# sourceMappingURL=movie-details-page.05ac63d4.chunk.js.map