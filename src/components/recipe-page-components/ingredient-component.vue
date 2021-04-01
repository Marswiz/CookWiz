<template>
    <h2>Ingredient</h2>
    <div id="ingredient-box">
      {{ ingredientString }}
    </div>
</template>

<script>
  import {ref,reactive} from 'vue';

  export default {
    name: "ingredient-component",
    setup(props){
      let ingredient = reactive(props.ingredient);
      let ingredientString = '';
      for (let i of ingredient){
        ingredientString = ingredientString.concat(i.food+' ');
        ingredientString = ingredientString.concat(i.weight);
        ingredientString = ingredientString.concat(';');
      }

      return {
        ingredientString: ref(ingredientString),
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