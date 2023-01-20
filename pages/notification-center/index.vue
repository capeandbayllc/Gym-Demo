<template>
    <div class="page-notification-center-container">
        <div class="-md:px-4 page-content flex-col">
            <notification-today-card></notification-today-card>
            <notification-leads-member-card></notification-leads-member-card>
            <notification-location-card></notification-location-card>
        </div>
    </div>
</template>
<style scoped>
.page-notification-center-container {
    @apply py-4 pr-5 w-full h-fit pl-16;
    .page-content {
        /* @apply border border-secondary bg-neutral rounded p-7 w-fit m-auto; */
        @apply block border border-secondary bg-neutral rounded p-7;
    }
}
</style>
<style>
</style>
<script setup>
import NotificationTodayCard from './components/notification-today-card.vue';
import NotificationLeadsMemberCard from './components/notification-leads-member-card.vue';
import NotificationLocationCard from './components/notification-location-card.vue';
</script>
