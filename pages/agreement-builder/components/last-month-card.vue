<template>
  <simple-card title="Last Month (November)">
    <div class="last-month-card-content">
      <div class="last-month-docs">
        <div v-for="doc in docs" :key="doc.id" class="last-month-doc">
          <normal-doc class="mb-2 mx-4" />
          <div class="text-xs">{{ doc.name }}</div>
          <div class="doc-date">{{ doc.date }}</div>
        </div>
      </div>
    </div>
  </simple-card>
</template>
<style scoped lang="postcss">
.last-month-card-content {
  @apply flex flex-row pt-4 pb-2 px-9 bg-transparent items-center w-full;
  .last-month-docs {
    @apply grid grid-cols-7 gap-5 mr-6;
    .last-month-doc {
      @apply flex flex-col items-center;
      .doc-date {
        @apply text-secondary text-[9px];
      }
    }
  }
}
</style>
<script setup>
import NormalDoc from "../../document/components/normal-doc.vue";
const docs = [
  {
    id: 1,
    name: "Practice",
    date: "April 9, 2022",
  },
  {
    id: 1,
    name: "Dawn Freesh",
    date: "April 9, 2022",
  },
  {
    id: 1,
    name: "Tim Masterson",
    date: "April 9, 2022",
  },
  {
    id: 1,
    name: "Otwibly Kaloohn",
    date: "April 9, 2022",
  },
  {
    id: 1,
    name: "Rich Malt",
    date: "April 9, 2022",
  },
  {
    id: 1,
    name: "Crystal Muse",
    date: "April 9, 2022",
  },
  {
    id: 1,
    name: "Campagne O'Neil",
    date: "April 9, 2022",
  },
];
</script>
