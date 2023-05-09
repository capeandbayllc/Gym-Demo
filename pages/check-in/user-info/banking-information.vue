<template>
  <user-info-card>
    <div class="col-span-3 py-4 px-10">
      <h2>Salary/Banking Information</h2>
      <div class="flex -md:block">
        <div class="chart w-3/5 -md:w-full -md:mb-4">
          <banking-info-cahrt :width="350" class="mx-auto" />
        </div>
        <div class="w-[40%] -md:w-full">
          <div
            v-for="(item, index) in bankingInfo"
            :key="item.key"
            class="mx-auto w-fit mb-4 -md:w-full"
          >
            <div class="mb-2">{{ item.label }}</div>
            <input
              :class="item.class"
              class="w-full p-1 rounded-sm w-64 -md:w-full"
              v-model="bankingInfoObj[item.key]"
            />
          </div>
        </div>
      </div>
    </div>
  </user-info-card>
</template>

<script setup>
import { ref } from "vue";
import bankingInfoCahrt from "./banking-info-cahrt.vue";
import UserInfoCard from "./user-info-card.vue";

const bankingInfoObj = ref({});
const bankingInfo = [
  {
    key: "gross-pay",
    label: "Gross Pay",
    class: "neutral-input",
  },
  {
    key: "class-rates",
    label: "Class Rates",
    class: "neutral-input",
  },
  {
    key: "Bonuses",
    label: "Bonuses",
    class: "neutral-input",
  },
];
</script>
