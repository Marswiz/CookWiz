<template>
  <div id="ingredient-component-box">
    <div id="btnBox">
      <button id="addItem" @click="addItem('ingredient')">+</button>
      <button id="removeItem" @click="removeItem('ingredient')">-</button>
    </div>
    <div id="ingredient-box" v-for="(item,index) in ingredient" :key="index" @change="$emit('loadIngredient',ingredientRes)">
      <select name="food" id="food" v-model="item.food">
        <option :value="item.food" v-for="(item,key) in foods" :key="key">{{item.food}}</option>
      </select>
      <input type="number" v-model="item.weight">
    </div>
    <div style="margin:1em 0;text-decoration: underline;font-weight: bold;">Special Ingredients:</div>
    <div id="btnBox">
      <button id="addItem" @click="addItem('specialIngredient')">+</button>
      <button id="removeItem" @click="removeItem('specialIngredient')">-</button>
    </div>
    <div id="specialIngredient" v-for="(item,index) in specialIngredient" :key="index" @change="$emit('loadSpecialIngredient',specialIngredientRes)">
      <span>{{index+1}}. </span><input type="text" v-model="item.value">
    </div>
  </div>
</template>

<script>
import {getFoods} from "@/js/leancloudInit";
import {reactive,computed} from 'vue';

export default {
  name: "add-recipe-ingredient-component",
  setup(){
    let ingredient = reactive([{food: '', weight: 1}]);
    let specialIngredient = reactive([{value: ''}]);

    // 获取食物列表
    let foods = reactive([]);
    getFoods().then(res => {
      for (let i of res){
        foods.push(i);
      }
    });

    // 将ingredient组装成为供上传的对象格式
    let ingredientRes = computed(()=>{
      let res = [];
      for (let i = 0; i < ingredient.length; i++){
        if (ingredient[i].weight > 0){
          res.push({food: ingredient[i].food, weight: parseFloat(ingredient[i].weight)});
        }
      }
      return res;
    });

    // 将soecialIngredient组装成为供上传的对象格式
    let specialIngredientRes = computed(()=>{
      let res = [];
      for (let i = 0; i < specialIngredient.length; i++){
        res.push(specialIngredient[i].value);
      }
      return res;
    });

    // 增删按钮操作事件
    function addItem(type){
      this[type].push({});
    }
    function removeItem(type){
      if (this[type].length > 1){
        this[type].pop();
      }
    }

    return {
      foods,
      ingredient,
      specialIngredient,
      specialIngredientRes,
      ingredientRes,
      addItem,
      removeItem,
      show: ()=>{console.log(specialIngredientRes,ingredientRes)},
    };
  },
  emits: ['loadIngredient','loadSpecialIngredient'],
}
</script>
<style scoped lang="scss">
  #ingredient-box,#specialIngredient{
    display: flex;
    margin-bottom: .2em;
    input {
      width: 100%;
      margin-left: 1em;
      border: 2px solid black;
      background-color: #ddd;
      font-family: "Courier New";
      font-weight: bold;
      &:focus {
        outline: 2px solid black;
      }
    }
    select {
      flex: 1;
      display: block;
      border-radius: .2em;
      border: 2px solid black;
    }
  }
  #btnBox{
    display: flex;
    button {
      border: none;
      margin-right: 1em;
      margin-bottom: 1em;
      background-color: black;
      border-radius: .5em;
      font-family: 'Courier New';
      padding: 0 1em;
      height: 8vw;
      color: white;
      font-weight: bold;
      &:active{
        background-color: #a1a1a1;
        text-decoration: underline;
      }
    }
  }
</style>