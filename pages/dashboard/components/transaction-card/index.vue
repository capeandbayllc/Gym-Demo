<template>
    <dashboard-card
        :title-icon="ComTowerIcon"
        title="Lorem ipsum"
    >
        <div class="transaction-data-list">
            <div class="transaction-data-row" v-for="item in mock" :key="item.id">
                <div class="item-description">
                    <div class="w-10 h-10 rounded bg-secondary/50"></div>
                    <div class="flex flex-col">
                        <span>{{item.title}}</span>
                        <span class="text-secondary text-sm">{{item.tx_count}} transactions</span>
                    </div>
                </div>
                <div class="item-value">
                    <span class="text-sm"> ${{item.amount}}</span>
                    <span class="text-base-content/60 text-xs">{{item.percent}}%</span>
                </div>
            </div>
        </div>
        <div class="footer-date">
            <span>September</span>
            <span>August</span>
        </div>
        <div class="footer-detail">All transactions</div>
    </dashboard-card>
</template>
<style scoped>
.transaction-data-list {
    @apply flex flex-col border-t-4 border-secondary px-5 mb-7;
    .transaction-data-row {
        @apply flex flex-row justify-between pb-3 pt-6 w-full;
        .item-description {
            @apply flex flex-row space-x-3 items-center;
        }
        .item-value {
            @apply flex flex-col justify-center items-end bg-secondary/30 px-3 rounded;
        }
    }
    .transaction-data-row:not(:last-child) {
        @apply border-b border-base-content/60;
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
    title: "Lorem ipsum",
    tx_count: 16,
    amount: 69.65,
    percent: 14
}, {
    id: 2,
    title: "Lorem ipsum",
    tx_count: 16,
    amount: 69.65,
    percent: 14
}, {
    id: 3,
    title: "Lorem ipsum",
    tx_count: 16,
    amount: 69.65,
    percent: 14
}]
</script>
