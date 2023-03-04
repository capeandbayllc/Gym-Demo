<template>
  <form
    class="p-4 bg-neutral border-2 rounded-md border-secondary pointer-events-auto"
  >
    <BtnGroup :choices="btnChoices" v-model="form.eventType" />
    <div class="form-group-pair">
      <label>Title</label>
      <input type="text" />
    </div>
    <div class="form-group-pair">
      <label>Member</label>
      <select
        v-model="form.member"
        class="w-full p-2 rounded-md text-black mt-2"
      >
        <option>Steve</option>
      </select>
    </div>
    <div class="form-group-pair">
      <label>Instructor</label>
      <select
        v-model="form.instructor"
        class="w-full p-2 rounded-md text-black mt-2"
      >
        <option>Jeff</option>
      </select>
    </div>

    <div class="form-group-pair">
      <label>time</label>
      <div class="flex w-full gap-4 mt-2">
        <select
          class="w-full p-2 rounded-md text-black"
          name="start"
          id="start"
        >
          <option>start</option>
        </select>
        <select class="w-full p-2 rounded-md text-black" name="end" id="end">
          <option>end</option>
        </select>
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
      <button type="button">Cancel</button>
      <button class="bg-secondary py-1 px-4 rounded-md" type="button">
        Add
      </button>
    </div>
  </form>
</template>

<script setup>
import BtnGroup from "./partials/btn-group.vue";

const btnChoices = ["event", "task", "service", "prospect"];

const props = defineProps({
  members: {
    type: Array,
    default: [],
  },
  instructors: {
    type: Array,
    default: [],
  },
});

const form = ref({
  eventType: "event",
  title: "",
  member: null,
  instructor: null,
  time: {
    start: new Date(),
    end: new Date(),
  },
  description: "",
  recurring: false,
  notify: false,
});
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
