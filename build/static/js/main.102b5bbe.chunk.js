(this["webpackJsonpcovid-19-Dashboard"]=this["webpackJsonpcovid-19-Dashboard"]||[]).push([[0],{20:function(e,t,a){e.exports={container:"Cards_container__24HVQ",infected:"Cards_infected__3ZSON",recovered:"Cards_recovered__1_-YZ",deaths:"Cards_deaths__i2pI1"}},208:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(69),o=a.n(c),u=a(5),s=a.n(u),i=a(10),l=a(70),d=a(71),p=a(83),f=a(82),m=a(228),v=a(226),h=a(230),b=a(227),g=a(72),y=a.n(g),C=a(73),E=a.n(C),_=a(74),x=a.n(_),w=function(e){var t=e.className,a=e.cardTitle,r=e.value,c=e.lastUpdate,o=e.cardSubtitle;return n.a.createElement(v.a,{item:!0,xs:12,md:3,component:h.a,className:E()(x.a.card,t)},n.a.createElement(b.a,null,n.a.createElement(m.a,{color:"textSecondary",gutterBottom:!0},a),n.a.createElement(m.a,{variant:"h5",component:"h2"},n.a.createElement(y.a,{start:0,end:r,duration:2.75,separator:","})),n.a.createElement(m.a,{color:"textSecondary"},new Date(c).toDateString()),n.a.createElement(m.a,{variant:"body2",component:"p"},o)))},O=a(20),k=a.n(O),j=function(e){var t=e.data,a=t.confirmed,r=t.recovered,c=t.deaths,o=t.lastUpdate;return a?n.a.createElement("div",{className:k.a.container},n.a.createElement(m.a,{gutterBottom:!0,variant:"h4",component:"h2"},"Global"),n.a.createElement(v.a,{container:!0,spacing:3,justify:"center"},n.a.createElement(w,{className:k.a.infected,cardTitle:"Infected",value:a.value,lastUpdate:o,cardSubtitle:"Active cases from COVID-19."}),n.a.createElement(w,{className:k.a.recovered,cardTitle:"Recovered",value:r.value,lastUpdate:o,cardSubtitle:"Recovered from COVID-19."}),n.a.createElement(w,{className:k.a.deaths,cardTitle:"Deaths",value:c.value,lastUpdate:o,cardSubtitle:"Deaths by COVID-19."}))):"Loading..."},S=a(29),D=a(41),N=a(30),I=a.n(N),U="https://covid19.mathdro.id/api",V=function(){var e=Object(i.a)(s.a.mark((function e(t){var a,r,n,c,o,u,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=U,t&&(a="".concat(U,"/countries/").concat(t)),e.prev=2,e.next=5,I.a.get(a);case 5:return r=e.sent,n=r.data,c=n.confirmed,o=n.recovered,u=n.deaths,i=n.lastUpdate,e.abrupt("return",{confirmed:c,recovered:o,deaths:u,lastUpdate:i});case 14:return e.prev=14,e.t0=e.catch(2),e.abrupt("return",e.t0);case 17:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(t){return e.apply(this,arguments)}}(),B=function(){var e=Object(i.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,I.a.get("https://api.covidtracking.com/v1/us/daily.json");case 3:return t=e.sent,a=t.data,e.abrupt("return",a.map((function(e){return{confirmed:e.positive,recovered:e.recovered,deaths:e.death,date:e.dateChecked}})));case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),A=function(){var e=Object(i.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,I.a.get("".concat(U,"/countries"));case 3:return t=e.sent,a=t.data.countries,e.abrupt("return",a.map((function(e){return e.name})));case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),R=a(79),T=a.n(R),L=function(e){var t=e.data,a=t.confirmed,c=t.recovered,o=t.deaths,u=e.country,l=Object(r.useState)({}),d=Object(S.a)(l,2),p=d[0],f=d[1];Object(r.useEffect)((function(){(function(){var e=Object(i.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B();case 2:t=e.sent,f(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var m=a?n.a.createElement(D.Bar,{data:{labels:["Infected","Recovered","Deaths"],datasets:[{label:"People",backgroundColor:["rgba(0, 0, 255, 0.5)","rgba(0, 255, 0, 0.5)","rgba(255, 0, 0, 0.5)"],data:[a.value,c.value,o.value]}]},options:{legend:{display:!1},title:{display:!0,text:"Current state in ".concat(u)}}}):null,v=p[0]?n.a.createElement(D.Line,{data:{labels:p.map((function(e){var t=e.date;return new Date(t).toLocaleDateString()})),datasets:[{data:p.map((function(e){return e.confirmed})),label:"Infected",borderColor:"#3333ff",fill:!0},{data:p.map((function(e){return e.deaths})),label:"Deaths",borderColor:"red",backgroundColor:"rgba(255, 0, 0, 0.5)",fill:!0},{data:p.map((function(e){return e.recovered})),label:"Recovered",borderColor:"green",backgroundColor:"rgba(0, 255, 0, 0.5)",fill:!0}]}}):null;return n.a.createElement("div",{className:T.a.container},u?m:v)},M=a(231),P=a(229),G=a(80),J=a.n(G),W=function(e){var t=e.handleCountryChange,a=Object(r.useState)([]),c=Object(S.a)(a,2),o=c[0],u=c[1];return Object(r.useEffect)((function(){(function(){var e=Object(i.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=u,e.next=3,A();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),n.a.createElement(M.a,{className:J.a.formControl},n.a.createElement(P.a,{defaultValue:"",onChange:function(e){return t(e.target.value)}},n.a.createElement("option",{value:""},"United States"),o.map((function(e,t){return n.a.createElement("option",{key:t,value:e},e)}))))},Z=a(42),q=a.n(Z),z=a(81),H=a.n(z),K=function(e){Object(p.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(l.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={data:{},country:""},e.handleCountryChange=function(){var t=Object(i.a)(s.a.mark((function t(a){var r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,V(a);case 2:r=t.sent,e.setState({data:r,country:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(i.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,V();case 2:t=e.sent,this.setState({data:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.data,a=e.country;return n.a.createElement("div",{className:q.a.container},n.a.createElement("img",{className:q.a.img,src:H.a,alt:"COVID19"}),n.a.createElement(j,{data:t}),n.a.createElement(W,{handleCountryChange:this.handleCountryChange}),n.a.createElement(L,{data:t,country:a}),n.a.createElement("footer",null,"Built with"," ",n.a.createElement("span",{style:{color:"red",fontSize:"20px"}},"\u2665 "),", by"," ",n.a.createElement("a",{target:"_blank",href:"https://www.linkedin.com/in/monu-kumar/"},"Monu Kumar")))}}]),a}(r.Component);o.a.render(n.a.createElement(K,null),document.getElementById("root"))},42:function(e,t,a){e.exports={container:"App_container__1vW-o",img:"App_img__S0tM-"}},74:function(e,t,a){e.exports={card:"Card_card__3G9yg"}},79:function(e,t,a){e.exports={container:"Chart_container__3voPp"}},80:function(e,t,a){e.exports={formControl:"CountryPicker_formControl__6qNrW"}},81:function(e,t,a){e.exports=a.p+"static/media/coronavirus.49e717b9.jpg"},85:function(e,t,a){e.exports=a(208)}},[[85,1,2]]]);
//# sourceMappingURL=main.102b5bbe.chunk.js.map