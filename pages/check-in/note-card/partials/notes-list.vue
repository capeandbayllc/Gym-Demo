<template>
  <div class="w-full">
    <button
      class="block w-full text-left bg-base-300 border border-base-content rounded-xl py-1 px-2 mb-4 duration-300 transition-all hover:bg-gradient-to-b from-base-300 to-secondary/40"
      @click="clickedNote(note)"
      :class="{ '!bg-secondary !border-neutral-content': note.completed }"
      v-for="note in notes.filter((n) =>
        notesType == 'completed' ? n.completed : !n.completed
      )"
      :key="note.id"
    >
      <div class="flex justify-between">
        <span>{{ note.title }}</span>
        <AlertButton v-model="note.alert" class="w-[250px] mt-[4px]" />
      </div>
      <div class="mt-1">
        <span class="text-xs mr-4">{{ note.date }}</span>
        <span class="text-xs mr-4">{{ note.time }}</span>
        <span class="text-xs mr-4">{{ note.creator }}</span>
      </div>
    </button>
  </div>
</template>

<script setup>
import AlertButton from "../alert-button.vue";
const props = defineProps({
  notes: Array,
  notesType: String,
});
const emit = defineEmits(["clickedNote"]);
const clickedNote = (note) => {
  emit("clickedNote", note);
};
</script>
