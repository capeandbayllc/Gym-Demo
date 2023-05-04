<template>
  <card>
    <template #header>
      <h3 class="text-base-content text-xl">
        Actuals
        <span class="text-secondary font-light text-base ml-1"
          >April Focus Points</span
        >
      </h3>
    </template>
    <template #content>
      <div class="overflow-auto max-w-full max-h-[340px]">
        <div
          class="border-t my-3 border-neutral-content font-light w-full min-w-[500px]"
        >
          <div class="item" v-for="item in data" :key="i">
            <div class="col-span-4 item-detail !border-0">
              {{ item.title }}
            </div>
            <div class="col-span-3 item-detail">
              {{ item.description }}
            </div>
            <div class="col-span-2 item-detail">
              {{ item.type }}
            </div>
            <div class="col-span-3 item-detail text-xl font-semibold">
              {{ item.count }}
            </div>
          </div>
        </div>
      </div>
    </template>
  </card>
</template>

<style scoped lang="postcss">
.item {
  @apply border-b-[2px] border-neutral-content text-center py-4 grid grid-cols-12 items-center;
  .item-detail {
    @apply px-1 my-1 border-l h-[40px] border-white flex w-full justify-center items-center;
  }
}
</style>
<script setup>
import Card from "./card.vue";

const data = [
  {
    title: "Call Communication Efforts",
    description: "Monthly Call Drives",
    type: "Notes",
    count: "659",
  },
  {
    title: "Buddy Referral Focus",
    description: "BR Push",
    type: "Notes",
    count: "435",
  },
  {
    title: "PT Appt Attachment",
    description: "Assessment Penetration",
    type: "Notes",
    count: "278",
  },
  {
    title: "PT Penetration Focus",
    description: "Point of sales Attachment",
    type: "Notes",
    count: "$3,500",
  },

  {
    title: "Call Communication Efforts",
    description: "Monthly Call Drives",
    type: "Notes",
    count: "659",
  },
  {
    title: "Buddy Referral Focus",
    description: "BR Push",
    type: "Notes",
    count: "435",
  },
  {
    title: "PT Appt Attachment",
    description: "Assessment Penetration",
    type: "Notes",
    count: "278",
  },
  {
    title: "PT Penetration Focus",
    description: "Point of sales Attachment",
    type: "Notes",
    count: "$3,500",
  },
];
</script>
