(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{120:function(e,t,a){e.exports=a(158)},157:function(e,t,a){},158:function(e,t,a){"use strict";a.r(t);var n={};a.r(n),a.d(n,"dictionariesStore",function(){return tt}),a.d(n,"moviesStore",function(){return at});var r,c=a(0),o=a.n(c),l=a(9),i=a.n(l),s=a(68),u=a(24),m=a(111),p=a(225),b=a(217),g=a(27),d=a(31),f=a(59),v=a(56),h=a(58),j=a(32),y=a(161),O=a(215),E=a(219),w=a(216),x=a(43),k=a(19),P=a(199),N=a(45),_=a(112),S=a(222),C=a(72),G=a.n(C),M=a(194),B=a(196),I=a(197),Y=a(198),R=function(e){return c.createElement(M.a,null,c.createElement(B.a,null,e.results.map(function(e){return c.createElement(I.a,{key:e.id},c.createElement(Y.a,null,c.createElement("img",{src:"https://image.tmdb.org/t/p/w500".concat(e.poster_path),alt:"",height:"240px"})),c.createElement(Y.a,{component:"th",scope:"row"},e.title),c.createElement(Y.a,null,e.overview),c.createElement(Y.a,null,G()(e.release_date).format("DD.MM.YYYY")),c.createElement(Y.a,null,e.vote_average))})))},z=Object(u.b)("moviesStore")(r=Object(u.c)(r=function(e){function t(){var e,a;Object(g.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(f.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(r)))).handleChangePage=function(e,t){a.props.moviesStore.getNowPlayingMovies(t+1)},a}return Object(h.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.moviesStore;200!==Object(k.get)(e,"nowPlayingMovies.status")&&e.getNowPlayingMovies()}},{key:"render",value:function(){var e=this.props.moviesStore.nowPlayingMovies;return c.createElement(P.a,null,c.createElement(N.a,{component:"div",style:{padding:24}},200===e.status&&c.createElement(_.a,null,c.createElement(R,{results:e.results}),c.createElement(S.a,{component:"div",rowsPerPageOptions:[0],count:e.total_results,rowsPerPage:e.results.length,page:e.page-1,backIconButtonProps:{"aria-label":"Previous Page"},nextIconButtonProps:{"aria-label":"Next Page"},onChangePage:this.handleChangePage}))))}}]),t}(c.Component))||r)||r,D=a(15),F=a.n(D),A=a(44),L=a(25),U=a(210),W=a(213),V=a(214),J=a(212),H=a(62),T=a.n(H),q="https://api.themoviedb.org/3",K=function(){var e=Object(L.a)(F.a.mark(function e(t){var a,n,r;return F.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("getNowPlayingMovies"),e.next=3,T.a.get("".concat(q,"/movie/now_playing?api_key=440220d48afb156283f60fe68cbb2920&language=ru-RU&page=").concat(t));case 3:return a=e.sent,n=a.status,r=a.data,e.abrupt("return",Object(A.a)({status:n},r));case 7:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),Q=function(){var e=Object(L.a)(F.a.mark(function e(t,a){var n,r,c,o,l,i,s,u=arguments;return F.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=u.length>2&&void 0!==u[2]?u[2]:"",e.prev=1,console.log("getRandomMoviesList"),e.next=5,T.a.get("".concat(q,"/discover/movie?api_key=440220d48afb156283f60fe68cbb2920&language=ru-RU\n      &include_adult=true&page=").concat(Object(k.random)(1,1e3),"&release_date.gte=").concat(t[0],"&release_date.lte=").concat(t[1],"\n      &vote_average.gte=").concat(a[0],"&vote_average.lte=").concat(a[1],"&with_genres=").concat(n));case 5:if(r=e.sent,c=r.status,o=r.data,console.log(c,o),!(o.page>o.total_pages)){e.next=17;break}return e.next=12,T.a.get("".concat(q,"/discover/movie?api_key=440220d48afb156283f60fe68cbb2920&language=ru-RU\n        &include_adult=true&page=").concat(Object(k.random)(1,o.total_pages),"&release_date.gte=").concat(t[0],"&release_date.lte=").concat(t[1],"\n        &vote_average.gte=").concat(a[0],"&vote_average.lte=").concat(a[1],"&with_genres=").concat(n));case 12:return l=e.sent,i=l.status,s=l.data,console.log(i,s),e.abrupt("return",Object(A.a)({status:c},s));case 17:return e.abrupt("return",Object(A.a)({status:c},o));case 20:return e.prev=20,e.t0=e.catch(1),console.log(e.t0),e.abrupt("return",e.t0);case 24:case"end":return e.stop()}},e,null,[[1,20]])}));return function(t,a){return e.apply(this,arguments)}}(),X=function(){var e=Object(L.a)(F.a.mark(function e(){var t,a,n;return F.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("getGenresList"),e.next=3,T.a.get("".concat(q,"/genre/movie/list?api_key=440220d48afb156283f60fe68cbb2920&language=ru-RU"));case 3:return t=e.sent,a=t.status,n=t.data,console.log({status:a,data:n}),e.abrupt("return",Object(A.a)({status:a},n));case 8:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),Z=function(){var e=Object(L.a)(F.a.mark(function e(t){var a,n;return F.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("getMovieActorsAndCrew"),e.next=3,T.a.get("".concat(q,"/movie/").concat(t,"/credits?api_key=440220d48afb156283f60fe68cbb2920"));case 3:return a=e.sent,n=a.data,console.log(n),e.abrupt("return",n);case 7:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),$=a(201),ee=a(224),te=a(223),ae=a(202),ne=a(203),re=a(218),ce=a(220),oe=Object(y.a)(function(e){return{root:{display:"flex",flexWrap:"wrap"},formControl:{margin:e.spacing(1),minWidth:30,width:"100%"}}}),le={PaperProps:{style:{maxHeight:224,width:250}}};function ie(e){var t=e.genres,a=e.selectedGenres,n=e.setSelectedGenres,r=oe();return o.a.createElement("div",{className:r.root},o.a.createElement(ae.a,{className:r.formControl},o.a.createElement(ee.a,{htmlFor:"select-multiple-checkbox"},"\u0416\u0430\u043d\u0440\u044b"),o.a.createElement(re.a,{multiple:!0,value:a,onChange:function(e){n(e.target.value)},input:o.a.createElement($.a,{id:"select-multiple-checkbox"}),renderValue:function(e){return e.join(", ")},MenuProps:le},t.map(function(e){return o.a.createElement(te.a,{key:e.name,value:e.name},o.a.createElement(ce.a,{checked:a.indexOf(e.name)>-1,color:"primary"}),o.a.createElement(ne.a,{primary:e.name}))}))))}var se=a(85),ue=a(3),me=a(204),pe=a(205),be=a(206),ge=a(207),de=a(208),fe=a(209),ve=a(200),he=a(211),je=a(86),ye=a(108),Oe=a.n(ye),Ee=Object(y.a)(function(e){return{card:{height:"auto",display:"flex",flexDirection:"row"},media:{width:"50%",height:"570px"},info:{display:"flex",flexDirection:"column",width:"50%"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},avatar:{backgroundColor:je.a[500]}}});function we(e){var t=e.movie,a=e.getGenresNamesByIds,n=Ee(),r=t.cast||[],l=o.a.useState(!1),i=Object(j.a)(l,2),s=i[0],u=i[1];return Object(c.useEffect)(function(){return u(!1)},[t]),o.a.createElement(o.a.Fragment,null,o.a.createElement(me.a,{className:n.card},o.a.createElement(pe.a,{className:n.media,image:"https://image.tmdb.org/t/p/w500".concat(t.poster_path),title:t.title}),o.a.createElement("div",{className:n.info},o.a.createElement(be.a,{avatar:o.a.createElement(ge.a,{className:n.avatar},t.vote_average),title:t.title,subheader:G()(t.release_date).format("DD.MM.YYYY")}),o.a.createElement(de.a,null,o.a.createElement(N.a,{variant:"body2",color:"textSecondary",component:"p"},a(t.genre_ids))),o.a.createElement(de.a,null,r.map(function(e,t){return t<15&&o.a.createElement(N.a,{variant:"body2",color:"textSecondary",component:"p",key:e.id},e.name)})),o.a.createElement(fe.a,null,o.a.createElement(ve.a,{className:Object(ue.a)(n.expand,Object(se.a)({},n.expandOpen,s)),onClick:function(){u(!s)},"aria-expanded":s,"aria-label":"Show more",disabled:!t.overview},o.a.createElement(Oe.a,null))))),!!t.overview&&o.a.createElement(o.a.Fragment,null,o.a.createElement("br",null),o.a.createElement(U.a,{container:!0,spacing:5,justify:"center"},o.a.createElement(U.a,{item:!0,xs:12},o.a.createElement(_.a,null,o.a.createElement(he.a,{in:s,timeout:"auto",unmountOnExit:!0},o.a.createElement(N.a,{paragraph:!0},t.overview)))))))}var xe=a(221),ke=Object(y.a)({root:{width:"100%",margin:"auto"}});function Pe(e){var t=e.yearRange,a=e.handleYearRangeChange,n=e.minYear,r=e.maxYear,c=ke(),l=[{value:n,label:n},{value:n+10,label:n+10},{value:n+20,label:n+20},{value:n+30,label:n+30},{value:n+40,label:n+40},{value:r,label:r}];return o.a.createElement("div",{className:c.root},o.a.createElement(N.a,{id:"range-slider",gutterBottom:!0},"\u0413\u043e\u0434 \u0438\u0437\u0434\u0430\u043d\u0438\u044f"),o.a.createElement(xe.a,{value:t,onChange:a,valueLabelDisplay:"auto","aria-labelledby":"range-slider",min:n,max:r,marks:l}))}var Ne=Object(y.a)({root:{width:"100%",margin:"auto"}}),_e=[{value:0,label:0},{value:1,label:1},{value:2,label:2},{value:3,label:3},{value:4,label:4},{value:5,label:5},{value:6,label:6},{value:7,label:7},{value:8,label:8},{value:9,label:9},{value:10,label:10}];function Se(e){var t=e.voteRange,a=e.setVoteRange,n=Ne();return o.a.createElement("div",{className:n.root},o.a.createElement(N.a,{id:"range-slider",gutterBottom:!0},"\u041e\u0446\u0435\u043d\u043a\u0430"),o.a.createElement(xe.a,{value:t,onChange:function(e,t){a(t)},valueLabelDisplay:"auto",min:0,max:10,marks:_e}))}var Ce,Ge=1970,Me=(new Date).getFullYear(),Be=Object(y.a)({root:{display:"flex",alignItems:"center"},wrapper:{position:"relative"},buttonSuccess:{backgroundColor:J.a[500],"&:hover":{backgroundColor:J.a[700]}},fabProgress:{color:J.a[500],position:"absolute",top:-6,left:-6,zIndex:1},buttonProgress:{color:J.a[500],position:"absolute",top:"50%",right:"5px",marginTop:-12,marginLeft:-12}});function Ie(e){var t=e.genres,a=e.getGenresIdsByNames,n=e.getGenresNamesByIds,r=Be(),l=Object(c.useState)([]),i=Object(j.a)(l,2),s=i[0],u=i[1],m=o.a.useState(!1),p=Object(j.a)(m,2),b=p[0],g=p[1],d=Object(c.useState)([Ge,Me]),f=Object(j.a)(d,2),v=f[0],h=f[1],y=Object(c.useState)([0,10]),O=Object(j.a)(y,2),E=O[0],w=O[1],x=Object(c.useState)(null),_=Object(j.a)(x,2),S=_[0],C=_[1],G=function(){var e=Object(L.a)(F.a.mark(function e(){var t,n,r,c,o;return F.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return g(!0),t=a(s),e.next=4,Q(v,E,t);case 4:if(n=e.sent,r=n.results,!(c=r[Object(k.random)(0,r.length-1)])||!c.id){e.next=13;break}return e.next=10,Z(c.id);case 10:e.t0=e.sent,e.next=14;break;case 13:e.t0={};case 14:o=e.t0,console.log(Object(A.a)({},c,o)),C(Object(A.a)({},c,o)),g(!1);case 18:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)(function(){function e(){return(e=Object(L.a)(F.a.mark(function e(){return F.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G();case 2:case"end":return e.stop()}},e)}))).apply(this,arguments)}!function(){e.apply(this,arguments)}()},[]),o.a.createElement(P.a,null,o.a.createElement(N.a,{component:"div",style:{padding:24}},o.a.createElement(U.a,{container:!0,spacing:5,justify:"center"},o.a.createElement(U.a,{item:!0,xs:5},o.a.createElement(ie,{genres:t,selectedGenres:s,setSelectedGenres:u})),o.a.createElement(U.a,{item:!0,xs:5},o.a.createElement(Se,{voteRange:E,setVoteRange:w}))),o.a.createElement(U.a,{container:!0,spacing:5,justify:"center"},o.a.createElement(U.a,{item:!0,xs:10},o.a.createElement(Pe,{yearRange:v,handleYearRangeChange:function(e,t){h(t)},minYear:Ge,maxYear:Me}))),o.a.createElement(U.a,{container:!0,spacing:5,justify:"center"},o.a.createElement(U.a,{item:!0,xs:8},o.a.createElement("div",{className:r.wrapper},o.a.createElement(W.a,{fullWidth:!0,color:"primary",variant:"contained",onClick:G,disabled:b},"\u041d\u0410\u0419\u0422\u0418"),b&&o.a.createElement(V.a,{size:24,className:r.buttonProgress})))),S&&o.a.createElement(U.a,{container:!0,spacing:5,justify:"center"},o.a.createElement(U.a,{item:!0,xs:8},o.a.createElement(we,{movie:S,getGenresNamesByIds:n})))))}var Ye=Object(u.b)("dictionariesStore")(Ce=Object(u.c)(Ce=function(e){function t(){return Object(g.a)(this,t),Object(f.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props.dictionariesStore,t=e.genres,a=e.getGenresIdsByNames,n=e.getGenresNamesByIds;return c.createElement(Ie,{genres:t,getGenresIdsByNames:a,getGenresNamesByIds:n})}}]),t}(c.Component))||Ce)||Ce,Re=Object(y.a)({root:{padding:"15px"}}),ze=Object.freeze({"/":0,"/nowplaying":1});var De,Fe,Ae,Le,Ue,We,Ve,Je,He,Te,qe,Ke=Object(x.e)(function(e){var t=e.location,a=Re(),n=o.a.useState(ze[t.pathname]||0),r=Object(j.a)(n,2),c=r[0],l=r[1];return o.a.createElement(o.a.Fragment,null,o.a.createElement(O.a,{position:"static",color:"primary",variant:"fullWidth",classes:a},o.a.createElement(E.a,{value:c,onChange:function(e,t){l(t)},indicatorColor:"secondary",textColor:"secondary",scrollButtons:"auto",centered:!0},o.a.createElement(w.a,{label:"\u0421\u043b\u0443\u0447\u0430\u0439\u043d\u044b\u0439 \u0444\u0438\u043b\u044c\u043c",component:s.b,to:"/"}),o.a.createElement(w.a,{label:"\u0412 \u043f\u0440\u043e\u043a\u0430\u0442\u0435",component:s.b,to:"/nowplaying"}))),o.a.createElement(x.a,{exact:!0,path:"/",component:Ye}),o.a.createElement(x.a,{exact:!0,path:"/nowplaying",component:z}))}),Qe=c.lazy(function(){return Promise.resolve({default:function(){return null}})}),Xe=Object(u.b)("moviesStore")(De=Object(u.b)("dictionariesStore")(De=Object(u.c)(De=function(e){function t(){return Object(g.a)(this,t),Object(f.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.props.dictionariesStore.fetchGenres()}},{key:"render",value:function(){return c.createElement(c.Fragment,null,c.createElement(c.Suspense,{fallback:null},c.createElement(Qe,null)),c.createElement(Ke,null))}}]),t}(c.Component))||De)||De)||De,Ze=a(33),$e=a(34),et=(a(106),a(11)),tt=new(Fe=function e(){Object(g.a)(this,e),Object(Ze.a)(this,"genres",Ae,this),Object(Ze.a)(this,"fetchGenres",Le,this),Object(Ze.a)(this,"setGenres",Ue,this),Object(Ze.a)(this,"getGenresIdsByNames",We,this),Object(Ze.a)(this,"getGenresNamesByIds",Ve,this),this.genres=[]},Ae=Object($e.a)(Fe.prototype,"genres",[et.k],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Le=Object($e.a)(Fe.prototype,"fetchGenres",[et.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return Object(L.a)(F.a.mark(function t(){var a,n;return F.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,X();case 2:a=t.sent,n=a.genres,e.setGenres(Object(k.sortBy)(n,["name"])||[]);case 5:case"end":return t.stop()}},t)}))}}),Ue=Object($e.a)(Fe.prototype,"setGenres",[et.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t){e.genres=t}}}),We=Object($e.a)(Fe.prototype,"getGenresIdsByNames",[et.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t){return Object(k.map)(t,function(t){return Object(k.get)(Object(k.find)(e.genres,{name:t}),"id")}).join(",")}}}),Ve=Object($e.a)(Fe.prototype,"getGenresNamesByIds",[et.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t){return Object(k.map)(t,function(t){return Object(k.get)(Object(k.find)(e.genres,{id:t}),"name")}).join(", ")}}}),Fe),at=new(Je=function e(){Object(g.a)(this,e),Object(Ze.a)(this,"nowPlayingMovies",He,this),Object(Ze.a)(this,"getNowPlayingMovies",Te,this),Object(Ze.a)(this,"setNowPlayingMovies",qe,this),this.nowPlayingMovies={}},He=Object($e.a)(Je.prototype,"nowPlayingMovies",[et.k],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Te=Object($e.a)(Je.prototype,"getNowPlayingMovies",[et.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return Object(L.a)(F.a.mark(function t(){var a,n,r=arguments;return F.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a=r.length>0&&void 0!==r[0]?r[0]:1,t.next=3,K(a);case 3:n=t.sent,e.setNowPlayingMovies(n);case 5:case"end":return t.stop()}},t)}))}}),qe=Object($e.a)(Je.prototype,"setNowPlayingMovies",[et.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t){e.nowPlayingMovies=t}}}),Je),nt=(a(157),Object(m.a)({palette:{primary:{main:"#3A2E39"},secondary:{main:"#F2E6D7"},text:{secondary:"#C1B8AC"},background:{default:"#FAFAF6"}}}));i.a.render(o.a.createElement(u.a,n,o.a.createElement(s.a,null,o.a.createElement(p.a,{theme:nt},o.a.createElement(b.a,null),o.a.createElement(Xe,null)))),document.getElementById("root"))}},[[120,1,2]]]);
//# sourceMappingURL=main.21b2172f.chunk.js.map