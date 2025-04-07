<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="navOuter">
    <nav>
      <RouterLink to="/">Home</RouterLink>
    </nav>
  </div>

  <RouterView />
</template>

<style scoped>
template {
  display: grid;
  grid-template-columns: 1fr 80vw;
  height: 100vh;
}

.navOuter {
  display: grid;
  grid-template-columns: 1fr;
  height: auto;
}

nav {
  position: fixed;
  top: 20px;
  left: 20px;
}
</style>
