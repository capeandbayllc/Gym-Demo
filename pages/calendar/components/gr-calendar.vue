<template>
  <div class="relative">
    <div class="absolute w-[18%] h-[34px] top-[16px] left-0">
      <div
        class="relative flex flex-row gap-2 h-[34px] hover:bg-secondary/[0.3] rounded-lg px-2 transition-all duration-200 cursor-pointer"
      >
        <span
          class="h-[24px] w-[24px] my-auto bg-white rounded-full overflow-hidden"
        >
          <UserIcon class="w-[24px] h-[24px]" />
        </span>
        <span class="my-auto line-clamp-1"> John Doe </span>
        <span class="my-auto rotate-90 ml-auto">
          <ArrowIcon />
        </span>
      </div>
    </div>
    <div class="absolute bg-red-400 w-[15%] h-[34px] top-[16px] right-0"></div>
    <FullCalendar :options="calendarOptions" ref="calendar">
      <template v-slot:eventContent="arg">
        <CalendarEvent :arg="arg" />
      </template>
    </FullCalendar>
  </div>
</template>

<script setup>
import "@fullcalendar/core/vdom"; // solves problem with Vite (hot reload related - not necessary on production)
import { isEqual, set } from "date-fns";

/** FullCalendar component & plugins */
import FullCalendar from "@fullcalendar/vue3";
import listPlugin from "@fullcalendar/list";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import "@vuepic/vue-datepicker/dist/main.css";
// import { calendarEvents as events } from "../helpers/calendar-events";
import CalendarEvent from "./partials/calendar-event.vue";
import { UserIcon, ArrowIcon } from "~~/components/icons";

const calenderView = ref("timeGridWeek");

const emit = defineEmits(["clickEventNode", "clickEmptyNode"]);

const props = defineProps({
  events: {
    type: Array,
    default: [],
  },
});

/** empty node on calendar click handler */
const handleDateClick = (arg) => {
  emit("clickEmptyNode", arg);
};

/** DOM References */
const calendar = ref(null);
const start = ref(null);
const end = ref(null);
const currentView = ref("timeGridWeek");
const selectedDate = ref(null);
const monthCalendar = ref(null);
const listCalendar = ref(null);

const handleChangeView = (value) => {
  calenderView.value = value;
  console.log("calenderView", calenderView.value);
  calendar.value.getApi().changeView(value);
  onViewChanged();
};

/** existing event click handler */
const eventClick = (info) => {
  emit("clickEventNode", info.event);
};

const calendarOptions = ref({
  plugins: [
    dayGridPlugin,
    timeGridPlugin,
    interactionPlugin,
    // calendarTopLeftComponent,
  ],
  schedulerLicenseKey: "0157232768-fcs-1652392378",
  initialView: "timeGridWeek",
  slotDuration: "01:00",
  dateClick: handleDateClick,
  headerToolbar: {
    // left: "calendarTopLeftComponent",
    center: "prev,today,next timeGridDay,timeGridWeek,dayGridMonth",
    right: "",
  },
  events: props.events,
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
    events: props.events,
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
  events: props.events,
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
  events: props.events,
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
<style>
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
  .dp__calendar {
    @apply bg-transparent text-[0.8rem];
    .dp__calendar_wrap {
      @apply bg-neutral border border-secondary rounded;
      .dp__calendar_header_separator {
        @apply h-0;
      }
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
  @apply last:bg-[#18203A] last:border-[2px] last:border-[#073A76] first:py-[2px] last:p-[2px] rounded-lg !flex !flex-row first:gap-4 last:!gap-2;
}
.fc-today-button.fc-button.fc-button-primary {
  @apply !bg-secondary px-5;
}
.fc-prev-button,
.fc-next-button {
  @apply !px-2 !bg-[#073A76];
}
.fc-event-main {
  @apply !border-l-[6px] border-white border-opacity-20 text-[0.7rem];
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
  @apply !pl-1 !flex-col-reverse !justify-end;
}

.fc-event-title-container {
  @apply !flex-grow-0;
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

.fc-event-time {
  /* @apply bg-[#191919]/[0.4] contrast-200 rounded-l-full pl-2; */
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
  @apply text-[0rem];
}

.fc-header-toolbar.fc-toolbar.fc-toolbar-ltr {
  @apply !my-4;
}
.fc-timegrid th {
  @apply text-[0.8rem];
}
.fc-timegrid td {
  @apply !text-[0.6rem];
}

.fc-timegrid tr {
  @apply h-[65px] first:!h-[30px];
}

.fc.fc-media-screen.fc-direction-ltr.fc-theme-standard {
  @apply !max-h-[72.5vh] !min-h-[65.8vh];
}

.fc-view table {
  @apply !rounded-tl-xl;
}

.fc-timeGridDay-button,
.fc-timeGridWeek-button,
.fc-dayGridMonth-button {
  @apply w-[80px];
}
.fc-daygrid-day-top {
  @apply !flex !flex-row !justify-start text-[0.7rem];
}

.fc-daygrid-more-link.fc-more-link {
  @apply text-[0.6rem] text-center;
}
</style>
