<template>
  <stat-card statValue="$44,000" :icon="Statistic3Icon">
    <div class="px-3">
      <p class="text-[0.9rem] text-white w-full text-center">
        Recent Statistics
      </p>
      <div class="grid grid-cols-3 mt-3 -mb-3">
        <div class="text-center">
          <div class="-mb-3">
            <div class="statistics-number">475</div>
            <div class="text-[0.8rem]">Increase</div>
          </div>
          <chart :color="'#1d89ee'" />
        </div>
        <div class="text-center">
          <div class="-mb-3">
            <div class="statistics-number">220</div>
            <div class="text-[0.8rem]">Spend</div>
          </div>
          <chart :color="'#e7ab00'" />
        </div>
        <div class="text-center">
          <div class="-mb-3">
            <div class="statistics-number">471</div>
            <div class="text-[0.8rem]">Difference</div>
          </div>
          <chart :color="'#22a44e'" />
        </div>
      </div>
    </div>
  </stat-card>
</template>

<script setup>
import Chart from "./chart";
import { Statistic3Icon } from "~/components/icons";
import StatCard from "../stats-card";
</script>

<style scoped lang="postcss">
.statistics-number {
  @apply text-[1.2rem] font-normal text-warning;
}
</style>
