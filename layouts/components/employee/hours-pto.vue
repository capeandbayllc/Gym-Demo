<template>
  <div
    id="Timesheet"
    class="border border-[#0075c9] p-4 overflow-auto max-h-[388px] rounded-[19px]"
  >
    <div class="flex items-center space-x-12 mt-4">
      <div>
        <label for="period">Period:</label>
        <div class="flex items-center space-x-5 mt-3">
          <FormTimeInput />
          <span>To</span>
          <FormTimeInput />
        </div>
      </div>
    </div>
    <div class="mt-10">
      <h3 class="text-[25px] font-bold">Hours Worked</h3>
    </div>
    <div class="flex flex-col justify-center w-full items-center">
      <div class="flex items-center space-x-3">
        <button
          class="border border-[#0075c9] rounded-xl h-[30px] px-2 font-light capitalize"
          :class="{ 'bg-[#0075c9]': tab.id === activeTab }"
          v-for="tab in tabs"
          :key="tab.id"
          @click="setActive(tab.id)"
        >
          {{ tab.text }}
        </button>
      </div>
      <div class="flex justify-center items-end">
        <button class="text-[#0075c9]" @click="$emit('gotoAddHours')">Add Hours</button>
        <CircleProgress label="Hours" value="40" />
        <button class="text-[#0075c9]" @click="$emit('gotoTimesheet')">
          Timesheet
        </button>
      </div>
    </div>
    <div class="mt-10 flex items-center space-x-4">
      <h3 class="text-[25px] font-semiBold">Paid Time Off</h3>
      <button
        class="border border-[#0075c9] rounded-xl h-[30px] px-2 font-light capitalize"
      >
        Request PTO
      </button>
    </div>
    <div class="flex items-center justify-center mt-6">
      <LabelBox
        v-for="category in categories"
        :key="category.id"
        :label="category.label"
        :value="category.value"
      />
    </div>
    <div>
      <HoursList :columns="columns" :items="hoursData" filter="id" />
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import CircleProgress from "./components/circle-progress.vue";
import HoursList from "./components/hours-list.vue";
import LabelBox from "./components/label-box.vue";
let activeTab = ref(1);
const tabs = ref([
  {
    id: 1,
    text: "day",
  },
  {
    id: 2,
    text: "pay period",
  },
]);
const categories = ref([
  {
    id: 1,
    label: "pending",
    value: 10,
  },
  {
    id: 2,
    label: "earn today",
    value: 5,
  },
  {
    id: 3,
    label: "total available",
    value: 40,
  },
]);
const columns = [
  {
    label: "Hours Asking",
    class: "text-secondary text-center ",
  },
  {
    label: "Date(s)",
    class: "text-secondary text-center",
  },
  {
    label: "Date Submitted",
    class: "text-secondary text-center",
  },
  {
    label: "Status",
    class: "text-secondary text-center",
  },
];
const hoursData = [
  {
    id: 1,
    hoursAsking: "5.00",
    dates: "01.02.2023",
    dateSubmitted: "Monday 01.03.2023",
    status: "pending",
  },
  {
    id: 2,
    hoursAsking: "4.00",
    dates: "01.03.2023",
    dateSubmitted: "Tuesday 01.03.2023",
    status: "pending",
  },
];

const setActive = (id) => {
  activeTab.value = id;
};
</script>
<style></style>
