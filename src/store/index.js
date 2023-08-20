import {createStore} from 'vuex'
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut
    
} from 'firebase/auth'
import router from '../router'
import { auth } from '../firebase'


const store = createStore({
    state: {
        user : null
    },
    mutations: {
        SET_USER(state, user){
            state.user = user
        },
        CLEAR_USER(state){
            state.user = null
        }
    },
    actions: {
        async login({commit}, details){
            const {email, password} = details


            try{
                await signInWithEmailAndPassword(auth, email, password)
            }catch(error){
                switch(error.code){
                    case 'auth/user-not-found':
                    alert('User does not exist, please create an account')
                    router.push('/signup')
                    break;
                    case 'auth/wrong-password':
                        alert('wrong password')
                        break
                    default:
                        alert(error.code)
                        console.log(error.code)
                        break;
                }
                return
            }
            commit('SET_USER', auth.currentUser)
            router.push('/loading')
            
        },
        async register({commit}, details){
            const {email, password} = details

            try{
                await createUserWithEmailAndPassword(auth, email, password);
                console.log('account created successfully')

            }catch(error){
                switch (error.code) {
                    case 'auth/email-already-in-use':
                        alert('User already exist, please login')
                        router.push('/login')
                        break;
                    case 'auth/invalid-email':
                        alert('Email incorrect')
                        break;
                    case 'auth/operation-not-allowed':
                        alert('Operation not allowed')
                        break;
                    case 'auth/weak-password':
                        alert('Weak password')
                        break
                    default:
                        alert('something went wrong')
                        console.log(error.code)
                        break;
                }
                return
            }
            commit('SET_USER', auth.currentUser)
            router.push('/confirmEmail')
        },
        async logout({commit}){
            await signOut(auth)

            commit('CLEAR_USER')

            router.push('/login')
        },
        fetchUser({commit}){
            auth.onAuthStateChanged(async user =>{
                if (user === null){
                    commit('CLEAR_USER')
                }else{
                    commit('SET_USER', user)

                    if (router.isReady() && router.currentRoute.value.path === '/login'){
                        router.push('/home')
                    }
                }
            })
        }
    },
})

export default store;