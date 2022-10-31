<template>
    <div class="people-lead-table-title">Leads</div>
    <div class="people-lead-table">
        <data-table
            :columns="columns"
            :data="leads"
            :row-component="PeopleLeadTableRow"
            class="h-56 overflow-y-auto"
        />
    </div>
</template>
<style scoped>
.people-lead-table-title {
    @apply text-2xl font-semibold pt-4;
}
</style>
<script setup>
import PeopleLeadTableRow from './people-lead-table-row.vue';
const columns = [
    {
        label: "Created",
        class: "text-secondary"
    }, {
        label: "Opportunity",
        class: "text-secondary"
    }, {
        label: "First Name",
        class: "text-secondary"
    }, {
        label: "Last Name",
        class: "text-secondary"
    }, {
        label: "Location",
        class: "text-secondary"
    }, {
        label: "Type",
        class: "text-secondary"
    }, {
        label: "Status",
        class: "text-secondary"
    }
]
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
    opportunity: "error",
    first_name: "Nathan",
    last_name: "Sipes",
    location: "Stencil 5",
    type: "snapshot",
    status: "available"
}, {
    id: 3,
    created: "5/5 2002, 12:24:44PM",
    opportunity: "warning",
    first_name: "Nathan",
    last_name: "Sipes",
    location: "Stencil 5",
    type: "grand_opening",
    status: "available"
}, {
    id: 4,
    created: "5/5 2002, 12:24:44PM",
    opportunity: "warning",
    first_name: "Nathan",
    last_name: "Sipes",
    location: "Stencil 5",
    type: "free_trial",
    status: "available"
},  {
    id: 5,
    created: "5/5 2002, 12:24:44PM",
    opportunity: "warning",
    first_name: "Nathan",
    last_name: "Sipes",
    location: "Stencil 5",
    type: "streaming_preview",
    status: "available"
}]
</script>