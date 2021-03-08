<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld :msg="message" @click="show()"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  data(){
    return {
      message: 'Marswiz is awesome.'
    };
  },
  methods: {
    show(){
      this.message = this.message=='hahahah!'?'Marswiz is awesome.':'hahahah!';
    },
  },
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
