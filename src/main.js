import { createApp } from 'vue';
import * as AV from 'leancloud-storage';
import { createWebHashHistory, createRouter } from 'vue-router';
import App from './App.vue';
import mainPage from './components/main-page.vue';
import recipePage from './components/recipe-page.vue';
import addRecipePage from './components/add-recipe-page.vue';

// leancloud 配置
AV.init({
    appId: "1cIxhO0Vf6jLVLLKXPWdwTOK-MdYXbMMI",
    appKey: "Pn8EFfvyMY8TrmMwBBMf24Cr",
});

const query = new AV.Query('Recipes');

async function getRecipe(id){
    let res = await query.get(id);
    return res;
}

getRecipe('6063e1742c9df85c5743fb2e');


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
