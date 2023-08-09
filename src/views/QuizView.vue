<script setup>
    import Question from "../components/Question.vue"
    import QuizHeader from "../components/QuizHeader.vue"
    import {useRoute} from "vue-router"
    import { ref, watch, computed } from "vue";

    import quizes from "../data/quizes.json"

    const route = useRoute()

    //find the id of the quiz currently open, using the URL. Then search for the whole quizes.json file, filter it for the quiz currently open (eg: math) and feed only the math quiz data to the Question component
    const quizId = parseInt(route.params.id);
    const quiz = quizes.find(q => q.id === quizId);

    const currentQuestionIndex = ref(0);

    const questionStatus = computed(() => `${currentQuestionIndex.value}/${quiz.questions.length}`);

</script>

<template>
    <div>
        <QuizHeader :questionStatus="questionStatus" />
        <div>
            <Question :question="quiz.questions[currentQuestionIndex]"/>
        </div>
        <!-- testing only, this button will be deleted -->
        <button @click="currentQuestionIndex++">change question status</button>
    </div>
</template>
