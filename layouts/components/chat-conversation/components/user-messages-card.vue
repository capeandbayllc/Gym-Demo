<template>
  <div
    class="user-message-card px-2 py-2 mt-2 rounded cursor-pointer"
    :class="chat.active ? 'bg-neutral-content/50' : 'bg-base-content'"
  >
    <div class="relative p-1 float-left mr-2">
      <img :src="chat.avatar" class="w-12 h-12 -lg:w-8 -lg:h-8" />
      <div
        class="rounded-full w-3 h-3 -lg:w-2 -lg:h-2 absolute right-1 bottom-1"
        :class="{
          'bg-accent-focus/80': chat.status === 'online',
          'bg-error': chat.status === 'meeting',
        }"
      ></div>
    </div>
    <div class="align-top mb-1 ml-2 mt-1">
      <div
        class="text-lg -lg:text-sm font-semibold"
        :class="{ 'text-base-300': !chat.active }"
      >
        {{ chat.name }}
        <div
          class="badge badge-lg badge-secondary rounded-full w-8 h-7 text-base-content"
          v-if="chat.active"
        >
          +2
        </div>
      </div>
      <div class="text-neutral-focus text-base -lg:text-sm">
        {{ chat.message }}
        <p
          class="flex text-sm -lg:text-xs font-semibold justify-end"
          :class="{ 'text-base-300': !chat.active }"
        >
          {{ chat.conversationAt }}
        </p>
      </div>
    </div>
  </div>
</template>
<style scoped>
.user-message-card:hover {
  @apply bg-neutral-content/50;
}
</style>
<script setup>
const props = defineProps({
  chat: {
    type: Object,
  },
});
</script>
