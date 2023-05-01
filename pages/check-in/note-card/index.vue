<template>
  <simple-card title="Notes" class="note-card" closable>
    <div class="flex flex-col w-full p-6 card-gradient-bg">
      <div
        class="flex flex-row md:justify-between justify-center flex-wrap w-full gap-6"
      >
        <div>
          <button class="create-note-btn" @click="newNote">
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
          <notes-list
            :notes="notes"
            @clickedNote="activeNote = $event"
          ></notes-list>
        </div>
        <div class="w-full p-4 rounded-xl bg-base-200">
          <note-editor
            :active-note="activeNote"
            @saveNote="saveNote"
            @deleteNote="deleteNote"
          ></note-editor>
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
import dateFormat from "dateformat";
import { v4 as uuidv4 } from "uuid";

const noteModal = ref(null);
const noteComplete = ref(false);
const newNoteData = ref(null);
const activeNote = ref({
  title: "",
  creator: "Cecil Ellington",
  content: "",
  completed: false,
  alert: false,
});

onMounted(() => {
  newNoteData.value = { ...activeNote.value };
});

const newNote = () => {
  activeNote.value = { ...newNoteData.value };
};

const saveNote = (data) => {
  const notesArray = notes.value;

  // If the note has an id, update the existing note in the array
  if (data.id) {
    const noteIndex = notesArray.findIndex((note) => note.id === data.id);
    if (noteIndex !== -1) {
      // If the note exists, update its properties
      const updatedNote = { ...notesArray[noteIndex], ...data };
      notesArray.splice(noteIndex, 1, updatedNote);
    }
  } else {
    // Otherwise, generate a new id and add the note to the end of the array
    const newId = uuidv4();
    const newNote = {
      id: newId,
      date: today,
      time: dateFormat(new Date(), "h:MM TT"),
      ...data,
    };
    notesArray.push(newNote);
  }
  newNote();
};

const deleteNote = (data) => {
  if (data.id) {
    const index = notes.value.findIndex((note) => note.id == data.id);
    if (index !== -1) {
      notes.value.splice(index, 1);
    }
  }
  newNote();
};

const notesType = ref("recent");
const notes = ref([
  {
    id: 1,
    title: "Note #16",
    date: "Month 2, 2022",
    time: "0:00 PM",
    content: "Cecil Ellington",
    content:
      "ipsum dolor sit amet consectetur adipisicing elit. Iusto iure, voluptatem accusamus, ullam libero saepe doloribus earum excepturi similique corporis perferendis laboriosam! Quos omnis tempore quibusdam. Rem error inventore tempora?",
    completed: false,
    alert: true,
  },
  {
    id: 2,
    title: "Note #17",
    date: "Month 3, 2022",
    time: "0:00 PM",
    content: "Cecil Ellington",
    content:
      "dolor sit amet consectetur adipisicing elit. Iusto iure, voluptatem accusamus, ullam libero saepe doloribus earum excepturi similique corporis perferendis laboriosam! Quos omnis tempore quibusdam. Rem error inventore tempora?",
    completed: false,
    alert: false,
  },
  {
    id: 3,
    title: "Note #18",
    date: "Month 1, 2022",
    time: "0:00 PM",
    creator: "Cecil Ellington",
    content:
      "sit amet consectetur adipisicing elit. Iusto iure, voluptatem accusamus, ullam libero saepe doloribus earum excepturi similique corporis perferendis laboriosam! Quos omnis tempore quibusdam. Rem error inventore tempora?",
    completed: true,
    alert: false,
  },
  {
    id: 4,
    title: "Note #19",
    date: "Month 1, 2022",
    time: "0:00 PM",
    creator: "Cecil Ellington",
    content:
      "amet consectetur adipisicing elit. Iusto iure, voluptatem accusamus, ullam libero saepe doloribus earum excepturi similique corporis perferendis laboriosam! Quos omnis tempore quibusdam. Rem error inventore tempora?",
    completed: false,
    alert: true,
  },
  {
    id: 5,
    title: "Note #20",
    date: "Month 1, 2022",
    time: "0:00 PM",
    creator: "Cecil Ellington",
    content:
      "consectetur adipisicing elit. Iusto iure, voluptatem accusamus, ullam libero saepe doloribus earum excepturi similique corporis perferendis laboriosam! Quos omnis tempore quibusdam. Rem error inventore tempora?",
    completed: true,
    alert: true,
  },
  {
    id: 6,
    title: "Note #21",
    date: "Month 1, 2022",
    time: "0:00 PM",
    creator: "Cecil Ellington",
    content:
      "Lorem adipisicing elit. Iusto iure, voluptatem accusamus, ullam libero saepe doloribus earum excepturi similique corporis perferendis laboriosam! Quos omnis tempore quibusdam. Rem error inventore tempora?",
    completed: true,
    alert: true,
  },
  {
    id: 7,
    title: "Note #22",
    date: "Month 1, 2022",
    time: "0:00 PM",
    creator: "Cecil Ellington",
    content:
      "Lorem adipisicing elit. Iusto iure, voluptatem accusamus, ullam libero saepe doloribus earum excepturi similique corporis perferendis laboriosam! Quos omnis tempore quibusdam. Rem error inventore tempora?",
    completed: true,
    alert: true,
  },
  {
    id: 8,
    title: "Note #23",
    date: "Month 1, 2022",
    time: "0:00 PM",
    creator: "Cecil Ellington",
    content:
      "amet consectetur adipisicing elit. Iusto iure, voluptatem accusamus, ullam libero saepe doloribus earum excepturi similique corporis perferendis laboriosam! Quos omnis tempore quibusdam. Rem error inventore tempora?",
    completed: true,
    alert: true,
  },
  {
    id: 9,
    title: "Note #25",
    date: "Month 1, 2022",
    time: "0:00 PM",
    creator: "Cecil Ellington",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto iure, voluptatem accusamus, ullam libero saepe doloribus earum excepturi similique corporis perferendis laboriosam! Quos omnis tempore quibusdam. Rem error inventore tempora?",
    completed: true,
    alert: true,
  },
  {
    id: 10,
    title: "Note #26",
    date: "Month 1, 2022",
    time: "0:00 PM",
    creator: "Cecil Ellington",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto iure, voluptatem accusamus, ullam libero saepe doloribus earum excepturi similique corporis perferendis laboriosam! Quos omnis tempore quibusdam. Rem error inventore tempora?",
    completed: true,
    alert: true,
  },
  {
    id: 11,
    title: "Note #27",
    date: "Month 1, 2022",
    time: "0:00 PM",
    creator: "Cecil Ellington",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto iure, voluptatem accusamus, ullam libero saepe doloribus earum excepturi similique corporis perferendis laboriosam! Quos omnis tempore quibusdam. Rem error inventore tempora?",
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

const folders = [
  { id: 1, name: 12 },
  { id: 2, name: 12 },
  { id: 3, name: 12 },
  { id: 4, name: 12 },
  { id: 5, name: 12 },
  { id: 6, name: 12 },
];
</script>
