<script setup>
        import { defineProps } from 'vue'
        
        const {
            questionStatus,
            barPercentage,
            quizColor

        } = defineProps({
            questionStatus: {
                type: String,
                required: true
            },
            barPercentage: {
                type: String,
                required: true
            },
            quizColor: {
                type: String,
                required: false,
                default: 'bisque'
            }
        })


</script>

<template>
    <header class="header-container">
            <div class="header-container__left">
                <h4>Question {{questionStatus}}</h4>
                <div class="bar">
                    <div 
                        class="completion" 
                        :style="{ 
                            width: barPercentage, 
                            backgroundColor: quizColor 
                        }"
                    >
                        <Question />
                    </div>
                </div>
            </div>
            <div class="header-container__right">
                <button class="btn-primary">Back to menu</button>
            </div>
        </header>
</template>

<style scoped>
    .header-container {
        @media (min-width: 400px) {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        margin-top: 30px;
    }

    h4 {
        font-size: 30px;
    }

    .bar {
        width: 300px;
        height: 50px;
        border: 3px solid black;
    }

    .completion {
        height: 100%;
    }
</style>