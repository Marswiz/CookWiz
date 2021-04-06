<template>
  <div id="catagory-item-box">
    <a id="catagoryItem" @click="toggleShown" :style="shownStyle">
      <p id="categoryNameChinese">
        {{chineseName}}<span v-if="shown" class="flag">-</span><span v-else class="flag">+</span>
      </p>
      <p id="categoryNameEnglish"> {{englishName}} </p>
    </a>
    <transition name="recipe">
      <recipe-items v-if="shown" :recipes="recipes"></recipe-items>
    </transition>
  </div>
</template>

<script>
import recipeItems from "./recipe-items.vue";
import {ref, computed} from 'vue';

export default {
  setup(){
    let shown = ref(false);
    const toggleShown = function (){
      shown.value = !shown.value;
    };

    const shownStyle = computed(()=>{
      if (shown.value) {
        return {
          textShadow: '1px 1px 0 white,3px 3px 0 lightgrey',
        };
      } else {
        return {};
      }
    });

    return {
      shown,
      toggleShown,
      shownStyle,
    };
  },
  props: {
    chineseName: String,
    englishName: String,
    recipes: Array,
  },
  components: {
    recipeItems,
  },
}
</script>

<style lang="scss">

// Define the animation duration time of all animation effects.
$animationTime: 0.3s;

 #catagory-item-box{
   margin: 1.4em 0;
 }

 #catagoryItem {
   text-decoration: none;
   color: rgba(0,0,0);
   cursor: pointer;
   transition: all 0.25s;
 }

 p {
   margin: 0;
 }

 #categoryNameChinese {
   font-family: "华文中宋" ,Serif;
   font-size: 1.4em;
   .flag {
     content: '+';
     font-size: 1em;
     display: inline-block;
     margin-left: 0.4em;
     font-weight: bold;
   }
 }

 #categoryNameEnglish {
   font-family: 'TodaySB-Caps', sans-serif;
   padding-top: .2em;
 }



 @keyframes recipe-in {
   0% {
     opacity: 0;
     transform: translateY(-100%);
   }
   50% {
     opacity: 0;
     transform: translateY(-20%);
   }
   100% {
     opacity: 1;
     transform: translateY(0);
   }
 }

 .recipe-enter-active {
   animation: recipe-in $animationTime;
 }

 .recipe-leave-active {
   animation: recipe-in $animationTime reverse;
 }

</style>
