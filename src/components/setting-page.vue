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
        <security-info-component></security-info-component>
      </template>
    </setting-page-component>
  </div>
</template>

<script>
import settingPageComponent from '@/components/setting-page-components/setting-items.vue';
import personalGoalsSetting from '@/components/setting-page-components/personal-goals-setting.vue';
import securityInfoComponent from '@/components/setting-page-components/security-info.vue';

export default {
  name: "config-page",
  components: {
    settingPageComponent,
    personalGoalsSetting,
    securityInfoComponent,
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
