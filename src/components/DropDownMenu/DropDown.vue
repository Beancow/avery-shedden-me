<script setup>
import { ref, watch, computed } from 'vue'
import {
    DropdownMenuRoot,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuPortal,
    DropdownMenuItem,
} from 'reka-ui'
import { useCssModule } from 'vue'
import { useRoute } from 'vue-router'
const classes = useCssModule()
import menuItems from '../../router/navMenu.js'
import BurgerIcon from '../DropDownMenu/BurgerIcon.vue'
const toggleState = ref()
const route = useRoute()
const currentRoute = computed(() => route.path)
watch(currentRoute, (newValue) => {
    console.log('route changed:', newValue)
})
</script>

<template>
    <DropdownMenuRoot v-model:open="toggleState" :modal="true" :class="classes.DropdownMenuRoot">
        <DropdownMenuTrigger>
            <BurgerIcon :is-open="toggleState" />
        </DropdownMenuTrigger>
        <DropdownMenuPortal>
            <DropdownMenuContent :class="classes.DropdownMenuContent" :update-position-strategy="'fixed'">
                <DropdownMenuItem v-for="item in menuItems" :key="item.label" :href="item.href" :class="[
                    classes.DropdownMenuItem,
                    { [classes.active]: currentRoute === item.href }
                ]">
                    <router-link :to="item.href" class="nav-item">
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

a {
    text-decoration: none;
    color: white;
}


.DropdownMenuItem {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-height: 3em;
    max-width: 18em;
    padding: 8px 12px;
    margin: 8px 12px;
    cursor: pointer;
    border-radius: 0.5rem;
    position: relative;
    background: var(--clr-1);
}

.DropdownMenuItem:hover,
.DropdownMenuItem:focus,
.DropdownMenuItem:active {
    background-color: #d24398;
    color: white;
}

.DropdownMenuContent {
    position: relative;
    transform-origin: top left;
    display: grid;
    align-content: start;
    place-items: center;
    grid-template-columns: 1fr;
    animation: scaleIn 0.5s ease-out;
    width: 100vw;
    min-height: 100vh;
    z-index: 1;
    background: var(--clr-1);
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

@property --gradient-angle {
    syntax: "<angle>";
    initial-value: 0deg;
    inherits: false;
}

.DropdownMenuItem.active::before,
.DropdownMenuItem.active::after {
    content: "";
    position: absolute;
    inset: -0.15rem;
    background: conic-gradient(from var(--gradient-angle),
            var(--clr-3),
            var(--clr-4),
            var(--clr-5),
            var(--clr-4),
            var(--clr-3));
    border-radius: inherit;
    animation: rotation 8s linear infinite;
    z-index: -1;
}

.DropdownMenuItem.active::after {
    filter: blur(0.25rem) brightness(1.5);
}

@keyframes rotation {
    0% {
        --gradient-angle: 0deg;
    }

    100% {
        --gradient-angle: 360deg;
    }
}
</style>
