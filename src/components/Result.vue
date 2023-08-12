<script setup>

    import { defineProps } from 'vue';
    import { RouterLink } from 'vue-router';

    const {
        quizQuestionLength,
        numberOfCorrectAnswers

        } = defineProps([
        "quizQuestionLength",
        "numberOfCorrectAnswers"
    ])

</script>

<template>
    <div class="results">
        <p>Your result is</p>
        <h1>{{numberOfCorrectAnswers}}/{{quizQuestionLength}}</h1>
        <RouterLink to="/" v-slot="{ navigate }">
            <button class="btn-primary" @click="navigate">
                Back to menu
            </button>
        </RouterLink>
    </div>
</template>

<style scoped>
    .results {
        text-align: center;
        padding: 100px 0;
    }

    h1 {
        font-size: 80px;
    }

    p {
        font-size: 25px;
    }
</style>