<template>
  <p>
    <router-link to="/">Main Page </router-link>
    <router-link to="/add-recipe">addRecipe </router-link>
  </p>
  <router-view></router-view>
</template>

<script>
import {getAllRecipes} from "@/js/leancloudInit";

export default {
  name: 'App',
  setup(){
    getAllRecipes().then(res=>{
      console.log(res);
    });
  },
}
</script>

<style>

@media screen and (max-width: 700px) {

  body {
    margin: 0;
    padding: 0;
  }

  #app {
    display: grid;
    grid-template-columns: 1fr;
    justify-content: center;
    align-items: center;
  }

}

</style>
