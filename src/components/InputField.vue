<template>
  <div class="container">
    <input class="input-form" 
    :type="type" 
    :placeholder="placeholder" 
    :value="modelValue" 
    @input="updateValue"
    @blur="handlerBlur"
    
    />

    <span v-if="!howError && !modelValue" class="error-message">{{errorMsg}}</span>
  </div>
</template>

<script>


export default {
    name : "InputField",
    data() {
        return{
            showError: false
        };
    },
    props : {
        type:{
       type : String,
        default : "text"
        },
        placeholder:{
            type: String,
             default : "입력하세요",
        },
        modelValue:{
            type: String,
            required : true,
        },
        errorMsg:{
            type: String,
            default: "이 값은 필수입니다.",
        },
    },

    emits:["update:modelValue"],
    methods:{
        updateValue(event) {
            const value = event.target.value.trim()
            this.$emit("update:modelValue",value)
        },
        handlerBlur(){
            this.showError = true;
        },
    },

}
</script>

<style scoped>
.container{
    height: fit-content;
    widows: 300px;


}


.input-form{
    box-sizing:  border-box;
    width: 100px;
    padding: 10px;
    border-radius:  5px;

}
</style>