<template>
  <main class="onlineNav">
    <nav>
        <!-- <p>Youre log in as {{ userEmail }}</p> -->
        <router-link to="home">Home</router-link>
    </nav>
  </main>
</template>

<script>
import { getAuth, onAuthStateChanged } from '@firebase/auth'

export default {
  data(){
    return{
      userEmail : ''
    }


  },

  methods: {
    getEmail(){
      const auth = getAuth()
      onAuthStateChanged(auth, (user)=>{
        if(user){
          this.userEmail = user.email
        }else{
          alert("You're logging out")
        }
      })
  }
  
    },
    mounted () {
        this.getEmail()
      }
}
</script>

<style>

</style>