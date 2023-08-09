<script setup>
        import { defineProps } from 'vue'
        const {questionStatus} = defineProps(['questionStatus'])

</script>

<template>
    <header>
            <h4>Question {{questionStatus}}</h4>
            <div class="bar">
                <div class="completion">
                    <Question />
                </div>
            </div>
        </header>
</template>

<style scoped>
    header {
        margin-top: 30px;
    }
    header h4 {
        font-size: 30px;
    }

    .bar {
        width: 300px;
        height: 50px;
        border: 3px solid black;
    }

    .completion {
        height: 100%;
        background-color: bisque;
    }
</style>