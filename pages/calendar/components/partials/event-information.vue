<template>
  <section
    class="max-w-3xl w-full bg-neutral border-2 border-secondary p-4 h-full"
  >
    <SectionHeader title="Event Title">
      <template #subtitle>
        <div class="mt-2 flex gap-4 items-center">
          <span>Thursday, January 5</span>
          <span class="h-2 w-2 bg-white rounded-full"></span>
          <span>00:00 AM - 00:00 AM</span>
        </div>
      </template>
    </SectionHeader>

    <div class="mt-6">
      <BtnGroup v-model="selectedStatus" :choices="buttonChoices" />
    </div>
  </section>
</template>

<script setup>
import SectionHeader from "./section-header.vue";
import BtnGroup from "./btn-group.vue";

const props = defineProps({
  event: {
    type: [Object, null],
    default: null,
  },
});

const buttonChoices = ["is_over", "show", "personal", "physical"];

const selectedStatus = ref("is_over");
</script>
