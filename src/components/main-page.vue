<template>
  <div id="main-page-box">
    <h1 id="header">MENU</h1>
    <category-item v-for="category in categories" :key="category.engName"
                   :chinese-name="category.chName" :english-name="category.engName"
    :recipes="category.recipes"></category-item>
  </div>
</template>

<script>
import {reactive,inject,watchEffect} from 'vue';
import categoryItem from './menu-page-components/category-item.vue';
import {getAllRecipes} from "@/js/leancloudInit";

export default {
  name: 'main-page',
  setup(){
    const userInfo = inject('userInfo');
    let categories = reactive(
        [
          {
            name: 'AP',
            chName: "开胃菜",
            engName: "Appetizers",
            recipes: [],
          },
          {
            name: 'MC',
            chName: "主菜",
            engName: "Main Course",
            recipes: [],
          },
          {
            name: 'DE',
            chName: "甜品",
            engName: "Desserts",
            recipes: [],
          },
          {
            name: 'DR',
            chName: "饮品",
            engName: "Drinks",
            recipes: [],
          },
          {
            name: 'SD',
            chName: "配菜",
            engName: "Side Dish",
            recipes: [],
          },{
          name: 'BS',
          chName: "基础",
          engName: "Basics",
          recipes: [],
        },]
    );

    // 从leancloud加载所有菜谱并添加中文、英文名到categories。
    function getRecipes(){
      getAllRecipes(userInfo.user).then(res => {
        for (let i of res){
          let item = {
            chName: i.chName,
            engName: i.engName,
            id: i.objectId,
          };
          for (let category of categories){
            if (category.name == i.category){
              category.recipes.push(item);
            }
          }
        }
      });
    }

    // 登出时，清除所有菜谱列表。
    function clearRecipes(){
      if (!userInfo.user){
        for (let i of categories){
          i.recipes = [];
        }
      }
    }

    watchEffect(()=>{clearRecipes();});
    getRecipes();

    return {
      userInfo,
      categories,
    };
  },

  // 内部组件
  components: {
    categoryItem,
  }
}
</script>

<style scoped>

@media screen and (max-width: 800px) {

  #header {
    padding: 1em 0;
    font-family: 'High Tower Text', serif;
    letter-spacing: 3px;
    font-weight: normal;
    font-size: 2.4em;
  }

  #main-page-box{
    margin-left: 4em;
  }
}

</style>
