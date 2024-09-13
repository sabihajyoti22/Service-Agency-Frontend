<template>
  <div id="home">
    <div class="w-full h-screen bg-home-image bg-no-repeat bg-cover flex justify-center items-center text-white">
      <div class="text-center font-bold">
        <div className="opacity-75 text-2xl">
          Let's Grow Your
        </div>
        <div className="text-2xl mb-5">
          Barnd To Next Level
        </div>
        <button class="w-fit px-3 py-2 rounded-full text-blue-600 bg-white">
          Order More
        </button>
      </div>
    </div>

    <div>
      <Service
        class="-mt-32 mb-5"
      />
      <AboutUs />
      <Work />
      <Feedback />
      <Contact />
    </div>
  </div>
</template>

<script>
  import Service from '../components/Service.vue'
  import AboutUs from '../components/AboutUs.vue'
  import Work from '../components/Work.vue'
  import Feedback from '../components/Feedback.vue'
  import Contact from "../components/Contact.vue"

  export default {
    components: {
      Service,
      AboutUs,
      Work,
      Feedback,
      Contact
    }
  }
</script>