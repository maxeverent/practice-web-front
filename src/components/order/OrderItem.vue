<template>
    <div class="order-item">
        <h1 class="order-date">{{ date }}</h1>
    </div>
</template>

<script setup>

const props = defineProps({
    date: String,
});

</script>

<style scoped>

.order-item {
    width: 400px;
    margin: 10px auto 10px auto;
    text-align: center;
    background-color: #fbfbfb;
    height: 100px;
    border-radius: 10px;
    cursor: pointer;
}

.order-date {
    line-height: normal;
    display: inline-block;
    vertical-align: middle;
    text-align: center;
}

</style>