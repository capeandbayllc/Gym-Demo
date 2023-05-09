<template>
  <setting-base-card>
    <h2>Marketing</h2>
    <div>
      <div class="mb-2">Receive Emails:</div>
      <select
        class="select select-sm w-full rounded-sm"
        v-model="messagingForm.receiveEmail"
      >
        <option disabled selected>Emails</option>
        <option v-for="opt in receiveEmail" :value="opt.value" :key="opt.value">
          {{ opt.label }}
        </option>
      </select>
    </div>
    <div>
      <div class="mb-2">Receive SMS:</div>
      <select
        class="select select-sm w-full rounded-sm"
        v-model="messagingForm.receiveSMS"
      >
        <option disabled selected>Text</option>
        <option v-for="opt in receiveSMS" :value="opt.value" :key="opt.value">
          {{ opt.label }}
        </option>
      </select>
    </div>
    <div>
      <div class="mb-2">Receive Direct Mails:</div>
      <select
        class="select select-sm w-full rounded-sm"
        v-model="messagingForm.receiveDirectMail"
      >
        <option disabled selected>Direct Mails</option>
        <option
          v-for="opt in receiveDirectMail"
          :value="opt.value"
          :key="opt.value"
        >
          {{ opt.label }}
        </option>
      </select>
    </div>
    <div>
      <div class="mb-2">Receive Push Notifications:</div>
      <select
        class="select select-sm w-full rounded-sm"
        v-model="messagingForm.receivePushNotifications"
      >
        <option disabled selected>Push Notifications</option>
        <option
          v-for="opt in receivePushNotifications"
          :value="opt.value"
          :key="opt.value"
        >
          {{ opt.label }}
        </option>
      </select>
    </div>
    <div
      class="col-span-3 -lg:col-span-1 -md:col-span-2 mx-auto w-full text-center"
    >
      <Button secondary size="sm" class="capitalize">Save</Button>
    </div>
  </setting-base-card>
</template>
<script setup>
import SettingBaseCard from "./setting-base-card.vue";

const messagingForm = ref({
  receiveEmail: "",
  receiveDirectMail: "",
  receiveSMS: "",
  receivePushNotifications: "",
});

const receiveEmail = [
  {
    value: "yes",
    label: "Yes",
  },
  {
    value: "no",
    label: "No (Opt Out)",
  },
];

const receiveDirectMail = [
  {
    value: "yes",
    label: "Yes",
  },
  {
    value: "no",
    label: "No (Opt Out)",
  },
];

const receiveSMS = [
  {
    value: "yes",
    label: "Yes",
  },
  {
    value: "no",
    label: "No (Opt Out)",
  },
];

const receivePushNotifications = [
  {
    value: "yes",
    label: "Yes",
  },
  {
    value: "no",
    label: "No (Opt Out)",
  },
];
</script>
