<script setup>
    import { useRouter } from 'vue-router';

    const router = useRouter();
    const {quiz, color} = defineProps(['quiz', 'color'])

    const navigateToQuiz = () => {
        router.push(`/quiz/${quiz.id}`)
    }
</script>

<template>
    <div class="card" @click="navigateToQuiz" :style="{ borderColor: color }">
        <img :src="quiz.img" alt="">
        <div class="card-text">
            <h2>{{quiz.name}}</h2>
            <p>{{ quiz.questions.length }} questions</p>
        </div>
    </div>
</template>

<style scoped>
.card {
    width: 310px;
    overflow: hidden;
    border: 5px solid;
    border-radius: 2%;
    margin-bottom: 35px;
    margin-right: 20px;
    cursor: pointer;
}

.card img {
    width: 100%;
    height: 190px;
    margin: 0
}

.card .card-text {
    padding: 0.2rem 0.5rem;
}

.card .card-text h2 {
    font-weight: bold;
}
</style>
