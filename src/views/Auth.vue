<template>
  <div class="w-full h-screen bg-background flex flex-col justify-center items-center">
    <!-- <div class="grid grid-cols-12 h-full">
      <div class="col-span-7" />
      <div class="col-span-5 bg-secondary" />
    </div> -->

    <div
      className="text-center mb-3 text-primary text-3xl font-extrabold"
    >
      {{ layout === 1 ? 'Sign in to ' : 'Sign up for ' }}<span class="text-navy">Service Agency</span>
    </div>

    <div class="mb-5">
      {{ layout === 1 ? "Don't " : 'Already ' }}
      have an account? <span
        class="text-primary hover:underline hover:cursor-pointer"
        @click="switchLayout"
      >{{ layout === 1 ? 'Sign up' : 'Sign in' }}</span>
    </div>

    <fieldset
      class="md:w-[450px] mx-3 md:mx-0 border-2 border-primary p-4 rounded-lg mb-2"
    >
      <legend>{{ layout === 1 ? 'Sign up' : 'Sign in' }}</legend>

      <form
        v-if="layout === 1"
        @submit.prevent="signIn"
      >
        <label>Email</label>
        <input
          v-model="user.useremail"
          type="email"
          placeholder="Email"
          class="w-full outline-none rounded p-1 mb-3 border focus:border-primary"
        >

        <div class="relative">
          <label>Password</label>
          <input
            v-model="user.password"
            :type="showPass ? 'text' : 'password'"
            placeholder="Password"
            class="w-full outline-none rounded p-1 mb-3 border focus:border-primary"
          >

          <div
            class="absolute top-8 right-1 hover:cursor-pointer"
            @click="showPass = !showPass"
          >
            <svg
              v-if="!showPass"
              stroke="#3b82f6"
              fill="#3b82f6"
              stroke-width="0"
              viewBox="0 0 16 16"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            ><path d="M7.99993 6.00316C9.47266 6.00316 10.6666 7.19708 10.6666 8.66981C10.6666 10.1426 9.47266 11.3365 7.99993 11.3365C6.52715 11.3365 5.33324 10.1426 5.33324 8.66981C5.33324 7.19708 6.52715 6.00316 7.99993 6.00316ZM7.99993 7.00315C7.07946 7.00315 6.33324 7.74935 6.33324 8.66981C6.33324 9.59028 7.07946 10.3365 7.99993 10.3365C8.9204 10.3365 9.6666 9.59028 9.6666 8.66981C9.6666 7.74935 8.9204 7.00315 7.99993 7.00315ZM7.99993 3.66675C11.0756 3.66675 13.7307 5.76675 14.4673 8.70968C14.5344 8.97755 14.3716 9.24908 14.1037 9.31615C13.8358 9.38315 13.5643 9.22041 13.4973 8.95248C12.8713 6.45205 10.6141 4.66675 7.99993 4.66675C5.38454 4.66675 3.12664 6.45359 2.50182 8.95555C2.43491 9.22341 2.16348 9.38635 1.89557 9.31948C1.62766 9.25255 1.46471 8.98115 1.53162 8.71321C2.26701 5.76856 4.9229 3.66675 7.99993 3.66675Z" /></svg>

            <svg
              v-else
              stroke="#3b82f6"
              fill="#3b82f6"
              stroke-width="0"
              viewBox="0 0 16 16"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            ><path d="M1.47978 1.4797C1.30227 1.65721 1.28614 1.93498 1.43137 2.13072L1.47978 2.1868L4.1695 4.87652C2.88817 5.77616 1.93052 7.11985 1.53259 8.70952C1.46554 8.97738 1.62834 9.24892 1.89621 9.31598C2.16409 9.38298 2.4356 9.22025 2.50266 8.95232C2.85564 7.54225 3.72742 6.35956 4.88944 5.59626L6.09586 6.80278C5.62419 7.28378 5.33334 7.94278 5.33334 8.66965C5.33334 10.1424 6.52724 11.3363 8 11.3363C8.72694 11.3363 9.38587 11.0454 9.86694 10.5738L13.8131 14.5201C14.0084 14.7154 14.3249 14.7154 14.5202 14.5201C14.6977 14.3426 14.7139 14.0649 14.5686 13.8691L14.5202 13.813L10.4445 9.73692L10.4453 9.73592L9.64527 8.93732L7.732 7.02445L7.73334 7.02392L5.81252 5.10513L5.81334 5.10392L5.05782 4.35024L2.18689 1.4797C1.99163 1.28444 1.67504 1.28444 1.47978 1.4797ZM6.80274 7.51025L9.15947 9.86698C8.85947 10.1575 8.4506 10.3363 8 10.3363C7.07954 10.3363 6.33334 9.59012 6.33334 8.66965C6.33334 8.21905 6.51216 7.81018 6.80274 7.51025ZM8 3.66658C7.33314 3.66658 6.68607 3.7653 6.07406 3.94992L6.89874 4.77404C7.25594 4.70346 7.62427 4.66658 8 4.66658C10.6154 4.66658 12.8733 6.45342 13.4981 8.95538C13.565 9.22325 13.8364 9.38618 14.1043 9.31932C14.3723 9.25238 14.5352 8.98098 14.4683 8.71305C13.7329 5.7684 11.077 3.66658 8 3.66658ZM8.1298 6.0061L10.664 8.53992C10.5961 7.16865 9.49814 6.07168 8.1298 6.0061Z" /></svg>
          </div>
        </div>

        <div
          v-if="error"
          class="text-red-500 text-xs mb-3"
        >
          {{ '* '+error }}
        </div>

        <label>
          <input
            v-model="rememberMe"
            type="checkbox"
            name="checkbox"
            class="accent-primary mb-5"
          >
          <span class="ml-3 font-medium text-sm text-black/70">Remember Me</span>
        </label>

        <button
          type="submit"
          :disabled="disableSignIn"
          class="w-full rounded p-1 text-center text-white bg-primary disabled:bg-slate-600"
        >
          Sign in
        </button>

        <!-- <div class="text-center my-3">
          Or
        </div>

        <div class="flex justify-center items-center w-full">
          <button
            ref="googleAuth"
          />
        </div> -->
      </form>

      <!-- Sign Up -->
      <form
        v-else
        @submit.prevent="signUp"
      >
        <label>Full name</label>
        <input
          v-model="user.username"
          type="text"
          placeholder="Full name"
          class="w-full outline-none rounded p-1 mb-3 border focus:border-primary"
        >

        <label>Email</label>
        <input
          v-model="user.useremail"
          type="email"
          placeholder="Email"
          class="w-full outline-none rounded p-1 mb-3 border focus:border-primary"
        >

        <div class="relative">
          <label>Passeword</label>
          <input
            v-model="user.password"
            :type="showPass ? 'text' : 'password'"
            placeholder="Password"
            class="w-full outline-none rounded p-1 mb-3 border focus:border-primary"
          >

          <div
            class="absolute top-8 right-1 hover:cursor-pointer"
            @click="showPass = !showPass"
          >
            <svg
              v-if="!showPass"
              stroke="#3b82f6"
              fill="#3b82f6"
              stroke-width="0"
              viewBox="0 0 16 16"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            ><path d="M7.99993 6.00316C9.47266 6.00316 10.6666 7.19708 10.6666 8.66981C10.6666 10.1426 9.47266 11.3365 7.99993 11.3365C6.52715 11.3365 5.33324 10.1426 5.33324 8.66981C5.33324 7.19708 6.52715 6.00316 7.99993 6.00316ZM7.99993 7.00315C7.07946 7.00315 6.33324 7.74935 6.33324 8.66981C6.33324 9.59028 7.07946 10.3365 7.99993 10.3365C8.9204 10.3365 9.6666 9.59028 9.6666 8.66981C9.6666 7.74935 8.9204 7.00315 7.99993 7.00315ZM7.99993 3.66675C11.0756 3.66675 13.7307 5.76675 14.4673 8.70968C14.5344 8.97755 14.3716 9.24908 14.1037 9.31615C13.8358 9.38315 13.5643 9.22041 13.4973 8.95248C12.8713 6.45205 10.6141 4.66675 7.99993 4.66675C5.38454 4.66675 3.12664 6.45359 2.50182 8.95555C2.43491 9.22341 2.16348 9.38635 1.89557 9.31948C1.62766 9.25255 1.46471 8.98115 1.53162 8.71321C2.26701 5.76856 4.9229 3.66675 7.99993 3.66675Z" /></svg>

            <svg
              v-else
              stroke="#3b82f6"
              fill="#3b82f6"
              stroke-width="0"
              viewBox="0 0 16 16"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            ><path d="M1.47978 1.4797C1.30227 1.65721 1.28614 1.93498 1.43137 2.13072L1.47978 2.1868L4.1695 4.87652C2.88817 5.77616 1.93052 7.11985 1.53259 8.70952C1.46554 8.97738 1.62834 9.24892 1.89621 9.31598C2.16409 9.38298 2.4356 9.22025 2.50266 8.95232C2.85564 7.54225 3.72742 6.35956 4.88944 5.59626L6.09586 6.80278C5.62419 7.28378 5.33334 7.94278 5.33334 8.66965C5.33334 10.1424 6.52724 11.3363 8 11.3363C8.72694 11.3363 9.38587 11.0454 9.86694 10.5738L13.8131 14.5201C14.0084 14.7154 14.3249 14.7154 14.5202 14.5201C14.6977 14.3426 14.7139 14.0649 14.5686 13.8691L14.5202 13.813L10.4445 9.73692L10.4453 9.73592L9.64527 8.93732L7.732 7.02445L7.73334 7.02392L5.81252 5.10513L5.81334 5.10392L5.05782 4.35024L2.18689 1.4797C1.99163 1.28444 1.67504 1.28444 1.47978 1.4797ZM6.80274 7.51025L9.15947 9.86698C8.85947 10.1575 8.4506 10.3363 8 10.3363C7.07954 10.3363 6.33334 9.59012 6.33334 8.66965C6.33334 8.21905 6.51216 7.81018 6.80274 7.51025ZM8 3.66658C7.33314 3.66658 6.68607 3.7653 6.07406 3.94992L6.89874 4.77404C7.25594 4.70346 7.62427 4.66658 8 4.66658C10.6154 4.66658 12.8733 6.45342 13.4981 8.95538C13.565 9.22325 13.8364 9.38618 14.1043 9.31932C14.3723 9.25238 14.5352 8.98098 14.4683 8.71305C13.7329 5.7684 11.077 3.66658 8 3.66658ZM8.1298 6.0061L10.664 8.53992C10.5961 7.16865 9.49814 6.07168 8.1298 6.0061Z" /></svg>
          </div>
        </div>
        <label>Confirm password</label>
        <input
          type="password"
          placeholder="Confirm password"
          class="w-full outline-none rounded p-1 mb-3 border focus:border-primary"
        >

        <button
          type="submit"
          :disabled="disableSignUp"
          class="w-full rounded p-1 text-center text-white bg-primary disabled:bg-slate-600"
        >
          Sign up
        </button>
      </form>
    </fieldset>

    <div class="md:w-[450px] mx-3 md:mx-0 bg-amber-400 text-white p-1 rounded-md">
      For Admin Sign In email: 'admin@gmail.com' password: 'secret'
    </div>
  </div>
</template>

<script>
  import { useAuthStore } from '../store/module/auth'
  import { useScript } from '../utlis/googleAuth.js';
  import { jwtDecode } from 'jwt-decode';

  const onGoogleSignIn = (user) => {
    // let userCred = user.credential;
    // let payload = jwtDecode(userCred);
    console.log(user)
  };

  export default {
    data() {
      return {
        rememberMe: false,
        showPass: false,
        layout: 1,
        user: {
          username: '',
          useremail: '',
          password: ''
        },
        admin: {
          useremail: 'admin@gmail.com',
          password: 'secret'
        },
        error: ''
      }
    },
    computed: {
      disableSignIn(){
        return !this.user.useremail || !this.user.password
      },
      disableSignUp(){
        return !this.user.username || !this.user.useremail || !this.user.password
      }
    },
    created(){
      if(JSON.parse(window.localStorage.getItem('email'))){
        this.rememberMe = true
        this.user.useremail = JSON.parse(window.localStorage.getItem('email'))
      }
    },
    mounted(){
      useScript("https://accounts.google.com/gsi/client", () => {
        window.google.accounts.id.initialize({
          client_id: import.meta.env.VITE_APP_CLIENT_ID,
          callback: onGoogleSignIn,
          auto_select: false,
        })

        window.google.accounts.id.renderButton(this.$refs.googleAuth, {
          size: 'large',
          theme: 'filled_blue'
        })
      })
    },
    methods: {
      switchLayout(){
        if(this.layout === 1){
          this.layout = 2
          this.user.useremail = ''
        }else{
          this.layout = 1
          this.user.useremail = JSON.parse(window.localStorage.getItem('email'))
        }
      },
      signIn(){
        this.$axios.post('/user/signin', this.user)
          .then((res) => {
            if(res.status === 203){
              this.error = "the combination didn't matched"
            }else if(res.status === 204){
              this.error = "the user not found"
            }else{
              if(res.data.useremail === this.admin.useremail){
                useAuthStore().setProfile({
                  username: res.data.username,
                  useremail: res.data.useremail,
                  role: 'admin'
                })
                this.$router.push('/admin/AserviceList')
              }else{
                useAuthStore().setProfile({
                  username: res.data.username,
                  useremail: res.data.useremail,
                  role: 'user'
                })
                this.$router.push('/user/serviceList')
              }
              window.localStorage.setItem('id', JSON.stringify(res.data._id))
              if(this.rememberMe){
                window.localStorage.setItem('email', JSON.stringify(res.data.useremail))
              }else{
                window.localStorage.removeItem('email')
              }
            }
          })
      },
      signUp(){
        this.$axios.post('/user/signup', this.user)
          .then(() => {
            this.user = {
              username: '',
              useremail: '',
              password: ''
            }
            this.layout = 1
          })
      },
      logout(){
        this.toggle = false
        useAuthStore().setProfile(null)
        this.$router.push({name: 'auth'})
        window.localStorage.removeItem('id')
      }
    }
  }
</script>