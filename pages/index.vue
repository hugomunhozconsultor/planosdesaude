<template>
  <div class="root d-flex align-center justify-center pa-5">
    <div class="d-flex flex-column align-center text-center">
      <n-link to="/giulia" class="link mt-2 d-block">
        ver Giulia
      </n-link>
      <img src="apple-touch-icon.png" class="heart my-5">
      <n-link to="/hugo" class="link d-block">
        ver Hugo
      </n-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>


<style scoped>

.root {
  background: #f088de;
  width: 100%;
  height: 100%;
}

.link {
  color: #660a57;
  font-size: 2.5rem;
  font-weight: 500;
}

.heart {
  height: 8rem;
  width: 8rem;
}

</style>
