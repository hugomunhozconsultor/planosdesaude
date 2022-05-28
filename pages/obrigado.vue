<template>
  <div :class="$vuetify.breakpoint.smAndDown ? 'mx-3 mx-sm-5 mt-3' : 'd-flex align-center justify-center'">
    <div :class="{ 'content': $vuetify.breakpoint.mdAndUp }">
      <div class="texts pa-3">
        <div class="big font-weight-black">
          OBRIGADO
        </div>
        <div class="sub mt-10 font-weight-bold">
          Em até 24 horas um de nossos corretores vai entrar em contato com você.
          <br>
          <br>
          Até breve.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
  max-width: 40rem;
}

.texts {
  max-width: 45rem;
  background: rgba(255, 255, 255, 0.7);
  border-radius: 10px;
}

</style>
