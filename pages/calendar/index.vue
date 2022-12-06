<template>
    <div class="page-calendar-container">
        <div class="page-title">calendar</div>
        <daisy-modal class="w-fit" id="eventModal" ref="eventModal">
            <event-popup></event-popup>
		</daisy-modal>
        <daisy-modal ref="dateSelect" id="dateSelect" class="bg-base-300 w-fit rounded-lg">
            <div class="flex flex-col space-y-4 p-5">
                <h1 class="text text-base-content text-xl pb-2">Pick a Date</h1>
                <date-picker dark :weekPicker="calenderView === 'timeGridWeek'" :monthPicker="calenderView === 'dayGridMonth'" :auto-apply="true" :modelValue="selectedDate" @update:modelValue="onSelectDate"/>
            </div>
        </daisy-modal>
        <div class="mb-5 text-center calender-view-wrap">
            <input type="radio" v-model="calenderView" name="calenderView" value="timeGridWeek"/>
            <Button @click="handleChangeView('timeGridWeek')" gost class="mr-3">Week</Button>
            <input type="radio" v-model="calenderView" name="calenderView" value="dayGridMonth"/>
            <Button @click="handleChangeView('dayGridMonth')" gost> Month </Button>
            <input type="radio" v-model="calenderView" name="calenderView" value="timeGridDay"/>
            <Button @click="handleChangeView('timeGridDay')" gost> Day </Button>
        </div>
        <div class="page-content">
            <div :class="calenderView =='timeGridDay' ? 'w-[65%] -lg:w-full -lg:mb-5' : 'w-full'" class="relative h-full">
                <h2 class="text absolute top-2 left-0 text-xl font-bold cursor-pointer flex flex-row" @click="showDateSelectModal">
                    {{ calendarTitle }} <arrow-icon direction="right" class="h-[30px] items-center" />
                </h2>
                <FullCalendar :options="calendarOptions" ref="calendar"/>
            </div>
            <div v-if="calenderView == 'timeGridDay'" class="md:flex md:gap-y-5 w-[35%] -lg:w-full ml-4 flex-col -lg:flex-row -lg:ml-0 -md:block">
                <div class="flex-1 -lg:w-2/4 -lg:mb-0 -lg:mr-5 -md:w-full -md:mb-5">
                    <div class="flex items-center mb-2">
                        <h2 class="text top-2 left-0 text-md  font-bold cursor-pointer flex flex-row" @click="showDateSelectModal">
                            {{ calendarTitle }} <arrow-icon direction="right" class="h-[25px] items-center" />
                        </h2>
                        <Button ghost class="ml-auto min-h-fit h-6">...</Button>
                    </div>
                    <FullCalendar :options="monthCalendarOptions" ref="monthCalendar" class="w-full month-calender"/>
                </div>
                <div class="list-calendar flex-1 -lg:w-2/4 -md:w-full">
                    <FullCalendar :options="listCalendarOptions" ref="listCalendar" class="h-full w-full"/>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import '@fullcalendar/core/vdom' // solves problem with Vite
import { ArrowIcon } from '~~/components/icons';
import FullCalendar from "@fullcalendar/vue3";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import EventPopup from "./components/event-popup.vue";
import DatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";

const calenderView = ref("timeGridWeek");
watch(calenderView, () => {
    setTimeout(() => {
        calendar.value.getApi().render()
    });
});

const handleDateClick = (arg)=> {
    console.log('date click! ' + arg.dateStr)
}
const handleChangeView = (value) => {
    calenderView.value = value;
    console.log("calenderView", calenderView.value);
    calendar.value.getApi().changeView(value);
    onViewChanged();
};

const calendar = ref(null);
const currentView = ref("timeGridWeek");
const start = ref(null);
const end = ref(null);
const selectedDate = ref(null);
const isMobile = computed(() => window.innerWidth <= 480);
const monthCalendar = ref(null);
const listCalendar = ref(null);

const eventModal = ref(null);

const events = [
    {
        title: 'Priority One',
        start: '2022-12-01T06:00:00',
        backgroundColor: 'red',
        extendedProps: {
            department: 'BioChemistry'
        },
        description: 'Lecture',
        parth:"jasani",
        data:{
            foo:"bar"
        }
    },
    {
        title: 'To Do Two',
        start: '2022-12-01T07:00:00',
        backgroundColor: 'blue',
    },
    {
        title: 'To Do Three',
        start: '2022-12-01T08:30:00',
        extendedProps: {
            status: 'done'
        },
        backgroundColor: 'lime',
    },
    {
        title: 'Birthday Party',
        start: '2022-12-01T10:00:00',
        backgroundColor: 'green',
    }
];

const eventClick = (info) =>{
    var eventObj = info.event;
    eventModal.value.open();
}

const calendarOptions = ref({
    plugins: [ dayGridPlugin, timeGridPlugin, interactionPlugin],
    initialView: 'timeGridWeek',
    dateClick: handleDateClick,
    headerToolbar: {
        left: "",
        center: "",
        right: "prev,next today",
        // center: "title",
        // right: "prev,next today",
    },
    events,
    editable: true,
    selectable: true,
    dayMaxEvents: true,
    eventClick,
    datesSet: (params)=> {
        console.log("params-->",params)
        listCalendar?.value?.getApi()?.gotoDate(params.start);
        monthCalendar?.value?.getApi()?.gotoDate(params.start);
        monthCalendar?.value?.getApi()?.select(params.start)
        //console.log("view-->",monthCalendar?.value?.getApi()?.view.getCurrentData().currentDate)
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
    },
    viewDidMount : function(info) {
        console.log("viewDidMount")
        onViewChanged()
    }
    //eventContent: { html: '<i>some html</i>' }
});

const monthCalendarOptions = ref({
    plugins: [ dayGridPlugin, timeGridPlugin, interactionPlugin],
    initialView: 'dayGridMonth',
    headerToolbar: false,
    events,
    eventClick,
    editable: true,
    selectable: true,
    dayMaxEvents: true,
    dateClick: function(params) {
        console.log("🚀 ~ file: index.vue ~ line 123 ~ params", params)
        calendar?.value?.getApi()?.gotoDate(params.date);
    }

});

const listCalendarOptions = ref({
    plugins: [ dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin],
    initialView: 'listDay',
    headerToolbar: false,
    events,
    eventClick
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
</script>

<style scoped>
.page-calendar-container {
    @apply py-4 pr-5 w-full h-fit pl-16;
    .page-title {
        @apply text-lg font-light pb-3 pl-5;
    }
    .page-content {
        @apply flex block border border-secondary bg-neutral rounded p-7 max-w-screen-lg m-auto -lg:block;
    }
    .calender-view-wrap {
        input[type="radio"] {
            @apply absolute invisible left-[-9999px];
            &:checked + button {
                @apply bg-secondary text-white
            }
            + button {
                @apply w-[100px] min-h-0 h-8 mx-3 inline-block bg-white text-secondary hover:bg-secondary hover:text-white;
                &:hover { @apply bg-secondary text-white; }
            }
        }
    }
}
</style>
<style>
    .fc .fc-list-sticky .fc-list-day > *, .fc-theme-standard .fc-list-day-cushion, .fc .fc-cell-shaded, .fc-theme-standard th,.fc .fc-list-event:hover td {
        background-color: transparent !important;
    }
    .fc-theme-standard td:hover{
        @apply cursor-pointer;
    }
    .fc .fc-list-event:hover td {
        background-color: rgba(188, 232, 241, 0.3) !important;
        @apply cursor-pointer;
    }
    .month-calender .fc-daygrid-day-bottom a{
        font-size: 0px;
        height: 10px;
        width: 10px;
    }
    /* .list-calendar .fc-view-harness{
        @screen -md{
            max-height: auto !important
        }
    } */
</style>