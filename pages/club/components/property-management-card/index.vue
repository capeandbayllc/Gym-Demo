<template>
    <club-card :title-icon="PropertyManagementIcon" title="Property Management">
        <property-list :columns="columns" :items="items"></property-list>
    </club-card>
</template>
<script setup>
    import { PropertyManagementIcon } from '~~/components/icons'
    import ClubCard from '../club-card.vue';
    import PropertyList from './property-list.vue';
    onMounted(async () => {
        await nextTick();
        window.dispatchEvent(new Event('resize'))
    });

    const columns = [
        {
            label: 'Location',
            class: 'text-secondary text-center w-[30%]'
        },
        {
            label: 'Address',
            class: 'text-secondary text-center w-[40%]',
        },
        {
            label: 'Manager',
            class: 'text-secondary text-center w-[30%]'
        },
    ];

    const items = [
        {
            id:1,
            location: 'Club #1234',
            address: '1234 Street Address',
            manager: 'Name',
        },
        {
            id:2,
            location: 'Club #1234',
            address: '1234 Street Address',
            manager: 'Name',
        },
        {
            id:3,
            location: 'Club #1234',
            address: '1234 Street Address',
            manager: 'Name',
        },
        {
            id:4,
            location: 'Club #1234',
            address: '1234 Street Address',
            manager: 'Name',
        },
        {
            id:5,
            location: 'Club #1234',
            address: '1234 Street Address',
            manager: 'Name',
        },
        {
            id:6,
            location: 'Club #1234',
            address: '1234 Street Address',
            manager: 'Name',
        },
    ];

</script>