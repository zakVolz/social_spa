(this.webpackJsonpsocial_spa=this.webpackJsonpsocial_spa||[]).push([[0],Array(22).concat([function(e,t,a){e.exports=a.p+"static/media/logo.ec729568.png"},,function(e,t,a){e.exports=a(50)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),i=a(12),r=a.n(i),o=(a(29),a(3)),l=a(2),c=(a(30),a(31),a(32),a(22)),u=a.n(c),m=function(){return n.a.createElement("header",{className:"header"},n.a.createElement(o.b,{to:"/profile",className:"header__link"},n.a.createElement("img",{src:u.a,className:"header__logo",alt:"logo app"})))},d=a(14),p=a(15),f={posts:[{id:0,text:"Go drink",likeCounter:10},{id:1,text:"Go dance",likeCounter:213},{id:2,text:"Go fight",likeCounter:146}],newPostText:""},g=function(e,t){f.posts.forEach((function(a){if(a.id===e)return a.likeCounter=t}))},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0,a=Object(p.a)({},e);switch(a.posts=Object(d.a)(e.posts),t.type){case"UPDATE-TEXT-POST":return a.newPostText=t.text,a;case"ADD-POST":var s=a.posts.length+1,n={id:s,text:a.newPostText,likeCounter:0};return a.posts.unshift(n),a.newPostText="",a;case"UPDATE-LIKES-COUNTER":return g(t.id,t.value),a;default:return a}},_=(a(37),function(e){return n.a.createElement("div",{className:"posts__item"},n.a.createElement(o.b,{to:"/profile",className:"posts__avatar"}),n.a.createElement("p",{className:"posts__text"},e.text),n.a.createElement("div",{className:"posts__like"},n.a.createElement("button",{className:"posts__like-button",onClick:e.likeButton}),n.a.createElement("span",{className:"posts__like-counter"},e.likeCounter)))}),v=function(e){return n.a.createElement(_,{likeButton:function(t){var a;t.target.classList.toggle("posts__like-button_active"),a=t.target.classList.contains("posts__like-button_active")?e.likeCounter+1:e.likeCounter-1,e.dispatch({type:"UPDATE-LIKES-COUNTER",id:e.id,value:a})},id:e.id,text:e.text,likeCounter:e.likeCounter})},b=function(e){return n.a.createElement("div",{className:"posts"},e.renderPosts)},h=function(e){var t=e.postsData.map((function(t){return n.a.createElement(v,{text:t.text,likeCounter:t.likeCounter,id:t.id,dispatch:e.dispatch,key:t.id})}));return n.a.createElement(b,{renderPosts:t})},N=(a(38),a(9)),x=(a(40),function(e){return n.a.createElement("div",{className:"send"},n.a.createElement("h3",{className:"send__title"},"My posts"),n.a.createElement("form",{className:"send__form",onSubmit:e.sendPost},n.a.createElement("textarea",{className:"send__input",placeholder:"your news...",onChange:e.onChangePostText,value:e.profilePage.newPostText,required:!0}),n.a.createElement("button",{className:"send__button"},"Send")))}),k=Object(N.b)((function(e){return{profilePage:e.profilePage}}),(function(e){return{onChangePostText:function(t){var a=t.target.value;e(function(e){return{type:"UPDATE-TEXT-POST",text:e}}(a))},sendPost:function(t){t.preventDefault(),e({type:"ADD-POST"})}}}))(x),P=function(e){return n.a.createElement("div",{className:"profile"},n.a.createElement("div",{className:"profile__cover"}),n.a.createElement("div",{className:"profile__user"},n.a.createElement("div",{className:"profile__avatar"}),n.a.createElement("div",{className:"profile__info"},n.a.createElement("h3",{className:"profile__item"},"ZakaZak"),n.a.createElement("p",{className:"profile__item"},"Birtday: 22.08.1995"),n.a.createElement("p",{className:"profile__item"},"City: St.P."),n.a.createElement("p",{className:"profile__item"},"Education: Y.p."),n.a.createElement("p",{className:"profile__item"},"Site: ",n.a.createElement("a",{href:"https://news-explorer-project.tk/",target:"_blank",rel:"noreferrer noopener",className:"profile__link"},"https://news-explorer-project.tk/")))),n.a.createElement(k,null),n.a.createElement(h,{postsData:e.state.posts,dispatch:e.dispatch}))},T=(a(41),function(){return n.a.createElement("div",{className:"news"},n.a.createElement("p",null,"news"))}),w=(a(42),function(){return n.a.createElement("div",{className:"music"},n.a.createElement("p",null,"Music"))}),C=(a(43),function(){return n.a.createElement("div",{className:"settings"},n.a.createElement("p",null,"Settings"))}),M=(a(44),function(e){return n.a.createElement("li",{className:"friends-box__item"},n.a.createElement(o.b,{to:"/"+e.id,className:"friends-box__link"},n.a.createElement("div",{className:"friends-box__avatar",style:{backgroundImage:"url(".concat(e.avatar,")")}}),e.name))}),S=(a(45),function(e){return n.a.createElement("nav",{className:"nav"},n.a.createElement("ul",{className:"nav__list"},n.a.createElement("li",{className:"nav__item"},n.a.createElement(o.b,{to:"/profile",className:"nav__link"},"Profile")),n.a.createElement("li",{className:"nav__item"},n.a.createElement(o.b,{to:"/dialogs",className:"nav__link"},"Messages")),n.a.createElement("li",{className:"nav__item"},n.a.createElement(o.b,{to:"/news",className:"nav__link"},"News")),n.a.createElement("li",{className:"nav__item"},n.a.createElement(o.b,{to:"/music",className:"nav__link"},"Music")),n.a.createElement("li",{className:"nav__item"},n.a.createElement(o.b,{to:"/settings",className:"nav__link"},"Settings"))),n.a.createElement(o.b,{to:"/friends",className:"friends-box__title"},"Friends"),n.a.createElement("ul",{className:"friends-box__list"},e.renderFriends))}),A=function(e){var t=e.state.map((function(e){return n.a.createElement(M,{id:e.id,avatar:e.avatar,name:e.name,key:e.id})}));return n.a.createElement(S,{renderFriends:t})},D=(a(46),function(e){return n.a.createElement("li",{className:"dialogs__item"},n.a.createElement(o.b,{to:"/dialogs/"+e.id,className:"dialogs__name"},e.name))}),y=(a(47),{dialogs:[{id:1,name:"William Roberts"},{id:2,name:"Morgan Burns"},{id:3,name:"Mason James"},{id:4,name:"Ashton Moore"}],messages:[{id:1,avatar:"https://goo.su/2FIK",sort:"from",text:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur maiores provident eos illum praesentium fugiat aspernatur neque necessitatibus, repellendus, iusto delectus, assumenda blanditiis at aut illo similique suscipit? Voluptas, a!Amet tempore facilis blanditiis consequuntur nobis voluptates non! Odio amet voluptatum veritatis officiis perspiciatis commodi eius, delectus mollitia totam id ratione. Unde odit beatae explicabo. Quae tempora perferendis itaque alias."},{id:2,avatar:"https://goo.su/2FIK",sort:"from",text:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur maiores provident eos illum praesentium fugiat aspernatur neque necessitatibus, repellendus, iusto delectus, assumenda blanditiis at aut illo similique suscipit? Voluptas, a!Amet tempore facilis blanditiis consequuntur nobis voluptates non! Odio amet voluptatum veritatis officiis perspiciatis commodi eius, delectus mollitia totam id ratione. Quae tempora perferendis itaque alias."},{id:3,avatar:"https://goo.su/2Hbu",sort:"in",text:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur maiores provident eos illum praesentium fugiat aspernatur neque necessitatibus, repellendus, iusto delectus, assumenda blanditiis at aut illo similique suscipit? Voluptas, a!Amet tempore facilis blanditiis consequuntur nobis voluptates non! Odio amet voluptatum veritatis officiis perspiciatis commodi eius, delectus mollitia totam id ratione. Unde odit beatae explicabo."},{id:4,avatar:"https://goo.su/2FIK",sort:"from",text:"Lorem ipsum, dolor sit amet consectetur adipisicing. Unde odit beatae explicabo. Quae tempora perferendis itaque alias."},{id:5,avatar:"https://goo.su/2FIK",sort:"from",text:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur maiores provident eos illum praesentium fugiat aspernatur neque necessitatibus, repellendus, iusto delectus, assumenda blanditiis at aut illo similique suscipit? Voluptas, a!Amet tempore facilis blanditiis consequuntur nobis voluptates non! Odio amet voluptatum veritatis officiis perspiciatis commodi eius, delectus mollitia totam id ratione. Quae tempora perferendis itaque alias."},{id:6,avatar:"https://goo.su/2Hbu",sort:"in",text:" explicabo."},{id:7,avatar:"https://goo.su/2FIK",sort:"from",text:"Lorem ipsum, dolor sit amet consectetur adipisicing. Unde odit beatae explicabo. Quae tempora perferendis itaque alias."}],newMessageText:""}),q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0,a=Object(p.a)({},e);switch(a.messages=Object(d.a)(e.messages),t.type){case"UPDATE-TEXT-MESSAGE":return a.newMessageText=t.text,a;case"ADD-MESSAGE":var s=a.messages.length+1,n={id:s,avatar:"https://goo.su/2FIK",sort:"from",text:a.newMessageText};return a.messages.push(n),a.newMessageText="",a;default:return a}},O=(a(48),function(e){return n.a.createElement("li",{className:"dialogs__message-item dialogs__message-item_".concat(e.sort)},n.a.createElement("div",{className:"dialogs__message-avatar",style:{backgroundImage:"url(".concat(e.avatar,")")}}),n.a.createElement("p",{className:"dialogs__message-text"},e.text))}),I=(a(49),function(e){var t=e.messagesPage.messages.map((function(e){return n.a.createElement(O,{avatar:e.avatar,sort:e.sort,text:e.text,key:e.id})}));return n.a.createElement("div",{className:"dialogs__is-open"},n.a.createElement("ul",{className:"dialogs__message-list"},t),n.a.createElement("form",{className:"dialogs__send-message",onSubmit:e.sendMessage},n.a.createElement("textarea",{className:"dialogs__input",placeholder:"enter a message...",onChange:e.onChangeMessageText,value:e.messagesPage.newMessageText,autoFocus:!0,required:!0}),n.a.createElement("button",{className:"dialogs__send-button"},">")))}),U=Object(N.b)((function(e){return{messagesPage:e.messagesPage}}),(function(e){return{onChangeMessageText:function(t){var a=t.target.value;e(function(e){return{type:"UPDATE-TEXT-MESSAGE",text:e}}(a))},sendMessage:function(t){t.preventDefault(),e({type:"ADD-MESSAGE"})}}}))(I),F=function(e){return n.a.createElement("section",{className:"dialogs"},n.a.createElement("ul",{className:"dialogs__list"},n.a.createElement("h1",{className:"dialogs__title"},"Dialogs"),e.renderDialogs),n.a.createElement(U,null))},j=function(e){var t=e.state.dialogs.map((function(e){return n.a.createElement(D,{id:e.id,name:e.name,key:e.id})}));return n.a.createElement(F,{renderDialogs:t,state:e.state,dispatch:e.dispatch})},B=function(e){return n.a.createElement(o.a,null,n.a.createElement("div",{className:"root"},n.a.createElement(m,null),n.a.createElement(A,{state:e.state.friendsBox}),n.a.createElement("section",{className:"content"},n.a.createElement(l.a,{path:"/profile",render:function(){return n.a.createElement(P,{state:e.state.profilePage,dispatch:e.dispatch})}}),n.a.createElement(l.a,{path:"/dialogs",render:function(){return n.a.createElement(j,{state:e.state.messagesPage,dispatch:e.dispatch})}}),n.a.createElement(l.a,{path:"/news",render:function(){return n.a.createElement(T,null)}}),n.a.createElement(l.a,{path:"/music",render:function(){return n.a.createElement(w,null)}}),n.a.createElement(l.a,{path:"/settings",render:function(){return n.a.createElement(C,null)}}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var L=a(11),K=[{id:1,avatar:"https://goo.su/2FIK",name:"William Roberts"},{id:2,avatar:"https://goo.su/2Hbu",name:"Morgan Burns"},{id:3,avatar:"https://goo.su/2HCb",name:"Mason James"},{id:4,avatar:"https://goo.su/2hcC",name:"Ashton Moore"},{id:5,avatar:"https://goo.su/2Hcc",name:"Moore Roberts"},{id:6,avatar:"https://goo.su/2HCc",name:"Burns Mason"}],G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K;return e},H=Object(L.b)({profilePage:E,messagesPage:q,friendsBox:G}),Q=Object(L.c)(H),R=function(e){r.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(N.a,{store:Q},n.a.createElement(B,{state:e,dispatch:Q.dispatch.bind(Q)}))),document.getElementById("root"))};window.store=Q.getState(),R(Q.getState()),Q.subscribe((function(){R(Q.getState())})),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}]),[[24,1,2]]]);
//# sourceMappingURL=main.bb8e5c54.chunk.js.map