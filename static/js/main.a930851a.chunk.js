(this["webpackJsonppracticing-react"]=this["webpackJsonppracticing-react"]||[]).push([[0],{10:function(e,t,n){e.exports=n(18)},15:function(e,t,n){},16:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(7),o=n.n(c),s=(n(15),n(8)),u=n(9),i=n(1),l=n(2),p=n(4),b=n(3),m=n(5),f=(n(16),function(e){function t(){return Object(i.a)(this,t),Object(p.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return a.a.createElement("div",null,this.props.children,a.a.createElement("span",{className:this.getBadgeClassNames()},this.formatText()),a.a.createElement("button",{className:"btn btn-secondary  btn-sm",onClick:function(){return e.props.onIncrease(e.props.counter)}},"Increase"),a.a.createElement("button",{className:"btn btn-danger m-2 btn-sm",onClick:function(){return e.props.onDelete(e.props.counter.id)}},"Delete"))}},{key:"getBadgeClassNames",value:function(){return"badge m-2 badge-"+(0===this.props.counter.value?"warning":"primary")}},{key:"formatText",value:function(){var e=this.props.counter.value;return 0===e?"Zero":e}}]),t}(r.Component)),h=function(e){function t(){return Object(i.a)(this,t),Object(p.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.onReset,n=e.onDelete,r=e.onIncrease,c=e.counters;return a.a.createElement("div",null,a.a.createElement("button",{onClick:t,className:"btn btn-secondary btn-sm m2"},"reset"),c.map((function(e){return a.a.createElement(f,{key:e.id,onDelete:n,onIncrease:r,counter:e},a.a.createElement("h3",null,"counter #",e.id))})))}}]),t}(r.Component),v=function(e){function t(){return Object(i.a)(this,t),Object(p.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return a.a.createElement("nav",{class:"navbar navbar-light bg-light"},a.a.createElement("a",{class:"navbar-brand",href:"#"},this.props.totalCounters))}}]),t}(r.Component);function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var d=function(e){function t(){var e,n;Object(i.a)(this,t);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(n=Object(p.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(a)))).state={counters:[{id:1,value:4},{id:2,value:0},{id:3,value:5},{id:4,value:1}]},n.IncreaseValue=function(e){var t=Object(u.a)(n.state.counters),r=t.indexOf(e);t[r]=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(n,!0).forEach((function(t){Object(s.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e),t[r].value++,n.setState({counters:t})},n.resetValue=function(){var e=n.state.counters.map((function(e){return e.value=0,e}));n.setState({counters:e})},n.deleteCounter=function(e){var t=n.state.counters.filter((function(t){return t.id!==e}));n.setState({counters:t})},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(v,{totalCounters:this.state.counters.filter((function(e){return e.value>0})).length}),a.a.createElement("main",{className:"container"},a.a.createElement(h,{counters:this.state.counters,onReset:this.resetValue,onIncrease:this.IncreaseValue,onDelete:this.deleteCounter})))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(17);o.a.render(a.a.createElement(d,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[10,1,2]]]);
//# sourceMappingURL=main.a930851a.chunk.js.map