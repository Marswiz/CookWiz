<template>
  <div style="display: flex;flex-direction: column;align-items: center;">
    <h2>Process</h2>
    <div id="process-box">
      <p v-for="(item,index) in process" :key="index" id="process">
        <div id="index">{{itemIndex[index]}}.</div>
        <div id="item">{{item}}</div>
      </p>
    </div>
  </div>
</template>

<script>

export default {
  name: "process-component",
  props:[
      'process',
  ],
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

<style scoped lang="scss">
h2 {
  margin-top: 2em;
  letter-spacing: .15em;
  text-shadow: 1px 1px 0 white, 2px 2px 0 lightgrey;
}
 #process-box{
   align-self: flex-start;
   word-break: break-all;
   font-family: '华文仿宋',Serif;
   color: #757475;
 }
 #process {
   display: flex;
   margin-bottom: 0.6em;
   width: 100%;
 }
 #item {
   margin-left: 0.2em;
   flex: 10;
    &::after{
       content: ';';
     }
 }
 #index{
   padding-top: .08em;
   width: 30px;
   font-family: Helvetica,sans-serif;
   color: #ef8781;
   font-size: 1em;
 }
</style>