<script setup>
    import Question from "../components/Question.vue"
    import QuizHeader from "../components/QuizHeader.vue"
    import Result from "../components/Result.vue"
    import {useRoute} from "vue-router"
    import { ref, computed } from "vue";
    import quizes from "../data/quizes.json"

    const route = useRoute()

    //boolean used to conditionally render either the questions or the results
    const showResults = ref(false);

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

    /*
    Fires when <Question> child component emits the selectOption event
    Used to:
        - advance to next question
        - register if answer was correct or not
        - check if user answered the last question, and if so hide the question and display the result
    */
    const onOptionSelected = (isCorrect) => {

        //increment the number of correct answers if isCorrect
        if(isCorrect) {
            numberOfCorrectAnswers.value++;
        }

        //increment currentQuestionIndex to show the next question
        currentQuestionIndex.value++;

        // check if user answered the last question, and if so hide the question and display the result
        if (currentQuestionIndex.value === quiz.questions.length) {
            showResults.value = true;
        }
        
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
                v-if="!showResults"
                :question="quiz.questions[currentQuestionIndex]"
                @selectOption="onOptionSelected"
            />
            <Result 
                v-else
                :quizQuestionLength="quiz.questions.length"
                :numberOfCorrectAnswers="numberOfCorrectAnswers"
            />
        </div>

</div>
</template>
