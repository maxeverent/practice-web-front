<template>
    <div class="modal-background" @click="closeModal"></div>
    <div class="modal-wrapper">
        <div class="btn-wrapper">
            <button @click="closeModal" class="modal-btn">x</button>
        </div>
        <div class="modal-item" v-if="orderItems.length == 0">
            <span>Нет заказов</span>
        </div>
        <div v-else>
            <ModalItem v-for="user in users" :user="user" :orderItems="orderItems"/>
        </div>
    </div>
</template>

<script setup>

import ModalItem from './ModalItem.vue'

const props = defineProps({
    orderItems: Array,
    users: Array,
});

const emit = defineEmits(['closeModal']);

const closeModal = () => {
    emit('closeModal');
};

// const ordItems = computed(() => {
//     const result = [];
//     props.orderItems.forEach((item) => {
//         result.push({
//             name: item.name,
//             count: item.count,
//         });
//     });
//     console.log(result)
//     const sortedArr = result.sort((a, b) => a.name > b.name ? 1 : -1);
//     for (let i = 0; i < sortedArr.length; i++) {
//         if (sortedArr[i + 1]) {
//             if (sortedArr[i].name == sortedArr[i + 1].name) {
//                 sortedArr[i].count += 1;
//                 sortedArr.splice(i + 1, 1);
//                 i -= 1;
//             };
//         };
//     };
//     return sortedArr;
// });

</script>

<style>

.modal-wrapper {
    background-color: white;
    width: 400px;
    height: auto;
    margin: 10% auto 0 auto;
    z-index: 101;
    position: absolute;
    top: 0; left: 0; right: 0;
    padding: 30px;
    border-radius: 10px;
}

.modal-background {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: 0.5;
    position: fixed;
    z-index: 100;
    top: 0;
}

.modal-item {
    padding: 20px;
}

.btn-wrapper {
    text-align: right;
}

.modal-btn {
    width: 30px;
    height: 30px;
    cursor: pointer;
    border-radius: 10px;
}

</style>