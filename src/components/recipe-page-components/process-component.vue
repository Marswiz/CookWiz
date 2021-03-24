<template>
  <h2>Process</h2>
  <div id="process-box">
    <p v-for="(item,index) in process" :key="index">
      {{item}}
    </p>
  </div>
</template>

<script>
export default {
  name: "process-component",
  data(){
    return {
      process: [
          '把冰箱门打开',
          '把大象塞进去',
          '把冰箱门带上'
      ],
    };
  },
}
</script>

<style scoped>
  h2 {
    font-family: TodaySB-Caps,sans-serif;
  }
</style>