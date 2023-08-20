<template>
  <main class=" h-full">
    <h1>This is Landing Page</h1>
    <carousel class="" :items-to-show="0.7" :autoplay="2500" :wrap-around="true" >
      <slide class="h-1/4" v-for="slide in images" :key="slide">
        <img class="h-96  w-10/12 md:h-96 md:w-2/4 lg:w-5/12 lg:h-96"  
        :src="slide" alt="">
      </slide>

      <template #addons>
        <navigation />
        <pagination />
      </template>
  </carousel>

  </main>
</template>
<script>
import img1 from '../webImg/img1.png'
import img2 from '../webImg/img2.png'
import img3 from '../webImg/img3.png'
import img4 from '../webImg/img4.png'
import img5 from '../webImg/img5.png'
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

export default {
  name: 'App',
  data () {
    return {
      images:{
        img1:img1,
        img2:img2,
        img3:img3,
        img4:img4,
        img5:img5
      }
    }
  },
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
}

</script>
