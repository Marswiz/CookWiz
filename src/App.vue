<template>
  <p>
    <router-link to="/">Main Page </router-link>
    <router-link to="/recipe">Recipe </router-link>
    <router-link to="/add-recipe">addRecipe </router-link>
  </p>
  <router-view></router-view>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {};
  },
  methods: {

  },
  components: {

  }
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
