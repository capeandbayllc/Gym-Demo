<template>
    <div class="pb-5 pt-4 mx-auto w-full px-10 max-w-[1600px]">
        <div class="pl-10 pr-4 mb-2 flex justify-content">
            <div class="flex flex-auto">Goals</div>
        </div>
        <div class="page-content gap-5">
            <notification-today-card></notification-today-card>
            <notification-leads-member-card></notification-leads-member-card>
            <notification-location-card></notification-location-card>
        </div>
    </div>
</template>
<style scoped lang="postcss">
.page-content {
    @apply p-6 border-secondary border-2 rounded-[26px] bg-secondary-focus max-w-[85vw];
}
</style>
<style></style>
<script setup>
import NotificationTodayCard from './components/notification-today-card.vue';
import NotificationLeadsMemberCard from './components/notification-leads-member-card.vue';
import NotificationLocationCard from './components/notification-location-card.vue';
</script>
