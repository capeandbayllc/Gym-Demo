<template>
    <div
        class="event-card-container to-primary/10 bg-gradient-to-t from-base-300/90 font-extralight tracking-wide"
    >
        <div class="scheduled-event-container">
            <div class="events-header font-normal">Scheduled Events</div>
            <div class="event-items" v-if="mock.scheduled.length">
                <div class="event-description">{{ mock.scheduled[0].due }}</div>
                <div class="event-detail">
                    <div>{{ mock.scheduled[0].title }}</div>
                    <book-checker v-model="form[mock.scheduled[0].id]" />
                </div>
            </div>
        </div>
        <div class="events-header pt-8 font-normal">Classes</div>
        <div class="event-description border-none">At your location</div>
        <div class="events-header pb-2">December</div>
        <event-list
            :data="mock.upcoming"
            class="max-h-[15rem] lg:max-h-[26rem] xl:max-h-[15rem] overflow-auto"
        />
    </div>
</template>
<style scoped lang="postcss">
.event-card-container {
    @apply w-[33%] -md:w-full flex-grow-0 bg-base-300/40 !rounded-3xl;
}
.event-card-container,
.scheduled-event-container {
    @apply border border-secondary rounded-2xl flex flex-col p-3;
}
.upcoming-event-container {
    @apply flex flex-col space-y-4;
    .event-detail {
        @apply border-b border-secondary pb-2;
    }
}
.event-card-container {
    .events-header {
        @apply text-lg;
    }
    .event-description {
        @apply text-xs  border-b border-secondary pb-2;
    }
    .event-detail {
        @apply flex flex-row justify-between items-center;
    }
    .event-items {
        @apply flex flex-col text-sm space-y-2 w-full;
    }
}
</style>
<script setup>
import { ref } from "vue";
import EventList from "../event-list.vue";
import BookChecker from "../book-checker.vue";
const mock = {
    scheduled: [
        {
            id: 1,
            title: "Yoga",
            booked: true,
            due: "Monday, Dec. 20 5:20pm - 6:10pm",
        },
    ],
    upcoming: [
        {
            id: 2,
            title: "Yoga",
            booked: false,
            due: "Monday 5:30pm - 6:40pm",
        },
        {
            id: 3,
            title: "PT Training",
            booked: false,
            due: "Monday 5:30pm - 6:40pm",
        },
        {
            id: 4,
            title: "Yoga",
            booked: false,
            due: "Tuesday 10:30am - 11:10am",
        },
        {
            id: 5,
            title: "Yoga",
            booked: false,
            due: "Tuesday 5:30pm - 6:40pm",
        },
        {
            id: 6,
            title: "PT Training",
            booked: false,
            due: "Tuesday 5:30pm - 6:40pm",
        },
        {
            id: 7,
            title: "PT Training",
            booked: false,
            due: "Wednesday 10:30am - 11:10am",
        },
        {
            id: 8,
            title: "Yoga",
            booked: false,
            due: "Wednesday 5:30pm - 6:40pm",
        },
    ],
};

const form = ref({});
for (let item of [...mock.scheduled, ...mock.upcoming]) {
    form.value[item.id] = item.booked;
}
</script>
