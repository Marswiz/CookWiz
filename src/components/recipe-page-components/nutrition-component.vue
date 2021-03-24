<template>
  <div id="nutrition">
    <p>热量：{{calories}}g</p>
    <p>蛋白质：{{protein}}g</p>
    <p>碳水：{{sugar}}g</p>
    <p>脂肪：{{fat}}g</p>
  </div>
</template>

<script>
export default {
  name: "nutrition-component",
  data(){
    return {
      protein: 100,
      fat: 20,
      sugar: 10,
      calories: 50,
    };
  },
}
</script>

<style scoped>
#nutrition {
  display: grid;
  height: 3em;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
}
</style>