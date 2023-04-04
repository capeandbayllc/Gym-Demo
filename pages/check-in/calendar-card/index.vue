<template>
    <simple-card class="checkin-calendar-card" :closable="true" title="Calendar">
        <div class="calendar-card-body card-gradient-bg">

            <div class="bg-gradient-to-b from-secondary/80 to-black w-full rounded-[20px] border-secondary border-[2px] max-w-[600px]">
                <h2 class="text-lg p-3">{{currentMonth}} {{currentYear}}</h2>
                <!-- <calendar-card class="m-8"/> -->
                <FullCalendar :options="calendarOptions" ref="calendar" class="calendar"/>
            </div>
            <div class="px-0 md:px-3 mt-8">
                <div class="text-lg font-semibold">Today: {{today}}</div>
                <div class="text-3xl py-4">{{month(date)}}</div>
                <event-list
                    :data="data"
                    class="lg:w-80 w-full"
                />
            </div>
        </div>
    </simple-card>
</template>
<style scoped>
.checkin-calendar-card {
    @apply m-auto bg-neutral max-w-[1120px] xl:w-[1120px] w-full ;
    .calendar-card-body {
        @apply flex flex-col md:flex-row py-6 px-9 md:gap-2 gap-12 justify-center;
    }
    
}

.calendar{
    @apply bg-black px-5 pt-5 mb-5;
}
</style>
<script setup>
import EventList from '../event-list.vue';
import "@fullcalendar/core/vdom"; // solves problem with Vite (hot reload related - not necessary on production)
import FullCalendar from "@fullcalendar/vue3";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import "@vuepic/vue-datepicker/dist/main.css";

const calendar = ref(null);
const currentMonth = ref('');
const currentYear = ref('');
const refreshCurrentDate = ()=>{
    const api = calendar.value.getApi();
    currentMonth.value = new Date(api.getDate()).toLocaleString('default', { month: 'long' });
    currentYear.value = new Date(api.getDate()).getFullYear();
}

const calendarOptions = ref({
    plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
    schedulerLicenseKey: "0157232768-fcs-1652392378",
    initialView: "timeGridWeek",
    initialDate: "2022-12-01",
    slotDuration: "01:00",
    height: '500px',
    // dateClick: handleDateClick,
    headerToolbar: {
        left: "",
        center: "prev,today,next timeGridDay,timeGridWeek,dayGridMonth",
        right: "",
    },
    // events: props.events,
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

onMounted(()=>{
    refreshCurrentDate()
});



const data = [{
    id: 2,
    title: 'Yoga',
    booked: false,
    due: "Monday 5:20 - 6:10"
}, {
    id: 3,
    title: 'PT Training',
    booked: false,
    due: "Monday 6:30 - 6:40"
},  {
    id: 4,
    title: 'Yoga',
    booked: false,
    due: "Tuesday 6:30 - 6:40"
}]
const today = computed(() => {
    const current = new Date();
    return `${month(current)} ${current.getDate()}, ${current.getFullYear()}`;
})
const month = (date) => {
    const options = { month: "long" };
    return Intl.DateTimeFormat("en-US", options).format(date);
}
</script>