<template>
  <div class="grid grid-cols-6 gap-3 mb-2 -lg:flex -lg:text-xs">
    <select-box
      :items="categoriesType"
      label="Categories"
      secondary
      class="col-start-2"
    >
    </select-box>
    <select-box :items="notificationType" label="Notifications" secondary>
    </select-box>
    <select-box :items="alertsType" secondary label="Alert Types"> </select-box>
    <select-box :items="urgencyType" secondary label="Urgency"> </select-box>
    <select-box :items="locationType" secondary label="Locations"> </select-box>
  </div>
</template>
<script setup>
const categoriesType = [
  {
    value: "1",
    label: "Categories ####",
  },
  {
    value: "2",
    label: "Categories ####",
  },
  {
    value: "3",
    label: "Categories ####",
  },
];
const notificationType = [
  {
    value: "1",
    label: "Term",
  },
  {
    value: "2",
    label: "Open Ended",
  },
  {
    value: "3",
    label: "Paid in Full",
  },
];
const alertsType = [
  {
    value: "1",
    label: "Alerts ####",
  },
  {
    value: "2",
    label: "Alerts ####",
  },
  {
    value: "3",
    label: "Alerts ####",
  },
];
const urgencyType = [
  {
    value: "1",
    label: "Urgency  ####",
  },
  {
    value: "2",
    label: "Online",
  },
  {
    value: "3",
    label: "Urgency  ####",
  },
];
const locationType = [
  {
    value: "1",
    label: "Location ####",
  },
  {
    value: "2",
    label: "Location ####",
  },
  {
    value: "3",
    label: "Location ####",
  },
  {
    value: "4",
    label: "Location ####",
  },
  {
    value: "5",
    label: "Location ####",
  },
];
</script>
