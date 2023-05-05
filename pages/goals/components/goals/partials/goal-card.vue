<template>
  <div class="card-container">
    <div>
      <div class="card-title-container">
        <h5 class="text-xl font-semibold">Goal {{ goal.count }}</h5>
        <div class="flex items-center gap-3">
          <com-chat-icon :count="2" />
          <com-sms-icon />
        </div>
      </div>
      <div class="border-b border-neutral-content">
        <h4 class="text-2xl font-semibold text-secondary pb-2">
          {{ goal.title }}
        </h4>
      </div>
      <div class="py-3">
        <p>{{ goal.description }}</p>
      </div>
    </div>
    <div>
      <div class="font-bold flex gap-4 py-3">
        <p
          :class="{
            'text-error': goal.priority == 'High',
            'text-warning': goal.priority == 'Medium',
            'text-success': goal.priority == 'Low',
          }"
        >
          {{ goal.priority }}
        </p>
        <p
          :class="{
            'text-success': goal.status == 'Repeat',
            'text-base-content': goal.status == 'Never',
          }"
        >
          {{ goal.status }}
        </p>
      </div>
      <div class="flex justify-between">
        <select-box
          :items="goalTypes"
          label="Goal Type"
          :showSearch="false"
          :showClearList="false"
          class="select-box"
        >
        </select-box>
        <Button secondary="" size="sm"> Edit </Button>
      </div>
    </div>
  </div>
</template>
<style scoped lang="postcss">
.card-container {
  @apply overflow-visible w-full h-[335px] border border-error rounded-2xl bg-base-300 p-5 flex flex-col justify-between;

  .card-title-container {
    @apply flex justify-between items-center;

    .card-title {
      @apply font-bold;
    }
  }
}
.select-box {
  @apply bg-base-content text-base-300 rounded border border-base-content !w-[150px];
}
</style>
<script setup>
import ComChatIcon from "~/pages/report/components/cards/communication-card/com-chat.vue";
import ComSmsIcon from "~/pages/report/components/cards/communication-card/com-sms.vue";

const props = defineProps({
  goal: {
    type: Object,
  },
});

const goalTypes = [
  { label: "Company", value: 1 },
  { label: "DMA", value: 2 },
  { label: "Location", value: 3 },
  { label: "Employee", value: 4 },
];
</script>
