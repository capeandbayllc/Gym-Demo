<template>
    <div class="mt-5 people-search-tbl-content">
        <simple-card title="Members" class="mb-5" v-if="!filter || filter === 'members'">
            <people-search-table :columns="columns" :items="membersData" class="p-6"/>
        </simple-card>
        <simple-card title="Leads" class="mb-5" v-if="!filter || filter === 'leads'">
            <people-search-table :columns="columns" :items="leadsData" class="p-6"/>
        </simple-card>
        <simple-card title="Employees" class="mb-5" v-if="!filter || filter === 'employees'">
            <data-table />
        </simple-card>
        <simple-card title="Segments" class="mb-5" v-if="!filter || filter === 'segments'">
            <people-search-table :columns="columns" :items="leadsData" class="p-6"/>
        </simple-card>
    </div>
</template>
<script setup>
import PeopleSearchTable from './people-search-table.vue';
const props = defineProps({
    filter: {
        type: Array,
        default: String
    },
});
const columns = [
    {
        label: "Segment",
        class: "text-secondary text-left"
    },
    {
        label: "First Name",
        class: "text-secondary text-left"
    },
    {
        label: "Last Name",
        class: "text-secondary text-left"
    },
    {
        label: "Mobile",
        class: "text-secondary text-left"
    },
    {
        label: "Email",
        class: "text-secondary text-left"
    }, 
    {
        label: "Location",
        class: "text-secondary text-left"
    },
    {
        label: "Type",
        class: "text-secondary text-left"
    },
    {
        label: "Created",
        class: "text-secondary text-left"
    }
];
const membersData = [
    {
        id: 1,
        segment: 'New Member',
        phone: '(123) 456-7890',
        email: 'email@email.com',
        created: "5/5 2002, 12:24:44PM",
        type_status: "warning",
        first_name: "Caleb",
        last_name: "Sauer",
        location: "1",
        type: "Premium"
    },
    {
        id: 2,
        segment: 'New Member',
        phone: '(123) 456-7890',
        email: 'email@email.com',
        created: "5/5 2002, 12:24:44PM",
        type_status: "warning",
        first_name: "Nathan",
        last_name: "Sipes",
        location: "1",
        type: "Premium"
    },
    {
        id: 3,
        segment: 'New Member',
        phone: '(123) 456-7890',
        email: 'email@email.com',
        created: "5/5 2002, 12:24:44PM",
        type_status: "warning",
        first_name: "Nathan",
        last_name: "Sipes",
        location: "1",
        type: "Premium"
    },
    {
        id: 4,
        segment: 'Marketing Campaign',
        phone: '(123) 456-7890',
        email: 'email@email.com',
        created: "5/5 2002, 12:24:44PM",
        type_status: "warning",
        first_name: "Nathan",
        last_name: "Sipes",
        location: "1",
        type: "Premium"
    },  
    {
        id: 5,
        segment: 'Marketing Campaign',
        phone: '(123) 456-7890',
        email: 'email@email.com',
        created: "5/5 2002, 12:24:44PM",
        type_status: "warning",
        first_name: "Nathan",
        last_name: "Sipes",
        location: "1",
        type: "Premium"
    },
    {
        id: 6,
        segment: 'PT Sessions',
        phone: '(123) 456-7890',
        email: 'email@email.com',
        created: "5/5 2002, 12:24:44PM",
        type_status: "warning",
        first_name: "Nathan",
        last_name: "Sipes",
        location: "1",
        type: "Premium"
    },
    {
        id: 7,
        segment: 'PT Sessions',
        phone: '(123) 456-7890',
        email: 'email@email.com',
        created: "5/5 2002, 12:24:44PM",
        type_status: "warning",
        first_name: "Nathan",
        last_name: "Sipes",
        location: "1",
        type: "Premium"
    },
    {
        id: 8,
        segment: 'PT Sessions',
        phone: '(123) 456-7890',
        email: 'email@email.com',
        created: "5/5 2002, 12:24:44PM",
        type_status: "warning",
        first_name: "Nathan",
        last_name: "Sipes",
        location: "1",
        type: "Premium"
    },
    {
        id: 9,
        segment: 'PT Sessions',
        phone: '(123) 456-7890',
        email: 'email@email.com',
        created: "5/5 2002, 12:24:44PM",
        type_status: "warning",
        first_name: "Nathan",
        last_name: "Sipes",
        location: "1",
        type: "Premium"
    },
    {
        id: 10,
        segment: 'PT Sessions',
        phone: '(123) 456-7890',
        email: 'email@email.com',
        created: "5/5 2002, 12:24:44PM",
        type_status: "warning",
        first_name: "Nathan",
        last_name: "Sipes",
        location: "1",
        type: "Premium"
    },
];
const leadsData = [
    {
        id: 1,
        segment: 'New Member',
        phone: '(123) 456-7890',
        email: 'email@email.com',
        created: "5/5 2002, 12:24:44PM",
        type_status: "secondary",
        first_name: "Caleb",
        last_name: "Sauer",
        location: "1",
        type: "Premium"
    },
    {
        id: 2,
        segment: 'New Member',
        phone: '(123) 456-7890',
        email: 'email@email.com',
        created: "5/5 2002, 12:24:44PM",
        type_status: "secondary",
        first_name: "Nathan",
        last_name: "Sipes",
        location: "1",
        type: "Premium"
    },
    {
        id: 3,
        segment: 'New Member',
        phone: '(123) 456-7890',
        email: 'email@email.com',
        created: "5/5 2002, 12:24:44PM",
        type_status: "secondary",
        first_name: "Nathan",
        last_name: "Sipes",
        location: "1",
        type: "Premium"
    },
    {
        id: 4,
        segment: 'Marketing Campaign',
        phone: '(123) 456-7890',
        email: 'email@email.com',
        created: "5/5 2002, 12:24:44PM",
        type_status: "secondary",
        first_name: "Nathan",
        last_name: "Sipes",
        location: "1",
        type: "Premium"
    },  
    {
        id: 5,
        segment: 'Marketing Campaign',
        phone: '(123) 456-7890',
        email: 'email@email.com',
        created: "5/5 2002, 12:24:44PM",
        type_status: "secondary",
        first_name: "Nathan",
        last_name: "Sipes",
        location: "1",
        type: "Premium"
    },
    {
        id: 6,
        segment: 'PT Sessions',
        phone: '(123) 456-7890',
        email: 'email@email.com',
        created: "5/5 2002, 12:24:44PM",
        type_status: "secondary",
        first_name: "Nathan",
        last_name: "Sipes",
        location: "1",
        type: "Premium"
    },
    {
        id: 7,
        segment: 'PT Sessions',
        phone: '(123) 456-7890',
        email: 'email@email.com',
        created: "5/5 2002, 12:24:44PM",
        type_status: "secondary",
        first_name: "Nathan",
        last_name: "Sipes",
        location: "1",
        type: "Premium"
    },
    {
        id: 8,
        segment: 'PT Sessions',
        phone: '(123) 456-7890',
        email: 'email@email.com',
        created: "5/5 2002, 12:24:44PM",
        type_status: "secondary",
        first_name: "Nathan",
        last_name: "Sipes",
        location: "1",
        type: "Premium"
    },
    {
        id: 9,
        segment: 'PT Sessions',
        phone: '(123) 456-7890',
        email: 'email@email.com',
        created: "5/5 2002, 12:24:44PM",
        type_status: "secondary",
        first_name: "Nathan",
        last_name: "Sipes",
        location: "1",
        type: "Premium"
    },
    {
        id: 10,
        segment: 'PT Sessions',
        phone: '(123) 456-7890',
        email: 'email@email.com',
        created: "5/5 2002, 12:24:44PM",
        type_status: "secondary",
        first_name: "Nathan",
        last_name: "Sipes",
        location: "1",
        type: "Premium"
    },
];
</script>