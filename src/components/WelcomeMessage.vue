<template>
    <div class="welcome-message">
        {{ message }}
    </div>
</template>

<script>
export default {
    name: 'WelcomeMessage',
    data() {
        return {
            message: 'HELLLOOO WORLD!!'
        }
    }
}
</script>

<style scoped>
.welcome-message {
    text-align: center;
    font-size: 2em;
    color: #333;
    background: #fff;
    margin-top: 20px;
}
</style>