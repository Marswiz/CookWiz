<template>
  <div id="personalGoalsSetting">
    <div class="item">
      <p class="label">Protein:</p>
      <p><input class="inputNum" type="number" v-model="goals.proteinGoal"> g</p>
    </div>
    <div class="item">
      <p class="label">Fat:</p>
      <p><input class="inputNum" type="number" v-model="goals.fatGoal"> g</p>
    </div>
    <div class="item">
      <p class="label">Carbohydrate</p>
      <p><input class="inputNum" type="number"  v-model="goals.carbohydrateGoal"> g</p>
    </div>
    <div class="item">
      <p class="label">Calories:</p>
      <p><input class="inputNum" type="number" disabled style="color: darkgray;" :value="caledCalories"> kJ</p>
    </div>
    <div class="btnBox">
      <button @click="throttledSaveGoals">Save</button>
    </div>
  </div>
</template>

<script>
import {reactive, computed} from 'vue';
import {changeUserGoals} from "@/js/leancloud/setting";
import {_throttle} from "@/js/throttle";

export default {
  name: "personal-goals",
  setup(){
    const goals = reactive({
      proteinGoal: 0,
      fatGoal: 0,
      carbohydrateGoal: 0,
      caloriesGoal: 0,
    });

    const caledCalories = computed(()=>((+goals.proteinGoal + +goals.carbohydrateGoal) * 16.74 + +goals.fatGoal * 37.67).toFixed(2));

    function saveGoals(){
      goals.caloriesGoal = (goals.proteinGoal + goals.carbohydrateGoal) * 16.74 + goals.fatGoal * 37.67;
      changeUserGoals(goals);
    }

    return {
      goals,
      caledCalories,
      throttledSaveGoals: _throttle(saveGoals,1000),
    };
  },
}
</script>

<style scoped lang="scss">
  #personalGoalsSetting {
    display: grid;
    width: 80vw;
    grid-template-columns: 1fr;
    gap: .5em;
    .label {
      font-family: '华文中宋';
      color: black;
      text-shadow: 1px 1px 0 white, 2px 2px 0 lightgrey;
    }
    .item {
      display: grid;
      grid-template-columns: 1fr 1fr;
      .inputNum{
        width: 100px;
        background-color: transparent;
        border: none;
        border-bottom: 1px solid black;
      }
    }
    .btnBox {
      display: flex;
      justify-content: flex-end;
      button {
        width: 100px;
        height: 2em;
        margin: 1em 0;
        border: none;
        background-color: black;
        color: white;
        border-radius: 4px;
        &:active {
          background-color: gray;
        }
      }
    }
  }
</style>
