<template>
    <card class="draft-related-card" title="Draft Related Items">
        <template #content>
            <div class="app-content">
                <draft-related-chart :data="barMock" />
                <Button secondary size="xs" class="view-btn">view</Button>
            </div>
        </template>
    </card>
</template>
<style scoped>
.draft-related-card {
    @apply w-full bg-black;
    .app-content {
        @apply flex flex-col border-t border-base-content/50 mt-2;
    }
    .view-btn {
        @apply absolute bottom-4 right-4 text-base-content;
    }
}
</style>
<script setup>
import DraftRelatedChart from "./draft-related-chart.vue";

const barMock = [
    {
        name: "Net Profit",
        data: [44, 55, 57, 56, 61],
    },
];
</script>
