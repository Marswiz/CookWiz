<template>
  <div id="nutrition">
    <p><span class="item">热量：</span>{{nutritionInfo.energy}}cal</p>
    <p><span class="item">蛋白质：</span>{{nutritionInfo.protein}}g</p>
    <p><span class="item">碳水：</span>{{nutritionInfo.sugar}}g</p>
    <p><span class="item">脂肪：</span>{{nutritionInfo.fat}}g</p>
  </div>
</template>

<script>
import {computed} from 'vue';
export default {
  name: "nutrition-component",
  setup(props){
    // 测试用食物列表
    let nutritionList = [{
      food: '排骨',
      protein: 20,
      fat: 10,
      sugar: 7,
      energy: 200,
    },{
      food: '大蒜',
      protein: 10,
      fat: 5,
      sugar: 2,
      energy: 20,
    },{
      food: '胡萝卜',
      protein: 8,
      fat: 9,
      sugar: 2,
      energy: 160,
    },{
      food: '青椒',
      protein: 2,
      fat: 2,
      sugar: 8,
      energy: 80,
    },];

    let nutritionInfo = computed(()=>{
      let res = {
        protein: 0,
        fat: 0,
        sugar: 0,
        energy: 0,
      };

      // find food by name.
      function findFood(name){
        for (let i of nutritionList){
          if (i.food == name){
            return i;
          }
        }
      }

      // convert weight string to number
      function weightToNum(weightStr){
        return +weightStr.slice(0,weightStr.length-1);
      }

      for (let i of props.ingredient){
        let food = findFood(i.food);
        for (let j of Object.keys(res)){
          res[j] += food[j]*weightToNum(i.weight)/100;
        }
      }

      for (let k of Object.keys(res)){
        res[k] = +res[k].toFixed(2);
      }

      return res;
    });

    return {
      nutritionInfo,
    };
  },
  props: [
      'ingredient',
  ],
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