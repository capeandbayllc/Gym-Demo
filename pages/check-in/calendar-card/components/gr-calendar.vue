<template>
    <div class="bg-gradient-to-b from-secondary/80 to-black w-full rounded-[20px] border-secondary border-[2px] max-w-[1200px]">
            <h2 class="text-lg p-3">{{currentMonth}} {{currentYear}}</h2>
            <!-- <calendar-card class="m-8"/> -->
            <!-- <pre>
                {{ getFormattedEvents }}
            </pre> -->
            <FullCalendar :options="calendarOptions" ref="calendar" class="calendar">
                <template v-slot:eventContent="arg">
                    <CalendarEvent :arg="arg" />
                </template>
            </FullCalendar>
        </div>
</template>

<script setup>
import "@fullcalendar/core/vdom"; // solves problem with Vite (hot reload related - not necessary on production)
import CalendarEvent from "~/pages/calendar/components/partials/calendar-event.vue";
import FullCalendar from "@fullcalendar/vue3";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

const emit = defineEmits(["clickEventNode", "clickEmptyNode"]);
const props = defineProps({
    events: {
        type: Array,
        default: [],
    }
});

const eventClick = (info) => {
    emit("clickEventNode", info.event);
};

const calendar = ref(null);
const currentMonth = ref('');
const currentYear = ref('');
const refreshCurrentDate = ()=>{
    const api = calendar.value.getApi();
    currentMonth.value = new Date(api.getDate()).toLocaleString('default', { month: 'long' });
    currentYear.value = new Date(api.getDate()).getFullYear();
}
onMounted(async ()=>{
    refreshCurrentDate()
});

const calendarOptions = ref({
    plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
    schedulerLicenseKey: "0157232768-fcs-1652392378",
    initialView: "dayGridMonth",
    initialDate: "2022-12-01",
    slotDuration: "01:00",
    height: '500px',
    // dateClick: handleDateClick,
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
        // listCalendar?.value?.getApi()?.gotoDate(params.start);
        // monthCalendar?.value?.getApi()?.gotoDate(params.start);
        // monthCalendar?.value?.getApi()?.select(params.start);
    },
    dateClick: refreshCurrentDate,
    datesSet: refreshCurrentDate,
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
        // eventClick,
        datesSet: (params) => {
            // listCalendar?.value?.getApi()?.gotoDate(params.start);
            // monthCalendar?.value?.getApi()?.gotoDate(params.start);
            // monthCalendar?.value?.getApi()?.select(params.start);
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
</script>

<style>
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