<template>
  <div class="py-4 px-12 w-full h-fit">
    <!-- modal -->
    <daisy-modal class="w-fit" id="eventModal" ref="eventModal">
      <event-popup></event-popup>
    </daisy-modal>
    <!-- event details -->
    <div
      v-if="eventDetailsVisibibility"
      class="z-50 fixed h-screen w-screen flex items-center justify-center"
    >
      <EventDetails />
    </div>
    <!-- more in depth event information -->
    <div
      v-if="eventInformationVisibibility"
      class="z-50 fixed h-screen w-screen flex items-center justify-end right-0 top-16 pointer-events-none"
    >
      <EventInformation />
    </div>

    <div
      class="z-50 fixed h-screen w-screen flex items-center justify-center pointer-events-none"
      v-if="eventFormVisibility"
    >
      <EventForm />
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

        <CalendarMenu :calendars="calendarsList" />
        <ReportsStatistics />
      </aside>

      <section class="w-full">
        <!-- main section heading area -->
        <div class="flex justify-between items-center w-full">
          <h1 class="text-3xl">January 2088</h1>
          <!-- filters/page actions -->
          <div class="flex gap-2">
            <button
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
        <FullCalendar :options="calendarOptions" ref="calendar" />
      </section>
    </div>
  </div>
</template>
<script setup>
import "@fullcalendar/core/vdom"; // solves problem with Vite (hot reload related - not necessary on production)
import { ArrowIcon } from "~~/components/icons";
import { isEqual, set } from "date-fns";
import { fakeCalendars } from "./components/fakedata";
import CalendarMenu from "./components/partials/calendar-menu.vue";
import ReportsStatistics from "./components/partials/reports-statistics.vue";
import EventDetails from "./components/partials/event-details.vue";
import EventInformation from "./components/partials/event-information.vue";
import Datepicker from "@vuepic/vue-datepicker";
import EventForm from "./components/event-form.vue";

/** FullCalendar component & plugins */
import FullCalendar from "@fullcalendar/vue3";
import EventPopup from "./components/event-popup.vue";
import listPlugin from "@fullcalendar/list";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import "@vuepic/vue-datepicker/dist/main.css";
import { calendarEvents as events } from "./helpers/calendar-events";

const calenderView = ref("timeGridWeek");

const handleDateClick = (arg) => {
  console.log("date click! " + arg.dateStr);
};

/** DOM References */
const calendar = ref(null);
const eventModal = ref(null);
const start = ref(null);
const end = ref(null);
const currentView = ref("timeGridWeek");
const selectedDate = ref(null);
const isMobile = computed(() => window.innerWidth <= 480);
const monthCalendar = ref(null);
const listCalendar = ref(null);

/** Component State */
const calendarsList = ref(fakeCalendars);
const eventDetails = ref(null); // selected event information we need to pass into the details & event panels

/** Component Visibility State */
const calendarEventVisibility = ref(false);
const eventDetailsVisibibility = ref(false);
const eventInformationVisibibility = ref(false);
const eventFormVisibility = ref(true);

const handleChangeView = (value) => {
  calenderView.value = value;
  console.log("calenderView", calenderView.value);
  calendar.value.getApi().changeView(value);
  onViewChanged();
};

const eventClick = (info) => {
  var eventObj = info.event;
  eventModal.value.open();
};

const calendarOptions = ref({
  plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
  schedulerLicenseKey: "0157232768-fcs-1652392378",
  initialView: "timeGridWeek",
  slotDuration: "01:00",
  dateClick: handleDateClick,
  headerToolbar: {
    left: "",
    center: "prev,today,next timeGridWeek,dayGridMonth,timeGridDay",
    right: "",
  },
  events,
  editable: true,
  selectable: true,
  dayMaxEvents: true,
  eventClick,
  datesSet: (params) => {
    listCalendar?.value?.getApi()?.gotoDate(params.start);
    monthCalendar?.value?.getApi()?.gotoDate(params.start);
    monthCalendar?.value?.getApi()?.select(params.start);
    //console.log("view-->",monthCalendar?.value?.getApi()?.view.getCurrentData().currentDate)
  },
  timeAxis: {
    slotDuration: "01:00:00",
  },
  views: {
    timeGridDay: {
      dayHeaderFormat: {
        month: "long",
        day: "numeric",
        omitCommas: "false",
      },
      nowIndicator: true,
    },
    timeGridWeek: {
      dayHeaderFormat: {
        month: "short",
        day: "numeric",
      },
      nowIndicator: true,
    },
    timeAxis: {
      slotDuration: "01:00:00",
    },
    views: {
      timeGridDay: {
        dayHeaderFormat: {
          month: "long",
          day: "numeric",
          omitCommas: "false",
        },
        nowIndicator: true,
      },
      timeGridWeek: {
        dayHeaderFormat: {
          month: "short",
          day: "2-digit",
        },
        nowIndicator: true,
      },
    },
    viewDidMount: function (info) {
      onViewChanged();
    },
    //eventContent: { html: '<i>some html</i>' }
  },
});

const monthCalendarOptions = ref({
  plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
  initialView: "dayGridMonth",
  headerToolbar: false,
  events,
  eventClick,
  editable: true,
  selectable: true,
  dayMaxEvents: true,
  dateClick: function (params) {
    console.log("🚀 ~ file: index.vue ~ line 123 ~ params", params);
    calendar?.value?.getApi()?.gotoDate(params.date);
  },
});

const listCalendarOptions = ref({
  plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin],
  initialView: "listDay",
  timeAxis: {
    slotDuration: "01:00:00",
  },
  headerToolbar: false,
  events,
  eventClick,
});

const onViewChanged = () => {
  start.value = calendar.value.getApi().view.activeStart;
  start.end = calendar.value.getApi().view.activeEnd;
  console.log({
    start,
    end,
    calendarView: calendar.value.getApi().view,
  });
};

const calendarTitle = computed(() => {
  let option = {
    year: "numeric",
    month: "long",
  };
  if (currentView.value === "timeGridDay") {
    option["day"] = "numeric";
  }
  return start.value?.toLocaleString("default", option);
});
const dateSelect = ref();
const showDateSelectModal = () => {
  if (calenderView.value !== "timeGridWeek") {
    selectedDate.value = start.value;
  }
  dateSelect.value.open();
};
const onSelectDate = (modelData) => {
  selectedDate.value = modelData;
  if (calenderView.value !== "timeGridWeek") {
    start.value = modelData;
    calendar.value.getApi().gotoDate(start.value);
  } else {
    start.value = modelData[0];
    calendar.value.getApi().gotoDate(start.value);
  }
};

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

watch(calenderView, () => {
  setTimeout(() => {
    calendar.value.getApi().render();
    console.log("huh");
  });
});

onMounted(async () => {
  await nextTick();
  window.dispatchEvent(new Event("resize"));
});
</script>

<style lang="postcss">
.calendar-date-picker {
  .dp__theme_dark {
    --dp-background-color: #000000;
    --dp-menu-border-color: #191919;
  }
  .dp__calendar_header {
    @apply text-secondary;
  }
  .dp__month_year_row {
    @apply border-none;
    .dp__month_year_col_nav {
      @apply bg-secondary rounded;
      .dp__inner_nav {
        @apply text-base-content;
        &:hover {
          @apply bg-secondary;
        }
      }
    }
  }
}
.dp__calendar {
  @apply bg-transparent text-[0.8rem];
  .dp__calendar_wrap {
    @apply bg-neutral border border-secondary rounded;
    .dp__calendar_header_separator {
      @apply h-0;
    }
  }
}

.dp__cell_inner {
  @apply !p-0 !h-[25px];
}

.dp__month_year_select {
  @apply flex-row !py-0 !h-auto;
}

.dp__month_year_select {
  @apply flex-row !py-0 !h-auto;
}

.fc .fc-list-sticky .fc-list-day > *,
.fc-theme-standard .fc-list-day-cushion,
.fc .fc-cell-shaded,
.fc-theme-standard th,
.fc .fc-list-event:hover td {
  background-color: transparent !important;
}
.fc-button {
  @apply !bg-transparent !border-0 !rounded-md !py-[2px] !capitalize !text-sm transition-all duration-150 ease-linear;
}
/* fc-dayGridMonth-button fc-button fc-button-primary */
.fc-button.fc-button-active {
  @apply !bg-secondary !border-[1px] !border-[#073A76];
}
.fc-toolbar-chunk {
  @apply !flex !flex-row !gap-5;
}
.fc-toolbar-chunk .fc-button-group {
  @apply bg-[#18203A] border-[2px] border-[#073A76] p-[6px] rounded-md;
}
.fc-prev-button.fc-button.fc-button-primary,
.fc-today-button.fc-button.fc-button-primary,
.fc-next-button.fc-button.fc-button-primary {
  @apply !bg-secondary;
}
.fc-button-group {
  @apply !flex !flex-row !gap-2;
}
.fc-prev-button,
.fc-next-button {
  @apply !px-[2px];
}
.fc-event-main {
  @apply !border-l-8 border-white border-opacity-20 pl-2;
}

.fc {
  @apply w-full;
}

.fc-media-screen {
  @apply min-h-[55rem];
}

th.fc-day-today {
  @apply !bg-[#191919]/[0.4];
}

.fc-event-main-frame {
  @apply !pl-2;
}

.fc .fc-scrollgrid-section.fc-scrollgrid-section-body:first-child {
  * {
    @apply border-b-secondary;
  }
}
.fc-col-header-cell.fc-day {
  height: 4em;
  @apply bg-gradient-to-b from-secondary/80 via-secondary to-secondary/60;
  div {
    @apply h-full flex items-center justify-center uppercase;
  }
}

.fc .fc-scrollgrid-section:nth-child(2) {
  @apply bg-secondary;
  * {
    @apply border-b-secondary;
  }
}
.fc-theme-standard td:hover {
  @apply cursor-pointer;
}
.fc .fc-list-event:hover td {
  background-color: rgba(188, 232, 241, 0.3) !important;
  @apply cursor-pointer;
}
.month-calender .fc-daygrid-day-bottom a {
  font-size: 0px;
  height: 10px;
  width: 10px;
}
.fc .fc-timegrid-slot {
  height: 3.5em;
}
.fc .fc-day-today {
  @apply bg-blend-darken;
}
.fc-col-header-cell-cushion {
  @apply !font-normal !capitalize;
}

.fc-timegrid-axis-cushion {
  @apply capitalize text-[0.7rem];
}

.fc-header-toolbar.fc-toolbar.fc-toolbar-ltr {
  @apply !my-4;
}
.fc-scrollgrid.fc-scrollgrid-liquid {
  @apply !max-h-[66vh] !overflow-scroll;
}
.fc-timegrid th,
.fc-timegrid td {
  @apply !text-[0.8rem];
}
.fc-timegrid,
.fc-view-harness {
  @apply !max-h-[66vh];
}
</style>
