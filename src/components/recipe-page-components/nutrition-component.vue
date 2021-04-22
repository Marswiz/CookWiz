<template>
  <div id="nutrition">
    <p>
      <div class="item">热量：</div>
      <div class="value">{{nutritionInfo.energy}}kJ<div class="percent">({{nutritionPercent.energy}}%)</div></div>
    </p>
    <p><div class="item">蛋白质：</div><div class="value">{{nutritionInfo.protein}}g<div class="percent">({{nutritionPercent.protein}}%)</div></div></p>
    <p><div class="item">碳水：</div><div class="value">{{nutritionInfo.sugar}}g<div class="percent">({{nutritionPercent.sugar}}%)</div></div></p>
    <p><div class="item">脂肪：</div><div class="value">{{nutritionInfo.fat}}g<div class="percent">({{nutritionPercent.fat}}%)</div></div></p>
  </div>
</template>

<script>
import {computed,inject} from 'vue';
import {getLocalUserNutritionGoals} from "@/js/leancloud/checkLocalUser";

export default {
  name: "nutrition-component",
  setup(){
    const foods = inject('foods');

    // cal the nutrition info of this recipe.
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

    // cal the nutrition value percent of user's goal.
    const localUserGoals = getLocalUserNutritionGoals();
    const nameTransferer = {
      caloriesGoal: 'energy',
      carbohydrateGoal: 'sugar',
      fatGoal: 'fat',
      proteinGoal: 'protein',
    };
    const nutritionPercent = computed(()=>{
      let res = {};
      for (let item of Object.keys(localUserGoals)){
        let name = nameTransferer[item];
        let percent = +nutritionInfo.value[name] / +localUserGoals[item] * 100;
        res[nameTransferer[item]] = percent.toFixed(2);
      }
      return res;
    });
    return {
      nutritionInfo,
      nutritionPercent,
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
  margin-bottom: 2em;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
}
p {
  display: flex;
  width: 100%;
  font-size: .8em;
  justify-content: space-between;
  margin: .2em 0;
}
.item {
  font-weight: bold;
}
.value {
  padding-right: 1em;
  color: #ef8781;
  text-align: right;
}
.percent {
  color: gray;
}
</style>
