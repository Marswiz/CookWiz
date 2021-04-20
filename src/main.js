import { createApp } from 'vue';
import { createWebHashHistory, createRouter } from 'vue-router';
import App from './App.vue';
import mainPage from './components/main-page.vue';
import recipePage from './components/recipe-page.vue';
import addRecipePage from './components/add-recipe-page.vue';
import publicRecipePage from './components/public-recipe-page.vue';
import publicRecipeDetailPage from './components/public-recipe-detail-page';
import loginPage from './components/login-page.vue';
import registerPage from './components/register-page.vue';
import settingPage from './components/setting-page.vue';
import verifyPage from './components/verify-page.vue';
import './assets/fonts/font.css';

let routes = [
    {
        path: '/',
        component: mainPage,    },
    {
        path: '/recipe/:id',
        component: recipePage,
    },
    {
        path: '/publicRecipe/:id',
        component: publicRecipeDetailPage,
    },
    {
        path: '/add-recipe',
        component: addRecipePage,
    },
    {
        path: '/public',
        component: publicRecipePage,
    },
    {
        path: '/login',
        component: loginPage,
    },
    {
        path: '/register',
        component: registerPage,
    },
    {
        path: '/setting',
        component: settingPage,
    },
    {
        path: '/verify',
        component: verifyPage,
    },
];

// Create Vue-Router instance.
let router = createRouter({
    history: createWebHashHistory(),
    routes,
});

let app = createApp(App);

app.use(router);
app.mount('#app');
