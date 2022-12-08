<template>
    <div class="page-document-container">
        <div class="page-title">Document Center</div>
        <div class="page-content">
            <div class="document-container">
                <create-card />
                <employee-card />
                <marketing-card />
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
        @apply flex justify-center;
        .document-container {
            @apply grid border border-secondary bg-neutral py-5 px-7 rounded grid-rows-3 gap-5;
        }
    }
}
</style>
<script setup>
import CreateCard from './components/create-card.vue';
import EmployeeCard from './components/employee-card.vue';
import MarketingCard from './components/marketing-card.vue';
</script>