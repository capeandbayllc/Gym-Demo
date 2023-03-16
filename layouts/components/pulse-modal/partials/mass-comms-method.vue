<template>
  <li class="grid grid-cols-[0.8fr_1fr_0.8fr_0.8fr] py-4">
    <span class="whitespace-nowrap text-ellipsis overflow-hidden">{{
      subject
    }}</span>

    <span
      class="bg-red-500 text-white font-bold w-8 h-8 flex flex-col justify-center items-center rounded-full justify-self-center"
    >
      {{ days }}
    </span>

    <span class="justify-self-center whitespace-nowrap">{{ status }}</span>
    <button class="justify-self-center px-4" @click="$emit('view', context)">
      View
    </button>
  </li>
</template>

<style scoped>
button {
  @apply bg-secondary rounded-full;
}

li:not(:first-of-type) {
  @apply border-t border-white/50;
}
</style>

<script setup>
const props = defineProps({
  context: {
    type: String,
    default: "unique-ctx-id",
  },
  subject: {
    type: String,
    default: "Email",
  },
  days: {
    type: Number,
    default: 2,
  },
  status: {
    type: String,
    default: "Pending",
  },
});
</script>
