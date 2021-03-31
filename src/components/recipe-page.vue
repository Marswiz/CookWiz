<template>
  <div id="recipe-page-box">
    <front-info></front-info>
    <ingredient-component></ingredient-component>
    <process-component></process-component>
    <tips-component></tips-component>
    <div id="feedbackBox"> feedback box to be written.</div>
  </div>
</template>

<script>
import { Recipe } from '../js/recipeConstructor.js';
import frontInfo from './recipe-page-components/front-info.vue';
import ingredientComponent from './recipe-page-components/ingredient-component.vue';
import processComponent from './recipe-page-components/process-component.vue';
import tipsComponent from './recipe-page-components/tips-component.vue';

export default {
  setup(){
    
  },
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

<style>
 #recipe-page-box {
   display: flex;
   flex-direction: column;
   align-items: center;
   padding: 0 1.5em;
 }
 h2{
   font-weight: normal;
   font-family: 'TodaySB-Caps', sans-serif;
   font-size: 1.2em;
 }
 #feedbackBox{
   height: 100px;
   width: 100%;
   border: 2px dashed tomato;
   margin: 1em 0;
 }
</style>