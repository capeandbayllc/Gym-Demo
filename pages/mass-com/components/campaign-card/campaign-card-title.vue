<template>
  <div
    class="flex flex-row justify-between items-center h-12 font-semibold px-6 text-base-content bg-secondary rounded-t-2xl"
  >
    <div class="text-xl basis-1/3">Current Campaign</div>
    <select-box
      class="text-sm basis1/3"
      :items="items"
      label="Current Campaigns"
    />
  </div>
</template>

<script setup>
const items = [
  {
    value: "current",
    label: "Current Campaigns",
  },
];
</script>
