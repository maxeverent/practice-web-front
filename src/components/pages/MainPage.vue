<template>
    <div v-if="prods.length == 0">
        <CircleSpinner/>
    </div>
    <Table
        v-else
        :order="order"
        :prods="prods"
        :currentOrder="currentOrder"
        :users="usersWhoOrdered"
        :isSummaryTable="true"
    />
</template>

<script setup>

import CircleSpinner from 'vue-spinners/src/components/CircleSpinner.vue';

import Table from '../table/Table.vue';

import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

onMounted(async() => await store.dispatch('getUsersWhoOrdered'));

const order = computed(() => {
    return store.getters.getOrder;
});

const prods = computed(() => {
    return store.getters.getProd;
});

const currentOrder = computed(() => {
    return store.getters.getCurrentOrder;
});

const usersWhoOrdered = computed(() => {
    return store.getters.getUsersWhoOrdered;
});

</script>