<template>
  <div class="flex items-center justify-center w-screen">
    <main class="my-4 px-7 py-7 flex flex-col space-y-5 items-center justify-center border-2 border-silver-500 shadow-xl rounded-lg md:w-2/5  w-4/5">
      <h1 class=" text-gray-800 font-bold flex flex-col text-lg items-center justify-centerm text-center">
        <font-awesome-icon icon="fa-solid fa-user" class="text-4xl text-gray-500"/>
        Log In
      </h1>
      <form @submit.prevent="login" class=" w-full flex space-y-8 flex-col">
        <div class="flex flex-col ">
          <b class="text-gray-800">Email</b>
          <input type="email" 
          class="border-solid indent-4 border-2 rounded-md drop-shadow-sm text-base"
        v-model="loginForm.email" 
        placeholder="Email address">
        </div>
        <div class="flex flex-col ">
          <b class="text-gray-800">Password</b>
          <div class=" flex flex-row border-solid indent-4 border-2 rounded-md drop-shadow-sm">
            <input class="w-full border-none indent-4"
              type="password"
              v-model="loginForm.password" 
              placeholder="Enter Password"
              id="password">
        <font-awesome-icon icon="fa-solid fa-eye" @click="showPassword" class="p-1 text-gray-500" />
          </div>
          
        
        </div>
      <div class=" flex flex-row items-center justify-center"> 
          <Button label="Login" type="submit" severity="secondary" raised
          class="h-7 cursor-pointer flex items-center justify-center transition-all w-4/5 border-red-500 border-4 md:hover:shadow-md md:hover:px-44 hover:shadow-lg hover:text-lg hover:px-32" />
      </div>
      </form>
      
      <div class=" w-full flex space-y-2 flex-col">
        <Button @click="googleSignIn" class="bg-bluegray-600 flex flex-row justify-evenly hover:bg-bluegray-400  border-bluegray-700 hover:text-whiteSmoke">
          <img alt="logo" :src="google" class="w-5" />
          <span class="text-black font-medium align-middle">Sign in with your Gmail</span>
        </Button>
          <router-link to="/signup" class="mx-auto text-gray-800 text-lg font-medium hover:text-blue-600"> Join us</router-link>
          <router-link to="/resetPassword" class="mx-auto text-gray-800 text-lg font-medium hover:text-blue-600"> Forgot Password?</router-link>
      </div>

    </main>
  </div>
</template>

<script>
import google from '../../webImg/google.png'
import {useStore} from 'vuex'
import {ref} from 'vue'
import {getAuth, 
  signInWithPopup, GoogleAuthProvider,
  EmailAuthProvider
} from 'firebase/auth'

export default{
  data(){
    return{
      google:google
    }
  },
  setup(){
    const loginForm = ref({})
    const store = useStore()
    const value = ref({});

    const login = () =>{
      store.dispatch('login', loginForm.value)
      const credential = new EmailAuthProvider
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
    console.log(credential)
   

  }).catch((error) => {

    const errorCode = error.code;
    const errorMessage = error.message;

    const email = error.customData.email;

    const credential = GoogleAuthProvider.credentialFromError(error);
  })
}

    return{
      loginForm,
      login,
      googleSignIn,
      showPassword
    }
  }
}
</script>