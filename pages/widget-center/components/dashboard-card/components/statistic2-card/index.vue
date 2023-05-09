<template>
  <stat-card statValue="$18,000" :icon="Statistic2Icon">
    <div class="mb-3">
      <h5 class="text-[1rem]">Most Recent Location</h5>
      <p class="text-base-content text-[0.8rem]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id commodi
        reprehenderit aspernatur quibusdam minus.
      </p>
    </div>
  </stat-card>
</template>

<script setup>
// import Chart from "./chart";
import { Statistic2Icon } from "~/components/icons";
import StatCard from "../stats-card";
</script>
