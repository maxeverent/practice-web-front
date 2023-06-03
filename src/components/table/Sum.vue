<template>
    <div class="footer-item">
        <div>{{ sum + ' р' }}</div>
        <div>{{ halfSum + ' р' }}</div>
    </div>
</template>

<script setup>

import { computed } from 'vue';

const props = defineProps({
    user: Object,
    order: Array
});

const sum = computed(() => {
    let result = 0
    props.order.forEach((item) => {
        if (item.user_id == props.user.id) {
            result += Number(item.price);
        };
    });
    return result;
});

const halfSum = computed(() => {
    if (sum.value == 0) {
        return 0;
    } else {
        return sum.value / 2;
    };
});

</script>

<style scoped>
.footer-item {
    width: 200px;
    text-align: center;
}

</style>