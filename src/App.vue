<template>
  <div id="appBox">
    <div id="nav" @mouseover="showNavbar" >
      <i class="fa fa-navicon"></i>
    </div>
    <div id="navContent" v-if="navShown" @mouseleave="hideNavbar" @click="hideNavbar">
      <router-link to="/">Main Menu</router-link>
      <router-link to="/add-recipe">Add Recipe </router-link>
    </div>
    <router-view @mouseover="hideNavbar"></router-view>
  </div>
</template>

<script>
import {ref} from 'vue';

export default {
  name: 'App',
  setup(){
    let navShown = ref(false);

    // 切换显示导航栏函数
    const showNavbar = function (){
      navShown.value = true;
    }
    const hideNavbar = function (){
      navShown.value = false;
    }


    return {
      showNavbar,
      navShown,
      hideNavbar,
    }
  },
}
</script>

<style lang="scss">

/*Media Query*/
@media screen and (max-width: 2700px) {

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

  #nav {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    right: 1.5em;
    top: 1.5em;
    width: 2em;
    height: 2em;
    border-radius: .5em;
    color: black;
    transition: all .5s;
    &:hover {
      color: gray;
      transform: rotateZ(90deg);
    }
  }

  #navContent {
    display: flex;
    position: fixed;
    width: 200px;
    right: 2.5em;
    top: 2.5em;
    flex-direction: column;
    align-items: stretch;
    border-radius: 1em;
    clip-path: border-box;
    a {
      text-align: center;
      font-family: 'TodaySB-Caps', sans-serif;
      color: white;
      text-decoration: none;
      padding: .5em 1em;
      background: rgba(0,0,0,0.8);
      transition: all .3s;
      &:not(:first-child) {
        border-top: 2px solid white;
      }
      &:hover {
        color: white;
        text-decoration: underline;
        background: rgba(0,0,0,0.4);
      }
    }
  }

}
</style>
