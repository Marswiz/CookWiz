<template>
  <div id="ingredient-box" v-for="(item,index) in ingredient" :key="index">
    <select name="food" id="food">
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
      ingredient: [
          {food: '', weight: 0},
      ],
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
}
</script>

<style scoped>
  span{
    border: 1px solid tomato;
    border-radius: 2px;
  }
</style>