<template>
    <div class="agreement-builder-container">
        <div class="-md:px-4 page-content flex-col">
            <new-agreement-card></new-agreement-card>
            <seach-filter-action-card class="mt-10"></seach-filter-action-card>
            <recent-card class="mt-10"></recent-card>
            <folder-card class="mt-10"></folder-card>
            <last-month-card class="mt-10"></last-month-card>
        </div>
    </div>
</template>
<style scoped>
.agreement-builder-container {
    @apply py-4 pr-5 w-full h-fit;
    .page-content {
        @apply block border border-secondary bg-neutral rounded p-7;
    }
}
</style>
<style>
@media (max-width: 1200px) {
    .agreement-builder-container .page-content {
        width: 90% !important;
    }
}
@media (max-width: 1100px) {
    .folder-doc svg {
        height: 60px;
    }
    .create-option svg {
        height: 70px;
    }
    .last-month-doc svg,
    .recent-doc svg {
        height: 90px;
    }
    .last-month-doc,
    .recent-doc,
    .create-option {
        text-align: center;
    }
}
@media (max-width: 980px) {
    .new-agreement-card-content .title-text {
        font-size: 14px !important;
        width: auto !important;
    }
    .search-filer-action-title .select-box-wrapper {
        width: 9rem !important;
    }
    .search-filer-action-title .select-box-btn {
        font-size: 14px;
    }
}
@media (max-width: 820px) {
    .new-agreement-card-content {
        padding: 10px 10px;
    }
    .new-agreement-card-content .title-text {
        font-size: 12px !important;
        width: auto !important;
    }
    .search-filer-action-title .select-box-wrapper {
        width: 4rem !important;
    }
    .search-filer-action-title .select-box-btn {
        font-size: 12px;
    }
    .folder-doc svg {
        height: 50px;
    }
    .create-option svg {
        height: 60px;
    }
    .last-month-doc svg,
    .recent-doc svg {
        height: 80px;
    }
}
</style>
<script setup>
import RecentCard from './components/recent-card.vue';
import LastMonthCard from './components/last-month-card.vue';
import FolderCard from './components/folder-card.vue';
import SeachFilterActionCard from './components/seach-filter-action-card.vue';
import NewAgreementCard from './components/new-agreement-card.vue';
</script>
