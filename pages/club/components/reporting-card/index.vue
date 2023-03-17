<template>
    <club-card :title-icon="ReportingIcon" title="Reporting">
sdffsd
    </club-card>
</template>
<script setup>
    import { ReportingIcon } from '~~/components/icons'
    import ClubCard from '../club-card.vue';
    onMounted(async () => {
        await nextTick();
        window.dispatchEvent(new Event('resize'))
    });
</script>