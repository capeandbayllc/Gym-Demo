<template>
  <div class="my-3">
    <div class="flex justify-between">
      <select-box
        :items="[]"
        label="Goal Type"
        :showSearch="false"
        :showClearList="false"
        class="ml-[-8px] !w-[110px]"
      >
      </select-box>
      <div class="flex gap-5">
        <div class="underline flex items-center gap-2">
          Start Date
          <calendar-icon />
        </div>
        <div class="underline flex items-center gap-2">
          End Date
          <calendar-icon />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import ClubDateLabel from "~/layouts/components/pulse-modal/partials/club-date-label.vue";
import { CalendarIcon } from "~/components/icons";
</script>
