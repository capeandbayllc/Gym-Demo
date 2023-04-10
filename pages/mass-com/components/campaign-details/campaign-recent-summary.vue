<template>
  <div
    class="flex flex-col border border-secondary p-4 mt-4 bg-base-300 rounded-2xl"
  >
    <div class="text-lg font-bold mb-4">Campaign Name - {{ data.title }}</div>
    <div class="flex flex-row flex-wrap">
      <div class="data-sect">
        <div>
          <div>Start Date</div>
          <div>2022-07-01</div>
        </div>
        <div>
          <div>Open Rate</div>
          <div>12.3%</div>
        </div>
        <div>
          <div>Clicks per unique open</div>
          <div>0.8%</div>
        </div>
        <div>
          <div>Successful deliveries</div>
          <div>167780</div>
        </div>
        <div>
          <div>Total opens</div>
          <div>3278</div>
        </div>
      </div>
      <div class="data-sect">
        <div>
          <div>End Date</div>
          <div>2022-07-31</div>
        </div>
        <div>
          <div>Total clicks</div>
          <div>2156</div>
        </div>
        <div>
          <div>Orders</div>
          <div>0</div>
        </div>
        <div>
          <div>Average order revenue</div>
          <div>$0.00</div>
        </div>
        <div>
          <div>Total revenue</div>
          <div>$0.00</div>
        </div>
      </div>
      <div class="items-center justify-center data-sect">
        <div>Requests blocked</div>
        <div
          class="text-6xl text-base-content font-bold bg-error w-fit rounded-2xl py-2 px-4 mt-4"
        >
          267
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="postcss">
.data-sect {
  @apply flex flex-col justify-between w-full h-full md:w-1/3 md:px-10 px-2;
}

.data-sect > div {
  @apply flex flex-row flex-wrap justify-between;
}
</style>

<script setup>
const props = defineProps({
  data: {
    type: Object,
    default: {},
  },
});
</script>
