<template>
  <div class="mt-12 px-3 px-md-9">
    <v-btn
      :block="$vuetify.breakpoint.smAndDown"
      to="/obrigado"
      color="#024D90"
      class="font-weight-bold btn-text mt-4 mt-md-0 text-center"
      height="70"
      width="150"
    >
      Enviar
    </v-btn>
  </div>
</template>

<script>
export default {
  name: 'Cotação empresarial'
}
</script>


<style scoped>

.btn-text {
  font-size: 1.1rem;
  letter-spacing: normal;
  border-radius: 10px;
}


</style>
