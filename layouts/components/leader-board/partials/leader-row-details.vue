<template>
  <tr class="py-2 h-10 border-b border-white border-opacity-50">
    <!-- rank & trend -->
    <td>
      <div class="flex gap-4">
        {{ leader.rank }} <TrendVisualization :direction="leader.trending" />
      </div>
    </td>

    <!-- name -->
    <td>{{ leader.name }}</td>

    <!-- points -->
    <td>
      <span>{{ leader.unitSold }} PTS</span>
    </td>

    <!-- details button -->
    <td>
      <button class="" @click="handleMoreDetails">
        <ArrowIcon :direction="detailsVisible ? 'down' : 'up'" />
      </button>
    </td>
  </tr>
  <template v-if="detailsVisible">
    <tr colspan="4" class="py-2 border-y-2 border-white bg-[#0074C8]/20 w-full">
      <td colspan="4">
        <div class="flex w-full min-h-[5rem]">
          <!-- score? -->
          <div class="flex flex-col items-center justify-center">
            <span
              class="bg-secondary py-6 px-4 text-4xl rounded-2xl mx-4 font-bold"
            >
              {{ leader.overall }}
            </span>
          </div>

          <!-- name and avatar -->
          <div class="flex flex-col items-center justify-center py-2">
            <p class="text-lg font-semibold mb-2 whitespace-nowrap">
              {{ leader.name }}
            </p>
            <span class="w-20">
              <img :src="leader?.avatar" class="relative" />
            </span>
          </div>

          <!-- stars/pts/class/attendance/overall -->
          <div class="flex flex-col w-full px-8 gap-4 justify-center">
            <!-- top -->
            <div class="flex gap-2 items-center">
              <span
                v-for="idx in Array(parseInt(leader.stars))"
                :key="idx"
                class="h-5 w-5 fill-yellow-500"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                  <!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                  <path
                    d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                  />
                </svg>
              </span>
              <span class="text-lg ml-4 font-semibold"
                >{{ leader.unitSold }} PTS</span
              >
            </div>

            <!-- bottom -->
            <div class="flex justify-between w-full items-center">
              <div class="detail-stats">
                <p>Classes</p>
                <p>{{ leader.classes }}</p>
              </div>
              <div class="detail-stats">
                <p>Attendance</p>
                <p>{{ leader.attendance }}</p>
              </div>
              <div class="detail-stats">
                <p>Overall</p>
                <p>{{ leader.overall }}</p>
              </div>
            </div>
          </div>
        </div>
      </td>
    </tr>
  </template>
</template>

<style>
.detail-stats {
  @apply flex flex-col gap-3 items-center;
}

.detail-stats p:last-of-type {
  @apply font-bold;
}
</style>

<script setup>
import { ArrowIcon } from "~~/components/icons";
import TrendVisualization from "./trend-visualization.vue";

const props = defineProps({
  leader: {
    type: [Object, null],
    default: null,
  },
  contextId: {
    type: String,
    default: "",
  },
});

const emit = defineEmits(["details"]);

const detailsVisible = computed(() => {
  return props.contextId === props.leader.rank; // rank as a surrogate id
});

const handleMoreDetails = () => {
  emit("details", props.leader);
};
</script>
