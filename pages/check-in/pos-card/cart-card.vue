<template>
  <div class="cart-card">
    <h3>Fit Club Juice Bar</h3>
    <div v-for="item in data" :key="item.id" class="cart-item">
      <div class="flex flex-row items-center">
        <span class="text-2xl font-semibold w-8 flex">{{ item.amount }}</span>
        {{ item.detail }}
      </div>
      <div class="align-end">${{ item.price }}</div>
    </div>
    <divider class="border-secondary" />
    <div class="sub-total">
      <div>Subsub-total</div>
      <div>$49.00</div>
    </div>
    <div class="sub-total">
      <div>Sales tax</div>
      <div>$9.00</div>
    </div>
    <div class="total">
      <div>Total</div>
      <div>$58.00</div>
    </div>
    <Button accent class="m-auto">Purchase</Button>
  </div>
</template>
<style scoped lang="postcss">
.cart-card {
  @apply flex flex-col border border-secondary rounded px-4 py-6 mt-2 h-full;
  h3 {
    @apply text-2xl font-semibold pb-8;
  }
  .cart-item {
    @apply flex flex-row justify-between items-center pb-4;
  }
  .sub-total {
    @apply flex flex-row justify-between font-semibold text-xl;
  }
  .total {
    @apply flex flex-row justify-between font-semibold text-2xl bg-secondary rounded py-3 px-2 my-6;
  }
}
</style>
<script setup>
const data = [
  {
    id: 1,
    amount: 1,
    detail: "Sport Drink, Orange 16 oz.",
    price: 3.67,
  },
  {
    id: 2,
    amount: 1,
    detail: "Sports Towel",
    price: 6.34,
  },
  {
    id: 3,
    amount: 2,
    detail: "Logo Tee, Large, Green",
    price: 38.99,
  },
];
</script>
