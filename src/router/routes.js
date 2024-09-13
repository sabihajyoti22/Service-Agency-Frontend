const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('../views/Home.vue'),
    },
    {
        path: '/auth',
        name: 'auth',
        component: () => import('../views/Auth.vue'),
    },
    {
        path: '/admin',
        name: 'admin',
        component: () => import('../views/Admin.vue'),
        children: [
            {
                path: 'AserviceList',
                name: 'AserviceList',
                component: () => import('../components/ServiceList.vue')
            },
            {
                path: 'orderList',
                name: 'orderList',
                component: () => import('../components/Admin/OrderList.vue')
            },
            {
                path: 'settings',
                name: 'settings',
                component: () => import('../components/Admin/Settings.vue')
            }
        ]
    },
    {
        path: '/user',
        name: 'user',
        component: () => import('../views/User.vue'),
        children: [
            {
                path: 'serviceList',
                name: 'serviceList',
                component: () => import('../components/ServiceList.vue')
            },
            {
                path: 'order',
                name: 'order',
                component: () => import('../components/User/Order.vue')
            },
            {
                path: 'review',
                name: 'review',
                component: () => import('../components/User/Review.vue')
            }
        ]
    },
]

export default routes