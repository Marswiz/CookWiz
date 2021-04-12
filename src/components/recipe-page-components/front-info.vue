<template>
  <div id="front-info-box">
    <div id="recipe-title">{{ basicInfo.chName }}</div>
    <div id="recipe-title-eng">{{ basicInfo.engName }}</div>
    <div id="info-box">
      <front-info-tag icon-name="clock-o" :tag-info="basicInfo.time+'min'"></front-info-tag>
      <front-info-tag icon-name="bookmark-o" :tag-info="basicInfo.category"></front-info-tag>
      <front-info-tag icon-name="user-o" :tag-info="basicInfo.serve+'人份'"></front-info-tag>
    </div>
    <div id="tag-box">
      <front-info-tag icon-name="tag" :tag-info="tagsString"></front-info-tag>
    </div>
    <div id="publicInfo">
      <div v-if="!basicInfo.isPublic" @click="toPublic(),$emit('togglePublic')"><i class="fa fa-lock"></i><span> Private</span></div>
      <div v-if="basicInfo.isPublic" @click="toPrivate(),$emit('togglePublic')"><i class="fa fa-unlock"></i><span> Public</span></div>
    </div>
    <rating-component :rating="basicInfo.rating"></rating-component>
    <nutrition-component :ingredient="basicInfo.ingredient"></nutrition-component>
  </div>
</template>

<script>
import {computed, inject} from 'vue';
import frontInfoTag from './front-info-tag.vue';
import ratingComponent from './rating-component.vue';
import nutritionComponent from './nutrition-component.vue';
import {publicUsersRecipe,privateUsersRecipe} from '@/js/leancloudInit.js';

export default {
  name: "front-info",
  setup(props){
    const userInfo = inject('userInfo');
    // tags数组展开为字符串。
    let tagsString = computed(()=>{
      let tags = '';
      for (let i = 0; i < props.basicInfo.tag.length; i++){
        tags += props.basicInfo.tag[i];
        tags += ' ';
      }
      return tags;
    });

    return {
      tagsString,
      toPublic: ()=>{
        publicUsersRecipe(userInfo.user, props.basicInfo);
      },
      toPrivate: ()=>{
        privateUsersRecipe(userInfo.user, props.basicInfo);
      },
    };
  },
  props: [
      'basicInfo'
  ],
  components: {
    frontInfoTag,
    ratingComponent,
    nutritionComponent,
  },
  emits: ['togglePublic'],
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
      font-family: '华文中宋';
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
      margin: 0.2em 0;
    }
    #publicInfo{
      margin: 0.2em 0;
      align-self: flex-start;
      font-family: '华文中宋';
      .fa {
        color: darkseagreen;
        font-weight: bold;
        font-size: 1.2em;
      }
    }
  }

</style>
