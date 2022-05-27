<template>
  <v-app class="app">
    <v-main>
      <div class="header pl-1 pr-3 px-md-6 d-flex justify-space-between align-center">
        <n-link to="/" class="sub">
          <img src="~/static/logo.svg" height="65" class="mt-n2" />
          <div class="white--text font-weight-medium mt-n5 ml-5">
            Corretor associado
          </div>
        </n-link>
        <a
          href="https://api.whatsapp.com/send?phone=5521966251426"
          target="_blank"
          class="link d-flex aling-center font-weight-medium"
        >
          <div class="white--text mr-3">
            Hugo Munhoz
          </div>
          <img src="~/static/whatsapp.png" height="30" />
        </a>
      </div>
      <Nuxt />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout'
}
</script>

<style scoped>
.app {
  background: url("~static/bg.jpeg") no-repeat center center fixed;
  color: black;
  font-family: 'Helvetica Now Text', sans-serif;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}

.header {
  position: sticky;
  top: 0;
  width: 100%;
  height: 5.5rem;
  background: #024D90;
}

.sub {
  font-size: 1.1rem;
  text-decoration: none;
}

.link {
  text-decoration: none;
  font-size: 1.3rem;
}

</style>
