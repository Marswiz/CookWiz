<template>
  <p>
    <router-link to="/">Main Page</router-link>
    <router-link to="/recipe">Recipe</router-link>
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

  #header {
    padding: 1em 0;
    font-family: 'High Tower Text', serif;
    letter-spacing: 3px;
    font-weight: normal;
    font-size: 2.4em;
  }

  #app {
    display: grid;
    grid-template-columns: 1fr;
    justify-content: center;
    align-items: center;
    padding-left: 4em;
  }

}

</style>
