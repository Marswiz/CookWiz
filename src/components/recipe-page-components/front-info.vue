<template>
  <div id="front-info-box">
    <div id="recipe-title">煨炖小牛膝</div>
    <time datetime="2021-03-21">2021-03-21</time>
    <div id="info-box">
      <front-info-tag></front-info-tag>
      <front-info-tag></front-info-tag>
      <front-info-tag></front-info-tag>
    </div>
    <div id="tag-box">
      <front-info-tag></front-info-tag>
      <front-info-tag></front-info-tag>
      <front-info-tag></front-info-tag>s
    </div>
    <div id="rating">★★★★★</div>
  </div>
</template>

<script>
import frontInfoTag from './front-info-tag.vue';

export default {
  name: "front-info",
  components: {
    frontInfoTag,
  }
}
</script>

<style scoped>

</style>