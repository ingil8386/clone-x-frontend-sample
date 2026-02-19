<template>
  <div>
    <input type="text" :placeholder="'Email'" v-model="text">
     <input type="password" :placeholder="'Password'" v-model="password">
  </div>
<button @click="login">로그인하기</button>

<div>
    계정이 없으신가요?
    <span>가입하기</span>
</div>
</template>

<script>
export default {
    name:"LoginPage",
    data(){
        return {
            email:"",
            password:"",
        };
    },
    methods: {
        login(){
            console(this.email, this.password);
        },
    },
};
</script>

<style>

</style>