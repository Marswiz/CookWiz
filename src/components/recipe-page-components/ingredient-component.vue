<template>
    <h2>Ingredient</h2>
    <div id="ingredient-box">
      {{ ingredientString }}
    </div>
</template>

<script>
import {computed} from 'vue';
  export default {
    name: "ingredient-component",
    setup(props){
      // 转换成分数组为字符串
      const ingredientString = computed(() => {
          let res = '';
          for (let i = 0; i < props.ingredient.length; i++){
            res += props.ingredient[i].food;
            res += ' ';
            res += props.ingredient[i].weight;
            res += ' ';
          }
          return res;
      });
      return {
        ingredientString,
      };
    },
    props: [
        'ingredient'
    ],
  }
</script>

<style scoped>
h2 {
  margin-top: 2em;
  letter-spacing: .15em;
}
 #ingredient-box{
   word-break: break-all;
   font-family: '华文仿宋',Serif;
   color: #757475;
   align-self: center;

 }
</style>