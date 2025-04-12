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
