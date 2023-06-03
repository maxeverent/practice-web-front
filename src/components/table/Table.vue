<template>
    <div class="table" :style="{width: 230*(users.length + 1) + 'px'}">
        <template v-if="isSummaryTable">
            <div class="table-date">
                <span class="now-date">{{ "Меню на " + nowDate }}</span>
                <button @click="makeOrder" :disabled="statusButton" class="select-btn">Оформить заказ</button>
            </div>
        </template>
        <div class="header">
            <div class="table-item-name">Меню/ФИО</div>
            <div 
                class="header-item" 
                v-for="user in users" 
            >{{ `${user.fname} ${user.sname} ${user.lname}`}}</div>
        </div>
        <div class="content">
            <Category 
                v-for="(prod, index) in prods"
                :key="index"
                :prod="prod" 
                :users="users" 
                :order="order"
                :isSummaryTable="isSummaryTable"
            />
        </div>
        <div class="footer">
            <div class="footer-sum">
                <div>
                    <div class="table-item-name">Сумма 100%</div>
                    <div class="table-item-name">Сумма 50%</div>
                </div>
                <Sum 
                    v-for="user in users" 
                    :order="order" 
                    :user="user"
                />
            </div>
            <template v-if="isSummaryTable">
                <div class="select">
                    <span >Ответственный за заказ: {{ responsibleUser }}</span>
                    <select v-model="selectedUserId" class="select-item">
                        <option 
                            v-for="(user, index) in usersForSelect"
                            :key="index"
                            :value="user.id"
                        >{{ user.fname + ' ' + user.sname + ' ' + user.lname}}</option>
                    </select>
                </div>
                <button @click="selectUser">Выбрать</button>
                <h1>Заказ</h1>
                <div 
                    v-for="(item, index) in orderItems" 
                    :key="index"
                    class="order-item"
                >
                    <span>{{ item.name + ' - '}}</span>
                    <span>{{ item.count + ' шт' }}</span>
                </div>
            </template>
        </div>
    </div>
</template>

<script setup>

import { computed, ref } from 'vue';
import { useStore } from 'vuex';

import Category from './Category.vue';
import Sum from './Sum.vue';

const store = useStore();

const props = defineProps({
    prods: Array,
    users: Array,
    order: Array,
    currentOrder: Object,
    isSummaryTable: Boolean,
});

const nowDate = computed(() => {;
    return new Date().toISOString().slice(0,10).split('-').reverse().join('.');
});

const makeOrder = () => {
    store.dispatch('makeOrder');
}

const statusButton = computed(() => {
    if (props.currentOrder) {
        if (props.currentOrder.status == 1) {
            return true
    }
        return false
    }
});

const usersForSelect = computed(() => {
    return store.getters.getUsers;
});



const selectedUserId = ref('');

const selectUser = async () => {
    if (selectedUserId.value != '') {
        await store.dispatch('selectRespUser', selectedUserId.value)
            .then(() => selectedUserId.value = '');
    };
};

const responsibleUser = computed(() => {
    return store.getters.getSelectedRespUser;
});

const orderItems = computed(() => {
    const result = [];
    props.order.forEach((item) => {
        result.push({
            name: item.name,
            count: item.count,
        });
    });
    const sortedArr = result.sort((a, b) => a.name > b.name ? 1 : -1);
    for (let i = 0; i < sortedArr.length; i++) {
        if (sortedArr[i + 1]) {
            if (sortedArr[i].name == sortedArr[i + 1].name) {
                sortedArr[i].count += 1;
                sortedArr.splice(i + 1, 1);
                i -= 1;
            };
        };
    };
    return sortedArr;
});

</script>

<style scoped>

.now-date {
    font-size: 33px;
    font-weight: bold;
}

.table {
    height: auto;
    min-width: 330px;
    background-color: #fbfbfb;
    margin: 0 auto 0 auto;
    border: 0.15rem solid;
    border-radius: 10px;
    border-color: grey;
    padding: 15px;
}

.table-item-name {
    width: 310px;
    text-align: center;
}

.table-date {
    text-align: center;
    margin: 20px;
    display: flex;
    justify-content: space-between;
}

.header {
    display:flex;
}

.header-item {
    width: 200px;
    text-align: center;
}

.footer {
    margin-top: 40px;
    font-size: 17px;
}

.footer-item {
    width: 200px;
    text-align: center;
}

.footer-sum {
    display: flex;
    margin: 20px 0 20px 0;
}

.order-item {
    margin: 10px;
    font-size: 17px;
}

.select {
    display: flex;
    flex-direction: column;
}

.select-item {
    width: 200px;
}


</style>