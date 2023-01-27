<template>
    <div class="page-members-center-container">
        <div class="-md:px-4 page-content flex-col">
            <div>
                <data-table
                    :columns="columns"
                    :data="members"
                    :row-component="MemberTableRow"
                    class="h-96 overflow-y-auto"
                />
            </div>
        </div>
    </div>
</template>
<style scoped>
.page-members-center-container {
    @apply py-4 pr-5 w-full h-fit;
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
import MemberTableRow from './components/member-table-row.vue';
const columns = [
    {
        label: 'Created',
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
        label: 'mobile',
        class: 'text-secondary',
    },
    {
        label: 'email',
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
        label: 'Add-ons',
        class: 'text-secondary',
    },
    {
        label: 'Action',
        class: '',
    },
];
const members = [
    {
        id: 1,
        created: '5/5 2002, 12:24:44PM',
        first_name: 'Caleb',
        last_name: 'Sauer',
        phone: '(123) 456-7890',
        email: 'email@email.com',
        location: '1',
        type: 'premimum',
        addOns: true,
    },
    {
        id: 2,
        created: '5/5 2002, 12:24:44PM',
        opportunity: 'error',
        first_name: 'Nathan',
        last_name: 'Sipes',
        phone: '(123) 456-7890',
        email: 'email@email.com',
        location: '1',
        type: 'basic',
        addOns: false,
    },
    {
        id: 3,
        created: '5/5 2002, 12:24:44PM',
        opportunity: 'warning',
        first_name: 'Nathan',
        last_name: 'Sipes',
        phone: '(123) 456-7890',
        email: 'email@email.com',
        location: '1',
        type: 'premimum',
        addOns: true,
    },
    {
        id: 4,
        created: '5/5 2002, 12:24:44PM',
        opportunity: 'warning',
        first_name: 'Nathan',
        last_name: 'Sipes',
        phone: '(123) 456-7890',
        email: 'email@email.com',
        location: '1',
        type: 'gold',
        addOns: true,
    },
    {
        id: 5,
        created: '5/5 2002, 12:24:44PM',
        opportunity: 'warning',
        first_name: 'Nathan',
        last_name: 'Sipes',
        phone: '(123) 456-7890',
        email: 'email@email.com',
        location: '1',
        type: 'premimum',
        addOns: false,
    },
];
</script>
