<template>
  <div
    class="lg:flex gap-4 max-w-[1000px] width-full display-flex-column mx-auto"
  >
    <div :class="modalClass" class="mx-0 mb-[20px] lg:mb-0 w-full">
      <div
        class="border border-secondary rounded-md p-4 card-details card-gradient-bg"
      >
        <div class="flex justify-between mb-4">
          <p class="text-lg font-semibold">Due Today*</p>
          <div class="w-[200px]">
            <label class="text-sm font-bold mb-2 inline-block"
              >Add Promo Code</label
            >
            <input
              class="gray-input w-full p-1 rounded-sm"
              placeholder="Add Promo"
            />
          </div>
        </div>
        <PayWithCard />
      </div>
      <slot></slot>
    </div>
    <div :class="modalClass" class="mx-0 w-full max-w-[400px]">
      <Summary />
    </div>
  </div>
</template>

<script setup>
import PayWithCard from "./pay-with-card.vue";
import PayWithChecking from "./pay-with-checking.vue";
import Summary from "./summary.vue";

const payWith = ref("checking");

const props = defineProps({
  modalClass: {
    type: String,
  },
});
</script>
<style lang="postcss">
.gray-input {
  @apply bg-base-100 w-full text-base-content py-[10px] px-[10px] outline-none rounded-[10px];
}
</style>
