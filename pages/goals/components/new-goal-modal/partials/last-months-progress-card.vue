<template>
  <card>
    <template #header>
      <h3 class="text-base-content text-secondary text-lg font-semibold">
        Last Month's Progress
      </h3>
    </template>
    <template #content>
      <div class="items-container">
        <div v-for="(item, i) in data" :key="i" class="item">
          <div class="w-[190px]">
            <p class="text-secondary text-sm">{{ item.title }}</p>
            <p class="text-xs">{{ item.description }}</p>
          </div>
          <div>
            <p class="text-lg">{{ item.count }}</p>
          </div>
        </div>
      </div>
    </template>
  </card>
</template>

<style setup lang="postcss">
.items-container {
  @apply overflow-auto max-w-full mt-1;
  > div:last-child {
    @apply border-b-0;
  }
  .item {
    @apply flex justify-between items-center border-b border-neutral-content/60 py-2;
  }
}
</style>

<script setup>
import Card from "./card.vue";

const data = [
  { title: "Average packages and sessions sold", count: 34 },
  { title: "Average sessions trained", count: 78 },
  {
    title: "Average trainers per location with average clients per trainer",
    count: 9,
  },
  { title: "Total active clients", count: 1290 },
  { title: "Total delinquent clients", count: 256 },
  {
    title: "Cancellations (Units and $)",
    description: "Net change from new to cancellations",
    count: "34/55%",
  },
];
</script>
