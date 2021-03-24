<template>
  <div id="recipe-page-box">
    <front-info></front-info>
    <ingredient-component></ingredient-component>
    <process-component></process-component>
    <tips-component></tips-component>
  </div>
</template>

<script>
import { Recipe } from '../js/recipeConstructor.js';
import frontInfo from './recipe-page-components/front-info.vue';
import ingredientComponent from './recipe-page-components/ingredient-component.vue';
import processComponent from './recipe-page-components/process-component.vue';
import tipsComponent from './recipe-page-components/tips-component.vue';

export default {
  name: "recipe-page",
  beforeRouteEnter(){
    let recipe = new Recipe();
    console.log(recipe);
  },
  components: {
    frontInfo,
    ingredientComponent,
    processComponent,
    tipsComponent,
  },
}
</script>

<style scoped>
 #recipe-page-box {
   display: flex;
   flex-direction: column;
   align-items: center;
 }
</style>