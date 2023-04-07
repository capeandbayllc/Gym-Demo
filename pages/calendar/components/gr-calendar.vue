<template>
    <div class="relative">
        <h2 v-if="showDateTitle" class="text-lg p-3">{{ currentMonth }} {{ currentYear }}</h2>
        <div
            v-if="!showDateTitle"
            class="absolute w-[18%] h-[50px] top-[10px] left-0 hidden lg:block"
            ref="calendarUserDropdown"
            @click="setShowCalendarUserDropDownToTrue()"
        >
            <div
                class="relative flex flex-row gap-2 h-[40px] hover:bg-secondary/[0.3] rounded-lg px-2 transition-all duration-200 cursor-pointer"
            >
                <span
                    class="h-[34px] w-[34px] my-auto bg-white rounded-xl overflow-hidden border-2 border-secondary"
                >
                    <UserIcon class="w-[30px] h-[30px]" />
                </span>
                <span class="my-auto line-clamp-1 text-[0.8rem]">
                    John Doe
                </span>
                <span class="my-auto rotate-90 ml-auto">
                    <ArrowIcon class="w-[20px] h-auto my-auto" />
                </span>
            </div>
            <CalendarUserDropdown
                :isParent="true"
                :calendarViewOptions="calendarViewOptions"
                :showCalendarUserDropDown="showCalendarUserDropDown"
            />
        </div>
        <div
            v-if="!showDateTitle"
            class="absolute w-[18%] h-[50px] top-[10px] right-0 hidden lg:block"
        >
            <div
                class="relative flex flex-row gap-2 h-[40px] rounded-lg px-2 transition-all duration-200 justify-end"
            >
                <span
                    class="h-[34px] w-[34px] my-auto bg-white rounded-xl overflow-hidden border-2 border-secondary"
                >
                    <UserIcon class="w-[30px] h-[30px]" />
                </span>
            </div>
        </div>
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
import CalendarUserDropdown from "./calendar-user-dropdown.vue";
import { UserIcon, ArrowIcon } from "~~/components/icons";
import dateFormat from "dateformat";

const calenderView = ref("timeGridWeek");

const emit = defineEmits(["clickEventNode", "clickEmptyNode"]);
const props = defineProps({
    events: {
        type: Array,
        default: [],
    },
    showDateTitle: {
        type: Boolean,
        default: false,
    },
    filterOptions: Object,
    calendarViewOptions: Array,
    setShowCalendarUserDropDown: Function,
    showCalendarUserDropDown: Boolean,
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

const currentMonth = ref('');
const currentYear = ref('');

const monthCalendar = ref(null);
const listCalendar = ref(null);
const showCalendarUserDropDown = ref(false);
const calendarUserDropdown = ref(null);

const refreshCurrentDate = () => {
    const api = calendar.value.getApi();
    const currentDate = new Date(api.getDate());
    currentMonth.value = dateFormat(currentDate, 'mmmm');
    currentYear.value = dateFormat(currentDate, 'yyyy');
}
onMounted(async () => {
    refreshCurrentDate()
});
/** existing event click handler */
const eventClick = (info) => {
    emit("clickEventNode", info.event);
};

const calendarOptions = ref({
    plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
    schedulerLicenseKey: "0157232768-fcs-1652392378",
    initialView: "timeGridWeek",
    initialDate: "2022-12-01",
    slotDuration: "01:00",
    dateClick: handleDateClick,
    headerToolbar: {
        left: "",
        center: "prev,today,next timeGridDay,timeGridWeek,dayGridMonth",
        right: "",
    },
    events: props.events,
    editable: true,
    selectable: true,
    dayMaxEvents: true,
    eventClick,
    datesSet: (params) => {
        refreshCurrentDate()
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

const onViewChanged = () => {
    start.value = calendar.value.getApi().view.activeStart;
    start.end = calendar.value.getApi().view.activeEnd;
    console.log({
        start,
        end,
        calendarView: calendar.value.getApi().view,
    });
};

const setShowCalendarUserDropDownToTrue = () => {
    showCalendarUserDropDown.value = true;
};

const setShowCalendarUserDropDownToFalse = (event) => {
    if (
        event.target === calendarUserDropdown.value ||
        event.composedPath().includes(calendarUserDropdown.value)
    ) {
        return;
    }
    showCalendarUserDropDown.value = false;
};

// onMounted(() => {

// });

onUnmounted(() => {
    document.removeEventListener(
        "click",
        setShowCalendarUserDropDownToFalse,
        true
    );
});

watch(props.filterOptions, () => {
    calendar.value.calendar.getEventSources()[0].remove();
    calendar.value.calendar.addEventSource(props.events);
});

watch(calendar, () => {
    calendar.value.calendar.getEventSources()[0].remove();
    calendar.value.calendar.addEventSource(props.events);
});

onMounted(async () => {
    document.addEventListener(
        "click",
        setShowCalendarUserDropDownToFalse,
        true
    );
    await nextTick();
    window.dispatchEvent(new Event("resize"));
});
</script>
<style>
.fc-view-harness{
    @apply m-2 overflow-hidden rounded-xl border-[#073A76];
}
.fc-view-harness, .fc-scrollgrid-section, .fc-scrollgrid, .fc-scrollgrid-liquid, .fc-view tbody{
    @apply rounded-xl;
}
.fc-scroller-harness{
    @apply rounded-t-xl;
}

.fc .fc-list-sticky .fc-list-day > *,
.fc-theme-standard .fc-list-day-cushion,
.fc .fc-cell-shaded,
.fc-theme-standard th,
.fc .fc-list-event:hover td {
    background-color: transparent !important;
}
.fc-button {
    @apply !bg-transparent !border-0 !rounded-lg !py-[2px] !capitalize transition-all duration-150 ease-linear;
}
/* fc-dayGridMonth-button fc-button fc-button-primary */
.fc-button.fc-button-active {
    @apply !bg-secondary !border-[1px] !border-[#073A76];
}
.fc-toolbar-chunk {
    @apply !flex !flex-row !gap-5 !text-[0.7rem];
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
    @apply text-[0.7rem];
}
.fc-timegrid td {
    @apply !text-[0.6rem];
}

.fc-timegrid tr {
    @apply h-[65px] first:!h-[30px];
}

.fc.fc-media-screen.fc-direction-ltr.fc-theme-standard {
    @apply max-h-[100vh] lg:h-[76vh] !min-h-[80vh] lg:!min-h-[65.8vh];
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

.fc-col-header-cell {
    @apply text-[0.8rem];
}

table,
tr,
td,
th {
    @apply !border-secondary;
}

table {
    @apply rounded-tl-2xl first:rounded-tl-xl;
}

thead .fc-scroller {
    @apply !overflow-hidden bg-secondary/[0.4];
    /* table {
        @apply bg-gradient-to-b from-secondary/80 via-secondary;
    } */
}

.fc-daygrid-event {
    @apply overflow-hidden;
}
</style>
