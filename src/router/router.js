import { createRouter, createWebHashHistory } from 'vue-router';

import MainPage from '../components/pages/MainPage.vue';
import OrdersPage from '../components/pages/OrdersPage.vue';
import OrderPage from '../components/pages/OrderPage.vue';

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            component: MainPage
        },
        {
            path: '/orders',
            component: OrdersPage
        },
        {
            path: '/order',
            component: OrderPage
        },
    ]
});

export default router;