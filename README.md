# QuizApp

QuizApp is a web application built with Vue.js 3 and Vite. It provides a platform for users to take quizzes on various subjects. The quizzes are presented in a multiple-choice format, and the results are displayed at the end of each quiz.

The application demonstrates a solid beginner understanding of Vue.js concepts such as:

- Vue 3 Composition API
- Vue Router for routing
- Vue's reactivity system (refs, computed properties)
- Component communication using props and emits
- Vue 3's ``<script setup>`` syntax for more concise component options

## Project Setup

To run this project locally, you need to have Node.js and npm installed on your machine. Follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the project directory in your terminal.
3. Install the project dependencies by running:
```
npm install
```
4. Start the development server:
```
npm run dev
```
5. Now, you can open your browser and navigate to http://localhost:5173/ to view the application.


## Application Structure


The application is structured into views and components. Views are the different pages of the app, and components are reusable Vue instances that make up the views.

- src/views/QuizesView.vue: This is the home page of the app where all quizzes are listed.

- src/views/QuizView.vue: This view displays a single quiz. It uses the QuizHeader, Question, and Result components to display the quiz questions and results.

- src/components/: This directory contains all the Vue components used in the views.

- The quizzes data is stored in src/data/quizes.json.
