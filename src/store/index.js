import Vuex from 'vuex';

import users from './users';
import currentOrder from './currentOrder';
import prod from './prod';
import allOrders from './allOrders';

const store = new Vuex.Store({
    modules: {
        users: users,
        currentOrder: currentOrder,
        prod: prod,
        allOrders: allOrders,
    },
});

export default store;