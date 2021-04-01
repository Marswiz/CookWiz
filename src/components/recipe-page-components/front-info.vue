<template>
  <div id="front-info-box">
    <div id="recipe-title">{{ recipeBasicInfo.chName }}</div>
    <div id="recipe-title-eng">{{ recipeBasicInfo.engName }}</div>
    <div id="info-box">
      <front-info-tag icon-name="clock-o" :tag-info="recipeBasicInfo.time+'min'"></front-info-tag>
      <front-info-tag icon-name="bookmark-o" :tag-info="recipeBasicInfo.category"></front-info-tag>
      <front-info-tag icon-name="user-o" :tag-info="recipeBasicInfo.serve+'人份'"></front-info-tag>
    </div>
    <div id="tag-box">
      <front-info-tag icon-name="tag" :tag-info="recipeBasicInfo.tags.toString()"></front-info-tag>
    </div>
    <rating-component :rating="recipeBasicInfo.rating"></rating-component>
    <nutrition-component></nutrition-component>
  </div>
</template>

<script>
import {reactive,ref} from 'vue';
import frontInfoTag from './front-info-tag.vue';
import ratingComponent from './rating-component.vue';
import nutritionComponent from './nutrition-component.vue';

export default {
  name: "front-info",
  setup(props){
    console.log(props.basicInfo);
    let recipeBasicInfo = reactive(props.basicInfo);

    // tags数组展开为字符串。
    let tags = ref('');
     let calTags = ()=>{
        for (let i = 0; i < recipeBasicInfo.tags.length; i++){
          tags.value += recipeBasicInfo.tags[i];
          tags.value += ' ';
        }
      }
      calTags();
    return {
      recipeBasicInfo,
      tags,
    };
  },
  props: [
      'basicInfo'
  ],
  components: {
    frontInfoTag,
    ratingComponent,
    nutritionComponent,
  }
}
</script>

<style scoped lang="scss">
  $main-color: #ef8781;
  $gray: #757475;
  #front-info-box{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    #recipe-title {
      font-family: '华光大标宋_CNKI';
      color: $main-color;
      margin: 2em 0 0.6em 0;
      font-size: 1.6em;
    }
    #recipe-title-eng {
      font-family: 'TodaySB-Caps';
      margin-bottom: 1em;
      color: $gray;
    }
    #info-box{
      display: flex;
      align-self: stretch;
      justify-content: space-between;
    }
    #tag-box{
      align-self: stretch;
      margin-top: 0.1em;
    }
  }

</style>