<template>
  <club-card :title-icon="TicketingSystemIcon" title="Ticketing System">
    <ticket-list :columns="columns" :items="items"></ticket-list>
  </club-card>
</template>
<script setup>
import { TicketingSystemIcon } from "~~/components/icons";
import ClubCard from "../club-card.vue";
import TicketList from "./ticket-list.vue";
onMounted(async () => {
  await nextTick();
  window.dispatchEvent(new Event("resize"));
});

const columns = [
  {
    label: "Type",
    class: "text-secondary text-center w-[25%]",
  },
  {
    label: "Assignee",
    class: "text-secondary text-center w-[25%]",
  },
  {
    label: "Status",
    class: "text-secondary text-center w-[25%]",
  },
  {
    label: " ",
    class: "text-secondary text-center w-[25%]",
  },
];

const items = [
  {
    id: 1,
    type: "Alert Type",
    assignee: "Aya B.",
    status: "Open",
  },
  {
    id: 2,
    type: "Alert Type",
    assignee: "Sty S.",
    status: "Pending",
  },
  {
    id: 3,
    type: "Alert Type",
    assignee: "Henry O.",
    status: "Resolved",
  },
  {
    id: 4,
    type: "Alert Type",
    assignee: "Butch F.",
    status: "Resolved",
  },
  {
    id: 5,
    type: "Alert Type",
    assignee: "Max S.",
    status: "Resolved",
  },
];
</script>
