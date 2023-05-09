<template>
  <card title="Attrition" class="attrition-card">
    <template #summary>
      <div class="total-sale">$12,000</div>
    </template>
    <template #content>
      <div class="attrition-info">
        <div class="total-sale">$12,000</div>
        <div class="attrition-list">
          <div v-for="item in attritions" :key="item.id">
            <h2 class="text text-secondary">{{ item.title }}</h2>
            <p>{{ item.content }}</p>
          </div>
        </div>
        <go-btn />
      </div>
    </template>
  </card>
</template>
<style scoped lang="postcss">
.attrition-card {
  @apply w-80 h-[300px];
  .total-sale {
    @apply text-secondary font-bold text-5xl;
  }
  .attrition-info {
    @apply flex flex-col;
    .total-sale {
      @apply border-b pb-2 border-base-content/50;
    }
    .attrition-list {
      @apply flex flex-col gap-4 mt-4 h-32 overflow-y-auto;
    }
  }
}
</style>
<script setup>
import GoBtn from "./go-btn.vue";

const attritions = [
  {
    id: 1,
    title: "Goal One",
    content: "Net Change Membership Revenue",
  },
  {
    id: 2,
    title: "Goal Two",
    content: "Net Change Membership Revenue",
  },
  {
    id: 3,
    title: "Goal Three",
    content: "Net Change Membership Revenue",
  },
];
</script>
