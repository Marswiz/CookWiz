<template>
  <div id="btnBox">
    <button id="addItem" @click="addItem()">+</button>
    <button id="removeItem" @click="removeItem()">-</button>
  </div>
  <div id="ingredient-box" v-for="(item,index) in ingredient" :key="index" @change="$emit('loadIngredient',ingredientRes)">
    <select name="food" id="food" v-model="item.food">
      <option :value="item.name" v-for="(item,key) in foods" :key="key">{{item.name}}</option>
    </select>
    <input type="number" v-model="item.weight">
  </div>
</template>

<script>
export default {
  name: "add-recipe-ingredient-component",
  data(){
    return {
      ingredient: [{food: 'food1', weight: 1}],
      foods: [{
        name: 'food1',
        protein: 10,
        sugar: 20,
        fat: 10,
      },{
        name: 'food2',
        protein: 10,
        sugar: 20,
        fat: 10,
      },{
        name: 'food3',
        protein: 10,
        sugar: 20,
        fat: 10,
      }],
    };
  },
  computed:{
    ingredientRes(){
      let res = [];
      for (let i = 0; i < this.ingredient.length; i++){
        if (this.ingredient[i].weight > 0){
          res.push({food: this.ingredient[i].food, weight: parseFloat(this.ingredient[i].weight)});
        }
      }
      return res;
    },
  },
  methods: {
    show(){
      console.log(this.ingredient);
    },
    addItem(){
      this.ingredient.push({food: 'food1', weight: 1});
    },
    removeItem(){
      if (this.ingredient.length > 1){
        this.ingredient.pop();
      }
    },
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