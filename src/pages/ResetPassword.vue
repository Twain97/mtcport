<template>
  <main>
    <h1 class="text-lg font-bold text-center">Reset Password</h1>
    <form @submit.prevent="resetPassword">
      <input type="email" v-model="email" placeholder="Enter your email">
      <input type="submit" value="Reset Password">
    </form>

    <p>{{ email }}</p>
    <router-link class="text-purple-600" to="/login">Login</router-link>
    <router-link class="text-purple-600 ml-20" to="/signup">Sign up</router-link>
  </main>
</template>

<script>
import { ref } from 'vue';
import {getAuth, sendPasswordResetEmail} from 'firebase/auth'
export default {
  setup(){
    const email = ref()

    return{
      email
    }

  },
  methods:{
    resetPassword(){

      const auth = getAuth();
      sendPasswordResetEmail(auth, this.email)
      .then(() =>{
        console.log('Password reset Link sent to your Email.')
        alert('Password reset Link sent to your Email.')

        this.email=''
      }).catch((error) =>{
        const errorCode = error.code
        const errorMessage = error.message
        console.log(errorCode, errorMessage)
        alert(errorCode, errorMessage)
      })
    } 
  }
}
</script>

<style>

</style>