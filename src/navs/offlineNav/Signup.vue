<template>
  <div class="flex items-center justify-center w-screen">
    <main class="my-4 px-7 py-7  flex flex-col space-y-5 items-center justify-center border-2 border-silver-500 shadow-xl rounded-lg md:w-2/5  w-4/5">
      <h1 class="text-gray-800 font-bold flex flex-col text-lg items-center justify-centerm text-center">
        <font-awesome-icon icon="fa-solid fa-user-plus" class="text-4xl text-gray-500"/>
        Become a member!
      </h1>
      <form @submit.prevent="confirm1" class=" w-full flex space-y-8 flex-col">
        <div class="flex flex-col">
          <b class="text-gray-800">Email:</b>
          <input type="email" 
          class="border-solid indent-4 border-2 rounded-md drop-shadow-sm"
        v-model="registerForm.email"
        placeholder="Email">
        </div>
        
        <div class=" flex flex-col">
          <b class="text-gray-800">Password:</b>
          <div class=" flex flex-row border-solid indent-4 border-2 rounded-md drop-shadow-sm">
                <input class="w-full border-none indent-4"
            type="password"
            v-model="registerForm.password" 
            placeholder="Enter Password"
            id="password"
            >
            <font-awesome-icon icon="fa-solid fa-eye" @click="showPassword" class="p-1 text-gray-600" />
          </div>

          <div class=" mt-4 flex flex-row items-center justify-center"> 
            <Button label="Join us" type="submit" severity="secondary" raised
            class="h-7 cursor-pointer flex items-center justify-center transition-all w-4/5 border-red-500 border-4 md:hover:shadow-md md:hover:px-44 hover:shadow-lg hover:text-lg hover:w-11/12" />
          </div>
        </div>
      </form>
      <Toast />
      <ConfirmDialog ></ConfirmDialog>
      
      <!-- <Button @click="confirm1()" icon="pi pi-check" label="Confirm"
      class="bg-red-600"
      ></Button> -->

      <Button @click="googleSignIn" class="bg-bluegray-600 flex flex-row justify-evenly space-x-2 hover:bg-bluegray-400 border-bluegray-700">
          <img alt="logo" :src="google" class="w-5" />
          <span class="text-black font-medium hover:text-whiteSmoke">Sign up with your Gmail</span>
        </Button>
      <router-link to="/login" class="mx-auto text-gray-800 text-lg font-medium hover:text-blue-600"> Login</router-link>
    </main>
  </div>
</template>

<script>
import google from "../../webImg/google.png"
import { useStore } from 'vuex';
import { ref } from 'vue';
import {useConfirm} from 'primevue/useconfirm'
import {useToast} from 'primevue/usetoast'
import {getAuth, signInWithPopup, GoogleAuthProvider} from 'firebase/auth';
import router from '../../router';

export default{
  data () {
    return {
      google:google
    }
  },
  setup(){
    const confirm = useConfirm()

    const toast = useToast()

    const confirm1 = ()=>{
      confirm.require({
        message:"Proceed to create account",
        header:"confirmation",
        icon:'pi pi-exclamation-triangle',
            accept: () => {
            toast.add({ severity: 'info', summary: 'Confirmed', 
            detail: `Welcome to the family! A confirmation email will be sent to your email address`, life: 1500 })
            
            register()
          },
            reject: () => {
                toast.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
        }
      })
    }

    const registerForm = ref({})
    const store = useStore()

    const register = () => {
      
      store.dispatch('register', registerForm.value)
    }

    function showPassword(){
      var toggle = document.getElementById("password")
      if(toggle.type === "password"){
        toggle.type = "text"
      }else{
        toggle.type = "password"
      }
    }
    
    function googleSignIn() {
      const auth = getAuth()
      const provider = new GoogleAuthProvider()
      signInWithPopup(auth, provider)
  .then((result) => {

    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;

    const user = result.user;
    
    return router.push('/home')
  }).catch((error) => {

    const errorCode = error.code;
    const errorMessage = error.message;

    const email = error.customData.email;

    const credential = GoogleAuthProvider.credentialFromError(error);
  })
}

    return{
      registerForm,
      register,
      googleSignIn,
      showPassword,
      confirm,
      toast,
      confirm1
    }
  }
}
</script>

<style>

</style>
