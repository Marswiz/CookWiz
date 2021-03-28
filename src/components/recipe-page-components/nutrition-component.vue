<template>
  <div id="nutrition">
    <p><span class="item">热量：</span>{{calories}}g</p>
    <p><span class="item">蛋白质：</span>{{protein}}g</p>
    <p><span class="item">碳水：</span>{{sugar}}g</p>
    <p><span class="item">脂肪：</span>{{fat}}g</p>
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
  width: 100%;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
}
.item {
  font-weight: bold;
}
</style>