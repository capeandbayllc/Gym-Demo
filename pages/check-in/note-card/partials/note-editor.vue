<template>
  <div class="w-full px-5 py-4 bg-base-content rounded-xl text-base-300/60">
    <div class="flex item-center justify-between">
      <h5 class="text-xl font-semibold">
        <input
          class="focus:outline-none text-base-300/80"
          type="text"
          placeholder="New Note Name"
          v-model="note.title"
        />
      </h5>
      <p class="font-semibold">{{ note.date }}</p>
    </div>
    <div class="p-5">
      <h5 class="text-xl font-semibold">Paragraph Notes</h5>
      <textarea
        v-model="note.content"
        class="w-full h-80 rounded my-3 focus:outline-none text-base-300/80 resize-none"
        placeholder="Paragraph Notes"
      ></textarea>
    </div>
  </div>
  <div class="flex justify-between mt-4">
    <div class="flex items-center gap-4">
      <AlertButton
        :alert-outline="true"
        alert-created-label="Alert Created"
        v-model="note.alert"
        class="w-[250px] mr-4"
      />
      <div class="flex items-center gap-1">
        <p class="text-sm">Mark complete</p>
        <custom-toggle class="!mb-0" v-model="note.completed" />
      </div>
    </div>
    <div>
      <Button size="sm" class="normal-case mr-4" ghost @click="deleteNote"
        >Delete</Button
      >
      <Button size="sm" class="normal-case" secondary @click="saveNote"
        >Save</Button
      >
    </div>
  </div>
</template>

<script setup>
import AlertButton from "../alert-button.vue";
import CustomToggle from "~/components/toggle/custom-toggle.vue";
const props = defineProps({
  activeNote: Object,
});
const emit = defineEmits(["saveNote", "deleteNote"]);
const note = ref({
  title: "",
  content: "",
  completed: false,
  alert: false,
});
watchEffect(() => {
  note.value = { ...props.activeNote };
});
const saveNote = () => {
  emit("saveNote", note.value);
};
const deleteNote = () => {
  emit("deleteNote", note.value);
};
</script>
