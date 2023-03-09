<template>
  <section
    ref="offerUpElement"
    class="max-w-3xl w-full bg-neutral border-2 border-secondary p-4 h-full rounded-md pointer-events-auto"
  >
    <SectionHeader :title="event.title">
      <template #subtitle>
        <div class="mt-2 flex gap-4 items-center">
          <span
            >{{ weekdays[new Date(event.start).getDay()] }},
            {{ months[new Date(event.start).getMonth()] }}
            {{ new Date(event.start).getDate() }}</span
          >
          <span class="h-2 w-2 bg-white rounded-full"></span>
          <span>00:00 AM - 00:00 AM</span>
        </div>
      </template>
    </SectionHeader>

    <p>hello</p>
  </section>
</template>

<script setup>
import SectionHeader from "./section-header.vue";

const emit = defineEmits(["outclick"]);

const ensureClickBoundary = (e) => {
  if (!eventInfoElement.value.contains(e.target)) {
    emit("outclick");
  }
};

onMounted(() => {
  window.addEventListener("click", ensureClickBoundary, true);
});

onUnmounted(() => {
  window.removeEventListener("click", ensureClickBoundary, true);
});

const props = defineProps({
  event: {
    type: [Object, null],
    default: null,
  },
});
</script>
