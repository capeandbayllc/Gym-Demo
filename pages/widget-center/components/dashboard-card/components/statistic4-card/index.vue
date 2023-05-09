<template>
  <stat-card statValue="27" :icon="Statistic4Icon">
    <div
      class="flex flex-row justify-center items-center py-2 rounded-xl border-base-content"
    >
      <div class="slim-text -ml-5">
        <chart />
      </div>
    </div>
  </stat-card>
</template>

<script setup>
import Chart from "./chart";
import { Statistic4Icon } from "~/components/icons";
import StatCard from "../stats-card";
</script>
