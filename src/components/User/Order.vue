<template>
  <div>
    <div
      className="mb-5 text-primary text-3xl font-extrabold"
    >
      Place an <span class="text-navy">Order</span>
    </div>

    <form
      class="w-full md:w-1/2"
      @submit.prevent="placeOrder"
    >
      <label>Full name</label>
      <input
        v-model="order.username"
        type="text"
        placeholder="Full name"
        class="w-full outline-none rounded p-1 mb-3 border focus:border-primary"
      >

      <label>Email</label>
      <input
        v-model="order.useremail"
        type="email"
        placeholder="Email"
        class="w-full outline-none rounded p-1 mb-3 border focus:border-primary"
      >

      <label>Service</label>
      <input
        v-model="order.service"
        type="text"
        placeholder="Service"
        class="w-full outline-none rounded p-1 mb-3 border focus:border-primary"
      >

      <label>Project details</label>
      <textarea
        v-model="order.projectDesc"
        placeholder="Type..."
        class="w-full h-16 resize-none outline-none rounded"
      />

      <label>Offered price</label>
      <input
        v-model="order.price"
        type="number"
        placeholder="Offered price"
        class="w-full outline-none rounded p-1 mb-5 border focus:border-primary"
      >

      <button
        type="submit"
        :disabled="disableButton"
        class="px-3 py-1 bg-primary disabled:bg-slate-600 text-white rounded"
      >
        Order
      </button>
    </form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        order: {
          username: "",
          useremail: "",
          service: '',
          projectDesc: "",
          price: "",
        }
      }
    },
    computed: {
      disableButton(){
        return !this.order.username || !this.order.useremail || !this.order.service || !this.order.projectDesc || !this.order.price
      }
    },
    methods: {
      placeOrder(){
        this.$axios.post('/orders', this.order)
          .then((res) => {
            this.order = {
              username: "",
              useremail: "",
              service: '',
              projectDesc: "",
              price: "",
            }
          })
      }
    }
  }
</script>