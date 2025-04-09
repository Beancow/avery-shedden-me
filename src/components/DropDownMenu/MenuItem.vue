<script setup lang="ts">
import { DropdownMenuContent } from 'radix-vue'

defineProps<{
    disabled?: boolean
}>()
</script>

<template>
    <DropdownMenuContent :disabled="disabled">
        <slot></slot>
    </DropdownMenuContent>
</template></script>