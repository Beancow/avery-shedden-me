<template>
    <div v-if="isMobile" class="top-bar">
        <DropDown />
    </div>
    <div v-else class="nav-links">
        <router-link v-for="item in menuItems" :key="item.label" :to="item.href" class="nav-item"
            :class="{ active: currentRoute === item.href }">
            {{ item.label }}
        </router-link>
    </div>
</template>

<script setup>
import menuItems from './navMenu.js'
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useMediaQuery } from '@vueuse/core'
import DropDown from '../DropDownMenu/DropDown.vue'

const route = useRoute()
const currentRoute = computed(() => route.path)
const isMobile = useMediaQuery('(max-width: 768px)')
</script>

<style scoped>
.nav-links {
    display: grid;
    grid-auto-flow: column;
    gap: 2rem;
    justify-content: center;
}

.nav-item {
    text-decoration: none;
    color: #333;
    font-weight: 500;
}

.nav-item:hover {
    color: #666;
}
</style>