<template>
    <club-card :title-icon="EquipmentIcon" title="Equipment">
        <equipment-list :clubItems="clubItems"></equipment-list>
    </club-card>
</template>
<script setup>
    import { EquipmentIcon } from '~~/components/icons'
    import ClubCard from '../club-card.vue';
    import EquipmentList from './equipment-list.vue';
    onMounted(async () => {
        await nextTick();
        window.dispatchEvent(new Event('resize'))
    });
    const clubItems = {
        club_name: 'Club #1234',
        items: [
            {
                id:1,
                type: 'Treadmills',
                quantity: 25,

            },
            {
                id:2,
                type: 'Stationary Bikes',
                quantity: 20,
            },
            {
                id:3,
                type: 'Ellipticals',
                quantity: 25,
            },
            {
                id:4,
                type: 'Stairmasters',
                quantity: 15,
            },
            {
                id:5,
                type: 'Dumbbel Sets',
                quantity: 30,
            },
        ]
    };
</script>