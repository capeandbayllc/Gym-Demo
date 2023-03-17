<template>
    <club-card :title-icon="EquipmentIcon" title="Equipment">
sdffsd
    </club-card>
</template>
<script setup>
    import { EquipmentIcon } from '~~/components/icons'
    import ClubCard from '../club-card.vue';
    onMounted(async () => {
        await nextTick();
        window.dispatchEvent(new Event('resize'))
    });
</script>