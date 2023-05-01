<template>
  <simple-card title="Notes" class="note-card" closable>
    <div class="flex flex-col w-full p-6 card-gradient-bg">
      <div
        class="flex flex-row md:justify-between justify-center flex-wrap w-full gap-6"
      >
        <div>
          <button class="create-note-btn" @click="createNote">
            <div class="btn-normal">
              <NewAgreementIcon class="mb-2" />
              <span>Create a new note</span>
            </div>
          </button>
        </div>
        <div class="flex justify-end items-center">
          <div class="flex w-[270px]">
            <Button
              size="sm"
              outline
              class="flex-1 normal-case mr-2 rounded-[10px]"
              :class="[
                {
                  '!bg-secondary !border-secondary hover:text-white':
                    notesType == 'recent',
                },
                {
                  'border-neutral-content text-neutral-content':
                    notesType !== 'recent',
                },
              ]"
              @click="notesType = 'recent'"
              >Recent</Button
            >
            <Button
              size="sm"
              outline
              class="flex-1 normal-case ml-2 rounded-[10px]"
              :class="[
                {
                  '!bg-secondary !border-secondary hover:text-white':
                    notesType == 'completed',
                },
                {
                  'border-neutral-content text-neutral-content':
                    notesType !== 'completed',
                },
              ]"
              @click="notesType = 'completed'"
              >Completed</Button
            >
          </div>
        </div>
      </div>
      <div class="flex flex-col lg:flex-row w-full gap-6 mt-2">
        <div class="w-full lg:w-fit min-w-[300px] max-h-min overflow-auto">
          <notes-list :notes="notes"></notes-list>
        </div>
        <div class="w-full p-4 rounded-xl bg-base-200">
          <note-editor></note-editor>
        </div>
      </div>
    </div>
  </simple-card>
</template>
<style scoped lang="postcss">
.note-card {
  @apply bg-neutral w-full rounded-2xl;
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
  }
  .create-note-btn {
    @apply w-full mb-6 h-16;
    > div {
      @apply w-full;
    }
    .btn-normal {
      @apply flex flex-col items-center w-[300px];
    }
  }
  .calender-view-wrap {
    input[type="radio"] {
      @apply absolute invisible left-[-9999px];
      &:checked + button {
        @apply bg-secondary text-base-content;
      }
      + button {
        @apply w-[100px] min-h-0 h-8 mx-3 inline-block bg-base-content text-secondary hover:bg-secondary hover:text-base-content;
        &:hover {
          @apply bg-secondary text-base-content;
        }
      }
    }
  }
}
.calendar-title {
  @apply absolute top-0 left-0 w-full flex items-center h-10 text-xl font-semibold px-6 text-base-content bg-gradient-to-b from-secondary to-base-300/30 bg-secondary bg-blend-darken;
}
</style>
<style lang="postcss">
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
import {
  NewAgreementIcon,
  NewAgreementHoverIcon,
  ArrowIcon,
} from "@/components/icons";
import AlertButton from "./alert-button.vue";
import FullCalendar from "@fullcalendar/vue3";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import NotesList from "./partials/notes-list.vue";
import NoteEditor from "./partials/note-editor.vue";

const noteModal = ref(null);
const noteComplete = ref(false);
const activeNote = ref({ title: "" });
const notesType = ref("recent");
const notes = ref([
  {
    id: 1,
    title: "Note #16",
    date: "Month 1, 2022",
    time: "0:00 PM",
    content: "Cecil Ellington",
    completed: false,
    alert: true,
  },
  {
    id: 2,
    title: "Note #17",
    date: "Month 1, 2022",
    time: "0:00 PM",
    content: "Cecil Ellington",
    completed: false,
    alert: false,
  },
  {
    id: 3,
    title: "Note #18",
    date: "Month 1, 2022",
    time: "0:00 PM",
    content: "Cecil Ellington",
    completed: true,
    alert: false,
  },
  {
    id: 4,
    title: "Note #19",
    date: "Month 1, 2022",
    time: "0:00 PM",
    content: "Cecil Ellington",
    completed: false,
    alert: true,
  },
  {
    id: 5,
    title: "Note #20",
    date: "Month 1, 2022",
    time: "0:00 PM",
    content: "Cecil Ellington",
    completed: true,
    alert: true,
  },
  {
    id: 6,
    title: "Note #21",
    date: "Month 1, 2022",
    time: "0:00 PM",
    content: "Cecil Ellington",
    completed: true,
    alert: true,
  },
  {
    id: 7,
    title: "Note #22",
    date: "Month 1, 2022",
    time: "0:00 PM",
    content: "Cecil Ellington",
    completed: true,
    alert: true,
  },
  {
    id: 8,
    title: "Note #23",
    date: "Month 1, 2022",
    time: "0:00 PM",
    content: "Cecil Ellington",
    completed: true,
    alert: true,
  },
  {
    id: 9,
    title: "Note #25",
    date: "Month 1, 2022",
    time: "0:00 PM",
    content: "Cecil Ellington",
    completed: true,
    alert: true,
  },
  {
    id: 10,
    title: "Note #26",
    date: "Month 1, 2022",
    time: "0:00 PM",
    content: "Cecil Ellington",
    completed: true,
    alert: true,
  },
  {
    id: 11,
    title: "Note #27",
    date: "Month 1, 2022",
    time: "0:00 PM",
    content: "Cecil Ellington",
    completed: true,
    alert: false,
  },
]);

const today = computed(() => {
  const date = new Date();
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
});

const createNote = () => {
  noteModal.value.open();
};

const folders = [
  { id: 1, name: 12 },
  { id: 2, name: 12 },
  { id: 3, name: 12 },
  { id: 4, name: 12 },
  { id: 5, name: 12 },
  { id: 6, name: 12 },
];

const events = [
  {
    title: "Priority One",
    start: "2022-12-01T06:00:00",
    backgroundColor: "red",
    extendedProps: {
      department: "BioChemistry",
    },
    description: "Lecture",
    parth: "jasani",
    data: {
      foo: "bar",
    },
  },
  {
    title: "To Do Two",
    start: "2022-12-01T07:00:00",
    backgroundColor: "blue",
  },
  {
    title: "To Do Three",
    start: "2022-12-01T08:30:00",
    extendedProps: {
      status: "done",
    },
    backgroundColor: "lime",
  },
  {
    title: "Birthday Party",
    start: "2022-12-01T10:00:00",
    backgroundColor: "green",
  },
];

const eventClick = (info) => {
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

const handleDateClick = (arg) => {
  console.log("date click! " + arg.dateStr);
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
  plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
  initialView: "dayGridMonth",
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
  datesSet: (params) => {
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
  viewDidMount: function (info) {
    console.log("viewDidMount");
    onViewChanged();
  },
});
</script>
