(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{427:function(e,t,n){"use strict";n.r(t);n(24),n(33),n(198);var r=n(461),o={props:{headers:{type:Array,default:null},slots:{type:Array,default:null},items:{type:Array,default:function(){return[]}},title:{type:String,default:null},showExpand:{type:Boolean,default:!1},singleExpand:{type:Boolean,default:!1},keyOfItem:{type:String,default:null},loading:{type:Boolean,default:!1},searchPorperyt:{type:Boolean,default:!0},paginationShow:{type:Boolean,default:!1},disablePagination:{type:Boolean,default:!1},detailEnabled:{type:Boolean,default:!1},itemsLength:{type:Number,default:0},showSelect:{type:Boolean,default:!1},singleSelect:{type:Boolean,default:!0}},data:function(){return{selectedArray:[],search:"",expanded:[],footerProps:{"items-per-page-options":[5,10,15,100]},options:{page:1,itemsPerPage:5}}},watch:{options:{handler:function(){this.$emit("handle-options",this.options,this.search)},deep:!0},search:n.n(r).a.debounce((function(){this.options.page=1,this.$emit("handle-options",this.options,this.search)}),300)},methods:{itemselected:function(e){this.$emit("clicked-row",e.item),console.log(e.item)},rowClick:function(e,t){},loadDetails:function(e){this.$emit("row-click",e.item)},editItem:function(e){this.$emit("clicked-edit",e)},deleteItem:function(e){this.$emit("clicked-delete",e)},detItem:function(e){this.$emit("clicked-detail",e)}}},l=n(70),c=n(86),d=n.n(c),h=n(430),f=n(424),m=n(661),v=n(180),y=n(422),x=n(466),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",{attrs:{eager:""}},[e.searchPorperyt?n("v-card-title",[e._v("\n      "+e._s(this.title)+"\n      "),n("v-spacer"),e._v(" "),n("v-spacer"),e._v(" "),n("v-text-field",{attrs:{eager:"","append-icon":"mdi-magnify",label:"Arama","single-line":"","hide-details":""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1):e._e(),e._v(" "),n("v-data-table",{attrs:{"v-model":e.selectedArray,eager:"",loading:e.loading,headers:e.headers,items:e.items,search:e.search,"show-expand":e.showExpand,"single-expand":e.singleExpand,expanded:e.expanded,"item-key":e.keyOfItem,"hide-default-footer":e.paginationShow,"disable-pagination":e.disablePagination,"server-items-length":e.itemsLength,options:e.options,"footer-props":e.footerProps,showSelect:e.showSelect,"single-select":e.singleSelect},on:{"update:expanded":function(t){e.expanded=t},"item-expanded":e.loadDetails,"update:options":function(t){e.options=t},"click:row":e.rowClick,"item-selected":e.itemselected},scopedSlots:e._u([{key:"expanded-item",fn:function(t){var r=t.headers;return[n("td",{attrs:{colspan:r.length}},[e._t("expanded")],2)]}},e._l(e.slots,(function(slot){return{key:"item."+slot.slotName,fn:function(t){var n=t.item;return[e._t(slot.slotName,null,{degisken:n})]}}})),{key:"item.actions",fn:function(t){var r=t.item;return[e.detailEnabled?n("v-icon",{attrs:{small:""},on:{click:function(t){return e.detItem(r)}}},[e._v("mdi-eye")]):e._e(),e._v(" "),n("v-icon",{attrs:{small:""},on:{click:function(t){return e.editItem(r)}}},[e._v("mdi-pencil")]),e._v(" "),n("v-icon",{attrs:{small:""},on:{click:function(t){return e.deleteItem(r)}}},[e._v("mdi-delete")])]}}],null,!0)})],1)}),[],!1,null,null,null);t.default=component.exports;d()(component,{VCard:h.a,VCardTitle:f.c,VDataTable:m.a,VIcon:v.a,VSpacer:y.a,VTextField:x.a})},432:function(e,t,n){var content=n(433);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(19).default)("2065bca8",content,!0,{sourceMap:!1})},433:function(e,t,n){var r=n(18)(!1);r.push([e.i,".v-toolbar__content,.v-toolbar__extension{border-bottom:1px solid #efefef}.v-input .v-label,input{font-size:12px}.v-dialog{border-radius:4px;margin:24px;overflow-y:auto;pointer-events:auto;transition:.3s cubic-bezier(.25,.8,.25,1);width:100%;z-index:inherit;box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12)}.v-dialog:not(.v-dialog--fullscreen){max-height:90%}.v-dialog>*{width:100%}.v-dialog>.v-card>.v-card__title{font-size:1.25rem;font-weight:500;letter-spacing:.0125em;padding:16px 24px 10px}.v-dialog>.v-card>.v-card__subtitle,.v-dialog>.v-card>.v-card__text{padding:0 24px 20px}.v-dialog>.v-card>.v-card__actions{padding:8px 16px}.v-dialog__content{align-items:center;display:flex;height:100%;justify-content:center;left:0;pointer-events:none;position:fixed;top:0;transition:.2s cubic-bezier(.25,.8,.25,1),z-index 1ms;width:100%;z-index:6;outline:none}.v-dialog__container{display:none}.v-dialog__container--attached{display:inline}.v-dialog--animated{-webkit-animation-duration:.15s;animation-duration:.15s;-webkit-animation-name:animate-dialog;animation-name:animate-dialog;-webkit-animation-timing-function:cubic-bezier(.25,.8,.25,1);animation-timing-function:cubic-bezier(.25,.8,.25,1)}.v-dialog--fullscreen{border-radius:0;margin:0;height:100%;position:fixed;overflow-y:auto;top:0;left:0}.v-dialog--fullscreen>.v-card{min-height:100%;min-width:100%;margin:0!important;padding:0!important}.v-dialog--scrollable,.v-dialog--scrollable>form{display:flex}.v-dialog--scrollable>.v-card,.v-dialog--scrollable>form>.v-card{display:flex;flex:1 1 100%;flex-direction:column;max-height:100%;max-width:100%}.v-dialog--scrollable>.v-card>.v-card__actions,.v-dialog--scrollable>.v-card>.v-card__title,.v-dialog--scrollable>form>.v-card>.v-card__actions,.v-dialog--scrollable>form>.v-card>.v-card__title{flex:0 0 auto}.v-dialog--scrollable>.v-card>.v-card__text,.v-dialog--scrollable>form>.v-card>.v-card__text{-webkit-backface-visibility:hidden;backface-visibility:hidden;flex:1 1 auto;overflow-y:auto}@-webkit-keyframes animate-dialog{0%{transform:scale(1)}50%{transform:scale(1.03)}to{transform:scale(1)}}@keyframes animate-dialog{0%{transform:scale(1)}50%{transform:scale(1.03)}to{transform:scale(1)}}",""]),e.exports=r},448:function(e,t,n){"use strict";n.r(t);n(24);var r={props:{mdlText:{type:String,default:null},itemno:{type:Number,default:null},mdlBtnText:{type:String,default:null},showbtn:{type:Boolean,default:!0},fullscreen:{type:Boolean,default:!0}},data:function(){return{dialog:!1,notifications:!1,sound:!0,widgets:!1}},methods:{saveItem:function(){this.$emit("clicked-save")},newItem:function(){this.$emit("clicked-new")}}},o=n(70),l=n(86),c=n.n(l),d=n(215),h=n(430),f=n(460),m=n(482),v=n(180),y=n(181),x=n(114),w=n(85),O=n(422),_=n(49),I=n(195),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-dialog",{attrs:{fullscreen:e.fullscreen,eager:"","hide-overlay":"",transition:"dialog-bottom-transition"},scopedSlots:e._u([e.showbtn?{key:"activator",fn:function(t){var r=t.on,o=t.attrs;return[n("v-btn",e._g(e._b({attrs:{color:"primary",dark:""},on:{click:function(t){return e.newItem()}}},"v-btn",o,!1),r),[e._v("\n      "+e._s(e.mdlBtnText)+"\n    ")])]}}:null],null,!0),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[e._v(" "),n("v-card",[n("v-toolbar",{attrs:{dark:"",color:"primary"}},[n("v-btn",{attrs:{icon:"",dark:""},on:{click:function(t){e.dialog=!1}}},[n("v-icon",[e._v("mdi-close")])],1),e._v(" "),n("v-toolbar-title",[e._v(e._s(e.mdlText))]),e._v(" "),n("v-spacer"),e._v(" "),n("v-toolbar-items",[n("v-btn",{attrs:{dark:"",text:""},on:{click:function(t){return e.saveItem()}}},[e._v("\n          Kaydet\n        ")])],1)],1),e._v(" "),n("v-list",{attrs:{"three-line":"",subheader:""}},[n("v-list-item",[n("v-list-item-content",[e._t("default")],2)],1)],1),e._v(" "),n("v-divider")],1)],1)}),[],!1,null,null,null);t.default=component.exports;c()(component,{VBtn:d.a,VCard:h.a,VDialog:f.a,VDivider:m.a,VIcon:v.a,VList:y.a,VListItem:x.a,VListItemContent:w.a,VSpacer:O.a,VToolbar:_.a,VToolbarItems:I.a,VToolbarTitle:I.b})},454:function(e,t,n){"use strict";n(8),n(12),n(13),n(14);var r=n(2),o=(n(24),n(11),n(33),n(57),n(434),n(9),n(20),n(435),n(436),n(437),n(438),n(439),n(440),n(441),n(442),n(443),n(444),n(445),n(446),n(447),n(21),n(36),n(10),n(65),n(275),n(1)),l=n(79),c=n(0);function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function h(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var f=["sm","md","lg","xl"],m=f.reduce((function(e,t){return e[t]={type:[Boolean,String,Number],default:!1},e}),{}),v=f.reduce((function(e,t){return e["offset"+Object(c.F)(t)]={type:[String,Number],default:null},e}),{}),y=f.reduce((function(e,t){return e["order"+Object(c.F)(t)]={type:[String,Number],default:null},e}),{}),x={col:Object.keys(m),offset:Object.keys(v),order:Object.keys(y)};function w(e,t,n){var r=e;if(null!=n&&!1!==n){if(t){var o=t.replace(e,"");r+="-".concat(o)}return"col"!==e||""!==n&&!0!==n?(r+="-".concat(n)).toLowerCase():r.toLowerCase()}}var O=new Map;t.a=o.a.extend({name:"v-col",functional:!0,props:h(h(h(h({cols:{type:[Boolean,String,Number],default:!1}},m),{},{offset:{type:[String,Number],default:null}},v),{},{order:{type:[String,Number],default:null}},y),{},{alignSelf:{type:String,default:null,validator:function(e){return["auto","start","end","center","baseline","stretch"].includes(e)}},tag:{type:String,default:"div"}}),render:function(e,t){var n=t.props,data=t.data,o=t.children,c=(t.parent,"");for(var d in n)c+=String(n[d]);var h=O.get(c);return h||function(){var e,t;for(t in h=[],x)x[t].forEach((function(e){var r=n[e],o=w(t,e,r);o&&h.push(o)}));var o=h.some((function(e){return e.startsWith("col-")}));h.push((e={col:!o||!n.cols},Object(r.a)(e,"col-".concat(n.cols),n.cols),Object(r.a)(e,"offset-".concat(n.offset),n.offset),Object(r.a)(e,"order-".concat(n.order),n.order),Object(r.a)(e,"align-self-".concat(n.alignSelf),n.alignSelf),e)),O.set(c,h)}(),e(n.tag,Object(l.a)(data,{class:h}),o)}})},456:function(e,t,n){var content=n(457);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(19).default)("50788f08",content,!0,{sourceMap:!1})},457:function(e,t,n){var r=n(18)(!1);r.push([e.i,".v-toolbar__content,.v-toolbar__extension{border-bottom:1px solid #efefef}.v-input .v-label,input{font-size:12px}.v-autocomplete.v-input>.v-input__control>.v-input__slot{cursor:text}.v-autocomplete input{align-self:center}.v-autocomplete.v-select.v-input--is-focused input{min-width:64px}.v-autocomplete:not(.v-input--is-focused).v-select--chips input{max-height:0;padding:0}.v-autocomplete--is-selecting-index input{opacity:0}.v-autocomplete.v-text-field--enclosed:not(.v-text-field--solo):not(.v-text-field--single-line):not(.v-text-field--outlined) .v-select__slot>input{margin-top:24px}.v-autocomplete.v-text-field--enclosed:not(.v-text-field--solo):not(.v-text-field--single-line):not(.v-text-field--outlined).v-input--dense .v-select__slot>input{margin-top:20px}.v-autocomplete:not(.v-input--is-disabled).v-select.v-text-field input{pointer-events:inherit}.v-autocomplete__content.v-menu__content,.v-autocomplete__content.v-menu__content .v-card{border-radius:0}",""]),e.exports=r},460:function(e,t,n){"use strict";var r=n(63),o=n(2),l=(n(24),n(52),n(50),n(36),n(51),n(71),n(11),n(8),n(12),n(13),n(10),n(14),n(432),n(404)),c=n(103),d=n(120),h=n(197),f=n(204),m=n(203),v=n(202),y=n(39),x=n(121),w=n(5),O=n(7),_=n(0);function I(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function S(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?I(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):I(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var k=Object(w.a)(c.a,d.a,h.a,f.a,m.a,v.a,y.a);t.a=k.extend({name:"v-dialog",directives:{ClickOutside:x.a},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:{type:[String,Number],default:"none"},noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:{type:[String,Number],default:"auto"}},data:function(){return{activatedBy:null,animate:!1,animateTimeout:-1,isActive:!!this.value,stackMinZIndex:200,previousActiveElement:null}},computed:{classes:function(){var e;return e={},Object(o.a)(e,"v-dialog ".concat(this.contentClass).trim(),!0),Object(o.a)(e,"v-dialog--active",this.isActive),Object(o.a)(e,"v-dialog--persistent",this.persistent),Object(o.a)(e,"v-dialog--fullscreen",this.fullscreen),Object(o.a)(e,"v-dialog--scrollable",this.scrollable),Object(o.a)(e,"v-dialog--animated",this.animate),e},contentClasses:function(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator:function(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive:function(e){var t;e?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind(),null==(t=this.previousActiveElement)||t.focus())},fullscreen:function(e){this.isActive&&(e?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created:function(){this.$attrs.hasOwnProperty("full-width")&&Object(O.e)("full-width",this)},beforeMount:function(){var e=this;this.$nextTick((function(){e.isBooted=e.isActive,e.isActive&&e.show()}))},beforeDestroy:function(){"undefined"!=typeof window&&this.unbind()},methods:{animateClick:function(){var e=this;this.animate=!1,this.$nextTick((function(){e.animate=!0,window.clearTimeout(e.animateTimeout),e.animateTimeout=window.setTimeout((function(){return e.animate=!1}),150)}))},closeConditional:function(e){var t=e.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(t)||this.overlay&&t&&!this.overlay.$el.contains(t))&&this.activeZIndex>=this.getMaxZIndex()},hideScroll:function(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):f.a.options.methods.hideScroll.call(this)},show:function(){var e=this;!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick((function(){e.$nextTick((function(){e.previousActiveElement=document.activeElement,e.$refs.content.focus(),e.bind()}))}))},bind:function(){window.addEventListener("focusin",this.onFocusin)},unbind:function(){window.removeEventListener("focusin",this.onFocusin)},onClickOutside:function(e){this.$emit("click:outside",e),this.persistent?this.noClickAnimation||this.animateClick():this.isActive=!1},onKeydown:function(e){if(e.keyCode===_.x.esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;var t=this.getActivator();this.$nextTick((function(){return t&&t.focus()}))}this.$emit("keydown",e)},onFocusin:function(e){if(e&&this.retainFocus){var t=e.target;if(t&&![document,this.$refs.content].includes(t)&&!this.$refs.content.contains(t)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some((function(e){return e.contains(t)}))){var n=this.$refs.content.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'),o=Object(r.a)(n).find((function(e){return!e.hasAttribute("disabled")}));o&&o.focus()}}},genContent:function(){var e=this;return this.showLazyContent((function(){return[e.$createElement(l.a,{props:{root:!0,light:e.light,dark:e.dark}},[e.$createElement("div",{class:e.contentClasses,attrs:S({role:"document",tabindex:e.isActive?0:void 0},e.getScopeIdAttrs()),on:{keydown:e.onKeydown},style:{zIndex:e.activeZIndex},ref:"content"},[e.genTransition()])])]}))},genTransition:function(){var content=this.genInnerContent();return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,appear:!0}},[content]):content},genInnerContent:function(){var data={class:this.classes,ref:"dialog",directives:[{name:"click-outside",value:{handler:this.onClickOutside,closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],style:{transformOrigin:this.origin}};return this.fullscreen||(data.style=S(S({},data.style),{},{maxWidth:"none"===this.maxWidth?void 0:Object(_.g)(this.maxWidth),width:"auto"===this.width?void 0:Object(_.g)(this.width)})),this.$createElement("div",data,this.getContentSlot())}},render:function(e){return e("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":""===this.attach||!0===this.attach||"attach"===this.attach},attrs:{role:"dialog"}},[this.genActivator(),this.genContent()])}})},474:function(e,t,n){"use strict";var r=n(2),o=(n(36),n(51),n(201),n(12),n(10),n(50),n(71),n(11),n(8),n(13),n(14),n(5)),l=n(88),c=n(119);function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function h(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}t.a=Object(o.a)(l.a,Object(c.b)("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(e){var t=Object.values(e).includes(!0);this.$emit("input",!t)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var e=this,t=function(input){return input.$watch("hasError",(function(t){e.$set(e.errorBag,input._uid,t)}),{immediate:!0})},n={_uid:input._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?n.shouldValidate=input.$watch("shouldValidate",(function(r){r&&(e.errorBag.hasOwnProperty(input._uid)||(n.valid=t(input)))})):n.valid=t(input),n},validate:function(){return 0===this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){this.inputs.forEach((function(input){return input.reset()})),this.resetErrorBag()},resetErrorBag:function(){var e=this;this.lazyValidation&&setTimeout((function(){e.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(input){return input.resetValidation()})),this.resetErrorBag()},register:function(input){this.inputs.push(input),this.watchers.push(this.watchInput(input))},unregister:function(input){var e=this.inputs.find((function(i){return i._uid===input._uid}));if(e){var t=this.watchers.find((function(i){return i._uid===e._uid}));t&&(t.valid(),t.shouldValidate()),this.watchers=this.watchers.filter((function(i){return i._uid!==e._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==e._uid})),this.$delete(this.errorBag,e._uid)}}},render:function(e){var t=this;return e("form",{staticClass:"v-form",attrs:h({novalidate:!0},this.attrs$),on:{submit:function(e){return t.$emit("submit",e)}}},this.$slots.default)}})},503:function(e,t,n){"use strict";n(11),n(8),n(13),n(10),n(14);var r=n(2),o=(n(61),n(12),n(52),n(71),n(36),n(51),n(456),n(476)),l=n(466),c=n(79),d=n(0);function h(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function f(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var m=f(f({},o.b),{},{offsetY:!0,offsetOverflow:!0,transition:!1});t.a=o.a.extend({name:"v-autocomplete",props:{allowOverflow:{type:Boolean,default:!0},autoSelectFirst:{type:Boolean,default:!1},filter:{type:Function,default:function(e,t,n){return n.toLocaleLowerCase().indexOf(t.toLocaleLowerCase())>-1}},hideNoData:Boolean,menuProps:{type:o.a.options.props.menuProps.type,default:function(){return m}},noFilter:Boolean,searchInput:{type:String}},data:function(){return{lazySearch:this.searchInput}},computed:{classes:function(){return f(f({},o.a.options.computed.classes.call(this)),{},{"v-autocomplete":!0,"v-autocomplete--is-selecting-index":this.selectedIndex>-1})},computedItems:function(){return this.filteredItems},selectedValues:function(){var e=this;return this.selectedItems.map((function(t){return e.getValue(t)}))},hasDisplayedItems:function(){var e=this;return this.hideSelected?this.filteredItems.some((function(t){return!e.hasItem(t)})):this.filteredItems.length>0},currentRange:function(){return null==this.selectedItem?0:String(this.getText(this.selectedItem)).length},filteredItems:function(){var e=this;return!this.isSearching||this.noFilter||null==this.internalSearch?this.allItems:this.allItems.filter((function(t){var n=Object(d.r)(t,e.itemText),text=null!=n?String(n):"";return e.filter(t,String(e.internalSearch),text)}))},internalSearch:{get:function(){return this.lazySearch},set:function(e){this.lazySearch!==e&&(this.lazySearch=e,this.$emit("update:search-input",e))}},isAnyValueAllowed:function(){return!1},isDirty:function(){return this.searchIsDirty||this.selectedItems.length>0},isSearching:function(){return this.multiple&&this.searchIsDirty||this.searchIsDirty&&this.internalSearch!==this.getText(this.selectedItem)},menuCanShow:function(){return!!this.isFocused&&(this.hasDisplayedItems||!this.hideNoData)},$_menuProps:function(){var e=o.a.options.computed.$_menuProps.call(this);return e.contentClass="v-autocomplete__content ".concat(e.contentClass||"").trim(),f(f({},m),e)},searchIsDirty:function(){return null!=this.internalSearch&&""!==this.internalSearch},selectedItem:function(){var e=this;return this.multiple?null:this.selectedItems.find((function(i){return e.valueComparator(e.getValue(i),e.getValue(e.internalValue))}))},listData:function(){var data=o.a.options.computed.listData.call(this);return data.props=f(f({},data.props),{},{items:this.virtualizedItems,noFilter:this.noFilter||!this.isSearching||!this.filteredItems.length,searchInput:this.internalSearch}),data}},watch:{filteredItems:"onFilteredItemsChanged",internalValue:"setSearch",isFocused:function(e){e?(document.addEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.select()):(document.removeEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.blur(),this.updateSelf())},isMenuActive:function(e){!e&&this.hasSlot&&(this.lazySearch=null)},items:function(e,t){t&&t.length||!this.hideNoData||!this.isFocused||this.isMenuActive||!e.length||this.activateMenu()},searchInput:function(e){this.lazySearch=e},internalSearch:"onInternalSearchChanged",itemText:"updateSelf"},created:function(){this.setSearch()},destroyed:function(){document.removeEventListener("copy",this.onCopy)},methods:{onFilteredItemsChanged:function(e,t){var n=this;e!==t&&(this.setMenuIndex(-1),this.$nextTick((function(){n.internalSearch&&(1===e.length||n.autoSelectFirst)&&(n.$refs.menu.getTiles(),n.setMenuIndex(0))})))},onInternalSearchChanged:function(){this.updateMenuDimensions()},updateMenuDimensions:function(){this.isMenuActive&&this.$refs.menu&&this.$refs.menu.updateDimensions()},changeSelectedIndex:function(e){this.searchIsDirty||(this.multiple&&e===d.x.left?-1===this.selectedIndex?this.selectedIndex=this.selectedItems.length-1:this.selectedIndex--:this.multiple&&e===d.x.right?this.selectedIndex>=this.selectedItems.length-1?this.selectedIndex=-1:this.selectedIndex++:e!==d.x.backspace&&e!==d.x.delete||this.deleteCurrentItem())},deleteCurrentItem:function(){var e=this.selectedIndex,t=this.selectedItems[e];if(this.isInteractive&&!this.getDisabled(t)){var n=this.selectedItems.length-1;if(-1!==this.selectedIndex||0===n){var r=e!==this.selectedItems.length-1?e:e-1;this.selectedItems[r]?this.selectItem(t):this.setValue(this.multiple?[]:null),this.selectedIndex=r}else this.selectedIndex=n}},clearableCallback:function(){this.internalSearch=null,o.a.options.methods.clearableCallback.call(this)},genInput:function(){var input=l.a.options.methods.genInput.call(this);return input.data=Object(c.a)(input.data,{attrs:{"aria-activedescendant":Object(d.p)(this.$refs.menu,"activeTile.id"),autocomplete:Object(d.p)(input.data,"attrs.autocomplete","off")},domProps:{value:this.internalSearch}}),input},genInputSlot:function(){var slot=o.a.options.methods.genInputSlot.call(this);return slot.data.attrs.role="combobox",slot},genSelections:function(){return this.hasSlot||this.multiple?o.a.options.methods.genSelections.call(this):[]},onClick:function(e){this.isInteractive&&(this.selectedIndex>-1?this.selectedIndex=-1:this.onFocus(),this.isAppendInner(e.target)||this.activateMenu())},onInput:function(e){if(!(this.selectedIndex>-1)&&e.target){var t=e.target,n=t.value;t.value&&this.activateMenu(),this.internalSearch=n,this.badInput=t.validity&&t.validity.badInput}},onKeyDown:function(e){var t=e.keyCode;!e.ctrlKey&&[d.x.home,d.x.end].includes(t)||o.a.options.methods.onKeyDown.call(this,e),this.changeSelectedIndex(t)},onSpaceDown:function(e){},onTabDown:function(e){o.a.options.methods.onTabDown.call(this,e),this.updateSelf()},onUpDown:function(e){e.preventDefault(),this.activateMenu()},selectItem:function(e){o.a.options.methods.selectItem.call(this,e),this.setSearch()},setSelectedItems:function(){o.a.options.methods.setSelectedItems.call(this),this.isFocused||this.setSearch()},setSearch:function(){var e=this;this.$nextTick((function(){e.multiple&&e.internalSearch&&e.isMenuActive||(e.internalSearch=!e.selectedItems.length||e.multiple||e.hasSlot?null:e.getText(e.selectedItem))}))},updateSelf:function(){(this.searchIsDirty||this.internalValue)&&(this.valueComparator(this.internalSearch,this.getValue(this.internalValue))||this.setSearch())},hasItem:function(e){return this.selectedValues.indexOf(this.getValue(e))>-1},onCopy:function(e){var t,n;if(-1!==this.selectedIndex){var r=this.selectedItems[this.selectedIndex],o=this.getText(r);null==(t=e.clipboardData)||t.setData("text/plain",o),null==(n=e.clipboardData)||n.setData("text/vnd.vuetify.autocomplete.item+plain",o),e.preventDefault()}}}})},675:function(e,t,n){"use strict";n.r(t);n(11),n(8),n(12),n(13),n(10),n(14);var r=n(2),o=(n(26),n(102));function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var d={computed:c(c({},Object(o.d)({users:function(e){return e.users.users},allroles:function(e){return e.roles.allroles},userrole:function(e){return e.users.userrole}})),Object(o.c)({getUsersCount:"users/getUsersCount",getUsersPerPage:"users/getUsersPerPage",getAllUsers:"users/getAllUsers"})),created:function(){this.getAllRoles()},methods:c(c({},Object(o.b)({getUsers:"users/getUsers",getAllRoles:"roles/getAllRoles",saveUser:"users/saveUser",getRoleById:"users/getRoleById",editUser:"users/editUser",userDelete:"users/userDelete"})),{},{handleOptions:function(e,t){var n=this,r={arama:t,page:e.page,per_page:e.itemsPerPage};this.loading=!0,this.getUsers(r).then((function(e){n.loading=!1}))},clickedEdit:function(e){var t=this;this.status="edit",this.userId=e.id,this.email=e.email,this.userName=e.name,this.password="",this.confirm_password="",this.getRoleById(e.id).then((function(e){t.roles=t.userrole,t.$refs.modals.dialog=!0}))},clickedDelete:function(e){var t=this;this.userDelete(e.id).then((function(){t.handleOptions(t.$refs.dt.options,"")}))},clickedNew:function(){this.status="new",this.email="",this.password="",this.confirm_password="",this.userName=""},clickedSave:function(){var e=this;if(this.$refs.user_form.validate(),"new"==this.status&&this.userValid){var t={name:this.userName,email:this.email,password:this.password,confirm_password:this.confirm_password,roles:this.roles};this.saveUser(t).then((function(){e.$refs.modals.dialog=!1,e.handleOptions(e.$refs.dt.options,"")}))}if("edit"==this.status&&this.userValid){var n={name:this.userName,email:this.email,password:this.password,confirm_password:this.confirm_password,roles:this.roles,id:this.userId};this.editUser(n).then((function(){e.$refs.modals.dialog=!1,e.handleOptions(e.$refs.dt.options,"")}))}}}),data:function(){return{headers:[{text:"User Name",value:"name",sortable:!1},{text:"User Email",value:"email",sortable:!1},{text:"User Roles",value:"roles[0].name",sortable:!1},{text:"Actions",value:"actions",sortable:!1}],loading:!0,datatitle:"Kullanıcılar",keyItem:"id",emailRules:[function(e){return!!e||"Email is required"},function(e){return/.+@.+/.test(e)||"E-mail must be valid"}],passwordRules:[function(e){return!!e||"Password is required"},function(e){return e&&e.length>=5||"Şifre 5 karakterden fazla olmalıdır"},function(e){return/(?=.*[A-Z])/.test(e)||"Şifre en az bir büyük harf içermelidir."},function(e){return/(?=.*\d)/.test(e)||"Şifre en az bir tane sayısal değer içermelidir"}],selectRules:[function(e){return!!e||"Bu alan Gerekli"}],userValid:!1,userName:"",MdlText:"Yeni Kullanıcı Ekle",mdlBtnText:"Yeni Kullanıcı Ekle",email:"",password:"",confirm_password:null,roles:[],userId:0}}},h=n(70),f=n(86),m=n.n(f),v=n(503),y=n(430),x=n(454),w=n(418),O=n(474),_=n(181),I=n(114),S=n(85),k=n(659),j=n(466),component=Object(h.a)(d,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-card",{staticClass:"pb-3 pl-3 mb-5 pt-3",attrs:{outlined:""}},[n("Modals",{ref:"modals",attrs:{mdlText:e.MdlText,mdlBtnText:e.mdlBtnText},on:{"clicked-save":e.clickedSave,"clicked-new":e.clickedNew}},[n("v-list",{staticClass:"pl-0 mb-0"},[n("v-form",{ref:"user_form",model:{value:e.userValid,callback:function(t){e.userValid=t},expression:"userValid"}},[n("v-list-item",{staticClass:"pb-0 mb-0 pb-0 mt-0"},[n("v-list-item-content",{staticClass:"pl-1 mb-0 pb-0"},[n("v-list-item-title",[e._v("Kullanıcı Tanımlama")]),e._v(" "),n("v-list-item-subtitle",[e._v("Yeni Kullanıcı Bilgilerini Girin ve Rolünü Seçin")]),e._v(" "),n("v-container",{attrs:{fluid:""}},[n("v-row",[n("v-col",{staticClass:"pl-0 mb-0 pb-0",attrs:{cols:"12",md:"12",sm:"12",lg:"6"}},[n("v-text-field",{attrs:{counter:255,rules:e.selectRules,label:"Ad Soyad",outlined:"",dense:"",required:""},model:{value:e.userName,callback:function(t){e.userName=t},expression:"userName"}})],1),e._v(" "),n("v-col",{staticClass:"pl-0 mb-0 pb-0",attrs:{cols:"12",md:"12",sm:"12",lg:"6"}},[n("v-text-field",{attrs:{rules:e.emailRules,label:"E-mail",required:"",outlined:"",dense:""},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})],1),e._v(" "),n("v-col",{staticClass:"pl-0 mb-0 pb-0",attrs:{cols:"12",md:"12",sm:"12",lg:"6"}},[n("v-text-field",{attrs:{type:"password",rules:e.passwordRules,label:"Şifre",required:"",outlined:"",dense:""},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1),e._v(" "),n("v-col",{staticClass:"pl-0 mb-0 pb-0",attrs:{cols:"12",md:"12",sm:"12",lg:"6"}},[n("v-text-field",{attrs:{type:"password",rules:[e.password===e.confirm_password||"Şifreler Eşleşmeli"],label:"Şifre Tekrar",required:"",outlined:"",dense:""},model:{value:e.confirm_password,callback:function(t){e.confirm_password=t},expression:"confirm_password"}})],1),e._v(" "),n("v-col",{staticClass:"pl-0 mb-0 pb-0",attrs:{cols:"12",md:"12",sm:"12",lg:"12"}},[n("v-autocomplete",{attrs:{items:e.allroles,"item-text":"name","item-value":"id",rules:e.selectRules,outlined:"",dense:"",label:"Role Seçiniz"},model:{value:e.roles,callback:function(t){e.roles=t},expression:"roles"}})],1)],1)],1)],1)],1)],1)],1)],1)],1),e._v(" "),n("Datatable",{ref:"dt",attrs:{headers:e.headers,items:e.getAllUsers,loading:e.loading,"items-length":e.getUsersCount,title:e.datatitle,keyOfItem:e.keyItem},on:{"handle-options":e.handleOptions,"clicked-delete":e.clickedDelete,"clicked-edit":e.clickedEdit}})],1)}),[],!1,null,null,null);t.default=component.exports;m()(component,{Modals:n(448).default,Datatable:n(427).default}),m()(component,{VAutocomplete:v.a,VCard:y.a,VCol:x.a,VContainer:w.a,VForm:O.a,VList:_.a,VListItem:I.a,VListItemContent:S.a,VListItemSubtitle:S.b,VListItemTitle:S.c,VRow:k.a,VTextField:j.a})}}]);