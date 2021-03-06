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
import {reactive,provide,inject} from 'vue';
import frontInfo from './recipe-page-components/front-info.vue';
import ingredientComponent from './recipe-page-components/ingredient-component.vue';
import processComponent from './recipe-page-components/process-component.vue';
import tipsComponent from './recipe-page-components/tips-component.vue';
import feedbackComponent from './recipe-page-components/feedback-component.vue';
import {useRoute} from 'vue-router';
import {getRecipeFromId,getFoodNutritionListByNames} from "@/js/leancloudInit";

export default {
  name: "recipe-page",
  setup(){
    let route = useRoute();
    const userInfo = inject('userInfo');
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
    });

    // 所需食材信息的初始值：一个响应式数组
    let foods = reactive([]);

    // 异步从leancloud库获取上述两个变量
    getRecipeFromId(route.params.id, userInfo.user).then(res => {
      let keys = Object.keys(recipe);
      for (let key of keys){
        recipe[key] = res[key];
      }
      // 获取需要的食材营养信息
      let foodList = [];
      for (let i of res.ingredient){
        foodList.push(i.food);
      }
      getFoodNutritionListByNames(...foodList).then((foodList)=>{
        res.ingredient.forEach((i)=>{
          // 赋值实际的用量weight给对应食材
          // provide the weight value to specific food.
          for (let j of foodList){
            if (i.food === j.food){
              j.weight = i.weight;
              foods.push(j);
            }
          }
        });
      });
    });

    function togglePublic(){
      recipe['isPublic'] = !recipe['isPublic'];
    }

    // Provide foods info for child component calculate nutrition infos.
    provide('foods',foods);
    return {
      recipe,
      togglePublic,
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
