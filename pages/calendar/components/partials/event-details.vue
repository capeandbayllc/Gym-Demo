<template>
  <section
    ref="eventDetailsElement"
    class="bg-neutral py-4 px-8 rounded-md border-2 border-secondary max-w-2xl w-full pointer-events-auto"
  >
    <SectionHeader :title="event.title">
      <template #subtitle>
        <div class="mt-2 flex gap-4 items-center">
          <span class="capitalize"
            >{{ weekdays[new Date(event.start).getDay()] }},
            {{ months[new Date(event.start).getMonth()] }}
            {{ new Date(event.start).getDate() }}</span
          >
          <span class="h-2 w-2 bg-white rounded-full"></span>
          <span
            >{{ new Date(event.start).getHours() }}:{{
              new Date(event.start).getMinutes()
            }}
            - 00:00 AM</span
          >
        </div>
      </template>
    </SectionHeader>
    <!-- attendees? -->
    <ul class="mt-8 flex flex-col justify-center gap-4">
      <li class="flex gap-6 text-xl">
        <div class="w-6 h-6 rounded-full bg-white"></div>
        <span>{{ event.extendedProps.instructor }}</span>
      </li>
      <li class="flex gap-6 text-xl">
        <div class="w-6 h-6 rounded-full bg-white"></div>
        <span>Tampa 675</span>
      </li>
    </ul>
    <div class="flex flex-col gap-2 mt-4">
      <span>{{ event.extendedProps.description }}</span>
      <button
        type="button"
        @click="$emit('seemore')"
        class="underline self-end"
      >
        See more
      </button>
    </div>
  </section>
</template>

<script setup>
import SectionHeader from "./section-header.vue";
import { weekdays, months } from "../../helpers/calendar-events";

const emit = defineEmits(["outclick", "seemore"]);

const props = defineProps({
  event: {
    type: [Object, null],
    default: null,
  },
});

const eventDetailsElement = ref(null);

const ensureClickBoundary = (e) => {
  if (!eventDetailsElement.value.contains(e.target)) emit("outclick");
};

onMounted(() => {
  window.addEventListener("click", ensureClickBoundary, true);
});

onUnmounted(() => {
  window.removeEventListener("click", ensureClickBoundary, true);
});
</script>
