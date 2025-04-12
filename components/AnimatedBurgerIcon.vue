<template>
    <div>
        <div class="container" :class="{ isOpen }">
            <div class="stripe1"></div>
            <div class="stripe2"></div>
            <div class="stripe3"></div>
            <div class="stripe4"></div>
            <div class="stripe5"></div>
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
    --light-orange: #FF9A56;
    --white: #FFFFFF;
    --pink: #D162A4;
    --magenta: #A30262;

    display: grid;
    grid-template-columns: 1fr;
    cursor: pointer;
    padding: 12px;
    margin: 0px auto;
    border: #A30262 1px solid;
    border-radius: 9999999px;
}

.stripe1,
.stripe2,
.stripe3,
.stripe4,
.stripe5 {
    width: 28px;
    height: 5px;
}

.stripe1 {
    background-color: var(--dark-orange);
    transition: 0.5s;
}

.stripe2 {
    background-color: var(--light-orange);
    transition: 2s;
}

.stripe3 {
    background-color: var(--white);
    transition: 4s;
}


.stripe4 {
    background-color: var(--dark-pink);
    transition: 2s;
}

.stripe5 {
    background-color: var(--magenta);
    transition: 0.5s;
}

.container.isOpen .stripe1 {
    transform: translate(0, 10px) rotate(-408deg);
}

.container.isOpen .stripe2 {
    opacity: 0;
    transition: 0s;
}

.container.isOpen .stripe3 {
    opacity: 0;
    transition: 0s;
}

.container.isOpen .stripe4 {
    opacity: 0;
    transition: 0s;
}

.container.isOpen .stripe5 {
    transform: translate(0, -10px) rotate(408deg);
}
</style>