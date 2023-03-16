<template>
    <data-table
        :columns="columns"
        :data="data"
        :row-component="CampaignTableRow"
    />
</template>

<script setup>
import CampaignTableRow from './scheduled-campaign-table-row.vue';

const columns = ["Actions", "Subject", "Deployment Days", "Status", "Preview", "Report"];

const data = [{
    id: 1,
    action: 'email',
    title: "Welcome Email",
    deployment_days: 2,
    status: "in_progress"
}, {
    id: 2,
    action: 'message',
    title: "Introduction",
    deployment_days: 23,
    status: "pause"
}, {
    id: 3,
    action: 'phone',
    title: "Follow Up",
    deployment_days: 67,
    status: "rescheduled"
}, {
    id: 4,
    action: 'task',
    title: "PT Task",
    deployment_days: 12,
    status: "in_progress"
}, {
    id: 11,
    action: 'message',
    title: "Q/A",
    deployment_days: 4,
    status: "in_progress"
}, {
    id: 12,
    action: 'email',
    title: "Membership Offer",
    deployment_days: 18,
    status: "rescheduled"
}, {
    id: 13,
    action: 'task',
    title: "New Member Promo 1",
    deployment_days: 22,
    status: "in_progress"
}, {
    id: 14,
    action: 'phone',
    title: "New Member PT Offer",
    deployment_days: 30,
    status: "completed"
}]
</script>
