import api from '../api/api';

const prod = {
    state: () => ({
        prod: []
    }),
    mutations: {
        getProd: (state, res) => {
            state.prod = res;
        },
    },
    actions: {
        getProd: async (ctx) => {
            const response = await api.getProd();
            ctx.commit('getProd', response);
        },
    },
    getters: {
        getProd: (state) => {
            return state.prod;
        },
    }
}

export default prod