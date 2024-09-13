<template>
  <div class="fixed w-full bg-navy/30 backdrop-blur-[5px] py-3 z-50">
    <div class="default-layout">
      <div class="flex justify-between">
        <div class="text-white">
          Service Agency
        </div>

        <div class="flex gap-3">
          <div class="flex items-center gap-2">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="#ffffff"
              >
                <path d="M18.48 22.926l-1.193.658c-6.979 3.621-19.082-17.494-12.279-21.484l1.145-.637 3.714 6.467-1.139.632c-2.067 1.245 2.76 9.707 4.879 8.545l1.162-.642 3.711 6.461zm-9.808-22.926l-1.68.975 3.714 6.466 1.681-.975-3.715-6.466zm8.613 14.997l-1.68.975 3.714 6.467 1.681-.975-3.715-6.467z" />
              </svg>
            </div>

            <div class="hidden md:block">
              <div class="text-white text-sm">
                +456315477
              </div>
              <div class="text-white/20 text-xs">
                24/7 open
              </div>
            </div>
          </div>

          <div class="flex items-center gap-2">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="#ffffff"
              ><path d="M21.949 11c-.469-4.725-4.224-8.48-8.949-8.95v-2.05h-2v2.05c-4.725.47-8.48 4.225-8.949 8.95h-2.051v2h2.051c.469 4.725 4.224 8.48 8.949 8.95v2.05h2v-2.05c4.725-.469 8.48-4.225 8.949-8.95h2.051v-2h-2.051zm-6.091 2c-.364 1.399-1.459 2.494-2.858 2.858v-1.858h-2v1.858c-1.399-.364-2.494-1.459-2.858-2.858h1.858v-2h-1.858c.364-1.399 1.459-2.494 2.858-2.858v1.858h2v-1.858c1.399.364 2.494 1.459 2.858 2.858h-1.858v2h1.858zm-4.858-8.931v2.021c-2.511.422-4.488 2.399-4.91 4.91h-2.021c.453-3.611 3.32-6.477 6.931-6.931zm-6.931 8.931h2.021c.422 2.511 2.399 4.488 4.91 4.91v2.021c-3.611-.454-6.478-3.32-6.931-6.931zm8.931 6.931v-2.021c2.511-.422 4.488-2.399 4.91-4.91h2.021c-.453 3.611-3.32 6.477-6.931 6.931zm4.91-8.931c-.422-2.511-2.399-4.488-4.91-4.91v-2.021c3.611.454 6.478 3.319 6.931 6.931h-2.021z" /></svg>
            </div>

            <div class="hidden md:block">
              <div class="text-white text-sm">
                Central
              </div>
              <div class="text-white/20 text-xs">
                Dhaka, Bangladesh
              </div>
            </div>
          </div>

          <button
            class="border-2 border-white rounded-md block md:hidden"
            @click="toggle = !toggle"
          >
            <svg
              stroke="#ffffff"
              fill="#ffffff"
              stroke-width="0"
              viewBox="0 0 512 512"
              height="24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#ffffff"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="32"
                d="M96 256h320M96 176h320M96 336h320"
              /></svg>
          </button>
        </div>
      </div>

      <div
        class="w-full h-[90vh] md:h-fit text-white flex flex-col md:flex-row justify-between fixed md:static transition md:translate-x-0 duration-300 top-14 bg-navy/30 backdrop-blur-[5px] md:bg-white/0 md:backdrop-blur-none z-50 md:z-0"
        :class="toggle ? 'translate-x-0' : 'translate-x-full'"
      >
        <div class="flex flex-col md:flex-row gap-5 md:gap-2 grow">
          <routerLink
            to="/"
            class="w-[95%] md:w-fit px-3 border-r-2 border-white transition duration-300 hover:bg-[#191970cc] hover:scale-110 hover:cursor-pointer"
            @click="toggle = false"
          >
            Home
          </routerLink>
          <a
            href="/#service"
            class="w-[95%] md:w-fit px-3 border-r-2 border-white transition duration-300 hover:bg-[#191970cc] hover:scale-110 hover:cursor-pointer"
            @click="toggle = false"
          >Our Services</a>
          <a
            href="/#about"
            class="w-[95%] md:w-fit px-3 border-r-2 border-white transition duration-300 hover:bg-[#191970cc] hover:scale-110 hover:cursor-pointer"
            @click="toggle = false"
          >About Us</a>
          <a
            href="/#work"
            class="w-[95%] md:w-fit px-3 border-r-2 border-white transition duration-300 hover:bg-[#191970cc] hover:scale-110 hover:cursor-pointer"
            @click="toggle = false"
          >Our Work</a>
          <a
            href="/#feedback"
            class="w-[95%] md:w-fit px-3 border-r-2 border-white transition duration-300 hover:bg-[#191970cc] hover:scale-110 hover:cursor-pointer"
            @click="toggle = false"
          >Client Feedback</a>
          <a
            href="/#contact"
            class="w-[95%] md:w-fit px-3 border-r-2 border-white transition duration-300 hover:bg-[#191970cc] hover:scale-110 hover:cursor-pointer"
            @click="toggle = false"
          >Contact</a>

          <router-link
            v-if="getAuthUser"
            :to="getAuthUser?.role === 'admin' ? '/admin/AserviceList' : '/user/serviceList'"
            class="w-[95%] md:w-fit px-3 border-r-2 border-white transition duration-300 hover:bg-[#191970cc] hover:scale-110 hover:cursor-pointer"
          >
            {{ getAuthUser?.role === 'admin' ? 'Admin Panel' : 'User Panel' }}
          </router-link>
        </div>

        <!-- <div :ref="googlebuttonref" /> -->
        <div class="px-3 py-4 md:py-0">
          <RouterLink
            v-if="!getAuthUser"
            :to="{name: 'auth'}"
            @click="toggle = false"
          >
            Login
          </RouterLink>

          <div
            v-else
            class="flex items-center gap-3"
          >
            <div>{{ getAuthUser.username }}</div>
            <button @click="logout">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 512 512"
                height="24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              ><path d="M192 277.4h189.7l-43.6 44.7L368 352l96-96-96-96-31 29.9 44.7 44.7H192v42.8z" /><path d="M255.7 421.3c-44.1 0-85.5-17.2-116.7-48.4-31.2-31.2-48.3-72.7-48.3-116.9 0-44.1 17.2-85.7 48.3-116.9 31.2-31.2 72.6-48.4 116.7-48.4 44 0 85.3 17.1 116.5 48.2l30.3-30.3c-8.5-8.4-17.8-16.2-27.7-23.2C339.7 61 298.6 48 255.7 48 141.2 48 48 141.3 48 256s93.2 208 207.7 208c42.9 0 84-13 119-37.5 10-7 19.2-14.7 27.7-23.2l-30.2-30.2c-31.1 31.1-72.5 48.2-116.5 48.2zM448.004 256.847l-.849-.848.849-.849.848.849z" /></svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { ref } from 'vue';
  import { useAuthStore } from '../store/module/auth.js';
  import { useScript } from '../utlis/googleAuth.js';
  import { jwtDecode } from 'jwt-decode';

  const onGoogleSignIn = (user) => {
    let userCred = user.credential;
    let payload = jwtDecode(userCred);
    window.localStorage.setItem("user", JSON.stringify(payload))
    window.location.reload()
  };

  const googlebuttonref = ref()

  export default {
    data() {
      return {
        toggle: false
      }
    },
    computed: {
      getAuthUser(){
        return useAuthStore().getProfile
      }
    },
    mounted(){
      // useScript("https://accounts.google.com/gsi/client", () => {
      //   window.google.accounts.id.initialize({
      //     client_id: import.meta.env.VITE_APP_CLIENT_ID,
      //     callback: onGoogleSignIn,
      //     auto_select: false,
      //   });

      //   window.google.accounts.id.renderButton(googlebuttonref.value.current, {
      //     size: "medium",
      //   });
      // })
    },
    methods: {
      logout(){
        this.toggle = false
        useAuthStore().setProfile(null)
        this.$router.push({name: 'auth'})
        window.localStorage.removeItem('id')
      }
    }
  }
</script>