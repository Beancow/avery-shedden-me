<script setup type="ts">
  import AnimatedBurger from '../../../components/AnimatedBurgerIcon/AnimatedBurgerIcon.vue';
  import { ref } from 'vue';
  const isOpen = ref(false);
  const toggle = () => {
    isOpen.value = !isOpen.value;
  };
</script>

<template>
  <div>
    <AnimatedBurger :is-open="isOpen" @click="toggle" class="absolute top-4 left-4 z-50" />
  </div>
</template>

<style scoped></style>
