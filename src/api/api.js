import axios from 'axios';
import config from './config';

export const HTTP = axios.create({
    baseURL: config.URL,
});

export default {
    getProd: async() => {
        try {
            const response = await HTTP.get('/parser/prod');
            return response.data;
        } catch(e) {
            console.log(e);
        }
    },
    getUsers: async() => {
        try {
            const response = await HTTP.get('/users/get');
            return response.data;
        } catch(e) {
            console.log(e);
        }
    },
    getCurrentOrder: async() => {
        try {
            const response = await HTTP.get('/current_order/info')
            return response.data;
        } catch(e) {
            console.log(e)
        }
    },
    getOrder: async() => {
        try {
            const response = await HTTP.get('/current_order/items');
            return response.data;
        } catch(e) {
            console.log(e);
        }
    },
    deleteOrderItem: async(id) => {
        try {
            await HTTP.delete('/current_order/delete_item/' + id);
        } catch(e) {
            console.log(e)
        }
    },
    createOrderItem: async(data) => {
        try {
            const response = await HTTP.post('/current_order/create_item', data);
            return response.data;
        } catch(e) {
            console.log(e)
        }
    },
    getAllOrders: async() => {
        try {
            const response = await HTTP.get('/orders/get')
            return response.data;
        } catch(e) {
            console.log(e)
        }
    },
    getOrderById: async(id) => {
        try {
            const response = await HTTP.get('/orders/items_by_id/' + id)
            return response.data;
        } catch(e) {
            console.log(e)
        }
    },
    getUsersWhoOrdered: async() => {
        try {
            const response = await HTTP.get('/current_order/users');
            return response.data;
        } catch(e) {
            console.log(e)
        }
    },
    selectRespUser: async(id) => {
        try {
            const response = await HTTP.post('/current_order/responsible_user/' + id)
            return response.data;
        } catch(e) {
            console.log(e)
        }
    },
    makeOrder: async() => {
        try {
            const response = await HTTP.post('/current_order/create');
            return response.data;
        } catch(e) {
            console.log(e)
        }
    },
};