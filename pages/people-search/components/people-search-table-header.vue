<template>
  <div
    class="border-b-2 border-primary text-secondary mb-4 pb-4 px-4 mr-4 grid grid-cols-[1fr_1fr_8rem_1fr_0.5fr_0.5fr_4rem]"
  >
    <span>Name</span>

    <div class="flex items-center">
      <input
        type="checkbox"
        class="checkbox checkbox-secondary bg-white mr-4"
      />
      <span>Segment</span>
    </div>

    <div class="flex items-center gap-2 px-4">
      <AlertIcon class="text-secondary" />
      <span>Alerts</span>
    </div>

    <span class="text-center">Communication</span>
    <span class="px-4">Location</span>
    <span class="text-center">Type</span>
    <span class="text-center">Info</span>
  </div>
</template>

<script setup>
import { library } from "@fortawesome/fontawesome-svg-core";
import { faAlignLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { AlertIcon } from "~~/components/icons";

library.add(faAlignLeft);
const props = defineProps({
  columns: {
    type: Array,
    default: [],
  },
});
</script>
