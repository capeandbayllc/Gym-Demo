<template>
    <div class="agreement-builder-container">
        <div class="page-title">Agreement</div>
        <div class="-md:px-4 page-content flex-col">
            <seach-filter-action-card></seach-filter-action-card>
            <recent-card class="mt-10"></recent-card>
            <folder-card class="mt-10"></folder-card>
            <last-month-card class="mt-10"></last-month-card>
        </div>
    </div>
</template>
<style scoped>
.agreement-builder-container {
    @apply py-4 pr-5 w-full h-fit pl-16;
    .page-title {
        @apply text-lg font-light pb-3 pl-5;
    }
    .page-content {
        @apply block border border-secondary bg-neutral rounded p-7 w-fit m-auto;
    }
}
</style>
<style>
    @media (max-width:1200px){
        .agreement-builder-container .page-content {width:90% !important}
    }
</style>
<script setup>
import RecentCard from './components/recent-card.vue';
import LastMonthCard from './components/last-month-card'
import FolderCard from './components/folder-card.vue';
import SeachFilterActionCard from './components/seach-filter-action-card.vue'
</script>