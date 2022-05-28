<template>
  <div :class="$vuetify.breakpoint.smAndDown ? 'mx-3 mx-sm-5 mt-3' : 'd-flex align-center justify-center flex-column content'">
    <div class="choose pa-3 font-weigth-bold">
      Escolha a modalidade do seu plano
    </div>
    <div class="mt-12 d-flex align-center justify-space-between mr-n4">
      <n-link
        v-for="(option, index) in options" :key="index"
        :to="option.link"
        :style="{
          width: $vuetify.breakpoint.xsOnly ? '110px' : ($vuetify.breakpoint.smOnly ? '200px' : '280px'),
          fontSize: $vuetify.breakpoint.xsOnly ? '0.9rem' : ($vuetify.breakpoint.smOnly ? '1.2rem' : '1.6rem')
        }"
        class="d-flex align-center option flex-column justify-center pa-3 white--text mr-4"
      >
        <v-icon :size="$vuetify.breakpoint.xsOnly ? '50' : ($vuetify.breakpoint.smOnly ? '100' : '150')" color="white">
          {{ option.icon }}
        </v-icon>
        <div class="mt-3 font-weight-bold">
          {{ option.title }}
        </div>
      </n-link>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    options: [
      {
        title: 'INDIVIDUAL',
        icon: 'mdi-account-outline',
        link: '/cotacao/individual'
      },
      {
        title: 'FAMILIAR',
        icon: 'mdi-account-group-outline',
        link: '/cotacao/familiar'
      },
      {
        title: 'EMPRESARIAL',
        icon: 'mdi-office-building',
        link: '/cotacao/empresarial'
      }
    ]
  })
}
</script>


<style scoped>

.choose {
  font-size: 2.7rem;
  line-height: 2.9rem;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.7);
}
.content {
  margin-top: 8rem;
}

.option {
  border-radius: 20px;
  background: #024D90;
  text-decoration: none;
}


</style>
