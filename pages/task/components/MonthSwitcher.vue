<template>
  <select
    name=""
    id=""
    class="text-white rounded-xl p-1 bg-secondary"
    v-model="month_value"
    @change="handleChange(month_value)"
  >
    <option value="" :key="index" selected>Month</option>

    <option v-for="(month, index) in items" :value="month" :key="index">
      {{ month }}
    </option>
  </select>
</template>
<script setup>
import { ref } from "vue";
const items = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const props = defineProps({
  onChange: {
    type: Function,
    default: () => null,
  },
  startMonth: {
    type: String,
  },
});

let month_value = items[props.startMonth.getMonth()];
const handleChange = (value) => {
  let ndx = items.indexOf(value);
  props.onChange(ndx);
};
onUpdated(() => {
  month_value = items[props.startMonth.getMonth()];
});
</script>
