<template>
  <div class="grid grid-cols-6 gap-y-8 gap-x-5 py-8">
    <statistic1 class="statistic-item" />
    <statistic2 class="statistic-item" />
    <statistic3 class="statistic-item" />
    <statistic4 class="col-span-6" />
  </div>
  <div class="grid grid-cols-10 gap-y-8 gap-x-5 py-8">
    <statistic5 class="col-span-12 lg:col-span-4" />
    <statistic6
      :data="[31, 80, 68, 109, 92]"
      title="Income"
      :last-week="-0.07"
      class="col-span-12 md:col-span-3"
    />
    <statistic7 class="col-span-12 lg:col-span-3" />
  </div>
  <div class="grid grid-cols-6 gap-y-8 gap-x-5 py-8">
    <statistic8 class="col-span-6" />
    <statistic9 class="statistic-item" />
    <statistic10 class="statistic-item" />
    <statistic11 class="statistic-item" />
  </div>
  <div class="grid grid-cols-6 gap-y-8 gap-x-5 py-8">
    <statistic12 class="statistic-item" />
    <statistic13 class="statistic-item" />
    <statistic14 class="statistic-item" />
  </div>
</template>

<style scoped lang="postcss">
.statistic-item {
  @apply col-span-6 md:col-span-3 xl:col-span-2;
}
</style>

<script setup>
import statistic1 from "./components/statistic1.vue";
import statistic2 from "./components/statistic2.vue";
import statistic3 from "./components/statistic3.vue";
import statistic4 from "./components/statistic4.vue";
import statistic5 from "./components/statistic5.vue";
import statistic6 from "./components/statistic6.vue";
import statistic7 from "./components/statistic7.vue";
import statistic8 from "./components/statistic8.vue";
import statistic9 from "./components/statistic9.vue";
import statistic10 from "./components/statistic10.vue";
import statistic11 from "./components/statistic11.vue";
import statistic12 from "./components/statistic12.vue";
import statistic13 from "./components/statistic13.vue";
import statistic14 from "./components/statistic14.vue";
</script>
