<template>
  <div id="securityInfoBox">
    <div class="item" id="emailInfo">
      <div class="basicInfo">
        <p class="label">Email Verification Info:</p>
        <p v-if="emailVerificationFlag" class="verified">Verified</p>
        <p v-if="!emailVerificationFlag" class="unverified">Not Verified</p>
      </div>
      <div class="btnBox">
        <button v-if="!emailVerificationFlag"  @click="routeToVerify">>Verify Now</button>
        <button v-if="emailVerificationFlag"  @click="routeToVerify">Change Email</button>
      </div>
    </div>
    <div class="item" id="mobileInfo">
      <div class="basicInfo">
        <p class="label">Mobile Verification Info:</p>
        <p v-if="mobileVerificationFlag" class="verified">Verified</p>
        <p v-if="!mobileVerificationFlag" class="unverified">Not Verified</p>
      </div>
      <div class="btnBox">
        <button v-if="!mobileVerificationFlag" @click="routeToVerify">Verify Now</button>
        <button v-if="mobileVerificationFlag" @click="routeToVerify">Change Mobile Number</button>
      </div>
    </div>
  </div>
</template>

<script>
import {getLocalUser} from '@/js/leancloudInit';
import {ref} from 'vue';
import { useRouter } from 'vue-router';
export default {
  name: "security-info",
  setup(){
    const router = useRouter();
    const emailVerificationFlag = ref(getLocalUser().attributes.emailVerified);
    const mobileVerificationFlag = ref(getLocalUser().attributes.mobilePhoneVerified);
    function routeToVerify(){
      router.push('/verify');
    }

    return {
      emailVerificationFlag,
      mobileVerificationFlag,
      routeToVerify,
    };
  },
}
</script>

<style scoped lang="scss">
  #securityInfoBox {
    display: flex;
    flex-direction: column;
    .item {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 30px 30px;
      padding: .5em 0;
      .basicInfo {
        display: flex;
        justify-content: space-between;
        .label {
          color: black;
          text-shadow: 1px 1px 0 white, 2px 2px 0 lightgrey;
        }
      }
      .btnBox{
        display: flex;
        justify-content: flex-end;
        button {
          width: 100px;
          height: 2em;
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
    .verified{
      margin-left: 1em;
      color: darkseagreen;
      font-weight: bold;
    }
    .unverified {
      margin-left: 1em;
      color: #ef8781;
      font-weight: bold;
    }
  }
</style>
