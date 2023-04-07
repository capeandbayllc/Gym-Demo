<template>
    <club-card :title-icon="SubleasedAreaIcon" title="Subleased Areas">
        <subleased-area-list :clubItems="clubItems"></subleased-area-list>
    </club-card>
</template>
<script setup>
    import { SubleasedAreaIcon } from '~~/components/icons'
    import ClubCard from '../club-card.vue';
    import SubleasedAreaList from './subleased-area-list.vue';
    import { useQuery } from "@vue/apollo-composable";
    import location from "~~/api/queries/location";

    onMounted(async () => {
        await nextTick();
        window.dispatchEvent(new Event('resize'))
    });
    const clubItems = ref({
        club_name: '',
        building_manager: 'Mariah Berthington',
        assistant_building_manager: 'Alphie Hedgewick',
        location_info: {
            id:1,
            club_number: '#1234',
            address: '1234 Street Address',
            city: 'Cityville',
            state: 'Stateville',
            subleased_thumb: '/sublease.png',
            map_img: '/map.png',
        }
    });

    const locationData = ref(null);
    const { result } = useQuery(location.query.browse, { first: 1 });
    watch(result, () => {
        locationData.value = result.value.locations.data[0];
        clubItems.value.club_name = locationData.value.name;
    });
</script>