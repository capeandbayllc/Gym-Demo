<template>
    <simple-card
        title="Notes"
        class="note-card"
        closable
    >
    <div class="flex flex-col w-full p-6 card-gradient-bg">
        <div class="flex flex-row w-full gap-6">
            <div class="w-[140px]">
                <button class="create-note-btn" @click="createNote">
                    <div class="btn-normal">
                        <NewAgreementIcon class="mb-2"/>
                        <span>Create a new note</span>
                    </div>
                    <div class="btn-hover">
                        <NewAgreementHoverIcon/>
                    </div>
                </button>    
            </div>
            <div class="flex-auto">
                <div class="flex w-[270px]">
                    <Button size="sm" outline class="flex-1 normal-case mr-2" :class="[{'!bg-secondary !border-secondary':notesType == 'recent'},{'border-slate-400 text-slate-400':notesType !== 'recent'}]" @click="notesType='recent'">Recent</Button>
                    <Button size="sm" outline class="flex-1 normal-case ml-2" :class="[{'!bg-secondary !border-secondary':notesType == 'completed'},{'border-slate-400 text-slate-400':notesType !== 'completed'}]" @click="notesType='completed'">Completed</Button>
                </div>
            </div>
        </div>
        <div class="flex flex-row w-full gap-6 mt-2">
            <div class="w-[140px]">
                <p class="text-xs mb-2">Folders and Segments</p>
                <Button secondary size="sm" :maxWidth="false" class="w-full mb-6 normal-case flex justify-between"> <span> Shared </span> <span>21</span></Button>
                <Button secondary size="sm" :maxWidth="false" class="w-full mb-6 normal-case flex justify-between"> <span> Admin Notes </span> <span>3</span></Button>
                <Button v-for="folder in folders" :key="folder.id" outline size="sm" :maxWidth="false" class="bg-black w-full mb-2 normal-case flex justify-between"> <span> Folder </span> <span>{{folder.name}}</span></Button>
            </div>
            <div class="w-fit max-h-min overflow-auto">
                <div class="w-full">
                    <p class="text-xs mb-2">Today</p>
                    <div class="bg-black border border-white rounded-md p-1 mb-4" :class="{'!bg-secondary !border-slate-400':note.completed}" v-for="note in notes.filter(n=> notesType== 'completed' ? n.completed : !n.completed )" :key="note.id">
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
            <div class="w-[600px] pt-5">
                <div class="relative border border-secondary rounded-lg overflow-hidden">
                    <h2 class="calendar-title" @click="showDateSelectModal">
                        {{ calendarTitle }} <arrow-icon direction="right" class="h-9 items-center" />
                    </h2>
                    <FullCalendar :options="calendarOptions" ref="calendar"/>
                </div>
            </div>
        </div>
    </div>
    <daisy-modal class="w-fit" id="noteModal" ref="noteModal">
        <div class="p-4 w-[600px]">
            <h3 class="text-center mb-4 ">{{today}}</h3>
            <textarea v-model="activeNote.title" class="w-full h-80 rounded p-2 mb-4" placeholder="New Note Name"></textarea>
            <div class="note-actions flex justify-end">
                <AlertButton v-model="activeNote.alert" class="w-[250px] mr-4"/>
                <Button size="sm" class="normal-case mr-4" ghost>Delete</Button>
                <Button size="sm" class="normal-case" secondary>Save</Button>
            </div>
        </div>
    </daisy-modal>
    </simple-card>
</template>
<style scoped>
.note-card {
    @apply m-auto bg-neutral max-w-[1120px] xl:w-[1120px] w-full;
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
    .create-note-btn {
        @apply w-full mb-6 h-16;
        > div {
            @apply w-full;
        }
        .btn-normal {
            @apply flex flex-col items-center;
        }
        .btn-hover {
            @apply hidden;
        }
        &:hover {
            .btn-normal {
                @apply hidden;
            }
            .btn-hover {
                @apply flex w-full items-center justify-center;
            }
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
.calendar-title {
    @apply absolute top-0 left-0 w-full flex items-center h-10 text-xl font-semibold px-6 text-base-content bg-gradient-to-b from-secondary to-base-300/30 bg-secondary bg-blend-darken;
}
</style>
<style>
.note-card {
    .fc .fc-button-group {
        @apply hidden;
    }
    .fc .fc-header-toolbar .fc-toolbar-chunk {
        @apply bg-base-content mix-blend-hard-light rounded mt-2 mr-2;
        .fc-button {
            @apply bg-base-content text-secondary font-semibold cursor-pointer capitalize h-6 flex items-center text-sm;
        }
    }
}
</style>
<script setup>
import { NewAgreementIcon, NewAgreementHoverIcon, ArrowIcon } from "@/components/icons";
import AlertButton from './alert-button.vue'
import FullCalendar from "@fullcalendar/vue3";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

const noteModal = ref(null);
const notesType = ref("recent");
const activeNote = ref({title: ""});
const notes = ref([{
    id: 1,
    title: "Note #16",
    date: "Month 1, 2022",
    time: "0:00 PM",
    content: "Cecil Ellington",
    completed:false,
    alert: true
}, {
    id: 2,
    title: "Note #17",
    date: "Month 1, 2022",
    time: "0:00 PM",
    content: "Cecil Ellington",
    completed:false,
    alert: false
}, {
    id: 3,
    title: "Note #18",
    date: "Month 1, 2022",
    time: "0:00 PM",
    content: "Cecil Ellington",
    completed:true,
    alert: false
}, {
    id: 4,
    title: "Note #19",
    date: "Month 1, 2022",
    time: "0:00 PM",
    content: "Cecil Ellington",
    completed:false,
    alert: true
}, {
    id: 5,
    title: "Note #20",
    date: "Month 1, 2022",
    time: "0:00 PM",
    content: "Cecil Ellington",
    completed:true,
    alert: true
}, {
    id: 6,
    title: "Note #21",
    date: "Month 1, 2022",
    time: "0:00 PM",
    content: "Cecil Ellington",
    completed:true,
    alert: true
}, {
    id: 7,
    title: "Note #22",
    date: "Month 1, 2022",
    time: "0:00 PM",
    content: "Cecil Ellington",
    completed:true,
    alert: true
}, {
    id: 8,
    title: "Note #23",
    date: "Month 1, 2022",
    time: "0:00 PM",
    content: "Cecil Ellington",
    completed:true,
    alert: true
}, {
    id: 9,
    title: "Note #25",
    date: "Month 1, 2022",
    time: "0:00 PM",
    content: "Cecil Ellington",
    completed:true,
    alert: true
}, {
    id: 10,
    title: "Note #26",
    date: "Month 1, 2022",
    time: "0:00 PM",
    content: "Cecil Ellington",
    completed:true,
    alert: true
}, {
    id: 11,
    title: "Note #27",
    date: "Month 1, 2022",
    time: "0:00 PM",
    content: "Cecil Ellington",
    completed: true,
    alert: false
}]);

const today = computed(() => {
    const date = new Date();
    const months =  ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`
});

const createNote = () =>{
    noteModal.value.open();
}

const folders = [
    { id: 1, name: 12 },
    { id: 2, name: 12 },
    { id: 3, name: 12 },
    { id: 4, name: 12 },
    { id: 5, name: 12 },
    { id: 6, name: 12 },
]

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
    start.value = calendar.value.getApi().view.currentStart;
    start.end = calendar.value.getApi().view.currentEnd;
    console.log({
        start,
        end,
        calendarView: calendar.value.getApi().view,
    });
};

const calendarOptions = ref({
    plugins: [ dayGridPlugin, timeGridPlugin, interactionPlugin],
    initialView: 'dayGridMonth',
    dateClick: handleDateClick,
    headerToolbar: {
        left: "",
        center: "",
        right: "today",
    },
    events,
    editable: true,
    selectable: true,
    dayMaxEvents: true,
    eventClick,
    datesSet: (params)=> {
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
});

</script>
