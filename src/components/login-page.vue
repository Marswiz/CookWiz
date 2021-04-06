<template>
  <div id="loginPageRoot">
    <p id="loginHeader" :class="{typing: true}">&nbsp;Login your account&nbsp;</p>
    <div id="loginFormInput">
        <label class="loginLabel" for="username">Username:</label><input class="loginInput" v-model="loginInputs.username" type="text" id="username">
        <label class="loginLabel" for="password">Password:</label><input class="loginInput" v-model="loginInputs.password" type="password" id="password">
        <label class="loginLabel" for="verificationCode">Verification Code:</label><input class="loginInput" v-model="loginInputs.validation" type="text" maxlength="4" id="verificationCode">
        <p></p>
        <validation-component class="validationImg" @loadValidationCode="loadValidationCode"></validation-component>
    </div>
    <div id="loginFormSubmit">
      <button id="loginBtn" class="loginBtn" @click="loginFunc">Login</button>
      <button id="registerBtn" class="loginBtn"  @click="registerFunc">Register</button>
    </div>
    <div id="messageBox" v-for="(message,index) in messages" :key="index"><i class="fa fa-warning"></i> {{message}}</div>
  </div>
</template>

<script>
import validationComponent from '@/components/login-components/validation-component.vue';
import {ref,reactive,inject} from 'vue';
import {login} from "@/js/leancloudInit.js";
import { useRouter } from 'vue-router';

export default {
  setup(){
    const router = useRouter();

    // 从app.vue引入userInfo
    const userInfo = inject('userInfo');

    // login function.
    const loginFunc = function (){
      // 先执行检查
      check();
      if (loginInputs.submitPermission){
        login(loginInputs.username,loginInputs.password).then((res)=>{
          if (res.status){
            userInfo.user = res.user;
            userInfo.logStatus = res.status;
            router.push('/');
          } else {
            messages.clear();
            messages.add('您输入的信息有误，或账号未经注册。');
          }
        });
      }
    };

    const loginInputs = reactive({
      username: '',
      password: '',
      validation: '',
      submitPermission: false,
    });
    const messages = reactive(new Set());

    // 有关验证码的函数
    const validationCode = ref('');
    const loadValidationCode = function (code){
      validationCode.value = code;
    };

    // 执行用户输入检查
    const check = function (){
      //清空set
      messages.clear();
      // 验证结果
      let res = true;
      let validation = loginInputs.validation.toLowerCase() === validationCode.value.toLowerCase();
      if (!validation) {
        messages.add('验证码有误，请重新输入');
        res = false;
      }
      if (!loginInputs.username) {
        messages.add('用户名不能为空，请重新输入');
        res = false;
      }
      if (!/[0-9a-zA-Z_]{6,}/g.test(loginInputs.username)){
        messages.add('用户名至少为6位，请重新输入');
        res = false;
      }
      if (/[^0-9a-zA-Z_]/g.test(loginInputs.username)){
        messages.add('用户名只能包含数字、字母和下划线，请重新输入');
        res = false;
      }
      if (!/[0-9a-zA-Z_]{6,}/g.test(loginInputs.password)){
        messages.add('密码至少为6位，请重新输入');
        res = false;
      }
      if (!(/[0-9]/g.test(loginInputs.password) && /[A-Z]/g.test(loginInputs.password) && /[a-z]/g.test(loginInputs.password))){
        messages.add('密码必须包含数字、大写和小写字母，请重新输入');
        res = false;
      }
      // 记录到submitPermission
      loginInputs.submitPermission = res;
      return res;
    }

    return {
      loginInputs,messages,
      loginFunc,
      validationCode,
      loadValidationCode,
      check,
    };
  },
  name: "login-page",
  components: {
    validationComponent,
  },
}
</script>

<style lang="scss">
 @include typingEffect(2s,20,coral,1s);

 #loginHeader {
   align-self: flex-end;
   background-color: #000;
   color: white;
   margin: 2em 5vw;
   outline: 2px solid black;
   padding: 0.1em 0;
   font-weight: bold;
 }

 #loginPageRoot {
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   padding: 20vh 0;
 }

 #loginFormInput {
   display: grid;
   align-items: center;
   width: 90vw;
   margin: 0 1em;
   grid-template-columns: 1fr 1fr;
   gap: .5em;
 }

 .loginLabel {
   display: block;
   font-family: 'TodaySB-Caps';
   font-weight: bold;
   letter-spacing: 1px;
 }

 .loginInput {
   display: block;
   border: none;
   background-color: #ddd;
   font-family: "Courier New";
   font-weight: bold;
   &:focus {
     outline: 2px solid black;
   }
 }

 #loginFormSubmit {
   display: flex;
   align-items: center;
   justify-content: flex-end;
   width: 90vw;
 }

 #loginBtn {
   margin-right: 1em;
 }

 .loginBtn {
   border: none;
   background-color: black;
   font-family: 'Courier New';
   padding: 0 2em;
   height: 8vw;
   margin: 2.5em 0;
   color: white;
   font-weight: bold;
   &:active{
     background-color: #a1a1a1;
     text-decoration: underline;
   }
 }

 .validationImg{
   display: flex;
   justify-content: flex-end;
 }

 #messageBox {
   align-self: flex-end;
   font-size: .9em;
   margin: .2em;
   padding-right: 5vw;
   color: #ef8781;
   opacity: 0.8;
   font-family: '华文中宋';
 }
</style>