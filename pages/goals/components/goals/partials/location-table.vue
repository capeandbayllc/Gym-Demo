<template>
  <div class="card">
    <data-table
      class="w-full"
      :columns="columns"
      :data="data"
      :row-component="LocationTableRow"
    />
  </div>
</template>

<style scoped lang="postcss">
.card {
  @apply mt-8 overflow-auto border border-secondary rounded-2xl bg-base-300 px-8 py-5;
}
</style>

<script setup>
import LocationTableRow from "./location-table-row.vue";

const columns = [
  { title: "Location" },
  { title: "Goals" },
  { title: "Goal Amount" },
  {
    title: "3 Month Overview Amount",
    label: "Last Month⠀2 Month Prior⠀3 Months Prior",
  },
  {
    title: "3 Month Overview % to Goals",
    label: "Last Month⠀2 Month Prior⠀3 Months Prior",
  },
  { title: "Notes" },
];

const data = [
  {
    id: 1,
    location: "Location 1",
    goal: "Membership Units",
    goal_amount: "90",
    overview_amount: ["72", "93", "110"],
    overview_percent_to_goals: ["62", "85", "105"],
    notes_unread: true,
  },
  {
    id: 2,
    location: "Location 2",
    goal: "Membership $",
    goal_amount: "$2,800",
    overview_amount: ["$2,500", "$2,500", "$2,500"],
    overview_percent_to_goals: ["75", "77", "75"],
  },
  {
    id: 3,
    location: "Location 3",
    goal: "Personal Training Units",
    goal_amount: "35",
    overview_amount: ["31", "40", "32"],
    overview_percent_to_goals: ["75", "105", "111"],
  },
  {
    id: 4,
    location: "Location 4",
    goal: "Personal Training $",
    goal_amount: "$4,320",
    overview_amount: ["$4,400", "$4,400", "$4,400"],
    overview_percent_to_goals: ["105", "117", "105"],
  },
];
</script>
