<template>
    <club-card :title-icon="SubleasedAreaIcon" title="Subleased Areas">
sdffsd
    </club-card>
</template>
<script setup>
    import { SubleasedAreaIcon } from '~~/components/icons'
    import ClubCard from '../club-card.vue';
    onMounted(async () => {
        await nextTick();
        window.dispatchEvent(new Event('resize'))
    });
</script>