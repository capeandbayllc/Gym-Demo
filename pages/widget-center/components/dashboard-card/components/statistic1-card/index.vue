<template>
  <stat-card statValue="102" :icon="Statistic1Icon">
    <div class="flex flex-row justify-between">
      <div>
        <chart />
      </div>
      <div class="flex flex-col gap-4 my-auto">
        <div class="status-div col-span-1">
          <div class="circled-div bg-info-content"></div>
          <span>Online</span>
        </div>
        <div class="status-div col-span-1">
          <div class="circled-div bg-primary"></div>
          <span>Instore</span>
        </div>
        <div class="status-div col-span-1">
          <div class="circled-div bg-neutral-content"></div>
          <span>Other</span>
        </div>
      </div>
    </div>
  </stat-card>
</template>

<script setup>
import Chart from "./chart";
import { Statistic1Icon } from "~/components/icons";
import StatCard from "../stats-card";
</script>
