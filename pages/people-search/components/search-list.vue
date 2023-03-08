<template>
    <div class="mt-5 club-search-tbl-content">
        <simple-card title="Members" class="mb-5" v-if="!filter || filter === 'members'">
            <people-search-table :columns="columns" :items="membersData" filter="id" class="p-6"/>
        </simple-card>
    </div>
</template>
<script setup>
import PeopleSearchTable from './people-search-table.vue';
const props = defineProps({
    filter: {
        type: String,
        default: null
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
        type: "platinum"
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
        type: "gold"
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
        type: "silver"
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
        type: "bronze"
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
        type: "platinum"
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
        type: "platinum"
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
        type: "platinum"
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
        type: "platinum"
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
        type: "platinum"
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
        type: "platinum"
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
        type: "platinum"
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
        type: "gold"
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
        type: "bronze"
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
        type: "silver"
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
        type: "platinum"
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
        type: "platinum"
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
        type: "platinum"
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
        type: "platinum"
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
        type: "platinum"
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
        type: "platinum"
    },
];
const employeeData = ref([]);
watch(() => props.filter, (newValue) => {
    if(newValue === 'employees') {
        employeeData.value = [...membersData];
    }else {
        employeeData.value = [];
    }
});
</script>
