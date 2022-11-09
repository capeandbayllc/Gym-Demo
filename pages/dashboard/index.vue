<template>
    <div class="page-dashboard-container">
        <div class="page-title">Dashboard</div>
        <div class="page-content">
            <div class="flex flex-col gap-5">
                <div class="flex flex-row justify-between">
                    <statistic-card />
                    <campaign-card />
                    <calendar-card />
                </div>
                <div class="flex flex-row justify-between">
                    <transaction-card />
                    <history-card />
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.page-dashboard-container {
    @apply py-4 pr-5 w-full h-fit pl-16;
    .page-title {
        @apply text-lg font-light pb-3 pl-5;
    }
    .page-content {
        @apply m-auto;
        width: 1164px;
    }
}
</style>
<script setup>
import StatisticCard from './components/statistic-card/index.vue';
import CampaignCard from './components/campaign-card/index.vue';
import CalendarCard from './components/calendar-card/index.vue';
import TransactionCard from './components/transaction-card/index.vue';
import HistoryCard from './components/history-card/index.vue';

</script>