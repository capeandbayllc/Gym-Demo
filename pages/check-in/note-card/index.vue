<template>
    <simple-card
        title="Notes"
        class="note-card"
        closable
    >
        <!-- <div class="note-card-container">
            <div class="note-list">
                <note-item
                    v-for="note in notes"
                    :is-active="note.id === activeNote?.id"
                    :key="note.id"
                    :note="note"
                    @click="activeNote={...note}"
                />
            </div>
            <div>
                <h3>Title</h3>
                <textarea v-model="activeNote.title"></textarea>
                <div class="note-actions">
                    <Button size="sm" secondary>Create a Note</Button>
                    <Button size="sm" secondary>Add an Alert</Button>
                    <hr class="invisible sm:hidden w-full"/>
                    <Button size="sm" ghost>Delete</Button>
                    <Button size="sm" secondary>Save</Button>
                </div>
            </div>
        </div> -->
    <div class="flex w-full gap-6 p-6">
        <div class="w-[140px]">
            <button class="flex flex-col items-center">
                <NewAgreementIcon class="w-[140px] h-[50px] mb-2"/>
                <span>Create a new note</span>
            </button>
            <Button secondary size="sm" class="w-full mb-4 normal-case flex justify-between"> <span> Shared </span> <span>21</span></Button>
            <Button secondary size="sm" class="w-full mb-4 normal-case flex justify-between"> <span> Admin Notes </span> <span>3</span></Button>
            <Button outline size="sm" class="w-full mb-4 normal-case flex justify-between"> <span> Folder </span> <span>12</span></Button>
            <Button outline size="sm" class="w-full mb-4 normal-case flex justify-between"> <span> Folder </span> <span>12</span></Button>
            <Button outline size="sm" class="w-full mb-4 normal-case flex justify-between"> <span> Folder </span> <span>12</span></Button>
            <Button outline size="sm" class="w-full mb-4 normal-case flex justify-between"> <span> Folder </span> <span>12</span></Button>
            <Button outline size="sm" class="w-full mb-4 normal-case flex justify-between"> <span> Folder </span> <span>12</span></Button>
            <Button outline size="sm" class="w-full mb-4 normal-case flex justify-between"> <span> Folder </span> <span>12</span></Button>
        </div>
        <div>
            <div class="w-fit">
                <div class="flex">
                    <Button size="sm" secondary class="w-[120px] normal-case mx-3">Recent</Button>
                    <Button size="sm" secondary class="w-[120px] normal-case mx-3">Completed</Button>
                </div>
                <div class="w-full">
                    <p>Today</p>
                    <div class="bg-black border border-white rounded-md p-1 mb-4" v-for="note in notes" :key="note.id">
                        <div class="flex justify-between">
                            <span>{{note.title}}</span>
                            <AlertButton v-model="note.alert" class="w-[250px]"/>
                        </div>
                        <div>
                            <span class="text-xs mr-4">{{note.date}}</span>
                            <span class="text-xs mr-4">{{note.time}}</span>
                            <span class="text-xs mr-4">{{note.content}}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="w-[600px]">
            <div class="mb-5 text-center calender-view-wrap">
                <input type="radio" v-model="calenderView" name="calenderView" value="timeGridWeek"/>
                <Button @click="handleChangeView('timeGridWeek')" gost class="mr-3">Week</Button>
                <input type="radio" v-model="calenderView" name="calenderView" value="dayGridMonth"/>
                <Button @click="handleChangeView('dayGridMonth')" gost> Month </Button>
                <input type="radio" v-model="calenderView" name="calenderView" value="timeGridDay"/>
                <Button @click="handleChangeView('timeGridDay')" gost> Day </Button>
            </div>
            <div class="relative border border-secondary rounded-lg overflow-hidden p-2">
                <h2 class="text absolute top-0 left-0 text-xl font-bold cursor-pointer flex flex-row bg-secondary w-full py-3 px-2" @click="showDateSelectModal">
                    {{ calendarTitle }} <arrow-icon direction="right" class="h-[30px] items-center" />
                </h2>
                <FullCalendar :options="calendarOptions" ref="calendar"/>
            </div>
        </div>
    </div>
    </simple-card>
</template>
<style scoped>
.note-card {
    @apply m-auto bg-neutral;
    @screen -lg {
        @apply m-4;
    }
    .note-card-container {
        @apply flex flex-col lg:flex-row m-8 gap-2 relative py-10;
        .note-list {
            @apply flex flex-col gap-2;
        }
        h3 {
            @apply absolute text-xl font-semibold top-0;
        }
        textarea {
            @apply text-neutral p-2 rounded h-full w-full;
        }
        .note-actions {
            @apply flex flex-row flex-wrap justify-end gap-2 mt-2 ml-4;
        }
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
<script setup>
import NoteItem from './note-item.vue';
import { NewAgreementIcon } from "@/components/icons";
import AlertButton from './alert-button.vue'
import FullCalendar from "@fullcalendar/vue3";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";

const activeNote = ref({title: ""})
const notes = [{
    id: 1,
    title: "Note #16",
    date: "Month 1, 2022",
    time: "0:00 PM",
    content: "Cecil Ellington",
    alert: true
}, {
    id: 2,
    title: "Note #17",
    date: "Month 1, 2022",
    time: "0:00 PM",
    content: "Cecil Ellington",
    alert: false
}, {
    id: 3,
    title: "Note #18",
    date: "Month 1, 2022",
    time: "0:00 PM",
    content: "Cecil Ellington",
    alert: false
}, {
    id: 4,
    title: "Note #19",
    date: "Month 1, 2022",
    time: "0:00 PM",
    content: "Cecil Ellington",
    alert: true
}, {
    id: 5,
    title: "Note #19",
    date: "Month 1, 2022",
    time: "0:00 PM",
    content: "Cecil Ellington",
    alert: true
}];
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
    alert("event Clicked");
};
const calendar = ref(null);
const currentView = ref("timeGridWeek");
const calenderView = ref("timeGridWeek");
const start = ref(null);
const end = ref(null);

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

const handleDateClick = (arg)=> {
    console.log('date click! ' + arg.dateStr)
};
const handleChangeView = (value) => {
    calenderView.value = value;
    console.log("calenderView", calenderView.value);
    calendar.value.getApi().changeView(value);
    onViewChanged();
};

const onViewChanged = () => {
    start.value = calendar.value.getApi().view.activeStart;
    start.end = calendar.value.getApi().view.activeEnd;
    console.log({
        start,
        end,
        calendarView: calendar.value.getApi().view,
    });
};

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
        /* listCalendar?.value?.getApi()?.gotoDate(params.start);
        monthCalendar?.value?.getApi()?.gotoDate(params.start);
        monthCalendar?.value?.getApi()?.select(params.start) */
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

</script>
