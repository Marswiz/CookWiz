<template>
  <div style="display: flex;flex-direction: column;align-items: center;">
    <h2>Ingredient</h2>
    <div id="ingredient-box">
      <p id="ingredient" v-for="(ingredient,index) in ingredientStringArr" :key="index">{{ingredient}}</p>
      <p id="specialIngredient" v-for="(ingredient,index) in specialIngredient" :key="index">{{ingredient}}</p>
    </div>
  </div>
</template>

<script>
import {computed} from 'vue';
  export default {
    name: "ingredient-component",
    setup(props){
      // 转换成分数组为字符串
      const ingredientStringArr = computed(() => {
          let resArr = [];
          for (let i = 0; i < props.ingredient.length; i++){
            let res = '';
            res += props.ingredient[i].food;
            res += props.ingredient[i].weight;
            res += 'g';
            resArr.push(res);
          }
          return resArr;
      });
      return {
        ingredientStringArr,
      };
    },
    props: [
        'ingredient',
        'specialIngredient',
    ],
  }
</script>

<style scoped>
h2 {
  margin-top: 2em;
  letter-spacing: .15em;
  text-shadow: 1px 1px 0 white, 2px 2px 0 lightgrey;
}
 #ingredient-box{
   display: grid;
   justify-content: center;
   grid-template-columns: 1fr 1fr;
   gap: .5em;
   word-break: break-all;
   font-family: '华文仿宋',Serif;
   color: #757475;
 }
 #ingredient {
   padding: .1em 0;
 }
</style>
