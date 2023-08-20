import { createRouter, createWebHistory } from 'vue-router'
import loading from '../pages/loading.vue'
import Signup from '../navs/offlineNav/Signup.vue'
import {auth} from '../firebase'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'land',
      component:()=> import('../pages/LandingPage.vue')
    },
    {
       path: '/home',
       name:'home',
       meta:{ requiresAuth : true },
       component:()=> import('../pages/Home.vue')
    },
    {
      path: '/randomUser',
      name:'randomUser',
      meta:{ requiresAuth : true },
      component:()=> import('../pages/randomUser.vue')
   },
    {
      path: '/login',
      name: 'login',
      component: () => import('../navs/offlineNav/Login.vue')
    },
    {
      path:'/loading',
      name:'loading',
      component:loading
    },
    {
      path:'/resetPassword',
      name:'resetPassword',
      component:()=>import('../pages/ResetPassword.vue')
    },
    {
      path: '/signup',
      name: 'signup',
      component:Signup
    },
    {
      path:'/confirmEmail',
      name:'confirmEmail',
      meta:{ requiresAuth : true },
      component: () =>import('../pages/confirmEmail.vue')
    }
  ]
})

  auth.onAuthStateChanged((user)=>{
    if(!user){
      return router.push('/')
     }
    

    router.beforeEach(async(to, from)=>{
      if(to.path == '/login' && auth.currentUser){
        return router.push(router.currentRoute)
      }
      // if(to.path == '/' && auth.currentUser){
      //   return router.push(router.currentRoute)
      // }
      // if(to.path == 'home' && auth.currentUser){
      //   return router.push(router.currentRoute)
      // }
      
    })
  })


  

export default router
