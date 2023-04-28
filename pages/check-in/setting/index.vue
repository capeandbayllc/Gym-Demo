<template>
  <div class="setting-option-group">
    <button
      :class="{ 'bg-base-300 border-base-300': messagingPrefs }"
      @click="messagingPrefs = !messagingPrefs"
    >
      Messaging Prefs
    </button>
    <button
      :class="{ 'bg-base-300 border-base-300': dataPrefs }"
      @click="dataPrefs = !dataPrefs"
    >
      Data Prefs
    </button>
    <button :class="{ 'bg-base-300 border-base-300': qr }" @click="qr = !qr">
      Identification/QR/ Fingerprint
    </button>
    <button
      :class="{ 'bg-base-300 border-base-300': credit }"
      @click="credit = !credit"
    >
      Credit
    </button>
  </div>
  <Messaging />
  <Marketing />
  <UpdatePassword />
  <Details />
</template>
<script setup>
import Messaging from "./messaging.vue";
import Marketing from "./marketing.vue";
import UpdatePassword from "./updatePassword.vue";
import Details from "./details.vue";

const messagingPrefs = ref(false);
const dataPrefs = ref(false);
const qr = ref(false);
const credit = ref(false);
</script>
<style scope lang="postcss">
.setting-option-group {
  @apply text-center my-4;
  button {
    @apply border border-base-content rounded-md px-4 py-1 mx-2 mb-2 transition;
  }
}
</style>
