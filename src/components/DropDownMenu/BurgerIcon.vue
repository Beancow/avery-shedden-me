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
    background-color: #D52D00;
    transition: 0.5s;
}

.bar2 {
    background-color: #FF9A56;
    transition: 2s;
}

.bar3 {
    background-color: #FFFFFF;
    transition: 4s;
}


.bar4 {
    background-color: #D162A4;
    transition: 2s;
}

.bar5 {
    background-color: #A30262;
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