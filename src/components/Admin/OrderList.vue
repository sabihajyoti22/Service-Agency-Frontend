<template>
  <div class="h-full">
    <div
      v-if="loading"
      class="h-full flex items-center"
    >
      <span class="loader" />
    </div>

    <div v-else>
      <div
        className="mb-5 text-primary text-3xl font-extrabold"
      >
        Received <span class="text-navy">Orders</span>
      </div>

      <table>
        <thead class="bg-white text-navy">
          <tr>
            <th>Name</th>
            <th>Email ID</th>
            <th>Service</th>
            <th>Project Details</th>
            <th>Price</th>
            <th>Date</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(item, index) in orders"
            :key="index"
            class="text-sm"
          >
            <td>{{ item.username }}</td>
            <td>{{ item.useremail }}</td>
            <td>{{ item.service }}</td>
            <td>{{ item.projectDesc }}</td>
            <td>{{ item.price }}</td>
            <td>{{ formatDate(new Date(item.createdOn)) }}</td>
            <td
              class="hover:cursor-pointer"
              @click="deleteOrder(item, index)"
            >
              <svg
                class="float-right"
                stroke="#ef4444"
                fill="#ef4444"
                stroke-width="0"
                version="1.2"
                baseProfile="tiny"
                viewBox="0 0 24 24"
                height="20"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
              ><path d="M18 6h-6c0-1.104-.896-2-2-2h-4c-1.654 0-3 1.346-3 3v10c0 1.654 1.346 3 3 3h12c1.654 0 3-1.346 3-3v-8c0-1.654-1.346-3-3-3zm-12 0h4c0 1.104.896 2 2 2h6c.552 0 1 .448 1 1h-14v-2c0-.552.448-1 1-1zm12 12h-12c-.552 0-1-.448-1-1v-7h14v7c0 .552-.448 1-1 1zM15 14h-6c-.553 0-1-.447-1-1s.447-1 1-1h6c.553 0 1 .447 1 1s-.447 1-1 1z" /></svg>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        orders: [],
        loading: true
      }
    },
    created(){
      this.getAllOrders()
    },
    methods: {
      getAllOrders(){
        this.$axios.get('orders')
          .then((res) => {
            this.orders = JSON.parse(JSON.stringify(res.data))
            this.loading = false
          })
      },
      formatDate(key) {
        const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
        return days[key.getDay()] + ", " + key.getDate() + " " + key.toLocaleString('default', { month: 'short' }) + " " + key.getFullYear()
      },
      deleteOrder(item, index){
        this.$axios.delete(`/orders/${item._id}`)
          .then(() => {
            this.orders.splice(index, 1)
          })
      }
    }
  }
</script>
<style scoped>
  tr{
    height: 32px;
  }
  th{
      font-weight: 500;
      text-align: start;
      padding-left: 16px; 
      padding-top: 8px;
      padding-bottom: 8px;
  }
  th:nth-child(1) {
      padding-left: 16px;
      border-top-left-radius: 4px;
  }
  th:nth-last-child(1){
      padding-left: 0px;
      padding-right: 16px;
      border-top-right-radius: 4px;
  }
  td {
      padding-left: 16px; 
      padding-top: 8px;
      padding-bottom: 8px;
  }
  td:nth-child(1) {
      padding-left: 16px;
  }
  td:nth-last-child(1){
      padding-left: 0px;
      padding-right: 16px;
  }
  tr:nth-last-child(1){
      padding-left: 0px;
      padding-right: 16px;
      
  }
</style>