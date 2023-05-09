<template>
  <div
    class="w-[100vw] lg:w-[50vw] max-w-[750px] border border-secondary bg-[#191919]/[0.9] p-5 rounded-lg tracking-tighter font-light"
  >
    <div
      class="bg-gradient-to-b from-[#2f72c4]/[0.4] to-[#191919] p-5 rounded-lg border border-secondary flex flex-col gap-5"
    >
      <h3 class="text-[1.1rem]">Payment Methods</h3>
      <div
        class="w-[90%] bg-[#191919]/[0.9] mx-auto p-10 rounded-lg border flex flex-col"
      >
        <div class="flex flex-row gap-3 mb-10">
          <button
            class="pos-button payment-method-option-button"
            :class="{
              'bg-secondary': paymentMethod === option,
            }"
            v-for="option in paymentMethodOptions"
          >
            {{ option }}
          </button>
        </div>
        <div class="flex flex-row gap-3 mb-5">
          <button
            class="pos-button card-options-button"
            :class="{
              'bg-white text-black': secondaryOption === option,
            }"
            v-for="option in paymentMethodCardOptions"
          >
            {{ option }}
          </button>
        </div>
        <img src="~/assets/payment-method-cards.png" class="w-[75%]" />
        <div class="flex flex-col gap-5 mt-5">
          <PosInput :name="'Cardholder Name'" :required="false">
            <input
              class="pos-input"
              placeholder="Cardholder Name"
              name="price"
              id="price"
              type="text"
              v-model="paymentMethodForm.name"
            />
          </PosInput>
          <PosInput :name="'Card Number'" :required="false">
            <input
              class="pos-input"
              placeholder="XXXX XXXX XXXX XXXX"
              name="price"
              id="price"
              type="number"
              v-model="paymentMethodForm.number"
            />
          </PosInput>
          <div class="flex flex-row gap-5">
            <PosInput
              :name="'Expiration Date (MM/YY)'"
              :required="false"
              width="w-[calc(50%-1.25rem/2)]"
            >
              <input
                class="pos-input"
                placeholder="MM/YY"
                name="price"
                id="price"
                type="text"
                v-model="paymentMethodForm.expiration"
              />
            </PosInput>
            <PosInput
              :name="'CVV (3 digits)'"
              :required="false"
              width="w-[calc(50%-1.25rem/2)]"
            >
              <input
                class="pos-input"
                placeholder="XXX"
                name="price"
                id="price"
                type="number"
                v-model="paymentMethodForm.cvv"
              />
            </PosInput>
          </div>
          <PosInput :name="'Postal Code'" :required="false">
            <input
              class="pos-input"
              placeholder="Postal Code"
              name="price"
              id="price"
              type="number"
              v-model="paymentMethodForm.postal_code"
            />
          </PosInput>
        </div>
      </div>
      <div class="flex flex-row justify-end gap-5 pr-8">
        <span
          class="text-[#aaa] hover:text-secondary pos-style-transition cursor-pointer my-auto"
          @click="resetInputState"
        >
          Cancel
        </span>
        <button class="pos-add-button" @click="addProduct">Save</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import PosInput from "./pos-input.vue";
const paymentMethodOptions = ["Card", "Cash", "ACH", "Membership Credit"];
const paymentMethodCardOptions = ["Credit", "Debit", "Gift"];

const emit = defineEmits(["cancel-payment-method-add"]);
const paymentMethod = ref("Card");
const secondaryOption = ref("Credit");
const paymentMethodForm = ref({
  name: null,
  number: null,
  expiration: null,
  cvv: null,
  postal_code: null,
});

const resetInputState = () => {
  paymentMethodForm.value = {
    name: null,
    number: null,
    expiration: null,
    cvv: null,
    postal_code: null,
  };
  emit("cancel-payment-method-add");
};
</script>

<style scoped>
.pos-button {
  @apply px-4 py-1 text-[0.8rem] border rounded-md pos-style-transition;
}

.payment-method-option-button {
  @apply border-secondary hover:bg-secondary;
}

.card-options-button {
  @apply hover:text-black hover:bg-white;
}

.pos-style-transition {
  @apply transition-all duration-300 ease-linear;
}

.pos-input {
  @apply rounded p-2 font-light tracking-wide text-[0.9rem] text-black w-full;
}

.pos-add-button {
  @apply px-3 py-0.5 bg-secondary border-secondary/[0] border-2 rounded-md hover:border-secondary/[1] hover:bg-transparent pos-style-transition;
}
</style>
