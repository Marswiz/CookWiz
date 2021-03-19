<template>
    <h1 id="header">MENU</h1>
    <category-item v-for="category in categories" :key="category.engName"
                   :chinese-name="category.chName" :english-name="category.engName"
    :recipes="category.recipes"></category-item>
</template>

<script>
import categoryItem from './components/category-item.vue';

export default {
  name: 'App',
  data(){
    return {
      message: 'Marswiz is awesome.',
      categories: [
          {
          chName: "开胃菜",
          engName: "Appetizers",
          recipes: [{
            chName: '烩小牛胸腺',
            engName: 'Braised Sweetbread of Calf ',
          },{
            chName: '杭椒牛柳',
            engName: 'Sauteed Beef Fillet with Hot Green Pepper',
          },]
        },
        {
          chName: "主菜",
          engName: "Main Course",
        },
        {
          chName: "甜品",
          engName: "Desserts",
        },
        {
          chName: "饮品",
          engName: "Drinks",
          recipes: [{
            chName: '烩小牛胸腺',
            engName: 'Braised Sweetbread of Calf ',
          },{
            chName: '杭椒牛柳',
            engName: 'Sauteed Beef Fillet with Hot Green Pepper',
          },]
        },
        {
          chName: "配菜",
          engName: "Side Dish",
        }],
    };
  },
  methods: {

  },
  components: {
    categoryItem,
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
