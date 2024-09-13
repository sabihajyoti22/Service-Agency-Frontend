<template>
  <div class="h-full">
    <div
      v-if="loading"
      class="h-full flex items-center"
    >
      <span class="loader" />
    </div>

    <div v-else>
      <div class="flex justify-between mb-5">
        <div
          className="text-primary text-3xl font-extrabold"
        >
          Available <span class="text-navy">Services</span>
        </div>

        <button
          v-if="getAuthUser?.role === 'admin'"
          class="px-3 py-1 bg-primary text-white rounded flex items-center gap-2"
          @click="addService"
        >
          <svg
            stroke="white"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 448 512"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          ><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" /></svg>
          <div>
            Add Service
          </div>
        </button>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
        <div
          v-for="(item, index) in services"
          id="service"
          :key="item.id"
        >
          <div class="rounded-md bg-white p-3 w-full h-full text-center flex flex-col relative">
            <div class="flex justify-center">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 1024 1024"
                height="90"
                width="90"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M704 446H320c-4.4 0-8 3.6-8 8v402c0 4.4 3.6 8 8 8h384c4.4 0 8-3.6 8-8V454c0-4.4-3.6-8-8-8zm-328 64h272v117H376V510zm272 290H376V683h272v117z" /><path d="M424 748a32 32 0 1 0 64 0 32 32 0 1 0-64 0zm0-178a32 32 0 1 0 64 0 32 32 0 1 0-64 0z" /><path d="M811.4 368.9C765.6 248 648.9 162 512.2 162S258.8 247.9 213 368.8C126.9 391.5 63.5 470.2 64 563.6 64.6 668 145.6 752.9 247.6 762c4.7.4 8.7-3.3 8.7-8v-60.4c0-4-3-7.4-7-7.9-27-3.4-52.5-15.2-72.1-34.5-24-23.5-37.2-55.1-37.2-88.6 0-28 9.1-54.4 26.2-76.4 16.7-21.4 40.2-36.9 66.1-43.7l37.9-10 13.9-36.7c8.6-22.8 20.6-44.2 35.7-63.5 14.9-19.2 32.6-36 52.4-50 41.1-28.9 89.5-44.2 140-44.2s98.9 15.3 140 44.3c19.9 14 37.5 30.8 52.4 50 15.1 19.3 27.1 40.7 35.7 63.5l13.8 36.6 37.8 10c54.2 14.4 92.1 63.7 92.1 120 0 33.6-13.2 65.1-37.2 88.6-19.5 19.2-44.9 31.1-71.9 34.5-4 .5-6.9 3.9-6.9 7.9V754c0 4.7 4.1 8.4 8.8 8 101.7-9.2 182.5-94 183.2-198.2.6-93.4-62.7-172.1-148.6-194.9z" />
              </svg>
            </div>

            <div class="text-navy text-xl font-bold mb-3">
              {{ item.serviceName }}
            </div>

            <div class="text-black/60 mb-4">
              {{ item.serviceDesc }}
            </div>

            <div class="flex justify-center gap-3 mt-auto">
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
            </div>

            <div
              v-if="getAuthUser?.role === 'admin'"
              class="absolute top-3 right-3 flex gap-1"
            >
              <!-- Delete -->
              <button
                class="p-1 border rounded hover:bg-background"
                @click="deleteService(item, index)"
              >
                <svg
                  stroke="#ef4444"
                  fill="#ef4444"
                  stroke-width="0"
                  viewBox="0 0 24 24"
                  height="20"
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                ><path
                  fill="none"
                  d="M0 0h24v24H0V0z"
                /><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5-1-1h-5l-1 1H5v2h14V4h-3.5z" /></svg>
              </button>

              <!-- Edit -->
              <button
                class="p-1 border rounded hover:bg-background"
                @click="editService(item, index)"
              >
                <svg
                  stroke="#3b82f6"
                  fill="#3b82f6"
                  stroke-width="0"
                  viewBox="0 0 1024 1024"
                  height="20"
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                ><path d="M880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32zm-622.3-84c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 0 0 0-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 0 0 9.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9z" /></svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <div
      v-if="openModal"
      class="overlay"
    >
      <div class="w-[450px] p-3 rounded-md bg-background">
        <div class="flex justify-between">
          <div class="text-primary text-xl font-semibold mb-5">
            {{ selectedIndex >= 0 ? 'Update a ' : 'Add new ' }} <span class="text-navy">Service</span>
          </div>

          <button @click="openModal = false">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 24 24"
              height="20"
              width="20"
              xmlns="http://www.w3.org/2000/svg"
            ><path
              fill="none"
              d="M0 0h24v24H0V0z"
            /><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" /></svg>
          </button>
        </div>

        <form
          class="w-full"
          @submit.prevent="modifyService"
        >
          <label>Service name</label>
          <input
            v-model="service.serviceName"
            type="text"
            placeholder="Service name"
            class="w-full outline-none rounded p-1 mb-3 border focus:border-navy"
          >

          <label>Service description</label>
          <textarea
            v-model="service.serviceDesc"
            placeholder="Type..."
            class="w-full h-16 resize-none outline-none rounded mb-5 border focus:border-navy"
          />

          <button
            type="submit"
            :disabled="disableButton"
            class="px-3 py-1 bg-primary disabled:bg-slate-600 text-white rounded"
          >
            {{ selectedIndex >= 0 ? 'Update' : 'Add' }}
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  import { useAuthStore } from '../store/module/auth';

  export default {
    data() {
      return {
        services: [],
        loading: true,
        service: {
          id: '',
          serviceName: "",
          serviceDesc: "",
        },
        selectedIndex: -1,
        openModal: false
      }
    },
    computed: {
      getAuthUser(){
        return useAuthStore().getProfile
      },
      disableButton(){
        return !this.service.serviceName || !this.service.serviceName
      }
    },
    created(){
      this.getServices()
    },
    methods:{
      getServices(){
        this.$axios.get("/services")
          .then((res) => {
            this.services = JSON.parse(JSON.stringify(res.data))
            this.loading = false
          })
      },
      modifyService(){
        if(this.service.id !== ''){
          console.log(this.service)
          this.$axios.patch(`/services/${this.service._id}`, this.service)
            .then((res) => {
              this.openModal = false
              this.services[this.selectedIndex] = JSON.parse(JSON.stringify(res.data))
              this.selectedIndex = -1
            })
        }else{
          this.$axios.post('/services', this.service)
            .then((res) => {
              this.services.push(JSON.parse(JSON.stringify(res.data)))
              this.openModal = false
            })
        }
      },
      addService(){
        this.service = {
          id: '',
          serviceName: "",
          serviceDesc: "",
        }
        this.openModal = true
      },
      editService(item, index){
        this.service = JSON.parse(JSON.stringify(item))
        this.selectedIndex = index
        this.openModal = true
      },
      deleteService(item, index){
        this.$axios.delete(`/services/${item._id}`)
          .then(() => {
            this.services.splice(index, 1)
          })
      }
    }
  }
</script>