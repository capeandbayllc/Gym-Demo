<template>
  <stat-card-template
    statValue="$18,000"
    :icon="Statistic2Icon"
    title="Statistic 2"
  >
    <div class="mb-3">
      <h5 class="text-[1rem]">Most Recent Location</h5>
      <p class="text-base-content text-[0.8rem]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id commodi
        reprehenderit aspernatur quibusdam minus.
      </p>
    </div>
  </stat-card-template>
</template>

<script setup>
// import Chart from "./chart";
import { Statistic2Icon } from "~/components/icons";
import StatCardTemplate from "../../../stat-card-template";
</script>
