import axios from 'axios';
import config from './config';

export const HTTP = axios.create({
    baseURL: config.URL,
});

export default {
    getUsers: async() => {
        try {
            const response = await HTTP.get('/users/get');
            return response.data;
        } catch(e) {
            console.log(e);
        }
    },
    getProd: async() => {
        try {
            const response = await HTTP.get('/get/prod');
            return response.data;
        } catch(e) {
            console.log(e);
        }
    },
    getOrder: async() => {
        try {
            const response = await HTTP.get('/order/items');
            return response.data;
        } catch(e) {
            console.log(e);
        }
    },
    deleteOrderItem: async(id) => {
        try {
            await HTTP.delete('/order/deleteitem/' + id);
        } catch(e) {
            console.log(e)
        }
    },
    createOrderItem: async(data) => {
        try {
            const response = await HTTP.post('/order/createitem', data);
            return response.data;
        } catch(e) {
            console.log(e)
        }
    },
    getAllOrders: async() => {
        try {
            const response = await HTTP.get('/order/orders')
            return response.data;
        } catch(e) {
            console.log(e)
        }
    },
    getOrderById: async(id) => {
        try {
            const response = await HTTP.get('/order/items/' + id)
            return response.data;
        } catch(e) {
            console.log(e)
        }
    },
    getCurrentOrder: async() => {
        try {
            const response = await HTTP.get('/order/current')
            return response.data;
        } catch(e) {
            console.log(e)
        }
    },
    selectRespUser: async(id) => {
        try {
            const response = await HTTP.post('/order/selectrespuser/' + id)
            return response.data;
        } catch(e) {
            console.log(e)
        }
    },
    selectUser: async(id) => {
        try {
            await HTTP.post('/users/select/' + id)
        } catch(e) {
            console.log(e)
        }
    },
    removeUser: async(id) => {
        try {
            await HTTP.post('/users/remove/' + id)
        } catch(e) {
            console.log(e)
        }
    },
    makeOrder: async() => {
        try {
            const response = await HTTP.post('/order/make');
            return response.data;
        } catch(e) {
            console.log(e)
        }
    },
    getUsersWhoOrdered: async() => {
        try {
            const response = await HTTP.get('/order/users');
            return response.data;
        } catch(e) {
            console.log(e)
        }
    }
};