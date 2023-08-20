<template>
  <div class="flex items-center justify-center w-screen">
        <!-- <div class="border mt-7 w-10/12 mx-auto min-h-min rounded-lg shadow-md bg-blue-400"></div> -->
        <div class="my-16 border w-10/12 mx-auto rounded-lg shadow-md bg-slate-50 md:w-5/12 pb-14">
            <div class="relative mx-auto overflow-visible ">
                <div class=" p-0 m-0 w-20 mx-auto hover:w-32 hover:cursor-pointer duration-500 cursor-pointer ">
                    <img :src=pic alt="" class=" -mt-10 rounded-full ">
                    <div class="rounded-full absolute -mt-4 ml-14
                    bg-green-500 w-4 h-4"></div>
                </div>
                
            </div>
            <div class="text-center space-y-4 mt-10">
                <b class="text-md uppercase font-medium  text-gray-800">
                    {{Uname}}
                </b>
                <p class="font-normal text-gray-800">{{Uemail}}</p>
                <p class="font-normal text-gray-800">User id: {{UserId}}</p>
                <p class="font-normal text-gray-800">Username: <b>{{Username}}</b></p>
                <div class="flex flex-row relative justify-center items-center space-x-1">
                    <div>
                        <p class="font-normal text-blue-800">Control Panel</p>
                    </div>
                    <b class="font-extrabold text-lg">.</b>
                    <div>
                        <p class="font-normal text-blue-800">Subscription</p>
                    </div>
                </div>
                <div class="flex flex-row relative justify-center items-center space-x-9">
                    <div class=" rounded-md shadow-md border p-3 hover:-mt-12 hover:bg-slate-200 duration-500 cursor-pointer">
                        <p class="font-normal text-gray-800">My Account</p>
                    </div>
                    <div class="rounded-md shadow-md border p-3 hover:-mt-12 hover:bg-slate-200 duration-500 cursor-pointer">
                        <p class="font-normal text-gray-800">Sign Out</p>
                    </div>
                </div>
            </div>
        </div>
        
        
    </div>
  
</template>

<script>
import { ref } from 'vue'
export default {
    setup(){
        const Uname = ref()
        const Uemail = ref()
        const Username = ref()
        const UserId = ref()
        const pic = ref()
        return{
            Uname,
            pic,
            Uemail,
            Username,
            UserId
        }
    },
    mounted () {
                const getApi = async()=>{
                    const res = await fetch("https://randomuser.me/api/?results=100")
                    const data = await res.json()
                    return data
                
                }

                getApi().then(data=>{
                    this.Uname= `${data.results[2].name.first } ${data.results[2].name.last}`
                    this.pic = data.results[2].picture.large
                    this.Uemail = data.results[2].email
                    this.Username = data.results[2].login.username
                    this.UserId = data.results[2].login.uuid
                    console.log(data.results[2])
                }).catch(err=>{
                    console.log(err)
                })
        }
    
}
</script>

<style>

</style>