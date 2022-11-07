<template>
    <div class="engage-calendar-events">
        <calendar-card />
        <engage-today-event />
    </div>
</template>
<style scoped>
.engage-calendar-events {
    @apply row-span-2 w-64 border border-secondary rounded p-2;
}
</style>
<script setup>
import CalendarCard from './calendar-card.vue'
import EngageTodayEvent from './engage-today-event.vue'
</script>
