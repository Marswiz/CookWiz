<template>
  <div id="nutrition">
    <p><div class="item">热量：</div><div class="value">{{nutritionInfo.energy}}kJ</div></p>
    <p><div class="item">蛋白质：</div><div class="value">{{nutritionInfo.protein}}g</div></p>
    <p><div class="item">碳水：</div><div class="value">{{nutritionInfo.sugar}}g</div></p>
    <p><div class="item">脂肪：</div><div class="value">{{nutritionInfo.fat}}g</div></p>
  </div>
</template>

<script>
import {computed,inject} from 'vue';
// import {getFoodNutritionByName} from "@/js/leancloudInit";

export default {
  name: "nutrition-component",
  setup(){
    const foods = inject('foods');
    console.log(foods);

    let nutritionInfo = computed(()=>{
      let res = {
        protein: 0,
        fat: 0,
        sugar: 0,
        energy: 0,
      };

      for (let i of foods){
        for (let j of Object.keys(res)){
          res[j] += i[j]*i.weight/100;
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
}
</script>

<style scoped>
#nutrition {
  display: grid;
  justify-content: center;
  height: 3em;
  width: 100%;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
}
p {
  display: flex;
  width: 100%;
  font-size: .8em;
  justify-content: space-between;
}
.item {
  font-weight: bold;
}
.value {
  padding-right: 1em;
  color: #ef8781;
  text-align: right;
}
</style>