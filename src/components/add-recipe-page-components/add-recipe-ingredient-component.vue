<template>
  <div>
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
    <div>Special Ingredients:</div>
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

<style scoped>
  #btnBox{
    display: flex;
    align-items: center;
  }
  select {

  }
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    outline: none;
    border-radius: 50%;
    background: rgba(255,100,100,0.5);
    font-size: 1.3em;
    font-weight: bold;
    width: 30px;
    height: 30px;
    color: white;
  }
</style>