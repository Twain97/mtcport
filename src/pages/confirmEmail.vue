<template>
  <div>
    <p>Email verification sent!
      <br>
      please check your email to confirm your email!
    </p>
    
      <Button label="Login" type="submit" severity="secondary" raised
        class="h-7 cursor-pointer flex items-center justify-center transition-all w-4/5 border-red-500 
        border-4 md:hover:shadow-md md:hover:px-44 hover:shadow-lg hover:text-lg hover:px-32">

        
      </Button>
    
  </div>
  
</template>

<script>
import {getAuth, sendEmailVerification } from "firebase/auth"
import router from '../router/index.js'
export default {
    methods: {
        sendVerification(){
            const auth = getAuth();
sendEmailVerification(auth.currentUser)
  .then(() => {
    // this.$toast.success(`Email verification sent!`,{
    //   duration:1500,
    //   position:"top"
    // })

    // ...
  });
        },
        
    },
    beforeMount(){
        this.sendVerification();
    },
    mounted () {
      setTimeout(() => {
      router.push('/login'),
      console.log('Directed to home!')
    }, 10000);
    }
    
}
</script>

<style>

</style>