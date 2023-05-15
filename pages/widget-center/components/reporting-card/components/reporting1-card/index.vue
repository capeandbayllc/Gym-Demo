<template>
  <stat-card-template
    title="Statistics 1"
    statValue="$17,000"
    buttonText="Go"
    buttonSecondary
  >
    <div
      class="flex flex-row justify-center pl-7 items-center py-2 rounded-xl border-base-content"
    >
      <div class="flex flex-col gap-3">
        <div class="status-div col-span-1">
          <div class="circled-div bg-secondary"></div>
          <span>Stat 1</span>
        </div>
        <div class="status-div col-span-1">
          <div class="circled-div bg-secondary-focus"></div>
          <span>Stat 2</span>
        </div>
        <div class="status-div col-span-1">
          <div class="circled-div bg-secondary-content"></div>
          <span>Stat 3</span>
        </div>
        <div class="col-span-1 text-sm text-secondary">
          <span class="text-secondary">Total: 100%</span>
        </div>
      </div>
      <div>
        <chart />
      </div>
    </div>
  </stat-card-template>
</template>

<script setup>
import Chart from "./chart";
import StatCardTemplate from "../../../stat-card-template";
</script>
