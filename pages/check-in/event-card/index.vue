<template>
    <div class="event-card-container">
        <div class="scheduled-event-container">
            <div class="events-header">Scheduled Events</div>
            <div class="event-items" v-if="mock.scheduled.length">
                <div class="event-description">{{mock.scheduled[0].due}}</div>
                <div class="event-detail">
                    <div>{{mock.scheduled[0].title}}</div>
                    <book-checker v-model="form[mock.scheduled[0].id]"/>
                </div>
            </div>
        </div>
        <div class="events-header pt-8">Upcoming Events</div>
        <div class="event-description border-none">At your location</div>
        <div class="events-header pb-2">September</div>
        <event-list
            :data="mock.upcoming"
        />
    </div>
</template>
<style scoped>
.event-card-container {
    @apply w-80;
}
.event-card-container, .scheduled-event-container {
    @apply border border-secondary rounded flex flex-col p-3;
}
.upcoming-event-container {
    @apply flex flex-col space-y-4;
    .event-detail {
        @apply border-b border-secondary pb-2;
    }
}
.event-card-container {
    .events-header {
        @apply text-lg font-semibold;
    }
    .event-description {
        @apply text-xs font-semibold border-b border-secondary pb-2;
    }
    .event-detail {
        @apply flex flex-row justify-between items-center justify-between;
    }
    .event-items {
        @apply flex flex-col text-sm font-semibold space-y-2 w-full;
    }
}
</style>
<script setup>
import { ref } from 'vue'
import EventList from '../event-list.vue';
import BookChecker from '../book-checker.vue';
const mock = {
    scheduled: [{
        id: 1,
        title: 'Yoga',
        booked: true,
        due: "Monday 5:20 - 6:10"
    }],
    upcoming: [{
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
}

const form = ref({})
for (let item of [...mock.scheduled, ...mock.upcoming]) {
    form.value[item.id] = item.booked
}
</script>