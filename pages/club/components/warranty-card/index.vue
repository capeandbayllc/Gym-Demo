<template>
    <club-card :title-icon="WarrantyIcon" title="Warranties">
        <warranty-list :columns="columns" :items="items" />
    </club-card>
</template>
<script setup>
    import { WarrantyIcon } from '~~/components/icons'
    import ClubCard from '../club-card.vue';
    import WarrantyList from './warranty-list.vue';
    onMounted(async () => {
        await nextTick();
        window.dispatchEvent(new Event('resize'))
    });
    const columns = [
        {
            label: 'Type',
            class: 'text-secondary text-center w-[25%]'
        },
        {
            label: 'Company',
            class: 'text-secondary text-center w-[25%]',
        },
        {
            label: 'Expiration',
            class: 'text-secondary text-center w-[25%]'
        },
        {
            label: ' ',
            class: 'text-secondary text-center w-[25%]'
        }
    ];

    const items = [
        {
            id:1,
            type: 'Warranty',
            company: 'Name',
            expiration: {
                klass: 'bg-error bg-opacity-60',
                label: '2 days'
            },
        },
        {
            id:2,
            type: 'Warranty',
            company: 'Name',
            expiration: {
                klass: 'bg-error bg-opacity-60',
                label: '2 days'
            },
        },
        {
            id:3,
            type: 'Warranty',
            company: 'Name',
            expiration: {
                klass: 'bg-success bg-opacity-60',
                label: '3 months'
            },
        },
        {
            id:4,
            type: 'Warranty',
            company: 'Name',
            expiration: {
                klass: 'bg-success bg-opacity-60',
                label: '3 months'
            },
        },
        {
            id:5,
            type: 'Warranty',
            company: 'Name',
            expiration: {
                klass: 'bg-success bg-opacity-60',
                label: '3 months'
            },
        },
        {
            id:6,
            type: 'Warranty',
            company: 'Name',
            expiration: {
                klass: 'bg-success bg-opacity-60',
                label: '4 months'
            },
        },
        {
            id:7,
            type: 'Warranty',
            company: 'Name',
            expiration: {
                klass: 'bg-warning bg-opacity-60',
                label: '7 days'
            },
        },
        {
            id:8,
            type: 'Warranty',
            company: 'Name',
            expiration: {
                klass: 'bg-success bg-opacity-60',
                label: '3 months'
            },
        },
        {
            id:9,
            type: 'Warranty',
            company: 'Name',
            expiration: {
                klass: 'bg-error bg-opacity-60',
                label: '2 days'
            },
        },
        {
            id:10,
            type: 'Warranty',
            company: 'Name',
            expiration: {
                klass: 'bg-warning bg-opacity-60',
                label: '1 month'
            },
        },
    ];
</script>