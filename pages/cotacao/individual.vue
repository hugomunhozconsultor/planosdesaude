<template>
  <div class="my-12 px-3 px-md-9">
    <div class="root pa-3">
      <div class="type font-weight-bold mb-5">
        Individual
      </div>
      <v-text-field
        v-model="form.nome"
        label="Nome"
        color="#024D90"
        rounded
        outlined
      />
      <v-menu
        v-model="menu1"
        :close-on-content-click="false"
        transition="scale-transition"
        offset-y
        max-width="290px"
        min-width="auto"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="form.nascimento"
            label="Data de nascimento"
            color="#024D90"
            readonly
            rounded
            outlined
            @focus="menu1 = true"
            v-bind="attrs"
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker
          v-model="date"
          no-title
          @input="(val) => { menu1 = false; form.nascimento = formatDate(val) }"
        ></v-date-picker>
      </v-menu>
      <v-text-field
        v-model="form.email"
        :error-messages="emailError"
        label="E-mail"
        color="#024D90"
        rounded
        outlined
        @keydown="emailError = ''; form.email = form.email.replace(' ', '')"
        @change="emailError = ''; form.email = form.email.replace(' ', '')"
      />
      <v-text-field
        v-model="form.celular"
        :error-messages="celularError"
        label="Número de celular (com DDD)"
        type="number"
        color="#024D90"
        class="number-input"
        rounded
        @keydown="celularError = ''; form.celular = form.celular.replace(' ', '').replace(/\D/g,'')"
        @change="celularError = ''; form.celular = form.celular.replace(' ', '').replace(/\D/g,'')"
        outlined
      />
      <v-text-field
        v-model="form.cep"
        :error-messages="cepError"
        label="CEP"
        type="number"
        color="#024D90"
        class="number-input"
        rounded
        outlined
        @keydown="cepError = ''"
      />
      <v-radio-group
        v-model="form.ja_tem_plano"
        label="Já possui plano?"
        class="mb-5"
        row
      >
        <v-radio
          label="Sim"
          :value="true"
        ></v-radio>
        <v-radio
          label="Não"
          :value="false"
        ></v-radio>
      </v-radio-group>
      <v-select
        v-model="form.abordagem_preferida"
        :items="['WhatsApp', 'E-mail', 'Telefone']"
        label="Como prefere ser abordado?"
        rounded
        outlined
      />
      <v-btn
        :block="$vuetify.breakpoint.smAndDown"
        :disabled="!form.nome || !form.nascimento || !form.email || !form.abordagem_preferida || !form.celular || !form.cep"
        :loading="loading"
        color="#024D90"
        class="font-weight-bold btn-text mt-4 mt-md-0 text-center white--text"
        height="70"
        width="150"
        @click="send"
      >
        Enviar
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    form: {
      nome: '',
      nascimento: '',
      email: '',
      celular: null,
      cep: null,
      ja_tem_plano: false,
      abordagem_preferida: ''
    },
    emailError: '',
    celularError: '',
    cepError: '',
    loading: false,
    menu1: false,
    date: ''
  }),
  methods: {
    async send () {
      if (this.form.celular.length < 10) {
        this.celularError = 'Digite um número de celular válido'
      }
      if (this.form.cep.length !== 8) {
        this.cepError = 'Digite um CEP válido'
      }
      if (!this.celularError && !this.cepError) {
        this.loading = true
        const config = {
          method: 'post',
          url: 'https://leads-161d.restdb.io/rest/leads-ind',
          headers: { 
            'x-apikey': '62916f4ac4d5c3756d35a2e6', 
            'content-type': 'application/json', 
            'cache-control': 'no-cache'
          },
          data: JSON.stringify(this.form)
        };
  
        this.$axios(config).then((response) => {
          this.$router.push('/obrigado')
          this.loading = false
        }).catch((e) => {
          this.emailError = 'Digite um email válido'
          this.loading = false
        })
      }
    },
    formatDate (date) {
      if (!date) return null

      const [year, month, day] = date.split('-')
      return `${month}/${day}/${year}`
    }
  }
}
</script>


<style scoped>

.btn-text {
  font-size: 1.1rem;
  letter-spacing: normal;
  border-radius: 10px;
}

.type {
  font-size: 3.6rem;
}

.root {
  max-width: 45rem;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 10px;
}
.number-input >>> input[type="number"] {
  -moz-appearance: textfield;
}
.number-input >>> input::-webkit-outer-spin-button,
.number-input >>> input::-webkit-inner-spin-button {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
}

</style>
