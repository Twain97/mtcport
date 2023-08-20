<template>
  <div class="flex flex-col items-center justify-center w-screen">
    <main class="my-16 flex flex-row-reverse">
      <h1>Welcome, this is home</h1>
      
      <img :src="img1" alt="" class="w-32">
    </main>
  </div>
</template>

<script>
import {auth} from '../firebase'
import img1 from '@/webImg/img1.png'
export default {
   data () {
    return {
      img1 : img1
    }
   }, 
  //  created () {
  //   this.greet();
  //  },
  //  methods: {
    
  //   greet(){
  //     this.$toast.success(`Welcome`, 
  //     {
  //       position:"top-right",
  //       duration:1500,
  //       max:1
  //     })
  //   }
  //  }
   
}
</script>

<style>

</style>