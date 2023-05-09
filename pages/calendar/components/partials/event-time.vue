<template>
  <div class="!line-clamp-1 text-[0.5rem]">
    <span>{{ getTimeString(start) }}</span>
    <span v-if="end !== null"> - {{ getTimeString(end) }}</span>
  </div>
</template>

<script setup>
const props = defineProps({
  start: {
    type: Date,
  },
  end: {
    type: Date,
    default: null,
  },
});

const getTimeString = (timestamp) => {
  let hours = timestamp.getHours();
  let minutes = timestamp.getMinutes();
  let dayHalf = "AM";

  if (hours >= 12) {
    dayHalf = "PM";
    hours = hours - 12;
  } else if (hours === 0) {
    hours = 12;
  }

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }

  return `${hours}:${minutes} ${dayHalf}`;
};
</script>
