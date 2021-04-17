<template>
  <div id="appBox">
    <div id="nav" @mouseover="showNavbar" >
      <i class="fa fa-navicon"></i>
    </div>
    <div id="navContent" v-if="navShown" @mouseleave="hideNavbar" @click="hideNavbar">
      <router-link to="/">Main Menu</router-link>
      <router-link to="/public"><i class="fa fa-eye"></i> Find Recipes</router-link>
      <router-link v-if="userInfo.logStatus" to="/add-recipe">Add Recipe </router-link>
      <router-link v-if="!userInfo.logStatus" to="/login"><i class="fa fa-key"></i> Login</router-link>
      <router-link v-if="userInfo.logStatus" to="/setting"><i class="fa fa-cog"></i> Setting</router-link>
<!--  logged in user info   -->
      <a v-if="userInfo.logStatus" id="userInfo">
        <span style="text-decoration: underline"><i class="fa fa-user-o"></i>&nbsp; {{userInfo.user}} &nbsp;</span>
        <p @click="userLogout">Log Out</p>
      </a>
    </div>
    <router-view @mouseover="hideNavbar"></router-view>
  </div>
</template>

<script>
import {ref,reactive,onBeforeMount,provide} from 'vue';
import { useRouter } from 'vue-router';
import { getLocalUserName, logout} from "@/js/leancloudInit.js";

export default {
  name: 'App',
  setup(){
    const router = useRouter();

    // 本地获取用户登录信息
    let user = getLocalUserName();
    const userInfo = reactive(user);

    // 为子组件提供userInfo对象
    provide('userInfo',userInfo);

    // logout Function
    const userLogout = function (){
      if (window.confirm('Are you sure to logout?')){
        logout();
        userInfo.user = '';
        userInfo.logStatus = false;
      }
    };

    let navShown = ref(false);

    // 切换显示导航栏函数
    const showNavbar = function (){
      navShown.value = true;
    }
    const hideNavbar = function (){
      navShown.value = false;
    }

    // 根据是否登录跳转不同页面
    onBeforeMount(()=>{
      if (userInfo.user){
        router.push('/');
      } else {
        router.push('/login');
      }
    })

    return {
      userInfo,
      showNavbar,
      navShown,
      hideNavbar,
      userLogout,
    }
  },
  provide: ['userInfo'],
}
</script>

<style lang="scss">

/*Media Query*/
@media screen and (max-width: 2700px) {

  body {
    margin: 0;
    padding: 0;
    background-color: white;
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

  #userInfo {
    display: flex;
    flex-direction: column;
  }

}
</style>
