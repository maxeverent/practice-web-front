import api from '../api/api';

const users = {
    state: () => ({
        users: []
    }),
    mutations: {
        getUsers: (state, res) => {
            state.users = res;
        },
    },
    actions: {
        getUsers: async (ctx) => {
            const response = await api.getUsers();
            ctx.commit('getUsers', response);
        },
    },
    getters: {
        getUsers: (state) => {
            return state.users;
        }, 
    }
}

export default users