<template>
    <h2>Ingredient</h2>
    <div id="ingredient-box" @click="show()">
      {{ ingredientString }}
    </div>
</template>

<script>
  export default {
    name: "ingredient-component",
    computed:{
      ingredientString(){
        let res = '';
        for (let i = 0; i < this.ingredient.length; i++){
          res += this.ingredient[i].food;
          res += ' ';
          res += this.ingredient[i].weight;
          res += ' ';
        }
        return res;
      },
    },
    methods:{
      show(){
        console.log(this.ingredient);
      },
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