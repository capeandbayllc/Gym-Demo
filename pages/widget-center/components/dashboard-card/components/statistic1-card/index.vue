<template>
  <stat-card-template
    statValue="102"
    :icon="Statistic1Icon"
    title="Statistic 1"
  >
    <div class="flex flex-col 2xl:flex-row justify-center gap-5 w-full">
      <div class="mx-auto 2xl:mx-0">
        <chart />
      </div>
      <div class="flex flex-row 2xl:flex-col gap-4 my-auto">
        <div class="status-div col-span-1">
          <div class="circled-div bg-info-content"></div>
          <span class="">Online</span>
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
  </stat-card-template>
</template>

<script setup>
import Chart from "./chart";
import { Statistic1Icon } from "~/components/icons";
import StatCardTemplate from "../../../stat-card-template";
</script>
