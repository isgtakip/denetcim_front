(window.webpackJsonp=window.webpackJsonp||[]).push([[35,28],{467:function(e,A,n){"use strict";n.d(A,"a",(function(){return r})),n.d(A,"b",(function(){return c})),n.d(A,"c",(function(){return d}));var t=n(487),o=n(0),r=Object(o.j)("v-card__actions"),l=Object(o.j)("v-card__subtitle"),c=Object(o.j)("v-card__text"),d=Object(o.j)("v-card__title");t.a},485:function(e,A,n){var content=n(486);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(21).default)("e23b7040",content,!0,{sourceMap:!1})},486:function(e,A,n){var t=n(20)(!1);t.push([e.i,'.v-toolbar__content,.v-toolbar__extension{border-bottom:1px solid #efefef}.v-input .v-label,input{font-size:12px}.theme--light.v-card{background-color:#fff;color:rgba(0,0,0,.87)}.theme--light.v-card>.v-card__subtitle,.theme--light.v-card>.v-card__text{color:rgba(0,0,0,.6)}.theme--dark.v-card{background-color:#1e1e1e;color:#fff}.theme--dark.v-card>.v-card__subtitle,.theme--dark.v-card>.v-card__text{color:hsla(0,0%,100%,.7)}.v-sheet.v-card{border-radius:4px}.v-sheet.v-card:not(.v-sheet--outlined){box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-sheet.v-card.v-sheet--shaped{border-radius:24px 4px}.v-card{border-width:thin;display:block;max-width:100%;outline:none;text-decoration:none;transition-property:box-shadow,opacity;word-wrap:break-word;position:relative;white-space:normal}.v-card>.v-card__progress+:not(.v-btn):not(.v-chip):not(.v-avatar),.v-card>:first-child:not(.v-btn):not(.v-chip):not(.v-avatar){border-top-left-radius:inherit;border-top-right-radius:inherit}.v-card>:last-child:not(.v-btn):not(.v-chip):not(.v-avatar){border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.v-card__progress{top:0;left:0;right:0;overflow:hidden}.v-card__subtitle+.v-card__text{padding-top:0}.v-card__subtitle,.v-card__text{font-size:.875rem;font-weight:400;line-height:1.375rem;letter-spacing:.0071428571em}.v-card__subtitle,.v-card__text,.v-card__title{padding:16px}.v-card__title{align-items:center;display:flex;flex-wrap:wrap;font-size:1.25rem;font-weight:500;letter-spacing:.0125em;line-height:2rem;word-break:break-all}.v-card__title+.v-card__subtitle,.v-card__title+.v-card__text{padding-top:0}.v-card__title+.v-card__subtitle{margin-top:-16px}.v-card__text{width:100%}.v-card__actions{align-items:center;display:flex;padding:8px}.v-card__actions>.v-btn.v-btn{padding:0 8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn+.v-btn{margin-left:8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--left{margin-left:4px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--right{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn+.v-btn{margin-right:8px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--left{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--right{margin-left:4px}.v-card--flat{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)!important}.v-sheet.v-card--hover{cursor:pointer;transition:box-shadow .4s cubic-bezier(.25,.8,.25,1)}.v-sheet.v-card--hover:focus,.v-sheet.v-card--hover:hover{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.v-card--link,.v-card--link .v-chip{cursor:pointer}.v-card--link:focus:before{opacity:.08}.v-card--link:before{background:currentColor;bottom:0;content:"";left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .2s}.v-card--disabled{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-card--disabled>:not(.v-card__progress){opacity:.6;transition:inherit}.v-card--loading{overflow:hidden}.v-card--raised{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}',""]),e.exports=t},487:function(e,A,n){"use strict";n(15),n(11),n(14),n(4),n(16),n(13),n(17);var t=n(2),o=(n(27),n(221),n(222),n(485),n(225)),r=n(493),l=n(93),c=n(7);function d(object,e){var A=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),A.push.apply(A,n)}return A}function v(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(A){Object(t.a)(e,A,source[A])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(A){Object.defineProperty(e,A,Object.getOwnPropertyDescriptor(source,A))}))}return e}A.a=Object(c.a)(r.a,l.a,o.a).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return v(v({"v-card":!0},l.a.options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},o.a.options.computed.classes.call(this))},styles:function(){var style=v({},o.a.options.computed.styles.call(this));return this.img&&(style.background='url("'.concat(this.img,'") center center / cover no-repeat')),style}},methods:{genProgress:function(){var e=r.a.options.methods.genProgress.call(this);return e?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[e]):null}},render:function(e){var A=this.generateRouteLink(),n=A.tag,data=A.data;return data.style=this.styles,this.isClickable&&(data.attrs=data.attrs||{},data.attrs.tabindex=0),e(n,this.setBackgroundColor(this.color,data),[this.genProgress(),this.$slots.default])}})},494:function(e,A,n){"use strict";n.d(A,"a",(function(){return o})),n.d(A,"b",(function(){return r}));var t=n(70),o=(n(91),n(4),n(22),n(24),n(518),n(63),function(e,A){var n=A.removedIndex,o=A.addedIndex,r=A.payload;if(null===n&&null===o)return e;var l=Object(t.a)(e),c=r;return null!==n&&(c=l.splice(n,1)[0]),null!==o&&l.splice(o,0,c),l}),r=function(image){return URL.createObjectURL(image)}},502:function(e,A,n){var content=n(520);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(21).default)("3e72aa40",content,!0,{sourceMap:!1})},519:function(e,A,n){"use strict";n(502)},520:function(e,A,n){var t=n(20)(!1);t.push([e.i,".inputBox{border:2px dashed #ccc;height:100px;width:100px;display:flex;cursor:pointer;float:left}.small{width:50px;height:50px;position:relative;bottom:0;margin-left:10px}.greenBrdr{border:2px dashed #12a03c}.redBrdr{border:2px dashed #cf1b24}.filePicker{display:none}.addBtn{position:relative;top:70%;left:-25px}.opacityErr{opacity:.2}",""]),e.exports=t},527:function(e,A,n){"use strict";n.r(A);var t=n(3),o=(n(30),n(27),n(44),n(4),n(13),n(26),n(141),n(29),n(55),n(494)),r={props:{items:{type:Array,default:null},showAciklama:{type:Boolean,default:!0},qid:{type:Number,default:0}},data:function(){return{files:[],perctange:0,loading:!1,btnIcon:["mdi-plus"],loaded:!1,hasError:!1,ErrorMessage:"",imageSource:"data:image/gif;base64,R0lGODlhAQABAPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAAP8ALAAAAAABAAEAAAgEAP8FBAA7",icon_id:0}},methods:{iconSelect:function(a){this.files=[],this.loaded=!1,this.hasError=!1,this.loading=!1,this.imageSource=a.icon_url,this.icon_id=a.icon_id},inputClick:function(){this.$refs.inputBox.click()},getFileImage:function(image){return this.files.length>0?this.imageSource=Object(o.b)(image):this.imageSource="data:image/gif;base64,R0lGODlhAQABAPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAAP8ALAAAAAABAAEAAAgEAP8FBAA7"},handleFile:function(e,A){this.$emit("handle-file",e,A)},pickFile:function(e){var A=this;this.files=[],this.loaded=!1,this.hasError=!1,Array.prototype.slice.call(e.target.files).forEach((function(e){if(!e.type.match("image.*"))return A.hasError=!0,A.loaded=!1,A.loading=!1,A.ErrorMessage="Desteklenmeyen Dosya Biçimi",void A.getFileImage(e);A.files.push(e),A.getFileImage(e),A.uploadFile(e)}))},uploadFile:function(e){var A=this;return Object(t.a)(regeneratorRuntime.mark((function n(){var t,o,r,l;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return A.loading=!0,t=A,(o=new FormData).append("file",e,e.name),r={onUploadProgress:function(){return function(progress){t.perctange=Math.floor(100*progress.loaded/progress.total),t.loading=!0}}()},l=function(e){return new Promise((function(A){return setTimeout(A,e)}))},n.next=9,A.$denetcimApi.$post("/icons",o,r).then((function(e){return new Promise((function(A){return setTimeout((function(){return A(e)}),1500)}))})).then((function(e){console.log(e),t.loading=!1,t.icon_id=e.file.icon_id,t.perctange=0,t.loaded=!0,t.hasError=!1,t.handleFile(A.qid,t.icon_id)})).catch((function(e){l(1e3),A.ErrorMessage=e.response.data.error.file,413==e.response.status&&(A.ErrorMessage="Dosya boyutu 2MB ' tan fazla olamaz"),t.hasError=!0,t.loaded=!1,t.loading=!1}));case 9:case"end":return n.stop()}}),n)})))()}}},l=(n(519),n(76)),c=n(99),d=n.n(c),v=n(240),h=n(500),f=n(203),x=n(204),_=n(133),m=n(98),y=n(498),O=n(574),component=Object(l.a)(r,(function(){var e=this,A=e.$createElement,n=e._self._c||A;return n("div",[e.showAciklama?n("v-list",{attrs:{subheader:""}},[n("v-list-item",{staticClass:"pl-0",staticStyle:{"min-height":"50px"}},[n("v-list-item-content",[n("v-list-item-title",{staticClass:"mb-0 pb-0 pt-0"},[e._v("İcon")]),e._v(" "),n("v-list-item-subtitle",{staticClass:"mt-0 pt-1"},[e._v("İsterseniz kendi iconunuzu ekleyebilir veya hazır listeden seçebilirsiniz")])],1)],1)],1):e._e(),e._v(" "),n("v-row",{staticClass:"cont"},[n("v-col",{staticClass:"cont",attrs:{cols:"12",lg:"12",xs:"12",md:"12",sm:"12"}},[n("input",{ref:"inputBox",staticClass:"filePicker",attrs:{type:"file"},on:{change:e.pickFile}}),e._v(" "),n("div",{staticClass:"inputBox rounded-lg",class:{greenBrdr:this.loaded,redBrdr:e.hasError}},[n("img",{class:{opacityErr:e.hasError},staticStyle:{width:"99px",height:"99px",display:"block","min-width":"95px","object-fit":"contain",border:"0",outline:"none"},attrs:{src:e.imageSource}}),e._v(" "),e.hasError?[n("v-tooltip",{attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function(A){var t=A.on,o=A.attrs;return[n("v-icon",e._g(e._b({staticStyle:{position:"absolute",left:"68px",bottom:"63px"},attrs:{color:"red"}},"v-icon",o,!1),t),[e._v("\n     mdi-alert-circle\n    ")])]}}],null,!1,3260502751)},[e._v(" "),n("span",[e._v(e._s(e.ErrorMessage))])])]:e._e(),e._v(" "),n("v-btn",{staticClass:"ma-2 white--text addBtn",attrs:{color:"blue-grey",fab:"","x-small":"",loading:e.loading},on:{click:function(A){return e.inputClick()}}},[n("v-icon",{attrs:{small:"",color:"#ccc"}},[e._v("mdi-plus")])],1)],2),e._v(" "),e._l(e.items,(function(A,t){return n("div",{key:t,staticClass:"inputBox small rounded-lg"},[n("img",{staticStyle:{width:"45px","object-fit":"contain","text-align":"center"},attrs:{src:A.icon_url},on:{click:function(n){return e.iconSelect(A)}}})])}))],2)],1)],1)}),[],!1,null,null,null);A.default=component.exports;d()(component,{VBtn:v.a,VCol:h.a,VIcon:f.a,VList:x.a,VListItem:_.a,VListItemContent:m.a,VListItemSubtitle:m.b,VListItemTitle:m.c,VRow:y.a,VTooltip:O.a})},626:function(e,A,n){"use strict";n.r(A);n(15),n(11),n(14),n(4),n(16),n(13),n(17);var t=n(2),o=(n(27),n(69),n(118)),r=n(1);function l(object,e){var A=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),A.push.apply(A,n)}return A}function c(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(A){Object(t.a)(e,A,source[A])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(A){Object.defineProperty(e,A,Object.getOwnPropertyDescriptor(source,A))}))}return e}var d={name:"node",props:{node:{type:Object},selectedOpt:{},questionID:{type:Number}},data:function(){return{form:{},inputValue:[],optionValue:0,selectedSubOpt:[],qqID:0,selectedOption:[],icon:[]}},computed:c({},Object(o.d)({icons:function(e){return e.icons.icons}})),created:function(){this.resetWindow()},methods:c(c({},Object(o.b)({getIconById:"icons/getIconById"})),{},{resetWindow:function(){var e=this;Object.assign(this.$data,{form:{},inputValue:[],optionValue:0,selectedSubOpt:[],qqID:0,selectedOption:[],icon:[]}),this.node.sub_questions.map((function(A){A.answers.length>0&&(1!=A.answer_type_id&&2!=A.answer_type_id||(e.selectedOption[A.question_id]=A.answers[0].answer_option_id),3==A.answer_type_id&&e.getIconById(A.answers[0].answer_option_id).then((function(){e.icon=e.icons})))}))},changedInput:function(e,A){this.$refs["subquestion"+e]&&this.resetWindow(),r.a.set(this.inputValue,e,A),this.selectedSubOpt[e]=A,this.$emit("input",e,A)}})},v=n(76),h=n(99),f=n.n(h),x=n(240),_=n(627),m=n(526),y=n(614),component=Object(v.a)(d,(function(){var e=this,A=e.$createElement,n=e._self._c||A;return n("div",e._l(e.node.sub_questions,(function(q){return n("div",{key:q.question_id},[0==q.condition_question_id?n("div",[n("div",[n("v-divider",{staticClass:"mt-3 mb-6"}),e._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-12",staticStyle:{"font-size":"12px"}},[e._v("\r\n              "+e._s(q.question)+"\r\n            ")]),e._v(" "),1==q.answer_type_id?n("div",{staticClass:"col-md-12",staticStyle:{"font-size":"12px"}},[n("v-btn-toggle",{staticClass:"mb-6",on:{change:function(A){return e.changedInput(q.question_id,e.selectedOption[q.question_id])}},model:{value:e.selectedOption[q.question_id],callback:function(A){e.$set(e.selectedOption,q.question_id,A)},expression:"selectedOption[q.question_id]"}},e._l(q.questionoptions,(function(A){return n("v-btn",{key:A.options.option_id,attrs:{outlined:"",color:"indigo",value:A.options.option_id}},[e._v("\r\n              "+e._s(A.options.option_name)+"\r\n            ")])})),1)],1):e._e(),e._v(" "),2==q.answer_type_id?n("div",{staticClass:"col-md-12",staticStyle:{"font-size":"12px"}},[n("v-textarea",{attrs:{hint:"Soru cevabına ait açıklamayı giriniz",outlined:""},on:{input:function(A){return e.changedInput(q.question_id,A)}},model:{value:e.selectedOption[q.question_id],callback:function(A){e.$set(e.selectedOption,q.question_id,A)},expression:"selectedOption[q.question_id]"}})],1):e._e(),e._v(" "),3==q.answer_type_id?n("div",{staticClass:"col-md-12",staticStyle:{"font-size":"12px"}},[n("SingleUpload",{ref:"iupload",refInFor:!0,staticClass:"mb-6",attrs:{showAciklama:!1,qid:q.question_id},on:{"handle-file":e.changedInput}})],1):e._e()])],1)]):"option"==q.condition_type&&q.value==e.selectedOpt&&q.condition_question_id==e.questionID?n("div",[n("div",[n("v-divider",{staticClass:"mt-3 mb-6"}),e._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-12",staticStyle:{"font-size":"12px"}},[e._v("\r\n              "+e._s(q.question)+"\r\n            ")]),e._v(" "),1==q.answer_type_id?n("div",{staticClass:"col-md-12",staticStyle:{"font-size":"12px"}},[n("v-btn-toggle",{staticClass:"mb-6",on:{change:function(A){return e.changedInput(q.question_id,e.selectedOption[q.question_id])}},model:{value:e.selectedOption[q.question_id],callback:function(A){e.$set(e.selectedOption,q.question_id,A)},expression:"selectedOption[q.question_id]"}},e._l(q.questionoptions,(function(A){return n("v-btn",{key:A.options.option_id,attrs:{outlined:"",color:"indigo",value:A.options.option_id}},[e._v("\r\n              "+e._s(A.options.option_name)+"\r\n            ")])})),1)],1):e._e(),e._v(" "),2==q.answer_type_id?n("div",{staticClass:"col-md-12",staticStyle:{"font-size":"12px"}},[n("v-textarea",{attrs:{hint:"Soru cevabına ait açıklamayı giriniz",outlined:""},on:{input:function(A){return e.changedInput(q.question_id,A)}},model:{value:e.selectedOption[q.question_id],callback:function(A){e.$set(e.selectedOption,q.question_id,A)},expression:"selectedOption[q.question_id]"}})],1):e._e(),e._v(" "),3==q.answer_type_id?n("div",{staticClass:"col-md-12",staticStyle:{"font-size":"12px"}},[n("SingleUpload",{ref:"iupload",refInFor:!0,staticClass:"mb-6",attrs:{showAciklama:!1,qid:q.question_id,items:e.icon},on:{"handle-file":e.changedInput}})],1):e._e()])],1)]):e._e(),e._v(" "),q.sub_questions&&q.sub_questions.length?n("div",[e._v("\r\n            "+e._s(q.question_id)+"\r\n          "),n("node",{ref:"subquestion"+q.question_id,refInFor:!0,attrs:{node:q,selectedOpt:e.selectedSubOpt[q.question_id],questionID:q.question_id},on:{input:e.changedInput}})],1):e._e()])})),0)}),[],!1,null,null,null);A.default=component.exports;f()(component,{SingleUpload:n(527).default}),f()(component,{VBtn:x.a,VBtnToggle:_.a,VDivider:m.a,VTextarea:y.a})},694:function(e,A,n){var content=n(695);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(21).default)("48751daa",content,!0,{sourceMap:!1})},695:function(e,A,n){var t=n(20)(!1);t.push([e.i,'.v-toolbar__content,.v-toolbar__extension{border-bottom:1px solid #efefef}.v-input .v-label,input{font-size:12px}.theme--light.v-expansion-panels .v-expansion-panel{background-color:#fff;color:rgba(0,0,0,.87)}.theme--light.v-expansion-panels .v-expansion-panel--disabled{color:rgba(0,0,0,.38)}.theme--light.v-expansion-panels .v-expansion-panel:not(:first-child):after{border-color:rgba(0,0,0,.12)}.theme--light.v-expansion-panels .v-expansion-panel-header .v-expansion-panel-header__icon .v-icon{color:rgba(0,0,0,.54)}.theme--light.v-expansion-panels.v-expansion-panels--focusable .v-expansion-panel-header:hover:before{opacity:.04}.theme--light.v-expansion-panels.v-expansion-panels--focusable .v-expansion-panel-header--active:before,.theme--light.v-expansion-panels.v-expansion-panels--focusable .v-expansion-panel-header--active:hover:before,.theme--light.v-expansion-panels.v-expansion-panels--focusable .v-expansion-panel-header:focus:before{opacity:.12}.theme--light.v-expansion-panels.v-expansion-panels--focusable .v-expansion-panel-header--active:focus:before{opacity:.16}.theme--light.v-expansion-panels.v-expansion-panels--hover>.v-expansion-panel>.v-expansion-panel-header:hover:hover:before{opacity:.04}.theme--light.v-expansion-panels.v-expansion-panels--hover>.v-expansion-panel>.v-expansion-panel-header:hover--active:before,.theme--light.v-expansion-panels.v-expansion-panels--hover>.v-expansion-panel>.v-expansion-panel-header:hover--active:hover:before,.theme--light.v-expansion-panels.v-expansion-panels--hover>.v-expansion-panel>.v-expansion-panel-header:hover:focus:before{opacity:.12}.theme--light.v-expansion-panels.v-expansion-panels--hover>.v-expansion-panel>.v-expansion-panel-header:hover--active:focus:before{opacity:.16}.theme--dark.v-expansion-panels .v-expansion-panel{background-color:#1e1e1e;color:#fff}.theme--dark.v-expansion-panels .v-expansion-panel--disabled{color:hsla(0,0%,100%,.5)}.theme--dark.v-expansion-panels .v-expansion-panel:not(:first-child):after{border-color:hsla(0,0%,100%,.12)}.theme--dark.v-expansion-panels .v-expansion-panel-header .v-expansion-panel-header__icon .v-icon{color:#fff}.theme--dark.v-expansion-panels.v-expansion-panels--focusable .v-expansion-panel-header:hover:before{opacity:.08}.theme--dark.v-expansion-panels.v-expansion-panels--focusable .v-expansion-panel-header--active:before,.theme--dark.v-expansion-panels.v-expansion-panels--focusable .v-expansion-panel-header--active:hover:before,.theme--dark.v-expansion-panels.v-expansion-panels--focusable .v-expansion-panel-header:focus:before{opacity:.24}.theme--dark.v-expansion-panels.v-expansion-panels--focusable .v-expansion-panel-header--active:focus:before{opacity:.32}.theme--dark.v-expansion-panels.v-expansion-panels--hover>.v-expansion-panel>.v-expansion-panel-header:hover:hover:before{opacity:.08}.theme--dark.v-expansion-panels.v-expansion-panels--hover>.v-expansion-panel>.v-expansion-panel-header:hover--active:before,.theme--dark.v-expansion-panels.v-expansion-panels--hover>.v-expansion-panel>.v-expansion-panel-header:hover--active:hover:before,.theme--dark.v-expansion-panels.v-expansion-panels--hover>.v-expansion-panel>.v-expansion-panel-header:hover:focus:before{opacity:.24}.theme--dark.v-expansion-panels.v-expansion-panels--hover>.v-expansion-panel>.v-expansion-panel-header:hover--active:focus:before{opacity:.32}.v-expansion-panels{border-radius:4px;display:flex;flex-wrap:wrap;justify-content:center;list-style-type:none;padding:0;width:100%;z-index:1}.v-expansion-panels>*{cursor:auto}.v-expansion-panels>:first-child{border-top-left-radius:inherit;border-top-right-radius:inherit}.v-expansion-panels>:last-child{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.v-expansion-panels:not(.v-expansion-panels--accordion):not(.v-expansion-panels--tile)>.v-expansion-panel--active{border-radius:4px}.v-expansion-panels:not(.v-expansion-panels--accordion):not(.v-expansion-panels--tile)>.v-expansion-panel--active+.v-expansion-panel{border-top-left-radius:4px;border-top-right-radius:4px}.v-expansion-panels:not(.v-expansion-panels--accordion):not(.v-expansion-panels--tile)>.v-expansion-panel--next-active{border-bottom-left-radius:4px;border-bottom-right-radius:4px}.v-expansion-panels:not(.v-expansion-panels--accordion):not(.v-expansion-panels--tile)>.v-expansion-panel--next-active .v-expansion-panel-header{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.v-expansion-panel{flex:1 0 100%;max-width:100%;position:relative;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-expansion-panel:before{border-radius:inherit;bottom:0;content:"";left:0;position:absolute;right:0;top:0;z-index:-1;transition:box-shadow .28s cubic-bezier(.4,0,.2,1);box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-expansion-panel:not(:first-child):after{border-top:thin solid;content:"";left:0;position:absolute;right:0;top:0;transition:border-color .2s cubic-bezier(.4,0,.2,1),opacity .2s cubic-bezier(.4,0,.2,1)}.v-expansion-panel--disabled .v-expansion-panel-header{pointer-events:none}.v-expansion-panel--active+.v-expansion-panel,.v-expansion-panel--active:not(:first-child){margin-top:16px}.v-expansion-panel--active+.v-expansion-panel:after,.v-expansion-panel--active:not(:first-child):after{opacity:0}.v-expansion-panel--active>.v-expansion-panel-header{min-height:64px}.v-expansion-panel--active>.v-expansion-panel-header--active .v-expansion-panel-header__icon:not(.v-expansion-panel-header__icon--disable-rotate) .v-icon{transform:rotate(-180deg)}.v-expansion-panel-header__icon{display:inline-flex;margin-bottom:-4px;margin-top:-4px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-application--is-ltr .v-expansion-panel-header__icon{margin-left:auto}.v-application--is-rtl .v-expansion-panel-header__icon{margin-right:auto}.v-expansion-panel-header{align-items:center;border-top-left-radius:inherit;border-top-right-radius:inherit;display:flex;font-size:.9375rem;line-height:1;min-height:48px;outline:none;padding:16px 24px;position:relative;transition:min-height .3s cubic-bezier(.25,.8,.5,1);width:100%}.v-application--is-ltr .v-expansion-panel-header{text-align:left}.v-application--is-rtl .v-expansion-panel-header{text-align:right}.v-expansion-panel-header:not(.v-expansion-panel-header--mousedown):focus:before{opacity:.12}.v-expansion-panel-header:before{background-color:currentColor;border-radius:inherit;bottom:0;content:"";left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .3s cubic-bezier(.25,.8,.5,1)}.v-expansion-panel-header>:not(.v-expansion-panel-header__icon){flex:1 1 auto}.v-expansion-panel-content{display:flex}.v-expansion-panel-content__wrap{padding:0 24px 16px;flex:1 1 auto;max-width:100%}.v-expansion-panels--accordion>.v-expansion-panel{margin-top:0}.v-expansion-panels--accordion>.v-expansion-panel:after{opacity:1}.v-expansion-panels--popout>.v-expansion-panel{max-width:calc(100% - 32px)}.v-expansion-panels--popout>.v-expansion-panel--active{max-width:calc(100% + 16px)}.v-expansion-panels--inset>.v-expansion-panel{max-width:100%}.v-expansion-panels--inset>.v-expansion-panel--active{max-width:calc(100% - 32px)}.v-expansion-panels--flat>.v-expansion-panel:after{border-top:none}.v-expansion-panels--flat>.v-expansion-panel:before{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.v-expansion-panels--tile,.v-expansion-panels--tile>.v-expansion-panel:before{border-radius:0}',""]),e.exports=t},705:function(e,A,n){"use strict";n.r(A);n(15),n(11),n(14),n(16),n(13),n(17);var t=n(3),o=n(2),r=(n(30),n(69),n(77),n(4),n(118)),l=n(1);function c(object,e){var A=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),A.push.apply(A,n)}return A}function d(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(A){Object(o.a)(e,A,source[A])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(A){Object.defineProperty(e,A,Object.getOwnPropertyDescriptor(source,A))}))}return e}var v={computed:d({},Object(r.d)({quiz:function(e){return e.quiz.quiz}})),created:function(){var e=this;return Object(t.a)(regeneratorRuntime.mark((function A(){var n;return regeneratorRuntime.wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return n={id:e.$route.params.id,fid:e.$route.params.fid},A.next=3,e.getQuiz(n).then((function(A){e.quiz.map((function(A){A.sorular.map((function(A){1==A.answer_type_id&&A.answers.length>0&&A.answers.map((function(A){l.a.set(e.selectedOption,A.question_id,parseInt(A.answer_option_id))}))}))}))}));case 3:case"end":return A.stop()}}),A)})))()},data:function(){return{selectedOption:[]}},methods:d(d({},Object(r.b)({getQuiz:"quiz/getQuiz",saveQuiz:"quiz/saveQuiz"})),{},{resetSubQuestions:function(e){this.$refs["subquestions"+e][0].resetWindow()},handleOptions:function(e,A){},findSubQ:function(q,a,e){var A=this;q.sub_questions.length>0&&q.sub_questions.map((function(n){if(console.log(q.question_id),0!==n.condition_question_id){var t=a.find((function(e){return e.question_id===n.condition_question_id})),o=t&&t.answer_option_id;"option"==n.condition_type&&n.value==o&&n.condition_question_id==q.question_id&&a.push({question_id:n.question_id,answer_option_id:A.$refs["subquestions"+e][0].inputValue[n.question_id]})}else a.push({question_id:n.question_id,answer_option_id:A.$refs["subquestions"+e][0].inputValue[n.question_id]});return A.findSubQ(n,a,e)}))},cevapKaydet:function(q,e){var A=this;return Object(t.a)(regeneratorRuntime.mark((function n(){var t,o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=[{question_id:q.question_id,answer_option_id:e}],A.findSubQ(q,t,q.question_id),o={id:A.$route.params.id,fid:A.$route.params.fid,qid:q.question_id,section_id:q.section_id,qoptions:JSON.stringify(t)},console.log(t),n.next=6,A.saveQuiz(o).then((function(e){}));case 6:case"end":return n.stop()}}),n)})))()}})},h=n(76),f=n(99),x=n.n(f),_=n(240),m=n(627),y=n(487),O=n(467),w=n(500),j=n(526),k=n(149),P=n(138),C=n(0),S=n(7);function B(object,e){var A=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),A.push.apply(A,n)}return A}var I=Object(S.a)(Object(k.a)("expansionPanels","v-expansion-panel","v-expansion-panels"),Object(P.b)("expansionPanel",!0)).extend({name:"v-expansion-panel",props:{disabled:Boolean,readonly:Boolean},data:function(){return{content:null,header:null,nextIsActive:!1}},computed:{classes:function(){return function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?B(Object(source),!0).forEach((function(A){Object(o.a)(e,A,source[A])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):B(Object(source)).forEach((function(A){Object.defineProperty(e,A,Object.getOwnPropertyDescriptor(source,A))}))}return e}({"v-expansion-panel--active":this.isActive,"v-expansion-panel--next-active":this.nextIsActive,"v-expansion-panel--disabled":this.isDisabled},this.groupClasses)},isDisabled:function(){return this.expansionPanels.disabled||this.disabled},isReadonly:function(){return this.expansionPanels.readonly||this.readonly}},methods:{registerContent:function(e){this.content=e},unregisterContent:function(){this.content=null},registerHeader:function(e){this.header=e,e.$on("click",this.onClick)},unregisterHeader:function(){this.header=null},onClick:function(e){e.detail&&this.header.$el.blur(),this.$emit("click",e),this.isReadonly||this.isDisabled||this.toggle()},toggle:function(){var e=this;this.$nextTick((function(){return e.$emit("change")}))}},render:function(e){return e("div",{staticClass:"v-expansion-panel",class:this.classes,attrs:{"aria-expanded":String(this.isActive)}},Object(C.t)(this))}}),D=n(223),z=n(170),E=n(39),$=Object(S.a)(z.a,E.a,Object(P.a)("expansionPanel","v-expansion-panel-content","v-expansion-panel")).extend().extend({name:"v-expansion-panel-content",data:function(){return{isActive:!1}},computed:{parentIsActive:function(){return this.expansionPanel.isActive}},watch:{parentIsActive:{immediate:!0,handler:function(e,A){var n=this;e&&(this.isBooted=!0),null==A?this.isActive=e:this.$nextTick((function(){return n.isActive=e}))}}},created:function(){this.expansionPanel.registerContent(this)},beforeDestroy:function(){this.expansionPanel.unregisterContent()},render:function(e){var A=this;return e(D.a,this.showLazyContent((function(){return[e("div",A.setBackgroundColor(A.color,{staticClass:"v-expansion-panel-content",directives:[{name:"show",value:A.isActive}]}),[e("div",{class:"v-expansion-panel-content__wrap"},Object(C.t)(A))])]})))}}),V=n(117),R=n(101);function M(object,e){var A=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),A.push.apply(A,n)}return A}function F(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?M(Object(source),!0).forEach((function(A){Object(o.a)(e,A,source[A])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):M(Object(source)).forEach((function(A){Object.defineProperty(e,A,Object.getOwnPropertyDescriptor(source,A))}))}return e}var Q=Object(S.a)(E.a,Object(P.a)("expansionPanel","v-expansion-panel-header","v-expansion-panel")).extend().extend({name:"v-expansion-panel-header",directives:{ripple:R.a},props:{disableIconRotate:Boolean,expandIcon:{type:String,default:"$expand"},hideActions:Boolean,ripple:{type:[Boolean,Object],default:!1}},data:function(){return{hasMousedown:!1}},computed:{classes:function(){return{"v-expansion-panel-header--active":this.isActive,"v-expansion-panel-header--mousedown":this.hasMousedown}},isActive:function(){return this.expansionPanel.isActive},isDisabled:function(){return this.expansionPanel.isDisabled},isReadonly:function(){return this.expansionPanel.isReadonly}},created:function(){this.expansionPanel.registerHeader(this)},beforeDestroy:function(){this.expansionPanel.unregisterHeader()},methods:{onClick:function(e){this.$emit("click",e)},genIcon:function(){var e=Object(C.t)(this,"actions")||[this.$createElement(V.a,this.expandIcon)];return this.$createElement(D.d,[this.$createElement("div",{staticClass:"v-expansion-panel-header__icon",class:{"v-expansion-panel-header__icon--disable-rotate":this.disableIconRotate},directives:[{name:"show",value:!this.isDisabled}]},e)])}},render:function(e){var A=this;return e("button",this.setBackgroundColor(this.color,{staticClass:"v-expansion-panel-header",class:this.classes,attrs:{tabindex:this.isDisabled?-1:null,type:"button","aria-expanded":this.isActive},directives:[{name:"ripple",value:this.ripple}],on:F(F({},this.$listeners),{},{click:this.onClick,mousedown:function(){return A.hasMousedown=!0},mouseup:function(){return A.hasMousedown=!1}})}),[Object(C.t)(this,"default",{open:this.isActive},!0),this.hideActions||this.genIcon()])}}),L=(n(221),n(222),n(694),n(145)),T=n(9);function H(object,e){var A=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),A.push.apply(A,n)}return A}function U(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?H(Object(source),!0).forEach((function(A){Object(o.a)(e,A,source[A])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):H(Object(source)).forEach((function(A){Object.defineProperty(e,A,Object.getOwnPropertyDescriptor(source,A))}))}return e}var N=L.a.extend({name:"v-expansion-panels",provide:function(){return{expansionPanels:this}},props:{accordion:Boolean,disabled:Boolean,flat:Boolean,hover:Boolean,focusable:Boolean,inset:Boolean,popout:Boolean,readonly:Boolean,tile:Boolean},computed:{classes:function(){return U(U({},L.a.options.computed.classes.call(this)),{},{"v-expansion-panels":!0,"v-expansion-panels--accordion":this.accordion,"v-expansion-panels--flat":this.flat,"v-expansion-panels--hover":this.hover,"v-expansion-panels--focusable":this.focusable,"v-expansion-panels--inset":this.inset,"v-expansion-panels--popout":this.popout,"v-expansion-panels--tile":this.tile})}},created:function(){this.$attrs.hasOwnProperty("expand")&&Object(T.a)("expand","multiple",this),Array.isArray(this.value)&&this.value.length>0&&"boolean"==typeof this.value[0]&&Object(T.a)(':value="[true, false, true]"',':value="[0, 2]"',this)},methods:{updateItem:function(e,A){var n=this.getValue(e,A),t=this.getValue(e,A+1);e.isActive=this.toggleMethod(n),e.nextIsActive=this.toggleMethod(t)}}}),W=n(203),J=n(498),component=Object(h.a)(v,(function(){var e=this,A=e.$createElement,n=e._self._c||A;return n("div",[n("v-row",[n("v-col",{staticClass:"pt-7",attrs:{cols:"12",md:"12",sm:"12",lg:"12"}},e._l(e.quiz,(function(A){return n("v-card",{directives:[{name:"show",rawName:"v-show",value:A.sorular.length,expression:"item.sorular.length"}],key:A.section_id,staticClass:"mb-3",attrs:{elevation:"0"}},[n("v-card-title",{staticClass:"white--text primary pt-3 pb-3",staticStyle:{"font-size":"16px"}},[e._v(e._s(A.section_name))]),e._v(" "),n("v-divider"),e._v(" "),n("v-expansion-panels",{staticClass:"pt-1",staticStyle:{"padding-right":"1px","padding-left":"1px"},attrs:{elevation:"0",outlined:""}},e._l(A.sorular,(function(q){return n("v-expansion-panel",{key:q.question_id},[n("v-expansion-panel-header",{attrs:{"disable-icon-rotate":""},scopedSlots:e._u([{key:"actions",fn:function(){return[q.answers.length?n("v-icon",{attrs:{color:"teal"}},[e._v("\n          mdi-check\n        ")]):n("v-icon",{attrs:{color:"error"}},[e._v("\n          mdi-alert-circle\n        ")])]},proxy:!0}],null,!0)},[e._v("\n      "+e._s(q.question)+"\n      ")]),e._v(" "),n("v-expansion-panel-content",[n("v-btn-toggle",{staticClass:"mb-6",on:{change:function(A){return e.resetSubQuestions(q.question_id)}},model:{value:e.selectedOption[q.question_id],callback:function(A){e.$set(e.selectedOption,q.question_id,A)},expression:"selectedOption[q.question_id]"}},e._l(q.questionoptions,(function(A){return n("v-btn",{key:A.options.option_id,attrs:{outlined:"",color:"indigo",value:A.options.option_id}},[e._v("\n  "+e._s(A.options.option_name)+"\n")])})),1),e._v(" "),n("Subquestions",{ref:"subquestions"+q.question_id,refInFor:!0,attrs:{node:q,selectedOpt:e.selectedOption[q.question_id],questionID:q.question_id},on:{input:e.handleOptions}}),e._v(" "),n("v-btn",{attrs:{block:"",color:"primary",outlined:"",disabled:null==e.selectedOption[q.question_id]},on:{click:function(A){return e.cevapKaydet(q,e.selectedOption[q.question_id])}}},[e._v("\n       SORUYU KAYDET\n     ")])],1)],1)})),1)],1)})),1)],1)],1)}),[],!1,null,null,null);A.default=component.exports;x()(component,{Subquestions:n(626).default}),x()(component,{VBtn:_.a,VBtnToggle:m.a,VCard:y.a,VCardTitle:O.c,VCol:w.a,VDivider:j.a,VExpansionPanel:I,VExpansionPanelContent:$,VExpansionPanelHeader:Q,VExpansionPanels:N,VIcon:W.a,VRow:J.a})}}]);