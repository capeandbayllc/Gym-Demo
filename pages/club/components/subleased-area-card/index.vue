<template>
    <club-card :title-icon="SubleasedAreaIcon" title="Subleased Areas">
        <subleased-area-list :clubItems="clubItems"></subleased-area-list>
    </club-card>
</template>
<script setup>
    import { SubleasedAreaIcon } from '~~/components/icons'
    import ClubCard from '../club-card.vue';
    import SubleasedAreaList from './subleased-area-list.vue';

    onMounted(async () => {
        await nextTick();
        window.dispatchEvent(new Event('resize'))
    });
    const clubItems = {
        club_name: 'Club #1234',
        building_manager: 'Mariah Berthington',
        assistant_building_manager: 'Alphie Hedgewick',
        location_info: {
            id:1,
            club_number: '#1234',
            address: '1234 Street Address',
            city: 'Cityville',
            state: 'Stateville',
            subleased_thumb: 'sublease.png',
            map_img: 'map.png',
        }
    };
</script>