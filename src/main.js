import { createApp } from 'vue';
import { createWebHashHistory, createRouter } from 'vue-router';
import App from './App.vue';
import mainPage from './components/main-page.vue';
import recipePage from './components/recipe-page.vue';
import addRecipePage from './components/add-recipe-page.vue';

let routes = [
    {
        path: '/',
        component: mainPage,
    },
    {
        path: '/recipe',
        component: recipePage,
    },
    {
        path: '/add-recipe',
        component: addRecipePage,
    },
];

// Create Vue-Router instance.
let router = createRouter({
    history: createWebHashHistory(),
    routes
});

let app = createApp(App);
app.use(router);
app.mount('#app');
