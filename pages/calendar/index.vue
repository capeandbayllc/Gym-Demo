<template>
  <div class="px-8 w-full h-fit">
    <!-- main content wrapper  -->
    <div
      class="border border-secondary bg-base-100/[0.9] rounded-3xl p-7 max-w-none flex gap-4"
    >
      <!-- left sidebar -->
      <div class="flex flex-col gap-5 font-light !text-[0.8rem] w-[220px]">
        <Datepicker
          class="calendar-date-picker"
          menu-class-name="!bg-transparent !border-none"
          :day-class="getDayClass"
          month-name-format="long"
          inline
          auto-apply
          :enable-time-picker="false"
          dark
          :start-date="`2022-12-01`"
        />
        <CalendarFilterLayout
          :title="'Locations'"
          :isOpen="filterOptions.locations.isOpen"
          :selected="filterOptions.locations.selected"
          :filter_id="`locations`"
          :options="locations"
          :selectOption="selectOption"
          :toggleFilterOption="toggleFilterOption"
        />
        <CalendarFilterLayout
          :title="'Employees'"
          :isOpen="filterOptions.employees.isOpen"
          :selected="filterOptions.employees.selected"
          :filter_id="`employees`"
          :options="employees"
          :selectOption="selectOption"
          :toggleFilterOption="toggleFilterOption"
        />
        <CalendarFilterLayout
          :title="'Events'"
          :isOpen="filterOptions.event_types.isOpen"
          :selected="filterOptions.event_types.selected"
          :filter_id="`event_types`"
          :options="event_types"
          :selectOption="selectOption"
          :toggleFilterOption="toggleFilterOption"
        />
      </div>

      <section class="w-full !font-light !tracking-wider">
        <!-- main section heading area -->
        <div class="flex justify-between items-center w-full">
          <h1 class="font-light text-xl my-auto w-full">December 2022</h1>
          <!-- filters/page actions -->
          <div class="flex gap-2 w-full justify-end">
            <button
              @click="handleAddNew"
              class="hover:bg-secondary px-5 py-1.5 rounded-xl border-2 border-secondary flex items-center gap-2 font-light text-[0.8rem] calendar-style-transition"
            >
              <span class="!font-light !tracking-wider">Add New </span>
              <PlusIcon class="w-4 fill-base-content" />
            </button>
            <input placeholder="Search" class="search-input" type="text" />
          </div>
        </div>
        <GrCalendar
          :events="getFormattedEvents"
          :filterOptions="filterOptions"
          :calendarViewOptions="calendarViewOptions"
          @clickEventNode="handleCalendarEvent"
          @clickEmptyNode="handleAddNew"
          v-if="getFormattedEvents.length || events.length"
        />
        <div
          class="h-[76vh] flex flex-col justify-center"
          v-if="events.length === 0"
        >
          <spinner />
        </div>
      </section>
    </div>
  </div>
  <div
    class="fixed top-0 left-0 h-screen w-screen flex items-center justify-center bg-base-content/[0.1] backdrop-blur-sm calendar-style-transition"
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
    class="fixed top-0 left-0 h-screen w-screen flex items-center justify-center bg-base-content/[0.1] backdrop-blur-sm calendar-style-transition"
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
<script setup>
import { PlusIcon } from "~~/components/icons";
import "@fullcalendar/core/vdom"; // solves problem with Vite (hot reload related - not necessary on production)
import { isEqual, set } from "date-fns";
import "@fullcalendar/core/vdom"; // solves problem with Vite
import "@vuepic/vue-datepicker/dist/main.css";
import { query } from "./queries/queries";
import { useQuery } from "@vue/apollo-composable";
import CalendarFilterLayout from "./components/partials/calendar-filter-layout.vue";

import EventDetails from "./components/partials/event-details.vue";
import EventInformation from "./components/partials/event-information.vue";
import Datepicker from "@vuepic/vue-datepicker";
import EventForm from "./components/event-form.vue";

// import "@vuepic/vue-datepicker/dist/main.css";
// import { calendarEvents as events } from "./helpers/calendar-events";
import GrCalendar from "./components/gr-calendar.vue";
import OfferUp from "./components/partials/offer-up.vue";
import user from "~/api/queries/user";
import { request } from "~/api/utils/request";

/** Component State */
const initialized = ref(false);
// const eventDetails = ref({ extendedProps: {} }); // Currently selected event context
const eventDetails = ref(); // Currently selected event context
const emptyNodeContext = ref(null); // information about the empty node that was most recently clicked

/** Component Visibility State */
const eventDetailsVisibibility = ref(false);
const eventInformationVisibibility = ref(false);
const eventIsLoading = ref(true);
const offerUpVisibibility = ref(false);
const eventFormVisibility = ref(false);
const filterOptions = ref({
  employees: {
    isOpen: false,
    selected: [],
  },
  locations: {
    isOpen: false,
    selected: [],
  },
  event_types: {
    isOpen: false,
    selected: [],
  },
});

const eventTypes = ref([]);
const employees = ref([]);
const members = ref([]);
const leads = ref([]);
const locations = ref([]);
const event_types = ref([]);
const events = ref([]);
const calendarViewOptions = ref([
  {
    name: "Club",
    list: [
      { name: "Club #1" },
      { name: "Club #2" },
      { name: "Club #3" },
      { name: "Club #4" },
      { name: "Club #5" },
    ],
  },
  {
    name: "Employees",
    children: [
      {
        name: "Trainers",
        list: [
          { name: "Jeff" },
          { name: "Sam" },
          { name: "Alex" },
          { name: "Ruth" },
        ],
      },
      {
        name: "Staff",
        list: [
          { name: "Not Jeff" },
          { name: "Not Sam" },
          { name: "Not Alex" },
          { name: "Not Ruth" },
        ],
      },
      {
        name: "Management",
        list: [
          { name: "Some Other Jeff" },
          { name: "Some Other Sam" },
          { name: "Some Other Alex" },
          { name: "Some Other Ruth" },
        ],
      },
    ],
  },
]);

const resetState = () => {
  eventDetailsVisibibility.value = false;
  eventInformationVisibibility.value = false;
  offerUpVisibibility.value = false;
  eventFormVisibility.value = false;
  eventIsLoading.value = true;
};

/** sets up state for form entry */
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

const { result } = useQuery(query);

const handleCreateEvent = (form) => {
  filterOptions.value.employees.isOpen = !filterOptions.value.employees.isOpen;
  filterOptions.value.locations.isOpen = !filterOptions.value.locations.isOpen;
  filterOptions.value.event_types.isOpen =
    !filterOptions.value.event_types.isOpen;
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
  setTimeout(() => {
    filterOptions.value.employees.isOpen =
      !filterOptions.value.employees.isOpen;
    filterOptions.value.locations.isOpen =
      !filterOptions.value.locations.isOpen;
    filterOptions.value.event_types.isOpen =
      !filterOptions.value.event_types.isOpen;
  }, 500);
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

/** handles clicking calendar event */
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

/** differentiate today's date from other dates on the sidebar calendar */
const getDayClass = (date) => {
  if (
    isEqual(
      date,
      set(new Date(), {
        hours: 0,
        minutes: 0,
        seconds: 0,
        milliseconds: 0,
      })
    )
  )
    return "!rounded-full bg-secondary";
  return "";
};

watch(result, async (ov, nv) => {
  if (initialized.value) return;
  console.log("GQL Result:", result.value);
  eventTypes.value = result.value.calendarEvents.data;
  employees.value = [];
  for (let employee of result.value.employee.data) {
    employees.value.push({
      ...employee,
      name: `${employee.first_name} ${employee.last_name}`,
      id: employee.user_id,
    });
  }
  members.value = result.value.members.data;
  leads.value = result.value.leads.data;
  locations.value = result.value.locations.data;
  event_types.value = result.value.calendarEventTypes.data;
  let tempEventsContainer = [...result.value.calendarEvents];

  for (let event of tempEventsContainer) {
    request(user.query.findById, { id: event.owner_id }).then(({ data }) => {
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
    });
  }

  setTimeout(() => {
    filterOptions.value.employees.isOpen = true;
    filterOptions.value.locations.isOpen = true;
    filterOptions.value.event_types.isOpen = true;
  }, 500);
});

const selectOption = (filter_id, option) => {
  if (filterOptions.value[filter_id].selected.includes(option)) {
    filterOptions.value[filter_id].selected.splice(
      filterOptions.value[filter_id].selected.indexOf(option),
      1
    );
  } else {
    filterOptions.value[filter_id].selected.push(option);
  }
};

const toggleFilterOption = (filter_id) => {
  filterOptions.value[filter_id].isOpen =
    !filterOptions.value[filter_id].isOpen;
};

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
  if (
    filterOptions.value.employees.selected.length === 0 &&
    filterOptions.value.locations.selected.length === 0 &&
    filterOptions.value.event_types.selected.length === 0
  ) {
    return events.value;
  }

  let filteredEvents = [];

  for (let event of events.value) {
    if (
      filterOptions.value.event_types.selected.includes(event.event_type_id) ||
      filterOptions.value.employees.selected.includes(event.owner_id) ||
      filterOptions.value.locations.selected.includes(event.location_id)
    ) {
      filteredEvents.push(event);
    }
  }

  return filteredEvents;
});

const showMoreDetails = async () => {
  resetState();
  eventInformationVisibibility.value = true;

  for (let attendee of eventDetails.value.extendedProps.users) {
    const { data } = await request(user.query.findById, {
      id: attendee.id.entity_id,
    });
    attendee.name = `${data.data.user.first_name} ${data.data.user.last_name}`;
    attendee.email = data.data.user.email;
    attendee.phone = data.data.user.phone;
    attendee.profile_photo_path = data.data.user.profile_photo_path;
  }

  console.log(eventDetails.value);

  eventIsLoading.value = false;
};

const showOfferUp = () => {
  resetState();
  offerUpVisibibility.value = true;
};
</script>

<style lang="postcss">
.search-input {
  @apply !text-base-content py-1 p-2 rounded-xl border-2 border-transparent text-[0.8rem] !font-light !tracking-wider w-[50%] bg-secondary/[0.4] placeholder:!text-base-content/[0.8] calendar-style-transition hidden lg:block;
}

.calendar-style-transition {
  @apply transition-all duration-300 ease-linear;
}

.calendar-date-picker {
  .dp__theme_dark {
    --dp-background-color: #000000;
    --dp-menu-border-color: #191919;
  }

  .dp__month_year_row {
    @apply border-none flex flex-row !gap-1 !w-[220px];
    .dp__month_year_col_nav {
      @apply bg-secondary rounded-lg;
      .dp__inner_nav {
        @apply text-base-content;
        &:hover {
          @apply bg-secondary;
        }
      }
    }
  }
  .dp__calendar {
    @apply bg-transparent !w-[220px];
    .dp__calendar_wrap {
      @apply bg-neutral border-2 border-secondary rounded-2xl;
      .dp__calendar_header_separator {
        @apply h-0;
      }
    }
  }
}

.dp__calendar_header,
.dp__calendar_row {
  @apply text-secondary !font-normal !h-[25px] mx-auto !w-[200px] text-[0.7rem] pb-0 !px-1 flex flex-row justify-center;
}

.dp__calendar_header_item {
  @apply !w-[20px] !h-[20px];
}
.dp__cell_inner {
  @apply !h-[20px] !w-[20px] text-[0.7rem] !font-light mx-auto;
}

.dp__month_year_select {
  @apply flex-row !py-0 !h-auto !w-[75px] text-[0.8rem];
}
</style>
