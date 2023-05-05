<template>
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
</template>

<style scoped lang="postcss">
.select-box {
  @apply bg-transparent text-base-content rounded border border-secondary !w-[180px];
}
</style>

<script setup>
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
</script>
