<template>
  <div id="config-page-box">
    <div id="header">&nbsp;<i class="fa fa-cog"></i> Persional Settings..</div>
    <div id="settingUserInfo"><span class="fa fa-user" style="margin-right: 1em;"></span>Marswiz</div>
    <setting-page-component>
      <template #headerText>
        Persional Daily Nutrition Goals
      </template>
      <template #settingComponent>
        <personal-goals-setting></personal-goals-setting>
      </template>
    </setting-page-component>
    <setting-page-component>
      <template #headerText>
        Security Settings
      </template>
      <template #settingComponent>
        <div id="security" style="border: 1px solid tomato; height: 100px;">Security Setting to be coden</div>
      </template>
    </setting-page-component>
  </div>
</template>

<script>
import settingPageComponent from '@/components/setting-page-components/setting-items.vue';
import personalGoalsSetting from '@/components/setting-page-components/personal-goals-setting.vue'
export default {
  name: "config-page",
  components: {
    settingPageComponent,
    personalGoalsSetting,
  },
}
</script>

<style scoped lang="scss">
  #config-page-box{
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding: 0 2em;
    width: 100vw;
    border: 1px solid tomato;
    #header {
      font-family: "Courier New";
      font-weight: bold;
      background-color: black;
      width: 80%;
      align-self: flex-end;
      color: white;
      padding: .2em 0;
      margin: 6em 0 0 0;
    }
    #settingUserInfo {
      display: flex;
      justify-content: flex-end;
      font-family: "Courier New";
      font-weight: bold;
      color: black;
      width: auto;
      margin-bottom: 2em;
      margin-top: 2em;
    }
  }

</style>