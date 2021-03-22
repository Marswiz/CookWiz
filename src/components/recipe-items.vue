<template>
  <div id="recipes">
    <p v-if="isEmpty" style="color: #a1a1a1;">暂无菜谱</p>
    <p v-if="isEmpty" style="color: #a1a1a1;">No Recipes.</p>
    <div v-for="recipe in recipes" :key="recipe.engName">
        <a id="recipeItem">
          <p id="recipeChName"><i class="fa fa-leaf"></i> {{recipe.chName}} </p>
          <p id="recipeEngName">  {{recipe.engName}} </p>
        </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    recipes: Array,
  },
  computed: {
    isEmpty(){
      return !this.recipes;
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  p {
    font-size: 1em;
  }
  .recipes {
    height: 0;
  }
  #recipeItem {
    display: block;
    margin: 1.4em 0;
    text-decoration: none;
    color: #a1a1a1;
    &:hover {
      color: lightgray;
    }
  }
  #recipeChName {
    margin: 0;
    font-family: '华文中宋';
  }
  #recipeEngName {
    margin: 0;
    font-family: 'TodaySB-Caps';
  }
</style>
