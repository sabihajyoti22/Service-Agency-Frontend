<template>
  <div>
    <div
      className="mb-5 text-primary text-3xl font-extrabold"
    >
      Give your <span class="text-navy">Review</span>
    </div>

    <form
      class="w-full md:w-1/2"
      @submit.prevent="giveReview"
    >
      <label>Full name</label>
      <input
        v-model="review.clientName"
        type="text"
        placeholder="Full name"
        class="w-full outline-none rounded p-1 mb-3 border focus:border-primary"
      >

      <label>Email</label>
      <input
        v-model="review.clientEmail"
        type="email"
        placeholder="Email"
        class="w-full outline-none rounded p-1 mb-3 border focus:border-primary"
      >

      <label>Service you received</label>
      <input
        v-model="review.serviceName"
        type="text"
        placeholder="Service you received"
        class="w-full outline-none rounded p-1 mb-3 border focus:border-primary"
      >

      <label>Service provider</label>
      <input
        v-model="review.serviceProvider"
        type="text"
        placeholder="Service provider"
        class="w-full outline-none rounded p-1 mb-3 border focus:border-primary"
      >

      <label>Comment</label>
      <textarea
        v-model="review.comment"
        placeholder="Type..."
        class="w-full h-16 resize-none outline-none rounded mb-5 border focus:border-primary"
      />

      <button
        type="submit"
        :disabled="disableButton"
        class="px-3 py-1 bg-primary disabled:bg-slate-600 text-white rounded"
      >
        Submit
      </button>
    </form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        review: {
          clientName: "",
          clientEmail: "",
          serviceName: "",
          serviceProvider: "",
          comment: "",
        }
      }
    },
    computed: {
      disableButton(){
        return !this.review.clientName || !this.review.clientEmail || !this.review.serviceName || !this.review.serviceProvider || !this.review.comment
      }
    },
    methods: {
      giveReview(){
        this.$axios.post('/reviews', this.review)
          .then((res) => {
            console.log(res)
          })
      }
    }  
  }
</script>