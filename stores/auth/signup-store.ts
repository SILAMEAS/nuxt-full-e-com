import { defineStore } from "pinia";

export const useSignUpStore = defineStore('signup-store', () => {
  const registerInput = ref({
    name:'',
    email: "silam8422@gmail.com",
    password: "",
   otpCode:''
  });
  
    return { registerInput }
  })