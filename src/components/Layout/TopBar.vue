<template>
    <div v-if="isMobile" class="top-bar">
        <DropDown />
    </div>
    <div v-else>
        Not Mobile
    </div>
    <div>
    </div>
</template>

<script setup>
import { useMediaQuery } from '@vueuse/core'
import DropDown from '../DropDownMenu/DropDown.vue'

const isMobile = useMediaQuery('(max-width: 768px)')
</script>

<style scoped></style>