(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{448:function(A,t,e){"use strict";e.r(t);e(24);var n={props:{mdlText:{type:String,default:null},itemno:{type:Number,default:null},mdlBtnText:{type:String,default:null},showbtn:{type:Boolean,default:!0},fullscreen:{type:Boolean,default:!0}},data:function(){return{dialog:!1,notifications:!1,sound:!0,widgets:!1}},methods:{saveItem:function(){this.$emit("clicked-save")},newItem:function(){this.$emit("clicked-new")}}},r=e(70),o=e(86),l=e.n(o),c=e(215),d=e(430),m=e(460),f=e(482),v=e(180),_=e(181),h=e(114),y=e(85),x=e(422),k=e(49),w=e(195),component=Object(r.a)(n,(function(){var A=this,t=A.$createElement,e=A._self._c||t;return e("v-dialog",{attrs:{fullscreen:A.fullscreen,eager:"","hide-overlay":"",transition:"dialog-bottom-transition"},scopedSlots:A._u([A.showbtn?{key:"activator",fn:function(t){var n=t.on,r=t.attrs;return[e("v-btn",A._g(A._b({attrs:{color:"primary",dark:""},on:{click:function(t){return A.newItem()}}},"v-btn",r,!1),n),[A._v("\n      "+A._s(A.mdlBtnText)+"\n    ")])]}}:null],null,!0),model:{value:A.dialog,callback:function(t){A.dialog=t},expression:"dialog"}},[A._v(" "),e("v-card",[e("v-toolbar",{attrs:{dark:"",color:"primary"}},[e("v-btn",{attrs:{icon:"",dark:""},on:{click:function(t){A.dialog=!1}}},[e("v-icon",[A._v("mdi-close")])],1),A._v(" "),e("v-toolbar-title",[A._v(A._s(A.mdlText))]),A._v(" "),e("v-spacer"),A._v(" "),e("v-toolbar-items",[e("v-btn",{attrs:{dark:"",text:""},on:{click:function(t){return A.saveItem()}}},[A._v("\n          Kaydet\n        ")])],1)],1),A._v(" "),e("v-list",{attrs:{"three-line":"",subheader:""}},[e("v-list-item",[e("v-list-item-content",[A._t("default")],2)],1)],1),A._v(" "),e("v-divider")],1)],1)}),[],!1,null,null,null);t.default=component.exports;l()(component,{VBtn:c.a,VCard:d.a,VDialog:m.a,VDivider:f.a,VIcon:v.a,VList:_.a,VListItem:h.a,VListItemContent:y.a,VSpacer:x.a,VToolbar:k.a,VToolbarItems:w.a,VToolbarTitle:w.b})},453:function(A,t,e){"use strict";e.d(t,"a",(function(){return r})),e.d(t,"b",(function(){return o}));var n=e(63),r=(e(80),e(9),e(20),e(21),e(53),function(A,t){var e=t.removedIndex,r=t.addedIndex,o=t.payload;if(null===e&&null===r)return A;var l=Object(n.a)(A),c=o;return null!==e&&(c=l.splice(e,1)[0]),null!==r&&l.splice(r,0,c),l}),o=function(image){return URL.createObjectURL(image)}},459:function(A,t,e){var content=e(478);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[A.i,content,""]]),content.locals&&(A.exports=content.locals);(0,e(19).default)("3e72aa40",content,!0,{sourceMap:!1})},471:function(A,t,e){var content=e(487);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[A.i,content,""]]),content.locals&&(A.exports=content.locals);(0,e(19).default)("352fc2c0",content,!0,{sourceMap:!1})},477:function(A,t,e){"use strict";e(459)},478:function(A,t,e){var n=e(18)(!1);n.push([A.i,".inputBox{border:2px dashed #ccc;height:100px;width:100px;display:flex;cursor:pointer;float:left}.small{width:50px;height:50px;position:relative;bottom:0;margin-left:10px}.greenBrdr{border:2px dashed #12a03c}.redBrdr{border:2px dashed #cf1b24}.filePicker{display:none}.addBtn{position:relative;top:70%;left:-25px}.opacityErr{opacity:.2}",""]),A.exports=n},483:function(A,t,e){"use strict";e.r(t);var n=e(3),r=(e(27),e(24),e(37),e(10),e(33),e(123),e(26),e(9),e(50),e(453)),o={props:{items:{type:Array,default:null},showAciklama:{type:Boolean,default:!0},qid:{type:Number,default:0}},data:function(){return{files:[],perctange:0,loading:!1,btnIcon:["mdi-plus"],loaded:!1,hasError:!1,ErrorMessage:"",imageSource:"data:image/gif;base64,R0lGODlhAQABAPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAAP8ALAAAAAABAAEAAAgEAP8FBAA7",icon_id:0}},methods:{iconSelect:function(a){this.files=[],this.loaded=!1,this.hasError=!1,this.loading=!1,this.imageSource=a.icon_url,this.icon_id=a.icon_id},inputClick:function(){this.$refs.inputBox.click()},getFileImage:function(image){return this.files.length>0?this.imageSource=Object(r.b)(image):this.imageSource="data:image/gif;base64,R0lGODlhAQABAPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAAP8ALAAAAAABAAEAAAgEAP8FBAA7"},handleFile:function(A,t){this.$emit("handle-file",A,t)},pickFile:function(A){var t=this;this.files=[],this.loaded=!1,this.hasError=!1,Array.prototype.slice.call(A.target.files).forEach((function(A){if(!A.type.match("image.*"))return t.hasError=!0,t.loaded=!1,t.loading=!1,t.ErrorMessage="Desteklenmeyen Dosya Biçimi",void t.getFileImage(A);t.files.push(A),t.getFileImage(A),t.uploadFile(A)}))},uploadFile:function(A){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var n,r,o,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,n=t,(r=new FormData).append("file",A,A.name),o={onUploadProgress:function(){return function(progress){n.perctange=Math.floor(100*progress.loaded/progress.total),n.loading=!0}}()},l=function(A){return new Promise((function(t){return setTimeout(t,A)}))},e.next=9,t.$denetcimApi.$post("/icons",r,o).then((function(A){return new Promise((function(t){return setTimeout((function(){return t(A)}),1500)}))})).then((function(A){console.log(A),n.loading=!1,n.icon_id=A.file.icon_id,n.perctange=0,n.loaded=!0,n.hasError=!1,n.handleFile(t.qid,n.icon_id)})).catch((function(A){l(1e3),t.ErrorMessage=A.response.data.error.file,413==A.response.status&&(t.ErrorMessage="Dosya boyutu 2MB ' tan fazla olamaz"),n.hasError=!0,n.loaded=!1,n.loading=!1}));case 9:case"end":return e.stop()}}),e)})))()}}},l=(e(477),e(70)),c=e(86),d=e.n(c),m=e(215),f=e(454),v=e(180),_=e(181),h=e(114),y=e(85),x=e(659),k=e(536),component=Object(l.a)(o,(function(){var A=this,t=A.$createElement,e=A._self._c||t;return e("div",[A.showAciklama?e("v-list",{attrs:{subheader:""}},[e("v-list-item",{staticClass:"pl-0",staticStyle:{"min-height":"50px"}},[e("v-list-item-content",[e("v-list-item-title",{staticClass:"mb-0 pb-0 pt-0"},[A._v("İcon")]),A._v(" "),e("v-list-item-subtitle",{staticClass:"mt-0 pt-1"},[A._v("İsterseniz kendi iconunuzu ekleyebilir veya hazır listeden seçebilirsiniz")])],1)],1)],1):A._e(),A._v(" "),e("v-row",{staticClass:"cont"},[e("v-col",{staticClass:"cont",attrs:{cols:"12",lg:"12",xs:"12",md:"12",sm:"12"}},[e("input",{ref:"inputBox",staticClass:"filePicker",attrs:{type:"file"},on:{change:A.pickFile}}),A._v(" "),e("div",{staticClass:"inputBox rounded-lg",class:{greenBrdr:this.loaded,redBrdr:A.hasError}},[e("img",{class:{opacityErr:A.hasError},staticStyle:{width:"99px",height:"99px",display:"block","min-width":"95px","object-fit":"contain",border:"0",outline:"none"},attrs:{src:A.imageSource}}),A._v(" "),A.hasError?[e("v-tooltip",{attrs:{bottom:""},scopedSlots:A._u([{key:"activator",fn:function(t){var n=t.on,r=t.attrs;return[e("v-icon",A._g(A._b({staticStyle:{position:"absolute",left:"68px",bottom:"63px"},attrs:{color:"red"}},"v-icon",r,!1),n),[A._v("\n     mdi-alert-circle\n    ")])]}}],null,!1,3260502751)},[A._v(" "),e("span",[A._v(A._s(A.ErrorMessage))])])]:A._e(),A._v(" "),e("v-btn",{staticClass:"ma-2 white--text addBtn",attrs:{color:"blue-grey",fab:"","x-small":"",loading:A.loading},on:{click:function(t){return A.inputClick()}}},[e("v-icon",{attrs:{small:"",color:"#ccc"}},[A._v("mdi-plus")])],1)],2),A._v(" "),A._l(A.items,(function(t,n){return e("div",{key:n,staticClass:"inputBox small rounded-lg"},[e("img",{staticStyle:{width:"45px","object-fit":"contain","text-align":"center"},attrs:{src:t.icon_url},on:{click:function(e){return A.iconSelect(t)}}})])}))],2)],1)],1)}),[],!1,null,null,null);t.default=component.exports;d()(component,{VBtn:m.a,VCol:f.a,VIcon:v.a,VList:_.a,VListItem:h.a,VListItemContent:y.a,VListItemSubtitle:y.b,VListItemTitle:y.c,VRow:x.a,VTooltip:k.a})},486:function(A,t,e){"use strict";e(471)},487:function(A,t,e){var n=e(18)(!1);n.push([A.i,".fade-item{transition:all .2s}.fade-enter-active{transition:opacity .2s}.fade-leave{opacity:1}.fade-leave-active{transition:transform .2s;position:absolute}.fade-enter,.fade-leave-to{opacity:0}.fade-move{transition:transform .8s}",""]),A.exports=n},505:function(A,t,e){"use strict";e.r(t);e(24);var n={computed:{classObject:function(){return!!this.mode&&"`/audit_forms/${item.audit_form_id}`"}},props:{items:{type:Array,default:null},colLength:{type:Number,default:6},searchShow:{type:Boolean,default:!0},mode:{type:Boolean,default:!1}},data:function(){return{value:20,sablonAra:"",tamamlanma_orani:0}},methods:{search:function(A){this.$emit("searched",this.sablonAra)},deleteAudit:function(A){this.$emit("clicked-delete",A)},editAudit:function(A){this.$emit("clicked-edit",A)}}},r=(e(486),e(70)),o=e(86),l=e.n(o),c=e(215),d=e(430),m=e(454),f=e(418),v=e(180),_=e(181),h=e(114),y=e(183),x=e(85),k=e(408),w=e(177),V=e(659),F=e(466),component=Object(r.a)(n,(function(){var A=this,t=A.$createElement,e=A._self._c||t;return e("div",[e("v-container",{attrs:{fluid:""}},[A.searchShow?e("v-row",[e("v-col",{staticClass:"pb-0 pl-0 pr-0 pt-5",attrs:{cols:"12",md:"12",sm:"12",lg:"12"}},[e("v-text-field",{attrs:{label:"Şablon ara...",clearable:"","prepend-inner-icon":"mdi-magnify",outlined:"",dense:""},on:{keyup:A.search},model:{value:A.sablonAra,callback:function(t){A.sablonAra=t},expression:"sablonAra"}})],1)],1):A._e(),A._v(" "),e("v-row",[e("transition-group",{staticClass:"layout row wrap",attrs:{name:"fade",tag:"div"}},A._l(A.items,(function(t){return e("v-col",{key:t.audit_form_id,staticClass:"mb-0 mt-0 pb-0 pt-2",attrs:{cols:"12",md:A.colLength,sm:"12",lg:A.colLength}},[e("div",[e("v-card",{staticClass:"mb-0 pt-0",attrs:{elevation:"1",outlined:"",to:A.mode?"/audits/"+t.audit_location_id+"/forms/"+t.audit_form_id:""}},[e("v-list",{staticClass:"pt-2",attrs:{subheader:"","two-line":""}},[e("v-list-item",[e("img",{staticClass:"mr-3",staticStyle:{width:"49px","object-fit":"contain","text-align":"center"},attrs:{src:"http://localhost:8000/storage/files/"+t.icon_url}}),A._v(" "),e("v-list-item-content",[e("v-list-item-title",{staticStyle:{"font-weight":"bold !important",color:"#333"},domProps:{textContent:A._s(t.audit_form_name)}},[A._v(A._s(t.audit_form_name))]),A._v(" "),e("v-list-item-subtitle",{domProps:{textContent:A._s(t.updated_at)}})],1),A._v(" "),A.mode?e("v-list-item-action",[e("div",{staticClass:"text-center"},[e("v-progress-circular",{attrs:{rotate:360,size:55,width:3,value:parseInt(t.tamamlanma_orani),color:"blue"}},[A._v("\r\n     "+A._s(parseInt(t.tamamlanma_orani))+"%\r\n    ")])],1)]):A._e(),A._v(" "),A.searchShow?e("v-list-item-action",[e("div",{staticClass:"text-center"},[e("v-btn",{attrs:{color:"primary",small:"",dense:"",outlined:"",link:"",to:"/audit_forms/"+t.audit_form_id}},[A._v("\r\n      Form Oluştur\r\n    ")]),A._v(" "),e("v-menu",{attrs:{bottom:"",left:"","offset-x":!0},scopedSlots:A._u([{key:"activator",fn:function(t){var n=t.on,r=t.attrs;return[e("v-btn",A._g(A._b({attrs:{dark:"",icon:""}},"v-btn",r,!1),n),[e("v-icon",{attrs:{color:"green darken-2"}},[A._v("mdi-dots-vertical")])],1)]}}],null,!0)},[A._v(" "),e("v-list",[e("v-list-item",{attrs:{link:""},on:{click:function(e){return A.editAudit(t)}}},[e("v-list-item-title",[A._v("Düzenle")])],1),A._v(" "),e("v-list-item",{attrs:{link:""},on:{click:function(e){return A.deleteAudit(t)}}},[e("v-list-item-title",[A._v("Sil")])],1)],1)],1)],1)]):A._e()],1)],1)],1)],1)])})),1)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;l()(component,{VBtn:c.a,VCard:d.a,VCol:m.a,VContainer:f.a,VIcon:v.a,VList:_.a,VListItem:h.a,VListItemAction:y.a,VListItemContent:x.a,VListItemSubtitle:x.b,VListItemTitle:x.c,VMenu:k.a,VProgressCircular:w.a,VRow:V.a,VTextField:F.a})},666:function(A,t,e){"use strict";e.r(t);e(11),e(8),e(12),e(13),e(10),e(14);var n=e(3),r=e(2),o=(e(27),e(102));function l(object,A){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(object);A&&(e=e.filter((function(A){return Object.getOwnPropertyDescriptor(object,A).enumerable}))),t.push.apply(t,e)}return t}function c(A){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(r.a)(A,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(A,t,Object.getOwnPropertyDescriptor(source,t))}))}return A}var d={middleware:function(A){var t=A.$gates,e=A.redirect;if(!t.hasAllPermissions("audit-access"))return e("/login")},layout:"default",computed:c(c({},Object(o.d)({audit_forms:function(A){return A.audit_forms.audit_forms},icons:function(A){return A.icons.icons}})),Object(o.c)({filterByKeyword:"audit_forms/filterByKeyword"})),methods:c(c({},Object(o.b)({getAuditForms:"audit_forms/getAuditForms",saveAuditForms:"audit_forms/saveAuditForms",deleteAudit:"audit_forms/deleteAudit",getIcons:"icons/getIcons"})),{},{searched:function(A){this.todo=this.filterByKeyword(A)},clickedSave:function(){var A=this;this.auditFormFields.audit_icon_id=this.$refs.iupload.icon_id,this.saveAuditForms(this.auditFormFields).then((function(){A.$refs.modal.dialog=!1}))},clickedNew:function(){},clickedEdit:function(A){},clickedDelete:function(A){this.deleteAudit(A.audit_form_id).then((function(){console.log("Silindi")}))}}),created:function(){var A=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,A.getAuditForms().then((function(){A.todo=A.audit_forms}));case 2:return t.next=4,A.getIcons();case 4:case"end":return t.stop()}}),t)})))()},data:function(){return{todo:[],btnText:"Yeni Şablon Ekle",MdlText:"Yeni Şablon Ekle",textRules:[function(A){return!!A||"Bu alan Gereklidir"},function(A){return A&&A.length>=3||"İlgili alan 3 karakterden fazla olmalıdır."},function(A){return A&&A.length<=50||"İlgili alan en fazla 160 karakter olmalıdır."}],sablonvalid:!1,auditFormFields:[{audit_form_name:"",audit_form_no:"",audit_icon_id:0}]}}},m=e(70),f=e(86),v=e.n(f),_=e(430),h=e(454),y=e(418),x=e(474),k=e(659),w=e(466),component=Object(m.a)(d,(function(){var A=this,t=A.$createElement,e=A._self._c||t;return e("div",[e("v-card",{staticClass:"pb-3 pl-3 pt-3 mb-1",attrs:{outlined:""}},[e("Modals",{ref:"modal",attrs:{mdlText:A.MdlText,mdlBtnText:A.btnText},on:{"clicked-save":A.clickedSave,"clicked-new":A.clickedNew}},[e("v-form",{ref:"sablonform",model:{value:A.sablonvalid,callback:function(t){A.sablonvalid=t},expression:"sablonvalid"}},[e("v-container",{attrs:{fluid:""}},[e("v-row",[e("v-col",{attrs:{cols:"12",md:"12"}},[e("v-text-field",{staticClass:"mb-8",attrs:{rules:A.textRules,counter:50,label:"Şablon Adı",required:"",dense:""},model:{value:A.auditFormFields.audit_form_name,callback:function(t){A.$set(A.auditFormFields,"audit_form_name",t)},expression:"auditFormFields.audit_form_name"}}),A._v(" "),e("v-text-field",{attrs:{rules:A.textRules,counter:50,label:"Şablon Form No",required:"",dense:""},model:{value:A.auditFormFields.audit_form_no,callback:function(t){A.$set(A.auditFormFields,"audit_form_no",t)},expression:"auditFormFields.audit_form_no"}})],1),A._v(" "),e("v-col",{attrs:{cols:"12",md:"12"}},[e("SingleUpload",{ref:"iupload",attrs:{items:A.icons}})],1)],1)],1)],1)],1)],1),A._v(" "),e("AuditCards",{attrs:{items:A.todo},on:{searched:A.searched,"clicked-edit":A.clickedEdit,"clicked-delete":A.clickedDelete}})],1)}),[],!1,null,null,null);t.default=component.exports;v()(component,{SingleUpload:e(483).default,Modals:e(448).default,AuditCards:e(505).default}),v()(component,{VCard:_.a,VCol:h.a,VContainer:y.a,VForm:x.a,VRow:k.a,VTextField:w.a})}}]);