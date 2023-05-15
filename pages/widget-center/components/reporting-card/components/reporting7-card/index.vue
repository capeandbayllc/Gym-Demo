<template>
  <stat-card-template
    title="Statistics 7"
    statValue="$15,000"
    buttonText="Go"
    buttonSecondary
  >
    <div class="flex flex-col py-2 rounded-xl border-base-content">
      <div class="mb-3 text-[1.1rem]">April 2, 2022</div>
      <div class="w-full">
        <funnel-icon />
      </div>
      <div class="text-base-content mt-3 text-[0.7rem]">
        Lorem ipsum dolor sit amet.
      </div>
    </div>
  </stat-card-template>
</template>

<script setup>
import StatCardTemplate from "../../../stat-card-template";
import FunnelIcon from "~/pages/report/components/cards/sales-funnel-card/funnel-icon.vue";
</script>
