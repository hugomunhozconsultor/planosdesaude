(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{345:function(t,e,n){"use strict";n(31),n(28),n(36),n(41),n(27),n(42);var o=n(16),r=n(13),c=(n(24),n(88),n(162),n(8),n(75),n(0)),l=n(40),f=n(60);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=c.a.extend({name:"colorable",props:{color:String},methods:{setBackgroundColor:function(t){var data=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return"string"==typeof data.style?(Object(l.b)("style must be an object",this),data):"string"==typeof data.class?(Object(l.b)("class must be an object",this),data):(Object(f.d)(t)?data.style=h(h({},data.style),{},{"background-color":"".concat(t),"border-color":"".concat(t)}):t&&(data.class=h(h({},data.class),{},Object(r.a)({},t,!0))),data)},setTextColor:function(t){var data=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if("string"==typeof data.style)return Object(l.b)("style must be an object",this),data;if("string"==typeof data.class)return Object(l.b)("class must be an object",this),data;if(Object(f.d)(t))data.style=h(h({},data.style),{},{color:"".concat(t),"caret-color":"".concat(t)});else if(t){var e=t.toString().trim().split(" ",2),n=Object(o.a)(e,2),c=n[0],d=n[1];data.class=h(h({},data.class),{},Object(r.a)({},c+"--text",!0)),d&&(data.class["text--"+d]=!0)}return data}}})},348:function(t,e,n){"use strict";var o=n(0);function r(t){return function(e,n){for(var o in n)Object.prototype.hasOwnProperty.call(e,o)||this.$delete(this.$data[t],o);for(var r in e)this.$set(this.$data[t],r,e[r])}}e.a=o.a.extend({data:function(){return{attrs$:{},listeners$:{}}},created:function(){this.$watch("$attrs",r("attrs$"),{immediate:!0}),this.$watch("$listeners",r("listeners$"),{immediate:!0})}})},351:function(t,e,n){"use strict";var o=n(3),r=n(233);o({target:"String",proto:!0,forced:n(234)("small")},{small:function(){return r(this,"small","","")}})},354:function(t,e,n){"use strict";n(351);var o=n(0);e.a=o.a.extend({name:"sizeable",props:{large:Boolean,small:Boolean,xLarge:Boolean,xSmall:Boolean},computed:{medium:function(){return Boolean(!(this.xSmall||this.small||this.large||this.xLarge))},sizeableClasses:function(){return{"v-size--x-small":this.xSmall,"v-size--small":this.small,"v-size--default":this.medium,"v-size--large":this.large,"v-size--x-large":this.xLarge}}}})},363:function(t,e,n){"use strict";n(31),n(28),n(36),n(41),n(27),n(42);var o,r=n(13),c=(n(351),n(8),n(71),n(74),n(24),n(232),n(162),n(235),n(50),n(364),n(348)),l=n(345),f=n(354),d=n(160),h=n(19),v=n(0),m=n(159);function y(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function x(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?y(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):y(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}!function(t){t.xSmall="12px",t.small="16px",t.default="24px",t.medium="28px",t.large="36px",t.xLarge="40px"}(o||(o={}));var O=Object(m.a)(c.a,l.a,f.a,d.a).extend({name:"v-icon",props:{dense:Boolean,disabled:Boolean,left:Boolean,right:Boolean,size:[Number,String],tag:{type:String,required:!1,default:"i"}},computed:{medium:function(){return!1},hasClickListener:function(){return Boolean(this.listeners$.click||this.listeners$["!click"])}},methods:{getIcon:function(){var t="";return this.$slots.default&&(t=this.$slots.default[0].text.trim()),Object(h.u)(this,t)},getSize:function(){var t={xSmall:this.xSmall,small:this.small,medium:this.medium,large:this.large,xLarge:this.xLarge},e=Object(h.r)(t).find((function(e){return t[e]}));return e&&o[e]||Object(h.d)(this.size)},getDefaultData:function(){return{staticClass:"v-icon notranslate",class:{"v-icon--disabled":this.disabled,"v-icon--left":this.left,"v-icon--link":this.hasClickListener,"v-icon--right":this.right,"v-icon--dense":this.dense},attrs:x({"aria-hidden":!this.hasClickListener,disabled:this.hasClickListener&&this.disabled,type:this.hasClickListener?"button":void 0},this.attrs$),on:this.listeners$}},getSvgWrapperData:function(){var t=this.getSize(),e=x(x({},this.getDefaultData()),{},{style:t?{fontSize:t,height:t,width:t}:void 0});return this.applyColors(e),e},applyColors:function(data){data.class=x(x({},data.class),this.themeClasses),this.setTextColor(this.color,data)},renderFontIcon:function(t,e){var n=[],data=this.getDefaultData(),o="material-icons",r=t.indexOf("-"),c=r<=-1;c?n.push(t):function(t){return["fas","far","fal","fab","fad","fak"].some((function(e){return t.includes(e)}))}(o=t.slice(0,r))&&(o=""),data.class[o]=!0,data.class[t]=!c;var l=this.getSize();return l&&(data.style={fontSize:l}),this.applyColors(data),e(this.hasClickListener?"button":this.tag,data,n)},renderSvgIcon:function(t,e){var n={class:"v-icon__svg",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",role:"img","aria-hidden":!0}},o=this.getSize();return o&&(n.style={fontSize:o,height:o,width:o}),e(this.hasClickListener?"button":"span",this.getSvgWrapperData(),[e("svg",n,[e("path",{attrs:{d:t}})])])},renderSvgIconComponent:function(t,e){var data={class:{"v-icon__component":!0}},n=this.getSize();n&&(data.style={fontSize:n,height:n,width:n}),this.applyColors(data);var component=t.component;return data.props=t.props,data.nativeOn=data.on,e(this.hasClickListener?"button":"span",this.getSvgWrapperData(),[e(component,data)])}},render:function(t){var e=this.getIcon();return"string"==typeof e?function(t){return/^[mzlhvcsqta]\s*[-+.0-9][^mlhvzcsqta]+/i.test(t)&&/[\dz]$/i.test(t)&&t.length>4}(e)?this.renderSvgIcon(e,t):this.renderFontIcon(e,t):this.renderSvgIconComponent(e,t)}});e.a=v.a.extend({name:"v-icon",$_wrapperFor:O,functional:!0,render:function(t,e){var data=e.data,n=e.children,o="";return data.domProps&&(o=data.domProps.textContent||data.domProps.innerHTML||o,delete data.domProps.textContent,delete data.domProps.innerHTML),t(O,data,o?[o]:n)}})},364:function(t,e,n){var content=n(365);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(70).default)("6b715e77",content,!0,{sourceMap:!1})},365:function(t,e,n){var o=n(69)(!1);o.push([t.i,'.theme--light.v-icon{color:rgba(0,0,0,.54)}.theme--light.v-icon:focus:after{opacity:.12}.theme--light.v-icon.v-icon.v-icon--disabled{color:rgba(0,0,0,.38)!important}.theme--dark.v-icon{color:#fff}.theme--dark.v-icon:focus:after{opacity:.24}.theme--dark.v-icon.v-icon.v-icon--disabled{color:hsla(0,0%,100%,.5)!important}.v-icon.v-icon{align-items:center;display:inline-flex;font-feature-settings:"liga";font-size:24px;justify-content:center;letter-spacing:normal;line-height:1;position:relative;text-indent:0;transition:.3s cubic-bezier(.25,.8,.5,1),visibility 0s;vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-icon.v-icon:after{background-color:currentColor;border-radius:50%;content:"";display:inline-block;height:100%;left:0;opacity:0;pointer-events:none;position:absolute;top:0;transform:scale(1.3);width:100%;transition:opacity .2s cubic-bezier(.4,0,.6,1)}.v-icon.v-icon--dense{font-size:20px}.v-icon--right{margin-left:8px}.v-icon--left{margin-right:8px}.v-icon.v-icon.v-icon--link{cursor:pointer;outline:none}.v-icon--disabled{pointer-events:none}.v-icon--dense .v-icon__component,.v-icon--dense .v-icon__svg{height:20px}.v-icon__component,.v-icon__svg{height:24px;width:24px}.v-icon__svg{fill:currentColor}',""]),t.exports=o},379:function(t,e,n){var content=n(401);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(70).default)("a570d48a",content,!0,{sourceMap:!1})},400:function(t,e,n){"use strict";n(379)},401:function(t,e,n){var o=n(69)(!1);o.push([t.i,".choose[data-v-5b6ef2ff]{font-size:2.7rem;line-height:2.9rem;border-radius:10px;background:hsla(0,0%,100%,.7)}.content[data-v-5b6ef2ff]{margin-top:8rem}.option[data-v-5b6ef2ff]{border-radius:20px;background:#024d90;text-decoration:none}",""]),t.exports=o},505:function(t,e,n){"use strict";n.r(e);var o={data:function(){return{options:[{title:"INDIVIDUAL",icon:"mdi-account-outline",link:"/cotacao/individual"},{title:"FAMILIAR",icon:"mdi-account-group-outline",link:"/cotacao/familiar"},{title:"EMPRESARIAL",icon:"mdi-office-building",link:"/cotacao/empresarial"}]}},mounted:function(){this.$gtm.trackView("Cotação","/cotacao")},head:{title:"Cotação"}},r=(n(400),n(77)),c=n(111),l=n.n(c),f=n(363),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.$vuetify.breakpoint.smAndDown?"mx-3 mx-sm-5 mt-3":"d-flex align-center justify-center flex-column content"},[n("div",{staticClass:"choose pa-3 font-weigth-bold"},[t._v("\n    Escolha a modalidade do seu plano\n  ")]),t._v(" "),n("div",{staticClass:"mt-12 d-flex align-center justify-space-between mr-n4"},t._l(t.options,(function(option,e){return n("n-link",{key:e,staticClass:"d-flex align-center option flex-column justify-center pa-3 white--text mr-4",style:{width:t.$vuetify.breakpoint.xsOnly?"110px":t.$vuetify.breakpoint.smOnly?"200px":"280px",fontSize:t.$vuetify.breakpoint.xsOnly?"0.9rem":t.$vuetify.breakpoint.smOnly?"1.2rem":"1.6rem"},attrs:{to:option.link},nativeOn:{click:function(e){return t.$gtm.trackEvent({event:"choose_type",dtL_tipoDeCotacao:option.title})}}},[n("v-icon",{attrs:{size:t.$vuetify.breakpoint.xsOnly?"50":t.$vuetify.breakpoint.smOnly?"100":"150",color:"white"}},[t._v("\n        "+t._s(option.icon)+"\n      ")]),t._v(" "),n("div",{staticClass:"mt-3 font-weight-bold"},[t._v("\n        "+t._s(option.title)+"\n      ")])],1)})),1)])}),[],!1,null,"5b6ef2ff",null);e.default=component.exports;l()(component,{VIcon:f.a})}}]);