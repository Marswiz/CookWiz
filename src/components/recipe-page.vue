<template>
  <div id="recipe-page-box" v-cloak>
    <front-info :basicInfo="recipe"></front-info>
<!--    <ingredient-component :ingredient="recipe.ingredient"></ingredient-component>-->
    <ingredient-component :ingredient="recipe.ingredient"></ingredient-component>
    <process-component :process="recipe.process"></process-component>
    <tips-component :tips="recipe.tips"></tips-component>
    <div id="feedbackBox"> feedback box to be written.</div>
  </div>
</template>

<script>
import {reactive} from 'vue';
import frontInfo from './recipe-page-components/front-info.vue';
import ingredientComponent from './recipe-page-components/ingredient-component.vue';
import processComponent from './recipe-page-components/process-component.vue';
import tipsComponent from './recipe-page-components/tips-component.vue';
import {useRoute} from 'vue-router';
import {getRecipeFromId} from "@/js/leancloudInit";

export default {
  name: "recipe-page",
  setup(){
    let recipe = reactive({
      chName:'',
      engName: '',
      time: 0,
      category: '',
      serve: 1,
      tags: [''],
      rating: 5,
      ingredient: [{food: '排骨', weight: '0g'}],
      process: [''],
      tips: [''],
    });
    let route = useRoute();
    getRecipeFromId(route.params.id).then(res => {
      let keys = Object.keys(recipe);
      for (let key of keys){
        recipe[key] = res[key];
      }
    });
    return {
      recipe,
    };
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