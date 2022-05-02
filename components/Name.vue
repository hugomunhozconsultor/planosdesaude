<template>
  <div class="root d-flex align-center justify-center pa-5">
    <div class="text-center">
      <n-link to="/" class="link">
        home
      </n-link>
      <div class="name mt-12">
        {{ name }}
      </div>
      <n-link :to="seeUrl" class="link mt-2">
        ver {{ seeName }}
      </n-link>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    name: {
      type: String,
      required: true
    },
    seeName: {
      type: String,
      required: true
    },
    seeUrl: {
      type: String,
      required: true
    }
  }
}
</script>


<style scoped>

.root {
  background: #f088de;
  width: 100%;
  height: 100%;
}

.name {
  color: white;
  font-size: 4rem;
  font-weight: bold;
}

.link {
  color: #660a57;
  font-size: 1.5rem;
  font-weight: 500;
}

</style>
