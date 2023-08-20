<template>
    <div class="mx-auto mt-4 px-7 py-44 h-full flex flex-col space-y-5 items-center justify-center md:w-2/5  w-4/5">
        <i class=" pi pi-spin pi-spinner" style="font-size: 5rem"></i>
    </div>
</template>

<script>
import router from '../router'
export default {
    mounted () {
      setTimeout(() => {
      router.push('/home'),
      console.log('Directed to home!')
    }, 2500);
    }
}
</script>

<style>

</style>