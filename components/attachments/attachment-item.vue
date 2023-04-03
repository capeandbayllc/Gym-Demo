<template>
  <li class="max-w-md min-w-[16rem] w-full h-full">
    <h6
      class="whitespace-nowrap overflow-hidden text-ellipsis text-center my-2"
    >
      {{ title }}
    </h6>
    <img :src="img" />

    <div class="flex items-center justify-center gap-4 my-4">
      <button class="text-white/50 hover:text-white" @click="$emit('edit', id)">
        edit
      </button>
      <button
        class="bg-secondary px-4 py-1 rounded-lg hover:bg-secondary/90 active:opacity-50 transition-all"
        @click="$emit('save', id)"
      >
        save
      </button>
    </div>
  </li>
</template>

<script setup>
const emit = defineEmits(["save", "edit"]);

const props = defineProps({
  title: {
    type: String,
    default: "default title",
  },
  img: {
    type: String,
    default: "/certifications.png",
  },
  id: {
    type: [Number, String],
    default: 0,
  },
});
</script>
