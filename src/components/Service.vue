<template>
  <div class="default-layout relative">
    <div
      id="serviceScroll"
      class="flex gap-2 overflow-x-scroll pb-2 scroll-smooth"
    >
      <div
        v-for="item in services"
        id="service"
        :key="item.id"
        class="w-full md:w-[290px] h-64 shrink-0"
      >
        <div class="rounded-md bg-white p-3 w-full h-full text-center flex flex-col">
          <div class="text-navy text-xl font-bold mb-3">
            {{ item.serviceName }}
          </div>
          <div class="text-black/60 mb-4">
            {{ item.serviceDesc }}
          </div>
          <router-link
            to="/user/order"
            class="flex justify-center gap-3 mt-auto"
          >
            <div class="text-xs text-primary">
              Click here to order
            </div>
            <svg
              stroke="#3b82f6"
              fill="#3b82f6"
              stroke-width="0"
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            ><path
              fill="none"
              d="M0 0h24v24H0z"
            /><path d="M15.5 5H11l5 7-5 7h4.5l5-7z" /><path d="M8.5 5H4l5 7-5 7h4.5l5-7z" /></svg>
          </router-link>
        </div>
      </div>

      <div
        v-if="count"
        class="cursor-pointer absolute top-1/2 -left-2 w-auto mt-[-22px] py-2 px-4 text-navy font-bold text-lg rounded-full border bg-white shadow-md"
        @click="sildePrev"
      >
        &#10094;
      </div>
      <div
        v-if="count !== (services.length - 4) && services.length >= 4"
        class="cursor-pointer absolute top-1/2 -right-2 w-auto mt-[-22px] py-2 px-4 text-navy font-bold text-lg rounded-full border bg-white shadow-md"
        @click="slideNext"
      >
        &#10095;
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        services: [],
        scroll: null,
        count: 0
      }
    },
    created(){
      this.$axios.get("/services")
        .then((res) => {
          this.services = JSON.parse(JSON.stringify(res.data))
        })
    },
    mounted(){
      this.scroll = document.getElementById("serviceScroll")
    },
    methods:{
      slideNext(){
        this.scroll.scrollLeft += 290
        this.count++
      },
      sildePrev(){
        this.scroll.scrollLeft -= 290
        this.count--
      }
    }
  }
</script>