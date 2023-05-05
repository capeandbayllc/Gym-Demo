<template>
  <div class="text-left mt-8">
    <h3 class="text-base-content text-xl">Goals</h3>
    <div class="flex flex-col-reverse md:flex-row justify-between mt-3">
      <div class="flex flex-wrap gap-3 mr-3 mt-3 md:mt-0">
        <select-box
          :items="timePeriodes"
          label="Time Period"
          :showSearch="false"
          :showClearList="false"
          class="select-box z-[18]"
        >
        </select-box>
        <select-box
          :items="locations"
          label="Location"
          :showSearch="false"
          :showClearList="false"
          class="select-box z-[16]"
        >
        </select-box>
        <select-box
          :items="employees"
          label="Employee"
          :showSearch="false"
          :showClearList="false"
          class="select-box z-[14]"
        >
        </select-box>
        <select-box
          :items="inProgresses"
          label="In Progress"
          :showSearch="false"
          :showClearList="false"
          class="select-box z-[12]"
        >
        </select-box>
      </div>
      <div class="flex md:justify-end flex-wrap items-start gap-3 sm:w-[400px]">
        <Button secondary="" size="sm">
          <font-awesome-icon
            :icon="['fas', 'plus']"
            size="md"
            class="mr-1 focus:outline-none"
            tabindex="0"
            @click.prevent.stop
          />
          New
        </Button>
        <select-box
          :items="searchGoals"
          label="Search Goals"
          :showSearch="false"
          :showClearList="false"
          class="select-box z-[20]"
        >
        </select-box>
      </div>
    </div>
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-4"
    >
      <goal-card v-for="(goal, i) in goals" :key="i" :goal="goal" />
    </div>
  </div>
</template>

<style scoped lang="postcss">
.select-box {
  @apply bg-base-content text-base-300 rounded border border-base-content !w-[180px];
}
</style>

<script setup>
import GoalCard from "./partials/goal-card.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";

library.add(faPlusCircle);

const timePeriodes = [
  { label: "Time Period 1", value: 1 },
  { label: "Time Period 2", value: 2 },
  { label: "Time Period 3", value: 3 },
  { label: "Time Period 4", value: 4 },
  { label: "Time Period 5", value: 5 },
  { label: "Time Period 6", value: 6 },
];

const locations = [
  { label: "Location 1", value: 1 },
  { label: "Location 2", value: 2 },
  { label: "Location 3", value: 3 },
  { label: "Location 4", value: 4 },
  { label: "Location 5", value: 5 },
  { label: "Location 6", value: 6 },
];

const employees = [
  { label: "Employee 1", value: 1 },
  { label: "Employee 2", value: 2 },
  { label: "Employee 3", value: 3 },
  { label: "Employee 4", value: 4 },
  { label: "Employee 5", value: 5 },
  { label: "Employee 6", value: 6 },
];

const inProgresses = [
  { label: "inProgress 1", value: 1 },
  { label: "inProgress 2", value: 2 },
  { label: "inProgress 3", value: 3 },
  { label: "inProgress 4", value: 4 },
  { label: "inProgress 5", value: 5 },
  { label: "inProgress 6", value: 6 },
];

const searchGoals = [
  {
    label: "Personal Training Packages Sold",
    value: "personal_training_packages_sold",
  },
  { label: "Personal Training Revenue", value: "personal_training_revenue" },
  { label: "Membership Revenue", value: "membership_revenue" },
  { label: "Calls by Location", value: "calls_by_location" },
];

const goals = [
  {
    count: "1",
    title: "NM Unit Goal",
    description: "NM Unit Goal is all in units sold for the month.",
    priority: "High",
    status: "Repeat",
  },
  {
    count: "2",
    title: "NM Unit Goal",
    description:
      "NM EFT amount will reflect all membership sold with the Dollar amount associated with all sales.",
    priority: "High",
    status: "Repeat",
  },
  {
    count: "3",
    title: "Personal Training Units",
    description: "PT Units will reflect all new packages sold for the month.",
    priority: "Medium",
    status: "Repeat",
  },
  {
    count: "4",
    title: "PT Total Cash Revenue",
    description:
      "All cash collected pertaining to PT sales: Down payments, Monthly paid installments, Processing fees, and PIFs.",
    priority: "Low",
    status: "Never",
  },
];
</script>
