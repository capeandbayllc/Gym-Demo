<template>
  <div class="engage-calendar-events">
    <calendar-card />
    <engage-today-event />
  </div>
</template>
<style scoped>
.engage-calendar-events {
  @apply row-span-2 border border-secondary rounded-3xl p-2;
}
</style>
<script setup>
import CalendarCard from "./calendar-card.vue";
import EngageTodayEvent from "./engage-today-event.vue";
</script>
