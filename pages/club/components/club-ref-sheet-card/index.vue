<template>
    <club-card :title-icon="ClubRefSheetIcon" title="Club Reference Sheet">
        <club-ref-sheet-list :columns="columns" :items="locationsData" />
    </club-card>
</template>
<script setup>
    import { ClubRefSheetIcon } from '~~/components/icons'
    import ClubCard from '../club-card.vue';
    import ClubRefSheetList from './club-ref-sheet-list.vue'
    import { useQuery } from '@vue/apollo-composable';
    import location from "~~/api/queries/location";

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

    const locationsData = ref([]);
    const { result } = useQuery(location.query.browse);
    watchEffect(()=>{
        if(!result?.value) return
        locationsData.value = result.value?.locations?.data;
    })
</script>