import api from '../api/api';

const allOrders = {
    state: () => ({
        allOrders: []
    }),
    mutations: {
        getAllOrders: (state, res) => {
            const arr = [];
            res.forEach(el => {
                if (el.status == 1) {
                    arr.push(el)
                }
            });
            state.allOrders = arr;
        },
    },
    actions: {
        getAllOrders: async (ctx) => {
            const response = await api.getAllOrders();
            ctx.commit('getAllOrders', response)
        },
    },
    getters: {
        getAllOrders: (state) => {
            return state.allOrders;
        },
    }
}

export default allOrders