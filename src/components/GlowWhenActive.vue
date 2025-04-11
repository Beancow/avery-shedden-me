// imports 'src/assets/glowcolors.css'
<template>
    <div :style="{ isolation: 'isolate' }">
        <div :class="['glow-item',
            { active: isActive === true }]">
            <slot name="left" />
            <slot></slot>
            <slot name="right" />
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';
const props = defineProps({
    isActive: {
        type: Boolean,
        default: false
    }
});
</script>

<style scoped>
.glow-item {
    --glow-colors-1: #52014d;
    --glow-colors-2: #d26fee;
    --glow-colors-3: #ff5492;
    --glow-colors-4: #812dff;
    --glow-colors-5: #f67a28;
}

@property --gradient-angle {
    syntax: "<angle>";
    initial-value: 0deg;
    inherits: false;
}

.glow-item {
    position: relative;
    display: flex;
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
    place-items: center;
    gap: 0.5rem;
    margin: 0.5rem auto;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    background: var(--glow-colors-1);
    color: white;
}

.glow-item:hover,
.glow-item:focus,
.glow-item:active {
    background-color: var(--glow-colors-1);
    color: white;
}

.glow-item.active::after,
.glow-item.active::before {
    content: "";
    position: absolute;
    z-index: -5;
    inset: -0.15rem;
    background: conic-gradient(from var(--gradient-angle),
            var(--glow-colors-1),
            var(--glow-colors-3),
            var(--glow-colors-4),
            var(--glow-colors-3),
            var(--glow-colors-1));
    border-radius: inherit;
    animation: rotation 8s linear infinite;
    filter: blur(0.25rem) brightness(1.5);
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

@keyframes rotation {
    0% {
        --gradient-angle: 0deg;
    }

    100% {
        --gradient-angle: 360deg;
    }
}
</style>
