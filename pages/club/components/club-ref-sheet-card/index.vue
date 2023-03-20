<template>
    <club-card :title-icon="ClubRefSheetIcon" title="Club Reference Sheet">
        <club-ref-sheet-list :columns="columns" :items="items" />
    </club-card>
</template>
<script setup>
    import { ClubRefSheetIcon } from '~~/components/icons'
    import ClubCard from '../club-card.vue';
    import ClubRefSheetList from './club-ref-sheet-list.vue'

    onMounted(async () => {
        await nextTick();
        window.dispatchEvent(new Event('resize'))
    });

    const columns = [
        {
            label: 'Location',
            class: 'text-secondary text-center w-[15%]'
        },
        {
            label: 'Address',
            class: 'text-secondary text-center w-[25%]',
        },
        {
            label: 'Phone',
            class: 'text-secondary text-center w-[15%]'
        },
        {
            label: 'Manager',
            class: 'text-secondary text-center w-[15%]'
        },
        {
            label: 'Assent Manager',
            class: 'text-secondary text-center w-[15%]'
        },
        {
            label: 'Member Total',
            class: 'text-secondary text-center w-[15%]'
        },
        {
            label: ' ',
            class: 'text-secondary text-center w-[15%]'
        }
    ];

    const items = [
        {
            id:1,
            location: 'Club #1234',
            address: '1234 Street Address',
            phone: '(123) 456-7890',
            manager: 'Manager Name',
            assent_manager: 'Manager Name',
            member_total: '12,345',
        },
        {
            id:2,
            location: 'Club #1234',
            address: '1234 Street Address',
            phone: '(123) 456-7890',
            manager: 'Manager Name',
            assent_manager: 'Manager Name',
            member_total: '12,345',
        },
        {
            id:3,
            location: 'Club #1234',
            address: '1234 Street Address',
            phone: '(123) 456-7890',
            manager: 'Manager Name',
            assent_manager: 'Manager Name',
            member_total: '12,345',
        },
        {
            id:4,
            location: 'Club #1234',
            address: '1234 Street Address',
            phone: '(123) 456-7890',
            manager: 'Manager Name',
            assent_manager: 'Manager Name',
            member_total: '12,345',
        },
        {
            id:5,
            location: 'Club #1234',
            address: '1234 Street Address',
            phone: '(123) 456-7890',
            manager: 'Manager Name',
            assent_manager: 'Manager Name',
            member_total: '12,345',
        },
        {
            id:6,
            location: 'Club #1234',
            address: '1234 Street Address',
            phone: '(123) 456-7890',
            manager: 'Manager Name',
            assent_manager: 'Manager Name',
            member_total: '12,345',
        },
        {
            id:7,
            location: 'Club #1234',
            address: '1234 Street Address',
            phone: '(123) 456-7890',
            manager: 'Manager Name',
            assent_manager: 'Manager Name',
            member_total: '12,345',
        },
        {
            id:8,
            location: 'Club #1234',
            address: '1234 Street Address',
            phone: '(123) 456-7890',
            manager: 'Manager Name',
            assent_manager: 'Manager Name',
            member_total: '12,345',
        },
        {
            id:9,
            location: 'Club #1234',
            address: '1234 Street Address',
            phone: '(123) 456-7890',
            manager: 'Manager Name',
            assent_manager: 'Manager Name',
            member_total: '12,345',
        },
        {
            id:10,
            location: 'Club #1234',
            address: '1234 Street Address',
            phone: '(123) 456-7890',
            manager: 'Manager Name',
            assent_manager: 'Manager Name',
            member_total: '12,345',
        },
    ];
</script>