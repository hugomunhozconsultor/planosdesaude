(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{394:function(e,r,o){var content=o(479);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(70).default)("63a297ae",content,!0,{sourceMap:!1})},478:function(e,r,o){"use strict";o(394)},479:function(e,r,o){var t=o(69)(!1);t.push([e.i,".btn-text[data-v-6f01a4a7]{font-size:1.1rem;letter-spacing:normal;border-radius:10px}.type[data-v-6f01a4a7]{font-size:3.6rem}.root[data-v-6f01a4a7]{max-width:45rem;background:hsla(0,0%,100%,.9);border-radius:10px}.number-input[data-v-6f01a4a7] input[type=number]{-moz-appearance:textfield}.number-input[data-v-6f01a4a7] input::-webkit-inner-spin-button,.number-input[data-v-6f01a4a7] input::-webkit-outer-spin-button{appearance:none;-webkit-appearance:none;-moz-appearance:none}",""]),e.exports=t},508:function(e,r,o){"use strict";o.r(r);var t=o(21),l=(o(89),o(24),o(52),{data:function(){return{form:{nome:"",email:"",celular:null,cep:null,ja_tem_plano:!1,abordagem_preferida:""},emailError:"",celularError:"",cepError:"",loading:!1}},methods:{send:function(){var e=this;return Object(t.a)(regeneratorRuntime.mark((function r(){var o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:e.form.email=e.form.email.replace(" ",""),e.form.celular=e.form.celular.replace(" ","").replace(/\D/g,""),e.form.celular.length<10&&(e.celularError="Digite um número de celular válido"),8!==e.form.cep.length&&(e.cepError="Digite um CEP válido"),e.celularError||e.cepError||(e.loading=!0,o={method:"post",url:"https://leads-161d.restdb.io/rest/leads-fam",headers:{"x-apikey":"62916f4ac4d5c3756d35a2e6","content-type":"application/json","cache-control":"no-cache"},data:JSON.stringify(e.form)},e.$axios(o).then((function(r){e.$router.push("/obrigado"),e.loading=!1,e.$gtm.trackEvent({event:"send_form",dtL_tipoDeCotacao:"FAMILIAR"})})).catch((function(r){e.emailError="Digite um email válido",e.loading=!1})));case 5:case"end":return r.stop()}}),r)})))()}},mounted:function(){this.$gtm.trackView("Cotação Familiar","/cotacao/familiar")},head:{title:"Cotação Familiar"}}),n=(o(478),o(77)),c=o(111),m=o.n(c),d=o(399),f=o(511),v=o(502),h=o(504),_=o(499),component=Object(n.a)(l,(function(){var e=this,r=e.$createElement,o=e._self._c||r;return o("div",{staticClass:"my-12 px-3 px-md-9"},[o("div",{staticClass:"root pa-3"},[o("div",{staticClass:"type font-weight-bold mb-5"},[e._v("\n      Familiar (Adesão)\n    ")]),e._v(" "),o("v-text-field",{attrs:{label:"Nome",color:"#024D90",rounded:"",outlined:""},model:{value:e.form.nome,callback:function(r){e.$set(e.form,"nome",r)},expression:"form.nome"}}),e._v(" "),o("v-text-field",{attrs:{"error-messages":e.emailError,label:"E-mail",color:"#024D90",rounded:"",outlined:""},on:{keydown:function(r){e.emailError="",e.form.email=e.form.email.replace(" ","")},change:function(r){e.emailError="",e.form.email=e.form.email.replace(" ","")}},model:{value:e.form.email,callback:function(r){e.$set(e.form,"email",r)},expression:"form.email"}}),e._v(" "),o("v-text-field",{staticClass:"number-input",attrs:{"error-messages":e.celularError,label:"Número de celular (com DDD)",type:"number",color:"#024D90",rounded:"",outlined:""},on:{keydown:function(r){e.celularError="",e.form.celular=e.form.celular.replace(" ","").replace(/\D/g,"")},change:function(r){e.celularError="",e.form.celular=e.form.celular.replace(" ","").replace(/\D/g,"")}},model:{value:e.form.celular,callback:function(r){e.$set(e.form,"celular",r)},expression:"form.celular"}}),e._v(" "),o("v-text-field",{staticClass:"number-input",attrs:{"error-messages":e.cepError,label:"CEP",type:"number",color:"#024D90",rounded:"",outlined:""},on:{keydown:function(r){e.cepError=""}},model:{value:e.form.cep,callback:function(r){e.$set(e.form,"cep",r)},expression:"form.cep"}}),e._v(" "),o("v-radio-group",{staticClass:"mb-5",attrs:{label:"Já possui plano?",row:""},model:{value:e.form.ja_tem_plano,callback:function(r){e.$set(e.form,"ja_tem_plano",r)},expression:"form.ja_tem_plano"}},[o("v-radio",{attrs:{label:"Sim",value:!0}}),e._v(" "),o("v-radio",{attrs:{label:"Não",value:!1}})],1),e._v(" "),o("v-select",{attrs:{items:["WhatsApp","E-mail","Telefone"],label:"Como prefere ser abordado?",rounded:"",outlined:""},model:{value:e.form.abordagem_preferida,callback:function(r){e.$set(e.form,"abordagem_preferida",r)},expression:"form.abordagem_preferida"}}),e._v(" "),o("v-btn",{staticClass:"font-weight-bold btn-text mt-4 mt-md-0 text-center white--text",attrs:{block:e.$vuetify.breakpoint.smAndDown,disabled:!(e.form.nome&&e.form.email&&e.form.abordagem_preferida&&e.form.celular&&e.form.cep),loading:e.loading,color:"#024D90",height:"70",width:"150"},on:{click:e.send}},[e._v("\n      Enviar\n    ")])],1)])}),[],!1,null,"6f01a4a7",null);r.default=component.exports;m()(component,{VBtn:d.a,VRadio:f.a,VRadioGroup:v.a,VSelect:h.a,VTextField:_.a})}}]);