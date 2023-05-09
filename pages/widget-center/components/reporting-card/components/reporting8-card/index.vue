<!-- [
<template>
    <card-widget buttonSecondary buttonText="GO" title="Statistics 8">
        <template #summary> </template>
        <template #content> </template>
    </card-widget>
</template>

<script setup>
import CardWidget from "../../../card-widget.vue";
import FunnelIcon from "~/pages/report/components/cards/sales-funnel-card/funnel-icon.vue";
</script>
] -->

<template>
  <stat-card-template title="Statistics 8" buttonText="Go" buttonSecondary>
    <div>
      <div class="flex flex-col gap-3 text-base-content">
        <div
          v-for="i in 7"
          :key="i"
          class="flex justify-between rounded-full bg-indigo-400/20 w-full px-3 py-1 text-[0.9rem]"
        >
          <div>
            <p class="">Name {{ i }}</p>
          </div>
          <div class="text-white/70"><span class="">$</span>18,000</div>
        </div>
      </div>
    </div>
  </stat-card-template>
</template>

<script setup>
import StatCardTemplate from "../../../stat-card-template";
</script>
