<script setup>
const props = defineProps({
    message: {
        type: String,
        default: 'Welcome to the Home Page!'
    }
})
</script>

function WelcomeMessage() {

return { <template>
    <div class="welcome-message">
        {{ props.message }}
    </div>
</template>
}
}

<style scoped>
.welcome-message {
    text-align: center;
    font-size: 2em;
    color: #333;
    background: #fff;
    margin-top: 20px;
}
</style>