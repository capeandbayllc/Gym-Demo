<template>
    <div class="page-statistics-container">
        <div class="page-content">
            <h3 class="text-base-content text-xl">Dashboard</h3>
            <div class="statistics-fields">
                <statistic-people-card />
                <recent-location-card />
            </div>
        </div>
    </div>
</template>
<style scoped lang="postcss">
.page-statistics-container {
    @apply py-4 pr-5 w-full h-fit;
    .page-content {
        @apply border border-secondary rounded-2xl bg-base-300 px-8 py-5 text-left;
        .statistics-fields-container {
            @apply bg-neutral;
        }

        .statistics-fields {
            @apply grid grid-cols-3 4xl:grid-cols-4 -md:grid-cols-1 -xl:grid-cols-2 grid-rows-3 gap-y-8 gap-x-5 py-8;
        }
    }
}
</style>
<style lang="postcss">
.statistics-card {
    @apply w-full h-[350px] flex flex-col;
    .total-sale {
        @apply text-secondary font-bold text-6xl text-center mb-6;
    }
    .total-sale {
        @apply text-secondary font-bold text-6xl text-center mb-6;
    }
    .total-symbol {
        @apply text-[30px] inline-block align-top;
    }
    .statistics-info {
        @apply p-4;
        .statistics-list {
            @apply flex flex-col space-y-2;
            div {
                @apply text-secondary text-sm;
            }
        }
        .statistics-sum-up {
            @apply flex flex-row justify-between text-lg font-bold text-secondary;
        }
    }
}
.assessments-chart{
    @apply border-[2px] border-secondary rounded-[15px];
}
</style>
<script setup>
import StatisticPeopleCard from './components/statistic-people-card.vue';
import RecentLocationCard from './components/recent-location-card.vue';
</script>
