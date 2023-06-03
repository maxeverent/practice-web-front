<template>
    <Modal 
        v-if="modalStatus" 
        :orderItems="orderItems"
        :users="users"
        @closeModal="closeModal"
    />
    <div v-if="isLoading">
        <CircleSpinner/>
    </div>
    <div class="orders-wrapper" v-else>
        <div class="orders-item">
            <OrderItem 
                v-for="order in paginatedOrders" 
                :date="order.date" 
                @click="openModal(order.id)"
            />
        </div>
        <div class="nav">
            <div class="nav-content">
                <div class="nav-btns">
                    <button @click="prevPage" class="nav-btn">{{ "<-" }}</button>
                    <button @click="nextPage" class="nav-btn">{{ "->" }}</button>
                </div>
                <div>
                    <h1>{{ pageNumber + 1 }} из {{ pageCount }}</h1>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

import api from '@/api/api';

import OrderItem from '../order/OrderItem.vue';
import Modal from '../order/modal/Modal.vue';

import CircleSpinner from 'vue-spinners/src/components/CircleSpinner.vue';

import { ref, computed, onMounted } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

const modalStatus = ref(false);
const orderItems = ref([]);

const isLoading = ref(true);

const closeModal = () => {
    modalStatus.value = false;
};

const openModal = async (id) => {
    modalStatus.value = true;
    orderItems.value = await api.getOrderById(id);
};

onMounted(async() => {
    await store.dispatch('getUsers');
    await store.dispatch('getAllOrders').then(() => isLoading.value = false);
});

const allOrders = computed(() => {
    return store.getters.getAllOrders;
});

const users = computed(() => {
    return store.getters.getUsers;
});

const pageNumber = ref(0);
const size = ref(5);

const nextPage = () => {
    if (pageNumber.value + 1 !== pageCount.value) {
        pageNumber.value += 1;
    };
};

const prevPage = () => {
    if (pageNumber.value != 0) {
        pageNumber.value -= 1;
    };
};

const pageCount = computed(() => {
    let l = allOrders.value.length,
    s = size.value;
    return Math.ceil(l/s);
});

const paginatedOrders = computed(() => {
    const start = pageNumber.value * size.value,
    end = start + size.value;
    return allOrders.value.slice(start, end);
});

</script>

<style>

h1 {
    text-align: center;
}

.orders-wrapper {
    width: 70%;
    margin: 0 auto 0 auto;
    position: relative;
}

.orders-item {
    height: 80vh;
}

.nav {
    width: 100%;
    height: 150px;
    position: absolute;
    bottom: 0px;
}

.nav-content {
    width: 350px;
    margin: 0 auto 0 auto;
}

.nav-btns {
    display: flex;
    justify-content: space-between;
}

.nav-btn {
    width: 100px;
    height: 50px;
    margin: 10px;
    font-size: 15px;
    font-weight: bold;
    border-radius: 10px;
    cursor: pointer;
}

</style>