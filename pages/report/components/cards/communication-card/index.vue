<template>
  <card title="Communications" class="communication-card">
    <template #summary>
      <div class="communication-summary">
        <h2>77%</h2>
        <div class="font-bold leading-none">
          MTD Conversion <br />
          Percentage
        </div>
      </div>
    </template>
    <template #content>
      <div class="communication-info">
        <div class="communication-summary">
          <h2>77%</h2>
          <div class="font-bold leading-none">
            MTD Conversion <br />
            Percentage
          </div>
        </div>
        <div class="flex flex-row justify-between">
          <div class="communication-list">
            <div
              class="communication-item"
              v-for="lead in leads"
              :key="lead.id"
            >
              <span class="lead-name">{{ lead.name }}</span>
              <com-calendar-icon />
              <com-chat-icon :count="lead.count" />
              <com-sms-icon />
            </div>
          </div>
          <go-btn />
        </div>
      </div>
    </template>
  </card>
</template>
<style scoped lang="postcss">
.communication-card {
  @apply w-80;
  ::-webkit-scrollbar {
    @apply w-0 h-0;
  }
  .communication-summary {
    @apply flex flex-row items-center gap-3;
    h2 {
      @apply text-secondary text-5xl font-bold;
    }
  }
  .communication-info {
    .communication-summary {
      @apply border-b pb-2 border-base-content/50;
    }
    .communication-list {
      @apply flex flex-col gap-2 ml-4 h-40 overflow-y-auto mt-2;
      .communication-item {
        @apply flex flex-row gap-4 items-center;
        .lead-name {
          @apply text-secondary text-lg flex-grow mr-4;
        }
      }
    }
  }
}
</style>
<script setup>
import ComCalendarIcon from "./com-calendar.vue";
import ComChatIcon from "./com-chat.vue";
import ComSmsIcon from "./com-sms.vue";
import GoBtn from "../go-btn.vue";

const leads = [
  {
    id: 1,
    name: "Steve B",
    count: 2,
  },
  {
    id: 2,
    name: "Kelly A",
    count: 0,
  },
  {
    id: 3,
    name: "Nancy E",
    count: 2,
  },
  {
    id: 4,
    name: "David G",
    count: 2,
  },
  {
    id: 5,
    name: "Paul S",
    count: 2,
  },
  {
    id: 6,
    name: "Ed K",
    count: 2,
  },
  {
    id: 7,
    name: "David T",
    count: 2,
  },
];
</script>
