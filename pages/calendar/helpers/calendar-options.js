import { calendarEvents as events } from "./calendar-events";

const handleDateClick = (arg) => {
    console.log("date click! " + arg.dateStr);
};

const calenderView = ref("timeGridWeek");
const monthCalendar = ref(null);
const listCalendar = ref(null);

export const calendarOptions = ref({
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
                day: "2-digit",
            },
            nowIndicator: true,
        },
    },
    viewDidMount: function (info) {
        onViewChanged();
    },
    //eventContent: { html: '<i>some html</i>' }
});