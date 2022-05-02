<template>
  <div class="root d-flex align-center justify-center pa-5">
    <div>
      <n-link to="/giulia" class="link mt-2">
        ver Giulia
      </n-link>
      <br>
      <n-link to="/hugo" class="link">
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

</style>
