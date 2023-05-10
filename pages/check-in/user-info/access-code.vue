<template>
  <user-info-card>
    <h2>Access Code</h2>
    <div
      v-for="(item, index) in accessCode"
      :key="item.key"
      :class="index == 0 ? 'col-span-2' : 'col-span-1'"
      class="access-code-item"
    >
      <div class="mb-2">{{ item.label }}</div>
      <input
        :class="item.class"
        class="w-full p-1 rounded-sm"
        v-model="accessCodeObj[item.key]"
      />
    </div>
  </user-info-card>
</template>
<script setup>
import UserInfoCard from "./user-info-card.vue";

const accessCodeObj = ref({});
const accessCode = [
  {
    key: "access-code",
    label: "Access Code",
    class: "neutral-input",
  },
  {
    key: "failed-attempts",
    label: "Failed Attempts",
    class: "neutral-input",
  },
];
</script>
