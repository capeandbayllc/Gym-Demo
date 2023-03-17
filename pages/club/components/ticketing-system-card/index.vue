<template>
    <club-card :title-icon="TicketingSystemIcon" title="Ticketing System">
        <ticket-list :columns="columns" :items="items"></ticket-list>
    </club-card>
</template>
<script setup>
    import { TicketingSystemIcon } from '~~/components/icons'
    import ClubCard from '../club-card.vue';
    import TicketList from './ticket-list.vue';
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
            label: 'Assignee',
            class: 'text-secondary text-center w-[25%]',
        },
        {
            label: 'Status',
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
            type: 'Alert Type',
            assignee: 'Aya B.',
            status: {
                klass: 'bg-error bg-opacity-60',
                label: 'Open'
            },
        },
        {
            id:2,
            type: 'Alert Type',
            assignee: 'Sty S.',
            status: {
                klass: 'bg-default bg-opacity-60',
                label: 'Open'
            },
        },
        {
            id:3,
            type: 'Alert Type',
            assignee: 'Henry O.',
            status: {
                klass: 'bg-success bg-opacity-60',
                label: 'Resolved'
            },
        },
        {
            id:4,
            type: 'Alert Type',
            assignee: 'Butch F.',
            status: {
                klass: 'bg-success bg-opacity-60',
                label: 'Resolved'
            },
        },
        {
            id:5,
            type: 'Alert Type',
            assignee: 'Max S.',
            status: {
                klass: 'bg-success bg-opacity-60',
                label: 'Resolved'
            },
        },
    ];
</script>