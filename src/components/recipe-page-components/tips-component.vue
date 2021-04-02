<template>
  <h2>Tips</h2>
  <div id="tips">
    <p v-for="(item,index) in tips" :key="index" id="tip">
      {{ item }}
    </p>
  </div>
</template>

<script>
import {reactive} from 'vue';

export default {
  name: "tips-component",
  setup(props){
    let recipeTips = reactive(props.tips);
    return {
      recipeTips,
    };
  },
  props:[
      'tips',
  ],
}
</script>

<style scoped lang="scss">
  h2 {
    margin-top: 2em;
    letter-spacing: .15em;
  }
  #tips{
    width: 100%;
    word-break: break-all;
    font-family: '华文仿宋',Serif;
    color: #757475;
    align-self: flex-start;
    &::after{
      content: '';
      display: block;
      width: 100%;
      margin-top: 1em;
      border-bottom: 2px dashed #757475;
    }
  }
  #tip {
    margin-bottom: 0.2em;
    text-align: justify;
    &::before {
      content: '●';
      margin-right: .9em;
      color: #ef8781;
    }
  }
</style>