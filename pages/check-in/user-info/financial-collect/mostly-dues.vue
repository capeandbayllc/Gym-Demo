<template>
  <div
    class="lg:flex gap-4 max-w-[1000px] width-full display-flex-column mx-auto"
  >
    <div :class="modalClass" class="mx-0 mb-[20px] lg:mb-0 w-full">
      <div
        class="border border-secondary rounded-md p-4 card-details card-gradient-bg"
      >
        <div class="flex justify-between mb-4">
          <p class="text-lg font-semibold">Mostly due*</p>
        </div>
        <div class="flex gap-3 justify-between items-center mb-3">
          <Button
            size="sm"
            class="border-neutral-content bg-transparent text-sm normal-case hover:!bg-secondary hover:text-base-content hover:!border-secondary rounded-[10px]"
            :class="{
              '!bg-secondary text-base-content !border-secondary':
                payWith == 'checking',
            }"
            @click="payWith = 'checking'"
            >Pay with Checking</Button
          >
          <Button
            size="sm"
            class="border-neutral-content bg-transparent text-sm normal-case hover:!bg-secondary hover:text-base-content hover:!border-secondary rounded-[10px]"
            :class="{
              '!bg-secondary text-base-content !border-secondary':
                payWith == 'card',
            }"
            @click="payWith = 'card'"
            >Pay with Card</Button
          >
          <custom-toggle v-model="defaultMembershipPaymentCheck" title="" />
          <p class="text-sm">Make this my default membership payment.</p>
        </div>
        <PayWithChecking v-if="payWith == 'checking'" />
        <PayWithCard v-if="payWith == 'card'" />
      </div>
      <div class="flex justify-end">
        <button
          class="text-neutral-content hover:text-secondary mt-3 mr-3 -mb-2"
        >
          Add a secondary method of payment
        </button>
      </div>
      <slot></slot>
    </div>
    <div :class="modalClass" class="mx-0 w-full max-w-[400px]">
      <Summary />
    </div>
  </div>
</template>

<script setup>
import CustomToggle from "~/components/toggle/custom-toggle.vue";
import PayWithCard from "./pay-with-card.vue";
import PayWithChecking from "./pay-with-checking.vue";
import Summary from "./summary.vue";

const payWith = ref("card");

const props = defineProps({
  modalClass: {
    type: String,
  },
});

const defaultMembershipPaymentCheck = ref(false);
</script>
<style lang="postcss">
.gray-input {
  @apply bg-base-100 w-full text-base-content py-[10px] px-[10px] outline-none rounded-[10px];
}
</style>
