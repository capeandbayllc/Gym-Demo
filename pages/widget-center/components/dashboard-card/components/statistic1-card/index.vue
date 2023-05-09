<template>
  <card-widget class="slim-text" title="Statistics 1">
    <template #summary>
      <div class="total-sale">
        <statistic1-icon class="statistic-icon" /> 102
      </div>
    </template>
    <template #content>
      <div class="flex flex-col justify-center items-center rounded-xl">
        <div class="flex flex-row justify-between gap-5">
          <statistic1-icon class="statistic-icon" />
          <span class="my-auto text-2xl font-normal tracking-wider"> 102</span>
        </div>
        <div class="flex flex-row gap-3">
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
        <div>
          <chart />
        </div>
      </div>
    </template>
  </card-widget>
</template>

<style scoped lang="postcss">
.slim-text {
  @apply tracking-wider font-light;
}
</style>

<script setup>
import Chart from "./chart";
import CardWidget from "../../../card-widget.vue";
import { Statistic1Icon } from "~/components/icons";
</script>
