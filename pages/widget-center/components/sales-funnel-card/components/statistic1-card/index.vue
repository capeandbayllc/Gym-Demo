<template>
  <stat-card-template
    title="Statistics 1"
    :hasSummary="false"
    :hideStatValue="true"
    buttonText="Go"
    cardClasses="!h-[290px]"
    contentClasses="!h-[10rem]"
    buttonSecondary
  >
    <div class="flex flex-row justify-center pr-5 items-center py-2 pt-3">
      <div>
        <chart />
      </div>
      <div class="flex flex-col gap-3">
        <div class="status-div col-span-1">
          <div class="circled-div bg-secondary-content"></div>
          <span>Leads (23%)</span>
        </div>
        <div class="status-div col-span-1">
          <div class="circled-div bg-neutral-content"></div>
          <span>Calls (34%)</span>
        </div>
        <div class="status-div col-span-1">
          <div class="circled-div bg-secondary-focus"></div>
          <span>Meetings (54%)</span>
        </div>
        <div class="status-div col-span-1">
          <div class="circled-div bg-secondary"></div>
          <span>Success (16%)</span>
        </div>
      </div>
    </div>
  </stat-card-template>
</template>

<script setup>
import Chart from "./chart";
import StatCardTemplate from "../../../stat-card-template";
</script>
