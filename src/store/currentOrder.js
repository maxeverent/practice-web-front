import api from '../api/api';

const currentOrder = {
    state: () => ({
        currentOrder: [],
        orderItems: [],
        usersWhoOrdered: []
    }),
    mutations: {
        getCurrentOrder: (state, res) => {
            state.currentOrder = res;
        },
        updateCurrentOrder: (state, res) => {
            state.currentOrder = res;
        },
        getOrder: (state, res) => {
            state.orderItems = res;
        },
        createOrderItem: (state, res) => {
            state.orderItems.push(res);
        },
        deleteOrderItem: (state, index) => {
            state.orderItems.splice(index, 1);
        },
        getUsersWhoOrdered: (state, res) => {
            state.usersWhoOrdered = res
        }
    },
    actions: {
        getCurrentOrder: async (ctx) => {
            const response = await api.getCurrentOrder();
            ctx.commit('getCurrentOrder', response)
        },
        selectRespUser: async (ctx, id) => {
            const response = await api.selectRespUser(id);
            ctx.commit('updateCurrentOrder', response)
        },
        getOrder: async (ctx) => {
            const response = await api.getOrder();
            ctx.commit('getOrder', response)
        },
        deleteOrderItem: async (ctx, id) => {
            await api.deleteOrderItem(id);
        },
        createOrderItem: async (ctx, data) => {
            const response = await api.createOrderItem(data);
            ctx.commit('createOrderItem', response);
        },
        makeOrder: async (ctx) => {
            const response = await api.makeOrder();
            ctx.commit('updateCurrentOrder', response);
        },
        getUsersWhoOrdered: async (ctx) => {
            const response = await api.getUsersWhoOrdered();
            ctx.commit('getUsersWhoOrdered', response);
        }
    },
    getters: {
        getCurrentOrder: (state) => {
            return state.currentOrder;
        },
        getSelectedRespUser: (state) => {
            if (!state.currentOrder) {
                return "Не выбран"
            }
            if (state.currentOrder.user_id == null) {
                return "Не выбран"
            }
            return `${state.currentOrder.fname} ${state.currentOrder.sname} ${state.currentOrder.lname}`;
        },
        getOrder: (state) => {
            return state.orderItems;
        },
        getUsersWhoOrdered: (state) => {
            return state.usersWhoOrdered;
        }
    }
};

export default currentOrder