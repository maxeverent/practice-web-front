<template>
    <div class="cat-title">
        <h1>{{ props.prod.cat }}</h1>
    </div>
    <CatItem
        v-for="item in props.prod.items"
        :key="index"
        :users="props.users" 
        :item="item" 
        :order="order"
        :isSummaryTable="isSummaryTable"
        class="cat-item"
    />
</template>

<script setup>

import CatItem from './CatItem.vue'

const props = defineProps({
    prod: Object,
    users: Array,
    order: Array,
    isSummaryTable: Boolean
});

</script>

<style scoped>

h1 {
    text-align: center;
}
.cat-item {
    text-align: center;
    margin: 10px 0 10px 0;
    font-size: 17px;
}

</style>