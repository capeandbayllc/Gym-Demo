<template>
  <simple-card title="New Member Campaigns 2021" class="-lg:mb-4">
    <div class="flex px-6 slide-docs">
      <scrollable-docs :docs="docs"></scrollable-docs>
    </div>
    <arrow-icon direction="right" class="h-fit cursor-pointer" />
  </simple-card>
</template>

<script setup>
import ScrollableDocs from "~/components/scrollable-docs.vue";
import { ArrowIcon } from "~~/components/icons";
const docs = [
  {
    id: 1,
    name: "Training Guide",
    date: "April 9, 2022",
  },
  {
    id: 1,
    name: "Onboarding",
    date: "April 9, 2022",
  },
  {
    id: 1,
    name: "Hiring Documents",
    date: "April 9, 2022",
  },
  {
    id: 1,
    name: "Job Performance",
    date: "April 9, 2022",
  },
  {
    id: 1,
    name: "Compensation",
    date: "April 9, 2022",
  },
  {
    id: 1,
    name: "Hiring Documents",
    date: "April 9, 2022",
  },
  {
    id: 1,
    name: "Compensation",
    date: "April 9, 2022",
  },
];
</script>
