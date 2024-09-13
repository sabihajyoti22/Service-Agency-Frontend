<template>
  <div class="bg-navy py-5">
    <div class="default-layout">
      <div
        id="work"
        class="text-center text-white pt-5 text-3xl font-extrabold mb-3"
      >
        Here are Some of <span class="text-primary">Our Work</span>
      </div>

      <div class="relative mb-3">
        <div
          v-for="(image, index) in images"
          :key="index"
          :class="selectedIndex === index ? 'block opacity-100' : 'hidden opacity-40'"
          class="w-full fade"
        >
          <img
            :src="image"
            :alt="index"
            class="w-full max-h-[450px]"
          >
        </div>

        <div
          class="cursor-pointer absolute top-1/2 w-auto mt-[-22px] p-4 text-navy font-bold text-lg transition"
          @click="sildePrev"
        >
          &#10094;
        </div>
        <div
          class="cursor-pointer absolute top-1/2 right-0 w-auto mt-[-22px] p-4 text-navy font-bold text-lg transition"
          @click="slideNext"
        >
          &#10095;
        </div>
      </div>

      <div class="flex justify-center gap-2">
        <div
          v-for="(item, index) in images"
          :key="index"
          class="w-10 h-1 rounded-full transition-colors duration-300"
          :class="selectedIndex === index ? 'bg-[#bbb]' : 'bg-[#717171]'"
        />
      </div>
    </div>
  </div>  
</template>

<script>
  export default {
    data() {
      return {
        selectedIndex: 0,
        images: ['/assets/images/project1.png', '/assets/images/project2.jpg', '/assets/images/project3.jpg']
      }
    },
    mounted(){
      this.sildeShow()
    },
    methods: {
      sildeShow(){
        setTimeout(() => {
          this.sildeShow()
          if(this.selectedIndex === (this.images.length - 1)){
            this.selectedIndex = 0
          }else{
            this.selectedIndex++
          }
        }, 8000)
      },
      slideNext(){
        if(this.selectedIndex < (this.images.length - 1)){
          this.selectedIndex++
        }
      },
      sildePrev(){
        if(this.selectedIndex > 0){
          this.selectedIndex--
        }
      }
    }
  }
</script>

<style scoped>
.fade {
  animation-name: fade;
  animation-duration: 1.5s;
}

@keyframes fade {
  from {opacity: .4}
  to {opacity: 1}
}
</style>