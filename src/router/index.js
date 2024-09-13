import { createRouter, createWebHistory } from 'vue-router'
import routes from "./routes"
import { useAuthStore } from '../store/module/auth'
import axios from 'axios'

const router = createRouter({
    routes,
    history: createWebHistory(),
    scrollBehavior(_to, _from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { x: 0, y: 0 }
        }
    }
})

router.beforeEach((to, from, next) => {
    if(useAuthStore().getProfile === null){
        let user = JSON.parse(window.localStorage.getItem('id'))
        if(user){
            axios.get(`${import.meta.env.VITE_APP_SERVER_URL}/user/${user}`)
                .then((res) => {
                user = JSON.parse(JSON.stringify(res.data))
                if(user){
                    useAuthStore().setProfile({
                        username: user.username,
                        useremail: user.useremail,
                        role: user.useremail === 'admin@gmail.com' ? 'admin' : 'user'
                    })
                    return next()
                }else {
                    if(to.name === 'auth' || to.name === 'home'){
                        return next()
                    }else{
                        return next({name: 'auth'})  
                    }
                }
            })
        }else {
            if(to.name === 'auth' || to.name === 'home'){
                return next()
            }else{
                return next({name: 'auth'})  
            }
        }
    }else {
        return next()
    }
})


export default router