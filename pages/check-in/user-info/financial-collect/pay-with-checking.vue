<template>
  <div class="mb-4">
    <label class="text-sm font-bold mb-2 inline-block">Name on Account</label>
    <input
      type="text"
      class="gray-input w-full py-1 px-2 rounded-sm text-base-300"
    />
  </div>
  <div class="flex items-center mb-4">
    <label class="mr-4">Type of Account*</label>
    <div class="flex items-center mr-4">
      <!-- <input type="checkbox" class="toggle toggle-info mr-2" checked /> -->
      <div
        class="toggle-custom"
        :class="{ 'toggle-active': checkingAccountCheck }"
      >
        <div @click="changeCheckingAccountCheck" class="circle"></div>
        <div @click="changeCheckingAccountCheck" class="line"></div>
      </div>
      Checking
    </div>
    <div class="flex items-center">
      <!-- <input type="checkbox" class="toggle toggle-info mr-2" checked /> -->
      <div
        class="toggle-custom"
        :class="{ 'toggle-active': savingsAccountCheck }"
      >
        <div @click="changeSavingsAccountCheck" class="circle"></div>
        <div @click="changeSavingsAccountCheck" class="line"></div>
      </div>
      Savings
    </div>
  </div>
  <div class="mb-4">
    <label class="text-sm font-bold mb-2 inline-block">Bank Name</label>
    <input
      type="text"
      class="gray-input w-full py-1 px-2 rounded-sm text-base-300"
    />
  </div>
  <div class="mb-4">
    <label class="text-sm font-bold mb-2 inline-block"
      >Bank Routing Number*</label
    >
    <input
      type="password"
      class="gray-input w-full py-1 px-2 rounded-sm text-base-300"
    />
  </div>
  <div class="mb-6">
    <label class="text-sm font-bold mb-2 inline-block"
      >Bank Account Number</label
    >
    <input
      type="text"
      class="gray-input w-full py-1 px-2 rounded-sm text-base-300"
    />
  </div>
  <div class="mb-4 text-right">
    <img
      src="/checkin/check_scaled_for_resolution.png"
      class="w-[300px] inline-block"
    />
  </div>
  <div>
    <label class="w-full text-sm font-bold mb-2 inline-block mb-4"
      >Billing address</label
    >
    <div class="flex items-center gap-3">
      <div
        class="toggle-custom"
        :class="{ 'toggle-active': billingAdressCheck }"
      >
        <div @click="changeBillingAdressCheck" class="circle"></div>
        <div @click="changeBillingAdressCheck" class="line"></div>
      </div>
      <span class="align-middle"> Same as home address </span>
    </div>
  </div>
</template>
<script setup>
const checkingAccountCheck = ref(false);
const changeCheckingAccountCheck = () => {
  checkingAccountCheck.value = !checkingAccountCheck.value;
};

const savingsAccountCheck = ref(false);
const changeSavingsAccountCheck = () => {
  savingsAccountCheck.value = !savingsAccountCheck.value;
};

const billingAdressCheck = ref(true);
const changeBillingAdressCheck = () => {
  billingAdressCheck.value = !billingAdressCheck.value;
};
</script>
