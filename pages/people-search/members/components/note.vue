<template>
  <div class="border-2 border-primary-content p-3 rounded-md mb-3">
    <div class="flex justify-between mb-2">
      <p class="text-lg">{{ title }}</p>

      <button
        class="bg-error text-primary-content text-sm font-semibold rounded-2xl px-2 border-2 border-primary-content"
        v-if="alert"
      >
        <font-awesome-icon icon="check" size="lg" />
        Alert
      </button>
      <button
        class="bg-primary-content text-base-300 text-sm font-semibold rounded-2xl px-2"
        v-else
      >
        Create Alert
      </button>
    </div>
    <div class="flex space-x-4 text-sm">
      <p>{{ month }}</p>
      <p>{{ time }}</p>
      <p>{{ userName }}</p>
    </div>
  </div>
</template>

<script setup>
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(faCheck);

const props = defineProps({
  title: {
    type: String,
  },
  alert: {
    type: Boolean,
    default: false,
  },
  month: {
    type: String,
  },
  time: {
    type: String,
  },
  userName: {
    type: String,
  },
});
</script>
