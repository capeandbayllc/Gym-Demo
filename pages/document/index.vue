<template>
    <div class="page-document-container">
        <div class="page-title">Document Center</div>
        <div class="page-content">
            <filter-actions></filter-actions>
            <div class="document-container">
                <create-card />
                <documents-card />
                <!-- <employee-card />
                <marketing-card /> -->
            </div>
        </div>
    </div>
</template>
<style scoped>
.page-document-container {
    @apply py-4 pr-5 w-full h-fit pl-16 -md:pl-0;
    .page-title {
        @apply text-lg font-light pb-3 pl-5;
    }
    .page-content {
        @apply grid gap-2 justify-center m-auto;
        .document-container {
            @apply grid border border-secondary bg-neutral py-7 px-7 rounded gap-5 -lg:block -lg:w-full;
        }
    }
}
</style>
<script setup>
import CreateCard from './components/create-card.vue';
import EmployeeCard from './components/employee-card.vue';
import MarketingCard from './components/marketing-card.vue';
import FilterActions from './components/filter-actions.vue';
import DocumentsCard from './components/documents-card.vue';
</script>