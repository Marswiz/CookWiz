<template>
  <div id="verifyMobileBox">
    <label for="mobile">Your Mobile Phone Number:</label>
    <div style="display: flex;margin-top: 1em;">
      <span style="font-weight: bold;">+86&nbsp;&nbsp;</span><input type="tel" id="mobile" v-model="mobileInput">
    </div>
    <button id="verifyMobile" @click="verifyMobile">Verify</button>
    <div id="messageBox" v-for="(message,index) in messages" :key="index">{{message}}</div>
  </div>
</template>

<script>
import {getLocalUser} from "@/js/leancloudInit";
import {ref,reactive} from 'vue';

export default {
  name: "verify-mobile",
  setup(){
    const mobileInput = ref('');
    const mobileRex = /^1[0-9]{10}$/;
    const messages = reactive(new Set());

    // 为当前用户提交验证电话号码
    function verifyMobile(){
      let verifyFormat = mobileRex.test(mobileInput.value);
      if (verifyFormat) {
        if (mobileInput.value === getLocalUser().getMobilePhoneNumber()){
          messages.clear();
          messages.add('Your Mobile Phone Number has not changed.');
          return ;
        }
        messages.clear();
        const localUser = getLocalUser();
        localUser.set('mobilePhoneNumber','+86'+mobileInput.value);
        localUser.save().then((res)=>{
          console.log(res);
        });
      } else {
        messages.clear();
        messages.add('Check Your Mobile Phone Number Format Please.');
      }
    }
    return {
      mobileInput,
      messages,
      verifyMobile,
    };
  },
}
</script>

<style scoped lang="scss">
#verifyMobileBox {
  display: flex;
  flex-direction: column;
  padding-top: 2em;
  #mobile {
    width: 100%;
    border: 2px solid black;
    background-color: lightgrey;
    font-size: 1em;
    border-radius: .2em;
  }
  #verifyMobile {
    align-self: flex-end;
    background-color: black;
    font-family: TodaySB-Caps;
    border-radius: .4em;
    padding: 0 1em;
    color: white;
    outline: none;
    font-size: 1em;
    height: 2em;
    margin-top: 1em;
    border: none;
    &:hover {
      background-color: gray;
    }
  }
  #messageBox {
    padding: 1em 0;
  }
}

</style>
