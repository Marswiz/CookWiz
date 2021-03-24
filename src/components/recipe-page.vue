<template>
  <div>recipe page</div>
  <front-info></front-info>
</template>

<script>
import { Recipe } from '../js/recipeConstructor.js';
import frontInfo from './recipe-page-components/front-info.vue';

export default {
  name: "recipe-page",
  beforeRouteEnter(){
    let recipe = new Recipe();
    console.log(recipe);
  },
  components: {
    frontInfo,
  },
}
</script>

<style scoped>

</style>