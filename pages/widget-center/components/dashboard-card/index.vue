<template>
    <div class="page-statistics-container">
        <div class="page-content">
            <h3 class="text-base-content text-xl">Dashboard</h3>
            <div class="statistics-fields">
                <statistic-people-card />
                <recent-location-card />
                <recent-statistics-card />
                <!-- <statistics-progression-card /> -->
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

<script setup>
import StatisticPeopleCard from './components/statistic-people-card/index.vue';
import RecentLocationCard from './components/recent-location-card/index.vue';
import RecentStatisticsCard from './components/recent-statistics-card/index.vue';

</script>
