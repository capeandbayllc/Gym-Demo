<template>
    <data-table
        :columns="columns"
        :data="data"
        :row-component="CampaignTableRow"
    />
</template>
<script setup>
import CampaignTableRow from './campaign-table-row.vue';
const columns = ["active", "started", "in progress", "completed", "", ""]

const data = [{
    id: 1,
    title: "Fourth of July Fitness",
    started: 44,
    in_progress: 43,
    completed: 88,
    status: "in_progress"
}, {
    id: 2,
    title: "Bring a Guest Summer Event",
    started: 126,
    in_progress: 124,
    completed: 102,
    status: "in_progress"
}, {
    id: 3,
    title: "New Member Promo 1",
    started: 12,
    in_progress: 4,
    completed: 2,
    status: "in_progress"
}, {
    id: 4,
    title: "New Member PT Offer",
    started: 300,
    in_progress: 129,
    completed: 56,
    status: "in_progress"
}, {
    id: 11,
    title: "Fourth of July Fitness",
    started: 44,
    in_progress: 43,
    completed: 88,
    status: "in_progress"
}, {
    id: 12,
    title: "Bring a Guest Summer Event",
    started: 126,
    in_progress: 124,
    completed: 102,
    status: "in_progress"
}, {
    id: 13,
    title: "New Member Promo 1",
    started: 12,
    in_progress: 4,
    completed: 2,
    status: "in_progress"
}, {
    id: 14,
    title: "New Member PT Offer",
    started: 300,
    in_progress: 129,
    completed: 56,
    status: "in_progress"
}]
</script>
