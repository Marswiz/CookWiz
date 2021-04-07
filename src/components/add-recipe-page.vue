<template>
  <div id="addRecipePageBox">
    <typing-effect-component style="align-self: flex-end;" :id="'addRecipeHeader'">Edit & Upload Your Own Recipe..</typing-effect-component>
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
        <select style="border: 2px solid black;" name="category" id="category" v-model="recipe.category" @change="showChange()">
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
        <label for="rating">评分：</label>
        <div>
          <input style="display: inline-block;width: 80%;" type="range" min="0" max="5" id="rating" v-model="recipe.rating">
          <span style="display:inline-block;width: 15%;text-align: center;">{{recipe.rating}}</span>
        </div>
      </div>
<!-- 配料设置 -->
      <div id="item">
        <label>配料：</label>
        <add-recipe-ingredient-component @loadIngredient="loadIngredient" @loadSpecialIngredient="loadSpecialIngredient"></add-recipe-ingredient-component>
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
      <button id="submit" @click="upload">Submit</button>
  </div>
</template>

<script>
import {Recipe} from '../js/recipeConstructor.js';
import {uploadRecipe} from "@/js/leancloudInit";
import typingEffectComponent from '@/components/add-recipe-page-components/typing-effect-component.vue';
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
      specialIngredient: [''],
      process: ['process'],
      tips: ['tips'],
    };
    let recipe = new Recipe(defaultRecipe);
    this.recipe = recipe;
  },
  inject: ['userInfo'],
  methods: {
    // 用于从子组件add-recipe-ingredient-component接收参数并更新到recipe.ingredient
    loadIngredient(ingredient){
      this.recipe.ingredient = ingredient;
    },
    // 用于从子组件add-recipe-ingredient-component接收参数并更新到recipe.specialIngredient
    loadSpecialIngredient(specialIngredient){
      this.recipe.specialIngredient = specialIngredient;
    },
    // 用于从子组件接收process或tip
    loadItems(items){
      this.recipe[items.type] = items.content;
      console.log(this.recipe[items.type]);
    },
    upload(){
      console.log(this.userInfo);
      if (this.userInfo.logStatus){
        uploadRecipe(this.recipe, this.userInfo.user);
      } else {
        this.$router.push('/');
      }
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
    addRecipeProcessTipComponent,
    typingEffectComponent,
  },
}
</script>

<style scoped lang="scss">
  #addRecipeHeader {
    background-color: #000;
    color: white;
    margin: 2em 4vw;
    outline: 2px solid black;
    padding: 0.1em 0;
    font-weight: bold;
  }

  #addRecipePageBox{
    display: flex;
    flex-direction: column;
    align-items: stretch;
    padding: 5em 0;
    width: 100%;
  }
  #item{
    display: grid;
    grid-template-columns: 0.4fr 1fr;
    gap: 1em;
    margin: 0.8em 1em 0 1em;
    //border: 2px solid black;
    input {
      display: block;
      border: 2px solid black;
      background-color: #ddd;
      font-family: "Courier New";
      font-weight: bold;
      &:focus {
        outline: 2px solid black;
      }
    }
    label{
      display: block;
      font-weight: bold;
      text-align: right;
      font-family: '华文中宋','TodaySB-Caps',sans-serif;
    }
  }

  #submit {
    border: none;
    align-self: center;
    width: 92vw;
    font-weight: bold;
    background-color: black;
    font-family: 'Courier New';
    padding: 0 2em;
    height: 10vw;
    margin: 2.5em 0;
    color: white;
    font-weight: bold;
    &:active{
      background-color: #a1a1a1;
      text-decoration: underline;
    }
  }
</style>