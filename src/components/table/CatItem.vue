<template>
    <div class="cat-item">
        <div class="cat-name" v-once>
            {{ correctedItemName }}
        </div>
        <CheckBox 
            v-for="(user, index) in users"
            :key="index"
            :userId="user.id" 
            :prod="item" 
            :order="props.order"
            :isSummaryTable="isSummaryTable"
        />
    </div>
</template>

<script setup>

import { computed } from 'vue';
import CheckBox from './Checkbox.vue'

const props = defineProps({
    item: String,
    users: Array,
    order: Array,
    isSummaryTable: Boolean
});

const correctedItemName = computed(() => {
    return props.item.name.split(',').join(', '); 
});

</script>

<style scoped>

.cat-item {
    display: flex;
}

.cat-name {
    width: 350px;
}

</style>