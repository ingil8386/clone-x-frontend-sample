<template>
    <div class="logo-container">
       <img src="@/assets/x-logo.png" class="logo"/>
    </div>
    <div class="title">
        계정을 생성하세요.
        <InputField 
        :type="text" 
        :placeholder="'이메일'" 
        v-model="email" 
        :errorMsg="'이메일을 입력하세요.'"
        />
        <InputField :type="text" 
        :placeholder="'이름'" 
        v-model="name" 
        :errorMsg="'이름을 입력하세요.'"
        />
        <InputField 
        :type="text" 
        :placeholder="'비밀번호'"
        :errorMsg="'비밀번호를 입력하세요.'"
         v-model="password"
         />
        <InputField
         :type="password" 
         :placeholder="'비밀번호확인'" 
         v-model="passwordConfirm"
         />
<span 
    v-if="passwordCheckMessage"
    :class="isPasswordMatch ? 'success-message' : 'error-message'">
    {{ passwordCheckMessage }}
</span>

        <button class="button" @click="signup">회원가입</button>
    </div>
</template>

<script>
import InputField from '@/components/InputField.vue';
export default {

    name : "SignUpPage",
    components : {InputField},
    data(){
        return{
            email:"",
            name :"",
            password:"",
            passwordConfirm:"",
        };
    },
computed:{
    passwordCheckMessage(){
        if(!this.passwordConfirm) return "";

        if(this.password === this.passwordConfirm){
            return "비밀번호가 일치합니다.";
        }else{
            return "비밀번호가 일치하지 않습니다.";
        }
    },
    isPasswordMatch(){
        if(!this.passwordConfirm) return true;
        return this.password === this.passwordConfirm;
    }
},
};
</script>

<style>
.title {
     margin-top: 10px;
     margin-bottom:  10px;
     font-size: large;
     padding: 1%;
}


</style>