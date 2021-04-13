<template>
  <div id="config-page-box">
    <div id="header">
      <i class="fa fa-true"></i>
      Verify Your <span v-if="verifyType == 'email'">Email</span><span v-if="verifyType == 'mobile'">Mobile Phone Number</span>..
    </div>
    <div id="settingUserInfo"><span class="fa fa-user" style="margin-right: 1em;"></span>Marswiz</div>
    <component :is="verifyType"></component>
    <div v-if="verifyType == 'email'" class="link" @click="toggleVerifyType"><i class="fa fa-angle-double-right   "></i> Go To Verify Mobile Phone Number..</div>
    <div v-if="verifyType == 'mobile'" class="link" @click="toggleVerifyType"><i class="fa fa-angle-double-right   "></i> Go To Verify Email ..</div>
  </div>
</template>

<script>
import {ref} from 'vue';
import verifyEmailComponent from '@/components/verify-page-components/verify-email.vue';
import verifyMobileComponent from '@/components/verify-page-components/verify-mobile.vue';
export default {
  name: "verify-page",
  setup(){
    const verifyType = ref('email');

    function toggleVerifyType(){
      if (verifyType.value === 'email') verifyType.value = 'mobile';
      else verifyType.value = 'email';
    }

    return {
      verifyType,
      toggleVerifyType,
    };
  },
  components: {
    'email': verifyEmailComponent,
    'mobile': verifyMobileComponent,
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
    text-align: right;
    font-weight: bold;
    background-color: black;
    //width: 100%;
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
  .link {
    color: #888;
    font-family: TodaySB-Caps;
    margin-top: 4em;
    text-align: right;
    transition: all .5s;
    &:hover {
      cursor: pointer;
      color: black;
      text-decoration: underline;
    }
  }
}

</style>
