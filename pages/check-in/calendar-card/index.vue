<template>
  <simple-card class="checkin-calendar-card" :closable="true" title="Calendar">
    <div class="calendar-card-body card-gradient-bg">
      <GrCalendar
        class="bg-gradient-to-b from-secondary/80 to-black w-full rounded-[20px] border-secondary border-[2px] max-w-[1200px]"
        v-if="getFormattedEvents.length || events.length || !eventsIsLoading"
        :events="[...getFormattedEvents]"
        :show-date-title="true"
        @clickEventNode="handleCalendarEvent"
        @clickEmptyNode="handleAddNew"
      >
      </GrCalendar>
      <div v-else class="h-[76vh] flex flex-col justify-center">
        <spinner />
      </div>
    </div>
  </simple-card>
  <div
    class="fixed top-0 left-0 h-screen w-screen flex items-center justify-center bg-[#fff]/[0.1] backdrop-blur-sm calendar-style-transition"
    :class="{
      'z-50 opacity-100': eventFormVisibility,
      '-z-50 opacity-0': !eventFormVisibility,
    }"
  >
    <EventForm
      @cancel="resetState"
      @createEvent="handleCreateEvent"
      :members="members"
      :employees="employees"
      :nodeContext="emptyNodeContext"
    />
  </div>
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
  <EventInformation
    :event="eventDetails"
    :eventInformationVisibibility="eventInformationVisibibility"
    :eventIsLoading="eventIsLoading"
    @outclick="resetState"
    @cancel="resetState"
  />
  <OfferUp
    :event="eventDetails"
    :showOfferUp="offerUpVisibibility"
    :employees="employees"
    @cancel="resetState"
  />
</template>
<style scoped lang="postcss">
.checkin-calendar-card {
  @apply m-auto bg-neutral max-w-[1120px] xl:w-[1120px] w-full;

  .calendar-card-body {
    @apply flex flex-col md:flex-row py-6 px-9 md:gap-2 gap-12 justify-center;
  }
}
</style>
<script setup>
import "@vuepic/vue-datepicker/dist/main.css";
import { useQuery } from "@vue/apollo-composable";
import userQuery from "~/api/queries/user";
import { request } from "~/api/utils/request";
import EventDetails from "~/pages/calendar/components/partials/event-details.vue";
import GrCalendar from "~/pages/calendar/components/gr-calendar.vue";
import OfferUp from "~/pages/calendar/components/partials/offer-up.vue";
import EventInformation from "~/pages/calendar/components/partials/event-information.vue";
import EventForm from "~/pages/calendar/components/event-form.vue";
import calendarEventsQuery from "~~/api/queries/calendarEvent";

const props = defineProps({
  user: {
    type: Object,
  },
});

const events = ref([]);
const employees = ref([]);
const members = ref([]);
const eventsIsLoading = ref(true);

const { result } = await useQuery(calendarEventsQuery.query.browse_by_user, {
  param: { viewUser: props.user.id },
});

const getFormattedEvents = computed(() => {
  let formattedEvents = [];
  for (let event of events.value) {
    formattedEvents.push({
      title: event.title,
      start: event.start,
      end: event.end,
      allDay: event.full_day_event,
      backgroundColor: event.color,
      extendedProps: {
        users: [...event.attendees],
        owner_id: event.owner_id,
        description: event.description,
        color: event.color,
        location: event.location,
        attendees: event.attendees,
      },
    });
  }

  return formattedEvents;
});

watchEffect(() => {
  if (!result.value) return;
  console.log("GQL Result:", result.value);
  members.value = result.value.members.data;
  let tempEventsContainer = [...result.value.calendarEvents];
  employees.value = [];
  for (let employee of result.value.employee.data) {
    employees.value.push({
      ...employee,
      name: `${employee.first_name} ${employee.last_name}`,
      id: employee.user_id,
    });
  }

  let tempEvents = [];
  for (let event of tempEventsContainer) {
    tempEvents.push({
      ...event,
      attendees: event.attendees.map((attendeeId) => ({
        id: attendeeId,
        name: null,
        email: null,
        phone: null,
        profile_photo_path: null,
      })),
    });
  }

  events.value = tempEvents;
  eventsIsLoading.value = false;
});

const eventFormVisibility = ref(false);
const eventDetails = ref();
const eventDetailsVisibibility = ref(false);
const eventInformationVisibibility = ref(false);
const offerUpVisibibility = ref(false);
const eventIsLoading = ref(true);
const emptyNodeContext = ref(null);

const resetState = () => {
  eventDetailsVisibibility.value = false;
  eventInformationVisibibility.value = false;
  offerUpVisibibility.value = false;
  eventFormVisibility.value = false;
  eventIsLoading.value = true;
};

const handleAddNew = (node) => {
  if (eventDetailsVisibibility.value || eventInformationVisibibility.value) {
    return;
  } else {
    const startTime = new Date(node.date);

    emptyNodeContext.value = {
      start: startTime,
      dateStr: node.dateStr,
      allDay: node.allDay,
      dayEl: node.dayEl,
      jsEvent: node.jsEvent,
      view: node.view,
    };
    resetState();
    eventFormVisibility.value = true;
  }
};

const showOfferUp = () => {
  resetState();
  offerUpVisibibility.value = true;
};

const showMoreDetails = async () => {
  resetState();
  eventInformationVisibibility.value = true;

  for (let attendee of eventDetails.value.extendedProps.users) {
    const { data } = await request(userQuery.query.findById, {
      id: attendee.id.entity_id,
    });
    attendee.name = `${data.data.user.first_name} ${data.data.user.last_name}`;
    attendee.email = data.data.user.email;
    attendee.phone = data.data.user.phone;
    attendee.profile_photo_path = data.data.user.profile_photo_path;
  }

  eventIsLoading.value = false;
};

const getDateTimeString = (date) => {
  const year = date.getFullYear();
  const month =
    date.getMonth() < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
  const dateNum = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
  const hour = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
  const min =
    date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();

  return `${year}-${month}-${dateNum} ${hour}:${min}:00`;
};

const handleCreateEvent = (form) => {
  const newEventObj = {
    ...events.value[0],
    attendees: [],

    title: form.title,
    description: form.description,
    start: getDateTimeString(
      new Date(`${form.start.date} ${!form.allDay ? form.start.time : ""}`)
    ),
    end: getDateTimeString(
      new Date(
        `${form.end.date} ${!form.allDay ? form.end.time : "11:59:59 PM"}`
      )
    ),
    full_day_event: form.allDay,
  };

  events.value.push(newEventObj);
  eventFormVisibility.value = false;
};

const handleCalendarEvent = (e) => {
  request(userQuery.query.findById, { id: e._def.extendedProps.owner_id }).then(
    ({ data }) => {
      e._def.extendedProps = {
        ...e._def.extendedProps,
        instructor: data.data.user,
      };
      if (eventFormVisibility.value) return; // don't proceed if something else is in context
      let eventInfo = {
        ...e._def,
        start: e._instance.range.start,
        end: e._instance.range.end,
      };
      eventDetails.value = eventInfo;
      eventDetailsVisibibility.value = true;
    }
  );
};
</script>
