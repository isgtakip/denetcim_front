(window.webpackJsonp=window.webpackJsonp||[]).push([[34,10],{428:function(t,e,r){var content=r(429);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(19).default)("e23b7040",content,!0,{sourceMap:!1})},429:function(t,e,r){var n=r(18)(!1);n.push([t.i,'.v-toolbar__content,.v-toolbar__extension{border-bottom:1px solid #efefef}.v-input .v-label,input{font-size:12px}.theme--light.v-card{background-color:#fff;color:rgba(0,0,0,.87)}.theme--light.v-card .v-card__subtitle,.theme--light.v-card>.v-card__text{color:rgba(0,0,0,.6)}.theme--dark.v-card{background-color:#1e1e1e;color:#fff}.theme--dark.v-card .v-card__subtitle,.theme--dark.v-card>.v-card__text{color:hsla(0,0%,100%,.7)}.v-sheet.v-card{border-radius:4px}.v-sheet.v-card:not(.v-sheet--outlined){box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-sheet.v-card.v-sheet--shaped{border-radius:24px 4px}.v-card{border-width:thin;display:block;max-width:100%;outline:none;text-decoration:none;transition-property:box-shadow,opacity;word-wrap:break-word;position:relative;white-space:normal}.v-card>.v-card__progress+:not(.v-btn):not(.v-chip),.v-card>:first-child:not(.v-btn):not(.v-chip){border-top-left-radius:inherit;border-top-right-radius:inherit}.v-card>:last-child:not(.v-btn):not(.v-chip){border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.v-card__progress{top:0;left:0;right:0;overflow:hidden}.v-card__subtitle+.v-card__text{padding-top:0}.v-card__subtitle,.v-card__text{font-size:.875rem;font-weight:400;line-height:1.375rem;letter-spacing:.0071428571em}.v-card__subtitle,.v-card__text,.v-card__title{padding:16px}.v-card__title{align-items:center;display:flex;flex-wrap:wrap;font-size:1.25rem;font-weight:500;letter-spacing:.0125em;line-height:2rem;word-break:break-all}.v-card__title+.v-card__subtitle,.v-card__title+.v-card__text{padding-top:0}.v-card__title+.v-card__subtitle{margin-top:-16px}.v-card__text{width:100%}.v-card__actions{align-items:center;display:flex;padding:8px}.v-card__actions>.v-btn.v-btn{padding:0 8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn+.v-btn{margin-left:8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--left{margin-left:4px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--right{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn+.v-btn{margin-right:8px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--left{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--right{margin-left:4px}.v-card--flat{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)!important}.v-sheet.v-card--hover{cursor:pointer;transition:box-shadow .4s cubic-bezier(.25,.8,.25,1)}.v-sheet.v-card--hover:focus,.v-sheet.v-card--hover:hover{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.v-card--link,.v-card--link .v-chip{cursor:pointer}.v-card--link:focus:before{opacity:.08}.v-card--link:before{background:currentColor;bottom:0;content:"";left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .2s}.v-card--disabled{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-card--disabled>:not(.v-card__progress){opacity:.6;transition:inherit}.v-card--loading{overflow:hidden}.v-card--raised{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}',""]),t.exports=n},430:function(t,e,r){"use strict";r(11),r(8),r(12),r(13),r(10),r(14);var n=r(2),o=(r(24),r(196),r(428),r(199)),c=r(451),l=r(81),d=r(5);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(d.a)(c.a,l.a,o.a).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return f(f({"v-card":!0},l.a.options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},o.a.options.computed.classes.call(this))},styles:function(){var style=f({},o.a.options.computed.styles.call(this));return this.img&&(style.background='url("'.concat(this.img,'") center center / cover no-repeat')),style}},methods:{genProgress:function(){var t=c.a.options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),r=e.tag,data=e.data;return data.style=this.styles,this.isClickable&&(data.attrs=data.attrs||{},data.attrs.tabindex=0),t(r,this.setBackgroundColor(this.color,data),[this.genProgress(),this.$slots.default])}})},454:function(t,e,r){"use strict";r(8),r(12),r(13),r(14);var n=r(2),o=(r(24),r(11),r(33),r(57),r(434),r(9),r(20),r(435),r(436),r(437),r(438),r(439),r(440),r(441),r(442),r(443),r(444),r(445),r(446),r(447),r(21),r(36),r(10),r(65),r(275),r(1)),c=r(79),l=r(0);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f=["sm","md","lg","xl"],m=f.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),h=f.reduce((function(t,e){return t["offset"+Object(l.F)(e)]={type:[String,Number],default:null},t}),{}),_=f.reduce((function(t,e){return t["order"+Object(l.F)(e)]={type:[String,Number],default:null},t}),{}),x={col:Object.keys(m),offset:Object.keys(h),order:Object.keys(_)};function y(t,e,r){var n=t;if(null!=r&&!1!==r){if(e){var o=e.replace(t,"");n+="-".concat(o)}return"col"!==t||""!==r&&!0!==r?(n+="-".concat(r)).toLowerCase():n.toLowerCase()}}var w=new Map;e.a=o.a.extend({name:"v-col",functional:!0,props:v(v(v(v({cols:{type:[Boolean,String,Number],default:!1}},m),{},{offset:{type:[String,Number],default:null}},h),{},{order:{type:[String,Number],default:null}},_),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var r=e.props,data=e.data,o=e.children,l=(e.parent,"");for(var d in r)l+=String(r[d]);var v=w.get(l);return v||function(){var t,e;for(e in v=[],x)x[e].forEach((function(t){var n=r[t],o=y(e,t,n);o&&v.push(o)}));var o=v.some((function(t){return t.startsWith("col-")}));v.push((t={col:!o||!r.cols},Object(n.a)(t,"col-".concat(r.cols),r.cols),Object(n.a)(t,"offset-".concat(r.offset),r.offset),Object(n.a)(t,"order-".concat(r.order),r.order),Object(n.a)(t,"align-self-".concat(r.alignSelf),r.alignSelf),t)),w.set(l,v)}(),t(r.tag,Object(c.a)(data,{class:v}),o)}})},471:function(t,e,r){var content=r(487);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(19).default)("352fc2c0",content,!0,{sourceMap:!1})},486:function(t,e,r){"use strict";r(471)},487:function(t,e,r){var n=r(18)(!1);n.push([t.i,".fade-item{transition:all .2s}.fade-enter-active{transition:opacity .2s}.fade-leave{opacity:1}.fade-leave-active{transition:transform .2s;position:absolute}.fade-enter,.fade-leave-to{opacity:0}.fade-move{transition:transform .8s}",""]),t.exports=n},505:function(t,e,r){"use strict";r.r(e);r(24);var n={computed:{classObject:function(){return!!this.mode&&"`/audit_forms/${item.audit_form_id}`"}},props:{items:{type:Array,default:null},colLength:{type:Number,default:6},searchShow:{type:Boolean,default:!0},mode:{type:Boolean,default:!1}},data:function(){return{value:20,sablonAra:"",tamamlanma_orani:0}},methods:{search:function(t){this.$emit("searched",this.sablonAra)},deleteAudit:function(t){this.$emit("clicked-delete",t)},editAudit:function(t){this.$emit("clicked-edit",t)}}},o=(r(486),r(70)),c=r(86),l=r.n(c),d=r(215),v=r(430),f=r(454),m=r(418),h=r(180),_=r(181),x=r(114),y=r(183),w=r(85),O=r(408),k=r(177),j=r(659),S=r(466),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-container",{attrs:{fluid:""}},[t.searchShow?r("v-row",[r("v-col",{staticClass:"pb-0 pl-0 pr-0 pt-5",attrs:{cols:"12",md:"12",sm:"12",lg:"12"}},[r("v-text-field",{attrs:{label:"Şablon ara...",clearable:"","prepend-inner-icon":"mdi-magnify",outlined:"",dense:""},on:{keyup:t.search},model:{value:t.sablonAra,callback:function(e){t.sablonAra=e},expression:"sablonAra"}})],1)],1):t._e(),t._v(" "),r("v-row",[r("transition-group",{staticClass:"layout row wrap",attrs:{name:"fade",tag:"div"}},t._l(t.items,(function(e){return r("v-col",{key:e.audit_form_id,staticClass:"mb-0 mt-0 pb-0 pt-2",attrs:{cols:"12",md:t.colLength,sm:"12",lg:t.colLength}},[r("div",[r("v-card",{staticClass:"mb-0 pt-0",attrs:{elevation:"1",outlined:"",to:t.mode?"/audits/"+e.audit_location_id+"/forms/"+e.audit_form_id:""}},[r("v-list",{staticClass:"pt-2",attrs:{subheader:"","two-line":""}},[r("v-list-item",[r("img",{staticClass:"mr-3",staticStyle:{width:"49px","object-fit":"contain","text-align":"center"},attrs:{src:"http://localhost:8000/storage/files/"+e.icon_url}}),t._v(" "),r("v-list-item-content",[r("v-list-item-title",{staticStyle:{"font-weight":"bold !important",color:"#333"},domProps:{textContent:t._s(e.audit_form_name)}},[t._v(t._s(e.audit_form_name))]),t._v(" "),r("v-list-item-subtitle",{domProps:{textContent:t._s(e.updated_at)}})],1),t._v(" "),t.mode?r("v-list-item-action",[r("div",{staticClass:"text-center"},[r("v-progress-circular",{attrs:{rotate:360,size:55,width:3,value:parseInt(e.tamamlanma_orani),color:"blue"}},[t._v("\r\n     "+t._s(parseInt(e.tamamlanma_orani))+"%\r\n    ")])],1)]):t._e(),t._v(" "),t.searchShow?r("v-list-item-action",[r("div",{staticClass:"text-center"},[r("v-btn",{attrs:{color:"primary",small:"",dense:"",outlined:"",link:"",to:"/audit_forms/"+e.audit_form_id}},[t._v("\r\n      Form Oluştur\r\n    ")]),t._v(" "),r("v-menu",{attrs:{bottom:"",left:"","offset-x":!0},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,o=e.attrs;return[r("v-btn",t._g(t._b({attrs:{dark:"",icon:""}},"v-btn",o,!1),n),[r("v-icon",{attrs:{color:"green darken-2"}},[t._v("mdi-dots-vertical")])],1)]}}],null,!0)},[t._v(" "),r("v-list",[r("v-list-item",{attrs:{link:""},on:{click:function(r){return t.editAudit(e)}}},[r("v-list-item-title",[t._v("Düzenle")])],1),t._v(" "),r("v-list-item",{attrs:{link:""},on:{click:function(r){return t.deleteAudit(e)}}},[r("v-list-item-title",[t._v("Sil")])],1)],1)],1)],1)]):t._e()],1)],1)],1)],1)])})),1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VBtn:d.a,VCard:v.a,VCol:f.a,VContainer:m.a,VIcon:h.a,VList:_.a,VListItem:x.a,VListItemAction:y.a,VListItemContent:w.a,VListItemSubtitle:w.b,VListItemTitle:w.c,VMenu:O.a,VProgressCircular:k.a,VRow:j.a,VTextField:S.a})},677:function(t,e,r){"use strict";r.r(e);var n=r(3),o=(r(27),{asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.params,n=t.$denetcimApi,e.next=3,n.$get("/audits/".concat(r.id));case 3:return o=e.sent,e.abrupt("return",{audit_form:o});case 5:case"end":return e.stop()}}),e)})))()}}),c=r(70),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("AuditCards",{attrs:{items:t.audit_form,colLength:12,searchShow:!1,mode:!0}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{AuditCards:r(505).default})}}]);