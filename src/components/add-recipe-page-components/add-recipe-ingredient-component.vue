<template>
  <div id="btnBox">
    <button id="addItem" @click="addItem()">+</button>
    <button id="removeItem" @click="removeItem()">-</button>
  </div>
  <div id="ingredient-box" v-for="(item,index) in ingredient" :key="index" @change="$emit('loadIngredient',ingredientRes)">
    <select name="food" id="food" v-model="item.food">
      <option :value="item.food" v-for="(item,key) in foods" :key="key">{{item.food}}</option>
    </select>
    <input type="number" v-model="item.weight">
  </div>
</template>

<script>
import {getFoods} from "@/js/leancloudInit";
import {reactive,computed} from 'vue';

export default {
  name: "add-recipe-ingredient-component",
  setup(){
    // 获取食物列表
    let foods = reactive([]);
    let ingredient = reactive([{food: '', weight: 1}]);
    getFoods().then(res => {
      for (let i of res){
        foods.push(i);
      }
    });

    //
    let ingredientRes = computed(()=>{
      let res = [];
      for (let i = 0; i < ingredient.length; i++){
        if (ingredient[i].weight > 0){
          res.push({food: ingredient[i].food, weight: parseFloat(ingredient[i].weight)});
        }
      }
      return res;
    });

    function show(){
      console.log(this.ingredient);
    }

    function addItem(){
      this.ingredient.push({food: '', weight: 1});
    }

    function removeItem(){
      if (this.ingredient.length > 1){
        this.ingredient.pop();
      }
    }

    return {
      foods,
      ingredient,
      ingredientRes,
      show,
      addItem,
      removeItem,
    };
  },
  emits: ['loadIngredient'],
}
</script>

<style scoped>
  span{
    border: 1px solid tomato;
    border-radius: 2px;
  }
  #btnBox{
    display: flex;
    align-items: center;
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