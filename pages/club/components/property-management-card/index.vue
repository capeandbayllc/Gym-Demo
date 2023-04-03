<template>
    <club-card :title-icon="PropertyManagementIcon" title="Property Management">
        <property-list :columns="columns" :items="items"></property-list>
    </club-card>
</template>
<script setup>
    import { PropertyManagementIcon } from '~~/components/icons'
    import ClubCard from '../club-card.vue';
    import PropertyList from './property-list.vue';
    import {request} from "~/api/utils/request";
    import location from "~/api/queries/location";

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

    const items = ref([
        {
            id:1,
            location: '',
            address: '1234 Street Address',
            manager: 'Name',
        },
        {
            id:2,
            location: '',
            address: '1234 Street Address',
            manager: 'Name',
        },
        {
            id:3,
            location: '',
            address: '1234 Street Address',
            manager: 'Name',
        },
        {
            id:4,
            location: '',
            address: '1234 Street Address',
            manager: 'Name',
        },
        {
            id:5,
            location: '',
            address: '1234 Street Address',
            manager: 'Name',
        },
        {
            id:6,
            location: '',
            address: '1234 Street Address',
            manager: 'Name',
        },
    ]);

    const locationData = ref(null);
    request(location.query.get, { id: 'afea5d32-ec62-480d-af29-d67fc8c9c7a3' }).then(({data}) => {
        locationData.value = data.data.location;
        items.value.forEach(e => {
            e.location = locationData.value.name;
        });
    });

</script>