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

import { computed, ref } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

const users = [{
    id: 3,
    fname: "Алексеев",
    sname: "Алексей",
    lname: "Алексеевич"
}]; 

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