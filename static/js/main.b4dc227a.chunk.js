(this["webpackJsonpreact-hon-app"]=this["webpackJsonpreact-hon-app"]||[]).push([[0],{51:function(e,a,t){e.exports=t.p+"static/media/hon-header.6187ebaf.jpg"},62:function(e,a,t){e.exports=t(91)},67:function(e,a,t){},90:function(e,a,t){},91:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(7),c=t.n(r),o=(t(67),t(20)),i=t(22),s=function(){return l.a.createElement("ul",{className:"right"},l.a.createElement("li",null,l.a.createElement(o.c,{to:"/"},"Log Out")),l.a.createElement("li",null,l.a.createElement(o.c,{to:"/",className:"btn btn-floating red lighten-2"},"BL")))},m=function(){return l.a.createElement("nav",{className:"nav-wrapper grey darken-3"},l.a.createElement("div",{className:"container"},l.a.createElement(o.b,{to:"/",className:"brand-logo"},"Heroes Of Newerth"),l.a.createElement(s,null)))},u=t(51),d=t.n(u),f=t(121),h=function(){return l.a.createElement("div",{className:"container"},l.a.createElement("form",{className:"input-field",noValidate:!0,autoComplete:"off"},l.a.createElement(f.a,{id:"filled-basic",label:"Username",variant:"filled"})),l.a.createElement("form",{className:"input-field",noValidate:!0,autoComplete:"off"},l.a.createElement(f.a,{id:"filled-basic",label:"Password",variant:"filled"})))},p=t(52),E=t(53),b=t(33),v=t(56),g=t(55),k=t(122),N=t(54),w=t.n(N),C=function(e){Object(v.a)(t,e);var a=Object(g.a)(t);function t(){var e;return Object(p.a)(this,t),(e=a.call(this)).state={username:""},e.handleClick=e.handleClick.bind(Object(b.a)(e)),e}return Object(E.a)(t,[{key:"handleClick",value:function(){var e=this;console.log("TEST"),w.a.get("http://api.heroesofnewerth.com/player_statistics/public/accountid/1345861/?token=9PGJSPX85LYHSIA9").then((function(a){return e.setState({username:a})}))}},{key:"render",value:function(){return l.a.createElement("div",{className:"container"},l.a.createElement("form",{className:"search-field",noValidate:!0,autoComplete:"off"},l.a.createElement(f.a,{id:"outlined-basic",fullWidth:!0,margin:"normal",label:"Username"})),l.a.createElement(k.a,{variant:"contained",onClick:this.handleClick},"Search"),l.a.createElement("p",null,this.state.username))}}]),t}(l.a.PureComponent);t(90);var O=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(m,null),l.a.createElement(i.c,null,l.a.createElement(i.a,{path:"/signin",component:h})),l.a.createElement("img",{src:d.a,alt:"header",className:"center"}),l.a.createElement(C,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(o.a,null,l.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[62,1,2]]]);
//# sourceMappingURL=main.b4dc227a.chunk.js.map