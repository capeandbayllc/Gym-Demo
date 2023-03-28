<template>
    <div>
        <member-search-list :columns="columns" :items="membersData" filter="id" />
    </div>
</template>
<script setup>
import MemberSearchList from './member-search-list.vue';
const props = defineProps({
    filter: {
        type : String,
        default : null
    }
});
const columns = [
    {
        label: 'Name',
        class: 'text-secondary text-center w-[25%]',
    },
    {
        label: 'Location',
        class: 'text-secondary text-center w-[15%]'
    },
    {
        label: 'Membership Type',
        class: 'text-secondary text-center w-[15%]'
    },
    {
        label: 'Assessment Status',
        class: 'text-secondary text-center w-[15%]'
    },
    {
        label: 'Date sent',
        class: 'text-secondary text-center w-[15%]'
    },
    {
        label: ' ',
        class: 'text-secondary text-center w-[15%]'
    }
];
const membersData = [
    {
        id: 1,
        name: 'Aya Buchanan',
        location: 'Club#1234',
        type: 'Premium',
        status: 'Pending',
        date: '02/01/2023',
        img_url: 'checkin/avatar_random.jpg'
    },
    {
        id: 2,
        name: 'Sty Stance',
        location: 'Club#1234',
        type: 'Basic',
        status: 'Completed',
        date: '02/01/2023',
        img_url: 'chat-conversation/2.png'
    },
    {
        id: 3,
        name: 'Aya Buchanan',
        location: 'Club#1234',
        type: 'Premium',
        status: 'Completed',
        date: '02/01/2023',
        img_url: 'chat-conversation/3.png'
    },
    {
        id: 4,
        name: 'Sty Stance',
        location: 'Club#1234',
        type: 'Basic',
        status: 'Pending',
        date: '02/01/2023',
        img_url: 'chat-conversation/4.png'
    },
    {
        id: 5,
        name: 'Henny Owens',
        location: 'Club#1234',
        type: 'Premium',
        status: 'Completed',
        date: '02/01/2023',
        img_url: 'chat-conversation/5.png'
    },
    {
        id: 6,
        name: 'Butch Eierra',
        location: 'Club#1234',
        type: 'Premium',
        status: 'Pending',
        date: '02/01/2023',
        img_url: 'chat-conversation/1.png'
    },
];
</script>