<template>
  <div id="front-info-box">
    <div id="recipe-title">煨炖小牛膝</div>
    <time datetime="2021-03-21">2021-03-21</time>
    <div id="info-box">
      <front-info-tag icon-name="clock-o" tag-info="5min"></front-info-tag>
      <front-info-tag icon-name="bookmark-o" tag-info="MC"></front-info-tag>
      <front-info-tag icon-name="user-o" tag-info="1人份"></front-info-tag>
    </div>
    <div id="tag-box">
      <front-info-tag icon-name="tag" tag-info="意大利菜 辛辣 咸鲜"></front-info-tag>
    </div>
    <rating-component :rating="1.7556"></rating-component>
    <nutrition-component></nutrition-component>
  </div>
</template>

<script>
import frontInfoTag from './front-info-tag.vue';
import ratingComponent from './rating-component.vue';
import nutritionComponent from './nutrition-component.vue';

export default {
  name: "front-info",
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
    #recipe-title {
      font-family: '华光大标宋_CNKI';
      color: $main-color;
      margin: 2em 0 0.6em 0;
      font-size: 1.6em;
    }
    time {
      font-family: 'TodaySB-Caps';
      margin-bottom: 1em;
    }
    #info-box{
      display: flex;
      align-self: stretch;
      justify-content: space-between;
    }
    #tag-box{
      align-self: stretch;
      margin-top: 0.5em;
    }
  }

</style>