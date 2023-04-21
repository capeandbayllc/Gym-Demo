<template>
    <dashboard-card
        :title-icon="ComTowerIcon"
        title="Recent POS Transactions"
    >
        <div class="transaction-data-list no-scrollbar">
            <div class="transaction-data-row" v-for="item in mock" :key="item.id">
                <div class="item-description">
                    <div class="w-10 h-10 rounded bg-secondary/50"></div>
                    <div class="flex flex-col">
                        <span>{{item.title}}</span>
                        <span class="text-secondary text-sm">{{item.tx_count}} transactions</span>
                    </div>
                </div>
                <div class="item-value">
                    <span class="text-sm"> ${{item.amount.toLocaleString("en-US")}}</span>
                    <span class="text-base-content/60 text-xs">{{item.percent}}%</span>
                </div>
            </div>
        </div>
        <div class="footer-date">
            <span>November</span>
            <span>December</span>
        </div>
        <div class="footer-detail">All transactions</div>
    </dashboard-card>
</template>
<style scoped lang="postcss">
.transaction-data-list {
    @apply flex flex-col border-t-4 border-secondary px-5 mb-7 max-h-56 overflow-y-scroll overscroll-auto ;
    .transaction-data-row {
        @apply flex flex-row justify-between pb-3 pt-4 w-full;
        .item-description {
            @apply flex flex-row space-x-3 items-center;
        }
        .item-value {
            @apply flex flex-col justify-center items-end bg-secondary/10 px-3 rounded;
        }
    }
    .transaction-data-row:not(:last-child) {
        @apply border-b border-base-content/10;
    }
}
.footer-date {
    @apply absolute bottom-3 left-4 text-sm flex flex-row gap-4;
}
.footer-detail {
    @apply absolute bottom-3 right-4 text-sm flex flex-row gap-4;
}
</style>
<script setup>
import DashboardCard from '../dashboard-card.vue'
import { ComTowerIcon } from '@/components/icons'

const mock = [{
    id: 1,
    title: "Water (16oz.)",
    tx_count: 764,
    amount: 2376.21,
    percent: 13
}, {
    id: 2,
    title: "Energy Drinks",
    tx_count: 230,
    amount: 345.65,
    percent: 14
}, {
    id: 3,
    title: "Branded Tees",
    tx_count: 16,
    amount: 210.65,
    percent: 8
},
{
    id: 4,
    title: "Healthy Shake",
    tx_count: 16,
    amount: 252.65,
    percent: 12
},
{
    id: 5,
    title: "Yoga Shoes",
    tx_count: 16,
    amount: 69.65,
    percent: 14
}

]
</script>
