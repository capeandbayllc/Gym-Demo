<template>
  <div class="engage-break-down-container">
    <h3>Calendar Events Breakdown</h3>
    <data-table
      :columns="columns"
      :data="data"
      :row-component="EventListItem"
      class="h-44 overflow-y-auto text-xs"
    />
  </div>
</template>
<style scoped lang="postcss">
.engage-break-down-container {
  @apply col-span-3 border border-secondary rounded p-3 pb-1;
  h3 {
    @apply text-base font-semibold;
  }
}
</style>
<script setup>
import EventListItem from "./event-list-item.vue";

const columns = [
  "Name",
  "Event Type",
  "Time",
  "Membership Type",
  "Phone",
  "Email",
  "",
];
const data = [
  {
    id: 1,
    avatar: "/account.png",
    name: "Sandy Lin",
    membership: "platinum",
    event_type: "Yoga",
    time: "0:00 PM",
    phone: "(123) 456-7890",
    email: "email@email.com",
  },
  {
    id: 2,
    avatar: "/account.png",
    name: "Randy Portis",
    event_type: "PT Training",
    time: "0:00 PM",
    phone: "(123) 456-7890",
    email: "email@email.com",
    membership: "bronze",
  },
  {
    id: 3,
    avatar: "/account.png",
    name: "Tess Hightower",
    event_type: "Yoga",
    time: "0:00 PM",
    phone: "(123) 456-7890",
    email: "email@email.com",
    membership: "gold",
  },
];
</script>
