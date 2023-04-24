<template>
    <card title="Statistic 1" class="bg-base-300 text-base-content text-left" :options="{ favorite: false, collapse: false }">
        <template #content>
            <div>
                <new-sales :height="300" class="!border-0"></new-sales>
            </div>
        </template>
    </card>
</template>

<script setup>
import NewSales from '~/pages/engage/components/employee-tab/edit-sales-funnel/new-sales.vue';
</script>
