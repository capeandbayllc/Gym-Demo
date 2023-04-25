<template>
  <div class="task-date-switcher">
    <week-switcher @on-update="changeWeek" direction="left" />
    <date-switcher-card
      v-for="(day, ndx) in daysOfWeek"
      :key="ndx"
      :date="day.getDate()"
      :ndx="ndx"
      :active="
        currentDate.getDate() === day.getDate() &&
        currentDate.getMonth() === day.getMonth() &&
        currentDate.getFullYear() === day.getFullYear()
      "
      @click="() => handleCardClick(ndx)"
    />
    <week-switcher @on-update="changeWeek" direction="right" />
  </div>
</template>
<style scoped>
.task-date-switcher {
  @apply flex flex-row space-x-4 px-4 items-center;
}
</style>
<script setup>
import { ref, computed } from "vue";
import DateSwitcherCard from "./DateSwitcherCard.vue";
import WeekSwitcher from "./WeekSwitcher.vue";
const props = defineProps({
  selectedDate: {
    type: Date,
    default: new Date(),
  },
  startOfTheWeek: {
    type: Date,
    default: new Date(),
  },
  setSelectedDate: {
    type: Function,
  },
  setStartOfTheWeek: {
    type: Function,
  },
});

const changeWeek = (sign) => {
  let start = new Date(props.startOfTheWeek);
  start.setDate(start.getDate() + sign * 7);
  props.setStartOfTheWeek(start);
};

const handleCardClick = (ndx) => {
  let current = new Date(props.startOfTheWeek);
  current.setDate(current.getDate() + ndx);
  props.setSelectedDate(current);
};

const daysOfWeek = computed({
  get() {
    let week = [];
    let current = new Date(props.startOfTheWeek);
    for (var i = 0; i < 7; i++) {
      week.push(new Date(current));
      current.setDate(current.getDate() + 1);
    }
    return week;
  },
});

const currentDate = computed({
  get() {
    return props.selectedDate;
  },
});
</script>
