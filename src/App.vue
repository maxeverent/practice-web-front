<template>
  <div class="wrapper">
    <div class="header">
      <div class="btn-wrapper">
        <button 
          v-for="(item, index) in header" 
          :key="index" 
          @click="$router.push(item.route)" 
          class="btn-header"
        >{{ item.name }}</button>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script setup>

import { ref, onMounted } from 'vue';

import { useStore } from 'vuex';

const store = useStore();

const header = ref([
  {
    name: 'Заказ',
    route: '/order'
  },
  {
    name: 'Меню',
    route: '/'
  },
  {
    name: 'Архив',
    route: '/orders'
  },
]);

const getNowDate = () => {
  header.value[1].name = new Date().toLocaleString().slice(0,5).split('-').reverse().join('.');
};

onMounted(async() => {
  getNowDate();
  await store.dispatch('getProd');
  await store.dispatch('getOrder');
  await store.dispatch('getCurrentOrder');
  await store.dispatch('getUsersWhoOrdered');
  await store.dispatch('getUsers');
});

</script>

<style scoped>

.wrapper {
  width: 98vw;
}
.header {
  width: 100%;
}

.btn-wrapper {
  width: 30%;
  margin: 0 auto 0 auto;
  display: flex;
  justify-content: space-between;
}

.btn-header {
  width: 200px;
  height: 50px;
  margin: 10px;
  font-size: 15px;
  font-weight: bold;
  border-radius: 10px;
  cursor: pointer;
}

</style>
