<!-- <template>
    <card-widget
        buttonSecondary
        buttonText="GO"
        class="!h-[290px]"
        title="Statistics 1"
    >
        <template #summary> </template>
        <template #content>
            <div
                class="flex flex-row justify-center pr-5 items-center py-2 pt-3"
            >
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
        </template>
    </card-widget>
</template>

<script setup>
import Chart from "./chart";
import CardWidget from "../../../card-widget.vue";
import { Statistic1Icon } from "~/components/icons";
</script> -->

<template>
  <stat-card-template
    title="Statistics 1"
    :hasSummary="false"
    :hideStatValue="true"
    buttonText="Go"
    cardClasses="!h-[290px]"
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
