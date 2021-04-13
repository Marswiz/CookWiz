<template>
  <div class="settingItem">
    <div id="header" @click="shown = !shown" :class="{selected: shown}">
      <slot name="headerText">Default Setting</slot>
      <span id="label" :class="{rotated: shown}"> > </span>
    </div>
    <div id="setting" v-if="shown">
      <slot name="settingComponent">Default Setting Component</slot>
    </div>
  </div>
</template>

<script>
import {ref} from 'vue';
export default {
  setup(){
    const shown = ref(false);
    return {
      shown,
    };
  },
  name: "setting-items"
}
</script>

<style scoped lang="scss">
  .settingItem{
    display: flex;
    flex-direction: column;
    color: #777;
    .selected{
      color: black;
      text-shadow: 1px 1px 0 white, 2px 2px 0 lightgrey;
    }
    #label {
      color: black;
      font-family: TodaySB-Caps;
      font-weight: bolder;
      transition: all .25s;
    }
    #header {
      display: flex;
      font-size: 1.1em;
      font-family: TodaySB-Caps;
      justify-content: space-between;
      padding: .5em 0;
      span {
        text-shadow: 1px 1px 0 white, 2px 2px 0 lightgrey;
      }
    }
    #setting{
      padding-top: .2em;
      width: 100%;
    }
    .rotated {
      transform: rotateZ(90deg);
    }
  }
</style>
