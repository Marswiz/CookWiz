<template>
  <div id="tag-box">
    <p id="tag-info"><span id="tag-img" :class="'fa fa-'+iconName"></span> {{ tagInfo }}</p>
  </div>
</template>

<script>
export default {
  name: "front-info-tag",
  props: [
      'iconName',
      'tagInfo',
  ],
}
</script>

<style scoped>
#tag-box{
  margin: 0 0.2em;
  font-family: '华文中宋';
}
#tag-img{
  color: #757475;
  font-weight: bold;
  font-size: 1.2em;
}
</style>