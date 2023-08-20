<template>
  <div >
    <div class="h-4/5">

                                    <!-- Header section -->
        <header class="p-3 overflow-hidden ">
          <nav class="w-full py-1">
                                     <!-- If user is offline, Show this navigation -->
            <div class=" flex justify-between overflow-hidden w-11/12 mx-auto"
            v-if="!$store.state.user">
            
            <img alt="Vue logo" class="w-8 m-1 drop-shadow-md" src="@/assets/logo.svg" width="125" height="125" />

                               <!-- small screen navigation section when user is offline -->
            <div  id="navShow" @click="navShow" class=" md:hidden lg:hidden  xl:hidden hover:text-xl transition-all duration-300 text-gray-800 hover:drop-shadow-md hover:cursor-pointer">
              <font-awesome-icon :icon="['fas', 'bars']" />
            </div>
            
            <div class="z-40 absolute -right-56 transition-all duration-500 flex-col items-center w-32 bg-opacity-75 bg-blue-500 text-white h-1/2 
            md:hidden lg:hidden xl:hidden " id="sideNav"> 

            <div class="border border-black" @click="closeNav">
              <font-awesome-icon :icon="['fas', 'xmark']" class="text-2xl" />
            </div>

              <div class="border border-red-500">
                <div>
                <RouterLink to="/login" class="hover:text-lg hover:drop-shadow-md transition-all 
                duration-300 font-medium  text-gray-800" data-cursor-text="Log in">    
                  <font-awesome-icon icon="fa-solid fa-person-walking-dashed-line-arrow-right " class="font-medium  text-gray-500" />            
                </RouterLink>
              </div>
              <div>
                <RouterLink to="/signup" class="hover:text-lg hover:drop-shadow-md transition-all duration-300 font-medium" >
                  <font-awesome-icon icon="fa-solid fa-user-plus" class=" w-4  text-gray-500" />
                  Join us
                </RouterLink>
              </div>
              <div>
                <RouterLink to="/login" class="hover:text-lg hover:drop-shadow-md transition-all 
                duration-300 font-medium  text-gray-800" data-cursor-text="Log in">    
                  <font-awesome-icon icon="fa-solid fa-person-walking-dashed-line-arrow-right " class="font-medium  text-gray-500" />            
                </RouterLink>
              </div>
              <div>
                <RouterLink to="/signup" class="hover:text-lg hover:drop-shadow-md transition-all duration-300 font-medium" >
                  <font-awesome-icon icon="fa-solid fa-user-plus" class=" w-4  text-gray-500" />
                  Join us
                </RouterLink>
              </div>
              <div>
                <RouterLink to="/login" class="hover:text-lg hover:drop-shadow-md transition-all 
                duration-300 font-medium  text-gray-800" data-cursor-text="Log in">    
                  <font-awesome-icon icon="fa-solid fa-person-walking-dashed-line-arrow-right " class="font-medium  text-gray-500" />            
                </RouterLink>
              </div>
              <div>
                <RouterLink to="/signup" class="hover:text-lg hover:drop-shadow-md transition-all duration-300 font-medium" >
                  <font-awesome-icon icon="fa-solid fa-user-plus" class=" w-4  text-gray-500" />
                  Join us
                </RouterLink>
              </div>
              </div>
              
            </div>
                                                        <!-- end -->

            <div class="hidden flex-row space-x-3 md:flex lg:flex  xl:flex ">
              <RouterLink to="/login" class="hover:text-lg hover:drop-shadow-md transition-all 
              duration-300 font-medium  text-gray-800" data-cursor-text="Log in">    
                <font-awesome-icon icon="fa-solid fa-person-walking-dashed-line-arrow-right " class="font-medium  text-gray-500" />            
                Log</RouterLink>
            <RouterLink to="/signup" class="hover:text-lg hover:drop-shadow-md transition-all duration-300 font-medium" >
              <font-awesome-icon icon="fa-solid fa-user-plus" class=" w-4  text-gray-500" />
              Join us</RouterLink>
            </div>
            </div>
                                                   <!-- end -->

                                        <!-- if user is online, show this navigation -->
            <div  class=" flex justify-between overflow-hidden w-11/12  mx-auto"
            v-if="$store.state.user">
            <router-link to="/home">
              <img alt="Vue logo" class="w-8 m-1 drop-shadow-md" src="@/assets/logo.svg" />
            </router-link>
            
                                  <!-- small screen navigation section if user is online -->
            <div class="z-40 absolute -right-56 transition-all duration-500 flex-col items-center w-32 bg-opacity-75 bg-blue-500 text-white h-1/2 
            md:hidden lg:hidden xl:hidden " id="sideNav"> 

            <div class="border border-black" @click="closeNav">
              <font-awesome-icon :icon="['fas', 'xmark']" class="text-2xl" />
            </div>

            <div class="border border-red-500">
              <div>
                <router-link to="/home" class="cursor-pointer hover:text-lg hover:drop-shadow-md transition-all duration-300 text-gray-800" > 
                <font-awesome-icon icon="  fa-solid fa-home" class="w-4 text-gray-500" />
                Home
              </router-link>
              </div>
              <div>
                <router-link to="/randomUser" class="cursor-pointer hover:text-lg hover:drop-shadow-md transition-all duration-300 text-gray-800" > 
                <font-awesome-icon icon="fa-solid fa-user" class="w-4 text-gray-500"/>
                User
              </router-link>
              </div>
              <div>
                <p @click="logout" class=" text-gray-800 cursor-pointer hover:text-lg hover:drop-shadow-md transition-all duration-300" > 
                <font-awesome-icon icon=" fa-solid fa-right-from-bracket" class="w-4 text-gray-500" />
              Logout</p>
              </div>
            </div>
            
            </div>
            <div  id="navShow" @click="navShow" class=" md:hidden lg:hidden  xl:hidden hover:text-xl transition-all duration-300 text-gray-800 hover:drop-shadow-md hover:cursor-pointer">
              <font-awesome-icon :icon="['fas', 'bars']" />
            </div>
                                                    <!-- end -->

            <div class="hidden flex-row space-x-3 md:flex lg:flex xl:flex">
              <router-link to="/home" class="cursor-pointer hover:text-lg hover:drop-shadow-md transition-all duration-300 text-gray-800" > 
                <font-awesome-icon icon="  fa-solid fa-home" class="w-4 text-gray-500" />
                Home
              </router-link>
              <router-link to="/randomUser" class="cursor-pointer hover:text-lg hover:drop-shadow-md transition-all duration-300 text-gray-800" > 
                <font-awesome-icon icon="fa-solid fa-user" class="w-4 text-gray-500"/>
                User
              </router-link>
            
              <p @click="logout" class=" text-gray-800 cursor-pointer hover:text-lg hover:drop-shadow-md transition-all duration-300" > 
                <font-awesome-icon icon=" fa-solid fa-right-from-bracket" class="w-4 text-gray-500" />
              Logout</p>
            </div>
            </div>
                                                          <!-- end -->
          </nav>
      </header>
                                                          <!-- end -->

                                                    <!-- Body section -->
      <Toast />
      <RouterView />
                                                        <!-- end -->
    </div>


                                               <!-- footer section -->
  <footer class="py-8 flex flex-col items-center">
    <div class="flex flex-col pb-3 items-center justify-center space-y-2">
      <span v-if="$store.state.user" class="text-gray-800 hover:text-blue-600">
        <router-link to="/home" class="font-medium text-gray-800 hover:text-blue-600">Home</router-link>
      </span>
      <router-link to="#" class="mx-auto text-lg font-medium  text-gray-800 hover:text-blue-600">About</router-link>
      <router-link to="#" class="mx-auto text-lg font-medium  text-gray-800 hover:text-blue-600">Contact</router-link>  
      <p class="mx-auto text-lg font-medium  text-gray-800">
        <font-awesome-icon icon="fa-solid fa-copyright" class="text-zinc-200 text-lg"  />
        All rights reserved!
      </p>
    </div>
    <div class="flex flex-row overflow-hidden w-11/12 justify-center px-12">
      <div class=" flex flex-col space-y-3">
        <p class="mx-auto font-medium  text-gray-800 ">

          08125212907
        </p>
        <p class="mx-auto text-lg font-medium  text-gray-800 ">

          @MTC
        </p>
      </div>
      <div class="flex flex-col justify-center items-center space-y-3">
        <p class="mx-auto text-lg font-medium  text-gray-800 ">

          @sammytwain97
        </p>
        <p class="mx-auto text-lg font-medium text-center justify-center items-center text-gray-800 ">

          sammytwain97@gmail.com
        </p>
      </div>
    </div>
    
  </footer>
  </div>
</template>

<script>
import { onBeforeMount, onMounted, ref } from 'vue';
import { useStore } from 'vuex';
import {browserSessionPersistence, getAuth,
onAuthStateChanged, setPersistence
} from 'firebase/auth'
import navs from './navs/onlineNav/navs.vue';

export default{
  components: {
    navs
  },
  setup(){
      const store = useStore()
      const auth = getAuth()
      var usrnam = ref()

      const logout = () =>{
        store.dispatch('logout')
      }

      function navShow(){
        const sideNav = document.getElementById('sideNav')
        const nav = document.getElementById('navShow')
        if(sideNav.style.right == "-14rem"){
          sideNav.style.right= '0rem'
          nav.style.transition = 'all'
          nav.style.display = 'none'
          
        }else{
          sideNav.style.right = '-14rem'
          nav.style.transition = "all"
          nav.style.display = 'block'
        }
      }

      function closeNav(){
        const sideNav = document.getElementById('sideNav')
        const nav = document.getElementById('navShow')

        if(sideNav.style.right == "0rem"){
          sideNav.style.right = '-14rem'
          nav.style.display = 'block'
          
        }else{
          sideNav.style.right = '0rem'
          nav.style.display = 'none'
        }

      }
      onMounted(()=>{
        onAuthStateChanged(auth,(user)=>{
          if(user){
            // const userName = auth.currentUser.email.split('@', String(1))
            user.getIdToken().then((token)=>{
              document.cookie = `session= ${token}; max-age= ${60*60*24}`
              console.log(user.email.split('@', String(1)))
              usrnam = user.email.split('@', String(1))
              console.log(user.refreshToken)

    // Convert user email to string without brackets
            //   const getUser = getAuth().currentUser.email
            //  const userSplt = getUser.split("@", String(1))
            //  const stringUser = String(userSplt)
            //  this.name = stringUser
            })
            setPersistence(auth, browserSessionPersistence)
          }
        })
      })
      
    onBeforeMount(()=>{
      store.dispatch('fetchUser')
    })
      return{
        logout,
        usrnam,
        navShow,
        closeNav
      }





  }
}
</script>