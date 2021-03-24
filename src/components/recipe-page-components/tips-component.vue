<template>
  <h2>Tips</h2>
  <div id="tips">
    <p v-for="(item,index) in tips" :key="index">
      {{ item }}
    </p>
  </div>
</template>

<script>
export default {
  name: "tips-component",
  data(){
    return {
      tips: ['动作要快','姿势要帅'],
    };
  }
}
</script>

<style scoped>

</style>