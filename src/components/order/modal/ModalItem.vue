<template>
    <div v-if="!orderItems.length == 0">
        <h1>{{ user.fname }}</h1>
        <div>
            <p v-for="item in orderItems" v-if="!orderItems.length == 0">{{ item }}</p>
            <p v-else>Нет заказов</p>
        </div>
    </div>
</template>

<script setup>

import { computed } from 'vue';

const props = defineProps({
    user: String,
    orderItems: Array,
});

const orderItems = computed(() => {
    const arr = []
    props.orderItems.forEach((item) => {
        if (item.user_id == props.user.id && props.user.is_selected == 1) {
            arr.push(item.name)
        };
    });
    return arr
});

</script>