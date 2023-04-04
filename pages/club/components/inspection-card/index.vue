<template>
    <club-card :title-icon="InspectionIcon" title="Inspections">
        <inspection-list :clubItems="clubItems"></inspection-list>
    </club-card>
</template>
<script setup>
    import { InspectionIcon } from '~~/components/icons'
    import ClubCard from '../club-card.vue';
    import InspectionList from './inspection-list.vue';
    import {ref} from "vue";
    import { Switch, SwitchGroup, SwitchLabel } from '@headlessui/vue';
    import { request } from "~/api/utils/request";
    import location from "~~/api/queries/location";

    const filters = ref({
        location: false,
        type: false,
        alert: false,
        segments: false
    })
    onMounted(async () => {
        await nextTick();
        window.dispatchEvent(new Event('resize'))
    });
    const clubItems = ref({
        club_name: '',
        items: [
            {
                id:1,
                name: 'Incident Reports',
                quantity: 2,

            },
            {
                id:2,
                name: 'Club Inspections',
                quantity: 12,
            },
            {
                id:3,
                name: 'Maintenance Inspections',
                quantity: 3,
            },
            {
                id:4,
                name: 'Safety Inspections',
                quantity: 4,
            },
            {
                id:5,
                name: 'Performance Plans',
                quantity: 3,
            },
        ]
    });

    const locationData = ref(null);
    request(location.query.browse, { first: 1 }).then(({data}) => {
        locationData.value = data.data.locations.data[0];
        clubItems.value.club_name = locationData.value.name;
    });
</script>