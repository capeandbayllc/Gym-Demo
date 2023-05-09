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
        class="w-full h-80 rounded mt-3 focus:outline-none text-base-300/80 resize-none"
        placeholder="Paragraph Notes"
      ></textarea>
    </div>

    <div class="flex">
      <label class="mb-4 block">
        <UploadIcon
          class="h-12 w-12 bg-secondary rounded-full text-center relative z-10 text-secondary block mx-auto cursor-pointer"
        />
        <input
          type="file"
          class="absolute z-0 top-0 left-0 hidden"
          ref="fileInput"
          @change="handleFileSelect"
          multiple
        />
      </label>
      <div class="flex flex-col mx-2">
        <div class="flex flex-wrap gap-2">
          <div
            v-for="(file, index) in note.files"
            :key="file.name"
            class="bg-white border border-neutral-content/40 rounded-lg p-2 flex items-center"
          >
            <span class="mr-2">{{ file.name }}</span>
            <button @click="removeFile(index)">
              <font-awesome-icon
                class="mt-2 text-neutral-content hover:text-base-100 cursor-pointer"
                :icon="['fas', 'times']"
                size="sm"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="text-base-100 space-y-2">
      <div class="flex flex-wrap">
        <div class="flex flex-wrap mt-[2px] gap-1 mr-2">
          <div
            v-for="(category, i) in note.categories"
            :key="i"
            class="rounded-full px-2 text-base-content bg-secondary flex items-center"
          >
            <button class="mr-1" @click="deleteCategory(i)">
              <font-awesome-icon :icon="['fas', 'times']" size="sm" />
            </button>
            <span>{{ category }}</span>
          </div>
        </div>
        <div>
          <input
            class="focus:outline-none max-w-[120px]"
            placeholder="Add categories"
            v-model="newCategory"
            @keydown.enter="addCategory"
          />
          <button
            class="font-bold text-secondary"
            v-if="newCategory.length"
            @click="addCategory"
          >
            <font-awesome-icon :icon="['fas', 'plus']" size="md" />
          </button>
        </div>
      </div>
      <div class="flex flex-wrap">
        <div class="flex flex-wrap mt-[2px] gap-1 mr-2">
          <div
            v-for="(tag, i) in note.tags"
            :key="i"
            class="rounded-full px-2 text-base-content bg-secondary flex items-center"
          >
            <button class="mr-1" @click="deleteTag(i)">
              <font-awesome-icon :icon="['fas', 'times']" size="sm" />
            </button>
            <span>{{ tag }}</span>
          </div>
        </div>
        <div>
          <input
            class="focus:outline-none max-w-[120px]"
            placeholder="Add tag"
            v-model="newTag"
            @keydown.enter="addTag"
          />
          <button
            class="font-bold text-secondary"
            v-if="newTag.length"
            @click="addTag"
          >
            <font-awesome-icon :icon="['fas', 'plus']" size="md" />
          </button>
        </div>
      </div>
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
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPlusCircle, faTimes } from "@fortawesome/free-solid-svg-icons";
import AlertButton from "../alert-button.vue";
import CustomToggle from "~/components/toggle/custom-toggle.vue";
import { UploadIcon } from "@/components/icons";
library.add(faTimes);
library.add(faPlusCircle);
const props = defineProps({
  activeNote: Object,
});
const emit = defineEmits(["saveNote", "deleteNote"]);

const newCategory = ref("");
const newTag = ref("");

const addCategory = () => {
  const categoryExists = note.value.categories.find(
    (category) => category === newCategory.value
  );
  if (!categoryExists) {
    note.value.categories.push(newCategory.value);
  }
  newCategory.value = "";
};

const deleteCategory = (index) => {
  note.value.categories.splice(index, 1);
};

const addTag = () => {
  const tagExist = note.value.tags.find((tag) => tag === newTag.value);
  if (!tagExist) {
    note.value.tags.push(newTag.value);
  }
  newTag.value = "";
};

const deleteTag = (index) => {
  note.value.tags.splice(index, 1);
};

const handleFileSelect = (event) => {
  const files = event.target.files;
  for (let i = 0; i < files.length; i++) {
    note.value.files.push(files[i]);
  }
};

const removeFile = (index) => {
  note.value.files.splice(index, 1);
};

const note = ref({
  title: "",
  content: "",
  completed: false,
  alert: false,
  categories: [],
  tags: [],
  files: [],
});
watchEffect(() => {
  note.value = { ...props.activeNote };
});
const saveNote = () => {
  newTag.value = "";
  emit("saveNote", note.value);
};
const deleteNote = () => {
  newTag.value = "";
  emit("deleteNote", note.value);
};
</script>
