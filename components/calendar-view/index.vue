<template>
  <div class="w-full">
    <div class="mb-5 text-start calender-view-wrap">
      <span class="float-left p-0.5 text-xl mr-32">Calendar</span>

      <input
        type="radio"
        v-model="calenderView"
        name="calenderView"
        value="timeGridWeek"
      />
      <Button @click="handleChangeView('timeGridWeek')" gost class="mr-3"
        >Week</Button
      >
      <input
        type="radio"
        v-model="calenderView"
        name="calenderView"
        value="dayGridMonth"
      />
      <Button @click="handleChangeView('dayGridMonth')" gost> Month </Button>
      <input
        type="radio"
        v-model="calenderView"
        name="calenderView"
        value="timeGridDay"
      />
      <Button @click="handleChangeView('timeGridDay')" gost> Day </Button>
    </div>
    <div
      class="relative border border-secondary rounded-lg overflow-hidden p-6"
    >
      <h2
        class="text absolute top-0 left-0 text-xl font-bold cursor-pointer flex flex-row w-full p-6"
        @click="showDateSelectModal"
      >
        {{ calendarTitle }}
      </h2>
      <FullCalendar :options="calendarOptions" ref="calendar" />
    </div>
  </div>
</template>
<style scoped lang="postcss">
.calender-view-wrap {
  input[type="radio"] {
    @apply absolute invisible left-[-9999px];
    &:checked + button {
      @apply bg-secondary text-accent-content;
    }
    + button {
      @apply w-[100px] min-h-0 h-8 mx-3 inline-block bg-accent-content text-secondary hover:bg-secondary hover:text-accent-content;
      &:hover {
        @apply bg-secondary text-accent-content;
      }
    }
  }
}
</style>
<style></style>
<script setup>
import FullCalendar from "@fullcalendar/vue3";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";

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
  initialDate: "2022-12-06",
  initialView: "timeGridWeek",
  dateClick: handleDateClick,
  headerToolbar: {
    left: "",
    center: "",
    right: "prev,next today",
  },
  events,
  editable: true,
  selectable: true,
  dayMaxEvents: true,
  eventClick,
  datesSet: (params) => {
    console.log("params-->", params);
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
