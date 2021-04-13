<template>
  <div id="verifyEmailBox">
    <label for="email">Your Email Address:</label>
    <input type="email" id="email" v-model="emailInput">
    <button id="verifyEmail" @click="verifyEmail">Verify</button>
    <div id="messageBox" v-for="(message,index) in messages" :key="index">{{message}}</div>
  </div>
</template>

<script>
import {getLocalUser} from "@/js/leancloudInit";
import {ref,reactive} from 'vue';

export default {
  name: "verify-email",
  setup(){
    const emailInput = ref('');
    const emailRex = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
    const messages = reactive(new Set());

    // 为当前用户提交验证邮件地址
    function verifyEmail(){
      let verifyFormat = emailRex.test(emailInput.value);
      if (verifyFormat) {
        if (emailInput.value === getLocalUser().getEmail()){
          messages.clear();
          messages.add('Your Email has not changed.');
          return ;
        }
        messages.clear();
        const localUser = getLocalUser();
        localUser.set('email',emailInput.value);
        localUser.save().then(()=>{
          messages.clear();
          messages.add('Please Checkout your Email and Click the Verify URL.');
        });
      } else {
        messages.clear();
        messages.add('Check Your Email Address Format Please.');
      }
    }
    return {
      emailInput,
      messages,
      verifyEmail,
    };
  },
}
</script>

<style scoped lang="scss">
#verifyEmailBox {
  display: flex;
  flex-direction: column;
  padding-top: 2em;
  #email {
    width: 100%;
    border: 2px solid black;
    background-color: lightgrey;
    font-size: 1em;
    border-radius: .2em;
    margin-top: 1em;
  }
  #verifyEmail {
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
