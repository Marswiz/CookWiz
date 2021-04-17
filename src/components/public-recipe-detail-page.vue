<template>
  <div id="recipe-page-box" v-cloak>
    <front-info :basicInfo="recipe" @togglePublic="togglePublic"></front-info>
    <ingredient-component :ingredient="recipe.ingredient" :specialIngredient="recipe.specialIngredient"></ingredient-component>
    <process-component :process="recipe.process"></process-component>
    <tips-component :tips="recipe.tips"></tips-component>
    <feedback-component></feedback-component>
  </div>
</template>

<script>
import {reactive,provide} from 'vue';
import frontInfo from './recipe-page-components/front-info.vue';
import ingredientComponent from './recipe-page-components/ingredient-component.vue';
import processComponent from './recipe-page-components/process-component.vue';
import tipsComponent from './recipe-page-components/tips-component.vue';
import feedbackComponent from './recipe-page-components/feedback-component.vue';
import {useRoute} from 'vue-router';
import {getPublicRecipeFromId,getFoodNutritionByName} from "@/js/leancloudInit";

export default {
  name: "recipe-page",
  setup(){
    let route = useRoute();
    // 菜谱的初始值：一个响应式对象
    let recipe = reactive({
      chName:'',
      engName: '',
      time: 0,
      category: '',
      serve: 1,
      tag: [''],
      rating: 5,
      ingredient: [{food: '排骨', weight: '0g'}],
      specialIngredient:[''],
      process: [''],
      tips: [''],
      isPublic: false,
      owner: '',
    });

    // 所需食材信息的初始值：一个响应式数组
    let foods = reactive([]);

    // 异步从leancloud库获取上述两个变量
    getPublicRecipeFromId(route.params.id).then(res => {
      let keys = Object.keys(recipe);
      for (let key of keys){
        recipe[key] = res[key];
      }
      // 获取需要的食材营养信息
      let foodList = [];
      for (let i of res.ingredient){
        foodList.push(i.food);
      }
      getFoodNutritionByName(...foodList).then((foodList)=>{
        res.ingredient.forEach((i)=>{
          for (let j of foodList){
            if (i.food === j.food){
              j.weight = i.weight;
              foods.push(j);
            }
          }
        });
      });
    });

    provide('foods',foods);
    return {
      recipe,
    };
  },
  components: {
    frontInfo,
    ingredientComponent,
    processComponent,
    tipsComponent,
    feedbackComponent,
  },
}
</script>

<style scoped lang="scss">
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
</style>
