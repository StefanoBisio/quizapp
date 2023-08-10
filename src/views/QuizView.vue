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

    /*
    is passed down to Question component to show one question at the time
    Also used by questionStatus() and barPercentage() to keep track of which question the user is on. 1, 2, 3, etc
    */
    const currentQuestionIndex = ref(0)

    //used to keep track of how many correct answers the user is giving going through the quiz
    const numberOfCorrectAnswers = ref( 0)

    /*
    is passed down to QuizHeader.
    Uses currentQuestionIndex and the length of the questions array, to compose the string to inform the user of the progress. 0/3, 1/3, etc
    */
    const questionStatus = computed(() => `${currentQuestionIndex.value}/${quiz.questions.length}`)

    /*
    is passed down to QuizHeader.
    Very similar use to questionStatus. This returns a percentage value used in the CSS of the progress bar
    */
    const barPercentage = computed(() => `${currentQuestionIndex.value/quiz.questions.length * 100}%`)

    const onOptionSelected = (isCorrect) => {
        if(isCorrect) {
            numberOfCorrectAnswers.value++;
        }
        
        currentQuestionIndex.value++;
    }

</script>

<template>
    <div>
        <QuizHeader 
            :questionStatus="questionStatus"
            :barPercentage="barPercentage"
        /> 
        <div>
            <Question 
                :question="quiz.questions[currentQuestionIndex]"
                @selectOption="onOptionSelected"
            />
        </div>

        <button @click="currentQuestionIndex++">change question status</button>
    </div>
</template>
