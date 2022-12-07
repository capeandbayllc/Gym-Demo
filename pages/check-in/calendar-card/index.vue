<template>
    <simple-card class="checkin-calendar-card" :closable="true" title="Calendar">
        <div class="flex flex-col lg:flex-row py-6 sm:px-9 gap-12">
            <calendar-card />
            <div class="px-9">
                <div class="text-lg font-semibold">Today: September 20, 2022</div>
                <div class="text-3xl py-4">September</div>
                <event-list
                    :data="data"
                    class="w-80 sm:w-full"
                />
            </div>
        </div>
    </simple-card>
</template>
<style scoped>
.checkin-calendar-card {
    @apply m-auto bg-neutral;
    @screen -sm {
        margin: 20px 40px 19px 83px;
    }
}
</style>
<script setup>
import CalendarCard from '@/pages/dashboard/components/calendar-card/index.vue'
import EventList from '../event-list.vue';
const data = [{
    id: 2,
    title: 'Yoga',
    booked: false,
    due: "Monday 5:20 - 6:10"
}, {
    id: 3,
    title: 'PT Training',
    booked: false,
    due: "Monday 6:30 - 6:40"
},  {
    id: 4,
    title: 'Yoga',
    booked: false,
    due: "Tuesday 6:30 - 6:40"
}]
</script>