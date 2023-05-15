<template>
  <stat-card-template statValue="27" :icon="Statistic4Icon" title="Statistic 4">
    <div
      class="flex flex-row justify-center items-center py-2 rounded-xl border-base-content"
    >
      <div class="slim-text -ml-5">
        <chart />
      </div>
    </div>
  </stat-card-template>
</template>

<script setup>
import Chart from "./chart";
import { Statistic4Icon } from "~/components/icons";
import StatCardTemplate from "../../../stat-card-template";
</script>
