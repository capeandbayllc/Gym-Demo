<template>
  <div
    class="flex flex-col border border-secondary rounded-2xl px-7 py-6 card-gradient-bg"
  >
    <div class="text-6xl text-secondary font-bold">267</div>
    <div class="pb-6 text-sm">-1485 (-0.2%) this week</div>
    <div class="pb-4">Total audience breakdown</div>
    <div class="flex flex-col space-y-6">
      <div v-for="(item, ndx) in audience" :key="ndx">
        <div class="pb-2">{{ item.category }}</div>
        <div class="text-xl text-secondary font-bold pb-1">
          {{ item.value }}
        </div>
        <div class="text-sm">{{ item.change }}</div>
      </div>
    </div>
    <div class="text-secondary text-lg mt-9 pl-3 cursor-pointer">
      See all audiences
    </div>
  </div>
</template>

<script setup>
const audience = [
  {
    category: "Member base (ALL)",
    value: "246,999",
    change: "+10 (+0.0%) this week",
  },
  {
    category: "Leads",
    value: "156,199",
    change: "-3165 (-2.0%) this week",
  },
  {
    category: "Member Cancellations",
    value: "100,550",
    change: "No changes this week",
  },
];
</script>
