import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index';

import './assets/main.css'

// Create a new Vue application using the App component as the root component.
const app = createApp(App);

// Use the router in your Vue application. This enables Vue Router's functionality in your app.
app.use(router);

// Mount the Vue application to the DOM. The '#app' selector is the id of the HTML element where your Vue app will be mounted.
app.mount('#app');