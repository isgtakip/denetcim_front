(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{517:function(t,e,n){var content=n(532);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("352fc2c0",content,!0,{sourceMap:!1})},531:function(t,e,n){"use strict";n(517)},532:function(t,e,n){var r=n(19)(!1);r.push([t.i,".fade-item{transition:all .2s}.fade-enter-active{transition:opacity .2s}.fade-leave{opacity:1}.fade-leave-active{transition:transform .2s;position:absolute}.fade-enter,.fade-leave-to{opacity:0}.fade-move{transition:transform .8s}",""]),t.exports=r},540:function(t,e,n){"use strict";n.r(e);n(27);var r={computed:{classObject:function(){return!!this.mode&&"`/audit_forms/${item.audit_form_id}`"}},props:{items:{type:Array,default:null},colLength:{type:Number,default:6},searchShow:{type:Boolean,default:!0},mode:{type:Boolean,default:!1}},data:function(){return{value:20,sablonAra:"",tamamlanma_orani:0}},methods:{search:function(t){this.$emit("searched",this.sablonAra)},deleteAudit:function(t){this.$emit("clicked-delete",t)},editAudit:function(t){this.$emit("clicked-edit",t)}}},o=(n(531),n(77)),l=n(99),c=n.n(l),d=n(241),m=n(492),v=n(504),f=n(466),_=n(203),h=n(204),w=n(133),C=n(208),y=n(60),x=n(456),k=n(180),V=n(502),A=n(508),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-container",{attrs:{fluid:""}},[t.searchShow?n("v-row",[n("v-col",{staticClass:"pb-0 pl-0 pr-0 pt-5",attrs:{cols:"12",md:"12",sm:"12",lg:"12"}},[n("v-text-field",{attrs:{label:"Şablon ara...",clearable:"","prepend-inner-icon":"mdi-magnify",outlined:"",dense:""},on:{keyup:t.search},model:{value:t.sablonAra,callback:function(e){t.sablonAra=e},expression:"sablonAra"}})],1)],1):t._e(),t._v(" "),n("v-row",[n("transition-group",{staticClass:"layout row wrap",attrs:{name:"fade",tag:"div"}},t._l(t.items,(function(e){return n("v-col",{key:e.audit_form_id,staticClass:"mb-0 mt-0 pb-0 pt-2",attrs:{cols:"12",md:t.colLength,sm:"12",lg:t.colLength}},[n("div",[n("v-card",{staticClass:"mb-0 pt-0",attrs:{elevation:"1",outlined:"",to:t.mode?"/audits/"+e.audit_location_id+"/forms/"+e.audit_form_id:""}},[n("v-list",{staticClass:"pt-2",attrs:{subheader:"","two-line":""}},[n("v-list-item",[n("img",{staticClass:"mr-3",staticStyle:{width:"49px","object-fit":"contain","text-align":"center"},attrs:{src:"http://localhost:8000/storage/files/"+e.icon_url}}),t._v(" "),n("v-list-item-content",[n("v-list-item-title",{staticStyle:{"font-weight":"bold !important",color:"#333"},domProps:{textContent:t._s(e.audit_form_name)}},[t._v(t._s(e.audit_form_name))]),t._v(" "),n("v-list-item-subtitle",{domProps:{textContent:t._s(e.updated_at)}})],1),t._v(" "),t.mode?n("v-list-item-action",[n("div",{staticClass:"text-center"},[n("v-progress-circular",{attrs:{rotate:360,size:55,width:3,value:parseInt(e.tamamlanma_orani),color:"blue"}},[t._v("\r\n     "+t._s(parseInt(e.tamamlanma_orani))+"%\r\n    ")])],1)]):t._e(),t._v(" "),t.searchShow?n("v-list-item-action",[n("div",{staticClass:"text-center"},[n("v-btn",{attrs:{color:"primary",small:"",dense:"",outlined:"",link:"",to:"/audit_forms/"+e.audit_form_id}},[t._v("\r\n      Form Oluştur\r\n    ")]),t._v(" "),n("v-menu",{attrs:{bottom:"",left:"","offset-x":!0},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,o=e.attrs;return[n("v-btn",t._g(t._b({attrs:{dark:"",icon:""}},"v-btn",o,!1),r),[n("v-icon",{attrs:{color:"green darken-2"}},[t._v("mdi-dots-vertical")])],1)]}}],null,!0)},[t._v(" "),n("v-list",[n("v-list-item",{attrs:{link:""},on:{click:function(n){return t.editAudit(e)}}},[n("v-list-item-title",[t._v("Düzenle")])],1),t._v(" "),n("v-list-item",{attrs:{link:""},on:{click:function(n){return t.deleteAudit(e)}}},[n("v-list-item-title",[t._v("Sil")])],1)],1)],1)],1)]):t._e()],1)],1)],1)],1)])})),1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VBtn:d.a,VCard:m.a,VCol:v.a,VContainer:f.a,VIcon:_.a,VList:h.a,VListItem:w.a,VListItemAction:C.a,VListItemContent:y.a,VListItemSubtitle:y.b,VListItemTitle:y.c,VMenu:x.a,VProgressCircular:k.a,VRow:V.a,VTextField:A.a})},720:function(t,e,n){"use strict";n.r(e);var r=n(3),o=(n(31),{asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,o,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.env,r=t.params,(o=t.$axios).defaults.withCredentials=!0,e.next=4,o.$get(n.apiURL+"/audits/".concat(r.id));case 4:return l=e.sent,e.abrupt("return",{audit_form:l});case 6:case"end":return e.stop()}}),e)})))()}}),l=n(77),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("AuditCards",{attrs:{items:t.audit_form,colLength:12,searchShow:!1,mode:!0}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{AuditCards:n(540).default})}}]);