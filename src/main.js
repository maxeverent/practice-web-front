import { createApp } from 'vue';
import App from './App.vue';
import store from './store/index';
import router from './router/router';

import 'vue-spinners/dist/vue-spinners.css'
import VueSpinners from 'vue-spinners/dist/vue-spinners.common';

const app = createApp(App)
app.use(store);
app.use(router);
app.use(VueSpinners);
app.mount('#app');

