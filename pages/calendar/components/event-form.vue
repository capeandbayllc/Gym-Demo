<template>
  <form
    class="p-4 bg-neutral border-2 rounded-md border-secondary pointer-events-auto relative"
  >
    <button
      @click="emit('cancel')"
      type="button"
      class="absolute top-4 right-4"
    >
      <span class="block fill-white w-4 h-4">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
          <!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
          <path
            d="M292.6 166.6L315.3 144 270 98.7l-22.6 22.6L158 210.7 68.6 121.4 46 98.7 .7 144l22.6 22.6L112.7 256 23.4 345.4 .7 368 46 413.3l22.6-22.6L158 301.3l89.4 89.4L270 413.3 315.3 368l-22.6-22.6L203.3 256l89.4-89.4z"
          />
        </svg>
      </span>
    </button>

    <div class="form-group-pair mb-8">
      <label>Title</label>
      <input v-model="form.title" type="text" />
    </div>
    <BtnGroup :choices="btnChoices" v-model="form.eventType" />
    <div class="form-group-pair">
      <label>Member</label>
      <select
        v-model="form.member"
        class="w-full p-2 rounded-md text-black mt-2"
      >
        <option v-for="mem in members" :key="mem.id">
          {{ mem.first_name }} {{ mem.last_name }}
        </option>
      </select>
    </div>
    <div class="form-group-pair">
      <label>Instructor</label>
      <select
        v-model="form.instructor"
        class="w-full p-2 rounded-md text-black mt-2"
      >
        <option v-for="employee in employees" :key="employee.id">
          {{ employee.first_name }} {{ employee.last_name }}
        </option>
      </select>
    </div>

    <div class="form-group-pair">
      <div class="flex w-full gap-4 mt-2 flex-col">
        <!-- <select
          class="w-full p-2 rounded-md text-black"
          name="start"
          id="start"
        >
          <option>start</option>
        </select> -->
        <p class="block">Time</p>
        <div class="flex gap-4">
          <div class="w-full flex flex-col">
            <input v-model="form.time.start" id="start_time" type="date" />
          </div>
          <div class="w-full flex flex-col">
            <input v-model="form.time.end" id="end_time" type="time" />
          </div>
        </div>
      </div>
    </div>

    <div class="form-group-pair">
      <label>Description</label>
      <textarea
        class="resize-none"
        rows="3"
        v-model="form.description"
        type="text"
      />
    </div>

    <div class="flex justify-between mt-4">
      <div class="flex gap-2 items-center">
        <input type="checkbox" />
        <label>Recurring event</label>
      </div>
      <div class="flex gap-2 items-center">
        <label for="">Notification</label>
        <input type="checkbox" />
      </div>
    </div>

    <div class="flex mt-8 mb-4 justify-end items-center gap-4">
      <button type="button" @click="emit('cancel')">Cancel</button>
      <button
        @click="handleNewEvent"
        class="bg-secondary py-1 px-4 rounded-md"
        type="button"
      >
        Add
      </button>
    </div>
  </form>
</template>

<script setup>
import BtnGroup from "./partials/btn-group.vue";
import {
  addMinutesToDate,
  formatRandomEventTime,
} from "../helpers/calendar-events";

const props = defineProps({
  members: {
    type: Array,
    default: [],
  },
  employees: {
    type: Array,
    default: [],
  },
  nodeContext: {
    type: [Object, null],
    default: null,
  },
});

const emit = defineEmits(["createEvent", "cancel"]);
const currentDate = ref(new Date());

const btnChoices = ["event", "task", "service", "prospect"];
const form = ref({
  eventType: "event",
  title: "",
  member: null,
  instructor: null,
  time: {
    start: props.nodeContext?.start ? props.nodeContext.start : new Date(),
    end: props.nodeContext?.start
      ? formatRandomEventTime({ minute: -60 }, props.nodeContext.start)
      : formatRandomEventTime({ minute: -60 }, new Date()),
  },
  description: "",
  recurring: false,
  notify: false,
});

const handleNewEvent = () => {
  emit("createEvent", form.value);
};
</script>

<style scoped lang="postcss">
.form-group-pair {
  @apply w-full flex flex-col;

  label {
    @apply font-bold mt-4;
  }

  input,
  textarea {
    @apply p-2 text-black rounded-md mt-2;
  }
}
</style>
