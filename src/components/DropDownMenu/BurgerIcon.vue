<template>
    <div>
        <div class="container" :class="{ isOpen }">
            <div class="bar1"></div>
            <div class="bar2"></div>
            <div class="bar3"></div>
            <div class="bar4"></div>
            <div class="bar5"></div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    isOpen: {
        type: Boolean,
        default: false
    }
})
</script>

<style scoped>
.container {
    --dark-orange: #D52D00;
    --orange: #EF7627;
    --light-orange: #FF9A56;
    --white: #FFFFFF;
    --pink: #D162A4;
    --dark-pink: #B55690;
    --magenta: #A30262;

    display: grid;
    grid-template-columns: 1fr;
    cursor: pointer;
    padding: 12px;
    margin: 0px auto;
    border: #A30262 1px solid;
    border-radius: 9999999px;
}

.bar1,
.bar2,
.bar3,
.bar4,
.bar5 {
    width: 28px;
    height: 5px;
}

.bar1 {
    background-color: var(--dark-orange);
    transition: 0.5s;
}

.bar2 {
    background-color: var(--light-orange);
    transition: 2s;
}

.bar3 {
    background-color: var(--white);
    transition: 4s;
}


.bar4 {
    background-color: var(--dark-pink);
    transition: 2s;
}

.bar5 {
    background-color: var(--magenta);
    transition: 0.5s;
}

.container.isOpen .bar1 {
    transform: translate(0, 10px) rotate(-408deg);
}

.container.isOpen .bar2 {
    opacity: 0;
    transition: 0s;
}

.container.isOpen .bar3 {
    opacity: 0;
    transition: 0s;
}

.container.isOpen .bar4 {
    opacity: 0;
    transition: 0s;
}

.container.isOpen .bar5 {
    transform: translate(0, -10px) rotate(408deg);
}
</style>