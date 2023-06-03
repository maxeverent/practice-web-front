<template>
    <div v-if="prods.length == 0">
        <CircleSpinner/>
    </div>
    <Table
        v-else
        :order="order"
        :prods="prods"
        :currentOrder="currentOrder"
        :users="users"
        :isSummaryTable="false"
    />
</template>

<script setup>

import CircleSpinner from 'vue-spinners/src/components/CircleSpinner.vue';

import Table from '../table/Table.vue';

import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

const users = [{
    id: 2,
    fname: "Иванов",
    sname: "Иван",
    lname: "Иванович"
}]; 

onMounted( async () => {
    await store.dispatch('getProd');
    await store.dispatch('getOrder');
    await store.dispatch('getCurrentOrder');
    await store.dispatch('getUsersWhoOrdered');
    await store.dispatch('getUsers');
});

const order = computed(() => {
    return store.getters.getOrder;
});

const prods = computed(() => {
    return store.getters.getProd;
});

const currentOrder = computed(() => {
    return store.getters.getCurrentOrder;
});


</script>