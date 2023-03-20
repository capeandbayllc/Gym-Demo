<template>
    <club-card :title-icon="InventoryManagementIcon" title="Inventory Management">
        <inventory-list :columns="columns" :items="items"></inventory-list>
    </club-card>
</template>
<script setup>
    import { InventoryManagementIcon } from '~~/components/icons'
    import ClubCard from '../club-card.vue';
    import InventoryList from './inventory-list.vue';
    onMounted(async () => {
        await nextTick();
        window.dispatchEvent(new Event('resize'))
    });

    const columns = [
        {
            label: 'Item',
            class: 'text-secondary text-center w-[30%]'
        },
        {
            label: 'Quantity',
            class: 'text-secondary text-center w-[30%]',
        },
        {
            label: 'Item Number',
            class: 'text-secondary text-center w-[40%]'
        },
    ];

    const items = [
        {
            id:1,
            name: 'Water',
            quantity: 2,
            item_number: '#123456789',
        },
        {
            id:2,
            name: 'Juice',
            quantity: 4,
            item_number: '#123456789',
        },
        {
            id:3,
            name: 'Granola Bars',
            quantity: 23,
            item_number: '#123456789',
        },
        {
            id:4,
            name: 'Sports Drink',
            quantity: 34,
            item_number: '#123456789',
        },
        {
            id:5,
            name: 'Bandaids',
            quantity: 45,
            item_number: '#123456789',
        },
        {
            id:6,
            name: 'Towels',
            quantity: 51,
            item_number: '#123456789',
        },
    ];
</script>