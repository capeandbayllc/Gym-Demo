<template>
  <div class="py-4 px-12 w-full h-fit">
    <!-- modal -->
    <!-- <daisy-modal class="w-fit" id="eventModal" ref="eventModal">
      <event-popup></event-popup>
    </daisy-modal> -->
    <!-- event details -->
    <div
      v-if="eventDetailsVisibibility"
      class="z-50 fixed h-screen w-screen flex items-center justify-center pointer-events-none"
    >
      <EventDetails
        :event="eventDetails"
        @outclick="resetState"
        @seemore="
          () => {
            eventDetailsVisibibility = false;
            eventInformationVisibibility = true;
          }
        "
      />
    </div>
    <!-- more in depth event information -->
    <div
      v-if="eventInformationVisibibility"
      class="z-50 fixed h-screen w-screen flex items-center justify-end right-0 top-16 pointer-events-none"
    >
      <EventInformation :event="eventDetails" @outclick="resetState" />
    </div>

    <div
      class="z-50 fixed h-screen w-screen flex items-center justify-center pointer-events-none"
      v-if="eventFormVisibility"
    >
      <EventForm
        @cancel="resetState"
        @createEvent="handleCreateEvent"
        :members="result.members.data"
        :employees="result.members.data"
        :nodeContext="emptyNodeContext"
      />
    </div>

    <!-- sidebar date selector popup -->
    <!-- <daisy-modal
      ref="dateSelect"
      id="dateSelect"
      class="bg-base-300 w-fit rounded-lg"
    >
      <div class="flex flex-col space-y-4 p-5">
        <h1 class="text text-base-content text-xl pb-2">Pick a Date</h1>
        <date-picker
          dark
          :weekPicker="calenderView === 'timeGridWeek'"
          :monthPicker="calenderView === 'dayGridMonth'"
          :auto-apply="true"
          :modelValue="selectedDate"
          @update:modelValue="onSelectDate"
        />
      </div>
    </daisy-modal> -->

    <!-- main content wrapper  -->
    <div
      class="border border-secondary bg-[#202020]/[0.9] rounded-2xl p-7 max-w-none flex gap-4"
    >
      <!-- left sidebar -->
      <aside class="flex flex-col gap-5">
        <Datepicker
          class="calendar-date-picker"
          menu-class-name="!bg-transparent !border-none"
          :day-class="getDayClass"
          month-name-format="long"
          inline
          auto-apply
          :enable-time-picker="false"
          dark
        />

        <CalendarMenu :calendars="activeEventsList" />
        <ReportsStatistics />
      </aside>

      <section class="w-full">
        <!-- main section heading area -->
        <div class="flex justify-between items-center w-full">
          <h1 class="text-3xl">January 2088</h1>
          <!-- filters/page actions -->
          <div class="flex gap-2">
            <button
              @click="handleAddNew"
              class="bg-secondary py-1 px-2 rounded-md border-2 border-transparent flex items-center gap-2 text-[0.8rem]"
            >
              <span> Add New </span>
              <span class="w-4 fill-white">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                  <path
                    d="M240 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H176V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H384c17.7 0 32-14.3 32-32s-14.3-32-32-32H240V80z"
                  />
                </svg>
              </span>
            </button>
            <button
              class="bg-neutral py-1 px-2 rounded-md border-secondary border-2 flex items-center gap-2 text-[0.8rem]"
            >
              <span> All Bookings </span>
              <span class="w-4 p-1 fill-white">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                  <!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                  <path
                    d="M137.4 41.4c12.5-12.5 32.8-12.5 45.3 0l128 128c9.2 9.2 11.9 22.9 6.9 34.9s-16.6 19.8-29.6 19.8H32c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9l128-128zm0 429.3l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8H288c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128c-12.5 12.5-32.8 12.5-45.3 0z"
                  />
                </svg>
              </span>
            </button>
            <input
              placeholder="Search"
              class="text-black py-1 p-2 rounded-md border-2 border-transparent text-[0.8rem]"
              type="text"
            />
          </div>
        </div>
        <GrCalendar
          :events="activeEventsList"
          @clickEventNode="handleCalendarEvent"
          @clickEmptyNode="handleAddNew"
        />
      </section>
    </div>
  </div>
</template>
<script setup>
import "@fullcalendar/core/vdom"; // solves problem with Vite (hot reload related - not necessary on production)
import { isEqual, set } from "date-fns";

import CalendarMenu from "./components/partials/calendar-menu.vue";
import ReportsStatistics from "./components/partials/reports-statistics.vue";
import EventDetails from "./components/partials/event-details.vue";
import EventInformation from "./components/partials/event-information.vue";
import Datepicker from "@vuepic/vue-datepicker";
import EventForm from "./components/event-form.vue";

/** GQL/Mock API */
import gql from "graphql-tag";
import { useQuery } from "@vue/apollo-composable";

/** FullCalendar component & plugins */
import FullCalendar from "@fullcalendar/vue3";
import EventPopup from "./components/event-popup.vue";
import listPlugin from "@fullcalendar/list";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import "@vuepic/vue-datepicker/dist/main.css";
import { calendarEvents as events } from "./helpers/calendar-events";
import GrCalendar from "./components/gr-calendar.vue";

const calenderView = ref("timeGridWeek");

const handleDateClick = (arg) => {
  console.log("date click! " + arg.dateStr);
};

/** Component State */
const activeEventsList = ref(events);
const eventDetails = ref(null); // Currently selected event context
const emptyNodeContext = ref(null); // information about the empty node that was most recently clicked

/** Component Visibility State */
const eventDetailsVisibibility = ref(false);
const eventInformationVisibibility = ref(false);
const eventFormVisibility = ref(false);

const resetState = () => {
  eventDetailsVisibibility.value = false;
  eventInformationVisibibility.value = false;
  eventFormVisibility.value = false;
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
    console.log("node context", emptyNodeContext.value);
  }
};

const handleCreateEvent = (form) => {
  console.log("create new event with info:", form);
  console.log("current events", activeEventsList.value);
  // activeEventsList.value = [...activeEventsList.value, { ...form }];
  const newEventObj = {
    title: form.title,
    description: form.description,
    start: form.time.start,
    end: form.time.end,
    backgroundColor: "##123456",
    eventType: form.eventType,
    instructor: form.instructor,
    member: form.member,
    notify: form.notify,
    recurring: form.recurring,
  };
  console.log("new event", newEventObj);
  activeEventsList.value.push(newEventObj);
  eventFormVisibility.value = false;
};
// const handleChangeView = (value) => {
//   calenderView.value = value;
//   console.log("calenderView", calenderView.value);
//   calendar.value.getApi().changeView(value);
//   onViewChanged();
// };

/** handles clicking calendar event */
const handleCalendarEvent = (e) => {
  if (eventFormVisibility.value) return; // don't proceed if something else is in context
  let eventInfo = {
    ...e._def,
    start: e._instance.range.start,
    end: e._instance.range.end,
  };
  console.log("event info", eventInfo);
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

/** GQL */
const query = gql`
  query CalendarData {
    members(first: 15) {
      data {
        id
        first_name
        last_name
        email
        primary_phone
        locations {
          id
          name
        }
        homeLocation {
          name
        }
        created_at
      }
      paginatorInfo {
        count
        perPage
        total
      }
    }
    calendarEvents {
      id
      title
      description
      full_day_event
      start
      end
      event_completion
      editable
      call_task
    }
  }
`;

const queryEvents = gql`
  query CalendarEvents {
    calendarEvents(first: 15) {
      id
      title
      description
    }
  }
`;

const { result } = useQuery(query);
const { result: evquery } = useQuery(queryEvents);

let timeout = null;

onMounted(async () => {
  if (!timeout) {
    timeout = setTimeout(() => {
      console.log("GQL Result:", result);
      console.log("evenst query?", evquery);
    }, 3000);
  }
  //   await nextTick();
  //   window.dispatchEvent(new Event("resize"));
});

onUnmounted(() => clearTimeout(timeout));
</script>
