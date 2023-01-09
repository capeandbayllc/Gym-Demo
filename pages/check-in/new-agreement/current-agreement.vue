<template>
    <div class="flex justify-center items-center pt-8 pb-10">
        <button class="flex flex-col items-center" @click="$emit('newAgreement')">
            <NewAgreementIcon class="w-[160px] h-[50px] mb-2"/>
            <span>Start a New Agreement</span>
        </button>
        <button class="flex flex-col items-center">
            <AddIcon class="w-[150px] h-[50px] mb-2"/>
            <span>Pick up Template</span>
        </button>
    </div>
    <simple-card title="Current Agreements">
        <people-search-table :columns="columns" :items="leadsData" class="p-6"/>
    </simple-card>
</template>

<script setup>
import PeopleSearchTable from './people-search-table.vue';
import { NewAgreementIcon, AddIcon } from "@/components/icons"
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
