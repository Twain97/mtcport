import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "primevue/resources/themes/lara-light-indigo/theme.css";    
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import primeVue from 'primeVue/config'
import Button from 'primevue/Button'
import Toast from 'primevue/toast'
import ToastService from 'primevue/toastservice'
import ConfirmationService from 'primevue/confirmationservice'
import ConfirmDialog from 'primevue/confirmdialog'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { 
    faUserSecret, faArrowRightToBracket, faPersonWalkingDashedLineArrowRight,
    faUserPlus, faRightFromBracket, faHome, faCopyright, faUser, faEye, faBars,
    faXmark
} from '@fortawesome/free-solid-svg-icons'
import './style/style.css'
import './style/theme.css'

library.add(
    faUserSecret, faArrowRightToBracket, faPersonWalkingDashedLineArrowRight,
    faUserPlus,faRightFromBracket,faHome, faCopyright,
    faUser,faEye,faBars, faXmark
    
)
const app = createApp(App)

app.use(router)
app.use(store)
app.use(primeVue)
app.use(ToastService)
app.use(ConfirmationService)
app.component('ConfirmDialog', ConfirmDialog)
app.component('Toast', Toast)
app.component('font-awesome-icon', FontAwesomeIcon, )
app.component('Button', Button )
app.mount('#app')

const coords = {x:0, y:0}
const circles = document.querySelectorAll(".circle")
const colors = [
     "#000000", 
    "#080706", 
     "#171613", 
     "#292720", 
     "#403d31", 
     "#5c5744", 
    "#7a745a", 
     "#99916f", 
     "#b5ac83", 
     "#cdc294", 
     "#ddd19f", 
     "#e3d7a3"
]

circles.forEach((circle, index)=>{
    circle.x = 0;
    circle.y = 0;

    circle.style.backgroundColor = colors[index % colors.length]
})
window.addEventListener('mousemove', (e)=>{
    coords.x = e.clientX;
    coords.y = e.clientY;

})

function animateCircles(){
    let x = coords.x
    let y = coords.y
    
    circles.forEach((circle, index)=> {
        circle.style.left = x-10 + "px"
        circle.style.top = y-10 + "px"

        circle.style.scale =(circles.length - index)/circles.length

        circle.x = x
        circle.y = y

        const nextCircle = circles[index + 1] || circles[0]
        x += (nextCircle.x - x) * 0.2
        y += (nextCircle.y - y) * 0.2
    });
    requestAnimationFrame(animateCircles)
}

    
animateCircles()