<template>
  <div class="text-left">
    <h3 class="text-base-content text-xl">Reports Fields</h3>
    <div class="grid lg:grid-cols-2 gap-4">
      <actuals-card />
      <monthly-business-card />
    </div>
  </div>
</template>

<script setup>
import ActualsCard from "./partials/actuals-card.vue";
import MonthlyBusinessCard from "./partials/monthly-business-card.vue";
</script>
