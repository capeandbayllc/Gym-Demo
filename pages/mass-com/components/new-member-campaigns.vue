<template>
  <simple-card title="New Member Campaigns 2021" class="-lg:mb-4">
    <div class="flex flex-row pt-4 pb-2 px-9 items-center w-full">
      <div class="grid w-full grid-cols-7 gap-5 mr-6 -lg:flex overflow-x-auto">
        <div
          v-for="doc in docs"
          :key="doc.id"
          class="flex flex-col items-center"
        >
          <normal-doc class="mb-2" />
          <div class="text-xs">{{ doc.name }}</div>
          <div class="text-secondary text-xs scale-75">{{ doc.date }}</div>
        </div>
      </div>
      <arrow-icon direction="right" class="h-fit cursor-pointer" />
    </div>
  </simple-card>
</template>

<script setup>
import NormalDoc from "./normal-doc.vue";
import { AddIcon, ArrowIcon } from "~~/components/icons";
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
