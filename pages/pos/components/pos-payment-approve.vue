<template>
  <div
    class="w-[40vw] border border-secondary rounded-lg p-5 px-10 text-[0.9rem] tracking-wide font-light bg-[#292929]"
  >
    <h2 class="mb-5">Purchase Confirmation</h2>
    <div class="border p-5 flex flex-col gap-5 rounded-lg bg-[#191919]/[0.9]">
      <span class="mx-auto text-green-500 text-[1rem]">Approved</span>
      <h2 class="mx-auto text-[1.5rem] mb-2">Thank you for your purchase!</h2>
      <div
        class="px-5 py-2 bg-secondary border rounded-lg text-center text-[2.5rem] mx-auto min-w-[50%] tracking-tight font-normal"
      >
        $ {{ amount }}
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  amount: {
    type: String,
    default: "0.00",
  },
});

const emit = defineEmits(["show-cart-invoice"]);
</script>
