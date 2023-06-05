import { createRouter, createWebHashHistory } from 'vue-router';

const MainPage = () => import('../components/pages/MainPage.vue');
const OrderPage = () => import('../components/pages/OrderPage.vue');
const OrdersPage = () => import('../components/pages/OrdersPage.vue');

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