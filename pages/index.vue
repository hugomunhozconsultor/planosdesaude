<template>
  <div :class="$vuetify.breakpoint.smAndDown ? 'mx-3 mx-sm-5 mt-3' : 'd-flex align-center justify-center'">
    <div :class="{ 'content': $vuetify.breakpoint.mdAndUp }">
      <div class="texts pa-3">
        <div class="big font-weight-bold">
          Venha fazer um plano para sua família ou empresa
        </div>
        <div class="sub mt-10">
          Planos para famílias e empresas com condições especiais.
        </div>
      </div>
      <div class="d-md-flex mt-8">
        <v-btn
          to="/cotacao"
          :block="$vuetify.breakpoint.smAndDown"
          color="#024D90"
          class="font-weight-bold btn-text mr-sm-6 text-center white--text"
          height="70"
          width="360"
          rounded
          @click.native="$gtm.trackEvent({
            event: 'button_click',
            dtL_button: 'cotação'
          })"
        >
          Gostaria de solicitar
          <br>
          uma cotação
        </v-btn>
        <v-btn
          :block="$vuetify.breakpoint.smAndDown"
          href="https://api.whatsapp.com/send?phone=5521966251426"
          target="_blank"
          color="#024D90"
          class="font-weight-bold btn-text mt-4 mt-md-0 text-center white--text"
          height="70"
          width="360"
          @click.native="$gtm.trackEvent({
            event: 'button_click',
            dtL_button: 'direto'
          })"
        >
          Quero falar diretamente
          <br>
          com um corretor
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$gtm.trackView('Home', '/')
  },
  head: {
    title: 'Home'
  }
}
</script>


<style scoped>

.content {
  margin-top: 8rem;
  width: 80%;
}

.big {
  font-size: 2.7rem;
  line-height: 2.9rem;
}

.sub {
  font-size: 2rem;
  line-height: 2.34rem;
  max-width: 27rem;
}

.texts {
  max-width: 38rem;
  background: rgba(255, 255, 255, 0.7);
  border-radius: 10px;
}

.btn-text {
  font-size: 1.4rem !important;
  line-height: 1.5rem;
  letter-spacing: normal;
  border-radius: 10px;
}

</style>
