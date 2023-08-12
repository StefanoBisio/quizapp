<script setup>
    import { defineProps, defineEmits } from 'vue'

    const emit = defineEmits(["selectOption"])

    const {
        question,
        quizColor

    } = defineProps({
        question: {
            type: Object,
            required: true
        },
        quizColor: {
            type: String,
            required: false,
            default: 'bisque'
        }
    })

    const emitSelectedOption = (isCorrect) => {
        emit("selectOption", isCorrect)
    }
    
</script>

<template>
    <div class="question-container">
        <h1 class="question">{{question.text}}</h1>
    </div>
    <div class="options-container">
        <div 
        v-for="option in question.options" 
        :key="option.id" 
        class="option"
        @click="emitSelectedOption(option.isCorrect)"
        >
            <p class="option-label" :style="{backgroundColor: quizColor}">{{option.label}}</p>
            <button class="option-value">
                <p>{{option.text}}</p>
            </button>
        </div>
    </div>
</template>

<style scoped>
    .question-container {
        margin-top: 20px;
    }

    .question {
        font-size: 40px;
        margin-bottom: 20px;
    }

    .option {
        display: flex;
        margin-bottom: 20px;
        cursor: pointer;
    }

    .option-label {
        width: 50px;
        height: 50px;
        font-size: 30px;
        color: var(--vt-c-black-soft);
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .option-value {
        background-color: var(--color-background-soft);
        text-align: left;
        border: none;
        width: 100%;
        font-size: 30px;
        padding: 0 20px
    }
    .option-value:hover {
        background-color: var(--color-background-mute);
    }
</style>