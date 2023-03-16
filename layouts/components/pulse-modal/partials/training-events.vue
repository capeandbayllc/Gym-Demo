<template>
  <ul class="flex flex-col gap-4 max-h-56 overflow-y-scroll">
    <li
      class="border-secondary border-2 bg-primary/50 grid grid-cols-[5rem_1fr_5rem] py-2 px-4 gap-4 justify-between items-center rounded-xl"
      v-for="(event, ix) in events"
      :key="ix"
    >
      <div class="aspect-square overflow-hidden p-4">
        <img
          :src="event.profile_photo_path"
          class="w-full h-auto object-cover bg-cover rounded-xl"
        />
      </div>
      <div class="flex flex-col">
        <span class="font-semibold">{{ event.name }}</span>
        <span class="text-sm">{{ event.time }}</span>
        <span class="text-sm">{{ event.subject }}</span>
      </div>
      <button
        class="bg-secondary rounded-xl px-4 py-1 h-min w-max"
        @click="$emit('view', event.id)"
      >
        View
      </button>
    </li>
  </ul>
</template>

<style scoped>
ul::-webkit-scrollbar {
  @apply hidden;
}
</style>

<script setup>
const props = defineProps({
  events: {
    type: Array,
    default: [],
  },
});
</script>
