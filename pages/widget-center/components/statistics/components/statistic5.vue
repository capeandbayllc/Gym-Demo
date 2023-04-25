<template>
  <card
    title="Statistic 1"
    class="bg-base-300"
    :options="{ favorite: false, collapse: false }"
  >
    <template #content>
      <div class="bar-container">
        <div v-for="(item, k) in data" :key="k">
          <div
            v-show="item.date"
            class="h-0"
            :class="
              item.dateColor ? `text-${item.dateColor}` : 'text-secondary'
            "
          >
            <p class="text-2xl font-semibold mb-[-10px]">
              {{ dateFormat(item.date, "d") }}
            </p>
            <p>{{ dateFormat(item.date, "mmm") }}</p>
          </div>
          <div
            class="bar-item"
            :class="`${item.bg}`"
            :style="`margin-top: ${250 - item.height}px; height: ${
              item.height
            }px;`"
          >
            <div class="text-base-content mb-1 text-xs">{{ item.price }}</div>
          </div>
        </div>
      </div>
    </template>
  </card>
</template>
<style scoped lang="postcss">
.bar-container {
  @apply p-7 grid grid-cols-5 gap-3 h-[300px];
  .bar-item {
    @apply w-full rounded-xl text-base-content flex items-end justify-center;
  }
}
</style>
<script setup>
import dateFormat from "dateformat";

const data = [
  {
    bg: "bg-secondary/30",
    date: "",
    price: "",
    height: 150,
  },
  {
    bg: "bg-secondary/60",
    dateColor: "secondary/60",
    date: "2020-04-28",
    price: "",
    height: 100,
  },
  {
    bg: "bg-secondary",
    dateColor: "white",
    date: "2020-05-25",
    price: "+ $325.23",
    height: 250,
  },
  {
    bg: "bg-secondary/60",
    dateColor: "secondary/60",
    date: "2020-06-30",
    price: "",
    height: 140,
  },
  {
    bg: "bg-secondary/30",
    date: "",
    price: "",
    height: 60,
  },
];
</script>
