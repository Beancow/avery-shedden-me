<script setup>
import { ref, watch } from 'vue'
import {
    DropdownMenuRoot,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuPortal,
    DropdownMenuItem,
} from 'radix-vue'
import { useCssModule } from 'vue'
const classes = useCssModule()
import menuItems from '../Layout/navMenu.js'
import BurgerIcon from '../DropDownMenu/BurgerIcon.vue'
const toggleState = ref()
watch(toggleState, (newValue) => {
    console.log('toggle changed:', newValue)
})
</script>

<template>
    <DropdownMenuRoot v-model:open="toggleState" :class="classes.DropdownMenuRoot">
        <DropdownMenuTrigger>
            <BurgerIcon :is-open="toggleState" />
        </DropdownMenuTrigger>
        <DropdownMenuPortal :class="classes.DropdownMenuPortal">
            <DropdownMenuContent :class="classes.DropdownMenuContent">
                <DropdownMenuItem :class="classes.DropdownMenuItem" v-for="item in menuItems" :key="item.label"
                    :href="item.href">
                    <router-link :to="item.href" class="nav-item" :class="{ active: currentRoute === item.href }">
                        {{ item.label }}
                    </router-link>
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

.DropdownMenuRoot {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    padding: 12px;
}

.DropdownMenuTrigger {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    padding: 12px;
    margin: 0px auto;
    border: #A30262 1px solid;
    border-radius: 9999999px;
    font-weight: 500;
}

.DropdownMenuPortal {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    justify-content: center;
    align-items: center;
}

.DropdownMenuItem {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px 16px;
    cursor: pointer;
    text-decoration: none;
    color: white;
    background-color: #000;
    font-weight: 500;
}

.DropdownMenuContent {
    transform-origin: top left;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0px;
    background-color: white;
    color: black;
    animation: scaleIn 0.5s ease-out;
    min-width: 100vw;
    min-height: 100vh;
}

@keyframes scaleIn {
    from {
        opacity: 0;
        transform: scale(0);
    }

    to {
        opacity: 1;
        transform: scale(1);
    }
}
</style>