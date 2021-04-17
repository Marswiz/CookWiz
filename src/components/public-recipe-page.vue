<template>
  <div id="publicRecipesBox">
    <router-link class="publicRecipeItem" v-for="(item,index) in publicRecipes" :key="index" :to="'/publicRecipe/'+item.id">
      <div id="publicRecipeInfo">
        <div id="chName">{{item.chName}}</div>
        <div id="engName">{{item.engName}}</div>
        <div id="info">
          <i class="fa fa-bookmark-o"></i>{{item.category}}
          <i class="fa fa-clock-o"></i>{{item.time}}min
          <rating-component :rating="item.rating"></rating-component>
        </div>
        <div id="owner">From: {{item.owner}}</div>
      </div>
      <div id="plusBtn" @click="addToMyRecipes">+</div>
    </router-link>
  </div>
</template>

<script>
import ratingComponent from '@/components/recipe-page-components/rating-component.vue';
import {getPublicRecipes} from '@/js/leancloudInit.js';
import {reactive} from 'vue';
  export default {
    name: "public-recipe-page",
    setup(){
      const publicRecipes = reactive([]);
      getPublicRecipes(10).then(res => {
        for (let i of res){
          let item = i.attributes;
          item.id = i.id;
          publicRecipes.push(item);
        }
        console.log(publicRecipes);
      });

      function addToMyRecipes(){

      }

      return {
        publicRecipes,
        addToMyRecipes,
      };
    },
    components: {
      ratingComponent,
    },
  }
</script>

<style scoped lang="scss">
 #publicRecipesBox {
   margin-top: 5em;
   display: flex;
   flex-direction: column;
   justify-content: center;
   .publicRecipeItem{
     display: grid;
     grid-template-columns: 10fr 1fr;
     align-items: center;
     height: 100px;
     margin-top: 1em;
     text-decoration: none;
     color: darkgray;
     #chName {
       color: black;
     }
     #engName {
       font-family: TodaySB-Caps;
     }
     #info {
     }
     #publicRecipeInfo {
       padding-left: 1em;
     }
     #plusBtn {
       font-size: 1.5em;
     }
     #rating {
       display: inline;
       margin-left: 1em;
     }
   }
 }

</style>
