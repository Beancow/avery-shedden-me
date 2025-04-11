// import 'src/assets/glow-nav-colors.css'
<script setup>
import { ref, computed, useCssModule } from 'vue'
import {

    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuPortal,
    DropdownMenuRoot,
    DropdownMenuTrigger,
} from 'reka-ui'
import { useRouter } from 'vue-router'
import menuItems from '../../router/navMenu.js'
import BurgerIcon from '../DropDownMenu/BurgerIcon.vue'
import GlowWhenActive from '../GlowWhenActive.vue'
const css = useCssModule()
const dropdownContent = css.dropdownContent
const toggleState = ref(false)
const router = useRouter()
const currentRoute = computed(() => {
    return router.currentRoute.value.path
})
const handleSelect = (item) => {
    router.push({ path: item.href })
    toggleState.value = false
}
</script>

<template>
    <DropdownMenuRoot v-model:open="toggleState" :modal="true" :close-on-esc="true">
        <DropdownMenuTrigger>
            <BurgerIcon :is-open="toggleState" />
        </DropdownMenuTrigger>
        <DropdownMenuPortal>
            <DropdownMenuContent :class="dropdownContent">
                <DropdownMenuItem v-for="item in menuItems" :key="item.label" @select="handleSelect(item)">
                    <GlowWhenActive :is-active="currentRoute === item.href">
                        <template #left>
                            <div />
                        </template>
                        <template #default>
                            <div>{{ item.label }}</div>
                        </template>
                        <template #right>
                            <div />
                        </template>
                    </GlowWhenActive>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenuPortal>
    </DropdownMenuRoot>
</template>

<style module>
button {
    all: unset;
    margin: 8px;
}

.dropdownContent {
    min-width: 100vw;
    max-width: 20em;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 1.5rem;
    margin: 0.5rem 0;
    background: var(--main-bg);
}
</style>
