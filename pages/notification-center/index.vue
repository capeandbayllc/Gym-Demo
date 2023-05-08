<template>
  <div class="pb-5 pt-4 mx-auto w-full pr-4 pl-1 lg:pr-12 max-w-[1600px]">
    <div class="page-content gap-5">
      <notification-today-card></notification-today-card>
      <notification-leads-member-card></notification-leads-member-card>
      <notification-location-card></notification-location-card>
    </div>
  </div>
</template>
<style scoped lang="postcss">
.page-content {
  @apply p-6 border-secondary border-2 rounded-[26px] bg-secondary-focus max-w-[1020px];
}
</style>
<style></style>
<script setup>
import NotificationTodayCard from "./components/notification-today-card.vue";
import NotificationLeadsMemberCard from "./components/notification-leads-member-card.vue";
import NotificationLocationCard from "./components/notification-location-card.vue";
</script>
