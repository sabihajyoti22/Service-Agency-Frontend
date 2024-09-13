import { createApp } from 'vue'
import '../public/assets/styles/style.css'
import router from './router/index'
import App from './App.vue'
import axios from 'axios'
import pinia from './store'

const app = createApp(App)

axios.defaults.baseURL = import.meta.env.VITE_APP_SERVER_URL;
axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest'

app.config.globalProperties.$axios = axios
app.use(router)
app.use(pinia)
app.mount('#app')