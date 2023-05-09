<template>
  <div
    class="flex flex-col justify-between h-full py-1"
    v-if="arg.view.type !== 'dayGridMonth'"
  >
    <div class="flex flex-col gap-1 justify-between">
      <div class="!line-clamp-1">
        {{ arg.event.title }}
      </div>
      <EventTime :start="arg.event.start" :end="arg.event.end" />
      <EventDescription
        :start="arg.event.start"
        :end="arg.event.end"
        :description="arg.event.extendedProps.description"
      />
    </div>
    <EventUsers :users="arg.event.extendedProps.users" />
  </div>
  <div v-else>
    <div class="flex flex-row gap-1 text-[0.6rem] ml-1">
      <span
        class="w-[10px] h-[10px] my-auto rounded-full"
        :style="{
          backgroundColor: arg.backgroundColor,
        }"
      ></span>
      <span>{{ arg.event.title }}</span>
    </div>
  </div>
</template>
<script setup>
import EventUsers from "./event-users.vue";
import EventTime from "./event-time.vue";
import EventDescription from "./event-description.vue";
const props = defineProps({
  arg: {
    type: Object,
  },
});
</script>
