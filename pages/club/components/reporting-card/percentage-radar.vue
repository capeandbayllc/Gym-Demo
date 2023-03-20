<template>
    <div class="percentage-container">
        <div class="percentages overflow-auto h-[288px] py-4">
            <div :key="index" class="percent-item grid grid-cols-1" v-for="(item, index) in percentages">
                <PercentPie :item="item" />
                <hr class="border-white border-opacity-50 my-3">
            </div>
        </div>
    </div>
</template>
<style scoped>
    .percentage-container {
        padding: 30px 20px;
        border: 2px solid #0077ac;
        border-top: none;
        border-radius: 15px;
        border-top-left-radius: 0;
        border-top-right-radius: 0;
    }

    .header {
        color: white;
        text-align: left;
    }

    .percentages::-webkit-scrollbar {
        display: none;
    }

    .percentages .percent-item:last-child hr {
        display: none;
    }

</style>
<script setup>
    import {ref} from 'vue';
    import PercentPie from './percent-pie.vue';
    const percentages = ref([
        {
            color: '#3fc0ff',
            percent: 80,
            head: 'Total Income',
            amount: 8210.00,
            progress: 3.96,
            progress2: 20.90,
            gradient: "conic-gradient(from 360deg at 50% 50%, #3fc0ff 0deg, rgba(6,83,139,0 ) 360deg)"
        },
        {
            color: '#005490',
            percent: 79,
            head: 'Total Payments',
            amount: 5220.00,
            progress: 9.64,
            progress2: 11.76,
            gradient: "conic-gradient(from 360deg at 50% 50%, #005490 0deg, rgba(6,83,139,0 ) 360deg)"
        },
        {
            color: '#04365c',
            percent: 78,
            head: 'Total Expenses',
            amount: 8192.00,
            progress: 5.13,
            progress2: 13.45,
            gradient: "conic-gradient(from 360deg at 50% 50%, rgba(4,54,92,0.85) 0deg, rgba(6,83,139,0 ) 360deg)"
        },
    ])
</script>