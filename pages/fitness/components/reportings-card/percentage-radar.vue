<template>
    <div class="percentage-container">
        <label class="header block text-[14px]">Percentages</label>
        <div class="percent-item grid grid-cols-10">
            <PercentPie class="col-span-3"/>
            <div class="statistics col-span-5"></div>
            <div class="percent-button"></div>
        </div>
        <div class="percent-item"></div>
        <div class="percent-item"></div>
    </div>
</template>
<style scoped>
.percentage-container{
    padding: 10px 20px;
    border : 2px solid #0077ac;
    border-radius: 15px;
}
.header{
    color : white;
    text-align: left;
}
</style>
<script setup>
import PercentPie from './percent-pie.vue';
</script>