<template>
  <div class="event-list font-extralight">
    <div v-for="item in data" :key="item.id" class="event-item">
      <div class="event-description">{{ item.due }}</div>
      <div class="event-detail">
        <div class="font-normal">{{ item.title }}</div>
        <book-checker v-model="form[item.id]" />
      </div>
    </div>
  </div>
</template>
<style scoped lang="postcss">
.event-list {
  @apply flex flex-col gap-5;
  .event-item {
    @apply flex flex-col text-sm w-full;
    .event-detail {
      @apply flex flex-row items-center justify-between border-b border-t border-secondary py-1.5 -mt-2;
    }
    .event-description {
      @apply text-xs border-secondary pb-2;
    }
  }
}
</style>
<script setup>
import { ref } from "vue";
import BookChecker from "./book-checker.vue";

const props = defineProps({
  data: {
    type: Array,
    default: [],
  },
});

const form = ref({});
for (let item of props.data) {
  form.value[item.id] = item.booked;
}
</script>
