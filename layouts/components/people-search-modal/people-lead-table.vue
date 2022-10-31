<template>
    <div class="people-lead-table-title">Leads</div>
    <div class="people-lead-table">
    </div>
</template>
<style scoped>
.people-lead-table-title {
    @apply text-lg font-semibold;
}
</style>
<script setup>
const columns = ["Created", "Opportunity", "First Name", "Last Name", "Location", "Type", "Status"]
const leads = [{
    id: 1,
    created: "5/5 2002, 12:24:44PM",
    opportunity: "accent",
    first_name: "Caleb",
    last_name: "Sauer",
    location: "Stencil 5",
    type: "app_referal",
    status: "available"
}, {
    id: 2,
    created: "5/5 2002, 12:24:44PM",
    opportunity: "accent",
    first_name: "Caleb",
    last_name: "Sauer",
    location: "Stencil 5",
    type: "app_referal",
    status: "available"
}]
</script>