<template>
  <div id="addRecipePageBox">
      <fieldset>
      <legend> Recipe Submit Tools </legend>
      <div id="item">
       <label for="chName">中文名：</label><input type="text" id="chName" v-model="recipe.chName">
      </div>
      <div id="item">
        <label for="engName">英文名：</label><input type="text" id="engName" v-model="recipe.engName">
      </div>
      <div id="item">
        <label for="time">制作时长(min)：</label><input type="number" id="time" v-model="recipe.time">
      </div>
      <div id="item">
        <label for="category">类别：</label>
        <select name="category" id="category" v-model="recipe.category" @change="showChange()">
          <option value="MC">主菜</option>
          <option value="AP">开胃菜</option>
          <option value="DR">饮品</option>
          <option value="DE">甜品</option>
          <option value="SD">配菜</option>
          <option value="BS">基础</option>
        </select>
      </div>
      <div id="item">
        <label for="serve">人份数：</label><input type="number" id="serve" v-model="recipe.serve">
      </div>
      <div id="item">
        <label for="tags">标签：</label><input type="text" id="tags" v-model="tagsInput" @change="recipe.tag = tags">
      </div>
      <div id="item">
        <label for="rating">评分：</label><input type="range" min="0" max="5" id="rating" v-model="recipe.rating">
        <span>{{recipe.rating}}</span>
      </div>
<!-- 配料设置 -->
      <div id="item">
        <label>配料：</label>
        <add-recipe-ingredient-component @loadIngredient="loadIngredient"></add-recipe-ingredient-component>
      </div>
<!--  制作流程      -->
      <div id="item">
        <label>流程：</label>
        <add-recipe-process-tip-component :type="'process'" @loadItems="loadItems"></add-recipe-process-tip-component>
      </div>
<!--   技巧提示     -->
      <div id="item">
        <label>技巧提示：</label>
        <add-recipe-process-tip-component :type="'tips'" @loadItems="loadItems"></add-recipe-process-tip-component>
      </div>
      </fieldset>
      <button id="submit" @click="upload">Submit</button>
  </div>
</template>

<script>
import {Recipe} from '../js/recipeConstructor.js';
import {uploadRecipe} from "@/js/leancloudInit";
import addRecipeIngredientComponent from './add-recipe-page-components/add-recipe-ingredient-component.vue';
import addRecipeProcessTipComponent from './add-recipe-page-components/add-recipe-process-tip-component.vue';

export default {
  name: "recipe-page",
  data(){
    return {
      recipe: {},
      tagsInput: '',
    };
  },
  created() {
    let defaultRecipe = {
      chName:'',
      engName: '',
      time: 0,
      category: 'MC',
      serve: 1,
      tags: ['tag'],
      rating: 5,
      ingredient: [{food: 'food', weight: 0}],
      process: ['process'],
      tips: ['tips'],
    };
    let recipe = new Recipe(defaultRecipe);
    this.recipe = recipe;
  },
  methods: {
    showChange(){
      console.log(this.recipe);
    },
    // 用于从子组件add-recipe-ingredient-component接收参数并更新到recipe.ingredient
    loadIngredient(ingredient){
      this.recipe.ingredient = ingredient;
    },
    // 用于从子组件接收process或tip
    loadItems(items){
      this.recipe[items.type] = items.content;
      console.log(this.recipe[items.type]);
    },
    upload(){
      uploadRecipe(this.recipe);
    },
  },
  computed: {
    tags(){
      let originTags = this.tagsInput.trim();
      let res = originTags.split(' ');
      // 去除空元素
      for (let i = 0; i<res.length; i++){
        if (!res[i]){
          res.splice(i,1);
          i = 0;
        }
      }
      return res;
    },
  },
  components:{
    addRecipeIngredientComponent,
    addRecipeProcessTipComponent
  },
}
</script>

<style scoped>
  #addRecipePageBox{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  input {
    width: 100%;
  }
  #item{
    margin: 0.5em 0;
  }
  #submit {
    border: none;
    border-radius: 4px;
    width: 8em;
    height: 3em;
    color: white;
    font-size: 1em;
    background-color: tomato;
    font-weight: bold;
  }
</style>