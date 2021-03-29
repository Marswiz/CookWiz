<template>
  <h2>Process</h2>
  <div id="process-box">
    <p v-for="(item,index) in process" :key="index" id="process">
      <div id="index">{{itemIndex[index]}}.</div>
      <div id="item">{{item}}</div>
    </p>
  </div>
</template>

<script>
export default {
  name: "process-component",
  data(){
    return {
      process: [
          '把冰箱门打开  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aut autem ducimus esse fugiat ipsum iste, itaque magnam, obcaecati officia, omnis perspiciatis quas qui sequi similique soluta voluptates voluptatibus voluptatum.',
          '把大象塞进去',
          '把冰箱门带上',
        '把大象塞进去',
        '把大象塞进去',
        '把大象塞进去',
        '把大象塞进去',
        '把大象塞进去',
        '把大象塞进去',
        '把大象塞进去',
        '把大象塞进去',
        '把大象塞进去',
        '把大象塞进去',
      ],
    };
  },
  computed:{
    itemIndex(){
      let res = [];
      if (this.process.length <= 26){
        for (let i=0; i<this.process.length; i++){
          res.push(String.fromCharCode(i+65));
        }
        return res;
      } else {
        for (let i=0; i<26; i++){
          res.push(String.fromCharCode(i+65));
        }
        let decMax = Math.floor((this.process.length-1) / 26 );
        let unitMax = (this.process.length - 1) % 26;
        for (let i=0; i<decMax; i++){
          if (i != decMax-1){
            for (let j=0; j<26; j++){
              res.push(String.fromCharCode(i+65).concat(String.fromCharCode(j+65)));
            }
          } else {
            for (let j=0; j<=unitMax; j++){
              res.push(String.fromCharCode(i+65).concat(String.fromCharCode(j+65)));
            }
          }
        }
        return res;
      }
    },
  }
}
</script>

<style scoped>
h2 {
  margin-top: 2em;
  letter-spacing: .15em;
}
 #process-box{
   word-break: break-all;
   font-family: '华文仿宋',Serif;
   color: #757475;
 }
 #process {
   display: flex;
   margin-bottom: 0.2em;
   width: 100%;
 }
 #item {
   margin-left: 0.2em;
   flex: 10;
 }
 #index{
   padding-top: .08em;
   flex: 1.4;
   font-family: Helvetica,sans-serif;
   color: #ef8781;
   font-size: 1em;
 }
</style>