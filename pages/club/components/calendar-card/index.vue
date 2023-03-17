<template>
    <club-card :title-icon="CalendarIcon" title="Calendars">
sdffsd
    </club-card>
</template>
<script setup>
    import { CalendarIcon } from '~~/components/icons'
    import ClubCard from '../club-card.vue';
    onMounted(async () => {
        await nextTick();
        window.dispatchEvent(new Event('resize'))
    });
</script>