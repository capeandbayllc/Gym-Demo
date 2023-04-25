<template>
  <card-widget buttonSecondary buttonText="GO" title="Statistics 5">
    <template #summary>
      <div class="total-sale"><span class="total-symbol">$</span>16,000</div>
    </template>
    <template #content>
      <div class="total-sale"><span class="total-symbol">$</span>16,000</div>
      <div
        class="flex flex-row justify-center items-center py-2 mx-auto rounded-xl border border-base-content border"
      >
        <div class="flex flex-row justify-center communication-card">
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
        </div>
      </div>
    </template>
  </card-widget>
</template>

<style scoped lang="postcss">
.communication-card {
  @apply w-80;
  ::-webkit-scrollbar {
    @apply w-0 h-0;
  }
  .communication-list {
    @apply flex flex-col gap-2 h-40 overflow-y-auto text-base-content;
    .communication-item {
      @apply flex flex-row gap-4 items-center;
      .lead-name {
        @apply text-secondary text-lg flex-grow mr-4;
      }
    }
  }
}
</style>

<script setup>
import CardWidget from "../../../card-widget.vue";
import ComCalendarIcon from "~/pages/report/components/cards/communication-card/com-calendar.vue";
import ComChatIcon from "~/pages/report/components/cards/communication-card/com-chat.vue";
import ComSmsIcon from "~/pages/report/components/cards/communication-card/com-sms.vue";

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
