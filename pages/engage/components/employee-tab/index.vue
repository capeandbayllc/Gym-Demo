<template>
    <engage-calendar-events />
    <engage-sales-funnel />
    <engage-call-list />
    <engage-break-down />
</template>
<style scoped>
.engage-events {
    @apply row-span-2 w-64 border border-secondary rounded;
}
</style>
<script setup>
import EngageCalendarEvents from './engage-calendar-events.vue';
import EngageSalesFunnel from './engage-sales-funnel.vue';
import EngageCallList from './engage-call-list.vue';
import EngageBreakDown from './engage-break-down.vue';
</script>
