<template>
    <div class="page-leads-center-container">
        <div class="-md:px-4 page-content flex-col">
            <div class="flex flex-row justify-between space-x-4 mb-4">
                <div class="flex gap-4">
                    <select-box
                        :items="locationType"
                        value=""
                        :label="'Locations'"
                        class="w-40 filter-selected"
                    >
                    </select-box>
                    <select-box
                        :items="leadType"
                        value=""
                        :label="'Lead Type'"
                        class="w-40 filter-selected"
                    >
                    </select-box>
                </div>
                <div class="flex gap-4">
                    <search-input
                        neutral
                        size="md"
                        border="neutral"
                        class="w-52"
                    />
                </div>
            </div>
            <div>
                <data-table
                    :columns="columns"
                    :data="leads"
                    :row-component="LeadTableRow"
                    class="h-96 overflow-y-auto"
                />
            </div>
        </div>
    </div>
</template>
<style scoped>
.page-leads-center-container {
    @apply py-4 pr-5 w-full h-fit pl-16;
    .page-content {
        @apply block border border-secondary bg-neutral rounded p-7;
    }
}
</style>
<style>
/* @media (max-width: 1300px) {
    .page-content {
        width: 90% !important;
    }
} */
</style>
<script setup>
import LeadTableRow from './components/lead-table-row.vue';
const locationType = [
    {
        value: '1',
        label: 'Location 1',
    },
    {
        value: '2',
        label: 'Location 2',
    },
    {
        value: '3',
        label: 'Location 3',
    },
    {
        value: '4',
        label: 'Location 4',
    },
    {
        value: '5',
        label: 'Location 5',
    },
];
const leadType = [
    {
        value: '1',
        label: 'App Referal',
    },
    {
        value: '2',
        label: 'Snapshot',
    },
    {
        value: '3',
        label: 'Grand Opening',
    },
    {
        value: '4',
        label: 'Free Trial',
    },
    {
        value: '5',
        label: 'Streaming Preview',
    },
];
const columns = [
    {
        label: 'Created',
        class: 'text-secondary',
    },
    {
        label: 'Opportunity',
        class: 'text-secondary',
    },
    {
        label: 'First Name',
        class: 'text-secondary',
    },
    {
        label: 'Last Name',
        class: 'text-secondary',
    },
    {
        label: 'Location',
        class: 'text-secondary',
    },
    {
        label: 'Type',
        class: 'text-secondary',
    },
    {
        label: 'Status',
        class: 'text-secondary',
    },
    {
        label: 'Action',
        class: '',
    },
];
const leads = [
    {
        id: 1,
        created: '5/5 2002, 12:24:44PM',
        opportunity: 'accent',
        first_name: 'Caleb',
        last_name: 'Sauer',
        location: 'Stencil 5',
        type: 'app_referal',
        status: 'available',
    },
    {
        id: 2,
        created: '5/5 2002, 12:24:44PM',
        opportunity: 'accent',
        first_name: 'Caleb',
        last_name: 'Sauer',
        location: 'Stencil 5',
        type: 'grand_opening',
        status: 'available',
    },
    {
        id: 3,
        created: '5/5 2002, 12:24:44PM',
        opportunity: 'error',
        first_name: 'Nathan',
        last_name: 'Sipes',
        location: 'Stencil 5',
        type: 'snapshot',
        status: 'available',
    },
    {
        id: 4,
        created: '5/5 2002, 12:24:44PM',
        opportunity: 'warning',
        first_name: 'Nathan',
        last_name: 'Sipes',
        location: 'Stencil 5',
        type: 'grand_opening',
        status: 'available',
    },
    {
        id: 5,
        created: '5/5 2002, 12:24:44PM',
        opportunity: 'warning',
        first_name: 'Nathan',
        last_name: 'Sipes',
        location: 'Stencil 5',
        type: 'free_trial',
        status: 'available',
    },
    {
        id: 6,
        created: '5/5 2002, 12:24:44PM',
        opportunity: 'warning',
        first_name: 'Nathan',
        last_name: 'Sipes',
        location: 'Stencil 5',
        type: 'streaming_preview',
        status: 'available',
    },
];
</script>
