(this.webpackJsonpchillhub=this.webpackJsonpchillhub||[]).push([[0],{29:function(e,t,n){e.exports=n.p+"static/media/noposter.34a17caa.png"},40:function(e,t,n){e.exports=n.p+"static/media/loading.e0a0a639.gif"},46:function(e,t,n){e.exports=n(83)},83:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(36),l=n.n(i),o=n(8),u=n(9),c=n(11),s=n(10),p=n(12),d=n(17),m=n(18),f=n(6),g=n.n(f),h=n(16),v=n(2),b=n(1);function x(){var e=Object(v.a)(["\n  margin-top: 30px;\n  display: grid;\n  grid-template-columns: repeat(auto-fill, 150px);\n  grid-gap: 30px;\n"]);return x=function(){return e},e}function E(){var e=Object(v.a)(["\n  font-size: 16px;\n  font-weight: 600;\n  color: #1dd1a1;\n"]);return E=function(){return e},e}function y(){var e=Object(v.a)(["\n  :not(:last-child) {\n    margin-bottom: 55px;\n  }\n"]);return y=function(){return e},e}var _=b.default.div(y()),w=b.default.span(E()),j=b.default.div(x()),O=function(e){var t=e.title,n=e.children;return r.a.createElement(_,null,r.a.createElement(w,null,t),r.a.createElement(j,null,n))},k=n(40),T=n.n(k);function S(){var e=Object(v.a)([""]);return S=function(){return e},e}function C(){var e=Object(v.a)(["\n  height: 100vh;\n  width: 100vw;\n  display: flex;\n  justify-content: center;\n  font-size: 40px;\n  margin-top: 50px;\n"]);return C=function(){return e},e}var z=b.default.div(C()),R=b.default.div(S()),F=function(){return r.a.createElement(z,null,r.a.createElement(R,null,r.a.createElement("img",{src:T.a,alt:"loading..."})," "))};function U(){var e=Object(v.a)(["\n  font-size: 16px;\n  padding: 0px 200px;\n"]);return U=function(){return e},e}function M(){var e=Object(v.a)(["\n  color: whitesmoke;\n  font-weight: 500;\n  display: block;\n  padding: 30px 150px;\n"]);return M=function(){return e},e}function D(){var e=Object(v.a)(["\n  color: whitesmoke;\n  font-weight: 500;\n  display: block;\n  padding: 0px 150px;\n"]);return D=function(){return e},e}function N(){var e=Object(v.a)(["\n  width: 100vw;\n  font-size: 20px;\n"]);return N=function(){return e},e}var I=b.default.div(N()),P=b.default.span(D()),V=b.default.span(M()),B=b.default.p(U()),Y=function(e){var t=e.text;return r.a.createElement(I,null,r.a.createElement(P,null,t),r.a.createElement(V,null,"Suggestions:"),r.a.createElement(B,null," \u2219 Try different keywords"),r.a.createElement(B,null," \u2219 Try usinga movie, TV show title"))};function A(){var e=Object(v.a)(["\n  color: rgba(255, 255, 255, 0.4);\n  font-weight: 600;\n"]);return A=function(){return e},e}function G(){var e=Object(v.a)(["\n  display: block;\n  margin-bottom: 4px;\n  color: rgba(220, 220, 220);\n  font-weight: bold;\n"]);return G=function(){return e},e}function q(){var e=Object(v.a)(["\n  margin-bottom: 5px;\n  position: relative;\n  &:hover {\n    "," {\n      opacity: 0.3;\n    }\n    "," {\n      opacity: 1;\n    }\n  }\n"]);return q=function(){return e},e}function J(){var e=Object(v.a)(["\n  background-image: url(",");\n  height: 150px;\n  background-size: cover;\n  border-radius: 40px;\n  background-position: center center;\n  transition: opacity 0.3s linear;\n"]);return J=function(){return e},e}function L(){var e=Object(v.a)(["\n  bottom: 5px;\n  right: 5px;\n  position: absolute;\n  opacity: 0;\n  transition: opacity 0.3s linear;\n  text-shadow: 0 0 5px #0fe8f1, 0 0 10px #14f10fba, 0 0 15px #14f10fba,\n    0 0 20px #fff, 0 0 35px #fff, 0 0 40px #14f10f78, 0 0 50px #14f10fba,\n    0 0 75px #14f10fb0;\n"]);return L=function(){return e},e}function H(){var e=Object(v.a)(["\n  font-size: 12px;\n"]);return H=function(){return e},e}var K=b.default.div(H()),Q=b.default.span(L()),W=b.default.div(J(),(function(e){return e.bgUrl})),X=b.default.div(q(),W,Q),Z=b.default.span(G()),$=b.default.span(A()),ee=function(e){var t=e.id,a=e.imageUrl,i=e.rating,l=e.title,o=e.year,u=e.isMovie,c=void 0!==u&&u;return r.a.createElement(d.b,{to:c?"/movie/".concat(t):"/show/".concat(t)},r.a.createElement(K,null,r.a.createElement(X,null,r.a.createElement(W,{bgUrl:a?"".concat("https://image.tmdb.org/t/p/w200").concat(a):n(29)}),r.a.createElement(Q,null,r.a.createElement("span",{role:"img","aria-label":"rating"},"\u2b50\ufe0f")," ",i,"/10")),r.a.createElement(Z,null,l.length>15?"".concat(l.substring(0,20),"..."):l),r.a.createElement($,null,o)))},te=n(13),ne=n.n(te);function ae(){var e=Object(v.a)(["\n  padding: 30px 10px 10px 30px;\n  padding-top: 20px;\n  padding-bottom: 90px;\n"]);return ae=function(){return e},e}var re=b.default.div(ae()),ie=function(e){var t=e.nowPlaying,n=e.upComing,a=e.popular,i=e.error,l=e.loading;return r.a.createElement(r.a.Fragment,null,r.a.createElement(ne.a,null,r.a.createElement("title",null,"Movies | Chillhub")),l?r.a.createElement(F,null):r.a.createElement(re,null,r.a.createElement(ne.a,null,r.a.createElement("title",null,"Movies | Chillhub")),t&&t.length>0&&r.a.createElement(O,{title:"Now playing"},t.map((function(e){return r.a.createElement(ee,{key:e.id,id:e.id,title:e.original_title,imageUrl:e.poster_path,rating:e.vote_average,year:e.release_date?e.release_date.substring(0,4):e.first_air_date,isMovie:!0})}))),n&&n.length>0&&r.a.createElement(O,{title:"Upcoming playing"},n.map((function(e){return r.a.createElement(ee,{key:e.id,id:e.id,title:e.original_title,imageUrl:e.poster_path,rating:e.vote_average,year:e.release_date?e.release_date.substring(0,4):e.first_air_date,isMovie:!0})}))),a&&a.length>0&&r.a.createElement(O,{title:"Popular playing"},a.map((function(e){return r.a.createElement(ee,{key:e.id,id:e.id,title:e.original_title,imageUrl:e.poster_path,rating:e.vote_average,year:e.release_date?e.release_date.substring(0,4):e.first_air_date,isMovie:!0})}))),i&&r.a.createElement(Y,{color:"#e74c3c",text:i})))},le=n(42),oe=n.n(le).a.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"10923b261ba94d897ac6b81148314a3f",language:"en-US"}}),ue=function(){return oe.get("movie/now_playing")},ce=function(){return oe.get("movie/upcoming")},se=function(){return oe.get("movie/popular")},pe=function(e){return oe.get("movie/".concat(e),{params:{append_to_response:"videos"}})},de=function(e){return oe.get("search/movie",{params:{query:encodeURIComponent(e)}})},me=function(){return oe.get("tv/top_rated")},fe=function(){return oe.get("tv/popular")},ge=function(){return oe.get("tv/airing_today")},he=function(e){return oe.get("tv/".concat(e),{params:{append_to_response:"videos"}})},ve=function(e){return oe.get("search/tv",{params:{query:encodeURIComponent(e)}})},be=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(c.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={nowPlaying:null,upComing:null,popular:null,error:null,loading:!0},n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=Object(h.a)(g.a.mark((function e(){var t,n,a,r,i,l;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ue();case 3:return t=e.sent,n=t.data.results,e.next=7,ce();case 7:return a=e.sent,r=a.data.results,e.next=11,se();case 11:i=e.sent,l=i.data.results,this.setState({nowPlaying:n,upComing:r,popular:l}),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),this.setState({error:"Your search did not have any matches"});case 19:return e.prev=19,this.setState({loading:!1}),e.finish(19);case 22:case"end":return e.stop()}}),e,this,[[0,16,19,22]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.nowPlaying,n=e.upComing,a=e.popular,i=e.error,l=e.loading;return r.a.createElement(ie,{nowPlaying:t,upComing:n,popular:a,error:i,loading:l})}}]),t}(r.a.Component);function xe(){var e=Object(v.a)(["\n  padding: 30px 10px 10px 30px;\n  padding-top: 20px;\n  padding-bottom: 90px;\n"]);return xe=function(){return e},e}var Ee=b.default.div(xe()),ye=function(e){var t=e.topRated,n=e.popular,a=e.airingToday,i=e.loading,l=e.error;return r.a.createElement(r.a.Fragment,null,r.a.createElement(ne.a,null,r.a.createElement("title",null," TV shows | Chillhub")),i?r.a.createElement(F,null):r.a.createElement(Ee,null,t&&t.length>0&&r.a.createElement(O,{title:"Top Rated Shows"},t.map((function(e){return r.a.createElement(ee,{key:e.id,id:e.id,title:e.name,imageUrl:e.poster_path,rating:e.vote_average,year:e.first_air_date?e.first_air_date.substring(0,4):e.first_air_date})}))),n&&n.length>0&&r.a.createElement(O,{title:"Popular Shows"},n.map((function(e){return r.a.createElement(ee,{key:e.id,id:e.id,title:e.name,imageUrl:e.poster_path,rating:e.vote_average,year:e.first_air_date?e.first_air_date.substring(0,4):e.first_air_date})}))),a&&a.length>0&&r.a.createElement(O,{title:"airingToday Shows"},a.map((function(e){return r.a.createElement(ee,{key:e.id,id:e.id,title:e.name,imageUrl:e.poster_path,rating:e.vote_average,year:e.first_air_date?e.first_air_date.substring(0,4):e.first_air_date})}))),l&&r.a.createElement(Y,{color:"#e74c3c",text:l})))},_e=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(c.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={topRated:null,popular:null,airingToday:null,loading:!0,error:null},n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=Object(h.a)(g.a.mark((function e(){var t,n,a,r,i,l;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,me();case 3:return t=e.sent,n=t.data.results,e.next=7,fe();case 7:return a=e.sent,r=a.data.results,e.next=11,ge();case 11:i=e.sent,l=i.data.results,this.setState({topRated:n,popular:r,airingToday:l}),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),this.setState({error:"Can't find TV information"});case 19:return e.prev=19,this.setState({loading:!1}),e.finish(19);case 22:case"end":return e.stop()}}),e,this,[[0,16,19,22]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.topRated,n=e.popular,a=e.airingToday,i=e.loading,l=e.error;return r.a.createElement(ye,{topRated:t,popular:n,airingToday:a,loading:i,error:l})}}]),t}(r.a.Component);function we(){var e=Object(v.a)(["\n  font-size: 15px;\n  padding: 0px 200px;\n"]);return we=function(){return e},e}function je(){var e=Object(v.a)(["\n  color: whitesmoke;\n  font-weight: 500;\n  display: block;\n  padding: 30px 150px;\n"]);return je=function(){return e},e}function Oe(){var e=Object(v.a)(["\n  color: whitesmoke;\n  font-weight: 500;\n  display: block;\n  padding: 0px 150px;\n"]);return Oe=function(){return e},e}function ke(){var e=Object(v.a)(["\n  width: 100vw;\n  font-size: 20px;\n"]);return ke=function(){return e},e}var Te=b.default.div(ke()),Se=b.default.span(Oe()),Ce=b.default.span(je()),ze=b.default.p(we()),Re=function(e){var t=e.text;return r.a.createElement(Te,null,r.a.createElement(Se,null,t),r.a.createElement(Ce,null,"Suggestions:"),r.a.createElement(ze,null," \u2219 Try different keywords"),r.a.createElement(ze,null," \u2219 Try usinga movie, TV show title"))};function Fe(){var e=Object(v.a)(["\n  all: unset;\n  font-size: 20px;\n  width: 100%;\n"]);return Fe=function(){return e},e}function Ue(){var e=Object(v.a)(["\n  margin-bottom: 50px;\n  width: 100%;\n"]);return Ue=function(){return e},e}function Me(){var e=Object(v.a)(["\n  padding: 30px 10px 10px 30px;\n  padding-top: 20px;\n  padding-bottom: 90px;\n"]);return Me=function(){return e},e}var De=b.default.div(Me()),Ne=b.default.form(Ue()),Ie=b.default.input(Fe()),Pe=function(e){var t=e.movieResults,n=e.tvResults,a=e.searchTerm,i=e.pastTerm,l=e.loading,o=e.error,u=e.handleSubmit,c=e.updateTerm;return r.a.createElement(De,null,r.a.createElement(ne.a,null,r.a.createElement("title",null,"Search | Chillhub")),r.a.createElement(Ne,{onSubmit:u},r.a.createElement(Ie,{placeholder:"Search Movies or TV shows...",value:a,onChange:c})),l?r.a.createElement(F,null):r.a.createElement(r.a.Fragment,null,t&&t.length>0&&r.a.createElement(O,{title:"Movie Results"},t.map((function(e){return r.a.createElement(ee,{key:e.id,id:e.id,title:e.original_title,imageUrl:e.poster_path,rating:e.vote_average,year:e.release_date?e.release_date.substring(0,4):e.first_air_date,isMovie:!0})}))),n&&n.length>0&&r.a.createElement(O,{title:"TV Results"},n.map((function(e){return r.a.createElement(ee,{key:e.id,id:e.id,title:e.name,imageUrl:e.poster_path,rating:e.vote_average,year:e.first_air_date?e.first_air_date.substring(0,4):e.first_air_date})})))),o&&r.a.createElement(Re,{color:"#e74c3c",text:o}),n&&t&&0===n.length&&0===t.length&&r.a.createElement(Y,{text:'Your search for "'.concat(i,'" did not have any matches'),Found:!0,color:"#95a5a6"}))},Ve=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(c.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={movieResults:null,tvResults:null,searchTerm:"",pastTerm:"",loading:!1,error:null},n.handleSubmit=function(e){e.preventDefault();var t=n.state.searchTerm;""!==t&&n.searchByTerm(t)},n.updateTerm=function(e){var t=e.target.value;n.setState({searchTerm:t})},n.searchByTerm=Object(h.a)(g.a.mark((function e(){var t,a,r,i,l;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.state.searchTerm,n.setState({pastTerm:t}),n.setState({loading:!0}),e.prev=3,e.next=6,de(t);case 6:return a=e.sent,r=a.data.results,e.next=10,ve(t);case 10:i=e.sent,l=i.data.results,n.setState({movieResults:r,tvResults:l}),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(3),n.setState({error:"Your search for ".concat(t," did not have any matches. ")});case 18:return e.prev=18,n.setState({loading:!1}),e.finish(18);case 21:case"end":return e.stop()}}),e,null,[[3,15,18,21]])}))),n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.state,t=e.movieResults,n=e.tvResults,a=e.searchTerm,i=e.pastTerm,l=e.loading,o=e.error;return r.a.createElement(Pe,{movieResults:t,tvResults:n,loading:l,error:o,searchTerm:a,pastTerm:i,handleSubmit:this.handleSubmit,updateTerm:this.updateTerm})}}]),t}(r.a.Component),Be=n(43),Ye=n.n(Be);function Ae(){var e=Object(v.a)(["\n  position: fixed;\n  top: 60px;\n  right: 50px;\n  font-size: 40px;\n  opacity: 0.3;\n"]);return Ae=function(){return e},e}var Ge=Object(b.default)(d.b)(Ae()),qe=function(e){var t=e.pathName;return r.a.createElement(Ge,{to:"/".concat(t)},"< Go back ")};function Je(){var e=Object(v.a)(["\n  margin-top: 30px;\n  position: relative;\n"]);return Je=function(){return e},e}function Le(){var e=Object(v.a)(["\n  display: inline-block;\n  position: relative;\n  top: 3px;\n  width: 16px;\n  background-size: cover;\n"]);return Le=function(){return e},e}function He(){var e=Object(v.a)(["\n  margin-top: 30px;\n  font-size: 17px;\n  opacity: 0.7;\n  line-height: 2;\n  width: 70%;\n"]);return He=function(){return e},e}function Ke(){var e=Object(v.a)(["\n  margin: 0 10px;\n"]);return Ke=function(){return e},e}function Qe(){var e=Object(v.a)(["\n  font-size: 15px;\n"]);return Qe=function(){return e},e}function We(){var e=Object(v.a)(["\n  margin: 20px 0;\n"]);return We=function(){return e},e}function Xe(){var e=Object(v.a)(["\n  font-size: 32px;\n  margin-bottom: 10px;\n"]);return Xe=function(){return e},e}function Ze(){var e=Object(v.a)(["\n  width: 70%;\n  margin-left: 10px;\n"]);return Ze=function(){return e},e}function $e(){var e=Object(v.a)(["\n  width: 30%;\n  background-image: url(",");\n  background-position: center center;\n  background-size: cover;\n  height: 100%;\n  border-radius: 80px;\n"]);return $e=function(){return e},e}function et(){var e=Object(v.a)(["\n  display: felx;\n  width: 100%;\n  position: relative;\n  z-index: 1;\n  height: 100%;\n"]);return et=function(){return e},e}function tt(){var e=Object(v.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-image: url(",");\n  background-position: center center;\n  background-size: cover;\n  filter: blur(2px);\n  opacity: 0.5;\n  z-index: 0;\n"]);return tt=function(){return e},e}function nt(){var e=Object(v.a)(["\n  height: calc(100vh - 80px);\n  width: 100%;\n  position: relative;\n  padding: 50px;\n"]);return nt=function(){return e},e}var at=b.default.div(nt()),rt=b.default.div(tt(),(function(e){return e.bgImage})),it=b.default.div(et()),lt=b.default.div($e(),(function(e){return e.bgImage})),ot=b.default.div(Ze()),ut=b.default.h2(Xe()),ct=b.default.div(We()),st=b.default.span(Qe()),pt=b.default.span(Ke()),dt=b.default.p(He()),mt=b.default.div(Le()),ft=b.default.div(Je()),gt=function(e){var t=e.result,a=e.loading,i=e.error;return a?r.a.createElement(r.a.Fragment,null,r.a.createElement(ne.a,null,r.a.createElement("title",null,"Loading | Chillhub")),r.a.createElement(F,null)):i?r.a.createElement(Y,null):r.a.createElement(at,null,r.a.createElement(ne.a,null,r.a.createElement("title",null,t.original_title?t.original_title:t.original_name,"| Chillhub")),r.a.createElement(rt,{bgImage:"".concat("https://image.tmdb.org/t/p/original").concat(t.backdrop_path)}),r.a.createElement(it,null,r.a.createElement(lt,{bgImage:t.poster_path?"".concat("https://image.tmdb.org/t/p/original").concat(t.poster_path):n(29)}),r.a.createElement(ot,null,r.a.createElement(ut,null,t.original_title?t.original_title:t.original_name),r.a.createElement(ct,null,t.release_date||t.first_air_date?r.a.createElement(st,null,t.release_date?t.release_date.substring(0,4):t.first_air_date.substring(0,4)):"  Unknown dates",r.a.createElement(pt,null,"\u2219"),t.runtime>0||t.episode_run_time>0?r.a.createElement(r.a.Fragment,null,r.a.createElement(st,null,t.runtime?t.runtime:t.episode_run_time[0],"min")):"    Unknown minutes",r.a.createElement(pt,null,"\u2219"),t.genres.length>0?r.a.createElement(r.a.Fragment,null,r.a.createElement(st,null,t.genres.map((function(e,n){return n===t.genres.length-1?e.name:"".concat(e.name," / ")})))):" Unknown generes",r.a.createElement(pt,null,"\u2219"),r.a.createElement(mt,null,r.a.createElement("a",{href:t.imdb_id?"https://www.imdb.com/title/".concat(t.imdb_id):"https://www.imdb.com",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:"https://m.media-amazon.com/images/G/01/imdb/images/desktop-favicon-2165806970._CB484110913_.ico",width:"26px",alt:"imdb_icon"}))),t.original_title?r.a.createElement(qe,{pathName:"movie"}):r.a.createElement(qe,{pathName:"tv"})),r.a.createElement(st,null,r.a.createElement(Ye.a,{rating:t.vote_average/2,starRatedColor:"rgb(255, 0, 0)",starDimension:"25px",starSpacing:"3px"})),r.a.createElement(dt,null,t.overview.length>300?"".concat(t.overview.substring(0,200),"..."):t.overview),r.a.createElement(ft,null,t.videos.results.length>0?r.a.createElement("iframe",{title:t.id,id:"youtubePlayer",width:"550",height:"300",src:"https://www.youtube.com/embed/".concat(t.videos.results[0].key)}):'"Youtube trailers not available"'))))},ht=function(e){function t(e){var n;Object(o.a)(this,t),n=Object(c.a)(this,Object(s.a)(t).call(this,e));var a=e.location.pathname;return n.state={result:null,loading:!0,error:null,isMovie:a.includes("/movie/")},n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=Object(h.a)(g.a.mark((function e(){var t,n,a,r,i,l,o,u;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.props,n=t.match.params.id,a=t.history.push,r=this.state.isMovie,i=Number(n),!isNaN(i)){e.next=5;break}return e.abrupt("return",a("/"));case 5:if(l=null,e.prev=6,!r){e.next=14;break}return e.next=10,pe(Number(n));case 10:o=e.sent,l=o.data,e.next=18;break;case 14:return e.next=16,he(Number(n));case 16:u=e.sent,l=u.data;case 18:e.next=23;break;case 20:e.prev=20,e.t0=e.catch(6),this.setState({error:"Can't find anything."});case 23:return e.prev=23,this.setState({loading:!1,result:l}),e.finish(23);case 26:case"end":return e.stop()}}),e,this,[[6,20,23,26]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.result,n=e.loading,a=e.error;return r.a.createElement(gt,{result:t,loading:n,error:a})}}]),t}(r.a.Component);function vt(){var e=Object(v.a)(["\n  height: 50px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return vt=function(){return e},e}function bt(){var e=Object(v.a)(["\n  width: 40px;\n  height: 40px;\n  text-shadow: ",";\n  text-align: center;\n  border-bottom: 2px solid\n    ",";\n  transition: border-bottom 0.5s ease-in-out;\n"]);return bt=function(){return e},e}function xt(){var e=Object(v.a)(["\n  display: flex;\n"]);return xt=function(){return e},e}function Et(){var e=Object(v.a)(["\n  color: white;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 50px;\n  display: flex;\n  align-items: center;\n  z-index: 10;\n  box-shadow: 0px 5px 5px 2px rgba(1, 1, 1, 0.8);\n  background: #000;\n  margin-left: 25px;\n  font-size: 15px;\n"]);return Et=function(){return e},e}var yt=b.default.header(Et()),_t=b.default.ul(xt()),wt=b.default.li(bt(),(function(e){return e.current?"0 0 5px #228DFF, 0 0 10px #228DFF, 0 0 15px #228DFF, 0 0 20px #fff, 0 0 35px #fff, 0 0 40px #228DFF, 0 0 50px #228DFF, 0 0 75px #228DFF":"transparent"}),(function(e){return e.current?"#1dd1a1":"transparent"})),jt=Object(b.default)(d.b)(vt()),Ot=Object(m.g)((function(e){var t=e.location.pathname;return r.a.createElement(yt,null,r.a.createElement(_t,null,r.a.createElement(wt,{current:"/"===t},r.a.createElement(jt,{to:"/"},"Movie")),r.a.createElement(wt,{current:"/tv"===t},r.a.createElement(jt,{to:"/tv"},"TV")),r.a.createElement(wt,{current:"/search"===t},r.a.createElement(jt,{to:"/search"},"search"))))})),kt=function(){return r.a.createElement(d.a,null,r.a.createElement(Ot,null),r.a.createElement(m.d,null,r.a.createElement(m.b,{path:"/",exact:!0,component:be}),r.a.createElement(m.b,{path:"/tv",component:_e}),r.a.createElement(m.b,{path:"/search",component:Ve}),r.a.createElement(m.b,{path:"/movie/:id",component:ht}),r.a.createElement(m.b,{path:"/show/:id",component:ht}),r.a.createElement(m.a,{path:"*",to:"/"})))},Tt=n(44),St=n.n(Tt);function Ct(){var e=Object(v.a)(["\n    ",";\n    a{\n        text-decoration:none;\n        color:inherit;\n    }\n    *{\n        box-sizing:border-box;\n    }\n    body{\n        font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n        font-size:12px;\n        background-color:rgba(20, 20, 20, 1);\n        color:white;\n        padding-top:50px;\n    }\n"]);return Ct=function(){return e},e}var zt=Object(b.createGlobalStyle)(Ct(),St.a),Rt=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(kt,null),r.a.createElement(zt,null))}}]),t}(a.Component);l.a.render(r.a.createElement(Rt,null),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.d9d41b1b.chunk.js.map