<template>
    <div class="footer-item">
        <input
            :id="userId + prod.name"
            :disabled="isSummaryTable"
            type="checkbox" 
            v-model="checkedItem" 
            @click="selectItem"
            class="checkbox"
        >
    </div>
</template>

<script setup>

import { onMounted, ref, watch } from 'vue';

import { useStore } from 'vuex';

const store = useStore();

const props = defineProps({
    userId: Number,
    prod: Object,
    order: Array,
    isSummaryTable: Boolean
});

const checkedItem = ref(false);
const orderItemId = ref(0);
const orderItemIndex = ref(0);

const selectItem = async() => {
    if (checkedItem.value == false) {
        await store.dispatch('createOrderItem', {
            name: props.prod.name,
            count: 1,
            price: props.prod.price,
            user_id: props.userId
        });
        console.log('add item');
    } else {
        await store.dispatch('deleteOrderItem', orderItemId.value);
        store.commit('deleteOrderItem', orderItemIndex.value)
        console.log('remove item');
    };
};

const checkboxStatus = () => {
    props.order.forEach((item, index) => {
        if (item.name == props.prod.name) {
            if(item.user_id == props.userId) {
                checkedItem.value = true;
                orderItemId.value = item.id;
                orderItemIndex.value = index;
            };
        };
    });
};

watch(() => {
    checkboxStatus();
});

onMounted(() => {
    checkboxStatus();
});


</script>

<style scoped>

.footer-item {
    width: 200px;
}

input[type="checkbox"] {

  -webkit-appearance: none;

  appearance: none;

  background-color: var(--form-background);

  margin: 0;

  font: inherit;
  color: currentColor;
  width: 1.15em;
  height: 1.15em;
  border: 0.15em solid currentColor;
  border-radius: 0.15em;
  transform: translateY(-0.075em);

  display: grid;
  place-content: center;

  margin: 0 auto 0 auto;
}

input[type="checkbox"]::before {
  content: "";
  width: 0.65em;
  height: 0.65em;
  clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
  transform: scale(0);
  transform-origin: bottom left;
  transition: 120ms transform ease-in-out;
  box-shadow: inset 1em 1em var(--form-control-color);
  /* Windows High Contrast Mode */
  background-color: CanvasText;
}

input[type="checkbox"]:checked::before {
  transform: scale(1);
}



input[type="checkbox"]:disabled {
  --form-control-color: var(--form-control-disabled);

  color: var(--form-control-disabled);
  cursor: not-allowed;
}


</style>