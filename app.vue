<script setup lang="ts">
import AnimatedBurgerIcon from './components/AnimatedBurgerIcon.vue';
import { ref } from 'vue';
const isOpen = ref(false);
</script>

<template>
  <div>
    <AnimatedBurgerIcon :is-open="isOpen" @click="isOpen = !isOpen" />
  </div>
</template>

<style scoped>
html,
body {
  height: 100%;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #52014d;
}
</style>