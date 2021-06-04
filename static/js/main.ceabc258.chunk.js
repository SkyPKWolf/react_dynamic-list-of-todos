(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){e.exports=n(22)},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(9),c=n.n(s),o=n(5),l=n.n(o),u=n(6),i=n(11),d=n(1),m=n(2),p=n(4),h=n(3);n(18),n(19);function f(){return fetch("".concat("https://mate-api.herokuapp.com","/todos")).then((function(e){if(!e.ok)throw new Error("".concat(e.status," - ").concat(e.statusText));return e.json()}))}var v=n(10),b=n(7),E=n.n(b),_=function(e){var t=e.todo,n=e.selectUser,a=e.userId;return r.a.createElement(r.a.Fragment,null,r.a.createElement("label",null,t.completed?r.a.createElement("input",{type:"checkbox",checked:!0,readOnly:!0}):r.a.createElement("input",{type:"checkbox",disabled:!0}),r.a.createElement("p",null,t.title)),r.a.createElement("button",{className:E()("button TodoList__user-button",{"TodoList__user-button--selected":t.userId===a}),type:"button",onClick:function(){n(t.userId)}},"User #",t.userId))},k=(n(20),function(e){Object(p.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={title:"",status:"All"},e.handleChange=function(t){var n=t.target,a=n.name,r=n.value;e.setState(Object(v.a)({},a,r))},e}return Object(m.a)(n,[{key:"render",value:function(){var e,t=this,n=this.props.todos,a=this.state,s=a.title,c=a.status;switch(c){case"All":e=n;break;case"Completed":e=n.filter((function(e){return!0===e.completed}));break;case"Active":e=n.filter((function(e){return!1===e.completed}))}return r.a.createElement("div",{className:"TodoList"},r.a.createElement("h2",null,"Todos:"),r.a.createElement("input",{name:"title",placeholder:"input todo title",value:s,onChange:this.handleChange}),r.a.createElement("select",{value:c,name:"status",onChange:this.handleChange},r.a.createElement("option",null,"All"),r.a.createElement("option",null,"Completed"),r.a.createElement("option",null,"Active")),r.a.createElement("button",{className:"button",type:"button",onClick:function(){return t.props.shuffleTodos(n)}},"Shuffle"),r.a.createElement("div",{className:"TodoList__list-container"},r.a.createElement("ul",{className:"TodoList__list"},e.filter((function(e){return e.title&&e.title.includes(s)})).map((function(e){return r.a.createElement("li",{key:e.id,className:E()("TodoList__item",{"TodoList__item--checked":e.completed,"TodoList__item--unchecked":!e.completed})},r.a.createElement(_,{todo:e,selectUser:t.props.selectUser,userId:t.props.userId}))})))))}}]),n}(r.a.Component));n(21);function U(e){return fetch("".concat("https://mate-api.herokuapp.com").concat(e)).then((function(e){if(!e.ok)throw new Error("".concat(e.status," - ").concat(e.statusText));return e.json()}))}var y=function(e){return U("/users/".concat(e))},C=function(e){Object(p.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={user:{}},e.SelectedUser=Object(u.a)(l.a.mark((function t(){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y(e.props.userId);case 2:n=t.sent,e.setState({user:n.data});case 4:case"end":return t.stop()}}),t)}))),e}return Object(m.a)(n,[{key:"componentDidMount",value:function(){this.SelectedUser()}},{key:"componentDidUpdate",value:function(e){e.userId!==this.props.userId&&this.SelectedUser()}},{key:"render",value:function(){var e=this.state.user,t=e.name,n=e.id,a=e.email,s=e.phone;return r.a.createElement("div",{className:"CurrentUser"},r.a.createElement("h2",{className:"CurrentUser__title"},r.a.createElement("span",null,"Selected user:",n)),r.a.createElement("h3",{className:"CurrentUser__name"},t),r.a.createElement("p",{className:"CurrentUser__email"},a),r.a.createElement("p",{className:"CurrentUser__phone"},s),r.a.createElement("button",{type:"button",className:"button",onClick:this.props.clearSelectedUser},"Clear"))}}]),n}(r.a.Component),j=function(e){Object(p.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={todos:[],selectedUserId:0},e.shuffleTodos=function(t){var n=Object(i.a)(t).sort((function(){return Math.round(100*Math.random())-50}));e.setState({todos:n})},e.selectUser=function(t){e.setState({selectedUserId:t})},e.loadTodoList=Object(u.a)(l.a.mark((function t(){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f();case 2:n=t.sent,e.setState({todos:n.data});case 4:case"end":return t.stop()}}),t)}))),e.clearSelectedUser=function(){e.setState({selectedUserId:0})},e}return Object(m.a)(n,[{key:"componentDidMount",value:function(){this.loadTodoList()}},{key:"render",value:function(){var e=this.state,t=e.todos,n=e.selectedUserId;return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"App__sidebar"},r.a.createElement(k,{todos:t,selectUser:this.selectUser,userId:n,shuffleTodos:this.shuffleTodos})),r.a.createElement("div",{className:"App__content"},r.a.createElement("div",{className:"App__content-container"},n?r.a.createElement(C,{userId:n,clearSelectedUser:this.clearSelectedUser}):"No user selected")))}}]),n}(r.a.Component);c.a.render(r.a.createElement(j,null),document.getElementById("root"))}],[[12,1,2]]]);
//# sourceMappingURL=main.ceabc258.chunk.js.map