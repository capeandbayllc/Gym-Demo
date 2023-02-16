<template>
    <simple-card class="checkin-calendar-card" :closable="true" title="Calendar">
        <div class="flex flex-col md:flex-row py-6 px-9 md:gap-2 gap-12 justify-center card-gradient-bg">
            <h2 class="text-lg">Serivce/Events</h2>
            <calendar-card class="my-8 mx-8"/>
            <div class="px-0 md:px-3 mt-8">
                <div class="text-lg font-semibold">Today: September 20, 2022</div>
                <div class="text-3xl py-4">September</div>
                <event-list
                    :data="data"
                    class="lg:w-80 w-full"
                />
            </div>
        </div>
    </simple-card>
</template>
<style scoped>
.checkin-calendar-card {
    @apply m-auto bg-neutral max-w-[1120px] xl:w-[1120px] w-full ;
    
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