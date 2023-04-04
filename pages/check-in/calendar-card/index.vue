<template>
    <simple-card class="checkin-calendar-card" :closable="true" title="Calendar">
        <div class="calendar-card-body card-gradient-bg">

            <GrCalendar v-if="getFormattedEvents.length || events.length"
                :events="getFormattedEvents"
                @clickEventNode="handleCalendarEvent"
            ></GrCalendar>
            <div v-else
                class="h-[76vh] flex flex-col justify-center"
            >
                <spinner />
            </div>
            
        </div>
    </simple-card>
    <div
        class="fixed top-0 left-0 h-screen w-screen flex items-center justify-center bg-[#fff]/[0.1] backdrop-blur-sm calendar-style-transition"
        :class="{
            'z-50 opacity-100': eventDetailsVisibibility,
            '-z-50 opacity-0': !eventDetailsVisibibility,
        }"
    >
        <EventDetails
            :event="eventDetails"
            @cancel="resetState"
            @seemore="showMoreDetails"
            @offerup="showOfferUp"
        />
    </div>
</template>
<style scoped>
.checkin-calendar-card {
    @apply m-auto bg-neutral max-w-[1120px] xl:w-[1120px] w-full ;
    .calendar-card-body {
        @apply flex flex-col md:flex-row py-6 px-9 md:gap-2 gap-12 justify-center;
    }
    
}
</style>
<script setup>

import "@vuepic/vue-datepicker/dist/main.css";
import gql from "graphql-tag";
import { useQuery } from "@vue/apollo-composable";
import user from "~/api/queries/user";
import { request } from "~/api/utils/request";
import EventDetails from "~/pages/calendar/components/partials/event-details.vue";
import GrCalendar from "./components/gr-calendar.vue";


const props = defineProps({
   user: {
		type: Object
	},
})

const query = gql`
    query CalendarEventsQuery {
        calendarEventTypes {
            data {
                id
                name
                description
                color
                type
            }
        }
        calendarEvents {
            id
            title
            owner_id
            color
            start
            end
            title
            description
            full_day_event
            event_type_id
            location_id
            location {
                id
                name
            }
            type {
                id
                name
                description
                color
                type
            }
            attendees {
                id
                entity_id
            }
        }
    }
`;

const events = ref([]);

const { result } = await useQuery(query);

const getFormattedEvents = computed(() => {
    let formattedEvents = [];
    for (let event of getFilteredEvents.value) {
        formattedEvents.push({
            title: event.title,
            start: event.start,
            end: event.end,
            allDay: event.full_day_event,
            backgroundColor: event.color,
            extendedProps: {
                users: [...event.attendees],
                description: event.description,
                color: event.color,
                instructor: event.owner,
                location: event.location,
                attendees: event.attendees,
            },
        });
    }

    return formattedEvents;
});

const getFilteredEvents = computed(() => {

    let filteredEvents = [];

    for (let event of events.value) {
        if(event.owner_id == props.user.id){
            filteredEvents.push(event);
        }
    }

    return filteredEvents;
});

watchEffect(() => {
    if(!result.value) return;
    console.log("GQL Result:", result.value);
    let tempEventsContainer = [...result.value.calendarEvents];

    for (let event of tempEventsContainer) {
        request(user.query.findById, { id: event.owner_id }).then(
            ({ data }) => {
                events.value.push({
                    ...event,
                    owner: data.data.user,
                    attendees: event.attendees.map((attendeeId) => ({
                        id: attendeeId,
                        name: null,
                        email: null,
                        phone: null,
                        profile_photo_path: null,
                    })),
                });
            }
        );
    }
});


const eventFormVisibility = ref(false);
const eventDetails = ref();
const eventDetailsVisibibility = ref(false);

const handleCalendarEvent = (e) => {
    if (eventFormVisibility.value) return; // don't proceed if something else is in context
    let eventInfo = {
        ...e._def,
        start: e._instance.range.start,
        end: e._instance.range.end,
    };
    eventDetails.value = eventInfo;
    eventDetailsVisibibility.value = true;
};

</script>